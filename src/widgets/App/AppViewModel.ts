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

import Accessor from "esri/core/Accessor";
import { declared, property, subclass } from "esri/core/accessorSupport/decorators";
import { whenOnce } from "esri/core/watchUtils";
import FeatureLayer from "esri/layers/FeatureLayer";
import EsriMap from "esri/Map";
import View from "esri/views/View";
import BasemapGallery from "esri/widgets/BasemapGallery";
import Expand from "esri/widgets/Expand";
import LayerList from "esri/widgets/LayerList";
import Search from "esri/widgets/Search";
import ArcGISVisualizationBridge from "sas/ArcGISWebMapProvider/ArcGISVisualizationBridge";

export interface AppParams {
  appName: string;
  map: EsriMap;
  featureLayer: FeatureLayer;
  view: View;
}

@subclass("widgets.App.AppViewModel")
class AppViewModel extends declared(Accessor) {
  @property() appName: string;

  @property() map: EsriMap;

  @property() featureLayer: FeatureLayer;

  @property() view: View;

  @property() visualizationBridge: ArcGISVisualizationBridge;

  @property() options: any;

  constructor(params?: Partial<AppParams>) {
    super(params);
    whenOnce(this, "view").then(this.onload.bind(this));
  }

  onload() {
    this.addMapWidgets(this.view);
  }
  
  private addMapWidgets(view:View) {

    const layerList = new LayerList({view: this.view});
    const layerListExpand = new Expand({expandIconClass: "esri-icon-layer-list", view: this.view, content: layerList, group: "top-right"});
    this.view.ui.add(layerListExpand, "top-right");

    const basemapGallery = new BasemapGallery({view: this.view});
    const basemapExpand = new Expand({expandIconClass: "esri-icon-basemap", view: this.view, content: basemapGallery, group: "top-right"});
    this.view.ui.add(basemapExpand, "top-right");

    this.view.ui.move("zoom", "top-right");
    this.view.ui.move("navigation-toggle", "top-right");
    this.view.ui.move("compass", "top-right");

    const search = new Search({view, container: document.createElement("div")});
    const searchExpand = new Expand({expandIconClass: "esri-icon-search", view: this.view, content: search});
    this.view.ui.add(searchExpand, "top-left");

  }

}

export default AppViewModel;
