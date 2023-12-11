var J=Object.defineProperty;var Q=(t,e,n)=>e in t?J(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var j=(t,e,n)=>(Q(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function c(){}function W(t,e){for(const n in e)t[n]=e[n];return t}function V(t){return t()}function H(){return Object.create(null)}function B(t){t.forEach(V)}function S(t){return typeof t=="function"}function v(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function X(t){return Object.keys(t).length===0}function Y(t,e,n,r){if(t){const i=z(t,e,n,r);return t[0](i)}}function z(t,e,n,r){return t[1]&&r?W(n.ctx.slice(),t[1](r(e))):n.ctx}function Z(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const o=[],f=Math.max(e.dirty.length,i.length);for(let l=0;l<f;l+=1)o[l]=e.dirty[l]|i[l];return o}return e.dirty|i}return e.dirty}function tt(t,e,n,r,i,o){if(i){const f=z(e,n,r,o);t.p(f,i)}}function et(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function nt(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode&&t.parentNode.removeChild(t)}function N(t){return document.createElement(t)}function G(t){return document.createTextNode(t)}function K(){return G(" ")}function rt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function P(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function it(t){return Array.from(t.childNodes)}function ot(t,e){e=""+e,t.data!==e&&(t.data=e)}let k;function y(t){k=t}const g=[],A=[];let _=[];const U=[],st=Promise.resolve();let C=!1;function ut(){C||(C=!0,st.then(M))}function L(t){_.push(t)}const T=new Set;let p=0;function M(){if(p!==0)return;const t=k;do{try{for(;p<g.length;){const e=g[p];p++,y(e),ft(e.$$)}}catch(e){throw g.length=0,p=0,e}for(y(null),g.length=0,p=0;A.length;)A.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];T.has(n)||(T.add(n),n())}_.length=0}while(g.length);for(;U.length;)U.pop()();C=!1,T.clear(),y(t)}function ft(t){if(t.fragment!==null){t.update(),B(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}function lt(t){const e=[],n=[];_.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),_=e}const O=new Set;let ct;function h(t,e){t&&t.i&&(O.delete(t),t.i(e))}function x(t,e,n,r){if(t&&t.o){if(O.has(t))return;O.add(t),ct.c.push(()=>{O.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function E(t){t&&t.c()}function b(t,e,n){const{fragment:r,after_update:i}=t.$$;r&&r.m(e,n),L(()=>{const o=t.$$.on_mount.map(V).filter(S);t.$$.on_destroy?t.$$.on_destroy.push(...o):B(o),t.$$.on_mount=[]}),i.forEach(L)}function w(t,e){const n=t.$$;n.fragment!==null&&(lt(n.after_update),B(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function at(t,e){t.$$.dirty[0]===-1&&(g.push(t),ut(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function F(t,e,n,r,i,o,f=null,l=[-1]){const s=k;y(t);const u=t.$$={fragment:null,ctx:[],props:o,update:c,not_equal:i,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:H(),dirty:l,skip_bound:!1,root:e.target||s.$$.root};f&&f(u.root);let d=!1;if(u.ctx=n?n(t,e.props||{},(a,R,...q)=>{const D=q.length?q[0]:R;return u.ctx&&i(u.ctx[a],u.ctx[a]=D)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](D),d&&at(t,a)),R}):[],u.update(),d=!0,B(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const a=it(e.target);u.fragment&&u.fragment.l(a),a.forEach(m)}else u.fragment&&u.fragment.c();e.intro&&h(t.$$.fragment),b(t,e.target,e.anchor),M()}y(s)}class I{constructor(){j(this,"$$");j(this,"$$set")}$destroy(){w(this,1),this.$destroy=c}$on(e,n){if(!S(n))return c;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!X(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const dt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(dt);function mt(t){let e,n;const r=t[1].default,i=Y(r,t,t[0],null);return{c(){e=N("div"),i&&i.c(),P(e,"class","svelte-gmxvbu")},m(o,f){$(o,e,f),i&&i.m(e,null),n=!0},p(o,[f]){i&&i.p&&(!n||f&1)&&tt(i,r,o,o[0],n?Z(r,o[0],f,null):et(o[0]),null)},i(o){n||(h(i,o),n=!0)},o(o){x(i,o),n=!1},d(o){o&&m(e),i&&i.d(o)}}}function pt(t,e,n){let{$$slots:r={},$$scope:i}=e;return t.$$set=o=>{"$$scope"in o&&n(0,i=o.$$scope)},[i,r]}class gt extends I{constructor(e){super(),F(this,e,pt,mt,v,{})}}function _t(t){let e;return{c(){e=N("html"),e.innerHTML='<div class="svelte-9jl068"><h1 class="N svelte-9jl068">N</h1> <h1 class="svelte-9jl068">crypt</h1></div>'},m(n,r){$(n,e,r)},p:c,i:c,o:c,d(n){n&&m(e)}}}class ht extends I{constructor(e){super(),F(this,e,null,_t,v,{})}}function $t(t){let e;return{c(){e=N("input"),P(e,"type","File")},m(n,r){$(n,e,r),t[1](e)},p:c,i:c,o:c,d(n){n&&m(e),t[1](null)}}}function yt(t,e,n){let{ImageField:r}=e;function i(o){A[o?"unshift":"push"](()=>{r=o,n(0,r)})}return t.$$set=o=>{"ImageField"in o&&n(0,r=o.ImageField)},[r,i]}class xt extends I{constructor(e){super(),F(this,e,yt,$t,v,{ImageField:0})}get ImageField(){return this.$$.ctx[0]}set ImageField(e){this.$$set({ImageField:e}),M()}}function bt(t){let e,n,r,i;return{c(){e=N("button"),n=G(t[1]),P(e,"class","svelte-urwvju")},m(o,f){$(o,e,f),nt(e,n),r||(i=rt(e,"click",function(){S(t[0])&&t[0].apply(this,arguments)}),r=!0)},p(o,[f]){t=o,f&2&&ot(n,t[1])},i:c,o:c,d(o){o&&m(e),r=!1,i()}}}function wt(t,e,n){let{onClickFunction:r=function(){}}=e,{InnerTextOfButton:i="Nothing"}=e;return t.$$set=o=>{"onClickFunction"in o&&n(0,r=o.onClickFunction),"InnerTextOfButton"in o&&n(1,i=o.InnerTextOfButton)},[r,i]}class vt extends I{constructor(e){super(),F(this,e,wt,bt,v,{onClickFunction:0,InnerTextOfButton:1})}}function Ft(t){let e,n,r,i,o,f;e=new ht({});let l={};return r=new xt({props:l}),t[2](r),o=new vt({props:{onClickFunction:t[1],InnerTextOfButton:"Encrypt!"}}),{c(){E(e.$$.fragment),n=K(),E(r.$$.fragment),i=K(),E(o.$$.fragment)},m(s,u){b(e,s,u),$(s,n,u),b(r,s,u),$(s,i,u),b(o,s,u),f=!0},p(s,u){const d={};r.$set(d)},i(s){f||(h(e.$$.fragment,s),h(r.$$.fragment,s),h(o.$$.fragment,s),f=!0)},o(s){x(e.$$.fragment,s),x(r.$$.fragment,s),x(o.$$.fragment,s),f=!1},d(s){s&&(m(n),m(i)),w(e,s),t[2](null),w(r,s),w(o,s)}}}function It(t){let e,n;return e=new gt({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),{c(){E(e.$$.fragment)},m(r,i){b(e,r,i),n=!0},p(r,[i]){const o={};i&33&&(o.$$scope={dirty:i,ctx:r}),e.$set(o)},i(r){n||(h(e.$$.fragment,r),n=!0)},o(r){x(e.$$.fragment,r),n=!1},d(r){w(e,r)}}}function Ot(t,e,n){let r,i=new FileReader;i.onload=async function(s){let u={method:"POST",body:s.target.result,headers:{"contnet-type":"application/octet-stream"}};await fetch("http://127.0.0.1:5000/EncryptAndReturn",u);let d=await d.blob();console.log(d)};function o(s){let u=i.readAsBinaryString(s);console.log(u)}function f(){o(r.ImageField.files[0])}function l(s){A[s?"unshift":"push"](()=>{r=s,n(0,r)})}return[r,f,l]}class Et extends I{constructor(e){super(),F(this,e,Ot,It,v,{})}}new Et({target:document.getElementById("app")});
