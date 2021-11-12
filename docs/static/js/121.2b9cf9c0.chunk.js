(this.webpackJsonpgeowebmap=this.webpackJsonpgeowebmap||[]).push([[121],{1130:function(e,t,i){"use strict";i.d(t,"a",(function(){return c})),i.d(t,"b",(function(){return l}));var a,n,r=i(13),s=i(10),o=i(87);function l(){var e=new o.a;e.vertex.uniforms.add("proj","mat4").add("view","mat4").add("width","float"),e.attributes.add("position","vec3"),e.attributes.add("normal","vec3"),e.attributes.add("uv0","vec2"),e.attributes.add("auxpos1","float"),e.varyings.add("vtc","vec2"),e.varyings.add("vlength","float"),e.varyings.add("vradius","float"),e.vertex.code.add(Object(s.a)(a||(a=Object(r.a)(["void main(void) {\nvec3 bitangent = normal;\nvtc = uv0;\nvlength = auxpos1;\nvradius = 0.5 * width;\nvec4 pos = view * vec4(position + vradius * bitangent * uv0.y, 1.0);\ngl_Position = proj * pos;\n}"])))),e.fragment.uniforms.add("outlineSize","float").add("outlineColor","vec4").add("stripeLength","float").add("stripeEvenColor","vec4").add("stripeOddColor","vec4");var t=1/Math.sqrt(2);return e.fragment.code.add(Object(s.a)(n||(n=Object(r.a)(["\n    const float INV_SQRT2 = ",";\n\n    vec4 arrowColor(vec2 tc, float len) {\n      float d = INV_SQRT2 * (tc.x - abs(tc.y));\n      d = min(d, INV_SQRT2 * (len - tc.x - abs(tc.y)));\n      d = min(d, 1.0 - abs(tc.y));\n\n      if (d < 0.0) {\n        return vec4(0.0);\n      } else if (d < outlineSize) {\n        return outlineColor;\n      } else {\n        return fract(0.5 / stripeLength * tc.x * vradius) >= 0.5 ? stripeOddColor : stripeEvenColor;\n      }\n    }\n\n    void main(void) {\n      vec2 ntc = vec2(vtc.x / vradius, vtc.y);\n      vec4 color = arrowColor(ntc, vlength / vradius);\n      if (color.a == 0.0) {\n        discard;\n      }\n      gl_FragColor = color;\n    }\n  "])),s.a.float(t))),e}var c=Object.freeze({__proto__:null,build:l})},1372:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return Ne}));var a=i(14),n=i(3),r=i(4),s=i(6),o=i(7),l=i(0),c=i(2),u=i(1),d=(i(17),i(18),i(16),i(9)),h=i(1178),b=i(693),v=i(32),O=i(55),p=i(24),_=i(1127),g=i(27),j=i(219),y=i(5),m=i(11),f=i(1036),w=i(168),L=i(53),k=i(72),P=i(1128),z=i(1129),M=i(181),C=function(e){Object(s.a)(i,e);var t=Object(o.a)(i);function i(e){var a;return Object(n.a)(this,i),(a=t.call(this,e))._unitNormalizer=new z.a,a._handles=new O.a,a._tempStartPosition=Object(m.e)(),a._tempEndPosition=Object(m.e)(),a._tempCornerPosition=Object(m.e)(),a}return Object(r.a)(i,[{key:"initialize",value:function(){var e=this;this._handles.add(Object(g.k)(this.view,"ready",(function(){return e._initialize()}),!0))}},{key:"destroy",value:function(){this._handles=Object(c.e)(this._handles)}},{key:"_initialize",value:function(){var e=this,t=this.view.spatialReference,i=Object(k.g)(t),a=i===k.a?k.d:i;this._sphericalPCPF=a;var n=Object(L.b)(t,a);this._unitNormalizer.spatialReference=n?a:t,this._handles.add([Object(j.d)((function(){return{viewData:e.viewData,startPoint:e.layer.startPoint}}),(function(t){var i=t.viewData,a=t.startPoint;i.elevationAlignedStartPoint=e._applyElevationAlignment(a)})),Object(j.d)((function(){return{viewData:e.viewData,endPoint:e.layer.endPoint}}),(function(t){var i=t.viewData,a=t.endPoint;i.elevationAlignedEndPoint=e._applyElevationAlignment(a)})),Object(j.d)((function(){return{result:e._computedResult,viewData:e.viewData}}),(function(e){var t=e.result;e.viewData.result=t}))])}},{key:"_applyElevationAlignment",value:function(e){if(Object(c.j)(e)||e.hasZ)return e;var t=e.clone();return t.z=Object(c.u)(Object(M.b)(this.view.elevationProvider,t),0),t}},{key:"_computedResult",get:function(){var e=this.viewData,t=e.elevationAlignedStartPoint,i=e.elevationAlignedEndPoint;if(Object(c.j)(t)||Object(c.j)(i))return null;var a=this._euclideanDistances(t,i),n=this._exactGeodesicDistanceAndAngle(t,i,a.horizontal.value);return{directDistance:a.direct,horizontalDistance:a.horizontal,verticalDistance:a.vertical,geodesicDistance:n.distance,geodesicAngle:n.angle}}},{key:"_euclideanDistances",value:function(e,t){var i=this,a=e.clone();a.z=t.z;var n=this._tempStartPosition,r=this._tempEndPosition,s=this._tempCornerPosition,o=this.view.spatialReference,l=this._sphericalPCPF,c=Object(L.b)(o,l)?l:o;Object(L.u)(e,n,c),Object(L.u)(t,r,c),Object(L.u)(a,s,c);var u=Object(y.o)(n,r),d=Object(y.o)(s,r),h=Math.abs(t.z-e.z),b=function(e){return i._unitNormalizer.normalizeDistance(e)},v=b(u),O=b(d),p=b(h);return{direct:new _.a(v,"meters"),horizontal:new _.a(O,"meters"),vertical:new _.a(p,"meters")}}},{key:"_exactGeodesicDistanceAndAngle",value:function(e,t,i){var a=e.spatialReference,n=new w.a({spatialReference:a});n.addPath([e,t]);var r=a.isGeographic&&Object(P.c)(a)?Object(P.a)([n],"meters")[0]:a.isWebMercator?Object(f.geodesicLength)(n,"meters"):void 0,s=r?{distance:r,angle:this._fallbackGeodesicAngle(r,a)}:this._fallbackGeodesicDistance(e,t,i),o=s.distance,l=s.angle;return{distance:new _.a(o,"meters"),angle:new _.a(l,"degrees")}}},{key:"_fallbackGeodesicAngle",value:function(e,t){return e/Object(k.e)(t).metersPerDegree}},{key:"_fallbackGeodesicDistance",value:function(e,t,i){if(Object(L.v)(e,S)){Object(L.v)(t,V);var a=Object(p.h)(S[0]),n=Object(p.h)(S[1]),r=Object(p.h)(V[0]),s=Object(p.h)(V[1]),o=Math.abs(r-a),l=Object(p.b)(Math.sin(n)*Math.sin(s)+Math.cos(n)*Math.cos(s)*Math.cos(o)),c=Object(p.r)(l),u={distance:0};return Object(P.b)(u,[S[0],S[1]],[V[0],V[1]]),{distance:u.distance,angle:c}}var d=e.spatialReference,h=i;return{distance:h,angle:this._fallbackGeodesicAngle(h,d)}}}]),i}(v.a);Object(l.a)([Object(u.b)()],C.prototype,"view",void 0),Object(l.a)([Object(u.b)()],C.prototype,"layer",void 0),Object(l.a)([Object(u.b)()],C.prototype,"viewData",void 0),Object(l.a)([Object(u.b)()],C.prototype,"_computedResult",null),C=Object(l.a)([Object(d.a)("esri.views.3d.layers.analysis.DirectLineMeasurement/DirectLineMeasurementController")],C);var S=Object(m.e)(),V=Object(m.e)(),E=i(8),D=i.n(E),A=i(15),x=(i(217),i(1179)),G=i(30),R=i(79),T=i(33),q=i(234),U=i(50),H=i(1211),W=i(1038),Q=i(36),F=i(54),B=i(1006),I=i(196),N=i(122),J=i(221),Z=i(135),K=i(121),X=i(89),Y=i(96),$=i(28),ee=i(78),te=i(99),ie=i(88),ae=i(1130),ne=i(40),re=function(e){Object(s.a)(i,e);var t=Object(o.a)(i);function i(e,a,r){return Object(n.a)(this,i),t.call(this,e,a,r)}return Object(r.a)(i,[{key:"initializeProgram",value:function(e){var t=i.shader.get().build();return new ie.a(e.rctx,t,ee.a)}},{key:"bindPass",value:function(e,t){Object(K.c)(this.program,t.camera.projectionMatrix),this.program.setUniform1f("width",e.width),this.program.setUniform1f("outlineSize",e.outlineSize),this.program.setUniform4fv("outlineColor",e.outlineColor),this.program.setUniform1f("stripeLength",e.stripeLength),this.program.setUniform4fv("stripeEvenColor",e.stripeEvenColor),this.program.setUniform4fv("stripeOddColor",e.stripeOddColor)}},{key:"bindDraw",value:function(e){Object(K.d)(this.program,e),this.program.rebindTextures()}},{key:"setPipelineState",value:function(e){var t=3===e,i=this.configuration;return Object(ne.g)({blending:i.transparent?t?te.g:Object(te.a)(e):null,polygonOffset:this.configuration.polygonOffsetEnabled&&{factor:0,units:-4},depthTest:{func:513},depthWrite:ne.e,colorWrite:ne.d})}},{key:"initializePipeline",value:function(){return this.setPipelineState(this.configuration.transparencyPassType)}},{key:"primitiveType",get:function(){return 5}}]),i}(Y.a);re.shader=new X.a(ae.a,(function(){return i.e(239).then(i.bind(null,1357))}));var se=function(e){Object(s.a)(i,e);var t=Object(o.a)(i);function i(){var e;return Object(n.a)(this,i),(e=t.apply(this,arguments)).polygonOffsetEnabled=!1,e.transparent=!1,e.transparencyPassType=3,e}return i}($.a);Object(l.a)([Object($.b)()],se.prototype,"polygonOffsetEnabled",void 0),Object(l.a)([Object($.b)()],se.prototype,"transparent",void 0),Object(l.a)([Object($.b)({count:4})],se.prototype,"transparencyPassType",void 0);var oe=function(e){Object(s.a)(i,e);var t=Object(o.a)(i);function i(e){var a;return Object(n.a)(this,i),(a=t.call(this,e,ce)).techniqueConfig=new se,a}return Object(r.a)(i,[{key:"getTechniqueConfig",value:function(e){return this.techniqueConfig.polygonOffsetEnabled=this.params.polygonOffset,this.techniqueConfig.transparent=this.params.stripeEvenColor[3]<1||this.params.stripeOddColor[3]<1||this.params.outlineColor[3]<1,this.techniqueConfig.transparencyPassType=e?e.transparencyPassType:3,this.techniqueConfig}},{key:"dispose",value:function(){}},{key:"getPassParameters",value:function(){return this.params}},{key:"intersect",value:function(){}},{key:"createBufferWriter",value:function(){return new pe}},{key:"getGLMaterial",value:function(e){return 0===e.output?new le(e):void 0}}]),i}(Z.a),le=function(e){Object(s.a)(i,e);var t=Object(o.a)(i);function i(e){var a;return Object(n.a)(this,i),(a=t.call(this,e)).updateParameters(),a}return Object(r.a)(i,[{key:"updateParameters",value:function(e){this._technique=this._techniqueRep.releaseAndAcquire(re,this._material.getTechniqueConfig(e),this._technique)}},{key:"beginSlot",value:function(e){return 3===e}},{key:"bind",value:function(e){this._technique.bindPass(this._material.getPassParameters(),e)}}]),i}(J.a),ce=Object(a.a)({width:32,outlineSize:.2,outlineColor:[1,.5,0,1],stripeLength:1,stripeEvenColor:[1,1,1,1],stripeOddColor:[1,.5,0,1],polygonOffset:!1},Z.b),ue=Object(N.a)().vec3f("position").vec3f("normal").vec2f("uv0").f32("auxpos1"),de=Object(m.e)(),he=Object(m.e)(),be=Object(m.e)(),ve=Object(m.e)(),Oe=Object(m.e)(),pe=function(){function e(){Object(n.a)(this,e),this.vertexBufferLayout=ue}return Object(r.a)(e,[{key:"allocate",value:function(e){return this.vertexBufferLayout.createBuffer(e)}},{key:"elementCount",value:function(e){return 2*(e.indices.get("position").length/2+1)}},{key:"write",value:function(e,t,i,a){var n=t.vertexAttributes.get("position").data,r=t.vertexAttributes.get("normal").data,s=n.length/3,o=t&&t.indices&&t.indices.get("position");o&&o.length!==2*(s-1)&&console.warn("MeasurementArrowMaterial does not support indices");for(var l=de,c=he,u=be,d=ve,h=Oe,b=e.transformation,v=e.invTranspTransformation,O=i.position,p=i.normal,_=i.uv0,g=0,j=0;j<s;++j){var m=3*j;if(Object(y.y)(l,n[m],n[m+1],n[m+2]),j<s-1){var f=3*(j+1);Object(y.y)(c,n[f],n[f+1],n[f+2]),Object(y.y)(h,r[f],r[f+1],r[f+2]),Object(y.t)(h,h),Object(y.l)(u,c,l),Object(y.t)(u,u),Object(y.i)(d,h,u),Object(y.t)(d,d)}var w=Object(y.o)(l,c);b&&v&&(Object(y.s)(l,l,b),Object(y.s)(c,c,b),Object(y.s)(d,d,v));var L=a+2*j,k=L+1;O.setVec(L,l),O.setVec(k,l),p.setVec(L,d),p.setVec(k,d),_.set(L,0,g),_.set(L,1,-1),_.set(k,0,g),_.set(k,1,1),j<s-1&&(g+=w)}for(var P=i.auxpos1,z=0;z<2*s;++z)P.set(a+z,g)}}]),e}(),_e=function(e){Object(s.a)(i,e);var t=Object(o.a)(i);function i(e){var a;return Object(n.a)(this,i),(a=t.call(this,e))._parameters=ge,a._handles=null,a._origin=Object(m.e)(),a._originTransform=Object(Q.d)(),a._arrowCenter=Object(m.e)(),a._renderOccluded=4,a._geometry=null,a._stripeLength=1,a._stripesEnabled=!0,a._opacity=1,a.applyProps(e),a}return Object(r.a)(i,[{key:"renderOccluded",get:function(){return this._renderOccluded},set:function(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._arrowMaterial&&this._arrowMaterial.setParameterValues({renderOccluded:e}))}},{key:"geometry",get:function(){return this._geometry},set:function(e){this._geometry=e,this.geometryChanged()}},{key:"stripeLength",get:function(){return this._stripeLength},set:function(e){this._stripeLength=e,this.attached&&this._arrowMaterial.setParameterValues({stripeLength:this._stripeLength})}},{key:"stripesEnabled",get:function(){return this._stripesEnabled},set:function(e){if(this._stripesEnabled=e,this.attached){var t=this.opacity,i=this._parameters,a=i.arrowStripeEvenColor,n=i.arrowStripeOddColor,r=Object(p.c)(je,this._stripesEnabled?a:n,t);this._arrowMaterial.setParameterValues({stripeEvenColor:r})}}},{key:"opacity",get:function(){return this._opacity},set:function(e){e!==this._opacity&&(this._opacity=e,this._updateArrowOpacity())}},{key:"createExternalResources",value:function(){var e=this,t=this._parameters,i=t.arrowStripeEvenColor,a=t.arrowStripeOddColor,n=t.arrowOutlineColor,r=this._stripesEnabled?i:a;this._arrowMaterial=new oe({outlineColor:n,stripeEvenColor:r,stripeOddColor:a,renderOccluded:this.renderOccluded,polygonOffset:!0}),this._handles=new O.a,this._handles.add(this.view.state.watch("camera",(function(){e.viewChanged()})))}},{key:"destroyExternalResources",value:function(){this._arrowMaterial=null,this._handles.destroy(),this._handles=null}},{key:"forEachExternalMaterial",value:function(e){e(this._arrowMaterial)}},{key:"createGeometries",value:function(e){if(!(Object(c.j)(this._geometry)||Object(c.j)(this._geometry.startRenderSpace)||Object(c.j)(this._geometry.endRenderSpace))){var t=this._createArrowGeometry(this._geometry.startRenderSpace,this._geometry.endRenderSpace,this._origin,this._geometry);e.addGeometry(t,this._arrowMaterial,this._originTransform),this.viewChanged()}}},{key:"_createArrowGeometry",value:function(e,t,i,a){var n=this.view.renderCoordsHelper,r=[],s=[],o=function(e,t){var a=F.d.get();Object(y.l)(a,e,i),r.push(a),s.push(t)};if("euclidean"===a.type){a.eval(.5,this._arrowCenter);var l=F.d.get();n.worldUpAtPosition(this._arrowCenter,l),o(e,l),o(t,l)}else{a.eval(.5,this._arrowCenter);for(var c=this._parameters.arrowSubdivisions+1&-2,u=0;u<c;++u){var d=u/(c-1),h=F.d.get(),b=F.d.get();a.eval(d,h),n.worldUpAtPosition(h,b),o(h,b)}}return I.a.createPolylineGeometry(r,s)}},{key:"geometryChanged",value:function(){this.recreateGeometry()}},{key:"viewChanged",value:function(){if(this.view.ready&&this.attached&&Object(c.k)(this._geometry)){var e=this.view.state.camera.computeScreenPixelSizeAt(this._arrowCenter);this._arrowMaterial.setParameterValues({width:this._parameters.arrowWidth*e})}}},{key:"_updateArrowOpacity",value:function(){var e=this.opacity,t=this._parameters,i=t.arrowStripeEvenColor,a=t.arrowStripeOddColor,n=t.arrowOutlineColor,r=Object(p.c)(je,this._stripesEnabled?i:a,e),s=Object(p.c)(ye,n,e),o=Object(p.c)(me,a,e);this._arrowMaterial.setParameterValues({stripeEvenColor:r,outlineColor:s,stripeOddColor:o})}}]),i}(B.a),ge={arrowWidth:16,arrowOutlineColor:[1,.5,0,1],arrowOutlineWidth:.2,arrowStripeEvenColor:[1,1,1,1],arrowStripeOddColor:[1,.5,0,1],arrowStripeLength:16,arrowSubdivisions:128},je=Object(U.e)(),ye=Object(U.e)(),me=Object(U.e)(),fe=i(35),we=i(29),Le=i(62),ke=i(132),Pe=i(666),ze=i(415),Me=function(e){Object(s.a)(i,e);var t=Object(o.a)(i);function i(e){var a;return Object(n.a)(this,i),(a=t.call(this,e))._handles=new O.a,a._quadMaterial=null,a._outlineMaterial=null,a._maxSize=0,a._position=Object(m.e)(),a._up=Object(m.e)(),a._right=Object(m.e)(),a._renderOccluded=4,a._color=Object(q.c)(1,0,0,1),a._outlineColor=Object(q.c)(0,0,0,1),a._outlineSize=0,a._size=32,a._outlineRenderOccluded=16,a.applyProps(e),a}return Object(r.a)(i,[{key:"renderOccluded",get:function(){return this._renderOccluded},set:function(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateQuadMaterial())}},{key:"color",get:function(){return this._color},set:function(e){Object(Le.c)(this._color,e),this._updateQuadMaterial()}},{key:"outlineColor",get:function(){return this._outlineColor},set:function(e){Object(Le.c)(this._outlineColor,e),this._updateOutlineMaterial()}},{key:"outlineSize",get:function(){return this._outlineSize},set:function(e){var t=0===this._outlineSize!=(0===e);this._outlineSize=e,t?this.recreateGeometry():this._updateOutlineMaterial()}},{key:"size",get:function(){return this._size},set:function(e){e!==this._size&&(this._size=e,this._updateTransform())}},{key:"outlineRenderOccluded",get:function(){return this._outlineRenderOccluded},set:function(e){this._outlineRenderOccluded=e,this._updateOutlineMaterial()}},{key:"geometry",set:function(e){var t=e.previous,i=e.center,a=e.next;this._maxSize=Math.min(Object(y.o)(i,t),Object(y.o)(i,a))/3,Object(y.t)(this._up,Object(y.l)(this._up,t,i)),Object(y.t)(this._right,Object(y.l)(this._right,a,i)),Object(y.m)(this._position,i),this.recreateGeometry()}},{key:"createExternalResources",value:function(){var e=this;this._quadMaterial=new Pe.a(this.quadMaterialParameters),this._outlineMaterial=new ze.a(this.outlineMaterialParameters),this._handles.add(this.view.state.watch("camera",(function(){return e._updateTransform()})))}},{key:"destroyExternalResources",value:function(){this._quadMaterial=null,this._outlineMaterial=null,this._handles.removeAll()}},{key:"forEachExternalMaterial",value:function(e){e(this._quadMaterial),e(this._outlineMaterial)}},{key:"createGeometries",value:function(e){this._createQuadGeometry(e),this._createOutlineGeometry(e),this._updateTransform(e)}},{key:"_createQuadGeometry",value:function(e){var t=this._quadGeometryData(this._up,this._right);e.addGeometry(t,this._quadMaterial)}},{key:"_createOutlineGeometry",value:function(e){if(0!==this._outlineSize){var t=Object(y.h)(F.d.get(),this._up,this._right),i=I.a.createPolylineGeometry([this._up,t,this._right]);e.addGeometry(i,this._outlineMaterial)}}},{key:"_updateTransform",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.object,t=this.view.state.camera,i=this._size*t.computeScreenPixelSizeAt(this._position),a=Math.min(this._maxSize,i);Object(we.i)(Ce),Object(we.t)(Ce,Ce,this._position),Object(we.f)(Ce,Ce,[a,a,a]),Object(c.k)(e)&&(e.transformation=Ce)}},{key:"_quadGeometryData",value:function(e,t){var i=Object(y.h)(F.d.get(),e,t);return new ke.a([["position",{size:3,data:[0,0,0].concat(Object(fe.a)(t),Object(fe.a)(e),Object(fe.a)(i)),exclusive:!0}]],[["position",new Uint16Array([0,1,2,1,2,3])]])}},{key:"quadMaterialParameters",get:function(){return{color:this._color,transparent:!0,writeDepth:!1,polygonOffset:!0,renderOccluded:this._renderOccluded}}},{key:"_updateQuadMaterial",value:function(){this._quadMaterial&&this._quadMaterial.setParameterValues(this.quadMaterialParameters)}},{key:"outlineMaterialParameters",get:function(){return{color:this._outlineColor,width:this._outlineSize,renderOccluded:this._outlineRenderOccluded}}},{key:"_updateOutlineMaterial",value:function(){this._outlineMaterial&&this._outlineMaterial.setParameterValues(this.outlineMaterialParameters)}}]),i}(B.a),Ce=Object(Q.d)(),Se=i(1181),Ve=i(1182),Ee=i(389),De=i(149),Ae=i(251),xe=function(e){Object(s.a)(i,e);var t=Object(o.a)(i);function i(e){var r;return Object(n.a)(this,i),(r=t.call(this,e))._params=Object(a.a)({},Re),r._handles=new O.a,r._segmentVisualElement=null,r._triangleVisualElement=null,r._rightAngleQuad=null,r._projectedGeodesicLine=null,r._geodesicStartHint=null,r._geodesicEndHint=null,r._segmentLabel=null,r._verticalLabel=null,r._horizontalLabel=null,r._startPosition=Object(m.e)(),r._endPosition=Object(m.e)(),r._cornerPosition=Object(m.e)(),r._startPositionAtSeaLevel=Object(m.e)(),r._endPositionAtSeaLevel=Object(m.e)(),r._state=0,r._segmentLabelDisplayedMeasurement=1,r._triangleOrientationOverride=null,r.messages=null,r.loadingMessages=!0,r.viewMode=0,r.visualizedMeasurement=0,r.actualVisualizedMeasurement=1,r.visualElementOrientation=0,r.triangleCollapseRatioThreshold=.03,r}return Object(r.a)(i,[{key:"_geodesicDistanceExceeded",get:function(){var e,t=this.layerView.result;return Object(c.k)(t)&&(null==(e=t.horizontalDistance)?void 0:e.value)>this.layer.geodesicDistanceThreshold}},{key:"ready",get:function(){return 1===this._state}},{key:"visible",get:function(){return this.layerView.visible&&!this.layerView.suspended}},{key:"allowVisualElementsOrientationChange",get:function(){return Object(c.j)(this._triangleOrientationOverride)},set:function(e){Object(c.j)(this._triangleOrientationOverride)!==e&&(Object(c.j)(this._triangleOrientationOverride)?this._triangleOrientationOverride=this._getActualVisualElementsOrientation():this._triangleOrientationOverride=null)}},{key:"labels",get:function(){var e=2===this.actualVisualizedMeasurement;return{direct:this._segmentLabel,horizontal:e?this._segmentLabel:this._horizontalLabel,vertical:this._verticalLabel}}},{key:"testData",get:function(){var e;return{labels:this.labels,stripeLength:null==(e=this._segmentVisualElement)?void 0:e.stripeLength}}},{key:"initialize",value:function(){var e=this;this._handles.add(Object(g.k)(this.view,"ready",(function(){return e._initialize()}),!0))}},{key:"_initialize",value:function(){var e=this;switch(this._state){case 1:throw new Error("invalid state");case 2:return}var t=this._params,i={attached:!0,view:this.view};this._segmentVisualElement=new _e(Object(a.a)(Object(a.a)({},i),{},{geometry:null,renderOccluded:4})),this._triangleVisualElement=new W.a(Object(a.a)(Object(a.a)({},i),{},{width:t.triangleLineWidth,color:t.triangleColor,renderOccluded:4})),this._rightAngleQuad=new Me(Object(a.a)(Object(a.a)({},i),{},{color:Ge,renderOccluded:4}));var n=Object(a.a)(Object(a.a)({},i),{},{polygonOffset:!0,stippleIntegerRepeats:!1,renderOccluded:4});this._projectedGeodesicLine=new W.a(Object(a.a)(Object(a.a)({},n),{},{width:t.geodesicProjectionLineWidth,color:t.geodesicProjectionLineColor,stipplePattern:Object(Ee.b)(t.guideStippleLengthPixels)})),this._geodesicStartHint=new W.a(Object(a.a)(Object(a.a)({},n),{},{width:t.guideLineWidth,color:t.geodesicProjectionLineColor,stipplePattern:Object(Ee.b)(t.guideStippleLengthPixels)})),this._geodesicEndHint=new W.a(Object(a.a)(Object(a.a)({},n),{},{width:t.guideLineWidth,color:t.geodesicProjectionLineColor,stipplePattern:Object(Ee.b)(t.guideStippleLengthPixels)})),this._segmentLabel=new H.a(Object(a.a)(Object(a.a)({},i),{},{fontSize:t.direcLabelFontSize})),this._verticalLabel=new H.a(Object(a.a)(Object(a.a)({},i),{},{fontSize:t.verticalLabelFontSize})),this._horizontalLabel=new H.a(Object(a.a)(Object(a.a)({},i),{},{fontSize:t.horizontalLabelFontSize})),this._handles.add([Object(j.a)((function(){return e._updateGeometryAndViewMode()})),Object(j.a)((function(){return e._updateVisualElementVisibility()})),Object(j.d)((function(){return e.layerView.fullOpacity}),(function(){return e._updateVisualElementsOpacity()})),Object(j.a)((function(){return e._updateLabelText()})),Object(j.a)((function(){return e._updateLabelVisibility()})),Object(j.a)((function(){return e._updateSegmentStripeLength()})),Object(De.c)(Object(A.a)(D.a.mark((function t(){return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e._updateMessageBundle());case 1:case"end":return t.stop()}}),t)}))))]),this._state=1,this._updateMessageBundle()}},{key:"destroy",value:function(){2!==this._state&&(this._handles=Object(c.e)(this._handles),this._segmentVisualElement=Object(c.e)(this._segmentVisualElement),this._triangleVisualElement=Object(c.e)(this._triangleVisualElement),this._rightAngleQuad=Object(c.e)(this._rightAngleQuad),this._projectedGeodesicLine=Object(c.e)(this._projectedGeodesicLine),this._geodesicStartHint=Object(c.e)(this._geodesicStartHint),this._geodesicEndHint=Object(c.e)(this._geodesicEndHint),this._segmentLabel=Object(c.e)(this._segmentLabel),this._verticalLabel=Object(c.e)(this._verticalLabel),this._horizontalLabel=Object(c.e)(this._horizontalLabel),this.set("view",null),this._state=2)}},{key:"whenReady",value:function(){var e=Object(A.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.k)(this,"ready");case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_updateVisualElementVisibility",value:function(){if(this._segmentVisualElement.visible=!1,this._triangleVisualElement.visible=!1,this._rightAngleQuad.visible=!1,this._projectedGeodesicLine.visible=!1,this._geodesicStartHint.visible=!1,this._geodesicEndHint.visible=!1,this.visible)switch(this.viewMode){case 0:break;case 1:this._segmentVisualElement.visible=!0;break;case 2:this._segmentVisualElement.visible=!0,this._triangleVisualElement.visible=!0,this._rightAngleQuad.visible=!0;break;case 3:this._segmentVisualElement.visible=!0,this._projectedGeodesicLine.visible=!0,this._geodesicStartHint.visible=!0,this._geodesicEndHint.visible=!0}}},{key:"_updateGeometryAndViewMode",value:function(){var e=this.view.renderCoordsHelper,t=this.layerView,i=t.elevationAlignedStartPoint,a=t.elevationAlignedEndPoint;if(Object(c.j)(i)||Object(c.j)(a)||i.equals(a)){this.viewMode=0;var n=this.visualizedMeasurement,r=0===n;this.actualVisualizedMeasurement=r?1:n}else{e.toRenderCoords(i,this._startPosition),e.toRenderCoords(a,this._endPosition);var s=this._getActualVisualElementsOrientation(),o=this._updateActualVisualizedMeasurement();this.viewMode=this._computeViewMode(o);var l=this._startPosition,u=this._endPosition,d=1===s?1:-1,h=d*(e.getAltitude(u)-e.getAltitude(l));h<0&&(l=this._endPosition,u=this._startPosition);var b=2===o?new Se.b(this._startPosition,this._endPosition,e.spatialReference):new Se.a(this._startPosition,this._endPosition);switch(this._segmentVisualElement.geometry=b,this._updateSegmentStripeLength(),this._segmentLabelDisplayedMeasurement=o,this.viewMode){case 1:this._updateSegment(b,s);break;case 2:this._updateSegmentAndTriangle(b,s,l,u,d,h);break;case 3:this._updateSegmentAndProjection(s)}}}},{key:"_updateSegment",value:function(e,t){this._segmentLabel.anchor=1===t?"top":"bottom",this._segmentLabel.geometry={type:"segment",segment:e,sampleLocation:"center"}}},{key:"_updateSegmentAndTriangle",value:function(e,t,i,a,n,r){var s=this.view,o=s.renderCoordsHelper,l=s.state.camera,c=this._cornerPosition;o.worldUpAtPosition(i,c),Object(y.g)(c,c,n*Math.abs(r)),Object(y.h)(c,c,i),this._triangleVisualElement.geometry=[[[i[0],i[1],i[2]],[c[0],c[1],c[2]],[a[0],a[1],a[2]]]],this._rightAngleQuad.geometry={previous:i,center:c,next:a};var u=new Se.a(i,c),d=new Se.a(c,a),h=function(e,t,i,a,n){var r=Ue,s=He;n.projectToRenderScreen(i,r),n.projectToRenderScreen(t,s);var o={segment:"bottom",horizontal:"top",vertical:r[0]<s[0]?"left":"right"},l=We,c=Qe;if(Object(Ve.b)(e,i,l,n),Object(Ve.b)(e,t,c,n),Object(T.h)(l,c)>=Te){var u=Object(p.t)(l[1])===Object(p.t)(c[1]);o.segment=u?Object(H.b)(o.vertical):o.vertical}else{var d=Fe;Object(Ve.b)(i,t,d,n),Object(T.h)(d,c)>=Te&&(o.segment=Object(p.t)(d[0])===Object(p.t)(c[0])?Object(H.b)(o.horizontal):o.horizontal)}if(2===a){var h=function(e){return"top"===e?"bottom":"top"};o.segment=h(o.segment),o.horizontal=h(o.horizontal),o.vertical=h(o.vertical)}return o}(i,a,c,t,l);this._segmentLabel.anchor=h.segment,this._segmentLabel.geometry={type:"segment",segment:e,sampleLocation:"center"},this._verticalLabel.geometry={type:"segment",segment:u,sampleLocation:"center"},this._verticalLabel.anchor=h.vertical,this._horizontalLabel.geometry={type:"segment",segment:d,sampleLocation:"center"},this._horizontalLabel.anchor=h.horizontal}},{key:"_updateSegmentAndProjection",value:function(e){var t=this.view.renderCoordsHelper;t.setAltitude(this._startPositionAtSeaLevel,0,this._startPosition),t.setAltitude(this._endPositionAtSeaLevel,0,this._endPosition);var i=new Se.b(this._startPositionAtSeaLevel,this._endPositionAtSeaLevel,t.spatialReference);this._projectedGeodesicLine.setGeometryFromSegment(i),this._geodesicStartHint.setGeometryFromSegment(new Se.a(this._startPositionAtSeaLevel,this._startPosition)),this._geodesicEndHint.setGeometryFromSegment(new Se.a(this._endPositionAtSeaLevel,this._endPosition)),this._segmentLabel.geometry={type:"segment",segment:i,sampleLocation:"center"},this._segmentLabel.anchor=1===e?"top":"bottom"}},{key:"_updateLabelText",value:function(){if(1===this._state){var e=this._segmentLabel,t=this._horizontalLabel,i=this._verticalLabel,a=this.messages,n=this.layerView.result;if(Object(c.j)(n)||Object(c.j)(a))return e.text=null,t.text=null,void(i.text=null);var r=this._getLabelsText(a,n),s=1===this._segmentLabelDisplayedMeasurement;e.text=s?r.euclideanDistance:r.geodesicDistance,t.text=r.horizontalDistance,i.text=r.verticalDistance,this.notifyChange("labels")}}},{key:"_updateLabelVisibility",value:function(){if(1===this._state){var e=this._segmentLabel,t=this._horizontalLabel,i=this._verticalLabel;if(e.visible=!1,t.visible=!1,i.visible=!1,this.visible)switch(this.viewMode){case 1:case 3:e.visible=!0;break;case 2:e.visible=!0,t.visible=!0,i.visible=!0}}}},{key:"_getLabelsText",value:function(e,t){var i=t.directDistance,n=t.horizontalDistance,r=t.verticalDistance,s=t.geodesicDistance,o=t.geodesicAngle,l=this.layerView.unit,c=function(e){return Object(a.a)({euclideanDistance:"",geodesicDistance:"",horizontalDistance:"",verticalDistance:""},e)};switch(l){case"metric":return c({euclideanDistance:i&&Object(x.e)(e,i),geodesicDistance:s&&Object(x.e)(e,s),horizontalDistance:n&&Object(x.e)(e,n),verticalDistance:r&&Object(x.f)(e,r)});case"imperial":return c({euclideanDistance:i&&Object(x.c)(e,i),geodesicDistance:s&&Object(x.c)(e,s),horizontalDistance:n&&Object(x.c)(e,n),verticalDistance:r&&Object(x.d)(e,r)});case"degrees":var u=o&&Object(x.b)(e,o,"degrees");return c({euclideanDistance:u,geodesicDistance:u,horizontalDistance:u});case"degrees-minutes-seconds":return c({horizontalDistance:o&&Object(x.a)(o)});default:return c({euclideanDistance:i&&Object(x.b)(e,i,l),geodesicDistance:s&&Object(x.b)(e,s,l),horizontalDistance:n&&Object(x.b)(e,n,l),verticalDistance:r&&Object(x.b)(e,r,l)})}}},{key:"_updateSegmentStripeLength",value:function(){var e=this._measurementArrowStripeLength,t=this._segmentVisualElement;Object(c.k)(e)?(t.stripeLength=e,t.stripesEnabled=!0):t.stripesEnabled=!1}},{key:"_computeViewMode",value:function(e){if(2===e){if(!this._geodesicDistanceExceeded)return 1;if(this._requiresGeodesicGuideAt(this._startPosition)||this._requiresGeodesicGuideAt(this._endPosition))return 3}var t=this.layerView.result;if(Object(c.j)(t))return 1;var i=t.verticalDistance,a=t.horizontalDistance,n=i.value,r=a.value;return Math.min(n/r,r/n)<this.triangleCollapseRatioThreshold?1:2}},{key:"_getActualVisualElementsOrientation",value:function(){if(Object(c.k)(this._triangleOrientationOverride))return this._triangleOrientationOverride;var e=this.visualElementOrientation;return 0===e?this.view.state.camera.aboveGround?1:2:e}},{key:"_updateActualVisualizedMeasurement",value:function(){if(0===this.visualizedMeasurement){this.actualVisualizedMeasurement=1;var e=this.layerView.unit;"degrees"!==e&&"degrees-minutes-seconds"!==e||(this.actualVisualizedMeasurement=2),this._geodesicDistanceExceeded&&(this.actualVisualizedMeasurement=2)}else this.actualVisualizedMeasurement=this.visualizedMeasurement;return this.actualVisualizedMeasurement}},{key:"_requiresGeodesicGuideAt",value:function(e){var t=this.view;if(!t.state)return!1;var i=t.state.camera,a=t.renderCoordsHelper,n=i.computeScreenPixelSizeAt(e);return a.getAltitude(e)/n>=10}},{key:"_measurementArrowStripeLength",get:function(){var e=this.view,t=this.layerView,i=t.result,a=t.unit,n=null;if(Object(c.k)(i)){var r=i.directDistance;switch(a){case"metric":n=r&&r.toUnit("meters");break;case"imperial":n=r&&r.toUnit(Object(R.p)(r.value,r.unit));break;case"degrees":case"degrees-minutes-seconds":var s=i.geodesicAngle;n=s&&s.toUnit("degrees");break;default:n=r&&r.toUnit(a)}}if(n){var o=1;return o=Object(p.o)(n.value/30),o*="degrees"===n.unit?Object(k.e)(e.spatialReference).metersPerDegree:Object(R.c)(1,n.unit,"meters")}return null}},{key:"_updateMessageBundle",value:function(){var e=this;this.loadingMessages=!0,Object(Ae.a)("esri/core/t9n/Units").then((function(t){e.messages=t,e.view&&e._updateLabelText()})).finally((function(){e.loadingMessages=!1}))}},{key:"_updateVisualElementsOpacity",value:function(){var e=this.layerView.fullOpacity,t=this._params,i=t.triangleColor,a=t.geodesicProjectionLineColor;this._triangleVisualElement.color=Object(p.c)(qe,i,e),this._rightAngleQuad.color=Object(p.c)(qe,Ge,e),Object(p.c)(qe,a,e),this._projectedGeodesicLine.color=qe,this._geodesicStartHint.color=qe,this._geodesicEndHint.color=qe,this._segmentVisualElement.opacity=e}}]),i}(v.a);Object(l.a)([Object(u.b)()],xe.prototype,"_state",void 0),Object(l.a)([Object(u.b)()],xe.prototype,"_segmentLabelDisplayedMeasurement",void 0),Object(l.a)([Object(u.b)()],xe.prototype,"_triangleOrientationOverride",void 0),Object(l.a)([Object(u.b)()],xe.prototype,"_geodesicDistanceExceeded",null),Object(l.a)([Object(u.b)()],xe.prototype,"messages",void 0),Object(l.a)([Object(u.b)()],xe.prototype,"view",void 0),Object(l.a)([Object(u.b)()],xe.prototype,"layer",void 0),Object(l.a)([Object(u.b)()],xe.prototype,"layerView",void 0),Object(l.a)([Object(u.b)({readOnly:!0})],xe.prototype,"ready",null),Object(l.a)([Object(u.b)()],xe.prototype,"loadingMessages",void 0),Object(l.a)([Object(u.b)({readOnly:!0})],xe.prototype,"visible",null),Object(l.a)([Object(u.b)()],xe.prototype,"viewMode",void 0),Object(l.a)([Object(u.b)()],xe.prototype,"visualizedMeasurement",void 0),Object(l.a)([Object(u.b)()],xe.prototype,"actualVisualizedMeasurement",void 0),Object(l.a)([Object(u.b)()],xe.prototype,"visualElementOrientation",void 0),Object(l.a)([Object(u.b)()],xe.prototype,"triangleCollapseRatioThreshold",void 0),Object(l.a)([Object(u.b)()],xe.prototype,"allowVisualElementsOrientationChange",null),Object(l.a)([Object(u.b)()],xe.prototype,"labels",null),Object(l.a)([Object(u.b)()],xe.prototype,"testData",null),Object(l.a)([Object(u.b)()],xe.prototype,"_measurementArrowStripeLength",null),xe=Object(l.a)([Object(d.a)("esri.views.3d.layers.DirectLineMeasurement.DirectLineMeasurementView")],xe);var Ge=Object(q.c)(1,.5,0,.75),Re={laserLineGlowColor:[1,.5,0],laserLineGlowWidth:8,laserLineGlowFalloff:8,laserLineInnerColor:[1,1,1],laserLineInnerWidth:.75,laserLineGlobalAlpha:.75,laserLineEnabled:!0,handleColor:[1,.5,0],handleOpacity:.5,handleRadius:5,triangleColor:Ge,triangleLineWidth:3,triangleCornerSize:32,triangleSubdivisions:128,arrowWidth:16,arrowOutlineColor:[1,.5,0,1],arrowOutlineWidth:.2,arrowStripeEvenColor:[1,1,1,1],arrowStripeOddColor:[1,.5,0,1],arrowStripeLength:16,arrowSubdivisions:128,geodesicProjectionLineWidth:2,geodesicProjectionLineColor:Ge,guideLineWidth:2,guideLineColor:Ge,guideStippleLengthPixels:6,labelDistance:25,direcLabelFontSize:16,horizontalLabelFontSize:12,verticalLabelFontSize:12},Te=Math.cos(Object(p.h)(12)),qe=Object(U.e)(),Ue=Object(G.d)(),He=Object(G.d)(),We=Object(G.c)(),Qe=Object(G.c)(),Fe=Object(G.c)(),Be=i(686),Ie=function(e){Object(s.a)(i,e);var t=Object(o.a)(i);function i(e){var a;return Object(n.a)(this,i),(a=t.call(this,e))._userUnit=null,a.type="direct-line-measurement-3d",a.result=null,a.elevationAlignedStartPoint=null,a.elevationAlignedEndPoint=null,a}return Object(r.a)(i,[{key:"unit",get:function(){return Object(c.u)(this._userUnit,this._defaultUnit)},set:function(e){this._userUnit=e}},{key:"viewMode",get:function(){return this._analysisView.viewMode}},{key:"visualizedMeasurement",get:function(){return this._analysisView.visualizedMeasurement},set:function(e){this._analysisView.visualizedMeasurement=e}},{key:"actualVisualizedMeasurement",get:function(){return this._analysisView.actualVisualizedMeasurement}},{key:"visualElementOrientation",get:function(){return this._analysisView.visualElementOrientation},set:function(e){this._analysisView.visualElementOrientation=e}},{key:"allowVisualElementsOrientationChange",get:function(){return this._analysisView.allowVisualElementsOrientationChange},set:function(e){this._analysisView.allowVisualElementsOrientationChange=e}},{key:"triangleCollapseRatioThreshold",get:function(){return this._analysisView.triangleCollapseRatioThreshold},set:function(e){this._analysisView.triangleCollapseRatioThreshold=e}},{key:"directLabelText",get:function(){return this._analysisView.labels.direct.text}},{key:"horizontalLabelText",get:function(){return this._analysisView.labels.horizontal.text}},{key:"verticalLabelText",get:function(){return this._analysisView.labels.vertical.text}},{key:"testData",get:function(){var e;return this.destroyed?{labels:null,stripeLength:null,view:null,controller:null}:Object(a.a)(Object(a.a)({},null==(e=this._analysisView)?void 0:e.testData),{},{view:this._analysisView,controller:this._analysisController})}},{key:"initialize",value:function(){var e=this.view,t=this.layer;this._analysisView=new xe({view:e,layer:t,layerView:this}),this._analysisController=new C({view:e,layer:t,viewData:this})}},{key:"destroy",value:function(){Object(c.e)(this._analysisController),Object(c.e)(this._analysisView)}},{key:"whenReady",value:function(){return this._analysisView.whenReady()}},{key:"isUpdating",value:function(){var e;return!(null==(e=this._analysisView)||!e.loadingMessages)}}]),i}(Object(b.a)(Be.a));Object(l.a)([Object(u.b)(h.a)],Ie.prototype,"_defaultUnit",void 0),Object(l.a)([Object(u.b)()],Ie.prototype,"_userUnit",void 0),Object(l.a)([Object(u.b)()],Ie.prototype,"_analysisView",void 0),Object(l.a)([Object(u.b)()],Ie.prototype,"_analysisController",void 0),Object(l.a)([Object(u.b)()],Ie.prototype,"type",void 0),Object(l.a)([Object(u.b)()],Ie.prototype,"unit",null),Object(l.a)([Object(u.b)()],Ie.prototype,"layer",void 0),Object(l.a)([Object(u.b)()],Ie.prototype,"result",void 0),Object(l.a)([Object(u.b)()],Ie.prototype,"elevationAlignedStartPoint",void 0),Object(l.a)([Object(u.b)()],Ie.prototype,"elevationAlignedEndPoint",void 0),Object(l.a)([Object(u.b)({readOnly:!0})],Ie.prototype,"viewMode",null),Object(l.a)([Object(u.b)()],Ie.prototype,"visualizedMeasurement",null),Object(l.a)([Object(u.b)({readOnly:!0})],Ie.prototype,"actualVisualizedMeasurement",null),Object(l.a)([Object(u.b)()],Ie.prototype,"visualElementOrientation",null),Object(l.a)([Object(u.b)()],Ie.prototype,"allowVisualElementsOrientationChange",null),Object(l.a)([Object(u.b)()],Ie.prototype,"triangleCollapseRatioThreshold",null),Object(l.a)([Object(u.b)({readOnly:!0})],Ie.prototype,"directLabelText",null),Object(l.a)([Object(u.b)({readOnly:!0})],Ie.prototype,"horizontalLabelText",null),Object(l.a)([Object(u.b)({readOnly:!0})],Ie.prototype,"verticalLabelText",null),Object(l.a)([Object(u.b)()],Ie.prototype,"testData",null);var Ne=Ie=Object(l.a)([Object(d.a)("esri.views.3d.layers.DirectLineMeasurementLayerView3D")],Ie)}}]);
//# sourceMappingURL=121.2b9cf9c0.chunk.js.map