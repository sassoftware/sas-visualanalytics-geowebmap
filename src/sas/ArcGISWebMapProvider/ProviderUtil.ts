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
    getScatterValue(): string {
        return "SCATTER";
    }
    getBubbleValue(): string {
        return "BUBBLE";
    }
    getChoroplethValue(): string {
        return "CHOROPLETH";
    }
    getSASFeatureLayerId(): string {
        return "_sasFeatureLayerId";
    }

    // MAP TODO: Get rid of this method (ProviderUtil.proxy)
    // proxy(f: any, thisArg: any) {
    //     return function (e: any) {
    //         return f.call(thisArg, e);
    //     }
    // }

    isValidCoordinate(n: any): boolean {
        return !isNaN(n) && n !== null;
    }

    findMinMax(items: any[], field?: string): any[] {  
        return items.reduce((acc: any, val: any) => {
            val = (field !== undefined) ? val[field] : val;
            if (val === null) { 
                val = undefined;
            }
            acc[0] = (acc[0] === undefined || val < acc[0]) ? val : acc[0];
            acc[1] = (acc[1] === undefined || val > acc[1]) ? val : acc[1];
            return acc;
        }, []);
    }

    // Credit to: http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c
    generateColors(numColors: number):any[] {
        let h = Math.floor(Math.random() * Math.floor(360));
        const goldenRatioConjugate = 0.618033988749895;
        const colors = [];

        const hsvToRgb = (s:number, v:number) => {
            let r:number;
            let g:number;
            let b:number;
            r = g = b = 0;

            const i = Math.floor(h * 6);
            const f = h * 6 - i;
            const p = v * (1 - s);
            const q = v * (1 - f * s);
            const t = v * (1 - (1 - f) * s);

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

        for (let j = 0; j < numColors; j++) {
            h += goldenRatioConjugate;
            h %= 1;
            colors.push(hsvToRgb(0.7, 0.95))
        }

        return colors;
    }

    generateUniqueVals(columns: any[], rows: any[], options: any): any[] {
        const categoryVals = {};
        const uniqueVals = [];
        const categoryColumnIndex = this.getIndexWithLabel(options.color, columns);
        const isChoropleth = options.visualizationType === this.getChoroplethValue();

        rows.forEach((row: any) => {
            if (!categoryVals.hasOwnProperty(row[categoryColumnIndex])) {
                categoryVals[row[categoryColumnIndex]] = true;
            }
        });

        const keys = Object.keys(categoryVals);
        const colors = this.generateColors(keys.length);

        for (let i = 0; i < keys.length; i++) {
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

    hasColorCategory(label: string, columns: any[]): boolean {
        if (!label) {
            return false;
        }
        const colorIndex = this.getIndexWithLabel(label, columns);
        return (columns[colorIndex].usage === "categorical" || columns[colorIndex].type === "string")
    }

    getNameWithLabel(label: string, columns: any[]): string {
        const match = columns.find((column: any) => {
            return column && column.label === label;
        });
        return (match) ? match.name : null;
    }

    getIndexWithLabel(label: string, columns: any[]): number {
        return columns.findIndex((column: any) => {
            return column && column.label === label;
        });
    }

    getNameWithUsage(usage: string, columns: any[]): string {
        const match = columns.find((column:any) => {
            return column && column.usage === usage;
        });
        return (match) ? match.name : null;
    }

    logError(error: any) {
        if (console && console.error) { console.error(error) };
    }

    publishMessage(msg: any) {
        const target = window.parent || window;
        const targetOrigin = this._selectionPublicationTargetOrigin();
        if (target) {
            target.postMessage(msg, targetOrigin);
        }
    }

    sqlEscape(values: any): any {

        const quoteAndEscape = (v:any) => {
            return "'" + this._sqlEscape(v) + "'";
        };

        if (!Array.isArray(values)) {
            return quoteAndEscape(values);
        }
        else {
            return values.map(quoteAndEscape, this);
        }

    }

    getObjectIdFieldName(): string {
        return this._objectIDFieldName;
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

        if (typeof value !== 'string') {
            return value;
        }

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