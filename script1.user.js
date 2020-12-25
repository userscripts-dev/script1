// ==UserScript==
// @name         audiboi.com download link
// @namespace    userscripts-dev/script1
// @version      1.0
// @description  audiboi.com download link
// @author       github.com/userscripts-dev
// @match        https://audiboi.com/*
// @downloadURL  https://raw.githubusercontent.com/userscripts-dev/script1/main/script1.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelectorAll('.the-media audio source').forEach(function (source) {
      const a = document.createElement('a')
      a.href = source.src
      a.appendChild(document.createTextNode(source.src))
      a.setAttribute('target', '_blank')
      const audioPlayerInner = document.querySelector('.audioplayer-inner')
      audioPlayerInner.parentNode.insertBefore(a, audioPlayerInner)
    })
})();
