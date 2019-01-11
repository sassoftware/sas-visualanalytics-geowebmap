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

/// <amd-dependency path="dojo/Deferred" name="Deferred" />
/// <amd-dependency path="dojo/promise/Promise" name="Promise" />
declare const Deferred:any;
declare const Promise:any;
import Point from "esri/geometry/Point";
import Graphic from "esri/Graphic";
import FeatureLayer from "esri/layers/FeatureLayer";
import Field from "esri/layers/support/Field";
import PopupTemplate from "esri/PopupTemplate";
import ProviderUtil from "sas/ArcGISWebMapProvider/ProviderUtil";

/**
 * Base class for buildFeatureLayer() and support functions.  Subclasses
 * should override and construct a feature layer in buildFeatureLayerImpl().
 */
abstract class BaseLayerBuilder {

    protected _options:any;
    protected _rows:any[];
    protected _columns:any[];
    protected _util:any;

    constructor(options:any, rows:any[], columns:any[]) {
        this._options = options;
        this._rows = rows;
        this._columns = columns;
        this._util = new ProviderUtil();
    }

    buildFeatureLayer():any {

        const result = this.buildFeatureLayerImpl();

        let promise:any;

        if (result instanceof Promise) {
            promise = result;
        } else {
            const featureLayerReady = new Deferred();
            promise = featureLayerReady.promise;  
            featureLayerReady.resolve(result);  // Immediately resolve.
        }

        return promise;
    }

    // Subclasses should override this method.  Return string description of errors
    // for input options.
    abstract validateOptions():any;

    // Subclasses should override this method.  Return string description of errors
    // for results.
    abstract validateResults():any;

    // Subclasses should override this method.  Return where clause used by 
    // feature service (if any).
    getGeoIdFilter():any {
        return undefined;
    }

    // Subclasses should override this method.  Return a Promise or a feature layer.
    protected abstract buildFeatureLayerImpl():FeatureLayer;

    protected createGraphics():Graphic[] {

        const rowObjects = this.convertRowsToObjects(this._columns, this._rows);
        const latitudeColumnName = this._util.getNameWithLabel(this._options.y, this._columns);
        const longitudeColumnName = this._util.getNameWithLabel(this._options.x, this._columns);
        return rowObjects.map((row:any) => {
            return new Graphic({
                geometry: new Point({
                    x: !this._util.isValidCoordinate(row[longitudeColumnName]) ? 0 : row[longitudeColumnName], 
                    y: !this._util.isValidCoordinate(row[latitudeColumnName]) ? 0 : row[latitudeColumnName]
                }), // Assumes wkid 102100.
                attributes: row
            });
        });

    }

    protected createFields():Field[] {

        // Feature layer's "fields" property expects objects of {name, alias, type}.
        const fields = [new Field({name: this._util.getObjectIdFieldName(), alias: this._util.getObjectIdFieldName(), type: "oid"})];
        this._columns.forEach((column:any) => {
            fields.push(new Field({name: column.name, alias: column.label, type: ((column.type === "number") ? "double" : column.type)}));
        });
        return fields;

    } 

    protected convertRowsToObjects(columns:any[], rows:any[]):any[] {
        const objectIDFieldName = this._util.getObjectIdFieldName();
        return rows.map((row:any, i:number) => {
            const object = {};
            object[objectIDFieldName] = i; // Adding the object ID.
            let index = 0;
            columns.forEach((column:any) => {
                object[column.name] = (index < row.length) ? row[index] : null;
                ++index;
            });
            return object;
        });
    }

    protected createGenericUnformattedPopupTemplate(fields:any[]):PopupTemplate {
        const fieldInfos:any[] = [];
        fields.forEach((field:any) => {
            if (field.name !== this._util.getObjectIdFieldName() && field.label !== this._options.x && field.label !== this._options.y) {
                const fieldInfo = {fieldName: field.name, label: field.label, visible: true, format: {}}
                if (field.type === "number" || field.type === "double") {
                    fieldInfo.format = {digitSeparator: true};
                } // places: 2  
                fieldInfos.push(fieldInfo);
            }
        });
        return new PopupTemplate({title: this._options.title, content: [{type: "fields", fieldInfos}], fieldInfos: []}); 
    }

    protected buildAnimationVisualVariable(columns:any[], animationColumnLabel:string):any {
        const animationColumnName = this._util.getNameWithLabel(animationColumnLabel, columns);
        return {
            type: "opacity",
            field: animationColumnName
        };     
    }

    protected validateRequiredOptions(optionNames:string[]):any {

        let message;
        const missingNames:string[] = [];

        optionNames.forEach((name:string) =>{
            if (!(name in this._options) || !this._options[name] || this._options[name].toString().length === 0) {
                missingNames.push(name);
            }
        });

        // TODO: Localize warnings.

        if (missingNames.length > 0) { 
           message = "The following required options were not identified: " + missingNames.join(", ") + ".";
        }
        
        return message;

    }

    // Build simple layer (for scatter and bubble).
    protected buildSimpleFeatureLayer(renderer:any):FeatureLayer {
        return new FeatureLayer({
            id: this._util.getSASFeatureLayerId(),
            title: this._options.title,
            source: this.createGraphics(), 
            fields: this.createFields(), 
            objectIdField: this._util.getObjectIdFieldName(), 
            renderer, 
            spatialReference: {
                wkid: 4326
            },
            geometryType: "point", 
            popupTemplate: this.createGenericUnformattedPopupTemplate(this._columns)
        });
    }

    // Validates lat/long data (for scatter and bubble).
    protected validateCoordinates(rows:any[], columns:any[]):any {

        let warning;
        let invalidCount = 0;
        const latitudeColumnIndex = this._util.getIndexWithLabel(this._options.y, columns);
        const longitudeColumnIndex = this._util.getIndexWithLabel(this._options.x, columns);

        // TODO: Localize warnings.  

        if (latitudeColumnIndex < 0 || longitudeColumnIndex < 0) {
            warning = "Data for 'x' or 'y' coordinates could not be identified.";
        } else {
            rows.forEach((row:any) => {
                if (!this._util.isValidCoordinate(row[latitudeColumnIndex]) || 
                    !this._util.isValidCoordinate(row[longitudeColumnIndex]) ||
                    Math.abs(Math.round(row[latitudeColumnIndex])) > 90 || 
                    Math.abs(Math.round(row[longitudeColumnIndex])) > 180) {
                    ++invalidCount;
                }
            });
            if (invalidCount > 0) {
                warning = "Data contains missing or invalid coordinates (" + invalidCount + ").";
            }
        }

        return warning;

    }
}
export default BaseLayerBuilder;