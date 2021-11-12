import esriConfig from "@arcgis/core/config.js";
import React from 'react';
import ReactDOM from 'react-dom';
import Geowebmap from './Geowebmap';
import './index.css';
import reportWebVitals from './reportWebVitals';

/* ASSET SOURCE: The following line loads style assets locally.  To load them from 
 * arcgis.com instead, remove it, and alter Geowebmap.css to import styles
 * from arcgis.com. 
 */
esriConfig.assetsPath = "./assets";

ReactDOM.render(
    <React.StrictMode>
        <Geowebmap />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
