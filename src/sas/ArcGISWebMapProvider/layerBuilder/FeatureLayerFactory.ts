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

import BaseLayerBuilder from "sas/ArcGISWebMapProvider/layerBuilder/BaseLayerBuilder";
import BubbleLayerBuilder from "sas/ArcGISWebMapProvider/layerBuilder/BubbleLayerBuilder";
import ChoroplethLayerBuilder from "sas/ArcGISWebMapProvider/layerBuilder/ChoroplethLayerBuilder";
import ScatterLayerBuilder from "sas/ArcGISWebMapProvider/layerBuilder/ScatterLayerBuilder";
import ProviderUtil from "sas/ArcGISWebMapProvider/ProviderUtil";

/**
 * Builds a feature layer.
 */
class FeatureLayerFactory {

    static getInstance() {
        if (!FeatureLayerFactory._instance) {
            FeatureLayerFactory._instance = new FeatureLayerFactory();
        }
        return FeatureLayerFactory._instance;
    }

    private static _instance: FeatureLayerFactory;

    private constructor() {}

    createLayerBuilder(options: any, rows: any[], columns: any[]): BaseLayerBuilder {

        switch (options.visualizationType) {
            case ProviderUtil.VISUALIZATION_TYPE_BUBBLE:
                return new BubbleLayerBuilder(options, rows, columns);
            case ProviderUtil.VISUALIZATION_TYPE_CHOROPLETH:
                return new ChoroplethLayerBuilder(options, rows, columns);
            default: 
                return new ScatterLayerBuilder(options, rows, columns);
        }

    }
}
export default FeatureLayerFactory