import{r as O,R as j}from"./vendor.5d2cbba9.js";let f;const w=new Array(32).fill(void 0);w.push(void 0,null,!0,!1);function a(r){return w[r]}let l=w.length;function k(r){r<36||(w[r]=l,l=r)}function W(r){const t=a(r);return k(r),t}function s(r){return r==null}let h=null;function T(){return(h===null||h.buffer!==f.memory.buffer)&&(h=new Float64Array(f.memory.buffer)),h}let y=null;function m(){return(y===null||y.buffer!==f.memory.buffer)&&(y=new Int32Array(f.memory.buffer)),y}function c(r){l===w.length&&w.push(w.length+1);const t=l;return l=w[t],w[t]=r,t}function x(r){const t=typeof r;if(t=="number"||t=="boolean"||r==null)return`${r}`;if(t=="string")return`"${r}"`;if(t=="symbol"){const e=r.description;return e==null?"Symbol":`Symbol(${e})`}if(t=="function"){const e=r.name;return typeof e=="string"&&e.length>0?`Function(${e})`:"Function"}if(Array.isArray(r)){const e=r.length;let n="[";e>0&&(n+=x(r[0]));for(let _=1;_<e;_++)n+=", "+x(r[_]);return n+="]",n}const o=/\[object ([^\]]+)\]/.exec(toString.call(r));let u;if(o.length>1)u=o[1];else return toString.call(r);if(u=="Object")try{return"Object("+JSON.stringify(r)+")"}catch{return"Object"}return r instanceof Error?`${r.name}: ${r.message}
${r.stack}`:u}let S=0,p=null;function v(){return(p===null||p.buffer!==f.memory.buffer)&&(p=new Uint8Array(f.memory.buffer)),p}let A=new TextEncoder("utf-8");const I=typeof A.encodeInto=="function"?function(r,t){return A.encodeInto(r,t)}:function(r,t){const o=A.encode(r);return t.set(o),{read:r.length,written:o.length}};function F(r,t,o){if(o===void 0){const i=A.encode(r),b=t(i.length);return v().subarray(b,b+i.length).set(i),S=i.length,b}let u=r.length,e=t(u);const n=v();let _=0;for(;_<u;_++){const i=r.charCodeAt(_);if(i>127)break;n[e+_]=i}if(_!==u){_!==0&&(r=r.slice(_)),e=o(e,u,u=_+r.length*3);const i=v().subarray(e+_,e+u);_+=I(r,i).written}return S=_,e}let M=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});M.decode();function d(r,t){return M.decode(v().subarray(r,r+t))}function E(r,t,o,u){const e={a:r,b:t,cnt:1,dtor:o},n=(..._)=>{e.cnt++;const i=e.a;e.a=0;try{return u(i,e.b,..._)}finally{--e.cnt===0?f.__wbindgen_export_2.get(e.dtor)(i,e.b):e.a=i}};return n.original=e,n}function P(r,t,o){f._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h8e14cf6ebcf1af8a(r,t,c(o))}function B(r,t){f._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h04b866613957109e(r,t)}function U(r){try{const n=f.__wbindgen_add_to_stack_pointer(-16);var t=F(r,f.__wbindgen_malloc,f.__wbindgen_realloc),o=S;f.chasm(n,t,o);var u=m()[n/4+0],e=m()[n/4+1];if(e)throw W(u)}finally{f.__wbindgen_add_to_stack_pointer(16)}}function g(r,t){try{return r.apply(this,t)}catch(o){f.__wbindgen_exn_store(c(o))}}async function $(r,t){if(typeof Response=="function"&&r instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(r,t)}catch(u){if(r.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",u);else throw u}const o=await r.arrayBuffer();return await WebAssembly.instantiate(o,t)}else{const o=await WebAssembly.instantiate(r,t);return o instanceof WebAssembly.Instance?{instance:o,module:r}:o}}async function R(r){typeof r=="undefined"&&(r=new URL("/assets/chasm_bg.347a109c.wasm",self.location));const t={};t.wbg={},t.wbg.__wbindgen_object_drop_ref=function(e){W(e)},t.wbg.__wbindgen_cb_drop=function(e){const n=W(e).original;if(n.cnt--==1)return n.a=0,!0;var _=!1;return _},t.wbg.__wbindgen_number_get=function(e,n){const _=a(n);var i=typeof _=="number"?_:void 0;T()[e/8+1]=s(i)?0:i,m()[e/4+0]=!s(i)},t.wbg.__wbg_instanceof_Window_434ce1849eb4e0fc=function(e){var n=a(e)instanceof Window;return n},t.wbg.__wbg_document_5edd43643d1060d9=function(e){var n=a(e).document;return s(n)?0:c(n)},t.wbg.__wbg_innerWidth_405786923c1d2641=function(){return g(function(e){var n=a(e).innerWidth;return c(n)},arguments)},t.wbg.__wbg_innerHeight_25d3be0d129329c3=function(){return g(function(e){var n=a(e).innerHeight;return c(n)},arguments)},t.wbg.__wbg_requestAnimationFrame_0c71cd3c6779a371=function(){return g(function(e,n){var _=a(e).requestAnimationFrame(a(n));return _},arguments)},t.wbg.__wbg_getElementById_b30e88aff96f66a1=function(e,n,_){var i=a(e).getElementById(d(n,_));return s(i)?0:c(i)},t.wbg.__wbg_addEventListener_6bdba88519fdc1c9=function(){return g(function(e,n,_,i){a(e).addEventListener(d(n,_),a(i))},arguments)},t.wbg.__wbg_instanceof_WebGlRenderingContext_2be4c068bf5f8362=function(e){var n=a(e)instanceof WebGLRenderingContext;return n},t.wbg.__wbg_bufferData_85d635f32a990208=function(e,n,_,i){a(e).bufferData(n>>>0,a(_),i>>>0)},t.wbg.__wbg_attachShader_55dbe770f3ee32ca=function(e,n,_){a(e).attachShader(a(n),a(_))},t.wbg.__wbg_bindBuffer_29d52e7bc48650c3=function(e,n,_){a(e).bindBuffer(n>>>0,a(_))},t.wbg.__wbg_compileShader_3b5f9ef4c67a0777=function(e,n){a(e).compileShader(a(n))},t.wbg.__wbg_createBuffer_c40f37e1348bb91f=function(e){var n=a(e).createBuffer();return s(n)?0:c(n)},t.wbg.__wbg_createProgram_245520da1fb9e47b=function(e){var n=a(e).createProgram();return s(n)?0:c(n)},t.wbg.__wbg_createShader_4d8818a13cb825b3=function(e,n){var _=a(e).createShader(n>>>0);return s(_)?0:c(_)},t.wbg.__wbg_drawArrays_22c88d644a33fd59=function(e,n,_,i){a(e).drawArrays(n>>>0,_,i)},t.wbg.__wbg_enableVertexAttribArray_4ed5f91d0718bee1=function(e,n){a(e).enableVertexAttribArray(n>>>0)},t.wbg.__wbg_getAttribLocation_da5df7094096113d=function(e,n,_,i){var b=a(e).getAttribLocation(a(n),d(_,i));return b},t.wbg.__wbg_getUniformLocation_703972f150a46500=function(e,n,_,i){var b=a(e).getUniformLocation(a(n),d(_,i));return s(b)?0:c(b)},t.wbg.__wbg_linkProgram_5fdd57237c761833=function(e,n){a(e).linkProgram(a(n))},t.wbg.__wbg_shaderSource_173ab97288934a60=function(e,n,_,i){a(e).shaderSource(a(n),d(_,i))},t.wbg.__wbg_uniform2f_b0af46ba675f2c0d=function(e,n,_,i){a(e).uniform2f(a(n),_,i)},t.wbg.__wbg_useProgram_d5898a40ebe88916=function(e,n){a(e).useProgram(a(n))},t.wbg.__wbg_vertexAttribPointer_0d097efa33e3f45f=function(e,n,_,i,b,C,L){a(e).vertexAttribPointer(n>>>0,_,i>>>0,b!==0,C,L)},t.wbg.__wbg_viewport_19577064127daf83=function(e,n,_,i,b){a(e).viewport(n,_,i,b)},t.wbg.__wbg_clientX_849ccdf456d662ac=function(e){var n=a(e).clientX;return n},t.wbg.__wbg_clientY_1aaff30fe0cd0876=function(e){var n=a(e).clientY;return n},t.wbg.__wbg_instanceof_HtmlCanvasElement_a6157e470d06b638=function(e){var n=a(e)instanceof HTMLCanvasElement;return n},t.wbg.__wbg_width_cfa982e2a6ad6297=function(e){var n=a(e).width;return n},t.wbg.__wbg_setwidth_362e8db8cbadbe96=function(e,n){a(e).width=n>>>0},t.wbg.__wbg_height_1b399500ca683487=function(e){var n=a(e).height;return n},t.wbg.__wbg_setheight_28f53831182cc410=function(e,n){a(e).height=n>>>0},t.wbg.__wbg_getContext_bd4e9445094eda84=function(){return g(function(e,n,_){var i=a(e).getContext(d(n,_));return s(i)?0:c(i)},arguments)},t.wbg.__wbg_newnoargs_f579424187aa1717=function(e,n){var _=new Function(d(e,n));return c(_)},t.wbg.__wbg_call_89558c3e96703ca1=function(){return g(function(e,n){var _=a(e).call(a(n));return c(_)},arguments)},t.wbg.__wbindgen_object_clone_ref=function(e){var n=a(e);return c(n)},t.wbg.__wbg_self_e23d74ae45fb17d1=function(){return g(function(){var e=self.self;return c(e)},arguments)},t.wbg.__wbg_window_b4be7f48b24ac56e=function(){return g(function(){var e=window.window;return c(e)},arguments)},t.wbg.__wbg_globalThis_d61b1f48a57191ae=function(){return g(function(){var e=globalThis.globalThis;return c(e)},arguments)},t.wbg.__wbg_global_e7669da72fd7f239=function(){return g(function(){var e=global.global;return c(e)},arguments)},t.wbg.__wbindgen_is_undefined=function(e){var n=a(e)===void 0;return n},t.wbg.__wbg_buffer_5e74a88a1424a2e0=function(e){var n=a(e).buffer;return c(n)},t.wbg.__wbg_newwithbyteoffsetandlength_ad2916c6fa7d4c6f=function(e,n,_){var i=new Float32Array(a(e),n>>>0,_>>>0);return c(i)},t.wbg.__wbg_new_f5438c0cea22a3aa=function(e){var n=new Float32Array(a(e));return c(n)},t.wbg.__wbindgen_debug_string=function(e,n){var _=x(a(n)),i=F(_,f.__wbindgen_malloc,f.__wbindgen_realloc),b=S;m()[e/4+1]=b,m()[e/4+0]=i},t.wbg.__wbindgen_throw=function(e,n){throw new Error(d(e,n))},t.wbg.__wbindgen_memory=function(){var e=f.memory;return c(e)},t.wbg.__wbindgen_closure_wrapper65=function(e,n,_){var i=E(e,n,14,P);return c(i)},t.wbg.__wbindgen_closure_wrapper67=function(e,n,_){var i=E(e,n,14,B);return c(i)},(typeof r=="string"||typeof Request=="function"&&r instanceof Request||typeof URL=="function"&&r instanceof URL)&&(r=fetch(r));const{instance:o,module:u}=await $(await r,t);return f=o.exports,R.__wbindgen_wasm_module=u,f}function q(){return O.exports.useEffect(()=>{(async()=>(await R(),U("chasm")))()},[]),j.createElement("canvas",{id:"chasm"})}export{q as default};
