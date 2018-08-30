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

/**
 * Responsible for consuming incoming data from SAS Visual Analytics to create a 
 * choropleth plot feature layer in a web map.
 */
define([
    "esri/layers/FeatureLayer",
    "esri/core/lang",
    "sas/ArcGISWebMapProvider/layerBuilder/BaseLayerBuilder",
    "sas/ArcGISWebMapProvider/SmartLegendHelper",
    "dojo/Deferred",
    "dojo/_base/declare"
], function(FeatureLayer, lang, BaseLayerBuilder, SmartLegendHelper, Deferred, declare){

    var _geoIdAttributeMap;

    return declare(BaseLayerBuilder, {

        _buildFeatureLayerImpl: function () {
            var renderer = this._createRenderer(this._rows, this._columns);
            return this._buildChoroplethFeatureLayer(renderer, this._rows, this._columns);
        }, 

        _createRenderer: function (rows, columns) {

            var visualVariables = [];
            var minMax;
            var renderer;

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
        },

        _buildChoroplethFeatureLayer: function(renderer, rows, columns) {

            var featureLayerReady = new Deferred();

            var graphics = this._createGraphics(columns, rows);
            var fields = this._createFields(columns);
                        
            // Build a list of VA-supplied attributes mapped by GeoID.

            var geoIdColumnName = this._util.getNameWithLabel(this._options.geoId, columns);
            _geoIdAttributeMap = {}; 
            graphics.forEach(function(graphic){
                _geoIdAttributeMap[graphic.attributes[geoIdColumnName]] = graphic.attributes;
            });

            // Add a where clause if requesting only one ID.  This was found to speed
            // browsing-by-area.  It's not always better, though, since the browser
            // caches responses; so an unfiltered query is usually never requeried.
            // On the other hand, unfiltered queries on some feature services can be
            // punishing.  

            var whereClause;

            if (!this._options.featureServiceWhere && graphics.length === 1) {
                whereClause = 
                    this._options.featureServiceGeoId + 
                    " IN (" + 
                    this._util.sqlEscape(Object.keys(_geoIdAttributeMap)).join() + 
                    ")";
            }

            // Fetch _all_ the choropleth geometries, requesting only the attributes 
            // necessary to join the rows to the IDs.  Potential optimizations: 
            // Cache geometries.  Implement paging.

            var queryLayer = new FeatureLayer({
                url: this._options.featureServiceUrl,
                objectIdField: this._util.getObjectIdFieldName(), 
                spatialReference: {
                    wkid: 4326
                }
            });
            
            var query = queryLayer.createQuery();
            query.outFields = [this._options.featureServiceGeoId]; // Note: ["*"] Gets _all_ attributes, which noticeably slows performance.
            query.outSpatialReference = {wkid: 4326};
            if (this._options.featureServiceWhere)
                query.where = this._options.featureServiceWhere;
            else if (whereClause)
                query.where = whereClause;
            if (!isNaN(this._options.featureServiceMaxAllowableOffset))
                query.maxAllowableOffset = this._options.featureServiceMaxAllowableOffset;

            queryLayer.queryFeatures(query).then(this._util.proxy(function(results) {

                // Join the data to the geometries.

                var joinedFeatures = [];
                results.features.forEach(this._util.proxy(function (feature) {

                    // VA attributes, mapped by _options.geoId, are joined to the feature layer geometries 
                    // by _options.featureLayerGeoId.

                    var dataMatch = _geoIdAttributeMap[feature.attributes[this._options.featureServiceGeoId]];  

                    if (dataMatch) {
                        for (var key in dataMatch) {
                            if (dataMatch.hasOwnProperty(key))
                                feature.attributes[key] = dataMatch[key];
                        }
                        joinedFeatures.push(feature);
                        delete _geoIdAttributeMap[feature.attributes[this._options.featureServiceGeoId]]
                    }

                }, this));

                if (this._options.filterToFeatureServiceGeoId)
                    this.filterToFeatureServiceGeoId(whereClause);

                // Build the feature layer from the geometries joined with the data.

                var viewLayer = new FeatureLayer({
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
                viewLayer.then(function(layer){
                    // See https://community.esri.com/message/693120-re-sceneview-source-polygons-no-popup?commentID=693120#comment-693120
                    // To enable popups.
                    layer.createQuery = function(){
                        var q = layer.__proto__.createQuery.call(layer); // eslint-disable-line no-proto
                        q.outFields = null;
                        q.where = null;
                        return q;
                    }
                    return layer;
                });

                // The FeatureLayer is ready to be added to a map.
                featureLayerReady.resolve(viewLayer);

                return viewLayer;

            },this), function (e){ featureLayerReady.reject(e); });

            // Note: We cannot return the FeatureLayer directly for two reasons:
            // (1) It is not yet built.  (2) It is itself a promise--a promise
            // that does not resolve before we add it to the map.
            // Instead, we return a promise that the feature layer is _ready_
            // to be added to a map.

            return featureLayerReady.promise;

        }

    });

});
