"use strict";(globalThis.webpackChunkgeowebmap=globalThis.webpackChunkgeowebmap||[]).push([[8178],{13491:(t,e,i)=>{i.d(e,{Q:()=>o});var n=i(63780),s=i(92026),r=i(10199),a=i(36231);class o{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,e=arguments.length>1?arguments[1]:void 0;this.compareMinX=u,this.compareMinY=c,this._toBBox=function(t){return t},this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&("function"==typeof e?this._toBBox=e:this._initFormat(e)),this.clear()}destroy(){this.clear(),B.prune(),I.prune(),b.prune(),w.prune()}all(t){this._all(this.data,t)}search(t,e){let i=this.data;const n=this._toBBox;if(y(t,i))for(B.clear();i;){for(let s=0,r=i.children.length;s<r;s++){const r=i.children[s],a=i.leaf?n(r):r;y(t,a)&&(i.leaf?e(r):p(t,a)?this._all(r,e):B.push(r))}i=B.pop()}}collides(t){let e=this.data;const i=this._toBBox;if(!y(t,e))return!1;for(B.clear();e;){for(let n=0,s=e.children.length;n<s;n++){const s=e.children[n],r=e.leaf?i(s):s;if(y(t,r)){if(e.leaf||p(t,r))return!0;B.push(s)}}e=B.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let e=0,i=t.length;e<i;e++)this.insert(t[e]);return this}let e=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===e.height)this._splitRoot(this.data,e);else{if(this.data.height<e.height){const t=this.data;this.data=e,e=t}this._insert(e,this.data.height-e.height-1,!0)}else this.data=e;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=new M([]),this}remove(t){if(!t)return this;let e,i=this.data,r=null,a=0,o=!1;const h=this._toBBox(t);for(b.clear(),w.clear();i||b.length>0;){var l;if(i||(i=(0,s.j0)(b.pop()),r=b.data[b.length-1],a=null!=(l=w.pop())?l:0,o=!0),i.leaf&&(e=(0,n.cq)(i.children,t,i.children.length,i.indexHint),-1!==e))return i.children.splice(e,1),b.push(i),this._condense(b),this;o||i.leaf||!p(i,h)?r?(a++,i=r.children[a],o=!1):i=null:(b.push(i),w.push(a),a=0,r=i,i=i.children[0])}return this}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,e){let i=t;for(I.clear();i;){var n;if(!0===i.leaf)for(const t of i.children)e(t);else I.pushArray(i.children);i=null!=(n=I.pop())?n:null}}_build(t,e,i,n){const s=i-e+1;let r=this._maxEntries;if(s<=r){const n=new M(t.slice(e,i+1));return h(n,this._toBBox),n}n||(n=Math.ceil(Math.log(s)/Math.log(r)),r=Math.ceil(s/r**(n-1)));const a=new Y([]);a.height=n;const o=Math.ceil(s/r),l=o*Math.ceil(Math.sqrt(r));x(t,e,i,l,this.compareMinX);for(let h=e;h<=i;h+=l){const e=Math.min(h+l-1,i);x(t,h,e,o,this.compareMinY);for(let i=h;i<=e;i+=o){const s=Math.min(i+o-1,e);a.children.push(this._build(t,i,s,n-1))}}return h(a,this._toBBox),a}_chooseSubtree(t,e,i,n){for(;n.push(e),!0!==e.leaf&&n.length-1!==i;){let i,n=1/0,s=1/0;for(let r=0,a=e.children.length;r<a;r++){const a=e.children[r],o=m(a),h=g(t,a)-o;h<s?(s=h,n=o<n?o:n,i=a):h===s&&o<n&&(n=o,i=a)}e=i||e.children[0]}return e}_insert(t,e,i){const n=this._toBBox,s=i?t:n(t);b.clear();const r=this._chooseSubtree(s,this.data,e,b);for(r.children.push(t),d(r,s);e>=0&&b.data[e].children.length>this._maxEntries;)this._split(b,e),e--;this._adjustParentBBoxes(s,b,e)}_split(t,e){const i=t.data[e],n=i.children.length,s=this._minEntries;this._chooseSplitAxis(i,s,n);const r=this._chooseSplitIndex(i,s,n);if(!r)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const a=i.children.splice(r,i.children.length-r),o=i.leaf?new M(a):new Y(a);o.height=i.height,h(i,this._toBBox),h(o,this._toBBox),e?t.data[e-1].children.push(o):this._splitRoot(i,o)}_splitRoot(t,e){this.data=new Y([t,e]),this.data.height=t.height+1,h(this.data,this._toBBox)}_chooseSplitIndex(t,e,i){let n,s,r;n=s=1/0;for(let a=e;a<=i-e;a++){const e=l(t,0,a,this._toBBox),o=l(t,a,i,this._toBBox),h=f(e,o),d=m(e)+m(o);h<n?(n=h,r=a,s=d<s?d:s):h===n&&d<s&&(s=d,r=a)}return r}_chooseSplitAxis(t,e,i){const n=t.leaf?this.compareMinX:u,s=t.leaf?this.compareMinY:c;this._allDistMargin(t,e,i,n)<this._allDistMargin(t,e,i,s)&&t.children.sort(n)}_allDistMargin(t,e,i,n){t.children.sort(n);const s=this._toBBox,r=l(t,0,e,s),a=l(t,i-e,i,s);let o=_(r)+_(a);for(let h=e;h<i-e;h++){const e=t.children[h];d(r,t.leaf?s(e):e),o+=_(r)}for(let h=i-e-1;h>=e;h--){const e=t.children[h];d(a,t.leaf?s(e):e),o+=_(a)}return o}_adjustParentBBoxes(t,e,i){for(let n=i;n>=0;n--)d(e.data[n],t)}_condense(t){for(let e=t.length-1;e>=0;e--){const i=t.data[e];if(0===i.children.length)if(e>0){const s=t.data[e-1],r=s.children;r.splice((0,n.cq)(r,i,r.length,s.indexHint),1)}else this.clear();else h(i,this._toBBox)}}_initFormat(t){const e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function h(t,e){l(t,0,t.children.length,e,t)}function l(t,e,i,n,s){s||(s=new M([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let r,a=e;a<i;a++)r=t.children[a],d(s,t.leaf?n(r):r);return s}function d(t,e){t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY)}function u(t,e){return t.minX-e.minX}function c(t,e){return t.minY-e.minY}function m(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function _(t){return t.maxX-t.minX+(t.maxY-t.minY)}function g(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function f(t,e){const i=Math.max(t.minX,e.minX),n=Math.max(t.minY,e.minY),s=Math.min(t.maxX,e.maxX),r=Math.min(t.maxY,e.maxY);return Math.max(0,s-i)*Math.max(0,r-n)}function p(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function y(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function x(t,e,i,n,r){const o=[e,i];for(;o.length;){const e=(0,s.j0)(o.pop()),i=(0,s.j0)(o.pop());if(e-i<=n)continue;const h=i+Math.ceil((e-i)/n/2)*n;(0,a.q)(t,h,i,e,r),o.push(i,h,h,e)}}const B=new r.Z,I=new r.Z,b=new r.Z,w=new r.Z({deallocator:void 0});class v extends class{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}{constructor(){super(...arguments),this.height=1,this.indexHint=new n.SO}}class M extends v{constructor(t){super(),this.children=t,this.leaf=!0}}class Y extends v{constructor(t){super(),this.children=t,this.leaf=!1}}},66020:(t,e,i)=>{i.d(e,{H:()=>a});var n=i(93169),s=i(13491);const r={minX:0,minY:0,maxX:0,maxY:0};class a{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new s.Q(9,(0,n.Z)("esri-csp-restrictions")?t=>({minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const t=new Array(this._idByBounds.size);let e=0;this._idByBounds.forEach(((i,n)=>{t[e++]=n})),this._indexInvalid=!1,this._index.clear(),this._index.load(t)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter((t=>this._idByBounds.has(t)))),this._boundsToLoad.length=0)}}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(t){const e=this._boundsById.get(t);this._boundsById.delete(t),e&&(this._idByBounds.delete(e),this._indexInvalid||this._index.remove(e))}forEachInBounds(t,e){this._loadIndex(),function(t,e,i){r.minX=e[0],r.minY=e[1],r.maxX=e[2],r.maxY=e[3],t.search(r,i)}(this._index,t,(t=>e(this._idByBounds.get(t))))}get(t){return this._boundsById.get(t)}has(t){return this._boundsById.has(t)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(t,e){if(!this._indexInvalid){const e=this._boundsById.get(t);e&&(this._index.remove(e),this._idByBounds.delete(e))}this._boundsById.set(t,e),e&&(this._idByBounds.set(e,t),this._indexInvalid||(this._boundsToLoad.push(e),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},68928:(t,e,i)=>{i.d(e,{Z:()=>c});var n=i(10064),s=i(91505),r=i(32718),a=i(92026),o=i(41414),h=i(65156),l=i(83406),d=i(66020),u=i(77835);class c{constructor(t){this.geometryInfo=t,this._boundsStore=new d.H,this._featuresById=new Map,this._markedIds=new Set,this.events=new s.Z,this.featureAdapter=u.n}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){if(!this.numFeatures)return null;const t=(0,h.Ue)(h.Gv);return this._featuresById.forEach((e=>{const i=this._boundsStore.get(e.objectId);i&&(t[0]=Math.min(i[0],t[0]),t[1]=Math.min(i[1],t[1]),t[2]=Math.max(i[2],t[2]),t[3]=Math.max(i[3],t[3]))})),t}get storeStatistics(){let t=0;return this._featuresById.forEach((e=>{(0,a.pC)(e.geometry)&&e.geometry.coords&&(t+=e.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:t/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(t){this._add(t),this._emitChanged()}addMany(t){for(const e of t)this._add(e);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(t){const e=this._featuresById.get(t);return e?(this._remove(e),this._emitChanged(),e):null}removeManyById(t){this._boundsStore.invalidateIndex();for(const e of t){const t=this._featuresById.get(e);t&&this._remove(t)}this._emitChanged()}forEachBounds(t,e,i){for(const n of t){const t=this._boundsStore.get(n.objectId);t&&e((0,o.JR)(i,t))}}getFeature(t){return this._featuresById.get(t)}has(t){return this._featuresById.has(t)}forEach(t){this._featuresById.forEach((e=>t(e)))}forEachInBounds(t,e){this._boundsStore.forEachInBounds(t,(t=>{e(this._featuresById.get(t))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let t=!1;this._featuresById.forEach(((e,i)=>{this._markedIds.has(i)||(t=!0,this._remove(e))})),this._markedIds.clear(),t&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(t){if(!t)return;const e=t.objectId;if(null==e)return void r.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new n.Z("featurestore:invalid-feature","feature id is missing",{feature:t}));const i=this._featuresById.get(e);let s;if(this._markedIds.add(e),i?(t.displayId=i.displayId,s=this._boundsStore.get(e),this._boundsStore.delete(e)):(0,a.pC)(this.onFeatureAdd)&&this.onFeatureAdd(t),(0,a.Wi)(t.geometry)||!t.geometry.coords||!t.geometry.coords.length)return this._boundsStore.set(e,null),void this._featuresById.set(e,t);s=(0,l.$)((0,a.pC)(s)?s:(0,h.Ue)(),t.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),(0,a.pC)(s)&&this._boundsStore.set(e,s),this._featuresById.set(e,t)}_remove(t){return(0,a.pC)(this.onFeatureRemove)&&this.onFeatureRemove(t),this._markedIds.delete(t.objectId),this._boundsStore.delete(t.objectId),this._featuresById.delete(t.objectId),t}}},77835:(t,e,i)=>{i.d(e,{n:()=>o});var n=i(92026),s=i(85403),r=i(3182),a=i(80457);const o={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,e)=>new r.u_(e,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(t,e)=>((0,n.Wi)(t.centroid)&&(t.centroid=(0,s.Y)(new a.Z,t.geometry,e.hasZ,e.hasM)),t.centroid)}},58178:(t,e,i)=>{i.r(e),i.d(e,{default:()=>f});var n=i(10064),s=i(32718),r=i(92026),a=i(66978),o=i(92975),h=i(83406),l=i(68928),d=i(19995),u=i(83706),c=i(47615),m=i(68808),_=i(12622),g=i(52410);class f{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async t=>{const{objectIdField:e}=this._queryEngine,i=await(0,_.Bm)(this._getFeatureUrl,this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map((t=>t.name)),signal:t});await(0,c.O3)(i),(0,a.k_)(t);const n=(0,c.lG)(i,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:e});if(!(0,o.fS)(this._queryEngine.spatialReference,o.Zn))for(const a of n)(0,r.pC)(a.geometry)&&(a.geometry=(0,h.GH)((0,d.iV)((0,h.di)(a.geometry,this._queryEngine.geometryType,!1,!1),o.Zn,this._queryEngine.spatialReference)));let s=1;for(const r of n){const t={};(0,m.O0)(this._fieldsIndex,t,r.attributes,!0),r.attributes=t,null==r.attributes[e]&&(r.objectId=r.attributes[e]=s++)}return n}}destroy(){var t;null==(t=this._queryEngine)||t.destroy(),this._queryEngine=null}async load(t,e){const{getFeatureUrl:i,getFeatureOutputFormat:n,spatialReference:s,fields:o,geometryType:h,featureType:d,objectIdField:c,customParameters:m}=t;this._featureType=d,this._customParameters=m,this._getFeatureUrl=i,this._getFeatureOutputFormat=n,this._fieldsIndex=new g.Z(o),await this._checkProjection(s),(0,a.k_)(e),this._queryEngine=new u.Z({fields:o,geometryType:h,hasM:!1,hasZ:!1,objectIdField:c,spatialReference:s,timeInfo:null,featureStore:new l.Z({geometryType:h,hasM:!1,hasZ:!1})});const _=await this._snapshotFeatures((0,r.Wg)(e.signal));return this._queryEngine.featureStore.addMany(_),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new n.Z("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(t,e.signal)}async queryFeatureCount(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(t,e.signal)}async queryObjectIds(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(t,e.signal)}async queryExtent(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(t,e.signal)}async querySnapping(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(t,e.signal)}async refresh(t){var e;return this._customParameters=t,null==(e=this._snapshotTask)||e.abort(),this._snapshotTask=(0,a.vr)(this._snapshotFeatures),this._snapshotTask.promise.then((t=>{this._queryEngine.featureStore.clear(),t&&this._queryEngine.featureStore.addMany(t)}),(t=>{this._queryEngine.featureStore.clear(),(0,a.D_)(t)||s.Z.getLogger("esri.layers.WFSLayer").error(new n.Z("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:t}))})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(t){try{await(0,d._W)(o.Zn,t)}catch{throw new n.Z("unsupported-projection","Projection not supported",{spatialReference:t})}}}},68808:(t,e,i)=>{i.d(e,{O0:()=>u,av:()=>o,b:()=>g,d1:()=>l,og:()=>_});var n=i(92975),s=i(80031);class r{constructor(){this.code=null,this.description=null}}class a{constructor(t){this.error=new r,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t}}function o(t){return new a(t)}class h{constructor(t){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t}}function l(t){return new h(t)}const d=new Set;function u(t,e,i){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=arguments.length>4?arguments[4]:void 0;d.clear();for(const a in i){const h=t.get(a);if(!h)continue;const l=i[a],u=c(h,l);if(u!==l&&r&&r.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:h,originalValue:l,sanitizedValue:u}}),d.add(h.name),h&&(n||h.editable)){const t=(0,s.Qc)(h,u);if(t)return o((0,s.vP)(t,h,u));e[h.name]=u}}for(const s of t.requiredFields)if(!d.has(s.name))return o(`missing required field "${s.name}"`);return null}function c(t,e){let i=e;return"string"==typeof e&&(0,s.H7)(t)?i=parseFloat(e):null!=e&&(0,s.qN)(t)&&"string"!=typeof e&&(i=String(e)),(0,s.Pz)(i)}let m;function _(t,e){if(!t||!(0,n.JY)(e))return t;if("rings"in t||"paths"in t){if(!m)throw new TypeError("geometry engine not loaded");return m.simplify(e,t)}return t}async function g(t,e){!(0,n.JY)(t)||"esriGeometryPolygon"!==e&&"esriGeometryPolyline"!==e||await async function(){return m||(m=await Promise.all([i.e(9058),i.e(3645)]).then(i.bind(i,50309)),m)}()}}}]);
//# sourceMappingURL=8178.4b0e7145.chunk.js.map