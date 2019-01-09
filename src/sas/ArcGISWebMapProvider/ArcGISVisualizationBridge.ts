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

/// <amd-dependency path="dojo/dom-construct" name="domConstruct" />
declare const domConstruct: any;

import Expand from "esri/widgets/Expand";
import Legend from "esri/widgets/Legend";
import AnimationHelper from "sas/ArcGISWebMapProvider/AnimationHelper";
import SmartLegendHelper from "sas/ArcGISWebMapProvider/SmartLegendHelper";
import SelectionHelper from "sas/ArcGISWebMapProvider/SelectionHelper";
import ProviderUtil from "sas/ArcGISWebMapProvider/ProviderUtil";
import FeatureLayerFactory from "sas/ArcGISWebMapProvider/layerBuilder/FeatureLayerFactory";
//import domConstruct from "dojo/dom-construct";
import View from "esri/views/View";
import moment from "moment/moment";

/**
 * Responsible for consuming incoming data from SAS Visual Analytics to create a 
 * feature layer in a web map.
 */
class ArcGISVisualizationBridge {

    private _options: any;
    private _mapView: View;
    private _sasLegend: any;
    private _util: any;
    private _animationHelper: any;
    private _selectionHelper: any;
    private _smartLegendHelper: any;
    private _lastMessageReceivedBeforeMapViewRegistered: any;
    private _hasUserPanned: boolean = false; // Tagged to allow automatically fitting extent to data 
    // unless the user has manually panned.
    private _warningControl: any;
    private _warning: any;

    private getMapView(): View {
        return this._mapView;
    }

    public constructor(visualizationOptions: any) {

        this._util = new ProviderUtil();
        this._selectionHelper = new SelectionHelper();

        // Initialize options.

        this._options = visualizationOptions;

        this._options.visualizationType = (this._options.visualizationType) ? this._options.visualizationType.toUpperCase() : null;
        if (this._options.visualizationType !== this._util.getScatterValue() &&
            this._options.visualizationType !== this._util.getBubbleValue() &&
            this._options.visualizationType !== this._util.getChoroplethValue()) {
            if (this._options.geoId)
                this._options.visualizationType = this._util.getChoroplethValue();
            else if (this._options.size)
                this._options.visualizationType = this._util.getBubbleValue();
            else
                this._options.visualizationType = this._util.getScatterValue();
        }

        this._options.x = this._options.x || "Longitude";
        this._options.y = this._options.y || "Latitude";

        if (this._options.colorMin === undefined || this._options.colorMin === null)
            this._options.colorMin = "#bfe4e7"; // Or a named color, e.g., "blue".
        if (this._options.colorMax === undefined || this._options.colorMax === null)
            this._options.colorMax = "#00929f";
        if (this._options.outline === undefined || this._options.outline === null)
            this._options.outline = "#007E88";

        this._options.title = this._options.title || this._options.geoId || "SAS VA Layer";

        this._options.useSampleData = (this._options.useSampleData && this._options.useSampleData.toUpperCase() === "TRUE");

        this._options.useSmartLegends = (this._options.useSmartLegends && this._options.useSmartLegends.toUpperCase() === "TRUE");

        if (this._options.featureServiceWhere && this._options.featureServiceWhere.length < 1)
            this._options.featureServiceWhere = null;

        this._options.zIndex = Math.max(parseInt(this._options.zIndex), 0); // Resolves to NaN or a whole number.
        this._options.featureServiceMaxAllowableOffset = parseFloat(this._options.featureServiceMaxAllowableOffset);
        this._options.featuresMax = parseInt(this._options.featuresMax);
        this._options.filterToFeatureServiceGeoId = (this._options.filterToFeatureServiceGeoId && this._options.filterToFeatureServiceGeoId.toUpperCase() === "TRUE");

        // If not using sample data, listen for data-driven content.

        if (!this._options.useSampleData)
            window.addEventListener("message", this._util.proxy(this.onMessage, this));

        // Other tasks.

        if (this._options.animation)
            this._animationHelper = new AnimationHelper(this._options.period);

        if (this._options.useSmartLegends)
            this._smartLegendHelper = new SmartLegendHelper();

    }

