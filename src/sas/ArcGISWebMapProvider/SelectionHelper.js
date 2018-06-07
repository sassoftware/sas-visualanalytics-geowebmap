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
 * Encapsulate the logic for selection processing.
 */
define([
    "sas/ArcGISWebMapProvider/ProviderUtil",
    "dojo/_base/declare"
], function(ProviderUtil, declare){

    var _util;
    var _mapView;
    var _sasFeatureLayerId;
    var _use3D;
    var _3DHighlights;          // Map token identifying a highlighted feature set.
    var _dataResultName;        // Name of incoming dataset (from VA)
    var _selectionColumnName;   // Column of incoming dataset that is used to brush data

    return declare(null, {

        _getMapView: function() { return _mapView; },

        constructor: function() {
            _util = new ProviderUtil();
        },

        registerMapView: function(mapView, sasFeatureLayerId) {

            _mapView = mapView;
            _sasFeatureLayerId = sasFeatureLayerId;

            // ArcGIS for Javascript 4.6: selectedFeature fires when window opens, having clicked 
            // on a feature, when clicking on a new feature, and when the window
            // closes, having clicked on something _not_ a feature.  It 
            // does not fire when the user dismisses the popup (even though it 
            // clears the highlight in SceneView).  Convert this combination
            // into a selection handler.
            _mapView.popup.watch("selectedFeature", _util.proxy(function(selection){
                if (selection)
                    this._onSelection(selection);
            }, this));
            _mapView.popup.watch("visible",_util.proxy(function(isVisible){
                if (!isVisible)
                    this._onSelection(null);
            }, this));

        },

        registerMapData: function(dataResultName, selectionColumnName, use3D) {
            _dataResultName = dataResultName;
            _selectionColumnName = selectionColumnName;
            _use3D = use3D;
        },

        /**
         * Processes selection state embedded in data incoming from VA.
         */
        applySelectionsFromData: function (sasLayer) {

            var view = this._getMapView();

            view.graphics.removeAll();

            var drawSelection = _util.proxy(function(args){ this._drawSelection(args[0], args[1]); }, this);
            var fetchGraphics = function (lyrView) {
                lyrView.queryFeatures().then(function(graphics){
                    // Filter to the ones that are selected, and draw the selection graphics for them.
                    var selectedGraphics = graphics
                        .filter(function(graphic){ return graphic.attributes[_selectionColumnName] === 1; });
                    drawSelection([selectedGraphics, lyrView]); 
                });
            };

            view.whenLayerView(sasLayer).then(function(lyrView){
                if (!lyrView.updating) {
                    fetchGraphics(lyrView);
                } else {
                    var watcher = lyrView.watch("updating", function(isUpdating){
                        // Wait for the layer view to finish updating.
                        if (!isUpdating) { 
                            fetchGraphics(lyrView);
                            watcher.remove();
                        }
                    });
                }
            });

        },

        /**
         * Processes selection actions made on the map by the user.
         */
        _onSelection: function (graphic) {

            var isSasFeature = (graphic && graphic.layer && graphic.layer.id === _sasFeatureLayerId);

            // (1) Communicate selection to containing report in VA.

            var id = (isSasFeature && graphic && graphic.attributes) ? graphic.attributes[_util.getObjectIdFieldName()] : null;
            _util.publishMessage({
                resultName: _dataResultName,
                selections: [{row: id}]
            });

            // (2) Clear any old selection visuals.

            this._clearSelections();

            // (3) Show selection on Map.

            // Only 2D requires custom work.  3D is managed automatically by API (highlight).
            if (isSasFeature) {
                if (!_use3D) 
                    this._drawSelection(graphic);
            }

        }, 

        _clearSelections: function() {
            // 2D:
            this._getMapView().graphics.removeAll();
            // 3D:
            if (_3DHighlights) {
                _3DHighlights.remove();
                _3DHighlights = null;
            } 
        },

        _drawSelection: function(graphics, layerView) {
            if (!graphics) return;
            graphics = (Array.isArray(graphics)) ? graphics : [graphics];
            if (_use3D) 
                this._draw3DSelection(graphics, layerView);
            else 
                this._draw2DSelection(graphics);
        },

        _draw2DSelection: function (graphics) {

            graphics.forEach(_util.proxy(function (graphic){

                var symbol = (graphic && graphic.layer && graphic.layer.renderer && graphic.layer.renderer.getSymbol) ? graphic.layer.renderer.getSymbol() : null;

                if (symbol) {
    
                    var newGraphic = graphic.clone()
                    newGraphic.symbol = symbol.clone();  
    
                    if (symbol.type === "simple-marker") { // scatter, bubble
                        if (newGraphic.symbol.outline)
                            newGraphic.symbol.outline.width += 1.5;
                        newGraphic.symbol.size = this._getSize(graphic);  
                        newGraphic.symbol.color = [0,0,0,0]; // Make fill transparent.
                    } else { // choropleth
                        if (newGraphic.symbol.outline)
                            newGraphic.symbol.outline.width += 1;
                        newGraphic.symbol.style = "backward-diagonal";
                    }
    
                    this._getMapView().graphics.add(newGraphic);
    
                }
    
            }, this));

        },

        _draw3DSelection: function (graphics, layerView) {
            if (_3DHighlights) {
                _3DHighlights.remove();
                _3DHighlights = null;
            }
            if (layerView && graphics && graphics.length > 0)
                _3DHighlights = layerView.highlight(graphics);
        }, 

        /**
         * Returns the size of the graphic, calculating from a SizeVisualVariable if one
         * is available.  This calculation works well enough for 2D, but it doesn't account
         * for an additional scale factor applied in SceneView that reduces the size
         * of graphics as they approach the edge of the sphere.
         */
        _getSize: function (graphic) {

            var renderer = (graphic && graphic.layer) ? graphic.layer.renderer : null;

            if (!renderer) return 0;

            var sizeVariable = (renderer.visualVariables || []).find(function (vv){ return vv.type === "size"; });

            if (!sizeVariable) {
                var symbol = renderer.getSymbol();
                return (symbol) ? symbol.size : 0;
            } else {

                var value;
                var valueMin;
                var valueMax; 
                var displayMin;
                var displayMax;

                if (sizeVariable.stops.length > 0) {
                    valueMin   = sizeVariable.stops[0].value;
                    displayMin = sizeVariable.stops[0].size;
                    valueMax   = sizeVariable.stops[sizeVariable.stops.length - 1].value;
                    displayMax = sizeVariable.stops[sizeVariable.stops.length - 1].size;
                }

                value = (graphic.attributes) ? graphic.attributes[sizeVariable.field] : undefined;

                return ((value - valueMin) / (valueMax - valueMin)) * (displayMax - displayMin) + displayMin;

            }

        }

    });

});
