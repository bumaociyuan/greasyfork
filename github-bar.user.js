// ==UserScript==
// @name        Add the "Trending" button to GitHub
// @author      bumaociyuan
// @description Adds the now missing "Trending" and "Stars" button to github left item bar
// @namespace   add-trending-to-github
// @include     http*://github.com/*
// @version     0.3
// @grant       none
// ==/UserScript==

var item = 	document.getElementsByClassName('d-flex list-style-none')[0];
var text = '';
text += '<li> <a class="header-navlink" href="/trending" data-ga-click="Header, go to gist, text:gist">Trending</a> </li>';
text += '<li> <a class="header-navlink" href="/stars" data-ga-click="Header, go to gist, text:gist">Stars</a> </li>';
text += '<li> <a class="header-navlink" href="/bumaociyuan" data-ga-click="Header, go to gist, text:gist">Profile</a> </li>';
item.innerHTML = text;
