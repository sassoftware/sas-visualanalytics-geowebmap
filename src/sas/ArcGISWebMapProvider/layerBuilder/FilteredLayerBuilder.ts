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

import FeatureLayer from "esri/layers/FeatureLayer";
import BaseLayerBuilder from "sas/ArcGISWebMapProvider/layerBuilder/BaseLayerBuilder";
import ProviderUtil from "sas/ArcGISWebMapProvider/ProviderUtil";

/**
 * Responsible for consuming incoming data from SAS Visual Analytics to filter
 * the features displayed on any feature layer.  Note that this returns a 
 * regular feature layer, and it will participate in filtering actions, but
 * not selection actions. 
 */
class FilteredLayerBuilder extends BaseLayerBuilder {

    private static MAX_FILTER_VALUES:number = 500; 
    private _geoIdFilter:any;

    validateOptions():any {
        return this.validateRequiredOptions(['geoId', 'featureServiceUrl', 'featureServiceGeoId']);
    }

    validateResults():any {

        let warning;

        if (ProviderUtil.getIndexWithLabel(this._options.geoId, this._columns) < 0) {
            warning = ProviderUtil.getResource("dataNotIdentifiedGeoId");
        } 
        else if (this._rows.length > FilteredLayerBuilder.MAX_FILTER_VALUES) {
            warning = ProviderUtil.getResource("tooManyFilteredValues", FilteredLayerBuilder.MAX_FILTER_VALUES.toString());
        }

        return warning;
    }

    getGeoIdFilter():any {
        return this._geoIdFilter;
    }

    protected buildFeatureLayerImpl() {
       return this.buildFilteredFeatureLayer(this._rows, this._columns);
    }

    private buildFilteredFeatureLayer(rows:any[], columns:any[]) {

        const geoIdIndex = ProviderUtil.getIndexWithLabel(this._options.geoId, columns);
        const geoIdValues = rows.map((row)=>row[geoIdIndex]);

        this._geoIdFilter = 
            this._options.featureServiceGeoId + 
            " IN (" + 
            ProviderUtil.sqlEscape(geoIdValues) + 
            ")";

        const viewLayer:any = new FeatureLayer({
            id: ProviderUtil.SAS_FEATURE_LAYER_ID,
            title: this._options.title,
            url: this._options.featureServiceUrl,
            spatialReference: {
                wkid: 4326
            },
            definitionExpression: this._geoIdFilter
        }); 

        return viewLayer;

    }

}
export default FilteredLayerBuilder;