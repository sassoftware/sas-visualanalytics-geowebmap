"use strict";(globalThis.webpackChunkgeowebmap=globalThis.webpackChunkgeowebmap||[]).push([[5026],{60480:(e,t,s)=>{s.d(t,{g:()=>r});const r={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},15026:(e,t,s)=>{s.r(t),s.d(t,{default:()=>w});var r=s(27366),a=(s(59486),s(52639)),i=s(76200),n=s(62044),u=s(10064),o=s(93169),l=s(43404),d=s(54472),c=s(92026),p=s(18202),h=s(66978),y=s(35995),m=s(49861),g=(s(63780),s(25243),s(69912)),f=s(53866),R=s(77981),F=s(63543),b=s(62204),q=s(59301),I=s(28620),_=s(78952);const O=new l.X({originalAndCurrentFeatures:"original-and-current-features",none:"none"});const S=new Set(["Feature Layer","Table"]);let v=class extends d.Z{constructor(){super(...arguments),this.type="feature-layer",this.refresh=(0,h.Ds)((async()=>{var e,t;await this.load();const s=null==(e=this.sourceJSON.editingInfo)?void 0:e.lastEditDate;if(null==s)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const r=s!==(null==(t=this.sourceJSON.editingInfo)?void 0:t.lastEditDate);return{dataChanged:r,updates:r?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}}))}load(e){const t=(0,c.pC)(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(this.layer.sourceJSON,t)),Promise.resolve(this)}get queryTask(){const{capabilities:{query:{supportsFormatPBF:e}},parsedUrl:t,dynamicDataSource:s,infoFor3D:r,gdbVersion:a,spatialReference:i,fieldsIndex:n}=this.layer,u=(0,o.Z)("featurelayer-pbf")&&e&&(0,c.Wi)(r)?"pbf":"json";return new I.Z({url:t.path,format:u,fieldsIndex:n,infoFor3D:r,dynamicDataSource:s,gdbVersion:a,sourceSpatialReference:i})}async addAttachment(e,t){await this.load();const s=e.attributes[this.layer.objectIdField],r=this.layer.parsedUrl.path+"/"+s+"/addAttachment",a=this._getLayerRequestOptions(),n=this._getFormDataForAttachment(t,a.query);try{const e=await(0,i.default)(r,{body:n});return this._createFeatureEditResult(e.data.addAttachmentResult)}catch(u){throw this._createAttachmentErrorResult(s,u)}}async updateAttachment(e,t,s){await this.load();const r=e.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+r+"/updateAttachment",n=this._getLayerRequestOptions({query:{attachmentId:t}}),u=this._getFormDataForAttachment(s,n.query);try{const e=await(0,i.default)(a,{body:u});return this._createFeatureEditResult(e.data.updateAttachmentResult)}catch(o){throw this._createAttachmentErrorResult(r,o)}}async applyEdits(e,t){await this.load();const s=e.addFeatures.map(this._serializeFeature,this),r=e.updateFeatures.map(this._serializeFeature,this),a=this._getFeatureIds(e.deleteFeatures,null==t?void 0:t.globalIdUsed);(0,b.P)(s,r,this.layer.spatialReference);const n=[],u=[],o=[...e.deleteAttachments];for(const i of e.addAttachments)n.push(await this._serializeAttachment(i));for(const i of e.updateAttachments)u.push(await this._serializeAttachment(i));const l=n.length||u.length||o.length?{adds:n,updates:u,deletes:o}:null,d={gdbVersion:(null==t?void 0:t.gdbVersion)||this.layer.gdbVersion,rollbackOnFailure:null==t?void 0:t.rollbackOnFailureEnabled,useGlobalIds:null==t?void 0:t.globalIdUsed,returnEditMoment:null==t?void 0:t.returnEditMoment,usePreviousEditMoment:null==t?void 0:t.usePreviousEditMoment,sessionId:null==t?void 0:t.sessionId};null!=t&&t.returnServiceEditsOption?(d.edits=JSON.stringify([{id:this.layer.layerId,adds:s,updates:r,deletes:a,attachments:l}]),d.returnServiceEditsOption=O.toJSON(null==t?void 0:t.returnServiceEditsOption),d.returnServiceEditsInSourceSR=null==t?void 0:t.returnServiceEditsInSourceSR):(d.adds=s.length?JSON.stringify(s):null,d.updates=r.length?JSON.stringify(r):null,d.deletes=a.length?null!=t&&t.globalIdUsed?JSON.stringify(a):a.join(","):null,d.attachments=l&&JSON.stringify(l));const c=this._getLayerRequestOptions({method:"post",query:d}),p=null!=t&&t.returnServiceEditsOption?this.layer.url:this.layer.parsedUrl.path,h=await(0,i.default)(p+"/applyEdits",c);return this._createEditsResult(h)}async deleteAttachments(e,t){await this.load();const s=e.attributes[this.layer.objectIdField],r=this.layer.parsedUrl.path+"/"+s+"/deleteAttachments";try{return(await(0,i.default)(r,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(a){throw this._createAttachmentErrorResult(s,a)}}fetchRecomputedExtents(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=e.signal;return this.load({signal:t}).then((async()=>{const t=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:s,url:r}=this.layer,{data:a}=await(0,i.default)(`${r}/${s}`,t),{id:u,extent:o,fullExtent:l,timeExtent:d}=a,c=o||l;return{id:u,fullExtent:c&&f.Z.fromJSON(c),timeExtent:d&&n.Z.fromJSON({start:d[0],end:d[1]})}}))}async queryAttachments(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{parsedUrl:s}=this.layer,r=s.path;await this.load();const a=this._getLayerRequestOptions(t);if(!this.layer.get("capabilities.operations.supportsQueryAttachments")){const{objectIds:t}=e,s=[];for(const e of t){const t=r+"/"+e+"/attachments";s.push((0,i.default)(t,a))}return Promise.all(s).then((e=>t.map(((t,s)=>({parentObjectId:t,attachmentInfos:e[s].data.attachmentInfos}))))).then((e=>(0,q.O)(e,r)))}return this.queryTask.executeAttachmentQuery(e,a)}async queryFeatures(e,t){return await this.load(),this.queryTask.execute(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:this._createRequestQueryOptions(t)})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopFeatures(e,t){return await this.load(),this.queryTask.executeTopFeaturesQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopObjectIds(e,t){return await this.load(),this.queryTask.executeForTopIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopExtents(e,t){return await this.load(),this.queryTask.executeForTopExtents(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopCount(e,t){return await this.load(),this.queryTask.executeForTopCount(e,{...t,query:this._createRequestQueryOptions(t)})}_createRequestQueryOptions(e){const t={...this.layer.customParameters,token:this.layer.apiKey,...null==e?void 0:e.query};return this.layer.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t}async _fetchService(e,t){if(!e){const{data:s}=await(0,i.default)(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:(0,o.Z)("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:t}));e=s}this.sourceJSON=this._patchServiceJSON(e);const s=e.type;if(!S.has(s))throw new u.Z("feature-layer-source:unsupported-type",`Source type "${s}" is not supported`)}_patchServiceJSON(e){var t;if("Table"!==e.type&&e.geometryType&&(null==e||null==(t=e.drawingInfo)||!t.renderer)&&!e.defaultSymbol){const t=(0,F.bU)(e.geometryType).renderer;(0,p.RB)("drawingInfo.renderer",t,e)}return"esriGeometryMultiPatch"===e.geometryType&&e.infoFor3D&&(e.geometryType="mesh"),e}_serializeFeature(e){const{geometry:t,attributes:s}=e;return(0,c.Wi)(t)?{attributes:s}:"mesh"===t.type||"extent"===t.type?null:{geometry:t.toJSON(),attributes:s}}async _serializeAttachment(e){const{feature:t,attachment:s}=e,{globalId:r,name:a,contentType:i,data:n,uploadId:u}=s,o={globalId:r,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(t&&(o.parentGlobalId="attributes"in t?t.attributes&&t.attributes[this.layer.globalIdField]:t.globalId),u)o.uploadId=u;else if(n){const e=await async function(e){if("string"==typeof e)return(0,y.sJ)(e)||{data:e};return new Promise(((t,s)=>{const r=new FileReader;r.readAsDataURL(e),r.onload=()=>t((0,y.sJ)(r.result)),r.onerror=e=>s(e)}))}(n);o.contentType=e.mediaType,o.data=e.data,n instanceof File&&(o.name=n.name)}return a&&(o.name=a),i&&(o.contentType=i),o}_getFeatureIds(e,t){const s=e[0];return s?this._canUseGlobalIds(t,e)?this._getGlobalIdsFromFeatureIdentifier(e):"objectId"in s?this._getObjectIdsFromFeatureIdentifier(e):this._getIdsFromFeatures(e):[]}_getIdsFromFeatures(e){const t=this.layer.objectIdField;return e.map((e=>e.attributes&&e.attributes[t]))}_canUseGlobalIds(e,t){return e&&"globalId"in t[0]}_getObjectIdsFromFeatureIdentifier(e){return e.map((e=>e.objectId))}_getGlobalIdsFromFeatureIdentifier(e){return e.map((e=>e.globalId))}_createEditsResult(e){var t;const s=e.data,{layerId:r}=this.layer,a=[];let i=null;if(Array.isArray(s))for(const o of s)a.push({id:o.id,editedFeatures:o.editedFeatures}),o.id===r&&(i={addResults:o.addResults,updateResults:o.updateResults,deleteResults:o.deleteResults,attachments:o.attachments,editMoment:o.editMoment});else i=s;const n=null==(t=i)?void 0:t.attachments,u={addFeatureResults:i.addResults?i.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:i.updateResults?i.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:i.deleteResults?i.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:n&&n.addResults?n.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:n&&n.updateResults?n.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:n&&n.deleteResults?n.deleteResults.map(this._createFeatureEditResult,this):[]};if(i.editMoment&&(u.editMoment=i.editMoment),a.length>0){u.editedFeatureResults=[];for(const e of a){const{adds:t,updates:s,deletes:r,spatialReference:a}=e.editedFeatures,i=a?new _.Z(a):null;u.editedFeatureResults.push({layerId:e.id,editedFeatures:{adds:(null==t?void 0:t.map((e=>this._createEditedFeature(e,i))))||[],updates:(null==s?void 0:s.map((e=>({original:this._createEditedFeature(e[0],i),current:this._createEditedFeature(e[1],i)}))))||[],deletes:(null==r?void 0:r.map((e=>this._createEditedFeature(e,i))))||[],spatialReference:i}})}}return u}_createEditedFeature(e,t){return new a.Z({attributes:e.attributes,geometry:(0,R.im)({...e.geometry,spatialReference:t})})}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new u.Z("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_createAttachmentErrorResult(e,t){const s=t.details.messages&&t.details.messages[0]||t.message,r=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new u.Z("feature-layer-source:attachment-failure",s,{code:r})}}_getFormDataForAttachment(e,t){const s=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(s)for(const r in t){const e=t[r];null!=e&&(s.set?s.set(r,e):s.append(r,e))}return s}_getLayerRequestOptions(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{parsedUrl:t,gdbVersion:s,dynamicDataSource:r}=this.layer;return{...e,query:{gdbVersion:s,layer:r?JSON.stringify({source:r}):void 0,...t.query,f:"json",...this._createRequestQueryOptions(e)},responseType:"json"}}};(0,r._)([(0,m.Cb)()],v.prototype,"type",void 0),(0,r._)([(0,m.Cb)({constructOnly:!0})],v.prototype,"layer",void 0),(0,r._)([(0,m.Cb)({readOnly:!0})],v.prototype,"queryTask",null),v=(0,r._)([(0,g.j)("esri.layers.graphics.sources.FeatureLayerSource")],v);const w=v},63543:(e,t,s)=>{s.d(t,{Dm:()=>d,Hq:()=>c,MS:()=>p,bU:()=>u});var r=s(93169),a=s(84652),i=s(60480),n=s(76115);function u(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?n.I4:"esriGeometryPolyline"===e?n.ET:n.lF}}}const o=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let l=1;function d(e,t){if((0,r.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let s=`this.${t} = null;`;for(const t in e)s+=`this${o.test(t)?`.${t}`:`["${t}"]`} = ${JSON.stringify(e[t])};`;const r=new Function(`\n      return class AttributesClass$${l++} {\n        constructor() {\n          ${s};\n        }\n      }\n    `)();return()=>new r}catch(s){return()=>({[t]:null,...e})}}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,a.d9)(e)}}]}function p(e,t){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:i.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);
//# sourceMappingURL=5026.b2a1df45.chunk.js.map