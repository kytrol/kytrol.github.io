!function(e){function t(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="build/",t(t.s=3)}([function(e,t,n){"use strict";"use_strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=function(){function e(){a(this,e)}return o(e,null,[{key:"addClass",value:function(e,t){e.classList.add(t)}},{key:"addClasses",value:function(e,t){for(var n=0;n<t.length;n++)this.addClass(e,t[n])}},{key:"dropClass",value:function(e,t){e.classList.remove(t)}},{key:"dropClasses",value:function(e,t){var n=this;t.forEach(function(t){return n.dropClass(e,t)})}},{key:"hasClass",value:function(e,t){return e.classList.contains(t)}},{key:"toggleClass",value:function(e,t){e.classList.toggle(t)}},{key:"createEleWithAttrs",value:function(e){var t=e.tag,n=void 0===t?"div":t,a=e.idName,o=e.className,r=e.classes,i=document.createElement(n);if(a&&i.setAttribute("id",a),o)i.setAttribute("class",o);else if(r)for(var u=0;u<r.length;u++)this.addClass(i,r[u]);return i}},{key:"dropChildren",value:function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}}]),e}();t.default=r},function(e,t,n){"use strict";"use_strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),u=a(i),s=function(){function e(){o(this,e)}return r(e,null,[{key:"bindMenu",value:function(){var e=this;document.getElementById("menu-btn").onclick=function(){e.animateMenu(this)}}},{key:"bindLinks",value:function(){for(var e=document.getElementsByClassName("links")[0].getElementsByTagName("a"),t=this,n=0;n<e.length;n++)e[n].onclick=function(){var e=document.getElementById("menu-btn");!e.offsetHeight?t.scrollToSection(this.href.split("#")[1]):t.animateMenu(e)}}},{key:"animateMenu",value:function(e){u.default.toggleClass(e,"shrink-icon"),setTimeout(function(){"menu"===e.innerHTML?e.innerHTML="close":e.innerHTML="menu",u.default.toggleClass(e,"shrink-icon")},100),u.default.toggleClass(document.getElementsByTagName("nav")[0],"active")}},{key:"animateArrow",value:function(){function e(){for(var e=window.innerHeight,t=document.getElementsByTagName("section").length,n=document.getElementById("contact").getBoundingClientRect().top,a=0;a<t;a++){var o=a+1;if(n<=(t-a)*e&&n>=(t-o)*e-e/2)return a}}var t=e(),n=document.getElementsByClassName("links")[0].getElementsByTagName("a"),a=n[t].href.split("#")[1],o=document.getElementsByClassName("arrow")[0];if(!u.default.hasClass(o,"arrow-"+a)){for(var r=o.className.split(" "),i=0;i<r.length;i++)"arrow"!==r[i]&&r[i].indexOf("arrow")>=0&&u.default.dropClass(o,r[i]);u.default.addClass(o,"arrow-"+a)}}},{key:"scrollToSection",value:function(e){function t(e){var s=(e-a)/r,l=void 0;if((l=u?n-s*i*-1:n+s*i)<=o&&u||l>=o&&!u)return void(l!==o&&window.scroll(0,o));window.scroll(0,l),window.requestAnimationFrame(t)}var n=window.pageYOffset,a=window.performance.now(),o=document.getElementById(e).offsetTop,r=250,i=o-n,u=i<0;window.requestAnimationFrame(t)}}]),e}();t.default=s},function(e,t){},function(e,t,n){"use strict";"use_strict";function a(e){return e&&e.__esModule?e:{default:e}}var o=n(1),r=a(o),i=n(0),u=a(i);n(2),document.addEventListener("DOMContentLoaded",function(){r.default.bindMenu(),r.default.bindLinks();var e=document.getElementsByClassName("arrow")[0];document.getElementById("menu-btn").offsetHeight||(u.default.dropClass(document.getElementsByClassName("arrow")[0],"hide"),r.default.animateArrow()),window.onscroll=function(){!!document.getElementById("menu-btn").offsetHeight||(r.default.animateArrow(),u.default.hasClass(e,"hide")&&u.default.dropClass(e,"hide"))}})}]);