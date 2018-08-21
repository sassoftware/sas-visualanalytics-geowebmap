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
    "dojo/dom-construct",
    "dojo/request/xhr",
    "dojo/_base/declare"
], function(Point, FeatureLayer, Expand, Legend, lang, AnimationHelper, SmartLegendHelper, SelectionHelper, ProviderUtil, domConstruct, xhr, declare){

    var _options;
    var _mapView;
    var _sasLegend;
    var _util;
    var _animationHelper;
    var _selectionHelper;    
    var _smartLegendHelper;
    var _sasFeatureLayerId = "_sasFeatureLayerId";
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

            _selectionHelper.registerMapView(_mapView, _sasFeatureLayerId);
    
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
        
                var graphics = this.createGraphics(event.data.columns, event.data.data);
                var fields = this.createFields(event.data.columns);

                var renderer;
                if (_options.visualizationType === _util.getScatterValue())
                    renderer = this.createScatterRenderer(event.data.columns, event.data.data);
                else if (_options.visualizationType === _util.getBubbleValue())
                    renderer = this.createBubbleRenderer(event.data.columns, event.data.data);
                else if (_options.visualizationType === _util.getChoroplethValue())
                    renderer = this.createChoroplethRenderer(event.data.columns, event.data.data);

                if (_options.visualizationType !== _util.getChoroplethValue()) { // i.e., scatter or bubble

                    // Create feature layer using client-side graphics.

                    var layer = new FeatureLayer({
                            id: _sasFeatureLayerId,
                            title: _options.title,
                            source: graphics, 
                            fields: fields, 
                            objectIdField: _util.getObjectIdFieldName(), 
                            renderer: renderer, 
                            spatialReference: {
                                wkid: 4326
                            },
                            geometryType: "point", 
                            popupTemplate: this.createGenericUnformattedPopupTemplate(event.data.columns)
                        });

                    this.addOrReplaceSasLayer(layer);

                    this.validateCoordinates(event.data.data, event.data.columns);

                } else { // choropleth

                    // Build a list of VA-supplied attributes mapped by GeoID.

                    var geoIdColumnName = _util.getNameWithLabel(_options.geoId, event.data.columns);
                    var geoIdAttributeMap = {};
                    graphics.forEach(function(graphic){
                        geoIdAttributeMap[graphic.attributes[geoIdColumnName]] = graphic.attributes;
                    });

                    // Add a where clause if requesting only one ID.  This was found to speed
                    // browsing-by-area.  It's not always better, though, since the browser
                    // caches responses; so an unfiltered query is usually never requeried.
                    // On the other hand, unfiltered queries on some feature services can be
                    // punishing.  

                    var whereClause;

                    if (!_options.featureServiceWhere && graphics.length === 1) {
                        whereClause = 
                            _options.featureServiceGeoId + 
                            " IN (" + 
                            _util.sqlEscape(Object.keys(geoIdAttributeMap)).join() + 
                            ")";
                    }

                    // Fetch _all_ the choropleth geometries, requesting only the attributes 
                    // necessary to join the rows to the IDs.  Potential optimizations: 
                    // Cache geometries.  Implement paging.

                    var queryLayer = new FeatureLayer({
                        url: _options.featureServiceUrl,
                        objectIdField: _util.getObjectIdFieldName(), 
                        spatialReference: {
                            wkid: 4326
                        }
                    });
                    
                    var query = queryLayer.createQuery();
                    query.outFields = [_options.featureServiceGeoId]; // Note: ["*"] Gets _all_ attributes, which noticeably slows performance.
                    query.outSpatialReference = {wkid: 4326};
                    if (_options.featureServiceWhere)
                        query.where = _options.featureServiceWhere;
                    else if (whereClause)
                        query.where = whereClause;
                    if (!isNaN(_options.featureServiceMaxAllowableOffset))
                        query.maxAllowableOffset = _options.featureServiceMaxAllowableOffset;
                    queryLayer.queryFeatures(query).then(_util.proxy(function(results) {

                        // Join the data to the geometries.

                        var joinedFeatures = [];
                        results.features.forEach(function (feature) {

                            // VA attributes, mapped by _options.geoId, are joined to the feature layer geometries 
                            // by _options.featureLayerGeoId.

                            var dataMatch = geoIdAttributeMap[feature.attributes[_options.featureServiceGeoId]];  

                            if (dataMatch) {
                                for (var key in dataMatch) {
                                    if (dataMatch.hasOwnProperty(key))
                                        feature.attributes[key] = dataMatch[key];
                                }
                                joinedFeatures.push(feature);
                                delete geoIdAttributeMap[feature.attributes[_options.featureServiceGeoId]]
                            }

                        });

                        if (_options.filterToFeatureServiceGeoId)
                            this.filterToFeatureServiceGeoId(whereClause);

                        // Build the feature layer from the geometries joined with the data.

                        var viewLayer = new FeatureLayer({
                            id: _sasFeatureLayerId,
                            title: _options.title,
                            source: joinedFeatures, 
                            fields: fields, 
                            objectIdField: _util.getObjectIdFieldName(), 
                            renderer: renderer, 
                            spatialReference: lang.clone(results.spatialReference),
                            // Note: there are ArcGIS 4.6 hit-test related problems with SceneViews with elevation mode "on-the-ground"
                            geometryType: "polygon",
                            popupTemplate: this.createGenericUnformattedPopupTemplate(event.data.columns)
                        });
                        viewLayer.then(function(layer){
                            // See https://community.esri.com/message/693120-re-sceneview-source-polygons-no-popup?commentID=693120#comment-693120
                            // To enable popups.
                            layer.createQuery = function(){
                                var q = layer.__proto__.createQuery.call(layer); // eslint-disable-line no-proto
                                q.outFields = null;
                                q.where = null;
                                return q;
                            }
                        });

                        this.addOrReplaceSasLayer(viewLayer);

                        this.validateGeoIds(event.data.columns, geoIdAttributeMap);

                    },this), function (e){ _util.logError(e); });

                }

            }
        },

        addOrReplaceSasLayer: function(sasLayer) {

            var view = this.getMapView();
            var map = (view) ? view.map : null;

            if (map) {

                var oldLayer = map.findLayerById(_sasFeatureLayerId);
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

                var oldLayer = map.findLayerById(_sasFeatureLayerId);
                if (oldLayer)
                    map.remove(oldLayer);

            }
        }, 

        convertRowsToObjects: function(columns, rows) {
            return rows.map(function (row, i) {
                var object = {};
                object[_util.getObjectIdFieldName()] = i; // Adding the object ID.
                var index = 0;
                columns.forEach(function(column){
                    object[column.name] = (index < row.length) ? row[index] : null;
                    ++index;
                });
                return object;
            });
        },

        createFields: function(columns) {
            // Feature layer's "fields" property expects objects of {name, alias, type}.
            var fields = [{name: _util.getObjectIdFieldName(), alias: _util.getObjectIdFieldName(), type: "oid"}];
            columns.forEach(function(column) {
                fields.push({name: column.name, alias: column.label, type: ((column.type === "number") ? "double" : column.type)});
            });
            return fields;
        },

        createGraphics: function(columns, rows) {
            var rowObjects = this.convertRowsToObjects(columns, rows);
            var latitudeColumnName = _util.getNameWithLabel(_options.y, columns);
            var longitudeColumnName = _util.getNameWithLabel(_options.x, columns);
            return rowObjects.map(function (row) {
                return {
                    geometry: new Point({
                        x: !_util.isValidCoordinate(row[longitudeColumnName]) ? 0 : row[longitudeColumnName], 
                        y: !_util.isValidCoordinate(row[latitudeColumnName]) ? 0 : row[latitudeColumnName]
                    }), // Assumes wkid 102100.
                    attributes: row
                }
            });
        },

        createScatterRenderer: function(columns, rows) {
            var visualVariables = [];
            var renderer;

            if (_options.animation) 
                visualVariables.push(_animationHelper.buildAnimationVisualVariable(columns, _options.animation));

            if (_util.hasColorCategory(_options.color, columns)) {
                renderer =  {
                    type: "unique-value",
                    field: _util.getNameWithLabel(_options.color, columns),
                    defaultSymbol: {
                        type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
                        color: "green",
                        size: 6,
                        outline: {
                            width: 0.5,
                            color: _options.outline
                        }
                    },
                    uniqueValueInfos: _util.generateUniqueVals(columns, rows, _options),
                    visualVariables: visualVariables
                };
            } else {
                renderer = {
                    type: "simple",
                    symbol: {
                        type: "simple-marker",
                        size: 6,
                        color: _options.colorMax,
                        outline: {
                            width: 0.5,
                            color: _options.outline
                        }
                    },
                    visualVariables: visualVariables
                };
            }

            return renderer;
        },

        createBubbleRenderer: function (columns, rows) {

            var visualVariables = [];
            var minMax;
            var renderer;

            //Create either unique-value renderer or simple renderer
            if (_util.hasColorCategory(_options.color, columns)) {
                renderer = {
                    type: "unique-value",
                    field: _util.getNameWithLabel(_options.color, columns),
                    defaultSymbol: {
                        type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
                        color: "blue",
                        size: 6,
                        outline: {
                            width: 0.5,
                            color: _options.outline
                        }
                    },
                    uniqueValueInfos: _util.generateUniqueVals(columns, rows, _options),
                    visualVariables: visualVariables
                };
            } else {
                renderer = {
                    type: "simple",
                    symbol: {
                        type: "simple-marker",
                        size: 0,
                        outline: {
                            color: _options.outline,
                            width: 0.5,
                            opacity: 0
                        }
                    },
                    visualVariables: visualVariables
                };
            }

            if (_options.size) {
                var sizeColumnName = _util.getNameWithLabel(_options.size, columns);
                var sizeIndex = _util.getIndexWithLabel(_options.size, columns);
                minMax = _util.findMinMax(rows,sizeIndex);
                renderer.visualVariables.push({
                    type: "size",
                    field: sizeColumnName,
                    valueUnit: "unknown",
                    stops: [
                    {
                      value: minMax[0],
                      size: 6 // (!_options.use3D) ? 6 : 100000
                    },
                    {
                      value: minMax[1], 
                      size: 30 // (!_options.use3D) ? 30 : 500000
                    }],
                    minDataValue: minMax[0],
                    maxDataValue: minMax[1],
                    minSize: 6,
                    maxSize: 30
                });
            }

            if (_options.animation)
                renderer.visualVariables.push(_animationHelper.buildAnimationVisualVariable(columns, _options.animation));

            if (!_util.hasColorCategory(_options.color, columns)) {
                var colorColumnName = _util.getNameWithLabel(_options.color, columns);
                var colorIndex = _util.getIndexWithLabel(_options.color, columns);

                minMax = _util.findMinMax(rows,colorIndex);
                renderer.visualVariables.push({
                    type: "color",
                    field: colorColumnName,
                    stops: [
                    {
                      value: minMax[0],
                      color: _options.colorMin
                    },
                    {
                      value: minMax[1],
                      color: _options.colorMax
                    }]
                });
                if (_options.useSmartLegends)
                    _smartLegendHelper.expandTwoPartColorRange(visualVariables[visualVariables.length - 1].stops);
            }

            // This 3D render requires the symbol to be measured in meters, and the correct
            // choice really depends on the expected extent; so, if it were generalized, 
            // it would have to be exposed as another querystring option. See the 
            // commented code in the visualVariables definition above.
            // } else {
            //     renderer =  {
            //         type: "simple", 
            //         symbol: {
            //             type: "point-3d", 
            //             symbolLayers: [{
            //                 type: "object",
            //                 width: 0,
            //                 height: 0,
            //                 depth: 0,
            //                 resource: { primitive: "cylinder" }
            //             }],
            //             outline: { 
            //                 color: _options.outline,  
            //                 width: 0.5
            //             }
            //         },
            //         visualVariables: visualVariables
            //     };
            // }

            return renderer;
        },

        createChoroplethRenderer: function (columns, rows) {

            var visualVariables = [];
            var minMax;
            var renderer;

            if (_util.hasColorCategory(_options.color, columns)) {
                renderer = {
                    type: "unique-value",
                    field: _util.getNameWithLabel(_options.color, columns),
                    defaultSymbol: {
                        type: "simple-fill",  // autocasts as new SimpleMarkerSymbol()
                        color: "blue",
                        style: "solid",
                        outline: {
                            width: 0.5,
                            color: _options.outline
                        }
                    },
                    uniqueValueInfos: _util.generateUniqueVals(columns, rows, _options),
                    visualVariables: visualVariables
                };
            } else {
                renderer = {
                    type: "simple",
                    symbol: {
                        type: "simple-fill",
                        color: _options.colorMax,
                        outline: {
                            color: _options.outline,
                            width: 0.5
                        }
                    },
                    visualVariables: visualVariables
                };
            }

            if (!_util.hasColorCategory(_options.color, columns) && _options.color) {
                var colorColumnName = _util.getNameWithLabel(_options.color, columns);
                var colorIndex = _util.getIndexWithLabel(_options.color, columns);
                minMax = _util.findMinMax(rows,colorIndex);
                renderer.visualVariables.push({
                    type: "color",
                    field: colorColumnName,
                    stops: [
                    {
                      value: minMax[0],
                      color: _options.colorMin
                    },
                    {
                      value: minMax[1],
                      color: _options.colorMax
                    }]
                });
                if (_options.useSmartLegends)
                    _smartLegendHelper.expandTwoPartColorRange(visualVariables[visualVariables.length - 1].stops);
            }

            return renderer;
        },

        createGenericUnformattedPopupTemplate: function (fields) {
            var fieldInfos = [];
            fields.forEach(function(field){
                if (field.name !== _util.getObjectIdFieldName() && field.label !== _options.x && field.label !== _options.y) {
                    var fieldInfo = {fieldName: field.name, label: field.label, visible: true}
                    if (field.type === "number" || field.type === "double")
                        fieldInfo.format = {digitSeparator: true}; // places: 2
                    fieldInfos.push(fieldInfo);
                }
            });
            return {title: _options.title, content: [{type: "fields", fieldInfos: fieldInfos}], fieldInfos: []}; 
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
                        layer.id !== _sasFeatureLayerId &&
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
