(function(){var e={"esri/views/2d/layers/GraphicsLayerView2D":1354,"esri/views/layers/support/ClipArea":1389,"esri/views/2d/layers/LayerView2D":1391,"esri/views/layers/support/ClipRect":1392,"esri/views/layers/support/Geometry":1393,"esri/views/layers/support/Path":1394},t=this||window,i=t.webpackJsonp=t.webpackJsonp||[];i.registerAbsMids?i.registerAbsMids(e):(i.absMidsWaiting=i.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{1354:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(0),i(91),i(23),i(4),i(1),i(1391),i(1488),i(678)],void 0===(n=function(e,t,i,r,n,o,p,s,a,u){var c={remove:function(){},pause:function(){},resume:function(){}};return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i.__extends(t,e),t.prototype.initialize=function(){var e=this;this.graphicsView=new a.default({requestUpdateCallback:function(){return e.requestUpdate()},view:this.view,graphics:this.layer.graphics})},t.prototype.attach=function(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")},t.prototype.detach=function(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d")},t.prototype.hitTest=function(e,t){return this.suspended||!this.graphicsView?o.resolve(null):this.graphicsView.hitTest(e,t)},t.prototype.fetchPopupFeatures=function(e){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(t){return this.graphicsView?[2,this.graphicsView.searchFeatures(e).then((function(e){return e.filter((function(e){return!!e.popupTemplate}))}))]:[2,void 0]}))}))},t.prototype.update=function(e){this.graphicsView.processUpdate(e)},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){this.graphicsView.viewChange()},t.prototype.moveEnd=function(){},t.prototype.isUpdating=function(){return!this.graphicsView||this.graphicsView.updating},t.prototype.highlight=function(e){var t,i=this;return"number"==typeof e?t=[e]:e instanceof r?t=[e.uid]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]?e:e.map((function(e){return e&&e.uid})):n.isCollection(e)&&(t=e.map((function(e){return e&&e.uid})).toArray()),(t=t.filter((function(e){return null!=e}))).length?(this.graphicsView.addHighlight(t),{remove:function(){return i.graphicsView.removeHighlight(t)},pause:function(){},resume:function(){}}):c},t.prototype.queryGraphics=function(){return o.resolve(this.graphicsView.graphics)},i.__decorate([p.property()],t.prototype,"graphicsView",void 0),i.__decorate([p.property({dependsOn:["graphicsView.updating"]})],t.prototype,"updating",void 0),i.__decorate([p.subclass("esri.views.2d.layers.GraphicsLayerView2D")],t)}(s.LayerView2DMixin(u))}.apply(null,r))||(e.exports=n)},1389:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(0),i(7),i(1)],void 0===(n=function(e,t,i,r,n){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i.__extends(t,e),i.__decorate([n.subclass("esri.views.layers.support.ClipArea")],t)}(r.JSONSupport)}.apply(null,r))||(e.exports=n)},1391:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(0),i(23),i(143),i(13),i(1),i(675),i(1389),i(1392),i(1393),i(1394)],void 0===(n=function(e,t,i,r,n,o,p,s,a,u,c,d){Object.defineProperty(t,"__esModule",{value:!0});var l=r.ofType({key:"type",base:a,typeMap:{rect:u,path:d,geometry:c}});t.LayerView2DMixin=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.clips=new l,t.moving=!1,t.attached=!1,t.lastUpdateId=-1,t.updateRequested=!1,t}return i.__extends(t,e),t.prototype.initialize=function(){var e,t=this;this.container||(this.container=new s.Container),this.handles.add([o.init(this,"suspended",(function(e){t.container&&(t.container.visible=!e),t.view&&!e&&t.updateRequested&&t.view.requestUpdate()}),!0),o.init(this,["layer.opacity","container"],(function(){var e,i;t.container&&(t.container.opacity=null!==(i=null===(e=t.layer)||void 0===e?void 0:e.opacity)&&void 0!==i?i:1)}),!0),o.init(this,["layer.blendMode"],(function(e){t.container&&(t.container.blendMode=e)}),!0),this.clips.on("change",(function(){t.container.clips=t.clips,t.notifyChange("clips")}))]),this.container.clips=this.clips,(null===(e=this.view)||void 0===e?void 0:e.whenLayerView)?this.view.whenLayerView(this.layer).then((function(e){e!==t||t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){})):this.when().then((function(){t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){}))},t.prototype.destroy=function(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1,this.layer=null,this.view=null},Object.defineProperty(t.prototype,"updating",{get:function(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0}),t.prototype.isVisibleAtScale=function(e){var t=!0,i=this.layer,r=i.minScale,n=i.maxScale;if(null!=r&&null!=n){var o=!r,p=!n;!o&&e<=r&&(o=!0),!p&&e>=n&&(p=!0),t=o&&p}return t},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())},t.prototype.processUpdate=function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1},t.prototype.isUpdating=function(){return!1},t.prototype.isRendering=function(){return!1},t.prototype.canResume=function(){return!!e.prototype.canResume.call(this)&&this.isVisibleAtScale(this.view.scale)},i.__decorate([p.property({type:l,set:function(e){var t=n.referenceSetter(e,this._get("clips"),l);this._set("clips",t)}})],t.prototype,"clips",void 0),i.__decorate([p.property()],t.prototype,"moving",void 0),i.__decorate([p.property()],t.prototype,"attached",void 0),i.__decorate([p.property()],t.prototype,"container",void 0),i.__decorate([p.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),i.__decorate([p.property({readOnly:!0})],t.prototype,"updateParameters",void 0),i.__decorate([p.property()],t.prototype,"updateRequested",void 0),i.__decorate([p.property({dependsOn:["attached","updateRequested","suspended"]})],t.prototype,"updating",null),i.__decorate([p.property()],t.prototype,"view",void 0),i.__decorate([p.subclass("esri.views.2d.layers.LayerView2D")],t)}(e)}}.apply(null,r))||(e.exports=n)},1392:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(0),i(1),i(1389)],void 0===(n=function(e,t,i,r,n){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="rect",t.left=null,t.right=null,t.top=null,t.bottom=null,t}var n;return i.__extends(t,e),n=t,t.prototype.clone=function(){return new n({left:this.left,right:this.right,top:this.top,bottom:this.bottom})},Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),i.__decorate([r.property({type:[Number,String],json:{write:!0}})],t.prototype,"left",void 0),i.__decorate([r.property({type:[Number,String],json:{write:!0}})],t.prototype,"right",void 0),i.__decorate([r.property({type:[Number,String],json:{write:!0}})],t.prototype,"top",void 0),i.__decorate([r.property({type:[Number,String],json:{write:!0}})],t.prototype,"bottom",void 0),i.__decorate([r.property({readOnly:!0,dependsOn:["left","right","top","bottom"]})],t.prototype,"version",null),n=i.__decorate([r.subclass("esri.views.layers.support.ClipRect")],t)}(n)}.apply(null,r))||(e.exports=n)},1393:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(0),i(28),i(1),i(126),i(29),i(1389)],void 0===(n=function(e,t,i,r,n,o,p,s){var a={base:o,key:"type",typeMap:{extent:r.Extent,polygon:r.Polygon}};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="geometry",t.geometry=null,t}var r;return i.__extends(t,e),r=t,Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new r({geometry:this.geometry.clone()})},i.__decorate([n.property({types:a,json:{read:p.fromJSON,write:!0}})],t.prototype,"geometry",void 0),i.__decorate([n.property({readOnly:!0,dependsOn:["geometry"]})],t.prototype,"version",null),r=i.__decorate([n.subclass("esri.views.layers.support.Geometry")],t)}(s)}.apply(null,r))||(e.exports=n)},1394:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(0),i(1),i(1389)],void 0===(n=function(e,t,i,r,n){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="path",t.path=[],t}return i.__extends(t,e),Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),i.__decorate([r.property({type:[[[Number]]],json:{write:!0}})],t.prototype,"path",void 0),i.__decorate([r.property({readOnly:!0,dependsOn:["path"]})],t.prototype,"version",null),i.__decorate([r.subclass("esri.views.layers.support.Path")],t)}(n)}.apply(null,r))||(e.exports=n)}}]);