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

import Color from "@arcgis/core/Color";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import AuthoringInfo from "@arcgis/core/renderers/support/AuthoringInfo";
import AuthoringInfoVisualVariable from "@arcgis/core/renderers/support/AuthoringInfoVisualVariable";
import ColorVariable from "@arcgis/core/renderers/visualVariables/ColorVariable";
import SizeVariable from "@arcgis/core/renderers/visualVariables/SizeVariable";
import VisualVariable from "@arcgis/core/renderers/visualVariables/VisualVariable";
import MapView from "@arcgis/core/views/MapView";
import SceneView from "@arcgis/core/views/SceneView";
import Expand from "@arcgis/core/widgets/Expand";
import Legend from "@arcgis/core/widgets/Legend";
import ColorSlider from "@arcgis/core/widgets/smartMapping/ColorSlider";
import SizeSlider from "@arcgis/core/widgets/smartMapping/SizeSlider";
import histogram from "@arcgis/core/smartMapping/statistics/histogram";
import summaryStatistics from "@arcgis/core/smartMapping/statistics/summaryStatistics";

import esri = __esri;

/**
 * Encapsulate the logic for "smart mapping" legends.
 */
class SmartLegendHelper {

    private _activeLegends: any[] = [];

    /**
     * Issues:
     * 
     * - This is a highly experimental implementation of multivariate smart mapping.  
     *   Smart mapping behaviors require an AuthorizationInfo on the renderer, which 
     *   client-side renderers do not have. Below, one is "primed" from an invocation 
     *   of createContinuousRenderer().  
     * 
     * https://developers.arcgis.com/javascript/latest/sample-code/visualization-sm-multivariate/index.html
     * https://developers.arcgis.com/javascript/latest/sample-code/sandbox/index.html?sample=visualization-sm-size
     * https://developers.arcgis.com/javascript/latest/sample-code/visualization-sm-color/index.html
     */

    addSmartLegends(readiedFeatureLayer: FeatureLayer, mapView: MapView | SceneView): void {

        if (readiedFeatureLayer && readiedFeatureLayer.renderer && !readiedFeatureLayer.renderer.authoringInfo) {

            const visualVariables = (readiedFeatureLayer.renderer as any).visualVariables || [];

            const authoringVariables: AuthoringInfoVisualVariable[] = visualVariables
                .filter((v: VisualVariable) => {
                    return v.type === "size" || v.type === "color";
                })
                .map((v: VisualVariable) => {
                    return new AuthoringInfoVisualVariable({
                        type: v.type as any,
                        maxSliderValue: 0,
                        minSliderValue: 0
                    });
                });

            readiedFeatureLayer.renderer.authoringInfo = new AuthoringInfo({ visualVariables: authoringVariables });

        }

        this.addSmartLegendsImpl(readiedFeatureLayer, mapView);

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

    private addSmartLegendsImpl(readiedFeatureLayer: FeatureLayer, mapView: MapView | SceneView): void {

        this.removeSmartLegends(mapView);

        const visualVariables = (readiedFeatureLayer.renderer as any).visualVariables || [];

        visualVariables.forEach((visualVariable: VisualVariable) => {

            if (visualVariable.type === "size") {

                this.getHistogram(readiedFeatureLayer, visualVariable)
                    .then((histogramResult: esri.HistogramResult) => {
                        return this.calculateStatistics(readiedFeatureLayer, visualVariable)
                            .then((statResult: esri.SummaryStatisticsResult) => {

                                const slider: SizeSlider = SizeSlider.fromRendererResult(
                                    {
                                        renderer: (readiedFeatureLayer.renderer as any),
                                        statistics: statResult,
                                        visualVariables: [(visualVariable as SizeVariable)]
                                    } as any,
                                    histogramResult
                                );

                                this.addSlider(readiedFeatureLayer, mapView, slider);

                            });
                    });

            } else if (visualVariable.type === "color") {

                this.getHistogram(readiedFeatureLayer, visualVariable)
                    .then((histogramResult: esri.HistogramResult) => {
                        return this.calculateStatistics(readiedFeatureLayer, visualVariable)
                            .then((statResult: esri.SummaryStatisticsResult) => {

                                const slider: ColorSlider = new ColorSlider({
                                    primaryHandleEnabled: true,
                                    stops: (visualVariable as ColorVariable).stops,
                                    histogramConfig: {
                                        bins: histogramResult.bins,
                                        average: statResult.avg
                                    },
                                    min: statResult.min,
                                    max: statResult.max
                                });

                                this.addSlider(readiedFeatureLayer, mapView, slider);

                            });
                    });

            }

        });

    }

    private addSlider(readiedFeatureLayer: FeatureLayer, mapView: MapView | SceneView, slider: SizeSlider | ColorSlider): void {

        const expand = new Expand({ expandIconClass: "esri-icon-question", view: mapView, content: slider, group: "bottom-left" });
        mapView.ui.add(expand, "bottom-left");
        this._activeLegends.push(expand);

        const changeFunction = (slider instanceof SizeSlider) ?
            this.buildOnSmartSizeSliderDataChangeFunction(readiedFeatureLayer, slider as SizeSlider) :
            this.buildOnSmartColorSliderDataChangeFunction(readiedFeatureLayer, slider as ColorSlider);

        slider.on("thumb-change", changeFunction);
        slider.on("thumb-drag", changeFunction);
        slider.on("max-change", changeFunction);
        slider.on("min-change", changeFunction);

    }

    private buildOnSmartSizeSliderDataChangeFunction(layer: any, slider: SizeSlider): () => void {
        return () => {
            const renderer = layer.renderer.clone();
            const variableIndex: number = renderer.visualVariables.findIndex((vv: VisualVariable) => vv.type === "size");
            if (variableIndex < 0) {
                return;
            }
            renderer.visualVariables.splice(variableIndex, 1, slider.updateVisualVariable(renderer.visualVariables[variableIndex]))
            layer.renderer = renderer;
        }
    }

    private buildOnSmartColorSliderDataChangeFunction(layer: any, slider: ColorSlider): () => void {
        return () => {
            const renderer = layer.renderer.clone();
            const colorVariableIndex: number = renderer.visualVariables.findIndex((vv: VisualVariable) => vv.type === "color");
            if (colorVariableIndex < 0) {
                return;
            }
            const colorVariable: any = renderer.visualVariables[colorVariableIndex].clone();

            colorVariable.stops = slider.stops;
            renderer.visualVariables.splice(colorVariableIndex, 1, colorVariable)
            layer.renderer = renderer;
        }
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

    private calculateStatistics(layer: FeatureLayer, visualVariable: VisualVariable): Promise<esri.SummaryStatisticsResult> {
        return summaryStatistics({ layer, field: visualVariable.field });
    }

    private getHistogram(layer: FeatureLayer, visualVariable: VisualVariable): Promise<esri.HistogramResult> {
        return histogram({ layer, field: visualVariable.field });
    }

}
export default SmartLegendHelper;