var e=Object.assign;import{c as t,r as n,a as r}from"./vendor.c7c40071.js";function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,o(e,t)}!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const r=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,i)=>{const a=new URL(e,r);if(self[t].moduleMap[a])return n(self[t].moduleMap[a]);const c=new Blob([`import * as m from '${a}';`,`${t}.moduleMap['${a}']=m;`],{type:"text/javascript"}),u=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){i(new Error(`Failed to import: ${e}`)),o(u)},onload(){n(self[t].moduleMap[a]),o(u)}});document.head.appendChild(u)})),self[t].moduleMap={}}}("/assets/");function a(){}function c(){}c.resetWarningCache=a;var u=t((function(e){e.exports=function(){function e(e,t,n,r,o,i){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==i){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:a};return n.PropTypes=n,n}()}));function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e){return"/"===e.charAt(0)}function f(e,t){for(var n=t,r=n+1,o=e.length;r<o;n+=1,r+=1)e[n]=e[r];e.pop()}function p(e,t){if(!e)throw new Error("Invariant failed")}function h(e){return"/"===e.charAt(0)?e:"/"+e}function d(e){return"/"===e.charAt(0)?e.substr(1):e}function m(e,t){return function(e,t){return 0===e.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(e.charAt(t.length))}(e,t)?e.substr(t.length):e}function v(e){return"/"===e.charAt(e.length-1)?e.slice(0,-1):e}function y(e){var t=e.pathname,n=e.search,r=e.hash,o=t||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function g(e,t,n,r){var o;"string"==typeof e?(o=function(e){var t=e||"/",n="",r="",o=t.indexOf("#");-1!==o&&(r=t.substr(o),t=t.substr(0,o));var i=t.indexOf("?");return-1!==i&&(n=t.substr(i),t=t.substr(0,i)),{pathname:t,search:"?"===n?"":n,hash:"#"===r?"":r}}(e)).state=t:(void 0===(o=s({},e)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==t&&void 0===o.state&&(o.state=t));try{o.pathname=decodeURI(o.pathname)}catch(i){throw i instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):i}return n&&(o.key=n),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=function(e,t){void 0===t&&(t="");var n,r=e&&e.split("/")||[],o=t&&t.split("/")||[],i=e&&l(e),a=t&&l(t),c=i||a;if(e&&l(e)?o=r:r.length&&(o.pop(),o=o.concat(r)),!o.length)return"/";if(o.length){var u=o[o.length-1];n="."===u||".."===u||""===u}else n=!1;for(var s=0,p=o.length;p>=0;p--){var h=o[p];"."===h?f(o,p):".."===h?(f(o,p),s++):s&&(f(o,p),s--)}if(!c)for(;s--;s)o.unshift("..");!c||""===o[0]||o[0]&&l(o[0])||o.unshift("");var d=o.join("/");return n&&"/"!==d.substr(-1)&&(d+="/"),d}(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function b(){var e=null;var t=[];return{setPrompt:function(t){return e=t,function(){e===t&&(e=null)}},confirmTransitionTo:function(t,n,r,o){if(null!=e){var i="function"==typeof e?e(t,n):e;"string"==typeof i?"function"==typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(e){var n=!0;function r(){n&&e.apply(void 0,arguments)}return t.push(r),function(){n=!1,t=t.filter((function(e){return e!==r}))}},notifyListeners:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.forEach((function(e){return e.apply(void 0,n)}))}}}var w=!("undefined"==typeof window||!window.document||!window.document.createElement);function E(e,t){t(window.confirm(e))}var x={hashbang:{encodePath:function(e){return"!"===e.charAt(0)?e:"!/"+d(e)},decodePath:function(e){return"!"===e.charAt(0)?e.substr(1):e}},noslash:{encodePath:d,decodePath:h},slash:{encodePath:h,decodePath:h}};function _(e){var t=e.indexOf("#");return-1===t?e:e.slice(0,t)}function C(){var e=window.location.href,t=e.indexOf("#");return-1===t?"":e.substring(t+1)}function R(e){window.location.replace(_(window.location.href)+"#"+e)}function P(e){void 0===e&&(e={}),w||p(!1);var t=window.history;window.navigator.userAgent.indexOf("Firefox");var n=e,r=n.getUserConfirmation,o=void 0===r?E:r,i=n.hashType,a=void 0===i?"slash":i,c=e.basename?v(h(e.basename)):"",u=x[a],l=u.encodePath,f=u.decodePath;function d(){var e=f(C());return c&&(e=m(e,c)),g(e)}var P=b();function $(e){s(F,e),F.length=t.length,P.notifyListeners(F.location,F.action)}var O=!1,S=null;function A(){var e,t,n=C(),r=l(n);if(n!==r)R(r);else{var i=d(),a=F.location;if(!O&&(t=i,(e=a).pathname===t.pathname&&e.search===t.search&&e.hash===t.hash))return;if(S===y(i))return;S=null,function(e){if(O)O=!1,$();else{var t="POP";P.confirmTransitionTo(e,t,o,(function(n){n?$({action:t,location:e}):function(e){var t=F.location,n=k.lastIndexOf(y(t));-1===n&&(n=0);var r=k.lastIndexOf(y(e));-1===r&&(r=0);var o=n-r;o&&(O=!0,M(o))}(e)}))}}(i)}}var T=C(),L=l(T);T!==L&&R(L);var j=d(),k=[y(j)];function M(e){t.go(e)}var U=0;function I(e){1===(U+=e)&&1===e?window.addEventListener("hashchange",A):0===U&&window.removeEventListener("hashchange",A)}var N=!1;var F={length:t.length,action:"POP",location:j,createHref:function(e){var t=document.querySelector("base"),n="";return t&&t.getAttribute("href")&&(n=_(window.location.href)),n+"#"+l(c+y(e))},push:function(e,t){var n="PUSH",r=g(e,void 0,void 0,F.location);P.confirmTransitionTo(r,n,o,(function(e){if(e){var t=y(r),o=l(c+t);if(C()!==o){S=t,function(e){window.location.hash=e}(o);var i=k.lastIndexOf(y(F.location)),a=k.slice(0,i+1);a.push(t),k=a,$({action:n,location:r})}else $()}}))},replace:function(e,t){var n="REPLACE",r=g(e,void 0,void 0,F.location);P.confirmTransitionTo(r,n,o,(function(e){if(e){var t=y(r),o=l(c+t);C()!==o&&(S=t,R(o));var i=k.indexOf(y(F.location));-1!==i&&(k[i]=t),$({action:n,location:r})}}))},go:M,goBack:function(){M(-1)},goForward:function(){M(1)},block:function(e){void 0===e&&(e=!1);var t=P.setPrompt(e);return N||(I(1),N=!0),function(){return N&&(N=!1,I(-1)),t()}},listen:function(e){var t=P.appendListener(e);return I(1),function(){I(-1),t()}}};return F}var $="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function O(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(n,r){e=n,t.forEach((function(t){return t(e,r)}))}}}var S=n.createContext||function(e,t){var r,o,a,c="__create-react-context-"+(($[a="__global_unique_id__"]=($[a]||0)+1)+"__"),s=function(e){function n(){var t;return(t=e.apply(this,arguments)||this).emitter=O(t.props.value),t}i(n,e);var r=n.prototype;return r.getChildContext=function(){var e;return(e={})[c]=this.emitter,e},r.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n,r=this.props.value,o=e.value;((i=r)===(a=o)?0!==i||1/i==1/a:i!=i&&a!=a)?n=0:(n="function"==typeof t?t(r,o):1073741823,0!==(n|=0)&&this.emitter.set(e.value,n))}var i,a},r.render=function(){return this.props.children},n}(n.Component);s.childContextTypes=((r={})[c]=u.object.isRequired,r);var l=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).state={value:e.getValue()},e.onUpdate=function(t,n){0!=((0|e.observedBits)&n)&&e.setState({value:e.getValue()})},e}i(n,t);var r=n.prototype;return r.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=null==t?1073741823:t},r.componentDidMount=function(){this.context[c]&&this.context[c].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=null==e?1073741823:e},r.componentWillUnmount=function(){this.context[c]&&this.context[c].off(this.onUpdate)},r.getValue=function(){return this.context[c]?this.context[c].get():e},r.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(n.Component);return l.contextTypes=((o={})[c]=u.object,o),{Provider:s,Consumer:l}},A=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)},T=q,L=I,j=function(e,t){return F(I(e,t),t)},k=F,M=z,U=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function I(e,t){for(var n,r=[],o=0,i=0,a="",c=t&&t.delimiter||"/";null!=(n=U.exec(e));){var u=n[0],s=n[1],l=n.index;if(a+=e.slice(i,l),i=l+u.length,s)a+=s[1];else{var f=e[i],p=n[2],h=n[3],d=n[4],m=n[5],v=n[6],y=n[7];a&&(r.push(a),a="");var g=null!=p&&null!=f&&f!==p,b="+"===v||"*"===v,w="?"===v||"*"===v,E=n[2]||c,x=d||m;r.push({name:h||o++,prefix:p||"",delimiter:E,optional:w,repeat:b,partial:g,asterisk:!!y,pattern:x?V(x):y?".*":"[^"+D(E)+"]+?"})}}return i<e.length&&(a+=e.substr(i)),a&&r.push(a),r}function N(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function F(e,t){for(var n=new Array(e.length),r=0;r<e.length;r++)"object"==typeof e[r]&&(n[r]=new RegExp("^(?:"+e[r].pattern+")$",W(t)));return function(t,r){for(var o="",i=t||{},a=(r||{}).pretty?N:encodeURIComponent,c=0;c<e.length;c++){var u=e[c];if("string"!=typeof u){var s,l=i[u.name];if(null==l){if(u.optional){u.partial&&(o+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(A(l)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var f=0;f<l.length;f++){if(s=a(l[f]),!n[c].test(s))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(s)+"`");o+=(0===f?u.prefix:u.delimiter)+s}}else{if(s=u.asterisk?encodeURI(l).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})):a(l),!n[c].test(s))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+s+'"');o+=u.prefix+s}}else o+=u}return o}}function D(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function V(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function B(e,t){return e.keys=t,e}function W(e){return e&&e.sensitive?"":"i"}function z(e,t,n){A(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,o=!1!==n.end,i="",a=0;a<e.length;a++){var c=e[a];if("string"==typeof c)i+=D(c);else{var u=D(c.prefix),s="(?:"+c.pattern+")";t.push(c),c.repeat&&(s+="(?:"+u+s+")*"),i+=s=c.optional?c.partial?u+"("+s+")?":"(?:"+u+"("+s+"))?":u+"("+s+")"}}var l=D(n.delimiter||"/"),f=i.slice(-l.length)===l;return r||(i=(f?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&f?"":"(?="+l+"|$)",B(new RegExp("^"+i,W(n)),t)}function q(e,t,n){return A(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return B(e,t)}(e,t):A(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(q(e[o],t,n).source);return B(new RegExp("(?:"+r.join("|")+")",W(n)),t)}(e,t,n):function(e,t,n){return z(I(e,n),t,n)}(e,t,n)}T.parse=L,T.compile=j,T.tokensToFunction=k,T.tokensToRegExp=M;
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var H="function"==typeof Symbol&&Symbol.for,K=H?Symbol.for("react.element"):60103,J=H?Symbol.for("react.portal"):60106,Y=H?Symbol.for("react.fragment"):60107,G=H?Symbol.for("react.strict_mode"):60108,Q=H?Symbol.for("react.profiler"):60114,X=H?Symbol.for("react.provider"):60109,Z=H?Symbol.for("react.context"):60110,ee=H?Symbol.for("react.async_mode"):60111,te=H?Symbol.for("react.concurrent_mode"):60111,ne=H?Symbol.for("react.forward_ref"):60112,re=H?Symbol.for("react.suspense"):60113,oe=H?Symbol.for("react.suspense_list"):60120,ie=H?Symbol.for("react.memo"):60115,ae=H?Symbol.for("react.lazy"):60116,ce=H?Symbol.for("react.block"):60121,ue=H?Symbol.for("react.fundamental"):60117,se=H?Symbol.for("react.responder"):60118,le=H?Symbol.for("react.scope"):60119;function fe(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case K:switch(e=e.type){case ee:case te:case Y:case Q:case G:case re:return e;default:switch(e=e&&e.$$typeof){case Z:case ne:case ae:case ie:case X:return e;default:return t}}case J:return t}}}function pe(e){return fe(e)===te}var he={AsyncMode:ee,ConcurrentMode:te,ContextConsumer:Z,ContextProvider:X,Element:K,ForwardRef:ne,Fragment:Y,Lazy:ae,Memo:ie,Portal:J,Profiler:Q,StrictMode:G,Suspense:re,isAsyncMode:function(e){return pe(e)||fe(e)===ee},isConcurrentMode:pe,isContextConsumer:function(e){return fe(e)===Z},isContextProvider:function(e){return fe(e)===X},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===K},isForwardRef:function(e){return fe(e)===ne},isFragment:function(e){return fe(e)===Y},isLazy:function(e){return fe(e)===ae},isMemo:function(e){return fe(e)===ie},isPortal:function(e){return fe(e)===J},isProfiler:function(e){return fe(e)===Q},isStrictMode:function(e){return fe(e)===G},isSuspense:function(e){return fe(e)===re},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===Y||e===te||e===Q||e===G||e===re||e===oe||"object"==typeof e&&null!==e&&(e.$$typeof===ae||e.$$typeof===ie||e.$$typeof===X||e.$$typeof===Z||e.$$typeof===ne||e.$$typeof===ue||e.$$typeof===se||e.$$typeof===le||e.$$typeof===ce)},typeOf:fe},de=t((function(e){e.exports=he}));function me(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var ve={};ve[de.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ve[de.Memo]={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0};var ye=function(e){var t=S();return t.displayName=e,t}("Router-History"),ge=function(e){var t=S();return t.displayName=e,t}("Router"),be=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={location:t.history.location},n._isMounted=!1,n._pendingLocation=null,t.staticContext||(n.unlisten=t.history.listen((function(e){n._isMounted?n.setState({location:e}):n._pendingLocation=e}))),n}i(t,e),t.computeRootMatch=function(e){return{path:"/",url:"/",params:{},isExact:"/"===e}};var r=t.prototype;return r.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},r.componentWillUnmount=function(){this.unlisten&&this.unlisten()},r.render=function(){return n.createElement(ge.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},n.createElement(ye.Provider,{children:this.props.children||null,value:this.props.history}))},t}(n.Component);n.Component,n.Component;var we={},Ee=0;function xe(e,t){void 0===t&&(t={}),("string"==typeof t||Array.isArray(t))&&(t={path:t});var n=t,r=n.path,o=n.exact,i=void 0!==o&&o,a=n.strict,c=void 0!==a&&a,u=n.sensitive,s=void 0!==u&&u;return[].concat(r).reduce((function(t,n){if(!n&&""!==n)return null;if(t)return t;var r=function(e,t){var n=""+t.end+t.strict+t.sensitive,r=we[n]||(we[n]={});if(r[e])return r[e];var o=[],i={regexp:T(e,o,t),keys:o};return Ee<1e4&&(r[e]=i,Ee++),i}(n,{end:i,strict:c,sensitive:s}),o=r.regexp,a=r.keys,u=o.exec(e);if(!u)return null;var l=u[0],f=u.slice(1),p=e===l;return i&&!p?null:{path:n,url:"/"===n&&""===l?"/":l,isExact:p,params:a.reduce((function(e,t,n){return e[t.name]=f[n],e}),{})}}),null)}var _e=function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=this;return n.createElement(ge.Consumer,null,(function(t){t||p(!1);var r=e.props.location||t.location,o=s({},t,{location:r,match:e.props.computedMatch?e.props.computedMatch:e.props.path?xe(r.pathname,e.props):t.match}),i=e.props,a=i.children,c=i.component,u=i.render;return Array.isArray(a)&&0===a.length&&(a=null),n.createElement(ge.Provider,{value:o},o.match?a?"function"==typeof a?a(o):a:c?n.createElement(c,o):u?u(o):null:"function"==typeof a?a(o):null)}))},t}(n.Component);n.Component;var Ce=function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=this;return n.createElement(ge.Consumer,null,(function(t){t||p(!1);var r,o,i=e.props.location||t.location;return n.Children.forEach(e.props.children,(function(e){if(null==o&&n.isValidElement(e)){r=e;var a=e.props.path||e.props.from;o=a?xe(i.pathname,s({},e.props,{path:a})):t.match}})),o?n.cloneElement(r,{location:i,computedMatch:o}):null}))},t}(n.Component);n.useContext,n.Component;var Re=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).history=P(t.props),t}return i(t,e),t.prototype.render=function(){return n.createElement(be,{history:this.history,children:this.props.children})},t}(n.Component),Pe=function(e,t){return"function"==typeof e?e(t):e},$e=function(e,t){return"string"==typeof e?g(e,null,null,t):e},Oe=function(e){return e},Se=n.forwardRef;void 0===Se&&(Se=Oe);var Ae=Se((function(e,t){var r=e.innerRef,o=e.navigate,i=e.onClick,a=me(e,["innerRef","navigate","onClick"]),c=a.target,u=s({},a,{onClick:function(e){try{i&&i(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||c&&"_self"!==c||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),o())}});return u.ref=Oe!==Se&&t||r,n.createElement("a",u)})),Te=Se((function(e,t){var r=e.component,o=void 0===r?Ae:r,i=e.replace,a=e.to,c=e.innerRef,u=me(e,["component","replace","to","innerRef"]);return n.createElement(ge.Consumer,null,(function(e){e||p(!1);var r=e.history,l=$e(Pe(a,e.location),e.location),f=l?r.createHref(l):"",h=s({},u,{href:f,navigate:function(){var t=Pe(a,e.location);(i?r.replace:r.push)(t)}});return Oe!==Se?h.ref=t||c:h.innerRef=c,n.createElement(o,h)}))})),Le=function(e){return e},je=n.forwardRef;void 0===je&&(je=Le),je((function(e,t){var r=e["aria-current"],o=void 0===r?"page":r,i=e.activeClassName,a=void 0===i?"active":i,c=e.activeStyle,u=e.className,l=e.exact,f=e.isActive,h=e.location,d=e.sensitive,m=e.strict,v=e.style,y=e.to,g=e.innerRef,b=me(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return n.createElement(ge.Consumer,null,(function(e){e||p(!1);var r=h||e.location,i=$e(Pe(y,r),r),w=i.pathname,E=w&&w.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),x=E?xe(r.pathname,{path:E,exact:l,sensitive:d,strict:m}):null,_=!!(f?f(x,r):x),C=_?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(u,a):u,R=_?s({},v,{},c):v,P=s({"aria-current":_&&o||null,className:C,style:R,to:i},b);return Le!==je?P.ref=t||g:P.innerRef=g,n.createElement(Te,P)}))}));const ke=t=>n.createElement(n.Suspense,{fallback:t.fallback||null},n.createElement(_e,{path:t.path,render:r=>t.component&&n.createElement(t.component,e(e({},r),{routes:t.routes}))})),Me=({routes:t})=>n.createElement(Ce,null,t.map((t=>n.createElement(ke,e({key:t.path},t)))));let Ue;const Ie={},Ne=function(e,t){if(!t)return e();if(void 0===Ue){const e=document.createElement("link").relList;Ue=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in Ie)return;Ie[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":Ue,t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e()))},Fe=[{title:"chasm",path:"/rsw/chasm",component:n.lazy((()=>Ne((()=>__import__("./chasm.d1556b26.js")),["/assets/chasm.d1556b26.js","/assets/vendor.c7c40071.js"]))),exact:!0,env:["dev","build"]},{title:"game of life",path:"/rsw/game-of-life",component:n.lazy((()=>Ne((()=>__import__("./game_of_life.44de0f08.js")),["/assets/game_of_life.44de0f08.js","/assets/vendor.c7c40071.js"]))),exact:!0,env:["dev","build"]},{title:"ffmpeg",path:"/ffmpeg",component:n.lazy((()=>Ne((()=>__import__("./ffmpeg.2cb79a06.js")),["/assets/ffmpeg.2cb79a06.js","/assets/vendor.c7c40071.js"]))),exact:!0,env:["dev"]},{path:"/",component:n.lazy((()=>Ne((()=>__import__("./home.a834879e.js")),["/assets/home.a834879e.js","/assets/vendor.c7c40071.js"])))}];function De(){return n.createElement(Re,null,n.createElement(Me,{routes:Fe}))}r.render(n.createElement(n.StrictMode,null,n.createElement(De,null)),document.getElementById("root"));export{Te as L,Fe as r};
