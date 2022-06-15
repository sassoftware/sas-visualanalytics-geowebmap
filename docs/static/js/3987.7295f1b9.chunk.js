"use strict";(globalThis.webpackChunkgeowebmap=globalThis.webpackChunkgeowebmap||[]).push([[3987,2463,2170],{58935:(t,e,r)=>{r.d(e,{Rd:()=>o,Ud:()=>h,VG:()=>n,Wv:()=>a,Zv:()=>l});var i=r(47898),s=r(5163);function n(t,e,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"abbr";return(0,s.VG)(t,(0,i.nn)(e,r).value,r,n,o)}function o(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"abbr";if("length"!==e.type)throw new Error("quantity is not a length");return(0,s.Rd)(t,e.value,e.unit,r,i)}function a(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"abbr";if("length"!==e.type)throw new Error("quantity is not a length");return(0,s.Wv)(t,e.value,e.unit,r,i)}function h(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"abbr";if("length"!==e.type)throw new Error("quantity is not a length");return(0,s.Ud)(t,e.value,e.unit,r,i)}function l(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"abbr";if("length"!==e.type)throw new Error("quantity is not a length");return(0,s.Zv)(t,e.value,e.unit,r,i)}},47898:(t,e,r)=>{r.d(e,{EV:()=>s,ne:()=>o,nn:()=>a,yG:()=>n});var i=r(68860);function s(t,e){return{type:(0,i.UF)(e),value:t,unit:e}}function n(t,e){return{type:(0,i.UF)(e),value:t,unit:e}}function o(t,e){return{type:(0,i.UF)(e),value:t,unit:e}}function a(t,e){return s((0,i.En)(t.value,t.unit,e),e)}},92463:(t,e,r)=>{r.r(e),r.d(e,{hydratedAdapter:()=>h});var i=r(53866),s=r(77577),n=r(7882),o=r(80885),a=r(29909);const h={convertToGEGeometry:function(t,e){if(null==e)return null;let r="cache"in e?e.cache._geVersion:void 0;return null==r&&(r=t.convertJSONToGeometry(e),"cache"in e&&(e.cache._geVersion=r)),r},exportPoint:function(t,e,r){const i=t.hasZ(e),s=t.hasM(e),o=new n.Z({x:t.getPointX(e),y:t.getPointY(e),spatialReference:r});return i&&(o.z=t.getPointZ(e)),s&&(o.m=t.getPointM(e)),o.cache._geVersion=e,o},exportPolygon:function(t,e,r){const i=new o.Z({rings:t.exportPaths(e),hasZ:t.hasZ(e),hasM:t.hasM(e),spatialReference:r});return i.cache._geVersion=e,i},exportPolyline:function(t,e,r){const i=new a.Z({paths:t.exportPaths(e),hasZ:t.hasZ(e),hasM:t.hasM(e),spatialReference:r});return i.cache._geVersion=e,i},exportMultipoint:function(t,e,r){const i=new s.Z({hasZ:t.hasZ(e),hasM:t.hasM(e),points:t.exportPoints(e),spatialReference:r});return i.cache._geVersion=e,i},exportExtent:function(t,e,r){const s=t.hasZ(e),n=t.hasM(e),o=new i.Z({xmin:t.getXMin(e),ymin:t.getYMin(e),xmax:t.getXMax(e),ymax:t.getYMax(e),spatialReference:r});if(s){const r=t.getZExtent(e);o.zmin=r.vmin,o.zmax=r.vmax}if(n){const r=t.getMExtent(e);o.mmin=r.vmin,o.mmax=r.vmax}return o.cache._geVersion=e,o}}},2170:(t,e,r)=>{r.r(e),r.d(e,{buffer:()=>P,clip:()=>a,contains:()=>l,convexHull:()=>b,crosses:()=>c,cut:()=>h,densify:()=>$,difference:()=>w,disjoint:()=>g,distance:()=>d,equals:()=>u,extendedSpatialReferenceInfo:()=>o,flipHorizontal:()=>z,flipVertical:()=>j,generalize:()=>k,geodesicArea:()=>D,geodesicBuffer:()=>A,geodesicDensify:()=>Y,geodesicLength:()=>F,intersect:()=>S,intersects:()=>p,isSimple:()=>v,nearestCoordinate:()=>G,nearestVertex:()=>E,nearestVertices:()=>O,offset:()=>M,overlaps:()=>y,planarArea:()=>Z,planarLength:()=>V,relate:()=>m,rotate:()=>I,simplify:()=>x,symmetricDifference:()=>C,touches:()=>f,union:()=>R,within:()=>_});var i=r(99058),s=r(92463);function n(t){return Array.isArray(t)?t[0].spatialReference:t&&t.spatialReference}function o(t){return i.G.extendedSpatialReferenceInfo(t)}function a(t,e){return i.G.clip(s.hydratedAdapter,n(t),t,e)}function h(t,e){return i.G.cut(s.hydratedAdapter,n(t),t,e)}function l(t,e){return i.G.contains(s.hydratedAdapter,n(t),t,e)}function c(t,e){return i.G.crosses(s.hydratedAdapter,n(t),t,e)}function d(t,e,r){return i.G.distance(s.hydratedAdapter,n(t),t,e,r)}function u(t,e){return i.G.equals(s.hydratedAdapter,n(t),t,e)}function p(t,e){return i.G.intersects(s.hydratedAdapter,n(t),t,e)}function f(t,e){return i.G.touches(s.hydratedAdapter,n(t),t,e)}function _(t,e){return i.G.within(s.hydratedAdapter,n(t),t,e)}function g(t,e){return i.G.disjoint(s.hydratedAdapter,n(t),t,e)}function y(t,e){return i.G.overlaps(s.hydratedAdapter,n(t),t,e)}function m(t,e,r){return i.G.relate(s.hydratedAdapter,n(t),t,e,r)}function v(t){return i.G.isSimple(s.hydratedAdapter,n(t),t)}function x(t){return i.G.simplify(s.hydratedAdapter,n(t),t)}function b(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return i.G.convexHull(s.hydratedAdapter,n(t),t,e)}function w(t,e){return i.G.difference(s.hydratedAdapter,n(t),t,e)}function C(t,e){return i.G.symmetricDifference(s.hydratedAdapter,n(t),t,e)}function S(t,e){return i.G.intersect(s.hydratedAdapter,n(t),t,e)}function R(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return i.G.union(s.hydratedAdapter,n(t),t,e)}function M(t,e,r,o,a,h){return i.G.offset(s.hydratedAdapter,n(t),t,e,r,o,a,h)}function P(t,e,r){let o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return i.G.buffer(s.hydratedAdapter,n(t),t,e,r,o)}function A(t,e,r,o,a,h){return i.G.geodesicBuffer(s.hydratedAdapter,n(t),t,e,r,o,a,h)}function G(t,e){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return i.G.nearestCoordinate(s.hydratedAdapter,n(t),t,e,r)}function E(t,e){return i.G.nearestVertex(s.hydratedAdapter,n(t),t,e)}function O(t,e,r,o){return i.G.nearestVertices(s.hydratedAdapter,n(t),t,e,r,o)}function T(t){return"xmin"in t?"center"in t?t.center:null:"x"in t?t:"extent"in t?t.extent.center:null}function I(t,e,r){var s;if(null==t)throw new Error("Illegal Argument Exception");const n=t.spatialReference;if(null==(r=null!=(s=r)?s:T(t)))throw new Error("Illegal Argument Exception");const o=t.constructor.fromJSON(i.G.rotate(t,e,r));return o.spatialReference=n,o}function z(t,e){var r;if(null==t)throw new Error("Illegal Argument Exception");const s=t.spatialReference;if(null==(e=null!=(r=e)?r:T(t)))throw new Error("Illegal Argument Exception");const n=t.constructor.fromJSON(i.G.flipHorizontal(t,e));return n.spatialReference=s,n}function j(t,e){var r;if(null==t)throw new Error("Illegal Argument Exception");const s=t.spatialReference;if(null==(e=null!=(r=e)?r:T(t)))throw new Error("Illegal Argument Exception");const n=t.constructor.fromJSON(i.G.flipVertical(t,e));return n.spatialReference=s,n}function k(t,e,r,o){return i.G.generalize(s.hydratedAdapter,n(t),t,e,r,o)}function $(t,e,r){return i.G.densify(s.hydratedAdapter,n(t),t,e,r)}function Y(t,e,r){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return i.G.geodesicDensify(s.hydratedAdapter,n(t),t,e,r,o)}function Z(t,e){return i.G.planarArea(s.hydratedAdapter,n(t),t,e)}function V(t,e){return i.G.planarLength(s.hydratedAdapter,n(t),t,e)}function D(t,e,r){return i.G.geodesicArea(s.hydratedAdapter,n(t),t,e,r)}function F(t,e,r){return i.G.geodesicLength(s.hydratedAdapter,n(t),t,e,r)}},15559:(t,e,r)=>{r.d(e,{Gb:()=>l,Jf:()=>c,cA:()=>d});r(59486);var i=r(10064),s=r(68860),n=r(38516),o=(r(29909),r(80885),r(7882),r(78952));function a(t){if(!t)return null;if(t.isGeographic&&t.wkid){const e=n.Dg[t.wkid];if(e)return e}if(t.wkt){const e=function(t){const e=n.yB.exec(t);if(!e||2!==e.length)return null;const r=e[1].split(",");if(!r||r.length<3)return null;const i=parseFloat(r[1]),s=parseFloat(r[2]);return isNaN(i)||isNaN(s)?null:{a:i,f:0===s?0:1/s}}(t.wkt);if(e)return e}return null}function h(t){const e=a(t||o.Z.WGS84);if(function(t){return"b"in t&&"eSq"in t&&"radius"in t}(e))return e;const r=e.a*(1-e.f);return Object.assign(e,{b:r,eSq:1-(r/e.a)**2,radius:(2*e.a+r)/3,densificationRatio:1e4/((2*e.a+r)/3)})}function l(t){return null!==a(t)}function c(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"meters";if(!t)throw new i.Z("geodesic-lengths:invalid-geometries","the input geometries type is not supported");if(t.some((t=>!l(t.spatialReference))))throw new i.Z("geodesic-lengths:invalid-spatial-reference","the input geometries spatial reference is not supported");const r=[];for(let i=0;i<t.length;i++){const n=t[i],{spatialReference:o}=n,a="polyline"===n.type?n.paths:n.rings;let h=0;for(let t=0;t<a.length;t++){const e=a[t];let r=0;for(let t=1;t<e.length;t++){const i=e[t-1][0],s=e[t][0],n=e[t-1][1],a=e[t][1];if(n!==a||i!==s){const t={distance:null};d(t,[i,n],[s,a],o),r+=t.distance}}h+=r}h=(0,s.En)(h,"meters",e),r.push(h)}return r}function d(t,e,r,i){const s=e[0]*n.Yr,o=e[1]*n.Yr,a=r[0]*n.Yr,l=r[1]*n.Yr,{a:c,b:d,f:u,radius:p}=h(i),f=a-s,_=Math.atan((1-u)*Math.tan(o)),g=Math.atan((1-u)*Math.tan(l)),y=Math.sin(_),m=Math.cos(_),v=Math.sin(g),x=Math.cos(g);let b,w,C,S,R,M,P,A,G,E,O=1e3,T=f;do{if(P=Math.sin(T),A=Math.cos(T),C=Math.sqrt(x*P*(x*P)+(m*v-y*x*A)*(m*v-y*x*A)),0===C)return t.distance=0,t.azimuth=void 0,t.reverseAzimuth=void 0,t;R=y*v+m*x*A,M=Math.atan2(C,R),G=m*x*P/C,w=1-G*G,S=R-2*y*v/w,isNaN(S)&&(S=0),E=u/16*w*(4+u*(4-3*w)),b=T,T=f+(1-E)*u*G*(M+E*C*(S+E*R*(2*S*S-1)))}while(Math.abs(T-b)>1e-12&&--O>0);if(0===O){const e=p,r=Math.acos(Math.sin(o)*Math.sin(l)+Math.cos(o)*Math.cos(l)*Math.cos(a-s))*e,i=a-s,h=Math.sin(i)*Math.cos(l),c=Math.cos(o)*Math.sin(l)-Math.sin(o)*Math.cos(l)*Math.cos(i),d=Math.atan2(h,c);return t.azimuth=d/n.Yr,t.distance=r,t.reverseAzimuth=void 0,t}const I=w*(c*c-d*d)/(d*d),z=I/1024*(256+I*(I*(74-47*I)-128)),j=d*(1+I/16384*(4096+I*(I*(320-175*I)-768)))*(M-z*C*(S+z/4*(R*(2*S*S-1)-z/6*S*(4*C*C-3)*(4*S*S-3)))),k=Math.atan2(x*Math.sin(T),m*v-y*x*Math.cos(T)),$=Math.atan2(m*Math.sin(T),m*v*Math.cos(T)-y*x);return t.azimuth=k/n.Yr,t.distance=j,t.reverseAzimuth=$/n.Yr,t}},77671:(t,e,r)=>{r.d(e,{Y:()=>s});var i=r(68860);const s={readOnly:!0,get(){const t="metric",{view:e}=this;if(!e)return t;const r=e.get("map.portalItem.portal");if(r)switch(r.get("user.units")||r.units){case t:return t;case"english":return"imperial"}return(0,i.yT)(e.spatialReference)||t}}},98074:(t,e,r)=>{r.d(e,{p:()=>h});var i=r(27366),s=r(92026),n=r(67426),o=r(49861),a=(r(63780),r(93169),r(25243),r(69912));const h=t=>{let e=class extends((0,n.v)(t)){constructor(){super(...arguments),this.parent=null}get updating(){return!1}get visible(){const t=!(0,s.pC)(this.parent)||this.parent.visible&&!this.parent.suspended;return this.analysis.visible&&t}};return(0,i._)([(0,o.Cb)({readOnly:!0})],e.prototype,"type",void 0),(0,i._)([(0,o.Cb)({constructOnly:!0})],e.prototype,"analysis",void 0),(0,i._)([(0,o.Cb)({constructOnly:!0})],e.prototype,"parent",void 0),(0,i._)([(0,o.Cb)({constructOnly:!0})],e.prototype,"view",void 0),(0,i._)([(0,o.Cb)({readOnly:!0})],e.prototype,"updating",null),(0,i._)([(0,o.Cb)({readOnly:!0})],e.prototype,"visible",null),e=(0,i._)([(0,a.j)("esri.views.3d.analysis.AnalysisView3D")],e),e}},51817:(t,e,r)=>{var i;r.d(e,{e:()=>i}),function(t){t[t.Auto=0]="Auto",t[t.Euclidean=1]="Euclidean",t[t.Geodesic=2]="Geodesic"}(i||(i={}))},39409:(t,e,r)=>{r.d(e,{D:()=>s});var i=r(68860);class s{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.spatialReference=t}get spatialReference(){return this._spatialReference}set spatialReference(t){t!==this._spatialReference&&(this._spatialReference=t,this._updateNormalizationFactors())}normalizeDistance(t){return t*this._metersPerDistanceUnit}normalizeElevation(t){return t*this._metersPerElevationUnit}normalizeArea(t){return t*this._squareMetersPerAreaUnit}_updateNormalizationFactors(){this._metersPerDistanceUnit=(0,i.c9)(this._spatialReference,1),this._metersPerElevationUnit=(0,i.c9)(this._spatialReference,1),this._squareMetersPerAreaUnit=this._metersPerDistanceUnit*this._metersPerDistanceUnit}}},33906:(t,e,r)=>{r.d(e,{G:()=>o,e:()=>a});var i=r(92026),s=r(79803),n=r(77648);function o(t,e,r){let o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const a=(0,s.fM)(t,e);return(0,i.Wi)(a)?null:(a.hasZ&&!o||!(0,i.pC)(r)||(a.z=(0,i.Pt)((0,n.KO)(r,a),0)),a)}function a(t,e,r){r.warnOnce(`Failed to project analysis geometry (id: '${t.id}'), projection from spatial reference (wkid: '${e.wkid}') to view spatial reference is not supported. Projection may be possible after calling projection.load().`)}},26243:(t,e,r)=>{r.d(e,{H:()=>o,c:()=>a});var i=r(17842),s=r(88396),n=r(11186);function o(t,e){if((0,n.s)(e,0,0,0),t.length>0){for(let r=0;r<t.length;++r)(0,n.b)(e,e,t[r]);(0,n.a)(e,e,1/t.length)}}function a(t,e,r,i){i.projectToRenderScreen(t,h),i.projectToRenderScreen(e,c),(0,s.f)(r,d,l),(0,s.i)(r,r)}const h=(0,i.J$)(),l=h,c=(0,i.J$)(),d=c},25736:(t,e,r)=>{r.d(e,{Kc:()=>G,jB:()=>O});var i=r(100),s=r(92026),n=r(17842),o=r(88396),a=r(11186),h=r(71353);r(84652);(0,h.c)(),(0,n.J$)();const l=(0,n.J$)(),c=l,d=(0,n.J$)(),u=d;(0,n.s1)(),(0,n.s1)();var p=r(86244),f=r(27366),_=r(85015),g=r(49861),y=(r(63780),r(93169),r(25243),r(69912));r(42877);let m=t=>({vnodeSelector:"",properties:void 0,children:void 0,text:t.toString(),domNode:null}),v=(t,e,r)=>{for(let i=0,s=e.length;i<s;i++){let s=e[i];Array.isArray(s)?v(t,s,r):null!=s&&!1!==s&&("string"==typeof s&&(s=m(s)),r.push(s))}};function x(t,e,r){if(Array.isArray(e))r=e,e=void 0;else if(e&&("string"==typeof e||e.hasOwnProperty("vnodeSelector"))||r&&("string"==typeof r||r.hasOwnProperty("vnodeSelector")))throw new Error("h called with invalid arguments");let i,s;return r&&1===r.length&&"string"==typeof r[0]?i=r[0]:r&&(s=[],v(t,r,s),0===s.length&&(s=void 0)),{vnodeSelector:t,properties:e,children:s,text:""===i?void 0:i,domNode:null}}r(88367);let b=class extends _.Z{constructor(t){super(t),this.startX=0,this.startY=0,this.endX=0,this.endY=0,this.width=1,this.color=[0,0,0,.5],this.visible=!0}get startPosition(){return[this.startX,this.startY]}set startPosition(t){this._set("startX",t[0]),this._set("startY",t[1])}get endPosition(){return[this.endX,this.endY]}set endPosition(t){this._set("endX",t[0]),this._set("endY",t[1])}get strokeStyle(){const t=this.color;return`rgba(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]})`}get lineCap(){return"round"}render(){const{height:t,left:e,top:r,width:i,x1:s,x2:n,y1:o,y2:a}=this._calculateCoordinates(w),h=`stroke: ${this.strokeStyle}; stroke-width: ${this.width}; stroke-linecap: ${this.lineCap};`;return x("div",{classes:{"esri-line-overlay-item":!0},styles:{left:e+"px",top:r+"px",width:i+"px",height:t+"px",visibility:this.visible?"visible":"hidden"}},[x("svg",{width:i,height:t},[x("line",{x1:s,y1:o,x2:n,y2:a,style:h})])])}renderCanvas(t){if(!this.visible)return;t.strokeStyle=this.strokeStyle,t.lineWidth=this.width,t.lineCap=this.lineCap;const e=this._calculateCoordinates(w);t.beginPath(),t.moveTo(e.left+e.x1,e.top+e.y1),t.lineTo(e.left+e.x2,e.top+e.y2),t.stroke()}_calculateCoordinates(t){const e=Math.min(this.startX,this.endX),r=Math.max(this.startX,this.endX),i=Math.min(this.startY,this.endY),s=Math.max(this.startY,this.endY),n=this.width;return t.left=e-n,t.top=i-n,t.width=r-e+2*n,t.height=Math.max(20,s-i+2*n),t.x1=this.startX-e+n,t.y1=this.startY-i+n,t.x2=this.endX-e+n,t.y2=this.endY-i+n,t}};(0,f._)([(0,g.Cb)()],b.prototype,"startX",void 0),(0,f._)([(0,g.Cb)()],b.prototype,"startY",void 0),(0,f._)([(0,g.Cb)()],b.prototype,"endX",void 0),(0,f._)([(0,g.Cb)()],b.prototype,"endY",void 0),(0,f._)([(0,g.Cb)()],b.prototype,"startPosition",null),(0,f._)([(0,g.Cb)()],b.prototype,"endPosition",null),(0,f._)([(0,g.Cb)()],b.prototype,"width",void 0),(0,f._)([(0,g.Cb)()],b.prototype,"color",void 0),(0,f._)([(0,g.Cb)()],b.prototype,"visible",void 0),(0,f._)([(0,g.Cb)({readOnly:!0})],b.prototype,"strokeStyle",null),b=(0,f._)([(0,y.j)("esri.views.overlay.LineOverlayItem")],b);const w={left:0,top:0,width:0,height:0,x1:0,y1:0,x2:0,y2:0},C=b,S={bottom:"esri-text-overlay-item-anchor-bottom","bottom-right":"esri-text-overlay-item-anchor-bottom-right","bottom-left":"esri-text-overlay-item-anchor-bottom-left",top:"esri-text-overlay-item-anchor-top","top-right":"esri-text-overlay-item-anchor-top-right","top-left":"esri-text-overlay-item-anchor-top-left",center:"esri-text-overlay-item-anchor-center",right:"esri-text-overlay-item-anchor-right",left:"esri-text-overlay-item-anchor-left"};let R=class extends _.Z{constructor(t){super(t),this.x=0,this.y=0,this.text="-",this.fontSize=14,this.anchor="center",this.visible=!0,this.backgroundColor="rgba(0, 0, 0, 0.6)",this.textColor="white",this.textShadowColor=[0,0,0],this.textShadowSize=1}get position(){return[this.x,this.y]}set position(t){this._set("x",t[0]),this._set("y",t[1])}get padding(){return.5*this.fontSize}render(){return x("div",{classes:this._cssClasses(),styles:{left:Math.floor(this.x)+"px",top:Math.floor(this.y)+"px",visibility:this.visible?"visible":"hidden",fontSize:this.fontSize+"px",backgroundColor:this.backgroundColor,color:this.textColor,padding:this.padding+"px",borderRadius:this.padding+"px",textShadow:`0 0 ${this.textShadowSize}px rgb(${this.textShadowColor[0]}, ${this.textShadowColor[1]}, ${this.textShadowColor[2]})`}},[this.text])}renderCanvas(t){if(!this.visible)return;const e=t.font.replace(/^(.*?)px/,"");t.font=`${this.fontSize}px ${e}`;const r=this.padding,i=this.padding,s=t.measureText(this.text).width,n=this.fontSize,o=M[this.anchor];t.textAlign="center",t.textBaseline="middle";const a=s+2*r,h=n+2*r,l=this.x+o.x*a,c=this.y+o.y*h;this._roundedRect(t,l,c,a,h,i),t.fillStyle=this.backgroundColor,t.fill();const d=this.x+(o.x+.5)*a,u=this.y+(o.y+.5)*h;this._renderTextShadow(t,this.text,d,u),t.fillStyle=this.textColor,t.fillText(this.text,d,u)}_renderTextShadow(t,e,r,i){t.lineJoin="miter",t.fillStyle=`rgba(${this.textShadowColor[0]}, ${this.textShadowColor[1]}, ${this.textShadowColor[2]}, ${1/P.length})`;const s=this.textShadowSize;for(const[n,o]of P)t.fillText(e,r+s*n,i+s*o)}_roundedRect(t,e,r,i,s,n){t.beginPath(),t.moveTo(e,r+n),t.arcTo(e,r,e+n,r,n),t.lineTo(e+i-n,r),t.arcTo(e+i,r,e+i,r+n,n),t.lineTo(e+i,r+s-n),t.arcTo(e+i,r+s,e+i-n,r+s,n),t.lineTo(e+n,r+s),t.arcTo(e,r+s,e,r+s-n,n),t.closePath()}_cssClasses(){const t={"esri-text-overlay-item":!0};for(const e in S)t[S[e]]=this.anchor===e;return t}};(0,f._)([(0,g.Cb)()],R.prototype,"x",void 0),(0,f._)([(0,g.Cb)()],R.prototype,"y",void 0),(0,f._)([(0,g.Cb)()],R.prototype,"position",null),(0,f._)([(0,g.Cb)()],R.prototype,"text",void 0),(0,f._)([(0,g.Cb)()],R.prototype,"fontSize",void 0),(0,f._)([(0,g.Cb)()],R.prototype,"anchor",void 0),(0,f._)([(0,g.Cb)()],R.prototype,"visible",void 0),(0,f._)([(0,g.Cb)()],R.prototype,"padding",null),R=(0,f._)([(0,y.j)("esri.views.overlay.TextOverlayItem")],R);const M={bottom:{x:-.5,y:-1,textAlign:"center",textBaseline:"bottom"},"bottom-left":{x:0,y:-1,textAlign:"left",textBaseline:"bottom"},"bottom-right":{x:-1,y:-1,textAlign:"right",textBaseline:"bottom"},center:{x:-.5,y:-.5,textAlign:"center",textBaseline:"middle"},left:{x:0,y:-.5,textAlign:"left",textBaseline:"middle"},right:{x:-1,y:-.5,textAlign:"right",textBaseline:"middle"},top:{x:-.5,y:0,textAlign:"center",textBaseline:"top"},"top-left":{x:0,y:0,textAlign:"left",textBaseline:"top"},"top-right":{x:-1,y:0,textAlign:"right",textBaseline:"top"}},P=[];{const t=16;for(let e=0;e<360;e+=360/t)P.push([Math.cos(Math.PI*e/180),Math.sin(Math.PI*e/180)])}const A=R;class G extends p.l{constructor(t){super(t.view),this._handles=new i.Z,this._textItem=null,this._calloutItem=null,this._showCallout=!0,this._showText=!0,this._geometry=null,this._text="-",this._fontSize=14,this._distance=25,this._anchor="right",this.applyProps(t)}get geometry(){return this._geometry}set geometry(t){this._geometry=t,this._updateLabelPosition()}get textItem(){return this._textItem}get text(){return this._text}set text(t){this._text=t,this.attached&&(this._textItem.text=this._text)}get fontSize(){return this._fontSize}set fontSize(t){this._fontSize=t,this.attached&&(this._textItem.fontSize=this._fontSize)}get distance(){return this._distance}set distance(t){this._distance!==t&&(this._distance=t,this._updateLabelPosition())}get anchor(){return this._anchor}set anchor(t){this._anchor!==t&&(this._anchor=t,this._updateLabelPosition())}overlaps(t){return!!this.attached&&this.textItem.visible&&t.textItem.visible&&this.view.overlay.overlaps(this._textItem,t.textItem)}_updateLabelPosition(){if(this.attached){if(this._showText=!1,this._showCallout=!1,(0,s.pC)(this.geometry)&&this.view._stage)switch(this.geometry.type){case"point":if(this._computeLabelPositionFromPoint(this.geometry.point,V)){if(this.geometry.callout){const t=this.view.state.camera,e=this.geometry.callout.distance;(0,o.m)(Z,Z,[0,this.geometry.callout.offset]),t.renderToScreen(Z,V),(0,o.s)($,0,1),(0,o.g)($,$,e*t.pixelRatio),(0,o.m)($,$,Z),t.renderToScreen($,D),this._showCallout=this._updatePosition(V,D)}else this._textItem.position=[V[0],V[1]],this._textItem.anchor="center";this._showText=!0}break;case"corner":this._computeLabelPositionFromCorner(this.geometry,this._distance,V,D)&&(this._showCallout=this._updatePosition(V,D),this._showText=!0);break;case"segment":this._computeLabelPositionFromSegment(this.geometry,this._distance,this._anchor,V,D)&&(this._showText=!0,this._showCallout=this._updatePosition(V,D))}this.updateVisibility(this.visible)}}_computeLabelPositionFromPoint(t,e){const r=this.view.state.camera;return r.projectToRenderScreen(t,Z),!(Z[2]<0||Z[2]>1)&&(r.renderToScreen(Z,e),!0)}_computeLabelPositionFromCorner(t,e,r,i){if(!t)return!1;const s=this.view.state.camera;return E(t.left,1,s,j),(0,o.n)(j,j),E(t.right,0,s,k),(0,o.m)($,j,k),(0,o.n)($,$),(0,o.i)($,$),s.projectToRenderScreen(t.left.endRenderSpace,Z),!(Z[2]<0||Z[2]>1)&&(s.renderToScreen(Z,r),(0,o.g)($,$,e*s.pixelRatio),(0,o.m)($,$,Z),s.renderToScreen($,i),!0)}_computeLabelPositionFromSegment(t,e,r,i,s){if(!t)return!1;const n=t.segment,a=this.view.state.camera;(function(t,e,r,i){i.projectToRenderScreen(t,l),i.projectToRenderScreen(e,d),(0,o.f)(r,u,c),(0,o.i)(r,r)})(n.startRenderSpace,n.endRenderSpace,j,a),(0,o.s)($,-j[1],j[0]);let h=!1;switch(r){case"top":h=$[1]<0;break;case"bottom":h=$[1]>0;break;case"left":h=$[0]>0;break;case"right":h=$[0]<0}if(h&&(0,o.n)($,$),0===(0,o.l)($))switch(r){case"top":$[1]=1;break;case"bottom":$[1]=-1;break;case"left":$[0]=-1;break;case"right":$[0]=1}return n.eval(U[t.sampleLocation],Y),a.projectToRenderScreen(Y,Z),!(Z[2]<0||Z[2]>1)&&(a.renderToScreen(Z,i),(0,o.g)($,$,e*a.pixelRatio),(0,o.m)($,$,Z),a.renderToScreen($,s),!0)}_updatePosition(t,e){if(e){const r=e[0]-t[0],i=e[1]-t[1];return this._textItem.position=[e[0],e[1]],this._textItem.anchor=Math.abs(r)>Math.abs(i)?r>0?"left":"right":i>0?"top":"bottom",this._calloutItem.startPosition=[t[0],t[1]],this._calloutItem.endPosition=[e[0],e[1]],!0}return this._textItem.position=[t[0],t[1]],this._textItem.anchor="center",!1}createResources(){this._textItem=new A({visible:!0,text:this._text,fontSize:this._fontSize}),this._calloutItem=new C({visible:!0,width:2}),this._updateLabelPosition(),this.view.overlay.items.addMany([this._textItem,this._calloutItem]),this._handles.add(this.view.state.watch("camera",(()=>this._updateLabelPosition())))}destroyResources(){this.view.overlay&&!this.view.overlay.destroyed&&this.view.overlay.items.removeMany([this._textItem,this._calloutItem]),this._handles.removeAll()}updateVisibility(t){this._textItem.visible=this._showText&&t,this._calloutItem.visible=this._showCallout&&t}}function E(t,e,r,i){t.eval(e,T,z),(0,a.b)(I,T,z),r.projectToRenderScreen(T,F),r.projectToRenderScreen(I,L),(0,o.f)(i,X,W),(0,o.i)(i,i)}function O(t){switch(t){case"top":return"bottom";case"right":return"left";case"bottom":return"top";case"left":return"right"}}const T=(0,h.c)(),I=(0,h.c)(),z=(0,h.c)(),j=(0,n.gX)(),k=(0,n.gX)(),$=(0,n.gX)(),Y=(0,h.c)(),Z=(0,n.J$)(),V=(0,n.s1)(),D=(0,n.s1)(),F=(0,n.J$)(),W=F,L=(0,n.J$)(),X=L,U={start:0,center:.5,end:1}},33837:(t,e,r)=>{r.d(e,{r:()=>f});var i=r(92026),s=r(14226),n=r(81949),o=r(11186),a=r(71353),h=r(90045),l=r(151),c=r(52168),d=r(75558),u=r(56529),p=r(58901);class f extends c._{constructor(t){super(t),this._renderOccluded=u.yD.OccludeAndTransparent,this._width=1,this._color=(0,l.f)(1,0,1,1),this._innerWidth=1,this._innerColor=null,this._stipplePattern=null,this._stippleOffColor=null,this._stipplePreferContinuous=!0,this._writeDepthEnabled=!0,this._falloff=0,this._polygonOffset=!1,this.applyProps(t)}setGeometryFromRenderSpacePoint(t){const e=1e3,r=[];r.push([[t[0]-e,t[1]+0,t[2]+0],[t[0]+e,t[1]+0,t[2]+0]]),r.push([[t[0]-0,t[1]-e,t[2]+0],[t[0]+0,t[1]+e,t[2]+0]]),r.push([[t[0]-0,t[1]+0,t[2]-e],[t[0]+0,t[1]+0,t[2]+e]]),this.geometry=r}setGeometryFromExtent(t){const e=this.view.spatialReference,r=(0,a.c)(),i=(0,a.c)(),s=100,n=[];(0,o.s)(r,t[0],t[1],s),this.view.renderCoordsHelper.toRenderCoords(r,e,i),n.push([i[0],i[1],i[2]]),(0,o.s)(r,t[2],t[1],s),this.view.renderCoordsHelper.toRenderCoords(r,e,i),n.push([i[0],i[1],i[2]]),(0,o.s)(r,t[2],t[3],s),this.view.renderCoordsHelper.toRenderCoords(r,e,i),n.push([i[0],i[1],i[2]]),(0,o.s)(r,t[0],t[3],s),this.view.renderCoordsHelper.toRenderCoords(r,e,i),n.push([i[0],i[1],i[2]]),(0,o.s)(r,t[0],t[1],s),this.view.renderCoordsHelper.toRenderCoords(r,e,i),n.push([i[0],i[1],i[2]]),(0,o.s)(r,t[0],t[1],s),this.view.renderCoordsHelper.toRenderCoords(r,e,i),n.push([i[0],i[1],i[2]]),this.geometry=[n]}setGeometryFromFrustum(t){const e=[];t.lines.forEach((t=>{e.push([t.origin[0],t.origin[1],t.origin[2]]),e.push([t.endpoint[0],t.endpoint[1],t.endpoint[2]])})),this.geometry=[e]}setGeometryFromBoundedPlane(t){const e=[],r=t.origin,i=t.basis1,s=t.basis2,n=.5,o=(0,a.c)(),h=(0,a.c)(),l=(0,a.c)(),c=(0,a.c)();o[0]=r[0]-i[0]*n-s[0]*n,o[1]=r[1]-i[1]*n-s[1]*n,o[2]=r[2]-i[2]*n-s[2]*n,h[0]=r[0]-i[0]*n+s[0]*n,h[1]=r[1]-i[1]*n+s[1]*n,h[2]=r[2]-i[2]*n+s[2]*n,l[0]=r[0]+i[0]*n+s[0]*n,l[1]=r[1]+i[1]*n+s[1]*n,l[2]=r[2]+i[2]*n+s[2]*n,c[0]=r[0]+i[0]*n-s[0]*n,c[1]=r[1]+i[1]*n-s[1]*n,c[2]=r[2]+i[2]*n-s[2]*n,e.push([o[0],o[1],o[2]]),e.push([h[0],h[1],h[2]]),e.push([l[0],l[1],l[2]]),e.push([c[0],c[1],c[2]]),e.push([o[0],o[1],o[2]]),this.geometry=[e]}setGeometryFromSegment(t){const e=t.endRenderSpace;this.transform=(0,s.f)(_,e);const{points:r}=t.createRenderGeometry(e,this.view.renderCoordsHelper);this.geometry=[r]}setGeometryFromSegments(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.Z;this.transform=(0,s.f)(_,e),this.geometry=t.map((t=>t.createRenderGeometry(e,this.view.renderCoordsHelper).points))}get renderOccluded(){return this._renderOccluded}set renderOccluded(t){t!==this._renderOccluded&&(this._renderOccluded=t,this._updateMaterial())}get geometry(){return this._geometry}set geometry(t){this._geometry=t,this.recreateGeometry()}get width(){return this._width}set width(t){t!==this._width&&(this._width=t,this._updateMaterial())}get color(){return this._color}set color(t){(0,h.g)(t,this._color)||((0,h.c)(this._color,t),this._updateMaterial())}get innerWidth(){return this._innerWidth}set innerWidth(t){t!==this._innerWidth&&(this._innerWidth=t,this._updateMaterial())}get innerColor(){return this._innerColor}set innerColor(t){(0,i.pC)(t)?!(0,i.Wi)(this._innerColor)&&(0,h.g)(t,this._innerColor)||(this._innerColor=(0,h.c)((0,l.c)(),t),this._updateMaterial()):(0,i.pC)(this._innerColor)&&(this._innerColor=null,this._updateMaterial())}get stipplePattern(){return this._stipplePattern}set stipplePattern(t){const e=(0,i.pC)(t)!==(0,i.pC)(this._stipplePattern);this._stipplePattern=t,e?this.recreate():this._updateMaterial()}get stippleOffColor(){return this._stippleOffColor}set stippleOffColor(t){((0,i.Wi)(t)||(0,i.Wi)(this._stippleOffColor)||!(0,h.g)(t,this._stippleOffColor))&&(this._stippleOffColor=(0,i.pC)(t)?(0,l.a)(t):null,this._updateMaterial())}get stipplePreferContinuous(){return this._stipplePreferContinuous}set stipplePreferContinuous(t){this._stipplePreferContinuous!==t&&(this._stipplePreferContinuous=t,this._updateMaterial())}get writeDepthEnabled(){return this._writeDepthEnabled}set writeDepthEnabled(t){this._writeDepthEnabled!==t&&(this._writeDepthEnabled=t,this._updateMaterial())}get falloff(){return this._falloff}set falloff(t){t!==this._falloff&&(this._falloff=t,this._updateMaterial())}get polygonOffset(){return this._polygonOffset}set polygonOffset(t){t!==this._polygonOffset&&(this._polygonOffset=t,this._updateMaterial())}createExternalResources(){this._material=new p.U(this.materialParameters)}destroyExternalResources(){this._material=null}createGeometries(t){const e=this._createLineGeometries();if(0!==e.length)for(let r=0;r<e.length;++r){const i=(0,d.YU)(e[r]);t.addGeometry(i,this._material)}}forEachExternalMaterial(t){t(this._material)}get materialParameters(){return{width:this._width,color:this._color,stippleOffColor:this._stippleOffColor,stipplePattern:this._stipplePattern,stipplePreferContinuous:this._stipplePreferContinuous,isClosed:!1,falloff:this._falloff,innerColor:this._innerColor,innerWidth:this._innerWidth,polygonOffset:this._polygonOffset,renderOccluded:this._renderOccluded,writeDepth:this._writeDepthEnabled}}_updateMaterial(){this.attached&&this._material.setParameters(this.materialParameters)}_createLineGeometries(){const t=this.geometry;if((0,i.Wi)(t)||0===t.length)return[];const e=[];return t.forEach((t=>{const r=t.length,i=new Float64Array(3*r);t.forEach(((t,e)=>{i[3*e+0]=t[0],i[3*e+1]=t[1],i[3*e+2]=t[2]}));const s={overlayInfo:null,attributeData:{position:i},removeDuplicateStartEnd:d.NW.KEEP};e.push(s)})),e}}const _=(0,n.c)()},52168:(t,e,r)=>{r.d(e,{_:()=>c});var i=r(92026),s=r(14226),n=r(81949),o=r(86244),a=r(68401),h=r(66327),l=r(97882);class c extends o.l{constructor(t){super(t.view),this._resources=null,this._transform=(0,n.c)()}get object(){return(0,i.pC)(this._resources)?this._resources.object:null}get transform(){return this._transform}set transform(t){(0,s.c)(this._transform,t),(0,i.pC)(this._resources)&&(this._resources.object.transformation=this._transform)}recreate(){this.attached&&this.createResources()}recreateGeometry(){if((0,i.Wi)(this._resources))return;const t=this._resources.object,e=this.view._stage;e.removeMany(t.geometries),t.removeAllGeometries(),this.createGeometries(t),this.visible||t.setVisible(this.visible),e.addMany(t.geometries)}createResources(){this.destroyResources();const t=this.view._stage;if(!t)return;const e=new l.F({isPickable:!1,updatePolicy:a.jq.SYNC});t.add(e);const r=new h.T({castShadow:!1});r.transformation=this._transform,this.createExternalResources(),this.createGeometries(r),t.addMany(r.geometries),this.forEachExternalMaterial((e=>t.add(e))),t.add(r),e.add(r),this.visible||r.setVisible(!1),this._resources={layer:e,object:r}}destroyResources(){const t=this.view._stage;!(0,i.Wi)(this._resources)&&t&&(t.remove(this._resources.object),t.remove(this._resources.layer),this.forEachExternalMaterial((e=>{t.remove(e),e.dispose()})),t.removeMany(this._resources.object.geometries),this._resources.object.dispose(),this.destroyExternalResources(),this._resources=null)}updateVisibility(t){(0,i.Wi)(this._resources)||this._resources.object.setVisible(t)}}},86244:(t,e,r)=>{r.d(e,{l:()=>i});class i{constructor(t){this._attached=!1,this._resourcesCreated=!1,this._visible=!0,this.view=t,this.view.watch("ready",(t=>{this._resourcesCreated&&(t?this._createResources():this._destroyResources())}))}applyProps(t){let e=!1;for(const r in t)r in this?"attached"===r?e=t[r]:this[r]=t[r]:console.error("Cannot set unknown property",r);this.attached=e}destroy(){this.attached=!1}get attached(){return this._attached}set attached(t){t!==this._attached&&this.view._stage&&(this._attached=t,this._attached&&!this._resourcesCreated?this._createResources():!this._attached&&this._resourcesCreated&&this._destroyResources())}get visible(){return this._visible}set visible(t){t!==this._visible&&(this._visible=t,this.attached&&this.updateVisibility(t))}_createResources(){this.createResources(),this._resourcesCreated=!0,this.visible||this.updateVisibility(!1)}_destroyResources(){this.destroyResources(),this._resourcesCreated=!1}}},9052:(t,e,r)=>{r.d(e,{u4:()=>c,y$:()=>l});var i=r(11186),s=r(71353),n=r(79803),o=r(92183),a=r(51378),h=r(80064);class l{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,s.c)(),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,s.c)();this.startRenderSpace=t,this.endRenderSpace=e,this.type="euclidean"}eval(t,e,r){return(0,i.e)(e,this.startRenderSpace,this.endRenderSpace,t),r&&((0,i.f)(r,this.endRenderSpace,this.startRenderSpace),(0,i.n)(r,r)),e}createRenderGeometry(t,e){const r=[],s=[],n=(e,n)=>{const o=u;(0,i.f)(o,e,t),r.push([o[0],o[1],o[2]]),s.push([n[0],n[1],n[2]])},o=e.worldUpAtPosition(this.eval(.5,d),a.WM.get());return n(this.startRenderSpace,o),n(this.endRenderSpace,o),{points:r,normals:s}}}class c{constructor(t,e,r){this.startRenderSpace=t,this.endRenderSpace=e,this.renderSpatialReference=r,this.type="geodesic",this._start=(0,s.c)(),this._end=(0,s.c)(),this._pcpf=(0,o.rS)(r),this._project=(0,n.Up)(r,this._pcpf),this._projectIn(t,this._start),this._projectIn(e,this._end)}_projectIn(t,e){this._project?(0,n.SH)(t,this.renderSpatialReference,e,this._pcpf):(0,i.g)(e,t)}eval(t,e,r){if(this._project)if(r){const s=u;(0,h.ek)(this._start,this._end,t,e,s),(0,i.b)(p,e,s),(0,n.SH)(e,this._pcpf,e,this.renderSpatialReference),(0,n.SH)(p,this._pcpf,p,this.renderSpatialReference),(0,i.f)(r,p,e),(0,i.n)(r,r)}else(0,h.ZA)(this._start,this._end,t,e),(0,n.SH)(e,this._pcpf,e,this.renderSpatialReference);else(0,i.e)(e,this._start,this._end,t),r&&((0,i.f)(r,this._end,this._start),(0,i.n)(r,r));return e}createRenderGeometry(t,e){const r=[],s=[],n=(e,n)=>{const o=p;(0,i.f)(o,e,t),r.push([o[0],o[1],o[2]]),s.push([n[0],n[1],n[2]])};for(let i=0;i<128;++i){const t=i/127,r=d,s=u;this.eval(t,r),e.worldUpAtPosition(r,s),n(r,s)}return{points:r,normals:s}}}const d=(0,s.c)(),u=(0,s.c)(),p=(0,s.c)()}}]);
//# sourceMappingURL=3987.7295f1b9.chunk.js.map