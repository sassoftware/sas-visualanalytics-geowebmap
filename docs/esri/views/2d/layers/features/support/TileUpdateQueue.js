// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../../core/Accessor","../../../../../core/promiseUtils","../../../../../core/scheduling","../../../../../core/accessorSupport/decorators","../../../../../core/libs/gl-matrix-2/vec2","../../../tiling"],(function(e,t,i,n,o,s,r,l,u){Object.defineProperty(t,"__esModule",{value:!0});var a=[0,0],h=function(e){function t(t){var i=e.call(this,t)||this;return i._queue=new Map,i._isPaused=!1,i._scheduledNextHandle=null,i._timestamp=Date.now(),i.tileInfoView=null,i._next=i._next.bind(i),i._finalize=i._finalize.bind(i),i}return i.__extends(t,e),Object.defineProperty(t.prototype,"length",{get:function(){return this._queue.size},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return this._queue.size>0||null!=this._onGoingTile},enumerable:!0,configurable:!0}),t.prototype.abort=function(e){this._onGoingTile&&this._onGoingTile.tileId===e&&(this._onGoingTile.abortController.abort(),this._onGoingTile=null),this._queue.delete(e),this._scheduleNext(),this.notifyChange("updating")},t.prototype.clear=function(){this._queue.clear(),this._onGoingTile&&(this._onGoingTile.abortController.abort(),this._onGoingTile=null),this._cancelNext(),this.notifyChange("updating")},t.prototype.has=function(e){return this._queue.has(e)},t.prototype.isOngoing=function(e){return this._onGoingTile&&this._onGoingTile.tileId===e},t.prototype.pause=function(){this._isPaused||(this._isPaused=!0,this._cancelNext())},t.prototype.push=function(e,t){if(!this._queue.has(e)){var i=o.createAbortController();this._queue.set(e,{tileId:e,key:u.TileKey.pool.acquire(e),timestamp:t||this._timestamp,abortController:i}),this._scheduleNext(),this.notifyChange("updating")}},t.prototype.refresh=function(){this._timestamp=Date.now(),this.reset()},t.prototype.reset=function(){var e=this._onGoingTile;if(e){var t=e.tileId;this.push(t,this._timestamp)}this.notifyChange("updating")},t.prototype.resume=function(){this._isPaused&&(this._isPaused=!1,this._scheduleNext()),this.notifyChange("updating")},t.prototype._finalize=function(){this._onGoingTile=null,this.notifyChange("updating"),this._scheduleNext()},t.prototype._cancelNext=function(){this._scheduledNextHandle&&(this._scheduledNextHandle.remove(),this._scheduledNextHandle=null)},t.prototype._scheduleNext=function(){this._isPaused||this._scheduledNextHandle||0===this._queue.size||null!=this._onGoingTile||(this._scheduledNextHandle=s.schedule(this._next))},t.prototype._next=function(){return i.__awaiter(this,void 0,void 0,(function(){var e,t,n,o,s;return i.__generator(this,(function(i){switch(i.label){case 0:if(null==this._scheduledNextHandle||0===this._queue.size||this._onGoingTile)return this._scheduledNextHandle=null,[2];if(this._scheduledNextHandle=null,e=this._peek(),t=e.abortController.signal,n=e.tileId,o=e.key,u.TileKey.pool.release(o),this._queue.delete(n),this._onGoingTile=e,s=this.process(n,this._timestamp,{signal:t}),this.notifyChange("updating"),!function(e){return e&&"function"==typeof e.then}(s))return[3,4];i.label=1;case 1:return i.trys.push([1,3,,4]),[4,s];case 2:return i.sent(),[3,4];case 3:return i.sent(),[3,4];case 4:return this._finalize(),[2]}}))}))},t.prototype._peek=function(){var e=this;if(!this.state)throw new Error("state not set");var t=this.tileInfoView,i=this.state.center,n=Number.NEGATIVE_INFINITY,o=Number.POSITIVE_INFINITY,s=null;return this._queue.forEach((function(r){t.getTileCoords(a,r.key);var u=e._timestamp-r.timestamp;if(isNaN(u))(h=l.vec2.distance(a,i))<o&&(o=h,s=r);else if(u===n){var h;(h=l.vec2.distance(a,i))<o&&(o=h,s=r)}else u>n&&(n=u,o=Number.POSITIVE_INFINITY,s=r)})),s},i.__decorate([r.property({readOnly:!0})],t.prototype,"length",null),i.__decorate([r.property({constructOnly:!0})],t.prototype,"process",void 0),i.__decorate([r.property()],t.prototype,"state",void 0),i.__decorate([r.property({constructOnly:!0})],t.prototype,"tileInfoView",void 0),i.__decorate([r.property({readOnly:!0})],t.prototype,"updating",null),t=i.__decorate([r.subclass("esri.views.2d.layers.features.support.TileUpdateQueue")],t)}(n);t.default=h}));