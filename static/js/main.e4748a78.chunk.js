(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,r){},19:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),o=r(7),c=r.n(o),i=r(4),l=(r(17),r(0));function u(){return a.a.createElement("footer",{className:"page-footer deep-purple lighten-2"},a.a.createElement("div",{className:"footer-copyright"},a.a.createElement("div",{className:"container"},"\xa9 ",(new Date).getFullYear()," Copyright Text",a.a.createElement("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/just36?tab=repositories"},"Repo"))))}function s(){return a.a.createElement("nav",{className:"deep-purple lighten-2"},a.a.createElement("div",{className:"nav-wrapper"},a.a.createElement(i.b,{to:"/",className:"brand-logo"},"React Food"),a.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},a.a.createElement("li",null,a.a.createElement("a",{href:"https://github.com/just36?tab=repositories"},"Repo")))))}var m=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(s,null),a.a.createElement("main",{className:"container content"},a.a.createElement(l.a,null)),a.a.createElement(u,null))},h=r(3),f=r(5),p="https://www.themealdb.com/api/json/v1/".concat("1","/");function d(){d=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function i(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(k){i=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),c=new N(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var i=w(c,r);if(i){if(i===s)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,c),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=l;var s={};function m(){}function h(){}function f(){}var p={};i(p,a,function(){return this});var v=Object.getPrototypeOf,g=v&&v(v(O([])));g&&g!==t&&r.call(g,a)&&(p=g);var E=f.prototype=m.prototype=Object.create(p);function y(e){["next","throw","return"].forEach(function(t){i(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var n;this._invoke=function(a,o){function c(){return new t(function(n,c){!function n(a,o,c,i){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,m=s.value;return m&&"object"==typeof m&&r.call(m,"__await")?t.resolve(m.__await).then(function(e){n("next",e,c,i)},function(e){n("throw",e,c,i)}):t.resolve(m).then(function(e){s.value=e,c(s)},function(e){return n("throw",e,c,i)})}i(l.arg)}(a,o,n,c)})}return n=n?n.then(c,c):c()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function O(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=f,i(E,"constructor",f),i(f,"constructor",h),h.displayName=i(f,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,i(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},y(b.prototype),i(b.prototype,o,function(){return this}),e.AsyncIterator=b,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var c=new b(l(t,r,n,a),o);return e.isGeneratorFunction(r)?c:c.next().then(function(e){return e.done?e.value:c.next()})},y(E),i(E,c,"Generator"),i(E,a,function(){return this}),i(E,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return c.type="throw",c.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}var v=function(){var e=Object(f.a)(d().mark(function e(t){var r;return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(p+"lookup.php?i="+t);case 2:return r=e.sent,e.next=5,r.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(f.a)(d().mark(function e(){var t;return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(p+"categories.php");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(f.a)(d().mark(function e(t){var r;return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(p+"filter.php?c="+t);case 2:return r=e.sent,e.next=5,r.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();function y(){return a.a.createElement("div",{className:"progress"},a.a.createElement("div",{className:"indeterminate"}))}var b=function(e){var t=e.strCategory,r=e.strCategoryThumb,n=e.strCategoryDescription;return a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"card-image"},a.a.createElement("img",{src:r,alt:t})),a.a.createElement("div",{className:"card-content"},a.a.createElement("span",{className:"card-title"},t),a.a.createElement("p",null,n.split(" ").slice(0,14).join(" "),"...")),a.a.createElement("div",{className:"card-action"},a.a.createElement(i.b,{to:"/category/".concat(t),className:"btn deep-purple lighten-2"},"Watch Category")))},w=function(e){var t=e.catalog,r=void 0===t?[]:t;return a.a.createElement("div",{className:"list"},r.map(function(e){return a.a.createElement(b,Object.assign({key:e.idCategory},e))}))},j=function(e){var t=e.cb,r=void 0===t?Function.prototype:t,o=Object(n.useState)(""),c=Object(h.a)(o,2),i=c[0],l=c[1],u=function(){r(i)};return a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"input-field col s12"},a.a.createElement("input",{type:"search",id:"search-field",placeholder:"search",onKeyDown:function(e){(e.key="Enter")&&u()},onChange:function(e){return l(e.target.value)},value:i}),a.a.createElement("button",{className:"btn deep-purple lighten-2",style:{position:"absolute",top:0,right:"10px"},onClick:u},"Search")))};function x(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),r=t[0],o=t[1],c=Object(n.useState)([]),i=Object(h.a)(c,2),u=i[0],s=i[1],m=Object(l.f)(),f=m.pathname,p=m.search,d=Object(l.g)();return Object(n.useEffect)(function(){window.scrollTo(0,0),g().then(function(e){o(e.categories),s(p?e.categories.filter(function(e){return e.strCategory.toLowerCase().includes(p.split("=")[1].toLowerCase())}):e.categories)})},[p]),a.a.createElement(a.a.Fragment,null,a.a.createElement(j,{cb:function(e){s(r.filter(function(t){return t.strCategory.toLowerCase().includes(e.toLowerCase())})),d({pathname:f,search:"?search=".concat(e)})}}),r.length?a.a.createElement(w,{catalog:u}):a.a.createElement(y,null))}function N(){return a.a.createElement("div",null,"This page doesn't exist. Return to ",a.a.createElement(i.b,{to:"/"},"Home"))}var O=function(e){var t=e.strMeal,r=e.idMeal,n=e.strMealThumb;return a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"card-image"},a.a.createElement("img",{src:n,alt:t})),a.a.createElement("div",{className:"card-content"},a.a.createElement("span",{className:"card-title"},t)),a.a.createElement("div",{className:"card-action"},a.a.createElement(i.b,{to:"/meal/".concat(r),className:"btn deep-purple lighten-2"},"Watch Recipe")))},L=function(e){var t=e.meals;return a.a.createElement("div",{className:"list"},t.map(function(e){return a.a.createElement(O,Object.assign({key:e.idMeal},e))}))},k=function(){var e=Object(l.h)().name,t=Object(n.useState)([]),r=Object(h.a)(t,2),o=r[0],c=r[1],i=Object(l.g)();return Object(n.useEffect)(function(){window.scrollTo(0,0),E(e).then(function(e){return c(e.meals)})},[e]),a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{className:"btn deep-purple lighten-2",onClick:function(){return i(-1)}},"Go Back"),o.length?a.a.createElement(L,{meals:o}):a.a.createElement(y,null))},C=function(){var e=Object(l.h)().id,t=Object(n.useState)({}),r=Object(h.a)(t,2),o=r[0],c=r[1],i=Object(l.g)();return Object(n.useEffect)(function(){window.scrollTo(0,0),v(e).then(function(e){return c(e.meals[0])})},[e]),a.a.createElement(a.a.Fragment,null,o.idMeal?a.a.createElement("div",{className:"recipe"},a.a.createElement("img",{src:o.strMealThumb,alt:o.strMeal}),a.a.createElement("h1",null,o.strMeal),a.a.createElement("h4",null,"Category: ",o.strCategory),o.strArea?a.a.createElement("h4",null,"Area: ",o.strArea):null,a.a.createElement("p",null,o.strInstructions),a.a.createElement("table",{className:"centered"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Ingredient"),a.a.createElement("th",null,"Measure"))),a.a.createElement("tbody",null,Object.keys(o).map(function(e){return e.includes("Ingredient")&&o[e]?a.a.createElement("tr",{key:e},a.a.createElement("td",null,o[e]),a.a.createElement("td",null,o["strMeasure".concat(e.slice(13))])):null}))),o.strYoutube?a.a.createElement("div",{className:"row"},a.a.createElement("h5",{style:{margin:"2rem 0"}},"Video Recipe"),a.a.createElement("iframe",{title:"id",src:"https://www.youtube.com/embed/".concat(o.strYoutube.slice(-11)),allowFullScreen:!0})):null,a.a.createElement("button",{style:{"margin-top":"2rem"},className:"btn deep-purple lighten-2",onClick:function(){return i(-1)}},"Go Back")):a.a.createElement(y,null))};var S=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.d,null,a.a.createElement(l.b,{path:"/",element:a.a.createElement(m,null)},a.a.createElement(l.b,{index:!0,element:a.a.createElement(x,null)}),a.a.createElement(l.b,{path:"category/:name",element:a.a.createElement(k,null)}),a.a.createElement(l.b,{path:"meal/:id",element:a.a.createElement(C,null)}),a.a.createElement(l.b,{path:"*",element:a.a.createElement(N,null)}))))};c.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(i.a,{basename:"/react-food"},a.a.createElement(S,null))))},8:function(e,t,r){e.exports=r(19)}},[[8,2,1]]]);
//# sourceMappingURL=main.e4748a78.chunk.js.map