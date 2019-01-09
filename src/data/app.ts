import EsriMap from "esri/Map";
import WebMap from "esri/WebMap";
import ArcGISVisualizationBridge from 'sas/ArcGISWebMapProvider/ArcGISVisualizationBridge'; 

export const options = (()=>{
  var urlUtils2 = require("esri/core/urlUtils");
  var url = urlUtils2.urlToObject(window.location.href);
  var options = url.query || {};
  // MAP TODO: Old method -> var options = IOQuery.queryToObject(searchString.substring(searchString.indexOf("?") + 1, searchString.length));
  // MAP TODO: Move this option-parsing logic to a more central area.
  options.basemap = options.basemap || "osm";
  options.use3D = (options.use3D && options.use3D.toUpperCase() === "TRUE");
  return options;
})();

export const visualizationBridge = new ArcGISVisualizationBridge(options);

export const featureLayer = null; 

export const map = (()=>{
    var map;
    if (options.portalItemId) {
        map = new WebMap({
            portalItem: {
                id: options.portalItemId
            }
        });
    } else {
        map = new EsriMap({
            basemap: options.basemap,
            //ground: "world-elevation" // MAP TODO: This is causing a console error.  May no longer need.
        });
    }
    return map;
})();
