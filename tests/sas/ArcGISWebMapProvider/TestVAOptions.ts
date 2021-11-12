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

import VAOptions from "sas/ArcGISWebMapProvider/VAOptions";
import TestUtil from "sas/TestUtil";

const { suite, test } = intern.getInterface("tdd");
const { assert } = intern.getPlugin("chai");

// Convert "\" to "\\".
const expectedOptions = `{"version":1,"urlOption":true,"label":"SAS Geowebmap","groups":[{"label":"Webmap Settings","fields":[{"name":"portalItemId","label":"Webmap ID:","tooltip":"The optional ID for a web map provided by the Esri portal (arcgis.com, by default).","type":"String"},{"name":"basemap","label":"Basemap:","tooltip":"A basemap from arcgis.com. Ignored if portalItemId is set.","value":" ","dataProvider":[{"key":"topo","text":"Topographical"},{"key":"streets","text":"Streets"},{"key":"satellite","text":"Satellite"},{"key":"hybrid","text":"Hybrid"},{"key":"dark-gray","text":"Dark-gray"},{"key":"gray","text":"Gray"},{"key":"national-geographic","text":"National Geographic"},{"key":"oceans","text":"Oceans"},{"key":" ","text":"OpenStreetMap"},{"key":"terrain","text":"Terrain"},{"key":"dark-gray-vector","text":"Dark-gray vector"},{"key":"gray-vector","text":"Gray vector"},{"key":"streets-vector","text":"Streets vector"},{"key":"streets-night-vector","text":"Streets night vector"},{"key":"streets-navigation-vector","text":"Streets navigation vector"},{"key":"topo-vector","text":"Topographical vector"},{"key":"streets-relief-vector","text":"Streets relief vector"}]},{"name":"use3D","label":"Use 3D","tooltip":"Display the map in a 3D scene view.","type":"Boolean"},{"name":"portalUrl","label":"Esri portal Url:","tooltip":"The full URL to the Esri portal.  Defaults to \\"http://www.arcgis.com\\".","placeholder":"http://www.arcgis.com","type":"String"}]},{"label":"SAS VA Layer","fields":[{"name":"title","label":"Title:","tooltip":"The title of the layer that includes report data. Optional. Defaults to the Geo ID column name, if available, or to \\"SAS VA Layer\\", if not.","type":"String","placeholder":"SAS VA Layer"},{"name":"visualizationType","label":"Visualization type:","tooltip":"The kind of the SAS-generated layer to be added to the map.  Optional.","value":"NONE","dataProvider":[{"key":"NONE","text":"(none)"},{"key":"scatter","text":"Coordinates"},{"key":"bubble","text":"Bubbles"},{"key":"choropleth","text":"Regions"},{"key":"filtered","text":"Filtered Esri layer"}]},{"name":"x","label":"X column name:","tooltip":"The label of the column containing longitude expressed in the same terms as the base map. Defaults to \\"Longitude\\". Required for coordinates and bubbles visualizations.","type":"String","placeholder":"Required for coordinates and bubbles"},{"name":"y","label":"Y column name:","tooltip":"The label of the column containing latitude expressed in the same terms as the base map. Defaults to \\"Latitude\\". Required for coordinates and bubbles visualizations.","type":"String","placeholder":"Required for coordinates and bubbles"},{"name":"size","label":"Size column name:","tooltip":"The label of the column containing the size measurement. Required for bubble visualizations.","type":"String","placeholder":"Required for bubbles"},{"name":"color","label":"Color column name:","tooltip":"The label of the column containing the color measurement. Optional for bubble and choropleth visualizations.","type":"String","placeholder":"Optional for bubbles and regions"},{"name":"geoId","label":"Geo ID column name:","tooltip":"The label of the column containing the geographic identifiers for the areas to be drawn. Required for visualization types \\"Regions\\" and \\"Filtered Esri layer\\".","placeholder":"Required for regions","type":"String"},{"name":"featureServiceUrl","label":"Feature service Url:","tooltip":"The url to the Esri feature service containing the shapes of the geographies identified by the Geo ID column name.  Required for visualization types \\"Regions\\" and \\"Filtered Esri layer\\".","placeholder":"Required for regions","type":"String"},{"name":"featureServiceGeoId","label":"Feature service Geo ID column name:","tooltip":"The name of the attribute in the Esri feature service that will match values found in the Geo ID column of the report's data.  Required for visualization types \\"Regions\\" and \\"Filtered Esri layer\\".","placeholder":"Required for regions","type":"String"},{"name":"featureServiceWhere","label":"Feature service filter:","tooltip":"A optional where clause to be provided to the Esri feature service that filters results.","type":"String"},{"name":"featureServiceMaxAllowableOffset","label":"Feature service max allowable offset:","tooltip":"The optional maxAllowableOffset provided to the feature service. Can be used to restrict the amount of detail (and thus transmission size) of the geographic shapes it returns.  Use 0 to return highest detail.  Defaults to level matching initial extent.","type":"Number"},{"name":"animation","label":"Animation column name:","tooltip":"The label of the column containing the date used when animating through the data. Optional. Animations are not currently supported in choropleths or 3D views, and they should be considered experimental.  Acceptable date formats include RFC2822 and ISO.","type":"String"},{"name":"period","label":"Animation period:","tooltip":"Defines the interval used to subdivide the animation date. Valid values are units of time such as \\"millisecond\\", \\"day\\", \\"month\\", and \\"year\\". Defaults to \\"year\\".","placeholder":"E.g., \\"year\\" or \\"millisecond\\"","type":"String"},{"name":"colorMin","label":"Minimum color:","tooltip":"A hex (\\"#bfe4e7\\"), rgba (\\"rgba(191,228,231,1)\\"), or named (\\"LightCyan\\") color for the minimum value of the range.","placeholder":"E.g., \\"red\\" or \\"rgba(255,0,0,1)\\"","type":"String"},{"name":"colorMax","label":"Maximum color:","tooltip":"A hex (\\"#bfe4e7\\"), rgba (\\"rgba(191,228,231,1)\\"), or named (\\"LightCyan\\") color for the maximum value of the range.","placeholder":"E.g., \\"red\\" or \\"rgba(255,0,0,1)\\"","type":"String"},{"name":"outline","label":"Outline color:","tooltip":"A hex (\\"#bfe4e7\\"), rgba (\\"rgba(191,228,231,1)\\"), or named (\\"LightCyan\\") color for borders of drawn shapes.","placeholder":"E.g., \\"red\\" or \\"rgba(255,0,0,1)\\"","type":"String"},{"name":"zIndex","label":"Z-index:","tooltip":"The index of the layer that includes report data. Optional. Use 0 to insert the layer below all others. Defaults to the top-most level.","type":"Integer","placeholder":"Number from 0","constraints":{"min":0}}]}]}`;

suite("VAOptions", () => {

    test("getOptions", () => {

        TestUtil.InitializeI18NOnce().then(() => {

            const options: any = VAOptions.getOptions();

            assert.isOk(options);
            assert.deepEqual(options, JSON.parse(expectedOptions), "VA options match expectations.");

        });
    });

});
