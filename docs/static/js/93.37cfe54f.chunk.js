(this.webpackJsonpgeowebmap=this.webpackJsonpgeowebmap||[]).push([[93],{1018:function(e,t,r){"use strict";function n(e,t){var r;return e.isGeographic||e.isWebMercator&&(null==(r=null==t?void 0:t.geographic)||r)}r.d(t,"a",(function(){return n}))},1031:function(e,t,r){"use strict";r.d(t,"a",(function(){return O})),r.d(t,"b",(function(){return g})),r.d(t,"c",(function(){return j})),r.d(t,"d",(function(){return d})),r.d(t,"e",(function(){return m}));var n=r(2),a=r(79),o=r(106),i=r(29),c=r(36),s=r(70),l=r(53),u=r(72),f=r(1052),b=r(37),p=r(206),h=r(1018),v=r(458);function O(e,t,r){return Object(h.a)(t.spatialReference,r)?function(e,t,r){var n=t.spatialReference,a=k(t,r,z),o=new Float64Array(e.position.length),i=function(e,t,r,n){Object(p.e)(b.v.fromTypedArray(n),b.v.fromTypedArray(e),t);var a=new Float64Array(e.length);return Object(v.a)(n,a,r)}(e.position,a,n,o),c=Object(s.a)(T,a);return{position:i,normal:y(i,o,e.normal,c,n),tangent:x(i,o,e.tangent,c,n)}}(e,t,r):function(e,t,r){for(var n=new Float64Array(e.position.length),a=e.position,o=t.x,i=t.y,c=t.z||0,s=M(r?r.unit:null,t.spatialReference),l=s.horizontal,u=s.vertical,f=0;f<a.length;f+=3)n[f+0]=a[f+0]*l+o,n[f+1]=a[f+1]*l+i,n[f+2]=a[f+2]*u+c;return{position:n,normal:e.normal,tangent:e.tangent}}(e,t,r)}function g(e,t,r){var a=e.position,o=e.normal,i=e.tangent;if(Object(n.j)(t))return{position:a,normal:o,tangent:i};var c=t.localMatrix;return O({position:Object(v.h)(a,new Float64Array(a.length),c),normal:Object(n.k)(o)?Object(v.g)(o,new Float32Array(o.length),c):null,tangent:Object(n.k)(i)?Object(v.i)(i,new Float32Array(i.length),c):null},t.getOriginPoint(r),{geographic:t.geographic})}function j(e,t,r){var n;return null!=r&&r.useTransform?{vertexAttributes:{position:e.position,normal:e.normal,tangent:e.tangent},transform:new f.a({origin:[t.x,t.y,null!=(n=t.z)?n:0],geographic:Object(h.a)(t.spatialReference,r)})}:{vertexAttributes:O(e,t,r),transform:null}}function d(e,t,r){return Object(h.a)(t.spatialReference,r)?A(e,t,r):w(e,t,r)}function m(e,t,r,a){if(Object(n.j)(t))return d(e,r,a);var o=g(e,t,r.spatialReference);return r.equals(t.getOriginPoint(r.spatialReference))?w(o,r,a):Object(h.a)(r.spatialReference,a)?A(o,r,a):w(o,r,a)}function y(e,t,r,a,o){if(Object(n.j)(r))return null;var i=new Float32Array(r.length);return Object(p.a)(b.u.fromTypedArray(i),b.u.fromTypedArray(r),a),Object(v.b)(i,e,t,o,i),i}function x(e,t,r,a,o){if(Object(n.j)(r))return null;var i=new Float32Array(r.length);Object(p.a)(b.u.fromTypedArray(i,4*Float32Array.BYTES_PER_ELEMENT),b.u.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),a);for(var c=3;c<i.length;c+=4)i[c]=r[c];return Object(v.d)(i,e,t,o,i),i}function w(e,t,r){for(var n=new Float64Array(e.position.length),a=e.position,o=t.x,i=t.y,c=t.z||0,s=M(r?r.unit:null,t.spatialReference),l=s.horizontal,u=s.vertical,f=0;f<a.length;f+=3)n[f+0]=(a[f+0]-o)/l,n[f+1]=(a[f+1]-i)/l,n[f+2]=(a[f+2]-c)/u;return{position:n,normal:e.normal,tangent:e.tangent}}function A(e,t,r){var n=t.spatialReference;k(t,r,z);var a=Object(i.b)(P,z),o=new Float64Array(e.position.length),c=function(e,t,r,n){var a=Object(v.f)(e,t,n),o=b.v.fromTypedArray(a),i=new Float64Array(a.length),c=b.v.fromTypedArray(i);return Object(p.e)(c,o,r),i}(e.position,n,a,o),l=Object(s.a)(T,a);return{position:c,normal:R(e.normal,e.position,o,n,l),tangent:F(e.tangent,e.position,o,n,l)}}function k(e,t,r){Object(l.d)(e.spatialReference,[e.x,e.y,e.z||0],r,Object(u.g)(e.spatialReference));var n=M(t?t.unit:null,e.spatialReference),a=n.horizontal,o=n.vertical;return Object(i.f)(r,r,[a,a,o]),r}function R(e,t,r,a,o){if(Object(n.j)(e))return null;var i=Object(v.c)(e,t,r,a,new Float32Array(e.length)),c=b.u.fromTypedArray(i);return Object(p.a)(c,c,o),i}function F(e,t,r,a,o){if(Object(n.j)(e))return null;var i=Object(v.e)(e,t,r,a,new Float32Array(e.length)),c=b.u.fromTypedArray(i,4*Float32Array.BYTES_PER_ELEMENT);return Object(p.a)(c,c,o),i}function M(e,t){if(Object(n.j)(e))return E;var r=t.isGeographic?1:Object(a.e)(t),o=t.isGeographic?1:Object(a.g)(t),i=Object(a.c)(1,e,"meters");return{horizontal:i*r,vertical:i*o}}var z=Object(c.d)(),P=Object(c.d)(),T=Object(o.b)(),E={horizontal:1,vertical:1}},1032:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return c})),r.d(t,"e",(function(){return s}));var n=r(24),a=r(220),o=r(222),i=r(5);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return[e[0],e[1],e[2],e[3]]}function s(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c();return Object(i.m)(r,e),r[3]=t,r}function l(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c();return Object(a.h)(h,e,f(e)),Object(a.h)(v,t,f(t)),Object(a.f)(h,v,h),b(r,Object(n.r)(Object(a.c)(r,h)))}function u(e){return e}function f(e){return Object(n.h)(e[3])}function b(e,t){return e[3]=t,e}var p=[0,0,1,0],h=Object(o.b)(),v=Object(o.b)();c()},1052:function(e,t,r){"use strict";r.d(t,"a",(function(){return R}));var n,a=r(31),o=r(3),i=r(4),c=r(6),s=r(7),l=r(0),u=r(25),f=r(2),b=r(1),p=(r(17),r(18),r(16),r(9)),h=r(29),v=r(36),O=r(5),g=r(11),j=r(56),d=r(53),m=r(72),y=r(1032),x=r(37),w=r(206),A=r(454),k=n=function(e){Object(c.a)(r,e);var t=Object(s.a)(r);function r(e){var n;return Object(o.a)(this,r),(n=t.call(this,e)).origin=Object(g.e)(),n.translation=Object(g.e)(),n.rotation=Object(y.d)(),n.scale=Object(g.g)(1,1,1),n.geographic=!0,n}return Object(i.a)(r,[{key:"localMatrix",get:function(){var e=Object(v.d)();return Object(h.f)(e,e,this.scale),Object(h.d)(e,e,Object(y.a)(this.rotation),Object(y.b)(this.rotation)),Object(h.t)(e,e,this.translation),e}},{key:"localMatrixInverse",get:function(){return Object(h.b)(Object(v.d)(),this.localMatrix)}},{key:"applyLocal",value:function(e,t){return Object(O.s)(t,e,this.localMatrix)}},{key:"applyLocalInverse",value:function(e,t){return Object(O.s)(t,e,this.localMatrixInverse)}},{key:"project",value:function(e,t){var r=new Float64Array(e.length),n=x.v.fromTypedArray(r),a=x.v.fromTypedArray(e);if(this.geographic){var o=Object(m.h)(Object(m.e)(t)),i=Object(v.d)();return Object(d.d)(t,this.origin,i,o),Object(h.m)(i,i,this.localMatrix),Object(w.e)(n,a,i),Object(d.q)(r,o,0,r,t,0,r.length/3),r}var c=this.localMatrix,s=this.origin;Object(h.g)(c,v.a)?Object(A.a)(n,a):Object(w.e)(n,a,c);for(var l=0;l<r.length;l+=3)r[l+0]+=s[0],r[l+1]+=s[1],r[l+2]+=s[2];return r}},{key:"getOriginPoint",value:function(e){var t=Object(a.a)(this.origin,3),r=t[0],n=t[1],o=t[2];return new j.a({x:r,y:n,z:o,spatialReference:e})}},{key:"equals",value:function(e){return Object(f.k)(e)&&this.geographic===e.geographic&&Object(O.q)(this.origin,e.origin)&&Object(h.h)(this.localMatrix,e.localMatrix)}},{key:"clone",value:function(){var e={origin:Object(g.c)(this.origin),translation:Object(g.c)(this.translation),rotation:Object(y.d)(this.rotation),scale:Object(g.c)(this.scale),geographic:this.geographic};return new n(e)}}]),r}(u.a);Object(l.a)([Object(b.b)({type:[Number],nonNullable:!0,json:{write:!0}})],k.prototype,"origin",void 0),Object(l.a)([Object(b.b)({type:[Number],nonNullable:!0,json:{write:!0}})],k.prototype,"translation",void 0),Object(l.a)([Object(b.b)({type:[Number],nonNullable:!0,json:{write:!0}})],k.prototype,"rotation",void 0),Object(l.a)([Object(b.b)({type:[Number],nonNullable:!0,json:{write:!0}})],k.prototype,"scale",void 0),Object(l.a)([Object(b.b)({type:Boolean,nonNullable:!0,json:{write:!0}})],k.prototype,"geographic",void 0),Object(l.a)([Object(b.b)()],k.prototype,"localMatrix",null),Object(l.a)([Object(b.b)()],k.prototype,"localMatrixInverse",null);var R=k=n=Object(l.a)([Object(p.a)("esri.geometry.support.MeshTransform")],k)},1370:function(e,t,r){"use strict";r.r(t),r.d(t,"meshFeatureSetFromJSON",(function(){return Ue}));var n=r(12),a=r(119),o=r(2),i=r(61),c=r(8),s=r.n(c),l=r(15),u=r(3),f=r(4),b=r(6),p=r(7),h=r(0),v=r(20),O=r(148),g=r(16),j=r(202),d=r(23),m=r(1),y=(r(17),r(18),r(9)),x=r(11),w=r(173),A=r(56),k=r(147),R=r(1032),F=r(723),M=r(1052),z=r(724),P=r(480),T=r(53),E=r(1018),L=r(1031),C=g.a.getLogger("esri.geometry.support.meshUtils.centerAt");function S(e,t,r){var n;if(e.vertexAttributes&&e.vertexAttributes.position){var a=null!=(n=null==r?void 0:r.origin)?n:e.origin;Object(o.k)(e.transform)?(null!=(null==r?void 0:r.geographic)&&r.geographic!==e.transform.geographic&&C.warn("Specifying the 'geographic' parameter (".concat(r.geographic,") different from the Mesh transform setting (").concat(e.transform.geographic,") is not supported")),function(e,t,r){var n=t.x-r.x,a=t.y-r.y,o=t.hasZ&&r.hasZ?t.z-r.z:0,i=e.origin;e.origin=[i[0]+n,i[1]+a,i[2]+o]}(e.transform,t,a)):Object(E.a)(e.spatialReference,r)?function(e,t,r){var n=Object(L.d)(e.vertexAttributes,r,{geographic:!0}),a=Object(L.a)(n,t,{geographic:!0}),o=a.position,i=a.normal,c=a.tangent;e.vertexAttributes.position=o,e.vertexAttributes.normal=i,e.vertexAttributes.tangent=c,e.vertexAttributesChanged()}(e,t,a):function(e,t,r){var n=N,a=I;if(Object(T.u)(t,a,e.spatialReference)){if(!Object(T.u)(r,n,e.spatialReference)){var o=e.origin;n[0]=o.x,n[1]=o.y,n[2]=o.z,C.error("Failed to project specified origin (wkid:".concat(r.spatialReference.wkid,") to mesh spatial reference (wkid:").concat(e.spatialReference.wkid,")."))}(function(e,t,r){if(e)for(var n=0;n<e.length;n+=3)for(var a=0;a<3;a++)e[n+a]+=t[a]-r[a]})(e.vertexAttributes.position,a,n),e.vertexAttributesChanged()}else C.error("Failed to project centerAt location (wkid:".concat(t.spatialReference.wkid,") to mesh spatial reference (wkid:").concat(e.spatialReference.wkid,")"))}(e,t,a)}}var I=Object(x.e)(),N=Object(x.e)(),B=r(34);function U(){return(U=Object(l.a)(s.a.mark((function e(t,n,a){var i,c,l,u,f,b,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.B)(r.e(47).then(r.bind(null,1354)),a);case 2:return i=e.sent,c=i.loadGLTFMesh,e.next=6,Z(n,a);case 6:return l=e.sent,(u=c(new A.a({x:0,y:0,z:0,spatialReference:t.spatialReference}),l.url,{resolveFile:G(l),useTransform:!0,signal:Object(o.k)(a)?a.signal:null})).then((function(){return l.dispose()}),(function(){return l.dispose()})),e.next=11,u;case 11:f=e.sent,b=f.vertexAttributes,p=f.components,t.vertexAttributes=b,t.components=p;case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e){var t=Object(B.G)(e.url);return function(r){var n,a=Object(B.C)(r,t,t),o=a?a.replace(/^ *\.\//,""):null;return null!=(n=e.files.get(o))?n:r}}function Z(e,t){return Y.apply(this,arguments)}function Y(){return(Y=Object(l.a)(s.a.mark((function e(t,r){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t instanceof Blob?W.fromBlob(t):"string"==typeof t?new W(t):Array.isArray(t)?_(t,r):J(t,r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e,t){return D.apply(this,arguments)}function D(){return D=Object(l.a)(s.a.mark((function e(t,r){var a,i,c,u,f,b,p,h,O,g,j,m;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new Map,i=null,e.next=4,Object(d.l)(t.map(function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t.name,e.next=3,Z(t instanceof Blob?t:t.source,r);case 3:return e.t1=e.sent,e.abrupt("return",{name:e.t0,source:e.t1});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:c=e.sent,u=[],f=Object(n.a)(c);try{for(f.s();!(b=f.n()).done;)(p=b.value)&&(Object(d.o)(r)?p.source.dispose():u.push(p))}catch(y){f.e(y)}finally{f.f()}for(Object(d.x)(r),h=0,O=u;h<O.length;h++)g=O[h],j=g.name,m=g.source,(Object(o.j)(i)||/\.(gltf|glb)/i.test(j))&&(i=m.url),a.set(j,m.url),m.files&&m.files.forEach((function(e,t){return a.set(t,e)}));if(!Object(o.j)(i)){e.next=12;break}throw new v.a("mesh-load-external:missing-files","Missing files to load external mesh source");case 12:return e.abrupt("return",new W(i,(function(){return u.forEach((function(e){return e.source.dispose()}))}),a));case 13:case"end":return e.stop()}}),e)}))),D.apply(this,arguments)}function J(e,t){return q.apply(this,arguments)}function q(){return q=Object(l.a)(s.a.mark((function e(t,n){var a,o,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.B)(Promise.resolve().then(r.bind(null,69)),n);case 2:if(a=e.sent,o=a.default,"string"!=typeof t.multipart[0]){e.next=10;break}return e.next=7,Promise.all(t.multipart.map(function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(t,{responseType:"array-buffer"});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=t.multipart;case 11:return i=e.t0,e.abrupt("return",W.fromBlob(new Blob(i)));case 13:case"end":return e.stop()}}),e)}))),q.apply(this,arguments)}var W=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Map;Object(u.a)(this,e),this.url=t,this.dispose=r,this.files=n}return Object(f.a)(e,null,[{key:"fromBlob",value:function(t){var r=URL.createObjectURL(t);return new e(r,(function(){return URL.revokeObjectURL(r)}))}}]),e}(),X=r(70),V=r(106),H=r(36),K=r(5),Q=r(72),$=r(458),ee=g.a.getLogger("esri.geometry.support.meshUtils.offset");function te(e,t,r){e.vertexAttributes&&e.vertexAttributes.position&&(Object(o.k)(e.transform)?(null!=(null==r?void 0:r.geographic)&&r.geographic!==e.transform.geographic&&ee.warn("Specifying the 'geographic' parameter (".concat(r.geographic,") different from the Mesh transform setting (").concat(e.transform.geographic,") is not supported")),function(e,t){var r=e.origin;e.origin=Object(K.h)(Object(x.e)(),r,t)}(e.transform,t)):Object(E.a)(e.spatialReference,r)?function(e,t){var r=e.spatialReference,n=e.vertexAttributes.position,a=e.vertexAttributes.normal,i=e.vertexAttributes.tangent,c=new Float64Array(n.length),s=Object(o.k)(a)?new Float32Array(a.length):null,l=Object(o.k)(i)?new Float32Array(i.length):null,u=e.extent.center,f=ne;Object(T.d)(r,[u.x,u.y,u.z],ae,Object(Q.g)(r)),Object(X.f)(oe,ae),Object(K.z)(f,t,oe),Object($.f)(n,r,c),Object(o.k)(a)&&Object($.c)(a,n,c,r,s),Object(o.k)(i)&&Object($.e)(i,n,c,r,l),re(c,f),Object($.a)(c,n,r),Object(o.k)(a)&&Object($.b)(s,n,c,r,a),Object(o.k)(i)&&Object($.d)(l,n,c,r,i),e.vertexAttributesChanged()}(e,t):function(e,t){re(e.vertexAttributes.position,t),e.vertexAttributesChanged()}(e,t))}function re(e,t){if(e)for(var r=0;r<e.length;r+=3)for(var n=0;n<3;n++)e[r+n]+=t[n]}var ne=Object(x.e)(),ae=Object(H.d)(),oe=Object(V.b)(),ie=r(14);var ce={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[3,1,2],west:[-3,-1,2],north:[-1,3,2],south:[1,-3,2],up:[1,2,3],down:[1,-2,-3]}};function se(e,t,r){(function(e){for(var t=0;t<e.position.length;t+=3)e.position[t+2]+=.5})(e),function(e,t){if(null==t)return;var r="number"==typeof t?[t,t,t]:[null!=t.width?t.width:1,null!=t.depth?t.depth:1,null!=t.height?t.height:1];be[0]=r[0],be[4]=r[1],be[8]=r[2];for(var n=0;n<e.position.length;n+=3){for(var a=0;a<3;a++)fe[a]=e.position[n+a];Object(K.z)(fe,fe,be);for(var o=0;o<3;o++)e.position[n+o]=fe[o]}if(r[0]!==r[1]||r[1]!==r[2]){be[0]=1/r[0],be[4]=1/r[1],be[8]=1/r[2];for(var i=0;i<e.normal.length;i+=3){for(var c=0;c<3;c++)fe[c]=e.normal[i+c];Object(K.z)(fe,fe,be),Object(K.t)(fe,fe);for(var s=0;s<3;s++)e.normal[i+s]=fe[s]}}}(e,r&&r.size);var n=Object(L.c)(e,t,r),a=n.vertexAttributes,o=n.transform;return{vertexAttributes:new z.c(Object(ie.a)(Object(ie.a)({},a),{},{uv:e.uv})),transform:o,components:[new F.a({faces:e.faces,material:r&&r.material||null})],spatialReference:t.spatialReference}}var le={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},ue={south:0,east:1,north:2,west:3,up:4,down:5},fe=Object(x.e)(),be=Object(V.b)(),pe=r(29),he=g.a.getLogger("esri.geometry.support.meshUtils.rotate");function ve(e,t,r){if(e.vertexAttributes&&e.vertexAttributes.position&&0!==t[3]){var n=e.spatialReference;if(Object(o.k)(e.transform)){var a;null!=(null==r?void 0:r.geographic)&&r.geographic!==e.transform.geographic&&he.warn("Specifying the 'geographic' parameter (".concat(r.geographic,") different from the Mesh transform setting (").concat(e.transform.geographic,") is not supported"));var i=null!=(a=null==r?void 0:r.origin)?a:e.transform.getOriginPoint(n);!function(e,t,r){var n=Object(K.y)(ge,r.x,r.y,r.z),a=Object(K.l)(ge,n,e.origin);e.applyLocalInverse(a,je),e.rotation=Object(R.c)(e.rotation,t,Object(R.d)()),e.applyLocalInverse(a,a),Object(K.l)(a,a,je),e.translation=Object(K.h)(Object(x.e)(),e.translation,a)}(e.transform,t,i)}else{var c,s=null!=(c=null==r?void 0:r.origin)?c:e.origin;Object(E.a)(e.spatialReference,r)?function(e,t,r){var n=e.spatialReference,a=Object(Q.g)(n),i=xe;Object(T.u)(r,i,a)||Object(T.u)(e.origin,i,a);var c=e.vertexAttributes.position,s=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,u=new Float64Array(c.length),f=Object(o.k)(s)?new Float32Array(s.length):null,b=Object(o.k)(l)?new Float32Array(l.length):null;Object(T.d)(a,i,me,a),Object(X.f)(ye,me);var p=de;Object(K.z)(Object(R.b)(de),Object(R.b)(t),ye),p[3]=t[3],Object($.f)(c,n,u),Object(o.k)(s)&&Object($.c)(s,c,u,n,f),Object(o.k)(l)&&Object($.e)(l,c,u,n,b),Oe(u,p,3,i),Object($.a)(u,c,n),Object(o.k)(s)&&(Oe(f,p,3),Object($.b)(f,c,u,n,s)),Object(o.k)(l)&&(Oe(b,p,4),Object($.d)(b,c,u,n,l)),e.vertexAttributesChanged()}(e,t,s):function(e,t,r){var n=xe;if(!Object(T.u)(r,n,e.spatialReference)){var a=e.origin;n[0]=a.x,n[1]=a.y,n[2]=a.z,he.error("Failed to project specified origin (wkid:".concat(r.spatialReference.wkid,") to mesh spatial reference (wkid:").concat(e.spatialReference.wkid,")."))}Oe(e.vertexAttributes.position,t,3,n),Oe(e.vertexAttributes.normal,t,3),Oe(e.vertexAttributes.tangent,t,4),e.vertexAttributesChanged()}(e,t,s)}}}function Oe(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:x.b;if(!Object(o.j)(e)){Object(pe.i)(me),Object(pe.d)(me,me,Object(R.a)(t),Object(R.b)(t));for(var a=0;a<e.length;a+=r){for(var i=0;i<3;i++)ge[i]=e[a+i]-n[i];Object(K.s)(ge,ge,me);for(var c=0;c<3;c++)e[a+c]=ge[c]+n[c]}}}var ge=Object(x.e)(),je=Object(x.e)(),de=Object(R.d)(),me=Object(H.d)(),ye=Object(V.b)(),xe=Object(x.e)(),we=g.a.getLogger("esri.geometry.support.meshUtils.scale");function Ae(e,t,r){if(e.vertexAttributes&&e.vertexAttributes.position){var n=e.spatialReference;if(Object(o.k)(e.transform)){var a;null!=(null==r?void 0:r.geographic)&&r.geographic!==e.transform.geographic&&we.warn("Specifying the 'geographic' parameter (".concat(r.geographic,") different from the Mesh transform setting (").concat(e.transform.geographic,") is not supported"));var i=null!=(a=null==r?void 0:r.origin)?a:e.transform.getOriginPoint(n);!function(e,t,r){var n=Object(K.y)(Fe,r.x,r.y,r.z),a=Object(K.l)(Fe,n,e.origin);e.applyLocalInverse(a,Me);var o=Object(K.g)(Object(x.e)(),e.scale,t);e.scale=o,e.applyLocalInverse(a,a),Object(K.l)(a,a,Me),e.translation=Object(K.h)(Object(x.e)(),e.translation,a)}(e.transform,t,i)}else{var c=Object(E.a)(e.spatialReference,r),s=r&&r.origin||e.origin;c?function(e,t,r){var n=e.spatialReference,a=Object(Q.g)(n),i=ze;Object(T.u)(r,i,a)||Object(T.u)(e.origin,i,a);var c=e.vertexAttributes.position,s=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,u=new Float64Array(c.length),f=Object(o.k)(s)?new Float32Array(s.length):null,b=Object(o.k)(l)?new Float32Array(l.length):null;Object($.f)(c,n,u),Object(o.k)(s)&&Object($.c)(s,c,u,n,f),Object(o.k)(l)&&Object($.e)(l,c,u,n,b),ke(u,t,i),Object($.a)(u,c,n),Object(o.k)(s)&&Object($.b)(f,c,u,n,s),Object(o.k)(l)&&Object($.d)(b,c,u,n,l),e.vertexAttributesChanged()}(e,t,s):function(e,t,r){var n=ze;if(!Object(T.u)(r,n,e.spatialReference)){var a=e.origin;n[0]=a.x,n[1]=a.y,n[2]=a.z,we.error("Failed to project specified origin (wkid:".concat(r.spatialReference.wkid,") to mesh spatial reference (wkid:").concat(e.spatialReference.wkid,")."))}ke(e.vertexAttributes.position,t,n),e.vertexAttributesChanged()}(e,t,s)}}}function ke(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:x.b;if(e)for(var n=0;n<e.length;n+=3){for(var a=0;a<3;a++)Fe[a]=e[n+a]-r[a];Object(K.g)(Fe,Fe,t);for(var o=0;o<3;o++)e[n+o]=Fe[o]+r[o]}}var Re,Fe=Object(x.e)(),Me=Object(x.e)(),ze=Object(x.e)(),Pe=g.a.getLogger("esri.geometry.Mesh"),Te=Re=function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(u.a)(this,a),(r=t.call(this,e)).components=null,r.transform=null,r.external=null,r.hasZ=!0,r.hasM=!1,r.vertexAttributes=new z.a,r.type="mesh",r}return Object(f.a)(a,[{key:"initialize",value:function(){(Object(o.j)(this.external)||this.vertexAttributes.position.length)&&(this.loadStatus="loaded")}},{key:"hasExtent",get:function(){return!this.loaded&&Object(o.k)(this.external)&&Object(o.k)(this.external.extent)||this.loaded&&this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0)}},{key:"boundingInfo",get:function(){var e=this.vertexAttributes.position,t=this.spatialReference;if(0===e.length||this.components&&0===this.components.length)return{extent:new i.a({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:t}),center:new A.a({x:0,y:0,z:0,spatialReference:t})};for(var r=Object(o.k)(this.transform)?this.transform.project(e,t):e,n=1/0,a=1/0,c=1/0,s=-1/0,l=-1/0,u=-1/0,f=0,b=0,p=0,h=r.length,v=1/(h/3),O=0;O<h;){var g=r[O++],j=r[O++],d=r[O++];n=Math.min(n,g),a=Math.min(a,j),c=Math.min(c,d),s=Math.max(s,g),l=Math.max(l,j),u=Math.max(u,d),f+=v*g,b+=v*j,p+=v*d}return{extent:new i.a({xmin:n,ymin:a,zmin:c,xmax:s,ymax:l,zmax:u,spatialReference:t}),center:new A.a({x:f,y:b,z:p,spatialReference:t})}}},{key:"anchor",get:function(){if(Object(o.k)(this.transform))return this.transform.getOriginPoint(this.spatialReference);var e=this.boundingInfo;return new A.a({x:e.center.x,y:e.center.y,z:e.extent.zmin,spatialReference:this.spatialReference})}},{key:"origin",get:function(){return Object(o.k)(this.transform)?this.transform.getOriginPoint(this.spatialReference):this.boundingInfo.center}},{key:"extent",get:function(){return!this.loaded&&Object(o.k)(this.external)&&Object(o.k)(this.external.extent)?this.external.extent.clone():this.boundingInfo.extent}},{key:"addComponent",value:function(e){this.loaded?(this.components||(this.components=[]),this.components.push(F.a.from(e)),this.notifyChange("components")):Pe.error("addComponent()","Mesh must be loaded before applying operations")}},{key:"removeComponent",value:function(e){if(this.loaded){if(this.components){var t=this.components.indexOf(e);if(-1!==t)return this.components.splice(t,1),void this.notifyChange("components")}Pe.error("removeComponent()","Provided component is not part of the list of components")}else Pe.error("removeComponent()","Mesh must be loaded before applying operations")}},{key:"rotate",value:function(e,t,r,n){return Object(R.e)(Ee.x,e,Le),Object(R.e)(Ee.y,t,Ce),Object(R.e)(Ee.z,r,Se),Object(R.c)(Le,Ce,Le),Object(R.c)(Le,Se,Le),ve(this,Le,n),this}},{key:"offset",value:function(e,t,r,n){return this.loaded?(Ie[0]=e,Ie[1]=t,Ie[2]=r,te(this,Ie,n),this):(Pe.error("offset()","Mesh must be loaded before applying operations"),this)}},{key:"scale",value:function(e,t){return this.loaded?(Ae(this,e,t),this):(Pe.error("scale()","Mesh must be loaded before applying operations"),this)}},{key:"centerAt",value:function(e,t){return this.loaded?(S(this,e,t),this):(Pe.error("centerAt()","Mesh must be loaded before applying operations"),this)}},{key:"load",value:function(e){return Object(o.k)(this.external)&&this.addResolvingPromise(function(e,t,r){return U.apply(this,arguments)}(this,this.external.source,e)),Promise.resolve(this)}},{key:"clone",value:function(){var e=this.components?new Map:null,t=this.components?new Map:null,r={components:this.components?this.components.map((function(r){return r.cloneWithDeduplication(e,t)})):null,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),transform:Object(o.k)(this.transform)?this.transform.clone():null,external:Object(o.k)(this.external)?{source:this.external.source,extent:Object(o.k)(this.external.extent)?this.external.extent.clone():null}:null};return new Re(r)}},{key:"vertexAttributesChanged",value:function(){this.notifyChange("vertexAttributes")}},{key:"toBinaryGLTF",value:function(){var e=Object(l.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(187).then(r.bind(null,1366));case 2:return n=e.sent,a=n.toBinaryGLTF,e.abrupt("return",a(this,t));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}],[{key:"createBox",value:function(e,t){if(!(e instanceof A.a))return Pe.error(".createBox()","expected location to be a Point instance"),null;var r=new Re(se(function(){for(var e=le.faceDescriptions,t=le.faceVertexOffsets,r=le.uvScales,a=4*e.length,o=new Float64Array(3*a),i=new Float32Array(3*a),c=new Float32Array(2*a),s=new Uint32Array(2*e.length*3),l=0,u=0,f=0,b=0,p=0;p<e.length;p++){var h,v=e[p],O=l/3,g=Object(n.a)(t);try{for(g.s();!(h=g.n()).done;){var j=h.value;s[b++]=O+j}}catch(A){g.e(A)}finally{g.f()}for(var d=v.corners,m=0;m<4;m++){var y=d[m],x=0;c[f++]=.25*r[m][0]+v.uvOrigin[0],c[f++]=v.uvOrigin[1]-.25*r[m][1];for(var w=0;w<3;w++)0!==v.axis[w]?(o[l++]=.5*v.axis[w],i[u++]=v.axis[w]):(o[l++]=.5*y[x++],i[u++]=0)}}return{position:o,normal:i,uv:c,faces:s}}(),e,t));return t&&t.imageFace&&"all"!==t.imageFace?function(e,t){for(var r=e.components[0],n=r.faces,a=ue[t],i=6*a,c=new Uint32Array(6),s=new Uint32Array(n.length-6),l=0,u=0,f=0;f<n.length;f++)f>=i&&f<i+6?c[l++]=n[f]:s[u++]=n[f];if(Object(o.k)(e.vertexAttributes.uv)){for(var b=new Float32Array(e.vertexAttributes.uv),p=4*a*2,h=[0,1,1,1,1,0,0,0],v=0;v<h.length;v++)b[p+v]=h[v];e.vertexAttributes.uv=b}return e.components=[new F.a({faces:c,material:r.material}),new F.a({faces:s})],e}(r,t.imageFace):r}},{key:"createSphere",value:function(e,t){return e instanceof A.a?new Re(se(function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=Math.round(8*Math.pow(2,e)),r=2*t,n=(t-1)*(r+1)+2*r,a=new Float64Array(3*n),o=new Float32Array(3*n),i=new Float32Array(2*n),c=new Uint32Array((t-1)*r*2*3),s=0,l=0,u=0,f=0,b=0;b<=t;b++){var p=b/t*Math.PI+.5*Math.PI,h=Math.cos(p),v=Math.sin(p);fe[2]=v;for(var O=0===b||b===t,g=O?r-1:r,j=0;j<=g;j++){var d=j/g*2*Math.PI;fe[0]=-Math.sin(d)*h,fe[1]=Math.cos(d)*h;for(var m=0;m<3;m++)a[s]=.5*fe[m],o[s]=fe[m],++s;i[l++]=(j+(O?.5:0))/r,i[l++]=b/t,0!==b&&j!==r&&(b!==t&&(c[u++]=f,c[u++]=f+1,c[u++]=f-r),1!==b&&(c[u++]=f,c[u++]=f-r,c[u++]=f-r-1)),f++}}return{position:a,normal:o,uv:i,faces:c}}(t&&t.densificationFactor||0),e,t)):(Pe.error(".createSphere()","expected location to be a Point instance"),null)}},{key:"createCylinder",value:function(e,t){return e instanceof A.a?new Re(se(function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=5,r=Math.round(16*Math.pow(2,e)),n=(t-1)*(r+1)+2*r,a=new Float64Array(3*n),o=new Float32Array(3*n),i=new Float32Array(2*n),c=new Uint32Array(4*r*3),s=0,l=0,u=0,f=0,b=0,p=0;p<=t;p++)for(var h=0===p||p===t,v=p<=1||p>=t-1,O=2===p||4===p,g=h?r-1:r,j=0;j<=g;j++){var d=j/g*2*Math.PI,m=h?0:.5;fe[0]=m*Math.sin(d),fe[1]=m*-Math.cos(d),fe[2]=p<=2?.5:-.5;for(var y=0;y<3;y++)a[s++]=fe[y],o[l++]=v?2===y?p<=1?1:-1:0:2===y?0:fe[y]/m;i[u++]=(j+(h?.5:0))/r,i[u++]=p<=1?1*p/3:p<=3?1*(p-2)/3+1/3:1*(p-4)/3+2/3,O||0===p||j===r||(p!==t&&(c[f++]=b,c[f++]=b+1,c[f++]=b-r),1!==p&&(c[f++]=b,c[f++]=b-r,c[f++]=b-r-1)),b++}return{position:a,normal:o,uv:i,faces:c}}(t&&t.densificationFactor||0),e,t)):(Pe.error(".createCylinder()","expected location to be a Point instance"),null)}},{key:"createPlane",value:function(e,t){return e instanceof A.a?new Re(se(function(e){for(var t=ce.facingAxisOrderSwap[e],r=ce.position,n=ce.normal,a=new Float64Array(r.length),o=new Float32Array(n.length),i=0,c=0;c<4;c++)for(var s=i,l=0;l<3;l++){var u=t[l],f=Math.abs(u)-1,b=u>=0?1:-1;a[i]=r[s+f]*b,o[i]=n[s+f]*b,i++}return{position:a,normal:o,uv:new Float32Array(ce.uv),faces:new Uint32Array(ce.faces)}}(t&&t.facing||"up"),e,t)):(Pe.error(".createPlane()","expected location to be a Point instance"),null)}},{key:"createFromPolygon",value:function(e,t){if(!(e instanceof k.a))return Pe.error(".createFromPolygon()","expected polygon to be a Polygon instance"),null;var r=Object(P.b)(e);return new Re({vertexAttributes:new z.a({position:r.position}),components:[new F.a({faces:r.faces,shading:"flat",material:t&&t.material||null})],spatialReference:e.spatialReference})}},{key:"createFromGLTF",value:function(){var e=Object(l.a)(s.a.mark((function e(t,n,a){var o,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t instanceof A.a){e.next=2;break}throw Pe.error(".createfromGLTF()","expected location to be a Point instance"),new v.a("invalid-input","Expected location to be a Point instance");case 2:return e.next=4,Object(d.B)(r.e(47).then(r.bind(null,1354)),a);case 4:return o=e.sent,i=o.loadGLTFMesh,e.t0=Re,e.next=9,i(t,n,a);case 9:return e.t1=e.sent,e.abrupt("return",new e.t0(e.t1));case 11:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"createWithExternalSource",value:function(e,t,r){var n,a,o,i=null!=(n=null==r?void 0:r.extent)?n:null,c=null!=(a=null==r?void 0:r.transform.clone())?a:new M.a;c.origin=[e.x,e.y,null!=(o=e.z)?o:0];var s=e.spatialReference;return new Re({external:{source:t,extent:i},transform:c,spatialReference:s})}},{key:"createIncomplete",value:function(e,t){var r,n,a=null!=(r=null==t?void 0:t.transform.clone())?r:new M.a;a.origin=[e.x,e.y,null!=(n=e.z)?n:0];var o=e.spatialReference,i=new Re({transform:a,spatialReference:o});return i.addResolvingPromise(Promise.reject(new v.a("mesh-incomplete","Mesh resources are not complete"))),i}}]),a}(O.a.LoadableMixin(Object(j.b)(w.a)));Object(h.a)([Object(m.b)({type:[F.a],json:{write:!0}})],Te.prototype,"components",void 0),Object(h.a)([Object(m.b)({type:M.a,json:{write:!0}})],Te.prototype,"transform",void 0),Object(h.a)([Object(m.b)({constructOnly:!0})],Te.prototype,"external",void 0),Object(h.a)([Object(m.b)({readOnly:!0})],Te.prototype,"hasExtent",null),Object(h.a)([Object(m.b)({readOnly:!0})],Te.prototype,"boundingInfo",null),Object(h.a)([Object(m.b)({readOnly:!0})],Te.prototype,"anchor",null),Object(h.a)([Object(m.b)({readOnly:!0})],Te.prototype,"origin",null),Object(h.a)([Object(m.b)({readOnly:!0,json:{read:!1}})],Te.prototype,"extent",null),Object(h.a)([Object(m.b)({readOnly:!0,json:{read:!1,write:!0,default:!0}})],Te.prototype,"hasZ",void 0),Object(h.a)([Object(m.b)({readOnly:!0,json:{read:!1,write:!0,default:!1}})],Te.prototype,"hasM",void 0),Object(h.a)([Object(m.b)({type:z.a,nonNullable:!0,json:{write:!0}})],Te.prototype,"vertexAttributes",void 0),Te=Re=Object(h.a)([Object(y.a)("esri.geometry.Mesh")],Te);var Ee={x:Object(x.g)(1,0,0),y:Object(x.g)(0,1,0),z:Object(x.g)(0,0,1)},Le=Object(R.d)(),Ce=Object(R.d)(),Se=Object(R.d)(),Ie=Object(x.e)(),Ne=Te,Be=r(209);function Ue(e,t,r){var i=r.features;r.features=[],delete r.geometryType;var c=Be.default.fromJSON(r);c.geometryType="mesh";var s,l,u=c.spatialReference,f=Object(o.j)(e.outFields)||!e.outFields.length?function(){return{}}:(s=e.outFields.includes("*")?null:new Set(e.outFields),function(e){var t=e.attributes;if(!t)return{};if(!s)return t;for(var r in t)s.has(r)||delete t[r];return t}),b=Object(n.a)(i);try{for(b.s();!(l=b.n()).done;){var p=l.value,h=Ge(p,u,t);Object(o.k)(h)&&c.features.push(new a.a({geometry:h,attributes:f(p)}))}}catch(v){b.e(v)}finally{b.f()}return c}function Ge(e,t,r){var a=function(e){if(!e.assetMappings)return{status:0};var t,r=[],a=new Map,o=Object(n.a)(e.assetMappings);try{for(o.s();!(t=o.n()).done;){var i=t.value,c=i.seqNo,s=i.assetName,l=i.assetURL,u=i.conversionStatus;if("FAILED"===u)return{status:0};if("COMPLETED"!==u)return{status:1};if(null==c)r.push({name:s,source:l});else{var f=a.get(s),b=void 0;f?b=f.multipart:(b=[],r.push({name:s,source:{multipart:b}}),a.set(s,{multipart:b})),b[c]=l}}}catch(p){o.e(p)}finally{o.f()}return{status:2,source:r}}(e),o=a.status,c=a.source;if(0===o)return null;var s=function(e,t,r){var n=e.attributes,a=r.transformFieldRoles;return new A.a({x:n[a.originX],y:n[a.originY],z:n[a.originZ],spatialReference:t})}(e,t,r),l=i.a.fromJSON(e.geometry);l.spatialReference=t;var u=function(e,t){var r,n=e.attributes,a=e.assetMappings,o=t.transformFieldRoles;return new M.a({translation:[n[o.translationX],n[o.translationY],n[o.translationZ]],rotation:Object(R.e)([n[o.rotationX],n[o.rotationY],n[o.rotationZ]],n[o.rotationDeg]),scale:[n[o.scaleX],n[o.scaleY],n[o.scaleZ]],geographic:!(null!=(r=a.flags)&&r.includes("PROJECT_VERTICES"))})}(e,r);return 1===o?Ne.createIncomplete(s,{extent:l,transform:u}):Ne.createWithExternalSource(s,c,{extent:l,transform:u})}}}]);
//# sourceMappingURL=93.37cfe54f.chunk.js.map