(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function ga(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function ma(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=ke(s)?Rp(s):ma(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(ke(t))return t;if(we(t))return t}}const Sp=/;(?![^(]*\))/g,Ap=/:([^]+)/,Dp=/\/\*.*?\*\//gs;function Rp(t){const e={};return t.replace(Dp,"").split(Sp).forEach(n=>{if(n){const s=n.split(Ap);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ya(t){let e="";if(ke(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const s=ya(t[n]);s&&(e+=s+" ")}else if(we(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const xp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kp=ga(xp);function Fu(t){return!!t||t===""}const qi=t=>ke(t)?t:t==null?"":z(t)||we(t)&&(t.toString===$u||!Y(t.toString))?JSON.stringify(t,Vu,2):String(t),Vu=(t,e)=>e&&e.__v_isRef?Vu(t,e.value):qn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Uu(e)?{[`Set(${e.size})`]:[...e.values()]}:we(e)&&!z(e)&&!ju(e)?String(e):e,me={},Hn=[],vt=()=>{},Np=()=>!1,Op=/^on[^a-z]/,oi=t=>Op.test(t),va=t=>t.startsWith("onUpdate:"),ze=Object.assign,wa=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Pp=Object.prototype.hasOwnProperty,te=(t,e)=>Pp.call(t,e),z=Array.isArray,qn=t=>ai(t)==="[object Map]",Uu=t=>ai(t)==="[object Set]",Y=t=>typeof t=="function",ke=t=>typeof t=="string",Ea=t=>typeof t=="symbol",we=t=>t!==null&&typeof t=="object",Bu=t=>we(t)&&Y(t.then)&&Y(t.catch),$u=Object.prototype.toString,ai=t=>$u.call(t),Mp=t=>ai(t).slice(8,-1),ju=t=>ai(t)==="[object Object]",ba=t=>ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,kr=ga(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ci=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Lp=/-(\w)/g,Qn=ci(t=>t.replace(Lp,(e,n)=>n?n.toUpperCase():"")),Fp=/\B([A-Z])/g,as=ci(t=>t.replace(Fp,"-$1").toLowerCase()),Hu=ci(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ki=ci(t=>t?`on${Hu(t)}`:""),Fs=(t,e)=>!Object.is(t,e),zi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Vr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},qu=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Uc;const Vp=()=>Uc||(Uc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let It;class Ku{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=It,!e&&It&&(this.index=(It.scopes||(It.scopes=[])).push(this)-1)}run(e){if(this.active){const n=It;try{return It=this,e()}finally{It=n}}}on(){It=this}off(){It=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function zu(t){return new Ku(t)}function Up(t,e=It){e&&e.active&&e.effects.push(t)}const Ta=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Gu=t=>(t.w&Xt)>0,Wu=t=>(t.n&Xt)>0,Bp=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Xt},$p=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Gu(r)&&!Wu(r)?r.delete(t):e[n++]=r,r.w&=~Xt,r.n&=~Xt}e.length=n}},Eo=new WeakMap;let Es=0,Xt=1;const bo=30;let mt;const wn=Symbol(""),To=Symbol("");class Ia{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Up(this,s)}run(){if(!this.active)return this.fn();let e=mt,n=zt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=mt,mt=this,zt=!0,Xt=1<<++Es,Es<=bo?Bp(this):Bc(this),this.fn()}finally{Es<=bo&&$p(this),Xt=1<<--Es,mt=this.parent,zt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){mt===this?this.deferStop=!0:this.active&&(Bc(this),this.onStop&&this.onStop(),this.active=!1)}}function Bc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let zt=!0;const Qu=[];function cs(){Qu.push(zt),zt=!1}function ls(){const t=Qu.pop();zt=t===void 0?!0:t}function at(t,e,n){if(zt&&mt){let s=Eo.get(t);s||Eo.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Ta()),Yu(r)}}function Yu(t,e){let n=!1;Es<=bo?Wu(t)||(t.n|=Xt,n=!Gu(t)):n=!t.has(mt),n&&(t.add(mt),mt.deps.push(t))}function Mt(t,e,n,s,r,i){const o=Eo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&z(t)){const c=qu(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":z(t)?ba(n)&&a.push(o.get("length")):(a.push(o.get(wn)),qn(t)&&a.push(o.get(To)));break;case"delete":z(t)||(a.push(o.get(wn)),qn(t)&&a.push(o.get(To)));break;case"set":qn(t)&&a.push(o.get(wn));break}if(a.length===1)a[0]&&Io(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Io(Ta(c))}}function Io(t,e){const n=z(t)?t:[...t];for(const s of n)s.computed&&$c(s);for(const s of n)s.computed||$c(s)}function $c(t,e){(t!==mt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const jp=ga("__proto__,__v_isRef,__isVue"),Xu=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ea)),Hp=Ca(),qp=Ca(!1,!0),Kp=Ca(!0),jc=zp();function zp(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ie(this);for(let i=0,o=this.length;i<o;i++)at(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ie)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){cs();const s=ie(this)[e].apply(this,n);return ls(),s}}),t}function Ca(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?cg:nh:e?th:eh).get(s))return s;const o=z(s);if(!t&&o&&te(jc,r))return Reflect.get(jc,r,i);const a=Reflect.get(s,r,i);return(Ea(r)?Xu.has(r):jp(r))||(t||at(s,"get",r),e)?a:Ce(a)?o&&ba(r)?a:a.value:we(a)?t?sh(a):us(a):a}}const Gp=Ju(),Wp=Ju(!0);function Ju(t=!1){return function(n,s,r,i){let o=n[s];if(Yn(o)&&Ce(o)&&!Ce(r))return!1;if(!t&&(!Ur(r)&&!Yn(r)&&(o=ie(o),r=ie(r)),!z(n)&&Ce(o)&&!Ce(r)))return o.value=r,!0;const a=z(n)&&ba(s)?Number(s)<n.length:te(n,s),c=Reflect.set(n,s,r,i);return n===ie(i)&&(a?Fs(r,o)&&Mt(n,"set",s,r):Mt(n,"add",s,r)),c}}function Qp(t,e){const n=te(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Mt(t,"delete",e,void 0),s}function Yp(t,e){const n=Reflect.has(t,e);return(!Ea(e)||!Xu.has(e))&&at(t,"has",e),n}function Xp(t){return at(t,"iterate",z(t)?"length":wn),Reflect.ownKeys(t)}const Zu={get:Hp,set:Gp,deleteProperty:Qp,has:Yp,ownKeys:Xp},Jp={get:Kp,set(t,e){return!0},deleteProperty(t,e){return!0}},Zp=ze({},Zu,{get:qp,set:Wp}),_a=t=>t,li=t=>Reflect.getPrototypeOf(t);function yr(t,e,n=!1,s=!1){t=t.__v_raw;const r=ie(t),i=ie(e);n||(e!==i&&at(r,"get",e),at(r,"get",i));const{has:o}=li(r),a=s?_a:n?Da:Vs;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function vr(t,e=!1){const n=this.__v_raw,s=ie(n),r=ie(t);return e||(t!==r&&at(s,"has",t),at(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function wr(t,e=!1){return t=t.__v_raw,!e&&at(ie(t),"iterate",wn),Reflect.get(t,"size",t)}function Hc(t){t=ie(t);const e=ie(this);return li(e).has.call(e,t)||(e.add(t),Mt(e,"add",t,t)),this}function qc(t,e){e=ie(e);const n=ie(this),{has:s,get:r}=li(n);let i=s.call(n,t);i||(t=ie(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Fs(e,o)&&Mt(n,"set",t,e):Mt(n,"add",t,e),this}function Kc(t){const e=ie(this),{has:n,get:s}=li(e);let r=n.call(e,t);r||(t=ie(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Mt(e,"delete",t,void 0),i}function zc(){const t=ie(this),e=t.size!==0,n=t.clear();return e&&Mt(t,"clear",void 0,void 0),n}function Er(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ie(o),c=e?_a:t?Da:Vs;return!t&&at(a,"iterate",wn),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function br(t,e,n){return function(...s){const r=this.__v_raw,i=ie(r),o=qn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?_a:e?Da:Vs;return!e&&at(i,"iterate",c?To:wn),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function $t(t){return function(...e){return t==="delete"?!1:this}}function eg(){const t={get(i){return yr(this,i)},get size(){return wr(this)},has:vr,add:Hc,set:qc,delete:Kc,clear:zc,forEach:Er(!1,!1)},e={get(i){return yr(this,i,!1,!0)},get size(){return wr(this)},has:vr,add:Hc,set:qc,delete:Kc,clear:zc,forEach:Er(!1,!0)},n={get(i){return yr(this,i,!0)},get size(){return wr(this,!0)},has(i){return vr.call(this,i,!0)},add:$t("add"),set:$t("set"),delete:$t("delete"),clear:$t("clear"),forEach:Er(!0,!1)},s={get(i){return yr(this,i,!0,!0)},get size(){return wr(this,!0)},has(i){return vr.call(this,i,!0)},add:$t("add"),set:$t("set"),delete:$t("delete"),clear:$t("clear"),forEach:Er(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=br(i,!1,!1),n[i]=br(i,!0,!1),e[i]=br(i,!1,!0),s[i]=br(i,!0,!0)}),[t,n,e,s]}const[tg,ng,sg,rg]=eg();function Sa(t,e){const n=e?t?rg:sg:t?ng:tg;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(te(n,r)&&r in s?n:s,r,i)}const ig={get:Sa(!1,!1)},og={get:Sa(!1,!0)},ag={get:Sa(!0,!1)},eh=new WeakMap,th=new WeakMap,nh=new WeakMap,cg=new WeakMap;function lg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ug(t){return t.__v_skip||!Object.isExtensible(t)?0:lg(Mp(t))}function us(t){return Yn(t)?t:Aa(t,!1,Zu,ig,eh)}function hg(t){return Aa(t,!1,Zp,og,th)}function sh(t){return Aa(t,!0,Jp,ag,nh)}function Aa(t,e,n,s,r){if(!we(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=ug(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Gt(t){return Yn(t)?Gt(t.__v_raw):!!(t&&t.__v_isReactive)}function Yn(t){return!!(t&&t.__v_isReadonly)}function Ur(t){return!!(t&&t.__v_isShallow)}function rh(t){return Gt(t)||Yn(t)}function ie(t){const e=t&&t.__v_raw;return e?ie(e):t}function Xn(t){return Vr(t,"__v_skip",!0),t}const Vs=t=>we(t)?us(t):t,Da=t=>we(t)?sh(t):t;function ih(t){zt&&mt&&(t=ie(t),Yu(t.dep||(t.dep=Ta())))}function oh(t,e){t=ie(t),t.dep&&Io(t.dep)}function Ce(t){return!!(t&&t.__v_isRef===!0)}function Ra(t){return ah(t,!1)}function fg(t){return ah(t,!0)}function ah(t,e){return Ce(t)?t:new dg(t,e)}class dg{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ie(e),this._value=n?e:Vs(e)}get value(){return ih(this),this._value}set value(e){const n=this.__v_isShallow||Ur(e)||Yn(e);e=n?e:ie(e),Fs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Vs(e),oh(this))}}function En(t){return Ce(t)?t.value:t}const pg={get:(t,e,n)=>En(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ce(r)&&!Ce(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function ch(t){return Gt(t)?t:new Proxy(t,pg)}function gg(t){const e=z(t)?new Array(t.length):{};for(const n in t)e[n]=yg(t,n);return e}class mg{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function yg(t,e,n){const s=t[e];return Ce(s)?s:new mg(t,e,n)}var lh;class vg{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[lh]=!1,this._dirty=!0,this.effect=new Ia(e,()=>{this._dirty||(this._dirty=!0,oh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ie(this);return ih(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}lh="__v_isReadonly";function wg(t,e,n=!1){let s,r;const i=Y(t);return i?(s=t,r=vt):(s=t.get,r=t.set),new vg(s,r,i||!r,n)}function Wt(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){ui(i,e,n)}return r}function ut(t,e,n,s){if(Y(t)){const i=Wt(t,e,n,s);return i&&Bu(i)&&i.catch(o=>{ui(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(ut(t[i],e,n,s));return r}function ui(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Wt(c,null,10,[t,o,a]);return}}Eg(t,n,r,s)}function Eg(t,e,n,s=!0){console.error(t)}let Us=!1,Co=!1;const He=[];let _t=0;const Kn=[];let Ot=null,fn=0;const uh=Promise.resolve();let xa=null;function ka(t){const e=xa||uh;return t?e.then(this?t.bind(this):t):e}function bg(t){let e=_t+1,n=He.length;for(;e<n;){const s=e+n>>>1;Bs(He[s])<t?e=s+1:n=s}return e}function Na(t){(!He.length||!He.includes(t,Us&&t.allowRecurse?_t+1:_t))&&(t.id==null?He.push(t):He.splice(bg(t.id),0,t),hh())}function hh(){!Us&&!Co&&(Co=!0,xa=uh.then(dh))}function Tg(t){const e=He.indexOf(t);e>_t&&He.splice(e,1)}function Ig(t){z(t)?Kn.push(...t):(!Ot||!Ot.includes(t,t.allowRecurse?fn+1:fn))&&Kn.push(t),hh()}function Gc(t,e=Us?_t+1:0){for(;e<He.length;e++){const n=He[e];n&&n.pre&&(He.splice(e,1),e--,n())}}function fh(t){if(Kn.length){const e=[...new Set(Kn)];if(Kn.length=0,Ot){Ot.push(...e);return}for(Ot=e,Ot.sort((n,s)=>Bs(n)-Bs(s)),fn=0;fn<Ot.length;fn++)Ot[fn]();Ot=null,fn=0}}const Bs=t=>t.id==null?1/0:t.id,Cg=(t,e)=>{const n=Bs(t)-Bs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function dh(t){Co=!1,Us=!0,He.sort(Cg);const e=vt;try{for(_t=0;_t<He.length;_t++){const n=He[_t];n&&n.active!==!1&&Wt(n,null,14)}}finally{_t=0,He.length=0,fh(),Us=!1,xa=null,(He.length||Kn.length)&&dh()}}function _g(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||me;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||me;d&&(r=n.map(g=>ke(g)?g.trim():g)),h&&(r=n.map(qu))}let a,c=s[a=Ki(e)]||s[a=Ki(Qn(e))];!c&&i&&(c=s[a=Ki(as(e))]),c&&ut(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ut(l,t,6,r)}}function ph(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Y(t)){const c=l=>{const u=ph(l,e,!0);u&&(a=!0,ze(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(we(t)&&s.set(t,null),null):(z(i)?i.forEach(c=>o[c]=null):ze(o,i),we(t)&&s.set(t,o),o)}function hi(t,e){return!t||!oi(e)?!1:(e=e.slice(2).replace(/Once$/,""),te(t,e[0].toLowerCase()+e.slice(1))||te(t,as(e))||te(t,e))}let Dt=null,gh=null;function Br(t){const e=Dt;return Dt=t,gh=t&&t.type.__scopeId||null,e}function Sg(t,e=Dt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&nl(-1);const i=Br(e);let o;try{o=t(...r)}finally{Br(i),s._d&&nl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Gi(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:g,ctx:v,inheritAttrs:T}=t;let N,D;const M=Br(t);try{if(n.shapeFlag&4){const G=r||s;N=Ct(u.call(G,G,h,i,g,d,v)),D=c}else{const G=e;N=Ct(G.length>1?G(i,{attrs:c,slots:a,emit:l}):G(i,null)),D=e.props?c:Ag(c)}}catch(G){Ss.length=0,ui(G,t,1),N=it(wt)}let P=N;if(D&&T!==!1){const G=Object.keys(D),{shapeFlag:W}=P;G.length&&W&7&&(o&&G.some(va)&&(D=Dg(D,o)),P=Jt(P,D))}return n.dirs&&(P=Jt(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),N=P,Br(M),N}const Ag=t=>{let e;for(const n in t)(n==="class"||n==="style"||oi(n))&&((e||(e={}))[n]=t[n]);return e},Dg=(t,e)=>{const n={};for(const s in t)(!va(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Rg(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Wc(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!hi(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Wc(s,o,l):!0:!!o;return!1}function Wc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!hi(n,i))return!0}return!1}function xg({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const kg=t=>t.__isSuspense;function Ng(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):Ig(t)}function Nr(t,e){if(Ue){let n=Ue.provides;const s=Ue.parent&&Ue.parent.provides;s===n&&(n=Ue.provides=Object.create(s)),n[t]=e}}function Rt(t,e,n=!1){const s=Ue||Dt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Y(e)?e.call(s.proxy):e}}const Tr={};function Cs(t,e,n){return mh(t,e,n)}function mh(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=me){const a=Ue;let c,l=!1,u=!1;if(Ce(t)?(c=()=>t.value,l=Ur(t)):Gt(t)?(c=()=>t,s=!0):z(t)?(u=!0,l=t.some(P=>Gt(P)||Ur(P)),c=()=>t.map(P=>{if(Ce(P))return P.value;if(Gt(P))return Un(P);if(Y(P))return Wt(P,a,2)})):Y(t)?e?c=()=>Wt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),ut(t,a,3,[d])}:c=vt,e&&s){const P=c;c=()=>Un(P())}let h,d=P=>{h=D.onStop=()=>{Wt(P,a,4)}},g;if(js)if(d=vt,e?n&&ut(e,a,3,[c(),u?[]:void 0,d]):c(),r==="sync"){const P=Am();g=P.__watcherHandles||(P.__watcherHandles=[])}else return vt;let v=u?new Array(t.length).fill(Tr):Tr;const T=()=>{if(!!D.active)if(e){const P=D.run();(s||l||(u?P.some((G,W)=>Fs(G,v[W])):Fs(P,v)))&&(h&&h(),ut(e,a,3,[P,v===Tr?void 0:u&&v[0]===Tr?[]:v,d]),v=P)}else D.run()};T.allowRecurse=!!e;let N;r==="sync"?N=T:r==="post"?N=()=>Je(T,a&&a.suspense):(T.pre=!0,a&&(T.id=a.uid),N=()=>Na(T));const D=new Ia(c,N);e?n?T():v=D.run():r==="post"?Je(D.run.bind(D),a&&a.suspense):D.run();const M=()=>{D.stop(),a&&a.scope&&wa(a.scope.effects,D)};return g&&g.push(M),M}function Og(t,e,n){const s=this.proxy,r=ke(t)?t.includes(".")?yh(s,t):()=>s[t]:t.bind(s,s);let i;Y(e)?i=e:(i=e.handler,n=e);const o=Ue;Jn(this);const a=mh(r,i.bind(s),n);return o?Jn(o):bn(),a}function yh(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Un(t,e){if(!we(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ce(t))Un(t.value,e);else if(z(t))for(let n=0;n<t.length;n++)Un(t[n],e);else if(Uu(t)||qn(t))t.forEach(n=>{Un(n,e)});else if(ju(t))for(const n in t)Un(t[n],e);return t}function Pg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Th(()=>{t.isMounted=!0}),Ih(()=>{t.isUnmounting=!0}),t}const lt=[Function,Array],Mg={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:lt,onEnter:lt,onAfterEnter:lt,onEnterCancelled:lt,onBeforeLeave:lt,onLeave:lt,onAfterLeave:lt,onLeaveCancelled:lt,onBeforeAppear:lt,onAppear:lt,onAfterAppear:lt,onAppearCancelled:lt},setup(t,{slots:e}){const n=Va(),s=Pg();let r;return()=>{const i=e.default&&wh(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const T of i)if(T.type!==wt){o=T;break}}const a=ie(t),{mode:c}=a;if(s.isLeaving)return Wi(o);const l=Qc(o);if(!l)return Wi(o);const u=_o(l,a,s,n);So(l,u);const h=n.subTree,d=h&&Qc(h);let g=!1;const{getTransitionKey:v}=l.type;if(v){const T=v();r===void 0?r=T:T!==r&&(r=T,g=!0)}if(d&&d.type!==wt&&(!dn(l,d)||g)){const T=_o(d,a,s,n);if(So(d,T),c==="out-in")return s.isLeaving=!0,T.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Wi(o);c==="in-out"&&l.type!==wt&&(T.delayLeave=(N,D,M)=>{const P=vh(s,d);P[String(d.key)]=d,N._leaveCb=()=>{D(),N._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=M})}return o}}},Lg=Mg;function vh(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function _o(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:v,onBeforeAppear:T,onAppear:N,onAfterAppear:D,onAppearCancelled:M}=e,P=String(t.key),G=vh(n,t),W=(O,ce)=>{O&&ut(O,s,9,ce)},ye=(O,ce)=>{const ae=ce[1];W(O,ce),z(O)?O.every(be=>be.length<=1)&&ae():O.length<=1&&ae()},Q={mode:i,persisted:o,beforeEnter(O){let ce=a;if(!n.isMounted)if(r)ce=T||a;else return;O._leaveCb&&O._leaveCb(!0);const ae=G[P];ae&&dn(t,ae)&&ae.el._leaveCb&&ae.el._leaveCb(),W(ce,[O])},enter(O){let ce=c,ae=l,be=u;if(!n.isMounted)if(r)ce=N||c,ae=D||l,be=M||u;else return;let Ne=!1;const nt=O._enterCb=We=>{Ne||(Ne=!0,We?W(be,[O]):W(ae,[O]),Q.delayedLeave&&Q.delayedLeave(),O._enterCb=void 0)};ce?ye(ce,[O,nt]):nt()},leave(O,ce){const ae=String(t.key);if(O._enterCb&&O._enterCb(!0),n.isUnmounting)return ce();W(h,[O]);let be=!1;const Ne=O._leaveCb=nt=>{be||(be=!0,ce(),nt?W(v,[O]):W(g,[O]),O._leaveCb=void 0,G[ae]===t&&delete G[ae])};G[ae]=t,d?ye(d,[O,Ne]):Ne()},clone(O){return _o(O,e,n,s)}};return Q}function Wi(t){if(fi(t))return t=Jt(t),t.children=null,t}function Qc(t){return fi(t)?t.children?t.children[0]:void 0:t}function So(t,e){t.shapeFlag&6&&t.component?So(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function wh(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===gt?(o.patchFlag&128&&r++,s=s.concat(wh(o.children,e,a))):(e||o.type!==wt)&&s.push(a!=null?Jt(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Eh(t){return Y(t)?{setup:t,name:t.name}:t}const Or=t=>!!t.type.__asyncLoader,fi=t=>t.type.__isKeepAlive;function Fg(t,e){bh(t,"a",e)}function Vg(t,e){bh(t,"da",e)}function bh(t,e,n=Ue){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(di(e,s,n),n){let r=n.parent;for(;r&&r.parent;)fi(r.parent.vnode)&&Ug(s,e,n,r),r=r.parent}}function Ug(t,e,n,s){const r=di(e,t,s,!0);Oa(()=>{wa(s[e],r)},n)}function di(t,e,n=Ue,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;cs(),Jn(n);const a=ut(e,n,t,o);return bn(),ls(),a});return s?r.unshift(i):r.push(i),i}}const Bt=t=>(e,n=Ue)=>(!js||t==="sp")&&di(t,(...s)=>e(...s),n),Bg=Bt("bm"),Th=Bt("m"),$g=Bt("bu"),jg=Bt("u"),Ih=Bt("bum"),Oa=Bt("um"),Hg=Bt("sp"),qg=Bt("rtg"),Kg=Bt("rtc");function zg(t,e=Ue){di("ec",t,e)}function cn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(cs(),ut(c,n,8,[t.el,a,t,e]),ls())}}const Gg=Symbol();function Wg(t,e,n,s){let r;const i=n&&n[s];if(z(t)||ke(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(we(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const Ao=t=>t?Mh(t)?Ua(t)||t.proxy:Ao(t.parent):null,_s=ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ao(t.parent),$root:t=>Ao(t.root),$emit:t=>t.emit,$options:t=>Pa(t),$forceUpdate:t=>t.f||(t.f=()=>Na(t.update)),$nextTick:t=>t.n||(t.n=ka.bind(t.proxy)),$watch:t=>Og.bind(t)}),Qg={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==me&&te(s,e))return o[e]=1,s[e];if(r!==me&&te(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&te(l,e))return o[e]=3,i[e];if(n!==me&&te(n,e))return o[e]=4,n[e];Do&&(o[e]=0)}}const u=_s[e];let h,d;if(u)return e==="$attrs"&&at(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==me&&te(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,te(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==me&&te(r,e)?(r[e]=n,!0):s!==me&&te(s,e)?(s[e]=n,!0):te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==me&&te(t,o)||e!==me&&te(e,o)||(a=i[0])&&te(a,o)||te(s,o)||te(_s,o)||te(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:te(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Do=!0;function Yg(t){const e=Pa(t),n=t.proxy,s=t.ctx;Do=!1,e.beforeCreate&&Yc(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:v,activated:T,deactivated:N,beforeDestroy:D,beforeUnmount:M,destroyed:P,unmounted:G,render:W,renderTracked:ye,renderTriggered:Q,errorCaptured:O,serverPrefetch:ce,expose:ae,inheritAttrs:be,components:Ne,directives:nt,filters:We}=e;if(l&&Xg(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const pe in o){const fe=o[pe];Y(fe)&&(s[pe]=fe.bind(n))}if(r){const pe=r.call(n,n);we(pe)&&(t.data=us(pe))}if(Do=!0,i)for(const pe in i){const fe=i[pe],ft=Y(fe)?fe.bind(n,n):Y(fe.get)?fe.get.bind(n,n):vt,an=!Y(fe)&&Y(fe.set)?fe.set.bind(n):vt,dt=rt({get:ft,set:an});Object.defineProperty(s,pe,{enumerable:!0,configurable:!0,get:()=>dt.value,set:Xe=>dt.value=Xe})}if(a)for(const pe in a)Ch(a[pe],s,n,pe);if(c){const pe=Y(c)?c.call(n):c;Reflect.ownKeys(pe).forEach(fe=>{Nr(fe,pe[fe])})}u&&Yc(u,t,"c");function _e(pe,fe){z(fe)?fe.forEach(ft=>pe(ft.bind(n))):fe&&pe(fe.bind(n))}if(_e(Bg,h),_e(Th,d),_e($g,g),_e(jg,v),_e(Fg,T),_e(Vg,N),_e(zg,O),_e(Kg,ye),_e(qg,Q),_e(Ih,M),_e(Oa,G),_e(Hg,ce),z(ae))if(ae.length){const pe=t.exposed||(t.exposed={});ae.forEach(fe=>{Object.defineProperty(pe,fe,{get:()=>n[fe],set:ft=>n[fe]=ft})})}else t.exposed||(t.exposed={});W&&t.render===vt&&(t.render=W),be!=null&&(t.inheritAttrs=be),Ne&&(t.components=Ne),nt&&(t.directives=nt)}function Xg(t,e,n=vt,s=!1){z(t)&&(t=Ro(t));for(const r in t){const i=t[r];let o;we(i)?"default"in i?o=Rt(i.from||r,i.default,!0):o=Rt(i.from||r):o=Rt(i),Ce(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Yc(t,e,n){ut(z(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ch(t,e,n,s){const r=s.includes(".")?yh(n,s):()=>n[s];if(ke(t)){const i=e[t];Y(i)&&Cs(r,i)}else if(Y(t))Cs(r,t.bind(n));else if(we(t))if(z(t))t.forEach(i=>Ch(i,e,n,s));else{const i=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(i)&&Cs(r,i,t)}}function Pa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>$r(c,l,o,!0)),$r(c,e,o)),we(e)&&i.set(e,c),c}function $r(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&$r(t,i,n,!0),r&&r.forEach(o=>$r(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Jg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Jg={data:Xc,props:un,emits:un,methods:un,computed:un,beforeCreate:Qe,created:Qe,beforeMount:Qe,mounted:Qe,beforeUpdate:Qe,updated:Qe,beforeDestroy:Qe,beforeUnmount:Qe,destroyed:Qe,unmounted:Qe,activated:Qe,deactivated:Qe,errorCaptured:Qe,serverPrefetch:Qe,components:un,directives:un,watch:em,provide:Xc,inject:Zg};function Xc(t,e){return e?t?function(){return ze(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function Zg(t,e){return un(Ro(t),Ro(e))}function Ro(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Qe(t,e){return t?[...new Set([].concat(t,e))]:e}function un(t,e){return t?ze(ze(Object.create(null),t),e):e}function em(t,e){if(!t)return e;if(!e)return t;const n=ze(Object.create(null),t);for(const s in e)n[s]=Qe(t[s],e[s]);return n}function tm(t,e,n,s=!1){const r={},i={};Vr(i,pi,1),t.propsDefaults=Object.create(null),_h(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:hg(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function nm(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ie(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(hi(t.emitsOptions,d))continue;const g=e[d];if(c)if(te(i,d))g!==i[d]&&(i[d]=g,l=!0);else{const v=Qn(d);r[v]=xo(c,a,v,g,t,!1)}else g!==i[d]&&(i[d]=g,l=!0)}}}else{_h(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!te(e,h)&&((u=as(h))===h||!te(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=xo(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!te(e,h)&&!0)&&(delete i[h],l=!0)}l&&Mt(t,"set","$attrs")}function _h(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(kr(c))continue;const l=e[c];let u;r&&te(r,u=Qn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:hi(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=ie(n),l=a||me;for(let u=0;u<i.length;u++){const h=i[u];n[h]=xo(r,c,h,l[h],t,!te(l,h))}}return o}function xo(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=te(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&Y(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Jn(r),s=l[n]=c.call(null,e),bn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===as(n))&&(s=!0))}return s}function Sh(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!Y(t)){const u=h=>{c=!0;const[d,g]=Sh(h,e,!0);ze(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return we(t)&&s.set(t,Hn),Hn;if(z(i))for(let u=0;u<i.length;u++){const h=Qn(i[u]);Jc(h)&&(o[h]=me)}else if(i)for(const u in i){const h=Qn(u);if(Jc(h)){const d=i[u],g=o[h]=z(d)||Y(d)?{type:d}:Object.assign({},d);if(g){const v=tl(Boolean,g.type),T=tl(String,g.type);g[0]=v>-1,g[1]=T<0||v<T,(v>-1||te(g,"default"))&&a.push(h)}}}const l=[o,a];return we(t)&&s.set(t,l),l}function Jc(t){return t[0]!=="$"}function Zc(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function el(t,e){return Zc(t)===Zc(e)}function tl(t,e){return z(e)?e.findIndex(n=>el(n,t)):Y(e)&&el(e,t)?0:-1}const Ah=t=>t[0]==="_"||t==="$stable",Ma=t=>z(t)?t.map(Ct):[Ct(t)],sm=(t,e,n)=>{if(e._n)return e;const s=Sg((...r)=>Ma(e(...r)),n);return s._c=!1,s},Dh=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Ah(r))continue;const i=t[r];if(Y(i))e[r]=sm(r,i,s);else if(i!=null){const o=Ma(i);e[r]=()=>o}}},Rh=(t,e)=>{const n=Ma(e);t.slots.default=()=>n},rm=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ie(e),Vr(e,"_",n)):Dh(e,t.slots={})}else t.slots={},e&&Rh(t,e);Vr(t.slots,pi,1)},im=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=me;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ze(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Dh(e,r)),o=e}else e&&(Rh(t,e),o={default:1});if(i)for(const a in r)!Ah(a)&&!(a in o)&&delete r[a]};function xh(){return{app:null,config:{isNativeTag:Np,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let om=0;function am(t,e){return function(s,r=null){Y(s)||(s=Object.assign({},s)),r!=null&&!we(r)&&(r=null);const i=xh(),o=new Set;let a=!1;const c=i.app={_uid:om++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Dm,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Y(l.install)?(o.add(l),l.install(c,...u)):Y(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=it(s,r);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Ua(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function ko(t,e,n,s,r=!1){if(z(t)){t.forEach((d,g)=>ko(d,e&&(z(e)?e[g]:e),n,s,r));return}if(Or(s)&&!r)return;const i=s.shapeFlag&4?Ua(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===me?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(ke(l)?(u[l]=null,te(h,l)&&(h[l]=null)):Ce(l)&&(l.value=null)),Y(c))Wt(c,a,12,[o,u]);else{const d=ke(c),g=Ce(c);if(d||g){const v=()=>{if(t.f){const T=d?te(h,c)?h[c]:u[c]:c.value;r?z(T)&&wa(T,i):z(T)?T.includes(i)||T.push(i):d?(u[c]=[i],te(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,te(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,Je(v,n)):v()}}}const Je=Ng;function cm(t){return lm(t)}function lm(t,e){const n=Vp();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=vt,insertStaticContent:v}=t,T=(f,p,m,y=null,E=null,_=null,x=!1,C=null,S=!!p.dynamicChildren)=>{if(f===p)return;f&&!dn(f,p)&&(y=A(f),Xe(f,E,_,!0),f=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:b,ref:B,shapeFlag:L}=p;switch(b){case La:N(f,p,m,y);break;case wt:D(f,p,m,y);break;case Qi:f==null&&M(p,m,y,x);break;case gt:Ne(f,p,m,y,E,_,x,C,S);break;default:L&1?W(f,p,m,y,E,_,x,C,S):L&6?nt(f,p,m,y,E,_,x,C,S):(L&64||L&128)&&b.process(f,p,m,y,E,_,x,C,S,se)}B!=null&&E&&ko(B,f&&f.ref,_,p||f,!p)},N=(f,p,m,y)=>{if(f==null)s(p.el=a(p.children),m,y);else{const E=p.el=f.el;p.children!==f.children&&l(E,p.children)}},D=(f,p,m,y)=>{f==null?s(p.el=c(p.children||""),m,y):p.el=f.el},M=(f,p,m,y)=>{[f.el,f.anchor]=v(f.children,p,m,y,f.el,f.anchor)},P=({el:f,anchor:p},m,y)=>{let E;for(;f&&f!==p;)E=d(f),s(f,m,y),f=E;s(p,m,y)},G=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),r(f),f=m;r(p)},W=(f,p,m,y,E,_,x,C,S)=>{x=x||p.type==="svg",f==null?ye(p,m,y,E,_,x,C,S):ce(f,p,E,_,x,C,S)},ye=(f,p,m,y,E,_,x,C)=>{let S,b;const{type:B,props:L,shapeFlag:$,transition:K,dirs:ee}=f;if(S=f.el=o(f.type,_,L&&L.is,L),$&8?u(S,f.children):$&16&&O(f.children,S,null,y,E,_&&B!=="foreignObject",x,C),ee&&cn(f,null,y,"created"),L){for(const de in L)de!=="value"&&!kr(de)&&i(S,de,null,L[de],_,f.children,y,E,k);"value"in L&&i(S,"value",null,L.value),(b=L.onVnodeBeforeMount)&&Tt(b,y,f)}Q(S,f,f.scopeId,x,y),ee&&cn(f,null,y,"beforeMount");const ge=(!E||E&&!E.pendingBranch)&&K&&!K.persisted;ge&&K.beforeEnter(S),s(S,p,m),((b=L&&L.onVnodeMounted)||ge||ee)&&Je(()=>{b&&Tt(b,y,f),ge&&K.enter(S),ee&&cn(f,null,y,"mounted")},E)},Q=(f,p,m,y,E)=>{if(m&&g(f,m),y)for(let _=0;_<y.length;_++)g(f,y[_]);if(E){let _=E.subTree;if(p===_){const x=E.vnode;Q(f,x,x.scopeId,x.slotScopeIds,E.parent)}}},O=(f,p,m,y,E,_,x,C,S=0)=>{for(let b=S;b<f.length;b++){const B=f[b]=C?Ht(f[b]):Ct(f[b]);T(null,B,p,m,y,E,_,x,C)}},ce=(f,p,m,y,E,_,x)=>{const C=p.el=f.el;let{patchFlag:S,dynamicChildren:b,dirs:B}=p;S|=f.patchFlag&16;const L=f.props||me,$=p.props||me;let K;m&&ln(m,!1),(K=$.onVnodeBeforeUpdate)&&Tt(K,m,p,f),B&&cn(p,f,m,"beforeUpdate"),m&&ln(m,!0);const ee=E&&p.type!=="foreignObject";if(b?ae(f.dynamicChildren,b,C,m,y,ee,_):x||fe(f,p,C,null,m,y,ee,_,!1),S>0){if(S&16)be(C,p,L,$,m,y,E);else if(S&2&&L.class!==$.class&&i(C,"class",null,$.class,E),S&4&&i(C,"style",L.style,$.style,E),S&8){const ge=p.dynamicProps;for(let de=0;de<ge.length;de++){const Se=ge[de],pt=L[Se],Pn=$[Se];(Pn!==pt||Se==="value")&&i(C,Se,pt,Pn,E,f.children,m,y,k)}}S&1&&f.children!==p.children&&u(C,p.children)}else!x&&b==null&&be(C,p,L,$,m,y,E);((K=$.onVnodeUpdated)||B)&&Je(()=>{K&&Tt(K,m,p,f),B&&cn(p,f,m,"updated")},y)},ae=(f,p,m,y,E,_,x)=>{for(let C=0;C<p.length;C++){const S=f[C],b=p[C],B=S.el&&(S.type===gt||!dn(S,b)||S.shapeFlag&70)?h(S.el):m;T(S,b,B,null,y,E,_,x,!0)}},be=(f,p,m,y,E,_,x)=>{if(m!==y){if(m!==me)for(const C in m)!kr(C)&&!(C in y)&&i(f,C,m[C],null,x,p.children,E,_,k);for(const C in y){if(kr(C))continue;const S=y[C],b=m[C];S!==b&&C!=="value"&&i(f,C,b,S,x,p.children,E,_,k)}"value"in y&&i(f,"value",m.value,y.value)}},Ne=(f,p,m,y,E,_,x,C,S)=>{const b=p.el=f?f.el:a(""),B=p.anchor=f?f.anchor:a("");let{patchFlag:L,dynamicChildren:$,slotScopeIds:K}=p;K&&(C=C?C.concat(K):K),f==null?(s(b,m,y),s(B,m,y),O(p.children,m,B,E,_,x,C,S)):L>0&&L&64&&$&&f.dynamicChildren?(ae(f.dynamicChildren,$,m,E,_,x,C),(p.key!=null||E&&p===E.subTree)&&kh(f,p,!0)):fe(f,p,m,B,E,_,x,C,S)},nt=(f,p,m,y,E,_,x,C,S)=>{p.slotScopeIds=C,f==null?p.shapeFlag&512?E.ctx.activate(p,m,y,x,S):We(p,m,y,E,_,x,S):Oe(f,p,S)},We=(f,p,m,y,E,_,x)=>{const C=f.component=Em(f,y,E);if(fi(f)&&(C.ctx.renderer=se),bm(C),C.asyncDep){if(E&&E.registerDep(C,_e),!f.el){const S=C.subTree=it(wt);D(null,S,p,m)}return}_e(C,f,p,m,E,_,x)},Oe=(f,p,m)=>{const y=p.component=f.component;if(Rg(f,p,m))if(y.asyncDep&&!y.asyncResolved){pe(y,p,m);return}else y.next=p,Tg(y.update),y.update();else p.el=f.el,y.vnode=p},_e=(f,p,m,y,E,_,x)=>{const C=()=>{if(f.isMounted){let{next:B,bu:L,u:$,parent:K,vnode:ee}=f,ge=B,de;ln(f,!1),B?(B.el=ee.el,pe(f,B,x)):B=ee,L&&zi(L),(de=B.props&&B.props.onVnodeBeforeUpdate)&&Tt(de,K,B,ee),ln(f,!0);const Se=Gi(f),pt=f.subTree;f.subTree=Se,T(pt,Se,h(pt.el),A(pt),f,E,_),B.el=Se.el,ge===null&&xg(f,Se.el),$&&Je($,E),(de=B.props&&B.props.onVnodeUpdated)&&Je(()=>Tt(de,K,B,ee),E)}else{let B;const{el:L,props:$}=p,{bm:K,m:ee,parent:ge}=f,de=Or(p);if(ln(f,!1),K&&zi(K),!de&&(B=$&&$.onVnodeBeforeMount)&&Tt(B,ge,p),ln(f,!0),L&&X){const Se=()=>{f.subTree=Gi(f),X(L,f.subTree,f,E,null)};de?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Se()):Se()}else{const Se=f.subTree=Gi(f);T(null,Se,m,y,f,E,_),p.el=Se.el}if(ee&&Je(ee,E),!de&&(B=$&&$.onVnodeMounted)){const Se=p;Je(()=>Tt(B,ge,Se),E)}(p.shapeFlag&256||ge&&Or(ge.vnode)&&ge.vnode.shapeFlag&256)&&f.a&&Je(f.a,E),f.isMounted=!0,p=m=y=null}},S=f.effect=new Ia(C,()=>Na(b),f.scope),b=f.update=()=>S.run();b.id=f.uid,ln(f,!0),b()},pe=(f,p,m)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,nm(f,p.props,y,m),im(f,p.children,m),cs(),Gc(),ls()},fe=(f,p,m,y,E,_,x,C,S=!1)=>{const b=f&&f.children,B=f?f.shapeFlag:0,L=p.children,{patchFlag:$,shapeFlag:K}=p;if($>0){if($&128){an(b,L,m,y,E,_,x,C,S);return}else if($&256){ft(b,L,m,y,E,_,x,C,S);return}}K&8?(B&16&&k(b,E,_),L!==b&&u(m,L)):B&16?K&16?an(b,L,m,y,E,_,x,C,S):k(b,E,_,!0):(B&8&&u(m,""),K&16&&O(L,m,y,E,_,x,C,S))},ft=(f,p,m,y,E,_,x,C,S)=>{f=f||Hn,p=p||Hn;const b=f.length,B=p.length,L=Math.min(b,B);let $;for($=0;$<L;$++){const K=p[$]=S?Ht(p[$]):Ct(p[$]);T(f[$],K,m,null,E,_,x,C,S)}b>B?k(f,E,_,!0,!1,L):O(p,m,y,E,_,x,C,S,L)},an=(f,p,m,y,E,_,x,C,S)=>{let b=0;const B=p.length;let L=f.length-1,$=B-1;for(;b<=L&&b<=$;){const K=f[b],ee=p[b]=S?Ht(p[b]):Ct(p[b]);if(dn(K,ee))T(K,ee,m,null,E,_,x,C,S);else break;b++}for(;b<=L&&b<=$;){const K=f[L],ee=p[$]=S?Ht(p[$]):Ct(p[$]);if(dn(K,ee))T(K,ee,m,null,E,_,x,C,S);else break;L--,$--}if(b>L){if(b<=$){const K=$+1,ee=K<B?p[K].el:y;for(;b<=$;)T(null,p[b]=S?Ht(p[b]):Ct(p[b]),m,ee,E,_,x,C,S),b++}}else if(b>$)for(;b<=L;)Xe(f[b],E,_,!0),b++;else{const K=b,ee=b,ge=new Map;for(b=ee;b<=$;b++){const st=p[b]=S?Ht(p[b]):Ct(p[b]);st.key!=null&&ge.set(st.key,b)}let de,Se=0;const pt=$-ee+1;let Pn=!1,Lc=0;const ys=new Array(pt);for(b=0;b<pt;b++)ys[b]=0;for(b=K;b<=L;b++){const st=f[b];if(Se>=pt){Xe(st,E,_,!0);continue}let bt;if(st.key!=null)bt=ge.get(st.key);else for(de=ee;de<=$;de++)if(ys[de-ee]===0&&dn(st,p[de])){bt=de;break}bt===void 0?Xe(st,E,_,!0):(ys[bt-ee]=b+1,bt>=Lc?Lc=bt:Pn=!0,T(st,p[bt],m,null,E,_,x,C,S),Se++)}const Fc=Pn?um(ys):Hn;for(de=Fc.length-1,b=pt-1;b>=0;b--){const st=ee+b,bt=p[st],Vc=st+1<B?p[st+1].el:y;ys[b]===0?T(null,bt,m,Vc,E,_,x,C,S):Pn&&(de<0||b!==Fc[de]?dt(bt,m,Vc,2):de--)}}},dt=(f,p,m,y,E=null)=>{const{el:_,type:x,transition:C,children:S,shapeFlag:b}=f;if(b&6){dt(f.component.subTree,p,m,y);return}if(b&128){f.suspense.move(p,m,y);return}if(b&64){x.move(f,p,m,se);return}if(x===gt){s(_,p,m);for(let L=0;L<S.length;L++)dt(S[L],p,m,y);s(f.anchor,p,m);return}if(x===Qi){P(f,p,m);return}if(y!==2&&b&1&&C)if(y===0)C.beforeEnter(_),s(_,p,m),Je(()=>C.enter(_),E);else{const{leave:L,delayLeave:$,afterLeave:K}=C,ee=()=>s(_,p,m),ge=()=>{L(_,()=>{ee(),K&&K()})};$?$(_,ee,ge):ge()}else s(_,p,m)},Xe=(f,p,m,y=!1,E=!1)=>{const{type:_,props:x,ref:C,children:S,dynamicChildren:b,shapeFlag:B,patchFlag:L,dirs:$}=f;if(C!=null&&ko(C,null,m,f,!0),B&256){p.ctx.deactivate(f);return}const K=B&1&&$,ee=!Or(f);let ge;if(ee&&(ge=x&&x.onVnodeBeforeUnmount)&&Tt(ge,p,f),B&6)w(f.component,m,y);else{if(B&128){f.suspense.unmount(m,y);return}K&&cn(f,null,p,"beforeUnmount"),B&64?f.type.remove(f,p,m,E,se,y):b&&(_!==gt||L>0&&L&64)?k(b,p,m,!1,!0):(_===gt&&L&384||!E&&B&16)&&k(S,p,m),y&&On(f)}(ee&&(ge=x&&x.onVnodeUnmounted)||K)&&Je(()=>{ge&&Tt(ge,p,f),K&&cn(f,null,p,"unmounted")},m)},On=f=>{const{type:p,el:m,anchor:y,transition:E}=f;if(p===gt){mr(m,y);return}if(p===Qi){G(f);return}const _=()=>{r(m),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(f.shapeFlag&1&&E&&!E.persisted){const{leave:x,delayLeave:C}=E,S=()=>x(m,_);C?C(f.el,_,S):S()}else _()},mr=(f,p)=>{let m;for(;f!==p;)m=d(f),r(f),f=m;r(p)},w=(f,p,m)=>{const{bum:y,scope:E,update:_,subTree:x,um:C}=f;y&&zi(y),E.stop(),_&&(_.active=!1,Xe(x,f,p,m)),C&&Je(C,p),Je(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},k=(f,p,m,y=!1,E=!1,_=0)=>{for(let x=_;x<f.length;x++)Xe(f[x],p,m,y,E)},A=f=>f.shapeFlag&6?A(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),U=(f,p,m)=>{f==null?p._vnode&&Xe(p._vnode,null,null,!0):T(p._vnode||null,f,p,null,null,null,m),Gc(),fh(),p._vnode=f},se={p:T,um:Xe,m:dt,r:On,mt:We,mc:O,pc:fe,pbc:ae,n:A,o:t};let Ee,X;return e&&([Ee,X]=e(se)),{render:U,hydrate:Ee,createApp:am(U,Ee)}}function ln({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function kh(t,e,n=!1){const s=t.children,r=e.children;if(z(s)&&z(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Ht(r[i]),a.el=o.el),n||kh(o,a))}}function um(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const hm=t=>t.__isTeleport,gt=Symbol(void 0),La=Symbol(void 0),wt=Symbol(void 0),Qi=Symbol(void 0),Ss=[];let yt=null;function Bn(t=!1){Ss.push(yt=t?null:[])}function fm(){Ss.pop(),yt=Ss[Ss.length-1]||null}let $s=1;function nl(t){$s+=t}function Nh(t){return t.dynamicChildren=$s>0?yt||Hn:null,fm(),$s>0&&yt&&yt.push(t),t}function Ir(t,e,n,s,r,i){return Nh(As(t,e,n,s,r,i,!0))}function Oh(t,e,n,s,r){return Nh(it(t,e,n,s,r,!0))}function No(t){return t?t.__v_isVNode===!0:!1}function dn(t,e){return t.type===e.type&&t.key===e.key}const pi="__vInternal",Ph=({key:t})=>t!=null?t:null,Pr=({ref:t,ref_key:e,ref_for:n})=>t!=null?ke(t)||Ce(t)||Y(t)?{i:Dt,r:t,k:e,f:!!n}:t:null;function As(t,e=null,n=null,s=0,r=null,i=t===gt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ph(e),ref:e&&Pr(e),scopeId:gh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Fa(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ke(n)?8:16),$s>0&&!o&&yt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&yt.push(c),c}const it=dm;function dm(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Gg)&&(t=wt),No(t)){const a=Jt(t,e,!0);return n&&Fa(a,n),$s>0&&!i&&yt&&(a.shapeFlag&6?yt[yt.indexOf(t)]=a:yt.push(a)),a.patchFlag|=-2,a}if(_m(t)&&(t=t.__vccOpts),e){e=pm(e);let{class:a,style:c}=e;a&&!ke(a)&&(e.class=ya(a)),we(c)&&(rh(c)&&!z(c)&&(c=ze({},c)),e.style=ma(c))}const o=ke(t)?1:kg(t)?128:hm(t)?64:we(t)?4:Y(t)?2:0;return As(t,e,n,s,r,o,i,!0)}function pm(t){return t?rh(t)||pi in t?ze({},t):t:null}function Jt(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?ym(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ph(a),ref:e&&e.ref?n&&r?z(r)?r.concat(Pr(e)):[r,Pr(e)]:Pr(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==gt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Jt(t.ssContent),ssFallback:t.ssFallback&&Jt(t.ssFallback),el:t.el,anchor:t.anchor}}function gm(t=" ",e=0){return it(La,null,t,e)}function mm(t="",e=!1){return e?(Bn(),Oh(wt,null,t)):it(wt,null,t)}function Ct(t){return t==null||typeof t=="boolean"?it(wt):z(t)?it(gt,null,t.slice()):typeof t=="object"?Ht(t):it(La,null,String(t))}function Ht(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Jt(t)}function Fa(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Fa(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(pi in e)?e._ctx=Dt:r===3&&Dt&&(Dt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:Dt},n=32):(e=String(e),s&64?(n=16,e=[gm(e)]):n=8);t.children=e,t.shapeFlag|=n}function ym(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=ya([e.class,s.class]));else if(r==="style")e.style=ma([e.style,s.style]);else if(oi(r)){const i=e[r],o=s[r];o&&i!==o&&!(z(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Tt(t,e,n,s=null){ut(t,e,7,[n,s])}const vm=xh();let wm=0;function Em(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||vm,i={uid:wm++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ku(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sh(s,r),emitsOptions:ph(s,r),emit:null,emitted:null,propsDefaults:me,inheritAttrs:s.inheritAttrs,ctx:me,data:me,props:me,attrs:me,slots:me,refs:me,setupState:me,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=_g.bind(null,i),t.ce&&t.ce(i),i}let Ue=null;const Va=()=>Ue||Dt,Jn=t=>{Ue=t,t.scope.on()},bn=()=>{Ue&&Ue.scope.off(),Ue=null};function Mh(t){return t.vnode.shapeFlag&4}let js=!1;function bm(t,e=!1){js=e;const{props:n,children:s}=t.vnode,r=Mh(t);tm(t,n,r,e),rm(t,s);const i=r?Tm(t,e):void 0;return js=!1,i}function Tm(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Xn(new Proxy(t.ctx,Qg));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Cm(t):null;Jn(t),cs();const i=Wt(s,t,0,[t.props,r]);if(ls(),bn(),Bu(i)){if(i.then(bn,bn),e)return i.then(o=>{sl(t,o,e)}).catch(o=>{ui(o,t,0)});t.asyncDep=i}else sl(t,i,e)}else Lh(t,e)}function sl(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:we(e)&&(t.setupState=ch(e)),Lh(t,n)}let rl;function Lh(t,e,n){const s=t.type;if(!t.render){if(!e&&rl&&!s.render){const r=s.template||Pa(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=ze(ze({isCustomElement:i,delimiters:a},o),c);s.render=rl(r,l)}}t.render=s.render||vt}Jn(t),cs(),Yg(t),ls(),bn()}function Im(t){return new Proxy(t.attrs,{get(e,n){return at(t,"get","$attrs"),e[n]}})}function Cm(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Im(t))},slots:t.slots,emit:t.emit,expose:e}}function Ua(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ch(Xn(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in _s)return _s[n](t)},has(e,n){return n in e||n in _s}}))}function _m(t){return Y(t)&&"__vccOpts"in t}const rt=(t,e)=>wg(t,e,js);function Fh(t,e,n){const s=arguments.length;return s===2?we(e)&&!z(e)?No(e)?it(t,null,[e]):it(t,e):it(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&No(n)&&(n=[n]),it(t,e,n))}const Sm=Symbol(""),Am=()=>Rt(Sm),Dm="3.2.44",Rm="http://www.w3.org/2000/svg",pn=typeof document<"u"?document:null,il=pn&&pn.createElement("template"),xm={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?pn.createElementNS(Rm,t):pn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>pn.createTextNode(t),createComment:t=>pn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>pn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{il.innerHTML=s?`<svg>${t}</svg>`:t;const a=il.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function km(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Nm(t,e,n){const s=t.style,r=ke(n);if(n&&!r){for(const i in n)Oo(s,i,n[i]);if(e&&!ke(e))for(const i in e)n[i]==null&&Oo(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const ol=/\s*!important$/;function Oo(t,e,n){if(z(n))n.forEach(s=>Oo(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Om(t,e);ol.test(n)?t.setProperty(as(s),n.replace(ol,""),"important"):t[s]=n}}const al=["Webkit","Moz","ms"],Yi={};function Om(t,e){const n=Yi[e];if(n)return n;let s=Qn(e);if(s!=="filter"&&s in t)return Yi[e]=s;s=Hu(s);for(let r=0;r<al.length;r++){const i=al[r]+s;if(i in t)return Yi[e]=i}return e}const cl="http://www.w3.org/1999/xlink";function Pm(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(cl,e.slice(6,e.length)):t.setAttributeNS(cl,e,n);else{const i=kp(e);n==null||i&&!Fu(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Mm(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Fu(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Lm(t,e,n,s){t.addEventListener(e,n,s)}function Fm(t,e,n,s){t.removeEventListener(e,n,s)}function Vm(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Um(e);if(s){const l=i[e]=jm(s,r);Lm(t,a,l,c)}else o&&(Fm(t,a,o,c),i[e]=void 0)}}const ll=/(?:Once|Passive|Capture)$/;function Um(t){let e;if(ll.test(t)){e={};let s;for(;s=t.match(ll);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):as(t.slice(2)),e]}let Xi=0;const Bm=Promise.resolve(),$m=()=>Xi||(Bm.then(()=>Xi=0),Xi=Date.now());function jm(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ut(Hm(s,n.value),e,5,[s])};return n.value=t,n.attached=$m(),n}function Hm(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const ul=/^on[a-z]/,qm=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?km(t,s,r):e==="style"?Nm(t,n,s):oi(e)?va(e)||Vm(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Km(t,e,s,r))?Mm(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Pm(t,e,s,r))};function Km(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&ul.test(e)&&Y(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ul.test(e)&&ke(n)?!1:e in t}const zm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Lg.props;const Gm=ze({patchProp:qm},xm);let hl;function Wm(){return hl||(hl=cm(Gm))}const Qm=(...t)=>{const e=Wm().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Ym(s);if(!r)return;const i=e._component;!Y(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Ym(t){return ke(t)?document.querySelector(t):t}var Xm=!1;/*!
  * pinia v2.0.23
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Vh;const gi=t=>Vh=t,Uh=Symbol();function Po(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ds;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ds||(Ds={}));function Jm(){const t=zu(!0),e=t.run(()=>Ra({}));let n=[],s=[];const r=Xn({install(i){gi(r),r._a=i,i.provide(Uh,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!Xm?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const Bh=()=>{};function fl(t,e,n,s=Bh){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&Va()&&Oa(r),r}function Mn(t,...e){t.slice().forEach(n=>{n(...e)})}function Mo(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];Po(r)&&Po(s)&&t.hasOwnProperty(n)&&!Ce(s)&&!Gt(s)?t[n]=Mo(r,s):t[n]=s}return t}const Zm=Symbol();function ey(t){return!Po(t)||!t.hasOwnProperty(Zm)}const{assign:qt}=Object;function ty(t){return!!(Ce(t)&&t.effect)}function ny(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const u=gg(n.state.value[t]);return qt(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=Xn(rt(()=>{gi(n);const g=n._s.get(t);return o[d].call(g,g)})),h),{}))}return c=$h(t,l,e,n,s,!0),c.$reset=function(){const h=r?r():{};this.$patch(d=>{qt(d,h)})},c}function $h(t,e,n={},s,r,i){let o;const a=qt({actions:{}},n),c={deep:!0};let l,u,h=Xn([]),d=Xn([]),g;const v=s.state.value[t];!i&&!v&&(s.state.value[t]={}),Ra({});let T;function N(Q){let O;l=u=!1,typeof Q=="function"?(Q(s.state.value[t]),O={type:Ds.patchFunction,storeId:t,events:g}):(Mo(s.state.value[t],Q),O={type:Ds.patchObject,payload:Q,storeId:t,events:g});const ce=T=Symbol();ka().then(()=>{T===ce&&(l=!0)}),u=!0,Mn(h,O,s.state.value[t])}const D=Bh;function M(){o.stop(),h=[],d=[],s._s.delete(t)}function P(Q,O){return function(){gi(s);const ce=Array.from(arguments),ae=[],be=[];function Ne(Oe){ae.push(Oe)}function nt(Oe){be.push(Oe)}Mn(d,{args:ce,name:Q,store:W,after:Ne,onError:nt});let We;try{We=O.apply(this&&this.$id===t?this:W,ce)}catch(Oe){throw Mn(be,Oe),Oe}return We instanceof Promise?We.then(Oe=>(Mn(ae,Oe),Oe)).catch(Oe=>(Mn(be,Oe),Promise.reject(Oe))):(Mn(ae,We),We)}}const G={_p:s,$id:t,$onAction:fl.bind(null,d),$patch:N,$reset:D,$subscribe(Q,O={}){const ce=fl(h,Q,O.detached,()=>ae()),ae=o.run(()=>Cs(()=>s.state.value[t],be=>{(O.flush==="sync"?u:l)&&Q({storeId:t,type:Ds.direct,events:g},be)},qt({},c,O)));return ce},$dispose:M},W=us(G);s._s.set(t,W);const ye=s._e.run(()=>(o=zu(),o.run(()=>e())));for(const Q in ye){const O=ye[Q];if(Ce(O)&&!ty(O)||Gt(O))i||(v&&ey(O)&&(Ce(O)?O.value=v[Q]:Mo(O,v[Q])),s.state.value[t][Q]=O);else if(typeof O=="function"){const ce=P(Q,O);ye[Q]=ce,a.actions[Q]=O}}return qt(W,ye),qt(ie(W),ye),Object.defineProperty(W,"$state",{get:()=>s.state.value[t],set:Q=>{N(O=>{qt(O,Q)})}}),s._p.forEach(Q=>{qt(W,o.run(()=>Q({store:W,app:s._a,pinia:s,options:a})))}),v&&i&&n.hydrate&&n.hydrate(W.$state,v),l=!0,u=!0,W}function sy(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const l=Va();return a=a||l&&Rt(Uh),a&&gi(a),a=Vh,a._s.has(s)||(i?$h(s,e,r,a):ny(s,r,a)),a._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Vn=typeof window<"u";function ry(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ue=Object.assign;function Ji(t,e){const n={};for(const s in e){const r=e[s];n[s]=Et(r)?r.map(t):t(r)}return n}const Rs=()=>{},Et=Array.isArray,iy=/\/$/,oy=t=>t.replace(iy,"");function Zi(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=uy(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function ay(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function dl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function cy(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Zn(e.matched[s],n.matched[r])&&jh(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Zn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function jh(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!ly(t[n],e[n]))return!1;return!0}function ly(t,e){return Et(t)?pl(t,e):Et(e)?pl(e,t):t===e}function pl(t,e){return Et(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function uy(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Hs;(function(t){t.pop="pop",t.push="push"})(Hs||(Hs={}));var xs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(xs||(xs={}));function hy(t){if(!t)if(Vn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),oy(t)}const fy=/^[^#]+#/;function dy(t,e){return t.replace(fy,"#")+e}function py(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const mi=()=>({left:window.pageXOffset,top:window.pageYOffset});function gy(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=py(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function gl(t,e){return(history.state?history.state.position-e:-1)+t}const Lo=new Map;function my(t,e){Lo.set(t,e)}function yy(t){const e=Lo.get(t);return Lo.delete(t),e}let vy=()=>location.protocol+"//"+location.host;function Hh(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),dl(c,"")}return dl(n,t)+s+r}function wy(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const g=Hh(t,location),v=n.value,T=e.value;let N=0;if(d){if(n.value=g,e.value=d,o&&o===v){o=null;return}N=T?d.position-T.position:0}else s(g);r.forEach(D=>{D(n.value,v,{delta:N,type:Hs.pop,direction:N?N>0?xs.forward:xs.back:xs.unknown})})};function c(){o=n.value}function l(d){r.push(d);const g=()=>{const v=r.indexOf(d);v>-1&&r.splice(v,1)};return i.push(g),g}function u(){const{history:d}=window;!d.state||d.replaceState(ue({},d.state,{scroll:mi()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function ml(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?mi():null}}function Ey(t){const{history:e,location:n}=window,s={value:Hh(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:vy()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=ue({},e.state,ml(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=ue({},r.value,e.state,{forward:c,scroll:mi()});i(u.current,u,!0);const h=ue({},ml(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function by(t){t=hy(t);const e=Ey(t),n=wy(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ue({location:"",base:t,go:s,createHref:dy.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Ty(t){return typeof t=="string"||t&&typeof t=="object"}function qh(t){return typeof t=="string"||typeof t=="symbol"}const jt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Kh=Symbol("");var yl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(yl||(yl={}));function es(t,e){return ue(new Error,{type:t,[Kh]:!0},e)}function Nt(t,e){return t instanceof Error&&Kh in t&&(e==null||!!(t.type&e))}const vl="[^/]+?",Iy={sensitive:!1,strict:!1,start:!0,end:!0},Cy=/[.+*?^${}()[\]/\\]/g;function _y(t,e){const n=ue({},Iy,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(Cy,"\\$&"),g+=40;else if(d.type===1){const{value:v,repeatable:T,optional:N,regexp:D}=d;i.push({name:v,repeatable:T,optional:N});const M=D||vl;if(M!==vl){g+=10;try{new RegExp(`(${M})`)}catch(G){throw new Error(`Invalid custom RegExp for param "${v}" (${M}): `+G.message)}}let P=T?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(P=N&&l.length<2?`(?:/${P})`:"/"+P),N&&(P+="?"),r+=P,g+=20,N&&(g+=-8),T&&(g+=-20),M===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",v=i[d-1];h[v.name]=g&&v.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:v,repeatable:T,optional:N}=g,D=v in l?l[v]:"";if(Et(D)&&!T)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const M=Et(D)?D.join("/"):D;if(!M)if(N)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);u+=M}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function Sy(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Ay(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=Sy(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(wl(s))return 1;if(wl(r))return-1}return r.length-s.length}function wl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Dy={type:0,value:""},Ry=/[a-zA-Z0-9_]/;function xy(t){if(!t)return[[]];if(t==="/")return[[Dy]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:Ry.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function ky(t,e,n){const s=_y(xy(t.path),n),r=ue(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Ny(t,e){const n=[],s=new Map;e=Tl({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const g=!d,v=Oy(u);v.aliasOf=d&&d.record;const T=Tl(e,u),N=[v];if("alias"in u){const P=typeof u.alias=="string"?[u.alias]:u.alias;for(const G of P)N.push(ue({},v,{components:d?d.record.components:v.components,path:G,aliasOf:d?d.record:v}))}let D,M;for(const P of N){const{path:G}=P;if(h&&G[0]!=="/"){const W=h.record.path,ye=W[W.length-1]==="/"?"":"/";P.path=h.record.path+(G&&ye+G)}if(D=ky(P,h,T),d?d.alias.push(D):(M=M||D,M!==D&&M.alias.push(D),g&&u.name&&!bl(D)&&o(u.name)),v.children){const W=v.children;for(let ye=0;ye<W.length;ye++)i(W[ye],D,d&&d.children[ye])}d=d||D,(D.record.components&&Object.keys(D.record.components).length||D.record.name||D.record.redirect)&&c(D)}return M?()=>{o(M)}:Rs}function o(u){if(qh(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&Ay(u,n[h])>=0&&(u.record.path!==n[h].record.path||!zh(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!bl(u)&&s.set(u.record.name,u)}function l(u,h){let d,g={},v,T;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw es(1,{location:u});T=d.record.name,g=ue(El(h.params,d.keys.filter(M=>!M.optional).map(M=>M.name)),u.params&&El(u.params,d.keys.map(M=>M.name))),v=d.stringify(g)}else if("path"in u)v=u.path,d=n.find(M=>M.re.test(v)),d&&(g=d.parse(v),T=d.record.name);else{if(d=h.name?s.get(h.name):n.find(M=>M.re.test(h.path)),!d)throw es(1,{location:u,currentLocation:h});T=d.record.name,g=ue({},h.params,u.params),v=d.stringify(g)}const N=[];let D=d;for(;D;)N.unshift(D.record),D=D.parent;return{name:T,path:v,params:g,matched:N,meta:My(N)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function El(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Oy(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Py(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Py(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function bl(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function My(t){return t.reduce((e,n)=>ue(e,n.meta),{})}function Tl(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function zh(t,e){return e.children.some(n=>n===t||zh(t,n))}const Gh=/#/g,Ly=/&/g,Fy=/\//g,Vy=/=/g,Uy=/\?/g,Wh=/\+/g,By=/%5B/g,$y=/%5D/g,Qh=/%5E/g,jy=/%60/g,Yh=/%7B/g,Hy=/%7C/g,Xh=/%7D/g,qy=/%20/g;function Ba(t){return encodeURI(""+t).replace(Hy,"|").replace(By,"[").replace($y,"]")}function Ky(t){return Ba(t).replace(Yh,"{").replace(Xh,"}").replace(Qh,"^")}function Fo(t){return Ba(t).replace(Wh,"%2B").replace(qy,"+").replace(Gh,"%23").replace(Ly,"%26").replace(jy,"`").replace(Yh,"{").replace(Xh,"}").replace(Qh,"^")}function zy(t){return Fo(t).replace(Vy,"%3D")}function Gy(t){return Ba(t).replace(Gh,"%23").replace(Uy,"%3F")}function Wy(t){return t==null?"":Gy(t).replace(Fy,"%2F")}function jr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Qy(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Wh," "),o=i.indexOf("="),a=jr(o<0?i:i.slice(0,o)),c=o<0?null:jr(i.slice(o+1));if(a in e){let l=e[a];Et(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Il(t){let e="";for(let n in t){const s=t[n];if(n=zy(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Et(s)?s.map(i=>i&&Fo(i)):[s&&Fo(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Yy(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Et(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const Xy=Symbol(""),Cl=Symbol(""),$a=Symbol(""),Jh=Symbol(""),Vo=Symbol("");function vs(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Kt(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(es(4,{from:n,to:e})):h instanceof Error?a(h):Ty(h)?a(es(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function eo(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Jy(a)){const l=(a.__vccOpts||a)[e];l&&r.push(Kt(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=ry(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Kt(d,n,s,i,o)()}))}}return r}function Jy(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function _l(t){const e=Rt($a),n=Rt(Jh),s=rt(()=>e.resolve(En(t.to))),r=rt(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Zn.bind(null,u));if(d>-1)return d;const g=Sl(c[l-2]);return l>1&&Sl(u)===g&&h[h.length-1].path!==g?h.findIndex(Zn.bind(null,c[l-2])):d}),i=rt(()=>r.value>-1&&nv(n.params,s.value.params)),o=rt(()=>r.value>-1&&r.value===n.matched.length-1&&jh(n.params,s.value.params));function a(c={}){return tv(c)?e[En(t.replace)?"replace":"push"](En(t.to)).catch(Rs):Promise.resolve()}return{route:s,href:rt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const Zy=Eh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_l,setup(t,{slots:e}){const n=us(_l(t)),{options:s}=Rt($a),r=rt(()=>({[Al(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Al(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Fh("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),ev=Zy;function tv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function nv(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Et(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Sl(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Al=(t,e,n)=>t!=null?t:e!=null?e:n,sv=Eh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Rt(Vo),r=rt(()=>t.route||s.value),i=Rt(Cl,0),o=rt(()=>{let l=En(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=rt(()=>r.value.matched[o.value]);Nr(Cl,rt(()=>o.value+1)),Nr(Xy,a),Nr(Vo,r);const c=Ra();return Cs(()=>[c.value,a.value,t.name],([l,u,h],[d,g,v])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Zn(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(T=>T(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Dl(n.default,{Component:d,route:l});const g=h.props[u],v=g?g===!0?l.params:typeof g=="function"?g(l):g:null,N=Fh(d,ue({},v,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Dl(n.default,{Component:N,route:l})||N}}});function Dl(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Zh=sv;function rv(t){const e=Ny(t.routes,t),n=t.parseQuery||Qy,s=t.stringifyQuery||Il,r=t.history,i=vs(),o=vs(),a=vs(),c=fg(jt);let l=jt;Vn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ji.bind(null,w=>""+w),h=Ji.bind(null,Wy),d=Ji.bind(null,jr);function g(w,k){let A,U;return qh(w)?(A=e.getRecordMatcher(w),U=k):U=w,e.addRoute(U,A)}function v(w){const k=e.getRecordMatcher(w);k&&e.removeRoute(k)}function T(){return e.getRoutes().map(w=>w.record)}function N(w){return!!e.getRecordMatcher(w)}function D(w,k){if(k=ue({},k||c.value),typeof w=="string"){const f=Zi(n,w,k.path),p=e.resolve({path:f.path},k),m=r.createHref(f.fullPath);return ue(f,p,{params:d(p.params),hash:jr(f.hash),redirectedFrom:void 0,href:m})}let A;if("path"in w)A=ue({},w,{path:Zi(n,w.path,k.path).path});else{const f=ue({},w.params);for(const p in f)f[p]==null&&delete f[p];A=ue({},w,{params:h(w.params)}),k.params=h(k.params)}const U=e.resolve(A,k),se=w.hash||"";U.params=u(d(U.params));const Ee=ay(s,ue({},w,{hash:Ky(se),path:U.path})),X=r.createHref(Ee);return ue({fullPath:Ee,hash:se,query:s===Il?Yy(w.query):w.query||{}},U,{redirectedFrom:void 0,href:X})}function M(w){return typeof w=="string"?Zi(n,w,c.value.path):ue({},w)}function P(w,k){if(l!==w)return es(8,{from:k,to:w})}function G(w){return Q(w)}function W(w){return G(ue(M(w),{replace:!0}))}function ye(w){const k=w.matched[w.matched.length-1];if(k&&k.redirect){const{redirect:A}=k;let U=typeof A=="function"?A(w):A;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=M(U):{path:U},U.params={}),ue({query:w.query,hash:w.hash,params:"path"in U?{}:w.params},U)}}function Q(w,k){const A=l=D(w),U=c.value,se=w.state,Ee=w.force,X=w.replace===!0,f=ye(A);if(f)return Q(ue(M(f),{state:typeof f=="object"?ue({},se,f.state):se,force:Ee,replace:X}),k||A);const p=A;p.redirectedFrom=k;let m;return!Ee&&cy(s,U,A)&&(m=es(16,{to:p,from:U}),an(U,U,!0,!1)),(m?Promise.resolve(m):ce(p,U)).catch(y=>Nt(y)?Nt(y,2)?y:ft(y):pe(y,p,U)).then(y=>{if(y){if(Nt(y,2))return Q(ue({replace:X},M(y.to),{state:typeof y.to=="object"?ue({},se,y.to.state):se,force:Ee}),k||p)}else y=be(p,U,!0,X,se);return ae(p,U,y),y})}function O(w,k){const A=P(w,k);return A?Promise.reject(A):Promise.resolve()}function ce(w,k){let A;const[U,se,Ee]=iv(w,k);A=eo(U.reverse(),"beforeRouteLeave",w,k);for(const f of U)f.leaveGuards.forEach(p=>{A.push(Kt(p,w,k))});const X=O.bind(null,w,k);return A.push(X),Ln(A).then(()=>{A=[];for(const f of i.list())A.push(Kt(f,w,k));return A.push(X),Ln(A)}).then(()=>{A=eo(se,"beforeRouteUpdate",w,k);for(const f of se)f.updateGuards.forEach(p=>{A.push(Kt(p,w,k))});return A.push(X),Ln(A)}).then(()=>{A=[];for(const f of w.matched)if(f.beforeEnter&&!k.matched.includes(f))if(Et(f.beforeEnter))for(const p of f.beforeEnter)A.push(Kt(p,w,k));else A.push(Kt(f.beforeEnter,w,k));return A.push(X),Ln(A)}).then(()=>(w.matched.forEach(f=>f.enterCallbacks={}),A=eo(Ee,"beforeRouteEnter",w,k),A.push(X),Ln(A))).then(()=>{A=[];for(const f of o.list())A.push(Kt(f,w,k));return A.push(X),Ln(A)}).catch(f=>Nt(f,8)?f:Promise.reject(f))}function ae(w,k,A){for(const U of a.list())U(w,k,A)}function be(w,k,A,U,se){const Ee=P(w,k);if(Ee)return Ee;const X=k===jt,f=Vn?history.state:{};A&&(U||X?r.replace(w.fullPath,ue({scroll:X&&f&&f.scroll},se)):r.push(w.fullPath,se)),c.value=w,an(w,k,A,X),ft()}let Ne;function nt(){Ne||(Ne=r.listen((w,k,A)=>{if(!mr.listening)return;const U=D(w),se=ye(U);if(se){Q(ue(se,{replace:!0}),U).catch(Rs);return}l=U;const Ee=c.value;Vn&&my(gl(Ee.fullPath,A.delta),mi()),ce(U,Ee).catch(X=>Nt(X,12)?X:Nt(X,2)?(Q(X.to,U).then(f=>{Nt(f,20)&&!A.delta&&A.type===Hs.pop&&r.go(-1,!1)}).catch(Rs),Promise.reject()):(A.delta&&r.go(-A.delta,!1),pe(X,U,Ee))).then(X=>{X=X||be(U,Ee,!1),X&&(A.delta&&!Nt(X,8)?r.go(-A.delta,!1):A.type===Hs.pop&&Nt(X,20)&&r.go(-1,!1)),ae(U,Ee,X)}).catch(Rs)}))}let We=vs(),Oe=vs(),_e;function pe(w,k,A){ft(w);const U=Oe.list();return U.length?U.forEach(se=>se(w,k,A)):console.error(w),Promise.reject(w)}function fe(){return _e&&c.value!==jt?Promise.resolve():new Promise((w,k)=>{We.add([w,k])})}function ft(w){return _e||(_e=!w,nt(),We.list().forEach(([k,A])=>w?A(w):k()),We.reset()),w}function an(w,k,A,U){const{scrollBehavior:se}=t;if(!Vn||!se)return Promise.resolve();const Ee=!A&&yy(gl(w.fullPath,0))||(U||!A)&&history.state&&history.state.scroll||null;return ka().then(()=>se(w,k,Ee)).then(X=>X&&gy(X)).catch(X=>pe(X,w,k))}const dt=w=>r.go(w);let Xe;const On=new Set,mr={currentRoute:c,listening:!0,addRoute:g,removeRoute:v,hasRoute:N,getRoutes:T,resolve:D,options:t,push:G,replace:W,go:dt,back:()=>dt(-1),forward:()=>dt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Oe.add,isReady:fe,install(w){const k=this;w.component("RouterLink",ev),w.component("RouterView",Zh),w.config.globalProperties.$router=k,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>En(c)}),Vn&&!Xe&&c.value===jt&&(Xe=!0,G(r.location).catch(se=>{}));const A={};for(const se in jt)A[se]=rt(()=>c.value[se]);w.provide($a,k),w.provide(Jh,us(A)),w.provide(Vo,c);const U=w.unmount;On.add(w),w.unmount=function(){On.delete(w),On.size<1&&(l=jt,Ne&&Ne(),Ne=null,c.value=jt,Xe=!1,_e=!1),U()}}};return mr}function Ln(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function iv(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Zn(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Zn(l,c))||r.push(c))}return[n,s,r]}const ov={__name:"App",setup(t){return(e,n)=>(Bn(),Oh(En(Zh)))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},av=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},tf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ef(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):av(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const v=l<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},cv=function(t){const e=ef(t);return tf.encodeByteArray(e,!0)},Hr=function(t){return cv(t).replace(/\./g,"")},lv=function(t){try{return tf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function uv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function nf(){return typeof indexedDB=="object"}function sf(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function hv(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function fv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=()=>fv().__FIREBASE_DEFAULTS__,pv=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},gv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&lv(t[1]);return e&&JSON.parse(e)},rf=()=>{try{return dv()||pv()||gv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mv=t=>{var e,n;return(n=(e=rf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},yv=t=>{const e=mv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},vv=()=>{var t;return(t=rf())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Hr(JSON.stringify(n)),Hr(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv="FirebaseError";class sn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=bv,Object.setPrototypeOf(this,sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yi.prototype.create)}}class yi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Tv(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new sn(r,a,s)}}function Tv(t,e){return t.replace(Iv,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Iv=/\{\$([^}]+)}/g;function qr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Rl(i)&&Rl(o)){if(!qr(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Rl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv=1e3,_v=2,Sv=4*60*60*1e3,Av=.5;function xl(t,e=Cv,n=_v){const s=e*Math.pow(n,t),r=Math.round(Av*s*(Math.random()-.5)*2);return Math.min(Sv,s+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(t){return t&&t._delegate?t._delegate:t}class Lt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new wv;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xv(e))try{this.getOrInitializeService({instanceIdentifier:hn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=hn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hn){return this.instances.has(e)}getOptions(e=hn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Rv(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=hn){return this.component?this.component.multipleInstances?e:hn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rv(t){return t===hn?void 0:t}function xv(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Dv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const Nv={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},Ov=le.INFO,Pv={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},Mv=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Pv[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ha{constructor(e){this.name=e,this._logLevel=Ov,this._logHandler=Mv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Nv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const Lv=(t,e)=>e.some(n=>t instanceof n);let kl,Nl;function Fv(){return kl||(kl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vv(){return Nl||(Nl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const of=new WeakMap,Uo=new WeakMap,af=new WeakMap,to=new WeakMap,qa=new WeakMap;function Uv(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Qt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&of.set(n,t)}).catch(()=>{}),qa.set(e,t),e}function Bv(t){if(Uo.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Uo.set(t,e)}let Bo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Uo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||af.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $v(t){Bo=t(Bo)}function jv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(no(this),e,...n);return af.set(s,e.sort?e.sort():[e]),Qt(s)}:Vv().includes(t)?function(...e){return t.apply(no(this),e),Qt(of.get(this))}:function(...e){return Qt(t.apply(no(this),e))}}function Hv(t){return typeof t=="function"?jv(t):(t instanceof IDBTransaction&&Bv(t),Lv(t,Fv())?new Proxy(t,Bo):t)}function Qt(t){if(t instanceof IDBRequest)return Uv(t);if(to.has(t))return to.get(t);const e=Hv(t);return e!==t&&(to.set(t,e),qa.set(e,t)),e}const no=t=>qa.get(t);function cf(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Qt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Qt(o.result),c.oldVersion,c.newVersion,Qt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const qv=["get","getKey","getAll","getAllKeys","count"],Kv=["put","add","delete","clear"],so=new Map;function Ol(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(so.get(e))return so.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Kv.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||qv.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return so.set(e,i),i}$v(t=>({...t,get:(e,n,s)=>Ol(e,n)||t.get(e,n,s),has:(e,n)=>!!Ol(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Gv(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Gv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $o="@firebase/app",Pl="0.8.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new Ha("@firebase/app"),Wv="@firebase/app-compat",Qv="@firebase/analytics-compat",Yv="@firebase/analytics",Xv="@firebase/app-check-compat",Jv="@firebase/app-check",Zv="@firebase/auth",ew="@firebase/auth-compat",tw="@firebase/database",nw="@firebase/database-compat",sw="@firebase/functions",rw="@firebase/functions-compat",iw="@firebase/installations",ow="@firebase/installations-compat",aw="@firebase/messaging",cw="@firebase/messaging-compat",lw="@firebase/performance",uw="@firebase/performance-compat",hw="@firebase/remote-config",fw="@firebase/remote-config-compat",dw="@firebase/storage",pw="@firebase/storage-compat",gw="@firebase/firestore",mw="@firebase/firestore-compat",yw="firebase",vw="9.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo="[DEFAULT]",ww={[$o]:"fire-core",[Wv]:"fire-core-compat",[Yv]:"fire-analytics",[Qv]:"fire-analytics-compat",[Jv]:"fire-app-check",[Xv]:"fire-app-check-compat",[Zv]:"fire-auth",[ew]:"fire-auth-compat",[tw]:"fire-rtdb",[nw]:"fire-rtdb-compat",[sw]:"fire-fn",[rw]:"fire-fn-compat",[iw]:"fire-iid",[ow]:"fire-iid-compat",[aw]:"fire-fcm",[cw]:"fire-fcm-compat",[lw]:"fire-perf",[uw]:"fire-perf-compat",[hw]:"fire-rc",[fw]:"fire-rc-compat",[dw]:"fire-gcs",[pw]:"fire-gcs-compat",[gw]:"fire-fst",[mw]:"fire-fst-compat","fire-js":"fire-js",[yw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new Map,Ho=new Map;function Ew(t,e){try{t.container.addComponent(e)}catch(n){An.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zt(t){const e=t.name;if(Ho.has(e))return An.debug(`There were multiple attempts to register component ${e}.`),!1;Ho.set(e,t);for(const n of Kr.values())Ew(n,t);return!0}function nr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Yt=new yi("app","Firebase",bw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Lt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw=vw;function lf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:jo,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Yt.create("bad-app-name",{appName:String(r)});if(n||(n=vv()),!n)throw Yt.create("no-options");const i=Kr.get(r);if(i){if(qr(n,i.options)&&qr(s,i.config))return i;throw Yt.create("duplicate-app",{appName:r})}const o=new kv(r);for(const c of Ho.values())o.addComponent(c);const a=new Tw(n,s,o);return Kr.set(r,a),a}function uf(t=jo){const e=Kr.get(t);if(!e&&t===jo)return lf();if(!e)throw Yt.create("no-app",{appName:t});return e}function xt(t,e,n){var s;let r=(s=ww[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),An.warn(a.join(" "));return}Zt(new Lt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw="firebase-heartbeat-database",_w=1,qs="firebase-heartbeat-store";let ro=null;function hf(){return ro||(ro=cf(Cw,_w,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(qs)}}}).catch(t=>{throw Yt.create("idb-open",{originalErrorMessage:t.message})})),ro}async function Sw(t){var e;try{return(await hf()).transaction(qs).objectStore(qs).get(ff(t))}catch(n){if(n instanceof sn)An.warn(n.message);else{const s=Yt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});An.warn(s.message)}}}async function Ml(t,e){var n;try{const r=(await hf()).transaction(qs,"readwrite");return await r.objectStore(qs).put(e,ff(t)),r.done}catch(s){if(s instanceof sn)An.warn(s.message);else{const r=Yt.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});An.warn(r.message)}}}function ff(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=1024,Dw=30*24*60*60*1e3;class Rw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ll();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Dw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ll(),{heartbeatsToSend:n,unsentEntries:s}=xw(this._heartbeatsCache.heartbeats),r=Hr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ll(){return new Date().toISOString().substring(0,10)}function xw(t,e=Aw){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Fl(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Fl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class kw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nf()?sf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Sw(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ml(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ml(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Fl(t){return Hr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(t){Zt(new Lt("platform-logger",e=>new zv(e),"PRIVATE")),Zt(new Lt("heartbeat",e=>new Rw(e),"PRIVATE")),xt($o,Pl,t),xt($o,Pl,"esm2017"),xt("fire-js","")}Nw("");var Ow=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F,Ka=Ka||{},q=Ow||self;function zr(){}function vi(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function sr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Pw(t){return Object.prototype.hasOwnProperty.call(t,io)&&t[io]||(t[io]=++Mw)}var io="closure_uid_"+(1e9*Math.random()>>>0),Mw=0;function Lw(t,e,n){return t.call.apply(t.bind,arguments)}function Fw(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function qe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?qe=Lw:qe=Fw,qe.apply(null,arguments)}function Cr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function $e(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function rn(){this.s=this.s,this.o=this.o}var Vw=0;rn.prototype.s=!1;rn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Vw!=0)&&Pw(this)};rn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const df=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function za(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Vl(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(vi(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Ke(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ke.prototype.h=function(){this.defaultPrevented=!0};var Uw=function(){if(!q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{q.addEventListener("test",zr,e),q.removeEventListener("test",zr,e)}catch{}return t}();function Gr(t){return/^[\s\xa0]*$/.test(t)}var Ul=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function oo(t,e){return t<e?-1:t>e?1:0}function wi(){var t=q.navigator;return t&&(t=t.userAgent)?t:""}function St(t){return wi().indexOf(t)!=-1}function Ga(t){return Ga[" "](t),t}Ga[" "]=zr;function Bw(t){var e=Hw;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var $w=St("Opera"),ts=St("Trident")||St("MSIE"),pf=St("Edge"),qo=pf||ts,gf=St("Gecko")&&!(wi().toLowerCase().indexOf("webkit")!=-1&&!St("Edge"))&&!(St("Trident")||St("MSIE"))&&!St("Edge"),jw=wi().toLowerCase().indexOf("webkit")!=-1&&!St("Edge");function mf(){var t=q.document;return t?t.documentMode:void 0}var Wr;e:{var ao="",co=function(){var t=wi();if(gf)return/rv:([^\);]+)(\)|;)/.exec(t);if(pf)return/Edge\/([\d\.]+)/.exec(t);if(ts)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(jw)return/WebKit\/(\S+)/.exec(t);if($w)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(co&&(ao=co?co[1]:""),ts){var lo=mf();if(lo!=null&&lo>parseFloat(ao)){Wr=String(lo);break e}}Wr=ao}var Hw={};function qw(){return Bw(function(){let t=0;const e=Ul(String(Wr)).split("."),n=Ul("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=oo(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||oo(r[2].length==0,i[2].length==0)||oo(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Ko;if(q.document&&ts){var Bl=mf();Ko=Bl||parseInt(Wr,10)||void 0}else Ko=void 0;var Kw=Ko;function Ks(t,e){if(Ke.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(gf){e:{try{Ga(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:zw[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ks.X.h.call(this)}}$e(Ks,Ke);var zw={2:"touch",3:"pen",4:"mouse"};Ks.prototype.h=function(){Ks.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var rr="closure_listenable_"+(1e6*Math.random()|0),Gw=0;function Ww(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++Gw,this.ba=this.ea=!1}function Ei(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Wa(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function yf(t){const e={};for(const n in t)e[n]=t[n];return e}const $l="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vf(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<$l.length;i++)n=$l[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function bi(t){this.src=t,this.g={},this.h=0}bi.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Go(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Ww(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function zo(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=df(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Ei(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Go(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var Qa="closure_lm_"+(1e6*Math.random()|0),uo={};function wf(t,e,n,s,r){if(s&&s.once)return bf(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)wf(t,e[i],n,s,r);return null}return n=Ja(n),t&&t[rr]?t.N(e,n,sr(s)?!!s.capture:!!s,r):Ef(t,e,n,!1,s,r)}function Ef(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=sr(r)?!!r.capture:!!r,a=Xa(t);if(a||(t[Qa]=a=new bi(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=Qw(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Uw||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(If(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Qw(){function t(n){return e.call(t.src,t.listener,n)}const e=Yw;return t}function bf(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)bf(t,e[i],n,s,r);return null}return n=Ja(n),t&&t[rr]?t.O(e,n,sr(s)?!!s.capture:!!s,r):Ef(t,e,n,!0,s,r)}function Tf(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Tf(t,e[i],n,s,r);else s=sr(s)?!!s.capture:!!s,n=Ja(n),t&&t[rr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Go(i,n,s,r),-1<n&&(Ei(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Xa(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Go(e,n,s,r)),(n=-1<t?e[t]:null)&&Ya(n))}function Ya(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[rr])zo(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(If(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Xa(e))?(zo(n,t),n.h==0&&(n.src=null,e[Qa]=null)):Ei(t)}}}function If(t){return t in uo?uo[t]:uo[t]="on"+t}function Yw(t,e){if(t.ba)t=!0;else{e=new Ks(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Ya(t),t=n.call(s,e)}return t}function Xa(t){return t=t[Qa],t instanceof bi?t:null}var ho="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ja(t){return typeof t=="function"?t:(t[ho]||(t[ho]=function(e){return t.handleEvent(e)}),t[ho])}function Me(){rn.call(this),this.i=new bi(this),this.P=this,this.I=null}$e(Me,rn);Me.prototype[rr]=!0;Me.prototype.removeEventListener=function(t,e,n,s){Tf(this,t,e,n,s)};function Be(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ke(e,t);else if(e instanceof Ke)e.target=e.target||t;else{var r=e;e=new Ke(s,t),vf(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=_r(o,s,!0,e)&&r}if(o=e.g=t,r=_r(o,s,!0,e)&&r,r=_r(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=_r(o,s,!1,e)&&r}Me.prototype.M=function(){if(Me.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Ei(n[s]);delete t.g[e],t.h--}}this.I=null};Me.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Me.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function _r(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&zo(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Za=q.JSON.stringify;function Xw(){var t=Sf;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Jw{constructor(){this.h=this.g=null}add(e,n){const s=Cf.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Cf=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Zw,t=>t.reset());class Zw{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function eE(t){q.setTimeout(()=>{throw t},0)}function _f(t,e){Wo||tE(),Qo||(Wo(),Qo=!0),Sf.add(t,e)}var Wo;function tE(){var t=q.Promise.resolve(void 0);Wo=function(){t.then(nE)}}var Qo=!1,Sf=new Jw;function nE(){for(var t;t=Xw();){try{t.h.call(t.g)}catch(n){eE(n)}var e=Cf;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Qo=!1}function Ti(t,e){Me.call(this),this.h=t||1,this.g=e||q,this.j=qe(this.lb,this),this.l=Date.now()}$e(Ti,Me);F=Ti.prototype;F.ca=!1;F.R=null;F.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Be(this,"tick"),this.ca&&(ec(this),this.start()))}};F.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ec(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}F.M=function(){Ti.X.M.call(this),ec(this),delete this.g};function tc(t,e,n){if(typeof t=="function")n&&(t=qe(t,n));else if(t&&typeof t.handleEvent=="function")t=qe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:q.setTimeout(t,e||0)}function Af(t){t.g=tc(()=>{t.g=null,t.i&&(t.i=!1,Af(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class sE extends rn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Af(this)}M(){super.M(),this.g&&(q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zs(t){rn.call(this),this.h=t,this.g={}}$e(zs,rn);var jl=[];function Df(t,e,n,s){Array.isArray(n)||(n&&(jl[0]=n.toString()),n=jl);for(var r=0;r<n.length;r++){var i=wf(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Rf(t){Wa(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ya(e)},t),t.g={}}zs.prototype.M=function(){zs.X.M.call(this),Rf(this)};zs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ii(){this.g=!0}Ii.prototype.Aa=function(){this.g=!1};function rE(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function iE(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function $n(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+aE(t,n)+(s?" "+s:"")})}function oE(t,e){t.info(function(){return"TIMEOUT: "+e})}Ii.prototype.info=function(){};function aE(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Za(n)}catch{return e}}var Nn={},Hl=null;function Ci(){return Hl=Hl||new Me}Nn.Pa="serverreachability";function xf(t){Ke.call(this,Nn.Pa,t)}$e(xf,Ke);function Gs(t){const e=Ci();Be(e,new xf(e))}Nn.STAT_EVENT="statevent";function kf(t,e){Ke.call(this,Nn.STAT_EVENT,t),this.stat=e}$e(kf,Ke);function Ye(t){const e=Ci();Be(e,new kf(e,t))}Nn.Qa="timingevent";function Nf(t,e){Ke.call(this,Nn.Qa,t),this.size=e}$e(Nf,Ke);function ir(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return q.setTimeout(function(){t()},e)}var _i={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Of={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function nc(){}nc.prototype.h=null;function ql(t){return t.h||(t.h=t.i())}function Pf(){}var or={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function sc(){Ke.call(this,"d")}$e(sc,Ke);function rc(){Ke.call(this,"c")}$e(rc,Ke);var Yo;function Si(){}$e(Si,nc);Si.prototype.g=function(){return new XMLHttpRequest};Si.prototype.i=function(){return{}};Yo=new Si;function ar(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new zs(this),this.O=cE,t=qo?125:void 0,this.T=new Ti(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Mf}function Mf(){this.i=null,this.g="",this.h=!1}var cE=45e3,Xo={},Qr={};F=ar.prototype;F.setTimeout=function(t){this.O=t};function Jo(t,e,n){t.K=1,t.v=Di(Ft(e)),t.s=n,t.P=!0,Lf(t,null)}function Lf(t,e){t.F=Date.now(),cr(t),t.A=Ft(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),qf(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Mf,t.g=hd(t.l,n?e:null,!t.s),0<t.N&&(t.L=new sE(qe(t.La,t,t.g),t.N)),Df(t.S,t.g,"readystatechange",t.ib),e=t.H?yf(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Gs(),rE(t.j,t.u,t.A,t.m,t.U,t.s)}F.ib=function(t){t=t.target;const e=this.L;e&&Pt(t)==3?e.l():this.La(t)};F.La=function(t){try{if(t==this.g)e:{const u=Pt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||qo||this.g&&(this.h.h||this.g.fa()||Wl(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Gs(3):Gs(2)),Ai(this);var n=this.g.aa();this.Y=n;t:if(Ff(this)){var s=Wl(this.g);t="";var r=s.length,i=Pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gn(this),ks(this);var o="";break t}this.h.i=new q.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,iE(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Gr(a)){var l=a;break t}}l=null}if(n=l)$n(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Zo(this,n);else{this.i=!1,this.o=3,Ye(12),gn(this),ks(this);break e}}this.P?(Vf(this,u,o),qo&&this.i&&u==3&&(Df(this.S,this.T,"tick",this.hb),this.T.start())):($n(this.j,this.m,o,null),Zo(this,o)),u==4&&gn(this),this.i&&!this.I&&(u==4?ad(this.l,this):(this.i=!1,cr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ye(12)):(this.o=0,Ye(13)),gn(this),ks(this)}}}catch{}finally{}};function Ff(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Vf(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=lE(t,n),r==Qr){e==4&&(t.o=4,Ye(14),s=!1),$n(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Xo){t.o=4,Ye(15),$n(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else $n(t.j,t.m,r,null),Zo(t,r);Ff(t)&&r!=Qr&&r!=Xo&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ye(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),hc(e),e.K=!0,Ye(11))):($n(t.j,t.m,n,"[Invalid Chunked Response]"),gn(t),ks(t))}F.hb=function(){if(this.g){var t=Pt(this.g),e=this.g.fa();this.C<e.length&&(Ai(this),Vf(this,t,e),this.i&&t!=4&&cr(this))}};function lE(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Qr:(n=Number(e.substring(n,s)),isNaN(n)?Xo:(s+=1,s+n>e.length?Qr:(e=e.substr(s,n),t.C=s+n,e)))}F.cancel=function(){this.I=!0,gn(this)};function cr(t){t.V=Date.now()+t.O,Uf(t,t.O)}function Uf(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ir(qe(t.gb,t),e)}function Ai(t){t.B&&(q.clearTimeout(t.B),t.B=null)}F.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(oE(this.j,this.A),this.K!=2&&(Gs(),Ye(17)),gn(this),this.o=2,ks(this)):Uf(this,this.V-t)};function ks(t){t.l.G==0||t.I||ad(t.l,t)}function gn(t){Ai(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ec(t.T),Rf(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Zo(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||ea(n.h,t))){if(!t.J&&ea(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Jr(n),ki(n);else break e;uc(n),Ye(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=ir(qe(n.cb,n),6e3));if(1>=Gf(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else mn(n,11)}else if((t.J||n.g==t)&&Jr(n),!Gr(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var i=s.h;i.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ic(i,i.h),i.h=null))}if(s.D){const T=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(s.za=T,ve(s.F,s.D,T))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=ud(s,s.H?s.ka:null,s.V),o.J){Wf(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Ai(a),cr(a)),s.g=o}else id(s);0<n.i.length&&Ni(n)}else l[0]!="stop"&&l[0]!="close"||mn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?mn(n,7):lc(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Gs(4)}catch{}}function uE(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(vi(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function hE(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(vi(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Bf(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(vi(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=hE(t),s=uE(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var $f=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fE(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Tn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Tn){this.h=e!==void 0?e:t.h,Yr(this,t.j),this.s=t.s,this.g=t.g,Xr(this,t.m),this.l=t.l,e=t.i;var n=new Ws;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Kl(this,n),this.o=t.o}else t&&(n=String(t).match($f))?(this.h=!!e,Yr(this,n[1]||"",!0),this.s=bs(n[2]||""),this.g=bs(n[3]||"",!0),Xr(this,n[4]),this.l=bs(n[5]||"",!0),Kl(this,n[6]||"",!0),this.o=bs(n[7]||"")):(this.h=!!e,this.i=new Ws(null,this.h))}Tn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ts(e,zl,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ts(e,zl,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ts(n,n.charAt(0)=="/"?gE:pE,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ts(n,yE)),t.join("")};function Ft(t){return new Tn(t)}function Yr(t,e,n){t.j=n?bs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Xr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Kl(t,e,n){e instanceof Ws?(t.i=e,vE(t.i,t.h)):(n||(e=Ts(e,mE)),t.i=new Ws(e,t.h))}function ve(t,e,n){t.i.set(e,n)}function Di(t){return ve(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function bs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ts(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,dE),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function dE(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var zl=/[#\/\?@]/g,pE=/[#\?:]/g,gE=/[#\?]/g,mE=/[#\?@]/g,yE=/#/g;function Ws(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function on(t){t.g||(t.g=new Map,t.h=0,t.i&&fE(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}F=Ws.prototype;F.add=function(t,e){on(this),this.i=null,t=hs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function jf(t,e){on(t),e=hs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Hf(t,e){return on(t),e=hs(t,e),t.g.has(e)}F.forEach=function(t,e){on(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};F.oa=function(){on(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};F.W=function(t){on(this);let e=[];if(typeof t=="string")Hf(this,t)&&(e=e.concat(this.g.get(hs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};F.set=function(t,e){return on(this),this.i=null,t=hs(this,t),Hf(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};F.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function qf(t,e,n){jf(t,e),0<n.length&&(t.i=null,t.g.set(hs(t,e),za(n)),t.h+=n.length)}F.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function hs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function vE(t,e){e&&!t.j&&(on(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(jf(this,s),qf(this,r,n))},t)),t.j=e}var wE=class{constructor(t,e){this.h=t,this.g=e}};function Kf(t){this.l=t||EE,q.PerformanceNavigationTiming?(t=q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(q.g&&q.g.Ga&&q.g.Ga()&&q.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var EE=10;function zf(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Gf(t){return t.h?1:t.g?t.g.size:0}function ea(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ic(t,e){t.g?t.g.add(e):t.h=e}function Wf(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Kf.prototype.cancel=function(){if(this.i=Qf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Qf(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return za(t.i)}function oc(){}oc.prototype.stringify=function(t){return q.JSON.stringify(t,void 0)};oc.prototype.parse=function(t){return q.JSON.parse(t,void 0)};function bE(){this.g=new oc}function TE(t,e,n){const s=n||"";try{Bf(t,function(r,i){let o=r;sr(r)&&(o=Za(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function IE(t,e){const n=new Ii;if(q.Image){const s=new Image;s.onload=Cr(Sr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Cr(Sr,n,s,"TestLoadImage: error",!1,e),s.onabort=Cr(Sr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Cr(Sr,n,s,"TestLoadImage: timeout",!1,e),q.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Sr(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function lr(t){this.l=t.ac||null,this.j=t.jb||!1}$e(lr,nc);lr.prototype.g=function(){return new Ri(this.l,this.j)};lr.prototype.i=function(t){return function(){return t}}({});function Ri(t,e){Me.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ac,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$e(Ri,Me);var ac=0;F=Ri.prototype;F.open=function(t,e){if(this.readyState!=ac)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Qs(this)};F.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||q).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};F.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ur(this)),this.readyState=ac};F.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Qs(this)),this.g&&(this.readyState=3,Qs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Yf(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Yf(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}F.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ur(this):Qs(this),this.readyState==3&&Yf(this)}};F.Va=function(t){this.g&&(this.response=this.responseText=t,ur(this))};F.Ua=function(t){this.g&&(this.response=t,ur(this))};F.ga=function(){this.g&&ur(this)};function ur(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Qs(t)}F.setRequestHeader=function(t,e){this.v.append(t,e)};F.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};F.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Qs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ri.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var CE=q.JSON.parse;function Ie(t){Me.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Xf,this.K=this.L=!1}$e(Ie,Me);var Xf="",_E=/^https?$/i,SE=["POST","PUT"];F=Ie.prototype;F.Ka=function(t){this.L=t};F.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Yo.g(),this.C=this.u?ql(this.u):ql(Yo),this.g.onreadystatechange=qe(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Gl(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=q.FormData&&t instanceof q.FormData,!(0<=df(SE,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ed(this),0<this.B&&((this.K=AE(this.g))?(this.g.timeout=this.B,this.g.ontimeout=qe(this.qa,this)):this.A=tc(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Gl(this,i)}};function AE(t){return ts&&qw()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}F.qa=function(){typeof Ka<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Be(this,"timeout"),this.abort(8))};function Gl(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Jf(t),xi(t)}function Jf(t){t.D||(t.D=!0,Be(t,"complete"),Be(t,"error"))}F.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Be(this,"complete"),Be(this,"abort"),xi(this))};F.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xi(this,!0)),Ie.X.M.call(this)};F.Ha=function(){this.s||(this.F||this.v||this.l?Zf(this):this.fb())};F.fb=function(){Zf(this)};function Zf(t){if(t.h&&typeof Ka<"u"&&(!t.C[1]||Pt(t)!=4||t.aa()!=2)){if(t.v&&Pt(t)==4)tc(t.Ha,0,t);else if(Be(t,"readystatechange"),Pt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match($f)[1]||null;if(!r&&q.self&&q.self.location){var i=q.self.location.protocol;r=i.substr(0,i.length-1)}s=!_E.test(r?r.toLowerCase():"")}n=s}if(n)Be(t,"complete"),Be(t,"success");else{t.m=6;try{var o=2<Pt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Jf(t)}}finally{xi(t)}}}}function xi(t,e){if(t.g){ed(t);const n=t.g,s=t.C[0]?zr:null;t.g=null,t.C=null,e||Be(t,"ready");try{n.onreadystatechange=s}catch{}}}function ed(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(q.clearTimeout(t.A),t.A=null)}function Pt(t){return t.g?t.g.readyState:0}F.aa=function(){try{return 2<Pt(this)?this.g.status:-1}catch{return-1}};F.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};F.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),CE(e)}};function Wl(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Xf:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}F.Ea=function(){return this.m};F.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function td(t){let e="";return Wa(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function cc(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=td(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ve(t,e,n))}function ws(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function nd(t){this.Ca=0,this.i=[],this.j=new Ii,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ws("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ws("baseRetryDelayMs",5e3,t),this.bb=ws("retryDelaySeedMs",1e4,t),this.$a=ws("forwardChannelMaxRetries",2,t),this.ta=ws("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Kf(t&&t.concurrentRequestLimit),this.Fa=new bE,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}F=nd.prototype;F.ma=8;F.G=1;function lc(t){if(sd(t),t.G==3){var e=t.U++,n=Ft(t.F);ve(n,"SID",t.I),ve(n,"RID",e),ve(n,"TYPE","terminate"),hr(t,n),e=new ar(t,t.j,e,void 0),e.K=2,e.v=Di(Ft(n)),n=!1,q.navigator&&q.navigator.sendBeacon&&(n=q.navigator.sendBeacon(e.v.toString(),"")),!n&&q.Image&&(new Image().src=e.v,n=!0),n||(e.g=hd(e.l,null),e.g.da(e.v)),e.F=Date.now(),cr(e)}ld(t)}function ki(t){t.g&&(hc(t),t.g.cancel(),t.g=null)}function sd(t){ki(t),t.u&&(q.clearTimeout(t.u),t.u=null),Jr(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&q.clearTimeout(t.m),t.m=null)}function Ni(t){zf(t.h)||t.m||(t.m=!0,_f(t.Ja,t),t.C=0)}function DE(t,e){return Gf(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=ir(qe(t.Ja,t,e),cd(t,t.C)),t.C++,!0)}F.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new ar(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=yf(i),vf(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=rd(this,r,e),n=Ft(this.F),ve(n,"RID",t),ve(n,"CVER",22),this.D&&ve(n,"X-HTTP-Session-Id",this.D),hr(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(td(i)))+"&"+e:this.o&&cc(n,this.o,i)),ic(this.h,r),this.Ya&&ve(n,"TYPE","init"),this.O?(ve(n,"$req",e),ve(n,"SID","null"),r.Z=!0,Jo(r,n,null)):Jo(r,n,e),this.G=2}}else this.G==3&&(t?Ql(this,t):this.i.length==0||zf(this.h)||Ql(this))};function Ql(t,e){var n;e?n=e.m:n=t.U++;const s=Ft(t.F);ve(s,"SID",t.I),ve(s,"RID",n),ve(s,"AID",t.T),hr(t,s),t.o&&t.s&&cc(s,t.o,t.s),n=new ar(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=rd(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ic(t.h,n),Jo(n,s,e)}function hr(t,e){t.ia&&Wa(t.ia,function(n,s){ve(e,s,n)}),t.l&&Bf({},function(n,s){ve(e,s,n)})}function rd(t,e,n){n=Math.min(t.i.length,n);var s=t.l?qe(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{TE(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function id(t){t.g||t.u||(t.Z=1,_f(t.Ia,t),t.A=0)}function uc(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=ir(qe(t.Ia,t),cd(t,t.A)),t.A++,!0)}F.Ia=function(){if(this.u=null,od(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ir(qe(this.eb,this),t)}};F.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ye(10),ki(this),od(this))};function hc(t){t.B!=null&&(q.clearTimeout(t.B),t.B=null)}function od(t){t.g=new ar(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Ft(t.sa);ve(e,"RID","rpc"),ve(e,"SID",t.I),ve(e,"CI",t.L?"0":"1"),ve(e,"AID",t.T),ve(e,"TYPE","xmlhttp"),hr(t,e),t.o&&t.s&&cc(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Di(Ft(e)),n.s=null,n.P=!0,Lf(n,t)}F.cb=function(){this.v!=null&&(this.v=null,ki(this),uc(this),Ye(19))};function Jr(t){t.v!=null&&(q.clearTimeout(t.v),t.v=null)}function ad(t,e){var n=null;if(t.g==e){Jr(t),hc(t),t.g=null;var s=2}else if(ea(t.h,e))n=e.D,Wf(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Ci(),Be(s,new Nf(s,n)),Ni(t)}else id(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&DE(t,e)||s==2&&uc(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:mn(t,5);break;case 4:mn(t,10);break;case 3:mn(t,6);break;default:mn(t,2)}}}function cd(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function mn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=qe(t.kb,t);n||(n=new Tn("//www.google.com/images/cleardot.gif"),q.location&&q.location.protocol=="http"||Yr(n,"https"),Di(n)),IE(n.toString(),s)}else Ye(2);t.G=0,t.l&&t.l.va(e),ld(t),sd(t)}F.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ye(2)):(this.j.info("Failed to ping google.com"),Ye(1))};function ld(t){if(t.G=0,t.la=[],t.l){const e=Qf(t.h);(e.length!=0||t.i.length!=0)&&(Vl(t.la,e),Vl(t.la,t.i),t.h.i.length=0,za(t.i),t.i.length=0),t.l.ua()}}function ud(t,e,n){var s=n instanceof Tn?Ft(n):new Tn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Xr(s,s.m);else{var r=q.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Tn(null,void 0);s&&Yr(i,s),e&&(i.g=e),r&&Xr(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&ve(s,n,e),ve(s,"VER",t.ma),hr(t,s),s}function hd(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ie(new lr({jb:!0})):new Ie(t.ra),e.Ka(t.H),e}function fd(){}F=fd.prototype;F.xa=function(){};F.wa=function(){};F.va=function(){};F.ua=function(){};F.Ra=function(){};function Zr(){if(ts&&!(10<=Number(Kw)))throw Error("Environmental error: no available transport.")}Zr.prototype.g=function(t,e){return new ct(t,e)};function ct(t,e){Me.call(this),this.g=new nd(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Gr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Gr(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new fs(this)}$e(ct,Me);ct.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ye(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=ud(t,null,t.V),Ni(t)};ct.prototype.close=function(){lc(this.g)};ct.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Za(t),t=n);e.i.push(new wE(e.ab++,t)),e.G==3&&Ni(e)};ct.prototype.M=function(){this.g.l=null,delete this.j,lc(this.g),delete this.g,ct.X.M.call(this)};function dd(t){sc.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}$e(dd,sc);function pd(){rc.call(this),this.status=1}$e(pd,rc);function fs(t){this.g=t}$e(fs,fd);fs.prototype.xa=function(){Be(this.g,"a")};fs.prototype.wa=function(t){Be(this.g,new dd(t))};fs.prototype.va=function(t){Be(this.g,new pd)};fs.prototype.ua=function(){Be(this.g,"b")};Zr.prototype.createWebChannel=Zr.prototype.g;ct.prototype.send=ct.prototype.u;ct.prototype.open=ct.prototype.m;ct.prototype.close=ct.prototype.close;_i.NO_ERROR=0;_i.TIMEOUT=8;_i.HTTP_ERROR=6;Of.COMPLETE="complete";Pf.EventType=or;or.OPEN="a";or.CLOSE="b";or.ERROR="c";or.MESSAGE="d";Me.prototype.listen=Me.prototype.N;Ie.prototype.listenOnce=Ie.prototype.O;Ie.prototype.getLastError=Ie.prototype.Oa;Ie.prototype.getLastErrorCode=Ie.prototype.Ea;Ie.prototype.getStatus=Ie.prototype.aa;Ie.prototype.getResponseJson=Ie.prototype.Sa;Ie.prototype.getResponseText=Ie.prototype.fa;Ie.prototype.send=Ie.prototype.da;Ie.prototype.setWithCredentials=Ie.prototype.Ka;var RE=function(){return new Zr},xE=function(){return Ci()},fo=_i,kE=Of,NE=Nn,Yl={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},OE=lr,Ar=Pf,PE=Ie;const Xl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}je.UNAUTHENTICATED=new je(null),je.GOOGLE_CREDENTIALS=new je("google-credentials-uid"),je.FIRST_PARTY=new je("first-party-uid"),je.MOCK_USER=new je("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ds="9.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=new Ha("@firebase/firestore");function Jl(){return Dn.logLevel}function V(t,...e){if(Dn.logLevel<=le.DEBUG){const n=e.map(fc);Dn.debug(`Firestore (${ds}): ${t}`,...n)}}function Vt(t,...e){if(Dn.logLevel<=le.ERROR){const n=e.map(fc);Dn.error(`Firestore (${ds}): ${t}`,...n)}}function ta(t,...e){if(Dn.logLevel<=le.WARN){const n=e.map(fc);Dn.warn(`Firestore (${ds}): ${t}`,...n)}}function fc(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t="Unexpected state"){const e=`FIRESTORE (${ds}) INTERNAL ASSERTION FAILED: `+t;throw Vt(e),new Error(e)}function Re(t,e){t||J()}function oe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ME{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(je.UNAUTHENTICATED))}shutdown(){}}class LE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class FE{constructor(e){this.t=e,this.currentUser=je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new In;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new In,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new In)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Re(typeof s.accessToken=="string"),new gd(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string"),new je(e)}}class VE{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=je.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Re(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class UE{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new VE(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class BE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $E{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Re(typeof n.token=="string"),this.A=n.token,new BE(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=jE(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function he(t,e){return t<e?-1:t>e?1:0}function ns(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new tt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new tt(0,0))}static max(){return new Z(new tt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,n,s){n===void 0?n=0:n>e.length&&J(),s===void 0?s=e.length-n:s>e.length-n&&J(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Ys.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ys?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends Ys{construct(e,n,s){return new Te(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new H(R.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const qE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends Ys{construct(e,n,s){return new Ze(e,n,s)}static isValidIdentifier(e){return qE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ze(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new H(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new H(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new H(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new H(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(n)}static emptyPath(){return new Ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(Te.fromString(e))}static fromName(e){return new j(Te.fromString(e).popFirst(5))}static empty(){return new j(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new Te(e.slice()))}}function KE(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=Z.fromTimestamp(s===1e9?new tt(n+1,0):new tt(n,s));return new en(r,j.empty(),e)}function zE(t){return new en(t.readTime,t.key,-1)}class en{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new en(Z.min(),j.empty(),-1)}static max(){return new en(Z.max(),j.empty(),-1)}}function GE(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class QE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dc(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==WE)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,s)=>{n(e)})}static reject(e){return new I((n,s)=>{s(e)})}static waitFor(e){return new I((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=I.resolve(!1);for(const s of e)n=n.next(r=>r?I.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new I((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new I((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function fr(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Oi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function YE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pc.at=-1;class Le{constructor(e,n){this.comparator=e,this.root=n||Fe.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Fe.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Fe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Dr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Dr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Dr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Dr(this.root,e,this.comparator,!0)}}class Dr{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Fe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Fe.RED,this.left=r!=null?r:Fe.EMPTY,this.right=i!=null?i:Fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Fe(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Fe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}Fe.EMPTY=null,Fe.RED=!0,Fe.BLACK=!1;Fe.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Fe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new eu(this.data.getIterator())}getIteratorFrom(e){return new eu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof xe)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new xe(this.comparator);return n.data=e,n}}class eu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new Cn([])}unionWith(e){let n=new xe(Ze.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Cn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ns(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ge(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Ge(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const XE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tn(t){if(Re(!!t),typeof t=="string"){let e=0;const n=XE.exec(t);if(Re(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:De(t.seconds),nanos:De(t.nanos)}}function De(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ss(t){return typeof t=="string"?Ge.fromBase64String(t):Ge.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function yd(t){const e=t.mapValue.fields.__previous_value__;return md(e)?yd(e):e}function Xs(t){const e=tn(t.mapValue.fields.__local_write_time__.timestampValue);return new tt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Js{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Js("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Js&&e.projectId===this.projectId&&e.database===this.database}}function Pi(t){return t==null}function na(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Rn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?md(t)?4:ZE(t)?9007199254740991:10:J()}function kt(t,e){if(t===e)return!0;const n=Rn(t);if(n!==Rn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Xs(t).isEqual(Xs(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=tn(s.timestampValue),o=tn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return ss(s.bytesValue).isEqual(ss(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return De(s.geoPointValue.latitude)===De(r.geoPointValue.latitude)&&De(s.geoPointValue.longitude)===De(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return De(s.integerValue)===De(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=De(s.doubleValue),o=De(r.doubleValue);return i===o?na(i)===na(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return ns(t.arrayValue.values||[],e.arrayValue.values||[],kt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Zl(i)!==Zl(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!kt(i[a],o[a])))return!1;return!0}(t,e);default:return J()}}function Zs(t,e){return(t.values||[]).find(n=>kt(n,e))!==void 0}function rs(t,e){if(t===e)return 0;const n=Rn(t),s=Rn(e);if(n!==s)return he(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=De(r.integerValue||r.doubleValue),a=De(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return tu(t.timestampValue,e.timestampValue);case 4:return tu(Xs(t),Xs(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(r,i){const o=ss(r),a=ss(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=he(o[c],a[c]);if(l!==0)return l}return he(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=he(De(r.latitude),De(i.latitude));return o!==0?o:he(De(r.longitude),De(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=rs(o[c],a[c]);if(l)return l}return he(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Rr.mapValue&&i===Rr.mapValue)return 0;if(r===Rr.mapValue)return 1;if(i===Rr.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=he(a[u],l[u]);if(h!==0)return h;const d=rs(o[a[u]],c[l[u]]);if(d!==0)return d}return he(a.length,l.length)}(t.mapValue,e.mapValue);default:throw J()}}function tu(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=tn(t),s=tn(e),r=he(n.seconds,s.seconds);return r!==0?r:he(n.nanos,s.nanos)}function zn(t){return sa(t)}function sa(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=tn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ss(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=sa(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${sa(s.fields[a])}`;return i+"}"}(t.mapValue):J();var e,n}function ra(t){return!!t&&"integerValue"in t}function gc(t){return!!t&&"arrayValue"in t}function nu(t){return!!t&&"nullValue"in t}function su(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function po(t){return!!t&&"mapValue"in t}function Ns(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Oi(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Ns(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ns(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ZE(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!po(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ns(n)}setAll(e){let n=Ze.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Ns(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());po(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return kt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];po(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Oi(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new At(Ns(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Ve(e,0,Z.min(),Z.min(),At.empty(),0)}static newFoundDocument(e,n,s){return new Ve(e,1,n,Z.min(),s,0)}static newNoDocument(e,n){return new Ve(e,2,n,Z.min(),At.empty(),0)}static newUnknownDocument(e,n){return new Ve(e,3,n,Z.min(),At.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ve&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ve(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function ru(t,e=null,n=[],s=[],r=null,i=null,o=null){return new e0(t,e,n,s,r,i,o)}function mc(t){const e=oe(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+zn(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Pi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>zn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>zn(s)).join(",")),e.ht=n}return e.ht}function t0(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${zn(s.value)}`;var s}).join(", ")}]`),Pi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>zn(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>zn(n)).join(",")),`Target(${e})`}function yc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!l0(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!kt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ou(t.startAt,e.startAt)&&ou(t.endAt,e.endAt)}function ia(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class et extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new n0(e,n,s):n==="array-contains"?new i0(e,s):n==="in"?new o0(e,s):n==="not-in"?new a0(e,s):n==="array-contains-any"?new c0(e,s):new et(e,n,s)}static lt(e,n,s){return n==="in"?new s0(e,s):new r0(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(rs(n,this.value)):n!==null&&Rn(this.value)===Rn(n)&&this.ft(rs(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class n0 extends et{constructor(e,n,s){super(e,n,s),this.key=j.fromName(s.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.ft(n)}}class s0 extends et{constructor(e,n){super(e,"in",n),this.keys=vd("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class r0 extends et{constructor(e,n){super(e,"not-in",n),this.keys=vd("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function vd(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>j.fromName(s.referenceValue))}class i0 extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return gc(n)&&Zs(n.arrayValue,this.value)}}class o0 extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Zs(this.value.arrayValue,n)}}class a0 extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(Zs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Zs(this.value.arrayValue,n)}}class c0 extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!gc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Zs(this.value.arrayValue,s))}}class ei{constructor(e,n){this.position=e,this.inclusive=n}}class Os{constructor(e,n="asc"){this.field=e,this.dir=n}}function l0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function iu(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=j.comparator(j.fromName(o.referenceValue),n.key):s=rs(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function ou(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!kt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function u0(t,e,n,s,r,i,o,a){return new Mi(t,e,n,s,r,i,o,a)}function wd(t){return new Mi(t)}function au(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function h0(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function f0(t){for(const e of t.filters)if(e.dt())return e.field;return null}function d0(t){return t.collectionGroup!==null}function er(t){const e=oe(t);if(e._t===null){e._t=[];const n=f0(e),s=h0(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new Os(n)),e._t.push(new Os(Ze.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e._t.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Os(Ze.keyField(),i))}}}return e._t}function Ut(t){const e=oe(t);if(!e.wt)if(e.limitType==="F")e.wt=ru(e.path,e.collectionGroup,er(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of er(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Os(i.field,o))}const s=e.endAt?new ei(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ei(e.startAt.position,e.startAt.inclusive):null;e.wt=ru(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function oa(t,e,n){return new Mi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Li(t,e){return yc(Ut(t),Ut(e))&&t.limitType===e.limitType}function Ed(t){return`${mc(Ut(t))}|lt:${t.limitType}`}function aa(t){return`Query(target=${t0(Ut(t))}; limitType=${t.limitType})`}function vc(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):j.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=iu(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,er(n),s)||n.endAt&&!function(r,i,o){const a=iu(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,er(n),s))}(t,e)}function p0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function bd(t){return(e,n)=>{let s=!1;for(const r of er(t)){const i=g0(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function g0(t,e,n){const s=t.field.isKeyField()?j.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?rs(a,c):J()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return J()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:na(e)?"-0":e}}function y0(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(){this._=void 0}}function v0(t,e,n){return t instanceof ca?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof ti?Td(t,e):t instanceof ni?Id(t,e):function(s,r){const i=E0(s,r),o=cu(i)+cu(s.yt);return ra(i)&&ra(s.yt)?y0(o):m0(s.It,o)}(t,e)}function w0(t,e,n){return t instanceof ti?Td(t,e):t instanceof ni?Id(t,e):n}function E0(t,e){return t instanceof la?ra(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class ca extends Fi{}class ti extends Fi{constructor(e){super(),this.elements=e}}function Td(t,e){const n=Cd(e);for(const s of t.elements)n.some(r=>kt(r,s))||n.push(s);return{arrayValue:{values:n}}}class ni extends Fi{constructor(e){super(),this.elements=e}}function Id(t,e){let n=Cd(e);for(const s of t.elements)n=n.filter(r=>!kt(r,s));return{arrayValue:{values:n}}}class la extends Fi{constructor(e,n){super(),this.It=e,this.yt=n}}function cu(t){return De(t.integerValue||t.doubleValue)}function Cd(t){return gc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function b0(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ti&&s instanceof ti||n instanceof ni&&s instanceof ni?ns(n.elements,s.elements,kt):n instanceof la&&s instanceof la?kt(n.yt,s.yt):n instanceof ca&&s instanceof ca}(t.transform,e.transform)}class _n{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _n}static exists(e){return new _n(void 0,e)}static updateTime(e){return new _n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Mr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class wc{}function _d(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new I0(t.key,_n.none()):new Ec(t.key,t.data,_n.none());{const n=t.data,s=At.empty();let r=new xe(Ze.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Vi(t.key,s,new Cn(r.toArray()),_n.none())}}function T0(t,e,n){t instanceof Ec?function(s,r,i){const o=s.value.clone(),a=uu(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Vi?function(s,r,i){if(!Mr(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=uu(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Sd(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Ps(t,e,n,s){return t instanceof Ec?function(r,i,o,a){if(!Mr(r.precondition,i))return o;const c=r.value.clone(),l=hu(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Vi?function(r,i,o,a){if(!Mr(r.precondition,i))return o;const c=hu(r.fieldTransforms,a,i),l=i.data;return l.setAll(Sd(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return Mr(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function lu(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ns(n,s,(r,i)=>b0(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ec extends wc{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Vi extends wc{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Sd(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function uu(t,e,n){const s=new Map;Re(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,w0(o,a,n[r]))}return s}function hu(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,v0(i,o,e))}return s}class I0 extends wc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae,ne;function Ad(t){if(t===void 0)return Vt("GRPC error has no .code"),R.UNKNOWN;switch(t){case Ae.OK:return R.OK;case Ae.CANCELLED:return R.CANCELLED;case Ae.UNKNOWN:return R.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return R.INTERNAL;case Ae.UNAVAILABLE:return R.UNAVAILABLE;case Ae.UNAUTHENTICATED:return R.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case Ae.NOT_FOUND:return R.NOT_FOUND;case Ae.ALREADY_EXISTS:return R.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return R.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case Ae.ABORTED:return R.ABORTED;case Ae.OUT_OF_RANGE:return R.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return R.UNIMPLEMENTED;case Ae.DATA_LOSS:return R.DATA_LOSS;default:return J()}}(ne=Ae||(Ae={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Oi(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return YE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0=new Le(j.comparator);function nn(){return _0}const Dd=new Le(j.comparator);function Is(...t){let e=Dd;for(const n of t)e=e.insert(n.key,n);return e}function S0(t){let e=Dd;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function yn(){return Ms()}function Rd(){return Ms()}function Ms(){return new ps(t=>t.toString(),(t,e)=>t.isEqual(e))}new Le(j.comparator);const A0=new xe(j.comparator);function re(...t){let e=A0;for(const n of t)e=e.add(n);return e}const D0=new xe(he);function xd(){return D0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,dr.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Ui(Z.min(),r,xd(),nn(),re())}}class dr{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new dr(s,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n,s,r){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=r}}class kd{constructor(e,n){this.targetId=e,this.At=n}}class Nd{constructor(e,n,s=Ge.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class fu{constructor(){this.Rt=0,this.bt=pu(),this.Pt=Ge.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=re(),n=re(),s=re();return this.bt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:J()}}),new dr(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=pu()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class R0{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=nn(),this.qt=du(),this.Kt=new xe(he)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,r)=>{this.Ht(r)&&n(r)})}Yt(e){const n=e.targetId,s=e.At.count,r=this.Xt(n);if(r){const i=r.target;if(ia(i))if(s===0){const o=new j(i.path);this.jt(n,o,Ve.newNoDocument(o,Z.min()))}else Re(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&ia(a.target)){const c=new j(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,Ve.newNoDocument(c,e))}i.Dt&&(n.set(o,i.xt()),i.Nt())}});let s=re();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new Ui(e,n,this.Kt,this.Ut,s);return this.Ut=nn(),this.qt=du(),this.Kt=new xe(he),r}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const r=this.zt(e);this.ee(e,n)?r.kt(n,1):r.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new fu,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new xe(he),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new fu),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function du(){return new Le(j.comparator)}function pu(){return new Le(j.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),k0=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class N0{constructor(e,n){this.databaseId=e,this.gt=n}}function O0(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function P0(t,e){return t.gt?e.toBase64():e.toUint8Array()}function tr(t){return Re(!!t),Z.fromTimestamp(function(e){const n=tn(e);return new tt(n.seconds,n.nanos)}(t))}function M0(t,e){return function(n){return new Te(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Od(t){const e=Te.fromString(t);return Re(Ld(e)),e}function go(t,e){const n=Od(e);if(n.get(1)!==t.databaseId.projectId)throw new H(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(Pd(n))}function ua(t,e){return M0(t.databaseId,e)}function L0(t){const e=Od(t);return e.length===4?Te.emptyPath():Pd(e)}function gu(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Pd(t){return Re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function F0(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.gt?(Re(l===void 0||typeof l=="string"),Ge.fromBase64String(l||"")):(Re(l===void 0||l instanceof Uint8Array),Ge.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?R.UNKNOWN:Ad(c.code);return new H(l,c.message||"")}(o);n=new Nd(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=go(t,s.document.name),i=tr(s.document.updateTime),o=new At({mapValue:{fields:s.document.fields}}),a=Ve.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new Lr(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=go(t,s.document),i=s.readTime?tr(s.readTime):Z.min(),o=Ve.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Lr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=go(t,s.document),i=s.removedTargetIds||[];n=new Lr([],i,r,null)}else{if(!("filter"in e))return J();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new C0(r),o=s.targetId;n=new kd(o,i)}}return n}function V0(t,e){return{documents:[ua(t,e.path)]}}function U0(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=ua(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ua(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(su(h.value))return{unaryFilter:{field:Fn(h.field),op:"IS_NAN"}};if(nu(h.value))return{unaryFilter:{field:Fn(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(su(h.value))return{unaryFilter:{field:Fn(h.field),op:"IS_NOT_NAN"}};if(nu(h.value))return{unaryFilter:{field:Fn(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fn(h.field),op:H0(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Fn(u.field),direction:j0(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.gt||Pi(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function B0(t){let e=L0(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Re(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Md(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Os(jn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Pi(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new ei(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new ei(d,h)}(n.endAt)),u0(e,r,o,i,a,"F",c,l)}function $0(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return J()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Md(t){return t?t.unaryFilter!==void 0?[K0(t)]:t.fieldFilter!==void 0?[q0(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Md(e)).reduce((e,n)=>e.concat(n)):J():[]}function j0(t){return x0[t]}function H0(t){return k0[t]}function Fn(t){return{fieldPath:t.canonicalString()}}function jn(t){return Ze.fromServerFormat(t.fieldPath)}function q0(t){return et.create(jn(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(t.fieldFilter.op),t.fieldFilter.value)}function K0(t){switch(t.unaryFilter.op){case"IS_NAN":const e=jn(t.unaryFilter.field);return et.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=jn(t.unaryFilter.field);return et.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=jn(t.unaryFilter.field);return et.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=jn(t.unaryFilter.field);return et.create(r,"!=",{nullValue:"NULL_VALUE"});default:return J()}}function Ld(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&T0(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Ps(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Ps(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Rd();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=_d(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(Z.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&ns(this.mutations,e.mutations,(n,s)=>lu(n,s))&&ns(this.baseMutations,e.baseMutations,(n,s)=>lu(n,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,n,s,r,i=Z.min(),o=Z.min(),a=Ge.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Sn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Sn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e){this.re=e}}function Q0(t){const e=B0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?oa(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(){this.Ye=new X0}addToCollectionParentIndex(e,n){return this.Ye.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(en.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve(en.min())}updateCollectionGroup(e,n,s){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class X0{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new xe(Te.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new xe(Te.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new is(0)}static vn(){return new is(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(){this.changes=new ps(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ve.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?I.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.getBaseDocument(e,n,s))).next(r=>(s!==null&&Ps(s.mutation,r,Cn.empty(),tt.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,re()).next(()=>s))}getLocalViewOfDocuments(e,n,s=re()){const r=yn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Is();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=yn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,re()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=nn();const o=Ms(),a=Ms();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Vi)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),Ps(u.mutation,l,u.mutation.getFieldMask(),tt.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new Z0(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Ms();let r=new Le((o,a)=>o-a),i=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Cn.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||re()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Rd();u.forEach(d=>{if(!i.has(d)){const g=_d(n.get(d),s.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return I.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return j.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):d0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):I.resolve(yn());let a=-1,c=i;return o.next(l=>I.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?I.resolve():this.getBaseDocument(e,u,h).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,re())).next(u=>({batchId:a,changes:S0(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new j(n)).next(s=>{let r=Is();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Is();return this.indexManager.getCollectionParents(e,r).next(o=>I.forEach(o,a=>{const c=function(l,u){return new Mi(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,Ve.newInvalidDocument(l)))});let o=Is();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Ps(l.mutation,c,Cn.empty(),tt.now()),vc(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):I.resolve(Ve.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return I.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:tr(s.createTime)}),I.resolve()}getNamedQuery(e,n){return I.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:Q0(s.bundledQuery),readTime:tr(s.readTime)}}(n)),I.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(){this.overlays=new Le(j.comparator),this.es=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){const s=yn();return I.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ue(e,n,i)}),I.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),I.resolve()}getOverlaysForCollection(e,n,s){const r=yn(),i=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return I.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Le((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=yn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=yn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return I.resolve(a)}ue(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new G0(n,s));let i=this.es.get(n);i===void 0&&(i=re(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(){this.ns=new xe(Pe.ss),this.rs=new xe(Pe.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Pe(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Pe(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new j(new Te([])),s=new Pe(n,e),r=new Pe(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new j(new Te([])),s=new Pe(n,e),r=new Pe(n,e+1);let i=re();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Pe(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Pe{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return j.comparator(e.key,n.key)||he(e._s,n._s)}static os(e,n){return he(e._s,n._s)||j.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new xe(Pe.ss)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new z0(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new Pe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return I.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Pe(n,0),r=new Pe(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),I.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new xe(he);return n.forEach(r=>{const i=new Pe(r,0),o=new Pe(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),I.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;j.isDocumentKey(i)||(i=i.child(""));const o=new Pe(new j(i),0);let a=new xe(he);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c._s)),!0)},o),I.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Re(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return I.forEach(n.mutations,r=>{const i=new Pe(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Pe(n,0),r=this.gs.firstAfterOrEqual(s);return I.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e){this.Es=e,this.docs=new Le(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return I.resolve(s?s.document.mutableCopy():Ve.newInvalidDocument(n))}getEntries(e,n){let s=nn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ve.newInvalidDocument(r))}),I.resolve(s)}getAllFromCollection(e,n,s){let r=nn();const i=new j(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||GE(zE(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return I.resolve(r)}getAllFromCollectionGroup(e,n,s,r){J()}As(e,n){return I.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new ib(this)}getSize(e){return I.resolve(this.size)}}class ib extends J0{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),I.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e){this.persistence=e,this.Rs=new ps(n=>mc(n),yc),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.bs=0,this.Ps=new bc,this.targetCount=0,this.vs=is.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),I.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new is(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.Dn(n),I.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),I.waitFor(i).next(()=>r)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return I.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),I.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),I.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),I.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return I.resolve(s)}containsKey(e,n){return I.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new pc(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new ob(this),this.indexManager=new Y0,this.remoteDocumentCache=function(s){return new rb(s)}(s=>this.referenceDelegate.xs(s)),this.It=new W0(n),this.Ns=new tb(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new nb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new sb(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){V("MemoryPersistence","Starting transaction:",e);const r=new cb(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return I.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class cb extends QE{constructor(e){super(),this.currentSequenceNumber=e}}class Tc{constructor(e){this.persistence=e,this.Fs=new bc,this.$s=null}static Bs(e){return new Tc(e)}get Ls(){if(this.$s)return this.$s;throw J()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),I.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),I.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Ls,s=>{const r=j.fromPath(s);return this.Us(e,r).next(i=>{i||n.removeEntry(r,Z.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return I.or([()=>I.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=re(),r=re();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ic(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(au(n))return I.resolve(null);let s=Ut(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=oa(n,null,"F"),s=Ut(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=re(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,oa(n,null,"F")):this.Bi(e,l,n,c)}))})))}Oi(e,n,s,r){return au(n)||r.isEqual(Z.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(Jl()<=le.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),aa(n)),this.Bi(e,o,n,KE(r,-1)))})}Fi(e,n){let s=new xe(bd(e));return n.forEach((r,i)=>{vc(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return Jl()<=le.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",aa(n)),this.Ni.getDocumentsMatchingQuery(e,n,en.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.It=r,this.Ui=new Le(he),this.qi=new ps(i=>mc(i),yc),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new eb(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function hb(t,e,n,s){return new ub(t,e,n,s)}async function Fd(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=re();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function Vd(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function fb(t,e){const n=oe(t),s=e.snapshotVersion;let r=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.Ui;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(Ge.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),r=r.insert(h,g),function(v,T,N){return v.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(d,g,u)&&a.push(n.Cs.updateTargetData(i,g))});let c=nn(),l=re();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(db(i,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(Z.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return I.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ui=r,i))}function db(t,e,n){let s=re(),r=re();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=nn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(Z.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function pb(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,I.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new Sn(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function ha(t,e,n){const s=oe(t),r=s.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!fr(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(r.target)}function mu(t,e,n){const s=oe(t);let r=Z.min(),i=re();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=oe(a),h=u.qi.get(l);return h!==void 0?I.resolve(u.Ui.get(h)):u.Cs.getTargetData(c,l)}(s,o,Ut(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:Z.min(),n?i:re())).next(a=>(gb(s,p0(e),a),{documents:a,Hi:i})))}function gb(t,e,n){let s=t.Ki.get(e)||Z.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class yu{constructor(){this.activeTargetIds=xd()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mb{constructor(){this.Lr=new yu,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new yu,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);V("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(V("RestConnection","Received: ",c),c),c=>{throw ta("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+ds,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=vb[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new PE;a.setWithCredentials(!0),a.listenOnce(kE.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case fo.NO_ERROR:const l=a.getResponseJson();V("Connection","XHR received:",JSON.stringify(l)),i(l);break;case fo.TIMEOUT:V("Connection",'RPC "'+e+'" timed out'),o(new H(R.DEADLINE_EXCEEDED,"Request time out"));break;case fo.HTTP_ERROR:const u=a.getStatus();if(V("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(g){const v=g.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(v)>=0?v:R.UNKNOWN}(h.status);o(new H(d,h.message))}else o(new H(R.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new H(R.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{V("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=RE(),o=xE(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new OE({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");V("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new wb({Hr:v=>{h?V("Connection","Not sending because WebChannel is closed:",v):(u||(V("Connection","Opening WebChannel transport."),l.open(),u=!0),V("Connection","WebChannel sending:",v),l.send(v))},Jr:()=>l.close()}),g=(v,T,N)=>{v.listen(T,D=>{try{N(D)}catch(M){setTimeout(()=>{throw M},0)}})};return g(l,Ar.EventType.OPEN,()=>{h||V("Connection","WebChannel transport opened.")}),g(l,Ar.EventType.CLOSE,()=>{h||(h=!0,V("Connection","WebChannel transport closed"),d.io())}),g(l,Ar.EventType.ERROR,v=>{h||(h=!0,ta("Connection","WebChannel transport errored:",v),d.io(new H(R.UNAVAILABLE,"The operation could not be completed")))}),g(l,Ar.EventType.MESSAGE,v=>{var T;if(!h){const N=v.data[0];Re(!!N);const D=N,M=D.error||((T=D[0])===null||T===void 0?void 0:T.error);if(M){V("Connection","WebChannel received error:",M);const P=M.status;let G=function(ye){const Q=Ae[ye];if(Q!==void 0)return Ad(Q)}(P),W=M.message;G===void 0&&(G=R.INTERNAL,W="Unknown error status: "+P+" with message "+M.message),h=!0,d.io(new H(G,W)),l.close()}else V("Connection","WebChannel received:",N),d.ro(N)}}),g(o,NE.STAT_EVENT,v=>{v.stat===Yl.PROXY?V("Connection","Detected buffering proxy"):v.stat===Yl.NOPROXY&&V("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function mo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(t){return new N0(t,!0)}class Bd{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&V("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Bd(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(Vt(n.toString()),Vt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new H(R.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Tb extends bb{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.It=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=F0(this.It,e),s=function(r){if(!("targetChange"in r))return Z.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?Z.min():i.readTime?tr(i.readTime):Z.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=gu(this.It),n.addTarget=function(r,i){let o;const a=i.target;return o=ia(a)?{documents:V0(r,a)}:{query:U0(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=P0(r,i.resumeToken):i.snapshotVersion.compareTo(Z.min())>0&&(o.readTime=O0(r,i.snapshotVersion.toTimestamp())),o}(this.It,e);const s=$0(this.It,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=gu(this.It),n.removeTarget=e,this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.It=r,this.nu=!1}su(){if(this.nu)throw new H(R.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new H(R.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(R.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class Cb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Vt(n),this.ou=!1):V("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(o=>{s.enqueueAndForget(async()=>{gr(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=oe(a);c._u.add(4),await pr(c),c.gu.set("Unknown"),c._u.delete(4),await Bi(c)}(this))})}),this.gu=new Cb(s,r)}}async function Bi(t){if(gr(t))for(const e of t.wu)await e(!0)}async function pr(t){for(const e of t.wu)await e(!1)}function $d(t,e){const n=oe(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Sc(n)?_c(n):gs(n).ko()&&Cc(n,e))}function jd(t,e){const n=oe(t),s=gs(n);n.du.delete(e),s.ko()&&Hd(n,e),n.du.size===0&&(s.ko()?s.Fo():gr(n)&&n.gu.set("Unknown"))}function Cc(t,e){t.yu.Mt(e.targetId),gs(t).zo(e)}function Hd(t,e){t.yu.Mt(e),gs(t).Ho(e)}function _c(t){t.yu=new R0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),gs(t).start(),t.gu.uu()}function Sc(t){return gr(t)&&!gs(t).No()&&t.du.size>0}function gr(t){return oe(t)._u.size===0}function qd(t){t.yu=void 0}async function Sb(t){t.du.forEach((e,n)=>{Cc(t,e)})}async function Ab(t,e){qd(t),Sc(t)?(t.gu.hu(e),_c(t)):t.gu.set("Unknown")}async function Db(t,e,n){if(t.gu.set("Online"),e instanceof Nd&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await wu(t,s)}else if(e instanceof Lr?t.yu.Gt(e):e instanceof kd?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(Z.min()))try{const s=await Vd(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.te(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.du.get(c);l&&r.du.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(Ge.EMPTY_BYTE_STRING,c.snapshotVersion)),Hd(r,a);const l=new Sn(c.target,a,1,c.sequenceNumber);Cc(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){V("RemoteStore","Failed to raise snapshot:",s),await wu(t,s)}}async function wu(t,e,n){if(!fr(e))throw e;t._u.add(1),await pr(t),t.gu.set("Offline"),n||(n=()=>Vd(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Bi(t)})}async function Eu(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const s=gr(n);n._u.add(3),await pr(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Bi(n)}async function Rb(t,e){const n=oe(t);e?(n._u.delete(2),await Bi(n)):e||(n._u.add(2),await pr(n),n.gu.set("Unknown"))}function gs(t){return t.pu||(t.pu=function(e,n,s){const r=oe(e);return r.su(),new Tb(n,r.connection,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:Sb.bind(null,t),Zr:Ab.bind(null,t),Wo:Db.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Sc(t)?_c(t):t.gu.set("Unknown")):(await t.pu.stop(),qd(t))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new In,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Ac(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Kd(t,e){if(Vt("AsyncQueue",`${e}: ${t}`),fr(t))return new H(R.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||j.comparator(n.key,s.key):(n,s)=>j.comparator(n.key,s.key),this.keyedMap=Is(),this.sortedSet=new Le(this.comparator)}static emptySet(e){return new Gn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Gn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Gn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(){this.Tu=new Le(j.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):J():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class os{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new os(e,n,Gn.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Li(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(){this.Au=void 0,this.listeners=[]}}class kb{constructor(){this.queries=new ps(e=>Ed(e),Li),this.onlineState="Unknown",this.Ru=new Set}}async function Nb(t,e){const n=oe(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new xb),r)try{i.Au=await n.onListen(s)}catch(o){const a=Kd(o,`Initialization of query '${aa(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Dc(n)}async function Ob(t,e){const n=oe(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Pb(t,e){const n=oe(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Dc(n)}function Mb(t,e,n){const s=oe(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Dc(t){t.Ru.forEach(e=>{e.next()})}class Lb{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new os(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=os.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e){this.key=e}}class Gd{constructor(e){this.key=e}}class Fb{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=re(),this.mutatedKeys=re(),this.Gu=bd(e),this.Qu=new Gn(this.Gu)}get ju(){return this.Uu}Wu(e,n){const s=n?n.zu:new bu,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),g=vc(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),T=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let N=!1;d&&g?d.data.isEqual(g.data)?v!==T&&(s.track({type:3,doc:g}),N=!0):this.Hu(d,g)||(s.track({type:2,doc:g}),N=!0,(c&&this.Gu(g,c)>0||l&&this.Gu(g,l)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),N=!0):d&&!g&&(s.track({type:1,doc:d}),N=!0,(c||l)&&(a=!0)),N&&(g?(o=o.add(g),i=T?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((l,u)=>function(h,d){const g=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return g(h)-g(d)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new os(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new bu,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=re(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Gd(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new zd(s))}),n}tc(e){this.Uu=e.Hi,this.Ku=re();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return os.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class Vb{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Ub{constructor(e){this.key=e,this.nc=!1}}class Bb{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new ps(a=>Ed(a),Li),this.rc=new Map,this.oc=new Set,this.uc=new Le(j.comparator),this.cc=new Map,this.ac=new bc,this.hc={},this.lc=new Map,this.fc=is.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function $b(t,e){const n=Wb(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await pb(n.localStore,Ut(e));n.isPrimaryClient&&$d(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await jb(n,e,s,a==="current",o.resumeToken)}return r}async function jb(t,e,n,s,r){t._c=(h,d,g)=>async function(v,T,N,D){let M=T.view.Wu(N);M.$i&&(M=await mu(v.localStore,T.query,!1).then(({documents:W})=>T.view.Wu(W,M)));const P=D&&D.targetChanges.get(T.targetId),G=T.view.applyChanges(M,v.isPrimaryClient,P);return Iu(v,T.targetId,G.Xu),G.snapshot}(t,h,d,g);const i=await mu(t.localStore,e,!0),o=new Fb(e,i.Hi),a=o.Wu(i.documents),c=dr.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);Iu(t,n,l.Xu);const u=new Vb(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function Hb(t,e){const n=oe(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!Li(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ha(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),jd(n.remoteStore,s.targetId),fa(n,s.targetId)}).catch(dc)):(fa(n,s.targetId),await ha(n.localStore,s.targetId,!0))}async function Wd(t,e){const n=oe(t);try{const s=await fb(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(Re(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?Re(o.nc):r.removedDocuments.size>0&&(Re(o.nc),o.nc=!1))}),await Yd(n,s,e)}catch(s){await dc(s)}}function Tu(t,e,n){const s=oe(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=oe(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&Dc(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function qb(t,e,n){const s=oe(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new Le(j.comparator);o=o.insert(i,Ve.newNoDocument(i,Z.min()));const a=re().add(i),c=new Ui(Z.min(),new Map,new xe(he),o,a);await Wd(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),Rc(s)}else await ha(s.localStore,e,!1).then(()=>fa(s,e,n)).catch(dc)}function fa(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||Qd(t,s)})}function Qd(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(jd(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Rc(t))}function Iu(t,e,n){for(const s of n)s instanceof zd?(t.ac.addReference(s.key,e),Kb(t,s)):s instanceof Gd?(V("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||Qd(t,s.key)):J()}function Kb(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(V("SyncEngine","New document in limbo: "+n),t.oc.add(s),Rc(t))}function Rc(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new j(Te.fromString(e)),s=t.fc.next();t.cc.set(s,new Ub(n)),t.uc=t.uc.insert(n,s),$d(t.remoteStore,new Sn(Ut(wd(n.path)),s,2,pc.at))}}async function Yd(t,e,n){const s=oe(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Ic.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const l=oe(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>I.forEach(c,h=>I.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>I.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!fr(u))throw u;V("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ui.get(h),g=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(g);l.Ui=l.Ui.insert(h,v)}}}(s.localStore,i))}async function zb(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const s=await Fd(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new H(R.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Yd(n,s.ji)}}function Gb(t,e){const n=oe(t),s=n.cc.get(e);if(s&&s.nc)return re().add(s.key);{let r=re();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function Wb(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Wd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Gb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qb.bind(null,e),e.sc.Wo=Pb.bind(null,e.eventManager),e.sc.wc=Mb.bind(null,e.eventManager),e}class Qb{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Ud(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return hb(this.persistence,new lb,e.initialUser,this.It)}yc(e){return new ab(Tc.Bs,this.It)}gc(e){return new mb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Yb{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Tu(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=zb.bind(null,this.syncEngine),await Rb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new kb}createDatastore(e){const n=Ud(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new Eb(r));var r;return function(i,o,a,c){return new Ib(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Tu(this.syncEngine,a,0),o=vu.C()?new vu:new yb,new _b(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new Bb(s,r,i,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=oe(e);V("RemoteStore","RemoteStore shutting down."),n._u.add(5),await pr(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xb(t,e,n){if(!n)throw new H(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Jb(t,e,n,s){if(e===!0&&s===!0)throw new H(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Cu(t){if(j.isDocumentKey(t))throw new H(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Zb(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function da(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zb(t);throw new H(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=new Map;class Su{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new H(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Jb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Su({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Su(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new ME;switch(n.type){case"gapi":const s=n.client;return new UE(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new H(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=_u.get(e);n&&(V("ComponentProvider","Removing Datastore"),_u.delete(e),n.terminate())}(this),Promise.resolve()}}function eT(t,e,n,s={}){var r;const i=(t=da(t,xc))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&ta("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=je.MOCK_USER;else{o=Ev(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new H(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new je(c)}t._authCredentials=new LE(new gd(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ms(this.firestore,e,this._key)}}class $i{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new $i(this.firestore,e,this._query)}}class Wn extends $i{constructor(e,n,s){super(e,n,wd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ms(this.firestore,null,new j(e))}withConverter(e){return new Wn(this.firestore,e,this._path)}}function tT(t,e,...n){if(t=ja(t),Xb("collection","path",e),t instanceof xc){const s=Te.fromString(e,...n);return Cu(s),new Wn(t,null,s)}{if(!(t instanceof ms||t instanceof Wn))throw new H(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Te.fromString(e,...n));return Cu(s),new Wn(t.firestore,null,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Vt("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=je.UNAUTHENTICATED,this.clientId=HE.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{V("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(V("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new In;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Kd(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function rT(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Fd(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function iT(t,e){t.asyncQueue.verifyOperationInProgress();const n=await oT(t);V("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Eu(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Eu(e.remoteStore,i)),t.onlineComponents=e}async function oT(t){return t.offlineComponents||(V("FirestoreClient","Using default OfflineComponentProvider"),await rT(t,new Qb)),t.offlineComponents}async function aT(t){return t.onlineComponents||(V("FirestoreClient","Using default OnlineComponentProvider"),await iT(t,new Yb)),t.onlineComponents}async function cT(t){const e=await aT(t),n=e.eventManager;return n.onListen=$b.bind(null,e.syncEngine),n.onUnlisten=Hb.bind(null,e.syncEngine),n}function lT(t,e,n={}){const s=new In;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new nT({next:h=>{i.enqueueAndForget(()=>Ob(r,u)),h.fromCache&&a.source==="server"?c.reject(new H(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Lb(o,l,{includeMetadataChanges:!0,Nu:!0});return Nb(r,u)}(await cT(t),t.asyncQueue,e,n,s)),s.promise}class uT{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Bd(this,"async_queue_retry"),this.Wc=()=>{const n=mo();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=mo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=mo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new In;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!fr(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Vt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=Ac.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.qc.push(r),r}zc(){this.Kc&&J()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}class Xd extends xc{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new uT,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Jd(this),this._firestoreClient.terminate()}}function hT(t,e){const n=typeof t=="object"?t:uf(),s=typeof t=="string"?t:e||"(default)",r=nr(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=yv("firestore");i&&eT(r,...i)}return r}function fT(t){return t._firestoreClient||Jd(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Jd(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new JE(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new sT(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e){this._byteString=e}static fromBase64String(e){try{return new si(Ge.fromBase64String(e))}catch(n){throw new H(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new si(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}const pT=new RegExp("[~\\*/\\[\\]]");function gT(t,e,n){if(e.search(pT)>=0)throw Au(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Zd(...e.split("."))._internalPath}catch{throw Au(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Au(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new H(R.INVALID_ARGUMENT,a+t+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ms(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(tp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class mT extends ep{data(){return super.data()}}function tp(t,e){return typeof e=="string"?gT(t,e):e instanceof Zd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{convertValue(e,n="none"){switch(Rn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ss(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw J()}}convertObject(e,n){const s={};return Oi(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new dT(De(e.latitude),De(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=yd(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Xs(e));default:return null}}convertTimestamp(e){const n=tn(e);return new tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Te.fromString(e);Re(Ld(s));const r=new Js(s.get(1),s.get(3)),i=new j(s.popFirst(5));return r.isEqual(n)||Vt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wT extends ep{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Fr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(tp("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Fr extends wT{data(e={}){return super.data(e)}}class ET{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new xr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Fr(this._firestore,this._userDataWriter,s.key,s,new xr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Fr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new xr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Fr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new xr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:bT(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function bT(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}class TT extends vT{constructor(e){super(),this.firestore=e}convertBytes(e){return new si(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ms(this.firestore,null,n)}}function IT(t){t=da(t,$i);const e=da(t.firestore,Xd),n=fT(e),s=new TT(e);return yT(t._query),lT(n,t._query).then(r=>new ET(e,s,t,r))}(function(t,e=!0){(function(n){ds=n})(Iw),Zt(new Lt("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Xd(new FE(n.getProvider("auth-internal")),new $E(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new H(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Js(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),xt(Xl,"3.7.2",t),xt(Xl,"3.7.2","esm2017")})();var CT="firebase",_T="9.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt(CT,_T,"app");const np="@firebase/installations",kc="0.5.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp=1e4,rp=`w:${kc}`,ip="FIS_v2",ST="https://firebaseinstallations.googleapis.com/v1",AT=60*60*1e3,DT="installations",RT="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},xn=new yi(DT,RT,xT);function op(t){return t instanceof sn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap({projectId:t}){return`${ST}/projects/${t}/installations`}function cp(t){return{token:t.token,requestStatus:2,expiresIn:NT(t.expiresIn),creationTime:Date.now()}}async function lp(t,e){const s=(await e.json()).error;return xn.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function up({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function kT(t,{refreshToken:e}){const n=up(t);return n.append("Authorization",OT(e)),n}async function hp(t){const e=await t();return e.status>=500&&e.status<600?t():e}function NT(t){return Number(t.replace("s","000"))}function OT(t){return`${ip} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PT({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=ap(t),r=up(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:ip,appId:t.appId,sdkVersion:rp},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await hp(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:cp(l.authToken)}}else throw await lp("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT=/^[cdef][\w-]{21}$/,pa="";function FT(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=VT(t);return LT.test(n)?n:pa}catch{return pa}}function VT(t){return MT(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp=new Map;function pp(t,e){const n=ji(t);gp(n,e),UT(n,e)}function gp(t,e){const n=dp.get(t);if(!!n)for(const s of n)s(e)}function UT(t,e){const n=BT();n&&n.postMessage({key:t,fid:e}),$T()}let vn=null;function BT(){return!vn&&"BroadcastChannel"in self&&(vn=new BroadcastChannel("[Firebase] FID Change"),vn.onmessage=t=>{gp(t.data.key,t.data.fid)}),vn}function $T(){dp.size===0&&vn&&(vn.close(),vn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT="firebase-installations-database",HT=1,kn="firebase-installations-store";let yo=null;function Nc(){return yo||(yo=cf(jT,HT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(kn)}}})),yo}async function ri(t,e){const n=ji(t),r=(await Nc()).transaction(kn,"readwrite"),i=r.objectStore(kn),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&pp(t,e.fid),e}async function mp(t){const e=ji(t),s=(await Nc()).transaction(kn,"readwrite");await s.objectStore(kn).delete(e),await s.done}async function Hi(t,e){const n=ji(t),r=(await Nc()).transaction(kn,"readwrite"),i=r.objectStore(kn),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&pp(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oc(t){let e;const n=await Hi(t.appConfig,s=>{const r=qT(s),i=KT(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===pa?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function qT(t){const e=t||{fid:FT(),registrationStatus:0};return yp(e)}function KT(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(xn.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=zT(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:GT(t)}:{installationEntry:e}}async function zT(t,e){try{const n=await PT(t,e);return ri(t.appConfig,n)}catch(n){throw op(n)&&n.customData.serverCode===409?await mp(t.appConfig):await ri(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function GT(t){let e=await Du(t.appConfig);for(;e.registrationStatus===1;)await fp(100),e=await Du(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Oc(t);return s||n}return e}function Du(t){return Hi(t,e=>{if(!e)throw xn.create("installation-not-found");return yp(e)})}function yp(t){return WT(t)?{fid:t.fid,registrationStatus:0}:t}function WT(t){return t.registrationStatus===1&&t.registrationTime+sp<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QT({appConfig:t,heartbeatServiceProvider:e},n){const s=YT(t,n),r=kT(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:rp,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await hp(()=>fetch(s,a));if(c.ok){const l=await c.json();return cp(l)}else throw await lp("Generate Auth Token",c)}function YT(t,{fid:e}){return`${ap(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pc(t,e=!1){let n;const s=await Hi(t.appConfig,i=>{if(!vp(i))throw xn.create("not-registered");const o=i.authToken;if(!e&&ZT(o))return i;if(o.requestStatus===1)return n=XT(t,e),i;{if(!navigator.onLine)throw xn.create("app-offline");const a=tI(i);return n=JT(t,a),a}});return n?await n:s.authToken}async function XT(t,e){let n=await Ru(t.appConfig);for(;n.authToken.requestStatus===1;)await fp(100),n=await Ru(t.appConfig);const s=n.authToken;return s.requestStatus===0?Pc(t,e):s}function Ru(t){return Hi(t,e=>{if(!vp(e))throw xn.create("not-registered");const n=e.authToken;return nI(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function JT(t,e){try{const n=await QT(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await ri(t.appConfig,s),n}catch(n){if(op(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await mp(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ri(t.appConfig,s)}throw n}}function vp(t){return t!==void 0&&t.registrationStatus===2}function ZT(t){return t.requestStatus===2&&!eI(t)}function eI(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+AT}function tI(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function nI(t){return t.requestStatus===1&&t.requestTime+sp<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sI(t){const e=t,{installationEntry:n,registrationPromise:s}=await Oc(e);return s?s.catch(console.error):Pc(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rI(t,e=!1){const n=t;return await iI(n),(await Pc(n,e)).token}async function iI(t){const{registrationPromise:e}=await Oc(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(t){if(!t||!t.options)throw vo("App Configuration");if(!t.name)throw vo("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw vo(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function vo(t){return xn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp="installations",aI="installations-internal",cI=t=>{const e=t.getProvider("app").getImmediate(),n=oI(e),s=nr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},lI=t=>{const e=t.getProvider("app").getImmediate(),n=nr(e,wp).getImmediate();return{getId:()=>sI(n),getToken:r=>rI(n,r)}};function uI(){Zt(new Lt(wp,cI,"PUBLIC")),Zt(new Lt(aI,lI,"PRIVATE"))}uI();xt(np,kc);xt(np,kc,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii="analytics",hI="firebase_id",fI="origin",dI=60*1e3,pI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ep="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot=new Ha("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function gI(t,e){const n=document.createElement("script");n.src=`${Ep}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function mI(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function yI(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await bp(n)).find(l=>l.measurementId===r);c&&await e[c.appId]}}catch(a){ot.error(a)}t("config",r,i)}async function vI(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await bp(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){ot.error(i)}}function wI(t,e,n,s){async function r(i,o,a){try{i==="event"?await vI(t,e,n,o,a):i==="config"?await yI(t,e,n,s,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(c){ot.error(c)}}return r}function EI(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=wI(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function bI(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ep)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},ht=new yi("analytics","Analytics",TI);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II=30,CI=1e3;class _I{constructor(e={},n=CI){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Tp=new _I;function SI(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function AI(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:SI(s)},i=pI.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw ht.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function DI(t,e=Tp,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw ht.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw ht.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new kI;return setTimeout(async()=>{a.abort()},n!==void 0?n:dI),Ip({appId:s,apiKey:r,measurementId:i},o,a,e)}async function Ip(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=Tp){var i,o;const{appId:a,measurementId:c}=t;try{await RI(s,e)}catch(l){if(c)return ot.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${(i=l)===null||i===void 0?void 0:i.message}]`),{appId:a,measurementId:c};throw l}try{const l=await AI(t);return r.deleteThrottleMetadata(a),l}catch(l){const u=l;if(!xI(u)){if(r.deleteThrottleMetadata(a),c)return ot.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:c};throw l}const h=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?xl(n,r.intervalMillis,II):xl(n,r.intervalMillis),d={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return r.setThrottleMetadata(a,d),ot.debug(`Calling attemptFetch again in ${h} millis`),Ip(t,d,s,r)}}function RI(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(ht.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function xI(t){if(!(t instanceof sn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class kI{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function NI(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OI(){var t;if(nf())try{await sf()}catch(e){return ot.warn(ht.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return ot.warn(ht.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function PI(t,e,n,s,r,i,o){var a;const c=DI(t);c.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&ot.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>ot.error(g)),e.push(c);const l=OI().then(g=>{if(g)return s.getId()}),[u,h]=await Promise.all([c,l]);bI(i)||gI(i,u.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[fI]="firebase",d.update=!0,h!=null&&(d[hI]=h),r("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e){this.app=e}_delete(){return delete Ls[this.app.options.appId],Promise.resolve()}}let Ls={},xu=[];const ku={};let wo="dataLayer",LI="gtag",Nu,Cp,Ou=!1;function FI(){const t=[];if(uv()&&t.push("This is a browser extension environment."),hv()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=ht.create("invalid-analytics-context",{errorInfo:e});ot.warn(n.message)}}function VI(t,e,n){FI();const s=t.options.appId;if(!s)throw ht.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ot.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ht.create("no-api-key");if(Ls[s]!=null)throw ht.create("already-exists",{id:s});if(!Ou){mI(wo);const{wrappedGtag:i,gtagCore:o}=EI(Ls,xu,ku,wo,LI);Cp=i,Nu=o,Ou=!0}return Ls[s]=PI(t,xu,ku,e,Nu,wo,n),new MI(t)}function UI(t=uf()){t=ja(t);const e=nr(t,ii);return e.isInitialized()?e.getImmediate():BI(t)}function BI(t,e={}){const n=nr(t,ii);if(n.isInitialized()){const r=n.getImmediate();if(qr(e,n.getOptions()))return r;throw ht.create("already-initialized")}return n.initialize({options:e})}function $I(t,e,n,s){t=ja(t),NI(Cp,Ls[t.app.options.appId],e,n,s).catch(r=>ot.error(r))}const Pu="@firebase/analytics",Mu="0.8.4";function jI(){Zt(new Lt(ii,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return VI(s,r,n)},"PUBLIC")),Zt(new Lt("analytics-internal",t,"PRIVATE")),xt(Pu,Mu),xt(Pu,Mu,"esm2017");function t(e){try{const n=e.getProvider(ii).getImmediate();return{logEvent:(s,r,i)=>$I(n,s,r,i)}}catch(n){throw ht.create("interop-component-reg-failed",{reason:n})}}}jI();const HI={apiKey:"AIzaSyAo970WrIbs722dkdHyz7IuUvDjIsRgTUw",authDomain:"newpro-55e5b.firebaseapp.com",projectId:"newpro-55e5b",storageBucket:"newpro-55e5b.appspot.com",messagingSenderId:"745138633432",appId:"1:745138633432:web:b55afaef3d1af9d4af75ad",measurementId:"G-JK5R6Q0FD4"},_p=lf(HI);UI(_p);const qI=hT(_p),Lu=sy("pets",{state:()=>({pets:[]}),getters:{getPets:t=>t.pets},actions:{async fetchPets(){const t=await IT(tT(qI,"pets"));this.pets=t.docs.map(e=>e.data())}}}),KI=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},zI={data(){return{pets:[]}},async mounted(){await Lu().fetchPets(),this.pets=Lu().getPets}},GI={key:0};function WI(t,e,n,s,r,i){return Bn(),Ir("div",null,[(Bn(!0),Ir(gt,null,Wg(r.pets,o=>(Bn(),Ir("div",{key:o.id},[As("div",null," type: "+qi(o.type),1),As("div",null," name: "+qi(o.name),1),As("div",null," age: "+qi(o.age),1),o.isVaccinated?(Bn(),Ir("div",GI," hello ")):mm("",!0)]))),128))])}const QI=KI(zI,[["render",WI]]),YI=rv({history:by("/PCG-Nutta/"),routes:[{path:"/",name:"home",component:QI}]});const Mc=Qm(ov);Mc.use(Jm());Mc.use(YI);Mc.mount("#app");
