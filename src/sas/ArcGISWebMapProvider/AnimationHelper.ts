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

import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Renderer from "@arcgis/core/renderers/Renderer";
import moment from "moment/moment";
import ProviderUtil from "sas/ArcGISWebMapProvider/ProviderUtil";

/**
 * Encapsulate the logic for controlling animations.  Asserts that an animation will
 * control opacity over a date range.  Does not currently work with choropleths or
 * SceneViews.
 */
class AnimationHelper {

    static buildAnimationVisualVariable(columns: any[], animationColumnLabel: string): { type: string, field: string } {
        const animationColumnName = ProviderUtil.getNameWithLabel(animationColumnLabel, columns);
        return {
            type: "opacity",
            field: animationColumnName
        };
    }

    // See https://momentjs.com/docs/#/manipulating/add/ and/or moment.d.ts unitOfTime.
    private static _periodsAndFormats = [
        { period: "YEAR", format: "YYYY" },
        { period: "YEARS", format: "YYYY" },
        { period: "Y", format: "YYYY" },
        { period: "QUARTER", format: "L" },
        { period: "QUARTERS", format: "L" },
        { period: "Q", format: "L" },
        { period: "MONTH", format: "L" },
        { period: "MONTHS", format: "L" },
        { period: "M", format: "L" },
        { period: "WEEK", format: "L" },
        { period: "WEEKS", format: "L" },
        { period: "W", format: "L" },
        { period: "DAY", format: "L" },
        { period: "DAYS", format: "L" },
        { period: "D", format: "L" },
        { period: "HOUR", format: "LT" },
        { period: "HOURS", format: "LT" },
        { period: "H", format: "LT" },
        { period: "MINUTE", format: "LT" },
        { period: "MINUTES", format: "LT" },
        { period: "M", format: "LT" },
        { period: "SECOND", format: "LTS" },
        { period: "SECONDS", format: "LTS" },
        { period: "S", format: "LTS" },
        { period: "MILLISECOND", format: "x" },
        { period: "MILLISECONDS", format: "x" },
        { period: "MS", format: "x" }
    ];

    private static hasClonableRenderer(renderer: Renderer): boolean {
        /* tslint:disable no-string-literal */
        return renderer && typeof renderer["clone"] === "function";
        /* tslint:enable */
    }

    private static buildAnimationContext(updateAnimationValueFunction: any): { remove: () => void } {

        let animating = true;

        const frame = () => {
            if (!animating) {
                return;
            }
            updateAnimationValueFunction();
            setTimeout(() => { window.requestAnimationFrame(frame); }, 1000 / 30);  // 30 fps
        };

        frame();

        return {
            remove() {
                animating = false;
            }
        }

    }

    private _sasLayer: FeatureLayer;
    private _period: any;
    private _periodFormat: any;
    private _animationLabel: HTMLElement | null;
    private _animationPlayButton: HTMLInputElement | null;
    private _animationSlider: HTMLInputElement | null;
    private _animationMin: number;
    private _animationMax: number;
    private _lastAnimationSliderValue: moment.Moment | null;
    private _animation: any;

    constructor(animationPeriod: any) {
        this.resolvePeriodAndFormat(animationPeriod);
        this.initializeAnimationControls();
    }

    generateSampleAnimationData(result: any, colorColumnLabel: string, sizeColumnLabel: string, animationColumnLabel: string): void {
        let colorIndex;
        /* tslint:disable prefer-conditional-expression */
        if (ProviderUtil.hasColorCategory(colorColumnLabel, result.columns)) {
            colorIndex = -1;
        }
        else {
            colorIndex = ProviderUtil.getIndexWithLabel(colorColumnLabel, result.columns);
        }
        /* tslint:enable */
        const sizeIndex = ProviderUtil.getIndexWithLabel(sizeColumnLabel, result.columns);
        const animationIndex = ProviderUtil.getIndexWithLabel(animationColumnLabel, result.columns);
        const initialLength = result.data.length;
        for (let x = 0; x < initialLength; ++x) {
            for (let y = 1; y < 11; ++y) {  // Add ten years of sample data.
                const clone = result.data[x].slice();
                clone[animationIndex] = moment.utc(ProviderUtil.convertToEpochMS(clone[animationIndex], result.columns[animationIndex].format.formatString)).startOf(this._period).add(y, this._period).valueOf();
                if (colorIndex > -1) {
                    clone[colorIndex] = clone[colorIndex] * y;
                    if (isNaN(clone[colorIndex])) {
                        clone[colorIndex] = y;
                    }
                }  // Progressively approach color max.
                if (sizeIndex > -1) {
                    clone[sizeIndex] = clone[sizeIndex] * 2 * Math.random();
                    if (isNaN(clone[sizeIndex])) {
                        clone[sizeIndex] = 2 * Math.random();
                    }
                } // Randomize size.
                // Note: if neither size nor color vary, make the sample data randomly omit 25% of the rows (for testing scatter plots).
                if (colorIndex > -1 || sizeIndex > -1 || Math.random() > 0.75) {
                    result.data.push(clone);
                }
            }
        }
    }

    initializeAnimationData(event: any, animationColumnLabel: string): void {
        this._lastAnimationSliderValue = null;
        const animationIndex = ProviderUtil.getIndexWithLabel(animationColumnLabel, event.data.columns);
        this.convertDateColumn(event.data.data, animationIndex);
        const minMax = ProviderUtil.findMinMax(event.data.data, animationIndex);
        this._animationMin = moment.utc(minMax[0]).startOf(this._period).valueOf();
        this._animationMax = moment.utc(minMax[1]).endOf(this._period).valueOf();
    }