    public registerMapView(mapView: View) {

        this._mapView = mapView;

        if (this._options.visualizationType !== this._util.getScatterValue() || this._options.color) {
            this._sasLegend = new Legend({
                view: this._mapView,
                container: document.createElement("div")
            });
            var legendExpand = new Expand({
                expandIconClass: "esri-icon-question",
                view: this._mapView,
                content: this._sasLegend.domNode,
                group: "bottom-right"
            });
            this._mapView.ui.add(legendExpand, "bottom-right");
        }

        // If using sample data, load it.

        if (this._options.useSampleData) {
            import("sas/ArcGISWebMapProvider/SampleData.json").then((result:any) => {
                if (this._options.useSampleData && this._options.animation)
                    this._animationHelper.generateSampleAnimationData(result, this._options.color, this._options.size, this._options.animation);
                this.onMessage({
                    data: result,
                    origin: window.location.origin
                });
            },
            (error: any) => {
                this._util.logError(error);
            });

            // Else if data has already arrived, load it.

        } else if (this._lastMessageReceivedBeforeMapViewRegistered) {
            this.onMessage(this._lastMessageReceivedBeforeMapViewRegistered);
            this._lastMessageReceivedBeforeMapViewRegistered = null;
        }

        ( < any > this._mapView).on("drag", (e: any) => {
            this._hasUserPanned = true;
        });

        if (this._options.use3D)
            ( < any > this._mapView).highlightOptions.color = this._options.outline;

        this._selectionHelper.registerMapView(this._mapView, this._util.getSASFeatureLayerId());

    }

    private onMessage(event: any) {
        if (!this.getMapView())
            this._lastMessageReceivedBeforeMapViewRegistered = event;
        else
            this.processMessageEvent(event);
    }

    /**
     * Builds a SAS feature layer from the incoming data.
     */
    private processMessageEvent(event: any) {
        if (event.data && event.data.columns && event.data.data) {

            this.setWarning(null);

            if (!this.validateOptions() || !this.validateFeaturesMax(event.data.data, this._options.featuresMax)) {
                this.removeSasLayer();
                return;
            }

            this._selectionHelper.registerMapData(
                event.data.resultName, // Identifier for incoming data set.
                this._util.getNameWithUsage("brush", event.data.columns), // Name of column with selection brushing boolean.
                this._options.use3D
            );

            this.purgeSasIdiom(event.data.data, event.data.columns);
            this.convertDates(event.data.data, event.data.columns);  // MAP TODO: Do I need this?

            if (this._options.animation)
                this._animationHelper.initializeAnimationData(event, this._options.animation);

            var builder = FeatureLayerFactory.getInstance().createLayerBuilder(this._options, event.data.data, event.data.columns);

            builder.buildFeatureLayer().then((layer: any) => {

                this.addOrReplaceSasLayer(layer);
                this.appendWarning(builder.validateResults());

                if (this._options.filterToFeatureServiceGeoId) {
                    var whereClause = builder.getGeoIdFilter();
                    if (whereClause && whereClause.length > 0)
                        this.applyFilterToAllLayersWithGeoIDs(whereClause);
                }

            }, (e: any) => {
                this._util.logError(e);
            });

        }
    }

    private addOrReplaceSasLayer(sasLayer: any) {

        var view = this.getMapView();
        var map = (view) ? view.map : null;

        if (map) {

            var oldLayer = map.findLayerById(this._util.getSASFeatureLayerId());
            if (oldLayer)
                map.remove(oldLayer);
            if (isNaN(this._options.zIndex))
                map.add(sasLayer);
            else
                map.add(sasLayer, this._options.zIndex);

            sasLayer.when((sasLayerReadied: any) => {

                this._selectionHelper.applySelectionsFromData(sasLayerReadied);

                // Automatically update the extent in response to data changes
                // unless the user has manually panned the view.
                // TODO: VA has a "Reset Zoom" feature that would move the extent
                // back to the last goTo (see the Home widget) and that would
                // essentially reset _hasUserPanned to false.
                if (!this._hasUserPanned || this._options.visualizationType === this._util.getChoroplethValue())
                    this.goToDataExtent(sasLayerReadied);

                if (this._options.animation)
                    this._animationHelper.initializeAnimation(sasLayerReadied);

                sasLayerReadied.layerEnabled = false;//(this._sasLegend);
                if (this._sasLegend)
                    sasLayerReadied.layerInfos = [{
                        layer: sasLayerReadied,
                        title: this._options.title
                    }];

                if (this._options.useSmartLegends)
                    this._smartLegendHelper.addSmartLegends(sasLayerReadied, this.getMapView());

            });

        }
    }

    private removeSasLayer() {

        var view = this.getMapView();
        var map = (view) ? view.map : null;

        if (map) {

            var oldLayer = map.findLayerById(this._util.getSASFeatureLayerId());
            if (oldLayer)
                map.remove(oldLayer);

        }
    }

    private purgeSasIdiom(rows: any, columns: any) {

        // Coerce SAS numeric "Missing" signifiers (".") to "null".  // MAP TODO: _Really_ use nulls instead of undefined?

        var i, j;
        var numericColumnIndicies = [];
        for (i = 0; i < columns.length; ++i) {
            if (columns[i].type.toUpperCase() !== "STRING")
                numericColumnIndicies.push(i);
        }
        for (i = 0; i < rows.length; ++i) {
            for (j = 0; j < numericColumnIndicies.length; ++j) {
                if (rows[i][numericColumnIndicies[j]] === ".")
                    rows[i][numericColumnIndicies[j]] = null; // MAP TODO: _Really_ use nulls instead of undefined?
            }
        }

    }

