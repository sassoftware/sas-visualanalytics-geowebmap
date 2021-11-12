(this.webpackJsonpgeowebmap=this.webpackJsonpgeowebmap||[]).push([[256],{1380:function(e,t,i){"use strict";i.r(t),i.d(t,"validate",(function(){return r}));var n=i(1183),o={title:"Webscene",type:"object",description:"The web scene data lists the basemap, operational layers, and presentation slides to be used in the web scene. It also contains information about pop-up windows and layer styling overrides to be used in the web scene. A version property allows you to supply the version of the web scene JSON format being used.",properties:{applicationProperties:{type:"object",$ref:"#/definitions/applicationProperties_schema.json"},authoringApp:{type:"string",description:"String value indicating the application which authored the webmap"},authoringAppVersion:{type:"string",description:"String value indicating the authoring App's version number."},baseMap:{type:"object",description:"Basemaps give the web scene a geographic context.",$ref:"#/definitions/baseMap_schema.json"},clippingArea:{type:"object",$ref:"#/definitions/clippingArea_schema.json"},ground:{type:"object",$ref:"#/definitions/ground_schema.json"},heightModelInfo:{type:"object",$ref:"#/definitions/heightModelInfo_schema.json"},initialState:{type:"object",$ref:"#/definitions/initialState_schema.json"},mapFloorInfo:{type:"object",$ref:"#/definitions/mapFloorInfo_schema.json"},mapRangeInfo:{type:"object",description:"Map Range Information",$ref:"#/definitions/mapRangeInfo_schema.json"},operationalLayers:{type:"array",description:"Operational layers contain business data which are used to make thematic scenes.",items:{type:"object",$ref:"#/definitions/operationalLayers_schema.json"},uniqueItems:!0},presentation:{type:"object",$ref:"#/definitions/presentation_schema.json"},spatialReference:{type:"object",description:"An object used to specify the spatial reference of the given geometry.",$ref:"#/definitions/spatialReference_schema.json"},tables:{type:"array",description:"An array of table objects.",items:{type:"object",$ref:"#/definitions/table_schema.json"}},transportationNetworks:{type:"array",description:"Used to specify the transportation networks of the scene.",items:{type:"object",$ref:"#/definitions/transportationNetwork_schema.json"}},version:{type:"string",$ref:"#/definitions/version_schema.json"},viewingMode:{type:"string",enum:["global","local"]},widgets:{type:"object",description:"the widgets object contains widgets that should be exposed to the user.",$ref:"#/definitions/widgets_schema.json"}},required:["ground","operationalLayers","spatialReference","version","viewingMode"],additionalProperties:!1,$schema:"http://json-schema.org/draft-07/schema",definitions:i(1063).a},s=i(1184),a=new n.a({allErrors:!0,extendRefs:!0});function r(e,t){return function(e){var t=c(e);if(!a.getSchema(t)){var i=function(e){var t=o.definitions[c(e)];if(!t)throw new Error("invalid schema name to validate against '".concat(e,"'"));var i={};for(var n in t)i[n]=t[n];return i.definitions=o.definitions,i}(e);a.addSchema(i,t)}}(t),a.validate(c(t),e)?[]:Object(s.a)(a.errors)}function c(e){return e?"".concat(e,"_schema.json"):"webScene_schema.json"}a.addSchema(o,c())}}]);
//# sourceMappingURL=256.1c1a4415.chunk.js.map