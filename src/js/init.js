if (typeof window.console==='undefined') window.console = {'ver':'Fri Feb 07 2014 16:44:36 GMT+0100 (CET)','debug':function(){},'error':function(){},'info':function(){},'log':function(){},'warn':function(){},'dir':function(){},'dirxml':function(){},'table':function(){},'trace':function(){},'assert':function(){},'count':function(){},'markTimeline':function(){},'profile':function(){},'profileEnd':function(){},'time':function(){},'timeEnd':function(){},'timeStamp':function(){},'timeline':function(){},'timelineEnd':function(){},'group':function(){},'groupCollapsed':function(){},'groupEnd':function(){},'clear':function(){}};

Number.isNaN = Number.isNaN || function (value) { return typeof value === "number" && isNaN(value); };

// SVG support detection - uses jQuery Browser Plugin v0.0.5
!function(a,b){"use strict";var c,d;if(a.uaMatch=function(a){a=a.toLowerCase();var b=/(opr)[\/]([\w.]+)/.exec(a)||/(chrome)[ \/]([\w.]+)/.exec(a)||/(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[],c=/(ipad)/.exec(a)||/(iphone)/.exec(a)||/(android)/.exec(a)||/(windows phone)/.exec(a)||/(win)/.exec(a)||/(mac)/.exec(a)||/(linux)/.exec(a)||[];return{browser:b[3]||b[1]||"",version:b[2]||"0",platform:c[0]||""}},c=a.uaMatch(b.navigator.userAgent),d={},c.browser&&(d[c.browser]=!0,d.version=c.version,d.versionNumber=parseInt(c.version)),c.platform&&(d[c.platform]=!0),(d.chrome||d.opr||d.safari)&&(d.webkit=!0),d.rv){var e="msie";c.browser=e,d[e]=!0}if(d.opr){var f="opera";c.browser=f,d[f]=!0}if(d.safari&&d.android){var g="android";c.browser=g,d[g]=!0}d.name=c.browser,d.platform=c.platform,a.browser=d}(jQuery,window);

if ($.browser.msie && !document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) $("html").removeClass("svg-bg");

String.prototype.capitalizeFirstLetter = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
};

var workray = {};
