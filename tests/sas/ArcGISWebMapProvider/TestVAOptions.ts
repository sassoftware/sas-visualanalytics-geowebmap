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

const { suite, test } = intern.getInterface("tdd");
const { assert } = intern.getPlugin("chai");

// Convert "\" to "\\".
const expectedOptions: string = `{"id":"geowebmapOptions","label":"SAS Geowebmap","fields":[{"id":"portalItemId","label":"Webmap ID","help":"The optional ID for a web map provided by the Esri portal (arcgis.com, by default).","type":"string"},{"id":"visualizationType","label":"Visualization type","help":"The kind of the SAS-generated layer to be added to the map.  Defaults to \\"Coordinates.\\"","type":"string","dataProvider":[{"key":"","text":""},{"key":"scatter","text":"Coordinates"},{"key":"bubble","text":"Bubbles"},{"key":"choropleth","text":"Regions"},{"key":"filtered","text":"Filtered Esri layer"}]},{"id":"title","label":"Title","help":"The title of the layer that includes report data. Optional. Defaults to the Geo ID column name, if available, or to \\"SAS VA Layer\\", if not.","type":"string"},{"id":"zIndex","label":"Z index","help":"The index of the layer that includes report data. Optional. Use 0 to insert the layer below all others. Defaults to the top-most level.","type":"integer"},{"id":"x","label":"X column name","help":"The label of the column containing longitude expressed in the same terms as the base map. Defaults to \\"Longitude\\". Required for scatter and bubble visualizations.","type":"string"},{"id":"y","label":"Y column name","help":"The label of the column containing latitude expressed in the same terms as the base map. Defaults to \\"Latitude\\". Required for scatter and bubble visualizations.","type":"string"},{"id":"size","label":"Size column name","help":"The label of the column containing the size measurement. Required for bubble visualizations.","type":"string"},{"id":"color","label":"Color column name","help":"The label of the column containing the color measurement. Optional for bubble and choropleth visualizations.","type":"string"},{"id":"animation","label":"Animation column name","help":"The label of the column containing the date used when animating through the data. Optional. Animations are not currently supported in choropleths or 3D views, and they should be considered experimental.  Acceptable date formats include RFC2822 and ISO.","type":"string"},{"id":"period","label":"Animation period","help":"Defines the interval used to subdivide the animation date. Valid values are units of time such as \\"millisecond\\", \\"day\\", \\"month\\", and \\"year\\". Defaults to \\"year\\".","type":"string"},{"id":"geoId","label":"Geo ID column name","help":"The label of the column containing the geographic identifiers for the areas to be drawn. Required for visualization types \\"Regions\\" and \\"Filtered Esri layer\\".","type":"string"},{"id":"featureServiceUrl","label":"Feature service Url","help":"The url to the Esri feature service containing the shapes of the geographies identified by the Geo ID column name.  Required for visualization types \\"Regions\\" and \\"Filtered Esri layer\\".","type":"string"},{"id":"featureServiceGeoId","label":"Feature service Geo ID column name","help":"The name of the attribute in the Esri feature service that will match values found in the Geo ID column of the report's data.  Required for visualization types \\"Regions\\" and \\"Filtered Esri layer\\".","type":"string"},{"id":"featureServiceWhere","label":"Feature service filter","help":"A optional where clause to be provided to the Esri feature service that filters results.","type":"string"},{"id":"featureServiceMaxAllowableOffset","label":"Feature service max allowable offset","help":"The optional maxAllowableOffset provided to the feature service. Can be used to restrict the amount of detail (and thus transmission size) of the geographic shapes it returns.","type":"number"},{"id":"colorMin","label":"Minimum color","help":"A hex (\\"#bfe4e7\\"), rgba (\\"rgba(191,228,231,1)\\"), or named (\\"LightCyan\\") color for the minimum value of the range.","type":"string"},{"id":"colorMax","label":"Maximum color","help":"A hex (\\"#bfe4e7\\"), rgba (\\"rgba(191,228,231,1)\\"), or named (\\"LightCyan\\") color for the maximum value of the range.","type":"string"},{"id":"outline","label":"Outline color","help":"A hex (\\"#bfe4e7\\"), rgba (\\"rgba(191,228,231,1)\\"), or named (\\"LightCyan\\") color for borders of drawn shapes.","type":"string"},{"id":"basemap","label":"Basemap","help":"A basemap from arcgis.com. Ignored if portalItemId is set.","type":"string","dataProvider":[{"key":"","text":""},{"key":"topo","text":"Topographical"},{"key":"streets","text":"Streets"},{"key":"satellite","text":"Satellite"},{"key":"hybrid","text":"Hybrid"},{"key":"dark-gray","text":"Dark-gray"},{"key":"gray","text":"Gray"},{"key":"national-geographic","text":"National Geographic"},{"key":"oceans","text":"Oceans"},{"key":"osm","text":"OpenStreetMap"},{"key":"terrain","text":"Terrain"},{"key":"dark-gray-vector","text":"Dark-gray vector"},{"key":"gray-vector","text":"Gray vector"},{"key":"streets-vector","text":"Streets vector"},{"key":"streets-night-vector","text":"Streets night vector"},{"key":"streets-navigation-vector","text":"Streets navigation vector"},{"key":"topo-vector","text":"Topographical vector"},{"key":"streets-relief-vector","text":"Streets relief vector"}]},{"id":"use3D","label":"Use 3D","help":"Display the map in a 3D scene view.","type":"boolean"},{"id":"portalUrl","label":"Esri portal Url","help":"The full URL to the Esri portal.  Defaults to \\"http://www.arcgis.com\\".","type":"string"}]}`;

suite("VAOptions", () => {

    test("getOptions", () => {

        const options: any = VAOptions.getOptions();

        assert.isOk(options);
        assert.deepEqual(options, JSON.parse(expectedOptions), "VA options match expectations.");

    });

});
