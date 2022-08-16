// ==UserScript==
// @name         AoE2.net sidebar remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @downloadURL  https://github.com/Heistergand/fanfields2/raw/master/aoe2net-chatremover.user.js
// @updateURL    https://github.com/Heistergand/fanfields2/raw/master/aoe2net-chatremover.meta.js
// @description  Remove that toxic chat
// @author       You
// @match        https://aoe2.net/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=aoe2.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const sidebar = document.getElementById("sidebar");
    sidebar.style.visibility = "hidden";
    sidebar.classList.replace('col-md-2', 'col-md-auto');

    const content = document.getElementById("content");
    content.classList.replace('col-md-10', 'col-md-12');


})();
