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

define([
    "sas/ArcGISWebMapProvider/layerBuilder/ChoroplethLayerBuilder",
    "dojo/Deferred",
    "doh/runner"
], function(ChoroplethLayerBuilder, Deferred, doh){

    // http://.../util/doh/runner.html?testModule=sasTest/ArcGISWebMapProvider/layerBuilder/TestChoroplethLayerBuilder
    
    doh.register("ChoroplethLayerBuilder.validateOptions", function(t){

        var options = {
            geoId: null,
            featureServiceUrl: null,
            featureServiceGeoId: null
        };

        t.assertNotEqual(undefined, new ChoroplethLayerBuilder(options, null, null).validateOptions());

        options.geoId = "someValue";

        t.assertNotEqual(undefined, new ChoroplethLayerBuilder(options, null, null).validateOptions());

        options.featureServiceUrl = "someValue";

        t.assertNotEqual(undefined, new ChoroplethLayerBuilder(options, null, null).validateOptions());

        options.featureServiceGeoId = "someValue";

        t.assertEqual(undefined, new ChoroplethLayerBuilder(options, null, null).validateOptions());

    });

    // This test provided to illustrate how to write tests to validate the returned feature layer.
    // Note that the ChoroplethLayerBuilder test must be asynchronous.
    doh.register("ChoroplethLayerBuilder.samplePromiseResolution", function(t){

        var options = {
            geoId: "someValue",
            featureServiceUrl: "someOtherValue",
            featureServiceGeoId: "someOtherOtherValue"
        };

        var builder = new ChoroplethLayerBuilder(options, [], []);

        // Establish a mock feature service.
        builder.setQueryServiceLayerOverride({
            createQuery: function() {
                return {};
            },
            queryFeatures: function() {
                var responseReceived = new Deferred();
                responseReceived.resolve({
                    features: [] // Add features manually.
                });
                return responseReceived.promise;
            }
        });

        var testDeferred = new t.Deferred();

        builder.buildFeatureLayer().then(function(layer){

            t.assertTrue(layer);
            testDeferred.resolve();

        });

        return testDeferred;

    });

});
