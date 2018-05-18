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
 * Encapsulate the logic for controlling animations.  Asserts that an animation will
 * control opacity over a date range.  Does not currently work with choropleths or
 * SceneViews.
 */
define([
    "moment",
    "sas/ArcGISWebMapProvider/ProviderUtil",
    "dojo/_base/declare"
], function(moment, ProviderUtil, declare){

    var _sasLayer;
    var _util;
    var _period;
    var _periodFormat;
    var _animationLabel;
    var _animationPlayButton;
    var _animationSlider;   
    var _animationMin;
    var _animationMax;
    var _lastAnimationSliderValue;
    var _animation;

    // See https://momentjs.com/docs/#/manipulating/add/ and/or moment.d.ts unitOfTime.
    var _periodsAndFormats = [
        {period: "YEAR", format: "YYYY"},
        {period: "YEARS", format: "YYYY"},
        {period: "Y", format: "YYYY"},
        {period: "QUARTER", format: "L"},
        {period: "QUARTERS", format: "L"},
        {period: "Q", format: "L"},
        {period: "MONTH", format: "L"},
        {period: "MONTHS", format: "L"},
        {period: "M", format: "L"},
        {period: "WEEK", format: "L"},
        {period: "WEEKS", format: "L"},
        {period: "W", format: "L"},
        {period: "DAY", format: "L"},
        {period: "DAYS", format: "L"},
        {period: "D", format: "L"},
        {period: "HOUR", format: "LT"},
        {period: "HOURS", format: "LT"},
        {period: "H", format: "LT"},
        {period: "MINUTE", format: "LT"},
        {period: "MINUTES", format: "LT"},
        {period: "M", format: "LT"},
        {period: "SECOND", format: "LTS"},
        {period: "SECONDS", format: "LTS"},
        {period: "S", format: "LTS"},
        {period: "MILLISECOND", format: "x"},
        {period: "MILLISECONDS", format: "x"},
        {period: "MS", format: "x"}
    ];

    var _animate = function (_updateAnimationValueFunction) {

        var animating = true;

        var frame = function() {
            if (!animating)
                return;
            _updateAnimationValueFunction();
            setTimeout(function(){ window.requestAnimationFrame(frame); }, 1000 / 30);  // 30 fps
        };

        frame();

        return {
            remove: function() {
                animating = false;
            }
        }

    };

    return declare(null, {

        _getAnimationSlider: function() { 
            if (!_animationSlider)
                _animationSlider = document.getElementById("animationSlider");
            return _animationSlider; 
        },

        _getAnimationPlayButton: function() { 
            if (!_animationPlayButton)
                _animationPlayButton = document.getElementById("animationPlayButton");
            return _animationPlayButton; 
        },

        _getAnimationLabel: function() {
            if (!_animationLabel)
                _animationLabel = document.getElementById("animationLabel");
            return _animationLabel;
        },

        constructor: function(animationPeriod) {
            this._resolvePeriodAndFormat(animationPeriod);
            _util = new ProviderUtil();
            this._initializeAnimationControls();
        }, 

        buildAnimationVisualVariable: function (columns, animationColumnLabel) {
            var animationColumnName = _util.getNameWithLabel(animationColumnLabel, columns);
            return {
                type: "opacity",
                field: animationColumnName
            };     
        },

        generateSampleAnimationData: function(result, colorColumnLabel, sizeColumnLabel, animationColumnLabel) {
            var colorIndex = _util.getIndexWithLabel(colorColumnLabel, result.columns);
            var sizeIndex = _util.getIndexWithLabel(sizeColumnLabel, result.columns);
            var animationIndex = _util.getIndexWithLabel(animationColumnLabel, result.columns);
            var initialLength = result.data.length;
            for (var x = 0; x < initialLength; ++x) {
                for (var y = 1; y < 11; ++y) {  // Add ten years of sample data.
                    var clone = result.data[x].slice();
                    clone[animationIndex] = moment(clone[animationIndex]).startOf(_period).add(y,_period);
                    if (colorIndex > -1)
                        clone[colorIndex] = clone[colorIndex] * y;  // Progressively approach color max.
                    if (sizeIndex > -1)
                        clone[sizeIndex] = clone[sizeIndex] * 2 * Math.random(); // Randomize size.
                    // Note: if neither size nor color vary, make the sample data randomly omit 25% of the rows (for testing scatter plots).
                    if (colorIndex > -1 || sizeIndex > -1 || Math.random() > 0.75)
                        result.data.push(clone);
                }
            }
        },

        initializeAnimationData: function(event, animationColumnLabel) {
            _lastAnimationSliderValue = null;
            var animationIndex = _util.getIndexWithLabel(animationColumnLabel, event.data.columns);
            this._convertDateColumn(event.data.data,animationIndex);
            var minMax = _util.findMinMax(event.data.data,animationIndex);  
            _animationMin = moment(minMax[0]).startOf(_period);
            _animationMax = moment(minMax[1]).endOf(_period); 
        },

        initializeAnimation: function(sasLayer) {
            _sasLayer = sasLayer;
            var slider = this._getAnimationSlider();
            this._processAnimationSliderValue((slider) ? slider.value : 0);
        },

        _initializeAnimationControls: function () {

            var viewDiv = document.getElementById("viewDiv");
            var animationControls = document.getElementById("animationControls");

            if (viewDiv)
                viewDiv.classList.add("animating");
            if (animationControls)
                animationControls.classList.add("animating");

            var sliderChangeHandler = _util.proxy(function(event){ 
                this._stopAnimation();
                this._processAnimationSliderValue(event.target.value) 
            }, this);

            var slider = this._getAnimationSlider();
            slider.addEventListener("input", sliderChangeHandler);
            slider.addEventListener("change", sliderChangeHandler);

            var playButton = this._getAnimationPlayButton();
            playButton.addEventListener("click", _util.proxy(function(e){
                if (!_animation) 
                    this._startAnimation();
                else
                    this._stopAnimation();
             },this));

        },

        _convertDateColumn: function (rows, dateColumnIndex) {
            rows.forEach(function(row){
                row[dateColumnIndex] = moment(row[dateColumnIndex]).startOf(_period);
            });
        },

        _resolvePeriodAndFormat: function (period) {
            var found;
            if (period) {
                var option = period.toUpperCase();
                found = _periodsAndFormats.find(function (paf) { return option === paf.period; });
            }
            _period = (found) ? found.period : "years";
            _periodFormat = (found) ? found.format : "YYYY";
        },

        _updateAnimationLabel: function(value) {
            this._getAnimationLabel().innerHTML = (typeof value === "object" && "format" in value) ? value.format(_periodFormat) : value;
        },

        _processAnimationSliderValue: function(animationSliderValue) {

            var animationValue = animationSliderValue / 100 * (_animationMax - _animationMin) + _animationMin;

            animationValue = moment(animationValue).startOf(_period);

            if (animationValue.isSame(_lastAnimationSliderValue)) 
                 return;
            
            _lastAnimationSliderValue = moment(animationValue);

            this._updateAnimationLabel(animationValue);

            var animationValueBefore = moment(animationValue).subtract(1, _period);
            var animationValueAfter  = moment(animationValue).add(1, _period);

            if (_sasLayer) {
                var clonedRenderer = _sasLayer.renderer.clone();
                clonedRenderer.symbol.outline = null;  // TODO: Bind outline opacity to symbol opacity.  Disabled for now.
                var opacityVV = clonedRenderer.visualVariables.find(function (vv){ return vv.type === "opacity"; });
                if (opacityVV) {
                    opacityVV.stops = [
                        {opacity: 0, value: animationValueBefore}, 
                        {opacity: 1, value: animationValue},
                        {opacity: 0, value: animationValueAfter} 
                    ];
                }
                // In testing, it was determined that visualVariables array assignment
                // was doing something necessary to the initialization of the renderer.
                // Without it, past state was not cleared:
                clonedRenderer.visualVariables = clonedRenderer.visualVariables.slice();
                _sasLayer.renderer = clonedRenderer;
            }
            
        },

        _updateAnimationValue: function () {

            var slider = this._getAnimationSlider();

            var sliderMax = parseInt(slider.max);
            var sliderMin = parseInt(slider.min);
           
            var newValue = parseFloat(slider.value) + (sliderMax - sliderMin) / 1000.0;
            slider.value = (newValue > sliderMax) ? sliderMin : newValue;
            
            this._processAnimationSliderValue(slider.value);

        },

        _startAnimation: function() {
            this._stopAnimation();
            this._getAnimationPlayButton().value = "||";
            _animation = _animate(_util.proxy(this._updateAnimationValue, this));
        },

        _stopAnimation: function() {
            if (_animation) {
                _animation.remove();
                _animation = null;
                this._getAnimationPlayButton().value = ">>";
            }
        }

    });

});
