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

import esriConfig from "@arcgis/core/config";
import { resolve } from "@arcgis/core/core/promiseUtils";
import * as urlUtils from "@arcgis/core/core/urlUtils";
import IdentityManager from "@arcgis/core/identity/IdentityManager";
import Map from "@arcgis/core/Map";
import PortalItem from "@arcgis/core/portal/PortalItem";
import MapView from "@arcgis/core/views/MapView";
import SceneView from "@arcgis/core/views/SceneView";
import View from "@arcgis/core/views/View";
import WebMap from "@arcgis/core/WebMap";
import WebScene from "@arcgis/core/WebScene";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import Expand from "@arcgis/core/widgets/Expand";
import LayerList from "@arcgis/core/widgets/LayerList";
import Search from "@arcgis/core/widgets/Search";
import ArcGISVisualizationBridge from 'sas/ArcGISWebMapProvider/ArcGISVisualizationBridge';
import ProviderUtil from "sas/ArcGISWebMapProvider/ProviderUtil";
import { initializeI18N } from "sas/i18n/resources";
import "./Geowebmap.css";

/**
 * Adapts ArcGISVisualzationBridge for React.
 */
class GeowebmapMounter {

    private _visualizationBridge: ArcGISVisualizationBridge;
    private _map: Map;
    private _view: View;
    private _options: any;

    constructor(options: any | null) {
        this._options = (options) ? options : GeowebmapMounter.getOptionsFromUrl();
    }

    public static getOptionsFromUrl(): any {
        const url = urlUtils.urlToObject(window.location.href);
        const options = url.query || {};
        options.basemap = options.basemap || "osm";
        options.use3D = (options.use3D && options.use3D.toUpperCase() === "TRUE");
        options.useWebScene = false;
        options.showBasemapSelector = (options.showBasemapSelector === undefined || options.showBasemapSelector === null || options.showBasemapSelector.toUpperCase() === "TRUE");
        return options;
    }

    public mount(element: HTMLDivElement) {
        this._visualizationBridge = new ArcGISVisualizationBridge(this._options);
        this.afterMount(element);
    }

    private getPortalUrl(options: any): string {
        return (options.portalUrl) ? options.portalUrl : ProviderUtil.DEFAULT_PORTAL_URL;
    }

    private afterMount(element: HTMLDivElement) {

        if (this._options.portalUrl) {
            esriConfig.portalUrl = this._options.portalUrl;
        }

        if (this._options.portalToken) {
            IdentityManager.registerToken({
                token: this._options.portalToken,
                server: this.getPortalUrl(this._options)
            });
            this.loadUI(element);
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
        //         this.loadUI(element, options, visualizationBridge, map); 
        //     }, (error) => {
        //       ProviderUtil.logError(error);
        //     }); 
        //   });
        // }
        else {
            this.loadUI(element);
        }

    }

    private loadPortalItem(portalItemId?: string, portalUrl?: string): IPromise<PortalItem | null> {

        if (portalItemId) {
            return new PortalItem({
                id: portalItemId,
                url: (portalUrl) ? portalUrl : undefined
            }).load();
        }
        else {
            return resolve(null);
        }

    }

    private loadUI(element: HTMLDivElement) {
        // Ensure that localized resources are loaded before processing UI.
        const m = () => { this.buildMap(element); };
        initializeI18N().then(m, m);
    }

    private buildMap(element: HTMLDivElement) {

        this.loadPortalItem(this._options.portalItemId, this._options.portalUrl).then(

            (portalItem: PortalItem | null) => {

                if (portalItem && (portalItem.type === "Web Scene" || portalItem.type === "CityEngine Web Scene")) {
                    this._options.useWebScene = true;
                    this._map = new WebScene({ portalItem });
                } else if (portalItem) {
                    this._map = new WebMap({ portalItem });
                } else {
                    this._map = new Map({
                        basemap: this._options.basemap,
                        // ground: "world-elevation" // May no longer need.
                    });
                }

                this.buildMapView(element);

            },

            (error: any) => { ProviderUtil.logError(error); }

        );

    }

    private buildMapView(element: HTMLDivElement) {

        if (this._options.use3D || this._map instanceof WebScene) {
            this._view = new SceneView({
                map: this._map,
                container: element // Bound to Html.
            });
        }
        else {
            this._view = new MapView({
                map: this._map,
                container: element // Bound to Html.
            });
        }

        this._view.when((view: View) => {
            this.addMapWidgets(view as MapView || view as SceneView);
            this._visualizationBridge.registerMapView(view as MapView || view as SceneView);
        }, (error: any) => {
            ProviderUtil.logError(error);
        });

    }

    private addMapWidgets(view: MapView | SceneView) {

        const layerList = new LayerList({ view: view });
        const layerListExpand = new Expand({ expandIconClass: "esri-icon-layer-list", view: view, content: layerList, group: "top-right" });
        view.ui.add(layerListExpand, "top-right");

        if (this._options.showBasemapSelector) {
            const basemapGallery = new BasemapGallery({ view: view });
            const basemapExpand = new Expand({ expandIconClass: "esri-icon-basemap", view: view, content: basemapGallery, group: "top-right" });
            view.ui.add(basemapExpand, "top-right");
        }

        view.ui.move("zoom", "top-right");
        view.ui.move("navigation-toggle", "top-right");
        view.ui.move("compass", "top-right");

        const search = new Search({ view, container: document.createElement("div") });
        const searchExpand = new Expand({ expandIconClass: "esri-icon-search", view: view, content: search });
        view.ui.add(searchExpand, "top-left");

    }

}
export default GeowebmapMounter;