    initializeAnimation(sasLayer: FeatureLayer): void {
        this._sasLayer = sasLayer;
        const slider = this.getAnimationSlider();
        this.processAnimationSliderValue((slider) ? slider.value : 0);
    }

    private getAnimationSlider(): HTMLInputElement | null {
        if (!this._animationSlider) {
            this._animationSlider = document.getElementById("animationSlider") as HTMLInputElement;
        }
        return this._animationSlider;
    }

    private getAnimationPlayButton(): HTMLInputElement | null {
        if (!this._animationPlayButton) {
            this._animationPlayButton = document.getElementById("animationPlayButton") as HTMLInputElement;
        }
        return this._animationPlayButton;
    }

    private getAnimationLabel(): HTMLElement | null {
        if (!this._animationLabel) {
            this._animationLabel = document.getElementById("animationLabel");
        }
        return this._animationLabel;
    }

    private initializeAnimationControls(): void {

        const sliderChangeHandler = (event: any) => {
            this.stopAnimation();
            this.processAnimationSliderValue(event.target.value)
        };

        const slider = this.getAnimationSlider();
        if (slider) {
            slider.addEventListener("input", sliderChangeHandler);
            slider.addEventListener("change", sliderChangeHandler);
        }

        const playButton = this.getAnimationPlayButton();
        if (playButton) {
            playButton.addEventListener("click", (/* e: any */) => {
                if (!this._animation) {
                    this.startAnimation();
                }
                else {
                    this.stopAnimation();
                }
            });
        }

    }

    private convertDateColumn(rows: any[], dateColumnIndex: number): void {
        rows.forEach((row) => {
            row[dateColumnIndex] = moment.utc(row[dateColumnIndex]).startOf(this._period).valueOf();
        });
    }

    private resolvePeriodAndFormat(period: any): void {
        let found;
        if (period) {
            const option = period.toUpperCase();
            found = AnimationHelper._periodsAndFormats.find((paf: any) => option === paf.period);
        }
        this._period = (found) ? found.period : "years";
        this._periodFormat = (found) ? found.format : "YYYY";
    }

    private updateAnimationLabel(value: any): void {
        const label = this.getAnimationLabel();
        if (label) {
            label.innerHTML = (typeof value === "object" && "format" in value) ? value.format(this._periodFormat) : value;
        }
    }

    private processAnimationSliderValue(animationSliderValue: any): void {

        const animationEpochValue: number = animationSliderValue / 100 * (this._animationMax - this._animationMin) + this._animationMin;

        const animationValue: moment.Moment = moment.utc(animationEpochValue).startOf(this._period);

        if (this._lastAnimationSliderValue !== null && animationValue.isSame(this._lastAnimationSliderValue)) {
            return;
        }

        this._lastAnimationSliderValue = moment(animationValue);

        this.updateAnimationLabel(animationValue);

        const animationValueBefore = moment(animationValue).subtract(1, this._period);
        const animationValueAfter = moment(animationValue).add(1, this._period);

        if (this._sasLayer) {
            const clonedRenderer = AnimationHelper.hasClonableRenderer(this._sasLayer.renderer) ? (this._sasLayer.renderer as any).clone() : this._sasLayer.renderer;
            if (clonedRenderer.symbol) {
                clonedRenderer.symbol.outline = null;
            }  // TODO: Bind outline opacity to symbol opacity.  Disabled for now.
            if (clonedRenderer.defaultSymbol) {
                clonedRenderer.defaultSymbol.outline = null;
            } // TODO: Bind outline opacity to symbol opacity.  Disabled for now.
            const opacityVV = clonedRenderer.visualVariables.find((vv: any) => vv.type === "opacity");
            if (opacityVV) {
                opacityVV.stops = [
                    { opacity: 0, value: animationValueBefore.valueOf() },
                    { opacity: 1, value: animationValue.valueOf() },
                    { opacity: 0, value: animationValueAfter.valueOf() }
                ];
            }
            // In testing, it was determined that visualVariables array assignment
            // was doing something necessary to the initialization of the renderer.
            // Without it, past state was not cleared:
            clonedRenderer.visualVariables = clonedRenderer.visualVariables.slice();
            this._sasLayer.renderer = clonedRenderer;
        }

    }

    private updateAnimationValue(): void {

        const slider = this.getAnimationSlider();
        if (!slider) {
            return;
        }

        const sliderMax = parseInt(slider.max, undefined);
        const sliderMin = parseInt(slider.min, undefined);

        const newValue = parseFloat(slider.value) + (sliderMax - sliderMin) / 1000.0;
        slider.value = (newValue > sliderMax) ? sliderMin.toString() : newValue.toString();

        this.processAnimationSliderValue(slider.value);

    }

    private startAnimation(): void {
        this.stopAnimation();
        const button = this.getAnimationPlayButton();
        if (button) {
            button.value = "||";
        }
        this._animation = AnimationHelper.buildAnimationContext(() => { this.updateAnimationValue(); });
    }

    private stopAnimation(): void {
        if (this._animation) {
            this._animation.remove();
            this._animation = null;
            const button = this.getAnimationPlayButton();
            if (button) {
                button.value = ">>";
            }
        }
    }

}
export default AnimationHelper;
