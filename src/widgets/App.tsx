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

/* tslint:disable: no-unused-expression */
import __forceLoad = require("esri/layers/graphics/sources/support/MemorySourceWorker"); __forceLoad; // See https://github.com/Esri/arcgis-webpack-plugin/issues/26, 12/19/18.
/* tslint:enable */

import esri = __esri;

import {
  aliasOf,
  declared,
  property,
  subclass
} from "esri/core/accessorSupport/decorators";
import { renderable, tsx } from "esri/widgets/support/widget";



import IdentityManager from "esri/identity/IdentityManager";
import FeatureLayer from "esri/layers/FeatureLayer";
import EsriMap from "esri/Map";
import MapView from "esri/views/MapView";
import SceneView from "esri/views/SceneView";
import View from "esri/views/View";
import Widget from "esri/widgets/Widget";
import ArcGISVisualizationBridge from "sas/ArcGISWebMapProvider/ArcGISVisualizationBridge";
import ProviderUtil from "sas/ArcGISWebMapProvider/ProviderUtil";

import AppViewModel, { AppParams } from "./App/AppViewModel";

interface AppViewParams extends AppParams, esri.WidgetProperties {}

const CSS = {
  base: "main",
  webmap: "webmap",
  webmapAnimated: "webmap-animating",
  animationControls: "animationControls",
  animationControlsAnimated: "animationControls-animating"
};

@subclass("app.widgets.webmapview")
export default class App extends declared(Widget) {
  @property() viewModel = new AppViewModel();

  @aliasOf("viewModel.appName") appName: string;

  @aliasOf("viewModel.featureLayer") featureLayer: FeatureLayer;

  @aliasOf("viewModel.map") map: EsriMap;

  @aliasOf("viewModel.view") view: View;

  @aliasOf("viewModel.visualizationBridge") visualizationBridge: ArcGISVisualizationBridge;

  @aliasOf("viewModel.options") options:any;

  @property()
  @renderable()
  animation:boolean = false;

  constructor(params: Partial<AppViewParams>) {
    super(params);
  }

  render() {

    const dynamicClassesWebmap = {
      [CSS.webmapAnimated]: this.animation
    };
    const dynamicClassesAnimationControls = {
      [CSS.animationControlsAnimated]: this.animation
    }

    return (
      <div class={CSS.base}>
        <div class={this.classes(CSS.webmap, dynamicClassesWebmap)} bind={this} afterCreate={this.onAfterCreate} />
        <footer id="animationControls" class={this.classes(CSS.animationControls, dynamicClassesAnimationControls)}>
          <div id="animationLabel"></div>
          <input id="animationPlayButton" type="button" value=">>"/>
          <input id="animationSlider" type="range" min="0" max="100" step="0.001" value="0" style="width: 100%;"/>
        </footer>
      </div>
    );
  }

  private getPortalUrl(options:any):string {
    return (options.portalUrl) ? options.portalUrl : ProviderUtil.DEFAULT_PORTAL_URL;
  }

  private onAfterCreate(element: HTMLDivElement) {
    import("esri/layers/graphics/sources/support/MemorySourceWorker").then(({MemorySourceWorker}) => { // See https://github.com/Esri/arcgis-webpack-plugin/issues/26, 12/19/18.
      import("./../data/app").then(({ options, visualizationBridge, map }) => {

        if (options.portalToken) {
          IdentityManager.registerToken({
            token: options.portalToken,
            server: this.getPortalUrl(options)
          });
          this.buildMap(element, options, visualizationBridge, map);
        }
        // The following branch is useful for testing, but not 
        // recommended for deployment.  Commented out.
        // else if (options.username && options.password) {
        //   const server = this.getPortalUrl(options);
        //   IdentityManager.checkSignInStatus(server).then((success)=>{
        //     this.buildMap(element, options, visualizationBridge, map);
        //   },(failure)=>{
        //     const serverInfo = IdentityManager.findServerInfo(server);
        //     IdentityManager.generateToken(
        //         serverInfo,
        //         {
        //             username: options.username,
        //             password: options.password
        //         } 
        //     ).then((token: any) => {
        //         if (token && !token.server) {
        //             token.server = serverInfo.server; 
        //         } 
        //         IdentityManager.registerToken(token); 
        //         this.buildMap(element, options, visualizationBridge, map); 
        //     }, (error) => {
        //       ProviderUtil.logError(error);
        //     }); 
        //   });
        // }
        else {
          this.buildMap(element, options, visualizationBridge, map);
        }

      });
    });
  }

  private buildMap(element: HTMLDivElement, options:any, visualizationBridge:ArcGISVisualizationBridge, map:EsriMap) {

    if (options.animation) {
      this.animation = true;
    }

    this.visualizationBridge = visualizationBridge;
    this.map = map;

    if (options.use3D) {
      this.view = new SceneView({
        map,
        container: element
      });
    }
    else {
      this.view = new MapView({
        map,
        container: element
      });
    }

    this.view.when((view:View)=>{
      visualizationBridge.registerMapView(view);
    }, (error:any)=>{
      ProviderUtil.logError(error);
    });

  }
}
