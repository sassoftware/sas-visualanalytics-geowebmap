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

import FeatureLayer from "esri/layers/FeatureLayer";
import BaseLayerBuilder from "sas/ArcGISWebMapProvider/layerBuilder/BaseLayerBuilder";
import SmartLegendHelper from "sas/ArcGISWebMapProvider/SmartLegendHelper";

/**
 * Responsible for consuming incoming data from SAS Visual Analytics to create a 
 * bubble plot feature layer in a web map.
 */
class BubbleLayerBuilder extends BaseLayerBuilder {

    validateOptions():any {
        return this.validateRequiredOptions(['x', 'y', 'size']);     
    }

    validateResults():any {
        return this.validateCoordinates(this._rows, this._columns);
    }

    protected buildFeatureLayerImpl():FeatureLayer {
        const renderer = this.createRenderer(this._rows, this._columns);
        return this.buildSimpleFeatureLayer(renderer);
    }

    private createRenderer(rows:any[], columns:any[]):any {

        const visualVariables:any[] = [];
        let minMax;
        let renderer;

        // Create either unique-value renderer or simple renderer
        if (this._util.hasColorCategory(this._options.color, columns)) {
            renderer = {
                type: "unique-value",
                field: this._util.getNameWithLabel(this._options.color, columns),
                defaultSymbol: {
                    type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
                    color: "blue",
                    size: 6,
                    outline: {
                        width: 0.5,
                        color: this._options.outline
                    }
                },
                uniqueValueInfos: this._util.generateUniqueVals(columns, rows, this._options),
                visualVariables
            };
        } else {
            renderer = {
                type: "simple",
                symbol: {
                    type: "simple-marker",
                    size: 2, // 0,  // MAP TODO: The 4.6 "0" setting automatically suppresses null/undefined values.  "2" leaves a few pixels.
                    outline: {
                        color: this._options.outline,
                        width: 0.5,
                        opacity: 0
                    }
                },
                visualVariables
            };
        }

        if (this._options.size) {
            const sizeColumnName = this._util.getNameWithLabel(this._options.size, columns);
            const sizeIndex = this._util.getIndexWithLabel(this._options.size, columns);
            minMax = this._util.findMinMax(rows,sizeIndex);
            renderer.visualVariables.push({
                type: "size",
                field: sizeColumnName,
                minDataValue: minMax[0],
                maxDataValue: minMax[1],
                minSize: 16,
                maxSize: 30
            });
        }

        if (this._options.animation) {
            renderer.visualVariables.push(this.buildAnimationVisualVariable(columns, this._options.animation));
        }

        if (!this._util.hasColorCategory(this._options.color, columns)) {
            const colorColumnName = this._util.getNameWithLabel(this._options.color, columns);
            const colorIndex = this._util.getIndexWithLabel(this._options.color, columns);

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
            if (this._options.useSmartLegends) {
                new SmartLegendHelper().expandTwoPartColorRange(visualVariables[visualVariables.length - 1].stops);
            }
        }

        // This 3D render requires the symbol to be measured in meters, and the correct
        // choice really depends on the expected extent; so, if it were generalized, 
        // it would have to be exposed as another querystring option. See the 
        // commented code in the visualVariables definition above.
        // } else {
        //     renderer =  {
        //         type: "simple", 
        //         symbol: {
        //             type: "point-3d", 
        //             symbolLayers: [{
        //                 type: "object",
        //                 width: 0,
        //                 height: 0,
        //                 depth: 0,
        //                 resource: { primitive: "cylinder" }
        //             }],
        //             outline: { 
        //                 color: this._options.outline,  
        //                 width: 0.5
        //             }
        //         },
        //         visualVariables: visualVariables
        //     };
        // }

        return renderer;
    }
}
export default BubbleLayerBuilder;