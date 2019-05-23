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

/// <amd-dependency path="dojox/math/stats" name="stats" />
/// <amd-dependency path="dojo/on" name="on" />
declare const stats: any;
declare const on: any;

import Color from "esri/Color";
import lang = require("esri/core/lang");
import FeatureLayer from "esri/layers/FeatureLayer";
import VisualVariable from "esri/renderers/visualVariables/VisualVariable";
import View from "esri/views/View";
import ColorSlider from "esri/widgets/ColorSlider";
import Expand from "esri/widgets/Expand";
import Legend from "esri/widgets/Legend";
import SizeSlider from "esri/widgets/SizeSlider";

/**
 * Encapsulate the logic for "smart mapping" legends.
 */
class SmartLegendHelper {

    private _activeLegends: any[] = [];

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

    addSmartLegends(readiedFeatureLayer: FeatureLayer, mapView: View): void {

        this.removeSmartLegends(mapView);

        const visualVariables = (readiedFeatureLayer.renderer as any).visualVariables || [];

        visualVariables.forEach((visualVariable: VisualVariable) => {

            let varStats;
            let slider;
            let expand;

            if (visualVariable.type === "size") {

                varStats = this.calculateStatistics(readiedFeatureLayer.source, visualVariable.field);

                slider = new SizeSlider({
                    statistics: varStats,
                    visualVariable: lang.clone(visualVariable),
                    minValue: varStats.min,
                    maxValue: varStats.max,
                });

            } else if (visualVariable.type === "color") {

                varStats = this.calculateStatistics(readiedFeatureLayer.source, visualVariable.field);

                slider = new ColorSlider({
                    statistics: varStats,
                    visualVariable: lang.clone(visualVariable),
                    minValue: varStats.min,
                    maxValue: varStats.max,
                    numHandles: 3
                });

            }

            if (slider) {
                expand = new Expand({ expandIconClass: "esri-icon-question", view: mapView, content: slider, group: "bottom-left" });
                mapView.ui.add(expand, "bottom-left");
                this._activeLegends.push(expand);
                on(
                    slider,
                    "data-change",
                    this.buildOnSmartWidgetDataChangeFunction(readiedFeatureLayer, slider)
                );
            }

        });

    }

    expandTwoPartColorRange(stops: any[]): void {
        if (stops && stops.length === 2) {
            const middleStop = {
                value: (stops[1].value - stops[0].value) / 2 + stops[0].value,
                color: this.midColor(stops[0].color, stops[1].color)
            }
            stops.splice(1, 0, middleStop);
        }
    }

    private buildOnSmartWidgetDataChangeFunction(layer: any, widget: any): () => void {
        return () => {
            const renderer = layer.renderer.clone();
            renderer.visualVariables.splice(
                renderer.visualVariables.findIndex(
                    (vvar: VisualVariable) => vvar.type === widget.visualVariable.type
                ),
                1
            );
            const vv = lang.clone(widget.visualVariable);
            renderer.visualVariables.push(vv);
            layer.renderer = renderer;
        }
    }

    private calculateStatistics(graphics: any, fieldName: string) {

        const field = graphics.items
            .map((item: any) => item.attributes[fieldName])
            .filter((value: any) => typeof value === "number");

        return {
            min: stats.min(field),
            max: stats.max(field),
            avg: stats.mean(field),
            stddev: stats.sd(field)
        };
    }

    private midColor(minColor: any, maxColor: any): Color {

        // Following yields a tri-part blend with white as the middle color:
        // Color.blendColors(new Color(minColor), new Color(maxColor));

        // Following blends the color inputs:

        minColor = new Color(minColor);
        maxColor = new Color(maxColor);

        const mid = (a: number, b: number) => {
            let max;
            let min;
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
    }

    private removeSmartLegends(mapView: any): void {
        this._activeLegends.forEach((legend: Legend) => { mapView.ui.remove(legend); });
        this._activeLegends = [];
    }

}
export default SmartLegendHelper;