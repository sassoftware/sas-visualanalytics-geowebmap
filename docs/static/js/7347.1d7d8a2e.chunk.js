"use strict";(globalThis.webpackChunkgeowebmap=globalThis.webpackChunkgeowebmap||[]).push([[7347],{43244:(t,e,s)=>{s.d(e,{Z:()=>i});var r=s(92026);class i{constructor(t){this.size=0,this._start=0,this.maxSize=t,this._buffer=new Array(t)}get entries(){return this._buffer}enqueue(t){if(this.size===this.maxSize){const e=this._buffer[this._start];return this._buffer[this._start]=t,this._start=(this._start+1)%this.maxSize,e}return this._buffer[(this._start+this.size++)%this.maxSize]=t,null}dequeue(){if(0===this.size)return null;const t=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,t}peek(){return 0===this.size?null:this._buffer[this._start]}find(t){if(0===this.size)return null;for(const e of this._buffer)if((0,r.pC)(e)&&t(e))return e;return null}clear(t){let e=this.dequeue();for(;(0,r.pC)(e);)t&&t(e),e=this.dequeue()}}},40639:(t,e,s)=>{s.d(e,{Z:()=>o});var r=s(27366),i=s(41691),n=s(49861),a=(s(63780),s(93169),s(25243),s(69912));let h=class extends i.r{constructor(t){super(t),this.tiles=new Map}destroy(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null}get updating(){return this.isUpdating()}acquireTile(t){const e=this.createTile(t);return e.once("isReady",(()=>this.notifyChange("updating"))),this.tiles.set(t.id,e),e}forceAttributeTextureUpload(){}forEachTile(t){this.tiles.forEach(t)}releaseTile(t){this.tiles.delete(t.key.id),this.disposeTile(t)}isUpdating(){let t=!0;return this.tiles.forEach((e=>{t=t&&e.isReady})),!t}setHighlight(){}invalidateLabels(){}requestUpdate(){this.layerView.requestUpdate()}};(0,r._)([(0,n.Cb)()],h.prototype,"layer",void 0),(0,r._)([(0,n.Cb)()],h.prototype,"layerView",void 0),(0,r._)([(0,n.Cb)()],h.prototype,"tileInfoView",void 0),(0,r._)([(0,n.Cb)()],h.prototype,"updating",null),h=(0,r._)([(0,a.j)("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],h);const o=h},87347:(t,e,s)=>{s.r(e),s.d(e,{default:()=>H});var r=s(27366),i=s(93169),n=s(66978),a=(s(32718),s(25243),s(63780),s(75366),s(69912)),h=s(65156),o=s(43244),u=s(92026),d=s(22018),f=s(11245),l=s(88396),c=s(15245),_=s(80613),p=s(46640),y=s(98774);const g=4294967296;class b{constructor(t){this._head=t,this._cursor=t}static from(t){const e=m.from(new Float32Array(t));return new b(e)}get id(){return this._cursor.id}get baseZoom(){return this._cursor.baseZoom}get anchorX(){return this._cursor.anchorX}get anchorY(){return this._cursor.anchorY}get directionX(){return this._cursor.directionX}get directionY(){return this._cursor.directionY}get size(){return this._cursor.size}get materialKey(){return this._cursor.materialKey}get boundsCount(){return this._cursor.boundsCount}computedMinZoom(){return this._cursor.computedMinZoom()}setComputedMinZoom(t){return this._cursor.setComputedMinZoom(t)}boundsComputedAnchorX(t){return this._cursor.boundsComputedAnchorX(t)}boundsComputedAnchorY(t){return this._cursor.boundsComputedAnchorY(t)}setBoundsComputedAnchorX(t,e){return this._cursor.setBoundsComputedAnchorX(t,e)}setBoundsComputedAnchorY(t,e){return this._cursor.setBoundsComputedAnchorY(t,e)}boundsX(t){return this._cursor.boundsX(t)}boundsY(t){return this._cursor.boundsY(t)}boundsWidth(t){return this._cursor.boundsWidth(t)}boundsHeight(t){return this._cursor.boundsHeight(t)}link(t){if((0,u.pC)(t._head))return this._cursor.link(t._head)}getCursor(){return this.copy()}copy(){var t;const e=new b(null==(t=this._head)?void 0:t.copy());if(!e._head)return e;let s=e._head,r=e._head._link;for(;r;)s._link=r.copy(),s=r,r=s._link;return e}peekId(){var t;return null!=(t=this._cursor.peekId())?t:this._cursor._link.peekId()}nextId(){const t=this.id;for(;t===this.id;)if(!this.next())return!1;return!0}save(){this._savedCursor=this._cursor,this._savedOffset=this._cursor._offset}restore(){this._cursor=this._savedCursor,this._cursor._offset=this._savedOffset}next(){if(!this._cursor)return!1;if(!this._cursor.next()){if(!this._cursor._link)return!1;this._cursor=this._cursor._link,this._cursor._offset=0}return!0}lookup(t){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(t);){if(!this._cursor._link)return!1;this._cursor=this._cursor._link}return!!this._cursor}delete(t){let e=this._head,s=null;for(;e;){if(e.delete(t))return e.isEmpty()&&(0,u.pC)(s)&&(s._link=e._link),!0;s=e,e=e._link}return!1}}class m{constructor(t){this._offset=-1,this._link=null,this._count=0,this._deletedCount=0,this._offsets={instance:null},this._buffer=t}static from(t){return new m(new Float32Array(t))}isEmpty(){return this._deletedCount===this.count}get count(){return this._count||(this._count=this._computeCount()),this._count}get id(){return this._buffer[this._offset+0]}set id(t){this._buffer[this._offset+0]=t}get baseZoom(){return this._buffer[this._offset+1]}get anchorX(){return this._buffer[this._offset+2]}get anchorY(){return this._buffer[this._offset+3]}get directionX(){return this._buffer[this._offset+4]}get directionY(){return this._buffer[this._offset+5]}get size(){return this._buffer[this._offset+6]}get materialKey(){return this._buffer[this._offset+7]}computedMinZoom(){return this._buffer[this._offset+8]}setComputedMinZoom(t){this._buffer[this._offset+8]=t}get boundsCount(){return this._buffer[this._offset+9]}boundsComputedAnchorX(t){return this._buffer[this._offset+10+6*t+0]}boundsComputedAnchorY(t){return this._buffer[this._offset+10+6*t+1]}setBoundsComputedAnchorX(t,e){this._buffer[this._offset+10+6*t+0]=e}setBoundsComputedAnchorY(t,e){this._buffer[this._offset+10+6*t+1]=e}boundsX(t){return this._buffer[this._offset+10+6*t+2]}boundsY(t){return this._buffer[this._offset+10+6*t+3]}boundsWidth(t){return this._buffer[this._offset+10+6*t+4]}boundsHeight(t){return this._buffer[this._offset+10+6*t+5]}link(t){let e=this;for(;e._link;)e=e._link;e._link=t}getCursor(){return this.copy()}copy(){const t=new m(this._buffer);return t._link=this._link,t._offset=this._offset,t._deletedCount=this._deletedCount,t._offsets=this._offsets,t._count=this._count,t}peekId(){const t=this._offset+10+6*this.boundsCount+0;return t>=this._buffer.length?0:this._buffer[t]}next(){let t=0;for(;this._offset<this._buffer.length&&t++<100&&(-1===this._offset?this._offset=0:this._offset+=10+6*this.boundsCount,this.id===g););return this.id!==g&&this._offset<this._buffer.length}delete(t){const e=this._offset,s=this.lookup(t);if(s)for(this.id=4294967295,++this._deletedCount;this.next()&&this.id===t;)this.id=4294967295,++this._deletedCount;return this._offset=e,s}lookup(t){const e=this._offset;if((0,u.Wi)(this._offsets.instance)){this._offsets.instance=new Map;const t=this.copy();t._offset=-1;let e=0;for(;t.next();)t.id!==e&&(this._offsets.instance.set(t.id,t._offset),e=t.id)}return!!this._offsets.instance.has(t)&&(this._offset=this._offsets.instance.get(t),this.id!==g||(this._offset=e,!1))}_computeCount(){const t=this._offset;let e=0;for(this._offset=-1;this.next();)e++;return this._offset=t,e}}class x{constructor(t){if(!Array.isArray(t))return void(this.data=t);this.data=t[0];let e=this;for(let s=1;s<t.length;s++)e.next=new x([t[s]]),e=e.next}*values(){let t=this;for(;t;)yield t.data,t=t.next}forEach(t){let e=this;for(;e;)t(e.data),e=e.next}find(t){var e;return t(this.data)?this:null==(e=this.next)?void 0:e.find(t)}max(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this;const s=t(this.data)>t(e.data)?this:e;return this.next?this.next.max(t,s):s}remove(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this===t?e?(e.next=this.next,e):this.next:this.next.remove(t,this)}get last(){return this.next?this.next.last:this}}class w{constructor(t){this._head=null,(0,u.Wi)(t)||(this._head=new x(t))}get head(){return this._head}maxAvailableSpace(){if((0,u.Wi)(this._head))return 0;const t=this._head.max((t=>t.end-t.start));return t.data.end-t.data.start}firstFit(t){if((0,u.Wi)(this._head))return null;let e=null,s=this._head;for(;s;){const r=s.data.end-s.data.start;if(r===t)return e?e.next=s.next:this._head=s.next,s.data.start;if(r>t){const e=s.data.start;return s.data.start+=t,e}e=s,s=s.next}return null}free(t,e){const s=t+e;if((0,u.Wi)(this._head)){const e=new x({start:t,end:s});return void(this._head=e)}if(s<=this._head.data.start){if(s===this._head.data.start)return void(this._head.data.start-=e);const r=new x({start:t,end:s});return r.next=this._head,void(this._head=r)}let r=this._head,i=r.next;for(;i;){if(i.data.start>=s){if(r.data.end===t){if(r.data.end+=e,r.data.end===i.data.start){const t=i.data.end-i.data.start;return r.data.end+=t,void(r.next=i.next)}return}if(i.data.start===s)return void(i.data.start-=e);const n=new x({start:t,end:s});return n.next=r.next,void(r.next=n)}r=i,i=i.next}if(t===r.data.end)return void(r.data.end+=e);const n=new x({start:t,end:s});r.next=n}}class v{constructor(t,e,s,r,i){this.target=t,this.geometryType=e,this.materialKey=s,this.indexFrom=r,this.indexCount=i}get indexEnd(){return this.indexFrom+this.indexCount}extend(t){this.indexCount+=t}}class C{constructor(t,e){this.geometryType=0,this._target=t,this.geometryType=e}static from(t,e,s,r){const i=new C(t,e);if((0,u.pC)(r))for(const n of r)s.seekIndex(n),i.addRecord(s);else for(;s.next();)i.addRecord(s);return i}addRecord(t){const e=this._target,s=this.geometryType,r=t.materialKey;let i=t.indexFrom,n=t.indexCount;const a=t.vertexFrom,h=t.vertexCount;if(n||(i=a,n=h),(0,u.Wi)(this._head)){const t=new v(e,s,r,i,n);return void(this._head=new x(t))}let o=null,d=this._head;for(;d;){if(i<d.data.indexFrom)return this._insert(r,i,n,o,d);o=d,d=d.next}this._insert(r,i,n,o,null)}forEach(t){(0,u.pC)(this._head)&&this._head.forEach(t)}*infos(){if((0,u.pC)(this._head))for(const t of this._head.values())yield t}_insert(t,e,s,r,i){if((0,u.Wi)(r)&&(0,u.Wi)(i)){const r=new v(this._target,this.geometryType,t,e,s);this._head=new x(r)}return(0,u.Wi)(r)&&(0,u.pC)(i)?this._insertAtHead(t,e,s,i):(0,u.pC)(r)&&(0,u.Wi)(i)?this._insertAtEnd(t,e,s,r):(0,u.pC)(r)&&(0,u.pC)(i)?this._insertAtMiddle(t,e,s,r,i):void 0}_insertAtHead(t,e,s,r){const i=e+s;if(t===r.data.materialKey&&i===r.data.indexFrom)r.data.indexFrom=e,r.data.indexCount+=s;else{const i=new v(this._target,this.geometryType,t,e,s);this._head=new x(i),this._head.next=r}}_insertAtEnd(t,e,s,r){if(r.data.materialKey===t&&r.data.indexEnd===e)r.data.indexCount+=s;else{const i=new v(this._target,this.geometryType,t,e,s),n=new x(i);r.next=n}}_insertAtMiddle(t,e,s,r,i){const n=e+s;if(r.data.materialKey===t&&r.data.indexEnd===e)r.data.indexCount+=s,r.data.materialKey===i.data.materialKey&&r.data.indexEnd===i.data.indexFrom&&(r.data.indexCount+=i.data.indexCount,r.next=i.next);else if(t===i.data.materialKey&&n===i.data.indexFrom)i.data.indexFrom=e,i.data.indexCount+=s;else{const n=new v(this._target,this.geometryType,t,e,s),a=new x(n);r.next=a,a.next=i}}}const E=(0,i.Z)("esri-2d-log-allocations");class T{constructor(t){this._array=t}get array(){return this._array}get length(){return this._array.length}static create(t){const e=S.acquire(t);return new T(e)}expand(t){const e=S.acquire(t);e.set(this._array),S.release(this._array),this._array=e}destroy(){S.release(this._array)}set(t,e){this._array.set(t._array,e)}slice(){const t=S.acquire(this._array.byteLength);return t.set(this._array),new T(t)}}class B{constructor(){this._data=new ArrayBuffer(B.BYTE_LENGTH),this._freeList=new w({start:0,end:this._data.byteLength})}static get BYTE_LENGTH(){return 64e6}get buffer(){return this._data}allocate(t){const e=this._freeList.firstFit(t);return(0,u.Wi)(e)?null:new Uint32Array(this._data,e,t/Uint32Array.BYTES_PER_ELEMENT)}free(t){this._freeList.free(t.byteOffset,t.byteLength)}}const S=new class{constructor(){this._bytesAllocated=0,this._pages=[],this._pagesByBuffer=new Map,this._addPage()}get _bytesTotal(){return this._pages.length*B.BYTE_LENGTH}acquire(t){if(this._bytesAllocated+=t,E&&console.log(`Allocating ${t}, (${this._bytesAllocated} / ${this._bytesTotal})`),t>B.BYTE_LENGTH)return new Uint32Array(t/Uint32Array.BYTES_PER_ELEMENT);for(const e of this._pages){const s=e.allocate(t);if((0,u.pC)(s))return s}return(0,u.s3)(this._addPage().allocate(t),"Expected to allocate page")}release(t){this._bytesAllocated-=t.byteLength,E&&console.log(`Freeing ${t.byteLength}, (${this._bytesAllocated} / ${this._bytesTotal})`);const e=this._pagesByBuffer.get(t.buffer);e&&e.free(t)}_addPage(){const t=new B;return this._pages.push(t),this._pagesByBuffer.set(t.buffer,t),t}};var V=s(44070),k=s(8548);class A{constructor(t,e,s){const r=T.create(e*s*Uint32Array.BYTES_PER_ELEMENT);this.size=e,this.strideInt=s,this.bufferType=t,this.dirty={start:1/0,end:0},this._gpu=null,this._cpu=r,this.clear()}get elementSize(){return this._cpu.length/this.strideInt}get invalidated(){return this.bufferSize&&!this._gpu}invalidate(){this._invalidateTriangleBuffer(),(0,u.yw)(this._gpu,(t=>t.dispose())),this._gpu=null}_invalidateTriangleBuffer(){(0,u.yw)(this._gpuComputeTriangles,(t=>t.dispose())),this._gpuComputeTriangles=null}destroy(){(0,u.yw)(this._gpu,(t=>t.dispose())),(0,u.yw)(this._gpuComputeTriangles,(t=>t.dispose())),(0,u.yw)(this._cpu,(t=>t.destroy())),(0,u.yw)(this._cpu2,(t=>t.destroy()))}clear(){this.dirty.start=1/0,this.dirty.end=0,this.freeList=new w({start:0,end:this._cpu.length/this.strideInt}),this.fillPointer=0}ensure(t){if(!(this.maxAvailableSpace()>=t)&&t*this.strideInt>this._cpu.length-this.fillPointer){this.invalidate();const e=this._cpu.length/this.strideInt,s=Math.round(1.25*(e+t)),r=s*this.strideInt;this._cpu.expand(r*Uint32Array.BYTES_PER_ELEMENT),this.freeList.free(e,s-e)}}set(t,e){this._cpu.array[t]!==e&&(this._cpu.array[t]=e,this.dirty.start=Math.min(t,this.dirty.start),this.dirty.end=Math.max(t,this.dirty.end))}getGPUBuffer(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this.bufferSize)return null;if(e){if("index"!==this.bufferType)throw new Error("Tired to get triangle buffer, but target is not an index buffer");return(0,u.Wi)(this._gpuComputeTriangles)&&(this._gpuComputeTriangles=this._createComputeBuffer(t)),this._gpuComputeTriangles}return(0,u.Wi)(this._gpu)&&(this._gpu=this._createBuffer(t)),this._gpu}getCPUBuffer(){if(!this._cpu2){const t=this._cpu.slice();this._cpu2=t}return this._cpu2.length!==this._cpu.length&&this._cpu2.expand(this._cpu.length*this._cpu.array.BYTES_PER_ELEMENT),this._cpu2.set(this._cpu),this._cpu2}get bufferSize(){return this._cpu.length/this.strideInt}maxAvailableSpace(){return this.freeList.maxAvailableSpace()}insert(t,e,s,r){const i=s*this.strideInt;if(!i)return 0;const n=e*this.strideInt*Uint32Array.BYTES_PER_ELEMENT,a=new Uint32Array(t,n,i),h=(0,u.s3)(this.freeList.firstFit(s),"First fit region must be defined")*this.strideInt,o=i,d=h/this.strideInt-e;if(0!==r)for(let u=0;u<a.length;u++)a[u]+=r;return this._cpu.array.set(a,h),this.dirty.start=Math.min(this.dirty.start,h),this.dirty.end=Math.max(this.dirty.end,h+o),this.fillPointer=Math.max(this.fillPointer,h+o),d}free(t,e,s){const r=t*this.strideInt,i=(t+e)*this.strideInt;if(!0===s)for(let n=t;n!==t+e;n++)this._cpu.array[n*this.strideInt]=2147450879;this.dirty.start=Math.min(this.dirty.start,r),this.dirty.end=Math.max(this.dirty.end,i),this.freeList.free(t,e)}upload(){if(this.dirty.end){if(this._invalidateTriangleBuffer(),(0,u.Wi)(this._gpu))return this.dirty.start=1/0,void(this.dirty.end=0);this._gpu.setSubDataFromView(this._cpu.array,this.dirty.start,this.dirty.start,this.dirty.end),this.dirty.start=1/0,this.dirty.end=0}}_createBuffer(t){const e=k.l1.DYNAMIC_DRAW;return"index"===this.bufferType?V.f.createIndex(t,e,this._cpu.array):V.f.createVertex(t,e,this._cpu.array)}_createComputeBuffer(t){const e=k.l1.DYNAMIC_DRAW,s=new Uint32Array(this.fillPointer/3);for(let r=0;r<this.fillPointer;r+=3)s[r/3]=this._cpu.array[r];return V.f.createIndex(t,e,s)}}var U=s(50477),L=s(45412);class M{constructor(t,e){this._vaos=new Map,this._indicesInvalid=!1,this.geometryType=t}destroy(){for(const[t,e]of this._vaos)(0,u.pC)(e)&&e.dispose(!1);this._indexBuffer=(0,u.SC)(this._indexBuffer),this._vertexBuffer=(0,u.SC)(this._vertexBuffer)}insert(t,e,s){if(!t.records.byteLength)return;const r=t.stride;if(this._vertexBuffer&&this._indexBuffer){const s=t.indices.byteLength/4,i=t.vertices.byteLength/r;this._indexBuffer.ensure(s),this._vertexBuffer.ensure(i);const{vertices:n,indices:a}=t,h=U.$.from(t.records),o=this._vertexBuffer.insert(n,0,n.byteLength/r,0),d=this._indexBuffer.insert(a,0,a.byteLength/4,o);if(h.forEach((t=>{t.indexFrom+=d,t.vertexFrom+=o})),(0,u.s3)(this._records,"Expected records to be defined").link(h),e)this._indicesInvalid=!0;else if(this._displayList){const t=h.getCursor();for(;t.next();)this._displayList.addRecord(t)}}else{const s=t.indices.byteLength/4,i=t.vertices.byteLength/r,n=r/Uint32Array.BYTES_PER_ELEMENT;this._records=U.$.from(t.records),this._indexBuffer=new A("index",s,1),this._vertexBuffer=new A("vertex",i,n),this._indexBuffer.insert(t.indices,0,t.indices.byteLength/4,0),this._vertexBuffer.insert(t.vertices,0,t.vertices.byteLength/r,0),e&&(this._indicesInvalid=!0)}}remove(t){if(!(0,u.Wi)(this._records))for(const e of t){const t=this._records.getCursor();if(!t.lookup(e))continue;const s=t.indexFrom,r=t.vertexFrom;let i=t.indexCount,n=t.vertexCount;for(;t.next()&&t.id===e;)i+=t.indexCount,n+=t.vertexCount;this._indexBuffer.free(s,i),this._vertexBuffer.free(r,n,!0),this._records.delete(e)}}getVAO(t,e,s,r){if(!this._vertexBuffer||!this._indexBuffer||(0,u.Wi)(this._records)||!this._vertexBuffer.bufferSize)return null;const i=r?1:0;let n=this._vaos.get(i);(this._vertexBuffer.invalidated||this._indexBuffer.invalidated)&&((0,u.yw)(n,(t=>t.dispose(!1))),n=null),this._vertexBuffer.upload(),this._indexBuffer.upload();const a=this._indexBuffer.getGPUBuffer(t,1===i),h=this._vertexBuffer.getGPUBuffer(t);return n||(n=new L.U(t,s,e,{geometry:h},a),this._vaos.set(i,n)),n}forEachCommand(t){if(!(0,u.Wi)(this._records)){if(this._sortIndices(this._records),!this._displayList){const t=this._cursorIndexOrder;this._displayList=C.from(this,this.geometryType,this._records.getCursor(),t)}this._displayList.forEach(t)}}_sortIndices(t){const e=!!this._indexBuffer.bufferSize;if(!this._indicesInvalid)return;this._indicesInvalid=!1;let s=0;const r=t.getCursor(),i=[],n=[],a=[];for(;r.next();)n.push(r.index),a.push(r.sortKey),i.push(r.id);n.sort(((t,e)=>{const s=a[e],r=a[t];return r===s?i[e]-i[t]:s-r}));const h=t.getCursor(),o=e?this._indexBuffer.getCPUBuffer():this._vertexBuffer.getCPUBuffer();for(const u of n){if(!h.seekIndex(u))throw new Error("Expected to find index");if(e){const{indexFrom:t,indexCount:e}=h;h.indexFrom=s;for(let r=0;r<e;r++)this._indexBuffer.set(s++,o.array[t+r])}else{const{vertexFrom:t,vertexCount:e}=h,r=this._vertexBuffer.strideInt,i=t*r,n=i+e*r;h.vertexFrom=s/r;for(let a=i;a<n;a++)this._vertexBuffer.set(s++,o.array[a])}}this._cursorIndexOrder=n,this._displayList=null}}let I=0;class R extends y.o{constructor(t,e,s,r,i){super(t,e,s),this.instanceId=I++,this.patchCount=0,this._renderState={current:{geometry:new Map,metrics:null},next:null,swap:!1,swapFrames:0,locked:!1},this._patches=new o.Z(100),this._bufferPatches=new o.Z(100),this._lastCommitTime=0,this._lastMessageWasClear=!1,this.transforms.labelMat2d=(0,f.c)(),this._store=r,this._requestLabelUpdate=i}destroy(){super.destroy(),this._renderState.current.geometry.forEach((t=>t.destroy()))}get labelMetrics(){return this._renderState.current.metrics}get hasData(){return!!this._renderState.current.geometry.size}getGeometry(t){return this._renderState.current.geometry.get(t)}setTransform(t,e){super.setTransform(t,e);const s=this.transforms.labelMat2d,r=t.getScreenTransform(s,e),i=(0,c.c)();(0,l.t)(i,[this.x,this.y],r),(0,d.a)(s,i),(0,d.m)(s,t.viewMat2d,s)}patch(t,e){if(this.patchCount++,t.clear&&this._lastMessageWasClear)return;this._lastMessageWasClear=t.clear,t.clear&&this._patches.size>=50&&this._dropPatches();const s=t,r=s.addOrUpdate&&this.key.id!==s.addOrUpdate.tileKeyOrigin;e&&r?this._bufferPatches.enqueue(s):(s.sort=s.sort&&!e,this._patches.enqueue(s)),this.requestRender()}commit(t){if(this._lastCommitTime!==t.time){this._lastCommitTime=t.time;for(let t=0;t<4;t++)this._updateMesh(),this.isReady&&this._updateBufferMesh();this._renderState.swap&&(this._swapRenderStates(),this.requestRender())}}lock(){this._renderState.locked=!0}unlock(){this._renderState.locked=!1,this._flushUpdates(),this._swap()}_swapRenderStates(){if(this._renderState.next){if(this._renderState.locked)return this._renderState.swap=!0,void this.requestRender();if(this._renderState.swap=!0,0===this._renderState.swapFrames)return this._renderState.swapFrames=8,void this.requestRender();1==this._renderState.swapFrames--?this._swap():this.requestRender()}}_swap(){this._renderState.swap&&(this._renderState.swap=!1,(0,u.pC)(this._renderState.next)&&(this._renderState.current.geometry.forEach((t=>t.destroy())),this._renderState.current=this._renderState.next,this._renderState.next=null,this._requestLabelUpdate()))}_flushUpdates(){let t=this._patches.maxSize;for(;this._patches.size&&t--;)this._updateMesh(),this._swap()}_updateBufferMesh(){const t=this._bufferPatches.peek();if(!(0,u.pC)(t)||!t.clear||null===this._renderState.next)for(;this._bufferPatches.size;){const t=this._bufferPatches.dequeue();(0,u.pC)(t)&&this._patchBuffer(t)}}_updateMesh(){const t=this._patches.peek();if((0,u.pC)(t)&&t.clear&&null!==this._renderState.next)return;const e=this._patches.dequeue();if((0,u.pC)(e)){if(!0===e.clear){if(!this.isReady)return;return this._renderState.next,void(this._renderState.next={geometry:new Map,metrics:null})}this.requestRender(),this._patch(e),e.end&&(this.ready(),this._swapRenderStates())}}_patch(t){(0,p.Z_)((e=>{this._remove(e,t.remove),this._insert(e,t,!1)}))}_patchBuffer(t){(0,p.Z_)((e=>{this._insert(e,t,!0)}))}_insert(t,e,s){try{var r;const i=(0,u.Pt)(this._renderState.next,this._renderState.current),n=null==(r=e.addOrUpdate)?void 0:r.data[t],a=i.geometry;if((0,u.Wi)(n))return;a.has(t)||a.set(t,new M(t,this.stage)),a.get(t).insert(n,e.sort,s),t===_.LW.LABEL&&this._insertLabelMetrics(e.type,n.metrics,e.clear)}catch(v){}}_insertLabelMetrics(t,e,s){const r=(0,u.Pt)(this._renderState.next,this._renderState.current);if((0,u.Wi)(e))return;const i=b.from(e);if((0,u.Wi)(r.metrics))r.metrics=i;else{if("update"===t){const t=i.getCursor();for(;t.next();)r.metrics.delete(t.id)}r.metrics.link(i)}}_remove(t,e){const s=(0,u.Pt)(this._renderState.next,this._renderState.current).geometry.get(t);e&&e.length&&s&&(s.remove(e),this._removeLabelMetrics(e))}_removeLabelMetrics(t){const{metrics:e}=(0,u.Pt)(this._renderState.next,this._renderState.current);if(!(0,u.Wi)(e)&&t.length)for(const s of t)for(;e.delete(s););}_dropPatches(){const t=new Array;let e=!1;for(;this._patches.size;){const s=this._patches.dequeue();if((0,u.Wi)(s))break;if(s.clear){if(e)break;e=!0}t.push(s)}this._patches.clear(),t.forEach((t=>this._patches.enqueue(t)))}}var P=s(91370),F=s(40639),q=s(98290),z=s(75010),W=s(80391);const Y=(0,i.Z)("featurelayer-order-by-server-enabled");class Z extends W.T{constructor(t,e,s,r){super(t),this._pointToCallbacks=[],this._layer=s,this._layerView=e,this._onUpdate=r}renderChildren(t){this.attributeView.update(),this.hasAnimation&&t.painter.effects.integrate.draw(t,t.attributeView),super.renderChildren(t)}hasEmptyAttributeView(){return this.attributeView.isEmpty()}isUpdating(){return this.attributeView.isUpdating()}hitTest(t){const e=(0,n.hh)();return this._pointToCallbacks.push({point:t,resolver:e}),this.requestRender(),e.promise}onTileData(t,e){const s=Y&&"orderBy"in this._layer&&this._layer.orderBy,r=(null==s?void 0:s.length)&&!s[0].valueExpression&&s[0].field,i=s&&this._layerView.orderByFields===r;t.patch(e,i),this.contains(t)||this.addChild(t),this.requestRender()}onTileError(t){this.contains(t)||this.addChild(t)}updateTransitionProperties(t,e){super.updateTransitionProperties(t,e),this._layerView.featureEffectView.transitionStep(t,e),this._layerView.featureEffectView.transitioning&&this.requestRender()}doRender(t){const{minScale:e,maxScale:s}=this._layer,r=t.state.scale;r<=(e||1/0)&&r>=s&&super.doRender(t)}onAttributeStoreUpdate(){this.hasLabels&&this._layerView.view.labelManager.requestUpdate(),this._onUpdate()}get hasAnimation(){return this.hasLabels}setStencilReference(t){if(t.rendererInfo.ddDotSize>1){const t=1;for(const e of this.children)e.stencilRef=e.key.level+t}else super.setStencilReference(t)}get hasLabels(){if("sublayers"in this._layer)return this._layer.sublayers.some((t=>t.labelingInfo&&t.labelingInfo.length&&t.labelsVisible));const t=this._layer.featureReduction,e=t&&"cluster"===t.type&&t.labelsVisible&&t.labelingInfo&&t.labelingInfo.length;return this._layer.labelingInfo&&this._layer.labelingInfo.length&&this._layer.labelsVisible||!!e}prepareRenderPasses(t){const e=t.registerRenderPass({name:"label",brushes:[z.U.label],target:()=>this.hasLabels?this.children:null,drawPhase:_.jx.LABEL|_.jx.LABEL_ALPHA}),s=t.registerRenderPass({name:"geometry",brushes:[z.U.fill,z.U.line,z.U.marker,z.U.text],target:()=>this.children,enableDefaultDraw:()=>!this._layerView.featureEffectView.hasEffects,effects:[{apply:t.effects.outsideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.excludedEffects},{apply:t.effects.insideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.includedEffects},{apply:t.effects.hittest,enable:()=>!!this._pointToCallbacks.length,args:()=>this._pointToCallbacks}]}),r=t.registerRenderPass({name:"highlight",brushes:[z.U.fill,z.U.line,z.U.marker,z.U.text],target:()=>this.children,drawPhase:_.jx.HIGHLIGHT,enableDefaultDraw:()=>!1,effects:[{apply:t.effects.highlight,enable:()=>!!this._layerView.hasHighlight()}]});return[...super.prepareRenderPasses(t),s,r,e]}}let D=class extends F.Z{install(t){const e=new Z(this.tileInfoView,this.layerView,this.layer,(()=>this.notifyChange("updating")));this.featuresView=e,t.addChild(e)}uninstall(t){t.removeChild(this.featuresView),this.featuresView.destroy(),this.featuresView=null}fetchResource(t,e){const{url:s}=t,r=this.featuresView.stage;try{return r.resourceManager.fetchResource(s,{signal:e.signal})}catch(C){return(0,n.D_)(C)?Promise.resolve({width:0,height:0}):Promise.reject(C)}}isUpdating(){var t;const e=super.isUpdating(),s=!this.featuresView||this.featuresView.isUpdating(),r=null==(t=this.featuresView)?void 0:t.hasEmptyAttributeView(),n=e||s||e&&r;return(0,i.Z)("esri-2d-log-updating")&&console.log(`Updating SymbolTileRenderer ${n}\n  -> updatingTiles ${e}\n  -> hasFeaturesView ${!!this.featuresView}\n  -> updatingFeaturesView ${s}`),n}hitTest(t){return this.featuresView.hitTest(t)}supportsRenderer(t){return null!=t&&-1!==["simple","class-breaks","unique-value","dot-density","dictionary"].indexOf(t.type)}onConfigUpdate(t){let e=null;if("visualVariables"in t){const s=((0,P.a)(t).visualVariables||[]).map((t=>{const e=t.clone();return"normalizationField"in t&&(e.normalizationField=null),t.valueExpression&&"$view.scale"!==t.valueExpression&&(e.valueExpression=null,e.field="nop"),e}));e=(0,q.I)(s)}this.featuresView.setRendererInfo(t,e,this.layerView.featureEffect)}onTileData(t){const e=this.tiles.get(t.tileKey);e&&t.data&&this.featuresView.onTileData(e,t.data),this.layerView.view.labelManager.requestUpdate()}onTileError(t){const e=this.tiles.get(t.tileKey);e&&this.featuresView.onTileError(e)}forceAttributeTextureUpload(){this.featuresView.attributeView.forceTextureUpload()}lockGPUUploads(){this.featuresView.attributeView.lockTextureUpload(),this.tiles.forEach((t=>t.lock()))}unlockGPUUploads(){this.featuresView.attributeView.unlockTextureUpload(),this.tiles.forEach((t=>t.unlock()))}async getMaterialItems(t){return this.featuresView.getMaterialItems(t)}invalidateLabels(){this.featuresView.hasLabels&&this.layerView.view.labelManager.requestUpdate()}createTile(t){const e=this.tileInfoView.getTileBounds((0,h.Ue)(),t);return new R(t,e[0],e[3],this.featuresView.attributeView,(()=>this.layerView.view.labelManager.requestUpdate()))}disposeTile(t){this.featuresView.removeChild(t),t.destroy(),this.layerView.view.labelManager.requestUpdate()}};D=(0,r._)([(0,a.j)("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],D);const H=D}}]);
//# sourceMappingURL=7347.1d7d8a2e.chunk.js.map