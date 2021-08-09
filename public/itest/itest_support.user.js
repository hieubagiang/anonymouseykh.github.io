// ==UserScript==
// @name        itest support
// @description Fetch correct question and answer
// @downloadURL  https://anonymouseykh.github.io/public/itest/itest_support.user.js
// @updateURL  https://anonymouseykh.github.io/public/itest/itest_support.meta.js
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_openInTab
// @grant       GM_registerMenuCommand
// @include     http://itest.actvn.edu.vn/*
// @include     http://anonymouseykh.github.io/*
// @version     1.0.6
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @run-at      document-end
// ==/UserScript==
var defaultData = [];
var trustData=[];
var host = "https://script.google.com/macros/s/AKfycbysoTsDstaYz_sNDGaqDaUbD9WlPvLmovGLP6epSKNzOVDgx5xEeiiqdGVY9asFkVQ5jg/exec";
var delayInMilliseconds = 3000; //1 second
var validUser = false;
var titleScroll;
var isShowAnswer = true;
var btn = document.querySelector("#partButtons");
var radios = document.querySelectorAll('input[type=radio]');

init();

function init() {
    addStyle();
	mainfunction();
}

function mainfunction() {
    document.addEventListener('keypress', logKey);

    Array.prototype.forEach.call(radios, function(radio) {
        radio.addEventListener('change', changeHandler);
    });

    document.addEventListener('mouseup', (e) => {
        var selection = window.getSelection().toString();
        if (selection !== '') {
            selection = selection.toLowerCase().replace(/\s/g, "");
            var { element, index } = findElementByText(selection);
            console.log("test = "+index);
            var answer = '';
            if (index % 5 === 0) {
                answer = getAnswer(selection);
            } else {
                answer = getQuestion(selection);
            }
            if(isShowAnswer) {
                showAnswer(element, answer);
            }
        }
    });
	console.log("Itest");
}

function getAnswer(keyword) {
    var answer = "";
    answer = getAnswerDataFromList(trustData,keyword);
    if(answer===""){
        answer = getAnswerDataFromList(defaultData,keyword);
    }
    return answer === "" ? "#not_found" : answer;
}

function getQuestion(keyword) {
    var question = '';
    question= getQuestionDataFromList(trustData,keyword);
    if(question===""){
        question = getQuestionDataFromList(defaultData,keyword);
    }
    return question === "" ? "#not_found" : question;
}
function getAnswerDataFromList(arrayList,keyword){
    var answer = "";
    for (var i = 0; i < arrayList.length; i++) {
        if (arrayList[i]["question"].toLowerCase().replace(/\s/g, "").indexOf(keyword.toLowerCase().replaceAll(/\s/g, "")) > -1) {
            answer += " || " + arrayList[i]["answer"];
        }
    }
    return answer;
}
function getQuestionDataFromList(arrayList,keyword){
    var question = "";
    for (var i = 0; i < arrayList.length; i++) {
        if (arrayList[i]["answer"]) {
            if (arrayList[i]["answer"].toLowerCase().replace(/\s/g, "").indexOf(keyword.toLowerCase().replaceAll(/\s/g, "")) > -1) {
                question += " || " + arrayList[i]["question"];
            }
        }

    }
    return question;
}
function showAnswer(selectedElement, text) {
    selectedElement?.setAttribute("id", "hresult");
    selectedElement?.setAttribute("data-title", text);
    var tmp = "iTest - Giải pháp toàn diện cho tổ chức thi";
    var timeOut = delayInMilliseconds;
    document.title = text;
    if (text.length > 20) {
        document.title = text + "   ";
        timeOut = text.length / 10 + 1;
        scrolltitle(text);
    }
    setTimeout(function() {
        document.title = tmp;
        if (text.length > 20) {
            stopScrollTitle();
        }
    }, timeOut);


}

function scrolltitle(title) {
    var position = 0;
    document.title = title.substring(position, title.length) + title.substring(0, position);
    position++;
    if (position > title.length) position = 0;
    titleScroll = window.setTimeout(scrolltitle, 170);
}

function stopScrollTitle() {
    window.clearTimeout(titleScroll);
}

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

function findElementByText(keyword) {
    var data = document.querySelectorAll("tbody")[2];
    var aTags = data.getElementsByTagName("tr");
    var searchText = keyword;
    var found;
    var index = -1;

    for (var i = 0; i < aTags.length; i++) {
        if (aTags[i].textContent.toLowerCase().replace(/\s/g, "").indexOf(searchText) > -1) {
            found = aTags[i].querySelector("p");
            index = i;
            break;
        }
    }
    return { element: found, index };
}

function addStyle() {
    var styles = "p#hresult:hover:after {  color: #DCDCDC	;  content: attr(data-title);  left: 50px;}";
    var css = document.createElement('style');
    css.type = 'text/css';

    if (css.styleSheet)
        css.styleSheet.cssText = styles;
    else
        css.appendChild(document.createTextNode(styles));
    document.getElementsByTagName("meta")[0].appendChild(css);
}

function post(data) {
    var json_upload = "table=web&data=" + data;
    var xmlhttp = new XMLHttpRequest(); // new HttpRequest instance
    xmlhttp.open("POST", host);
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.send(json_upload);
}
function logKey(e) {
    if(e.code === "KeyZ"){
        clearFrontEnd();
        isShowAnswer=!isShowAnswer;
    }
}
function clearFrontEnd()
{
    var ansList = document.querySelectorAll('[data-title]');
    for(var i =0; i<ansList.length; i++){
        ansList[i].setAttribute("data-title","");
    }
}

function changeHandler(event) {
    console.log(Array.prototype.indexOf.call(this.parentNode.children, this));
}
