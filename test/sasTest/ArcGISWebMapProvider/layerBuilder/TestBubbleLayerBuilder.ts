import FeatureLayer from "esri/layers/FeatureLayer";
import BubbleLayerBuilder from "sas/ArcGISWebMapProvider/layerBuilder/BubbleLayerBuilder";

const { suite, test } = intern.getInterface("tdd");
const { assert } = intern.getPlugin("chai");

suite("BubbleLayerBuilder", () => {

    test("validateOptions", () => {
        
        const options = {
            x: null,
            y: null,
            size: null
        } as any;

        assert.notEqual(undefined, new BubbleLayerBuilder(options, null, null).validateOptions());

        options.x = "someValue";

        assert.notEqual(undefined, new BubbleLayerBuilder(options, null, null).validateOptions());

        options.y = "someValue";

        assert.notEqual(undefined, new BubbleLayerBuilder(options, null, null).validateOptions());

        options.size = "someValue";

        assert.equal(undefined, new BubbleLayerBuilder(options, null, null).validateOptions());
    });

    // This test provided to illustrate how to write tests to validate the returned feature layer.
    // Note that the BubbleLayerBuilder.buildFeatureLayerImpl() is actually synchronous, and 
    // so the bubble builder could be tested synchronously, although that is not done here.    
    test("samplePromiseResolution", () => {

        const options = {
            x: "someValue",
            y: "someOtherValue"
        } as any;

        return new BubbleLayerBuilder(options, [], []).buildFeatureLayer().then((layer:FeatureLayer) => {
            assert.ok(layer);
        });

    });

});
