(function(){var r={"esri/layers/support/RasterWorker":1347},t=this||window,e=t.webpackJsonp=t.webpackJsonp||[];e.registerAbsMids?e.registerAbsMids(r):(e.absMidsWaiting=e.absMidsWaiting||[]).push(r)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{1347:function(r,t,e){var o,i;o=[e.dj.c(r.i),t,e(0),e(28),e(4),e(1423),e(1655),e(1456),e(1656)],void 0===(i=function(r,t,e,o,i,n,s,a,c){return function(){function r(){}return r.prototype.decode=function(r){return e.__awaiter(this,void 0,void 0,(function(){var t;return e.__generator(this,(function(e){switch(e.label){case 0:return[4,s.decode(r.data,r.options)];case 1:return[2,(t=e.sent())&&t.toJSON()]}}))}))},r.prototype.symbolize=function(r){r.pixelBlock=n.fromJSON(r.pixelBlock),r.extent=r.extent?o.Extent.fromJSON(r.extent):null;var t=this.symbolizer.symbolize(r);return i.resolve(t&&t.toJSON())},r.prototype.updateSymbolizer=function(r){return e.__awaiter(this,void 0,void 0,(function(){return e.__generator(this,(function(t){return this.symbolizer=c.fromJSON(r.symbolizerJSON),r.histograms&&this.symbolizer&&this.symbolizer.renderer&&"histograms"in this.symbolizer.renderer&&(this.symbolizer.renderer.histograms=r.histograms),[2]}))}))},r.prototype.stretch=function(r){var t=this.symbolizer.simpleStretch(n.fromJSON(r.srcPixelBlock),r.stretchParams);return i.resolve(t&&t.toJSON())},r.prototype.mosaicAndTransform=function(r){return e.__awaiter(this,void 0,void 0,(function(){var t,o,i;return e.__generator(this,(function(e){return t=r.srcPixelBlocks.map((function(r){return r?new n(r):null})),o=a.mosaic(t,r.srcMosaicSize),r.coefs?[2,(i=a.approximateTransform(o,r.destDimension,r.coefs,r.sampleSpacing))&&i.toJSON()]:[2,o&&o.toJSON()]}))}))},r}()}.apply(null,o))||(r.exports=i)}}]);