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
 * Main entry point of this custom map application.  Instantiates the map
 * and sets up the ArcGISVisualizationBridge.  The widgets that are 
 * included by default are specified here.  (See addMapWidgets().)
 */
require([
    "esri/WebMap",
    "esri/widgets/LayerList",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Search",
    "esri/widgets/Expand",
    "sas/ArcGISWebMapProvider/ArcGISVisualizationBridge",
    "sas/ArcGISWebMapProvider/ProviderUtil",
    "dojo/io-query",
    "dojo/domReady!"
], function (Map, LayerList, BasemapGallery, Search, Expand, ArcGISVisualizationBridge, ProviderUtil, ioQuery) {

    // Initialize options.

    var searchString = window.location.search;
    var options = ioQuery.queryToObject(searchString.substring(searchString.indexOf("?") + 1, searchString.length));
    var visualizationBridge = new ArcGISVisualizationBridge(options);

    options.basemap = options.basemap || "osm";
    options.use3D = (options.use3D && options.use3D.toUpperCase() === "TRUE");

    // Create the map.

    var map;

    if (options.portalItemId) {
        map = new Map({
            portalItem: {
                id: options.portalItemId
            }
        });
    } else {
        map = new Map({
            basemap: options.basemap,
            ground: "world-elevation"
        });
    }

    var addMapWidgets = function (view) {
        var layerList = new LayerList({view: view, container: document.createElement("div")});
        var layerListExpand = new Expand({expandIconClass: "esri-icon-layer-list", view: view, content: layerList.domNode, group: "top-right"});
        view.ui.add(layerListExpand, "top-right");
        var basemapGallery = new BasemapGallery({view: view, container: document.createElement("div")});
        var basemapExpand = new Expand({expandIconClass: "esri-icon-basemap", view: view, content: basemapGallery.domNode, group: "top-right"});
        view.ui.add(basemapExpand, "top-right");
        var search = new Search({view: view, container: document.createElement("div")});
        var searchExpand = new Expand({expandIconClass: "esri-icon-search", view: view, content: search.domNode});
        view.ui.add(searchExpand, "bottom-left");
    }

    var requiredView = [];
    if (options.use3D)
        requiredView.push("esri/views/SceneView");
    else 
        requiredView.push("esri/views/MapView");

    require(requiredView, function(View){

        new View({
            map: map,
            container: "viewDiv"
        }).when(function (_view) {
            visualizationBridge.registerMapView(_view);
            addMapWidgets(_view);
        }, function (error) { 
            new ProviderUtil().logError(error); 
        });

    });

});
