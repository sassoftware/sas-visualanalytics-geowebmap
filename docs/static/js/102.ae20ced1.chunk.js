(this.webpackJsonpgeowebmap=this.webpackJsonpgeowebmap||[]).push([[102],{1005:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return y})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return h}));var a=r(3),n=r(6),o=r(7),i=r(0),s=r(25),c=r(1),u=(r(17),r(18),r(16),r(58)),p=r(9),l=function(e){Object(n.a)(r,e);var t=Object(o.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).nodesPerPage=null,e.rootIndex=0,e.lodSelectionMetricType=null,e}return r}(s.a);Object(i.a)([Object(c.b)({type:Number})],l.prototype,"nodesPerPage",void 0),Object(i.a)([Object(c.b)({type:Number})],l.prototype,"rootIndex",void 0),Object(i.a)([Object(c.b)({type:String})],l.prototype,"lodSelectionMetricType",void 0),l=Object(i.a)([Object(p.a)("esri.layer.support.I3SNodePageDefinition")],l);var d=function(e){Object(n.a)(r,e);var t=Object(o.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).factor=1,e}return r}(s.a);Object(i.a)([Object(c.b)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],d.prototype,"id",void 0),Object(i.a)([Object(c.b)({type:Number})],d.prototype,"factor",void 0),d=Object(i.a)([Object(p.a)("esri.layer.support.I3SMaterialTexture")],d);var b=function(e){Object(n.a)(r,e);var t=Object(o.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).baseColorFactor=[1,1,1,1],e.baseColorTexture=null,e.metallicRoughnessTexture=null,e.metallicFactor=1,e.roughnessFactor=1,e}return r}(s.a);Object(i.a)([Object(c.b)({type:[Number]})],b.prototype,"baseColorFactor",void 0),Object(i.a)([Object(c.b)({type:d})],b.prototype,"baseColorTexture",void 0),Object(i.a)([Object(c.b)({type:d})],b.prototype,"metallicRoughnessTexture",void 0),Object(i.a)([Object(c.b)({type:Number})],b.prototype,"metallicFactor",void 0),Object(i.a)([Object(c.b)({type:Number})],b.prototype,"roughnessFactor",void 0),b=Object(i.a)([Object(p.a)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],b);var y=function(e){Object(n.a)(r,e);var t=Object(o.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).alphaMode="opaque",e.alphaCutoff=.25,e.doubleSided=!1,e.cullFace="none",e.normalTexture=null,e.occlusionTexture=null,e.emissiveTexture=null,e.emissiveFactor=null,e.pbrMetallicRoughness=null,e}return r}(s.a);Object(i.a)([Object(u.a)({opaque:"opaque",mask:"mask",blend:"blend"})],y.prototype,"alphaMode",void 0),Object(i.a)([Object(c.b)({type:Number})],y.prototype,"alphaCutoff",void 0),Object(i.a)([Object(c.b)({type:Boolean})],y.prototype,"doubleSided",void 0),Object(i.a)([Object(u.a)({none:"none",back:"back",front:"front"})],y.prototype,"cullFace",void 0),Object(i.a)([Object(c.b)({type:d})],y.prototype,"normalTexture",void 0),Object(i.a)([Object(c.b)({type:d})],y.prototype,"occlusionTexture",void 0),Object(i.a)([Object(c.b)({type:d})],y.prototype,"emissiveTexture",void 0),Object(i.a)([Object(c.b)({type:[Number]})],y.prototype,"emissiveFactor",void 0),Object(i.a)([Object(c.b)({type:b})],y.prototype,"pbrMetallicRoughness",void 0),y=Object(i.a)([Object(p.a)("esri.layer.support.I3SMaterialDefinition")],y);var f=function(e){Object(n.a)(r,e);var t=Object(o.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return r}(s.a);Object(i.a)([Object(c.b)({type:String,json:{read:{source:["name","index"],reader:function(e,t){return null!=e?e:"".concat(t.index)}}}})],f.prototype,"name",void 0),Object(i.a)([Object(u.a)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],f.prototype,"format",void 0),f=Object(i.a)([Object(p.a)("esri.layer.support.I3STextureFormat")],f);var h=function(e){Object(n.a)(r,e);var t=Object(o.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).atlas=!1,e}return r}(s.a);Object(i.a)([Object(c.b)({type:[f]})],h.prototype,"formats",void 0),Object(i.a)([Object(c.b)({type:Boolean})],h.prototype,"atlas",void 0),h=Object(i.a)([Object(p.a)("esri.layer.support.I3STextureSetDefinition")],h);var j=function(e){Object(n.a)(r,e);var t=Object(o.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return r}(s.a);Object(i.a)([Object(u.a)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],j.prototype,"type",void 0),Object(i.a)([Object(c.b)({type:Number})],j.prototype,"component",void 0),j=Object(i.a)([Object(p.a)("esri.layer.support.I3SGeometryAttribute")],j);var O=function(e){Object(n.a)(r,e);var t=Object(o.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return r}(s.a);Object(i.a)([Object(u.a)({draco:"draco"})],O.prototype,"encoding",void 0),Object(i.a)([Object(c.b)({type:[String]})],O.prototype,"attributes",void 0),O=Object(i.a)([Object(p.a)("esri.layer.support.I3SGeometryCompressedAttributes")],O);var v=function(e){Object(n.a)(r,e);var t=Object(o.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).offset=0,e}return r}(s.a);Object(i.a)([Object(c.b)({type:Number})],v.prototype,"offset",void 0),Object(i.a)([Object(c.b)({type:j})],v.prototype,"position",void 0),Object(i.a)([Object(c.b)({type:j})],v.prototype,"normal",void 0),Object(i.a)([Object(c.b)({type:j})],v.prototype,"uv0",void 0),Object(i.a)([Object(c.b)({type:j})],v.prototype,"color",void 0),Object(i.a)([Object(c.b)({type:j})],v.prototype,"uvRegion",void 0),Object(i.a)([Object(c.b)({type:j})],v.prototype,"featureId",void 0),Object(i.a)([Object(c.b)({type:j})],v.prototype,"faceRange",void 0),Object(i.a)([Object(c.b)({type:O})],v.prototype,"compressedAttributes",void 0),v=Object(i.a)([Object(p.a)("esri.layer.support.I3SGeometryBuffer")],v);var m=function(e){Object(n.a)(r,e);var t=Object(o.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return r}(s.a);Object(i.a)([Object(u.a)({triangle:"triangle"})],m.prototype,"topology",void 0),Object(i.a)([Object(c.b)()],m.prototype,"geometryBuffers",void 0),m=Object(i.a)([Object(p.a)("esri.layer.support.I3SGeometryDefinition")],m)},1022:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var a={attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,tileMaxRecordCount:0}}},1140:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var a=r(31),n=r(8),o=r.n(n),i=r(15),s=r(3),c=r(4),u=r(85),p=r(69),l=r(2),d=r(23),b=r(360),y=r(118),f=r(270),h=function(){function e(t,r,a,n){Object(s.a)(this,e),this.parsedUrl=t,this.portalItem=r,this.apiKey=a,this.signal=n,this.rootDocument=null;var o=this.parsedUrl.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);o&&(this.urlParts={root:o[1],layerId:parseInt(o[2],10)})}return Object(c.a)(e,[{key:"fetch",value:function(){var e=Object(i.a)(o.a.mark((function e(){var t,r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.urlParts){e.next=2;break}return e.abrupt("return",null);case 2:if(null==(t=this.portalItem)){e.next=6;break}e.t0=t,e.next=9;break;case 6:return e.next=8,this.portalItemFromServiceItemId();case 8:e.t0=e.sent;case 9:if(r=e.t0,!Object(l.j)(r)){e.next=12;break}return e.abrupt("return",this.loadFromUrl());case 12:return e.next=14,this.findAndLoadRelatedPortalItem(r);case 14:return a=e.sent,e.abrupt("return",Object(l.j)(a)?null:this.loadFeatureLayerFromPortalItem(a));case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchPortalItem",value:function(){var e=Object(i.a)(o.a.mark((function e(){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.urlParts){e.next=2;break}return e.abrupt("return",null);case 2:if(null==(t=this.portalItem)){e.next=6;break}e.t0=t,e.next=9;break;case 6:return e.next=8,this.portalItemFromServiceItemId();case 8:e.t0=e.sent;case 9:return r=e.t0,e.abrupt("return",Object(l.j)(r)?null:this.findAndLoadRelatedPortalItem(r));case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchRootDocument",value:function(){var e=Object(i.a)(o.a.mark((function e(){var t,r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Object(l.k)(this.rootDocument)){e.next=2;break}return e.abrupt("return",this.rootDocument);case 2:if(!Object(l.j)(this.urlParts)){e.next=4;break}return e.abrupt("return",(this.rootDocument={},{}));case 4:return t={query:{f:"json",token:this.apiKey},responseType:"json",signal:this.signal},r="".concat(this.urlParts.root,"/SceneServer"),e.prev=5,e.next=8,Object(p.default)(r,t);case 8:a=e.sent,this.rootDocument=a.data,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),this.rootDocument={};case 15:return e.abrupt("return",this.rootDocument);case 16:case"end":return e.stop()}}),e,this,[[5,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"fetchServiceOwningPortalUrl",value:function(){var e=Object(i.a)(o.a.mark((function e(){var t,r,a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==(r=null==(t=u.b)?void 0:t.findServerInfo(this.parsedUrl.path))||!r.owningSystemUrl){e.next=3;break}return e.abrupt("return",r.owningSystemUrl);case 3:return a=this.parsedUrl.path.replace(/(.*\/rest)\/.*/i,"$1")+"/info",e.prev=4,e.next=7,Object(p.default)(a,{query:{f:"json"},responseType:"json",signal:this.signal});case 7:if(!(n=e.sent.data.owningSystemUrl)){e.next=10;break}return e.abrupt("return",n);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),Object(d.w)(e.t0);case 15:return e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,this,[[4,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"findAndLoadRelatedPortalItem",value:function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal});case 3:if(e.t0=e.sent.find((function(e){return"Feature Service"===e.type})),e.t0){e.next=6;break}e.t0=null;case 6:return e.abrupt("return",e.t0);case 9:return e.prev=9,e.t1=e.catch(0),e.abrupt("return",(Object(d.w)(e.t1),null));case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"loadFeatureLayerFromPortalItem",value:function(){var e=Object(i.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.load({signal:this.signal});case 2:return e.next=4,this.findMatchingAssociatedSublayerUrl(t.url);case 4:return r=e.sent,e.abrupt("return",new b.default({url:r,portalItem:t}).load({signal:this.signal}));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"loadFromUrl",value:function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.findMatchingAssociatedSublayerUrl("".concat(this.urlParts.root,"/FeatureServer"));case 2:return t=e.sent,e.abrupt("return",new b.default({url:t}).load({signal:this.signal}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"findMatchingAssociatedSublayerUrl",value:function(){var e=Object(i.a)(o.a.mark((function e(t){var r,n,i,s,c,u,l,d,b,y,f,h;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),n={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},i=this.urlParts.layerId,s=this.fetchRootDocument(),c=Object(p.default)(r,n),e.next=7,Promise.all([c,s]);case 7:if(u=e.sent,l=Object(a.a)(u,2),d=l[0],b=l[1],y=b&&b.layers,f=d.data&&d.data.layers,Array.isArray(f)){e.next=15;break}throw new Error("expected layers array");case 15:if(!Array.isArray(y)){e.next=25;break}h=0;case 17:if(!(h<Math.min(y.length,f.length))){e.next=23;break}if(y[h].id!==i){e.next=20;break}return e.abrupt("return","".concat(r,"/").concat(f[h].id));case 20:h++,e.next=17;break;case 23:e.next=27;break;case 25:if(!(i<f.length)){e.next=27;break}return e.abrupt("return","".concat(r,"/").concat(f[i].id));case 27:throw new Error("could not find matching associated sublayer");case 28:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"portalItemFromServiceItemId",value:function(){var e=Object(i.a)(o.a.mark((function e(){var t,r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchRootDocument();case 2:if(t=e.sent.serviceItemId){e.next=5;break}return e.abrupt("return",null);case 5:return r=new f.default({id:t,apiKey:this.apiKey}),e.next=8,this.fetchServiceOwningPortalUrl();case 8:return a=e.sent,Object(l.k)(a)&&(r.portal=new y.a({url:a})),e.prev=10,e.abrupt("return",r.load({signal:this.signal}));case 14:return e.prev=14,e.t0=e.catch(10),e.abrupt("return",(Object(d.w)(e.t0),null));case 17:case"end":return e.stop()}}),e,this,[[10,14]])})));return function(){return e.apply(this,arguments)}}()}]),e}()},1220:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return ie}));var a=r(8),n=r.n(a),o=r(15),i=r(12),s=r(14),c=r(3),u=r(4),p=r(47),l=r(44),d=r(6),b=r(7),y=r(0),f=r(269),h=(r(541),r(654),r(656),r(655),r(216),r(497),r(496),r(374),r(501)),j=r(69),O=r(20),v=r(16),m=r(2),g=r(285),I=r(23),k=r(34),w=r(27),x=r(1),S=(r(17),r(131)),F=(r(18),r(48)),L=r(9),T=r(373),P=r(709),A=r(703),E=r(539),D=r(688),R=r(692),U=r(1081),_=r(1022),N=r(200),C=r(514),q=r(611),M=r(1140),Q=r(707),G=r(689),B=r(81),K=r(1005),V=r(452),z=r(659),W=r(730),H=function(e){Object(d.a)(r,e);var t=Object(b.a)(r);function r(){var e;return Object(c.a)(this,r),(e=t.apply(this,arguments)).name=null,e.field=null,e.currentRangeExtent=null,e.fullRangeExtent=null,e.type="rangeInfo",e}return r}(r(25).a);Object(y.a)([Object(x.b)({type:String,json:{read:!0,write:!0}})],H.prototype,"name",void 0),Object(y.a)([Object(x.b)({type:String,json:{read:!0,write:!0}})],H.prototype,"field",void 0),Object(y.a)([Object(x.b)({type:[Number],json:{read:!0,write:!0}})],H.prototype,"currentRangeExtent",void 0),Object(y.a)([Object(x.b)({type:[Number],json:{read:!0,write:!0}})],H.prototype,"fullRangeExtent",void 0),Object(y.a)([Object(x.b)({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],H.prototype,"type",void 0);var Z=H=Object(y.a)([Object(L.a)("esri.layers.support.RangeInfo")],H),$=r(720),J=r(163),X=r(701),Y=r(243),ee=["3DObject","Point"],te=v.a.getLogger("esri.layers.SceneLayer"),re=Object(Q.a)(),ae=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).featureReduction=null,e.rangeInfos=null,e.operationalLayerType="ArcGISSceneServiceLayer",e.type="scene",e.fields=null,e.floorInfo=null,e.outFields=null,e.nodePages=null,e.materialDefinitions=null,e.textureSetDefinitions=null,e.geometryDefinitions=null,e.serviceUpdateTimeStamp=null,e.definitionExpression=null,e.path=null,e.labelsVisible=!0,e.labelingInfo=null,e.legendEnabled=!0,e.cachedDrawingInfo={color:!1},e.popupEnabled=!0,e.popupTemplate=null,e.objectIdField=null,e.globalIdField=null,e._fieldUsageInfo={},e.screenSizePerspectiveEnabled=!0,e}return Object(u.a)(a,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?Object(s.a)({url:e},t):e}},{key:"getField",value:function(e){return this.fieldsIndex.get(e)}},{key:"getFieldDomain",value:function(e,t){var r,a,n,o,i=null==(r=this.getFeatureType(null==t?void 0:t.feature))||null==(a=r.domains)?void 0:a[e];return i&&"inherited"!==i.type?i:null!=(n=null==(o=this.getField(e))?void 0:o.domain)?n:null}},{key:"getFeatureType",value:function(e){return e&&Object(m.k)(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}},{key:"types",get:function(){return Object(m.k)(this.associatedLayer)?this.associatedLayer.types:[]}},{key:"typeIdField",get:function(){return Object(m.k)(this.associatedLayer)?this.associatedLayer.typeIdField:null}},{key:"formTemplate",get:function(){return Object(m.k)(this.associatedLayer)?this.associatedLayer.formTemplate:null}},{key:"fieldsIndex",get:function(){return new G.a(this.fields)}},{key:"readNodePages",value:function(e,t,r){return"Point"===t.layerType&&(e=t.pointNodePages),null==e||"object"!=typeof e?null:K.c.fromJSON(e,r)}},{key:"elevationInfo",set:function(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}},{key:"geometryType",get:function(){return oe[this.profile]||"mesh"}},{key:"renderer",set:function(e){Object(B.k)(e,this.fieldsIndex),this._set("renderer",e)}},{key:"readCachedDrawingInfo",value:function(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e}},{key:"capabilities",get:function(){var e=Object(m.k)(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:_.a,t=e.query,r=e.editing,a=r.supportsGlobalId,n=r.supportsRollbackOnFailure,o=r.supportsUploadWithItemId,i=r.supportsReturnServiceEditsInSourceSpatialReference,s=e.data,c=s.supportsZ,u=s.supportsM,p=s.isVersioned,l=s.supportsAttachment,d=e.operations,b=d.supportsEditing,y=d.supportsUpdate,f=d.supportsQuery,h=d.supportsQueryAttachments,j=e.operations.supportsChangeTracking;return{query:t,editing:{supportsGlobalId:a,supportsReturnServiceEditsInSourceSpatialReference:i,supportsRollbackOnFailure:n,supportsGeometryUpdate:!1,supportsUploadWithItemId:o},data:{supportsAttachment:l,supportsZ:c,supportsM:u,isVersioned:p},operations:{supportsQuery:f,supportsQueryAttachments:h,supportsEditing:b&&j,supportsAdd:!1,supportsDelete:!1,supportsUpdate:y&&j}}}},{key:"editingEnabled",get:function(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.userHasEditingPrivileges},set:function(e){null!=e?this._override("editingEnabled",e):this._clearOverride("editingEnabled")}},{key:"defaultPopupTemplate",get:function(){return Object(m.k)(this.associatedLayer)||this.attributeStorageInfo?this.createPopupTemplate():null}},{key:"readObjectIdField",value:function(e,t){return!e&&t.fields&&t.fields.some((function(t){return"esriFieldTypeOID"===t.type&&(e=t.name),!!e})),e||void 0}},{key:"readGlobalIdField",value:function(e,t){return!e&&t.fields&&t.fields.some((function(t){return"esriFieldTypeGlobalID"===t.type&&(e=t.name),!!e})),e||void 0}},{key:"displayField",get:function(){return Object(m.k)(this.associatedLayer)?this.associatedLayer.displayField:null}},{key:"readProfile",value:function(e,t){var r=t.store.profile;return null!=r&&ne[r]?ne[r]:(te.error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}},{key:"load",value:function(e){var t=this,r=Object(m.k)(e)?e.signal:null,a=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(I.w).then((function(){return t._fetchService(r)})).then((function(){return Promise.all([t._fetchIndexAndUpdateExtent(t.nodePages,r),t._setAssociatedFeatureLayer(r)])})).then((function(){return t._validateElevationInfo()})).then((function(){return t._applyAssociatedLayerOverrides()})).then((function(){return t._populateFieldUsageInfo()})).then((function(){return Object($.a)(t,{origin:"service"},r)})).then((function(){return Object(B.k)(t.renderer,t.fieldsIndex)})).then((function(){return t.finishLoadEditablePortalLayer(e)}));return this.addResolvingPromise(a),Promise.resolve(this)}},{key:"createQuery",value:function(){var e=new J.a;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}},{key:"queryExtent",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(a){return a.queryExtent(e||r.createQuery(),t)}))}},{key:"queryFeatureCount",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(a){return a.queryFeatureCount(e||r.createQuery(),t)}))}},{key:"queryFeatures",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(a){return a.queryFeatures(e||r.createQuery(),t)})).then((function(e){if(null!=e&&e.features){var t,a=Object(i.a)(e.features);try{for(a.s();!(t=a.n()).done;){var n=t.value;n.layer=r,n.sourceLayer=r}}catch(o){a.e(o)}finally{a.f()}}return e}))}},{key:"queryObjectIds",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(a){return a.queryObjectIds(e||r.createQuery(),t)}))}},{key:"queryAttachments",value:function(e,t){return this._getAssociatedLayerForQuery().then((function(r){return r.queryAttachments(e,t)}))}},{key:"getFieldUsageInfo",value:function(e){var t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(te.error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}},{key:"createPopupTemplate",value:function(e){return Object(X.a)(this,e)}},{key:"_getAssociatedLayerForQuery",value:function(){var e=this.associatedLayer;return Object(m.k)(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}},{key:"_loadAssociatedLayerForQuery",value:function(){var e=Object(o.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:if(!Object(m.j)(this.associatedLayer)){e.next=4;break}throw new O.a("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});case 4:return e.prev=4,e.next=7,this.associatedLayer.load();case 7:e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(4),new O.a("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e.t0});case 12:return e.abrupt("return",this.associatedLayer);case 13:case"end":return e.stop()}}),e,this,[[4,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"hasCachedStatistics",value:function(e){return null!=this.statisticsInfo&&this.statisticsInfo.some((function(t){return t.name===e}))}},{key:"queryCachedStatistics",value:function(){var e=Object(o.a)(n.a.mark((function e(t,r){var a,o,s,c,u;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load(r);case 2:if(this.statisticsInfo){e.next=4;break}throw new O.a("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");case 4:if(a=this.fieldsIndex.get(t)){e.next=7;break}throw new O.a("scenelayer:field-unexisting","Field '".concat(t,"' does not exist on the layer"));case 7:o=Object(i.a)(this.statisticsInfo),e.prev=8,o.s();case 10:if((s=o.n()).done){e.next=17;break}if((c=s.value).name!==a.name){e.next=15;break}return u=Object(k.z)(this.parsedUrl.path,c.href),e.abrupt("return",Object(j.default)(u,{query:{f:"json",token:this.apiKey},responseType:"json",signal:r?r.signal:null}).then((function(e){return e.data})));case 15:e.next=10;break;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(8),o.e(e.t0);case 22:return e.prev=22,o.f(),e.finish(22);case 25:throw new O.a("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available");case 26:case"end":return e.stop()}}),e,this,[[8,19,22,25]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"saveAs",value:function(){var e=Object(o.a)(n.a.mark((function e(t,r){var a=this;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._debouncedSaveOperations(1,Object(s.a)(Object(s.a)({},r),{},{getTypeKeywords:function(){return a._getTypeKeywords()},portalItemLayerType:"scene"}),t));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"save",value:function(){var e=Object(o.a)(n.a.mark((function e(){var t,r=this;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={getTypeKeywords:function(){return r._getTypeKeywords()},portalItemLayerType:"scene"},e.abrupt("return",this._debouncedSaveOperations(0,t));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"applyEdits",value:function(){var e=Object(o.a)(n.a.mark((function e(t,a){var o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(50).then(r.bind(null,1276));case 2:return o=e.sent,e.next=5,this.load();case 5:if(!Object(m.j)(this.associatedLayer)){e.next=7;break}throw new O.a("".concat(this.type,"-layer:not-editable"),"Service is not editable");case 7:return e.next=9,this.associatedLayer.load();case 9:return e.abrupt("return",o.applyEdits(this,this.associatedLayer.source,t,a));case 10:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"on",value:function(e,t){return Object(p.a)(Object(l.a)(a.prototype),"on",this).call(this,e,t)}},{key:"validateLayer",value:function(e){if(e.layerType&&-1===ee.indexOf(e.layerType))throw new O.a("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new O.a("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new O.a("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});!function(e,t){var r=!1,a=!1;if(null==e)r=!0,a=!0;else{var n=t&&t.isGeographic;switch(e){case"east-north-up":case"earth-centered":r=!0,a=n;break;case"vertex-reference-frame":r=!0,a=!n;break;default:r=!1}}if(!r)throw new O.a("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!a)throw new O.a("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}(this.normalReferenceFrame,this.spatialReference)}},{key:"_getTypeKeywords",value:function(){var e=[];if("points"===this.profile)e.push("Point");else{if("mesh-pyramids"!==this.profile)throw new O.a("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}},{key:"_populateFieldUsageInfo",value:function(){var e=this;if(this._fieldUsageInfo={},this.fields){var t,r=Object(i.a)(this.fields);try{var a=function(){var r=t.value,a=!(!e.attributeStorageInfo||!e.attributeStorageInfo.some((function(e){return e.name===r.name}))),n=!!(Object(m.k)(e.associatedLayer)&&e.associatedLayer.fields&&e.associatedLayer.fields.some((function(e){return e&&r.name===e.name}))),o={supportsLabelingInfo:a,supportsRenderer:a,supportsPopupTemplate:a||n,supportsLayerQuery:n};e._fieldUsageInfo[r.name]=o};for(r.s();!(t=r.n()).done;)a()}catch(n){r.e(n)}finally{r.f()}}}},{key:"_applyAssociatedLayerOverrides",value:function(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides()}},{key:"_applyAssociatedLayerFieldsOverrides",value:function(){if(!Object(m.j)(this.associatedLayer)&&this.associatedLayer.fields){var e,t=null,r=Object(i.a)(this.associatedLayer.fields);try{for(r.s();!(e=r.n()).done;){var a=e.value,n=this.getField(a.name);n?(!n.domain&&a.domain&&(n.domain=a.domain.clone()),n.editable=a.editable,n.nullable=a.nullable,n.length=a.length):(t||(t=this.fields?this.fields.slice():[]),t.push(a.clone()))}}catch(o){r.e(o)}finally{r.f()}t&&this._set("fields",t)}}},{key:"_applyAssociatedLayerPopupOverrides",value:function(){if(!Object(m.j)(this.associatedLayer))for(var e=["popupTemplate","popupEnabled"],t=Object(S.a)(this),r=0;r<e.length;r++){var a=e[r],n=this.originIdOf(a),o=this.associatedLayer.originIdOf(a);n<o&&(2===o||3===o)&&t.setAtOrigin(a,this.associatedLayer[a],o)}}},{key:"_setAssociatedFeatureLayer",value:function(){var e=Object(o.a)(n.a.mark((function e(t){var r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(-1!==["mesh-pyramids","points"].indexOf(this.profile)){e.next=2;break}return e.abrupt("return");case 2:return r=new M.a(this.parsedUrl,this.portalItem,this.apiKey,t),e.prev=3,e.next=6,r.fetch();case 6:this.associatedLayer=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),Object(I.n)(e.t0)||this._logWarningOnPopupEnabled();case 12:case"end":return e.stop()}}),e,this,[[3,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_logWarningOnPopupEnabled",value:function(){var e=this;Object(w.n)(this,["popupTemplate","popupEnabled"],(function(){return e.popupEnabled&&null!=e.popupTemplate})).then((function(){return function(){var t="this SceneLayer: ".concat(e.title);null==e.attributeStorageInfo?te.warn("Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ".concat(t)):te.info("Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ".concat(t))}}))}},{key:"_validateElevationInfo",value:function(){var e=this.elevationInfo;e&&("mesh-pyramids"===this.profile&&"absolute-height"!==e.mode&&te.warn(".elevationInfo=","Mesh scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&te.warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"))}}]),a}(Object(U.a)(Object(A.a)(Object(E.a)(Object(D.a)(Object(R.a)(Object(g.a)(Object(P.a)(T.a))))))));Object(y.a)([Object(x.b)({types:{key:"type",base:C.a,typeMap:{selection:q.a}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],ae.prototype,"featureReduction",void 0),Object(y.a)([Object(x.b)({type:[Z],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],ae.prototype,"rangeInfos",void 0),Object(y.a)([Object(x.b)({json:{read:!1}})],ae.prototype,"associatedLayer",void 0),Object(y.a)([Object(x.b)({type:["show","hide"]})],ae.prototype,"listMode",void 0),Object(y.a)([Object(x.b)({type:["ArcGISSceneServiceLayer"]})],ae.prototype,"operationalLayerType",void 0),Object(y.a)([Object(x.b)({json:{read:!1},readOnly:!0})],ae.prototype,"type",void 0),Object(y.a)([Object(x.b)(Object(s.a)(Object(s.a)({},re.fields),{},{readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}}))],ae.prototype,"fields",void 0),Object(y.a)([Object(x.b)()],ae.prototype,"types",null),Object(y.a)([Object(x.b)()],ae.prototype,"typeIdField",null),Object(y.a)([Object(x.b)()],ae.prototype,"formTemplate",null),Object(y.a)([Object(x.b)({readOnly:!0})],ae.prototype,"fieldsIndex",null),Object(y.a)([Object(x.b)({type:W.a,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],ae.prototype,"floorInfo",void 0),Object(y.a)([Object(x.b)(re.outFields)],ae.prototype,"outFields",void 0),Object(y.a)([Object(x.b)({type:K.c,readOnly:!0,json:{read:!1}})],ae.prototype,"nodePages",void 0),Object(y.a)([Object(F.a)("service","nodePages",["nodePages","pointNodePages"])],ae.prototype,"readNodePages",null),Object(y.a)([Object(x.b)({type:[K.b],readOnly:!0})],ae.prototype,"materialDefinitions",void 0),Object(y.a)([Object(x.b)({type:[K.d],readOnly:!0})],ae.prototype,"textureSetDefinitions",void 0),Object(y.a)([Object(x.b)({type:[K.a],readOnly:!0})],ae.prototype,"geometryDefinitions",void 0),Object(y.a)([Object(x.b)({readOnly:!0})],ae.prototype,"serviceUpdateTimeStamp",void 0),Object(y.a)([Object(x.b)({readOnly:!0})],ae.prototype,"attributeStorageInfo",void 0),Object(y.a)([Object(x.b)({readOnly:!0})],ae.prototype,"statisticsInfo",void 0),Object(y.a)([Object(x.b)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],ae.prototype,"definitionExpression",void 0),Object(y.a)([Object(x.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],ae.prototype,"path",void 0),Object(y.a)([Object(x.b)(N.b)],ae.prototype,"elevationInfo",null),Object(y.a)([Object(x.b)({type:String})],ae.prototype,"geometryType",null),Object(y.a)([Object(x.b)(N.d)],ae.prototype,"labelsVisible",void 0),Object(y.a)([Object(x.b)({type:[V.a],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:z.a},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:z.a},write:!0}})],ae.prototype,"labelingInfo",void 0),Object(y.a)([Object(x.b)(N.e)],ae.prototype,"legendEnabled",void 0),Object(y.a)([Object(x.b)({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader:function(e,t){var r,a;if("number"==typeof e&&e>=0&&e<=1)return e;var n=null==(r=t.layerDefinition)||null==(a=r.drawingInfo)?void 0:a.transparency;return void 0!==n?Object(Y.b)(n):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],ae.prototype,"opacity",void 0),Object(y.a)([Object(x.b)({types:h.b,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],ae.prototype,"renderer",null),Object(y.a)([Object(x.b)({json:{read:!1}})],ae.prototype,"cachedDrawingInfo",void 0),Object(y.a)([Object(F.a)("service","cachedDrawingInfo")],ae.prototype,"readCachedDrawingInfo",null),Object(y.a)([Object(x.b)({readOnly:!0,json:{read:!1}})],ae.prototype,"capabilities",null),Object(y.a)([Object(x.b)({type:Boolean,json:{read:!1}})],ae.prototype,"editingEnabled",null),Object(y.a)([Object(x.b)(N.j)],ae.prototype,"popupEnabled",void 0),Object(y.a)([Object(x.b)({type:f.a,json:{name:"popupInfo",write:!0}})],ae.prototype,"popupTemplate",void 0),Object(y.a)([Object(x.b)({readOnly:!0,json:{read:!1}})],ae.prototype,"defaultPopupTemplate",null),Object(y.a)([Object(x.b)({type:String,json:{read:!1}})],ae.prototype,"objectIdField",void 0),Object(y.a)([Object(F.a)("service","objectIdField",["objectIdField","fields"])],ae.prototype,"readObjectIdField",null),Object(y.a)([Object(x.b)({type:String,json:{read:!1}})],ae.prototype,"globalIdField",void 0),Object(y.a)([Object(F.a)("service","globalIdField",["globalIdField","fields"])],ae.prototype,"readGlobalIdField",null),Object(y.a)([Object(x.b)({readOnly:!0,type:String,json:{read:!1}})],ae.prototype,"displayField",null),Object(y.a)([Object(x.b)({type:String,json:{read:!1}})],ae.prototype,"profile",void 0),Object(y.a)([Object(F.a)("service","profile",["store.profile"])],ae.prototype,"readProfile",null),Object(y.a)([Object(x.b)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],ae.prototype,"normalReferenceFrame",void 0),Object(y.a)([Object(x.b)(N.m)],ae.prototype,"screenSizePerspectiveEnabled",void 0),ae=Object(y.a)([Object(L.a)("esri.layers.SceneLayer")],ae);var ne={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},oe={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},ie=ae}}]);
//# sourceMappingURL=102.ae20ced1.chunk.js.map