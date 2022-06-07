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

    protected static getOptions(): any {
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
            // name: "geowebmapOptions",
            version: 1,
            urlOption: true,
            label: R("vaoptions_label"),
            groups: [
                {
                    // name: "webmapSettings",
                    label: R("vaoptions_webmap_label"),
                    fields: [
                        {
                            name: "portalItemId",
                            label: R("vaoptions_portalItemId_label"),
                            tooltip: R("vaoptions_portalItemId_help"),
                            type: "String",
                        }, {
                            name: "basemap",
                            label: R("vaoptions_basemap_label"),
                            tooltip: R("vaoptions_basemap_help"),
                            value: " ",
                            dataProvider: [
                                { key: "topo", text: R("vaoptions_basemap_topo") },
                                { key: "streets", text: R("vaoptions_basemap_streets") },
                                { key: "satellite", text: R("vaoptions_basemap_satellite") },
                                { key: "hybrid", text: R("vaoptions_basemap_hybrid") },
                                { key: "dark-gray", text: R("vaoptions_basemap_dark_gray") },
                                { key: "gray", text: R("vaoptions_basemap_gray") },
                                { key: "national-geographic", text: R("vaoptions_basemap_national_geographic") },
                                { key: "oceans", text: R("vaoptions_basemap_oceans") },
                                { key: " ", text: R("vaoptions_basemap_osm") }, // "osm" or, since it's the default, " ".  An empty string is not accepted by the form control.
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
                            tooltip: R("vaoptions_use3D_help"),
                            type: "Boolean",
                        },
                        // {
                        //     name: "portalToken",
                        //     label: R("vaoptions_portalToken_label"),
                        //     tooltip: R("vaoptions_portalToken_help"),
                        //     type: "String",
                        // },
                        {
                            name: "portalUrl",
                            label: R("vaoptions_portalUrl_label"),
                            tooltip: R("vaoptions_portalUrl_help"),
                            placeholder: R("vaoptions_portalUrl_placeholder"),
                            type: "String",
                        },
                    ]
                },
                {
                    // name: "sasLayer",
                    label: R("vaoptions_vaLayer_label"),
                    fields: [
                        {
                            name: "title",
                            label: R("vaoptions_title_label"),
                            tooltip: R("vaoptions_title_help"),
                            type: "String",
                            placeholder: R("vaoptions_title_placeholder"),
                        },
                        {
                            name: "visualizationType",
                            label: R("vaoptions_visualizationType_label"),
                            tooltip: R("vaoptions_visualizationType_help"),
                            value: ProviderUtil.VISUALIZATION_TYPE_NONE,
                            dataProvider: [
                                { key: ProviderUtil.VISUALIZATION_TYPE_NONE, text: R("vaoptions_visualizationType_none") },
                                { key: "scatter", text: R("vaoptions_visualizationType_scatter") },
                                { key: "bubble", text: R("vaoptions_visualizationType_bubble") },
                                { key: "choropleth", text: R("vaoptions_visualizationType_choropleth") },
                                { key: "filtered", text: R("vaoptions_visualizationType_filtered") }
                            ]
                        },
                        {
                            name: "x",
                            label: R("vaoptions_x_label"),
                            tooltip: R("vaoptions_x_help"),
                            type: "String",
                            placeholder: R("vaoptions_x_placeholder"),
                        },
                        {
                            name: "y",
                            label: R("vaoptions_y_label"),
                            tooltip: R("vaoptions_y_help"),
                            type: "String",
                            placeholder: R("vaoptions_y_placeholder"),
                        },
                        {
                            name: "size",
                            label: R("vaoptions_size_label"),
                            tooltip: R("vaoptions_size_help"),
                            type: "String",
                            placeholder: R("vaoptions_size_placeholder"),
                        },
                        {
                            name: "color",
                            label: R("vaoptions_color_label"),
                            tooltip: R("vaoptions_color_help"),
                            type: "String",
                            placeholder: R("vaoptions_color_placeholder"),
                        },
                        {
                            name: "geoId",
                            label: R("vaoptions_geoId_label"),
                            tooltip: R("vaoptions_geoId_help"),
                            placeholder: R("vaoptions_geoId_placeholder"),
                            type: "String",
                        },
                        {
                            name: "featureServiceUrl",
                            label: R("vaoptions_featureServiceUrl_label"),
                            tooltip: R("vaoptions_featureServiceUrl_help"),
                            placeholder: R("vaoptions_featureServiceUrl_placeholder"),
                            type: "String",
                        },
                        {
                            name: "featureServiceGeoId",
                            label: R("vaoptions_featureServiceGeoId_label"),
                            tooltip: R("vaoptions_featureServiceGeoId_help"),
                            placeholder: R("vaoptions_featureServiceGeoId_placeholder"),
                            type: "String",
                        },
                        {
                            name: "featureServiceWhere",
                            label: R("vaoptions_featureServiceWhere_label"),
                            tooltip: R("vaoptions_featureServiceWhere_help"),
                            type: "String",
                        },
                        {
                            name: "featureServiceMaxAllowableOffset",
                            label: R("vaoptions_featureServiceMaxAllowableOffset_label"),
                            tooltip: R("vaoptions_featureServiceMaxAllowableOffset_help"),
                            type: "Number",
                        },
                        {
                            name: "animation",
                            label: R("vaoptions_animation_label"),
                            tooltip: R("vaoptions_animation_help"),
                            type: "String",
                        },
                        {
                            name: "period",
                            label: R("vaoptions_period_label"),
                            tooltip: R("vaoptions_period_help"),
                            placeholder: R("vaoptions_period_placeholder"),
                            type: "String",
                        },
                        {
                            name: "colorMin",
                            label: R("vaoptions_colorMin_label"),
                            tooltip: R("vaoptions_colorMin_help"),
                            placeholder: R("vaoptions_colorMin_placeholder"),
                            type: "String",
                        },
                        {
                            name: "colorMax",
                            label: R("vaoptions_colorMax_label"),
                            tooltip: R("vaoptions_colorMax_help"),
                            placeholder: R("vaoptions_colorMax_placeholder"),
                            type: "String",
                        },
                        {
                            name: "outline",
                            label: R("vaoptions_outline_label"),
                            tooltip: R("vaoptions_outline_help"),
                            placeholder: R("vaoptions_outline_placeholder"),
                            type: "String",
                        },
                        {
                            name: "zIndex",
                            label: R("vaoptions_zIndex_label"),
                            tooltip: R("vaoptions_zIndex_help"),
                            type: "Integer",
                            placeholder: R("vaoptions_zIndex_placeholder"),
                            constraints: { min: 0 }
                        },
                        {
                            name: "filterToFeatureServiceGeoId",
                            label: R("vaoptions_filterToFeatureServiceGeoId_label"),
                            tooltip: R("vaoptions_filterToFeatureServiceGeoId_help"),
                            type: "Boolean"
                        },
                    ],
                },
            ]
        };
    }
}

export default VAOptions;
