!function(e){function t(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="build/",t(t.s=6)}([function(e,t,n){"use strict";"use_strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=function(){function e(){a(this,e)}return o(e,null,[{key:"addClass",value:function(e,t){e.classList.add(t)}},{key:"addClasses",value:function(e,t){var n=this;t.forEach(function(t){return n.addClass(e,t)})}},{key:"dropClass",value:function(e,t){e.classList.remove(t)}},{key:"dropClasses",value:function(e,t){var n=this;t.forEach(function(t){return n.dropClass(e,t)})}},{key:"hasClass",value:function(e,t){return e.classList.contains(t)}},{key:"toggleClass",value:function(e,t){e.classList.toggle(t)}},{key:"getElementByClass",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return document.getElementsByClassName(e)[t]}},{key:"getSectionInViewport",value:function(){for(var e=window.innerHeight,t=document.getElementsByTagName("section").length,n=document.getElementById("projects").getBoundingClientRect().top,a=0;a<t;a++){var o=a+1;if(n<=(t-a)*e&&n>=(t-o)*e-e/2)return a}}}]),e}();t.default=r},function(e,t,n){"use strict";"use_strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(r),u=function(){function e(){a(this,e)}return o(e,null,[{key:"animateArrow",value:function(){var e=i.default.getSectionInViewport(),t=i.default.getElementByClass("links").children,n=t[e].id.split("-")[0],a=i.default.getElementByClass("arrow");if(!i.default.hasClass(a,"arrow-"+n)){for(var o=a.className.split(" "),r=0;r<o.length;r++)"arrow"!==o[r]&&o[r].indexOf("arrow")>=0&&i.default.dropClass(a,o[r]);i.default.addClass(a,"arrow-"+n)}}},{key:"animateIconOverlay",value:function(){var e=i.default.getSectionInViewport(),t=[1,0,2],n=i.default.getElementByClass("menu").getElementsByClassName("icon-wrap"),a=n[t[e]];if(!i.default.hasClass(a,"focused")){if(a.id===n[1].id)return i.default.dropClass(n[0],"focused"),void i.default.dropClass(n[2],"focused");i.default.addClass(a,"focused");for(var o=0;o<n.length;o++)n[o]!==a&&"about-icon"!==n[o].id&&i.default.dropClass(n[o],"focused")}}}]),e}();t.default=u},function(e,t,n){"use strict";"use_strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(r),u=function(){function e(){a(this,e)}return o(e,null,[{key:"bindIcons",value:function(){for(var e=i.default.getElementByClass("menu").getElementsByClassName("icon-wrap"),t=0;t<e.length;t++)!function(t){e[t].onclick=function(){var n=e[t].id.split("-")[0],a=document.getElementById(n).offsetTop;window.scroll(0,a)}}(t)}},{key:"bindLinks",value:function(){for(var e=i.default.getElementByClass("links").children,t=this,n=0;n<e.length;n++)e[n].onclick=function(){t.scrollToSection(this.id.split("-")[0])}}},{key:"scrollToSection",value:function(e){function t(e){var l=(e-a)/r,s=void 0;if((s=u?n-l*i*-1:n+l*i)<=o&&u||s>=o&&!u)return void(s!==o&&window.scroll(0,o));window.scroll(0,s),window.requestAnimationFrame(t)}var n=window.pageYOffset,a=window.performance.now(),o=document.getElementById(e).offsetTop,r=250,i=o-n,u=i<0;window.requestAnimationFrame(t)}}]),e}();t.default=u},function(e,t){},function(e,t,n){e.exports=n.p+"assets/img/icon/defs.svg"},function(e,t,n){(function(n){var a,o;(function(){!function(n,r){a=[],void 0!==(o=function(){return n.svg4everybody=r()}.apply(t,a))&&(e.exports=o)}(this,function(){/*! svg4everybody v2.1.8 | github.com/jonathantneal/svg4everybody */
function e(e,t,n){if(n){var a=document.createDocumentFragment(),o=!t.hasAttribute("viewBox")&&n.getAttribute("viewBox");o&&t.setAttribute("viewBox",o);for(var r=n.cloneNode(!0);r.childNodes.length;)a.appendChild(r.firstChild);e.appendChild(a)}}function t(t){t.onreadystatechange=function(){if(4===t.readyState){var n=t._cachedDocument;n||(n=t._cachedDocument=document.implementation.createHTMLDocument(""),n.body.innerHTML=t.responseText,t._cachedTarget={}),t._embeds.splice(0).map(function(a){var o=t._cachedTarget[a.id];o||(o=t._cachedTarget[a.id]=n.getElementById(a.id)),e(a.parent,a.svg,o)})}},t.onreadystatechange()}function n(n){function o(){for(var n=0;n<d.length;){var u=d[n],l=u.parentNode,s=a(l);if(s){var g=u.getAttribute("xlink:href")||u.getAttribute("href");if(!g&&i.attributeName&&(g=u.getAttribute(i.attributeName)),r)if(!i.validate||i.validate(g,s,u)){l.removeChild(u);var m=g.split("#"),p=m.shift(),y=m.join("#");if(p.length){var h=c[p];h||(h=c[p]=new XMLHttpRequest,h.open("GET",p),h.send(),h._embeds=[]),h._embeds.push({parent:l,svg:s,id:y}),t(h)}else e(l,s,document.getElementById(y))}else++n,++v}else++n}(!d.length||d.length-v>0)&&f(o,67)}var r,i=Object(n),u=/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,l=/\bEdge\/.(\d+)\b/,s=window.top!==window.self;r="polyfill"in i?i.polyfill:u.test(navigator.userAgent)||(navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/)||[])[1]<10547||(navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/)||[])[1]<537||l.test(navigator.userAgent)&&s;var c={},f=window.requestAnimationFrame||setTimeout,d=document.getElementsByTagName("use"),v=0;r&&o()}function a(e){for(var t=e;"svg"!==t.nodeName.toLowerCase()&&(t=t.parentNode););return t}return n}),e.exports=n.svg4everybody}).call(n)}).call(t,n(7))},function(e,t,n){"use strict";(function(e){"use_strict";function t(e){return e&&e.__esModule?e:{default:e}}n(3),n(4);var a=n(1),o=t(a),r=n(2),i=t(r),u=n(0),l=t(u);e(),document.addEventListener("DOMContentLoaded",function(){i.default.bindLinks(),i.default.bindIcons();var e=l.default.getElementByClass("arrow");l.default.getElementByClass("menu").offsetHeight||(l.default.dropClass(e,"hide"),o.default.animateArrow()),window.onscroll=function(){!l.default.getElementByClass("menu").offsetHeight?(o.default.animateArrow(),l.default.hasClass(e,"hide")&&l.default.dropClass(e,"hide")):o.default.animateIconOverlay()}})}).call(t,n(5))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n}]);