(function(){var e={"esri/tasks/RouteTask":1333,"esri/tasks/support/GPMessage":1454,"esri/core/queryUtils":1506,"esri/tasks/mixins/NAServiceDescription":1507,"esri/tasks/support/NAMessage":1508,"esri/tasks/support/DirectionsFeatureSet":1620,"esri/tasks/support/RouteResultsContainer":1832,"esri/tasks/support/RouteResult":1833},r=this||window,t=r.webpackJsonp=r.webpackJsonp||[];t.registerAbsMids?t.registerAbsMids(e):(t.absMidsWaiting=t.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{1333:function(e,r,t){var o,s;o=[t.dj.c(e.i),r,t(0),t(33),t(4),t(1506),t(73),t(1),t(685),t(241),t(1507),t(1832)],void 0===(s=function(e,r,t,o,s,n,i,a,p,u,l,c){var d=n.createQueryParamsHelper({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},outSpatialReference:{name:"outSR",getter:function(e){return e.outSpatialReference.wkid}},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},stops:!0,travelMode:!0});return function(e){function r(r){return e.call(this,r)||this}return t.__extends(r,e),r.prototype.solve=function(e,r){var n=this,a=[],u=[],l={},c={};return e.stops&&e.stops.features&&this._collectGeometries(e.stops.features,u,"stops.features",l),e.pointBarriers&&e.pointBarriers.features&&this._collectGeometries(e.pointBarriers.features,u,"pointBarriers.features",l),e.polylineBarriers&&e.polylineBarriers.features&&this._collectGeometries(e.polylineBarriers.features,u,"polylineBarriers.features",l),e.polygonBarriers&&e.polygonBarriers.features&&this._collectGeometries(e.polygonBarriers.features,u,"polygonBarriers.features",l),p.normalizeCentralMeridian(u).then((function(e){for(var r in l){var t=l[r];a.push(r),c[r]=e.slice(t[0],t[1])}return n._isInputGeometryZAware(c,a)?n.getServiceDescription():s.resolve({dontCheck:!0})})).then((function(s){("dontCheck"in s?s.dontCheck:s.hasZ)||n._dropZValuesOffInputGeometry(c,a);var p=function(r){c[r].forEach((function(t,o){e.get(r)[o].geometry=t}))};for(var u in c)p(u);var l={query:t.__assign(t.__assign(t.__assign({},n.parsedUrl.query),{f:"json"}),d.toQueryParams(e))};(n.requestOptions||r)&&(l=t.__assign(t.__assign(t.__assign({},n.requestOptions),r),l));var f=n.parsedUrl.path,y=i.endsWith(f,"/solve")?f:f+"/solve";return o(y,l)})).then((function(e){return n._handleSolveResponse(e)}))},r.prototype._collectGeometries=function(e,r,t,o){o[t]=[r.length,r.length+e.length],e.forEach((function(e){r.push(e.geometry)}))},r.prototype._handleSolveResponse=function(e){var r,t,o=[],s=[],n=e.data,i=n.directions,a=void 0===i?[]:i,p=n.routes,u=void 0===p?{}:p,l=u.features,d=void 0===l?[]:l,f=u.spatialReference,y=void 0===f?null:f,v=n.stops,_=void 0===v?{}:v,m=_.features,h=void 0===m?[]:m,g=_.spatialReference,b=void 0===g?null:g,T=n.barriers,w=n.polygonBarriers,M=n.polylineBarriers,S=n.messages,N="esri.tasks.RouteTask.NULL_ROUTE_NAME",R=!0,B=d&&y||h&&b||T&&T.spatialReference||w&&w.spatialReference||M&&M.spatialReference;a.forEach((function(e){o.push(r=e.routeName),s[r]={directions:e}})),d.forEach((function(e){-1===o.indexOf(r=e.attributes.Name)&&(o.push(r),s[r]={}),e.geometry&&(e.geometry.spatialReference=B),s[r].route=e})),h.forEach((function(e){t=e.attributes,-1===o.indexOf(r=t.RouteName||N)&&(o.push(r),s[r]={}),r!==N&&(R=!1),e.geometry&&(e.geometry.spatialReference=B),null==s[r].stops&&(s[r].stops=[]),s[r].stops.push(e)})),h.length>0&&!0===R&&(s[o[0]].stops=s[N].stops,delete s[N],o.splice(o.indexOf(N),1));var x=o.map((function(e){return s[e].routeName=e===N?null:e,s[e]}));return c.fromJSON({routeResults:x,pointBarriers:T,polygonBarriers:w,polylineBarriers:M,messages:S})},t.__decorate([a.subclass("esri.tasks.RouteTask")],r)}(l.NAServiceDescriptionMixin(u))}.apply(null,o))||(e.exports=s)},1454:function(e,r,t){var o,s;o=[t.dj.c(e.i),r,t(0),t(22),t(7),t(1)],void 0===(s=function(e,r,t,o,s,n){var i=new o.default({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});return function(e){function r(r){var t=e.call(this,r)||this;return t.description=null,t.type=null,t}return t.__extends(r,e),t.__decorate([n.property({type:String,json:{write:!0}})],r.prototype,"description",void 0),t.__decorate([n.property({type:String,json:{read:i.read,write:i.write}})],r.prototype,"type",void 0),t.__decorate([n.subclass("esri.tasks.support.GPMessage")],r)}(s.JSONSupport)}.apply(null,o))||(e.exports=s)},1506:function(e,r,t){var o,s;o=[t.dj.c(e.i),r],void 0===(s=function(e,r){Object.defineProperty(r,"__esModule",{value:!0});var t=function(){function e(e){void 0===e&&(e={}),this._options=e}return e.prototype.toQueryParams=function(e){var r=this;if(!e)return null;var t=e.toJSON(),o={};return Object.keys(t).forEach((function(e){var s=r._options[e];if(s){var n="boolean"!=typeof s&&s.name?s.name:e,i="boolean"!=typeof s&&s.getter?s.getter(t):t[e];null!=i&&(o[n]=function(e){if(!Array.isArray(e))return!1;var r=e[0];return"number"==typeof r||"string"==typeof r}(i)?i.join(","):"object"==typeof i?JSON.stringify(i):i)}else o[e]=t[e]}),this),o},e}();r.createQueryParamsHelper=function(e){return new t(e)}}.apply(null,o))||(e.exports=s)},1507:function(e,r,t){var o,s;o=[t.dj.c(e.i),r,t(0),t(33),t(11),t(2),t(85),t(26),t(1),t(241)],void 0===(s=function(e,r,t,o,s,n,i,a,p,u){Object.defineProperty(r,"__esModule",{value:!0}),r.NAServiceDescriptionMixin=function(e){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(r,e),r.prototype.getServiceDescription=function(){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(e){return this._serviceDescriptionPromise||(this._serviceDescriptionPromise=this._fetchServiceDescription()),[2,this._serviceDescriptionPromise]}))}))},r.prototype._fetchServiceDescription=function(){return t.__awaiter(this,void 0,void 0,(function(){var e,r,n,p,u,l;return t.__generator(this,(function(c){switch(c.label){case 0:if(!this.url||!this.parsedUrl)throw new s("network-service:missing-url","Url to Network service is missing");return e=this.url,[4,o(e,{query:{f:"json"}})];case 1:for((r=c.sent().data).supportedTravelModes||(r.supportedTravelModes=[]),n=0;n<r.supportedTravelModes.length;n++)r.supportedTravelModes[n].id||(r.supportedTravelModes[n].id=r.supportedTravelModes[n].itemId);return[4,r.currentVersion>=10.4?function(e){return t.__awaiter(this,void 0,void 0,(function(){var r,n,i,a;return t.__generator(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,o(e+("/"===e[e.length-1]?"":"/")+"retrieveTravelModes",{query:{f:"json"}})];case 1:return r=t.sent().data,n=r.supportedTravelModes,i=r.defaultTravelMode,[2,{supportedTravelModes:n,defaultTravelMode:i}];case 2:throw a=t.sent(),new s("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:a});case 3:return[2]}}))}))}(e):function(e){return t.__awaiter(this,void 0,void 0,(function(){var r,s,n,p,u,l,c,d,f,y,v,_,m,h,g,b;return t.__generator(this,(function(t){switch(t.label){case 0:return[4,o(e.substring(0,e.indexOf("/rest/")+6)+"info",{query:{f:"json"}})];case 1:return(r=t.sent().data)&&r.owningSystemUrl?(e=r.owningSystemUrl,[4,o(e+("/"===e[e.length-1]?"":"/")+"sharing/rest/portals/self",{query:{f:"json"}})]):[2,{supportedTravelModes:[],defaultTravelMode:null}];case 2:return s=t.sent().data,(n=i.getDeepValue("helperServices.routingUtilities.url",s))?(p=a.urlToObject(e),u=/\/solveClosestFacility$/.test(p.path)?"Route":/\/solveClosestFacility$/.test(p.path)?"ClosestFacility":"ServiceAreas",[4,o(n+("/"===n[n.length-1]?"":"/")+"GetTravelModes/execute",{query:{f:"json",serviceName:u}})]):[2,{supportedTravelModes:[],defaultTravelMode:null}];case 3:if(l=t.sent(),c=[],d=null,l&&l.data&&l.data.results&&l.data.results.length)for(f=l.data.results,y=0,v=f;y<v.length;y++)if("supportedTravelModes"===(_=v[y]).paramName){if(_.value&&_.value.features)for(m=0,h=_.value.features;m<h.length;m++)(g=h[m].attributes)&&(b=JSON.parse(g.TravelMode),c.push(b))}else"defaultTravelMode"===_.paramName&&(d=_.value);return[2,{supportedTravelModes:c,defaultTravelMode:d}]}}))}))}(e)];case 2:return p=c.sent(),u=p.defaultTravelMode,l=p.supportedTravelModes,r.defaultTravelMode=u,r.supportedTravelModes=l,[2,r]}}))}))},r.prototype._isInputGeometryZAware=function(e,r){for(var t=0;t<r.length;t++){var o=e[r[t]];if(o&&o.length)for(var s=0,i=o;s<i.length;s++){var a=i[s];if(n.isSome(a)&&a.hasZ)return!0}}return!1},r.prototype._dropZValuesOffInputGeometry=function(e,r){for(var t=0;t<r.length;t++){var o=e[r[t]];if(o&&o.length)for(var s=0,n=o;s<n.length;s++)n[s].z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")},t.__decorate([p.subclass("esri.tasks.mixins.NAServiceDescription")],r)}(e)};var l=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(r,e),t.__decorate([p.subclass("esri.tasks.mixins.NAServiceDescription")],r)}(r.NAServiceDescriptionMixin(u));r.NAServiceDescription=l}.apply(null,o))||(e.exports=s)},1508:function(e,r,t){var o,s;o=[t.dj.c(e.i),r,t(0),t(22),t(1),t(1454)],void 0===(s=function(e,r,t,o,s,n){var i=new o.default({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});return function(e){function r(r){var t=e.call(this,r)||this;return t.type=null,t}return t.__extends(r,e),t.__decorate([s.property({type:String,json:{read:i.read,write:i.write}})],r.prototype,"type",void 0),t.__decorate([s.subclass("esri.tasks.support.NAMessage")],r)}(n)}.apply(null,o))||(e.exports=s)},1620:function(e,r,t){var o,s;o=[t.dj.c(e.i),r,t(0),t(28),t(91),t(2),t(1),t(305)],void 0===(s=function(e,r,t,o,s,n,i,a){return function(e){function r(r){var t=e.call(this,r)||this;return t.extent=null,t.features=null,t.geometryType="polyline",t.routeId=null,t.routeName=null,t.totalDriveTime=null,t.totalLength=null,t.totalTime=null,t}return t.__extends(r,e),r.prototype.readFeatures=function(e,r){var t=this;(e||[]).forEach((function(e){t._decompressFeatureGeometry(e,r.summary.envelope.spatialReference)}));var i=o.SpatialReference.fromJSON(r.spatialReference);return e.map((function(e){var r=s.fromJSON(e),t=e.geometry&&e.geometry.spatialReference;return r.geometry&&!t&&(n.unwrap(r.geometry).spatialReference=i),r.strings=e.strings,r.events=(e.events||[]).map((function(r){var t=new s({geometry:new o.Point({x:r.point.x,y:r.point.y,z:r.point.z,hasZ:void 0!==r.point.z,spatialReference:e.geometry&&e.geometry.spatialReference}),attributes:{ETA:r.ETA,arriveTimeUTC:r.arriveTimeUTC}});return t.strings=r.strings,t})),r}))},Object.defineProperty(r.prototype,"mergedGeometry",{get:function(){if(!this.features)return null;var e=this.features.map((function(e){var r=e.geometry;return n.unwrap(r)})),r=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,r)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"strings",{get:function(){return this.features.map((function(e){return e.strings}))},enumerable:!0,configurable:!0}),r.prototype._decompressFeatureGeometry=function(e,r){e.geometry=this._decompressGeometry(e.compressedGeometry,r)},r.prototype._decompressGeometry=function(e,r){var t,o,s,n,i,a,p,u,l=0,c=0,d=0,f=0,y=[],v=0,_=0,m=0;if((i=e.match(/((\+|\-)[^\+\-\|]+|\|)/g))||(i=[]),0===parseInt(i[v],32)){v=2;var h=parseInt(i[v],32);v++,a=parseInt(i[v],32),v++,1&h&&(_=i.indexOf("|")+1,p=parseInt(i[_],32),_++),2&h&&(m=i.indexOf("|",_)+1,u=parseInt(i[m],32),m++)}else a=parseInt(i[v],32),v++;for(;v<i.length&&"|"!==i[v];){t=parseInt(i[v],32)+l,v++,l=t,o=parseInt(i[v],32)+c,v++,c=o;var g=[t/a,o/a];_&&(n=parseInt(i[_],32)+d,_++,d=n,g.push(n/p)),m&&(s=parseInt(i[m],32)+f,m++,f=s,g.push(s/u)),y.push(g)}return{paths:[y],hasZ:_>0,hasM:m>0,spatialReference:r}},r.prototype._mergePolylinesToSinglePath=function(e,r){var t=[];(e||[]).forEach((function(e){e.paths.forEach((function(e){t=t.concat(e)}))}));var s=[],n=[0,0];return t.forEach((function(e){e[0]===n[0]&&e[1]===n[1]||(s.push(e),n=e)})),new o.Polyline({paths:[s]},r)},t.__decorate([i.property({type:o.Extent,json:{read:{source:"summary.envelope"}}})],r.prototype,"extent",void 0),t.__decorate([i.property()],r.prototype,"features",void 0),t.__decorate([i.reader("features")],r.prototype,"readFeatures",null),t.__decorate([i.property()],r.prototype,"geometryType",void 0),t.__decorate([i.property({readOnly:!0,dependsOn:["features","extent.spatialReference"]})],r.prototype,"mergedGeometry",null),t.__decorate([i.property()],r.prototype,"routeId",void 0),t.__decorate([i.property()],r.prototype,"routeName",void 0),t.__decorate([i.property({value:null,readOnly:!0,dependsOn:["features"]})],r.prototype,"strings",null),t.__decorate([i.property({json:{read:{source:"summary.totalDriveTime"}}})],r.prototype,"totalDriveTime",void 0),t.__decorate([i.property({json:{read:{source:"summary.totalLength"}}})],r.prototype,"totalLength",void 0),t.__decorate([i.property({json:{read:{source:"summary.totalTime"}}})],r.prototype,"totalTime",void 0),t.__decorate([i.subclass("esri.tasks.support.DirectionsFeatureSet")],r)}(a)}.apply(null,o))||(e.exports=s)},1832:function(e,r,t){var o,s;o=[t.dj.c(e.i),r,t(0),t(91),t(7),t(1),t(703),t(305),t(1508),t(1833)],void 0===(s=function(e,r,t,o,s,n,i,a,p,u){function l(e){return e&&a.fromJSON(e).features.map((function(e){return e}))}return function(e){function r(r){var t=e.call(this,r)||this;return t.barriers=null,t.messages=null,t.pointBarriers=null,t.polylineBarriers=null,t.polygonBarriers=null,t.routeResults=null,t}return t.__extends(r,e),r.prototype.readPointBarriers=function(e,r){return l(r.barriers||r.pointBarriers)},r.prototype.readPolylineBarriers=function(e){return l(e)},r.prototype.readPolygonBarriers=function(e){return l(e)},t.__decorate([n.property({aliasOf:"pointBarriers"})],r.prototype,"barriers",void 0),t.__decorate([n.property({type:[p]})],r.prototype,"messages",void 0),t.__decorate([n.property({type:[o]})],r.prototype,"pointBarriers",void 0),t.__decorate([i.reader("pointBarriers",["barriers","pointBarriers"])],r.prototype,"readPointBarriers",null),t.__decorate([n.property({type:[o]})],r.prototype,"polylineBarriers",void 0),t.__decorate([i.reader("polylineBarriers")],r.prototype,"readPolylineBarriers",null),t.__decorate([n.property({type:[o]})],r.prototype,"polygonBarriers",void 0),t.__decorate([i.reader("polygonBarriers")],r.prototype,"readPolygonBarriers",null),t.__decorate([n.property({type:[u]})],r.prototype,"routeResults",void 0),t.__decorate([n.subclass("esri.tasks.support.RouteResultsContainer")],r)}(s.JSONSupport)}.apply(null,o))||(e.exports=s)},1833:function(e,r,t){var o,s;o=[t.dj.c(e.i),r,t(0),t(91),t(7),t(1),t(1620)],void 0===(s=function(e,r,t,o,s,n,i){return function(e){function r(r){var t=e.call(this,r)||this;return t.directions=null,t.route=null,t.routeName=null,t.stops=null,t}return t.__extends(r,e),t.__decorate([n.property({type:i,json:{write:!0}})],r.prototype,"directions",void 0),t.__decorate([n.property({type:o,json:{write:!0}})],r.prototype,"route",void 0),t.__decorate([n.property({type:String,json:{write:!0}})],r.prototype,"routeName",void 0),t.__decorate([n.property({type:[o],json:{write:!0}})],r.prototype,"stops",void 0),t.__decorate([n.subclass("esri.tasks.support.RouteResult")],r)}(s.JSONSupport)}.apply(null,o))||(e.exports=s)}}]);