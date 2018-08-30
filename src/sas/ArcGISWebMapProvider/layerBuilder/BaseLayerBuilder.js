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
 * Base class for buildFeatureLayer() and support functions.  Subclasses
 * should override and construct a feature layer in _buildFeatureLayerImpl().
 */
define([
    "esri/geometry/Point",
    "esri/layers/FeatureLayer",
    "sas/ArcGISWebMapProvider/ProviderUtil",
    "dojo/promise/Promise",
    "dojo/Deferred",
    "dojo/_base/declare"
], function(Point, FeatureLayer, ProviderUtil, Promise, Deferred, declare){

    return declare(null, {

        _options: null,
        _rows: null,
        _columns: null,
        _util: null,

        constructor: function (options, rows, columns) {
            this._options = options;
            this._rows = rows;
            this._columns = columns;
            this._util = new ProviderUtil();
        },

        buildFeatureLayer: function () {

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
        },

        // Subclasses should override this method.  Return string description of errors.
        validateResults: function () {
            return null;
        },

        // Subclasses should override this method.  Return where clause used by 
        // feature service (if any).
        getGeoIdFilter: function () {
            return null;
        },

        // Subclasses should override this method.  Return a Promise or a feature layer.
        _buildFeatureLayerImpl: function () {
            return null;
        },

        _createGraphics: function() {

            var rowObjects = this.convertRowsToObjects(this._columns, this._rows);
            var latitudeColumnName = this._util.getNameWithLabel(this._options.y, this._columns);
            var longitudeColumnName = this._util.getNameWithLabel(this._options.x, this._columns);
            return rowObjects.map(this._util.proxy(function (row) {
                return {
                    geometry: new Point({
                        x: !this._util.isValidCoordinate(row[longitudeColumnName]) ? 0 : row[longitudeColumnName], 
                        y: !this._util.isValidCoordinate(row[latitudeColumnName]) ? 0 : row[latitudeColumnName]
                    }), // Assumes wkid 102100.
                    attributes: row
                };
            }, this));

        },

        _createFields: function() {

            // Feature layer's "fields" property expects objects of {name, alias, type}.
            var fields = [{name: this._util.getObjectIdFieldName(), alias: this._util.getObjectIdFieldName(), type: "oid"}];
            this._columns.forEach(function(column) {
                fields.push({name: column.name, alias: column.label, type: ((column.type === "number") ? "double" : column.type)});
            });
            return fields;

        }, 

        convertRowsToObjects: function(columns, rows) {
            var objectIDFieldName = this._util.getObjectIdFieldName();
            return rows.map(function (row, i) {
                var object = {};
                object[objectIDFieldName] = i; // Adding the object ID.
                var index = 0;
                columns.forEach(function(column){
                    object[column.name] = (index < row.length) ? row[index] : null;
                    ++index;
                });
                return object;
            });
        },

        _createGenericUnformattedPopupTemplate: function (fields) {
            var fieldInfos = [];
            fields.forEach(this._util.proxy(function(field){
                if (field.name !== this._util.getObjectIdFieldName() && field.label !== this._options.x && field.label !== this._options.y) {
                    var fieldInfo = {fieldName: field.name, label: field.label, visible: true}
                    if (field.type === "number" || field.type === "double")
                        fieldInfo.format = {digitSeparator: true}; // places: 2
                    fieldInfos.push(fieldInfo);
                }
            }, this));
            return {title: this._options.title, content: [{type: "fields", fieldInfos: fieldInfos}], fieldInfos: []}; 
        }, 

        _buildAnimationVisualVariable: function (columns, animationColumnLabel) {
            var animationColumnName = this._util.getNameWithLabel(animationColumnLabel, columns);
            return {
                type: "opacity",
                field: animationColumnName
            };     
        },

        // Build simple layer (for scatter and bubble).
        _buildSimpleFeatureLayer: function(renderer) {
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
        }, 

        // Validates lat/long data (for scatter and bubble).
        _validateCoordinates: function (rows, columns) {

            var warning;
            var invalidCount = 0;
            var latitudeColumnIndex = this._util.getIndexWithLabel(this._options.y, columns);
            var longitudeColumnIndex = this._util.getIndexWithLabel(this._options.x, columns);

            // TODO: Localize warnings.  

            if (latitudeColumnIndex < 0 || longitudeColumnIndex < 0) {
                warning = "Data for 'x' or 'y' coordinates could not be identified.";
            } else {
                rows.forEach(function(row){
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

    });

});
