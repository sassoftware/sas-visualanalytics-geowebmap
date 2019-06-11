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

/// <amd-dependency path="dojo/Deferred" name="Deferred" />
declare const Deferred: any;

// /* tslint:disable: no-unused-expression */
// import __forceLoad = require("esri/layers/graphics/sources/support/MemorySourceWorker"); __forceLoad; // See https://github.com/Esri/arcgis-webpack-plugin/issues/26, 12/19/18.
// /* tslint:enable */

import esri = __esri;

import {
  aliasOf,
  declared,
  property,
  subclass
} from "esri/core/accessorSupport/decorators";
import { renderable, tsx } from "esri/widgets/support/widget";

import esriConfig from "esri/config";
import IdentityManager from "esri/identity/IdentityManager";
import FeatureLayer from "esri/layers/FeatureLayer";
import Map from "esri/Map";
import PortalItem from "esri/portal/PortalItem";
import MapView from "esri/views/MapView";
import SceneView from "esri/views/SceneView";
import View from "esri/views/View";
import WebMap from "esri/WebMap";
import WebScene from "esri/WebScene";
import Widget from "esri/widgets/Widget";
import ArcGISVisualizationBridge from "sas/ArcGISWebMapProvider/ArcGISVisualizationBridge";
import ProviderUtil from "sas/ArcGISWebMapProvider/ProviderUtil";

import AppViewModel, { AppParams } from "./App/AppViewModel";

interface AppViewParams extends AppParams, esri.WidgetProperties { }

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

  @aliasOf("viewModel.map") map: Map;

  @aliasOf("viewModel.view") view: View;

  @aliasOf("viewModel.visualizationBridge") visualizationBridge: ArcGISVisualizationBridge;

  @aliasOf("viewModel.options") options: any;

  @property()
  @renderable()
  animation: boolean = false;

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
          <input id="animationPlayButton" type="button" value=">>" />
          <input id="animationSlider" type="range" min="0" max="100" step="0.001" value="0" style="width: 100%;" />
        </footer>
      </div>
    );
  }

  private getPortalUrl(options: any): string {
    return (options.portalUrl) ? options.portalUrl : ProviderUtil.DEFAULT_PORTAL_URL;
  }

  private onAfterCreate(element: HTMLDivElement) {

    import("./../data/app").then(({ options, visualizationBridge }) => {

      if (options.animation) {
        this.animation = true;
      }
      this.options = options;
      this.visualizationBridge = visualizationBridge;

      if (options.portalUrl) {
        esriConfig.portalUrl = options.portalUrl;
      }

      if (options.portalToken) {
        IdentityManager.registerToken({
          token: options.portalToken,
          server: this.getPortalUrl(options)
        });
        this.buildMap(element);
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
        this.buildMap(element);
      }

    });

  }

  private loadPortalItem(portalItemId?: string, portalUrl?: string): IPromise<PortalItem | null> {

    if (portalItemId) {
      return new PortalItem({
        id: portalItemId,
        url: (portalUrl) ? portalUrl : undefined
      }).load();
    }
    else {
      const portalItem = new Deferred();
      portalItem.resolve();
      return portalItem.promise;
    }

  }

  private buildMap(element: HTMLDivElement) {

    this.loadPortalItem(this.options.portalItemId, this.options.portalUrl).then(

      (portalItem: PortalItem) => {

        if (portalItem && (portalItem.type === "Web Scene" || portalItem.type === "CityEngine Web Scene")) {
          this.options.useWebScene = true;
          this.map = new WebScene({ portalItem });
        } else if (portalItem) {
          this.map = new WebMap({ portalItem });
        } else {
          this.map = new Map({
            basemap: this.options.basemap,
            // ground: "world-elevation" // May no longer need.
          });
        }

        this.buildMapView(element);

      },

      (error: any) => { ProviderUtil.logError(error); }

    );

  }

  private buildMapView(element: HTMLDivElement) {

    if (this.options.use3D || this.map instanceof WebScene) {
      this.view = new SceneView({
        map: this.map,
        container: element // Bound to Html.
      });
    }
    else {
      this.view = new MapView({
        map: this.map,
        container: element // Bound to Html.
      });
    }

    this.view.when((view: View) => {
      this.visualizationBridge.registerMapView(view);
    }, (error: any) => {
      ProviderUtil.logError(error);
    });

  }
}
