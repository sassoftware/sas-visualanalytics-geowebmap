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

import { resolve } from "@arcgis/core/core/promiseUtils";
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
        return resolve(this.buildFilteredFeatureLayer(this._rows, this._columns));
    }

    private buildFilteredFeatureLayer(rows: any[], columns: any[]) {

        const geoIdIndex = ProviderUtil.getIndexWithLabel(this._options.geoId, columns);
        const geoIdValues = rows.map((row) => row[geoIdIndex]);

        this._geoIdFilter =
            this._options.featureServiceGeoId +
            " IN (" +
            ProviderUtil.sqlEscape(geoIdValues) +
            ")";

        const viewLayer: any = new FeatureLayer({
            id: ProviderUtil.SAS_FEATURE_LAYER_ID,
            title: this._options.title,
            url: this._options.featureServiceUrl,
            spatialReference: SpatialReference.WGS84,
            definitionExpression: this._geoIdFilter
        });

        return viewLayer;

    }

}
export default FilteredLayerBuilder;