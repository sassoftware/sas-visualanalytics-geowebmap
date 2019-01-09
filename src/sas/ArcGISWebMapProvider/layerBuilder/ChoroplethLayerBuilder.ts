/*
Copyright 2018 SAS Institute Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/// <amd-dependency path="dojo/Deferred" name="Deferred" />
declare const Deferred:any;

import BaseLayerBuilder from "sas/ArcGISWebMapProvider/layerBuilder/BaseLayerBuilder";
import SmartLegendHelper from "sas/ArcGISWebMapProvider/SmartLegendHelper";
import FeatureLayer from "esri/layers/FeatureLayer";
import lang from "esri/core/lang";

/**
 * Responsible for consuming incoming data from SAS Visual Analytics to create a 
 * bubble plot feature layer in a web map.
 */
class ChoroplethLayerBuilder extends BaseLayerBuilder {

    private _geoIdAttributeMap:any;
    private _geoIdFilter:any;
    private _queryServiceLayerOverride:any;

    public validateOptions():any {
        return this._validateRequiredOptions(['geoId', 'featureServiceUrl', 'featureServiceGeoId']);
    }

    public validateResults():any {

        var warning;

        // TODO: Localize warnings. 

        if (this._util.getIndexWithLabel(this._options.geoId, this._columns) < 0) {
            warning = "Data for 'geoId' could not be identified.";
        } else {
            var missingIds = Object.keys(this._geoIdAttributeMap);
            if (missingIds.length > 0) {
                warning = "Some geoIds could not be found with the feature service: " +
                    missingIds.slice(0,5).join(", ") + ((missingIds.length > 5) ? " ..." : ".");
            }
        }

        return warning;
    }

    public getGeoIdFilter():any {
        return this._geoIdFilter;
    }

    // Provided to support unit tests mocking the geometry-providing feature service.
    public _setQueryServiceLayerOverride(override:any) {
        this._queryServiceLayerOverride = override;
    }

    protected _buildFeatureLayerImpl() {
        var renderer = this._createRenderer(this._rows, this._columns);
        return this._buildChoroplethFeatureLayer(renderer, this._rows, this._columns);
    }

    private _createRenderer(rows:any[], columns:any) {

        var visualVariables:any[] = [];
        var minMax:any;
        var renderer:any;

        if (this._util.hasColorCategory(this._options.color, columns)) {
            renderer = {
                type: "unique-value",
                field: this._util.getNameWithLabel(this._options.color, columns),
                defaultSymbol: {
                    type: "simple-fill",  // autocasts as new SimpleMarkerSymbol()
                    color: "blue",
                    style: "solid",
                    outline: {
                        width: 0.5,
                        color: this._options.outline
                    }
                },
                uniqueValueInfos: this._util.generateUniqueVals(columns, rows, this._options),
                visualVariables: visualVariables
            };
        } else {
            renderer = {
                type: "simple",
                symbol: {
                    type: "simple-fill",
                    color: this._options.colorMax,
                    outline: {
                        color: this._options.outline,
                        width: 0.5
                    }
                },
                visualVariables: visualVariables
            };
        }

        if (!this._util.hasColorCategory(this._options.color, columns) && this._options.color) {
            var colorColumnName = this._util.getNameWithLabel(this._options.color, columns);
            var colorIndex = this._util.getIndexWithLabel(this._options.color, columns);
            minMax = this._util.findMinMax(rows,colorIndex);
            renderer.visualVariables.push({
                type: "color",
                field: colorColumnName,
                stops: [
                {
                  value: minMax[0],
                  color: this._options.colorMin
                },
                {
                  value: minMax[1],
                  color: this._options.colorMax
                }]
            });
            if (this._options.useSmartLegends)
                new SmartLegendHelper().expandTwoPartColorRange(visualVariables[visualVariables.length - 1].stops);
        }

        return renderer;
    }

