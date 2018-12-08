// ==UserScript==
// @name         Wiki
// @namespace    https://en.wikipedia.org/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://en.wikipedia.org/wiki/*
// @grant        none
// @require http://code.jquery.com/jquery-1.12.4.min.js
// ==/UserScript==

var $ = window.jQuery
$.noConflict();

var content = $('div#content').css({
    'width': '635px',
    'padding-top' : '25px',
    'padding-bottom' : '15px',
    'margin': '0',
    'position': 'absolute',
    'left': '50%',
    'transform': 'translate(-50%)'
}).clone()

var search = $('#p-search').clone()

// Display only the content above
$('body').empty().append(content).append(search)

$('body').css('background-color', '#f0f0f0')
