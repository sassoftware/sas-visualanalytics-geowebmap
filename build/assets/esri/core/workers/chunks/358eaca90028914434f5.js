"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[6508],{99880:(e,t,r)=>{r.d(t,{V:()=>a});var o=r(68773),s=(r(3172),r(20102)),n=r(92604),i=r(17452);const l=n.Z.getLogger("esri.assets");function a(e){if(!o.Z.assetsPath)throw l.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new s.Z("assets:path-not-set","config.assetsPath is not set");return(0,i.v_)(o.Z.assetsPath,e)}},61247:(e,t,r)=>{r.d(t,{Z:()=>u});var o=r(43697),s=r(18855),n=r(81049),i=r(70586),l=r(5600),a=r(52525);let p=class extends s.Z{constructor(e){super(e),this._groups=new Map}destroy(){this.removeAll()}get size(){let e=0;return this._groups.forEach((t=>{e+=t.length})),e}add(e,t){if(!this._isHandle(e)&&!Array.isArray(e)&&!n.Z.isCollection(e))return this;const r=this._getOrCreateGroup(t);return Array.isArray(e)||n.Z.isCollection(e)?e.forEach((e=>this._isHandle(e)&&r.push(e))):r.push(e),this.notifyChange("size"),this}forEach(e,t){if("function"==typeof e)this._groups.forEach((t=>t.forEach(e)));else{const r=this._getGroup(e);r&&t&&r.forEach(t)}}has(e){return this._groups.has(this._ensureGroupKey(e))}remove(e){if(Array.isArray(e)||n.Z.isCollection(e))return e.forEach(this.remove,this),this;if(!this.has(e))return this;const t=this._getGroup(e);for(let e=0;e<t.length;e++)t[e].remove();return this._deleteGroup(e),this.notifyChange("size"),this}removeAll(){return this._groups.forEach((e=>{for(let t=0;t<e.length;t++)e[t].remove()})),this._groups.clear(),this.notifyChange("size"),this}_isHandle(e){return e&&!!e.remove}_getOrCreateGroup(e){if(this.has(e))return this._getGroup(e);const t=[];return this._groups.set(this._ensureGroupKey(e),t),t}_getGroup(e){return(0,i.j0)(this._groups.get(this._ensureGroupKey(e)))}_deleteGroup(e){return this._groups.delete(this._ensureGroupKey(e))}_ensureGroupKey(e){return e||"_default_"}};(0,o._)([(0,l.Cb)({readOnly:!0})],p.prototype,"size",null),p=(0,o._)([(0,a.j)("esri.core.Handles")],p);var u=p},43050:(e,t,r)=>{r.d(t,{S1:()=>i,on:()=>c,OY:()=>u,cm:()=>a,N1:()=>l,LR:()=>p,tH:()=>d});var o=r(91460),s=(r(22974),r(95330));const n=/\?(\.|$)/g;function i(e,t,r,o){const s=Array.isArray(t)?t:t.indexOf(",")>-1?t.split(","):[t],i=function(e,t,r,o){return e.watch(t,r,o)}(e,t,r,o);for(const t of s){const o=t.trim().replace(n,"$1"),s=e.get(o);r.call(e,s,s,o,e)}return i}function l(e,t,r,o){return d(e,t,h,r,o)}function a(e,t,r,o){return d(e,t,y,r,o)}function p(e,t,r,o){return d(e,t,m,r,o)}function u(e,t,r,o){return d(e,t,f,r,o)}function c(e,t,r,s,n,l,a){const p={};function u(t){const o=p[t];o&&(l&&l(o.target,t,e,r),o.handle.remove(),delete p[t])}const c=i(e,t,((t,i,l)=>{u(l),(0,o.vT)(t)&&(p[l]={handle:(0,o.on)(t,r,s),target:t},n&&n(t,l,e,r))}),a);return{remove(){c.remove();for(const e in p)u(e)}}}function d(e,t,r,o,n){const i="function"==typeof o?o:null,l="object"==typeof o?o:null;"boolean"==typeof o&&(n=o);let a,p=!1;function u(){a&&(a.remove(),a=null)}const c=(0,s.dD)();(0,s.fu)(l,(()=>{u(),c.reject((0,s.zE)())}));const d={then:c.promise.then.bind(c.promise),catch:c.promise.catch.bind(c.promise),remove:u};return Object.freeze(d),a=function(e,t,r,o,s){const n=e.watch(t,((t,s,n,i)=>{r&&!r(t)||null==o||o.call(e,t,s,n,i)}),s);if(Array.isArray(t))for(const s of t){const n=e.get(s);r&&r(n)&&(null==o||o.call(e,n,n,t,e))}else{const s=e.get(t);r&&r(s)&&(null==o||o.call(e,s,s,t,e))}return n}(e,t,r,((t,r,o,s)=>{p=!0,u(),i&&i.call(e,t,r,o,s),c.resolve({value:t,oldValue:r,propertyName:o,target:s})}),n),p&&u(),d}function h(e){return!!e}function y(e){return!e}function m(e){return!0===e}function f(e){return!1===e}},80903:(e,t,r)=>{r.d(t,{Z:()=>a});var o=r(50758),s=r(92604),n=r(95330),i=r(25045);const l=s.Z.getLogger("esri.core.workers.Connection");class a{constructor(){this._clients=new Array,this._clientPromises=new Array,this._clientIdx=0}destroy(){this.close()}get closed(){return!this._clients||!this._clients.length}open(e,t){return new Promise(((r,o)=>{let s=!0;const l=e=>{(0,n.k_)(t.signal),s&&(s=!1,e())};this._clients.length=e.length,this._clientPromises.length=e.length;for(let s=0;s<e.length;++s){const a=e[s];(0,n.y8)(a)?this._clientPromises[s]=a.then((e=>(this._clients[s]=new i.default(e,t),l(r),this._clients[s])),(()=>(l(o),null))):(this._clients[s]=new i.default(a,t),this._clientPromises[s]=Promise.resolve(this._clients[s]),l(r))}}))}broadcast(e,t,r){const o=new Array(this._clientPromises.length);for(let s=0;s<this._clientPromises.length;++s){const n=this._clientPromises[s];o[s]=n.then((o=>o.invoke(e,t,r)))}return o}close(){for(const e of this._clientPromises)e.then((e=>e.close()));this._clients.length=0,this._clientPromises.length=0}getAvailableClient(){let e;for(let t=0;t<this._clients.length;++t){const r=this._clients[t];if(r){if(!r.isBusy())return Promise.resolve(r)}else e=e||[],e.push(this._clientPromises[t])}return e?Promise.race(e):(this._clientIdx=(this._clientIdx+1)%this._clients.length,Promise.resolve(this._clients[this._clientIdx]))}invoke(e,t,r){let o=null;return Array.isArray(r)?(l.warn("invoke()","The transferList parameter is deprecated, use the options object instead"),o={transferList:r}):o=r,this.closed?Promise.reject(new Error("Connection closed")):this.getAvailableClient().then((r=>r.invoke(e,t,o)))}on(e,t){return Promise.all(this._clientPromises).then((()=>(0,o.AL)(this._clients.map((r=>r.on(e,t))))))}openPorts(){return new Promise((e=>{const t=new Array(this._clientPromises.length);let r=t.length;for(let o=0;o<this._clientPromises.length;++o)this._clientPromises[o].then((s=>{t[o]=s.openPort(),0==--r&&e(t)}))}))}get test(){return{numClients:this._clients.length}}}},25045:(e,t,r)=>{r.r(t),r.d(t,{default:()=>_});var o=r(40330),s=r(20102),n=r(91460),i=r(70586),l=r(95330),a=r(94362),p=r(17202);const u={statsWorker:()=>Promise.all([r.e(8778),r.e(6570),r.e(9928),r.e(7267)]).then(r.bind(r,37267)),geometryEngineWorker:()=>Promise.all([r.e(5837),r.e(8227)]).then(r.bind(r,48227)),CSVSourceWorker:()=>Promise.all([r.e(8778),r.e(6570),r.e(9928),r.e(2894),r.e(1534),r.e(2305),r.e(3676),r.e(4324),r.e(9237)]).then(r.bind(r,27793)),EdgeProcessingWorker:()=>Promise.all([r.e(6481),r.e(8936)]).then(r.bind(r,18936)),ElevationSamplerWorker:()=>Promise.all([r.e(8778),r.e(6570),r.e(9928),r.e(2894),r.e(6481),r.e(3675),r.e(5413)]).then(r.bind(r,61787)),FeatureServiceSnappingSourceWorker:()=>Promise.all([r.e(8778),r.e(6570),r.e(9928),r.e(6412),r.e(2894),r.e(1534),r.e(3485),r.e(2305),r.e(3676),r.e(4324),r.e(991)]).then(r.bind(r,41650)),GeoJSONSourceWorker:()=>Promise.all([r.e(8778),r.e(6570),r.e(9928),r.e(2894),r.e(1534),r.e(2305),r.e(3676),r.e(4324),r.e(8479),r.e(7845)]).then(r.bind(r,97845)),LercWorker:()=>r.e(3027).then(r.bind(r,23027)),MemorySourceWorker:()=>Promise.all([r.e(8778),r.e(6570),r.e(9928),r.e(2894),r.e(1534),r.e(2305),r.e(3676),r.e(4324),r.e(8479),r.e(639)]).then(r.bind(r,30639)),PBFDecoderWorker:()=>Promise.all([r.e(8778),r.e(6570),r.e(9928),r.e(3676),r.e(7618)]).then(r.bind(r,61916)),Pipeline:()=>Promise.all([r.e(8778),r.e(6570),r.e(9928),r.e(6412),r.e(2894),r.e(1534),r.e(3485),r.e(2305),r.e(3676),r.e(4324),r.e(6312),r.e(3142)]).then(r.bind(r,53142)),PointCloudWorker:()=>Promise.all([r.e(8778),r.e(6570),r.e(9928),r.e(2894),r.e(9294),r.e(6883)]).then(r.bind(r,16583)),RasterWorker:()=>Promise.all([r.e(8778),r.e(6570),r.e(9928),r.e(7303),r.e(3594)]).then(r.bind(r,61576)),SceneLayerWorker:()=>r.e(5265).then(r.bind(r,55265)),WFSSourceWorker:()=>Promise.all([r.e(8778),r.e(6570),r.e(9928),r.e(2894),r.e(1534),r.e(2305),r.e(3676),r.e(4324),r.e(8479),r.e(6919),r.e(3230)]).then(r.bind(r,43230)),WorkerTileHandler:()=>Promise.all([r.e(3568),r.e(6810),r.e(3388)]).then(r.bind(r,56456))},{CLOSE:c,ABORT:d,INVOKE:h,RESPONSE:y,OPEN_PORT:m,ON:f}=a.Cs;class g{constructor(e){this._timer=null,this._cancelledJobIds=new Set,this._invokeMessages=[],this._invoke=e,this._timer=null,this._process=this._process.bind(this)}push(e){e.type===a.Cs.ABORT?this._cancelledJobIds.add(e.jobId):(this._invokeMessages.push(e),null===this._timer&&(this._timer=setTimeout(this._process,0)))}clear(){this._invokeMessages.length=0,this._cancelledJobIds.clear(),this._timer=null}_process(){this._timer=null;for(const e of this._invokeMessages)this._cancelledJobIds.has(e.jobId)||this._invoke(e);this._cancelledJobIds.clear(),this._invokeMessages.length=0}}class _{constructor(e,t){this._port=e,this._outJobs=new Map,this._inJobs=new Map,this._invokeQueue=new g((e=>this._onInvokeMessage(e))),this._client=t.client,this._onMessage=this._onMessage.bind(this),this._channel=t.channel,this._schedule=t.schedule,this._port.addEventListener("message",this._onMessage),this._port.start()}static connect(e){const t=new MessageChannel;let r;r="function"==typeof e?new e:"default"in e&&"function"==typeof e.default?new e.default:e;const o=new _(t.port1,{channel:t,client:r});return"object"==typeof r&&"remoteClient"in r&&(r.remoteClient=o),_.clients.set(o,r),t.port2}static loadWorker(e){const t=u[e];return t?t():Promise.resolve(null)}close(){this._post({type:c}),this._close()}isBusy(){return this._outJobs.size>0}invoke(e,t,r){const o=r&&r.signal,n=r&&r.transferList;if(!this._port)return Promise.reject(new s.Z("worker:port-closed",`Cannot call invoke('${e}'), port is closed`,{methodName:e,data:t}));const i=(0,a.jt)();return new Promise(((r,s)=>{const a=(0,l.$F)(o,(()=>{var e;const t=this._outJobs.get(i);t&&(this._outJobs.delete(i),null==(e=t.abortHandle)||e.remove(),this._post({type:d,jobId:i}),s((0,l.zE)()))})),p={resolve:r,reject:s,abortHandle:a,debugInfo:e};this._outJobs.set(i,p),this._post({type:h,jobId:i,methodName:e,abortable:null!=o},t,n)}))}on(e,t){const r=new MessageChannel;function o(e){t(e.data)}return this._port.postMessage({type:a.Cs.ON,eventType:e,port:r.port2},[r.port2]),r.port1.addEventListener("message",o),r.port1.start(),{remove(){r.port1.postMessage({type:a.Cs.CLOSE}),r.port1.close(),r.port1.removeEventListener("message",o)}}}openPort(){const e=new MessageChannel;return this._post({type:m,port:e.port2}),e.port1}_close(){this._channel&&(this._channel=null),this._port.removeEventListener("message",this._onMessage),this._port.close(),this._outJobs.forEach((e=>{var t;null==(t=e.abortHandle)||t.remove(),e.reject((0,l.zE)(`Worker closing, aborting job calling '${e.debugInfo}'`))})),this._inJobs.clear(),this._outJobs.clear(),this._invokeQueue.clear(),this._port=this._client=this._schedule=null}_onMessage(e){(0,i.pC)(this._schedule)?this._schedule((()=>this._processMessage(e))):this._processMessage(e)}_processMessage(e){const t=(0,a.QM)(e);if(t)switch(t.type){case y:this._onResponseMessage(t);break;case h:this._invokeQueue.push(t);break;case d:this._onAbortMessage(t);break;case c:this._onCloseMessage();break;case m:this._onOpenPortMessage(t);break;case f:this._onOnMessage(t)}}_onAbortMessage(e){const t=this._inJobs,r=e.jobId,o=t.get(r);this._invokeQueue.push(e),o&&(o.controller&&o.controller.abort(),t.delete(r))}_onCloseMessage(){const e=this._client;this._close(),e&&"destroy"in e&&_.clients.get(this)===e&&e.destroy(),_.clients.delete(this),e&&e.remoteClient&&(e.remoteClient=null)}_onInvokeMessage(e){const{methodName:t,jobId:r,data:o,abortable:s}=e,n=s?(0,l.yi)():null,i=this._inJobs;let p,u=this._client,c=u[t];try{if(!c&&t&&-1!==t.indexOf(".")){const e=t.split(".");for(let t=0;t<e.length-1;t++)u=u[e[t]],c=u[e[t+1]]}if("function"!=typeof c)throw new TypeError(`${t} is not a function`);p=c.call(u,o,{client:this,signal:n?n.signal:null})}catch(e){return void this._post({type:y,jobId:r,error:(0,a.AB)(e)})}(0,l.y8)(p)?(i.set(r,{controller:n,promise:p}),p.then((e=>{i.has(r)&&(i.delete(r),this._post({type:y,jobId:r},e))}),(e=>{i.has(r)&&(i.delete(r),(0,l.D_)(e)||this._post({type:y,jobId:r,error:(0,a.AB)(e||{message:`Error encountered at method ${t}`})}))}))):this._post({type:y,jobId:r},p)}_onOpenPortMessage(e){new _(e.port,{client:this._client})}_onOnMessage(e){const{port:t}=e,r=this._client.on(e.eventType,(e=>{t.postMessage(e)})),o=(0,n.on)(e.port,"message",(e=>{(0,a.QM)(e).type===a.Cs.CLOSE&&(o.remove(),r.remove(),t.close())}))}_onResponseMessage(e){var t;const{jobId:r,error:o,data:n}=e,i=this._outJobs;if(!i.has(r))return;const l=i.get(r);i.delete(r),null==(t=l.abortHandle)||t.remove(),o?l.reject(s.Z.fromJSON(JSON.parse(o))):l.resolve(n)}_post(e,t,r){return(0,a.oi)(this._port,e,t,r)}}_.kernelInfo={revision:p.$,version:o.i8,buildDate:p.r},_.clients=new Map},94362:(e,t,r)=>{r.d(t,{Cs:()=>o,jt:()=>l,oi:()=>p,QM:()=>u,AB:()=>a});var o,s,n=r(80442);(s=o||(o={}))[s.HANDSHAKE=0]="HANDSHAKE",s[s.OPEN=1]="OPEN",s[s.OPENED=2]="OPENED",s[s.RESPONSE=3]="RESPONSE",s[s.INVOKE=4]="INVOKE",s[s.ABORT=5]="ABORT",s[s.CLOSE=6]="CLOSE",s[s.OPEN_PORT=7]="OPEN_PORT",s[s.ON=8]="ON";let i=0;function l(){return i++}function a(e){return e?"string"==typeof e?JSON.stringify({name:"message",message:e}):e.toJSON?JSON.stringify(e):JSON.stringify({name:e.name,message:e.message,details:e.details||{stack:e.stack}}):null}function p(e,t,r,s){if(t.type===o.OPEN_PORT)return void e.postMessage(t,[t.port]);if(t.type!==o.INVOKE&&t.type!==o.RESPONSE)return void e.postMessage(t);let n;!function(e){return e&&"object"==typeof e&&("result"in e||"transferList"in e)}(r)?(n=c(s),t.data=r):(n=c(r.transferList),t.data=r.result),n?e.postMessage(t,n):e.postMessage(t)}function u(e){if(!e)return null;const t=e.data;return t?"string"==typeof t?JSON.parse(t):t:null}function c(e){if(!e||!e.length)return null;if((0,n.Z)("esri-workers-arraybuffer-transfer"))return e;const t=e.filter((e=>!function(e){return e instanceof ArrayBuffer||e&&e.constructor&&"ArrayBuffer"===e.constructor.name}(e)));return t.length?t:null}},17017:(e,t,r)=>{r.d(t,{N:()=>i});var o=r(43697),s=r(5600),n=(r(80442),r(75215),r(92604),r(52525));const i=e=>{let t=class extends e{constructor(){super(...arguments),this.customParameters=null}};return(0,o._)([(0,s.Cb)({type:Object,json:{write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0)})}}})],t.prototype,"customParameters",void 0),t=(0,o._)([(0,n.j)("esri.layers.mixins.CustomParametersMixin")],t),t}},35643:(e,t,r)=>{r.d(t,{Z:()=>m});var o,s=r(43697),n=r(22974),i=r(5600),l=(r(75215),r(80442),r(92604),r(36030)),a=r(52525),p=r(10736);let u=o=class extends p.wq{constructor(e){super(e),this.name=null,this.code=null}clone(){return new o({name:this.name,code:this.code})}};(0,s._)([(0,i.Cb)({type:String,json:{write:!0}})],u.prototype,"name",void 0),(0,s._)([(0,i.Cb)({type:[String,Number],json:{write:!0}})],u.prototype,"code",void 0),u=o=(0,s._)([(0,a.j)("esri.layers.support.CodedValue")],u);var c,d=u,h=r(6933);let y=c=class extends h.Z{constructor(e){super(e),this.codedValues=null,this.type="coded-value"}getName(e){let t=null;if(this.codedValues){const r=String(e);this.codedValues.some((e=>(String(e.code)===r&&(t=e.name),!!t)))}return t}clone(){return new c({codedValues:(0,n.d9)(this.codedValues),name:this.name})}};(0,s._)([(0,i.Cb)({type:[d],json:{write:!0}})],y.prototype,"codedValues",void 0),(0,s._)([(0,l.J)({codedValue:"coded-value"})],y.prototype,"type",void 0),y=c=(0,s._)([(0,a.j)("esri.layers.support.CodedValueDomain")],y);var m=y},6933:(e,t,r)=>{r.d(t,{Z:()=>c});var o=r(43697),s=r(35454),n=r(10736),i=r(5600),l=(r(80442),r(75215),r(92604),r(36030)),a=r(52525);const p=new s.Xn({inherited:"inherited",codedValue:"coded-value",range:"range"});let u=class extends n.wq{constructor(e){super(e),this.name=null,this.type=null}};(0,o._)([(0,i.Cb)({type:String,json:{write:!0}})],u.prototype,"name",void 0),(0,o._)([(0,l.J)(p)],u.prototype,"type",void 0),u=(0,o._)([(0,a.j)("esri.layers.support.Domain")],u);var c=u},70082:(e,t,r)=>{r.d(t,{Z:()=>d});var o=r(43697),s=r(35454),n=r(10736),i=r(22974),l=r(5600),a=(r(75215),r(80442),r(92604),r(52525)),p=r(30556);const u=new s.Xn({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let c=class extends n.wq{constructor(e){super(e),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null}writeDrawingTool(e,t){t.drawingTool=u.toJSON(e)}writePrototype(e,t){t.prototype=(0,i.yd)((0,i.d9)(e),!0)}writeThumbnail(e,t){t.thumbnail=(0,i.yd)((0,i.d9)(e))}};(0,o._)([(0,l.Cb)({json:{write:!0}})],c.prototype,"name",void 0),(0,o._)([(0,l.Cb)({json:{write:!0}})],c.prototype,"description",void 0),(0,o._)([(0,l.Cb)({json:{read:u.read,write:u.write}})],c.prototype,"drawingTool",void 0),(0,o._)([(0,p.c)("drawingTool")],c.prototype,"writeDrawingTool",null),(0,o._)([(0,l.Cb)({json:{write:!0}})],c.prototype,"prototype",void 0),(0,o._)([(0,p.c)("prototype")],c.prototype,"writePrototype",null),(0,o._)([(0,l.Cb)({json:{write:!0}})],c.prototype,"thumbnail",void 0),(0,o._)([(0,p.c)("thumbnail")],c.prototype,"writeThumbnail",null),c=(0,o._)([(0,a.j)("esri.layers.support.FeatureTemplate")],c);var d=c},16451:(e,t,r)=>{r.d(t,{Z:()=>m});var o=r(43697),s=r(10736),n=r(22974),i=r(5600),l=(r(75215),r(80442),r(92604),r(71715)),a=r(52525),p=r(30556),u=r(35643),c=(r(6933),r(91764)),d=r(69150),h=r(70082);let y=class extends s.wq{constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={};for(const r in e)if(e.hasOwnProperty(r)){const o=e[r];switch(o.type){case"range":t[r]=d.Z.fromJSON(o);break;case"codedValue":t[r]=u.Z.fromJSON(o);break;case"inherited":t[r]=c.Z.fromJSON(o)}}return t}writeDomains(e,t){const r={};for(const t in e)e.hasOwnProperty(t)&&(r[t]=e[t]&&e[t].toJSON());(0,n.yd)(r),t.domains=r}readTemplates(e){return e&&e.map((e=>new h.Z(e)))}writeTemplates(e,t){t.templates=e&&e.map((e=>e.toJSON()))}};(0,o._)([(0,i.Cb)({json:{write:!0}})],y.prototype,"id",void 0),(0,o._)([(0,i.Cb)({json:{write:!0}})],y.prototype,"name",void 0),(0,o._)([(0,i.Cb)({json:{write:!0}})],y.prototype,"domains",void 0),(0,o._)([(0,l.r)("domains")],y.prototype,"readDomains",null),(0,o._)([(0,p.c)("domains")],y.prototype,"writeDomains",null),(0,o._)([(0,i.Cb)({json:{write:!0}})],y.prototype,"templates",void 0),(0,o._)([(0,l.r)("templates")],y.prototype,"readTemplates",null),(0,o._)([(0,p.c)("templates")],y.prototype,"writeTemplates",null),y=(0,o._)([(0,a.j)("esri.layers.support.FeatureType")],y);var m=y},14147:(e,t,r)=>{r.d(t,{W:()=>u});var o=r(40330),s=r(3172),n=r(70586),i=r(95330),l=r(37593),a=r(65587),p=r(15235);class u{constructor(e,t,r,o){this.parsedUrl=e,this.portalItem=t,this.apiKey=r,this.signal=o,this.rootDocument=null;const s=this.parsedUrl.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);s&&(this.urlParts={root:s[1],layerId:parseInt(s[2],10)})}async fetch(){var e;if(!this.urlParts)return null;const t=null!=(e=this.portalItem)?e:await this.portalItemFromServiceItemId();if((0,n.Wi)(t))return this.loadFromUrl();const r=await this.findAndLoadRelatedPortalItem(t);return(0,n.Wi)(r)?null:this.loadFeatureLayerFromPortalItem(r)}async fetchPortalItem(){var e;if(!this.urlParts)return null;const t=null!=(e=this.portalItem)?e:await this.portalItemFromServiceItemId();return(0,n.Wi)(t)?null:this.findAndLoadRelatedPortalItem(t)}async fetchRootDocument(){if((0,n.pC)(this.rootDocument))return this.rootDocument;if((0,n.Wi)(this.urlParts))return this.rootDocument={},{};const e={query:{f:"json",token:this.apiKey},responseType:"json",signal:this.signal},t=`${this.urlParts.root}/SceneServer`;try{const r=await(0,s.default)(t,e);this.rootDocument=r.data}catch{this.rootDocument={}}return this.rootDocument}async fetchServiceOwningPortalUrl(){var e;const t=null==(e=o.id)?void 0:e.findServerInfo(this.parsedUrl.path);if(null!=t&&t.owningSystemUrl)return t.owningSystemUrl;const r=this.parsedUrl.path.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const e=(await(0,s.default)(r,{query:{f:"json"},responseType:"json",signal:this.signal})).data.owningSystemUrl;if(e)return e}catch(e){(0,i.r9)(e)}return null}async findAndLoadRelatedPortalItem(e){try{return(await e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal})).find((e=>"Feature Service"===e.type))||null}catch(e){return(0,i.r9)(e),null}}async loadFeatureLayerFromPortalItem(e){await e.load({signal:this.signal});const t=await this.findMatchingAssociatedSublayerUrl(e.url);return new l.default({url:t,portalItem:e}).load({signal:this.signal})}async loadFromUrl(){const e=await this.findMatchingAssociatedSublayerUrl(`${this.urlParts.root}/FeatureServer`);return new l.default({url:e}).load({signal:this.signal})}async findMatchingAssociatedSublayerUrl(e){const t=e.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),r={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},o=this.urlParts.layerId,n=this.fetchRootDocument(),i=(0,s.default)(t,r),[l,a]=await Promise.all([i,n]),p=a&&a.layers,u=l.data&&l.data.layers;if(!Array.isArray(u))throw new Error("expected layers array");if(Array.isArray(p)){for(let e=0;e<Math.min(p.length,u.length);e++)if(p[e].id===o)return`${t}/${u[e].id}`}else if(o<u.length)return`${t}/${u[o].id}`;throw new Error("could not find matching associated sublayer")}async portalItemFromServiceItemId(){const e=(await this.fetchRootDocument()).serviceItemId;if(!e)return null;const t=new p.default({id:e,apiKey:this.apiKey}),r=await this.fetchServiceOwningPortalUrl();(0,n.pC)(r)&&(t.portal=new a.Z({url:r}));try{return t.load({signal:this.signal})}catch(e){return(0,i.r9)(e),null}}}},1231:(e,t,r)=>{r.d(t,{Z:()=>f});var o,s=r(43697),n=r(35454),i=r(10736),l=r(5600),a=(r(80442),r(75215)),p=(r(92604),r(36030)),u=r(71715),c=r(52525),d=r(29655),h=r(86719);const y=new n.Xn({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});let m=o=class extends i.wq{constructor(e){super(e),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=-1,this.name=null,this.nullable=!0,this.type=null,this.valueType=null}readDescription(e,{description:t}){let r;try{r=JSON.parse(t)}catch(e){}return r?r.value:null}readValueType(e,{description:t}){let r;try{r=JSON.parse(t)}catch(e){}return r?y.fromJSON(r.fieldValueType):null}clone(){return new o({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType})}};(0,s._)([(0,l.Cb)({type:String,json:{write:!0}})],m.prototype,"alias",void 0),(0,s._)([(0,l.Cb)({type:[String,Number],json:{write:{allowNull:!0}}})],m.prototype,"defaultValue",void 0),(0,s._)([(0,l.Cb)()],m.prototype,"description",void 0),(0,s._)([(0,u.r)("description")],m.prototype,"readDescription",null),(0,s._)([(0,l.Cb)({types:d.V5,json:{read:{reader:d.im},write:!0}})],m.prototype,"domain",void 0),(0,s._)([(0,l.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"editable",void 0),(0,s._)([(0,l.Cb)({type:a.z8,json:{write:!0}})],m.prototype,"length",void 0),(0,s._)([(0,l.Cb)({type:String,json:{write:!0}})],m.prototype,"name",void 0),(0,s._)([(0,l.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"nullable",void 0),(0,s._)([(0,p.J)(h.v)],m.prototype,"type",void 0),(0,s._)([(0,l.Cb)()],m.prototype,"valueType",void 0),(0,s._)([(0,u.r)("valueType",["description"])],m.prototype,"readValueType",null),m=o=(0,s._)([(0,c.j)("esri.layers.support.Field")],m);var f=m},51161:(e,t,r)=>{r.d(t,{H3:()=>g,QI:()=>c,U4:()=>a,Yh:()=>h});var o=r(43697),s=r(10736),n=r(5600),i=(r(80442),r(75215),r(92604),r(36030)),l=r(52525);let a=class extends s.wq{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,o._)([(0,n.Cb)({type:Number})],a.prototype,"nodesPerPage",void 0),(0,o._)([(0,n.Cb)({type:Number})],a.prototype,"rootIndex",void 0),(0,o._)([(0,n.Cb)({type:String})],a.prototype,"lodSelectionMetricType",void 0),a=(0,o._)([(0,l.j)("esri.layer.support.I3SNodePageDefinition")],a);let p=class extends s.wq{constructor(){super(...arguments),this.factor=1}};(0,o._)([(0,n.Cb)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],p.prototype,"id",void 0),(0,o._)([(0,n.Cb)({type:Number})],p.prototype,"factor",void 0),p=(0,o._)([(0,l.j)("esri.layer.support.I3SMaterialTexture")],p);let u=class extends s.wq{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,o._)([(0,n.Cb)({type:[Number]})],u.prototype,"baseColorFactor",void 0),(0,o._)([(0,n.Cb)({type:p})],u.prototype,"baseColorTexture",void 0),(0,o._)([(0,n.Cb)({type:p})],u.prototype,"metallicRoughnessTexture",void 0),(0,o._)([(0,n.Cb)({type:Number})],u.prototype,"metallicFactor",void 0),(0,o._)([(0,n.Cb)({type:Number})],u.prototype,"roughnessFactor",void 0),u=(0,o._)([(0,l.j)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],u);let c=class extends s.wq{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,o._)([(0,i.J)({opaque:"opaque",mask:"mask",blend:"blend"})],c.prototype,"alphaMode",void 0),(0,o._)([(0,n.Cb)({type:Number})],c.prototype,"alphaCutoff",void 0),(0,o._)([(0,n.Cb)({type:Boolean})],c.prototype,"doubleSided",void 0),(0,o._)([(0,i.J)({none:"none",back:"back",front:"front"})],c.prototype,"cullFace",void 0),(0,o._)([(0,n.Cb)({type:p})],c.prototype,"normalTexture",void 0),(0,o._)([(0,n.Cb)({type:p})],c.prototype,"occlusionTexture",void 0),(0,o._)([(0,n.Cb)({type:p})],c.prototype,"emissiveTexture",void 0),(0,o._)([(0,n.Cb)({type:[Number]})],c.prototype,"emissiveFactor",void 0),(0,o._)([(0,n.Cb)({type:u})],c.prototype,"pbrMetallicRoughness",void 0),c=(0,o._)([(0,l.j)("esri.layer.support.I3SMaterialDefinition")],c);let d=class extends s.wq{};(0,o._)([(0,n.Cb)({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:`${t.index}`}}})],d.prototype,"name",void 0),(0,o._)([(0,i.J)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],d.prototype,"format",void 0),d=(0,o._)([(0,l.j)("esri.layer.support.I3STextureFormat")],d);let h=class extends s.wq{constructor(){super(...arguments),this.atlas=!1}};(0,o._)([(0,n.Cb)({type:[d]})],h.prototype,"formats",void 0),(0,o._)([(0,n.Cb)({type:Boolean})],h.prototype,"atlas",void 0),h=(0,o._)([(0,l.j)("esri.layer.support.I3STextureSetDefinition")],h);let y=class extends s.wq{};(0,o._)([(0,i.J)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],y.prototype,"type",void 0),(0,o._)([(0,n.Cb)({type:Number})],y.prototype,"component",void 0),y=(0,o._)([(0,l.j)("esri.layer.support.I3SGeometryAttribute")],y);let m=class extends s.wq{};(0,o._)([(0,i.J)({draco:"draco"})],m.prototype,"encoding",void 0),(0,o._)([(0,n.Cb)({type:[String]})],m.prototype,"attributes",void 0),m=(0,o._)([(0,l.j)("esri.layer.support.I3SGeometryCompressedAttributes")],m);let f=class extends s.wq{constructor(){super(...arguments),this.offset=0}};(0,o._)([(0,n.Cb)({type:Number})],f.prototype,"offset",void 0),(0,o._)([(0,n.Cb)({type:y})],f.prototype,"position",void 0),(0,o._)([(0,n.Cb)({type:y})],f.prototype,"normal",void 0),(0,o._)([(0,n.Cb)({type:y})],f.prototype,"uv0",void 0),(0,o._)([(0,n.Cb)({type:y})],f.prototype,"color",void 0),(0,o._)([(0,n.Cb)({type:y})],f.prototype,"uvRegion",void 0),(0,o._)([(0,n.Cb)({type:y})],f.prototype,"featureId",void 0),(0,o._)([(0,n.Cb)({type:y})],f.prototype,"faceRange",void 0),(0,o._)([(0,n.Cb)({type:m})],f.prototype,"compressedAttributes",void 0),f=(0,o._)([(0,l.j)("esri.layer.support.I3SGeometryBuffer")],f);let g=class extends s.wq{};(0,o._)([(0,i.J)({triangle:"triangle"})],g.prototype,"topology",void 0),(0,o._)([(0,n.Cb)()],g.prototype,"geometryBuffers",void 0),g=(0,o._)([(0,l.j)("esri.layer.support.I3SGeometryDefinition")],g)},91764:(e,t,r)=>{r.d(t,{Z:()=>p});var o,s=r(43697),n=(r(5600),r(80442),r(75215),r(92604),r(36030)),i=r(52525),l=r(6933);let a=o=class extends l.Z{constructor(e){super(e),this.type="inherited"}clone(){return new o}};(0,s._)([(0,n.J)({inherited:"inherited"})],a.prototype,"type",void 0),a=o=(0,s._)([(0,i.j)("esri.layers.support.InheritedDomain")],a);var p=a},56765:(e,t,r)=>{r.d(t,{Z:()=>u});var o,s=r(43697),n=r(81049),i=r(10736),l=r(5600),a=(r(80442),r(75215),r(92604),r(52525));let p=o=class extends i.wq{constructor(e){super(e),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new n.Z}clone(){return new o({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};(0,s._)([(0,l.Cb)({type:String,json:{write:!0}})],p.prototype,"floorField",void 0),(0,s._)([(0,l.Cb)({json:{read:!1,write:!1}})],p.prototype,"viewAllMode",void 0),(0,s._)([(0,l.Cb)({json:{read:!1,write:!1}})],p.prototype,"viewAllLevelIds",void 0),p=o=(0,s._)([(0,a.j)("esri.layers.support.LayerFloorInfo")],p);var u=p},69150:(e,t,r)=>{r.d(t,{Z:()=>u});var o,s=r(43697),n=r(5600),i=(r(80442),r(75215),r(92604),r(36030)),l=r(52525),a=r(6933);let p=o=class extends a.Z{constructor(e){super(e),this.maxValue=null,this.minValue=null,this.type="range"}clone(){return new o({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}};(0,s._)([(0,n.Cb)({type:Number,json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range&&t.range[1]},write:{enabled:!1,overridePolicy(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer(e,t,r){t[r]=[this.minValue||0,e]}}}})],p.prototype,"maxValue",void 0),(0,s._)([(0,n.Cb)({type:Number,json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range&&t.range[0]},write:{target:"range",writer(e,t,r){t[r]=[e,this.maxValue||0]}}}})],p.prototype,"minValue",void 0),(0,s._)([(0,i.J)({range:"range"})],p.prototype,"type",void 0),p=o=(0,s._)([(0,l.j)("esri.layers.support.RangeDomain")],p);var u=p},15506:(e,t,r)=>{r.d(t,{C:()=>o});const o={attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,tileMaxRecordCount:0}}},29655:(e,t,r)=>{r.d(t,{im:()=>a,V5:()=>l}),r(80442);var o=r(35643),s=r(6933),n=r(91764),i=r(69150);const l={key:"type",base:s.Z,typeMap:{range:i.Z,"coded-value":o.Z,inherited:n.Z}};function a(e){if(!e||!e.type)return null;switch(e.type){case"range":return i.Z.fromJSON(e);case"codedValue":return o.Z.fromJSON(e);case"inherited":return n.Z.fromJSON(e)}return null}},86719:(e,t,r)=>{r.d(t,{v:()=>o});const o=new(r(35454).Xn)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"})},28694:(e,t,r)=>{r.d(t,{p:()=>s});var o=r(50459);function s(e,t,r){if(!r||!r.features||!r.hasZ)return;const s=(0,o.k)(r.geometryType,t,e.outSpatialReference);if(s)for(const e of r.features)s(e.geometry)}},50459:(e,t,r)=>{r.d(t,{k:()=>i,P:()=>a});var o=r(70586),s=r(67900),n=r(8744);function i(e,t,r){if((0,o.Wi)(t)||(0,o.Wi)(r)||r.vcsWkid||(0,n.fS)(t,r))return null;const i=(0,s._R)(t)/(0,s._R)(r);if(1===i)return null;switch(e){case"point":case"esriGeometryPoint":return e=>function(e,t){e&&null!=e.z&&(e.z*=t)}(e,i);case"polyline":case"esriGeometryPolyline":return e=>function(e,t){if(e)for(const r of e.paths)for(const e of r)e.length>2&&(e[2]*=t)}(e,i);case"polygon":case"esriGeometryPolygon":return e=>function(e,t){if(e)for(const r of e.rings)for(const e of r)e.length>2&&(e[2]*=t)}(e,i);case"multipoint":case"esriGeometryMultipoint":return e=>function(e,t){if(e)for(const r of e.points)r.length>2&&(r[2]*=t)}(e,i);default:return null}}function l(e,t,r){if(null==e.hasM||e.hasZ)for(const e of t)for(const t of e)t.length>2&&(t[2]*=r)}function a(e,t,r){if(!e&&!t||!r)return;const o=(0,s._R)(r);p(e,r,o),p(t,r,o)}function p(e,t,r){if(e)for(const o of e)u(o.geometry,t,r)}function u(e,t,r){if((0,o.Wi)(e)||!e.spatialReference||(0,n.fS)(e.spatialReference,t))return;const i=(0,s._R)(e.spatialReference)/r;if(1!==i)if("x"in e)null!=e.z&&(e.z*=i);else if("rings"in e)l(e,e.rings,i);else if("paths"in e)l(e,e.paths,i);else if("points"in e&&(null==e.hasM||e.hasZ))for(const t of e.points)t.length>2&&(t[2]*=i)}},17202:(e,t,r)=>{r.d(t,{r:()=>o,$:()=>s});const o="20210928",s="c312c4b5c1d3a2f6febbd67d710c6d6cd2dba51d"}}]);