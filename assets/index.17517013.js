var E=Object.defineProperty,y=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var f=(r,e,n)=>e in r?E(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n,u=(r,e)=>{for(var n in e||(e={}))x.call(e,n)&&f(r,n,e[n]);if(m)for(var n of m(e))R.call(e,n)&&f(r,n,e[n]);return r},d=(r,e)=>y(r,g(e));import{R as s,r as i,a as L,S as v,H as O,b as S}from"./vendor.5d2cbba9.js";const b=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}};b();const A=r=>s.createElement(i.exports.Suspense,{fallback:r.fallback||null},s.createElement(L,{path:r.path,render:e=>r.component&&s.createElement(r.component,d(u({},e),{routes:r.routes}))})),I=({routes:r})=>s.createElement(v,null,r.map(e=>s.createElement(A,u({key:e.path},e)))),k="modulepreload",p={},w="/",a=function(e,n){return!n||n.length===0?e():Promise.all(n.map(c=>{if(c=`${w}${c}`,c in p)return;p[c]=!0;const t=c.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${o}`))return;const l=document.createElement("link");if(l.rel=t?"stylesheet":k,t||(l.as="script",l.crossOrigin=""),l.href=c,document.head.appendChild(l),t)return new Promise((h,_)=>{l.addEventListener("load",h),l.addEventListener("error",_)})})).then(()=>e())},D=[{title:"chasm",path:"/rsw/chasm",component:i.exports.lazy(()=>a(()=>import("./chasm.209b72a2.js"),["assets/chasm.209b72a2.js","assets/vendor.5d2cbba9.js"])),exact:!0},{title:"game of life",path:"/rsw/game-of-life",component:i.exports.lazy(()=>a(()=>import("./game_of_life.008da23c.js"),["assets/game_of_life.008da23c.js","assets/vendor.5d2cbba9.js"])),exact:!0},{title:"ffmpeg",path:"/ffmpeg",component:i.exports.lazy(()=>a(()=>import("./ffmpeg.dce17e2d.js"),["assets/ffmpeg.dce17e2d.js","assets/vendor.5d2cbba9.js"])),exact:!0},{title:"excel read",path:"/rsw/excel-read",component:i.exports.lazy(()=>a(()=>import("./excel_read.634de99c.js"),["assets/excel_read.634de99c.js","assets/vendor.5d2cbba9.js"])),exact:!0},{path:"/",component:i.exports.lazy(()=>a(()=>import("./home.2d651e99.js"),["assets/home.2d651e99.js","assets/vendor.5d2cbba9.js"]))}];function P(){return s.createElement(O,null,s.createElement(I,{routes:D}))}S.render(s.createElement(s.StrictMode,null,s.createElement(P,null)),document.getElementById("root"));export{D as r};
