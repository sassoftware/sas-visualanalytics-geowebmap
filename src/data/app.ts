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

import EsriMap from "esri/Map";
import WebMap from "esri/WebMap";
import ArcGISVisualizationBridge from 'sas/ArcGISWebMapProvider/ArcGISVisualizationBridge'; 

export const options = (()=>{
  const urlUtils2 = require("esri/core/urlUtils");
  const url = urlUtils2.urlToObject(window.location.href);
  const _options = url.query || {};
  _options.basemap = _options.basemap || "osm";
  _options.use3D = (_options.use3D && _options.use3D.toUpperCase() === "TRUE");
  return _options;
})();

export const visualizationBridge = new ArcGISVisualizationBridge(options);

export const featureLayer = null; 

export const map = (()=>{
    let _map;
    if (options.portalItemId) {
        _map = new WebMap({
            portalItem: {
                id: options.portalItemId,
                url: (options.portalUrl) ? options.portalUrl : null
            }
        });
    } else {
        _map = new EsriMap({
            basemap: options.basemap,
            // ground: "world-elevation" // May no longer need.
        });
    }
    return _map;
})();
