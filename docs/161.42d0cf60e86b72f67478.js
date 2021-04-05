(function(){var e={"esri/views/3d/layers/ImageryTileLayerView3D":1380},r=this||window,t=r.webpackJsonp=r.webpackJsonp||[];t.registerAbsMids?t.registerAbsMids(e):(t.absMidsWaiting=t.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{1380:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(0),t(2),t(13),t(1),t(680),t(712),t(482),t(1767),t(678),t(679),t(1418)],void 0===(n=function(e,r,t,i,n,a,o,s,l,d,p,u,y){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.isAlignedMapTile=!0,r}return t.__extends(r,e),r.prototype.initialize=function(){var e=this;this.layer.increaseRasterJobHandlerUsage();var r=this.updateFullExtent();this.addResolvingPromise(r);var t=n.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeLocked").then((function(){var r=e.view.basemapTerrain.tilingScheme,t=e.layer.tileInfo,i=["png","png24","png32","jpg","mixed"].indexOf(t.format)>-1&&r.compatibleWith(t);e.isAlignedMapTile=i;var n=i?t:r.toTileInfo();e._set("tileInfo",n),e.updatingHandles.add(e,"layer.renderer",(function(){return e.refresh()})),e.updatingHandles.add(e,"layer.interpolation",(function(){return e.refresh()})),e.updatingHandles.add(e,"layer.bandIds",(function(){return e.refresh()})),e.updatingHandles.add(e,"layer.multidimensionalDefinition",(function(){return e.refresh()}))}));this.addResolvingPromise(t)},r.prototype.destroy=function(){this.layer.decreaseRasterJobHandlerUsage(),this.view=null},Object.defineProperty(r.prototype,"_blankTile",{get:function(){var e=document.createElement("canvas"),r=e.getContext("2d"),t=this.tileInfo.size,i=t[0],n=t[1];return e.width=i,e.height=n,r.clearRect(0,0,i,n),r.getImageData(0,0,i,n)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageFormatIsOpaque",{get:function(){return"jpg"===this.layer.tileInfo.format},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"hasMixedImageFormats",{get:function(){return"mixed"===this.layer.tileInfo.format},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"dataLevelRange",{get:function(){var e=this.tileInfo.lods,r=this.layer.tileInfo.lods,t=e[0].scale,i=r[r.length-1].scale;return this.levelRangeFromScaleRange(t,i)},enumerable:!0,configurable:!0}),r.prototype.fetchTile=function(e,r,n,a){return t.__awaiter(this,void 0,void 0,(function(){var o,s,d,p,u,y;return t.__generator(this,(function(t){switch(t.label){case 0:return o=this.tileInfo,s=this.layer.symbolizer.canRenderInWebGL,d={tileInfo:o,requestRawData:s,signal:i.unwrap(a.signal),requestAsImageElement:this.isAlignedMapTile},[4,this.layer.fetchTile(e,r,n,d)];case 1:return(p=t.sent())instanceof HTMLImageElement?[2,p]:(u=p&&p.pixelBlock)?s?[3,3]:[4,this.layer.applyRenderer(p)]:[2,this._blankTile];case 2:if(null==(u=t.sent()))return[2,this._blankTile];t.label=3;case 3:return y=new l.default([e,r,n],u,o.size[0],o.size[1]),s&&(y.symbolizerRenderer=this.layer.symbolizer.renderer,y.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(e)),y.transformGrid=p.transformGrid),y.bandIds=this.layer.bandIds,[2,y]}}))}))},r.prototype._getSymbolizerOptions=function(e){var r=this.tileInfo.lodAt(e).resolution;return{pixelBlock:null,isGCS:this.view.spatialReference.isGeographic,resolution:{x:r,y:r},bandIds:this.layer.bandIds}},r.prototype.ensureSymbolizerParameters=function(e){e.symbolizerRenderer!==this.layer.symbolizer.renderer&&(e.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(e.lij[0])))},r.prototype.createFetchPopupFeaturesQueryGeometry=function(e,r){return y.createQueryGeometry(e,r,this.view)},r.prototype.refresh=function(){this.emit("data-changed")},r.prototype.doRefresh=function(e){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(e){return this.suspended||this.emit("data-changed"),[2]}))}))},t.__decorate([a.property({readOnly:!0,dependsOn:["tileInfo"]})],r.prototype,"_blankTile",null),t.__decorate([a.property({readOnly:!0,dependsOn:["layer.tileInfo.format"]})],r.prototype,"imageFormatIsOpaque",null),t.__decorate([a.property({readOnly:!0,dependsOn:["layer.tileInfo.format"]})],r.prototype,"hasMixedImageFormats",null),t.__decorate([a.property()],r.prototype,"layer",void 0),t.__decorate([a.property({readOnly:!0,dependsOn:["tileInfo","view.basemapTerrain.tilingScheme","layer.url"]})],r.prototype,"dataLevelRange",null),t.__decorate([a.subclass("esri.views.3d.layers.ImageryTileLayerView3D")],r)}(d.ImageryTileLayerView(u.RefreshableLayerView(s.TiledLayerView3D(o.LayerView3D(p)))))}.apply(null,i))||(e.exports=n)}}]);