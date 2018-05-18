/*
Copyright 2018 SAS Institute Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * Encapsulates utility features required by more than one class.
 */
define([
    "dojo/_base/declare"
], function(declare){

    var _objectIDFieldName = "ObjectId";

    return declare(null, {

        getScatterValue: function () { return "SCATTER" },
        getBubbleValue: function () { return "BUBBLE" },
        getChoroplethValue: function () { return "CHOROPLETH" },

        proxy: function (f, thisArg) {
            return function (e) {
                f.call(thisArg, e);
            }
        },

        getObjectIdFieldName: function () {
            return _objectIDFieldName;
        },

        isValidCoordinate: function (n) {
            return !isNaN(n) && n !== null;
        },

        findMinMax: function (items, field) {
            return items.reduce(function (acc, val) {
                val = (field !== undefined) ? val[field] : val;
                acc[0] = (acc[0] === undefined || val < acc[0]) ? val : acc[0]
                acc[1] = (acc[1] === undefined || val > acc[1]) ? val : acc[1]
                return acc;
            }, []);
        },

        getNameWithLabel: function (label, columns) {
            var match = columns.find(function(column) { return column && column.label === label; });
            return (match) ? match.name : null;
        },

        getIndexWithLabel: function (label, columns) {
            return columns.findIndex(function(column) { return column && column.label === label; });
        },

        getNameWithUsage: function (usage, columns) {
            var match = columns.find(function(column) { return column && column.usage === usage; });
            return (match) ? match.name : null;
        }, 

        logError: function (error) {
            if (console && console.error)
                console.error(error);
        },

        publishMessage: function (msg) {
            var target = window.parent || window;
            var targetOrigin = this._selectionPublicationTargetOrigin();
            if (target)
                target.postMessage(msg,targetOrigin);
        }, 

        /**
         * Defines the allowed target for the publication of selection events
         * on the map.  For maximum security, this should return the most 
         * restrictive target possible.  Will depend on where this code is 
         * deployed in relation to VA (e.g., the same domain or a different 
         * domain).  
         */
        _selectionPublicationTargetOrigin: function () {
            return "*"; // Lock down as needed.  E.g., (window.location !== window.parent.location) ? document.referrer : document.location.href;
        }

    });

});
