/*
 * isElementSupported
 * Feature test HTML element support 
 * @param {String} tag
 * @return {Boolean|Undefined}
 */

(function(win){
    'use strict';       

    var toString = {}.toString;

    win.isElementSupported = function isElementSupported(tag){
        // Return undefined if `HTMLUnknownElement` interface
        // doesn't exist
        if(!win.HTMLUnknownElement){
            return undefined;
        }
        // Create a test element for the tag
        var element = document.createElement(tag);
        // Obtain the element's internal [[Class]] property, if it doesn't 
        // match the `HTMLUnknownElement` interface than it must be supported
        return toString.call(element) !== '[object HTMLUnknownElement]';
    };
    
})(this);
