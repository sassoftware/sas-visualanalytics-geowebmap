(this.webpackJsonpgeowebmap=this.webpackJsonpgeowebmap||[]).push([[31],{1042:function(e,t,i){"use strict";i.d(t,"a",(function(){return L}));var r=i(8),a=i.n(r),n=i(12),c=i(15),o=i(3),s=i(4),u=i(6),h=i(7),l=i(0),d=i(32),p=i(23),f=i(1),b=(i(17),i(18),i(16),i(9)),v=i(61),y=i(45),j=i(59),O=i(411),g=i(31),m=Math.PI/180;function x(e,t){var i=t.rotation*m,r=Math.abs(Math.cos(i)),a=Math.abs(Math.sin(i)),n=Object(g.a)(t.size,2),c=n[0],o=n[1];return e[0]=Math.round(o*a+c*r),e[1]=Math.round(o*r+c*a),e}function _(e,t,i,r){var a=Object(g.a)(t,2),n=a[0],c=a[1],o=Object(g.a)(r,2),s=o[0],u=o[1],h=.5*i;return e[0]=n-h*s,e[1]=c-h*u,e[2]=n+h*s,e[3]=c+h*u,e}var w=i(983),k=i(697),R=i(268),M=Object(y.l)(),B=[0,0],P=new R.a(0,0,0,0),S=2048,I=2048,A=!1,E=!1,T=!1,q=function(e){Object(u.a)(i,e);var t=Object(h.a)(i);function i(e){var r;return Object(o.a)(this,i),(r=t.call(this,e))._imagePromise=null,r.bitmaps=[],r.hidpi=T,r.imageMaxWidth=S,r.imageMaxHeight=I,r.imageRotationSupported=A,r.imageNormalizationSupported=E,r.update=Object(p.j)(function(){var e=Object(c.a)(a.a.mark((function e(t,i){var o,s,u,h,l,d,p,f,b,v,y;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.stationary&&!r.destroyed){e.next=2;break}return e.abrupt("return",null);case 2:return o=t.state,s=Object(j.e)(o.spatialReference),u=r.hidpi?t.pixelRatio:1,(h=r.imageNormalizationSupported&&o.worldScreenWidth&&o.worldScreenWidth<o.size[0])?(B[0]=o.worldScreenWidth,B[1]=o.size[1]):r.imageRotationSupported?(B[0]=o.size[0],B[1]=o.size[1]):x(B,o),l=Math.floor(B[0]*u)>r.imageMaxWidth||Math.floor(B[1]*u)>r.imageMaxHeight,d=s&&(o.extent.xmin<s.valid[0]||o.extent.xmax>s.valid[1]),p=!r.imageNormalizationSupported&&d,f=!l&&!p,b=r.imageRotationSupported?o.rotation:0,f?(v=h?o.paddedViewState.center:o.center,r._imagePromise=r._singleExport(o,B,v,o.resolution,b,u,i)):(y=Math.min(r.imageMaxWidth,r.imageMaxHeight),p&&(y=Math.min(o.worldScreenWidth,y)),r._imagePromise=r._tiledExport(o,y,b,u,i)),e.abrupt("return",r._imagePromise.then(function(){var e=Object(c.a)(a.a.mark((function e(t){var i,c,o,s,u,h;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r._imagePromise=null,!r.destroyed){r.bitmaps=null!=t?t:[],i=Object(n.a)(r.container.children);try{for(o=function(){var e=c.value;t.includes(e)||e.fadeOut().then((function(){e.remove()}))},i.s();!(c=i.n()).done;)o()}catch(a){i.e(a)}finally{i.f()}s=Object(n.a)(t);try{for(s.s();!(u=s.n()).done;)h=u.value,r.container.addChild(h),h.fadeIn()}catch(a){s.e(a)}finally{s.f()}}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){throw r._imagePromise=null,e})));case 7:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}(),5e3),r}return Object(s.a)(i,[{key:"destroy",value:function(){this.bitmaps=[]}},{key:"updating",get:function(){return!this.destroyed&&null!==this._imagePromise}},{key:"updateExports",value:function(e){var t,i=Object(n.a)(this.container.children);try{for(i.s();!(t=i.n()).done;){var r=t.value;if(!r.visible||!r.stage)return;e(r),r.invalidateTexture(),r.requestRender()}}catch(a){i.e(a)}finally{i.f()}}},{key:"_export",value:function(){var e=Object(c.a)(a.a.mark((function e(t,i,r,n,c,o){var s,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchSource(t,Math.floor(i*c),Math.floor(r*c),{rotation:n,pixelRatio:c,signal:o});case 2:return s=e.sent,u=new w.a(s,"additive"),e.abrupt("return",(u.x=t.xmin,u.y=t.ymax,u.resolution=t.width/i,u.rotation=n,u.pixelRatio=c,u));case 5:case"end":return e.stop()}}),e,this)})));return function(t,i,r,a,n,c){return e.apply(this,arguments)}}()},{key:"_singleExport",value:function(){var e=Object(c.a)(a.a.mark((function e(t,i,r,n,c,o,s){var u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(M,r,n,i),u=new v.a(M[0],M[1],M[2],M[3],t.spatialReference),e.next=4,this._export(u,i[0],i[1],c,o,s);case 4:return e.t0=e.sent,e.abrupt("return",[e.t0]);case 6:case"end":return e.stop()}}),e,this)})));return function(t,i,r,a,n,c,o){return e.apply(this,arguments)}}()},{key:"_tiledExport",value:function(e,t,i,r,a){var n=this,c=O.a.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),o=new k.a(c),s=o.getTileCoverage(e);if(!s)return null;var u=[];return s.forEach((function(c,s,h,l){P.set(c,s,h,l),o.getTileBounds(M,P);var d=new v.a(M[0],M[1],M[2],M[3],e.spatialReference);u.push(n._export(d,t,t,i,r,a))})),Promise.all(u)}}]),i}(d.a);Object(l.a)([Object(f.b)()],q.prototype,"_imagePromise",void 0),Object(l.a)([Object(f.b)()],q.prototype,"bitmaps",void 0),Object(l.a)([Object(f.b)()],q.prototype,"container",void 0),Object(l.a)([Object(f.b)()],q.prototype,"fetchSource",void 0),Object(l.a)([Object(f.b)()],q.prototype,"hidpi",void 0),Object(l.a)([Object(f.b)()],q.prototype,"imageMaxWidth",void 0),Object(l.a)([Object(f.b)()],q.prototype,"imageMaxHeight",void 0),Object(l.a)([Object(f.b)()],q.prototype,"imageRotationSupported",void 0),Object(l.a)([Object(f.b)()],q.prototype,"imageNormalizationSupported",void 0),Object(l.a)([Object(f.b)()],q.prototype,"requestUpdate",void 0),Object(l.a)([Object(f.b)()],q.prototype,"updating",null);var L=q=Object(l.a)([Object(b.a)("esri.views.2d.layers.support.ExportStrategy")],q)},897:function(e,t,i){"use strict";i.d(t,"a",(function(){return A}));var r,a=i(3),n=i(4),c=i(47),o=i(44),s=i(6),u=i(7),h=i(0),l=i(49),d=i(186),p=i(27),f=i(1),b=(i(17),i(18),i(16),i(9)),v=i(896),y=function(e){Object(s.a)(i,e);var t=Object(u.a)(i);function i(){return Object(a.a)(this,i),t.apply(this,arguments)}return i}(i(25).a),j=y=Object(h.a)([Object(b.a)("esri.views.layers.support.ClipArea")],y),O=r=function(e){Object(s.a)(i,e);var t=Object(u.a)(i);function i(){var e;return Object(a.a)(this,i),(e=t.apply(this,arguments)).type="rect",e.left=null,e.right=null,e.top=null,e.bottom=null,e}return Object(n.a)(i,[{key:"clone",value:function(){return new r({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}},{key:"version",get:function(){return(this._get("version")||0)+1}}]),i}(j);Object(h.a)([Object(f.b)({type:[Number,String],json:{write:!0}})],O.prototype,"left",void 0),Object(h.a)([Object(f.b)({type:[Number,String],json:{write:!0}})],O.prototype,"right",void 0),Object(h.a)([Object(f.b)({type:[Number,String],json:{write:!0}})],O.prototype,"top",void 0),Object(h.a)([Object(f.b)({type:[Number,String],json:{write:!0}})],O.prototype,"bottom",void 0),Object(h.a)([Object(f.b)({readOnly:!0})],O.prototype,"version",null);var g,m=O=r=Object(h.a)([Object(b.a)("esri.views.layers.support.ClipRect")],O),x=(i(112),i(173)),_=i(77),w=i(61),k=i(147),R={base:x.a,key:"type",typeMap:{extent:w.a,polygon:k.a}},M=g=function(e){Object(s.a)(i,e);var t=Object(u.a)(i);function i(){var e;return Object(a.a)(this,i),(e=t.apply(this,arguments)).type="geometry",e.geometry=null,e}return Object(n.a)(i,[{key:"version",get:function(){return(this._get("version")||0)+1}},{key:"clone",value:function(){return new g({geometry:this.geometry.clone()})}}]),i}(j);Object(h.a)([Object(f.b)({types:R,json:{read:_.a,write:!0}})],M.prototype,"geometry",void 0),Object(h.a)([Object(f.b)({readOnly:!0})],M.prototype,"version",null);var B=M=g=Object(h.a)([Object(b.a)("esri.views.layers.support.Geometry")],M),P=function(e){Object(s.a)(i,e);var t=Object(u.a)(i);function i(){var e;return Object(a.a)(this,i),(e=t.apply(this,arguments)).type="path",e.path=[],e}return Object(n.a)(i,[{key:"version",get:function(){return(this._get("version")||0)+1}}]),i}(j);Object(h.a)([Object(f.b)({type:[[[Number]]],json:{write:!0}})],P.prototype,"path",void 0),Object(h.a)([Object(f.b)({readOnly:!0})],P.prototype,"version",null);var S=P=Object(h.a)([Object(b.a)("esri.views.layers.support.Path")],P),I=l.a.ofType({key:"type",base:j,typeMap:{rect:m,path:S,geometry:B}}),A=function(e){var t=function(e){Object(s.a)(i,e);var t=Object(u.a)(i);function i(){var e;return Object(a.a)(this,i),(e=t.apply(this,arguments)).clips=new I,e.moving=!1,e.attached=!1,e.lastUpdateId=-1,e.updateRequested=!1,e}return Object(n.a)(i,[{key:"initialize",value:function(){var e,t=this;this.container||(this.container=new v.a),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([Object(p.a)(this,"suspended",(function(e){t.container&&(t.container.visible=!e),t.view&&!e&&t.updateRequested&&t.view.requestUpdate()}),!0),Object(p.a)(this,["layer.opacity","container"],(function(){var e,i;t.container&&(t.container.opacity=null!=(e=null==(i=t.layer)?void 0:i.opacity)?e:1)}),!0),Object(p.a)(this,["layer.blendMode"],(function(e){t.container&&(t.container.blendMode=e)}),!0),Object(p.a)(this,["layer.effect"],(function(e){t.container&&(t.container.effect=e)}),!0),this.clips.on("change",(function(){t.container.clips=t.clips,t.notifyChange("clips")}))]),null!=(e=this.view)&&e.whenLayerView?this.view.whenLayerView(this.layer).then((function(e){e!==t||t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){})):this.when().then((function(){t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){}))}},{key:"destroy",value:function(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}},{key:"updating",get:function(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}},{key:"isVisibleAtScale",value:function(e){var t=!0,i=this.layer,r=i.minScale,a=i.maxScale;if(null!=r&&null!=a){var n=!r,c=!a;!n&&e<=r&&(n=!0),!c&&e>=a&&(c=!0),t=n&&c}return t}},{key:"requestUpdate",value:function(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}},{key:"processUpdate",value:function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}},{key:"isUpdating",value:function(){return!1}},{key:"isRendering",value:function(){return!1}},{key:"canResume",value:function(){return!!Object(c.a)(Object(o.a)(i.prototype),"canResume",this).call(this)&&this.isVisibleAtScale(this.view.scale)}}]),i}(e);return Object(h.a)([Object(f.b)({type:I,set:function(e){var t=Object(d.b)(e,this._get("clips"),I);this._set("clips",t)}})],t.prototype,"clips",void 0),Object(h.a)([Object(f.b)()],t.prototype,"moving",void 0),Object(h.a)([Object(f.b)()],t.prototype,"attached",void 0),Object(h.a)([Object(f.b)()],t.prototype,"container",void 0),Object(h.a)([Object(f.b)()],t.prototype,"suspended",void 0),Object(h.a)([Object(f.b)({readOnly:!0})],t.prototype,"updateParameters",void 0),Object(h.a)([Object(f.b)()],t.prototype,"updateRequested",void 0),Object(h.a)([Object(f.b)()],t.prototype,"updating",null),Object(h.a)([Object(f.b)()],t.prototype,"view",void 0),t=Object(h.a)([Object(b.a)("esri.views.2d.layers.LayerView2D")],t)}},902:function(e,t,i){"use strict";i.d(t,"a",(function(){return L}));var r=i(12),a=i(3),n=i(4),c=i(47),o=i(44),s=i(6),u=i(7),h=(i(17),i(2)),l=i(267),d=i(926),p=i(896),f=i(31),b=i(20),v=i(16),y=i(691),j=i(21),O=i(14),g=i(326),m=i(33),x=i(42),_=i(493),w=i(246),k=i(883),R=i(92),M=v.a.getLogger("esri.views.2d.engine.webgl.Mesh2D"),B=function(e,t,i,r){for(var a=0,n=1;n<i;n++){var c=e[2*(t+n-1)],o=e[2*(t+n-1)+1];a+=(e[2*(t+n)]-c)*(e[2*(t+n)+1]+o)}return r?a>0:a<0},P=function(e,t){for(var i=e.coords,a=e.lengths,n=[],c=0,o=0;c<a.length;o+=a[c],c+=1){for(var s=o,u=[];c<a.length-1&&B(i,o+a[c],a[c+1],t);o+=a[c+=1])u.push(o+a[c]-s);var h,l=i.slice(2*s,2*(o+a[c])),d=Object(g.a)(l,u,2),p=Object(r.a)(d);try{for(p.s();!(h=p.n()).done;){var f=h.value;n.push(f+s)}}catch(b){p.e(b)}finally{p.f()}}return n},S=function(){function e(t,i,r){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];Object(a.a)(this,e),this._cache={},this.vertices=t,this.indices=i,this.primitiveType=r,this.isMapSpace=n}return Object(n.a)(e,[{key:"destroy",value:function(){for(var e in Object(h.k)(this._cache.indexBuffer)&&this._cache.indexBuffer.dispose(),this._cache.vertexBuffers)Object(h.k)(this._cache.vertexBuffers[e])&&this._cache.vertexBuffers[e].dispose()}},{key:"elementType",get:function(){return function(e){switch(e.BYTES_PER_ELEMENT){case 1:return 5121;case 2:return 5123;case 4:return 5125;default:throw new b.a("Cannot get DataType of array")}}(this.indices)}},{key:"getIndexBuffer",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:35044;return this._cache.indexBuffer||(this._cache.indexBuffer=R.a.createIndex(e,t,this.indices)),this._cache.indexBuffer}},{key:"getVertexBuffers",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:35044;return this._cache.vertexBuffers||(this._cache.vertexBuffers=Object.keys(this.vertices).reduce((function(r,a){return Object(O.a)(Object(O.a)({},r),{},Object(j.a)({},a,R.a.createVertex(e,i,t.vertices[a])))}),{})),this._cache.vertexBuffers}}],[{key:"fromRect",value:function(t){var i=t.x,r=t.y,a=i+t.width,n=r+t.height;return e.fromScreenExtent({xmin:i,ymin:r,xmax:a,ymax:n})}},{key:"fromPath",value:function(t){for(var i=Object(_.f)(new w.a,t.path,!1,!1),r=i.coords,a=new Uint32Array(P(i,!0)),n=new Uint32Array(r.length/2),c=0;c<n.length;c++)n[c]=Object(k.a)(Math.floor(r[2*c]),Math.floor(r[2*c+1]));return new e({geometry:n},a,4)}},{key:"fromGeometry",value:function(t,i){var r=i.geometry.type;switch(r){case"polygon":return e.fromPolygon(t,i.geometry);case"extent":return e.fromMapExtent(t,i.geometry);default:return M.error(new b.a("mapview-bad-type","Unable to create a mesh from type ".concat(r),i)),e.fromRect({x:0,y:0,width:1,height:1})}}},{key:"fromPolygon",value:function(t,i){for(var r=Object(_.g)(new w.a,i,!1,!1),a=r.coords,n=new Uint32Array(P(r,!1)),c=new Uint32Array(a.length/2),o=Object(x.b)(),s=Object(x.b)(),u=0;u<c.length;u++)Object(m.s)(o,a[2*u],a[2*u+1]),t.toScreen(s,o),c[u]=Object(k.a)(Math.floor(s[0]),Math.floor(s[1]));return new e({geometry:c},n,4,!0)}},{key:"fromScreenExtent",value:function(t){var i=t.xmin,r=t.xmax,a=t.ymin,n=t.ymax;return new e({geometry:new Uint32Array([Object(k.a)(i,a),Object(k.a)(r,a),Object(k.a)(i,n),Object(k.a)(i,n),Object(k.a)(r,a),Object(k.a)(r,n)])},new Uint32Array([0,1,2,3,4,5]),4)}},{key:"fromMapExtent",value:function(t,i){var r=t.toScreen([0,0],[i.xmin,i.ymin]),a=Object(f.a)(r,2),n=a[0],c=a[1],o=t.toScreen([0,0],[i.xmax,i.ymax]),s=Object(f.a)(o,2),u=s[0],h=s[1];return new e({geometry:new Uint32Array([Object(k.a)(n,c),Object(k.a)(u,c),Object(k.a)(n,h),Object(k.a)(n,h),Object(k.a)(u,c),Object(k.a)(u,h)])},new Uint32Array([0,1,2,3,4,5]),4)}}]),e}(),I=i(115),A=v.a.getLogger("esri.views.2d.engine.webgl.ClippingInfo"),E=function(e){return parseFloat(e)/100},T=function(e){Object(s.a)(i,e);var t=Object(u.a)(i);function i(e,r){var n;return Object(a.a)(this,i),(n=t.call(this))._clip=r,n._cache={},n.stage=e,n._handle=r.watch("version",(function(){return n._invalidate()})),n.ready(),n}return Object(n.a)(i,[{key:"_destroyGL",value:function(){Object(h.k)(this._cache.mesh)&&(this._cache.mesh.destroy(),this._cache.mesh=null),Object(h.k)(this._cache.vao)&&(this._cache.vao.dispose(),this._cache.vao=null)}},{key:"destroy",value:function(){this._destroyGL(),this._handle.remove()}},{key:"getVAO",value:function(e,t,i,r){var a=Object(f.a)(t.size,2),n=a[0],c=a[1];if("geometry"!==this._clip.type&&this._lastWidth===n&&this._lastHeight===c||(this._lastWidth=n,this._lastHeight=c,this._destroyGL()),Object(h.j)(this._cache.vao)){var o=this._createMesh(t,this._clip),s=o.getIndexBuffer(e),u=o.getVertexBuffers(e);this._cache.mesh=o,this._cache.vao=new I.a(e,i,r,u,s)}return this._cache.vao}},{key:"_createTransforms",value:function(){return{dvs:Object(l.b)()}}},{key:"_invalidate",value:function(){this._destroyGL(),this.requestRender()}},{key:"_createScreenRect",value:function(e,t){var i=Object(f.a)(e.size,2),r=i[0],a=i[1],n="string"==typeof t.left?E(t.left)*r:t.left,c="string"==typeof t.right?E(t.right)*r:t.right,o="string"==typeof t.top?E(t.top)*a:t.top,s="string"==typeof t.bottom?E(t.bottom)*a:t.bottom,u=n,h=o;return{x:u,y:h,width:Math.max(r-c-u,0),height:Math.max(a-s-h,0)}}},{key:"_createMesh",value:function(e,t){switch(t.type){case"rect":return S.fromRect(this._createScreenRect(e,t));case"path":return S.fromPath(t);case"geometry":return S.fromGeometry(e,t);default:return A.error(new b.a("mapview-bad-type","Unable to create ClippingInfo mesh from clip of type: ${clip.type}")),S.fromRect({x:0,y:0,width:1,height:1})}}}],[{key:"fromClipArea",value:function(e,t){return new i(e,t)}}]),i}(y.a),q=i(882),L=function(e){Object(s.a)(i,e);var t=Object(u.a)(i);function i(){var e;return Object(a.a)(this,i),(e=t.apply(this,arguments)).name=e.constructor.name,e}return Object(n.a)(i,[{key:"clips",set:function(e){this._clips=e,this.children.forEach((function(t){return t.clips=e})),this._updateClippingInfo()}},{key:"_createTransforms",value:function(){return{dvs:Object(l.b)()}}},{key:"doRender",value:function(e){var t=this.createRenderParams(e),i=t.painter,r=t.globalOpacity,a=t.profiler,n=t.drawPhase===q.c.LABEL?1:r*this.computedOpacity;a.recordContainerStart(this.name),i.beforeRenderLayer(t,this._clippingInfos?255:0,n),this.updateTransforms(e.state),this.renderChildren(t),i.compositeLayer(t,n),a.recordContainerEnd()}},{key:"renderChildren",value:function(e){Object(h.j)(this._renderPasses)&&(this._renderPasses=this.prepareRenderPasses(e.painter));var t,i=Object(r.a)(this.children);try{for(i.s();!(t=i.n()).done;){t.value.beforeRender(e)}}catch(u){i.e(u)}finally{i.f()}var a,n=Object(r.a)(this._renderPasses);try{for(n.s();!(a=n.n()).done;){var c=a.value;try{c.render(e)}catch(l){}}}catch(u){n.e(u)}finally{n.f()}var o,s=Object(r.a)(this.children);try{for(s.s();!(o=s.n()).done;){o.value.afterRender(e)}}catch(u){s.e(u)}finally{s.f()}}},{key:"createRenderParams",value:function(e){return e.requireFBO=this.requiresDedicatedFBO,e}},{key:"prepareRenderPasses",value:function(e){var t=this;return[e.registerRenderPass({name:"clip",brushes:[d.a.clip],target:function(){return t._clippingInfos},drawPhase:q.c.MAP|q.c.LABEL|q.c.LABEL_ALPHA|q.c.DEBUG|q.c.HIGHLIGHT})]}},{key:"updateTransforms",value:function(e){var t,i=Object(r.a)(this.children);try{for(i.s();!(t=i.n()).done;){t.value.setTransform(e)}}catch(a){i.e(a)}finally{i.f()}}},{key:"onAttach",value:function(){Object(c.a)(Object(o.a)(i.prototype),"onAttach",this).call(this),this._updateClippingInfo()}},{key:"onDetach",value:function(){Object(c.a)(Object(o.a)(i.prototype),"onDetach",this).call(this),this._updateClippingInfo()}},{key:"_updateClippingInfo",value:function(){var e=this;if(Object(h.k)(this._clippingInfos)&&(this._clippingInfos.forEach((function(e){return e.destroy()})),this._clippingInfos=null),this.stage){var t=this._clips;Object(h.k)(t)&&t.length&&(this._clippingInfos=t.items.map((function(t){return T.fromClipArea(e.stage,t)}))),this.requestRender()}}}]),i}(p.a)},908:function(e,t,i){"use strict";i.d(t,"a",(function(){return p}));var r=i(3),a=i(4),n=i(6),c=i(7),o=i(0),s=i(16),u=i(23),h=i(27),l=i(1),d=(i(17),i(18),i(9)),p=function(e){var t=function(e){Object(n.a)(i,e);var t=Object(c.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(a.a)(i,[{key:"initialize",value:function(){var e=this;this.handles.add(Object(h.b)(this,"layer","refresh",(function(){e.doRefresh().catch((function(t){Object(u.n)(t)||s.a.getLogger(e.declaredClass).error(t)}))})),"RefreshableLayerView")}}]),i}(e);return Object(o.a)([Object(l.b)()],t.prototype,"layer",void 0),t=Object(o.a)([Object(d.a)("esri.layers.mixins.RefreshableLayerView")],t)}},980:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var r=i(3),a=i(4),n=i(2),c=function(){function e(t,i,a){Object(r.a)(this,e),this.pixelBlock=t,this.extent=i,this.originalPixelBlock=a}return Object(a.a)(e,[{key:"width",get:function(){return Object(n.k)(this.pixelBlock)?this.pixelBlock.width:0}},{key:"height",get:function(){return Object(n.k)(this.pixelBlock)?this.pixelBlock.height:0}},{key:"render",value:function(e){var t=this.pixelBlock;if(!Object(n.j)(t)){var i=this.filter({pixelBlock:t});if(!Object(n.j)(i.pixelBlock)){var r=i.pixelBlock.getAsRGBA(),a=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);a.data.set(r),e.putImageData(a,0,0)}}}},{key:"getRenderedRasterPixels",value:function(){var e=this.filter({pixelBlock:this.pixelBlock});return Object(n.j)(e.pixelBlock)?null:{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}]),e}()},983:function(e,t,i){"use strict";i.d(t,"a",(function(){return O}));var r=i(31),a=i(3),n=i(4),c=i(22),o=i(47),s=i(44),u=i(6),h=i(7),l=i(2),d=i(70),p=i(267),f=i(283),b=(i(92),i(113),i(17),i(142),i(129),i(284),i(40),i(65)),v=(i(115),i(691)),y=i(980);function j(e,t,i){var r={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return t&&i&&(r.width=t,r.height=i),new b.a(e,r)}var O=function(e){Object(u.a)(i,e);var t=Object(h.a)(i);function i(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1?arguments[1]:void 0,o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return Object(a.a)(this,i),(e=t.call(this)).requestRenderOnSourceChangedEnabled=o,e._textureInvalidated=!0,e.stencilRef=0,e.coordScale=[1,1],e._height=void 0,e.pixelRatio=1,e.resolution=0,e.rotation=0,e._source=null,e._width=void 0,e.x=0,e.y=0,e.blendFunction=n,e.source=r,e.requestRender=e.requestRender.bind(Object(c.a)(e)),e}return Object(n.a)(i,[{key:"destroy",value:function(){this._texture&&(this._texture.dispose(),this._texture=null)}},{key:"isSourceScaled",get:function(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}},{key:"height",get:function(){return void 0!==this._height?this._height:this.sourceHeight},set:function(e){this._height=e}},{key:"source",get:function(){return this._source},set:function(e){this._source=e,this.invalidateTexture()}},{key:"sourceHeight",get:function(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}},{key:"sourceWidth",get:function(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}},{key:"width",get:function(){return void 0!==this._width?this._width:this.sourceWidth},set:function(e){this._width=e}},{key:"beforeRender",value:function(e){Object(o.a)(Object(s.a)(i.prototype),"beforeRender",this).call(this,e),this.updateTexture(e.context)}},{key:"invalidateTexture",value:function(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}},{key:"_createTransforms",value:function(){return{dvs:Object(p.b)()}}},{key:"setTransform",value:function(e){var t=Object(d.b)(this.transforms.dvs),i=e.toScreenNoRotation([0,0],[this.x,this.y]),a=Object(r.a)(i,2),n=a[0],c=a[1],o=this.resolution/this.pixelRatio/e.resolution,s=o*this.width,u=o*this.height,h=Math.PI*this.rotation/180;Object(d.c)(t,t,Object(f.b)(n,c)),Object(d.c)(t,t,Object(f.b)(s/2,u/2)),Object(d.m)(t,t,-h),Object(d.c)(t,t,Object(f.b)(-s/2,-u/2)),Object(d.j)(t,t,Object(f.b)(s,u)),Object(d.k)(this.transforms.dvs,e.displayViewMat3,t)}},{key:"setSamplingProfile",value:function(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}},{key:"bind",value:function(e,t){this._texture&&e.bindTexture(this._texture,t)}},{key:"updateTexture",value:function(e){var t;if(!this.stage)return null==(t=this._texture)||t.dispose(),void(this._texture=null);if(this._textureInvalidated){this._textureInvalidated=!1,this._texture||(this.source?this._texture=j(e,this.sourceWidth,this.sourceHeight):this._texture=j(e));var i,r=this.source;if(r){if(this._texture.resize(this.sourceWidth,this.sourceHeight),(i=r)&&"render"in i)if(r instanceof y.a){var a=r.getRenderedRasterPixels();this._texture.setData(Object(l.k)(a)?a.renderedRasterPixels:null)}else this._texture.setData(function(e){var t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}(r));else(function(e){return e&&!("render"in e)})(r)&&this._texture.setData(r);this.ready()}else this._texture.setData(null)}}},{key:"onAttach",value:function(){this.invalidateTexture()}},{key:"onDetach",value:function(){this.invalidateTexture()}}]),i}(v.a)},996:function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var r=i(35),a=i(3),n=i(4),c=i(47),o=i(44),s=i(6),u=i(7),h=i(926),l=i(882),d=function(e){Object(s.a)(i,e);var t=Object(u.a)(i);function i(){return Object(a.a)(this,i),t.apply(this,arguments)}return Object(n.a)(i,[{key:"requiresDedicatedFBO",get:function(){return this.children.some((function(e){return"additive"===e.blendFunction}))}},{key:"prepareRenderPasses",value:function(e){var t=this,a=e.registerRenderPass({name:"bitmap",brushes:[h.a.bitmap],target:function(){return t.children},drawPhase:l.c.MAP});return[].concat(Object(r.a)(Object(c.a)(Object(o.a)(i.prototype),"prepareRenderPasses",this).call(this,e)),[a])}}]),i}(i(902).a)}}]);
//# sourceMappingURL=31.61e2cc0d.chunk.js.map