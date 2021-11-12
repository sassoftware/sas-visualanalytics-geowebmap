(this.webpackJsonpgeowebmap=this.webpackJsonpgeowebmap||[]).push([[204],{1376:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return I}));var a=r(3),i=r(4),n=r(6),o=r(7),c=r(0),s=r(1),u=(r(17),r(18),r(16),r(9)),l=r(8),p=r.n(l),b=r(14),f=r(15),O=r(69),y=r(1094),j=r(538),d=r(1151),m=r(116),v=(r(112),r(119)),B=r(25),g=r(2),h=r(48),k=r(52),R=r(1164),P=r(209),A=r(1095),N=r(56),S=r(168),w=r(147);function x(e){return P.default.fromJSON(e).features.map((function(e){return e.geometry}))}var F=function(e){Object(n.a)(r,e);var t=Object(o.a)(r);function r(e){var i;return Object(a.a)(this,r),(i=t.call(this,e)).directions=null,i.facilities=null,i.incidents=null,i.messages=null,i.pointBarriers=null,i.polylineBarriers=null,i.polygonBarriers=null,i.routes=null,i}return Object(i.a)(r,[{key:"readFacilities",value:function(e){return x(e)}},{key:"readIncidents",value:function(e){return x(e)}},{key:"readPointBarriers",value:function(e,t){return x(t.barriers)}},{key:"readPolylineBarriers",value:function(e){return x(e)}},{key:"readPolygonBarriers",value:function(e){return x(e)}},{key:"readRoutes",value:function(e){return function(e){return e.features.map((function(t){var r=k.a.fromJSON(e.spatialReference),a=v.a.fromJSON(t);return Object(g.k)(a.geometry)&&(a.geometry.spatialReference=r),a}))}(e)}}]),r}(B.a);Object(c.a)([Object(s.b)({type:[R.a]})],F.prototype,"directions",void 0),Object(c.a)([Object(s.b)({type:[N.a]})],F.prototype,"facilities",void 0),Object(c.a)([Object(h.a)("facilities")],F.prototype,"readFacilities",null),Object(c.a)([Object(s.b)({type:[N.a]})],F.prototype,"incidents",void 0),Object(c.a)([Object(h.a)("incidents")],F.prototype,"readIncidents",null),Object(c.a)([Object(s.b)({type:[A.a]})],F.prototype,"messages",void 0),Object(c.a)([Object(s.b)({type:[N.a]})],F.prototype,"pointBarriers",void 0),Object(c.a)([Object(h.a)("pointBarriers",["barriers"])],F.prototype,"readPointBarriers",null),Object(c.a)([Object(s.b)({type:[S.a]})],F.prototype,"polylineBarriers",void 0),Object(c.a)([Object(h.a)("polylineBarriers")],F.prototype,"readPolylineBarriers",null),Object(c.a)([Object(s.b)({type:[w.a]})],F.prototype,"polygonBarriers",void 0),Object(c.a)([Object(h.a)("polygonBarriers")],F.prototype,"readPolygonBarriers",null),Object(c.a)([Object(s.b)({type:[v.a]})],F.prototype,"routes",void 0),Object(c.a)([Object(h.a)("routes")],F.prototype,"readRoutes",null);var J=F=Object(c.a)([Object(u.a)("esri.rest.support.ClosestFacilitySolveResult")],F),C=Object(y.a)({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:function(e){return e.outSpatialReference.wkid}},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});function T(){return(T=Object(f.a)(p.a.mark((function e(t,r,a){var i,n,o,c,s,u,l,f,y,v,B,g,h,k,R;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=[],n=[],o={},c={},s=Object(m.c)(t),u=s.path,r.incidents&&r.incidents.features&&Object(d.a)(r.incidents.features,n,"incidents.features",o),r.facilities&&r.facilities.features&&Object(d.a)(r.facilities.features,n,"facilities.features",o),r.pointBarriers&&r.pointBarriers.features&&Object(d.a)(r.pointBarriers.features,n,"pointBarriers.features",o),r.polylineBarriers&&r.polylineBarriers.features&&Object(d.a)(r.polylineBarriers.features,n,"polylineBarriers.features",o),r.polygonBarriers&&r.polygonBarriers.features&&Object(d.a)(r.polygonBarriers.features,n,"polygonBarriers.features",o),e.next=4,Object(j.a)(n);case 4:for(f in l=e.sent,o)y=o[f],i.push(f),c[f]=l.slice(y[0],y[1]);if(!Object(d.e)(c,i)){e.next=17;break}return v=null,e.prev=8,e.next=11,Object(d.c)(u,r.apiKey,a);case 11:v=e.sent,e.next=16;break;case 14:e.prev=14,e.t0=e.catch(8);case 16:v&&!v.hasZ&&Object(d.b)(c,i);case 17:for(g in B=function(e){c[e].forEach((function(t,a){r.get(e)[a].geometry=t}))},c)B(g);return h=Object(b.a)(Object(b.a)({},a),{},{query:Object(b.a)(Object(b.a)(Object(b.a)({},s.query),C.toQueryParams(r)),{},{f:"json"})}),e.next=22,Object(O.default)("".concat(u,"/solveClosestFacility"),h);case 22:return k=e.sent,R=k.data,e.abrupt("return",J.fromJSON(R));case 25:case"end":return e.stop()}}),e,null,[[8,14]])})))).apply(this,arguments)}var q=function(e){Object(n.a)(r,e);var t=Object(o.a)(r);function r(e){var i;return Object(a.a)(this,r),(i=t.call(this,e)).url=null,i}return Object(i.a)(r,[{key:"solve",value:function(e,t){return function(e,t,r){return T.apply(this,arguments)}(this.url,e,t)}}]),r}(r(451).a);Object(c.a)([Object(s.b)()],q.prototype,"url",void 0);var I=q=Object(c.a)([Object(u.a)("esri.tasks.ClosestFacilityTask")],q)}}]);
//# sourceMappingURL=204.4be7e2ca.chunk.js.map