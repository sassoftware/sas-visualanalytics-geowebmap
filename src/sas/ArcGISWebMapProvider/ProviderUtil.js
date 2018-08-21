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
 * Encapsulates utility features required by more than one class.
 */
define([
    "dojo/_base/declare"
], function(declare){

    var _objectIDFieldName = "ObjectId";

    return declare(null, {

        getScatterValue: function () { return "SCATTER" },
        getBubbleValue: function () { return "BUBBLE" },
        getChoroplethValue: function () { return "CHOROPLETH" },

        proxy: function (f, thisArg) {
            return function (e) {
                f.call(thisArg, e);
            }
        },

        getObjectIdFieldName: function () {
            return _objectIDFieldName;
        },

        isValidCoordinate: function (n) {
            return !isNaN(n) && n !== null;
        },

        findMinMax: function (items, field) {
            return items.reduce(function (acc, val) {
                val = (field !== undefined) ? val[field] : val;
                acc[0] = (acc[0] === undefined || val < acc[0]) ? val : acc[0]
                acc[1] = (acc[1] === undefined || val > acc[1]) ? val : acc[1]
                return acc;
            }, []);
        },

        //Credit to: http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c
        generateColors: function (numColors) {
            var h = Math.floor(Math.random() * Math.floor(360));
            var goldenRatioConjugate = 0.618033988749895;
            var colors = [];

            function hsvToRgb (s, v) {
                var r, g, b;

                var i = Math.floor(h * 6);
                var f = h * 6 - i;
                var p = v * (1 - s);
                var q = v * (1 - f * s);
                var t = v * (1 - (1 - f) * s);

                switch (i % 6){
                    case 0: r = v; g = t; b = p; break;
                    case 1: r = q; g = v; b = p; break;
                    case 2: r = p; g = v; b = t; break;
                    case 3: r = p; g = q; b = v; break;
                    case 4: r = t; g = p; b = v; break;
                    case 5: r = v; g = p; b = q; break;
                }

                return {r: r * 255, g: g * 255, b: b * 255, a: 1};
            }

            for (var i = 0; i < numColors; i++) {
                h += goldenRatioConjugate;
                h %= 1;
                colors.push(hsvToRgb(0.7, 0.95))
            }

            return colors;
        },

        generateUniqueVals: function (columns, rows, options) {
            var categoryVals = {};
            var uniqueVals = [];
            var categoryColumnIndex = this.getIndexWithLabel(options.color, columns);
            var isChoropleth = options.visualizationType === this.getChoroplethValue();

            rows.forEach(function (row) {
               if (!categoryVals.hasOwnProperty(row[categoryColumnIndex]))
                   categoryVals[row[categoryColumnIndex]] = true;
            });

            var keys = Object.keys(categoryVals);
            var colors = this.generateColors(keys.length);

            for (var i = 0; i < keys.length; i++) {
                uniqueVals.push({
                    value: keys[i],
                    symbol: {
                        type: isChoropleth ? "simple-fill" : "simple-marker",  // autocasts as new SimpleMarkerSymbol()
                        color: colors[i],
                        size: isChoropleth ? null : 6,
                        style: isChoropleth ? "solid" : null,
                        outline: options.animation
                          ? null
                          : {
                              width: 0.5,
                              color: options.outline
                          }
                    }
                });
            }

            return uniqueVals;
        },

        hasColorCategory: function (label, columns) {
            if (!label)
                return false;
            var colorIndex = this.getIndexWithLabel(label, columns);
            return (columns[colorIndex].usage === "categorical" || columns[colorIndex].type === "string")
        },

        getNameWithLabel: function (label, columns) {
            var match = columns.find(function(column) { return column && column.label === label; });
            return (match) ? match.name : null;
        },

        getIndexWithLabel: function (label, columns) {
            return columns.findIndex(function(column) { return column && column.label === label; });
        },

        getNameWithUsage: function (usage, columns) {
            var match = columns.find(function(column) { return column && column.usage === usage; });
            return (match) ? match.name : null;
        },

        logError: function (error) {
            if (console && console.error)
                console.error(error);
        },

        publishMessage: function (msg) {
            var target = window.parent || window;
            var targetOrigin = this._selectionPublicationTargetOrigin();
            if (target)
                target.postMessage(msg,targetOrigin);
        }, 

        sqlEscape: function (values) {

            var quoteAndEscape = function(v){
                return "'" + this._sqlEscape(v) + "'";
            };

            if (!Array.isArray(values)) 
                return quoteAndEscape(values);
            else
                return values.map(quoteAndEscape,this);

        },

        /**
         * Defines the allowed target for the publication of selection events
         * on the map.  For maximum security, this should return the most 
         * restrictive target possible.  Will depend on where this code is 
         * deployed in relation to VA (e.g., the same domain or a different 
         * domain).  
         */
        _selectionPublicationTargetOrigin: function () {
            return "*"; // Lock down as needed.  E.g., (window.location !== window.parent.location) ? document.referrer : document.location.href;
        },

        // Following is a variation from sql-escape (https://github.com/packagestats/sql-escape).
        _sqlEscape: function (value) {

            if (typeof value !== 'string')
                return value;
        
            return value.replace(/[\0\x08\x09\x1a\n\r"'\\%]/g, function (char) { // eslint-disable-line no-control-regex
                switch (char) {
                    case "\0":
                        return "\\0";
                    case "\x08":
                        return "\\b";
                    case "\x09":
                        return "\\t";
                    case "\x1a":
                        return "\\z";
                    case "\n":
                        return "\\n";
                    case "\r":
                        return "\\r";
                    case "\"":
                    case "'":
                    case "\\":
                    case "%":
                        return "\\" + char; // prepends a backslash to backslash, percent,
                                            // and double/single quotes
                }
            });

        }

    });

});
