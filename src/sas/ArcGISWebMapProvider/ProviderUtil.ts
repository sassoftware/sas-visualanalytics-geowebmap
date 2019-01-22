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

import moment from "moment/moment";

/**
 * Encapsulates utility features required by more than one class.
 */
class ProviderUtil {

    static VISUALIZATION_TYPE_SCATTER:string = "SCATTER";
    static VISUALIZATION_TYPE_BUBBLE:string = "BUBBLE";
    static VISUALIZATION_TYPE_CHOROPLETH:string = "CHOROPLETH";
    static FIELD_NAME_OBJECT_ID:string = "ObjectId";
    static SAS_FEATURE_LAYER_ID:string = "_sasFeatureLayerId";

    static isValidCoordinate(n: any): boolean {
        return !isNaN(n) && n !== null;
    }

    static findMinMax(items: any[], field?: number): any[] {  
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

    static generateUniqueVals(columns: any[], rows: any[], options: any): any[] {
        const categoryVals = {};
        const uniqueVals = [];
        const categoryColumnIndex = ProviderUtil.getIndexWithLabel(options.color, columns);
        const isChoropleth = options.visualizationType === ProviderUtil.VISUALIZATION_TYPE_CHOROPLETH;

        rows.forEach((row: any) => {
            if (!categoryVals.hasOwnProperty(row[categoryColumnIndex])) {
                categoryVals[row[categoryColumnIndex]] = true;
            }
        });

        const keys = Object.keys(categoryVals);
        const colors = ProviderUtil.generateColors(keys.length);

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

    static hasColorCategory(label: string, columns: any[]): boolean {
        if (!label) {
            return false;
        }
        const colorIndex = ProviderUtil.getIndexWithLabel(label, columns);
        return (columns[colorIndex].usage === "categorical" || columns[colorIndex].type === "string")
    }

    static getNameWithLabel(label: string, columns: any[]): string {
        const match = columns.find((column: any) => {
            return column && column.label === label;
        });
        return (match) ? match.name : null;
    }

    static getIndexWithLabel(label: string, columns: any[]): number {
        return columns.findIndex((column: any) => {
            return column && column.label === label;
        });
    }

    static getNameWithUsage(usage: string, columns: any[]): string {
        const match = columns.find((column:any) => {
            return column && column.usage === usage;
        });
        return (match) ? match.name : null;
    }

    static logError(error: any) {
        if (console && console.error) { console.error(error) };
    }

    static publishMessage(msg: any) {
        const target = window.parent || window;
        const targetOrigin = ProviderUtil.selectionPublicationTargetOrigin();
        if (target) {
            target.postMessage(msg, targetOrigin);
        }
    }

    static sqlEscape(values: any): any {

        const quoteAndEscape = (v:any) => {
            return "'" + ProviderUtil.sqlEscapeImpl(v) + "'";
        };

        if (!Array.isArray(values)) {
            return quoteAndEscape(values);
        }
        else {
            return values.map(quoteAndEscape);
        }

    }

    // See also https://github.com/sassoftware/sas-visualanalytics-thirdpartyvisualizations.
    static convertToEpochMS(value:any, sasFormat?:string) {

        let date:moment.Moment;

        if (sasFormat === "DDMMYY8" && typeof value === "string") {
            date = moment.utc(value, "DD/MM/YYYY");
        }
        else if (sasFormat === "DATE9" && typeof value === "string") { 
            date = moment.utc(value, "DDMMMYYYY");
        }
        else {
            date = moment.utc(value);
        }

        return date.valueOf(); // Milliseconds since Jan. 1, 1970, UTC.

    }

    /**
     * Defines the allowed target for the publication of selection events
     * on the map.  For maximum security, this should return the most 
     * restrictive target possible.  Will depend on where this code is 
     * deployed in relation to VA (e.g., the same domain or a different 
     * domain).  
     */
    private static selectionPublicationTargetOrigin(): string {
        return "*"; // Lock down as needed.  E.g., (window.location !== window.parent.location) ? document.referrer : document.location.href;
    }

    // Following is a variation from sql-escape (https://github.com/packagestats/sql-escape).
    private static sqlEscapeImpl(value: any): any {

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

    // Credit to: http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c
    private static generateColors(numColors: number):any[] {
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
}
export default ProviderUtil;