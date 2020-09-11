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

import FeatureLayer from "esri/layers/FeatureLayer";
import ScatterLayerBuilder from "sas/ArcGISWebMapProvider/layerBuilder/ScatterLayerBuilder";
import TestUtil from "sas/TestUtil";

const { suite, test } = intern.getInterface("tdd");
const { assert } = intern.getPlugin("chai");

suite("ScatterLayerBuilder", () => {

    test("validateOptions", () => {

        TestUtil.InitializeI18NOnce().then(() => {

            const options = {
                x: null,
                y: null
            } as any;

            assert.notEqual(0, new ScatterLayerBuilder(options, null, null).validateOptions().length);

            options.x = "someValue";

            assert.notEqual(0, new ScatterLayerBuilder(options, null, null).validateOptions().length);

            options.y = "someValue";

            assert.equal(0, new ScatterLayerBuilder(options, null, null).validateOptions().length);

        });

    });

    // This test provided to illustrate how to write tests to validate the returned feature layer.
    // Note that the ScatterLayerBuilder.buildFeatureLayerImpl() is actually synchronous, and 
    // so the bubble builder could be tested synchronously, although that is not done here.    
    test("samplePromiseResolution", () => {

        const options = {
            x: "someValue",
            y: "someOtherValue"
        } as any;

        return new ScatterLayerBuilder(options, [], []).buildFeatureLayer().then((layer: FeatureLayer) => {
            assert.ok(layer);
        });

    });

});
