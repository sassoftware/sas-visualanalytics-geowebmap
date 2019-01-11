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

import FeatureLayer from "esri/layers/FeatureLayer";
import View from "esri/views/View";
import ProviderUtil from "sas/ArcGISWebMapProvider/ProviderUtil";

/**
 * Encapsulate the logic for selection processing.
 */
class SelectionHelper {

    private _mapView:View;
    private _sasFeatureLayerId:string;
    private _use3D:boolean;
    private _3DHighlights:any;             // Map token identifying a highlighted feature set.
    private _dataResultName:string;        // Name of incoming dataset (from VA)
    private _selectionColumnName:string;   // Column of incoming dataset that is used to brush data

    registerMapView(mapView:View, sasFeatureLayerId:string) {

        this._mapView = mapView;
        this._sasFeatureLayerId = sasFeatureLayerId;

        // ArcGIS for Javascript 4.6: selectedFeature fires when window opens, having clicked 
        // on a feature, when clicking on a new feature, and when the window
        // closes, having clicked on something _not_ a feature.  It 
        // does not fire when the user dismisses the popup (even though it 
        // clears the highlight in SceneView).  Convert this combination
        // into a selection handler.
        this._mapView.popup.watch("selectedFeature", (selection:any) => {
            if (selection) {
                this.onSelection(selection);
            }
        });
        this._mapView.popup.watch("visible",(isVisible:boolean) => {
            if (!isVisible) {
                this.onSelection(null);
            }
        });

    }

    registerMapData(dataResultName:string, selectionColumnName:string, use3D:boolean) {
        this._dataResultName = dataResultName;
        this._selectionColumnName = selectionColumnName;
        this._use3D = use3D;
    }

    /**
     * Processes selection state embedded in data incoming from VA.
     */
    applySelectionsFromData(sasLayer:FeatureLayer) {

        const view = this.getMapView();

        view.graphics.removeAll();

        const drawSelection = (args:any) => { this.drawSelection(args[0], args[1]); };
        const fetchGraphics = (lyrView:any) => {
            lyrView.queryFeatures().then((graphics:any) => {
                // Filter to the ones that are selected, and draw the selection graphics for them.
                const selectedGraphics = graphics
                    .filter((graphic:any) => graphic.attributes[this._selectionColumnName] === 1);
                drawSelection([selectedGraphics, lyrView]); 
            });
        };

        view.whenLayerView(sasLayer).then((lyrView:any) => {
            if (!lyrView.updating) {
                fetchGraphics(lyrView);
            } else {
                const watcher = lyrView.watch("updating", (isUpdating:boolean) => {
                    // Wait for the layer view to finish updating.
                    if (!isUpdating) { 
                        fetchGraphics(lyrView);
                        watcher.remove();
                    }
                });
            }
        });

    }

    private getMapView() { 
        return this._mapView; 
    }

    /**
     * Processes selection actions made on the map by the user.
     */
    private onSelection(graphic:any) {

        const isSasFeature = (graphic && graphic.layer && graphic.layer.id === this._sasFeatureLayerId);

        // (1) Communicate selection to containing report in VA.

        const id = (isSasFeature && graphic && graphic.attributes) ? graphic.attributes[ProviderUtil.FIELD_NAME_OBJECT_ID] : null;
        const selections = (id === null) ? [] : [{row: id}];
        ProviderUtil.publishMessage({
            resultName: this._dataResultName,
            selections
        });

        // (2) Clear any old selection visuals.

        this.clearSelections();

        // (3) Show selection on Map.

        // Only 2D requires custom work.  3D is managed automatically by API (highlight).
        if (isSasFeature) {
            if (!this._use3D) { 
                this.drawSelection(graphic);
            }
        }

    }

    private clearSelections() {
        // 2D:
        this.getMapView().graphics.removeAll();
        // 3D:
        if (this._3DHighlights) {
            this._3DHighlights.remove();
            this._3DHighlights = null;
        } 
    }

    private drawSelection(graphics:any, layerView?:any) {
        if (!graphics) { return; }
        graphics = (Array.isArray(graphics)) ? graphics : [graphics];
        if (this._use3D) { 
            this.draw3DSelection(graphics, layerView);
        }
        else { 
            this.draw2DSelection(graphics);
        }
    }

    private draw2DSelection(graphics:any) {

        graphics.forEach((graphic:any) => {

            const symbol = (graphic && graphic.layer && graphic.layer.renderer && graphic.layer.renderer.getSymbol) ? graphic.layer.renderer.getSymbol(graphic) : null;

            if (symbol) {

                const newGraphic = graphic.clone()
                newGraphic.symbol = symbol.clone();  

                if (symbol.type === "simple-marker") { // scatter, bubble
                    if (newGraphic.symbol.outline) {
                        newGraphic.symbol.outline.width += 1.5;
                    }
                    newGraphic.symbol.size = this.getSize(graphic);  
                    newGraphic.symbol.color = [0,0,0,0]; // Make fill transparent.
                } else { // choropleth
                    if (newGraphic.symbol.outline) {
                        newGraphic.symbol.outline.width += 1;
                    }
                    newGraphic.symbol.style = "backward-diagonal";
                }

                this.getMapView().graphics.add(newGraphic);

            }

        });

    }

    private draw3DSelection(graphics:any, layerView:any) {
        if (this._3DHighlights) {
            this._3DHighlights.remove();
            this._3DHighlights = null;
        }
        if (layerView && graphics && graphics.length > 0) {
            this._3DHighlights = layerView.highlight(graphics);
        }
    }

    /**
     * Returns the size of the graphic, calculating from a SizeVisualVariable if one
     * is available.  This calculation works well enough for 2D, but it doesn't account
     * for an additional scale factor applied in SceneView that reduces the size
     * of graphics as they approach the edge of the sphere.
     */
    private getSize(graphic:any) {

        const renderer = (graphic && graphic.layer) ? graphic.layer.renderer : null;

        if (!renderer) { return 0; }

        const sizeVariable = (renderer.visualVariables || []).find((vv:any) => vv.type === "size");

        if (!sizeVariable) {
            const symbol = renderer.getSymbol(graphic);
            return (symbol) ? symbol.size : 0;
        } else {

            let value;
            let valueMin;
            let valueMax; 
            let displayMin;
            let displayMax;

            if (sizeVariable.stops && sizeVariable.stops.length > 0) {
                valueMin   = sizeVariable.stops[0].value;
                displayMin = sizeVariable.stops[0].size;
                valueMax   = sizeVariable.stops[sizeVariable.stops.length - 1].value;
                displayMax = sizeVariable.stops[sizeVariable.stops.length - 1].size;
            }
            else {
                valueMin   = sizeVariable.valueMin;
                displayMin = sizeVariable.displayMin;
                valueMax   = sizeVariable.valueMax;
                displayMax = sizeVariable.displayMax;
            }

            value = (graphic.attributes) ? graphic.attributes[sizeVariable.field] : undefined;

            return ((value - valueMin) / (valueMax - valueMin)) * (displayMax - displayMin) + displayMin;

        }

    }

}
export default SelectionHelper;