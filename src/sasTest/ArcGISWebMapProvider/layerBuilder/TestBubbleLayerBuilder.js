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
    "sas/ArcGISWebMapProvider/layerBuilder/BubbleLayerBuilder",
    "doh/runner"
], function(BubbleLayerBuilder, doh){

    // http://.../util/doh/runner.html?testModule=sasTest/ArcGISWebMapProvider/layerBuilder/TestBubbleLayerBuilder
    
    doh.register("BubbleLayerBuilder.validateOptions", function(t){

        var options = {
            x: null,
            y: null,
            size: null
        };

        t.assertNotEqual(undefined, new BubbleLayerBuilder(options, null, null).validateOptions());

        options.x = "someValue";

        t.assertNotEqual(undefined, new BubbleLayerBuilder(options, null, null).validateOptions());

        options.y = "someValue";

        t.assertNotEqual(undefined, new BubbleLayerBuilder(options, null, null).validateOptions());

        options.size = "someValue";

        t.assertEqual(undefined, new BubbleLayerBuilder(options, null, null).validateOptions());

    });

    // This test provided to illustrate how to write tests to validate the returned feature layer.
    // Note that the BubbleLayerBuilder._buildFeatureLayerImpl() is actually synchronous, and 
    // so the bubble builder could be tested synchronously, although that is not done here.
    doh.register("BubbleLayerBuilder.samplePromiseResolution", function(t){

        var options = {
            x: "someValue",
            y: "someOtherValue"
        };

        var testDeferred = new t.Deferred();

        new BubbleLayerBuilder(options, [], []).buildFeatureLayer().then(function(layer){

            t.assertTrue(layer);
            testDeferred.resolve();

        });

        return testDeferred;

    });

});
