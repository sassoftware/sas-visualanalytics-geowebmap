(this.webpackJsonpgeowebmap=this.webpackJsonpgeowebmap||[]).push([[199],{857:function(e,a,t){"use strict";t.r(a),t.d(a,"getDataValues",(function(){return m})),t.d(a,"summaryStatistics",(function(){return p}));var n=t(8),r=t.n(n),i=t(15),u=t(24),o=t(52),s=t(140),l=t(157),c=null;function p(e){return f.apply(this,arguments)}function f(){return f=Object(i.a)(r.a.mark((function e(a){var t,n,i,u,o,l,c,p,f,b;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.attribute,n=a.featuresJSON,i=t.normalizationType,u=t.normalizationField,o=t.minValue,l=t.maxValue,c=t.fieldType,e.next=9,m({field:t.field,valueExpression:t.valueExpression,normalizationType:i,normalizationField:u,normalizationTotal:t.normalizationTotal,viewInfoParams:t.viewInfoParams},n);case 9:return p=e.sent,f=Object(s.f)({normalizationType:i,normalizationField:u,minValue:o,maxValue:l}),b="string"===c?Object(s.b)({values:p,supportsNullCount:f}):Object(s.a)({values:p,minValue:o,maxValue:l,useSampleStdDev:!i,supportsNullCount:f}),e.abrupt("return",Object(s.h)(b,"date"===c));case 13:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function m(e,a){return b.apply(this,arguments)}function b(){return b=Object(i.a)(r.a.mark((function e(a,t){var n,i,p,f,m,b,v,d,x,w,h;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",[]);case 2:if(n=a.field,i=a.valueExpression,p=a.normalizationType,f=a.normalizationField,m=a.normalizationTotal,b=[],v=a.viewInfoParams,d=null,x=null,!i){e.next=12;break}if(c){e.next=11;break}return e.next=8,Object(l.e)();case 8:w=e.sent,h=w.arcadeUtils,c=h;case 11:d=c.createFunction(i),x=v&&c.getViewInfo({viewingMode:v.viewingMode,scale:v.scale,spatialReference:new o.a(v.spatialReference)});case 12:return e.abrupt("return",(t.forEach((function(e){var a,t=e.attributes;if(i){var r=c.createExecContext(e,x);a=c.executeFunction(d,r)}else t&&(a=t[n]);if(p&&Object(u.k)(a)){var o=t&&parseFloat(t[f]);a=Object(s.c)(a,p,o,m)}b.push(a)})),b));case 13:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}}}]);
//# sourceMappingURL=199.108069e7.chunk.js.map