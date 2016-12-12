// ==UserScript==
// @name        Add the "Trending" button to GitHub
// @author      bumaociyuan
// @description Adds the now missing "Trending" and "Stars" button to github left item bar
// @namespace   add-trending-to-github
// @include     http*://github.com/*
// @version     0.2
// @grant       none
// ==/UserScript==

var items = 	document.getElementsByClassName('header-nav float-left');
var item = items.item(0);

item.innerHTML += '<li class="header-nav-item"><a class="js-selected-navigation-item header-nav-link" href="/trending">Trending</a></li>';
item.innerHTML += '<li class="header-nav-item"><a class="js-selected-navigation-item header-nav-link" href="/stars">Stars</a></li>';
item.innerHTML += '<li class="header-nav-item"><a class="js-selected-navigation-item header-nav-link" href="/bumaociyuan">Profile</a></li>';
