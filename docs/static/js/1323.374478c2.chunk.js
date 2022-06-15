"use strict";(globalThis.webpackChunkgeowebmap=globalThis.webpackChunkgeowebmap||[]).push([[1323],{55107:(e,t,n)=>{var o,i;n.d(t,{B:()=>i,P:()=>o}),function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"}(o||(o={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(i||(i={}))},71323:(e,t,n)=>{n.r(t),n.d(t,{destroyContext:()=>b,dracoDecompressPointCloudData:()=>u,filterObbsForModifications:()=>d,filterObbsForModificationsSync:()=>P,initialize:()=>C,interpretObbModificationResults:()=>w,process:()=>l,setLegacySchema:()=>m,setModifications:()=>h,setModificationsSync:()=>E,test:()=>I});var o=n(92026),i=n(18722),r=n(55107),s=n(65905);function a(e){return(0,s.V)(`esri/libs/i3s/${e}`)}let f;var c=n(95964);async function l(e){await C();const t=[e.geometryBuffer];return{result:g(e,t),transferList:t}}async function u(e){var t;await C();const n=[e.geometryBuffer],{geometryBuffer:o}=e,r=o.byteLength,s=p._malloc(r),a=new Uint8Array(p.HEAPU8.buffer,s,r);a.set(new Uint8Array(o));const f=p.dracoDecompressPointCloudData(s,a.byteLength);if(p._free(s),f.error.length>0)throw`i3s.wasm: ${f.error}`;const c=(null==(t=f.featureIds)?void 0:t.length)>0?(0,i.tP)(f.featureIds):null,l=(0,i.tP)(f.positions);return c&&n.push(c.buffer),n.push(l.buffer),{result:{positions:l,featureIds:c},transferList:n}}async function d(e){await C(),P(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function h(e){await C(),E(e)}async function m(e){await C(),p.setLegacySchema(e.context,e.jsonSchema)}function b(e){L(e)}let y,p;function E(e){const t=e.modifications,n=p._malloc(8*t.length),o=new Float64Array(p.HEAPU8.buffer,n,t.length);for(let i=0;i<t.length;++i)o[i]=t[i];p.setModifications(e.context,n,t.length,e.isGeodetic),p._free(n)}function g(e,t){if(!p)return null;const{context:n,localOrigin:s,globalTrafo:a,mbs:f,obb:c,elevationOffset:l,geometryBuffer:u,geometryDescriptor:d,indexToVertexProjector:h,vertexToRenderProjector:m}=e,b=p._malloc(u.byteLength),y=p._malloc(33*Float64Array.BYTES_PER_ELEMENT),E=new Uint8Array(p.HEAPU8.buffer,b,u.byteLength);E.set(new Uint8Array(u));const g=new Float64Array(p.HEAPU8.buffer,y,33);U(g,s);let w=g.byteOffset+3*g.BYTES_PER_ELEMENT,P=new Float64Array(g.buffer,w);U(P,a),w+=16*g.BYTES_PER_ELEMENT,P=new Float64Array(g.buffer,w),U(P,f),w+=4*g.BYTES_PER_ELEMENT,(0,o.pC)(c)&&(P=new Float64Array(g.buffer,w),U(P,c.center),w+=3*g.BYTES_PER_ELEMENT,P=new Float64Array(g.buffer,w),U(P,c.halfSize),w+=3*g.BYTES_PER_ELEMENT,P=new Float64Array(g.buffer,w),U(P,c.quaternion));const L=d,C={isDraco:!1,isLegacy:!1,color:e.layouts.some((e=>e.some((e=>"color"===e.name)))),normal:e.needNormals&&e.layouts.some((e=>e.some((e=>"normalCompressed"===e.name)))),uv0:e.layouts.some((e=>e.some((e=>"uv0"===e.name)))),uvRegion:e.layouts.some((e=>e.some((e=>"uvRegion"===e.name)))),featureIndex:L.featureIndex},I=p.process(n,!!e.obb,b,E.byteLength,L,C,y,l,h,m,e.normalReferenceFrame);if(p._free(y),p._free(b),I.error.length>0)throw`i3s.wasm: ${I.error}`;if(I.discarded)return null;const _=I.componentOffsets.length>0?(0,i.tP)(I.componentOffsets):null,v=I.featureIds.length>0?(0,i.tP)(I.featureIds):null,A=(0,i.tP)(I.interleavedVertedData).buffer,M=I.indicesType===r.P.Int16?(0,i.tP)(new Uint16Array(I.indices.buffer,I.indices.byteOffset,I.indices.byteLength/2)):(0,i.tP)(new Uint32Array(I.indices.buffer,I.indices.byteOffset,I.indices.byteLength/4)),F=(0,i.tP)(I.positions),T=I.positionIndicesType===r.P.Int16?(0,i.tP)(new Uint16Array(I.positionIndices.buffer,I.positionIndices.byteOffset,I.positionIndices.byteLength/2)):(0,i.tP)(new Uint32Array(I.positionIndices.buffer,I.positionIndices.byteOffset,I.positionIndices.byteLength/4)),O={layout:e.layouts[0],interleavedVertexData:A,indices:M,hasColors:I.hasColors,hasModifications:I.hasModifications,positionData:{data:F,indices:T}};return v&&t.push(v.buffer),_&&t.push(_.buffer),t.push(A),t.push(M.buffer),t.push(F.buffer),t.push(T.buffer),{componentOffsets:_,featureIds:v,transformedGeometry:O,obb:I.obb}}function w(e){return 0===e?c.O4.Unmodified:1===e?c.O4.PotentiallyModified:2===e?c.O4.Culled:c.O4.Unknown}function P(e){const{context:t,buffer:n}=e,o=p._malloc(n.byteLength),i=n.byteLength/Float64Array.BYTES_PER_ELEMENT,r=new Float64Array(p.HEAPU8.buffer,o,i),s=new Float64Array(n);r.set(s),p.filterOBBs(t,o,i),s.set(r),p._free(o)}function L(e){p&&p.destroy(e)}function U(e,t){for(let n=0;n<t.length;++n)e[n]=t[n]}function C(){return p?Promise.resolve():(y||(y=(f||(f=new Promise((e=>n.e(7552).then(n.bind(n,57552)).then((e=>e.i)).then((t=>{let{default:n}=t;const o=n({locateFile:a,onRuntimeInitialized:()=>e(o)});delete o.then})))).catch((e=>Promise.reject(e)))),f).then((e=>{p=e,y=null}))),y)}const I={transform:g,destroy:L}},95964:(e,t,n)=>{n.d(t,{$i:()=>l,FE:()=>a,Hw:()=>r,NB:()=>u,O4:()=>i,U_:()=>o,oQ:()=>d,w5:()=>s});var o,i,r,s,a,f,c=n(67077);class l{constructor(e,t){this.id=e,this.mbs=t,this.renderMbs=(0,c.d)([0,0,0,-1]),this.imModificationImpact=i.NotChecked}}(f=o||(o={}))[f.Unmodified=0]="Unmodified",f[f.Culled=1]="Culled",f[f.NotChecked=2]="NotChecked",function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(i||(i={}));class u extends l{constructor(e,t,n,o,i,s,a,f,c,l){super(e,n),this.index=t,this.childCount=o,this.level=i,this.resources=s,this.version=a,this.lodMetric=f,this.maxError=c,this.numFeatures=l,this.failed=!1,this.hasModifications=!1,this.cacheState=r.Unknown,this.vertexCount=0,this.memory=0}}!function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"}(r||(r={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(s||(s={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(a||(a={}));class d{constructor(e,t,n,o){this.nodeHasLOD=e,this.isChosen=t,this.lodLevel=n,this.version=o}}}}]);
//# sourceMappingURL=1323.374478c2.chunk.js.map