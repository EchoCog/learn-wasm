import{r as M}from"./vendor.5dcbd1e0.js";import{a as U,j as O}from"./index.17ef0532.js";let u,W=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});W.decode();let y=null;function h(){return(y===null||y.buffer!==u.memory.buffer)&&(y=new Uint8Array(u.memory.buffer)),y}function x(t,n){return W.decode(h().subarray(t,t+n))}const b=new Array(32).fill(void 0);b.push(void 0,null,!0,!1);let g=b.length;function i(t){g===b.length&&b.push(b.length+1);const n=g;return g=b[n],b[n]=t,n}function o(t){return b[t]}function k(t){t<36||(b[t]=g,g=t)}function p(t){const n=o(t);return k(t),n}let d=0,v=new TextEncoder("utf-8");const I=typeof v.encodeInto=="function"?function(t,n){return v.encodeInto(t,n)}:function(t,n){const c=v.encode(t);return n.set(c),{read:t.length,written:c.length}};function A(t,n,c){if(c===void 0){const _=v.encode(t),s=n(_.length);return h().subarray(s,s+_.length).set(_),d=_.length,s}let f=t.length,e=n(f);const r=h();let a=0;for(;a<f;a++){const _=t.charCodeAt(a);if(_>127)break;r[e+a]=_}if(a!==f){a!==0&&(t=t.slice(a)),e=c(e,f,f=a+t.length*3);const _=h().subarray(e+a,e+f);a+=I(t,_).written}return d=a,e}function T(t){return t==null}let m=null;function l(){return(m===null||m.buffer!==u.memory.buffer)&&(m=new Int32Array(u.memory.buffer)),m}function C(t,n,c,f){const e={a:t,b:n,cnt:1,dtor:c},r=(...a)=>{e.cnt++;const _=e.a;e.a=0;try{return f(_,e.b,...a)}finally{--e.cnt===0?u.__wbindgen_export_2.get(e.dtor)(_,e.b):e.a=_}};return r.original=e,r}function L(t,n,c){u._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h6b72b28ed8b20f36(t,n,i(c))}function N(t,n,c,f){var e=u.read_excel_file(i(t),i(n),i(c),i(f));return p(e)}function j(t,n){try{return t.apply(this,n)}catch(c){u.__wbindgen_exn_store(i(c))}}function B(t,n,c,f){u.wasm_bindgen__convert__closures__invoke2_mut__h5751b9078a66d7dd(t,n,i(c),i(f))}async function F(t,n){if(typeof Response=="function"&&t instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(t,n)}catch(f){if(t.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",f);else throw f}const c=await t.arrayBuffer();return await WebAssembly.instantiate(c,n)}else{const c=await WebAssembly.instantiate(t,n);return c instanceof WebAssembly.Instance?{instance:c,module:t}:c}}async function R(t){typeof t=="undefined"&&(t=new URL("/assets/excel_read_bg.e81a672a.wasm",self.location));const n={};n.wbg={},n.wbg.__wbindgen_string_new=function(e,r){var a=x(e,r);return i(a)},n.wbg.__wbindgen_object_drop_ref=function(e){p(e)},n.wbg.__wbindgen_number_new=function(e){var r=e;return i(r)},n.wbg.__wbindgen_jsval_eq=function(e,r){var a=o(e)===o(r);return a},n.wbg.__wbindgen_string_get=function(e,r){const a=o(r);var _=typeof a=="string"?a:void 0,s=T(_)?0:A(_,u.__wbindgen_malloc,u.__wbindgen_realloc),w=d;l()[e/4+1]=w,l()[e/4+0]=s},n.wbg.__wbindgen_json_serialize=function(e,r){const a=o(r);var _=JSON.stringify(a===void 0?null:a),s=A(_,u.__wbindgen_malloc,u.__wbindgen_realloc),w=d;l()[e/4+1]=w,l()[e/4+0]=s},n.wbg.__wbg_log_068a3c36564bf7c3=function(e){console.log(p(e))},n.wbg.__wbg_alert_c3d55e19ff74a766=function(e,r){alert(x(e,r))},n.wbg.__wbg_arrayBuffer_8b5364ee9b393098=function(e){var r=o(e).arrayBuffer();return i(r)},n.wbg.__wbg_slice_4beddc961755110b=function(){return j(function(e){var r=o(e).slice();return i(r)},arguments)},n.wbg.__wbg_name_9a61dbbdbfb2d0de=function(e,r){var a=o(r).name,_=A(a,u.__wbindgen_malloc,u.__wbindgen_realloc),s=d;l()[e/4+1]=s,l()[e/4+0]=_},n.wbg.__wbindgen_cb_drop=function(e){const r=p(e).original;if(r.cnt--==1)return r.a=0,!0;var a=!1;return a},n.wbg.__wbg_new_16f24b0728c5e67b=function(){var e=new Array;return i(e)},n.wbg.__wbg_new_b563cacb0bf27b31=function(){var e=new Map;return i(e)},n.wbg.__wbg_push_a72df856079e6930=function(e,r){var a=o(e).push(o(r));return a},n.wbg.__wbg_call_94697a95cb7e239c=function(){return j(function(e,r,a){var _=o(e).call(o(r),o(a));return i(_)},arguments)},n.wbg.__wbg_set_e543156a3c4d08a8=function(e,r,a){var _=o(e).set(o(r),o(a));return i(_)},n.wbg.__wbg_fromEntries_1c342144dbc3fb73=function(){return j(function(e){var r=Object.fromEntries(o(e));return i(r)},arguments)},n.wbg.__wbg_new_4beacc9c71572250=function(e,r){try{var a={a:e,b:r},_=(w,S)=>{const E=a.a;a.a=0;try{return B(E,a.b,w,S)}finally{a.a=E}},s=new Promise(_);return i(s)}finally{a.a=a.b=0}},n.wbg.__wbg_resolve_4f8f547f26b30b27=function(e){var r=Promise.resolve(o(e));return i(r)},n.wbg.__wbg_then_a6860c82b90816ca=function(e,r){var a=o(e).then(o(r));return i(a)},n.wbg.__wbg_then_58a04e42527f52c6=function(e,r,a){var _=o(e).then(o(r),o(a));return i(_)},n.wbg.__wbg_buffer_5e74a88a1424a2e0=function(e){var r=o(e).buffer;return i(r)},n.wbg.__wbg_new_e3b800e570795b3c=function(e){var r=new Uint8Array(o(e));return i(r)},n.wbg.__wbg_set_5b8081e9d002f0df=function(e,r,a){o(e).set(o(r),a>>>0)},n.wbg.__wbg_length_30803400a8f15c59=function(e){var r=o(e).length;return r},n.wbg.__wbindgen_throw=function(e,r){throw new Error(x(e,r))},n.wbg.__wbindgen_memory=function(){var e=u.memory;return i(e)},n.wbg.__wbindgen_closure_wrapper200=function(e,r,a){var _=C(e,r,60,L);return i(_)},(typeof t=="string"||typeof Request=="function"&&t instanceof Request||typeof URL=="function"&&t instanceof URL)&&(t=fetch(t));const{instance:c,module:f}=await F(await t,n);return u=c.exports,R.__wbindgen_wasm_module=f,u.__wbindgen_start(),u}function P(){const[t,n]=M.exports.useState({});return M.exports.useEffect(()=>{R()},[]),U("div",{className:"excel-read",children:[O("input",{type:"file",onChange:async f=>{const e=f.target.files[0];N(e,[1],[],"").then(r=>{n(r)}).catch(r=>{console.error(r)})}}),O("pre",{children:JSON.stringify(t,null,2)})]})}export{P as default};