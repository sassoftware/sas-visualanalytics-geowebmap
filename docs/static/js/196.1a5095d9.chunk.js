(this.webpackJsonpgeowebmap=this.webpackJsonpgeowebmap||[]).push([[196],{864:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return b}));var n=r(8),a=r.n(n),o=r(15),i=r(3),s=r(4),c=(r(112),r(2)),u=r(981),l=r(1088),m=r(961),f=r(995),p=r(1160),v=r(61),b=function(){function e(){Object(i.a)(this,e)}return Object(s.a)(e,[{key:"convertVectorFieldData",value:function(e){var t=u.a.fromJSON(e.pixelBlock),r=Object(f.a)(t,e.type);return Promise.resolve(Object(c.k)(r)&&r.toJSON())}},{key:"decode",value:function(){var e=Object(o.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.a)(t.data,t.options);case 2:return r=e.sent,e.abrupt("return",r&&r.toJSON());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"symbolize",value:function(e){e.pixelBlock=u.a.fromJSON(e.pixelBlock),e.extent=e.extent?v.a.fromJSON(e.extent):null;var t=this.symbolizer.symbolize(e);return Promise.resolve(Object(c.k)(t)&&t.toJSON())}},{key:"updateSymbolizer",value:function(){var e=Object(o.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.symbolizer=p.a.fromJSON(t.symbolizerJSON),t.histograms&&"rasterStretch"===(null==(r=this.symbolizer)?void 0:r.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=t.histograms);case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"stretch",value:function(e){var t=this.symbolizer.simpleStretch(u.a.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(Object(c.k)(t)&&t.toJSON())}},{key:"estimateStatisticsHistograms",value:function(e){var t=Object(m.g)(u.a.fromJSON(e.srcPixelBlock));return Promise.resolve(t)}},{key:"split",value:function(e){var t=Object(m.o)(u.a.fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel);return t&&t.forEach((function(e,r){t.set(r,null==e?void 0:e.toJSON())})),Promise.resolve(t)}},{key:"mosaicAndTransform",value:function(){var e=Object(o.a)(a.a.mark((function e(t){var r,n,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.srcPixelBlocks.map((function(e){return e?new u.a(e):null})),n=Object(m.k)(r,t.srcMosaicSize,null,null,t.alignmentInfo),t.coefs){e.next=3;break}return e.abrupt("return",n&&n.toJSON());case 3:return o=Object(m.a)(n,t.destDimension,t.coefs,t.sampleSpacing,t.interpolation),e.abrupt("return",o&&o.toJSON());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}()}}]);
//# sourceMappingURL=196.1a5095d9.chunk.js.map