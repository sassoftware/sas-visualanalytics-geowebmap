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
 * Responsible for consuming incoming data from SAS Visual Analytics to create a 
 * feature layer in a web map.
 */
define([
    "esri/geometry/Point",
    "esri/layers/FeatureLayer",
    "esri/widgets/Expand",
    "esri/widgets/Legend",
    "esri/core/lang",
    "sas/ArcGISWebMapProvider/AnimationHelper",
    "sas/ArcGISWebMapProvider/SmartLegendHelper",
    "sas/ArcGISWebMapProvider/SelectionHelper",
    "sas/ArcGISWebMapProvider/ProviderUtil",
    "sas/ArcGISWebMapProvider/layerBuilder/FeatureLayerFactory",
    "dojo/dom-construct",
    "dojo/request/xhr",
    "dojo/_base/declare"
], function(Point, FeatureLayer, Expand, Legend, lang, AnimationHelper, SmartLegendHelper, SelectionHelper, ProviderUtil, FeatureLayerFactory, domConstruct, xhr, declare){

    var _options;
    var _mapView;
    var _sasLegend;
    var _util;
    var _animationHelper;
    var _selectionHelper;    
    var _smartLegendHelper;
    var _lastMessageReceivedBeforeMapViewRegistered;
    var _hasUserPanned = false; // Tagged to allow automatically fitting extent to data 
                                // unless the user has manually panned.
    var _warningControl;

    return declare(null, {

        getMapView: function() { return _mapView; },

        constructor: function(visualizationOptions) {

            _util = new ProviderUtil();
            _selectionHelper = new SelectionHelper();

            // Initialize options.

            _options = visualizationOptions;

            _options.visualizationType = (_options.visualizationType) ? _options.visualizationType.toUpperCase() : null;
            if (_options.visualizationType !== _util.getScatterValue() &&
                _options.visualizationType !== _util.getBubbleValue() &&
                _options.visualizationType !== _util.getChoroplethValue()) {
                if (_options.geoId)
                    _options.visualizationType = _util.getChoroplethValue();
                else if (_options.size)
                    _options.visualizationType = _util.getBubbleValue();
                else
                    _options.visualizationType = _util.getScatterValue();
            }

            _options.x = _options.x || "Longitude";
            _options.y = _options.y || "Latitude";

            if (_options.colorMin === undefined || _options.colorMin === null)
                _options.colorMin = "#bfe4e7"; // Or a named color, e.g., "blue".
            if (_options.colorMax === undefined || _options.colorMax === null)
                _options.colorMax = "#00929f";                 
            if (_options.outline === undefined || _options.outline === null)
                _options.outline = "#007E88"; 
                
            _options.title = _options.title || _options.geoId || "SAS VA Layer";
                
            _options.useSampleData = (_options.useSampleData && _options.useSampleData.toUpperCase() === "TRUE");
                
            _options.useSmartLegends = (_options.useSmartLegends && _options.useSmartLegends.toUpperCase() === "TRUE");

            if (_options.featureServiceWhere && _options.featureServiceWhere.length < 1)
                _options.featureServiceWhere = null;

            _options.zIndex = Math.max(parseInt(_options.zIndex),0); // Resolves to NaN or a whole number.
            _options.featureServiceMaxAllowableOffset = parseFloat(_options.featureServiceMaxAllowableOffset);
            _options.featuresMax = parseInt(_options.featuresMax);
            _options.filterToFeatureServiceGeoId = (_options.filterToFeatureServiceGeoId && _options.filterToFeatureServiceGeoId.toUpperCase() === "TRUE");

            // If not using sample data, listen for data-driven content.

            if (!_options.useSampleData)
                window.addEventListener("message", _util.proxy(this.onMessage, this));

            // Other tasks.

            if (_options.animation)
                _animationHelper = new AnimationHelper(_options.period);

            if (_options.useSmartLegends)
                _smartLegendHelper = new SmartLegendHelper();
                
        }, 
    
        registerMapView: function (mapView) {

            _mapView = mapView;
            
            if (_options.visualizationType !== _util.getScatterValue() || _options.color) {
                _sasLegend = new Legend({view: _mapView, container: document.createElement("div")});
                var legendExpand = new Expand({expandIconClass: "esri-icon-question", view: _mapView, content: _sasLegend.domNode, group: "bottom-right"});
                _mapView.ui.add(legendExpand, "bottom-right");
            }

            this.validateOptions();

            // If using sample data, load it.

            if (_options.useSampleData) {
                xhr("sas/ArcGISWebMapProvider/SampleData.json", {
                    handleAs: "json"
                }).then(_util.proxy(function(result){
                    if (_options.useSampleData && _options.animation)
                       _animationHelper.generateSampleAnimationData(result, _options.color, _options.size, _options.animation);
                    this.onMessage({data: result, origin: window.location.origin});
                }, this),
                function(error) {
                    _util.logError(error);
                });

            // Else if data has already arrived, load it.

            } else if (_lastMessageReceivedBeforeMapViewRegistered) {
                this.onMessage(_lastMessageReceivedBeforeMapViewRegistered);
                _lastMessageReceivedBeforeMapViewRegistered = null;
            }

            _mapView.on("drag", function(e){ _hasUserPanned = true; });

            if (_options.use3D)
                _mapView.highlightOptions.color = _options.outline;

            _selectionHelper.registerMapView(_mapView, _util.getSASFeatureLayerId());
    
        },

        onMessage: function(event) {
            if (!this.getMapView())
                _lastMessageReceivedBeforeMapViewRegistered = event;
            else
                this.processMessageEvent(event);
        },

        /**
         * Builds a SAS feature layer from the incoming data.
         */
        processMessageEvent: function (event) {
            if (event.data && event.data.columns && event.data.data) {   
                
                if (!this.validateFeaturesMax(event.data.data, _options.featuresMax)) {
                    this.removeSasLayer();
                    return;
                }
                
                _selectionHelper.registerMapData(
                    event.data.resultName, // Identifier for incoming data set.
                    _util.getNameWithUsage("brush", event.data.columns), // Name of column with selection brushing boolean.
                    _options.use3D
                );

                this.purgeSasIdiom(event.data.data, event.data.columns);                    

                if (_options.animation)
                    _animationHelper.initializeAnimationData(event, _options.animation);

                new FeatureLayerFactory().buildFeatureLayer(_options, event.data.data, event.data.columns).then(_util.proxy(function(layer){
                    this.addOrReplaceSasLayer(layer);
                    // TODO: Refactor distinctive validation logic into builders.  
                    // Return builder, not layer.  Call and apply validation results here.
                    if (_options.visualizationType !== _util.getChoroplethValue())
                        this.validateCoordinates(event.data.data, event.data.columns);
                    else
                        this.validateGeoIds(event.data.columns, {} /* geoIdAttributeMap */);  // TODO: Full validation temporarily disabled.
                }, this), function (e){ _util.logError(e); });

            }
        },

        addOrReplaceSasLayer: function(sasLayer) {

            var view = this.getMapView();
            var map = (view) ? view.map : null;

            if (map) {

                var oldLayer = map.findLayerById(_util.getSASFeatureLayerId());
                if (oldLayer)
                    map.remove(oldLayer);
                if (isNaN(_options.zIndex))
                    map.add(sasLayer);
                else
                    map.add(sasLayer,_options.zIndex);

                sasLayer.when(_util.proxy(function (sasLayerReadied){

                    _selectionHelper.applySelectionsFromData(sasLayerReadied);

                    // Automatically update the extent in response to data changes
                    // unless the user has manually panned the view.
                    // TODO: VA has a "Reset Zoom" feature that would move the extent
                    // back to the last goTo (see the Home widget) and that would
                    // essentially reset _hasUserPanned to false.
                    if (!_hasUserPanned || _options.visualizationType === _util.getChoroplethValue()) 
                        this.goToDataExtent(sasLayerReadied);
    
                    if (_options.animation) 
                        _animationHelper.initializeAnimation(sasLayerReadied);

                    if (_sasLegend)
                        sasLayerReadied.layerInfos = [{layer: sasLayerReadied, title: _options.title}];
                    
                    if (_options.useSmartLegends)
                        _smartLegendHelper.addSmartLegends(sasLayerReadied, this.getMapView());
                    
                }, this));

            }
        }, 

        removeSasLayer: function() {

            var view = this.getMapView();
            var map = (view) ? view.map : null;

            if (map) {

                var oldLayer = map.findLayerById(_util.getSASFeatureLayerId());
                if (oldLayer)
                    map.remove(oldLayer);

            }
        }, 

        purgeSasIdiom: function(rows, columns) {

            // Coerce SAS numeric "Missing" signifiers (".") to "undefined".

            var i, j;
            var numericColumnIndicies = [];
            for (i = 0; i < columns.length; ++i) {
                if (columns[i].type.toUpperCase() !== "STRING")
                    numericColumnIndicies.push(i);
            }
            for (i = 0; i < rows.length; ++i) {
                for (j = 0; j < numericColumnIndicies.length; ++j) {
                    if (rows[i][numericColumnIndicies[j]] === ".")
                        rows[i][numericColumnIndicies[j]] = undefined;
                }
            }

        },

        /** 
         * We may not keep "filterToFeatureServiceGeoId", since the use case is narrow.
         * When a single region is being displayed, the feature will filter
         * all other FeatureLayers in the map by the value of that region
         * if those FeatureLayers have an attribute matching the featureServiceGeoId.
         * So you display only the single feature and anything that intersects it
         * (by attribute, not geometry).
         */
        filterToFeatureServiceGeoId: function(whereClause) {
            if (whereClause && whereClause.length > 0) {
                this.getMapView().map.allLayers.forEach(function(layer){

                    if (layer.type && layer.type === "feature" && 
                        layer.id !== _util.getSASFeatureLayerId() &&
                        layer.fields) {

                        var layerHasGeoId = layer.fields.find(function (f){ return f.name === _options.featureServiceGeoId });
                        
                        if (layerHasGeoId) 
                            layer.definitionExpression = whereClause;
                        else
                            layer.definitionExpression = "";  

                    }

                });
            }
        },

        validateCoordinates: function (rows, columns) {

            var warning = "";
            var invalidCount = 0;
            var latitudeColumnIndex = _util.getIndexWithLabel(_options.y, columns);
            var longitudeColumnIndex = _util.getIndexWithLabel(_options.x, columns);

            // TODO: Localize warnings.  

            if (latitudeColumnIndex < 0 || longitudeColumnIndex < 0) {
                warning = "Data for 'x' or 'y' coordinates could not be identified.";
            } else {
                rows.forEach(function(row){
                    if (!_util.isValidCoordinate(row[latitudeColumnIndex]) || 
                        !_util.isValidCoordinate(row[longitudeColumnIndex]) ||
                        Math.abs(Math.round(row[latitudeColumnIndex])) > 90 || 
                        Math.abs(Math.round(row[longitudeColumnIndex])) > 180) {
                        ++invalidCount;
                    }
                });
                if (invalidCount > 0)
                    warning = "Data contains missing or invalid coordinates (" + invalidCount + ").";
            }

            this.setWarning(warning);

            return warning.length === 0;

        },

        validateFeaturesMax: function (graphics, maximum) {

            var warning = "";

            // TODO: Localize warnings.

            if (graphics.length > maximum) 
                warning = "Feature count (" + graphics.length + ") exceeds maximum allowed (" + maximum + ").  Please filter your results.";

            this.setWarning(warning);

            return warning.length === 0;
        },

        validateGeoIds: function (columns, geoIdMap) {

            var warning = "";
  
            // TODO: Localize warnings. 

            if (_util.getIndexWithLabel(_options.geoId, columns) < 0) {
                warning = "Data for 'geoId' could not be identified.";
            } else {
                var missingIds = Object.keys(geoIdMap);
                if (missingIds.length > 0) {
                    warning = "Some geoIds could not be found with the feature service: " +
                        missingIds.slice(0,5).join(", ") + ((missingIds.length > 5) ? " ..." : ".");
                }
            }

            this.setWarning(warning);

            return warning.length === 0;

        },

        validateOptions: function() {

            switch (_options.visualizationType) {
                case _util.getChoroplethValue():
                    return this.validateRequiredOptions(['geoId', 'featureServiceUrl', 'featureServiceGeoId']);
                case _util.getBubbleValue():
                    return this.validateRequiredOptions(['x', 'y', 'size']);             
                case _util.getScatterValue():
                default:
                    return this.validateRequiredOptions(['x', 'y']);             
            }

        },

        validateRequiredOptions: function(optionNames) {

            var message = "";
            var missingNames = [];

            optionNames.forEach(function(name){
                if (!(name in _options) || !_options[name] || _options[name].toString().length === 0)
                    missingNames.push(name);
            });

            // TODO: Localize warnings.

            if (missingNames.length > 0) 
               message = "The following required options were not identified: " + missingNames.join(", ") + ".";
            
            this.setWarning(message);

            return message.length === 0;

        },

        getWarningControl: function () {
            if (!_warningControl) {
                var validationDiv = domConstruct.toDom("<div class='warning'></div>");
                _warningControl = new Expand({
                    id: "sasWarningControl",
                    expandIconClass: "esri-icon-notice-triangle", 
                    view: _mapView, 
                    content: validationDiv, 
                    group: "bottom-right", 
                    expanded: true
                });
            }
            return _warningControl;
        },

        setWarning: function(warning) {
            var control = this.getWarningControl();
            if (warning && warning.length > 0) {
                if (control.content)
                    control.content.innerHTML = warning;
                _mapView.ui.add(control, "bottom-right");
                _util.logError(warning);
            } else {
                _mapView.ui.remove(control);
            }
        },

        /**
         * Adapted from ArcGIS examples.
         */
        goToDataExtent: function (sasLayer) {
            this.forDataExtent(sasLayer, _util.proxy(function(results){
                this.getMapView().goTo(results.extent, {animate: false});  // go to the extent of all the graphics in the layer view
            }, this));
        },

        forDataExtent: function (sasLayer, queryExtentResultsHandler) {
            var goToLayer = function (layer){
                layer.queryExtent().then(function(results){
                    queryExtentResultsHandler(results);
                });
            };
            var view = this.getMapView();
            view.whenLayerView(sasLayer).then(function(lyrView){
                if (!lyrView.updating) {
                    goToLayer(lyrView);
                } else {
                    var watcher = lyrView.watch("updating", function(isUpdating){
                        if (!isUpdating){  // wait for the layer view to finish updating
                            watcher.remove();
                            goToLayer(lyrView);
                        }
                    });
                }
            });
        }

    });

});
