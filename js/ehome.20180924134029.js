(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;if(thresholdPassed()){if($(window).width()>=960){$('.js-28').attr('src', (dpi>1) ? 'images/df76cc95c7914550a4cf22604dce96dc-1915.png' : 'images/df76cc95c7914550a4cf22604dce96dc-958.png');}else{$('.js-28').attr('src', (dpi>1) ? 'images/df76cc95c7914550a4cf22604dce96dc-638.png' : 'images/df76cc95c7914550a4cf22604dce96dc-319.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
initMenu($('#menu-6')[0]);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-27')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-28')[0], "2.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-29')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});