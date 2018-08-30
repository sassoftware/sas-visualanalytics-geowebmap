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
 * bubble plot feature layer in a web map.
 */
define([
    "sas/ArcGISWebMapProvider/layerBuilder/BaseLayerBuilder",
    "sas/ArcGISWebMapProvider/SmartLegendHelper",
    "dojo/_base/declare"
], function(BaseLayerBuilder, SmartLegendHelper, declare){

    return declare(BaseLayerBuilder, {

        _buildFeatureLayerImpl: function () {
            var renderer = this._createRenderer(this._rows, this._columns);
            return this._buildSimpleFeatureLayer(renderer);
        }, 

        _createRenderer: function (rows, columns) {

            var visualVariables = [];
            var minMax;
            var renderer;

            //Create either unique-value renderer or simple renderer
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
                    visualVariables: visualVariables
                };
            } else {
                renderer = {
                    type: "simple",
                    symbol: {
                        type: "simple-marker",
                        size: 0,
                        outline: {
                            color: this._options.outline,
                            width: 0.5,
                            opacity: 0
                        }
                    },
                    visualVariables: visualVariables
                };
            }

            if (this._options.size) {
                var sizeColumnName = this._util.getNameWithLabel(this._options.size, columns);
                var sizeIndex = this._util.getIndexWithLabel(this._options.size, columns);
                minMax = this._util.findMinMax(rows,sizeIndex);
                renderer.visualVariables.push({
                    type: "size",
                    field: sizeColumnName,
                    valueUnit: "unknown",
                    stops: [
                    {
                      value: minMax[0],
                      size: 6 // (!_options.use3D) ? 6 : 100000
                    },
                    {
                      value: minMax[1], 
                      size: 30 // (!_options.use3D) ? 30 : 500000
                    }],
                    minDataValue: minMax[0],
                    maxDataValue: minMax[1],
                    minSize: 6,
                    maxSize: 30
                });
            }

            if (this._options.animation)
                renderer.visualVariables.push(this._buildAnimationVisualVariable(columns, this._options.animation));

            if (!this._util.hasColorCategory(this._options.color, columns)) {
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

    });

});
