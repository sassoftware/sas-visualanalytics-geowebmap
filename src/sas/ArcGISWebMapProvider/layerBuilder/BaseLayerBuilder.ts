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

import Point from "@arcgis/core/geometry/Point";
import SpatialReference from "@arcgis/core/geometry/SpatialReference";
import Graphic from "@arcgis/core/Graphic";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Field from "@arcgis/core/layers/support/Field";
import PopupTemplate from "@arcgis/core/PopupTemplate";
import Error from "sas/ArcGISWebMapProvider/Error";
import ProviderUtil from "sas/ArcGISWebMapProvider/ProviderUtil";

/**
 * Base class for buildFeatureLayer() and support functions.  Subclasses
 * should override and construct a feature layer in buildFeatureLayerImpl().
 */
abstract class BaseLayerBuilder {

    static EDITS_COMPLETED = "editsCompleted";
    static EDITS_APPLIED = "editsApplied";

    protected _options: any;
    protected _rows: any[];
    protected _columns: any[];

    constructor(options: any, rows: any[], columns: any[]) {
        this._options = options;
        this._rows = rows;
        this._columns = columns;
    }

    supportsEdits(): boolean {
        return false;
    }

    buildFeatureLayer(): Promise<FeatureLayer> {
        return this.buildFeatureLayerImpl();
    }

    // Subclasses should override this method.  Return string description of errors
    // for input options.
    abstract validateOptions(): Error[];

    // Subclasses should override this method.  Return string description of errors
    // for results.
    abstract validateResults(): Error[];

    // Subclasses should override this method.  Return where clause used by 
    // feature service (if any).
    getGeoIdFilter(): any {
        return undefined;
    }

    // Subclasses should override this method.  Return a Promise or a feature layer.
    protected abstract buildFeatureLayerImpl(): Promise<FeatureLayer>;

    protected createGraphics(): Graphic[] {

        const rowObjects = this.convertRowsToObjects(this._columns, this._rows);
        const latitudeColumnName = ProviderUtil.getNameWithLabel(this._options.y, this._columns);
        const longitudeColumnName = ProviderUtil.getNameWithLabel(this._options.x, this._columns);
        return rowObjects.map((row: any) => {
            return new Graphic({
                geometry: new Point({
                    x: !ProviderUtil.isValidCoordinate(row[longitudeColumnName]) ? 0 : row[longitudeColumnName],
                    y: !ProviderUtil.isValidCoordinate(row[latitudeColumnName]) ? 0 : row[latitudeColumnName]
                }), // Assumes wkid 102100.
                attributes: row
            });
        });

    }

    protected createFields(): Field[] {

        // Feature layer's "fields" property expects objects of {name, alias, type}.
        const fields = [new Field({ name: ProviderUtil.FIELD_NAME_OBJECT_ID, alias: ProviderUtil.FIELD_NAME_OBJECT_ID, type: "oid" })];
        this._columns.forEach((column: any) => {
            fields.push(new Field({ name: column.name, alias: column.label, type: ((column.type === "number") ? "double" : column.type) }));
        });
        return fields;

    }

    protected convertRowsToObjects(columns: any[], rows: any[]): any[] {
        const objectIDFieldName = ProviderUtil.FIELD_NAME_OBJECT_ID;
        return rows.map((row: any, i: number) => {
            const object = {};
            object[objectIDFieldName] = i; // Adding the object ID.
            let index = 0;
            columns.forEach((column: any) => {
                object[column.name] = (index < row.length) ? row[index] : null;
                ++index;
            });
            return object;
        });
    }

    protected createGenericUnformattedPopupTemplate(fields: any[]): PopupTemplate {
        const fieldInfos: any[] = [];
        fields.forEach((field: any) => {
            if (field.name !== ProviderUtil.FIELD_NAME_OBJECT_ID && field.name !== ProviderUtil.getNameWithLabel(this._options.x, fields) && field.name !== ProviderUtil.getNameWithLabel(this._options.y, fields)) {
                const fieldInfo = { fieldName: field.name, label: field.label, visible: true, format: {} }
                if (field.type === "number" || field.type === "double") {
                    fieldInfo.format = { digitSeparator: true };
                } // places: 2  
                fieldInfos.push(fieldInfo);
            }
        });
        return new PopupTemplate({ title: this._options.title, content: [{ type: "fields", fieldInfos }], fieldInfos: [] });
    }

    protected validateRequiredOptions(optionNames: string[]): Error[] {

        let message;
        const missingNames: string[] = [];

        optionNames.forEach((name: string) => {
            if (!(name in this._options) || !this._options[name] || this._options[name].toString().length === 0) {
                missingNames.push(name);
            }
        });

        if (missingNames.length > 0) {
            message = ProviderUtil.getResource("optionsNotIdentified", missingNames.join(", "));
        }

        return message ? [new Error(message)] : [];

    }

    // Build simple layer (for scatter and bubble).
    protected buildSimpleFeatureLayer(renderer: any): FeatureLayer {
        return new FeatureLayer({
            id: ProviderUtil.SAS_FEATURE_LAYER_ID,
            title: this._options.title,
            source: this.createGraphics(),
            fields: this.createFields(),
            objectIdField: ProviderUtil.FIELD_NAME_OBJECT_ID,
            renderer,
            spatialReference: SpatialReference.WGS84,
            elevationInfo: this.buildElevationInfo(),
            geometryType: "point",
            popupTemplate: this.createGenericUnformattedPopupTemplate(this._columns)
        });
    }

    protected buildElevationInfo(): __esri.FeatureLayerElevationInfo {
        return { mode: (this._options.useWebScene || this._options.use3D) ? "on-the-ground" : "relative-to-ground" };
    }

    // Validates lat/long data (for scatter and bubble).
    protected validateCoordinates(rows: any[], columns: any[]): Error[] {

        let error: Error | null = null;
        let invalidCount = 0;
        const latitudeColumnIndex = ProviderUtil.getIndexWithLabel(this._options.y, columns);
        const longitudeColumnIndex = ProviderUtil.getIndexWithLabel(this._options.x, columns);

        if (latitudeColumnIndex < 0 || longitudeColumnIndex < 0) {
            error = Error.error("dataNotIdentified");
        } else {
            rows.forEach((row: any) => {
                if (!ProviderUtil.isValidCoordinate(row[latitudeColumnIndex]) ||
                    !ProviderUtil.isValidCoordinate(row[longitudeColumnIndex]) ||
                    Math.abs(Math.round(row[latitudeColumnIndex])) > 90 ||
                    Math.abs(Math.round(row[longitudeColumnIndex])) > 180) {
                    ++invalidCount;
                }
            });
            if (invalidCount > 0) {
                error = Error.warning("invalidCoordinates", invalidCount.toString());
            }
        }

        return error ? [error] : [];

    }
}
export default BaseLayerBuilder;