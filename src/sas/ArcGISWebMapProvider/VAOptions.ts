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

import ProviderUtil from "sas/ArcGISWebMapProvider/ProviderUtil";

class VAOptions {

    static postOptions(resultName: string) {
        ProviderUtil.publishMessage({
            resultName,
            optionsConfig: VAOptions.getOptions()
        });
    }

    private static _options: any = null;

    private static getOptions(): any {
        if (!VAOptions._options) {
            VAOptions._options = VAOptions.buildOptions();
        }
        return VAOptions._options;
    }

    private static buildOptions(): any {

        const R = (resourceId: string): string => {
            return ProviderUtil.getResource(resourceId);
        };

        return {
            name: "geowebmapOptions",
            label: R("vaoptions_label"),
            fields: [
                {
                    name: "portalItemId",
                    label: R("vaoptions_portalItemId_label"),
                    help: R("vaoptions_portalItemId_help"),
                    type: "String",
                },
                {
                    name: "visualizationType",
                    label: R("vaoptions_visualizationType_label"),
                    help: R("vaoptions_visualizationType_help"),
                    // type: "String",
                    value: "scatter",
                    dataProvider: [
                        // { key: "", text: R("vaoptions_visualizationType_default") },
                        { key: "scatter", text: R("vaoptions_visualizationType_scatter") },
                        { key: "bubble", text: R("vaoptions_visualizationType_bubble") },
                        { key: "choropleth", text: R("vaoptions_visualizationType_choropleth") },
                        { key: "filtered", text: R("vaoptions_visualizationType_filtered") }
                    ]
                },
                {
                    name: "title",
                    label: R("vaoptions_title_label"),
                    help: R("vaoptions_title_help"),
                    type: "String",
                },
                {
                    name: "zIndex",
                    label: R("vaoptions_zIndex_label"),
                    help: R("vaoptions_zIndex_help"),
                    type: "Integer",
                },
                {
                    name: "x",
                    label: R("vaoptions_x_label"),
                    help: R("vaoptions_x_help"),
                    type: "String",
                },
                {
                    name: "y",
                    label: R("vaoptions_y_label"),
                    help: R("vaoptions_y_help"),
                    type: "String",
                },
                {
                    name: "size",
                    label: R("vaoptions_size_label"),
                    help: R("vaoptions_size_help"),
                    type: "String",
                },
                {
                    name: "color",
                    label: R("vaoptions_color_label"),
                    help: R("vaoptions_color_help"),
                    type: "String",
                },
                {
                    name: "animation",
                    label: R("vaoptions_animation_label"),
                    help: R("vaoptions_animation_help"),
                    type: "String",
                },
                {
                    name: "period",
                    label: R("vaoptions_period_label"),
                    help: R("vaoptions_period_help"),
                    type: "String",
                },
                {
                    name: "geoId",
                    label: R("vaoptions_geoId_label"),
                    help: R("vaoptions_geoId_help"),
                    type: "String",
                },
                {
                    name: "featureServiceUrl",
                    label: R("vaoptions_featureServiceUrl_label"),
                    help: R("vaoptions_featureServiceUrl_help"),
                    type: "String",
                },
                {
                    name: "featureServiceGeoId",
                    label: R("vaoptions_featureServiceGeoId_label"),
                    help: R("vaoptions_featureServiceGeoId_help"),
                    type: "String",
                },
                {
                    name: "featureServiceWhere",
                    label: R("vaoptions_featureServiceWhere_label"),
                    help: R("vaoptions_featureServiceWhere_help"),
                    type: "String",
                },
                {
                    name: "featureServiceMaxAllowableOffset",
                    label: R("vaoptions_featureServiceMaxAllowableOffset_label"),
                    help: R("vaoptions_featureServiceMaxAllowableOffset_help"),
                    type: "Number",
                },
                {
                    name: "colorMin",
                    label: R("vaoptions_colorMin_label"),
                    help: R("vaoptions_colorMin_help"),
                    type: "String",
                },
                {
                    name: "colorMax",
                    label: R("vaoptions_colorMax_label"),
                    help: R("vaoptions_colorMax_help"),
                    type: "String",
                },
                {
                    name: "outline",
                    label: R("vaoptions_outline_label"),
                    help: R("vaoptions_outline_help"),
                    type: "String",
                },
                {
                    name: "basemap",
                    label: R("vaoptions_basemap_label"),
                    help: R("vaoptions_basemap_help"),
                    // type: "String",
                    value: "osm",
                    dataProvider: [
                        // { key: "", text: R("vaoptions_basemap_default") },
                        { key: "topo", text: R("vaoptions_basemap_topo") },
                        { key: "streets", text: R("vaoptions_basemap_streets") },
                        { key: "satellite", text: R("vaoptions_basemap_satellite") },
                        { key: "hybrid", text: R("vaoptions_basemap_hybrid") },
                        { key: "dark-gray", text: R("vaoptions_basemap_dark_gray") },
                        { key: "gray", text: R("vaoptions_basemap_gray") },
                        { key: "national-geographic", text: R("vaoptions_basemap_national_geographic") },
                        { key: "oceans", text: R("vaoptions_basemap_oceans") },
                        { key: "osm", text: R("vaoptions_basemap_osm") },
                        { key: "terrain", text: R("vaoptions_basemap_terrain") },
                        { key: "dark-gray-vector", text: R("vaoptions_basemap_dark_gray_vector") },
                        { key: "gray-vector", text: R("vaoptions_basemap_gray_vector") },
                        { key: "streets-vector", text: R("vaoptions_basemap_streets_vector") },
                        { key: "streets-night-vector", text: R("vaoptions_basemap_streets_night_vector") },
                        { key: "streets-navigation-vector", text: R("vaoptions_basemap_streets_navigation_vector") },
                        { key: "topo-vector", text: R("vaoptions_basemap_topo_vector") },
                        { key: "streets-relief-vector", text: R("vaoptions_basemap_streets_relief_vector") }
                    ]
                },
                {
                    name: "use3D",
                    label: R("vaoptions_use3D_label"),
                    help: R("vaoptions_use3D_help"),
                    type: "Boolean",
                },
                // {
                //     name: "portalToken",
                //     label: R("vaoptions_portalToken_label"),
                //     help: R("vaoptions_portalToken_help"),
                //     type: "String",
                // },
                {
                    name: "portalUrl",
                    label: R("vaoptions_portalUrl_label"),
                    help: R("vaoptions_portalUrl_help"),
                    type: "String",
                },
            ]
        };
    }

}

export default VAOptions;
