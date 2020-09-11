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

import { create } from "esri/core/promiseUtils";
import SpatialReference from "esri/geometry/SpatialReference";
import FeatureLayer from "esri/layers/FeatureLayer";
import Query from "esri/tasks/support/Query";
import Error from "sas/ArcGISWebMapProvider/Error";
import BaseLayerBuilder from "sas/ArcGISWebMapProvider/layerBuilder/BaseLayerBuilder";
import ProviderUtil from "sas/ArcGISWebMapProvider/ProviderUtil";
import SmartLegendHelper from "sas/ArcGISWebMapProvider/SmartLegendHelper";

/**
 * Responsible for consuming incoming data from SAS Visual Analytics to create a 
 * bubble plot feature layer in a web map.
 */
class ChoroplethLayerBuilder extends BaseLayerBuilder {

    private _geoIdAttributeMap: any;
    private _geoIdFilter: any;
    private _queryServiceLayerOverride: any;

    supportsEdits(): boolean {
        return true;
    }

    validateOptions(): Error[] {
        return this.validateRequiredOptions(['geoId', 'featureServiceUrl', 'featureServiceGeoId']);
    }

    validateResults(): Error[] {

        let error: Error | null = null;

        if (ProviderUtil.getIndexWithLabel(this._options.geoId, this._columns) < 0) {
            error = Error.error("dataNotIdentifiedGeoId");
        } else {
            const missingIds = Object.keys(this._geoIdAttributeMap);
            if (missingIds.length > 0 && missingIds.length < 6) {
                error = Error.warning("regionsNotFoundFew", missingIds.join(", "));
            }
            else if (missingIds.length > 6) {
                error = Error.warning("regionsNotFoundMany", missingIds.slice(0, 5).join(", "));
            }
        }

        return error ? [error] : [];
    }

    getGeoIdFilter(): any {
        return this._geoIdFilter;
    }

    // Provided to support unit tests mocking the geometry-providing feature service.
    setQueryServiceLayerOverride(override: any) {
        this._queryServiceLayerOverride = override;
    }

    protected buildFeatureLayerImpl() {
        const renderer = this.createRenderer(this._rows, this._columns);
        return this.buildChoroplethFeatureLayer(renderer, this._rows, this._columns);
    }

    private createRenderer(rows: any[], columns: any) {

        const visualVariables: any[] = [];
        let minMax: any;
        let renderer: any;

        if (ProviderUtil.hasColorCategory(this._options.color, columns)) {
            renderer = {
                type: "unique-value",
                field: ProviderUtil.getNameWithLabel(this._options.color, columns),
                defaultSymbol: {
                    type: "simple-fill",  // autocasts as new SimpleMarkerSymbol()
                    color: "blue",
                    style: "solid",
                    outline: {
                        width: 0.5,
                        color: this._options.outline
                    }
                },
                uniqueValueInfos: ProviderUtil.generateUniqueVals(columns, rows, this._options),
                visualVariables
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
                visualVariables
            };
        }

        if (!ProviderUtil.hasColorCategory(this._options.color, columns) && this._options.color) {
            const colorColumnName = ProviderUtil.getNameWithLabel(this._options.color, columns);
            const colorIndex = ProviderUtil.getIndexWithLabel(this._options.color, columns);
            minMax = ProviderUtil.findMinMax(rows, colorIndex);
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
            if (this._options.useSmartLegends) {
                new SmartLegendHelper().expandTwoPartColorRange(visualVariables[visualVariables.length - 1].stops);
            }
        }

        return renderer;
    }

    private buildFilter(values: any[]): string {

        let where: string = "";

        if (this._options.featureServiceWhere) {
            where = "(" + this._options.featureServiceWhere + ") AND ";
        }

        where += "(" + this._options.featureServiceGeoId +
            " IN (" +
            values.join() +
            "))";

        return where;
    }

    private buildQuery(queryLayer: FeatureLayer, values: any[]): Query {

        const query: any = queryLayer.createQuery();

        query.outFields = [this._options.featureServiceGeoId]; // Note: ["*"] Gets _all_ attributes, which noticeably slows performance.
        query.outSpatialReference = SpatialReference.WGS84;
        query.where = this.buildFilter(values);
        if (!isNaN(this._options.featureServiceMaxAllowableOffset)) {
            query.maxAllowableOffset = this._options.featureServiceMaxAllowableOffset;
        }

        return query;
    }

    private calculateMaxAllowableOffset(mapWidth: number, mapHeight: number): number {
        const pixelScale: number = window.innerHeight / window.innerWidth; // screen.height / screen.width;
        const mapScale: number = mapHeight / mapWidth;
        return (pixelScale > mapScale) ? mapWidth / window.innerWidth : mapHeight / window.innerHeight;
    }

