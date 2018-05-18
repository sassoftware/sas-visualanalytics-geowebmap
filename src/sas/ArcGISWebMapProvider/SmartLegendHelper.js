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
 * Encapsulate the logic for "smart mapping" legends.
 */
define([
    "esri/renderers/smartMapping/creators/size", // MUST I?
    "esri/renderers/smartMapping/statistics/histogram",
    "esri/widgets/SizeSlider",
    "esri/widgets/ColorSlider",
    "esri/widgets/Expand",
    "esri/Color",
    "esri/core/lang",
    "sas/ArcGISWebMapProvider/ProviderUtil",
    "dojox/math/stats",
    "dojo/on",
    "dojo/_base/declare"
], function(sizeRendererCreator, histogram, SizeSlider, ColorSlider, Expand, Color, lang, ProviderUtil, stats, on, declare){

    var _activeLegends = [];

    return declare(null, {

        /**
         * Issues:
         * 
         * - Native smart mapping examples use the smart mapping renderers with these controls.
         *   Here, these are _not_ using the smart mapping renderers.  This implementation
         *   should be considered experimental.
         * - The example histogram implemenation relies on server-side queries that are
         *   not available here, and no workaround has been provided.
         * - The behavior of the smart mapping size legends is to have the absolute min and max 
         *   for the data range always display at the absolute min and max display sizes
         *   specified.  Only intervening sizes can be altered.
         * - Native color slider examples use five stops.  These use three.
         * 
         * https://developers.arcgis.com/javascript/latest/sample-code/sandbox/index.html?sample=visualization-sm-size
         * https://developers.arcgis.com/javascript/latest/sample-code/visualization-sm-color/index.html
         */

        addSmartLegends: function (readiedFeatureLayer, mapView) {

            this._removeSmartLegends(mapView);

            readiedFeatureLayer.renderer.visualVariables.forEach(function(visualVariable){

                var stats;
                var slider;
                var expand;

                if (visualVariable.type === "size") {

                    stats = this._calculateStatistics(readiedFeatureLayer.source, visualVariable.field);

                    slider = new SizeSlider({
                        statistics: stats,
                        visualVariable: lang.clone(visualVariable),
                        container: this._createLegendDiv(),
                        minValue: stats.min,
                        maxValue: stats.max,
                        values: [stats.min, stats.max]
                    });
                    expand = new Expand({expandIconClass: "esri-icon-question", view: mapView, content: slider.domNode, group: "bottom-right"});
                    mapView.ui.add(expand, "bottom-right");
                    _activeLegends.push(expand);
                    on(
                        slider, 
                        "data-change", 
                        this._buildOnSmartWidgetDataChangeSizeFunction(readiedFeatureLayer, slider)
                    );

                } else if (visualVariable.type === "color") {

                    stats = this._calculateStatistics(readiedFeatureLayer.source, visualVariable.field);

                    slider = new ColorSlider({
                        statistics: stats,
                        visualVariable: lang.clone(visualVariable),
                        container: this._createLegendDiv(),
                        minValue: stats.min,
                        maxValue: stats.max,
                        numHandles: 3
                    });
                    expand = new Expand({expandIconClass: "esri-icon-question", view: mapView, content: slider.domNode, group: "bottom-right"});
                    mapView.ui.add(expand, "bottom-right");
                    _activeLegends.push(expand);
                    on(
                        slider, 
                        "data-change", 
                        this._buildOnSmartWidgetDataChangeColorFunction(readiedFeatureLayer, slider)
                    );
                }

            }, this);

        },

        expandTwoPartColorRange: function (stops) {
             if (stops && stops.length === 2) {
                var middleStop = {
                    value: (stops[1].value - stops[0].value) / 2 + stops[0].value,
                    color: this._midColor(stops[0].color, stops[1].color)
                }
                stops.splice(1, 0, middleStop);
            }
        },

        _buildOnSmartWidgetDataChangeSizeFunction: function (layer, widget) {
            return this._buildOnSmartWidgetDataChangeFunction(layer, widget, true);
        },

        _buildOnSmartWidgetDataChangeColorFunction: function (layer, widget) {
            return this._buildOnSmartWidgetDataChangeFunction(layer, widget, false);
        },

        _buildOnSmartWidgetDataChangeFunction: function (layer, widget, setStops) {
            return function() {
                var renderer = layer.renderer.clone();
                renderer.visualVariables.splice(
                    renderer.visualVariables.findIndex(
                        function (vv) { return vv.type === widget.visualVariable.type; }
                    ),
                    1
                );
                var vv = lang.clone(widget.visualVariable);
                if (setStops) {
                    if (vv.stops.length === 2) {
                        vv.stops[0].value = vv.minDataValue;
                        vv.stops[1].value = vv.maxDataValue;
                    }
                }
                renderer.visualVariables.push(vv);
                layer.renderer = renderer;
            }
        },

        _calculateStatistics: function (graphics, fieldName) {

            var field = graphics.items
                .map(function(item){ return item.attributes[fieldName]; })
                .filter(function(value) { return typeof value === "number"; });

            return {
                min: stats.min(field),
                max: stats.max(field),
                avg: stats.mean(field),
                stddev: stats.sd(field)
            };
        },

        _midColor: function(minColor, maxColor) {

            // Following yields a tri-part blend with white as the middle color:
            // Color.blendColors(new Color(minColor), new Color(maxColor));

            // Following blends the color inputs:

            minColor = new Color(minColor);
            maxColor = new Color(maxColor);

            var mid = function (a, b) {
                var max;
                var min;
                if (a > b) {
                    max = a;
                    min = b;
                } else {
                    max = b;
                    min = a;
                }
                return (max - min) / 2 + min;
            }
            
            return new Color({
                a: mid(minColor.a, maxColor.a),
                b: mid(minColor.b, maxColor.b),
                r: mid(minColor.r, maxColor.r),
                g: mid(minColor.g, maxColor.g)
            });
        },

        _createLegendDiv: function() {
            var div = document.createElement("div");
            div.classList.add("smartMappingSlider");
            document.body.appendChild(div);
            return div;
        }, 

        _removeSmartLegends: function (mapView) {
            _activeLegends.forEach(function(legend){ mapView.ui.remove(legend); });
            _activeLegends = [];
        }

    });

});
