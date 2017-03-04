/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);

/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.effects.core.js, jquery.effects.blind.js, jquery.effects.bounce.js, jquery.effects.clip.js, jquery.effects.drop.js, jquery.effects.explode.js, jquery.effects.fade.js, jquery.effects.fold.js, jquery.effects.highlight.js, jquery.effects.pulsate.js, jquery.effects.scale.js, jquery.effects.shake.js, jquery.effects.slide.js, jquery.effects.transfer.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.tabs.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){function c(b,c){var e=b.nodeName.toLowerCase();if("area"===e){var f=b.parentNode,g=f.name,h;return!b.href||!g||f.nodeName.toLowerCase()!=="map"?!1:(h=a("img[usemap=#"+g+"]")[0],!!h&&d(h))}return(/input|select|textarea|button|object/.test(e)?!b.disabled:"a"==e?b.href||c:c)&&d(b)}function d(b){return!a(b).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}a.ui=a.ui||{};if(a.ui.version)return;a.extend(a.ui,{version:"1.8.23",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),a.fn.extend({propAttr:a.fn.prop||a.fn.attr,_focus:a.fn.focus,focus:function(b,c){return typeof b=="number"?this.each(function(){var d=this;setTimeout(function(){a(d).focus(),c&&c.call(d)},b)}):this._focus.apply(this,arguments)},scrollParent:function(){var b;return a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?b=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):b=this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0),/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length){var d=a(this[0]),e,f;while(d.length&&d[0]!==document){e=d.css("position");if(e==="absolute"||e==="relative"||e==="fixed"){f=parseInt(d.css("zIndex"),10);if(!isNaN(f)&&f!==0)return f}d=d.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(c,d){function h(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.curCSS(b,"padding"+this,!0))||0,d&&(c-=parseFloat(a.curCSS(b,"border"+this+"Width",!0))||0),f&&(c-=parseFloat(a.curCSS(b,"margin"+this,!0))||0)}),c}var e=d==="Width"?["Left","Right"]:["Top","Bottom"],f=d.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){return c===b?g["inner"+d].call(this):this.each(function(){a(this).css(f,h(this,c)+"px")})},a.fn["outer"+d]=function(b,c){return typeof b!="number"?g["outer"+d].call(this,b):this.each(function(){a(this).css(f,h(this,b,!0,c)+"px")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return c(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var d=a.attr(b,"tabindex"),e=isNaN(d);return(e||d>=0)&&c(b,!e)}}),a(function(){var b=document.body,c=b.appendChild(c=document.createElement("div"));c.offsetHeight,a.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),a.support.minHeight=c.offsetHeight===100,a.support.selectstart="onselectstart"in c,b.removeChild(c).style.display="none"}),a.curCSS||(a.curCSS=a.css),a.extend(a.ui,{plugin:{add:function(b,c,d){var e=a.ui[b].prototype;for(var f in d)e.plugins[f]=e.plugins[f]||[],e.plugins[f].push([c,d[f]])},call:function(a,b,c){var d=a.plugins[b];if(!d||!a.element[0].parentNode)return;for(var e=0;e<d.length;e++)a.options[d[e][0]]&&d[e][1].apply(a.element,c)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(b,c){if(a(b).css("overflow")==="hidden")return!1;var d=c&&c==="left"?"scrollLeft":"scrollTop",e=!1;return b[d]>0?!0:(b[d]=1,e=b[d]>0,b[d]=0,e)},isOverAxis:function(a,b,c){return a>b&&a<b+c},isOver:function(b,c,d,e,f,g){return a.ui.isOverAxis(b,d,f)&&a.ui.isOverAxis(c,e,g)}})})(jQuery),function(a,b){if(a.cleanData){var c=a.cleanData;a.cleanData=function(b){for(var d=0,e;(e=b[d])!=null;d++)try{a(e).triggerHandler("remove")}catch(f){}c(b)}}else{var d=a.fn.remove;a.fn.remove=function(b,c){return this.each(function(){return c||(!b||a.filter(b,[this]).length)&&a("*",this).add([this]).each(function(){try{a(this).triggerHandler("remove")}catch(b){}}),d.call(a(this),b,c)})}}a.widget=function(b,c,d){var e=b.split(".")[0],f;b=b.split(".")[1],f=e+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][f]=function(c){return!!a.data(c,b)},a[e]=a[e]||{},a[e][b]=function(a,b){arguments.length&&this._createWidget(a,b)};var g=new c;g.options=a.extend(!0,{},g.options),a[e][b].prototype=a.extend(!0,g,{namespace:e,widgetName:b,widgetEventPrefix:a[e][b].prototype.widgetEventPrefix||b,widgetBaseClass:f},d),a.widget.bridge(b,a[e][b])},a.widget.bridge=function(c,d){a.fn[c]=function(e){var f=typeof e=="string",g=Array.prototype.slice.call(arguments,1),h=this;return e=!f&&g.length?a.extend.apply(null,[!0,e].concat(g)):e,f&&e.charAt(0)==="_"?h:(f?this.each(function(){var d=a.data(this,c),f=d&&a.isFunction(d[e])?d[e].apply(d,g):d;if(f!==d&&f!==b)return h=f,!1}):this.each(function(){var b=a.data(this,c);b?b.option(e||{})._init():a.data(this,c,new d(e,this))}),h)}},a.Widget=function(a,b){arguments.length&&this._createWidget(a,b)},a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(b,c){a.data(c,this.widgetName,this),this.element=a(c),this.options=a.extend(!0,{},this.options,this._getCreateOptions(),b);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled")},widget:function(){return this.element},option:function(c,d){var e=c;if(arguments.length===0)return a.extend({},this.options);if(typeof c=="string"){if(d===b)return this.options[c];e={},e[c]=d}return this._setOptions(e),this},_setOptions:function(b){var c=this;return a.each(b,function(a,b){c._setOption(a,b)}),this},_setOption:function(a,b){return this.options[a]=b,a==="disabled"&&this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",b),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(b,c,d){var e,f,g=this.options[b];d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent;if(f)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.call(this.element[0],c,d)===!1||c.isDefaultPrevented())}}}(jQuery),function(a,b){var c=!1;a(document).mouseup(function(a){c=!1}),a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).bind("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent"))return a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(b){if(c)return;this._mouseStarted&&this._mouseUp(b),this._mouseDownEvent=b;var d=this,e=b.which==1,f=typeof this.options.cancel=="string"&&b.target.nodeName?a(b.target).closest(this.options.cancel).length:!1;if(!e||f||!this._mouseCapture(b))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=this._mouseStart(b)!==!1;if(!this._mouseStarted)return b.preventDefault(),!0}return!0===a.data(b.target,this.widgetName+".preventClickEvent")&&a.removeData(b.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),b.preventDefault(),c=!0,!0},_mouseMove:function(b){return!a.browser.msie||document.documentMode>=9||!!b.button?this._mouseStarted?(this._mouseDrag(b),b.preventDefault()):(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b)),!this._mouseStarted):this._mouseUp(b)},_mouseUp:function(b){return a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,b.target==this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(b)),!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(a){return this.mouseDelayMet},_mouseStart:function(a){},_mouseDrag:function(a){},_mouseStop:function(a){},_mouseCapture:function(a){return!0}})}(jQuery),function(a,b){a.widget("ui.draggable",a.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create:function(){this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},destroy:function(){if(!this.element.data("draggable"))return;return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy(),this},_mouseCapture:function(b){var c=this.options;return this.helper||c.disabled||a(b.target).is(".ui-resizable-handle")?!1:(this.handle=this._getHandle(b),this.handle?(c.iframeFix&&a(c.iframeFix===!0?"iframe":c.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(a(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(b){var c=this.options;return this.helper=this._createHelper(b),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),c.containment&&this._setContainment(),this._trigger("start",b)===!1?(this._clear(),!1):(this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b),!0)},_mouseDrag:function(b,c){this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute");if(!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1)return this._mouseUp({}),!1;this.position=d.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";return a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),!1},_mouseStop:function(b){var c=!1;a.ui.ddmanager&&!this.options.dropBehaviour&&(c=a.ui.ddmanager.drop(this,b)),this.dropped&&(c=this.dropped,this.dropped=!1);var d=this.element[0],e=!1;while(d&&(d=d.parentNode))d==document&&(e=!0);if(!e&&this.options.helper==="original")return!1;if(this.options.revert=="invalid"&&!c||this.options.revert=="valid"&&c||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,c)){var f=this;a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){f._trigger("stop",b)!==!1&&f._clear()})}else this._trigger("stop",b)!==!1&&this._clear();return!1},_mouseUp:function(b){return this.options.iframeFix===!0&&a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b),a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(b){var c=!this.options.handle||!a(this.options.handle,this.element).length?!0:!1;return a(this.options.handle,this.element).find("*").andSelf().each(function(){this==b.target&&(c=!0)}),c},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b])):c.helper=="clone"?this.element.clone().removeAttr("id"):this.element;return d.parents("body").length||d.appendTo(c.appendTo=="parent"?this.element[0].parentNode:c.appendTo),d[0]!=this.element[0]&&!/(fixed|absolute)/.test(d.css("position"))&&d.css("position","absolute"),d},_adjustOffsetFromHelper:function(b){typeof b=="string"&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)b={top:0,left:0};return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b=this.options;b.containment=="parent"&&(b.containment=this.helper[0].parentNode);if(b.containment=="document"||b.containment=="window")this.containment=[b.containment=="document"?0:a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,b.containment=="document"?0:a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(b.containment=="document"?0:a(window).scrollLeft())+a(b.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(b.containment=="document"?0:a(window).scrollTop())+(a(b.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(b.containment)&&b.containment.constructor!=Array){var c=a(b.containment),d=c[0];if(!d)return;var e=c.offset(),f=a(d).css("overflow")!="hidden";this.containment=[(parseInt(a(d).css("borderLeftWidth"),10)||0)+(parseInt(a(d).css("paddingLeft"),10)||0),(parseInt(a(d).css("borderTopWidth"),10)||0)+(parseInt(a(d).css("paddingTop"),10)||0),(f?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(a(d).css("borderLeftWidth"),10)||0)-(parseInt(a(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(f?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(a(d).css("borderTopWidth"),10)||0)-(parseInt(a(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=c}else b.containment.constructor==Array&&(this.containment=b.containment)},_convertPositionTo:function(b,c){c||(c=this.position);var d=b=="absolute"?1:-1,e=this.options,f=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop())*d),left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())*d)}},_generatePosition:function(b){var c=this.options,d=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(d[0].tagName),f=b.pageX,g=b.pageY;if(this.originalPosition){var h;if(this.containment){if(this.relative_container){var i=this.relative_container.offset();h=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]}else h=this.containment;b.pageX-this.offset.click.left<h[0]&&(f=h[0]+this.offset.click.left),b.pageY-this.offset.click.top<h[1]&&(g=h[1]+this.offset.click.top),b.pageX-this.offset.click.left>h[2]&&(f=h[2]+this.offset.click.left),b.pageY-this.offset.click.top>h[3]&&(g=h[3]+this.offset.click.top)}if(c.grid){var j=c.grid[1]?this.originalPageY+Math.round((g-this.originalPageY)/c.grid[1])*c.grid[1]:this.originalPageY;g=h?j-this.offset.click.top<h[1]||j-this.offset.click.top>h[3]?j-this.offset.click.top<h[1]?j+c.grid[1]:j-c.grid[1]:j:j;var k=c.grid[0]?this.originalPageX+Math.round((f-this.originalPageX)/c.grid[0])*c.grid[0]:this.originalPageX;f=h?k-this.offset.click.left<h[0]||k-this.offset.click.left>h[2]?k-this.offset.click.left<h[0]?k+c.grid[0]:k-c.grid[0]:k:k}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:d.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:d.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(b,c,d){return d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d]),b=="drag"&&(this.positionAbs=this._convertPositionTo("absolute")),a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(a){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.extend(a.ui.draggable,{version:"1.8.23"}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c){var d=a(this).data("draggable"),e=d.options,f=a.extend({},c,{item:d.element});d.sortables=[],a(e.connectToSortable).each(function(){var c=a.data(this,"sortable");c&&!c.options.disabled&&(d.sortables.push({instance:c,shouldRevert:c.options.revert}),c.refreshPositions(),c._trigger("activate",b,f))})},stop:function(b,c){var d=a(this).data("draggable"),e=a.extend({},c,{item:d.element});a.each(d.sortables,function(){this.instance.isOver?(this.instance.isOver=0,d.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(b),this.instance.options.helper=this.instance.options._helper,d.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",b,e))})},drag:function(b,c){var d=a(this).data("draggable"),e=this,f=function(b){var c=this.offset.click.top,d=this.offset.click.left,e=this.positionAbs.top,f=this.positionAbs.left,g=b.height,h=b.width,i=b.top,j=b.left;return a.ui.isOver(e+c,f+d,i,j,g,h)};a.each(d.sortables,function(f){this.instance.positionAbs=d.positionAbs,this.instance.helperProportions=d.helperProportions,this.instance.offset.click=d.offset.click,this.instance._intersectsWith(this.instance.containerCache)?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=a(e).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return c.helper[0]},b.target=this.instance.currentItem[0],this.instance._mouseCapture(b,!0),this.instance._mouseStart(b,!0,!0),this.instance.offset.click.top=d.offset.click.top,this.instance.offset.click.left=d.offset.click.left,this.instance.offset.parent.left-=d.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=d.offset.parent.top-this.instance.offset.parent.top,d._trigger("toSortable",b),d.dropped=this.instance.element,d.currentItem=d.element,this.instance.fromOutside=d),this.instance.currentItem&&this.instance._mouseDrag(b)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",b,this.instance._uiHash(this.instance)),this.instance._mouseStop(b,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),d._trigger("fromSortable",b),d.dropped=!1)})}}),a.ui.plugin.add("draggable","cursor",{start:function(b,c){var d=a("body"),e=a(this).data("draggable").options;d.css("cursor")&&(e._cursor=d.css("cursor")),d.css("cursor",e.cursor)},stop:function(b,c){var d=a(this).data("draggable").options;d._cursor&&a("body").css("cursor",d._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("opacity")&&(e._opacity=d.css("opacity")),d.css("opacity",e.opacity)},stop:function(b,c){var d=a(this).data("draggable").options;d._opacity&&a(c.helper).css("opacity",d._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(b,c){var d=a(this).data("draggable");d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"&&(d.overflowOffset=d.scrollParent.offset())},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=!1;if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"){if(!e.axis||e.axis!="x")d.overflowOffset.top+d.scrollParent[0].offsetHeight-b.pageY<e.scrollSensitivity?d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop+e.scrollSpeed:b.pageY-d.overflowOffset.top<e.scrollSensitivity&&(d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop-e.scrollSpeed);if(!e.axis||e.axis!="y")d.overflowOffset.left+d.scrollParent[0].offsetWidth-b.pageX<e.scrollSensitivity?d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft+e.scrollSpeed:b.pageX-d.overflowOffset.left<e.scrollSensitivity&&(d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft-e.scrollSpeed)}else{if(!e.axis||e.axis!="x")b.pageY-a(document).scrollTop()<e.scrollSensitivity?f=a(document).scrollTop(a(document).scrollTop()-e.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<e.scrollSensitivity&&(f=a(document).scrollTop(a(document).scrollTop()+e.scrollSpeed));if(!e.axis||e.axis!="y")b.pageX-a(document).scrollLeft()<e.scrollSensitivity?f=a(document).scrollLeft(a(document).scrollLeft()-e.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<e.scrollSensitivity&&(f=a(document).scrollLeft(a(document).scrollLeft()+e.scrollSpeed))}f!==!1&&a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,b)}}),a.ui.plugin.add("draggable","snap",{start:function(b,c){var d=a(this).data("draggable"),e=d.options;d.snapElements=[],a(e.snap.constructor!=String?e.snap.items||":data(draggable)":e.snap).each(function(){var b=a(this),c=b.offset();this!=d.element[0]&&d.snapElements.push({item:this,width:b.outerWidth(),height:b.outerHeight(),top:c.top,left:c.left})})},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=e.snapTolerance,g=c.offset.left,h=g+d.helperProportions.width,i=c.offset.top,j=i+d.helperProportions.height;for(var k=d.snapElements.length-1;k>=0;k--){var l=d.snapElements[k].left,m=l+d.snapElements[k].width,n=d.snapElements[k].top,o=n+d.snapElements[k].height;if(!(l-f<g&&g<m+f&&n-f<i&&i<o+f||l-f<g&&g<m+f&&n-f<j&&j<o+f||l-f<h&&h<m+f&&n-f<i&&i<o+f||l-f<h&&h<m+f&&n-f<j&&j<o+f)){d.snapElements[k].snapping&&d.options.snap.release&&d.options.snap.release.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=!1;continue}if(e.snapMode!="inner"){var p=Math.abs(n-j)<=f,q=Math.abs(o-i)<=f,r=Math.abs(l-h)<=f,s=Math.abs(m-g)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n-d.helperProportions.height,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l-d.helperProportions.width}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m}).left-d.margins.left)}var t=p||q||r||s;if(e.snapMode!="outer"){var p=Math.abs(n-i)<=f,q=Math.abs(o-j)<=f,r=Math.abs(l-g)<=f,s=Math.abs(m-h)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o-d.helperProportions.height,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m-d.helperProportions.width}).left-d.margins.left)}!d.snapElements[k].snapping&&(p||q||r||s||t)&&d.options.snap.snap&&d.options.snap.snap.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=p||q||r||s||t}}}),a.ui.plugin.add("draggable","stack",{start:function(b,c){var d=a(this).data("draggable").options,e=a.makeArray(a(d.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)});if(!e.length)return;var f=parseInt(e[0].style.zIndex)||0;a(e).each(function(a){this.style.zIndex=f+a}),this[0].style.zIndex=f+e.length}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("zIndex")&&(e._zIndex=d.css("zIndex")),d.css("zIndex",e.zIndex)},stop:function(b,c){var d=a(this).data("draggable").options;d._zIndex&&a(c.helper).css("zIndex",d._zIndex)}})}(jQuery),function(a,b){a.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect"},_create:function(){var b=this.options,c=b.accept;this.isover=0,this.isout=1,this.accept=a.isFunction(c)?c:function(a){return a.is(c)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},a.ui.ddmanager.droppables[b.scope]=a.ui.ddmanager.droppables[b.scope]||[],a.ui.ddmanager.droppables[b.scope].push(this),b.addClasses&&this.element.addClass("ui-droppable")},destroy:function(){var b=a.ui.ddmanager.droppables[this.options.scope];for(var c=0;c<b.length;c++)b[c]==this&&b.splice(c,1);return this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable"),this},_setOption:function(b,c){b=="accept"&&(this.accept=a.isFunction(c)?c:function(a){return a.is(c)}),a.Widget.prototype._setOption.apply(this,arguments)},_activate:function(b){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),c&&this._trigger("activate",b,this.ui(c))},_deactivate:function(b){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),c&&this._trigger("deactivate",b,this.ui(c))},_over:function(b){var c=a.ui.ddmanager.current;if(!c||(c.currentItem||c.element)[0]==this.element[0])return;this.accept.call(this.element[0],c.currentItem||c.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",b,this.ui(c)))},_out:function(b){var c=a.ui.ddmanager.current;if(!c||(c.currentItem||c.element)[0]==this.element[0])return;this.accept.call(this.element[0],c.currentItem||c.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",b,this.ui(c)))},_drop:function(b,c){var d=c||a.ui.ddmanager.current;if(!d||(d.currentItem||d.element)[0]==this.element[0])return!1;var e=!1;return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var b=a.data(this,"droppable");if(b.options.greedy&&!b.options.disabled&&b.options.scope==d.options.scope&&b.accept.call(b.element[0],d.currentItem||d.element)&&a.ui.intersect(d,a.extend(b,{offset:b.element.offset()}),b.options.tolerance))return e=!0,!1}),e?!1:this.accept.call(this.element[0],d.currentItem||d.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",b,this.ui(d)),this.element):!1},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}}}),a.extend(a.ui.droppable,{version:"1.8.23"}),a.ui.intersect=function(b,c,d){if(!c.offset)return!1;var e=(b.positionAbs||b.position.absolute).left,f=e+b.helperProportions.width,g=(b.positionAbs||b.position.absolute).top,h=g+b.helperProportions.height,i=c.offset.left,j=i+c.proportions.width,k=c.offset.top,l=k+c.proportions.height;switch(d){case"fit":return i<=e&&f<=j&&k<=g&&h<=l;case"intersect":return i<e+b.helperProportions.width/2&&f-b.helperProportions.width/2<j&&k<g+b.helperProportions.height/2&&h-b.helperProportions.height/2<l;case"pointer":var m=(b.positionAbs||b.position.absolute).left+(b.clickOffset||b.offset.click).left,n=(b.positionAbs||b.position.absolute).top+(b.clickOffset||b.offset.click).top,o=a.ui.isOver(n,m,k,i,c.proportions.height,c.proportions.width);return o;case"touch":return(g>=k&&g<=l||h>=k&&h<=l||g<k&&h>l)&&(e>=i&&e<=j||f>=i&&f<=j||e<i&&f>j);default:return!1}},a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(b,c){var d=a.ui.ddmanager.droppables[b.options.scope]||[],e=c?c.type:null,f=(b.currentItem||b.element).find(":data(droppable)").andSelf();g:for(var h=0;h<d.length;h++){if(d[h].options.disabled||b&&!d[h].accept.call(d[h].element[0],b.currentItem||b.element))continue;for(var i=0;i<f.length;i++)if(f[i]==d[h].element[0]){d[h].proportions.height=0;continue g}d[h].visible=d[h].element.css("display")!="none";if(!d[h].visible)continue;e=="mousedown"&&d[h]._activate.call(d[h],c),d[h].offset=d[h].element.offset(),d[h].proportions={width:d[h].element[0].offsetWidth,height:d[h].element[0].offsetHeight}}},drop:function(b,c){var d=!1;return a.each(a.ui.ddmanager.droppables[b.options.scope]||[],function(){if(!this.options)return;!this.options.disabled&&this.visible&&a.ui.intersect(b,this,this.options.tolerance)&&(d=this._drop.call(this,c)||d),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],b.currentItem||b.element)&&(this.isout=1,this.isover=0,this._deactivate.call(this,c))}),d},dragStart:function(b,c){b.element.parents(":not(body,html)").bind("scroll.droppable",function(){b.options.refreshPositions||a.ui.ddmanager.prepareOffsets(b,c)})},drag:function(b,c){b.options.refreshPositions&&a.ui.ddmanager.prepareOffsets(b,c),a.each(a.ui.ddmanager.droppables[b.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible)return;var d=a.ui.intersect(b,this,this.options.tolerance),e=!d&&this.isover==1?"isout":d&&this.isover==0?"isover":null;if(!e)return;var f;if(this.options.greedy){var g=this.element.parents(":data(droppable):eq(0)");g.length&&(f=a.data(g[0],"droppable"),f.greedyChild=e=="isover"?1:0)}f&&e=="isover"&&(f.isover=0,f.isout=1,f._out.call(f,c)),this[e]=1,this[e=="isout"?"isover":"isout"]=0,this[e=="isover"?"_over":"_out"].call(this,c),f&&e=="isout"&&(f.isout=0,f.isover=1,f._over.call(f,c))})},dragStop:function(b,c){b.element.parents(":not(body,html)").unbind("scroll.droppable"),b.options.refreshPositions||a.ui.ddmanager.prepareOffsets(b,c)}}}(jQuery),function(a,b){a.widget("ui.resizable",a.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1e3},_create:function(){var b=this,c=this.options;this.element.addClass("ui-resizable"),a.extend(this,{_aspectRatio:!!c.aspectRatio,aspectRatio:c.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:c.helper||c.ghost||c.animate?c.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|~/img/i)&&(this.element.wrap(a('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("resizable",this.element.data("resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=c.handles||(a(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se");if(this.handles.constructor==String){this.handles=="all"&&(this.handles="n,e,s,w,se,sw,ne,nw");var d=this.handles.split(",");this.handles={};for(var e=0;e<d.length;e++){var f=a.trim(d[e]),g="ui-resizable-"+f,h=a('<div class="ui-resizable-handle '+g+'"></div>');h.css({zIndex:c.zIndex}),"se"==f&&h.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[f]=".ui-resizable-"+f,this.element.append(h)}}this._renderAxis=function(b){b=b||this.element;for(var c in this.handles){this.handles[c].constructor==String&&(this.handles[c]=a(this.handles[c],this.element).show());if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var d=a(this.handles[c],this.element),e=0;e=/sw|ne|nw|se|n|s/.test(c)?d.outerHeight():d.outerWidth();var f=["padding",/ne|nw|n/.test(c)?"Top":/se|sw|s/.test(c)?"Bottom":/^e$/.test(c)?"Right":"Left"].join("");b.css(f,e),this._proportionallyResize()}if(!a(this.handles[c]).length)continue}},this._renderAxis(this.element),this._handles=a(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){if(!b.resizing){if(this.className)var a=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);b.axis=a&&a[1]?a[1]:"se"}}),c.autoHide&&(this._handles.hide(),a(this.element).addClass("ui-resizable-autohide").hover(function(){if(c.disabled)return;a(this).removeClass("ui-resizable-autohide"),b._handles.show()},function(){if(c.disabled)return;b.resizing||(a(this).addClass("ui-resizable-autohide"),b._handles.hide())})),this._mouseInit()},destroy:function(){this._mouseDestroy();var b=function(b){a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){b(this.element);var c=this.element;c.after(this.originalElement.css({position:c.css("position"),width:c.outerWidth(),height:c.outerHeight(),top:c.css("top"),left:c.css("left")})).remove()}return this.originalElement.css("resize",this.originalResizeStyle),b(this.originalElement),this},_mouseCapture:function(b){var c=!1;for(var d in this.handles)a(this.handles[d])[0]==b.target&&(c=!0);return!this.options.disabled&&c},_mouseStart:function(b){var d=this.options,e=this.element.position(),f=this.element;this.resizing=!0,this.documentScroll={top:a(document).scrollTop(),left:a(document).scrollLeft()},(f.is(".ui-draggable")||/absolute/.test(f.css("position")))&&f.css({position:"absolute",top:e.top,left:e.left}),this._renderProxy();var g=c(this.helper.css("left")),h=c(this.helper.css("top"));d.containment&&(g+=a(d.containment).scrollLeft()||0,h+=a(d.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:g,top:h},this.size=this._helper?{width:f.outerWidth(),height:f.outerHeight()}:{width:f.width(),height:f.height()},this.originalSize=this._helper?{width:f.outerWidth(),height:f.outerHeight()}:{width:f.width(),height:f.height()},this.originalPosition={left:g,top:h},this.sizeDiff={width:f.outerWidth()-f.width(),height:f.outerHeight()-f.height()},this.originalMousePosition={left:b.pageX,top:b.pageY},this.aspectRatio=typeof d.aspectRatio=="number"?d.aspectRatio:this.originalSize.width/this.originalSize.height||1;var i=a(".ui-resizable-"+this.axis).css("cursor");return a("body").css("cursor",i=="auto"?this.axis+"-resize":i),f.addClass("ui-resizable-resizing"),this._propagate("start",b),!0},_mouseDrag:function(b){var c=this.helper,d=this.options,e={},f=this,g=this.originalMousePosition,h=this.axis,i=b.pageX-g.left||0,j=b.pageY-g.top||0,k=this._change[h];if(!k)return!1;var l=k.apply(this,[b,i,j]),m=a.browser.msie&&a.browser.version<7,n=this.sizeDiff;this._updateVirtualBoundaries(b.shiftKey);if(this._aspectRatio||b.shiftKey)l=this._updateRatio(l,b);return l=this._respectSize(l,b),this._propagate("resize",b),c.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"}),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),this._updateCache(l),this._trigger("resize",b,this.ui()),!1},_mouseStop:function(b){this.resizing=!1;var c=this.options,d=this;if(this._helper){var e=this._proportionallyResizeElements,f=e.length&&/textarea/i.test(e[0].nodeName),g=f&&a.ui.hasScroll(e[0],"left")?0:d.sizeDiff.height,h=f?0:d.sizeDiff.width,i={width:d.helper.width()-h,height:d.helper.height()-g},j=parseInt(d.element.css("left"),10)+(d.position.left-d.originalPosition.left)||null,k=parseInt(d.element.css("top"),10)+(d.position.top-d.originalPosition.top)||null;c.animate||this.element.css(a.extend(i,{top:k,left:j})),d.helper.height(d.size.height),d.helper.width(d.size.width),this._helper&&!c.animate&&this._proportionallyResize()}return a("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",b),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(a){var b=this.options,c,e,f,g,h;h={minWidth:d(b.minWidth)?b.minWidth:0,maxWidth:d(b.maxWidth)?b.maxWidth:Infinity,minHeight:d(b.minHeight)?b.minHeight:0,maxHeight:d(b.maxHeight)?b.maxHeight:Infinity};if(this._aspectRatio||a)c=h.minHeight*this.aspectRatio,f=h.minWidth/this.aspectRatio,e=h.maxHeight*this.aspectRatio,g=h.maxWidth/this.aspectRatio,c>h.minWidth&&(h.minWidth=c),f>h.minHeight&&(h.minHeight=f),e<h.maxWidth&&(h.maxWidth=e),g<h.maxHeight&&(h.maxHeight=g);this._vBoundaries=h},_updateCache:function(a){var b=this.options;this.offset=this.helper.offset(),d(a.left)&&(this.position.left=a.left),d(a.top)&&(this.position.top=a.top),d(a.height)&&(this.size.height=a.height),d(a.width)&&(this.size.width=a.width)},_updateRatio:function(a,b){var c=this.options,e=this.position,f=this.size,g=this.axis;return d(a.height)?a.width=a.height*this.aspectRatio:d(a.width)&&(a.height=a.width/this.aspectRatio),g=="sw"&&(a.left=e.left+(f.width-a.width),a.top=null),g=="nw"&&(a.top=e.top+(f.height-a.height),a.left=e.left+(f.width-a.width)),a},_respectSize:function(a,b){var c=this.helper,e=this._vBoundaries,f=this._aspectRatio||b.shiftKey,g=this.axis,h=d(a.width)&&e.maxWidth&&e.maxWidth<a.width,i=d(a.height)&&e.maxHeight&&e.maxHeight<a.height,j=d(a.width)&&e.minWidth&&e.minWidth>a.width,k=d(a.height)&&e.minHeight&&e.minHeight>a.height;j&&(a.width=e.minWidth),k&&(a.height=e.minHeight),h&&(a.width=e.maxWidth),i&&(a.height=e.maxHeight);var l=this.originalPosition.left+this.originalSize.width,m=this.position.top+this.size.height,n=/sw|nw|w/.test(g),o=/nw|ne|n/.test(g);j&&n&&(a.left=l-e.minWidth),h&&n&&(a.left=l-e.maxWidth),k&&o&&(a.top=m-e.minHeight),i&&o&&(a.top=m-e.maxHeight);var p=!a.width&&!a.height;return p&&!a.left&&a.top?a.top=null:p&&!a.top&&a.left&&(a.left=null),a},_proportionallyResize:function(){var b=this.options;if(!this._proportionallyResizeElements.length)return;var c=this.helper||this.element;for(var d=0;d<this._proportionallyResizeElements.length;d++){var e=this._proportionallyResizeElements[d];if(!this.borderDif){var f=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],g=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")];this.borderDif=a.map(f,function(a,b){var c=parseInt(a,10)||0,d=parseInt(g[b],10)||0;return c+d})}if(!a.browser.msie||!a(c).is(":hidden")&&!a(c).parents(":hidden").length)e.css({height:c.height()-this.borderDif[0]-this.borderDif[2]||0,width:c.width()-this.borderDif[1]-this.borderDif[3]||0});else continue}},_renderProxy:function(){var b=this.element,c=this.options;this.elementOffset=b.offset();if(this._helper){this.helper=this.helper||a('<div style="overflow:hidden;"></div>');var d=a.browser.msie&&a.browser.version<7,e=d?1:0,f=d?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+f,height:this.element.outerHeight()+f,position:"absolute",left:this.elementOffset.left-e+"px",top:this.elementOffset.top-e+"px",zIndex:++c.zIndex}),this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(a,b,c){return{width:this.originalSize.width+b}},w:function(a,b,c){var d=this.options,e=this.originalSize,f=this.originalPosition;return{left:f.left+b,width:e.width-b}},n:function(a,b,c){var d=this.options,e=this.originalSize,f=this.originalPosition;return{top:f.top+c,height:e.height-c}},s:function(a,b,c){return{height:this.originalSize.height+c}},se:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},sw:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,c,d]))},ne:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},nw:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,c,d]))}},_propagate:function(b,c){a.ui.plugin.call(this,b,[c,this.ui()]),b!="resize"&&this._trigger(b,c,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),a.extend(a.ui.resizable,{version:"1.8.23"}),a.ui.plugin.add("resizable","alsoResize",{start:function(b,c){var d=a(this).data("resizable"),e=d.options,f=function(b){a(b).each(function(){var b=a(this);b.data("resizable-alsoresize",{width:parseInt(b.width(),10),height:parseInt(b.height(),10),left:parseInt(b.css("left"),10),top:parseInt(b.css("top"),10)})})};typeof e.alsoResize=="object"&&!e.alsoResize.parentNode?e.alsoResize.length?(e.alsoResize=e.alsoResize[0],f(e.alsoResize)):a.each(e.alsoResize,function(a){f(a)}):f(e.alsoResize)},resize:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.originalSize,g=d.originalPosition,h={height:d.size.height-f.height||0,width:d.size.width-f.width||0,top:d.position.top-g.top||0,left:d.position.left-g.left||0},i=function(b,d){a(b).each(function(){var b=a(this),e=a(this).data("resizable-alsoresize"),f={},g=d&&d.length?d:b.parents(c.originalElement[0]).length?["width","height"]:["width","height","top","left"];a.each(g,function(a,b){var c=(e[b]||0)+(h[b]||0);c&&c>=0&&(f[b]=c||null)}),b.css(f)})};typeof e.alsoResize=="object"&&!e.alsoResize.nodeType?a.each(e.alsoResize,function(a,b){i(a,b)}):i(e.alsoResize)},stop:function(b,c){a(this).removeData("resizable-alsoresize")}}),a.ui.plugin.add("resizable","animate",{stop:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d._proportionallyResizeElements,g=f.length&&/textarea/i.test(f[0].nodeName),h=g&&a.ui.hasScroll(f[0],"left")?0:d.sizeDiff.height,i=g?0:d.sizeDiff.width,j={width:d.size.width-i,height:d.size.height-h},k=parseInt(d.element.css("left"),10)+(d.position.left-d.originalPosition.left)||null,l=parseInt(d.element.css("top"),10)+(d.position.top-d.originalPosition.top)||null;d.element.animate(a.extend(j,l&&k?{top:l,left:k}:{}),{duration:e.animateDuration,easing:e.animateEasing,step:function(){var c={width:parseInt(d.element.css("width"),10),height:parseInt(d.element.css("height"),10),top:parseInt(d.element.css("top"),10),left:parseInt(d.element.css("left"),10)};f&&f.length&&a(f[0]).css({width:c.width,height:c.height}),d._updateCache(c),d._propagate("resize",b)}})}}),a.ui.plugin.add("resizable","containment",{start:function(b,d){var e=a(this).data("resizable"),f=e.options,g=e.element,h=f.containment,i=h instanceof a?h.get(0):/parent/.test(h)?g.parent().get(0):h;if(!i)return;e.containerElement=a(i);if(/document/.test(h)||h==document)e.containerOffset={left:0,top:0},e.containerPosition={left:0,top:0},e.parentData={element:a(document),left:0,top:0,width:a(document).width(),height:a(document).height()||document.body.parentNode.scrollHeight};else{var j=a(i),k=[];a(["Top","Right","Left","Bottom"]).each(function(a,b){k[a]=c(j.css("padding"+b))}),e.containerOffset=j.offset(),e.containerPosition=j.position(),e.containerSize={height:j.innerHeight()-k[3],width:j.innerWidth()-k[1]};var l=e.containerOffset,m=e.containerSize.height,n=e.containerSize.width,o=a.ui.hasScroll(i,"left")?i.scrollWidth:n,p=a.ui.hasScroll(i)?i.scrollHeight:m;e.parentData={element:i,left:l.left,top:l.top,width:o,height:p}}},resize:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.containerSize,g=d.containerOffset,h=d.size,i=d.position,j=d._aspectRatio||b.shiftKey,k={top:0,left:0},l=d.containerElement;l[0]!=document&&/static/.test(l.css("position"))&&(k=g),i.left<(d._helper?g.left:0)&&(d.size.width=d.size.width+(d._helper?d.position.left-g.left:d.position.left-k.left),j&&(d.size.height=d.size.width/d.aspectRatio),d.position.left=e.helper?g.left:0),i.top<(d._helper?g.top:0)&&(d.size.height=d.size.height+(d._helper?d.position.top-g.top:d.position.top),j&&(d.size.width=d.size.height*d.aspectRatio),d.position.top=d._helper?g.top:0),d.offset.left=d.parentData.left+d.position.left,d.offset.top=d.parentData.top+d.position.top;var m=Math.abs((d._helper?d.offset.left-k.left:d.offset.left-k.left)+d.sizeDiff.width),n=Math.abs((d._helper?d.offset.top-k.top:d.offset.top-g.top)+d.sizeDiff.height),o=d.containerElement.get(0)==d.element.parent().get(0),p=/relative|absolute/.test(d.containerElement.css("position"));o&&p&&(m-=d.parentData.left),m+d.size.width>=d.parentData.width&&(d.size.width=d.parentData.width-m,j&&(d.size.height=d.size.width/d.aspectRatio)),n+d.size.height>=d.parentData.height&&(d.size.height=d.parentData.height-n,j&&(d.size.width=d.size.height*d.aspectRatio))},stop:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.position,g=d.containerOffset,h=d.containerPosition,i=d.containerElement,j=a(d.helper),k=j.offset(),l=j.outerWidth()-d.sizeDiff.width,m=j.outerHeight()-d.sizeDiff.height;d._helper&&!e.animate&&/relative/.test(i.css("position"))&&a(this).css({left:k.left-h.left-g.left,width:l,height:m}),d._helper&&!e.animate&&/static/.test(i.css("position"))&&a(this).css({left:k.left-h.left-g.left,width:l,height:m})}}),a.ui.plugin.add("resizable","ghost",{start:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.size;d.ghost=d.originalElement.clone(),d.ghost.css({opacity:.25,display:"block",position:"relative",height:f.height,width:f.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof e.ghost=="string"?e.ghost:""),d.ghost.appendTo(d.helper)},resize:function(b,c){var d=a(this).data("resizable"),e=d.options;d.ghost&&d.ghost.css({position:"relative",height:d.size.height,width:d.size.width})},stop:function(b,c){var d=a(this).data("resizable"),e=d.options;d.ghost&&d.helper&&d.helper.get(0).removeChild(d.ghost.get(0))}}),a.ui.plugin.add("resizable","grid",{resize:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.size,g=d.originalSize,h=d.originalPosition,i=d.axis,j=e._aspectRatio||b.shiftKey;e.grid=typeof e.grid=="number"?[e.grid,e.grid]:e.grid;var k=Math.round((f.width-g.width)/(e.grid[0]||1))*(e.grid[0]||1),l=Math.round((f.height-g.height)/(e.grid[1]||1))*(e.grid[1]||1);/^(se|s|e)$/.test(i)?(d.size.width=g.width+k,d.size.height=g.height+l):/^(ne)$/.test(i)?(d.size.width=g.width+k,d.size.height=g.height+l,d.position.top=h.top-l):/^(sw)$/.test(i)?(d.size.width=g.width+k,d.size.height=g.height+l,d.position.left=h.left-k):(d.size.width=g.width+k,d.size.height=g.height+l,d.position.top=h.top-l,d.position.left=h.left-k)}});var c=function(a){return parseInt(a,10)||0},d=function(a){return!isNaN(parseInt(a,10))}}(jQuery),function(a,b){a.widget("ui.selectable",a.ui.mouse,{options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch"},_create:function(){var b=this;this.element.addClass("ui-selectable"),this.dragged=!1;var c;this.refresh=function(){c=a(b.options.filter,b.element[0]),c.addClass("ui-selectee"),c.each(function(){var b=a(this),c=b.offset();a.data(this,"selectable-item",{element:this,$element:b,left:c.left,top:c.top,right:c.left+b.outerWidth(),bottom:c.top+b.outerHeight(),startselected:!1,selected:b.hasClass("ui-selected"),selecting:b.hasClass("ui-selecting"),unselecting:b.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=c.addClass("ui-selectee"),this._mouseInit(),this.helper=a("<div class='ui-selectable-helper'></div>")},destroy:function(){return this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable"),this._mouseDestroy(),this},_mouseStart:function(b){var c=this;this.opos=[b.pageX,b.pageY];if(this.options.disabled)return;var d=this.options;this.selectees=a(d.filter,this.element[0]),this._trigger("start",b),a(d.appendTo).append(this.helper),this.helper.css({left:b.clientX,top:b.clientY,width:0,height:0}),d.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var d=a.data(this,"selectable-item");d.startselected=!0,!b.metaKey&&!b.ctrlKey&&(d.$element.removeClass("ui-selected"),d.selected=!1,d.$element.addClass("ui-unselecting"),d.unselecting=!0,c._trigger("unselecting",b,{unselecting:d.element}))}),a(b.target).parents().andSelf().each(function(){var d=a.data(this,"selectable-item");if(d){var e=!b.metaKey&&!b.ctrlKey||!d.$element.hasClass("ui-selected");return d.$element.removeClass(e?"ui-unselecting":"ui-selected").addClass(e?"ui-selecting":"ui-unselecting"),d.unselecting=!e,d.selecting=e,d.selected=e,e?c._trigger("selecting",b,{selecting:d.element}):c._trigger("unselecting",b,{unselecting:d.element}),!1}})},_mouseDrag:function(b){var c=this;this.dragged=!0;if(this.options.disabled)return;var d=this.options,e=this.opos[0],f=this.opos[1],g=b.pageX,h=b.pageY;if(e>g){var i=g;g=e,e=i}if(f>h){var i=h;h=f,f=i}return this.helper.css({left:e,top:f,width:g-e,height:h-f}),this.selectees.each(function(){var i=a.data(this,"selectable-item");if(!i||i.element==c.element[0])return;var j=!1;d.tolerance=="touch"?j=!(i.left>g||i.right<e||i.top>h||i.bottom<f):d.tolerance=="fit"&&(j=i.left>e&&i.right<g&&i.top>f&&i.bottom<h),j?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,c._trigger("selecting",b,{selecting:i.element}))):(i.selecting&&((b.metaKey||b.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),c._trigger("unselecting",b,{unselecting:i.element}))),i.selected&&!b.metaKey&&!b.ctrlKey&&!i.startselected&&(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,c._trigger("unselecting",b,{unselecting:i.element})))}),!1},_mouseStop:function(b){var c=this;this.dragged=!1;var d=this.options;return a(".ui-unselecting",this.element[0]).each(function(){var d=a.data(this,"selectable-item");d.$element.removeClass("ui-unselecting"),d.unselecting=!1,d.startselected=!1,c._trigger("unselected",b,{unselected:d.element})}),a(".ui-selecting",this.element[0]).each(function(){var d=a.data(this,"selectable-item");d.$element.removeClass("ui-selecting").addClass("ui-selected"),d.selecting=!1,d.selected=!0,d.startselected=!0,c._trigger("selected",b,{selected:d.element})}),this._trigger("stop",b),this.helper.remove(),!1}}),a.extend(a.ui.selectable,{version:"1.8.23"})}(jQuery),function(a,b){a.widget("ui.sortable",a.ui.mouse,{widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3},_create:function(){var a=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?a.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},destroy:function(){a.Widget.prototype.destroy.call(this),this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var b=this.items.length-1;b>=0;b--)this.items[b].item.removeData(this.widgetName+"-item");return this},_setOption:function(b,c){b==="disabled"?(this.options[b]=c,this.widget()[c?"addClass":"removeClass"]("ui-sortable-disabled")):a.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(b,c){var d=this;if(this.reverting)return!1;if(this.options.disabled||this.options.type=="static")return!1;this._refreshItems(b);var e=null,f=this,g=a(b.target).parents().each(function(){if(a.data(this,d.widgetName+"-item")==f)return e=a(this),!1});a.data(b.target,d.widgetName+"-item")==f&&(e=a(b.target));if(!e)return!1;if(this.options.handle&&!c){var h=!1;a(this.options.handle,e).find("*").andSelf().each(function(){this==b.target&&(h=!0)});if(!h)return!1}return this.currentItem=e,this._removeCurrentsFromItems(),!0},_mouseStart:function(b,c,d){var e=this.options,f=this;this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(b),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,e.cursorAt&&this._adjustOffsetFromHelper(e.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!=this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),e.containment&&this._setContainment(),e.cursor&&(a("body").css("cursor")&&(this._storedCursor=a("body").css("cursor")),a("body").css("cursor",e.cursor)),e.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",e.opacity)),e.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",e.zIndex)),this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",b,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions();if(!d)for(var g=this.containers.length-1;g>=0;g--)this.containers[g]._trigger("activate",b,f._uiHash(this));return a.ui.ddmanager&&(a.ui.ddmanager.current=this),a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(b),!0},_mouseDrag:function(b){this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs);if(this.options.scroll){var c=this.options,d=!1;this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-b.pageY<c.scrollSensitivity?this.scrollParent[0].scrollTop=d=this.scrollParent[0].scrollTop+c.scrollSpeed:b.pageY-this.overflowOffset.top<c.scrollSensitivity&&(this.scrollParent[0].scrollTop=d=this.scrollParent[0].scrollTop-c.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-b.pageX<c.scrollSensitivity?this.scrollParent[0].scrollLeft=d=this.scrollParent[0].scrollLeft+c.scrollSpeed:b.pageX-this.overflowOffset.left<c.scrollSensitivity&&(this.scrollParent[0].scrollLeft=d=this.scrollParent[0].scrollLeft-c.scrollSpeed)):(b.pageY-a(document).scrollTop()<c.scrollSensitivity?d=a(document).scrollTop(a(document).scrollTop()-c.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<c.scrollSensitivity&&(d=a(document).scrollTop(a(document).scrollTop()+c.scrollSpeed)),b.pageX-a(document).scrollLeft()<c.scrollSensitivity?d=a(document).scrollLeft(a(document).scrollLeft()-c.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<c.scrollSensitivity&&(d=a(document).scrollLeft(a(document).scrollLeft()+c.scrollSpeed))),d!==!1&&a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b)}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";for(var e=this.items.length-1;e>=0;e--){var f=this.items[e],g=f.item[0],h=this._intersectsWithPointer(f);if(!h)continue;if(g!=this.currentItem[0]&&this.placeholder[h==1?"next":"prev"]()[0]!=g&&!a.ui.contains(this.placeholder[0],g)&&(this.options.type=="semi-dynamic"?!a.ui.contains(this.element[0],g):!0)){this.direction=h==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(f))this._rearrange(b,f);else break;this._trigger("change",b,this._uiHash());break}}return this._contactContainers(b),a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),this._trigger("sort",b,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(b,c){if(!b)return;a.ui.ddmanager&&!this.options.dropBehaviour&&a.ui.ddmanager.drop(this,b);if(this.options.revert){var d=this,e=d.placeholder.offset();d.reverting=!0,a(this.helper).animate({left:e.left-this.offset.parent.left-d.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:e.top-this.offset.parent.top-d.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){d._clear(b)})}else this._clear(b,c);return!1},cancel:function(){var b=this;if(this.dragging){this._mouseUp({target:null}),this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var c=this.containers.length-1;c>=0;c--)this.containers[c]._trigger("deactivate",null,b._uiHash(this)),this.containers[c].containerCache.over&&(this.containers[c]._trigger("out",null,b._uiHash(this)),this.containers[c].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),a.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?a(this.domPosition.prev).after(this.currentItem):a(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},a(c).each(function(){var c=(a(b.item||this).attr(b.attribute||"id")||"").match(b.expression||/(.+)[-=_](.+)/);c&&d.push((b.key||c[1]+"[]")+"="+(b.key&&b.expression?c[1]:c[2]))}),!d.length&&b.key&&d.push(b.key+"="),d.join("&")},toArray:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},c.each(function(){d.push(a(b.item||this).attr(b.attribute||"id")||"")}),d},_intersectsWith:function(a){var b=this.positionAbs.left,c=b+this.helperProportions.width,d=this.positionAbs.top,e=d+this.helperProportions.height,f=a.left,g=f+a.width,h=a.top,i=h+a.height,j=this.offset.click.top,k=this.offset.click.left,l=d+j>h&&d+j<i&&b+k>f&&b+k<g;return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"]?l:f<b+this.helperProportions.width/2&&c-this.helperProportions.width/2<g&&h<d+this.helperProportions.height/2&&e-this.helperProportions.height/2<i},_intersectsWithPointer:function(b){var c=this.options.axis==="x"||a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,b.top,b.height),d=this.options.axis==="y"||a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,b.left,b.width),e=c&&d,f=this._getDragVerticalDirection(),g=this._getDragHorizontalDirection();return e?this.floating?g&&g=="right"||f=="down"?2:1:f&&(f=="down"?2:1):!1},_intersectsWithSides:function(b){var c=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,b.top+b.height/2,b.height),d=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,b.left+b.width/2,b.width),e=this._getDragVerticalDirection(),f=this._getDragHorizontalDirection();return this.floating&&f?f=="right"&&d||f=="left"&&!d:e&&(e=="down"&&c||e=="up"&&!c)},_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;return a!=0&&(a>0?"down":"up")},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;return a!=0&&(a>0?"right":"left")},refresh:function(a){return this._refreshItems(a),this.refreshPositions(),this},_connectWith:function(){var a=this.options;return a.connectWith.constructor==String?[a.connectWith]:a.connectWith},_getItemsAsjQuery:function(b){var c=this,d=[],e=[],f=this._connectWith();if(f&&b)for(var g=f.length-1;g>=0;g--){var h=a(f[g]);for(var i=h.length-1;i>=0;i--){var j=a.data(h[i],this.widgetName);j&&j!=this&&!j.options.disabled&&e.push([a.isFunction(j.options.items)?j.options.items.call(j.element):a(j.options.items,j.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),j])}}e.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(var g=e.length-1;g>=0;g--)e[g][0].each(function(){d.push(this)});return a(d)},_removeCurrentsFromItems:function(){var a=this.currentItem.find(":data("+this.widgetName+"-item)");for(var b=0;b<this.items.length;b++)for(var c=0;c<a.length;c++)a[c]==this.items[b].item[0]&&this.items.splice(b,1)},_refreshItems:function(b){this.items=[],this.containers=[this];var c=this.items,d=this,e=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],b,{item:this.currentItem}):a(this.options.items,this.element),this]],f=this._connectWith();if(f&&this.ready)for(var g=f.length-1;g>=0;g--){var h=a(f[g]);for(var i=h.length-1;i>=0;i--){var j=a.data(h[i],this.widgetName);j&&j!=this&&!j.options.disabled&&(e.push([a.isFunction(j.options.items)?j.options.items.call(j.element[0],b,{item:this.currentItem}):a(j.options.items,j.element),j]),this.containers.push(j))}}for(var g=e.length-1;g>=0;g--){var k=e[g][1],l=e[g][0];for(var i=0,m=l.length;i<m;i++){var n=a(l[i]);n.data(this.widgetName+"-item",k),c.push({item:n,instance:k,width:0,height:0,left:0,top:0})}}},refreshPositions:function(b){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());for(var c=this.items.length-1;c>=0;c--){var d=this.items[c];if(d.instance!=this.currentContainer&&this.currentContainer&&d.item[0]!=this.currentItem[0])continue;var e=this.options.toleranceElement?a(this.options.toleranceElement,d.item):d.item;b||(d.width=e.outerWidth(),d.height=e.outerHeight());var f=e.offset();d.left=f.left,d.top=f.top}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(var c=this.containers.length-1;c>=0;c--){var f=this.containers[c].element.offset();this.containers[c].containerCache.left=f.left,this.containers[c].containerCache.top=f.top,this.containers[c].containerCache.width=this.containers[c].element.outerWidth(),this.containers[c].containerCache.height=this.containers[c].element.outerHeight()}return this},_createPlaceholder:function(b){var c=b||this,d=c.options;if(!d.placeholder||d.placeholder.constructor==String){var e=d.placeholder;d.placeholder={element:function(){var b=a(document.createElement(c.currentItem[0].nodeName)).addClass(e||c.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];return e||(b.style.visibility="hidden"),b},update:function(a,b){if(e&&!d.forcePlaceholderSize)return;b.height()||b.height(c.currentItem.innerHeight()-parseInt(c.currentItem.css("paddingTop")||0,10)-parseInt(c.currentItem.css("paddingBottom")||0,10)),b.width()||b.width(c.currentItem.innerWidth()-parseInt(c.currentItem.css("paddingLeft")||0,10)-parseInt(c.currentItem.css("paddingRight")||0,10))}}}c.placeholder=a(d.placeholder.element.call(c.element,c.currentItem)),c.currentItem.after(c.placeholder),d.placeholder.update(c,c.placeholder)},_contactContainers:function(b){var c=null,d=null;for(var e=this.containers.length-1;e>=0;e--){if(a.ui.contains(this.currentItem[0],this.containers[e].element[0]))continue;if(this._intersectsWith(this.containers[e].containerCache)){if(c&&a.ui.contains(this.containers[e].element[0],c.element[0]))continue;c=this.containers[e],d=e}else this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",b,this._uiHash(this)),this.containers[e].containerCache.over=0)}if(!c)return;if(this.containers.length===1)this.containers[d]._trigger("over",b,this._uiHash(this)),this.containers[d].containerCache.over=1;else if(this.currentContainer!=this.containers[d]){var f=1e4,g=null,h=this.positionAbs[this.containers[d].floating?"left":"top"];for(var i=this.items.length-1;i>=0;i--){if(!a.ui.contains(this.containers[d].element[0],this.items[i].item[0]))continue;var j=this.containers[d].floating?this.items[i].item.offset().left:this.items[i].item.offset().top;Math.abs(j-h)<f&&(f=Math.abs(j-h),g=this.items[i],this.direction=j-h>0?"down":"up")}if(!g&&!this.options.dropOnEmpty)return;this.currentContainer=this.containers[d],g?this._rearrange(b,g,null,!0):this._rearrange(b,null,this.containers[d].element,!0),this._trigger("change",b,this._uiHash()),this.containers[d]._trigger("change",b,this._uiHash(this)),this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[d]._trigger("over",b,this._uiHash(this)),this.containers[d].containerCache.over=1}},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b,this.currentItem])):c.helper=="clone"?this.currentItem.clone():this.currentItem;return d.parents("body").length||a(c.appendTo!="parent"?c.appendTo:this.currentItem[0].parentNode)[0].appendChild(d[0]),d[0]==this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(d[0].style.width==""||c.forceHelperSize)&&d.width(this.currentItem.width()),(d[0].style.height==""||c.forceHelperSize)&&d.height(this.currentItem.height()),d},_adjustOffsetFromHelper:function(b){typeof b=="string"&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)b={top:0,left:0};return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.currentItem.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b=this.options;b.containment=="parent"&&(b.containment=this.helper[0].parentNode);if(b.containment=="document"||b.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(b.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a(b.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(b.containment)){var c=a(b.containment)[0],d=a(b.containment).offset(),e=a(c).css("overflow")!="hidden";this.containment=[d.left+(parseInt(a(c).css("borderLeftWidth"),10)||0)+(parseInt(a(c).css("paddingLeft"),10)||0)-this.margins.left,d.top+(parseInt(a(c).css("borderTopWidth"),10)||0)+(parseInt(a(c).css("paddingTop"),10)||0)-this.margins.top,d.left+(e?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(a(c).css("borderLeftWidth"),10)||0)-(parseInt(a(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,d.top+(e?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(a(c).css("borderTopWidth"),10)||0)-(parseInt(a(c).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(b,c){c||(c=this.position);var d=b=="absolute"?1:-1,e=this.options,f=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop())*d),left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())*d)}},_generatePosition:function(b){var c=this.options,d=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(d[0].tagName);this.cssPosition=="relative"&&(this.scrollParent[0]==document||this.scrollParent[0]==this.offsetParent[0])&&(this.offset.relative=this._getRelativeOffset());var f=b.pageX,g=b.pageY;if(this.originalPosition){this.containment&&(b.pageX-this.offset.click.left<this.containment[0]&&(f=this.containment[0]+this.offset.click.left),b.pageY-this.offset.click.top<this.containment[1]&&(g=this.containment[1]+this.offset.click.top),b.pageX-this.offset.click.left>this.containment[2]&&(f=this.containment[2]+this.offset.click.left),b.pageY-this.offset.click.top>this.containment[3]&&(g=this.containment[3]+this.offset.click.top));if(c.grid){var h=this.originalPageY+Math.round((g-this.originalPageY)/c.grid[1])*c.grid[1];g=this.containment?h-this.offset.click.top<this.containment[1]||h-this.offset.click.top>this.containment[3]?h-this.offset.click.top<this.containment[1]?h+c.grid[1]:h-c.grid[1]:h:h;var i=this.originalPageX+Math.round((f-this.originalPageX)/c.grid[0])*c.grid[0];f=this.containment?i-this.offset.click.left<this.containment[0]||i-this.offset.click.left>this.containment[2]?i-this.offset.click.left<this.containment[0]?i+c.grid[0]:i-c.grid[0]:i:i}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:d.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:d.scrollLeft())}},_rearrange:function(a,b,c,d){c?c[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],this.direction=="down"?b.item[0]:b.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var e=this,f=this.counter;window.setTimeout(function(){f==e.counter&&e.refreshPositions(!d)},0)},_clear:function(b,c){this.reverting=!1;var d=[],e=this;!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var f in this._storedCSS)if(this._storedCSS[f]=="auto"||this._storedCSS[f]=="static")this._storedCSS[f]="";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!c&&d.push(function(a){this._trigger("receive",a,this._uiHash(this.fromOutside))}),(this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!c&&d.push(function(a){this._trigger("update",a,this._uiHash())});if(!a.ui.contains(this.element[0],this.currentItem[0])){c||d.push(function(a){this._trigger("remove",a,this._uiHash())});for(var f=this.containers.length-1;f>=0;f--)a.ui.contains(this.containers[f].element[0],this.currentItem[0])&&!c&&(d.push(function(a){return function(b){a._trigger("receive",b,this._uiHash(this))}}.call(this,this.containers[f])),d.push(function(a){return function(b){a._trigger("update",b,this._uiHash(this))}}.call(this,this.containers[f])))}for(var f=this.containers.length-1;f>=0;f--)c||d.push(function(a){return function(b){a._trigger("deactivate",b,this._uiHash(this))}}.call(this,this.containers[f])),this.containers[f].containerCache.over&&(d.push(function(a){return function(b){a._trigger("out",b,this._uiHash(this))}}.call(this,this.containers[f])),this.containers[f].containerCache.over=0);this._storedCursor&&a("body").css("cursor",this._storedCursor),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex),this.dragging=!1;if(this.cancelHelperRemoval){if(!c){this._trigger("beforeStop",b,this._uiHash());for(var f=0;f<d.length;f++)d[f].call(this,b);this._trigger("stop",b,this._uiHash())}return this.fromOutside=!1,!1}c||this._trigger("beforeStop",b,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!=this.currentItem[0]&&this.helper.remove(),this.helper=null;if(!c){for(var f=0;f<d.length;f++)d[f].call(this,b);this._trigger("stop",b,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){a.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(b){var c=b||this;return{helper:c.helper,placeholder:c.placeholder||a([]),position:c.position,originalPosition:c.originalPosition,offset:c.positionAbs,item:c.currentItem,sender:b?b.element:null}}}),a.extend(a.ui.sortable,{version:"1.8.23"})}(jQuery),jQuery.effects||function(a,b){function c(b){var c;return b&&b.constructor==Array&&b.length==3?b:(c=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(b))?[parseInt(c[1],10),parseInt(c[2],10),parseInt(c[3],10)]:(c=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(b))?[parseFloat(c[1])*2.55,parseFloat(c[2])*2.55,parseFloat(c[3])*2.55]:(c=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(b))?[parseInt(c[1],16),parseInt(c[2],16),parseInt(c[3],16)]:(c=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(b))?[parseInt(c[1]+c[1],16),parseInt(c[2]+c[2],16),parseInt(c[3]+c[3],16)]:(c=/rgba\(0, 0, 0, 0\)/.exec(b))?e.transparent:e[a.trim(b).toLowerCase()]}function d(b,d){var e;do{e=(a.curCSS||a.css)(b,d);if(e!=""&&e!="transparent"||a.nodeName(b,"body"))break;d="backgroundColor"}while(b=b.parentNode);return c(e)}function h(){var a=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,b={},c,d;if(a&&a.length&&a[0]&&a[a[0]]){var e=a.length;while(e--)c=a[e],typeof a[c]=="string"&&(d=c.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),b[d]=a[c])}else for(c in a)typeof a[c]=="string"&&(b[c]=a[c]);return b}function i(b){var c,d;for(c in b)d=b[c],(d==null||a.isFunction(d)||c in g||/scrollbar/.test(c)||!/color/i.test(c)&&isNaN(parseFloat(d)))&&delete b[c];return b}function j(a,b){var c={_:0},d;for(d in b)a[d]!=b[d]&&(c[d]=b[d]);return c}function k(b,c,d,e){typeof b=="object"&&(e=c,d=null,c=b,b=c.effect),a.isFunction(c)&&(e=c,d=null,c={});if(typeof c=="number"||a.fx.speeds[c])e=d,d=c,c={};return a.isFunction(d)&&(e=d,d=null),c=c||{},d=d||c.duration,d=a.fx.off?0:typeof d=="number"?d:d in a.fx.speeds?a.fx.speeds[d]:a.fx.speeds._default,e=e||c.complete,[b,c,d,e]}function l(b){return!b||typeof b=="number"||a.fx.speeds[b]?!0:typeof b=="string"&&!a.effects[b]?!0:!1}a.effects={},a.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","borderColor","color","outlineColor"],function(b,e){a.fx.step[e]=function(a){a.colorInit||(a.start=d(a.elem,e),a.end=c(a.end),a.colorInit=!0),a.elem.style[e]="rgb("+Math.max(Math.min(parseInt(a.pos*(a.end[0]-a.start[0])+a.start[0],10),255),0)+","+Math.max(Math.min(parseInt(a.pos*(a.end[1]-a.start[1])+a.start[1],10),255),0)+","+Math.max(Math.min(parseInt(a.pos*(a.end[2]-a.start[2])+a.start[2],10),255),0)+")"}});var e={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},f=["add","remove","toggle"],g={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};a.effects.animateClass=function(b,c,d,e){return a.isFunction(d)&&(e=d,d=null),this.queue(function(){var g=a(this),k=g.attr("style")||" ",l=i(h.call(this)),m,n=g.attr("class")||"";a.each(f,function(a,c){b[c]&&g[c+"Class"](b[c])}),m=i(h.call(this)),g.attr("class",n),g.animate(j(l,m),{queue:!1,duration:c,easing:d,complete:function(){a.each(f,function(a,c){b[c]&&g[c+"Class"](b[c])}),typeof g.attr("style")=="object"?(g.attr("style").cssText="",g.attr("style").cssText=k):g.attr("style",k),e&&e.apply(this,arguments),a.dequeue(this)}})})},a.fn.extend({_addClass:a.fn.addClass,addClass:function(b,c,d,e){return c?a.effects.animateClass.apply(this,[{add:b},c,d,e]):this._addClass(b)},_removeClass:a.fn.removeClass,removeClass:function(b,c,d,e){return c?a.effects.animateClass.apply(this,[{remove:b},c,d,e]):this._removeClass(b)},_toggleClass:a.fn.toggleClass,toggleClass:function(c,d,e,f,g){return typeof d=="boolean"||d===b?e?a.effects.animateClass.apply(this,[d?{add:c}:{remove:c},e,f,g]):this._toggleClass(c,d):a.effects.animateClass.apply(this,[{toggle:c},d,e,f])},switchClass:function(b,c,d,e,f){return a.effects.animateClass.apply(this,[{add:c,remove:b},d,e,f])}}),a.extend(a.effects,{version:"1.8.23",save:function(a,b){for(var c=0;c<b.length;c++)b[c]!==null&&a.data("ec.storage."+b[c],a[0].style[b[c]])},restore:function(a,b){for(var c=0;c<b.length;c++)b[c]!==null&&a.css(b[c],a.data("ec.storage."+b[c]))},setMode:function(a,b){return b=="toggle"&&(b=a.is(":hidden")?"show":"hide"),b},getBaseline:function(a,b){var c,d;switch(a[0]){case"top":c=0;break;case"middle":c=.5;break;case"bottom":c=1;break;default:c=a[0]/b.height}switch(a[1]){case"left":d=0;break;case"center":d=.5;break;case"right":d=1;break;default:d=a[1]/b.width}return{x:d,y:c}},createWrapper:function(b){if(b.parent().is(".ui-effects-wrapper"))return b.parent();var c={width:b.outerWidth(!0),height:b.outerHeight(!0),"float":b.css("float")},d=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),e=document.activeElement;try{e.id}catch(f){e=document.body}return b.wrap(d),(b[0]===e||a.contains(b[0],e))&&a(e).focus(),d=b.parent(),b.css("position")=="static"?(d.css({position:"relative"}),b.css({position:"relative"})):(a.extend(c,{position:b.css("position"),zIndex:b.css("z-index")}),a.each(["top","left","bottom","right"],function(a,d){c[d]=b.css(d),isNaN(parseInt(c[d],10))&&(c[d]="auto")}),b.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),d.css(c).show()},removeWrapper:function(b){var c,d=document.activeElement;return b.parent().is(".ui-effects-wrapper")?(c=b.parent().replaceWith(b),(b[0]===d||a.contains(b[0],d))&&a(d).focus(),c):b},setTransition:function(b,c,d,e){return e=e||{},a.each(c,function(a,c){var f=b.cssUnit(c);f[0]>0&&(e[c]=f[0]*d+f[1])}),e}}),a.fn.extend({effect:function(b,c,d,e){var f=k.apply(this,arguments),g={options:f[1],duration:f[2],callback:f[3]},h=g.options.mode,i=a.effects[b];return a.fx.off||!i?h?this[h](g.duration,g.callback):this.each(function(){g.callback&&g.callback.call(this)}):i.call(this,g)},_show:a.fn.show,show:function(a){if(l(a))return this._show.apply(this,arguments);var b=k.apply(this,arguments);return b[1].mode="show",this.effect.apply(this,b)},_hide:a.fn.hide,hide:function(a){if(l(a))return this._hide.apply(this,arguments);var b=k.apply(this,arguments);return b[1].mode="hide",this.effect.apply(this,b)},__toggle:a.fn.toggle,toggle:function(b){if(l(b)||typeof b=="boolean"||a.isFunction(b))return this.__toggle.apply(this,arguments);var c=k.apply(this,arguments);return c[1].mode="toggle",this.effect.apply(this,c)},cssUnit:function(b){var c=this.css(b),d=[];return a.each(["em","px","%","pt"],function(a,b){c.indexOf(b)>0&&(d=[parseFloat(c),b])}),d}});var m={};a.each(["Quad","Cubic","Quart","Quint","Expo"],function(a,b){m[b]=function(b){return Math.pow(b,a+2)}}),a.extend(m,{Sine:function(a){return 1-Math.cos(a*Math.PI/2)},Circ:function(a){return 1-Math.sqrt(1-a*a)},Elastic:function(a){return a===0||a===1?a:-Math.pow(2,8*(a-1))*Math.sin(((a-1)*80-7.5)*Math.PI/15)},Back:function(a){return a*a*(3*a-2)},Bounce:function(a){var b,c=4;while(a<((b=Math.pow(2,--c))-1)/11);return 1/Math.pow(4,3-c)-7.5625*Math.pow((b*3-2)/22-a,2)}}),a.each(m,function(b,c){a.easing["easeIn"+b]=c,a.easing["easeOut"+b]=function(a){return 1-c(1-a)},a.easing["easeInOut"+b]=function(a){return a<.5?c(a*2)/2:c(a*-2+2)/-2+1}})}(jQuery),function(a,b){a.effects.blind=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right"],e=a.effects.setMode(c,b.options.mode||"hide"),f=b.options.direction||"vertical";a.effects.save(c,d),c.show();var g=a.effects.createWrapper(c).css({overflow:"hidden"}),h=f=="vertical"?"height":"width",i=f=="vertical"?g.height():g.width();e=="show"&&g.css(h,0);var j={};j[h]=e=="show"?i:0,g.animate(j,b.duration,b.options.easing,function(){e=="hide"&&c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(c[0],arguments),c.dequeue()})})}}(jQuery),function(a,b){a.effects.bounce=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right"],e=a.effects.setMode(c,b.options.mode||"effect"),f=b.options.direction||"up",g=b.options.distance||20,h=b.options.times||5,i=b.duration||250;/show|hide/.test(e)&&d.push("opacity"),a.effects.save(c,d),c.show(),a.effects.createWrapper(c);var j=f=="up"||f=="down"?"top":"left",k=f=="up"||f=="left"?"pos":"neg",g=b.options.distance||(j=="top"?c.outerHeight(!0)/3:c.outerWidth(!0)/3);e=="show"&&c.css("opacity",0).css(j,k=="pos"?-g:g),e=="hide"&&(g=g/(h*2)),e!="hide"&&h--;if(e=="show"){var l={opacity:1};l[j]=(k=="pos"?"+=":"-=")+g,c.animate(l,i/2,b.options.easing),g=g/2,h--}for(var m=0;m<h;m++){var n={},p={};n[j]=(k=="pos"?"-=":"+=")+g,p[j]=(k=="pos"?"+=":"-=")+g,c.animate(n,i/2,b.options.easing).animate(p,i/2,b.options.easing),g=e=="hide"?g*2:g/2}if(e=="hide"){var l={opacity:0};l[j]=(k=="pos"?"-=":"+=")+g,c.animate(l,i/2,b.options.easing,function(){c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments)})}else{var n={},p={};n[j]=(k=="pos"?"-=":"+=")+g,p[j]=(k=="pos"?"+=":"-=")+g,c.animate(n,i/2,b.options.easing).animate(p,i/2,b.options.easing,function(){a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments)})}c.queue("fx",function(){c.dequeue()}),c.dequeue()})}}(jQuery),function(a,b){a.effects.clip=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right","height","width"],e=a.effects.setMode(c,b.options.mode||"hide"),f=b.options.direction||"vertical";a.effects.save(c,d),c.show();var g=a.effects.createWrapper(c).css({overflow:"hidden"}),h=c[0].tagName=="IMG"?g:c,i={size:f=="vertical"?"height":"width",position:f=="vertical"?"top":"left"},j=f=="vertical"?h.height():h.width();e=="show"&&(h.css(i.size,0),h.css(i.position,j/2));var k={};k[i.size]=e=="show"?j:0,k[i.position]=e=="show"?0:j/2,h.animate(k,{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){e=="hide"&&c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(c[0],arguments),c.dequeue()}})})}}(jQuery),function(a,b){a.effects.drop=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right","opacity"],e=a.effects.setMode(c,b.options.mode||"hide"),f=b.options.direction||"left";a.effects.save(c,d),c.show(),a.effects.createWrapper(c);var g=f=="up"||f=="down"?"top":"left",h=f=="up"||f=="left"?"pos":"neg",i=b.options.distance||(g=="top"?c.outerHeight(!0)/2:c.outerWidth(!0)/2);e=="show"&&c.css("opacity",0).css(g,h=="pos"?-i:i);var j={opacity:e=="show"?1:0};j[g]=(e=="show"?h=="pos"?"+=":"-=":h=="pos"?"-=":"+=")+i,c.animate(j,{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){e=="hide"&&c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments),c.dequeue()}})})}}(jQuery),function(a,b){a.effects.explode=function(b){return this.queue(function(){var c=b.options.pieces?Math.round(Math.sqrt(b.options.pieces)):3,d=b.options.pieces?Math.round(Math.sqrt(b.options.pieces)):3;b.options.mode=b.options.mode=="toggle"?a(this).is(":visible")?"hide":"show":b.options.mode;var e=a(this).show().css("visibility","hidden"),f=e.offset();f.top-=parseInt(e.css("marginTop"),10)||0,f.left-=parseInt(e.css("marginLeft"),10)||0;var g=e.outerWidth(!0),h=e.outerHeight(!0);for(var i=0;i<c;i++)for(var j=0;j<d;j++)e.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-j*(g/d),top:-i*(h/c)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:g/d,height:h/c,left:f.left+j*(g/d)+(b.options.mode=="show"?(j-Math.floor(d/2))*(g/d):0),top:f.top+i*(h/c)+(b.options.mode=="show"?(i-Math.floor(c/2))*(h/c):0),opacity:b.options.mode=="show"?0:1}).animate({left:f.left+j*(g/d)+(b.options.mode=="show"?0:(j-Math.floor(d/2))*(g/d)),top:f.top+i*(h/c)+(b.options.mode=="show"?0:(i-Math.floor(c/2))*(h/c)),opacity:b.options.mode=="show"?1:0},b.duration||500);setTimeout(function(){b.options.mode=="show"?e.css({visibility:"visible"}):e.css({visibility:"visible"}).hide(),b.callback&&b.callback.apply(e[0]),e.dequeue(),a("div.ui-effects-explode").remove()},b.duration||500)})}}(jQuery),function(a,b){a.effects.fade=function(b){return this.queue(function(){var c=a(this),d=a.effects.setMode(c,b.options.mode||"hide");c.animate({opacity:d},{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){b.callback&&b.callback.apply(this,arguments),c.dequeue()}})})}}(jQuery),function(a,b){a.effects.fold=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right"],e=a.effects.setMode(c,b.options.mode||"hide"),f=b.options.size||15,g=!!b.options.horizFirst,h=b.duration?b.duration/2:a.fx.speeds._default/2;a.effects.save(c,d),c.show();var i=a.effects.createWrapper(c).css({overflow:"hidden"}),j=e=="show"!=g,k=j?["width","height"]:["height","width"],l=j?[i.width(),i.height()]:[i.height(),i.width()],m=/([0-9]+)%/.exec(f);m&&(f=parseInt(m[1],10)/100*l[e=="hide"?0:1]),e=="show"&&i.css(g?{height:0,width:f}:{height:f,width:0});var n={},p={};n[k[0]]=e=="show"?l[0]:f,p[k[1]]=e=="show"?l[1]:0,i.animate(n,h,b.options.easing).animate(p,h,b.options.easing,function(){e=="hide"&&c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(c[0],arguments),c.dequeue()})})}}(jQuery),function(a,b){a.effects.highlight=function(b){return this.queue(function(){var c=a(this),d=["backgroundImage","backgroundColor","opacity"],e=a.effects.setMode(c,b.options.mode||"show"),f={backgroundColor:c.css("backgroundColor")};e=="hide"&&(f.opacity=0),a.effects.save(c,d),c.show().css({backgroundImage:"none",backgroundColor:b.options.color||"#ffff99"}).animate(f,{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){e=="hide"&&c.hide(),a.effects.restore(c,d),e=="show"&&!a.support.opacity&&this.style.removeAttribute("filter"),b.callback&&b.callback.apply(this,arguments),c.dequeue()}})})}}(jQuery),function(a,b){a.effects.pulsate=function(b){return this.queue(function(){var c=a(this),d=a.effects.setMode(c,b.options.mode||"show"),e=(b.options.times||5)*2-1,f=b.duration?b.duration/2:a.fx.speeds._default/2,g=c.is(":visible"),h=0;g||(c.css("opacity",0).show(),h=1),(d=="hide"&&g||d=="show"&&!g)&&e--;for(var i=0;i<e;i++)c.animate({opacity:h},f,b.options.easing),h=(h+1)%2;c.animate({opacity:h},f,b.options.easing,function(){h==0&&c.hide(),b.callback&&b.callback.apply(this,arguments)}),c.queue("fx",function(){c.dequeue()}).dequeue()})}}(jQuery),function(a,b){a.effects.puff=function(b){return this.queue(function(){var c=a(this),d=a.effects.setMode(c,b.options.mode||"hide"),e=parseInt(b.options.percent,10)||150,f=e/100,g={height:c.height(),width:c.width()};a.extend(b.options,{fade:!0,mode:d,percent:d=="hide"?e:100,from:d=="hide"?g:{height:g.height*f,width:g.width*f}}),c.effect("scale",b.options,b.duration,b.callback),c.dequeue()})},a.effects.scale=function(b){return this.queue(function(){var c=a(this),d=a.extend(!0,{},b.options),e=a.effects.setMode(c,b.options.mode||"effect"),f=parseInt(b.options.percent,10)||(parseInt(b.options.percent,10)==0?0:e=="hide"?0:100),g=b.options.direction||"both",h=b.options.origin;e!="effect"&&(d.origin=h||["middle","center"],d.restore=!0);var i={height:c.height(),width:c.width()};c.from=b.options.from||(e=="show"?{height:0,width:0}:i);var j={y:g!="horizontal"?f/100:1,x:g!="vertical"?f/100:1};c.to={height:i.height*j.y,width:i.width*j.x},b.options.fade&&(e=="show"&&(c.from.opacity=0,c.to.opacity=1),e=="hide"&&(c.from.opacity=1,c.to.opacity=0)),d.from=c.from,d.to=c.to,d.mode=e,c.effect("size",d,b.duration,b.callback),c.dequeue()})},a.effects.size=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right","width","height","overflow","opacity"],e=["position","top","bottom","left","right","overflow","opacity"],f=["width","height","overflow"],g=["fontSize"],h=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],i=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],j=a.effects.setMode(c,b.options.mode||"effect"),k=b.options.restore||!1,l=b.options.scale||"both",m=b.options.origin,n={height:c.height(),width:c.width()};c.from=b.options.from||n,c.to=b.options.to||n;if(m){var p=a.effects.getBaseline(m,n);c.from.top=(n.height-c.from.height)*p.y,c.from.left=(n.width-c.from.width)*p.x,c.to.top=(n.height-c.to.height)*p.y,c.to.left=(n.width-c.to.width)*p.x}var q={from:{y:c.from.height/n.height,x:c.from.width/n.width},to:{y:c.to.height/n.height,x:c.to.width/n.width}};if(l=="box"||l=="both")q.from.y!=q.to.y&&(d=d.concat(h),c.from=a.effects.setTransition(c,h,q.from.y,c.from),c.to=a.effects.setTransition(c,h,q.to.y,c.to)),q.from.x!=q.to.x&&(d=d.concat(i),c.from=a.effects.setTransition(c,i,q.from.x,c.from),c.to=a.effects.setTransition(c,i,q.to.x,c.to));(l=="content"||l=="both")&&q.from.y!=q.to.y&&(d=d.concat(g),c.from=a.effects.setTransition(c,g,q.from.y,c.from),c.to=a.effects.setTransition(c,g,q.to.y,c.to)),a.effects.save(c,k?d:e),c.show(),a.effects.createWrapper(c),c.css("overflow","hidden").css(c.from);if(l=="content"||l=="both")h=h.concat(["marginTop","marginBottom"]).concat(g),i=i.concat(["marginLeft","marginRight"]),f=d.concat(h).concat(i),c.find("*[width]").each(function(){var c=a(this);k&&a.effects.save(c,f);var d={height:c.height(),width:c.width()};c.from={height:d.height*q.from.y,width:d.width*q.from.x},c.to={height:d.height*q.to.y,width:d.width*q.to.x},q.from.y!=q.to.y&&(c.from=a.effects.setTransition(c,h,q.from.y,c.from),c.to=a.effects.setTransition(c,h,q.to.y,c.to)),q.from.x!=q.to.x&&(c.from=a.effects.setTransition(c,i,q.from.x,c.from),c.to=a.effects.setTransition(c,i,q.to.x,c.to)),c.css(c.from),c.animate(c.to,b.duration,b.options.easing,function(){k&&a.effects.restore(c,f)})});c.animate(c.to,{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){c.to.opacity===0&&c.css("opacity",c.from.opacity),j=="hide"&&c.hide(),a.effects.restore(c,k?d:e),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments),c.dequeue()}})})}}(jQuery),function(a,b){a.effects.shake=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right"],e=a.effects.setMode(c,b.options.mode||"effect"),f=b.options.direction||"left",g=b.options.distance||20,h=b.options.times||3,i=b.duration||b.options.duration||140;a.effects.save(c,d),c.show(),a.effects.createWrapper(c);var j=f=="up"||f=="down"?"top":"left",k=f=="up"||f=="left"?"pos":"neg",l={},m={},n={};l[j]=(k=="pos"?"-=":"+=")+g,m[j]=(k=="pos"?"+=":"-=")+g*2,n[j]=(k=="pos"?"-=":"+=")+g*2,c.animate(l,i,b.options.easing);for(var p=1;p<h;p++)c.animate(m,i,b.options.easing).animate(n,i,b.options.easing);c.animate(m,i,b.options.easing).animate(l,i/2,b.options.easing,function(){a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments)}),c.queue("fx",function(){c.dequeue()}),c.dequeue()})}}(jQuery),function(a,b){a.effects.slide=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right"],e=a.effects.setMode(c,b.options.mode||"show"),f=b.options.direction||"left";a.effects.save(c,d),c.show(),a.effects.createWrapper(c).css({overflow:"hidden"});var g=f=="up"||f=="down"?"top":"left",h=f=="up"||f=="left"?"pos":"neg",i=b.options.distance||(g=="top"?c.outerHeight(!0):c.outerWidth(!0));e=="show"&&c.css(g,h=="pos"?isNaN(i)?"-"+i:-i:i);var j={};j[g]=(e=="show"?h=="pos"?"+=":"-=":h=="pos"?"-=":"+=")+i,c.animate(j,{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){e=="hide"&&c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments),c.dequeue()}})})}}(jQuery),function(a,b){a.effects.transfer=function(b){return this.queue(function(){var c=a(this),d=a(b.options.to),e=d.offset(),f={top:e.top,left:e.left,height:d.innerHeight(),width:d.innerWidth()},g=c.offset(),h=a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(b.options.className).css({top:g.top,left:g.left,height:c.innerHeight(),width:c.innerWidth(),position:"absolute"}).animate(f,b.duration,b.options.easing,function(){h.remove(),b.callback&&b.callback.apply(c[0],arguments),c.dequeue()})})}}(jQuery),function(a,b){a.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:!0,clearStyle:!1,collapsible:!1,event:"click",fillSpace:!1,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:!1,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}},_create:function(){var b=this,c=b.options;b.running=0,b.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix"),b.headers=b.element.find(c.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){if(c.disabled)return;a(this).addClass("ui-state-hover")}).bind("mouseleave.accordion",function(){if(c.disabled)return;a(this).removeClass("ui-state-hover")}).bind("focus.accordion",function(){if(c.disabled)return;a(this).addClass("ui-state-focus")}).bind("blur.accordion",function(){if(c.disabled)return;a(this).removeClass("ui-state-focus")}),b.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");if(c.navigation){var d=b.element.find("a").filter(c.navigationFilter).eq(0);if(d.length){var e=d.closest(".ui-accordion-header");e.length?b.active=e:b.active=d.closest(".ui-accordion-content").prev()}}b.active=b._findActive(b.active||c.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top"),b.active.next().addClass("ui-accordion-content-active"),b._createIcons(),b.resize(),b.element.attr("role","tablist"),b.headers.attr("role","tab").bind("keydown.accordion",function(a){return b._keydown(a)}).next().attr("role","tabpanel"),b.headers.not(b.active||"").attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).next().hide(),b.active.length?b.active.attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}):b.headers.eq(0).attr("tabIndex",0),a.browser.safari||b.headers.find("a").attr("tabIndex",-1),c.event&&b.headers.bind(c.event.split(" ").join(".accordion ")+".accordion",function(a){b._clickHandler.call(b,a,this),a.preventDefault()})},_createIcons:function(){var b=this.options;b.icons&&(a("<span></span>").addClass("ui-icon "+b.icons.header).prependTo(this.headers),this.active.children(".ui-icon").toggleClass(b.icons.header).toggleClass(b.icons.headerSelected),this.element.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.children(".ui-icon").remove(),this.element.removeClass("ui-accordion-icons")},destroy:function(){var b=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex"),this.headers.find("a").removeAttr("tabIndex"),this._destroyIcons();var c=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");return(b.autoHeight||b.fillHeight)&&c.css("height",""),a.Widget.prototype.destroy.call(this)},_setOption:function(b,c){a.Widget.prototype._setOption.apply(this,arguments),b=="active"&&this.activate(c),b=="icons"&&(this._destroyIcons(),c&&this._createIcons()),b=="disabled"&&this.headers.add(this.headers.next())[c?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled")},_keydown:function(b){if(this.options.disabled||b.altKey||b.ctrlKey)return;var c=a.ui.keyCode,d=this.headers.length,e=this.headers.index(b.target),f=!1;switch(b.keyCode){case c.RIGHT:case c.DOWN:f=this.headers[(e+1)%d];break;case c.LEFT:case c.UP:f=this.headers[(e-1+d)%d];break;case c.SPACE:case c.ENTER:this._clickHandler({target:b.target},b.target),b.preventDefault()}return f?(a(b.target).attr("tabIndex",-1),a(f).attr("tabIndex",0),f.focus(),!1):!0},resize:function(){var b=this.options,c;if(b.fillSpace){if(a.browser.msie){var d=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")}c=this.element.parent().height(),a.browser.msie&&this.element.parent().css("overflow",d),this.headers.each(function(){c-=a(this).outerHeight(!0)}),this.headers.next().each(function(){a(this).height(Math.max(0,c-a(this).innerHeight()+a(this).height()))}).css("overflow","auto")}else b.autoHeight&&(c=0,this.headers.next().each(function(){c=Math.max(c,a(this).height("").height())}).height(c));return this},activate:function(a){this.options.active=a;var b=this._findActive(a)[0];return this._clickHandler({target:b},b),this},_findActive:function(b){return b?typeof b=="number"?this.headers.filter(":eq("+b+")"):this.headers.not(this.headers.not(b)):b===!1?a([]):this.headers.filter(":eq(0)")},_clickHandler:function(b,c){var d=this.options;if(d.disabled)return;if(!b.target){if(!d.collapsible)return;this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header),this.active.next().addClass("ui-accordion-content-active");var e=this.active.next(),f={options:d,newHeader:a([]),oldHeader:d.active,newContent:a([]),oldContent:e},g=this.active=a([]);this._toggle(g,e,f);return}var h=a(b.currentTarget||c),i=h[0]===this.active[0];d.active=d.collapsible&&i?!1:this.headers.index(h);if(this.running||!d.collapsible&&i)return;var j=this.active,g=h.next(),e=this.active.next(),f={options:d,newHeader:i&&d.collapsible?a([]):h,oldHeader:this.active,newContent:i&&d.collapsible?a([]):g,oldContent:e},k=this.headers.index(this.active[0])>this.headers.index(h[0]);this.active=i?a([]):h,this._toggle(g,e,f,i,k),j.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header),i||(h.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(d.icons.header).addClass(d.icons.headerSelected),h.next().addClass("ui-accordion-content-active"));return},_toggle:function(b,c,d,e,f){var g=this,h=g.options;g.toShow=b,g.toHide=c,g.data=d;var i=function(){if(!g)return;return g._completed.apply(g,arguments)};g._trigger("changestart",null,g.data),g.running=c.size()===0?b.size():c.size();if(h.animated){var j={};h.collapsible&&e?j={toShow:a([]),toHide:c,complete:i,down:f,autoHeight:h.autoHeight||h.fillSpace}:j={toShow:b,toHide:c,complete:i,down:f,autoHeight:h.autoHeight||h.fillSpace},h.proxied||(h.proxied=h.animated),h.proxiedDuration||(h.proxiedDuration=h.duration),h.animated=a.isFunction(h.proxied)?h.proxied(j):h.proxied,h.duration=a.isFunction(h.proxiedDuration)?h.proxiedDuration(j):h.proxiedDuration;var k=a.ui.accordion.animations,l=h.duration,m=h.animated;m&&!k[m]&&!a.easing[m]&&(m="slide"),k[m]||(k[m]=function(a){this.slide(a,{easing:m,duration:l||700})}),k[m](j)}else h.collapsible&&e?b.toggle():(c.hide(),b.show()),i(!0);c.prev().attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).blur(),b.prev().attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}).focus()},_completed:function(a){this.running=a?0:--this.running;if(this.running)return;this.options.clearStyle&&this.toShow.add(this.toHide).css({height:"",overflow:""}),this.toHide.removeClass("ui-accordion-content-active"),this.toHide.length&&(this.toHide.parent()[0].className=this.toHide.parent()[0].className),this._trigger("change",null,this.data)}}),a.extend(a.ui.accordion,{version:"1.8.23",animations:{slide:function(b,c){b=a.extend({easing:"swing",duration:300},b,c);if(!b.toHide.size()){b.toShow.animate({height:"show",paddingTop:"show",paddingBottom:"show"},b);return}if(!b.toShow.size()){b.toHide.animate({height:"hide",paddingTop:"hide",paddingBottom:"hide"},b);return}var d=b.toShow.css("overflow"),e=0,f={},g={},h=["height","paddingTop","paddingBottom"],i,j=b.toShow;i=j[0].style.width,j.width(j.parent().width()-parseFloat(j.css("paddingLeft"))-parseFloat(j.css("paddingRight"))-(parseFloat(j.css("borderLeftWidth"))||0)-(parseFloat(j.css("borderRightWidth"))||0)),a.each(h,function(c,d){g[d]="hide";var e=(""+a.css(b.toShow[0],d)).match(/^([\d+-.]+)(.*)$/);f[d]={value:e[1],unit:e[2]||"px"}}),b.toShow.css({height:0,overflow:"hidden"}).show(),b.toHide.filter(":hidden").each(b.complete).end().filter(":visible").animate(g,{step:function(a,c){c.prop=="height"&&(e=c.end-c.start===0?0:(c.now-c.start)/(c.end-c.start)),b.toShow[0].style[c.prop]=e*f[c.prop].value+f[c.prop].unit},duration:b.duration,easing:b.easing,complete:function(){b.autoHeight||b.toShow.css("height",""),b.toShow.css({width:i,overflow:d}),b.complete()}})},bounceslide:function(a){this.slide(a,{easing:a.down?"easeOutBounce":"swing",duration:a.down?1e3:200})}}})}(jQuery),function(a,b){var c=0;a.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var b=this,c=this.element[0].ownerDocument,d;this.isMultiLine=this.element.is("textarea"),this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(c){if(b.options.disabled||b.element.propAttr("readOnly"))return;d=!1;var e=a.ui.keyCode;switch(c.keyCode){case e.PAGE_UP:b._move("previousPage",c);break;case e.PAGE_DOWN:b._move("nextPage",c);break;case e.UP:b._keyEvent("previous",c);break;case e.DOWN:b._keyEvent("next",c);break;case e.ENTER:case e.NUMPAD_ENTER:b.menu.active&&(d=!0,c.preventDefault());case e.TAB:if(!b.menu.active)return;b.menu.select(c);break;case e.ESCAPE:b.element.val(b.term),b.close(c);break;default:clearTimeout(b.searching),b.searching=setTimeout(function(){b.term!=b.element.val()&&(b.selectedItem=null,b.search(null,c))},b.options.delay)}}).bind("keypress.autocomplete",function(a){d&&(d=!1,a.preventDefault())}).bind("focus.autocomplete",function(){if(b.options.disabled)return;b.selectedItem=null,b.previous=b.element.val()}).bind("blur.autocomplete",function(a){if(b.options.disabled)return;clearTimeout(b.searching),b.closing=setTimeout(function(){b.close(a),b._change(a)},150)}),this._initSource(),this.menu=a("<ul></ul>").addClass("ui-autocomplete").appendTo(a(this.options.appendTo||"body",c)[0]).mousedown(function(c){var d=b.menu.element[0];a(c.target).closest(".ui-menu-item").length||setTimeout(function(){a(document).one("mousedown",function(c){c.target!==b.element[0]&&c.target!==d&&!a.ui.contains(d,c.target)&&b.close()})},1),setTimeout(function(){clearTimeout(b.closing)},13)}).menu({focus:function(a,c){var d=c.item.data("item.autocomplete");!1!==b._trigger("focus",a,{item:d})&&/^key/.test(a.originalEvent.type)&&b.element.val(d.value)},selected:function(a,d){var e=d.item.data("item.autocomplete"),f=b.previous;b.element[0]!==c.activeElement&&(b.element.focus(),b.previous=f,setTimeout(function(){b.previous=f,b.selectedItem=e},1)),!1!==b._trigger("select",a,{item:e})&&b.element.val(e.value),b.term=b.element.val(),b.close(a),b.selectedItem=e},blur:function(a,c){b.menu.element.is(":visible")&&b.element.val()!==b.term&&b.element.val(b.term)}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu"),a.fn.bgiframe&&this.menu.element.bgiframe(),b.beforeunloadHandler=function(){b.element.removeAttr("autocomplete")},a(window).bind("beforeunload",b.beforeunloadHandler)},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"),this.menu.element.remove(),a(window).unbind("beforeunload",this.beforeunloadHandler),a.Widget.prototype.destroy.call(this)},_setOption:function(b,c){a.Widget.prototype._setOption.apply(this,arguments),b==="source"&&this._initSource(),b==="appendTo"&&this.menu.element.appendTo(a(c||"body",this.element[0].ownerDocument)[0]),b==="disabled"&&c&&this.xhr&&this.xhr.abort()},_initSource:function(){var b=this,c,d;a.isArray(this.options.source)?(c=this.options.source,this.source=function(b,d){d(a.ui.autocomplete.filter(c,b.term))}):typeof this.options.source=="string"?(d=this.options.source,this.source=function(c,e){b.xhr&&b.xhr.abort(),b.xhr=a.ajax({url:d,data:c,dataType:"json",success:function(a,b){e(a)},error:function(){e([])}})}):this.source=this.options.source},search:function(a,b){a=a!=null?a:this.element.val(),this.term=this.element.val();if(a.length<this.options.minLength)return this.close(b);clearTimeout(this.closing);if(this._trigger("search",b)===!1)return;return this._search(a)},_search:function(a){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.source({term:a},this._response())},_response:function(){var a=this,b=++c;return function(d){b===c&&a.__response(d),a.pending--,a.pending||a.element.removeClass("ui-autocomplete-loading")}},__response:function(a){!this.options.disabled&&a&&a.length?(a=this._normalize(a),this._suggest(a),this._trigger("open")):this.close()},close:function(a){clearTimeout(this.closing),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.deactivate(),this._trigger("close",a))},_change:function(a){this.previous!==this.element.val()&&this._trigger("change",a,{item:this.selectedItem})},_normalize:function(b){return b.length&&b[0].label&&b[0].value?b:a.map(b,function(b){return typeof b=="string"?{label:b,value:b}:a.extend({label:b.label||b.value,value:b.value||b.label},b)})},_suggest:function(b){var c=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(c,b),this.menu.deactivate(),this.menu.refresh(),c.show(),this._resizeMenu(),c.position(a.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(new a.Event("mouseover"))},_resizeMenu:function(){var a=this.menu.element;a.outerWidth(Math.max(a.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(b,c){var d=this;a.each(c,function(a,c){d._renderItem(b,c)})},_renderItem:function(b,c){return a("<li></li>").data("item.autocomplete",c).append(a("<a></a>").text(c.label)).appendTo(b)},_move:function(a,b){if(!this.menu.element.is(":visible")){this.search(null,b);return}if(this.menu.first()&&/^previous/.test(a)||this.menu.last()&&/^next/.test(a)){this.element.val(this.term),this.menu.deactivate();return}this.menu[a](b)},widget:function(){return this.menu.element},_keyEvent:function(a,b){if(!this.isMultiLine||this.menu.element.is(":visible"))this._move(a,b),b.preventDefault()}}),a.extend(a.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},filter:function(b,c){var d=new RegExp(a.ui.autocomplete.escapeRegex(c),"i");return a.grep(b,function(a){return d.test(a.label||a.value||a)})}})}(jQuery),function(a){a.widget("ui.menu",{_create:function(){var b=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(c){if(!a(c.target).closest(".ui-menu-item a").length)return;c.preventDefault(),b.select(c)}),this.refresh()},refresh:function(){var b=this,c=this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem");c.children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(c){b.activate(c,a(this).parent())}).mouseleave(function(){b.deactivate()})},activate:function(a,b){this.deactivate();if(this.hasScroll()){var c=b.offset().top-this.element.offset().top,d=this.element.scrollTop(),e=this.element.height();c<0?this.element.scrollTop(d+c):c>=e&&this.element.scrollTop(d+c-e+b.height())}this.active=b.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end(),this._trigger("focus",a,{item:b})},deactivate:function(){if(!this.active)return;this.active.children("a").removeClass("ui-state-hover").removeAttr("id"),this._trigger("blur"),this.active=null},next:function(a){this.move("next",".ui-menu-item:first",a)},previous:function(a){this.move("prev",".ui-menu-item:last",a)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(a,b,c){if(!this.active){this.activate(c,this.element.children(b));return}var d=this.active[a+"All"](".ui-menu-item").eq(0);d.length?this.activate(c,d):this.activate(c,this.element.children(b))},nextPage:function(b){if(this.hasScroll()){if(!this.active||this.last()){this.activate(b,this.element.children(".ui-menu-item:first"));return}var c=this.active.offset().top,d=this.element.height(),e=this.element.children(".ui-menu-item").filter(function(){var b=a(this).offset().top-c-d+a(this).height();return b<10&&b>-10});e.length||(e=this.element.children(".ui-menu-item:last")),this.activate(b,e)}else this.activate(b,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))},previousPage:function(b){if(this.hasScroll()){if(!this.active||this.first()){this.activate(b,this.element.children(".ui-menu-item:last"));return}var c=this.active.offset().top,d=this.element.height(),e=this.element.children(".ui-menu-item").filter(function(){var b=a(this).offset().top-c+d-a(this).height();return b<10&&b>-10});e.length||(e=this.element.children(".ui-menu-item:first")),this.activate(b,e)}else this.activate(b,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))},hasScroll:function(){return this.element.height()<this.element[a.fn.prop?"prop":"attr"]("scrollHeight")},select:function(a){this._trigger("selected",a,{item:this.active})}})}(jQuery),function(a,b){var c,d,e,f,g="ui-button ui-widget ui-state-default ui-corner-all",h="ui-state-hover ui-state-active ",i="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",j=function(){var b=a(this).find(":ui-button");setTimeout(function(){b.button("refresh")},1)},k=function(b){var c=b.name,d=b.form,e=a([]);return c&&(d?e=a(d).find("[name='"+c+"']"):e=a("[name='"+c+"']",b.ownerDocument).filter(function(){return!this.form})),e};a.widget("ui.button",{options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",j),typeof this.options.disabled!="boolean"?this.options.disabled=!!this.element.propAttr("disabled"):this.element.propAttr("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var b=this,h=this.options,i=this.type==="checkbox"||this.type==="radio",l="ui-state-hover"+(i?"":" ui-state-active"),m="ui-state-focus";h.label===null&&(h.label=this.buttonElement.html()),this.buttonElement.addClass(g).attr("role","button").bind("mouseenter.button",function(){if(h.disabled)return;a(this).addClass("ui-state-hover"),this===c&&a(this).addClass("ui-state-active")}).bind("mouseleave.button",function(){if(h.disabled)return;a(this).removeClass(l)}).bind("click.button",function(a){h.disabled&&(a.preventDefault(),a.stopImmediatePropagation())}),this.element.bind("focus.button",function(){b.buttonElement.addClass(m)}).bind("blur.button",function(){b.buttonElement.removeClass(m)}),i&&(this.element.bind("change.button",function(){if(f)return;b.refresh()}),this.buttonElement.bind("mousedown.button",function(a){if(h.disabled)return;f=!1,d=a.pageX,e=a.pageY}).bind("mouseup.button",function(a){if(h.disabled)return;if(d!==a.pageX||e!==a.pageY)f=!0})),this.type==="checkbox"?this.buttonElement.bind("click.button",function(){if(h.disabled||f)return!1;a(this).toggleClass("ui-state-active"),b.buttonElement.attr("aria-pressed",b.element[0].checked)}):this.type==="radio"?this.buttonElement.bind("click.button",function(){if(h.disabled||f)return!1;a(this).addClass("ui-state-active"),b.buttonElement.attr("aria-pressed","true");var c=b.element[0];k(c).not(c).map(function(){return a(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown.button",function(){if(h.disabled)return!1;a(this).addClass("ui-state-active"),c=this,a(document).one("mouseup",function(){c=null})}).bind("mouseup.button",function(){if(h.disabled)return!1;a(this).removeClass("ui-state-active")}).bind("keydown.button",function(b){if(h.disabled)return!1;(b.keyCode==a.ui.keyCode.SPACE||b.keyCode==a.ui.keyCode.ENTER)&&a(this).addClass("ui-state-active")}).bind("keyup.button",function(){a(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(b){b.keyCode===a.ui.keyCode.SPACE&&a(this).click()})),this._setOption("disabled",h.disabled),this._resetButton()},_determineButtonType:function(){this.element.is(":checkbox")?this.type="checkbox":this.element.is(":radio")?this.type="radio":this.element.is("input")?this.type="input":this.type="button";if(this.type==="checkbox"||this.type==="radio"){var a=this.element.parents().filter(":last"),b="label[for='"+this.element.attr("id")+"']";this.buttonElement=a.find(b),this.buttonElement.length||(a=a.length?a.siblings():this.element.siblings(),this.buttonElement=a.filter(b),this.buttonElement.length||(this.buttonElement=a.find(b))),this.element.addClass("ui-helper-hidden-accessible");var c=this.element.is(":checked");c&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.attr("aria-pressed",c)}else this.buttonElement=this.element},widget:function(){return this.buttonElement},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(g+" "+h+" "+i).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title"),a.Widget.prototype.destroy.call(this)},_setOption:function(b,c){a.Widget.prototype._setOption.apply(this,arguments);if(b==="disabled"){c?this.element.propAttr("disabled",!0):this.element.propAttr("disabled",!1);return}this._resetButton()},refresh:function(){var b=this.element.is(":disabled");b!==this.options.disabled&&this._setOption("disabled",b),this.type==="radio"?k(this.element[0]).each(function(){a(this).is(":checked")?a(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):this.type==="checkbox"&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if(this.type==="input"){this.options.label&&this.element.val(this.options.label);return}var b=this.buttonElement.removeClass(i),c=a("<span></span>",this.element[0].ownerDocument).addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),d=this.options.icons,e=d.primary&&d.secondary,f=[];d.primary||d.secondary?(this.options.text&&f.push("ui-button-text-icon"+(e?"s":d.primary?"-primary":"-secondary")),d.primary&&b.prepend("<span class='ui-button-icon-primary ui-icon "+d.primary+"'></span>"),d.secondary&&b.append("<span class='ui-button-icon-secondary ui-icon "+d.secondary+"'></span>"),this.options.text||(f.push(e?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||b.attr("title",c))):f.push("ui-button-text-only"),b.addClass(f.join(" "))}}),a.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(b,c){b==="disabled"&&this.buttons.button("option",b,c),a.Widget.prototype._setOption.apply(this,arguments)},refresh:function(){var b=this.element.css("direction")==="rtl";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(b?"ui-corner-left":"ui-corner-right").end().end()},destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy"),a.Widget.prototype.destroy.call(this)}})}(jQuery),function($,undefined){function Datepicker(){this.debug=!1,this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},$.extend(this._defaults,this.regional[""]),this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}function bindHover(a){var b="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return a.bind("mouseout",function(a){var c=$(a.target).closest(b);if(!c.length)return;c.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")}).bind("mouseover",function(c){var d=$(c.target).closest(b);if($.datepicker._isDisabledDatepicker(instActive.inline?a.parent()[0]:instActive.input[0])||!d.length)return;d.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),d.addClass("ui-state-hover"),d.hasClass("ui-datepicker-prev")&&d.addClass("ui-datepicker-prev-hover"),d.hasClass("ui-datepicker-next")&&d.addClass("ui-datepicker-next-hover")})}function extendRemove(a,b){$.extend(a,b);for(var c in b)if(b[c]==null||b[c]==undefined)a[c]=b[c];return a}function isArray(a){return a&&($.browser.safari&&typeof a=="object"&&a.length||a.constructor&&a.constructor.toString().match(/\Array\(\)/))}$.extend($.ui,{datepicker:{version:"1.8.23"}});var PROP_NAME="datepicker",dpuuid=(new Date).getTime(),instActive;$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){return extendRemove(this._defaults,a||{}),this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase(),inline=nodeName=="div"||nodeName=="span";target.id||(this.uuid+=1,target.id="dp"+this.uuid);var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{}),nodeName=="input"?this._connectDatepicker(target,inst):inline&&this._inlineDatepicker(target,inst)},_newInst:function(a,b){var c=a[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:c,input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:b,dpDiv:b?bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')):this.dpDiv}},_connectDatepicker:function(a,b){var c=$(a);b.append=$([]),b.trigger=$([]);if(c.hasClass(this.markerClassName))return;this._attachments(c,b),c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),this._autoSize(b),$.data(a,PROP_NAME,b),b.settings.disabled&&this._disableDatepicker(a)},_attachments:function(a,b){var c=this._get(b,"appendText"),d=this._get(b,"isRTL");b.append&&b.append.remove(),c&&(b.append=$('<span class="'+this._appendClass+'">'+c+"</span>"),a[d?"before":"after"](b.append)),a.unbind("focus",this._showDatepicker),b.trigger&&b.trigger.remove();var e=this._get(b,"showOn");(e=="focus"||e=="both")&&a.focus(this._showDatepicker);if(e=="button"||e=="both"){var f=this._get(b,"buttonText"),g=this._get(b,"buttonImage");b.trigger=$(this._get(b,"buttonImageOnly")?$("<~/img/>").addClass(this._triggerClass).attr({src:g,alt:f,title:f}):$('<button type="button"></button>').addClass(this._triggerClass).html(g==""?f:$("<~/img/>").attr({src:g,alt:f,title:f}))),a[d?"before":"after"](b.trigger),b.trigger.click(function(){return $.datepicker._datepickerShowing&&$.datepicker._lastInput==a[0]?$.datepicker._hideDatepicker():$.datepicker._datepickerShowing&&$.datepicker._lastInput!=a[0]?($.datepicker._hideDatepicker(),$.datepicker._showDatepicker(a[0])):$.datepicker._showDatepicker(a[0]),!1})}},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b=new Date(2009,11,20),c=this._get(a,"dateFormat");if(c.match(/[DM]/)){var d=function(a){var b=0,c=0;for(var d=0;d<a.length;d++)a[d].length>b&&(b=a[d].length,c=d);return c};b.setMonth(d(this._get(a,c.match(/MM/)?"monthNames":"monthNamesShort"))),b.setDate(d(this._get(a,c.match(/DD/)?"dayNames":"dayNamesShort"))+20-b.getDay())}a.input.attr("size",this._formatDate(a,b).length)}},_inlineDatepicker:function(a,b){var c=$(a);if(c.hasClass(this.markerClassName))return;c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker",function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),$.data(a,PROP_NAME,b),this._setDate(b,this._getDefaultDate(b),!0),this._updateDatepicker(b),this._updateAlternate(b),b.settings.disabled&&this._disableDatepicker(a),b.dpDiv.css("display","block")},_dialogDatepicker:function(a,b,c,d,e){var f=this._dialogInst;if(!f){this.uuid+=1;var g="dp"+this.uuid;this._dialogInput=$('<input type="text" id="'+g+'" style="position: absolute; top: -100px; width: 0px;"/>'),this._dialogInput.keydown(this._doKeyDown),$("body").append(this._dialogInput),f=this._dialogInst=this._newInst(this._dialogInput,!1),f.settings={},$.data(this._dialogInput[0],PROP_NAME,f)}extendRemove(f.settings,d||{}),b=b&&b.constructor==Date?this._formatDate(f,b):b,this._dialogInput.val(b),this._pos=e?e.length?e:[e.pageX,e.pageY]:null;if(!this._pos){var h=document.documentElement.clientWidth,i=document.documentElement.clientHeight,j=document.documentElement.scrollLeft||document.body.scrollLeft,k=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[h/2-100+j,i/2-150+k]}return this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),f.settings.onSelect=c,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),$.blockUI&&$.blockUI(this.dpDiv),$.data(this._dialogInput[0],PROP_NAME,f),this},_destroyDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!b.hasClass(this.markerClassName))return;var d=a.nodeName.toLowerCase();$.removeData(a,PROP_NAME),d=="input"?(c.append.remove(),c.trigger.remove(),b.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):(d=="div"||d=="span")&&b.removeClass(this.markerClassName).empty()},_enableDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!b.hasClass(this.markerClassName))return;var d=a.nodeName.toLowerCase();if(d=="input")a.disabled=!1,c.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""});else if(d=="div"||d=="span"){var e=b.children("."+this._inlineClass);e.children().removeClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")}this._disabledInputs=$.map(this._disabledInputs,function(b){return b==a?null:b})},_disableDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!b.hasClass(this.markerClassName))return;var d=a.nodeName.toLowerCase();if(d=="input")a.disabled=!0,c.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"});else if(d=="div"||d=="span"){var e=b.children("."+this._inlineClass);e.children().addClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled","disabled")}this._disabledInputs=$.map(this._disabledInputs,function(b){return b==a?null:b}),this._disabledInputs[this._disabledInputs.length]=a},_isDisabledDatepicker:function(a){if(!a)return!1;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]==a)return!0;return!1},_getInst:function(a){try{return $.data(a,PROP_NAME)}catch(b){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(a,b,c){var d=this._getInst(a);if(arguments.length==2&&typeof b=="string")return b=="defaults"?$.extend({},$.datepicker._defaults):d?b=="all"?$.extend({},d.settings):this._get(d,b):null;var e=b||{};typeof b=="string"&&(e={},e[b]=c);if(d){this._curInst==d&&this._hideDatepicker();var f=this._getDateDatepicker(a,!0),g=this._getMinMaxDate(d,"min"),h=this._getMinMaxDate(d,"max");extendRemove(d.settings,e),g!==null&&e.dateFormat!==undefined&&e.minDate===undefined&&(d.settings.minDate=this._formatDate(d,g)),h!==null&&e.dateFormat!==undefined&&e.maxDate===undefined&&(d.settings.maxDate=this._formatDate(d,h)),this._attachments($(a),d),this._autoSize(d),this._setDate(d,f),this._updateAlternate(d),this._updateDatepicker(d)}},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){var b=this._getInst(a);b&&this._updateDatepicker(b)},_setDateDatepicker:function(a,b){var c=this._getInst(a);c&&(this._setDate(c,b),this._updateDatepicker(c),this._updateAlternate(c))},_getDateDatepicker:function(a,b){var c=this._getInst(a);return c&&!c.inline&&this._setDateFromField(c,b),c?this._getDate(c):null},_doKeyDown:function(a){var b=$.datepicker._getInst(a.target),c=!0,d=b.dpDiv.is(".ui-datepicker-rtl");b._keyEvent=!0;if($.datepicker._datepickerShowing)switch(a.keyCode){case 9:$.datepicker._hideDatepicker(),c=!1;break;case 13:var e=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",b.dpDiv);e[0]&&$.datepicker._selectDay(a.target,b.selectedMonth,b.selectedYear,e[0]);var f=$.datepicker._get(b,"onSelect");if(f){var g=$.datepicker._formatDate(b);f.apply(b.input?b.input[0]:null,[g,b])}else $.datepicker._hideDatepicker();return!1;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(a.target,a.ctrlKey?-$.datepicker._get(b,"stepBigMonths"):-$.datepicker._get(b,"stepMonths"),"M");break;case 34:$.datepicker._adjustDate(a.target,a.ctrlKey?+$.datepicker._get(b,"stepBigMonths"):+$.datepicker._get(b,"stepMonths"),"M");break;case 35:(a.ctrlKey||a.metaKey)&&$.datepicker._clearDate(a.target),c=a.ctrlKey||a.metaKey;break;case 36:(a.ctrlKey||a.metaKey)&&$.datepicker._gotoToday(a.target),c=a.ctrlKey||a.metaKey;break;case 37:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,d?1:-1,"D"),c=a.ctrlKey||a.metaKey,a.originalEvent.altKey&&$.datepicker._adjustDate(a.target,a.ctrlKey?-$.datepicker._get(b,"stepBigMonths"):-$.datepicker._get(b,"stepMonths"),"M");break;case 38:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,-7,"D"),c=a.ctrlKey||a.metaKey;break;case 39:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,d?-1:1,"D"),c=a.ctrlKey||a.metaKey,a.originalEvent.altKey&&$.datepicker._adjustDate(a.target,a.ctrlKey?+$.datepicker._get(b,"stepBigMonths"):+$.datepicker._get(b,"stepMonths"),"M");break;case 40:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,7,"D"),c=a.ctrlKey||a.metaKey;break;default:c=!1}else a.keyCode==36&&a.ctrlKey?$.datepicker._showDatepicker(this):c=!1;c&&(a.preventDefault(),a.stopPropagation())},_doKeyPress:function(a){var b=$.datepicker._getInst(a.target);if($.datepicker._get(b,"constrainInput")){var c=$.datepicker._possibleChars($.datepicker._get(b,"dateFormat")),d=String.fromCharCode(a.charCode==undefined?a.keyCode:a.charCode);return a.ctrlKey||a.metaKey||d<" "||!c||c.indexOf(d)>-1}},_doKeyUp:function(a){var b=$.datepicker._getInst(a.target);if(b.input.val()!=b.lastVal)try{var c=$.datepicker.parseDate($.datepicker._get(b,"dateFormat"),b.input?b.input.val():null,$.datepicker._getFormatConfig(b));c&&($.datepicker._setDateFromField(b),$.datepicker._updateAlternate(b),$.datepicker._updateDatepicker(b))}catch(d){$.datepicker.log(d)}return!0},_showDatepicker:function(a){a=a.target||a,a.nodeName.toLowerCase()!="input"&&(a=$("input",a.parentNode)[0]);if($.datepicker._isDisabledDatepicker(a)||$.datepicker._lastInput==a)return;var b=$.datepicker._getInst(a);$.datepicker._curInst&&$.datepicker._curInst!=b&&($.datepicker._curInst.dpDiv.stop(!0,!0),b&&$.datepicker._datepickerShowing&&$.datepicker._hideDatepicker($.datepicker._curInst.input[0]));var c=$.datepicker._get(b,"beforeShow"),d=c?c.apply(a,[a,b]):{};if(d===!1)return;extendRemove(b.settings,d),b.lastVal=null,$.datepicker._lastInput=a,$.datepicker._setDateFromField(b),$.datepicker._inDialog&&(a.value=""),$.datepicker._pos||($.datepicker._pos=$.datepicker._findPos(a),$.datepicker._pos[1]+=a.offsetHeight);var e=!1;$(a).parents().each(function(){return e|=$(this).css("position")=="fixed",!e}),e&&$.browser.opera&&($.datepicker._pos[0]-=document.documentElement.scrollLeft,$.datepicker._pos[1]-=document.documentElement.scrollTop);var f={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null,b.dpDiv.empty(),b.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),$.datepicker._updateDatepicker(b),f=$.datepicker._checkOffset(b,f,e),b.dpDiv.css({position:$.datepicker._inDialog&&$.blockUI?"static":e?"fixed":"absolute",display:"none",left:f.left+"px",top:f.top+"px"});if(!b.inline){var g=$.datepicker._get(b,"showAnim"),h=$.datepicker._get(b,"duration"),i=function(){var a=b.dpDiv.find("iframe.ui-datepicker-cover");if(!!a.length){var c=$.datepicker._getBorders(b.dpDiv);a.css({left:-c[0],top:-c[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()})}};b.dpDiv.zIndex($(a).zIndex()+1),$.datepicker._datepickerShowing=!0,$.effects&&$.effects[g]?b.dpDiv.show(g,$.datepicker._get(b,"showOptions"),h,i):b.dpDiv[g||"show"](g?h:null,i),(!g||!h)&&i(),b.input.is(":visible")&&!b.input.is(":disabled")&&b.input.focus(),$.datepicker._curInst=b}},_updateDatepicker:function(a){var b=this;b.maxRows=4;var c=$.datepicker._getBorders(a.dpDiv);instActive=a,a.dpDiv.empty().append(this._generateHTML(a)),this._attachHandlers(a);var d=a.dpDiv.find("iframe.ui-datepicker-cover");!d.length||d.css({left:-c[0],top:-c[1],width:a.dpDiv.outerWidth(),height:a.dpDiv.outerHeight()}),a.dpDiv.find("."+this._dayOverClass+" a").mouseover();var e=this._getNumberOfMonths(a),f=e[1],g=17;a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),f>1&&a.dpDiv.addClass("ui-datepicker-multi-"+f).css("width",g*f+"em"),a.dpDiv[(e[0]!=1||e[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi"),a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),a==$.datepicker._curInst&&$.datepicker._datepickerShowing&&a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&a.input[0]!=document.activeElement&&a.input.focus();if(a.yearshtml){var h=a.yearshtml;setTimeout(function(){h===a.yearshtml&&a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml),h=a.yearshtml=null},0)}},_getBorders:function(a){var b=function(a){return{thin:1,medium:2,thick:3}[a]||a};return[parseFloat(b(a.css("border-left-width"))),parseFloat(b(a.css("border-top-width")))]},_checkOffset:function(a,b,c){var d=a.dpDiv.outerWidth(),e=a.dpDiv.outerHeight(),f=a.input?a.input.outerWidth():0,g=a.input?a.input.outerHeight():0,h=document.documentElement.clientWidth+(c?0:$(document).scrollLeft()),i=document.documentElement.clientHeight+(c?0:$(document).scrollTop());return b.left-=this._get(a,"isRTL")?d-f:0,b.left-=c&&b.left==a.input.offset().left?$(document).scrollLeft():0,b.top-=c&&b.top==a.input.offset().top+g?$(document).scrollTop():0,b.left-=Math.min(b.left,b.left+d>h&&h>d?Math.abs(b.left+d-h):0),b.top-=Math.min(b.top,b.top+e>i&&i>e?Math.abs(e+g):0),b},_findPos:function(a){var b=this._getInst(a),c=this._get(b,"isRTL");while(a&&(a.type=="hidden"||a.nodeType!=1||$.expr.filters.hidden(a)))a=a[c?"previousSibling":"nextSibling"];var d=$(a).offset();return[d.left,d.top]},_hideDatepicker:function(a){var b=this._curInst;if(!b||a&&b!=$.data(a,PROP_NAME))return;if(this._datepickerShowing){var c=this._get(b,"showAnim"),d=this._get(b,"duration"),e=function(){$.datepicker._tidyDialog(b)};$.effects&&$.effects[c]?b.dpDiv.hide(c,$.datepicker._get(b,"showOptions"),d,e):b.dpDiv[c=="slideDown"?"slideUp":c=="fadeIn"?"fadeOut":"hide"](c?d:null,e),c||e(),this._datepickerShowing=!1;var f=this._get(b,"onClose");f&&f.apply(b.input?b.input[0]:null,[b.input?b.input.val():"",b]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),$.blockUI&&($.unblockUI(),$("body").append(this.dpDiv))),this._inDialog=!1}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(a){if(!$.datepicker._curInst)return;var b=$(a.target),c=$.datepicker._getInst(b[0]);(b[0].id!=$.datepicker._mainDivId&&b.parents("#"+$.datepicker._mainDivId).length==0&&!b.hasClass($.datepicker.markerClassName)&&!b.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&(!$.datepicker._inDialog||!$.blockUI)||b.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=c)&&$.datepicker._hideDatepicker()},_adjustDate:function(a,b,c){var d=$(a),e=this._getInst(d[0]);if(this._isDisabledDatepicker(d[0]))return;this._adjustInstDate(e,b+(c=="M"?this._get(e,"showCurrentAtPos"):0),c),this._updateDatepicker(e)},_gotoToday:function(a){var b=$(a),c=this._getInst(b[0]);if(this._get(c,"gotoCurrent")&&c.currentDay)c.selectedDay=c.currentDay,c.drawMonth=c.selectedMonth=c.currentMonth,c.drawYear=c.selectedYear=c.currentYear;else{var d=new Date;c.selectedDay=d.getDate(),c.drawMonth=c.selectedMonth=d.getMonth(),c.drawYear=c.selectedYear=d.getFullYear()}this._notifyChange(c),this._adjustDate(b)},_selectMonthYear:function(a,b,c){var d=$(a),e=this._getInst(d[0]);e["selected"+(c=="M"?"Month":"Year")]=e["draw"+(c=="M"?"Month":"Year")]=parseInt(b.options[b.selectedIndex].value,10),this._notifyChange(e),this._adjustDate(d)},_selectDay:function(a,b,c,d){var e=$(a);if($(d).hasClass(this._unselectableClass)||this._isDisabledDatepicker(e[0]))return;var f=this._getInst(e[0]);f.selectedDay=f.currentDay=$("a",d).html(),f.selectedMonth=f.currentMonth=b,f.selectedYear=f.currentYear=c,this._selectDate(a,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear))},_clearDate:function(a){var b=$(a),c=this._getInst(b[0]);this._selectDate(b,"")},_selectDate:function(a,b){var c=$(a),d=this._getInst(c[0]);b=b!=null?b:this._formatDate(d),d.input&&d.input.val(b),this._updateAlternate(d);var e=this._get(d,"onSelect");e?e.apply(d.input?d.input[0]:null,[b,d]):d.input&&d.input.trigger("change"),d.inline?this._updateDatepicker(d):(this._hideDatepicker(),this._lastInput=d.input[0],typeof d.input[0]!="object"&&d.input.focus(),this._lastInput=null)},_updateAlternate:function(a){var b=this._get(a,"altField");if(b){var c=this._get(a,"altFormat")||this._get(a,"dateFormat"),d=this._getDate(a),e=this.formatDate(c,d,this._getFormatConfig(a));$(b).each(function(){$(this).val(e)})}},noWeekends:function(a){var b=a.getDay();return[b>0&&b<6,""]},iso8601Week:function(a){var b=new Date(a.getTime());b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1},parseDate:function(a,b,c){if(a==null||b==null)throw"Invalid arguments";b=typeof b=="object"?b.toString():b+"";if(b=="")return null;var d=(c?c.shortYearCutoff:null)||this._defaults.shortYearCutoff;d=typeof d!="string"?d:(new Date).getFullYear()%100+parseInt(d,10);var e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,g=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,h=(c?c.monthNames:null)||this._defaults.monthNames,i=-1,j=-1,k=-1,l=-1,m=!1,n=function(b){var c=s+1<a.length&&a.charAt(s+1)==b;return c&&s++,c},o=function(a){var c=n(a),d=a=="@"?14:a=="!"?20:a=="y"&&c?4:a=="o"?3:2,e=new RegExp("^\\d{1,"+d+"}"),f=b.substring(r).match(e);if(!f)throw"Missing number at position "+r;return r+=f[0].length,parseInt(f[0],10)},p=function(a,c,d){var e=$.map(n(a)?d:c,function(a,b){return[[b,a]]}).sort(function(a,b){return-(a[1].length-b[1].length)}),f=-1;$.each(e,function(a,c){var d=c[1];if(b.substr(r,d.length).toLowerCase()==d.toLowerCase())return f=c[0],r+=d.length,!1});if(f!=-1)return f+1;throw"Unknown name at position "+r},q=function(){if(b.charAt(r)!=a.charAt(s))throw"Unexpected literal at position "+r;r++},r=0;for(var s=0;s<a.length;s++)if(m)a.charAt(s)=="'"&&!n("'")?m=!1:q();else switch(a.charAt(s)){case"d":k=o("d");break;case"D":p("D",e,f);break;case"o":l=o("o");break;case"m":j=o("m");break;case"M":j=p("M",g,h);break;case"y":i=o("y");break;case"@":var t=new Date(o("@"));i=t.getFullYear(),j=t.getMonth()+1,k=t.getDate();break;case"!":var t=new Date((o("!")-this._ticksTo1970)/1e4);i=t.getFullYear(),j=t.getMonth()+1,k=t.getDate();break;case"'":n("'")?q():m=!0;break;default:q()}if(r<b.length)throw"Extra/unparsed characters found in date: "+b.substring(r);i==-1?i=(new Date).getFullYear():i<100&&(i+=(new Date).getFullYear()-(new Date).getFullYear()%100+(i<=d?0:-100));if(l>-1){j=1,k=l;do{var u=this._getDaysInMonth(i,j-1);if(k<=u)break;j++,k-=u}while(!0)}var t=this._daylightSavingAdjust(new Date(i,j-1,k));if(t.getFullYear()!=i||t.getMonth()+1!=j||t.getDate()!=k)throw"Invalid date";return t},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1e7,formatDate:function(a,b,c){if(!b)return"";var d=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,e=(c?c.dayNames:null)||this._defaults.dayNames,f=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,g=(c?c.monthNames:null)||this._defaults.monthNames,h=function(b){var c=m+1<a.length&&a.charAt(m+1)==b;return c&&m++,c},i=function(a,b,c){var d=""+b;if(h(a))while(d.length<c)d="0"+d;return d},j=function(a,b,c,d){return h(a)?d[b]:c[b]},k="",l=!1;if(b)for(var m=0;m<a.length;m++)if(l)a.charAt(m)=="'"&&!h("'")?l=!1:k+=a.charAt(m);else switch(a.charAt(m)){case"d":k+=i("d",b.getDate(),2);break;case"D":k+=j("D",b.getDay(),d,e);break;case"o":k+=i("o",Math.round(((new Date(b.getFullYear(),b.getMonth(),b.getDate())).getTime()-(new Date(b.getFullYear(),0,0)).getTime())/864e5),3);break;case"m":k+=i("m",b.getMonth()+1,2);break;case"M":k+=j("M",b.getMonth(),f,g);break;case"y":k+=h("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;break;case"@":k+=b.getTime();break;case"!":k+=b.getTime()*1e4+this._ticksTo1970;break;case"'":h("'")?k+="'":l=!0;break;default:k+=a.charAt(m)}return k},_possibleChars:function(a){var b="",c=!1,d=function(b){var c=e+1<a.length&&a.charAt(e+1)==b;return c&&e++,c};for(var e=0;e<a.length;e++)if(c)a.charAt(e)=="'"&&!d("'")?c=!1:b+=a.charAt(e);else switch(a.charAt(e)){case"d":case"m":case"y":case"@":b+="0123456789";break;case"D":case"M":return null;case"'":d("'")?b+="'":c=!0;break;default:b+=a.charAt(e)}return b},_get:function(a,b){return a.settings[b]!==undefined?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()==a.lastVal)return;var c=this._get(a,"dateFormat"),d=a.lastVal=a.input?a.input.val():null,e,f;e=f=this._getDefaultDate(a);var g=this._getFormatConfig(a);try{e=this.parseDate(c,d,g)||f}catch(h){this.log(h),d=b?"":d}a.selectedDay=e.getDate(),a.drawMonth=a.selectedMonth=e.getMonth(),a.drawYear=a.selectedYear=e.getFullYear(),a.currentDay=d?e.getDate():0,a.currentMonth=d?e.getMonth():0,a.currentYear=d?e.getFullYear():0,this._adjustInstDate(a)},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(a,b,c){var d=function(a){var b=new Date;return b.setDate(b.getDate()+a),b},e=function(b){try{return $.datepicker.parseDate($.datepicker._get(a,"dateFormat"),b,$.datepicker._getFormatConfig(a))}catch(c){}var d=(b.toLowerCase().match(/^c/)?$.datepicker._getDate(a):null)||new Date,e=d.getFullYear(),f=d.getMonth(),g=d.getDate(),h=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,i=h.exec(b);while(i){switch(i[2]||"d"){case"d":case"D":g+=parseInt(i[1],10);break;case"w":case"W":g+=parseInt(i[1],10)*7;break;case"m":case"M":f+=parseInt(i[1],10),g=Math.min(g,$.datepicker._getDaysInMonth(e,f));break;case"y":case"Y":e+=parseInt(i[1],10),g=Math.min(g,$.datepicker._getDaysInMonth(e,f))}i=h.exec(b)}return new Date(e,f,g)},f=b==null||b===""?c:typeof b=="string"?e(b):typeof b=="number"?isNaN(b)?c:d(b):new Date(b.getTime());return f=f&&f.toString()=="Invalid Date"?c:f,f&&(f.setHours(0),f.setMinutes(0),f.setSeconds(0),f.setMilliseconds(0)),this._daylightSavingAdjust(f)},_daylightSavingAdjust:function(a){return a?(a.setHours(a.getHours()>12?a.getHours()+2:0),a):null},_setDate:function(a,b,c){var d=!b,e=a.selectedMonth,f=a.selectedYear,g=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=g.getDate(),a.drawMonth=a.selectedMonth=a.currentMonth=g.getMonth(),a.drawYear=a.selectedYear=a.currentYear=g.getFullYear(),(e!=a.selectedMonth||f!=a.selectedYear)&&!c&&this._notifyChange(a),this._adjustInstDate(a),a.input&&a.input.val(d?"":this._formatDate(a))},_getDate:function(a){var b=!a.currentYear||a.input&&a.input.val()==""?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return b},_attachHandlers:function(a){var b=this._get(a,"stepMonths"),c="#"+a.id.replace(/\\\\/g,"\\");a.dpDiv.find("[data-handler]").map(function(){var a={prev:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(c,-b,"M")},next:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(c,+b,"M")},hide:function(){window["DP_jQuery_"+dpuuid].datepicker._hideDatepicker()},today:function(){window["DP_jQuery_"+dpuuid].datepicker._gotoToday(c)},selectDay:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectDay(c,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(c,this,"M"),!1},selectYear:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(c,this,"Y"),!1}};$(this).bind(this.getAttribute("data-event"),a[this.getAttribute("data-handler")])})},_generateHTML:function(a){var b=new Date;b=this._daylightSavingAdjust(new Date(b.getFullYear(),b.getMonth(),b.getDate()));var c=this._get(a,"isRTL"),d=this._get(a,"showButtonPanel"),e=this._get(a,"hideIfNoPrevNext"),f=this._get(a,"navigationAsDateFormat"),g=this._getNumberOfMonths(a),h=this._get(a,"showCurrentAtPos"),i=this._get(a,"stepMonths"),j=g[0]!=1||g[1]!=1,k=this._daylightSavingAdjust(a.currentDay?new Date(a.currentYear,a.currentMonth,a.currentDay):new Date(9999,9,9)),l=this._getMinMaxDate(a,"min"),m=this._getMinMaxDate(a,"max"),n=a.drawMonth-h,o=a.drawYear;n<0&&(n+=12,o--);if(m){var p=this._daylightSavingAdjust(new Date(m.getFullYear(),m.getMonth()-g[0]*g[1]+1,m.getDate()));p=l&&p<l?l:p;while(this._daylightSavingAdjust(new Date(o,n,1))>p)n--,n<0&&(n=11,o--)}a.drawMonth=n,a.drawYear=o;var q=this._get(a,"prevText");q=f?this.formatDate(q,this._daylightSavingAdjust(new Date(o,n-i,1)),this._getFormatConfig(a)):q;var r=this._canAdjustMonth(a,-1,o,n)?'<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="'+q+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+q+"</span></a>":e?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+q+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+q+"</span></a>",s=this._get(a,"nextText");s=f?this.formatDate(s,this._daylightSavingAdjust(new Date(o,n+i,1)),this._getFormatConfig(a)):s;var t=this._canAdjustMonth(a,1,o,n)?'<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>":e?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>",u=this._get(a,"currentText"),v=this._get(a,"gotoCurrent")&&a.currentDay?k:b;u=f?this.formatDate(u,v,this._getFormatConfig(a)):u;var w=a.inline?"":'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">'+this._get(a,"closeText")+"</button>",x=d?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(c?w:"")+(this._isInRange(a,v)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">'+u+"</button>":"")+(c?"":w)+"</div>":"",y=parseInt(this._get(a,"firstDay"),10);y=isNaN(y)?0:y;var z=this._get(a,"showWeek"),A=this._get(a,"dayNames"),B=this._get(a,"dayNamesShort"),C=this._get(a,"dayNamesMin"),D=this._get(a,"monthNames"),E=this._get(a,"monthNamesShort"),F=this._get(a,"beforeShowDay"),G=this._get(a,"showOtherMonths"),H=this._get(a,"selectOtherMonths"),I=this._get(a,"calculateWeek")||this.iso8601Week,J=this._getDefaultDate(a),K="";for(var L=0;L<g[0];L++){var M="";this.maxRows=4;for(var N=0;N<g[1];N++){var O=this._daylightSavingAdjust(new Date(o,n,a.selectedDay)),P=" ui-corner-all",Q="";if(j){Q+='<div class="ui-datepicker-group';if(g[1]>1)switch(N){case 0:Q+=" ui-datepicker-group-first",P=" ui-corner-"+(c?"right":"left");break;case g[1]-1:Q+=" ui-datepicker-group-last",P=" ui-corner-"+(c?"left":"right");break;default:Q+=" ui-datepicker-group-middle",P=""}Q+='">'}Q+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+P+'">'+(/all|left/.test(P)&&L==0?c?t:r:"")+(/all|right/.test(P)&&L==0?c?r:t:"")+this._generateMonthYearHeader(a,n,o,l,m,L>0||N>0,D,E)+'</div><table class="ui-datepicker-calendar"><thead>'+"<tr>";var R=z?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":"";for(var S=0;S<7;S++){var T=(S+y)%7;R+="<th"+((S+y+6)%7>=5?' class="ui-datepicker-week-end"':"")+">"+'<span title="'+A[T]+'">'+C[T]+"</span></th>"}Q+=R+"</tr></thead><tbody>";var U=this._getDaysInMonth(o,n);o==a.selectedYear&&n==a.selectedMonth&&(a.selectedDay=Math.min(a.selectedDay,U));var V=(this._getFirstDayOfMonth(o,n)-y+7)%7,W=Math.ceil((V+U)/7),X=j?this.maxRows>W?this.maxRows:W:W;this.maxRows=X;var Y=this._daylightSavingAdjust(new Date(o,n,1-V));for(var Z=0;Z<X;Z++){Q+="<tr>";var _=z?'<td class="ui-datepicker-week-col">'+this._get(a,"calculateWeek")(Y)+"</td>":"";for(var S=0;S<7;S++){var ba=F?F.apply(a.input?a.input[0]:null,[Y]):[!0,""],bb=Y.getMonth()!=n,bc=bb&&!H||!ba[0]||l&&Y<l||m&&Y>m;_+='<td class="'+((S+y+6)%7>=5?" ui-datepicker-week-end":"")+(bb?" ui-datepicker-other-month":"")+(Y.getTime()==O.getTime()&&n==a.selectedMonth&&a._keyEvent||J.getTime()==Y.getTime()&&J.getTime()==O.getTime()?" "+this._dayOverClass:"")+(bc?" "+this._unselectableClass+" ui-state-disabled":"")+(bb&&!G?"":" "+ba[1]+(Y.getTime()==k.getTime()?" "+this._currentClass:"")+(Y.getTime()==b.getTime()?" ui-datepicker-today":""))+'"'+((!bb||G)&&ba[2]?' title="'+ba[2]+'"':"")+(bc?"":' data-handler="selectDay" data-event="click" data-month="'+Y.getMonth()+'" data-year="'+Y.getFullYear()+'"')+">"+(bb&&!G?"&#xa0;":bc?'<span class="ui-state-default">'+Y.getDate()+"</span>":'<a class="ui-state-default'+(Y.getTime()==b.getTime()?" ui-state-highlight":"")+(Y.getTime()==k.getTime()?" ui-state-active":"")+(bb?" ui-priority-secondary":"")+'" href="#">'+Y.getDate()+"</a>")+"</td>",Y.setDate(Y.getDate()+1),Y=this._daylightSavingAdjust(Y)}Q+=_+"</tr>"}n++,n>11&&(n=0,o++),Q+="</tbody></table>"+(j?"</div>"+(g[0]>0&&N==g[1]-1?'<div class="ui-datepicker-row-break"></div>':""):""),M+=Q}K+=M}return K+=x+($.browser.msie&&parseInt($.browser.version,10)<7&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':""),a._keyEvent=!1,K},_generateMonthYearHeader:function(a,b,c,d,e,f,g,h){var i=this._get(a,"changeMonth"),j=this._get(a,"changeYear"),k=this._get(a,"showMonthAfterYear"),l='<div class="ui-datepicker-title">',m="";if(f||!i)m+='<span class="ui-datepicker-month">'+g[b]+"</span>";else{var n=d&&d.getFullYear()==c,o=e&&e.getFullYear()==c;m+='<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';for(var p=0;p<12;p++)(!n||p>=d.getMonth())&&(!o||p<=e.getMonth())&&(m+='<option value="'+p+'"'+(p==b?' selected="selected"':"")+">"+h[p]+"</option>");m+="</select>"}k||(l+=m+(f||!i||!j?"&#xa0;":""));if(!a.yearshtml){a.yearshtml="";if(f||!j)l+='<span class="ui-datepicker-year">'+c+"</span>";else{var q=this._get(a,"yearRange").split(":"),r=(new Date).getFullYear(),s=function(a){var b=a.match(/c[+-].*/)?c+parseInt(a.substring(1),10):a.match(/[+-].*/)?r+parseInt(a,10):parseInt(a,10);return isNaN(b)?r:b},t=s(q[0]),u=Math.max(t,s(q[1]||""));t=d?Math.max(t,d.getFullYear()):t,u=e?Math.min(u,e.getFullYear()):u,a.yearshtml+='<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';for(;t<=u;t++)a.yearshtml+='<option value="'+t+'"'+(t==c?' selected="selected"':"")+">"+t+"</option>";a.yearshtml+="</select>",l+=a.yearshtml,a.yearshtml=null}}return l+=this._get(a,"yearSuffix"),k&&(l+=(f||!i||!j?"&#xa0;":"")+m),l+="</div>",l},_adjustInstDate:function(a,b,c){var d=a.drawYear+(c=="Y"?b:0),e=a.drawMonth+(c=="M"?b:0),f=Math.min(a.selectedDay,this._getDaysInMonth(d,e))+(c=="D"?b:0),g=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(d,e,f)));a.selectedDay=g.getDate(),a.drawMonth=a.selectedMonth=g.getMonth(),a.drawYear=a.selectedYear=g.getFullYear(),(c=="M"||c=="Y")&&this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max"),e=c&&b<c?c:b;return e=d&&e>d?d:e,e},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");b&&b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){var b=this._get(a,"numberOfMonths");return b==null?[1,1]:typeof b=="number"?[1,b]:b},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return(new Date(a,b,1)).getDay()},_canAdjustMonth:function(a,b,c,d){var e=this._getNumberOfMonths(a),f=this._daylightSavingAdjust(new Date(c,d+(b<0?b:e[0]*e[1]),1));return b<0&&f.setDate(this._getDaysInMonth(f.getFullYear(),f.getMonth())),this._isInRange(a,f)},_isInRange:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max");return(!c||b.getTime()>=c.getTime())&&(!d||b.getTime()<=d.getTime())},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");return b=typeof b!="string"?b:(new Date).getFullYear()%100+parseInt(b,10),{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,d){b||(a.currentDay=a.selectedDay,a.currentMonth=a.selectedMonth,a.currentYear=a.selectedYear);var e=b?typeof b=="object"?b:this._daylightSavingAdjust(new Date(d,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),e,this._getFormatConfig(a))}}),$.fn.datepicker=function(a){if(!this.length)return this;$.datepicker.initialized||($(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv),$.datepicker.initialized=!0);var b=Array.prototype.slice.call(arguments,1);return typeof a!="string"||a!="isDisabled"&&a!="getDate"&&a!="widget"?a=="option"&&arguments.length==2&&typeof arguments[1]=="string"?$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this[0]].concat(b)):this.each(function(){typeof a=="string"?$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this].concat(b)):$.datepicker._attachDatepicker(this,a)}):$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this[0]].concat(b))},$.datepicker=new Datepicker,$.datepicker.initialized=!1,$.datepicker.uuid=(new Date).getTime(),$.datepicker.version="1.8.23",window["DP_jQuery_"+dpuuid]=$}(jQuery),function(a,b){var c="ui-dialog ui-widget ui-widget-content ui-corner-all ",d={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},e={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};a.widget("ui.dialog",{options:{autoOpen:!0,buttons:{},closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:!1,maxWidth:!1,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",collision:"fit",using:function(b){var c=a(this).css(b).offset().top;c<0&&a(this).css("top",b.top-c)}},resizable:!0,show:null,stack:!0,title:"",width:300,zIndex:1e3},_create:function(){this.originalTitle=this.element.attr("title"),typeof this.originalTitle!="string"&&(this.originalTitle=""),this.options.title=this.options.title||this.originalTitle;var b=this,d=b.options,e=d.title||"&#160;",f=a.ui.dialog.getTitleId(b.element),g=(b.uiDialog=a("<div></div>")).appendTo(document.body).hide().addClass(c+d.dialogClass).css({zIndex:d.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(c){d.closeOnEscape&&!c.isDefaultPrevented()&&c.keyCode&&c.keyCode===a.ui.keyCode.ESCAPE&&(b.close(c),c.preventDefault())}).attr({role:"dialog","aria-labelledby":f}).mousedown(function(a){b.moveToTop(!1,a)}),h=b.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(g),i=(b.uiDialogTitlebar=a("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(g),j=a('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){j.addClass("ui-state-hover")},function(){j.removeClass("ui-state-hover")}).focus(function(){j.addClass("ui-state-focus")}).blur(function(){j.removeClass("ui-state-focus")}).click(function(a){return b.close(a),!1}).appendTo(i),k=(b.uiDialogTitlebarCloseText=a("<span></span>")).addClass("ui-icon ui-icon-closethick").text(d.closeText).appendTo(j),l=a("<span></span>").addClass("ui-dialog-title").attr("id",f).html(e).prependTo(i);a.isFunction(d.beforeclose)&&!a.isFunction(d.beforeClose)&&(d.beforeClose=d.beforeclose),i.find("*").add(i).disableSelection(),d.draggable&&a.fn.draggable&&b._makeDraggable(),d.resizable&&a.fn.resizable&&b._makeResizable(),b._createButtons(d.buttons),b._isOpen=!1,a.fn.bgiframe&&g.bgiframe()},_init:function(){this.options.autoOpen&&this.open()},destroy:function(){var a=this;return a.overlay&&a.overlay.destroy(),a.uiDialog.hide(),a.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"),a.uiDialog.remove(),a.originalTitle&&a.element.attr("title",a.originalTitle),a},widget:function(){return this.uiDialog},close:function(b){var c=this,d,e;if(!1===c._trigger("beforeClose",b))return;return c.overlay&&c.overlay.destroy(),c.uiDialog.unbind("keypress.ui-dialog"),c._isOpen=!1,c.options.hide?c.uiDialog.hide(c.options.hide,function(){c._trigger("close",b)}):(c.uiDialog.hide(),c._trigger("close",b)),a.ui.dialog.overlay.resize(),c.options.modal&&(d=0,a(".ui-dialog").each(function(){this!==c.uiDialog[0]&&(e=a(this).css("z-index"),isNaN(e)||(d=Math.max(d,e)))}),a.ui.dialog.maxZ=d),c},isOpen:function(){return this._isOpen},moveToTop:function(b,c){var d=this,e=d.options,f;return e.modal&&!b||!e.stack&&!e.modal?d._trigger("focus",c):(e.zIndex>a.ui.dialog.maxZ&&(a.ui.dialog.maxZ=e.zIndex),d.overlay&&(a.ui.dialog.maxZ+=1,d.overlay.$el.css("z-index",a.ui.dialog.overlay.maxZ=a.ui.dialog.maxZ)),f={scrollTop:d.element.scrollTop(),scrollLeft:d.element.scrollLeft()},a.ui.dialog.maxZ+=1,d.uiDialog.css("z-index",a.ui.dialog.maxZ),d.element.attr(f),d._trigger("focus",c),d)},open:function(){if(this._isOpen)return;var b=this,c=b.options,d=b.uiDialog;return b.overlay=c.modal?new a.ui.dialog.overlay(b):null,b._size(),b._position(c.position),d.show(c.show),b.moveToTop(!0),c.modal&&d.bind("keydown.ui-dialog",function(b){if(b.keyCode!==a.ui.keyCode.TAB)return;var c=a(":tabbable",this),d=c.filter(":first"),e=c.filter(":last");if(b.target===e[0]&&!b.shiftKey)return d.focus(1),!1;if(b.target===d[0]&&b.shiftKey)return e.focus(1),!1}),a(b.element.find(":tabbable").get().concat(d.find(".ui-dialog-buttonpane :tabbable").get().concat(d.get()))).eq(0).focus(),b._isOpen=!0,b._trigger("open"),b},_createButtons:function(b){var c=this,d=!1,e=a("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),f=a("<div></div>").addClass("ui-dialog-buttonset").appendTo(e);c.uiDialog.find(".ui-dialog-buttonpane").remove(),typeof b=="object"&&b!==null&&a.each(b,function(){return!(d=!0)}),d&&(a.each(b,function(b,d){d=a.isFunction(d)?{click:d,text:b}:d;var e=a('<button type="button"></button>').click(function(){d.click.apply(c.element[0],arguments)}).appendTo(f);a.each(d,function(a,b){if(a==="click")return;a in e?e[a](b):e.attr(a,b)}),a.fn.button&&e.button()}),e.appendTo(c.uiDialog))},_makeDraggable:function(){function f(a){return{position:a.position,offset:a.offset}}var b=this,c=b.options,d=a(document),e;b.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(d,g){e=c.height==="auto"?"auto":a(this).height(),a(this).height(a(this).height()).addClass("ui-dialog-dragging"),b._trigger("dragStart",d,f(g))},drag:function(a,c){b._trigger("drag",a,f(c))},stop:function(g,h){c.position=[h.position.left-d.scrollLeft(),h.position.top-d.scrollTop()],a(this).removeClass("ui-dialog-dragging").height(e),b._trigger("dragStop",g,f(h)),a.ui.dialog.overlay.resize()}})},_makeResizable:function(c){function h(a){return{originalPosition:a.originalPosition,originalSize:a.originalSize,position:a.position,size:a.size}}c=c===b?this.options.resizable:c;var d=this,e=d.options,f=d.uiDialog.css("position"),g=typeof c=="string"?c:"n,e,s,w,se,sw,ne,nw";d.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:d.element,maxWidth:e.maxWidth,maxHeight:e.maxHeight,minWidth:e.minWidth,minHeight:d._minHeight(),handles:g,start:function(b,c){a(this).addClass("ui-dialog-resizing"),d._trigger("resizeStart",b,h(c))},resize:function(a,b){d._trigger("resize",a,h(b))},stop:function(b,c){a(this).removeClass("ui-dialog-resizing"),e.height=a(this).height(),e.width=a(this).width(),d._trigger("resizeStop",b,h(c)),a.ui.dialog.overlay.resize()}}).css("position",f).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var a=this.options;return a.height==="auto"?a.minHeight:Math.min(a.minHeight,a.height)},_position:function(b){var c=[],d=[0,0],e;if(b){if(typeof b=="string"||typeof b=="object"&&"0"in b)c=b.split?b.split(" "):[b[0],b[1]],c.length===1&&(c[1]=c[0]),a.each(["left","top"],function(a,b){+c[a]===c[a]&&(d[a]=c[a],c[a]=b)}),b={my:c.join(" "),at:c.join(" "),offset:d.join(" ")};b=a.extend({},a.ui.dialog.prototype.options.position,b)}else b=a.ui.dialog.prototype.options.position;e=this.uiDialog.is(":visible"),e||this.uiDialog.show(),this.uiDialog.css({top:0,left:0}).position(a.extend({of:window},b)),e||this.uiDialog.hide()},_setOptions:function(b){var c=this,f={},g=!1;a.each(b,function(a,b){c._setOption(a,b),a in d&&(g=!0),a in e&&(f[a]=b)}),g&&this._size(),this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",f)},_setOption:function(b,d){var e=this,f=e.uiDialog;switch(b){case"beforeclose":b="beforeClose";break;case"buttons":e._createButtons(d);break;case"closeText":e.uiDialogTitlebarCloseText.text(""+d);break;case"dialogClass":f.removeClass(e.options.dialogClass).addClass(c+d);break;case"disabled":d?f.addClass("ui-dialog-disabled"):f.removeClass("ui-dialog-disabled");break;case"draggable":var g=f.is(":data(draggable)");g&&!d&&f.draggable("destroy"),!g&&d&&e._makeDraggable();break;case"position":e._position(d);break;case"resizable":var h=f.is(":data(resizable)");h&&!d&&f.resizable("destroy"),h&&typeof d=="string"&&f.resizable("option","handles",d),!h&&d!==!1&&e._makeResizable(d);break;case"title":a(".ui-dialog-title",e.uiDialogTitlebar).html(""+(d||"&#160;"))}a.Widget.prototype._setOption.apply(e,arguments)},_size:function(){var b=this.options,c,d,e=this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0}),b.minWidth>b.width&&(b.width=b.minWidth),c=this.uiDialog.css({height:"auto",width:b.width}).height(),d=Math.max(0,b.minHeight-c);if(b.height==="auto")if(a.support.minHeight)this.element.css({minHeight:d,height:"auto"});else{this.uiDialog.show();var f=this.element.css("height","auto").height();e||this.uiDialog.hide(),this.element.height(Math.max(f,d))}else this.element.height(Math.max(b.height-c,0));this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())}}),a.extend(a.ui.dialog,{version:"1.8.23",uuid:0,maxZ:0,getTitleId:function(a){var b=a.attr("id");return b||(this.uuid+=1,b=this.uuid),"ui-dialog-title-"+b},overlay:function(b){this.$el=a.ui.dialog.overlay.create(b)}}),a.extend(a.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:a.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(a){return a+".dialog-overlay"}).join(" "),create:function(b){this.instances.length===0&&(setTimeout(function(){a.ui.dialog.overlay.instances.length&&a(document).bind(a.ui.dialog.overlay.events,function(b){if(a(b.target).zIndex()<a.ui.dialog.overlay.maxZ)return!1})},1),a(document).bind("keydown.dialog-overlay",function(c){b.options.closeOnEscape&&!c.isDefaultPrevented()&&c.keyCode&&c.keyCode===a.ui.keyCode.ESCAPE&&(b.close(c),c.preventDefault())}),a(window).bind("resize.dialog-overlay",a.ui.dialog.overlay.resize));var c=(this.oldInstances.pop()||a("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),height:this.height()});return a.fn.bgiframe&&c.bgiframe(),this.instances.push(c),c},destroy:function(b){var c=a.inArray(b,this.instances);c!=-1&&this.oldInstances.push(this.instances.splice(c,1)[0]),this.instances.length===0&&a([document,window]).unbind(".dialog-overlay"),b.remove();var d=0;a.each(this.instances,function(){d=Math.max(d,this.css("z-index"))}),this.maxZ=d},height:function(){var b,c;return a.browser.msie&&a.browser.version<7?(b=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),c=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight),b<c?a(window).height()+"px":b+"px"):a(document).height()+"px"},width:function(){var b,c;return a.browser.msie?(b=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth),c=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth),b<c?a(window).width()+"px":b+"px"):a(document).width()+"px"},resize:function(){var b=a([]);a.each(a.ui.dialog.overlay.instances,function(){b=b.add(this)}),b.css({width:0,height:0}).css({width:a.ui.dialog.overlay.width(),height:a.ui.dialog.overlay.height()})}}),a.extend(a.ui.dialog.overlay.prototype,{destroy:function(){a.ui.dialog.overlay.destroy(this.$el)}})}(jQuery),function(a,b){a.ui=a.ui||{};var c=/left|center|right/,d=/top|center|bottom/,e="center",f={},g=a.fn.position,h=a.fn.offset;a.fn.position=function(b){if(!b||!b.of)return g.apply(this,arguments);b=a.extend({},b);var h=a(b.of),i=h[0],j=(b.collision||"flip").split(" "),k=b.offset?b.offset.split(" "):[0,0],l,m,n;return i.nodeType===9?(l=h.width(),m=h.height(),n={top:0,left:0}):i.setTimeout?(l=h.width(),m=h.height(),n={top:h.scrollTop(),left:h.scrollLeft()}):i.preventDefault?(b.at="left top",l=m=0,n={top:b.of.pageY,left:b.of.pageX}):(l=h.outerWidth(),m=h.outerHeight(),n=h.offset()),a.each(["my","at"],function(){var a=(b[this]||"").split(" ");a.length===1&&(a=c.test(a[0])?a.concat([e]):d.test(a[0])?[e].concat(a):[e,e]),a[0]=c.test(a[0])?a[0]:e,a[1]=d.test(a[1])?a[1]:e,b[this]=a}),j.length===1&&(j[1]=j[0]),k[0]=parseInt(k[0],10)||0,k.length===1&&(k[1]=k[0]),k[1]=parseInt(k[1],10)||0,b.at[0]==="right"?n.left+=l:b.at[0]===e&&(n.left+=l/2),b.at[1]==="bottom"?n.top+=m:b.at[1]===e&&(n.top+=m/2),n.left+=k[0],n.top+=k[1],this.each(function(){var c=a(this),d=c.outerWidth(),g=c.outerHeight(),h=parseInt(a.curCSS(this,"marginLeft",!0))||0,i=parseInt(a.curCSS(this,"marginTop",!0))||0,o=d+h+(parseInt(a.curCSS(this,"marginRight",!0))||0),p=g+i+(parseInt(a.curCSS(this,"marginBottom",!0))||0),q=a.extend({},n),r;b.my[0]==="right"?q.left-=d:b.my[0]===e&&(q.left-=d/2),b.my[1]==="bottom"?q.top-=g:b.my[1]===e&&(q.top-=g/2),f.fractions||(q.left=Math.round(q.left),q.top=Math.round(q.top)),r={left:q.left-h,top:q.top-i},a.each(["left","top"],function(c,e){a.ui.position[j[c]]&&a.ui.position[j[c]][e](q,{targetWidth:l,targetHeight:m,elemWidth:d,elemHeight:g,collisionPosition:r,collisionWidth:o,collisionHeight:p,offset:k,my:b.my,at:b.at})}),a.fn.bgiframe&&c.bgiframe(),c.offset(a.extend(q,{using:b.using}))})},a.ui.position={fit:{left:function(b,c){var d=a(window),e=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft();b.left=e>0?b.left-e:Math.max(b.left-c.collisionPosition.left,b.left)},top:function(b,c){var d=a(window),e=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop();b.top=e>0?b.top-e:Math.max(b.top-c.collisionPosition.top,b.top)}},flip:{left:function(b,c){if(c.at[0]===e)return;var d=a(window),f=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft(),g=c.my[0]==="left"?-c.elemWidth:c.my[0]==="right"?c.elemWidth:0,h=c.at[0]==="left"?c.targetWidth:-c.targetWidth,i=-2*c.offset[0];b.left+=c.collisionPosition.left<0?g+h+i:f>0?g+h+i:0},top:function(b,c){if(c.at[1]===e)return;var d=a(window),f=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop(),g=c.my[1]==="top"?-c.elemHeight:c.my[1]==="bottom"?c.elemHeight:0,h=c.at[1]==="top"?c.targetHeight:-c.targetHeight,i=-2*c.offset[1];b.top+=c.collisionPosition.top<0?g+h+i:f>0?g+h+i:0}}},a.offset.setOffset||(a.offset.setOffset=function(b,c){/static/.test(a.curCSS(b,"position"))&&(b.style.position="relative");var d=a(b),e=d.offset(),f=parseInt(a.curCSS(b,"top",!0),10)||0,g=parseInt(a.curCSS(b,"left",!0),10)||0,h={top:c.top-e.top+f,left:c.left-e.left+g};"using"in c?c.using.call(b,h):d.css(h)},a.fn.offset=function(b){var c=this[0];return!c||!c.ownerDocument?null:b?a.isFunction(b)?this.each(function(c){a(this).offset(b.call(this,c,a(this).offset()))}):this.each(function(){a.offset.setOffset(this,b)}):h.call(this)}),a.curCSS||(a.curCSS=a.css),function(){var b=document.getElementsByTagName("body")[0],c=document.createElement("div"),d,e,g,h,i;d=document.createElement(b?"div":"body"),g={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},b&&a.extend(g,{position:"absolute",left:"-1000px",top:"-1000px"});for(var j in g)d.style[j]=g[j];d.appendChild(c),e=b||document.documentElement,e.insertBefore(d,e.firstChild),c.style.cssText="position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;",h=a(c).offset(function(a,b){return b}).offset(),d.innerHTML="",e.removeChild(d),i=h.top+h.left+(b?2e3:0),f.fractions=i>21&&i<22}()}(jQuery),function(a,b){a.widget("ui.progressbar",{options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()}),this.valueDiv=a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this.oldValue=this._value(),this._refreshValue()},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove(),a.Widget.prototype.destroy.apply(this,arguments)},value:function(a){return a===b?this._value():(this._setOption("value",a),this)},_setOption:function(b,c){b==="value"&&(this.options.value=c,this._refreshValue(),this._value()===this.options.max&&this._trigger("complete")),a.Widget.prototype._setOption.apply(this,arguments)},_value:function(){var a=this.options.value;return typeof a!="number"&&(a=0),Math.min(this.options.max,Math.max(this.min,a))},_percentage:function(){return 100*this._value()/this.options.max},_refreshValue:function(){var a=this.value(),b=this._percentage();this.oldValue!==a&&(this.oldValue=a,this._trigger("change")),this.valueDiv.toggle(a>this.min).toggleClass("ui-corner-right",a===this.options.max).width(b.toFixed(0)+"%"),this.element.attr("aria-valuenow",a)}}),a.extend(a.ui.progressbar,{version:"1.8.23"})}(jQuery),function(a,b){var c=5;a.widget("ui.slider",a.ui.mouse,{widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null},_create:function(){var b=this,d=this.options,e=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),f="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",g=d.values&&d.values.length||1,h=[];this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"+(d.disabled?" ui-slider-disabled ui-disabled":"")),this.range=a([]),d.range&&(d.range===!0&&(d.values||(d.values=[this._valueMin(),this._valueMin()]),d.values.length&&d.values.length!==2&&(d.values=[d.values[0],d.values[0]])),this.range=a("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(d.range==="min"||d.range==="max"?" ui-slider-range-"+d.range:"")));for(var i=e.length;i<g;i+=1)h.push(f);this.handles=e.add(a(h.join("")).appendTo(b.element)),this.handle=this.handles.eq(0),this.handles.add(this.range).filter("a").click(function(a){a.preventDefault()}).hover(function(){d.disabled||a(this).addClass("ui-state-hover")},function(){a(this).removeClass("ui-state-hover")}).focus(function(){d.disabled?a(this).blur():(a(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),a(this).addClass("ui-state-focus"))}).blur(function(){a(this).removeClass("ui-state-focus")}),this.handles.each(function(b){a(this).data("index.ui-slider-handle",b)}),this.handles.keydown(function(d){var e=a(this).data("index.ui-slider-handle"),f,g,h,i;if(b.options.disabled)return;switch(d.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:d.preventDefault();if(!b._keySliding){b._keySliding=!0,a(this).addClass("ui-state-active"),f=b._start(d,e);if(f===!1)return}}i=b.options.step,b.options.values&&b.options.values.length?g=h=b.values(e):g=h=b.value();switch(d.keyCode){case a.ui.keyCode.HOME:h=b._valueMin();break;case a.ui.keyCode.END:h=b._valueMax();break;case a.ui.keyCode.PAGE_UP:h=b._trimAlignValue(g+(b._valueMax()-b._valueMin())/c);break;case a.ui.keyCode.PAGE_DOWN:h=b._trimAlignValue(g-(b._valueMax()-b._valueMin())/c);break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(g===b._valueMax())return;h=b._trimAlignValue(g+i);break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(g===b._valueMin())return;h=b._trimAlignValue(g-i)}b._slide(d,e,h)}).keyup(function(c){var d=a(this).data("index.ui-slider-handle");b._keySliding&&(b._keySliding=!1,b._stop(c,d),b._change(c,d),a(this).removeClass("ui-state-active"))}),this._refreshValue(),this._animateOff=!1},destroy:function(){return this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"),this._mouseDestroy(),this},_mouseCapture:function(b){var c=this.options,d,e,f,g,h,i,j,k,l;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),d={x:b.pageX,y:b.pageY},e=this._normValueFromMouse(d),f=this._valueMax()-this._valueMin()+1,h=this,this.handles.each(function(b){var c=Math.abs(e-h.values(b));f>c&&(f=c,g=a(this),i=b)}),c.range===!0&&this.values(1)===c.min&&(i+=1,g=a(this.handles[i])),j=this._start(b,i),j===!1?!1:(this._mouseSliding=!0,h._handleIndex=i,g.addClass("ui-state-active").focus(),k=g.offset(),l=!a(b.target).parents().andSelf().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:b.pageX-k.left-g.width()/2,top:b.pageY-k.top-g.height()/2-(parseInt(g.css("borderTopWidth"),10)||0)-(parseInt(g.css("borderBottomWidth"),10)||0)+(parseInt(g.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(b,i,e),this._animateOff=!0,!0))},_mouseStart:function(a){return!0},_mouseDrag:function(a){var b={x:a.pageX,y:a.pageY},c=this._normValueFromMouse(b);return this._slide(a,this._handleIndex,c),!1},_mouseStop:function(a){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(a,this._handleIndex),this._change(a,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(a){var b,c,d,e,f;return this.orientation==="horizontal"?(b=this.elementSize.width,c=a.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(b=this.elementSize.height,c=a.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),d=c/b,d>1&&(d=1),d<0&&(d=0),this.orientation==="vertical"&&(d=1-d),e=this._valueMax()-this._valueMin(),f=this._valueMin()+d*e,this._trimAlignValue(f)},_start:function(a,b){var c={handle:this.handles[b],value:this.value()};return this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("start",a,c)},_slide:function(a,b,c){var d,e,f;this.options.values&&this.options.values.length?(d=this.values(b?0:1),this.options.values.length===2&&this.options.range===!0&&(b===0&&c>d||b===1&&c<d)&&(c=d),c!==this.values(b)&&(e=this.values(),e[b]=c,f=this._trigger("slide",a,{handle:this.handles[b],value:c,values:e}),d=this.values(b?0:1),f!==!1&&this.values(b,c,!0))):c!==this.value()&&(f=this._trigger("slide",a,{handle:this.handles[b],value:c}),f!==!1&&this.value(c))},_stop:function(a,b){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("stop",a,c)},_change:function(a,b){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("change",a,c)}},value:function(a){if(arguments.length){this.options.value=this._trimAlignValue(a),this._refreshValue(),this._change(null,0);return}return this._value()},values:function(b,c){var d,e,f;if(arguments.length>1){this.options.values[b]=this._trimAlignValue(c),this._refreshValue(),this._change(null,b);return}if(!arguments.length)return this._values();if(!a.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(b):this.value();d=this.options.values,e=arguments[0];for(f=0;f<d.length;f+=1)d[f]=this._trimAlignValue(e[f]),this._change(null,f);this._refreshValue()},_setOption:function(b,c){var d,e=0;a.isArray(this.options.values)&&(e=this.options.values.length),a.Widget.prototype._setOption.apply(this,arguments);switch(b){case"disabled":c?(this.handles.filter(".ui-state-focus").blur(),this.handles.removeClass("ui-state-hover"),this.handles.propAttr("disabled",!0),this.element.addClass("ui-disabled")):(this.handles.propAttr("disabled",!1),this.element.removeClass("ui-disabled"));break;case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":this._animateOff=!0,this._refreshValue();for(d=0;d<e;d+=1)this._change(null,d);this._animateOff=!1}},_value:function(){var a=this.options.value;return a=this._trimAlignValue(a),a},_values:function(a){var b,c,d;if(arguments.length)return b=this.options.values[a],b=this._trimAlignValue(b),b;c=this.options.values.slice();for(d=0;d<c.length;d+=1)c[d]=this._trimAlignValue(c[d]);return c},_trimAlignValue:function(a){if(a<=this._valueMin())return this._valueMin();if(a>=this._valueMax())return this._valueMax();var b=this.options.step>0?this.options.step:1,c=(a-this._valueMin())%b,d=a-c;return Math.abs(c)*2>=b&&(d+=c>0?b:-b),parseFloat(d.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var b=this.options.range,c=this.options,d=this,e=this._animateOff?!1:c.animate,f,g={},h,i,j,k;this.options.values&&this.options.values.length?this.handles.each(function(b,i){f=(d.values(b)-d._valueMin())/(d._valueMax()-d._valueMin())*100,g[d.orientation==="horizontal"?"left":"bottom"]=f+"%",a(this).stop(1,1)[e?"animate":"css"](g,c.animate),d.options.range===!0&&(d.orientation==="horizontal"?(b===0&&d.range.stop(1,1)[e?"animate":"css"]({left:f+"%"},c.animate),b===1&&d.range[e?"animate":"css"]({width:f-h+"%"},{queue:!1,duration:c.animate})):(b===0&&d.range.stop(1,1)[e?"animate":"css"]({bottom:f+"%"},c.animate),b===1&&d.range[e?"animate":"css"]({height:f-h+"%"},{queue:!1,duration:c.animate}))),h=f}):(i=this.value(),j=this._valueMin(),k=this._valueMax(),f=k!==j?(i-j)/(k-j)*100:0,g[d.orientation==="horizontal"?"left":"bottom"]=f+"%",this.handle.stop(1,1)[e?"animate":"css"](g,c.animate),b==="min"&&this.orientation==="horizontal"&&this.range.stop(1,1)[e?"animate":"css"]({width:f+"%"},c.animate),b==="max"&&this.orientation==="horizontal"&&this.range[e?"animate":"css"]({width:100-f+"%"},{queue:!1,duration:c.animate}),b==="min"&&this.orientation==="vertical"&&this.range.stop(1,1)[e?"animate":"css"]({height:f+"%"},c.animate),b==="max"&&this.orientation==="vertical"&&this.range[e?"animate":"css"]({height:100-f+"%"},{queue:!1,duration:c.animate}))}}),a.extend(a.ui.slider,{version:"1.8.23"})}(jQuery),function(a,b){function e(){return++c}function f(){return++d}var c=0,d=0;a.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:!1,cookie:null,collapsible:!1,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(!0)},_setOption:function(a,b){if(a=="selected"){if(this.options.collapsible&&b==this.options.selected)return;this.select(b)}else this.options[a]=b,this._tabify()},_tabId:function(a){return a.title&&a.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+e()},_sanitizeSelector:function(a){return a.replace(/:/g,"\\:")},_cookie:function(){var b=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+f());return a.cookie.apply(null,[b].concat(a.makeArray(arguments)))},_ui:function(a,b){return{tab:a,panel:b,index:this.anchors.index(a)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var b=a(this);b.html(b.data("label.tabs")).removeData("label.tabs")})},_tabify:function(c){function m(b,c){b.css("display",""),!a.support.opacity&&c.opacity&&b[0].style.removeAttribute("filter")}var d=this,e=this.options,f=/^#.+/;this.list=this.element.find("ol,ul").eq(0),this.lis=a(" > li:has(a[href])",this.list),this.anchors=this.lis.map(function(){return a("a",this)[0]}),this.panels=a([]),this.anchors.each(function(b,c){var g=a(c).attr("href"),h=g.split("#")[0],i;h&&(h===location.toString().split("#")[0]||(i=a("base")[0])&&h===i.href)&&(g=c.hash,c.href=g);if(f.test(g))d.panels=d.panels.add(d.element.find(d._sanitizeSelector(g)));else if(g&&g!=="#"){a.data(c,"href.tabs",g),a.data(c,"load.tabs",g.replace(/#.*$/,""));var j=d._tabId(c);c.href="#"+j;var k=d.element.find("#"+j);k.length||(k=a(e.panelTemplate).attr("id",j).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(d.panels[b-1]||d.list),k.data("destroy.tabs",!0)),d.panels=d.panels.add(k)}else e.disabled.push(b)}),c?(this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all"),this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"),this.lis.addClass("ui-state-default ui-corner-top"),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom"),e.selected===b?(location.hash&&this.anchors.each(function(a,b){if(b.hash==location.hash)return e.selected=a,!1}),typeof e.selected!="number"&&e.cookie&&(e.selected=parseInt(d._cookie(),10)),typeof e.selected!="number"&&this.lis.filter(".ui-tabs-selected").length&&(e.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))),e.selected=e.selected||(this.lis.length?0:-1)):e.selected===null&&(e.selected=-1),e.selected=e.selected>=0&&this.anchors[e.selected]||e.selected<0?e.selected:0,e.disabled=a.unique(e.disabled.concat(a.map(this.lis.filter(".ui-state-disabled"),function(a,b){return d.lis.index(a)}))).sort(),a.inArray(e.selected,e.disabled)!=-1&&e.disabled.splice(a.inArray(e.selected,e.disabled),1),this.panels.addClass("ui-tabs-hide"),this.lis.removeClass("ui-tabs-selected ui-state-active"),e.selected>=0&&this.anchors.length&&(d.element.find(d._sanitizeSelector(d.anchors[e.selected].hash)).removeClass("ui-tabs-hide"),this.lis.eq(e.selected).addClass("ui-tabs-selected ui-state-active"),d.element.queue("tabs",function(){d._trigger("show",null,d._ui(d.anchors[e.selected],d.element.find(d._sanitizeSelector(d.anchors[e.selected].hash))[0]))}),this.load(e.selected)),a(window).bind("unload",function(){d.lis.add(d.anchors).unbind(".tabs"),d.lis=d.anchors=d.panels=null})):e.selected=this.lis.index(this.lis.filter(".ui-tabs-selected")),this.element[e.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible"),e.cookie&&this._cookie(e.selected,e.cookie);for(var g=0,h;h=this.lis[g];g++)a(h)[a.inArray(g,e.disabled)!=-1&&!a(h).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled");e.cache===!1&&this.anchors.removeData("cache.tabs"),this.lis.add(this.anchors).unbind(".tabs");if(e.event!=="mouseover"){var i=function(a,b){b.is(":not(.ui-state-disabled)")&&b.addClass("ui-state-"+a)},j=function(a,b){b.removeClass("ui-state-"+a)};this.lis.bind("mouseover.tabs",function(){i("hover",a(this))}),this.lis.bind("mouseout.tabs",function(){j("hover",a(this))}),this.anchors.bind("focus.tabs",function(){i("focus",a(this).closest("li"))}),this.anchors.bind("blur.tabs",function(){j("focus",a(this).closest("li"))})}var k,l;e.fx&&(a.isArray(e.fx)?(k=e.fx[0],l=e.fx[1]):k=l=e.fx);var n=l?function(b,c){a(b).closest("li").addClass("ui-tabs-selected ui-state-active"),c.hide().removeClass("ui-tabs-hide").animate(l,l.duration||"normal",function(){m(c,l),d._trigger("show",null,d._ui(b,c[0]))})}:function(b,c){a(b).closest("li").addClass("ui-tabs-selected ui-state-active"),c.removeClass("ui-tabs-hide"),d._trigger("show",null,d._ui(b,c[0]))},o=k?function(a,b){b.animate(k,k.duration||"normal",function(){d.lis.removeClass("ui-tabs-selected ui-state-active"),b.addClass("ui-tabs-hide"),m(b,k),d.element.dequeue("tabs")})}:function(a,b,c){d.lis.removeClass("ui-tabs-selected ui-state-active"),b.addClass("ui-tabs-hide"),d.element.dequeue("tabs")};this.anchors.bind(e.event+".tabs",function(){var b=this,c=a(b).closest("li"),f=d.panels.filter(":not(.ui-tabs-hide)"),g=d.element.find(d._sanitizeSelector(b.hash));if(c.hasClass("ui-tabs-selected")&&!e.collapsible||c.hasClass("ui-state-disabled")||c.hasClass("ui-state-processing")||d.panels.filter(":animated").length||d._trigger("select",null,d._ui(this,g[0]))===!1)return this.blur(),!1;e.selected=d.anchors.index(this),d.abort();if(e.collapsible){if(c.hasClass("ui-tabs-selected"))return e.selected=-1,e.cookie&&d._cookie(e.selected,e.cookie),d.element.queue("tabs",function(){o(b,f)}).dequeue("tabs"),this.blur(),!1;if(!f.length)return e.cookie&&d._cookie(e.selected,e.cookie),d.element.queue("tabs",function(){n(b,g)}),d.load(d.anchors.index(this)),this.blur(),!1}e.cookie&&d._cookie(e.selected,e.cookie);if(g.length)f.length&&d.element.queue("tabs",function(){o(b,f)}),d.element.queue("tabs",function(){n(b,g)}),d.load(d.anchors.index(this));else throw"jQuery UI Tabs: Mismatching fragment identifier.";a.browser.msie&&this.blur()}),this.anchors.bind("click.tabs",function(){return!1})},_getIndex:function(a){return typeof a=="string"&&(a=this.anchors.index(this.anchors.filter("[href$='"+a+"']"))),a},destroy:function(){var b=this.options;return this.abort(),this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs"),this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"),this.anchors.each(function(){var b=a.data(this,"href.tabs");b&&(this.href=b);var c=a(this).unbind(".tabs");a.each(["href","load","cache"],function(a,b){c.removeData(b+".tabs")})}),this.lis.unbind(".tabs").add(this.panels).each(function(){a.data(this,"destroy.tabs")?a(this).remove():a(this).removeClass(["ui-state-default","ui-corner-top","ui-tabs-selected","ui-state-active","ui-state-hover","ui-state-focus","ui-state-disabled","ui-tabs-panel","ui-widget-content","ui-corner-bottom","ui-tabs-hide"].join(" "))}),b.cookie&&this._cookie(null,b.cookie),this},add:function(c,d,e){e===b&&(e=this.anchors.length);var f=this,g=this.options,h=a(g.tabTemplate.replace(/#\{href\}/g,c).replace(/#\{label\}/g,d)),i=c.indexOf("#")?this._tabId(a("a",h)[0]):c.replace("#","");h.addClass("ui-state-default ui-corner-top").data("destroy.tabs",!0);var j=f.element.find("#"+i);return j.length||(j=a(g.panelTemplate).attr("id",i).data("destroy.tabs",!0)),j.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"),e>=this.lis.length?(h.appendTo(this.list),j.appendTo(this.list[0].parentNode)):(h.insertBefore(this.lis[e]),j.insertBefore(this.panels[e])),g.disabled=a.map(g.disabled,function(a,b){return a>=e?++a:a}),this._tabify(),this.anchors.length==1&&(g.selected=0,h.addClass("ui-tabs-selected ui-state-active"),j.removeClass("ui-tabs-hide"),this.element.queue("tabs",function(){f._trigger("show",null,f._ui(f.anchors[0],f.panels[0]))}),this.load(0)),this._trigger("add",null,this._ui(this.anchors[e],this.panels[e])),this},remove:function(b){b=this._getIndex(b);var c=this.options,d=this.lis.eq(b).remove(),e=this.panels.eq(b).remove();return d.hasClass("ui-tabs-selected")&&this.anchors.length>1&&this.select(b+(b+1<this.anchors.length?1:-1)),c.disabled=a.map(a.grep(c.disabled,function(a,c){return a!=b}),function(a,c){return a>=b?--a:a}),this._tabify(),this._trigger("remove",null,this._ui(d.find("a")[0],e[0])),this},enable:function(b){b=this._getIndex(b);var c=this.options;if(a.inArray(b,c.disabled)==-1)return;return this.lis.eq(b).removeClass("ui-state-disabled"),c.disabled=a.grep(c.disabled,function(a,c){return a!=b}),this._trigger("enable",null,this._ui(this.anchors[b],this.panels[b])),this},disable:function(a){a=this._getIndex(a);var b=this,c=this.options;return a!=c.selected&&(this.lis.eq(a).addClass("ui-state-disabled"),c.disabled.push(a),c.disabled.sort(),this._trigger("disable",null,this._ui(this.anchors[a],this.panels[a]))),this},select:function(a){a=this._getIndex(a);if(a==-1)if(this.options.collapsible&&this.options.selected!=-1)a=this.options.selected;else return this;return this.anchors.eq(a).trigger(this.options.event+".tabs"),this},load:function(b){b=this._getIndex(b);var c=this,d=this.options,e=this.anchors.eq(b)[0],f=a.data(e,"load.tabs");this.abort();if(!f||this.element.queue("tabs").length!==0&&a.data(e,"cache.tabs")){this.element.dequeue("tabs");return}this.lis.eq(b).addClass("ui-state-processing");if(d.spinner){var g=a("span",e);g.data("label.tabs",g.html()).html(d.spinner)}return this.xhr=a.ajax(a.extend({},d.ajaxOptions,{url:f,success:function(f,g){c.element.find(c._sanitizeSelector(e.hash)).html(f),c._cleanup(),d.cache&&a.data(e,"cache.tabs",!0),c._trigger("load",null,c._ui(c.anchors[b],c.panels[b]));try{d.ajaxOptions.success(f,g)}catch(h){}},error:function(a,f,g){c._cleanup(),c._trigger("load",null,c._ui(c.anchors[b],c.panels[b]));try{d.ajaxOptions.error(a,f,b,e)}catch(g){}}})),c.element.dequeue("tabs"),this},abort:function(){return this.element.queue([]),this.panels.stop(!1,!0),this.element.queue("tabs",this.element.queue("tabs").splice(-2,2)),this.xhr&&(this.xhr.abort(),delete this.xhr),this._cleanup(),this},url:function(a,b){return this.anchors.eq(a).removeData("cache.tabs").data("load.tabs",b),this},length:function(){return this.anchors.length}}),a.extend(a.ui.tabs,{version:"1.8.23"}),a.extend(a.ui.tabs.prototype,{rotation:null,rotate:function(a,b){var c=this,d=this.options,e=c._rotate||(c._rotate=function(b){clearTimeout(c.rotation),c.rotation=setTimeout(function(){var a=d.selected;c.select(++a<c.anchors.length?a:0)},a),b&&b.stopPropagation()}),f=c._unrotate||(c._unrotate=b?function(a){e()}:function(a){a.clientX&&c.rotate(null)});return a?(this.element.bind("tabsshow",e),this.anchors.bind(d.event+".tabs",f),e()):(clearTimeout(c.rotation),this.element.unbind("tabsshow",e),this.anchors.unbind(d.event+".tabs",f),delete this._rotate,delete this._unrotate),this}})}(jQuery);
/*
 A simple jQuery modal (http://github.com/kylefox/jquery-modal)
 Version 0.5.5
 */
!function(a){var b=null;a.modal=function(c,d){a.modal.close();var e,f;if(this.$body=a("body"),this.options=a.extend({},a.modal.defaults,d),this.options.doFade=!isNaN(parseInt(this.options.fadeDuration,10)),c.is("a"))if(f=c.attr("href"),/^#/.test(f)){if(this.$elm=a(f),1!==this.$elm.length)return null;this.open()}else this.$elm=a("<div>"),this.$body.append(this.$elm),e=function(a,b){b.elm.remove()},this.showSpinner(),c.trigger(a.modal.AJAX_SEND),a.get(f).done(function(d){b&&(c.trigger(a.modal.AJAX_SUCCESS),b.$elm.empty().append(d).on(a.modal.CLOSE,e),b.hideSpinner(),b.open(),c.trigger(a.modal.AJAX_COMPLETE))}).fail(function(){c.trigger(a.modal.AJAX_FAIL),b.hideSpinner(),c.trigger(a.modal.AJAX_COMPLETE)});else this.$elm=c,this.open()},a.modal.prototype={constructor:a.modal,open:function(){var b=this;this.options.doFade?(this.block(),setTimeout(function(){b.show()},this.options.fadeDuration*this.options.fadeDelay)):(this.block(),this.show()),this.options.escapeClose&&a(document).on("keydown.modal",function(b){27==b.which&&a.modal.close()}),this.options.clickClose&&this.blocker.click(a.modal.close)},close:function(){this.unblock(),this.hide(),a(document).off("keydown.modal")},block:function(){var b=this.options.doFade?0:this.options.opacity;this.$elm.trigger(a.modal.BEFORE_BLOCK,[this._ctx()]),this.blocker=a('<div class="jquery-modal blocker"></div>').css({top:0,right:0,bottom:0,left:0,width:"100%",height:"100%",position:"fixed",zIndex:this.options.zIndex,background:this.options.overlay,opacity:b}),this.$body.append(this.blocker),this.options.doFade&&this.blocker.animate({opacity:this.options.opacity},this.options.fadeDuration),this.$elm.trigger(a.modal.BLOCK,[this._ctx()])},unblock:function(){this.options.doFade?this.blocker.fadeOut(this.options.fadeDuration,function(){a(this).remove()}):this.blocker.remove()},show:function(){this.$elm.trigger(a.modal.BEFORE_OPEN,[this._ctx()]),this.options.showClose&&(this.closeButton=a('<a href="#close-modal" rel="modal:close" class="close-modal '+this.options.closeClass+'">'+this.options.closeText+"</a>"),this.$elm.append(this.closeButton)),this.$elm.addClass(this.options.modalClass+" current"),this.center(),this.options.doFade?this.$elm.fadeIn(this.options.fadeDuration):this.$elm.show(),this.$elm.trigger(a.modal.OPEN,[this._ctx()])},hide:function(){this.$elm.trigger(a.modal.BEFORE_CLOSE,[this._ctx()]),this.closeButton&&this.closeButton.remove(),this.$elm.removeClass("current"),this.options.doFade?this.$elm.fadeOut(this.options.fadeDuration):this.$elm.hide(),this.$elm.trigger(a.modal.CLOSE,[this._ctx()])},showSpinner:function(){this.options.showSpinner&&(this.spinner=this.spinner||a('<div class="'+this.options.modalClass+'-spinner"></div>').append(this.options.spinnerHtml),this.$body.append(this.spinner),this.spinner.show())},hideSpinner:function(){this.spinner&&this.spinner.remove()},center:function(){this.$elm.css({position:"fixed",top:"50%",left:"50%",marginTop:-(this.$elm.outerHeight()/2),marginLeft:-(this.$elm.outerWidth()/2),zIndex:this.options.zIndex+1})},_ctx:function(){return{elm:this.$elm,blocker:this.blocker,options:this.options}}},a.modal.prototype.resize=a.modal.prototype.center,a.modal.close=function(a){if(b){a&&a.preventDefault(),b.close();var c=b.$elm;return b=null,c}},a.modal.resize=function(){b&&b.resize()},a.modal.isActive=function(){return b?!0:!1},a.modal.defaults={overlay:"#000",opacity:.75,zIndex:1,escapeClose:!0,clickClose:!0,closeText:"Close",closeClass:"",modalClass:"modal",spinnerHtml:null,showSpinner:!0,showClose:!0,fadeDuration:null,fadeDelay:1},a.modal.BEFORE_BLOCK="modal:before-block",a.modal.BLOCK="modal:block",a.modal.BEFORE_OPEN="modal:before-open",a.modal.OPEN="modal:open",a.modal.BEFORE_CLOSE="modal:before-close",a.modal.CLOSE="modal:close",a.modal.AJAX_SEND="modal:ajax:send",a.modal.AJAX_SUCCESS="modal:ajax:success",a.modal.AJAX_FAIL="modal:ajax:fail",a.modal.AJAX_COMPLETE="modal:ajax:complete",a.fn.modal=function(c){return 1===this.length&&(b=new a.modal(this,c)),this},a(document).on("click.modal",'a[rel="modal:close"]',a.modal.close),a(document).on("click.modal",'a[rel="modal:open"]',function(b){b.preventDefault(),a(this).modal()})}(jQuery);
/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a)if(j[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.substr(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function L(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:/^color$/.test(f)?(g.appendChild(k),g.offsetWidth,e=k.value!=l,g.removeChild(k)):e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.5.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k=b.createElement("div"),l=b.body,m=l?l:b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),k.appendChild(j);return f=["&#173;","<style>",a,"</style>"].join(""),k.id=h,m.innerHTML+=f,m.appendChild(k),l||(m.style.background="",g.appendChild(m)),i=c(k,a),l?k.parentNode.removeChild(k):m.parentNode.removeChild(m),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e});var K=function(c,d){var f=c.join(""),g=d.length;y(f,function(c,d){var f=b.styleSheets[b.styleSheets.length-1],h=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"",i=c.childNodes,j={};while(g--)j[i[g].id]=i[g];e.touch="ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch||(j.touch&&j.touch.offsetTop)===9,e.csstransforms3d=(j.csstransforms3d&&j.csstransforms3d.offsetLeft)===9&&j.csstransforms3d.offsetHeight===3,e.generatedcontent=(j.generatedcontent&&j.generatedcontent.offsetHeight)>=1,e.fontface=/src/i.test(h)&&h.indexOf(d.split(" ")[0])===0},g,d)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",n.join("touch-enabled),("),h,")","{#touch{top:9px;position:absolute}}"].join(""),["@media (",n.join("transform-3d),("),h,")","{#csstransforms3d{left:9px;position:absolute;height:3px;}}"].join(""),['#generatedcontent:after{content:"',l,'";visibility:hidden}'].join("")],["fontface","touch","csstransforms3d","generatedcontent"]);s.flexbox=function(){return J("flexOrder")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){try{var d=b.createElement("canvas"),e;e=!(!a.WebGLRenderingContext||!d.getContext("experimental-webgl")&&!d.getContext("webgl")),d=c}catch(f){e=!1}return e},s.touch=function(){return e.touch},s.geolocation=function(){return!!navigator.geolocation},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){for(var b=-1,c=p.length;++b<c;)if(a[p[b]+"WebSocket"])return!0;return"WebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&(a=e.csstransforms3d),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){return e.fontface},s.generatedcontent=function(){return e.generatedcontent},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var M in s)C(s,M)&&(x=M.toLowerCase(),e[x]=s[M](),v.push((e[x]?"":"no-")+x));return e.input||L(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,g.className+=" "+(b?"":"no-")+a,e[a]=b}return e},D(""),i=k=null,function(a,b){function g(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function h(){var a=k.elements;return typeof a=="string"?a.split(" "):a}function i(a){var b={},c=a.createElement,e=a.createDocumentFragment,f=e();a.createElement=function(a){var e=(b[a]||(b[a]=c(a))).cloneNode();return k.shivMethods&&e.canHaveChildren&&!d.test(a)?f.appendChild(e):e},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+h().join().replace(/\w+/g,function(a){return b[a]=c(a),f.createElement(a),'c("'+a+'")'})+");return n}")(k,f)}function j(a){var b;return a.documentShived?a:(k.shivCSS&&!e&&(b=!!g(a,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),f||(b=!i(a)),b&&(a.documentShived=b),a)}var c=a.html5||{},d=/^<|^(?:button|form|map|select|textarea)$/i,e,f;(function(){var a=b.createElement("a");a.innerHTML="<xyz></xyz>",e="hidden"in a,f=a.childNodes.length==1||function(){try{b.createElement("a")}catch(a){return!0}var c=b.createDocumentFragment();return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"}()})();var k={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:j};a.html5=k,j(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return o.call(a)=="[object Function]"}function e(a){return typeof a=="string"}function f(){}function g(a){return!a||a=="loaded"||a=="complete"||a=="uninitialized"}function h(){var a=p.shift();q=1,a?a.t?m(function(){(a.t=="c"?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){a!="img"&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l={},o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};y[c]===1&&(r=1,y[c]=[],l=b.createElement(a)),a=="object"?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),a!="img"&&(r||y[c]===2?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i(b=="c"?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),p.length==1&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&o.call(a.opera)=="[object Opera]",l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return o.call(a)=="[object Array]"},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,i){var j=b(a),l=j.autoCallback;j.url.split(".").pop().split("?").shift(),j.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]||h),j.instead?j.instead(a,e,f,g,i):(y[j.url]?j.noexec=!0:y[j.url]=1,f.load(j.url,j.forceCSS||!j.forceJS&&"css"==j.url.split(".").pop().split("?").shift()?"c":c,j.noexec,j.attrs,j.timeout),(d(e)||d(l))&&f.load(function(){k(),e&&e(j.origUrl,i,g),l&&l(j.origUrl,i,g),y[j.url]=2})))}function i(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var j,l,m=this.yepnope.loader;if(e(a))g(a,0,m,0);else if(w(a))for(j=0;j<a.length;j++)l=a[j],e(l)?g(l,0,m,0):w(l)?B(l):Object(l)===l&&i(l,m);else Object(a)===a&&i(a,m)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
window.matchMedia=window.matchMedia||(function(e,f){var c,a=e.documentElement,b=a.firstElementChild||a.firstChild,d=e.createElement("body"),g=e.createElement("div");g.id="mq-test-1";g.style.cssText="position:absolute;top:-100em";d.appendChild(g);return function(h){g.innerHTML='&shy;<style media="'+h+'"> #mq-test-1 { width: 42px; }</style>';a.insertBefore(d,b);c=g.offsetWidth==42;a.removeChild(d);return{matches:c,media:h}}})(document);

/*! Respond.js v1.1.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
(function(e){e.respond={};respond.update=function(){};respond.mediaQueriesSupported=e.matchMedia&&e.matchMedia("only all").matches;if(respond.mediaQueriesSupported){return}var u=e.document,r=u.documentElement,h=[],j=[],p=[],n={},g=30,f=u.getElementsByTagName("head")[0]||r,b=f.getElementsByTagName("link"),d=[],a=function(){var C=b,x=C.length,A=0,z,y,B,w;for(;A<x;A++){z=C[A],y=z.href,B=z.media,w=z.rel&&z.rel.toLowerCase()==="stylesheet";if(!!y&&w&&!n[y]){if(z.styleSheet&&z.styleSheet.rawCssText){l(z.styleSheet.rawCssText,y,B);n[y]=true}else{if(!/^([a-zA-Z:]*\/\/)/.test(y)||y.replace(RegExp.$1,"").split("/")[0]===e.location.host){d.push({href:y,media:B})}}}}t()},t=function(){if(d.length){var w=d.shift();m(w.href,function(x){l(x,w.href,w.media);n[w.href]=true;t()})}},l=function(H,w,y){var F=H.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),I=F&&F.length||0,w=w.substring(0,w.lastIndexOf("/")),x=function(J){return J.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+w+"$2$3")},z=!I&&y,C=0,B,D,E,A,G;if(w.length){w+="/"}if(z){I=1}for(;C<I;C++){B=0;if(z){D=y;j.push(x(H))}else{D=F[C].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1;j.push(RegExp.$2&&x(RegExp.$2))}A=D.split(",");G=A.length;for(;B<G;B++){E=A[B];h.push({media:E.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:j.length-1,hasquery:E.indexOf("(")>-1,minw:E.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:E.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}}i()},k,q,v=function(){var y,z=u.createElement("div"),w=u.body,x=false;z.style.cssText="position:absolute;font-size:1em;width:1em";if(!w){w=x=u.createElement("body")}w.appendChild(z);r.insertBefore(w,r.firstChild);y=z.offsetWidth;if(x){r.removeChild(w)}else{w.removeChild(z)}y=o=parseFloat(y);return y},o,i=function(H){var w="clientWidth",A=r[w],G=u.compatMode==="CSS1Compat"&&A||u.body[w]||A,C={},F=b[b.length-1],y=(new Date()).getTime();if(H&&k&&y-k<g){clearTimeout(q);q=setTimeout(i,g);return}else{k=y}for(var D in h){var J=h[D],B=J.minw,I=J.maxw,z=B===null,K=I===null,x="em";if(!!B){B=parseFloat(B)*(B.indexOf(x)>-1?(o||v()):1)}if(!!I){I=parseFloat(I)*(I.indexOf(x)>-1?(o||v()):1)}if(!J.hasquery||(!z||!K)&&(z||G>=B)&&(K||G<=I)){if(!C[J.media]){C[J.media]=[]}C[J.media].push(j[J.rules])}}for(var D in p){if(p[D]&&p[D].parentNode===f){f.removeChild(p[D])}}for(var D in C){var L=u.createElement("style"),E=C[D].join("\n");L.type="text/css";L.media=D;f.insertBefore(L,F.nextSibling);if(L.styleSheet){L.styleSheet.cssText=E}else{L.appendChild(u.createTextNode(E))}p.push(L)}},m=function(w,y){var x=c();if(!x){return}x.open("GET",w,true);x.onreadystatechange=function(){if(x.readyState!=4||x.status!=200&&x.status!=304){return}y(x.responseText)};if(x.readyState==4){return}x.send(null)},c=(function(){var w=false;try{w=new XMLHttpRequest()}catch(x){w=new ActiveXObject("Microsoft.XMLHTTP")}return function(){return w}})();a();respond.update=a;function s(){i(true)}if(e.addEventListener){e.addEventListener("resize",s,false)}else{if(e.attachEvent){e.attachEvent("onresize",s)}}})(this);

// Underscore.js 1.3.3
// (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function(){function r(a,c,d){if(a===c)return 0!==a||1/a==1/c;if(null==a||null==c)return a===c;a._chain&&(a=a._wrapped);c._chain&&(c=c._wrapped);if(a.isEqual&&b.isFunction(a.isEqual))return a.isEqual(c);if(c.isEqual&&b.isFunction(c.isEqual))return c.isEqual(a);var e=l.call(a);if(e!=l.call(c))return!1;switch(e){case "[object String]":return a==""+c;case "[object Number]":return a!=+a?c!=+c:0==a?1/a==1/c:a==+c;case "[object Date]":case "[object Boolean]":return+a==+c;case "[object RegExp]":return a.source==
c.source&&a.global==c.global&&a.multiline==c.multiline&&a.ignoreCase==c.ignoreCase}if("object"!=typeof a||"object"!=typeof c)return!1;for(var f=d.length;f--;)if(d[f]==a)return!0;d.push(a);var f=0,g=!0;if("[object Array]"==e){if(f=a.length,g=f==c.length)for(;f--&&(g=f in a==f in c&&r(a[f],c[f],d)););}else{if("constructor"in a!="constructor"in c||a.constructor!=c.constructor)return!1;for(var h in a)if(b.has(a,h)&&(f++,!(g=b.has(c,h)&&r(a[h],c[h],d))))break;if(g){for(h in c)if(b.has(c,h)&&!f--)break;
g=!f}}d.pop();return g}var s=this,I=s._,o={},k=Array.prototype,p=Object.prototype,i=k.slice,J=k.unshift,l=p.toString,K=p.hasOwnProperty,y=k.forEach,z=k.map,A=k.reduce,B=k.reduceRight,C=k.filter,D=k.every,E=k.some,q=k.indexOf,F=k.lastIndexOf,p=Array.isArray,L=Object.keys,t=Function.prototype.bind,b=function(a){return new m(a)};"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(exports=module.exports=b),exports._=b):s._=b;b.VERSION="1.3.3";var j=b.each=b.forEach=function(a,
c,d){if(a!=null)if(y&&a.forEach===y)a.forEach(c,d);else if(a.length===+a.length)for(var e=0,f=a.length;e<f;e++){if(e in a&&c.call(d,a[e],e,a)===o)break}else for(e in a)if(b.has(a,e)&&c.call(d,a[e],e,a)===o)break};b.map=b.collect=function(a,c,b){var e=[];if(a==null)return e;if(z&&a.map===z)return a.map(c,b);j(a,function(a,g,h){e[e.length]=c.call(b,a,g,h)});if(a.length===+a.length)e.length=a.length;return e};b.reduce=b.foldl=b.inject=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(A&&
a.reduce===A){e&&(c=b.bind(c,e));return f?a.reduce(c,d):a.reduce(c)}j(a,function(a,b,i){if(f)d=c.call(e,d,a,b,i);else{d=a;f=true}});if(!f)throw new TypeError("Reduce of empty array with no initial value");return d};b.reduceRight=b.foldr=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(B&&a.reduceRight===B){e&&(c=b.bind(c,e));return f?a.reduceRight(c,d):a.reduceRight(c)}var g=b.toArray(a).reverse();e&&!f&&(c=b.bind(c,e));return f?b.reduce(g,c,d,e):b.reduce(g,c)};b.find=b.detect=function(a,
c,b){var e;G(a,function(a,g,h){if(c.call(b,a,g,h)){e=a;return true}});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(C&&a.filter===C)return a.filter(c,b);j(a,function(a,g,h){c.call(b,a,g,h)&&(e[e.length]=a)});return e};b.reject=function(a,c,b){var e=[];if(a==null)return e;j(a,function(a,g,h){c.call(b,a,g,h)||(e[e.length]=a)});return e};b.every=b.all=function(a,c,b){var e=true;if(a==null)return e;if(D&&a.every===D)return a.every(c,b);j(a,function(a,g,h){if(!(e=e&&c.call(b,
a,g,h)))return o});return!!e};var G=b.some=b.any=function(a,c,d){c||(c=b.identity);var e=false;if(a==null)return e;if(E&&a.some===E)return a.some(c,d);j(a,function(a,b,h){if(e||(e=c.call(d,a,b,h)))return o});return!!e};b.include=b.contains=function(a,c){var b=false;if(a==null)return b;if(q&&a.indexOf===q)return a.indexOf(c)!=-1;return b=G(a,function(a){return a===c})};b.invoke=function(a,c){var d=i.call(arguments,2);return b.map(a,function(a){return(b.isFunction(c)?c||a:a[c]).apply(a,d)})};b.pluck=
function(a,c){return b.map(a,function(a){return a[c]})};b.max=function(a,c,d){if(!c&&b.isArray(a)&&a[0]===+a[0])return Math.max.apply(Math,a);if(!c&&b.isEmpty(a))return-Infinity;var e={computed:-Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b>=e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,c,d){if(!c&&b.isArray(a)&&a[0]===+a[0])return Math.min.apply(Math,a);if(!c&&b.isEmpty(a))return Infinity;var e={computed:Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b<e.computed&&
(e={value:a,computed:b})});return e.value};b.shuffle=function(a){var b=[],d;j(a,function(a,f){d=Math.floor(Math.random()*(f+1));b[f]=b[d];b[d]=a});return b};b.sortBy=function(a,c,d){var e=b.isFunction(c)?c:function(a){return a[c]};return b.pluck(b.map(a,function(a,b,c){return{value:a,criteria:e.call(d,a,b,c)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return c===void 0?1:d===void 0?-1:c<d?-1:c>d?1:0}),"value")};b.groupBy=function(a,c){var d={},e=b.isFunction(c)?c:function(a){return a[c]};
j(a,function(a,b){var c=e(a,b);(d[c]||(d[c]=[])).push(a)});return d};b.sortedIndex=function(a,c,d){d||(d=b.identity);for(var e=0,f=a.length;e<f;){var g=e+f>>1;d(a[g])<d(c)?e=g+1:f=g}return e};b.toArray=function(a){return!a?[]:b.isArray(a)||b.isArguments(a)?i.call(a):a.toArray&&b.isFunction(a.toArray)?a.toArray():b.values(a)};b.size=function(a){return b.isArray(a)?a.length:b.keys(a).length};b.first=b.head=b.take=function(a,b,d){return b!=null&&!d?i.call(a,0,b):a[0]};b.initial=function(a,b,d){return i.call(a,
0,a.length-(b==null||d?1:b))};b.last=function(a,b,d){return b!=null&&!d?i.call(a,Math.max(a.length-b,0)):a[a.length-1]};b.rest=b.tail=function(a,b,d){return i.call(a,b==null||d?1:b)};b.compact=function(a){return b.filter(a,function(a){return!!a})};b.flatten=function(a,c){return b.reduce(a,function(a,e){if(b.isArray(e))return a.concat(c?e:b.flatten(e));a[a.length]=e;return a},[])};b.without=function(a){return b.difference(a,i.call(arguments,1))};b.uniq=b.unique=function(a,c,d){var d=d?b.map(a,d):a,
e=[];a.length<3&&(c=true);b.reduce(d,function(d,g,h){if(c?b.last(d)!==g||!d.length:!b.include(d,g)){d.push(g);e.push(a[h])}return d},[]);return e};b.union=function(){return b.uniq(b.flatten(arguments,true))};b.intersection=b.intersect=function(a){var c=i.call(arguments,1);return b.filter(b.uniq(a),function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};b.difference=function(a){var c=b.flatten(i.call(arguments,1),true);return b.filter(a,function(a){return!b.include(c,a)})};b.zip=function(){for(var a=
i.call(arguments),c=b.max(b.pluck(a,"length")),d=Array(c),e=0;e<c;e++)d[e]=b.pluck(a,""+e);return d};b.indexOf=function(a,c,d){if(a==null)return-1;var e;if(d){d=b.sortedIndex(a,c);return a[d]===c?d:-1}if(q&&a.indexOf===q)return a.indexOf(c);d=0;for(e=a.length;d<e;d++)if(d in a&&a[d]===c)return d;return-1};b.lastIndexOf=function(a,b){if(a==null)return-1;if(F&&a.lastIndexOf===F)return a.lastIndexOf(b);for(var d=a.length;d--;)if(d in a&&a[d]===b)return d;return-1};b.range=function(a,b,d){if(arguments.length<=
1){b=a||0;a=0}for(var d=arguments[2]||1,e=Math.max(Math.ceil((b-a)/d),0),f=0,g=Array(e);f<e;){g[f++]=a;a=a+d}return g};var H=function(){};b.bind=function(a,c){var d,e;if(a.bind===t&&t)return t.apply(a,i.call(arguments,1));if(!b.isFunction(a))throw new TypeError;e=i.call(arguments,2);return d=function(){if(!(this instanceof d))return a.apply(c,e.concat(i.call(arguments)));H.prototype=a.prototype;var b=new H,g=a.apply(b,e.concat(i.call(arguments)));return Object(g)===g?g:b}};b.bindAll=function(a){var c=
i.call(arguments,1);c.length==0&&(c=b.functions(a));j(c,function(c){a[c]=b.bind(a[c],a)});return a};b.memoize=function(a,c){var d={};c||(c=b.identity);return function(){var e=c.apply(this,arguments);return b.has(d,e)?d[e]:d[e]=a.apply(this,arguments)}};b.delay=function(a,b){var d=i.call(arguments,2);return setTimeout(function(){return a.apply(null,d)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(i.call(arguments,1)))};b.throttle=function(a,c){var d,e,f,g,h,i,j=b.debounce(function(){h=
g=false},c);return function(){d=this;e=arguments;f||(f=setTimeout(function(){f=null;h&&a.apply(d,e);j()},c));g?h=true:i=a.apply(d,e);j();g=true;return i}};b.debounce=function(a,b,d){var e;return function(){var f=this,g=arguments;d&&!e&&a.apply(f,g);clearTimeout(e);e=setTimeout(function(){e=null;d||a.apply(f,g)},b)}};b.once=function(a){var b=false,d;return function(){if(b)return d;b=true;return d=a.apply(this,arguments)}};b.wrap=function(a,b){return function(){var d=[a].concat(i.call(arguments,0));
return b.apply(this,d)}};b.compose=function(){var a=arguments;return function(){for(var b=arguments,d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};b.after=function(a,b){return a<=0?b():function(){if(--a<1)return b.apply(this,arguments)}};b.keys=L||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var c=[],d;for(d in a)b.has(a,d)&&(c[c.length]=d);return c};b.values=function(a){return b.map(a,b.identity)};b.functions=b.methods=function(a){var c=[],d;for(d in a)b.isFunction(a[d])&&
c.push(d);return c.sort()};b.extend=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]=b[d]});return a};b.pick=function(a){var c={};j(b.flatten(i.call(arguments,1)),function(b){b in a&&(c[b]=a[b])});return c};b.defaults=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]==null&&(a[d]=b[d])});return a};b.clone=function(a){return!b.isObject(a)?a:b.isArray(a)?a.slice():b.extend({},a)};b.tap=function(a,b){b(a);return a};b.isEqual=function(a,b){return r(a,b,[])};b.isEmpty=
function(a){if(a==null)return true;if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(b.has(a,c))return false;return true};b.isElement=function(a){return!!(a&&a.nodeType==1)};b.isArray=p||function(a){return l.call(a)=="[object Array]"};b.isObject=function(a){return a===Object(a)};b.isArguments=function(a){return l.call(a)=="[object Arguments]"};b.isArguments(arguments)||(b.isArguments=function(a){return!(!a||!b.has(a,"callee"))});b.isFunction=function(a){return l.call(a)=="[object Function]"};
b.isString=function(a){return l.call(a)=="[object String]"};b.isNumber=function(a){return l.call(a)=="[object Number]"};b.isFinite=function(a){return b.isNumber(a)&&isFinite(a)};b.isNaN=function(a){return a!==a};b.isBoolean=function(a){return a===true||a===false||l.call(a)=="[object Boolean]"};b.isDate=function(a){return l.call(a)=="[object Date]"};b.isRegExp=function(a){return l.call(a)=="[object RegExp]"};b.isNull=function(a){return a===null};b.isUndefined=function(a){return a===void 0};b.has=function(a,
b){return K.call(a,b)};b.noConflict=function(){s._=I;return this};b.identity=function(a){return a};b.times=function(a,b,d){for(var e=0;e<a;e++)b.call(d,e)};b.escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")};b.result=function(a,c){if(a==null)return null;var d=a[c];return b.isFunction(d)?d.call(a):d};b.mixin=function(a){j(b.functions(a),function(c){M(c,b[c]=a[c])})};var N=0;b.uniqueId=
function(a){var b=N++;return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var u=/.^/,n={"\\":"\\","'":"'",r:"\r",n:"\n",t:"\t",u2028:"\u2028",u2029:"\u2029"},v;for(v in n)n[n[v]]=v;var O=/\\|'|\r|\n|\t|\u2028|\u2029/g,P=/\\(\\|'|r|n|t|u2028|u2029)/g,w=function(a){return a.replace(P,function(a,b){return n[b]})};b.template=function(a,c,d){d=b.defaults(d||{},b.templateSettings);a="__p+='"+a.replace(O,function(a){return"\\"+n[a]}).replace(d.escape||
u,function(a,b){return"'+\n_.escape("+w(b)+")+\n'"}).replace(d.interpolate||u,function(a,b){return"'+\n("+w(b)+")+\n'"}).replace(d.evaluate||u,function(a,b){return"';\n"+w(b)+"\n;__p+='"})+"';\n";d.variable||(a="with(obj||{}){\n"+a+"}\n");var a="var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n"+a+"return __p;\n",e=new Function(d.variable||"obj","_",a);if(c)return e(c,b);c=function(a){return e.call(this,a,b)};c.source="function("+(d.variable||"obj")+"){\n"+a+"}";return c};
b.chain=function(a){return b(a).chain()};var m=function(a){this._wrapped=a};b.prototype=m.prototype;var x=function(a,c){return c?b(a).chain():a},M=function(a,c){m.prototype[a]=function(){var a=i.call(arguments);J.call(a,this._wrapped);return x(c.apply(b,a),this._chain)}};b.mixin(b);j("pop,push,reverse,shift,sort,splice,unshift".split(","),function(a){var b=k[a];m.prototype[a]=function(){var d=this._wrapped;b.apply(d,arguments);var e=d.length;(a=="shift"||a=="splice")&&e===0&&delete d[0];return x(d,
this._chain)}});j(["concat","join","slice"],function(a){var b=k[a];m.prototype[a]=function(){return x(b.apply(this._wrapped,arguments),this._chain)}});m.prototype.chain=function(){this._chain=true;return this};m.prototype.value=function(){return this._wrapped}}).call(this);

//     Underscore Strings v0.1
//     Enhances the _ object with a series of useful methods
//     extracted from Protorype's js String module
//     Source code available at:
//     http://github.com/aganov/underscore-strings

// [Run test suite](../spec/runner.html) |
// [Download .tar.gz](http://github.com/aganov/underscore-strings/tarball/master) |
// [Download .zip](http://github.com/aganov/underscore-strings/zipball/master)

// TODO
//
// - port [String#gsub](http://api.prototypejs.org/language/String/prototype/gsub/) method
// - port [String#sub](http://api.prototypejs.org/language/String/prototype/sub/) method
(function(){
  
  // Establish the root object, `window` in the browser, or `global` on the server.
  var root = this;
    
  var strip = function(string) {
    if (String.prototype.trim) {
      return string.trim();
    }
    
    return string.replace(/^\s+/, '').replace(/\s+$/, '');
  }
  
  var str = {
    // ## blank
    // [String#blank](http://api.prototypejs.org/language/String/prototype/blank/)
    // Check if the string is "blank" - either empty (length of `0`) or
    // containing only whitespace.
    // ##### Example
    //     _("").blank()
    //     » true
    blank: function(string) {
      return /^\s*$/.test(string);
    },
    
    // ## camelize
    // [String#camelize](http://api.prototypejs.org/language/String/prototype/camelize/)
    // Converts a string separated by dashes into a camelCase equivalent.
    // For instance, `foo-bar` would be converted to `fooBar`.
    // ##### Example
    //     _("background-color").camelize()
    //     » "backgroundColor"
    camelize: function(string) {
      return string.replace(/-+(.)?/g, function(match, chr) {
        return chr ? chr.toUpperCase() : '';
      });
    },
    
    // ## capitalize
    // [String#capitalize](http://api.prototypejs.org/language/String/prototype/capitalize/)
    // Capitalizes the first letter of a string and downcases all the others.
    // ##### Examples
    //     _("hello").capitalize()
    //     » "Hello"
    capitalize: function(string) {
      return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
    },
    
    // ## dasherize
    // [String#dasherize](http://api.prototypejs.org/language/String/prototype/dasherize/)
    // Replaces every instance of the underscore character `_` by a dash `-`.
    // ##### Examples
    //     _("border_bottom_width").dasherize()
    //     » "border-bottom-width"
    dasherize: function(string) {
      return string.replace(/_/g, '-');
    },
    
    // ## empty
    // [String#empty](http://api.prototypejs.org/language/String/prototype/empty/)
    // Checks if the string is empty.
    // ##### Examples
    //     _("").empty()
    //     » true
    empty: function(string) {
      return string == ''
    },
    
    // ## endsWith
    // [String#endsWith](http://api.prototypejs.org/language/String/prototype/endsWith/)
    // Checks if the string ends with substring.
    // ##### Example
    //     _("slaughter").endsWith("laughter")
    //     » true
    endsWith: function (string, pattern) {
      var d = string.length - pattern.length;
      // We use `indexOf` instead of `lastIndexOf` to avoid tying execution
      // time to string length when string doesn't end with pattern.
      return d >= 0 && string.indexOf(pattern, d) === d;
    },
    
    // ## escapeHTML
    // [String#escapeHTML](http://api.prototypejs.org/language/String/prototype/escapeHTML/)
    // Converts HTML special characters to their entity equivalents.
    // ##### Examples
    //     _("<div class="article">This is an article</div>").escapeHTML()
    //     » "&lt;div class="article"&gt;This is an article&lt;/div&gt;"
    escapeHTML: function(string) {
      return string.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    },
    
    // ## include
    // [String#include](http://api.prototypejs.org/language/String/prototype/include/)
    // Check if the string contains a substring.
    // ##### Examples
    //     _("Underscore").include("score")
    //     » true
    include: function(string, pattern) {
      return string.indexOf(pattern) > -1;
    },
    
    // ## toQueryParams
    // [String#toQueryParams](http://api.prototypejs.org/language/String/prototype/toQueryParams/)
    // Parses a URI-like query string and returns an object composed of parameter/value pairs.
    // ##### Example
    //     _("section=blog&id=45").toQueryParams()
    //     » {section: 'blog', id: '45'}
    //
    //     _("http://www.example.com?section=blog&id=45#comments").toQueryParams()
    //     » {section: 'blog', id: '45'}
    toQueryParams: function(string, separator) {
      var match = _(string).strip().match(/([^?#]*)(#.*)?$/);
      if (!match) return { };
      
      return _(match[1].split(separator || '&')).reduce(function(hash, pair) {
        if ((pair = pair.split('='))[0]) {
          var key = decodeURIComponent(pair.shift()),
              value = pair.length > 1 ? pair.join('=') : pair[0];
              
          if (value != undefined) value = decodeURIComponent(value);
          
          if (key in hash) {
            if (!_.isArray(hash[key])) hash[key] = [hash[key]];
            hash[key].push(value);
          }
          else hash[key] = value;
        }
        return hash;
      }, {});
    },
    
    // ## startsWith
    // [String#startsWith](http://api.prototypejs.org/language/String/prototype/startsWith/)
    // Checks if the string starts with `substring`
    // ##### Example
    //     _("Underscore").include("Under")
    //     » true
    startsWith: function(string, pattern) {
      return string.lastIndexOf(pattern, 0) === 0;
    },
    
    // ## strip
    // [String#strip](http://api.prototypejs.org/language/String/prototype/strip/)
    // Strips all leading and trailing whitespace from a string.
    // ##### Example
    //     _('    hello world!    ').strip()
    //     » "hello world!"
    strip: strip,
    
    // ## truncate
    // [String#truncate](http://api.prototypejs.org/language/String/prototype/truncate/)
    // Truncates a string to the given length and appends a suffix
    // to it (indicating that it is only an excerpt).
    // ##### Example
    //     _('A random sentence whose length exceeds 30 characters.').truncate()
    //     » "A random sentence whose len..."
    //
    //     _('Some random text').truncate(10)
    //     » "Some ra..."
    truncate: function(string, length, truncation) {
      length = length || 30;
      truncation = _.isUndefined(truncation) ? '...' : truncation;
      return string.length > length ?
        string.slice(0, length - truncation.length) + truncation : String(string);
    },
    
    // ## underscore
    // [String#underscore](http://api.prototypejs.org/language/String/prototype/underscore/)
    // Converts a camelized string into a series of words separated by an
    // underscore `_`.
    // ##### Example
    //     _('borderBottomWidth').underscore()
    //     » "border_bottom_width"
    underscore: function(string) {
      return string.replace(/::/g, '/')
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
        .replace(/([a-z\d])([A-Z])/g, '$1_$2')
        .replace(/-/g, '_')
        .toLowerCase();
    },
    
    // ## unescapeHTML
    // [String#unescapeHTML](http://api.prototypejs.org/language/String/prototype/unescapeHTML/)
    // Converts the entity forms of special HTML characters
    // to their normal form.
    // ##### Examples
    //     _("x &gt; 10").unescapeHTML()
    //     » "x > 10"
    unescapeHTML: function(string) {
      return string.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
    }
  };
  
  // ### aliases
  // `parseQuery` = `toQueryParams`
  str.parseQuery = str.toQueryParams;
  
  root._.mixin(str);
}());
// Backbone.js 0.9.2

// (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Backbone may be freely distributed under the MIT license.
// For all details and documentation:
// http://backbonejs.org
(function(){var l=this,y=l.Backbone,z=Array.prototype.slice,A=Array.prototype.splice,g;g="undefined"!==typeof exports?exports:l.Backbone={};g.VERSION="0.9.2";var f=l._;!f&&"undefined"!==typeof require&&(f=require("underscore"));var i=l.jQuery||l.Zepto||l.ender;g.setDomLibrary=function(a){i=a};g.noConflict=function(){l.Backbone=y;return this};g.emulateHTTP=!1;g.emulateJSON=!1;var p=/\s+/,k=g.Events={on:function(a,b,c){var d,e,f,g,j;if(!b)return this;a=a.split(p);for(d=this._callbacks||(this._callbacks=
{});e=a.shift();)f=(j=d[e])?j.tail:{},f.next=g={},f.context=c,f.callback=b,d[e]={tail:g,next:j?j.next:f};return this},off:function(a,b,c){var d,e,h,g,j,q;if(e=this._callbacks){if(!a&&!b&&!c)return delete this._callbacks,this;for(a=a?a.split(p):f.keys(e);d=a.shift();)if(h=e[d],delete e[d],h&&(b||c))for(g=h.tail;(h=h.next)!==g;)if(j=h.callback,q=h.context,b&&j!==b||c&&q!==c)this.on(d,j,q);return this}},trigger:function(a){var b,c,d,e,f,g;if(!(d=this._callbacks))return this;f=d.all;a=a.split(p);for(g=
z.call(arguments,1);b=a.shift();){if(c=d[b])for(e=c.tail;(c=c.next)!==e;)c.callback.apply(c.context||this,g);if(c=f){e=c.tail;for(b=[b].concat(g);(c=c.next)!==e;)c.callback.apply(c.context||this,b)}}return this}};k.bind=k.on;k.unbind=k.off;var o=g.Model=function(a,b){var c;a||(a={});b&&b.parse&&(a=this.parse(a));if(c=n(this,"defaults"))a=f.extend({},c,a);b&&b.collection&&(this.collection=b.collection);this.attributes={};this._escapedAttributes={};this.cid=f.uniqueId("c");this.changed={};this._silent=
{};this._pending={};this.set(a,{silent:!0});this.changed={};this._silent={};this._pending={};this._previousAttributes=f.clone(this.attributes);this.initialize.apply(this,arguments)};f.extend(o.prototype,k,{changed:null,_silent:null,_pending:null,idAttribute:"id",initialize:function(){},toJSON:function(){return f.clone(this.attributes)},get:function(a){return this.attributes[a]},escape:function(a){var b;if(b=this._escapedAttributes[a])return b;b=this.get(a);return this._escapedAttributes[a]=f.escape(null==
b?"":""+b)},has:function(a){return null!=this.get(a)},set:function(a,b,c){var d,e;f.isObject(a)||null==a?(d=a,c=b):(d={},d[a]=b);c||(c={});if(!d)return this;d instanceof o&&(d=d.attributes);if(c.unset)for(e in d)d[e]=void 0;if(!this._validate(d,c))return!1;this.idAttribute in d&&(this.id=d[this.idAttribute]);var b=c.changes={},h=this.attributes,g=this._escapedAttributes,j=this._previousAttributes||{};for(e in d){a=d[e];if(!f.isEqual(h[e],a)||c.unset&&f.has(h,e))delete g[e],(c.silent?this._silent:
b)[e]=!0;c.unset?delete h[e]:h[e]=a;!f.isEqual(j[e],a)||f.has(h,e)!=f.has(j,e)?(this.changed[e]=a,c.silent||(this._pending[e]=!0)):(delete this.changed[e],delete this._pending[e])}c.silent||this.change(c);return this},unset:function(a,b){(b||(b={})).unset=!0;return this.set(a,null,b)},clear:function(a){(a||(a={})).unset=!0;return this.set(f.clone(this.attributes),a)},fetch:function(a){var a=a?f.clone(a):{},b=this,c=a.success;a.success=function(d,e,f){if(!b.set(b.parse(d,f),a))return!1;c&&c(b,d)};
a.error=g.wrapError(a.error,b,a);return(this.sync||g.sync).call(this,"read",this,a)},save:function(a,b,c){var d,e;f.isObject(a)||null==a?(d=a,c=b):(d={},d[a]=b);c=c?f.clone(c):{};if(c.wait){if(!this._validate(d,c))return!1;e=f.clone(this.attributes)}a=f.extend({},c,{silent:!0});if(d&&!this.set(d,c.wait?a:c))return!1;var h=this,i=c.success;c.success=function(a,b,e){b=h.parse(a,e);if(c.wait){delete c.wait;b=f.extend(d||{},b)}if(!h.set(b,c))return false;i?i(h,a):h.trigger("sync",h,a,c)};c.error=g.wrapError(c.error,
h,c);b=this.isNew()?"create":"update";b=(this.sync||g.sync).call(this,b,this,c);c.wait&&this.set(e,a);return b},destroy:function(a){var a=a?f.clone(a):{},b=this,c=a.success,d=function(){b.trigger("destroy",b,b.collection,a)};if(this.isNew())return d(),!1;a.success=function(e){a.wait&&d();c?c(b,e):b.trigger("sync",b,e,a)};a.error=g.wrapError(a.error,b,a);var e=(this.sync||g.sync).call(this,"delete",this,a);a.wait||d();return e},url:function(){var a=n(this,"urlRoot")||n(this.collection,"url")||t();
return this.isNew()?a:a+("/"==a.charAt(a.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(a){return a},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return null==this.id},change:function(a){a||(a={});var b=this._changing;this._changing=!0;for(var c in this._silent)this._pending[c]=!0;var d=f.extend({},a.changes,this._silent);this._silent={};for(c in d)this.trigger("change:"+c,this,this.get(c),a);if(b)return this;for(;!f.isEmpty(this._pending);){this._pending=
{};this.trigger("change",this,a);for(c in this.changed)!this._pending[c]&&!this._silent[c]&&delete this.changed[c];this._previousAttributes=f.clone(this.attributes)}this._changing=!1;return this},hasChanged:function(a){return!arguments.length?!f.isEmpty(this.changed):f.has(this.changed,a)},changedAttributes:function(a){if(!a)return this.hasChanged()?f.clone(this.changed):!1;var b,c=!1,d=this._previousAttributes,e;for(e in a)if(!f.isEqual(d[e],b=a[e]))(c||(c={}))[e]=b;return c},previous:function(a){return!arguments.length||
!this._previousAttributes?null:this._previousAttributes[a]},previousAttributes:function(){return f.clone(this._previousAttributes)},isValid:function(){return!this.validate(this.attributes)},_validate:function(a,b){if(b.silent||!this.validate)return!0;var a=f.extend({},this.attributes,a),c=this.validate(a,b);if(!c)return!0;b&&b.error?b.error(this,c,b):this.trigger("error",this,c,b);return!1}});var r=g.Collection=function(a,b){b||(b={});b.model&&(this.model=b.model);b.comparator&&(this.comparator=b.comparator);
this._reset();this.initialize.apply(this,arguments);a&&this.reset(a,{silent:!0,parse:b.parse})};f.extend(r.prototype,k,{model:o,initialize:function(){},toJSON:function(a){return this.map(function(b){return b.toJSON(a)})},add:function(a,b){var c,d,e,g,i,j={},k={},l=[];b||(b={});a=f.isArray(a)?a.slice():[a];c=0;for(d=a.length;c<d;c++){if(!(e=a[c]=this._prepareModel(a[c],b)))throw Error("Can't add an invalid model to a collection");g=e.cid;i=e.id;j[g]||this._byCid[g]||null!=i&&(k[i]||this._byId[i])?
l.push(c):j[g]=k[i]=e}for(c=l.length;c--;)a.splice(l[c],1);c=0;for(d=a.length;c<d;c++)(e=a[c]).on("all",this._onModelEvent,this),this._byCid[e.cid]=e,null!=e.id&&(this._byId[e.id]=e);this.length+=d;A.apply(this.models,[null!=b.at?b.at:this.models.length,0].concat(a));this.comparator&&this.sort({silent:!0});if(b.silent)return this;c=0;for(d=this.models.length;c<d;c++)if(j[(e=this.models[c]).cid])b.index=c,e.trigger("add",e,this,b);return this},remove:function(a,b){var c,d,e,g;b||(b={});a=f.isArray(a)?
a.slice():[a];c=0;for(d=a.length;c<d;c++)if(g=this.getByCid(a[c])||this.get(a[c]))delete this._byId[g.id],delete this._byCid[g.cid],e=this.indexOf(g),this.models.splice(e,1),this.length--,b.silent||(b.index=e,g.trigger("remove",g,this,b)),this._removeReference(g);return this},push:function(a,b){a=this._prepareModel(a,b);this.add(a,b);return a},pop:function(a){var b=this.at(this.length-1);this.remove(b,a);return b},unshift:function(a,b){a=this._prepareModel(a,b);this.add(a,f.extend({at:0},b));return a},
shift:function(a){var b=this.at(0);this.remove(b,a);return b},get:function(a){return null==a?void 0:this._byId[null!=a.id?a.id:a]},getByCid:function(a){return a&&this._byCid[a.cid||a]},at:function(a){return this.models[a]},where:function(a){return f.isEmpty(a)?[]:this.filter(function(b){for(var c in a)if(a[c]!==b.get(c))return!1;return!0})},sort:function(a){a||(a={});if(!this.comparator)throw Error("Cannot sort a set without a comparator");var b=f.bind(this.comparator,this);1==this.comparator.length?
this.models=this.sortBy(b):this.models.sort(b);a.silent||this.trigger("reset",this,a);return this},pluck:function(a){return f.map(this.models,function(b){return b.get(a)})},reset:function(a,b){a||(a=[]);b||(b={});for(var c=0,d=this.models.length;c<d;c++)this._removeReference(this.models[c]);this._reset();this.add(a,f.extend({silent:!0},b));b.silent||this.trigger("reset",this,b);return this},fetch:function(a){a=a?f.clone(a):{};void 0===a.parse&&(a.parse=!0);var b=this,c=a.success;a.success=function(d,
e,f){b[a.add?"add":"reset"](b.parse(d,f),a);c&&c(b,d)};a.error=g.wrapError(a.error,b,a);return(this.sync||g.sync).call(this,"read",this,a)},create:function(a,b){var c=this,b=b?f.clone(b):{},a=this._prepareModel(a,b);if(!a)return!1;b.wait||c.add(a,b);var d=b.success;b.success=function(e,f){b.wait&&c.add(e,b);d?d(e,f):e.trigger("sync",a,f,b)};a.save(null,b);return a},parse:function(a){return a},chain:function(){return f(this.models).chain()},_reset:function(){this.length=0;this.models=[];this._byId=
{};this._byCid={}},_prepareModel:function(a,b){b||(b={});a instanceof o?a.collection||(a.collection=this):(b.collection=this,a=new this.model(a,b),a._validate(a.attributes,b)||(a=!1));return a},_removeReference:function(a){this==a.collection&&delete a.collection;a.off("all",this._onModelEvent,this)},_onModelEvent:function(a,b,c,d){("add"==a||"remove"==a)&&c!=this||("destroy"==a&&this.remove(b,d),b&&a==="change:"+b.idAttribute&&(delete this._byId[b.previous(b.idAttribute)],this._byId[b.id]=b),this.trigger.apply(this,
arguments))}});f.each("forEach,each,map,reduce,reduceRight,find,detect,filter,select,reject,every,all,some,any,include,contains,invoke,max,min,sortBy,sortedIndex,toArray,size,first,initial,rest,last,without,indexOf,shuffle,lastIndexOf,isEmpty,groupBy".split(","),function(a){r.prototype[a]=function(){return f[a].apply(f,[this.models].concat(f.toArray(arguments)))}});var u=g.Router=function(a){a||(a={});a.routes&&(this.routes=a.routes);this._bindRoutes();this.initialize.apply(this,arguments)},B=/:\w+/g,
C=/\*\w+/g,D=/[-[\]{}()+?.,\\^$|#\s]/g;f.extend(u.prototype,k,{initialize:function(){},route:function(a,b,c){g.history||(g.history=new m);f.isRegExp(a)||(a=this._routeToRegExp(a));c||(c=this[b]);g.history.route(a,f.bind(function(d){d=this._extractParameters(a,d);c&&c.apply(this,d);this.trigger.apply(this,["route:"+b].concat(d));g.history.trigger("route",this,b,d)},this));return this},navigate:function(a,b){g.history.navigate(a,b)},_bindRoutes:function(){if(this.routes){var a=[],b;for(b in this.routes)a.unshift([b,
this.routes[b]]);b=0;for(var c=a.length;b<c;b++)this.route(a[b][0],a[b][1],this[a[b][1]])}},_routeToRegExp:function(a){a=a.replace(D,"\\$&").replace(B,"([^/]+)").replace(C,"(.*?)");return RegExp("^"+a+"$")},_extractParameters:function(a,b){return a.exec(b).slice(1)}});var m=g.History=function(){this.handlers=[];f.bindAll(this,"checkUrl")},s=/^[#\/]/,E=/msie [\w.]+/;m.started=!1;f.extend(m.prototype,k,{interval:50,getHash:function(a){return(a=(a?a.location:window.location).href.match(/#(.*)$/))?a[1]:
""},getFragment:function(a,b){if(null==a)if(this._hasPushState||b){var a=window.location.pathname,c=window.location.search;c&&(a+=c)}else a=this.getHash();a.indexOf(this.options.root)||(a=a.substr(this.options.root.length));return a.replace(s,"")},start:function(a){if(m.started)throw Error("Backbone.history has already been started");m.started=!0;this.options=f.extend({},{root:"/"},this.options,a);this._wantsHashChange=!1!==this.options.hashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=
!(!this.options.pushState||!window.history||!window.history.pushState);var a=this.getFragment(),b=document.documentMode;if(b=E.exec(navigator.userAgent.toLowerCase())&&(!b||7>=b))this.iframe=i('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(a);this._hasPushState?i(window).bind("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!b?i(window).bind("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,
this.interval));this.fragment=a;a=window.location;b=a.pathname==this.options.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!b)return this.fragment=this.getFragment(null,!0),window.location.replace(this.options.root+"#"+this.fragment),!0;this._wantsPushState&&this._hasPushState&&b&&a.hash&&(this.fragment=this.getHash().replace(s,""),window.history.replaceState({},document.title,a.protocol+"//"+a.host+this.options.root+this.fragment));if(!this.options.silent)return this.loadUrl()},
stop:function(){i(window).unbind("popstate",this.checkUrl).unbind("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);m.started=!1},route:function(a,b){this.handlers.unshift({route:a,callback:b})},checkUrl:function(){var a=this.getFragment();a==this.fragment&&this.iframe&&(a=this.getFragment(this.getHash(this.iframe)));if(a==this.fragment)return!1;this.iframe&&this.navigate(a);this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(a){var b=this.fragment=this.getFragment(a);return f.any(this.handlers,
function(a){if(a.route.test(b))return a.callback(b),!0})},navigate:function(a,b){if(!m.started)return!1;if(!b||!0===b)b={trigger:b};var c=(a||"").replace(s,"");this.fragment!=c&&(this._hasPushState?(0!=c.indexOf(this.options.root)&&(c=this.options.root+c),this.fragment=c,window.history[b.replace?"replaceState":"pushState"]({},document.title,c)):this._wantsHashChange?(this.fragment=c,this._updateHash(window.location,c,b.replace),this.iframe&&c!=this.getFragment(this.getHash(this.iframe))&&(b.replace||
this.iframe.document.open().close(),this._updateHash(this.iframe.location,c,b.replace))):window.location.assign(this.options.root+a),b.trigger&&this.loadUrl(a))},_updateHash:function(a,b,c){c?a.replace(a.toString().replace(/(javascript:|#).*$/,"")+"#"+b):a.hash=b}});var v=g.View=function(a){this.cid=f.uniqueId("view");this._configure(a||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()},F=/^(\S+)\s*(.*)$/,w="model,collection,el,id,attributes,className,tagName".split(",");
f.extend(v.prototype,k,{tagName:"div",$:function(a){return this.$el.find(a)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();return this},make:function(a,b,c){a=document.createElement(a);b&&i(a).attr(b);c&&i(a).html(c);return a},setElement:function(a,b){this.$el&&this.undelegateEvents();this.$el=a instanceof i?a:i(a);this.el=this.$el[0];!1!==b&&this.delegateEvents();return this},delegateEvents:function(a){if(a||(a=n(this,"events"))){this.undelegateEvents();
for(var b in a){var c=a[b];f.isFunction(c)||(c=this[a[b]]);if(!c)throw Error('Method "'+a[b]+'" does not exist');var d=b.match(F),e=d[1],d=d[2],c=f.bind(c,this),e=e+(".delegateEvents"+this.cid);""===d?this.$el.bind(e,c):this.$el.delegate(d,e,c)}}},undelegateEvents:function(){this.$el.unbind(".delegateEvents"+this.cid)},_configure:function(a){this.options&&(a=f.extend({},this.options,a));for(var b=0,c=w.length;b<c;b++){var d=w[b];a[d]&&(this[d]=a[d])}this.options=a},_ensureElement:function(){if(this.el)this.setElement(this.el,
!1);else{var a=n(this,"attributes")||{};this.id&&(a.id=this.id);this.className&&(a["class"]=this.className);this.setElement(this.make(this.tagName,a),!1)}}});o.extend=r.extend=u.extend=v.extend=function(a,b){var c=G(this,a,b);c.extend=this.extend;return c};var H={create:"POST",update:"PUT","delete":"DELETE",read:"GET"};g.sync=function(a,b,c){var d=H[a];c||(c={});var e={type:d,dataType:"json"};c.url||(e.url=n(b,"url")||t());if(!c.data&&b&&("create"==a||"update"==a))e.contentType="application/json",
e.data=JSON.stringify(b.toJSON());g.emulateJSON&&(e.contentType="application/x-www-form-urlencoded",e.data=e.data?{model:e.data}:{});if(g.emulateHTTP&&("PUT"===d||"DELETE"===d))g.emulateJSON&&(e.data._method=d),e.type="POST",e.beforeSend=function(a){a.setRequestHeader("X-HTTP-Method-Override",d)};"GET"!==e.type&&!g.emulateJSON&&(e.processData=!1);return i.ajax(f.extend(e,c))};g.wrapError=function(a,b,c){return function(d,e){e=d===b?e:d;a?a(b,e,c):b.trigger("error",b,e,c)}};var x=function(){},G=function(a,
b,c){var d;d=b&&b.hasOwnProperty("constructor")?b.constructor:function(){a.apply(this,arguments)};f.extend(d,a);x.prototype=a.prototype;d.prototype=new x;b&&f.extend(d.prototype,b);c&&f.extend(d,c);d.prototype.constructor=d;d.__super__=a.prototype;return d},n=function(a,b){return!a||!a[b]?null:f.isFunction(a[b])?a[b]():a[b]},t=function(){throw Error('A "url" property or function must be specified');}}).call(this);

/*
    json2.js
    2011-10-19

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number don't have to present it tomorro,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, regexp: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

var JSON;
if (!JSON) {
    JSON = {};
}

(function () {
    'use strict';

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf())
                ? this.getUTCFullYear()     + '-' +
                    f(this.getUTCMonth() + 1) + '-' +
                    f(this.getUTCDate())      + 'T' +
                    f(this.getUTCHours())     + ':' +
                    f(this.getUTCMinutes())   + ':' +
                    f(this.getUTCSeconds())   + 'Z'
                : null;
        };

        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function (key) {
                return this.valueOf();
            };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function'
                    ? walk({'': j}, '')
                    : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());

/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */

var dateFormat = function () {
	var	token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
		timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
		timezoneClip = /[^-+\dA-Z]/g,
		pad = function (val, len) {
			val = String(val);
			len = len || 2;
			while (val.length < len) val = "0" + val;
			return val;
		};

	// Regexes and supporting functions are cached through closure
	return function (date, mask, utc) {
		var dF = dateFormat;

		// You can't provide utc if you skip other args (use the "UTC:" mask prefix)
		if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
			mask = date;
			date = undefined;
		}

		// Passing date through Date applies Date.parse, if necessary
		date = date ? new Date(date) : new Date;
		//if (isNaN(date)) throw SyntaxError("invalid date");
		if (isNaN(date)) return;

		mask = String(dF.masks[mask] || mask || dF.masks["default"]);

		// Allow setting the utc argument via the mask
		if (mask.slice(0, 4) == "UTC:") {
			mask = mask.slice(4);
			utc = true;
		}

		var	_ = utc ? "getUTC" : "get",
			d = date[_ + "Date"](),
			D = date[_ + "Day"](),
			m = date[_ + "Month"](),
			y = date[_ + "FullYear"](),
			H = date[_ + "Hours"](),
			M = date[_ + "Minutes"](),
			s = date[_ + "Seconds"](),
			L = date[_ + "Milliseconds"](),
			o = utc ? 0 : date.getTimezoneOffset(),
			flags = {
				d:    d,
				dd:   pad(d),
				ddd:  dF.i18n.dayNames[D],
				dddd: dF.i18n.dayNames[D + 7],
				m:    m + 1,
				mm:   pad(m + 1),
				mmm:  dF.i18n.monthNames[m],
				mmmm: dF.i18n.monthNames[m + 12],
				yy:   String(y).slice(2),
				yyyy: y,
				h:    H % 12 || 12,
				hh:   pad(H % 12 || 12),
				H:    H,
				HH:   pad(H),
				M:    M,
				MM:   pad(M),
				s:    s,
				ss:   pad(s),
				l:    pad(L, 3),
				L:    pad(L > 99 ? Math.round(L / 10) : L),
				t:    H < 12 ? "a"  : "p",
				tt:   H < 12 ? "am" : "pm",
				T:    H < 12 ? "A"  : "P",
				TT:   H < 12 ? "AM" : "PM",
				Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
				o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
				S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
			};

		return mask.replace(token, function ($0) {
			return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
		});
	};
}();

// Some common format strings
dateFormat.masks = {
	"default":      "ddd mmm dd yyyy HH:MM:ss",
	shortDate:      "m/d/yy",
	mediumDate:     "mmm d, yyyy",
	longDate:       "mmmm d, yyyy",
	fullDate:       "dddd, mmmm d, yyyy",
	shortTime:      "h:MM TT",
	mediumTime:     "h:MM:ss TT",
	longTime:       "h:MM:ss TT Z",
	isoDate:        "yyyy-mm-dd",
	isoTime:        "HH:MM:ss",
	isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
	isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// Internationalization strings
dateFormat.i18n = {
	dayNames: [
		"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
		"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
	],
	monthNames: [
		"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
		"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
	]
};

// For convenience...
Date.prototype.format = function (mask, utc) {
	return dateFormat(this, mask, utc);
};
// Copyright (C) 2011 by Will Tomlins
// 
// Github profile: http://github.com/layam
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


function humanized_time_span(date, ref_date, date_formats, time_units) {
  //Date Formats must be be ordered smallest -> largest and must end in a format with ceiling of null
  date_formats = date_formats || {
    past: [
      { ceiling: 60, text: "$seconds seconds ago" },
      { ceiling: 3600, text: "$minutes minutes ago" },
      { ceiling: 86400, text: "$hours hours ago" },
      { ceiling: 2629744, text: "$days days ago" },
      { ceiling: 31556926, text: "$months months ago" },
      { ceiling: null, text: "$years years ago" }      
    ],
    future: [
      { ceiling: 60, text: "in $seconds seconds" },
      { ceiling: 3600, text: "in $minutes minutes" },
      { ceiling: 86400, text: "in $hours hours" },
      { ceiling: 2629744, text: "in $days days" },
      { ceiling: 31556926, text: "in $months months" },
      { ceiling: null, text: "in $years years" }
    ]
  };
  //Time units must be be ordered largest -> smallest
  time_units = time_units || [
    [31556926, 'years'],
    [2629744, 'months'],
    [86400, 'days'],
    [3600, 'hours'],
    [60, 'minutes'],
    [1, 'seconds']
  ];
  
  date = new Date(date);
  ref_date = ref_date ? new Date(ref_date) : new Date();
  var seconds_difference = (ref_date - date) / 1000;
  
  var tense = 'past';
  if (seconds_difference < 0) {
    tense = 'future';
    seconds_difference = 0-seconds_difference;
  }
  
  function get_format() {
    for (var i=0; i<date_formats[tense].length; i++) {
      if (date_formats[tense][i].ceiling == null || seconds_difference <= date_formats[tense][i].ceiling) {
        return date_formats[tense][i];
      }
    }
    return null;
  }
  
  function get_time_breakdown() {
    var seconds = seconds_difference;
    var breakdown = {};
    for(var i=0; i<time_units.length; i++) {
      var occurences_of_unit = Math.floor(seconds / time_units[i][0]);
      seconds = seconds - (time_units[i][0] * occurences_of_unit);
      breakdown[time_units[i][1]] = occurences_of_unit;
    }
    return breakdown;
  }

  function render_date(date_format) {
    var breakdown = get_time_breakdown();
    var time_ago_text = date_format.text.replace(/\$(\w+)/g, function() {
      return breakdown[arguments[1]];
    });
    return depluralize_time_ago_text(time_ago_text, breakdown);
  }
  
  function depluralize_time_ago_text(time_ago_text, breakdown) {
    for(var i in breakdown) {
      if (breakdown[i] == 1) {
        var regexp = new RegExp("\\b"+i+"\\b");
        time_ago_text = time_ago_text.replace(regexp, function() {
          return arguments[0].replace(/s\b/g, '');
        });
      }
    }
    return time_ago_text;
  }
          
  return render_date(get_format());
}
;(function(){

    /**
     * Require the given path.
     *
     * @param {String} path
     * @return {Object} exports
     * @api public
     */

    function require(path, parent, orig) {
        var resolved = require.resolve(path);

        // lookup failed
        if (null == resolved) {
            orig = orig || path;
            parent = parent || 'root';
            var err = new Error('Failed to require "' + orig + '" from "' + parent + '"');
            err.path = orig;
            err.parent = parent;
            err.require = true;
            throw err;
        }

        var module = require.modules[resolved];

        // perform real require()
        // by invoking the module's
        // registered function
        if (!module.exports) {
            module.exports = {};
            module.client = module.component = true;
            module.call(this, module.exports, require.relative(resolved), module);
        }

        return module.exports;
    }

    /**
     * Registered modules.
     */

    require.modules = {};

    /**
     * Registered aliases.
     */

    require.aliases = {};

    /**
     * Resolve `path`.
     *
     * Lookup:
     *
     *   - PATH/index.js
     *   - PATH.js
     *   - PATH
     *
     * @param {String} path
     * @return {String} path or null
     * @api private
     */

    require.resolve = function(path) {
        if (path.charAt(0) === '/') path = path.slice(1);

        var paths = [
            path,
            path + '.js',
            path + '.json',
            path + '/index.js',
            path + '/index.json'
        ];

        for (var i = 0; i < paths.length; i++) {
            var path = paths[i];
            if (require.modules.hasOwnProperty(path)) return path;
            if (require.aliases.hasOwnProperty(path)) return require.aliases[path];
        }
    };

    /**
     * Normalize `path` relative to the current path.
     *
     * @param {String} curr
     * @param {String} path
     * @return {String}
     * @api private
     */

    require.normalize = function(curr, path) {
        var segs = [];

        if ('.' != path.charAt(0)) return path;

        curr = curr.split('/');
        path = path.split('/');

        for (var i = 0; i < path.length; ++i) {
            if ('..' == path[i]) {
                curr.pop();
            } else if ('.' != path[i] && '' != path[i]) {
                segs.push(path[i]);
            }
        }

        return curr.concat(segs).join('/');
    };

    /**
     * Register module at `path` with callback `definition`.
     *
     * @param {String} path
     * @param {Function} definition
     * @api private
     */

    require.register = function(path, definition) {
        require.modules[path] = definition;
    };

    /**
     * Alias a module definition.
     *
     * @param {String} from
     * @param {String} to
     * @api private
     */

    require.alias = function(from, to) {
        if (!require.modules.hasOwnProperty(from)) {
            throw new Error('Failed to alias "' + from + '", it does not exist');
        }
        require.aliases[to] = from;
    };

    /**
     * Return a require function relative to the `parent` path.
     *
     * @param {String} parent
     * @return {Function}
     * @api private
     */

    require.relative = function(parent) {
        var p = require.normalize(parent, '..');

        /**
         * lastIndexOf helper.
         */

        function lastIndexOf(arr, obj) {
            var i = arr.length;
            while (i--) {
                if (arr[i] === obj) return i;
            }
            return -1;
        }

        /**
         * The relative require() itself.
         */

        function localRequire(path) {
            var resolved = localRequire.resolve(path);
            return require(resolved, parent, path);
        }

        /**
         * Resolve relative to the parent.
         */

        localRequire.resolve = function(path) {
            var c = path.charAt(0);
            if ('/' == c) return path.slice(1);
            if ('.' == c) return require.normalize(p, path);

            // resolve deps by returning
            // the dep in the nearest "deps"
            // directory
            var segs = parent.split('/');
            var i = lastIndexOf(segs, 'deps') + 1;
            if (!i) i = 0;
            path = segs.slice(0, i + 1).join('/') + '/deps/' + path;
            return path;
        };

        /**
         * Check if module is defined at `path`.
         */

        localRequire.exists = function(path) {
            return require.modules.hasOwnProperty(localRequire.resolve(path));
        };

        return localRequire;
    };
    require.register("component-emitter/index.js", function(exports, require, module){

        /**
         * Expose `Emitter`.
         */

        module.exports = Emitter;

        /**
         * Initialize a new `Emitter`.
         *
         * @api public
         */

        function Emitter(obj) {
            if (obj) return mixin(obj);
        };

        /**
         * Mixin the emitter properties.
         *
         * @param {Object} obj
         * @return {Object}
         * @api private
         */

        function mixin(obj) {
            for (var key in Emitter.prototype) {
                obj[key] = Emitter.prototype[key];
            }
            return obj;
        }

        /**
         * Listen on the given `event` with `fn`.
         *
         * @param {String} event
         * @param {Function} fn
         * @return {Emitter}
         * @api public
         */

        Emitter.prototype.on = function(event, fn){
            this._callbacks = this._callbacks || {};
            (this._callbacks[event] = this._callbacks[event] || [])
                .push(fn);
            return this;
        };

        /**
         * Adds an `event` listener that will be invoked a single
         * time then automatically removed.
         *
         * @param {String} event
         * @param {Function} fn
         * @return {Emitter}
         * @api public
         */

        Emitter.prototype.once = function(event, fn){
            var self = this;
            this._callbacks = this._callbacks || {};

            function on() {
                self.off(event, on);
                fn.apply(this, arguments);
            }

            fn._off = on;
            this.on(event, on);
            return this;
        };

        /**
         * Remove the given callback for `event` or all
         * registered callbacks.
         *
         * @param {String} event
         * @param {Function} fn
         * @return {Emitter}
         * @api public
         */

        Emitter.prototype.off =
            Emitter.prototype.removeListener =
                Emitter.prototype.removeAllListeners = function(event, fn){
                    this._callbacks = this._callbacks || {};
                    var callbacks = this._callbacks[event];
                    if (!callbacks) return this;

                    // remove all handlers
                    if (1 == arguments.length) {
                        delete this._callbacks[event];
                        return this;
                    }

                    // remove specific handler
                    var i = callbacks.indexOf(fn._off || fn);
                    if (~i) callbacks.splice(i, 1);
                    return this;
                };

        /**
         * Emit `event` with the given args.
         *
         * @param {String} event
         * @param {Mixed} ...
         * @return {Emitter}
         */

        Emitter.prototype.emit = function(event){
            this._callbacks = this._callbacks || {};
            var args = [].slice.call(arguments, 1)
                , callbacks = this._callbacks[event];

            if (callbacks) {
                callbacks = callbacks.slice(0);
                for (var i = 0, len = callbacks.length; i < len; ++i) {
                    callbacks[i].apply(this, args);
                }
            }

            return this;
        };

        /**
         * Return array of callbacks for `event`.
         *
         * @param {String} event
         * @return {Array}
         * @api public
         */

        Emitter.prototype.listeners = function(event){
            this._callbacks = this._callbacks || {};
            return this._callbacks[event] || [];
        };

        /**
         * Check if this emitter has `event` handlers.
         *
         * @param {String} event
         * @return {Boolean}
         * @api public
         */

        Emitter.prototype.hasListeners = function(event){
            return !! this.listeners(event).length;
        };

    });
    require.register("dropzone/index.js", function(exports, require, module){


        /**
         * Exposing dropzone
         */
        module.exports = require("./lib/dropzone.js");

    });
    require.register("dropzone/lib/dropzone.js", function(exports, require, module){
        /*
         #
         # More info at [www.dropzonejs.com](http://www.dropzonejs.com)
         #
         # Copyright (c) 2012, Matias Meno
         #
         # Permission is hereby granted, free of charge, to any person obtaining a copy
         # of this software and associated documentation files (the "Software"), to deal
         # in the Software without restriction, including without limitation the rights
         # to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         # copies of the Software, and to permit persons to whom the Software is
         # furnished to do so, subject to the following conditions:
         #
         # The above copyright notice and this permission notice shall be included in
         # all copies or substantial portions of the Software.
         #
         # THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         # IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         # FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         # AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         # LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         # OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         # THE SOFTWARE.
         #
         */


        (function() {
            var Dropzone, Em, camelize, contentLoaded, noop, without,
                __hasProp = {}.hasOwnProperty,
                __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
                __slice = [].slice;

            Em = typeof Emitter !== "undefined" && Emitter !== null ? Emitter : require("emitter");

            noop = function() {};

            Dropzone = (function(_super) {
                var extend;

                __extends(Dropzone, _super);

                /*
                 This is a list of all available events you can register on a dropzone object.

                 You can register an event handler like this:

                 dropzone.on("dragEnter", function() { });
                 */


                Dropzone.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "selectedfiles", "addedfile", "removedfile", "thumbnail", "error", "processingfile", "uploadprogress", "totaluploadprogress", "sending", "success", "complete", "reset"];

                Dropzone.prototype.defaultOptions = {
                    url: null,
                    method: "post",
                    withCredentials: false,
                    parallelUploads: 2,
                    maxFilesize: 256,
                    paramName: "file",
                    createImageThumbnails: true,
                    maxThumbnailFilesize: 10,
                    thumbnailWidth: 100,
                    thumbnailHeight: 100,
                    params: {},
                    clickable: true,
                    acceptedMimeTypes: null,
                    acceptParameter: null,
                    enqueueForUpload: true,
                    addRemoveLinks: false,
                    previewsContainer: null,
                    dictDefaultMessage: "Drop files here to upload",
                    dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
                    dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
                    dictFileTooBig: "File is too big ({{filesize}}MB). Max filesize: {{maxFilesize}}MB.",
                    dictInvalidFileType: "You can't upload files of this type.",
                    dictResponseError: "Server responded with {{statusCode}} code.",
                    dictCancelUpload: "Cancel upload",
                    dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
                    dictRemoveFile: "Remove file",
                    accept: function(file, done) {
                        return done();
                    },
                    init: function() {
                        return noop;
                    },
                    forceFallback: false,
                    fallback: function() {
                        var child, messageElement, span, _i, _len, _ref;
                        this.element.className = "" + this.element.className + " dz-browser-not-supported";
                        _ref = this.element.getElementsByTagName("div");
                        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                            child = _ref[_i];
                            if (/(^| )dz-message($| )/.test(child.className)) {
                                messageElement = child;
                                child.className = "dz-message";
                                continue;
                            }
                        }
                        if (!messageElement) {
                            messageElement = Dropzone.createElement("<div class=\"dz-message\"><span></span></div>");
                            this.element.appendChild(messageElement);
                        }
                        span = messageElement.getElementsByTagName("span")[0];
                        if (span) {
                            span.textContent = this.options.dictFallbackMessage;
                        }
                        return this.element.appendChild(this.getFallbackForm());
                    },
                    resize: function(file) {
                        var info, srcRatio, trgRatio;
                        info = {
                            srcX: 0,
                            srcY: 0,
                            srcWidth: file.width,
                            srcHeight: file.height
                        };
                        srcRatio = file.width / file.height;
                        trgRatio = this.options.thumbnailWidth / this.options.thumbnailHeight;
                        if (file.height < this.options.thumbnailHeight || file.width < this.options.thumbnailWidth) {
                            info.trgHeight = info.srcHeight;
                            info.trgWidth = info.srcWidth;
                        } else {
                            if (srcRatio > trgRatio) {
                                info.srcHeight = file.height;
                                info.srcWidth = info.srcHeight * trgRatio;
                            } else {
                                info.srcWidth = file.width;
                                info.srcHeight = info.srcWidth / trgRatio;
                            }
                        }
                        info.srcX = (file.width - info.srcWidth) / 2;
                        info.srcY = (file.height - info.srcHeight) / 2;
                        return info;
                    },
                    /*
                     Those functions register themselves to the events on init and handle all
                     the user interface specific stuff. Overwriting them won't break the upload
                     but can break the way it's displayed.
                     You can overwrite them if you don't like the default behavior. If you just
                     want to add an additional event handler, register it on the dropzone object
                     and don't overwrite those options.
                     */

                    drop: function(e) {
                        return this.element.classList.remove("dz-drag-hover");
                    },
                    dragstart: noop,
                    dragend: function(e) {
                        return this.element.classList.remove("dz-drag-hover");
                    },
                    dragenter: function(e) {
                        return this.element.classList.add("dz-drag-hover");
                    },
                    dragover: function(e) {
                        return this.element.classList.add("dz-drag-hover");
                    },
                    dragleave: function(e) {
                        return this.element.classList.remove("dz-drag-hover");
                    },
                    selectedfiles: function(files) {
                        if (this.element === this.previewsContainer) {
                            return this.element.classList.add("dz-started");
                        }
                    },
                    reset: function() {
                        return this.element.classList.remove("dz-started");
                    },
                    addedfile: function(file) {
                        var _this = this;
                        file.previewElement = Dropzone.createElement(this.options.previewTemplate);
                        file.previewTemplate = file.previewElement;
                        this.previewsContainer.appendChild(file.previewElement);
                        file.previewElement.querySelector("[data-dz-name]").textContent = file.name;
                        file.previewElement.querySelector("[data-dz-size]").innerHTML = this.filesize(file.size);
                        if (this.options.addRemoveLinks) {
                            file._removeLink = Dropzone.createElement("<a class=\"dz-remove\" href=\"javascript:undefined;\">" + this.options.dictRemoveFile + "</a>");
                            file._removeLink.addEventListener("click", function(e) {
                                e.preventDefault();
                                e.stopPropagation();
                                if (file.status === Dropzone.UPLOADING) {
                                    if (window.confirm(_this.options.dictCancelUploadConfirmation)) {
                                        return _this.removeFile(file);
                                    }
                                } else {
                                    return _this.removeFile(file);
                                }
                            });
                            return file.previewElement.appendChild(file._removeLink);
                        }
                    },
                    removedfile: function(file) {
                        var _ref;
                        return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;
                    },
                    thumbnail: function(file, dataUrl) {
                        var thumbnailElement;
                        file.previewElement.classList.remove("dz-file-preview");
                        file.previewElement.classList.add("dz-image-preview");
                        thumbnailElement = file.previewElement.querySelector("[data-dz-thumbnail]");
                        thumbnailElement.alt = file.name;
                        return thumbnailElement.src = dataUrl;
                    },
                    error: function(file, message) {
                        file.previewElement.classList.add("dz-error");
                        return file.previewElement.querySelector("[data-dz-errormessage]").textContent = message;
                    },
                    processingfile: function(file) {
                        file.previewElement.classList.add("dz-processing");
                        if (file._removeLink) {
                            return file._removeLink.textContent = this.options.dictCancelUpload;
                        }
                    },
                    uploadprogress: function(file, progress, bytesSent) {
                        return file.previewElement.querySelector("[data-dz-uploadprogress]").style.width = "" + progress + "%";
                    },
                    totaluploadprogress: noop,
                    sending: noop,
                    success: function(file) {
                        return file.previewElement.classList.add("dz-success");
                    },
                    complete: function(file) {
                        if (file._removeLink) {
                            return file._removeLink.textContent = this.options.dictRemoveFile;
                        }
                    },
                    previewTemplate: "<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-details\">\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n    <div class=\"dz-size\" data-dz-size></div>\n    <img data-dz-thumbnail />\n  </div>\n  <div class=\"dz-progress\"><span class=\"dz-upload\" data-dz-uploadprogress></span></div>\n  <div class=\"dz-success-mark\"><span>✔</span></div>\n  <div class=\"dz-error-mark\"><span>✘</span></div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n</div>"
                };

                extend = function() {
                    var key, object, objects, target, val, _i, _len;
                    target = arguments[0], objects = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
                    for (_i = 0, _len = objects.length; _i < _len; _i++) {
                        object = objects[_i];
                        for (key in object) {
                            val = object[key];
                            target[key] = val;
                        }
                    }
                    return target;
                };

                function Dropzone(element, options) {
                    var elementOptions, fallback, _ref;
                    this.element = element;
                    this.version = Dropzone.version;
                    this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, "");
                    this.clickableElements = [];
                    this.listeners = [];
                    this.files = [];
                    if (typeof this.element === "string") {
                        this.element = document.querySelector(this.element);
                    }
                    if (!(this.element && (this.element.nodeType != null))) {
                        throw new Error("Invalid dropzone element.");
                    }
                    if (this.element.dropzone) {
                        throw new Error("Dropzone already attached.");
                    }
                    Dropzone.instances.push(this);
                    element.dropzone = this;
                    elementOptions = (_ref = Dropzone.optionsForElement(this.element)) != null ? _ref : {};
                    this.options = extend({}, this.defaultOptions, elementOptions, options != null ? options : {});
                    if (this.options.url == null) {
                        this.options.url = this.element.action;
                    }
                    if (!this.options.url) {
                        throw new Error("No URL provided.");
                    }
                    if (this.options.acceptParameter && this.options.acceptedMimeTypes) {
                        throw new Error("You can't provide both 'acceptParameter' and 'acceptedMimeTypes'. 'acceptParameter' is deprecated.");
                    }
                    this.options.method = this.options.method.toUpperCase();
                    if (this.options.forceFallback || !Dropzone.isBrowserSupported()) {
                        return this.options.fallback.call(this);
                    }
                    if ((fallback = this.getExistingFallback()) && fallback.parentNode) {
                        fallback.parentNode.removeChild(fallback);
                    }
                    if (this.options.previewsContainer) {
                        this.previewsContainer = Dropzone.getElement(this.options.previewsContainer, "previewsContainer");
                    } else {
                        this.previewsContainer = this.element;
                    }
                    if (this.options.clickable) {
                        if (this.options.clickable === true) {
                            this.clickableElements = [this.element];
                        } else {
                            this.clickableElements = Dropzone.getElements(this.options.clickable, "clickable");
                        }
                    }
                    this.init();
                }

                Dropzone.prototype.getAcceptedFiles = function() {
                    var file, _i, _len, _ref, _results;
                    _ref = this.files;
                    _results = [];
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        file = _ref[_i];
                        if (file.accepted) {
                            _results.push(file);
                        }
                    }
                    return _results;
                };

                Dropzone.prototype.getRejectedFiles = function() {
                    var file, _i, _len, _ref, _results;
                    if (!file.accepted) {
                        _ref = this.files;
                        _results = [];
                        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                            file = _ref[_i];
                            _results.push(file);
                        }
                        return _results;
                    }
                };

                Dropzone.prototype.getQueuedFiles = function() {
                    var file, _i, _len, _ref, _results;
                    _ref = this.files;
                    _results = [];
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        file = _ref[_i];
                        if (file.status === Dropzone.QUEUED) {
                            _results.push(file);
                        }
                    }
                    return _results;
                };

                Dropzone.prototype.getUploadingFiles = function() {
                    var file, _i, _len, _ref, _results;
                    _ref = this.files;
                    _results = [];
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        file = _ref[_i];
                        if (file.status === Dropzone.UPLOADING) {
                            _results.push(file);
                        }
                    }
                    return _results;
                };

                Dropzone.prototype.enqueueFile = function(file) {
                    if (file.status === Dropzone.ACCEPTED) {
                        file.status = Dropzone.QUEUED;
                        return this.processQueue();
                    } else {
                        throw new Error("This file can't be queued because it has already been processed or was rejected.");
                    }
                };

                Dropzone.prototype.init = function() {
                    var eventName, noPropagation, setupHiddenFileInput, _i, _len, _ref, _ref1,
                        _this = this;
                    if (this.element.tagName === "form") {
                        this.element.setAttribute("enctype", "multipart/form-data");
                    }
                    if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) {
                        this.element.appendChild(Dropzone.createElement("<div class=\"dz-default dz-message\"><span>" + this.options.dictDefaultMessage + "</span></div>"));
                    }
                    if (this.clickableElements.length) {
                        setupHiddenFileInput = function() {
                            if (_this.hiddenFileInput) {
                                document.body.removeChild(_this.hiddenFileInput);
                            }
                            _this.hiddenFileInput = document.createElement("input");
                            _this.hiddenFileInput.setAttribute("type", "file");
                            _this.hiddenFileInput.setAttribute("multiple", "multiple");
                            if (_this.options.acceptedMimeTypes != null) {
                                _this.hiddenFileInput.setAttribute("accept", _this.options.acceptedMimeTypes);
                            }
                            if (_this.options.acceptParameter != null) {
                                _this.hiddenFileInput.setAttribute("accept", _this.options.acceptParameter);
                            }
                            _this.hiddenFileInput.style.visibility = "hidden";
                            _this.hiddenFileInput.style.position = "absolute";
                            _this.hiddenFileInput.style.top = "0";
                            _this.hiddenFileInput.style.left = "0";
                            _this.hiddenFileInput.style.height = "0";
                            _this.hiddenFileInput.style.width = "0";
                            document.body.appendChild(_this.hiddenFileInput);
                            return _this.hiddenFileInput.addEventListener("change", function() {
                                var files;
                                files = _this.hiddenFileInput.files;
                                if (files.length) {
                                    _this.emit("selectedfiles", files);
                                    _this.handleFiles(files);
                                }
                                return setupHiddenFileInput();
                            });
                        };
                        setupHiddenFileInput();
                    }
                    this.URL = (_ref = window.URL) != null ? _ref : window.webkitURL;
                    _ref1 = this.events;
                    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
                        eventName = _ref1[_i];
                        this.on(eventName, this.options[eventName]);
                    }
                    this.on("uploadprogress", function() {
                        return _this.updateTotalUploadProgress();
                    });
                    this.on("removedfile", function() {
                        return _this.updateTotalUploadProgress();
                    });
                    noPropagation = function(e) {
                        e.stopPropagation();
                        if (e.preventDefault) {
                            return e.preventDefault();
                        } else {
                            return e.returnValue = false;
                        }
                    };
                    this.listeners = [
                        {
                            element: this.element,
                            events: {
                                "dragstart": function(e) {
                                    return _this.emit("dragstart", e);
                                },
                                "dragenter": function(e) {
                                    noPropagation(e);
                                    return _this.emit("dragenter", e);
                                },
                                "dragover": function(e) {
                                    noPropagation(e);
                                    return _this.emit("dragover", e);
                                },
                                "dragleave": function(e) {
                                    return _this.emit("dragleave", e);
                                },
                                "drop": function(e) {
                                    noPropagation(e);
                                    _this.drop(e);
                                    return _this.emit("drop", e);
                                },
                                "dragend": function(e) {
                                    return _this.emit("dragend", e);
                                }
                            }
                        }
                    ];
                    this.clickableElements.forEach(function(clickableElement) {
                        return _this.listeners.push({
                            element: clickableElement,
                            events: {
                                "click": function(evt) {
                                    if ((clickableElement !== _this.element) || (evt.target === _this.element || Dropzone.elementInside(evt.target, _this.element.querySelector(".dz-message")))) {
                                        return _this.hiddenFileInput.click();
                                    }
                                }
                            }
                        });
                    });
                    this.enable();
                    return this.options.init.call(this);
                };

                Dropzone.prototype.destroy = function() {
                    var _ref;
                    this.disable();
                    this.removeAllFiles(true);
                    if ((_ref = this.hiddenFileInput) != null ? _ref.parentNode : void 0) {
                        this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
                        return this.hiddenFileInput = null;
                    }
                };

                Dropzone.prototype.updateTotalUploadProgress = function() {
                    var acceptedFiles, file, totalBytes, totalBytesSent, totalUploadProgress, _i, _len, _ref;
                    totalBytesSent = 0;
                    totalBytes = 0;
                    acceptedFiles = this.getAcceptedFiles();
                    if (acceptedFiles.length) {
                        _ref = this.getAcceptedFiles();
                        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                            file = _ref[_i];
                            totalBytes += file.upload.total;
                            if(file.status === 'success') {
                                totalBytesSent += file.upload.bytesSent;
                            }
                        }
                        totalUploadProgress = 100 * totalBytesSent / totalBytes;
                    } else {
                        totalUploadProgress = 100;
                    }
                    return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
                };

                Dropzone.prototype.getFallbackForm = function() {
                    var existingFallback, fields, fieldsString, form;
                    if (existingFallback = this.getExistingFallback()) {
                        return existingFallback;
                    }
                    fieldsString = "<div class=\"dz-fallback\">";
                    if (this.options.dictFallbackText) {
                        fieldsString += "<p>" + this.options.dictFallbackText + "</p>";
                    }
                    fieldsString += "<input type=\"file\" name=\"" + this.options.paramName + "[]\" multiple=\"multiple\" /><button type=\"submit\">Upload!</button></div>";
                    fields = Dropzone.createElement(fieldsString);
                    if (this.element.tagName !== "FORM") {
                        form = Dropzone.createElement("<form action=\"" + this.options.url + "\" enctype=\"multipart/form-data\" method=\"" + this.options.method + "\"></form>");
                        form.appendChild(fields);
                    } else {
                        this.element.setAttribute("enctype", "multipart/form-data");
                        this.element.setAttribute("method", this.options.method);
                    }
                    return form != null ? form : fields;
                };

                Dropzone.prototype.getExistingFallback = function() {
                    var fallback, getFallback, tagName, _i, _len, _ref;
                    getFallback = function(elements) {
                        var el, _i, _len;
                        for (_i = 0, _len = elements.length; _i < _len; _i++) {
                            el = elements[_i];
                            if (/(^| )fallback($| )/.test(el.className)) {
                                return el;
                            }
                        }
                    };
                    _ref = ["div", "form"];
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        tagName = _ref[_i];
                        if (fallback = getFallback(this.element.getElementsByTagName(tagName))) {
                            return fallback;
                        }
                    }
                };

                Dropzone.prototype.setupEventListeners = function() {
                    var elementListeners, event, listener, _i, _len, _ref, _results;
                    _ref = this.listeners;
                    _results = [];
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        elementListeners = _ref[_i];
                        _results.push((function() {
                            var _ref1, _results1;
                            _ref1 = elementListeners.events;
                            _results1 = [];
                            for (event in _ref1) {
                                listener = _ref1[event];
                                _results1.push(elementListeners.element.addEventListener(event, listener, false));
                            }
                            return _results1;
                        })());
                    }
                    return _results;
                };

                Dropzone.prototype.removeEventListeners = function() {
                    var elementListeners, event, listener, _i, _len, _ref, _results;
                    _ref = this.listeners;
                    _results = [];
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        elementListeners = _ref[_i];
                        _results.push((function() {
                            var _ref1, _results1;
                            _ref1 = elementListeners.events;
                            _results1 = [];
                            for (event in _ref1) {
                                listener = _ref1[event];
                                _results1.push(elementListeners.element.removeEventListener(event, listener, false));
                            }
                            return _results1;
                        })());
                    }
                    return _results;
                };

                Dropzone.prototype.disable = function() {
                    var file, _i, _len, _ref, _results;
                    this.clickableElements.forEach(function(element) {
                        return element.classList.remove("dz-clickable");
                    });
                    this.removeEventListeners();
                    _ref = this.files;
                    _results = [];
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        file = _ref[_i];
                        _results.push(this.cancelUpload(file));
                    }
                    return _results;
                };

                Dropzone.prototype.enable = function() {
                    this.clickableElements.forEach(function(element) {
                        return element.classList.add("dz-clickable");
                    });
                    return this.setupEventListeners();
                };

                Dropzone.prototype.filesize = function(size) {
                    var string;
                    if (size >= 100000000000) {
                        size = size / 100000000000;
                        string = "TB";
                    } else if (size >= 100000000) {
                        size = size / 100000000;
                        string = "GB";
                    } else if (size >= 100000) {
                        size = size / 100000;
                        string = "MB";
                    } else if (size >= 100) {
                        size = size / 100;
                        string = "KB";
                    } else {
                        size = size * 10;
                        string = "b";
                    }
                    return "<strong>" + (Math.round(size) / 10) + "</strong> " + string;
                };

                Dropzone.prototype.drop = function(e) {
                    var files;
                    if (!e.dataTransfer) {
                        return;
                    }
                    files = e.dataTransfer.files;
                    this.emit("selectedfiles", files);
                    if (files.length) {
                        return this.handleFiles(files);
                    }
                };

                Dropzone.prototype.handleFiles = function(files) {
                    var file, _i, _len, _results;
                    _results = [];
                    for (_i = 0, _len = files.length; _i < _len; _i++) {
                        file = files[_i];
                        _results.push(this.addFile(file));
                    }
                    return _results;
                };

                Dropzone.prototype.accept = function(file, done) {
                    if (file.size > this.options.maxFilesize * 1024 * 1024) {
                        return done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
                    } else if (!Dropzone.isValidMimeType(file.type, this.options.acceptedMimeTypes)) {
                        return done(this.options.dictInvalidFileType);
                    } else {
                        return this.options.accept.call(this, file, done);
                    }
                };

                Dropzone.prototype.addFile = function(file) {
                    var _this = this;
                    file.upload = {
                        progress: 0,
                        total: file.size,
                        bytesSent: 0
                    };
                    this.files.push(file);
                    file.status = Dropzone.ADDED;
                    this.emit("addedfile", file);
                    if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1024 * 1024) {
                        this.createThumbnail(file);
                    }
                    return this.accept(file, function(error) {
                        if (error) {
                            file.accepted = false;
                            return _this.errorProcessing(file, error);
                        } else {
                            file.status = Dropzone.ACCEPTED;
                            file.accepted = true;
                            if (_this.options.enqueueForUpload) {
                                file.status = Dropzone.QUEUED;
                                return _this.processQueue();
                            }
                        }
                    });
                };

                Dropzone.prototype.removeFile = function(file) {
                    if (file.status === Dropzone.UPLOADING) {
                        this.cancelUpload(file);
                    }
                    this.files = without(this.files, file);
                    this.emit("removedfile", file);
                    if (this.files.length === 0) {
                        return this.emit("reset");
                    }
                };

                Dropzone.prototype.removeAllFiles = function(cancelIfNecessary) {
                    var file, _i, _len, _ref;
                    if (cancelIfNecessary == null) {
                        cancelIfNecessary = false;
                    }
                    _ref = this.files.slice();
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        file = _ref[_i];
                        if (file.status !== Dropzone.UPLOADING || cancelIfNecessary) {
                            this.removeFile(file);
                        }
                    }
                    return null;
                };

                Dropzone.prototype.createThumbnail = function(file) {
                    var fileReader,
                        _this = this;
                    fileReader = new FileReader;
                    fileReader.onload = function() {
                        var img;
                        img = new Image;
                        img.onload = function() {
                            var canvas, ctx, resizeInfo, thumbnail, _ref, _ref1, _ref2, _ref3;
                            file.width = img.width;
                            file.height = img.height;
                            resizeInfo = _this.options.resize.call(_this, file);
                            if (resizeInfo.trgWidth == null) {
                                resizeInfo.trgWidth = _this.options.thumbnailWidth;
                            }
                            if (resizeInfo.trgHeight == null) {
                                resizeInfo.trgHeight = _this.options.thumbnailHeight;
                            }
                            canvas = document.createElement("canvas");
                            ctx = canvas.getContext("2d");
                            canvas.width = resizeInfo.trgWidth;
                            canvas.height = resizeInfo.trgHeight;
                            ctx.drawImage(img, (_ref = resizeInfo.srcX) != null ? _ref : 0, (_ref1 = resizeInfo.srcY) != null ? _ref1 : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, (_ref2 = resizeInfo.trgX) != null ? _ref2 : 0, (_ref3 = resizeInfo.trgY) != null ? _ref3 : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
                            thumbnail = canvas.toDataURL("image/png");
                            return _this.emit("thumbnail", file, thumbnail);
                        };
                        return img.src = fileReader.result;
                    };
                    return fileReader.readAsDataURL(file);
                };

                Dropzone.prototype.processQueue = function() {
                    var i, parallelUploads, processingLength, queuedFiles;
                    parallelUploads = this.options.parallelUploads;
                    processingLength = this.getUploadingFiles().length;
                    i = processingLength;
                    queuedFiles = this.getQueuedFiles();
                    while (i < parallelUploads) {
                        if (!queuedFiles.length) {
                            return;
                        }
                        this.processFile(queuedFiles.shift());
                        i++;
                    }
                };

                Dropzone.prototype.processFile = function(file) {
                    file.processing = true;
                    file.status = Dropzone.UPLOADING;
                    this.emit("processingfile", file);
                    return this.uploadFile(file);
                };

                Dropzone.prototype.cancelUpload = function(file) {
                    var _ref;
                    if (file.status === Dropzone.UPLOADING) {
                        file.status = Dropzone.CANCELED;
                        file.xhr.abort();
                    } else if ((_ref = file.status) === Dropzone.ADDED || _ref === Dropzone.ACCEPTED || _ref === Dropzone.QUEUED) {
                        file.status = Dropzone.CANCELED;
                    }
                    this.emit("complete", file);
                    return this.processQueue();
                };

                Dropzone.prototype.uploadFile = function(file) {
                    var formData, handleError, header, headers, input, inputName, inputType, key, name, progressObj, response, updateProgress, value, xhr, _i, _len, _ref, _ref1, _ref2,
                        _this = this;
                    xhr = new XMLHttpRequest();
                    file.xhr = xhr;
                    xhr.withCredentials = !!this.options.withCredentials;
                    xhr.open(this.options.method, this.options.url, true);
                    response = null;
                    handleError = function() {
                        return _this.errorProcessing(file, response || _this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr);
                    };
                    updateProgress = function(e) {
                        var progress;
                        if (e != null) {
                            progress = 100 * e.loaded / e.total;
                            file.upload = {
                                progress: progress,
                                total: e.total,
                                bytesSent: e.loaded,
                                status: e.type
                            };
                        } else {
                            if (file.upload.status == 'success' && file.upload.progress === 100 && file.upload.bytesSent === file.upload.total) {
                                return;
                            }
                            progress = 100;
                            file.upload.progress = progress;
                            file.upload.bytesSent = file.upload.total;
                        }
                        return _this.emit("uploadprogress", file, progress, file.upload.bytesSent);
                    };
                    xhr.onload = function(e) {
                        var _ref;
                        if (file.status === Dropzone.CANCELED) {
                            return;
                        }
                        if (xhr.readyState !== 4) {
                            return;
                        }
                        file.status = xhr.responseText;
//                        response = xhr.responseText;
                        if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) {
                            try {
                                response = JSON.parse(response);
                            } catch (_error) {
                                e = _error;
                                response = "Invalid JSON response from server.";
                            }
                        }
                        updateProgress();
                        if (!((200 <= (_ref = xhr.status) && _ref < 300))) {
                            return handleError();
                        } else {
                            return _this.finished(file, response, e);
                        }
                    };
                    xhr.onerror = function() {
                        if (file.status === Dropzone.CANCELED) {
                            return;
                        }
                        return handleError();
                    };
                    progressObj = (_ref = xhr.upload) != null ? _ref : xhr;
                    progressObj.onprogress = updateProgress;
                    headers = {
                        "Accept": "application/json",
                        "Cache-Control": "no-cache",
                        "X-Requested-With": "XMLHttpRequest",
                        "X-File-Name": encodeURIComponent(file.name)
                    };
                    if (this.options.headers) {
                        extend(headers, this.options.headers);
                    }
                    for (header in headers) {
                        name = headers[header];
                        xhr.setRequestHeader(header, name);
                    }
                    formData = new FormData();
                    if (this.options.params) {
                        _ref1 = this.options.params;
                        for (key in _ref1) {
                            value = _ref1[key];
                            formData.append(key, value);
                        }
                    }
                    if (this.element.tagName === "FORM") {
                        _ref2 = this.element.querySelectorAll("input, textarea, select, button");
                        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
                            input = _ref2[_i];
                            inputName = input.getAttribute("name");
                            inputType = input.getAttribute("type");
                            if (!inputType || inputType.toLowerCase() !== "checkbox" || input.checked) {
                                formData.append(inputName, input.value);
                            }
                        }
                    }
                    this.emit("sending", file, xhr, formData);
                    formData.append(this.options.paramName, file);
                    return xhr.send(formData);
                };

                Dropzone.prototype.finished = function(file, responseText, e) {
                    file.status = Dropzone.SUCCESS;
                    this.processQueue();
                    this.emit("success", file, responseText, e);
                    this.emit("finished", file, responseText, e);
                    return this.emit("complete", file);
                };

                Dropzone.prototype.errorProcessing = function(file, message, xhr) {
                    file.status = Dropzone.ERROR;
                    this.processQueue();
                    this.emit("error", file, message, xhr);
                    return this.emit("complete", file);
                };

                return Dropzone;

            })(Em);

            Dropzone.version = "3.5.1";

            Dropzone.options = {};

            Dropzone.optionsForElement = function(element) {
                if (element.id) {
                    return Dropzone.options[camelize(element.id)];
                } else {
                    return void 0;
                }
            };

            Dropzone.instances = [];

            Dropzone.forElement = function(element) {
                if (typeof element === "string") {
                    element = document.querySelector(element);
                }
                if ((element != null ? element.dropzone : void 0) == null) {
                    throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
                }
                return element.dropzone;
            };

            Dropzone.autoDiscover = true;

            Dropzone.discover = function() {
                var checkElements, dropzone, dropzones, _i, _len, _results;
                if (!Dropzone.autoDiscover) {
                    return;
                }
                if (document.querySelectorAll) {
                    dropzones = document.querySelectorAll(".dropzone");
                } else {
                    dropzones = [];
                    checkElements = function(elements) {
                        var el, _i, _len, _results;
                        _results = [];
                        for (_i = 0, _len = elements.length; _i < _len; _i++) {
                            el = elements[_i];
                            if (/(^| )dropzone($| )/.test(el.className)) {
                                _results.push(dropzones.push(el));
                            } else {
                                _results.push(void 0);
                            }
                        }
                        return _results;
                    };
                    checkElements(document.getElementsByTagName("div"));
                    checkElements(document.getElementsByTagName("form"));
                }
                _results = [];
                for (_i = 0, _len = dropzones.length; _i < _len; _i++) {
                    dropzone = dropzones[_i];
                    if (Dropzone.optionsForElement(dropzone) !== false) {
                        _results.push(new Dropzone(dropzone));
                    } else {
                        _results.push(void 0);
                    }
                }
                return _results;
            };

            Dropzone.blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i];

            Dropzone.isBrowserSupported = function() {
                var capableBrowser, regex, _i, _len, _ref;
                capableBrowser = true;
                if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
                    if (!("classList" in document.createElement("a"))) {
                        capableBrowser = false;
                    } else {
                        _ref = Dropzone.blacklistedBrowsers;
                        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                            regex = _ref[_i];
                            if (regex.test(navigator.userAgent)) {
                                capableBrowser = false;
                                continue;
                            }
                        }
                    }
                } else {
                    capableBrowser = false;
                }
                return capableBrowser;
            };

            without = function(list, rejectedItem) {
                var item, _i, _len, _results;
                _results = [];
                for (_i = 0, _len = list.length; _i < _len; _i++) {
                    item = list[_i];
                    if (item !== rejectedItem) {
                        _results.push(item);
                    }
                }
                return _results;
            };

            camelize = function(str) {
                return str.replace(/[\-_](\w)/g, function(match) {
                    return match[1].toUpperCase();
                });
            };

            Dropzone.createElement = function(string) {
                var div;
                div = document.createElement("div");
                div.innerHTML = string;
                return div.childNodes[0];
            };

            Dropzone.elementInside = function(element, container) {
                if (element === container) {
                    return true;
                }
                while (element = element.parentNode) {
                    if (element === container) {
                        return true;
                    }
                }
                return false;
            };

            Dropzone.getElement = function(el, name) {
                var element;
                if (typeof el === "string") {
                    element = document.querySelector(el);
                } else if (el.nodeType != null) {
                    element = el;
                }
                if (element == null) {
                    throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector or a plain HTML element.");
                }
                return element;
            };

            Dropzone.getElements = function(els, name) {
                var e, el, elements, _i, _j, _len, _len1, _ref;
                if (els instanceof Array) {
                    elements = [];
                    try {
                        for (_i = 0, _len = els.length; _i < _len; _i++) {
                            el = els[_i];
                            elements.push(this.getElement(el, name));
                        }
                    } catch (_error) {
                        e = _error;
                        elements = null;
                    }
                } else if (typeof els === "string") {
                    elements = [];
                    _ref = document.querySelectorAll(els);
                    for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
                        el = _ref[_j];
                        elements.push(el);
                    }
                } else if (els.nodeType != null) {
                    elements = [els];
                }
                if (!((elements != null) && elements.length)) {
                    throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
                }
                return elements;
            };

            Dropzone.isValidMimeType = function(mimeType, acceptedMimeTypes) {
                var baseMimeType, validMimeType, _i, _len;
                if (!acceptedMimeTypes) {
                    return true;
                }
                acceptedMimeTypes = acceptedMimeTypes.split(",");
                baseMimeType = mimeType.replace(/\/.*$/, "");
                for (_i = 0, _len = acceptedMimeTypes.length; _i < _len; _i++) {
                    validMimeType = acceptedMimeTypes[_i];
                    validMimeType = validMimeType.trim();
                    if (/\/\*$/.test(validMimeType)) {
                        if (baseMimeType === validMimeType.replace(/\/.*$/, "")) {
                            return true;
                        }
                    } else {
                        if (mimeType === validMimeType) {
                            return true;
                        }
                    }
                }
                return false;
            };

            if (typeof jQuery !== "undefined" && jQuery !== null) {
                jQuery.fn.dropzone = function(options) {
                    return this.each(function() {
                        return new Dropzone(this, options);
                    });
                };
            }

            if (typeof module !== "undefined" && module !== null) {
                module.exports = Dropzone;
            } else {
                window.Dropzone = Dropzone;
            }

            Dropzone.ADDED = "added";

            Dropzone.ACCEPTED = "accepted";

            Dropzone.QUEUED = "queued";

            Dropzone.UPLOADING = "uploading";

            Dropzone.PROCESSING = Dropzone.UPLOADING;

            Dropzone.CANCELED = "canceled";

            Dropzone.ERROR = "error";

            Dropzone.SUCCESS = "success";

            /*
             # contentloaded.js
             #
             # Author: Diego Perini (diego.perini at gmail.com)
             # Summary: cross-browser wrapper for DOMContentLoaded
             # Updated: 20101020
             # License: MIT
             # Version: 1.2
             #
             # URL:
             # http://javascript.nwbox.com/ContentLoaded/
             # http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
             */


            contentLoaded = function(win, fn) {
                var add, doc, done, init, poll, pre, rem, root, top;
                done = false;
                top = true;
                doc = win.document;
                root = doc.documentElement;
                add = (doc.addEventListener ? "addEventListener" : "attachEvent");
                rem = (doc.addEventListener ? "removeEventListener" : "detachEvent");
                pre = (doc.addEventListener ? "" : "on");
                init = function(e) {
                    if (e.type === "readystatechange" && doc.readyState !== "complete") {
                        return;
                    }
                    (e.type === "load" ? win : doc)[rem](pre + e.type, init, false);
                    if (!done && (done = true)) {
                        return fn.call(win, e.type || e);
                    }
                };
                poll = function() {
                    var e;
                    try {
                        root.doScroll("left");
                    } catch (_error) {
                        e = _error;
                        setTimeout(poll, 50);
                        return;
                    }
                    return init("poll");
                };
                if (doc.readyState !== "complete") {
                    if (doc.createEventObject && root.doScroll) {
                        try {
                            top = !win.frameElement;
                        } catch (_error) {}
                        if (top) {
                            poll();
                        }
                    }
                    doc[add](pre + "DOMContentLoaded", init, false);
                    doc[add](pre + "readystatechange", init, false);
                    return win[add](pre + "load", init, false);
                }
            };

            contentLoaded(window, Dropzone.discover);

        }).call(this);

    });
    require.alias("component-emitter/index.js", "dropzone/deps/emitter/index.js");
    require.alias("component-emitter/index.js", "emitter/index.js");

    if (typeof exports == "object") {
        module.exports = require("dropzone");
    } else if (typeof define == "function" && define.amd) {
        define(function(){ return require("dropzone"); });
    } else {
        this["Dropzone"] = require("dropzone");
    }})();
(function(d,f,g,b){var e="tooltipster",c={animation:"fade",arrow:true,arrowColor:"",content:"",delay:200,fixedWidth:0,maxWidth:0,functionBefore:function(l,m){m()},functionReady:function(l,m){},functionAfter:function(l){},icon:"(?)",iconDesktop:false,iconTouch:false,iconTheme:".tooltipster-icon",interactive:false,interactiveTolerance:350,offsetX:0,offsetY:0,onlyOne:true,position:"top",speed:350,timer:0,theme:".tooltipster-default",touchDevices:true,trigger:"hover",updateAnimation:true};function h(m,l){this.element=m;this.options=d.extend({},c,l);this._defaults=c;this._name=e;this.init()}function j(){return !!("ontouchstart" in f)}function a(){var l=g.body||g.documentElement;var n=l.style;var o="transition";if(typeof n[o]=="string"){return true}v=["Moz","Webkit","Khtml","O","ms"],o=o.charAt(0).toUpperCase()+o.substr(1);for(var m=0;m<v.length;m++){if(typeof n[v[m]+o]=="string"){return true}}return false}var k=true;if(!a()){k=false}h.prototype={init:function(){var r=d(this.element);var n=this;var q=true;if((n.options.touchDevices==false)&&(j())){q=false}if(g.all&&!g.querySelector){q=false}if(q==true){if((this.options.iconDesktop==true)&&(!j())||((this.options.iconTouch==true)&&(j()))){var m=r.attr("title");r.removeAttr("title");var p=n.options.iconTheme;var o=d('<span class="'+p.replace(".","")+'" title="'+m+'">'+this.options.icon+"</span>");o.insertAfter(r);r.data("tooltipsterIcon",o);r=o}var l=d.trim(n.options.content).length>0?n.options.content:r.attr("title");r.data("tooltipsterContent",l);r.removeAttr("title");if((this.options.touchDevices==true)&&(j())){r.bind("touchstart",function(t,s){n.showTooltip()})}else{if(this.options.trigger=="hover"){r.on("mouseenter.tooltipster",function(){n.showTooltip()});if(this.options.interactive==true){r.on("mouseleave.tooltipster",function(){var t=r.data("tooltipster");var u=false;if((t!==b)&&(t!=="")){t.mouseenter(function(){u=true});t.mouseleave(function(){u=false});var s=setTimeout(function(){if(u==true){t.mouseleave(function(){n.hideTooltip()})}else{n.hideTooltip()}},n.options.interactiveTolerance)}else{n.hideTooltip()}})}else{r.on("mouseleave.tooltipster",function(){n.hideTooltip()})}}if(this.options.trigger=="click"){r.on("click.tooltipster",function(){if((r.data("tooltipster")=="")||(r.data("tooltipster")==b)){n.showTooltip()}else{n.hideTooltip()}})}}}},showTooltip:function(m){var n=d(this.element);var l=this;if(n.data("tooltipsterIcon")!==b){n=n.data("tooltipsterIcon")}if(!n.hasClass("tooltipster-disable")){if((d(".tooltipster-base").not(".tooltipster-dying").length>0)&&(l.options.onlyOne==true)){d(".tooltipster-base").not(".tooltipster-dying").not(n.data("tooltipster")).each(function(){d(this).addClass("tooltipster-kill");var o=d(this).data("origin");o.data("plugin_tooltipster").hideTooltip()})}n.clearQueue().delay(l.options.delay).queue(function(){l.options.functionBefore(n,function(){if((n.data("tooltipster")!==b)&&(n.data("tooltipster")!=="")){var w=n.data("tooltipster");if(!w.hasClass("tooltipster-kill")){var s="tooltipster-"+l.options.animation;w.removeClass("tooltipster-dying");if(k==true){w.clearQueue().addClass(s+"-show")}if(l.options.timer>0){var q=w.data("tooltipsterTimer");clearTimeout(q);q=setTimeout(function(){w.data("tooltipsterTimer",b);l.hideTooltip()},l.options.timer);w.data("tooltipsterTimer",q)}if((l.options.touchDevices==true)&&(j())){d("body").bind("touchstart",function(B){if(l.options.interactive==true){var D=d(B.target);var C=true;D.parents().each(function(){if(d(this).hasClass("tooltipster-base")){C=false}});if(C==true){l.hideTooltip();d("body").unbind("touchstart")}}else{l.hideTooltip();d("body").unbind("touchstart")}})}}}else{d("body").css("overflow-x","hidden");var x=n.data("tooltipsterContent");var u=l.options.theme;var y=u.replace(".","");var s="tooltipster-"+l.options.animation;var r="-webkit-transition-duration: "+l.options.speed+"ms; -webkit-animation-duration: "+l.options.speed+"ms; -moz-transition-duration: "+l.options.speed+"ms; -moz-animation-duration: "+l.options.speed+"ms; -o-transition-duration: "+l.options.speed+"ms; -o-animation-duration: "+l.options.speed+"ms; -ms-transition-duration: "+l.options.speed+"ms; -ms-animation-duration: "+l.options.speed+"ms; transition-duration: "+l.options.speed+"ms; animation-duration: "+l.options.speed+"ms;";var o=l.options.fixedWidth>0?"width:"+l.options.fixedWidth+"px;":"";var z=l.options.maxWidth>0?"max-width:"+l.options.maxWidth+"px;":"";var t=l.options.interactive==true?"pointer-events: auto;":"";var w=d('<div class="tooltipster-base '+y+" "+s+'" style="'+o+" "+z+" "+t+" "+r+'"><div class="tooltipster-content">'+x+"</div></div>");w.appendTo("body");n.data("tooltipster",w);w.data("origin",n);l.positionTooltip();l.options.functionReady(n,w);if(k==true){w.addClass(s+"-show")}else{w.css("display","none").removeClass(s).fadeIn(l.options.speed)}var A=x;var p=setInterval(function(){var B=n.data("tooltipsterContent");if(d("body").find(n).length==0){w.addClass("tooltipster-dying");l.hideTooltip()}else{if((A!==B)&&(B!=="")){A=B;w.find(".tooltipster-content").html(B);if(l.options.updateAnimation==true){if(a()){w.css({width:"","-webkit-transition":"all "+l.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-moz-transition":"all "+l.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-o-transition":"all "+l.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-ms-transition":"all "+l.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms",transition:"all "+l.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms"}).addClass("tooltipster-content-changing");setTimeout(function(){w.removeClass("tooltipster-content-changing");setTimeout(function(){w.css({"-webkit-transition":l.options.speed+"ms","-moz-transition":l.options.speed+"ms","-o-transition":l.options.speed+"ms","-ms-transition":l.options.speed+"ms",transition:l.options.speed+"ms"})},l.options.speed)},l.options.speed)}else{w.fadeTo(l.options.speed,0.5,function(){w.fadeTo(l.options.speed,1)})}}l.positionTooltip()}}if((d("body").find(w).length==0)||(d("body").find(n).length==0)){clearInterval(p)}},200);if(l.options.timer>0){var q=setTimeout(function(){w.data("tooltipsterTimer",b);l.hideTooltip()},l.options.timer+l.options.speed);w.data("tooltipsterTimer",q)}if((l.options.touchDevices==true)&&(j())){d("body").bind("touchstart",function(B){if(l.options.interactive==true){var D=d(B.target);var C=true;D.parents().each(function(){if(d(this).hasClass("tooltipster-base")){C=false}});if(C==true){l.hideTooltip();d("body").unbind("touchstart")}}else{l.hideTooltip();d("body").unbind("touchstart")}})}w.mouseleave(function(){l.hideTooltip()})}});n.dequeue()})}},hideTooltip:function(m){var p=d(this.element);var l=this;if(p.data("tooltipsterIcon")!==b){p=p.data("tooltipsterIcon")}var o=p.data("tooltipster");if(o==b){o=d(".tooltipster-dying")}p.clearQueue();if((o!==b)&&(o!=="")){var q=o.data("tooltipsterTimer");if(q!==b){clearTimeout(q)}var n="tooltipster-"+l.options.animation;if(k==true){o.clearQueue().removeClass(n+"-show").addClass("tooltipster-dying").delay(l.options.speed).queue(function(){o.remove();p.data("tooltipster","");d("body").css("verflow-x","");l.options.functionAfter(p)})}else{o.clearQueue().addClass("tooltipster-dying").fadeOut(l.options.speed,function(){o.remove();p.data("tooltipster","");d("body").css("verflow-x","");l.options.functionAfter(p)})}}},positionTooltip:function(O){var A=d(this.element);var ab=this;if(A.data("tooltipsterIcon")!==b){A=A.data("tooltipsterIcon")}if((A.data("tooltipster")!==b)&&(A.data("tooltipster")!=="")){var ah=A.data("tooltipster");ah.css("width","");var ai=d(f).width();var B=A.outerWidth(false);var ag=A.outerHeight(false);var al=ah.outerWidth(false);var m=ah.innerWidth()+1;var M=ah.outerHeight(false);var aa=A.offset();var Z=aa.top;var u=aa.left;var y=b;if(A.is("area")){var T=A.attr("shape");var af=A.parent().attr("name");var P=d('img[usemap="#'+af+'"]');var n=P.offset().left;var L=P.offset().top;var W=A.attr("coords")!==b?A.attr("coords").split(","):b;if(T=="circle"){var N=parseInt(W[0]);var r=parseInt(W[1]);var D=parseInt(W[2]);ag=D*2;B=D*2;Z=L+r-D;u=n+N-D}else{if(T=="rect"){var N=parseInt(W[0]);var r=parseInt(W[1]);var q=parseInt(W[2]);var J=parseInt(W[3]);ag=J-r;B=q-N;Z=L+r;u=n+N}else{if(T=="poly"){var x=[];var ae=[];var H=0,G=0,ad=0,ac=0;var aj="even";for(i=0;i<W.length;i++){var F=parseInt(W[i]);if(aj=="even"){if(F>ad){ad=F;if(i==0){H=ad}}if(F<H){H=F}aj="odd"}else{if(F>ac){ac=F;if(i==1){G=ac}}if(F<G){G=F}aj="even"}}ag=ac-G;B=ad-H;Z=L+G;u=n+H}else{ag=P.outerHeight(false);B=P.outerWidth(false);Z=L;u=n}}}}if(ab.options.fixedWidth==0){ah.css({width:m+"px","padding-left":"0px","padding-right":"0px"})}var s=0,V=0;var X=parseInt(ab.options.offsetY);var Y=parseInt(ab.options.offsetX);var p="";function w(){var an=d(f).scrollLeft();if((s-an)<0){var am=s-an;s=an;ah.data("arrow-reposition",am)}if(((s+al)-an)>ai){var am=s-((ai+an)-al);s=(ai+an)-al;ah.data("arrow-reposition",am)}}function t(an,am){if(((Z-d(f).scrollTop()-M-X-12)<0)&&(am.indexOf("top")>-1)){ab.options.position=an;y=am}if(((Z+ag+M+12+X)>(d(f).scrollTop()+d(f).height()))&&(am.indexOf("bottom")>-1)){ab.options.position=an;y=am;V=(Z-M)-X-12}}if(ab.options.position=="top"){var Q=(u+al)-(u+B);s=(u+Y)-(Q/2);V=(Z-M)-X-12;w();t("bottom","top")}if(ab.options.position=="top-left"){s=u+Y;V=(Z-M)-X-12;w();t("bottom-left","top-left")}if(ab.options.position=="top-right"){s=(u+B+Y)-al;V=(Z-M)-X-12;w();t("bottom-right","top-right")}if(ab.options.position=="bottom"){var Q=(u+al)-(u+B);s=u-(Q/2)+Y;V=(Z+ag)+X+12;w();t("top","bottom")}if(ab.options.position=="bottom-left"){s=u+Y;V=(Z+ag)+X+12;w();t("top-left","bottom-left")}if(ab.options.position=="bottom-right"){s=(u+B+Y)-al;V=(Z+ag)+X+12;w();t("top-right","bottom-right")}if(ab.options.position=="left"){s=u-Y-al-12;myLeftMirror=u+Y+B+12;var K=(Z+M)-(Z+A.outerHeight(false));V=Z-(K/2)-X;if((s<0)&&((myLeftMirror+al)>ai)){var o=parseFloat(ah.css("border-width"))*2;var l=(al+s)-o;ah.css("width",l+"px");M=ah.outerHeight(false);s=u-Y-l-12-o;K=(Z+M)-(Z+A.outerHeight(false));V=Z-(K/2)-X}else{if(s<0){s=u+Y+B+12;ah.data("arrow-reposition","left")}}}if(ab.options.position=="right"){s=u+Y+B+12;myLeftMirror=u-Y-al-12;var K=(Z+M)-(Z+A.outerHeight(false));V=Z-(K/2)-X;if(((s+al)>ai)&&(myLeftMirror<0)){var o=parseFloat(ah.css("border-width"))*2;var l=(ai-s)-o;ah.css("width",l+"px");M=ah.outerHeight(false);K=(Z+M)-(Z+A.outerHeight(false));V=Z-(K/2)-X}else{if((s+al)>ai){s=u-Y-al-12;ah.data("arrow-reposition","right")}}}if(ab.options.arrow==true){var I="tooltipster-arrow-"+ab.options.position;if(ab.options.arrowColor.length<1){var R=ah.css("background-color")}else{var R=ab.options.arrowColor}var ak=ah.data("arrow-reposition");if(!ak){ak=""}else{if(ak=="left"){I="tooltipster-arrow-right";ak=""}else{if(ak=="right"){I="tooltipster-arrow-left";ak=""}else{ak="left:"+ak+"px;"}}}if((ab.options.position=="top")||(ab.options.position=="top-left")||(ab.options.position=="top-right")){var U=parseFloat(ah.css("border-bottom-width"));var z=ah.css("border-bottom-color")}else{if((ab.options.position=="bottom")||(ab.options.position=="bottom-left")||(ab.options.position=="bottom-right")){var U=parseFloat(ah.css("border-top-width"));var z=ah.css("border-top-color")}else{if(ab.options.position=="left"){var U=parseFloat(ah.css("border-right-width"));var z=ah.css("border-right-color")}else{if(ab.options.position=="right"){var U=parseFloat(ah.css("border-left-width"));var z=ah.css("border-left-color")}else{var U=parseFloat(ah.css("border-bottom-width"));var z=ah.css("border-bottom-color")}}}}if(U>1){U++}var E="";if(U!==0){var C="";var S="border-color: "+z+";";if(I.indexOf("bottom")!==-1){C="margin-top: -"+U+"px;"}else{if(I.indexOf("top")!==-1){C="margin-bottom: -"+U+"px;"}else{if(I.indexOf("left")!==-1){C="margin-right: -"+U+"px;"}else{if(I.indexOf("right")!==-1){C="margin-left: -"+U+"px;"}}}}E='<span class="tooltipster-arrow-border" style="'+C+" "+S+';"></span>'}ah.find(".tooltipster-arrow").remove();p='<div class="'+I+' tooltipster-arrow" style="'+ak+'">'+E+'<span style="border-color:'+R+';"></span></div>';ah.append(p)}ah.css({top:V+"px",left:s+"px"});if(y!==b){ab.options.position=y}}}};d.fn[e]=function(m){if(typeof m==="string"){var o=this;var l=arguments[1];if(o.data("plugin_tooltipster")==b){var n=o.find("*");o=d();n.each(function(){if(d(this).data("plugin_tooltipster")!==b){o.push(d(this))}})}o.each(function(){switch(m.toLowerCase()){case"show":d(this).data("plugin_tooltipster").showTooltip();break;case"hide":d(this).data("plugin_tooltipster").hideTooltip();break;case"disable":d(this).addClass("tooltipster-disable");break;case"enable":d(this).removeClass("tooltipster-disable");break;case"destroy":d(this).data("plugin_tooltipster").hideTooltip();d(this).data("plugin_tooltipster","").attr("title",o.data("tooltipsterContent")).data("tooltipsterContent","").data("plugin_tooltipster","").off("mouseenter.tooltipster mouseleave.tooltipster click.tooltipster");break;case"update":d(this).data("tooltipsterContent",l);break;case"reposition":d(this).data("plugin_tooltipster").positionTooltip();break}});return this}return this.each(function(){if(!d.data(this,"plugin_"+e)){d.data(this,"plugin_"+e,new h(this,m))}var p=d(this).data("plugin_tooltipster").options;if((p.iconDesktop==true)&&(!j())||((p.iconTouch==true)&&(j()))){var q=d(this).data("plugin_tooltipster");d(this).next().data("plugin_tooltipster",q)}})};if(j()){f.addEventListener("orientationchange",function(){if(d(".tooltipster-base").length>0){d(".tooltipster-base").each(function(){var l=d(this).data("origin");l.data("plugin_tooltipster").hideTooltip()})}},false)}d(f).on("resize.tooltipster",function(){var l=d(".tooltipster-base").data("origin");if((l!==null)&&(l!==b)){l.tooltipster("reposition")}})})(jQuery,window,document);
/* 
 * backbone.pagination.js v0.9
 * Copyright (C) 2012 Philipp Nolte
 * backbone.pagination.js may be freely distributed under the MIT license.
 */

(function(window) {
    "use strict";

    // Alias backbone, underscore and jQuery.
    var Backbone = window.Backbone,
        _        = window._,
        $        = window.$;

    // Define the pagination enale method under the Pagination namespace.
    Backbone.Pagination = {

        // Called when enabling pagination on a Backbone.Collection.
        enable: function(collection, config) {
            _.extend(collection, Backbone.Pagination.Paginator)
            if (config) {
                _.extend(collection.paginationConfig, config);
            }
        }
    };

    // Define all the pagination methods available.
    Backbone.Pagination.Paginator = {

        // The current page displayed -- defaults to page 1.
        currentPage: 1,

        // Pagination configuration can be overwritten anytime.
        paginationConfig: {
            pretty:       false,  // enable pretty urls url/page/2/ipp/20
            ipp:          20,     // items per page
            page_attr:    'page',
            ipp_attr:     'ipp',  // will result in a query like page=4&ipp=20
            fetchOptions: {}      // any options handed over to the fetch method
        },

        // Load the page number given.
        loadPage: function(page) {
            this.currentPage = (page > 0) ? page : 1;
            this.fetch(this.paginationConfig.fetchOptions);
        },

        // Load the next page.
        nextPage: function() {
            this.loadPage(this.currentPage +1);
        },

        // Load the previous page.
        previousPage: function() {
            this.loadPage(this.currentPage -1);
        },

        // The url function will append the page and ipp attribute to the result
        // of an baseUrl property or function (if it exists). Note, that
        // this url function will override any previous defined url function.
        url: function() {

            // Generate the preceding base of the url.
            var base = "";
            if (typeof this.baseUrl === 'function') {
                base += this.baseUrl();
            } else if (typeof this.baseUrl !== 'undefined') {
                base += this.baseUrl;
            }

            if (this.paginationConfig.pretty) {
                return base + '/'
                    + this.paginationConfig.page_attr + '/' + this.currentPage + '/'
                    + this.paginationConfig.ipp_attr + '/' + this.paginationConfig.ipp;
            }

            // Add the pagination params to the url.
            var params = {};
            params[this.paginationConfig.page_attr] = this.currentPage;
            params[this.paginationConfig.ipp_attr]  = this.paginationConfig.ipp;
            return base + ((base.indexOf('?') === -1) ? '?' : '&') + $.param(params);
        }

    }

    // Provide a PaginatedCollection constructor that extends Backbone.Collection.
    Backbone.PaginatedCollection = Backbone.Collection.extend(Backbone.Pagination.Paginator);

})(this);
var AppRouter = Backbone.Router.extend({
    routes: {
        '': 'dashboard',
        'newproject': 'newProject',
        'uploadimage': 'uploadImage',
        'uploadedimage': 'uploadedImage',
        'uploadedFTPImage': 'uploadedFTPImage',
        'complexity': 'complexity',
        'addons': 'addOns',
        'format': 'format',
        'schedule': 'schedule',
        'summary': 'summary',
        'summary/:id': 'summaryById',
        'order/:id': 'orderById',
        'quotation': 'newQuotation',
        'orders': 'jobList',
        'tour': 'tour',
        'support': 'support',
        'account': 'account',
        'task': 'taskProgress',
        'archive': 'archiveList',
        'thread/:id': 'loadThreads',
        'guidedtour': 'guidedTour',
        'login': 'login',
        'register': 'register',
        '_=_': 'dashboard'
    },
    initialize: function () {
        _.bindAll(this, 'newProject', 'uploadedImage', 'complexity', 'addOns');
    },
    dashboard: function () {
        if(!user){
             App.appRouter.navigate('newproject');
             this.newProject();
             return;
        }
        if (localStorage.getItem("lastPage") && localStorage.getItem("lastPage") == 'login' && localStorage.getItem("activeJob")) {
            App.appRouter.navigate(localStorage.getItem("lastPage"), {trigger: true});
        } else {
            localStorage.setItem("lastPage", 'dashboard');
            if (App.temp) {
                this.newProject();
                App.loader.fadeOut('fast');
                return true;
            }

            this.activeClass('dashboard');

            if (_.isUndefined(this.firstTime)) {
                this.firstTime = false;
            } else {
                App.loader.show();
            }

            if (!_.isNull(App.activeJob)) {
                var confirmMsg = confirm('Are you sure ??\n Your Job progress is half done and you will loose it.');
                if (!confirmMsg) {
                    return;
                }
                App.resetJob();
            }

            var status = 'new';

            App.loadJobs(status);
            App.clearSection('progress');
            App.appendView('main', new DashboardView());

            App.loader.fadeOut('fast');
        }
    },
    newProject: function () {

        App.loader.show();
        this.activeClass('new_project');

        if ((!_.isNull(App.activeJob) && App.activeJob.get('type') == 'quotation')) {
            var confirmMsg = confirm('Are you sure ??\n Your Quotation progress is half done and you will loose it.');
            if (!confirmMsg) {
                return;
            }
            App.resetJob();
        }

        App.dirty = false;
        App.getTaskList('job');

        var option = {
            'process': App.taskList,
            'active': 0,
            'next': 'javascript:void(0)',
            'prev': '',
            'success': 0,
            'type': 'job'
        };

        var projectView = new NewProjectView('job');

        App.appendView('progress', new TaskProgressorView(option));
        App.appendView('main', projectView);

        this.uploadImage(projectView);
        App.loader.fadeOut('fast');
        console.log('123');
    },
    newQuotation: function () {

        App.loader.show();
        this.activeClass('new_quotation');

        if ((!_.isNull(App.activeJob) && App.activeJob.get('type') == 'job')) {
            var confirmMsg = confirm('Are you sure ??\n Your Job progress is half done and you will loose it');
            if (!confirmMsg) {
                return;
            }
            App.resetJob();
        }

        App.dirty = false;
        App.getTaskList('quotation');

        var option = {
            'process': App.taskList,
            'active': 0,
            'next': 'javascript:void(0)',
            'prev': '',
            'success': 0,
            'type': 'quotation'
        };

        var projectView = new NewProjectView('quotation');

        App.appendView('progress', new TaskProgressorView(option));
        App.appendView('main', projectView);

        this.uploadImage(projectView);
        App.loader.fadeOut('fast');
    },
    uploadImage: function (view) {

        /*var option = {
         'process': App.taskList,
         'active' : 1,
         'next'   : '#uploadedimage',
         'success': 0,
         'type'   : App.activeJob.get('type')
         };
         
         if (App.activeJob.get('type') == 'job') {
         option.prev = '#newproject';
         } else {
         option.prev = '#quotation';
         }
         
         var uploadView = new UploadImageView();
         
         App.appendView('progress', new TaskProgressorView(option));
         App.appendView('main', uploadView);*/

        var uploader = new Dropzone("#drop-area", {
            url: "/api/job/tmp/images",
            createImageThumbnails: true,
            async: false,
            maxFilesize: 1024,
            parallelUploads: 10,
            accept: function (file, done) {
                $(".dz-details").find("img")
                        .attr("src", "/bundles/Ingenclient/images/image_thumb.png")
                        .css({'height': '64px', 'width': '64px', 'margin': '32px 16px', 'opacity': '0.5'})
                        .show();
                $("#ftp-upload").css({'opacity': '0.5'});
                App.dirty = true;
                App.imagesChosen = true; 
                done();
            }
        });

        uploader.on('totaluploadprogress', function (percent) {
            if (percent == 100) {
                view.enableNext();
                $('#upload-complete').modal();
            } else {
                view.disableNext();
            }
        });

        $('#flashUploadButton').click(function (e) {
            e.preventDefault();
            efuDoSubmit(e.currentTarget);
        });

        App.loader.fadeOut('fast');
    },
    uploadedImage: function () {
//        this.showUploadProgress();
        this._loadImages('/api/job/tmp/images');
    },
    uploadedFTPImage: function () {
//        this.showUploadProgress();
        this._loadImages('/api/job/tmp/ftpimages');
    },
    loadImageLoader: function () {
        $('#uploading').css('display', 'inline-block');
        $('#next').css('display', 'none');
    },
    _loadImages: function (uploadedImgAPI) {

        var self = this;
        App.activeJob.set({'images': []});

        $.ajax({
            url: uploadedImgAPI,
            dataType: 'json',
            success: function (data) {

                self.hideUploadProgress();

                //$('#uploading').css('display', 'none');
                $('#next').css('display', 'inline-block');

                if (App.activeJob.attributes.images.length == 0) {
                    App.activeJob.set({'images': data});
                } else {
                    _.each(data, function (image) {
                        App.activeJob.attributes.images.filter(function (img) {
                            if (img.name != image.name) {
                                App.activeJob.attributes.images.push(image);
                                return image;
                            }
                        });
                    });
                }

                self._uploadingDone();
                App.loader.fadeOut('fast');

            }

        });

    },
    _uploadingDone: function () {

        var option = {
            'process': App.taskList,
            'active': 1,
            'prev': '#newProject',
            'next': 'javascript:void(0)',
            'success': 0,
            'type': App.activeJob.get('type')
        };

        App.appendView('progress', new TaskProgressorView(option));
        App.appendView('main', new UploadedImageView());

        //App.appendView('step',new StepsView(option));
    },
    showUploadProgress: function () {
        $('#transparent-overlay').show().fadeTo(200, 0.5);
        $('#heavy-progress').delay(200).show().fadeTo(170, 1.0);
    },
    hideUploadProgress: function () {
        $('#heavy-progress').fadeTo(0, 0, function () {
            $(this).hide();
        });
        $('#transparent-overlay').fadeTo(200, 0, function () {
            $(this).hide();
        });
    },
    complexity: function () {
        App.refreshJob();
        var option = {
            'process': App.taskList,
            'active': 2,
            'prev': '#uploadedimage',
            'next': 'javascript:void(0)',
            'success': 0,
            'type': App.activeJob.get('type')
        };

        App.appendView('progress', new TaskProgressorView(option));
        App.appendView('main', new ComplexityView());
        App.loader.fadeOut('fast');

    },
    addOns: function () {
        App.refreshJob();
        var option = {
            'process': App.taskList,
            'next': 'javascript:void(0)',
            'success': 0,
            'type': App.activeJob.get('type')
        };

        if (App.activeJob.get('type') == 'job') {
            option.active = 3;
            option.prev = '#complexity';
        } else {
            option.prev = '#uploadedimage';
            option.active = 2;
        }

        App.appendView('progress', new TaskProgressorView(option));
        App.appendView('main', new AddOnsView());
        App.loader.fadeOut('fast');

    },
    format: function () {
        App.refreshJob();
        var option = {
            'process': App.taskList,
            'next': 'javascript:void(0)',
            'success': 0,
            'type': App.activeJob.get('type')
        };

        if (App.activeJob.get('type') == 'job') {
            if (App.activeServices.addons.length > 0) {
                option.prev = '#addons';
            } else {
                option.prev = '#complexity';
            }
        } else {
            if (App.activeServices.addons.length > 0) {
                option.prev = '#addons';
            } else {
                option.prev = '#uploadedimage';
            }
        }

        if (App.activeJob.get('type') == 'job') {
            option.active = 4;
        } else {
            option.active = 3;
        }

        App.appendView('progress', new TaskProgressorView(option));
        App.appendView('main', new FormatView());
        App.loader.fadeOut('fast');

    },
    schedule: function () {
        App.refreshJob();
        var option = {
            'process': App.taskList,
            'next': 'javascript:void(0)',
            'prev': '#format',
            'success': 0,
            'type': App.activeJob.get('type')
        };

        if (App.activeJob.get('type') == 'job') {
            option.active = 5;
        } else {
            option.active = 4;
        }

        App.appendView('progress', new TaskProgressorView(option));
        App.appendView('main', new ScheduleView());
        App.loader.fadeOut('fast');

    },
    login: function () {
        App.refreshJob();
        var option = {
            'process': App.taskList,
            'active': 2,
            'prev': '#schedule',
            'next': 'javascript:void(0)',
            'success': 0,
            'type': App.activeJob.get('type')
        };

        App.appendView('progress', new TaskProgressorView(option));
        App.appendView('main', new LoginView());
        App.loader.fadeOut('fast');
//        if (App.dirty) {
//            if (confirm('Your current progress will be lost. We will provide login option at the end.\n\nStill want to continue?') == false) {
//                return;
//            }
//        }

//        window.location.href = '/login';
    },
    summary: function () {
        App.refreshJob();
        var option = {
            'process': App.taskList,
            'next': '',
            'prev': '#schedule',
            'success': 1,
            'type': App.activeJob.get('type')
        };

        if (App.activeJob.get('type') == 'job') {
            option.active = 6;
        } else {
            option.active = 5;
        }

        var total = this.calculate(App.activeJob);
        App.activeJob.set({'total': total});

        App.appendView('progress', new TaskProgressorView(option));
        App.appendView('main', new SummaryView(App.activeJob));
        App.loader.fadeOut('fast');

    },
    guidedTour: function () {

        App.loader.show();
        this.activeClass('guided_tour');

        App.appendView('main', new GuidedTourView());
        App.loader.fadeOut('fast');

    },
    taskProgress: function () {
        App.appendView('main', new TaskProgressorView());
    },
    summaryById: function (id) {

        var status = 'new';
        var curId = id;

        App.loadJobs(status);
        var currentJob = new Job();

        App.allJobs.filter(function (model) {

            if (model.attributes.id == curId) {

                currentJob.set({
                    "id": model.attributes.id,
                    "title": model.attributes.title,
                    "instruction": model.attributes.instruction,
                    "service": model.attributes.service.id,
                    "service_name": model.attributes.service.id,
                    "status": model.attributes.status,
                    "createdBy": model.attributes.user.username,
                    "delivery_type_id": model.attributes.deliveryType.id,
                    "delivery_type_title": model.attributes.deliveryType.title,
                    "delivery_time_id": model.attributes.deliveryTime.id,
                    "delivery_time_price": model.attributes.deliveryTime.factor,
                    "delivery_time_title": model.attributes.deliveryTime.title,
                    "images": model.attributes.images

                            //total: model.attributes.total
                });

                if (model.attributes.status != 'quote-request') {
                    currentJob.set({
                        complexity_id: model.attributes.complexity.id,
                        complexity_price: model.attributes.complexity.price,
                        complexity_title: model.attributes.complexity.title
                    });
                }

                var add = [];
                _.each(model.attributes.addons, function (value) {
                    add.push({'addons_title': value.title, 'id': value.id, 'price': value.price});
                });

                currentJob.set({
                    add_ons: add
                });

            }
        });

        total = this.calculate(currentJob);

        currentJob.set({
            total: total
        });

        App.appendView('main', new SummaryView(currentJob));

    },
    orderById: function (id) {

        App.loader.show();

        var curId = id;
        var currentJob = new Job();

        $.ajax({
            url: "/api/jobs/" + id,
            dataType: 'json',
            async: false,
            success: function (data) {
                var currentJob = new Job();
                var model = new Job(data);

                currentJob.set({
                    "id": model.attributes.id,
                    "title": model.attributes.title,
                    "instruction": model.attributes.instruction,
                    "service": model.attributes.service.id,
                    "service_name": model.attributes.service.title,
                    "status": model.attributes.status,
                    "createdBy": model.attributes.user.username,
                    "delivery_type_id": model.attributes.deliveryType.id,
                    "delivery_type_title": model.attributes.deliveryType.title,
                    "delivery_time_id": model.attributes.deliveryTime.id,
                    "delivery_time_price": model.attributes.deliveryTime.factor,
                    "delivery_time_title": model.attributes.deliveryTime.title,
                    "images": model.attributes.images,
                    "total": model.attributes.total,
                    "invoice": model.attributes.invoice
                });

                if (model.attributes.status != 'quote-request' && !_.isNull(model.attributes.complexity)) {
                    currentJob.set({
                        complexity_id: model.attributes.complexity.id,
                        complexity_price: model.attributes.complexity.price,
                        complexity_title: model.attributes.complexity.title
                    });
                }

                var add = [];
                _.each(model.attributes.addons, function (value) {
                    add.push({'addons_title': value.title, 'id': value.id, 'price': value.price});
                });

                currentJob.set({
                    add_ons: add
                });

                App.loader.fadeOut('fast');
                App.appendView('main', new OrderDetailView(currentJob));
            }

        });

        //App.appendView('main', new OrderDetailView(currentJob));
    },
    jobList: function () {

        if (!_.isNull(App.activeJob)) {
            if (!confirm('You are in the middle of an ordering process. Are you sure you want to skip it ?')) {
                return;
            }
            App.resetJob();
        }

        App.loader.show();

        var status = 'new';
        this.activeClass('orders');

        App.loadJobs(status);
        App.clearSection('progress');
        App.appendView('main', new HistoryView());
        App.loader.fadeOut('medium');

        if ($('.info').length > 0) {
            setTimeout(function () {
                $('.info').fadeOut().remove();
            }, 2000);
        }

    },
    archiveList: function () {
        App.loadJobs('archive');
        App.clearSection('progress');
        App.appendView('main', new ArchiveListView());
    },
    tour: function () {

    },
    support: function () {

        this.activeClass('support');

        App.loader.show();
        App.clearSection('progress');

        App.appendView('main', new SupportView());
        App.loader.fadeOut('fast');

    },
    account: function () {

        this.activeClass('account');

        App.loader.show();
        App.clearSection('progress');

        App.appendView('main', new AccountView());
        App.loader.fadeOut('fast');

    },
    logout: function () {

    },
    loadThreads: function (id) {

        var job_id = id;

        var job = App.allJobs.filter(function (model) {
            if (model.attributes.id == job_id) {
                return model;
            }
        });

        console.log(job);

        $.ajax({
            url: "/api/jobs/" + job_id + "/comments",
            dataType: 'json',
            async: false,
            success: function (data) {
                var threads = new ThreadCollection(data);
                App.clearSection('progress');
                App.appendView('main', new ThreadListView(threads, job_id, job[0]));
            }
        });

    },
    loadArchives: function () {

        $.ajax({
            url: "/api/jobs?archive=true",
            dataType: 'json',
            async: false,
            success: function (data) {
                App.allArchives = new JobCollection(data);
            }
        });

    },
    calculate: function (model) {

        var total = 0;

        if (!_.isUndefined(model.attributes.complexity_price)) {
            total = parseFloat(model.attributes.complexity_price);
        }

        _.each(model.attributes.add_ons, function (value) {
            total += parseFloat(value.price);
        });

        total = total * parseFloat(model.attributes.delivery_time_price) * model.attributes.images.length;

        return total;

    },
    activeClass: function (activeId) {

        $('.navigate').each(function (obj) {
            id = $(this).attr('id');
            $(this).removeClass(id + '_active');
        });

        $('#' + activeId).addClass(activeId + '_active');

    },
    register: function () {
//        
//         var option = {
//            'process': App.taskList,
//            'active' : 2,
//            'prev'   : '#uploadedimage',
//            'next'   : 'javascript:void(0)',
//            'success': 0,
//            'type'   : App.activeJob.get('type')
//        };
//
//        App.appendView('progress', new TaskProgressorView(option));
//        App.appendView('main', new ComplexityView());
//        App.loader.fadeOut('fast');
//
//        if (App.dirty) {
//            if (confirm('Your current progress will be lost. We will provide registration option at the end.\n\nStill want to continue?') == false) {
//                return;
//            }
//        }
//
//        window.location.href = '/register';
    }

});
var App = {
    appRouter: null,
    baseUrl: null,
    activeServices: null,
    activeJob: null,
    allJobs: null,
    paginatedJobs: null,
    allArchives: null,
    taskList: [],
    loader: $('#loader'),
    temp: false,
    dirty: false,
    initialize: function () {
        Dropzone.autoDiscover = false;
        $(window).scroll(function () {
            var buttonset = $('.bottom .buttonset');

            if (buttonset && $(window).height() > 640) {
                buttonset.css('bottom', ($(window).height() - 540) + 'px');
            }
        });
        this.imagesChosen = false;
        this.appRouter = new AppRouter();
        Backbone.history.start();
    },
    loadView: function (section, view) {
        $('section#' + section).html(view.$el);
    },
    clearSection: function (section) {
        $('section#' + section).empty();
    },
    appendView: function (section, view) {
        $('section#' + section).append(view.$el);
    },
    calculate: function (model) {

        var total = 0;

        if (!_.isUndefined(model.attributes.complexity_price)) {
            total = parseFloat(model.attributes.complexity_price);
        }

        if (!_.isUndefined(model.attributes.add_ons)) {
            _.each(model.attributes.add_ons, function (value) {
                total += parseFloat(value.price);
            });
        }

        if (!_.isUndefined(model.attributes.delivery_time_price)) {
            total = total * parseFloat(model.attributes.delivery_time_price);
        }

        App.activeServices.unitImage = (App.activeServices.unitImage == 0) ? 1 : App.activeServices.unitImage;
        total = total * parseFloat(model.attributes.images.length / App.activeServices.unitImage);

        return total;
    },
    getTaskList: function (task) {
        if (task == 'job') {
            this.taskList = ['Service Type', 'Upload Images', 'Complexity', 'Add-ons', 'Format', 'Schedule', 'Login', 'Summary'];
        } else {
            this.taskList = ['Service Type', 'Upload Images', 'Add-ons', 'Format', 'Schedule', 'Login', 'Summary'];
        }
    },
    loadJobs: function (status) {

        var URL;

        if (status == 'new') {
            URL = '/api/jobs';
        } else {
            URL = "/api/jobs/status/" + status;
        }

        $.ajax({
            url: URL,
            dataType: 'json',
            async: false,
            success: function (data) {
                if (status == 'archive') {
                    App.allArchives = new JobCollection(data);
                } else {
                    App.allJobs = new JobCollection(data);
                }
            }
        });
    },
    /* Remove the temporary job */
    resetJob: function () {

        App.activeJob = null;
        localStorage.setItem("activeJob", null);
        App.activeServices = null;

        $.ajax({
            url: '/api/job/tmp',
            dataType: 'json',
            type: 'DELETE'
        });

    },
    refreshJob: function () {
        if (!this.activeJob) {
            var oldInfo = localStorage.getItem('activeJob');
            if (oldInfo && JSON.parse(oldInfo)) {
                this.activeJob = new Job();
                this.activeJob.set(JSON.parse(oldInfo));
                if (this.activeJob) {
                    this.activeServices = _.find(services, function (service) {
                        return service.id == App.activeJob.get('service');
                    });
                    this.getTaskList(this.activeJob.get('type'));
                }
            }
        }
    },
    pagination: function (collectionToPaginate, perPage, page) {

        page = page - 1;

        var collection = collectionToPaginate;

        collection = _(collection.rest(perPage * page));
        collection = _(collection.first(perPage));

        return collection.map(function (model) {
            return model.toJSON();
        });

    },
    globalDateFormat: function (date_time) {
        return dateFormat(date_time, "mmmm dS, yyyy");
    },
    showSample: function (sampleImage, context) {
        $('#sample-img img').attr('src', sampleImage);
        $('#sample-img').fadeIn();
    },
    hideSample: function () {
        $('#sample-img').fadeOut();
    },
    isValidEmailAddress: function (emailAddress) {
        return /(.+)@(.+){2,}\.(.+){2,}/.test(emailAddress);
    },
    preLoadImages: function (images) {
        _.each(images, function (path) {
            $('<img />').attr('src', path).appendTo('body').css('display', 'none');
        });
    },
    dateDifference: function (cdate) {
        var today = new Date()
        var dateToCheck = new Date(cdate);
        var diff = today - dateToCheck; //unit is milliseconds
        diff = Math.round(diff / 1000 / 60 / 60);
        return diff * -1;
    },
    dueDateDifference: function (arrivalDate, dueDate) {
        var start = new Date(arrivalDate)
        var end = new Date(dueDate);
        var diff = end - start; //unit is milliseconds
        diff = Math.round(diff / 1000 / 60 / 60);
        return diff * -1;
    },
    formatNumber: function (toNumber) {
        return parseFloat(toNumber).toFixed(2)
    },
    changeDate: function (myDate, type) {

        var d_names = ["Sunday", "Monday", "Tuesday",
            "Wednesday", "Thursday", "Friday", "Saturday"];

        var m_names = ["January", "February", "March",
            "April", "May", "June", "July", "August", "September",
            "October", "November", "December"];

        var d = new Date(myDate);

        var curr_day = d.getDay();
        var curr_date = d.getDate();
        var curr_hour = d.getHours();

        var sup = "";
        var a_p = "";

        if (curr_date == 1 || curr_date == 21 || curr_date == 31) {
            sup = "st";
        } else if (curr_date == 2 || curr_date == 22) {
            sup = "nd";
        } else if (curr_date == 3 || curr_date == 23) {
            sup = "rd";
        } else {
            sup = "th";
        }

        var curr_month = d.getMonth();
        var curr_year = d.getFullYear();

        if (curr_hour < 12) {
            a_p = "AM";
        } else {
            a_p = "PM";
        }

        if (curr_hour == 0) {
            curr_hour = 12;
        }

        if (curr_hour > 12) {
            curr_hour = curr_hour - 12;
        }

        var curr_min = d.getMinutes();

        curr_min = curr_min + "";

        if (curr_min.length == 1) {
            curr_min = "0" + curr_min;
        }

        if (!_.isUndefined(type) && type == 'thread') {

            //April 30, Approximately 9 AM
            return m_names[curr_month] + ' ' + curr_date + ', Approximately ' + curr_hour + " " + a_p;
        }

        //13th 0f August 2012 at 2:50 am
        return curr_date + sup + ' Of ' + m_names[curr_month] + ' ' + curr_year + ' at ' + curr_hour + ":" + curr_min + " " + a_p;

    }

};
Templates = {};
Templates.Account = '<section class="container dashboard_back"><div class="dashboard_left account_details"><h2>Your Account</h2><div class="open_info"><div style="margin: 20px 0">The following information will be used to fill your <strong style="color: red">billing information</strong> during payment processing.</div><form action="#" class="credentials_form" id="basic"><ul class="change_account"><li><label for="full_name">Full Name :</label><input type="text" name="full_name" id="full_name" value="<%=fullname%>"></li><li><label for="email">Email :</label><input type="text" name="email" id="email" value="<%=user.email%>"></li><li><label for="phonenumber">Phone :</label><input type="text" name="phonenumber" id="phonenumber" value="<%=(!_.isNull(user.phonenumber))?user.phonenumber:\'\'%>"></li><li><label for="address1">Address1 :</label><input type="text" name="address1" id="address1" value="<%=(!_.isNull(user.address1))?user.address1:\'\'%>"></li><li><label for="address2">Address2 :</label><input type="text" name="address2" id="address2" value="<%=(!_.isNull(user.address2))?user.address2:\'\'%>"></li><li><label for="zip_code">Zip Code :</label><input type="text" name="zip_code" id="zip_code" value="<%=(!_.isNull(user.zip_code))?user.zip_code:\'\'%>"></li><li><label for="city">City :</label><input type="text" name="city" id="city" value="<%=(!_.isNull(user.city))?user.city:\'\'%>"></li><li><label for="state">State :</label><input type="text" name="state" id="state" value="<%=(!_.isNull(user.state))?user.state:\'\'%>"></li><li><label for="country">Country :</label><select id="country" name="country" autocomplete="on"><option value="">Choose Country</option><option value="AFG">Afghanistan</option><option value="ALB">Albania</option><option value="DZA">Algeria</option><option value="ASM">American Samoa</option><option value="AND">Andorra</option><option value="AGO">Angola</option><option value="AIA">Anguilla</option><option value="ATA">Antarctica</option><option value="ATG">Antigua and Barbuda</option><option value="ARG">Argentina</option><option value="ARM">Armenia</option><option value="ABW">Aruba</option><option value="AUS">Australia</option><option value="AUT">Austria</option><option value="AZE">Azerbaijan</option><option value="BHS">Bahamas</option><option value="BHR">Bahrain</option><option value="BGD">Bangladesh</option><option value="BRB">Barbados</option><option value="BLR">Belarus</option><option value="BEL">Belgium</option><option value="BLZ">Belize</option><option value="BEN">Benin</option><option value="BMU">Bermuda</option><option value="BTN">Bhutan</option><option value="BOL">Bolivia</option><option value="BIH">Bosnia and Herzegovina</option><option value="BWA">Botswana</option><option value="BVT">Bouvet Island</option><option value="BRA">Brazil</option><option value="IOT">British Indian Ocean Territory</option><option value="BRN">Brunei Darussalam</option><option value="BGR">Bulgaria</option><option value="BFA">Burkina Faso</option><option value="BDI">Burundi</option><option value="KHM">Cambodia</option><option value="CMR">Cameroon</option><option value="CAN">Canada</option><option value="CPV">Cape Verde</option><option value="CYM">Cayman Islands</option><option value="CAF">Central African Republic</option><option value="TCD">Chad</option><option value="CHL">Chile</option><option value="CHN">China</option><option value="CXR">Christmas Island</option><option value="CCK">Cocos (Keeling) Islands</option><option value="COL">Colombia</option><option value="COM">Comoros</option><option value="COG">Congo</option><option value="COD">Congo, the Democratic Republic of the</option><option value="COK">Cook Islands</option><option value="CRI">Costa Rica</option><option value="CIV">Cote D\'ivoire</option><option value="HRV">Croatia (Hrvatska)</option><option value="CUB">Cuba</option><option value="CYP">Cyprus</option><option value="CZE">Czech Republic</option><option value="DNK">Denmark</option><option value="DJI">Djibouti</option><option value="DMA">Dominica</option><option value="DOM">Dominican Republic</option><option value="ECU">Ecuador</option><option value="EGY">Egypt</option><option value="SLV">El Salvador</option><option value="GNQ">Equatorial Guinea</option><option value="ERI">Eritrea</option><option value="EST">Estonia</option><option value="ETH">Ethiopia</option><option value="FLK">Falkland Islands (Malvinas)</option><option value="FRO">Faroe Islands</option><option value="FJI">Fiji</option><option value="FIN">Finland</option><option value="FRA">France</option><option value="FXX">France, Metropolitan</option><option value="GUF">French Guiana</option><option value="PYF">French Polynesia</option><option value="ATF">French Southern Territories</option><option value="GAB">Gabon</option><option value="GMB">Gambia</option><option value="GEO">Georgia</option><option value="DEU">Germany</option><option value="GHA">Ghana</option><option value="GIB">Gibraltar</option><option value="GRC">Greece</option><option value="GRL">Greenland</option><option value="GRD">Grenada</option><option value="GLP">Guadeloupe</option><option value="GUM">Guam</option><option value="GTM">Guatemala</option><option value="GIN">Guinea</option><option value="GNB">Guinea-Bissau</option><option value="GUY">Guyana</option><option value="HTI">Haiti</option><option value="HMD">Heard Island and Mcdonald Islands</option><option value="HND">Honduras</option><option value="HKG">Hong Kong</option><option value="HUN">Hungary</option><option value="ISL">Iceland</option><option value="IND">India</option><option value="IDN">Indonesia</option><option value="IRN">Iran, Islamic Republic of</option><option value="IRQ">Iraq</option><option value="IRL">Ireland</option><option value="ISR">Israel</option><option value="ITA">Italy</option><option value="JAM">Jamaica</option><option value="JPN">Japan</option><option value="JOR">Jordan</option><option value="KAZ">Kazakhstan</option><option value="KEN">Kenya</option><option value="KIR">Kiribati</option><option value="PRK">Korea, Democratic People\'s Republic of</option><option value="KOR">Korea, Republic of</option><option value="KWT">Kuwait</option><option value="KGZ">Kyrgyzstan</option><option value="LAO">Lao People\'s Democratic Republic</option><option value="LVA">Latvia</option><option value="LBN">Lebanon</option><option value="LSO">Lesotho</option><option value="LBR">Liberia</option><option value="LBY">Libyan Arab Jamahiriya</option><option value="LIE">Liechtenstein</option><option value="LTU">Lithuania</option><option value="LUX">Luxembourg</option><option value="MAC">Macao</option><option value="MKD">Macedonia</option><option value="MDG">Madagascar</option><option value="MWI">Malawi</option><option value="MYS">Malaysia</option><option value="MDV">Maldives</option><option value="MLI">Mali</option><option value="MLT">Malta</option><option value="MHL">Marshall Islands</option><option value="MTQ">Martinique</option><option value="MRT">Mauritania</option><option value="MUS">Mauritius</option><option value="MYT">Mayotte</option><option value="MEX">Mexico</option><option value="FSM">Micronesia, Federated States of</option><option value="MDA">Moldova, Republic of</option><option value="MCO">Monaco</option><option value="MNG">Mongolia</option><option value="MNE">Montenegro</option><option value="MSR">Montserrat</option><option value="MAR">Morocco</option><option value="MOZ">Mozambique</option><option value="MMR">Myanmar</option><option value="NAM">Namibia</option><option value="NRU">Nauru</option><option value="NPL">Nepal</option><option value="NLD">Netherlands</option><option value="ANT">Netherlands Antilles</option><option value="NCL">New Caledonia</option><option value="NZL">New Zealand</option><option value="NIC">Nicaragua</option><option value="NER">Niger</option><option value="NGA">Nigeria</option><option value="NIU">Niue</option><option value="NFK">Norfolk Island</option><option value="MNP">Northern Mariana Islands</option><option value="NOR">Norway</option><option value="OMN">Oman</option><option value="PAK">Pakistan</option><option value="PLW">Palau</option><option value="PSE">Palestinian Territory, Occupied</option><option value="PAN">Panama</option><option value="PNG">Papua New Guinea</option><option value="PRY">Paraguay</option><option value="PER">Peru</option><option value="PHL">Philippines</option><option value="PCN">Pitcairn</option><option value="POL">Poland</option><option value="PRT">Portugal</option><option value="PRI">Puerto Rico</option><option value="QAT">Qatar</option><option value="REU">Reunion</option><option value="ROU">Romania</option><option value="RUS">Russian Federation</option><option value="RWA">Rwanda</option><option value="SHN">Saint Helena</option><option value="KNA">Saint Kitts and Nevis</option><option value="LCA">Saint Lucia</option><option value="SPM">Saint Pierre and Miquelon</option><option value="VCT">Saint Vincent and the Grenadines</option><option value="WSM">Samoa</option><option value="SMR">San Marino</option><option value="STP">Sao Tome and Principe</option><option value="SAU">Saudi Arabia</option><option value="SEN">Senegal</option><option value="SRB">Serbia</option><option value="SCG">Serbia and Montenegro</option><option value="SYC">Seychelles</option><option value="SLE">Sierra Leone</option><option value="SGP">Singapore</option><option value="SVK">Slovakia</option><option value="SVN">Slovenia</option><option value="SLB">Solomon Islands</option><option value="SOM">Somalia</option><option value="ZAF">South Africa</option><option value="SGS">South Georgia and the South Sandwich Islands</option><option value="ESP">Spain</option><option value="LKA">Sri Lanka</option><option value="SDN">Sudan</option><option value="SUR">Suriname</option><option value="SJM">Svalbard and Jan Mayen Islands</option><option value="SWZ">Swaziland</option><option value="SWE">Sweden</option><option value="CHE">Switzerland</option><option value="SYR">Syrian Arab Republic</option><option value="TWN">Taiwan</option><option value="TJK">Tajikistan</option><option value="TZA">Tanzania, United Republic of</option><option value="THA">Thailand</option><option value="TLS">Timor-Leste</option><option value="TGO">Togo</option><option value="TKL">Tokelau</option><option value="TON">Tonga</option><option value="TTO">Trinidad and Tobago</option><option value="TUN">Tunisia</option><option value="TUR">Turkey</option><option value="TKM">Turkmenistan</option><option value="TCA">Turks and Caicos Islands</option><option value="TUV">Tuvalu</option><option value="UGA">Uganda</option><option value="UKR">Ukraine</option><option value="ARE">United Arab Emirates</option><option value="GBR">United Kingdom</option><option value="USA">United States</option><option value="UMI">United States Minor Outlying Islands</option><option value="URY">Uruguay</option><option value="UZB">Uzbekistan</option><option value="VUT">Vanuatu</option><option value="VAT">Vatican City State (Holy See)</option><option value="VEN">Venezuela</option><option value="VNM">Viet Nam</option><option value="VGB">Virgin Islands, British</option><option value="VIR">Virgin Islands, U.S.</option><option value="WLF">Wallis and Futuna Islands</option><option value="ESH">Western Sahara</option><option value="YEM">Yemen</option><option value="YUG">Yugoslavia</option><option value="ZAR">Zaire</option><option value="ZMB">Zambia</option><option value="ZWE">Zimbabwe</option></select></li><li class="right_align"><span id="basic-saved-success" style="color: #008000;display: none">Saved Successfully</span>&nbsp;&nbsp;<a class="cpsbtn basic" id="update-basic" href="javascript:void(0);">Update</a></li></ul></form></div><span class="divider"></span><div class="closed_info"><h3>Change Password</h3><form action="#" class="credentials_form" id="pass"><ul class="change_account"><li><label for="password">Password :</label><input type="password" name="password" id="password"></li><li><label for="conf_password">Confirm :</label><input type="password" name="conf_password" id="conf_password"></li><li class="right_align"><span id="password-saved-success" style="color: #008000;display: none">Saved Successfully</span>&nbsp;&nbsp;<a class="cpsbtn basic" id="update-password" href="javascript:void(0);">Update</a></li></ul></form></div></div><div class="dashboard_right"><h2>Additional Email<i class="idea_ico"></i></h2><div style="margin: 20px 25px"><span class="separator"></span><p style="text-align: left; width: 350px">You can add additional email addresses in the box below to get job message board communication and job notification. Please separate email addresses by a comma.</p></div><div class="open_info"><form action="#" class="credentials_form"><ul class="change_email ae"><li><textarea name="alt_email" id="alt_email" style="width: 350px;height: 200px"><%=(!_.isNull(user.alternateemail))?user.alternateemail:\'\'%></textarea></li><li class="right_align"><span id="credential-saved-success" style="color: #008000;display: none">Successfully Saved</span>&nbsp;&nbsp;<a class="cpsbtn add-email" href="javascript:void(0);">Save</a></li></ul></form></div></div></section>';
Templates.AddOns = '<div class="clear"></div> <section class="container"> <aside class="complexity_info"> <img src="/bundles/Ingenclient/images/add-ons.png" alt="Drop your Iamges Here"/> <h3>Select Add-ons (optional)</h3> <span>We offer additional service for your images. <br />You can select multiple or leave it blank. It is Optional.</span> </aside> <aside class="complexity_selection m_top"> <% _.each(App.activeServices.addons, function(value, key) { %> <div class="selection_box cmplx" id=\'div-<%=value.id%>\'> <h3><%=value.title%></h3> <% var isExist = 0; if (!_.isUndefined(App.activeJob.attributes.add_ons)) { isExist = App.activeJob.attributes.add_ons.filter(function (addOns) { if (addOns.id == value.id) { return addOns; } }); } %> <span class="pricing">+$<%=value.price%> per image</span> <p class="potentional_info"> <%=(!_.isNull(value.description))? value.description : \'\'%> <a href="javascript:void(0)" class="sample-image" id="sample-<%=value.id%>">[sample]</a></p> <!--<%=value.details%>--> <input type="checkbox" id="<%=value.id%>" name="<%=value.price%>" class=\'add_ons_check\' <%= (isExist.length > 0 ) ? \'checked\':\'\' %> /> <label for="<%=value.id%>"><span></span></label> </div> <% });%> </aside> <br /> <section class="taskProgressor bottom"> <div class="buttonset"> <a class="button left" href="<%= prev %>" id="prev"> <span class="arrow">&laquo; </span> Prev </a> <a class="button right" href="<%= next %>" id="next"> Next <span class="arrow"> &raquo;</span> </a> </div> </section> </section><!--end container------------> ';
Templates.Complexity = '<div class="clear"></div> <section class="container"> <aside class="complexity_info"> <img src="bundles/Ingenclient/images/complexity.png" alt="Drop your Iamges Here"/> <h3>How complex are you images ? </h3> <span>Please select the appropriate level of image complexity.<br/> If you are unsure, please go through request for quotation process. </span> </aside> <aside class="complexity_selection m_top"> <% _.each(App.activeServices.complexities, function(value, key) { %> <div class="selection_box cmplx" id=\'div-<%=value.id%>\'> <h3> <%=value.title%> </h3> <span class="pricing">$<%=value.price%> per image</span> <p class="potentional_info"> <%=(!_.isNull(value.description))? value.description : \'\'%> <a href="javascript:void(0)" class="sample-image" id="sample-<%=value.id%>">[sample]</a></p> <!--<%=value.details%>--> <input type="radio" id="<%=value.id%>" value="<%=value.price%>" name="rr" class="complexity" <%= (App.activeJob.attributes.complexity_id == value.id) ? \'checked\':\'\' %>/> <label for="<%=value.id%>"><span></span></label> </div> <% }) %> </aside> <br /> <section class="taskProgressor bottom"> <div class="buttonset"> <a class="button left" href="<%= prev %>" id="prev"> <span class="arrow">&laquo; </span> Prev </a> <a class="button right" href="<%= next %>" id="next"> Next <span class="arrow"> &raquo;</span> </a> </div> </section> </section><!--end container------------> ';
Templates.Dashboard = '<section class="container dashboard_back"> <div class="dashboard_left"> <h1 class="go_away"><i class="go_icon"></i>Add your new order here.</h1> <div class="order_body dashboard_order"> <h2>My Order</h2> <table class="order_history"> <thead> <tr> <th>Order #</th> <th>Order Title</th> <th>Service</th> <th>Status</th> <th>Job Message </th> </tr> </thead> <tbody> <% if (!_.isNull(collection) && collection.length>0) { _.each(collection, function(model) { %> <tr> <td><%=model.attributes.id%></td> <td><a href="javascript:void(0);" class="jobdetails" id="detail-<%=model.attributes.id%>"><%= (!_.isNull(model.attributes.title))?model.attributes.title:\'\'%></a></td> <td><%= (!_.isNull(model.attributes.service.title))?model.attributes.service.title:\'\'%></td> <td> <span id="status-<%=model.attributes.id%>" class="<%=(!_.isNull(model.attributes.status) ) ? model.attributes.status:\'\'%>"> <% if(model.attributes.status==\'quote-request\'){%> <% if(model.attributes.total>0){%>reviewed<%}else{%>on review<%}%> <%}else{%> <%= model.attributes.status %> <%}%> </span> </td> <td> <a href="#thread/<%=model.attributes.id%>"><img src="/bundles/Ingenclient/images/order/<%=(model.attributes.comments.length>0)?\'jmb-received.png\':\'jmb.png\'%>" alt="Job Message board"/></a> </td> </tr> <% }); } %> </tbody> </table> </div> </div> <div class="dashboard_right"> <h2>Description of icon<i class="idea_ico"></i></h2> <ul class="icon_definition"> <li><span class="separator"></span><i class="orders_ready"></i> - Orders Ready to download</li> <li><span class="separator"></span><i class="orders_not_ready"></i> - Orders Not ready</li> <li><span class="separator"></span><i class="oa"></i> - Orders Archived, Can\'t download</li> <li><span class="separator"></span><i class="jd"></i> - Job(Order) discussion board</li> <li><span class="separator"></span><i class="rm"></i> - Received message</li> <li><span class="separator"></span><i class="pj"></i> - Paid job</li> <li><span class="separator"></span><i class="npj"></i> - Not paid, Click to go to payment page</li> <li><span class="separator"></span><i class="upi"></i> - Unpaid Invoice, Click to pay</li> <li><span class="separator"></span><i class="pir"></i> - Paid invoice ready to download</li> <li><span class="separator"></span><i class="dj"></i> - Delete Job</li> </ul> </div> </section> <!------------end container------------> ';
Templates.Format = '<div class="clear"></div> <section class="container"> <aside class="complexity_info"> <img src="/bundles/Ingenclient/images/format.png" alt="Format"/> <h3>Choose Delivery format </h3> <span>How would you like your processed images to be delivered ? <br />Select and let us know. </span> </aside> <aside class="complexity_selection m_top"> <% _.each(App.activeServices.deliveryTypes, function(value, key) { %> <div class="selection_box" id=\'div-<%=value.id%>\'> <h3><%=value.title%></h3> <p class="potentional_info"><%=(!_.isNull(value.description))? value.description : \'\'%></p> <input type="radio" id="<%=value.id%>" value="<%=value.title%>" name="rr" class=\'format\' <%= (App.activeJob.attributes.delivery_type_id == value.id) ? \'checked\':\'\' %>/> <label for="<%=value.id%>"><span></span></label> </div> <%});%> </aside> <br /> <section class="taskProgressor bottom"> <div class="buttonset"> <a class="button left" href="<%= prev %>" id="prev"> <span class="arrow">&laquo; </span> Prev </a> <a class="button right" href="<%= next %>" id="next"> Next <span class="arrow"> &raquo;</span> </a> </div> </section> </section><!--end container------------> ';
Templates.GuidedTour = '<style type="text/css"> .tour-video{ float: left; width: 550px; padding: 20px; } .tour-video h5{ padding: 10px; } .tour-video iframe{ width: 500px; height: 300px; } </style> <section class="container"> <% _.each(videos, function(video) { %> <div class="tour-video"> <h5><%= video.title %></h5> <% if(video.type == \'youtube\') { %> <iframe width="560" height="315" src="//www.youtube.com/embed/<%= video.id %>?rel=0" frameborder="0" allowfullscreen width="80%"></iframe> <% } else if(video.type == \'vimeo\') { %> <iframe src="//player.vimeo.com/video/<%= video.id %>" width="560" height="315" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <% } %> </div> <% }); %> </section>';
Templates.History = '<section class="container o_history"> <div class="order_area"> <% if (paymentStatus != \'\') { %> <div class="info"><%= paymentStatus %><% paymentStatus = \'\'; %></div> <% } %> <div class="order_header"> <h2>Order History</h2> <!--<form action="" class="search_order">--> <!--<input type="search" class="search" placeholder="Enter job ID..."/>--> <!--<input type="button" value="" class="search_submit searched"/>--> <!--</form>--> </div> <div class="order_body"> <div style="text-align: right; margin: 10px 0"> <form action="" method="get" class="filter-form"> <span>Job started: </span> <input type="text" size="12" value="<%= (_.isString(obj.from))? from : \'\' %>" class="datepicker" id="orders-from" placeholder="From"> <input type="text" size="12" value="<%= (_.isString(obj.to))? to : \'\' %>" class="datepicker" id="orders-to" placeholder="To"> <input type="button" value="Filter" id="filter-orders" class="cpsbtn"/> <% if (search_mode == 1){ %> <input type="button" value="Download" id="download-orders" class="cpsbtn" style="background-color: orange"/> <% } %> </form> </div> <table class="order_history"> <thead> <tr> <th>Job #</th> <th>Job Title</th> <th>Arrival Date</th> <th>Due after</th> <th>Service</th> <th>Amount</th> <th>Status</th> <th>Download</th> <th>Job Message</th> <th>Invoice</th> <th>Del.</th> </tr> </thead> <tbody> <% if(!_.isNull(collection) && collection.length>0) { _.each(collection.models, function(model) { %> <tr> <td><%= model.attributes.id %></td> <td> <a href="javascript:void(0);" class="jobdetails" id="detail-<%=model.attributes.id%>"><%= (!_.isNull(model.attributes.title)) ? model.attributes.title : \'\' %></a> </td> <td><%= model.attributes.timestamp %></td> <td> <%= (model.attributes.status != \'quote-request\') ? model.attributes.remainingTime : \'-\' %> </td> <td> <%= (!_.isNull(model.attributes.service.title)) ? model.attributes.service.title : \'\' %> </td> <!--<td><%= (!_.isNull(model.attributes.total) && model.attributes.status!=\'quote-request\')?\'$\'+model.attributes.total:\'N/A\'%></td>--> <td> <%= (model.attributes.total > 0) ? \'$\' + model.attributes.total : \'-\' %> </td> <td style="width: 120px;"> <span id="status-<%= model.attributes.id %>" class="<%= (!_.isNull(model.attributes.status)) ? ((model.attributes.status == \'quote-request\' && model.attributes.total > 0) ? \'quote-reviewed\' : model.attributes.status) : \'\' %>"> <% if (model.attributes.status == \'quote-request\') { %> <% if (model.attributes.total == 0){ %> on review <% } else { %> reviewed <% } %> <% } else { %> <%= model.attributes.status %> <% } %> </span> </td> <td> <% if (!_.isNull(model.attributes.status) && model.attributes.status == \'ready\') { %> <a class="active-download" href="javascript:void(0);" style="" data-id="<%=model.attributes.user.id %>" data-token="<%=model.attributes.token%>"> <img src="/bundles/Ingenclient/images/order/active-downlaod.png" alt="active-download"/> </a> <% } else { %> <img src="/bundles/Ingenclient/images/order/inactive-download.png" alt="inactive-download"/> <% } %> </td> <td> <a href="#thread/<%=model.attributes.id%>"><img src="/bundles/Ingenclient/images/order/<%=(model.attributes.comments.length>0)?\'jmb-received.png\':\'jmb.png\'%>" alt="Job Message board"/></a> </td> <% if (user.billingtype == \'normal\') { %> <% if (!_.isNull(model.attributes.status) && (model.attributes.invoice.paid == 0)) { %> <% if (model.attributes.status == "quote-request" && model.attributes.total > 0) { %> <td><a class="payment" href="javascript:void(0);" id="<%= model.attributes.invoice.id %>"><img src="/bundles/Ingenclient/images/order/nee-to-pay.png" alt="need to pay"/></a></td> <% } else { %> <td><img src="/bundles/Ingenclient/images/order/unpaid-invoice.png" alt="unpaid-invoice"/></td> <% } %> <% } else { %> <td><a class="invoice" data-job="<%= model.attributes.id %>" id="<%= (!_.isUndefined(model.attributes.invoice) && !_.isNull(model.attributes.invoice)) ? model.attributes.invoice.id : \'\' %>" href="javascript:void(0);"><img src="/bundles/Ingenclient/images/order/paid-invoice.png" alt="paid-invoice"/></a></td> <% } %> <% } else { %> <% if (!_.isNull(model.attributes.status) && _.isNull(model.attributes.invoice)) { %> <% if (model.attributes.status == \'quote-request\' && model.attributes.total > 0) { %> <td><a href="javascript:void(0)" class="approve-quote" data-id="<%= model.attributes.id %>">Approve</a></td> <% } else { %> <td><img src="/bundles/Ingenclient/images/order/unpaid-invoice.png" alt="unpaid-invoice"/></td> <% } %> <% } else { %> <td><a class="invoice" data-job="<%= model.attributes.id %>" id="<%= (!_.isUndefined(model.attributes.invoice) && !_.isNull(model.attributes.invoice)) ? model.attributes.invoice.id : \'\' %>" href="javascript:void(0);"><img src="/bundles/Ingenclient/images/order/paid-invoice.png" alt="paid-invoice"/></a></td> <% } %> <% } %> <td> <% if (!_.isNull(model.attributes.status) && (model.attributes.status !=\'archive\') && (model.attributes.status !=\'processing\')){%> <a class="archived" href="javascript:void(0);" id="delete-<%=model.attributes.id%>"><img is="delete-img" src="/bundles/Ingenclient/images/order/active-delete.png" alt="active-delete"/></a> <%}else{%> <img src="/bundles/Ingenclient/images/order/inactive-delete.png" alt="inactive-delete"/> <%}%> </td> </tr><!--end row 1--> <% })} %> </tbody> </table> </div> <% if (search_mode == 0){%> <div class="order_footer"> <span class="standing_order"> <%= ((pagination.currentPage - 1) * pagination.jobsPerPage) + 1 %> - <% fullPage = pagination.currentPage * pagination.jobsPerPage; %> <%= ((pagination.total > fullPage)? fullPage : pagination.total) %> of <%= pagination.total %> </span> <%if(pagination.total>pagination.jobsPerPage){%> <ul class="pagination"> <li><a href="javascript:void(0)" class="prev_p pagination" href="" id=\'1\'></a></li> <% for(i=1;i<=pagination.numberOfPage;i++){%> <%if(pagination.currentPage == i) { %> <li><a class="pagination" href="javascript:void(0)" id="<%=i%>"><%=i%></a></li> <%}else{%> <li><a class="pagination" href="javascript:void(0)" id="<%=i%>"><%=i%></a></li> <%}%> <% } %> <% if(pagination.currentPage == pagination.numberOfPage){%> <li><a class="next_p pagination" href="javascript:void(0)" id=\'<%= pagination.numberOfPage %>\'></a></li> <%}else{%> <li><a class="next_p pagination" href="javascript:void(0)" id=\'<%= pagination.currentPage+1%>\'></a></li> <%}%> </ul> <%}%> </div> <% } %> </div> <p id="no-report-date" style="display: none">You have to select <b>From</b> and <b>To</b> date to download Report</p> </section><!--end container------------>';
Templates.NewProject = '<div class="clear"></div> <section class="container"> <aside class="complexity_info"> <h3>Choose type of service</h3> <span>Please select the appropriate service type that match your requirement. <br />If you are unsure about the type of service please <a href="#support">contact us</a>.</span> </aside> <aside class="complexity_selection"> <% var i = 0; _.each(services, function(value, key) { %> <div class="selection_box" id=\'div-<%=i%>\' data-id="<%= value.id %>"> <img src="<%= value.webPath %>" alt="<%= value.title %>" /> <h3><%=value.title%></h3> <input type="radio" id="service-<%= value.id %>" name="rr" class="service_time" <%=(!_.isNull(App.activeServices) && App.activeServices.id==value.id)?\'checked\':\'\'%>/> <label for="<%=i%>"><span></span></label> </div> <% i++; }) %> </aside> <aside id="web-upload" style="width: 1110px"> <form action="/api/job/tmp/images" class="dropzone" id="drop-area"></form> <div id="flashUploader" style="display: none;"> <form action="" method="post"> <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="FileUploader" width="100%" height="300" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"> <param name="movie" value="/bundles/Ingenclient/efu/EFUMultipleUploader.swf" /> <param name="quality" value="high" /> <param name="bgcolor" value="#ffffff" /> <param name="allowScriptAccess" value="sameDomain" /> <param name="wmode" value="transparent" /> <embed src="/bundles/Ingenclient/efu/EFUMultipleUploader.swf" quality="high" bgcolor="#ffffff" width="100%" height="300" name="FileUploader" align="middle" play="true" loop="false" quality="high" allowScriptAccess="sameDomain" wmode="transparent" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer"> </embed> </object> <input type="button" value=" Upload " onClick="return efuDoSubmit(this);" name="btnUpload" /> </form> </div> <div class="dragNdrop" style="min-height: 57px; padding-left: 50px; text-align: left;">We support all major image format and there is no file size limit</div> </aside> <section class="taskProgressor bottom"> <div class="buttonset"> <a class="button right" href="<%= next %>" id="next"> Next <span class="arrow"> &raquo;</span> </a> <img src="/bundles/Ingenclient/images/loader.gif" id="uploading" style="display:none; margin-top: 13px" /> </div> </section> </section> <!--end container--> <div class="hidden" id="upload-complete" style="text-align: center"> <h4 style="text-align: center; color: dodgerblue; font-size: 20px">Files Uploaded!</h4> <br /> <p>Now you can proceed to <b>Next</b> step or <b><a href="#close" rel="modal:close">Upload more</a></b> files. </p> <br /> <p style="font-size: 12px; color: gray; text-align: left; border-top: 1px solid lightgray; padding-top: 6px"> <img src="/images/help.png" height="14" style="vertical-align: top"> <b>Hay!</b> you can choose or drag multiple files together :) </p> </div><!-- /.modal --> ';
Templates.OrderDetail = '<div class="clear"></div> <section class="container"> <div style="margin:35px 0 0 30px;text-align: left;" class="order_header"> <h2 style="float: none;"><%=model.get(\'title\')%></h2> <div id="order-info"> <span> <img src="/bundles/Ingenclient/images/service_type.png" alt="Service: " /> <b><%=model.get(\'service_name\') %></b> </span> <span> <img src="/bundles/Ingenclient/images/schedule.png" alt="Delivery time: "/> <%= model.get(\'delivery_time_title\') %> </span> <span> <img src="/bundles/Ingenclient/images/format.png" alt="Delivery type: "/> <%= model.get(\'delivery_type_title\') %> </span> <span> <% if (model.get(\'add_ons\').length) { %> <img src="/bundles/Ingenclient/images/add-ons.png" alt="Addons: "/> <%= _.collect(model.get(\'add_ons\'), function(addon){ return addon.addons_title; }).join(\', \') %> <% } %> </span> <p style="color: gray; text-align: left; padding: 10px 0; border-top: 1px solid #ccc; margin: 15px 0 5px;"><%= model.get(\'instruction\') %></p> </div> </div> <div class="clear"></div> <% if (model.get(\'status\') == \'quote-request\') { %> <div class="quotation-review <%= (model.get(\'total\') == 0) ? \'pending\' : \'\' %>"> <% if (model.get(\'total\') > 0) { %> <p>Your quotation has been reviwed by our staff. The quotation price has been determined as <strong>$<%= App.formatNumber(model.get(\'total\')) %></strong>. Individual image price is displayed below.</p> <% } else { %> <p>Your quotation is being reviwed by our staff. We will notify you once it has been reviewed.</p> <% } %> </div> <% if (model.get(\'total\') > 0) { %> <a class="button-quotation-approve">Approve</a> <a class="button-quotation-reject">Deny</a> <% } %> <% } %> <div class="clear"></div> <div class="image_container" style="width: 100%; margin: 10px 0 0 30px;"> <% var i =0; var count = model.attributes.images.length; _.each(model.attributes.images, function(image,key) { if (i % 5 == 0){ if (i == 0){ %> <div class="uploaded_img" style="margin-bottom: 0;"> <% } else { %> </div><div class="uploaded_img" style="margin-bottom: 0;"> <% } } %> <div class="image-row"> <span class="uploaded-preview" id="image-<%=key%>" style="width: 155px;"> <div style="height: 120px"> <img src="<%=image.path%>" alt="" style="margin-bottom: 5px"> </div> <% if (image.price > 0) { %> <h6 style="color: #000000"><%= \'$\' + App.formatNumber(image.price) %></h6> <% } %> <% if(image.instruction.length > 0) { %> <p onclick="$(this).hide()" style="text-align: left;"><%= image.instruction %></p> <a href="#ins" onclick="$(this).prev().toggle()">View Instructions</a> <% } else { %> <div style="color: #ccc;">No instruction</div> <% } %> </span> </div> <% i++; });%> <div class="clear"></div> </div> <br/> <section class="taskProgressor bottom"> <div class="buttonset" style="margin-left: 1040px;"> <a class="button right back" href="javascript:void(0);">back</a> </div> </section> </section><!--end container------------> ';
Templates.Schedule = '<div class="clear"></div> <section class="container"> <aside class="complexity_info"> <img src="/bundles/Ingenclient/images/schedule.png" alt="schedule"/> <h3>Pick a delivery time </h3> <span>How fast would you like us to deliver your processed images ?<br/> You can even have them back within an hour!</span> </aside> <aside class="complexity_selection m_top"> <% _.each(App.activeServices.deliveryTimes, function(value, key) { %> <div class="selection_box cmplx" id=\'div-<%=value.id%>\'> <h3><%=value.title%></h3> <span class="pricing"> <%=(!_.isNull(value.description))? value.description : \'\'%> </span> <p class="potentional_info"></p> <!--<span class="pricing"><%= (value.factor>0)? \'$\'+value.factor+\' per image\' : \'No Extra Cost\'%></span>--> <input type="radio" id="<%=value.id%>" value="<%= (value.factor>0)? value.factor : 0 %>" name="rr" class="schedule" <%= (App.activeJob.attributes.delivery_time_id == value.id) ? \'checked\':\'\' %>/> <label for="<%=value.id%>"><span></span></label> </div> <% }); %> </aside> <br /> <section class="taskProgressor bottom"> <div class="buttonset"> <a class="button left" href="<%= prev %>" id="prev"> <span class="arrow">&laquo; </span> Prev </a> <a class="button right" href="<%= next %>" id="next"> Next <span class="arrow"> &raquo;</span> </a> </div> </section> </section><!--end container------------> ';
Templates.Steps = ' <div class="next_prev"> <% if(prev!=\'\'){ %> <a href="<%=prev%>" class="prev" title="Next"></a> <% } if(next!=\'\'){ %> <a href="<%=next%>" class="next" title="Next"></a> <% } %> </div> ';
Templates.Summary = '<div class="clear"></div><section class="container summaryBk"><div class="summary"><div class="summaryHeader"><h2>Summary of your<%= (model.attributes.status != \'quote-request\') ? \'order\' : \'quotation\' %></h2><p>See the summary and check if everything is correct.<% if (model.attributes.status != \'quote-request\' && user.billingtype == \'normal\'){ %><br>You will be forwarded to our partner 2CO after you processed to checkout.<% } %></p></div><div class="tableContainer"><table class="summaryTable"><thead><tr><th colspan="2">Delivery Schedule: <span><%= model.attributes.delivery_time_title %></span></th><th colspan="2">Delivery Format: <span><%= model.attributes.delivery_type_title %></span></th></tr><tr><th colspan="4">Instruction: <span id="instruction"><%= model.attributes.instruction %></span></th></tr><tr><th>Service, Addons &amp; Time</th><th style="text-align: center">Images</th><th style="text-align: right">Unit Price</th><th style="text-align: right">Total Price</th></tr></thead><tbody><tr><td><strong><%= model.attributes.service_name %></strong></td><td style="text-align: center"><%= model.attributes.images.length %></td><td style="text-align: right"><% if (model.attributes.status != \'quote-request\'){ %>$<%= App.formatNumber(model.attributes.complexity_price) %><% } else { %>-<% } %></td><td style="text-align: right"><% if (model.attributes.status != \'quote-request\'){ %>$<%= App.formatNumber(model.attributes.images.length * parseFloat(model.attributes.complexity_price)) %><% } else { %>-<% } %></td></tr><% if (!_.isUndefined(model.attributes.add_ons) && model.attributes.add_ons.length>0){ %><% _.each(model.attributes.add_ons, function(value, key) { %><tr><td><%= value.addons_title %></td><td style="text-align: center"><%= model.attributes.images.length %></td><td style="text-align: right"><% if (model.attributes.status != \'quote-request\'){ %>$<%= App.formatNumber(value.price) %><% } else { %>-<% } %></td><td style="text-align: right"><% if (model.attributes.status != \'quote-request\'){ %>$<%= App.formatNumber(model.attributes.images.length * parseFloat(value.price)) %><% } else { %>-<% } %></td></tr><% }); %><% } %><tr><td colspan="3" style="text-align: left; font-weight: bold; color: darkorange">(+)<%= model.attributes.delivery_time_title %>(<%= model.attributes.delivery_time_desc %>)</td><td style="text-align: right"><% if (model.attributes.status != \'quote-request\'){ %>$<%= App.formatNumber(model.attributes.total - (model.attributes.total / parseFloat(model.attributes.delivery_time_price))) %><% } else { %>-<% } %></td></tr><% if (_.isUndefined(model.attributes.id) && model.attributes.status !=\'quote-request\') {%><tr id="coupon-row" style="display: none"><td colspan="3" style="color: red">(-) Discount</td><td id="discount" style="text-align: right"></td></tr><tr><td class="bold" colspan="3">Order Total</td><td id="discounted-total" class="bold" style="text-align: right"><% if (model.attributes.status != \'quote-request\'){ %>$<%= App.formatNumber(model.attributes.total) %><% } %></td></tr><tr><td colspan="4">Enter coupon code: <span id="coupon-error" style="color:red"></span> <img id="coupon-loader" src="/bundles/Ingenclient/images/ajax-loader.gif" style="display: none"> <input id="coupon-text" name="coupon-text" type="text" size="10"> <a href="javascript:void(0);" id="quopon-code">Apply</a></td></tr><% } %></tbody></table><% if (_.isUndefined(model.attributes.id) && model.attributes.status!=\'quote-request\') {%><% if (user.billingtype == \'normal\'){ %><img id="save-loader" src="/bundles/Ingenclient/images/ajax-loader.gif" style="float:left; margin-top:17px;margin-left:434px; display: none;margin-top: 10px"> <a href="javascript:void(0);" class="btn" id="save-job" style="margin-top: 10px">Proceed to Payment & Submit</a><% } else { %> <img id="save-loader" src="/bundles/Ingenclient/images/ajax-loader.gif" style="float:left; margin-top:17px;margin-left:650px; display: none;margin-top: 10px"> <a href="javascript:void(0);" class="btn" id="save-job" style="margin-top: 10px">Submit</a><% } %><% } else { %> <img id="save-loader" src="/bundles/Ingenclient/images/ajax-loader.gif" style="float:left; margin-top:17px;margin-left:650px; display: none;margin-top: 10px"> <a href="javascript:void(0);" class="btn" id="save-job" style="margin-top: 10px">Submit</a><% } %></div></div><section class="taskProgressor bottom"><div class="buttonset"><a class="button left" href="#schedule" id="prev"><span class="arrow">&laquo;</span>Prev</a></div></section></section><div class="open_info hidden" id="updateUserPopup"><h4 style="text-align: center; color: dodgerblue; font-size: 20px">Profile information</h4><div style="margin: 20px 0">The following information will be used to fill your <strong style="color: red">billing information</strong> during payment processing.</div><div><form action="#" class="credentials_form" id="basic"><ul class="change_account"><li><label for="full_name">Full Name :</label><input type="text" name="full_name" id="full_name" value="<%=user.firstname%>"></li><li><label for="email">Email :</label><input type="text" name="email" id="email" value="<%=user.email%>"></li><li><label for="phonenumber">Phone :</label><input type="text" name="phonenumber" id="phonenumber" value="<%=(!_.isNull(user.phonenumber))?user.phonenumber:\'\'%>"></li></ul><ul class="change_account"><li><label for="address1">Address1 :</label><input type="text" name="address1" id="address1" value="<%=(!_.isNull(user.address1))?user.address1:\'\'%>"></li><li><label for="address2">Address2 :</label><input type="text" name="address2" id="address2" value="<%=(!_.isNull(user.address2))?user.address2:\'\'%>"></li><li><label for="zip_code">Zip Code :</label><input type="text" name="zip_code" id="zip_code" value="<%=(!_.isNull(user.zip_code))?user.zip_code:\'\'%>"></li></ul><ul class="change_account"><li><label for="city">City :</label><input type="text" name="city" id="city" value="<%=(!_.isNull(user.city))?user.city:\'\'%>"></li><li><label for="state">State :</label><input type="text" name="state" id="state" value="<%=(!_.isNull(user.state))?user.state:\'\'%>"></li><li><label for="country">Country :</label><select id="country" name="country" autocomplete="on"><option value="">Choose Country</option><option value="AFG">Afghanistan</option><option value="ALB">Albania</option><option value="DZA">Algeria</option><option value="ASM">American Samoa</option><option value="AND">Andorra</option><option value="AGO">Angola</option><option value="AIA">Anguilla</option><option value="ATA">Antarctica</option><option value="ATG">Antigua and Barbuda</option><option value="ARG">Argentina</option><option value="ARM">Armenia</option><option value="ABW">Aruba</option><option value="AUS">Australia</option><option value="AUT">Austria</option><option value="AZE">Azerbaijan</option><option value="BHS">Bahamas</option><option value="BHR">Bahrain</option><option value="BGD">Bangladesh</option><option value="BRB">Barbados</option><option value="BLR">Belarus</option><option value="BEL">Belgium</option><option value="BLZ">Belize</option><option value="BEN">Benin</option><option value="BMU">Bermuda</option><option value="BTN">Bhutan</option><option value="BOL">Bolivia</option><option value="BIH">Bosnia and Herzegovina</option><option value="BWA">Botswana</option><option value="BVT">Bouvet Island</option><option value="BRA">Brazil</option><option value="IOT">British Indian Ocean Territory</option><option value="BRN">Brunei Darussalam</option><option value="BGR">Bulgaria</option><option value="BFA">Burkina Faso</option><option value="BDI">Burundi</option><option value="KHM">Cambodia</option><option value="CMR">Cameroon</option><option value="CAN">Canada</option><option value="CPV">Cape Verde</option><option value="CYM">Cayman Islands</option><option value="CAF">Central African Republic</option><option value="TCD">Chad</option><option value="CHL">Chile</option><option value="CHN">China</option><option value="CXR">Christmas Island</option><option value="CCK">Cocos (Keeling) Islands</option><option value="COL">Colombia</option><option value="COM">Comoros</option><option value="COG">Congo</option><option value="COD">Congo, the Democratic Republic of the</option><option value="COK">Cook Islands</option><option value="CRI">Costa Rica</option><option value="CIV">Cote D\'ivoire</option><option value="HRV">Croatia (Hrvatska)</option><option value="CUB">Cuba</option><option value="CYP">Cyprus</option><option value="CZE">Czech Republic</option><option value="DNK">Denmark</option><option value="DJI">Djibouti</option><option value="DMA">Dominica</option><option value="DOM">Dominican Republic</option><option value="ECU">Ecuador</option><option value="EGY">Egypt</option><option value="SLV">El Salvador</option><option value="GNQ">Equatorial Guinea</option><option value="ERI">Eritrea</option><option value="EST">Estonia</option><option value="ETH">Ethiopia</option><option value="FLK">Falkland Islands (Malvinas)</option><option value="FRO">Faroe Islands</option><option value="FJI">Fiji</option><option value="FIN">Finland</option><option value="FRA">France</option><option value="FXX">France, Metropolitan</option><option value="GUF">French Guiana</option><option value="PYF">French Polynesia</option><option value="ATF">French Southern Territories</option><option value="GAB">Gabon</option><option value="GMB">Gambia</option><option value="GEO">Georgia</option><option value="DEU">Germany</option><option value="GHA">Ghana</option><option value="GIB">Gibraltar</option><option value="GRC">Greece</option><option value="GRL">Greenland</option><option value="GRD">Grenada</option><option value="GLP">Guadeloupe</option><option value="GUM">Guam</option><option value="GTM">Guatemala</option><option value="GIN">Guinea</option><option value="GNB">Guinea-Bissau</option><option value="GUY">Guyana</option><option value="HTI">Haiti</option><option value="HMD">Heard Island and Mcdonald Islands</option><option value="HND">Honduras</option><option value="HKG">Hong Kong</option><option value="HUN">Hungary</option><option value="ISL">Iceland</option><option value="IND">India</option><option value="IDN">Indonesia</option><option value="IRN">Iran, Islamic Republic of</option><option value="IRQ">Iraq</option><option value="IRL">Ireland</option><option value="ISR">Israel</option><option value="ITA">Italy</option><option value="JAM">Jamaica</option><option value="JPN">Japan</option><option value="JOR">Jordan</option><option value="KAZ">Kazakhstan</option><option value="KEN">Kenya</option><option value="KIR">Kiribati</option><option value="PRK">Korea, Democratic People\'s Republic of</option><option value="KOR">Korea, Republic of</option><option value="KWT">Kuwait</option><option value="KGZ">Kyrgyzstan</option><option value="LAO">Lao People\'s Democratic Republic</option><option value="LVA">Latvia</option><option value="LBN">Lebanon</option><option value="LSO">Lesotho</option><option value="LBR">Liberia</option><option value="LBY">Libyan Arab Jamahiriya</option><option value="LIE">Liechtenstein</option><option value="LTU">Lithuania</option><option value="LUX">Luxembourg</option><option value="MAC">Macao</option><option value="MKD">Macedonia</option><option value="MDG">Madagascar</option><option value="MWI">Malawi</option><option value="MYS">Malaysia</option><option value="MDV">Maldives</option><option value="MLI">Mali</option><option value="MLT">Malta</option><option value="MHL">Marshall Islands</option><option value="MTQ">Martinique</option><option value="MRT">Mauritania</option><option value="MUS">Mauritius</option><option value="MYT">Mayotte</option><option value="MEX">Mexico</option><option value="FSM">Micronesia, Federated States of</option><option value="MDA">Moldova, Republic of</option><option value="MCO">Monaco</option><option value="MNG">Mongolia</option><option value="MNE">Montenegro</option><option value="MSR">Montserrat</option><option value="MAR">Morocco</option><option value="MOZ">Mozambique</option><option value="MMR">Myanmar</option><option value="NAM">Namibia</option><option value="NRU">Nauru</option><option value="NPL">Nepal</option><option value="NLD">Netherlands</option><option value="ANT">Netherlands Antilles</option><option value="NCL">New Caledonia</option><option value="NZL">New Zealand</option><option value="NIC">Nicaragua</option><option value="NER">Niger</option><option value="NGA">Nigeria</option><option value="NIU">Niue</option><option value="NFK">Norfolk Island</option><option value="MNP">Northern Mariana Islands</option><option value="NOR">Norway</option><option value="OMN">Oman</option><option value="PAK">Pakistan</option><option value="PLW">Palau</option><option value="PSE">Palestinian Territory, Occupied</option><option value="PAN">Panama</option><option value="PNG">Papua New Guinea</option><option value="PRY">Paraguay</option><option value="PER">Peru</option><option value="PHL">Philippines</option><option value="PCN">Pitcairn</option><option value="POL">Poland</option><option value="PRT">Portugal</option><option value="PRI">Puerto Rico</option><option value="QAT">Qatar</option><option value="REU">Reunion</option><option value="ROU">Romania</option><option value="RUS">Russian Federation</option><option value="RWA">Rwanda</option><option value="SHN">Saint Helena</option><option value="KNA">Saint Kitts and Nevis</option><option value="LCA">Saint Lucia</option><option value="SPM">Saint Pierre and Miquelon</option><option value="VCT">Saint Vincent and the Grenadines</option><option value="WSM">Samoa</option><option value="SMR">San Marino</option><option value="STP">Sao Tome and Principe</option><option value="SAU">Saudi Arabia</option><option value="SEN">Senegal</option><option value="SRB">Serbia</option><option value="SCG">Serbia and Montenegro</option><option value="SYC">Seychelles</option><option value="SLE">Sierra Leone</option><option value="SGP">Singapore</option><option value="SVK">Slovakia</option><option value="SVN">Slovenia</option><option value="SLB">Solomon Islands</option><option value="SOM">Somalia</option><option value="ZAF">South Africa</option><option value="SGS">South Georgia and the South Sandwich Islands</option><option value="ESP">Spain</option><option value="LKA">Sri Lanka</option><option value="SDN">Sudan</option><option value="SUR">Suriname</option><option value="SJM">Svalbard and Jan Mayen Islands</option><option value="SWZ">Swaziland</option><option value="SWE">Sweden</option><option value="CHE">Switzerland</option><option value="SYR">Syrian Arab Republic</option><option value="TWN">Taiwan</option><option value="TJK">Tajikistan</option><option value="TZA">Tanzania, United Republic of</option><option value="THA">Thailand</option><option value="TLS">Timor-Leste</option><option value="TGO">Togo</option><option value="TKL">Tokelau</option><option value="TON">Tonga</option><option value="TTO">Trinidad and Tobago</option><option value="TUN">Tunisia</option><option value="TUR">Turkey</option><option value="TKM">Turkmenistan</option><option value="TCA">Turks and Caicos Islands</option><option value="TUV">Tuvalu</option><option value="UGA">Uganda</option><option value="UKR">Ukraine</option><option value="ARE">United Arab Emirates</option><option value="GBR">United Kingdom</option><option value="USA">United States</option><option value="UMI">United States Minor Outlying Islands</option><option value="URY">Uruguay</option><option value="UZB">Uzbekistan</option><option value="VUT">Vanuatu</option><option value="VAT">Vatican City State (Holy See)</option><option value="VEN">Venezuela</option><option value="VNM">Viet Nam</option><option value="VGB">Virgin Islands, British</option><option value="VIR">Virgin Islands, U.S.</option><option value="WLF">Wallis and Futuna Islands</option><option value="ESH">Western Sahara</option><option value="YEM">Yemen</option><option value="YUG">Yugoslavia</option><option value="ZAR">Zaire</option><option value="ZMB">Zambia</option><option value="ZWE">Zimbabwe</option></select></li></ul><div class="right_align"><span id="basic-saved-success" style="color: #008000;display: none">Saved Successfully</span>&nbsp;&nbsp;<a class="cpsbtn basic" id="update-basic" href="javascript:void(0);">Update</a></div></form></div>';
Templates.Support = '<section class="container support"> <h3>Need help or have a request, comment or suggestion?</h3> <p class="t_txt">There are three ways you can contact our customer service. Our specialists are available 24/7 to answer your questions. </p> <span class="chat"> <h2>Question? Suggestion?</h2> <form action="#" class="credentials_form"> <ul class="qfs"> <li><input type="text" placeholder="Client Name" name="name" id="name" value="<%=fullname%>"/></li> <li><input type="text" placeholder="Client Email" name="email" id="email" value=""/></li> <li><input type="text" placeholder="Subject" name="subject" id="subject"/></li> <li><textarea cols="5" rows="5" placeholder="Description" id="description"></textarea></li> <li><a class="cpsbtn" href="javascript:void(0);">Send</a></li> <li class="left_align"> <span id=\'support-saved-success\' style="color: #008000;display: none;">Successfully Sent</span>&nbsp;&nbsp; </li> </ul> </form> <span class="v_separator_2"></span> </span> <span class="chat"> <img src="bundles/Ingenclient/images/email.jpg" alt=""/> <h2>Email</h2> <p>If you prefer email, send a message to <a href="mailto:production@clippingpathservice.com">production@clippingpathservice.com</a>. Please allow up to 24 hours for our support representative to get back to you. But we are usually quicker. </p> <span class="v_separator_2"></span> </span> <span class="chat"> <img src="bundles/Ingenclient/images/call.jpg" alt=""/> <h2>Call</h2> <p>Reach us at <span class="bold">+1(88)-281-4002</span>. Standard calling rates apply. Or call us for free with Skype. Call <a href="mailto:production@clippingpathservice.com">production@clippingpathservice.com</a>. Our phone support is in English. </p> </span> </section><!--end container------------> ';
Templates.TaskProgress = '<section class="taskProgressor"> <div class="job_progress"> <span class="base_line"> <% if(success == 0) {%> <%if(type == \'job\') {%> <span class="stepping first"></span> <span class="<%=(active>=1)? \'stepping\' : \'pointer\' %> second"></span><%=(active>=1)? \'<span class="so_far complexity"></span>\':\'\'%> <span class="<%=(active>=2)? \'stepping\' : \'pointer\' %> third"></span><%=(active>=2)? \'<span class="so_far service_type"></span>\':\'\'%> <span class="<%=(active>=3)? \'stepping\' : \'pointer\' %> fourth"></span><%=(active>=3)? \'<span class="so_far add_ons"></span>\':\'\'%> <span class="<%=(active>=4)? \'stepping\' : \'pointer\' %> fifth"></span><%=(active>=4)? \'<span class="so_far format"></span>\':\'\'%> <span class="<%=(active>=5)? \'stepping\' : \'pointer\' %> sixth"></span><%=(active>=5)? \'<span class="so_far schedule"></span>\':\'\'%> <span class="pointer last"></span> <%} else {%> <span class="stepping first"></span> <span class="<%=(active>=1)? \'stepping\' : \'pointer\' %> second"></span><%=(active>=1)? \'<span class="so_far complexity"></span>\':\'\'%> <span class="<%=(active>=2)? \'stepping\' : \'pointer\' %> third"></span><%=(active>=2)? \'<span class="so_far service_type"></span>\':\'\'%> <span class="<%=(active>=3)? \'stepping\' : \'pointer\' %> fourth"></span><%=(active>=3)? \'<span class="so_far add_ons"></span>\':\'\'%> <span class="<%=(active>=4)? \'stepping\' : \'pointer\' %> fifth"></span><%=(active>=4)? \'<span class="so_far format"></span>\':\'\'%> <!--<span class="pointer sixth"></span><%=(active>=5)? \'<span class="so_far schedule"></span>\':\'\'%>--> <span class="pointer sixth"></span> <% } %> <%} else {%> <%if(type == \'job\') {%> <span class="finishing_success first"></span> <span class="success summary1"></span> <span class="finishing_success second"></span><span class="success summary2"></span> <span class="finishing_success third"></span><span class="success summary3"></span> <span class="finishing_success fourth"></span><span class="success summary4"></span> <span class="finishing_success fifth"></span><span class="success summary5"></span> <span class="finishing_success sixth"></span><span class="success summary6"></span> <span class="finishing_success last"></span> <% }else{ %> <span class="finishing_success first"></span> <span class="success summary1"></span> <span class="finishing_success second"></span><span class="success summary2"></span> <span class="finishing_success third"></span><span class="success summary3"></span> <span class="finishing_success fourth"></span><span class="success summary4"></span> <span class="finishing_success fifth"></span><span class="success summary5"></span> <span class="finishing_success sixth"></span> <% } %> <% } %> </span> <ul class="condition"> <% _.each(process, function(value, key) { %> <li <%=(key==active)? \'class=active\':\'\'%> ><%=value%></li> <% }); %> </ul> </div> <div class="next_prev"> <% if(prev!=\'\'){ %> <!--<a href="<%=prev%>" class="prev" title="Next"></a>--> <% } if(next!=\'\'){ %> <!--<a href="<%=next%>" class="next" title="Next"></a>--> <% } %> </div> </section><!--end progress bar-----------> ';
Templates.ThreadList = '<section class="container"> <div style="margin:35px 0 0 30px;text-align: left;" class="order_header"> <h2 style="float: none;"><%= job.get(\'title\') %></h2> <div id="order-info"> <span> <img src="/bundles/Ingenclient/images/service_type.png" alt="Service: " /> <b><%= job.get(\'service\').title %></b> </span> <span> <img src="/bundles/Ingenclient/images/schedule.png" alt="Delivery time: "/> <%= job.get(\'deliveryTime\').title %> </span> <span> <img src="/bundles/Ingenclient/images/format.png" alt="Delivery type: "/> <%= job.get(\'deliveryType\').title %> </span> <span> <% if (job.get(\'addons\').length) { %> <img src="/bundles/Ingenclient/images/add-ons.png" alt="Addons: "/> <%= _.collect(job.get(\'addons\'), function(addon){ return addon.title; }).join(\', \') %> <% } %> </span> <p style="color: gray; text-align: left; padding: 10px 0; border-top: 1px solid #ccc; margin: 15px 0 5px;"><%= job.get(\'instruction\') %></p> </div> </div> <div class="clear"></div> <div class="jmb_reply_area"> <% if (collection.length > 0) { _.each(collection.models, function(model) { %> <div class="<%= (model.attributes.user.email!=user.email) ? \'manager_said\' : \'u_said\' %>"> <span class="bold"><%= (model.attributes.user.email != user.email) ? \'Manager Replied\' : \'You Said \'%> </span> <em>on <%= App.changeDate(model.attributes.created.replace(\' \',\'T\')) %></em> <% if(!_.isEmpty(model.attributes.attachment)) { %> <a style="float: right" href="<%= model.attributes.attachment %>" target="_blank">Open attachment</a> <% } %> <br /><br /> <p><%= (!_.isEmpty(model.attributes.content)) ? model.attributes.content : \'\' %></p> </div> <% }) } else { %> <div style="text-align: left;">No message has been communicated for this job yet.</div> <% } %> <div class="comment_form"> <h4>Post a message:</h4> <form class="credentials_form" action="#" enctype="multipart/form-data" style="float: left"> <ul class="reply_form"> <li><textarea placeholder="Notes" id="comment-text" rows="5" cols="5"></textarea></li> <!--<li> <input type="file" name="" multiple> <p>If you are having trouble uploading.<a href="#">try this instead</a></p> </li>--> <li> <input type="hidden" name="attachment_name" id="attachment_name"> <input type="button" id="comment_submit" value="Send Message" class="cpsbtn" name="comment_submit" > <input type="button" id="attachment_uploader" value="Uploading file..." class="cpsbtn" style="font-style: italic; background-color: gray; display: none;" > </li> </ul> </form> <div id="attachment"> <span id="attach-msg">Attach a file<br/> <small style="font-size: 12px; color: gray">Maximum size: 5mb</small> </span> </div> <div class="clear"></div> </div> </div> </section><!--end container------------> ';
Templates.UploadedImage = '<div class="clear"></div> <section class="container"> <aside class="left_sidebar"> <form class="order_form" action=""> <label>Order Name<span style="color:red;">*</span></label> <input type="text" placeholder="Enter a title of the order" id="order_name" class="order_name" name="order_name" value="<%= (!_.isUndefined(App.activeJob.attributes.title)) ? App.activeJob.attributes.title : \'\' %>"> <label>Order Instruction<span style="color:red;">*</span></label> <textarea placeholder="Write your general instruction for this order" id="instruction" rows="4" cols="30"><%= (!_.isUndefined(App.activeJob.attributes.instruction)) ? App.activeJob.attributes.instruction : \'\' %></textarea> </form> </aside> <aside class="image_container"> <% if (App.activeJob.attributes.images.length > 0) { %> <div class="uploaded-image-instruction">You can also add instruction for each individual image by clicking on the <img src="/bundles/Ingenclient/images/edit.png" alt="" /> icon.</div> <% var i = 0; _.each(App.activeJob.attributes.images, function(image,key) { if (i % 4 == 0) { if (i == 0){ %> <div class="uploaded_img"> <% } else { %> </div> <div class="uploaded_img"> <% } } %> <span class="uploaded-preview spanss" id="image-<%=key%>"> <h6><%= (image.name.length > 20) ? image.name.substr(0, 17) + \'&hellip;\' : image.name %></h6> <img src="<%=image.thumb%>" alt=""> <ul class="customize_file"> <li class="saved"><%=(!_.isUndefined(App.activeJob.attributes.images[key].instruction) && App.activeJob.attributes.images[key].instruction.trim()!=\'\') ? \'instructed\': \'\' %></li> <li> <a href="javascript:void(0);" id="edit-<%=key%>" class="edit-instruction" title="edit" > <img src="/bundles/Ingenclient/images/edit.png" alt="edit" title="Add instruction"></a> </li> <li> <a href="javascript:void(0);" id="close-<%=key%>" class="close-instruction" title="delete"> <img src="/bundles/Ingenclient/images/delete.png" alt="delete" title="Remove image"></a> </li> </ul> <div id="instruction-modal-<%=key%>" style="display: none;" > <div class="image-instruction"> <h3>Image instructions</h3> <textarea id="instruction-<%=key%>" rows="4" cols="30"><%=(!_.isUndefined(App.activeJob.attributes.images[key].instruction) && App.activeJob.attributes.images[key].instruction.trim()!=\'\') ? App.activeJob.attributes.images[key].instruction : \'\' %></textarea> <input type="button" id="save-<%=key%>" class="save-instruction" style="width:70px;" name="order_submit" value="Add Instruction"> <input type="button" id="cancel-<%=key%>" class="cancel-instruction" style="width:70px;" name="order_submit" value="Cancel"> </div> </div> </span> <% i++; }); %> </div> <%} else { %> <p class="alert">Sorry, No images was uploaded! Please <a href="<%=option.prev%>">go back</a> and try again.</p> <% } %> </aside> <br /> <section class="taskProgressor bottom"> <div class="buttonset"> <a class="button left" href="<%=option.prev%>" id="prev"> <span class="arrow">&laquo; </span> Prev </a> <a class="button right" id="cpsbtn"> Next <span class="arrow"> &raquo;</span> </a> </div> </section> </section><!--end container------------> ';
Templates.UploadImage = '<div class="clear" xmlns="http://www.w3.org/1999/html"></div> <section class="container"> <aside id="web-upload" style="width: 1110px"> <form action="/api/job/tmp/images" class="dropzone" id="drop-area"></form> <div id="flashUploader" style="display: none;"> <form action="" method="post"> <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="FileUploader" width="100%" height="300" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"> <param name="movie" value="/bundles/Ingenclient/efu/EFUMultipleUploader.swf" /> <param name="quality" value="high" /> <param name="bgcolor" value="#ffffff" /> <param name="allowScriptAccess" value="sameDomain" /> <param name="wmode" value="transparent" /> <embed src="/bundles/Ingenclient/efu/EFUMultipleUploader.swf" quality="high" bgcolor="#ffffff" width="100%" height="300" name="FileUploader" align="middle" play="true" loop="false" quality="high" allowScriptAccess="sameDomain" wmode="transparent" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer"> </embed> </object> <input type="button" value=" Upload " onClick="return efuDoSubmit(this);" name="btnUpload" /> </form> </div> <div class="dragNdrop" style="min-height: 57px; padding-left: 50px; text-align: left;">We support all major image format and there is no file size limit</div> </aside> <section class="taskProgressor bottom"> <div class="buttonset"> <a class="button left" href="<%= prev %>" id="prev"> <span class="arrow">&laquo; </span>Prev </a> <a class="button right" href="<%= next %>" id="next"> Next <span class="arrow"> &raquo;</span> </a> <img src="/bundles/Ingenclient/images/loader.gif" id="uploading" style="display:none; margin-top: 13px" /> </div> </section> </section> <div class="hidden" id="upload-complete" style="text-align: center"> <h4 style="text-align: center; color: dodgerblue; font-size: 20px">Files Uploaded!</h4> <br /><p>Now you can proceed to <b><a href="<%= next %>">Next</a></b> step or <b><a href="#close" rel="modal:close">Upload more</a></b> files. </p> <br /> <p style="font-size: 12px; color: gray; text-align: left; border-top: 1px solid lightgray; padding-top: 6px"> <img src="/images/help.png" height="14" style="vertical-align: top"> <b>Hay!</b> you can choose or drag multiple files together :) </p> </div><!-- /.modal -->';
Templates.Login ='<div class="clear"></div><section class="container"><aside class="login_info"><h3>Order summary page</h3><span>To view <b>order summary</b> and submit your uploaded images .<br>please login with your <b>old account</b> or <b>create new account</b></span></aside><aside class="user_selection m_top"><div class="registration_form order_login_forms"><form id="registrationOrderForm" method="POST" class="credentials_form register-form"><h1><span>Create new account here</span></h1><ul><li><input id="newAccountUsername" required="required" type="text" placeholder="Enter your username" name="metrodesk_user_registration[username]"></li><li><input id="newAccountEmail" required="required" type="email" placeholder="Enter your email" name="metrodesk_user_registration[email]"></li><li><input id="newAccountPass" required="required" type="password" placeholder="Enter your password" name="metrodesk_user_registration[plainPassword][first]"></li><li><input id="newAccountPassRepeat" required="required" type="password" placeholder="Repeat your password" name="metrodesk_user_registration[plainPassword][second]"></li><li><input id="newAccountFirstname" required="required" type="text" placeholder="Enter your full name" name="metrodesk_user_registration[firstName]"></li><li><input id="newAccountPhoneNo" required="required" type="text" placeholder="Enter your phone number" name="metrodesk_user_registration[phoneNo]"></li><li><input type="checkbox" name="metrodesk_user_registration[terms]" id="terms"><label for="terms"><span>I agree with <a href="/pages/terms-and-conditions" target="_blank">Terms and Condition</a></span></label></li><li class="form_buttons"><input id="submit_register" type="submit" class="cpsbtn register" value="Create New Account" style="width: 200px"></li></ul></form></div><div class="login_form order_login_forms"><form method="post" id="loginOrderForm" class="credentials_form login-form"><h1><span>Login here</span></h1><ul><li><% _.each(socialNetworks, function(value, key) { %><%=value%><%});%></li><li><div class="login-divider"><img src="/images/or-divider.png"><br><br></div></li><li><input type="text" id="username" name="_username" required="required" placeholder="Enter your username"></li><li><input type="password" id="password" name="_password" required="required" placeholder="Enter your password"><p>Forgot? Please <a href="<%=resetPassUrl%>">reset your password</a></p></li><li class="form_buttons"><div class="remember"><input type="checkbox" id="remember_me" name="_remember_me" value="on"><label for="remember_me"><span>Remember me</span></label></div><div class="login-button"><input type="submit" id="submit_login" name="_submit" value="Login" class="cpsbtn" style="width: 100px"></div></li></ul></form></div></aside><br><section class="taskProgressor bottom"><div class="buttonset"><a class="button left" href="<%= prev %>" id="prev"><span class="arrow">&laquo;</span> Prev</a></div></section></section>';
var AccountView = Backbone.View.extend({
    currentUser: null,
    initialize: function () {

        this.currentUser = new User(user);
        var self = this;

        self.render();
        this.eventBind();

        $('#credential-saved-success').hide();
        $('#basic-saved-success').hide();
    },
    render: function () {
        $(this.el).html(_.template(Templates.Account, {'fullname': this.currentUser.attributes.firstname + ' ' + this.currentUser.attributes.lastname}));
        $('#main').html(this.el);
        $('.dashboard_right').css('height', $('.dashboard_back').height());
        return this;
    },
    postRender: function () {

        var self = this;

        $(this.el).find('.change_account li span').editable(function (value, settings) {
            return (value);
        }, {
            onblur: function (value) {
                var modelID = $(this).attr('id');
                self.currentUser.attributes[modelID] = value;
                $(this).html(value); // this correctly refers to the jQuery element $('#name')
                return (value);
            }

        });

        $('.edit').tooltipster({
            trigger: 'click',
            animation: 'fade',
            position: 'top'
        });

    },
    eventBind: function () {

        var self = this;

        if (!_.isNull(self.currentUser.attributes.country)) {
            $('#country option[value="' + self.currentUser.attributes.country + '"]').attr('selected', 'selected');
        }

        $('#email').on('keyup', function () {
            if (!App.isValidEmailAddress($('#email').val())) {
                $('#email').focus();
                $('#email').css('border', '2px solid red');
            } else {
                $('#email').css('border', '1px solid #CCC');
            }
        });

        $('#fullname').on('keyup', function () {
            if ($('#full_name').val().trim() == '') {
                $('#full_name').focus();
                $('#full_name').css('border', '2px solid red');
            } else {
                $('#fullname').css('border', '1px solid #CCC');
            }
        });

        $('#phonenumber').on('keyup', function () {
            if ($('#phonenumber').val() == '') {
                $('#phonenumber').focus();
                $('#phonenumber').css('border', '2px solid red');
            } else {
                $('#phonenumber').css('border', '1px solid #CCC');
            }
        });

        $('#update-basic').on("click", function () {
            if (_.isEmpty($('#full_name').val())) {
                $('#full_name').focus();
                $('#full_name').css('border', '2px solid red');
                return false;
            } else {
                $('#full_name').css('border', '');
            }

            if (_.isEmpty($('#email').val())) {
                $('#email').focus();
                $('#email').css('border', '2px solid red');
                return false;
            } else {
                $('#email').css('border', '');
            }

            if (_.isEmpty($('#phonenumber').val())) {
                $('#phonenumber').focus();
                $('#phonenumber').css('border', '2px solid red');
                return false;
            } else {
                $('#phonenumber').css('border', '');
            }

            if (_.isEmpty($('#address1').val())) {
                $('#address1').focus();
                $('#address1').css('border', '2px solid red');
                return false;
            } else {
                $('#address1').css('border', '');
            }

            if (_.isEmpty($('#address2').val())) {
                $('#address2').focus();
                $('#address2').css('border', '2px solid red');
                return false;
            } else {
                $('#address2').css('border', '');
            }

            if (_.isEmpty($('#zip_code').val())) {
                $('#zip_code').focus();
                $('#zip_code').css('border', '2px solid red');
                return false;
            } else {
                $('#zip_code').css('border', '');
            }

            if (_.isEmpty($('#city').val())) {
                $('#city').focus();
                $('#city').css('border', '2px solid red');
                return false;
            } else {
                $('#city').css('border', '');
            }

            if (_.isEmpty($('#state').val())) {
                $('#state').focus();
                $('#state').css('border', '2px solid red');
                return false;
            } else {
                $('#state').css('border', '');
            }

            if (_.isEmpty($('#country').val())) {
                $('#country').focus();
                $('#country').css('border', '2px solid red');
                return false;
            } else {
                $('#country').css('border', '');
            }

            if (!App.isValidEmailAddress($('#email').val())) {
                $('#email').focus();
                $('#email').css('border', '2px solid red');
                return false;
            } else {
                $('#email').css('border', '');
            }


//            var name = ($('#full_name').val() != '') ?
//                ($('#full_name').val().split(' ')) : '';
//
//            if (name != '') {
//                self.currentUser.attributes.firstname = name.splice(0, 1)[0];
//                self.currentUser.attributes.lastname = name.join(' ');
//            }
            self.currentUser.attributes.firstname = $('#full_name').val();
            self.currentUser.attributes.email = $('#email').val();
            self.currentUser.attributes.phonenumber = $('#phonenumber').val();
            self.currentUser.attributes.address1 = $('#address1').val();
            self.currentUser.attributes.address2 = $('#address2').val();
            self.currentUser.attributes.zip_code = $('#zip_code').val();
            self.currentUser.attributes.city = $('#city').val();
            self.currentUser.attributes.state = $('#state').val();
            self.currentUser.attributes.country = $('#country').val();

            self.currentUser.save(this.currentUser, {
                success: function (model, resp) {
                    console.log(model, resp);
                    user = resp;
                    console.log('saved successfully');
                    $('#basic-saved-success').show();
                },
                error: function () {
                    console.log('can not save');
                }
            });

        });

        $('#update-password').on('click', function () {
            if ($('#password').val().trim() == '') {

                return false;
            }
            if ($('#password').val() != $('#conf_password').val()) {
                $('#conf_password').focus();
                $('#conf_password').css('border', '2px solid red');
                return false;
            }

            self.currentUser.attributes.password = $('#conf_password').val();
            self.currentUser.save(this.currentUser, {
                success: function (model, resp) {
                    console.log(model, resp);
                    user = resp;
                    $('#password-saved-success').show();
                },
                error: function () {
                    console.log('can not save');
                }
            });

        });

        $('.add-email').on("click", function () {

            var email = $('#alt_email').val();

            var emails = email.split(',');

            _.each(emails, function (emailAddress) {
                if (!App.isValidEmailAddress(emailAddress)) {
                    $('#alt_email').focus();
                    $('#alt_email').css('border', '2px solid red');
                    return false;
                }
            });

            $('#alt_email').focus();
            $('#alt_email').css('border', '1px solid #CCC');

            console.log(email);
            self.currentUser.set({'alternateemail': email});

            self.currentUser.save(this.currentUser, {
                success: function (model, resp) {
                    console.log(model, resp);
                    user = resp;
                    $('#credential-saved-success').show();
                    console.log('saved successfully');
                },
                error: function () {
                    console.log('can not save');
                }
            });

        });

    }

});



var AddOnsView = Backbone.View.extend({
    add_ons_list: [],
    initialize: function () {

        this.render();
        this.loadAddOns();
    },
    events: {
        'click .add_ons_check': 'listAddOns',
        'mouseover .sample-image': 'showSampleImage',
        'mouseout .sample-image': 'hideSampleImage'
    },
    render: function () {

        var option = {
            'process': App.taskList,
            'next': 'javascript:void(0)',
            'success': 0,
            'type': App.activeJob.get('type')
        };

        if (App.activeJob.get('type') == 'job') {
            option.active = 3;
            option.prev = '#complexity';
        } else {
            option.prev = '#uploadedimage';
            option.active = 2;
        }

        $(this.el).html(_.template(Templates.AddOns, option));
        $('#main').html(this.el);
        localStorage.setItem("lastPage", 'addons');
        return this;
    },
    loadAddOns: function () {

        var that = this;

        $('#next').on("click", function () {
            App.activeJob.set({'add_ons': that.add_ons_list});
            localStorage.setItem("activeJob", JSON.stringify(_.clone(App.activeJob.attributes)));
            console.log(localStorage.getItem("activeJob"));
            App.appRouter.navigate("format", {trigger: true});
        });

        $('.selection_box').on('click', function (e) {

            var ids = e.target.id.split('-');

            if ($('#' + ids[1]).is(':checked')) {
                $('#' + ids[1]).attr('checked', false);
            } else {
                $('#' + ids[1]).attr('checked', true);
            }

            that.changeAddOns(ids[1]);
        })

    },
    showSampleImage: function (event) {

        var id = event.target.id.split('-');

        var addon = App.activeServices.addons.filter(function (element) {
            return (element.id == id[1]);
        });

        App.showSample(addon[0].webPath);
    },
    hideSampleImage: function (event) {
        App.hideSample();
    },
    changeAddOns: function (clickedId) {

        var currentAddOn = _.find(App.activeServices.addons, function (addon) {
            return addon.id == clickedId;
        });

        if ($('#' + clickedId).is(':checked')) {

            formattedAddon = {
                'id': currentAddOn.id,
                'price': currentAddOn.price,
                'addons_title': currentAddOn.title
            };

            this.add_ons_list.push(formattedAddon);

        } else {

            this.add_ons_list = _.reject(this.add_ons_list, function (addon) {
                return addon.id == clickedId;
            });

        }

        _.uniq(this.add_ons_list);
        console.log(this.add_ons_list);
    },
    listAddOns: function (event) {
        var eventId = event.target.id;
        this.changeAddOns(eventId);
    }

});
var ArchiveListView = Backbone.View.extend({

    initialize: function () {
        this.render();
        this.archive();
    },

    render: function() {
        $(this.el).html( _.template(Templates.JobList, {collection : App.allArchives,archive:true}));
        $('#main').html(this.el);
        return this;
    },

    archive : function(){

        $('#job-list').on("click",function(){
            App.appRouter.navigate("orders", {trigger: true});
        });

    }

});



var ComplexityView = Backbone.View.extend({
    initialize: function () {
        this.render();
        this.eventBind();

    },
    events: {
        'click .complexity': 'typeOfComplexity',
        'mouseover .sample-image': 'showSampleImage',
        'mouseout .sample-image': 'hideSampleImage'
    },
    render: function () {

        var option = {
            'process': App.taskList,
            'active': 2,
            'prev': '#uploadedimage',
            'next': 'javascript:void(0)',
            'success': 0,
            'type': App.activeJob.get('type')
        };

        $(this.el).html(_.template(Templates.Complexity, option));
        $('#main').html(this.el);
        localStorage.setItem("lastPage", 'complexity');
        return this;
    },
    changeComplexity: function (id) {

        App.activeServices.complexities.filter(function (complexity) {
            if (complexity.id == id) {
                App.activeJob.set(
                        {
                            'complexity_id': complexity.id,
                            'complexity_price': complexity.price,
                            'complexity_title': complexity.title
                        }
                );
                localStorage.setItem("activeJob", JSON.stringify(_.clone(App.activeJob.attributes)));
                console.log(localStorage.getItem("activeJob"));
            }

        });

    },
    typeOfComplexity: function (event) {
        this.changeComplexity(event.target.id)
    },
    showSampleImage: function (event) {

        var id = event.target.id.split('-');

        var complexity = App.activeServices.complexities.filter(function (element) {
            return (element.id == id[1]);
        });

        App.showSample(complexity[0].webPath);
    },
    hideSampleImage: function (event) {
        App.hideSample();
    },
    eventBind: function () {

        var self = this;

        $('#next').on("click", function () {

            if (_.isUndefined(App.activeJob.attributes.complexity_id)) {
                alert("Please select the Complexity level.");
                return false;
            }

            if (App.activeServices.addons.length > 0) {
                App.appRouter.navigate("addons", {trigger: true});
            } else {
                App.appRouter.navigate("format", {trigger: true});
            }

        });

        $('.selection_box').on('click', function (e) {

            var ids = e.target.id.split('-');

            if ($('#' + ids[1]).is(':checked')) {
                $('#' + ids[1]).attr('checked', false);
            } else {
                $('#' + ids[1]).attr('checked', true);
            }

            self.changeComplexity(ids[1]);
        })
    }

});
var DashboardView = Backbone.View.extend({
    jobList : null,

    initialize: function () {
        this.render();
        this.archive();
    },

    render: function() {
        $(this.el).html( _.template(Templates.Dashboard, {collection : App.allJobs.models.slice(0,5),archive:false}));
        $('#main').html(this.el);
        return this;
    },

    archive : function(){
        var self=this;
        $('.archive').on('click',function(){
            var id = $(this).attr('id').split('-');
            App.allJobs.filter(function (model){
                if (model.attributes.id == id[1]) {
                    model.set({'status':'archive'});
                    model.save(model,{
                        success : function(){
                            var status='new';
                            App.loadJobs(status);
                            self.render();
                            self.archive();

                        }
                    });

                }
            });
        });

        $('#archive-list').on("click",function(){
            App.appRouter.navigate("archive", {trigger: true});
        });

        $('.payment').on("click",function(e){
            window.open('/payment/invoice/'+$(this).attr('id'));
        });

        $('.jobdetails').on('click',function(e){
            App.loader.show();
            var ids = e.target.id.split('-');
            App.appRouter.navigate("order/"+ids[1], {trigger: true});
        });

    }

});



var FormatView = Backbone.View.extend({
    initialize: function () {
        this.render();
        this.eventBind();
    },
    events: {
        'click .format': 'setFormat'
    },
    render: function () {
        var option = {
            'process': App.taskList,
            'next': 'javascript:void(0)',
            'prev': '#addons',
            'success': 0,
            'type': App.activeJob.get('type')
        };

        if (App.activeJob.get('type') == 'job') {
            if (App.activeServices.addons.length > 0) {
                option.prev = '#addons';
            } else {
                option.prev = '#complexity';
            }
        } else {
            if (App.activeServices.addons.length > 0) {
                option.prev = '#addons';
            } else {
                option.prev = '#uploadedimage';
            }
        }

        if (App.activeJob.get('type') == 'job') {
            option.active = 4;
        } else {
            option.active = 3;
        }

        $(this.el).html(_.template(Templates.Format, option));
        $('#main').html(this.el);

        localStorage.setItem("lastPage", 'format');
        return this;
    },
    changeFormat: function (id) {

        App.activeServices.deliveryTypes.filter(function (deliveryType) {
            if (deliveryType.id == id) {
                App.activeJob.set({
                    'delivery_type_id': deliveryType.id,
                    'delivery_type_title': deliveryType.title
                });
                localStorage.setItem("activeJob", JSON.stringify(_.clone(App.activeJob.attributes)));
            }
        });

        //App.appRouter.navigate("schedule", {trigger: true});
    },
    setFormat: function (event) {

        this.changeFormat(event.target.id);

    },
    eventBind: function () {

        var self = this;

        $('#next').on("click", function () {

            if (_.isUndefined(App.activeJob.attributes.delivery_type_id)) {
                alert('Please Select One Delivery Type');
                return false;
            }

            App.appRouter.navigate("schedule", {trigger: true});

        });

        $('.selection_box').on('click', function (e) {

            var ids = e.target.id.split('-');

            if ($('#' + ids[1]).is(':checked')) {
                $('#' + ids[1]).attr('checked', false);
            } else {
                $('#' + ids[1]).attr('checked', true);
            }

            self.changeFormat(ids[1]);

        });
    }
});
var GuidedTourView = Backbone.View.extend({

    initialize: function () {
        this.render();
    },

    render: function() {
        $('#main').html('<p id="video-loader" style="padding: 100px 0; text-align: center; color: gray"><i>Loading...</i></p>');
        var self = this;

        $.getJSON(App.baseUrl + 'tourVideos', function(data) {
            $('#video-loader').remove();
            $(self.el).html( _.template(Templates.GuidedTour , {videos: data}));
            $('#main').html(this.el);
        });

        return this;
    }


});



var HistoryView = Backbone.View.extend({
    jobList: null,
    totalJob: null,
    numberPerPage: null,
    currentPage: null,
    templateVars: null,
    initialize: function () {

        this.numberPerPage = 20;
        this.jobList = new JobCollection(App.pagination(App.allJobs, this.numberPerPage, $(this).attr('id')));
        this.currentPage = 1;

        this.render();
        this.bindEvents();

    },
    render: function () {
        if (_.isNull(this.templateVars)) {
            var total = App.allJobs.length;
            var numberOfPage = Math.ceil(total / this.numberPerPage);
            var pagination = {
                'total': total,
                'jobsPerPage': this.numberPerPage,
                'numberOfPage': numberOfPage,
                'currentPage': parseInt(this.currentPage)
            };

            this.templateVars = {
                collection: this.jobList,
                archive: false,
                search_mode: 0,
                pagination: pagination
            };
        }

        $(this.el).html(_.template(Templates.History, this.templateVars));
        this.templateVars = null;

        $('#main').html(this.el);
        $('#main .datepicker').datepicker();
        return this;
    },
    bindEvents: function () {

        var self = this;

        $('#filter-orders').on('click', function () {
            var from = new Date(Date.parse($('#orders-from').val()));
            var to = new Date(Date.parse($('#orders-to').val()));
            console.log('Showing' + from + ' to ' + to);
            var matchedJobs = App.allJobs.filter(function (job) {
                var jobDate = new Date(Date.parse(job.get('timestamp').replace(' ', 'T')));
                return (jobDate >= from && jobDate <= to);
            });

            self.templateVars = {
                collection: new JobCollection(matchedJobs),
                archive: false,
                search_mode: 1,
                from: from.format('mm/dd/yyyy'),
                to: to.format('mm/dd/yyyy')
            };

            self.render();
            self.bindEvents();
        });

        $('.archived').on('click', function () {

            var confirmMsg = confirm('Are you sure ?\n This order will be deleted.');

            if (!confirmMsg) {
                return;
            }

            var id = $(this).attr('id').split('-');

            App.allJobs.filter(function (model) {

                if (model.attributes.id == id[1]) {

                    model.set({'status': 'archive'});

                    model.save(model, {success: function () {

//                        console.log('success');
                            var status = 'new';

                            App.loadJobs(status);
                            self.render();
                            self.bindEvents();

                            $('#status-' + id[1]).removeClass();
                            $('#status-' + id[1]).addClass('archive');
                            $('#status-' + id[1]).html('Archive');

                            $('#delete-img').attr('src', '/bundles/Ingenclient/images/order/inactive-delete.png');

                        }});
                }
            });
        });

        $('.searched').on('click', function () {

            var search = $('#search').val();

            $.ajax({
                url: "/search",
                dataType: 'json',
                type: 'POST',
                data: search,
                success: function (data) {
                    App.allJobs = data;
                    self.render();
                    self.bindEvents();
                }
            });

            App.allJobs.each(function (model) {

                if (model.attributes.id == id[1]) {

                    model.set({'status': 'archive'});

                    model.save(model, {success: function () {
//                        console.log('success');
                            var status = 'new';
                            App.loadJobs(status);
                            self.render();
                            self.bindEvents();

                        }});

                }

            });

        });

        $('.pagination').on('click', function () {

            self.currentPage = parseInt($(this).attr('id'));
            self.jobList.reset(App.pagination(App.allJobs, self.numberPerPage, self.currentPage));

            self.render();
            self.bindEvents();
        });

        $('#archive-list').on("click", function () {
//            console.log('archive-list');
            App.appRouter.navigate("archive", {trigger: true});

        });

        $('.invoice').on("click", function (e) {
//            console.log(e.target.id);
            var invoiceId = $(this).attr('id');
            $.ajax({
                url: '/invoice/download/' + $(this).data('job') + '?invoiceId=' + invoiceId,
                success: function (response) {
                    console.log('here');
                    window.open('/invoices/' + invoiceId + '.pdf');
                }
            });
        });

        $('.payment').on("click", function (e) {
//            console.log(e.target.id);
            window.location.replace("/payment/invoice/" + $(this).attr('id'));
        });

        $('#download-orders').on("click", function (e) {
            var from = new Date(Date.parse($('#orders-from').val()));
            var to = new Date(Date.parse($('#orders-to').val()));
            if (_.isDate(from) && _.isDate(to)) {
                window.open("/client/report/my/all/" + from.format('yyyy-mm-dd') + '/' + to.format('yyyy-mm-dd'), '_blank');
            } else {
                $('#no-report-date').modal();
            }

        });

        $('.jobdetails').on('click', function (e) {
            App.loader.show();
            var ids = e.target.id.split('-');
            App.appRouter.navigate("order/" + ids[1], {trigger: true});
        });

        $('.approve-quote').on("click", function (e) {

            App.loader.show();
            var jobId = $(this).data("id");

            $.ajax({
                url: "/api/jobs/" + jobId + "/approve",
                dataType: 'json',
                success: function (data) {
                    $('#status-' + data.id).addClass(data.status);
                    $('#status-' + data.id).html(data.status);
                    $(e.target).html('<img src="/bundles/Ingenclient/images/order/unpaid-invoice.png" alt="unpaid-invoice"/>');
                    App.loader.hide();
                }
            });

        });

        $('.active-download').on('click', function (e) {

            var id = $(this).data('id');
            var token = $(this).data('token');
            $.ajax({
                url: "/api/jobs/file/list/" + id + "/" + token,
                dataType: 'json',
                success: function (data) {
                    if (data.success == true) {
                        var content = '';
                        $.each(data.files, function (k, v) {
                            content += '<li style="margin-left: 20px;"><a href="/uploads/' + id + '/' + token + '/result/' + v + '">' + v + '</a></li>';
                        })
                    } else {
                        var content = '<li style="margin-left: 20px;">Sorry we did not find any files :(</li>';
                    }

                    var confirmModal =
                            $('<div style="display: none;">' + content + '</div>');
                    confirmModal.dialog({
                        modal: true,
                        resizable: true,
                        title: 'Downloaded Files',
                        width: 700
                    });
                }
            });

        });
    }

});

var LoginView = Backbone.View.extend({
    initialize: function () {
        if (user) {
            App.appRouter.navigate("summary", {trigger: true});
        } else {
            this.render();
            this.bindEvents();
        }
    },
    events: {
//        'click #submit_login': 'loginUser',
//        'click #submit_register': 'registerUser',
    },
    render: function () {
        var option = {
            'process': App.taskList,
            'active': 2,
            'prev': '#schedule',
            'next': 'javascript:void(0)',
            'success': 0,
            'type': App.activeJob.get('type'),
            'csrfToken': csrfToken,
            'socialNetworks': socialNetworks,
            'resetPassUrl': resetPassUrl
        };

        $(this.el).html(_.template(Templates.Login, option));
        $('#main').html(this.el);
        localStorage.setItem("lastPage", 'login');
        return this;
    },
    registerUser: function (form) {
        console.log(form);
        var self = this;
        if (form.find('[name="metrodesk_user_registration[plainPassword][first]"]').val().length < 8) {
            alert('Password is too short');
            return;
        }
        if (form.find('[name="metrodesk_user_registration[plainPassword][first]"]').val() != form.find('[name="metrodesk_user_registration[plainPassword][second]"]').val()) {
            alert('Passwords are mismatched');
            return;
        }
        if (!form.find('#terms').is(':checked')) {
            alert('You must accept terms and condition');
            return;
        }
        var data = form.serialize();
        $.ajax({
            url: App.baseUrl + 'api/register',
            type: 'POST',
            data: data,
            success: function (result) {
                user = result.user;
                App.activeJob.set({
                    'createdBy': user.id
                });
                localStorage.setItem("activeJob", JSON.stringify(_.clone(App.activeJob.attributes)));
                self.togglePanel();
                App.appRouter.navigate("summary", {trigger: true});
            }
        });
    },
    loginUser: function (form) {
        var self = this;
        var data = form.serialize();
        $.ajax({
            url: App.baseUrl + 'api/login',
            type: 'POST',
            data: data,
            success: function (result) {
                user = result.user;
                App.activeJob.set({
                    'createdBy': user.id
                });
                localStorage.setItem("activeJob", JSON.stringify(_.clone(App.activeJob.attributes)));
                self.togglePanel();
                App.appRouter.navigate("summary", {trigger: true});
            }
        });
    },
    bindEvents: function () {
        var self = this;
        $('#loginOrderForm').on('submit', function (event) {
            event.preventDefault();
            self.loginUser($(this));
        });
        $('#registrationOrderForm').on('submit', function (event) {
            event.preventDefault();
            self.registerUser($(this));
        });
    },
    togglePanel: function () {
        $('.navigation .auth').removeClass('hidden');
        $('.login-top-buttons .not-auth').remove();
    }

});
var NewProjectView = Backbone.View.extend({
    type: null,
    initialize: function (type) {
        this.type = type;
        this.render();
        this.eventBind();
    },
    events: {
        'click .service_time': 'typeOfService'
    },
    render: function () {

        var option = {
            'process': App.taskList,
            'active': 0,
            'next': 'javascript:void(0)',
            'prev': '',
            'success': 0,
            'type': 'job'
        };

        $(this.el).html(_.template(Templates.NewProject, option));
        $('#main').html(this.el);

        if (!Dropzone.isBrowserSupported()) {
            $('#drop-area').hide();
            $.reject({
                reject: {all: true},
                header: 'Our smart uploader doesn\'t support your browser!',
                paragraph1: 'Sorry to say, you are currently using an outdated browser.',
                paragraph2: 'Please install one of the following up-to-date browsers below to proceed',
                close: false
                        //display: ['firefox','chrome','opera']
            });
        }
        if (this.type == 'job') {
            localStorage.setItem("lastPage", 'newproject');
        } else {
            localStorage.setItem("lastPage", 'quotation');
        }
        return this;
    },
    changeService: function (id) {

        App.activeServices = _.find(services, function (service) {
            return service.id == id
        });
        App.activeJob = new Job();

        if (this.type == 'job') {

            App.activeJob.set({
                'service': App.activeServices.id,
                'service_name': App.activeServices.title,
                'type': this.type,
                'status': 'new',
            });

        } else {

            App.activeJob.set({
                'service': App.activeServices.id,
                'service_name': App.activeServices.title,
                'type': this.type,
                'status': 'quote-request',
            });
        }
        if (user) {
            App.activeJob.set({'createdBy': user.id});
        }
        localStorage.setItem("activeJob", JSON.stringify(_.clone(App.activeJob.attributes)));
        console.log(localStorage.getItem("activeJob"));
    },
    typeOfService: function (e) {
        var id = e.target.id;
        this.changeService(id);
    },
    eventBind: function () {

        var self = this;

        $('#next, #uploadImageNextButton').on("click", function () {
            $.modal.close();
            if (_.isUndefined(App.activeServices) || _.isNull(App.activeServices)) {
                alert('Please Select One Service.');
                return false;
            }
            if(!App.imagesChosen && (_.isUndefined(App.activeJob.attributes.images) || _.isNull(App.activeJob.attributes.images) || !App.activeJob.attributes.images.length)){
                alert('Please Upload at Least One Image.');
                return false;
            }
            App.appRouter.navigate("uploadedimage", {trigger: true});
        });
        
        $('.selection_box').on('click', function (e) {

            var id = $(this).data('id');
            var el = $('#service-' + id);

            if (el.is(':checked')) {
                el.removeAttr('checked');
            } else {
                el.attr('checked', true);
            }

            self.changeService(id);

        });
    },
    enableNext: function () {
        $(this.el).find('#uploading').css('display', 'none');
        $(this.el).find('#next').css('display', 'inline-block');
    },
    disableNext: function () {
        $(this.el).find('#uploading').css('display', 'inline-block');
        $(this.el).find('#next').css('display', 'none');
    }

});
var OrderDetailView = Backbone.View.extend({

    jobModel: null,

    initialize: function (job) {
        this.jobModel = job;
        this.render();
    },

    events: {
        'click .back'                    : 'goBack',
        'click .button-quotation-approve': 'approveQuote',
        'click .button-quotation-reject' : 'rejectQuote'
    },

    render: function () {
        $(this.el).html(_.template(Templates.OrderDetail, {model: this.jobModel}));
        $('#main').html(this.el);
        return this;
    },

    goBack: function () {
        App.loader.show();
        window.history.back();
    },

    approveQuote: function () {
        // If the user billing type is not NORMAL
        if(_.isNull(this.jobModel.attributes.invoice)) {
            App.loader.show();
            $.getJSON('/api/jobs/'+ this.jobModel.get('id') +'/approve', function(data) {
                App.appRouter.navigate('orders', {trigger: true});
                App.loader.hide();
            });
        } else {
            window.location.replace("/payment/invoice/" + this.jobModel.attributes.invoice.id);
        }

    },

    rejectQuote: function() {
        App.appRouter.navigate("thread/" + this.jobModel.id , {trigger: true});
    }

});
var ScheduleView = Backbone.View.extend({
    initialize: function () {
        this.render();
        this.eventBind();
    },
    events: {
        'click     .schedule': 'setSchedule'
    },
    render: function () {
        var option = {
            'process': App.taskList,
            'next': 'javascript:void(0)',
            'prev': '#format',
            'success': 0,
            'type': App.activeJob.get('type')
        };
        if (App.activeJob.get('type') == 'job') {
            option.active = 5;
        } else {
            option.active = 4;
        }

        $(this.el).html(_.template(Templates.Schedule, option));
        $('#main').html(this.el);
        localStorage.setItem("lastPage", 'schedule');
        return this;
    },
    changeSchedule: function (id) {


        App.activeServices.deliveryTimes.filter(function (deliveryTime) {
            if (deliveryTime.id == id) {
                App.activeJob.set({
                    'delivery_time_id': deliveryTime.id,
                    'delivery_time_price': deliveryTime.factor,
                    'delivery_time_title': deliveryTime.title,
                    'delivery_time_desc': deliveryTime.description
                });
                localStorage.setItem("activeJob", JSON.stringify(_.clone(App.activeJob.attributes)));
                console.log(localStorage.getItem("activeJob"));
            }
        });
    },
    setSchedule: function (event) {

        this.changeSchedule(event.target.id);
    },
    eventBind: function () {
        var self = this;
        $('#next').on("click", function () {
            if (_.isUndefined(App.activeJob.attributes.delivery_time_id)) {
                alert('Please Select One Delivery Time');
                return false;
            }
            App.appRouter.navigate("login", {trigger: true});

        });

        $('.selection_box').on('click', function (e) {
            var ids = e.target.id.split('-');
            if ($('#' + ids[1]).is(':checked')) {
                $('#' + ids[1]).attr('checked', false);
            } else {
                $('#' + ids[1]).attr('checked', true);
            }
            self.changeSchedule(ids[1]);

        });
    }

});
var StepsView = Backbone.View.extend({
    type : null,
    initialize: function (option) {
        this.type = option.type;
        this.render(option);
        this.baseLine();
    },

    render: function(option) {
        $(this.el).html( _.template(Templates.Steps, option));
        $('#step').html(this.el);
        return this;
    }
});
var SummaryView = Backbone.View.extend({
    jobModel: null,
    currentUser: null,
    initialize: function (job) {
        this.currentUser = new User(user);
        this.jobModel = job;
        this.jobModel.set({'discounted_total': this.jobModel.attributes.total});
        this.render();
    },
    events: {
        'click #save-job': 'saveJob',
        'click #quopon-code': 'applyDiscount'
    },
    render: function () {
        $(this.el).html(_.template(Templates.Summary, {'model': this.jobModel}));
        $('#main').html(this.el);
        $('#instruction').html(this.jobModel.get('instruction').replace(new RegExp('\r?\n', 'g'), '<br />'));

        // Not sure from where all the model attributes are being set as attribute of the el of this view.
        // Removing title manually as it's showing on page hover
        // Sorry for this hack
        $('#main > div').removeAttr('title');
        localStorage.setItem("lastPage", 'summary');
        return this;
    },
    saveJob: function () {

        $('#save-job').removeClass('btn').addClass('btn-disable');
        $('#save-job').attr('disabled', true);
        $('#save-loader').show();

        var deliveryDate = new Date();
        deliveryDate.setHours(deliveryDate.getHours() + parseInt(App.activeJob.attributes.delivery_time_title.split(' ')[0]));

        var dateString = deliveryDate.getFullYear() + '-' + deliveryDate.getMonth() + '-' + deliveryDate.getDate() + ' ' +
                deliveryDate.getHours() + ':' + deliveryDate.getMinutes() + ':' + deliveryDate.getSeconds();

        App.activeJob.set({'deliveryDate': dateString});
        App.activeJob.set({'archive': false});

        if (App.activeJob.get('type') != 'job') {
            App.activeJob.attributes.total = 0;
        }
        var self = this;
        App.activeJob.save(App.activeJob, {
            success: function (model, response) {
                if (App.activeJob.get('type') == 'job' && user.billingtype == 'normal') {
                    App.activeJob = null;
                    App.activeServices = null;
                    localStorage.setItem("activeJob", null);
                    localStorage.setItem("lastPage", null);
                    var form = $('#payment');
                    var defaultValues = ['sid', 'mode', 'x_receipt_link_url', 'tco_use_inline', 'demo', 'li_0_type'];
                    form.find('input[type=hidden]').each(function () {
                        if (defaultValues.indexOf($(this).attr('name')) == -1) {
                            $(this).val('');
                        }
                    });
                    form.find('[name=li_0_name]').val(response.title);
                    form.find('[name=li_0_price]').val(response.invoice.total);
                    form.find('[name=li_0_description]').val(response.service.title + '(Job ID: ' + response.id + ')');
                    form.find('[name=custom]').val(response.invoice.id);
                    if (response.user.firstname && response.user.address1 && response.user.address2 && response.user.city &&
                            response.user.zip_code && response.user.country && response.user.email && response.user.phonenumber) {
                        self.fillUserInfoAndSubmitForm(response.user);
                    } else {
                        self.showUpdateUserPopup();
                    }




//                    $('#payment').submit();
//                    $.ajax({
//                        url: '/invoice/download/' + response.id,
//                        dataType: 'json',
//                        success: function (data) {
//                            console.log(response.invoice);
//                            
////                            window.location.replace("/payment/invoice/" + response.invoice.id);
//                        },
//                        error: function () {
//                            window.location.replace("/payment/invoice/" + response.invoice.id);
//                        }
//                    });

                } else {
                    App.activeJob = null;
                    App.activeServices = null;
                    localStorage.setItem("activeJob", null);
                    localStorage.setItem("lastPage", null);
                    App.appRouter.navigate("orders", {trigger: true});

                }

            },
            error: function (model, response, options) {
                console.log(response);
                $('#save-job').removeClass('btn-disable').addClass('btn');
                $('#save-job').attr('disabled', false);
                $('#save-loader').hide();
            }}
        );

    },
    applyDiscount: function () {

        $('#coupon-error').show();
        $('#coupon-error').html('<span style="color:#008000;">Checking...</span>');
        $('#coupon-loader').show();

        $.ajax({
            url: "/coupon/apply",
            dataType: 'json',
            type: "post",
            data: {'code': $('#coupon-text').val(), 'total': App.activeJob.attributes.total},
            success: function (data) {

                if (data.applicable) {

                    App.activeJob.attributes.discount = App.activeJob.attributes.total - data.new_total;
                    App.activeJob.attributes.discounted_total = (data.new_total < 0) ? 0 : parseFloat(data.new_total).toFixed(2);
                    App.activeJob.attributes.coupon = data.coupon;

                    $('#discounted-total').html('$' + App.formatNumber(App.activeJob.attributes.discounted_total));
                    $('#discount').html('$' + App.formatNumber(App.activeJob.attributes.discount));

                    $('#coupon-row').show();
                    $('#coupon-error').hide();

                } else {

                    $('#coupon-error').show().html(data.message);

                }

                $('#coupon-loader').hide();

            }
        });

    },
    fillUserInfoAndSubmitForm: function (user) {
        var form = $('#payment');
        form.find('[name=card_holder_name]').val(user.firstname);
        form.find('[name=street_address]').val(user.address1);
        form.find('[name=street_address2]').val(user.address2);
        form.find('[name=city]').val(user.city);
        form.find('[name=state]').val(user.state);
        form.find('[name=zip]').val(user.zip_code);
        form.find('[name=country]').val(user.country);
        form.find('[name=email]').val(user.email);
        form.find('[name=phone]').val(user.phonenumber);
        form.submit();
    },
    showUpdateUserPopup: function () {
        var self = this;
        $('#updateUserPopup').modal();
        if (!_.isNull(self.currentUser.attributes.country)) {
            $('#country option[value="' + self.currentUser.attributes.country + '"]').attr('selected', 'selected');
        }
        $('#update-basic').on('click', function () {
            self.updateUser();
        });
    },
    updateUser: function () {
        var self = this;
        if (_.isEmpty($('#full_name').val())) {
            $('#full_name').focus();
            $('#full_name').css('border', '2px solid red');
            return false;
        } else {
            $('#full_name').css('border', '');
        }

        if (_.isEmpty($('#email').val())) {
            $('#email').focus();
            $('#email').css('border', '2px solid red');
            return false;
        } else {
            $('#email').css('border', '');
        }

        if (_.isEmpty($('#phonenumber').val())) {
            $('#phonenumber').focus();
            $('#phonenumber').css('border', '2px solid red');
            return false;
        } else {
            $('#phonenumber').css('border', '');
        }

        if (_.isEmpty($('#address1').val())) {
            $('#address1').focus();
            $('#address1').css('border', '2px solid red');
            return false;
        } else {
            $('#address1').css('border', '');
        }

        if (_.isEmpty($('#address2').val())) {
            $('#address2').focus();
            $('#address2').css('border', '2px solid red');
            return false;
        } else {
            $('#address2').css('border', '');
        }

        if (_.isEmpty($('#zip_code').val())) {
            $('#zip_code').focus();
            $('#zip_code').css('border', '2px solid red');
            return false;
        } else {
            $('#zip_code').css('border', '');
        }

        if (_.isEmpty($('#city').val())) {
            $('#city').focus();
            $('#city').css('border', '2px solid red');
            return false;
        } else {
            $('#city').css('border', '');
        }

        if (_.isEmpty($('#state').val())) {
            $('#state').focus();
            $('#state').css('border', '2px solid red');
            return false;
        } else {
            $('#state').css('border', '');
        }

        if (_.isEmpty($('#country').val())) {
            $('#country').focus();
            $('#country').css('border', '2px solid red');
            return false;
        } else {
            $('#country').css('border', '');
        }

        if (!App.isValidEmailAddress($('#email').val())) {
            $('#email').focus();
            $('#email').css('border', '2px solid red');
            return false;
        } else {
            $('#email').css('border', '');
        }

        self.currentUser.attributes.firstname = $('#full_name').val();
        self.currentUser.attributes.email = $('#email').val();
        self.currentUser.attributes.phonenumber = $('#phonenumber').val();
        self.currentUser.attributes.address1 = $('#address1').val();
        self.currentUser.attributes.address2 = $('#address2').val();
        self.currentUser.attributes.zip_code = $('#zip_code').val();
        self.currentUser.attributes.city = $('#city').val();
        self.currentUser.attributes.state = $('#state').val();
        self.currentUser.attributes.country = $('#country').val();

        self.currentUser.save(this.currentUser, {
            success: function (model, resp) {
                $.modal.close();
                var user = resp;
                console.log(user);
                self.fillUserInfoAndSubmitForm(user);
            },
            error: function () {
                console.log('can not save');
            }
        });
    }

});

var SupportView = Backbone.View.extend({
    type:null,
    initialize: function () {
        this.render();
    },
    events: {
        'click     .cpsbtn'       : 'supportJob',
        'keyup     #name'         : 'nameValidation',
        'keyup     #email'        : 'emailValidation',
        'keyup     #subject'      : 'subjectValidation',
        'keyup     #description'  : 'descriptionValidation'
    },

    render: function() {
        $(this.el).html( _.template(Templates.Support, {'fullname':user.firstname+' '+user.lastname}));
        //$(this.el).html( _.template(Templates.Support, {'email':user.username}));
        $('#main').html(this.el);
        return this;
    },

    nameValidation:function(){
        this.checkValidation('name');
    },
    emailValidation:function(){
        if($('#email').val().trim()==''){
                $('#email').focus();
                $('#email').css('border', '2px solid red');
        } else {
            if (!App.isValidEmailAddress($('#email').val())) {
                $('#email').focus();
                $('#email').css('border', '2px solid red');
            }else{
                $('#email').css('border', '1px solid #CCCCC');
            }
        }
    },
    subjectValidation:function(){
        this.checkValidation('subject');
    },

    descriptionValidation:function(){
        this.checkValidation('description');
    },


    checkValidation:function(itemNname){

        if($('#'+itemNname).val().trim()==''){
            $('#'+itemNname).focus();
            $('#'+itemNname).css('border', '2px solid red');
        }else{
            $('#'+itemNname).css('border', '1px solid #CCC');
        }
    },


    supportJob:function(){

        if($('#name').val().trim()==''){
            $('#name').focus();
            $('#name').css('border', '2px solid red');
            return false;
        }
        if($('#subject').val().trim()==''){
            $('#subject').focus();
            $('#subject').css('border', '2px solid red');
            return false;
        }

        if($('#description').val().trim()==''){
            $('#description').focus();
            $('#description').css('border', '2px solid red');
            return false;
        }

        var mailData = {
            'name':$('#name').val(),
            'email':$('#email').val(),
            'subject':$('#subject').val(),
            'description':$('#description').val()
        };
        console.log(mailData);
        $.ajax({
            url: '/api/support',
            dataType: 'json',
            type: "post",

            data:mailData,

            success: function(data) {
                $('#support-saved-success').show();
                $('#subject').val('');
                $('#description').val('');

            }
        });

    }



});
var TaskProgressorView = Backbone.View.extend({
    type : null,
    initialize: function (option) {
        this.type = option.type;
        this.render(option);
        this.baseLine();
    },

    render: function(option) {
        //$(this.el).html( _.template(Templates.TaskProgress, option));
        //$('#progress').html(this.el);
        return this;
    },

    baseLine: function() {

       if(this.type =='job'){
           $('.base_line').css('width','1015px');
       } else {
           $('.base_line').css('width','848px');
           $('.job_progress').addClass('quotation_progress');
       }
    }
});
var ThreadListView = Backbone.View.extend({

    threadList: null,
    jobId     : null,
    job       : null,

    events: {
        'click .back' : 'goBack'
    },

    initialize: function (threadCollection, jobId, job) {

        var self = this;

        this.threadList = threadCollection;
        this.jobId = jobId;
        this.job = job;

        self.render();
        self.eventBind();

    },

    render: function () {
        $(this.el).html(_.template(Templates.ThreadList, {collection: this.threadList, jobId: this.jobId, job: this.job }));
        $('#main').html(this.el);
        var uploader = new Dropzone("#attachment", {
            url                   : "/api/jobs/"+ this.jobId +"/commentAttachment",
            async                 : false,
            maxFilesize           : 5,
            uploadMultiple        : false,
            paramName             : 'attachment',
            accept                : function (file, done) {
                $("#attach-msg").remove();
                $(".dz-details").find("img")
                    .attr("src", "/bundles/Ingenclient/images/image_thumb.png")
                    .css({'height': '64px', 'width': '64px', 'opacity': '0.5'})
                    .show();
                done();
            }
        });
        uploader.on("addedfile", function(file) {
            $('#attachment_name').val(file.name);
            $('#attachment_uploader, #comment_submit').toggle();
        });
        uploader.on("complete", function(file) {
            $('#attachment_uploader, #comment_submit').toggle();
        });
        return this;
    },

    eventBind: function () {

        var that = this;

        $("#comment-text").on("keyup", function () {
            if ($('#comment-text').val() == '') {
                $('#comment-text').focus();
                $('#comment-text').css('border', '2px solid red');
            } else {
                $('#comment-text').css('border', '1px solid #CCC');
            }
        });

        $('#comment_submit').on('click', function () {

            if ($('#comment-text').val() == '') {
                $('#comment-text').focus();
                $('#comment-text').css('border', '2px solid red');
                return false;
            }

            var comment = new Thread({
                'url'    : '/api/jobs/' + that.jobId + '/comments',
                'content': $('#comment-text').val(),
                'attachment': $('#attachment_name').val()
            });

            comment.save(comment, {
                success: function (model, response) {
                    that.changeCollection(response);
                }
            });

        });
    },

    changeCollection: function (comment) {

        var commentModel = new Thread(comment);
        this.threadList.add(commentModel);

        this.render();
        this.eventBind();

    },

    goBack: function () {
        App.loader.show();
        window.history.back();
    }

});



var UploadImageView = Backbone.View.extend({

    events: {
        'click .ftp-upload-info': 'showFtpInfo'
    },

    initialize: function () {
        this.render();
    },

    render: function () {

        var option = {
            'process': App.taskList,
            'active' : 1,
            'next'   : '#uploadedimage',
            'success': 0,
            'type'   : App.activeJob.get('type')
        };

        if (App.activeJob.get('type') == 'job') {
            option.prev = '#newproject';
        } else {
            option.prev = '#quotation';
        }

        $(this.el).html(_.template(Templates.UploadImage, option));
        $('#main').html(this.el);

        if (!Dropzone.isBrowserSupported()) {
            $('#drop-area').hide();
            $.reject({
                reject: { all: true },
                header: 'Our smart uploader doesn\'t support your browser!',
                paragraph1: 'Sorry to say, you are currently using an outdated browser.',
                paragraph2: 'Please install one of the following up-to-date browsers below to proceed',
                close: false
                //display: ['firefox','chrome','opera']
            });
        }

        return this;
    },

    enableNext: function () {
        $(this.el).find('#uploading').css('display', 'none');
        $(this.el).find('#next').css('display', 'inline-block');
    },

    disableNext: function () {
        $(this.el).find('#uploading').css('display', 'inline-block');
        $(this.el).find('#next').css('display', 'none');
    },

    showFtpInfo: function() {
        $('#ftp-details').dialog({
            modal: true,
            resizable: false,
            title: 'FTP Info',
            width: 500
        });
    }

});
var UploadedImageView = Backbone.View.extend({
    images: null,
    initialize: function () {
        $.modal.close(); // Closing jquery.modal displayed in previous step
        this.render();
        this.eventBind(this);
    },
    events: {
        'keyup #order_name': 'checkTitle'
    },
    render: function () {

        var imageCollection = new ImageCollection();

        _.each(App.activeJob.attributes.images, function (image) {
            imageCollection.add(new Image(image));
            if (_.isUndefined(image.instruction)) {
                image.instruction = "";
            }
        });

        var option = {
            'process': App.taskList,
            'active': 1,
            'next': 'javascript:;',
            'success': 0,
            'type': App.activeJob.get('type')
        };
        
        if (App.activeJob.get('type') == 'job') {
            option.prev = '#newproject';
        } else {
            option.prev = '#quotation';
        }        

        $(this.el).html(_.template(Templates.UploadedImage, {collection: imageCollection, option: option}));
        $('#main').html(this.el);
        localStorage.setItem("lastPage", 'uploadedimage');

        return this;

    },
    eventBind: function (self) {

        $(".edit-instruction").on("click", function (events) {
            var id = $(this).attr('id');
            var serial = id.split("-");
            $('#instruction-modal-' + serial[1]).show();
        });


        $(".save-instruction").on("click", function (events) {

            var id_parts = $(this).attr('id').split("-");
            var serial = id_parts[1];
            var instruction = $('#instruction-' + serial).val();

            console.log(instruction);
            console.log(instruction.length);

            if (instruction.length > 0) {
                App.activeJob.attributes.images[serial].instruction = $('#instruction-' + serial).val();
                localStorage.setItem("activeJob", JSON.stringify(_.clone(App.activeJob.attributes)));
                $('#image-' + serial).find('.saved').text('Instructed');
            } else {
                $('#image-' + serial).find('.saved').text('');
            }

            $('#instruction-modal-' + serial).hide();

        });

        $(".close-instruction").on("click", function (events) {

            var confirmMsg = confirm('Are you sure you want to delete??');

            if (!confirmMsg) {
                return;
            }

            var parts = $(this).attr('id').split("-");
            var serial = parts[1];

            $.ajax({
                url: App.baseUrl + 'api/job/tmp/images/' + App.activeJob.attributes.images[serial].name,
                type: 'DELETE',
                success: function (result) {
                    //alert('deleted:'+ result);
                    App.activeJob.attributes.images.splice(serial, 1);
                    localStorage.setItem("activeJob", JSON.stringify(_.clone(App.activeJob.attributes)));
                    self.initialize();
                }
            });

        });

        $(".cancel-instruction").on("click", function (events) {
            var id = $(this).attr('id');
            var serial = id.split("-");
            $('#instruction-modal-' + serial[1]).hide();
        });

        $(".close-instruction").on("click", function (events) {
            //$('#instruction-modal-'+ $(this).attr('id')).hide();
        });

        $("#cpsbtn").on("click", function () {

            if (self.saveInstructionData()) {
                if (App.activeJob.get('type') === 'job') {
                    App.appRouter.navigate("complexity", {trigger: true});
                } else {
                    if (App.activeServices.addons.length > 0) {
                        App.appRouter.navigate("addons", {trigger: true});
                    } else {
                        App.appRouter.navigate("format", {trigger: true});
                    }
                }
            }

        });

        $("#order_name").on("blur", function () {
            if ($('#order_name').val() === '') {
                $('#order_name').focus();
                $('#order_name').css('border', '2px solid red');
            } else {
                $('#order_name').css('border', '1px solid #CCC');
            }
        });

        $("#instruction").on("blur", function () {
            if ($('#instruction').val() === '') {
                $('#instruction').focus();
                $('#instruction').css('border', '2px solid red');
            } else {
                $('#instruction').css('border', '1px solid #CCC');
            }
        });

    },
    saveInstructionData: function () {

        if ($('#order_name').val() === '') {
            $('#order_name').focus();
            $('#order_name').css('border', '2px solid red');
            return false;
        }
        if ($('#instruction').val() === '') {
            $('#instruction').focus();
            $('#instruction').css('border', '2px solid red');
            return false;
        }

        App.activeJob.set({
            'title': $('#order_name').val(),
            'instruction': $('#instruction').val()
        });
        localStorage.setItem("activeJob", JSON.stringify(_.clone(App.activeJob.attributes)));
        return true;

    },
    addInstructionToSpecificImage: function (e) {

        var id = $(this).attr('id');
        var title = id.split("-");

        $('#instruction-modal-' + title[1]).show();
        console.log('# -modal-' + title[1]);
    },
    checkTitle: function () {
        if ($('#order_name').val() === '') {
            $('#order_name').focus();
            $('#order_name').css('border', '2px solid red');
        } else {
            $('#order_name').css('border', '1px solid #CCC');
        }
    }

});
var ImageCollection = Backbone.Collection.extend({
    model: Image
});


var Job = Backbone.Model.extend({
    idAttribute: "id",
    urlRoot: '/api/jobs'
});

//var JobCollection = Backbone.Collection.extend({
//    model: Job,
//    initialize: function(option) {
//        Backbone.Pagination.enable(this, {
//            pretty:       true,  // use pretty url params instead of query params
//            ipp:          5,     // items per page
//            page_attr:    'page', // the query's page attribute
//            ipp_attr:     'ipp',  // the query's ipp attribute
//            fetchOptions: {
//                add: true  // instead of replacing the collection's model items, append new items
//            }
//        });
//    }
//});

var JobCollection = Backbone.Collection.extend({
    model: Job
});

App.allJobs = new JobCollection();
var Quotation = Backbone.Model.extend({
    idAttribute: "id",
    urlRoot: '/api/quotes'
});
var Thread =  Backbone.Model.extend({
    instanceUrl:null,
    url: function(){
        return this.instanceUrl;
    },
    initialize: function(model){
        this.instanceUrl = model.url;
    }
});
var ThreadCollection = Backbone.Collection.extend({
    model: Thread
});


var User = Backbone.Model.extend({
    idAttribute: "id",
    urlRoot: '/users'
});

var Image = Backbone.Model.extend({
    idAttribute: "id",
    urlRoot: function(){ return App.baseUrl + '/image'}
});

/*
 * jReject (jQuery Browser Rejection Plugin)
 * Version 1.0.2
 * URL: http://jreject.turnwheel.com/
 * Description: jReject is a easy method of rejecting specific browsers on your site
 * Author: Steven Bower (TurnWheel Designs) http://turnwheel.com/
 * Copyright: Copyright (c) 2009-2013 Steven Bower under dual MIT/GPLv2 license.
 */

(function($) {
$.reject = function(options) {
	var opts = $.extend(true,{
		reject : { // Rejection flags for specific browsers
			all: false, // Covers Everything (Nothing blocked)
			msie5: true, msie6: true // Covers MSIE 5-6 (Blocked by default)
			/*
			 * Possibilities are endless...
			 *
			 * // MSIE Flags (Global, 5-8)
			 * msie, msie5, msie6, msie7, msie8,
			 * // Firefox Flags (Global, 1-3)
			 * firefox, firefox1, firefox2, firefox3,
			 * // Konqueror Flags (Global, 1-3)
			 * konqueror, konqueror1, konqueror2, konqueror3,
			 * // Chrome Flags (Global, 1-4)
			 * chrome, chrome1, chrome2, chrome3, chrome4,
			 * // Safari Flags (Global, 1-4)
			 * safari, safari2, safari3, safari4,
			 * // Opera Flags (Global, 7-10)
			 * opera, opera7, opera8, opera9, opera10,
			 * // Rendering Engines (Gecko, Webkit, Trident, KHTML, Presto)
			 * gecko, webkit, trident, khtml, presto,
			 * // Operating Systems (Win, Mac, Linux, Solaris, iPhone)
			 * win, mac, linux, solaris, iphone,
			 * unknown // Unknown covers everything else
			 */
		},
		display: [], // What browsers to display and their order (default set below)
		browserShow: true, // Should the browser options be shown?
		browserInfo: { // Settings for which browsers to display
			firefox: {
				text: 'Mozilla Firefox', // Text below the icon
				url: 'http://www.mozilla.com/firefox/' // URL For icon/text link
			},
			chrome: {
				text: 'Google Chrome',
				url: 'http://www.google.com/chrome/'
			},
			safari: {
				text: 'Safari 7',
				url: 'http://www.apple.com/safari/download/'
			},
			opera: {
				text: 'Opera 12',
				url: 'http://www.opera.com/download/'
			},
			msie: {
				text: 'Internet Explorer 9',
				url: 'http://www.microsoft.com/windows/Internet-explorer/'
			},
			gcf: {
				text: 'Google Chrome Frame',
				url: 'http://code.google.com/chrome/chromeframe/',
				// This browser option will only be displayed for MSIE
				allow: { all: false, msie: true }
			}
		},

		// Header of pop-up window
		header: 'Did you know that your Internet Browser is out of date?',
		// Paragraph 1
		paragraph1: 'Your browser is out of date, and may not be compatible with '+
					'our website. A list of the most popular web browsers can be '+
					'found below.',
		// Paragraph 2
		paragraph2: 'Just click on the icons to get to the download page',
		close: true, // Allow closing of window
		// Message displayed below closing link
		closeMessage: 'By closing this window you acknowledge that your experience '+
						'on this website may be degraded',
		closeLink: 'Close This Window', // Text for closing link
		closeURL: '#', // Close URL
		closeESC: true, // Allow closing of window with esc key

		// If cookies should be used to remmember if the window was closed
		// See cookieSettings for more options
		closeCookie: false,
		// Cookie settings are only used if closeCookie is true
		cookieSettings: {
			// Path for the cookie to be saved on
			// Should be root domain in most cases
			path: '/',
			// Expiration Date (in seconds)
			// 0 (default) means it ends with the current session
			expires: 0
		},

		imagePath: '../../bundles/Ingenclient/plugins/jReject/images/', // Path where images are located
		overlayBgColor: '#000', // Background color for overlay
		overlayOpacity: 0.8, // Background transparency (0-1)

		// Fade in time on open ('slow','medium','fast' or integer in ms)
		fadeInTime: 'fast',
		// Fade out time on close ('slow','medium','fast' or integer in ms)
		fadeOutTime: 'fast',

		// Google Analytics Link Tracking (Optional)
		// Set to true to enable
		// Note: Analytics tracking code must be added separately
		analytics: false
	}, options);

	// Set default browsers to display if not already defined
	if (opts.display.length < 1) {
		opts.display = ['chrome','firefox','safari','opera','gcf','msie'];
	}

	// beforeRject: Customized Function
	if ($.isFunction(opts.beforeReject)) {
		opts.beforeReject();
	}

	// Disable 'closeESC' if closing is disabled (mutually exclusive)
	if (!opts.close) {
		opts.closeESC = false;
	}

	// This function parses the advanced browser options
	var browserCheck = function(settings) {
		// Check 1: Look for 'all' forced setting
		// Check 2: Operating System (eg. 'win','mac','linux','solaris','iphone')
		// Check 3: Rendering engine (eg. 'webkit', 'gecko', 'trident')
		// Check 4: Browser name (eg. 'firefox','msie','chrome')
		// Check 5: Browser+major version (eg. 'firefox3','msie7','chrome4')
		return (settings['all'] ? true : false) ||
			(settings[$.os.name] ? true : false) ||
			(settings[$.layout.name] ? true : false) ||
			(settings[$.browser.name] ? true : false) ||
			(settings[$.browser.className] ? true : false);
	};

	// Determine if we need to display rejection for this browser, or exit
	if (!browserCheck(opts.reject)) {
		// onFail: Customized Function
		if ($.isFunction(opts.onFail)) {
			opts.onFail();
		}

		return false;
	}

	// If user can close and set to remmember close, initiate cookie functions
	if (opts.close && opts.closeCookie) {
		// Local global setting for the name of the cookie used
		var COOKIE_NAME = 'jreject-close';

		// Cookies Function: Handles creating/retrieving/deleting cookies
		// Cookies are only used for opts.closeCookie parameter functionality
		var _cookie = function(name, value) {
			// Save cookie
			if (typeof value != 'undefined') {
				var expires = '';

				// Check if we need to set an expiration date
				if (opts.cookieSettings.expires !== 0) {
					var date = new Date();
					date.setTime(date.getTime()+(opts.cookieSettings.expires*1000));
					expires = "; expires="+date.toGMTString();
				}

				// Get path from settings
				var path = opts.cookieSettings.path || '/';

				// Set Cookie with parameters
				document.cookie = name+'='+
					encodeURIComponent((!value) ? '' : value)+expires+
					'; path='+path;

				return true;
			}
			// Get cookie
			else {
				var cookie,val = null;

				if (document.cookie && document.cookie !== '') {
					var cookies = document.cookie.split(';');

					// Loop through all cookie values
					var clen = cookies.length;
					for (var i = 0; i < clen; ++i) {
						cookie = $.trim(cookies[i]);

						// Does this cookie string begin with the name we want?
						if (cookie.substring(0,name.length+1) == (name+'=')) {
							var len = name.length;
							val = decodeURIComponent(cookie.substring(len+1));
							break;
						}
					}
				}

				// Returns cookie value
				return val;
			}
		};

		// If cookie is set, return false and don't display rejection
		if (_cookie(COOKIE_NAME)) {
			return false;
		}
	}

	// Load background overlay (jr_overlay) + Main wrapper (jr_wrap) +
	// Inner Wrapper (jr_inner) w/ opts.header (jr_header) +
	// opts.paragraph1/opts.paragraph2 if set
	var html = '<div id="jr_overlay"></div><div id="jr_wrap"><div id="jr_inner">'+
		'<h1 id="jr_header">'+opts.header+'</h1>'+
		(opts.paragraph1 === '' ? '' : '<p>'+opts.paragraph1+'</p>')+
		(opts.paragraph2 === '' ? '' : '<p>'+opts.paragraph2+'</p>');

	if (opts.browserShow) {
		html += '<ul>';

		var displayNum = 0;

		// Generate the browsers to display
		for (var x in opts.display) {
			var browser = opts.display[x]; // Current Browser
			var info = opts.browserInfo[browser] || false; // Browser Information

			// If no info exists for this browser
			// or if this browser is not suppose to display to this user
			if (!info || (info['allow'] != undefined && !browserCheck(info['allow']))) {
				continue;
			}

			var url = info.url || '#'; // URL to link text/icon to

			// Generate HTML for this browser option
			html += '<li id="jr_'+browser+'"><div class="jr_icon"></div>'+
					'<div><a href="'+url+'">'+(info.text || 'Unknown')+'</a>'+
					'</div></li>';

			++displayNum;
		}

		html += '</ul>';
	}

	// Close list and #jr_list
	html += '<div id="jr_close">'+
	// Display close links/message if set
	(opts.close ? '<a href="'+opts.closeURL+'">'+opts.closeLink+'</a>'+
		'<p>'+opts.closeMessage+'</p>' : '')+'</div>'+
	// Close #jr_inner and #jr_wrap
	'</div></div>';

	var element = $('<div>'+html+'</div>'); // Create element
	var size = _pageSize(); // Get page size
	var scroll = _scrollSize(); // Get page scroll

	// This function handles closing this reject window
	// When clicked, fadeOut and remove all elements
	element.bind('closejr', function() {
		// Make sure the permission to close is granted
		if (!opts.close) {
			return false;
		}

		// Customized Function
		if ($.isFunction(opts.beforeClose)) {
			opts.beforeClose();
		}

		// Remove binding function so it
		// doesn't get called more than once
		$(this).unbind('closejr');

		// Fade out background and modal wrapper
		$('#jr_overlay,#jr_wrap').fadeOut(opts.fadeOutTime,function() {
			$(this).remove(); // Remove element from DOM

			// afterClose: Customized Function
			if ($.isFunction(opts.afterClose)) {
				opts.afterClose();
			}
		});

		// Show elements that were hidden for layering issues
		var elmhide = 'embed.jr_hidden, object.jr_hidden, select.jr_hidden, applet.jr_hidden';
		$(elmhide).show().removeClass('jr_hidden');

		// Set close cookie for next run
		if (opts.closeCookie) {
			_cookie(COOKIE_NAME, 'true');
		}

		return true;
	});

	// Tracks clicks in Google Analytics (category 'External Links')
	// only if opts.analytics is enabled
	var analytics = function (url) {
		if (!opts.analytics) return false;

		// Get just the hostname
		var host = url.split(/\/+/g)[1];

		// Send external link event to Google Analaytics
		// Attempts both versions of analytics code. (Newest first)
		try {
			// Newest analytics code
			_gaq.push(['_trackEvent', 'External Links',  host, url]);
		} catch (e) {
			try {
				// Older analytics code
				pageTracker._trackEvent('External Links', host, url);
			} catch (e) { }
		}
	};

	// Called onClick for browser links (and icons)
	// Opens link in new window
	var openBrowserLinks = function(url) {
		// Send link to analytics if enabled
		analytics(url);

		// Open window, generate random id value
		window.open(url, 'jr_'+ Math.round(Math.random()*11));

		return false;
	};

	/*
	 * Trverse through element DOM and apply JS variables
	 * All CSS elements that do not require JS will be in
	 * css/jquery.jreject.css
	 */

	// Creates 'background' (div)
	element.find('#jr_overlay').css({
		width: size[0],
		height: size[1],
		background: opts.overlayBgColor,
		opacity: opts.overlayOpacity
	});

	// Wrapper for our pop-up (div)
	element.find('#jr_wrap').css({
		top: scroll[1]+(size[3]/4),
		left: scroll[0]
	});

	// Wrapper for inner centered content (div)
	element.find('#jr_inner').css({
		minWidth: displayNum*100,
		maxWidth: displayNum*140,
		// min/maxWidth not supported by IE
		width: $.layout.name == 'trident' ? displayNum*155 : 'auto'
	});

	element.find('#jr_inner li').css({ // Browser list items (li)
		background: 'transparent url("'+opts.imagePath+'background_browser.gif")'+
					'no-repeat scroll left top'
	});

	element.find('#jr_inner li .jr_icon').each(function() {
		// Dynamically sets the icon background image
		var self = $(this);
		self.css('background','transparent url('+opts.imagePath+'browser_'+
				(self.parent('li').attr('id').replace(/jr_/,''))+'.gif)'+
					' no-repeat scroll left top');

		// Send link clicks to openBrowserLinks
		self.click(function () {
			var url = $(this).next('div').children('a').attr('href');
			openBrowserLinks(url);
		});
	});

	element.find('#jr_inner li a').click(function() {
		openBrowserLinks($(this).attr('href'));
		return false;
	});

	// Bind closing event to trigger closejr
	// to be consistant with ESC key close function
	element.find('#jr_close a').click(function() {
		$(this).trigger('closejr');

		// If plain anchor is set, return false so there is no page jump
		if (opts.closeURL === '#') {
			return false;
		}
	});

	// Set focus (fixes ESC key issues with forms and other focus bugs)
	$('#jr_overlay').focus();

	// Hide elements that won't display properly
	$('embed, object, select, applet').each(function() {
		if ($(this).is(':visible')) {
			$(this).hide().addClass('jr_hidden');
		}
	});

	// Append element to body of document to display
	$('body').append(element.hide().fadeIn(opts.fadeInTime));

	// Handle window resize/scroll events and update overlay dimensions
	$(window).bind('resize scroll',function() {
		var size = _pageSize(); // Get size

		// Update overlay dimensions based on page size
		$('#jr_overlay').css({
			width: size[0],
			height: size[1]
		});

		var scroll = _scrollSize(); // Get page scroll

		// Update modal position based on scroll
		$('#jr_wrap').css({
			top: scroll[1] + (size[3]/4),
			left: scroll[0]
		});
	});

	// Add optional ESC Key functionality
	if (opts.closeESC) {
		$(document).bind('keydown',function(event) {
			// ESC = Keycode 27
			if (event.keyCode == 27) {
				element.trigger('closejr');
			}
		});
	}

	// afterReject: Customized Function
	if ($.isFunction(opts.afterReject)) {
		opts.afterReject();
	}

	return true;
};

// Based on compatibility data from quirksmode.com
var _pageSize = function() {
	var xScroll = window.innerWidth && window.scrollMaxX ?
				window.innerWidth + window.scrollMaxX :
				(document.body.scrollWidth > document.body.offsetWidth ?
				document.body.scrollWidth : document.body.offsetWidth);

	var yScroll = window.innerHeight && window.scrollMaxY ?
				window.innerHeight + window.scrollMaxY :
				(document.body.scrollHeight > document.body.offsetHeight ?
				document.body.scrollHeight : document.body.offsetHeight);

	var windowWidth = window.innerWidth ? window.innerWidth :
				(document.documentElement && document.documentElement.clientWidth ?
				document.documentElement.clientWidth : document.body.clientWidth);

	var windowHeight = window.innerHeight ? window.innerHeight :
				(document.documentElement && document.documentElement.clientHeight ?
				document.documentElement.clientHeight : document.body.clientHeight);

	return [
		xScroll < windowWidth ? xScroll : windowWidth, // Page Width
		yScroll < windowHeight ? windowHeight : yScroll, // Page Height
		windowWidth,windowHeight
	];
};


// Based on compatibility data from quirksmode.com
var _scrollSize = function() {
	return [
		// scrollSize X
		window.pageXOffset ? window.pageXOffset : (document.documentElement &&
				document.documentElement.scrollTop ?
				document.documentElement.scrollLeft : document.body.scrollLeft),

		// scrollSize Y
		window.pageYOffset ? window.pageYOffset : (document.documentElement &&
				document.documentElement.scrollTop ?
				document.documentElement.scrollTop : document.body.scrollTop)
	];
};
})(jQuery);

/*
 * jQuery Browser Plugin
 * Version 2.4 / jReject 1.0.x
 * URL: http://jquery.thewikies.com/browser
 * Description: jQuery Browser Plugin extends browser detection capabilities and
 * can assign browser selectors to CSS classes.
 * Author: Nate Cavanaugh, Minhchau Dang, Jonathan Neal, & Gregory Waxman
 * Updated By: Steven Bower for use with jReject plugin
 * Copyright: Copyright (c) 2008 Jonathan Neal under dual MIT/GPL license.
 */

(function ($) {
	$.browserTest = function (a, z) {
		var u = 'unknown',
			x = 'X',
			m = function (r, h) {
				for (var i = 0; i < h.length; i = i + 1) {
					r = r.replace(h[i][0], h[i][1]);
				}

				return r;
			}, c = function (i, a, b, c) {
				var r = {
					name: m((a.exec(i) || [u, u])[1], b)
				};

				r[r.name] = true;

				if (!r.opera) {
					r.version = (c.exec(i) || [x, x, x, x])[3];
				}
				else {
					r.version = window.opera.version();
				}

				if (/safari/.test(r.name)) {
					var safariversion = /(safari)(\/|\s)([a-z0-9\.\+]*?)(\;|dev|rel|\s|$)/;
					var res = safariversion.exec(i);
					if (res && res[3] && res[3] < 400) {
						r.version = '2.0';
					}
				}

				else if (r.name === 'presto') {
					r.version = ($.browser.version > 9.27) ? 'futhark' : 'linear_b';
				}

				r.versionNumber = parseFloat(r.version, 10) || 0;
				var minorStart = 1;

				if (r.versionNumber < 100 && r.versionNumber > 9) {
					minorStart = 2;
				}

				r.versionX = (r.version !== x) ? r.version.substr(0, minorStart) : x;
				r.className = r.name + r.versionX;

				return r;
			};

		a = (/Opera|Navigator|Minefield|KHTML|Chrome|CriOS/.test(a) ? m(a, [
			[/(Firefox|MSIE|KHTML,\slike\sGecko|Konqueror)/, ''],
			['Chrome Safari', 'Chrome'],
			['CriOS', 'Chrome'],
			['KHTML', 'Konqueror'],
			['Minefield', 'Firefox'],
			['Navigator', 'Netscape']
		]) : a).toLowerCase();

		$.browser = $.extend((!z) ? $.browser : {}, c(a,
			/(camino|chrome|crios|firefox|netscape|konqueror|lynx|msie|opera|safari)/,
			[],
			/(camino|chrome|crios|firefox|netscape|netscape6|opera|version|konqueror|lynx|msie|safari)(\/|\s)([a-z0-9\.\+]*?)(\;|dev|rel|\s|$)/));

		$.layout = c(a, /(gecko|konqueror|msie|opera|webkit)/, [
			['konqueror', 'khtml'],
			['msie', 'trident'],
			['opera', 'presto']
		], /(applewebkit|rv|konqueror|msie)(\:|\/|\s)([a-z0-9\.]*?)(\;|\)|\s)/);

		$.os = {
			name: (/(win|mac|linux|sunos|solaris|iphone|ipad)/.
					exec(navigator.platform.toLowerCase()) || [u])[0].replace('sunos', 'solaris')
		};

		if (!z) {
			$('html').addClass([$.os.name, $.browser.name, $.browser.className,
				$.layout.name, $.layout.className].join(' '));
		}
	};

	$.browserTest(navigator.userAgent);
}(jQuery));

/* =========================================================
 * bootstrap-datepicker.js
 * http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

!function( $ ) {

	function UTCDate(){
		return new Date(Date.UTC.apply(Date, arguments));
	}
	function UTCToday(){
		var today = new Date();
		return UTCDate(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
	}

	// Picker object

	var Datepicker = function(element, options) {
		var that = this;

		this._process_options(options);

		this.element = $(element);
		this.isInline = false;
		this.isInput = this.element.is('input');
		this.component = this.element.is('.date') ? this.element.find('.add-on, .btn') : false;
		this.hasInput = this.component && this.element.find('input').length;
		if(this.component && this.component.length === 0)
			this.component = false;

		this.picker = $(DPGlobal.template);
		this._buildEvents();
		this._attachEvents();

		if(this.isInline) {
			this.picker.addClass('datepicker-inline').appendTo(this.element);
		} else {
			this.picker.addClass('datepicker-dropdown dropdown-menu');
		}

		if (this.o.rtl){
			this.picker.addClass('datepicker-rtl');
			this.picker.find('.prev i, .next i')
						.toggleClass('icon-arrow-left icon-arrow-right');
		}


		this.viewMode = this.o.startView;

		if (this.o.calendarWeeks)
			this.picker.find('tfoot th.today')
						.attr('colspan', function(i, val){
							return parseInt(val) + 1;
						});

		this._allow_update = false;

		this.setStartDate(this.o.startDate);
		this.setEndDate(this.o.endDate);
		this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);

		this.fillDow();
		this.fillMonths();

		this._allow_update = true;

		this.update();
		this.showMode();

		if(this.isInline) {
			this.show();
		}
	};

	Datepicker.prototype = {
		constructor: Datepicker,

		_process_options: function(opts){
			// Store raw options for reference
			this._o = $.extend({}, this._o, opts);
			// Processed options
			var o = this.o = $.extend({}, this._o);

			// Check if "de-DE" style date is available, if not language should
			// fallback to 2 letter code eg "de"
			var lang = o.language;
			if (!dates[lang]) {
				lang = lang.split('-')[0];
				if (!dates[lang])
					lang = $.fn.datepicker.defaults.language;
			}
			o.language = lang;

			switch(o.startView){
				case 2:
				case 'decade':
					o.startView = 2;
					break;
				case 1:
				case 'year':
					o.startView = 1;
					break;
				default:
					o.startView = 0;
			}

			switch (o.minViewMode) {
				case 1:
				case 'months':
					o.minViewMode = 1;
					break;
				case 2:
				case 'years':
					o.minViewMode = 2;
					break;
				default:
					o.minViewMode = 0;
			}

			o.startView = Math.max(o.startView, o.minViewMode);

			o.weekStart %= 7;
			o.weekEnd = ((o.weekStart + 6) % 7);

			var format = DPGlobal.parseFormat(o.format)
			if (o.startDate !== -Infinity) {
				o.startDate = DPGlobal.parseDate(o.startDate, format, o.language);
			}
			if (o.endDate !== Infinity) {
				o.endDate = DPGlobal.parseDate(o.endDate, format, o.language);
			}

			o.daysOfWeekDisabled = o.daysOfWeekDisabled||[];
			if (!$.isArray(o.daysOfWeekDisabled))
				o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/);
			o.daysOfWeekDisabled = $.map(o.daysOfWeekDisabled, function (d) {
				return parseInt(d, 10);
			});
		},
		_events: [],
		_secondaryEvents: [],
		_applyEvents: function(evs){
			for (var i=0, el, ev; i<evs.length; i++){
				el = evs[i][0];
				ev = evs[i][1];
				el.on(ev);
			}
		},
		_unapplyEvents: function(evs){
			for (var i=0, el, ev; i<evs.length; i++){
				el = evs[i][0];
				ev = evs[i][1];
				el.off(ev);
			}
		},
		_buildEvents: function(){
			if (this.isInput) { // single input
				this._events = [
					[this.element, {
						focus: $.proxy(this.show, this),
						keyup: $.proxy(this.update, this),
						keydown: $.proxy(this.keydown, this)
					}]
				];
			}
			else if (this.component && this.hasInput){ // component: input + button
				this._events = [
					// For components that are not readonly, allow keyboard nav
					[this.element.find('input'), {
						focus: $.proxy(this.show, this),
						keyup: $.proxy(this.update, this),
						keydown: $.proxy(this.keydown, this)
					}],
					[this.component, {
						click: $.proxy(this.show, this)
					}]
				];
			}
			else if (this.element.is('div')) {  // inline datepicker
				this.isInline = true;
			}
			else {
				this._events = [
					[this.element, {
						click: $.proxy(this.show, this)
					}]
				];
			}

			this._secondaryEvents = [
				[this.picker, {
					click: $.proxy(this.click, this)
				}],
				[$(window), {
					resize: $.proxy(this.place, this)
				}],
				[$(document), {
					mousedown: $.proxy(function (e) {
						// Clicked outside the datepicker, hide it
						if (!(
							this.element.is(e.target) ||
							this.element.find(e.target).size() ||
							this.picker.is(e.target) ||
							this.picker.find(e.target).size()
						)) {
							this.hide();
						}
					}, this)
				}]
			];
		},
		_attachEvents: function(){
			this._detachEvents();
			this._applyEvents(this._events);
		},
		_detachEvents: function(){
			this._unapplyEvents(this._events);
		},
		_attachSecondaryEvents: function(){
			this._detachSecondaryEvents();
			this._applyEvents(this._secondaryEvents);
		},
		_detachSecondaryEvents: function(){
			this._unapplyEvents(this._secondaryEvents);
		},
		_trigger: function(event, altdate){
			var date = altdate || this.date,
				local_date = new Date(date.getTime() + (date.getTimezoneOffset()*60000));

			this.element.trigger({
				type: event,
				date: local_date,
				format: $.proxy(function(altformat){
					var format = altformat || this.o.format;
					return DPGlobal.formatDate(date, format, this.language);
				}, this)
			});
		},

		show: function(e) {
			if (!this.isInline)
				this.picker.appendTo('body');
			this.picker.show();
			this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
			this.place();
			this._attachSecondaryEvents();
			if (e) {
				e.preventDefault();
			}
			this._trigger('show');
		},

		hide: function(e){
			if(this.isInline) return;
			if (!this.picker.is(':visible')) return;
			this.picker.hide().detach();
			this._detachSecondaryEvents();
			this.viewMode = this.o.startView;
			this.showMode();

			if (
				this.o.forceParse &&
				(
					this.isInput && this.element.val() ||
					this.hasInput && this.element.find('input').val()
				)
			)
				this.setValue();
			this._trigger('hide');
		},

		remove: function() {
			this.hide();
			this._detachEvents();
			this._detachSecondaryEvents();
			this.picker.remove();
			delete this.element.data().datepicker;
			if (!this.isInput) {
				delete this.element.data().date;
			}
		},

		getDate: function() {
			var d = this.getUTCDate();
			return new Date(d.getTime() + (d.getTimezoneOffset()*60000));
		},

		getUTCDate: function() {
			return this.date;
		},

		setDate: function(d) {
			this.setUTCDate(new Date(d.getTime() - (d.getTimezoneOffset()*60000)));
		},

		setUTCDate: function(d) {
			this.date = d;
			this.setValue();
		},

		setValue: function() {
			var formatted = this.getFormattedDate();
			if (!this.isInput) {
				if (this.component){
					this.element.find('input').val(formatted);
				}
			} else {
				this.element.val(formatted);
			}
		},

		getFormattedDate: function(format) {
			if (format === undefined)
				format = this.o.format;
			return DPGlobal.formatDate(this.date, format, this.o.language);
		},

		setStartDate: function(startDate){
			this._process_options({startDate: startDate});
			this.update();
			this.updateNavArrows();
		},

		setEndDate: function(endDate){
			this._process_options({endDate: endDate});
			this.update();
			this.updateNavArrows();
		},

		setDaysOfWeekDisabled: function(daysOfWeekDisabled){
			this._process_options({daysOfWeekDisabled: daysOfWeekDisabled});
			this.update();
			this.updateNavArrows();
		},

		place: function(){
						if(this.isInline) return;
			var zIndex = parseInt(this.element.parents().filter(function() {
							return $(this).css('z-index') != 'auto';
						}).first().css('z-index'))+10;
			var offset = this.component ? this.component.parent().offset() : this.element.offset();
			var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(true);
			this.picker.css({
				top: offset.top + height,
				left: offset.left,
				zIndex: zIndex
			});
		},

		_allow_update: true,
		update: function(){
			if (!this._allow_update) return;

			var date, fromArgs = false;
			if(arguments && arguments.length && (typeof arguments[0] === 'string' || arguments[0] instanceof Date)) {
				date = arguments[0];
				fromArgs = true;
			} else {
				date = this.isInput ? this.element.val() : this.element.data('date') || this.element.find('input').val();
				delete this.element.data().date;
			}

			this.date = DPGlobal.parseDate(date, this.o.format, this.o.language);

			if(fromArgs) this.setValue();

			if (this.date < this.o.startDate) {
				this.viewDate = new Date(this.o.startDate);
			} else if (this.date > this.o.endDate) {
				this.viewDate = new Date(this.o.endDate);
			} else {
				this.viewDate = new Date(this.date);
			}
			this.fill();
		},

		fillDow: function(){
			var dowCnt = this.o.weekStart,
			html = '<tr>';
			if(this.o.calendarWeeks){
				var cell = '<th class="cw">&nbsp;</th>';
				html += cell;
				this.picker.find('.datepicker-days thead tr:first-child').prepend(cell);
			}
			while (dowCnt < this.o.weekStart + 7) {
				html += '<th class="dow">'+dates[this.o.language].daysMin[(dowCnt++)%7]+'</th>';
			}
			html += '</tr>';
			this.picker.find('.datepicker-days thead').append(html);
		},

		fillMonths: function(){
			var html = '',
			i = 0;
			while (i < 12) {
				html += '<span class="month">'+dates[this.o.language].monthsShort[i++]+'</span>';
			}
			this.picker.find('.datepicker-months td').html(html);
		},

		setRange: function(range){
			if (!range || !range.length)
				delete this.range;
			else
				this.range = $.map(range, function(d){ return d.valueOf(); });
			this.fill();
		},

		getClassNames: function(date){
			var cls = [],
				year = this.viewDate.getUTCFullYear(),
				month = this.viewDate.getUTCMonth(),
				currentDate = this.date.valueOf(),
				today = new Date();
			if (date.getUTCFullYear() < year || (date.getUTCFullYear() == year && date.getUTCMonth() < month)) {
				cls.push('old');
			} else if (date.getUTCFullYear() > year || (date.getUTCFullYear() == year && date.getUTCMonth() > month)) {
				cls.push('new');
			}
			// Compare internal UTC date with local today, not UTC today
			if (this.o.todayHighlight &&
				date.getUTCFullYear() == today.getFullYear() &&
				date.getUTCMonth() == today.getMonth() &&
				date.getUTCDate() == today.getDate()) {
				cls.push('today');
			}
			if (currentDate && date.valueOf() == currentDate) {
				cls.push('active');
			}
			if (date.valueOf() < this.o.startDate || date.valueOf() > this.o.endDate ||
				$.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1) {
				cls.push('disabled');
			}
			if (this.range){
				if (date > this.range[0] && date < this.range[this.range.length-1]){
					cls.push('range');
				}
				if ($.inArray(date.valueOf(), this.range) != -1){
					cls.push('selected');
				}
			}
			return cls;
		},

		fill: function() {
			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth(),
				startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
				startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
				endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
				endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
				currentDate = this.date && this.date.valueOf(),
				tooltip;
			this.picker.find('.datepicker-days thead th.datepicker-switch')
						.text(dates[this.o.language].months[month]+' '+year);
			this.picker.find('tfoot th.today')
						.text(dates[this.o.language].today)
						.toggle(this.o.todayBtn !== false);
			this.picker.find('tfoot th.clear')
						.text(dates[this.o.language].clear)
						.toggle(this.o.clearBtn !== false);
			this.updateNavArrows();
			this.fillMonths();
			var prevMonth = UTCDate(year, month-1, 28,0,0,0,0),
				day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
			prevMonth.setUTCDate(day);
			prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7)%7);
			var nextMonth = new Date(prevMonth);
			nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
			nextMonth = nextMonth.valueOf();
			var html = [];
			var clsName;
			while(prevMonth.valueOf() < nextMonth) {
				if (prevMonth.getUTCDay() == this.o.weekStart) {
					html.push('<tr>');
					if(this.o.calendarWeeks){
						// ISO 8601: First week contains first thursday.
						// ISO also states week starts on Monday, but we can be more abstract here.
						var
							// Start of current week: based on weekstart/current date
							ws = new Date(+prevMonth + (this.o.weekStart - prevMonth.getUTCDay() - 7) % 7 * 864e5),
							// Thursday of this week
							th = new Date(+ws + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
							// First Thursday of year, year from thursday
							yth = new Date(+(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay())%7*864e5),
							// Calendar week: ms between thursdays, div ms per day, div 7 days
							calWeek =  (th - yth) / 864e5 / 7 + 1;
						html.push('<td class="cw">'+ calWeek +'</td>');

					}
				}
				clsName = this.getClassNames(prevMonth);
				clsName.push('day');

				var before = this.o.beforeShowDay(prevMonth);
				if (before === undefined)
					before = {};
				else if (typeof(before) === 'boolean')
					before = {enabled: before};
				else if (typeof(before) === 'string')
					before = {classes: before};
				if (before.enabled === false)
					clsName.push('disabled');
				if (before.classes)
					clsName = clsName.concat(before.classes.split(/\s+/));
				if (before.tooltip)
					tooltip = before.tooltip;

				clsName = $.unique(clsName);
				html.push('<td class="'+clsName.join(' ')+'"' + (tooltip ? ' title="'+tooltip+'"' : '') + '>'+prevMonth.getUTCDate() + '</td>');
				if (prevMonth.getUTCDay() == this.o.weekEnd) {
					html.push('</tr>');
				}
				prevMonth.setUTCDate(prevMonth.getUTCDate()+1);
			}
			this.picker.find('.datepicker-days tbody').empty().append(html.join(''));
			var currentYear = this.date && this.date.getUTCFullYear();

			var months = this.picker.find('.datepicker-months')
						.find('th:eq(1)')
							.text(year)
							.end()
						.find('span').removeClass('active');
			if (currentYear && currentYear == year) {
				months.eq(this.date.getUTCMonth()).addClass('active');
			}
			if (year < startYear || year > endYear) {
				months.addClass('disabled');
			}
			if (year == startYear) {
				months.slice(0, startMonth).addClass('disabled');
			}
			if (year == endYear) {
				months.slice(endMonth+1).addClass('disabled');
			}

			html = '';
			year = parseInt(year/10, 10) * 10;
			var yearCont = this.picker.find('.datepicker-years')
								.find('th:eq(1)')
									.text(year + '-' + (year + 9))
									.end()
								.find('td');
			year -= 1;
			for (var i = -1; i < 11; i++) {
				html += '<span class="year'+(i == -1 ? ' old' : i == 10 ? ' new' : '')+(currentYear == year ? ' active' : '')+(year < startYear || year > endYear ? ' disabled' : '')+'">'+year+'</span>';
				year += 1;
			}
			yearCont.html(html);
		},

		updateNavArrows: function() {
			if (!this._allow_update) return;

			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth();
			switch (this.viewMode) {
				case 0:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() && month <= this.o.startDate.getUTCMonth()) {
						this.picker.find('.prev').css({visibility: 'hidden'});
					} else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() && month >= this.o.endDate.getUTCMonth()) {
						this.picker.find('.next').css({visibility: 'hidden'});
					} else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
				case 1:
				case 2:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear()) {
						this.picker.find('.prev').css({visibility: 'hidden'});
					} else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear()) {
						this.picker.find('.next').css({visibility: 'hidden'});
					} else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
			}
		},

		click: function(e) {
			e.preventDefault();
			var target = $(e.target).closest('span, td, th');
			if (target.length == 1) {
				switch(target[0].nodeName.toLowerCase()) {
					case 'th':
						switch(target[0].className) {
							case 'datepicker-switch':
								this.showMode(1);
								break;
							case 'prev':
							case 'next':
								var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className == 'prev' ? -1 : 1);
								switch(this.viewMode){
									case 0:
										this.viewDate = this.moveMonth(this.viewDate, dir);
										break;
									case 1:
									case 2:
										this.viewDate = this.moveYear(this.viewDate, dir);
										break;
								}
								this.fill();
								break;
							case 'today':
								var date = new Date();
								date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);

								this.showMode(-2);
								var which = this.o.todayBtn == 'linked' ? null : 'view';
								this._setDate(date, which);
								break;
							case 'clear':
								if (this.isInput)
									this.element.val("");
								else
									this.element.find('input').val("");
								this.update();
								if (this.o.autoclose)
									this.hide();
								break;
						}
						break;
					case 'span':
						if (!target.is('.disabled')) {
							this.viewDate.setUTCDate(1);
							if (target.is('.month')) {
								var day = 1;
								var month = target.parent().find('span').index(target);
								var year = this.viewDate.getUTCFullYear();
								this.viewDate.setUTCMonth(month);
								this._trigger('changeMonth', this.viewDate);
								if (this.o.minViewMode === 1) {
									this._setDate(UTCDate(year, month, day,0,0,0,0));
								}
							} else {
								var year = parseInt(target.text(), 10)||0;
								var day = 1;
								var month = 0;
								this.viewDate.setUTCFullYear(year);
								this._trigger('changeYear', this.viewDate);
								if (this.o.minViewMode === 2) {
									this._setDate(UTCDate(year, month, day,0,0,0,0));
								}
							}
							this.showMode(-1);
							this.fill();
						}
						break;
					case 'td':
						if (target.is('.day') && !target.is('.disabled')){
							var day = parseInt(target.text(), 10)||1;
							var year = this.viewDate.getUTCFullYear(),
								month = this.viewDate.getUTCMonth();
							if (target.is('.old')) {
								if (month === 0) {
									month = 11;
									year -= 1;
								} else {
									month -= 1;
								}
							} else if (target.is('.new')) {
								if (month == 11) {
									month = 0;
									year += 1;
								} else {
									month += 1;
								}
							}
							this._setDate(UTCDate(year, month, day,0,0,0,0));
						}
						break;
				}
			}
		},

		_setDate: function(date, which){
			if (!which || which == 'date')
				this.date = new Date(date);
			if (!which || which  == 'view')
				this.viewDate = new Date(date);
			this.fill();
			this.setValue();
			this._trigger('changeDate');
			var element;
			if (this.isInput) {
				element = this.element;
			} else if (this.component){
				element = this.element.find('input');
			}
			if (element) {
				element.change();
				if (this.o.autoclose && (!which || which == 'date')) {
					this.hide();
				}
			}
		},

		moveMonth: function(date, dir){
			if (!dir) return date;
			var new_date = new Date(date.valueOf()),
				day = new_date.getUTCDate(),
				month = new_date.getUTCMonth(),
				mag = Math.abs(dir),
				new_month, test;
			dir = dir > 0 ? 1 : -1;
			if (mag == 1){
				test = dir == -1
					// If going back one month, make sure month is not current month
					// (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
					? function(){ return new_date.getUTCMonth() == month; }
					// If going forward one month, make sure month is as expected
					// (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
					: function(){ return new_date.getUTCMonth() != new_month; };
				new_month = month + dir;
				new_date.setUTCMonth(new_month);
				// Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
				if (new_month < 0 || new_month > 11)
					new_month = (new_month + 12) % 12;
			} else {
				// For magnitudes >1, move one month at a time...
				for (var i=0; i<mag; i++)
					// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
					new_date = this.moveMonth(new_date, dir);
				// ...then reset the day, keeping it in the new month
				new_month = new_date.getUTCMonth();
				new_date.setUTCDate(day);
				test = function(){ return new_month != new_date.getUTCMonth(); };
			}
			// Common date-resetting loop -- if date is beyond end of month, make it
			// end of month
			while (test()){
				new_date.setUTCDate(--day);
				new_date.setUTCMonth(new_month);
			}
			return new_date;
		},

		moveYear: function(date, dir){
			return this.moveMonth(date, dir*12);
		},

		dateWithinRange: function(date){
			return date >= this.o.startDate && date <= this.o.endDate;
		},

		keydown: function(e){
			if (this.picker.is(':not(:visible)')){
				if (e.keyCode == 27) // allow escape to hide and re-show picker
					this.show();
				return;
			}
			var dateChanged = false,
				dir, day, month,
				newDate, newViewDate;
			switch(e.keyCode){
				case 27: // escape
					this.hide();
					e.preventDefault();
					break;
				case 37: // left
				case 39: // right
					if (!this.o.keyboardNavigation) break;
					dir = e.keyCode == 37 ? -1 : 1;
					if (e.ctrlKey){
						newDate = this.moveYear(this.date, dir);
						newViewDate = this.moveYear(this.viewDate, dir);
					} else if (e.shiftKey){
						newDate = this.moveMonth(this.date, dir);
						newViewDate = this.moveMonth(this.viewDate, dir);
					} else {
						newDate = new Date(this.date);
						newDate.setUTCDate(this.date.getUTCDate() + dir);
						newViewDate = new Date(this.viewDate);
						newViewDate.setUTCDate(this.viewDate.getUTCDate() + dir);
					}
					if (this.dateWithinRange(newDate)){
						this.date = newDate;
						this.viewDate = newViewDate;
						this.setValue();
						this.update();
						e.preventDefault();
						dateChanged = true;
					}
					break;
				case 38: // up
				case 40: // down
					if (!this.o.keyboardNavigation) break;
					dir = e.keyCode == 38 ? -1 : 1;
					if (e.ctrlKey){
						newDate = this.moveYear(this.date, dir);
						newViewDate = this.moveYear(this.viewDate, dir);
					} else if (e.shiftKey){
						newDate = this.moveMonth(this.date, dir);
						newViewDate = this.moveMonth(this.viewDate, dir);
					} else {
						newDate = new Date(this.date);
						newDate.setUTCDate(this.date.getUTCDate() + dir * 7);
						newViewDate = new Date(this.viewDate);
						newViewDate.setUTCDate(this.viewDate.getUTCDate() + dir * 7);
					}
					if (this.dateWithinRange(newDate)){
						this.date = newDate;
						this.viewDate = newViewDate;
						this.setValue();
						this.update();
						e.preventDefault();
						dateChanged = true;
					}
					break;
				case 13: // enter
					this.hide();
					e.preventDefault();
					break;
				case 9: // tab
					this.hide();
					break;
			}
			if (dateChanged){
				this._trigger('changeDate');
				var element;
				if (this.isInput) {
					element = this.element;
				} else if (this.component){
					element = this.element.find('input');
				}
				if (element) {
					element.change();
				}
			}
		},

		showMode: function(dir) {
			if (dir) {
				this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + dir));
			}
			/*
				vitalets: fixing bug of very special conditions:
				jquery 1.7.1 + webkit + show inline datepicker in bootstrap popover.
				Method show() does not set display css correctly and datepicker is not shown.
				Changed to .css('display', 'block') solve the problem.
				See https://github.com/vitalets/x-editable/issues/37

				In jquery 1.7.2+ everything works fine.
			*/
			//this.picker.find('>div').hide().filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName).show();
			this.picker.find('>div').hide().filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName).css('display', 'block');
			this.updateNavArrows();
		}
	};

	var DateRangePicker = function(element, options){
		this.element = $(element);
		this.inputs = $.map(options.inputs, function(i){ return i.jquery ? i[0] : i; });
		delete options.inputs;

		$(this.inputs)
			.datepicker(options)
			.bind('changeDate', $.proxy(this.dateUpdated, this));

		this.pickers = $.map(this.inputs, function(i){ return $(i).data('datepicker'); });
		this.updateDates();
	};
	DateRangePicker.prototype = {
		updateDates: function(){
			this.dates = $.map(this.pickers, function(i){ return i.date; });
			this.updateRanges();
		},
		updateRanges: function(){
			var range = $.map(this.dates, function(d){ return d.valueOf(); });
			$.each(this.pickers, function(i, p){
				p.setRange(range);
			});
		},
		dateUpdated: function(e){
			var dp = $(e.target).data('datepicker'),
				new_date = dp.getUTCDate(),
				i = $.inArray(e.target, this.inputs),
				l = this.inputs.length;
			if (i == -1) return;

			if (new_date < this.dates[i]){
				// Date being moved earlier/left
				while (i>=0 && new_date < this.dates[i]){
					this.pickers[i--].setUTCDate(new_date);
				}
			}
			else if (new_date > this.dates[i]){
				// Date being moved later/right
				while (i<l && new_date > this.dates[i]){
					this.pickers[i++].setUTCDate(new_date);
				}
			}
			this.updateDates();
		},
		remove: function(){
			$.map(this.pickers, function(p){ p.remove(); });
			delete this.element.data().datepicker;
		}
	};

	function opts_from_el(el, prefix){
		// Derive options from element data-attrs
		var data = $(el).data(),
			out = {}, inkey,
			replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])'),
			prefix = new RegExp('^' + prefix.toLowerCase());
		for (var key in data)
			if (prefix.test(key)){
				inkey = key.replace(replace, function(_,a){ return a.toLowerCase(); });
				out[inkey] = data[key];
			}
		return out;
	}

	function opts_from_locale(lang){
		// Derive options from locale plugins
		var out = {};
		// Check if "de-DE" style date is available, if not language should
		// fallback to 2 letter code eg "de"
		if (!dates[lang]) {
			lang = lang.split('-')[0]
			if (!dates[lang])
				return;
		}
		var d = dates[lang];
		$.each($.fn.datepicker.locale_opts, function(i,k){
			if (k in d)
				out[k] = d[k];
		});
		return out;
	}

	var old = $.fn.datepicker;
	$.fn.datepicker = function ( option ) {
		var args = Array.apply(null, arguments);
		args.shift();
		var internal_return,
			this_return;
		this.each(function () {
			var $this = $(this),
				data = $this.data('datepicker'),
				options = typeof option == 'object' && option;
			if (!data) {
				var elopts = opts_from_el(this, 'date'),
					// Preliminary otions
					xopts = $.extend({}, $.fn.datepicker.defaults, elopts, options),
					locopts = opts_from_locale(xopts.language),
					// Options priority: js args, data-attrs, locales, defaults
					opts = $.extend({}, $.fn.datepicker.defaults, locopts, elopts, options);
				if ($this.is('.input-daterange') || opts.inputs){
					var ropts = {
						inputs: opts.inputs || $this.find('input').toArray()
					};
					$this.data('datepicker', (data = new DateRangePicker(this, $.extend(opts, ropts))));
				}
				else{
					$this.data('datepicker', (data = new Datepicker(this, opts)));
				}
			}
			if (typeof option == 'string' && typeof data[option] == 'function') {
				internal_return = data[option].apply(data, args);
				if (internal_return !== undefined)
					return false;
			}
		});
		if (internal_return !== undefined)
			return internal_return;
		else
			return this;
	};

	$.fn.datepicker.defaults = {
		autoclose: false,
		beforeShowDay: $.noop,
		calendarWeeks: false,
		clearBtn: false,
		daysOfWeekDisabled: [],
		endDate: Infinity,
		forceParse: true,
		format: 'mm/dd/yyyy',
		keyboardNavigation: true,
		language: 'en',
		minViewMode: 0,
		rtl: false,
		startDate: -Infinity,
		startView: 0,
		todayBtn: false,
		todayHighlight: false,
		weekStart: 0
	};
	$.fn.datepicker.locale_opts = [
		'format',
		'rtl',
		'weekStart'
	];
	$.fn.datepicker.Constructor = Datepicker;
	var dates = $.fn.datepicker.dates = {
		en: {
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			today: "Today",
			clear: "Clear"
		}
	};

	var DPGlobal = {
		modes: [
			{
				clsName: 'days',
				navFnc: 'Month',
				navStep: 1
			},
			{
				clsName: 'months',
				navFnc: 'FullYear',
				navStep: 1
			},
			{
				clsName: 'years',
				navFnc: 'FullYear',
				navStep: 10
		}],
		isLeapYear: function (year) {
			return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
		},
		getDaysInMonth: function (year, month) {
			return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
		},
		validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
		nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
		parseFormat: function(format){
			// IE treats \0 as a string end in inputs (truncating the value),
			// so it's a bad format delimiter, anyway
			var separators = format.replace(this.validParts, '\0').split('\0'),
				parts = format.match(this.validParts);
			if (!separators || !separators.length || !parts || parts.length === 0){
				throw new Error("Invalid date format.");
			}
			return {separators: separators, parts: parts};
		},
		parseDate: function(date, format, language) {
			if (date instanceof Date) return date;
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)) {
				var part_re = /([\-+]\d+)([dmwy])/,
					parts = date.match(/([\-+]\d+)([dmwy])/g),
					part, dir;
				date = new Date();
				for (var i=0; i<parts.length; i++) {
					part = part_re.exec(parts[i]);
					dir = parseInt(part[1]);
					switch(part[2]){
						case 'd':
							date.setUTCDate(date.getUTCDate() + dir);
							break;
						case 'm':
							date = Datepicker.prototype.moveMonth.call(Datepicker.prototype, date, dir);
							break;
						case 'w':
							date.setUTCDate(date.getUTCDate() + dir * 7);
							break;
						case 'y':
							date = Datepicker.prototype.moveYear.call(Datepicker.prototype, date, dir);
							break;
					}
				}
				return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0);
			}
			var parts = date && date.match(this.nonpunctuation) || [],
				date = new Date(),
				parsed = {},
				setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
				setters_map = {
					yyyy: function(d,v){ return d.setUTCFullYear(v); },
					yy: function(d,v){ return d.setUTCFullYear(2000+v); },
					m: function(d,v){
						v -= 1;
						while (v<0) v += 12;
						v %= 12;
						d.setUTCMonth(v);
						while (d.getUTCMonth() != v)
							d.setUTCDate(d.getUTCDate()-1);
						return d;
					},
					d: function(d,v){ return d.setUTCDate(v); }
				},
				val, filtered, part;
			setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
			setters_map['dd'] = setters_map['d'];
			date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
			var fparts = format.parts.slice();
			// Remove noop parts
			if (parts.length != fparts.length) {
				fparts = $(fparts).filter(function(i,p){
					return $.inArray(p, setters_order) !== -1;
				}).toArray();
			}
			// Process remainder
			if (parts.length == fparts.length) {
				for (var i=0, cnt = fparts.length; i < cnt; i++) {
					val = parseInt(parts[i], 10);
					part = fparts[i];
					if (isNaN(val)) {
						switch(part) {
							case 'MM':
								filtered = $(dates[language].months).filter(function(){
									var m = this.slice(0, parts[i].length),
										p = parts[i].slice(0, m.length);
									return m == p;
								});
								val = $.inArray(filtered[0], dates[language].months) + 1;
								break;
							case 'M':
								filtered = $(dates[language].monthsShort).filter(function(){
									var m = this.slice(0, parts[i].length),
										p = parts[i].slice(0, m.length);
									return m == p;
								});
								val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
								break;
						}
					}
					parsed[part] = val;
				}
				for (var i=0, s; i<setters_order.length; i++){
					s = setters_order[i];
					if (s in parsed && !isNaN(parsed[s]))
						setters_map[s](date, parsed[s]);
				}
			}
			return date;
		},
		formatDate: function(date, format, language){
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			var val = {
				d: date.getUTCDate(),
				D: dates[language].daysShort[date.getUTCDay()],
				DD: dates[language].days[date.getUTCDay()],
				m: date.getUTCMonth() + 1,
				M: dates[language].monthsShort[date.getUTCMonth()],
				MM: dates[language].months[date.getUTCMonth()],
				yy: date.getUTCFullYear().toString().substring(2),
				yyyy: date.getUTCFullYear()
			};
			val.dd = (val.d < 10 ? '0' : '') + val.d;
			val.mm = (val.m < 10 ? '0' : '') + val.m;
			var date = [],
				seps = $.extend([], format.separators);
			for (var i=0, cnt = format.parts.length; i <= cnt; i++) {
				if (seps.length)
					date.push(seps.shift());
				date.push(val[format.parts[i]]);
			}
			return date.join('');
		},
		headTemplate: '<thead>'+
							'<tr>'+
								'<th class="prev"><i class="icon-angle-left"/></th>'+
								'<th colspan="5" class="datepicker-switch"></th>'+
								'<th class="next"><i class="icon-angle-right"/></th>'+
							'</tr>'+
						'</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
		footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
	};
	DPGlobal.template = '<div class="datepicker">'+
							'<div class="datepicker-days">'+
								'<table class=" table-condensed">'+
									DPGlobal.headTemplate+
									'<tbody></tbody>'+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-months">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-years">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
						'</div>';

	$.fn.datepicker.DPGlobal = DPGlobal;


	/* DATEPICKER NO CONFLICT
	* =================== */

	$.fn.datepicker.noConflict = function(){
		$.fn.datepicker = old;
		return this;
	};


	/* DATEPICKER DATA-API
	* ================== */

	$(document).on(
		'focus.datepicker.data-api click.datepicker.data-api',
		'[data-provide="datepicker"]',
		function(e){
			var $this = $(this);
			if ($this.data('datepicker')) return;
			e.preventDefault();
			// component click requires us to explicitly show it
			$this.datepicker('show');
		}
	);
	$(function(){
		$('[data-provide="datepicker-inline"]').datepicker();
	});

}( window.jQuery );
