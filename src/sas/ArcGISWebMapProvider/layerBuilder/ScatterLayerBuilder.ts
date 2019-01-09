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

import BaseLayerBuilder from "sas/ArcGISWebMapProvider/layerBuilder/BaseLayerBuilder";
import FeatureLayer from "esri/layers/FeatureLayer";

/**
 * Responsible for consuming incoming data from SAS Visual Analytics to create a 
 * bubble plot feature layer in a web map.
 */
class ScatterLayerBuilder extends BaseLayerBuilder {

    public validateOptions():any {
        return this._validateRequiredOptions(['x', 'y']);
    }

    public validateResults():any {
        return this._validateCoordinates(this._rows, this._columns);
    }

    protected _buildFeatureLayerImpl():FeatureLayer {
        var renderer = this._createRenderer(this._rows, this._columns);
        return this._buildSimpleFeatureLayer(renderer);
    }

    private _createRenderer(rows:any[], columns:any[]):any {
        var visualVariables = [];
        var renderer;

        if (this._options.animation) 
            visualVariables.push(this._buildAnimationVisualVariable(columns, this._options.animation));

        if (this._util.hasColorCategory(this._options.color, columns)) {
            renderer =  {
                type: "unique-value",
                field: this._util.getNameWithLabel(this._options.color, columns),
                defaultSymbol: {
                    type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
                    color: "green",
                    size: 6,
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
                    type: "simple-marker",
                    size: 6,
                    color: this._options.colorMax,
                    outline: {
                        width: 0.5,
                        color: this._options.outline
                    }
                },
                visualVariables: visualVariables
            };
        }

        return renderer;
    }
}
export default ScatterLayerBuilder;