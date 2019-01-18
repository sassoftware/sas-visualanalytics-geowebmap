import FeatureLayer from "esri/layers/FeatureLayer";
import ScatterLayerBuilder from "sas/ArcGISWebMapProvider/layerBuilder/ScatterLayerBuilder";

const { suite, test } = intern.getInterface("tdd");
const { assert } = intern.getPlugin("chai");

suite("ScatterLayerBuilder", () => {

    test("validateOptions", () => {
        
        const options = {
            x: null,
            y: null
        } as any;

        assert.notEqual(undefined, new ScatterLayerBuilder(options, null, null).validateOptions());

        options.x = "someValue";

        assert.notEqual(undefined, new ScatterLayerBuilder(options, null, null).validateOptions());

        options.y = "someValue";

        assert.equal(undefined, new ScatterLayerBuilder(options, null, null).validateOptions());

    });

    // This test provided to illustrate how to write tests to validate the returned feature layer.
    // Note that the ScatterLayerBuilder.buildFeatureLayerImpl() is actually synchronous, and 
    // so the bubble builder could be tested synchronously, although that is not done here.    
    test("samplePromiseResolution", () => {

        const options = {
            x: "someValue",
            y: "someOtherValue"
        } as any;

        return new ScatterLayerBuilder(options, [], []).buildFeatureLayer().then((layer:FeatureLayer) => {
            assert.ok(layer);
        });

    });

});
