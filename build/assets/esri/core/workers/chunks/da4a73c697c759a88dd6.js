"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1496,5235,2515],{66643:(e,t,r)=>{r.d(t,{Ed:()=>n,UI:()=>a,q6:()=>s,mt:()=>l});var o=r(70586),i=r(95330);function n(e,t,r){return(0,i.as)(e.map(((e,o)=>t.apply(r,[e,o]))))}function a(e,t,r){return(0,i.as)(e.map(((e,o)=>t.apply(r,[e,o])))).then((e=>e.map((e=>e.value))))}function s(e){return(0,o.Wi)(e)?(0,i.DB)():e.then((e=>({ok:!0,value:e}))).catch((e=>({ok:!1,error:e})))}function l(e){return e.then((e=>({ok:!0,value:e}))).catch((e=>((0,i.r9)(e),{ok:!1,error:e})))}},2587:(e,t,r)=>{r(90344),r(18848),r(940),r(70171);var o=r(94443),i=r(3172),n=r(20102),a=r(16358),s=r(70586);async function l(e){if((0,s.pC)(p.fetchBundleAsset))return p.fetchBundleAsset(e);const t=await(0,i.default)(e,{responseType:"text"});return JSON.parse(t.data)}const p={};var d,u=r(99880);(0,o.tz)((d={pattern:"esri/",location:u.V},new class{constructor({base:e="",pattern:t,location:r=new URL(window.location.href)}){let o;o="string"==typeof r?e=>new URL(e,new URL(r,a.Z.location)).href:r instanceof URL?e=>new URL(e,r).href:r,this.pattern="string"==typeof t?new RegExp(`^${t}`):t,this.getAssetUrl=o,e=e?e.endsWith("/")?e:e+"/":"",this.matcher=new RegExp(`^${e}(?:(.*)/)?(.*)$`)}fetchMessageBundle(e,t){return async function(e,t,r,i){const a=t.exec(r);if(!a)throw new n.Z("esri-intl:invalid-bundle",`Bundle id "${r}" is not compatible with the pattern "${t}"`);const s=a[1]?`${a[1]}/`:"",p=a[2],d=(0,o.Su)(i),u=`${s}${p}.json`,c=d?`${s}${p}_${d}.json`:u;let h;try{h=await l(e(c))}catch(t){if(c===u)throw new n.Z("intl:unknown-bundle",`Bundle "${r}" cannot be loaded`,{error:t});try{h=await l(e(u))}catch(e){throw new n.Z("intl:unknown-bundle",`Bundle "${r}" cannot be loaded`,{error:e})}}return h}(this.getAssetUrl,this.matcher,e,t)}}(d)))},90344:(e,t,r)=>{r.d(t,{Ze:()=>g,p6:()=>f});var o=r(35454),i=r(70171);const n={year:"numeric",month:"numeric",day:"numeric"},a={year:"numeric",month:"long",day:"numeric"},s={year:"numeric",month:"short",day:"numeric"},l={year:"numeric",month:"long",weekday:"long",day:"numeric"},p={hour:"numeric",minute:"numeric"},d={...p,second:"numeric"},u={"short-date":n,"short-date-short-time":{...n,...p},"short-date-short-time-24":{...n,...p,hour12:!1},"short-date-long-time":{...n,...d},"short-date-long-time-24":{...n,...d,hour12:!1},"short-date-le":n,"short-date-le-short-time":{...n,...p},"short-date-le-short-time-24":{...n,...p,hour12:!1},"short-date-le-long-time":{...n,...d},"short-date-le-long-time-24":{...n,...d,hour12:!1},"long-month-day-year":a,"long-month-day-year-short-time":{...a,...p},"long-month-day-year-short-time-24":{...a,...p,hour12:!1},"long-month-day-year-long-time":{...a,...d},"long-month-day-year-long-time-24":{...a,...d,hour12:!1},"day-short-month-year":s,"day-short-month-year-short-time":{...s,...p},"day-short-month-year-short-time-24":{...s,...p,hour12:!1},"day-short-month-year-long-time":{...s,...d},"day-short-month-year-long-time-24":{...s,...d,hour12:!1},"long-date":l,"long-date-short-time":{...l,...p},"long-date-short-time-24":{...l,...p,hour12:!1},"long-date-long-time":{...l,...d},"long-date-long-time-24":{...l,...d,hour12:!1},"long-month-year":{month:"long",year:"numeric"},"short-month-year":{month:"short",year:"numeric"},year:{year:"numeric"},"short-time":p,"long-time":d},c=(0,o.wY)()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"}),h=(c.apiValues,c.toJSON.bind(c),c.fromJSON.bind(c),{ar:"ar-u-nu-latn-ca-gregory"});let m=new WeakMap,y=u["short-date-short-time"];function g(e){return u[e]||null}function f(e,t){return function(e){const t=e||y;if(!m.has(t)){const e=(0,i.Kd)(),r=h[(0,i.Kd)()]||e;m.set(t,new Intl.DateTimeFormat(r,t))}return m.get(t)}(t).format(e)}(0,i.Ze)((()=>{m=new WeakMap,y=u["short-date-short-time"]}))},70171:(e,t,r)=>{r.d(t,{Ze:()=>m,Kd:()=>d,qe:()=>c});var o,i,n,a=r(16358);let s;const l=null!=(o=null==(i=a.Z.esriConfig)?void 0:i.locale)?o:null==(n=a.Z.dojoConfig)?void 0:n.locale;function p(){var e,t;return null!=(e=null!=l?l:null==(t=a.Z.navigator)?void 0:t.language)?e:"en"}function d(){return void 0===s&&(s=p()),s}const u=[];function c(e){return u.push(e),{remove(){u.splice(u.indexOf(e),1)}}}const h=[];function m(e){return h.push(e),{remove(){u.splice(h.indexOf(e),1)}}}null==a.Z.addEventListener||a.Z.addEventListener("languagechange",(function(){const e=null!=undefined?undefined:p();s!==e&&(s=e,[...h].forEach((t=>{t.call(null,e)})),[...u].forEach((t=>{t.call(null,e)})))}))},94443:(e,t,r)=>{r.d(t,{ME:()=>h,Su:()=>m,tz:()=>c});var o=r(20102),i=r(95330),n=r(70171);const a=/^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,s={ar:!0,bs:!0,ca:!0,cs:!0,da:!0,de:!0,el:!0,en:!0,es:!0,et:!0,fi:!0,fr:!0,he:!0,hr:!0,hu:!0,id:!0,it:!0,ja:!0,ko:!0,lt:!0,lv:!0,nb:!0,nl:!0,pl:!0,"pt-BR":!0,"pt-PT":!0,ro:!0,ru:!0,sk:!0,sl:!0,sr:!0,sv:!0,th:!0,tr:!0,uk:!0,vi:!0,"zh-CN":!0,"zh-HK":!0,"zh-TW":!0};function l(e){var t;return null!=(t=s[e])&&t}const p=[],d=new Map;function u(e){for(const t of d.keys())y(e.pattern,t)&&d.delete(t)}function c(e){return p.includes(e)||(u(e),p.unshift(e)),{remove(){const t=p.indexOf(e);t>-1&&(p.splice(t,1),u(e))}}}async function h(e){const t=(0,n.Kd)();d.has(e)||d.set(e,async function(e,t){const r=[];for(const o of p)if(y(o.pattern,e))try{return await o.fetchMessageBundle(e,t)}catch(e){r.push(e)}if(r.length)throw new o.Z("intl:message-bundle-error",`Errors occurred while loading "${e}"`,{errors:r});throw new o.Z("intl:no-message-bundle-loader",`No loader found for message bundle "${e}"`)}(e,t));const r=d.get(e);return await g.add(r),r}function m(e){if(!a.test(e))return null;const[,t,r]=a.exec(e),o=t+(r?"-"+r.toUpperCase():"");return l(o)?o:l(t)?t:null}function y(e,t){return"string"==typeof e?t.startsWith(e):e.test(t)}(0,n.Ze)((()=>{d.clear()}));const g=new class{constructor(){this._numLoading=0}async waitForAll(){this._dfd&&await this._dfd.promise}add(e){return this._increase(),e.then((()=>this._decrease()),(()=>this._decrease())),this.waitForAll()}_increase(){this._numLoading++,this._dfd||(this._dfd=(0,i.dD)())}_decrease(){this._numLoading=Math.max(this._numLoading-1,0),this._dfd&&0===this._numLoading&&(this._dfd.resolve(),this._dfd=null)}}},18848:(e,t,r)=>{r.d(t,{sh:()=>l,uf:()=>p});var o=r(70586),i=r(70171);const n={ar:"ar-u-nu-latn"};let a=new WeakMap,s={};function l(e={}){const t={};return null!=e.digitSeparator&&(t.useGrouping=e.digitSeparator),null!=e.places&&(t.minimumFractionDigits=t.maximumFractionDigits=e.places),t}function p(e,t){return function(e){const t=e||s;if(!a.has(t)){const r=(0,i.Kd)(),o=n[(0,i.Kd)()]||r;a.set(t,new Intl.NumberFormat(o,e))}return(0,o.j0)(a.get(t))}(t).format(e)}(0,i.Ze)((()=>{a=new WeakMap,s={}}))},940:(e,t,r)=>{r.d(t,{n:()=>p});var o=r(92604),i=r(78286),n=r(19153),a=r(90344),s=r(18848);const l=o.Z.getLogger("esri.intl");function p(e,t,r={}){const{format:o={}}=r;return(0,n.gx)(e,(e=>function(e,t,r){let o,n;const a=e.indexOf(":");if(-1===a?o=e.trim():(o=e.slice(0,a).trim(),n=e.slice(a+1).trim()),!o)return"";const s=(0,i.hS)(o,t);if(null==s)return"";const l=r[n]||r[o];return l?d(s,l):n?u(s,n):c(s)}(e,t,o)))}function d(e,t){switch(t.type){case"date":return(0,a.p6)(e,t.intlOptions);case"number":return(0,s.uf)(e,t.intlOptions);default:return l.warn("missing format descriptor for key {key}"),c(e)}}function u(e,t){switch(t.toLowerCase()){case"dateformat":return(0,a.p6)(e);case"numberformat":return(0,s.uf)(e);default:return l.warn(`inline format is unsupported since 4.12: ${t}`),/^(dateformat|datestring)/i.test(t)?(0,a.p6)(e):/^numberformat/i.test(t)?(0,s.uf)(e):c(e)}}function c(e){switch(typeof e){case"string":return e;case"number":return(0,s.uf)(e);case"boolean":return""+e;default:return e instanceof Date?(0,a.p6)(e):""}}},54295:(e,t,r)=>{r.d(t,{V:()=>a});var o=r(43697),i=r(5600),n=(r(80442),r(75215),r(92604),r(52525));const a=e=>{let t=class extends e{get apiKey(){var e;return this._isOverridden("apiKey")?this._get("apiKey"):function(e){return"portalItem"in e}(this)?null==(e=this.portalItem)?void 0:e.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,o._)([(0,i.Cb)({type:String})],t.prototype,"apiKey",null),t=(0,o._)([(0,n.j)("esri.layers.mixins.APIKeyMixin")],t),t}},17287:(e,t,r)=>{r.d(t,{Y:()=>p});var o=r(43697),i=r(92604),n=r(70586),a=r(5600),s=(r(80442),r(75215),r(52525)),l=r(66677);const p=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,l.Qc)(this.url);if((0,n.pC)(e)&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,l.Nm)(e,i.Z.getLogger(this.declaredClass)))}};return(0,o._)([(0,a.Cb)()],t.prototype,"title",null),(0,o._)([(0,a.Cb)({type:String})],t.prototype,"url",null),t=(0,o._)([(0,s.j)("esri.layers.mixins.ArcGISService")],t),t}},17017:(e,t,r)=>{r.d(t,{N:()=>a});var o=r(43697),i=r(5600),n=(r(80442),r(75215),r(92604),r(52525));const a=e=>{let t=class extends e{constructor(){super(...arguments),this.customParameters=null}};return(0,o._)([(0,i.Cb)({type:Object,json:{write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0)})}}})],t.prototype,"customParameters",void 0),t=(0,o._)([(0,n.j)("esri.layers.mixins.CustomParametersMixin")],t),t}},70082:(e,t,r)=>{r.d(t,{Z:()=>c});var o=r(43697),i=r(35454),n=r(10736),a=r(22974),s=r(5600),l=(r(75215),r(80442),r(92604),r(52525)),p=r(30556);const d=new i.Xn({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let u=class extends n.wq{constructor(e){super(e),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null}writeDrawingTool(e,t){t.drawingTool=d.toJSON(e)}writePrototype(e,t){t.prototype=(0,a.yd)((0,a.d9)(e),!0)}writeThumbnail(e,t){t.thumbnail=(0,a.yd)((0,a.d9)(e))}};(0,o._)([(0,s.Cb)({json:{write:!0}})],u.prototype,"name",void 0),(0,o._)([(0,s.Cb)({json:{write:!0}})],u.prototype,"description",void 0),(0,o._)([(0,s.Cb)({json:{read:d.read,write:d.write}})],u.prototype,"drawingTool",void 0),(0,o._)([(0,p.c)("drawingTool")],u.prototype,"writeDrawingTool",null),(0,o._)([(0,s.Cb)({json:{write:!0}})],u.prototype,"prototype",void 0),(0,o._)([(0,p.c)("prototype")],u.prototype,"writePrototype",null),(0,o._)([(0,s.Cb)({json:{write:!0}})],u.prototype,"thumbnail",void 0),(0,o._)([(0,p.c)("thumbnail")],u.prototype,"writeThumbnail",null),u=(0,o._)([(0,l.j)("esri.layers.support.FeatureTemplate")],u);var c=u},16451:(e,t,r)=>{r.d(t,{Z:()=>y});var o=r(43697),i=r(10736),n=r(22974),a=r(5600),s=(r(75215),r(80442),r(92604),r(71715)),l=r(52525),p=r(30556),d=r(35643),u=(r(6933),r(91764)),c=r(69150),h=r(70082);let m=class extends i.wq{constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={};for(const r in e)if(e.hasOwnProperty(r)){const o=e[r];switch(o.type){case"range":t[r]=c.Z.fromJSON(o);break;case"codedValue":t[r]=d.Z.fromJSON(o);break;case"inherited":t[r]=u.Z.fromJSON(o)}}return t}writeDomains(e,t){const r={};for(const t in e)e.hasOwnProperty(t)&&(r[t]=e[t]&&e[t].toJSON());(0,n.yd)(r),t.domains=r}readTemplates(e){return e&&e.map((e=>new h.Z(e)))}writeTemplates(e,t){t.templates=e&&e.map((e=>e.toJSON()))}};(0,o._)([(0,a.Cb)({json:{write:!0}})],m.prototype,"id",void 0),(0,o._)([(0,a.Cb)({json:{write:!0}})],m.prototype,"name",void 0),(0,o._)([(0,a.Cb)({json:{write:!0}})],m.prototype,"domains",void 0),(0,o._)([(0,s.r)("domains")],m.prototype,"readDomains",null),(0,o._)([(0,p.c)("domains")],m.prototype,"writeDomains",null),(0,o._)([(0,a.Cb)({json:{write:!0}})],m.prototype,"templates",void 0),(0,o._)([(0,s.r)("templates")],m.prototype,"readTemplates",null),(0,o._)([(0,p.c)("templates")],m.prototype,"writeTemplates",null),m=(0,o._)([(0,l.j)("esri.layers.support.FeatureType")],m);var y=m},56765:(e,t,r)=>{r.d(t,{Z:()=>d});var o,i=r(43697),n=r(81049),a=r(10736),s=r(5600),l=(r(80442),r(75215),r(92604),r(52525));let p=o=class extends a.wq{constructor(e){super(e),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new n.Z}clone(){return new o({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};(0,i._)([(0,s.Cb)({type:String,json:{write:!0}})],p.prototype,"floorField",void 0),(0,i._)([(0,s.Cb)({json:{read:!1,write:!1}})],p.prototype,"viewAllMode",void 0),(0,i._)([(0,s.Cb)({json:{read:!1,write:!1}})],p.prototype,"viewAllLevelIds",void 0),p=o=(0,i._)([(0,l.j)("esri.layers.support.LayerFloorInfo")],p);var d=p},15235:(e,t,r)=>{r.r(t),r.d(t,{default:()=>T});var o=r(43697),i=r(99880),n=r(20102),a=r(10736),s=r(22974),l=r(83379),p=r(70586),d=r(17452),u=r(5600),c=r(75215),h=(r(80442),r(92604)),m=r(71715),y=r(52525),g=r(6570),f=r(65587),w=r(18855),v=r(90578);const b=h.Z.getLogger("esri.portal.PortalItemResource");let _=class extends w.Z{constructor(e){super(e),this.portalItem=null}normalizeCtorArgs(e){return e&&e.portalItem&&e.path?{...e,path:this.normalizePath(e.path,e.portalItem)}:e}set path(e){(0,p.pC)(e)&&(0,d.YP)(e)?b.error("portalitemresource:invalid-path","A portal item resource path must be relative"):this._set("path",e)}_castPath(e){return this.normalizePath(e,this.portalItem)}get url(){return this.portalItem&&this.path?`${this.portalItem.itemUrl}/resources/${this.path}`:null}get itemRelativeUrl(){return this.portalItem&&this.path?`./resources/${this.path}`:null}fetch(e="json",t){const r=this.url;if((0,p.Wi)(r))throw new n.Z("portal-item-resource:fetch","Portal item resource does not refer to a valid item or path");return this.portalItem.portal._request(r,{responseType:e,query:{token:this.portalItem.apiKey},signal:(0,p.U2)(t,"signal")})}async update(e,t){return(await r.e(7873).then(r.bind(r,97873))).addOrUpdateResource(this,"update",e,t)}hasPath(){return(0,p.pC)(this.path)}normalizePath(e,t){return(0,p.Wi)(e)?e:(e=e.replace(/^\/+/,""),(0,p.pC)(t)&&(0,d.YP)(e)&&(e=(0,d.PF)(e,t.itemUrl)),e.replace(/^\/+/,"").replace(/^(\.\/)?resources\//,""))}};(0,o._)([(0,u.Cb)()],_.prototype,"portalItem",void 0),(0,o._)([(0,u.Cb)({type:String,value:null})],_.prototype,"path",null),(0,o._)([(0,v.p)("path")],_.prototype,"_castPath",null),(0,o._)([(0,u.Cb)({type:String,readOnly:!0})],_.prototype,"url",null),(0,o._)([(0,u.Cb)({type:String,readOnly:!0})],_.prototype,"itemRelativeUrl",null),_=(0,o._)([(0,y.j)("esri.portal.PortalItemResource")],_);var k=_;let x=class extends w.Z{constructor(e){super(e),this.created=null,this.rating=null}};(0,o._)([(0,u.Cb)()],x.prototype,"created",void 0),(0,o._)([(0,u.Cb)()],x.prototype,"rating",void 0),x=(0,o._)([(0,y.j)("esri.portal.PortalRating")],x);var C,S=x;let O=C=class extends((0,a.eC)(l.Z)){constructor(e){super(e),this.access=null,this.accessInformation=null,this.apiKey=null,this.applicationProxies=null,this.avgRating=null,this.categories=null,this.created=null,this.culture=null,this.description=null,this.extent=null,this.groupCategories=null,this.id=null,this.itemControl=null,this.licenseInfo=null,this.modified=null,this.name=null,this.numComments=null,this.numRatings=null,this.numViews=null,this.owner=null,this.ownerFolder=null,this.portal=null,this.screenshots=null,this.size=null,this.snippet=null,this.sourceJSON=null,this.tags=null,this.title=null,this.type=null,this.typeKeywords=null,this.url=null}static from(e){return(0,c.TJ)(C,e)}destroy(){this.portal=null}get displayName(){const e=this.type,t=this.typeKeywords||[];let r=e;return"Feature Service"===e||"Feature Collection"===e?r=t.indexOf("Table")>-1?"Table":t.indexOf("Route Layer")>-1?"Route Layer":t.indexOf("Markup")>-1?"Markup":"Feature Layer":"Image Service"===e?r=t.indexOf("Elevation 3D Layer")>-1?"Elevation Layer":t.indexOf("Tiled Imagery")>-1?"Tiled Imagery Layer":"Imagery Layer":"Scene Service"===e?r="Scene Layer":"Scene Package"===e?r="Scene Layer Package":"Stream Service"===e?r="Feature Layer":"Geoprocessing Service"===e&&this.portal&&this.portal.isPortal?r=t.indexOf("Web Tool")>-1?"Tool":"Geoprocessing Service":"Geocoding Service"===e?r="Locator":"Geoenrichment Service"===e?r="GeoEnrichment Service":"Microsoft Powerpoint"===e?r="Microsoft PowerPoint":"GeoJson"===e?r="GeoJSON":"Globe Service"===e?r="Globe Layer":"Vector Tile Service"===e?r="Tile Layer":"netCDF"===e?r="NetCDF":"Map Service"===e?r=-1===t.indexOf("Spatiotemporal")&&(t.indexOf("Hosted Service")>-1||t.indexOf("Tiled")>-1)&&-1===t.indexOf("Relational")?"Tile Layer":"Map Image Layer":e&&e.toLowerCase().indexOf("add in")>-1?r=e.replace(/(add in)/gi,"Add-In"):"datastore catalog service"===e?r="Big Data File Share":"Compact Tile Package"===e?r="Tile Package (tpkx)":"OGCFeatureServer"===e&&(r="OGC Feature Layer"),r}readExtent(e){return e&&e.length?new g.Z(e[0][0],e[0][1],e[1][0],e[1][1]):null}get iconUrl(){const e=this.type&&this.type.toLowerCase()||"",t=this.typeKeywords||[];let r,o=!1,n=!1,a=!1,s=!1,l=!1,p=!1;return e.indexOf("service")>0||"feature collection"===e||"kml"===e||"wms"===e||"wmts"===e||"wfs"===e?(o=t.indexOf("Hosted Service")>-1,"feature service"===e||"feature collection"===e||"kml"===e||"wfs"===e?(n=t.indexOf("Table")>-1,a=t.indexOf("Route Layer")>-1,s=t.indexOf("Markup")>-1,l=-1!==t.indexOf("Spatiotemporal"),p=-1!==t.indexOf("UtilityNetwork"),r=l&&n?"spatiotemporaltable":n?"table":a?"routelayer":s?"markup":l?"spatiotemporal":o?"featureshosted":p?"utilitynetwork":"features"):r="map service"===e||"wms"===e||"wmts"===e?o||t.indexOf("Tiled")>-1||"wmts"===e?"maptiles":"mapimages":"scene service"===e?t.indexOf("Line")>-1?"sceneweblayerline":t.indexOf("3DObject")>-1?"sceneweblayermultipatch":t.indexOf("Point")>-1?"sceneweblayerpoint":t.indexOf("IntegratedMesh")>-1?"sceneweblayermesh":t.indexOf("PointCloud")>-1?"sceneweblayerpointcloud":t.indexOf("Polygon")>-1?"sceneweblayerpolygon":t.indexOf("Building")>-1?"sceneweblayerbuilding":t.indexOf("Voxel")>-1?"sceneweblayervoxel":"sceneweblayer":"image service"===e?t.indexOf("Elevation 3D Layer")>-1?"elevationlayer":t.indexOf("Tiled Imagery")>-1?"tiledimagerylayer":"imagery":"stream service"===e?"streamlayer":"vector tile service"===e?"vectortile":"datastore catalog service"===e?"datastorecollection":"geocoding service"===e?"geocodeservice":"geoprocessing service"===e&&t.indexOf("Web Tool")>-1&&this.portal&&this.portal.isPortal?"tool":"layers"):r="web map"===e||"cityengine web scene"===e?"maps":"web scene"===e?t.indexOf("ViewingMode-Local")>-1?"webscenelocal":"websceneglobal":"web mapping application"===e||"mobile application"===e||"application"===e||"operation view"===e||"desktop application"===e?"apps":"map document"===e||"map package"===e||"published map"===e||"scene document"===e||"globe document"===e||"basemap package"===e||"mobile basemap package"===e||"mobile map package"===e||"project package"===e||"project template"===e||"pro map"===e||"layout"===e||"layer"===e&&t.indexOf("ArcGIS Pro")>-1||"explorer map"===e&&t.indexOf("Explorer Document")?"mapsgray":"service definition"===e||"csv"===e||"shapefile"===e||"cad drawing"===e||"geojson"===e||"360 vr experience"===e||"netcdf"===e||"administrative report"===e?"datafiles":"explorer add in"===e||"desktop add in"===e||"windows viewer add in"===e||"windows viewer configuration"===e?"appsgray":"arcgis pro add in"===e||"arcgis pro configuration"===e?"addindesktop":"rule package"===e||"file geodatabase"===e||"sqlite geodatabase"===e||"csv collection"===e||"kml collection"===e||"windows mobile package"===e||"map template"===e||"desktop application template"===e||"gml"===e||"arcpad package"===e||"code sample"===e||"form"===e||"document link"===e||"earth configuration"===e||"operations dashboard add in"===e||"rules package"===e||"image"===e||"workflow manager package"===e||"explorer map"===e&&t.indexOf("Explorer Mapping Application")>-1||t.indexOf("Document")>-1?"datafilesgray":"network analysis service"===e||"geoprocessing service"===e||"geodata service"===e||"geometry service"===e||"geoprocessing package"===e||"locator package"===e||"geoprocessing sample"===e||"workflow manager service"===e?"toolsgray":"layer"===e||"layer package"===e||"explorer layer"===e?"layersgray":"scene package"===e?"scenepackage":"mobile scene package"===e?"mobilescenepackage":"tile package"===e||"compact tile package"===e?"tilepackage":"task file"===e?"taskfile":"report template"===e?"report-template":"statistical data collection"===e?"statisticaldatacollection":"insights workbook"===e?"workbook":"insights model"===e?"insightsmodel":"insights page"===e?"insightspage":"insights theme"===e?"insightstheme":"hub initiative"===e?"hubinitiative":"hubpage"===e?"hubpage":"hub event"===e?"hubevent":"hub site application"===e?"hubsite":"relational database connection"===e?"relationaldatabaseconnection":"big data file share"===e?"datastorecollection":"image collection"===e?"imagecollection":"style"===e?"style":"desktop style"===e?"desktopstyle":"dashboard"===e?"dashboard":"raster function template"===e?"rasterprocessingtemplate":"vector tile package"===e?"vectortilepackage":"ortho mapping project"===e?"orthomappingproject":"ortho mapping template"===e?"orthomappingtemplate":"solution"===e?"solutions":"geopackage"===e?"geopackage":"deep learning package"===e?"deeplearningpackage":"real time analytic"===e?"realtimeanalytics":"big data analytic"===e?"bigdataanalytics":"feed"===e?"feed":"excalibur imagery project"===e?"excaliburimageryproject":"notebook"===e?"notebook":"storymap"===e?"storymap":"survey123 add in"===e?"survey123addin":"mission"===e?"mission":"mission report"===e?"missionreport":"quickcapture project"===e?"quickcaptureproject":"pro report"===e?"proreport":"urban model"===e?"urbanmodel":"web experience"===e?"experiencebuilder":"web experience template"===e?"webexperiencetemplate":"workflow"===e?"workflow":"insights script"===e?"insightsscript":"kernel gateway connection"===e?"kernelgatewayconnection":"hub initiative template"===e?"hubinitiativetemplate":"storymap theme"===e?"storymaptheme":"knowledge graph"===e?"knowledgegraph":"native application"===e?"nativeapp":"native application installer"===e?"nativeappinstaller":"link chart"===e?"linkchart":"investigation"===e?"investigation":"ogcfeatureserver"===e?"features":"pro project"===e?"proproject":"insights workbook package"===e?"insightsworkbookpackage":"apache parquet"===e?"apacheparquet":"maps",r?(0,i.V)("esri/images/portal/"+r+"16.png"):null}get isLayer(){return["Map Service","Feature Service","Feature Collection","Scene Service","Image Service","Stream Service","Vector Tile Service","WMTS","WMS"].indexOf(this.type)>-1}get itemUrl(){const e=this.get("portal.restUrl");return e?e+"/content/items/"+this.id:null}get thumbnailUrl(){const e=this.itemUrl,t=this.thumbnail;return e&&t?this.portal._normalizeUrl(`${e}/info/${t}?f=json`):null}get userItemUrl(){const e=this.get("portal.restUrl");if(!e)return null;const t=this.owner||this.get("portal.user.username");return t?`${e}/content/users/${this.ownerFolder?`${t}/${this.ownerFolder}`:t}/items/${this.id}`:null}load(e){this.portal||(this.portal=f.Z.getDefault());const t=this.portal.load(e).then((()=>this.sourceJSON?this.sourceJSON:this.id&&this.itemUrl?this.portal._request(this.itemUrl,{signal:(0,p.pC)(e)?e.signal:null,query:{token:this.apiKey}}):{})).then((e=>{this.sourceJSON=e,this.read(e)}));return this.addResolvingPromise(t),Promise.resolve(this)}addRating(e){const t={method:"post",query:{}};return e instanceof S&&(e=e.rating),isNaN(e)||"number"!=typeof e||(t.query.rating=e),this.portal._request(this.itemUrl+"/addRating",t).then((()=>new S({rating:e,created:new Date})))}clone(){const e={access:this.access,accessInformation:this.accessInformation,applicationProxies:(0,s.d9)(this.applicationProxies),avgRating:this.avgRating,categories:(0,s.d9)(this.categories),created:(0,s.d9)(this.created),culture:this.culture,description:this.description,extent:(0,s.d9)(this.extent),groupCategories:(0,s.d9)(this.groupCategories),id:this.id,itemControl:this.itemControl,licenseInfo:this.licenseInfo,modified:(0,s.d9)(this.modified),name:this.name,numComments:this.numComments,numRatings:this.numRatings,numViews:this.numViews,owner:this.owner,ownerFolder:this.ownerFolder,portal:this.portal,screenshots:(0,s.d9)(this.screenshots),size:this.size,snippet:this.snippet,tags:(0,s.d9)(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:(0,s.d9)(this.typeKeywords),url:this.url};return this.loaded&&(e.loadStatus="loaded"),new C({sourceJSON:this.sourceJSON}).set(e)}createPostQuery(){const e=this.toJSON();for(const t in e)"tags"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"typeKeywords"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"extent"===t&&e[t]&&(e[t]=JSON.stringify(e[t]));return e}deleteRating(){return this.portal._request(this.itemUrl+"/deleteRating",{method:"post"}).then((()=>{}))}fetchData(e="json",t){return this.portal._request(this.itemUrl+"/data",{responseType:e,...t,query:{token:this.apiKey}})}fetchRating(e){return this.portal._request(this.itemUrl+"/rating",{query:{token:this.apiKey},...e}).then((e=>null!=e.rating?(e.created=new Date(e.created),new S(e)):null))}fetchRelatedItems(e,t){return this.portal._requestToTypedArray(this.itemUrl+"/relatedItems",{query:{...e,token:this.apiKey},...t},C)}getThumbnailUrl(e){let t=this.thumbnailUrl;return t&&e&&(t+=`&w=${e}`),t}reload(){return this.portal._request(this.itemUrl,{cacheBust:!0,query:{token:this.apiKey}}).then((e=>(this.sourceJSON=e,this.read(e),this)))}update(e){return this.id?this.load().then((()=>this.portal._signIn())).then((()=>{const t=e&&e.data,r={method:"post"};r.query=this.createPostQuery();for(const e in r.query)null===r.query[e]&&(r.query[e]="");return r.query.clearEmptyFields=!0,null!=t&&("string"==typeof t?r.query.text=t:"object"==typeof t&&(r.query.text=JSON.stringify(t))),this.portal._request(`${this.userItemUrl}/update`,r).then((()=>this.reload()))})):Promise.reject(new n.Z("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}updateThumbnail(e){return this.id?this.load().then((()=>this.portal._signIn())).then((()=>{const t=e.thumbnail,r=e.filename,o={method:"post"};if("string"==typeof t)(0,d.HK)(t)?o.query={data:t}:o.query={url:(0,d.hF)(t)},(0,p.pC)(r)&&(o.query.filename=r);else{const e=new FormData;(0,p.pC)(r)?e.append("file",t,r):e.append("file",t),o.body=e}return this.portal._request(`${this.userItemUrl}/updateThumbnail`,o).then((()=>this.reload()))})):Promise.reject(new n.Z("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}async fetchResources(e={},t){return(await r.e(7873).then(r.bind(r,97873))).fetchResources(this,e,t)}async addResource(e,t,o){const i=await r.e(7873).then(r.bind(r,97873));return e.portalItem=this,i.addOrUpdateResource(e,"add",t,o)}async removeResource(e,t){const o=await r.e(7873).then(r.bind(r,97873));if(e.portalItem&&e.portalItem.itemUrl!==this.itemUrl)throw new n.Z("removeresource:portal-item-mismatch","The portal item associated with the provided resource does not match the item");return o.removeResource(this,e,t)}async removeAllResources(e){return(await r.e(7873).then(r.bind(r,97873))).removeAllResources(this,e)}resourceFromPath(e){return new k({portalItem:this,path:e})}toJSON(){const e=this.extent,t={created:this.created&&this.created.getTime(),description:this.description,extent:e&&[[e.xmin,e.ymin],[e.xmax,e.ymax]],id:this.id,modified:this.modified&&this.modified.getTime(),name:this.name,owner:this.owner,ownerFolder:this.ownerFolder,snippet:this.snippet,tags:this.tags,thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:this.typeKeywords,url:this.url};return(0,s.yd)(t)}static fromJSON(e){if(!e)return null;if(e.declaredClass)throw new Error("JSON object is already hydrated");return new C({sourceJSON:e})}_getPostQuery(){const e=this.toJSON();for(const t in e)"tags"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"typeKeywords"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"extent"===t&&e[t]&&(e[t]=JSON.stringify(e[t]));return e}};(0,o._)([(0,u.Cb)({type:["private","shared","org","public"]})],O.prototype,"access",void 0),(0,o._)([(0,u.Cb)()],O.prototype,"accessInformation",void 0),(0,o._)([(0,u.Cb)({type:String})],O.prototype,"apiKey",void 0),(0,o._)([(0,u.Cb)({json:{read:{source:"appProxies"}}})],O.prototype,"applicationProxies",void 0),(0,o._)([(0,u.Cb)()],O.prototype,"avgRating",void 0),(0,o._)([(0,u.Cb)()],O.prototype,"categories",void 0),(0,o._)([(0,u.Cb)({type:Date})],O.prototype,"created",void 0),(0,o._)([(0,u.Cb)()],O.prototype,"culture",void 0),(0,o._)([(0,u.Cb)()],O.prototype,"description",void 0),(0,o._)([(0,u.Cb)({readOnly:!0})],O.prototype,"displayName",null),(0,o._)([(0,u.Cb)({type:g.Z})],O.prototype,"extent",void 0),(0,o._)([(0,m.r)("extent")],O.prototype,"readExtent",null),(0,o._)([(0,u.Cb)()],O.prototype,"groupCategories",void 0),(0,o._)([(0,u.Cb)({readOnly:!0})],O.prototype,"iconUrl",null),(0,o._)([(0,u.Cb)()],O.prototype,"id",void 0),(0,o._)([(0,u.Cb)({readOnly:!0})],O.prototype,"isLayer",null),(0,o._)([(0,u.Cb)()],O.prototype,"itemControl",void 0),(0,o._)([(0,u.Cb)({readOnly:!0})],O.prototype,"itemUrl",null),(0,o._)([(0,u.Cb)()],O.prototype,"licenseInfo",void 0),(0,o._)([(0,u.Cb)({type:Date})],O.prototype,"modified",void 0),(0,o._)([(0,u.Cb)()],O.prototype,"name",void 0),(0,o._)([(0,u.Cb)()],O.prototype,"numComments",void 0),(0,o._)([(0,u.Cb)()],O.prototype,"numRatings",void 0),(0,o._)([(0,u.Cb)()],O.prototype,"numViews",void 0),(0,o._)([(0,u.Cb)()],O.prototype,"owner",void 0),(0,o._)([(0,u.Cb)()],O.prototype,"ownerFolder",void 0),(0,o._)([(0,u.Cb)({type:f.Z})],O.prototype,"portal",void 0),(0,o._)([(0,u.Cb)()],O.prototype,"screenshots",void 0),(0,o._)([(0,u.Cb)()],O.prototype,"size",void 0),(0,o._)([(0,u.Cb)()],O.prototype,"snippet",void 0),(0,o._)([(0,u.Cb)()],O.prototype,"sourceJSON",void 0),(0,o._)([(0,u.Cb)()],O.prototype,"tags",void 0),(0,o._)([(0,u.Cb)()],O.prototype,"thumbnail",void 0),(0,o._)([(0,u.Cb)({readOnly:!0})],O.prototype,"thumbnailUrl",null),(0,o._)([(0,u.Cb)()],O.prototype,"title",void 0),(0,o._)([(0,u.Cb)()],O.prototype,"type",void 0),(0,o._)([(0,u.Cb)()],O.prototype,"typeKeywords",void 0),(0,o._)([(0,u.Cb)()],O.prototype,"url",void 0),(0,o._)([(0,u.Cb)({readOnly:!0})],O.prototype,"userItemUrl",null),O=C=(0,o._)([(0,y.j)("esri.portal.PortalItem")],O);var T=O},51706:(e,t,r)=>{function o(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function i(e){return null!=e&&!isNaN(e)&&isFinite(e)}function n(e){return e.valueExpression?"expression":e.field&&"string"==typeof e.field?"field":"unknown"}function a(e,t){const r=t||n(e),o=e.valueUnit||"unknown";return"unknown"===r?"constant":e.stops?"stops":null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?"clamped-linear":"unknown"===o?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?"proportional":"additive":"identity":"real-world-size"}r.d(t,{PS:()=>n,QW:()=>a,iY:()=>o,qh:()=>i})}}]);