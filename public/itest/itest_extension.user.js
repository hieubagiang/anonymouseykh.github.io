// ==UserScript==
// @name        itest support extension
// @description Fetch correct question and answer
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_openInTab
// @grant       GM_registerMenuCommand
// @include     http://itest.actvn.edu.vn/*
// @include     http://anonymouseykh.github.io/*
// @include     http://118.70.194.8:8080/*
// @version     1.0.0
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @run-at      document-end
// ==/UserScript==
var versionLink = "https://anonymouseykh.github.io/public/itest/version.json"
function getHTML(url, callBack) {
    return new Promise(function() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                return callBack(xhttp.responseText);
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();

    });
}
function addScript(version){
    var jq = document.createElement('script');
    jq.src = "https://anonymouseykh.github.io/public/itest/release/"+version+".js";
    document.getElementsByTagName('head')[0].appendChild(jq);

}

getHTML("https://anonymouseykh.github.io/public/itest/version.json",function(value){
    addScript(value)
})