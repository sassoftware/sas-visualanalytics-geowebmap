import classnames from "classnames";
import GeowebmapMounter from "GeowebmapMounter";
import ProviderUtil from "sas/ArcGISWebMapProvider/ProviderUtil";
import "Geowebmap.css";
import { useRef, useEffect, useState } from "react";

function Geowebmap() {

    const CSS = {
        base: "main",
        webmap: "webmap",
        webmapAnimated: "webmap-animating",
        animationControls: "animationControls",
        animationControlsAnimated: "animationControls-animating"
    };

    const [options] = useState(GeowebmapMounter.getOptionsFromUrl());

    const mapDiv = useRef(null);

    useEffect(() => {
        if (mapDiv.current) {
            const component: GeowebmapMounter = new GeowebmapMounter(options);
            ProviderUtil.logInfo("Mounting geowebmap.");
            component.mount(mapDiv.current);
        }
    }, [options]);

    const dynamicClassesWebmap = {
        [CSS.webmapAnimated]: options.animation
    };
    const dynamicClassesAnimationControls = {
        [CSS.animationControlsAnimated]: options.animation
    };

    return <div className={CSS.base}>
        <div ref={mapDiv} className={classnames(CSS.webmap, dynamicClassesWebmap)} />
        <footer id="animationControls" className={classnames(CSS.animationControls, dynamicClassesAnimationControls)}>
            <div id="animationLabel"></div>
            <input id="animationPlayButton" type="button" value=">>" readOnly />
            <input id="animationSlider" type="range" min="0" max="100" step="0.001" defaultValue="0" style={{ width: "100%" }} />
        </footer>
    </div>;

}

export default Geowebmap;
