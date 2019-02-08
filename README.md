# SAS ArcGISWebMapProvider  

![3D Choropleth in VA](3DChoropleth.png)

For an overview of this project from the perspective of a user, see the document "[Using ArcGIS WebMaps in SAS Visual Analytics](https://raw.githubusercontent.com/sassoftware/sas-visualanalytics-geowebmap/master/doc/UsingArcGISWebMapsInSASVA.pdf)."  

## Project

This project presents a web page with an ArcGIS map designed to serve as a data-driven content for reports built with SAS Visual Analytics. It is a fork of [jsapi-resources](https://github.com/Esri/jsapi-resources), Esri's template for JS applications, using Dojo and ArcGIS for JavaScript 4.x.

### Usage

* Download the project.
* Open a command-line context at the project directory.
* `npm install`
* `npm run build`
* Copy the built application from the `dist` directory to your web server's directory.

#### Prerequisites

Installation requires [node](http://nodejs.org) version 8.x.x or higher.  You can check your current version with `node --version`.

#### Other options

Run `npm run start` to compile and then kick off a webpack-dev-server to host the results locally for immediate testing.

## Application

### Overview

From SAS Visual Analytics, users can add a "Data-Driven Content" object to their report and set its "Web Content" url to the deployment directory.  They can then use the supported query string arguments to customize the type and styling of the visualization layer in which the report data appears above the ArcGIS map.

Data-driven content aggregates report data.  Keep this in mind when including location coordinate information, which is required for scatter and bubble plots.  The default aggregation method for numeric columns is "sum", and summing coordinates (e.g, latitude and longitude) will produce values that cannot be geographically located.  For these coordinate columns, either switch their aggregation type to something less disruptive (such as "average"), or take other steps to ensure that there is only one category value per location, so that no aggregation of their coordinates will occur.  For instance, VA's "Geographic Items," when set to the data type "custom coordinates," protect against inappropriate aggregation, and their use is preferred.

### Query string arguments

| Argument | Description |
| --- | --- |
| visualizationType | Optional.  Possible values include "scatter", "bubble", "choropleth," or "filtered".  If unspecified, the value will be inferred from other arguments or left as "scatter". Scatter plots, bubble plots, and choropleths appear as a SAS layer, capable of participating in filtering, interactions, and selection.  "Filtered" layers simply include a named external feature layer filtered by geoId. |
| x | The label of the column containing longitude expressed in the same terms as the base map.  Defaults to "Longitude".  Required for scatter and bubble visualizations. |
| y | The label of the column containing latitude expressed in the same terms as the base map.  Defaults to "Latitude".   Required for scatter and bubble visualizations. |
| size | The label of the column containing the size measurement.  Required for bubble visualizations. |
| color | The label of the column containing the color measurement.  Optional for bubble and choropleth visualizations. |
| animation | The label of the column containing the date used when animating through the data.  Optional.  Animations are not currently supported in choropleths or 3D views, and they should be considered experimental.  It has been observed that performance degrades rapidly when the data's row count enters the tens of thousands.  Acceptable date formats are those correctly interpreted by [Moment](http://momentjs.com/), which include RFC2822 and ISO formats. |
| colorMin | A hex, rgba, or named color for the minimum value of the range.  Defaults to "#bfe4e7" (also expressed, for example, as "rgba(191,228,231,1)", which is somewhat close to "LightCyan"). |
| colorMax | A hex, rgba, or named color for the minimum value of the range.  Defaults to "#00929f".  Also controls dot color for the scatter plot as well as default color for the choropleth (when no color column is assigned). |
| outline | A hex, rgba, or named color for an outline on drawn shapes.  Defaults to "#007E88".  Also controls highlight color for 3D views. |
| geoId | The label of the column containing the geographic identifiers for the areas to be drawn.  Required for choropleth and "filtered". |
| featureServiceUrl | The url to the Esri feature service containing the shapes of the geographies identified by the geoId.  Required for choropleth and "filtered". |
| featureServiceGeoId | The name of the attribute in the Esri feature service that will match values found in the geoId column of the VA data.  Required for choropleth and "filtered". |
| featureServiceWhere | A where clause to be provided to the Esri feature service that filters results.  Optional. |
| featureServiceMaxAllowableOffset | The optional maxAllowableOffset provided to the feature service.  Can be used to restrict the amount of detail (and thus transmission size) of the geographic shapes it returns. |
| portalItemId | The ID for a web map served at arcgis.com.  Optional.  Defaults to basemap "osm" (OpenStreetMap). |
| portalToken | The Esri token string that can be presented to the portal for access. |
| portalUrl | The full URL to the portal hosting the portal item and validating the portalToken, if one is presented.  Defaults to "http://www.arcgis.com".
| baseMap | The ID for a basemap from arcgis.com (e.g., "streets", "satellite", "hybrid").  Optional.  Defaults to basemap "osm" (OpenStreetMap).  Ignored if portalItemId is set. |
| use3D | Set to "true" to display the map in a 3D SceneView.  Defaults to false. |
| title | The title of the layer that includes VA data.  Optional.  Defaults to the geoId, if available, or to "SAS VA Layer", if not. |
| zIndex | The index of the layer that includes VA data.  Optional.  Use "0" to insert the layer below all others.  Defaults to the top-most level. |
| featuresMax | The maximum number of features allowed in the SAS layer.  Optional.  If set, the user will receive a warning when the data's row count exceeds this number, and the SAS layer will be cleared. |
| period | Defines the interval used to subdivide the animation date.  Valid values are units of time accepted by [Moment](http://momentjs.com/) (e.g., "millisecond", "day", "month", "year").  Defaults to "year". |
| useSmartLegends | Set to "true" to use Esri's "smart mapping" legends for color and size (where appropriate).  Defaults to false.  This feature is experimental. |
| useSampleData | Set to "true" to load data from SampleData.json instead of VA.  Useful for testing.  Optional. |

### Example URLs (using sample data)

A simple scatter plot layer:

http://&lt;server&gt;/ArcGisWebMapProvider/?visualizationType=scatter&useSampleData=true

A simple bubble plot layer:

http://&lt;server&gt;/ArcGisWebMapProvider/?visualizationType=bubble&x=Longitude&y=Latitude&color=Life%20expectancy%20at%20birth,%20total%20(years)&size=GDP%20(current%20US$)&useSampleData=true

A choropleth drawing countries and joining on "NAME":

http://&lt;server&gt;/ArcGisWebMapProvider/?visualizationType=choropleth&geoId=Geographic%20Item%201&color=GDP%20(current%20US$)&featureServiceUrl=https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/World_borders/FeatureServer&featureServiceGeoId=NAME&useSampleData=true

An "animated" scatter plot:

http://&lt;server&gt;/ArcGisWebMapProvider/?useSampleData=true&animation=Date

Other examples appear in the file `examples.html`.

### Some useful Esri feature layers

* [World borders](https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/World_borders/FeatureServer)
* [US states](https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/Cartographic_Boundary_Files_-_States_%28500k%29/FeatureServer)

## Data-driven visualizations

Information about using data-driven visualizations in SAS Visual Analytics is found both at the repository supporting general [third-party visualizations](https://github.com/sassoftware/sas-visualanalytics-thirdpartyvisualizations/blob/master/README.md) and at the post [Programming Considerations for Data-Driven Visualizations](http://go.documentation.sas.com/?cdcId=vacdc&cdcVersion=8.2&docsetId=varef&docsetTarget=n109mqtyl6quiun1mwfgtcn2s68b.htm).

At a high level, data-driven visualizations are HTML pages listening to the window's "message" event for data having a format similar to the following:

```
{
    data: {
        columns: [
            {name: "carColumnName", label: "car", type: "string"},
            {name: "priceColumnName", label: "price", type: "number"}
        ],
        data: [
            ["Ford", 1000],
            ["Toyota", 2000],
            ["BMW", 1500]
        ],
        resultName: "sasVAResultName",
        rowCount: 3
    }
}
```

See [SampleData.json](src/sas/ArcGISWebMapProvider/SampleData.json) for a more complete example.

## Further information

Use of Esri's ArcGIS SDK is subject to their [licensing requirements](https://developers.arcgis.com/arcgis-runtime/licensing).

### Notes from Esri's jsapi-resources projects

Please refer to  Esri's (dojo-based) [sample project](https://github.com/Esri/jsapi-resources) for information regarding [Webpack](https://webpack.js.org), the [arcgis-js-api](https://github.com/Esri/arcgis-js-api), and the [@arcgis/webpack-plugin](https://github.com/Esri/arcgis-webpack-plugin).
