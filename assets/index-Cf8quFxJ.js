(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}})();function Vx(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var gp={exports:{}},Zl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D1;function TT(){if(D1)return Zl;D1=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(r,s,l){var u=null;if(l!==void 0&&(u=""+l),s.key!==void 0&&(u=""+s.key),"key"in s){l={};for(var f in s)f!=="key"&&(l[f]=s[f])}else l=s;return s=l.ref,{$$typeof:a,type:r,key:u,ref:s!==void 0?s:null,props:l}}return Zl.Fragment=e,Zl.jsx=t,Zl.jsxs=t,Zl}var U1;function bT(){return U1||(U1=1,gp.exports=TT()),gp.exports}var Nn=bT(),vp={exports:{}},ft={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L1;function ET(){if(L1)return ft;L1=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function _(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,b={};function S(O,Q,pe){this.props=O,this.context=Q,this.refs=b,this.updater=pe||y}S.prototype.isReactComponent={},S.prototype.setState=function(O,Q){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Q,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function x(){}x.prototype=S.prototype;function U(O,Q,pe){this.props=O,this.context=Q,this.refs=b,this.updater=pe||y}var C=U.prototype=new x;C.constructor=U,M(C,S.prototype),C.isPureReactComponent=!0;var E=Array.isArray,N={H:null,A:null,T:null,S:null,V:null},z=Object.prototype.hasOwnProperty;function P(O,Q,pe,xe,Ae,$){return pe=$.ref,{$$typeof:a,type:O,key:Q,ref:pe!==void 0?pe:null,props:$}}function G(O,Q){return P(O.type,Q,void 0,void 0,void 0,O.props)}function D(O){return typeof O=="object"&&O!==null&&O.$$typeof===a}function L(O){var Q={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(pe){return Q[pe]})}var H=/\/+/g;function oe(O,Q){return typeof O=="object"&&O!==null&&O.key!=null?L(""+O.key):Q.toString(36)}function ae(){}function ce(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(ae,ae):(O.status="pending",O.then(function(Q){O.status==="pending"&&(O.status="fulfilled",O.value=Q)},function(Q){O.status==="pending"&&(O.status="rejected",O.reason=Q)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function fe(O,Q,pe,xe,Ae){var $=typeof O;($==="undefined"||$==="boolean")&&(O=null);var le=!1;if(O===null)le=!0;else switch($){case"bigint":case"string":case"number":le=!0;break;case"object":switch(O.$$typeof){case a:case e:le=!0;break;case m:return le=O._init,fe(le(O._payload),Q,pe,xe,Ae)}}if(le)return Ae=Ae(O),le=xe===""?"."+oe(O,0):xe,E(Ae)?(pe="",le!=null&&(pe=le.replace(H,"$&/")+"/"),fe(Ae,Q,pe,"",function(ze){return ze})):Ae!=null&&(D(Ae)&&(Ae=G(Ae,pe+(Ae.key==null||O&&O.key===Ae.key?"":(""+Ae.key).replace(H,"$&/")+"/")+le)),Q.push(Ae)),1;le=0;var Se=xe===""?".":xe+":";if(E(O))for(var we=0;we<O.length;we++)xe=O[we],$=Se+oe(xe,we),le+=fe(xe,Q,pe,$,Ae);else if(we=_(O),typeof we=="function")for(O=we.call(O),we=0;!(xe=O.next()).done;)xe=xe.value,$=Se+oe(xe,we++),le+=fe(xe,Q,pe,$,Ae);else if($==="object"){if(typeof O.then=="function")return fe(ce(O),Q,pe,xe,Ae);throw Q=String(O),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return le}function B(O,Q,pe){if(O==null)return O;var xe=[],Ae=0;return fe(O,xe,"","",function($){return Q.call(pe,$,Ae++)}),xe}function Z(O){if(O._status===-1){var Q=O._result;Q=Q(),Q.then(function(pe){(O._status===0||O._status===-1)&&(O._status=1,O._result=pe)},function(pe){(O._status===0||O._status===-1)&&(O._status=2,O._result=pe)}),O._status===-1&&(O._status=0,O._result=Q)}if(O._status===1)return O._result.default;throw O._result}var q=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function me(){}return ft.Children={map:B,forEach:function(O,Q,pe){B(O,function(){Q.apply(this,arguments)},pe)},count:function(O){var Q=0;return B(O,function(){Q++}),Q},toArray:function(O){return B(O,function(Q){return Q})||[]},only:function(O){if(!D(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},ft.Component=S,ft.Fragment=t,ft.Profiler=s,ft.PureComponent=U,ft.StrictMode=r,ft.Suspense=p,ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,ft.__COMPILER_RUNTIME={__proto__:null,c:function(O){return N.H.useMemoCache(O)}},ft.cache=function(O){return function(){return O.apply(null,arguments)}},ft.cloneElement=function(O,Q,pe){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var xe=M({},O.props),Ae=O.key,$=void 0;if(Q!=null)for(le in Q.ref!==void 0&&($=void 0),Q.key!==void 0&&(Ae=""+Q.key),Q)!z.call(Q,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&Q.ref===void 0||(xe[le]=Q[le]);var le=arguments.length-2;if(le===1)xe.children=pe;else if(1<le){for(var Se=Array(le),we=0;we<le;we++)Se[we]=arguments[we+2];xe.children=Se}return P(O.type,Ae,void 0,void 0,$,xe)},ft.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:l,_context:O},O},ft.createElement=function(O,Q,pe){var xe,Ae={},$=null;if(Q!=null)for(xe in Q.key!==void 0&&($=""+Q.key),Q)z.call(Q,xe)&&xe!=="key"&&xe!=="__self"&&xe!=="__source"&&(Ae[xe]=Q[xe]);var le=arguments.length-2;if(le===1)Ae.children=pe;else if(1<le){for(var Se=Array(le),we=0;we<le;we++)Se[we]=arguments[we+2];Ae.children=Se}if(O&&O.defaultProps)for(xe in le=O.defaultProps,le)Ae[xe]===void 0&&(Ae[xe]=le[xe]);return P(O,$,void 0,void 0,null,Ae)},ft.createRef=function(){return{current:null}},ft.forwardRef=function(O){return{$$typeof:f,render:O}},ft.isValidElement=D,ft.lazy=function(O){return{$$typeof:m,_payload:{_status:-1,_result:O},_init:Z}},ft.memo=function(O,Q){return{$$typeof:h,type:O,compare:Q===void 0?null:Q}},ft.startTransition=function(O){var Q=N.T,pe={};N.T=pe;try{var xe=O(),Ae=N.S;Ae!==null&&Ae(pe,xe),typeof xe=="object"&&xe!==null&&typeof xe.then=="function"&&xe.then(me,q)}catch($){q($)}finally{N.T=Q}},ft.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},ft.use=function(O){return N.H.use(O)},ft.useActionState=function(O,Q,pe){return N.H.useActionState(O,Q,pe)},ft.useCallback=function(O,Q){return N.H.useCallback(O,Q)},ft.useContext=function(O){return N.H.useContext(O)},ft.useDebugValue=function(){},ft.useDeferredValue=function(O,Q){return N.H.useDeferredValue(O,Q)},ft.useEffect=function(O,Q,pe){var xe=N.H;if(typeof pe=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return xe.useEffect(O,Q)},ft.useId=function(){return N.H.useId()},ft.useImperativeHandle=function(O,Q,pe){return N.H.useImperativeHandle(O,Q,pe)},ft.useInsertionEffect=function(O,Q){return N.H.useInsertionEffect(O,Q)},ft.useLayoutEffect=function(O,Q){return N.H.useLayoutEffect(O,Q)},ft.useMemo=function(O,Q){return N.H.useMemo(O,Q)},ft.useOptimistic=function(O,Q){return N.H.useOptimistic(O,Q)},ft.useReducer=function(O,Q,pe){return N.H.useReducer(O,Q,pe)},ft.useRef=function(O){return N.H.useRef(O)},ft.useState=function(O){return N.H.useState(O)},ft.useSyncExternalStore=function(O,Q,pe){return N.H.useSyncExternalStore(O,Q,pe)},ft.useTransition=function(){return N.H.useTransition()},ft.version="19.1.1",ft}var N1;function w0(){return N1||(N1=1,vp.exports=ET()),vp.exports}var Va=w0();const Qn=Vx(Va);var _p={exports:{}},Kl={},yp={exports:{}},xp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P1;function AT(){return P1||(P1=1,(function(a){function e(B,Z){var q=B.length;B.push(Z);e:for(;0<q;){var me=q-1>>>1,O=B[me];if(0<s(O,Z))B[me]=Z,B[q]=O,q=me;else break e}}function t(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Z=B[0],q=B.pop();if(q!==Z){B[0]=q;e:for(var me=0,O=B.length,Q=O>>>1;me<Q;){var pe=2*(me+1)-1,xe=B[pe],Ae=pe+1,$=B[Ae];if(0>s(xe,q))Ae<O&&0>s($,xe)?(B[me]=$,B[Ae]=q,me=Ae):(B[me]=xe,B[pe]=q,me=pe);else if(Ae<O&&0>s($,q))B[me]=$,B[Ae]=q,me=Ae;else break e}}return Z}function s(B,Z){var q=B.sortIndex-Z.sortIndex;return q!==0?q:B.id-Z.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;a.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();a.unstable_now=function(){return u.now()-f}}var p=[],h=[],m=1,v=null,_=3,y=!1,M=!1,b=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function E(B){for(var Z=t(h);Z!==null;){if(Z.callback===null)r(h);else if(Z.startTime<=B)r(h),Z.sortIndex=Z.expirationTime,e(p,Z);else break;Z=t(h)}}function N(B){if(b=!1,E(B),!M)if(t(p)!==null)M=!0,z||(z=!0,oe());else{var Z=t(h);Z!==null&&fe(N,Z.startTime-B)}}var z=!1,P=-1,G=5,D=-1;function L(){return S?!0:!(a.unstable_now()-D<G)}function H(){if(S=!1,z){var B=a.unstable_now();D=B;var Z=!0;try{e:{M=!1,b&&(b=!1,U(P),P=-1),y=!0;var q=_;try{t:{for(E(B),v=t(p);v!==null&&!(v.expirationTime>B&&L());){var me=v.callback;if(typeof me=="function"){v.callback=null,_=v.priorityLevel;var O=me(v.expirationTime<=B);if(B=a.unstable_now(),typeof O=="function"){v.callback=O,E(B),Z=!0;break t}v===t(p)&&r(p),E(B)}else r(p);v=t(p)}if(v!==null)Z=!0;else{var Q=t(h);Q!==null&&fe(N,Q.startTime-B),Z=!1}}break e}finally{v=null,_=q,y=!1}Z=void 0}}finally{Z?oe():z=!1}}}var oe;if(typeof C=="function")oe=function(){C(H)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,ce=ae.port2;ae.port1.onmessage=H,oe=function(){ce.postMessage(null)}}else oe=function(){x(H,0)};function fe(B,Z){P=x(function(){B(a.unstable_now())},Z)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(B){B.callback=null},a.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<B?Math.floor(1e3/B):5},a.unstable_getCurrentPriorityLevel=function(){return _},a.unstable_next=function(B){switch(_){case 1:case 2:case 3:var Z=3;break;default:Z=_}var q=_;_=Z;try{return B()}finally{_=q}},a.unstable_requestPaint=function(){S=!0},a.unstable_runWithPriority=function(B,Z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var q=_;_=B;try{return Z()}finally{_=q}},a.unstable_scheduleCallback=function(B,Z,q){var me=a.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?me+q:me):q=me,B){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=q+O,B={id:m++,callback:Z,priorityLevel:B,startTime:q,expirationTime:O,sortIndex:-1},q>me?(B.sortIndex=q,e(h,B),t(p)===null&&B===t(h)&&(b?(U(P),P=-1):b=!0,fe(N,q-me))):(B.sortIndex=O,e(p,B),M||y||(M=!0,z||(z=!0,oe()))),B},a.unstable_shouldYield=L,a.unstable_wrapCallback=function(B){var Z=_;return function(){var q=_;_=Z;try{return B.apply(this,arguments)}finally{_=q}}}})(xp)),xp}var O1;function wT(){return O1||(O1=1,yp.exports=AT()),yp.exports}var Sp={exports:{}},ti={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I1;function RT(){if(I1)return ti;I1=1;var a=w0();function e(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)h+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var r={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(p,h,m){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:v==null?null:""+v,children:p,containerInfo:h,implementation:m}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return ti.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,ti.createPortal=function(p,h){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return l(p,h,null,m)},ti.flushSync=function(p){var h=u.T,m=r.p;try{if(u.T=null,r.p=2,p)return p()}finally{u.T=h,r.p=m,r.d.f()}},ti.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(p,h))},ti.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},ti.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var m=h.as,v=f(m,h.crossOrigin),_=typeof h.integrity=="string"?h.integrity:void 0,y=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;m==="style"?r.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:y}):m==="script"&&r.d.X(p,{crossOrigin:v,integrity:_,fetchPriority:y,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},ti.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var m=f(h.as,h.crossOrigin);r.d.M(p,{crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(p)},ti.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var m=h.as,v=f(m,h.crossOrigin);r.d.L(p,m,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},ti.preloadModule=function(p,h){if(typeof p=="string")if(h){var m=f(h.as,h.crossOrigin);r.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(p)},ti.requestFormReset=function(p){r.d.r(p)},ti.unstable_batchedUpdates=function(p,h){return p(h)},ti.useFormState=function(p,h,m){return u.H.useFormState(p,h,m)},ti.useFormStatus=function(){return u.H.useHostTransitionStatus()},ti.version="19.1.1",ti}var z1;function CT(){if(z1)return Sp.exports;z1=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Sp.exports=RT(),Sp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B1;function DT(){if(B1)return Kl;B1=1;var a=wT(),e=w0(),t=CT();function r(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function u(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function f(n){if(l(n)!==n)throw Error(r(188))}function p(n){var i=n.alternate;if(!i){if(i=l(n),i===null)throw Error(r(188));return i!==n?null:n}for(var o=n,c=i;;){var d=o.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===o)return f(d),n;if(g===c)return f(d),i;g=g.sibling}throw Error(r(188))}if(o.return!==c.return)o=d,c=g;else{for(var T=!1,w=d.child;w;){if(w===o){T=!0,o=d,c=g;break}if(w===c){T=!0,c=d,o=g;break}w=w.sibling}if(!T){for(w=g.child;w;){if(w===o){T=!0,o=g,c=d;break}if(w===c){T=!0,c=g,o=d;break}w=w.sibling}if(!T)throw Error(r(189))}}if(o.alternate!==c)throw Error(r(190))}if(o.tag!==3)throw Error(r(188));return o.stateNode.current===o?n:i}function h(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=h(n),i!==null)return i;n=n.sibling}return null}var m=Object.assign,v=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),U=Symbol.for("react.consumer"),C=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),L=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function oe(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var ae=Symbol.for("react.client.reference");function ce(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===ae?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case M:return"Fragment";case S:return"Profiler";case b:return"StrictMode";case N:return"Suspense";case z:return"SuspenseList";case D:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case y:return"Portal";case C:return(n.displayName||"Context")+".Provider";case U:return(n._context.displayName||"Context")+".Consumer";case E:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case P:return i=n.displayName||null,i!==null?i:ce(n.type)||"Memo";case G:i=n._payload,n=n._init;try{return ce(n(i))}catch{}}return null}var fe=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},me=[],O=-1;function Q(n){return{current:n}}function pe(n){0>O||(n.current=me[O],me[O]=null,O--)}function xe(n,i){O++,me[O]=n.current,n.current=i}var Ae=Q(null),$=Q(null),le=Q(null),Se=Q(null);function we(n,i){switch(xe(le,i),xe($,n),xe(Ae,null),i.nodeType){case 9:case 11:n=(n=i.documentElement)&&(n=n.namespaceURI)?r1(n):0;break;default:if(n=i.tagName,i=i.namespaceURI)i=r1(i),n=a1(i,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}pe(Ae),xe(Ae,n)}function ze(){pe(Ae),pe($),pe(le)}function qe(n){n.memoizedState!==null&&xe(Se,n);var i=Ae.current,o=a1(i,n.type);i!==o&&(xe($,n),xe(Ae,o))}function bt(n){$.current===n&&(pe(Ae),pe($)),Se.current===n&&(pe(Se),Xl._currentValue=q)}var at=Object.prototype.hasOwnProperty,k=a.unstable_scheduleCallback,Pt=a.unstable_cancelCallback,Je=a.unstable_shouldYield,wt=a.unstable_requestPaint,He=a.unstable_now,$t=a.unstable_getCurrentPriorityLevel,Ve=a.unstable_ImmediatePriority,ct=a.unstable_UserBlockingPriority,on=a.unstable_NormalPriority,ln=a.unstable_LowPriority,I=a.unstable_IdlePriority,A=a.log,te=a.unstable_setDisableYieldValue,he=null,ye=null;function ue(n){if(typeof A=="function"&&te(n),ye&&typeof ye.setStrictMode=="function")try{ye.setStrictMode(he,n)}catch{}}var Oe=Math.clz32?Math.clz32:je,Re=Math.log,We=Math.LN2;function je(n){return n>>>=0,n===0?32:31-(Re(n)/We|0)|0}var Me=256,Le=4194304;function Ke(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Xe(n,i,o){var c=n.pendingLanes;if(c===0)return 0;var d=0,g=n.suspendedLanes,T=n.pingedLanes;n=n.warmLanes;var w=c&134217727;return w!==0?(c=w&~g,c!==0?d=Ke(c):(T&=w,T!==0?d=Ke(T):o||(o=w&~n,o!==0&&(d=Ke(o))))):(w=c&~g,w!==0?d=Ke(w):T!==0?d=Ke(T):o||(o=c&~n,o!==0&&(d=Ke(o)))),d===0?0:i!==0&&i!==d&&(i&g)===0&&(g=d&-d,o=i&-i,g>=o||g===32&&(o&4194048)!==0)?i:d}function De(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function ot(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W(){var n=Me;return Me<<=1,(Me&4194048)===0&&(Me=256),n}function Ee(){var n=Le;return Le<<=1,(Le&62914560)===0&&(Le=4194304),n}function Ce(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function Ie(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Te(n,i,o,c,d,g){var T=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var w=n.entanglements,F=n.expirationTimes,ee=n.hiddenUpdates;for(o=T&~o;0<o;){var de=31-Oe(o),ve=1<<de;w[de]=0,F[de]=-1;var ne=ee[de];if(ne!==null)for(ee[de]=null,de=0;de<ne.length;de++){var ie=ne[de];ie!==null&&(ie.lane&=-536870913)}o&=~ve}c!==0&&_e(n,c,0),g!==0&&d===0&&n.tag!==0&&(n.suspendedLanes|=g&~(T&~i))}function _e(n,i,o){n.pendingLanes|=i,n.suspendedLanes&=~i;var c=31-Oe(i);n.entangledLanes|=i,n.entanglements[c]=n.entanglements[c]|1073741824|o&4194090}function ke(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-Oe(o),d=1<<c;d&i|n[c]&i&&(n[c]|=i),o&=~d}}function rt(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Ot(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Rt(){var n=Z.p;return n!==0?n:(n=window.event,n===void 0?32:b1(n.type))}function Qi(n,i){var o=Z.p;try{return Z.p=n,i()}finally{Z.p=o}}var Rn=Math.random().toString(36).slice(2),Cn="__reactFiber$"+Rn,mn="__reactProps$"+Rn,pr="__reactContainer$"+Rn,As="__reactEvents$"+Rn,Oc="__reactListeners$"+Rn,ws="__reactHandles$"+Rn,nl="__reactResources$"+Rn,mr="__reactMarker$"+Rn;function Rs(n){delete n[Cn],delete n[mn],delete n[As],delete n[Oc],delete n[ws]}function Lr(n){var i=n[Cn];if(i)return i;for(var o=n.parentNode;o;){if(i=o[pr]||o[Cn]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=c1(n);n!==null;){if(o=n[Cn])return o;n=c1(n)}return i}n=o,o=n.parentNode}return null}function oa(n){if(n=n[Cn]||n[pr]){var i=n.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return n}return null}function Za(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(r(33))}function la(n){var i=n[nl];return i||(i=n[nl]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Tn(n){n[mr]=!0}var Ic=new Set,zc={};function R(n,i){Y(n,i),Y(n+"Capture",i)}function Y(n,i){for(zc[n]=i,n=0;n<i.length;n++)Ic.add(i[n])}var re=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),se={},K={};function be(n){return at.call(K,n)?!0:at.call(se,n)?!1:re.test(n)?K[n]=!0:(se[n]=!0,!1)}function Ue(n,i,o){if(be(i))if(o===null)n.removeAttribute(i);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var c=i.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+o)}}function Fe(n,i,o){if(o===null)n.removeAttribute(i);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+o)}}function Ne(n,i,o,c){if(c===null)n.removeAttribute(o);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(i,o,""+c)}}var $e,tt;function Ye(n){if($e===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);$e=i&&i[1]||"",tt=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$e+n+tt}var pt=!1;function Ct(n,i){if(!n||pt)return"";pt=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(i){var ve=function(){throw Error()};if(Object.defineProperty(ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ve,[])}catch(ie){var ne=ie}Reflect.construct(n,[],ve)}else{try{ve.call()}catch(ie){ne=ie}n.call(ve.prototype)}}else{try{throw Error()}catch(ie){ne=ie}(ve=n())&&typeof ve.catch=="function"&&ve.catch(function(){})}}catch(ie){if(ie&&ne&&typeof ie.stack=="string")return[ie.stack,ne.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=c.DetermineComponentFrameRoot(),T=g[0],w=g[1];if(T&&w){var F=T.split(`
`),ee=w.split(`
`);for(d=c=0;c<F.length&&!F[c].includes("DetermineComponentFrameRoot");)c++;for(;d<ee.length&&!ee[d].includes("DetermineComponentFrameRoot");)d++;if(c===F.length||d===ee.length)for(c=F.length-1,d=ee.length-1;1<=c&&0<=d&&F[c]!==ee[d];)d--;for(;1<=c&&0<=d;c--,d--)if(F[c]!==ee[d]){if(c!==1||d!==1)do if(c--,d--,0>d||F[c]!==ee[d]){var de=`
`+F[c].replace(" at new "," at ");return n.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",n.displayName)),de}while(1<=c&&0<=d);break}}}finally{pt=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?Ye(o):""}function an(n){switch(n.tag){case 26:case 27:case 5:return Ye(n.type);case 16:return Ye("Lazy");case 13:return Ye("Suspense");case 19:return Ye("SuspenseList");case 0:case 15:return Ct(n.type,!1);case 11:return Ct(n.type.render,!1);case 1:return Ct(n.type,!0);case 31:return Ye("Activity");default:return""}}function Gt(n){try{var i="";do i+=an(n),n=n.return;while(n);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function mt(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Qe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function tn(n){var i=Qe(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,g=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){c=""+T,g.call(this,T)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function xt(n){n._valueTracker||(n._valueTracker=tn(n))}function Jn(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=Qe(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function Ji(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var si=/[\n"\\]/g;function Bn(n){return n.replace(si,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Kt(n,i,o,c,d,g,T,w){n.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.type=T:n.removeAttribute("type"),i!=null?T==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+mt(i)):n.value!==""+mt(i)&&(n.value=""+mt(i)):T!=="submit"&&T!=="reset"||n.removeAttribute("value"),i!=null?$n(n,T,mt(i)):o!=null?$n(n,T,mt(o)):c!=null&&n.removeAttribute("value"),d==null&&g!=null&&(n.defaultChecked=!!g),d!=null&&(n.checked=d&&typeof d!="function"&&typeof d!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?n.name=""+mt(w):n.removeAttribute("name")}function oi(n,i,o,c,d,g,T,w){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(n.type=g),i!=null||o!=null){if(!(g!=="submit"&&g!=="reset"||i!=null))return;o=o!=null?""+mt(o):"",i=i!=null?""+mt(i):o,w||i===n.value||(n.value=i),n.defaultValue=i}c=c??d,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=w?n.checked:!!c,n.defaultChecked=!!c,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(n.name=T)}function $n(n,i,o){i==="number"&&Ji(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function gn(n,i,o,c){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&c&&(n[o].defaultSelected=!0)}else{for(o=""+mt(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Yn(n,i,o){if(i!=null&&(i=""+mt(i),i!==n.value&&(n.value=i),o==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=o!=null?""+mt(o):""}function Cs(n,i,o,c){if(i==null){if(c!=null){if(o!=null)throw Error(r(92));if(fe(c)){if(1<c.length)throw Error(r(93));c=c[0]}o=c}o==null&&(o=""),i=o}o=mt(i),n.defaultValue=o,c=n.textContent,c===o&&c!==""&&c!==null&&(n.value=c)}function pi(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var xM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rg(n,i,o){var c=i.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?c?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":c?n.setProperty(i,o):typeof o!="number"||o===0||xM.has(i)?i==="float"?n.cssFloat=o:n[i]=(""+o).trim():n[i]=o+"px"}function ag(n,i,o){if(i!=null&&typeof i!="object")throw Error(r(62));if(n=n.style,o!=null){for(var c in o)!o.hasOwnProperty(c)||i!=null&&i.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var d in i)c=i[d],i.hasOwnProperty(d)&&o[d]!==c&&rg(n,d,c)}else for(var g in i)i.hasOwnProperty(g)&&rg(n,g,i[g])}function mh(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var SM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),MM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Bc(n){return MM.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var gh=null;function vh(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ds=null,Us=null;function sg(n){var i=oa(n);if(i&&(n=i.stateNode)){var o=n[mn]||null;e:switch(n=i.stateNode,i.type){case"input":if(Kt(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Bn(""+i)+'"][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var d=c[mn]||null;if(!d)throw Error(r(90));Kt(c,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(i=0;i<o.length;i++)c=o[i],c.form===n.form&&Jn(c)}break e;case"textarea":Yn(n,o.value,o.defaultValue);break e;case"select":i=o.value,i!=null&&gn(n,!!o.multiple,i,!1)}}}var _h=!1;function og(n,i,o){if(_h)return n(i,o);_h=!0;try{var c=n(i);return c}finally{if(_h=!1,(Ds!==null||Us!==null)&&(Tu(),Ds&&(i=Ds,n=Us,Us=Ds=null,sg(i),n)))for(i=0;i<n.length;i++)sg(n[i])}}function il(n,i){var o=n.stateNode;if(o===null)return null;var c=o[mn]||null;if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(r(231,i,typeof o));return o}var Nr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yh=!1;if(Nr)try{var rl={};Object.defineProperty(rl,"passive",{get:function(){yh=!0}}),window.addEventListener("test",rl,rl),window.removeEventListener("test",rl,rl)}catch{yh=!1}var ca=null,xh=null,Fc=null;function lg(){if(Fc)return Fc;var n,i=xh,o=i.length,c,d="value"in ca?ca.value:ca.textContent,g=d.length;for(n=0;n<o&&i[n]===d[n];n++);var T=o-n;for(c=1;c<=T&&i[o-c]===d[g-c];c++);return Fc=d.slice(n,1<c?1-c:void 0)}function Hc(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Vc(){return!0}function cg(){return!1}function mi(n){function i(o,c,d,g,T){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var w in n)n.hasOwnProperty(w)&&(o=n[w],this[w]=o?o(g):g[w]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Vc:cg,this.isPropagationStopped=cg,this}return m(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Vc)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Vc)},persist:function(){},isPersistent:Vc}),i}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gc=mi(Ka),al=m({},Ka,{view:0,detail:0}),TM=mi(al),Sh,Mh,sl,kc=m({},al,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==sl&&(sl&&n.type==="mousemove"?(Sh=n.screenX-sl.screenX,Mh=n.screenY-sl.screenY):Mh=Sh=0,sl=n),Sh)},movementY:function(n){return"movementY"in n?n.movementY:Mh}}),ug=mi(kc),bM=m({},kc,{dataTransfer:0}),EM=mi(bM),AM=m({},al,{relatedTarget:0}),Th=mi(AM),wM=m({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),RM=mi(wM),CM=m({},Ka,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),DM=mi(CM),UM=m({},Ka,{data:0}),fg=mi(UM),LM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},NM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},PM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function OM(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=PM[n])?!!i[n]:!1}function bh(){return OM}var IM=m({},al,{key:function(n){if(n.key){var i=LM[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Hc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?NM[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bh,charCode:function(n){return n.type==="keypress"?Hc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Hc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),zM=mi(IM),BM=m({},kc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hg=mi(BM),FM=m({},al,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bh}),HM=mi(FM),VM=m({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),GM=mi(VM),kM=m({},kc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),XM=mi(kM),WM=m({},Ka,{newState:0,oldState:0}),YM=mi(WM),qM=[9,13,27,32],Eh=Nr&&"CompositionEvent"in window,ol=null;Nr&&"documentMode"in document&&(ol=document.documentMode);var jM=Nr&&"TextEvent"in window&&!ol,dg=Nr&&(!Eh||ol&&8<ol&&11>=ol),pg=" ",mg=!1;function gg(n,i){switch(n){case"keyup":return qM.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vg(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ls=!1;function ZM(n,i){switch(n){case"compositionend":return vg(i);case"keypress":return i.which!==32?null:(mg=!0,pg);case"textInput":return n=i.data,n===pg&&mg?null:n;default:return null}}function KM(n,i){if(Ls)return n==="compositionend"||!Eh&&gg(n,i)?(n=lg(),Fc=xh=ca=null,Ls=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return dg&&i.locale!=="ko"?null:i.data;default:return null}}var QM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _g(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!QM[n.type]:i==="textarea"}function yg(n,i,o,c){Ds?Us?Us.push(c):Us=[c]:Ds=c,i=Cu(i,"onChange"),0<i.length&&(o=new Gc("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var ll=null,cl=null;function JM(n){$_(n,0)}function Xc(n){var i=Za(n);if(Jn(i))return n}function xg(n,i){if(n==="change")return i}var Sg=!1;if(Nr){var Ah;if(Nr){var wh="oninput"in document;if(!wh){var Mg=document.createElement("div");Mg.setAttribute("oninput","return;"),wh=typeof Mg.oninput=="function"}Ah=wh}else Ah=!1;Sg=Ah&&(!document.documentMode||9<document.documentMode)}function Tg(){ll&&(ll.detachEvent("onpropertychange",bg),cl=ll=null)}function bg(n){if(n.propertyName==="value"&&Xc(cl)){var i=[];yg(i,cl,n,vh(n)),og(JM,i)}}function $M(n,i,o){n==="focusin"?(Tg(),ll=i,cl=o,ll.attachEvent("onpropertychange",bg)):n==="focusout"&&Tg()}function e2(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Xc(cl)}function t2(n,i){if(n==="click")return Xc(i)}function n2(n,i){if(n==="input"||n==="change")return Xc(i)}function i2(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Ei=typeof Object.is=="function"?Object.is:i2;function ul(n,i){if(Ei(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!at.call(i,d)||!Ei(n[d],i[d]))return!1}return!0}function Eg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ag(n,i){var o=Eg(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Eg(o)}}function wg(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?wg(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Rg(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=Ji(n.document);i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Ji(n.document)}return i}function Rh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}var r2=Nr&&"documentMode"in document&&11>=document.documentMode,Ns=null,Ch=null,fl=null,Dh=!1;function Cg(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Dh||Ns==null||Ns!==Ji(c)||(c=Ns,"selectionStart"in c&&Rh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),fl&&ul(fl,c)||(fl=c,c=Cu(Ch,"onSelect"),0<c.length&&(i=new Gc("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=Ns)))}function Qa(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var Ps={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},Uh={},Dg={};Nr&&(Dg=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function Ja(n){if(Uh[n])return Uh[n];if(!Ps[n])return n;var i=Ps[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Dg)return Uh[n]=i[o];return n}var Ug=Ja("animationend"),Lg=Ja("animationiteration"),Ng=Ja("animationstart"),a2=Ja("transitionrun"),s2=Ja("transitionstart"),o2=Ja("transitioncancel"),Pg=Ja("transitionend"),Og=new Map,Lh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lh.push("scrollEnd");function $i(n,i){Og.set(n,i),R(i,[n])}var Ig=new WeakMap;function Bi(n,i){if(typeof n=="object"&&n!==null){var o=Ig.get(n);return o!==void 0?o:(i={value:n,source:i,stack:Gt(i)},Ig.set(n,i),i)}return{value:n,source:i,stack:Gt(i)}}var Fi=[],Os=0,Nh=0;function Wc(){for(var n=Os,i=Nh=Os=0;i<n;){var o=Fi[i];Fi[i++]=null;var c=Fi[i];Fi[i++]=null;var d=Fi[i];Fi[i++]=null;var g=Fi[i];if(Fi[i++]=null,c!==null&&d!==null){var T=c.pending;T===null?d.next=d:(d.next=T.next,T.next=d),c.pending=d}g!==0&&zg(o,d,g)}}function Yc(n,i,o,c){Fi[Os++]=n,Fi[Os++]=i,Fi[Os++]=o,Fi[Os++]=c,Nh|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function Ph(n,i,o,c){return Yc(n,i,o,c),qc(n)}function Is(n,i){return Yc(n,null,null,i),qc(n)}function zg(n,i,o){n.lanes|=o;var c=n.alternate;c!==null&&(c.lanes|=o);for(var d=!1,g=n.return;g!==null;)g.childLanes|=o,c=g.alternate,c!==null&&(c.childLanes|=o),g.tag===22&&(n=g.stateNode,n===null||n._visibility&1||(d=!0)),n=g,g=g.return;return n.tag===3?(g=n.stateNode,d&&i!==null&&(d=31-Oe(o),n=g.hiddenUpdates,c=n[d],c===null?n[d]=[i]:c.push(i),i.lane=o|536870912),g):null}function qc(n){if(50<Il)throw Il=0,Hd=null,Error(r(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var zs={};function l2(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ai(n,i,o,c){return new l2(n,i,o,c)}function Oh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Pr(n,i){var o=n.alternate;return o===null?(o=Ai(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function Bg(n,i){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,i=o.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function jc(n,i,o,c,d,g){var T=0;if(c=n,typeof n=="function")Oh(n)&&(T=1);else if(typeof n=="string")T=uT(n,o,Ae.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case D:return n=Ai(31,o,i,d),n.elementType=D,n.lanes=g,n;case M:return $a(o.children,d,g,i);case b:T=8,d|=24;break;case S:return n=Ai(12,o,i,d|2),n.elementType=S,n.lanes=g,n;case N:return n=Ai(13,o,i,d),n.elementType=N,n.lanes=g,n;case z:return n=Ai(19,o,i,d),n.elementType=z,n.lanes=g,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case x:case C:T=10;break e;case U:T=9;break e;case E:T=11;break e;case P:T=14;break e;case G:T=16,c=null;break e}T=29,o=Error(r(130,n===null?"null":typeof n,"")),c=null}return i=Ai(T,o,i,d),i.elementType=n,i.type=c,i.lanes=g,i}function $a(n,i,o,c){return n=Ai(7,n,c,i),n.lanes=o,n}function Ih(n,i,o){return n=Ai(6,n,null,i),n.lanes=o,n}function zh(n,i,o){return i=Ai(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}var Bs=[],Fs=0,Zc=null,Kc=0,Hi=[],Vi=0,es=null,Or=1,Ir="";function ts(n,i){Bs[Fs++]=Kc,Bs[Fs++]=Zc,Zc=n,Kc=i}function Fg(n,i,o){Hi[Vi++]=Or,Hi[Vi++]=Ir,Hi[Vi++]=es,es=n;var c=Or;n=Ir;var d=32-Oe(c)-1;c&=~(1<<d),o+=1;var g=32-Oe(i)+d;if(30<g){var T=d-d%5;g=(c&(1<<T)-1).toString(32),c>>=T,d-=T,Or=1<<32-Oe(i)+d|o<<d|c,Ir=g+n}else Or=1<<g|o<<d|c,Ir=n}function Bh(n){n.return!==null&&(ts(n,1),Fg(n,1,0))}function Fh(n){for(;n===Zc;)Zc=Bs[--Fs],Bs[Fs]=null,Kc=Bs[--Fs],Bs[Fs]=null;for(;n===es;)es=Hi[--Vi],Hi[Vi]=null,Ir=Hi[--Vi],Hi[Vi]=null,Or=Hi[--Vi],Hi[Vi]=null}var li=null,vn=null,Lt=!1,ns=null,gr=!1,Hh=Error(r(519));function is(n){var i=Error(r(418,""));throw pl(Bi(i,n)),Hh}function Hg(n){var i=n.stateNode,o=n.type,c=n.memoizedProps;switch(i[Cn]=n,i[mn]=c,o){case"dialog":Mt("cancel",i),Mt("close",i);break;case"iframe":case"object":case"embed":Mt("load",i);break;case"video":case"audio":for(o=0;o<Bl.length;o++)Mt(Bl[o],i);break;case"source":Mt("error",i);break;case"img":case"image":case"link":Mt("error",i),Mt("load",i);break;case"details":Mt("toggle",i);break;case"input":Mt("invalid",i),oi(i,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),xt(i);break;case"select":Mt("invalid",i);break;case"textarea":Mt("invalid",i),Cs(i,c.value,c.defaultValue,c.children),xt(i)}o=c.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||i.textContent===""+o||c.suppressHydrationWarning===!0||i1(i.textContent,o)?(c.popover!=null&&(Mt("beforetoggle",i),Mt("toggle",i)),c.onScroll!=null&&Mt("scroll",i),c.onScrollEnd!=null&&Mt("scrollend",i),c.onClick!=null&&(i.onclick=Du),i=!0):i=!1,i||is(n)}function Vg(n){for(li=n.return;li;)switch(li.tag){case 5:case 13:gr=!1;return;case 27:case 3:gr=!0;return;default:li=li.return}}function hl(n){if(n!==li)return!1;if(!Lt)return Vg(n),Lt=!0,!1;var i=n.tag,o;if((o=i!==3&&i!==27)&&((o=i===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||np(n.type,n.memoizedProps)),o=!o),o&&vn&&is(n),Vg(n),i===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8)if(o=n.data,o==="/$"){if(i===0){vn=tr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++;n=n.nextSibling}vn=null}}else i===27?(i=vn,Ea(n.type)?(n=sp,sp=null,vn=n):vn=i):vn=li?tr(n.stateNode.nextSibling):null;return!0}function dl(){vn=li=null,Lt=!1}function Gg(){var n=ns;return n!==null&&(_i===null?_i=n:_i.push.apply(_i,n),ns=null),n}function pl(n){ns===null?ns=[n]:ns.push(n)}var Vh=Q(null),rs=null,zr=null;function ua(n,i,o){xe(Vh,i._currentValue),i._currentValue=o}function Br(n){n._currentValue=Vh.current,pe(Vh)}function Gh(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function kh(n,i,o,c){var d=n.child;for(d!==null&&(d.return=n);d!==null;){var g=d.dependencies;if(g!==null){var T=d.child;g=g.firstContext;e:for(;g!==null;){var w=g;g=d;for(var F=0;F<i.length;F++)if(w.context===i[F]){g.lanes|=o,w=g.alternate,w!==null&&(w.lanes|=o),Gh(g.return,o,n),c||(T=null);break e}g=w.next}}else if(d.tag===18){if(T=d.return,T===null)throw Error(r(341));T.lanes|=o,g=T.alternate,g!==null&&(g.lanes|=o),Gh(T,o,n),T=null}else T=d.child;if(T!==null)T.return=d;else for(T=d;T!==null;){if(T===n){T=null;break}if(d=T.sibling,d!==null){d.return=T.return,T=d;break}T=T.return}d=T}}function ml(n,i,o,c){n=null;for(var d=i,g=!1;d!==null;){if(!g){if((d.flags&524288)!==0)g=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var T=d.alternate;if(T===null)throw Error(r(387));if(T=T.memoizedProps,T!==null){var w=d.type;Ei(d.pendingProps.value,T.value)||(n!==null?n.push(w):n=[w])}}else if(d===Se.current){if(T=d.alternate,T===null)throw Error(r(387));T.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(n!==null?n.push(Xl):n=[Xl])}d=d.return}n!==null&&kh(i,n,o,c),i.flags|=262144}function Qc(n){for(n=n.firstContext;n!==null;){if(!Ei(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function as(n){rs=n,zr=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function ei(n){return kg(rs,n)}function Jc(n,i){return rs===null&&as(n),kg(n,i)}function kg(n,i){var o=i._currentValue;if(i={context:i,memoizedValue:o,next:null},zr===null){if(n===null)throw Error(r(308));zr=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else zr=zr.next=i;return o}var c2=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(o,c){n.push(c)}};this.abort=function(){i.aborted=!0,n.forEach(function(o){return o()})}},u2=a.unstable_scheduleCallback,f2=a.unstable_NormalPriority,Dn={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xh(){return{controller:new c2,data:new Map,refCount:0}}function gl(n){n.refCount--,n.refCount===0&&u2(f2,function(){n.controller.abort()})}var vl=null,Wh=0,Hs=0,Vs=null;function h2(n,i){if(vl===null){var o=vl=[];Wh=0,Hs=qd(),Vs={status:"pending",value:void 0,then:function(c){o.push(c)}}}return Wh++,i.then(Xg,Xg),i}function Xg(){if(--Wh===0&&vl!==null){Vs!==null&&(Vs.status="fulfilled");var n=vl;vl=null,Hs=0,Vs=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function d2(n,i){var o=[],c={status:"pending",value:null,reason:null,then:function(d){o.push(d)}};return n.then(function(){c.status="fulfilled",c.value=i;for(var d=0;d<o.length;d++)(0,o[d])(i)},function(d){for(c.status="rejected",c.reason=d,d=0;d<o.length;d++)(0,o[d])(void 0)}),c}var Wg=B.S;B.S=function(n,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&h2(n,i),Wg!==null&&Wg(n,i)};var ss=Q(null);function Yh(){var n=ss.current;return n!==null?n:en.pooledCache}function $c(n,i){i===null?xe(ss,ss.current):xe(ss,i.pool)}function Yg(){var n=Yh();return n===null?null:{parent:Dn._currentValue,pool:n}}var _l=Error(r(460)),qg=Error(r(474)),eu=Error(r(542)),qh={then:function(){}};function jg(n){return n=n.status,n==="fulfilled"||n==="rejected"}function tu(){}function Zg(n,i,o){switch(o=n[o],o===void 0?n.push(i):o!==i&&(i.then(tu,tu),i=o),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,Qg(n),n;default:if(typeof i.status=="string")i.then(tu,tu);else{if(n=en,n!==null&&100<n.shellSuspendCounter)throw Error(r(482));n=i,n.status="pending",n.then(function(c){if(i.status==="pending"){var d=i;d.status="fulfilled",d.value=c}},function(c){if(i.status==="pending"){var d=i;d.status="rejected",d.reason=c}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,Qg(n),n}throw yl=i,_l}}var yl=null;function Kg(){if(yl===null)throw Error(r(459));var n=yl;return yl=null,n}function Qg(n){if(n===_l||n===eu)throw Error(r(483))}var fa=!1;function jh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function ha(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function da(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(zt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,i=qc(n),zg(n,null,o),i}return Yc(n,c,i,o),qc(n)}function xl(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194048)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,ke(n,o)}}function Kh(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var T={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};g===null?d=g=T:g=g.next=T,o=o.next}while(o!==null);g===null?d=g=i:g=g.next=i}else d=g=i;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,callbacks:c.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}var Qh=!1;function Sl(){if(Qh){var n=Vs;if(n!==null)throw n}}function Ml(n,i,o,c){Qh=!1;var d=n.updateQueue;fa=!1;var g=d.firstBaseUpdate,T=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var F=w,ee=F.next;F.next=null,T===null?g=ee:T.next=ee,T=F;var de=n.alternate;de!==null&&(de=de.updateQueue,w=de.lastBaseUpdate,w!==T&&(w===null?de.firstBaseUpdate=ee:w.next=ee,de.lastBaseUpdate=F))}if(g!==null){var ve=d.baseState;T=0,de=ee=F=null,w=g;do{var ne=w.lane&-536870913,ie=ne!==w.lane;if(ie?(Et&ne)===ne:(c&ne)===ne){ne!==0&&ne===Hs&&(Qh=!0),de!==null&&(de=de.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var it=n,et=w;ne=i;var Wt=o;switch(et.tag){case 1:if(it=et.payload,typeof it=="function"){ve=it.call(Wt,ve,ne);break e}ve=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=et.payload,ne=typeof it=="function"?it.call(Wt,ve,ne):it,ne==null)break e;ve=m({},ve,ne);break e;case 2:fa=!0}}ne=w.callback,ne!==null&&(n.flags|=64,ie&&(n.flags|=8192),ie=d.callbacks,ie===null?d.callbacks=[ne]:ie.push(ne))}else ie={lane:ne,tag:w.tag,payload:w.payload,callback:w.callback,next:null},de===null?(ee=de=ie,F=ve):de=de.next=ie,T|=ne;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;ie=w,w=ie.next,ie.next=null,d.lastBaseUpdate=ie,d.shared.pending=null}}while(!0);de===null&&(F=ve),d.baseState=F,d.firstBaseUpdate=ee,d.lastBaseUpdate=de,g===null&&(d.shared.lanes=0),Sa|=T,n.lanes=T,n.memoizedState=ve}}function Jg(n,i){if(typeof n!="function")throw Error(r(191,n));n.call(i)}function $g(n,i){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)Jg(o[n],i)}var Gs=Q(null),nu=Q(0);function ev(n,i){n=Wr,xe(nu,n),xe(Gs,i),Wr=n|i.baseLanes}function Jh(){xe(nu,Wr),xe(Gs,Gs.current)}function $h(){Wr=nu.current,pe(Gs),pe(nu)}var pa=0,vt=null,kt=null,bn=null,iu=!1,ks=!1,os=!1,ru=0,Tl=0,Xs=null,p2=0;function xn(){throw Error(r(321))}function ed(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!Ei(n[o],i[o]))return!1;return!0}function td(n,i,o,c,d,g){return pa=g,vt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=n===null||n.memoizedState===null?zv:Bv,os=!1,g=o(c,d),os=!1,ks&&(g=nv(i,o,c,d)),tv(n),g}function tv(n){B.H=uu;var i=kt!==null&&kt.next!==null;if(pa=0,bn=kt=vt=null,iu=!1,Tl=0,Xs=null,i)throw Error(r(300));n===null||Fn||(n=n.dependencies,n!==null&&Qc(n)&&(Fn=!0))}function nv(n,i,o,c){vt=n;var d=0;do{if(ks&&(Xs=null),Tl=0,ks=!1,25<=d)throw Error(r(301));if(d+=1,bn=kt=null,n.updateQueue!=null){var g=n.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}B.H=S2,g=i(o,c)}while(ks);return g}function m2(){var n=B.H,i=n.useState()[0];return i=typeof i.then=="function"?bl(i):i,n=n.useState()[0],(kt!==null?kt.memoizedState:null)!==n&&(vt.flags|=1024),i}function nd(){var n=ru!==0;return ru=0,n}function id(n,i,o){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~o}function rd(n){if(iu){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}iu=!1}pa=0,bn=kt=vt=null,ks=!1,Tl=ru=0,Xs=null}function gi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bn===null?vt.memoizedState=bn=n:bn=bn.next=n,bn}function En(){if(kt===null){var n=vt.alternate;n=n!==null?n.memoizedState:null}else n=kt.next;var i=bn===null?vt.memoizedState:bn.next;if(i!==null)bn=i,kt=n;else{if(n===null)throw vt.alternate===null?Error(r(467)):Error(r(310));kt=n,n={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},bn===null?vt.memoizedState=bn=n:bn=bn.next=n}return bn}function ad(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bl(n){var i=Tl;return Tl+=1,Xs===null&&(Xs=[]),n=Zg(Xs,n,i),i=vt,(bn===null?i.memoizedState:bn.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?zv:Bv),n}function au(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return bl(n);if(n.$$typeof===C)return ei(n)}throw Error(r(438,String(n)))}function sd(n){var i=null,o=vt.updateQueue;if(o!==null&&(i=o.memoCache),i==null){var c=vt.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(i={data:c.data.map(function(d){return d.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),o===null&&(o=ad(),vt.updateQueue=o),o.memoCache=i,o=i.data[i.index],o===void 0)for(o=i.data[i.index]=Array(n),c=0;c<n;c++)o[c]=L;return i.index++,o}function Fr(n,i){return typeof i=="function"?i(n):i}function su(n){var i=En();return od(i,kt,n)}function od(n,i,o){var c=n.queue;if(c===null)throw Error(r(311));c.lastRenderedReducer=o;var d=n.baseQueue,g=c.pending;if(g!==null){if(d!==null){var T=d.next;d.next=g.next,g.next=T}i.baseQueue=d=g,c.pending=null}if(g=n.baseState,d===null)n.memoizedState=g;else{i=d.next;var w=T=null,F=null,ee=i,de=!1;do{var ve=ee.lane&-536870913;if(ve!==ee.lane?(Et&ve)===ve:(pa&ve)===ve){var ne=ee.revertLane;if(ne===0)F!==null&&(F=F.next={lane:0,revertLane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),ve===Hs&&(de=!0);else if((pa&ne)===ne){ee=ee.next,ne===Hs&&(de=!0);continue}else ve={lane:0,revertLane:ee.revertLane,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},F===null?(w=F=ve,T=g):F=F.next=ve,vt.lanes|=ne,Sa|=ne;ve=ee.action,os&&o(g,ve),g=ee.hasEagerState?ee.eagerState:o(g,ve)}else ne={lane:ve,revertLane:ee.revertLane,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},F===null?(w=F=ne,T=g):F=F.next=ne,vt.lanes|=ve,Sa|=ve;ee=ee.next}while(ee!==null&&ee!==i);if(F===null?T=g:F.next=w,!Ei(g,n.memoizedState)&&(Fn=!0,de&&(o=Vs,o!==null)))throw o;n.memoizedState=g,n.baseState=T,n.baseQueue=F,c.lastRenderedState=g}return d===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function ld(n){var i=En(),o=i.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=n;var c=o.dispatch,d=o.pending,g=i.memoizedState;if(d!==null){o.pending=null;var T=d=d.next;do g=n(g,T.action),T=T.next;while(T!==d);Ei(g,i.memoizedState)||(Fn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),o.lastRenderedState=g}return[g,c]}function iv(n,i,o){var c=vt,d=En(),g=Lt;if(g){if(o===void 0)throw Error(r(407));o=o()}else o=i();var T=!Ei((kt||d).memoizedState,o);T&&(d.memoizedState=o,Fn=!0),d=d.queue;var w=sv.bind(null,c,d,n);if(El(2048,8,w,[n]),d.getSnapshot!==i||T||bn!==null&&bn.memoizedState.tag&1){if(c.flags|=2048,Ws(9,ou(),av.bind(null,c,d,o,i),null),en===null)throw Error(r(349));g||(pa&124)!==0||rv(c,i,o)}return o}function rv(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=vt.updateQueue,i===null?(i=ad(),vt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function av(n,i,o,c){i.value=o,i.getSnapshot=c,ov(i)&&lv(n)}function sv(n,i,o){return o(function(){ov(i)&&lv(n)})}function ov(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!Ei(n,o)}catch{return!0}}function lv(n){var i=Is(n,2);i!==null&&Ui(i,n,2)}function cd(n){var i=gi();if(typeof n=="function"){var o=n;if(n=o(),os){ue(!0);try{o()}finally{ue(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fr,lastRenderedState:n},i}function cv(n,i,o,c){return n.baseState=o,od(n,kt,typeof c=="function"?c:Fr)}function g2(n,i,o,c,d){if(cu(n))throw Error(r(485));if(n=i.action,n!==null){var g={payload:d,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){g.listeners.push(T)}};B.T!==null?o(!0):g.isTransition=!1,c(g),o=i.pending,o===null?(g.next=i.pending=g,uv(i,g)):(g.next=o.next,i.pending=o.next=g)}}function uv(n,i){var o=i.action,c=i.payload,d=n.state;if(i.isTransition){var g=B.T,T={};B.T=T;try{var w=o(d,c),F=B.S;F!==null&&F(T,w),fv(n,i,w)}catch(ee){ud(n,i,ee)}finally{B.T=g}}else try{g=o(d,c),fv(n,i,g)}catch(ee){ud(n,i,ee)}}function fv(n,i,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(c){hv(n,i,c)},function(c){return ud(n,i,c)}):hv(n,i,o)}function hv(n,i,o){i.status="fulfilled",i.value=o,dv(i),n.state=o,i=n.pending,i!==null&&(o=i.next,o===i?n.pending=null:(o=o.next,i.next=o,uv(n,o)))}function ud(n,i,o){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do i.status="rejected",i.reason=o,dv(i),i=i.next;while(i!==c)}n.action=null}function dv(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function pv(n,i){return i}function mv(n,i){if(Lt){var o=en.formState;if(o!==null){e:{var c=vt;if(Lt){if(vn){t:{for(var d=vn,g=gr;d.nodeType!==8;){if(!g){d=null;break t}if(d=tr(d.nextSibling),d===null){d=null;break t}}g=d.data,d=g==="F!"||g==="F"?d:null}if(d){vn=tr(d.nextSibling),c=d.data==="F!";break e}}is(c)}c=!1}c&&(i=o[0])}}return o=gi(),o.memoizedState=o.baseState=i,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pv,lastRenderedState:i},o.queue=c,o=Pv.bind(null,vt,c),c.dispatch=o,c=cd(!1),g=md.bind(null,vt,!1,c.queue),c=gi(),d={state:i,dispatch:null,action:n,pending:null},c.queue=d,o=g2.bind(null,vt,d,g,o),d.dispatch=o,c.memoizedState=n,[i,o,!1]}function gv(n){var i=En();return vv(i,kt,n)}function vv(n,i,o){if(i=od(n,i,pv)[0],n=su(Fr)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var c=bl(i)}catch(T){throw T===_l?eu:T}else c=i;i=En();var d=i.queue,g=d.dispatch;return o!==i.memoizedState&&(vt.flags|=2048,Ws(9,ou(),v2.bind(null,d,o),null)),[c,g,n]}function v2(n,i){n.action=i}function _v(n){var i=En(),o=kt;if(o!==null)return vv(i,o,n);En(),i=i.memoizedState,o=En();var c=o.queue.dispatch;return o.memoizedState=n,[i,c,!1]}function Ws(n,i,o,c){return n={tag:n,create:o,deps:c,inst:i,next:null},i=vt.updateQueue,i===null&&(i=ad(),vt.updateQueue=i),o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n),n}function ou(){return{destroy:void 0,resource:void 0}}function yv(){return En().memoizedState}function lu(n,i,o,c){var d=gi();c=c===void 0?null:c,vt.flags|=n,d.memoizedState=Ws(1|i,ou(),o,c)}function El(n,i,o,c){var d=En();c=c===void 0?null:c;var g=d.memoizedState.inst;kt!==null&&c!==null&&ed(c,kt.memoizedState.deps)?d.memoizedState=Ws(i,g,o,c):(vt.flags|=n,d.memoizedState=Ws(1|i,g,o,c))}function xv(n,i){lu(8390656,8,n,i)}function Sv(n,i){El(2048,8,n,i)}function Mv(n,i){return El(4,2,n,i)}function Tv(n,i){return El(4,4,n,i)}function bv(n,i){if(typeof i=="function"){n=n();var o=i(n);return function(){typeof o=="function"?o():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Ev(n,i,o){o=o!=null?o.concat([n]):null,El(4,4,bv.bind(null,i,n),o)}function fd(){}function Av(n,i){var o=En();i=i===void 0?null:i;var c=o.memoizedState;return i!==null&&ed(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function wv(n,i){var o=En();i=i===void 0?null:i;var c=o.memoizedState;if(i!==null&&ed(i,c[1]))return c[0];if(c=n(),os){ue(!0);try{n()}finally{ue(!1)}}return o.memoizedState=[c,i],c}function hd(n,i,o){return o===void 0||(pa&1073741824)!==0?n.memoizedState=i:(n.memoizedState=o,n=D_(),vt.lanes|=n,Sa|=n,o)}function Rv(n,i,o,c){return Ei(o,i)?o:Gs.current!==null?(n=hd(n,o,c),Ei(n,i)||(Fn=!0),n):(pa&42)===0?(Fn=!0,n.memoizedState=o):(n=D_(),vt.lanes|=n,Sa|=n,i)}function Cv(n,i,o,c,d){var g=Z.p;Z.p=g!==0&&8>g?g:8;var T=B.T,w={};B.T=w,md(n,!1,i,o);try{var F=d(),ee=B.S;if(ee!==null&&ee(w,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var de=d2(F,c);Al(n,i,de,Di(n))}else Al(n,i,c,Di(n))}catch(ve){Al(n,i,{then:function(){},status:"rejected",reason:ve},Di())}finally{Z.p=g,B.T=T}}function _2(){}function dd(n,i,o,c){if(n.tag!==5)throw Error(r(476));var d=Dv(n).queue;Cv(n,d,i,q,o===null?_2:function(){return Uv(n),o(c)})}function Dv(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fr,lastRenderedState:q},next:null};var o={};return i.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fr,lastRenderedState:o},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function Uv(n){var i=Dv(n).next.queue;Al(n,i,{},Di())}function pd(){return ei(Xl)}function Lv(){return En().memoizedState}function Nv(){return En().memoizedState}function y2(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var o=Di();n=ha(o);var c=da(i,n,o);c!==null&&(Ui(c,i,o),xl(c,i,o)),i={cache:Xh()},n.payload=i;return}i=i.return}}function x2(n,i,o){var c=Di();o={lane:c,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},cu(n)?Ov(i,o):(o=Ph(n,i,o,c),o!==null&&(Ui(o,n,c),Iv(o,i,c)))}function Pv(n,i,o){var c=Di();Al(n,i,o,c)}function Al(n,i,o,c){var d={lane:c,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(cu(n))Ov(i,d);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var T=i.lastRenderedState,w=g(T,o);if(d.hasEagerState=!0,d.eagerState=w,Ei(w,T))return Yc(n,i,d,0),en===null&&Wc(),!1}catch{}finally{}if(o=Ph(n,i,d,c),o!==null)return Ui(o,n,c),Iv(o,i,c),!0}return!1}function md(n,i,o,c){if(c={lane:2,revertLane:qd(),action:c,hasEagerState:!1,eagerState:null,next:null},cu(n)){if(i)throw Error(r(479))}else i=Ph(n,o,c,2),i!==null&&Ui(i,n,2)}function cu(n){var i=n.alternate;return n===vt||i!==null&&i===vt}function Ov(n,i){ks=iu=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Iv(n,i,o){if((o&4194048)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,ke(n,o)}}var uu={readContext:ei,use:au,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useLayoutEffect:xn,useInsertionEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useSyncExternalStore:xn,useId:xn,useHostTransitionStatus:xn,useFormState:xn,useActionState:xn,useOptimistic:xn,useMemoCache:xn,useCacheRefresh:xn},zv={readContext:ei,use:au,useCallback:function(n,i){return gi().memoizedState=[n,i===void 0?null:i],n},useContext:ei,useEffect:xv,useImperativeHandle:function(n,i,o){o=o!=null?o.concat([n]):null,lu(4194308,4,bv.bind(null,i,n),o)},useLayoutEffect:function(n,i){return lu(4194308,4,n,i)},useInsertionEffect:function(n,i){lu(4,2,n,i)},useMemo:function(n,i){var o=gi();i=i===void 0?null:i;var c=n();if(os){ue(!0);try{n()}finally{ue(!1)}}return o.memoizedState=[c,i],c},useReducer:function(n,i,o){var c=gi();if(o!==void 0){var d=o(i);if(os){ue(!0);try{o(i)}finally{ue(!1)}}}else d=i;return c.memoizedState=c.baseState=d,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:d},c.queue=n,n=n.dispatch=x2.bind(null,vt,n),[c.memoizedState,n]},useRef:function(n){var i=gi();return n={current:n},i.memoizedState=n},useState:function(n){n=cd(n);var i=n.queue,o=Pv.bind(null,vt,i);return i.dispatch=o,[n.memoizedState,o]},useDebugValue:fd,useDeferredValue:function(n,i){var o=gi();return hd(o,n,i)},useTransition:function(){var n=cd(!1);return n=Cv.bind(null,vt,n.queue,!0,!1),gi().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,o){var c=vt,d=gi();if(Lt){if(o===void 0)throw Error(r(407));o=o()}else{if(o=i(),en===null)throw Error(r(349));(Et&124)!==0||rv(c,i,o)}d.memoizedState=o;var g={value:o,getSnapshot:i};return d.queue=g,xv(sv.bind(null,c,g,n),[n]),c.flags|=2048,Ws(9,ou(),av.bind(null,c,g,o,i),null),o},useId:function(){var n=gi(),i=en.identifierPrefix;if(Lt){var o=Ir,c=Or;o=(c&~(1<<32-Oe(c)-1)).toString(32)+o,i="«"+i+"R"+o,o=ru++,0<o&&(i+="H"+o.toString(32)),i+="»"}else o=p2++,i="«"+i+"r"+o.toString(32)+"»";return n.memoizedState=i},useHostTransitionStatus:pd,useFormState:mv,useActionState:mv,useOptimistic:function(n){var i=gi();i.memoizedState=i.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=o,i=md.bind(null,vt,!0,o),o.dispatch=i,[n,i]},useMemoCache:sd,useCacheRefresh:function(){return gi().memoizedState=y2.bind(null,vt)}},Bv={readContext:ei,use:au,useCallback:Av,useContext:ei,useEffect:Sv,useImperativeHandle:Ev,useInsertionEffect:Mv,useLayoutEffect:Tv,useMemo:wv,useReducer:su,useRef:yv,useState:function(){return su(Fr)},useDebugValue:fd,useDeferredValue:function(n,i){var o=En();return Rv(o,kt.memoizedState,n,i)},useTransition:function(){var n=su(Fr)[0],i=En().memoizedState;return[typeof n=="boolean"?n:bl(n),i]},useSyncExternalStore:iv,useId:Lv,useHostTransitionStatus:pd,useFormState:gv,useActionState:gv,useOptimistic:function(n,i){var o=En();return cv(o,kt,n,i)},useMemoCache:sd,useCacheRefresh:Nv},S2={readContext:ei,use:au,useCallback:Av,useContext:ei,useEffect:Sv,useImperativeHandle:Ev,useInsertionEffect:Mv,useLayoutEffect:Tv,useMemo:wv,useReducer:ld,useRef:yv,useState:function(){return ld(Fr)},useDebugValue:fd,useDeferredValue:function(n,i){var o=En();return kt===null?hd(o,n,i):Rv(o,kt.memoizedState,n,i)},useTransition:function(){var n=ld(Fr)[0],i=En().memoizedState;return[typeof n=="boolean"?n:bl(n),i]},useSyncExternalStore:iv,useId:Lv,useHostTransitionStatus:pd,useFormState:_v,useActionState:_v,useOptimistic:function(n,i){var o=En();return kt!==null?cv(o,kt,n,i):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:sd,useCacheRefresh:Nv},Ys=null,wl=0;function fu(n){var i=wl;return wl+=1,Ys===null&&(Ys=[]),Zg(Ys,n,i)}function Rl(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function hu(n,i){throw i.$$typeof===v?Error(r(525)):(n=Object.prototype.toString.call(i),Error(r(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function Fv(n){var i=n._init;return i(n._payload)}function Hv(n){function i(j,X){if(n){var J=j.deletions;J===null?(j.deletions=[X],j.flags|=16):J.push(X)}}function o(j,X){if(!n)return null;for(;X!==null;)i(j,X),X=X.sibling;return null}function c(j){for(var X=new Map;j!==null;)j.key!==null?X.set(j.key,j):X.set(j.index,j),j=j.sibling;return X}function d(j,X){return j=Pr(j,X),j.index=0,j.sibling=null,j}function g(j,X,J){return j.index=J,n?(J=j.alternate,J!==null?(J=J.index,J<X?(j.flags|=67108866,X):J):(j.flags|=67108866,X)):(j.flags|=1048576,X)}function T(j){return n&&j.alternate===null&&(j.flags|=67108866),j}function w(j,X,J,ge){return X===null||X.tag!==6?(X=Ih(J,j.mode,ge),X.return=j,X):(X=d(X,J),X.return=j,X)}function F(j,X,J,ge){var Ge=J.type;return Ge===M?de(j,X,J.props.children,ge,J.key):X!==null&&(X.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===G&&Fv(Ge)===X.type)?(X=d(X,J.props),Rl(X,J),X.return=j,X):(X=jc(J.type,J.key,J.props,null,j.mode,ge),Rl(X,J),X.return=j,X)}function ee(j,X,J,ge){return X===null||X.tag!==4||X.stateNode.containerInfo!==J.containerInfo||X.stateNode.implementation!==J.implementation?(X=zh(J,j.mode,ge),X.return=j,X):(X=d(X,J.children||[]),X.return=j,X)}function de(j,X,J,ge,Ge){return X===null||X.tag!==7?(X=$a(J,j.mode,ge,Ge),X.return=j,X):(X=d(X,J),X.return=j,X)}function ve(j,X,J){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Ih(""+X,j.mode,J),X.return=j,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case _:return J=jc(X.type,X.key,X.props,null,j.mode,J),Rl(J,X),J.return=j,J;case y:return X=zh(X,j.mode,J),X.return=j,X;case G:var ge=X._init;return X=ge(X._payload),ve(j,X,J)}if(fe(X)||oe(X))return X=$a(X,j.mode,J,null),X.return=j,X;if(typeof X.then=="function")return ve(j,fu(X),J);if(X.$$typeof===C)return ve(j,Jc(j,X),J);hu(j,X)}return null}function ne(j,X,J,ge){var Ge=X!==null?X.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ge!==null?null:w(j,X,""+J,ge);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case _:return J.key===Ge?F(j,X,J,ge):null;case y:return J.key===Ge?ee(j,X,J,ge):null;case G:return Ge=J._init,J=Ge(J._payload),ne(j,X,J,ge)}if(fe(J)||oe(J))return Ge!==null?null:de(j,X,J,ge,null);if(typeof J.then=="function")return ne(j,X,fu(J),ge);if(J.$$typeof===C)return ne(j,X,Jc(j,J),ge);hu(j,J)}return null}function ie(j,X,J,ge,Ge){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return j=j.get(J)||null,w(X,j,""+ge,Ge);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case _:return j=j.get(ge.key===null?J:ge.key)||null,F(X,j,ge,Ge);case y:return j=j.get(ge.key===null?J:ge.key)||null,ee(X,j,ge,Ge);case G:var yt=ge._init;return ge=yt(ge._payload),ie(j,X,J,ge,Ge)}if(fe(ge)||oe(ge))return j=j.get(J)||null,de(X,j,ge,Ge,null);if(typeof ge.then=="function")return ie(j,X,J,fu(ge),Ge);if(ge.$$typeof===C)return ie(j,X,J,Jc(X,ge),Ge);hu(X,ge)}return null}function it(j,X,J,ge){for(var Ge=null,yt=null,Ze=X,nt=X=0,Vn=null;Ze!==null&&nt<J.length;nt++){Ze.index>nt?(Vn=Ze,Ze=null):Vn=Ze.sibling;var Dt=ne(j,Ze,J[nt],ge);if(Dt===null){Ze===null&&(Ze=Vn);break}n&&Ze&&Dt.alternate===null&&i(j,Ze),X=g(Dt,X,nt),yt===null?Ge=Dt:yt.sibling=Dt,yt=Dt,Ze=Vn}if(nt===J.length)return o(j,Ze),Lt&&ts(j,nt),Ge;if(Ze===null){for(;nt<J.length;nt++)Ze=ve(j,J[nt],ge),Ze!==null&&(X=g(Ze,X,nt),yt===null?Ge=Ze:yt.sibling=Ze,yt=Ze);return Lt&&ts(j,nt),Ge}for(Ze=c(Ze);nt<J.length;nt++)Vn=ie(Ze,j,nt,J[nt],ge),Vn!==null&&(n&&Vn.alternate!==null&&Ze.delete(Vn.key===null?nt:Vn.key),X=g(Vn,X,nt),yt===null?Ge=Vn:yt.sibling=Vn,yt=Vn);return n&&Ze.forEach(function(Da){return i(j,Da)}),Lt&&ts(j,nt),Ge}function et(j,X,J,ge){if(J==null)throw Error(r(151));for(var Ge=null,yt=null,Ze=X,nt=X=0,Vn=null,Dt=J.next();Ze!==null&&!Dt.done;nt++,Dt=J.next()){Ze.index>nt?(Vn=Ze,Ze=null):Vn=Ze.sibling;var Da=ne(j,Ze,Dt.value,ge);if(Da===null){Ze===null&&(Ze=Vn);break}n&&Ze&&Da.alternate===null&&i(j,Ze),X=g(Da,X,nt),yt===null?Ge=Da:yt.sibling=Da,yt=Da,Ze=Vn}if(Dt.done)return o(j,Ze),Lt&&ts(j,nt),Ge;if(Ze===null){for(;!Dt.done;nt++,Dt=J.next())Dt=ve(j,Dt.value,ge),Dt!==null&&(X=g(Dt,X,nt),yt===null?Ge=Dt:yt.sibling=Dt,yt=Dt);return Lt&&ts(j,nt),Ge}for(Ze=c(Ze);!Dt.done;nt++,Dt=J.next())Dt=ie(Ze,j,nt,Dt.value,ge),Dt!==null&&(n&&Dt.alternate!==null&&Ze.delete(Dt.key===null?nt:Dt.key),X=g(Dt,X,nt),yt===null?Ge=Dt:yt.sibling=Dt,yt=Dt);return n&&Ze.forEach(function(MT){return i(j,MT)}),Lt&&ts(j,nt),Ge}function Wt(j,X,J,ge){if(typeof J=="object"&&J!==null&&J.type===M&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case _:e:{for(var Ge=J.key;X!==null;){if(X.key===Ge){if(Ge=J.type,Ge===M){if(X.tag===7){o(j,X.sibling),ge=d(X,J.props.children),ge.return=j,j=ge;break e}}else if(X.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===G&&Fv(Ge)===X.type){o(j,X.sibling),ge=d(X,J.props),Rl(ge,J),ge.return=j,j=ge;break e}o(j,X);break}else i(j,X);X=X.sibling}J.type===M?(ge=$a(J.props.children,j.mode,ge,J.key),ge.return=j,j=ge):(ge=jc(J.type,J.key,J.props,null,j.mode,ge),Rl(ge,J),ge.return=j,j=ge)}return T(j);case y:e:{for(Ge=J.key;X!==null;){if(X.key===Ge)if(X.tag===4&&X.stateNode.containerInfo===J.containerInfo&&X.stateNode.implementation===J.implementation){o(j,X.sibling),ge=d(X,J.children||[]),ge.return=j,j=ge;break e}else{o(j,X);break}else i(j,X);X=X.sibling}ge=zh(J,j.mode,ge),ge.return=j,j=ge}return T(j);case G:return Ge=J._init,J=Ge(J._payload),Wt(j,X,J,ge)}if(fe(J))return it(j,X,J,ge);if(oe(J)){if(Ge=oe(J),typeof Ge!="function")throw Error(r(150));return J=Ge.call(J),et(j,X,J,ge)}if(typeof J.then=="function")return Wt(j,X,fu(J),ge);if(J.$$typeof===C)return Wt(j,X,Jc(j,J),ge);hu(j,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,X!==null&&X.tag===6?(o(j,X.sibling),ge=d(X,J),ge.return=j,j=ge):(o(j,X),ge=Ih(J,j.mode,ge),ge.return=j,j=ge),T(j)):o(j,X)}return function(j,X,J,ge){try{wl=0;var Ge=Wt(j,X,J,ge);return Ys=null,Ge}catch(Ze){if(Ze===_l||Ze===eu)throw Ze;var yt=Ai(29,Ze,null,j.mode);return yt.lanes=ge,yt.return=j,yt}finally{}}}var qs=Hv(!0),Vv=Hv(!1),Gi=Q(null),vr=null;function ma(n){var i=n.alternate;xe(Un,Un.current&1),xe(Gi,n),vr===null&&(i===null||Gs.current!==null||i.memoizedState!==null)&&(vr=n)}function Gv(n){if(n.tag===22){if(xe(Un,Un.current),xe(Gi,n),vr===null){var i=n.alternate;i!==null&&i.memoizedState!==null&&(vr=n)}}else ga()}function ga(){xe(Un,Un.current),xe(Gi,Gi.current)}function Hr(n){pe(Gi),vr===n&&(vr=null),pe(Un)}var Un=Q(0);function du(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||ap(o)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function gd(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:m({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var vd={enqueueSetState:function(n,i,o){n=n._reactInternals;var c=Di(),d=ha(c);d.payload=i,o!=null&&(d.callback=o),i=da(n,d,c),i!==null&&(Ui(i,n,c),xl(i,n,c))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=Di(),d=ha(c);d.tag=1,d.payload=i,o!=null&&(d.callback=o),i=da(n,d,c),i!==null&&(Ui(i,n,c),xl(i,n,c))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Di(),c=ha(o);c.tag=2,i!=null&&(c.callback=i),i=da(n,c,o),i!==null&&(Ui(i,n,o),xl(i,n,o))}};function kv(n,i,o,c,d,g,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,T):i.prototype&&i.prototype.isPureReactComponent?!ul(o,c)||!ul(d,g):!0}function Xv(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&vd.enqueueReplaceState(i,i.state,null)}function ls(n,i){var o=i;if("ref"in i){o={};for(var c in i)c!=="ref"&&(o[c]=i[c])}if(n=n.defaultProps){o===i&&(o=m({},o));for(var d in n)o[d]===void 0&&(o[d]=n[d])}return o}var pu=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function Wv(n){pu(n)}function Yv(n){console.error(n)}function qv(n){pu(n)}function mu(n,i){try{var o=n.onUncaughtError;o(i.value,{componentStack:i.stack})}catch(c){setTimeout(function(){throw c})}}function jv(n,i,o){try{var c=n.onCaughtError;c(o.value,{componentStack:o.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function _d(n,i,o){return o=ha(o),o.tag=3,o.payload={element:null},o.callback=function(){mu(n,i)},o}function Zv(n){return n=ha(n),n.tag=3,n}function Kv(n,i,o,c){var d=o.type.getDerivedStateFromError;if(typeof d=="function"){var g=c.value;n.payload=function(){return d(g)},n.callback=function(){jv(i,o,c)}}var T=o.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(n.callback=function(){jv(i,o,c),typeof d!="function"&&(Ma===null?Ma=new Set([this]):Ma.add(this));var w=c.stack;this.componentDidCatch(c.value,{componentStack:w!==null?w:""})})}function M2(n,i,o,c,d){if(o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(i=o.alternate,i!==null&&ml(i,o,d,!0),o=Gi.current,o!==null){switch(o.tag){case 13:return vr===null?Gd():o.alternate===null&&_n===0&&(_n=3),o.flags&=-257,o.flags|=65536,o.lanes=d,c===qh?o.flags|=16384:(i=o.updateQueue,i===null?o.updateQueue=new Set([c]):i.add(c),Xd(n,c,d)),!1;case 22:return o.flags|=65536,c===qh?o.flags|=16384:(i=o.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([c])},o.updateQueue=i):(o=i.retryQueue,o===null?i.retryQueue=new Set([c]):o.add(c)),Xd(n,c,d)),!1}throw Error(r(435,o.tag))}return Xd(n,c,d),Gd(),!1}if(Lt)return i=Gi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=d,c!==Hh&&(n=Error(r(422),{cause:c}),pl(Bi(n,o)))):(c!==Hh&&(i=Error(r(423),{cause:c}),pl(Bi(i,o))),n=n.current.alternate,n.flags|=65536,d&=-d,n.lanes|=d,c=Bi(c,o),d=_d(n.stateNode,c,d),Kh(n,d),_n!==4&&(_n=2)),!1;var g=Error(r(520),{cause:c});if(g=Bi(g,o),Ol===null?Ol=[g]:Ol.push(g),_n!==4&&(_n=2),i===null)return!0;c=Bi(c,o),o=i;do{switch(o.tag){case 3:return o.flags|=65536,n=d&-d,o.lanes|=n,n=_d(o.stateNode,c,n),Kh(o,n),!1;case 1:if(i=o.type,g=o.stateNode,(o.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ma===null||!Ma.has(g))))return o.flags|=65536,d&=-d,o.lanes|=d,d=Zv(d),Kv(d,n,o,c),Kh(o,d),!1}o=o.return}while(o!==null);return!1}var Qv=Error(r(461)),Fn=!1;function qn(n,i,o,c){i.child=n===null?Vv(i,null,o,c):qs(i,n.child,o,c)}function Jv(n,i,o,c,d){o=o.render;var g=i.ref;if("ref"in c){var T={};for(var w in c)w!=="ref"&&(T[w]=c[w])}else T=c;return as(i),c=td(n,i,o,T,g,d),w=nd(),n!==null&&!Fn?(id(n,i,d),Vr(n,i,d)):(Lt&&w&&Bh(i),i.flags|=1,qn(n,i,c,d),i.child)}function $v(n,i,o,c,d){if(n===null){var g=o.type;return typeof g=="function"&&!Oh(g)&&g.defaultProps===void 0&&o.compare===null?(i.tag=15,i.type=g,e_(n,i,g,c,d)):(n=jc(o.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,!Ad(n,d)){var T=g.memoizedProps;if(o=o.compare,o=o!==null?o:ul,o(T,c)&&n.ref===i.ref)return Vr(n,i,d)}return i.flags|=1,n=Pr(g,c),n.ref=i.ref,n.return=i,i.child=n}function e_(n,i,o,c,d){if(n!==null){var g=n.memoizedProps;if(ul(g,c)&&n.ref===i.ref)if(Fn=!1,i.pendingProps=c=g,Ad(n,d))(n.flags&131072)!==0&&(Fn=!0);else return i.lanes=n.lanes,Vr(n,i,d)}return yd(n,i,o,c,d)}function t_(n,i,o){var c=i.pendingProps,d=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden"){if((i.flags&128)!==0){if(c=g!==null?g.baseLanes|o:o,n!==null){for(d=i.child=n.child,g=0;d!==null;)g=g|d.lanes|d.childLanes,d=d.sibling;i.childLanes=g&~c}else i.childLanes=0,i.child=null;return n_(n,i,c,o)}if((o&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&$c(i,g!==null?g.cachePool:null),g!==null?ev(i,g):Jh(),Gv(i);else return i.lanes=i.childLanes=536870912,n_(n,i,g!==null?g.baseLanes|o:o,o)}else g!==null?($c(i,g.cachePool),ev(i,g),ga(),i.memoizedState=null):(n!==null&&$c(i,null),Jh(),ga());return qn(n,i,d,o),i.child}function n_(n,i,o,c){var d=Yh();return d=d===null?null:{parent:Dn._currentValue,pool:d},i.memoizedState={baseLanes:o,cachePool:d},n!==null&&$c(i,null),Jh(),Gv(i),n!==null&&ml(n,i,c,!0),null}function gu(n,i){var o=i.ref;if(o===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(r(284));(n===null||n.ref!==o)&&(i.flags|=4194816)}}function yd(n,i,o,c,d){return as(i),o=td(n,i,o,c,void 0,d),c=nd(),n!==null&&!Fn?(id(n,i,d),Vr(n,i,d)):(Lt&&c&&Bh(i),i.flags|=1,qn(n,i,o,d),i.child)}function i_(n,i,o,c,d,g){return as(i),i.updateQueue=null,o=nv(i,c,o,d),tv(n),c=nd(),n!==null&&!Fn?(id(n,i,g),Vr(n,i,g)):(Lt&&c&&Bh(i),i.flags|=1,qn(n,i,o,g),i.child)}function r_(n,i,o,c,d){if(as(i),i.stateNode===null){var g=zs,T=o.contextType;typeof T=="object"&&T!==null&&(g=ei(T)),g=new o(c,g),i.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=vd,i.stateNode=g,g._reactInternals=i,g=i.stateNode,g.props=c,g.state=i.memoizedState,g.refs={},jh(i),T=o.contextType,g.context=typeof T=="object"&&T!==null?ei(T):zs,g.state=i.memoizedState,T=o.getDerivedStateFromProps,typeof T=="function"&&(gd(i,o,T,c),g.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(T=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),T!==g.state&&vd.enqueueReplaceState(g,g.state,null),Ml(i,c,g,d),Sl(),g.state=i.memoizedState),typeof g.componentDidMount=="function"&&(i.flags|=4194308),c=!0}else if(n===null){g=i.stateNode;var w=i.memoizedProps,F=ls(o,w);g.props=F;var ee=g.context,de=o.contextType;T=zs,typeof de=="object"&&de!==null&&(T=ei(de));var ve=o.getDerivedStateFromProps;de=typeof ve=="function"||typeof g.getSnapshotBeforeUpdate=="function",w=i.pendingProps!==w,de||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w||ee!==T)&&Xv(i,g,c,T),fa=!1;var ne=i.memoizedState;g.state=ne,Ml(i,c,g,d),Sl(),ee=i.memoizedState,w||ne!==ee||fa?(typeof ve=="function"&&(gd(i,o,ve,c),ee=i.memoizedState),(F=fa||kv(i,o,F,c,ne,ee,T))?(de||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(i.flags|=4194308)):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=ee),g.props=c,g.state=ee,g.context=T,c=F):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{g=i.stateNode,Zh(n,i),T=i.memoizedProps,de=ls(o,T),g.props=de,ve=i.pendingProps,ne=g.context,ee=o.contextType,F=zs,typeof ee=="object"&&ee!==null&&(F=ei(ee)),w=o.getDerivedStateFromProps,(ee=typeof w=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(T!==ve||ne!==F)&&Xv(i,g,c,F),fa=!1,ne=i.memoizedState,g.state=ne,Ml(i,c,g,d),Sl();var ie=i.memoizedState;T!==ve||ne!==ie||fa||n!==null&&n.dependencies!==null&&Qc(n.dependencies)?(typeof w=="function"&&(gd(i,o,w,c),ie=i.memoizedState),(de=fa||kv(i,o,de,c,ne,ie,F)||n!==null&&n.dependencies!==null&&Qc(n.dependencies))?(ee||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(c,ie,F),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(c,ie,F)),typeof g.componentDidUpdate=="function"&&(i.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof g.componentDidUpdate!="function"||T===n.memoizedProps&&ne===n.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&ne===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ie),g.props=c,g.state=ie,g.context=F,c=de):(typeof g.componentDidUpdate!="function"||T===n.memoizedProps&&ne===n.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&ne===n.memoizedState||(i.flags|=1024),c=!1)}return g=c,gu(n,i),c=(i.flags&128)!==0,g||c?(g=i.stateNode,o=c&&typeof o.getDerivedStateFromError!="function"?null:g.render(),i.flags|=1,n!==null&&c?(i.child=qs(i,n.child,null,d),i.child=qs(i,null,o,d)):qn(n,i,o,d),i.memoizedState=g.state,n=i.child):n=Vr(n,i,d),n}function a_(n,i,o,c){return dl(),i.flags|=256,qn(n,i,o,c),i.child}var xd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sd(n){return{baseLanes:n,cachePool:Yg()}}function Md(n,i,o){return n=n!==null?n.childLanes&~o:0,i&&(n|=ki),n}function s_(n,i,o){var c=i.pendingProps,d=!1,g=(i.flags&128)!==0,T;if((T=g)||(T=n!==null&&n.memoizedState===null?!1:(Un.current&2)!==0),T&&(d=!0,i.flags&=-129),T=(i.flags&32)!==0,i.flags&=-33,n===null){if(Lt){if(d?ma(i):ga(),Lt){var w=vn,F;if(F=w){e:{for(F=w,w=gr;F.nodeType!==8;){if(!w){w=null;break e}if(F=tr(F.nextSibling),F===null){w=null;break e}}w=F}w!==null?(i.memoizedState={dehydrated:w,treeContext:es!==null?{id:Or,overflow:Ir}:null,retryLane:536870912,hydrationErrors:null},F=Ai(18,null,null,0),F.stateNode=w,F.return=i,i.child=F,li=i,vn=null,F=!0):F=!1}F||is(i)}if(w=i.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return ap(w)?i.lanes=32:i.lanes=536870912,null;Hr(i)}return w=c.children,c=c.fallback,d?(ga(),d=i.mode,w=vu({mode:"hidden",children:w},d),c=$a(c,d,o,null),w.return=i,c.return=i,w.sibling=c,i.child=w,d=i.child,d.memoizedState=Sd(o),d.childLanes=Md(n,T,o),i.memoizedState=xd,c):(ma(i),Td(i,w))}if(F=n.memoizedState,F!==null&&(w=F.dehydrated,w!==null)){if(g)i.flags&256?(ma(i),i.flags&=-257,i=bd(n,i,o)):i.memoizedState!==null?(ga(),i.child=n.child,i.flags|=128,i=null):(ga(),d=c.fallback,w=i.mode,c=vu({mode:"visible",children:c.children},w),d=$a(d,w,o,null),d.flags|=2,c.return=i,d.return=i,c.sibling=d,i.child=c,qs(i,n.child,null,o),c=i.child,c.memoizedState=Sd(o),c.childLanes=Md(n,T,o),i.memoizedState=xd,i=d);else if(ma(i),ap(w)){if(T=w.nextSibling&&w.nextSibling.dataset,T)var ee=T.dgst;T=ee,c=Error(r(419)),c.stack="",c.digest=T,pl({value:c,source:null,stack:null}),i=bd(n,i,o)}else if(Fn||ml(n,i,o,!1),T=(o&n.childLanes)!==0,Fn||T){if(T=en,T!==null&&(c=o&-o,c=(c&42)!==0?1:rt(c),c=(c&(T.suspendedLanes|o))!==0?0:c,c!==0&&c!==F.retryLane))throw F.retryLane=c,Is(n,c),Ui(T,n,c),Qv;w.data==="$?"||Gd(),i=bd(n,i,o)}else w.data==="$?"?(i.flags|=192,i.child=n.child,i=null):(n=F.treeContext,vn=tr(w.nextSibling),li=i,Lt=!0,ns=null,gr=!1,n!==null&&(Hi[Vi++]=Or,Hi[Vi++]=Ir,Hi[Vi++]=es,Or=n.id,Ir=n.overflow,es=i),i=Td(i,c.children),i.flags|=4096);return i}return d?(ga(),d=c.fallback,w=i.mode,F=n.child,ee=F.sibling,c=Pr(F,{mode:"hidden",children:c.children}),c.subtreeFlags=F.subtreeFlags&65011712,ee!==null?d=Pr(ee,d):(d=$a(d,w,o,null),d.flags|=2),d.return=i,c.return=i,c.sibling=d,i.child=c,c=d,d=i.child,w=n.child.memoizedState,w===null?w=Sd(o):(F=w.cachePool,F!==null?(ee=Dn._currentValue,F=F.parent!==ee?{parent:ee,pool:ee}:F):F=Yg(),w={baseLanes:w.baseLanes|o,cachePool:F}),d.memoizedState=w,d.childLanes=Md(n,T,o),i.memoizedState=xd,c):(ma(i),o=n.child,n=o.sibling,o=Pr(o,{mode:"visible",children:c.children}),o.return=i,o.sibling=null,n!==null&&(T=i.deletions,T===null?(i.deletions=[n],i.flags|=16):T.push(n)),i.child=o,i.memoizedState=null,o)}function Td(n,i){return i=vu({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function vu(n,i){return n=Ai(22,n,null,i),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function bd(n,i,o){return qs(i,n.child,null,o),n=Td(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function o_(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Gh(n.return,i,o)}function Ed(n,i,o,c,d){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=o,g.tailMode=d)}function l_(n,i,o){var c=i.pendingProps,d=c.revealOrder,g=c.tail;if(qn(n,i,c.children,o),c=Un.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&o_(n,o,i);else if(n.tag===19)o_(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}switch(xe(Un,c),d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&du(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Ed(i,!1,d,o,g);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&du(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}Ed(i,!0,o,null,g);break;case"together":Ed(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Vr(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Sa|=i.lanes,(o&i.childLanes)===0)if(n!==null){if(ml(n,i,o,!1),(o&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(r(153));if(i.child!==null){for(n=i.child,o=Pr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=Pr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function Ad(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&Qc(n)))}function T2(n,i,o){switch(i.tag){case 3:we(i,i.stateNode.containerInfo),ua(i,Dn,n.memoizedState.cache),dl();break;case 27:case 5:qe(i);break;case 4:we(i,i.stateNode.containerInfo);break;case 10:ua(i,i.type,i.memoizedProps.value);break;case 13:var c=i.memoizedState;if(c!==null)return c.dehydrated!==null?(ma(i),i.flags|=128,null):(o&i.child.childLanes)!==0?s_(n,i,o):(ma(i),n=Vr(n,i,o),n!==null?n.sibling:null);ma(i);break;case 19:var d=(n.flags&128)!==0;if(c=(o&i.childLanes)!==0,c||(ml(n,i,o,!1),c=(o&i.childLanes)!==0),d){if(c)return l_(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),xe(Un,Un.current),c)break;return null;case 22:case 23:return i.lanes=0,t_(n,i,o);case 24:ua(i,Dn,n.memoizedState.cache)}return Vr(n,i,o)}function c_(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps)Fn=!0;else{if(!Ad(n,o)&&(i.flags&128)===0)return Fn=!1,T2(n,i,o);Fn=(n.flags&131072)!==0}else Fn=!1,Lt&&(i.flags&1048576)!==0&&Fg(i,Kc,i.index);switch(i.lanes=0,i.tag){case 16:e:{n=i.pendingProps;var c=i.elementType,d=c._init;if(c=d(c._payload),i.type=c,typeof c=="function")Oh(c)?(n=ls(c,n),i.tag=1,i=r_(null,i,c,n,o)):(i.tag=0,i=yd(null,i,c,n,o));else{if(c!=null){if(d=c.$$typeof,d===E){i.tag=11,i=Jv(null,i,c,n,o);break e}else if(d===P){i.tag=14,i=$v(null,i,c,n,o);break e}}throw i=ce(c)||c,Error(r(306,i,""))}}return i;case 0:return yd(n,i,i.type,i.pendingProps,o);case 1:return c=i.type,d=ls(c,i.pendingProps),r_(n,i,c,d,o);case 3:e:{if(we(i,i.stateNode.containerInfo),n===null)throw Error(r(387));c=i.pendingProps;var g=i.memoizedState;d=g.element,Zh(n,i),Ml(i,c,null,o);var T=i.memoizedState;if(c=T.cache,ua(i,Dn,c),c!==g.cache&&kh(i,[Dn],o,!0),Sl(),c=T.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:T.cache},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){i=a_(n,i,c,o);break e}else if(c!==d){d=Bi(Error(r(424)),i),pl(d),i=a_(n,i,c,o);break e}else{switch(n=i.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(vn=tr(n.firstChild),li=i,Lt=!0,ns=null,gr=!0,o=Vv(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(dl(),c===d){i=Vr(n,i,o);break e}qn(n,i,c,o)}i=i.child}return i;case 26:return gu(n,i),n===null?(o=d1(i.type,null,i.pendingProps,null))?i.memoizedState=o:Lt||(o=i.type,n=i.pendingProps,c=Uu(le.current).createElement(o),c[Cn]=i,c[mn]=n,Zn(c,o,n),Tn(c),i.stateNode=c):i.memoizedState=d1(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return qe(i),n===null&&Lt&&(c=i.stateNode=u1(i.type,i.pendingProps,le.current),li=i,gr=!0,d=vn,Ea(i.type)?(sp=d,vn=tr(c.firstChild)):vn=d),qn(n,i,i.pendingProps.children,o),gu(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&Lt&&((d=c=vn)&&(c=Q2(c,i.type,i.pendingProps,gr),c!==null?(i.stateNode=c,li=i,vn=tr(c.firstChild),gr=!1,d=!0):d=!1),d||is(i)),qe(i),d=i.type,g=i.pendingProps,T=n!==null?n.memoizedProps:null,c=g.children,np(d,g)?c=null:T!==null&&np(d,T)&&(i.flags|=32),i.memoizedState!==null&&(d=td(n,i,m2,null,null,o),Xl._currentValue=d),gu(n,i),qn(n,i,c,o),i.child;case 6:return n===null&&Lt&&((n=o=vn)&&(o=J2(o,i.pendingProps,gr),o!==null?(i.stateNode=o,li=i,vn=null,n=!0):n=!1),n||is(i)),null;case 13:return s_(n,i,o);case 4:return we(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=qs(i,null,c,o):qn(n,i,c,o),i.child;case 11:return Jv(n,i,i.type,i.pendingProps,o);case 7:return qn(n,i,i.pendingProps,o),i.child;case 8:return qn(n,i,i.pendingProps.children,o),i.child;case 12:return qn(n,i,i.pendingProps.children,o),i.child;case 10:return c=i.pendingProps,ua(i,i.type,c.value),qn(n,i,c.children,o),i.child;case 9:return d=i.type._context,c=i.pendingProps.children,as(i),d=ei(d),c=c(d),i.flags|=1,qn(n,i,c,o),i.child;case 14:return $v(n,i,i.type,i.pendingProps,o);case 15:return e_(n,i,i.type,i.pendingProps,o);case 19:return l_(n,i,o);case 31:return c=i.pendingProps,o=i.mode,c={mode:c.mode,children:c.children},n===null?(o=vu(c,o),o.ref=i.ref,i.child=o,o.return=i,i=o):(o=Pr(n.child,c),o.ref=i.ref,i.child=o,o.return=i,i=o),i;case 22:return t_(n,i,o);case 24:return as(i),c=ei(Dn),n===null?(d=Yh(),d===null&&(d=en,g=Xh(),d.pooledCache=g,g.refCount++,g!==null&&(d.pooledCacheLanes|=o),d=g),i.memoizedState={parent:c,cache:d},jh(i),ua(i,Dn,d)):((n.lanes&o)!==0&&(Zh(n,i),Ml(i,null,null,o),Sl()),d=n.memoizedState,g=i.memoizedState,d.parent!==c?(d={parent:c,cache:c},i.memoizedState=d,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=d),ua(i,Dn,c)):(c=g.cache,ua(i,Dn,c),c!==d.cache&&kh(i,[Dn],o,!0))),qn(n,i,i.pendingProps.children,o),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function Gr(n){n.flags|=4}function u_(n,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!_1(i)){if(i=Gi.current,i!==null&&((Et&4194048)===Et?vr!==null:(Et&62914560)!==Et&&(Et&536870912)===0||i!==vr))throw yl=qh,qg;n.flags|=8192}}function _u(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?Ee():536870912,n.lanes|=i,Qs|=i)}function Cl(n,i){if(!Lt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function cn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&65011712,c|=d.flags&65011712,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function b2(n,i,o){var c=i.pendingProps;switch(Fh(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(i),null;case 1:return cn(i),null;case 3:return o=i.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),i.memoizedState.cache!==c&&(i.flags|=2048),Br(Dn),ze(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(hl(i)?Gr(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Gg())),cn(i),null;case 26:return o=i.memoizedState,n===null?(Gr(i),o!==null?(cn(i),u_(i,o)):(cn(i),i.flags&=-16777217)):o?o!==n.memoizedState?(Gr(i),cn(i),u_(i,o)):(cn(i),i.flags&=-16777217):(n.memoizedProps!==c&&Gr(i),cn(i),i.flags&=-16777217),null;case 27:bt(i),o=le.current;var d=i.type;if(n!==null&&i.stateNode!=null)n.memoizedProps!==c&&Gr(i);else{if(!c){if(i.stateNode===null)throw Error(r(166));return cn(i),null}n=Ae.current,hl(i)?Hg(i):(n=u1(d,c,o),i.stateNode=n,Gr(i))}return cn(i),null;case 5:if(bt(i),o=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==c&&Gr(i);else{if(!c){if(i.stateNode===null)throw Error(r(166));return cn(i),null}if(n=Ae.current,hl(i))Hg(i);else{switch(d=Uu(le.current),n){case 1:n=d.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:n=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":n=d.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":n=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":n=d.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof c.is=="string"?d.createElement("select",{is:c.is}):d.createElement("select"),c.multiple?n.multiple=!0:c.size&&(n.size=c.size);break;default:n=typeof c.is=="string"?d.createElement(o,{is:c.is}):d.createElement(o)}}n[Cn]=i,n[mn]=c;e:for(d=i.child;d!==null;){if(d.tag===5||d.tag===6)n.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===i)break e;for(;d.sibling===null;){if(d.return===null||d.return===i)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}i.stateNode=n;e:switch(Zn(n,o,c),o){case"button":case"input":case"select":case"textarea":n=!!c.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Gr(i)}}return cn(i),i.flags&=-16777217,null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==c&&Gr(i);else{if(typeof c!="string"&&i.stateNode===null)throw Error(r(166));if(n=le.current,hl(i)){if(n=i.stateNode,o=i.memoizedProps,c=null,d=li,d!==null)switch(d.tag){case 27:case 5:c=d.memoizedProps}n[Cn]=i,n=!!(n.nodeValue===o||c!==null&&c.suppressHydrationWarning===!0||i1(n.nodeValue,o)),n||is(i)}else n=Uu(n).createTextNode(c),n[Cn]=i,i.stateNode=n}return cn(i),null;case 13:if(c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(d=hl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!d)throw Error(r(318));if(d=i.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(r(317));d[Cn]=i}else dl(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;cn(i),d=!1}else d=Gg(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=d),d=!0;if(!d)return i.flags&256?(Hr(i),i):(Hr(i),null)}if(Hr(i),(i.flags&128)!==0)return i.lanes=o,i;if(o=c!==null,n=n!==null&&n.memoizedState!==null,o){c=i.child,d=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(d=c.alternate.memoizedState.cachePool.pool);var g=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(g=c.memoizedState.cachePool.pool),g!==d&&(c.flags|=2048)}return o!==n&&o&&(i.child.flags|=8192),_u(i,i.updateQueue),cn(i),null;case 4:return ze(),n===null&&Qd(i.stateNode.containerInfo),cn(i),null;case 10:return Br(i.type),cn(i),null;case 19:if(pe(Un),d=i.memoizedState,d===null)return cn(i),null;if(c=(i.flags&128)!==0,g=d.rendering,g===null)if(c)Cl(d,!1);else{if(_n!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(g=du(n),g!==null){for(i.flags|=128,Cl(d,!1),n=g.updateQueue,i.updateQueue=n,_u(i,n),i.subtreeFlags=0,n=o,o=i.child;o!==null;)Bg(o,n),o=o.sibling;return xe(Un,Un.current&1|2),i.child}n=n.sibling}d.tail!==null&&He()>Su&&(i.flags|=128,c=!0,Cl(d,!1),i.lanes=4194304)}else{if(!c)if(n=du(g),n!==null){if(i.flags|=128,c=!0,n=n.updateQueue,i.updateQueue=n,_u(i,n),Cl(d,!0),d.tail===null&&d.tailMode==="hidden"&&!g.alternate&&!Lt)return cn(i),null}else 2*He()-d.renderingStartTime>Su&&o!==536870912&&(i.flags|=128,c=!0,Cl(d,!1),i.lanes=4194304);d.isBackwards?(g.sibling=i.child,i.child=g):(n=d.last,n!==null?n.sibling=g:i.child=g,d.last=g)}return d.tail!==null?(i=d.tail,d.rendering=i,d.tail=i.sibling,d.renderingStartTime=He(),i.sibling=null,n=Un.current,xe(Un,c?n&1|2:n&1),i):(cn(i),null);case 22:case 23:return Hr(i),$h(),c=i.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(i.flags|=8192):c&&(i.flags|=8192),c?(o&536870912)!==0&&(i.flags&128)===0&&(cn(i),i.subtreeFlags&6&&(i.flags|=8192)):cn(i),o=i.updateQueue,o!==null&&_u(i,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==o&&(i.flags|=2048),n!==null&&pe(ss),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),Br(Dn),cn(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function E2(n,i){switch(Fh(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Br(Dn),ze(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return bt(i),null;case 13:if(Hr(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(r(340));dl()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return pe(Un),null;case 4:return ze(),null;case 10:return Br(i.type),null;case 22:case 23:return Hr(i),$h(),n!==null&&pe(ss),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return Br(Dn),null;case 25:return null;default:return null}}function f_(n,i){switch(Fh(i),i.tag){case 3:Br(Dn),ze();break;case 26:case 27:case 5:bt(i);break;case 4:ze();break;case 13:Hr(i);break;case 19:pe(Un);break;case 10:Br(i.type);break;case 22:case 23:Hr(i),$h(),n!==null&&pe(ss);break;case 24:Br(Dn)}}function Dl(n,i){try{var o=i.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var d=c.next;o=d;do{if((o.tag&n)===n){c=void 0;var g=o.create,T=o.inst;c=g(),T.destroy=c}o=o.next}while(o!==d)}}catch(w){Qt(i,i.return,w)}}function va(n,i,o){try{var c=i.updateQueue,d=c!==null?c.lastEffect:null;if(d!==null){var g=d.next;c=g;do{if((c.tag&n)===n){var T=c.inst,w=T.destroy;if(w!==void 0){T.destroy=void 0,d=i;var F=o,ee=w;try{ee()}catch(de){Qt(d,F,de)}}}c=c.next}while(c!==g)}}catch(de){Qt(i,i.return,de)}}function h_(n){var i=n.updateQueue;if(i!==null){var o=n.stateNode;try{$g(i,o)}catch(c){Qt(n,n.return,c)}}}function d_(n,i,o){o.props=ls(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(c){Qt(n,i,c)}}function Ul(n,i){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var c=n.stateNode;break;case 30:c=n.stateNode;break;default:c=n.stateNode}typeof o=="function"?n.refCleanup=o(c):o.current=c}}catch(d){Qt(n,i,d)}}function _r(n,i){var o=n.ref,c=n.refCleanup;if(o!==null)if(typeof c=="function")try{c()}catch(d){Qt(n,i,d)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(d){Qt(n,i,d)}else o.current=null}function p_(n){var i=n.type,o=n.memoizedProps,c=n.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":o.autoFocus&&c.focus();break e;case"img":o.src?c.src=o.src:o.srcSet&&(c.srcset=o.srcSet)}}catch(d){Qt(n,n.return,d)}}function wd(n,i,o){try{var c=n.stateNode;Y2(c,n.type,o,i),c[mn]=i}catch(d){Qt(n,n.return,d)}}function m_(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Ea(n.type)||n.tag===4}function Rd(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||m_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Ea(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Cd(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,i):(i=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,i.appendChild(n),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Du));else if(c!==4&&(c===27&&Ea(n.type)&&(o=n.stateNode,i=null),n=n.child,n!==null))for(Cd(n,i,o),n=n.sibling;n!==null;)Cd(n,i,o),n=n.sibling}function yu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(c===27&&Ea(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(yu(n,i,o),n=n.sibling;n!==null;)yu(n,i,o),n=n.sibling}function g_(n){var i=n.stateNode,o=n.memoizedProps;try{for(var c=n.type,d=i.attributes;d.length;)i.removeAttributeNode(d[0]);Zn(i,c,o),i[Cn]=n,i[mn]=o}catch(g){Qt(n,n.return,g)}}var kr=!1,Sn=!1,Dd=!1,v_=typeof WeakSet=="function"?WeakSet:Set,Hn=null;function A2(n,i){if(n=n.containerInfo,ep=zu,n=Rg(n),Rh(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var T=0,w=-1,F=-1,ee=0,de=0,ve=n,ne=null;t:for(;;){for(var ie;ve!==o||d!==0&&ve.nodeType!==3||(w=T+d),ve!==g||c!==0&&ve.nodeType!==3||(F=T+c),ve.nodeType===3&&(T+=ve.nodeValue.length),(ie=ve.firstChild)!==null;)ne=ve,ve=ie;for(;;){if(ve===n)break t;if(ne===o&&++ee===d&&(w=T),ne===g&&++de===c&&(F=T),(ie=ve.nextSibling)!==null)break;ve=ne,ne=ve.parentNode}ve=ie}o=w===-1||F===-1?null:{start:w,end:F}}else o=null}o=o||{start:0,end:0}}else o=null;for(tp={focusedElem:n,selectionRange:o},zu=!1,Hn=i;Hn!==null;)if(i=Hn,n=i.child,(i.subtreeFlags&1024)!==0&&n!==null)n.return=i,Hn=n;else for(;Hn!==null;){switch(i=Hn,g=i.alternate,n=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&g!==null){n=void 0,o=i,d=g.memoizedProps,g=g.memoizedState,c=o.stateNode;try{var it=ls(o.type,d,o.elementType===o.type);n=c.getSnapshotBeforeUpdate(it,g),c.__reactInternalSnapshotBeforeUpdate=n}catch(et){Qt(o,o.return,et)}}break;case 3:if((n&1024)!==0){if(n=i.stateNode.containerInfo,o=n.nodeType,o===9)rp(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":rp(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(r(163))}if(n=i.sibling,n!==null){n.return=i.return,Hn=n;break}Hn=i.return}}function __(n,i,o){var c=o.flags;switch(o.tag){case 0:case 11:case 15:_a(n,o),c&4&&Dl(5,o);break;case 1:if(_a(n,o),c&4)if(n=o.stateNode,i===null)try{n.componentDidMount()}catch(T){Qt(o,o.return,T)}else{var d=ls(o.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(d,i,n.__reactInternalSnapshotBeforeUpdate)}catch(T){Qt(o,o.return,T)}}c&64&&h_(o),c&512&&Ul(o,o.return);break;case 3:if(_a(n,o),c&64&&(n=o.updateQueue,n!==null)){if(i=null,o.child!==null)switch(o.child.tag){case 27:case 5:i=o.child.stateNode;break;case 1:i=o.child.stateNode}try{$g(n,i)}catch(T){Qt(o,o.return,T)}}break;case 27:i===null&&c&4&&g_(o);case 26:case 5:_a(n,o),i===null&&c&4&&p_(o),c&512&&Ul(o,o.return);break;case 12:_a(n,o);break;case 13:_a(n,o),c&4&&S_(n,o),c&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=O2.bind(null,o),$2(n,o))));break;case 22:if(c=o.memoizedState!==null||kr,!c){i=i!==null&&i.memoizedState!==null||Sn,d=kr;var g=Sn;kr=c,(Sn=i)&&!g?ya(n,o,(o.subtreeFlags&8772)!==0):_a(n,o),kr=d,Sn=g}break;case 30:break;default:_a(n,o)}}function y_(n){var i=n.alternate;i!==null&&(n.alternate=null,y_(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&Rs(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var sn=null,vi=!1;function Xr(n,i,o){for(o=o.child;o!==null;)x_(n,i,o),o=o.sibling}function x_(n,i,o){if(ye&&typeof ye.onCommitFiberUnmount=="function")try{ye.onCommitFiberUnmount(he,o)}catch{}switch(o.tag){case 26:Sn||_r(o,i),Xr(n,i,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Sn||_r(o,i);var c=sn,d=vi;Ea(o.type)&&(sn=o.stateNode,vi=!1),Xr(n,i,o),Hl(o.stateNode),sn=c,vi=d;break;case 5:Sn||_r(o,i);case 6:if(c=sn,d=vi,sn=null,Xr(n,i,o),sn=c,vi=d,sn!==null)if(vi)try{(sn.nodeType===9?sn.body:sn.nodeName==="HTML"?sn.ownerDocument.body:sn).removeChild(o.stateNode)}catch(g){Qt(o,i,g)}else try{sn.removeChild(o.stateNode)}catch(g){Qt(o,i,g)}break;case 18:sn!==null&&(vi?(n=sn,l1(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),jl(n)):l1(sn,o.stateNode));break;case 4:c=sn,d=vi,sn=o.stateNode.containerInfo,vi=!0,Xr(n,i,o),sn=c,vi=d;break;case 0:case 11:case 14:case 15:Sn||va(2,o,i),Sn||va(4,o,i),Xr(n,i,o);break;case 1:Sn||(_r(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"&&d_(o,i,c)),Xr(n,i,o);break;case 21:Xr(n,i,o);break;case 22:Sn=(c=Sn)||o.memoizedState!==null,Xr(n,i,o),Sn=c;break;default:Xr(n,i,o)}}function S_(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{jl(n)}catch(o){Qt(i,i.return,o)}}function w2(n){switch(n.tag){case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new v_),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new v_),i;default:throw Error(r(435,n.tag))}}function Ud(n,i){var o=w2(n);i.forEach(function(c){var d=I2.bind(null,n,c);o.has(c)||(o.add(c),c.then(d,d))})}function wi(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c],g=n,T=i,w=T;e:for(;w!==null;){switch(w.tag){case 27:if(Ea(w.type)){sn=w.stateNode,vi=!1;break e}break;case 5:sn=w.stateNode,vi=!1;break e;case 3:case 4:sn=w.stateNode.containerInfo,vi=!0;break e}w=w.return}if(sn===null)throw Error(r(160));x_(g,T,d),sn=null,vi=!1,g=d.alternate,g!==null&&(g.return=null),d.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)M_(i,n),i=i.sibling}var er=null;function M_(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:wi(i,n),Ri(n),c&4&&(va(3,n,n.return),Dl(3,n),va(5,n,n.return));break;case 1:wi(i,n),Ri(n),c&512&&(Sn||o===null||_r(o,o.return)),c&64&&kr&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?c:o.concat(c))));break;case 26:var d=er;if(wi(i,n),Ri(n),c&512&&(Sn||o===null||_r(o,o.return)),c&4){var g=o!==null?o.memoizedState:null;if(c=n.memoizedState,o===null)if(c===null)if(n.stateNode===null){e:{c=n.type,o=n.memoizedProps,d=d.ownerDocument||d;t:switch(c){case"title":g=d.getElementsByTagName("title")[0],(!g||g[mr]||g[Cn]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=d.createElement(c),d.head.insertBefore(g,d.querySelector("head > title"))),Zn(g,c,o),g[Cn]=n,Tn(g),c=g;break e;case"link":var T=g1("link","href",d).get(c+(o.href||""));if(T){for(var w=0;w<T.length;w++)if(g=T[w],g.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&g.getAttribute("rel")===(o.rel==null?null:o.rel)&&g.getAttribute("title")===(o.title==null?null:o.title)&&g.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){T.splice(w,1);break t}}g=d.createElement(c),Zn(g,c,o),d.head.appendChild(g);break;case"meta":if(T=g1("meta","content",d).get(c+(o.content||""))){for(w=0;w<T.length;w++)if(g=T[w],g.getAttribute("content")===(o.content==null?null:""+o.content)&&g.getAttribute("name")===(o.name==null?null:o.name)&&g.getAttribute("property")===(o.property==null?null:o.property)&&g.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&g.getAttribute("charset")===(o.charSet==null?null:o.charSet)){T.splice(w,1);break t}}g=d.createElement(c),Zn(g,c,o),d.head.appendChild(g);break;default:throw Error(r(468,c))}g[Cn]=n,Tn(g),c=g}n.stateNode=c}else v1(d,n.type,n.stateNode);else n.stateNode=m1(d,c,n.memoizedProps);else g!==c?(g===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):g.count--,c===null?v1(d,n.type,n.stateNode):m1(d,c,n.memoizedProps)):c===null&&n.stateNode!==null&&wd(n,n.memoizedProps,o.memoizedProps)}break;case 27:wi(i,n),Ri(n),c&512&&(Sn||o===null||_r(o,o.return)),o!==null&&c&4&&wd(n,n.memoizedProps,o.memoizedProps);break;case 5:if(wi(i,n),Ri(n),c&512&&(Sn||o===null||_r(o,o.return)),n.flags&32){d=n.stateNode;try{pi(d,"")}catch(ie){Qt(n,n.return,ie)}}c&4&&n.stateNode!=null&&(d=n.memoizedProps,wd(n,d,o!==null?o.memoizedProps:d)),c&1024&&(Dd=!0);break;case 6:if(wi(i,n),Ri(n),c&4){if(n.stateNode===null)throw Error(r(162));c=n.memoizedProps,o=n.stateNode;try{o.nodeValue=c}catch(ie){Qt(n,n.return,ie)}}break;case 3:if(Pu=null,d=er,er=Lu(i.containerInfo),wi(i,n),er=d,Ri(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{jl(i.containerInfo)}catch(ie){Qt(n,n.return,ie)}Dd&&(Dd=!1,T_(n));break;case 4:c=er,er=Lu(n.stateNode.containerInfo),wi(i,n),Ri(n),er=c;break;case 12:wi(i,n),Ri(n);break;case 13:wi(i,n),Ri(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(zd=He()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Ud(n,c)));break;case 22:d=n.memoizedState!==null;var F=o!==null&&o.memoizedState!==null,ee=kr,de=Sn;if(kr=ee||d,Sn=de||F,wi(i,n),Sn=de,kr=ee,Ri(n),c&8192)e:for(i=n.stateNode,i._visibility=d?i._visibility&-2:i._visibility|1,d&&(o===null||F||kr||Sn||cs(n)),o=null,i=n;;){if(i.tag===5||i.tag===26){if(o===null){F=o=i;try{if(g=F.stateNode,d)T=g.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{w=F.stateNode;var ve=F.memoizedProps.style,ne=ve!=null&&ve.hasOwnProperty("display")?ve.display:null;w.style.display=ne==null||typeof ne=="boolean"?"":(""+ne).trim()}}catch(ie){Qt(F,F.return,ie)}}}else if(i.tag===6){if(o===null){F=i;try{F.stateNode.nodeValue=d?"":F.memoizedProps}catch(ie){Qt(F,F.return,ie)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break e;for(;i.sibling===null;){if(i.return===null||i.return===n)break e;o===i&&(o=null),i=i.return}o===i&&(o=null),i.sibling.return=i.return,i=i.sibling}c&4&&(c=n.updateQueue,c!==null&&(o=c.retryQueue,o!==null&&(c.retryQueue=null,Ud(n,o))));break;case 19:wi(i,n),Ri(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Ud(n,c)));break;case 30:break;case 21:break;default:wi(i,n),Ri(n)}}function Ri(n){var i=n.flags;if(i&2){try{for(var o,c=n.return;c!==null;){if(m_(c)){o=c;break}c=c.return}if(o==null)throw Error(r(160));switch(o.tag){case 27:var d=o.stateNode,g=Rd(n);yu(n,g,d);break;case 5:var T=o.stateNode;o.flags&32&&(pi(T,""),o.flags&=-33);var w=Rd(n);yu(n,w,T);break;case 3:case 4:var F=o.stateNode.containerInfo,ee=Rd(n);Cd(n,ee,F);break;default:throw Error(r(161))}}catch(de){Qt(n,n.return,de)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function T_(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;T_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function _a(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)__(n,i.alternate,i),i=i.sibling}function cs(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:va(4,i,i.return),cs(i);break;case 1:_r(i,i.return);var o=i.stateNode;typeof o.componentWillUnmount=="function"&&d_(i,i.return,o),cs(i);break;case 27:Hl(i.stateNode);case 26:case 5:_r(i,i.return),cs(i);break;case 22:i.memoizedState===null&&cs(i);break;case 30:cs(i);break;default:cs(i)}n=n.sibling}}function ya(n,i,o){for(o=o&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var c=i.alternate,d=n,g=i,T=g.flags;switch(g.tag){case 0:case 11:case 15:ya(d,g,o),Dl(4,g);break;case 1:if(ya(d,g,o),c=g,d=c.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(ee){Qt(c,c.return,ee)}if(c=g,d=c.updateQueue,d!==null){var w=c.stateNode;try{var F=d.shared.hiddenCallbacks;if(F!==null)for(d.shared.hiddenCallbacks=null,d=0;d<F.length;d++)Jg(F[d],w)}catch(ee){Qt(c,c.return,ee)}}o&&T&64&&h_(g),Ul(g,g.return);break;case 27:g_(g);case 26:case 5:ya(d,g,o),o&&c===null&&T&4&&p_(g),Ul(g,g.return);break;case 12:ya(d,g,o);break;case 13:ya(d,g,o),o&&T&4&&S_(d,g);break;case 22:g.memoizedState===null&&ya(d,g,o),Ul(g,g.return);break;case 30:break;default:ya(d,g,o)}i=i.sibling}}function Ld(n,i){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&gl(o))}function Nd(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&gl(n))}function yr(n,i,o,c){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)b_(n,i,o,c),i=i.sibling}function b_(n,i,o,c){var d=i.flags;switch(i.tag){case 0:case 11:case 15:yr(n,i,o,c),d&2048&&Dl(9,i);break;case 1:yr(n,i,o,c);break;case 3:yr(n,i,o,c),d&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&gl(n)));break;case 12:if(d&2048){yr(n,i,o,c),n=i.stateNode;try{var g=i.memoizedProps,T=g.id,w=g.onPostCommit;typeof w=="function"&&w(T,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(F){Qt(i,i.return,F)}}else yr(n,i,o,c);break;case 13:yr(n,i,o,c);break;case 23:break;case 22:g=i.stateNode,T=i.alternate,i.memoizedState!==null?g._visibility&2?yr(n,i,o,c):Ll(n,i):g._visibility&2?yr(n,i,o,c):(g._visibility|=2,js(n,i,o,c,(i.subtreeFlags&10256)!==0)),d&2048&&Ld(T,i);break;case 24:yr(n,i,o,c),d&2048&&Nd(i.alternate,i);break;default:yr(n,i,o,c)}}function js(n,i,o,c,d){for(d=d&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var g=n,T=i,w=o,F=c,ee=T.flags;switch(T.tag){case 0:case 11:case 15:js(g,T,w,F,d),Dl(8,T);break;case 23:break;case 22:var de=T.stateNode;T.memoizedState!==null?de._visibility&2?js(g,T,w,F,d):Ll(g,T):(de._visibility|=2,js(g,T,w,F,d)),d&&ee&2048&&Ld(T.alternate,T);break;case 24:js(g,T,w,F,d),d&&ee&2048&&Nd(T.alternate,T);break;default:js(g,T,w,F,d)}i=i.sibling}}function Ll(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var o=n,c=i,d=c.flags;switch(c.tag){case 22:Ll(o,c),d&2048&&Ld(c.alternate,c);break;case 24:Ll(o,c),d&2048&&Nd(c.alternate,c);break;default:Ll(o,c)}i=i.sibling}}var Nl=8192;function Zs(n){if(n.subtreeFlags&Nl)for(n=n.child;n!==null;)E_(n),n=n.sibling}function E_(n){switch(n.tag){case 26:Zs(n),n.flags&Nl&&n.memoizedState!==null&&hT(er,n.memoizedState,n.memoizedProps);break;case 5:Zs(n);break;case 3:case 4:var i=er;er=Lu(n.stateNode.containerInfo),Zs(n),er=i;break;case 22:n.memoizedState===null&&(i=n.alternate,i!==null&&i.memoizedState!==null?(i=Nl,Nl=16777216,Zs(n),Nl=i):Zs(n));break;default:Zs(n)}}function A_(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function Pl(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var o=0;o<i.length;o++){var c=i[o];Hn=c,R_(c,n)}A_(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)w_(n),n=n.sibling}function w_(n){switch(n.tag){case 0:case 11:case 15:Pl(n),n.flags&2048&&va(9,n,n.return);break;case 3:Pl(n);break;case 12:Pl(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,xu(n)):Pl(n);break;default:Pl(n)}}function xu(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var o=0;o<i.length;o++){var c=i[o];Hn=c,R_(c,n)}A_(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:va(8,i,i.return),xu(i);break;case 22:o=i.stateNode,o._visibility&2&&(o._visibility&=-3,xu(i));break;default:xu(i)}n=n.sibling}}function R_(n,i){for(;Hn!==null;){var o=Hn;switch(o.tag){case 0:case 11:case 15:va(8,o,i);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var c=o.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:gl(o.memoizedState.cache)}if(c=o.child,c!==null)c.return=o,Hn=c;else e:for(o=n;Hn!==null;){c=Hn;var d=c.sibling,g=c.return;if(y_(c),c===o){Hn=null;break e}if(d!==null){d.return=g,Hn=d;break e}Hn=g}}}var R2={getCacheForType:function(n){var i=ei(Dn),o=i.data.get(n);return o===void 0&&(o=n(),i.data.set(n,o)),o}},C2=typeof WeakMap=="function"?WeakMap:Map,zt=0,en=null,St=null,Et=0,Bt=0,Ci=null,xa=!1,Ks=!1,Pd=!1,Wr=0,_n=0,Sa=0,us=0,Od=0,ki=0,Qs=0,Ol=null,_i=null,Id=!1,zd=0,Su=1/0,Mu=null,Ma=null,jn=0,Ta=null,Js=null,$s=0,Bd=0,Fd=null,C_=null,Il=0,Hd=null;function Di(){if((zt&2)!==0&&Et!==0)return Et&-Et;if(B.T!==null){var n=Hs;return n!==0?n:qd()}return Rt()}function D_(){ki===0&&(ki=(Et&536870912)===0||Lt?W():536870912);var n=Gi.current;return n!==null&&(n.flags|=32),ki}function Ui(n,i,o){(n===en&&(Bt===2||Bt===9)||n.cancelPendingCommit!==null)&&(eo(n,0),ba(n,Et,ki,!1)),Ie(n,o),((zt&2)===0||n!==en)&&(n===en&&((zt&2)===0&&(us|=o),_n===4&&ba(n,Et,ki,!1)),xr(n))}function U_(n,i,o){if((zt&6)!==0)throw Error(r(327));var c=!o&&(i&124)===0&&(i&n.expiredLanes)===0||De(n,i),d=c?L2(n,i):kd(n,i,!0),g=c;do{if(d===0){Ks&&!c&&ba(n,i,0,!1);break}else{if(o=n.current.alternate,g&&!D2(o)){d=kd(n,i,!1),g=!1;continue}if(d===2){if(g=i,n.errorRecoveryDisabledLanes&g)var T=0;else T=n.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){i=T;e:{var w=n;d=Ol;var F=w.current.memoizedState.isDehydrated;if(F&&(eo(w,T).flags|=256),T=kd(w,T,!1),T!==2){if(Pd&&!F){w.errorRecoveryDisabledLanes|=g,us|=g,d=4;break e}g=_i,_i=d,g!==null&&(_i===null?_i=g:_i.push.apply(_i,g))}d=T}if(g=!1,d!==2)continue}}if(d===1){eo(n,0),ba(n,i,0,!0);break}e:{switch(c=n,g=d,g){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:ba(c,i,ki,!xa);break e;case 2:_i=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(d=zd+300-He(),10<d)){if(ba(c,i,ki,!xa),Xe(c,0,!0)!==0)break e;c.timeoutHandle=s1(L_.bind(null,c,o,_i,Mu,Id,i,ki,us,Qs,xa,g,2,-0,0),d);break e}L_(c,o,_i,Mu,Id,i,ki,us,Qs,xa,g,0,-0,0)}}break}while(!0);xr(n)}function L_(n,i,o,c,d,g,T,w,F,ee,de,ve,ne,ie){if(n.timeoutHandle=-1,ve=i.subtreeFlags,(ve&8192||(ve&16785408)===16785408)&&(kl={stylesheets:null,count:0,unsuspend:fT},E_(i),ve=dT(),ve!==null)){n.cancelPendingCommit=ve(F_.bind(null,n,i,g,o,c,d,T,w,F,de,1,ne,ie)),ba(n,g,T,!ee);return}F_(n,i,g,o,c,d,T,w,F)}function D2(n){for(var i=n;;){var o=i.tag;if((o===0||o===11||o===15)&&i.flags&16384&&(o=i.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var c=0;c<o.length;c++){var d=o[c],g=d.getSnapshot;d=d.value;try{if(!Ei(g(),d))return!1}catch{return!1}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ba(n,i,o,c){i&=~Od,i&=~us,n.suspendedLanes|=i,n.pingedLanes&=~i,c&&(n.warmLanes|=i),c=n.expirationTimes;for(var d=i;0<d;){var g=31-Oe(d),T=1<<g;c[g]=-1,d&=~T}o!==0&&_e(n,o,i)}function Tu(){return(zt&6)===0?(zl(0),!1):!0}function Vd(){if(St!==null){if(Bt===0)var n=St.return;else n=St,zr=rs=null,rd(n),Ys=null,wl=0,n=St;for(;n!==null;)f_(n.alternate,n),n=n.return;St=null}}function eo(n,i){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,j2(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),Vd(),en=n,St=o=Pr(n.current,null),Et=i,Bt=0,Ci=null,xa=!1,Ks=De(n,i),Pd=!1,Qs=ki=Od=us=Sa=_n=0,_i=Ol=null,Id=!1,(i&8)!==0&&(i|=i&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=i;0<c;){var d=31-Oe(c),g=1<<d;i|=n[d],c&=~g}return Wr=i,Wc(),o}function N_(n,i){vt=null,B.H=uu,i===_l||i===eu?(i=Kg(),Bt=3):i===qg?(i=Kg(),Bt=4):Bt=i===Qv?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Ci=i,St===null&&(_n=1,mu(n,Bi(i,n.current)))}function P_(){var n=B.H;return B.H=uu,n===null?uu:n}function O_(){var n=B.A;return B.A=R2,n}function Gd(){_n=4,xa||(Et&4194048)!==Et&&Gi.current!==null||(Ks=!0),(Sa&134217727)===0&&(us&134217727)===0||en===null||ba(en,Et,ki,!1)}function kd(n,i,o){var c=zt;zt|=2;var d=P_(),g=O_();(en!==n||Et!==i)&&(Mu=null,eo(n,i)),i=!1;var T=_n;e:do try{if(Bt!==0&&St!==null){var w=St,F=Ci;switch(Bt){case 8:Vd(),T=6;break e;case 3:case 2:case 9:case 6:Gi.current===null&&(i=!0);var ee=Bt;if(Bt=0,Ci=null,to(n,w,F,ee),o&&Ks){T=0;break e}break;default:ee=Bt,Bt=0,Ci=null,to(n,w,F,ee)}}U2(),T=_n;break}catch(de){N_(n,de)}while(!0);return i&&n.shellSuspendCounter++,zr=rs=null,zt=c,B.H=d,B.A=g,St===null&&(en=null,Et=0,Wc()),T}function U2(){for(;St!==null;)I_(St)}function L2(n,i){var o=zt;zt|=2;var c=P_(),d=O_();en!==n||Et!==i?(Mu=null,Su=He()+500,eo(n,i)):Ks=De(n,i);e:do try{if(Bt!==0&&St!==null){i=St;var g=Ci;t:switch(Bt){case 1:Bt=0,Ci=null,to(n,i,g,1);break;case 2:case 9:if(jg(g)){Bt=0,Ci=null,z_(i);break}i=function(){Bt!==2&&Bt!==9||en!==n||(Bt=7),xr(n)},g.then(i,i);break e;case 3:Bt=7;break e;case 4:Bt=5;break e;case 7:jg(g)?(Bt=0,Ci=null,z_(i)):(Bt=0,Ci=null,to(n,i,g,7));break;case 5:var T=null;switch(St.tag){case 26:T=St.memoizedState;case 5:case 27:var w=St;if(!T||_1(T)){Bt=0,Ci=null;var F=w.sibling;if(F!==null)St=F;else{var ee=w.return;ee!==null?(St=ee,bu(ee)):St=null}break t}}Bt=0,Ci=null,to(n,i,g,5);break;case 6:Bt=0,Ci=null,to(n,i,g,6);break;case 8:Vd(),_n=6;break e;default:throw Error(r(462))}}N2();break}catch(de){N_(n,de)}while(!0);return zr=rs=null,B.H=c,B.A=d,zt=o,St!==null?0:(en=null,Et=0,Wc(),_n)}function N2(){for(;St!==null&&!Je();)I_(St)}function I_(n){var i=c_(n.alternate,n,Wr);n.memoizedProps=n.pendingProps,i===null?bu(n):St=i}function z_(n){var i=n,o=i.alternate;switch(i.tag){case 15:case 0:i=i_(o,i,i.pendingProps,i.type,void 0,Et);break;case 11:i=i_(o,i,i.pendingProps,i.type.render,i.ref,Et);break;case 5:rd(i);default:f_(o,i),i=St=Bg(i,Wr),i=c_(o,i,Wr)}n.memoizedProps=n.pendingProps,i===null?bu(n):St=i}function to(n,i,o,c){zr=rs=null,rd(i),Ys=null,wl=0;var d=i.return;try{if(M2(n,d,i,o,Et)){_n=1,mu(n,Bi(o,n.current)),St=null;return}}catch(g){if(d!==null)throw St=d,g;_n=1,mu(n,Bi(o,n.current)),St=null;return}i.flags&32768?(Lt||c===1?n=!0:Ks||(Et&536870912)!==0?n=!1:(xa=n=!0,(c===2||c===9||c===3||c===6)&&(c=Gi.current,c!==null&&c.tag===13&&(c.flags|=16384))),B_(i,n)):bu(i)}function bu(n){var i=n;do{if((i.flags&32768)!==0){B_(i,xa);return}n=i.return;var o=b2(i.alternate,i,Wr);if(o!==null){St=o;return}if(i=i.sibling,i!==null){St=i;return}St=i=n}while(i!==null);_n===0&&(_n=5)}function B_(n,i){do{var o=E2(n.alternate,n);if(o!==null){o.flags&=32767,St=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!i&&(n=n.sibling,n!==null)){St=n;return}St=n=o}while(n!==null);_n=6,St=null}function F_(n,i,o,c,d,g,T,w,F){n.cancelPendingCommit=null;do Eu();while(jn!==0);if((zt&6)!==0)throw Error(r(327));if(i!==null){if(i===n.current)throw Error(r(177));if(g=i.lanes|i.childLanes,g|=Nh,Te(n,o,g,T,w,F),n===en&&(St=en=null,Et=0),Js=i,Ta=n,$s=o,Bd=g,Fd=d,C_=c,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,z2(on,function(){return X_(),null})):(n.callbackNode=null,n.callbackPriority=0),c=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||c){c=B.T,B.T=null,d=Z.p,Z.p=2,T=zt,zt|=4;try{A2(n,i,o)}finally{zt=T,Z.p=d,B.T=c}}jn=1,H_(),V_(),G_()}}function H_(){if(jn===1){jn=0;var n=Ta,i=Js,o=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||o){o=B.T,B.T=null;var c=Z.p;Z.p=2;var d=zt;zt|=4;try{M_(i,n);var g=tp,T=Rg(n.containerInfo),w=g.focusedElem,F=g.selectionRange;if(T!==w&&w&&w.ownerDocument&&wg(w.ownerDocument.documentElement,w)){if(F!==null&&Rh(w)){var ee=F.start,de=F.end;if(de===void 0&&(de=ee),"selectionStart"in w)w.selectionStart=ee,w.selectionEnd=Math.min(de,w.value.length);else{var ve=w.ownerDocument||document,ne=ve&&ve.defaultView||window;if(ne.getSelection){var ie=ne.getSelection(),it=w.textContent.length,et=Math.min(F.start,it),Wt=F.end===void 0?et:Math.min(F.end,it);!ie.extend&&et>Wt&&(T=Wt,Wt=et,et=T);var j=Ag(w,et),X=Ag(w,Wt);if(j&&X&&(ie.rangeCount!==1||ie.anchorNode!==j.node||ie.anchorOffset!==j.offset||ie.focusNode!==X.node||ie.focusOffset!==X.offset)){var J=ve.createRange();J.setStart(j.node,j.offset),ie.removeAllRanges(),et>Wt?(ie.addRange(J),ie.extend(X.node,X.offset)):(J.setEnd(X.node,X.offset),ie.addRange(J))}}}}for(ve=[],ie=w;ie=ie.parentNode;)ie.nodeType===1&&ve.push({element:ie,left:ie.scrollLeft,top:ie.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<ve.length;w++){var ge=ve[w];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}zu=!!ep,tp=ep=null}finally{zt=d,Z.p=c,B.T=o}}n.current=i,jn=2}}function V_(){if(jn===2){jn=0;var n=Ta,i=Js,o=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||o){o=B.T,B.T=null;var c=Z.p;Z.p=2;var d=zt;zt|=4;try{__(n,i.alternate,i)}finally{zt=d,Z.p=c,B.T=o}}jn=3}}function G_(){if(jn===4||jn===3){jn=0,wt();var n=Ta,i=Js,o=$s,c=C_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?jn=5:(jn=0,Js=Ta=null,k_(n,n.pendingLanes));var d=n.pendingLanes;if(d===0&&(Ma=null),Ot(o),i=i.stateNode,ye&&typeof ye.onCommitFiberRoot=="function")try{ye.onCommitFiberRoot(he,i,void 0,(i.current.flags&128)===128)}catch{}if(c!==null){i=B.T,d=Z.p,Z.p=2,B.T=null;try{for(var g=n.onRecoverableError,T=0;T<c.length;T++){var w=c[T];g(w.value,{componentStack:w.stack})}}finally{B.T=i,Z.p=d}}($s&3)!==0&&Eu(),xr(n),d=n.pendingLanes,(o&4194090)!==0&&(d&42)!==0?n===Hd?Il++:(Il=0,Hd=n):Il=0,zl(0)}}function k_(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,gl(i)))}function Eu(n){return H_(),V_(),G_(),X_()}function X_(){if(jn!==5)return!1;var n=Ta,i=Bd;Bd=0;var o=Ot($s),c=B.T,d=Z.p;try{Z.p=32>o?32:o,B.T=null,o=Fd,Fd=null;var g=Ta,T=$s;if(jn=0,Js=Ta=null,$s=0,(zt&6)!==0)throw Error(r(331));var w=zt;if(zt|=4,w_(g.current),b_(g,g.current,T,o),zt=w,zl(0,!1),ye&&typeof ye.onPostCommitFiberRoot=="function")try{ye.onPostCommitFiberRoot(he,g)}catch{}return!0}finally{Z.p=d,B.T=c,k_(n,i)}}function W_(n,i,o){i=Bi(o,i),i=_d(n.stateNode,i,2),n=da(n,i,2),n!==null&&(Ie(n,2),xr(n))}function Qt(n,i,o){if(n.tag===3)W_(n,n,o);else for(;i!==null;){if(i.tag===3){W_(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ma===null||!Ma.has(c))){n=Bi(o,n),o=Zv(2),c=da(i,o,2),c!==null&&(Kv(o,c,i,n),Ie(c,2),xr(c));break}}i=i.return}}function Xd(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new C2;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(o)||(Pd=!0,d.add(o),n=P2.bind(null,n,i,o),i.then(n,n))}function P2(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,en===n&&(Et&o)===o&&(_n===4||_n===3&&(Et&62914560)===Et&&300>He()-zd?(zt&2)===0&&eo(n,0):Od|=o,Qs===Et&&(Qs=0)),xr(n)}function Y_(n,i){i===0&&(i=Ee()),n=Is(n,i),n!==null&&(Ie(n,i),xr(n))}function O2(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Y_(n,o)}function I2(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(r(314))}c!==null&&c.delete(i),Y_(n,o)}function z2(n,i){return k(n,i)}var Au=null,no=null,Wd=!1,wu=!1,Yd=!1,fs=0;function xr(n){n!==no&&n.next===null&&(no===null?Au=no=n:no=no.next=n),wu=!0,Wd||(Wd=!0,F2())}function zl(n,i){if(!Yd&&wu){Yd=!0;do for(var o=!1,c=Au;c!==null;){if(n!==0){var d=c.pendingLanes;if(d===0)var g=0;else{var T=c.suspendedLanes,w=c.pingedLanes;g=(1<<31-Oe(42|n)+1)-1,g&=d&~(T&~w),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(o=!0,K_(c,g))}else g=Et,g=Xe(c,c===en?g:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(g&3)===0||De(c,g)||(o=!0,K_(c,g));c=c.next}while(o);Yd=!1}}function B2(){q_()}function q_(){wu=Wd=!1;var n=0;fs!==0&&(q2()&&(n=fs),fs=0);for(var i=He(),o=null,c=Au;c!==null;){var d=c.next,g=j_(c,i);g===0?(c.next=null,o===null?Au=d:o.next=d,d===null&&(no=o)):(o=c,(n!==0||(g&3)!==0)&&(wu=!0)),c=d}zl(n)}function j_(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,g=n.pendingLanes&-62914561;0<g;){var T=31-Oe(g),w=1<<T,F=d[T];F===-1?((w&o)===0||(w&c)!==0)&&(d[T]=ot(w,i)):F<=i&&(n.expiredLanes|=w),g&=~w}if(i=en,o=Et,o=Xe(n,n===i?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c=n.callbackNode,o===0||n===i&&(Bt===2||Bt===9)||n.cancelPendingCommit!==null)return c!==null&&c!==null&&Pt(c),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||De(n,o)){if(i=o&-o,i===n.callbackPriority)return i;switch(c!==null&&Pt(c),Ot(o)){case 2:case 8:o=ct;break;case 32:o=on;break;case 268435456:o=I;break;default:o=on}return c=Z_.bind(null,n),o=k(o,c),n.callbackPriority=i,n.callbackNode=o,i}return c!==null&&c!==null&&Pt(c),n.callbackPriority=2,n.callbackNode=null,2}function Z_(n,i){if(jn!==0&&jn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(Eu()&&n.callbackNode!==o)return null;var c=Et;return c=Xe(n,n===en?c:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c===0?null:(U_(n,c,i),j_(n,He()),n.callbackNode!=null&&n.callbackNode===o?Z_.bind(null,n):null)}function K_(n,i){if(Eu())return null;U_(n,i,!0)}function F2(){Z2(function(){(zt&6)!==0?k(Ve,B2):q_()})}function qd(){return fs===0&&(fs=W()),fs}function Q_(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Bc(""+n)}function J_(n,i){var o=i.ownerDocument.createElement("input");return o.name=i.name,o.value=i.value,n.id&&o.setAttribute("form",n.id),i.parentNode.insertBefore(o,i),n=new FormData(n),o.parentNode.removeChild(o),n}function H2(n,i,o,c,d){if(i==="submit"&&o&&o.stateNode===d){var g=Q_((d[mn]||null).action),T=c.submitter;T&&(i=(i=T[mn]||null)?Q_(i.formAction):T.getAttribute("formAction"),i!==null&&(g=i,T=null));var w=new Gc("action","action",null,c,d);n.push({event:w,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(fs!==0){var F=T?J_(d,T):new FormData(d);dd(o,{pending:!0,data:F,method:d.method,action:g},null,F)}}else typeof g=="function"&&(w.preventDefault(),F=T?J_(d,T):new FormData(d),dd(o,{pending:!0,data:F,method:d.method,action:g},g,F))},currentTarget:d}]})}}for(var jd=0;jd<Lh.length;jd++){var Zd=Lh[jd],V2=Zd.toLowerCase(),G2=Zd[0].toUpperCase()+Zd.slice(1);$i(V2,"on"+G2)}$i(Ug,"onAnimationEnd"),$i(Lg,"onAnimationIteration"),$i(Ng,"onAnimationStart"),$i("dblclick","onDoubleClick"),$i("focusin","onFocus"),$i("focusout","onBlur"),$i(a2,"onTransitionRun"),$i(s2,"onTransitionStart"),$i(o2,"onTransitionCancel"),$i(Pg,"onTransitionEnd"),Y("onMouseEnter",["mouseout","mouseover"]),Y("onMouseLeave",["mouseout","mouseover"]),Y("onPointerEnter",["pointerout","pointerover"]),Y("onPointerLeave",["pointerout","pointerover"]),R("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),R("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),R("onBeforeInput",["compositionend","keypress","textInput","paste"]),R("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),k2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bl));function $_(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],d=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var T=c.length-1;0<=T;T--){var w=c[T],F=w.instance,ee=w.currentTarget;if(w=w.listener,F!==g&&d.isPropagationStopped())break e;g=w,d.currentTarget=ee;try{g(d)}catch(de){pu(de)}d.currentTarget=null,g=F}else for(T=0;T<c.length;T++){if(w=c[T],F=w.instance,ee=w.currentTarget,w=w.listener,F!==g&&d.isPropagationStopped())break e;g=w,d.currentTarget=ee;try{g(d)}catch(de){pu(de)}d.currentTarget=null,g=F}}}}function Mt(n,i){var o=i[As];o===void 0&&(o=i[As]=new Set);var c=n+"__bubble";o.has(c)||(e1(i,n,2,!1),o.add(c))}function Kd(n,i,o){var c=0;i&&(c|=4),e1(o,n,c,i)}var Ru="_reactListening"+Math.random().toString(36).slice(2);function Qd(n){if(!n[Ru]){n[Ru]=!0,Ic.forEach(function(o){o!=="selectionchange"&&(k2.has(o)||Kd(o,!1,n),Kd(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ru]||(i[Ru]=!0,Kd("selectionchange",!1,i))}}function e1(n,i,o,c){switch(b1(i)){case 2:var d=gT;break;case 8:d=vT;break;default:d=fp}o=d.bind(null,i,o,n),d=void 0,!yh||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function Jd(n,i,o,c,d){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var w=c.stateNode.containerInfo;if(w===d)break;if(T===4)for(T=c.return;T!==null;){var F=T.tag;if((F===3||F===4)&&T.stateNode.containerInfo===d)return;T=T.return}for(;w!==null;){if(T=Lr(w),T===null)return;if(F=T.tag,F===5||F===6||F===26||F===27){c=g=T;continue e}w=w.parentNode}}c=c.return}og(function(){var ee=g,de=vh(o),ve=[];e:{var ne=Og.get(n);if(ne!==void 0){var ie=Gc,it=n;switch(n){case"keypress":if(Hc(o)===0)break e;case"keydown":case"keyup":ie=zM;break;case"focusin":it="focus",ie=Th;break;case"focusout":it="blur",ie=Th;break;case"beforeblur":case"afterblur":ie=Th;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=ug;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=EM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=HM;break;case Ug:case Lg:case Ng:ie=RM;break;case Pg:ie=GM;break;case"scroll":case"scrollend":ie=TM;break;case"wheel":ie=XM;break;case"copy":case"cut":case"paste":ie=DM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=hg;break;case"toggle":case"beforetoggle":ie=YM}var et=(i&4)!==0,Wt=!et&&(n==="scroll"||n==="scrollend"),j=et?ne!==null?ne+"Capture":null:ne;et=[];for(var X=ee,J;X!==null;){var ge=X;if(J=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||J===null||j===null||(ge=il(X,j),ge!=null&&et.push(Fl(X,ge,J))),Wt)break;X=X.return}0<et.length&&(ne=new ie(ne,it,null,o,de),ve.push({event:ne,listeners:et}))}}if((i&7)===0){e:{if(ne=n==="mouseover"||n==="pointerover",ie=n==="mouseout"||n==="pointerout",ne&&o!==gh&&(it=o.relatedTarget||o.fromElement)&&(Lr(it)||it[pr]))break e;if((ie||ne)&&(ne=de.window===de?de:(ne=de.ownerDocument)?ne.defaultView||ne.parentWindow:window,ie?(it=o.relatedTarget||o.toElement,ie=ee,it=it?Lr(it):null,it!==null&&(Wt=l(it),et=it.tag,it!==Wt||et!==5&&et!==27&&et!==6)&&(it=null)):(ie=null,it=ee),ie!==it)){if(et=ug,ge="onMouseLeave",j="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(et=hg,ge="onPointerLeave",j="onPointerEnter",X="pointer"),Wt=ie==null?ne:Za(ie),J=it==null?ne:Za(it),ne=new et(ge,X+"leave",ie,o,de),ne.target=Wt,ne.relatedTarget=J,ge=null,Lr(de)===ee&&(et=new et(j,X+"enter",it,o,de),et.target=J,et.relatedTarget=Wt,ge=et),Wt=ge,ie&&it)t:{for(et=ie,j=it,X=0,J=et;J;J=io(J))X++;for(J=0,ge=j;ge;ge=io(ge))J++;for(;0<X-J;)et=io(et),X--;for(;0<J-X;)j=io(j),J--;for(;X--;){if(et===j||j!==null&&et===j.alternate)break t;et=io(et),j=io(j)}et=null}else et=null;ie!==null&&t1(ve,ne,ie,et,!1),it!==null&&Wt!==null&&t1(ve,Wt,it,et,!0)}}e:{if(ne=ee?Za(ee):window,ie=ne.nodeName&&ne.nodeName.toLowerCase(),ie==="select"||ie==="input"&&ne.type==="file")var Ge=xg;else if(_g(ne))if(Sg)Ge=n2;else{Ge=e2;var yt=$M}else ie=ne.nodeName,!ie||ie.toLowerCase()!=="input"||ne.type!=="checkbox"&&ne.type!=="radio"?ee&&mh(ee.elementType)&&(Ge=xg):Ge=t2;if(Ge&&(Ge=Ge(n,ee))){yg(ve,Ge,o,de);break e}yt&&yt(n,ne,ee),n==="focusout"&&ee&&ne.type==="number"&&ee.memoizedProps.value!=null&&$n(ne,"number",ne.value)}switch(yt=ee?Za(ee):window,n){case"focusin":(_g(yt)||yt.contentEditable==="true")&&(Ns=yt,Ch=ee,fl=null);break;case"focusout":fl=Ch=Ns=null;break;case"mousedown":Dh=!0;break;case"contextmenu":case"mouseup":case"dragend":Dh=!1,Cg(ve,o,de);break;case"selectionchange":if(r2)break;case"keydown":case"keyup":Cg(ve,o,de)}var Ze;if(Eh)e:{switch(n){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else Ls?gg(n,o)&&(nt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(nt="onCompositionStart");nt&&(dg&&o.locale!=="ko"&&(Ls||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&Ls&&(Ze=lg()):(ca=de,xh="value"in ca?ca.value:ca.textContent,Ls=!0)),yt=Cu(ee,nt),0<yt.length&&(nt=new fg(nt,n,null,o,de),ve.push({event:nt,listeners:yt}),Ze?nt.data=Ze:(Ze=vg(o),Ze!==null&&(nt.data=Ze)))),(Ze=jM?ZM(n,o):KM(n,o))&&(nt=Cu(ee,"onBeforeInput"),0<nt.length&&(yt=new fg("onBeforeInput","beforeinput",null,o,de),ve.push({event:yt,listeners:nt}),yt.data=Ze)),H2(ve,n,ee,o,de)}$_(ve,i)})}function Fl(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Cu(n,i){for(var o=i+"Capture",c=[];n!==null;){var d=n,g=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||g===null||(d=il(n,o),d!=null&&c.unshift(Fl(n,d,g)),d=il(n,i),d!=null&&c.push(Fl(n,d,g))),n.tag===3)return c;n=n.return}return[]}function io(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function t1(n,i,o,c,d){for(var g=i._reactName,T=[];o!==null&&o!==c;){var w=o,F=w.alternate,ee=w.stateNode;if(w=w.tag,F!==null&&F===c)break;w!==5&&w!==26&&w!==27||ee===null||(F=ee,d?(ee=il(o,g),ee!=null&&T.unshift(Fl(o,ee,F))):d||(ee=il(o,g),ee!=null&&T.push(Fl(o,ee,F)))),o=o.return}T.length!==0&&n.push({event:i,listeners:T})}var X2=/\r\n?/g,W2=/\u0000|\uFFFD/g;function n1(n){return(typeof n=="string"?n:""+n).replace(X2,`
`).replace(W2,"")}function i1(n,i){return i=n1(i),n1(n)===i}function Du(){}function Xt(n,i,o,c,d,g){switch(o){case"children":typeof c=="string"?i==="body"||i==="textarea"&&c===""||pi(n,c):(typeof c=="number"||typeof c=="bigint")&&i!=="body"&&pi(n,""+c);break;case"className":Fe(n,"class",c);break;case"tabIndex":Fe(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Fe(n,o,c);break;case"style":ag(n,c,g);break;case"data":if(i!=="object"){Fe(n,"data",c);break}case"src":case"href":if(c===""&&(i!=="a"||o!=="href")){n.removeAttribute(o);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(o);break}c=Bc(""+c),n.setAttribute(o,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(o==="formAction"?(i!=="input"&&Xt(n,i,"name",d.name,d,null),Xt(n,i,"formEncType",d.formEncType,d,null),Xt(n,i,"formMethod",d.formMethod,d,null),Xt(n,i,"formTarget",d.formTarget,d,null)):(Xt(n,i,"encType",d.encType,d,null),Xt(n,i,"method",d.method,d,null),Xt(n,i,"target",d.target,d,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(o);break}c=Bc(""+c),n.setAttribute(o,c);break;case"onClick":c!=null&&(n.onclick=Du);break;case"onScroll":c!=null&&Mt("scroll",n);break;case"onScrollEnd":c!=null&&Mt("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(o=c.__html,o!=null){if(d.children!=null)throw Error(r(60));n.innerHTML=o}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}o=Bc(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(o,""+c):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":c===!0?n.setAttribute(o,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(o,c):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(o,c):n.removeAttribute(o);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(o):n.setAttribute(o,c);break;case"popover":Mt("beforetoggle",n),Mt("toggle",n),Ue(n,"popover",c);break;case"xlinkActuate":Ne(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Ne(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Ne(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Ne(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Ne(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Ne(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Ne(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Ne(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Ne(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Ue(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=SM.get(o)||o,Ue(n,o,c))}}function $d(n,i,o,c,d,g){switch(o){case"style":ag(n,c,g);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(o=c.__html,o!=null){if(d.children!=null)throw Error(r(60));n.innerHTML=o}}break;case"children":typeof c=="string"?pi(n,c):(typeof c=="number"||typeof c=="bigint")&&pi(n,""+c);break;case"onScroll":c!=null&&Mt("scroll",n);break;case"onScrollEnd":c!=null&&Mt("scrollend",n);break;case"onClick":c!=null&&(n.onclick=Du);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!zc.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(d=o.endsWith("Capture"),i=o.slice(2,d?o.length-7:void 0),g=n[mn]||null,g=g!=null?g[o]:null,typeof g=="function"&&n.removeEventListener(i,g,d),typeof c=="function")){typeof g!="function"&&g!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(i,c,d);break e}o in n?n[o]=c:c===!0?n.setAttribute(o,""):Ue(n,o,c)}}}function Zn(n,i,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Mt("error",n),Mt("load",n);var c=!1,d=!1,g;for(g in o)if(o.hasOwnProperty(g)){var T=o[g];if(T!=null)switch(g){case"src":c=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Xt(n,i,g,T,o,null)}}d&&Xt(n,i,"srcSet",o.srcSet,o,null),c&&Xt(n,i,"src",o.src,o,null);return;case"input":Mt("invalid",n);var w=g=T=d=null,F=null,ee=null;for(c in o)if(o.hasOwnProperty(c)){var de=o[c];if(de!=null)switch(c){case"name":d=de;break;case"type":T=de;break;case"checked":F=de;break;case"defaultChecked":ee=de;break;case"value":g=de;break;case"defaultValue":w=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,i));break;default:Xt(n,i,c,de,o,null)}}oi(n,g,w,F,ee,T,d,!1),xt(n);return;case"select":Mt("invalid",n),c=T=g=null;for(d in o)if(o.hasOwnProperty(d)&&(w=o[d],w!=null))switch(d){case"value":g=w;break;case"defaultValue":T=w;break;case"multiple":c=w;default:Xt(n,i,d,w,o,null)}i=g,o=T,n.multiple=!!c,i!=null?gn(n,!!c,i,!1):o!=null&&gn(n,!!c,o,!0);return;case"textarea":Mt("invalid",n),g=d=c=null;for(T in o)if(o.hasOwnProperty(T)&&(w=o[T],w!=null))switch(T){case"value":c=w;break;case"defaultValue":d=w;break;case"children":g=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(91));break;default:Xt(n,i,T,w,o,null)}Cs(n,c,d,g),xt(n);return;case"option":for(F in o)if(o.hasOwnProperty(F)&&(c=o[F],c!=null))switch(F){case"selected":n.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:Xt(n,i,F,c,o,null)}return;case"dialog":Mt("beforetoggle",n),Mt("toggle",n),Mt("cancel",n),Mt("close",n);break;case"iframe":case"object":Mt("load",n);break;case"video":case"audio":for(c=0;c<Bl.length;c++)Mt(Bl[c],n);break;case"image":Mt("error",n),Mt("load",n);break;case"details":Mt("toggle",n);break;case"embed":case"source":case"link":Mt("error",n),Mt("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in o)if(o.hasOwnProperty(ee)&&(c=o[ee],c!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Xt(n,i,ee,c,o,null)}return;default:if(mh(i)){for(de in o)o.hasOwnProperty(de)&&(c=o[de],c!==void 0&&$d(n,i,de,c,o,void 0));return}}for(w in o)o.hasOwnProperty(w)&&(c=o[w],c!=null&&Xt(n,i,w,c,o,null))}function Y2(n,i,o,c){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,g=null,T=null,w=null,F=null,ee=null,de=null;for(ie in o){var ve=o[ie];if(o.hasOwnProperty(ie)&&ve!=null)switch(ie){case"checked":break;case"value":break;case"defaultValue":F=ve;default:c.hasOwnProperty(ie)||Xt(n,i,ie,null,c,ve)}}for(var ne in c){var ie=c[ne];if(ve=o[ne],c.hasOwnProperty(ne)&&(ie!=null||ve!=null))switch(ne){case"type":g=ie;break;case"name":d=ie;break;case"checked":ee=ie;break;case"defaultChecked":de=ie;break;case"value":T=ie;break;case"defaultValue":w=ie;break;case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(r(137,i));break;default:ie!==ve&&Xt(n,i,ne,ie,c,ve)}}Kt(n,T,w,F,ee,de,g,d);return;case"select":ie=T=w=ne=null;for(g in o)if(F=o[g],o.hasOwnProperty(g)&&F!=null)switch(g){case"value":break;case"multiple":ie=F;default:c.hasOwnProperty(g)||Xt(n,i,g,null,c,F)}for(d in c)if(g=c[d],F=o[d],c.hasOwnProperty(d)&&(g!=null||F!=null))switch(d){case"value":ne=g;break;case"defaultValue":w=g;break;case"multiple":T=g;default:g!==F&&Xt(n,i,d,g,c,F)}i=w,o=T,c=ie,ne!=null?gn(n,!!o,ne,!1):!!c!=!!o&&(i!=null?gn(n,!!o,i,!0):gn(n,!!o,o?[]:"",!1));return;case"textarea":ie=ne=null;for(w in o)if(d=o[w],o.hasOwnProperty(w)&&d!=null&&!c.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Xt(n,i,w,null,c,d)}for(T in c)if(d=c[T],g=o[T],c.hasOwnProperty(T)&&(d!=null||g!=null))switch(T){case"value":ne=d;break;case"defaultValue":ie=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(r(91));break;default:d!==g&&Xt(n,i,T,d,c,g)}Yn(n,ne,ie);return;case"option":for(var it in o)if(ne=o[it],o.hasOwnProperty(it)&&ne!=null&&!c.hasOwnProperty(it))switch(it){case"selected":n.selected=!1;break;default:Xt(n,i,it,null,c,ne)}for(F in c)if(ne=c[F],ie=o[F],c.hasOwnProperty(F)&&ne!==ie&&(ne!=null||ie!=null))switch(F){case"selected":n.selected=ne&&typeof ne!="function"&&typeof ne!="symbol";break;default:Xt(n,i,F,ne,c,ie)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in o)ne=o[et],o.hasOwnProperty(et)&&ne!=null&&!c.hasOwnProperty(et)&&Xt(n,i,et,null,c,ne);for(ee in c)if(ne=c[ee],ie=o[ee],c.hasOwnProperty(ee)&&ne!==ie&&(ne!=null||ie!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(r(137,i));break;default:Xt(n,i,ee,ne,c,ie)}return;default:if(mh(i)){for(var Wt in o)ne=o[Wt],o.hasOwnProperty(Wt)&&ne!==void 0&&!c.hasOwnProperty(Wt)&&$d(n,i,Wt,void 0,c,ne);for(de in c)ne=c[de],ie=o[de],!c.hasOwnProperty(de)||ne===ie||ne===void 0&&ie===void 0||$d(n,i,de,ne,c,ie);return}}for(var j in o)ne=o[j],o.hasOwnProperty(j)&&ne!=null&&!c.hasOwnProperty(j)&&Xt(n,i,j,null,c,ne);for(ve in c)ne=c[ve],ie=o[ve],!c.hasOwnProperty(ve)||ne===ie||ne==null&&ie==null||Xt(n,i,ve,ne,c,ie)}var ep=null,tp=null;function Uu(n){return n.nodeType===9?n:n.ownerDocument}function r1(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function a1(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function np(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ip=null;function q2(){var n=window.event;return n&&n.type==="popstate"?n===ip?!1:(ip=n,!0):(ip=null,!1)}var s1=typeof setTimeout=="function"?setTimeout:void 0,j2=typeof clearTimeout=="function"?clearTimeout:void 0,o1=typeof Promise=="function"?Promise:void 0,Z2=typeof queueMicrotask=="function"?queueMicrotask:typeof o1<"u"?function(n){return o1.resolve(null).then(n).catch(K2)}:s1;function K2(n){setTimeout(function(){throw n})}function Ea(n){return n==="head"}function l1(n,i){var o=i,c=0,d=0;do{var g=o.nextSibling;if(n.removeChild(o),g&&g.nodeType===8)if(o=g.data,o==="/$"){if(0<c&&8>c){o=c;var T=n.ownerDocument;if(o&1&&Hl(T.documentElement),o&2&&Hl(T.body),o&4)for(o=T.head,Hl(o),T=o.firstChild;T;){var w=T.nextSibling,F=T.nodeName;T[mr]||F==="SCRIPT"||F==="STYLE"||F==="LINK"&&T.rel.toLowerCase()==="stylesheet"||o.removeChild(T),T=w}}if(d===0){n.removeChild(g),jl(i);return}d--}else o==="$"||o==="$?"||o==="$!"?d++:c=o.charCodeAt(0)-48;else c=0;o=g}while(o);jl(i)}function rp(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var o=i;switch(i=i.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":rp(o),Rs(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function Q2(n,i,o,c){for(;n.nodeType===1;){var d=o;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[mr])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(g=n.getAttribute("rel"),g==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(g!==d.rel||n.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||n.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||n.getAttribute("title")!==(d.title==null?null:d.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(g=n.getAttribute("src"),(g!==(d.src==null?null:d.src)||n.getAttribute("type")!==(d.type==null?null:d.type)||n.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&g&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var g=d.name==null?null:""+d.name;if(d.type==="hidden"&&n.getAttribute("name")===g)return n}else return n;if(n=tr(n.nextSibling),n===null)break}return null}function J2(n,i,o){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=tr(n.nextSibling),n===null))return null;return n}function ap(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function $2(n,i){var o=n.ownerDocument;if(n.data!=="$?"||o.readyState==="complete")i();else{var c=function(){i(),o.removeEventListener("DOMContentLoaded",c)};o.addEventListener("DOMContentLoaded",c),n._reactRetry=c}}function tr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return n}var sp=null;function c1(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}function u1(n,i,o){switch(i=Uu(o),n){case"html":if(n=i.documentElement,!n)throw Error(r(452));return n;case"head":if(n=i.head,!n)throw Error(r(453));return n;case"body":if(n=i.body,!n)throw Error(r(454));return n;default:throw Error(r(451))}}function Hl(n){for(var i=n.attributes;i.length;)n.removeAttributeNode(i[0]);Rs(n)}var Xi=new Map,f1=new Set;function Lu(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Yr=Z.d;Z.d={f:eT,r:tT,D:nT,C:iT,L:rT,m:aT,X:oT,S:sT,M:lT};function eT(){var n=Yr.f(),i=Tu();return n||i}function tT(n){var i=oa(n);i!==null&&i.tag===5&&i.type==="form"?Uv(i):Yr.r(n)}var ro=typeof document>"u"?null:document;function h1(n,i,o){var c=ro;if(c&&typeof i=="string"&&i){var d=Bn(i);d='link[rel="'+n+'"][href="'+d+'"]',typeof o=="string"&&(d+='[crossorigin="'+o+'"]'),f1.has(d)||(f1.add(d),n={rel:n,crossOrigin:o,href:i},c.querySelector(d)===null&&(i=c.createElement("link"),Zn(i,"link",n),Tn(i),c.head.appendChild(i)))}}function nT(n){Yr.D(n),h1("dns-prefetch",n,null)}function iT(n,i){Yr.C(n,i),h1("preconnect",n,i)}function rT(n,i,o){Yr.L(n,i,o);var c=ro;if(c&&n&&i){var d='link[rel="preload"][as="'+Bn(i)+'"]';i==="image"&&o&&o.imageSrcSet?(d+='[imagesrcset="'+Bn(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(d+='[imagesizes="'+Bn(o.imageSizes)+'"]')):d+='[href="'+Bn(n)+'"]';var g=d;switch(i){case"style":g=ao(n);break;case"script":g=so(n)}Xi.has(g)||(n=m({rel:"preload",href:i==="image"&&o&&o.imageSrcSet?void 0:n,as:i},o),Xi.set(g,n),c.querySelector(d)!==null||i==="style"&&c.querySelector(Vl(g))||i==="script"&&c.querySelector(Gl(g))||(i=c.createElement("link"),Zn(i,"link",n),Tn(i),c.head.appendChild(i)))}}function aT(n,i){Yr.m(n,i);var o=ro;if(o&&n){var c=i&&typeof i.as=="string"?i.as:"script",d='link[rel="modulepreload"][as="'+Bn(c)+'"][href="'+Bn(n)+'"]',g=d;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=so(n)}if(!Xi.has(g)&&(n=m({rel:"modulepreload",href:n},i),Xi.set(g,n),o.querySelector(d)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Gl(g)))return}c=o.createElement("link"),Zn(c,"link",n),Tn(c),o.head.appendChild(c)}}}function sT(n,i,o){Yr.S(n,i,o);var c=ro;if(c&&n){var d=la(c).hoistableStyles,g=ao(n);i=i||"default";var T=d.get(g);if(!T){var w={loading:0,preload:null};if(T=c.querySelector(Vl(g)))w.loading=5;else{n=m({rel:"stylesheet",href:n,"data-precedence":i},o),(o=Xi.get(g))&&op(n,o);var F=T=c.createElement("link");Tn(F),Zn(F,"link",n),F._p=new Promise(function(ee,de){F.onload=ee,F.onerror=de}),F.addEventListener("load",function(){w.loading|=1}),F.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Nu(T,i,c)}T={type:"stylesheet",instance:T,count:1,state:w},d.set(g,T)}}}function oT(n,i){Yr.X(n,i);var o=ro;if(o&&n){var c=la(o).hoistableScripts,d=so(n),g=c.get(d);g||(g=o.querySelector(Gl(d)),g||(n=m({src:n,async:!0},i),(i=Xi.get(d))&&lp(n,i),g=o.createElement("script"),Tn(g),Zn(g,"link",n),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(d,g))}}function lT(n,i){Yr.M(n,i);var o=ro;if(o&&n){var c=la(o).hoistableScripts,d=so(n),g=c.get(d);g||(g=o.querySelector(Gl(d)),g||(n=m({src:n,async:!0,type:"module"},i),(i=Xi.get(d))&&lp(n,i),g=o.createElement("script"),Tn(g),Zn(g,"link",n),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(d,g))}}function d1(n,i,o,c){var d=(d=le.current)?Lu(d):null;if(!d)throw Error(r(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(i=ao(o.href),o=la(d).hoistableStyles,c=o.get(i),c||(c={type:"style",instance:null,count:0,state:null},o.set(i,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=ao(o.href);var g=la(d).hoistableStyles,T=g.get(n);if(T||(d=d.ownerDocument||d,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(n,T),(g=d.querySelector(Vl(n)))&&!g._p&&(T.instance=g,T.state.loading=5),Xi.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Xi.set(n,o),g||cT(d,n,o,T.state))),i&&c===null)throw Error(r(528,""));return T}if(i&&c!==null)throw Error(r(529,""));return null;case"script":return i=o.async,o=o.src,typeof o=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=so(o),o=la(d).hoistableScripts,c=o.get(i),c||(c={type:"script",instance:null,count:0,state:null},o.set(i,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,n))}}function ao(n){return'href="'+Bn(n)+'"'}function Vl(n){return'link[rel="stylesheet"]['+n+"]"}function p1(n){return m({},n,{"data-precedence":n.precedence,precedence:null})}function cT(n,i,o,c){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?c.loading=1:(i=n.createElement("link"),c.preload=i,i.addEventListener("load",function(){return c.loading|=1}),i.addEventListener("error",function(){return c.loading|=2}),Zn(i,"link",o),Tn(i),n.head.appendChild(i))}function so(n){return'[src="'+Bn(n)+'"]'}function Gl(n){return"script[async]"+n}function m1(n,i,o){if(i.count++,i.instance===null)switch(i.type){case"style":var c=n.querySelector('style[data-href~="'+Bn(o.href)+'"]');if(c)return i.instance=c,Tn(c),c;var d=m({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),Tn(c),Zn(c,"style",d),Nu(c,o.precedence,n),i.instance=c;case"stylesheet":d=ao(o.href);var g=n.querySelector(Vl(d));if(g)return i.state.loading|=4,i.instance=g,Tn(g),g;c=p1(o),(d=Xi.get(d))&&op(c,d),g=(n.ownerDocument||n).createElement("link"),Tn(g);var T=g;return T._p=new Promise(function(w,F){T.onload=w,T.onerror=F}),Zn(g,"link",c),i.state.loading|=4,Nu(g,o.precedence,n),i.instance=g;case"script":return g=so(o.src),(d=n.querySelector(Gl(g)))?(i.instance=d,Tn(d),d):(c=o,(d=Xi.get(g))&&(c=m({},o),lp(c,d)),n=n.ownerDocument||n,d=n.createElement("script"),Tn(d),Zn(d,"link",c),n.head.appendChild(d),i.instance=d);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(c=i.instance,i.state.loading|=4,Nu(c,o.precedence,n));return i.instance}function Nu(n,i,o){for(var c=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=c.length?c[c.length-1]:null,g=d,T=0;T<c.length;T++){var w=c[T];if(w.dataset.precedence===i)g=w;else if(g!==d)break}g?g.parentNode.insertBefore(n,g.nextSibling):(i=o.nodeType===9?o.head:o,i.insertBefore(n,i.firstChild))}function op(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function lp(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var Pu=null;function g1(n,i,o){if(Pu===null){var c=new Map,d=Pu=new Map;d.set(o,c)}else d=Pu,c=d.get(o),c||(c=new Map,d.set(o,c));if(c.has(n))return c;for(c.set(n,null),o=o.getElementsByTagName(n),d=0;d<o.length;d++){var g=o[d];if(!(g[mr]||g[Cn]||n==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var T=g.getAttribute(i)||"";T=n+T;var w=c.get(T);w?w.push(g):c.set(T,[g])}}return c}function v1(n,i,o){n=n.ownerDocument||n,n.head.insertBefore(o,i==="title"?n.querySelector("head > title"):null)}function uT(n,i,o){if(o===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return n=i.disabled,typeof i.precedence=="string"&&n==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function _1(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var kl=null;function fT(){}function hT(n,i,o){if(kl===null)throw Error(r(475));var c=kl;if(i.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var d=ao(o.href),g=n.querySelector(Vl(d));if(g){n=g._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(c.count++,c=Ou.bind(c),n.then(c,c)),i.state.loading|=4,i.instance=g,Tn(g);return}g=n.ownerDocument||n,o=p1(o),(d=Xi.get(d))&&op(o,d),g=g.createElement("link"),Tn(g);var T=g;T._p=new Promise(function(w,F){T.onload=w,T.onerror=F}),Zn(g,"link",o),i.instance=g}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(c.count++,i=Ou.bind(c),n.addEventListener("load",i),n.addEventListener("error",i))}}function dT(){if(kl===null)throw Error(r(475));var n=kl;return n.stylesheets&&n.count===0&&cp(n,n.stylesheets),0<n.count?function(i){var o=setTimeout(function(){if(n.stylesheets&&cp(n,n.stylesheets),n.unsuspend){var c=n.unsuspend;n.unsuspend=null,c()}},6e4);return n.unsuspend=i,function(){n.unsuspend=null,clearTimeout(o)}}:null}function Ou(){if(this.count--,this.count===0){if(this.stylesheets)cp(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Iu=null;function cp(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Iu=new Map,i.forEach(pT,n),Iu=null,Ou.call(n))}function pT(n,i){if(!(i.state.loading&4)){var o=Iu.get(n);if(o)var c=o.get(null);else{o=new Map,Iu.set(n,o);for(var d=n.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<d.length;g++){var T=d[g];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(o.set(T.dataset.precedence,T),c=T)}c&&o.set(null,c)}d=i.instance,T=d.getAttribute("data-precedence"),g=o.get(T)||c,g===c&&o.set(null,d),o.set(T,d),this.count++,c=Ou.bind(this),d.addEventListener("load",c),d.addEventListener("error",c),g?g.parentNode.insertBefore(d,g.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(d,n.firstChild)),i.state.loading|=4}}var Xl={$$typeof:C,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function mT(n,i,o,c,d,g,T,w){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ce(0),this.hiddenUpdates=Ce(null),this.identifierPrefix=c,this.onUncaughtError=d,this.onCaughtError=g,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function y1(n,i,o,c,d,g,T,w,F,ee,de,ve){return n=new mT(n,i,o,T,w,F,ee,ve),i=1,g===!0&&(i|=24),g=Ai(3,null,null,i),n.current=g,g.stateNode=n,i=Xh(),i.refCount++,n.pooledCache=i,i.refCount++,g.memoizedState={element:c,isDehydrated:o,cache:i},jh(g),n}function x1(n){return n?(n=zs,n):zs}function S1(n,i,o,c,d,g){d=x1(d),c.context===null?c.context=d:c.pendingContext=d,c=ha(i),c.payload={element:o},g=g===void 0?null:g,g!==null&&(c.callback=g),o=da(n,c,i),o!==null&&(Ui(o,n,i),xl(o,n,i))}function M1(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function up(n,i){M1(n,i),(n=n.alternate)&&M1(n,i)}function T1(n){if(n.tag===13){var i=Is(n,67108864);i!==null&&Ui(i,n,67108864),up(n,67108864)}}var zu=!0;function gT(n,i,o,c){var d=B.T;B.T=null;var g=Z.p;try{Z.p=2,fp(n,i,o,c)}finally{Z.p=g,B.T=d}}function vT(n,i,o,c){var d=B.T;B.T=null;var g=Z.p;try{Z.p=8,fp(n,i,o,c)}finally{Z.p=g,B.T=d}}function fp(n,i,o,c){if(zu){var d=hp(c);if(d===null)Jd(n,i,c,Bu,o),E1(n,c);else if(yT(d,n,i,o,c))c.stopPropagation();else if(E1(n,c),i&4&&-1<_T.indexOf(n)){for(;d!==null;){var g=oa(d);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var T=Ke(g.pendingLanes);if(T!==0){var w=g;for(w.pendingLanes|=2,w.entangledLanes|=2;T;){var F=1<<31-Oe(T);w.entanglements[1]|=F,T&=~F}xr(g),(zt&6)===0&&(Su=He()+500,zl(0))}}break;case 13:w=Is(g,2),w!==null&&Ui(w,g,2),Tu(),up(g,2)}if(g=hp(c),g===null&&Jd(n,i,c,Bu,o),g===d)break;d=g}d!==null&&c.stopPropagation()}else Jd(n,i,c,null,o)}}function hp(n){return n=vh(n),dp(n)}var Bu=null;function dp(n){if(Bu=null,n=Lr(n),n!==null){var i=l(n);if(i===null)n=null;else{var o=i.tag;if(o===13){if(n=u(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return Bu=n,null}function b1(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($t()){case Ve:return 2;case ct:return 8;case on:case ln:return 32;case I:return 268435456;default:return 32}default:return 32}}var pp=!1,Aa=null,wa=null,Ra=null,Wl=new Map,Yl=new Map,Ca=[],_T="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function E1(n,i){switch(n){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":Ra=null;break;case"pointerover":case"pointerout":Wl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yl.delete(i.pointerId)}}function ql(n,i,o,c,d,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},i!==null&&(i=oa(i),i!==null&&T1(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function yT(n,i,o,c,d){switch(i){case"focusin":return Aa=ql(Aa,n,i,o,c,d),!0;case"dragenter":return wa=ql(wa,n,i,o,c,d),!0;case"mouseover":return Ra=ql(Ra,n,i,o,c,d),!0;case"pointerover":var g=d.pointerId;return Wl.set(g,ql(Wl.get(g)||null,n,i,o,c,d)),!0;case"gotpointercapture":return g=d.pointerId,Yl.set(g,ql(Yl.get(g)||null,n,i,o,c,d)),!0}return!1}function A1(n){var i=Lr(n.target);if(i!==null){var o=l(i);if(o!==null){if(i=o.tag,i===13){if(i=u(o),i!==null){n.blockedOn=i,Qi(n.priority,function(){if(o.tag===13){var c=Di();c=rt(c);var d=Is(o,c);d!==null&&Ui(d,o,c),up(o,c)}});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Fu(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=hp(n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);gh=c,o.target.dispatchEvent(c),gh=null}else return i=oa(o),i!==null&&T1(i),n.blockedOn=o,!1;i.shift()}return!0}function w1(n,i,o){Fu(n)&&o.delete(i)}function xT(){pp=!1,Aa!==null&&Fu(Aa)&&(Aa=null),wa!==null&&Fu(wa)&&(wa=null),Ra!==null&&Fu(Ra)&&(Ra=null),Wl.forEach(w1),Yl.forEach(w1)}function Hu(n,i){n.blockedOn===i&&(n.blockedOn=null,pp||(pp=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,xT)))}var Vu=null;function R1(n){Vu!==n&&(Vu=n,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Vu===n&&(Vu=null);for(var i=0;i<n.length;i+=3){var o=n[i],c=n[i+1],d=n[i+2];if(typeof c!="function"){if(dp(c||o)===null)continue;break}var g=oa(o);g!==null&&(n.splice(i,3),i-=3,dd(g,{pending:!0,data:d,method:o.method,action:c},c,d))}}))}function jl(n){function i(F){return Hu(F,n)}Aa!==null&&Hu(Aa,n),wa!==null&&Hu(wa,n),Ra!==null&&Hu(Ra,n),Wl.forEach(i),Yl.forEach(i);for(var o=0;o<Ca.length;o++){var c=Ca[o];c.blockedOn===n&&(c.blockedOn=null)}for(;0<Ca.length&&(o=Ca[0],o.blockedOn===null);)A1(o),o.blockedOn===null&&Ca.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(c=0;c<o.length;c+=3){var d=o[c],g=o[c+1],T=d[mn]||null;if(typeof g=="function")T||R1(o);else if(T){var w=null;if(g&&g.hasAttribute("formAction")){if(d=g,T=g[mn]||null)w=T.formAction;else if(dp(d)!==null)continue}else w=T.action;typeof w=="function"?o[c+1]=w:(o.splice(c,3),c-=3),R1(o)}}}function mp(n){this._internalRoot=n}Gu.prototype.render=mp.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(r(409));var o=i.current,c=Di();S1(o,c,n,i,null,null)},Gu.prototype.unmount=mp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;S1(n.current,2,null,n,null,null),Tu(),i[pr]=null}};function Gu(n){this._internalRoot=n}Gu.prototype.unstable_scheduleHydration=function(n){if(n){var i=Rt();n={blockedOn:null,target:n,priority:i};for(var o=0;o<Ca.length&&i!==0&&i<Ca[o].priority;o++);Ca.splice(o,0,n),o===0&&A1(n)}};var C1=e.version;if(C1!=="19.1.1")throw Error(r(527,C1,"19.1.1"));Z.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(r(188)):(n=Object.keys(n).join(","),Error(r(268,n)));return n=p(i),n=n!==null?h(n):null,n=n===null?null:n.stateNode,n};var ST={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ku=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ku.isDisabled&&ku.supportsFiber)try{he=ku.inject(ST),ye=ku}catch{}}return Kl.createRoot=function(n,i){if(!s(n))throw Error(r(299));var o=!1,c="",d=Wv,g=Yv,T=qv,w=null;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onUncaughtError!==void 0&&(d=i.onUncaughtError),i.onCaughtError!==void 0&&(g=i.onCaughtError),i.onRecoverableError!==void 0&&(T=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(w=i.unstable_transitionCallbacks)),i=y1(n,1,!1,null,null,o,c,d,g,T,w,null),n[pr]=i.current,Qd(n),new mp(i)},Kl.hydrateRoot=function(n,i,o){if(!s(n))throw Error(r(299));var c=!1,d="",g=Wv,T=Yv,w=qv,F=null,ee=null;return o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onUncaughtError!==void 0&&(g=o.onUncaughtError),o.onCaughtError!==void 0&&(T=o.onCaughtError),o.onRecoverableError!==void 0&&(w=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(F=o.unstable_transitionCallbacks),o.formState!==void 0&&(ee=o.formState)),i=y1(n,1,!0,i,o??null,c,d,g,T,w,F,ee),i.context=x1(null),o=i.current,c=Di(),c=rt(c),d=ha(c),d.callback=null,da(o,d,c),o=c,i.current.lanes=o,Ie(i,o),xr(i),n[pr]=i.current,Qd(n),new Gu(i)},Kl.version="19.1.1",Kl}var F1;function UT(){if(F1)return _p.exports;F1=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),_p.exports=DT(),_p.exports}var LT=UT();const NT=Vx(LT);var ri=function(){return ri=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++){t=arguments[r];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},ri.apply(this,arguments)};function yc(a,e,t){if(t||arguments.length===2)for(var r=0,s=e.length,l;r<s;r++)(l||!(r in e))&&(l||(l=Array.prototype.slice.call(e,0,r)),l[r]=e[r]);return a.concat(l||Array.prototype.slice.call(e))}var nn="-ms-",pc="-moz-",It="-webkit-",Gx="comm",ah="rule",R0="decl",PT="@import",kx="@keyframes",OT="@layer",Xx=Math.abs,C0=String.fromCharCode,gm=Object.assign;function IT(a,e){return kn(a,0)^45?(((e<<2^kn(a,0))<<2^kn(a,1))<<2^kn(a,2))<<2^kn(a,3):0}function Wx(a){return a.trim()}function ta(a,e){return(a=e.exec(a))?a[0]:a}function gt(a,e,t){return a.replace(e,t)}function Tf(a,e,t){return a.indexOf(e,t)}function kn(a,e){return a.charCodeAt(e)|0}function Io(a,e,t){return a.slice(e,t)}function Mr(a){return a.length}function Yx(a){return a.length}function oc(a,e){return e.push(a),a}function zT(a,e){return a.map(e).join("")}function H1(a,e){return a.filter(function(t){return!ta(t,e)})}var sh=1,zo=1,qx=0,Zi=0,wn=0,Ko="";function oh(a,e,t,r,s,l,u,f){return{value:a,root:e,parent:t,type:r,props:s,children:l,line:sh,column:zo,length:u,return:"",siblings:f}}function Fa(a,e){return gm(oh("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},e)}function oo(a){for(;a.root;)a=Fa(a.root,{children:[a]});oc(a,a.siblings)}function BT(){return wn}function FT(){return wn=Zi>0?kn(Ko,--Zi):0,zo--,wn===10&&(zo=1,sh--),wn}function fr(){return wn=Zi<qx?kn(Ko,Zi++):0,zo++,wn===10&&(zo=1,sh++),wn}function Ts(){return kn(Ko,Zi)}function bf(){return Zi}function lh(a,e){return Io(Ko,a,e)}function vm(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function HT(a){return sh=zo=1,qx=Mr(Ko=a),Zi=0,[]}function VT(a){return Ko="",a}function Mp(a){return Wx(lh(Zi-1,_m(a===91?a+2:a===40?a+1:a)))}function GT(a){for(;(wn=Ts())&&wn<33;)fr();return vm(a)>2||vm(wn)>3?"":" "}function kT(a,e){for(;--e&&fr()&&!(wn<48||wn>102||wn>57&&wn<65||wn>70&&wn<97););return lh(a,bf()+(e<6&&Ts()==32&&fr()==32))}function _m(a){for(;fr();)switch(wn){case a:return Zi;case 34:case 39:a!==34&&a!==39&&_m(wn);break;case 40:a===41&&_m(a);break;case 92:fr();break}return Zi}function XT(a,e){for(;fr()&&a+wn!==57;)if(a+wn===84&&Ts()===47)break;return"/*"+lh(e,Zi-1)+"*"+C0(a===47?a:fr())}function WT(a){for(;!vm(Ts());)fr();return lh(a,Zi)}function YT(a){return VT(Ef("",null,null,null,[""],a=HT(a),0,[0],a))}function Ef(a,e,t,r,s,l,u,f,p){for(var h=0,m=0,v=u,_=0,y=0,M=0,b=1,S=1,x=1,U=0,C="",E=s,N=l,z=r,P=C;S;)switch(M=U,U=fr()){case 40:if(M!=108&&kn(P,v-1)==58){Tf(P+=gt(Mp(U),"&","&\f"),"&\f",Xx(h?f[h-1]:0))!=-1&&(x=-1);break}case 34:case 39:case 91:P+=Mp(U);break;case 9:case 10:case 13:case 32:P+=GT(M);break;case 92:P+=kT(bf()-1,7);continue;case 47:switch(Ts()){case 42:case 47:oc(qT(XT(fr(),bf()),e,t,p),p);break;default:P+="/"}break;case 123*b:f[h++]=Mr(P)*x;case 125*b:case 59:case 0:switch(U){case 0:case 125:S=0;case 59+m:x==-1&&(P=gt(P,/\f/g,"")),y>0&&Mr(P)-v&&oc(y>32?G1(P+";",r,t,v-1,p):G1(gt(P," ","")+";",r,t,v-2,p),p);break;case 59:P+=";";default:if(oc(z=V1(P,e,t,h,m,s,f,C,E=[],N=[],v,l),l),U===123)if(m===0)Ef(P,e,z,z,E,l,v,f,N);else switch(_===99&&kn(P,3)===110?100:_){case 100:case 108:case 109:case 115:Ef(a,z,z,r&&oc(V1(a,z,z,0,0,s,f,C,s,E=[],v,N),N),s,N,v,f,r?E:N);break;default:Ef(P,z,z,z,[""],N,0,f,N)}}h=m=y=0,b=x=1,C=P="",v=u;break;case 58:v=1+Mr(P),y=M;default:if(b<1){if(U==123)--b;else if(U==125&&b++==0&&FT()==125)continue}switch(P+=C0(U),U*b){case 38:x=m>0?1:(P+="\f",-1);break;case 44:f[h++]=(Mr(P)-1)*x,x=1;break;case 64:Ts()===45&&(P+=Mp(fr())),_=Ts(),m=v=Mr(C=P+=WT(bf())),U++;break;case 45:M===45&&Mr(P)==2&&(b=0)}}return l}function V1(a,e,t,r,s,l,u,f,p,h,m,v){for(var _=s-1,y=s===0?l:[""],M=Yx(y),b=0,S=0,x=0;b<r;++b)for(var U=0,C=Io(a,_+1,_=Xx(S=u[b])),E=a;U<M;++U)(E=Wx(S>0?y[U]+" "+C:gt(C,/&\f/g,y[U])))&&(p[x++]=E);return oh(a,e,t,s===0?ah:f,p,h,m,v)}function qT(a,e,t,r){return oh(a,e,t,Gx,C0(BT()),Io(a,2,-2),0,r)}function G1(a,e,t,r,s){return oh(a,e,t,R0,Io(a,0,r),Io(a,r+1,-1),r,s)}function jx(a,e,t){switch(IT(a,e)){case 5103:return It+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return It+a+a;case 4789:return pc+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return It+a+pc+a+nn+a+a;case 5936:switch(kn(a,e+11)){case 114:return It+a+nn+gt(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return It+a+nn+gt(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return It+a+nn+gt(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return It+a+nn+a+a;case 6165:return It+a+nn+"flex-"+a+a;case 5187:return It+a+gt(a,/(\w+).+(:[^]+)/,It+"box-$1$2"+nn+"flex-$1$2")+a;case 5443:return It+a+nn+"flex-item-"+gt(a,/flex-|-self/g,"")+(ta(a,/flex-|baseline/)?"":nn+"grid-row-"+gt(a,/flex-|-self/g,""))+a;case 4675:return It+a+nn+"flex-line-pack"+gt(a,/align-content|flex-|-self/g,"")+a;case 5548:return It+a+nn+gt(a,"shrink","negative")+a;case 5292:return It+a+nn+gt(a,"basis","preferred-size")+a;case 6060:return It+"box-"+gt(a,"-grow","")+It+a+nn+gt(a,"grow","positive")+a;case 4554:return It+gt(a,/([^-])(transform)/g,"$1"+It+"$2")+a;case 6187:return gt(gt(gt(a,/(zoom-|grab)/,It+"$1"),/(image-set)/,It+"$1"),a,"")+a;case 5495:case 3959:return gt(a,/(image-set\([^]*)/,It+"$1$`$1");case 4968:return gt(gt(a,/(.+:)(flex-)?(.*)/,It+"box-pack:$3"+nn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+It+a+a;case 4200:if(!ta(a,/flex-|baseline/))return nn+"grid-column-align"+Io(a,e)+a;break;case 2592:case 3360:return nn+gt(a,"template-","")+a;case 4384:case 3616:return t&&t.some(function(r,s){return e=s,ta(r.props,/grid-\w+-end/)})?~Tf(a+(t=t[e].value),"span",0)?a:nn+gt(a,"-start","")+a+nn+"grid-row-span:"+(~Tf(t,"span",0)?ta(t,/\d+/):+ta(t,/\d+/)-+ta(a,/\d+/))+";":nn+gt(a,"-start","")+a;case 4896:case 4128:return t&&t.some(function(r){return ta(r.props,/grid-\w+-start/)})?a:nn+gt(gt(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return gt(a,/(.+)-inline(.+)/,It+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Mr(a)-1-e>6)switch(kn(a,e+1)){case 109:if(kn(a,e+4)!==45)break;case 102:return gt(a,/(.+:)(.+)-([^]+)/,"$1"+It+"$2-$3$1"+pc+(kn(a,e+3)==108?"$3":"$2-$3"))+a;case 115:return~Tf(a,"stretch",0)?jx(gt(a,"stretch","fill-available"),e,t)+a:a}break;case 5152:case 5920:return gt(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,s,l,u,f,p,h){return nn+s+":"+l+h+(u?nn+s+"-span:"+(f?p:+p-+l)+h:"")+a});case 4949:if(kn(a,e+6)===121)return gt(a,":",":"+It)+a;break;case 6444:switch(kn(a,kn(a,14)===45?18:11)){case 120:return gt(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+It+(kn(a,14)===45?"inline-":"")+"box$3$1"+It+"$2$3$1"+nn+"$2box$3")+a;case 100:return gt(a,":",":"+nn)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return gt(a,"scroll-","scroll-snap-")+a}return a}function Vf(a,e){for(var t="",r=0;r<a.length;r++)t+=e(a[r],r,a,e)||"";return t}function jT(a,e,t,r){switch(a.type){case OT:if(a.children.length)break;case PT:case R0:return a.return=a.return||a.value;case Gx:return"";case kx:return a.return=a.value+"{"+Vf(a.children,r)+"}";case ah:if(!Mr(a.value=a.props.join(",")))return""}return Mr(t=Vf(a.children,r))?a.return=a.value+"{"+t+"}":""}function ZT(a){var e=Yx(a);return function(t,r,s,l){for(var u="",f=0;f<e;f++)u+=a[f](t,r,s,l)||"";return u}}function KT(a){return function(e){e.root||(e=e.return)&&a(e)}}function QT(a,e,t,r){if(a.length>-1&&!a.return)switch(a.type){case R0:a.return=jx(a.value,a.length,t);return;case kx:return Vf([Fa(a,{value:gt(a.value,"@","@"+It)})],r);case ah:if(a.length)return zT(t=a.props,function(s){switch(ta(s,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":oo(Fa(a,{props:[gt(s,/:(read-\w+)/,":"+pc+"$1")]})),oo(Fa(a,{props:[s]})),gm(a,{props:H1(t,r)});break;case"::placeholder":oo(Fa(a,{props:[gt(s,/:(plac\w+)/,":"+It+"input-$1")]})),oo(Fa(a,{props:[gt(s,/:(plac\w+)/,":"+pc+"$1")]})),oo(Fa(a,{props:[gt(s,/:(plac\w+)/,nn+"input-$1")]})),oo(Fa(a,{props:[s]})),gm(a,{props:H1(t,r)});break}return""})}}var JT={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Pi={},Bo=typeof process<"u"&&Pi!==void 0&&(Pi.REACT_APP_SC_ATTR||Pi.SC_ATTR)||"data-styled",Zx="active",Kx="data-styled-version",ch="6.1.19",D0=`/*!sc*/
`,Gf=typeof window<"u"&&typeof document<"u",$T=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Pi!==void 0&&Pi.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Pi.REACT_APP_SC_DISABLE_SPEEDY!==""?Pi.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Pi.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Pi!==void 0&&Pi.SC_DISABLE_SPEEDY!==void 0&&Pi.SC_DISABLE_SPEEDY!==""&&Pi.SC_DISABLE_SPEEDY!=="false"&&Pi.SC_DISABLE_SPEEDY),eb={},uh=Object.freeze([]),Fo=Object.freeze({});function Qx(a,e,t){return t===void 0&&(t=Fo),a.theme!==t.theme&&a.theme||e||t.theme}var Jx=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),tb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,nb=/(^-|-$)/g;function k1(a){return a.replace(tb,"-").replace(nb,"")}var ib=/(a)(d)/gi,Xu=52,X1=function(a){return String.fromCharCode(a+(a>25?39:97))};function ym(a){var e,t="";for(e=Math.abs(a);e>Xu;e=e/Xu|0)t=X1(e%Xu)+t;return(X1(e%Xu)+t).replace(ib,"$1-$2")}var Tp,$x=5381,Ro=function(a,e){for(var t=e.length;t;)a=33*a^e.charCodeAt(--t);return a},eS=function(a){return Ro($x,a)};function tS(a){return ym(eS(a)>>>0)}function rb(a){return a.displayName||a.name||"Component"}function bp(a){return typeof a=="string"&&!0}var nS=typeof Symbol=="function"&&Symbol.for,iS=nS?Symbol.for("react.memo"):60115,ab=nS?Symbol.for("react.forward_ref"):60112,sb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ob={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},rS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},lb=((Tp={})[ab]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Tp[iS]=rS,Tp);function W1(a){return("type"in(e=a)&&e.type.$$typeof)===iS?rS:"$$typeof"in a?lb[a.$$typeof]:sb;var e}var cb=Object.defineProperty,ub=Object.getOwnPropertyNames,Y1=Object.getOwnPropertySymbols,fb=Object.getOwnPropertyDescriptor,hb=Object.getPrototypeOf,q1=Object.prototype;function aS(a,e,t){if(typeof e!="string"){if(q1){var r=hb(e);r&&r!==q1&&aS(a,r,t)}var s=ub(e);Y1&&(s=s.concat(Y1(e)));for(var l=W1(a),u=W1(e),f=0;f<s.length;++f){var p=s[f];if(!(p in ob||t&&t[p]||u&&p in u||l&&p in l)){var h=fb(e,p);try{cb(a,p,h)}catch{}}}}return a}function Ho(a){return typeof a=="function"}function U0(a){return typeof a=="object"&&"styledComponentId"in a}function Ss(a,e){return a&&e?"".concat(a," ").concat(e):a||e||""}function xm(a,e){if(a.length===0)return"";for(var t=a[0],r=1;r<a.length;r++)t+=a[r];return t}function xc(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function Sm(a,e,t){if(t===void 0&&(t=!1),!t&&!xc(a)&&!Array.isArray(a))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)a[r]=Sm(a[r],e[r]);else if(xc(e))for(var r in e)a[r]=Sm(a[r],e[r]);return a}function L0(a,e){Object.defineProperty(a,"toString",{value:e})}function Uc(a){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var db=(function(){function a(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return a.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},a.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,s=r.length,l=s;e>=l;)if((l<<=1)<0)throw Uc(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(r),this.length=l;for(var u=s;u<l;u++)this.groupSizes[u]=0}for(var f=this.indexOfGroup(e+1),p=(u=0,t.length);u<p;u++)this.tag.insertRule(f,t[u])&&(this.groupSizes[e]++,f++)},a.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),s=r+t;this.groupSizes[e]=0;for(var l=r;l<s;l++)this.tag.deleteRule(r)}},a.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var r=this.groupSizes[e],s=this.indexOfGroup(e),l=s+r,u=s;u<l;u++)t+="".concat(this.tag.getRule(u)).concat(D0);return t},a})(),Af=new Map,kf=new Map,wf=1,Wu=function(a){if(Af.has(a))return Af.get(a);for(;kf.has(wf);)wf++;var e=wf++;return Af.set(a,e),kf.set(e,a),e},pb=function(a,e){wf=e+1,Af.set(a,e),kf.set(e,a)},mb="style[".concat(Bo,"][").concat(Kx,'="').concat(ch,'"]'),gb=new RegExp("^".concat(Bo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),vb=function(a,e,t){for(var r,s=t.split(","),l=0,u=s.length;l<u;l++)(r=s[l])&&a.registerName(e,r)},_b=function(a,e){for(var t,r=((t=e.textContent)!==null&&t!==void 0?t:"").split(D0),s=[],l=0,u=r.length;l<u;l++){var f=r[l].trim();if(f){var p=f.match(gb);if(p){var h=0|parseInt(p[1],10),m=p[2];h!==0&&(pb(m,h),vb(a,m,p[3]),a.getTag().insertRules(h,s)),s.length=0}else s.push(f)}}},j1=function(a){for(var e=document.querySelectorAll(mb),t=0,r=e.length;t<r;t++){var s=e[t];s&&s.getAttribute(Bo)!==Zx&&(_b(a,s),s.parentNode&&s.parentNode.removeChild(s))}};function yb(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var sS=function(a){var e=document.head,t=a||e,r=document.createElement("style"),s=(function(f){var p=Array.from(f.querySelectorAll("style[".concat(Bo,"]")));return p[p.length-1]})(t),l=s!==void 0?s.nextSibling:null;r.setAttribute(Bo,Zx),r.setAttribute(Kx,ch);var u=yb();return u&&r.setAttribute("nonce",u),t.insertBefore(r,l),r},xb=(function(){function a(e){this.element=sS(e),this.element.appendChild(document.createTextNode("")),this.sheet=(function(t){if(t.sheet)return t.sheet;for(var r=document.styleSheets,s=0,l=r.length;s<l;s++){var u=r[s];if(u.ownerNode===t)return u}throw Uc(17)})(this.element),this.length=0}return a.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},a.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},a})(),Sb=(function(){function a(e){this.element=sS(e),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},a.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},a})(),Mb=(function(){function a(e){this.rules=[],this.length=0}return a.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},a.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},a.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},a})(),Z1=Gf,Tb={isServer:!Gf,useCSSOMInjection:!$T},Xf=(function(){function a(e,t,r){e===void 0&&(e=Fo),t===void 0&&(t={});var s=this;this.options=ri(ri({},Tb),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Gf&&Z1&&(Z1=!1,j1(this)),L0(this,function(){return(function(l){for(var u=l.getTag(),f=u.length,p="",h=function(v){var _=(function(x){return kf.get(x)})(v);if(_===void 0)return"continue";var y=l.names.get(_),M=u.getGroup(v);if(y===void 0||!y.size||M.length===0)return"continue";var b="".concat(Bo,".g").concat(v,'[id="').concat(_,'"]'),S="";y!==void 0&&y.forEach(function(x){x.length>0&&(S+="".concat(x,","))}),p+="".concat(M).concat(b,'{content:"').concat(S,'"}').concat(D0)},m=0;m<f;m++)h(m);return p})(s)})}return a.registerId=function(e){return Wu(e)},a.prototype.rehydrate=function(){!this.server&&Gf&&j1(this)},a.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new a(ri(ri({},this.options),e),this.gs,t&&this.names||void 0)},a.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(e=(function(t){var r=t.useCSSOMInjection,s=t.target;return t.isServer?new Mb(s):r?new xb(s):new Sb(s)})(this.options),new db(e)));var e},a.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},a.prototype.registerName=function(e,t){if(Wu(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},a.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(Wu(e),r)},a.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},a.prototype.clearRules=function(e){this.getTag().clearGroup(Wu(e)),this.clearNames(e)},a.prototype.clearTag=function(){this.tag=void 0},a})(),bb=/&/g,Eb=/^\s*\/\/.*$/gm;function oS(a,e){return a.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=oS(t.children,e)),t})}function Ab(a){var e,t,r,s=Fo,l=s.options,u=l===void 0?Fo:l,f=s.plugins,p=f===void 0?uh:f,h=function(_,y,M){return M.startsWith(t)&&M.endsWith(t)&&M.replaceAll(t,"").length>0?".".concat(e):_},m=p.slice();m.push(function(_){_.type===ah&&_.value.includes("&")&&(_.props[0]=_.props[0].replace(bb,t).replace(r,h))}),u.prefix&&m.push(QT),m.push(jT);var v=function(_,y,M,b){y===void 0&&(y=""),M===void 0&&(M=""),b===void 0&&(b="&"),e=b,t=y,r=new RegExp("\\".concat(t,"\\b"),"g");var S=_.replace(Eb,""),x=YT(M||y?"".concat(M," ").concat(y," { ").concat(S," }"):S);u.namespace&&(x=oS(x,u.namespace));var U=[];return Vf(x,ZT(m.concat(KT(function(C){return U.push(C)})))),U};return v.hash=p.length?p.reduce(function(_,y){return y.name||Uc(15),Ro(_,y.name)},$x).toString():"",v}var wb=new Xf,Mm=Ab(),lS=Qn.createContext({shouldForwardProp:void 0,styleSheet:wb,stylis:Mm});lS.Consumer;Qn.createContext(void 0);function Tm(){return Va.useContext(lS)}var Rb=(function(){function a(e,t){var r=this;this.inject=function(s,l){l===void 0&&(l=Mm);var u=r.name+l.hash;s.hasNameForId(r.id,u)||s.insertRules(r.id,u,l(r.rules,u,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,L0(this,function(){throw Uc(12,String(r.name))})}return a.prototype.getName=function(e){return e===void 0&&(e=Mm),this.name+e.hash},a})(),Cb=function(a){return a>="A"&&a<="Z"};function K1(a){for(var e="",t=0;t<a.length;t++){var r=a[t];if(t===1&&r==="-"&&a[0]==="-")return a;Cb(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var cS=function(a){return a==null||a===!1||a===""},uS=function(a){var e,t,r=[];for(var s in a){var l=a[s];a.hasOwnProperty(s)&&!cS(l)&&(Array.isArray(l)&&l.isCss||Ho(l)?r.push("".concat(K1(s),":"),l,";"):xc(l)?r.push.apply(r,yc(yc(["".concat(s," {")],uS(l),!1),["}"],!1)):r.push("".concat(K1(s),": ").concat((e=s,(t=l)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in JT||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return r};function Ya(a,e,t,r){if(cS(a))return[];if(U0(a))return[".".concat(a.styledComponentId)];if(Ho(a)){if(!Ho(l=a)||l.prototype&&l.prototype.isReactComponent||!e)return[a];var s=a(e);return Ya(s,e,t,r)}var l;return a instanceof Rb?t?(a.inject(t,r),[a.getName(r)]):[a]:xc(a)?uS(a):Array.isArray(a)?Array.prototype.concat.apply(uh,a.map(function(u){return Ya(u,e,t,r)})):[a.toString()]}function fS(a){for(var e=0;e<a.length;e+=1){var t=a[e];if(Ho(t)&&!U0(t))return!1}return!0}var Db=eS(ch),Ub=(function(){function a(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&fS(e),this.componentId=t,this.baseHash=Ro(Db,t),this.baseStyle=r,Xf.registerId(t)}return a.prototype.generateAndInjectStyles=function(e,t,r){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))s=Ss(s,this.staticRulesId);else{var l=xm(Ya(this.rules,e,t,r)),u=ym(Ro(this.baseHash,l)>>>0);if(!t.hasNameForId(this.componentId,u)){var f=r(l,".".concat(u),void 0,this.componentId);t.insertRules(this.componentId,u,f)}s=Ss(s,u),this.staticRulesId=u}else{for(var p=Ro(this.baseHash,r.hash),h="",m=0;m<this.rules.length;m++){var v=this.rules[m];if(typeof v=="string")h+=v;else if(v){var _=xm(Ya(v,e,t,r));p=Ro(p,_+m),h+=_}}if(h){var y=ym(p>>>0);t.hasNameForId(this.componentId,y)||t.insertRules(this.componentId,y,r(h,".".concat(y),void 0,this.componentId)),s=Ss(s,y)}}return s},a})(),N0=Qn.createContext(void 0);N0.Consumer;var Ep={};function Lb(a,e,t){var r=U0(a),s=a,l=!bp(a),u=e.attrs,f=u===void 0?uh:u,p=e.componentId,h=p===void 0?(function(E,N){var z=typeof E!="string"?"sc":k1(E);Ep[z]=(Ep[z]||0)+1;var P="".concat(z,"-").concat(tS(ch+z+Ep[z]));return N?"".concat(N,"-").concat(P):P})(e.displayName,e.parentComponentId):p,m=e.displayName,v=m===void 0?(function(E){return bp(E)?"styled.".concat(E):"Styled(".concat(rb(E),")")})(a):m,_=e.displayName&&e.componentId?"".concat(k1(e.displayName),"-").concat(e.componentId):e.componentId||h,y=r&&s.attrs?s.attrs.concat(f).filter(Boolean):f,M=e.shouldForwardProp;if(r&&s.shouldForwardProp){var b=s.shouldForwardProp;if(e.shouldForwardProp){var S=e.shouldForwardProp;M=function(E,N){return b(E,N)&&S(E,N)}}else M=b}var x=new Ub(t,_,r?s.componentStyle:void 0);function U(E,N){return(function(z,P,G){var D=z.attrs,L=z.componentStyle,H=z.defaultProps,oe=z.foldedComponentIds,ae=z.styledComponentId,ce=z.target,fe=Qn.useContext(N0),B=Tm(),Z=z.shouldForwardProp||B.shouldForwardProp,q=Qx(P,fe,H)||Fo,me=(function($,le,Se){for(var we,ze=ri(ri({},le),{className:void 0,theme:Se}),qe=0;qe<$.length;qe+=1){var bt=Ho(we=$[qe])?we(ze):we;for(var at in bt)ze[at]=at==="className"?Ss(ze[at],bt[at]):at==="style"?ri(ri({},ze[at]),bt[at]):bt[at]}return le.className&&(ze.className=Ss(ze.className,le.className)),ze})(D,P,q),O=me.as||ce,Q={};for(var pe in me)me[pe]===void 0||pe[0]==="$"||pe==="as"||pe==="theme"&&me.theme===q||(pe==="forwardedAs"?Q.as=me.forwardedAs:Z&&!Z(pe,O)||(Q[pe]=me[pe]));var xe=(function($,le){var Se=Tm(),we=$.generateAndInjectStyles(le,Se.styleSheet,Se.stylis);return we})(L,me),Ae=Ss(oe,ae);return xe&&(Ae+=" "+xe),me.className&&(Ae+=" "+me.className),Q[bp(O)&&!Jx.has(O)?"class":"className"]=Ae,G&&(Q.ref=G),Va.createElement(O,Q)})(C,E,N)}U.displayName=v;var C=Qn.forwardRef(U);return C.attrs=y,C.componentStyle=x,C.displayName=v,C.shouldForwardProp=M,C.foldedComponentIds=r?Ss(s.foldedComponentIds,s.styledComponentId):"",C.styledComponentId=_,C.target=r?s.target:a,Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(E){this._foldedDefaultProps=r?(function(N){for(var z=[],P=1;P<arguments.length;P++)z[P-1]=arguments[P];for(var G=0,D=z;G<D.length;G++)Sm(N,D[G],!0);return N})({},s.defaultProps,E):E}}),L0(C,function(){return".".concat(C.styledComponentId)}),l&&aS(C,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),C}function Q1(a,e){for(var t=[a[0]],r=0,s=e.length;r<s;r+=1)t.push(e[r],a[r+1]);return t}var J1=function(a){return Object.assign(a,{isCss:!0})};function hS(a){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(Ho(a)||xc(a))return J1(Ya(Q1(uh,yc([a],e,!0))));var r=a;return e.length===0&&r.length===1&&typeof r[0]=="string"?Ya(r):J1(Ya(Q1(r,e)))}function bm(a,e,t){if(t===void 0&&(t=Fo),!e)throw Uc(1,e);var r=function(s){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return a(e,t,hS.apply(void 0,yc([s],l,!1)))};return r.attrs=function(s){return bm(a,e,ri(ri({},t),{attrs:Array.prototype.concat(t.attrs,s).filter(Boolean)}))},r.withConfig=function(s){return bm(a,e,ri(ri({},t),s))},r}var dS=function(a){return bm(Lb,a)},Nb=dS;Jx.forEach(function(a){Nb[a]=dS(a)});var Pb=(function(){function a(e,t){this.rules=e,this.componentId=t,this.isStatic=fS(e),Xf.registerId(this.componentId+1)}return a.prototype.createStyles=function(e,t,r,s){var l=s(xm(Ya(this.rules,t,r,s)),""),u=this.componentId+e;r.insertRules(u,u,l)},a.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},a.prototype.renderStyles=function(e,t,r,s){e>2&&Xf.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,s)},a})();function Ob(a){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];var r=hS.apply(void 0,yc([a],e,!1)),s="sc-global-".concat(tS(JSON.stringify(r))),l=new Pb(r,s),u=function(p){var h=Tm(),m=Qn.useContext(N0),v=Qn.useRef(h.styleSheet.allocateGSInstance(s)).current;return h.styleSheet.server&&f(v,p,h.styleSheet,m,h.stylis),Qn.useLayoutEffect(function(){if(!h.styleSheet.server)return f(v,p,h.styleSheet,m,h.stylis),function(){return l.removeStyles(v,h.styleSheet)}},[v,p,h.styleSheet,m,h.stylis]),null};function f(p,h,m,v,_){if(l.isStatic)l.renderStyles(p,eb,m,_);else{var y=ri(ri({},h),{theme:Qx(h,v,u.defaultProps)});l.renderStyles(p,y,m,_)}}return Qn.memo(u)}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const P0="179",Uo={ROTATE:0,DOLLY:1,PAN:2},Co={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ib=0,$1=1,zb=2,pS=1,Bb=2,$r=3,aa=0,xi=1,Pn=2,qa=0,Lo=1,Em=2,ey=3,ty=4,Fb=5,Ga=100,Hb=101,Vb=102,Gb=103,kb=104,Xb=200,Wb=201,Yb=202,qb=203,Am=204,wm=205,jb=206,Zb=207,Kb=208,Qb=209,Jb=210,$b=211,eE=212,tE=213,nE=214,Rm=0,Cm=1,Dm=2,Vo=3,Um=4,Lm=5,Nm=6,Pm=7,mS=0,iE=1,rE=2,ja=0,aE=1,sE=2,oE=3,lE=4,gS=5,cE=6,uE=7,ny="attached",fE="detached",vS=300,Go=301,ko=302,Om=303,Im=304,fh=306,Xo=1e3,Wa=1001,Wf=1002,Zt=1003,_S=1004,lc=1005,ai=1006,Rf=1007,br=1008,Rr=1009,yS=1010,xS=1011,Sc=1012,O0=1013,bs=1014,hn=1015,Lc=1016,I0=1017,z0=1018,Mc=1020,SS=35902,MS=1021,TS=1022,Oi=1023,Tc=1026,bc=1027,B0=1028,F0=1029,bS=1030,H0=1031,V0=1033,Cf=33776,Df=33777,Uf=33778,Lf=33779,zm=35840,Bm=35841,Fm=35842,Hm=35843,Vm=36196,Gm=37492,km=37496,Xm=37808,Wm=37809,Ym=37810,qm=37811,jm=37812,Zm=37813,Km=37814,Qm=37815,Jm=37816,$m=37817,e0=37818,t0=37819,n0=37820,i0=37821,Nf=36492,r0=36494,a0=36495,ES=36283,s0=36284,o0=36285,l0=36286,Ec=2300,Ac=2301,Ap=2302,iy=2400,ry=2401,ay=2402,hE=2500,dE=0,AS=1,c0=2,pE=3200,mE=3201,wS=0,gE=1,ka="",un="srgb",di="srgb-linear",Yf="linear",qt="srgb",lo=7680,sy=519,vE=512,_E=513,yE=514,RS=515,xE=516,SE=517,ME=518,TE=519,u0=35044,oy="300 es",Er=2e3,qf=2001;class Es{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const s=r[e];if(s!==void 0){const l=s.indexOf(t);l!==-1&&s.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const s=r.slice(0);for(let l=0,u=s.length;l<u;l++)s[l].call(this,e);e.target=null}}}const ni=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ly=1234567;const mc=Math.PI/180,Wo=180/Math.PI;function hr(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ni[a&255]+ni[a>>8&255]+ni[a>>16&255]+ni[a>>24&255]+"-"+ni[e&255]+ni[e>>8&255]+"-"+ni[e>>16&15|64]+ni[e>>24&255]+"-"+ni[t&63|128]+ni[t>>8&255]+"-"+ni[t>>16&255]+ni[t>>24&255]+ni[r&255]+ni[r>>8&255]+ni[r>>16&255]+ni[r>>24&255]).toLowerCase()}function _t(a,e,t){return Math.max(e,Math.min(t,a))}function G0(a,e){return(a%e+e)%e}function bE(a,e,t,r,s){return r+(a-e)*(s-r)/(t-e)}function EE(a,e,t){return a!==e?(t-a)/(e-a):0}function gc(a,e,t){return(1-t)*a+t*e}function AE(a,e,t,r){return gc(a,e,1-Math.exp(-t*r))}function wE(a,e=1){return e-Math.abs(G0(a,e*2)-e)}function RE(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function CE(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function DE(a,e){return a+Math.floor(Math.random()*(e-a+1))}function UE(a,e){return a+Math.random()*(e-a)}function LE(a){return a*(.5-Math.random())}function NE(a){a!==void 0&&(ly=a);let e=ly+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function PE(a){return a*mc}function OE(a){return a*Wo}function IE(a){return(a&a-1)===0&&a!==0}function zE(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function BE(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function FE(a,e,t,r,s){const l=Math.cos,u=Math.sin,f=l(t/2),p=u(t/2),h=l((e+r)/2),m=u((e+r)/2),v=l((e-r)/2),_=u((e-r)/2),y=l((r-e)/2),M=u((r-e)/2);switch(s){case"XYX":a.set(f*m,p*v,p*_,f*h);break;case"YZY":a.set(p*_,f*m,p*v,f*h);break;case"ZXZ":a.set(p*v,p*_,f*m,f*h);break;case"XZX":a.set(f*m,p*M,p*y,f*h);break;case"YXY":a.set(p*y,f*m,p*M,f*h);break;case"ZYZ":a.set(p*M,p*y,f*m,f*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function cr(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Ft(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const CS={DEG2RAD:mc,RAD2DEG:Wo,generateUUID:hr,clamp:_t,euclideanModulo:G0,mapLinear:bE,inverseLerp:EE,lerp:gc,damp:AE,pingpong:wE,smoothstep:RE,smootherstep:CE,randInt:DE,randFloat:UE,randFloatSpread:LE,seededRandom:NE,degToRad:PE,radToDeg:OE,isPowerOfTwo:IE,ceilPowerOfTwo:zE,floorPowerOfTwo:BE,setQuaternionFromProperEuler:FE,normalize:Ft,denormalize:cr};class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,s=e.elements;return this.x=s[0]*t+s[3]*r+s[6],this.y=s[1]*t+s[4]*r+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),s=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*s+e.x,this.y=l*s+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Cr{constructor(e=0,t=0,r=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=s}static slerpFlat(e,t,r,s,l,u,f){let p=r[s+0],h=r[s+1],m=r[s+2],v=r[s+3];const _=l[u+0],y=l[u+1],M=l[u+2],b=l[u+3];if(f===0){e[t+0]=p,e[t+1]=h,e[t+2]=m,e[t+3]=v;return}if(f===1){e[t+0]=_,e[t+1]=y,e[t+2]=M,e[t+3]=b;return}if(v!==b||p!==_||h!==y||m!==M){let S=1-f;const x=p*_+h*y+m*M+v*b,U=x>=0?1:-1,C=1-x*x;if(C>Number.EPSILON){const N=Math.sqrt(C),z=Math.atan2(N,x*U);S=Math.sin(S*z)/N,f=Math.sin(f*z)/N}const E=f*U;if(p=p*S+_*E,h=h*S+y*E,m=m*S+M*E,v=v*S+b*E,S===1-f){const N=1/Math.sqrt(p*p+h*h+m*m+v*v);p*=N,h*=N,m*=N,v*=N}}e[t]=p,e[t+1]=h,e[t+2]=m,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,s,l,u){const f=r[s],p=r[s+1],h=r[s+2],m=r[s+3],v=l[u],_=l[u+1],y=l[u+2],M=l[u+3];return e[t]=f*M+m*v+p*y-h*_,e[t+1]=p*M+m*_+h*v-f*y,e[t+2]=h*M+m*y+f*_-p*v,e[t+3]=m*M-f*v-p*_-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,s){return this._x=e,this._y=t,this._z=r,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,s=e._y,l=e._z,u=e._order,f=Math.cos,p=Math.sin,h=f(r/2),m=f(s/2),v=f(l/2),_=p(r/2),y=p(s/2),M=p(l/2);switch(u){case"XYZ":this._x=_*m*v+h*y*M,this._y=h*y*v-_*m*M,this._z=h*m*M+_*y*v,this._w=h*m*v-_*y*M;break;case"YXZ":this._x=_*m*v+h*y*M,this._y=h*y*v-_*m*M,this._z=h*m*M-_*y*v,this._w=h*m*v+_*y*M;break;case"ZXY":this._x=_*m*v-h*y*M,this._y=h*y*v+_*m*M,this._z=h*m*M+_*y*v,this._w=h*m*v-_*y*M;break;case"ZYX":this._x=_*m*v-h*y*M,this._y=h*y*v+_*m*M,this._z=h*m*M-_*y*v,this._w=h*m*v+_*y*M;break;case"YZX":this._x=_*m*v+h*y*M,this._y=h*y*v+_*m*M,this._z=h*m*M-_*y*v,this._w=h*m*v-_*y*M;break;case"XZY":this._x=_*m*v-h*y*M,this._y=h*y*v-_*m*M,this._z=h*m*M+_*y*v,this._w=h*m*v+_*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,s=Math.sin(r);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],s=t[4],l=t[8],u=t[1],f=t[5],p=t[9],h=t[2],m=t[6],v=t[10],_=r+f+v;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(m-p)*y,this._y=(l-h)*y,this._z=(u-s)*y}else if(r>f&&r>v){const y=2*Math.sqrt(1+r-f-v);this._w=(m-p)/y,this._x=.25*y,this._y=(s+u)/y,this._z=(l+h)/y}else if(f>v){const y=2*Math.sqrt(1+f-r-v);this._w=(l-h)/y,this._x=(s+u)/y,this._y=.25*y,this._z=(p+m)/y}else{const y=2*Math.sqrt(1+v-r-f);this._w=(u-s)/y,this._x=(l+h)/y,this._y=(p+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const s=Math.min(1,t/r);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,s=e._y,l=e._z,u=e._w,f=t._x,p=t._y,h=t._z,m=t._w;return this._x=r*m+u*f+s*h-l*p,this._y=s*m+u*p+l*f-r*h,this._z=l*m+u*h+r*p-s*f,this._w=u*m-r*f-s*p-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,s=this._y,l=this._z,u=this._w;let f=u*e._w+r*e._x+s*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=r,this._y=s,this._z=l,this;const p=1-f*f;if(p<=Number.EPSILON){const y=1-t;return this._w=y*u+t*this._w,this._x=y*r+t*this._x,this._y=y*s+t*this._y,this._z=y*l+t*this._z,this.normalize(),this}const h=Math.sqrt(p),m=Math.atan2(h,f),v=Math.sin((1-t)*m)/h,_=Math.sin(t*m)/h;return this._w=u*v+this._w*_,this._x=r*v+this._x*_,this._y=s*v+this._y*_,this._z=l*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),s=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(s*Math.sin(e),s*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,r=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cy.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cy.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*s,this.y=l[1]*t+l[4]*r+l[7]*s,this.z=l[2]*t+l[5]*r+l[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,s=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*s+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*s+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*s+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*s+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,s=this.z,l=e.x,u=e.y,f=e.z,p=e.w,h=2*(u*s-f*r),m=2*(f*t-l*s),v=2*(l*r-u*t);return this.x=t+p*h+u*v-f*m,this.y=r+p*m+f*h-l*v,this.z=s+p*v+l*m-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*s,this.y=l[1]*t+l[5]*r+l[9]*s,this.z=l[2]*t+l[6]*r+l[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,s=e.y,l=e.z,u=t.x,f=t.y,p=t.z;return this.x=s*p-l*f,this.y=l*u-r*p,this.z=r*f-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return wp.copy(this).projectOnVector(e),this.sub(wp)}reflect(e){return this.sub(wp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,s=this.z-e.z;return t*t+r*r+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const s=Math.sin(t)*e;return this.x=s*Math.sin(r),this.y=Math.cos(t)*e,this.z=s*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wp=new V,cy=new Cr;class ht{constructor(e,t,r,s,l,u,f,p,h){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,s,l,u,f,p,h)}set(e,t,r,s,l,u,f,p,h){const m=this.elements;return m[0]=e,m[1]=s,m[2]=f,m[3]=t,m[4]=l,m[5]=p,m[6]=r,m[7]=u,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,s=t.elements,l=this.elements,u=r[0],f=r[3],p=r[6],h=r[1],m=r[4],v=r[7],_=r[2],y=r[5],M=r[8],b=s[0],S=s[3],x=s[6],U=s[1],C=s[4],E=s[7],N=s[2],z=s[5],P=s[8];return l[0]=u*b+f*U+p*N,l[3]=u*S+f*C+p*z,l[6]=u*x+f*E+p*P,l[1]=h*b+m*U+v*N,l[4]=h*S+m*C+v*z,l[7]=h*x+m*E+v*P,l[2]=_*b+y*U+M*N,l[5]=_*S+y*C+M*z,l[8]=_*x+y*E+M*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],s=e[2],l=e[3],u=e[4],f=e[5],p=e[6],h=e[7],m=e[8];return t*u*m-t*f*h-r*l*m+r*f*p+s*l*h-s*u*p}invert(){const e=this.elements,t=e[0],r=e[1],s=e[2],l=e[3],u=e[4],f=e[5],p=e[6],h=e[7],m=e[8],v=m*u-f*h,_=f*p-m*l,y=h*l-u*p,M=t*v+r*_+s*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return e[0]=v*b,e[1]=(s*h-m*r)*b,e[2]=(f*r-s*u)*b,e[3]=_*b,e[4]=(m*t-s*p)*b,e[5]=(s*l-f*t)*b,e[6]=y*b,e[7]=(r*p-h*t)*b,e[8]=(u*t-r*l)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,s,l,u,f){const p=Math.cos(l),h=Math.sin(l);return this.set(r*p,r*h,-r*(p*u+h*f)+u+e,-s*h,s*p,-s*(-h*u+p*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Rp.makeScale(e,t)),this}rotate(e){return this.premultiply(Rp.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rp.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let s=0;s<9;s++)if(t[s]!==r[s])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rp=new ht;function DS(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function wc(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function HE(){const a=wc("canvas");return a.style.display="block",a}const uy={};function No(a){a in uy||(uy[a]=!0,console.warn(a))}function VE(a,e,t){return new Promise(function(r,s){function l(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:s();break;case a.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const fy=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hy=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function GE(){const a={enabled:!0,workingColorSpace:di,spaces:{},convert:function(s,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===qt&&(s.r=ra(s.r),s.g=ra(s.g),s.b=ra(s.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===qt&&(s.r=Po(s.r),s.g=Po(s.g),s.b=Po(s.b))),s},workingToColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},colorSpaceToWorking:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ka?Yf:this.spaces[s].transfer},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,u){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,l){return No("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(s,l)},toWorkingColorSpace:function(s,l){return No("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(s,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[di]:{primaries:e,whitePoint:r,transfer:Yf,toXYZ:fy,fromXYZ:hy,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:e,whitePoint:r,transfer:qt,toXYZ:fy,fromXYZ:hy,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),a}const At=GE();function ra(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Po(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let co;class kE{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{co===void 0&&(co=wc("canvas")),co.width=e.width,co.height=e.height;const s=co.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),r=co}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const s=r.getImageData(0,0,e.width,e.height),l=s.data;for(let u=0;u<l.length;u++)l[u]=ra(l[u]/255)*255;return r.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ra(t[r]/255)*255):t[r]=ra(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let XE=0;class k0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:XE++}),this.uuid=hr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let u=0,f=s.length;u<f;u++)s[u].isDataTexture?l.push(Cp(s[u].image)):l.push(Cp(s[u]))}else l=Cp(s);r.url=l}return t||(e.images[this.uuid]=r),r}}function Cp(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?kE.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let WE=0;const Dp=new V;class Wn extends Es{constructor(e=Wn.DEFAULT_IMAGE,t=Wn.DEFAULT_MAPPING,r=Wa,s=Wa,l=ai,u=br,f=Oi,p=Rr,h=Wn.DEFAULT_ANISOTROPY,m=ka){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=hr(),this.name="",this.source=new k0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Dp).x}get height(){return this.source.getSize(Dp).y}get depth(){return this.source.getSize(Dp).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xo:e.x=e.x-Math.floor(e.x);break;case Wa:e.x=e.x<0?0:1;break;case Wf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xo:e.y=e.y-Math.floor(e.y);break;case Wa:e.y=e.y<0?0:1;break;case Wf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=vS;Wn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,r=0,s=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,s){return this.x=e,this.y=t,this.z=r,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,s=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*s+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*s+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*s+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*s+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,s,l;const p=e.elements,h=p[0],m=p[4],v=p[8],_=p[1],y=p[5],M=p[9],b=p[2],S=p[6],x=p[10];if(Math.abs(m-_)<.01&&Math.abs(v-b)<.01&&Math.abs(M-S)<.01){if(Math.abs(m+_)<.1&&Math.abs(v+b)<.1&&Math.abs(M+S)<.1&&Math.abs(h+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(h+1)/2,E=(y+1)/2,N=(x+1)/2,z=(m+_)/4,P=(v+b)/4,G=(M+S)/4;return C>E&&C>N?C<.01?(r=0,s=.707106781,l=.707106781):(r=Math.sqrt(C),s=z/r,l=P/r):E>N?E<.01?(r=.707106781,s=0,l=.707106781):(s=Math.sqrt(E),r=z/s,l=G/s):N<.01?(r=.707106781,s=.707106781,l=0):(l=Math.sqrt(N),r=P/l,s=G/l),this.set(r,s,l,t),this}let U=Math.sqrt((S-M)*(S-M)+(v-b)*(v-b)+(_-m)*(_-m));return Math.abs(U)<.001&&(U=1),this.x=(S-M)/U,this.y=(v-b)/U,this.z=(_-m)/U,this.w=Math.acos((h+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class YE extends Es{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const s={width:e,height:t,depth:r.depth},l=new Wn(s);this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:ai,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=r,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new k0(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pn extends YE{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class US extends Wn{constructor(e=null,t=1,r=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qE extends Wn{constructor(e=null,t=1,r=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sa{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(nr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(nr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=nr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,nr):nr.fromBufferAttribute(l,u),nr.applyMatrix4(e.matrixWorld),this.expandByPoint(nr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Yu.copy(r.boundingBox)),Yu.applyMatrix4(e.matrixWorld),this.union(Yu)}const s=e.children;for(let l=0,u=s.length;l<u;l++)this.expandByObject(s[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nr),nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ql),qu.subVectors(this.max,Ql),uo.subVectors(e.a,Ql),fo.subVectors(e.b,Ql),ho.subVectors(e.c,Ql),Ua.subVectors(fo,uo),La.subVectors(ho,fo),hs.subVectors(uo,ho);let t=[0,-Ua.z,Ua.y,0,-La.z,La.y,0,-hs.z,hs.y,Ua.z,0,-Ua.x,La.z,0,-La.x,hs.z,0,-hs.x,-Ua.y,Ua.x,0,-La.y,La.x,0,-hs.y,hs.x,0];return!Up(t,uo,fo,ho,qu)||(t=[1,0,0,0,1,0,0,0,1],!Up(t,uo,fo,ho,qu))?!1:(ju.crossVectors(Ua,La),t=[ju.x,ju.y,ju.z],Up(t,uo,fo,ho,qu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qr=[new V,new V,new V,new V,new V,new V,new V,new V],nr=new V,Yu=new sa,uo=new V,fo=new V,ho=new V,Ua=new V,La=new V,hs=new V,Ql=new V,qu=new V,ju=new V,ds=new V;function Up(a,e,t,r,s){for(let l=0,u=a.length-3;l<=u;l+=3){ds.fromArray(a,l);const f=s.x*Math.abs(ds.x)+s.y*Math.abs(ds.y)+s.z*Math.abs(ds.z),p=e.dot(ds),h=t.dot(ds),m=r.dot(ds);if(Math.max(-Math.max(p,h,m),Math.min(p,h,m))>f)return!1}return!0}const jE=new sa,Jl=new V,Lp=new V;class Dr{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):jE.setFromPoints(e).getCenter(r);let s=0;for(let l=0,u=e.length;l<u;l++)s=Math.max(s,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jl.subVectors(e,this.center);const t=Jl.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),s=(r-this.radius)*.5;this.center.addScaledVector(Jl,s/r),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jl.copy(e.center).add(Lp)),this.expandByPoint(Jl.copy(e.center).sub(Lp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const jr=new V,Np=new V,Zu=new V,Na=new V,Pp=new V,Ku=new V,Op=new V;class Qo{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jr.copy(this.origin).addScaledVector(this.direction,t),jr.distanceToSquared(e))}distanceSqToSegment(e,t,r,s){Np.copy(e).add(t).multiplyScalar(.5),Zu.copy(t).sub(e).normalize(),Na.copy(this.origin).sub(Np);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Zu),f=Na.dot(this.direction),p=-Na.dot(Zu),h=Na.lengthSq(),m=Math.abs(1-u*u);let v,_,y,M;if(m>0)if(v=u*p-f,_=u*f-p,M=l*m,v>=0)if(_>=-M)if(_<=M){const b=1/m;v*=b,_*=b,y=v*(v+u*_+2*f)+_*(u*v+_+2*p)+h}else _=l,v=Math.max(0,-(u*_+f)),y=-v*v+_*(_+2*p)+h;else _=-l,v=Math.max(0,-(u*_+f)),y=-v*v+_*(_+2*p)+h;else _<=-M?(v=Math.max(0,-(-u*l+f)),_=v>0?-l:Math.min(Math.max(-l,-p),l),y=-v*v+_*(_+2*p)+h):_<=M?(v=0,_=Math.min(Math.max(-l,-p),l),y=_*(_+2*p)+h):(v=Math.max(0,-(u*l+f)),_=v>0?l:Math.min(Math.max(-l,-p),l),y=-v*v+_*(_+2*p)+h);else _=u>0?-l:l,v=Math.max(0,-(u*_+f)),y=-v*v+_*(_+2*p)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(Np).addScaledVector(Zu,_),y}intersectSphere(e,t){jr.subVectors(e.center,this.origin);const r=jr.dot(this.direction),s=jr.dot(jr)-r*r,l=e.radius*e.radius;if(s>l)return null;const u=Math.sqrt(l-s),f=r-u,p=r+u;return p<0?null:f<0?this.at(p,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,s,l,u,f,p;const h=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,_=this.origin;return h>=0?(r=(e.min.x-_.x)*h,s=(e.max.x-_.x)*h):(r=(e.max.x-_.x)*h,s=(e.min.x-_.x)*h),m>=0?(l=(e.min.y-_.y)*m,u=(e.max.y-_.y)*m):(l=(e.max.y-_.y)*m,u=(e.min.y-_.y)*m),r>u||l>s||((l>r||isNaN(r))&&(r=l),(u<s||isNaN(s))&&(s=u),v>=0?(f=(e.min.z-_.z)*v,p=(e.max.z-_.z)*v):(f=(e.max.z-_.z)*v,p=(e.min.z-_.z)*v),r>p||f>s)||((f>r||r!==r)&&(r=f),(p<s||s!==s)&&(s=p),s<0)?null:this.at(r>=0?r:s,t)}intersectsBox(e){return this.intersectBox(e,jr)!==null}intersectTriangle(e,t,r,s,l){Pp.subVectors(t,e),Ku.subVectors(r,e),Op.crossVectors(Pp,Ku);let u=this.direction.dot(Op),f;if(u>0){if(s)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Na.subVectors(this.origin,e);const p=f*this.direction.dot(Ku.crossVectors(Na,Ku));if(p<0)return null;const h=f*this.direction.dot(Pp.cross(Na));if(h<0||p+h>u)return null;const m=-f*Na.dot(Op);return m<0?null:this.at(m/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,r,s,l,u,f,p,h,m,v,_,y,M,b,S){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,s,l,u,f,p,h,m,v,_,y,M,b,S)}set(e,t,r,s,l,u,f,p,h,m,v,_,y,M,b,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=s,x[1]=l,x[5]=u,x[9]=f,x[13]=p,x[2]=h,x[6]=m,x[10]=v,x[14]=_,x[3]=y,x[7]=M,x[11]=b,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,s=1/po.setFromMatrixColumn(e,0).length(),l=1/po.setFromMatrixColumn(e,1).length(),u=1/po.setFromMatrixColumn(e,2).length();return t[0]=r[0]*s,t[1]=r[1]*s,t[2]=r[2]*s,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,s=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),p=Math.cos(s),h=Math.sin(s),m=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const _=u*m,y=u*v,M=f*m,b=f*v;t[0]=p*m,t[4]=-p*v,t[8]=h,t[1]=y+M*h,t[5]=_-b*h,t[9]=-f*p,t[2]=b-_*h,t[6]=M+y*h,t[10]=u*p}else if(e.order==="YXZ"){const _=p*m,y=p*v,M=h*m,b=h*v;t[0]=_+b*f,t[4]=M*f-y,t[8]=u*h,t[1]=u*v,t[5]=u*m,t[9]=-f,t[2]=y*f-M,t[6]=b+_*f,t[10]=u*p}else if(e.order==="ZXY"){const _=p*m,y=p*v,M=h*m,b=h*v;t[0]=_-b*f,t[4]=-u*v,t[8]=M+y*f,t[1]=y+M*f,t[5]=u*m,t[9]=b-_*f,t[2]=-u*h,t[6]=f,t[10]=u*p}else if(e.order==="ZYX"){const _=u*m,y=u*v,M=f*m,b=f*v;t[0]=p*m,t[4]=M*h-y,t[8]=_*h+b,t[1]=p*v,t[5]=b*h+_,t[9]=y*h-M,t[2]=-h,t[6]=f*p,t[10]=u*p}else if(e.order==="YZX"){const _=u*p,y=u*h,M=f*p,b=f*h;t[0]=p*m,t[4]=b-_*v,t[8]=M*v+y,t[1]=v,t[5]=u*m,t[9]=-f*m,t[2]=-h*m,t[6]=y*v+M,t[10]=_-b*v}else if(e.order==="XZY"){const _=u*p,y=u*h,M=f*p,b=f*h;t[0]=p*m,t[4]=-v,t[8]=h*m,t[1]=_*v+b,t[5]=u*m,t[9]=y*v-M,t[2]=M*v-y,t[6]=f*m,t[10]=b*v+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ZE,e,KE)}lookAt(e,t,r){const s=this.elements;return Li.subVectors(e,t),Li.lengthSq()===0&&(Li.z=1),Li.normalize(),Pa.crossVectors(r,Li),Pa.lengthSq()===0&&(Math.abs(r.z)===1?Li.x+=1e-4:Li.z+=1e-4,Li.normalize(),Pa.crossVectors(r,Li)),Pa.normalize(),Qu.crossVectors(Li,Pa),s[0]=Pa.x,s[4]=Qu.x,s[8]=Li.x,s[1]=Pa.y,s[5]=Qu.y,s[9]=Li.y,s[2]=Pa.z,s[6]=Qu.z,s[10]=Li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,s=t.elements,l=this.elements,u=r[0],f=r[4],p=r[8],h=r[12],m=r[1],v=r[5],_=r[9],y=r[13],M=r[2],b=r[6],S=r[10],x=r[14],U=r[3],C=r[7],E=r[11],N=r[15],z=s[0],P=s[4],G=s[8],D=s[12],L=s[1],H=s[5],oe=s[9],ae=s[13],ce=s[2],fe=s[6],B=s[10],Z=s[14],q=s[3],me=s[7],O=s[11],Q=s[15];return l[0]=u*z+f*L+p*ce+h*q,l[4]=u*P+f*H+p*fe+h*me,l[8]=u*G+f*oe+p*B+h*O,l[12]=u*D+f*ae+p*Z+h*Q,l[1]=m*z+v*L+_*ce+y*q,l[5]=m*P+v*H+_*fe+y*me,l[9]=m*G+v*oe+_*B+y*O,l[13]=m*D+v*ae+_*Z+y*Q,l[2]=M*z+b*L+S*ce+x*q,l[6]=M*P+b*H+S*fe+x*me,l[10]=M*G+b*oe+S*B+x*O,l[14]=M*D+b*ae+S*Z+x*Q,l[3]=U*z+C*L+E*ce+N*q,l[7]=U*P+C*H+E*fe+N*me,l[11]=U*G+C*oe+E*B+N*O,l[15]=U*D+C*ae+E*Z+N*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],s=e[8],l=e[12],u=e[1],f=e[5],p=e[9],h=e[13],m=e[2],v=e[6],_=e[10],y=e[14],M=e[3],b=e[7],S=e[11],x=e[15];return M*(+l*p*v-s*h*v-l*f*_+r*h*_+s*f*y-r*p*y)+b*(+t*p*y-t*h*_+l*u*_-s*u*y+s*h*m-l*p*m)+S*(+t*h*v-t*f*y-l*u*v+r*u*y+l*f*m-r*h*m)+x*(-s*f*m-t*p*v+t*f*_+s*u*v-r*u*_+r*p*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],s=e[2],l=e[3],u=e[4],f=e[5],p=e[6],h=e[7],m=e[8],v=e[9],_=e[10],y=e[11],M=e[12],b=e[13],S=e[14],x=e[15],U=v*S*h-b*_*h+b*p*y-f*S*y-v*p*x+f*_*x,C=M*_*h-m*S*h-M*p*y+u*S*y+m*p*x-u*_*x,E=m*b*h-M*v*h+M*f*y-u*b*y-m*f*x+u*v*x,N=M*v*p-m*b*p-M*f*_+u*b*_+m*f*S-u*v*S,z=t*U+r*C+s*E+l*N;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/z;return e[0]=U*P,e[1]=(b*_*l-v*S*l-b*s*y+r*S*y+v*s*x-r*_*x)*P,e[2]=(f*S*l-b*p*l+b*s*h-r*S*h-f*s*x+r*p*x)*P,e[3]=(v*p*l-f*_*l-v*s*h+r*_*h+f*s*y-r*p*y)*P,e[4]=C*P,e[5]=(m*S*l-M*_*l+M*s*y-t*S*y-m*s*x+t*_*x)*P,e[6]=(M*p*l-u*S*l-M*s*h+t*S*h+u*s*x-t*p*x)*P,e[7]=(u*_*l-m*p*l+m*s*h-t*_*h-u*s*y+t*p*y)*P,e[8]=E*P,e[9]=(M*v*l-m*b*l-M*r*y+t*b*y+m*r*x-t*v*x)*P,e[10]=(u*b*l-M*f*l+M*r*h-t*b*h-u*r*x+t*f*x)*P,e[11]=(m*f*l-u*v*l-m*r*h+t*v*h+u*r*y-t*f*y)*P,e[12]=N*P,e[13]=(m*b*s-M*v*s+M*r*_-t*b*_-m*r*S+t*v*S)*P,e[14]=(M*f*s-u*b*s-M*r*p+t*b*p+u*r*S-t*f*S)*P,e[15]=(u*v*s-m*f*s+m*r*p-t*v*p-u*r*_+t*f*_)*P,this}scale(e){const t=this.elements,r=e.x,s=e.y,l=e.z;return t[0]*=r,t[4]*=s,t[8]*=l,t[1]*=r,t[5]*=s,t[9]*=l,t[2]*=r,t[6]*=s,t[10]*=l,t[3]*=r,t[7]*=s,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,s))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),s=Math.sin(t),l=1-r,u=e.x,f=e.y,p=e.z,h=l*u,m=l*f;return this.set(h*u+r,h*f-s*p,h*p+s*f,0,h*f+s*p,m*f+r,m*p-s*u,0,h*p-s*f,m*p+s*u,l*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,s,l,u){return this.set(1,r,l,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,r){const s=this.elements,l=t._x,u=t._y,f=t._z,p=t._w,h=l+l,m=u+u,v=f+f,_=l*h,y=l*m,M=l*v,b=u*m,S=u*v,x=f*v,U=p*h,C=p*m,E=p*v,N=r.x,z=r.y,P=r.z;return s[0]=(1-(b+x))*N,s[1]=(y+E)*N,s[2]=(M-C)*N,s[3]=0,s[4]=(y-E)*z,s[5]=(1-(_+x))*z,s[6]=(S+U)*z,s[7]=0,s[8]=(M+C)*P,s[9]=(S-U)*P,s[10]=(1-(_+b))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,r){const s=this.elements;let l=po.set(s[0],s[1],s[2]).length();const u=po.set(s[4],s[5],s[6]).length(),f=po.set(s[8],s[9],s[10]).length();this.determinant()<0&&(l=-l),e.x=s[12],e.y=s[13],e.z=s[14],ir.copy(this);const h=1/l,m=1/u,v=1/f;return ir.elements[0]*=h,ir.elements[1]*=h,ir.elements[2]*=h,ir.elements[4]*=m,ir.elements[5]*=m,ir.elements[6]*=m,ir.elements[8]*=v,ir.elements[9]*=v,ir.elements[10]*=v,t.setFromRotationMatrix(ir),r.x=l,r.y=u,r.z=f,this}makePerspective(e,t,r,s,l,u,f=Er,p=!1){const h=this.elements,m=2*l/(t-e),v=2*l/(r-s),_=(t+e)/(t-e),y=(r+s)/(r-s);let M,b;if(p)M=l/(u-l),b=u*l/(u-l);else if(f===Er)M=-(u+l)/(u-l),b=-2*u*l/(u-l);else if(f===qf)M=-u/(u-l),b=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=v,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=b,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,s,l,u,f=Er,p=!1){const h=this.elements,m=2/(t-e),v=2/(r-s),_=-(t+e)/(t-e),y=-(r+s)/(r-s);let M,b;if(p)M=1/(u-l),b=u/(u-l);else if(f===Er)M=-2/(u-l),b=-(u+l)/(u-l);else if(f===qf)M=-1/(u-l),b=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=v,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=M,h[14]=b,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let s=0;s<16;s++)if(t[s]!==r[s])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const po=new V,ir=new dt,ZE=new V(0,0,0),KE=new V(1,1,1),Pa=new V,Qu=new V,Li=new V,dy=new dt,py=new Cr;class Ii{constructor(e=0,t=0,r=0,s=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,s=this._order){return this._x=e,this._y=t,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const s=e.elements,l=s[0],u=s[4],f=s[8],p=s[1],h=s[5],m=s[9],v=s[2],_=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(_t(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-_t(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(_t(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return dy.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dy,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return py.setFromEuler(this),this.setFromQuaternion(py,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class X0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let QE=0;const my=new V,mo=new Cr,Zr=new dt,Ju=new V,$l=new V,JE=new V,$E=new Cr,gy=new V(1,0,0),vy=new V(0,1,0),_y=new V(0,0,1),yy={type:"added"},e3={type:"removed"},go={type:"childadded",child:null},Ip={type:"childremoved",child:null};class dn extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QE++}),this.uuid=hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new V,t=new Ii,r=new Cr,s=new V(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new ht}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new X0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mo.setFromAxisAngle(e,t),this.quaternion.multiply(mo),this}rotateOnWorldAxis(e,t){return mo.setFromAxisAngle(e,t),this.quaternion.premultiply(mo),this}rotateX(e){return this.rotateOnAxis(gy,e)}rotateY(e){return this.rotateOnAxis(vy,e)}rotateZ(e){return this.rotateOnAxis(_y,e)}translateOnAxis(e,t){return my.copy(e).applyQuaternion(this.quaternion),this.position.add(my.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gy,e)}translateY(e){return this.translateOnAxis(vy,e)}translateZ(e){return this.translateOnAxis(_y,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Ju.copy(e):Ju.set(e,t,r);const s=this.parent;this.updateWorldMatrix(!0,!1),$l.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zr.lookAt($l,Ju,this.up):Zr.lookAt(Ju,$l,this.up),this.quaternion.setFromRotationMatrix(Zr),s&&(Zr.extractRotation(s.matrixWorld),mo.setFromRotationMatrix(Zr),this.quaternion.premultiply(mo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yy),go.child=e,this.dispatchEvent(go),go.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(e3),Ip.child=e,this.dispatchEvent(Ip),Ip.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yy),go.child=e,this.dispatchEvent(go),go.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,s=this.children.length;r<s;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const s=this.children;for(let l=0,u=s.length;l<u;l++)s[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($l,e,JE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($l,$E,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,s=t.length;r<s;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,s=t.length;r<s;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,s=t.length;r<s;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let l=0,u=s.length;l<u;l++)s[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(f=>({...f})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let h=0,m=p.length;h<m;h++){const v=p[h];l(e.shapes,v)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,h=this.material.length;p<h;p++)f.push(l(e.materials,this.material[p]));s.material=f}else s.material=l(e.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];s.animations.push(l(e.animations,p))}}if(t){const f=u(e.geometries),p=u(e.materials),h=u(e.textures),m=u(e.images),v=u(e.shapes),_=u(e.skeletons),y=u(e.animations),M=u(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),h.length>0&&(r.textures=h),m.length>0&&(r.images=m),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),y.length>0&&(r.animations=y),M.length>0&&(r.nodes=M)}return r.object=s,r;function u(f){const p=[];for(const h in f){const m=f[h];delete m.metadata,p.push(m)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const s=e.children[r];this.add(s.clone())}return this}}dn.DEFAULT_UP=new V(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rr=new V,Kr=new V,zp=new V,Qr=new V,vo=new V,_o=new V,xy=new V,Bp=new V,Fp=new V,Hp=new V,Vp=new Nt,Gp=new Nt,kp=new Nt;class ur{constructor(e=new V,t=new V,r=new V){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,s){s.subVectors(r,t),rr.subVectors(e,t),s.cross(rr);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(e,t,r,s,l){rr.subVectors(s,t),Kr.subVectors(r,t),zp.subVectors(e,t);const u=rr.dot(rr),f=rr.dot(Kr),p=rr.dot(zp),h=Kr.dot(Kr),m=Kr.dot(zp),v=u*h-f*f;if(v===0)return l.set(0,0,0),null;const _=1/v,y=(h*p-f*m)*_,M=(u*m-f*p)*_;return l.set(1-y-M,M,y)}static containsPoint(e,t,r,s){return this.getBarycoord(e,t,r,s,Qr)===null?!1:Qr.x>=0&&Qr.y>=0&&Qr.x+Qr.y<=1}static getInterpolation(e,t,r,s,l,u,f,p){return this.getBarycoord(e,t,r,s,Qr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Qr.x),p.addScaledVector(u,Qr.y),p.addScaledVector(f,Qr.z),p)}static getInterpolatedAttribute(e,t,r,s,l,u){return Vp.setScalar(0),Gp.setScalar(0),kp.setScalar(0),Vp.fromBufferAttribute(e,t),Gp.fromBufferAttribute(e,r),kp.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(Vp,l.x),u.addScaledVector(Gp,l.y),u.addScaledVector(kp,l.z),u}static isFrontFacing(e,t,r,s){return rr.subVectors(r,t),Kr.subVectors(e,t),rr.cross(Kr).dot(s)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,s){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,r,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rr.subVectors(this.c,this.b),Kr.subVectors(this.a,this.b),rr.cross(Kr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ur.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ur.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,s,l){return ur.getInterpolation(e,this.a,this.b,this.c,t,r,s,l)}containsPoint(e){return ur.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ur.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,s=this.b,l=this.c;let u,f;vo.subVectors(s,r),_o.subVectors(l,r),Bp.subVectors(e,r);const p=vo.dot(Bp),h=_o.dot(Bp);if(p<=0&&h<=0)return t.copy(r);Fp.subVectors(e,s);const m=vo.dot(Fp),v=_o.dot(Fp);if(m>=0&&v<=m)return t.copy(s);const _=p*v-m*h;if(_<=0&&p>=0&&m<=0)return u=p/(p-m),t.copy(r).addScaledVector(vo,u);Hp.subVectors(e,l);const y=vo.dot(Hp),M=_o.dot(Hp);if(M>=0&&y<=M)return t.copy(l);const b=y*h-p*M;if(b<=0&&h>=0&&M<=0)return f=h/(h-M),t.copy(r).addScaledVector(_o,f);const S=m*M-y*v;if(S<=0&&v-m>=0&&y-M>=0)return xy.subVectors(l,s),f=(v-m)/(v-m+(y-M)),t.copy(s).addScaledVector(xy,f);const x=1/(S+b+_);return u=b*x,f=_*x,t.copy(r).addScaledVector(vo,u).addScaledVector(_o,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const LS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oa={h:0,s:0,l:0},$u={h:0,s:0,l:0};function Xp(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class st{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,t),this}setRGB(e,t,r,s=At.workingColorSpace){return this.r=e,this.g=t,this.b=r,At.colorSpaceToWorking(this,s),this}setHSL(e,t,r,s=At.workingColorSpace){if(e=G0(e,1),t=_t(t,0,1),r=_t(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Xp(u,l,e+1/3),this.g=Xp(u,l,e),this.b=Xp(u,l,e-1/3)}return At.colorSpaceToWorking(this,s),this}setStyle(e,t=un){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=s[1],f=s[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=s[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){const r=LS[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ra(e.r),this.g=ra(e.g),this.b=ra(e.b),this}copyLinearToSRGB(e){return this.r=Po(e.r),this.g=Po(e.g),this.b=Po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return At.workingToColorSpace(ii.copy(this),e),Math.round(_t(ii.r*255,0,255))*65536+Math.round(_t(ii.g*255,0,255))*256+Math.round(_t(ii.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.workingToColorSpace(ii.copy(this),t);const r=ii.r,s=ii.g,l=ii.b,u=Math.max(r,s,l),f=Math.min(r,s,l);let p,h;const m=(f+u)/2;if(f===u)p=0,h=0;else{const v=u-f;switch(h=m<=.5?v/(u+f):v/(2-u-f),u){case r:p=(s-l)/v+(s<l?6:0);break;case s:p=(l-r)/v+2;break;case l:p=(r-s)/v+4;break}p/=6}return e.h=p,e.s=h,e.l=m,e}getRGB(e,t=At.workingColorSpace){return At.workingToColorSpace(ii.copy(this),t),e.r=ii.r,e.g=ii.g,e.b=ii.b,e}getStyle(e=un){At.workingToColorSpace(ii.copy(this),e);const t=ii.r,r=ii.g,s=ii.b;return e!==un?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(s*255)})`}offsetHSL(e,t,r){return this.getHSL(Oa),this.setHSL(Oa.h+e,Oa.s+t,Oa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Oa),e.getHSL($u);const r=gc(Oa.h,$u.h,t),s=gc(Oa.s,$u.s,t),l=gc(Oa.l,$u.l,t);return this.setHSL(r,s,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,s=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*s,this.g=l[1]*t+l[4]*r+l[7]*s,this.b=l[2]*t+l[5]*r+l[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ii=new st;st.NAMES=LS;let t3=0;class Ar extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:t3++}),this.uuid=hr(),this.name="",this.type="Material",this.blending=Lo,this.side=aa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Am,this.blendDst=wm,this.blendEquation=Ga,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lo,this.stencilZFail=lo,this.stencilZPass=lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(r):s&&s.isVector3&&r&&r.isVector3?s.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Lo&&(r.blending=this.blending),this.side!==aa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Am&&(r.blendSrc=this.blendSrc),this.blendDst!==wm&&(r.blendDst=this.blendDst),this.blendEquation!==Ga&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Vo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sy&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==lo&&(r.stencilFail=this.stencilFail),this.stencilZFail!==lo&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==lo&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function s(l){const u=[];for(const f in l){const p=l[f];delete p.metadata,u.push(p)}return u}if(t){const l=s(e.textures),u=s(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const s=t.length;r=new Array(s);for(let l=0;l!==s;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ji extends Ar{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=mS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const An=new V,ef=new Be;let n3=0;class Mn{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:n3++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=u0,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[e+s]=t.array[r+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)ef.fromBufferAttribute(this,t),ef.applyMatrix3(e),this.setXY(t,ef.x,ef.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)An.fromBufferAttribute(this,t),An.applyMatrix3(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=cr(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ft(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=s,this}setXYZW(e,t,r,s,l){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array),s=Ft(s,this.array),l=Ft(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=s,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==u0&&(e.usage=this.usage),e}}class NS extends Mn{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class PS extends Mn{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Si extends Mn{constructor(e,t,r){super(new Float32Array(e),t,r)}}let i3=0;const Wi=new dt,Wp=new dn,yo=new V,Ni=new sa,ec=new sa,Gn=new V;class zi extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i3++}),this.uuid=hr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(DS(e)?PS:NS)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ht().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wi.makeRotationFromQuaternion(e),this.applyMatrix4(Wi),this}rotateX(e){return Wi.makeRotationX(e),this.applyMatrix4(Wi),this}rotateY(e){return Wi.makeRotationY(e),this.applyMatrix4(Wi),this}rotateZ(e){return Wi.makeRotationZ(e),this.applyMatrix4(Wi),this}translate(e,t,r){return Wi.makeTranslation(e,t,r),this.applyMatrix4(Wi),this}scale(e,t,r){return Wi.makeScale(e,t,r),this.applyMatrix4(Wi),this}lookAt(e){return Wp.lookAt(e),Wp.updateMatrix(),this.applyMatrix4(Wp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yo).negate(),this.translate(yo.x,yo.y,yo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let s=0,l=e.length;s<l;s++){const u=e[s];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Si(r,3))}else{const r=Math.min(e.length,t.count);for(let s=0;s<r;s++){const l=e[s];t.setXYZ(s,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const l=t[r];Ni.setFromBufferAttribute(l),this.morphTargetsRelative?(Gn.addVectors(this.boundingBox.min,Ni.min),this.boundingBox.expandByPoint(Gn),Gn.addVectors(this.boundingBox.max,Ni.max),this.boundingBox.expandByPoint(Gn)):(this.boundingBox.expandByPoint(Ni.min),this.boundingBox.expandByPoint(Ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const r=this.boundingSphere.center;if(Ni.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];ec.setFromBufferAttribute(f),this.morphTargetsRelative?(Gn.addVectors(Ni.min,ec.min),Ni.expandByPoint(Gn),Gn.addVectors(Ni.max,ec.max),Ni.expandByPoint(Gn)):(Ni.expandByPoint(ec.min),Ni.expandByPoint(ec.max))}Ni.getCenter(r);let s=0;for(let l=0,u=e.count;l<u;l++)Gn.fromBufferAttribute(e,l),s=Math.max(s,r.distanceToSquared(Gn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],p=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)Gn.fromBufferAttribute(f,h),p&&(yo.fromBufferAttribute(e,h),Gn.add(yo)),s=Math.max(s,r.distanceToSquared(Gn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,s=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let G=0;G<r.count;G++)f[G]=new V,p[G]=new V;const h=new V,m=new V,v=new V,_=new Be,y=new Be,M=new Be,b=new V,S=new V;function x(G,D,L){h.fromBufferAttribute(r,G),m.fromBufferAttribute(r,D),v.fromBufferAttribute(r,L),_.fromBufferAttribute(l,G),y.fromBufferAttribute(l,D),M.fromBufferAttribute(l,L),m.sub(h),v.sub(h),y.sub(_),M.sub(_);const H=1/(y.x*M.y-M.x*y.y);isFinite(H)&&(b.copy(m).multiplyScalar(M.y).addScaledVector(v,-y.y).multiplyScalar(H),S.copy(v).multiplyScalar(y.x).addScaledVector(m,-M.x).multiplyScalar(H),f[G].add(b),f[D].add(b),f[L].add(b),p[G].add(S),p[D].add(S),p[L].add(S))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let G=0,D=U.length;G<D;++G){const L=U[G],H=L.start,oe=L.count;for(let ae=H,ce=H+oe;ae<ce;ae+=3)x(e.getX(ae+0),e.getX(ae+1),e.getX(ae+2))}const C=new V,E=new V,N=new V,z=new V;function P(G){N.fromBufferAttribute(s,G),z.copy(N);const D=f[G];C.copy(D),C.sub(N.multiplyScalar(N.dot(D))).normalize(),E.crossVectors(z,D);const H=E.dot(p[G])<0?-1:1;u.setXYZW(G,C.x,C.y,C.z,H)}for(let G=0,D=U.length;G<D;++G){const L=U[G],H=L.start,oe=L.count;for(let ae=H,ce=H+oe;ae<ce;ae+=3)P(e.getX(ae+0)),P(e.getX(ae+1)),P(e.getX(ae+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Mn(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let _=0,y=r.count;_<y;_++)r.setXYZ(_,0,0,0);const s=new V,l=new V,u=new V,f=new V,p=new V,h=new V,m=new V,v=new V;if(e)for(let _=0,y=e.count;_<y;_+=3){const M=e.getX(_+0),b=e.getX(_+1),S=e.getX(_+2);s.fromBufferAttribute(t,M),l.fromBufferAttribute(t,b),u.fromBufferAttribute(t,S),m.subVectors(u,l),v.subVectors(s,l),m.cross(v),f.fromBufferAttribute(r,M),p.fromBufferAttribute(r,b),h.fromBufferAttribute(r,S),f.add(m),p.add(m),h.add(m),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let _=0,y=t.count;_<y;_+=3)s.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),m.subVectors(u,l),v.subVectors(s,l),m.cross(v),r.setXYZ(_+0,m.x,m.y,m.z),r.setXYZ(_+1,m.x,m.y,m.z),r.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Gn.fromBufferAttribute(e,t),Gn.normalize(),e.setXYZ(t,Gn.x,Gn.y,Gn.z)}toNonIndexed(){function e(f,p){const h=f.array,m=f.itemSize,v=f.normalized,_=new h.constructor(p.length*m);let y=0,M=0;for(let b=0,S=p.length;b<S;b++){f.isInterleavedBufferAttribute?y=p[b]*f.data.stride+f.offset:y=p[b]*m;for(let x=0;x<m;x++)_[M++]=h[y++]}return new Mn(_,m,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zi,r=this.index.array,s=this.attributes;for(const f in s){const p=s[f],h=e(p,r);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const p=[],h=l[f];for(let m=0,v=h.length;m<v;m++){const _=h[m],y=e(_,r);p.push(y)}t.morphAttributes[f]=p}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const h=u[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const h=r[p];e.data.attributes[p]=h.toJSON(e.data)}const s={};let l=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],m=[];for(let v=0,_=h.length;v<_;v++){const y=h[v];m.push(y.toJSON(e.data))}m.length>0&&(s[p]=m,l=!0)}l&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const s=e.attributes;for(const h in s){const m=s[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],v=l[h];for(let _=0,y=v.length;_<y;_++)m.push(v[_].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,m=u.length;h<m;h++){const v=u[h];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sy=new dt,ps=new Qo,tf=new Dr,My=new V,nf=new V,rf=new V,af=new V,Yp=new V,sf=new V,Ty=new V,of=new V;class Vt extends dn{constructor(e=new zi,t=new ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const s=t[r[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,s=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(s,e);const f=this.morphTargetInfluences;if(l&&f){sf.set(0,0,0);for(let p=0,h=l.length;p<h;p++){const m=f[p],v=l[p];m!==0&&(Yp.fromBufferAttribute(v,e),u?sf.addScaledVector(Yp,m):sf.addScaledVector(Yp.sub(t),m))}t.add(sf)}return t}raycast(e,t){const r=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),tf.copy(r.boundingSphere),tf.applyMatrix4(l),ps.copy(e.ray).recast(e.near),!(tf.containsPoint(ps.origin)===!1&&(ps.intersectSphere(tf,My)===null||ps.origin.distanceToSquared(My)>(e.far-e.near)**2))&&(Sy.copy(l).invert(),ps.copy(e.ray).applyMatrix4(Sy),!(r.boundingBox!==null&&ps.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ps)))}_computeIntersections(e,t,r){let s;const l=this.geometry,u=this.material,f=l.index,p=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,v=l.attributes.normal,_=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,b=_.length;M<b;M++){const S=_[M],x=u[S.materialIndex],U=Math.max(S.start,y.start),C=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let E=U,N=C;E<N;E+=3){const z=f.getX(E),P=f.getX(E+1),G=f.getX(E+2);s=lf(this,x,e,r,h,m,v,z,P,G),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,y.start),b=Math.min(f.count,y.start+y.count);for(let S=M,x=b;S<x;S+=3){const U=f.getX(S),C=f.getX(S+1),E=f.getX(S+2);s=lf(this,u,e,r,h,m,v,U,C,E),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(p!==void 0)if(Array.isArray(u))for(let M=0,b=_.length;M<b;M++){const S=_[M],x=u[S.materialIndex],U=Math.max(S.start,y.start),C=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let E=U,N=C;E<N;E+=3){const z=E,P=E+1,G=E+2;s=lf(this,x,e,r,h,m,v,z,P,G),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,y.start),b=Math.min(p.count,y.start+y.count);for(let S=M,x=b;S<x;S+=3){const U=S,C=S+1,E=S+2;s=lf(this,u,e,r,h,m,v,U,C,E),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function r3(a,e,t,r,s,l,u,f){let p;if(e.side===xi?p=r.intersectTriangle(u,l,s,!0,f):p=r.intersectTriangle(s,l,u,e.side===aa,f),p===null)return null;of.copy(f),of.applyMatrix4(a.matrixWorld);const h=t.ray.origin.distanceTo(of);return h<t.near||h>t.far?null:{distance:h,point:of.clone(),object:a}}function lf(a,e,t,r,s,l,u,f,p,h){a.getVertexPosition(f,nf),a.getVertexPosition(p,rf),a.getVertexPosition(h,af);const m=r3(a,e,t,r,nf,rf,af,Ty);if(m){const v=new V;ur.getBarycoord(Ty,nf,rf,af,v),s&&(m.uv=ur.getInterpolatedAttribute(s,f,p,h,v,new Be)),l&&(m.uv1=ur.getInterpolatedAttribute(l,f,p,h,v,new Be)),u&&(m.normal=ur.getInterpolatedAttribute(u,f,p,h,v,new V),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const _={a:f,b:p,c:h,normal:new V,materialIndex:0};ur.getNormal(nf,rf,af,_.normal),m.face=_,m.barycoord=v}return m}class Nc extends zi{constructor(e=1,t=1,r=1,s=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:s,heightSegments:l,depthSegments:u};const f=this;s=Math.floor(s),l=Math.floor(l),u=Math.floor(u);const p=[],h=[],m=[],v=[];let _=0,y=0;M("z","y","x",-1,-1,r,t,e,u,l,0),M("z","y","x",1,-1,r,t,-e,u,l,1),M("x","z","y",1,1,e,r,t,s,u,2),M("x","z","y",1,-1,e,r,-t,s,u,3),M("x","y","z",1,-1,e,t,r,s,l,4),M("x","y","z",-1,-1,e,t,-r,s,l,5),this.setIndex(p),this.setAttribute("position",new Si(h,3)),this.setAttribute("normal",new Si(m,3)),this.setAttribute("uv",new Si(v,2));function M(b,S,x,U,C,E,N,z,P,G,D){const L=E/P,H=N/G,oe=E/2,ae=N/2,ce=z/2,fe=P+1,B=G+1;let Z=0,q=0;const me=new V;for(let O=0;O<B;O++){const Q=O*H-ae;for(let pe=0;pe<fe;pe++){const xe=pe*L-oe;me[b]=xe*U,me[S]=Q*C,me[x]=ce,h.push(me.x,me.y,me.z),me[b]=0,me[S]=0,me[x]=z>0?1:-1,m.push(me.x,me.y,me.z),v.push(pe/P),v.push(1-O/G),Z+=1}}for(let O=0;O<G;O++)for(let Q=0;Q<P;Q++){const pe=_+Q+fe*O,xe=_+Q+fe*(O+1),Ae=_+(Q+1)+fe*(O+1),$=_+(Q+1)+fe*O;p.push(pe,xe,$),p.push(xe,Ae,$),q+=6}f.addGroup(y,q,D),y+=q,_+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yo(a){const e={};for(const t in a){e[t]={};for(const r in a[t]){const s=a[t][r];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=s.clone():Array.isArray(s)?e[t][r]=s.slice():e[t][r]=s}}return e}function ui(a){const e={};for(let t=0;t<a.length;t++){const r=Yo(a[t]);for(const s in r)e[s]=r[s]}return e}function a3(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function OS(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const s3={clone:Yo,merge:ui};var o3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,l3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ut extends Ar{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o3,this.fragmentShader=l3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yo(e.uniforms),this.uniformsGroups=a3(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const s in this.extensions)this.extensions[s]===!0&&(r[s]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class IS extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=Er,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ia=new V,by=new Be,Ey=new Be;class fn extends IS{constructor(e=50,t=1,r=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wo*2*Math.atan(Math.tan(mc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Ia.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ia.x,Ia.y).multiplyScalar(-e/Ia.z),Ia.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ia.x,Ia.y).multiplyScalar(-e/Ia.z)}getViewSize(e,t){return this.getViewBounds(e,by,Ey),t.subVectors(Ey,by)}setViewOffset(e,t,r,s,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=s,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(mc*.5*this.fov)/this.zoom,r=2*t,s=this.aspect*r,l=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,h=u.fullHeight;l+=u.offsetX*s/p,t-=u.offsetY*r/h,s*=u.width/p,r*=u.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xo=-90,So=1;class c3 extends dn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new fn(xo,So,e,t);s.layers=this.layers,this.add(s);const l=new fn(xo,So,e,t);l.layers=this.layers,this.add(l);const u=new fn(xo,So,e,t);u.layers=this.layers,this.add(u);const f=new fn(xo,So,e,t);f.layers=this.layers,this.add(f);const p=new fn(xo,So,e,t);p.layers=this.layers,this.add(p);const h=new fn(xo,So,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,s,l,u,f,p]=t;for(const h of t)this.remove(h);if(e===Er)r.up.set(0,1,0),r.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===qf)r.up.set(0,-1,0),r.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,p,h,m]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,s),e.render(t,l),e.setRenderTarget(r,1,s),e.render(t,u),e.setRenderTarget(r,2,s),e.render(t,f),e.setRenderTarget(r,3,s),e.render(t,p),e.setRenderTarget(r,4,s),e.render(t,h),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,s),e.render(t,m),e.setRenderTarget(v,_,y),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class zS extends Wn{constructor(e=[],t=Go,r,s,l,u,f,p,h,m){super(e,t,r,s,l,u,f,p,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class u3 extends pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},s=[r,r,r,r,r,r];this.texture=new zS(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Nc(5,5,5),l=new Ut({name:"CubemapFromEquirect",uniforms:Yo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:xi,blending:qa});l.uniforms.tEquirect.value=t;const u=new Vt(s,l),f=t.minFilter;return t.minFilter===br&&(t.minFilter=ai),new c3(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,s=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,s);e.setRenderTarget(l)}}class Ms extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const f3={type:"move"};class qp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let s=null,l=null,u=null;const f=this._targetRay,p=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const b of e.hand.values()){const S=t.getJointPose(b,r),x=this._getHandJoint(h,b);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const m=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],_=m.position.distanceTo(v.position),y=.02,M=.005;h.inputState.pinching&&_>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(s=t.getPose(e.targetRaySpace,r),s===null&&l!==null&&(s=l),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(f3)))}return f!==null&&(f.visible=s!==null),p!==null&&(p.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Ms;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class bi extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class BS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=u0,this.updateRanges=[],this.version=0,this.uuid=hr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let s=0,l=this.stride;s<l;s++)this.array[e+s]=t.array[r+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ci=new V;class hh{constructor(e,t,r,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)ci.fromBufferAttribute(this,t),ci.applyMatrix4(e),this.setXYZ(t,ci.x,ci.y,ci.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)ci.fromBufferAttribute(this,t),ci.applyNormalMatrix(e),this.setXYZ(t,ci.x,ci.y,ci.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)ci.fromBufferAttribute(this,t),ci.transformDirection(e),this.setXYZ(t,ci.x,ci.y,ci.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=cr(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ft(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=cr(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=cr(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=cr(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=cr(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=s,this}setXYZW(e,t,r,s,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array),s=Ft(s,this.array),l=Ft(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=s,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const s=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[s+l])}return new Mn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new hh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const s=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[s+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ay=new V,wy=new Nt,Ry=new Nt,h3=new V,Cy=new dt,cf=new V,jp=new Dr,Dy=new dt,Zp=new Qo;class d3 extends Vt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ny,this.bindMatrix=new dt,this.bindMatrixInverse=new dt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new sa),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let r=0;r<t.count;r++)this.getVertexPosition(r,cf),this.boundingBox.expandByPoint(cf)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Dr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let r=0;r<t.count;r++)this.getVertexPosition(r,cf),this.boundingSphere.expandByPoint(cf)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const r=this.material,s=this.matrixWorld;r!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jp.copy(this.boundingSphere),jp.applyMatrix4(s),e.ray.intersectsSphere(jp)!==!1&&(Dy.copy(s).invert(),Zp.copy(e.ray).applyMatrix4(Dy),!(this.boundingBox!==null&&Zp.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Zp)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Nt,t=this.geometry.attributes.skinWeight;for(let r=0,s=t.count;r<s;r++){e.fromBufferAttribute(t,r);const l=1/e.manhattanLength();l!==1/0?e.multiplyScalar(l):e.set(1,0,0,0),t.setXYZW(r,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ny?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===fE?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const r=this.skeleton,s=this.geometry;wy.fromBufferAttribute(s.attributes.skinIndex,e),Ry.fromBufferAttribute(s.attributes.skinWeight,e),Ay.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let l=0;l<4;l++){const u=Ry.getComponent(l);if(u!==0){const f=wy.getComponent(l);Cy.multiplyMatrices(r.bones[f].matrixWorld,r.boneInverses[f]),t.addScaledVector(h3.copy(Ay).applyMatrix4(Cy),u)}}return t.applyMatrix4(this.bindMatrixInverse)}}class FS extends dn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class HS extends Wn{constructor(e=null,t=1,r=1,s,l,u,f,p,h=Zt,m=Zt,v,_){super(null,u,f,p,h,m,s,l,v,_),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Uy=new dt,p3=new dt;class W0{constructor(e=[],t=[]){this.uuid=hr(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let r=0,s=this.bones.length;r<s;r++)this.boneInverses.push(new dt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const r=new dt;this.bones[e]&&r.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(r)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const r=this.bones[e];r&&r.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const r=this.bones[e];r&&(r.parent&&r.parent.isBone?(r.matrix.copy(r.parent.matrixWorld).invert(),r.matrix.multiply(r.matrixWorld)):r.matrix.copy(r.matrixWorld),r.matrix.decompose(r.position,r.quaternion,r.scale))}}update(){const e=this.bones,t=this.boneInverses,r=this.boneMatrices,s=this.boneTexture;for(let l=0,u=e.length;l<u;l++){const f=e[l]?e[l].matrixWorld:p3;Uy.multiplyMatrices(f,t[l]),Uy.toArray(r,l*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new W0(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const r=new HS(t,e,e,Oi,hn);return r.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=r,this}getBoneByName(e){for(let t=0,r=this.bones.length;t<r;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let r=0,s=e.bones.length;r<s;r++){const l=e.bones[r];let u=t[l];u===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",l),u=new FS),this.bones.push(u),this.boneInverses.push(new dt().fromArray(e.boneInverses[r]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,r=this.boneInverses;for(let s=0,l=t.length;s<l;s++){const u=t[s];e.bones.push(u.uuid);const f=r[s];e.boneInverses.push(f.toArray())}return e}}class Rc extends Mn{constructor(e,t,r,s=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Mo=new dt,Ly=new dt,uf=[],Ny=new sa,m3=new dt,tc=new Vt,nc=new Dr;class g3 extends Vt{constructor(e,t,r){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rc(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<r;s++)this.setMatrixAt(s,m3)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new sa),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,Mo),Ny.copy(e.boundingBox).applyMatrix4(Mo),this.boundingBox.union(Ny)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,Mo),nc.copy(e.boundingSphere).applyMatrix4(Mo),this.boundingSphere.union(nc)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const r=t.morphTargetInfluences,s=this.morphTexture.source.data.data,l=r.length+1,u=e*l+1;for(let f=0;f<r.length;f++)r[f]=s[u+f]}raycast(e,t){const r=this.matrixWorld,s=this.count;if(tc.geometry=this.geometry,tc.material=this.material,tc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nc.copy(this.boundingSphere),nc.applyMatrix4(r),e.ray.intersectsSphere(nc)!==!1))for(let l=0;l<s;l++){this.getMatrixAt(l,Mo),Ly.multiplyMatrices(r,Mo),tc.matrixWorld=Ly,tc.raycast(e,uf);for(let u=0,f=uf.length;u<f;u++){const p=uf[u];p.instanceId=l,p.object=this,t.push(p)}uf.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Rc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const r=t.morphTargetInfluences,s=r.length+1;this.morphTexture===null&&(this.morphTexture=new HS(new Float32Array(s*this.count),s,this.count,B0,hn));const l=this.morphTexture.source.data.data;let u=0;for(let h=0;h<r.length;h++)u+=r[h];const f=this.geometry.morphTargetsRelative?1:1-u,p=s*e;l[p]=f,l.set(r,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Kp=new V,v3=new V,_3=new ht;class Ha{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,s){return this.normal.set(e,t,r),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const s=Kp.subVectors(r,t).cross(v3.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Kp),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/s;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||_3.getNormalMatrix(e),s=this.coplanarPoint(Kp).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-s.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new Dr,y3=new Be(.5,.5),ff=new V;class Y0{constructor(e=new Ha,t=new Ha,r=new Ha,s=new Ha,l=new Ha,u=new Ha){this.planes=[e,t,r,s,l,u]}set(e,t,r,s,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(s),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Er,r=!1){const s=this.planes,l=e.elements,u=l[0],f=l[1],p=l[2],h=l[3],m=l[4],v=l[5],_=l[6],y=l[7],M=l[8],b=l[9],S=l[10],x=l[11],U=l[12],C=l[13],E=l[14],N=l[15];if(s[0].setComponents(h-u,y-m,x-M,N-U).normalize(),s[1].setComponents(h+u,y+m,x+M,N+U).normalize(),s[2].setComponents(h+f,y+v,x+b,N+C).normalize(),s[3].setComponents(h-f,y-v,x-b,N-C).normalize(),r)s[4].setComponents(p,_,S,E).normalize(),s[5].setComponents(h-p,y-_,x-S,N-E).normalize();else if(s[4].setComponents(h-p,y-_,x-S,N-E).normalize(),t===Er)s[5].setComponents(h+p,y+_,x+S,N+E).normalize();else if(t===qf)s[5].setComponents(p,_,S,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){ms.center.set(0,0,0);const t=y3.distanceTo(e.center);return ms.radius=.7071067811865476+t,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){const t=this.planes,r=e.center,s=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const s=t[r];if(ff.x=s.normal.x>0?e.max.x:e.min.x,ff.y=s.normal.y>0?e.max.y:e.min.y,ff.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ff)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class VS extends Ar{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jf=new V,Zf=new V,Py=new dt,ic=new Qo,hf=new Dr,Qp=new V,Oy=new V;class q0 extends dn{constructor(e=new zi,t=new VS){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let s=1,l=t.count;s<l;s++)jf.fromBufferAttribute(t,s-1),Zf.fromBufferAttribute(t,s),r[s]=r[s-1],r[s]+=jf.distanceTo(Zf);e.setAttribute("lineDistance",new Si(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,s=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),hf.copy(r.boundingSphere),hf.applyMatrix4(s),hf.radius+=l,e.ray.intersectsSphere(hf)===!1)return;Py.copy(s).invert(),ic.copy(e.ray).applyMatrix4(Py);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,h=this.isLineSegments?2:1,m=r.index,_=r.attributes.position;if(m!==null){const y=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let b=y,S=M-1;b<S;b+=h){const x=m.getX(b),U=m.getX(b+1),C=df(this,e,ic,p,x,U,b);C&&t.push(C)}if(this.isLineLoop){const b=m.getX(M-1),S=m.getX(y),x=df(this,e,ic,p,b,S,M-1);x&&t.push(x)}}else{const y=Math.max(0,u.start),M=Math.min(_.count,u.start+u.count);for(let b=y,S=M-1;b<S;b+=h){const x=df(this,e,ic,p,b,b+1,b);x&&t.push(x)}if(this.isLineLoop){const b=df(this,e,ic,p,M-1,y,M-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const s=t[r[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function df(a,e,t,r,s,l,u){const f=a.geometry.attributes.position;if(jf.fromBufferAttribute(f,s),Zf.fromBufferAttribute(f,l),t.distanceSqToSegment(jf,Zf,Qp,Oy)>r)return;Qp.applyMatrix4(a.matrixWorld);const h=e.ray.origin.distanceTo(Qp);if(!(h<e.near||h>e.far))return{distance:h,point:Oy.clone().applyMatrix4(a.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:a}}const Iy=new V,zy=new V;class x3 extends q0{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let s=0,l=t.count;s<l;s+=2)Iy.fromBufferAttribute(t,s),zy.fromBufferAttribute(t,s+1),r[s]=s===0?0:r[s-1],r[s+1]=r[s]+Iy.distanceTo(zy);e.setAttribute("lineDistance",new Si(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class S3 extends q0{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class GS extends Ar{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const By=new dt,f0=new Qo,pf=new Dr,mf=new V;class M3 extends dn{constructor(e=new zi,t=new GS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,s=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),pf.copy(r.boundingSphere),pf.applyMatrix4(s),pf.radius+=l,e.ray.intersectsSphere(pf)===!1)return;By.copy(s).invert(),f0.copy(e.ray).applyMatrix4(By);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,h=r.index,v=r.attributes.position;if(h!==null){const _=Math.max(0,u.start),y=Math.min(h.count,u.start+u.count);for(let M=_,b=y;M<b;M++){const S=h.getX(M);mf.fromBufferAttribute(v,S),Fy(mf,S,p,s,e,t,this)}}else{const _=Math.max(0,u.start),y=Math.min(v.count,u.start+u.count);for(let M=_,b=y;M<b;M++)mf.fromBufferAttribute(v,M),Fy(mf,M,p,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const s=t[r[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Fy(a,e,t,r,s,l,u){const f=f0.distanceSqToPoint(a);if(f<t){const p=new V;f0.closestPointToPoint(a,p),p.applyMatrix4(r);const h=s.ray.origin.distanceTo(p);if(h<s.near||h>s.far)return;l.push({distance:h,distanceToRay:Math.sqrt(f),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class kS extends Wn{constructor(e,t,r=bs,s,l,u,f=Zt,p=Zt,h,m=Tc,v=1){if(m!==Tc&&m!==bc)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:v};super(_,s,l,u,f,p,m,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new k0(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ki extends zi{constructor(e=1,t=1,r=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:s};const l=e/2,u=t/2,f=Math.floor(r),p=Math.floor(s),h=f+1,m=p+1,v=e/f,_=t/p,y=[],M=[],b=[],S=[];for(let x=0;x<m;x++){const U=x*_-u;for(let C=0;C<h;C++){const E=C*v-l;M.push(E,-U,0),b.push(0,0,1),S.push(C/f),S.push(1-x/p)}}for(let x=0;x<p;x++)for(let U=0;U<f;U++){const C=U+h*x,E=U+h*(x+1),N=U+1+h*(x+1),z=U+1+h*x;y.push(C,E,z),y.push(E,N,z)}this.setIndex(y),this.setAttribute("position",new Si(M,3)),this.setAttribute("normal",new Si(b,3)),this.setAttribute("uv",new Si(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ki(e.width,e.height,e.widthSegments,e.heightSegments)}}class j0 extends zi{constructor(e=1,t=32,r=16,s=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:s,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const p=Math.min(u+f,Math.PI);let h=0;const m=[],v=new V,_=new V,y=[],M=[],b=[],S=[];for(let x=0;x<=r;x++){const U=[],C=x/r;let E=0;x===0&&u===0?E=.5/t:x===r&&p===Math.PI&&(E=-.5/t);for(let N=0;N<=t;N++){const z=N/t;v.x=-e*Math.cos(s+z*l)*Math.sin(u+C*f),v.y=e*Math.cos(u+C*f),v.z=e*Math.sin(s+z*l)*Math.sin(u+C*f),M.push(v.x,v.y,v.z),_.copy(v).normalize(),b.push(_.x,_.y,_.z),S.push(z+E,1-C),U.push(h++)}m.push(U)}for(let x=0;x<r;x++)for(let U=0;U<t;U++){const C=m[x][U+1],E=m[x][U],N=m[x+1][U],z=m[x+1][U+1];(x!==0||u>0)&&y.push(C,E,z),(x!==r-1||p<Math.PI)&&y.push(E,N,z)}this.setIndex(y),this.setAttribute("position",new Si(M,3)),this.setAttribute("normal",new Si(b,3)),this.setAttribute("uv",new Si(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new j0(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class dh extends Ar{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wS,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ur extends dh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new st(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new st(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new st(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class T3 extends Ar{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class b3 extends Ar{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function gf(a,e){return!a||a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function E3(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function A3(a){function e(s,l){return a[s]-a[l]}const t=a.length,r=new Array(t);for(let s=0;s!==t;++s)r[s]=s;return r.sort(e),r}function Hy(a,e,t){const r=a.length,s=new a.constructor(r);for(let l=0,u=0;u!==r;++l){const f=t[l]*e;for(let p=0;p!==e;++p)s[u++]=a[f+p]}return s}function XS(a,e,t,r){let s=1,l=a[0];for(;l!==void 0&&l[r]===void 0;)l=a[s++];if(l===void 0)return;let u=l[r];if(u!==void 0)if(Array.isArray(u))do u=l[r],u!==void 0&&(e.push(l.time),t.push(...u)),l=a[s++];while(l!==void 0);else if(u.toArray!==void 0)do u=l[r],u!==void 0&&(e.push(l.time),u.toArray(t,t.length)),l=a[s++];while(l!==void 0);else do u=l[r],u!==void 0&&(e.push(l.time),t.push(u)),l=a[s++];while(l!==void 0)}class Pc{constructor(e,t,r,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(r),this.sampleValues=t,this.valueSize=r,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let r=this._cachedIndex,s=t[r],l=t[r-1];e:{t:{let u;n:{i:if(!(e<s)){for(let f=r+2;;){if(s===void 0){if(e<l)break i;return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}if(r===f)break;if(l=s,s=t[++r],e<s)break t}u=t.length;break n}if(!(e>=l)){const f=t[1];e<f&&(r=2,l=f);for(let p=r-2;;){if(l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===p)break;if(s=l,l=t[--r-1],e>=l)break t}u=r,r=0;break n}break e}for(;r<u;){const f=r+u>>>1;e<t[f]?u=f:r=f+1}if(s=t[r],l=t[r-1],l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}this._cachedIndex=r,this.intervalChanged_(r,l,s)}return this.interpolate_(r,l,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,r=this.sampleValues,s=this.valueSize,l=e*s;for(let u=0;u!==s;++u)t[u]=r[l+u];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class w3 extends Pc{constructor(e,t,r,s){super(e,t,r,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:iy,endingEnd:iy}}intervalChanged_(e,t,r){const s=this.parameterPositions;let l=e-2,u=e+1,f=s[l],p=s[u];if(f===void 0)switch(this.getSettings_().endingStart){case ry:l=e,f=2*t-r;break;case ay:l=s.length-2,f=t+s[l]-s[l+1];break;default:l=e,f=r}if(p===void 0)switch(this.getSettings_().endingEnd){case ry:u=e,p=2*r-t;break;case ay:u=1,p=r+s[1]-s[0];break;default:u=e-1,p=t}const h=(r-t)*.5,m=this.valueSize;this._weightPrev=h/(t-f),this._weightNext=h/(p-r),this._offsetPrev=l*m,this._offsetNext=u*m}interpolate_(e,t,r,s){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,p=e*f,h=p-f,m=this._offsetPrev,v=this._offsetNext,_=this._weightPrev,y=this._weightNext,M=(r-t)/(s-t),b=M*M,S=b*M,x=-_*S+2*_*b-_*M,U=(1+_)*S+(-1.5-2*_)*b+(-.5+_)*M+1,C=(-1-y)*S+(1.5+y)*b+.5*M,E=y*S-y*b;for(let N=0;N!==f;++N)l[N]=x*u[m+N]+U*u[h+N]+C*u[p+N]+E*u[v+N];return l}}class R3 extends Pc{constructor(e,t,r,s){super(e,t,r,s)}interpolate_(e,t,r,s){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,p=e*f,h=p-f,m=(r-t)/(s-t),v=1-m;for(let _=0;_!==f;++_)l[_]=u[h+_]*v+u[p+_]*m;return l}}class C3 extends Pc{constructor(e,t,r,s){super(e,t,r,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class dr{constructor(e,t,r,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gf(t,this.TimeBufferType),this.values=gf(r,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let r;if(t.toJSON!==this.toJSON)r=t.toJSON(e);else{r={name:e.name,times:gf(e.times,Array),values:gf(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(r.interpolation=s)}return r.type=e.ValueTypeName,r}InterpolantFactoryMethodDiscrete(e){return new C3(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new R3(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new w3(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ec:t=this.InterpolantFactoryMethodDiscrete;break;case Ac:t=this.InterpolantFactoryMethodLinear;break;case Ap:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const r="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(r);return console.warn("THREE.KeyframeTrack:",r),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ec;case this.InterpolantFactoryMethodLinear:return Ac;case this.InterpolantFactoryMethodSmooth:return Ap}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let r=0,s=t.length;r!==s;++r)t[r]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let r=0,s=t.length;r!==s;++r)t[r]*=e}return this}trim(e,t){const r=this.times,s=r.length;let l=0,u=s-1;for(;l!==s&&r[l]<e;)++l;for(;u!==-1&&r[u]>t;)--u;if(++u,l!==0||u!==s){l>=u&&(u=Math.max(u,1),l=u-1);const f=this.getValueSize();this.times=r.slice(l,u),this.values=this.values.slice(l*f,u*f)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const r=this.times,s=this.values,l=r.length;l===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let u=null;for(let f=0;f!==l;f++){const p=r[f];if(typeof p=="number"&&isNaN(p)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,f,p),e=!1;break}if(u!==null&&u>p){console.error("THREE.KeyframeTrack: Out of order keys.",this,f,p,u),e=!1;break}u=p}if(s!==void 0&&E3(s))for(let f=0,p=s.length;f!==p;++f){const h=s[f];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,f,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),r=this.getValueSize(),s=this.getInterpolation()===Ap,l=e.length-1;let u=1;for(let f=1;f<l;++f){let p=!1;const h=e[f],m=e[f+1];if(h!==m&&(f!==1||h!==e[0]))if(s)p=!0;else{const v=f*r,_=v-r,y=v+r;for(let M=0;M!==r;++M){const b=t[v+M];if(b!==t[_+M]||b!==t[y+M]){p=!0;break}}}if(p){if(f!==u){e[u]=e[f];const v=f*r,_=u*r;for(let y=0;y!==r;++y)t[_+y]=t[v+y]}++u}}if(l>0){e[u]=e[l];for(let f=l*r,p=u*r,h=0;h!==r;++h)t[p+h]=t[f+h];++u}return u!==e.length?(this.times=e.slice(0,u),this.values=t.slice(0,u*r)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),r=this.constructor,s=new r(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}dr.prototype.ValueTypeName="";dr.prototype.TimeBufferType=Float32Array;dr.prototype.ValueBufferType=Float32Array;dr.prototype.DefaultInterpolation=Ac;class Jo extends dr{constructor(e,t,r){super(e,t,r)}}Jo.prototype.ValueTypeName="bool";Jo.prototype.ValueBufferType=Array;Jo.prototype.DefaultInterpolation=Ec;Jo.prototype.InterpolantFactoryMethodLinear=void 0;Jo.prototype.InterpolantFactoryMethodSmooth=void 0;class WS extends dr{constructor(e,t,r,s){super(e,t,r,s)}}WS.prototype.ValueTypeName="color";class qo extends dr{constructor(e,t,r,s){super(e,t,r,s)}}qo.prototype.ValueTypeName="number";class D3 extends Pc{constructor(e,t,r,s){super(e,t,r,s)}interpolate_(e,t,r,s){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,p=(r-t)/(s-t);let h=e*f;for(let m=h+f;h!==m;h+=4)Cr.slerpFlat(l,0,u,h-f,u,h,p);return l}}class jo extends dr{constructor(e,t,r,s){super(e,t,r,s)}InterpolantFactoryMethodLinear(e){return new D3(this.times,this.values,this.getValueSize(),e)}}jo.prototype.ValueTypeName="quaternion";jo.prototype.InterpolantFactoryMethodSmooth=void 0;class $o extends dr{constructor(e,t,r){super(e,t,r)}}$o.prototype.ValueTypeName="string";$o.prototype.ValueBufferType=Array;$o.prototype.DefaultInterpolation=Ec;$o.prototype.InterpolantFactoryMethodLinear=void 0;$o.prototype.InterpolantFactoryMethodSmooth=void 0;class Zo extends dr{constructor(e,t,r,s){super(e,t,r,s)}}Zo.prototype.ValueTypeName="vector";class U3{constructor(e="",t=-1,r=[],s=hE){this.name=e,this.tracks=r,this.duration=t,this.blendMode=s,this.uuid=hr(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],r=e.tracks,s=1/(e.fps||1);for(let u=0,f=r.length;u!==f;++u)t.push(N3(r[u]).scale(s));const l=new this(e.name,e.duration,t,e.blendMode);return l.uuid=e.uuid,l}static toJSON(e){const t=[],r=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let l=0,u=r.length;l!==u;++l)t.push(dr.toJSON(r[l]));return s}static CreateFromMorphTargetSequence(e,t,r,s){const l=t.length,u=[];for(let f=0;f<l;f++){let p=[],h=[];p.push((f+l-1)%l,f,(f+1)%l),h.push(0,1,0);const m=A3(p);p=Hy(p,1,m),h=Hy(h,1,m),!s&&p[0]===0&&(p.push(l),h.push(h[0])),u.push(new qo(".morphTargetInfluences["+t[f].name+"]",p,h).scale(1/r))}return new this(e,-1,u)}static findByName(e,t){let r=e;if(!Array.isArray(e)){const s=e;r=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<r.length;s++)if(r[s].name===t)return r[s];return null}static CreateClipsFromMorphTargetSequences(e,t,r){const s={},l=/^([\w-]*?)([\d]+)$/;for(let f=0,p=e.length;f<p;f++){const h=e[f],m=h.name.match(l);if(m&&m.length>1){const v=m[1];let _=s[v];_||(s[v]=_=[]),_.push(h)}}const u=[];for(const f in s)u.push(this.CreateFromMorphTargetSequence(f,s[f],t,r));return u}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const r=function(v,_,y,M,b){if(y.length!==0){const S=[],x=[];XS(y,S,x,M),S.length!==0&&b.push(new v(_,S,x))}},s=[],l=e.name||"default",u=e.fps||30,f=e.blendMode;let p=e.length||-1;const h=e.hierarchy||[];for(let v=0;v<h.length;v++){const _=h[v].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const y={};let M;for(M=0;M<_.length;M++)if(_[M].morphTargets)for(let b=0;b<_[M].morphTargets.length;b++)y[_[M].morphTargets[b]]=-1;for(const b in y){const S=[],x=[];for(let U=0;U!==_[M].morphTargets.length;++U){const C=_[M];S.push(C.time),x.push(C.morphTarget===b?1:0)}s.push(new qo(".morphTargetInfluence["+b+"]",S,x))}p=y.length*u}else{const y=".bones["+t[v].name+"]";r(Zo,y+".position",_,"pos",s),r(jo,y+".quaternion",_,"rot",s),r(Zo,y+".scale",_,"scl",s)}}return s.length===0?null:new this(l,p,s,f)}resetDuration(){const e=this.tracks;let t=0;for(let r=0,s=e.length;r!==s;++r){const l=this.tracks[r];t=Math.max(t,l.times[l.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function L3(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return qo;case"vector":case"vector2":case"vector3":case"vector4":return Zo;case"color":return WS;case"quaternion":return jo;case"bool":case"boolean":return Jo;case"string":return $o}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function N3(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=L3(a.type);if(a.times===void 0){const t=[],r=[];XS(a.keys,t,r,"value"),a.times=t,a.values=r}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const ia={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class P3{constructor(e,t,r){const s=this;let l=!1,u=0,f=0,p;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.abortController=new AbortController,this.itemStart=function(m){f++,l===!1&&s.onStart!==void 0&&s.onStart(m,u,f),l=!0},this.itemEnd=function(m){u++,s.onProgress!==void 0&&s.onProgress(m,u,f),u===f&&(l=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return p?p(m):m},this.setURLModifier=function(m){return p=m,this},this.addHandler=function(m,v){return h.push(m,v),this},this.removeHandler=function(m){const v=h.indexOf(m);return v!==-1&&h.splice(v,2),this},this.getHandler=function(m){for(let v=0,_=h.length;v<_;v+=2){const y=h[v],M=h[v+1];if(y.global&&(y.lastIndex=0),y.test(m))return M}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const O3=new P3;class el{constructor(e){this.manager=e!==void 0?e:O3,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(s,l){r.load(e,s,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}el.DEFAULT_MATERIAL_NAME="__DEFAULT";const Jr={};class I3 extends Error{constructor(e,t){super(e),this.response=t}}class YS extends el{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,r,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=ia.get(`file:${e}`);if(l!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(l),this.manager.itemEnd(e)},0),l;if(Jr[e]!==void 0){Jr[e].push({onLoad:t,onProgress:r,onError:s});return}Jr[e]=[],Jr[e].push({onLoad:t,onProgress:r,onError:s});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),f=this.mimeType,p=this.responseType;fetch(u).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const m=Jr[e],v=h.body.getReader(),_=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),y=_?parseInt(_):0,M=y!==0;let b=0;const S=new ReadableStream({start(x){U();function U(){v.read().then(({done:C,value:E})=>{if(C)x.close();else{b+=E.byteLength;const N=new ProgressEvent("progress",{lengthComputable:M,loaded:b,total:y});for(let z=0,P=m.length;z<P;z++){const G=m[z];G.onProgress&&G.onProgress(N)}x.enqueue(E),U()}},C=>{x.error(C)})}}});return new Response(S)}else throw new I3(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(p){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(m=>new DOMParser().parseFromString(m,f));case"json":return h.json();default:if(f==="")return h.text();{const v=/charset="?([^;"\s]*)"?/i.exec(f),_=v&&v[1]?v[1].toLowerCase():void 0,y=new TextDecoder(_);return h.arrayBuffer().then(M=>y.decode(M))}}}).then(h=>{ia.add(`file:${e}`,h);const m=Jr[e];delete Jr[e];for(let v=0,_=m.length;v<_;v++){const y=m[v];y.onLoad&&y.onLoad(h)}}).catch(h=>{const m=Jr[e];if(m===void 0)throw this.manager.itemError(e),h;delete Jr[e];for(let v=0,_=m.length;v<_;v++){const y=m[v];y.onError&&y.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const To=new WeakMap;class z3 extends el{constructor(e){super(e)}load(e,t,r,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=ia.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0);else{let v=To.get(u);v===void 0&&(v=[],To.set(u,v)),v.push({onLoad:t,onError:s})}return u}const f=wc("img");function p(){m(),t&&t(this);const v=To.get(this)||[];for(let _=0;_<v.length;_++){const y=v[_];y.onLoad&&y.onLoad(this)}To.delete(this),l.manager.itemEnd(e)}function h(v){m(),s&&s(v),ia.remove(`image:${e}`);const _=To.get(this)||[];for(let y=0;y<_.length;y++){const M=_[y];M.onError&&M.onError(v)}To.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function m(){f.removeEventListener("load",p,!1),f.removeEventListener("error",h,!1)}return f.addEventListener("load",p,!1),f.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),ia.add(`image:${e}`,f),l.manager.itemStart(e),f.src=e,f}}class h0 extends el{constructor(e){super(e)}load(e,t,r,s){const l=new Wn,u=new z3(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},r,s),l}}class Z0 extends dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Jp=new dt,Vy=new V,Gy=new V;class K0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=Rr,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Y0,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Vy.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vy),Gy.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gy),t.updateMatrixWorld(),Jp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jp,t.coordinateSystem,t.reversedDepth),t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Jp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class B3 extends K0{constructor(){super(new fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,r=Wo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,l=e.distance||t.far;(r!==t.fov||s!==t.aspect||l!==t.far)&&(t.fov=r,t.aspect=s,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class F3 extends Z0{constructor(e,t,r=0,s=Math.PI/3,l=0,u=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.distance=r,this.angle=s,this.penumbra=l,this.decay=u,this.map=null,this.shadow=new B3}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ky=new dt,rc=new V,$p=new V;class H3 extends K0{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Be(4,2),this._viewportCount=6,this._viewports=[new Nt(2,1,1,1),new Nt(0,1,1,1),new Nt(3,1,1,1),new Nt(1,1,1,1),new Nt(3,0,1,1),new Nt(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,s=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),rc.setFromMatrixPosition(e.matrixWorld),r.position.copy(rc),$p.copy(r.position),$p.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt($p),r.updateMatrixWorld(),s.makeTranslation(-rc.x,-rc.y,-rc.z),ky.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ky,r.coordinateSystem,r.reversedDepth)}}class V3 extends Z0{constructor(e,t,r=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=s,this.shadow=new H3}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Q0 extends IS{constructor(e=-1,t=1,r=1,s=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=s,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,s,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=s,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=s+t,p=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,f-=m*this.view.offsetY,p=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class G3 extends K0{constructor(){super(new Q0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class k3 extends Z0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new G3}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class vc{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const em=new WeakMap;class X3 extends el{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,r,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=ia.get(`image-bitmap:${e}`);if(u!==void 0){if(l.manager.itemStart(e),u.then){u.then(h=>{if(em.has(u)===!0)s&&s(em.get(u)),l.manager.itemError(e),l.manager.itemEnd(e);else return t&&t(h),l.manager.itemEnd(e),h});return}return setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0),u}const f={};f.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",f.headers=this.requestHeader,f.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const p=fetch(e,f).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(l.options,{colorSpaceConversion:"none"}))}).then(function(h){return ia.add(`image-bitmap:${e}`,h),t&&t(h),l.manager.itemEnd(e),h}).catch(function(h){s&&s(h),em.set(p,h),ia.remove(`image-bitmap:${e}`),l.manager.itemError(e),l.manager.itemEnd(e)});ia.add(`image-bitmap:${e}`,p),l.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class W3 extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class J0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const $0="\\[\\]\\.:\\/",Y3=new RegExp("["+$0+"]","g"),eg="[^"+$0+"]",q3="[^"+$0.replace("\\.","")+"]",j3=/((?:WC+[\/:])*)/.source.replace("WC",eg),Z3=/(WCOD+)?/.source.replace("WCOD",q3),K3=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eg),Q3=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eg),J3=new RegExp("^"+j3+Z3+K3+Q3+"$"),$3=["material","materials","bones","map"];class eA{constructor(e,t,r){const s=r||Ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const r=this._targetGroup.nCachedObjects_,s=this._bindings[r];s!==void 0&&s.getValue(e,t)}setValue(e,t){const r=this._bindings;for(let s=this._targetGroup.nCachedObjects_,l=r.length;s!==l;++s)r[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].unbind()}}class Ht{constructor(e,t,r){this.path=t,this.parsedPath=r||Ht.parseTrackName(t),this.node=Ht.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,r){return e&&e.isAnimationObjectGroup?new Ht.Composite(e,t,r):new Ht(e,t,r)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Y3,"")}static parseTrackName(e){const t=J3.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const r={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const l=r.nodeName.substring(s+1);$3.indexOf(l)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=l)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return r}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const r=e.skeleton.getBoneByName(t);if(r!==void 0)return r}if(e.children){const r=function(l){for(let u=0;u<l.length;u++){const f=l[u];if(f.name===t||f.uuid===t)return f;const p=r(f.children);if(p)return p}return null},s=r(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const r=this.resolvedProperty;for(let s=0,l=r.length;s!==l;++s)e[t++]=r[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const r=this.resolvedProperty;for(let s=0,l=r.length;s!==l;++s)r[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const r=this.resolvedProperty;for(let s=0,l=r.length;s!==l;++s)r[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const r=this.resolvedProperty;for(let s=0,l=r.length;s!==l;++s)r[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,r=t.objectName,s=t.propertyName;let l=t.propertyIndex;if(e||(e=Ht.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=t.objectIndex;switch(r){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let m=0;m<e.length;m++)if(e[m].name===h){h=m;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[r]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const u=e[s];if(u===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let f=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?f=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(f=this.Versioning.MatrixWorldNeedsUpdate);let p=this.BindingType.Direct;if(l!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[l]!==void 0&&(l=e.morphTargetDictionary[l])}p=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=l}else u.fromArray!==void 0&&u.toArray!==void 0?(p=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(p=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=s;this.getValue=this.GetterByBindingType[p],this.setValue=this.SetterByBindingTypeAndVersioning[p][f]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ht.Composite=eA;Ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ht.prototype.GetterByBindingType=[Ht.prototype._getValue_direct,Ht.prototype._getValue_array,Ht.prototype._getValue_arrayElement,Ht.prototype._getValue_toArray];Ht.prototype.SetterByBindingTypeAndVersioning=[[Ht.prototype._setValue_direct,Ht.prototype._setValue_direct_setNeedsUpdate,Ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_array,Ht.prototype._setValue_array_setNeedsUpdate,Ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_arrayElement,Ht.prototype._setValue_arrayElement_setNeedsUpdate,Ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_fromArray,Ht.prototype._setValue_fromArray_setNeedsUpdate,Ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Xy=new dt;class tg{constructor(e,t,r=0,s=1/0){this.ray=new Qo(e,t),this.near=r,this.far=s,this.camera=null,this.layers=new X0,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Xy.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xy),this}intersectObject(e,t=!0,r=[]){return d0(e,this,r,t),r.sort(Wy),r}intersectObjects(e,t=!0,r=[]){for(let s=0,l=e.length;s<l;s++)d0(e[s],this,r,t);return r.sort(Wy),r}}function Wy(a,e){return a.distance-e.distance}function d0(a,e,t,r){let s=!0;if(a.layers.test(e.layers)&&a.raycast(e,t)===!1&&(s=!1),s===!0&&r===!0){const l=a.children;for(let u=0,f=l.length;u<f;u++)d0(l[u],e,t,!0)}}class Kf{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=_t(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class tA extends Es{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Yy(a,e,t,r){const s=nA(r);switch(t){case MS:return a*e;case B0:return a*e/s.components*s.byteLength;case F0:return a*e/s.components*s.byteLength;case bS:return a*e*2/s.components*s.byteLength;case H0:return a*e*2/s.components*s.byteLength;case TS:return a*e*3/s.components*s.byteLength;case Oi:return a*e*4/s.components*s.byteLength;case V0:return a*e*4/s.components*s.byteLength;case Cf:case Df:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Uf:case Lf:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Bm:case Hm:return Math.max(a,16)*Math.max(e,8)/4;case zm:case Fm:return Math.max(a,8)*Math.max(e,8)/2;case Vm:case Gm:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case km:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Xm:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Wm:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Ym:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case qm:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case jm:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Zm:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Km:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Qm:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Jm:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case $m:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case e0:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case t0:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case n0:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case i0:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Nf:case r0:case a0:return Math.ceil(a/4)*Math.ceil(e/4)*16;case ES:case s0:return Math.ceil(a/4)*Math.ceil(e/4)*8;case o0:case l0:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nA(a){switch(a){case Rr:case yS:return{byteLength:1,components:1};case Sc:case xS:case Lc:return{byteLength:2,components:1};case I0:case z0:return{byteLength:2,components:4};case bs:case O0:case hn:return{byteLength:4,components:1};case SS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:P0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=P0);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qS(){let a=null,e=!1,t=null,r=null;function s(l,u){t(l,u),r=a.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(r=a.requestAnimationFrame(s),e=!0)},stop:function(){a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){a=l}}}function iA(a){const e=new WeakMap;function t(f,p){const h=f.array,m=f.usage,v=h.byteLength,_=a.createBuffer();a.bindBuffer(p,_),a.bufferData(p,h,m),f.onUploadCallback();let y;if(h instanceof Float32Array)y=a.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=a.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?y=a.HALF_FLOAT:y=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=a.SHORT;else if(h instanceof Uint32Array)y=a.UNSIGNED_INT;else if(h instanceof Int32Array)y=a.INT;else if(h instanceof Int8Array)y=a.BYTE;else if(h instanceof Uint8Array)y=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,p,h){const m=p.array,v=p.updateRanges;if(a.bindBuffer(h,f),v.length===0)a.bufferSubData(h,0,m);else{v.sort((y,M)=>y.start-M.start);let _=0;for(let y=1;y<v.length;y++){const M=v[_],b=v[y];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++_,v[_]=b)}v.length=_+1;for(let y=0,M=v.length;y<M;y++){const b=v[y];a.bufferSubData(h,b.start*m.BYTES_PER_ELEMENT,m,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(a.deleteBuffer(p.buffer),e.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,p));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,p),h.version=f.version}}return{get:s,remove:l,update:u}}var rA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,dA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_A=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,MA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,EA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,AA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,RA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,CA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,DA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,UA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,LA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,NA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,PA="gl_FragColor = linearToOutputTexel( gl_FragColor );",OA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,IA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,BA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,FA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,HA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,VA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,YA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,KA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,QA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$A=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ew=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,aw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ow=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_w=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ew=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Aw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ww=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Uw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Nw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ow=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Iw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Hw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ww=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$w=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_R=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,MR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ER=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,RR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,LR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,OR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,IR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:rA,alphahash_pars_fragment:aA,alphamap_fragment:sA,alphamap_pars_fragment:oA,alphatest_fragment:lA,alphatest_pars_fragment:cA,aomap_fragment:uA,aomap_pars_fragment:fA,batching_pars_vertex:hA,batching_vertex:dA,begin_vertex:pA,beginnormal_vertex:mA,bsdfs:gA,iridescence_fragment:vA,bumpmap_pars_fragment:_A,clipping_planes_fragment:yA,clipping_planes_pars_fragment:xA,clipping_planes_pars_vertex:SA,clipping_planes_vertex:MA,color_fragment:TA,color_pars_fragment:bA,color_pars_vertex:EA,color_vertex:AA,common:wA,cube_uv_reflection_fragment:RA,defaultnormal_vertex:CA,displacementmap_pars_vertex:DA,displacementmap_vertex:UA,emissivemap_fragment:LA,emissivemap_pars_fragment:NA,colorspace_fragment:PA,colorspace_pars_fragment:OA,envmap_fragment:IA,envmap_common_pars_fragment:zA,envmap_pars_fragment:BA,envmap_pars_vertex:FA,envmap_physical_pars_fragment:KA,envmap_vertex:HA,fog_vertex:VA,fog_pars_vertex:GA,fog_fragment:kA,fog_pars_fragment:XA,gradientmap_pars_fragment:WA,lightmap_pars_fragment:YA,lights_lambert_fragment:qA,lights_lambert_pars_fragment:jA,lights_pars_begin:ZA,lights_toon_fragment:QA,lights_toon_pars_fragment:JA,lights_phong_fragment:$A,lights_phong_pars_fragment:ew,lights_physical_fragment:tw,lights_physical_pars_fragment:nw,lights_fragment_begin:iw,lights_fragment_maps:rw,lights_fragment_end:aw,logdepthbuf_fragment:sw,logdepthbuf_pars_fragment:ow,logdepthbuf_pars_vertex:lw,logdepthbuf_vertex:cw,map_fragment:uw,map_pars_fragment:fw,map_particle_fragment:hw,map_particle_pars_fragment:dw,metalnessmap_fragment:pw,metalnessmap_pars_fragment:mw,morphinstance_vertex:gw,morphcolor_vertex:vw,morphnormal_vertex:_w,morphtarget_pars_vertex:yw,morphtarget_vertex:xw,normal_fragment_begin:Sw,normal_fragment_maps:Mw,normal_pars_fragment:Tw,normal_pars_vertex:bw,normal_vertex:Ew,normalmap_pars_fragment:Aw,clearcoat_normal_fragment_begin:ww,clearcoat_normal_fragment_maps:Rw,clearcoat_pars_fragment:Cw,iridescence_pars_fragment:Dw,opaque_fragment:Uw,packing:Lw,premultiplied_alpha_fragment:Nw,project_vertex:Pw,dithering_fragment:Ow,dithering_pars_fragment:Iw,roughnessmap_fragment:zw,roughnessmap_pars_fragment:Bw,shadowmap_pars_fragment:Fw,shadowmap_pars_vertex:Hw,shadowmap_vertex:Vw,shadowmask_pars_fragment:Gw,skinbase_vertex:kw,skinning_pars_vertex:Xw,skinning_vertex:Ww,skinnormal_vertex:Yw,specularmap_fragment:qw,specularmap_pars_fragment:jw,tonemapping_fragment:Zw,tonemapping_pars_fragment:Kw,transmission_fragment:Qw,transmission_pars_fragment:Jw,uv_pars_fragment:$w,uv_pars_vertex:eR,uv_vertex:tR,worldpos_vertex:nR,background_vert:iR,background_frag:rR,backgroundCube_vert:aR,backgroundCube_frag:sR,cube_vert:oR,cube_frag:lR,depth_vert:cR,depth_frag:uR,distanceRGBA_vert:fR,distanceRGBA_frag:hR,equirect_vert:dR,equirect_frag:pR,linedashed_vert:mR,linedashed_frag:gR,meshbasic_vert:vR,meshbasic_frag:_R,meshlambert_vert:yR,meshlambert_frag:xR,meshmatcap_vert:SR,meshmatcap_frag:MR,meshnormal_vert:TR,meshnormal_frag:bR,meshphong_vert:ER,meshphong_frag:AR,meshphysical_vert:wR,meshphysical_frag:RR,meshtoon_vert:CR,meshtoon_frag:DR,points_vert:UR,points_frag:LR,shadow_vert:NR,shadow_frag:PR,sprite_vert:OR,sprite_frag:IR},Pe={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Tr={basic:{uniforms:ui([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:ui([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new st(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:ui([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:ui([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:ui([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new st(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:ui([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:ui([Pe.points,Pe.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:ui([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:ui([Pe.common,Pe.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:ui([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:ui([Pe.sprite,Pe.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:ui([Pe.common,Pe.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:ui([Pe.lights,Pe.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Tr.physical={uniforms:ui([Tr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const vf={r:0,b:0,g:0},gs=new Ii,zR=new dt;function BR(a,e,t,r,s,l,u){const f=new st(0);let p=l===!0?0:1,h,m,v=null,_=0,y=null;function M(C){let E=C.isScene===!0?C.background:null;return E&&E.isTexture&&(E=(C.backgroundBlurriness>0?t:e).get(E)),E}function b(C){let E=!1;const N=M(C);N===null?x(f,p):N&&N.isColor&&(x(N,1),E=!0);const z=a.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,u):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(a.autoClear||E)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function S(C,E){const N=M(E);N&&(N.isCubeTexture||N.mapping===fh)?(m===void 0&&(m=new Vt(new Nc(1,1,1),new Ut({name:"BackgroundCubeMaterial",uniforms:Yo(Tr.backgroundCube.uniforms),vertexShader:Tr.backgroundCube.vertexShader,fragmentShader:Tr.backgroundCube.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(z,P,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),gs.copy(E.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),m.material.uniforms.envMap.value=N,m.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(zR.makeRotationFromEuler(gs)),m.material.toneMapped=At.getTransfer(N.colorSpace)!==qt,(v!==N||_!==N.version||y!==a.toneMapping)&&(m.material.needsUpdate=!0,v=N,_=N.version,y=a.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null)):N&&N.isTexture&&(h===void 0&&(h=new Vt(new Ki(2,2),new Ut({name:"BackgroundMaterial",uniforms:Yo(Tr.background.uniforms),vertexShader:Tr.background.vertexShader,fragmentShader:Tr.background.fragmentShader,side:aa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=N,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.toneMapped=At.getTransfer(N.colorSpace)!==qt,N.matrixAutoUpdate===!0&&N.updateMatrix(),h.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||_!==N.version||y!==a.toneMapping)&&(h.material.needsUpdate=!0,v=N,_=N.version,y=a.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null))}function x(C,E){C.getRGB(vf,OS(a)),r.buffers.color.setClear(vf.r,vf.g,vf.b,E,u)}function U(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return f},setClearColor:function(C,E=1){f.set(C),p=E,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(C){p=C,x(f,p)},render:b,addToRenderList:S,dispose:U}}function FR(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},s=_(null);let l=s,u=!1;function f(L,H,oe,ae,ce){let fe=!1;const B=v(ae,oe,H);l!==B&&(l=B,h(l.object)),fe=y(L,ae,oe,ce),fe&&M(L,ae,oe,ce),ce!==null&&e.update(ce,a.ELEMENT_ARRAY_BUFFER),(fe||u)&&(u=!1,E(L,H,oe,ae),ce!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function p(){return a.createVertexArray()}function h(L){return a.bindVertexArray(L)}function m(L){return a.deleteVertexArray(L)}function v(L,H,oe){const ae=oe.wireframe===!0;let ce=r[L.id];ce===void 0&&(ce={},r[L.id]=ce);let fe=ce[H.id];fe===void 0&&(fe={},ce[H.id]=fe);let B=fe[ae];return B===void 0&&(B=_(p()),fe[ae]=B),B}function _(L){const H=[],oe=[],ae=[];for(let ce=0;ce<t;ce++)H[ce]=0,oe[ce]=0,ae[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:oe,attributeDivisors:ae,object:L,attributes:{},index:null}}function y(L,H,oe,ae){const ce=l.attributes,fe=H.attributes;let B=0;const Z=oe.getAttributes();for(const q in Z)if(Z[q].location>=0){const O=ce[q];let Q=fe[q];if(Q===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),O===void 0||O.attribute!==Q||Q&&O.data!==Q.data)return!0;B++}return l.attributesNum!==B||l.index!==ae}function M(L,H,oe,ae){const ce={},fe=H.attributes;let B=0;const Z=oe.getAttributes();for(const q in Z)if(Z[q].location>=0){let O=fe[q];O===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(O=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(O=L.instanceColor));const Q={};Q.attribute=O,O&&O.data&&(Q.data=O.data),ce[q]=Q,B++}l.attributes=ce,l.attributesNum=B,l.index=ae}function b(){const L=l.newAttributes;for(let H=0,oe=L.length;H<oe;H++)L[H]=0}function S(L){x(L,0)}function x(L,H){const oe=l.newAttributes,ae=l.enabledAttributes,ce=l.attributeDivisors;oe[L]=1,ae[L]===0&&(a.enableVertexAttribArray(L),ae[L]=1),ce[L]!==H&&(a.vertexAttribDivisor(L,H),ce[L]=H)}function U(){const L=l.newAttributes,H=l.enabledAttributes;for(let oe=0,ae=H.length;oe<ae;oe++)H[oe]!==L[oe]&&(a.disableVertexAttribArray(oe),H[oe]=0)}function C(L,H,oe,ae,ce,fe,B){B===!0?a.vertexAttribIPointer(L,H,oe,ce,fe):a.vertexAttribPointer(L,H,oe,ae,ce,fe)}function E(L,H,oe,ae){b();const ce=ae.attributes,fe=oe.getAttributes(),B=H.defaultAttributeValues;for(const Z in fe){const q=fe[Z];if(q.location>=0){let me=ce[Z];if(me===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(me=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(me=L.instanceColor)),me!==void 0){const O=me.normalized,Q=me.itemSize,pe=e.get(me);if(pe===void 0)continue;const xe=pe.buffer,Ae=pe.type,$=pe.bytesPerElement,le=Ae===a.INT||Ae===a.UNSIGNED_INT||me.gpuType===O0;if(me.isInterleavedBufferAttribute){const Se=me.data,we=Se.stride,ze=me.offset;if(Se.isInstancedInterleavedBuffer){for(let qe=0;qe<q.locationSize;qe++)x(q.location+qe,Se.meshPerAttribute);L.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let qe=0;qe<q.locationSize;qe++)S(q.location+qe);a.bindBuffer(a.ARRAY_BUFFER,xe);for(let qe=0;qe<q.locationSize;qe++)C(q.location+qe,Q/q.locationSize,Ae,O,we*$,(ze+Q/q.locationSize*qe)*$,le)}else{if(me.isInstancedBufferAttribute){for(let Se=0;Se<q.locationSize;Se++)x(q.location+Se,me.meshPerAttribute);L.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Se=0;Se<q.locationSize;Se++)S(q.location+Se);a.bindBuffer(a.ARRAY_BUFFER,xe);for(let Se=0;Se<q.locationSize;Se++)C(q.location+Se,Q/q.locationSize,Ae,O,Q*$,Q/q.locationSize*Se*$,le)}}else if(B!==void 0){const O=B[Z];if(O!==void 0)switch(O.length){case 2:a.vertexAttrib2fv(q.location,O);break;case 3:a.vertexAttrib3fv(q.location,O);break;case 4:a.vertexAttrib4fv(q.location,O);break;default:a.vertexAttrib1fv(q.location,O)}}}}U()}function N(){G();for(const L in r){const H=r[L];for(const oe in H){const ae=H[oe];for(const ce in ae)m(ae[ce].object),delete ae[ce];delete H[oe]}delete r[L]}}function z(L){if(r[L.id]===void 0)return;const H=r[L.id];for(const oe in H){const ae=H[oe];for(const ce in ae)m(ae[ce].object),delete ae[ce];delete H[oe]}delete r[L.id]}function P(L){for(const H in r){const oe=r[H];if(oe[L.id]===void 0)continue;const ae=oe[L.id];for(const ce in ae)m(ae[ce].object),delete ae[ce];delete oe[L.id]}}function G(){D(),u=!0,l!==s&&(l=s,h(l.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:G,resetDefaultState:D,dispose:N,releaseStatesOfGeometry:z,releaseStatesOfProgram:P,initAttributes:b,enableAttribute:S,disableUnusedAttributes:U}}function HR(a,e,t){let r;function s(h){r=h}function l(h,m){a.drawArrays(r,h,m),t.update(m,r,1)}function u(h,m,v){v!==0&&(a.drawArraysInstanced(r,h,m,v),t.update(m,r,v))}function f(h,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,m,0,v);let y=0;for(let M=0;M<v;M++)y+=m[M];t.update(y,r,1)}function p(h,m,v,_){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<h.length;M++)u(h[M],m[M],_[M]);else{y.multiDrawArraysInstancedWEBGL(r,h,0,m,0,_,0,v);let M=0;for(let b=0;b<v;b++)M+=m[b]*_[b];t.update(M,r,1)}}this.setMode=s,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function VR(a,e,t,r){let s;function l(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=a.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(P){return!(P!==Oi&&r.convert(P)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(P){const G=P===Lc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Rr&&r.convert(P)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==hn&&!G)}function p(P){if(P==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=p(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const v=t.logarithmicDepthBuffer===!0,_=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),M=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_TEXTURE_SIZE),S=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),x=a.getParameter(a.MAX_VERTEX_ATTRIBS),U=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),C=a.getParameter(a.MAX_VARYING_VECTORS),E=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),N=M>0,z=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:U,maxVaryings:C,maxFragmentUniforms:E,vertexTextures:N,maxSamples:z}}function GR(a){const e=this;let t=null,r=0,s=!1,l=!1;const u=new Ha,f=new ht,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const y=v.length!==0||_||r!==0||s;return s=_,r=v.length,y},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,_){t=m(v,_,0)},this.setState=function(v,_,y){const M=v.clippingPlanes,b=v.clipIntersection,S=v.clipShadows,x=a.get(v);if(!s||M===null||M.length===0||l&&!S)l?m(null):h();else{const U=l?0:r,C=U*4;let E=x.clippingState||null;p.value=E,E=m(M,_,C,y);for(let N=0;N!==C;++N)E[N]=t[N];x.clippingState=E,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=U}};function h(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(v,_,y,M){const b=v!==null?v.length:0;let S=null;if(b!==0){if(S=p.value,M!==!0||S===null){const x=y+b*4,U=_.matrixWorldInverse;f.getNormalMatrix(U),(S===null||S.length<x)&&(S=new Float32Array(x));for(let C=0,E=y;C!==b;++C,E+=4)u.copy(v[C]).applyMatrix4(U,f),u.normal.toArray(S,E),S[E+3]=u.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,S}}function kR(a){let e=new WeakMap;function t(u,f){return f===Om?u.mapping=Go:f===Im&&(u.mapping=ko),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===Om||f===Im)if(e.has(u)){const p=e.get(u).texture;return t(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const h=new u3(p.height);return h.fromEquirectangularTexture(a,u),e.set(u,h),u.addEventListener("dispose",s),t(h.texture,u.mapping)}else return null}}return u}function s(u){const f=u.target;f.removeEventListener("dispose",s);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Do=4,qy=[.125,.215,.35,.446,.526,.582],xs=20,tm=new Q0,jy=new st;let nm=null,im=0,rm=0,am=!1;const ys=(1+Math.sqrt(5))/2,bo=1/ys,Zy=[new V(-ys,bo,0),new V(ys,bo,0),new V(-bo,0,ys),new V(bo,0,ys),new V(0,ys,-bo),new V(0,ys,bo),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],XR=new V;class p0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,s=100,l={}){const{size:u=256,position:f=XR}=l;nm=this._renderer.getRenderTarget(),im=this._renderer.getActiveCubeFace(),rm=this._renderer.getActiveMipmapLevel(),am=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,s,p,f),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nm,im,rm),this._renderer.xr.enabled=am,e.scissorTest=!1,_f(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Go||e.mapping===ko?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nm=this._renderer.getRenderTarget(),im=this._renderer.getActiveCubeFace(),rm=this._renderer.getActiveMipmapLevel(),am=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:Lc,format:Oi,colorSpace:di,depthBuffer:!1},s=Ky(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ky(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=WR(l)),this._blurMaterial=YR(l,e,t)}return s}_compileMaterial(e){const t=new Vt(this._lodPlanes[0],e);this._renderer.compile(t,tm)}_sceneToCubeUV(e,t,r,s,l){const p=new fn(90,1,t,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,y=v.toneMapping;v.getClearColor(jy),v.toneMapping=ja,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(s),v.clearDepth(),v.setRenderTarget(null));const b=new ji({name:"PMREM.Background",side:xi,depthWrite:!1,depthTest:!1}),S=new Vt(new Nc,b);let x=!1;const U=e.background;U?U.isColor&&(b.color.copy(U),e.background=null,x=!0):(b.color.copy(jy),x=!0);for(let C=0;C<6;C++){const E=C%3;E===0?(p.up.set(0,h[C],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+m[C],l.y,l.z)):E===1?(p.up.set(0,0,h[C]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+m[C],l.z)):(p.up.set(0,h[C],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+m[C]));const N=this._cubeSize;_f(s,E*N,C>2?N:0,N,N),v.setRenderTarget(s),x&&v.render(S,p),v.render(e,p)}S.geometry.dispose(),S.material.dispose(),v.toneMapping=y,v.autoClear=_,e.background=U}_textureToCubeUV(e,t){const r=this._renderer,s=e.mapping===Go||e.mapping===ko;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jy()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qy());const l=s?this._cubemapMaterial:this._equirectMaterial,u=new Vt(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const p=this._cubeSize;_f(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(u,tm)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let l=1;l<s;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Zy[(s-l-1)%Zy.length];this._blur(e,l-1,l,u,f)}t.autoClear=r}_blur(e,t,r,s,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,s,"latitudinal",l),this._halfBlur(u,e,r,r,s,"longitudinal",l)}_halfBlur(e,t,r,s,l,u,f){const p=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,v=new Vt(this._lodPlanes[s],h),_=h.uniforms,y=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*xs-1),b=l/M,S=isFinite(l)?1+Math.floor(m*b):xs;S>xs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${xs}`);const x=[];let U=0;for(let P=0;P<xs;++P){const G=P/b,D=Math.exp(-G*G/2);x.push(D),P===0?U+=D:P<S&&(U+=2*D)}for(let P=0;P<x.length;P++)x[P]=x[P]/U;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=x,_.latitudinal.value=u==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:C}=this;_.dTheta.value=M,_.mipInt.value=C-r;const E=this._sizeLods[s],N=3*E*(s>C-Do?s-C+Do:0),z=4*(this._cubeSize-E);_f(t,N,z,3*E,2*E),p.setRenderTarget(t),p.render(v,tm)}}function WR(a){const e=[],t=[],r=[];let s=a;const l=a-Do+1+qy.length;for(let u=0;u<l;u++){const f=Math.pow(2,s);t.push(f);let p=1/f;u>a-Do?p=qy[u-a+Do-1]:u===0&&(p=0),r.push(p);const h=1/(f-2),m=-h,v=1+h,_=[m,m,v,m,v,v,m,m,v,v,m,v],y=6,M=6,b=3,S=2,x=1,U=new Float32Array(b*M*y),C=new Float32Array(S*M*y),E=new Float32Array(x*M*y);for(let z=0;z<y;z++){const P=z%3*2/3-1,G=z>2?0:-1,D=[P,G,0,P+2/3,G,0,P+2/3,G+1,0,P,G,0,P+2/3,G+1,0,P,G+1,0];U.set(D,b*M*z),C.set(_,S*M*z);const L=[z,z,z,z,z,z];E.set(L,x*M*z)}const N=new zi;N.setAttribute("position",new Mn(U,b)),N.setAttribute("uv",new Mn(C,S)),N.setAttribute("faceIndex",new Mn(E,x)),e.push(N),s>Do&&s--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Ky(a,e,t){const r=new pn(a,e,t);return r.texture.mapping=fh,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function _f(a,e,t,r,s){a.viewport.set(e,t,r,s),a.scissor.set(e,t,r,s)}function YR(a,e,t){const r=new Float32Array(xs),s=new V(0,1,0);return new Ut({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ng(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qa,depthTest:!1,depthWrite:!1})}function Qy(){return new Ut({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ng(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qa,depthTest:!1,depthWrite:!1})}function Jy(){return new Ut({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ng(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qa,depthTest:!1,depthWrite:!1})}function ng(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qR(a){let e=new WeakMap,t=null;function r(f){if(f&&f.isTexture){const p=f.mapping,h=p===Om||p===Im,m=p===Go||p===ko;if(h||m){let v=e.get(f);const _=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return t===null&&(t=new p0(a)),v=h?t.fromEquirectangular(f,v):t.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const y=f.image;return h&&y&&y.height>0||m&&y&&s(y)?(t===null&&(t=new p0(a)),v=h?t.fromEquirectangular(f):t.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function s(f){let p=0;const h=6;for(let m=0;m<h;m++)f[m]!==void 0&&p++;return p===h}function l(f){const p=f.target;p.removeEventListener("dispose",l);const h=e.get(p);h!==void 0&&(e.delete(p),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function jR(a){const e={};function t(r){if(e[r]!==void 0)return e[r];let s;switch(r){case"WEBGL_depth_texture":s=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=a.getExtension(r)}return e[r]=s,s}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const s=t(r);return s===null&&No("THREE.WebGLRenderer: "+r+" extension not supported."),s}}}function ZR(a,e,t,r){const s={},l=new WeakMap;function u(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",u),delete s[_.id];const y=l.get(_);y&&(e.remove(y),l.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function f(v,_){return s[_.id]===!0||(_.addEventListener("dispose",u),s[_.id]=!0,t.memory.geometries++),_}function p(v){const _=v.attributes;for(const y in _)e.update(_[y],a.ARRAY_BUFFER)}function h(v){const _=[],y=v.index,M=v.attributes.position;let b=0;if(y!==null){const U=y.array;b=y.version;for(let C=0,E=U.length;C<E;C+=3){const N=U[C+0],z=U[C+1],P=U[C+2];_.push(N,z,z,P,P,N)}}else if(M!==void 0){const U=M.array;b=M.version;for(let C=0,E=U.length/3-1;C<E;C+=3){const N=C+0,z=C+1,P=C+2;_.push(N,z,z,P,P,N)}}else return;const S=new(DS(_)?PS:NS)(_,1);S.version=b;const x=l.get(v);x&&e.remove(x),l.set(v,S)}function m(v){const _=l.get(v);if(_){const y=v.index;y!==null&&_.version<y.version&&h(v)}else h(v);return l.get(v)}return{get:f,update:p,getWireframeAttribute:m}}function KR(a,e,t){let r;function s(_){r=_}let l,u;function f(_){l=_.type,u=_.bytesPerElement}function p(_,y){a.drawElements(r,y,l,_*u),t.update(y,r,1)}function h(_,y,M){M!==0&&(a.drawElementsInstanced(r,y,l,_*u,M),t.update(y,r,M))}function m(_,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,l,_,0,M);let S=0;for(let x=0;x<M;x++)S+=y[x];t.update(S,r,1)}function v(_,y,M,b){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<_.length;x++)h(_[x]/u,y[x],b[x]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,l,_,0,b,0,M);let x=0;for(let U=0;U<M;U++)x+=y[U]*b[U];t.update(x,r,1)}}this.setMode=s,this.setIndex=f,this.render=p,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=v}function QR(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case a.TRIANGLES:t.triangles+=f*(l/3);break;case a.LINES:t.lines+=f*(l/2);break;case a.LINE_STRIP:t.lines+=f*(l-1);break;case a.LINE_LOOP:t.lines+=f*l;break;case a.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:r}}function JR(a,e,t){const r=new WeakMap,s=new Nt;function l(u,f,p){const h=u.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=m!==void 0?m.length:0;let _=r.get(f);if(_===void 0||_.count!==v){let L=function(){G.dispose(),r.delete(f),f.removeEventListener("dispose",L)};var y=L;_!==void 0&&_.texture.dispose();const M=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],U=f.morphAttributes.normal||[],C=f.morphAttributes.color||[];let E=0;M===!0&&(E=1),b===!0&&(E=2),S===!0&&(E=3);let N=f.attributes.position.count*E,z=1;N>e.maxTextureSize&&(z=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const P=new Float32Array(N*z*4*v),G=new US(P,N,z,v);G.type=hn,G.needsUpdate=!0;const D=E*4;for(let H=0;H<v;H++){const oe=x[H],ae=U[H],ce=C[H],fe=N*z*4*H;for(let B=0;B<oe.count;B++){const Z=B*D;M===!0&&(s.fromBufferAttribute(oe,B),P[fe+Z+0]=s.x,P[fe+Z+1]=s.y,P[fe+Z+2]=s.z,P[fe+Z+3]=0),b===!0&&(s.fromBufferAttribute(ae,B),P[fe+Z+4]=s.x,P[fe+Z+5]=s.y,P[fe+Z+6]=s.z,P[fe+Z+7]=0),S===!0&&(s.fromBufferAttribute(ce,B),P[fe+Z+8]=s.x,P[fe+Z+9]=s.y,P[fe+Z+10]=s.z,P[fe+Z+11]=ce.itemSize===4?s.w:1)}}_={count:v,texture:G,size:new Be(N,z)},r.set(f,_),f.addEventListener("dispose",L)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(a,"morphTexture",u.morphTexture,t);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const b=f.morphTargetsRelative?1:1-M;p.getUniforms().setValue(a,"morphTargetBaseInfluence",b),p.getUniforms().setValue(a,"morphTargetInfluences",h)}p.getUniforms().setValue(a,"morphTargetsTexture",_.texture,t),p.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}return{update:l}}function $R(a,e,t,r){let s=new WeakMap;function l(p){const h=r.render.frame,m=p.geometry,v=e.get(p,m);if(s.get(v)!==h&&(e.update(v),s.set(v,h)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),s.get(p)!==h&&(t.update(p.instanceMatrix,a.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,a.ARRAY_BUFFER),s.set(p,h))),p.isSkinnedMesh){const _=p.skeleton;s.get(_)!==h&&(_.update(),s.set(_,h))}return v}function u(){s=new WeakMap}function f(p){const h=p.target;h.removeEventListener("dispose",f),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:u}}const jS=new Wn,$y=new kS(1,1),ZS=new US,KS=new qE,QS=new zS,ex=[],tx=[],nx=new Float32Array(16),ix=new Float32Array(9),rx=new Float32Array(4);function tl(a,e,t){const r=a[0];if(r<=0||r>0)return a;const s=e*t;let l=ex[s];if(l===void 0&&(l=new Float32Array(s),ex[s]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,a[u].toArray(l,f)}return l}function In(a,e){if(a.length!==e.length)return!1;for(let t=0,r=a.length;t<r;t++)if(a[t]!==e[t])return!1;return!0}function zn(a,e){for(let t=0,r=e.length;t<r;t++)a[t]=e[t]}function ph(a,e){let t=tx[e];t===void 0&&(t=new Int32Array(e),tx[e]=t);for(let r=0;r!==e;++r)t[r]=a.allocateTextureUnit();return t}function eC(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function tC(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;a.uniform2fv(this.addr,e),zn(t,e)}}function nC(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(In(t,e))return;a.uniform3fv(this.addr,e),zn(t,e)}}function iC(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;a.uniform4fv(this.addr,e),zn(t,e)}}function rC(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(In(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),zn(t,e)}else{if(In(t,r))return;rx.set(r),a.uniformMatrix2fv(this.addr,!1,rx),zn(t,r)}}function aC(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(In(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),zn(t,e)}else{if(In(t,r))return;ix.set(r),a.uniformMatrix3fv(this.addr,!1,ix),zn(t,r)}}function sC(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(In(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),zn(t,e)}else{if(In(t,r))return;nx.set(r),a.uniformMatrix4fv(this.addr,!1,nx),zn(t,r)}}function oC(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function lC(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;a.uniform2iv(this.addr,e),zn(t,e)}}function cC(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(In(t,e))return;a.uniform3iv(this.addr,e),zn(t,e)}}function uC(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;a.uniform4iv(this.addr,e),zn(t,e)}}function fC(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function hC(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;a.uniform2uiv(this.addr,e),zn(t,e)}}function dC(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(In(t,e))return;a.uniform3uiv(this.addr,e),zn(t,e)}}function pC(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;a.uniform4uiv(this.addr,e),zn(t,e)}}function mC(a,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(a.uniform1i(this.addr,s),r[0]=s);let l;this.type===a.SAMPLER_2D_SHADOW?($y.compareFunction=RS,l=$y):l=jS,t.setTexture2D(e||l,s)}function gC(a,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(a.uniform1i(this.addr,s),r[0]=s),t.setTexture3D(e||KS,s)}function vC(a,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(a.uniform1i(this.addr,s),r[0]=s),t.setTextureCube(e||QS,s)}function _C(a,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(a.uniform1i(this.addr,s),r[0]=s),t.setTexture2DArray(e||ZS,s)}function yC(a){switch(a){case 5126:return eC;case 35664:return tC;case 35665:return nC;case 35666:return iC;case 35674:return rC;case 35675:return aC;case 35676:return sC;case 5124:case 35670:return oC;case 35667:case 35671:return lC;case 35668:case 35672:return cC;case 35669:case 35673:return uC;case 5125:return fC;case 36294:return hC;case 36295:return dC;case 36296:return pC;case 35678:case 36198:case 36298:case 36306:case 35682:return mC;case 35679:case 36299:case 36307:return gC;case 35680:case 36300:case 36308:case 36293:return vC;case 36289:case 36303:case 36311:case 36292:return _C}}function xC(a,e){a.uniform1fv(this.addr,e)}function SC(a,e){const t=tl(e,this.size,2);a.uniform2fv(this.addr,t)}function MC(a,e){const t=tl(e,this.size,3);a.uniform3fv(this.addr,t)}function TC(a,e){const t=tl(e,this.size,4);a.uniform4fv(this.addr,t)}function bC(a,e){const t=tl(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function EC(a,e){const t=tl(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function AC(a,e){const t=tl(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function wC(a,e){a.uniform1iv(this.addr,e)}function RC(a,e){a.uniform2iv(this.addr,e)}function CC(a,e){a.uniform3iv(this.addr,e)}function DC(a,e){a.uniform4iv(this.addr,e)}function UC(a,e){a.uniform1uiv(this.addr,e)}function LC(a,e){a.uniform2uiv(this.addr,e)}function NC(a,e){a.uniform3uiv(this.addr,e)}function PC(a,e){a.uniform4uiv(this.addr,e)}function OC(a,e,t){const r=this.cache,s=e.length,l=ph(t,s);In(r,l)||(a.uniform1iv(this.addr,l),zn(r,l));for(let u=0;u!==s;++u)t.setTexture2D(e[u]||jS,l[u])}function IC(a,e,t){const r=this.cache,s=e.length,l=ph(t,s);In(r,l)||(a.uniform1iv(this.addr,l),zn(r,l));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||KS,l[u])}function zC(a,e,t){const r=this.cache,s=e.length,l=ph(t,s);In(r,l)||(a.uniform1iv(this.addr,l),zn(r,l));for(let u=0;u!==s;++u)t.setTextureCube(e[u]||QS,l[u])}function BC(a,e,t){const r=this.cache,s=e.length,l=ph(t,s);In(r,l)||(a.uniform1iv(this.addr,l),zn(r,l));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||ZS,l[u])}function FC(a){switch(a){case 5126:return xC;case 35664:return SC;case 35665:return MC;case 35666:return TC;case 35674:return bC;case 35675:return EC;case 35676:return AC;case 5124:case 35670:return wC;case 35667:case 35671:return RC;case 35668:case 35672:return CC;case 35669:case 35673:return DC;case 5125:return UC;case 36294:return LC;case 36295:return NC;case 36296:return PC;case 35678:case 36198:case 36298:case 36306:case 35682:return OC;case 35679:case 36299:case 36307:return IC;case 35680:case 36300:case 36308:case 36293:return zC;case 36289:case 36303:case 36311:case 36292:return BC}}class HC{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=yC(t.type)}}class VC{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=FC(t.type)}}class GC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const s=this.seq;for(let l=0,u=s.length;l!==u;++l){const f=s[l];f.setValue(e,t[f.id],r)}}}const sm=/(\w+)(\])?(\[|\.)?/g;function ax(a,e){a.seq.push(e),a.map[e.id]=e}function kC(a,e,t){const r=a.name,s=r.length;for(sm.lastIndex=0;;){const l=sm.exec(r),u=sm.lastIndex;let f=l[1];const p=l[2]==="]",h=l[3];if(p&&(f=f|0),h===void 0||h==="["&&u+2===s){ax(t,h===void 0?new HC(f,a,e):new VC(f,a,e));break}else{let v=t.map[f];v===void 0&&(v=new GC(f),ax(t,v)),t=v}}}class Pf{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<r;++s){const l=e.getActiveUniform(t,s),u=e.getUniformLocation(t,l.name);kC(l,u,this)}}setValue(e,t,r,s){const l=this.map[t];l!==void 0&&l.setValue(e,r,s)}setOptional(e,t,r){const s=t[r];s!==void 0&&this.setValue(e,r,s)}static upload(e,t,r,s){for(let l=0,u=t.length;l!==u;++l){const f=t[l],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,s)}}static seqWithValue(e,t){const r=[];for(let s=0,l=e.length;s!==l;++s){const u=e[s];u.id in t&&r.push(u)}return r}}function sx(a,e,t){const r=a.createShader(e);return a.shaderSource(r,t),a.compileShader(r),r}const XC=37297;let WC=0;function YC(a,e){const t=a.split(`
`),r=[],s=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=s;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const ox=new ht;function qC(a){At._getMatrix(ox,At.workingColorSpace,a);const e=`mat3( ${ox.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(a)){case Yf:return[e,"LinearTransferOETF"];case qt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function lx(a,e,t){const r=a.getShaderParameter(e,a.COMPILE_STATUS),l=(a.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+YC(a.getShaderSource(e),f)}else return l}function jC(a,e){const t=qC(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ZC(a,e){let t;switch(e){case aE:t="Linear";break;case sE:t="Reinhard";break;case oE:t="Cineon";break;case lE:t="ACESFilmic";break;case cE:t="AgX";break;case uE:t="Neutral";break;case gS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const yf=new V;function KC(){At.getLuminanceCoefficients(yf);const a=yf.x.toFixed(4),e=yf.y.toFixed(4),t=yf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QC(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cc).join(`
`)}function JC(a){const e=[];for(const t in a){const r=a[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function $C(a,e){const t={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let s=0;s<r;s++){const l=a.getActiveAttrib(e,s),u=l.name;let f=1;l.type===a.FLOAT_MAT2&&(f=2),l.type===a.FLOAT_MAT3&&(f=3),l.type===a.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:a.getAttribLocation(e,u),locationSize:f}}return t}function cc(a){return a!==""}function cx(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ux(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const e5=/^[ \t]*#include +<([\w\d./]+)>/gm;function m0(a){return a.replace(e5,n5)}const t5=new Map;function n5(a,e){let t=lt[e];if(t===void 0){const r=t5.get(e);if(r!==void 0)t=lt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return m0(t)}const i5=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fx(a){return a.replace(i5,r5)}function r5(a,e,t,r){let s="";for(let l=parseInt(e);l<parseInt(t);l++)s+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function hx(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function a5(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===pS?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Bb?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===$r&&(e="SHADOWMAP_TYPE_VSM"),e}function s5(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Go:case ko:e="ENVMAP_TYPE_CUBE";break;case fh:e="ENVMAP_TYPE_CUBE_UV";break}return e}function o5(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case ko:e="ENVMAP_MODE_REFRACTION";break}return e}function l5(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case mS:e="ENVMAP_BLENDING_MULTIPLY";break;case iE:e="ENVMAP_BLENDING_MIX";break;case rE:e="ENVMAP_BLENDING_ADD";break}return e}function c5(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function u5(a,e,t,r){const s=a.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const p=a5(t),h=s5(t),m=o5(t),v=l5(t),_=c5(t),y=QC(t),M=JC(l),b=s.createProgram();let S,x,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(cc).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(cc).join(`
`),x.length>0&&(x+=`
`)):(S=[hx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cc).join(`
`),x=[hx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ja?"#define TONE_MAPPING":"",t.toneMapping!==ja?lt.tonemapping_pars_fragment:"",t.toneMapping!==ja?ZC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,jC("linearToOutputTexel",t.outputColorSpace),KC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cc).join(`
`)),u=m0(u),u=cx(u,t),u=ux(u,t),f=m0(f),f=cx(f,t),f=ux(f,t),u=fx(u),f=fx(f),t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===oy?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===oy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const C=U+S+u,E=U+x+f,N=sx(s,s.VERTEX_SHADER,C),z=sx(s,s.FRAGMENT_SHADER,E);s.attachShader(b,N),s.attachShader(b,z),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function P(H){if(a.debug.checkShaderErrors){const oe=s.getProgramInfoLog(b)||"",ae=s.getShaderInfoLog(N)||"",ce=s.getShaderInfoLog(z)||"",fe=oe.trim(),B=ae.trim(),Z=ce.trim();let q=!0,me=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(q=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(s,b,N,z);else{const O=lx(s,N,"vertex"),Q=lx(s,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+fe+`
`+O+`
`+Q)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(B===""||Z==="")&&(me=!1);me&&(H.diagnostics={runnable:q,programLog:fe,vertexShader:{log:B,prefix:S},fragmentShader:{log:Z,prefix:x}})}s.deleteShader(N),s.deleteShader(z),G=new Pf(s,b),D=$C(s,b)}let G;this.getUniforms=function(){return G===void 0&&P(this),G};let D;this.getAttributes=function(){return D===void 0&&P(this),D};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(b,XC)),L},this.destroy=function(){r.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=WC++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=N,this.fragmentShader=z,this}let f5=0;class h5{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,s=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(s)===!1&&(u.add(s),s.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new d5(e),t.set(e,r)),r}}class d5{constructor(e){this.id=f5++,this.code=e,this.usedTimes=0}}function p5(a,e,t,r,s,l,u){const f=new X0,p=new h5,h=new Set,m=[],v=s.logarithmicDepthBuffer,_=s.vertexTextures;let y=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(D){return h.add(D),D===0?"uv":`uv${D}`}function S(D,L,H,oe,ae){const ce=oe.fog,fe=ae.geometry,B=D.isMeshStandardMaterial?oe.environment:null,Z=(D.isMeshStandardMaterial?t:e).get(D.envMap||B),q=Z&&Z.mapping===fh?Z.image.height:null,me=M[D.type];D.precision!==null&&(y=s.getMaxPrecision(D.precision),y!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",y,"instead."));const O=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,Q=O!==void 0?O.length:0;let pe=0;fe.morphAttributes.position!==void 0&&(pe=1),fe.morphAttributes.normal!==void 0&&(pe=2),fe.morphAttributes.color!==void 0&&(pe=3);let xe,Ae,$,le;if(me){const Rt=Tr[me];xe=Rt.vertexShader,Ae=Rt.fragmentShader}else xe=D.vertexShader,Ae=D.fragmentShader,p.update(D),$=p.getVertexShaderID(D),le=p.getFragmentShaderID(D);const Se=a.getRenderTarget(),we=a.state.buffers.depth.getReversed(),ze=ae.isInstancedMesh===!0,qe=ae.isBatchedMesh===!0,bt=!!D.map,at=!!D.matcap,k=!!Z,Pt=!!D.aoMap,Je=!!D.lightMap,wt=!!D.bumpMap,He=!!D.normalMap,$t=!!D.displacementMap,Ve=!!D.emissiveMap,ct=!!D.metalnessMap,on=!!D.roughnessMap,ln=D.anisotropy>0,I=D.clearcoat>0,A=D.dispersion>0,te=D.iridescence>0,he=D.sheen>0,ye=D.transmission>0,ue=ln&&!!D.anisotropyMap,Oe=I&&!!D.clearcoatMap,Re=I&&!!D.clearcoatNormalMap,We=I&&!!D.clearcoatRoughnessMap,je=te&&!!D.iridescenceMap,Me=te&&!!D.iridescenceThicknessMap,Le=he&&!!D.sheenColorMap,Ke=he&&!!D.sheenRoughnessMap,Xe=!!D.specularMap,De=!!D.specularColorMap,ot=!!D.specularIntensityMap,W=ye&&!!D.transmissionMap,Ee=ye&&!!D.thicknessMap,Ce=!!D.gradientMap,Ie=!!D.alphaMap,Te=D.alphaTest>0,_e=!!D.alphaHash,ke=!!D.extensions;let rt=ja;D.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(rt=a.toneMapping);const Ot={shaderID:me,shaderType:D.type,shaderName:D.name,vertexShader:xe,fragmentShader:Ae,defines:D.defines,customVertexShaderID:$,customFragmentShaderID:le,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:y,batching:qe,batchingColor:qe&&ae._colorsTexture!==null,instancing:ze,instancingColor:ze&&ae.instanceColor!==null,instancingMorph:ze&&ae.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:Se===null?a.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:di,alphaToCoverage:!!D.alphaToCoverage,map:bt,matcap:at,envMap:k,envMapMode:k&&Z.mapping,envMapCubeUVHeight:q,aoMap:Pt,lightMap:Je,bumpMap:wt,normalMap:He,displacementMap:_&&$t,emissiveMap:Ve,normalMapObjectSpace:He&&D.normalMapType===gE,normalMapTangentSpace:He&&D.normalMapType===wS,metalnessMap:ct,roughnessMap:on,anisotropy:ln,anisotropyMap:ue,clearcoat:I,clearcoatMap:Oe,clearcoatNormalMap:Re,clearcoatRoughnessMap:We,dispersion:A,iridescence:te,iridescenceMap:je,iridescenceThicknessMap:Me,sheen:he,sheenColorMap:Le,sheenRoughnessMap:Ke,specularMap:Xe,specularColorMap:De,specularIntensityMap:ot,transmission:ye,transmissionMap:W,thicknessMap:Ee,gradientMap:Ce,opaque:D.transparent===!1&&D.blending===Lo&&D.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Te,alphaHash:_e,combine:D.combine,mapUv:bt&&b(D.map.channel),aoMapUv:Pt&&b(D.aoMap.channel),lightMapUv:Je&&b(D.lightMap.channel),bumpMapUv:wt&&b(D.bumpMap.channel),normalMapUv:He&&b(D.normalMap.channel),displacementMapUv:$t&&b(D.displacementMap.channel),emissiveMapUv:Ve&&b(D.emissiveMap.channel),metalnessMapUv:ct&&b(D.metalnessMap.channel),roughnessMapUv:on&&b(D.roughnessMap.channel),anisotropyMapUv:ue&&b(D.anisotropyMap.channel),clearcoatMapUv:Oe&&b(D.clearcoatMap.channel),clearcoatNormalMapUv:Re&&b(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&b(D.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&b(D.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&b(D.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&b(D.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&b(D.sheenRoughnessMap.channel),specularMapUv:Xe&&b(D.specularMap.channel),specularColorMapUv:De&&b(D.specularColorMap.channel),specularIntensityMapUv:ot&&b(D.specularIntensityMap.channel),transmissionMapUv:W&&b(D.transmissionMap.channel),thicknessMapUv:Ee&&b(D.thicknessMap.channel),alphaMapUv:Ie&&b(D.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(He||ln),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:ae.isPoints===!0&&!!fe.attributes.uv&&(bt||Ie),fog:!!ce,useFog:D.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:we,skinning:ae.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:pe,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:D.dithering,shadowMapEnabled:a.shadowMap.enabled&&H.length>0,shadowMapType:a.shadowMap.type,toneMapping:rt,decodeVideoTexture:bt&&D.map.isVideoTexture===!0&&At.getTransfer(D.map.colorSpace)===qt,decodeVideoTextureEmissive:Ve&&D.emissiveMap.isVideoTexture===!0&&At.getTransfer(D.emissiveMap.colorSpace)===qt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Pn,flipSided:D.side===xi,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:ke&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&D.extensions.multiDraw===!0||qe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ot.vertexUv1s=h.has(1),Ot.vertexUv2s=h.has(2),Ot.vertexUv3s=h.has(3),h.clear(),Ot}function x(D){const L=[];if(D.shaderID?L.push(D.shaderID):(L.push(D.customVertexShaderID),L.push(D.customFragmentShaderID)),D.defines!==void 0)for(const H in D.defines)L.push(H),L.push(D.defines[H]);return D.isRawShaderMaterial===!1&&(U(L,D),C(L,D),L.push(a.outputColorSpace)),L.push(D.customProgramCacheKey),L.join()}function U(D,L){D.push(L.precision),D.push(L.outputColorSpace),D.push(L.envMapMode),D.push(L.envMapCubeUVHeight),D.push(L.mapUv),D.push(L.alphaMapUv),D.push(L.lightMapUv),D.push(L.aoMapUv),D.push(L.bumpMapUv),D.push(L.normalMapUv),D.push(L.displacementMapUv),D.push(L.emissiveMapUv),D.push(L.metalnessMapUv),D.push(L.roughnessMapUv),D.push(L.anisotropyMapUv),D.push(L.clearcoatMapUv),D.push(L.clearcoatNormalMapUv),D.push(L.clearcoatRoughnessMapUv),D.push(L.iridescenceMapUv),D.push(L.iridescenceThicknessMapUv),D.push(L.sheenColorMapUv),D.push(L.sheenRoughnessMapUv),D.push(L.specularMapUv),D.push(L.specularColorMapUv),D.push(L.specularIntensityMapUv),D.push(L.transmissionMapUv),D.push(L.thicknessMapUv),D.push(L.combine),D.push(L.fogExp2),D.push(L.sizeAttenuation),D.push(L.morphTargetsCount),D.push(L.morphAttributeCount),D.push(L.numDirLights),D.push(L.numPointLights),D.push(L.numSpotLights),D.push(L.numSpotLightMaps),D.push(L.numHemiLights),D.push(L.numRectAreaLights),D.push(L.numDirLightShadows),D.push(L.numPointLightShadows),D.push(L.numSpotLightShadows),D.push(L.numSpotLightShadowsWithMaps),D.push(L.numLightProbes),D.push(L.shadowMapType),D.push(L.toneMapping),D.push(L.numClippingPlanes),D.push(L.numClipIntersection),D.push(L.depthPacking)}function C(D,L){f.disableAll(),L.supportsVertexTextures&&f.enable(0),L.instancing&&f.enable(1),L.instancingColor&&f.enable(2),L.instancingMorph&&f.enable(3),L.matcap&&f.enable(4),L.envMap&&f.enable(5),L.normalMapObjectSpace&&f.enable(6),L.normalMapTangentSpace&&f.enable(7),L.clearcoat&&f.enable(8),L.iridescence&&f.enable(9),L.alphaTest&&f.enable(10),L.vertexColors&&f.enable(11),L.vertexAlphas&&f.enable(12),L.vertexUv1s&&f.enable(13),L.vertexUv2s&&f.enable(14),L.vertexUv3s&&f.enable(15),L.vertexTangents&&f.enable(16),L.anisotropy&&f.enable(17),L.alphaHash&&f.enable(18),L.batching&&f.enable(19),L.dispersion&&f.enable(20),L.batchingColor&&f.enable(21),L.gradientMap&&f.enable(22),D.push(f.mask),f.disableAll(),L.fog&&f.enable(0),L.useFog&&f.enable(1),L.flatShading&&f.enable(2),L.logarithmicDepthBuffer&&f.enable(3),L.reversedDepthBuffer&&f.enable(4),L.skinning&&f.enable(5),L.morphTargets&&f.enable(6),L.morphNormals&&f.enable(7),L.morphColors&&f.enable(8),L.premultipliedAlpha&&f.enable(9),L.shadowMapEnabled&&f.enable(10),L.doubleSided&&f.enable(11),L.flipSided&&f.enable(12),L.useDepthPacking&&f.enable(13),L.dithering&&f.enable(14),L.transmission&&f.enable(15),L.sheen&&f.enable(16),L.opaque&&f.enable(17),L.pointsUvs&&f.enable(18),L.decodeVideoTexture&&f.enable(19),L.decodeVideoTextureEmissive&&f.enable(20),L.alphaToCoverage&&f.enable(21),D.push(f.mask)}function E(D){const L=M[D.type];let H;if(L){const oe=Tr[L];H=s3.clone(oe.uniforms)}else H=D.uniforms;return H}function N(D,L){let H;for(let oe=0,ae=m.length;oe<ae;oe++){const ce=m[oe];if(ce.cacheKey===L){H=ce,++H.usedTimes;break}}return H===void 0&&(H=new u5(a,L,D,l),m.push(H)),H}function z(D){if(--D.usedTimes===0){const L=m.indexOf(D);m[L]=m[m.length-1],m.pop(),D.destroy()}}function P(D){p.remove(D)}function G(){p.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:E,acquireProgram:N,releaseProgram:z,releaseShaderCache:P,programs:m,dispose:G}}function m5(){let a=new WeakMap;function e(u){return a.has(u)}function t(u){let f=a.get(u);return f===void 0&&(f={},a.set(u,f)),f}function r(u){a.delete(u)}function s(u,f,p){a.get(u)[f]=p}function l(){a=new WeakMap}return{has:e,get:t,remove:r,update:s,dispose:l}}function g5(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function dx(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function px(){const a=[];let e=0;const t=[],r=[],s=[];function l(){e=0,t.length=0,r.length=0,s.length=0}function u(v,_,y,M,b,S){let x=a[e];return x===void 0?(x={id:v.id,object:v,geometry:_,material:y,groupOrder:M,renderOrder:v.renderOrder,z:b,group:S},a[e]=x):(x.id=v.id,x.object=v,x.geometry=_,x.material=y,x.groupOrder=M,x.renderOrder=v.renderOrder,x.z=b,x.group=S),e++,x}function f(v,_,y,M,b,S){const x=u(v,_,y,M,b,S);y.transmission>0?r.push(x):y.transparent===!0?s.push(x):t.push(x)}function p(v,_,y,M,b,S){const x=u(v,_,y,M,b,S);y.transmission>0?r.unshift(x):y.transparent===!0?s.unshift(x):t.unshift(x)}function h(v,_){t.length>1&&t.sort(v||g5),r.length>1&&r.sort(_||dx),s.length>1&&s.sort(_||dx)}function m(){for(let v=e,_=a.length;v<_;v++){const y=a[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:r,transparent:s,init:l,push:f,unshift:p,finish:m,sort:h}}function v5(){let a=new WeakMap;function e(r,s){const l=a.get(r);let u;return l===void 0?(u=new px,a.set(r,[u])):s>=l.length?(u=new px,l.push(u)):u=l[s],u}function t(){a=new WeakMap}return{get:e,dispose:t}}function _5(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new st};break;case"SpotLight":t={position:new V,direction:new V,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new V,halfWidth:new V,halfHeight:new V};break}return a[e.id]=t,t}}}function y5(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let x5=0;function S5(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function M5(a){const e=new _5,t=y5(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new V);const s=new V,l=new dt,u=new dt;function f(h){let m=0,v=0,_=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let y=0,M=0,b=0,S=0,x=0,U=0,C=0,E=0,N=0,z=0,P=0;h.sort(S5);for(let D=0,L=h.length;D<L;D++){const H=h[D],oe=H.color,ae=H.intensity,ce=H.distance,fe=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)m+=oe.r*ae,v+=oe.g*ae,_+=oe.b*ae;else if(H.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(H.sh.coefficients[B],ae);P++}else if(H.isDirectionalLight){const B=e.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Z=H.shadow,q=t.get(H);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,r.directionalShadow[y]=q,r.directionalShadowMap[y]=fe,r.directionalShadowMatrix[y]=H.shadow.matrix,U++}r.directional[y]=B,y++}else if(H.isSpotLight){const B=e.get(H);B.position.setFromMatrixPosition(H.matrixWorld),B.color.copy(oe).multiplyScalar(ae),B.distance=ce,B.coneCos=Math.cos(H.angle),B.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),B.decay=H.decay,r.spot[b]=B;const Z=H.shadow;if(H.map&&(r.spotLightMap[N]=H.map,N++,Z.updateMatrices(H),H.castShadow&&z++),r.spotLightMatrix[b]=Z.matrix,H.castShadow){const q=t.get(H);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,r.spotShadow[b]=q,r.spotShadowMap[b]=fe,E++}b++}else if(H.isRectAreaLight){const B=e.get(H);B.color.copy(oe).multiplyScalar(ae),B.halfWidth.set(H.width*.5,0,0),B.halfHeight.set(0,H.height*.5,0),r.rectArea[S]=B,S++}else if(H.isPointLight){const B=e.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),B.distance=H.distance,B.decay=H.decay,H.castShadow){const Z=H.shadow,q=t.get(H);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,q.shadowCameraNear=Z.camera.near,q.shadowCameraFar=Z.camera.far,r.pointShadow[M]=q,r.pointShadowMap[M]=fe,r.pointShadowMatrix[M]=H.shadow.matrix,C++}r.point[M]=B,M++}else if(H.isHemisphereLight){const B=e.get(H);B.skyColor.copy(H.color).multiplyScalar(ae),B.groundColor.copy(H.groundColor).multiplyScalar(ae),r.hemi[x]=B,x++}}S>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=v,r.ambient[2]=_;const G=r.hash;(G.directionalLength!==y||G.pointLength!==M||G.spotLength!==b||G.rectAreaLength!==S||G.hemiLength!==x||G.numDirectionalShadows!==U||G.numPointShadows!==C||G.numSpotShadows!==E||G.numSpotMaps!==N||G.numLightProbes!==P)&&(r.directional.length=y,r.spot.length=b,r.rectArea.length=S,r.point.length=M,r.hemi.length=x,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=E+N-z,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=P,G.directionalLength=y,G.pointLength=M,G.spotLength=b,G.rectAreaLength=S,G.hemiLength=x,G.numDirectionalShadows=U,G.numPointShadows=C,G.numSpotShadows=E,G.numSpotMaps=N,G.numLightProbes=P,r.version=x5++)}function p(h,m){let v=0,_=0,y=0,M=0,b=0;const S=m.matrixWorldInverse;for(let x=0,U=h.length;x<U;x++){const C=h[x];if(C.isDirectionalLight){const E=r.directional[v];E.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(S),v++}else if(C.isSpotLight){const E=r.spot[y];E.position.setFromMatrixPosition(C.matrixWorld),E.position.applyMatrix4(S),E.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(S),y++}else if(C.isRectAreaLight){const E=r.rectArea[M];E.position.setFromMatrixPosition(C.matrixWorld),E.position.applyMatrix4(S),u.identity(),l.copy(C.matrixWorld),l.premultiply(S),u.extractRotation(l),E.halfWidth.set(C.width*.5,0,0),E.halfHeight.set(0,C.height*.5,0),E.halfWidth.applyMatrix4(u),E.halfHeight.applyMatrix4(u),M++}else if(C.isPointLight){const E=r.point[_];E.position.setFromMatrixPosition(C.matrixWorld),E.position.applyMatrix4(S),_++}else if(C.isHemisphereLight){const E=r.hemi[b];E.direction.setFromMatrixPosition(C.matrixWorld),E.direction.transformDirection(S),b++}}}return{setup:f,setupView:p,state:r}}function mx(a){const e=new M5(a),t=[],r=[];function s(m){h.camera=m,t.length=0,r.length=0}function l(m){t.push(m)}function u(m){r.push(m)}function f(){e.setup(t)}function p(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:u}}function T5(a){let e=new WeakMap;function t(s,l=0){const u=e.get(s);let f;return u===void 0?(f=new mx(a),e.set(s,[f])):l>=u.length?(f=new mx(a),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const b5=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E5=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function A5(a,e,t){let r=new Y0;const s=new Be,l=new Be,u=new Nt,f=new T3({depthPacking:mE}),p=new b3,h={},m=t.maxTextureSize,v={[aa]:xi,[xi]:aa,[Pn]:Pn},_=new Ut({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:b5,fragmentShader:E5}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const M=new zi;M.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Vt(M,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pS;let x=this.type;this.render=function(z,P,G){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||z.length===0)return;const D=a.getRenderTarget(),L=a.getActiveCubeFace(),H=a.getActiveMipmapLevel(),oe=a.state;oe.setBlending(qa),oe.buffers.depth.getReversed()?oe.buffers.color.setClear(0,0,0,0):oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const ae=x!==$r&&this.type===$r,ce=x===$r&&this.type!==$r;for(let fe=0,B=z.length;fe<B;fe++){const Z=z[fe],q=Z.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const me=q.getFrameExtents();if(s.multiply(me),l.copy(q.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(l.x=Math.floor(m/me.x),s.x=l.x*me.x,q.mapSize.x=l.x),s.y>m&&(l.y=Math.floor(m/me.y),s.y=l.y*me.y,q.mapSize.y=l.y)),q.map===null||ae===!0||ce===!0){const Q=this.type!==$r?{minFilter:Zt,magFilter:Zt}:{};q.map!==null&&q.map.dispose(),q.map=new pn(s.x,s.y,Q),q.map.texture.name=Z.name+".shadowMap",q.camera.updateProjectionMatrix()}a.setRenderTarget(q.map),a.clear();const O=q.getViewportCount();for(let Q=0;Q<O;Q++){const pe=q.getViewport(Q);u.set(l.x*pe.x,l.y*pe.y,l.x*pe.z,l.y*pe.w),oe.viewport(u),q.updateMatrices(Z,Q),r=q.getFrustum(),E(P,G,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===$r&&U(q,G),q.needsUpdate=!1}x=this.type,S.needsUpdate=!1,a.setRenderTarget(D,L,H)};function U(z,P){const G=e.update(b);_.defines.VSM_SAMPLES!==z.blurSamples&&(_.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new pn(s.x,s.y)),_.uniforms.shadow_pass.value=z.map.texture,_.uniforms.resolution.value=z.mapSize,_.uniforms.radius.value=z.radius,a.setRenderTarget(z.mapPass),a.clear(),a.renderBufferDirect(P,null,G,_,b,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,a.setRenderTarget(z.map),a.clear(),a.renderBufferDirect(P,null,G,y,b,null)}function C(z,P,G,D){let L=null;const H=G.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(H!==void 0)L=H;else if(L=G.isPointLight===!0?p:f,a.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const oe=L.uuid,ae=P.uuid;let ce=h[oe];ce===void 0&&(ce={},h[oe]=ce);let fe=ce[ae];fe===void 0&&(fe=L.clone(),ce[ae]=fe,P.addEventListener("dispose",N)),L=fe}if(L.visible=P.visible,L.wireframe=P.wireframe,D===$r?L.side=P.shadowSide!==null?P.shadowSide:P.side:L.side=P.shadowSide!==null?P.shadowSide:v[P.side],L.alphaMap=P.alphaMap,L.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,L.map=P.map,L.clipShadows=P.clipShadows,L.clippingPlanes=P.clippingPlanes,L.clipIntersection=P.clipIntersection,L.displacementMap=P.displacementMap,L.displacementScale=P.displacementScale,L.displacementBias=P.displacementBias,L.wireframeLinewidth=P.wireframeLinewidth,L.linewidth=P.linewidth,G.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const oe=a.properties.get(L);oe.light=G}return L}function E(z,P,G,D,L){if(z.visible===!1)return;if(z.layers.test(P.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&L===$r)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,z.matrixWorld);const ae=e.update(z),ce=z.material;if(Array.isArray(ce)){const fe=ae.groups;for(let B=0,Z=fe.length;B<Z;B++){const q=fe[B],me=ce[q.materialIndex];if(me&&me.visible){const O=C(z,me,D,L);z.onBeforeShadow(a,z,P,G,ae,O,q),a.renderBufferDirect(G,null,ae,O,z,q),z.onAfterShadow(a,z,P,G,ae,O,q)}}}else if(ce.visible){const fe=C(z,ce,D,L);z.onBeforeShadow(a,z,P,G,ae,fe,null),a.renderBufferDirect(G,null,ae,fe,z,null),z.onAfterShadow(a,z,P,G,ae,fe,null)}}const oe=z.children;for(let ae=0,ce=oe.length;ae<ce;ae++)E(oe[ae],P,G,D,L)}function N(z){z.target.removeEventListener("dispose",N);for(const G in h){const D=h[G],L=z.target.uuid;L in D&&(D[L].dispose(),delete D[L])}}}const w5={[Rm]:Cm,[Dm]:Nm,[Um]:Pm,[Vo]:Lm,[Cm]:Rm,[Nm]:Dm,[Pm]:Um,[Lm]:Vo};function R5(a,e){function t(){let W=!1;const Ee=new Nt;let Ce=null;const Ie=new Nt(0,0,0,0);return{setMask:function(Te){Ce!==Te&&!W&&(a.colorMask(Te,Te,Te,Te),Ce=Te)},setLocked:function(Te){W=Te},setClear:function(Te,_e,ke,rt,Ot){Ot===!0&&(Te*=rt,_e*=rt,ke*=rt),Ee.set(Te,_e,ke,rt),Ie.equals(Ee)===!1&&(a.clearColor(Te,_e,ke,rt),Ie.copy(Ee))},reset:function(){W=!1,Ce=null,Ie.set(-1,0,0,0)}}}function r(){let W=!1,Ee=!1,Ce=null,Ie=null,Te=null;return{setReversed:function(_e){if(Ee!==_e){const ke=e.get("EXT_clip_control");_e?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),Ee=_e;const rt=Te;Te=null,this.setClear(rt)}},getReversed:function(){return Ee},setTest:function(_e){_e?Se(a.DEPTH_TEST):we(a.DEPTH_TEST)},setMask:function(_e){Ce!==_e&&!W&&(a.depthMask(_e),Ce=_e)},setFunc:function(_e){if(Ee&&(_e=w5[_e]),Ie!==_e){switch(_e){case Rm:a.depthFunc(a.NEVER);break;case Cm:a.depthFunc(a.ALWAYS);break;case Dm:a.depthFunc(a.LESS);break;case Vo:a.depthFunc(a.LEQUAL);break;case Um:a.depthFunc(a.EQUAL);break;case Lm:a.depthFunc(a.GEQUAL);break;case Nm:a.depthFunc(a.GREATER);break;case Pm:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ie=_e}},setLocked:function(_e){W=_e},setClear:function(_e){Te!==_e&&(Ee&&(_e=1-_e),a.clearDepth(_e),Te=_e)},reset:function(){W=!1,Ce=null,Ie=null,Te=null,Ee=!1}}}function s(){let W=!1,Ee=null,Ce=null,Ie=null,Te=null,_e=null,ke=null,rt=null,Ot=null;return{setTest:function(Rt){W||(Rt?Se(a.STENCIL_TEST):we(a.STENCIL_TEST))},setMask:function(Rt){Ee!==Rt&&!W&&(a.stencilMask(Rt),Ee=Rt)},setFunc:function(Rt,Qi,Rn){(Ce!==Rt||Ie!==Qi||Te!==Rn)&&(a.stencilFunc(Rt,Qi,Rn),Ce=Rt,Ie=Qi,Te=Rn)},setOp:function(Rt,Qi,Rn){(_e!==Rt||ke!==Qi||rt!==Rn)&&(a.stencilOp(Rt,Qi,Rn),_e=Rt,ke=Qi,rt=Rn)},setLocked:function(Rt){W=Rt},setClear:function(Rt){Ot!==Rt&&(a.clearStencil(Rt),Ot=Rt)},reset:function(){W=!1,Ee=null,Ce=null,Ie=null,Te=null,_e=null,ke=null,rt=null,Ot=null}}}const l=new t,u=new r,f=new s,p=new WeakMap,h=new WeakMap;let m={},v={},_=new WeakMap,y=[],M=null,b=!1,S=null,x=null,U=null,C=null,E=null,N=null,z=null,P=new st(0,0,0),G=0,D=!1,L=null,H=null,oe=null,ae=null,ce=null;const fe=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Z=0;const q=a.getParameter(a.VERSION);q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(q)[1]),B=Z>=1):q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),B=Z>=2);let me=null,O={};const Q=a.getParameter(a.SCISSOR_BOX),pe=a.getParameter(a.VIEWPORT),xe=new Nt().fromArray(Q),Ae=new Nt().fromArray(pe);function $(W,Ee,Ce,Ie){const Te=new Uint8Array(4),_e=a.createTexture();a.bindTexture(W,_e),a.texParameteri(W,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(W,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let ke=0;ke<Ce;ke++)W===a.TEXTURE_3D||W===a.TEXTURE_2D_ARRAY?a.texImage3D(Ee,0,a.RGBA,1,1,Ie,0,a.RGBA,a.UNSIGNED_BYTE,Te):a.texImage2D(Ee+ke,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Te);return _e}const le={};le[a.TEXTURE_2D]=$(a.TEXTURE_2D,a.TEXTURE_2D,1),le[a.TEXTURE_CUBE_MAP]=$(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[a.TEXTURE_2D_ARRAY]=$(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),le[a.TEXTURE_3D]=$(a.TEXTURE_3D,a.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),Se(a.DEPTH_TEST),u.setFunc(Vo),wt(!1),He($1),Se(a.CULL_FACE),Pt(qa);function Se(W){m[W]!==!0&&(a.enable(W),m[W]=!0)}function we(W){m[W]!==!1&&(a.disable(W),m[W]=!1)}function ze(W,Ee){return v[W]!==Ee?(a.bindFramebuffer(W,Ee),v[W]=Ee,W===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=Ee),W===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=Ee),!0):!1}function qe(W,Ee){let Ce=y,Ie=!1;if(W){Ce=_.get(Ee),Ce===void 0&&(Ce=[],_.set(Ee,Ce));const Te=W.textures;if(Ce.length!==Te.length||Ce[0]!==a.COLOR_ATTACHMENT0){for(let _e=0,ke=Te.length;_e<ke;_e++)Ce[_e]=a.COLOR_ATTACHMENT0+_e;Ce.length=Te.length,Ie=!0}}else Ce[0]!==a.BACK&&(Ce[0]=a.BACK,Ie=!0);Ie&&a.drawBuffers(Ce)}function bt(W){return M!==W?(a.useProgram(W),M=W,!0):!1}const at={[Ga]:a.FUNC_ADD,[Hb]:a.FUNC_SUBTRACT,[Vb]:a.FUNC_REVERSE_SUBTRACT};at[Gb]=a.MIN,at[kb]=a.MAX;const k={[Xb]:a.ZERO,[Wb]:a.ONE,[Yb]:a.SRC_COLOR,[Am]:a.SRC_ALPHA,[Jb]:a.SRC_ALPHA_SATURATE,[Kb]:a.DST_COLOR,[jb]:a.DST_ALPHA,[qb]:a.ONE_MINUS_SRC_COLOR,[wm]:a.ONE_MINUS_SRC_ALPHA,[Qb]:a.ONE_MINUS_DST_COLOR,[Zb]:a.ONE_MINUS_DST_ALPHA,[$b]:a.CONSTANT_COLOR,[eE]:a.ONE_MINUS_CONSTANT_COLOR,[tE]:a.CONSTANT_ALPHA,[nE]:a.ONE_MINUS_CONSTANT_ALPHA};function Pt(W,Ee,Ce,Ie,Te,_e,ke,rt,Ot,Rt){if(W===qa){b===!0&&(we(a.BLEND),b=!1);return}if(b===!1&&(Se(a.BLEND),b=!0),W!==Fb){if(W!==S||Rt!==D){if((x!==Ga||E!==Ga)&&(a.blendEquation(a.FUNC_ADD),x=Ga,E=Ga),Rt)switch(W){case Lo:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Em:a.blendFunc(a.ONE,a.ONE);break;case ey:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case ty:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Lo:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Em:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case ey:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ty:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}U=null,C=null,N=null,z=null,P.set(0,0,0),G=0,S=W,D=Rt}return}Te=Te||Ee,_e=_e||Ce,ke=ke||Ie,(Ee!==x||Te!==E)&&(a.blendEquationSeparate(at[Ee],at[Te]),x=Ee,E=Te),(Ce!==U||Ie!==C||_e!==N||ke!==z)&&(a.blendFuncSeparate(k[Ce],k[Ie],k[_e],k[ke]),U=Ce,C=Ie,N=_e,z=ke),(rt.equals(P)===!1||Ot!==G)&&(a.blendColor(rt.r,rt.g,rt.b,Ot),P.copy(rt),G=Ot),S=W,D=!1}function Je(W,Ee){W.side===Pn?we(a.CULL_FACE):Se(a.CULL_FACE);let Ce=W.side===xi;Ee&&(Ce=!Ce),wt(Ce),W.blending===Lo&&W.transparent===!1?Pt(qa):Pt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),l.setMask(W.colorWrite);const Ie=W.stencilWrite;f.setTest(Ie),Ie&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ve(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Se(a.SAMPLE_ALPHA_TO_COVERAGE):we(a.SAMPLE_ALPHA_TO_COVERAGE)}function wt(W){L!==W&&(W?a.frontFace(a.CW):a.frontFace(a.CCW),L=W)}function He(W){W!==Ib?(Se(a.CULL_FACE),W!==H&&(W===$1?a.cullFace(a.BACK):W===zb?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):we(a.CULL_FACE),H=W}function $t(W){W!==oe&&(B&&a.lineWidth(W),oe=W)}function Ve(W,Ee,Ce){W?(Se(a.POLYGON_OFFSET_FILL),(ae!==Ee||ce!==Ce)&&(a.polygonOffset(Ee,Ce),ae=Ee,ce=Ce)):we(a.POLYGON_OFFSET_FILL)}function ct(W){W?Se(a.SCISSOR_TEST):we(a.SCISSOR_TEST)}function on(W){W===void 0&&(W=a.TEXTURE0+fe-1),me!==W&&(a.activeTexture(W),me=W)}function ln(W,Ee,Ce){Ce===void 0&&(me===null?Ce=a.TEXTURE0+fe-1:Ce=me);let Ie=O[Ce];Ie===void 0&&(Ie={type:void 0,texture:void 0},O[Ce]=Ie),(Ie.type!==W||Ie.texture!==Ee)&&(me!==Ce&&(a.activeTexture(Ce),me=Ce),a.bindTexture(W,Ee||le[W]),Ie.type=W,Ie.texture=Ee)}function I(){const W=O[me];W!==void 0&&W.type!==void 0&&(a.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function A(){try{a.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function te(){try{a.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function he(){try{a.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ye(){try{a.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ue(){try{a.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Oe(){try{a.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Re(){try{a.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function We(){try{a.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function je(){try{a.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Me(){try{a.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Le(W){xe.equals(W)===!1&&(a.scissor(W.x,W.y,W.z,W.w),xe.copy(W))}function Ke(W){Ae.equals(W)===!1&&(a.viewport(W.x,W.y,W.z,W.w),Ae.copy(W))}function Xe(W,Ee){let Ce=h.get(Ee);Ce===void 0&&(Ce=new WeakMap,h.set(Ee,Ce));let Ie=Ce.get(W);Ie===void 0&&(Ie=a.getUniformBlockIndex(Ee,W.name),Ce.set(W,Ie))}function De(W,Ee){const Ie=h.get(Ee).get(W);p.get(Ee)!==Ie&&(a.uniformBlockBinding(Ee,Ie,W.__bindingPointIndex),p.set(Ee,Ie))}function ot(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),m={},me=null,O={},v={},_=new WeakMap,y=[],M=null,b=!1,S=null,x=null,U=null,C=null,E=null,N=null,z=null,P=new st(0,0,0),G=0,D=!1,L=null,H=null,oe=null,ae=null,ce=null,xe.set(0,0,a.canvas.width,a.canvas.height),Ae.set(0,0,a.canvas.width,a.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:Se,disable:we,bindFramebuffer:ze,drawBuffers:qe,useProgram:bt,setBlending:Pt,setMaterial:Je,setFlipSided:wt,setCullFace:He,setLineWidth:$t,setPolygonOffset:Ve,setScissorTest:ct,activeTexture:on,bindTexture:ln,unbindTexture:I,compressedTexImage2D:A,compressedTexImage3D:te,texImage2D:je,texImage3D:Me,updateUBOMapping:Xe,uniformBlockBinding:De,texStorage2D:Re,texStorage3D:We,texSubImage2D:he,texSubImage3D:ye,compressedTexSubImage2D:ue,compressedTexSubImage3D:Oe,scissor:Le,viewport:Ke,reset:ot}}function C5(a,e,t,r,s,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Be,m=new WeakMap;let v;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(I,A){return y?new OffscreenCanvas(I,A):wc("canvas")}function b(I,A,te){let he=1;const ye=ln(I);if((ye.width>te||ye.height>te)&&(he=te/Math.max(ye.width,ye.height)),he<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ue=Math.floor(he*ye.width),Oe=Math.floor(he*ye.height);v===void 0&&(v=M(ue,Oe));const Re=A?M(ue,Oe):v;return Re.width=ue,Re.height=Oe,Re.getContext("2d").drawImage(I,0,0,ue,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+ue+"x"+Oe+")."),Re}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),I;return I}function S(I){return I.generateMipmaps}function x(I){a.generateMipmap(I)}function U(I){return I.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?a.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function C(I,A,te,he,ye=!1){if(I!==null){if(a[I]!==void 0)return a[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ue=A;if(A===a.RED&&(te===a.FLOAT&&(ue=a.R32F),te===a.HALF_FLOAT&&(ue=a.R16F),te===a.UNSIGNED_BYTE&&(ue=a.R8)),A===a.RED_INTEGER&&(te===a.UNSIGNED_BYTE&&(ue=a.R8UI),te===a.UNSIGNED_SHORT&&(ue=a.R16UI),te===a.UNSIGNED_INT&&(ue=a.R32UI),te===a.BYTE&&(ue=a.R8I),te===a.SHORT&&(ue=a.R16I),te===a.INT&&(ue=a.R32I)),A===a.RG&&(te===a.FLOAT&&(ue=a.RG32F),te===a.HALF_FLOAT&&(ue=a.RG16F),te===a.UNSIGNED_BYTE&&(ue=a.RG8)),A===a.RG_INTEGER&&(te===a.UNSIGNED_BYTE&&(ue=a.RG8UI),te===a.UNSIGNED_SHORT&&(ue=a.RG16UI),te===a.UNSIGNED_INT&&(ue=a.RG32UI),te===a.BYTE&&(ue=a.RG8I),te===a.SHORT&&(ue=a.RG16I),te===a.INT&&(ue=a.RG32I)),A===a.RGB_INTEGER&&(te===a.UNSIGNED_BYTE&&(ue=a.RGB8UI),te===a.UNSIGNED_SHORT&&(ue=a.RGB16UI),te===a.UNSIGNED_INT&&(ue=a.RGB32UI),te===a.BYTE&&(ue=a.RGB8I),te===a.SHORT&&(ue=a.RGB16I),te===a.INT&&(ue=a.RGB32I)),A===a.RGBA_INTEGER&&(te===a.UNSIGNED_BYTE&&(ue=a.RGBA8UI),te===a.UNSIGNED_SHORT&&(ue=a.RGBA16UI),te===a.UNSIGNED_INT&&(ue=a.RGBA32UI),te===a.BYTE&&(ue=a.RGBA8I),te===a.SHORT&&(ue=a.RGBA16I),te===a.INT&&(ue=a.RGBA32I)),A===a.RGB&&te===a.UNSIGNED_INT_5_9_9_9_REV&&(ue=a.RGB9_E5),A===a.RGBA){const Oe=ye?Yf:At.getTransfer(he);te===a.FLOAT&&(ue=a.RGBA32F),te===a.HALF_FLOAT&&(ue=a.RGBA16F),te===a.UNSIGNED_BYTE&&(ue=Oe===qt?a.SRGB8_ALPHA8:a.RGBA8),te===a.UNSIGNED_SHORT_4_4_4_4&&(ue=a.RGBA4),te===a.UNSIGNED_SHORT_5_5_5_1&&(ue=a.RGB5_A1)}return(ue===a.R16F||ue===a.R32F||ue===a.RG16F||ue===a.RG32F||ue===a.RGBA16F||ue===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function E(I,A){let te;return I?A===null||A===bs||A===Mc?te=a.DEPTH24_STENCIL8:A===hn?te=a.DEPTH32F_STENCIL8:A===Sc&&(te=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===bs||A===Mc?te=a.DEPTH_COMPONENT24:A===hn?te=a.DEPTH_COMPONENT32F:A===Sc&&(te=a.DEPTH_COMPONENT16),te}function N(I,A){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==Zt&&I.minFilter!==ai?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function z(I){const A=I.target;A.removeEventListener("dispose",z),G(A),A.isVideoTexture&&m.delete(A)}function P(I){const A=I.target;A.removeEventListener("dispose",P),L(A)}function G(I){const A=r.get(I);if(A.__webglInit===void 0)return;const te=I.source,he=_.get(te);if(he){const ye=he[A.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&D(I),Object.keys(he).length===0&&_.delete(te)}r.remove(I)}function D(I){const A=r.get(I);a.deleteTexture(A.__webglTexture);const te=I.source,he=_.get(te);delete he[A.__cacheKey],u.memory.textures--}function L(I){const A=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(A.__webglFramebuffer[he]))for(let ye=0;ye<A.__webglFramebuffer[he].length;ye++)a.deleteFramebuffer(A.__webglFramebuffer[he][ye]);else a.deleteFramebuffer(A.__webglFramebuffer[he]);A.__webglDepthbuffer&&a.deleteRenderbuffer(A.__webglDepthbuffer[he])}else{if(Array.isArray(A.__webglFramebuffer))for(let he=0;he<A.__webglFramebuffer.length;he++)a.deleteFramebuffer(A.__webglFramebuffer[he]);else a.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&a.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&a.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let he=0;he<A.__webglColorRenderbuffer.length;he++)A.__webglColorRenderbuffer[he]&&a.deleteRenderbuffer(A.__webglColorRenderbuffer[he]);A.__webglDepthRenderbuffer&&a.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const te=I.textures;for(let he=0,ye=te.length;he<ye;he++){const ue=r.get(te[he]);ue.__webglTexture&&(a.deleteTexture(ue.__webglTexture),u.memory.textures--),r.remove(te[he])}r.remove(I)}let H=0;function oe(){H=0}function ae(){const I=H;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),H+=1,I}function ce(I){const A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function fe(I,A){const te=r.get(I);if(I.isVideoTexture&&ct(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&te.__version!==I.version){const he=I.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(te,I,A);return}}else I.isExternalTexture&&(te.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,te.__webglTexture,a.TEXTURE0+A)}function B(I,A){const te=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&te.__version!==I.version){le(te,I,A);return}t.bindTexture(a.TEXTURE_2D_ARRAY,te.__webglTexture,a.TEXTURE0+A)}function Z(I,A){const te=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&te.__version!==I.version){le(te,I,A);return}t.bindTexture(a.TEXTURE_3D,te.__webglTexture,a.TEXTURE0+A)}function q(I,A){const te=r.get(I);if(I.version>0&&te.__version!==I.version){Se(te,I,A);return}t.bindTexture(a.TEXTURE_CUBE_MAP,te.__webglTexture,a.TEXTURE0+A)}const me={[Xo]:a.REPEAT,[Wa]:a.CLAMP_TO_EDGE,[Wf]:a.MIRRORED_REPEAT},O={[Zt]:a.NEAREST,[_S]:a.NEAREST_MIPMAP_NEAREST,[lc]:a.NEAREST_MIPMAP_LINEAR,[ai]:a.LINEAR,[Rf]:a.LINEAR_MIPMAP_NEAREST,[br]:a.LINEAR_MIPMAP_LINEAR},Q={[vE]:a.NEVER,[TE]:a.ALWAYS,[_E]:a.LESS,[RS]:a.LEQUAL,[yE]:a.EQUAL,[ME]:a.GEQUAL,[xE]:a.GREATER,[SE]:a.NOTEQUAL};function pe(I,A){if(A.type===hn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===ai||A.magFilter===Rf||A.magFilter===lc||A.magFilter===br||A.minFilter===ai||A.minFilter===Rf||A.minFilter===lc||A.minFilter===br)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(I,a.TEXTURE_WRAP_S,me[A.wrapS]),a.texParameteri(I,a.TEXTURE_WRAP_T,me[A.wrapT]),(I===a.TEXTURE_3D||I===a.TEXTURE_2D_ARRAY)&&a.texParameteri(I,a.TEXTURE_WRAP_R,me[A.wrapR]),a.texParameteri(I,a.TEXTURE_MAG_FILTER,O[A.magFilter]),a.texParameteri(I,a.TEXTURE_MIN_FILTER,O[A.minFilter]),A.compareFunction&&(a.texParameteri(I,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(I,a.TEXTURE_COMPARE_FUNC,Q[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Zt||A.minFilter!==lc&&A.minFilter!==br||A.type===hn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");a.texParameterf(I,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function xe(I,A){let te=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",z));const he=A.source;let ye=_.get(he);ye===void 0&&(ye={},_.set(he,ye));const ue=ce(A);if(ue!==I.__cacheKey){ye[ue]===void 0&&(ye[ue]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,te=!0),ye[ue].usedTimes++;const Oe=ye[I.__cacheKey];Oe!==void 0&&(ye[I.__cacheKey].usedTimes--,Oe.usedTimes===0&&D(A)),I.__cacheKey=ue,I.__webglTexture=ye[ue].texture}return te}function Ae(I,A,te){return Math.floor(Math.floor(I/te)/A)}function $(I,A,te,he){const ue=I.updateRanges;if(ue.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,A.width,A.height,te,he,A.data);else{ue.sort((Me,Le)=>Me.start-Le.start);let Oe=0;for(let Me=1;Me<ue.length;Me++){const Le=ue[Oe],Ke=ue[Me],Xe=Le.start+Le.count,De=Ae(Ke.start,A.width,4),ot=Ae(Le.start,A.width,4);Ke.start<=Xe+1&&De===ot&&Ae(Ke.start+Ke.count-1,A.width,4)===De?Le.count=Math.max(Le.count,Ke.start+Ke.count-Le.start):(++Oe,ue[Oe]=Ke)}ue.length=Oe+1;const Re=a.getParameter(a.UNPACK_ROW_LENGTH),We=a.getParameter(a.UNPACK_SKIP_PIXELS),je=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,A.width);for(let Me=0,Le=ue.length;Me<Le;Me++){const Ke=ue[Me],Xe=Math.floor(Ke.start/4),De=Math.ceil(Ke.count/4),ot=Xe%A.width,W=Math.floor(Xe/A.width),Ee=De,Ce=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,ot),a.pixelStorei(a.UNPACK_SKIP_ROWS,W),t.texSubImage2D(a.TEXTURE_2D,0,ot,W,Ee,Ce,te,he,A.data)}I.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,Re),a.pixelStorei(a.UNPACK_SKIP_PIXELS,We),a.pixelStorei(a.UNPACK_SKIP_ROWS,je)}}function le(I,A,te){let he=a.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(he=a.TEXTURE_2D_ARRAY),A.isData3DTexture&&(he=a.TEXTURE_3D);const ye=xe(I,A),ue=A.source;t.bindTexture(he,I.__webglTexture,a.TEXTURE0+te);const Oe=r.get(ue);if(ue.version!==Oe.__version||ye===!0){t.activeTexture(a.TEXTURE0+te);const Re=At.getPrimaries(At.workingColorSpace),We=A.colorSpace===ka?null:At.getPrimaries(A.colorSpace),je=A.colorSpace===ka||Re===We?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,A.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,A.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let Me=b(A.image,!1,s.maxTextureSize);Me=on(A,Me);const Le=l.convert(A.format,A.colorSpace),Ke=l.convert(A.type);let Xe=C(A.internalFormat,Le,Ke,A.colorSpace,A.isVideoTexture);pe(he,A);let De;const ot=A.mipmaps,W=A.isVideoTexture!==!0,Ee=Oe.__version===void 0||ye===!0,Ce=ue.dataReady,Ie=N(A,Me);if(A.isDepthTexture)Xe=E(A.format===bc,A.type),Ee&&(W?t.texStorage2D(a.TEXTURE_2D,1,Xe,Me.width,Me.height):t.texImage2D(a.TEXTURE_2D,0,Xe,Me.width,Me.height,0,Le,Ke,null));else if(A.isDataTexture)if(ot.length>0){W&&Ee&&t.texStorage2D(a.TEXTURE_2D,Ie,Xe,ot[0].width,ot[0].height);for(let Te=0,_e=ot.length;Te<_e;Te++)De=ot[Te],W?Ce&&t.texSubImage2D(a.TEXTURE_2D,Te,0,0,De.width,De.height,Le,Ke,De.data):t.texImage2D(a.TEXTURE_2D,Te,Xe,De.width,De.height,0,Le,Ke,De.data);A.generateMipmaps=!1}else W?(Ee&&t.texStorage2D(a.TEXTURE_2D,Ie,Xe,Me.width,Me.height),Ce&&$(A,Me,Le,Ke)):t.texImage2D(a.TEXTURE_2D,0,Xe,Me.width,Me.height,0,Le,Ke,Me.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){W&&Ee&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Ie,Xe,ot[0].width,ot[0].height,Me.depth);for(let Te=0,_e=ot.length;Te<_e;Te++)if(De=ot[Te],A.format!==Oi)if(Le!==null)if(W){if(Ce)if(A.layerUpdates.size>0){const ke=Yy(De.width,De.height,A.format,A.type);for(const rt of A.layerUpdates){const Ot=De.data.subarray(rt*ke/De.data.BYTES_PER_ELEMENT,(rt+1)*ke/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Te,0,0,rt,De.width,De.height,1,Le,Ot)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Te,0,0,0,De.width,De.height,Me.depth,Le,De.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Te,Xe,De.width,De.height,Me.depth,0,De.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ce&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,Te,0,0,0,De.width,De.height,Me.depth,Le,Ke,De.data):t.texImage3D(a.TEXTURE_2D_ARRAY,Te,Xe,De.width,De.height,Me.depth,0,Le,Ke,De.data)}else{W&&Ee&&t.texStorage2D(a.TEXTURE_2D,Ie,Xe,ot[0].width,ot[0].height);for(let Te=0,_e=ot.length;Te<_e;Te++)De=ot[Te],A.format!==Oi?Le!==null?W?Ce&&t.compressedTexSubImage2D(a.TEXTURE_2D,Te,0,0,De.width,De.height,Le,De.data):t.compressedTexImage2D(a.TEXTURE_2D,Te,Xe,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ce&&t.texSubImage2D(a.TEXTURE_2D,Te,0,0,De.width,De.height,Le,Ke,De.data):t.texImage2D(a.TEXTURE_2D,Te,Xe,De.width,De.height,0,Le,Ke,De.data)}else if(A.isDataArrayTexture)if(W){if(Ee&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Ie,Xe,Me.width,Me.height,Me.depth),Ce)if(A.layerUpdates.size>0){const Te=Yy(Me.width,Me.height,A.format,A.type);for(const _e of A.layerUpdates){const ke=Me.data.subarray(_e*Te/Me.data.BYTES_PER_ELEMENT,(_e+1)*Te/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,_e,Me.width,Me.height,1,Le,Ke,ke)}A.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Le,Ke,Me.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Xe,Me.width,Me.height,Me.depth,0,Le,Ke,Me.data);else if(A.isData3DTexture)W?(Ee&&t.texStorage3D(a.TEXTURE_3D,Ie,Xe,Me.width,Me.height,Me.depth),Ce&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Le,Ke,Me.data)):t.texImage3D(a.TEXTURE_3D,0,Xe,Me.width,Me.height,Me.depth,0,Le,Ke,Me.data);else if(A.isFramebufferTexture){if(Ee)if(W)t.texStorage2D(a.TEXTURE_2D,Ie,Xe,Me.width,Me.height);else{let Te=Me.width,_e=Me.height;for(let ke=0;ke<Ie;ke++)t.texImage2D(a.TEXTURE_2D,ke,Xe,Te,_e,0,Le,Ke,null),Te>>=1,_e>>=1}}else if(ot.length>0){if(W&&Ee){const Te=ln(ot[0]);t.texStorage2D(a.TEXTURE_2D,Ie,Xe,Te.width,Te.height)}for(let Te=0,_e=ot.length;Te<_e;Te++)De=ot[Te],W?Ce&&t.texSubImage2D(a.TEXTURE_2D,Te,0,0,Le,Ke,De):t.texImage2D(a.TEXTURE_2D,Te,Xe,Le,Ke,De);A.generateMipmaps=!1}else if(W){if(Ee){const Te=ln(Me);t.texStorage2D(a.TEXTURE_2D,Ie,Xe,Te.width,Te.height)}Ce&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,Le,Ke,Me)}else t.texImage2D(a.TEXTURE_2D,0,Xe,Le,Ke,Me);S(A)&&x(he),Oe.__version=ue.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function Se(I,A,te){if(A.image.length!==6)return;const he=xe(I,A),ye=A.source;t.bindTexture(a.TEXTURE_CUBE_MAP,I.__webglTexture,a.TEXTURE0+te);const ue=r.get(ye);if(ye.version!==ue.__version||he===!0){t.activeTexture(a.TEXTURE0+te);const Oe=At.getPrimaries(At.workingColorSpace),Re=A.colorSpace===ka?null:At.getPrimaries(A.colorSpace),We=A.colorSpace===ka||Oe===Re?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,A.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,A.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const je=A.isCompressedTexture||A.image[0].isCompressedTexture,Me=A.image[0]&&A.image[0].isDataTexture,Le=[];for(let _e=0;_e<6;_e++)!je&&!Me?Le[_e]=b(A.image[_e],!0,s.maxCubemapSize):Le[_e]=Me?A.image[_e].image:A.image[_e],Le[_e]=on(A,Le[_e]);const Ke=Le[0],Xe=l.convert(A.format,A.colorSpace),De=l.convert(A.type),ot=C(A.internalFormat,Xe,De,A.colorSpace),W=A.isVideoTexture!==!0,Ee=ue.__version===void 0||he===!0,Ce=ye.dataReady;let Ie=N(A,Ke);pe(a.TEXTURE_CUBE_MAP,A);let Te;if(je){W&&Ee&&t.texStorage2D(a.TEXTURE_CUBE_MAP,Ie,ot,Ke.width,Ke.height);for(let _e=0;_e<6;_e++){Te=Le[_e].mipmaps;for(let ke=0;ke<Te.length;ke++){const rt=Te[ke];A.format!==Oi?Xe!==null?W?Ce&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke,0,0,rt.width,rt.height,Xe,rt.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke,ot,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ce&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke,0,0,rt.width,rt.height,Xe,De,rt.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke,ot,rt.width,rt.height,0,Xe,De,rt.data)}}}else{if(Te=A.mipmaps,W&&Ee){Te.length>0&&Ie++;const _e=ln(Le[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,Ie,ot,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Me){W?Ce&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Le[_e].width,Le[_e].height,Xe,De,Le[_e].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ot,Le[_e].width,Le[_e].height,0,Xe,De,Le[_e].data);for(let ke=0;ke<Te.length;ke++){const Ot=Te[ke].image[_e].image;W?Ce&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke+1,0,0,Ot.width,Ot.height,Xe,De,Ot.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke+1,ot,Ot.width,Ot.height,0,Xe,De,Ot.data)}}else{W?Ce&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Xe,De,Le[_e]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ot,Xe,De,Le[_e]);for(let ke=0;ke<Te.length;ke++){const rt=Te[ke];W?Ce&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke+1,0,0,Xe,De,rt.image[_e]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke+1,ot,Xe,De,rt.image[_e])}}}S(A)&&x(a.TEXTURE_CUBE_MAP),ue.__version=ye.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function we(I,A,te,he,ye,ue){const Oe=l.convert(te.format,te.colorSpace),Re=l.convert(te.type),We=C(te.internalFormat,Oe,Re,te.colorSpace),je=r.get(A),Me=r.get(te);if(Me.__renderTarget=A,!je.__hasExternalTextures){const Le=Math.max(1,A.width>>ue),Ke=Math.max(1,A.height>>ue);ye===a.TEXTURE_3D||ye===a.TEXTURE_2D_ARRAY?t.texImage3D(ye,ue,We,Le,Ke,A.depth,0,Oe,Re,null):t.texImage2D(ye,ue,We,Le,Ke,0,Oe,Re,null)}t.bindFramebuffer(a.FRAMEBUFFER,I),Ve(A)?f.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,he,ye,Me.__webglTexture,0,$t(A)):(ye===a.TEXTURE_2D||ye>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,he,ye,Me.__webglTexture,ue),t.bindFramebuffer(a.FRAMEBUFFER,null)}function ze(I,A,te){if(a.bindRenderbuffer(a.RENDERBUFFER,I),A.depthBuffer){const he=A.depthTexture,ye=he&&he.isDepthTexture?he.type:null,ue=E(A.stencilBuffer,ye),Oe=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Re=$t(A);Ve(A)?f.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Re,ue,A.width,A.height):te?a.renderbufferStorageMultisample(a.RENDERBUFFER,Re,ue,A.width,A.height):a.renderbufferStorage(a.RENDERBUFFER,ue,A.width,A.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Oe,a.RENDERBUFFER,I)}else{const he=A.textures;for(let ye=0;ye<he.length;ye++){const ue=he[ye],Oe=l.convert(ue.format,ue.colorSpace),Re=l.convert(ue.type),We=C(ue.internalFormat,Oe,Re,ue.colorSpace),je=$t(A);te&&Ve(A)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,je,We,A.width,A.height):Ve(A)?f.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,je,We,A.width,A.height):a.renderbufferStorage(a.RENDERBUFFER,We,A.width,A.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function qe(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=r.get(A.depthTexture);he.__renderTarget=A,(!he.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),fe(A.depthTexture,0);const ye=he.__webglTexture,ue=$t(A);if(A.depthTexture.format===Tc)Ve(A)?f.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ye,0,ue):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ye,0);else if(A.depthTexture.format===bc)Ve(A)?f.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ye,0,ue):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function bt(I){const A=r.get(I),te=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){const he=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),he){const ye=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,he.removeEventListener("dispose",ye)};he.addEventListener("dispose",ye),A.__depthDisposeCallback=ye}A.__boundDepthTexture=he}if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");const he=I.texture.mipmaps;he&&he.length>0?qe(A.__webglFramebuffer[0],I):qe(A.__webglFramebuffer,I)}else if(te){A.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(a.FRAMEBUFFER,A.__webglFramebuffer[he]),A.__webglDepthbuffer[he]===void 0)A.__webglDepthbuffer[he]=a.createRenderbuffer(),ze(A.__webglDepthbuffer[he],I,!1);else{const ye=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ue=A.__webglDepthbuffer[he];a.bindRenderbuffer(a.RENDERBUFFER,ue),a.framebufferRenderbuffer(a.FRAMEBUFFER,ye,a.RENDERBUFFER,ue)}}else{const he=I.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(a.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=a.createRenderbuffer(),ze(A.__webglDepthbuffer,I,!1);else{const ye=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ue=A.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,ue),a.framebufferRenderbuffer(a.FRAMEBUFFER,ye,a.RENDERBUFFER,ue)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function at(I,A,te){const he=r.get(I);A!==void 0&&we(he.__webglFramebuffer,I,I.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),te!==void 0&&bt(I)}function k(I){const A=I.texture,te=r.get(I),he=r.get(A);I.addEventListener("dispose",P);const ye=I.textures,ue=I.isWebGLCubeRenderTarget===!0,Oe=ye.length>1;if(Oe||(he.__webglTexture===void 0&&(he.__webglTexture=a.createTexture()),he.__version=A.version,u.memory.textures++),ue){te.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(A.mipmaps&&A.mipmaps.length>0){te.__webglFramebuffer[Re]=[];for(let We=0;We<A.mipmaps.length;We++)te.__webglFramebuffer[Re][We]=a.createFramebuffer()}else te.__webglFramebuffer[Re]=a.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){te.__webglFramebuffer=[];for(let Re=0;Re<A.mipmaps.length;Re++)te.__webglFramebuffer[Re]=a.createFramebuffer()}else te.__webglFramebuffer=a.createFramebuffer();if(Oe)for(let Re=0,We=ye.length;Re<We;Re++){const je=r.get(ye[Re]);je.__webglTexture===void 0&&(je.__webglTexture=a.createTexture(),u.memory.textures++)}if(I.samples>0&&Ve(I)===!1){te.__webglMultisampledFramebuffer=a.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Re=0;Re<ye.length;Re++){const We=ye[Re];te.__webglColorRenderbuffer[Re]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,te.__webglColorRenderbuffer[Re]);const je=l.convert(We.format,We.colorSpace),Me=l.convert(We.type),Le=C(We.internalFormat,je,Me,We.colorSpace,I.isXRRenderTarget===!0),Ke=$t(I);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ke,Le,I.width,I.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Re,a.RENDERBUFFER,te.__webglColorRenderbuffer[Re])}a.bindRenderbuffer(a.RENDERBUFFER,null),I.depthBuffer&&(te.__webglDepthRenderbuffer=a.createRenderbuffer(),ze(te.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ue){t.bindTexture(a.TEXTURE_CUBE_MAP,he.__webglTexture),pe(a.TEXTURE_CUBE_MAP,A);for(let Re=0;Re<6;Re++)if(A.mipmaps&&A.mipmaps.length>0)for(let We=0;We<A.mipmaps.length;We++)we(te.__webglFramebuffer[Re][We],I,A,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Re,We);else we(te.__webglFramebuffer[Re],I,A,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);S(A)&&x(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let Re=0,We=ye.length;Re<We;Re++){const je=ye[Re],Me=r.get(je);let Le=a.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Le=I.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(Le,Me.__webglTexture),pe(Le,je),we(te.__webglFramebuffer,I,je,a.COLOR_ATTACHMENT0+Re,Le,0),S(je)&&x(Le)}t.unbindTexture()}else{let Re=a.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Re=I.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(Re,he.__webglTexture),pe(Re,A),A.mipmaps&&A.mipmaps.length>0)for(let We=0;We<A.mipmaps.length;We++)we(te.__webglFramebuffer[We],I,A,a.COLOR_ATTACHMENT0,Re,We);else we(te.__webglFramebuffer,I,A,a.COLOR_ATTACHMENT0,Re,0);S(A)&&x(Re),t.unbindTexture()}I.depthBuffer&&bt(I)}function Pt(I){const A=I.textures;for(let te=0,he=A.length;te<he;te++){const ye=A[te];if(S(ye)){const ue=U(I),Oe=r.get(ye).__webglTexture;t.bindTexture(ue,Oe),x(ue),t.unbindTexture()}}}const Je=[],wt=[];function He(I){if(I.samples>0){if(Ve(I)===!1){const A=I.textures,te=I.width,he=I.height;let ye=a.COLOR_BUFFER_BIT;const ue=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Oe=r.get(I),Re=A.length>1;if(Re)for(let je=0;je<A.length;je++)t.bindFramebuffer(a.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+je,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,Oe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+je,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const We=I.texture.mipmaps;We&&We.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let je=0;je<A.length;je++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ye|=a.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ye|=a.STENCIL_BUFFER_BIT)),Re){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Oe.__webglColorRenderbuffer[je]);const Me=r.get(A[je]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Me,0)}a.blitFramebuffer(0,0,te,he,0,0,te,he,ye,a.NEAREST),p===!0&&(Je.length=0,wt.length=0,Je.push(a.COLOR_ATTACHMENT0+je),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Je.push(ue),wt.push(ue),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,wt)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Re)for(let je=0;je<A.length;je++){t.bindFramebuffer(a.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+je,a.RENDERBUFFER,Oe.__webglColorRenderbuffer[je]);const Me=r.get(A[je]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,Oe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+je,a.TEXTURE_2D,Me,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&p){const A=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[A])}}}function $t(I){return Math.min(s.maxSamples,I.samples)}function Ve(I){const A=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ct(I){const A=u.render.frame;m.get(I)!==A&&(m.set(I,A),I.update())}function on(I,A){const te=I.colorSpace,he=I.format,ye=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||te!==di&&te!==ka&&(At.getTransfer(te)===qt?(he!==Oi||ye!==Rr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),A}function ln(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=ae,this.resetTextureUnits=oe,this.setTexture2D=fe,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=q,this.rebindTextures=at,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Ve}function D5(a,e){function t(r,s=ka){let l;const u=At.getTransfer(s);if(r===Rr)return a.UNSIGNED_BYTE;if(r===I0)return a.UNSIGNED_SHORT_4_4_4_4;if(r===z0)return a.UNSIGNED_SHORT_5_5_5_1;if(r===SS)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===yS)return a.BYTE;if(r===xS)return a.SHORT;if(r===Sc)return a.UNSIGNED_SHORT;if(r===O0)return a.INT;if(r===bs)return a.UNSIGNED_INT;if(r===hn)return a.FLOAT;if(r===Lc)return a.HALF_FLOAT;if(r===MS)return a.ALPHA;if(r===TS)return a.RGB;if(r===Oi)return a.RGBA;if(r===Tc)return a.DEPTH_COMPONENT;if(r===bc)return a.DEPTH_STENCIL;if(r===B0)return a.RED;if(r===F0)return a.RED_INTEGER;if(r===bS)return a.RG;if(r===H0)return a.RG_INTEGER;if(r===V0)return a.RGBA_INTEGER;if(r===Cf||r===Df||r===Uf||r===Lf)if(u===qt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Cf)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Df)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Uf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Lf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Cf)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Df)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Uf)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Lf)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===zm||r===Bm||r===Fm||r===Hm)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===zm)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Bm)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Fm)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hm)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Vm||r===Gm||r===km)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Vm||r===Gm)return u===qt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===km)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Xm||r===Wm||r===Ym||r===qm||r===jm||r===Zm||r===Km||r===Qm||r===Jm||r===$m||r===e0||r===t0||r===n0||r===i0)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Xm)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wm)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ym)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===qm)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===jm)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Zm)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Km)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Qm)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Jm)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===$m)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===e0)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===t0)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===n0)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===i0)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Nf||r===r0||r===a0)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Nf)return u===qt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===r0)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===a0)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ES||r===s0||r===o0||r===l0)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Nf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===s0)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===o0)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===l0)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Mc?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:t}}class JS extends Wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const U5=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L5=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class N5{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new JS(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ut({vertexShader:U5,fragmentShader:L5,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vt(new Ki(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class P5 extends Es{constructor(e,t){super();const r=this;let s=null,l=1,u=null,f="local-floor",p=1,h=null,m=null,v=null,_=null,y=null,M=null;const b=new N5,S={},x=t.getContextAttributes();let U=null,C=null;const E=[],N=[],z=new Be;let P=null;const G=new fn;G.viewport=new Nt;const D=new fn;D.viewport=new Nt;const L=[G,D],H=new W3;let oe=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let le=E[$];return le===void 0&&(le=new qp,E[$]=le),le.getTargetRaySpace()},this.getControllerGrip=function($){let le=E[$];return le===void 0&&(le=new qp,E[$]=le),le.getGripSpace()},this.getHand=function($){let le=E[$];return le===void 0&&(le=new qp,E[$]=le),le.getHandSpace()};function ce($){const le=N.indexOf($.inputSource);if(le===-1)return;const Se=E[le];Se!==void 0&&(Se.update($.inputSource,$.frame,h||u),Se.dispatchEvent({type:$.type,data:$.inputSource}))}function fe(){s.removeEventListener("select",ce),s.removeEventListener("selectstart",ce),s.removeEventListener("selectend",ce),s.removeEventListener("squeeze",ce),s.removeEventListener("squeezestart",ce),s.removeEventListener("squeezeend",ce),s.removeEventListener("end",fe),s.removeEventListener("inputsourceschange",B);for(let $=0;$<E.length;$++){const le=N[$];le!==null&&(N[$]=null,E[$].disconnect(le))}oe=null,ae=null,b.reset();for(const $ in S)delete S[$];e.setRenderTarget(U),y=null,_=null,v=null,s=null,C=null,Ae.stop(),r.isPresenting=!1,e.setPixelRatio(P),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){l=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){f=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function($){h=$},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return v},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(U=e.getRenderTarget(),s.addEventListener("select",ce),s.addEventListener("selectstart",ce),s.addEventListener("selectend",ce),s.addEventListener("squeeze",ce),s.addEventListener("squeezestart",ce),s.addEventListener("squeezeend",ce),s.addEventListener("end",fe),s.addEventListener("inputsourceschange",B),x.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(z),typeof XRWebGLBinding<"u"&&(v=new XRWebGLBinding(s,t)),v!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,we=null,ze=null;x.depth&&(ze=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=x.stencil?bc:Tc,we=x.stencil?Mc:bs);const qe={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:l};_=v.createProjectionLayer(qe),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),C=new pn(_.textureWidth,_.textureHeight,{format:Oi,type:Rr,depthTexture:new kS(_.textureWidth,_.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Se={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new pn(y.framebufferWidth,y.framebufferHeight,{format:Oi,type:Rr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),h=null,u=await s.requestReferenceSpace(f),Ae.setContext(s),Ae.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function B($){for(let le=0;le<$.removed.length;le++){const Se=$.removed[le],we=N.indexOf(Se);we>=0&&(N[we]=null,E[we].disconnect(Se))}for(let le=0;le<$.added.length;le++){const Se=$.added[le];let we=N.indexOf(Se);if(we===-1){for(let qe=0;qe<E.length;qe++)if(qe>=N.length){N.push(Se),we=qe;break}else if(N[qe]===null){N[qe]=Se,we=qe;break}if(we===-1)break}const ze=E[we];ze&&ze.connect(Se)}}const Z=new V,q=new V;function me($,le,Se){Z.setFromMatrixPosition(le.matrixWorld),q.setFromMatrixPosition(Se.matrixWorld);const we=Z.distanceTo(q),ze=le.projectionMatrix.elements,qe=Se.projectionMatrix.elements,bt=ze[14]/(ze[10]-1),at=ze[14]/(ze[10]+1),k=(ze[9]+1)/ze[5],Pt=(ze[9]-1)/ze[5],Je=(ze[8]-1)/ze[0],wt=(qe[8]+1)/qe[0],He=bt*Je,$t=bt*wt,Ve=we/(-Je+wt),ct=Ve*-Je;if(le.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ct),$.translateZ(Ve),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ze[10]===-1)$.projectionMatrix.copy(le.projectionMatrix),$.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const on=bt+Ve,ln=at+Ve,I=He-ct,A=$t+(we-ct),te=k*at/ln*on,he=Pt*at/ln*on;$.projectionMatrix.makePerspective(I,A,te,he,on,ln),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function O($,le){le===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(le.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let le=$.near,Se=$.far;b.texture!==null&&(b.depthNear>0&&(le=b.depthNear),b.depthFar>0&&(Se=b.depthFar)),H.near=D.near=G.near=le,H.far=D.far=G.far=Se,(oe!==H.near||ae!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),oe=H.near,ae=H.far),H.layers.mask=$.layers.mask|6,G.layers.mask=H.layers.mask&3,D.layers.mask=H.layers.mask&5;const we=$.parent,ze=H.cameras;O(H,we);for(let qe=0;qe<ze.length;qe++)O(ze[qe],we);ze.length===2?me(H,G,D):H.projectionMatrix.copy(G.projectionMatrix),Q($,H,we)};function Q($,le,Se){Se===null?$.matrix.copy(le.matrixWorld):($.matrix.copy(Se.matrixWorld),$.matrix.invert(),$.matrix.multiply(le.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(le.projectionMatrix),$.projectionMatrixInverse.copy(le.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Wo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(_===null&&y===null))return p},this.setFoveation=function($){p=$,_!==null&&(_.fixedFoveation=$),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=$)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(H)},this.getCameraTexture=function($){return S[$]};let pe=null;function xe($,le){if(m=le.getViewerPose(h||u),M=le,m!==null){const Se=m.views;y!==null&&(e.setRenderTargetFramebuffer(C,y.framebuffer),e.setRenderTarget(C));let we=!1;Se.length!==H.cameras.length&&(H.cameras.length=0,we=!0);for(let at=0;at<Se.length;at++){const k=Se[at];let Pt=null;if(y!==null)Pt=y.getViewport(k);else{const wt=v.getViewSubImage(_,k);Pt=wt.viewport,at===0&&(e.setRenderTargetTextures(C,wt.colorTexture,wt.depthStencilTexture),e.setRenderTarget(C))}let Je=L[at];Je===void 0&&(Je=new fn,Je.layers.enable(at),Je.viewport=new Nt,L[at]=Je),Je.matrix.fromArray(k.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(k.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),at===0&&(H.matrix.copy(Je.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),we===!0&&H.cameras.push(Je)}const ze=s.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){const at=v.getDepthInformation(Se[0]);at&&at.isValid&&at.texture&&b.init(at,s.renderState)}if(ze&&ze.includes("camera-access")&&(e.state.unbindTexture(),v))for(let at=0;at<Se.length;at++){const k=Se[at].camera;if(k){let Pt=S[k];Pt||(Pt=new JS,S[k]=Pt);const Je=v.getCameraImage(k);Pt.sourceTexture=Je}}}for(let Se=0;Se<E.length;Se++){const we=N[Se],ze=E[Se];we!==null&&ze!==void 0&&ze.update(we,le,h||u)}pe&&pe($,le),le.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:le}),M=null}const Ae=new qS;Ae.setAnimationLoop(xe),this.setAnimationLoop=function($){pe=$},this.dispose=function(){}}}const vs=new Ii,O5=new dt;function I5(a,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,OS(a)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function s(S,x,U,C,E){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(S,x):x.isMeshToonMaterial?(l(S,x),v(S,x)):x.isMeshPhongMaterial?(l(S,x),m(S,x)):x.isMeshStandardMaterial?(l(S,x),_(S,x),x.isMeshPhysicalMaterial&&y(S,x,E)):x.isMeshMatcapMaterial?(l(S,x),M(S,x)):x.isMeshDepthMaterial?l(S,x):x.isMeshDistanceMaterial?(l(S,x),b(S,x)):x.isMeshNormalMaterial?l(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&f(S,x)):x.isPointsMaterial?p(S,x,U,C):x.isSpriteMaterial?h(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===xi&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===xi&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const U=e.get(x),C=U.envMap,E=U.envMapRotation;C&&(S.envMap.value=C,vs.copy(E),vs.x*=-1,vs.y*=-1,vs.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),S.envMapRotation.value.setFromMatrix4(O5.makeRotationFromEuler(vs)),S.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function f(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function p(S,x,U,C){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*U,S.scale.value=C*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function m(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function v(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function _(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,U){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===xi&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=U.texture,S.transmissionSamplerSize.value.set(U.width,U.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,x){x.matcap&&(S.matcap.value=x.matcap)}function b(S,x){const U=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(U.matrixWorld),S.nearDistance.value=U.shadow.camera.near,S.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:s}}function z5(a,e,t,r){let s={},l={},u=[];const f=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function p(U,C){const E=C.program;r.uniformBlockBinding(U,E)}function h(U,C){let E=s[U.id];E===void 0&&(M(U),E=m(U),s[U.id]=E,U.addEventListener("dispose",S));const N=C.program;r.updateUBOMapping(U,N);const z=e.render.frame;l[U.id]!==z&&(_(U),l[U.id]=z)}function m(U){const C=v();U.__bindingPointIndex=C;const E=a.createBuffer(),N=U.__size,z=U.usage;return a.bindBuffer(a.UNIFORM_BUFFER,E),a.bufferData(a.UNIFORM_BUFFER,N,z),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,C,E),E}function v(){for(let U=0;U<f;U++)if(u.indexOf(U)===-1)return u.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(U){const C=s[U.id],E=U.uniforms,N=U.__cache;a.bindBuffer(a.UNIFORM_BUFFER,C);for(let z=0,P=E.length;z<P;z++){const G=Array.isArray(E[z])?E[z]:[E[z]];for(let D=0,L=G.length;D<L;D++){const H=G[D];if(y(H,z,D,N)===!0){const oe=H.__offset,ae=Array.isArray(H.value)?H.value:[H.value];let ce=0;for(let fe=0;fe<ae.length;fe++){const B=ae[fe],Z=b(B);typeof B=="number"||typeof B=="boolean"?(H.__data[0]=B,a.bufferSubData(a.UNIFORM_BUFFER,oe+ce,H.__data)):B.isMatrix3?(H.__data[0]=B.elements[0],H.__data[1]=B.elements[1],H.__data[2]=B.elements[2],H.__data[3]=0,H.__data[4]=B.elements[3],H.__data[5]=B.elements[4],H.__data[6]=B.elements[5],H.__data[7]=0,H.__data[8]=B.elements[6],H.__data[9]=B.elements[7],H.__data[10]=B.elements[8],H.__data[11]=0):(B.toArray(H.__data,ce),ce+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,oe,H.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function y(U,C,E,N){const z=U.value,P=C+"_"+E;if(N[P]===void 0)return typeof z=="number"||typeof z=="boolean"?N[P]=z:N[P]=z.clone(),!0;{const G=N[P];if(typeof z=="number"||typeof z=="boolean"){if(G!==z)return N[P]=z,!0}else if(G.equals(z)===!1)return G.copy(z),!0}return!1}function M(U){const C=U.uniforms;let E=0;const N=16;for(let P=0,G=C.length;P<G;P++){const D=Array.isArray(C[P])?C[P]:[C[P]];for(let L=0,H=D.length;L<H;L++){const oe=D[L],ae=Array.isArray(oe.value)?oe.value:[oe.value];for(let ce=0,fe=ae.length;ce<fe;ce++){const B=ae[ce],Z=b(B),q=E%N,me=q%Z.boundary,O=q+me;E+=me,O!==0&&N-O<Z.storage&&(E+=N-O),oe.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=E,E+=Z.storage}}}const z=E%N;return z>0&&(E+=N-z),U.__size=E,U.__cache={},this}function b(U){const C={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(C.boundary=4,C.storage=4):U.isVector2?(C.boundary=8,C.storage=8):U.isVector3||U.isColor?(C.boundary=16,C.storage=12):U.isVector4?(C.boundary=16,C.storage=16):U.isMatrix3?(C.boundary=48,C.storage=48):U.isMatrix4?(C.boundary=64,C.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),C}function S(U){const C=U.target;C.removeEventListener("dispose",S);const E=u.indexOf(C.__bindingPointIndex);u.splice(E,1),a.deleteBuffer(s[C.id]),delete s[C.id],delete l[C.id]}function x(){for(const U in s)a.deleteBuffer(s[U]);u=[],s={},l={}}return{bind:p,update:h,dispose:x}}class B5{constructor(e={}){const{canvas:t=HE(),context:r=null,depth:s=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=u;const M=new Uint32Array(4),b=new Int32Array(4);let S=null,x=null;const U=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ja,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let N=!1;this._outputColorSpace=un;let z=0,P=0,G=null,D=-1,L=null;const H=new Nt,oe=new Nt;let ae=null;const ce=new st(0);let fe=0,B=t.width,Z=t.height,q=1,me=null,O=null;const Q=new Nt(0,0,B,Z),pe=new Nt(0,0,B,Z);let xe=!1;const Ae=new Y0;let $=!1,le=!1;const Se=new dt,we=new V,ze=new Nt,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let bt=!1;function at(){return G===null?q:1}let k=r;function Pt(R,Y){return t.getContext(R,Y)}try{const R={alpha:!0,depth:s,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${P0}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Te,!1),k===null){const Y="webgl2";if(k=Pt(Y,R),k===null)throw Pt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Je,wt,He,$t,Ve,ct,on,ln,I,A,te,he,ye,ue,Oe,Re,We,je,Me,Le,Ke,Xe,De,ot;function W(){Je=new jR(k),Je.init(),Xe=new D5(k,Je),wt=new VR(k,Je,e,Xe),He=new R5(k,Je),wt.reversedDepthBuffer&&_&&He.buffers.depth.setReversed(!0),$t=new QR(k),Ve=new m5,ct=new C5(k,Je,He,Ve,wt,Xe,$t),on=new kR(E),ln=new qR(E),I=new iA(k),De=new FR(k,I),A=new ZR(k,I,$t,De),te=new $R(k,A,I,$t),Me=new JR(k,wt,ct),Re=new GR(Ve),he=new p5(E,on,ln,Je,wt,De,Re),ye=new I5(E,Ve),ue=new v5,Oe=new T5(Je),je=new BR(E,on,ln,He,te,y,p),We=new A5(E,te,wt),ot=new z5(k,$t,wt,He),Le=new HR(k,Je,$t),Ke=new KR(k,Je,$t),$t.programs=he.programs,E.capabilities=wt,E.extensions=Je,E.properties=Ve,E.renderLists=ue,E.shadowMap=We,E.state=He,E.info=$t}W();const Ee=new P5(E,k);this.xr=Ee,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const R=Je.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Je.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(B,Z,!1))},this.getSize=function(R){return R.set(B,Z)},this.setSize=function(R,Y,re=!0){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,Z=Y,t.width=Math.floor(R*q),t.height=Math.floor(Y*q),re===!0&&(t.style.width=R+"px",t.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(B*q,Z*q).floor()},this.setDrawingBufferSize=function(R,Y,re){B=R,Z=Y,q=re,t.width=Math.floor(R*re),t.height=Math.floor(Y*re),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy(Q)},this.setViewport=function(R,Y,re,se){R.isVector4?Q.set(R.x,R.y,R.z,R.w):Q.set(R,Y,re,se),He.viewport(H.copy(Q).multiplyScalar(q).round())},this.getScissor=function(R){return R.copy(pe)},this.setScissor=function(R,Y,re,se){R.isVector4?pe.set(R.x,R.y,R.z,R.w):pe.set(R,Y,re,se),He.scissor(oe.copy(pe).multiplyScalar(q).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(R){He.setScissorTest(xe=R)},this.setOpaqueSort=function(R){me=R},this.setTransparentSort=function(R){O=R},this.getClearColor=function(R){return R.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,re=!0){let se=0;if(R){let K=!1;if(G!==null){const be=G.texture.format;K=be===V0||be===H0||be===F0}if(K){const be=G.texture.type,Ue=be===Rr||be===bs||be===Sc||be===Mc||be===I0||be===z0,Fe=je.getClearColor(),Ne=je.getClearAlpha(),$e=Fe.r,tt=Fe.g,Ye=Fe.b;Ue?(M[0]=$e,M[1]=tt,M[2]=Ye,M[3]=Ne,k.clearBufferuiv(k.COLOR,0,M)):(b[0]=$e,b[1]=tt,b[2]=Ye,b[3]=Ne,k.clearBufferiv(k.COLOR,0,b))}else se|=k.COLOR_BUFFER_BIT}Y&&(se|=k.DEPTH_BUFFER_BIT),re&&(se|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),je.dispose(),ue.dispose(),Oe.dispose(),Ve.dispose(),on.dispose(),ln.dispose(),te.dispose(),De.dispose(),ot.dispose(),he.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Rn),Ee.removeEventListener("sessionend",Cn),mn.stop()};function Ce(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const R=$t.autoReset,Y=We.enabled,re=We.autoUpdate,se=We.needsUpdate,K=We.type;W(),$t.autoReset=R,We.enabled=Y,We.autoUpdate=re,We.needsUpdate=se,We.type=K}function Te(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function _e(R){const Y=R.target;Y.removeEventListener("dispose",_e),ke(Y)}function ke(R){rt(R),Ve.remove(R)}function rt(R){const Y=Ve.get(R).programs;Y!==void 0&&(Y.forEach(function(re){he.releaseProgram(re)}),R.isShaderMaterial&&he.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,re,se,K,be){Y===null&&(Y=qe);const Ue=K.isMesh&&K.matrixWorld.determinant()<0,Fe=oa(R,Y,re,se,K);He.setMaterial(se,Ue);let Ne=re.index,$e=1;if(se.wireframe===!0){if(Ne=A.getWireframeAttribute(re),Ne===void 0)return;$e=2}const tt=re.drawRange,Ye=re.attributes.position;let pt=tt.start*$e,Ct=(tt.start+tt.count)*$e;be!==null&&(pt=Math.max(pt,be.start*$e),Ct=Math.min(Ct,(be.start+be.count)*$e)),Ne!==null?(pt=Math.max(pt,0),Ct=Math.min(Ct,Ne.count)):Ye!=null&&(pt=Math.max(pt,0),Ct=Math.min(Ct,Ye.count));const an=Ct-pt;if(an<0||an===1/0)return;De.setup(K,se,Fe,re,Ne);let Gt,mt=Le;if(Ne!==null&&(Gt=I.get(Ne),mt=Ke,mt.setIndex(Gt)),K.isMesh)se.wireframe===!0?(He.setLineWidth(se.wireframeLinewidth*at()),mt.setMode(k.LINES)):mt.setMode(k.TRIANGLES);else if(K.isLine){let Qe=se.linewidth;Qe===void 0&&(Qe=1),He.setLineWidth(Qe*at()),K.isLineSegments?mt.setMode(k.LINES):K.isLineLoop?mt.setMode(k.LINE_LOOP):mt.setMode(k.LINE_STRIP)}else K.isPoints?mt.setMode(k.POINTS):K.isSprite&&mt.setMode(k.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)No("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),mt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))mt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Qe=K._multiDrawStarts,tn=K._multiDrawCounts,xt=K._multiDrawCount,Jn=Ne?I.get(Ne).bytesPerElement:1,Ji=Ve.get(se).currentProgram.getUniforms();for(let si=0;si<xt;si++)Ji.setValue(k,"_gl_DrawID",si),mt.render(Qe[si]/Jn,tn[si])}else if(K.isInstancedMesh)mt.renderInstances(pt,an,K.count);else if(re.isInstancedBufferGeometry){const Qe=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,tn=Math.min(re.instanceCount,Qe);mt.renderInstances(pt,an,tn)}else mt.render(pt,an)};function Ot(R,Y,re){R.transparent===!0&&R.side===Pn&&R.forceSinglePass===!1?(R.side=xi,R.needsUpdate=!0,mr(R,Y,re),R.side=aa,R.needsUpdate=!0,mr(R,Y,re),R.side=Pn):mr(R,Y,re)}this.compile=function(R,Y,re=null){re===null&&(re=R),x=Oe.get(re),x.init(Y),C.push(x),re.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),R!==re&&R.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),x.setupLights();const se=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const be=K.material;if(be)if(Array.isArray(be))for(let Ue=0;Ue<be.length;Ue++){const Fe=be[Ue];Ot(Fe,re,K),se.add(Fe)}else Ot(be,re,K),se.add(be)}),x=C.pop(),se},this.compileAsync=function(R,Y,re=null){const se=this.compile(R,Y,re);return new Promise(K=>{function be(){if(se.forEach(function(Ue){Ve.get(Ue).currentProgram.isReady()&&se.delete(Ue)}),se.size===0){K(R);return}setTimeout(be,10)}Je.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Rt=null;function Qi(R){Rt&&Rt(R)}function Rn(){mn.stop()}function Cn(){mn.start()}const mn=new qS;mn.setAnimationLoop(Qi),typeof self<"u"&&mn.setContext(self),this.setAnimationLoop=function(R){Rt=R,Ee.setAnimationLoop(R),R===null?mn.stop():mn.start()},Ee.addEventListener("sessionstart",Rn),Ee.addEventListener("sessionend",Cn),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(Y),Y=Ee.getCamera()),R.isScene===!0&&R.onBeforeRender(E,R,Y,G),x=Oe.get(R,C.length),x.init(Y),C.push(x),Se.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Ae.setFromProjectionMatrix(Se,Er,Y.reversedDepth),le=this.localClippingEnabled,$=Re.init(this.clippingPlanes,le),S=ue.get(R,U.length),S.init(),U.push(S),Ee.enabled===!0&&Ee.isPresenting===!0){const be=E.xr.getDepthSensingMesh();be!==null&&pr(be,Y,-1/0,E.sortObjects)}pr(R,Y,0,E.sortObjects),S.finish(),E.sortObjects===!0&&S.sort(me,O),bt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,bt&&je.addToRenderList(S,R),this.info.render.frame++,$===!0&&Re.beginShadows();const re=x.state.shadowsArray;We.render(re,R,Y),$===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=S.opaque,K=S.transmissive;if(x.setupLights(),Y.isArrayCamera){const be=Y.cameras;if(K.length>0)for(let Ue=0,Fe=be.length;Ue<Fe;Ue++){const Ne=be[Ue];Oc(se,K,R,Ne)}bt&&je.render(R);for(let Ue=0,Fe=be.length;Ue<Fe;Ue++){const Ne=be[Ue];As(S,R,Ne,Ne.viewport)}}else K.length>0&&Oc(se,K,R,Y),bt&&je.render(R),As(S,R,Y);G!==null&&P===0&&(ct.updateMultisampleRenderTarget(G),ct.updateRenderTargetMipmap(G)),R.isScene===!0&&R.onAfterRender(E,R,Y),De.resetDefaultState(),D=-1,L=null,C.pop(),C.length>0?(x=C[C.length-1],$===!0&&Re.setGlobalState(E.clippingPlanes,x.state.camera)):x=null,U.pop(),U.length>0?S=U[U.length-1]:S=null};function pr(R,Y,re,se){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)x.pushLight(R),R.castShadow&&x.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ae.intersectsSprite(R)){se&&ze.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Se);const Ue=te.update(R),Fe=R.material;Fe.visible&&S.push(R,Ue,Fe,re,ze.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ae.intersectsObject(R))){const Ue=te.update(R),Fe=R.material;if(se&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ze.copy(R.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),ze.copy(Ue.boundingSphere.center)),ze.applyMatrix4(R.matrixWorld).applyMatrix4(Se)),Array.isArray(Fe)){const Ne=Ue.groups;for(let $e=0,tt=Ne.length;$e<tt;$e++){const Ye=Ne[$e],pt=Fe[Ye.materialIndex];pt&&pt.visible&&S.push(R,Ue,pt,re,ze.z,Ye)}}else Fe.visible&&S.push(R,Ue,Fe,re,ze.z,null)}}const be=R.children;for(let Ue=0,Fe=be.length;Ue<Fe;Ue++)pr(be[Ue],Y,re,se)}function As(R,Y,re,se){const K=R.opaque,be=R.transmissive,Ue=R.transparent;x.setupLightsView(re),$===!0&&Re.setGlobalState(E.clippingPlanes,re),se&&He.viewport(H.copy(se)),K.length>0&&ws(K,Y,re),be.length>0&&ws(be,Y,re),Ue.length>0&&ws(Ue,Y,re),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function Oc(R,Y,re,se){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[se.id]===void 0&&(x.state.transmissionRenderTarget[se.id]=new pn(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?Lc:Rr,minFilter:br,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const be=x.state.transmissionRenderTarget[se.id],Ue=se.viewport||H;be.setSize(Ue.z*E.transmissionResolutionScale,Ue.w*E.transmissionResolutionScale);const Fe=E.getRenderTarget(),Ne=E.getActiveCubeFace(),$e=E.getActiveMipmapLevel();E.setRenderTarget(be),E.getClearColor(ce),fe=E.getClearAlpha(),fe<1&&E.setClearColor(16777215,.5),E.clear(),bt&&je.render(re);const tt=E.toneMapping;E.toneMapping=ja;const Ye=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),x.setupLightsView(se),$===!0&&Re.setGlobalState(E.clippingPlanes,se),ws(R,re,se),ct.updateMultisampleRenderTarget(be),ct.updateRenderTargetMipmap(be),Je.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let Ct=0,an=Y.length;Ct<an;Ct++){const Gt=Y[Ct],mt=Gt.object,Qe=Gt.geometry,tn=Gt.material,xt=Gt.group;if(tn.side===Pn&&mt.layers.test(se.layers)){const Jn=tn.side;tn.side=xi,tn.needsUpdate=!0,nl(mt,re,se,Qe,tn,xt),tn.side=Jn,tn.needsUpdate=!0,pt=!0}}pt===!0&&(ct.updateMultisampleRenderTarget(be),ct.updateRenderTargetMipmap(be))}E.setRenderTarget(Fe,Ne,$e),E.setClearColor(ce,fe),Ye!==void 0&&(se.viewport=Ye),E.toneMapping=tt}function ws(R,Y,re){const se=Y.isScene===!0?Y.overrideMaterial:null;for(let K=0,be=R.length;K<be;K++){const Ue=R[K],Fe=Ue.object,Ne=Ue.geometry,$e=Ue.group;let tt=Ue.material;tt.allowOverride===!0&&se!==null&&(tt=se),Fe.layers.test(re.layers)&&nl(Fe,Y,re,Ne,tt,$e)}}function nl(R,Y,re,se,K,be){R.onBeforeRender(E,Y,re,se,K,be),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(E,Y,re,se,R,be),K.transparent===!0&&K.side===Pn&&K.forceSinglePass===!1?(K.side=xi,K.needsUpdate=!0,E.renderBufferDirect(re,Y,se,K,R,be),K.side=aa,K.needsUpdate=!0,E.renderBufferDirect(re,Y,se,K,R,be),K.side=Pn):E.renderBufferDirect(re,Y,se,K,R,be),R.onAfterRender(E,Y,re,se,K,be)}function mr(R,Y,re){Y.isScene!==!0&&(Y=qe);const se=Ve.get(R),K=x.state.lights,be=x.state.shadowsArray,Ue=K.state.version,Fe=he.getParameters(R,K.state,be,Y,re),Ne=he.getProgramCacheKey(Fe);let $e=se.programs;se.environment=R.isMeshStandardMaterial?Y.environment:null,se.fog=Y.fog,se.envMap=(R.isMeshStandardMaterial?ln:on).get(R.envMap||se.environment),se.envMapRotation=se.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,$e===void 0&&(R.addEventListener("dispose",_e),$e=new Map,se.programs=$e);let tt=$e.get(Ne);if(tt!==void 0){if(se.currentProgram===tt&&se.lightsStateVersion===Ue)return Lr(R,Fe),tt}else Fe.uniforms=he.getUniforms(R),R.onBeforeCompile(Fe,E),tt=he.acquireProgram(Fe,Ne),$e.set(Ne,tt),se.uniforms=Fe.uniforms;const Ye=se.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ye.clippingPlanes=Re.uniform),Lr(R,Fe),se.needsLights=la(R),se.lightsStateVersion=Ue,se.needsLights&&(Ye.ambientLightColor.value=K.state.ambient,Ye.lightProbe.value=K.state.probe,Ye.directionalLights.value=K.state.directional,Ye.directionalLightShadows.value=K.state.directionalShadow,Ye.spotLights.value=K.state.spot,Ye.spotLightShadows.value=K.state.spotShadow,Ye.rectAreaLights.value=K.state.rectArea,Ye.ltc_1.value=K.state.rectAreaLTC1,Ye.ltc_2.value=K.state.rectAreaLTC2,Ye.pointLights.value=K.state.point,Ye.pointLightShadows.value=K.state.pointShadow,Ye.hemisphereLights.value=K.state.hemi,Ye.directionalShadowMap.value=K.state.directionalShadowMap,Ye.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ye.spotShadowMap.value=K.state.spotShadowMap,Ye.spotLightMatrix.value=K.state.spotLightMatrix,Ye.spotLightMap.value=K.state.spotLightMap,Ye.pointShadowMap.value=K.state.pointShadowMap,Ye.pointShadowMatrix.value=K.state.pointShadowMatrix),se.currentProgram=tt,se.uniformsList=null,tt}function Rs(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Pf.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Lr(R,Y){const re=Ve.get(R);re.outputColorSpace=Y.outputColorSpace,re.batching=Y.batching,re.batchingColor=Y.batchingColor,re.instancing=Y.instancing,re.instancingColor=Y.instancingColor,re.instancingMorph=Y.instancingMorph,re.skinning=Y.skinning,re.morphTargets=Y.morphTargets,re.morphNormals=Y.morphNormals,re.morphColors=Y.morphColors,re.morphTargetsCount=Y.morphTargetsCount,re.numClippingPlanes=Y.numClippingPlanes,re.numIntersection=Y.numClipIntersection,re.vertexAlphas=Y.vertexAlphas,re.vertexTangents=Y.vertexTangents,re.toneMapping=Y.toneMapping}function oa(R,Y,re,se,K){Y.isScene!==!0&&(Y=qe),ct.resetTextureUnits();const be=Y.fog,Ue=se.isMeshStandardMaterial?Y.environment:null,Fe=G===null?E.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:di,Ne=(se.isMeshStandardMaterial?ln:on).get(se.envMap||Ue),$e=se.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,tt=!!re.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ye=!!re.morphAttributes.position,pt=!!re.morphAttributes.normal,Ct=!!re.morphAttributes.color;let an=ja;se.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(an=E.toneMapping);const Gt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,mt=Gt!==void 0?Gt.length:0,Qe=Ve.get(se),tn=x.state.lights;if($===!0&&(le===!0||R!==L)){const gn=R===L&&se.id===D;Re.setState(se,R,gn)}let xt=!1;se.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==tn.state.version||Qe.outputColorSpace!==Fe||K.isBatchedMesh&&Qe.batching===!1||!K.isBatchedMesh&&Qe.batching===!0||K.isBatchedMesh&&Qe.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Qe.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Qe.instancing===!1||!K.isInstancedMesh&&Qe.instancing===!0||K.isSkinnedMesh&&Qe.skinning===!1||!K.isSkinnedMesh&&Qe.skinning===!0||K.isInstancedMesh&&Qe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Qe.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Qe.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Qe.instancingMorph===!1&&K.morphTexture!==null||Qe.envMap!==Ne||se.fog===!0&&Qe.fog!==be||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Re.numPlanes||Qe.numIntersection!==Re.numIntersection)||Qe.vertexAlphas!==$e||Qe.vertexTangents!==tt||Qe.morphTargets!==Ye||Qe.morphNormals!==pt||Qe.morphColors!==Ct||Qe.toneMapping!==an||Qe.morphTargetsCount!==mt)&&(xt=!0):(xt=!0,Qe.__version=se.version);let Jn=Qe.currentProgram;xt===!0&&(Jn=mr(se,Y,K));let Ji=!1,si=!1,Bn=!1;const Kt=Jn.getUniforms(),oi=Qe.uniforms;if(He.useProgram(Jn.program)&&(Ji=!0,si=!0,Bn=!0),se.id!==D&&(D=se.id,si=!0),Ji||L!==R){He.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Kt.setValue(k,"projectionMatrix",R.projectionMatrix),Kt.setValue(k,"viewMatrix",R.matrixWorldInverse);const Yn=Kt.map.cameraPosition;Yn!==void 0&&Yn.setValue(k,we.setFromMatrixPosition(R.matrixWorld)),wt.logarithmicDepthBuffer&&Kt.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Kt.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),L!==R&&(L=R,si=!0,Bn=!0)}if(K.isSkinnedMesh){Kt.setOptional(k,K,"bindMatrix"),Kt.setOptional(k,K,"bindMatrixInverse");const gn=K.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Kt.setValue(k,"boneTexture",gn.boneTexture,ct))}K.isBatchedMesh&&(Kt.setOptional(k,K,"batchingTexture"),Kt.setValue(k,"batchingTexture",K._matricesTexture,ct),Kt.setOptional(k,K,"batchingIdTexture"),Kt.setValue(k,"batchingIdTexture",K._indirectTexture,ct),Kt.setOptional(k,K,"batchingColorTexture"),K._colorsTexture!==null&&Kt.setValue(k,"batchingColorTexture",K._colorsTexture,ct));const $n=re.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&Me.update(K,re,Jn),(si||Qe.receiveShadow!==K.receiveShadow)&&(Qe.receiveShadow=K.receiveShadow,Kt.setValue(k,"receiveShadow",K.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(oi.envMap.value=Ne,oi.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&Y.environment!==null&&(oi.envMapIntensity.value=Y.environmentIntensity),si&&(Kt.setValue(k,"toneMappingExposure",E.toneMappingExposure),Qe.needsLights&&Za(oi,Bn),be&&se.fog===!0&&ye.refreshFogUniforms(oi,be),ye.refreshMaterialUniforms(oi,se,q,Z,x.state.transmissionRenderTarget[R.id]),Pf.upload(k,Rs(Qe),oi,ct)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Pf.upload(k,Rs(Qe),oi,ct),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Kt.setValue(k,"center",K.center),Kt.setValue(k,"modelViewMatrix",K.modelViewMatrix),Kt.setValue(k,"normalMatrix",K.normalMatrix),Kt.setValue(k,"modelMatrix",K.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const gn=se.uniformsGroups;for(let Yn=0,Cs=gn.length;Yn<Cs;Yn++){const pi=gn[Yn];ot.update(pi,Jn),ot.bind(pi,Jn)}}return Jn}function Za(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function la(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(R,Y,re){const se=Ve.get(R);se.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),Ve.get(R.texture).__webglTexture=Y,Ve.get(R.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:re,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const re=Ve.get(R);re.__webglFramebuffer=Y,re.__useDefaultFramebuffer=Y===void 0};const Tn=k.createFramebuffer();this.setRenderTarget=function(R,Y=0,re=0){G=R,z=Y,P=re;let se=!0,K=null,be=!1,Ue=!1;if(R){const Ne=Ve.get(R);if(Ne.__useDefaultFramebuffer!==void 0)He.bindFramebuffer(k.FRAMEBUFFER,null),se=!1;else if(Ne.__webglFramebuffer===void 0)ct.setupRenderTarget(R);else if(Ne.__hasExternalTextures)ct.rebindTextures(R,Ve.get(R.texture).__webglTexture,Ve.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ye=R.depthTexture;if(Ne.__boundDepthTexture!==Ye){if(Ye!==null&&Ve.has(Ye)&&(R.width!==Ye.image.width||R.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(R)}}const $e=R.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ue=!0);const tt=Ve.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(tt[Y])?K=tt[Y][re]:K=tt[Y],be=!0):R.samples>0&&ct.useMultisampledRTT(R)===!1?K=Ve.get(R).__webglMultisampledFramebuffer:Array.isArray(tt)?K=tt[re]:K=tt,H.copy(R.viewport),oe.copy(R.scissor),ae=R.scissorTest}else H.copy(Q).multiplyScalar(q).floor(),oe.copy(pe).multiplyScalar(q).floor(),ae=xe;if(re!==0&&(K=Tn),He.bindFramebuffer(k.FRAMEBUFFER,K)&&se&&He.drawBuffers(R,K),He.viewport(H),He.scissor(oe),He.setScissorTest(ae),be){const Ne=Ve.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ne.__webglTexture,re)}else if(Ue){const Ne=Y;for(let $e=0;$e<R.textures.length;$e++){const tt=Ve.get(R.textures[$e]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+$e,tt.__webglTexture,re,Ne)}}else if(R!==null&&re!==0){const Ne=Ve.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ne.__webglTexture,re)}D=-1},this.readRenderTargetPixels=function(R,Y,re,se,K,be,Ue,Fe=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ne=Ne[Ue]),Ne){He.bindFramebuffer(k.FRAMEBUFFER,Ne);try{const $e=R.textures[Fe],tt=$e.format,Ye=$e.type;if(!wt.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-se&&re>=0&&re<=R.height-K&&(R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Fe),k.readPixels(Y,re,se,K,Xe.convert(tt),Xe.convert(Ye),be))}finally{const $e=G!==null?Ve.get(G).__webglFramebuffer:null;He.bindFramebuffer(k.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(R,Y,re,se,K,be,Ue,Fe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ne=Ne[Ue]),Ne)if(Y>=0&&Y<=R.width-se&&re>=0&&re<=R.height-K){He.bindFramebuffer(k.FRAMEBUFFER,Ne);const $e=R.textures[Fe],tt=$e.format,Ye=$e.type;if(!wt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,pt),k.bufferData(k.PIXEL_PACK_BUFFER,be.byteLength,k.STREAM_READ),R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Fe),k.readPixels(Y,re,se,K,Xe.convert(tt),Xe.convert(Ye),0);const Ct=G!==null?Ve.get(G).__webglFramebuffer:null;He.bindFramebuffer(k.FRAMEBUFFER,Ct);const an=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await VE(k,an,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,pt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,be),k.deleteBuffer(pt),k.deleteSync(an),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,re=0){const se=Math.pow(2,-re),K=Math.floor(R.image.width*se),be=Math.floor(R.image.height*se),Ue=Y!==null?Y.x:0,Fe=Y!==null?Y.y:0;ct.setTexture2D(R,0),k.copyTexSubImage2D(k.TEXTURE_2D,re,0,0,Ue,Fe,K,be),He.unbindTexture()};const Ic=k.createFramebuffer(),zc=k.createFramebuffer();this.copyTextureToTexture=function(R,Y,re=null,se=null,K=0,be=null){be===null&&(K!==0?(No("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=K,K=0):be=0);let Ue,Fe,Ne,$e,tt,Ye,pt,Ct,an;const Gt=R.isCompressedTexture?R.mipmaps[be]:R.image;if(re!==null)Ue=re.max.x-re.min.x,Fe=re.max.y-re.min.y,Ne=re.isBox3?re.max.z-re.min.z:1,$e=re.min.x,tt=re.min.y,Ye=re.isBox3?re.min.z:0;else{const $n=Math.pow(2,-K);Ue=Math.floor(Gt.width*$n),Fe=Math.floor(Gt.height*$n),R.isDataArrayTexture?Ne=Gt.depth:R.isData3DTexture?Ne=Math.floor(Gt.depth*$n):Ne=1,$e=0,tt=0,Ye=0}se!==null?(pt=se.x,Ct=se.y,an=se.z):(pt=0,Ct=0,an=0);const mt=Xe.convert(Y.format),Qe=Xe.convert(Y.type);let tn;Y.isData3DTexture?(ct.setTexture3D(Y,0),tn=k.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ct.setTexture2DArray(Y,0),tn=k.TEXTURE_2D_ARRAY):(ct.setTexture2D(Y,0),tn=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment);const xt=k.getParameter(k.UNPACK_ROW_LENGTH),Jn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ji=k.getParameter(k.UNPACK_SKIP_PIXELS),si=k.getParameter(k.UNPACK_SKIP_ROWS),Bn=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Gt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Gt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,$e),k.pixelStorei(k.UNPACK_SKIP_ROWS,tt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ye);const Kt=R.isDataArrayTexture||R.isData3DTexture,oi=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const $n=Ve.get(R),gn=Ve.get(Y),Yn=Ve.get($n.__renderTarget),Cs=Ve.get(gn.__renderTarget);He.bindFramebuffer(k.READ_FRAMEBUFFER,Yn.__webglFramebuffer),He.bindFramebuffer(k.DRAW_FRAMEBUFFER,Cs.__webglFramebuffer);for(let pi=0;pi<Ne;pi++)Kt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ve.get(R).__webglTexture,K,Ye+pi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ve.get(Y).__webglTexture,be,an+pi)),k.blitFramebuffer($e,tt,Ue,Fe,pt,Ct,Ue,Fe,k.DEPTH_BUFFER_BIT,k.NEAREST);He.bindFramebuffer(k.READ_FRAMEBUFFER,null),He.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||Ve.has(R)){const $n=Ve.get(R),gn=Ve.get(Y);He.bindFramebuffer(k.READ_FRAMEBUFFER,Ic),He.bindFramebuffer(k.DRAW_FRAMEBUFFER,zc);for(let Yn=0;Yn<Ne;Yn++)Kt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,$n.__webglTexture,K,Ye+Yn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,$n.__webglTexture,K),oi?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,gn.__webglTexture,be,an+Yn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,gn.__webglTexture,be),K!==0?k.blitFramebuffer($e,tt,Ue,Fe,pt,Ct,Ue,Fe,k.COLOR_BUFFER_BIT,k.NEAREST):oi?k.copyTexSubImage3D(tn,be,pt,Ct,an+Yn,$e,tt,Ue,Fe):k.copyTexSubImage2D(tn,be,pt,Ct,$e,tt,Ue,Fe);He.bindFramebuffer(k.READ_FRAMEBUFFER,null),He.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else oi?R.isDataTexture||R.isData3DTexture?k.texSubImage3D(tn,be,pt,Ct,an,Ue,Fe,Ne,mt,Qe,Gt.data):Y.isCompressedArrayTexture?k.compressedTexSubImage3D(tn,be,pt,Ct,an,Ue,Fe,Ne,mt,Gt.data):k.texSubImage3D(tn,be,pt,Ct,an,Ue,Fe,Ne,mt,Qe,Gt):R.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,be,pt,Ct,Ue,Fe,mt,Qe,Gt.data):R.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,be,pt,Ct,Gt.width,Gt.height,mt,Gt.data):k.texSubImage2D(k.TEXTURE_2D,be,pt,Ct,Ue,Fe,mt,Qe,Gt);k.pixelStorei(k.UNPACK_ROW_LENGTH,xt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Jn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ji),k.pixelStorei(k.UNPACK_SKIP_ROWS,si),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Bn),be===0&&Y.generateMipmaps&&k.generateMipmap(tn),He.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,re=null,se=null,K=0){return No('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Y,re,se,K)},this.initRenderTarget=function(R){Ve.get(R).__webglFramebuffer===void 0&&ct.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ct.setTextureCube(R,0):R.isData3DTexture?ct.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ct.setTexture2DArray(R,0):ct.setTexture2D(R,0),He.unbindTexture()},this.resetState=function(){z=0,P=0,G=null,He.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Er}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}const gx={type:"change"},ig={type:"start"},$S={type:"end"},xf=new Qo,vx=new Ha,F5=Math.cos(70*CS.DEG2RAD),Ln=new V,yi=2*Math.PI,jt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},om=1e-6;class H5 extends tA{constructor(e,t=null){super(e,t),this.state=jt.NONE,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Uo.ROTATE,MIDDLE:Uo.DOLLY,RIGHT:Uo.PAN},this.touches={ONE:Co.ROTATE,TWO:Co.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new Cr,this._lastTargetPosition=new V,this._quat=new Cr().setFromUnitVectors(e.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Kf,this._sphericalDelta=new Kf,this._scale=1,this._panOffset=new V,this._rotateStart=new Be,this._rotateEnd=new Be,this._rotateDelta=new Be,this._panStart=new Be,this._panEnd=new Be,this._panDelta=new Be,this._dollyStart=new Be,this._dollyEnd=new Be,this._dollyDelta=new Be,this._dollyDirection=new V,this._mouse=new Be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=G5.bind(this),this._onPointerDown=V5.bind(this),this._onPointerUp=k5.bind(this),this._onContextMenu=K5.bind(this),this._onMouseWheel=Y5.bind(this),this._onKeyDown=q5.bind(this),this._onTouchStart=j5.bind(this),this._onTouchMove=Z5.bind(this),this._onMouseDown=X5.bind(this),this._onMouseMove=W5.bind(this),this._interceptControlDown=Q5.bind(this),this._interceptControlUp=J5.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(gx),this.update(),this.state=jt.NONE}update(e=null){const t=this.object.position;Ln.copy(t).sub(this.target),Ln.applyQuaternion(this._quat),this._spherical.setFromVector3(Ln),this.autoRotate&&this.state===jt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(r)&&isFinite(s)&&(r<-Math.PI?r+=yi:r>Math.PI&&(r-=yi),s<-Math.PI?s+=yi:s>Math.PI&&(s-=yi),r<=s?this._spherical.theta=Math.max(r,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+s)/2?Math.max(r,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(Ln.setFromSpherical(this._spherical),Ln.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ln),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const f=Ln.length();u=this._clampDistance(f*this._scale);const p=f-u;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),l=!!p}else if(this.object.isOrthographicCamera){const f=new V(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=p!==this.object.zoom;const h=new V(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(f),this.object.updateMatrixWorld(),u=Ln.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(xf.origin.copy(this.object.position),xf.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xf.direction))<F5?this.object.lookAt(this.target):(vx.setFromNormalAndCoplanarPoint(this.object.up,this.target),xf.intersectPlane(vx,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>om||8*(1-this._lastQuaternion.dot(this.object.quaternion))>om||this._lastTargetPosition.distanceToSquared(this.target)>om?(this.dispatchEvent(gx),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?yi/60*this.autoRotateSpeed*e:yi/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ln.setFromMatrixColumn(t,0),Ln.multiplyScalar(-e),this._panOffset.add(Ln)}_panUp(e,t){this.screenSpacePanning===!0?Ln.setFromMatrixColumn(t,1):(Ln.setFromMatrixColumn(t,0),Ln.crossVectors(this.object.up,Ln)),Ln.multiplyScalar(e),this._panOffset.add(Ln)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ln.copy(s).sub(this.target);let l=Ln.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),s=e-r.left,l=t-r.top,u=r.width,f=r.height;this._mouse.x=s/u*2-1,this._mouse.y=-(l/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(yi*this._rotateDelta.x/t.clientHeight),this._rotateUp(yi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(yi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-yi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(yi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-yi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(r,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(r,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,s=e.pageY-t.y,l=Math.sqrt(r*r+s*s);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),s=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(s,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(yi*this._rotateDelta.x/t.clientHeight),this._rotateUp(yi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(r,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,s=e.pageY-t.y,l=Math.sqrt(r*r+s*s);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,f=(e.pageY+t.y)*.5;this._updateZoomParameters(u,f)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Be,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function V5(a){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(a.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(a)&&(this._addPointer(a),a.pointerType==="touch"?this._onTouchStart(a):this._onMouseDown(a)))}function G5(a){this.enabled!==!1&&(a.pointerType==="touch"?this._onTouchMove(a):this._onMouseMove(a))}function k5(a){switch(this._removePointer(a),this._pointers.length){case 0:this.domElement.releasePointerCapture(a.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($S),this.state=jt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function X5(a){let e;switch(a.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Uo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(a),this.state=jt.DOLLY;break;case Uo.ROTATE:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=jt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=jt.ROTATE}break;case Uo.PAN:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=jt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=jt.PAN}break;default:this.state=jt.NONE}this.state!==jt.NONE&&this.dispatchEvent(ig)}function W5(a){switch(this.state){case jt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(a);break;case jt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(a);break;case jt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(a);break}}function Y5(a){this.enabled===!1||this.enableZoom===!1||this.state!==jt.NONE||(a.preventDefault(),this.dispatchEvent(ig),this._handleMouseWheel(this._customWheelEvent(a)),this.dispatchEvent($S))}function q5(a){this.enabled!==!1&&this._handleKeyDown(a)}function j5(a){switch(this._trackPointer(a),this._pointers.length){case 1:switch(this.touches.ONE){case Co.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(a),this.state=jt.TOUCH_ROTATE;break;case Co.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(a),this.state=jt.TOUCH_PAN;break;default:this.state=jt.NONE}break;case 2:switch(this.touches.TWO){case Co.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(a),this.state=jt.TOUCH_DOLLY_PAN;break;case Co.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(a),this.state=jt.TOUCH_DOLLY_ROTATE;break;default:this.state=jt.NONE}break;default:this.state=jt.NONE}this.state!==jt.NONE&&this.dispatchEvent(ig)}function Z5(a){switch(this._trackPointer(a),this.state){case jt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(a),this.update();break;case jt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(a),this.update();break;case jt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(a),this.update();break;case jt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(a),this.update();break;default:this.state=jt.NONE}}function K5(a){this.enabled!==!1&&a.preventDefault()}function Q5(a){a.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function J5(a){a.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $5(a,e,t=!0){if(!e||!e.isReady)throw new Error("BufferGeometryUtils: Initialized MikkTSpace library required.");if(!a.hasAttribute("position")||!a.hasAttribute("normal")||!a.hasAttribute("uv"))throw new Error('BufferGeometryUtils: Tangents require "position", "normal", and "uv" attributes.');function r(u){if(u.normalized||u.isInterleavedBufferAttribute){const f=new Float32Array(u.count*u.itemSize);for(let p=0,h=0;p<u.count;p++)f[h++]=u.getX(p),f[h++]=u.getY(p),u.itemSize>2&&(f[h++]=u.getZ(p));return f}return u.array instanceof Float32Array?u.array:new Float32Array(u.array)}const s=a.index?a.toNonIndexed():a,l=e.generateTangents(r(s.attributes.position),r(s.attributes.normal),r(s.attributes.uv));if(t)for(let u=3;u<l.length;u+=4)l[u]*=-1;return s.setAttribute("tangent",new Mn(l,4)),a!==s&&a.copy(s),a}function eM(a,e=!1){const t=a[0].index!==null,r=new Set(Object.keys(a[0].attributes)),s=new Set(Object.keys(a[0].morphAttributes)),l={},u={},f=a[0].morphTargetsRelative,p=new zi;let h=0;for(let m=0;m<a.length;++m){const v=a[m];let _=0;if(t!==(v.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const y in v.attributes){if(!r.has(y))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+'. All geometries must have compatible attributes; make sure "'+y+'" attribute exists among all geometries, or in none of them.'),null;l[y]===void 0&&(l[y]=[]),l[y].push(v.attributes[y]),_++}if(_!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". Make sure all geometries have the same number of attributes."),null;if(f!==v.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const y in v.morphAttributes){if(!s.has(y))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+".  .morphAttributes must be consistent throughout all geometries."),null;u[y]===void 0&&(u[y]=[]),u[y].push(v.morphAttributes[y])}if(e){let y;if(t)y=v.index.count;else if(v.attributes.position!==void 0)y=v.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". The geometry must have either an index or a position attribute"),null;p.addGroup(h,y,m),h+=y}}if(t){let m=0;const v=[];for(let _=0;_<a.length;++_){const y=a[_].index;for(let M=0;M<y.count;++M)v.push(y.getX(M)+m);m+=a[_].attributes.position.count}p.setIndex(v)}for(const m in l){const v=g0(l[m]);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+m+" attribute."),null;p.setAttribute(m,v)}for(const m in u){const v=u[m][0].length;if(v===0)break;p.morphAttributes=p.morphAttributes||{},p.morphAttributes[m]=[];for(let _=0;_<v;++_){const y=[];for(let b=0;b<u[m].length;++b)y.push(u[m][b][_]);const M=g0(y);if(!M)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+m+" morphAttribute."),null;p.morphAttributes[m].push(M)}}return p}function g0(a){let e,t,r,s=-1,l=0;for(let h=0;h<a.length;++h){const m=a[h];if(e===void 0&&(e=m.array.constructor),e!==m.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=m.itemSize),t!==m.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(r===void 0&&(r=m.normalized),r!==m.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=m.gpuType),s!==m.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;l+=m.count*t}const u=new e(l),f=new Mn(u,t,r);let p=0;for(let h=0;h<a.length;++h){const m=a[h];if(m.isInterleavedBufferAttribute){const v=p/t;for(let _=0,y=m.count;_<y;_++)for(let M=0;M<t;M++){const b=m.getComponent(_,M);f.setComponent(_+v,M,b)}}else u.set(m.array,p);p+=m.count*t}return s!==void 0&&(f.gpuType=s),f}function eD(a){return a.isInstancedInterleavedBufferAttribute||a.isInterleavedBufferAttribute?Qf(a):a.isInstancedBufferAttribute?new Rc().copy(a):new Mn().copy(a)}function tD(a){let e,t=0,r=0;for(let h=0,m=a.length;h<m;++h){const v=a[h];if(e===void 0&&(e=v.array.constructor),e!==v.array.constructor)return console.error("AttributeBuffers of different types cannot be interleaved"),null;t+=v.array.length,r+=v.itemSize}const s=new BS(new e(t),r);let l=0;const u=[],f=["getX","getY","getZ","getW"],p=["setX","setY","setZ","setW"];for(let h=0,m=a.length;h<m;h++){const v=a[h],_=v.itemSize,y=v.count,M=new hh(s,_,l,v.normalized);u.push(M),l+=_;for(let b=0;b<y;b++)for(let S=0;S<_;S++)M[p[S]](b,v[f[S]](b))}return u}function Qf(a){const e=a.data.array.constructor,t=a.count,r=a.itemSize,s=a.normalized,l=new e(t*r);let u;a.isInstancedInterleavedBufferAttribute?u=new Rc(l,r,s,a.meshPerAttribute):u=new Mn(l,r,s);for(let f=0;f<t;f++)u.setX(f,a.getX(f)),r>=2&&u.setY(f,a.getY(f)),r>=3&&u.setZ(f,a.getZ(f)),r>=4&&u.setW(f,a.getW(f));return u}function nD(a){const e=a.attributes,t=a.morphTargets,r=new Map;for(const s in e){const l=e[s];l.isInterleavedBufferAttribute&&(r.has(l)||r.set(l,Qf(l)),e[s]=r.get(l))}for(const s in t){const l=t[s];l.isInterleavedBufferAttribute&&(r.has(l)||r.set(l,Qf(l)),t[s]=r.get(l))}}function iD(a){let e=0;for(const r in a.attributes){const s=a.getAttribute(r);e+=s.count*s.itemSize*s.array.BYTES_PER_ELEMENT}const t=a.getIndex();return e+=t?t.count*t.itemSize*t.array.BYTES_PER_ELEMENT:0,e}function rD(a,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},r=a.getIndex(),s=a.getAttribute("position"),l=r?r.count:s.count;let u=0;const f=Object.keys(a.attributes),p={},h={},m=[],v=["getX","getY","getZ","getW"],_=["setX","setY","setZ","setW"];for(let U=0,C=f.length;U<C;U++){const E=f[U],N=a.attributes[E];p[E]=new N.constructor(new N.array.constructor(N.count*N.itemSize),N.itemSize,N.normalized);const z=a.morphAttributes[E];z&&(h[E]||(h[E]=[]),z.forEach((P,G)=>{const D=new P.array.constructor(P.count*P.itemSize);h[E][G]=new P.constructor(D,P.itemSize,P.normalized)}))}const y=e*.5,M=Math.log10(1/e),b=Math.pow(10,M),S=y*b;for(let U=0;U<l;U++){const C=r?r.getX(U):U;let E="";for(let N=0,z=f.length;N<z;N++){const P=f[N],G=a.getAttribute(P),D=G.itemSize;for(let L=0;L<D;L++)E+=`${~~(G[v[L]](C)*b+S)},`}if(E in t)m.push(t[E]);else{for(let N=0,z=f.length;N<z;N++){const P=f[N],G=a.getAttribute(P),D=a.morphAttributes[P],L=G.itemSize,H=p[P],oe=h[P];for(let ae=0;ae<L;ae++){const ce=v[ae],fe=_[ae];if(H[fe](u,G[ce](C)),D)for(let B=0,Z=D.length;B<Z;B++)oe[B][fe](u,D[B][ce](C))}}t[E]=u,m.push(u),u++}}const x=a.clone();for(const U in a.attributes){const C=p[U];if(x.setAttribute(U,new C.constructor(C.array.slice(0,u*C.itemSize),C.itemSize,C.normalized)),U in h)for(let E=0;E<h[U].length;E++){const N=h[U][E];x.morphAttributes[U][E]=new N.constructor(N.array.slice(0,u*N.itemSize),N.itemSize,N.normalized)}}return x.setIndex(m),x}function v0(a,e){if(e===dE)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===c0||e===AS){let t=a.getIndex();if(t===null){const u=[],f=a.getAttribute("position");if(f!==void 0){for(let p=0;p<f.count;p++)u.push(p);a.setIndex(u),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const r=t.count-2,s=[];if(e===c0)for(let u=1;u<=r;u++)s.push(t.getX(0)),s.push(t.getX(u)),s.push(t.getX(u+1));else for(let u=0;u<r;u++)u%2===0?(s.push(t.getX(u)),s.push(t.getX(u+1)),s.push(t.getX(u+2))):(s.push(t.getX(u+2)),s.push(t.getX(u+1)),s.push(t.getX(u)));s.length/3!==r&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const l=a.clone();return l.setIndex(s),l.clearGroups(),l}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}function aD(a){const e=new V,t=new V,r=new V,s=new V,l=new V,u=new V,f=new V,p=new V,h=new V;function m(me,O,Q,pe,xe,Ae,$,le){e.fromBufferAttribute(O,xe),t.fromBufferAttribute(O,Ae),r.fromBufferAttribute(O,$);const Se=me.morphTargetInfluences;if(Q&&Se){f.set(0,0,0),p.set(0,0,0),h.set(0,0,0);for(let we=0,ze=Q.length;we<ze;we++){const qe=Se[we],bt=Q[we];qe!==0&&(s.fromBufferAttribute(bt,xe),l.fromBufferAttribute(bt,Ae),u.fromBufferAttribute(bt,$),pe?(f.addScaledVector(s,qe),p.addScaledVector(l,qe),h.addScaledVector(u,qe)):(f.addScaledVector(s.sub(e),qe),p.addScaledVector(l.sub(t),qe),h.addScaledVector(u.sub(r),qe)))}e.add(f),t.add(p),r.add(h)}me.isSkinnedMesh&&(me.applyBoneTransform(xe,e),me.applyBoneTransform(Ae,t),me.applyBoneTransform($,r)),le[xe*3+0]=e.x,le[xe*3+1]=e.y,le[xe*3+2]=e.z,le[Ae*3+0]=t.x,le[Ae*3+1]=t.y,le[Ae*3+2]=t.z,le[$*3+0]=r.x,le[$*3+1]=r.y,le[$*3+2]=r.z}const v=a.geometry,_=a.material;let y,M,b;const S=v.index,x=v.attributes.position,U=v.morphAttributes.position,C=v.morphTargetsRelative,E=v.attributes.normal,N=v.morphAttributes.position,z=v.groups,P=v.drawRange;let G,D,L,H,oe,ae,ce;const fe=new Float32Array(x.count*x.itemSize),B=new Float32Array(E.count*E.itemSize);if(S!==null)if(Array.isArray(_))for(G=0,L=z.length;G<L;G++)for(oe=z[G],ae=Math.max(oe.start,P.start),ce=Math.min(oe.start+oe.count,P.start+P.count),D=ae,H=ce;D<H;D+=3)y=S.getX(D),M=S.getX(D+1),b=S.getX(D+2),m(a,x,U,C,y,M,b,fe),m(a,E,N,C,y,M,b,B);else for(ae=Math.max(0,P.start),ce=Math.min(S.count,P.start+P.count),G=ae,L=ce;G<L;G+=3)y=S.getX(G),M=S.getX(G+1),b=S.getX(G+2),m(a,x,U,C,y,M,b,fe),m(a,E,N,C,y,M,b,B);else if(Array.isArray(_))for(G=0,L=z.length;G<L;G++)for(oe=z[G],ae=Math.max(oe.start,P.start),ce=Math.min(oe.start+oe.count,P.start+P.count),D=ae,H=ce;D<H;D+=3)y=D,M=D+1,b=D+2,m(a,x,U,C,y,M,b,fe),m(a,E,N,C,y,M,b,B);else for(ae=Math.max(0,P.start),ce=Math.min(x.count,P.start+P.count),G=ae,L=ce;G<L;G+=3)y=G,M=G+1,b=G+2,m(a,x,U,C,y,M,b,fe),m(a,E,N,C,y,M,b,B);const Z=new Si(fe,3),q=new Si(B,3);return{positionAttribute:x,normalAttribute:E,morphedPositionAttribute:Z,morphedNormalAttribute:q}}function sD(a){if(a.groups.length===0)return console.warn("THREE.BufferGeometryUtils.mergeGroups(): No groups are defined. Nothing to merge."),a;let e=a.groups;if(e=e.sort((u,f)=>u.materialIndex!==f.materialIndex?u.materialIndex-f.materialIndex:u.start-f.start),a.getIndex()===null){const u=a.getAttribute("position"),f=[];for(let p=0;p<u.count;p+=3)f.push(p,p+1,p+2);a.setIndex(f)}const t=a.getIndex(),r=[];for(let u=0;u<e.length;u++){const f=e[u],p=f.start,h=p+f.count;for(let m=p;m<h;m++)r.push(t.getX(m))}a.dispose(),a.setIndex(r);let s=0;for(let u=0;u<e.length;u++){const f=e[u];f.start=s,s+=f.count}let l=e[0];a.groups=[l];for(let u=1;u<e.length;u++){const f=e[u];l.materialIndex===f.materialIndex?l.count+=f.count:(l=f,a.groups.push(l))}return a}function oD(a,e=Math.PI/3){const t=Math.cos(e),r=(1+1e-10)*100,s=[new V,new V,new V],l=new V,u=new V,f=new V,p=new V;function h(b){const S=~~(b.x*r),x=~~(b.y*r),U=~~(b.z*r);return`${S},${x},${U}`}const m=a.index?a.toNonIndexed():a,v=m.attributes.position,_={};for(let b=0,S=v.count/3;b<S;b++){const x=3*b,U=s[0].fromBufferAttribute(v,x+0),C=s[1].fromBufferAttribute(v,x+1),E=s[2].fromBufferAttribute(v,x+2);l.subVectors(E,C),u.subVectors(U,C);const N=new V().crossVectors(l,u).normalize();for(let z=0;z<3;z++){const P=s[z],G=h(P);G in _||(_[G]=[]),_[G].push(N)}}const y=new Float32Array(v.count*3),M=new Mn(y,3,!1);for(let b=0,S=v.count/3;b<S;b++){const x=3*b,U=s[0].fromBufferAttribute(v,x+0),C=s[1].fromBufferAttribute(v,x+1),E=s[2].fromBufferAttribute(v,x+2);l.subVectors(E,C),u.subVectors(U,C),f.crossVectors(l,u).normalize();for(let N=0;N<3;N++){const z=s[N],P=h(z),G=_[P];p.set(0,0,0);for(let D=0,L=G.length;D<L;D++){const H=G[D];f.dot(H)>t&&p.add(H)}p.normalize(),M.setXYZ(x+N,p.x,p.y,p.z)}}return m.setAttribute("normal",M),m}const lD=Object.freeze(Object.defineProperty({__proto__:null,computeMikkTSpaceTangents:$5,computeMorphedAttributes:aD,deepCloneAttribute:eD,deinterleaveAttribute:Qf,deinterleaveGeometry:nD,estimateBytesUsed:iD,interleaveAttributes:tD,mergeAttributes:g0,mergeGeometries:eM,mergeGroups:sD,mergeVertices:rD,toCreasedNormals:oD,toTrianglesDrawMode:v0},Symbol.toStringTag,{value:"Module"}));class ac extends el{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new dD(t)}),this.register(function(t){return new pD(t)}),this.register(function(t){return new TD(t)}),this.register(function(t){return new bD(t)}),this.register(function(t){return new ED(t)}),this.register(function(t){return new gD(t)}),this.register(function(t){return new vD(t)}),this.register(function(t){return new _D(t)}),this.register(function(t){return new yD(t)}),this.register(function(t){return new hD(t)}),this.register(function(t){return new xD(t)}),this.register(function(t){return new mD(t)}),this.register(function(t){return new MD(t)}),this.register(function(t){return new SD(t)}),this.register(function(t){return new uD(t)}),this.register(function(t){return new AD(t)}),this.register(function(t){return new wD(t)})}load(e,t,r,s){const l=this;let u;if(this.resourcePath!=="")u=this.resourcePath;else if(this.path!==""){const h=vc.extractUrlBase(e);u=vc.resolveURL(h,this.path)}else u=vc.extractUrlBase(e);this.manager.itemStart(e);const f=function(h){s?s(h):console.error(h),l.manager.itemError(e),l.manager.itemEnd(e)},p=new YS(this.manager);p.setPath(this.path),p.setResponseType("arraybuffer"),p.setRequestHeader(this.requestHeader),p.setWithCredentials(this.withCredentials),p.load(e,function(h){try{l.parse(h,u,function(m){t(m),l.manager.itemEnd(e)},f)}catch(m){f(m)}},r,f)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,r,s){let l;const u={},f={},p=new TextDecoder;if(typeof e=="string")l=JSON.parse(e);else if(e instanceof ArrayBuffer)if(p.decode(new Uint8Array(e,0,4))===tM){try{u[Tt.KHR_BINARY_GLTF]=new RD(e)}catch(v){s&&s(v);return}l=JSON.parse(u[Tt.KHR_BINARY_GLTF].content)}else l=JSON.parse(p.decode(e));else l=e;if(l.asset===void 0||l.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new VD(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let m=0;m<this.pluginCallbacks.length;m++){const v=this.pluginCallbacks[m](h);v.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),f[v.name]=v,u[v.name]=!0}if(l.extensionsUsed)for(let m=0;m<l.extensionsUsed.length;++m){const v=l.extensionsUsed[m],_=l.extensionsRequired||[];switch(v){case Tt.KHR_MATERIALS_UNLIT:u[v]=new fD;break;case Tt.KHR_DRACO_MESH_COMPRESSION:u[v]=new CD(l,this.dracoLoader);break;case Tt.KHR_TEXTURE_TRANSFORM:u[v]=new DD;break;case Tt.KHR_MESH_QUANTIZATION:u[v]=new UD;break;default:_.indexOf(v)>=0&&f[v]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+v+'".')}}h.setExtensions(u),h.setPlugins(f),h.parse(r,s)}parseAsync(e,t){const r=this;return new Promise(function(s,l){r.parse(e,t,s,l)})}}function cD(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const Tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class uD{constructor(e){this.parser=e,this.name=Tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let r=0,s=t.length;r<s;r++){const l=t[r];l.extensions&&l.extensions[this.name]&&l.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,l.extensions[this.name].light)}}_loadLight(e){const t=this.parser,r="light:"+e;let s=t.cache.get(r);if(s)return s;const l=t.json,p=((l.extensions&&l.extensions[this.name]||{}).lights||[])[e];let h;const m=new st(16777215);p.color!==void 0&&m.setRGB(p.color[0],p.color[1],p.color[2],di);const v=p.range!==void 0?p.range:0;switch(p.type){case"directional":h=new k3(m),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new V3(m),h.distance=v;break;case"spot":h=new F3(m),h.distance=v,p.spot=p.spot||{},p.spot.innerConeAngle=p.spot.innerConeAngle!==void 0?p.spot.innerConeAngle:0,p.spot.outerConeAngle=p.spot.outerConeAngle!==void 0?p.spot.outerConeAngle:Math.PI/4,h.angle=p.spot.outerConeAngle,h.penumbra=1-p.spot.innerConeAngle/p.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+p.type)}return h.position.set(0,0,0),na(h,p),p.intensity!==void 0&&(h.intensity=p.intensity),h.name=t.createUniqueName(p.name||"light_"+e),s=Promise.resolve(h),t.cache.add(r,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,r=this.parser,l=r.json.nodes[e],f=(l.extensions&&l.extensions[this.name]||{}).light;return f===void 0?null:this._loadLight(f).then(function(p){return r._getNodeRef(t.cache,f,p)})}}class fD{constructor(){this.name=Tt.KHR_MATERIALS_UNLIT}getMaterialType(){return ji}extendParams(e,t,r){const s=[];e.color=new st(1,1,1),e.opacity=1;const l=t.pbrMetallicRoughness;if(l){if(Array.isArray(l.baseColorFactor)){const u=l.baseColorFactor;e.color.setRGB(u[0],u[1],u[2],di),e.opacity=u[3]}l.baseColorTexture!==void 0&&s.push(r.assignTexture(e,"map",l.baseColorTexture,un))}return Promise.all(s)}}class hD{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=s.extensions[this.name].emissiveStrength;return l!==void 0&&(t.emissiveIntensity=l),Promise.resolve()}}class dD{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:Ur}extendMaterialParams(e,t){const r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];if(u.clearcoatFactor!==void 0&&(t.clearcoat=u.clearcoatFactor),u.clearcoatTexture!==void 0&&l.push(r.assignTexture(t,"clearcoatMap",u.clearcoatTexture)),u.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=u.clearcoatRoughnessFactor),u.clearcoatRoughnessTexture!==void 0&&l.push(r.assignTexture(t,"clearcoatRoughnessMap",u.clearcoatRoughnessTexture)),u.clearcoatNormalTexture!==void 0&&(l.push(r.assignTexture(t,"clearcoatNormalMap",u.clearcoatNormalTexture)),u.clearcoatNormalTexture.scale!==void 0)){const f=u.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Be(f,f)}return Promise.all(l)}}class pD{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:Ur}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=s.extensions[this.name];return t.dispersion=l.dispersion!==void 0?l.dispersion:0,Promise.resolve()}}class mD{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:Ur}extendMaterialParams(e,t){const r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];return u.iridescenceFactor!==void 0&&(t.iridescence=u.iridescenceFactor),u.iridescenceTexture!==void 0&&l.push(r.assignTexture(t,"iridescenceMap",u.iridescenceTexture)),u.iridescenceIor!==void 0&&(t.iridescenceIOR=u.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),u.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=u.iridescenceThicknessMinimum),u.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=u.iridescenceThicknessMaximum),u.iridescenceThicknessTexture!==void 0&&l.push(r.assignTexture(t,"iridescenceThicknessMap",u.iridescenceThicknessTexture)),Promise.all(l)}}class gD{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_SHEEN}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:Ur}extendMaterialParams(e,t){const r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[];t.sheenColor=new st(0,0,0),t.sheenRoughness=0,t.sheen=1;const u=s.extensions[this.name];if(u.sheenColorFactor!==void 0){const f=u.sheenColorFactor;t.sheenColor.setRGB(f[0],f[1],f[2],di)}return u.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=u.sheenRoughnessFactor),u.sheenColorTexture!==void 0&&l.push(r.assignTexture(t,"sheenColorMap",u.sheenColorTexture,un)),u.sheenRoughnessTexture!==void 0&&l.push(r.assignTexture(t,"sheenRoughnessMap",u.sheenRoughnessTexture)),Promise.all(l)}}class vD{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:Ur}extendMaterialParams(e,t){const r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];return u.transmissionFactor!==void 0&&(t.transmission=u.transmissionFactor),u.transmissionTexture!==void 0&&l.push(r.assignTexture(t,"transmissionMap",u.transmissionTexture)),Promise.all(l)}}class _D{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_VOLUME}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:Ur}extendMaterialParams(e,t){const r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];t.thickness=u.thicknessFactor!==void 0?u.thicknessFactor:0,u.thicknessTexture!==void 0&&l.push(r.assignTexture(t,"thicknessMap",u.thicknessTexture)),t.attenuationDistance=u.attenuationDistance||1/0;const f=u.attenuationColor||[1,1,1];return t.attenuationColor=new st().setRGB(f[0],f[1],f[2],di),Promise.all(l)}}class yD{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_IOR}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:Ur}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=s.extensions[this.name];return t.ior=l.ior!==void 0?l.ior:1.5,Promise.resolve()}}class xD{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:Ur}extendMaterialParams(e,t){const r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];t.specularIntensity=u.specularFactor!==void 0?u.specularFactor:1,u.specularTexture!==void 0&&l.push(r.assignTexture(t,"specularIntensityMap",u.specularTexture));const f=u.specularColorFactor||[1,1,1];return t.specularColor=new st().setRGB(f[0],f[1],f[2],di),u.specularColorTexture!==void 0&&l.push(r.assignTexture(t,"specularColorMap",u.specularColorTexture,un)),Promise.all(l)}}class SD{constructor(e){this.parser=e,this.name=Tt.EXT_MATERIALS_BUMP}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:Ur}extendMaterialParams(e,t){const r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];return t.bumpScale=u.bumpFactor!==void 0?u.bumpFactor:1,u.bumpTexture!==void 0&&l.push(r.assignTexture(t,"bumpMap",u.bumpTexture)),Promise.all(l)}}class MD{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:Ur}extendMaterialParams(e,t){const r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];return u.anisotropyStrength!==void 0&&(t.anisotropy=u.anisotropyStrength),u.anisotropyRotation!==void 0&&(t.anisotropyRotation=u.anisotropyRotation),u.anisotropyTexture!==void 0&&l.push(r.assignTexture(t,"anisotropyMap",u.anisotropyTexture)),Promise.all(l)}}class TD{constructor(e){this.parser=e,this.name=Tt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,r=t.json,s=r.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const l=s.extensions[this.name],u=t.options.ktx2Loader;if(!u){if(r.extensionsRequired&&r.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,l.source,u)}}class bD{constructor(e){this.parser=e,this.name=Tt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,r=this.parser,s=r.json,l=s.textures[e];if(!l.extensions||!l.extensions[t])return null;const u=l.extensions[t],f=s.images[u.source];let p=r.textureLoader;if(f.uri){const h=r.options.manager.getHandler(f.uri);h!==null&&(p=h)}return r.loadTextureImage(e,u.source,p)}}class ED{constructor(e){this.parser=e,this.name=Tt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,r=this.parser,s=r.json,l=s.textures[e];if(!l.extensions||!l.extensions[t])return null;const u=l.extensions[t],f=s.images[u.source];let p=r.textureLoader;if(f.uri){const h=r.options.manager.getHandler(f.uri);h!==null&&(p=h)}return r.loadTextureImage(e,u.source,p)}}class AD{constructor(e){this.name=Tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,r=t.bufferViews[e];if(r.extensions&&r.extensions[this.name]){const s=r.extensions[this.name],l=this.parser.getDependency("buffer",s.buffer),u=this.parser.options.meshoptDecoder;if(!u||!u.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return l.then(function(f){const p=s.byteOffset||0,h=s.byteLength||0,m=s.count,v=s.byteStride,_=new Uint8Array(f,p,h);return u.decodeGltfBufferAsync?u.decodeGltfBufferAsync(m,v,_,s.mode,s.filter).then(function(y){return y.buffer}):u.ready.then(function(){const y=new ArrayBuffer(m*v);return u.decodeGltfBuffer(new Uint8Array(y),m,v,_,s.mode,s.filter),y})})}else return null}}class wD{constructor(e){this.name=Tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,r=t.nodes[e];if(!r.extensions||!r.extensions[this.name]||r.mesh===void 0)return null;const s=t.meshes[r.mesh];for(const h of s.primitives)if(h.mode!==Yi.TRIANGLES&&h.mode!==Yi.TRIANGLE_STRIP&&h.mode!==Yi.TRIANGLE_FAN&&h.mode!==void 0)return null;const u=r.extensions[this.name].attributes,f=[],p={};for(const h in u)f.push(this.parser.getDependency("accessor",u[h]).then(m=>(p[h]=m,p[h])));return f.length<1?null:(f.push(this.parser.createNodeMesh(e)),Promise.all(f).then(h=>{const m=h.pop(),v=m.isGroup?m.children:[m],_=h[0].count,y=[];for(const M of v){const b=new dt,S=new V,x=new Cr,U=new V(1,1,1),C=new g3(M.geometry,M.material,_);for(let E=0;E<_;E++)p.TRANSLATION&&S.fromBufferAttribute(p.TRANSLATION,E),p.ROTATION&&x.fromBufferAttribute(p.ROTATION,E),p.SCALE&&U.fromBufferAttribute(p.SCALE,E),C.setMatrixAt(E,b.compose(S,x,U));for(const E in p)if(E==="_COLOR_0"){const N=p[E];C.instanceColor=new Rc(N.array,N.itemSize,N.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&M.geometry.setAttribute(E,p[E]);dn.prototype.copy.call(C,M),this.parser.assignFinalMaterial(C),y.push(C)}return m.isGroup?(m.clear(),m.add(...y),m):y[0]}))}}const tM="glTF",sc=12,_x={JSON:1313821514,BIN:5130562};class RD{constructor(e){this.name=Tt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,sc),r=new TextDecoder;if(this.header={magic:r.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==tM)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-sc,l=new DataView(e,sc);let u=0;for(;u<s;){const f=l.getUint32(u,!0);u+=4;const p=l.getUint32(u,!0);if(u+=4,p===_x.JSON){const h=new Uint8Array(e,sc+u,f);this.content=r.decode(h)}else if(p===_x.BIN){const h=sc+u;this.body=e.slice(h,h+f)}u+=f}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class CD{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const r=this.json,s=this.dracoLoader,l=e.extensions[this.name].bufferView,u=e.extensions[this.name].attributes,f={},p={},h={};for(const m in u){const v=_0[m]||m.toLowerCase();f[v]=u[m]}for(const m in e.attributes){const v=_0[m]||m.toLowerCase();if(u[m]!==void 0){const _=r.accessors[e.attributes[m]],y=Oo[_.componentType];h[v]=y.name,p[v]=_.normalized===!0}}return t.getDependency("bufferView",l).then(function(m){return new Promise(function(v,_){s.decodeDracoFile(m,function(y){for(const M in y.attributes){const b=y.attributes[M],S=p[M];S!==void 0&&(b.normalized=S)}v(y)},f,h,di,_)})})}}class DD{constructor(){this.name=Tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class UD{constructor(){this.name=Tt.KHR_MESH_QUANTIZATION}}class nM extends Pc{constructor(e,t,r,s){super(e,t,r,s)}copySampleValue_(e){const t=this.resultBuffer,r=this.sampleValues,s=this.valueSize,l=e*s*3+s;for(let u=0;u!==s;u++)t[u]=r[l+u];return t}interpolate_(e,t,r,s){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,p=f*2,h=f*3,m=s-t,v=(r-t)/m,_=v*v,y=_*v,M=e*h,b=M-h,S=-2*y+3*_,x=y-_,U=1-S,C=x-_+v;for(let E=0;E!==f;E++){const N=u[b+E+f],z=u[b+E+p]*m,P=u[M+E+f],G=u[M+E]*m;l[E]=U*N+C*z+S*P+x*G}return l}}const LD=new Cr;class ND extends nM{interpolate_(e,t,r,s){const l=super.interpolate_(e,t,r,s);return LD.fromArray(l).normalize().toArray(l),l}}const Yi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Oo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},yx={9728:Zt,9729:ai,9984:_S,9985:Rf,9986:lc,9987:br},xx={33071:Wa,33648:Wf,10497:Xo},lm={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_0={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},za={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},PD={CUBICSPLINE:void 0,LINEAR:Ac,STEP:Ec},cm={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function OD(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new dh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:aa})),a.DefaultMaterial}function _s(a,e,t){for(const r in t.extensions)a[r]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[r]=t.extensions[r])}function na(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ID(a,e,t){let r=!1,s=!1,l=!1;for(let h=0,m=e.length;h<m;h++){const v=e[h];if(v.POSITION!==void 0&&(r=!0),v.NORMAL!==void 0&&(s=!0),v.COLOR_0!==void 0&&(l=!0),r&&s&&l)break}if(!r&&!s&&!l)return Promise.resolve(a);const u=[],f=[],p=[];for(let h=0,m=e.length;h<m;h++){const v=e[h];if(r){const _=v.POSITION!==void 0?t.getDependency("accessor",v.POSITION):a.attributes.position;u.push(_)}if(s){const _=v.NORMAL!==void 0?t.getDependency("accessor",v.NORMAL):a.attributes.normal;f.push(_)}if(l){const _=v.COLOR_0!==void 0?t.getDependency("accessor",v.COLOR_0):a.attributes.color;p.push(_)}}return Promise.all([Promise.all(u),Promise.all(f),Promise.all(p)]).then(function(h){const m=h[0],v=h[1],_=h[2];return r&&(a.morphAttributes.position=m),s&&(a.morphAttributes.normal=v),l&&(a.morphAttributes.color=_),a.morphTargetsRelative=!0,a})}function zD(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,r=e.weights.length;t<r;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let r=0,s=t.length;r<s;r++)a.morphTargetDictionary[t[r]]=r}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function BD(a){let e;const t=a.extensions&&a.extensions[Tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+um(t.attributes):e=a.indices+":"+um(a.attributes)+":"+a.mode,a.targets!==void 0)for(let r=0,s=a.targets.length;r<s;r++)e+=":"+um(a.targets[r]);return e}function um(a){let e="";const t=Object.keys(a).sort();for(let r=0,s=t.length;r<s;r++)e+=t[r]+":"+a[t[r]]+";";return e}function y0(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function FD(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":a.search(/\.ktx2($|\?)/i)>0||a.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const HD=new dt;class VD{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new cD,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let r=!1,s=-1,l=!1,u=-1;if(typeof navigator<"u"){const f=navigator.userAgent;r=/^((?!chrome|android).)*safari/i.test(f)===!0;const p=f.match(/Version\/(\d+)/);s=r&&p?parseInt(p[1],10):-1,l=f.indexOf("Firefox")>-1,u=l?f.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||r&&s<17||l&&u<98?this.textureLoader=new h0(this.options.manager):this.textureLoader=new X3(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new YS(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const r=this,s=this.json,l=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(u){return u._markDefs&&u._markDefs()}),Promise.all(this._invokeAll(function(u){return u.beforeRoot&&u.beforeRoot()})).then(function(){return Promise.all([r.getDependencies("scene"),r.getDependencies("animation"),r.getDependencies("camera")])}).then(function(u){const f={scene:u[0][s.scene||0],scenes:u[0],animations:u[1],cameras:u[2],asset:s.asset,parser:r,userData:{}};return _s(l,f,s),na(f,s),Promise.all(r._invokeAll(function(p){return p.afterRoot&&p.afterRoot(f)})).then(function(){for(const p of f.scenes)p.updateMatrixWorld();e(f)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],r=this.json.meshes||[];for(let s=0,l=t.length;s<l;s++){const u=t[s].joints;for(let f=0,p=u.length;f<p;f++)e[u[f]].isBone=!0}for(let s=0,l=e.length;s<l;s++){const u=e[s];u.mesh!==void 0&&(this._addNodeRef(this.meshCache,u.mesh),u.skin!==void 0&&(r[u.mesh].isSkinnedMesh=!0)),u.camera!==void 0&&this._addNodeRef(this.cameraCache,u.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,r){if(e.refs[t]<=1)return r;const s=r.clone(),l=(u,f)=>{const p=this.associations.get(u);p!=null&&this.associations.set(f,p);for(const[h,m]of u.children.entries())l(m,f.children[h])};return l(r,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let r=0;r<t.length;r++){const s=e(t[r]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const r=[];for(let s=0;s<t.length;s++){const l=e(t[s]);l&&r.push(l)}return r}getDependency(e,t){const r=e+":"+t;let s=this.cache.get(r);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(l){return l.loadNode&&l.loadNode(t)});break;case"mesh":s=this._invokeOne(function(l){return l.loadMesh&&l.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(l){return l.loadBufferView&&l.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(l){return l.loadMaterial&&l.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(l){return l.loadTexture&&l.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(l){return l.loadAnimation&&l.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(l){return l!=this&&l.getDependency&&l.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(r,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const r=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(l,u){return r.getDependency(e,u)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],r=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Tt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(l,u){r.load(vc.resolveURL(t.uri,s.path),l,void 0,function(){u(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(r){const s=t.byteLength||0,l=t.byteOffset||0;return r.slice(l,l+s)})}loadAccessor(e){const t=this,r=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const u=lm[s.type],f=Oo[s.componentType],p=s.normalized===!0,h=new f(s.count*u);return Promise.resolve(new Mn(h,u,p))}const l=[];return s.bufferView!==void 0?l.push(this.getDependency("bufferView",s.bufferView)):l.push(null),s.sparse!==void 0&&(l.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),l.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(l).then(function(u){const f=u[0],p=lm[s.type],h=Oo[s.componentType],m=h.BYTES_PER_ELEMENT,v=m*p,_=s.byteOffset||0,y=s.bufferView!==void 0?r.bufferViews[s.bufferView].byteStride:void 0,M=s.normalized===!0;let b,S;if(y&&y!==v){const x=Math.floor(_/y),U="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+x+":"+s.count;let C=t.cache.get(U);C||(b=new h(f,x*y,s.count*y/m),C=new BS(b,y/m),t.cache.add(U,C)),S=new hh(C,p,_%y/m,M)}else f===null?b=new h(s.count*p):b=new h(f,_,s.count*p),S=new Mn(b,p,M);if(s.sparse!==void 0){const x=lm.SCALAR,U=Oo[s.sparse.indices.componentType],C=s.sparse.indices.byteOffset||0,E=s.sparse.values.byteOffset||0,N=new U(u[1],C,s.sparse.count*x),z=new h(u[2],E,s.sparse.count*p);f!==null&&(S=new Mn(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let P=0,G=N.length;P<G;P++){const D=N[P];if(S.setX(D,z[P*p]),p>=2&&S.setY(D,z[P*p+1]),p>=3&&S.setZ(D,z[P*p+2]),p>=4&&S.setW(D,z[P*p+3]),p>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=M}return S})}loadTexture(e){const t=this.json,r=this.options,l=t.textures[e].source,u=t.images[l];let f=this.textureLoader;if(u.uri){const p=r.manager.getHandler(u.uri);p!==null&&(f=p)}return this.loadTextureImage(e,l,f)}loadTextureImage(e,t,r){const s=this,l=this.json,u=l.textures[e],f=l.images[t],p=(f.uri||f.bufferView)+":"+u.sampler;if(this.textureCache[p])return this.textureCache[p];const h=this.loadImageSource(t,r).then(function(m){m.flipY=!1,m.name=u.name||f.name||"",m.name===""&&typeof f.uri=="string"&&f.uri.startsWith("data:image/")===!1&&(m.name=f.uri);const _=(l.samplers||{})[u.sampler]||{};return m.magFilter=yx[_.magFilter]||ai,m.minFilter=yx[_.minFilter]||br,m.wrapS=xx[_.wrapS]||Xo,m.wrapT=xx[_.wrapT]||Xo,m.generateMipmaps=!m.isCompressedTexture&&m.minFilter!==Zt&&m.minFilter!==ai,s.associations.set(m,{textures:e}),m}).catch(function(){return null});return this.textureCache[p]=h,h}loadImageSource(e,t){const r=this,s=this.json,l=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(v=>v.clone());const u=s.images[e],f=self.URL||self.webkitURL;let p=u.uri||"",h=!1;if(u.bufferView!==void 0)p=r.getDependency("bufferView",u.bufferView).then(function(v){h=!0;const _=new Blob([v],{type:u.mimeType});return p=f.createObjectURL(_),p});else if(u.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const m=Promise.resolve(p).then(function(v){return new Promise(function(_,y){let M=_;t.isImageBitmapLoader===!0&&(M=function(b){const S=new Wn(b);S.needsUpdate=!0,_(S)}),t.load(vc.resolveURL(v,l.path),M,void 0,y)})}).then(function(v){return h===!0&&f.revokeObjectURL(p),na(v,u),v.userData.mimeType=u.mimeType||FD(u.uri),v}).catch(function(v){throw console.error("THREE.GLTFLoader: Couldn't load texture",p),v});return this.sourceCache[e]=m,m}assignTexture(e,t,r,s){const l=this;return this.getDependency("texture",r.index).then(function(u){if(!u)return null;if(r.texCoord!==void 0&&r.texCoord>0&&(u=u.clone(),u.channel=r.texCoord),l.extensions[Tt.KHR_TEXTURE_TRANSFORM]){const f=r.extensions!==void 0?r.extensions[Tt.KHR_TEXTURE_TRANSFORM]:void 0;if(f){const p=l.associations.get(u);u=l.extensions[Tt.KHR_TEXTURE_TRANSFORM].extendTexture(u,f),l.associations.set(u,p)}}return s!==void 0&&(u.colorSpace=s),e[t]=u,u})}assignFinalMaterial(e){const t=e.geometry;let r=e.material;const s=t.attributes.tangent===void 0,l=t.attributes.color!==void 0,u=t.attributes.normal===void 0;if(e.isPoints){const f="PointsMaterial:"+r.uuid;let p=this.cache.get(f);p||(p=new GS,Ar.prototype.copy.call(p,r),p.color.copy(r.color),p.map=r.map,p.sizeAttenuation=!1,this.cache.add(f,p)),r=p}else if(e.isLine){const f="LineBasicMaterial:"+r.uuid;let p=this.cache.get(f);p||(p=new VS,Ar.prototype.copy.call(p,r),p.color.copy(r.color),p.map=r.map,this.cache.add(f,p)),r=p}if(s||l||u){let f="ClonedMaterial:"+r.uuid+":";s&&(f+="derivative-tangents:"),l&&(f+="vertex-colors:"),u&&(f+="flat-shading:");let p=this.cache.get(f);p||(p=r.clone(),l&&(p.vertexColors=!0),u&&(p.flatShading=!0),s&&(p.normalScale&&(p.normalScale.y*=-1),p.clearcoatNormalScale&&(p.clearcoatNormalScale.y*=-1)),this.cache.add(f,p),this.associations.set(p,this.associations.get(r))),r=p}e.material=r}getMaterialType(){return dh}loadMaterial(e){const t=this,r=this.json,s=this.extensions,l=r.materials[e];let u;const f={},p=l.extensions||{},h=[];if(p[Tt.KHR_MATERIALS_UNLIT]){const v=s[Tt.KHR_MATERIALS_UNLIT];u=v.getMaterialType(),h.push(v.extendParams(f,l,t))}else{const v=l.pbrMetallicRoughness||{};if(f.color=new st(1,1,1),f.opacity=1,Array.isArray(v.baseColorFactor)){const _=v.baseColorFactor;f.color.setRGB(_[0],_[1],_[2],di),f.opacity=_[3]}v.baseColorTexture!==void 0&&h.push(t.assignTexture(f,"map",v.baseColorTexture,un)),f.metalness=v.metallicFactor!==void 0?v.metallicFactor:1,f.roughness=v.roughnessFactor!==void 0?v.roughnessFactor:1,v.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(f,"metalnessMap",v.metallicRoughnessTexture)),h.push(t.assignTexture(f,"roughnessMap",v.metallicRoughnessTexture))),u=this._invokeOne(function(_){return _.getMaterialType&&_.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(_){return _.extendMaterialParams&&_.extendMaterialParams(e,f)})))}l.doubleSided===!0&&(f.side=Pn);const m=l.alphaMode||cm.OPAQUE;if(m===cm.BLEND?(f.transparent=!0,f.depthWrite=!1):(f.transparent=!1,m===cm.MASK&&(f.alphaTest=l.alphaCutoff!==void 0?l.alphaCutoff:.5)),l.normalTexture!==void 0&&u!==ji&&(h.push(t.assignTexture(f,"normalMap",l.normalTexture)),f.normalScale=new Be(1,1),l.normalTexture.scale!==void 0)){const v=l.normalTexture.scale;f.normalScale.set(v,v)}if(l.occlusionTexture!==void 0&&u!==ji&&(h.push(t.assignTexture(f,"aoMap",l.occlusionTexture)),l.occlusionTexture.strength!==void 0&&(f.aoMapIntensity=l.occlusionTexture.strength)),l.emissiveFactor!==void 0&&u!==ji){const v=l.emissiveFactor;f.emissive=new st().setRGB(v[0],v[1],v[2],di)}return l.emissiveTexture!==void 0&&u!==ji&&h.push(t.assignTexture(f,"emissiveMap",l.emissiveTexture,un)),Promise.all(h).then(function(){const v=new u(f);return l.name&&(v.name=l.name),na(v,l),t.associations.set(v,{materials:e}),l.extensions&&_s(s,v,l),v})}createUniqueName(e){const t=Ht.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,r=this.extensions,s=this.primitiveCache;function l(f){return r[Tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(f,t).then(function(p){return Sx(p,f,t)})}const u=[];for(let f=0,p=e.length;f<p;f++){const h=e[f],m=BD(h),v=s[m];if(v)u.push(v.promise);else{let _;h.extensions&&h.extensions[Tt.KHR_DRACO_MESH_COMPRESSION]?_=l(h):_=Sx(new zi,h,t),s[m]={primitive:h,promise:_},u.push(_)}}return Promise.all(u)}loadMesh(e){const t=this,r=this.json,s=this.extensions,l=r.meshes[e],u=l.primitives,f=[];for(let p=0,h=u.length;p<h;p++){const m=u[p].material===void 0?OD(this.cache):this.getDependency("material",u[p].material);f.push(m)}return f.push(t.loadGeometries(u)),Promise.all(f).then(function(p){const h=p.slice(0,p.length-1),m=p[p.length-1],v=[];for(let y=0,M=m.length;y<M;y++){const b=m[y],S=u[y];let x;const U=h[y];if(S.mode===Yi.TRIANGLES||S.mode===Yi.TRIANGLE_STRIP||S.mode===Yi.TRIANGLE_FAN||S.mode===void 0)x=l.isSkinnedMesh===!0?new d3(b,U):new Vt(b,U),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),S.mode===Yi.TRIANGLE_STRIP?x.geometry=v0(x.geometry,AS):S.mode===Yi.TRIANGLE_FAN&&(x.geometry=v0(x.geometry,c0));else if(S.mode===Yi.LINES)x=new x3(b,U);else if(S.mode===Yi.LINE_STRIP)x=new q0(b,U);else if(S.mode===Yi.LINE_LOOP)x=new S3(b,U);else if(S.mode===Yi.POINTS)x=new M3(b,U);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(x.geometry.morphAttributes).length>0&&zD(x,l),x.name=t.createUniqueName(l.name||"mesh_"+e),na(x,l),S.extensions&&_s(s,x,S),t.assignFinalMaterial(x),v.push(x)}for(let y=0,M=v.length;y<M;y++)t.associations.set(v[y],{meshes:e,primitives:y});if(v.length===1)return l.extensions&&_s(s,v[0],l),v[0];const _=new Ms;l.extensions&&_s(s,_,l),t.associations.set(_,{meshes:e});for(let y=0,M=v.length;y<M;y++)_.add(v[y]);return _})}loadCamera(e){let t;const r=this.json.cameras[e],s=r[r.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return r.type==="perspective"?t=new fn(CS.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):r.type==="orthographic"&&(t=new Q0(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),r.name&&(t.name=this.createUniqueName(r.name)),na(t,r),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],r=[];for(let s=0,l=t.joints.length;s<l;s++)r.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?r.push(this.getDependency("accessor",t.inverseBindMatrices)):r.push(null),Promise.all(r).then(function(s){const l=s.pop(),u=s,f=[],p=[];for(let h=0,m=u.length;h<m;h++){const v=u[h];if(v){f.push(v);const _=new dt;l!==null&&_.fromArray(l.array,h*16),p.push(_)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new W0(f,p)})}loadAnimation(e){const t=this.json,r=this,s=t.animations[e],l=s.name?s.name:"animation_"+e,u=[],f=[],p=[],h=[],m=[];for(let v=0,_=s.channels.length;v<_;v++){const y=s.channels[v],M=s.samplers[y.sampler],b=y.target,S=b.node,x=s.parameters!==void 0?s.parameters[M.input]:M.input,U=s.parameters!==void 0?s.parameters[M.output]:M.output;b.node!==void 0&&(u.push(this.getDependency("node",S)),f.push(this.getDependency("accessor",x)),p.push(this.getDependency("accessor",U)),h.push(M),m.push(b))}return Promise.all([Promise.all(u),Promise.all(f),Promise.all(p),Promise.all(h),Promise.all(m)]).then(function(v){const _=v[0],y=v[1],M=v[2],b=v[3],S=v[4],x=[];for(let U=0,C=_.length;U<C;U++){const E=_[U],N=y[U],z=M[U],P=b[U],G=S[U];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const D=r._createAnimationTracks(E,N,z,P,G);if(D)for(let L=0;L<D.length;L++)x.push(D[L])}return new U3(l,void 0,x)})}createNodeMesh(e){const t=this.json,r=this,s=t.nodes[e];return s.mesh===void 0?null:r.getDependency("mesh",s.mesh).then(function(l){const u=r._getNodeRef(r.meshCache,s.mesh,l);return s.weights!==void 0&&u.traverse(function(f){if(f.isMesh)for(let p=0,h=s.weights.length;p<h;p++)f.morphTargetInfluences[p]=s.weights[p]}),u})}loadNode(e){const t=this.json,r=this,s=t.nodes[e],l=r._loadNodeShallow(e),u=[],f=s.children||[];for(let h=0,m=f.length;h<m;h++)u.push(r.getDependency("node",f[h]));const p=s.skin===void 0?Promise.resolve(null):r.getDependency("skin",s.skin);return Promise.all([l,Promise.all(u),p]).then(function(h){const m=h[0],v=h[1],_=h[2];_!==null&&m.traverse(function(y){y.isSkinnedMesh&&y.bind(_,HD)});for(let y=0,M=v.length;y<M;y++)m.add(v[y]);return m})}_loadNodeShallow(e){const t=this.json,r=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const l=t.nodes[e],u=l.name?s.createUniqueName(l.name):"",f=[],p=s._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return p&&f.push(p),l.camera!==void 0&&f.push(s.getDependency("camera",l.camera).then(function(h){return s._getNodeRef(s.cameraCache,l.camera,h)})),s._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){f.push(h)}),this.nodeCache[e]=Promise.all(f).then(function(h){let m;if(l.isBone===!0?m=new FS:h.length>1?m=new Ms:h.length===1?m=h[0]:m=new dn,m!==h[0])for(let v=0,_=h.length;v<_;v++)m.add(h[v]);if(l.name&&(m.userData.name=l.name,m.name=u),na(m,l),l.extensions&&_s(r,m,l),l.matrix!==void 0){const v=new dt;v.fromArray(l.matrix),m.applyMatrix4(v)}else l.translation!==void 0&&m.position.fromArray(l.translation),l.rotation!==void 0&&m.quaternion.fromArray(l.rotation),l.scale!==void 0&&m.scale.fromArray(l.scale);if(!s.associations.has(m))s.associations.set(m,{});else if(l.mesh!==void 0&&s.meshCache.refs[l.mesh]>1){const v=s.associations.get(m);s.associations.set(m,{...v})}return s.associations.get(m).nodes=e,m}),this.nodeCache[e]}loadScene(e){const t=this.extensions,r=this.json.scenes[e],s=this,l=new Ms;r.name&&(l.name=s.createUniqueName(r.name)),na(l,r),r.extensions&&_s(t,l,r);const u=r.nodes||[],f=[];for(let p=0,h=u.length;p<h;p++)f.push(s.getDependency("node",u[p]));return Promise.all(f).then(function(p){for(let m=0,v=p.length;m<v;m++)l.add(p[m]);const h=m=>{const v=new Map;for(const[_,y]of s.associations)(_ instanceof Ar||_ instanceof Wn)&&v.set(_,y);return m.traverse(_=>{const y=s.associations.get(_);y!=null&&v.set(_,y)}),v};return s.associations=h(l),l})}_createAnimationTracks(e,t,r,s,l){const u=[],f=e.name?e.name:e.uuid,p=[];za[l.path]===za.weights?e.traverse(function(_){_.morphTargetInfluences&&p.push(_.name?_.name:_.uuid)}):p.push(f);let h;switch(za[l.path]){case za.weights:h=qo;break;case za.rotation:h=jo;break;case za.translation:case za.scale:h=Zo;break;default:switch(r.itemSize){case 1:h=qo;break;case 2:case 3:default:h=Zo;break}break}const m=s.interpolation!==void 0?PD[s.interpolation]:Ac,v=this._getArrayFromAccessor(r);for(let _=0,y=p.length;_<y;_++){const M=new h(p[_]+"."+za[l.path],t.array,v,m);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),u.push(M)}return u}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const r=y0(t.constructor),s=new Float32Array(t.length);for(let l=0,u=t.length;l<u;l++)s[l]=t[l]*r;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(r){const s=this instanceof jo?ND:nM;return new s(this.times,this.values,this.getValueSize()/3,r)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function GD(a,e,t){const r=e.attributes,s=new sa;if(r.POSITION!==void 0){const f=t.json.accessors[r.POSITION],p=f.min,h=f.max;if(p!==void 0&&h!==void 0){if(s.set(new V(p[0],p[1],p[2]),new V(h[0],h[1],h[2])),f.normalized){const m=y0(Oo[f.componentType]);s.min.multiplyScalar(m),s.max.multiplyScalar(m)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const l=e.targets;if(l!==void 0){const f=new V,p=new V;for(let h=0,m=l.length;h<m;h++){const v=l[h];if(v.POSITION!==void 0){const _=t.json.accessors[v.POSITION],y=_.min,M=_.max;if(y!==void 0&&M!==void 0){if(p.setX(Math.max(Math.abs(y[0]),Math.abs(M[0]))),p.setY(Math.max(Math.abs(y[1]),Math.abs(M[1]))),p.setZ(Math.max(Math.abs(y[2]),Math.abs(M[2]))),_.normalized){const b=y0(Oo[_.componentType]);p.multiplyScalar(b)}f.max(p)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(f)}a.boundingBox=s;const u=new Dr;s.getCenter(u.center),u.radius=s.min.distanceTo(s.max)/2,a.boundingSphere=u}function Sx(a,e,t){const r=e.attributes,s=[];function l(u,f){return t.getDependency("accessor",u).then(function(p){a.setAttribute(f,p)})}for(const u in r){const f=_0[u]||u.toLowerCase();f in a.attributes||s.push(l(r[u],f))}if(e.indices!==void 0&&!a.index){const u=t.getDependency("accessor",e.indices).then(function(f){a.setIndex(f)});s.push(u)}return At.workingColorSpace!==di&&"COLOR_0"in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${At.workingColorSpace}" not supported.`),na(a,e),GD(a,e,t),Promise.all(s).then(function(){return e.targets!==void 0?ID(a,e.targets,t):a})}const kD="/3d-visualizer-Cosmo/assets/models/mountains1-Du8en640.glb",XD="/3d-visualizer-Cosmo/assets/models/isle-BVGdzMEh.glb",WD="/3d-visualizer-Cosmo/assets/models/toruses-B1mOnel4.glb",YD="data:model/gltf-binary;base64,Z2xURgIAAAA0BQAAjAQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6Iktocm9ub3MgZ2xURiBCbGVuZGVyIEkvTyB2MC45LjM2IiwidmVyc2lvbiI6IjIuMCJ9LCJzY2VuZSI6MCwic2NlbmVzIjpbeyJuYW1lIjoiU2NlbmUiLCJub2RlcyI6WzBdfV0sIm5vZGVzIjpbeyJtZXNoIjowLCJuYW1lIjoiUGxhbmUiLCJzY2FsZSI6WzkuOTAyMDI3MTMwMTI2OTUzLDkuOTAyMDI3MTMwMTI2OTUzLDkuOTAyMDI3MTMwMTI2OTUzXSwidHJhbnNsYXRpb24iOlszLjU0OTk5OTk1MjMxNjI4NCwtMC40NjAwMDAwMDgzNDQ2NTAyNywtMi4zNzk5OTk4NzYwMjIzMzldfV0sIm1hdGVyaWFscyI6W3siZG91YmxlU2lkZWQiOnRydWUsIm5hbWUiOiJNYXRlcmlhbC4wMDQiLCJwYnJNZXRhbGxpY1JvdWdobmVzcyI6eyJiYXNlQ29sb3JGYWN0b3IiOlswLjA3MDc1NjI3ODkzMjA5NDU3LDAuMDcwNzU2Mjc4OTMyMDk0NTcsMC4wNzA3NTYyNzg5MzIwOTQ1NywxXSwibWV0YWxsaWNGYWN0b3IiOjAsInJvdWdobmVzc0ZhY3RvciI6MC4yMzE4MTgxODQyNTY1NTM2NX19XSwibWVzaGVzIjpbeyJuYW1lIjoiUGxhbmUiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjowLCJOT1JNQUwiOjEsIlRFWENPT1JEXzAiOjJ9LCJpbmRpY2VzIjozLCJtYXRlcmlhbCI6MH1dfV0sImFjY2Vzc29ycyI6W3siYnVmZmVyVmlldyI6MCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjQsIm1heCI6WzEsMCwxXSwibWluIjpbLTEsMCwtMV0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6NCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjIsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo0LCJ0eXBlIjoiVkVDMiJ9LHsiYnVmZmVyVmlldyI6MywiY29tcG9uZW50VHlwZSI6NTEyMywiY291bnQiOjYsInR5cGUiOiJTQ0FMQVIifV0sImJ1ZmZlclZpZXdzIjpbeyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjQ4LCJieXRlT2Zmc2V0IjowfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6NDgsImJ5dGVPZmZzZXQiOjQ4fSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MzIsImJ5dGVPZmZzZXQiOjk2fSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTIsImJ5dGVPZmZzZXQiOjEyOH1dLCJidWZmZXJzIjpbeyJieXRlTGVuZ3RoIjoxNDB9XX2MAAAAQklOAAAAgL8AAAAAAACAPwAAgD8AAAAAAACAvwAAgL8AAAAAAACAvwAAgD8AAAAAAACAPwAAAAAAAIA/AAAAgAAAAAAAAIA/AAAAgAAAAAAAAIA/AAAAgAAAAAAAAIA/AAAAgAAAAAAAAIA/AACAPwAAAAAAAAAAAAAAAAAAgD8AAIA/AAABAAIAAAADAAEA",qD="/3d-visualizer-Cosmo/assets/models/ufo-B4orEOCO.glb",jD="/3d-visualizer-Cosmo/assets/baketest6-1001s-k09TSjOb.jpg",ZD="/3d-visualizer-Cosmo/assets/islebake3-1000s-BJSAIwOU.png";function Mx(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}class iM{constructor(e,t){this.material=new Ut({uniforms:{uTexture:{type:"t",value:null}},vertexShader:`
                varying vec2 vUv;

                void main() {
                    vUv = uv;
                    gl_Position = vec4(position.xy, 0.0, 1.0);    
                }
            `,fragmentShader:`
                uniform sampler2D uTexture;

                varying vec2 vUv;

                void main() {
                    ${t||"gl_FragColor = texture2D(uTexture, vUv);"}  
                }
            `,depthTest:!1,depthWrite:!1}),this.mesh=new Vt(new Ki(2,2),this.material),this.camera=new fn(45,1,1,1e3),this.renderer=e,this.scene=new bi,this.scene.add(this.mesh)}blit(e,t){this.renderer.setRenderTarget(t),this.material.uniforms.uTexture.value=e,this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null)}}class KD{constructor(e,t,r){this.material=new Ut({uniforms:{uTexture:{type:"t",value:null}},vertexShader:`
                varying float vDepth;

                void main() {
                    vDepth = - (modelViewMatrix * vec4(position, 1.0)).z;  
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);    
                }
            `,fragmentShader:`
                varying float vDepth;

                void main() {
                    gl_FragColor = vec4(vDepth, vDepth, vDepth, 1.0);
                }
            `,side:Pn}),this.renderer=e,this.scene=t,this.camera=r}blitDepth(e){this.renderer.setRenderTarget(e),this.scene.overrideMaterial=this.material,this.renderer.render(this.scene,this.camera),this.scene.overrideMaterial=null,this.renderer.setRenderTarget(null)}}class QD{constructor(e,t,r){this.material=new Ut({uniforms:{uTexture:{type:"t",value:null},uCameraPos:{value:new V(0,0,0)}},vertexShader:`
                varying vec3 vPosition;

                void main() {
                    vPosition = (modelMatrix * vec4(position, 1.0)).xyz;  
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);    
                }
            `,fragmentShader:`
                varying vec3 vPosition;

                uniform vec3 uCameraPos;

                void main() {
                    float depth = length(vPosition - uCameraPos);
                    gl_FragColor = vec4(vPosition, depth);
                }
            `,side:Pn}),this.renderer=e,this.scene=t,this.camera=r}blitPosition(e){this.renderer.setRenderTarget(e),this.material.uniforms.uCameraPos.value=this.camera.position.clone(),this.scene.overrideMaterial=this.material,this.renderer.render(this.scene,this.camera),this.scene.overrideMaterial=null,this.renderer.setRenderTarget(null)}}class JD{constructor(e){this.material=new Ut({uniforms:{uPosition:{type:"t",value:null},uPlanePosition:{type:"t",value:null},uColor:{type:"t",value:null}},vertexShader:`
                varying vec2 vUv;

                void main() {
                    vUv = uv;
                    gl_Position = vec4(position.xy, 0.0, 1.0);    
                }
            `,fragmentShader:`
                uniform sampler2D uPosition;
                uniform sampler2D uPlanePosition;
                uniform sampler2D uColor;

                varying vec2 vUv;

                void main() {   
                    vec3 position = texture2D(uPosition, vUv).xyz;
                    vec3 planePosition = texture2D(uPlanePosition, vUv).xyz;
                    vec3 color = texture2D(uColor, vUv).xyz;

                    // this is necessary to only blit the reflections of the plane 
                    if(planePosition != position) color = vec3(0.0);

                    gl_FragColor = vec4(color, 1.0);
                }
            `,depthTest:!1,depthWrite:!1}),this.mesh=new Vt(new Ki(2,2),this.material),this.camera=new fn(45,1,1,1e3),this.renderer=e,this.scene=new bi,this.scene.add(this.mesh)}blitReflectedColor(e,t,r,s){this.renderer.setRenderTarget(s),this.material.uniforms.uPosition.value=r,this.material.uniforms.uPlanePosition.value=t,this.material.uniforms.uColor.value=e,this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null)}}class $D{constructor(e){this.material=new Ut({uniforms:{uPosition:{type:"t",value:null},uPlanePosition:{type:"t",value:null},uReflectionPosition:{type:"t",value:null}},vertexShader:`
                varying vec2 vUv;

                void main() {
                    vUv = uv;
                    gl_Position = vec4(position.xy, 0.0, 1.0);    
                }
            `,fragmentShader:`
                uniform sampler2D uPosition;
                uniform sampler2D uPlanePosition;
                uniform sampler2D uReflectionPosition;

                varying vec2 vUv;

                void main() {   
                    vec3 position = texture2D(uPosition, vUv).xyz;
                    vec3 planePosition = texture2D(uPlanePosition, vUv).xyz;
                    vec3 reflectedPosition = texture2D(uReflectionPosition, vUv).xyz;

                    float distance = length(reflectedPosition - planePosition);
                    if(reflectedPosition == vec3(0.0)) distance = 0.0;
                    
                    // this is necessary to only blit the reflections of the plane 
                    if(planePosition != position) distance = 0.0;

                    gl_FragColor = vec4(vec3(distance), 1.0);
                }
            `,depthTest:!1,depthWrite:!1}),this.mesh=new Vt(new Ki(2,2),this.material),this.camera=new fn(45,1,1,1e3),this.renderer=e,this.scene=new bi,this.scene.add(this.mesh)}blitReflectionDistance(e,t,r,s){this.renderer.setRenderTarget(s),this.material.uniforms.uPosition.value=r,this.material.uniforms.uPlanePosition.value=t,this.material.uniforms.uReflectionPosition.value=e,this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null)}}class e4{constructor(e,t,r){let s=.45;this.fb0=new pn(t*s,r*s,{type:hn}),this.fb1=new pn(t*s,r*s,{type:hn}),this.material=new Ut({uniforms:{uInputTexture:{type:"t",value:null},uColorTexture:{type:"t",value:null},uOriginalTexture:{type:"t",value:null},uHorizontal:{value:!1},uStep:{value:1},uPixelStep:{value:new Be(1/(t*s),1/(r*s))}},vertexShader:`
                varying vec2 vUv;

                void main() {
                    vUv = uv;
                    gl_Position = vec4(position.xy, 0.0, 1.0);    
                }
            `,fragmentShader:`
                uniform sampler2D uInputTexture;
                uniform sampler2D uOriginalTexture;
                uniform sampler2D uColorTexture;

                uniform vec2 uPixelStep;
                uniform bool uHorizontal;
                uniform float uStep;

                varying vec2 vUv;

                float weight[5] = float[] (0.227027, 0.1945946, 0.1216216, 0.054054, 0.016216);

                void main() {   
                    

                    // prendi il valore mediano e poi basi il blur radius su quello
                    float average = 0.0;
                    for(int i = -4; i <= +4; i++) {
                        vec2 offs = vec2(0.0); 

                        if(uHorizontal)  offs = vec2(uPixelStep.x * float(i) * (1.0 + uStep * 1.0), 0.0);
                        if(!uHorizontal) offs = vec2(0.0, uPixelStep.x * float(i) * (1.0 + uStep * 1.0));

                        // if(uHorizontal)  offs = vec2(uPixelStep.x * float(i), 0.0);
                        // if(!uHorizontal) offs = vec2(0.0, uPixelStep.x * float(i));

                        // USING ORIGINAL TEXTURE
                        // USING ORIGINAL TEXTURE
                        // USING ORIGINAL TEXTURE
                        // USING ORIGINAL TEXTURE
                        // USING ORIGINAL TEXTURE
                        float value = texture2D(uOriginalTexture, vUv + offs).x;

                        average += value;
                    }
                    average /= 9.0;


                    // float blurRadius = 0.25 + average * 15.0;
                    float blurRadius = 0.125 + average * 7.5;


                    // float accum = 0.0;
                    // for(int i = -4; i <= +4; i++) {
                    //     vec2 offs = vec2(0.0); 

                    //     if(uHorizontal)  offs = vec2(uPixelStep.x * float(i) * blurRadius, 0.0);
                    //     if(!uHorizontal) offs = vec2(0.0, uPixelStep.x * float(i) * blurRadius);

                    //     float value = texture2D(uInputTexture, vUv + offs).x;
                        
                    //     float weightedValue = 0.0;
                    //     if(i < 0) weightedValue = value * weight[abs(i)];
                    //     if(i > 0) weightedValue = value * weight[i];
                    //     if(i == 0) weightedValue = value * weight[0];

                    //     accum += weightedValue;
                    // }
                    
                    // gl_FragColor = vec4(vec3(accum), 1.0);


                    vec3 accum = vec3(0.0);
                    for(int i = -4; i <= +4; i++) {
                        vec2 offs = vec2(0.0); 

                        if(uHorizontal)  offs = vec2(uPixelStep.x * float(i) * blurRadius, 0.0);
                        if(!uHorizontal) offs = vec2(0.0, uPixelStep.x * float(i) * blurRadius);

                        vec3 value = texture2D(uInputTexture, vUv + offs).xyz;
                        
                        vec3 weightedValue = vec3(0.0);
                        if(i < 0) weightedValue = value * weight[abs(i)];
                        if(i > 0) weightedValue = value * weight[i];
                        if(i == 0) weightedValue = value * weight[0];

                        accum += weightedValue;
                    }
                    
                    gl_FragColor = vec4(accum, 1.0);
                }
            `,depthTest:!1,depthWrite:!1}),this.mesh=new Vt(new Ki(2,2),this.material),this.camera=new fn(45,1,1,1e3),this.renderer=e,this.scene=new bi,this.scene.add(this.mesh),this.blitProgram=new iM(e)}blur(e,t,r){this.material.uniforms.uOriginalTexture.value=e,this.material.uniforms.uColorTexture.value=t;for(let s=0;s<7;s++)this.material.uniforms.uStep.value=1+s,this.renderer.setRenderTarget(this.fb0),this.material.uniforms.uHorizontal.value=!0,this.material.uniforms.uInputTexture.value=this.fb1.texture,s===0&&(this.material.uniforms.uInputTexture.value=t),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(this.fb1),this.material.uniforms.uHorizontal.value=!1,this.material.uniforms.uInputTexture.value=this.fb0.texture,this.renderer.render(this.scene,this.camera);this.blitProgram.blit(this.fb1.texture,r)}}class t4{constructor(e,t){let r=7e3;this.hoverN=5e3,this.particles=[];for(let u=0;u<r;u++)this.particles.push(this.createParticle());this.particlesGeo=new zi;const s=new Float32Array(r*9);this.particlesGeo.setAttribute("position",new Mn(s,3)),this.particlesMaterial=new Ut({vertexShader:`
      varying vec3 vWorldPos;

      void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);    
        vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
      }
      `,fragmentShader:`
      varying vec3 vWorldPos;
     
      void main() {   

        // vec3 sphereCenter = vec3(0.71, -0.13, -0.05);
        // vec3 dir = normalize(vWorldPos - sphereCenter);

        // float d = clamp(dot(dir, vec3(1.0, -0.75, -0.8)), 0.0, 1.0);
        // d = pow(d, 6.0);
        // d = clamp(d, 0.0, 0.75);
       
        gl_FragColor = vec4(0.5, 0.75, 1.0, 0.8);
        // gl_FragColor = vec4(vec3(0.169, 0.667, 1.0) * (1.0 - d), 0.8);
      }
      `,side:Pn,transparent:!0,blendEquation:Ga,blending:Em}),this.mesh=new Vt(this.particlesGeo,this.particlesMaterial),this.clock=new J0,this.clock.start();const l=new tg;this.raycastPoint=new V(0,0,0),this.raycastDelta=new V(0,0,0),this.windLevel=0,window.addEventListener("mousemove",u=>{let f=new Be(u.clientX/window.innerWidth*2-1,-(u.clientY/window.innerHeight)*2+1);l.setFromCamera(f,e);const p=l.intersectObjects(t.children);if(p[0]){let h=p[0].point;if(this.raycastPoint.x==0&&this.raycastPoint.y==0&&this.raycastPoint.z==0)this.raycastPoint=h;else{this.raycastDelta=this.raycastPoint.clone().sub(h),this.raycastPoint=h;for(let m=0;m<2;m++){let v=Math.floor(Math.random()*this.hoverN)+(r-this.hoverN);v>=r&&(v=r-1),v<=0&&(v=0);let _=new Kf(.025+Math.random()*.1,Math.random()*Math.PI,Math.random()*2*Math.PI);this.particles[v]=this.createParticle(),this.particles[v].position=this.raycastPoint.clone().add(new V().setFromSpherical(_).add(new V(0,.05,0))),this.particles[v].velocity=this.raycastDelta.clone().multiplyScalar(-(Math.random()*1+.5)*.5)}}}})}createParticle(){let e=new Kf(.35+Math.pow(Math.random()*1,1),Math.random()*Math.PI,Math.random()*2*Math.PI);return{position:new V().setFromSpherical(e).add(new V(.71,-.13,-.05)),velocity:new V(0,0,0),rotx:0,roty:0,rotz:0,rotxS:Math.random()*.02,rotyS:Math.random()*.02,rotzS:Math.random()*.02,t:0,radius:.013+Math.random()*.035,accumulatedWindTranslation:0,age:Math.random()*20,swirlRadius:Math.random()*.001,swirlSpeed:Math.random()*.7+.3,gravitySpeed:Math.random()*.01+Math.random()*.002}}setWindLevel(e){this.windLevel=e}update(){let e=this.clock.getDelta(),t=this.particles.length;for(let r=0;r<t;r++){(this.particles[r].position.y<-.5||this.particles[r].age>20)&&r<=t-this.hoverN&&(this.particles[r]=this.createParticle());let s=this.particles[r],l=s.position;if(s.rotx+=s.rotxS,s.roty+=s.rotyS,s.rotz+=s.rotzS,s.age+=e,s.t+=e,s.position.add(new V(Math.sin(s.t*s.swirlSpeed)*s.swirlRadius,-s.gravitySpeed*e,Math.cos(s.t*s.swirlSpeed)*s.swirlRadius)),this.windLevel>0){let m=this.windLevel*.15;s.position.add(new V(m,0,0))}s.position.add(s.velocity),s.velocity.multiplyScalar(.985);let u=r*9,f=new V(-.1,0,0).multiplyScalar(s.radius),p=new V(.1,0,0).multiplyScalar(s.radius),h=new V(.1,.15,0).multiplyScalar(s.radius);f.applyEuler(new Ii(s.rotx,s.roty,s.rotz)),p.applyEuler(new Ii(s.rotx,s.roty,s.rotz)),h.applyEuler(new Ii(s.rotx,s.roty,s.rotz)),this.particlesGeo.attributes.position.array[u+0]=f.x+l.x,this.particlesGeo.attributes.position.array[u+1]=f.y+l.y,this.particlesGeo.attributes.position.array[u+2]=f.z+l.z,this.particlesGeo.attributes.position.array[u+3]=p.x+l.x,this.particlesGeo.attributes.position.array[u+4]=p.y+l.y,this.particlesGeo.attributes.position.array[u+5]=p.z+l.z,this.particlesGeo.attributes.position.array[u+6]=h.x+l.x,this.particlesGeo.attributes.position.array[u+7]=h.y+l.y,this.particlesGeo.attributes.position.array[u+8]=h.z+l.z}this.particlesGeo.attributes.position.needsUpdate=!0}}class n4{constructor(e,t,r,s,l,u,f){this.rt0=new pn(Math.floor(t*.25),Math.floor(r*.25),{type:hn}),this.rt1=new pn(Math.floor(t*.25),Math.floor(r*.25),{type:hn}),this.torusesScene=s,this.torusesSceneCamera=l,this.blitProgram=f,this.torusesMaterial=new Ut({vertexShader:`
      varying vec3 vWorldPos;

      void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);    
        vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
      }
      `,fragmentShader:`
      varying vec3 vWorldPos;
   
      void main() {   
        if(vWorldPos.y < -0.46) discard;

        gl_FragColor = vec4(1.0);
      }
      `}),this.blurMaterial=new Ut({uniforms:{uTexture:{type:"t",value:null},uHorizontal:{value:!1},uStep:{value:1},uPixelStep:{value:new Be(1/t,1/r)}},vertexShader:`
      varying vec2 vUv;

      void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);    
      }
      `,fragmentShader:`
      uniform sampler2D uTexture;

      uniform vec2 uPixelStep;
      uniform bool uHorizontal;
      uniform float uStep;

      varying vec2 vUv;

      float weight[5] = float[] (0.227027, 0.1945946, 0.1216216, 0.054054, 0.016216);

      void main() {   
          float blurRadius = 2.0 + uStep * 9.5;

          vec3 accum = vec3(0.0);
          for(int i = -4; i <= +4; i++) {
              vec2 offs = vec2(0.0); 

              if(uHorizontal)  offs = vec2(uPixelStep.x * float(i) * blurRadius, 0.0);
              if(!uHorizontal) offs = vec2(0.0, uPixelStep.x * float(i) * blurRadius);

              vec3 value = texture2D(uTexture, vUv + offs).xyz;
              
              vec3 weightedValue = vec3(0.0);
              if(i < 0) weightedValue = value * weight[abs(i)];
              if(i > 0) weightedValue = value * weight[i];
              if(i == 0) weightedValue = value * weight[0];

              accum += weightedValue * 0.7;

              vec3 value2 = texture2D(uTexture, vUv + offs * 0.2).xyz;
              vec3 weightedValue2 = vec3(0.0);
              if(i < 0) weightedValue2 = value2 * weight[abs(i)];
              if(i > 0) weightedValue2 = value2 * weight[i];
              if(i == 0) weightedValue2 = value2 * weight[0];
              accum += weightedValue2 * 0.3;


          }
          
          gl_FragColor = vec4(accum, 1.0);
      }
            `,depthTest:!1,depthWrite:!1}),this.fogMaterial=new Ut({uniforms:{uColorTexture:{type:"t",value:null},uPositionTexture:{type:"t",value:u.texture},uTorusesBloom:{type:"t",value:null},uCameraPos:{value:new V(0,0,0)},uTime:{value:0},uWind:{value:0},uFogStartOffset:{value:0}},vertexShader:`
  varying vec2 vUv;

  void main() {
      vUv = uv;
      gl_Position = vec4(position.xy, 0.0, 1.0);    
  }
  `,fragmentShader:`
  varying vec2 vUv;
  
  uniform sampler2D uColorTexture;
  uniform sampler2D uTorusesBloom;
  uniform sampler2D uPositionTexture;
  // uniform sampler2D uFogMask;
  
  uniform vec3 uCameraPos;
  uniform float uTime;
  uniform float uWind;
  uniform float uFogStartOffset;

/* discontinuous pseudorandom uniformly distributed in [-0.5, +0.5]^3 */
vec3 random3(vec3 c) {
  float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
  vec3 r;
  r.z = fract(512.0*j);
  j *= .125;
  r.x = fract(512.0*j);
  j *= .125;
  r.y = fract(512.0*j);
  return r-0.5;
}

const float F3 =  0.3333333;
const float G3 =  0.1666667;

/* 3d simplex noise */
float simplex3d(vec3 p) {
   vec3 s = floor(p + dot(p, vec3(F3)));
   vec3 x = p - s + dot(s, vec3(G3));
   vec3 e = step(vec3(0.0), x - x.yzx);
   vec3 i1 = e*(1.0 - e.zxy);
   vec3 i2 = 1.0 - e.zxy*(1.0 - e);
   vec3 x1 = x - i1 + G3;
   vec3 x2 = x - i2 + 2.0*G3;
   vec3 x3 = x - 1.0 + 3.0*G3;
   vec4 w, d;
   w.x = dot(x, x);
   w.y = dot(x1, x1);
   w.z = dot(x2, x2);
   w.w = dot(x3, x3);
   w = max(0.6 - w, 0.0);
   d.x = dot(random3(s), x);
   d.y = dot(random3(s + i1), x1);
   d.z = dot(random3(s + i2), x2);
   d.w = dot(random3(s + 1.0), x3);
   w *= w;
   w *= w;
   d *= w;
   return dot(d, vec4(52.0));
}
const mat3 rot1 = mat3(-0.37, 0.36, 0.85,-0.14,-0.93, 0.34,0.92, 0.01,0.4);
const mat3 rot2 = mat3(-0.55,-0.39, 0.74, 0.33,-0.91,-0.24,0.77, 0.12,0.63);
const mat3 rot3 = mat3(-0.71, 0.52,-0.47,-0.08,-0.72,-0.68,-0.7,-0.45,0.56);
float simplex3d_fractal(vec3 m) {
  return   0.5333333*simplex3d(m*rot1)
      +0.2666667*simplex3d(2.0*m*rot2)
      +0.1333333*simplex3d(4.0*m*rot3)
      +0.0666667*simplex3d(8.0*m);
}

vec3 hueShift( vec3 color, float hueAdjust ){
  const vec3  kRGBToYPrime = vec3 (0.299, 0.587, 0.114);
  const vec3  kRGBToI      = vec3 (0.596, -0.275, -0.321);
  const vec3  kRGBToQ      = vec3 (0.212, -0.523, 0.311);
  const vec3  kYIQToR     = vec3 (1.0, 0.956, 0.621);
  const vec3  kYIQToG     = vec3 (1.0, -0.272, -0.647);
  const vec3  kYIQToB     = vec3 (1.0, -1.107, 1.704);
  float   YPrime  = dot (color, kRGBToYPrime);
  float   I       = dot (color, kRGBToI);
  float   Q       = dot (color, kRGBToQ);
  float   hue     = atan (Q, I);
  float   chroma  = sqrt (I * I + Q * Q);
  hue += hueAdjust;
  Q = chroma * sin (hue);
  I = chroma * cos (hue);
  vec3    yIQ   = vec3 (YPrime, I, Q);
  return vec3( dot (yIQ, kYIQToR), dot (yIQ, kYIQToG), dot (yIQ, kYIQToB) );
}

// ACES Filmic Tone Mapping function - ADDED THIS
vec3 ACESFilmicToneMapping(vec3 color) {
  float a = 2.51;
  float b = 0.03;
  float c = 2.43;
  float d = 0.59;
  float e = 0.14;
  color = clamp((color * (a * color + b)) / (color * (c * color + d) + e), 0.0, 1.0);
  return color;
}

void main() {   
  vec3 color = texture2D(uColorTexture, vUv).xyz;
  vec3 torusesColor = texture2D(uTorusesBloom, vUv).xyz;
  vec3 position = texture2D(uPositionTexture, vUv).xyz;
  // float fogMask = 1.0 - texture2D(uFogMask, vUv).x;

  if(position == vec3(0.0)) position = vec3(100.0);

  // float distFromCenter = length(position);
  // if(distFromCenter > 3.5) {
  //   float t = (distFromCenter - 3.5) / 2.0;
  //   position += normalize(position - uCameraPos) * 20.0 * t;
  // }

  vec3 dir = normalize(uCameraPos - position);
  float distance = length(uCameraPos - position);
  float particles = 0.0;
  int steps = 10;
  float fogStart = 3.5 + uFogStartOffset;
  vec3 rd = dir;
  vec3 ro = uCameraPos + rd * fogStart;
  if(distance > fogStart) {
    float stepDistance = (distance - fogStart) / float(steps);
    for(int i = 0; i < steps; i++) {
      float dist = stepDistance * float(i);
      vec3 p = ro + rd * (fogStart + dist);

      float nv = (simplex3d_fractal(p * 0.16 + vec3(uTime * 0.1 + uWind, 0.0, 0.0)) + 0.25 );
      nv = clamp(nv, 0.0, 1.0);
      nv += dist * 0.01;

      particles += nv * stepDistance * 18.0;
    }
  }

  float fogFactor = 1.0 - exp(-particles * 0.1);
  color = mix(color, vec3(0.6, 0.75, 0.9) * 0.35, fogFactor);
  // color = mix(color, vec3(1.0, 0.7, 0.5) * 0.25, fogFactor);

  torusesColor *= vec3(0.4, 0.65, 1.0) * 10.0;
  torusesColor = ACESFilmicToneMapping(torusesColor);  // Now this function exists

  float Talpha = torusesColor.x;
  // Talpha *= fogMask;

  // vec3 finalColor = mix(color, torusesColor, Talpha) * 0.5 + (color + torusesColor) * 0.5;
  // vec3 finalColor = hueShift(color, -0.05) + torusesColor * 0.75;
  vec3 finalColor = color + torusesColor * 0.5;

  gl_FragColor = vec4(finalColor, 1.0);
}
  `,depthTest:!1,depthWrite:!1}),this.blackMaterial=new ji({color:0}),this.mesh=new Vt(new Ki(2,2),this.blurMaterial),this.camera=new fn(45,1,1,1e3),this.renderer=e,this.scene=new bi,this.scene.add(this.mesh),this.clock=new J0,this.clock.start()}setWindLevel(e,t){this.fogMaterial.uniforms.uWind.value+=e,this.fogMaterial.uniforms.uFogStartOffset.value=t*-1}compute(e,t){this.renderer.setRenderTarget(this.rt1),this.torusesScene.overrideMaterial=this.torusesMaterial,this.renderer.render(this.torusesScene,this.torusesSceneCamera),this.torusesScene.overrideMaterial=null,this.mesh.material=this.blurMaterial;for(let r=0;r<7;r++)this.blurMaterial.uniforms.uStep.value=r,r>5&&(this.blurMaterial.uniforms.uStep.value=1),this.renderer.setRenderTarget(this.rt0),this.blurMaterial.uniforms.uHorizontal.value=!0,this.blurMaterial.uniforms.uTexture.value=this.rt1.texture,this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(this.rt1),this.blurMaterial.uniforms.uHorizontal.value=!1,this.blurMaterial.uniforms.uTexture.value=this.rt0.texture,this.renderer.render(this.scene,this.camera);this.fogMaterial.uniforms.uColorTexture.value=e,this.fogMaterial.uniforms.uTorusesBloom.value=this.rt1.texture,this.fogMaterial.uniforms.uCameraPos.value=this.torusesSceneCamera.position.clone(),this.fogMaterial.uniforms.uTime.value=this.clock.getElapsedTime(),this.mesh.material=this.fogMaterial,this.renderer.setRenderTarget(t),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null)}}let Xn={SIM_RESOLUTION:256,DYE_RESOLUTION:1024,DENSITY_DISSIPATION:.6,VELOCITY_DISSIPATION:.2,PRESSURE:1,PRESSURE_ITERATIONS:20,CURL:25,SPLAT_RADIUS:.25,SPLAT_FORCE:6e3,COLORFUL:!0,COLOR_UPDATE_SPEED:10};function x0(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[300,200,200]}let Xa=[];Xa.push(new x0);let On,qi,sr,yn,S0={dye:null,velocity:null};function i4(a,e,t){t&&(Xn=t),On=e,yn=a,qi=new bi,sr=new fn(45,On.width/On.height,.1,10),r4(),a4()}function Tx(a){let e=On.width/On.height;e<1&&(e=1/e);let t=Math.round(a),r=Math.round(a*e);return On.width>On.height?{width:r,height:t}:{width:t,height:r}}let wr,ut,Jf,Cc,lr;function r4(){let a=Tx(Xn.SIM_RESOLUTION),e=Tx(Xn.DYE_RESOLUTION);if(wr==null)wr=fm(e.width,e.height,ai);else throw new Error("not implemented");if(ut==null)ut=fm(a.width,a.height,ai);else throw new Error("not implemented");Jf=$f(a.width,a.height,Zt),Cc=$f(a.width,a.height,Zt),lr=fm(a.width,a.height,Zt),S0.dye=wr,S0.velocity=ut}function $f(a,e,t){let r=new pn(a,e,{type:hn,minFilter:t,magFilter:t,format:Oi,depthBuffer:!1,stencilBuffer:!1,anisotropy:1}),s=1/a,l=1/e;return{texture:r.texture,fbo:r,width:a,height:e,texelSizeX:s,texelSizeY:l}}function fm(a,e,t){let r=$f(a,e,t),s=$f(a,e,t);return{width:a,height:e,texelSizeX:r.texelSizeX,texelSizeY:r.texelSizeY,get read(){return r},set read(l){r=l},get write(){return s},set write(l){s=l},swap(){let l=r;r=s,s=l}}}let ea,eh,wo,M0,Of,If,zf,ar,or;function a4(){new Ut({uniforms:{uTexture:{type:"t",value:ut.read.texture}},vertexShader:Sr,fragmentShader:y4}),ea=new Ut({uniforms:{uTarget:{type:"t",value:ut.read.texture},aspectRatio:{value:On.width/On.height},point:{value:new Be(0,0)},color:{value:new V(0,0,0)},radius:{value:rM(Xn.SPLAT_RADIUS/100)}},vertexShader:Sr,fragmentShader:M4}),eh=new Ut({uniforms:{texelSize:{value:new Be(ut.texelSizeX,ut.texelSizeY)},uVelocity:{type:"t",value:ut.read.texture}},vertexShader:Sr,fragmentShader:E4}),wo=new Ut({uniforms:{texelSize:{value:new Be(ut.texelSizeX,ut.texelSizeY)},uVelocity:{type:"t",value:ut.read.texture},uCurl:{type:"t",value:Cc.texture},curl:{value:Xn.CURL},dt:{value:0}},vertexShader:Sr,fragmentShader:A4}),M0=new Ut({uniforms:{texelSize:{value:new Be(ut.texelSizeX,ut.texelSizeY)},uVelocity:{type:"t",value:ut.read.texture}},vertexShader:Sr,fragmentShader:b4}),Of=new Ut({uniforms:{uTexture:{type:"t",value:lr.read.texture},value:{value:Xn.PRESSURE}},vertexShader:Sr,fragmentShader:x4}),If=new Ut({uniforms:{texelSize:{value:new Be(ut.texelSizeX,ut.texelSizeY)},uDivergence:{type:"t",value:Jf.texture},uPressure:{type:"t",value:lr.read.texture}},vertexShader:Sr,fragmentShader:w4}),zf=new Ut({uniforms:{texelSize:{value:new Be(ut.texelSizeX,ut.texelSizeY)},uPressure:{type:"t",value:lr.read.texture},uVelocity:{type:"t",value:ut.read.texture}},vertexShader:Sr,fragmentShader:R4}),ar=new Ut({uniforms:{texelSize:{value:new Be(ut.texelSizeX,ut.texelSizeY)},uVelocity:{type:"t",value:ut.read.texture},uSource:{type:"t",value:ut.read.texture},dt:{value:0},dissipation:{value:Xn.VELOCITY_DISSIPATION}},vertexShader:Sr,fragmentShader:T4}),new Ut({uniforms:{texelSize:{value:new Be(ut.texelSizeX,ut.texelSizeY)},uVelocity:{type:"t",value:ut.read.texture},uTexture:{type:"t",value:wr.read.texture},uPressure:{type:"t",value:lr.read.texture},uCurl:{type:"t",value:Cc.texture}},vertexShader:Sr,fragmentShader:S4});let a=new Ki(2,2);or=new Vt(a,eh),qi.add(or)}function s4(){const a=o4();p4(a),u4(),l4(a)}let bx=Date.now();function o4(){let a=Date.now(),e=(a-bx)/1e3;return e=Math.min(e,.016666),bx=a,e}function l4(a){or.material=eh,eh.uniforms.uVelocity.value=ut.read.texture,yn.setRenderTarget(Cc.fbo),yn.render(qi,sr),or.material=wo,wo.uniforms.uVelocity.value=ut.read.texture,wo.uniforms.uCurl.value=Cc.texture,wo.uniforms.curl.value=Xn.CURL,wo.uniforms.dt.value=a,yn.setRenderTarget(ut.write.fbo),yn.render(qi,sr),ut.swap(),or.material=M0,M0.uniforms.uVelocity.value=ut.read.texture,yn.setRenderTarget(Jf.fbo),yn.render(qi,sr),or.material=Of,Of.uniforms.uTexture.value=lr.read.texture,Of.uniforms.value.value=Xn.PRESSURE,yn.setRenderTarget(lr.write.fbo),yn.render(qi,sr),or.material=If,If.uniforms.uDivergence.value=Jf.texture;for(let e=0;e<Xn.PRESSURE_ITERATIONS;e++)If.uniforms.uPressure.value=lr.read.texture,yn.setRenderTarget(lr.write.fbo),yn.render(qi,sr),lr.swap();or.material=zf,zf.uniforms.uPressure.value=lr.read.texture,zf.uniforms.uVelocity.value=ut.read.texture,yn.setRenderTarget(ut.write.fbo),yn.render(qi,sr),ut.swap(),or.material=ar,ar.uniforms.uVelocity.value=ut.read.texture,ar.uniforms.uSource.value=ut.read.texture,ar.uniforms.dt.value=a,ar.uniforms.dissipation.value=Xn.VELOCITY_DISSIPATION,yn.setRenderTarget(ut.write.fbo),yn.render(qi,sr),ut.swap(),or.material=ar,ar.uniforms.uVelocity.value=ut.read.texture,ar.uniforms.uSource.value=wr.read.texture,ar.uniforms.dt.value=a,ar.uniforms.dissipation.value=Xn.DENSITY_DISSIPATION,yn.setRenderTarget(wr.write.fbo),yn.render(qi,sr),wr.swap(),yn.setRenderTarget(null)}function c4(a,e,t,r,s,l,u){or.material=ea,ea.uniforms.uTarget.value=ut.read.texture,ea.uniforms.aspectRatio.value=On.width/On.height,ea.uniforms.point.value=new Be(a,e),ea.uniforms.color.value=new V(t,r,0),ea.uniforms.radius.value=rM(Xn.SPLAT_RADIUS/100),yn.setRenderTarget(ut.write.fbo),yn.render(qi,sr),ut.swap(),l.downMiddle||(ea.uniforms.uTarget.value=wr.read.texture,ea.uniforms.color.value=new V(1,1,1).multiplyScalar(.2),yn.setRenderTarget(wr.write.fbo),yn.render(qi,sr),wr.swap())}function rM(a){let e=On.width/On.height;return e>1&&(a*=e),a}function u4(){Xa.forEach(a=>{a.moved&&(a.moved=!1,h4(a))})}const Ex=new tg;function f4(a,e){window.addEventListener("mousedown",t=>{let r=Eo(t.clientX),s=Eo(t.clientY),l=Xa.find(u=>u.id==-1);l==null&&(l=new x0),Ax(l,-1,r,s,t.which==3,t.which==2)}),window.addEventListener("touchstart",t=>{let r=Eo(t.touches[0].clientX),s=Eo(t.touches[0].clientY),l=Xa.find(u=>u.id==-1);l==null&&(l=new x0),Ax(l,-1,r,s,t.which==3,t.which==2)}),window.addEventListener("mousemove",t=>{let r=Xa[0],s=new Be(t.clientX/window.innerWidth*2-1,-(t.clientY/window.innerHeight)*2+1);Ex.setFromCamera(s,a);const l=Ex.intersectObjects(e.children);if(l[0]){let f=l[0].point.clone().sub(new V(.71,-.13,-.05)).multiplyScalar(.75);f.x>1&&(f.x=1),f.x<-1&&(f.x=-1),f.y>1&&(f.y=1),f.y<-1&&(f.y=-1);let p=f.clone().multiplyScalar(.5).addScalar(.5),h=p.x,m=p.z;wx(r,h,m)}}),window.addEventListener("touchmove",t=>{let r=Xa[0],s=Eo(t.touches[0].clientX),l=Eo(t.touches[0].clientY);wx(r,s,l)}),window.addEventListener("mouseup",()=>{d4(Xa[0])})}function h4(a){let e=a.deltaX*Xn.SPLAT_FORCE,t=a.deltaY*Xn.SPLAT_FORCE;c4(a.texcoordX,a.texcoordY,e,t,a.color,a)}function Eo(a){let e=window.devicePixelRatio||1;return Math.floor(a*e)}function Ax(a,e,t,r,s,l){a.id=e,a.down=!0,a.downRight=s,a.downMiddle=l,a.moved=!1,a.texcoordX=t/On.width,a.texcoordY=1-r/On.height,a.prevTexcoordX=a.texcoordX,a.prevTexcoordY=a.texcoordY,a.deltaX=0,a.deltaY=0,a.color=aM(uc)}function wx(a,e,t){a.prevTexcoordX=a.texcoordX,a.prevTexcoordY=a.texcoordY,a.texcoordX=e,a.texcoordY=t,a.deltaX=g4(a.texcoordX-a.prevTexcoordX),a.deltaY=v4(a.texcoordY-a.prevTexcoordY),a.moved=Math.abs(a.deltaX)>0||Math.abs(a.deltaY)>0}function d4(a){a.down=!1}let hm=0,uc=0;function p4(a){Xn.COLORFUL&&(uc+=a*Xn.COLOR_UPDATE_SPEED*.03,uc=uc%360,hm+=a*Xn.COLOR_UPDATE_SPEED,hm=m4(hm,0,1),Xa.forEach(e=>{e.color=aM(uc)}))}function m4(a,e,t){let r=t-e;return(a-e)%r+e}function g4(a){let e=On.width/On.height;return e<1&&(a*=e),a}function v4(a){let e=On.width/On.height;return e>1&&(a/=e),a}function aM(a){let e=_4(a||Math.random(),1,1);return e.r*=.15,e.g*=.15,e.b*=.15,e}function _4(a,e,t){let r,s,l,u,f,p,h,m;switch(u=Math.floor(a*6),f=a*6-u,p=t*(1-e),h=t*(1-f*e),m=t*(1-(1-f)*e),u%6){case 0:r=t,s=m,l=p;break;case 1:r=h,s=t,l=p;break;case 2:r=p,s=t,l=m;break;case 3:r=p,s=h,l=t;break;case 4:r=m,s=p,l=t;break;case 5:r=t,s=p,l=h;break}return{r,g:s,b:l}}const Sr=`
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform vec2 texelSize;
    
    void main () {
        vUv = position.xy * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(position.xy, 0.0, 1.0);
    }
    `,y4=`
    varying highp vec2 vUv;
    uniform sampler2D uTexture;
    
    void main () {
        gl_FragColor = texture2D(uTexture, vUv);
    }
    `,x4=`
    varying highp vec2 vUv;
    uniform sampler2D uTexture;
    uniform float value;
    
    void main () {
        gl_FragColor = value * texture2D(uTexture, vUv);
    }
    `,S4=`
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform sampler2D uBloom;
    uniform sampler2D uSunrays;
    uniform sampler2D uDithering;
    uniform sampler2D uVelocity;
    uniform sampler2D uPressure;
    uniform sampler2D uCurl;
    uniform vec2 ditherScale;
    uniform vec2 texelSize;
    
    vec3 linearToGamma (vec3 color) {
        color = max(color, vec3(0));
        return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
    }
    
    vec3 acesFilm(const vec3 x) {
        const float a = 2.51;
        const float b = 0.03;
        const float c = 2.43;
        const float d = 0.59;
        const float e = 0.14;
        return clamp((x * (a * x + b)) / (x * (c * x + d ) + e), 0.0, 1.0);
    }
    
    
    void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;
    
    
        float a = max(c.r, max(c.g, c.b));
        gl_FragColor = vec4(c, a);
        // return;  // uncomment to see the base version of the shader
    
    
        vec3 vdata = ((texture2D(uVelocity, vUv).rgb)   * 0.5 + 0.5)  * 0.007;
        vec3 pdata = vec3(0.0, 0.0, texture2D(uPressure, vUv).r * 0.01);
        float cdata = texture2D(uCurl, vUv).r * 0.01;
        vec3 finalVelocityColor = vec3(0.6) + vdata * (1.0 + cdata);
        gl_FragColor = vec4(finalVelocityColor, 1.0);
        // return;  // uncomment to see the velocity version of the shader
    
    
        // // mixed version of the shader
        // gl_FragColor = vec4(c, a) * gl_FragColor * 2.0 + gl_FragColor * 0.25;
        
    
        float x = 0.6 + vdata.x;
        float y = 0.6 + vdata.y;
        float z = 0.6 + vdata.z;
        if(x < 0.0) x = 0.0;
        if(y < 0.0) y = 0.0;
        if(z < 0.0) z = 0.0;
        vec3 vcol = vec3(x,y,z);
        vec3 dcol = vec4(c, a).rgb;
        vec3 fcol = dcol + vcol * 0.25;
        if(fcol.r < 0.0) fcol.r = 0.0;
        if(fcol.g < 0.0) fcol.g = 0.0;
        if(fcol.b < 0.0) fcol.b = 0.0;
    
        gl_FragColor.rgb = acesFilm(fcol);
    }
    `,M4=`
    varying vec2 vUv;
    uniform sampler2D uTarget;
    uniform float aspectRatio;
    uniform vec3 color;
    uniform vec2 point;
    uniform float radius;
    
    void main () {
        vec2 p = vUv - point.xy;
        p.x *= aspectRatio;
        vec3 splat = exp(-dot(p, p) / radius) * color;
        vec3 base = texture2D(uTarget, vUv).xyz;
        gl_FragColor = vec4(base + splat, 1.0);
    }
    `,T4=`
    varying vec2 vUv;
    uniform sampler2D uVelocity;
    uniform sampler2D uSource;
    uniform vec2 texelSize;
    uniform vec2 dyeTexelSize;
    uniform float dt;
    uniform float dissipation;
    
    void main () {
        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
        vec4 result = texture2D(uSource, coord);
    
        float decay = 1.0 + dissipation * dt;
        gl_FragColor = result / decay;
    }`,b4=`
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;
    
    void main () {
        float L = texture2D(uVelocity, vL).x;
        float R = texture2D(uVelocity, vR).x;
        float T = texture2D(uVelocity, vT).y;
        float B = texture2D(uVelocity, vB).y;
    
        vec2 C = texture2D(uVelocity, vUv).xy;
        if (vL.x < 0.0) { L = -C.x; }
        if (vR.x > 1.0) { R = -C.x; }
        if (vT.y > 1.0) { T = -C.y; }
        if (vB.y < 0.0) { B = -C.y; }
    
        float div = 0.5 * (R - L + T - B);
        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
    }
    `,E4=`
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;
    
    void main () {
        float L = texture2D(uVelocity, vL).y;
        float R = texture2D(uVelocity, vR).y;
        float T = texture2D(uVelocity, vT).x;
        float B = texture2D(uVelocity, vB).x;
        float vorticity = R - L - T + B;
        gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
    }
    `,A4=`
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uVelocity;
    uniform sampler2D uCurl;
    uniform float curl;
    uniform float dt;
    
    void main () {
        float L = texture2D(uCurl, vL).x;
        float R = texture2D(uCurl, vR).x;
        float T = texture2D(uCurl, vT).x;
        float B = texture2D(uCurl, vB).x;
        float C = texture2D(uCurl, vUv).x;
    
        vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
        force /= length(force) + 0.0001;
        force *= curl * C;
        force.y *= -1.0;
    
        vec2 vel = texture2D(uVelocity, vUv).xy;
        gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);
    }
    `,w4=`
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uDivergence;
    
    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        float C = texture2D(uPressure, vUv).x;
        float divergence = texture2D(uDivergence, vUv).x;
        float pressure = (L + R + B + T - divergence) * 0.25;
        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
    }
    `,R4=`
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uVelocity;
    
    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity.xy -= vec2(R - L, T - B);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
    }
    `;function T0(a){var e=/#include <(.*)>/gm;function t(r,s){var l=lt[s];return T0(l)}return a.replace(e,t)}let Rx={};function b0(a){return Rx[a]?!1:(Rx[a]=!0,!0)}function C4(a,e,t){const r=new tg,s=new bi,l=new j0(.32,6,6),u=new Vt(l,new ji({color:16777215,side:Pn}));u.position.set(.71,-.13,-.05),u.updateMatrixWorld(),s.add(u);let f=!1,p;window.addEventListener("mousedown",U=>{p=new Be(U.clientX/window.innerWidth*2-1,-(U.clientY/window.innerHeight)*2+1),v.classList.add("active"),_.classList.add("active")}),window.addEventListener("mouseup",U=>{let C=new Be(U.clientX/window.innerWidth*2-1,-(U.clientY/window.innerHeight)*2+1);p.clone().sub(C).length()<.01&&t(f),v.classList.remove("active"),_.classList.remove("active")});let h=new Be(window.innerWidth*.5,window.innerHeight*.75),m=new Be(window.innerWidth*.5,window.innerHeight*.75);window.addEventListener("mousemove",U=>{let C=new Be(U.clientX/window.innerWidth*2-1,-(U.clientY/window.innerHeight)*2+1);r.setFromCamera(C,e),m.setX(U.clientX),m.setY(U.clientY),r.intersectObjects(s.children)[0]?(b0("hide-mouse-icon")&&setTimeout(()=>{y.classList.add("hide"),setTimeout(()=>{y.style.display="none"},500)},250),f=!0,_.classList.contains("hover")||_.classList.add("hover")):(f=!1,_.classList.contains("hover")&&_.classList.remove("hover"))});let v=document.querySelector(".central-cursor"),_=document.querySelector(".outer-cursor"),y=document.querySelector(".mouse-icon"),M=v.getBoundingClientRect(),b=_.getBoundingClientRect(),S=y.getBoundingClientRect();function x(U){let C=.8;h.multiplyScalar(C).add(m.clone().multiplyScalar(1-C)),v.style.left=`${m.x-M.width*.5}px`,v.style.top=`${m.y-M.height*.5}px`,_.style.left=`${h.x-b.width*.5}px`,_.style.top=`${h.y-b.height*.5}px`;let E=new V(.87,0,-.15).project(e);E.multiplyScalar(.5).addScalar(.5).multiply(new V(window.innerWidth,window.innerHeight,0)),y.style.left=`${E.x-S.width*.5}px`,y.style.top=`${window.innerHeight-(E.y-S.height*.5)}px`}return{update:x}}let sM=`
float sat( float t ) {
	return clamp( t, 0.0, 1.0 );
}

vec2 sat( vec2 t ) {
	return clamp( t, 0.0, 1.0 );
}`,oM=`
//remaps inteval [a;b] to [0;1]
float remap ( float t, float a, float b ) {
	return sat( (t - a) / (b - a) );
}`,lM=`
//note: / t=[0; 0.5; 1], y=[0; 1; 0]
float linterp( float t ) {
	return sat( 1.0 - abs( 2.0*t - 1.0 ) );
}
`,cM=`
// given t = [0, 1] 
// if t < 0.5    lo = 0 & hi = 1  else  lo = 1 && hi = 0
// 'w' will take the form:  [0, 1, 0] and 'neg_w' = [1, 0, 1]
vec3 spectrum_offset( float t ) {
	vec3 ret;
    // remember that t is the edge, not 0.5... so it's a bit confusing since normally you'd expect
    // for this call to be written as: step(0.5 /* edge */, t /* x */) as per the specs on:
    // https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/step.xhtml
    float lo = step(t, 0.5);
	float hi = 1.0-lo;
    
    // float w = linterp( remap( t, 0.166, 0.833 ) );
    float w = linterp( t );
	float neg_w = 1.0 - w;
    
    // t = 0:       vec3(0,1,1)     * vec3(1.0, 0.0, 1.0);  -->  return vec3(0.0, 0.0, 1.0);
    // t = 0.1:     vec3(0,1,1)     * vec3(0.8, 0.2, 0.8);  -->  return vec3(0.0, 0.2, 0.8);
    // t = 0.2:     vec3(0,1,1)     * vec3(0.6, 0.4, 0.6);  -->  return vec3(0.0, 0.4, 0.6);
    // t = 0.3:     vec3(0,1,1)     * vec3(0.4, 0.6, 0.4);  -->  return vec3(0.0, 0.6, 0.4);
    // t = 0.4:     vec3(0,1,1)     * vec3(0.2, 0.8, 0.2);  -->  return vec3(0.0, 0.8, 0.2);
    // t = 0.5:     vec3(0,1,1)     * vec3(0.0, 1.0, 0.0);  -->  return vec3(0.0, 1.0, 0.0);
    // t = 0.6:     vec3(1,1,0)     * vec3(0.2, 0.8, 0.2);  -->  return vec3(0.2, 0.8, 0.0);
    // t = 0.7:     vec3(1,1,0)     * vec3(0.4, 0.6, 0.4);  -->  return vec3(0.4, 0.6, 0.0);
    // t = 0.8:     vec3(1,1,0)     * vec3(0.6, 0.4, 0.6);  -->  return vec3(0.6, 0.4, 0.0);
    // t = 0.9:     vec3(1,1,0)     * vec3(0.8, 0.2, 0.8);  -->  return vec3(0.8, 0.2, 0.0);
    // t = 1.0:     vec3(1,1,0)     * vec3(1.0, 0.0, 1.0);  -->  return vec3(1.0, 0.0, 0.0);
	ret =           vec3(lo,1.0,hi) * vec3(neg_w, w, neg_w);
	// return pow( ret, vec3(1.0/2.2) );
	return ret;
}
`,uM=`
// note: [0;1]
float rand( vec2 n ) {
    return fract(sin(dot(n.xy, vec2(12.9898, 78.233)))* 43758.5453);
}
  
// note: [-1;1]
float srand( vec2 n ) {
    return rand(n) * 2.0 - 1.0;
}
`;class D4{constructor(e,t){this.material=new Ut({uniforms:{uTexture:{type:"t",value:null},uPosition:{type:"t",value:t.texture},uWindLevel:{value:0},uTime:{value:0},uSphereActiveTimer:{value:0},uAspect:{value:window.innerWidth/window.innerHeight},uBottomDistortion:{value:.5},uDispersion:{value:0}},vertexShader:`
                varying vec2 vUv;

                void main() {
                    vUv = uv;
                    gl_Position = vec4(position.xy, 0.0, 1.0);    
                }
            `,fragmentShader:`
                uniform sampler2D uTexture;
                uniform sampler2D uPosition;
                uniform float uWindLevel;
                uniform float uTime;
                uniform float uSphereActiveTimer;
                uniform float uAspect;
                uniform bool  uBottomDistortion;
                uniform float uDispersion;

                varying vec2 vUv;

                ${uM}
                ${sM}
                ${oM}
                ${lM}
                ${cM}


                /* discontinuous pseudorandom uniformly distributed in [-0.5, +0.5]^3 */
                vec3 random3(vec3 c) {
                    float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
                    vec3 r;
                    r.z = fract(512.0*j);
                    j *= .125;
                    r.x = fract(512.0*j);
                    j *= .125;
                    r.y = fract(512.0*j);
                    return r-0.5;
                }
                
                const float F3 =  0.3333333;
                const float G3 =  0.1666667;
                
                /* 3d simplex noise */
                float simplex3d(vec3 p) {
                     vec3 s = floor(p + dot(p, vec3(F3)));
                     vec3 x = p - s + dot(s, vec3(G3));
                     vec3 e = step(vec3(0.0), x - x.yzx);
                     vec3 i1 = e*(1.0 - e.zxy);
                     vec3 i2 = 1.0 - e.zxy*(1.0 - e);
                     vec3 x1 = x - i1 + G3;
                     vec3 x2 = x - i2 + 2.0*G3;
                     vec3 x3 = x - 1.0 + 3.0*G3;
                     vec4 w, d;
                     w.x = dot(x, x);
                     w.y = dot(x1, x1);
                     w.z = dot(x2, x2);
                     w.w = dot(x3, x3);
                     w = max(0.6 - w, 0.0);
                     d.x = dot(random3(s), x);
                     d.y = dot(random3(s + i1), x1);
                     d.z = dot(random3(s + i2), x2);
                     d.w = dot(random3(s + 1.0), x3);
                     w *= w;
                     w *= w;
                     d *= w;
                     return dot(d, vec4(52.0));
                }
                const mat3 rot1 = mat3(-0.37, 0.36, 0.85,-0.14,-0.93, 0.34,0.92, 0.01,0.4);
                const mat3 rot2 = mat3(-0.55,-0.39, 0.74, 0.33,-0.91,-0.24,0.77, 0.12,0.63);
                const mat3 rot3 = mat3(-0.71, 0.52,-0.47,-0.08,-0.72,-0.68,-0.7,-0.45,0.56);
                float simplex3d_fractal(vec3 m) {
                    return   0.5333333*simplex3d(m*rot1)
                            +0.2666667*simplex3d(2.0*m*rot2)
                            +0.1333333*simplex3d(4.0*m*rot3)
                            +0.0666667*simplex3d(8.0*m);
                }

                // vec4 block:  .xy bottomcoords - .zw topcoords
                float isInBlock(vec2 uv, vec4 block) {
                    vec2 a = sign(uv - block.xy);
                    vec2 b = sign(block.zw - uv);
                    return min(sign(a.x + a.y + b.x + b.y - 3.), 0.);
                }

                vec2 moveDiff(vec2 uv, vec4 swapA, vec4 swapB) {
                    vec2 diff = swapB.xy - swapA.xy;
                    return diff * isInBlock(uv, swapA);
                }

                vec2 randSwap(
                    vec2 uv, 
                    vec2 gridSize, /* in uv space */
                    vec2 subGridSize, /* e.g. vec2(3, 3) for a 3x3 grid */ 
                    float time,
                    inout float dispersion
                ) {
                    vec2 gridBottom = uv - mod(uv, gridSize);
                    vec2 gridCenter = gridBottom + gridSize * 0.5;

                    if(uBottomDistortion) {
                        uv.y += srand(gridBottom) * 0.025;
                    }

                    float subGridCellsCount = subGridSize.x * subGridSize.y;

                    float gridRand1 = rand(gridCenter + vec2(time));
                    float gridRand2 = rand(gridBottom + vec2(time));

                    dispersion += srand(gridBottom + vec2(time)) * (gridSize.x + gridSize.y);

                    float randSubGridIdx1 = floor( gridRand1 * subGridCellsCount  );
                    float randSubGridIdx2 = floor( gridRand2 * subGridCellsCount  );

                    vec2 subCellSize = gridSize / subGridSize;
                    
                    vec2 scell1Bottom = gridBottom + vec2(
                        mod(randSubGridIdx1, subGridSize.x) * subCellSize.x,
                        floor(randSubGridIdx1 / subGridSize.x) * subCellSize.y
                    );
                    vec2 scell2Bottom = gridBottom + vec2(
                        mod(randSubGridIdx2, subGridSize.x) * subCellSize.x,
                        floor(randSubGridIdx2 / subGridSize.x) * subCellSize.y
                    );
                    
                    vec4 swapA = vec4(scell1Bottom, scell1Bottom + subCellSize);
                    vec4 swapB = vec4(scell2Bottom, scell2Bottom + subCellSize);

                    vec2 newUv = uv;
                    // if we're in swapA, move to swapB
                    newUv += moveDiff(uv, swapA, swapB);
                    // if we're in swapB, move to swapA
                    newUv += moveDiff(uv, swapB, swapA);
                    return newUv;
                }

                void main() {
                    float rgbOffs = 0.0;
                    vec2 windOffs = vec2(0.0);

                    vec3 position = texture2D(uPosition, vUv).xyz;

                    if(uWindLevel > 0.0) {
                        float noisex = simplex3d(vec3(uTime * 1.5, 0.0, 0.0));
                        float noisey = simplex3d(vec3(uTime * 1.5 + 57.897, 0.0, 0.0));

                        windOffs = vec2(noisex, noisey) * uWindLevel * 0.0035;

                        rgbOffs += uWindLevel * 0.006 * length(vUv - vec2(0.5));
                    } 

                    // vec3 c1 = texture2D(uTexture, vUv + windOffs + vec2(-rgbOffs, 0.0)).xyz;
                    // vec3 c2 = texture2D(uTexture, vUv + windOffs + vec2(0.0, 0.0)).xyz;
                    // vec3 c3 = texture2D(uTexture, vUv + windOffs + vec2(+rgbOffs, 0.0)).xyz;

                    // vec3 finalColor = vec3(c1.x, c2.y, c3.z);
                    // gl_FragColor = vec4(finalColor, 1.0); 


                    vec2 nuvs = vUv + windOffs;

                    float sphereActiveTime = uSphereActiveTimer;
                    float strength = 0.0;
                    float targetDist = length(vec3(position.x, 0.0, position.z) - vec3(0.71, 0.0, -0.05));

                    sphereActiveTime -= 0.3;
                    if(targetDist > 0.5 && targetDist < 0.65 && position.y < -0.4575) {
                        strength += 0.15 * clamp(sphereActiveTime, 0.0, 1.0);
                    }

                    sphereActiveTime -= 0.5;
                    if(targetDist > 0.75 && targetDist < 0.8 && position.y < -0.40) {
                        strength += 0.15 * clamp(sphereActiveTime, 0.0, 1.0);
                    }
                    
                    float modT = mod(uTime, 5.0);
                    sphereActiveTime -= 0.2;
                    if(targetDist > modT && targetDist < (0.6 + modT)) {
                        float mid = 0.3 + modT;
                        float t = 1.0 - abs(targetDist - mid) / 0.3;

                        if(targetDist < 0.9) t = 0.0;
                        if(targetDist > 4.0) t *= 1.0 - (targetDist - 4.0);

                        strength += t * 0.15 * clamp(sphereActiveTime, 0.0, 1.0);
                    }

                    {
                        float modT = mod(uTime * 2.0 + 1.0, 10.0);
                        if(targetDist > modT && targetDist < (0.3 + modT)) {
                            float mid = 0.15 + modT;
                            float t = 1.0 - abs(targetDist - mid) / 0.15;
    
                            if(targetDist < 0.9) t = 0.0;
                            if(targetDist > 4.0) t *= 1.0 - (targetDist - 4.0);
    
                            strength += t * 0.15 * clamp(sphereActiveTime, 0.0, 1.0);
                        }
                    }
                    



                    float time = uTime;
                    float dispersion = 0.0;
                    float nullop = 0.0; // we'll use this value instead of dispersion just because the compiler complaints if I don't do it

                    vec2 uv = randSwap(nuvs, vec2(0.40 + nuvs.x * 0.0000025, 0.20),  vec2(3.0, 3.0), time - mod(time, 0.15), dispersion);
                    uv      = randSwap(uv,  vec2(0.02 + uv.x  * 0.0000025, 0.015), vec2(3.0, 2.0), time - mod(time, 0.05), nullop);
                    uv      = randSwap(uv,  vec2(0.06 + uv.x  * 0.0000025, 0.12),  vec2(2.0, 3.0), time - mod(time, 0.02), nullop);
                    uv      = randSwap(uv,  vec2(0.35 + uv.x  * 0.0000025, 0.35),  vec2(2.0, 2.0), time - mod(time, 0.07), dispersion);

                    vec2 dist = nuvs - uv;
                    uv += dist * (1.0 - strength);
                    dispersion = sat(dispersion) * strength * 15.0;


                    float direction = rand(vec2(dispersion)) > 0.5 ? -1.0 : 1.0;
                    const int steps = 10;
                    vec3 sum = vec3(0.0);
                    vec3 cumw = vec3(0.0);

                    // rand pixel offset to ease dispersion a bit
                    uv.x += srand(uv) * 0.01 * dispersion;

                    for(int i = 0; i < steps; i++) {
                        float t = float(i) / float(steps);
                        vec2 dispUv = uv + vec2(dispersion * 0.1 * direction * t, 0.0);
                        vec3 spectr = spectrum_offset(t);
                        cumw += spectr;
                        sum += texture2D(uTexture, dispUv).rgb * spectr;
                    }

                    gl_FragColor = vec4(sum / cumw, 1.0);
                }
            `,depthTest:!1,depthWrite:!1}),this.mesh=new Vt(new Ki(2,2),this.material),this.camera=new fn(45,1,1,1e3),this.renderer=e,this.scene=new bi,this.scene.add(this.mesh)}compute({windLevel:e,time:t,sphereActiveTimer:r},s,l){this.renderer.setRenderTarget(l),this.material.uniforms.uTexture.value=s,this.material.uniforms.uWindLevel.value=e,this.material.uniforms.uTime.value=t,this.material.uniforms.uSphereActiveTimer.value=r,this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null)}}const Cx=a=>new Ut({side:Pn,uniforms:{map:{type:"t",value:a},uTime:{value:0},uSphereActiveTimer:{value:0}},vertexShader:`
      varying vec3 vFragPos;
      varying vec2 vUv;

      void main() {
        // ******* this code block is necessary for compatibility with
        // reflectable-material ********
        vec4 mvPosition = vec4(position, 1.0);
        mvPosition = modelViewMatrix * mvPosition;
        // ******* this code block is necessary for compatibility with
        // reflectable-material ********

        gl_Position = projectionMatrix * mvPosition;
        vFragPos = (modelMatrix * vec4(position, 1.0)).xyz;
        vUv = uv;
      }
    `,fragmentShader:`
      varying vec3 vFragPos;
      varying vec2 vUv;
   
      uniform sampler2D map;
      uniform float uTime;
      uniform float uSphereActiveTimer;

      vec2 GetGradient(vec2 intPos, float t) {
        float rand = fract(sin(dot(intPos, vec2(12.9898, 78.233))) * 43758.5453);
        float angle = 6.283185 * rand + 4.0 * t * rand;
        return vec2(cos(angle), sin(angle));
      }
    
      float Pseudo3dNoise(vec3 pos) {
        vec2 i = floor(pos.xy);
        vec2 f = pos.xy - i;
        vec2 blend = f * f * (3.0 - 2.0 * f);
        float noiseVal = 
            mix(
                mix(
                    dot(GetGradient(i + vec2(0, 0), pos.z), f - vec2(0, 0)),
                    dot(GetGradient(i + vec2(1, 0), pos.z), f - vec2(1, 0)),
                    blend.x),
                mix(
                    dot(GetGradient(i + vec2(0, 1), pos.z), f - vec2(0, 1)),
                    dot(GetGradient(i + vec2(1, 1), pos.z), f - vec2(1, 1)),
                    blend.x),
            blend.y
        );
        return noiseVal / 0.7;
      }

      void main() {
        gl_FragColor = linearToOutputTexel( gl_FragColor );

        float noiseVisibility = clamp(uSphereActiveTimer - 0.5, 0.0, 1.0);
        vec3 color = texture2D(map, vUv).xyz;
        vec2 nuv = vec2(vFragPos.x, vFragPos.z);
        float offset = uTime * 0.01;
        
        float noise = (vFragPos.x + 99.0) * 10.0 + 
          (Pseudo3dNoise(vec3(nuv, offset * 6.0) * 0.5) * 0.5 + 0.5) * 30.0 + 
          (Pseudo3dNoise(vec3(nuv, offset * 0.5) * 4.0) * 0.5 + 0.5) * 6.0 +
          (Pseudo3dNoise(vec3(nuv, offset * 0.5) * 20.0) * 0.5 + 0.5) * 1.1 +  
          (Pseudo3dNoise(vec3(nuv, offset * 0.5) * 40.0) * 0.5 + 0.5) * 0.5;
        
        float modnoise = mod(noise, 3.0);
        float opwindow = 0.09;
        float linewidth = 0.3;

        if(modnoise > linewidth) {
          noise = 0.0;
        } else if (modnoise > linewidth - opwindow) {
          noise = 1.0 - (modnoise - (linewidth-opwindow)) / opwindow;
        } else if (modnoise < opwindow) {
          noise = modnoise / opwindow;
        } else {
          noise = 1.0;
        }
        noise *= 1.65 * noiseVisibility;

        // Enhanced ice animation
        float timeMult = 1.0;
        float animT = mod(uTime * timeMult, 30.0);

        // Ice color palette
        vec3 deepBlue = vec3(0.05, 0.15, 0.35);
        vec3 iceBlue = vec3(0.4, 0.7, 0.95);
        vec3 brightIce = vec3(0.7, 0.9, 1.0);
        vec3 glowCyan = vec3(0.2, 0.8, 1.0);
        vec3 crystalWhite = vec3(0.95, 0.98, 1.0);

        // PHASE 1: Initial Freeze (0-4s)
        if(animT > 2.0 && animT < 4.0) {
          float t = (animT - 2.0) / 2.0;
          
          // Spreading frost from center
          float dist = length(vec3(vFragPos.x, 0.0, vFragPos.z) - vec3(0.71, 0.0, -0.05));
          float frostSpread = smoothstep(t * 8.0 + 0.5, t * 8.0, dist);
          
          float frostNoise = Pseudo3dNoise(vec3(nuv * 12.0, uTime * 0.3)) * 0.5 + 0.5;
          frostNoise = pow(frostNoise, 2.0);
          
          vec3 frostColor = mix(iceBlue, brightIce, frostNoise * 0.6);
          color = mix(color, frostColor, frostSpread * noiseVisibility * 0.7);
          
          noise *= frostSpread * 1.5;
        }
        
        // PHASE 2: Shockwave Impact (4-5.5s)
        else if(animT > 4.0 && animT < 5.5) {
          float t = (animT - 4.0) / 1.5;
          
          float targetDist = (t - 0.1) * 10.0;
          float dist = length(vec3(vFragPos.x, 0.0, vFragPos.z) - vec3(0.71, 0.0, -0.05));
          
          dist += Pseudo3dNoise(vec3(nuv * 3.0, uTime * 0.2)) * 0.5;
          dist = abs(dist - targetDist);
          dist = 1.0 - clamp(dist, 0.0, 1.2) / 1.2;
          
          // Intense shockwave glow
          vec3 shockwave = mix(glowCyan, crystalWhite, dist * 0.5);
          color = mix(color, shockwave, dist * noiseVisibility * 0.9);
          
          noise *= dist * 2.5;
        }
        
        // PHASE 3: Crack Formation (5.5-7.5s)
        else if(animT > 5.5 && animT < 7.5) {
          float t = (animT - 5.5) / 2.0;
          
          // Expanding crack pattern
          float crackScale = 8.0 + t * 15.0;
          vec2 crackPos = nuv * crackScale;
          float crackBase = Pseudo3dNoise(vec3(crackPos, uTime * 0.1));
          
          // Sharp crack lines
          float crack1 = abs(sin(vFragPos.x * 25.0 + crackBase * 5.0));
          float crack2 = abs(sin(vFragPos.z * 20.0 + crackBase * 4.0));
          float cracks = crack1 * crack2;
          cracks = smoothstep(0.85, 0.95, cracks);
          
          // Pulse effect through cracks
          float pulse = sin(uTime * 3.0 + crackBase * 10.0) * 0.5 + 0.5;
          
          vec3 crackColor = mix(deepBlue, glowCyan, pulse * 0.8);
          crackColor = mix(crackColor, brightIce, cracks * 0.3);
          
          color = mix(color, crackColor, t * noiseVisibility * 0.85);
          noise *= (1.0 + cracks * t * 2.0);
        }
        
        // PHASE 4: Shattering (7.5-9.5s)
        else if(animT > 7.5 && animT < 9.5) {
          float t = (animT - 7.5) / 2.0;
          
          // Chaotic shattering effect
          float shatter = Pseudo3dNoise(vec3(nuv * 18.0, uTime * 0.5)) * 0.5 + 0.5;
          shatter += Pseudo3dNoise(vec3(nuv * 35.0, uTime * 0.8)) * 0.3;
          shatter = pow(shatter, 1.5);
          
          // Fragment separation
          float separation = Pseudo3dNoise(vec3(nuv * 8.0, uTime * 0.3));
          float fragments = step(0.3 - t * 0.25, separation);
          
          // Bright edges on fragments
          float edgeDetect = abs(separation);
          edgeDetect = smoothstep(0.28, 0.32, edgeDetect);
          
          vec3 shatterColor = mix(iceBlue, deepBlue, fragments * 0.5);
          shatterColor = mix(shatterColor, crystalWhite, edgeDetect * shatter);
          shatterColor += glowCyan * edgeDetect * (1.0 - t) * 0.6;
          
          color = mix(color, shatterColor, noiseVisibility * 0.9);
          noise *= (1.5 + edgeDetect * 2.0) * (1.0 - t * 0.3);
        }
        
        // PHASE 5: Crystal Reformation (9.5-13s)
        else if(animT > 9.5 && animT < 13.0) {
          float t = (animT - 9.5) / 3.5;
          
          // Growing crystal pattern
          float crystalBase = Pseudo3dNoise(vec3(nuv * 15.0, uTime * 0.2));
          float crystalDetail = Pseudo3dNoise(vec3(nuv * 40.0, uTime * 0.15));
          
          float hexPattern = abs(sin(vFragPos.x * 18.0 + crystalBase * 3.0)) * 
                            abs(cos(vFragPos.z * 16.0 + crystalBase * 3.0));
          hexPattern = pow(hexPattern, 0.5);
          
          float crystals = smoothstep(0.5 - t * 0.3, 0.7, hexPattern);
          crystals *= smoothstep(0.4, 0.6, crystalDetail);
          
          // Sparkling effect
          float sparkle = sin(uTime * 5.0 + crystalBase * 20.0) * 0.5 + 0.5;
          sparkle *= step(0.95, crystalDetail);
          
          vec3 crystalColor = mix(iceBlue, brightIce, crystals * 0.8);
          crystalColor = mix(crystalColor, crystalWhite, sparkle * t * 0.5);
          crystalColor += glowCyan * crystals * 0.2;
          
          color = mix(color, crystalColor, t * noiseVisibility * 0.75);
          noise *= (1.0 + crystals * 1.5);
        }
        
        // PHASE 6: Melt Wave (13-16s)
        else if(animT > 13.0 && animT < 16.0) {
          float t = (animT - 13.0) / 3.0;
          
          // Melting from edges
          float dist = length(vec3(vFragPos.x, 0.0, vFragPos.z) - vec3(0.71, 0.0, -0.05));
          float melt = smoothstep(3.0, 8.0 - t * 6.0, dist);
          
          float flow = Pseudo3dNoise(vec3(nuv * 8.0, uTime * 0.4)) * 0.5 + 0.5;
          flow = pow(flow, 2.0);
          
          vec3 meltColor = mix(deepBlue, iceBlue, flow);
          meltColor = mix(meltColor, color, melt);
          
          color = mix(color, meltColor, (1.0 - t) * noiseVisibility * 0.7);
          noise *= (1.0 - t * 0.7);
        }
        
        // PHASE 7: Refreeze Burst (16-20s)
        else if(animT > 16.0 && animT < 20.0) {
          float t = (animT - 16.0) / 4.0;
          
          // Rapid refreeze with fractal pattern
          float fractal = Pseudo3dNoise(vec3(nuv * 5.0, uTime * 0.3)) * 0.5 + 0.5;
          fractal += Pseudo3dNoise(vec3(nuv * 12.0, uTime * 0.25)) * 0.25;
          fractal += Pseudo3dNoise(vec3(nuv * 28.0, uTime * 0.2)) * 0.125;
          fractal = pow(fractal, 1.8);
          
          // Freeze propagation
          float dist = length(vec3(vFragPos.x, 0.0, vFragPos.z) - vec3(0.71, 0.0, -0.05));
          float freezeWave = smoothstep(t * 12.0 + 1.0, t * 12.0 - 0.5, dist);
          
          vec3 refreezeColor = mix(iceBlue, brightIce, fractal * 0.7);
          refreezeColor += glowCyan * freezeWave * (1.0 - t) * 0.5;
          
          color = mix(color, refreezeColor, freezeWave * t * noiseVisibility * 0.8);
          noise *= (1.0 + freezeWave * t * 2.0);
        }
        
        // PHASE 8: Final Dissipation (20-25s)
        else if(animT > 20.0 && animT < 25.0) {
          float t = (animT - 20.0) / 5.0;
          
          // Fading particle effect
          float particles = Pseudo3dNoise(vec3(nuv * 25.0, uTime * 0.5));
          particles = smoothstep(0.3, 0.7, particles) * (1.0 - t);
          
          vec3 fadeColor = mix(iceBlue, brightIce, particles * 0.5);
          color = mix(color, fadeColor, particles * (1.0 - t) * noiseVisibility * 0.5);
          
          noise *= (1.0 - t * 0.8);
        }
        
        // PHASE 9: Ambient Shimmer (25-30s - rest period)
        else {
          float shimmer = sin(vFragPos.x * 5.0 + uTime * 0.8) * 
                         cos(vFragPos.z * 4.0 + uTime * 0.6) * 0.1 + 0.95;
          shimmer *= Pseudo3dNoise(vec3(nuv * 3.0, uTime * 0.1)) * 0.5 + 0.5;
          
          color = mix(color, color * vec3(0.92, 0.96, 1.0), noiseVisibility * 0.15 * shimmer);
        }

        // Global ice atmosphere
        if(noiseVisibility > 0.0) {
          float atmosphereNoise = Pseudo3dNoise(vec3(nuv * 2.0, uTime * 0.15)) * 0.5 + 0.5;
          vec3 atmosphere = mix(vec3(0.88, 0.92, 1.0), vec3(0.75, 0.85, 0.98), atmosphereNoise);
          color = mix(color, color * atmosphere, noiseVisibility * 0.25);
          
          // Edge highlight
          float edgeGlow = pow(atmosphereNoise, 2.5);
          color += glowCyan * edgeGlow * noiseVisibility * 0.08;
        }

        gl_FragColor = vec4(color, 1.0);
      }
    `});function Ao(a){return a.userData.uReflect={value:!1},a.userData.uReflectPositionPass={value:!1},a.reflectable=!0,a.onBeforeCompile=e=>{let t=[`uniform bool uReflect;
`,`uniform bool uReflectPositionPass;
`,`varying vec3 vReflectedPos;
`].join(`
`),r="",s="+ 0.66",l="- 0.20";e.uniforms.uReflect=a.userData.uReflect,e.uniforms.uReflectPositionPass=a.userData.uReflectPositionPass,e.vertexShader=T0(e.vertexShader),e.vertexShader=e.vertexShader.replace("mvPosition = modelViewMatrix * mvPosition;",`
        mvPosition = modelMatrix * mvPosition;
        if(uReflect) {
          mvPosition.y = -(mvPosition.y ${s});
        }
        vReflectedPos = mvPosition.xyz;
        mvPosition = viewMatrix * mvPosition;
      `),e.vertexShader=r+t+e.vertexShader,e.fragmentShader=T0(e.fragmentShader),e.fragmentShader=e.fragmentShader.replace("gl_FragColor = linearToOutputTexel( gl_FragColor );",`
      gl_FragColor = linearToOutputTexel( gl_FragColor );
      if(uReflect && vReflectedPos.y > ${l}) {
        discard;
      }

      if(uReflectPositionPass) {
        gl_FragColor = vec4(vReflectedPos, 1.0);
        return;
      }
      `),e.fragmentShader=r+t+e.fragmentShader},a}function U4(){return new Ut({vertexShader:`
      varying vec3 vFragPos;
      varying vec3 vNormal;
      varying mat4 vProjViewMatrix;
      varying mat4 vViewMatrix;

      void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); 
      
        vFragPos = (modelMatrix * vec4(position, 1.0)).xyz;
        vNormal = mat3(transpose(inverse(modelMatrix))) * normal;
        vProjViewMatrix = projectionMatrix * viewMatrix;
        vViewMatrix = viewMatrix;
      }
    `,fragmentShader:`
    varying vec3 vFragPos;
    varying vec3 vNormal;
    varying mat4 vProjViewMatrix;
    varying mat4 vViewMatrix;

    uniform sampler2D uMountainsDepth;
    uniform sampler2D uWaterDepth;
    uniform sampler2D uColor;
    uniform sampler2D uBlurredReflectionDistance;
    uniform sampler2D uFluidTexture;

    uniform vec2 uScreenSize;
    uniform vec2 uPixelSize;
    uniform vec3 uCameraPos;

    void main() {
      vec3 norm = normalize(vNormal);

      vec2 uv = gl_FragCoord.xy / uScreenSize.xy;
      
      
      // fluid sim - these calculations need to match inside fluidsim.js as well
      // get plane position
      vec3 sphereCenter = vec3(0.71, -0.13, -0.05);
      vec2 distVec = (vFragPos - sphereCenter).xz * 0.75;
      vec2 fluidUv = clamp(distVec, -1.0, 1.0) * 0.5 + 0.5;
      
      vec3 fluidOffset = vec3(0.0);
      vec3 fluidColor  = vec3(0.06, 0.12, 0.2);
      float fluidAlpha = 0.0;
      vec3 f0 = texture2D(uFluidTexture, fluidUv).xyz;
      vec3 fdx = texture2D(uFluidTexture, fluidUv + vec2(uPixelSize.x, 0.0)).xyz;
      vec3 fdy = texture2D(uFluidTexture, fluidUv + vec2(0.0, uPixelSize.y)).xyz;
      fluidOffset.x = f0.x - fdx.x;
      fluidOffset.y = f0.y - fdy.x;
      fluidAlpha = clamp(f0.x, 0.0, 1.0);

      if(distVec.x < -1.0 || distVec.x > 1.0 || distVec.y < -1.0 || distVec.y > 1.0) {
        fluidOffset = vec3(0.0);
        fluidColor  = vec3(0.0);
        fluidAlpha  = 0.0;
      }
      
      uv += fluidOffset.xy * 0.055;
      
      float mountainsDepth = texture2D(uMountainsDepth, uv).x;
      float waterDepth = texture2D(uWaterDepth, uv).x;

     float diff = max(-(waterDepth - mountainsDepth), 0.0) * 13.0;
      diff = min(diff, 2.5);
     vec3 color = vec3(0.02, 0.06, 0.12);
      float alpha = 1.0 - exp(-diff);

      vec3 reflectionColor = texture2D(uColor, uv).xyz;
      reflectionColor *= 1.0;
      reflectionColor *= vec3(0.7, 0.85, 1.0);


      vec3 colorPlusReflections = color + reflectionColor;
      // vec3 colorWithFluid = mix(colorPlusReflections, fluidColor, fluidAlpha);
      // vec3 colorWithFluid = pow(colorPlusReflections, vec3(1.0 + fluidAlpha * 3.0));
      
      // vec3 colorWithFluid = colorPlusReflections * (1.0 + fluidAlpha * 2.0);
      // colorWithFluid = mix(colorWithFluid, fluidColor, fluidAlpha * 0.9);

      vec3 colorWithFluid = colorPlusReflections * (1.0 + fluidAlpha * 2.0);
      if(fluidAlpha > 0.75) {
        colorWithFluid = mix(colorWithFluid, fluidColor, (fluidAlpha - 0.75) * 3.5);
      }

      // vec3 colorWithFluid = colorPlusReflections + (colorPlusReflections - vec3(0.15)) * (fluidAlpha * 2.0);
      // if(fluidAlpha > 0.75) {
      //   colorWithFluid = mix(colorWithFluid, fluidColor, (fluidAlpha - 0.75) * 2.75);
      // }



      gl_FragColor = vec4(colorWithFluid, alpha);

      // gl_FragColor = texture2D(uPosition, uv, 5.0);
      // gl_FragColor = vec4(norm, 1.0);
      // gl_FragColor = vec4(vFragPos, 1.0);
      // gl_FragColor = vec4(waterDepth < mountainsDepth ? 1.0 : 0.0, 0.0, 0.0, 1.0);
      // gl_FragColor = vec4(vec3(mountainsDepth) * 0.1  , 1.0);
      // gl_FragColor = vec4(vec3(diff), 1.0);
    }
    `,uniforms:{uWaterLevel:{value:-.2},uMountainsDepth:{type:"t",value:null},uWaterDepth:{type:"t",value:null},uColor:{type:"t",value:null},uScreenSize:{value:new Be(window.innerWidth,window.innerHeight)},uPixelSize:{value:new Be(1/window.innerWidth,1/window.innerHeight)},uCameraPos:{value:new V(0,0,0)},uBlurredReflectionDistance:{type:"t",value:null},uFluidTexture:{type:"t",value:null}},side:Pn,transparent:!0})}console.log("Available exports:",Object.keys(lD));let Mi=window.innerWidth,Ti=window.innerHeight,Jt,Yt,rn=new bi,hi=new fn(40,Mi/Ti,.1,1e3),Dx,Bf=new pn(Mi,Ti,{});Bf.texture.encoding=un;let Ff,L4=new Ut({vertexShader:`
    varying vec2 vUv;

    void main() {
      gl_Position = vec4(position.xy, 0.0, 1.0); 
      vUv = uv;
    }
  `,fragmentShader:`
  varying vec2 vUv;
  
  uniform sampler2D uSceneTex;
  uniform sampler2D uFluidVelocityTex;
  uniform sampler2D uFluidDyeTex;

  ${sM}
  ${oM}
  ${lM}
  ${cM}
  ${uM}
  
  void main() {

    vec4 fluidVel = -texture2D(uFluidVelocityTex, vUv);
    vec4 fluidDye = texture2D(uFluidDyeTex, vUv);


    float velStrength = 0.00002;
    velStrength = 0.0;
    float dyeStrength = 0.01;

    
    vec2 uvOffset1 = fluidVel.xy * velStrength;
    vec2 uvOffset2 = fluidDye.xy * dyeStrength;
    vec2 uvOffset = uvOffset1 + uvOffset2;

    vec4 accum = vec4(0.0);
    vec3 soAccum = vec3(0.0);

    int steps = 20;
    float fsteps = float(steps);
    float invSteps = 1.0 / float(steps);

    for(int i = 0; i < steps; i++) {
      vec2 transformedUv = vUv + uvOffset * ((float(i) * invSteps) * fsteps * 0.85 + fsteps * 0.15);
      uvOffset *= (1.0 + srand(transformedUv + float(i) * 0.1987) * 0.05);
      vec4 color = texture2D(uSceneTex, transformedUv);

      vec3 so = spectrum_offset(float(i) * invSteps);
      soAccum += so;

      accum += color * vec4(so, 1.0);
    }

    accum.rgb /= soAccum;
    accum.a = 1.0;


    gl_FragColor = accum;
    // gl_FragColor = fluidVel;


    // vec4 fluidVel2 = texture2D(uFluidVelocityTex, vUv);
    // gl_FragColor = fluidVel2;
  }
  `,uniforms:{uSceneTex:{type:"t",value:null},uFluidVelocityTex:{type:"t",value:null},uFluidDyeTex:{type:"t",value:null}},depthTest:!1,depthWrite:!1}),N4=new Vt(new Ki(2,2),L4);new fn(45,1,1,1e3);let P4=new bi;P4.add(N4);let dm=new bi,O4=[],Kn,Hf,E0=new bi,Ux=new pn(Mi,Ti,{type:hn}),Dc=new bi,Lx=new pn(Mi,Ti,{type:hn}),fc,Nx=new bi,fM,A0=new pn(Mi,Ti,{});A0.texture.encoding=un;let Px=new pn(Mi,Ti,{depthBuffer:!1,stencilBuffer:!1}),th=new pn(Mi,Ti,{minFilter:br,magFilter:ai});th.texture.encoding=un;th.texture.generateMipmaps=!0;let Ox=new pn(Mi,Ti,{type:hn,minFilter:Zt,magFilter:Zt}),Ix=new pn(Mi,Ti,{type:hn,minFilter:Zt,magFilter:Zt}),pm=new pn(Mi,Ti,{type:hn,minFilter:Zt,magFilter:Zt}),_c=new pn(Mi,Ti,{type:hn,minFilter:Zt,magFilter:Zt}),mm=new pn(Mi,Ti,{type:hn,minFilter:Zt,magFilter:Zt}),hc,hM,dM,pM,dc,mM;console.log("TODO: resize rts on window resize");console.log("TODO: resize water material on window resize");console.log("TODO: resize gbuffers");let Ba=new t4(hi,Dc),gM=new V(8,1.05,-3.8),zx=new V(1.5,1.25,-2),Sf=0,nh;async function I4(a){Jt=new B5({canvas:a,antialias:!0}),Jt.setSize(Mi,Ti),Jt.toneMapping=gS,Jt.outputEncoding=un,lt.tonemapping_pars_fragment=lt.tonemapping_pars_fragment.replace("vec3 CustomToneMapping( vec3 color ) { return color; }",`
    vec3 CustomToneMapping( vec3 color ) {
      const mat3 ACESInputMat = mat3(
        vec3( 0.59719, 0.07600, 0.02840 ), vec3( 0.35458, 0.90834, 0.13383 ), vec3( 0.04823, 0.01566, 0.83777 )
        );
        const mat3 ACESOutputMat = mat3(
        vec3(  1.60475, -0.10208, -0.00327 ), vec3( -0.53108, 1.10813, -0.07276 ), vec3( -0.07367, -0.00605, 1.07602 )
        );
        color *= toneMappingExposure / 0.6;
        color = ACESInputMat * color;
        color = RRTAndODTFit( color );
        color = ACESOutputMat * color;
        return saturate( color );
    }`),Yt=new H5(hi,a),Yt.target.set(.38096045206150597,-.6850691022701711,.2873385380788971),Yt.enableDamping=!0,Yt.dampingFactor=.05,Yt.rotateSpeed=.5,Yt.enableZoom=!0,Yt.enablePan=!0,Yt.enableRotate=!0,Yt.maxPolarAngle=Math.PI*.4,Yt.minDistance=3,Yt.maxDistance=5.5,Yt.zoomSpeed=1,hi.position.copy(gM),nh=document.querySelector(".curtain");let e=nh.querySelector("p"),t=!1;document.querySelector(".free-camera-btn").addEventListener("click",()=>{t=!t,t?(Yt.enableZoom=!0,Yt.enablePan=!0,Yt.enableRotate=!0,Yt.maxPolarAngle=Math.PI,document.querySelector(".free-camera-btn p").innerHTML="Free camera<br>ON",Yt.minDistance=3,Yt.maxDistance=5.5,Yt.zoomSpeed=1):(Yt.enableZoom=!0,Yt.enablePan=!0,Yt.enableRotate=!0,Yt.maxPolarAngle=Math.PI*.4,document.querySelector(".free-camera-btn p").innerHTML="Free camera<br>OFF",Yt.minDistance=3,Yt.maxDistance=5.5,Yt.zoomSpeed=1)}),Dx=new iM(Jt),fc=new KD(Jt,null,hi),hc=new QD(Jt,null,hi),hM=new $D(Jt),dM=new e4(Jt,window.innerWidth,window.innerHeight),pM=new JD(Jt),mM=new D4(Jt,_c),e.textContent="loading assets 01 / 7";let s=(await new ac().loadAsync(kD)).scene.children[0].children[0].children[0].children;e.textContent="loading assets 02 / 7";let l=(await new ac().loadAsync(XD)).scene;l=l.children[0],e.textContent="loading assets 03 / 7";let u=(await new ac().loadAsync(WD)).scene;e.textContent="loading assets 04 / 7",Kn=(await new ac().loadAsync(YD)).scene.children[0],e.textContent="loading assets 05 / 7";let f=await new h0().loadAsync(jD);f.flipY=!1,f.encoding=un,e.textContent="loading assets 06 / 7";let p=await new h0().loadAsync(ZD);p.encoding=un,p.flipY=!1,l.material=Ao(new ji({color:"white",side:Pn,map:p,toneMapped:!1})),l.name="isle-group",rn.add(l.clone()),E0.add(l.clone());for(let M=0;M<s.length;M++){let b=s[M];b.traverse(S=>{S instanceof Vt&&(S.material=Ao(new ji({color:"white",side:Pn,map:f,toneMapped:!1})),S.name="mountain-group",S.scale.set(9.426517486572266,9.426517486572266,9.426517486572266),S.translateX(.00046069626114331186*9.426517486572266),S.translateY(-.096357062458992*9.426517486572266),S.translateZ(.09635782241821289*9.426517486572266),S.rotateX(-1.5707958795918522),S.rotateY(-.00478110738920276),S.rotateZ(9598708991624814e-20),S.updateMatrix(),S.geometry.applyMatrix4(S.matrix),S.position.set(0,0,0),S.rotation.set(0,0,0),S.scale.set(1,1,1),S.updateMatrix())}),rn.add(b.clone()),E0.add(b.clone())}let h=[];u.children.forEach((M,b)=>{M.traverse(S=>{S instanceof Vt&&(S.material=Ao(new dh({emissive:new st("#3DB5FF"),emissiveIntensity:b===0?20:10,side:Pn,toneMapped:!1})),S.updateMatrix(),S.geometry.applyMatrix4(S.matrix),S.position.set(0,0,0),S.rotation.set(0,0,0),S.scale.set(1,1,1),S.updateMatrix(),h.push(S.geometry.clone()))}),rn.add(M.clone())});let m=eM?.(h)??void 0,v=new Vt(m,new ji({color:16777215}));Nx.add(v),dc=new n4(Jt,window.innerWidth,window.innerHeight,Nx,hi,_c,Dx),Kn.material=U4(),Kn.material.uniforms.uScreenSize.value=new Be(Mi,Ti),Kn.scale.set(100,1,100),Kn.position.set(0,-.2,0),console.log(Kn),Dc.add(Kn.clone());const _=new p0(Jt);rn.position.set(-.699878,.134614,.036077);let y=_.fromScene(rn);rn.position.set(0,0,0),rn.traverse(M=>{M.name=="mountain-group"&&(M.material=Ao(Cx(f))),M.name=="isle-group"&&(M.material=Ao(Cx(p)))}),u.children.forEach((M,b)=>{M.traverse(S=>{S instanceof Vt&&(S.material.emissiveIntensity=b===0?5:3)})}),e.textContent="loading assets 7 / 7",Hf=(await new ac().loadAsync(qD)).scene,Hf.traverse(M=>{M.isMesh&&M.material&&(M.material=Ao(M.material),M.material.isMeshStandardMaterial&&(M.material.envMap=y.texture,M.material.envMapIntensity=1,M.material.needsUpdate=!0))}),rn.add(Hf),e.classList.add("hidden"),i4(Jt,a,{SIM_RESOLUTION:256,DYE_RESOLUTION:512,CAPTURE_RESOLUTION:256,DENSITY_DISSIPATION:.7,VELOCITY_DISSIPATION:1.8,PRESSURE:1,PRESSURE_ITERATIONS:20,CURL:14,SPLAT_RADIUS:.15,SPLAT_FORCE:6e3,SHADING:!1,COLORFUL:!0,COLOR_UPDATE_SPEED:10,PAUSED:!1,BACK_COLOR:{r:0,g:0,b:0},TRANSPARENT:!1}),Ff=new J0,f4(hi,Dc),fM=C4(a,hi,M=>{M&&(fi.sphereActive=!fi.sphereActive,fi.sphereClickTimer=0)}),Jt.setAnimationLoop(z4)}function Mf(a){a.traverse(e=>{e instanceof Vt&&e.material.reflectable&&(e.material.userData.uReflect.value=!e.material.userData.uReflect.value)})}function Bx(a,e){a.traverse(t=>{t instanceof Vt&&t.material.reflectable&&(t.material.userData.uReflectPositionPass.value=e)})}let fi={sphereActive:!1,sphereActiveTimer:0,sphereClickTimer:999};function z4(a){a*=.001;let e=Ff.getDelta(),t=Ff.getElapsedTime();Sf+=e*.35,Sf<1?(hi.position.copy(gM.clone().lerp(zx,Mx(Sf,0,1))),nh.style.opacity=Math.max(Mx(1-Sf*1.3,0,1),0)):b0("camera anim finish")&&(hi.position.copy(zx),nh.remove(),Yt.enableRotate=!0),Yt.update(),fM.update(e),fi.sphereActive&&fi.sphereActiveTimer<2&&(fi.sphereActiveTimer+=e),!fi.sphereActive&&fi.sphereActiveTimer>0&&(fi.sphereActiveTimer-=e,fi.sphereActiveTimer<0&&(fi.sphereActiveTimer=0)),fi.sphereClickTimer+=e,rn.traverse(l=>{l.name=="mountain-group"&&(l.material.uniforms.uTime.value=t,l.material.uniforms.uSphereActiveTimer.value=fi.sphereActiveTimer),l.name=="isle-group"&&(l.material.uniforms.uTime.value=t,l.material.uniforms.uSphereActiveTimer.value=fi.sphereActiveTimer)});let r=t*.5%15,s=0;if(r>4&&r<6){let l=(r-4)/2;s=l,dc.setWindLevel(l*e,l),Ba.setWindLevel(l*e)}else if(r>=6&&r<=7)s=1,dc.setWindLevel(1*e,1),Ba.setWindLevel(1*e);else if(r>7&&r<9){let l=1-(r-7)/2;s=l,dc.setWindLevel(l*e,l),Ba.setWindLevel(l*e)}O4.forEach((l,u)=>{l.transSpeed||(l.transSpeed=Math.random()*2+.5),l.transAmt||(l.transAmt=Math.random()*4e-4+2e-4),l.rot||(l.rot=new V(.003,.003,0)),l.position.copy(new V().copy(l.position).add(new V(0,Math.sin(a*l.transSpeed)*l.transAmt,0))),l.rotation.x+=Math.sin(a)*l.rot.x,l.rotation.y+=Math.sin(a)*l.rot.y}),Ba.update(),rn.add(Ba.mesh),Jt.setRenderTarget(Bf),Jt.render(rn,hi),rn.remove(Ba.mesh),hc.scene=rn,rn.add(Kn),rn.add(Ba.mesh),hc.blitPosition(_c),rn.remove(Ba.mesh),rn.remove(Kn),dm.add(Kn),hc.scene=dm,hc.blitPosition(mm),dm.remove(Kn),Hf.traverse(l=>{l.isMesh&&l.material&&(l.material.envMapIntensity=.35)}),Mf(rn),Jt.setRenderTarget(A0),Jt.render(rn,hi),Jt.setRenderTarget(null),Mf(rn),pM.blitReflectedColor(A0.texture,mm.texture,_c.texture,th),Mf(rn),Bx(rn,!0),Jt.setRenderTarget(Ox),Jt.render(rn,hi),Jt.setRenderTarget(null),Bx(rn,!1),Mf(rn),hM.blitReflectionDistance(Ox.texture,mm.texture,_c.texture,Ix),dM.blur(Ix.texture,th.texture,pm),s4(),fc.scene=E0,fc.blitDepth(Ux),fc.scene=Dc,fc.blitDepth(Lx),Kn.material.uniforms.uMountainsDepth.value=Ux.texture,Kn.material.uniforms.uWaterDepth.value=Lx.texture,Kn.material.uniforms.uColor.value=pm.texture,Kn.material.uniforms.uCameraPos.value=hi.position.clone(),Kn.material.uniforms.uBlurredReflectionDistance.value=pm.texture,Kn.material.uniforms.uFluidTexture.value=S0.dye.write.texture,Jt.autoClear=!1,Jt.setRenderTarget(Bf),Jt.render(Dc,hi),Jt.autoClear=!0,dc.compute(Bf.texture,Px),mM.compute({windLevel:s,time:t,sphereActiveTimer:fi.sphereActiveTimer},Px.texture,null),b0("clock start")&&Ff.start()}var vM={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Fx=Qn.createContext&&Qn.createContext(vM),B4=["attr","size","title"];function F4(a,e){if(a==null)return{};var t=H4(a,e),r,s;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(s=0;s<l.length;s++)r=l[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(a,r)&&(t[r]=a[r])}return t}function H4(a,e){if(a==null)return{};var t={};for(var r in a)if(Object.prototype.hasOwnProperty.call(a,r)){if(e.indexOf(r)>=0)continue;t[r]=a[r]}return t}function ih(){return ih=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(a[r]=t[r])}return a},ih.apply(this,arguments)}function Hx(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(a,s).enumerable})),t.push.apply(t,r)}return t}function rh(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Hx(Object(t),!0).forEach(function(r){V4(a,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):Hx(Object(t)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(t,r))})}return a}function V4(a,e,t){return e=G4(e),e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function G4(a){var e=k4(a,"string");return typeof e=="symbol"?e:e+""}function k4(a,e){if(typeof a!="object"||!a)return a;var t=a[Symbol.toPrimitive];if(t!==void 0){var r=t.call(a,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}function _M(a){return a&&a.map((e,t)=>Qn.createElement(e.tag,rh({key:t},e.attr),_M(e.child)))}function yM(a){return e=>Qn.createElement(X4,ih({attr:rh({},a.attr)},e),_M(a.child))}function X4(a){var e=t=>{var{attr:r,size:s,title:l}=a,u=F4(a,B4),f=s||t.size||"1em",p;return t.className&&(p=t.className),a.className&&(p=(p?p+" ":"")+a.className),Qn.createElement("svg",ih({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,u,{className:p,style:rh(rh({color:a.color||t.color},t.style),a.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),l&&Qn.createElement("title",null,l),a.children)};return Fx!==void 0?Qn.createElement(Fx.Consumer,null,t=>e(t)):e(vM)}function W4(a){return yM({attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M4 4.5V6.5H12V7.5H3C1.34315 7.5 0 8.84315 0 10.5V16.5C0 18.1569 1.34315 19.5 3 19.5H15C16.5731 19.5 17.8634 18.2892 17.9898 16.7487L24 17.5V9.5L17.9898 10.2513C17.8634 8.71078 16.5731 7.5 15 7.5H14V5.5C14 4.94772 13.5523 4.5 13 4.5H4ZM18 12.2656V14.7344L22 15.2344V11.7656L18 12.2656ZM16 10.5C16 9.94772 15.5523 9.5 15 9.5H3C2.44772 9.5 2 9.94772 2 10.5V16.5C2 17.0523 2.44772 17.5 3 17.5H15C15.5523 17.5 16 17.0523 16 16.5V10.5Z",fill:"currentColor"},child:[]}]})(a)}function Y4(a){return yM({attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M12 5C11.4477 5 11 5.44772 11 6V10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10V6C13 5.44772 12.5523 5 12 5Z",fill:"currentColor"},child:[]},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M4 8C4 3.58172 7.58172 0 12 0C16.4183 0 20 3.58172 20 8V16C20 20.4183 16.4183 24 12 24C7.58172 24 4 20.4183 4 16V8ZM18 8V16C18 19.3137 15.3137 22 12 22C8.68629 22 6 19.3137 6 16V8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8Z",fill:"currentColor"},child:[]}]})(a)}const q4=Ob`
  html, body, #root, .App {
    width:  100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
    cursor: none;
  }

  /* Modern Gradient Cursor Design */
  .central-cursor {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    
    position: absolute;
    top: 0; 
    left: 0;
    
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%);
    box-shadow: 
      0 0 10px rgba(255, 255, 255, 0.5),
      0 0 20px rgba(255, 255, 255, 0.3),
      inset 0 0 5px rgba(255, 255, 255, 0.8);
    
    pointer-events: none;
    z-index: 10001;
    
    transition: transform 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
                opacity 0.15s ease;

    &.active {
      transform: scale(0.5);
      background: radial-gradient(circle, rgba(100,200,255,1) 0%, rgba(100,200,255,0.9) 50%, rgba(100,200,255,0) 100%);
      box-shadow: 
        0 0 15px rgba(100, 200, 255, 0.8),
        0 0 25px rgba(100, 200, 255, 0.4);
    }
  }

  .outer-cursor {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    
    position: absolute;
    top: 0; 
    left: 0;
    
    border: 2px solid rgba(255, 255, 255, 0.6);
    background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 70%);
    
    pointer-events: none;
    z-index: 10000;
    
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 1.5px solid rgba(255, 255, 255, 0.2);
      opacity: 0;
      transition: all 0.3s ease;
    }

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
      opacity: 0;
      transition: all 0.4s ease;
    }

    &.hover {
      transform: scale(1.5);
      border-color: rgba(100, 200, 255, 0.8);
      background: radial-gradient(circle, rgba(100,200,255,0.1) 0%, rgba(100,200,255,0) 70%);
      box-shadow: 
        0 0 20px rgba(100, 200, 255, 0.3),
        inset 0 0 20px rgba(100, 200, 255, 0.1);

      &::before {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1.3);
        border-color: rgba(100, 200, 255, 0.4);
      }

      &::after {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1.6);
      }
    }

    &.active {
      transform: scale(0.9);
      border-color: rgba(100, 200, 255, 1);
      
      &::before {
        transform: translate(-50%, -50%) scale(1.8);
        opacity: 0;
      }
    }
  }

  /* Cursor Trail Effect */
  .cursor-trail {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
    pointer-events: none;
    z-index: 9999;
    animation: trailFade 0.5s ease-out forwards;
  }

  @keyframes trailFade {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }

  .mouse-icon {
    position: absolute;
    pointer-events: none;
    width: 1.5em;
    height: 1.5em;
    opacity: 0.5;
    transition: opacity .2s;
    animation: mouseanim 4s ease 0s infinite;
    z-index: 9998;

    &.hide {
      opacity: 0;
    }
  }

  /* Advanced Loader Design */
  .curtain {
    position: absolute;
    top: 0; 
    left: 0;
    width: 100%; 
    height: 100%;
    background: linear-gradient(135deg, rgb(20, 15, 35) 0%, rgb(45, 25, 50) 50%, rgb(25, 20, 40) 100%);
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 10000;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at 50% 50%, rgba(100, 200, 255, 0.1) 0%, transparent 70%);
      animation: pulse 3s ease-in-out infinite;
    }

    .loader-container {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;
    }

    .loader-rings {
      position: relative;
      width: 120px;
      height: 120px;
    }

    .loader-ring {
      position: absolute;
      width: 100%;
      height: 100%;
      border: 3px solid transparent;
      border-radius: 50%;
      animation: rotate 2s linear infinite;

      &:nth-child(1) {
        border-top-color: #64C8FF;
        border-right-color: #64C8FF;
        animation-duration: 1.5s;
      }

      &:nth-child(2) {
        border-bottom-color: #9D88FF;
        border-left-color: #9D88FF;
        animation-duration: 2s;
        animation-direction: reverse;
        width: 85%;
        height: 85%;
        top: 7.5%;
        left: 7.5%;
      }

      &:nth-child(3) {
        border-top-color: #FF88DC;
        border-right-color: #FF88DC;
        animation-duration: 2.5s;
        width: 70%;
        height: 70%;
        top: 15%;
        left: 15%;
      }
    }

    .loader-center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 20px;
      height: 20px;
      background: radial-gradient(circle, #64C8FF 0%, #9D88FF 50%, #FF88DC 100%);
      border-radius: 50%;
      box-shadow: 
        0 0 20px rgba(100, 200, 255, 0.8),
        0 0 40px rgba(157, 136, 255, 0.6),
        0 0 60px rgba(255, 136, 220, 0.4);
      animation: centerPulse 1.5s ease-in-out infinite;
    }

    p {
      position: relative;
      font-family: 'Courier New', monospace;
      color: #E0E0FF;
      text-transform: uppercase;
      letter-spacing: 3px;
      font-size: 13px;
      font-weight: 600;
      text-align: center;
      padding: 12px 24px;
      background: rgba(100, 200, 255, 0.05);
      border: 1px solid rgba(100, 200, 255, 0.3);
      border-radius: 8px;
      backdrop-filter: blur(10px);
      transition: opacity .35s;
      opacity: 1;
      min-width: 280px;
      box-shadow: 
        0 0 20px rgba(100, 200, 255, 0.2),
        inset 0 0 20px rgba(100, 200, 255, 0.05);

      &::before {
        content: "";
        position: absolute;
        bottom: -1px;
        left: 0;
        height: 2px;
        background: linear-gradient(90deg, 
          transparent 0%, 
          #64C8FF 20%, 
          #9D88FF 50%, 
          #FF88DC 80%, 
          transparent 100%);
        animation: progressBar 3s ease-in-out infinite;
      }

      &::after {
        content: "⚡";
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 16px;
        animation: flicker 1s ease-in-out infinite;
      }

      &.hidden {
        opacity: 0;
      }
    }

    .loading-particles {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      pointer-events: none;
    }

    .particle {
      position: absolute;
      width: 3px;
      height: 3px;
      background: rgba(100, 200, 255, 0.6);
      border-radius: 50%;
      animation: float 3s ease-in-out infinite;
      box-shadow: 0 0 10px rgba(100, 200, 255, 0.8);

      &:nth-child(1) { left: 10%; animation-delay: 0s; animation-duration: 3s; }
      &:nth-child(2) { left: 20%; animation-delay: 0.5s; animation-duration: 3.5s; }
      &:nth-child(3) { left: 30%; animation-delay: 1s; animation-duration: 4s; }
      &:nth-child(4) { left: 40%; animation-delay: 1.5s; animation-duration: 3.2s; }
      &:nth-child(5) { left: 50%; animation-delay: 2s; animation-duration: 3.8s; }
      &:nth-child(6) { left: 60%; animation-delay: 0.3s; animation-duration: 3.6s; }
      &:nth-child(7) { left: 70%; animation-delay: 0.8s; animation-duration: 3.4s; }
      &:nth-child(8) { left: 80%; animation-delay: 1.3s; animation-duration: 4.2s; }
      &:nth-child(9) { left: 90%; animation-delay: 1.8s; animation-duration: 3.7s; }
    }
  }

  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes centerPulse {
    0%, 100% { 
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    50% { 
      transform: translate(-50%, -50%) scale(1.3);
      opacity: 0.7;
    }
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.6; }
  }

  @keyframes progressBar {
    0% { width: 0%; }
    100% { width: 100%; }
  }

  @keyframes flicker {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }

  @keyframes float {
    0% {
      transform: translateY(100vh) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateY(-100px) scale(1);
      opacity: 0;
    }
  }

  .camera-icon {
    width: 25px; 
    height: 20px;
  }

  .free-camera-btn {
    display: none;
  }

  @keyframes mouseanim {
    0%, 80%, 90%, 100% {
      transform: translate(0, 0px);
    }
    85%, 95% {
      transform: translate(0, 5px);
    }
  }
`,j4=a=>Nn.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 3500 400",style:{width:"256px",height:"auto",display:"block"},preserveAspectRatio:"xMidYMid meet",...a,children:[Nn.jsx("path",{fill:"#ffffff",d:"m2175.875 272.875 2.7.006c13.147.08 26.289.626 39.425 1.119v13h-12l1.5 2.625c2.746 6.465 2.605 14.413.738 21.105-3.266 7.707-7.84 12.452-15.238 16.27-11.162 4.134-21.7 2.945-33 0-2.088 3.393-2.505 6.046-2 10 2.89 3.223 5.832 3.473 10 4 4.928.268 9.862.39 14.795.518 11.77.394 22.93 1.3 31.717 9.974 3.797 5.357 3.23 12.27 2.488 18.508-1.75 6.64-6.35 11.309-12 15-3.59 1.638-7.212 2.906-11 4l-1.779.53c-5.104 1.08-10.463.742-15.659.783l-3.662.087c-9.85.069-19.955-1.06-28.025-7.212-4.152-4.111-5.698-8.335-6.25-14.125.416-8.628 4.507-14.018 10.375-20.063l-1.887-.777c-2.889-1.672-3.619-3.854-4.636-6.946-1.677-8.011 1.6-14.616 5.765-21.257.991-2.006.991-2.006.113-4.02l-1.168-2c-4.028-7.039-4.085-14.19-2.187-22 2.413-7.273 7.46-12.972 14.25-16.5 5.509-2.459 10.643-2.657 16.625-2.625ZM2163 290c-3.628 4.875-3.818 10.134-3 16 1.33 4.174 3.594 6.67 7 9.438 5.021 2.505 10.55 2.312 16 1.562 4.842-2.334 8.713-5.783 10.75-10.875.696-5.914.565-10.043-2.75-15.125-4.33-4.285-7.54-6.175-13.625-6.375-6.028.058-9.967 1.21-14.375 5.375Zm-5 69c-2.044 3.626-3 6.024-3 10.188 1.294 3.64 2.738 4.782 6 6.812 9.098 3.85 22.74 3.702 32 .375 3.982-1.998 6.176-4.23 8-8.375.75-3.043.75-3.043 0-6-3.327-4.435-6.71-5.99-12-7-4.182-.491-8.357-.734-12.563-.938l-3.365-.244c-6.91-.335-10.458-.17-15.072 5.182ZM473 252c11.407 7.777 16.091 19.939 18.59 33.11 1.512 14.339 1.915 30.066-2.59 43.89l-.996 3.148c-3.39 9.313-8.99 16.965-17.754 21.852-10.925 4.745-22.29 4.906-33.563 1.25-9.305-4.071-15.031-12.061-18.687-21.25-7.143-19.996-6.894-45.609 1.355-65.223 4.687-9.335 11.11-15.511 20.645-19.777 10.036-2.92 24.102-2.669 33 3Zm-36.75 17c-6.361 9.8-7.432 22.075-7.313 33.438l.014 2.505c.012 2.02.03 4.038.049 6.057a370.047 370.047 0 0 0 18.063-12.625A3658.19 3658.19 0 0 0 473 279a472.32 472.32 0 0 0-1.356-4.324l-.763-2.433c-1.288-3.277-3.175-5.04-5.882-7.243l-2.563-2.313c-9.77-4.796-19.484-1.808-26.187 6.313Zm32.25 30.188c-5.45 4.277-10.998 8.394-16.625 12.437l-2.32 1.667a9786.274 9786.274 0 0 1-4.477 3.214c-4.374 3.144-8.725 6.32-13.078 9.494 2.317 7.338 5.382 12.33 11.625 16.938 5.975 1.88 11.993 2.328 17.941.101 7.518-4.401 11.474-11.931 13.747-20.164 2.552-14.027 2.552-14.027.687-27.875-3.255 0-4.995 2.198-7.5 4.188ZM804 249c49.94 0 49.94 0 59 9 6.33 8.172 6.793 15.806 6 26-1.82 7.422-5.174 13.655-11.766 17.695A205.695 205.695 0 0 1 849 306l3.098 2.262c4.987 4.287 7.472 9.73 10.34 15.55.558 1.106 1.116 2.212 1.692 3.35 1.643 3.27 3.26 6.551 4.87 9.838l1.37 2.778c1.16 2.36 2.306 4.726 3.442 7.097l1.004 2.085c1.343 2.874 2.184 4.827 2.184 8.04h-17c-3.685-7.301-7.36-14.59-10.805-22.008l-1.448-3.1a741.737 741.737 0 0 1-2.801-6.084C841.843 319.17 839.159 315.106 833 311l-13-1v47h-16V249Zm16 13v35c15.015.431 15.015.431 28-6 4.525-4.892 5.334-8.336 5.21-14.98-.492-4.716-2.74-7.812-6.21-10.832-3.82-2.786-6.288-3.314-10.887-3.286l-2.561.008-3.24.027L820 262ZM1592 249h22c7.22 21.532 14.348 43.093 21.422 64.673l1.914 5.833c1.214 3.698 2.426 7.397 3.637 11.096l1.097 3.342c.986 3.016 1.962 6.034 2.93 9.056l.916 2.85.836 2.675.733 2.333C1648 353 1648 353 1648 357h-16c-7-16.897-7-16.897-7-23h-45l-2 10a143.823 143.823 0 0 1-2.063 6.563l-1.035 3.066C1574 356 1574 356 1573 357c-2.697.073-5.367.092-8.063.063l-2.298-.014c-1.88-.012-3.76-.03-5.639-.049 2.098-8.082 4.578-15.988 7.246-23.898l1.874-5.596c.656-1.958 1.313-3.916 1.971-5.873 2.262-6.732 4.513-13.468 6.764-20.203l.675-2.017a3675.315 3675.315 0 0 0 11.72-35.663l.763-2.362c1.333-4.128 2.66-8.258 3.987-12.388Zm10 15a22001.61 22001.61 0 0 0-6.65 21.019 9547.902 9547.902 0 0 1-3.087 9.759 9037.044 9037.044 0 0 0-3.544 11.214l-1.127 3.548-1.031 3.276-.916 2.893c-.735 2.215-.735 2.215-.645 4.291h35c-1.93-7.723-3.917-15.246-6.355-22.797l-.93-2.908c-.963-3.016-1.933-6.03-2.902-9.045l-1.983-6.195c-1.606-5.02-3.216-10.038-4.83-15.055h-1ZM3345 241h15v116h-14l-1-14-3.125 3.75c-6 6.833-12.495 10.284-21.605 11.207-7.396.14-13.79-1.302-19.489-6.137-9.295-9.499-11.64-21.666-11.968-34.57.187-13.614 3.238-25.086 12.75-35.05 3.49-3.15 7.11-5.388 11.437-7.2l2.574-1.113c4.87-1.26 9.544-1.137 14.551-1.075l2.996.002c4.234.026 7.74.151 11.879 1.186v-33Zm-34.313 52.063c-6.918 8.954-6.58 21.155-5.687 31.937 1.057 7.418 3.321 12.97 9 18 3.71 1.855 7.952 1.455 12 1 3.35-1.622 3.35-1.622 6-4l2.4-1.887c7.257-5.843 7.257-5.843 11.014-14.158.577-5.69.316-11.376.086-17.08-.04-1.737-.077-3.474-.11-5.21A685.343 685.343 0 0 0 3345 289a526.137 526.137 0 0 0-3.764-1.473l-2.117-.828c-10.283-3.39-20.946-1.195-28.432 6.363ZM675 249v13l-4.61.078c-20.5.31-20.5.31-37.55 10.727-5.411 6.456-6.682 14.041-7.84 22.195l2.047-.84 2.703-1.098 2.672-1.09c9.598-3.62 23.844-3.943 33.453-.347 2.191 1.125 2.191 1.125 4.125 2.375l1.965 1.25c6.32 4.703 9.89 12.045 11.035 19.75.731 10.733-.147 20.333-7 29-7.614 8.702-16.69 13.02-28.125 13.96-10.556.144-19.707-1.68-27.8-8.608-12.116-12.297-11.484-29.824-11.379-45.849.21-16.054 4.073-30.715 15.347-42.726C638.606 247.551 656.596 248.48 675 249Zm-51 60c.273 10.897.935 20.496 6.875 30 4.57 4.3 8.951 5.416 15.125 5.375l3.563.023c6.471-.75 10.258-3.652 14.18-8.59 3.95-5.68 3.88-12.128 3.257-18.808-1.227-5.127-3.976-8.647-8-12-11.421-5.73-24.399-1.41-35 4ZM189.188 253.32c11.485 7.962 18.578 20.05 21.343 33.66 2.66 19.124 1.287 38.984-10.64 54.82-8.042 9.36-16.861 14.462-29.141 16.012-12.388.795-23.335-2.178-33.254-9.714-11.7-10.632-16.572-26.453-17.422-41.837-.535-15.78 2.562-31.848 12.926-44.261 14.401-15.26 37.755-19.805 56.188-8.68Zm-47.66 18.457c-8.652 12.515-9.401 28.678-7.215 43.323 2.239 10.864 7.518 19.874 16.343 26.525 7.466 4.38 16.7 4.831 25.008 2.688 2.271-.937 4.262-2 6.336-3.313l1.855-1.11c7.853-5.615 11.932-16.362 13.79-25.554.594-3.909.695-7.763.667-11.711l-.014-2.517c-.122-6.41-.895-12.12-3.298-18.108l-1.031-2.602c-3.749-8.383-9.63-15.377-18.348-18.777-13.965-3.309-25.088.287-34.094 11.156ZM2241 241h15v43l8-7c8.215-5.086 16.614-4.894 26-4 6.323 1.567 10.476 5.66 14 11 3.79 7.586 3.39 15.6 3.293 23.879a1882.105 1882.105 0 0 1-.087 15.407c-.03 3.801-.044 7.602-.06 11.403-.032 7.437-.084 14.874-.146 22.311h-15l-.028-5.38c-.036-5.892-.09-11.783-.156-17.675-.04-3.569-.072-7.137-.087-10.707-.015-3.45-.05-6.899-.097-10.348a567.53 567.53 0 0 1-.026-5.836c-.117-7.116-.647-12.057-4.606-18.054-4.502-3.001-8.728-2.811-14-2-2.359 1.13-4.034 2.359-5.956 4.127C2265 293 2265 293 2262.913 294.634c-3.289 2.787-5.56 4.99-6.652 9.241-.28 3.409-.317 6.737-.261 10.156l-.033 3.733c-.026 3.913.003 7.823.033 11.736-.004 2.662-.02 5.323-.035 7.984-.03 6.506-.01 13.01.035 19.516h-15V241ZM1091 241h15v43l8-7c8.215-5.086 16.614-4.894 26-4 6.323 1.567 10.476 5.66 14 11 3.79 7.586 3.39 15.6 3.293 23.879a1882.105 1882.105 0 0 1-.087 15.407c-.03 3.801-.044 7.602-.06 11.403-.032 7.437-.084 14.874-.146 22.311h-15l-.028-5.38c-.036-5.892-.09-11.783-.156-17.675-.04-3.569-.072-7.137-.087-10.707-.015-3.45-.05-6.899-.097-10.348a567.53 567.53 0 0 1-.026-5.836c-.117-7.116-.647-12.057-4.606-18.054-4.502-3.001-8.728-2.811-14-2-2.359 1.13-4.034 2.359-5.956 4.127C1115 293 1115 293 1112.913 294.634c-3.289 2.787-5.56 4.99-6.652 9.241-.28 3.409-.317 6.737-.261 10.156l-.033 3.733c-.026 3.913.003 7.823.033 11.736-.004 2.662-.02 5.323-.035 7.984-.03 6.506-.01 13.01.035 19.516h-15V241ZM1244 278c5.214 4.253 7.594 9.513 9 16 .39 4.888.351 9.76.293 14.66a1822.129 1822.129 0 0 1-.087 15.162c-.03 3.741-.044 7.482-.06 11.223-.032 7.318-.084 14.637-.146 21.955h-14l-1-9-2.16 1.46c-9.71 6.405-9.71 6.405-15.84 7.54l-1.969.398c-8.503 1.387-17.647.479-25.093-4.023-5.288-3.958-7.576-9.038-8.938-15.375-.672-7.664.859-14.907 5.625-21.117 8.293-8.051 18.999-9.343 30.094-9.235l4.031.102c1.39.02 2.781.038 4.172.055 3.36.046 6.719.112 10.078.195a526.112 526.112 0 0 0-.813-6.188l-.457-3.48c-1.024-4.674-2.4-7.446-6.402-10.113-3.923-1.437-7.45-1.751-11.578-1.719l-2.34.002c-8.87.222-17.041 2.728-25.41 5.498v-15c15.749-4.893 38.512-9.256 53 1Zm-41.938 47.813c-1.528 3.146-1.941 5.69-2.062 9.187 1.184 3.42 2.368 5.407 5 7.875 6.18 2.318 11.502 2.103 17.652-.305 5.472-2.586 11.025-5.284 15.348-9.57.603-3.27.603-3.27.313-6.75l-.137-3.547L1238 320a954.692 954.692 0 0 0-12.5-.25l-3.555-.102c-7.982-.09-13.824.497-19.882 6.164ZM956 278c5.214 4.253 7.594 9.513 9 16 .39 4.888.351 9.76.293 14.66a1822.129 1822.129 0 0 1-.087 15.162c-.03 3.741-.044 7.482-.06 11.223-.032 7.318-.084 14.637-.146 21.955h-14l-1-9-2.16 1.46c-9.71 6.405-9.71 6.405-15.84 7.54l-1.969.398c-8.503 1.387-17.647.479-25.093-4.023-5.288-3.958-7.576-9.038-8.938-15.375-.672-7.664.859-14.907 5.625-21.117 8.293-8.051 18.999-9.343 30.094-9.235l4.031.102c1.39.02 2.781.038 4.172.055 3.36.046 6.719.112 10.078.195a526.112 526.112 0 0 0-.813-6.188l-.457-3.48c-1.024-4.674-2.4-7.446-6.402-10.113-3.923-1.437-7.45-1.751-11.578-1.719l-2.34.002c-8.87.222-17.041 2.728-25.41 5.498v-15c15.749-4.893 38.512-9.256 53 1Zm-41.938 47.813c-1.528 3.146-1.941 5.69-2.062 9.187 1.184 3.42 2.368 5.407 5 7.875 6.18 2.318 11.502 2.103 17.652-.305 5.472-2.586 11.025-5.284 15.348-9.57.603-3.27.603-3.27.313-6.75l-.137-3.547L950 320a954.692 954.692 0 0 0-12.5-.25l-3.555-.102c-7.982-.09-13.824.497-19.883 6.164ZM568.969 253.25c5.927 4.42 9.7 11.508 11.031 18.75 1.098 14.126-2.393 24.81-11 36-5.864 6.83-12.013 13.49-18.848 19.36-4.926 4.319-9.52 9.007-14.152 13.64l50 1v15h-72c0-15 0-15 2.125-18.625L519 336l2.813-2.438 1.53-1.229c24.506-19.458 24.506-19.458 39.274-46.009.622-6.36.402-11.585-2.617-17.324-3.332-3.998-5.551-5.76-10.785-6.273-11.027-.342-18.19 2.881-26.215 10.273a311.822 311.822 0 0 1-4.063-4.25l-2.285-2.39C515 264 515 264 514.945 261.952c3.327-6.16 12.455-11.001 18.926-13.328 12.02-2.4 24.63-2.021 35.098 4.625ZM377.969 253.25c5.927 4.42 9.7 11.508 11.031 18.75 1.098 14.126-2.393 24.81-11 36-5.864 6.83-12.013 13.49-18.848 19.36-4.926 4.319-9.52 9.007-14.152 13.64l50 1v15h-72c0-15 0-15 2.125-18.625L328 336l2.813-2.438 1.53-1.229c24.506-19.458 24.506-19.458 39.274-46.009.622-6.36.402-11.585-2.617-17.324-3.332-3.998-5.551-5.76-10.785-6.273-11.027-.342-18.19 2.881-26.215 10.273a311.822 311.822 0 0 1-4.063-4.25l-2.285-2.39C324 264 324 264 323.945 261.952c3.327-6.16 12.455-11.001 18.926-13.328 12.02-2.4 24.63-2.021 35.098 4.625ZM3252.586 276.46c7.986 5.092 12.602 12.102 15.164 21.204 1.535 7.397 2.672 16.071.25 23.336h-57c2.628 11.669 2.628 11.669 10.5 19.313 5.985 2.885 11.073 2.87 17.625 2.875l2.727.037c5.522.012 10.573-.531 15.952-1.794C3260 341 3260 341 3264 341v13c-16.327 3.871-35.325 7.26-51.012-.746-8.771-5.532-14.127-12.23-16.8-22.254-2.9-14.3-2.37-30.438 5.812-43 11.568-15.787 32.957-20.428 50.586-11.54ZM3217 291c-4.179 6.027-5.07 10.558-6 18h42c0-7.092-.656-13.155-5.46-18.68-5.853-5.02-10.634-5.903-18.208-5.75-5.275.68-8.68 2.596-12.332 6.43ZM2964.586 276.46c7.986 5.092 12.602 12.102 15.164 21.204 1.535 7.397 2.672 16.071.25 23.336h-57c2.628 11.669 2.628 11.669 10.5 19.313 5.985 2.885 11.073 2.87 17.625 2.875l2.727.037c5.522.012 10.573-.531 15.952-1.794C2972 341 2972 341 2976 341v13c-16.327 3.871-35.325 7.26-51.012-.746-8.771-5.532-14.127-12.23-16.8-22.254-2.9-14.3-2.37-30.438 5.812-43 11.568-15.787 32.957-20.428 50.586-11.54ZM2929 291c-4.179 6.027-5.07 10.558-6 18h42c0-7.092-.656-13.155-5.46-18.68-5.853-5.02-10.634-5.903-18.208-5.75-5.275.68-8.68 2.596-12.332 6.43ZM2773.586 276.46c7.986 5.092 12.602 12.102 15.164 21.204 1.535 7.397 2.672 16.071.25 23.336h-57c2.628 11.669 2.628 11.669 10.5 19.313 5.985 2.885 11.073 2.87 17.625 2.875l2.727.037c5.522.012 10.573-.531 15.952-1.794C2781 341 2781 341 2785 341v13c-16.327 3.871-35.325 7.26-51.012-.746-8.771-5.532-14.127-12.23-16.8-22.254-2.9-14.3-2.37-30.438 5.812-43 11.568-15.787 32.957-20.428 50.586-11.54ZM2738 291c-4.179 6.027-5.07 10.558-6 18h42c0-7.092-.656-13.155-5.46-18.68-5.853-5.02-10.634-5.903-18.208-5.75-5.275.68-8.68 2.596-12.332 6.43ZM1765 241h40v103h24v13h-66v-13h26v-90h-24v-13ZM1669 241h40v103h24v13h-66v-13h26v-90h-24v-13ZM1286 241h40v103h24v13h-66v-13h26v-90h-24v-13ZM2366 248v26h37v13h-37c.074 6.442.157 12.882.262 19.324a1375 1375 0 0 1 .084 6.57c.034 3.153.086 6.305.142 9.458l.02 2.955c.114 5.299.515 9.119 3.492 13.693 4.473 4.054 8.767 4.162 14.563 4.125l2.158-.006c5.479-.044 10.839-.439 16.279-1.119v13c-13.423 3.413-29.843 5.48-42.39-1.813-5.243-3.868-8.032-8.975-9.61-15.187-.386-3.986-.35-7.936-.293-11.938l.013-3.395c.017-3.556.054-7.111.093-10.667.015-2.42.028-4.841.04-7.262.03-5.913.09-11.825.147-17.738h-23v-13h23v-23c10-3 10-3 15-3ZM2854 272.813l3.773.001c5.928.029 11.318.342 17.227 1.186v15l-4.688-1c-6.069-1.008-12.039-1.257-18.187-1.313l-2.737-.052c-6.23.004-10.798.775-15.388 5.365-.584 2.872-.584 2.872 0 6 3.383 4.035 6.327 5.847 11.297 7.465l3.656 1.236 3.797 1.236c19.14 6.25 19.14 6.25 25.813 14.063 2.661 5.533 2.23 12.066 1.437 18-2.54 6.778-7.516 10.851-13.813 14.125-15.522 6.491-34.174 3.915-50.187.875v-14c9.478.897 9.478.897 12.621 1.52 4.938.702 9.835.705 14.816.73l3.065.063c5.96.03 10.256-.396 15.498-3.313 2.004-2.421 1.991-3.792 2.125-6.938-1.675-4.559-4.908-5.909-9.125-8.062-3.407-1.328-6.875-2.386-10.375-3.438-9.996-3.19-19.456-6.255-25.563-15.363-2.697-5.583-2.627-11.131-.937-17.012 2.695-6.876 8.405-10.997 14.875-14.187 6.834-2.685 13.744-2.259 21-2.188ZM2471 272.813l3.773.001c5.928.029 11.318.342 17.227 1.186v15l-4.688-1c-6.069-1.008-12.039-1.257-18.187-1.313l-2.737-.052c-6.23.004-10.798.775-15.388 5.365-.584 2.872-.584 2.872 0 6 3.383 4.035 6.327 5.847 11.297 7.465l3.656 1.236 3.797 1.236c19.14 6.25 19.14 6.25 25.813 14.063 2.661 5.533 2.23 12.066 1.437 18-2.54 6.778-7.516 10.851-13.813 14.125-15.522 6.491-34.174 3.915-50.187.875v-14c9.478.897 9.478.897 12.621 1.52 4.938.702 9.835.705 14.816.73l3.065.063c5.96.03 10.256-.396 15.498-3.313 2.004-2.421 1.991-3.792 2.125-6.938-1.675-4.559-4.908-5.909-9.125-8.062-3.407-1.328-6.875-2.386-10.375-3.438-9.996-3.19-19.456-6.255-25.563-15.363-2.697-5.583-2.627-11.131-.937-17.012 2.695-6.876 8.405-10.997 14.875-14.187 6.834-2.685 13.744-2.259 21-2.188ZM1034 272.813l3.773.001c5.928.029 11.318.342 17.227 1.186v15l-4.688-1c-6.069-1.008-12.039-1.257-18.187-1.313l-2.737-.052c-6.23.004-10.798.775-15.388 5.365-.584 2.872-.584 2.872 0 6 3.383 4.035 6.327 5.847 11.297 7.465l3.656 1.236 3.797 1.236c19.14 6.25 19.14 6.25 25.813 14.063 2.661 5.533 2.23 12.066 1.437 18-2.54 6.778-7.516 10.851-13.813 14.125-15.522 6.491-34.174 3.915-50.187.875v-14c9.478.897 9.478.897 12.621 1.52 4.938.702 9.835.705 14.817.73l3.064.063c5.96.03 10.256-.396 15.498-3.313 2.004-2.421 1.991-3.792 2.125-6.938-1.675-4.559-4.908-5.909-9.125-8.062-3.407-1.328-6.875-2.386-10.375-3.438-9.996-3.19-19.456-6.255-25.563-15.363-2.697-5.583-2.627-11.131-.937-17.012 2.695-6.876 8.405-10.997 14.875-14.187 6.834-2.685 13.744-2.259 21-2.188ZM3095 274h17c4.86 11.243 8.971 22.732 13.125 34.25l3.23 8.927c.666 1.838 1.33 3.677 1.994 5.516 1.848 5.116 3.73 10.217 5.651 15.307l.56-1.58 5.891-16.602 2.185-6.159c4.699-13.253 9.467-26.477 14.364-39.659h17c-.713 3.563-1.395 6.317-2.683 9.621l-1.046 2.7-1.138 2.902-1.185 3.049c-1.27 3.265-2.547 6.528-3.823 9.79l-2.607 6.69c-2.12 5.44-4.246 10.88-6.373 16.317-1.332 3.409-2.66 6.819-3.986 10.23a8617.242 8617.242 0 0 1-3.784 9.701l-1.34 3.442-1.2 3.058-1.013 2.594C3145 356 3145 356 3144 357c-2.863.073-5.7.092-8.563.063l-2.443-.014c-1.998-.012-3.996-.03-5.994-.049-6.821-16.382-13.34-32.879-19.768-49.42-.861-2.215-1.723-4.43-2.587-6.646-1.23-3.159-2.456-6.32-3.68-9.48l-1.123-2.88-1.045-2.71-.91-2.344c-1.101-3.128-1.976-6.331-2.887-9.52ZM2052 274h40v70h24v13h-66v-13h26v-57h-24v-13ZM3067.43 275.684c6.125 5.135 9.26 10.356 10.57 18.316.215 4.04.141 7.95 0 12h-15l-.75-5.625c-.855-5.173-1.828-8.419-5.25-12.375-3.749-1.874-7.918-1.533-12-1-3.007 1.271-5.442 2.989-8 5l-1.652 1.234c-1.51 1.183-2.93 2.475-4.348 3.766l-2.632 2.385c-3.782 4.64-3.095 10.304-3.075 16.013l-.046 3.607c-.043 3.79-.052 7.58-.06 11.37-.023 2.574-.048 5.148-.076 7.723-.063 6.3-.095 12.6-.111 18.902h-15v-83h14l1 12 1.871-1.828c10.374-9.79 26.709-17.4 40.559-8.488ZM2684.43 275.684c6.125 5.135 9.26 10.356 10.57 18.316.215 4.04.141 7.95 0 12h-15l-.75-5.625c-.855-5.173-1.828-8.419-5.25-12.375-3.749-1.874-7.918-1.533-12-1-3.007 1.271-5.442 2.989-8 5l-1.652 1.234c-1.51 1.183-2.93 2.475-4.348 3.766l-2.632 2.385c-3.782 4.64-3.095 10.304-3.075 16.013l-.046 3.607c-.043 3.79-.052 7.58-.06 11.37-.023 2.574-.048 5.148-.076 7.723-.063 6.3-.095 12.6-.111 18.902h-15v-83h14l1 12 1.871-1.828c10.374-9.79 26.709-17.4 40.559-8.488ZM2013.43 275.684c6.125 5.135 9.26 10.356 10.57 18.316.215 4.04.141 7.95 0 12h-15l-.75-5.625c-.855-5.173-1.828-8.419-5.25-12.375-3.749-1.874-7.918-1.533-12-1-3.007 1.271-5.442 2.989-8 5l-1.652 1.234c-1.51 1.183-2.93 2.475-4.348 3.766l-2.632 2.385c-3.782 4.64-3.095 10.304-3.075 16.013l-.046 3.607c-.043 3.79-.052 7.58-.06 11.37-.023 2.574-.048 5.148-.076 7.723-.063 6.3-.095 12.6-.111 18.902h-15v-83h14l1 12 1.871-1.828c10.374-9.79 26.709-17.4 40.559-8.488Z"}),Nn.jsx("path",{fill:"#ffffff",d:"m170.25 275.688 2.39.029c3.721.072 6.703.369 10.36 1.283v13l-6-2c-2.835-.311-2.835-.311-5.625-.25l-2.79-.016c-2.715.28-4.313.771-6.585 2.266-3.602 6.138-5.244 12.025-3.469 19.125 1.41 4.167 2.504 6.625 6.469 8.875 2.843.4 2.843.4 5.875.25l3.195-.078c3.035-.178 5.96-.512 8.93-1.172v12c-10.377 1.82-19.734 3.304-29.438-1.813-6.531-5.576-9.116-11.277-9.886-19.753-.277-9.466.916-17.08 6.574-24.809 6.025-5.75 11.825-7.244 20-6.938ZM3428 330c4.031 2.241 6.537 4.61 8 9 .586 4.24.876 8.229-1.059 12.14-2.946 3.801-6.02 6.008-10.789 6.84-4.078.037-7.572-1.07-11.152-2.98-3.522-3.522-4.835-6.28-5.313-11.25.457-5.474 2.3-8.86 6.376-12.688 4.668-1.688 9.048-1.942 13.937-1.062ZM1416 330c4.031 2.241 6.537 4.61 8 9 .586 4.24.876 8.229-1.059 12.14-2.946 3.801-6.02 6.008-10.789 6.84-4.078.037-7.572-1.07-11.152-2.98-3.522-3.522-4.835-6.28-5.313-11.25.457-5.474 2.3-8.86 6.376-12.688 4.668-1.688 9.048-1.942 13.937-1.062ZM2087 240c3.184 1.791 4.527 3.205 6.375 6.313 1.096 4.714.399 8.294-1.938 12.5-3.239 2.906-6.084 4.016-10.437 4.187-4.125-1.285-7.255-2.638-10-6-1.233-4.168-1.477-7.846.188-11.875 4.669-5.474 8.837-6.142 15.812-5.125Z"})]});function Z4(){const a=Va.useRef(),[e,t]=Va.useState({x:0,y:0}),[r,s]=Va.useState(!1),[l,u]=Va.useState(!1);return Va.useEffect(()=>{I4(a.current);const f=m=>{if(t({x:m.clientX,y:m.clientY}),Math.random()>.7){const v=document.createElement("div");v.className="cursor-trail",v.style.left=`${m.clientX}px`,v.style.top=`${m.clientY}px`,document.body.appendChild(v),setTimeout(()=>v.remove(),500)}},p=()=>u(!0),h=()=>u(!1);return window.addEventListener("mousemove",f),window.addEventListener("mousedown",p),window.addEventListener("mouseup",h),()=>{window.removeEventListener("mousemove",f),window.removeEventListener("mousedown",p),window.removeEventListener("mouseup",h)}},[]),Nn.jsxs("div",{className:"App",children:[Nn.jsx(q4,{}),Nn.jsx("canvas",{ref:a}),Nn.jsx("div",{className:`central-cursor ${l?"active":""}`,style:{left:`${e.x}px`,top:`${e.y}px`,transform:"translate(-50%, -50%)"}}),Nn.jsx("div",{className:`outer-cursor ${r?"hover":""} ${l?"active":""}`,style:{left:`${e.x}px`,top:`${e.y}px`,transform:"translate(-50%, -50%)"}}),Nn.jsx(Y4,{color:"white",className:"mouse-icon"}),Nn.jsx("div",{style:{position:"absolute",bottom:"0.75rem",zIndex:1e3,left:"50%",transform:"translateX(-50%)",zIndex:1e3},children:Nn.jsx(j4,{})}),Nn.jsxs("div",{className:"free-camera-btn",children:[Nn.jsx(W4,{color:"white",className:"camera-icon"}),Nn.jsxs("p",{children:["Free camera",Nn.jsx("br",{}),"OFF"]})]}),Nn.jsx("div",{className:"curtain",children:Nn.jsx("p",{})})]})}NT.createRoot(document.getElementById("root")).render(Nn.jsx(Qn.StrictMode,{children:Nn.jsx(Z4,{})}));
