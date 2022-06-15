"use strict";(globalThis.webpackChunkgeowebmap=globalThis.webpackChunkgeowebmap||[]).push([[8701],{98701:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});var r=n(27366),o=(n(59486),n(44055)),i=(n(94931),n(78451),n(34213),n(46797),n(49018),n(34999),n(79850),n(9014),n(40464)),s=n(97642),a=n(49861),l=(n(63780),n(93169),n(25243),n(69912)),p=n(27823),u=n(74184),c=n(10064),d=n(54472),y=n(92026),f=n(67213),g=n(49818),m=n(78952);let h=class extends d.Z{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getFeatureDefinition(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:n,supportedCrs:r},layer:{apiKey:o,capabilities:i,customParameters:s}}=this;return{capabilities:i,collection:e,layerDefinition:t,queryParameters:{apiKey:o,customParameters:s},spatialReference:n,supportedCrs:r}}queryExtent(e){return null}queryFeatureCount(e){return null}queryFeatures(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.queryFeaturesJSON(e,t).then((e=>g.default.fromJSON(e)))}queryFeaturesJSON(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=this.getFeatureDefinition();return this.load(t).then((()=>(0,f.yN)(n,e,t)))}queryObjectIds(e){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,t){var n;const r=new RegExp(`^${t}$`,"i");return null!=(n=e.conformsTo.some((e=>r.test(e))))&&n}_getCapabilities(e,t){var n,r,o,i,s,a,l;const p=(0,y.pC)(t)?null==(n=t.components)?void 0:n.parameters:null;return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:null!=(r=null!=(o=null==p||null==(i=p.limit)||null==(s=i.schema)?void 0:s.maximum)?o:null==p||null==(a=p.limitFeatures)||null==(l=a.schema)?void 0:l.maximum)?r:5e3,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}_getExtent(e){var t;const n=null==(t=e.extent)?void 0:t.spatial;if(!n)return null;const r=n.bbox[0],o=4===r.length,i=r[0],s=r[1],a=o?void 0:r[2];return{xmin:i,ymin:s,xmax:o?r[2]:r[3],ymax:o?r[3]:r[4],zmin:a,zmax:o?void 0:r[5],spatialReference:m.Z.WGS84.toJSON()}}_getStorageSpatialReference(e){var t;const n=null!=(t=e.storageCrs)?t:f.$9,r=(0,f.d)(n);return(0,y.Wi)(r)?m.Z.WGS84:new m.Z({wkid:r})}_getSupportedSpatialReferences(e,t){var n;const r="#/crs",o=null!=(n=e.crs)?n:[f.$9],i=o.includes(r)?o.filter((e=>e!==r)).concat(t.crs):o,s=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return i.filter((e=>!s.test(e)))}async _loadOGCServices(e,t){const n=(0,y.pC)(t)?t.signal:null,{apiKey:r,collectionId:o,customParameters:i,fields:s,geometryType:a,hasZ:l,objectIdField:u,timeInfo:d,url:g}=e,m={fields:null==s?void 0:s.map((e=>e.toJSON())),geometryType:p.P$.toJSON(a),hasZ:l,objectIdField:u,timeInfo:null==d?void 0:d.toJSON()},h={apiKey:r,customParameters:i,signal:n},b=await(0,f.gp)(g,h),[v,w]=await Promise.all([(0,f.G4)(b,h),(0,f.j)(b,h)]);if(!this._conformsToType(v,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new c.Z("ogc-feature-layer:no-geojson-support","Server does not support geojson");const S=w.collections.find((e=>e.id===o));if(!S)throw new c.Z("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const C=this._conformsToType(v,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await(0,f.eS)(b,h):null,F=await(0,f.w9)(S,m,h),I=this._getCapabilities(F.hasZ,C),T=this._getExtent(S),j=this._getStorageSpatialReference(S).toJSON(),x=this._getSupportedSpatialReferences(S,w),O=new RegExp(`^${f.Lu}`,"i"),_={};for(const p of x){const e=(0,f.d)(p);(0,y.pC)(e)&&(_[e]||(_[e]=p.replace(O,"")))}F.extent=T,this.featureDefinition={capabilities:I,collection:S,layerDefinition:F,queryParameters:{},spatialReference:j,supportedCrs:_}}};(0,r._)([(0,a.Cb)()],h.prototype,"featureDefinition",void 0),(0,r._)([(0,a.Cb)({constructOnly:!0})],h.prototype,"layer",void 0),(0,r._)([(0,a.Cb)()],h.prototype,"type",void 0),h=(0,r._)([(0,l.j)("esri.layers.graphics.sources.OGCFeatureSource")],h);const b=h;var v=n(27961),w=n(6693),S=n(46671),C=n(7632),F=n(6061),I=n(94207),T=n(29598),j=n(71684),x=n(56811),O=n(99063),_=n(45948),P=n(68118),R=n(87165),Z=n(83040),D=n(25610),k=n(80031),G=n(77748),M=n(85116),q=n(21149),E=n(81085),N=n(53866);const $=(0,D.v)();let W=class extends((0,v.V)((0,S.N)((0,C.b)((0,w.h)((0,I.c)((0,O.n)((0,x.M)((0,F.q)((0,T.I)((0,j.Q)((0,s.R)(u.Z)))))))))))){constructor(e){super(e),this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new b({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){var e;null==(e=this.source)||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then((()=>this._fetchService(e)))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}set renderer(e){(0,k.YN)(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return(0,E.eZ)(this,e)}createQuery(){return new q.Z}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var n;let r,o=!1;const i=null==t||null==(n=t.feature)?void 0:n.attributes,s=this.typeIdField&&(null==i?void 0:i[this.typeIdField]);return null!=s&&this.types&&(o=this.types.some((t=>{var n,o;return t.id==s&&(r=null==(n=t.domains)?void 0:n[e],"inherited"===(null==(o=r)?void 0:o.type)&&(r=this._getLayerDomain(e)),!0)}))),o||r||(r=this._getLayerDomain(e)),r}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(q.Z.from(e)||this.createQuery(),t))).then((e=>{var t;return null==e||null==(t=e.features)||t.forEach((e=>{e.layer=e.sourceLayer=this})),e}))}serviceSupportsSpatialReference(e){var t,n;return null!=(t=null==(n=this.source)?void 0:n.serviceSupportsSpatialReference(e))&&t}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),(0,k.YN)(this.renderer,this.fieldsIndex),(0,k.UF)(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};(0,r._)([(0,a.Cb)({readOnly:!0,json:{origins:{service:{read:!0}}}})],W.prototype,"capabilities",void 0),(0,r._)([(0,a.Cb)({type:String,json:{write:!0}})],W.prototype,"collectionId",void 0),(0,r._)([(0,a.Cb)({type:String})],W.prototype,"copyright",void 0),(0,r._)([(0,a.Cb)({readOnly:!0})],W.prototype,"defaultPopupTemplate",null),(0,r._)([(0,a.Cb)({type:String})],W.prototype,"definitionExpression",void 0),(0,r._)([(0,a.Cb)({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],W.prototype,"description",void 0),(0,r._)([(0,a.Cb)({type:String})],W.prototype,"displayField",void 0),(0,r._)([(0,a.Cb)(_.PV)],W.prototype,"elevationInfo",void 0),(0,r._)([(0,a.Cb)(P.d)],W.prototype,"featureReduction",void 0),(0,r._)([(0,a.Cb)({type:[Z.Z],json:{origins:{service:{name:"layerDefinition.fields"}}}})],W.prototype,"fields",void 0),(0,r._)([(0,a.Cb)($.fieldsIndex)],W.prototype,"fieldsIndex",void 0),(0,r._)([(0,a.Cb)({readOnly:!0,type:N.Z,json:{origins:{service:{name:"layerDefinition.extent"}}}})],W.prototype,"fullExtent",void 0),(0,r._)([(0,a.Cb)({type:p.Mk.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:p.Mk.read}}}}})],W.prototype,"geometryType",void 0),(0,r._)([(0,a.Cb)({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],W.prototype,"hasZ",void 0),(0,r._)([(0,a.Cb)({type:Boolean,readOnly:!0})],W.prototype,"isTable",null),(0,r._)([(0,a.Cb)({type:[G.Z],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:M.r},write:!0}}}})],W.prototype,"labelingInfo",void 0),(0,r._)([(0,a.Cb)(_.iR)],W.prototype,"labelsVisible",void 0),(0,r._)([(0,a.Cb)(_.rn)],W.prototype,"legendEnabled",void 0),(0,r._)([(0,a.Cb)({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],W.prototype,"objectIdField",void 0),(0,r._)([(0,a.Cb)({type:["OGCFeatureLayer"]})],W.prototype,"operationalLayerType",void 0),(0,r._)([(0,a.Cb)(_.C_)],W.prototype,"popupEnabled",void 0),(0,r._)([(0,a.Cb)({type:o.Z,json:{name:"popupInfo",write:!0}})],W.prototype,"popupTemplate",void 0),(0,r._)([(0,a.Cb)({types:i.A,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:i.o,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],W.prototype,"renderer",null),(0,r._)([(0,a.Cb)(_.YI)],W.prototype,"screenSizePerspectiveEnabled",void 0),(0,r._)([(0,a.Cb)({readOnly:!0})],W.prototype,"source",void 0),(0,r._)([(0,a.Cb)({readOnly:!0,type:m.Z,json:{origins:{service:{read:!0}}}})],W.prototype,"spatialReference",void 0),(0,r._)([(0,a.Cb)({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],W.prototype,"title",void 0),(0,r._)([(0,a.Cb)({readOnly:!0,json:{read:!1}})],W.prototype,"type",void 0),(0,r._)([(0,a.Cb)({type:String,readOnly:!0})],W.prototype,"typeIdField",void 0),(0,r._)([(0,a.Cb)({type:[R.Z]})],W.prototype,"types",void 0),(0,r._)([(0,a.Cb)(_.HQ)],W.prototype,"url",void 0),W=(0,r._)([(0,l.j)("esri.layers.OGCFeatureLayer")],W);const A=W},60480:(e,t,n)=>{n.d(t,{g:()=>r});const r={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},47615:(e,t,n)=>{n.d(t,{O3:()=>S,lG:()=>F,my:()=>C,q9:()=>l});var r=n(10064),o=n(3182),i=n(80457),s=n(80031);const a={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function l(e){return a[e]}function*p(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*u(e){if(!e)return null;switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function c(e){for(const t of e)if(t.length>2)return!0;return!1}function d(e){let t=0;for(let n=0;n<e.length;n++){const r=e[n],o=e[(n+1)%e.length];t+=r[0]*o[1]-o[0]*r[1]}return t<=0}function y(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function f(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return h(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){for(const r of t.coordinates)h(e,r,n);return e}(e,t,n);case"MultiPolygon":return function(e,t,n){for(const r of t.coordinates){g(e,r[0],n);for(let t=1;t<r.length;t++)m(e,r[t],n)}return e}(e,t,n);case"Point":return function(e,t,n){return v(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){const r=t.coordinates;g(e,r[0],n);for(let o=1;o<r.length;o++)m(e,r[o],n);return e}(e,t,n)}}function g(e,t,n){const r=y(t);!function(e){return!d(e)}(r)?h(e,r,n):b(e,r,n)}function m(e,t,n){const r=y(t);!function(e){return d(e)}(r)?h(e,r,n):b(e,r,n)}function h(e,t,n){for(const r of t)v(e,r,n);e.lengths.push(t.length)}function b(e,t,n){for(let r=t.length-1;r>=0;r--)v(e,t[r],n);e.lengths.push(t.length)}function v(e,t,n){const[r,o,i]=t;e.coords.push(r,o),n.hasZ&&e.coords.push(i||0)}function w(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function S(e){if(!e)throw new r.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new r.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:t}=e;if(!t)return;const n="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,o=new RegExp(".*(CRS84H?|4326)$","i");if(!n||!o.test(n))throw new r.Z("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}function C(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=[],r=new Set,o=new Set;let i,a=!1,d=null,y=!1,{geometryType:f=null}=t,g=!1;for(const s of p(e)){const{geometry:e,properties:t,id:p}=s;if((!e||(f||(f=l(e.type)),l(e.type)===f))&&(a||(a=c(u(e))),y||(y=null!=p,y&&(i=typeof p,d=Object.keys(t).filter((e=>t[e]===p)))),y&&null!=p&&(d.length>1?d=d.filter((e=>t[e]===p)):1===d.length&&(d=t[d[0]]===p?d:[])),!g&&t)){let e=!0;for(const i in t){if(r.has(i))continue;const s=t[i];if(null==s){e=!1,o.add(i);continue}const a=w(s);"unknown"!==a?(o.delete(i),r.add(i),n.push({name:i,alias:i,type:a})):o.add(i)}g=e}}const m=d&&1===d.length&&d[0]||null;if(m)for(const l of n)if(l.name===m&&(0,s.H7)(l)){l.type="esriFieldTypeOID";break}return{fields:n,geometryType:f,hasZ:a,objectIdFieldName:m,objectIdFieldType:i,unknownFields:Array.from(o)}}function F(e,t){return Array.from(function*(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{geometryType:n,objectIdField:r}=t;for(const a of e){var s;const{geometry:e,properties:p,id:u}=a;if(e&&l(e.type)!==n)continue;const c=p||{};let d=null!=(s=c[r])?s:null;r&&null!=u&&!c[r]&&(c[r]=d=u);const y=new o.u_(e?f(new i.Z,e,t):null,c,null,d);yield y}}(p(e),t))}},63543:(e,t,n)=>{n.d(t,{Dm:()=>u,Hq:()=>c,MS:()=>d,bU:()=>a});var r=n(93169),o=n(84652),i=n(60480),s=n(76115);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?s.I4:"esriGeometryPolyline"===e?s.ET:s.lF}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let p=1;function u(e,t){if((0,r.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let n=`this.${t} = null;`;for(const t in e)n+=`this${l.test(t)?`.${t}`:`["${t}"]`} = ${JSON.stringify(e[t])};`;const r=new Function(`\n      return class AttributesClass$${p++} {\n        constructor() {\n          ${n};\n        }\n      }\n    `)();return()=>new r}catch(n){return()=>({[t]:null,...e})}}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,o.d9)(e)}}]}function d(e,t){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:i.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},67213:(e,t,n)=>{n.d(t,{$9:()=>b,G4:()=>S,Lu:()=>h,WW:()=>j,d:()=>I,eS:()=>F,gp:()=>C,j:()=>w,w9:()=>v,yN:()=>T});n(59486);var r=n(76200),o=n(10064),i=n(32718),s=n(92026),a=n(92975),l=n(81753),p=n(83406),u=n(6908),c=n(47615),d=n(63543),y=n(52410),f=n(85249),g=n(78952);const m=i.Z.getLogger("esri.layers.graphics.sources.ogcfeature"),h="http://www.opengis.net/def/crs/",b=`${h}OGC/1.3/CRS84`;async function v(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5;const{links:a}=e,l=P(a,"items","application/geo+json")||P(a,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if((0,s.Wi)(l))throw new o.Z("ogc-feature-layer:missing-items-page","Missing items url");const{data:p}=await(0,r.default)(l.href,{signal:n.signal,query:{limit:i,...n.customParameters,token:n.apiKey},headers:{accept:"application/geo+json"}});await(0,c.O3)(p);const u=(0,c.my)(p,{geometryType:t.geometryType}),g=t.fields||u.fields||[],h=null!=t.hasZ?t.hasZ:u.hasZ,b=u.geometryType,v=t.objectIdField||u.objectIdFieldName||"OBJECTID";let w=t.timeInfo;const S=g.find((e=>e.name===v));if(S)S.type="esriFieldTypeOID",S.editable=!1,S.nullable=!1;else{if(!u.objectIdFieldType)throw new o.Z("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");g.unshift({name:v,alias:v,type:"esriFieldTypeOID",editable:!1,nullable:!1})}if(v!==u.objectIdFieldName){const e=g.find((e=>e.name===u.objectIdFieldName));e&&(e.type="esriFieldTypeInteger")}g===u.fields&&u.unknownFields.length>0&&m.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:u.unknownFields}});for(const r of g){if(null==r.name&&(r.name=r.alias),null==r.alias&&(r.alias=r.name),"esriFieldTypeOID"!==r.type&&"esriFieldTypeGlobalID"!==r.type&&(r.editable=null==r.editable||!!r.editable,r.nullable=null==r.nullable||!!r.nullable),!r.name)throw new o.Z("ogc-feature-layer:invalid-field-name","field name is missing",{field:r});if(-1===f.v.jsonValues.indexOf(r.type))throw new o.Z("ogc-feature-layer:invalid-field-type",`invalid type for field "${r.name}"`,{field:r})}if(w){const e=new y.Z(g);if(w.startTimeField){const t=e.get(w.startTimeField);t?(w.startTimeField=t.name,t.type="esriFieldTypeDate"):w.startTimeField=null}if(w.endTimeField){const t=e.get(w.endTimeField);t?(w.endTimeField=t.name,t.type="esriFieldTypeDate"):w.endTimeField=null}if(w.trackIdField){const t=e.get(w.trackIdField);t?w.trackIdField=t.name:(w.trackIdField=null,m.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:w}}))}w.startTimeField||w.endTimeField||(m.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:w}}),w=null)}return{drawingInfo:b?(0,d.bU)(b):null,geometryType:b,fields:g,hasZ:!!h,objectIdField:v,timeInfo:w}}async function w(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{links:n}=e,i=P(n,"data","application/json")||P(n,"http://www.opengis.net/def/rel/ogc/1.0/data","application/json");if((0,s.Wi)(i))throw new o.Z("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:a,customParameters:l,signal:p}=t,{data:u}=await(0,r.default)(i.href,{signal:p,headers:{accept:"application/json"},query:{...l,token:a}});return u}async function S(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{links:n}=e,i=P(n,"conformance","application/json")||P(n,"http://www.opengis.net/def/rel/ogc/1.0/conformance","application/json");if((0,s.Wi)(i))throw new o.Z("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:a,customParameters:l,signal:p}=t,{data:u}=await(0,r.default)(i.href,{signal:p,headers:{accept:"application/json"},query:{...l,token:a}});return u}async function C(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{apiKey:n,customParameters:o,signal:i}=t,{data:s}=await(0,r.default)(e,{signal:i,headers:{accept:"application/json"},query:{...o,token:n}});return s}async function F(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n="application/vnd.oai.openapi+json;version=3.0",o=P(e.links,"service-desc",n);if((0,s.Wi)(o))return m.warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:i,customParameters:a,signal:l}=t,{data:p}=await(0,r.default)(o.href,{signal:l,headers:{accept:n},query:{...a,token:i}});return p}function I(e){const t=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e),n=null==t?void 0:t.groups;if(!n)return null;const{authority:r,code:o}=n;switch(r.toLowerCase()){case"ogc":switch(o.toLowerCase()){case"crs27":return g.Z.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return g.Z.WGS84.wkid;default:return null}case"esri":case"epsg":{const e=Number.parseInt(o,10);return Number.isNaN(e)?null:e}default:return null}}async function T(e,t,n){const r=await j(e,t,n);return(0,p.cn)(r)}async function j(e,t,n){const{capabilities:{query:{maxRecordCount:i}},collection:d,layerDefinition:y,queryParameters:{apiKey:f,customParameters:m},spatialReference:h,supportedCrs:b}=e,{links:v}=d,w=P(v,"items","application/geo+json")||P(v,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if((0,s.Wi)(w))throw new o.Z("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:S,num:C,start:F,timeExtent:I,where:T}=t;if(t.objectIds)throw new o.Z("ogc-feature-layer:query-by-objectids-not-supported","Queries with objectids are not supported");const j=g.Z.fromJSON(h),O=(0,s.Pt)(t.outSpatialReference,j),R=O.isWGS84?null:x(O,b),Z=_(S,b),D=function(e){if((0,s.Wi)(e))return null;const{start:t,end:n}=e;return`${(0,s.pC)(t)?t.toISOString():".."}/${(0,s.pC)(n)?n.toISOString():".."}`}(I),k=(q=T,(0,s.Wi)(q)||!q||"1=1"===q?null:q),G=null!=C?C:null!=F&&void 0!==F?10:i,{data:M}=await(0,r.default)(w.href,{...n,query:{...m,...Z,crs:R,datetime:D,query:k,limit:G,startindex:F,token:f},headers:{accept:"application/geo+json"}});var q;let E=!1;if(M.links){E=!!M.links.find((e=>"next"===e.rel))}!E&&Number.isInteger(M.numberMatched)&&Number.isInteger(M.numberReturned)&&(E=M.numberReturned<M.numberMatched);const{fields:N,globalIdField:$,hasM:W,hasZ:A,objectIdField:L}=y,Q=y.geometryType,B=(0,c.lG)(M,{geometryType:Q,hasZ:A,objectIdField:L});if(!R&&O.isWebMercator)for(const r of B)if((0,s.pC)(r.geometry)){const e=(0,p.di)(r.geometry,Q,A,!1);e.spatialReference=g.Z.WGS84,r.geometry=(0,p.GH)((0,l.iV)(e,O))}for(const r of B)r.objectId=r.attributes[L];const J=R||!R&&O.isWebMercator?O.toJSON():a.Zn,U=new u.Z;return U.exceededTransferLimit=E,U.features=B,U.fields=N,U.geometryType=Q,U.globalIdFieldName=$,U.hasM=W,U.hasZ=A,U.objectIdFieldName=L,U.spatialReference=J,U}function x(e,t){var n,r,o;const{isWebMercator:i,wkid:s}=e;if(!s)return null;const a=i?null!=(n=null!=(r=null!=(o=t[3857])?o:t[102100])?r:t[102113])?n:t[900913]:t[e.wkid];return a?`${h}${a}`:null}function O(e){if((0,s.Wi)(e))return"";const{xmin:t,ymin:n,xmax:r,ymax:o}=e;return`${t},${n},${r},${o}`}function _(e,t){if(!function(e){return(0,s.pC)(e)&&"extent"===e.type}(e))return null;const{spatialReference:n}=e;if(!n||n.isWGS84)return{bbox:O(e)};const r=x(n,t);return(0,s.pC)(r)?{bbox:O(e),"bbox-crs":r}:n.isWebMercator?{bbox:O((0,l.iV)(e,g.Z.WGS84))}:null}function P(e,t,n){return e.find((e=>e.rel===t&&e.type===n))||e.find((e=>e.rel===t&&!e.type))}}}]);
//# sourceMappingURL=8701.7ad4a28b.chunk.js.map