    private _buildChoroplethFeatureLayer(renderer:any, rows:any[], columns:any[]) {

        var featureLayerReady = new Deferred();

        var graphics = this._createGraphics(); // this._createGraphics(columns, rows);  // MAP TODO: Was this cruft?  If so, adjust parent sig?
        var fields = this._createFields(); // this._createFields(columns);  // MAP TODO: Was this cruft?
                    
        // Build a list of VA-supplied attributes mapped by GeoID.

        var geoIdColumnName = this._util.getNameWithLabel(this._options.geoId, columns);
        this._geoIdAttributeMap = {}; 
        graphics.forEach((graphic:any) => {
            this._geoIdAttributeMap[graphic.attributes[geoIdColumnName]] = graphic.attributes;
        });

        // Add a where clause if requesting only one ID.  This was found to speed
        // browsing-by-area.  It's not always better, though, since the browser
        // caches responses; so an unfiltered query is usually never requeried.
        // On the other hand, unfiltered queries on some feature services can be
        // punishing.  

        if (!this._options.featureServiceWhere && graphics.length === 1) {
            this._geoIdFilter = 
                this._options.featureServiceGeoId + 
                " IN (" + 
                this._util.sqlEscape(Object.keys(this._geoIdAttributeMap)).join() + 
                ")";
        } else {
            this._geoIdFilter = null;
        }

        // Fetch _all_ the choropleth geometries, requesting only the attributes 
        // necessary to join the rows to the IDs.  Potential optimizations: 
        // Cache geometries.  Implement paging.

        var queryLayer:any;
        if (this._queryServiceLayerOverride) {
            queryLayer = this._queryServiceLayerOverride;
        } else {
                queryLayer = new FeatureLayer({
                    url: this._options.featureServiceUrl,
                    objectIdField: this._util.getObjectIdFieldName(), 
                    spatialReference: {
                        wkid: 4326
                    }
            });
        }
        
        var query:any = queryLayer.createQuery();
        query.outFields = [this._options.featureServiceGeoId]; // Note: ["*"] Gets _all_ attributes, which noticeably slows performance.
        query.outSpatialReference = {wkid: 4326};
        if (this._options.featureServiceWhere)
            query.where = this._options.featureServiceWhere;
        else if (this._geoIdFilter)
            query.where = this._geoIdFilter;
        if (!isNaN(this._options.featureServiceMaxAllowableOffset))
            query.maxAllowableOffset = this._options.featureServiceMaxAllowableOffset;

        queryLayer.queryFeatures(query).then((results:any) => {

            // Join the data to the geometries.

            var joinedFeatures:any[] = [];
            results.features.forEach((feature:any) => {

                // VA attributes, mapped by _options.geoId, are joined to the feature layer geometries 
                // by _options.featureLayerGeoId.

                var dataMatch = this._geoIdAttributeMap[feature.attributes[this._options.featureServiceGeoId]];  

                if (dataMatch) {
                    for (var key in dataMatch) {
                        if (dataMatch.hasOwnProperty(key))
                            feature.attributes[key] = dataMatch[key];
                    }
                    joinedFeatures.push(feature);
                    delete this._geoIdAttributeMap[feature.attributes[this._options.featureServiceGeoId]]
                }

            });

            // Build the feature layer from the geometries joined with the data.

            var viewLayer:any = new FeatureLayer({
                id: this._util.getSASFeatureLayerId(),
                title: this._options.title,
                source: joinedFeatures, 
                fields: fields, 
                objectIdField: this._util.getObjectIdFieldName(), 
                renderer: renderer, 
                spatialReference: lang.clone(results.spatialReference),
                // Note: there are ArcGIS 4.6 hit-test related problems with SceneViews with elevation mode "on-the-ground"
                geometryType: "polygon",
                popupTemplate: this._createGenericUnformattedPopupTemplate(columns)
            });
            // viewLayer.then((layer:any)=>{
            //     // MAP TODO: Is this even needed anymore?
            //     // See https://community.esri.com/message/693120-re-sceneview-source-polygons-no-popup?commentID=693120#comment-693120
            //     // To enable popups.
            //     layer.createQuery = function(){
            //         var q = layer.__proto__.createQuery.call(layer); // eslint-disable-line no-proto
            //         q.outFields = null;
            //         q.where = null;
            //         return q;
            //     }
            //     return layer;
            // });

            // The FeatureLayer is ready to be added to a map.
            featureLayerReady.resolve(viewLayer);

            return viewLayer;

        }, (e:any)=>{ featureLayerReady.reject(e); });

        // Note: We cannot return the FeatureLayer directly for two reasons:
        // (1) It is not yet built.  (2) It is itself a promise--a promise
        // that does not resolve before we add it to the map.
        // Instead, we return a promise that the feature layer is _ready_
        // to be added to a map.

        return featureLayerReady.promise;

    }
}
export default ChoroplethLayerBuilder;