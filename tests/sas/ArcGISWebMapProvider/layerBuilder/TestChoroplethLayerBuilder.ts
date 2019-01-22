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

/// <amd-dependency path="dojo/Deferred" name="Deferred" />
declare const Deferred:any;

import FeatureLayer from "esri/layers/FeatureLayer";
import ChoroplethLayerBuilder from "sas/ArcGISWebMapProvider/layerBuilder/ChoroplethLayerBuilder";

const { suite, test } = intern.getInterface("tdd");
const { assert } = intern.getPlugin("chai");

suite("ChoroplethLayerBuilder", () => {

    test("validateOptions", () => {
        
        const options = {
            geoId: null,
            featureServiceUrl: null,
            featureServiceGeoId: null
        } as any;

        assert.notEqual(undefined, new ChoroplethLayerBuilder(options, null, null).validateOptions());

        options.geoId = "someValue";

        assert.notEqual(undefined, new ChoroplethLayerBuilder(options, null, null).validateOptions());

        options.featureServiceUrl = "someValue";

        assert.notEqual(undefined, new ChoroplethLayerBuilder(options, null, null).validateOptions());

        options.featureServiceGeoId = "someValue";

        assert.equal(undefined, new ChoroplethLayerBuilder(options, null, null).validateOptions());

    });

    // This test provided to illustrate how to write tests to validate the returned feature layer.
    // Note that the ChoroplethLayerBuilder test must be asynchronous.
    test("samplePromiseResolution", () => {

  
        const options = {
            geoId: "someValue",
            featureServiceUrl: "someOtherValue",
            featureServiceGeoId: "someOtherOtherValue"
        } as any;

        const builder = new ChoroplethLayerBuilder(options, [], []);

        // Establish a mock feature service.
        builder.setQueryServiceLayerOverride({
            createQuery() {
                return {};
            },
            queryFeatures() {
                const responseReceived = new Deferred();
                responseReceived.resolve({
                    features: [] // Add features manually.
                });
                return responseReceived.promise;
            }
        });

        return builder.buildFeatureLayer().then((layer:FeatureLayer) => {
            assert.ok(layer);
        });

    });

});
