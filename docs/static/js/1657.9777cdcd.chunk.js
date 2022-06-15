"use strict";(globalThis.webpackChunkgeowebmap=globalThis.webpackChunkgeowebmap||[]).push([[1657],{13491:(e,t,n)=>{n.d(t,{Q:()=>a});var i=n(63780),s=n(92026),r=n(10199),o=n(36231);class a{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,t=arguments.length>1?arguments[1]:void 0;this.compareMinX=h,this.compareMinY=c,this._toBBox=function(e){return e},this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),t&&("function"==typeof t?this._toBBox=t:this._initFormat(t)),this.clear()}destroy(){this.clear(),x.prune(),b.prune(),w.prune(),B.prune()}all(e){this._all(this.data,e)}search(e,t){let n=this.data;const i=this._toBBox;if(_(e,n))for(x.clear();n;){for(let s=0,r=n.children.length;s<r;s++){const r=n.children[s],o=n.leaf?i(r):r;_(e,o)&&(n.leaf?t(r):g(e,o)?this._all(r,t):x.push(r))}n=x.pop()}}collides(e){let t=this.data;const n=this._toBBox;if(!_(e,t))return!1;for(x.clear();t;){for(let i=0,s=t.children.length;i<s;i++){const s=t.children[i],r=t.leaf?n(s):s;if(_(e,r)){if(t.leaf||g(e,r))return!0;x.push(s)}}t=x.pop()}return!1}load(e){if(!e.length)return this;if(e.length<this._minEntries){for(let t=0,n=e.length;t<n;t++)this.insert(e[t]);return this}let t=this._build(e.slice(0,e.length),0,e.length-1,0);if(this.data.children.length)if(this.data.height===t.height)this._splitRoot(this.data,t);else{if(this.data.height<t.height){const e=this.data;this.data=t,t=e}this._insert(t,this.data.height-t.height-1,!0)}else this.data=t;return this}insert(e){return e&&this._insert(e,this.data.height-1),this}clear(){return this.data=new v([]),this}remove(e){if(!e)return this;let t,n=this.data,r=null,o=0,a=!1;const l=this._toBBox(e);for(w.clear(),B.clear();n||w.length>0;){var u;if(n||(n=(0,s.j0)(w.pop()),r=w.data[w.length-1],o=null!=(u=B.pop())?u:0,a=!0),n.leaf&&(t=(0,i.cq)(n.children,e,n.children.length,n.indexHint),-1!==t))return n.children.splice(t,1),w.push(n),this._condense(w),this;a||n.leaf||!g(n,l)?r?(o++,n=r.children[o],a=!1):n=null:(w.push(n),B.push(o),o=0,r=n,n=n.children[0])}return this}toJSON(){return this.data}fromJSON(e){return this.data=e,this}_all(e,t){let n=e;for(b.clear();n;){var i;if(!0===n.leaf)for(const e of n.children)t(e);else b.pushArray(n.children);n=null!=(i=b.pop())?i:null}}_build(e,t,n,i){const s=n-t+1;let r=this._maxEntries;if(s<=r){const i=new v(e.slice(t,n+1));return l(i,this._toBBox),i}i||(i=Math.ceil(Math.log(s)/Math.log(r)),r=Math.ceil(s/r**(i-1)));const o=new E([]);o.height=i;const a=Math.ceil(s/r),u=a*Math.ceil(Math.sqrt(r));I(e,t,n,u,this.compareMinX);for(let l=t;l<=n;l+=u){const t=Math.min(l+u-1,n);I(e,l,t,a,this.compareMinY);for(let n=l;n<=t;n+=a){const s=Math.min(n+a-1,t);o.children.push(this._build(e,n,s,i-1))}}return l(o,this._toBBox),o}_chooseSubtree(e,t,n,i){for(;i.push(t),!0!==t.leaf&&i.length-1!==n;){let n,i=1/0,s=1/0;for(let r=0,o=t.children.length;r<o;r++){const o=t.children[r],a=p(o),l=m(e,o)-a;l<s?(s=l,i=a<i?a:i,n=o):l===s&&a<i&&(i=a,n=o)}t=n||t.children[0]}return t}_insert(e,t,n){const i=this._toBBox,s=n?e:i(e);w.clear();const r=this._chooseSubtree(s,this.data,t,w);for(r.children.push(e),d(r,s);t>=0&&w.data[t].children.length>this._maxEntries;)this._split(w,t),t--;this._adjustParentBBoxes(s,w,t)}_split(e,t){const n=e.data[t],i=n.children.length,s=this._minEntries;this._chooseSplitAxis(n,s,i);const r=this._chooseSplitIndex(n,s,i);if(!r)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const o=n.children.splice(r,n.children.length-r),a=n.leaf?new v(o):new E(o);a.height=n.height,l(n,this._toBBox),l(a,this._toBBox),t?e.data[t-1].children.push(a):this._splitRoot(n,a)}_splitRoot(e,t){this.data=new E([e,t]),this.data.height=e.height+1,l(this.data,this._toBBox)}_chooseSplitIndex(e,t,n){let i,s,r;i=s=1/0;for(let o=t;o<=n-t;o++){const t=u(e,0,o,this._toBBox),a=u(e,o,n,this._toBBox),l=y(t,a),d=p(t)+p(a);l<i?(i=l,r=o,s=d<s?d:s):l===i&&d<s&&(s=d,r=o)}return r}_chooseSplitAxis(e,t,n){const i=e.leaf?this.compareMinX:h,s=e.leaf?this.compareMinY:c;this._allDistMargin(e,t,n,i)<this._allDistMargin(e,t,n,s)&&e.children.sort(i)}_allDistMargin(e,t,n,i){e.children.sort(i);const s=this._toBBox,r=u(e,0,t,s),o=u(e,n-t,n,s);let a=f(r)+f(o);for(let l=t;l<n-t;l++){const t=e.children[l];d(r,e.leaf?s(t):t),a+=f(r)}for(let l=n-t-1;l>=t;l--){const t=e.children[l];d(o,e.leaf?s(t):t),a+=f(o)}return a}_adjustParentBBoxes(e,t,n){for(let i=n;i>=0;i--)d(t.data[i],e)}_condense(e){for(let t=e.length-1;t>=0;t--){const n=e.data[t];if(0===n.children.length)if(t>0){const s=e.data[t-1],r=s.children;r.splice((0,i.cq)(r,n,r.length,s.indexHint),1)}else this.clear();else l(n,this._toBBox)}}_initFormat(e){const t=["return a"," - b",";"];this.compareMinX=new Function("a","b",t.join(e[0])),this.compareMinY=new Function("a","b",t.join(e[1])),this._toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}function l(e,t){u(e,0,e.children.length,t,e)}function u(e,t,n,i,s){s||(s=new v([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let r,o=t;o<n;o++)r=e.children[o],d(s,e.leaf?i(r):r);return s}function d(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function h(e,t){return e.minX-t.minX}function c(e,t){return e.minY-t.minY}function p(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function f(e){return e.maxX-e.minX+(e.maxY-e.minY)}function m(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function y(e,t){const n=Math.max(e.minX,t.minX),i=Math.max(e.minY,t.minY),s=Math.min(e.maxX,t.maxX),r=Math.min(e.maxY,t.maxY);return Math.max(0,s-n)*Math.max(0,r-i)}function g(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function _(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function I(e,t,n,i,r){const a=[t,n];for(;a.length;){const t=(0,s.j0)(a.pop()),n=(0,s.j0)(a.pop());if(t-n<=i)continue;const l=n+Math.ceil((t-n)/i/2)*i;(0,o.q)(e,l,n,t,r),a.push(n,l,l,t)}}const x=new r.Z,b=new r.Z,w=new r.Z,B=new r.Z({deallocator:void 0});class F extends class{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}{constructor(){super(...arguments),this.height=1,this.indexHint=new i.SO}}class v extends F{constructor(e){super(),this.children=e,this.leaf=!0}}class E extends F{constructor(e){super(),this.children=e,this.leaf=!1}}},66020:(e,t,n)=>{n.d(t,{H:()=>o});var i=n(93169),s=n(13491);const r={minX:0,minY:0,maxX:0,maxY:0};class o{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new s.Q(9,(0,i.Z)("esri-csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach(((n,i)=>{e[t++]=i})),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter((e=>this._idByBounds.has(e)))),this._boundsToLoad.length=0)}}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex(),function(e,t,n){r.minX=t[0],r.minY=t[1],r.maxX=t[2],r.maxY=t[3],e.search(r,n)}(this._index,e,(e=>t(this._idByBounds.get(e))))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},68928:(e,t,n)=>{n.d(t,{Z:()=>c});var i=n(10064),s=n(91505),r=n(32718),o=n(92026),a=n(41414),l=n(65156),u=n(83406),d=n(66020),h=n(77835);class c{constructor(e){this.geometryInfo=e,this._boundsStore=new d.H,this._featuresById=new Map,this._markedIds=new Set,this.events=new s.Z,this.featureAdapter=h.n}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){if(!this.numFeatures)return null;const e=(0,l.Ue)(l.Gv);return this._featuresById.forEach((t=>{const n=this._boundsStore.get(t.objectId);n&&(e[0]=Math.min(n[0],e[0]),e[1]=Math.min(n[1],e[1]),e[2]=Math.max(n[2],e[2]),e[3]=Math.max(n[3],e[3]))})),e}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{(0,o.pC)(t.geometry)&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t,n){for(const i of e){const e=this._boundsStore.get(i.objectId);e&&t((0,a.JR)(n,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach((t=>e(t)))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach(((t,n)=>{this._markedIds.has(n)||(e=!0,this._remove(t))})),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;const t=e.objectId;if(null==t)return void r.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new i.Z("featurestore:invalid-feature","feature id is missing",{feature:e}));const n=this._featuresById.get(t);let s;if(this._markedIds.add(t),n?(e.displayId=n.displayId,s=this._boundsStore.get(t),this._boundsStore.delete(t)):(0,o.pC)(this.onFeatureAdd)&&this.onFeatureAdd(e),(0,o.Wi)(e.geometry)||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);s=(0,u.$)((0,o.pC)(s)?s:(0,l.Ue)(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),(0,o.pC)(s)&&this._boundsStore.set(t,s),this._featuresById.set(t,e)}_remove(e){return(0,o.pC)(this.onFeatureRemove)&&this.onFeatureRemove(e),this._markedIds.delete(e.objectId),this._boundsStore.delete(e.objectId),this._featuresById.delete(e.objectId),e}}},77835:(e,t,n)=>{n.d(t,{n:()=>a});var i=n(92026),s=n(85403),r=n(3182),o=n(80457);const a={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new r.u_(t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>((0,i.Wi)(e.centroid)&&(e.centroid=(0,s.Y)(new o.Z,e.geometry,t.hasZ,t.hasM)),e.centroid)}},51657:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var i=n(76200),s=n(10064),r=n(32718),o=n(92026),a=n(66978),l=n(77981),u=n(92975),d=n(83406),h=n(68928),c=n(19995),p=n(83706),f=n(47615),m=n(63543),y=n(68808),g=n(52410),_=n(85249),I=n(80031);const x={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class b{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.loadOptions={url:e.url,customParameters:e.customParameters};const n=[];await this._checkProjection(e.spatialReference);let i=null;e.url&&(i=await this._fetch(null==t?void 0:t.signal));const r=(0,f.my)(i,{geometryType:e.geometryType}),o=e.fields||r.fields||[],a=null!=e.hasZ?e.hasZ:r.hasZ,l=r.geometryType,d=e.objectIdField||r.objectIdFieldName||"__OBJECTID",c=e.spatialReference||u.Zn;let y=e.timeInfo;o===r.fields&&r.unknownFields.length>0&&n.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:r.unknownFields}});let b=o.find((e=>e.name===d));b?("esriFieldTypeString"!==b.type&&(b.type="esriFieldTypeOID"),b.editable=!1,b.nullable=!1):(b={alias:d,name:d,type:"string"===r.objectIdFieldType?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},o.unshift(b));const w={};for(const u of o){if(null==u.name&&(u.name=u.alias),null==u.alias&&(u.alias=u.name),!u.name)throw new s.Z("geojson-layer:invalid-field-name","field name is missing",{field:u});if(!_.v.jsonValues.includes(u.type))throw new s.Z("geojson-layer:invalid-field-type",`invalid type for field "${u.name}"`,{field:u});if(u.name!==b.name){const e=(0,I.os)(u);void 0!==e&&(w[u.name]=e)}}this._fieldsIndex=new g.Z(o);const B=this._fieldsIndex.requiredFields.indexOf(b);if(B>-1&&this._fieldsIndex.requiredFields.splice(B,1),y){if(y.startTimeField){const e=this._fieldsIndex.get(y.startTimeField);e?(y.startTimeField=e.name,e.type="esriFieldTypeDate"):y.startTimeField=null}if(y.endTimeField){const e=this._fieldsIndex.get(y.endTimeField);e?(y.endTimeField=e.name,e.type="esriFieldTypeDate"):y.endTimeField=null}if(y.trackIdField){const e=this._fieldsIndex.get(y.trackIdField);e?y.trackIdField=e.name:(y.trackIdField=null,n.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:y}}))}y.startTimeField||y.endTimeField||(n.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:y}}),y=null)}const F=l?(0,m.bU)(l):null,v={warnings:n,featureErrors:[],layerDefinition:{...x,drawingInfo:F,templates:(0,m.Hq)(w),extent:null,geometryType:l,objectIdField:d,fields:o,hasZ:!!a,timeInfo:y}};this._queryEngine=new p.Z({fields:o,geometryType:l,hasM:!1,hasZ:a,objectIdField:d,spatialReference:c,timeInfo:y,featureStore:new h.Z({geometryType:l,hasM:!1,hasZ:a}),cacheSpatialQueries:!0}),this._createDefaultAttributes=(0,m.Dm)(w,d);const E=await this._createFeatures(i);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,E);const S=this._normalizeFeatures(E,v.warnings,v.featureErrors);if(this._queryEngine.featureStore.addMany(S),v.layerDefinition.extent=this._queryEngine.fullExtent,v.layerDefinition.timeInfo){const{start:e,end:t}=this._queryEngine.timeExtent;v.layerDefinition.timeInfo.timeExtent=[e,t]}return v}async applyEdits(e){const{spatialReference:t,geometryType:n}=this._queryEngine;return await Promise.all([(0,y.b)(t,n),(0,c._W)(e.adds,t),(0,c._W)(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this.loadOptions.customParameters=e,null==(t=this._snapshotTask)||t.abort(),this._snapshotTask=(0,a.vr)(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,e);const t=this._normalizeFeatures(e);t&&this._queryEngine.featureStore.addMany(t)}),(e=>{this._queryEngine.featureStore.clear(),(0,a.D_)(e)||r.Z.getLogger("esri.layers.GeoJSONLayer").error(new s.Z("geojson-layer:refresh","An error occurred during refresh",{error:e}))})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}async _createFeatures(e){const{geometryType:t,hasZ:n,objectIdField:i}=this._queryEngine,s=(0,f.lG)(e,{geometryType:t,hasZ:n,objectIdField:i});if(!(0,u.fS)(this._queryEngine.spatialReference,u.Zn))for(const r of s)(0,o.pC)(r.geometry)&&(r.geometry=(0,d.GH)((0,c.iV)((0,d.di)(r.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),u.Zn,this._queryEngine.spatialReference)));return s}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:n}=this.loadOptions,s=(await(0,i.default)(t,{responseType:"json",query:{...n},signal:e})).data;return await(0,f.O3)(s),s}_normalizeFeatures(e,t,n){const{objectIdField:i}=this._queryEngine,s=[];for(const r of e){const e=this._createDefaultAttributes(),o=(0,y.O0)(this._fieldsIndex,e,r.attributes,!0,t);o?null==n||n.push(o):(this._assignObjectId(e,r.attributes,!0),r.attributes=e,r.objectId=e[i],s.push(r))}return s}_applyEdits(e){const{adds:t,updates:n,deletes:i}=e,s={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(s,t),n&&n.length&&this._applyUpdateEdits(s,n),i&&i.length){for(const e of i)s.deleteResults.push((0,y.d1)(e));this._queryEngine.featureStore.removeManyById(i)}return{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:s}}_applyAddEdits(e,t){const{addResults:n}=e,{geometryType:i,hasM:s,hasZ:r,objectIdField:a,spatialReference:u,featureStore:h}=this._queryEngine,p=[];for(const d of t){if(d.geometry&&i!==(0,l.Ji)(d.geometry)){n.push((0,y.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),s=(0,y.O0)(this._fieldsIndex,t,d.attributes);if(s)n.push(s);else{if(this._assignObjectId(t,d.attributes),d.attributes=t,null!=d.uid){const t=d.attributes[a];e.uidToObjectId[d.uid]=t}(0,o.pC)(d.geometry)&&(d.geometry=(0,c.iV)((0,y.og)(d.geometry,u),d.geometry.spatialReference,u)),p.push(d),n.push((0,y.d1)(d.attributes[a]))}}h.addMany((0,d.Yn)([],p,i,r,s,a))}_applyUpdateEdits(e,t){let{updateResults:n}=e;const{geometryType:i,hasM:s,hasZ:r,objectIdField:a,spatialReference:u,featureStore:h}=this._queryEngine;for(const p of t){const{attributes:e,geometry:t}=p,f=e&&e[a];if(null==f){n.push((0,y.av)(`Identifier field ${a} missing`));continue}if(!h.has(f)){n.push((0,y.av)(`Feature with object id ${f} missing`));continue}const m=(0,d.EI)(h.getFeature(f),i,r,s);if((0,o.pC)(t)){if(i!==(0,l.Ji)(t)){n.push((0,y.av)("Incorrect geometry type."));continue}m.geometry=(0,c.iV)((0,y.og)(t,u),t.spatialReference,u)}if(e){const t=(0,y.O0)(this._fieldsIndex,m.attributes,e);if(t){n.push(t);continue}}h.add((0,d.XA)(m,i,r,s,a)),n.push((0,y.d1)(f))}}_createObjectIdGenerator(e,t){const n=e.fieldsIndex.get(e.objectIdField);if("esriFieldTypeString"===n.type)return()=>n.name+"-"+Date.now().toString(16);let i=Number.NEGATIVE_INFINITY;for(const s of t)s.objectId&&(i=Math.max(i,s.objectId));return i=Math.max(0,i)+1,()=>i++}_assignObjectId(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const i=this._queryEngine.objectIdField;e[i]=n&&i in t?t[i]:this._objectIdGenerator()}async _checkProjection(e){try{await(0,c._W)(u.Zn,e)}catch{throw new s.Z("geojson-layer","Projection not supported")}}}},47615:(e,t,n)=>{n.d(t,{O3:()=>b,lG:()=>B,my:()=>w,q9:()=>l});var i=n(10064),s=n(3182),r=n(80457),o=n(80031);const a={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function l(e){return a[e]}function*u(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*d(e){if(!e)return null;switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function h(e){for(const t of e)if(t.length>2)return!0;return!1}function c(e){let t=0;for(let n=0;n<e.length;n++){const i=e[n],s=e[(n+1)%e.length];t+=i[0]*s[1]-s[0]*i[1]}return t<=0}function p(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function f(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return g(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){for(const i of t.coordinates)g(e,i,n);return e}(e,t,n);case"MultiPolygon":return function(e,t,n){for(const i of t.coordinates){m(e,i[0],n);for(let t=1;t<i.length;t++)y(e,i[t],n)}return e}(e,t,n);case"Point":return function(e,t,n){return I(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){const i=t.coordinates;m(e,i[0],n);for(let s=1;s<i.length;s++)y(e,i[s],n);return e}(e,t,n)}}function m(e,t,n){const i=p(t);!function(e){return!c(e)}(i)?g(e,i,n):_(e,i,n)}function y(e,t,n){const i=p(t);!function(e){return c(e)}(i)?g(e,i,n):_(e,i,n)}function g(e,t,n){for(const i of t)I(e,i,n);e.lengths.push(t.length)}function _(e,t,n){for(let i=t.length-1;i>=0;i--)I(e,t[i],n);e.lengths.push(t.length)}function I(e,t,n){const[i,s,r]=t;e.coords.push(i,s),n.hasZ&&e.coords.push(r||0)}function x(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function b(e){if(!e)throw new i.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new i.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:t}=e;if(!t)return;const n="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,s=new RegExp(".*(CRS84H?|4326)$","i");if(!n||!s.test(n))throw new i.Z("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}function w(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=[],i=new Set,s=new Set;let r,a=!1,c=null,p=!1,{geometryType:f=null}=t,m=!1;for(const o of u(e)){const{geometry:e,properties:t,id:u}=o;if((!e||(f||(f=l(e.type)),l(e.type)===f))&&(a||(a=h(d(e))),p||(p=null!=u,p&&(r=typeof u,c=Object.keys(t).filter((e=>t[e]===u)))),p&&null!=u&&(c.length>1?c=c.filter((e=>t[e]===u)):1===c.length&&(c=t[c[0]]===u?c:[])),!m&&t)){let e=!0;for(const r in t){if(i.has(r))continue;const o=t[r];if(null==o){e=!1,s.add(r);continue}const a=x(o);"unknown"!==a?(s.delete(r),i.add(r),n.push({name:r,alias:r,type:a})):s.add(r)}m=e}}const y=c&&1===c.length&&c[0]||null;if(y)for(const l of n)if(l.name===y&&(0,o.H7)(l)){l.type="esriFieldTypeOID";break}return{fields:n,geometryType:f,hasZ:a,objectIdFieldName:y,objectIdFieldType:r,unknownFields:Array.from(s)}}function B(e,t){return Array.from(function*(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{geometryType:n,objectIdField:i}=t;for(const a of e){var o;const{geometry:e,properties:u,id:d}=a;if(e&&l(e.type)!==n)continue;const h=u||{};let c=null!=(o=h[i])?o:null;i&&null!=d&&!h[i]&&(h[i]=c=d);const p=new s.u_(e?f(new r.Z,e,t):null,h,null,c);yield p}}(u(e),t))}},63543:(e,t,n)=>{n.d(t,{Dm:()=>d,Hq:()=>h,MS:()=>c,bU:()=>a});var i=n(93169),s=n(84652),r=n(60480),o=n(76115);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.I4:"esriGeometryPolyline"===e?o.ET:o.lF}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let u=1;function d(e,t){if((0,i.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let n=`this.${t} = null;`;for(const t in e)n+=`this${l.test(t)?`.${t}`:`["${t}"]`} = ${JSON.stringify(e[t])};`;const i=new Function(`\n      return class AttributesClass$${u++} {\n        constructor() {\n          ${n};\n        }\n      }\n    `)();return()=>new i}catch(n){return()=>({[t]:null,...e})}}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(e)}}]}function c(e,t){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:r.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},68808:(e,t,n)=>{n.d(t,{O0:()=>h,av:()=>a,b:()=>m,d1:()=>u,og:()=>f});var i=n(92975),s=n(80031);class r{constructor(){this.code=null,this.description=null}}class o{constructor(e){this.error=new r,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function a(e){return new o(e)}class l{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function u(e){return new l(e)}const d=new Set;function h(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=arguments.length>4?arguments[4]:void 0;d.clear();for(const o in n){const l=e.get(o);if(!l)continue;const u=n[o],h=c(l,u);if(h!==u&&r&&r.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:l,originalValue:u,sanitizedValue:h}}),d.add(l.name),l&&(i||l.editable)){const e=(0,s.Qc)(l,h);if(e)return a((0,s.vP)(e,l,h));t[l.name]=h}}for(const s of e.requiredFields)if(!d.has(s.name))return a(`missing required field "${s.name}"`);return null}function c(e,t){let n=t;return"string"==typeof t&&(0,s.H7)(e)?n=parseFloat(t):null!=t&&(0,s.qN)(e)&&"string"!=typeof t&&(n=String(t)),(0,s.Pz)(n)}let p;function f(e,t){if(!e||!(0,i.JY)(t))return e;if("rings"in e||"paths"in e){if(!p)throw new TypeError("geometry engine not loaded");return p.simplify(t,e)}return e}async function m(e,t){!(0,i.JY)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return p||(p=await Promise.all([n.e(9058),n.e(3645)]).then(n.bind(n,50309)),p)}()}}}]);
//# sourceMappingURL=1657.9777cdcd.chunk.js.map