    private convertDates(rows: any, columns: any) {

        var i, j;
        var dateColumnIndices = [];
        for (i = 0; i < columns.length; ++i) {
            if (columns[i].type.toUpperCase() === "DATE" && columns[i].format && columns[i].format.name.toUpperCase() === "DATE")
                dateColumnIndices.push(i);
        }
        for (i = 0; i < rows.length; ++i) {
            for (j = 0; j < dateColumnIndices.length; ++j) { 
                    rows[i][dateColumnIndices[j]] = moment(rows[i][dateColumnIndices[j]]).toDate().valueOf();
            }
        }

    }

    /** 
     * We may not keep "filterToFeatureServiceGeoId", since the use case is narrow.
     * When a single region is being displayed, the feature will filter
     * all other FeatureLayers in the map by the value of that region
     * if those FeatureLayers have an attribute matching the featureServiceGeoId.
     * So you display only the single feature and anything that intersects it
     * (by attribute, not geometry).
     */
    private applyFilterToAllLayersWithGeoIDs(whereClause: any) {
        if (whereClause && whereClause.length > 0) {
            this.getMapView().map.allLayers.forEach(function (layer: any) {

                if (layer.type && layer.type === "feature" &&
                    layer.id !== this._util.getSASFeatureLayerId() &&
                    layer.fields) {

                    var layerHasGeoId = layer.fields.find(function (f: any) {
                        return f.name === this._options.featureServiceGeoId
                    });

                    if (layerHasGeoId)
                        layer.definitionExpression = whereClause;
                    else
                        layer.definitionExpression = "";

                }

            });
        }
    }

    private validateFeaturesMax(graphics: any, maximum: any) {

        var warning = "";

        // TODO: Localize warnings.

        if (graphics.length > maximum)
            warning = "Feature count (" + graphics.length + ") exceeds maximum allowed (" + maximum + ").  Please filter your results.";

        this.appendWarning(warning);

        return warning.length === 0;
    }

    private validateOptions() {
        var builder = FeatureLayerFactory.getInstance().createLayerBuilder(this._options, null, null);
        var warning = builder.validateOptions();
        this.appendWarning(warning);
        return !warning || warning.length === 0;
    }

    private getWarningControl() {
        if (!this._warningControl) {
            var validationDiv = domConstruct.toDom("<div class='warning'></div>");
            this._warningControl = new Expand({
                id: "sasWarningControl",
                expandIconClass: "esri-icon-notice-triangle",
                view: this._mapView,
                content: validationDiv,
                group: "bottom-right",
                expanded: true
            });
        }
        return this._warningControl;
    }

    private setWarning(warning: any) {
        if (this._warning !== warning) {
            this._warning = warning;
            this.displayWarning(this._warning);
        }
    }

    private getWarning() {
        return this._warning;
    }

    private appendWarning(warning: any) {
        if (warning && warning.length > 0) {
            var current = this.getWarning();
            this.setWarning(((current && current.length > 0) ? " " : "") + warning);
        }
    }

    private displayWarning(warning: any) {
        var control = this.getWarningControl();
        if (warning && warning.length > 0) {
            if (control.content)
                control.content.innerHTML = warning;
            this._mapView.ui.add(control, "bottom-right");
            this._util.logError(warning);
        } else {
            this._mapView.ui.remove(control);
        }
    }

    /**
     * Adapted from ArcGIS examples.
     */
    private goToDataExtent(sasLayer: any) {
        this.forDataExtent(sasLayer, this._util.proxy(function (results: any) {
            this.getMapView().goTo(results.extent, {
                animate: false
            }); // go to the extent of all the graphics in the layer view
        }, this));
    }

    private forDataExtent(sasLayer: any, queryExtentResultsHandler: any) {
        var goToLayer = function (layer: any) {
            layer.queryExtent().then(function (results: any) {
                queryExtentResultsHandler(results);
            });
        };
        var view = this.getMapView();
        view.whenLayerView(sasLayer).then(function (lyrView: any) {
            if (!lyrView.updating) {
                goToLayer(lyrView);
            } else {
                var watcher = lyrView.watch("updating", function (isUpdating:boolean) {
                    if (!isUpdating) { // wait for the layer view to finish updating
                        watcher.remove();
                        goToLayer(lyrView);
                    }
                });
            }
        });
    }

}

export default ArcGISVisualizationBridge;