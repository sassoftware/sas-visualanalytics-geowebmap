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

import ArcGISVisualizationBridge from 'sas/ArcGISWebMapProvider/ArcGISVisualizationBridge';
import * as urlUtils from "@arcgis/core/core/urlUtils";

export const options = (() => {
  const url = urlUtils.urlToObject(window.location.href);
  const _options = url.query || {};
  _options.basemap = _options.basemap || "osm";
  _options.use3D = (_options.use3D && _options.use3D.toUpperCase() === "TRUE");
  _options.useWebScene = false;
  _options.showBasemapSelector = (_options.showBasemapSelector === undefined || _options.showBasemapSelector === null || _options.showBasemapSelector.toUpperCase() === "TRUE");
  return _options;
})();

export const visualizationBridge = new ArcGISVisualizationBridge(options);

export const featureLayer = null;
