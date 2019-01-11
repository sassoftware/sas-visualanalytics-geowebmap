import EsriMap from "esri/Map";
import WebMap from "esri/WebMap";
import ArcGISVisualizationBridge from 'sas/ArcGISWebMapProvider/ArcGISVisualizationBridge'; 

export const options = (()=>{
  const urlUtils2 = require("esri/core/urlUtils");
  const url = urlUtils2.urlToObject(window.location.href);
  const _options = url.query || {};
  // MAP TODO: Old method -> var options = IOQuery.queryToObject(searchString.substring(searchString.indexOf("?") + 1, searchString.length));
  // MAP TODO: Move this option-parsing logic to a more central area.
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
                id: options.portalItemId
            }
        });
    } else {
        _map = new EsriMap({
            basemap: options.basemap,
            // ground: "world-elevation" // MAP TODO: This is causing a console error.  May no longer need.
        });
    }
    return _map;
})();
