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
import classnames from "classnames";
import React from "react";
import ArcGISVisualizationBridge from 'sas/ArcGISWebMapProvider/ArcGISVisualizationBridge';
import ProviderUtil from "sas/ArcGISWebMapProvider/ProviderUtil";
import { initializeI18N } from "sas/i18n/resources";
import "./Geowebmap.css";

interface GeowebmapState {
    urlOptions: any;
    mapDiv: React.RefObject<HTMLDivElement>;
}
class Geowebmap extends React.Component<{}, GeowebmapState> {

    private static readonly CSS = {
        base: "main",
        webmap: "webmap",
        webmapAnimated: "webmap-animating",
        animationControls: "animationControls",
        animationControlsAnimated: "animationControls-animating"
    };

    private _visualizationBridge: ArcGISVisualizationBridge;
    private _map: Map;
    private _view: View;

    constructor(props) {
        super(props);
        this.state = {
            urlOptions: this.getOptionsFromUrl(),
            mapDiv: React.createRef()
        };
    }

    private get urlOptions(): any {
        return (this.state) ? this.state.urlOptions : null;
    }

    render() {

        const dynamicClassesWebmap = {
            [Geowebmap.CSS.webmapAnimated]: this.state.urlOptions.animation
        };
        const dynamicClassesAnimationControls = {
            [Geowebmap.CSS.animationControlsAnimated]: this.state.urlOptions.animation
        }

        return <div className={Geowebmap.CSS.base}>
            <div ref={this.state.mapDiv} className={classnames(Geowebmap.CSS.webmap, dynamicClassesWebmap)} />
            <footer id="animationControls" className={classnames(Geowebmap.CSS.animationControls, dynamicClassesAnimationControls)}>
                <div id="animationLabel"></div>
                <input id="animationPlayButton" type="button" value=">>" readOnly />
                <input id="animationSlider" type="range" min="0" max="100" step="0.001" defaultValue="0" style={{ width: "100%" }} />
            </footer>
        </div>;

    }

    componentDidMount() {

        if (!this.state.mapDiv.current)
            return;

        this._visualizationBridge = new ArcGISVisualizationBridge(this.urlOptions);

        this.afterMount(this.state.mapDiv.current);

    }

    private getOptionsFromUrl(): any {
        const url = urlUtils.urlToObject(window.location.href);
        const _options = url.query || {};
        _options.basemap = _options.basemap || "osm";
        _options.use3D = (_options.use3D && _options.use3D.toUpperCase() === "TRUE");
        _options.useWebScene = false;
        _options.showBasemapSelector = (_options.showBasemapSelector === undefined || _options.showBasemapSelector === null || _options.showBasemapSelector.toUpperCase() === "TRUE");
        return _options;
    }

    private getPortalUrl(options: any): string {
        return (options.portalUrl) ? options.portalUrl : ProviderUtil.DEFAULT_PORTAL_URL;
    }

    private afterMount(element: HTMLDivElement) {

        if (this.urlOptions.portalUrl) {
            esriConfig.portalUrl = this.urlOptions.portalUrl;
        }

        if (this.urlOptions.portalToken) {
            IdentityManager.registerToken({
                token: this.urlOptions.portalToken,
                server: this.getPortalUrl(this.urlOptions)
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

        this.loadPortalItem(this.urlOptions.portalItemId, this.urlOptions.portalUrl).then(

            (portalItem: PortalItem | null) => {

                if (portalItem && (portalItem.type === "Web Scene" || portalItem.type === "CityEngine Web Scene")) {
                    this.urlOptions.useWebScene = true;
                    this._map = new WebScene({ portalItem });
                } else if (portalItem) {
                    this._map = new WebMap({ portalItem });
                } else {
                    this._map = new Map({
                        basemap: this.urlOptions.basemap,
                        // ground: "world-elevation" // May no longer need.
                    });
                }

                this.buildMapView(element);

            },

            (error: any) => { ProviderUtil.logError(error); }

        );

    }

    private buildMapView(element: HTMLDivElement) {

        if (this.urlOptions.use3D || this._map instanceof WebScene) {
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

        if (this.state.urlOptions.showBasemapSelector) {
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

export default Geowebmap;