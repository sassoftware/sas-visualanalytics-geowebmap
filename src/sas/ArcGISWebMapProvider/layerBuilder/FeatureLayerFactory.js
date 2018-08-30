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

/**
 * Builds a feature layer.
 */
define([
    "sas/ArcGISWebMapProvider/ProviderUtil",
    "sas/ArcGISWebMapProvider/layerBuilder/ScatterLayerBuilder",
    "sas/ArcGISWebMapProvider/layerBuilder/BubbleLayerBuilder",
    "sas/ArcGISWebMapProvider/layerBuilder/ChoroplethLayerBuilder",
    "dojo/_base/declare"
], function(ProviderUtil, ScatterLayerBuilder, BubbleLayerBuilder, ChoroplethLayerBuilder, declare){

    var _util = new ProviderUtil();

    var factorySingleton = declare(null, {

        createLayerBuilder: function (options, rows, columns) {
            if (options.visualizationType === _util.getBubbleValue())
                return new BubbleLayerBuilder(options, rows, columns);
            else if (options.visualizationType === _util.getChoroplethValue())
                return new ChoroplethLayerBuilder(options, rows, columns);
            else // (options.visualizationType === _util.getScatterValue())
                return new ScatterLayerBuilder(options, rows, columns);
        }
        
    });

    return factorySingleton;

});
