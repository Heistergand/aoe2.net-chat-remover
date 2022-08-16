// ==UserScript==
// @name         AoE2.net sidebar remover
// @namespace    https://github.com/Heistergand/aoe2.net-chat-remover
// @version      0.1
// @downloadURL  https://github.com/Heistergand/aoe2.net-chat-remover/raw/main/aoe2net-chatremover.user.js
// @updateURL    https://github.com/Heistergand/aoe2.net-chat-remover/raw/main/aoe2net-chatremover.meta.js
// @supportURL   https://github.com/Heistergand/aoe2.net-chat-remover/issues
// @description  Remove that toxic chat
// @author       Heistergand
// @license      Unlicense
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
