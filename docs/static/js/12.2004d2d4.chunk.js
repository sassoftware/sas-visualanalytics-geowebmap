(this.webpackJsonpgeowebmap=this.webpackJsonpgeowebmap||[]).push([[12],{1015:function(e,t,r){"use strict";r.d(t,"a",(function(){return z})),r.d(t,"b",(function(){return j})),r.d(t,"c",(function(){return E})),r.d(t,"d",(function(){return P})),r.d(t,"e",(function(){return N})),r.d(t,"f",(function(){return y})),r.d(t,"g",(function(){return R})),r.d(t,"h",(function(){return w})),r.d(t,"i",(function(){return g})),r.d(t,"j",(function(){return F})),r.d(t,"k",(function(){return L}));var n=r(8),a=r.n(n),i=r(31),o=r(15),l=(r(112),r(20)),u=r(2),s=r(79),c=r(53),f=r(68),p=r(61),h=r(56),m=5e-4,x=function(e,t){var r=(e.isWGS84||e.isWebMercator)&&(t.isWGS84||t.isWebMercator);return!(e.equals(t)||r)},d=function(e,t){var r=(e[0]+e[4]+e[4*t.cols]+e[4*t.cols+4])/4,n=(e[1]+e[5]+e[4*t.rows+1]+e[4*t.rows+5])/4;return[Math.abs(r-e[2*t.rows+2]),Math.abs(n-e[2*t.rows+3])]},v={3395:20037508.342789244,3410:17334193.943686873,3832:3339584.723798206,3857:20037508.342788905,3975:17367530.445161372,4087:20037508.342789244,4088:20015108.787169147,6933:17367530.445161372,8858:7396237.374497803,8859:2465412.4581659334,32662:20037508.342789244,53001:20015086.79602057,53002:10007543.39801029,53003:20015086.79602057,53004:20015086.79602057,53016:14152803.599503474,53017:17333573.624304302,53025:7276828.3848298555,53031:10384677.558821043,53034:20015086.79602057,53036:7389443.187332862,53037:2463147.729110953,53079:20015114.352186374,53080:20015114.352186374,54001:20037508.342789244,54002:10018754.171394624,54003:20037508.342789244,54004:20037508.342789244,54016:14168658.027268292,54017:17367530.44516137,54025:7311399.09166516,54031:10396310.810074743,54034:20037508.342789244,54050:808820.9223376509,54053:1920897.3915568967,54079:20037508.342789244,54080:20037508.342789244,54100:20037508.342789244,54101:20037508.342789244,102038:4297258.582585486,102299:5013965.117483125};function y(){return b.apply(this,arguments)}function b(){return(b=Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Object(c.h)()&&Object(c.i)()){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,Object(c.j)();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,t,r){if(!x(e.spatialReference,t))return null;if(!Object(c.h)())throw new l.a("rasterprojectionhelper-projectResolution","projection engine is not loaded");return r?Object(c.f)(t,e.spatialReference,e):Object(c.f)(e.spatialReference,t,e)}function g(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if(e.spatialReference.equals(t))return e;var a=x(e.spatialReference,t);if(a&&!Object(c.h)())throw new l.a("rasterprojectionhelper-projectResolution","projection engine is not loaded");var i=r.center,o=new p.a({xmin:i.x-e.x/2,xmax:i.x+e.x/2,ymin:i.y-e.y/2,ymax:i.y+e.y/2,spatialReference:e.spatialReference}),s=a?Object(c.n)(o,t,n):Object(f.d)(o,t);return Object(u.j)(s)?null:{x:s.xmax-s.xmin,y:s.ymax-s.ymin}}function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.01;return Object(s.f)(e)?t/Object(s.f)(e):0}function w(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=e.spatialReference;if(a.equals(t))return e;var o=Object(f.d)(e,t);if(Object(u.j)(o)){if(!Object(c.h)())throw new l.a("rasterprojectionhelper-projectResolution","projection engine is not loaded");o=Object(c.n)(e,t,r)}if(n&&t.isGeographic){var s=S(a,!0),p=Object(i.a)(s,2),h=p[0],x=p[1],d=O(a);d&&null!=h&&null!=x&&(Math.abs(e.x-h)<d&&Math.abs(180-o.x)<m?o.x-=360:Math.abs(e.x-x)<d&&Math.abs(180+o.x)<m&&(o.x+=360))}return o}function M(e){var t=T(e[0].spatialReference);if(e.length<2||!Object(u.k)(t))return e[0];for(var r=e[0],n=r.xmin,a=r.xmax,i=r.ymin,o=r.ymax,l=1;l<e.length;l++){var s=e[l];a=s.xmax+t*l,i=Math.min(i,s.ymin),o=Math.max(o,s.ymax)}return new p.a({xmin:n,xmax:a,ymin:i,ymax:o,spatialReference:e[0].spatialReference})}function R(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];if(e.spatialReference.equals(t))return e;var a=N(e),i=T(e.spatialReference,!0);return Object(u.k)(i)&&0!==a?M(e.clone().normalize().map((function(e){return k(e,t,r,n)}))):k(e,t,r,n)}function k(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=e.spatialReference;if(a.equals(t))return e;if(x(a,t)&&!Object(c.h)())throw new l.a("rasterprojectionhelper-projectExtent","projection engine is not loaded");var o=Object(f.d)(e,t);Object(u.j)(o)&&(o=Object(c.n)(e,t,r));var s=S(a,!0),p=Object(i.a)(s,2),d=p[0],v=p[1];if(o&&n&&a.isWebMercator&&t.isGeographic&&null!=d&&null!=v){var y=.001,b=1e3;if(Math.abs(e.xmin-d)<y&&Math.abs(v-e.xmax)>b&&Math.abs(180-o.xmax)<m){o.xmin=-180;var j=[];j.push(new h.a(e.xmax,e.ymin,a)),j.push(new h.a(e.xmax,(e.ymin+e.ymax)/2,a)),j.push(new h.a(e.xmax,e.ymax,a));var g=j.map((function(e){return w(e,t,r)})).filter((function(e){return!isNaN(null==e?void 0:e.x)})).map((function(e){return e.x}));o.xmax=Math.max.apply(null,g)}if(Math.abs(e.xmax-v)<y&&Math.abs(d-e.xmin)>b&&Math.abs(180+o.xmin)<m){o.xmax=180;var M=[];M.push(new h.a(e.xmin,e.ymin,a)),M.push(new h.a(e.xmin,(e.ymin+e.ymax)/2,a)),M.push(new h.a(e.xmin,e.ymax,a));var R=M.map((function(e){return w(e,t,r)})).filter((function(e){return!isNaN(null==e?void 0:e.x)})).map((function(e){return e.x}));o.xmin=Math.min.apply(null,R)}}var k=S(t,!0),T=Object(i.a)(k,2);d=T[0],v=T[1];var I=O(t);return I&&null!=d&&null!=v&&(Math.abs(o.xmin-d)<I&&(o.xmin=d),Math.abs(o.xmax-v)<I&&(o.xmax=v)),o}function T(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=t?20037508.342787:20037508.342788905;return e.isWebMercator?2*r:e.wkid&&e.isGeographic?360:2*v[e.wkid]||null}function S(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=[],n=T(e,t);return Object(u.k)(n)&&(r.push(-n/2),r.push(n/2)),r}function I(e,t,r,n){var a=(e-t)/r;return a-Math.floor(a)!=0?a=Math.floor(a):n&&(a-=1),a}function N(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=T(e.spatialReference);if(!Object(u.k)(r))return 0;var n=t?0:-r/2;return I(e.xmax,n,r,!0)-I(e.xmin,n,r,!1)}function P(e){var t=e.storageInfo.origin.x,r=T(e.spatialReference,!0);if(!Object(u.k)(r))return{originX:t,halfWorldWidth:null,pyramidsInfo:null};for(var n=r/2,a=e.nativePixelSize,i=e.storageInfo,o=e.extent,l=i.maximumPyramidLevel,s=i.blockWidth,c=i.pyramidScalingFactor,f=a.x,p=[],h=Object(u.k)(e.transform)&&"gcs-shift"===e.transform.type,m=t+n,x=h?r-t:n-t,d=0;d<=l;d++){var v=(o.xmax-t)/f/s,y=v-Math.floor(v)==0?v:Math.ceil(v),b=(r/2-t)/f/s,j=b-Math.floor(b)==0?b:Math.ceil(b),g=Math.floor(m/f/s),O=Math.round(m/f)%s,w=(s-Math.round(x/f)%s)%s;p.push({resolutionX:f,blockWidth:s,datsetColumnCount:y,worldColumnCountFromOrigin:j,leftMargin:O,rightPadding:w,originColumnOffset:g}),f*=c}return{originX:t,halfWorldWidth:n,pyramidsInfo:p,hasGCSSShiftTransform:h}}function E(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[32,32];if(x(e.spatialReference,t.spatialReference)&&!Object(c.h)())throw new l.a("rasterprojectionhelper-projectResolution","projection engine is not loaded");if(!(e&&t&&r))return null;var s=e.xmin,f=e.ymin,p=e.xmax,m=e.ymax,v=e.spatialReference,y=t.spatialReference,b=T(y);i=i||"gcs-shift"===(null==a?void 0:a.type);for(var j,g={x:o[0]*r.x,y:o[1]*r.y},O={cols:Math.ceil((p-s)/g.x-.1/o[0])+1,rows:Math.ceil((m-f)/g.y-.1/o[1])+1},M=g.x,R=g.y,k=[],S=!1,I=0;I<O.cols;I++){for(var N=[],P=0;P<O.rows;P++){var E=w(new h.a({x:s+M*I,y:m-R*P,spatialReference:v}),y,n);a&&(E=a.inverseTransform(E)),N.push(E),I>0&&i&&E&&j[P]&&Object(u.k)(b)&&E.x<j[P].x&&(E.x+=b),E?(k.push((E.x-t.xmin)/(t.xmax-t.xmin)),k.push((t.ymax-E.y)/(t.ymax-t.ymin))):(k.push(NaN),k.push(NaN),S=!0)}j=N}for(var F=d(k,O),L=new Float32Array((O.cols-1)*(O.rows-1)*2*6),z=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),V=new Float32Array([-1,1,0,0,-1,1,1,0,0]),_=0;_<O.cols-1;_++){for(var W=0;W<O.rows-1;W++){for(var C=_*O.rows*2+2*W,q=k[C],G=k[C+1],A=k[C+2],D=k[C+3],X=k[C+=2*O.rows],J=k[C+1],U=k[C+2],B=k[C+3],H=0,K=12*(W*(O.cols-1)+_),Q=0;Q<3;Q++)L[K++]=z[H++]*q+z[H++]*A+z[H++]*U;H=0;for(var Y=0;Y<3;Y++)L[K++]=z[H++]*G+z[H++]*D+z[H++]*B;H=0;for(var Z=0;Z<3;Z++)L[K++]=V[H++]*q+V[H++]*X+V[H++]*U;H=0;for(var $=0;$<3;$++)L[K++]=V[H++]*G+V[H++]*J+V[H++]*B}if(S)for(var ee=0;ee<L.length;ee++)isNaN(L[ee])&&(L[ee]=-1)}return{offsets:k,error:F,coefficients:L,spacing:o,size:[O.cols-1,O.rows-1]}}function F(e){var t=e.clone().normalize();return 1===t.length?t[0]:M(t)}function L(e,t,r){var n,a=t.storageInfo,i=t.pixelSize,o=!1,l=a.pyramidResolutions;if(Object(u.k)(l)&&l.length){var s=(e.x+e.y)/2,c=l[l.length-1],f=(c.x+c.y)/2,p=(i.x+i.y)/2;if(s<=p)n=0;else if(s>=f)n=l.length,o=s/f>8;else for(var m,x=p,d=1;d<=l.length;d++){if(s<=(m=(l[d-1].x+l[d-1].y)/2)){s===m?n=d:"down"===r?(n=d-1,o=s/x>8):n="up"===r||s-x>m-s||s/x>2?d:d-1;break}x=m}var v=0===n?i:l[n-1];return{pyramidLevel:n,pyramidResolution:new h.a({x:v.x,y:v.y,spatialReference:t.spatialReference}),excessiveReading:o}}var y=Math.log(e.x/i.x)/Math.LN2,b=Math.log(e.y/i.y)/Math.LN2,j=t.storageInfo.maximumPyramidLevel||0;(n="down"===r?Math.floor(Math.min(y,b)):"up"===r?Math.ceil(Math.max(y,b)):Math.round((y+b)/2))<0?n=0:n>j&&(o=n>j+3,n=j);var g=Math.pow(2,n);return{pyramidLevel:n,pyramidResolution:new h.a({x:g*t.nativePixelSize.x,y:g*t.nativePixelSize.y,spatialReference:t.spatialReference}),excessiveReading:o}}function z(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:512,n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=e.extent,i=e.spatialReference,o=e.pixelSize,l=g(new h.a({x:o.x,y:o.y,spatialReference:i}),t,a);if(null==l)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};var u=(l.x+l.y)/2,c=Object(s.f)(t),f=u*c*96*39.37,p=t.isGeographic?256/r*295828763.7958547:256/r*591657527.591555,m="vector-magdir"===e.dataType||"vector-uv"===e.dataType,x=R(a,t);m||n&&(t.isGeographic||t.isWebMercator)&&(m=x.xmin*x.xmax<0);var d,v=f,y=1.001;if(m){v=p;var b=t.isGeographic?1341104507446289e-21:.29858214164761665,j=b*(96*c*39.37),O=t.isGeographic?4326:3857;(d=g(new h.a({x:b,y:b,spatialReference:{wkid:O}}),i,x)).x*=v/j,d.y*=v/j}else{d={x:o.x,y:o.y};for(var w=Math.ceil(Math.log(Math.min(e.width,e.height)/32)/Math.LN2),M=0;v<p*(y/2)&&M<w;)M++,v*=2,d.x*=2,d.y*=2;Math.max(v,p)/Math.min(v,p)<=y&&(v=p)}for(var k=[v],T=[{x:d.x,y:d.y}],S=70.5310735,I=Math.min(S,f)/y;v>=I;)v/=2,d.x/=2,d.y/=2,k.push(v),T.push({x:d.x,y:d.y});return{projectedPixelSize:l,scales:k,srcResolutions:T,isCustomTilingScheme:!m}}},1176:function(e,t,r){"use strict";r.d(t,"a",(function(){return y}));var n=r(8),a=r.n(n),i=r(15),o=r(3),l=r(4),u=r(6),s=r(7),c=r(0),f=r(119),p=r(20),h=r(2),m=r(1),x=(r(17),r(18),r(16),r(9)),d=r(1015),v=r(942),y=function(e){var t=function(e){Object(u.a)(r,e);var t=Object(s.a)(r);function r(){var e;return Object(o.a)(this,r),(e=t.apply(this,arguments))._rasterFieldPrefix="Raster.",e.layer=null,e.view=null,e.fullExtent=null,e.tileInfo=null,e.datumTransformation=null,e}return Object(l.a)(r,[{key:"hasTilingEffects",get:function(){return this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment}},{key:"fetchPopupFeatures",value:function(){var e=Object(i.a)(a.a.mark((function e(t,r){var n,i,o,l,u,s,c,m,x,d,y,b,j,g,O,w,M,R,k;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.layer,t){e.next=3;break}return e.abrupt("return",Promise.reject(new p.a("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:n})));case 3:if(i=n.popupEnabled,o=Object(v.a)(n,r),i&&Object(h.k)(o)){e.next=6;break}throw new p.a("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:i,popupTemplate:o});case 6:return l=[],e.next=9,n.identify(t);case 9:if(u=e.sent,s=u.value,c=u.magdirValue,m="",s&&s.length){if(m="imagery-tile"===n.type&&n.hasStandardTime()&&null!=s[0]?s.map((function(e){return n.getStandardTimeValue(e)})).join(", "):s.join(", "),(y={ObjectId:0})[b="Raster.ServicePixelValue"]=this._formatAttributeValue(m,b),(j=null==(x=n.rasterInfo)||null==(d=x.attributeTable)?void 0:d.features)&&j.length>0&&(g=j.filter((function(e){var t=e.attributes.value||e.attributes.Value||e.attributes.VALUE;return String(t)===m})),g.length>0&&(O=g[0])))for(w in O.attributes)O.attributes.hasOwnProperty(w)&&(M=this._rasterFieldPrefix+w,y[M]=this._formatAttributeValue(O.attributes[w],M));"vector-magdir"!==(R=n.rasterInfo.dataType)&&"vector-uv"!==R||(y["Raster.Magnitude"]=null==c?void 0:c[0],y["Raster.Direction"]=null==c?void 0:c[1]),(k=new f.a(this.fullExtent.clone(),null,y)).layer=n,k.sourceLayer=k.layer,l.push(k)}return e.abrupt("return",l);case 15:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"updateFullExtent",value:function(){var e,t=this.layer.tileInfo;t&&t.spatialReference||(e=new p.a("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer}));var r=Object(d.b)(this.layer.fullExtent,this.view.spatialReference,!1),n=Object(d.g)(this.layer.fullExtent,this.view.spatialReference,r);return null==n&&(e=new p.a("layerview:projection-not-supported","The layer extent cannot be projected to the view's spatial reference",{layer:this.layer})),this._set("fullExtent",n),this.datumTransformation||(this.datumTransformation=Object(d.b)(this.layer.fullExtent,this.view.spatialReference,!0)),e?Promise.reject(e):Promise.resolve()}},{key:"_formatAttributeValue",value:function(e,t){if("string"==typeof e){var r,n,a=this.layer.popupTemplate&&this.layer.popupTemplate.fieldInfos,i=this._getFieldInfo(a,t),o=i&&i.format;if(o)return e.trim().indexOf(",")>-1?(n=(r=",")+" ",this._formatDelimitedString(e,r,n,o)):e.trim().indexOf(" ")>-1?(r=n=" ",this._formatDelimitedString(e,r,n,o)):this._formatNumberFromString(e,o)}return e}},{key:"_getFieldInfo",value:function(e,t){if(e&&e.length&&t){var r,n=t.toLowerCase();return e.some((function(e){return!(!e.fieldName||e.fieldName.toLowerCase()!==n&&e.fieldName.toLowerCase()!==n.replace(/ /g,"_"))&&(r=e,!0)})),r}}},{key:"_formatDelimitedString",value:function(e,t,r,n){var a=this;return e&&t&&r&&n?e.trim().split(t).map((function(e){return a._formatNumberFromString(e,n)})).join(r):e}},{key:"_formatNumberFromString",value:function(e,t){if(!e||!t)return e;var r=Number(e);return isNaN(r)?e:t.format(r)}}]),r}(e);return Object(c.a)([Object(m.b)()],t.prototype,"layer",void 0),Object(c.a)([Object(m.b)()],t.prototype,"view",void 0),Object(c.a)([Object(m.b)()],t.prototype,"fullExtent",void 0),Object(c.a)([Object(m.b)()],t.prototype,"tileInfo",void 0),Object(c.a)([Object(m.b)({readOnly:!0})],t.prototype,"hasTilingEffects",null),t=Object(c.a)([Object(x.a)("esri.views.layers.ImageryTileLayerView")],t)}},908:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var n=r(3),a=r(4),i=r(6),o=r(7),l=r(0),u=r(16),s=r(23),c=r(27),f=r(1),p=(r(17),r(18),r(9)),h=function(e){var t=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"initialize",value:function(){var e=this;this.handles.add(Object(c.b)(this,"layer","refresh",(function(){e.doRefresh().catch((function(t){Object(s.n)(t)||u.a.getLogger(e.declaredClass).error(t)}))})),"RefreshableLayerView")}}]),r}(e);return Object(l.a)([Object(f.b)()],t.prototype,"layer",void 0),t=Object(l.a)([Object(p.a)("esri.layers.mixins.RefreshableLayerView")],t)}},922:function(e,t,r){"use strict";function n(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function a(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){for(var t=0,r=0,n=0;n<e.length;n++){var a=e[n].size;"number"==typeof a&&(t+=a,r++)}return t/r}(e.stops):t}function i(e,t){if(!t)return e;var r=t.filter((function(e){return"size"===e.type})).map((function(t){var r=t.maxSize,n=t.minSize;return(a(r,e)+a(n,e))/2})),n=0,i=r.length;if(0===i)return e;for(var o=0;o<i;o++)n+=r[o];var l=Math.floor(n/i);return Math.max(l,e)}function o(e){var t=e&&e.renderer,r="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return r;var a="visualVariables"in t?i(r,t.visualVariables):r;if("simple"===t.type)return n(a,t.symbol);if("unique-value"===t.type){var o=a;return t.uniqueValueInfos.forEach((function(e){o=n(o,e.symbol)})),o}if("class-breaks"===t.type){var l=a;return t.classBreakInfos.forEach((function(e){l=n(l,e.symbol)})),l}return t.type,a}r.d(t,"a",(function(){return o}))},942:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return s}));var n=r(8),a=r.n(n),i=r(35),o=r(15),l=r(2),u=r(81);function s(e){return c.apply(this,arguments)}function c(){return c=Object(o.a)(a.a.mark((function e(t){var r,n,o,s,c,f,p,h,m,x=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=x.length>1&&void 0!==x[1]?x[1]:t.popupTemplate,Object(l.k)(r)){e.next=3;break}return e.abrupt("return",[]);case 3:return e.next=5,r.getRequiredFields(t.fieldsIndex);case 5:if(n=e.sent,o=r.lastEditInfoEnabled,s=t.objectIdField,c=t.typeIdField,f=t.globalIdField,p=t.relationships,!n.includes("*")){e.next=13;break}return e.abrupt("return",["*"]);case 13:if(!o){e.next=19;break}return e.next=16,Object(u.n)(t);case 16:e.t0=e.sent,e.next=20;break;case 19:e.t0=[];case 20:return h=e.t0,m=Object(u.j)(t.fieldsIndex,[].concat(Object(i.a)(n),Object(i.a)(h))),e.abrupt("return",(c&&m.push(c),m&&s&&t.fieldsIndex.has(s)&&-1===m.indexOf(s)&&m.push(s),m&&f&&t.fieldsIndex.has(f)&&-1===m.indexOf(f)&&m.push(f),p&&p.forEach((function(e){var r=e.keyField;m&&r&&t.fieldsIndex.has(r)&&-1===m.indexOf(r)&&m.push(r)})),m));case 23:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}function f(e,t){return e.popupTemplate?e.popupTemplate:Object(l.k)(t)&&t.defaultPopupTemplateEnabled&&Object(l.k)(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}},947:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r(112);var n=r(2),a=r(79),i=(r(922),r(61));function o(e,t,r){var o,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new i.a;if("2d"===r.type)o=t*r.resolution;else if("3d"===r.type){var u=r.overlayPixelSizeInMapUnits(e),s=r.basemapSpatialReference;o=Object(n.k)(s)&&!s.equals(r.spatialReference)?Object(a.f)(s)/Object(a.f)(r.spatialReference):t*u}var c=e.x-o,f=e.y-o,p=e.x+o,h=e.y+o,m=r.spatialReference;return l.xmin=Math.min(c,p),l.ymin=Math.min(f,h),l.xmax=Math.max(c,p),l.ymax=Math.max(f,h),l.spatialReference=m,l}new i.a}}]);
//# sourceMappingURL=12.2004d2d4.chunk.js.map