"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2442,7873],{25929:(e,t,r)=>{r.d(t,{f:()=>s,i:()=>d,p:()=>f,r:()=>o,t:()=>a,w:()=>l});var n=r(70586),i=r(17452);function s(e,t){const r=t&&t.url&&t.url.path;if(e&&r&&(e=(0,i.hF)(e,r,{preserveProtocolRelative:!0}),t.portalItem&&t.readResourcePaths)){const r=(0,i.PF)(e,t.portalItem.itemUrl);c.test(r)&&t.readResourcePaths.push(t.portalItem.resourceFromPath(r).path)}return p(e,t&&t.portal)}function a(e,t,r=0){if(!e)return e;!(0,i.YP)(e)&&t&&t.blockedRelativeUrls&&t.blockedRelativeUrls.push(e);let n=(0,i.hF)(e);if(t){const r=t.verifyItemRelativeUrls&&t.verifyItemRelativeUrls.rootPath||t.url&&t.url.path;if(r){const s=p(r,t.portal);n=(0,i.PF)(p(n,t.portal),s,s),n!==e&&t.verifyItemRelativeUrls&&t.verifyItemRelativeUrls.writtenUrls.push(n)}}return n=function(e,t){return t&&!t.isPortal&&t.urlKey&&t.customBaseUrl?(0,i.Ie)(e,`${t.urlKey}.${t.customBaseUrl}`,t.portalHostname):e}(n,t&&t.portal),(0,i.YP)(n)&&(n=(0,i.Fv)(n)),null!=t&&t.resources&&null!=t&&t.portalItem&&!(0,i.YP)(n)&&!(0,i.HK)(n)&&0===r&&t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(n)}),n}function o(e,t,r){return s(e,r)}function l(e,t,r,n){const i=a(e,n);void 0!==i&&(t[r]=i)}const u=/\/items\/([^\/]+)\/resources\//,c=/^\.\/resources\//;function d(e){const t=(0,n.pC)(e)?e.match(u):null;return(0,n.pC)(t)?t[1]:null}function p(e,t){if(!t||t.isPortal||!t.urlKey||!t.customBaseUrl)return e;const r=`${t.urlKey}.${t.customBaseUrl}`;return(0,i.D6)(i.Gd,`${i.Gd.scheme}://${r}`)?(0,i.Ie)(e,t.portalHostname,r):(0,i.Ie)(e,r,t.portalHostname)}var f=Object.freeze({__proto__:null,fromJSON:s,toJSON:a,read:o,write:l,itemIdFromResourceUrl:d})},36030:(e,t,r)=>{r.d(t,{J:()=>s});var n=r(35454),i=r(5600);function s(e,t={}){var r;const s=e instanceof n.Xn?e:new n.Xn(e,t),a={type:null==(r=null==t?void 0:t.ignoreUnknown)||r?s.apiValues:String,readOnly:null==t?void 0:t.readOnly,json:{type:s.jsonValues,read:(null==t||!t.readOnly)&&{reader:s.read},write:{writer:s.write}}};return void 0!==(null==t?void 0:t.default)&&(a.json.default=t.default),void 0!==(null==t?void 0:t.name)&&(a.json.name=t.name),(0,i.Cb)(a)}},81153:(e,t,r)=>{function n(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{l:()=>n})},67900:(e,t,r)=>{r.d(t,{gV:()=>A,En:()=>b,Z7:()=>F,c9:()=>T,_R:()=>x,qE:()=>R,cM:()=>O,hd:()=>u,ty:()=>I,Jo:()=>E,$C:()=>U}),r(80442);var n=r(35454),i=r(24678),s=r(82971),a=r(68441),o=r(8744),l=r(58116);const u=39.37,c=a.sv.radius*Math.PI/200,d=/UNIT\[([^\]]+)\]\]$/i,p=l.Z,f=/UNIT\[([^\]]+)\]/i,m=new Set([4261,4305,4807,4810,4811,4812,4816,4819,4821,4901,4902,37225,104139,104140]),y=(0,n.wY)()({meter:"meters",foot:"feet",foot_us:"us-feet",foot_clarke:"clarke-feet",yard_clarke:"clarke-yards",link_clarke:"clarke-links",yard_sears:"sears-yards",foot_sears:"sears-feet",chain_sears:"sears-chains",chain_benoit_1895_b:"benoit-1895-b-chains",yard_indian:"indian-yards",yard_indian_1937:"indian-1937-yards",foot_gold_coast:"gold-coast-feet",chain_sears_1922_truncated:"sears-1922-truncated-chains","50_kilometers":"50-kilometers","150_kilometers":"150-kilometers"}),h=e=>e*e,v=e=>e*e*e,g={length:{baseUnit:"meters",units:{millimeters:{inBaseUnits:.001},centimeters:{inBaseUnits:.01},decimeters:{inBaseUnits:.1},meters:{inBaseUnits:1},kilometers:{inBaseUnits:1e3},inches:{inBaseUnits:.0254},feet:{inBaseUnits:.3048},yards:{inBaseUnits:.9144},miles:{inBaseUnits:1609.344},"nautical-miles":{inBaseUnits:1852},"us-feet":{inBaseUnits:1200/3937}}},area:{baseUnit:"square-meters",units:{"square-millimeters":{inBaseUnits:h(.001)},"square-centimeters":{inBaseUnits:h(.01)},"square-decimeters":{inBaseUnits:h(.1)},"square-meters":{inBaseUnits:1},"square-kilometers":{inBaseUnits:h(1e3)},"square-inches":{inBaseUnits:h(.0254)},"square-feet":{inBaseUnits:h(.3048)},"square-yards":{inBaseUnits:h(.9144)},"square-miles":{inBaseUnits:h(1609.344)},"square-us-feet":{inBaseUnits:h(1200/3937)},acres:{inBaseUnits:.0015625*h(1609.344)},ares:{inBaseUnits:100},hectares:{inBaseUnits:1e4}}},volume:{baseUnit:"liters",units:{liters:{inBaseUnits:1},"cubic-millimeters":{inBaseUnits:1e3*v(.001)},"cubic-centimeters":{inBaseUnits:1e3*v(.01)},"cubic-decimeters":{inBaseUnits:1e3*v(.1)},"cubic-meters":{inBaseUnits:1e3},"cubic-kilometers":{inBaseUnits:1e3*v(1e3)},"cubic-inches":{inBaseUnits:1e3*v(.0254)},"cubic-feet":{inBaseUnits:1e3*v(.3048)},"cubic-yards":{inBaseUnits:1e3*v(.9144)},"cubic-miles":{inBaseUnits:1e3*v(1609.344)}}},angle:{baseUnit:"radians",units:{radians:{inBaseUnits:1},degrees:{inBaseUnits:Math.PI/180}}}},w=function(){const e={};for(const t in g)for(const r in g[t].units)e[r]=t;return e}();function S(e){const t=w[e];if(t)return t;throw new Error("unknown measure")}function _(e,t=null){return t=t||S(e),g[t].baseUnit===e}function b(e,t,r){if(t===r)return e;const n=S(t);if(n!==S(r))throw new Error("incompatible units");const i=_(t,n)?e:function(e,t,r){return e*g[r].units[t].inBaseUnits}(e,t,n);return _(r,n)?i:function(e,t,r){return e/g[r].units[t].inBaseUnits}(i,r,n)}function I(e,t,r){return b(e,t,"meters")/(r*Math.PI/180)}function U(e){return y.fromJSON(e.toLowerCase())||null}function x(e){if(e&&"object"==typeof e&&!(0,o.N$)(e))return 1;const t=T(e);return t>1e5?1:t}function O(e){return T(e)>=(e instanceof s.Z?(0,i.Iu)(e).metersPerDegree:1e5)?"meters":R(e)}function T(e,t=a.sv.metersPerDegree){return F(e,!0)||t}function F(e,t=!1){let r,n,i=null;if(null!=e&&("object"==typeof e?(r=e.wkid,n=e.wkt):"number"==typeof e?r=e:"string"==typeof e&&(n=e)),r){if((0,o.o$)(r))return a.yr.metersPerDegree;if((0,o.ME)(r))return a.Z1.metersPerDegree;i=p.values[p[r]],!i&&t&&m.has(r)&&(i=c)}else if(n)if(-1!==n.search(/^PROJCS/i)){const e=d.exec(n);e&&e[1]&&(i=parseFloat(e[1].split(",")[1]))}else if(-1!==n.search(/^GEOCCS/i)){const e=f.exec(n);e&&e[1]&&(i=parseFloat(e[1].split(",")[1]))}return i}function R(e){let t,r,n=null;if(null!=e&&("object"==typeof e?(t=e.wkid,r=e.wkt):"number"==typeof e?t=e:"string"==typeof e&&(r=e)),t)n=p.units[p[t]];else if(r&&-1!==r.search(/^PROJCS/i)){let e=d.exec(r);e&&e[1]&&(e=/[\\"\\']{1}([^\\"\\']+)/.exec(e[1]),n=e&&e[1])}return n?U(n):null}const N={esriAcres:"acres",esriAres:"ares",esriHectares:"hectares",esriSquareCentimeters:"square-centimeters",esriSquareDecimeters:"square-decimeters",esriSquareFeet:"square-feet",esriSquareInches:"square-inches",esriSquareKilometers:"square-kilometers",esriSquareMeters:"square-meters",esriSquareMiles:"square-miles",esriSquareMillimeters:"square-millimeters",esriSquareUsFeet:"square-us-feet",esriSquareYards:"square-yards"},P={esriCentimeters:"centimeters",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriYards:"yards"},A=(0,n.wY)()(N),E=(0,n.wY)()(P);(0,n.wY)()({...N,...P})},41123:(e,t,r)=>{r.d(t,{D:()=>i});var n=r(16358);function i(){const e=s.getRandomValues(new Uint16Array(8));e[3]=4095&e[3]|16384,e[4]=16383&e[4]|32768;const t=t=>e[t].toString(16);return t(0)+t(1)+"-"+t(2)+"-"+t(3)+"-"+t(4)+"-"+t(5)+t(6)+t(7)}const s=n.Z.crypto||n.Z.msCrypto},66577:(e,t,r)=>{r.d(t,{qM:()=>c});var n=r(75215),i=r(6570),s=r(9361),a=r(65091),o=r(13473),l=r(17332),u=r(58901);r(82971),r(86973),r(33955);const c={base:s.Z,key:"type",typeMap:{extent:i.Z,multipoint:a.Z,point:o.Z,polyline:u.Z,polygon:l.Z}};(0,n.N7)(c)},24678:(e,t,r)=>{r.d(t,{GG:()=>o,HQ:()=>l,VY:()=>u,wY:()=>c,Iu:()=>f,e8:()=>m,rS:()=>p,N_:()=>d});var n=r(82971),i=r(68441),s=r(8744);function a(e){return new n.Z({wkt:`GEOCCS["Spherical geocentric",\n    DATUM["Not specified",\n      SPHEROID["Sphere",${e.radius},0]],\n    PRIMEM["Greenwich",0.0,\n      AUTHORITY["EPSG","8901"]],\n    UNIT["m",1.0],\n    AXIS["Geocentric X",OTHER],\n    AXIS["Geocentric Y",EAST],\n    AXIS["Geocentric Z",NORTH]\n  ]`})}const o=a(i.sv),l=a(i.yr),u=a(i.Z1),c=new n.Z({wkt:`GEOCCS["WGS 84",\n  DATUM["WGS_1984",\n    SPHEROID["WGS 84",${i.sv.radius},298.257223563,\n      AUTHORITY["EPSG","7030"]],\n    AUTHORITY["EPSG","6326"]],\n  PRIMEM["Greenwich",0,\n    AUTHORITY["EPSG","8901"]],\n  UNIT["m",1.0,\n    AUTHORITY["EPSG","9001"]],\n  AXIS["Geocentric X",OTHER],\n  AXIS["Geocentric Y",OTHER],\n  AXIS["Geocentric Z",NORTH],\n  AUTHORITY["EPSG","4978"]\n]`});function d(e){return e&&e===i.yr?l:e&&e===i.Z1?u:o}function p(e){return e&&((0,s.BZ)(e)||e===l)?l:e&&((0,s.V2)(e)||e===u)?u:o}function f(e){return e&&((0,s.BZ)(e)||e===l)?i.yr:e&&((0,s.V2)(e)||e===u)?i.Z1:i.sv}function m(e){return(0,s.o$)(e)?i.yr:(0,s.ME)(e)?i.Z1:i.sv}},33955:(e,t,r)=>{r.d(t,{im:()=>y,q9:()=>g,Ji:()=>h,YX:()=>c,aW:()=>d,wp:()=>p,oU:()=>m,l9:()=>f});var n=r(70586),i=r(6570),s=r(9361),a=r(65091),o=r(13473),l=r(17332),u=r(58901);function c(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}function d(e){return void 0!==e.points}function p(e){return void 0!==e.x&&void 0!==e.y}function f(e){return void 0!==e.paths}function m(e){return void 0!==e.rings}function y(e){return(0,n.Wi)(e)?null:e instanceof s.Z?e:p(e)?o.Z.fromJSON(e):f(e)?u.Z.fromJSON(e):m(e)?l.Z.fromJSON(e):d(e)?a.Z.fromJSON(e):c(e)?i.Z.fromJSON(e):null}function h(e){return e?p(e)?"esriGeometryPoint":f(e)?"esriGeometryPolyline":m(e)?"esriGeometryPolygon":c(e)?"esriGeometryEnvelope":d(e)?"esriGeometryMultipoint":null:null}const v={esriGeometryPoint:o.Z,esriGeometryPolyline:u.Z,esriGeometryPolygon:l.Z,esriGeometryEnvelope:i.Z,esriGeometryMultipoint:a.Z};function g(e){return e&&v[e]||null}},86973:(e,t,r)=>{r.d(t,{Mk:()=>i,P$:()=>s});var n=r(35454);const i=(0,n.wY)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"}),s=(0,n.wY)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"})},40330:(e,t,r)=>{r.d(t,{Dp:()=>u,id:()=>o,qh:()=>l,i8:()=>s,Nv:()=>a});var n=r(80442),i=r(17452);const s="4.21",a={request(e,t){var n;const i=null==(n=e.options)?void 0:n.responseType;return r.e(3172).then(r.bind(r,3172)).then((({default:r})=>{const n=e.options||{};return n.responseType="native"===i||"native-request-init"===i?"native-request-init":"array-buffer",n.signal=null==t?void 0:t.signal,r(e.url,n)})).then((e=>{const t={data:e.data,ssl:e.ssl};return"native-request-init"===e.requestOptions.responseType?(delete t.data.signal,t):{result:t,transferList:[t.data]}}))}};let o;function l(e){o=e}function u(e){const t=o&&o.findCredential(e);return t&&t.token?(0,i.ZN)(e,"token",t.token):e}(0,n.Z)("host-webworker")||((0,n.Z)("edge")||(0,n.Z)("trident"))&&console.warn("Deprecated browser - see http://esriurl.com/oldbrowser")},54295:(e,t,r)=>{r.d(t,{V:()=>a});var n=r(43697),i=r(5600),s=(r(80442),r(75215),r(92604),r(52525));const a=e=>{let t=class extends e{get apiKey(){var e;return this._isOverridden("apiKey")?this._get("apiKey"):function(e){return"portalItem"in e}(this)?null==(e=this.portalItem)?void 0:e.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,n._)([(0,i.Cb)({type:String})],t.prototype,"apiKey",null),t=(0,n._)([(0,s.j)("esri.layers.mixins.APIKeyMixin")],t),t}},17287:(e,t,r)=>{r.d(t,{Y:()=>u});var n=r(43697),i=r(92604),s=r(70586),a=r(5600),o=(r(80442),r(75215),r(52525)),l=r(66677);const u=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,l.Qc)(this.url);if((0,s.pC)(e)&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,l.Nm)(e,i.Z.getLogger(this.declaredClass)))}};return(0,n._)([(0,a.Cb)()],t.prototype,"title",null),(0,n._)([(0,a.Cb)({type:String})],t.prototype,"url",null),t=(0,n._)([(0,o.j)("esri.layers.mixins.ArcGISService")],t),t}},13496:(e,t,r)=>{r.d(t,{V:()=>P});var n=r(43697),i=r(3172),s=r(20102),a=(r(80442),r(92604)),o=r(70586),l=r(95330),u=r(17452),c=r(5600),d=(r(75215),r(71715)),p=r(52525),f=r(30556),m=r(81153);function y(e){e&&e.writtenProperties&&e.writtenProperties.forEach((e=>{const t=e.target;e.newOrigin&&e.oldOrigin!==e.newOrigin&&(0,m.l)(t)&&t.updateOrigin(e.propName,e.newOrigin)}))}var h=r(6570),v=r(79235),g=r(82971),w=r(66677),S=r(21506),_=r(61064),b=r(65587),I=r(15235),U=r(66643),x=r(41123),O=r(97873);async function T(e,t,r){if(!t||!t.resources)return;const n=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const i=new Set(t.resources.toKeep.map((e=>e.resource.path))),a=new Set,o=[];i.forEach((t=>{n.delete(t),e.paths.push(t)}));for(const s of t.resources.toUpdate)if(n.delete(s.resource.path),i.has(s.resource.path)||a.has(s.resource.path)){const{resource:t,content:n,finish:i,error:a}=s,l=(0,O.getSiblingOfSameTypeI)(t,(0,x.D)());e.paths.push(l.path),o.push(F({resource:l,content:n,finish:i,error:a},r))}else e.paths.push(s.resource.path),o.push(R(s,r)),a.add(s.resource.path);for(const n of t.resources.toAdd)o.push(F(n,r)),e.paths.push(n.resource.path);if(n.forEach((e=>{const r=t.portalItem.resourceFromPath(e);o.push(r.portalItem.removeResource(r).catch((()=>{})))})),0===o.length)return;const u=await(0,l.as)(o);(0,l.k_)(r);const c=u.filter((e=>"error"in e)).map((e=>e.error));if(c.length>0)throw new s.Z("save:resources","Failed to save one or more resources",{errors:c})}async function F(e,t){const r=await(0,U.q6)(e.resource.portalItem.addResource(e.resource,e.content,t));if(!0!==r.ok)throw e.error&&e.error(r.error),r.error;e.finish&&e.finish(e.resource)}async function R(e,t){const r=await(0,U.q6)(e.resource.update(e.content,t));if(!0!==r.ok)throw e.error(r.error),r.error;e.finish(e.resource)}const N=a.Z.getLogger("esri.layers.mixins.SceneService"),P=e=>{let t=class extends e{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=(0,l.Ds)((async(e,t,r)=>{switch(e){case 0:return this._save(t);case 1:return this._saveAs(r,t)}}))}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return g.Z.fromJSON(e.spatialReference);{const t=e.store,r=t.indexCRS||t.geographicCRS,n=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=n?new g.Z(n):null}}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e){const n=null==e.spatialReference?{...e,spatialReference:this._readSpatialReference(t)}:e;return h.Z.fromJSON(n,r)}const n=t.store,i=this._readSpatialReference(t);return null==i||null==n||null==n.extent||!Array.isArray(n.extent)||n.extent.some((e=>e<A))?null:new h.Z({xmin:n.extent[0],ymin:n.extent[1],xmax:n.extent[2],ymax:n.extent[3],spatialReference:i})}readVersion(e,t){const r=t.store,n=null!=r.version?r.version.toString():"",i={major:Number.NaN,minor:Number.NaN,versionString:n},s=n.split(".");return s.length>=2&&(i.major=parseInt(s[0],10),i.minor=parseInt(s[1],10)),i}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return(0,w.a7)(this.url,t.name);let n=t.name;if(!n&&this.url){const e=(0,w.Qc)(this.url);(0,o.pC)(e)&&(n=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(n=r+" - "+n),(0,w.ld)(n)}set url(e){const t=(0,w.XG)({layer:this,url:e,nonStandardUrlAllowed:!1,logger:N});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,n){(0,w.wH)(this,e,"layers",t,n)}get parsedUrl(){const e=this._get("url");if(!e)return null;const t=(0,u.mN)(e);return null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=(0,_.T)(this.parsedUrl.path,this.rootNode,e,this.apiKey,N,t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===(null==e?void 0:e.type)){var t,r;const n=e.rootIndex%e.pageSize,i=null==(t=e.rootPage)||null==(r=t.nodes)?void 0:r[n];if(null==i||null==i.obb||null==i.obb.center||null==i.obb.halfSize)throw new s.Z("sceneservice:invalid-node-page","Invalid node page.");if(i.obb.center[0]<A||null==this.fullExtent||this.fullExtent.hasZ)return;const a=i.obb.halfSize,o=i.obb.center[2],l=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);this.fullExtent.zmin=o-l,this.fullExtent.zmax=o+l}else if("node"===(null==e?void 0:e.type)){var n;const t=null==(n=e.rootNode)?void 0:n.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<A)return;const r=t[2],i=t[3];this.fullExtent.zmin=r-i,this.fullExtent.zmax=r+i}}async _fetchService(e){if(null==this.url)throw new s.Z("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await(0,i.default)(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){const t=await(0,i.default)(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});t.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));const r=t.data;this.read(r,{origin:"service",url:this.parsedUrl}),this.validateLayer(r)}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const n=t.getTypeKeywords();for(const t of n)e.typeKeywords.push(t);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),1===r&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))}async _saveAs(e,t){const r={...Z,...t};let n=I.default.from(e);n||(N.error("_saveAs(): requires a portal item parameter"),await Promise.reject(new s.Z("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))),n.id&&(n=n.clone(),n.id=null);const i=n.portal||b.Z.getDefault();await this._ensureLoadBeforeSave(),n.type=C,n.portal=i;const a={origin:"portal-item",url:null,messages:[],portal:i,portalItem:n,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},o={layers:[this.write(null,a)]};return await Promise.all(a.resources.pendingOperations),await this._validateAgainstJSONSchema(o,a,r),n.url=this.url,n.title||(n.title=this.title),this._updateTypeKeywords(n,r,1),await i._signIn(),await i.user.addItem({item:n,folder:r&&r.folder,data:o}),await T(this.resourceReferences,a,null),this.portalItem=n,y(a),a.portalItem=n,n}async _save(e){const t={...Z,...e};this.portalItem||(N.error("_save(): requires the .portalItem property to be set"),await Promise.reject(new s.Z("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService"))),this.portalItem.type!==C&&(N.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+C),await Promise.reject(new s.Z("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${C}"`))),await this._ensureLoadBeforeSave();const r={origin:"portal-item",url:this.portalItem.itemUrl&&(0,u.mN)(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||b.Z.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},n={layers:[this.write(null,r)]};return await Promise.all(r.resources.pendingOperations),await this._validateAgainstJSONSchema(n,r,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,0),await this.portalItem.update({data:n}),await T(this.resourceReferences,r,null),y(r),this.portalItem}async _validateAgainstJSONSchema(e,t,n){let i=t.messages.filter((e=>"error"===e.type)).map((e=>new s.Z(e.name,e.message,e.details)));if(n&&n.validationOptions.ignoreUnsupported&&(i=i.filter((e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name))),n.validationOptions.enabled||E){const t=(await r.e(7572).then(r.bind(r,87572))).validate(e,n.portalItemLayerType);if(t.length>0){const e=`Layer item did not validate:\n${t.join("\n")}`;if(N.error(`_validateAgainstJSONSchema(): ${e}`),"throw"===n.validationOptions.failPolicy){const e=t.map((e=>new s.Z("sceneservice:schema-validation",e))).concat(i);throw new s.Z("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:e})}}}if(i.length>0)throw new s.Z("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:i})}};return(0,n._)([(0,c.Cb)(S.id)],t.prototype,"id",void 0),(0,n._)([(0,c.Cb)({type:g.Z})],t.prototype,"spatialReference",void 0),(0,n._)([(0,d.r)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),(0,n._)([(0,c.Cb)({type:h.Z})],t.prototype,"fullExtent",void 0),(0,n._)([(0,d.r)("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),(0,n._)([(0,c.Cb)({readOnly:!0,type:v.Z})],t.prototype,"heightModelInfo",void 0),(0,n._)([(0,c.Cb)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),(0,n._)([(0,c.Cb)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),(0,n._)([(0,c.Cb)({readOnly:!0})],t.prototype,"version",void 0),(0,n._)([(0,d.r)("version",["store.version"])],t.prototype,"readVersion",null),(0,n._)([(0,c.Cb)({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,n._)([(0,c.Cb)({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),(0,n._)([(0,c.Cb)({type:String})],t.prototype,"title",void 0),(0,n._)([(0,d.r)("portal-item","title")],t.prototype,"readTitlePortalItem",null),(0,n._)([(0,d.r)("service","title",["name"])],t.prototype,"readTitleService",null),(0,n._)([(0,c.Cb)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],t.prototype,"layerId",void 0),(0,n._)([(0,c.Cb)(S.HQ)],t.prototype,"url",null),(0,n._)([(0,f.c)("url")],t.prototype,"writeUrl",null),(0,n._)([(0,c.Cb)()],t.prototype,"parsedUrl",null),(0,n._)([(0,c.Cb)({readOnly:!0})],t.prototype,"store",void 0),(0,n._)([(0,c.Cb)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),t=(0,n._)([(0,p.j)("esri.layers.mixins.SceneService")],t),t},A=-1e38,E=!1,C="Scene Service",Z={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}}},61064:(e,t,r)=>{r.d(t,{T:()=>a});var n=r(3172),i=r(20102),s=r(70586);async function a(e,t,r,a,o,l){let u=null;if((0,s.pC)(r)){const t=`${e}/nodepages/`,i=t+Math.floor(r.rootIndex/r.nodesPerPage);try{return{type:"page",rootPage:(await(0,n.default)(i,{query:{f:"json",token:a},responseType:"json",signal:l})).data,rootIndex:r.rootIndex,pageSize:r.nodesPerPage,lodMetric:r.lodSelectionMetricType,urlPrefix:t}}catch(e){(0,s.pC)(o)&&o.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",i,e),u=e}}if(!t)return null;const c=`${e}/nodes/`,d=c+(t&&t.split("/").pop());try{return{type:"node",rootNode:(await(0,n.default)(d,{query:{f:"json",token:a},responseType:"json",signal:l})).data,urlPrefix:c}}catch(e){throw new i.Z("sceneservice:root-node-missing","Root node missing.",{pageError:u,nodeError:e,url:d})}}},66677:(e,t,r)=>{r.d(t,{ld:()=>m,B5:()=>d,M8:()=>h,G:()=>S,Qc:()=>p,DR:()=>f,Nm:()=>v,XG:()=>g,a7:()=>y,wH:()=>w});var n=r(70586),i=r(17452),s=r(25929);const a={mapserver:"MapServer",imageserver:"ImageServer",featureserver:"FeatureServer",sceneserver:"SceneServer",streamserver:"StreamServer",vectortileserver:"VectorTileServer"},o=Object.values(a),l=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/(${o.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),u=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/([^\\/\\n]+)\\/(${o.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),c=/(.*?)\/(?:layers\/)?(\d+)\/?$/i;function d(e){return!!l.test(e)}function p(e){const t=(0,i.mN)(e),r=t.path.match(l)||t.path.match(u);if(!r)return null;const[,n,s,o,c]=r,d=s.indexOf("/");return{title:m(-1!==d?s.slice(d+1):s),serverType:a[o.toLowerCase()],sublayer:null!=c&&""!==c?parseInt(c,10):null,url:{path:n}}}function f(e){const t=(0,i.mN)(e).path.match(c);return t?{serviceUrl:t[1],sublayerId:Number(t[2])}:null}function m(e){return(e=e.replace(/\s*[/_]+\s*/g," "))[0].toUpperCase()+e.slice(1)}function y(e,t){const r=[];if(e){const t=p(e);(0,n.pC)(t)&&t.title&&r.push(t.title)}if(t){const e=m(t);r.push(e)}if(2===r.length){if(-1!==r[0].toLowerCase().indexOf(r[1].toLowerCase()))return r[0];if(-1!==r[1].toLowerCase().indexOf(r[0].toLowerCase()))return r[1]}return r.join(" - ")}function h(e){if(!e)return!1;const t=-1!==(e=e.toLowerCase()).indexOf(".arcgis.com/"),r=-1!==e.indexOf("//services")||-1!==e.indexOf("//tiles")||-1!==e.indexOf("//features");return t&&r}function v(e,t){return e?(0,i.Qj)((0,i.Hu)(e,t)):e}function g(e){let{url:t}=e;if(!t)return{url:t};t=(0,i.Hu)(t,e.logger);const r=(0,i.mN)(t),s=p(r.path);let a;if((0,n.pC)(s))null!=s.sublayer&&null==e.layer.layerId&&(a=s.sublayer),t=s.url.path;else if(e.nonStandardUrlAllowed){const e=f(r.path);(0,n.pC)(e)&&(t=e.serviceUrl,a=e.sublayerId)}return{url:(0,i.Qj)(t),layerId:a}}function w(e,t,r,n,a){(0,s.w)(t,n,"url",a),n.url&&null!=e.layerId&&(n.url=(0,i.v_)(n.url,r,e.layerId.toString()))}function S(e){if(!e)return!1;const t=e.toLowerCase(),r=-1!==t.indexOf("/services/"),n=-1!==t.indexOf("/mapserver/wmsserver"),i=-1!==t.indexOf("/imageserver/wmsserver"),s=-1!==t.indexOf("/wmsserver");return r&&(n||i||s)}},35671:(e,t,r)=>{r.d(t,{io:()=>h,AB:()=>y,gd:()=>m,Q0:()=>f,YN:()=>u,UF:()=>d,O5:()=>v,os:()=>w,H7:()=>R,qN:()=>N,Pz:()=>E,Qc:()=>C,vP:()=>B}),r(20102);var n,i,s=r(78286);(i=n||(n={})).VALUE_OUT_OF_RANGE="domain-validation-error::value-out-of-range",i.INVALID_CODED_VALUE="domain-validation-error::invalid-coded-value";var a=r(59266);const o=["field","field2","field3","normalizationField","rotationInfo.field","proportionalSymbolInfo.field","proportionalSymbolInfo.normalizationField","colorInfo.field","colorInfo.normalizationField"],l=["field","normalizationField"];function u(e,t){if(null!=e&&null!=t)for(const r of Array.isArray(e)?e:[e])if(c(o,r,t),"visualVariables"in r&&r.visualVariables)for(const e of r.visualVariables)c(l,e,t)}function c(e,t,r){if(e)for(const n of e){const e=(0,s.hS)(n,t),i=e&&"function"!=typeof e&&r.get(e);i&&(0,s.RB)(n,i.name,t)}}function d(e,t){if(null!=e&&null!=t&&t.fields.length)if("startField"in e){const r=t.get(e.startField),n=t.get(e.endField);e.startField=r&&r.name||null,e.endField=n&&n.name||null}else{const r=t.get(e.startTimeField),n=t.get(e.endTimeField);e.startTimeField=r&&r.name||null,e.endTimeField=n&&n.name||null}}const p=new Set;function f(e,t){return e&&t?(p.clear(),m(p,e,t),Array.from(p).sort()):[]}function m(e,t,r){var n;if(r)if(null!=t&&null!=(n=t.fields)&&n.length)if(r.includes("*"))for(const{name:r}of t.fields)e.add(r);else for(const n of r)y(e,t,n);else{if(r.includes("*"))return e.clear(),void e.add("*");for(const t of r)e.add(t)}}function y(e,t,r){if("string"==typeof r)if(t){const n=t.get(r);n&&e.add(n.name)}else e.add(r)}async function h(e,t,r){var n;if(!r)return;const{arcadeUtils:i}=await(0,a.LC)(),s=i.extractFieldNames(r,null==t||null==(n=t.fields)?void 0:n.map((e=>e.name)));for(const r of s)y(e,t,r)}function v({displayField:e,fields:t}){return e||(t&&t.length?g(t,"name-or-title")||g(t,"unique-identifier")||g(t,"type-or-category")||function(e){for(const t of e){if(!t||!t.name)continue;const e=t.name.toLowerCase();if(e.indexOf("name")>-1||e.indexOf("title")>-1)return t.name}return null}(t):null)}function g(e,t){for(const r of e)if(r&&r.valueType&&r.valueType===t)return r.name;return null}function w(e){const t=e.defaultValue;return void 0!==t&&T(e,t)?t:e.nullable?null:void 0}function S(e){return"number"==typeof e&&!isNaN(e)&&isFinite(e)}function _(e){return null===e||S(e)}const b="isInteger"in Number?Number.isInteger:e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e;function I(e){return null===e||b(e)}function U(e){return null!=e&&"string"==typeof e}function x(e){return null===e||U(e)}function O(){return!0}function T(e,t){let r;switch(e.type){case"date":case"integer":case"long":case"small-integer":case"esriFieldTypeDate":case"esriFieldTypeInteger":case"esriFieldTypeLong":case"esriFieldTypeSmallInteger":r=e.nullable?I:b;break;case"double":case"single":case"esriFieldTypeSingle":case"esriFieldTypeDouble":r=e.nullable?_:S;break;case"string":case"esriFieldTypeString":r=e.nullable?x:U;break;default:r=O}return 1===arguments.length?r:r(t)}const F=new Set(["integer","small-integer","single","double","esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]);function R(e){return null!=e&&F.has(e.type)}function N(e){return null!=e&&("string"===e.type||"esriFieldTypeString"===e.type)}var P,A;function E(e){return null==e||"number"==typeof e&&isNaN(e)?null:e}function C(e,t){return e.nullable&&null===t?null:R(e)&&!function(e,t){const r="string"==typeof e?Z(e):e;return!!r&&(r.isInteger?b(t)&&t>=r.min&&t<=r.max:t>=r.min&&t<=r.max)}(e.type,Number(t))?P.OUT_OF_RANGE:T(e,t)?e.domain?function(e,t){switch(e.type){case"range":{const r="range"in e?e.range[0]:e.minValue,i="range"in e?e.range[1]:e.maxValue;if(+t<r||+t>i)return n.VALUE_OUT_OF_RANGE;break}case"coded-value":case"codedValue":if(null==e.codedValues||e.codedValues.every((e=>null==e||e.code!==t)))return n.INVALID_CODED_VALUE}return null}(e.domain,t):null:A.INVALID_TYPE}function Z(e){switch(e){case"esriFieldTypeSmallInteger":case"small-integer":return q;case"esriFieldTypeInteger":case"integer":return G;case"esriFieldTypeSingle":case"single":return k;case"esriFieldTypeDouble":case"double":return $}}!function(e){e.OUT_OF_RANGE="numeric-range-validation-error::out-of-range"}(P||(P={})),function(e){e.INVALID_TYPE="type-validation-error::invalid-type"}(A||(A={}));const q={min:-32768,max:32767,isInteger:!0},G={min:-2147483648,max:2147483647,isInteger:!0},k={min:-34e37,max:12e37,isInteger:!1},$={min:-Number.MAX_VALUE,max:Number.MAX_VALUE,isInteger:!1};function B(e,t,r){switch(e){case n.INVALID_CODED_VALUE:return`Value ${r} is not in the coded domain - field: ${t.name}, domain: ${JSON.stringify(t.domain)}`;case n.VALUE_OUT_OF_RANGE:return`Value ${r} is out of the range of valid values - field: ${t.name}, domain: ${JSON.stringify(t.domain)}`;case A.INVALID_TYPE:return`Value ${r} is not a valid value for the field type - field: ${t.name}, type: ${t.type}, nullable: ${t.nullable}`;case P.OUT_OF_RANGE:{const{min:e,max:n}=Z(t.type);return`Value ${r} is out of range for the number type - field: ${t.name}, type: ${t.type}, value range is ${e} to ${n}`}}}},97873:(e,t,r)=>{r.r(t),r.d(t,{addOrUpdateResource:()=>l,contentToBlob:()=>f,fetchResources:()=>o,getSiblingOfSameType:()=>m,getSiblingOfSameTypeI:()=>y,removeAllResources:()=>c,removeResource:()=>u,splitPrefixFileNameAndExtension:()=>p});var n=r(3172),i=r(20102),s=r(70586),a=r(17452);async function o(e,t={},r){await e.load(r);const n=(0,a.v_)(e.itemUrl,"resources"),{start:i=1,num:o=10,sortOrder:l="asc",sortField:u="created"}=t,c={query:{start:i,num:o,sortOrder:l,sortField:u,token:e.apiKey},signal:(0,s.U2)(r,"signal")},d=await e.portal._request(n,c);return{total:d.total,nextStart:d.nextStart,resources:d.resources.map((({created:t,size:r,resource:n})=>({created:new Date(t),size:r,resource:e.resourceFromPath(n)})))}}async function l(e,t,r,n){if(!e.hasPath())throw new i.Z(`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");const o=e.portalItem;await o.load(n);const l=(0,a.v_)(o.userItemUrl,"add"===t?"addResources":"updateResources"),[u,c]=d(e.path),p=await f(r),m=new FormData;return u&&"."!==u&&m.append("resourcesPrefix",u),m.append("fileName",c),m.append("file",p,c),m.append("f","json"),(0,s.pC)(n)&&n.access&&m.append("access",n.access),await o.portal._request(l,{method:"post",body:m,signal:(0,s.U2)(n,"signal")}),e}async function u(e,t,r){if(!t.hasPath())throw new i.Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const n=(0,a.v_)(e.userItemUrl,"removeResources");await e.portal._request(n,{method:"post",query:{resource:t.path},signal:(0,s.U2)(r,"signal")}),t.portalItem=null}async function c(e,t){await e.load(t);const r=(0,a.v_)(e.userItemUrl,"removeResources");return e.portal._request(r,{method:"post",query:{deleteAll:!0},signal:(0,s.U2)(t,"signal")})}function d(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function p(e){const[t,r]=function(e){const t=(0,a.Ml)(e);return(0,s.Wi)(t)?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[n,i]=d(t);return[n,i,r]}async function f(e){return e instanceof Blob?e:(await(0,n.default)(e.url,{responseType:"blob"})).data}function m(e,t){if(!e.hasPath())return null;const[r,,n]=p(e.path);return e.portalItem.resourceFromPath((0,a.v_)(r,t+n))}function y(e,t){if(!e.hasPath())return null;const[r,,n]=p(e.path);return e.portalItem.resourceFromPath((0,a.v_)(r,t+n))}},59266:(e,t,r)=>{r.d(t,{mz:()=>c,pp:()=>u,WW:()=>o,Yi:()=>l,LC:()=>a}),r(66577);var n=r(70586),i=r(82971);let s;function a(){return s||(s=(async()=>{const e=await Promise.all([r.e(9490),r.e(6690)]).then(r.bind(r,96690));return{arcade:e.arcade,arcadeUtils:e,Dictionary:e.Dictionary,Feature:e.arcadeFeature}})()),s}const o=(e,t,r)=>c.create(e,t,r,null,["$feature"]),l=(e,t,r)=>c.create(e,t,r,null,["$feature","$view"]),u=(e,t,r,n)=>c.create(e,t,r,n,["$feature","$view"]);class c{constructor(e,t,r,n,i,s,a,o){this.script=e,this.evaluate=i;const l=Array.isArray(a)?a:a.fields;this.fields=l,this._syntaxTree=n,this._arcade=t,this._arcadeDictionary=r,this._arcadeFeature=s,this._spatialReference=o,this._referencesGeometry=t.scriptTouchesGeometry(this._syntaxTree),this._referencesScale=this._arcade.referencesMember(this._syntaxTree,"scale")}static async create(e,t,r,s,o,l){const{arcade:u,Feature:d,Dictionary:p}=await a(),f=i.Z.fromJSON(t),m=u.parseScript(e,l),y=o.reduce(((e,t)=>({...e,[t]:null})),{});let h=null;(0,n.pC)(s)&&(h=new p(s),h.immutable=!0,y.$config=null);const v=u.scriptUsesGeometryEngine(m)&&u.enableGeometrySupport(),g=u.scriptUsesFeatureSet(m)&&u.enableFeatureSetSupport(),w=u.scriptIsAsync(m)&&u.enableAsyncSupport(),S={vars:y,spatialReference:f,useAsync:!!w},_=new p;_.immutable=!1,_.setField("scale",0);const b=u.compileScript(m,S);return await Promise.all([v,g,w]),new c(e,u,p,m,(e=>("$view"in e&&e.$view&&(_.setField("scale",e.$view.scale),e.$view=_),h&&(e.$config=h),b({vars:e,spatialReference:f}))),new d,r,f)}repurposeFeature(e){return e.geometry&&!e.geometry.spatialReference&&(e.geometry.spatialReference=this._spatialReference),this._arcadeFeature.repurposeFromGraphicLikeObject(e.geometry,e.attributes,{fields:this.fields}),this._arcadeFeature}repurposeAdapter(e){return this._arcadeFeature.repurposeFromAdapter(e,{fields:this.fields}),this._arcadeFeature}createDictionary(){return new this._arcadeDictionary}referencesMember(e){return this._arcade.referencesMember(this._syntaxTree,e)}referencesFunction(e){return this._arcade.referencesFunction(this._syntaxTree,e)}referencesGeometry(){return this._referencesGeometry}referencesScale(){return this._referencesScale}extractFieldLiterals(){return this._arcade.extractExpectedFieldLiterals(this._syntaxTree)}}}}]);