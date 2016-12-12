// ==UserScript==
// @name        Unforce input on GitHub search
// @author      bumaociyuan
// @description unfocus
// @namespace   unfocus
// @include     http*://github.com/search*
// @version     0.1
// @grant       none
// ==/UserScript==

var unfocusInputFunction = function() {
    var form = 	document.getElementsByClassName('form-control');
    document.activeElement.blur();
};
window.onload = unfocusInputFunction;
window.onbeforeunload = unfocusInputFunction;
