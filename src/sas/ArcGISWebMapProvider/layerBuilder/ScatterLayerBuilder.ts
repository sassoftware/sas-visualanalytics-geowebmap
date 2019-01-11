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
 * scatter plot feature layer in a web map.
 */

import FeatureLayer from "esri/layers/FeatureLayer";
import BaseLayerBuilder from "sas/ArcGISWebMapProvider/layerBuilder/BaseLayerBuilder";
import ProviderUtil from "sas/ArcGISWebMapProvider/ProviderUtil";

/**
 * Responsible for consuming incoming data from SAS Visual Analytics to create a 
 * bubble plot feature layer in a web map.
 */
class ScatterLayerBuilder extends BaseLayerBuilder {

    validateOptions():any {
        return this.validateRequiredOptions(['x', 'y']);
    }

    validateResults():any {
        return this.validateCoordinates(this._rows, this._columns);
    }

    protected buildFeatureLayerImpl():FeatureLayer {
        const renderer = this.createRenderer(this._rows, this._columns);
        return this.buildSimpleFeatureLayer(renderer);
    }

    private createRenderer(rows:any[], columns:any[]):any {
        const visualVariables = [];
        let renderer;

        if (this._options.animation) { 
            visualVariables.push(this.buildAnimationVisualVariable(columns, this._options.animation));
        }

        if (ProviderUtil.hasColorCategory(this._options.color, columns)) {
            renderer =  {
                type: "unique-value",
                field: ProviderUtil.getNameWithLabel(this._options.color, columns),
                defaultSymbol: {
                    type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
                    color: "green",
                    size: 6,
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
                    type: "simple-marker",
                    size: 6,
                    color: this._options.colorMax,
                    outline: {
                        width: 0.5,
                        color: this._options.outline
                    }
                },
                visualVariables
            };
        }

        return renderer;
    }
}
export default ScatterLayerBuilder;