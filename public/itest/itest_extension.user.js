// ==UserScript==
// @name        itest support extension
// @description Fetch correct question and answer
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_openInTab
// @grant       GM_registerMenuCommand
// @include     http://itest.actvn.edu.vn/*
// @include     http://anonymouseykh.github.io/*
// @version     1.0.0
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @run-at      document-end
// ==/UserScript==
var host = "https://anonymouseykh.github.io/public/itest"
function getVersion() {
    return new Promise((resolve, reject) => {
        $.ajax({
            method: "GET",
            url: host + "/version",
        }).then((data) => {
            resolve(data);
        }).fail((error) => {
            reject(error);
        });
    });
}
async  function addScript(){
    var version  = await getVersion();
    var jq = document.createElement('script');
    jq.src = "https://anonymouseykh.github.io/public/itest/itest_support_"+version+".js";
    document.getElementsByTagName('head')[0].appendChild(jq);
}

addScript();