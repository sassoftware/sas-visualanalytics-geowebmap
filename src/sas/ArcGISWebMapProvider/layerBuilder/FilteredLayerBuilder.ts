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

import { create } from "@arcgis/core/core/promiseUtils";
import SpatialReference from "@arcgis/core/geometry/SpatialReference";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Error from "sas/ArcGISWebMapProvider/Error";
import BaseLayerBuilder from "sas/ArcGISWebMapProvider/layerBuilder/BaseLayerBuilder";
import ProviderUtil from "sas/ArcGISWebMapProvider/ProviderUtil";

/**
 * Responsible for consuming incoming data from SAS Visual Analytics to filter
 * the features displayed on any feature layer.  Note that this returns a 
 * regular feature layer, and it will participate in filtering actions, but
 * not selection actions. 
 */
class FilteredLayerBuilder extends BaseLayerBuilder {

    private static MAX_FILTER_VALUES = 500;
    private _geoIdFilter: any;

    validateOptions(): Error[] {
        return this.validateRequiredOptions(['geoId', 'featureServiceUrl', 'featureServiceGeoId']);
    }

    validateResults(): Error[] {

        let error: Error | null = null;

        if (ProviderUtil.getIndexWithLabel(this._options.geoId, this._columns) < 0) {
            error = Error.error("dataNotIdentifiedGeoId");
        }
        else if (this._rows.length > FilteredLayerBuilder.MAX_FILTER_VALUES) {
            error = Error.error("tooManyFilteredValues", FilteredLayerBuilder.MAX_FILTER_VALUES.toString());
        }

        return (error) ? [error] : [];
    }

    getGeoIdFilter(): any {
        return this._geoIdFilter;
    }

    protected buildFeatureLayerImpl(): Promise<FeatureLayer> {
        return this.buildFilteredFeatureLayer(this._rows, this._columns);
    }

    private buildFilteredFeatureLayer(rows: any[], columns: any[]) {

        const geoIdIndex = ProviderUtil.getIndexWithLabel(this._options.geoId, columns);
        const geoIdValues = rows.map((row) => row[geoIdIndex]);

        // Convert ids to "where" expression: "COLUMN_NAME like '%value1%' OR ..."
        this._geoIdFilter = geoIdValues.reduce((previous, current) => {
            let escapedVal: any = ProviderUtil.sqlEscape(current);
            if (typeof escapedVal === 'string')
                escapedVal = escapedVal.substring(1, escapedVal.length - 1); // Remove surrounding quotes.
            return previous +
                ((previous.length > 0) ? " OR " : "") +
                this._options.featureServiceGeoId +
                " like '%" +
                escapedVal +
                "%'";
        }, "");

        const viewLayer: any = new FeatureLayer({
            id: ProviderUtil.SAS_FEATURE_LAYER_ID,
            title: this._options.title,
            url: this._options.featureServiceUrl,
            spatialReference: SpatialReference.WGS84,
            definitionExpression: this._geoIdFilter
        });

        return create((resolve /* , reject */) => {
            viewLayer.queryExtent().then((results: any) => {
                viewLayer.fullExtent = results.extent;
                resolve(viewLayer);
            }, (error: any) => {
                ProviderUtil.logError(error);
                resolve(viewLayer); // Still returning what we have.
            });
        });

    }

}
export default FilteredLayerBuilder;