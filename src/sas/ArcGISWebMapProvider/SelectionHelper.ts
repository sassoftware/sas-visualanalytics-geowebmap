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

import Graphic from "esri/Graphic";
import FeatureLayer from "esri/layers/FeatureLayer";
import FeatureSet from "esri/tasks/support/FeatureSet";
import FeatureLayerView from "esri/views/layers/FeatureLayerView";
import View from "esri/views/View";
import ProviderUtil from "sas/ArcGISWebMapProvider/ProviderUtil";

/**
 * Encapsulate the logic for selection processing.
 */
class SelectionHelper {

    private _mapView: View;
    private _sasFeatureLayerId: string;
    private _dataResultName: string;        // Name of incoming dataset (from VA)
    private _selectionColumnName: string;   // Column of incoming dataset that is used to brush data
    private _highlights: any;

    registerMapView(mapView: View, sasFeatureLayerId: string): void {

        this._mapView = mapView;
        this._sasFeatureLayerId = sasFeatureLayerId;

        // ArcGIS for Javascript 4.6: selectedFeature fires when window opens, having clicked 
        // on a feature, when clicking on a new feature, and when the window
        // closes, having clicked on something _not_ a feature.  It 
        // does not fire when the user dismisses the popup (even though it 
        // clears the highlight in SceneView).  Convert this combination
        // into a selection handler.
        this._mapView.popup.watch("selectedFeature", (selection: any) => {
            if (selection) {
                this.onSelection(selection);
            }
        });
        this._mapView.popup.watch("visible", (isVisible: boolean) => {
            if (!isVisible) {
                this.onSelection(null);
            }
        });

    }

    registerMapData(dataResultName: string, selectionColumnName: string): void {
        this._dataResultName = dataResultName;
        this._selectionColumnName = selectionColumnName;
    }

    /**
     * Processes selection state embedded in data incoming from VA.
     */
    applySelectionsFromData(sasLayer: FeatureLayer): void {

        const view = this.getMapView();
        const map = (view) ? view.map : null;
        if (map && !map.findLayerById(sasLayer.id)) {
            ProviderUtil.logInfo("Cannot apply selections before layer added to map.  Skipping.");
            return;
        }

        this.clearSelections();

        const drawSelection = (args: any) => { this.drawSelection(args[0], args[1]); };
        const fetchGraphics = (lyrView: FeatureLayerView) => {
            lyrView.queryFeatures().then((graphics: FeatureSet) => {
                // Filter to the ones that are selected, and draw the selection graphics for them.
                const selectedGraphics = graphics.features
                    .filter((graphic: Graphic) => graphic.attributes[this._selectionColumnName] === 1);
                drawSelection([selectedGraphics, lyrView]);
            });
        };

        view.whenLayerView(sasLayer).then((lyrView: FeatureLayerView) => {
            if (!lyrView.updating) {
                fetchGraphics(lyrView);
            } else {
                const watcher = lyrView.watch("updating", (isUpdating: boolean) => {
                    // Wait for the layer view to finish updating.
                    if (!isUpdating) {
                        fetchGraphics(lyrView);
                        watcher.remove();
                    }
                });
            }
        }, (reason: any) => { ProviderUtil.logError(reason); });

    }

    private getMapView(): View {
        return this._mapView;
    }

    /**
     * Processes selection actions made on the map by the user.
     */
    private onSelection(graphic: any): void {

        const isSasFeature = (graphic && graphic.layer && graphic.layer.id === this._sasFeatureLayerId);

        // (1) Communicate selection to containing report in VA.

        const id = (isSasFeature && graphic && graphic.attributes) ? graphic.attributes[ProviderUtil.FIELD_NAME_OBJECT_ID] : null;
        const selections = (id === null) ? [] : [{ row: id }];
        ProviderUtil.publishMessage({
            resultName: this._dataResultName,
            selections
        });

        // (2) Clear any old selection visuals.

        this.clearSelections();

        // (3) Show selection on Map.

        // Only 2D requires custom work.  3D is managed automatically by API (highlight).
        if (isSasFeature) {
            this.drawSelection(graphic);
        }

    }

    private clearSelections(): void {
        this.clearHighlights();
    }

    private drawSelection(graphics: any, layerView?: FeatureLayerView): void {
        if (!graphics) { return; }
        graphics = (Array.isArray(graphics)) ? graphics : [graphics];
        this.drawHighlights(graphics, layerView);
    }

    private clearHighlights(): void {
        if (this._highlights) {
            this._highlights.remove();
            this._highlights = null;
        }
    }

    private drawHighlights(graphics: Graphic[], layerView?: FeatureLayerView): void {
        this.clearHighlights();
        if (layerView && graphics && graphics.length > 0) {
            this._highlights = layerView.highlight(graphics);
        }
    }

}
export default SelectionHelper;