"use strict";(globalThis.webpackChunkgeowebmap=globalThis.webpackChunkgeowebmap||[]).push([[2782],{62782:(e,s,t)=>{t.r(s),t.d(s,{TerrainTileTree3DDebugger:()=>h});var i=t(27366),l=(t(59486),t(8537)),r=(t(32718),t(25243),t(63780),t(93169),t(75366),t(69912)),a=t(65156),o=t(87287),n=t(80885);let h=class extends o.q{constructor(e){super(e),this.enablePolygons=!1}initialize(){(0,l.S1)(this,"enabled",(e=>this.view.basemapTerrain.renderPatchBorders=e))}getTiles(){return this.view.basemapTerrain.test.getRenderedTiles().map((e=>({...e,geometry:n.Z.fromExtent((0,a.HH)(e.extent,this.view.basemapTerrain.spatialReference))})))}};h=(0,i._)([(0,r.j)("esri.views.3d.layers.support.TerrainTileTree3DDebugger")],h)},87287:(e,s,t)=>{t.d(s,{q:()=>u});var i=t(27366),l=t(51995),r=t(52639),a=t(85015),o=t(16889),n=t(92026),h=t(49861),b=(t(63780),t(93169),t(25243),t(69912)),p=t(62554),y=t(61459),c=t(58009),g=t(87037);const d=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]];let u=class extends a.Z{constructor(e){super(e),this.updating=!1,this.enablePolygons=!0,this.enableLabels=!0,this._polygons=new Map,this._labels=new Map,this._enabled=!0}initialize(){this._symbols=d.map((e=>new y.Z({color:[e[0],e[1],e[2],.6],outline:{color:"black",width:1}}))),this.update()}destroy(){this._enabled=!1,this.clear()}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&(this._enabled=e,this.update())}update(){if(!this._enabled)return void this.clear();const e=this.getTiles(),s=new Array,t=new Set((this._labels.size,this._labels.keys()));e.forEach(((i,a)=>{const h=i.lij.toString();t.delete(h);const b=i.lij[0],y=i.geometry;if(this.enablePolygons&&!this._polygons.has(h)){const e=new r.Z({geometry:y,symbol:this._symbols[b%this._symbols.length]});this._polygons.set(h,e),s.push(e)}if(this.enableLabels){const t=(e=>{if((0,n.pC)(e.label))return e.label;let s=e.lij.toString();return(0,n.pC)(e.loadPriority)&&(s+=` (${e.loadPriority})`),s})(i),b=a/(e.length-1),d=(0,o.t7)(0,200,b),u=(0,o.t7)(20,6,b)/.75,_=(0,n.pC)(i.loadPriority)&&i.loadPriority>=e.length,w=new l.Z([d,_?0:d,_?0:d]),m="3d"===this.view.type?()=>new p.Z({verticalOffset:{screenLength:40/.75},callout:{type:"line",color:"white",border:{color:"black"}},symbolLayers:[new g.Z({text:t,halo:{color:"white",size:1/.75},material:{color:w},size:u})]}):()=>new c.Z({text:t,haloColor:"white",haloSize:1/.75,color:w,size:u});if(this._labels.has(h)){const e=this._labels.get(h),s=m();((0,n.Wi)(e.symbol)||JSON.stringify(s)!==JSON.stringify(e.symbol))&&(e.symbol=s)}else{const e=new r.Z({geometry:y.extent.center,symbol:m()});this._labels.set(h,e),s.push(e)}}}));const i=new Array;t.forEach((e=>{this._polygons.has(e)&&(i.push(this._polygons.get(e)),this._polygons.delete(e)),this._labels.has(e)&&(i.push(this._labels.get(e)),this._labels.delete(e))})),this.view.graphics.removeMany(i),this.view.graphics.addMany(s)}clear(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}};(0,i._)([(0,h.Cb)({constructOnly:!0})],u.prototype,"view",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],u.prototype,"updating",void 0),(0,i._)([(0,h.Cb)()],u.prototype,"enabled",null),u=(0,i._)([(0,b.j)("esri.views.support.TileTreeDebugger")],u)}}]);
//# sourceMappingURL=2782.720f51a7.chunk.js.map