(function(){var e={"esri/layers/graphics/editingSupport":1771},t=this||window,a=t.webpackJsonp=t.webpackJsonp||[];a.registerAbsMids?a.registerAbsMids(e):(a.absMidsWaiting=a.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{1771:function(e,t,a){var r,i;r=[a.dj.c(e.i),t,a(0),a(91),a(23),a(11),a(8),a(4),a(26),a(685)],void 0===(i=function(e,t,a,r,i,n,s,d,l,u){function o(e,t,r){return a.__awaiter(this,void 0,void 0,(function(){var i,s;return a.__generator(this,(function(a){switch(a.label){case 0:return[4,e.load()];case 1:if(a.sent(),!function(e){return e&&null!=e.applyEdits}(i=e.source))return[2,d.reject(new n(e.type+"-layer:no-editing-support","Layer source does not support applyEdits capability",{layer:e}))];if(!e.editingEnabled)throw new n(e.type+"-layer:editing-disabled","Editing is disabled for layer",{layer:e});return[4,p(e,t,r)];case 2:return(s=a.sent()).addFeatures.length||s.updateFeatures.length||s.deleteFeatures.length||s.addAttachments.length||s.updateAttachments.length||s.deleteAttachments.length?[2,i.applyEdits(s,r)]:[2,{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}]}}))}))}function p(e,t,r){return a.__awaiter(this,void 0,void 0,(function(){var s,d,l,u;return a.__generator(this,(function(o){if(s=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),d=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),!t||!s&&!d)throw new n(e.type+"-layer:missing-parameters","'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!e.capabilities.data.isVersioned&&r&&r.gdbVersion)throw new n(e.type+"-layer:invalid-parameter","'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!e.capabilities.editing.supportsRollbackOnFailure&&r&&r.rollbackOnFailureEnabled)throw new n(e.type+"-layer:invalid-parameter","This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!e.capabilities.editing.supportsGlobalId&&r&&r.globalIdUsed)throw new n(e.type+"-layer:invalid-parameter","This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!e.capabilities.editing.supportsGlobalId&&d)throw new n(e.type+"-layer:invalid-parameter","'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if((!r||!r.globalIdUsed)&&d)throw new n(e.type+"-layer:invalid-parameter","When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");return(l=a.__assign({},t)).addFeatures=t&&i.isCollection(t.addFeatures)?t.addFeatures.toArray():l.addFeatures||[],l.updateFeatures=t&&i.isCollection(t.updateFeatures)?t.updateFeatures.toArray():l.updateFeatures||[],l.deleteFeatures=t&&i.isCollection(t.deleteFeatures)?t.deleteFeatures.toArray():l.deleteFeatures||[],l.addAttachments=l.addAttachments||[],l.updateAttachments=l.updateAttachments||[],l.deleteAttachments=l.deleteAttachments||[],l.addFeatures=l.addFeatures.map(b),l.updateFeatures=l.updateFeatures.map(b),u=r&&r.globalIdUsed,l.addFeatures.forEach((function(t){return c(t,e,u)})),l.updateFeatures.forEach((function(t){return c(t,e,u)})),l.deleteFeatures.forEach((function(t){return c(t,e,u)})),l.addAttachments.forEach((function(t){return h(t,e)})),l.updateAttachments.forEach((function(t){return h(t,e)})),[2,m(l)]}))}))}function c(e,t,a){if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new n(t.type+"-layer:invalid-parameter","Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new n(t.type+"-layer:invalid-parameter","'globalId' of the feature should be passed when 'globalIdUsed' is true")}}function h(e,t){var a=e.feature,r=e.attachment;if(!a||"attributes"in a&&!a.attributes[t.globalIdField])throw new n(t.type+"-layer:invalid-parameter","Attachment should have reference to a feature with 'globalId'");if(!("attributes"in a)&&!a.globalId)throw new n(t.type+"-layer:invalid-parameter","Attachment should have reference to 'globalId' of the parent feature");if(!r.globalId)throw new n(t.type+"-layer:invalid-parameter","Attachment should have 'globalId'");if(!r.data&&!r.uploadId)throw new n(t.type+"-layer:invalid-parameter","Attachment should have 'data' or 'uploadId'");if(!(r.data instanceof File&&r.data.name||r.name))throw new n(t.type+"-layer:invalid-parameter","'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities.editing.supportsUploadWithItemId&&r.uploadId)throw new n(t.type+"-layer:invalid-parameter","This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof r.data){var i=l.dataComponents(r.data);if(i&&!i.isBase64)throw new n(t.type+"-layer:invalid-parameter","Attachment 'data' should be a Blob, File or Base64 encoded string")}}function m(e){return a.__awaiter(this,void 0,void 0,(function(){var t,r,i,n,s,d;return a.__generator(this,(function(a){switch(a.label){case 0:return t=e.addFeatures,r=e.updateFeatures,i=t.concat(r).map((function(e){return e.geometry})),[4,u.normalizeCentralMeridian(i)];case 1:return n=a.sent(),s=t.length,d=r.length,n.slice(0,s).forEach((function(t,a){e.addFeatures[a].geometry=t})),n.slice(s,s+d).forEach((function(t,a){e.updateFeatures[a].geometry=t})),[2,e]}}))}))}function b(e){var t=new r;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}Object.defineProperty(t,"__esModule",{value:!0}),t.isEditableLayer=function(e){return!0===e.get("capabilities.operations.supportsEditing")},t.applyEdits=function(e,t,r){return a.__awaiter(this,void 0,void 0,(function(){var i,n,l,u,p,c,h;return a.__generator(this,(function(a){switch(a.label){case 0:l={edits:t,result:d.create((function(e,t){i=e,n=t}))},e.emit("apply-edits",l),a.label=1;case 1:return a.trys.push([1,3,,4]),[4,o(e,t,r)];case 2:return u=a.sent(),((c={addedFeatures:(p=function(e){return e.filter((function(e){return!e.error})).map(s.clone)})(u.addFeatureResults),updatedFeatures:p(u.updateFeatureResults),deletedFeatures:p(u.deleteFeatureResults),addedAttachments:p(u.addAttachmentResults),updatedAttachments:p(u.updateAttachmentResults),deletedAttachments:p(u.deleteAttachmentResults)}).addedFeatures.length||c.updatedFeatures.length||c.deletedFeatures.length||c.addedAttachments.length||c.updatedAttachments.length||c.deletedAttachments.length)&&e.emit("edits",c),i(c),[2,u];case 3:throw h=a.sent(),n(h),h;case 4:return[2]}}))}))}}.apply(null,r))||(e.exports=i)}}]);