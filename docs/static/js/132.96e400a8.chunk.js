(this.webpackJsonpgeowebmap=this.webpackJsonpgeowebmap||[]).push([[132],{1150:function(e,t,i){"use strict";i.d(t,"a",(function(){return y}));var n=i(3),a=i(4),r=i(6),s=i(7),l=i(0),o=i(185),u=i(1),c=(i(17),i(18),i(16),i(9)),h=function(e){Object(r.a)(i,e);var t=Object(s.a)(i);function i(e){var a;return Object(n.a)(this,i),(a=t.call(this,e)).tiles=new Map,a}return Object(a.a)(i,[{key:"destroy",value:function(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null}},{key:"updating",get:function(){return this.isUpdating()}},{key:"acquireTile",value:function(e){var t=this,i=this.createTile(e);return i.once("isReady",(function(){return t.notifyChange("updating")})),this.tiles.set(e.id,i),i}},{key:"forceAttributeTextureUpload",value:function(){}},{key:"forEachTile",value:function(e){this.tiles.forEach(e)}},{key:"releaseTile",value:function(e){this.tiles.delete(e.key.id),this.disposeTile(e)}},{key:"isUpdating",value:function(){var e=!0;return this.tiles.forEach((function(t){e=e&&t.isReady})),!e}},{key:"setHighlight",value:function(){}},{key:"invalidateLabels",value:function(){}},{key:"requestUpdate",value:function(){this.layerView.requestUpdate()}}]),i}(o.a);Object(l.a)([Object(u.b)()],h.prototype,"layer",void 0),Object(l.a)([Object(u.b)()],h.prototype,"layerView",void 0),Object(l.a)([Object(u.b)()],h.prototype,"tileInfoView",void 0),Object(l.a)([Object(u.b)()],h.prototype,"updating",null);var y=h=Object(l.a)([Object(c.a)("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],h)},1385:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return d}));var n=i(3),a=i(4),r=i(6),s=i(7),l=i(0),o=(i(1),i(17),i(18),i(16),i(9)),u=i(665),c=i(1163),h=i(1150),y=function(){function e(){Object(n.a)(this,e),this.gradient=null,this.height=512,this.width=512}return Object(a.a)(e,[{key:"render",value:function(e){Object(u.d)(e,512,this.intensities,this.gradient,this.minPixelIntensity,this.maxPixelIntensity)}}]),e}(),f=function(e){Object(r.a)(i,e);var t=Object(s.a)(i);function i(e){var a;return Object(n.a)(this,i),(a=t.call(this,e))._intensityInfo={minPixelIntensity:0,maxPixelIntensity:0},a.featuresView={attributeView:{initialize:function(){},requestUpdate:function(){}},requestRender:function(){}},a._container=new c.a(e.tileInfoView),a}return Object(a.a)(i,[{key:"createTile",value:function(e){var t=this._container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t}},{key:"onConfigUpdate",value:function(){var e=this,t=this.layer.renderer;if("heatmap"===t.type){var i=t.minPixelIntensity,n=t.maxPixelIntensity;this._intensityInfo.minPixelIntensity=i,this._intensityInfo.maxPixelIntensity=n,this._gradient=Object(u.e)(t.toJSON()),this.tiles.forEach((function(t){var a=t.bitmap.source;a&&(a.minPixelIntensity=i,a.maxPixelIntensity=n,a.gradient=e._gradient,t.bitmap.invalidateTexture())}))}}},{key:"hitTest",value:function(){return Promise.resolve([])}},{key:"install",value:function(e){e.addChild(this._container)}},{key:"uninstall",value:function(e){this._container.removeAllChildren(),e.removeChild(this._container)}},{key:"disposeTile",value:function(e){this._container.removeChild(e),e.destroy()}},{key:"supportsRenderer",value:function(e){return e&&"heatmap"===e.type}},{key:"onTileData",value:function(e){var t=this.tiles.get(e.tileKey);if(t){var i=e.intensityInfo,n=this._intensityInfo,a=n.minPixelIntensity,r=n.maxPixelIntensity,s=t.bitmap.source||new y;s.intensities=i&&i.matrix||null,s.minPixelIntensity=a,s.maxPixelIntensity=r,s.gradient=this._gradient,t.bitmap.source=s,this._container.addChild(t),this.requestUpdate()}}},{key:"onTileError",value:function(e){console.error(e)}},{key:"lockGPUUploads",value:function(){}},{key:"unlockGPUUploads",value:function(){}}]),i}(h.a),d=f=Object(l.a)([Object(o.a)("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],f)}}]);
//# sourceMappingURL=132.96e400a8.chunk.js.map