(this.webpackJsonpgeowebmap=this.webpackJsonpgeowebmap||[]).push([[136],{1059:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var r=a(3),n=a(4),i=a(6),l=a(7),s=a(0),o=a(39),c=a(119),b=a(32),u=a(24),h=a(2),y=a(1),p=(a(17),a(18),a(16),a(9)),g=a(231),v=a(205),f=a(273),d=a(233),O=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]],j=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).updating=!1,n.enablePolygons=!0,n.enableLabels=!0,n._polygons=new Map,n._labels=new Map,n._enabled=!0,n}return Object(n.a)(a,[{key:"initialize",value:function(){this._symbols=O.map((function(e){return new v.a({color:[e[0],e[1],e[2],.6],outline:{color:"black",width:1}})})),this.update()}},{key:"destroy",value:function(){this._enabled=!1,this.clear()}},{key:"enabled",get:function(){return this._enabled},set:function(e){this._enabled!==e&&(this._enabled=e,this.update())}},{key:"update",value:function(){var e=this;if(this._enabled){var t=this.getTiles(),a=new Array,r=new Set((this._labels.size,this._labels.keys()));t.forEach((function(n,i){var l=n.lij.toString();r.delete(l);var s=n.lij[0],b=n.geometry;if(e.enablePolygons&&!e._polygons.has(l)){var y=new c.a({geometry:b,symbol:e._symbols[s%e._symbols.length]});e._polygons.set(l,y),a.push(y)}if(e.enableLabels){var p=function(e){if(Object(h.k)(e.label))return e.label;var t=e.lij.toString();return Object(h.k)(e.loadPriority)&&(t+=" (".concat(e.loadPriority,")")),t}(n),v=i/(t.length-1),O=Object(u.m)(0,200,v),j=Object(u.m)(20,6,v)/.75,w=Object(h.k)(n.loadPriority)&&n.loadPriority>=t.length,m=new o.a([O,w?0:O,w?0:O]),_="3d"===e.view.type?function(){return new g.a({verticalOffset:{screenLength:40/.75},callout:{type:"line",color:"white",border:{color:"black"}},symbolLayers:[new d.a({text:p,halo:{color:"white",size:1/.75},material:{color:m},size:j})]})}:function(){return new f.a({text:p,haloColor:"white",haloSize:1/.75,color:m,size:j})};if(e._labels.has(l)){var k=e._labels.get(l),T=_();(Object(h.j)(k.symbol)||JSON.stringify(T)!==JSON.stringify(k.symbol))&&(k.symbol=T)}else{var z=new c.a({geometry:b.extent.center,symbol:_()});e._labels.set(l,z),a.push(z)}}}));var n=new Array;r.forEach((function(t){e._polygons.has(t)&&(n.push(e._polygons.get(t)),e._polygons.delete(t)),e._labels.has(t)&&(n.push(e._labels.get(t)),e._labels.delete(t))})),this.view.graphics.removeMany(n),this.view.graphics.addMany(a)}else this.clear()}},{key:"clear",value:function(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}}]),a}(b.a);Object(s.a)([Object(y.b)({constructOnly:!0})],j.prototype,"view",void 0),Object(s.a)([Object(y.b)({readOnly:!0})],j.prototype,"updating",void 0),Object(s.a)([Object(y.b)()],j.prototype,"enabled",null),j=Object(s.a)([Object(p.a)("esri.views.support.TileTreeDebugger")],j)},1325:function(e,t,a){"use strict";a.r(t),a.d(t,"TerrainTileTree3DDebugger",(function(){return p}));var r=a(14),n=a(3),i=a(4),l=a(6),s=a(7),o=a(0),c=(a(112),a(27)),b=(a(1),a(17),a(18),a(16),a(9)),u=a(45),h=a(1059),y=a(147),p=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).enablePolygons=!1,r}return Object(i.a)(a,[{key:"initialize",value:function(){var e=this;Object(c.a)(this,"enabled",(function(t){return e.view.basemapTerrain.renderPatchBorders=t}))}},{key:"getTiles",value:function(){var e=this;return this.view.basemapTerrain.test.getRenderedTiles().map((function(t){return Object(r.a)(Object(r.a)({},t),{},{geometry:y.a.fromExtent(Object(u.z)(t.extent,e.view.basemapTerrain.spatialReference))})}))}}]),a}(h.a);p=Object(o.a)([Object(b.a)("esri.views.3d.layers.support.TerrainTileTree3DDebugger")],p)}}]);
//# sourceMappingURL=136.7edcf6c9.chunk.js.map