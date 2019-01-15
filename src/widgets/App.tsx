import esri = __esri;

import {
  aliasOf,
  declared,
  property,
  subclass
} from "esri/core/accessorSupport/decorators";
import { renderable, tsx } from "esri/widgets/support/widget";

// import "esri/layers/graphics/sources/support/MemorySourceWorker";

/* tslint:disable: no-unused-expression */
import __forceLoad = require("esri/layers/graphics/sources/support/MemorySourceWorker"); __forceLoad; // See https://github.com/Esri/arcgis-webpack-plugin/issues/26, 12/19/18.
/* tslint:enable */
import FeatureLayer from "esri/layers/FeatureLayer";
import EsriMap from "esri/Map";
import MapView from "esri/views/MapView";
import SceneView from "esri/views/SceneView";
import View from "esri/views/View";
import Widget from "esri/widgets/Widget";
import ArcGISVisualizationBridge from "sas/ArcGISWebMapProvider/ArcGISVisualizationBridge";
import ProviderUtil from "sas/ArcGISWebMapProvider/ProviderUtil";

import AppViewModel, { AppParams } from "./App/AppViewModel";

interface AppViewParams extends AppParams, esri.WidgetProperties {}

const CSS = {
  base: "main",
  webmap: "webmap",
  webmapAnimated: "webmap-animating",
  animationControls: "animationControls",
  animationControlsAnimated: "animationControls-animating"
};

@subclass("app.widgets.webmapview")
export default class App extends declared(Widget) {
  @property() viewModel = new AppViewModel();

  @aliasOf("viewModel.appName") appName: string;

  @aliasOf("viewModel.featureLayer") featureLayer: FeatureLayer;

  @aliasOf("viewModel.map") map: EsriMap;

  @aliasOf("viewModel.view") view: View;

  @aliasOf("viewModel.visualizationBridge") visualizationBridge: ArcGISVisualizationBridge;

  @aliasOf("viewModel.options") options:any;

  @property()
  @renderable()
  animation:boolean = false;

  constructor(params: Partial<AppViewParams>) {
    super(params);
  }

  render() {

    const dynamicClassesWebmap = {
      [CSS.webmapAnimated]: this.animation
    };
    const dynamicClassesAnimationControls = {
      [CSS.animationControlsAnimated]: this.animation
    }

    return (
      <div class={CSS.base}>
        <div class={this.classes(CSS.webmap, dynamicClassesWebmap)} bind={this} afterCreate={this.onAfterCreate} />
        <footer id="animationControls" class={this.classes(CSS.animationControls, dynamicClassesAnimationControls)}>
          <div id="animationLabel"></div>
          <input id="animationPlayButton" type="button" value=">>"/>
          <input id="animationSlider" type="range" min="0" max="100" step="0.001" value="0" style="width: 100%;"/>
        </footer>
      </div>
    );
  }

  private onAfterCreate(element: HTMLDivElement) {
    import("./../data/app").then(({ options, visualizationBridge, map }) => {

      if (options.animation) {
        this.animation = true;
      }

      this.visualizationBridge = visualizationBridge;
      this.map = map;

      if (options.use3D) {
        this.view = new SceneView({
          map,
          container: element
        });
      }
      else {
        this.view = new MapView({
          map,
          container: element
        });
      }

      this.view.when((view:View)=>{
        visualizationBridge.registerMapView(view);
      }, (error:any)=>{
        ProviderUtil.logError(error);
      });

    });
  }
}
