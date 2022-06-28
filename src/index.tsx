import esriConfig from "@arcgis/core/config.js";
import Geowebmap from 'Geowebmap';
import 'index.css';
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import reportWebVitals from 'reportWebVitals';
import ProviderUtil from "sas/ArcGISWebMapProvider/ProviderUtil";

/* ASSET SOURCE: The following line loads style assets locally.  To load them from 
 * arcgis.com instead, remove it, and alter Geowebmap.css to import styles
 * from arcgis.com. 
 */
esriConfig.assetsPath = ProviderUtil.getHomePage() + "assets";

const container = document.getElementById('root')!;

const root = ReactDOMClient.createRoot(container);

root.render(
    <React.StrictMode>
        <Geowebmap />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
