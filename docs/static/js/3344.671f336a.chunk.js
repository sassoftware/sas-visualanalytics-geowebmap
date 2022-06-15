"use strict";(globalThis.webpackChunkgeowebmap=globalThis.webpackChunkgeowebmap||[]).push([[3344],{96669:(e,t,a)=>{function r(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function s(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){let t=0,a=0;for(let r=0;r<e.length;r++){const s=e[r].size;"number"==typeof s&&(t+=s,a++)}return t/a}(e.stops):t}function n(e,t){if(!t)return e;const a=t.filter((e=>"size"===e.type)).map((t=>{const{maxSize:a,minSize:r}=t;return(s(a,e)+s(r,e))/2}));let r=0;const n=a.length;if(0===n)return e;for(let s=0;s<n;s++)r+=a[s];const i=Math.floor(r/n);return Math.max(i,e)}function i(e){const t=e&&e.renderer,a="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return a;const s="visualVariables"in t?n(a,t.visualVariables):a;if("simple"===t.type)return r(s,t.symbol);if("unique-value"===t.type){let e=s;return t.uniqueValueInfos.forEach((t=>{e=r(e,t.symbol)})),e}if("class-breaks"===t.type){let e=s;return t.classBreakInfos.forEach((t=>{e=r(e,t.symbol)})),e}return t.type,s}a.d(t,{k:()=>i})},23344:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var r=a(27366),s=(a(32718),a(25243),a(63780),a(93169),a(75366),a(69912)),n=a(69229),i=a(21881),o=a(45008);let l=class extends((0,i.m)(n.Z)){constructor(){super(...arguments),this.type="map-image-3d"}initialize(){this.updatingHandles.add((()=>this.exportImageVersion),(()=>this.updatingHandles.addPromise(this.refreshDebounced())))}createFetchPopupFeaturesQueryGeometry(e,t){return(0,o.K)(e,t,this.view)}getFetchOptions(){return{timeExtent:this.timeExtent}}};l=(0,r._)([(0,s.j)("esri.views.3d.layers.MapImageLayerView3D")],l);const p=l},21881:(e,t,a)=>{a.d(t,{m:()=>h});var r=a(27366),s=a(10064),n=a(92026),i=a(66978),o=a(49861),l=(a(63780),a(93169),a(25243),a(69912)),p=a(45948),u=a(44041),c=a(96669),m=a(819),f=a(24405),d=a(10141);const h=e=>{let t=class extends e{initialize(){this.exportImageParameters=new u.R({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(e,t){const{layer:a}=this;if(!e)return Promise.reject(new s.Z("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}));const r=this.get("view.scale"),o=[],l=async e=>{const a=0===e.minScale||r<=e.minScale,s=0===e.maxScale||r>=e.maxScale;if(e.visible&&a&&s)if(e.sublayers)e.sublayers.forEach(l);else if(e.popupEnabled){const a=(0,f.V)(e,{...t,defaultPopupTemplateEnabled:!1});(0,n.pC)(a)&&o.unshift({sublayer:e,popupTemplate:a})}},p=a.sublayers.toArray().reverse().map(l);await Promise.all(p);const u=o.map((async a=>{let{sublayer:r,popupTemplate:s}=a;await r.load().catch((()=>{}));const i=r.createQuery(),o=(0,n.pC)(t)?t.event:null,l=(0,c.k)({renderer:r.renderer,event:o}),p=this.createFetchPopupFeaturesQueryGeometry(e,l);if(i.geometry=p,i.outFields=await(0,f.e)(r,s),"map-image"===this.layer.type&&"floors"in this.view){var u,m;const e=null==(u=this.view)||null==(m=u.floors)?void 0:m.clone(),t=(0,d.ff)(e,r);(0,n.pC)(t)&&(i.where=i.where?`(${i.where}) AND (${t})`:t)}const h=await this._loadArcadeModules(s);return h&&h.arcadeUtils.hasGeometryOperations(s)||(i.maxAllowableOffset=p.width/l),(await r.queryFeatures(i)).features}));return(await(0,i.as)(u)).reduce(((e,t)=>t.value?[...e,...t.value]:e),[]).filter((e=>null!=e))}canResume(){var e;return!!super.canResume()&&(null==(e=this.timeExtent)||!e.isEmpty)}_loadArcadeModules(e){if(e.get("expressionInfos.length")||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type)))return(0,m.LC)()}};return(0,r._)([(0,o.Cb)()],t.prototype,"exportImageParameters",void 0),(0,r._)([(0,o.Cb)({readOnly:!0})],t.prototype,"exportImageVersion",null),(0,r._)([(0,o.Cb)()],t.prototype,"layer",void 0),(0,r._)([(0,o.Cb)()],t.prototype,"suspended",void 0),(0,r._)([(0,o.Cb)(p.qG)],t.prototype,"timeExtent",void 0),t=(0,r._)([(0,l.j)("esri.views.layers.MapImageLayerView")],t),t}},24405:(e,t,a)=>{a.d(t,{V:()=>i,e:()=>n});var r=a(92026),s=a(80031);async function n(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.popupTemplate;if(!(0,r.pC)(t))return[];const a=await t.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:n}=t,{objectIdField:i,typeIdField:o,globalIdField:l,relationships:p}=e;if(a.includes("*"))return["*"];const u=n?await(0,s.CH)(e):[],c=(0,s.Q0)(e.fieldsIndex,[...a,...u]);return o&&c.push(o),c&&i&&e.fieldsIndex.has(i)&&-1===c.indexOf(i)&&c.push(i),c&&l&&e.fieldsIndex.has(l)&&-1===c.indexOf(l)&&c.push(l),p&&p.forEach((t=>{const{keyField:a}=t;c&&a&&e.fieldsIndex.has(a)&&-1===c.indexOf(a)&&c.push(a)})),c}function i(e,t){return e.popupTemplate?e.popupTemplate:(0,r.pC)(t)&&t.defaultPopupTemplateEnabled&&(0,r.pC)(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}},45008:(e,t,a)=>{a.d(t,{K:()=>i});a(59486);var r=a(92026),s=a(68860),n=a(53866);function i(e,t,a){let i,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new n.Z;if("2d"===a.type)i=t*a.resolution;else if("3d"===a.type){const n=a.overlayPixelSizeInMapUnits(e),o=a.basemapSpatialReference;i=(0,r.pC)(o)&&!o.equals(a.spatialReference)?(0,s.c9)(o)/(0,s.c9)(a.spatialReference):t*n}const l=e.x-i,p=e.y-i,u=e.x+i,c=e.y+i,{spatialReference:m}=a;return o.xmin=Math.min(l,u),o.ymin=Math.min(p,c),o.xmax=Math.max(l,u),o.ymax=Math.max(p,c),o.spatialReference=m,o}new n.Z}}]);
//# sourceMappingURL=3344.671f336a.chunk.js.map