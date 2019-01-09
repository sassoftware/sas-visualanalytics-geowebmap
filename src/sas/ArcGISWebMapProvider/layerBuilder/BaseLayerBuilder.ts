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

import ProviderUtil from "sas/ArcGISWebMapProvider/ProviderUtil";
import Point from "esri/geometry/Point";
import FeatureLayer from "esri/layers/FeatureLayer";
import { nullLiteral } from 'babel-types';

/**
 * Base class for buildFeatureLayer() and support functions.  Subclasses
 * should override and construct a feature layer in _buildFeatureLayerImpl().
 */
abstract class BaseLayerBuilder {

    protected _options:any;
    protected _rows:any;
    protected _columns:any;
    protected _util:any;

    public constructor(options:any, rows:any, columns:any) {
        this._options = options;
        this._rows = rows;
        this._columns = columns;
        this._util = new ProviderUtil();
    }

    public buildFeatureLayer () {

        var result = this._buildFeatureLayerImpl();

        var promise;

        if (result instanceof Promise) {
            promise = result;
        } else {
            var featureLayerReady = new Deferred();
            promise = featureLayerReady.promise;  
            featureLayerReady.resolve(result);  // Immediately resolve.
        }

        return promise;
    }

    // Subclasses should override this method.  Return string description of errors
    // for input options.
    public abstract validateOptions():any;

    // Subclasses should override this method.  Return string description of errors
    // for results.
    public abstract validateResults():any;

    // Subclasses should override this method.  Return where clause used by 
    // feature service (if any).
    public getGeoIdFilter():any {
        return undefined;
    }

    // Subclasses should override this method.  Return a Promise or a feature layer.
    protected abstract _buildFeatureLayerImpl():FeatureLayer;

    protected _createGraphics():any {

        var rowObjects = this.convertRowsToObjects(this._columns, this._rows);
        var latitudeColumnName = this._util.getNameWithLabel(this._options.y, this._columns);
        var longitudeColumnName = this._util.getNameWithLabel(this._options.x, this._columns);
        return rowObjects.map((row:any) => {
            return {
                geometry: new Point({
                    x: !this._util.isValidCoordinate(row[longitudeColumnName]) ? 0 : row[longitudeColumnName], 
                    y: !this._util.isValidCoordinate(row[latitudeColumnName]) ? 0 : row[latitudeColumnName]
                }), // Assumes wkid 102100.
                attributes: row
            };
        });

    }

    protected _createFields():any {

        // Feature layer's "fields" property expects objects of {name, alias, type}.
        var fields = [{name: this._util.getObjectIdFieldName(), alias: this._util.getObjectIdFieldName(), type: "oid"}];
        this._columns.forEach(function(column:any) {
            fields.push({name: column.name, alias: column.label, type: ((column.type === "number") ? "double" : column.type)});
        });
        return fields;

    } 

    protected convertRowsToObjects(columns:any, rows:any) {
        var objectIDFieldName = this._util.getObjectIdFieldName();
        return rows.map(function (row:any, i:number) {
            var object = {};
            object[objectIDFieldName] = i; // Adding the object ID.
            var index = 0;
            columns.forEach(function(column:any){
                object[column.name] = (index < row.length) ? row[index] : null;
                ++index;
            });
            return object;
        });
    }

    protected _createGenericUnformattedPopupTemplate(fields:any[]) {
        var fieldInfos:any[] = [];
        fields.forEach(this._util.proxy(function(field:any){
            if (field.name !== this._util.getObjectIdFieldName() && field.label !== this._options.x && field.label !== this._options.y) {
                var fieldInfo = {fieldName: field.name, label: field.label, visible: true}
                if (field.type === "number" || field.type === "double")
                    fieldInfo["format"] = {digitSeparator: true}; // places: 2  // MAP TODO: correct partial
                fieldInfos.push(fieldInfo);
            }
        }, this));
        return {title: this._options.title, content: [{type: "fields", fieldInfos: fieldInfos}], fieldInfos: []}; 
    }

    protected _buildAnimationVisualVariable(columns:any[], animationColumnLabel:string):any {
        var animationColumnName = this._util.getNameWithLabel(animationColumnLabel, columns);
        return {
            type: "opacity",
            field: animationColumnName
        };     
    }

    protected _validateRequiredOptions(optionNames:string[]):any {

        var message;
        var missingNames:string[] = [];

        optionNames.forEach((name:string) =>{
            if (!(name in this._options) || !this._options[name] || this._options[name].toString().length === 0)
                missingNames.push(name);
        });

        // TODO: Localize warnings.

        if (missingNames.length > 0) 
           message = "The following required options were not identified: " + missingNames.join(", ") + ".";
        
        return message;

    }

    // Build simple layer (for scatter and bubble).
    protected _buildSimpleFeatureLayer(renderer:any):FeatureLayer {
        return new FeatureLayer({
            id: this._util.getSASFeatureLayerId(),
            title: this._options.title,
            source: this._createGraphics(), 
            fields: this._createFields(), 
            objectIdField: this._util.getObjectIdFieldName(), 
            renderer: renderer, 
            spatialReference: {
                wkid: 4326
            },
            geometryType: "point", 
            popupTemplate: this._createGenericUnformattedPopupTemplate(this._columns)
        });
    }

    // Validates lat/long data (for scatter and bubble).
    protected _validateCoordinates(rows:any[], columns:any[]):any {

        var warning;
        var invalidCount = 0;
        var latitudeColumnIndex = this._util.getIndexWithLabel(this._options.y, columns);
        var longitudeColumnIndex = this._util.getIndexWithLabel(this._options.x, columns);

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
            if (invalidCount > 0)
                warning = "Data contains missing or invalid coordinates (" + invalidCount + ").";
        }

        return warning;

    }
}
export default BaseLayerBuilder;