    private queryExtent(queryLayer: FeatureLayer, values: any[]): any {
        return queryLayer.queryExtent(this.buildQuery(queryLayer, values));
    }

    private queryFeatures(queryLayer: FeatureLayer, values: any[], viewLayer: FeatureLayer): any {

        let queryCount = 0;

        const MAX_FEATURES = 500;

        while (values.length > 0) {

            ++queryCount;

            const attributeBlock = values.splice(0, MAX_FEATURES);

            const query: any = this.buildQuery(queryLayer, attributeBlock);

            queryLayer.queryFeatures(query).then((results: any) => {

                // Join the data to the geometries.

                const joinedFeatures: any[] = [];
                results.features.forEach((feature: any) => {

                    // VA attributes, mapped by _options.geoId, are joined to the feature layer geometries 
                    // by _options.featureLayerGeoId.

                    const dataMatch = this._geoIdAttributeMap[feature.attributes[this._options.featureServiceGeoId]];

                    if (dataMatch) {
                        for (const key in dataMatch) {
                            if (dataMatch.hasOwnProperty(key)) {
                                feature.attributes[key] = dataMatch[key];
                            }
                        }
                        joinedFeatures.push(feature);
                        delete this._geoIdAttributeMap[feature.attributes[this._options.featureServiceGeoId]]
                    }

                });

                // console.info ("Adding features ", joinedFeatures);

                viewLayer.applyEdits({
                    addFeatures: joinedFeatures
                }).then(() => {
                    viewLayer.emit(BaseLayerBuilder.EDITS_APPLIED);
                    if (--queryCount < 1) {
                        viewLayer.emit(BaseLayerBuilder.EDITS_COMPLETED);
                    }
                }, (error: any) => {
                    ProviderUtil.logError(error);
                });

            }, (error: any) => {
                ProviderUtil.logError(error)
            });

        }

    }

    private buildChoroplethFeatureLayer(renderer: any, rows: any[], columns: any[]) {

        // We return a promise that the feature layer is _ready_
        // to be added to a map.

        return create((resolve, reject) => {

            const layerSource: any[] = [];

            const graphics = this.createGraphics();
            const fields = this.createFields();

            // Build a list of VA-supplied attributes mapped by GeoID.

            const geoIdColumnName = ProviderUtil.getNameWithLabel(this._options.geoId, columns);
            this._geoIdAttributeMap = {};
            graphics.forEach((graphic: any) => {
                this._geoIdAttributeMap[graphic.attributes[geoIdColumnName]] = graphic.attributes;
            });

            const viewLayer: any = new FeatureLayer({
                id: ProviderUtil.SAS_FEATURE_LAYER_ID,
                title: this._options.title,
                source: layerSource,
                fields,
                objectIdField: ProviderUtil.FIELD_NAME_OBJECT_ID,
                renderer,
                // spatialReference: lang.clone(results.spatialReference),
                // Note: there are ArcGIS 4.6 hit-test related problems with SceneViews with elevation mode "on-the-ground"
                geometryType: "polygon",
                popupTemplate: this.createGenericUnformattedPopupTemplate(columns),
                spatialReference: SpatialReference.WGS84
            });

            if (graphics.length < 1) {
                resolve(viewLayer);
                setTimeout(() => { viewLayer.emit(BaseLayerBuilder.EDITS_COMPLETED); }, 10);
                return; // RETURN immediately.
            }

            let queryLayer: any;
            if (this._queryServiceLayerOverride) {
                queryLayer = this._queryServiceLayerOverride;
            } else {
                queryLayer = new FeatureLayer({
                    url: this._options.featureServiceUrl,
                    objectIdField: ProviderUtil.FIELD_NAME_OBJECT_ID,
                    spatialReference: SpatialReference.WGS84
                });
            }

            const attributes = ProviderUtil.sqlEscape(Object.keys(this._geoIdAttributeMap));

            this.queryExtent(queryLayer, attributes).then((success: any) => {
                viewLayer.fullExtent = success.extent;
                resolve(viewLayer);
                if (isNaN(this._options.featureServiceMaxAllowableOffset)) {
                    this._options.featureServiceMaxAllowableOffset = this.calculateMaxAllowableOffset(success.extent.width, success.extent.height);
                }
                this.queryFeatures(queryLayer, attributes, viewLayer);
            },
                (error: any) => {
                    ProviderUtil.logError(error);
                    resolve(viewLayer); // Still returning what we have.
                });

            return;
        });

    }
}
export default ChoroplethLayerBuilder;