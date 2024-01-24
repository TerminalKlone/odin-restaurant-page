(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,"body {\n  background-color: lightgray;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(230, 33, 33);\n}\n\na {\n  margin: 1em;\n  font-weight: bold;\n  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif\n}\n\na:hover {\n  cursor: pointer;\n}\n\n#container {\n  /* border: 1px solid black; */\n  margin-top: 8em;\n  background-color: white;\n  border-radius: 15px;\n  padding: 20px;\n}\n\n#header {\n  margin: 40px;\n  border-bottom: 1px solid black;\n  padding-bottom: 10px;\n  text-align: center;\n}\n\n#title {\n  text-align: center;\n  font-size: 5em;\n}\n\n#grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1em;\n  text-align: center;\n  align-items: center;\n}\n\n#card {\n  /* border: 1px solid black; */\n  padding: 0.5em;\n  margin-bottom: 4em;\n  margin-top: 4em;\n}\n\n#chickenImage {\n  width: 7em;\n  margin-bottom: 1em;\n}\n\n#cowImage {\n  width: 8em;\n}\n\n#appleImage {\n  width: 7em;\n  margin-bottom: 1em;\n}\n\nh3 {\n  margin: 0;\n}\n\nh4 {\n  font-family: Arial, Helvetica, sans-serif\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&i[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),n.push(s))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var d=e[c],l=r.base?d[0]+r.base:d[0],s=o[l]||0,p="".concat(l," ").concat(s);o[l]=s+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=a(m,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var d=r(e,a),l=0;l<o.length;l++){var s=t(o[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}o=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),a=t.n(r),o=t(569),i=t.n(o),c=t(565),d=t.n(c),l=t(216),s=t.n(l),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=s(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=t.p+"cea915d085a1eef8ccd1.png",g=t.p+"daf0d26cce5d7ca7bc10.png",v=t.p+"6df1ed87fd8e082626f5.png";!function(){const e=document.createElement("div"),n=document.createElement("div"),t=document.createElement("div");e.id="container",n.id="header",t.id="content",document.body.appendChild(e),e.appendChild(n),e.appendChild(t)}(),function(){const e=document.getElementById("header"),n=document.createElement("h1"),t=document.createElement("nav"),r=document.createElement("a"),a=document.createElement("a"),o=document.createElement("a");n.id="title",n.innerText="Big Daddy Burgers",r.innerText="HOME",a.innerText="MENU",o.innerText="ABOUT",r.addEventListener("click",(()=>{console.log("HOME")})),a.addEventListener("click",(()=>{console.log("MENU")})),o.addEventListener("click",(()=>{console.log("ABOUT")})),e.appendChild(n),e.appendChild(t),t.appendChild(r),t.appendChild(a),t.appendChild(o)}(),function(){const e=document.getElementById("content"),n=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),o=document.createElement("h4"),i=document.createElement("h4"),c=document.createElement("h4"),d=document.createElement("img"),l=document.createElement("img"),s=document.createElement("img");d.id="cowImage",l.id="chickenImage",s.id="appleImage",d.src=h,l.src=g,s.src=v,o.innerText="100% Australian Beef\nPure premium ground beef, pressed and seasoned on the grill",i.innerText="Free Range Chicken\nAll our chicken is free range and RSPCA approved",c.innerText="Locally grown produce\nAll our fresh produce is grown locally right here in Australia",t.appendChild(d),t.appendChild(o),r.appendChild(l),r.appendChild(i),a.appendChild(s),a.appendChild(c),n.id="grid",t.id="card",r.id="card",a.id="card",e.appendChild(n),n.appendChild(t),n.appendChild(r),n.appendChild(a)}()})()})();