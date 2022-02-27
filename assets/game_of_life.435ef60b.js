import{r as C}from"./vendor.5dcbd1e0.js";import{a as O,j as y}from"./index.17ef0532.js";let i,_=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});_.decode();let d=null;function D(){return(d===null||d.buffer!==i.memory.buffer)&&(d=new Uint8Array(i.memory.buffer)),d}function B(t,e){return _.decode(D().subarray(t,t+e))}function S(t){return()=>{throw new Error(`${t} is not defined`)}}class w{static __wrap(e){const n=Object.create(w.prototype);return n.ptr=e,n}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();i.__wbg_universe_free(e)}tick(){i.universe_tick(this.ptr)}static new(){var e=i.universe_new();return w.__wrap(e)}width(){var e=i.universe_width(this.ptr);return e>>>0}height(){var e=i.universe_height(this.ptr);return e>>>0}cells(){var e=i.universe_cells(this.ptr);return e}toggle_cell(e,n){i.universe_toggle_cell(this.ptr,e,n)}}async function T(t,e){if(typeof Response=="function"&&t instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(t,e)}catch(r){if(t.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const n=await t.arrayBuffer();return await WebAssembly.instantiate(n,e)}else{const n=await WebAssembly.instantiate(t,e);return n instanceof WebAssembly.Instance?{instance:n,module:t}:n}}async function p(t){typeof t=="undefined"&&(t=new URL("/assets/game_of_life_bg.30dcf3cc.wasm",self.location));const e={};e.wbg={},e.wbg.__wbg_random_7b8246250fd79f60=typeof Math.random=="function"?Math.random:S("Math.random"),e.wbg.__wbindgen_throw=function(c,f){throw new Error(B(c,f))},(typeof t=="string"||typeof Request=="function"&&t instanceof Request||typeof URL=="function"&&t instanceof URL)&&(t=fetch(t));const{instance:n,module:r}=await T(await t,e);return i=n.exports,p.__wbindgen_wasm_module=r,i}const o=7,W="#D2D2D2",j="#FFFFFF",P="#000000";function Y(){return C.exports.useEffect(()=>{q("game-of-life-canvas","play-pause-btn")},[]),O("div",{className:"game-of-life-page",children:[y("canvas",{id:"game-of-life-canvas"}),y("div",{className:"op",children:y("button",{id:"play-pause-btn",title:"play-pause",children:"\u25B6"})})]})}function U({ctx:t,width:e,height:n}){t.beginPath(),t.strokeStyle=W;for(let r=0;r<=e;r++)t.moveTo(r*(o+1)+1,0),t.lineTo(r*(o+1)+1,(o+1)*n+1);for(let r=0;r<=n;r++)t.moveTo(0,r*(o+1)+1),t.lineTo((o+1)*e+1,r*(o+1)+1);t.stroke()}function x({row:t,width:e,column:n}){return t*e+n}function G(t,e){const n=Math.floor(t/8),r=1<<t%8;return(e[n]&r)===r}function h({universe:t,ctx:e,memory:n,width:r,height:c}){const f=t.cells(),l=new Uint8Array(n.buffer,f,r*c/8);e.beginPath();for(let s=0;s<c;s++)for(let a=0;a<r;a++){const u=x({row:s,column:a,width:r});e.fillStyle=G(u,l)?P:j,e.fillRect(a*(o+1)+1,s*(o+1)+1,o,o)}e.stroke()}async function q(t,e){const n=document.getElementById(t),r=document.getElementById(e);let c=null;const f=await p(),l=w.new(),s=l.width(),a=l.height();n.width=(o+1)*s+1,n.height=(o+1)*a+1;const u=n.getContext("2d");U({ctx:u,width:s,height:a}),h({universe:l,ctx:u,width:s,height:a,memory:f.memory});const g=()=>{l.tick(),h({universe:l,ctx:u,width:s,height:a,memory:f.memory}),c=requestAnimationFrame(g)},v=()=>c===null,L=()=>{r.textContent="\u23F8",g()},R=()=>{r.textContent="\u25B6",cancelAnimationFrame(c),c=null};r.addEventListener("click",()=>{v()?L():R()}),n.addEventListener("click",b=>{const m=n.getBoundingClientRect(),A=n.width/m.width,M=n.height/m.height,E=(b.clientX-m.left)*A,F=(b.clientY-m.top)*M,I=Math.min(Math.floor(F/(o+1)),a-1),k=Math.min(Math.floor(E/(o+1)),s-1);l.toggle_cell(I,k),h({universe:l,ctx:u,width:s,height:a,memory:f.memory})})}export{Y as default};