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
class ProviderUtil {

    private _objectIDFieldName: string = "ObjectId";

    // MAP TODO: Use statics.

    // MAP TODO: Convert these to constants.
    public getScatterValue(): string {
        return "SCATTER";
    }
    public getBubbleValue(): string {
        return "BUBBLE";
    }
    public getChoroplethValue(): string {
        return "CHOROPLETH";
    }
    public getSASFeatureLayerId(): string {
        return "_sasFeatureLayerId";
    }

    // MAP TODO: Get rid of this method (ProviderUtil.proxy)
    public proxy(f: any, thisArg: any) {
        return function (e: any) {
            return f.call(thisArg, e);
        }
    }

    private getObjectIdFieldName(): string {
        return this._objectIDFieldName;
    }

    public isValidCoordinate(n: any): boolean {
        return !isNaN(n) && n !== null;
    }

    public findMinMax(items: any, field: any): any {  
        return items.reduce(function (acc: any, val: any) {
            val = (field !== undefined) ? val[field] : val;
            if (val === null) 
                val = undefined;
            acc[0] = (acc[0] === undefined || val < acc[0]) ? val : acc[0];
            acc[1] = (acc[1] === undefined || val > acc[1]) ? val : acc[1];
            return acc;
        }, []);
    }

    //Credit to: http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c
    public generateColors(numColors: number):any {
        var h = Math.floor(Math.random() * Math.floor(360));
        var goldenRatioConjugate = 0.618033988749895;
        var colors = [];

        var hsvToRgb = (s:number, v:number) => {
            var r:number, g:number, b:number;
            r = g = b = 0;

            var i = Math.floor(h * 6);
            var f = h * 6 - i;
            var p = v * (1 - s);
            var q = v * (1 - f * s);
            var t = v * (1 - (1 - f) * s);

            switch (i % 6) {
                case 0:
                    r = v;
                    g = t;
                    b = p;
                    break;
                case 1:
                    r = q;
                    g = v;
                    b = p;
                    break;
                case 2:
                    r = p;
                    g = v;
                    b = t;
                    break;
                case 3:
                    r = p;
                    g = q;
                    b = v;
                    break;
                case 4:
                    r = t;
                    g = p;
                    b = v;
                    break;
                case 5:
                    r = v;
                    g = p;
                    b = q;
                    break;
            }

            return {
                r: r * 255,
                g: g * 255,
                b: b * 255,
                a: 1
            };
        }

        for (var i = 0; i < numColors; i++) {
            h += goldenRatioConjugate;
            h %= 1;
            colors.push(hsvToRgb(0.7, 0.95))
        }

        return colors;
    }

    public generateUniqueVals(columns: any, rows: any, options: any): any {
        var categoryVals = {};
        var uniqueVals = [];
        var categoryColumnIndex = this.getIndexWithLabel(options.color, columns);
        var isChoropleth = options.visualizationType === this.getChoroplethValue();

        rows.forEach(function (row: any) {
            if (!categoryVals.hasOwnProperty(row[categoryColumnIndex]))
                categoryVals[row[categoryColumnIndex]] = true;
        });

        var keys = Object.keys(categoryVals);
        var colors = this.generateColors(keys.length);

        for (var i = 0; i < keys.length; i++) {
            uniqueVals.push({
                value: keys[i],
                symbol: {
                    type: isChoropleth ? "simple-fill" : "simple-marker", // autocasts as new SimpleMarkerSymbol()
                    color: colors[i],
                    size: isChoropleth ? null : 6,
                    style: isChoropleth ? "solid" : null,
                    outline: options.animation ?
                        null : {
                            width: 0.5,
                            color: options.outline
                        }
                }
            });
        }

        return uniqueVals;
    }

    public hasColorCategory(label: string, columns: any): boolean {
        if (!label)
            return false;
        var colorIndex = this.getIndexWithLabel(label, columns);
        return (columns[colorIndex].usage === "categorical" || columns[colorIndex].type === "string")
    }

    public getNameWithLabel(label: string, columns: any): string {
        var match = columns.find(function (column: any) {
            return column && column.label === label;
        });
        return (match) ? match.name : null;
    }

    public getIndexWithLabel(label: string, columns: any): number {
        return columns.findIndex(function (column: any) {
            return column && column.label === label;
        });
    }

    public getNameWithUsage(usage: any, columns: any): string {
        var match = columns.find(function (column:any) {
            return column && column.usage === usage;
        });
        return (match) ? match.name : null;
    }

    public logError(error: any) {
        if (console && console.error)
            console.error(error);
    }

    public publishMessage(msg: any) {
        var target = window.parent || window;
        var targetOrigin = this._selectionPublicationTargetOrigin();
        if (target)
            target.postMessage(msg, targetOrigin);
    }

    public sqlEscape(values: any): any {

        var quoteAndEscape = function (v:any) {
            return "'" + this._sqlEscape(v) + "'";
        };

        if (!Array.isArray(values))
            return quoteAndEscape(values);
        else
            return values.map(quoteAndEscape, this);

    }

    /**
     * Defines the allowed target for the publication of selection events
     * on the map.  For maximum security, this should return the most 
     * restrictive target possible.  Will depend on where this code is 
     * deployed in relation to VA (e.g., the same domain or a different 
     * domain).  
     */
    private _selectionPublicationTargetOrigin(): string {
        return "*"; // Lock down as needed.  E.g., (window.location !== window.parent.location) ? document.referrer : document.location.href;
    }

    // Following is a variation from sql-escape (https://github.com/packagestats/sql-escape).
    private _sqlEscape(value: any): any {

        if (typeof value !== 'string')
            return value;

        return value.replace(/[\0\x08\x09\x1a\n\r"'\\%]/g,  (char:string):string => { // eslint-disable-line no-control-regex
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
                default:
                    return char;
            }
        });
    }

}
export default ProviderUtil;