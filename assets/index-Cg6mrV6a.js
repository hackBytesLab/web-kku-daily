(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function pS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var dv={exports:{}},bu={},fv={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var la=Symbol.for("react.element"),mS=Symbol.for("react.portal"),gS=Symbol.for("react.fragment"),yS=Symbol.for("react.strict_mode"),_S=Symbol.for("react.profiler"),vS=Symbol.for("react.provider"),wS=Symbol.for("react.context"),ES=Symbol.for("react.forward_ref"),TS=Symbol.for("react.suspense"),IS=Symbol.for("react.memo"),SS=Symbol.for("react.lazy"),og=Symbol.iterator;function RS(t){return t===null||typeof t!="object"?null:(t=og&&t[og]||t["@@iterator"],typeof t=="function"?t:null)}var pv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mv=Object.assign,gv={};function Ai(t,e,n){this.props=t,this.context=e,this.refs=gv,this.updater=n||pv}Ai.prototype.isReactComponent={};Ai.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ai.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function yv(){}yv.prototype=Ai.prototype;function sf(t,e,n){this.props=t,this.context=e,this.refs=gv,this.updater=n||pv}var of=sf.prototype=new yv;of.constructor=sf;mv(of,Ai.prototype);of.isPureReactComponent=!0;var ag=Array.isArray,_v=Object.prototype.hasOwnProperty,af={current:null},vv={key:!0,ref:!0,__self:!0,__source:!0};function wv(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)_v.call(e,r)&&!vv.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:la,type:t,key:i,ref:o,props:s,_owner:af.current}}function AS(t,e){return{$$typeof:la,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function lf(t){return typeof t=="object"&&t!==null&&t.$$typeof===la}function CS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var lg=/\/+/g;function zc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?CS(""+t.key):e.toString(36)}function _l(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case la:case mS:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+zc(o,0):r,ag(s)?(n="",t!=null&&(n=t.replace(lg,"$&/")+"/"),_l(s,e,n,"",function(c){return c})):s!=null&&(lf(s)&&(s=AS(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(lg,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",ag(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+zc(i,l);o+=_l(i,e,n,u,s)}else if(u=RS(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+zc(i,l++),o+=_l(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function $a(t,e,n){if(t==null)return t;var r=[],s=0;return _l(t,r,"","",function(i){return e.call(n,i,s++)}),r}function kS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var St={current:null},vl={transition:null},PS={ReactCurrentDispatcher:St,ReactCurrentBatchConfig:vl,ReactCurrentOwner:af};function Ev(){throw Error("act(...) is not supported in production builds of React.")}le.Children={map:$a,forEach:function(t,e,n){$a(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $a(t,function(){e++}),e},toArray:function(t){return $a(t,function(e){return e})||[]},only:function(t){if(!lf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};le.Component=Ai;le.Fragment=gS;le.Profiler=_S;le.PureComponent=sf;le.StrictMode=yS;le.Suspense=TS;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PS;le.act=Ev;le.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=mv({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=af.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)_v.call(e,u)&&!vv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:la,type:t.type,key:s,ref:i,props:r,_owner:o}};le.createContext=function(t){return t={$$typeof:wS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:vS,_context:t},t.Consumer=t};le.createElement=wv;le.createFactory=function(t){var e=wv.bind(null,t);return e.type=t,e};le.createRef=function(){return{current:null}};le.forwardRef=function(t){return{$$typeof:ES,render:t}};le.isValidElement=lf;le.lazy=function(t){return{$$typeof:SS,_payload:{_status:-1,_result:t},_init:kS}};le.memo=function(t,e){return{$$typeof:IS,type:t,compare:e===void 0?null:e}};le.startTransition=function(t){var e=vl.transition;vl.transition={};try{t()}finally{vl.transition=e}};le.unstable_act=Ev;le.useCallback=function(t,e){return St.current.useCallback(t,e)};le.useContext=function(t){return St.current.useContext(t)};le.useDebugValue=function(){};le.useDeferredValue=function(t){return St.current.useDeferredValue(t)};le.useEffect=function(t,e){return St.current.useEffect(t,e)};le.useId=function(){return St.current.useId()};le.useImperativeHandle=function(t,e,n){return St.current.useImperativeHandle(t,e,n)};le.useInsertionEffect=function(t,e){return St.current.useInsertionEffect(t,e)};le.useLayoutEffect=function(t,e){return St.current.useLayoutEffect(t,e)};le.useMemo=function(t,e){return St.current.useMemo(t,e)};le.useReducer=function(t,e,n){return St.current.useReducer(t,e,n)};le.useRef=function(t){return St.current.useRef(t)};le.useState=function(t){return St.current.useState(t)};le.useSyncExternalStore=function(t,e,n){return St.current.useSyncExternalStore(t,e,n)};le.useTransition=function(){return St.current.useTransition()};le.version="18.3.1";fv.exports=le;var te=fv.exports;const NS=pS(te);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var OS=te,DS=Symbol.for("react.element"),xS=Symbol.for("react.fragment"),bS=Object.prototype.hasOwnProperty,LS=OS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,VS={key:!0,ref:!0,__self:!0,__source:!0};function Tv(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)bS.call(e,r)&&!VS.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:DS,type:t,key:i,ref:o,props:s,_owner:LS.current}}bu.Fragment=xS;bu.jsx=Tv;bu.jsxs=Tv;dv.exports=bu;var L=dv.exports,Iv={exports:{}},jt={},Sv={exports:{}},Rv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,W){var q=F.length;F.push(W);e:for(;0<q;){var $=q-1>>>1,Y=F[$];if(0<s(Y,W))F[$]=W,F[q]=Y,q=$;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var W=F[0],q=F.pop();if(q!==W){F[0]=q;e:for(var $=0,Y=F.length,Ce=Y>>>1;$<Ce;){var re=2*($+1)-1,pe=F[re],Pe=re+1,qe=F[Pe];if(0>s(pe,q))Pe<Y&&0>s(qe,pe)?(F[$]=qe,F[Pe]=q,$=Pe):(F[$]=pe,F[re]=q,$=re);else if(Pe<Y&&0>s(qe,q))F[$]=qe,F[Pe]=q,$=Pe;else break e}}return W}function s(F,W){var q=F.sortIndex-W.sortIndex;return q!==0?q:F.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,S=!1,E=!1,k=!1,P=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(F){for(var W=n(c);W!==null;){if(W.callback===null)r(c);else if(W.startTime<=F)r(c),W.sortIndex=W.expirationTime,e(u,W);else break;W=n(c)}}function D(F){if(k=!1,R(F),!E)if(n(u)!==null)E=!0,H(U);else{var W=n(c);W!==null&&ge(D,W.startTime-F)}}function U(F,W){E=!1,k&&(k=!1,T(_),_=-1),S=!0;var q=m;try{for(R(W),p=n(u);p!==null&&(!(p.expirationTime>W)||F&&!C());){var $=p.callback;if(typeof $=="function"){p.callback=null,m=p.priorityLevel;var Y=$(p.expirationTime<=W);W=t.unstable_now(),typeof Y=="function"?p.callback=Y:p===n(u)&&r(u),R(W)}else r(u);p=n(u)}if(p!==null)var Ce=!0;else{var re=n(c);re!==null&&ge(D,re.startTime-W),Ce=!1}return Ce}finally{p=null,m=q,S=!1}}var B=!1,v=null,_=-1,I=5,A=-1;function C(){return!(t.unstable_now()-A<I)}function N(){if(v!==null){var F=t.unstable_now();A=F;var W=!0;try{W=v(!0,F)}finally{W?g():(B=!1,v=null)}}else B=!1}var g;if(typeof w=="function")g=function(){w(N)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,ne=X.port2;X.port1.onmessage=N,g=function(){ne.postMessage(null)}}else g=function(){P(N,0)};function H(F){v=F,B||(B=!0,g())}function ge(F,W){_=P(function(){F(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){E||S||(E=!0,H(U))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(F){switch(m){case 1:case 2:case 3:var W=3;break;default:W=m}var q=m;m=W;try{return F()}finally{m=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,W){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var q=m;m=F;try{return W()}finally{m=q}},t.unstable_scheduleCallback=function(F,W,q){var $=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?$+q:$):q=$,F){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=q+Y,F={id:d++,callback:W,priorityLevel:F,startTime:q,expirationTime:Y,sortIndex:-1},q>$?(F.sortIndex=q,e(c,F),n(u)===null&&F===n(c)&&(k?(T(_),_=-1):k=!0,ge(D,q-$))):(F.sortIndex=Y,e(u,F),E||S||(E=!0,H(U))),F},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(F){var W=m;return function(){var q=m;m=W;try{return F.apply(this,arguments)}finally{m=q}}}})(Rv);Sv.exports=Rv;var MS=Sv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var US=te,Ft=MS;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Av=new Set,Lo={};function Ss(t,e){ci(t,e),ci(t+"Capture",e)}function ci(t,e){for(Lo[t]=e,t=0;t<e.length;t++)Av.add(e[t])}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lh=Object.prototype.hasOwnProperty,FS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ug={},cg={};function jS(t){return Lh.call(cg,t)?!0:Lh.call(ug,t)?!1:FS.test(t)?cg[t]=!0:(ug[t]=!0,!1)}function BS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function zS(t,e,n,r){if(e===null||typeof e>"u"||BS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Rt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ot[t]=new Rt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ot[e]=new Rt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ot[t]=new Rt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ot[t]=new Rt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ot[t]=new Rt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ot[t]=new Rt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ot[t]=new Rt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ot[t]=new Rt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ot[t]=new Rt(t,5,!1,t.toLowerCase(),null,!1,!1)});var uf=/[\-:]([a-z])/g;function cf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(uf,cf);ot[e]=new Rt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(uf,cf);ot[e]=new Rt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(uf,cf);ot[e]=new Rt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ot[t]=new Rt(t,1,!1,t.toLowerCase(),null,!1,!1)});ot.xlinkHref=new Rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ot[t]=new Rt(t,1,!1,t.toLowerCase(),null,!0,!0)});function hf(t,e,n,r){var s=ot.hasOwnProperty(e)?ot[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(zS(e,n,s,r)&&(n=null),r||s===null?jS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Xn=US.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ha=Symbol.for("react.element"),zs=Symbol.for("react.portal"),$s=Symbol.for("react.fragment"),df=Symbol.for("react.strict_mode"),Vh=Symbol.for("react.profiler"),Cv=Symbol.for("react.provider"),kv=Symbol.for("react.context"),ff=Symbol.for("react.forward_ref"),Mh=Symbol.for("react.suspense"),Uh=Symbol.for("react.suspense_list"),pf=Symbol.for("react.memo"),or=Symbol.for("react.lazy"),Pv=Symbol.for("react.offscreen"),hg=Symbol.iterator;function Ji(t){return t===null||typeof t!="object"?null:(t=hg&&t[hg]||t["@@iterator"],typeof t=="function"?t:null)}var De=Object.assign,$c;function lo(t){if($c===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);$c=e&&e[1]||""}return`
`+$c+t}var Hc=!1;function Wc(t,e){if(!t||Hc)return"";Hc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Hc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?lo(t):""}function $S(t){switch(t.tag){case 5:return lo(t.type);case 16:return lo("Lazy");case 13:return lo("Suspense");case 19:return lo("SuspenseList");case 0:case 2:case 15:return t=Wc(t.type,!1),t;case 11:return t=Wc(t.type.render,!1),t;case 1:return t=Wc(t.type,!0),t;default:return""}}function Fh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $s:return"Fragment";case zs:return"Portal";case Vh:return"Profiler";case df:return"StrictMode";case Mh:return"Suspense";case Uh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case kv:return(t.displayName||"Context")+".Consumer";case Cv:return(t._context.displayName||"Context")+".Provider";case ff:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pf:return e=t.displayName||null,e!==null?e:Fh(t.type)||"Memo";case or:e=t._payload,t=t._init;try{return Fh(t(e))}catch{}}return null}function HS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fh(e);case 8:return e===df?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Nv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function WS(t){var e=Nv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Wa(t){t._valueTracker||(t._valueTracker=WS(t))}function Ov(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Nv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function $l(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function jh(t,e){var n=e.checked;return De({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function dg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Dv(t,e){e=e.checked,e!=null&&hf(t,"checked",e,!1)}function Bh(t,e){Dv(t,e);var n=Pr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?zh(t,e.type,n):e.hasOwnProperty("defaultValue")&&zh(t,e.type,Pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function fg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function zh(t,e,n){(e!=="number"||$l(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var uo=Array.isArray;function ei(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Pr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function $h(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return De({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(uo(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Pr(n)}}function xv(t,e){var n=Pr(e.value),r=Pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function mg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function bv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?bv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var qa,Lv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(qa=qa||document.createElement("div"),qa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=qa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Vo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var vo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qS=["Webkit","ms","Moz","O"];Object.keys(vo).forEach(function(t){qS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),vo[e]=vo[t]})});function Vv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||vo.hasOwnProperty(t)&&vo[t]?(""+e).trim():e+"px"}function Mv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Vv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var KS=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wh(t,e){if(e){if(KS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function qh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kh=null;function mf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gh=null,ti=null,ni=null;function gg(t){if(t=ha(t)){if(typeof Gh!="function")throw Error(j(280));var e=t.stateNode;e&&(e=Fu(e),Gh(t.stateNode,t.type,e))}}function Uv(t){ti?ni?ni.push(t):ni=[t]:ti=t}function Fv(){if(ti){var t=ti,e=ni;if(ni=ti=null,gg(t),e)for(t=0;t<e.length;t++)gg(e[t])}}function jv(t,e){return t(e)}function Bv(){}var qc=!1;function zv(t,e,n){if(qc)return t(e,n);qc=!0;try{return jv(t,e,n)}finally{qc=!1,(ti!==null||ni!==null)&&(Bv(),Fv())}}function Mo(t,e){var n=t.stateNode;if(n===null)return null;var r=Fu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var Qh=!1;if(zn)try{var Zi={};Object.defineProperty(Zi,"passive",{get:function(){Qh=!0}}),window.addEventListener("test",Zi,Zi),window.removeEventListener("test",Zi,Zi)}catch{Qh=!1}function GS(t,e,n,r,s,i,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var wo=!1,Hl=null,Wl=!1,Xh=null,QS={onError:function(t){wo=!0,Hl=t}};function XS(t,e,n,r,s,i,o,l,u){wo=!1,Hl=null,GS.apply(QS,arguments)}function YS(t,e,n,r,s,i,o,l,u){if(XS.apply(this,arguments),wo){if(wo){var c=Hl;wo=!1,Hl=null}else throw Error(j(198));Wl||(Wl=!0,Xh=c)}}function Rs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $v(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yg(t){if(Rs(t)!==t)throw Error(j(188))}function JS(t){var e=t.alternate;if(!e){if(e=Rs(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return yg(s),t;if(i===r)return yg(s),e;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function Hv(t){return t=JS(t),t!==null?Wv(t):null}function Wv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Wv(t);if(e!==null)return e;t=t.sibling}return null}var qv=Ft.unstable_scheduleCallback,_g=Ft.unstable_cancelCallback,ZS=Ft.unstable_shouldYield,eR=Ft.unstable_requestPaint,Fe=Ft.unstable_now,tR=Ft.unstable_getCurrentPriorityLevel,gf=Ft.unstable_ImmediatePriority,Kv=Ft.unstable_UserBlockingPriority,ql=Ft.unstable_NormalPriority,nR=Ft.unstable_LowPriority,Gv=Ft.unstable_IdlePriority,Lu=null,wn=null;function rR(t){if(wn&&typeof wn.onCommitFiberRoot=="function")try{wn.onCommitFiberRoot(Lu,t,void 0,(t.current.flags&128)===128)}catch{}}var sn=Math.clz32?Math.clz32:oR,sR=Math.log,iR=Math.LN2;function oR(t){return t>>>=0,t===0?32:31-(sR(t)/iR|0)|0}var Ka=64,Ga=4194304;function co(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Kl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=co(l):(i&=o,i!==0&&(r=co(i)))}else o=n&~s,o!==0?r=co(o):i!==0&&(r=co(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-sn(e),s=1<<n,r|=t[n],e&=~s;return r}function aR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-sn(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=aR(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Yh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Qv(){var t=Ka;return Ka<<=1,!(Ka&4194240)&&(Ka=64),t}function Kc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ua(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-sn(e),t[e]=n}function uR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-sn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function yf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-sn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ye=0;function Xv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Yv,_f,Jv,Zv,ew,Jh=!1,Qa=[],yr=null,_r=null,vr=null,Uo=new Map,Fo=new Map,lr=[],cR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vg(t,e){switch(t){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":Uo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(e.pointerId)}}function eo(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=ha(e),e!==null&&_f(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function hR(t,e,n,r,s){switch(e){case"focusin":return yr=eo(yr,t,e,n,r,s),!0;case"dragenter":return _r=eo(_r,t,e,n,r,s),!0;case"mouseover":return vr=eo(vr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Uo.set(i,eo(Uo.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Fo.set(i,eo(Fo.get(i)||null,t,e,n,r,s)),!0}return!1}function tw(t){var e=Jr(t.target);if(e!==null){var n=Rs(e);if(n!==null){if(e=n.tag,e===13){if(e=$v(n),e!==null){t.blockedOn=e,ew(t.priority,function(){Jv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Zh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Kh=r,n.target.dispatchEvent(r),Kh=null}else return e=ha(n),e!==null&&_f(e),t.blockedOn=n,!1;e.shift()}return!0}function wg(t,e,n){wl(t)&&n.delete(e)}function dR(){Jh=!1,yr!==null&&wl(yr)&&(yr=null),_r!==null&&wl(_r)&&(_r=null),vr!==null&&wl(vr)&&(vr=null),Uo.forEach(wg),Fo.forEach(wg)}function to(t,e){t.blockedOn===e&&(t.blockedOn=null,Jh||(Jh=!0,Ft.unstable_scheduleCallback(Ft.unstable_NormalPriority,dR)))}function jo(t){function e(s){return to(s,t)}if(0<Qa.length){to(Qa[0],t);for(var n=1;n<Qa.length;n++){var r=Qa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(yr!==null&&to(yr,t),_r!==null&&to(_r,t),vr!==null&&to(vr,t),Uo.forEach(e),Fo.forEach(e),n=0;n<lr.length;n++)r=lr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<lr.length&&(n=lr[0],n.blockedOn===null);)tw(n),n.blockedOn===null&&lr.shift()}var ri=Xn.ReactCurrentBatchConfig,Gl=!0;function fR(t,e,n,r){var s=ye,i=ri.transition;ri.transition=null;try{ye=1,vf(t,e,n,r)}finally{ye=s,ri.transition=i}}function pR(t,e,n,r){var s=ye,i=ri.transition;ri.transition=null;try{ye=4,vf(t,e,n,r)}finally{ye=s,ri.transition=i}}function vf(t,e,n,r){if(Gl){var s=Zh(t,e,n,r);if(s===null)rh(t,e,r,Ql,n),vg(t,r);else if(hR(s,t,e,n,r))r.stopPropagation();else if(vg(t,r),e&4&&-1<cR.indexOf(t)){for(;s!==null;){var i=ha(s);if(i!==null&&Yv(i),i=Zh(t,e,n,r),i===null&&rh(t,e,r,Ql,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else rh(t,e,r,null,n)}}var Ql=null;function Zh(t,e,n,r){if(Ql=null,t=mf(r),t=Jr(t),t!==null)if(e=Rs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$v(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ql=t,null}function nw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tR()){case gf:return 1;case Kv:return 4;case ql:case nR:return 16;case Gv:return 536870912;default:return 16}default:return 16}}var pr=null,wf=null,El=null;function rw(){if(El)return El;var t,e=wf,n=e.length,r,s="value"in pr?pr.value:pr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return El=s.slice(t,1<r?1-r:void 0)}function Tl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xa(){return!0}function Eg(){return!1}function Bt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Xa:Eg,this.isPropagationStopped=Eg,this}return De(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xa)},persist:function(){},isPersistent:Xa}),e}var Ci={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ef=Bt(Ci),ca=De({},Ci,{view:0,detail:0}),mR=Bt(ca),Gc,Qc,no,Vu=De({},ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==no&&(no&&t.type==="mousemove"?(Gc=t.screenX-no.screenX,Qc=t.screenY-no.screenY):Qc=Gc=0,no=t),Gc)},movementY:function(t){return"movementY"in t?t.movementY:Qc}}),Tg=Bt(Vu),gR=De({},Vu,{dataTransfer:0}),yR=Bt(gR),_R=De({},ca,{relatedTarget:0}),Xc=Bt(_R),vR=De({},Ci,{animationName:0,elapsedTime:0,pseudoElement:0}),wR=Bt(vR),ER=De({},Ci,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),TR=Bt(ER),IR=De({},Ci,{data:0}),Ig=Bt(IR),SR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},RR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},AR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function CR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=AR[t])?!!e[t]:!1}function Tf(){return CR}var kR=De({},ca,{key:function(t){if(t.key){var e=SR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?RR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tf,charCode:function(t){return t.type==="keypress"?Tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),PR=Bt(kR),NR=De({},Vu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sg=Bt(NR),OR=De({},ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tf}),DR=Bt(OR),xR=De({},Ci,{propertyName:0,elapsedTime:0,pseudoElement:0}),bR=Bt(xR),LR=De({},Vu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),VR=Bt(LR),MR=[9,13,27,32],If=zn&&"CompositionEvent"in window,Eo=null;zn&&"documentMode"in document&&(Eo=document.documentMode);var UR=zn&&"TextEvent"in window&&!Eo,sw=zn&&(!If||Eo&&8<Eo&&11>=Eo),Rg=" ",Ag=!1;function iw(t,e){switch(t){case"keyup":return MR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ow(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hs=!1;function FR(t,e){switch(t){case"compositionend":return ow(e);case"keypress":return e.which!==32?null:(Ag=!0,Rg);case"textInput":return t=e.data,t===Rg&&Ag?null:t;default:return null}}function jR(t,e){if(Hs)return t==="compositionend"||!If&&iw(t,e)?(t=rw(),El=wf=pr=null,Hs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sw&&e.locale!=="ko"?null:e.data;default:return null}}var BR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!BR[t.type]:e==="textarea"}function aw(t,e,n,r){Uv(r),e=Xl(e,"onChange"),0<e.length&&(n=new Ef("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var To=null,Bo=null;function zR(t){_w(t,0)}function Mu(t){var e=Ks(t);if(Ov(e))return t}function $R(t,e){if(t==="change")return e}var lw=!1;if(zn){var Yc;if(zn){var Jc="oninput"in document;if(!Jc){var kg=document.createElement("div");kg.setAttribute("oninput","return;"),Jc=typeof kg.oninput=="function"}Yc=Jc}else Yc=!1;lw=Yc&&(!document.documentMode||9<document.documentMode)}function Pg(){To&&(To.detachEvent("onpropertychange",uw),Bo=To=null)}function uw(t){if(t.propertyName==="value"&&Mu(Bo)){var e=[];aw(e,Bo,t,mf(t)),zv(zR,e)}}function HR(t,e,n){t==="focusin"?(Pg(),To=e,Bo=n,To.attachEvent("onpropertychange",uw)):t==="focusout"&&Pg()}function WR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Mu(Bo)}function qR(t,e){if(t==="click")return Mu(e)}function KR(t,e){if(t==="input"||t==="change")return Mu(e)}function GR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var un=typeof Object.is=="function"?Object.is:GR;function zo(t,e){if(un(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Lh.call(e,s)||!un(t[s],e[s]))return!1}return!0}function Ng(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Og(t,e){var n=Ng(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ng(n)}}function cw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?cw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function hw(){for(var t=window,e=$l();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=$l(t.document)}return e}function Sf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function QR(t){var e=hw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&cw(n.ownerDocument.documentElement,n)){if(r!==null&&Sf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Og(n,i);var o=Og(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var XR=zn&&"documentMode"in document&&11>=document.documentMode,Ws=null,ed=null,Io=null,td=!1;function Dg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;td||Ws==null||Ws!==$l(r)||(r=Ws,"selectionStart"in r&&Sf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Io&&zo(Io,r)||(Io=r,r=Xl(ed,"onSelect"),0<r.length&&(e=new Ef("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ws)))}function Ya(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var qs={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionend:Ya("Transition","TransitionEnd")},Zc={},dw={};zn&&(dw=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function Uu(t){if(Zc[t])return Zc[t];if(!qs[t])return t;var e=qs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in dw)return Zc[t]=e[n];return t}var fw=Uu("animationend"),pw=Uu("animationiteration"),mw=Uu("animationstart"),gw=Uu("transitionend"),yw=new Map,xg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(t,e){yw.set(t,e),Ss(e,[t])}for(var eh=0;eh<xg.length;eh++){var th=xg[eh],YR=th.toLowerCase(),JR=th[0].toUpperCase()+th.slice(1);Ur(YR,"on"+JR)}Ur(fw,"onAnimationEnd");Ur(pw,"onAnimationIteration");Ur(mw,"onAnimationStart");Ur("dblclick","onDoubleClick");Ur("focusin","onFocus");Ur("focusout","onBlur");Ur(gw,"onTransitionEnd");ci("onMouseEnter",["mouseout","mouseover"]);ci("onMouseLeave",["mouseout","mouseover"]);ci("onPointerEnter",["pointerout","pointerover"]);ci("onPointerLeave",["pointerout","pointerover"]);Ss("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ss("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ss("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ss("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ss("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ss("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ZR=new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));function bg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,YS(r,e,void 0,t),t.currentTarget=null}function _w(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;bg(s,l,c),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;bg(s,l,c),i=u}}}if(Wl)throw t=Xh,Wl=!1,Xh=null,t}function Te(t,e){var n=e[od];n===void 0&&(n=e[od]=new Set);var r=t+"__bubble";n.has(r)||(vw(e,t,2,!1),n.add(r))}function nh(t,e,n){var r=0;e&&(r|=4),vw(n,t,r,e)}var Ja="_reactListening"+Math.random().toString(36).slice(2);function $o(t){if(!t[Ja]){t[Ja]=!0,Av.forEach(function(n){n!=="selectionchange"&&(ZR.has(n)||nh(n,!1,t),nh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ja]||(e[Ja]=!0,nh("selectionchange",!1,e))}}function vw(t,e,n,r){switch(nw(e)){case 1:var s=fR;break;case 4:s=pR;break;default:s=vf}n=s.bind(null,e,n,t),s=void 0,!Qh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function rh(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Jr(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}zv(function(){var c=i,d=mf(n),p=[];e:{var m=yw.get(t);if(m!==void 0){var S=Ef,E=t;switch(t){case"keypress":if(Tl(n)===0)break e;case"keydown":case"keyup":S=PR;break;case"focusin":E="focus",S=Xc;break;case"focusout":E="blur",S=Xc;break;case"beforeblur":case"afterblur":S=Xc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Tg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=yR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=DR;break;case fw:case pw:case mw:S=wR;break;case gw:S=bR;break;case"scroll":S=mR;break;case"wheel":S=VR;break;case"copy":case"cut":case"paste":S=TR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Sg}var k=(e&4)!==0,P=!k&&t==="scroll",T=k?m!==null?m+"Capture":null:m;k=[];for(var w=c,R;w!==null;){R=w;var D=R.stateNode;if(R.tag===5&&D!==null&&(R=D,T!==null&&(D=Mo(w,T),D!=null&&k.push(Ho(w,D,R)))),P)break;w=w.return}0<k.length&&(m=new S(m,E,null,n,d),p.push({event:m,listeners:k}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",m&&n!==Kh&&(E=n.relatedTarget||n.fromElement)&&(Jr(E)||E[$n]))break e;if((S||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,S?(E=n.relatedTarget||n.toElement,S=c,E=E?Jr(E):null,E!==null&&(P=Rs(E),E!==P||E.tag!==5&&E.tag!==6)&&(E=null)):(S=null,E=c),S!==E)){if(k=Tg,D="onMouseLeave",T="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(k=Sg,D="onPointerLeave",T="onPointerEnter",w="pointer"),P=S==null?m:Ks(S),R=E==null?m:Ks(E),m=new k(D,w+"leave",S,n,d),m.target=P,m.relatedTarget=R,D=null,Jr(d)===c&&(k=new k(T,w+"enter",E,n,d),k.target=R,k.relatedTarget=P,D=k),P=D,S&&E)t:{for(k=S,T=E,w=0,R=k;R;R=Vs(R))w++;for(R=0,D=T;D;D=Vs(D))R++;for(;0<w-R;)k=Vs(k),w--;for(;0<R-w;)T=Vs(T),R--;for(;w--;){if(k===T||T!==null&&k===T.alternate)break t;k=Vs(k),T=Vs(T)}k=null}else k=null;S!==null&&Lg(p,m,S,k,!1),E!==null&&P!==null&&Lg(p,P,E,k,!0)}}e:{if(m=c?Ks(c):window,S=m.nodeName&&m.nodeName.toLowerCase(),S==="select"||S==="input"&&m.type==="file")var U=$R;else if(Cg(m))if(lw)U=KR;else{U=WR;var B=HR}else(S=m.nodeName)&&S.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(U=qR);if(U&&(U=U(t,c))){aw(p,U,n,d);break e}B&&B(t,m,c),t==="focusout"&&(B=m._wrapperState)&&B.controlled&&m.type==="number"&&zh(m,"number",m.value)}switch(B=c?Ks(c):window,t){case"focusin":(Cg(B)||B.contentEditable==="true")&&(Ws=B,ed=c,Io=null);break;case"focusout":Io=ed=Ws=null;break;case"mousedown":td=!0;break;case"contextmenu":case"mouseup":case"dragend":td=!1,Dg(p,n,d);break;case"selectionchange":if(XR)break;case"keydown":case"keyup":Dg(p,n,d)}var v;if(If)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Hs?iw(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(sw&&n.locale!=="ko"&&(Hs||_!=="onCompositionStart"?_==="onCompositionEnd"&&Hs&&(v=rw()):(pr=d,wf="value"in pr?pr.value:pr.textContent,Hs=!0)),B=Xl(c,_),0<B.length&&(_=new Ig(_,t,null,n,d),p.push({event:_,listeners:B}),v?_.data=v:(v=ow(n),v!==null&&(_.data=v)))),(v=UR?FR(t,n):jR(t,n))&&(c=Xl(c,"onBeforeInput"),0<c.length&&(d=new Ig("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=v))}_w(p,e)})}function Ho(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Xl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Mo(t,n),i!=null&&r.unshift(Ho(t,i,s)),i=Mo(t,e),i!=null&&r.push(Ho(t,i,s))),t=t.return}return r}function Vs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Lg(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,s?(u=Mo(n,i),u!=null&&o.unshift(Ho(n,u,l))):s||(u=Mo(n,i),u!=null&&o.push(Ho(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var eA=/\r\n?/g,tA=/\u0000|\uFFFD/g;function Vg(t){return(typeof t=="string"?t:""+t).replace(eA,`
`).replace(tA,"")}function Za(t,e,n){if(e=Vg(e),Vg(t)!==e&&n)throw Error(j(425))}function Yl(){}var nd=null,rd=null;function sd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var id=typeof setTimeout=="function"?setTimeout:void 0,nA=typeof clearTimeout=="function"?clearTimeout:void 0,Mg=typeof Promise=="function"?Promise:void 0,rA=typeof queueMicrotask=="function"?queueMicrotask:typeof Mg<"u"?function(t){return Mg.resolve(null).then(t).catch(sA)}:id;function sA(t){setTimeout(function(){throw t})}function sh(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),jo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);jo(e)}function wr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ug(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ki=Math.random().toString(36).slice(2),yn="__reactFiber$"+ki,Wo="__reactProps$"+ki,$n="__reactContainer$"+ki,od="__reactEvents$"+ki,iA="__reactListeners$"+ki,oA="__reactHandles$"+ki;function Jr(t){var e=t[yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$n]||n[yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ug(t);t!==null;){if(n=t[yn])return n;t=Ug(t)}return e}t=n,n=t.parentNode}return null}function ha(t){return t=t[yn]||t[$n],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ks(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function Fu(t){return t[Wo]||null}var ad=[],Gs=-1;function Fr(t){return{current:t}}function Ae(t){0>Gs||(t.current=ad[Gs],ad[Gs]=null,Gs--)}function we(t,e){Gs++,ad[Gs]=t.current,t.current=e}var Nr={},gt=Fr(Nr),Pt=Fr(!1),cs=Nr;function hi(t,e){var n=t.type.contextTypes;if(!n)return Nr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Nt(t){return t=t.childContextTypes,t!=null}function Jl(){Ae(Pt),Ae(gt)}function Fg(t,e,n){if(gt.current!==Nr)throw Error(j(168));we(gt,e),we(Pt,n)}function ww(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(j(108,HS(t)||"Unknown",s));return De({},n,r)}function Zl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Nr,cs=gt.current,we(gt,t),we(Pt,Pt.current),!0}function jg(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=ww(t,e,cs),r.__reactInternalMemoizedMergedChildContext=t,Ae(Pt),Ae(gt),we(gt,t)):Ae(Pt),we(Pt,n)}var Ln=null,ju=!1,ih=!1;function Ew(t){Ln===null?Ln=[t]:Ln.push(t)}function aA(t){ju=!0,Ew(t)}function jr(){if(!ih&&Ln!==null){ih=!0;var t=0,e=ye;try{var n=Ln;for(ye=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ln=null,ju=!1}catch(s){throw Ln!==null&&(Ln=Ln.slice(t+1)),qv(gf,jr),s}finally{ye=e,ih=!1}}return null}var Qs=[],Xs=0,eu=null,tu=0,zt=[],$t=0,hs=null,Vn=1,Mn="";function Qr(t,e){Qs[Xs++]=tu,Qs[Xs++]=eu,eu=t,tu=e}function Tw(t,e,n){zt[$t++]=Vn,zt[$t++]=Mn,zt[$t++]=hs,hs=t;var r=Vn;t=Mn;var s=32-sn(r)-1;r&=~(1<<s),n+=1;var i=32-sn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Vn=1<<32-sn(e)+s|n<<s|r,Mn=i+t}else Vn=1<<i|n<<s|r,Mn=t}function Rf(t){t.return!==null&&(Qr(t,1),Tw(t,1,0))}function Af(t){for(;t===eu;)eu=Qs[--Xs],Qs[Xs]=null,tu=Qs[--Xs],Qs[Xs]=null;for(;t===hs;)hs=zt[--$t],zt[$t]=null,Mn=zt[--$t],zt[$t]=null,Vn=zt[--$t],zt[$t]=null}var Ut=null,Vt=null,ke=!1,tn=null;function Iw(t,e){var n=qt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Bg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ut=t,Vt=wr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ut=t,Vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=hs!==null?{id:Vn,overflow:Mn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=qt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ut=t,Vt=null,!0):!1;default:return!1}}function ld(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ud(t){if(ke){var e=Vt;if(e){var n=e;if(!Bg(t,e)){if(ld(t))throw Error(j(418));e=wr(n.nextSibling);var r=Ut;e&&Bg(t,e)?Iw(r,n):(t.flags=t.flags&-4097|2,ke=!1,Ut=t)}}else{if(ld(t))throw Error(j(418));t.flags=t.flags&-4097|2,ke=!1,Ut=t}}}function zg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ut=t}function el(t){if(t!==Ut)return!1;if(!ke)return zg(t),ke=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!sd(t.type,t.memoizedProps)),e&&(e=Vt)){if(ld(t))throw Sw(),Error(j(418));for(;e;)Iw(t,e),e=wr(e.nextSibling)}if(zg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Vt=wr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Vt=null}}else Vt=Ut?wr(t.stateNode.nextSibling):null;return!0}function Sw(){for(var t=Vt;t;)t=wr(t.nextSibling)}function di(){Vt=Ut=null,ke=!1}function Cf(t){tn===null?tn=[t]:tn.push(t)}var lA=Xn.ReactCurrentBatchConfig;function ro(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function tl(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $g(t){var e=t._init;return e(t._payload)}function Rw(t){function e(T,w){if(t){var R=T.deletions;R===null?(T.deletions=[w],T.flags|=16):R.push(w)}}function n(T,w){if(!t)return null;for(;w!==null;)e(T,w),w=w.sibling;return null}function r(T,w){for(T=new Map;w!==null;)w.key!==null?T.set(w.key,w):T.set(w.index,w),w=w.sibling;return T}function s(T,w){return T=Sr(T,w),T.index=0,T.sibling=null,T}function i(T,w,R){return T.index=R,t?(R=T.alternate,R!==null?(R=R.index,R<w?(T.flags|=2,w):R):(T.flags|=2,w)):(T.flags|=1048576,w)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function l(T,w,R,D){return w===null||w.tag!==6?(w=dh(R,T.mode,D),w.return=T,w):(w=s(w,R),w.return=T,w)}function u(T,w,R,D){var U=R.type;return U===$s?d(T,w,R.props.children,D,R.key):w!==null&&(w.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===or&&$g(U)===w.type)?(D=s(w,R.props),D.ref=ro(T,w,R),D.return=T,D):(D=Pl(R.type,R.key,R.props,null,T.mode,D),D.ref=ro(T,w,R),D.return=T,D)}function c(T,w,R,D){return w===null||w.tag!==4||w.stateNode.containerInfo!==R.containerInfo||w.stateNode.implementation!==R.implementation?(w=fh(R,T.mode,D),w.return=T,w):(w=s(w,R.children||[]),w.return=T,w)}function d(T,w,R,D,U){return w===null||w.tag!==7?(w=is(R,T.mode,D,U),w.return=T,w):(w=s(w,R),w.return=T,w)}function p(T,w,R){if(typeof w=="string"&&w!==""||typeof w=="number")return w=dh(""+w,T.mode,R),w.return=T,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ha:return R=Pl(w.type,w.key,w.props,null,T.mode,R),R.ref=ro(T,null,w),R.return=T,R;case zs:return w=fh(w,T.mode,R),w.return=T,w;case or:var D=w._init;return p(T,D(w._payload),R)}if(uo(w)||Ji(w))return w=is(w,T.mode,R,null),w.return=T,w;tl(T,w)}return null}function m(T,w,R,D){var U=w!==null?w.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return U!==null?null:l(T,w,""+R,D);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Ha:return R.key===U?u(T,w,R,D):null;case zs:return R.key===U?c(T,w,R,D):null;case or:return U=R._init,m(T,w,U(R._payload),D)}if(uo(R)||Ji(R))return U!==null?null:d(T,w,R,D,null);tl(T,R)}return null}function S(T,w,R,D,U){if(typeof D=="string"&&D!==""||typeof D=="number")return T=T.get(R)||null,l(w,T,""+D,U);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ha:return T=T.get(D.key===null?R:D.key)||null,u(w,T,D,U);case zs:return T=T.get(D.key===null?R:D.key)||null,c(w,T,D,U);case or:var B=D._init;return S(T,w,R,B(D._payload),U)}if(uo(D)||Ji(D))return T=T.get(R)||null,d(w,T,D,U,null);tl(w,D)}return null}function E(T,w,R,D){for(var U=null,B=null,v=w,_=w=0,I=null;v!==null&&_<R.length;_++){v.index>_?(I=v,v=null):I=v.sibling;var A=m(T,v,R[_],D);if(A===null){v===null&&(v=I);break}t&&v&&A.alternate===null&&e(T,v),w=i(A,w,_),B===null?U=A:B.sibling=A,B=A,v=I}if(_===R.length)return n(T,v),ke&&Qr(T,_),U;if(v===null){for(;_<R.length;_++)v=p(T,R[_],D),v!==null&&(w=i(v,w,_),B===null?U=v:B.sibling=v,B=v);return ke&&Qr(T,_),U}for(v=r(T,v);_<R.length;_++)I=S(v,T,_,R[_],D),I!==null&&(t&&I.alternate!==null&&v.delete(I.key===null?_:I.key),w=i(I,w,_),B===null?U=I:B.sibling=I,B=I);return t&&v.forEach(function(C){return e(T,C)}),ke&&Qr(T,_),U}function k(T,w,R,D){var U=Ji(R);if(typeof U!="function")throw Error(j(150));if(R=U.call(R),R==null)throw Error(j(151));for(var B=U=null,v=w,_=w=0,I=null,A=R.next();v!==null&&!A.done;_++,A=R.next()){v.index>_?(I=v,v=null):I=v.sibling;var C=m(T,v,A.value,D);if(C===null){v===null&&(v=I);break}t&&v&&C.alternate===null&&e(T,v),w=i(C,w,_),B===null?U=C:B.sibling=C,B=C,v=I}if(A.done)return n(T,v),ke&&Qr(T,_),U;if(v===null){for(;!A.done;_++,A=R.next())A=p(T,A.value,D),A!==null&&(w=i(A,w,_),B===null?U=A:B.sibling=A,B=A);return ke&&Qr(T,_),U}for(v=r(T,v);!A.done;_++,A=R.next())A=S(v,T,_,A.value,D),A!==null&&(t&&A.alternate!==null&&v.delete(A.key===null?_:A.key),w=i(A,w,_),B===null?U=A:B.sibling=A,B=A);return t&&v.forEach(function(N){return e(T,N)}),ke&&Qr(T,_),U}function P(T,w,R,D){if(typeof R=="object"&&R!==null&&R.type===$s&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case Ha:e:{for(var U=R.key,B=w;B!==null;){if(B.key===U){if(U=R.type,U===$s){if(B.tag===7){n(T,B.sibling),w=s(B,R.props.children),w.return=T,T=w;break e}}else if(B.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===or&&$g(U)===B.type){n(T,B.sibling),w=s(B,R.props),w.ref=ro(T,B,R),w.return=T,T=w;break e}n(T,B);break}else e(T,B);B=B.sibling}R.type===$s?(w=is(R.props.children,T.mode,D,R.key),w.return=T,T=w):(D=Pl(R.type,R.key,R.props,null,T.mode,D),D.ref=ro(T,w,R),D.return=T,T=D)}return o(T);case zs:e:{for(B=R.key;w!==null;){if(w.key===B)if(w.tag===4&&w.stateNode.containerInfo===R.containerInfo&&w.stateNode.implementation===R.implementation){n(T,w.sibling),w=s(w,R.children||[]),w.return=T,T=w;break e}else{n(T,w);break}else e(T,w);w=w.sibling}w=fh(R,T.mode,D),w.return=T,T=w}return o(T);case or:return B=R._init,P(T,w,B(R._payload),D)}if(uo(R))return E(T,w,R,D);if(Ji(R))return k(T,w,R,D);tl(T,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,w!==null&&w.tag===6?(n(T,w.sibling),w=s(w,R),w.return=T,T=w):(n(T,w),w=dh(R,T.mode,D),w.return=T,T=w),o(T)):n(T,w)}return P}var fi=Rw(!0),Aw=Rw(!1),nu=Fr(null),ru=null,Ys=null,kf=null;function Pf(){kf=Ys=ru=null}function Nf(t){var e=nu.current;Ae(nu),t._currentValue=e}function cd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function si(t,e){ru=t,kf=Ys=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(kt=!0),t.firstContext=null)}function Qt(t){var e=t._currentValue;if(kf!==t)if(t={context:t,memoizedValue:e,next:null},Ys===null){if(ru===null)throw Error(j(308));Ys=t,ru.dependencies={lanes:0,firstContext:t}}else Ys=Ys.next=t;return e}var Zr=null;function Of(t){Zr===null?Zr=[t]:Zr.push(t)}function Cw(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Of(e)):(n.next=s.next,s.next=n),e.interleaved=n,Hn(t,r)}function Hn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ar=!1;function Df(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function jn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Er(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,fe&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Hn(t,n)}return s=r.interleaved,s===null?(e.next=e,Of(r)):(e.next=s.next,s.next=e),r.interleaved=e,Hn(t,n)}function Il(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,yf(t,n)}}function Hg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function su(t,e,n,r){var s=t.updateQueue;ar=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(i!==null){var p=s.baseState;o=0,d=c=u=null,l=i;do{var m=l.lane,S=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var E=t,k=l;switch(m=e,S=n,k.tag){case 1:if(E=k.payload,typeof E=="function"){p=E.call(S,p,m);break e}p=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=k.payload,m=typeof E=="function"?E.call(S,p,m):E,m==null)break e;p=De({},p,m);break e;case 2:ar=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=s.effects,m===null?s.effects=[l]:m.push(l))}else S={eventTime:S,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=S,u=p):d=d.next=S,o|=m;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;m=l,l=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);if(d===null&&(u=p),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=d,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);fs|=o,t.lanes=o,t.memoizedState=p}}function Wg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(j(191,s));s.call(r)}}}var da={},En=Fr(da),qo=Fr(da),Ko=Fr(da);function es(t){if(t===da)throw Error(j(174));return t}function xf(t,e){switch(we(Ko,e),we(qo,t),we(En,da),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Hh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Hh(e,t)}Ae(En),we(En,e)}function pi(){Ae(En),Ae(qo),Ae(Ko)}function Pw(t){es(Ko.current);var e=es(En.current),n=Hh(e,t.type);e!==n&&(we(qo,t),we(En,n))}function bf(t){qo.current===t&&(Ae(En),Ae(qo))}var Ne=Fr(0);function iu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var oh=[];function Lf(){for(var t=0;t<oh.length;t++)oh[t]._workInProgressVersionPrimary=null;oh.length=0}var Sl=Xn.ReactCurrentDispatcher,ah=Xn.ReactCurrentBatchConfig,ds=0,Oe=null,Ge=null,et=null,ou=!1,So=!1,Go=0,uA=0;function ut(){throw Error(j(321))}function Vf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!un(t[n],e[n]))return!1;return!0}function Mf(t,e,n,r,s,i){if(ds=i,Oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Sl.current=t===null||t.memoizedState===null?fA:pA,t=n(r,s),So){i=0;do{if(So=!1,Go=0,25<=i)throw Error(j(301));i+=1,et=Ge=null,e.updateQueue=null,Sl.current=mA,t=n(r,s)}while(So)}if(Sl.current=au,e=Ge!==null&&Ge.next!==null,ds=0,et=Ge=Oe=null,ou=!1,e)throw Error(j(300));return t}function Uf(){var t=Go!==0;return Go=0,t}function mn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?Oe.memoizedState=et=t:et=et.next=t,et}function Xt(){if(Ge===null){var t=Oe.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var e=et===null?Oe.memoizedState:et.next;if(e!==null)et=e,Ge=t;else{if(t===null)throw Error(j(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},et===null?Oe.memoizedState=et=t:et=et.next=t}return et}function Qo(t,e){return typeof e=="function"?e(t):e}function lh(t){var e=Xt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=Ge,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,c=i;do{var d=c.lane;if((ds&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Oe.lanes|=d,fs|=d}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=l,un(r,e.memoizedState)||(kt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Oe.lanes|=i,fs|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function uh(t){var e=Xt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);un(i,e.memoizedState)||(kt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Nw(){}function Ow(t,e){var n=Oe,r=Xt(),s=e(),i=!un(r.memoizedState,s);if(i&&(r.memoizedState=s,kt=!0),r=r.queue,Ff(bw.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||et!==null&&et.memoizedState.tag&1){if(n.flags|=2048,Xo(9,xw.bind(null,n,r,s,e),void 0,null),tt===null)throw Error(j(349));ds&30||Dw(n,e,s)}return s}function Dw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function xw(t,e,n,r){e.value=n,e.getSnapshot=r,Lw(e)&&Vw(t)}function bw(t,e,n){return n(function(){Lw(e)&&Vw(t)})}function Lw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!un(t,n)}catch{return!0}}function Vw(t){var e=Hn(t,1);e!==null&&on(e,t,1,-1)}function qg(t){var e=mn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:t},e.queue=t,t=t.dispatch=dA.bind(null,Oe,t),[e.memoizedState,t]}function Xo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Mw(){return Xt().memoizedState}function Rl(t,e,n,r){var s=mn();Oe.flags|=t,s.memoizedState=Xo(1|e,n,void 0,r===void 0?null:r)}function Bu(t,e,n,r){var s=Xt();r=r===void 0?null:r;var i=void 0;if(Ge!==null){var o=Ge.memoizedState;if(i=o.destroy,r!==null&&Vf(r,o.deps)){s.memoizedState=Xo(e,n,i,r);return}}Oe.flags|=t,s.memoizedState=Xo(1|e,n,i,r)}function Kg(t,e){return Rl(8390656,8,t,e)}function Ff(t,e){return Bu(2048,8,t,e)}function Uw(t,e){return Bu(4,2,t,e)}function Fw(t,e){return Bu(4,4,t,e)}function jw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Bw(t,e,n){return n=n!=null?n.concat([t]):null,Bu(4,4,jw.bind(null,e,t),n)}function jf(){}function zw(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function $w(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Hw(t,e,n){return ds&21?(un(n,e)||(n=Qv(),Oe.lanes|=n,fs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,kt=!0),t.memoizedState=n)}function cA(t,e){var n=ye;ye=n!==0&&4>n?n:4,t(!0);var r=ah.transition;ah.transition={};try{t(!1),e()}finally{ye=n,ah.transition=r}}function Ww(){return Xt().memoizedState}function hA(t,e,n){var r=Ir(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qw(t))Kw(e,n);else if(n=Cw(t,e,n,r),n!==null){var s=It();on(n,t,r,s),Gw(n,e,r)}}function dA(t,e,n){var r=Ir(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qw(t))Kw(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,un(l,o)){var u=e.interleaved;u===null?(s.next=s,Of(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=Cw(t,e,s,r),n!==null&&(s=It(),on(n,t,r,s),Gw(n,e,r))}}function qw(t){var e=t.alternate;return t===Oe||e!==null&&e===Oe}function Kw(t,e){So=ou=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Gw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,yf(t,n)}}var au={readContext:Qt,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useInsertionEffect:ut,useLayoutEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useMutableSource:ut,useSyncExternalStore:ut,useId:ut,unstable_isNewReconciler:!1},fA={readContext:Qt,useCallback:function(t,e){return mn().memoizedState=[t,e===void 0?null:e],t},useContext:Qt,useEffect:Kg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Rl(4194308,4,jw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Rl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Rl(4,2,t,e)},useMemo:function(t,e){var n=mn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=mn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=hA.bind(null,Oe,t),[r.memoizedState,t]},useRef:function(t){var e=mn();return t={current:t},e.memoizedState=t},useState:qg,useDebugValue:jf,useDeferredValue:function(t){return mn().memoizedState=t},useTransition:function(){var t=qg(!1),e=t[0];return t=cA.bind(null,t[1]),mn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Oe,s=mn();if(ke){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),tt===null)throw Error(j(349));ds&30||Dw(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Kg(bw.bind(null,r,i,t),[t]),r.flags|=2048,Xo(9,xw.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=mn(),e=tt.identifierPrefix;if(ke){var n=Mn,r=Vn;n=(r&~(1<<32-sn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Go++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=uA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},pA={readContext:Qt,useCallback:zw,useContext:Qt,useEffect:Ff,useImperativeHandle:Bw,useInsertionEffect:Uw,useLayoutEffect:Fw,useMemo:$w,useReducer:lh,useRef:Mw,useState:function(){return lh(Qo)},useDebugValue:jf,useDeferredValue:function(t){var e=Xt();return Hw(e,Ge.memoizedState,t)},useTransition:function(){var t=lh(Qo)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:Nw,useSyncExternalStore:Ow,useId:Ww,unstable_isNewReconciler:!1},mA={readContext:Qt,useCallback:zw,useContext:Qt,useEffect:Ff,useImperativeHandle:Bw,useInsertionEffect:Uw,useLayoutEffect:Fw,useMemo:$w,useReducer:uh,useRef:Mw,useState:function(){return uh(Qo)},useDebugValue:jf,useDeferredValue:function(t){var e=Xt();return Ge===null?e.memoizedState=t:Hw(e,Ge.memoizedState,t)},useTransition:function(){var t=uh(Qo)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:Nw,useSyncExternalStore:Ow,useId:Ww,unstable_isNewReconciler:!1};function Zt(t,e){if(t&&t.defaultProps){e=De({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function hd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:De({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var zu={isMounted:function(t){return(t=t._reactInternals)?Rs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=It(),s=Ir(t),i=jn(r,s);i.payload=e,n!=null&&(i.callback=n),e=Er(t,i,s),e!==null&&(on(e,t,s,r),Il(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=It(),s=Ir(t),i=jn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Er(t,i,s),e!==null&&(on(e,t,s,r),Il(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=It(),r=Ir(t),s=jn(n,r);s.tag=2,e!=null&&(s.callback=e),e=Er(t,s,r),e!==null&&(on(e,t,r,n),Il(e,t,r))}};function Gg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!zo(n,r)||!zo(s,i):!0}function Qw(t,e,n){var r=!1,s=Nr,i=e.contextType;return typeof i=="object"&&i!==null?i=Qt(i):(s=Nt(e)?cs:gt.current,r=e.contextTypes,i=(r=r!=null)?hi(t,s):Nr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=zu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Qg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&zu.enqueueReplaceState(e,e.state,null)}function dd(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Df(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Qt(i):(i=Nt(e)?cs:gt.current,s.context=hi(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(hd(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&zu.enqueueReplaceState(s,s.state,null),su(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function mi(t,e){try{var n="",r=e;do n+=$S(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function ch(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function fd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var gA=typeof WeakMap=="function"?WeakMap:Map;function Xw(t,e,n){n=jn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){uu||(uu=!0,Id=r),fd(t,e)},n}function Yw(t,e,n){n=jn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){fd(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){fd(t,e),typeof r!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Xg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new gA;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=NA.bind(null,t,e,n),e.then(t,t))}function Yg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jg(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=jn(-1,1),e.tag=2,Er(n,e,1))),n.lanes|=1),t)}var yA=Xn.ReactCurrentOwner,kt=!1;function Et(t,e,n,r){e.child=t===null?Aw(e,null,n,r):fi(e,t.child,n,r)}function Zg(t,e,n,r,s){n=n.render;var i=e.ref;return si(e,s),r=Mf(t,e,n,r,i,s),n=Uf(),t!==null&&!kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Wn(t,e,s)):(ke&&n&&Rf(e),e.flags|=1,Et(t,e,r,s),e.child)}function ey(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Gf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Jw(t,e,i,r,s)):(t=Pl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:zo,n(o,r)&&t.ref===e.ref)return Wn(t,e,s)}return e.flags|=1,t=Sr(i,r),t.ref=e.ref,t.return=e,e.child=t}function Jw(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(zo(i,r)&&t.ref===e.ref)if(kt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(kt=!0);else return e.lanes=t.lanes,Wn(t,e,s)}return pd(t,e,n,r,s)}function Zw(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(Zs,Lt),Lt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,we(Zs,Lt),Lt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,we(Zs,Lt),Lt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,we(Zs,Lt),Lt|=r;return Et(t,e,s,n),e.child}function eE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pd(t,e,n,r,s){var i=Nt(n)?cs:gt.current;return i=hi(e,i),si(e,s),n=Mf(t,e,n,r,i,s),r=Uf(),t!==null&&!kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Wn(t,e,s)):(ke&&r&&Rf(e),e.flags|=1,Et(t,e,n,s),e.child)}function ty(t,e,n,r,s){if(Nt(n)){var i=!0;Zl(e)}else i=!1;if(si(e,s),e.stateNode===null)Al(t,e),Qw(e,n,r),dd(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Qt(c):(c=Nt(n)?cs:gt.current,c=hi(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Qg(e,o,r,c),ar=!1;var m=e.memoizedState;o.state=m,su(e,r,o,s),u=e.memoizedState,l!==r||m!==u||Pt.current||ar?(typeof d=="function"&&(hd(e,n,d,r),u=e.memoizedState),(l=ar||Gg(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,kw(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Zt(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Qt(u):(u=Nt(n)?cs:gt.current,u=hi(e,u));var S=n.getDerivedStateFromProps;(d=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Qg(e,o,r,u),ar=!1,m=e.memoizedState,o.state=m,su(e,r,o,s);var E=e.memoizedState;l!==p||m!==E||Pt.current||ar?(typeof S=="function"&&(hd(e,n,S,r),E=e.memoizedState),(c=ar||Gg(e,n,c,r,m,E,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=E),o.props=r,o.state=E,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return md(t,e,n,r,i,s)}function md(t,e,n,r,s,i){eE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&jg(e,n,!1),Wn(t,e,i);r=e.stateNode,yA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=fi(e,t.child,null,i),e.child=fi(e,null,l,i)):Et(t,e,l,i),e.memoizedState=r.state,s&&jg(e,n,!0),e.child}function tE(t){var e=t.stateNode;e.pendingContext?Fg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Fg(t,e.context,!1),xf(t,e.containerInfo)}function ny(t,e,n,r,s){return di(),Cf(s),e.flags|=256,Et(t,e,n,r),e.child}var gd={dehydrated:null,treeContext:null,retryLane:0};function yd(t){return{baseLanes:t,cachePool:null,transitions:null}}function nE(t,e,n){var r=e.pendingProps,s=Ne.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),we(Ne,s&1),t===null)return ud(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Wu(o,r,0,null),t=is(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=yd(n),e.memoizedState=gd,t):Bf(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return _A(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Sr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Sr(l,i):(i=is(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?yd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=gd,r}return i=t.child,t=i.sibling,r=Sr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Bf(t,e){return e=Wu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function nl(t,e,n,r){return r!==null&&Cf(r),fi(e,t.child,null,n),t=Bf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function _A(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=ch(Error(j(422))),nl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Wu({mode:"visible",children:r.children},s,0,null),i=is(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&fi(e,t.child,null,o),e.child.memoizedState=yd(o),e.memoizedState=gd,i);if(!(e.mode&1))return nl(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(j(419)),r=ch(i,r,void 0),nl(t,e,o,r)}if(l=(o&t.childLanes)!==0,kt||l){if(r=tt,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Hn(t,s),on(r,t,s,-1))}return Kf(),r=ch(Error(j(421))),nl(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=OA.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Vt=wr(s.nextSibling),Ut=e,ke=!0,tn=null,t!==null&&(zt[$t++]=Vn,zt[$t++]=Mn,zt[$t++]=hs,Vn=t.id,Mn=t.overflow,hs=e),e=Bf(e,r.children),e.flags|=4096,e)}function ry(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),cd(t.return,e,n)}function hh(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function rE(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Et(t,e,r.children,n),r=Ne.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ry(t,n,e);else if(t.tag===19)ry(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(we(Ne,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&iu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),hh(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&iu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}hh(e,!0,n,null,i);break;case"together":hh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Al(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),fs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=Sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function vA(t,e,n){switch(e.tag){case 3:tE(e),di();break;case 5:Pw(e);break;case 1:Nt(e.type)&&Zl(e);break;case 4:xf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;we(nu,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(we(Ne,Ne.current&1),e.flags|=128,null):n&e.child.childLanes?nE(t,e,n):(we(Ne,Ne.current&1),t=Wn(t,e,n),t!==null?t.sibling:null);we(Ne,Ne.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return rE(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),we(Ne,Ne.current),r)break;return null;case 22:case 23:return e.lanes=0,Zw(t,e,n)}return Wn(t,e,n)}var sE,_d,iE,oE;sE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_d=function(){};iE=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,es(En.current);var i=null;switch(n){case"input":s=jh(t,s),r=jh(t,r),i=[];break;case"select":s=De({},s,{value:void 0}),r=De({},r,{value:void 0}),i=[];break;case"textarea":s=$h(t,s),r=$h(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Yl)}Wh(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Lo.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Lo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Te("scroll",t),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};oE=function(t,e,n,r){n!==r&&(e.flags|=4)};function so(t,e){if(!ke)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function wA(t,e,n){var r=e.pendingProps;switch(Af(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(e),null;case 1:return Nt(e.type)&&Jl(),ct(e),null;case 3:return r=e.stateNode,pi(),Ae(Pt),Ae(gt),Lf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(el(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,tn!==null&&(Ad(tn),tn=null))),_d(t,e),ct(e),null;case 5:bf(e);var s=es(Ko.current);if(n=e.type,t!==null&&e.stateNode!=null)iE(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return ct(e),null}if(t=es(En.current),el(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[yn]=e,r[Wo]=i,t=(e.mode&1)!==0,n){case"dialog":Te("cancel",r),Te("close",r);break;case"iframe":case"object":case"embed":Te("load",r);break;case"video":case"audio":for(s=0;s<ho.length;s++)Te(ho[s],r);break;case"source":Te("error",r);break;case"img":case"image":case"link":Te("error",r),Te("load",r);break;case"details":Te("toggle",r);break;case"input":dg(r,i),Te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Te("invalid",r);break;case"textarea":pg(r,i),Te("invalid",r)}Wh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Za(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Za(r.textContent,l,t),s=["children",""+l]):Lo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Te("scroll",r)}switch(n){case"input":Wa(r),fg(r,i,!0);break;case"textarea":Wa(r),mg(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Yl)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=bv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[yn]=e,t[Wo]=r,sE(t,e,!1,!1),e.stateNode=t;e:{switch(o=qh(n,r),n){case"dialog":Te("cancel",t),Te("close",t),s=r;break;case"iframe":case"object":case"embed":Te("load",t),s=r;break;case"video":case"audio":for(s=0;s<ho.length;s++)Te(ho[s],t);s=r;break;case"source":Te("error",t),s=r;break;case"img":case"image":case"link":Te("error",t),Te("load",t),s=r;break;case"details":Te("toggle",t),s=r;break;case"input":dg(t,r),s=jh(t,r),Te("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=De({},r,{value:void 0}),Te("invalid",t);break;case"textarea":pg(t,r),s=$h(t,r),Te("invalid",t);break;default:s=r}Wh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?Mv(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Lv(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Vo(t,u):typeof u=="number"&&Vo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Lo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Te("scroll",t):u!=null&&hf(t,i,u,o))}switch(n){case"input":Wa(t),fg(t,r,!1);break;case"textarea":Wa(t),mg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Pr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?ei(t,!!r.multiple,i,!1):r.defaultValue!=null&&ei(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Yl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ct(e),null;case 6:if(t&&e.stateNode!=null)oE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=es(Ko.current),es(En.current),el(e)){if(r=e.stateNode,n=e.memoizedProps,r[yn]=e,(i=r.nodeValue!==n)&&(t=Ut,t!==null))switch(t.tag){case 3:Za(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Za(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yn]=e,e.stateNode=r}return ct(e),null;case 13:if(Ae(Ne),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ke&&Vt!==null&&e.mode&1&&!(e.flags&128))Sw(),di(),e.flags|=98560,i=!1;else if(i=el(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(j(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[yn]=e}else di(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ct(e),i=!1}else tn!==null&&(Ad(tn),tn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ne.current&1?Xe===0&&(Xe=3):Kf())),e.updateQueue!==null&&(e.flags|=4),ct(e),null);case 4:return pi(),_d(t,e),t===null&&$o(e.stateNode.containerInfo),ct(e),null;case 10:return Nf(e.type._context),ct(e),null;case 17:return Nt(e.type)&&Jl(),ct(e),null;case 19:if(Ae(Ne),i=e.memoizedState,i===null)return ct(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)so(i,!1);else{if(Xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=iu(t),o!==null){for(e.flags|=128,so(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return we(Ne,Ne.current&1|2),e.child}t=t.sibling}i.tail!==null&&Fe()>gi&&(e.flags|=128,r=!0,so(i,!1),e.lanes=4194304)}else{if(!r)if(t=iu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),so(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ke)return ct(e),null}else 2*Fe()-i.renderingStartTime>gi&&n!==1073741824&&(e.flags|=128,r=!0,so(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Fe(),e.sibling=null,n=Ne.current,we(Ne,r?n&1|2:n&1),e):(ct(e),null);case 22:case 23:return qf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Lt&1073741824&&(ct(e),e.subtreeFlags&6&&(e.flags|=8192)):ct(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function EA(t,e){switch(Af(e),e.tag){case 1:return Nt(e.type)&&Jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return pi(),Ae(Pt),Ae(gt),Lf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return bf(e),null;case 13:if(Ae(Ne),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));di()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ae(Ne),null;case 4:return pi(),null;case 10:return Nf(e.type._context),null;case 22:case 23:return qf(),null;case 24:return null;default:return null}}var rl=!1,ft=!1,TA=typeof WeakSet=="function"?WeakSet:Set,G=null;function Js(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(t,e,r)}else n.current=null}function vd(t,e,n){try{n()}catch(r){Le(t,e,r)}}var sy=!1;function IA(t,e){if(nd=Gl,t=hw(),Sf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var S;p!==n||s!==0&&p.nodeType!==3||(l=o+s),p!==i||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(S=p.firstChild)!==null;)m=p,p=S;for(;;){if(p===t)break t;if(m===n&&++c===s&&(l=o),m===i&&++d===r&&(u=o),(S=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=S}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(rd={focusedElem:t,selectionRange:n},Gl=!1,G=e;G!==null;)if(e=G,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,G=t;else for(;G!==null;){e=G;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var k=E.memoizedProps,P=E.memoizedState,T=e.stateNode,w=T.getSnapshotBeforeUpdate(e.elementType===e.type?k:Zt(e.type,k),P);T.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var R=e.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(D){Le(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,G=t;break}G=e.return}return E=sy,sy=!1,E}function Ro(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&vd(e,n,i)}s=s.next}while(s!==r)}}function $u(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function wd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function aE(t){var e=t.alternate;e!==null&&(t.alternate=null,aE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[yn],delete e[Wo],delete e[od],delete e[iA],delete e[oA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function lE(t){return t.tag===5||t.tag===3||t.tag===4}function iy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||lE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ed(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Yl));else if(r!==4&&(t=t.child,t!==null))for(Ed(t,e,n),t=t.sibling;t!==null;)Ed(t,e,n),t=t.sibling}function Td(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Td(t,e,n),t=t.sibling;t!==null;)Td(t,e,n),t=t.sibling}var nt=null,en=!1;function sr(t,e,n){for(n=n.child;n!==null;)uE(t,e,n),n=n.sibling}function uE(t,e,n){if(wn&&typeof wn.onCommitFiberUnmount=="function")try{wn.onCommitFiberUnmount(Lu,n)}catch{}switch(n.tag){case 5:ft||Js(n,e);case 6:var r=nt,s=en;nt=null,sr(t,e,n),nt=r,en=s,nt!==null&&(en?(t=nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):nt.removeChild(n.stateNode));break;case 18:nt!==null&&(en?(t=nt,n=n.stateNode,t.nodeType===8?sh(t.parentNode,n):t.nodeType===1&&sh(t,n),jo(t)):sh(nt,n.stateNode));break;case 4:r=nt,s=en,nt=n.stateNode.containerInfo,en=!0,sr(t,e,n),nt=r,en=s;break;case 0:case 11:case 14:case 15:if(!ft&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&vd(n,e,o),s=s.next}while(s!==r)}sr(t,e,n);break;case 1:if(!ft&&(Js(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Le(n,e,l)}sr(t,e,n);break;case 21:sr(t,e,n);break;case 22:n.mode&1?(ft=(r=ft)||n.memoizedState!==null,sr(t,e,n),ft=r):sr(t,e,n);break;default:sr(t,e,n)}}function oy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new TA),e.forEach(function(r){var s=DA.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Jt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:nt=l.stateNode,en=!1;break e;case 3:nt=l.stateNode.containerInfo,en=!0;break e;case 4:nt=l.stateNode.containerInfo,en=!0;break e}l=l.return}if(nt===null)throw Error(j(160));uE(i,o,s),nt=null,en=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){Le(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)cE(e,t),e=e.sibling}function cE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jt(e,t),fn(t),r&4){try{Ro(3,t,t.return),$u(3,t)}catch(k){Le(t,t.return,k)}try{Ro(5,t,t.return)}catch(k){Le(t,t.return,k)}}break;case 1:Jt(e,t),fn(t),r&512&&n!==null&&Js(n,n.return);break;case 5:if(Jt(e,t),fn(t),r&512&&n!==null&&Js(n,n.return),t.flags&32){var s=t.stateNode;try{Vo(s,"")}catch(k){Le(t,t.return,k)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Dv(s,i),qh(l,o);var c=qh(l,i);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?Mv(s,p):d==="dangerouslySetInnerHTML"?Lv(s,p):d==="children"?Vo(s,p):hf(s,d,p,c)}switch(l){case"input":Bh(s,i);break;case"textarea":xv(s,i);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var S=i.value;S!=null?ei(s,!!i.multiple,S,!1):m!==!!i.multiple&&(i.defaultValue!=null?ei(s,!!i.multiple,i.defaultValue,!0):ei(s,!!i.multiple,i.multiple?[]:"",!1))}s[Wo]=i}catch(k){Le(t,t.return,k)}}break;case 6:if(Jt(e,t),fn(t),r&4){if(t.stateNode===null)throw Error(j(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(k){Le(t,t.return,k)}}break;case 3:if(Jt(e,t),fn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{jo(e.containerInfo)}catch(k){Le(t,t.return,k)}break;case 4:Jt(e,t),fn(t);break;case 13:Jt(e,t),fn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Hf=Fe())),r&4&&oy(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(ft=(c=ft)||d,Jt(e,t),ft=c):Jt(e,t),fn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(G=t,d=t.child;d!==null;){for(p=G=d;G!==null;){switch(m=G,S=m.child,m.tag){case 0:case 11:case 14:case 15:Ro(4,m,m.return);break;case 1:Js(m,m.return);var E=m.stateNode;if(typeof E.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(k){Le(r,n,k)}}break;case 5:Js(m,m.return);break;case 22:if(m.memoizedState!==null){ly(p);continue}}S!==null?(S.return=m,G=S):ly(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{s=p.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Vv("display",o))}catch(k){Le(t,t.return,k)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(k){Le(t,t.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Jt(e,t),fn(t),r&4&&oy(t);break;case 21:break;default:Jt(e,t),fn(t)}}function fn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(lE(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Vo(s,""),r.flags&=-33);var i=iy(t);Td(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=iy(t);Ed(t,l,o);break;default:throw Error(j(161))}}catch(u){Le(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function SA(t,e,n){G=t,hE(t)}function hE(t,e,n){for(var r=(t.mode&1)!==0;G!==null;){var s=G,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||rl;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||ft;l=rl;var c=ft;if(rl=o,(ft=u)&&!c)for(G=s;G!==null;)o=G,u=o.child,o.tag===22&&o.memoizedState!==null?uy(s):u!==null?(u.return=o,G=u):uy(s);for(;i!==null;)G=i,hE(i),i=i.sibling;G=s,rl=l,ft=c}ay(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,G=i):ay(t)}}function ay(t){for(;G!==null;){var e=G;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ft||$u(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ft)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Zt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Wg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Wg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&jo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ft||e.flags&512&&wd(e)}catch(m){Le(e,e.return,m)}}if(e===t){G=null;break}if(n=e.sibling,n!==null){n.return=e.return,G=n;break}G=e.return}}function ly(t){for(;G!==null;){var e=G;if(e===t){G=null;break}var n=e.sibling;if(n!==null){n.return=e.return,G=n;break}G=e.return}}function uy(t){for(;G!==null;){var e=G;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{$u(4,e)}catch(u){Le(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Le(e,s,u)}}var i=e.return;try{wd(e)}catch(u){Le(e,i,u)}break;case 5:var o=e.return;try{wd(e)}catch(u){Le(e,o,u)}}}catch(u){Le(e,e.return,u)}if(e===t){G=null;break}var l=e.sibling;if(l!==null){l.return=e.return,G=l;break}G=e.return}}var RA=Math.ceil,lu=Xn.ReactCurrentDispatcher,zf=Xn.ReactCurrentOwner,Kt=Xn.ReactCurrentBatchConfig,fe=0,tt=null,$e=null,it=0,Lt=0,Zs=Fr(0),Xe=0,Yo=null,fs=0,Hu=0,$f=0,Ao=null,Ct=null,Hf=0,gi=1/0,bn=null,uu=!1,Id=null,Tr=null,sl=!1,mr=null,cu=0,Co=0,Sd=null,Cl=-1,kl=0;function It(){return fe&6?Fe():Cl!==-1?Cl:Cl=Fe()}function Ir(t){return t.mode&1?fe&2&&it!==0?it&-it:lA.transition!==null?(kl===0&&(kl=Qv()),kl):(t=ye,t!==0||(t=window.event,t=t===void 0?16:nw(t.type)),t):1}function on(t,e,n,r){if(50<Co)throw Co=0,Sd=null,Error(j(185));ua(t,n,r),(!(fe&2)||t!==tt)&&(t===tt&&(!(fe&2)&&(Hu|=n),Xe===4&&ur(t,it)),Ot(t,r),n===1&&fe===0&&!(e.mode&1)&&(gi=Fe()+500,ju&&jr()))}function Ot(t,e){var n=t.callbackNode;lR(t,e);var r=Kl(t,t===tt?it:0);if(r===0)n!==null&&_g(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&_g(n),e===1)t.tag===0?aA(cy.bind(null,t)):Ew(cy.bind(null,t)),rA(function(){!(fe&6)&&jr()}),n=null;else{switch(Xv(r)){case 1:n=gf;break;case 4:n=Kv;break;case 16:n=ql;break;case 536870912:n=Gv;break;default:n=ql}n=vE(n,dE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function dE(t,e){if(Cl=-1,kl=0,fe&6)throw Error(j(327));var n=t.callbackNode;if(ii()&&t.callbackNode!==n)return null;var r=Kl(t,t===tt?it:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=hu(t,r);else{e=r;var s=fe;fe|=2;var i=pE();(tt!==t||it!==e)&&(bn=null,gi=Fe()+500,ss(t,e));do try{kA();break}catch(l){fE(t,l)}while(!0);Pf(),lu.current=i,fe=s,$e!==null?e=0:(tt=null,it=0,e=Xe)}if(e!==0){if(e===2&&(s=Yh(t),s!==0&&(r=s,e=Rd(t,s))),e===1)throw n=Yo,ss(t,0),ur(t,r),Ot(t,Fe()),n;if(e===6)ur(t,r);else{if(s=t.current.alternate,!(r&30)&&!AA(s)&&(e=hu(t,r),e===2&&(i=Yh(t),i!==0&&(r=i,e=Rd(t,i))),e===1))throw n=Yo,ss(t,0),ur(t,r),Ot(t,Fe()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:Xr(t,Ct,bn);break;case 3:if(ur(t,r),(r&130023424)===r&&(e=Hf+500-Fe(),10<e)){if(Kl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){It(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=id(Xr.bind(null,t,Ct,bn),e);break}Xr(t,Ct,bn);break;case 4:if(ur(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-sn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*RA(r/1960))-r,10<r){t.timeoutHandle=id(Xr.bind(null,t,Ct,bn),r);break}Xr(t,Ct,bn);break;case 5:Xr(t,Ct,bn);break;default:throw Error(j(329))}}}return Ot(t,Fe()),t.callbackNode===n?dE.bind(null,t):null}function Rd(t,e){var n=Ao;return t.current.memoizedState.isDehydrated&&(ss(t,e).flags|=256),t=hu(t,e),t!==2&&(e=Ct,Ct=n,e!==null&&Ad(e)),t}function Ad(t){Ct===null?Ct=t:Ct.push.apply(Ct,t)}function AA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!un(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ur(t,e){for(e&=~$f,e&=~Hu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-sn(e),r=1<<n;t[n]=-1,e&=~r}}function cy(t){if(fe&6)throw Error(j(327));ii();var e=Kl(t,0);if(!(e&1))return Ot(t,Fe()),null;var n=hu(t,e);if(t.tag!==0&&n===2){var r=Yh(t);r!==0&&(e=r,n=Rd(t,r))}if(n===1)throw n=Yo,ss(t,0),ur(t,e),Ot(t,Fe()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xr(t,Ct,bn),Ot(t,Fe()),null}function Wf(t,e){var n=fe;fe|=1;try{return t(e)}finally{fe=n,fe===0&&(gi=Fe()+500,ju&&jr())}}function ps(t){mr!==null&&mr.tag===0&&!(fe&6)&&ii();var e=fe;fe|=1;var n=Kt.transition,r=ye;try{if(Kt.transition=null,ye=1,t)return t()}finally{ye=r,Kt.transition=n,fe=e,!(fe&6)&&jr()}}function qf(){Lt=Zs.current,Ae(Zs)}function ss(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,nA(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(Af(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jl();break;case 3:pi(),Ae(Pt),Ae(gt),Lf();break;case 5:bf(r);break;case 4:pi();break;case 13:Ae(Ne);break;case 19:Ae(Ne);break;case 10:Nf(r.type._context);break;case 22:case 23:qf()}n=n.return}if(tt=t,$e=t=Sr(t.current,null),it=Lt=e,Xe=0,Yo=null,$f=Hu=fs=0,Ct=Ao=null,Zr!==null){for(e=0;e<Zr.length;e++)if(n=Zr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Zr=null}return t}function fE(t,e){do{var n=$e;try{if(Pf(),Sl.current=au,ou){for(var r=Oe.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}ou=!1}if(ds=0,et=Ge=Oe=null,So=!1,Go=0,zf.current=null,n===null||n.return===null){Xe=1,Yo=e,$e=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=it,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var S=Yg(o);if(S!==null){S.flags&=-257,Jg(S,o,l,i,e),S.mode&1&&Xg(i,c,e),e=S,u=c;var E=e.updateQueue;if(E===null){var k=new Set;k.add(u),e.updateQueue=k}else E.add(u);break e}else{if(!(e&1)){Xg(i,c,e),Kf();break e}u=Error(j(426))}}else if(ke&&l.mode&1){var P=Yg(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Jg(P,o,l,i,e),Cf(mi(u,l));break e}}i=u=mi(u,l),Xe!==4&&(Xe=2),Ao===null?Ao=[i]:Ao.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var T=Xw(i,u,e);Hg(i,T);break e;case 1:l=u;var w=i.type,R=i.stateNode;if(!(i.flags&128)&&(typeof w.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(Tr===null||!Tr.has(R)))){i.flags|=65536,e&=-e,i.lanes|=e;var D=Yw(i,l,e);Hg(i,D);break e}}i=i.return}while(i!==null)}gE(n)}catch(U){e=U,$e===n&&n!==null&&($e=n=n.return);continue}break}while(!0)}function pE(){var t=lu.current;return lu.current=au,t===null?au:t}function Kf(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),tt===null||!(fs&268435455)&&!(Hu&268435455)||ur(tt,it)}function hu(t,e){var n=fe;fe|=2;var r=pE();(tt!==t||it!==e)&&(bn=null,ss(t,e));do try{CA();break}catch(s){fE(t,s)}while(!0);if(Pf(),fe=n,lu.current=r,$e!==null)throw Error(j(261));return tt=null,it=0,Xe}function CA(){for(;$e!==null;)mE($e)}function kA(){for(;$e!==null&&!ZS();)mE($e)}function mE(t){var e=_E(t.alternate,t,Lt);t.memoizedProps=t.pendingProps,e===null?gE(t):$e=e,zf.current=null}function gE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=EA(n,e),n!==null){n.flags&=32767,$e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Xe=6,$e=null;return}}else if(n=wA(n,e,Lt),n!==null){$e=n;return}if(e=e.sibling,e!==null){$e=e;return}$e=e=t}while(e!==null);Xe===0&&(Xe=5)}function Xr(t,e,n){var r=ye,s=Kt.transition;try{Kt.transition=null,ye=1,PA(t,e,n,r)}finally{Kt.transition=s,ye=r}return null}function PA(t,e,n,r){do ii();while(mr!==null);if(fe&6)throw Error(j(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(uR(t,i),t===tt&&($e=tt=null,it=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||sl||(sl=!0,vE(ql,function(){return ii(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Kt.transition,Kt.transition=null;var o=ye;ye=1;var l=fe;fe|=4,zf.current=null,IA(t,n),cE(n,t),QR(rd),Gl=!!nd,rd=nd=null,t.current=n,SA(n),eR(),fe=l,ye=o,Kt.transition=i}else t.current=n;if(sl&&(sl=!1,mr=t,cu=s),i=t.pendingLanes,i===0&&(Tr=null),rR(n.stateNode),Ot(t,Fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(uu)throw uu=!1,t=Id,Id=null,t;return cu&1&&t.tag!==0&&ii(),i=t.pendingLanes,i&1?t===Sd?Co++:(Co=0,Sd=t):Co=0,jr(),null}function ii(){if(mr!==null){var t=Xv(cu),e=Kt.transition,n=ye;try{if(Kt.transition=null,ye=16>t?16:t,mr===null)var r=!1;else{if(t=mr,mr=null,cu=0,fe&6)throw Error(j(331));var s=fe;for(fe|=4,G=t.current;G!==null;){var i=G,o=i.child;if(G.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(G=c;G!==null;){var d=G;switch(d.tag){case 0:case 11:case 15:Ro(8,d,i)}var p=d.child;if(p!==null)p.return=d,G=p;else for(;G!==null;){d=G;var m=d.sibling,S=d.return;if(aE(d),d===c){G=null;break}if(m!==null){m.return=S,G=m;break}G=S}}}var E=i.alternate;if(E!==null){var k=E.child;if(k!==null){E.child=null;do{var P=k.sibling;k.sibling=null,k=P}while(k!==null)}}G=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,G=o;else e:for(;G!==null;){if(i=G,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ro(9,i,i.return)}var T=i.sibling;if(T!==null){T.return=i.return,G=T;break e}G=i.return}}var w=t.current;for(G=w;G!==null;){o=G;var R=o.child;if(o.subtreeFlags&2064&&R!==null)R.return=o,G=R;else e:for(o=w;G!==null;){if(l=G,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:$u(9,l)}}catch(U){Le(l,l.return,U)}if(l===o){G=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,G=D;break e}G=l.return}}if(fe=s,jr(),wn&&typeof wn.onPostCommitFiberRoot=="function")try{wn.onPostCommitFiberRoot(Lu,t)}catch{}r=!0}return r}finally{ye=n,Kt.transition=e}}return!1}function hy(t,e,n){e=mi(n,e),e=Xw(t,e,1),t=Er(t,e,1),e=It(),t!==null&&(ua(t,1,e),Ot(t,e))}function Le(t,e,n){if(t.tag===3)hy(t,t,n);else for(;e!==null;){if(e.tag===3){hy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Tr===null||!Tr.has(r))){t=mi(n,t),t=Yw(e,t,1),e=Er(e,t,1),t=It(),e!==null&&(ua(e,1,t),Ot(e,t));break}}e=e.return}}function NA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=It(),t.pingedLanes|=t.suspendedLanes&n,tt===t&&(it&n)===n&&(Xe===4||Xe===3&&(it&130023424)===it&&500>Fe()-Hf?ss(t,0):$f|=n),Ot(t,e)}function yE(t,e){e===0&&(t.mode&1?(e=Ga,Ga<<=1,!(Ga&130023424)&&(Ga=4194304)):e=1);var n=It();t=Hn(t,e),t!==null&&(ua(t,e,n),Ot(t,n))}function OA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),yE(t,n)}function DA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),yE(t,n)}var _E;_E=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Pt.current)kt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return kt=!1,vA(t,e,n);kt=!!(t.flags&131072)}else kt=!1,ke&&e.flags&1048576&&Tw(e,tu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Al(t,e),t=e.pendingProps;var s=hi(e,gt.current);si(e,n),s=Mf(null,e,r,t,s,n);var i=Uf();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Nt(r)?(i=!0,Zl(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Df(e),s.updater=zu,e.stateNode=s,s._reactInternals=e,dd(e,r,t,n),e=md(null,e,r,!0,i,n)):(e.tag=0,ke&&i&&Rf(e),Et(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Al(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=bA(r),t=Zt(r,t),s){case 0:e=pd(null,e,r,t,n);break e;case 1:e=ty(null,e,r,t,n);break e;case 11:e=Zg(null,e,r,t,n);break e;case 14:e=ey(null,e,r,Zt(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Zt(r,s),pd(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Zt(r,s),ty(t,e,r,s,n);case 3:e:{if(tE(e),t===null)throw Error(j(387));r=e.pendingProps,i=e.memoizedState,s=i.element,kw(t,e),su(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=mi(Error(j(423)),e),e=ny(t,e,r,n,s);break e}else if(r!==s){s=mi(Error(j(424)),e),e=ny(t,e,r,n,s);break e}else for(Vt=wr(e.stateNode.containerInfo.firstChild),Ut=e,ke=!0,tn=null,n=Aw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(di(),r===s){e=Wn(t,e,n);break e}Et(t,e,r,n)}e=e.child}return e;case 5:return Pw(e),t===null&&ud(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,sd(r,s)?o=null:i!==null&&sd(r,i)&&(e.flags|=32),eE(t,e),Et(t,e,o,n),e.child;case 6:return t===null&&ud(e),null;case 13:return nE(t,e,n);case 4:return xf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=fi(e,null,r,n):Et(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Zt(r,s),Zg(t,e,r,s,n);case 7:return Et(t,e,e.pendingProps,n),e.child;case 8:return Et(t,e,e.pendingProps.children,n),e.child;case 12:return Et(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,we(nu,r._currentValue),r._currentValue=o,i!==null)if(un(i.value,o)){if(i.children===s.children&&!Pt.current){e=Wn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=jn(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),cd(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),cd(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Et(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,si(e,n),s=Qt(s),r=r(s),e.flags|=1,Et(t,e,r,n),e.child;case 14:return r=e.type,s=Zt(r,e.pendingProps),s=Zt(r.type,s),ey(t,e,r,s,n);case 15:return Jw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Zt(r,s),Al(t,e),e.tag=1,Nt(r)?(t=!0,Zl(e)):t=!1,si(e,n),Qw(e,r,s),dd(e,r,s,n),md(null,e,r,!0,t,n);case 19:return rE(t,e,n);case 22:return Zw(t,e,n)}throw Error(j(156,e.tag))};function vE(t,e){return qv(t,e)}function xA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qt(t,e,n,r){return new xA(t,e,n,r)}function Gf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function bA(t){if(typeof t=="function")return Gf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ff)return 11;if(t===pf)return 14}return 2}function Sr(t,e){var n=t.alternate;return n===null?(n=qt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Pl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Gf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case $s:return is(n.children,s,i,e);case df:o=8,s|=8;break;case Vh:return t=qt(12,n,e,s|2),t.elementType=Vh,t.lanes=i,t;case Mh:return t=qt(13,n,e,s),t.elementType=Mh,t.lanes=i,t;case Uh:return t=qt(19,n,e,s),t.elementType=Uh,t.lanes=i,t;case Pv:return Wu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Cv:o=10;break e;case kv:o=9;break e;case ff:o=11;break e;case pf:o=14;break e;case or:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=qt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function is(t,e,n,r){return t=qt(7,t,r,e),t.lanes=n,t}function Wu(t,e,n,r){return t=qt(22,t,r,e),t.elementType=Pv,t.lanes=n,t.stateNode={isHidden:!1},t}function dh(t,e,n){return t=qt(6,t,null,e),t.lanes=n,t}function fh(t,e,n){return e=qt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function LA(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kc(0),this.expirationTimes=Kc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Qf(t,e,n,r,s,i,o,l,u){return t=new LA(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=qt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Df(i),t}function VA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function wE(t){if(!t)return Nr;t=t._reactInternals;e:{if(Rs(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Nt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(Nt(n))return ww(t,n,e)}return e}function EE(t,e,n,r,s,i,o,l,u){return t=Qf(n,r,!0,t,s,i,o,l,u),t.context=wE(null),n=t.current,r=It(),s=Ir(n),i=jn(r,s),i.callback=e??null,Er(n,i,s),t.current.lanes=s,ua(t,s,r),Ot(t,r),t}function qu(t,e,n,r){var s=e.current,i=It(),o=Ir(s);return n=wE(n),e.context===null?e.context=n:e.pendingContext=n,e=jn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Er(s,e,o),t!==null&&(on(t,s,o,i),Il(t,s,o)),o}function du(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Xf(t,e){dy(t,e),(t=t.alternate)&&dy(t,e)}function MA(){return null}var TE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yf(t){this._internalRoot=t}Ku.prototype.render=Yf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));qu(t,e,null,null)};Ku.prototype.unmount=Yf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ps(function(){qu(null,t,null,null)}),e[$n]=null}};function Ku(t){this._internalRoot=t}Ku.prototype.unstable_scheduleHydration=function(t){if(t){var e=Zv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<lr.length&&e!==0&&e<lr[n].priority;n++);lr.splice(n,0,t),n===0&&tw(t)}};function Jf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Gu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function fy(){}function UA(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=du(o);i.call(c)}}var o=EE(e,r,t,0,null,!1,!1,"",fy);return t._reactRootContainer=o,t[$n]=o.current,$o(t.nodeType===8?t.parentNode:t),ps(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=du(u);l.call(c)}}var u=Qf(t,0,!1,null,null,!1,!1,"",fy);return t._reactRootContainer=u,t[$n]=u.current,$o(t.nodeType===8?t.parentNode:t),ps(function(){qu(e,u,n,r)}),u}function Qu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=du(o);l.call(u)}}qu(e,o,t,s)}else o=UA(n,e,t,s,r);return du(o)}Yv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=co(e.pendingLanes);n!==0&&(yf(e,n|1),Ot(e,Fe()),!(fe&6)&&(gi=Fe()+500,jr()))}break;case 13:ps(function(){var r=Hn(t,1);if(r!==null){var s=It();on(r,t,1,s)}}),Xf(t,1)}};_f=function(t){if(t.tag===13){var e=Hn(t,134217728);if(e!==null){var n=It();on(e,t,134217728,n)}Xf(t,134217728)}};Jv=function(t){if(t.tag===13){var e=Ir(t),n=Hn(t,e);if(n!==null){var r=It();on(n,t,e,r)}Xf(t,e)}};Zv=function(){return ye};ew=function(t,e){var n=ye;try{return ye=t,e()}finally{ye=n}};Gh=function(t,e,n){switch(e){case"input":if(Bh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Fu(r);if(!s)throw Error(j(90));Ov(r),Bh(r,s)}}}break;case"textarea":xv(t,n);break;case"select":e=n.value,e!=null&&ei(t,!!n.multiple,e,!1)}};jv=Wf;Bv=ps;var FA={usingClientEntryPoint:!1,Events:[ha,Ks,Fu,Uv,Fv,Wf]},io={findFiberByHostInstance:Jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jA={bundleType:io.bundleType,version:io.version,rendererPackageName:io.rendererPackageName,rendererConfig:io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Hv(t),t===null?null:t.stateNode},findFiberByHostInstance:io.findFiberByHostInstance||MA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{Lu=il.inject(jA),wn=il}catch{}}jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=FA;jt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jf(e))throw Error(j(200));return VA(t,e,null,n)};jt.createRoot=function(t,e){if(!Jf(t))throw Error(j(299));var n=!1,r="",s=TE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Qf(t,1,!1,null,null,n,!1,r,s),t[$n]=e.current,$o(t.nodeType===8?t.parentNode:t),new Yf(e)};jt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=Hv(e),t=t===null?null:t.stateNode,t};jt.flushSync=function(t){return ps(t)};jt.hydrate=function(t,e,n){if(!Gu(e))throw Error(j(200));return Qu(null,t,e,!0,n)};jt.hydrateRoot=function(t,e,n){if(!Jf(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=TE;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=EE(e,null,t,1,n??null,s,!1,i,o),t[$n]=e.current,$o(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Ku(e)};jt.render=function(t,e,n){if(!Gu(e))throw Error(j(200));return Qu(null,t,e,!1,n)};jt.unmountComponentAtNode=function(t){if(!Gu(t))throw Error(j(40));return t._reactRootContainer?(ps(function(){Qu(null,null,t,!1,function(){t._reactRootContainer=null,t[$n]=null})}),!0):!1};jt.unstable_batchedUpdates=Wf;jt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Gu(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return Qu(t,e,n,!1,r)};jt.version="18.3.1-next-f1338f8080-20240426";function IE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(IE)}catch(t){console.error(t)}}IE(),Iv.exports=jt;var BA=Iv.exports,Zf,py=BA;Zf=py.createRoot,py.hydrateRoot;const zA="design_markers_v1";function $A(){try{return JSON.parse(localStorage.getItem(zA))||[]}catch{return[]}}$A();function SE(t,e){return function(){return t.apply(e,arguments)}}const{toString:HA}=Object.prototype,{getPrototypeOf:ep}=Object,{iterator:Xu,toStringTag:RE}=Symbol,Yu=(t=>e=>{const n=HA.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),cn=t=>(t=t.toLowerCase(),e=>Yu(e)===t),Ju=t=>e=>typeof e===t,{isArray:Pi}=Array,yi=Ju("undefined");function fa(t){return t!==null&&!yi(t)&&t.constructor!==null&&!yi(t.constructor)&&Dt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const AE=cn("ArrayBuffer");function WA(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&AE(t.buffer),e}const qA=Ju("string"),Dt=Ju("function"),CE=Ju("number"),pa=t=>t!==null&&typeof t=="object",KA=t=>t===!0||t===!1,Nl=t=>{if(Yu(t)!=="object")return!1;const e=ep(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(RE in t)&&!(Xu in t)},GA=t=>{if(!pa(t)||fa(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},QA=cn("Date"),XA=cn("File"),YA=cn("Blob"),JA=cn("FileList"),ZA=t=>pa(t)&&Dt(t.pipe),e1=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Dt(t.append)&&((e=Yu(t))==="formdata"||e==="object"&&Dt(t.toString)&&t.toString()==="[object FormData]"))},t1=cn("URLSearchParams"),[n1,r1,s1,i1]=["ReadableStream","Request","Response","Headers"].map(cn),o1=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ma(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),Pi(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{if(fa(t))return;const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let l;for(r=0;r<o;r++)l=i[r],e.call(null,t[l],l,t)}}function kE(t,e){if(fa(t))return null;e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const ts=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,PE=t=>!yi(t)&&t!==ts;function Cd(){const{caseless:t,skipUndefined:e}=PE(this)&&this||{},n={},r=(s,i)=>{const o=t&&kE(n,i)||i;Nl(n[o])&&Nl(s)?n[o]=Cd(n[o],s):Nl(s)?n[o]=Cd({},s):Pi(s)?n[o]=s.slice():(!e||!yi(s))&&(n[o]=s)};for(let s=0,i=arguments.length;s<i;s++)arguments[s]&&ma(arguments[s],r);return n}const a1=(t,e,n,{allOwnKeys:r}={})=>(ma(e,(s,i)=>{n&&Dt(s)?t[i]=SE(s,n):t[i]=s},{allOwnKeys:r}),t),l1=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),u1=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},c1=(t,e,n,r)=>{let s,i,o;const l={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!l[o]&&(e[o]=t[o],l[o]=!0);t=n!==!1&&ep(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},h1=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},d1=t=>{if(!t)return null;if(Pi(t))return t;let e=t.length;if(!CE(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},f1=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&ep(Uint8Array)),p1=(t,e)=>{const r=(t&&t[Xu]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},m1=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},g1=cn("HTMLFormElement"),y1=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),my=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),_1=cn("RegExp"),NE=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};ma(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},v1=t=>{NE(t,(e,n)=>{if(Dt(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Dt(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},w1=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Pi(t)?r(t):r(String(t).split(e)),n},E1=()=>{},T1=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function I1(t){return!!(t&&Dt(t.append)&&t[RE]==="FormData"&&t[Xu])}const S1=t=>{const e=new Array(10),n=(r,s)=>{if(pa(r)){if(e.indexOf(r)>=0)return;if(fa(r))return r;if(!("toJSON"in r)){e[s]=r;const i=Pi(r)?[]:{};return ma(r,(o,l)=>{const u=n(o,s+1);!yi(u)&&(i[l]=u)}),e[s]=void 0,i}}return r};return n(t,0)},R1=cn("AsyncFunction"),A1=t=>t&&(pa(t)||Dt(t))&&Dt(t.then)&&Dt(t.catch),OE=((t,e)=>t?setImmediate:e?((n,r)=>(ts.addEventListener("message",({source:s,data:i})=>{s===ts&&i===n&&r.length&&r.shift()()},!1),s=>{r.push(s),ts.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Dt(ts.postMessage)),C1=typeof queueMicrotask<"u"?queueMicrotask.bind(ts):typeof process<"u"&&process.nextTick||OE,k1=t=>t!=null&&Dt(t[Xu]),x={isArray:Pi,isArrayBuffer:AE,isBuffer:fa,isFormData:e1,isArrayBufferView:WA,isString:qA,isNumber:CE,isBoolean:KA,isObject:pa,isPlainObject:Nl,isEmptyObject:GA,isReadableStream:n1,isRequest:r1,isResponse:s1,isHeaders:i1,isUndefined:yi,isDate:QA,isFile:XA,isBlob:YA,isRegExp:_1,isFunction:Dt,isStream:ZA,isURLSearchParams:t1,isTypedArray:f1,isFileList:JA,forEach:ma,merge:Cd,extend:a1,trim:o1,stripBOM:l1,inherits:u1,toFlatObject:c1,kindOf:Yu,kindOfTest:cn,endsWith:h1,toArray:d1,forEachEntry:p1,matchAll:m1,isHTMLForm:g1,hasOwnProperty:my,hasOwnProp:my,reduceDescriptors:NE,freezeMethods:v1,toObjectSet:w1,toCamelCase:y1,noop:E1,toFiniteNumber:T1,findKey:kE,global:ts,isContextDefined:PE,isSpecCompliantForm:I1,toJSONObject:S1,isAsyncFn:R1,isThenable:A1,setImmediate:OE,asap:C1,isIterable:k1};function oe(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}x.inherits(oe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:x.toJSONObject(this.config),code:this.code,status:this.status}}});const DE=oe.prototype,xE={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{xE[t]={value:t}});Object.defineProperties(oe,xE);Object.defineProperty(DE,"isAxiosError",{value:!0});oe.from=(t,e,n,r,s,i)=>{const o=Object.create(DE);x.toFlatObject(t,o,function(d){return d!==Error.prototype},c=>c!=="isAxiosError");const l=t&&t.message?t.message:"Error",u=e==null&&t?t.code:e;return oe.call(o,l,u,n,r,s),t&&o.cause==null&&Object.defineProperty(o,"cause",{value:t,configurable:!0}),o.name=t&&t.name||"Error",i&&Object.assign(o,i),o};const P1=null;function kd(t){return x.isPlainObject(t)||x.isArray(t)}function bE(t){return x.endsWith(t,"[]")?t.slice(0,-2):t}function gy(t,e,n){return t?t.concat(e).map(function(s,i){return s=bE(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function N1(t){return x.isArray(t)&&!t.some(kd)}const O1=x.toFlatObject(x,{},null,function(e){return/^is[A-Z]/.test(e)});function Zu(t,e,n){if(!x.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=x.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(k,P){return!x.isUndefined(P[k])});const r=n.metaTokens,s=n.visitor||d,i=n.dots,o=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&x.isSpecCompliantForm(e);if(!x.isFunction(s))throw new TypeError("visitor must be a function");function c(E){if(E===null)return"";if(x.isDate(E))return E.toISOString();if(x.isBoolean(E))return E.toString();if(!u&&x.isBlob(E))throw new oe("Blob is not supported. Use a Buffer instead.");return x.isArrayBuffer(E)||x.isTypedArray(E)?u&&typeof Blob=="function"?new Blob([E]):Buffer.from(E):E}function d(E,k,P){let T=E;if(E&&!P&&typeof E=="object"){if(x.endsWith(k,"{}"))k=r?k:k.slice(0,-2),E=JSON.stringify(E);else if(x.isArray(E)&&N1(E)||(x.isFileList(E)||x.endsWith(k,"[]"))&&(T=x.toArray(E)))return k=bE(k),T.forEach(function(R,D){!(x.isUndefined(R)||R===null)&&e.append(o===!0?gy([k],D,i):o===null?k:k+"[]",c(R))}),!1}return kd(E)?!0:(e.append(gy(P,k,i),c(E)),!1)}const p=[],m=Object.assign(O1,{defaultVisitor:d,convertValue:c,isVisitable:kd});function S(E,k){if(!x.isUndefined(E)){if(p.indexOf(E)!==-1)throw Error("Circular reference detected in "+k.join("."));p.push(E),x.forEach(E,function(T,w){(!(x.isUndefined(T)||T===null)&&s.call(e,T,x.isString(w)?w.trim():w,k,m))===!0&&S(T,k?k.concat(w):[w])}),p.pop()}}if(!x.isObject(t))throw new TypeError("data must be an object");return S(t),e}function yy(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function tp(t,e){this._pairs=[],t&&Zu(t,this,e)}const LE=tp.prototype;LE.append=function(e,n){this._pairs.push([e,n])};LE.toString=function(e){const n=e?function(r){return e.call(this,r,yy)}:yy;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function D1(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function VE(t,e,n){if(!e)return t;const r=n&&n.encode||D1;x.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let i;if(s?i=s(e,n):i=x.isURLSearchParams(e)?e.toString():new tp(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class _y{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){x.forEach(this.handlers,function(r){r!==null&&e(r)})}}const ME={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},x1=typeof URLSearchParams<"u"?URLSearchParams:tp,b1=typeof FormData<"u"?FormData:null,L1=typeof Blob<"u"?Blob:null,V1={isBrowser:!0,classes:{URLSearchParams:x1,FormData:b1,Blob:L1},protocols:["http","https","file","blob","url","data"]},np=typeof window<"u"&&typeof document<"u",Pd=typeof navigator=="object"&&navigator||void 0,M1=np&&(!Pd||["ReactNative","NativeScript","NS"].indexOf(Pd.product)<0),U1=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",F1=np&&window.location.href||"http://localhost",j1=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:np,hasStandardBrowserEnv:M1,hasStandardBrowserWebWorkerEnv:U1,navigator:Pd,origin:F1},Symbol.toStringTag,{value:"Module"})),mt={...j1,...V1};function B1(t,e){return Zu(t,new mt.classes.URLSearchParams,{visitor:function(n,r,s,i){return mt.isNode&&x.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...e})}function z1(t){return x.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function $1(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function UE(t){function e(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const l=Number.isFinite(+o),u=i>=n.length;return o=!o&&x.isArray(s)?s.length:o,u?(x.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!l):((!s[o]||!x.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&x.isArray(s[o])&&(s[o]=$1(s[o])),!l)}if(x.isFormData(t)&&x.isFunction(t.entries)){const n={};return x.forEachEntry(t,(r,s)=>{e(z1(r),s,n,0)}),n}return null}function H1(t,e,n){if(x.isString(t))try{return(e||JSON.parse)(t),x.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const ga={transitional:ME,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=x.isObject(e);if(i&&x.isHTMLForm(e)&&(e=new FormData(e)),x.isFormData(e))return s?JSON.stringify(UE(e)):e;if(x.isArrayBuffer(e)||x.isBuffer(e)||x.isStream(e)||x.isFile(e)||x.isBlob(e)||x.isReadableStream(e))return e;if(x.isArrayBufferView(e))return e.buffer;if(x.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return B1(e,this.formSerializer).toString();if((l=x.isFileList(e))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return Zu(l?{"files[]":e}:e,u&&new u,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),H1(e)):e}],transformResponse:[function(e){const n=this.transitional||ga.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(x.isResponse(e)||x.isReadableStream(e))return e;if(e&&x.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e,this.parseReviver)}catch(l){if(o)throw l.name==="SyntaxError"?oe.from(l,oe.ERR_BAD_RESPONSE,this,null,this.response):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:mt.classes.FormData,Blob:mt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};x.forEach(["delete","get","head","post","put","patch"],t=>{ga.headers[t]={}});const W1=x.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),q1=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&W1[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},vy=Symbol("internals");function oo(t){return t&&String(t).trim().toLowerCase()}function Ol(t){return t===!1||t==null?t:x.isArray(t)?t.map(Ol):String(t)}function K1(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const G1=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function ph(t,e,n,r,s){if(x.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!x.isString(e)){if(x.isString(r))return e.indexOf(r)!==-1;if(x.isRegExp(r))return r.test(e)}}function Q1(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function X1(t,e){const n=x.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}let xt=class{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(l,u,c){const d=oo(u);if(!d)throw new Error("header name must be a non-empty string");const p=x.findKey(s,d);(!p||s[p]===void 0||c===!0||c===void 0&&s[p]!==!1)&&(s[p||u]=Ol(l))}const o=(l,u)=>x.forEach(l,(c,d)=>i(c,d,u));if(x.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(x.isString(e)&&(e=e.trim())&&!G1(e))o(q1(e),n);else if(x.isObject(e)&&x.isIterable(e)){let l={},u,c;for(const d of e){if(!x.isArray(d))throw TypeError("Object iterator must return a key-value pair");l[c=d[0]]=(u=l[c])?x.isArray(u)?[...u,d[1]]:[u,d[1]]:d[1]}o(l,n)}else e!=null&&i(n,e,r);return this}get(e,n){if(e=oo(e),e){const r=x.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return K1(s);if(x.isFunction(n))return n.call(this,s,r);if(x.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=oo(e),e){const r=x.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||ph(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=oo(o),o){const l=x.findKey(r,o);l&&(!n||ph(r,r[l],l,n))&&(delete r[l],s=!0)}}return x.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||ph(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return x.forEach(this,(s,i)=>{const o=x.findKey(r,i);if(o){n[o]=Ol(s),delete n[i];return}const l=e?Q1(i):String(i).trim();l!==i&&delete n[i],n[l]=Ol(s),r[l]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return x.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&x.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[vy]=this[vy]={accessors:{}}).accessors,s=this.prototype;function i(o){const l=oo(o);r[l]||(X1(s,o),r[l]=!0)}return x.isArray(e)?e.forEach(i):i(e),this}};xt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);x.reduceDescriptors(xt.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});x.freezeMethods(xt);function mh(t,e){const n=this||ga,r=e||n,s=xt.from(r.headers);let i=r.data;return x.forEach(t,function(l){i=l.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function FE(t){return!!(t&&t.__CANCEL__)}function Ni(t,e,n){oe.call(this,t??"canceled",oe.ERR_CANCELED,e,n),this.name="CanceledError"}x.inherits(Ni,oe,{__CANCEL__:!0});function jE(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new oe("Request failed with status code "+n.status,[oe.ERR_BAD_REQUEST,oe.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Y1(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function J1(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(u){const c=Date.now(),d=r[i];o||(o=c),n[s]=u,r[s]=c;let p=i,m=0;for(;p!==s;)m+=n[p++],p=p%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),c-o<e)return;const S=d&&c-d;return S?Math.round(m*1e3/S):void 0}}function Z1(t,e){let n=0,r=1e3/e,s,i;const o=(c,d=Date.now())=>{n=d,s=null,i&&(clearTimeout(i),i=null),t(...c)};return[(...c)=>{const d=Date.now(),p=d-n;p>=r?o(c,d):(s=c,i||(i=setTimeout(()=>{i=null,o(s)},r-p)))},()=>s&&o(s)]}const fu=(t,e,n=3)=>{let r=0;const s=J1(50,250);return Z1(i=>{const o=i.loaded,l=i.lengthComputable?i.total:void 0,u=o-r,c=s(u),d=o<=l;r=o;const p={loaded:o,total:l,progress:l?o/l:void 0,bytes:u,rate:c||void 0,estimated:c&&l&&d?(l-o)/c:void 0,event:i,lengthComputable:l!=null,[e?"download":"upload"]:!0};t(p)},n)},wy=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},Ey=t=>(...e)=>x.asap(()=>t(...e)),eC=mt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,mt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(mt.origin),mt.navigator&&/(msie|trident)/i.test(mt.navigator.userAgent)):()=>!0,tC=mt.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];x.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),x.isString(r)&&o.push("path="+r),x.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function nC(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function rC(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function BE(t,e,n){let r=!nC(e);return t&&(r||n==!1)?rC(t,e):e}const Ty=t=>t instanceof xt?{...t}:t;function ms(t,e){e=e||{};const n={};function r(c,d,p,m){return x.isPlainObject(c)&&x.isPlainObject(d)?x.merge.call({caseless:m},c,d):x.isPlainObject(d)?x.merge({},d):x.isArray(d)?d.slice():d}function s(c,d,p,m){if(x.isUndefined(d)){if(!x.isUndefined(c))return r(void 0,c,p,m)}else return r(c,d,p,m)}function i(c,d){if(!x.isUndefined(d))return r(void 0,d)}function o(c,d){if(x.isUndefined(d)){if(!x.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function l(c,d,p){if(p in e)return r(c,d);if(p in t)return r(void 0,c)}const u={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(c,d,p)=>s(Ty(c),Ty(d),p,!0)};return x.forEach(Object.keys({...t,...e}),function(d){const p=u[d]||s,m=p(t[d],e[d],d);x.isUndefined(m)&&p!==l||(n[d]=m)}),n}const zE=t=>{const e=ms({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:l}=e;if(e.headers=o=xt.from(o),e.url=VE(BE(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),l&&o.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),x.isFormData(n)){if(mt.hasStandardBrowserEnv||mt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(x.isFunction(n.getHeaders)){const u=n.getHeaders(),c=["content-type","content-length"];Object.entries(u).forEach(([d,p])=>{c.includes(d.toLowerCase())&&o.set(d,p)})}}if(mt.hasStandardBrowserEnv&&(r&&x.isFunction(r)&&(r=r(e)),r||r!==!1&&eC(e.url))){const u=s&&i&&tC.read(i);u&&o.set(s,u)}return e},sC=typeof XMLHttpRequest<"u",iC=sC&&function(t){return new Promise(function(n,r){const s=zE(t);let i=s.data;const o=xt.from(s.headers).normalize();let{responseType:l,onUploadProgress:u,onDownloadProgress:c}=s,d,p,m,S,E;function k(){S&&S(),E&&E(),s.cancelToken&&s.cancelToken.unsubscribe(d),s.signal&&s.signal.removeEventListener("abort",d)}let P=new XMLHttpRequest;P.open(s.method.toUpperCase(),s.url,!0),P.timeout=s.timeout;function T(){if(!P)return;const R=xt.from("getAllResponseHeaders"in P&&P.getAllResponseHeaders()),U={data:!l||l==="text"||l==="json"?P.responseText:P.response,status:P.status,statusText:P.statusText,headers:R,config:t,request:P};jE(function(v){n(v),k()},function(v){r(v),k()},U),P=null}"onloadend"in P?P.onloadend=T:P.onreadystatechange=function(){!P||P.readyState!==4||P.status===0&&!(P.responseURL&&P.responseURL.indexOf("file:")===0)||setTimeout(T)},P.onabort=function(){P&&(r(new oe("Request aborted",oe.ECONNABORTED,t,P)),P=null)},P.onerror=function(D){const U=D&&D.message?D.message:"Network Error",B=new oe(U,oe.ERR_NETWORK,t,P);B.event=D||null,r(B),P=null},P.ontimeout=function(){let D=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const U=s.transitional||ME;s.timeoutErrorMessage&&(D=s.timeoutErrorMessage),r(new oe(D,U.clarifyTimeoutError?oe.ETIMEDOUT:oe.ECONNABORTED,t,P)),P=null},i===void 0&&o.setContentType(null),"setRequestHeader"in P&&x.forEach(o.toJSON(),function(D,U){P.setRequestHeader(U,D)}),x.isUndefined(s.withCredentials)||(P.withCredentials=!!s.withCredentials),l&&l!=="json"&&(P.responseType=s.responseType),c&&([m,E]=fu(c,!0),P.addEventListener("progress",m)),u&&P.upload&&([p,S]=fu(u),P.upload.addEventListener("progress",p),P.upload.addEventListener("loadend",S)),(s.cancelToken||s.signal)&&(d=R=>{P&&(r(!R||R.type?new Ni(null,t,P):R),P.abort(),P=null)},s.cancelToken&&s.cancelToken.subscribe(d),s.signal&&(s.signal.aborted?d():s.signal.addEventListener("abort",d)));const w=Y1(s.url);if(w&&mt.protocols.indexOf(w)===-1){r(new oe("Unsupported protocol "+w+":",oe.ERR_BAD_REQUEST,t));return}P.send(i||null)})},oC=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,s;const i=function(c){if(!s){s=!0,l();const d=c instanceof Error?c:this.reason;r.abort(d instanceof oe?d:new Ni(d instanceof Error?d.message:d))}};let o=e&&setTimeout(()=>{o=null,i(new oe(`timeout ${e} of ms exceeded`,oe.ETIMEDOUT))},e);const l=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(i):c.removeEventListener("abort",i)}),t=null)};t.forEach(c=>c.addEventListener("abort",i));const{signal:u}=r;return u.unsubscribe=()=>x.asap(l),u}},aC=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,s;for(;r<n;)s=r+e,yield t.slice(r,s),r=s},lC=async function*(t,e){for await(const n of uC(t))yield*aC(n,e)},uC=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},Iy=(t,e,n,r)=>{const s=lC(t,e);let i=0,o,l=u=>{o||(o=!0,r&&r(u))};return new ReadableStream({async pull(u){try{const{done:c,value:d}=await s.next();if(c){l(),u.close();return}let p=d.byteLength;if(n){let m=i+=p;n(m)}u.enqueue(new Uint8Array(d))}catch(c){throw l(c),c}},cancel(u){return l(u),s.return()}},{highWaterMark:2})},Sy=64*1024,{isFunction:ol}=x,cC=(({Request:t,Response:e})=>({Request:t,Response:e}))(x.global),{ReadableStream:Ry,TextEncoder:Ay}=x.global,Cy=(t,...e)=>{try{return!!t(...e)}catch{return!1}},hC=t=>{t=x.merge.call({skipUndefined:!0},cC,t);const{fetch:e,Request:n,Response:r}=t,s=e?ol(e):typeof fetch=="function",i=ol(n),o=ol(r);if(!s)return!1;const l=s&&ol(Ry),u=s&&(typeof Ay=="function"?(E=>k=>E.encode(k))(new Ay):async E=>new Uint8Array(await new n(E).arrayBuffer())),c=i&&l&&Cy(()=>{let E=!1;const k=new n(mt.origin,{body:new Ry,method:"POST",get duplex(){return E=!0,"half"}}).headers.has("Content-Type");return E&&!k}),d=o&&l&&Cy(()=>x.isReadableStream(new r("").body)),p={stream:d&&(E=>E.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(E=>{!p[E]&&(p[E]=(k,P)=>{let T=k&&k[E];if(T)return T.call(k);throw new oe(`Response type '${E}' is not supported`,oe.ERR_NOT_SUPPORT,P)})});const m=async E=>{if(E==null)return 0;if(x.isBlob(E))return E.size;if(x.isSpecCompliantForm(E))return(await new n(mt.origin,{method:"POST",body:E}).arrayBuffer()).byteLength;if(x.isArrayBufferView(E)||x.isArrayBuffer(E))return E.byteLength;if(x.isURLSearchParams(E)&&(E=E+""),x.isString(E))return(await u(E)).byteLength},S=async(E,k)=>{const P=x.toFiniteNumber(E.getContentLength());return P??m(k)};return async E=>{let{url:k,method:P,data:T,signal:w,cancelToken:R,timeout:D,onDownloadProgress:U,onUploadProgress:B,responseType:v,headers:_,withCredentials:I="same-origin",fetchOptions:A}=zE(E),C=e||fetch;v=v?(v+"").toLowerCase():"text";let N=oC([w,R&&R.toAbortSignal()],D),g=null;const X=N&&N.unsubscribe&&(()=>{N.unsubscribe()});let ne;try{if(B&&c&&P!=="get"&&P!=="head"&&(ne=await S(_,T))!==0){let $=new n(k,{method:"POST",body:T,duplex:"half"}),Y;if(x.isFormData(T)&&(Y=$.headers.get("content-type"))&&_.setContentType(Y),$.body){const[Ce,re]=wy(ne,fu(Ey(B)));T=Iy($.body,Sy,Ce,re)}}x.isString(I)||(I=I?"include":"omit");const H=i&&"credentials"in n.prototype,ge={...A,signal:N,method:P.toUpperCase(),headers:_.normalize().toJSON(),body:T,duplex:"half",credentials:H?I:void 0};g=i&&new n(k,ge);let F=await(i?C(g,A):C(k,ge));const W=d&&(v==="stream"||v==="response");if(d&&(U||W&&X)){const $={};["status","statusText","headers"].forEach(pe=>{$[pe]=F[pe]});const Y=x.toFiniteNumber(F.headers.get("content-length")),[Ce,re]=U&&wy(Y,fu(Ey(U),!0))||[];F=new r(Iy(F.body,Sy,Ce,()=>{re&&re(),X&&X()}),$)}v=v||"text";let q=await p[x.findKey(p,v)||"text"](F,E);return!W&&X&&X(),await new Promise(($,Y)=>{jE($,Y,{data:q,headers:xt.from(F.headers),status:F.status,statusText:F.statusText,config:E,request:g})})}catch(H){throw X&&X(),H&&H.name==="TypeError"&&/Load failed|fetch/i.test(H.message)?Object.assign(new oe("Network Error",oe.ERR_NETWORK,E,g),{cause:H.cause||H}):oe.from(H,H&&H.code,E,g)}}},dC=new Map,$E=t=>{let e=t?t.env:{};const{fetch:n,Request:r,Response:s}=e,i=[r,s,n];let o=i.length,l=o,u,c,d=dC;for(;l--;)u=i[l],c=d.get(u),c===void 0&&d.set(u,c=l?new Map:hC(e)),d=c;return c};$E();const Nd={http:P1,xhr:iC,fetch:{get:$E}};x.forEach(Nd,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const ky=t=>`- ${t}`,fC=t=>x.isFunction(t)||t===null||t===!1,HE={getAdapter:(t,e)=>{t=x.isArray(t)?t:[t];const{length:n}=t;let r,s;const i={};for(let o=0;o<n;o++){r=t[o];let l;if(s=r,!fC(r)&&(s=Nd[(l=String(r)).toLowerCase()],s===void 0))throw new oe(`Unknown adapter '${l}'`);if(s&&(x.isFunction(s)||(s=s.get(e))))break;i[l||"#"+o]=s}if(!s){const o=Object.entries(i).map(([u,c])=>`adapter ${u} `+(c===!1?"is not supported by the environment":"is not available in the build"));let l=n?o.length>1?`since :
`+o.map(ky).join(`
`):" "+ky(o[0]):"as no adapter specified";throw new oe("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return s},adapters:Nd};function gh(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ni(null,t)}function Py(t){return gh(t),t.headers=xt.from(t.headers),t.data=mh.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),HE.getAdapter(t.adapter||ga.adapter,t)(t).then(function(r){return gh(t),r.data=mh.call(t,t.transformResponse,r),r.headers=xt.from(r.headers),r},function(r){return FE(r)||(gh(t),r&&r.response&&(r.response.data=mh.call(t,t.transformResponse,r.response),r.response.headers=xt.from(r.response.headers))),Promise.reject(r)})}const WE="1.12.2",ec={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{ec[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Ny={};ec.transitional=function(e,n,r){function s(i,o){return"[Axios v"+WE+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,l)=>{if(e===!1)throw new oe(s(o," has been removed"+(n?" in "+n:"")),oe.ERR_DEPRECATED);return n&&!Ny[o]&&(Ny[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,l):!0}};ec.spelling=function(e){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function pC(t,e,n){if(typeof t!="object")throw new oe("options must be an object",oe.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const l=t[i],u=l===void 0||o(l,i,t);if(u!==!0)throw new oe("option "+i+" must be "+u,oe.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new oe("Unknown option "+i,oe.ERR_BAD_OPTION)}}const Dl={assertOptions:pC,validators:ec},pn=Dl.validators;let os=class{constructor(e){this.defaults=e||{},this.interceptors={request:new _y,response:new _y}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=ms(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Dl.assertOptions(r,{silentJSONParsing:pn.transitional(pn.boolean),forcedJSONParsing:pn.transitional(pn.boolean),clarifyTimeoutError:pn.transitional(pn.boolean)},!1),s!=null&&(x.isFunction(s)?n.paramsSerializer={serialize:s}:Dl.assertOptions(s,{encode:pn.function,serialize:pn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Dl.assertOptions(n,{baseUrl:pn.spelling("baseURL"),withXsrfToken:pn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&x.merge(i.common,i[n.method]);i&&x.forEach(["delete","get","head","post","put","patch","common"],E=>{delete i[E]}),n.headers=xt.concat(o,i);const l=[];let u=!0;this.interceptors.request.forEach(function(k){typeof k.runWhen=="function"&&k.runWhen(n)===!1||(u=u&&k.synchronous,l.unshift(k.fulfilled,k.rejected))});const c=[];this.interceptors.response.forEach(function(k){c.push(k.fulfilled,k.rejected)});let d,p=0,m;if(!u){const E=[Py.bind(this),void 0];for(E.unshift(...l),E.push(...c),m=E.length,d=Promise.resolve(n);p<m;)d=d.then(E[p++],E[p++]);return d}m=l.length;let S=n;for(;p<m;){const E=l[p++],k=l[p++];try{S=E(S)}catch(P){k.call(this,P);break}}try{d=Py.call(this,S)}catch(E){return Promise.reject(E)}for(p=0,m=c.length;p<m;)d=d.then(c[p++],c[p++]);return d}getUri(e){e=ms(this.defaults,e);const n=BE(e.baseURL,e.url,e.allowAbsoluteUrls);return VE(n,e.params,e.paramsSerializer)}};x.forEach(["delete","get","head","options"],function(e){os.prototype[e]=function(n,r){return this.request(ms(r||{},{method:e,url:n,data:(r||{}).data}))}});x.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,l){return this.request(ms(l||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}os.prototype[e]=n(),os.prototype[e+"Form"]=n(!0)});let mC=class qE{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(l=>{r.subscribe(l),i=l}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,l){r.reason||(r.reason=new Ni(i,o,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new qE(function(s){e=s}),cancel:e}}};function gC(t){return function(n){return t.apply(null,n)}}function yC(t){return x.isObject(t)&&t.isAxiosError===!0}const Od={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Od).forEach(([t,e])=>{Od[e]=t});function KE(t){const e=new os(t),n=SE(os.prototype.request,e);return x.extend(n,os.prototype,e,{allOwnKeys:!0}),x.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return KE(ms(t,s))},n}const je=KE(ga);je.Axios=os;je.CanceledError=Ni;je.CancelToken=mC;je.isCancel=FE;je.VERSION=WE;je.toFormData=Zu;je.AxiosError=oe;je.Cancel=je.CanceledError;je.all=function(e){return Promise.all(e)};je.spread=gC;je.isAxiosError=yC;je.mergeConfig=ms;je.AxiosHeaders=xt;je.formToJSON=t=>UE(x.isHTMLForm(t)?new FormData(t):t);je.getAdapter=HE.getAdapter;je.HttpStatusCode=Od;je.default=je;const{Axios:LL,AxiosError:VL,CanceledError:ML,isCancel:UL,CancelToken:FL,VERSION:jL,all:BL,Cancel:zL,isAxiosError:$L,spread:HL,toFormData:WL,AxiosHeaders:qL,HttpStatusCode:KL,formToJSON:GL,getAdapter:QL,mergeConfig:XL}=je,_C="/api",gs=je.create({baseURL:_C});function vC(t,e){const n=e.startsWith("/")?e:"/"+e;return t?(t.endsWith("/")?t.slice(0,-1):t)+n:n}function GE(t){return Array.isArray(t)?t.map(e=>({...e,lat:Number(e.lat),lng:Number(e.lng)})):[]}function yh(t,e){let n=null;const r=async()=>{try{const{data:s}=await gs.get("markers");t(GE(s))}catch(s){console.error("[markersApi] Polling failed",s)}};return r(),n=setInterval(r,e),()=>n&&clearInterval(n)}function wC(t){let e=!1,n=null,r=null;const s=o=>{e||t(GE(o))};gs.get("markers").then(o=>s(o.data)).catch(o=>{console.error("[markersApi] Failed to fetch markers",o)});const i=vC(gs.defaults.baseURL||"","/markers/stream");if(typeof window<"u"&&window.EventSource)try{r=new EventSource(i),r.addEventListener("markers",o=>{try{const l=JSON.parse(o.data);s(l)}catch(l){console.error("[markersApi] Failed to parse stream payload",l)}}),r.onerror=()=>{r&&(r.close(),r=null),!e&&!n&&(n=yh(s,5e3))}}catch(o){console.error("[markersApi] Failed to open EventSource",o),n=yh(s,5e3)}else n=yh(s,5e3);return()=>{e=!0,r&&(r.close(),r=null),n&&(n(),n=null)}}async function EC({lat:t,lng:e,title:n,description:r,photoURL:s}){const{data:i}=await gs.post("markers",{lat:t,lng:e,title:n,description:r,photoURL:s});return i}async function TC(t,e){await gs.patch("markers/"+t,e)}async function IC(t){await gs.delete("markers/"+t)}async function SC(){await gs.delete("markers")}const RC=Object.freeze(Object.defineProperty({__proto__:null,addMarker:EC,clearAllMarkers:SC,deleteMarker:IC,listenMarkers:wC,updateMarker:TC},Symbol.toStringTag,{value:"Module"})),ya=RC,AC=ya.listenMarkers,CC=ya.addMarker,al=ya.updateMarker,Oy=ya.deleteMarker,kC=ya.clearAllMarkers;let ll=null;function PC(t){return typeof window>"u"?Promise.reject(new Error("window not available")):window.google&&window.google.maps?Promise.resolve(window.google):ll||(ll=new Promise((e,n)=>{const r=document.createElement("script"),s=new URLSearchParams({key:t,libraries:"places,geometry"});r.src=`https://maps.googleapis.com/maps/api/js?${s.toString()}`,r.async=!0,r.defer=!0,r.onload=()=>e(window.google),r.onerror=()=>n(new Error("Failed to load Google Maps")),document.head.appendChild(r)}),ll)}function NC({open:t,title:e,submitText:n="Save",initial:r={},allowImage:s=!1,onSubmit:i,onCancel:o,onDelete:l}){const[u,c]=te.useState({title:"",description:"",file:null,preview:null,existing:null}),[d,p]=te.useState(!1);if(te.useEffect(()=>{t?(c(E=>(E.preview&&URL.revokeObjectURL(E.preview),{title:r.title||"",description:r.description||"",file:null,preview:null,existing:r.photoURL||null})),setTimeout(()=>p(!0),50)):p(!1)},[t,r.title,r.description,r.photoURL]),te.useEffect(()=>()=>{u.preview&&URL.revokeObjectURL(u.preview)},[u.preview]),!t)return null;const m=u.file?u.file.name:"Choose a file...",S=u.preview||u.existing||null;return L.jsx("div",{className:`modal-overlay ${d?"modal-overlay-visible":""}`,role:"dialog","aria-modal":"true",onClick:o,children:L.jsxs("div",{className:`modal-content ${d?"modal-content-visible":""}`,onClick:E=>E.stopPropagation(),children:[L.jsxs("div",{className:"modal-header",children:[L.jsx("div",{className:"modal-title",children:e}),L.jsx("button",{className:"modal-close",onClick:o,children:L.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:L.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),L.jsxs("div",{className:"modal-body",children:[L.jsxs("div",{className:"form-group",children:[L.jsx("label",{className:"form-label",children:"Title"}),L.jsx("input",{className:"form-input",placeholder:"Enter title...",value:u.title,onChange:E=>c(k=>({...k,title:E.target.value}))})]}),L.jsxs("div",{className:"form-group",children:[L.jsx("label",{className:"form-label",children:"Description"}),L.jsx("textarea",{className:"form-input",rows:3,placeholder:"Enter description...",value:u.description,onChange:E=>c(k=>({...k,description:E.target.value}))})]}),s&&L.jsxs("div",{className:"form-group",children:[L.jsx("label",{className:"form-label",children:"Photo (optional)"}),L.jsxs("div",{className:"file-input-wrapper",children:[L.jsx("input",{type:"file",accept:"image/*",className:"file-input",onChange:E=>{var P;const k=((P=E.target.files)==null?void 0:P[0])||null;c(T=>{if(T.preview&&URL.revokeObjectURL(T.preview),!k)return{...T,file:null,preview:null};const w=URL.createObjectURL(k);return{...T,file:k,preview:w,existing:null}})}}),L.jsx("span",{className:"file-input-text",children:m})]}),S&&L.jsxs("div",{className:"preview-container",children:[L.jsx("img",{src:S,alt:"preview",className:"preview-image"}),L.jsx("div",{className:"preview-badge",children:u.preview?"New upload":"Current photo"})]})]})]}),L.jsxs("div",{className:"modal-footer",children:[l&&r&&r.id&&L.jsx("button",{className:"modal-btn modal-btn-danger",onClick:E=>{E.stopPropagation(),window.confirm("Delete this marker?")&&(console.log("Delete marker:",r),l(r))},children:"Delete"}),L.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:o,children:"Cancel"}),L.jsx("button",{className:"modal-btn modal-btn-primary",onClick:()=>i({...u}),children:n})]})]})})}function OC({onPlaceSelected:t}){const e=te.useRef(null);return te.useEffect(()=>{var r,s;if(!((s=(r=window.google)==null?void 0:r.maps)!=null&&s.places))return;const n=new window.google.maps.places.Autocomplete(e.current,{fields:["geometry","name"]});n.addListener("place_changed",()=>{var o;const i=n.getPlace();(o=i==null?void 0:i.geometry)!=null&&o.location&&(t==null||t({name:i.name,lat:i.geometry.location.lat(),lng:i.geometry.location.lng()}))})},[]),L.jsx("input",{ref:e,className:"input",placeholder:"Search places",style:{minWidth:220}})}const DC=()=>{};var Dy={};/**
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
 */const QE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},xC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},XE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|c>>6,S=c&63;u||(S=64,o||(m=64)),r.push(n[d],n[p],n[m],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(QE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||p==null)throw new bC;const m=i<<2|l>>4;if(r.push(m),c!==64){const S=l<<4&240|c>>2;if(r.push(S),p!==64){const E=c<<6&192|p;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class bC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const LC=function(t){const e=QE(t);return XE.encodeByteArray(e,!0)},pu=function(t){return LC(t).replace(/\./g,"")},YE=function(t){try{return XE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function VC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const MC=()=>VC().__FIREBASE_DEFAULTS__,UC=()=>{if(typeof process>"u"||typeof Dy>"u")return;const t=Dy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},FC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&YE(t[1]);return e&&JSON.parse(e)},tc=()=>{try{return DC()||MC()||UC()||FC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},JE=t=>{var e,n;return(n=(e=tc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},ZE=t=>{const e=JE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},eT=()=>{var t;return(t=tc())==null?void 0:t.config},tT=t=>{var e;return(e=tc())==null?void 0:e[`_${t}`]};/**
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
 */class jC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Br(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function rp(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function nT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[pu(JSON.stringify(n)),pu(JSON.stringify(o)),""].join(".")}const ko={};function BC(){const t={prod:[],emulator:[]};for(const e of Object.keys(ko))ko[e]?t.emulator.push(e):t.prod.push(e);return t}function zC(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let xy=!1;function sp(t,e){if(typeof window>"u"||typeof document>"u"||!Br(window.location.host)||ko[t]===e||ko[t]||xy)return;ko[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=BC().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,S){m.setAttribute("width","24"),m.setAttribute("id",S),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function c(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{xy=!0,o()},m}function d(m,S){m.setAttribute("id",S),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=zC(r),S=n("text"),E=document.getElementById(S)||document.createElement("span"),k=n("learnmore"),P=document.getElementById(k)||document.createElement("a"),T=n("preprendIcon"),w=document.getElementById(T)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const R=m.element;l(R),d(P,k);const D=c();u(w,T),R.append(w,E,P,D),document.body.appendChild(R)}i?(E.innerText="Preview backend disconnected.",w.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(w.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,E.innerText="Preview backend running in this workspace."),E.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $C(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function HC(){var e;const t=(e=tc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function WC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function qC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function KC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function GC(){const t=yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function QC(){return!HC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function XC(){try{return typeof indexedDB=="object"}catch{return!1}}function YC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const JC="FirebaseError";class On extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=JC,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_a.prototype.create)}}class _a{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ZC(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new On(s,l,r)}}function ZC(t,e){return t.replace(ek,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ek=/\{\$([^}]+)}/g;function tk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ys(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(by(i)&&by(o)){if(!ys(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function by(t){return t!==null&&typeof t=="object"}/**
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
 */function va(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function po(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function nk(t,e){const n=new rk(t,e);return n.subscribe.bind(n)}class rk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");sk(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=_h),s.error===void 0&&(s.error=_h),s.complete===void 0&&(s.complete=_h);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _h(){}/**
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
 */function Be(t){return t&&t._delegate?t._delegate:t}let mu=class{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
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
 */const Yr="[DEFAULT]";/**
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
 */class ik{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new jC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ak(e))try{this.getOrInitializeService({instanceIdentifier:Yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yr){return this.instances.has(e)}getOptions(e=Yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ok(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yr){return this.component?this.component.multipleInstances?e:Yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ok(t){return t===Yr?void 0:t}function ak(t){return t.instantiationMode==="EAGER"}/**
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
 */class lk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ik(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ie||(Ie={}));const uk={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},ck=Ie.INFO,hk={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},dk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=hk[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let fk=class{constructor(e){this.name=e,this._logLevel=ck,this._logHandler=dk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}};const pk=(t,e)=>e.some(n=>t instanceof n);let Ly,Vy;function mk(){return Ly||(Ly=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gk(){return Vy||(Vy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rT=new WeakMap,Dd=new WeakMap,sT=new WeakMap,vh=new WeakMap,ip=new WeakMap;function yk(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Rr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&rT.set(n,t)}).catch(()=>{}),ip.set(e,t),e}function _k(t){if(Dd.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Dd.set(t,e)}let xd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Dd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||sT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vk(t){xd=t(xd)}function wk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(wh(this),e,...n);return sT.set(r,e.sort?e.sort():[e]),Rr(r)}:gk().includes(t)?function(...e){return t.apply(wh(this),e),Rr(rT.get(this))}:function(...e){return Rr(t.apply(wh(this),e))}}function Ek(t){return typeof t=="function"?wk(t):(t instanceof IDBTransaction&&_k(t),pk(t,mk())?new Proxy(t,xd):t)}function Rr(t){if(t instanceof IDBRequest)return yk(t);if(vh.has(t))return vh.get(t);const e=Ek(t);return e!==t&&(vh.set(t,e),ip.set(e,t)),e}const wh=t=>ip.get(t);function Tk(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Rr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Rr(o.result),u.oldVersion,u.newVersion,Rr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Ik=["get","getKey","getAll","getAllKeys","count"],Sk=["put","add","delete","clear"],Eh=new Map;function My(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Eh.get(e))return Eh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Sk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ik.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&u.done]))[0]};return Eh.set(e,i),i}vk(t=>({...t,get:(e,n,r)=>My(e,n)||t.get(e,n,r),has:(e,n)=>!!My(e,n)||t.has(e,n)}));/**
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
 */class Rk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ak(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ak(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bd="@firebase/app",Uy="0.14.3";/**
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
 */const qn=new fk("@firebase/app"),Ck="@firebase/app-compat",kk="@firebase/analytics-compat",Pk="@firebase/analytics",Nk="@firebase/app-check-compat",Ok="@firebase/app-check",Dk="@firebase/auth",xk="@firebase/auth-compat",bk="@firebase/database",Lk="@firebase/data-connect",Vk="@firebase/database-compat",Mk="@firebase/functions",Uk="@firebase/functions-compat",Fk="@firebase/installations",jk="@firebase/installations-compat",Bk="@firebase/messaging",zk="@firebase/messaging-compat",$k="@firebase/performance",Hk="@firebase/performance-compat",Wk="@firebase/remote-config",qk="@firebase/remote-config-compat",Kk="@firebase/storage",Gk="@firebase/storage-compat",Qk="@firebase/firestore",Xk="@firebase/ai",Yk="@firebase/firestore-compat",Jk="firebase",Zk="12.3.0";/**
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
 */const Ld="[DEFAULT]",eP={[bd]:"fire-core",[Ck]:"fire-core-compat",[Pk]:"fire-analytics",[kk]:"fire-analytics-compat",[Ok]:"fire-app-check",[Nk]:"fire-app-check-compat",[Dk]:"fire-auth",[xk]:"fire-auth-compat",[bk]:"fire-rtdb",[Lk]:"fire-data-connect",[Vk]:"fire-rtdb-compat",[Mk]:"fire-fn",[Uk]:"fire-fn-compat",[Fk]:"fire-iid",[jk]:"fire-iid-compat",[Bk]:"fire-fcm",[zk]:"fire-fcm-compat",[$k]:"fire-perf",[Hk]:"fire-perf-compat",[Wk]:"fire-rc",[qk]:"fire-rc-compat",[Kk]:"fire-gcs",[Gk]:"fire-gcs-compat",[Qk]:"fire-fst",[Yk]:"fire-fst-compat",[Xk]:"fire-vertex","fire-js":"fire-js",[Jk]:"fire-js-all"};/**
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
 */const Jo=new Map,tP=new Map,Vd=new Map;function Fy(t,e){try{t.container.addComponent(e)}catch(n){qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _s(t){const e=t.name;if(Vd.has(e))return qn.debug(`There were multiple attempts to register component ${e}.`),!1;Vd.set(e,t);for(const n of Jo.values())Fy(n,t);for(const n of tP.values())Fy(n,t);return!0}function nc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Tt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const nP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ar=new _a("app","Firebase",nP);/**
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
 */class rP{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mu("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ar.create("app-deleted",{appName:this._name})}}/**
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
 */const As=Zk;function iT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Ld,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Ar.create("bad-app-name",{appName:String(s)});if(n||(n=eT()),!n)throw Ar.create("no-options");const i=Jo.get(s);if(i){if(ys(n,i.options)&&ys(r,i.config))return i;throw Ar.create("duplicate-app",{appName:s})}const o=new lk(s);for(const u of Vd.values())o.addComponent(u);const l=new rP(n,r,o);return Jo.set(s,l),l}function op(t=Ld){const e=Jo.get(t);if(!e&&t===Ld&&eT())return iT();if(!e)throw Ar.create("no-app",{appName:t});return e}function sP(){return Array.from(Jo.values())}function Tn(t,e,n){let r=eP[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qn.warn(o.join(" "));return}_s(new mu(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const iP="firebase-heartbeat-database",oP=1,Zo="firebase-heartbeat-store";let Th=null;function oT(){return Th||(Th=Tk(iP,oP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Zo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ar.create("idb-open",{originalErrorMessage:t.message})})),Th}async function aP(t){try{const n=(await oT()).transaction(Zo),r=await n.objectStore(Zo).get(aT(t));return await n.done,r}catch(e){if(e instanceof On)qn.warn(e.message);else{const n=Ar.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qn.warn(n.message)}}}async function jy(t,e){try{const r=(await oT()).transaction(Zo,"readwrite");await r.objectStore(Zo).put(e,aT(t)),await r.done}catch(n){if(n instanceof On)qn.warn(n.message);else{const r=Ar.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qn.warn(r.message)}}}function aT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const lP=1024,uP=30;class cP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=By();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>uP){const o=fP(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){qn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=By(),{heartbeatsToSend:r,unsentEntries:s}=hP(this._heartbeatsCache.heartbeats),i=pu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return qn.warn(n),""}}}function By(){return new Date().toISOString().substring(0,10)}function hP(t,e=lP){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),zy(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),zy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class dP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return XC()?YC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await aP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return jy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return jy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function zy(t){return pu(JSON.stringify({version:2,heartbeats:t})).length}function fP(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function pP(t){_s(new mu("platform-logger",e=>new Rk(e),"PRIVATE")),_s(new mu("heartbeat",e=>new cP(e),"PRIVATE")),Tn(bd,Uy,t),Tn(bd,Uy,"esm2020"),Tn("fire-js","")}pP("");var mP="firebase",gP="12.3.0";/**
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
 */Tn(mP,gP,"app");/**
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
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const yP={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},_P=ve.INFO,vP={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},wP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=vP[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let EP=class{constructor(e){this.name=e,this._logLevel=_P,this._logHandler=wP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}},$y=class{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};function lT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const TP=lT,uT=new _a("auth","Firebase",lT());/**
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
 */const gu=new EP("@firebase/auth");function IP(t,...e){gu.logLevel<=ve.WARN&&gu.warn(`Auth (${As}): ${t}`,...e)}function xl(t,...e){gu.logLevel<=ve.ERROR&&gu.error(`Auth (${As}): ${t}`,...e)}/**
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
 */function Yt(t,...e){throw lp(t,...e)}function an(t,...e){return lp(t,...e)}function ap(t,e,n){const r={...TP(),[e]:n};return new _a("auth","Firebase",r).create(e,{appName:t.name})}function In(t){return ap(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function cT(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Yt(t,"argument-error"),ap(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function lp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return uT.create(t,...e)}function Z(t,e,...n){if(!t)throw lp(e,...n)}function Un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xl(e),new Error(e)}function Kn(t,e){t||Un(e)}/**
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
 */function Md(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function SP(){return Hy()==="http:"||Hy()==="https:"}function Hy(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function RP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(SP()||qC()||"connection"in navigator)?navigator.onLine:!0}function AP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class wa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kn(n>e,"Short delay should be less than long delay!"),this.isMobile=$C()||KC()}get(){return RP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function up(t,e){Kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class hT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const CP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const kP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],PP=new wa(3e4,6e4);function zr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Yn(t,e,n,r,s={}){return dT(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=va({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...i};return WC()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Br(t.emulatorConfig.host)&&(c.credentials="include"),hT.fetch()(await fT(t,t.config.apiHost,n,l),c)})}async function dT(t,e,n){t._canInitEmulator=!1;const r={...CP,...e};try{const s=new OP(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ul(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ul(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ul(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ul(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw ap(t,d,c);Yt(t,d)}}catch(s){if(s instanceof On)throw s;Yt(t,"network-request-failed",{message:String(s)})}}async function Ea(t,e,n,r,s={}){const i=await Yn(t,e,n,r,s);return"mfaPendingCredential"in i&&Yt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function fT(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?up(t.config,s):`${t.config.apiScheme}://${s}`;return kP.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function NP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class OP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),PP.get())})}}function ul(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=an(t,e,r);return s.customData._tokenResponse=n,s}function Wy(t){return t!==void 0&&t.enterprise!==void 0}class DP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return NP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function xP(t,e){return Yn(t,"GET","/v2/recaptchaConfig",zr(t,e))}/**
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
 */async function bP(t,e){return Yn(t,"POST","/v1/accounts:delete",e)}async function yu(t,e){return Yn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Po(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LP(t,e=!1){const n=Be(t),r=await n.getIdToken(e),s=cp(r);Z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Po(Ih(s.auth_time)),issuedAtTime:Po(Ih(s.iat)),expirationTime:Po(Ih(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ih(t){return Number(t)*1e3}function cp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xl("JWT malformed, contained fewer than 3 sections"),null;try{const s=YE(n);return s?JSON.parse(s):(xl("Failed to decode base64 JWT payload"),null)}catch(s){return xl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function qy(t){const e=cp(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _i(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof On&&VP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function VP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class MP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ud{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Po(this.lastLoginAt),this.creationTime=Po(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _u(t){var p;const e=t.auth,n=await t.getIdToken(),r=await _i(t,yu(e,{idToken:n}));Z(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?pT(s.providerUserInfo):[],o=FP(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Ud(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function UP(t){const e=Be(t);await _u(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function FP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function pT(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function jP(t,e){const n=await dT(t,{},async()=>{const r=va({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await fT(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Br(t.emulatorConfig.host)&&(u.credentials="include"),hT.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function BP(t,e){return Yn(t,"POST","/v2/accounts:revokeToken",zr(t,e))}/**
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
 */class oi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const n=qy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await jP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new oi;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oi,this.toJSON())}_performRefresh(){return Un("not implemented")}}/**
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
 */function ir(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class nn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new MP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ud(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await _i(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return LP(this,e)}reload(){return UP(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new nn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await _u(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tt(this.auth.app))return Promise.reject(In(this.auth));const e=await this.getIdToken();return await _i(this,bP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:S,providerData:E,stsTokenManager:k}=n;Z(p&&k,e,"internal-error");const P=oi.fromJSON(this.name,k);Z(typeof p=="string",e,"internal-error"),ir(r,e.name),ir(s,e.name),Z(typeof m=="boolean",e,"internal-error"),Z(typeof S=="boolean",e,"internal-error"),ir(i,e.name),ir(o,e.name),ir(l,e.name),ir(u,e.name),ir(c,e.name),ir(d,e.name);const T=new nn({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:S,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:P,createdAt:c,lastLoginAt:d});return E&&Array.isArray(E)&&(T.providerData=E.map(w=>({...w}))),u&&(T._redirectEventId=u),T}static async _fromIdTokenResponse(e,n,r=!1){const s=new oi;s.updateFromServerResponse(n);const i=new nn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await _u(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Z(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?pT(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new oi;l.updateFromIdToken(r);const u=new nn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ud(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
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
 */const Ky=new Map;function Fn(t){Kn(t instanceof Function,"Expected a class definition");let e=Ky.get(t);return e?(Kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ky.set(t,e),e)}/**
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
 */class mT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}mT.type="NONE";const Gy=mT;/**
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
 */function bl(t,e,n){return`firebase:${t}:${e}:${n}`}class ai{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=bl(this.userKey,s.apiKey,i),this.fullPersistenceKey=bl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await yu(this.auth,{idToken:e}).catch(()=>{});return n?nn._fromGetAccountInfoResponse(this.auth,n,e):null}return nn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ai(Fn(Gy),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Fn(Gy);const o=bl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let p;if(typeof d=="string"){const m=await yu(e,{idToken:d}).catch(()=>{});if(!m)break;p=await nn._fromGetAccountInfoResponse(e,m,d)}else p=nn._fromJSON(e,d);c!==i&&(l=p),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new ai(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new ai(i,e,r))}}/**
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
 */function Qy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ET(e))return"Blackberry";if(TT(e))return"Webos";if(yT(e))return"Safari";if((e.includes("chrome/")||_T(e))&&!e.includes("edge/"))return"Chrome";if(wT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gT(t=yt()){return/firefox\//i.test(t)}function yT(t=yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _T(t=yt()){return/crios\//i.test(t)}function vT(t=yt()){return/iemobile/i.test(t)}function wT(t=yt()){return/android/i.test(t)}function ET(t=yt()){return/blackberry/i.test(t)}function TT(t=yt()){return/webos/i.test(t)}function hp(t=yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zP(t=yt()){var e;return hp(t)&&!!((e=window.navigator)!=null&&e.standalone)}function $P(){return GC()&&document.documentMode===10}function IT(t=yt()){return hp(t)||wT(t)||TT(t)||ET(t)||/windows phone/i.test(t)||vT(t)}/**
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
 */function ST(t,e=[]){let n;switch(t){case"Browser":n=Qy(yt());break;case"Worker":n=`${Qy(yt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${As}/${r}`}/**
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
 */class HP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function WP(t,e={}){return Yn(t,"GET","/v2/passwordPolicy",zr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const qP=6;class KP{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??qP,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class GP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xy(this),this.idTokenSubscription=new Xy(this),this.beforeStateQueue=new HP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=uT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await ai.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await yu(this,{idToken:e}),r=await nn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Tt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _u(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=AP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tt(this.app))return Promise.reject(In(this));const n=e?Be(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tt(this.app)?Promise.reject(In(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tt(this.app)?Promise.reject(In(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await WP(this),n=new KP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new _a("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await BP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fn(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await ai.create(this,[Fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ST(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Tt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&IP(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Dn(t){return Be(t)}class Xy{constructor(e){this.auth=e,this.observer=null,this.addObserver=nk(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let rc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function QP(t){rc=t}function RT(t){return rc.loadJS(t)}function XP(){return rc.recaptchaEnterpriseScript}function YP(){return rc.gapiScript}function JP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class ZP{constructor(){this.enterprise=new eN}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class eN{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const tN="recaptcha-enterprise",AT="NO_RECAPTCHA";class nN{constructor(e){this.type=tN,this.auth=Dn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{xP(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new DP(u);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;Wy(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(AT)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ZP().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Wy(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=XP();u.length!==0&&(u+=l),RT(u).then(()=>{s(l,i,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Yy(t,e,n,r=!1,s=!1){const i=new nN(t);let o;if(s)o=AT;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Fd(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Yy(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Yy(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function rN(t,e){const n=nc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ys(i,e??{}))return s;Yt(s,"already-initialized")}return n.initialize({options:e})}function sN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function iN(t,e,n){const r=Dn(t);Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=CT(e),{host:o,port:l}=oN(e),u=l===null?"":`:${l}`,c={url:`${i}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Z(ys(c,r.config.emulator)&&ys(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Br(o)?(rp(`${i}//${o}${u}`),sp("Auth",!0)):aN()}function CT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function oN(t){const e=CT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Jy(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Jy(o)}}}function Jy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function aN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class dp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Un("not implemented")}_getIdTokenResponse(e){return Un("not implemented")}_linkToIdToken(e,n){return Un("not implemented")}_getReauthenticationResolver(e){return Un("not implemented")}}async function lN(t,e){return Yn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function uN(t,e){return Ea(t,"POST","/v1/accounts:signInWithPassword",zr(t,e))}/**
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
 */async function cN(t,e){return Ea(t,"POST","/v1/accounts:signInWithEmailLink",zr(t,e))}async function hN(t,e){return Ea(t,"POST","/v1/accounts:signInWithEmailLink",zr(t,e))}/**
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
 */class ea extends dp{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ea(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ea(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fd(e,n,"signInWithPassword",uN);case"emailLink":return cN(e,{email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fd(e,r,"signUpPassword",lN);case"emailLink":return hN(e,{idToken:n,email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function li(t,e){return Ea(t,"POST","/v1/accounts:signInWithIdp",zr(t,e))}/**
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
 */const dN="http://localhost";class vs extends dp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new vs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return li(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,li(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,li(e,n)}buildRequest(){const e={requestUri:dN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=va(n)}return e}}/**
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
 */function fN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pN(t){const e=fo(po(t)).link,n=e?fo(po(e)).deep_link_id:null,r=fo(po(t)).deep_link_id;return(r?fo(po(r)).link:null)||r||n||e||t}class fp{constructor(e){const n=fo(po(e)),r=n.apiKey??null,s=n.oobCode??null,i=fN(n.mode??null);Z(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=pN(e);try{return new fp(n)}catch{return null}}}/**
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
 */class Oi{constructor(){this.providerId=Oi.PROVIDER_ID}static credential(e,n){return ea._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=fp.parseLink(n);return Z(r,"argument-error"),ea._fromEmailAndCode(e,r.code,r.tenantId)}}Oi.PROVIDER_ID="password";Oi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Oi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class sc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ta extends sc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class cr extends Ta{constructor(){super("facebook.com")}static credential(e){return vs._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";cr.PROVIDER_ID="facebook.com";/**
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
 */class _n extends Ta{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vs._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return _n.credential(n,r)}catch{return null}}}_n.GOOGLE_SIGN_IN_METHOD="google.com";_n.PROVIDER_ID="google.com";/**
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
 */class hr extends Ta{constructor(){super("github.com")}static credential(e){return vs._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.GITHUB_SIGN_IN_METHOD="github.com";hr.PROVIDER_ID="github.com";/**
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
 */class dr extends Ta{constructor(){super("twitter.com")}static credential(e,n){return vs._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.TWITTER_SIGN_IN_METHOD="twitter.com";dr.PROVIDER_ID="twitter.com";/**
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
 */async function mN(t,e){return Ea(t,"POST","/v1/accounts:signUp",zr(t,e))}/**
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
 */class ws{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await nn._fromIdTokenResponse(e,r,s),o=Zy(r);return new ws({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Zy(r);return new ws({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Zy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class vu extends On{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,vu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new vu(e,n,r,s)}}function kT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?vu._fromErrorAndOperation(t,i,e,r):i})}async function gN(t,e,n=!1){const r=await _i(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ws._forOperation(t,"link",r)}/**
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
 */async function yN(t,e,n=!1){const{auth:r}=t;if(Tt(r.app))return Promise.reject(In(r));const s="reauthenticate";try{const i=await _i(t,kT(r,s,e,t),n);Z(i.idToken,r,"internal-error");const o=cp(i.idToken);Z(o,r,"internal-error");const{sub:l}=o;return Z(t.uid===l,r,"user-mismatch"),ws._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Yt(r,"user-mismatch"),i}}/**
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
 */async function PT(t,e,n=!1){if(Tt(t.app))return Promise.reject(In(t));const r="signIn",s=await kT(t,r,e),i=await ws._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function _N(t,e){return PT(Dn(t),e)}/**
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
 */async function NT(t){const e=Dn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function vN(t,e,n){if(Tt(t.app))return Promise.reject(In(t));const r=Dn(t),o=await Fd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",mN).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&NT(t),u}),l=await ws._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function wN(t,e,n){return Tt(t.app)?Promise.reject(In(t)):_N(Be(t),Oi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&NT(t),r})}/**
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
 */async function EN(t,e){return Yn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function TN(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Be(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await _i(r,EN(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}/**
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
 */function IN(t,e){return Be(t).setPersistence(e)}function SN(t,e,n,r){return Be(t).onIdTokenChanged(e,n,r)}function RN(t,e,n){return Be(t).beforeAuthStateChanged(e,n)}function AN(t,e,n,r){return Be(t).onAuthStateChanged(e,n,r)}function CN(t){return Be(t).signOut()}const wu="__sak";/**
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
 */class OT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wu,"1"),this.storage.removeItem(wu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const kN=1e3,PN=10;class DT extends OT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=IT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);$P()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,PN):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},kN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}DT.type="LOCAL";const NN=DT;/**
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
 */class xT extends OT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}xT.type="SESSION";const pp=xT;/**
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
 */function ON(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ic{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ic(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),u=await ON(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ic.receivers=[];/**
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
 */function mp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class DN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const c=mp("",20);s.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Sn(){return window}function xN(t){Sn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function bT(){return typeof Sn().WorkerGlobalScope<"u"&&typeof Sn().importScripts=="function"}async function bN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function LN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function VN(){return bT()?self:null}/**
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
 */const LT="firebaseLocalStorageDb",MN=1,Eu="firebaseLocalStorage",VT="fbase_key";class Ia{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function oc(t,e){return t.transaction([Eu],e?"readwrite":"readonly").objectStore(Eu)}function UN(){const t=indexedDB.deleteDatabase(LT);return new Ia(t).toPromise()}function jd(){const t=indexedDB.open(LT,MN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Eu,{keyPath:VT})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Eu)?e(r):(r.close(),await UN(),e(await jd()))})})}async function e_(t,e,n){const r=oc(t,!0).put({[VT]:e,value:n});return new Ia(r).toPromise()}async function FN(t,e){const n=oc(t,!1).get(e),r=await new Ia(n).toPromise();return r===void 0?null:r.value}function t_(t,e){const n=oc(t,!0).delete(e);return new Ia(n).toPromise()}const jN=800,BN=3;class MT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>BN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ic._getInstance(VN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await bN(),!this.activeServiceWorker)return;this.sender=new DN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||LN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jd();return await e_(e,wu,"1"),await t_(e,wu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>e_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>FN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>t_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=oc(s,!1).getAll();return new Ia(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}MT.type="LOCAL";const zN=MT;new wa(3e4,6e4);/**
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
 */function gp(t,e){return e?Fn(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class yp extends dp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return li(e,this._buildIdpRequest())}_linkToIdToken(e,n){return li(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return li(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $N(t){return PT(t.auth,new yp(t),t.bypassAuthState)}function HN(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),yN(n,new yp(t),t.bypassAuthState)}async function WN(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),gN(n,new yp(t),t.bypassAuthState)}/**
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
 */class UT{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $N;case"linkViaPopup":case"linkViaRedirect":return WN;case"reauthViaPopup":case"reauthViaRedirect":return HN;default:Yt(this.auth,"internal-error")}}resolve(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qN=new wa(2e3,1e4);async function KN(t,e,n){if(Tt(t.app))return Promise.reject(an(t,"operation-not-supported-in-this-environment"));const r=Dn(t);cT(t,e,sc);const s=gp(r,n);return new ns(r,"signInViaPopup",e,s).executeNotNull()}class ns extends UT{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ns.currentPopupAction&&ns.currentPopupAction.cancel(),ns.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){Kn(this.filter.length===1,"Popup operations only handle one event");const e=mp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ns.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qN.get())};e()}}ns.currentPopupAction=null;/**
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
 */const GN="pendingRedirect",Ll=new Map;class QN extends UT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ll.get(this.auth._key());if(!e){try{const r=await XN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ll.set(this.auth._key(),e)}return this.bypassAuthState||Ll.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function XN(t,e){const n=jT(e),r=FT(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}async function YN(t,e){return FT(t)._set(jT(e),"true")}function JN(t,e){Ll.set(t._key(),e)}function FT(t){return Fn(t._redirectPersistence)}function jT(t){return bl(GN,t.config.apiKey,t.name)}/**
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
 */function ZN(t,e,n){return eO(t,e,n)}async function eO(t,e,n){if(Tt(t.app))return Promise.reject(In(t));const r=Dn(t);cT(t,e,sc),await r._initializationPromise;const s=gp(r,n);return await YN(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function tO(t,e){return await Dn(t)._initializationPromise,BT(t,e,!1)}async function BT(t,e,n=!1){if(Tt(t.app))return Promise.reject(In(t));const r=Dn(t),s=gp(r,e),o=await new QN(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const nO=10*60*1e3;class rO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!zT(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(an(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nO&&this.cachedEventUids.clear(),this.cachedEventUids.has(n_(e))}saveEventToCache(e){this.cachedEventUids.add(n_(e)),this.lastProcessedEventTime=Date.now()}}function n_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zT(t);default:return!1}}/**
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
 */async function iO(t,e={}){return Yn(t,"GET","/v1/projects",e)}/**
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
 */const oO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aO=/^https?/;async function lO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await iO(t);for(const n of e)try{if(uO(n))return}catch{}Yt(t,"unauthorized-domain")}function uO(t){const e=Md(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!aO.test(n))return!1;if(oO.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const cO=new wa(3e4,6e4);function r_(){const t=Sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hO(t){return new Promise((e,n)=>{var s,i,o;function r(){r_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{r_(),n(an(t,"network-request-failed"))},timeout:cO.get()})}if((i=(s=Sn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Sn().gapi)!=null&&o.load)r();else{const l=JP("iframefcb");return Sn()[l]=()=>{gapi.load?r():n(an(t,"network-request-failed"))},RT(`${YP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Vl=null,e})}let Vl=null;function dO(t){return Vl=Vl||hO(t),Vl}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const fO=new wa(5e3,15e3),pO="__/auth/iframe",mO="emulator/auth/iframe",gO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _O(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?up(e,mO):`https://${t.config.authDomain}/${pO}`,r={apiKey:e.apiKey,appName:t.name,v:As},s=yO.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${va(r).slice(1)}`}async function vO(t){const e=await dO(t),n=Sn().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:_O(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gO,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=an(t,"network-request-failed"),l=Sn().setTimeout(()=>{i(o)},fO.get());function u(){Sn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const wO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},EO=500,TO=600,IO="_blank",SO="http://localhost";class s_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function RO(t,e,n,r=EO,s=TO){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...wO,width:r.toString(),height:s.toString(),top:i,left:o},c=yt().toLowerCase();n&&(l=_T(c)?IO:n),gT(c)&&(e=e||SO,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[S,E])=>`${m}${S}=${E},`,"");if(zP(c)&&l!=="_self")return AO(e||"",l),new s_(null);const p=window.open(e||"",l,d);Z(p,t,"popup-blocked");try{p.focus()}catch{}return new s_(p)}function AO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const CO="__/auth/handler",kO="emulator/auth/handler",PO=encodeURIComponent("fac");async function i_(t,e,n,r,s,i){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:As,eventId:s};if(e instanceof sc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",tk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Ta){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${PO}=${encodeURIComponent(u)}`:"";return`${NO(t)}?${va(l).slice(1)}${c}`}function NO({config:t}){return t.emulator?up(t,kO):`https://${t.authDomain}/${CO}`}/**
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
 */const Sh="webStorageSupport";class OO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pp,this._completeRedirectFn=BT,this._overrideRedirectResult=JN}async _openPopup(e,n,r,s){var o;Kn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await i_(e,n,r,Md(),s);return RO(e,i,mp())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await i_(e,n,r,Md(),s);return xN(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Kn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await vO(e),r=new rO(e);return n.register("authEvent",s=>(Z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sh,{type:Sh},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Sh];i!==void 0&&n(!!i),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return IT()||yT()||hp()}}const DO=OO;var o_="@firebase/auth",a_="1.11.0";/**
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
 */class xO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function bO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function LO(t){_s(new $y("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ST(t)},c=new GP(r,s,i,u);return sN(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_s(new $y("auth-internal",e=>{const n=Dn(e.getProvider("auth").getImmediate());return(r=>new xO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tn(o_,a_,bO(t)),Tn(o_,a_,"esm2020")}/**
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
 */const VO=5*60,MO=tT("authIdTokenMaxAge")||VO;let l_=null;const UO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>MO)return;const s=n==null?void 0:n.token;l_!==s&&(l_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function $r(t=op()){const e=nc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rN(t,{popupRedirectResolver:DO,persistence:[zN,NN,pp]}),r=tT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=UO(i.toString());RN(n,o,()=>o(n.currentUser)),SN(n,l=>o(l))}}const s=JE("auth");return s&&iN(n,`http://${s}`),n}function FO(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}QP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=an("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",FO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});LO("Browser");let jO=class{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
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
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const BO={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},zO=de.INFO,$O={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},HO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=$O[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class WO{constructor(e){this.name=e,this._logLevel=zO,this._logHandler=HO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}var u_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cr,$T;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,_){function I(){}I.prototype=_.prototype,v.F=_.prototype,v.prototype=new I,v.prototype.constructor=v,v.D=function(A,C,N){for(var g=Array(arguments.length-2),X=2;X<arguments.length;X++)g[X-2]=arguments[X];return _.prototype[C].apply(A,g)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,_,I){I||(I=0);const A=Array(16);if(typeof _=="string")for(var C=0;C<16;++C)A[C]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(C=0;C<16;++C)A[C]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=v.g[0],I=v.g[1],C=v.g[2];let N=v.g[3],g;g=_+(N^I&(C^N))+A[0]+3614090360&4294967295,_=I+(g<<7&4294967295|g>>>25),g=N+(C^_&(I^C))+A[1]+3905402710&4294967295,N=_+(g<<12&4294967295|g>>>20),g=C+(I^N&(_^I))+A[2]+606105819&4294967295,C=N+(g<<17&4294967295|g>>>15),g=I+(_^C&(N^_))+A[3]+3250441966&4294967295,I=C+(g<<22&4294967295|g>>>10),g=_+(N^I&(C^N))+A[4]+4118548399&4294967295,_=I+(g<<7&4294967295|g>>>25),g=N+(C^_&(I^C))+A[5]+1200080426&4294967295,N=_+(g<<12&4294967295|g>>>20),g=C+(I^N&(_^I))+A[6]+2821735955&4294967295,C=N+(g<<17&4294967295|g>>>15),g=I+(_^C&(N^_))+A[7]+4249261313&4294967295,I=C+(g<<22&4294967295|g>>>10),g=_+(N^I&(C^N))+A[8]+1770035416&4294967295,_=I+(g<<7&4294967295|g>>>25),g=N+(C^_&(I^C))+A[9]+2336552879&4294967295,N=_+(g<<12&4294967295|g>>>20),g=C+(I^N&(_^I))+A[10]+4294925233&4294967295,C=N+(g<<17&4294967295|g>>>15),g=I+(_^C&(N^_))+A[11]+2304563134&4294967295,I=C+(g<<22&4294967295|g>>>10),g=_+(N^I&(C^N))+A[12]+1804603682&4294967295,_=I+(g<<7&4294967295|g>>>25),g=N+(C^_&(I^C))+A[13]+4254626195&4294967295,N=_+(g<<12&4294967295|g>>>20),g=C+(I^N&(_^I))+A[14]+2792965006&4294967295,C=N+(g<<17&4294967295|g>>>15),g=I+(_^C&(N^_))+A[15]+1236535329&4294967295,I=C+(g<<22&4294967295|g>>>10),g=_+(C^N&(I^C))+A[1]+4129170786&4294967295,_=I+(g<<5&4294967295|g>>>27),g=N+(I^C&(_^I))+A[6]+3225465664&4294967295,N=_+(g<<9&4294967295|g>>>23),g=C+(_^I&(N^_))+A[11]+643717713&4294967295,C=N+(g<<14&4294967295|g>>>18),g=I+(N^_&(C^N))+A[0]+3921069994&4294967295,I=C+(g<<20&4294967295|g>>>12),g=_+(C^N&(I^C))+A[5]+3593408605&4294967295,_=I+(g<<5&4294967295|g>>>27),g=N+(I^C&(_^I))+A[10]+38016083&4294967295,N=_+(g<<9&4294967295|g>>>23),g=C+(_^I&(N^_))+A[15]+3634488961&4294967295,C=N+(g<<14&4294967295|g>>>18),g=I+(N^_&(C^N))+A[4]+3889429448&4294967295,I=C+(g<<20&4294967295|g>>>12),g=_+(C^N&(I^C))+A[9]+568446438&4294967295,_=I+(g<<5&4294967295|g>>>27),g=N+(I^C&(_^I))+A[14]+3275163606&4294967295,N=_+(g<<9&4294967295|g>>>23),g=C+(_^I&(N^_))+A[3]+4107603335&4294967295,C=N+(g<<14&4294967295|g>>>18),g=I+(N^_&(C^N))+A[8]+1163531501&4294967295,I=C+(g<<20&4294967295|g>>>12),g=_+(C^N&(I^C))+A[13]+2850285829&4294967295,_=I+(g<<5&4294967295|g>>>27),g=N+(I^C&(_^I))+A[2]+4243563512&4294967295,N=_+(g<<9&4294967295|g>>>23),g=C+(_^I&(N^_))+A[7]+1735328473&4294967295,C=N+(g<<14&4294967295|g>>>18),g=I+(N^_&(C^N))+A[12]+2368359562&4294967295,I=C+(g<<20&4294967295|g>>>12),g=_+(I^C^N)+A[5]+4294588738&4294967295,_=I+(g<<4&4294967295|g>>>28),g=N+(_^I^C)+A[8]+2272392833&4294967295,N=_+(g<<11&4294967295|g>>>21),g=C+(N^_^I)+A[11]+1839030562&4294967295,C=N+(g<<16&4294967295|g>>>16),g=I+(C^N^_)+A[14]+4259657740&4294967295,I=C+(g<<23&4294967295|g>>>9),g=_+(I^C^N)+A[1]+2763975236&4294967295,_=I+(g<<4&4294967295|g>>>28),g=N+(_^I^C)+A[4]+1272893353&4294967295,N=_+(g<<11&4294967295|g>>>21),g=C+(N^_^I)+A[7]+4139469664&4294967295,C=N+(g<<16&4294967295|g>>>16),g=I+(C^N^_)+A[10]+3200236656&4294967295,I=C+(g<<23&4294967295|g>>>9),g=_+(I^C^N)+A[13]+681279174&4294967295,_=I+(g<<4&4294967295|g>>>28),g=N+(_^I^C)+A[0]+3936430074&4294967295,N=_+(g<<11&4294967295|g>>>21),g=C+(N^_^I)+A[3]+3572445317&4294967295,C=N+(g<<16&4294967295|g>>>16),g=I+(C^N^_)+A[6]+76029189&4294967295,I=C+(g<<23&4294967295|g>>>9),g=_+(I^C^N)+A[9]+3654602809&4294967295,_=I+(g<<4&4294967295|g>>>28),g=N+(_^I^C)+A[12]+3873151461&4294967295,N=_+(g<<11&4294967295|g>>>21),g=C+(N^_^I)+A[15]+530742520&4294967295,C=N+(g<<16&4294967295|g>>>16),g=I+(C^N^_)+A[2]+3299628645&4294967295,I=C+(g<<23&4294967295|g>>>9),g=_+(C^(I|~N))+A[0]+4096336452&4294967295,_=I+(g<<6&4294967295|g>>>26),g=N+(I^(_|~C))+A[7]+1126891415&4294967295,N=_+(g<<10&4294967295|g>>>22),g=C+(_^(N|~I))+A[14]+2878612391&4294967295,C=N+(g<<15&4294967295|g>>>17),g=I+(N^(C|~_))+A[5]+4237533241&4294967295,I=C+(g<<21&4294967295|g>>>11),g=_+(C^(I|~N))+A[12]+1700485571&4294967295,_=I+(g<<6&4294967295|g>>>26),g=N+(I^(_|~C))+A[3]+2399980690&4294967295,N=_+(g<<10&4294967295|g>>>22),g=C+(_^(N|~I))+A[10]+4293915773&4294967295,C=N+(g<<15&4294967295|g>>>17),g=I+(N^(C|~_))+A[1]+2240044497&4294967295,I=C+(g<<21&4294967295|g>>>11),g=_+(C^(I|~N))+A[8]+1873313359&4294967295,_=I+(g<<6&4294967295|g>>>26),g=N+(I^(_|~C))+A[15]+4264355552&4294967295,N=_+(g<<10&4294967295|g>>>22),g=C+(_^(N|~I))+A[6]+2734768916&4294967295,C=N+(g<<15&4294967295|g>>>17),g=I+(N^(C|~_))+A[13]+1309151649&4294967295,I=C+(g<<21&4294967295|g>>>11),g=_+(C^(I|~N))+A[4]+4149444226&4294967295,_=I+(g<<6&4294967295|g>>>26),g=N+(I^(_|~C))+A[11]+3174756917&4294967295,N=_+(g<<10&4294967295|g>>>22),g=C+(_^(N|~I))+A[2]+718787259&4294967295,C=N+(g<<15&4294967295|g>>>17),g=I+(N^(C|~_))+A[9]+3951481745&4294967295,v.g[0]=v.g[0]+_&4294967295,v.g[1]=v.g[1]+(C+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+C&4294967295,v.g[3]=v.g[3]+N&4294967295}r.prototype.v=function(v,_){_===void 0&&(_=v.length);const I=_-this.blockSize,A=this.C;let C=this.h,N=0;for(;N<_;){if(C==0)for(;N<=I;)s(this,v,N),N+=this.blockSize;if(typeof v=="string"){for(;N<_;)if(A[C++]=v.charCodeAt(N++),C==this.blockSize){s(this,A),C=0;break}}else for(;N<_;)if(A[C++]=v[N++],C==this.blockSize){s(this,A),C=0;break}}this.h=C,this.o+=_},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var _=1;_<v.length-8;++_)v[_]=0;_=this.o*8;for(var I=v.length-8;I<v.length;++I)v[I]=_&255,_/=256;for(this.v(v),v=Array(16),_=0,I=0;I<4;++I)for(let A=0;A<32;A+=8)v[_++]=this.g[I]>>>A&255;return v};function i(v,_){var I=l;return Object.prototype.hasOwnProperty.call(I,v)?I[v]:I[v]=_(v)}function o(v,_){this.h=_;const I=[];let A=!0;for(let C=v.length-1;C>=0;C--){const N=v[C]|0;A&&N==_||(I[C]=N,A=!1)}this.g=I}var l={};function u(v){return-128<=v&&v<128?i(v,function(_){return new o([_|0],_<0?-1:0)}):new o([v|0],v<0?-1:0)}function c(v){if(isNaN(v)||!isFinite(v))return p;if(v<0)return P(c(-v));const _=[];let I=1;for(let A=0;v>=I;A++)_[A]=v/I|0,I*=4294967296;return new o(_,0)}function d(v,_){if(v.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(v.charAt(0)=="-")return P(d(v.substring(1),_));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=c(Math.pow(_,8));let A=p;for(let N=0;N<v.length;N+=8){var C=Math.min(8,v.length-N);const g=parseInt(v.substring(N,N+C),_);C<8?(C=c(Math.pow(_,C)),A=A.j(C).add(c(g))):(A=A.j(I),A=A.add(c(g)))}return A}var p=u(0),m=u(1),S=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-P(this).m();let v=0,_=1;for(let I=0;I<this.g.length;I++){const A=this.i(I);v+=(A>=0?A:4294967296+A)*_,_*=4294967296}return v},t.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(E(this))return"0";if(k(this))return"-"+P(this).toString(v);const _=c(Math.pow(v,6));var I=this;let A="";for(;;){const C=D(I,_).g;I=T(I,C.j(_));let N=((I.g.length>0?I.g[0]:I.h)>>>0).toString(v);if(I=C,E(I))return N+A;for(;N.length<6;)N="0"+N;A=N+A}},t.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function E(v){if(v.h!=0)return!1;for(let _=0;_<v.g.length;_++)if(v.g[_]!=0)return!1;return!0}function k(v){return v.h==-1}t.l=function(v){return v=T(this,v),k(v)?-1:E(v)?0:1};function P(v){const _=v.g.length,I=[];for(let A=0;A<_;A++)I[A]=~v.g[A];return new o(I,~v.h).add(m)}t.abs=function(){return k(this)?P(this):this},t.add=function(v){const _=Math.max(this.g.length,v.g.length),I=[];let A=0;for(let C=0;C<=_;C++){let N=A+(this.i(C)&65535)+(v.i(C)&65535),g=(N>>>16)+(this.i(C)>>>16)+(v.i(C)>>>16);A=g>>>16,N&=65535,g&=65535,I[C]=g<<16|N}return new o(I,I[I.length-1]&-2147483648?-1:0)};function T(v,_){return v.add(P(_))}t.j=function(v){if(E(this)||E(v))return p;if(k(this))return k(v)?P(this).j(P(v)):P(P(this).j(v));if(k(v))return P(this.j(P(v)));if(this.l(S)<0&&v.l(S)<0)return c(this.m()*v.m());const _=this.g.length+v.g.length,I=[];for(var A=0;A<2*_;A++)I[A]=0;for(A=0;A<this.g.length;A++)for(let C=0;C<v.g.length;C++){const N=this.i(A)>>>16,g=this.i(A)&65535,X=v.i(C)>>>16,ne=v.i(C)&65535;I[2*A+2*C]+=g*ne,w(I,2*A+2*C),I[2*A+2*C+1]+=N*ne,w(I,2*A+2*C+1),I[2*A+2*C+1]+=g*X,w(I,2*A+2*C+1),I[2*A+2*C+2]+=N*X,w(I,2*A+2*C+2)}for(v=0;v<_;v++)I[v]=I[2*v+1]<<16|I[2*v];for(v=_;v<2*_;v++)I[v]=0;return new o(I,0)};function w(v,_){for(;(v[_]&65535)!=v[_];)v[_+1]+=v[_]>>>16,v[_]&=65535,_++}function R(v,_){this.g=v,this.h=_}function D(v,_){if(E(_))throw Error("division by zero");if(E(v))return new R(p,p);if(k(v))return _=D(P(v),_),new R(P(_.g),P(_.h));if(k(_))return _=D(v,P(_)),new R(P(_.g),_.h);if(v.g.length>30){if(k(v)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var I=m,A=_;A.l(v)<=0;)I=U(I),A=U(A);var C=B(I,1),N=B(A,1);for(A=B(A,2),I=B(I,2);!E(A);){var g=N.add(A);g.l(v)<=0&&(C=C.add(I),N=g),A=B(A,1),I=B(I,1)}return _=T(v,C.j(_)),new R(C,_)}for(C=p;v.l(_)>=0;){for(I=Math.max(1,Math.floor(v.m()/_.m())),A=Math.ceil(Math.log(I)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),N=c(I),g=N.j(_);k(g)||g.l(v)>0;)I-=A,N=c(I),g=N.j(_);E(N)&&(N=m),C=C.add(N),v=T(v,g)}return new R(C,v)}t.B=function(v){return D(this,v).h},t.and=function(v){const _=Math.max(this.g.length,v.g.length),I=[];for(let A=0;A<_;A++)I[A]=this.i(A)&v.i(A);return new o(I,this.h&v.h)},t.or=function(v){const _=Math.max(this.g.length,v.g.length),I=[];for(let A=0;A<_;A++)I[A]=this.i(A)|v.i(A);return new o(I,this.h|v.h)},t.xor=function(v){const _=Math.max(this.g.length,v.g.length),I=[];for(let A=0;A<_;A++)I[A]=this.i(A)^v.i(A);return new o(I,this.h^v.h)};function U(v){const _=v.g.length+1,I=[];for(let A=0;A<_;A++)I[A]=v.i(A)<<1|v.i(A-1)>>>31;return new o(I,v.h)}function B(v,_){const I=_>>5;_%=32;const A=v.g.length-I,C=[];for(let N=0;N<A;N++)C[N]=_>0?v.i(N+I)>>>_|v.i(N+I+1)<<32-_:v.i(N+I);return new o(C,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,$T=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Cr=o}).apply(typeof u_<"u"?u_:typeof self<"u"?self:typeof window<"u"?window:{});var cl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var HT,mo,WT,Ml,Bd,qT,KT,GT;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof cl=="object"&&cl];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var O=a[y];if(!(O in f))break e;f=f[O]}a=a[a.length-1],y=f[a],h=h(y),h!=y&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var f=[],y;for(y in h)Object.prototype.hasOwnProperty.call(h,y)&&f.push([y,h[y]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,f){return a.call.apply(a.bind,arguments)}function c(a,h,f){return c=u,c.apply(null,arguments)}function d(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function p(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(y,O,b){for(var z=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)z[ae-2]=arguments[ae];return h.prototype[O].apply(y,z)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function S(a){const h=a.length;if(h>0){const f=Array(h);for(let y=0;y<h;y++)f[y]=a[y];return f}return[]}function E(a,h){for(let y=1;y<arguments.length;y++){const O=arguments[y];var f=typeof O;if(f=f!="object"?f:O?Array.isArray(O)?"array":f:"null",f=="array"||f=="object"&&typeof O.length=="number"){f=a.length||0;const b=O.length||0;a.length=f+b;for(let z=0;z<b;z++)a[f+z]=O[z]}else a.push(O)}}class k{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function P(a){o.setTimeout(()=>{throw a},0)}function T(){var a=v;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class w{constructor(){this.h=this.g=null}add(h,f){const y=R.get();y.set(h,f),this.h?this.h.next=y:this.g=y,this.h=y}}var R=new k(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let U,B=!1,v=new w,_=()=>{const a=Promise.resolve(void 0);U=()=>{a.then(I)}};function I(){for(var a;a=T();){try{a.h.call(a.g)}catch(f){P(f)}var h=R;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}B=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var N=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a}();function g(a){return/^[\s\xa0]*$/.test(a)}function X(a,h){C.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(X,C),X.prototype.init=function(a,h){const f=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&X.Z.h.call(this)},X.prototype.h=function(){X.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ne="closure_listenable_"+(Math.random()*1e6|0),H=0;function ge(a,h,f,y,O){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!y,this.ha=O,this.key=++H,this.da=this.fa=!1}function F(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function W(a,h,f){for(const y in a)h.call(f,a[y],y,a)}function q(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function $(a){const h={};for(const f in a)h[f]=a[f];return h}const Y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ce(a,h){let f,y;for(let O=1;O<arguments.length;O++){y=arguments[O];for(f in y)a[f]=y[f];for(let b=0;b<Y.length;b++)f=Y[b],Object.prototype.hasOwnProperty.call(y,f)&&(a[f]=y[f])}}function re(a){this.src=a,this.g={},this.h=0}re.prototype.add=function(a,h,f,y,O){const b=a.toString();a=this.g[b],a||(a=this.g[b]=[],this.h++);const z=Pe(a,h,y,O);return z>-1?(h=a[z],f||(h.fa=!1)):(h=new ge(h,this.src,b,!!y,O),h.fa=f,a.push(h)),h};function pe(a,h){const f=h.type;if(f in a.g){var y=a.g[f],O=Array.prototype.indexOf.call(y,h,void 0),b;(b=O>=0)&&Array.prototype.splice.call(y,O,1),b&&(F(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Pe(a,h,f,y){for(let O=0;O<a.length;++O){const b=a[O];if(!b.da&&b.listener==h&&b.capture==!!f&&b.ha==y)return O}return-1}var qe="closure_lm_"+(Math.random()*1e6|0),Os={};function Na(a,h,f,y,O){if(Array.isArray(h)){for(let b=0;b<h.length;b++)Na(a,h[b],f,y,O);return null}return f=hm(f),a&&a[ne]?a.J(h,f,l(y)?!!y.capture:!1,O):Ds(a,h,f,!1,y,O)}function Ds(a,h,f,y,O,b){if(!h)throw Error("Invalid event type");const z=l(O)?!!O.capture:!!O;let ae=Ic(a);if(ae||(a[qe]=ae=new re(a)),f=ae.add(h,f,y,z,b),f.proxy)return f;if(y=lm(),f.proxy=y,y.src=a,y.listener=f,a.addEventListener)N||(O=z),O===void 0&&(O=!1),a.addEventListener(h.toString(),y,O);else if(a.attachEvent)a.attachEvent(cm(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function lm(){function a(f){return h.call(a.src,a.listener,f)}const h=B0;return a}function um(a,h,f,y,O){if(Array.isArray(h))for(var b=0;b<h.length;b++)um(a,h[b],f,y,O);else y=l(y)?!!y.capture:!!y,f=hm(f),a&&a[ne]?(a=a.i,b=String(h).toString(),b in a.g&&(h=a.g[b],f=Pe(h,f,y,O),f>-1&&(F(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[b],a.h--)))):a&&(a=Ic(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Pe(h,f,y,O)),(f=a>-1?h[a]:null)&&Tc(f))}function Tc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[ne])pe(h.i,a);else{var f=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(f,y,a.capture):h.detachEvent?h.detachEvent(cm(f),y):h.addListener&&h.removeListener&&h.removeListener(y),(f=Ic(h))?(pe(f,a),f.h==0&&(f.src=null,h[qe]=null)):F(a)}}}function cm(a){return a in Os?Os[a]:Os[a]="on"+a}function B0(a,h){if(a.da)a=!0;else{h=new X(h,this);const f=a.listener,y=a.ha||a.src;a.fa&&Tc(a),a=f.call(y,h)}return a}function Ic(a){return a=a[qe],a instanceof re?a:null}var Sc="__closure_events_fn_"+(Math.random()*1e9>>>0);function hm(a){return typeof a=="function"?a:(a[Sc]||(a[Sc]=function(h){return a.handleEvent(h)}),a[Sc])}function lt(){A.call(this),this.i=new re(this),this.M=this,this.G=null}p(lt,A),lt.prototype[ne]=!0,lt.prototype.removeEventListener=function(a,h,f,y){um(this,a,h,f,y)};function _t(a,h){var f,y=a.G;if(y)for(f=[];y;y=y.G)f.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new C(h,a);else if(h instanceof C)h.target=h.target||a;else{var O=h;h=new C(y,a),Ce(h,O)}O=!0;let b,z;if(f)for(z=f.length-1;z>=0;z--)b=h.g=f[z],O=Oa(b,y,!0,h)&&O;if(b=h.g=a,O=Oa(b,y,!0,h)&&O,O=Oa(b,y,!1,h)&&O,f)for(z=0;z<f.length;z++)b=h.g=f[z],O=Oa(b,y,!1,h)&&O}lt.prototype.N=function(){if(lt.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let y=0;y<f.length;y++)F(f[y]);delete a.g[h],a.h--}}this.G=null},lt.prototype.J=function(a,h,f,y){return this.i.add(String(a),h,!1,f,y)},lt.prototype.K=function(a,h,f,y){return this.i.add(String(a),h,!0,f,y)};function Oa(a,h,f,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let O=!0;for(let b=0;b<h.length;++b){const z=h[b];if(z&&!z.da&&z.capture==f){const ae=z.listener,Ke=z.ha||z.src;z.fa&&pe(a.i,z),O=ae.call(Ke,y)!==!1&&O}}return O&&!y.defaultPrevented}function z0(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function dm(a){a.g=z0(()=>{a.g=null,a.i&&(a.i=!1,dm(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class $0 extends A{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:dm(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vi(a){A.call(this),this.h=a,this.g={}}p(Vi,A);var fm=[];function pm(a){W(a.g,function(h,f){this.g.hasOwnProperty(f)&&Tc(h)},a),a.g={}}Vi.prototype.N=function(){Vi.Z.N.call(this),pm(this)},Vi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Rc=o.JSON.stringify,H0=o.JSON.parse,W0=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function mm(){}function gm(){}var Mi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ac(){C.call(this,"d")}p(Ac,C);function Cc(){C.call(this,"c")}p(Cc,C);var Hr={},ym=null;function Da(){return ym=ym||new lt}Hr.Ia="serverreachability";function _m(a){C.call(this,Hr.Ia,a)}p(_m,C);function Ui(a){const h=Da();_t(h,new _m(h))}Hr.STAT_EVENT="statevent";function vm(a,h){C.call(this,Hr.STAT_EVENT,a),this.stat=h}p(vm,C);function vt(a){const h=Da();_t(h,new vm(h,a))}Hr.Ja="timingevent";function wm(a,h){C.call(this,Hr.Ja,a),this.size=h}p(wm,C);function Fi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function ji(){this.g=!0}ji.prototype.ua=function(){this.g=!1};function q0(a,h,f,y,O,b){a.info(function(){if(a.g)if(b){var z="",ae=b.split("&");for(let _e=0;_e<ae.length;_e++){var Ke=ae[_e].split("=");if(Ke.length>1){const Je=Ke[0];Ke=Ke[1];const dn=Je.split("_");z=dn.length>=2&&dn[1]=="type"?z+(Je+"="+Ke+"&"):z+(Je+"=redacted&")}}}else z=null;else z=b;return"XMLHTTP REQ ("+y+") [attempt "+O+"]: "+h+`
`+f+`
`+z})}function K0(a,h,f,y,O,b,z){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+O+"]: "+h+`
`+f+`
`+b+" "+z})}function xs(a,h,f,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Q0(a,f)+(y?" "+y:"")})}function G0(a,h){a.info(function(){return"TIMEOUT: "+h})}ji.prototype.info=function(){};function Q0(a,h){if(!a.g)return h;if(!h)return null;try{const b=JSON.parse(h);if(b){for(a=0;a<b.length;a++)if(Array.isArray(b[a])){var f=b[a];if(!(f.length<2)){var y=f[1];if(Array.isArray(y)&&!(y.length<1)){var O=y[0];if(O!="noop"&&O!="stop"&&O!="close")for(let z=1;z<y.length;z++)y[z]=""}}}}return Rc(b)}catch{return h}}var xa={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Em={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Tm;function kc(){}p(kc,mm),kc.prototype.g=function(){return new XMLHttpRequest},Tm=new kc;function Bi(a){return encodeURIComponent(String(a))}function X0(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function Jn(a,h,f,y){this.j=a,this.i=h,this.l=f,this.S=y||1,this.V=new Vi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Im}function Im(){this.i=null,this.g="",this.h=!1}var Sm={},Pc={};function Nc(a,h,f){a.M=1,a.A=La(hn(h)),a.u=f,a.R=!0,Rm(a,null)}function Rm(a,h){a.F=Date.now(),ba(a),a.B=hn(a.A);var f=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),Um(f.i,"t",y),a.C=0,f=a.j.L,a.h=new Im,a.g=ng(a.j,f?h:null,!a.u),a.P>0&&(a.O=new $0(c(a.Y,a,a.g),a.P)),h=a.V,f=a.g,y=a.ba;var O="readystatechange";Array.isArray(O)||(O&&(fm[0]=O.toString()),O=fm);for(let b=0;b<O.length;b++){const z=Na(f,O[b],y||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.J?$(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Ui(),q0(a.i,a.v,a.B,a.l,a.S,a.u)}Jn.prototype.ba=function(a){a=a.target;const h=this.O;h&&tr(a)==3?h.j():this.Y(a)},Jn.prototype.Y=function(a){try{if(a==this.g)e:{const ae=tr(this.g),Ke=this.g.ya(),_e=this.g.ca();if(!(ae<3)&&(ae!=3||this.g&&(this.h.h||this.g.la()||Wm(this.g)))){this.K||ae!=4||Ke==7||(Ke==8||_e<=0?Ui(3):Ui(2)),Oc(this);var h=this.g.ca();this.X=h;var f=Y0(this);if(this.o=h==200,K0(this.i,this.v,this.B,this.l,this.S,ae,h),this.o){if(this.U&&!this.L){t:{if(this.g){var y,O=this.g;if((y=O.g?O.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(y)){var b=y;break t}}b=null}if(a=b)xs(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Dc(this,a);else{this.o=!1,this.m=3,vt(12),Wr(this),zi(this);break e}}if(this.R){a=!0;let Je;for(;!this.K&&this.C<f.length;)if(Je=J0(this,f),Je==Pc){ae==4&&(this.m=4,vt(14),a=!1),xs(this.i,this.l,null,"[Incomplete Response]");break}else if(Je==Sm){this.m=4,vt(15),xs(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else xs(this.i,this.l,Je,null),Dc(this,Je);if(Am(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ae!=4||f.length!=0||this.h.h||(this.m=1,vt(16),a=!1),this.o=this.o&&a,!a)xs(this.i,this.l,f,"[Invalid Chunked Response]"),Wr(this),zi(this);else if(f.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),jc(z),z.P=!0,vt(11))}}else xs(this.i,this.l,f,null),Dc(this,f);ae==4&&Wr(this),this.o&&!this.K&&(ae==4?Jm(this.j,this):(this.o=!1,ba(this)))}else dS(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,vt(12)):(this.m=0,vt(13)),Wr(this),zi(this)}}}catch{}finally{}};function Y0(a){if(!Am(a))return a.g.la();const h=Wm(a.g);if(h==="")return"";let f="";const y=h.length,O=tr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Wr(a),zi(a),"";a.h.i=new o.TextDecoder}for(let b=0;b<y;b++)a.h.h=!0,f+=a.h.i.decode(h[b],{stream:!(O&&b==y-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function Am(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function J0(a,h){var f=a.C,y=h.indexOf(`
`,f);return y==-1?Pc:(f=Number(h.substring(f,y)),isNaN(f)?Sm:(y+=1,y+f>h.length?Pc:(h=h.slice(y,y+f),a.C=y+f,h)))}Jn.prototype.cancel=function(){this.K=!0,Wr(this)};function ba(a){a.T=Date.now()+a.H,Cm(a,a.H)}function Cm(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Fi(c(a.aa,a),h)}function Oc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Jn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(G0(this.i,this.B),this.M!=2&&(Ui(),vt(17)),Wr(this),this.m=2,zi(this)):Cm(this,this.T-a)};function zi(a){a.j.I==0||a.K||Jm(a.j,a)}function Wr(a){Oc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,pm(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Dc(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||xc(f.h,a))){if(!a.L&&xc(f.h,a)&&f.I==3){try{var y=f.Ba.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var O=y;if(O[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)ja(f),Ua(f);else break e;Fc(f),vt(18)}}else f.xa=O[1],0<f.xa-f.K&&O[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Fi(c(f.Va,f),6e3));Nm(f.h)<=1&&f.ta&&(f.ta=void 0)}else Kr(f,11)}else if((a.L||f.g==a)&&ja(f),!g(h))for(O=f.Ba.g.parse(h),h=0;h<O.length;h++){let _e=O[h];const Je=_e[0];if(!(Je<=f.K))if(f.K=Je,_e=_e[1],f.I==2)if(_e[0]=="c"){f.M=_e[1],f.ba=_e[2];const dn=_e[3];dn!=null&&(f.ka=dn,f.j.info("VER="+f.ka));const Gr=_e[4];Gr!=null&&(f.za=Gr,f.j.info("SVER="+f.za));const nr=_e[5];nr!=null&&typeof nr=="number"&&nr>0&&(y=1.5*nr,f.O=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const rr=a.g;if(rr){const za=rr.g?rr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(za){var b=y.h;b.g||za.indexOf("spdy")==-1&&za.indexOf("quic")==-1&&za.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(bc(b,b.h),b.h=null))}if(y.G){const Bc=rr.g?rr.g.getResponseHeader("X-HTTP-Session-Id"):null;Bc&&(y.wa=Bc,Ee(y.J,y.G,Bc))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),y=f;var z=a;if(y.na=tg(y,y.L?y.ba:null,y.W),z.L){Om(y.h,z);var ae=z,Ke=y.O;Ke&&(ae.H=Ke),ae.D&&(Oc(ae),ba(ae)),y.g=z}else Xm(y);f.i.length>0&&Fa(f)}else _e[0]!="stop"&&_e[0]!="close"||Kr(f,7);else f.I==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?Kr(f,7):Uc(f):_e[0]!="noop"&&f.l&&f.l.qa(_e),f.A=0)}}Ui(4)}catch{}}var Z0=class{constructor(a,h){this.g=a,this.map=h}};function km(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Pm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Nm(a){return a.h?1:a.g?a.g.size:0}function xc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function bc(a,h){a.g?a.g.add(h):a.h=h}function Om(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}km.prototype.cancel=function(){if(this.i=Dm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Dm(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return S(a.i)}var xm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function eS(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const y=a[f].indexOf("=");let O,b=null;y>=0?(O=a[f].substring(0,y),b=a[f].substring(y+1)):O=a[f],h(O,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Zn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Zn?(this.l=a.l,$i(this,a.j),this.o=a.o,this.g=a.g,Hi(this,a.u),this.h=a.h,Lc(this,Fm(a.i)),this.m=a.m):a&&(h=String(a).match(xm))?(this.l=!1,$i(this,h[1]||"",!0),this.o=Wi(h[2]||""),this.g=Wi(h[3]||"",!0),Hi(this,h[4]),this.h=Wi(h[5]||"",!0),Lc(this,h[6]||"",!0),this.m=Wi(h[7]||"")):(this.l=!1,this.i=new Ki(null,this.l))}Zn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(qi(h,bm,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(qi(h,bm,!0),"@"),a.push(Bi(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(qi(f,f.charAt(0)=="/"?rS:nS,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",qi(f,iS)),a.join("")},Zn.prototype.resolve=function(a){const h=hn(this);let f=!!a.j;f?$i(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var y=a.h;if(f)Hi(h,a.u);else if(f=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var O=h.h.lastIndexOf("/");O!=-1&&(y=h.h.slice(0,O+1)+y)}if(O=y,O==".."||O==".")y="";else if(O.indexOf("./")!=-1||O.indexOf("/.")!=-1){y=O.lastIndexOf("/",0)==0,O=O.split("/");const b=[];for(let z=0;z<O.length;){const ae=O[z++];ae=="."?y&&z==O.length&&b.push(""):ae==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),y&&z==O.length&&b.push("")):(b.push(ae),y=!0)}y=b.join("/")}else y=O}return f?h.h=y:f=a.i.toString()!=="",f?Lc(h,Fm(a.i)):f=!!a.m,f&&(h.m=a.m),h};function hn(a){return new Zn(a)}function $i(a,h,f){a.j=f?Wi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Hi(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Lc(a,h,f){h instanceof Ki?(a.i=h,oS(a.i,a.l)):(f||(h=qi(h,sS)),a.i=new Ki(h,a.l))}function Ee(a,h,f){a.i.set(h,f)}function La(a){return Ee(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Wi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function qi(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,tS),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function tS(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var bm=/[#\/\?@]/g,nS=/[#\?:]/g,rS=/[#\?]/g,sS=/[#\?@]/g,iS=/#/g;function Ki(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function qr(a){a.g||(a.g=new Map,a.h=0,a.i&&eS(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Ki.prototype,t.add=function(a,h){qr(this),this.i=null,a=bs(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Lm(a,h){qr(a),h=bs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Vm(a,h){return qr(a),h=bs(a,h),a.g.has(h)}t.forEach=function(a,h){qr(this),this.g.forEach(function(f,y){f.forEach(function(O){a.call(h,O,y,this)},this)},this)};function Mm(a,h){qr(a);let f=[];if(typeof h=="string")Vm(a,h)&&(f=f.concat(a.g.get(bs(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}t.set=function(a,h){return qr(this),this.i=null,a=bs(this,a),Vm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Mm(this,a),a.length>0?String(a[0]):h):h};function Um(a,h,f){Lm(a,h),f.length>0&&(a.i=null,a.g.set(bs(a,h),S(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let y=0;y<h.length;y++){var f=h[y];const O=Bi(f);f=Mm(this,f);for(let b=0;b<f.length;b++){let z=O;f[b]!==""&&(z+="="+Bi(f[b])),a.push(z)}}return this.i=a.join("&")};function Fm(a){const h=new Ki;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function bs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function oS(a,h){h&&!a.j&&(qr(a),a.i=null,a.g.forEach(function(f,y){const O=y.toLowerCase();y!=O&&(Lm(this,y),Um(this,O,f))},a)),a.j=h}function aS(a,h){const f=new ji;if(o.Image){const y=new Image;y.onload=d(er,f,"TestLoadImage: loaded",!0,h,y),y.onerror=d(er,f,"TestLoadImage: error",!1,h,y),y.onabort=d(er,f,"TestLoadImage: abort",!1,h,y),y.ontimeout=d(er,f,"TestLoadImage: timeout",!1,h,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function lS(a,h){const f=new ji,y=new AbortController,O=setTimeout(()=>{y.abort(),er(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(b=>{clearTimeout(O),b.ok?er(f,"TestPingServer: ok",!0,h):er(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),er(f,"TestPingServer: error",!1,h)})}function er(a,h,f,y,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),y(f)}catch{}}function uS(){this.g=new W0}function Vc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Vc,mm),Vc.prototype.g=function(){return new Va(this.i,this.h)};function Va(a,h){lt.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Va,lt),t=Va.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Qi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Gi(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Qi(this)),this.g&&(this.readyState=3,Qi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;jm(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function jm(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Gi(this):Qi(this),this.readyState==3&&jm(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Gi(this))},t.Na=function(a){this.g&&(this.response=a,Gi(this))},t.ga=function(){this.g&&Gi(this)};function Gi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Qi(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Qi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Va.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Bm(a){let h="";return W(a,function(f,y){h+=y,h+=":",h+=f,h+=`\r
`}),h}function Mc(a,h,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=Bm(f),typeof a=="string"?f!=null&&Bi(f):Ee(a,h,f))}function be(a){lt.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(be,lt);var cS=/^https?$/i,hS=["POST","PUT"];t=be.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Tm.g(),this.g.onreadystatechange=m(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(b){zm(this,b);return}if(a=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var O in y)f.set(O,y[O]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const b of y.keys())f.set(b,y.get(b));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(b=>b.toLowerCase()=="content-type"),O=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(hS,h,void 0)>=0)||y||O||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,z]of f)this.g.setRequestHeader(b,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(b){zm(this,b)}};function zm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,$m(a),Ma(a)}function $m(a){a.A||(a.A=!0,_t(a,"complete"),_t(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,_t(this,"complete"),_t(this,"abort"),Ma(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ma(this,!0)),be.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Hm(this):this.Xa())},t.Xa=function(){Hm(this)};function Hm(a){if(a.h&&typeof i<"u"){if(a.v&&tr(a)==4)setTimeout(a.Ca.bind(a),0);else if(_t(a,"readystatechange"),tr(a)==4){a.h=!1;try{const b=a.ca();e:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var y;if(y=b===0){let z=String(a.D).match(xm)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),y=!cS.test(z?z.toLowerCase():"")}f=y}if(f)_t(a,"complete"),_t(a,"success");else{a.o=6;try{var O=tr(a)>2?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.ca()+"]",$m(a)}}finally{Ma(a)}}}}function Ma(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||_t(a,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function tr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return tr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),H0(h)}};function Wm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function dS(a){const h={};a=(a.g&&tr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(g(a[y]))continue;var f=X0(a[y]);const O=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const b=h[O]||[];h[O]=b,b.push(f)}q(h,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xi(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function qm(a){this.za=0,this.i=[],this.j=new ji,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Xi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Xi("baseRetryDelayMs",5e3,a),this.Za=Xi("retryDelaySeedMs",1e4,a),this.Ta=Xi("forwardChannelMaxRetries",2,a),this.va=Xi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new km(a&&a.concurrentRequestLimit),this.Ba=new uS,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=qm.prototype,t.ka=8,t.I=1,t.connect=function(a,h,f,y){vt(0),this.W=a,this.H=h||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.J=tg(this,null,this.W),Fa(this)};function Uc(a){if(Km(a),a.I==3){var h=a.V++,f=hn(a.J);if(Ee(f,"SID",a.M),Ee(f,"RID",h),Ee(f,"TYPE","terminate"),Yi(a,f),h=new Jn(a,a.j,h),h.M=2,h.A=La(hn(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=ng(h.j,null),h.g.ea(h.A)),h.F=Date.now(),ba(h)}eg(a)}function Ua(a){a.g&&(jc(a),a.g.cancel(),a.g=null)}function Km(a){Ua(a),a.v&&(o.clearTimeout(a.v),a.v=null),ja(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Fa(a){if(!Pm(a.h)&&!a.m){a.m=!0;var h=a.Ea;U||_(),B||(U(),B=!0),v.add(h,a),a.D=0}}function fS(a,h){return Nm(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Fi(c(a.Ea,a,h),Zm(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const O=new Jn(this,this.j,a);let b=this.o;if(this.U&&(b?(b=$(b),Ce(b,this.U)):b=this.U),this.u!==null||this.R||(O.J=b,b=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Qm(this,O,h),f=hn(this.J),Ee(f,"RID",a),Ee(f,"CVER",22),this.G&&Ee(f,"X-HTTP-Session-Id",this.G),Yi(this,f),b&&(this.R?h="headers="+Bi(Bm(b))+"&"+h:this.u&&Mc(f,this.u,b)),bc(this.h,O),this.Ra&&Ee(f,"TYPE","init"),this.S?(Ee(f,"$req",h),Ee(f,"SID","null"),O.U=!0,Nc(O,f,null)):Nc(O,f,h),this.I=2}}else this.I==3&&(a?Gm(this,a):this.i.length==0||Pm(this.h)||Gm(this))};function Gm(a,h){var f;h?f=h.l:f=a.V++;const y=hn(a.J);Ee(y,"SID",a.M),Ee(y,"RID",f),Ee(y,"AID",a.K),Yi(a,y),a.u&&a.o&&Mc(y,a.u,a.o),f=new Jn(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Qm(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),bc(a.h,f),Nc(f,y,h)}function Yi(a,h){a.H&&W(a.H,function(f,y){Ee(h,y,f)}),a.l&&W({},function(f,y){Ee(h,y,f)})}function Qm(a,h,f){f=Math.min(a.i.length,f);const y=a.l?c(a.l.Ka,a.l,a):null;e:{var O=a.i;let ae=-1;for(;;){const Ke=["count="+f];ae==-1?f>0?(ae=O[0].g,Ke.push("ofs="+ae)):ae=0:Ke.push("ofs="+ae);let _e=!0;for(let Je=0;Je<f;Je++){var b=O[Je].g;const dn=O[Je].map;if(b-=ae,b<0)ae=Math.max(0,O[Je].g-100),_e=!1;else try{b="req"+b+"_"||"";try{var z=dn instanceof Map?dn:Object.entries(dn);for(const[Gr,nr]of z){let rr=nr;l(nr)&&(rr=Rc(nr)),Ke.push(b+Gr+"="+encodeURIComponent(rr))}}catch(Gr){throw Ke.push(b+"type="+encodeURIComponent("_badmap")),Gr}}catch{y&&y(dn)}}if(_e){z=Ke.join("&");break e}}z=void 0}return a=a.i.splice(0,f),h.G=a,z}function Xm(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;U||_(),B||(U(),B=!0),v.add(h,a),a.A=0}}function Fc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Fi(c(a.Da,a),Zm(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Ym(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Fi(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,vt(10),Ua(this),Ym(this))};function jc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Ym(a){a.g=new Jn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=hn(a.na);Ee(h,"RID","rpc"),Ee(h,"SID",a.M),Ee(h,"AID",a.K),Ee(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ee(h,"TO",a.ia),Ee(h,"TYPE","xmlhttp"),Yi(a,h),a.u&&a.o&&Mc(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=La(hn(h)),f.u=null,f.R=!0,Rm(f,a)}t.Va=function(){this.C!=null&&(this.C=null,Ua(this),Fc(this),vt(19))};function ja(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Jm(a,h){var f=null;if(a.g==h){ja(a),jc(a),a.g=null;var y=2}else if(xc(a.h,h))f=h.G,Om(a.h,h),y=1;else return;if(a.I!=0){if(h.o)if(y==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var O=a.D;y=Da(),_t(y,new wm(y,f)),Fa(a)}else Xm(a);else if(O=h.m,O==3||O==0&&h.X>0||!(y==1&&fS(a,h)||y==2&&Fc(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),O){case 1:Kr(a,5);break;case 4:Kr(a,10);break;case 3:Kr(a,6);break;default:Kr(a,2)}}}function Zm(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function Kr(a,h){if(a.j.info("Error code "+h),h==2){var f=c(a.bb,a),y=a.Ua;const O=!y;y=new Zn(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||$i(y,"https"),La(y),O?aS(y.toString(),f):lS(y.toString(),f)}else vt(2);a.I=0,a.l&&a.l.pa(h),eg(a),Km(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function eg(a){if(a.I=0,a.ja=[],a.l){const h=Dm(a.h);(h.length!=0||a.i.length!=0)&&(E(a.ja,h),E(a.ja,a.i),a.h.i.length=0,S(a.i),a.i.length=0),a.l.oa()}}function tg(a,h,f){var y=f instanceof Zn?hn(f):new Zn(f);if(y.g!="")h&&(y.g=h+"."+y.g),Hi(y,y.u);else{var O=o.location;y=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;const b=new Zn(null);y&&$i(b,y),h&&(b.g=h),O&&Hi(b,O),f&&(b.h=f),y=b}return f=a.G,h=a.wa,f&&h&&Ee(y,f,h),Ee(y,"VER",a.ka),Yi(a,y),y}function ng(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new be(new Vc({ab:f})):new be(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function rg(){}t=rg.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ba(){}Ba.prototype.g=function(a,h){return new bt(a,h)};function bt(a,h){lt.call(this),this.g=new qm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!g(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!g(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ls(this)}p(bt,lt),bt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},bt.prototype.close=function(){Uc(this.g)},bt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=Rc(a),a=f);h.i.push(new Z0(h.Ya++,a)),h.I==3&&Fa(h)},bt.prototype.N=function(){this.g.l=null,delete this.j,Uc(this.g),delete this.g,bt.Z.N.call(this)};function sg(a){Ac.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(sg,Ac);function ig(){Cc.call(this),this.status=1}p(ig,Cc);function Ls(a){this.g=a}p(Ls,rg),Ls.prototype.ra=function(){_t(this.g,"a")},Ls.prototype.qa=function(a){_t(this.g,new sg(a))},Ls.prototype.pa=function(a){_t(this.g,new ig)},Ls.prototype.oa=function(){_t(this.g,"b")},Ba.prototype.createWebChannel=Ba.prototype.g,bt.prototype.send=bt.prototype.o,bt.prototype.open=bt.prototype.m,bt.prototype.close=bt.prototype.close,GT=function(){return new Ba},KT=function(){return Da()},qT=Hr,Bd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},xa.NO_ERROR=0,xa.TIMEOUT=8,xa.HTTP_ERROR=6,Ml=xa,Em.COMPLETE="complete",WT=Em,gm.EventType=Mi,Mi.OPEN="a",Mi.CLOSE="b",Mi.ERROR="c",Mi.MESSAGE="d",lt.prototype.listen=lt.prototype.J,mo=gm,be.prototype.listenOnce=be.prototype.K,be.prototype.getLastError=be.prototype.Ha,be.prototype.getLastErrorCode=be.prototype.ya,be.prototype.getStatus=be.prototype.ca,be.prototype.getResponseJson=be.prototype.La,be.prototype.getResponseText=be.prototype.la,be.prototype.send=be.prototype.ea,be.prototype.setWithCredentials=be.prototype.Fa,HT=be}).apply(typeof cl<"u"?cl:typeof self<"u"?self:typeof window<"u"?window:{});const c_="@firebase/firestore",h_="4.9.2";/**
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
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
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
 */let Di="12.3.0";/**
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
 */const Es=new WO("@firebase/firestore");function Us(){return Es.logLevel}function K(t,...e){if(Es.logLevel<=de.DEBUG){const n=e.map(_p);Es.debug(`Firestore (${Di}): ${t}`,...n)}}function Gn(t,...e){if(Es.logLevel<=de.ERROR){const n=e.map(_p);Es.error(`Firestore (${Di}): ${t}`,...n)}}function vi(t,...e){if(Es.logLevel<=de.WARN){const n=e.map(_p);Es.warn(`Firestore (${Di}): ${t}`,...n)}}function _p(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function ee(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,QT(t,r,n)}function QT(t,e,n){let r=`FIRESTORE (${Di}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Gn(r),new Error(r)}function me(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||QT(e,s,r)}function ie(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends On{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Bn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class XT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class KO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class GO{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){me(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Bn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Bn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Bn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string",31837,{l:r}),new XT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string",2055,{h:e}),new dt(e)}}class QO{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class XO{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new QO(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class d_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class YO{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Tt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){me(this.o===void 0,3512);const r=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new d_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new d_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function JO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class vp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=JO(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function zd(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Rh(s)===Rh(i)?ue(s,i):Rh(s)?1:-1}return ue(t.length,e.length)}const ZO=55296,eD=57343;function Rh(t){const e=t.charCodeAt(0);return e>=ZO&&e<=eD}function wi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const f_="__name__";class gn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ee(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return gn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof gn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=gn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ue(e.length,n.length)}static compareSegments(e,n){const r=gn.isNumericId(e),s=gn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?gn.extractNumericId(e).compare(gn.extractNumericId(n)):zd(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Cr.fromString(e.substring(4,e.length-2))}}class Se extends gn{construct(e,n,r){return new Se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const tD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends gn{construct(e,n,r){return new st(e,n,r)}static isValidIdentifier(e){return tD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===f_}static keyField(){return new st([f_])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Q(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Q(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Q(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new Q(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
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
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(Se.fromString(e))}static fromName(e){return new J(Se.fromString(e).popFirst(5))}static empty(){return new J(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new Se(e.slice()))}}/**
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
 */function YT(t,e,n){if(!n)throw new Q(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nD(t,e,n,r){if(e===!0&&r===!0)throw new Q(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function p_(t){if(!J.isDocumentKey(t))throw new Q(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function m_(t){if(J.isDocumentKey(t))throw new Q(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function JT(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function wp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee(12329,{type:typeof t})}function Gt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wp(t);throw new Q(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function He(t,e){const n={typeString:t};return e&&(n.value=e),n}function Sa(t,e){if(!JT(t))throw new Q(M.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new Q(M.INVALID_ARGUMENT,n);return!0}/**
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
 */const g_=-62135596800,y_=1e6;class Re{static now(){return Re.fromMillis(Date.now())}static fromDate(e){return Re.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*y_);return new Re(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<g_)throw new Q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/y_}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Re._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Sa(e,Re._jsonSchema))return new Re(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-g_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Re._jsonSchemaVersion="firestore/timestamp/1.0",Re._jsonSchema={type:He("string",Re._jsonSchemaVersion),seconds:He("number"),nanoseconds:He("number")};/**
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
 */class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new Re(0,0))}static max(){return new se(new Re(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ta=-1;function rD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new Re(n+1,0):new Re(n,r));return new Or(s,J.empty(),e)}function sD(t){return new Or(t.readTime,t.key,ta)}class Or{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Or(se.min(),J.empty(),ta)}static max(){return new Or(se.max(),J.empty(),ta)}}function iD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
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
 */const oD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class aD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function xi(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==oD)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(s=>s?V.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new V((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new V((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function lD(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function bi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ac{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ac.ce=-1;/**
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
 */const Ep=-1;function lc(t){return t==null}function Tu(t){return t===0&&1/t==-1/0}function uD(t){return typeof t=="number"&&Number.isInteger(t)&&!Tu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const ZT="";function cD(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=__(e)),e=hD(t.get(n),e);return __(e)}function hD(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case ZT:n+="";break;default:n+=i}}return n}function __(t){return t+ZT+""}/**
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
 */function v_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Cs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function eI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class xe{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new hl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new hl(this.root,e,this.comparator,!1)}getReverseIterator(){return new hl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new hl(this.root,e,this.comparator,!0)}}class hl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??rt.RED,this.left=s??rt.EMPTY,this.right=i??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new rt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return rt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ee(27949);return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw ee(57766)}get value(){throw ee(16141)}get color(){throw ee(16727)}get left(){throw ee(29726)}get right(){throw ee(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ye{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new w_(this.data.getIterator())}getIteratorFrom(e){return new w_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class w_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class rn{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new rn([])}unionWith(e){let n=new Ye(st.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new rn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return wi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class tI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new tI("Invalid base64 string: "+i):i}}(e);return new at(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const dD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Dr(t){if(me(!!t,39018),typeof t=="string"){let e=0;const n=dD.exec(t);if(me(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ue(t.seconds),nanos:Ue(t.nanos)}}function Ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function xr(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
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
 */const nI="server_timestamp",rI="__type__",sI="__previous_value__",iI="__local_write_time__";function Tp(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[rI])==null?void 0:r.stringValue)===nI}function uc(t){const e=t.mapValue.fields[sI];return Tp(e)?uc(e):e}function na(t){const e=Dr(t.mapValue.fields[iI].timestampValue);return new Re(e.seconds,e.nanos)}/**
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
 */class fD{constructor(e,n,r,s,i,o,l,u,c,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d}}const Iu="(default)";class ra{constructor(e,n){this.projectId=e,this.database=n||Iu}static empty(){return new ra("","")}get isDefaultDatabase(){return this.database===Iu}isEqual(e){return e instanceof ra&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const oI="__type__",pD="__max__",dl={mapValue:{}},aI="__vector__",Su="value";function br(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Tp(t)?4:gD(t)?9007199254740991:mD(t)?10:11:ee(28295,{value:t})}function Pn(t,e){if(t===e)return!0;const n=br(t);if(n!==br(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return na(t).isEqual(na(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Dr(s.timestampValue),l=Dr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return xr(s.bytesValue).isEqual(xr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ue(s.geoPointValue.latitude)===Ue(i.geoPointValue.latitude)&&Ue(s.geoPointValue.longitude)===Ue(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ue(s.integerValue)===Ue(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ue(s.doubleValue),l=Ue(i.doubleValue);return o===l?Tu(o)===Tu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return wi(t.arrayValue.values||[],e.arrayValue.values||[],Pn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(v_(o)!==v_(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Pn(o[u],l[u])))return!1;return!0}(t,e);default:return ee(52216,{left:t})}}function sa(t,e){return(t.values||[]).find(n=>Pn(n,e))!==void 0}function Ei(t,e){if(t===e)return 0;const n=br(t),r=br(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ue(i.integerValue||i.doubleValue),u=Ue(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return E_(t.timestampValue,e.timestampValue);case 4:return E_(na(t),na(e));case 5:return zd(t.stringValue,e.stringValue);case 6:return function(i,o){const l=xr(i),u=xr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=ue(l[c],u[c]);if(d!==0)return d}return ue(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ue(Ue(i.latitude),Ue(o.latitude));return l!==0?l:ue(Ue(i.longitude),Ue(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return T_(t.arrayValue,e.arrayValue);case 10:return function(i,o){var m,S,E,k;const l=i.fields||{},u=o.fields||{},c=(m=l[Su])==null?void 0:m.arrayValue,d=(S=u[Su])==null?void 0:S.arrayValue,p=ue(((E=c==null?void 0:c.values)==null?void 0:E.length)||0,((k=d==null?void 0:d.values)==null?void 0:k.length)||0);return p!==0?p:T_(c,d)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===dl.mapValue&&o===dl.mapValue)return 0;if(i===dl.mapValue)return 1;if(o===dl.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=zd(u[p],d[p]);if(m!==0)return m;const S=Ei(l[u[p]],c[d[p]]);if(S!==0)return S}return ue(u.length,d.length)}(t.mapValue,e.mapValue);default:throw ee(23264,{he:n})}}function E_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Dr(t),r=Dr(e),s=ue(n.seconds,r.seconds);return s!==0?s:ue(n.nanos,r.nanos)}function T_(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ei(n[s],r[s]);if(i)return i}return ue(n.length,r.length)}function Ti(t){return $d(t)}function $d(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Dr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return xr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return J.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=$d(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${$d(n.fields[o])}`;return s+"}"}(t.mapValue):ee(61005,{value:t})}function Ul(t){switch(br(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=uc(t);return e?16+Ul(e):16;case 5:return 2*t.stringValue.length;case 6:return xr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ul(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Cs(r.fields,(i,o)=>{s+=i.length+Ul(o)}),s}(t.mapValue);default:throw ee(13486,{value:t})}}function Hd(t){return!!t&&"integerValue"in t}function Ip(t){return!!t&&"arrayValue"in t}function I_(t){return!!t&&"nullValue"in t}function S_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Fl(t){return!!t&&"mapValue"in t}function mD(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[oI])==null?void 0:r.stringValue)===aI}function No(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Cs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=No(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=No(t.arrayValue.values[n]);return e}return{...t}}function gD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===pD}/**
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
 */class Ht{constructor(e){this.value=e}static empty(){return new Ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Fl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=No(n)}setAll(e){let n=st.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=No(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Fl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Fl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Cs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ht(No(this.value))}}function lI(t){const e=[];return Cs(t.fields,(n,r)=>{const s=new st([n]);if(Fl(r)){const i=lI(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new rn(e)}/**
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
 */class pt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new pt(e,0,se.min(),se.min(),se.min(),Ht.empty(),0)}static newFoundDocument(e,n,r,s){return new pt(e,1,n,se.min(),r,s,0)}static newNoDocument(e,n){return new pt(e,2,n,se.min(),se.min(),Ht.empty(),0)}static newUnknownDocument(e,n){return new pt(e,3,n,se.min(),se.min(),Ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ru{constructor(e,n){this.position=e,this.inclusive=n}}function R_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=J.comparator(J.fromName(o.referenceValue),n.key):r=Ei(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function A_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Pn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Au{constructor(e,n="asc"){this.field=e,this.dir=n}}function yD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class uI{}class Qe extends uI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new vD(e,n,r):n==="array-contains"?new TD(e,r):n==="in"?new ID(e,r):n==="not-in"?new SD(e,r):n==="array-contains-any"?new RD(e,r):new Qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new wD(e,r):new ED(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ei(n,this.value)):n!==null&&br(this.value)===br(n)&&this.matchesComparison(Ei(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nn extends uI{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Nn(e,n)}matches(e){return cI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function cI(t){return t.op==="and"}function hI(t){return _D(t)&&cI(t)}function _D(t){for(const e of t.filters)if(e instanceof Nn)return!1;return!0}function Wd(t){if(t instanceof Qe)return t.field.canonicalString()+t.op.toString()+Ti(t.value);if(hI(t))return t.filters.map(e=>Wd(e)).join(",");{const e=t.filters.map(n=>Wd(n)).join(",");return`${t.op}(${e})`}}function dI(t,e){return t instanceof Qe?function(r,s){return s instanceof Qe&&r.op===s.op&&r.field.isEqual(s.field)&&Pn(r.value,s.value)}(t,e):t instanceof Nn?function(r,s){return s instanceof Nn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&dI(o,s.filters[l]),!0):!1}(t,e):void ee(19439)}function fI(t){return t instanceof Qe?function(n){return`${n.field.canonicalString()} ${n.op} ${Ti(n.value)}`}(t):t instanceof Nn?function(n){return n.op.toString()+" {"+n.getFilters().map(fI).join(" ,")+"}"}(t):"Filter"}class vD extends Qe{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class wD extends Qe{constructor(e,n){super(e,"in",n),this.keys=pI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ED extends Qe{constructor(e,n){super(e,"not-in",n),this.keys=pI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function pI(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class TD extends Qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ip(n)&&sa(n.arrayValue,this.value)}}class ID extends Qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&sa(this.value.arrayValue,n)}}class SD extends Qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(sa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!sa(this.value.arrayValue,n)}}class RD extends Qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ip(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>sa(this.value.arrayValue,r))}}/**
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
 */class AD{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function C_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new AD(t,e,n,r,s,i,o)}function Sp(t){const e=ie(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Wd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),lc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ti(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ti(r)).join(",")),e.Te=n}return e.Te}function Rp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!yD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!dI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!A_(t.startAt,e.startAt)&&A_(t.endAt,e.endAt)}function qd(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class cc{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function CD(t,e,n,r,s,i,o,l){return new cc(t,e,n,r,s,i,o,l)}function hc(t){return new cc(t)}function k_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function kD(t){return t.collectionGroup!==null}function Oo(t){const e=ie(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ye(st.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Au(i,r))}),n.has(st.keyField().canonicalString())||e.Ie.push(new Au(st.keyField(),r))}return e.Ie}function Rn(t){const e=ie(t);return e.Ee||(e.Ee=PD(e,Oo(t))),e.Ee}function PD(t,e){if(t.limitType==="F")return C_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Au(s.field,i)});const n=t.endAt?new Ru(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ru(t.startAt.position,t.startAt.inclusive):null;return C_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Kd(t,e,n){return new cc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function dc(t,e){return Rp(Rn(t),Rn(e))&&t.limitType===e.limitType}function mI(t){return`${Sp(Rn(t))}|lt:${t.limitType}`}function Fs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>fI(s)).join(", ")}]`),lc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ti(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ti(s)).join(",")),`Target(${r})`}(Rn(t))}; limitType=${t.limitType})`}function fc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):J.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Oo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const c=R_(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Oo(r),s)||r.endAt&&!function(o,l,u){const c=R_(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Oo(r),s))}(t,e)}function ND(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function gI(t){return(e,n)=>{let r=!1;for(const s of Oo(t)){const i=OD(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function OD(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?Ei(u,c):ee(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee(19790,{direction:t.dir})}}/**
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
 */class ks{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Cs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return eI(this.inner)}size(){return this.innerSize}}/**
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
 */const DD=new xe(J.comparator);function Qn(){return DD}const yI=new xe(J.comparator);function go(...t){let e=yI;for(const n of t)e=e.insert(n.key,n);return e}function _I(t){let e=yI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function rs(){return Do()}function vI(){return Do()}function Do(){return new ks(t=>t.toString(),(t,e)=>t.isEqual(e))}const xD=new xe(J.comparator),bD=new Ye(J.comparator);function ce(...t){let e=bD;for(const n of t)e=e.add(n);return e}const LD=new Ye(ue);function VD(){return LD}/**
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
 */function Ap(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tu(e)?"-0":e}}function wI(t){return{integerValue:""+t}}function MD(t,e){return uD(e)?wI(e):Ap(t,e)}/**
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
 */class pc{constructor(){this._=void 0}}function UD(t,e,n){return t instanceof ia?function(s,i){const o={fields:{[rI]:{stringValue:nI},[iI]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Tp(i)&&(i=uc(i)),i&&(o.fields[sI]=i),{mapValue:o}}(n,e):t instanceof oa?TI(t,e):t instanceof aa?II(t,e):function(s,i){const o=EI(s,i),l=P_(o)+P_(s.Ae);return Hd(o)&&Hd(s.Ae)?wI(l):Ap(s.serializer,l)}(t,e)}function FD(t,e,n){return t instanceof oa?TI(t,e):t instanceof aa?II(t,e):n}function EI(t,e){return t instanceof Cu?function(r){return Hd(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ia extends pc{}class oa extends pc{constructor(e){super(),this.elements=e}}function TI(t,e){const n=SI(e);for(const r of t.elements)n.some(s=>Pn(s,r))||n.push(r);return{arrayValue:{values:n}}}class aa extends pc{constructor(e){super(),this.elements=e}}function II(t,e){let n=SI(e);for(const r of t.elements)n=n.filter(s=>!Pn(s,r));return{arrayValue:{values:n}}}class Cu extends pc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function P_(t){return Ue(t.integerValue||t.doubleValue)}function SI(t){return Ip(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class jD{constructor(e,n){this.field=e,this.transform=n}}function BD(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof oa&&s instanceof oa||r instanceof aa&&s instanceof aa?wi(r.elements,s.elements,Pn):r instanceof Cu&&s instanceof Cu?Pn(r.Ae,s.Ae):r instanceof ia&&s instanceof ia}(t.transform,e.transform)}class zD{constructor(e,n){this.version=e,this.transformResults=n}}class ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ln}static exists(e){return new ln(void 0,e)}static updateTime(e){return new ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function jl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class mc{}function RI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Cp(t.key,ln.none()):new Ra(t.key,t.data,ln.none());{const n=t.data,r=Ht.empty();let s=new Ye(st.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ps(t.key,r,new rn(s.toArray()),ln.none())}}function $D(t,e,n){t instanceof Ra?function(s,i,o){const l=s.value.clone(),u=O_(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ps?function(s,i,o){if(!jl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=O_(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(AI(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function xo(t,e,n,r){return t instanceof Ra?function(i,o,l,u){if(!jl(i.precondition,o))return l;const c=i.value.clone(),d=D_(i.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ps?function(i,o,l,u){if(!jl(i.precondition,o))return l;const c=D_(i.fieldTransforms,u,o),d=o.data;return d.setAll(AI(i)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return jl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function HD(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=EI(r.transform,s||null);i!=null&&(n===null&&(n=Ht.empty()),n.set(r.field,i))}return n||null}function N_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&wi(r,s,(i,o)=>BD(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ra extends mc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ps extends mc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function AI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function O_(t,e,n){const r=new Map;me(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,FD(o,l,n[s]))}return r}function D_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,UD(i,o,e))}return r}class Cp extends mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class WD extends mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class qD{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&$D(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=xo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=xo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=vI();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=RI(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&wi(this.mutations,e.mutations,(n,r)=>N_(n,r))&&wi(this.baseMutations,e.baseMutations,(n,r)=>N_(n,r))}}class kp{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){me(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return xD}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new kp(e,n,r,s)}}/**
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
 */class KD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class GD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ze,he;function QD(t){switch(t){case M.OK:return ee(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return ee(15467,{code:t})}}function CI(t){if(t===void 0)return Gn("GRPC error has no .code"),M.UNKNOWN;switch(t){case ze.OK:return M.OK;case ze.CANCELLED:return M.CANCELLED;case ze.UNKNOWN:return M.UNKNOWN;case ze.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case ze.INTERNAL:return M.INTERNAL;case ze.UNAVAILABLE:return M.UNAVAILABLE;case ze.UNAUTHENTICATED:return M.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case ze.NOT_FOUND:return M.NOT_FOUND;case ze.ALREADY_EXISTS:return M.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return M.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case ze.ABORTED:return M.ABORTED;case ze.OUT_OF_RANGE:return M.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return M.UNIMPLEMENTED;case ze.DATA_LOSS:return M.DATA_LOSS;default:return ee(39323,{code:t})}}(he=ze||(ze={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function XD(){return new TextEncoder}/**
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
 */const YD=new Cr([4294967295,4294967295],0);function x_(t){const e=XD().encode(t),n=new $T;return n.update(e),new Uint8Array(n.digest())}function b_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Cr([n,r],0),new Cr([s,i],0)]}class Pp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new yo(`Invalid padding: ${n}`);if(r<0)throw new yo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new yo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new yo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Cr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Cr.fromNumber(r)));return s.compare(YD)===1&&(s=new Cr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=x_(e),[r,s]=b_(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Pp(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=x_(e),[r,s]=b_(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class yo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class gc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Aa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new gc(se.min(),s,new xe(ue),Qn(),ce())}}class Aa{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Aa(r,n,ce(),ce(),ce())}}/**
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
 */class Bl{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class kI{constructor(e,n){this.targetId=e,this.Ce=n}}class PI{constructor(e,n,r=at.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class L_{constructor(){this.ve=0,this.Fe=V_(),this.Me=at.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ce(),n=ce(),r=ce();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ee(38017,{changeType:i})}}),new Aa(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=V_()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,me(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class JD{constructor(e){this.Ge=e,this.ze=new Map,this.je=Qn(),this.Je=fl(),this.He=fl(),this.Ye=new xe(ue)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ee(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(qd(i))if(r===0){const o=new J(i.path);this.et(n,o,pt.newNoDocument(o,se.min()))}else me(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=xr(r).toUint8Array()}catch(u){if(u instanceof tI)return vi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Pp(o,s,i)}catch(u){return vi(u instanceof yo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&qd(l.target)){const u=new J(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,pt.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=ce();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new gc(e,n,this.Ye,this.je,r);return this.je=Qn(),this.Je=fl(),this.He=fl(),this.Ye=new xe(ue),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new L_,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Ye(ue),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Ye(ue),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new L_),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function fl(){return new xe(J.comparator)}function V_(){return new xe(J.comparator)}const ZD={asc:"ASCENDING",desc:"DESCENDING"},ex={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tx={and:"AND",or:"OR"};class nx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Gd(t,e){return t.useProto3Json||lc(e)?e:{value:e}}function ku(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function NI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function rx(t,e){return ku(t,e.toTimestamp())}function An(t){return me(!!t,49232),se.fromTimestamp(function(n){const r=Dr(n);return new Re(r.seconds,r.nanos)}(t))}function Np(t,e){return Qd(t,e).canonicalString()}function Qd(t,e){const n=function(s){return new Se(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function OI(t){const e=Se.fromString(t);return me(VI(e),10190,{key:e.toString()}),e}function Xd(t,e){return Np(t.databaseId,e.path)}function Ah(t,e){const n=OI(e);if(n.get(1)!==t.databaseId.projectId)throw new Q(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Q(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(xI(n))}function DI(t,e){return Np(t.databaseId,e)}function sx(t){const e=OI(t);return e.length===4?Se.emptyPath():xI(e)}function Yd(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function xI(t){return me(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function M_(t,e,n){return{name:Xd(t,e),fields:n.value.mapValue.fields}}function ix(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ee(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,d){return c.useProto3Json?(me(d===void 0||typeof d=="string",58123),at.fromBase64String(d||"")):(me(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),at.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?M.UNKNOWN:CI(c.code);return new Q(d,c.message||"")}(o);n=new PI(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ah(t,r.document.name),i=An(r.document.updateTime),o=r.document.createTime?An(r.document.createTime):se.min(),l=new Ht({mapValue:{fields:r.document.fields}}),u=pt.newFoundDocument(s,i,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Bl(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ah(t,r.document),i=r.readTime?An(r.readTime):se.min(),o=pt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Bl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ah(t,r.document),i=r.removedTargetIds||[];n=new Bl([],i,s,null)}else{if(!("filter"in e))return ee(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new GD(s,i),l=r.targetId;n=new kI(l,o)}}return n}function ox(t,e){let n;if(e instanceof Ra)n={update:M_(t,e.key,e.value)};else if(e instanceof Cp)n={delete:Xd(t,e.key)};else if(e instanceof Ps)n={update:M_(t,e.key,e.data),updateMask:mx(e.fieldMask)};else{if(!(e instanceof WD))return ee(16599,{Vt:e.type});n={verify:Xd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof ia)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof oa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof aa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Cu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw ee(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:rx(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee(27497)}(t,e.precondition)),n}function ax(t,e){return t&&t.length>0?(me(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?An(s.updateTime):An(i);return o.isEqual(se.min())&&(o=An(i)),new zD(o,s.transformResults||[])}(n,e))):[]}function lx(t,e){return{documents:[DI(t,e.path)]}}function ux(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=DI(t,s);const i=function(c){if(c.length!==0)return LI(Nn.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:js(m.field),direction:dx(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Gd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:s}}function cx(t){let e=sx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){me(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=bI(p);return m instanceof Nn&&hI(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(E){return new Au(Bs(E.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,lc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,S=p.values||[];return new Ru(S,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,S=p.values||[];return new Ru(S,m)}(n.endAt)),CD(e,s,o,i,l,"F",u,c)}function hx(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function bI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Bs(n.unaryFilter.field);return Qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Bs(n.unaryFilter.field);return Qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Bs(n.unaryFilter.field);return Qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Bs(n.unaryFilter.field);return Qe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ee(61313);default:return ee(60726)}}(t):t.fieldFilter!==void 0?function(n){return Qe.create(Bs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ee(58110);default:return ee(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Nn.create(n.compositeFilter.filters.map(r=>bI(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ee(1026)}}(n.compositeFilter.op))}(t):ee(30097,{filter:t})}function dx(t){return ZD[t]}function fx(t){return ex[t]}function px(t){return tx[t]}function js(t){return{fieldPath:t.canonicalString()}}function Bs(t){return st.fromServerFormat(t.fieldPath)}function LI(t){return t instanceof Qe?function(n){if(n.op==="=="){if(S_(n.value))return{unaryFilter:{field:js(n.field),op:"IS_NAN"}};if(I_(n.value))return{unaryFilter:{field:js(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(S_(n.value))return{unaryFilter:{field:js(n.field),op:"IS_NOT_NAN"}};if(I_(n.value))return{unaryFilter:{field:js(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:js(n.field),op:fx(n.op),value:n.value}}}(t):t instanceof Nn?function(n){const r=n.getFilters().map(s=>LI(s));return r.length===1?r[0]:{compositeFilter:{op:px(n.op),filters:r}}}(t):ee(54877,{filter:t})}function mx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function VI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class gr{constructor(e,n,r,s,i=se.min(),o=se.min(),l=at.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class gx{constructor(e){this.yt=e}}function yx(t){const e=cx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Kd(e,e.limit,"L"):e}/**
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
 */class _x{constructor(){this.Cn=new vx}addToCollectionParentIndex(e,n){return this.Cn.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(Or.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(Or.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class vx{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ye(Se.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ye(Se.comparator)).toArray()}}/**
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
 */const U_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},MI=41943040;class At{static withCacheSize(e){return new At(e,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */At.DEFAULT_COLLECTION_PERCENTILE=10,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,At.DEFAULT=new At(MI,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),At.DISABLED=new At(-1,0,0);/**
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
 */class Ii{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Ii(0)}static cr(){return new Ii(-1)}}/**
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
 */const F_="LruGarbageCollector",wx=1048576;function j_([t,e],[n,r]){const s=ue(t,n);return s===0?ue(e,r):s}class Ex{constructor(e){this.Ir=e,this.buffer=new Ye(j_),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();j_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Tx{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){K(F_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){bi(n)?K(F_,"Ignoring IndexedDB error during garbage collection: ",n):await xi(n)}await this.Vr(3e5)})}}class Ix{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return V.resolve(ac.ce);const r=new Ex(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(K("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(U_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(K("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),U_):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(K("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),Us()<=de.DEBUG&&K("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function Sx(t,e){return new Ix(t,e)}/**
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
 */class Rx{constructor(){this.changes=new ks(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Ax{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Cx{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&xo(r.mutation,s,rn.empty(),Re.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ce()){const s=rs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=go();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=rs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ce()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Qn();const o=Do(),l=function(){return Do()}();return n.forEach((u,c)=>{const d=r.get(c.key);s.has(c.key)&&(d===void 0||d.mutation instanceof Ps)?i=i.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),xo(d.mutation,c,d.mutation.getFieldMask(),Re.now())):o.set(c.key,rn.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>l.set(c,new Ax(d,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Do();let s=new xe((o,l)=>o-l),i=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||rn.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(s.get(l.batchId)||ce()).add(u);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=vI();d.forEach(m=>{if(!i.has(m)){const S=RI(n.get(m),r.get(m));S!==null&&p.set(m,S),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return J.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):kD(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):V.resolve(rs());let l=ta,u=i;return o.next(c=>V.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?V.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,ce())).next(d=>({batchId:l,changes:_I(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let s=go();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=go();return this.indexManager.getCollectionParents(e,i).next(l=>V.forEach(l,u=>{const c=function(p,m){return new cc(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,pt.newInvalidDocument(d)))});let l=go();return o.forEach((u,c)=>{const d=i.get(u);d!==void 0&&xo(d.mutation,c,rn.empty(),Re.now()),fc(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class kx{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return V.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:An(s.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:yx(s.bundledQuery),readTime:An(s.readTime)}}(n)),V.resolve()}}/**
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
 */class Px{constructor(){this.overlays=new xe(J.comparator),this.qr=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=rs();return V.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const s=rs(),i=n.length+1,o=new J(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return V.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new xe((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=i.get(c.largestBatchId);d===null&&(d=rs(),i=i.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=rs(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=s)););return V.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new KD(n,r));let i=this.qr.get(n);i===void 0&&(i=ce(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Nx{constructor(){this.sessionToken=at.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
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
 */class Op{constructor(){this.Qr=new Ye(Ze.$r),this.Ur=new Ye(Ze.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Ze(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new J(new Se([])),r=new Ze(n,e),s=new Ze(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new J(new Se([])),r=new Ze(n,e),s=new Ze(n,e+1);let i=ce();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ze(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return J.comparator(e.key,n.key)||ue(e.Yr,n.Yr)}static Kr(e,n){return ue(e.Yr,n.Yr)||J.comparator(e.key,n.key)}}/**
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
 */class Ox{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Ye(Ze.$r)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new qD(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Zr=this.Zr.add(new Ze(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?Ep:this.tr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),s=new Ze(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const l=this.Xr(o.Yr);i.push(l)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ye(ue);return n.forEach(s=>{const i=new Ze(s,0),o=new Ze(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],l=>{r=r.add(l.Yr)})}),V.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;J.isDocumentKey(i)||(i=i.child(""));const o=new Ze(new J(i),0);let l=new Ye(ue);return this.Zr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(u.Yr)),!0)},o),V.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){me(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return V.forEach(n.mutations,s=>{const i=new Ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Ze(n,0),s=this.Zr.firstAfterOrEqual(r);return V.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Dx{constructor(e){this.ri=e,this.docs=function(){return new xe(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(n))}getEntries(e,n){let r=Qn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():pt.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Qn();const o=n.path,l=new J(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||iD(sD(d),r)<=0||(s.has(d.key)||fc(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ee(9500)}ii(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new xx(this)}getSize(e){return V.resolve(this.size)}}class xx extends Rx{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class bx{constructor(e){this.persistence=e,this.si=new ks(n=>Sp(n),Rp),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.oi=0,this._i=new Op,this.targetCount=0,this.ai=Ii.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),V.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Ii(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Pr(n),V.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this._i.containsKey(n))}}/**
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
 */class UI{constructor(e,n){this.ui={},this.overlays={},this.ci=new ac(0),this.li=!1,this.li=!0,this.hi=new Nx,this.referenceDelegate=e(this),this.Pi=new bx(this),this.indexManager=new _x,this.remoteDocumentCache=function(s){return new Dx(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new gx(n),this.Ii=new kx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Px,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new Ox(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const s=new Lx(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return V.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class Lx extends aD{constructor(e){super(),this.currentSequenceNumber=e}}class Dp{constructor(e){this.persistence=e,this.Ri=new Op,this.Vi=null}static mi(e){return new Dp(e)}get fi(){if(this.Vi)return this.Vi;throw ee(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),V.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.fi,r=>{const s=J.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,se.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return V.or([()=>V.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Pu{constructor(e,n){this.persistence=e,this.pi=new ks(r=>cD(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Sx(this,n)}static mi(e,n){return new Pu(e,n)}Ei(){}di(e){return V.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return V.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?V.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,i.removeEntry(o,se.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),V.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),V.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ul(e.data.value)),n}br(e,n,r){return V.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return V.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class xp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=ce(),s=ce();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new xp(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Vx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Mx{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return QC()?8:lD(yt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Vx;return this.Ss(e,n,o).next(l=>{if(i.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(Us()<=de.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",Fs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),V.resolve()):(Us()<=de.DEBUG&&K("QueryEngine","Query:",Fs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Us()<=de.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",Fs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Rn(n))):V.resolve())}ys(e,n){if(k_(n))return V.resolve(null);let r=Rn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Kd(n,null,"F"),r=Rn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ce(...i);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ds(n,l);return this.Cs(n,c,o,u.readTime)?this.ys(e,Kd(n,null,"F")):this.vs(e,c,n,u)}))})))}ws(e,n,r,s){return k_(n)||s.isEqual(se.min())?V.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?V.resolve(null):(Us()<=de.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Fs(n)),this.vs(e,o,n,rD(s,ta)).next(l=>l))})}Ds(e,n){let r=new Ye(gI(e));return n.forEach((s,i)=>{fc(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Us()<=de.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Fs(n)),this.ps.getDocumentsMatchingQuery(e,n,Or.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const bp="LocalStore",Ux=3e8;class Fx{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new xe(ue),this.xs=new ks(i=>Sp(i),Rp),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Cx(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function jx(t,e,n,r){return new Fx(t,e,n,r)}async function FI(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=ce();for(const c of s){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of i){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function Bx(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let S=V.resolve();return m.forEach(E=>{S=S.next(()=>d.getEntry(u,E)).next(k=>{const P=c.docVersions.get(E);me(P!==null,48541),k.version.compareTo(P)<0&&(p.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),d.addEntry(k)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ce();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function jI(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function zx(t,e){const n=ie(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const l=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;l.push(n.Pi.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(i,d.addedDocuments,p)));let S=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?S=S.withResumeToken(at.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):d.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(d.resumeToken,r)),s=s.insert(p,S),function(k,P,T){return k.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=Ux?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(m,S,d)&&l.push(n.Pi.updateTargetData(i,S))});let u=Qn(),c=ce();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push($x(i,o,e.documentUpdates).next(d=>{u=d.ks,c=d.qs})),!r.isEqual(se.min())){const d=n.Pi.getLastRemoteSnapshotVersion(i).next(p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return V.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.Ms=s,i))}function $x(t,e,n){let r=ce(),s=ce();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Qn();return n.forEach((l,u)=>{const c=i.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(se.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):K(bp,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{ks:o,qs:s}})}function Hx(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Ep),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Wx(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,V.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new gr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Jd(t,e,n){const r=ie(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!bi(o))throw o;K(bp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function B_(t,e,n){const r=ie(t);let s=se.min(),i=ce();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=ie(u),m=p.xs.get(d);return m!==void 0?V.resolve(p.Ms.get(m)):p.Pi.getTargetData(c,d)}(r,o,Rn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:se.min(),n?i:ce())).next(l=>(qx(r,ND(e),l),{documents:l,Qs:i})))}function qx(t,e,n){let r=t.Os.get(e)||se.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class z_{constructor(){this.activeTargetIds=VD()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Kx{constructor(){this.Mo=new z_,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new z_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Gx{Oo(e){}shutdown(){}}/**
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
 */const $_="ConnectivityMonitor";class H_{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){K($_,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){K($_,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let pl=null;function Zd(){return pl===null?pl=function(){return 268435456+Math.round(2147483648*Math.random())}():pl++,"0x"+pl.toString(16)}/**
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
 */const Ch="RestConnection",Qx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Xx{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Iu?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Zd(),l=this.zo(e,n.toUriEncodedString());K(Ch,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:c}=new URL(l),d=Br(c);return this.Jo(e,l,u,r,d).then(p=>(K(Ch,`Received RPC '${e}' ${o}: `,p),p),p=>{throw vi(Ch,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Di}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=Qx[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class Yx{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const ht="WebChannelConnection";class Jx extends Xx{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Zd();return new Promise((l,u)=>{const c=new HT;c.setWithCredentials(!0),c.listenOnce(WT.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ml.NO_ERROR:const p=c.getResponseJson();K(ht,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Ml.TIMEOUT:K(ht,`RPC '${e}' ${o} timed out`),u(new Q(M.DEADLINE_EXCEEDED,"Request time out"));break;case Ml.HTTP_ERROR:const m=c.getStatus();if(K(ht,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let S=c.getResponseJson();Array.isArray(S)&&(S=S[0]);const E=S==null?void 0:S.error;if(E&&E.status&&E.message){const k=function(T){const w=T.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(w)>=0?w:M.UNKNOWN}(E.status);u(new Q(k,E.message))}else u(new Q(M.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new Q(M.UNAVAILABLE,"Connection failed."));break;default:ee(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{K(ht,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(s);K(ht,`RPC '${e}' ${o} sending request:`,s),c.send(n,"POST",d,r,15)})}T_(e,n,r){const s=Zd(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=GT(),l=KT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=i.join("");K(ht,`Creating RPC '${e}' stream ${s}: ${d}`,u);const p=o.createWebChannel(d,u);this.I_(p);let m=!1,S=!1;const E=new Yx({Yo:P=>{S?K(ht,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(m||(K(ht,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),K(ht,`RPC '${e}' stream ${s} sending:`,P),p.send(P))},Zo:()=>p.close()}),k=(P,T,w)=>{P.listen(T,R=>{try{w(R)}catch(D){setTimeout(()=>{throw D},0)}})};return k(p,mo.EventType.OPEN,()=>{S||(K(ht,`RPC '${e}' stream ${s} transport opened.`),E.o_())}),k(p,mo.EventType.CLOSE,()=>{S||(S=!0,K(ht,`RPC '${e}' stream ${s} transport closed`),E.a_(),this.E_(p))}),k(p,mo.EventType.ERROR,P=>{S||(S=!0,vi(ht,`RPC '${e}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),E.a_(new Q(M.UNAVAILABLE,"The operation could not be completed")))}),k(p,mo.EventType.MESSAGE,P=>{var T;if(!S){const w=P.data[0];me(!!w,16349);const R=w,D=(R==null?void 0:R.error)||((T=R[0])==null?void 0:T.error);if(D){K(ht,`RPC '${e}' stream ${s} received error:`,D);const U=D.status;let B=function(I){const A=ze[I];if(A!==void 0)return CI(A)}(U),v=D.message;B===void 0&&(B=M.INTERNAL,v="Unknown error status: "+U+" with message "+D.message),S=!0,E.a_(new Q(B,v)),p.close()}else K(ht,`RPC '${e}' stream ${s} received:`,w),E.u_(w)}}),k(l,qT.STAT_EVENT,P=>{P.stat===Bd.PROXY?K(ht,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===Bd.NOPROXY&&K(ht,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{E.__()},0),E}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function kh(){return typeof document<"u"?document:null}/**
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
 */function yc(t){return new nx(t,!0)}/**
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
 */class BI{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&K("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const W_="PersistentStream";class zI{constructor(e,n,r,s,i,o,l,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new BI(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Gn(n.toString()),Gn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new Q(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return K(W_,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(K(W_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Zx extends zI{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=ix(this.serializer,e),r=function(i){if(!("targetChange"in i))return se.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?An(o.readTime):se.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Yd(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=qd(u)?{documents:lx(i,u)}:{query:ux(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=NI(i,o.resumeToken);const c=Gd(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(se.min())>0){l.readTime=ku(i,o.snapshotVersion.toTimestamp());const c=Gd(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=hx(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Yd(this.serializer),n.removeTarget=e,this.q_(n)}}class e2 extends zI{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return me(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,me(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){me(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=ax(e.writeResults,e.commitTime),r=An(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Yd(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ox(this.serializer,r))};this.q_(n)}}/**
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
 */class t2{}class n2 extends t2{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new Q(M.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,Qd(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Q(M.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,Qd(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Q(M.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class r2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Gn(n),this.aa=!1):K("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Ts="RemoteStore";class s2{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Ns(this)&&(K(Ts,"Restarting streams for network reachability change."),await async function(u){const c=ie(u);c.Ea.add(4),await Ca(c),c.Ra.set("Unknown"),c.Ea.delete(4),await _c(c)}(this))})}),this.Ra=new r2(r,s)}}async function _c(t){if(Ns(t))for(const e of t.da)await e(!0)}async function Ca(t){for(const e of t.da)await e(!1)}function $I(t,e){const n=ie(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Up(n)?Mp(n):Li(n).O_()&&Vp(n,e))}function Lp(t,e){const n=ie(t),r=Li(n);n.Ia.delete(e),r.O_()&&HI(n,e),n.Ia.size===0&&(r.O_()?r.L_():Ns(n)&&n.Ra.set("Unknown"))}function Vp(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Li(t).Y_(e)}function HI(t,e){t.Va.Ue(e),Li(t).Z_(e)}function Mp(t){t.Va=new JD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Li(t).start(),t.Ra.ua()}function Up(t){return Ns(t)&&!Li(t).x_()&&t.Ia.size>0}function Ns(t){return ie(t).Ea.size===0}function WI(t){t.Va=void 0}async function i2(t){t.Ra.set("Online")}async function o2(t){t.Ia.forEach((e,n)=>{Vp(t,e)})}async function a2(t,e){WI(t),Up(t)?(t.Ra.ha(e),Mp(t)):t.Ra.set("Unknown")}async function l2(t,e,n){if(t.Ra.set("Online"),e instanceof PI&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.Va.removeTarget(l))}(t,e)}catch(r){K(Ts,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Nu(t,r)}else if(e instanceof Bl?t.Va.Ze(e):e instanceof kI?t.Va.st(e):t.Va.tt(e),!n.isEqual(se.min()))try{const r=await jI(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=i.Ia.get(c);d&&i.Ia.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=i.Ia.get(u);if(!d)return;i.Ia.set(u,d.withResumeToken(at.EMPTY_BYTE_STRING,d.snapshotVersion)),HI(i,u);const p=new gr(d.target,u,c,d.sequenceNumber);Vp(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){K(Ts,"Failed to raise snapshot:",r),await Nu(t,r)}}async function Nu(t,e,n){if(!bi(e))throw e;t.Ea.add(1),await Ca(t),t.Ra.set("Offline"),n||(n=()=>jI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K(Ts,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await _c(t)})}function qI(t,e){return e().catch(n=>Nu(t,n,e))}async function vc(t){const e=ie(t),n=Lr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ep;for(;u2(e);)try{const s=await Hx(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,c2(e,s)}catch(s){await Nu(e,s)}KI(e)&&GI(e)}function u2(t){return Ns(t)&&t.Ta.length<10}function c2(t,e){t.Ta.push(e);const n=Lr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function KI(t){return Ns(t)&&!Lr(t).x_()&&t.Ta.length>0}function GI(t){Lr(t).start()}async function h2(t){Lr(t).ra()}async function d2(t){const e=Lr(t);for(const n of t.Ta)e.ea(n.mutations)}async function f2(t,e,n){const r=t.Ta.shift(),s=kp.from(r,e,n);await qI(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await vc(t)}async function p2(t,e){e&&Lr(t).X_&&await async function(r,s){if(function(o){return QD(o)&&o!==M.ABORTED}(s.code)){const i=r.Ta.shift();Lr(r).B_(),await qI(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await vc(r)}}(t,e),KI(t)&&GI(t)}async function q_(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),K(Ts,"RemoteStore received new credentials");const r=Ns(n);n.Ea.add(3),await Ca(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await _c(n)}async function m2(t,e){const n=ie(t);e?(n.Ea.delete(2),await _c(n)):e||(n.Ea.add(2),await Ca(n),n.Ra.set("Unknown"))}function Li(t){return t.ma||(t.ma=function(n,r,s){const i=ie(n);return i.sa(),new Zx(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:i2.bind(null,t),t_:o2.bind(null,t),r_:a2.bind(null,t),H_:l2.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Up(t)?Mp(t):t.Ra.set("Unknown")):(await t.ma.stop(),WI(t))})),t.ma}function Lr(t){return t.fa||(t.fa=function(n,r,s){const i=ie(n);return i.sa(),new e2(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:h2.bind(null,t),r_:p2.bind(null,t),ta:d2.bind(null,t),na:f2.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await vc(t)):(await t.fa.stop(),t.Ta.length>0&&(K(Ts,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class Fp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Fp(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jp(t,e){if(Gn("AsyncQueue",`${e}: ${t}`),bi(t))return new Q(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ui{static emptySet(e){return new ui(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=go(),this.sortedSet=new xe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ui)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ui;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class K_{constructor(){this.ga=new xe(J.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ee(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Si{constructor(e,n,r,s,i,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Si(e,n,ui.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&dc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class g2{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class y2{constructor(){this.queries=G_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ie(n),i=s.queries;s.queries=G_(),i.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new Q(M.ABORTED,"Firestore shutting down"))}}function G_(){return new ks(t=>mI(t),dc)}async function Bp(t,e){const n=ie(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new g2,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=jp(o,`Initialization of query '${Fs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&$p(n)}async function zp(t,e){const n=ie(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function _2(t,e){const n=ie(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Fa(s)&&(r=!0);o.wa=s}}r&&$p(n)}function v2(t,e,n){const r=ie(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function $p(t){t.Ca.forEach(e=>{e.next()})}var ef,Q_;(Q_=ef||(ef={})).Ma="default",Q_.Cache="cache";class Hp{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Si(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Si.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ef.Cache}}/**
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
 */class QI{constructor(e){this.key=e}}class XI{constructor(e){this.key=e}}class w2{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ce(),this.mutatedKeys=ce(),this.eu=gI(e),this.tu=new ui(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new K_,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),S=fc(this.query,p)?p:null,E=!!m&&this.mutatedKeys.has(m.key),k=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let P=!1;m&&S?m.data.isEqual(S.data)?E!==k&&(r.track({type:3,doc:S}),P=!0):this.su(m,S)||(r.track({type:2,doc:S}),P=!0,(u&&this.eu(S,u)>0||c&&this.eu(S,c)<0)&&(l=!0)):!m&&S?(r.track({type:0,doc:S}),P=!0):m&&!S&&(r.track({type:1,doc:m}),P=!0,(u||c)&&(l=!0)),P&&(S?(o=o.add(S),i=k?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,p)=>function(S,E){const k=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee(20277,{Rt:P})}};return k(S)-k(E)}(d.type,p.type)||this.eu(d.doc,p.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new Si(this.query,e.tu,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new K_,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ce(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new XI(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new QI(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=ce();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Si.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Wp="SyncEngine";class E2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class T2{constructor(e){this.key=e,this.hu=!1}}class I2{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ks(l=>mI(l),dc),this.Iu=new Map,this.Eu=new Set,this.du=new xe(J.comparator),this.Au=new Map,this.Ru=new Op,this.Vu={},this.mu=new Map,this.fu=Ii.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function S2(t,e,n=!0){const r=n0(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await YI(r,e,n,!0),s}async function R2(t,e){const n=n0(t);await YI(n,e,!0,!1)}async function YI(t,e,n,r){const s=await Wx(t.localStore,Rn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await A2(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&$I(t.remoteStore,s),l}async function A2(t,e,n,r,s){t.pu=(p,m,S)=>async function(k,P,T,w){let R=P.view.ru(T);R.Cs&&(R=await B_(k.localStore,P.query,!1).then(({documents:v})=>P.view.ru(v,R)));const D=w&&w.targetChanges.get(P.targetId),U=w&&w.targetMismatches.get(P.targetId)!=null,B=P.view.applyChanges(R,k.isPrimaryClient,D,U);return Y_(k,P.targetId,B.au),B.snapshot}(t,p,m,S);const i=await B_(t.localStore,e,!0),o=new w2(e,i.Qs),l=o.ru(i.documents),u=Aa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(l,t.isPrimaryClient,u);Y_(t,n,c.au);const d=new E2(e,n,o);return t.Tu.set(e,d),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function C2(t,e,n){const r=ie(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!dc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Jd(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Lp(r.remoteStore,s.targetId),tf(r,s.targetId)}).catch(xi)):(tf(r,s.targetId),await Jd(r.localStore,s.targetId,!0))}async function k2(t,e){const n=ie(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Lp(n.remoteStore,r.targetId))}async function P2(t,e,n){const r=V2(t);try{const s=await function(o,l){const u=ie(o),c=Re.now(),d=l.reduce((S,E)=>S.add(E.key),ce());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let E=Qn(),k=ce();return u.Ns.getEntries(S,d).next(P=>{E=P,E.forEach((T,w)=>{w.isValidDocument()||(k=k.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,E)).next(P=>{p=P;const T=[];for(const w of l){const R=HD(w,p.get(w.key).overlayedDocument);R!=null&&T.push(new Ps(w.key,R,lI(R.value.mapValue),ln.exists(!0)))}return u.mutationQueue.addMutationBatch(S,c,T,l)}).next(P=>{m=P;const T=P.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(S,P.batchId,T)})}).then(()=>({batchId:m.batchId,changes:_I(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let c=o.Vu[o.currentUser.toKey()];c||(c=new xe(ue)),c=c.insert(l,u),o.Vu[o.currentUser.toKey()]=c}(r,s.batchId,n),await ka(r,s.changes),await vc(r.remoteStore)}catch(s){const i=jp(s,"Failed to persist write");n.reject(i)}}async function JI(t,e){const n=ie(t);try{const r=await zx(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(me(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?me(o.hu,14607):s.removedDocuments.size>0&&(me(o.hu,42227),o.hu=!1))}),await ka(n,r,e)}catch(r){await xi(r)}}function X_(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=ie(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.Sa)m.va(l)&&(c=!0)}),c&&$p(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function N2(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new xe(J.comparator);o=o.insert(i,pt.newNoDocument(i,se.min()));const l=ce().add(i),u=new gc(se.min(),new Map,new xe(ue),o,l);await JI(r,u),r.du=r.du.remove(i),r.Au.delete(e),qp(r)}else await Jd(r.localStore,e,!1).then(()=>tf(r,e,n)).catch(xi)}async function O2(t,e){const n=ie(t),r=e.batch.batchId;try{const s=await Bx(n.localStore,e);e0(n,r,null),ZI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ka(n,s)}catch(s){await xi(s)}}async function D2(t,e,n){const r=ie(t);try{const s=await function(o,l){const u=ie(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(me(p!==null,37113),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);e0(r,e,n),ZI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ka(r,s)}catch(s){await xi(s)}}function ZI(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function e0(t,e,n){const r=ie(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function tf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||t0(t,r)})}function t0(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Lp(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),qp(t))}function Y_(t,e,n){for(const r of n)r instanceof QI?(t.Ru.addReference(r.key,e),x2(t,r)):r instanceof XI?(K(Wp,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||t0(t,r.key)):ee(19791,{wu:r})}function x2(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(K(Wp,"New document in limbo: "+n),t.Eu.add(r),qp(t))}function qp(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new J(Se.fromString(e)),r=t.fu.next();t.Au.set(r,new T2(n)),t.du=t.du.insert(n,r),$I(t.remoteStore,new gr(Rn(hc(n.path)),r,"TargetPurposeLimboResolution",ac.ce))}}async function ka(t,e,n){const r=ie(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){s.push(c);const p=xp.As(u.targetId,c);i.push(p)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(u,c){const d=ie(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>V.forEach(c,m=>V.forEach(m.Es,S=>d.persistence.referenceDelegate.addReference(p,m.targetId,S)).next(()=>V.forEach(m.ds,S=>d.persistence.referenceDelegate.removeReference(p,m.targetId,S)))))}catch(p){if(!bi(p))throw p;K(bp,"Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const S=d.Ms.get(m),E=S.snapshotVersion,k=S.withLastLimboFreeSnapshotVersion(E);d.Ms=d.Ms.insert(m,k)}}}(r.localStore,i))}async function b2(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){K(Wp,"User change. New user:",e.toKey());const r=await FI(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new Q(M.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ka(n,r.Ls)}}function L2(t,e){const n=ie(t),r=n.Au.get(e);if(r&&r.hu)return ce().add(r.key);{let s=ce();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function n0(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=JI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=L2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=N2.bind(null,e),e.Pu.H_=_2.bind(null,e.eventManager),e.Pu.yu=v2.bind(null,e.eventManager),e}function V2(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=O2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=D2.bind(null,e),e}class Ou{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=yc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return jx(this.persistence,new Mx,e.initialUser,this.serializer)}Cu(e){return new UI(Dp.mi,this.serializer)}Du(e){return new Kx}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ou.provider={build:()=>new Ou};class M2 extends Ou{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){me(this.persistence.referenceDelegate instanceof Pu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Tx(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?At.withCacheSize(this.cacheSizeBytes):At.DEFAULT;return new UI(r=>Pu.mi(r,n),this.serializer)}}class nf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>X_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=b2.bind(null,this.syncEngine),await m2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new y2}()}createDatastore(e){const n=yc(e.databaseInfo.databaseId),r=function(i){return new Jx(i)}(e.databaseInfo);return function(i,o,l,u){return new n2(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new s2(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>X_(this.syncEngine,n,0),function(){return H_.v()?new H_:new Gx}())}createSyncEngine(e,n){return function(s,i,o,l,u,c,d){const p=new I2(s,i,o,l,u,c);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ie(s);K(Ts,"RemoteStore shutting down."),i.Ea.add(5),await Ca(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}nf.provider={build:()=>new nf};/**
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
 */class Kp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Gn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Vr="FirestoreClient";class U2{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=dt.UNAUTHENTICATED,this.clientId=vp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{K(Vr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(K(Vr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=jp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ph(t,e){t.asyncQueue.verifyOperationInProgress(),K(Vr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await FI(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function J_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await F2(t);K(Vr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>q_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>q_(e.remoteStore,s)),t._onlineComponents=e}async function F2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K(Vr,"Using user provided OfflineComponentProvider");try{await Ph(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;vi("Error using user provided cache. Falling back to memory cache: "+n),await Ph(t,new Ou)}}else K(Vr,"Using default OfflineComponentProvider"),await Ph(t,new M2(void 0));return t._offlineComponents}async function r0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K(Vr,"Using user provided OnlineComponentProvider"),await J_(t,t._uninitializedComponentsProvider._online)):(K(Vr,"Using default OnlineComponentProvider"),await J_(t,new nf))),t._onlineComponents}function j2(t){return r0(t).then(e=>e.syncEngine)}async function Du(t){const e=await r0(t),n=e.eventManager;return n.onListen=S2.bind(null,e.syncEngine),n.onUnlisten=C2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=R2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=k2.bind(null,e.syncEngine),n}function B2(t,e,n={}){const r=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const d=new Kp({next:m=>{d.Nu(),o.enqueueAndForget(()=>zp(i,p));const S=m.docs.has(l);!S&&m.fromCache?c.reject(new Q(M.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&m.fromCache&&u&&u.source==="server"?c.reject(new Q(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new Hp(hc(l.path),d,{includeMetadataChanges:!0,qa:!0});return Bp(i,p)}(await Du(t),t.asyncQueue,e,n,r)),r.promise}function z2(t,e,n={}){const r=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const d=new Kp({next:m=>{d.Nu(),o.enqueueAndForget(()=>zp(i,p)),m.fromCache&&u.source==="server"?c.reject(new Q(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new Hp(l,d,{includeMetadataChanges:!0,qa:!0});return Bp(i,p)}(await Du(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function s0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Z_=new Map;/**
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
 */const i0="firestore.googleapis.com",ev=!0;class tv{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Q(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=i0,this.ssl=ev}else this.host=e.host,this.ssl=e.ssl??ev;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=MI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<wx)throw new Q(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=s0(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new qO;switch(r.type){case"firstParty":return new XO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Z_.get(n);r&&(K("ComponentProvider","Removing Datastore"),Z_.delete(n),r.terminate())}(this),Promise.resolve()}}function $2(t,e,n,r={}){var c;t=Gt(t,wc);const s=Br(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(rp(`https://${l}`),sp("Firestore",!0)),i.host!==i0&&i.host!==l&&vi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!ys(u,o)&&(t._setSettings(u),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=dt.MOCK_USER;else{d=nT(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new Q(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new dt(m)}t._authCredentials=new KO(new XT(d,p))}}/**
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
 */class Pa{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Pa(this.firestore,e,this._query)}}class We{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new We(this.firestore,e,this._key)}toJSON(){return{type:We._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Sa(n,We._jsonSchema))return new We(e,r||null,new J(Se.fromString(n.referencePath)))}}We._jsonSchemaVersion="firestore/documentReference/1.0",We._jsonSchema={type:He("string",We._jsonSchemaVersion),referencePath:He("string")};class kr extends Pa{constructor(e,n,r){super(e,n,hc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new We(this.firestore,null,new J(e))}withConverter(e){return new kr(this.firestore,e,this._path)}}function Gp(t,e,...n){if(t=Be(t),YT("collection","path",e),t instanceof wc){const r=Se.fromString(e,...n);return m_(r),new kr(t,null,r)}{if(!(t instanceof We||t instanceof kr))throw new Q(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return m_(r),new kr(t.firestore,null,r)}}function Qp(t,e,...n){if(t=Be(t),arguments.length===1&&(e=vp.newId()),YT("doc","path",e),t instanceof wc){const r=Se.fromString(e,...n);return p_(r),new We(t,null,new J(r))}{if(!(t instanceof We||t instanceof kr))throw new Q(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return p_(r),new We(t.firestore,t instanceof kr?t.converter:null,new J(r))}}/**
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
 */const nv="AsyncQueue";class rv{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new BI(this,"async_queue_retry"),this._c=()=>{const r=kh();r&&K(nv,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=kh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=kh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Bn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!bi(e))throw e;K(nv,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Gn("INTERNAL UNHANDLED ERROR: ",sv(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Fp.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&ee(47125,{Pc:sv(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function sv(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
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
 */function iv(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Mr extends wc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new rv,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new rv(e),this._firestoreClient=void 0,await e}}}function Ri(t,e){const n=typeof t=="object"?t:op(),r=typeof t=="string"?t:Iu,s=nc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ZE("firestore");i&&$2(s,...i)}return s}function Ec(t){if(t._terminated)throw new Q(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||H2(t),t._firestoreClient}function H2(t){var r,s,i;const e=t._freezeSettings(),n=function(l,u,c,d){return new fD(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,s0(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new U2(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Wt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Wt(at.fromBase64String(e))}catch(n){throw new Q(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Wt(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Wt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Sa(e,Wt._jsonSchema))return Wt.fromBase64String(e.bytes)}}Wt._jsonSchemaVersion="firestore/bytes/1.0",Wt._jsonSchema={type:He("string",Wt._jsonSchemaVersion),bytes:He("string")};/**
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
 */class Xp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Q(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Yp{constructor(e){this._methodName=e}}/**
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
 */class Cn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Q(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Q(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Cn._jsonSchemaVersion}}static fromJSON(e){if(Sa(e,Cn._jsonSchema))return new Cn(e.latitude,e.longitude)}}Cn._jsonSchemaVersion="firestore/geoPoint/1.0",Cn._jsonSchema={type:He("string",Cn._jsonSchemaVersion),latitude:He("number"),longitude:He("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class kn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:kn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Sa(e,kn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new kn(e.vectorValues);throw new Q(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}kn._jsonSchemaVersion="firestore/vectorValue/1.0",kn._jsonSchema={type:He("string",kn._jsonSchemaVersion),vectorValues:He("object")};/**
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
 */const W2=/^__.*__$/;class q2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ps(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ra(e,this.data,n,this.fieldTransforms)}}function o0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee(40011,{Ac:t})}}class Jp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Jp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return xu(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(o0(this.Ac)&&W2.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class K2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||yc(e)}Cc(e,n,r,s=!1){return new Jp({Ac:e,methodName:n,Dc:r,path:st.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function a0(t){const e=t._freezeSettings(),n=yc(t._databaseId);return new K2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function l0(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);d0("Data must be an object, but it was:",o,r);const l=c0(r,o);let u,c;if(i.merge)u=new rn(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=G2(e,p,n);if(!o.contains(m))throw new Q(M.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);X2(d,m)||d.push(m)}u=new rn(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new q2(new Ht(l),u,c)}class Zp extends Yp{_toFieldTransform(e){return new jD(e.path,new ia)}isEqual(e){return e instanceof Zp}}function u0(t,e){if(h0(t=Be(t)))return d0("Unsupported field value:",e,t),c0(t,e);if(t instanceof Yp)return function(r,s){if(!o0(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=u0(l,s.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Be(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return MD(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Re.fromDate(r);return{timestampValue:ku(s.serializer,i)}}if(r instanceof Re){const i=new Re(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ku(s.serializer,i)}}if(r instanceof Cn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Wt)return{bytesValue:NI(s.serializer,r._byteString)};if(r instanceof We){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Np(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof kn)return function(o,l){return{mapValue:{fields:{[oI]:{stringValue:aI},[Su]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Sc("VectorValues must only contain numeric values.");return Ap(l.serializer,c)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${wp(r)}`)}(t,e)}function c0(t,e){const n={};return eI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Cs(t,(r,s)=>{const i=u0(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function h0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Re||t instanceof Cn||t instanceof Wt||t instanceof We||t instanceof Yp||t instanceof kn)}function d0(t,e,n){if(!h0(n)||!JT(n)){const r=wp(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function G2(t,e,n){if((e=Be(e))instanceof Xp)return e._internalPath;if(typeof e=="string")return f0(t,e);throw xu("Field path arguments must be of type string or ",t,!1,void 0,n)}const Q2=new RegExp("[~\\*/\\[\\]]");function f0(t,e,n){if(e.search(Q2)>=0)throw xu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Xp(...e.split("."))._internalPath}catch{throw xu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new Q(M.INVALID_ARGUMENT,l+t+u)}function X2(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class p0{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new We(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Y2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(m0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Y2 extends p0{data(){return super.data()}}function m0(t,e){return typeof e=="string"?f0(t,e):e instanceof Xp?e._internalPath:e._delegate._internalPath}/**
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
 */function g0(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Q(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class J2{convertValue(e,n="none"){switch(br(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(xr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ee(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Cs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Su].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Ue(o.doubleValue));return new kn(n)}convertGeoPoint(e){return new Cn(Ue(e.latitude),Ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=uc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(na(e));default:return null}}convertTimestamp(e){const n=Dr(e);return new Re(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Se.fromString(e);me(VI(r),9688,{name:e});const s=new ra(r.get(1),r.get(3)),i=new J(r.popFirst(5));return s.isEqual(n)||Gn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function y0(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class _o{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class as extends p0{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new zl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(m0("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=as._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}as._jsonSchemaVersion="firestore/documentSnapshot/1.0",as._jsonSchema={type:He("string",as._jsonSchemaVersion),bundleSource:He("string","DocumentSnapshot"),bundleName:He("string"),bundle:He("string")};class zl extends as{data(e={}){return super.data(e)}}class ls{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new _o(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new zl(this._firestore,this._userDataWriter,r.key,r,new _o(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Q(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new zl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new _o(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new zl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new _o(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:Z2(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ls._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=vp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Z2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee(61501,{type:t})}}/**
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
 */function _0(t){t=Gt(t,We);const e=Gt(t.firestore,Mr);return B2(Ec(e),t._key).then(n=>v0(e,t,n))}ls._jsonSchemaVersion="firestore/querySnapshot/1.0",ls._jsonSchema={type:He("string",ls._jsonSchemaVersion),bundleSource:He("string","QuerySnapshot"),bundleName:He("string"),bundle:He("string")};class em extends J2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new We(this.firestore,null,n)}}function eb(t){t=Gt(t,Pa);const e=Gt(t.firestore,Mr),n=Ec(e),r=new em(e);return g0(t._query),z2(n,t._query).then(s=>new ls(e,r,t,s))}function tb(t,e,n){t=Gt(t,We);const r=Gt(t.firestore,Mr),s=y0(t.converter,e);return tm(r,[l0(a0(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,ln.none())])}function nb(t){return tm(Gt(t.firestore,Mr),[new Cp(t._key,ln.none())])}function rb(t,e){const n=Gt(t.firestore,Mr),r=Qp(t),s=y0(t.converter,e);return tm(n,[l0(a0(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,ln.exists(!1))]).then(()=>r)}function sb(t,...e){var u,c,d;t=Be(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||iv(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(iv(e[r])){const p=e[r];e[r]=(u=p.next)==null?void 0:u.bind(p),e[r+1]=(c=p.error)==null?void 0:c.bind(p),e[r+2]=(d=p.complete)==null?void 0:d.bind(p)}let i,o,l;if(t instanceof We)o=Gt(t.firestore,Mr),l=hc(t._key.path),i={next:p=>{e[r]&&e[r](v0(o,t,p))},error:e[r+1],complete:e[r+2]};else{const p=Gt(t,Pa);o=Gt(p.firestore,Mr),l=p._query;const m=new em(o);i={next:S=>{e[r]&&e[r](new ls(o,m,p,S))},error:e[r+1],complete:e[r+2]},g0(t._query)}return function(m,S,E,k){const P=new Kp(k),T=new Hp(S,P,E);return m.asyncQueue.enqueueAndForget(async()=>Bp(await Du(m),T)),()=>{P.Nu(),m.asyncQueue.enqueueAndForget(async()=>zp(await Du(m),T))}}(Ec(o),l,s,i)}function tm(t,e){return function(r,s){const i=new Bn;return r.asyncQueue.enqueueAndForget(async()=>P2(await j2(r),s,i)),i.promise}(Ec(t),e)}function v0(t,e,n){const r=n.docs.get(e._key),s=new em(t);return new as(t,s,e._key,r,new _o(n.hasPendingWrites,n.fromCache),e.converter)}function w0(){return new Zp("serverTimestamp")}(function(e,n=!0){(function(s){Di=s})(As),_s(new jO("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Mr(new GO(r.getProvider("auth-internal")),new YO(o,r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new Q(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ra(c.options.projectId,d)}(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Tn(c_,h_,e),Tn(c_,h_,"esm2020")})();class ib{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const E0="firebasestorage.googleapis.com",T0="storageBucket",ob=2*60*1e3,ab=10*60*1e3;/**
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
 */class Me extends On{constructor(e,n,r=0){super(Nh(e),`Firebase Storage: ${n} (${Nh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Me.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Nh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ve;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ve||(Ve={}));function Nh(t){return"storage/"+t}function nm(){const t="An unknown error occurred, please check the error payload for server response.";return new Me(Ve.UNKNOWN,t)}function lb(t){return new Me(Ve.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function ub(t){return new Me(Ve.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function cb(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Me(Ve.UNAUTHENTICATED,t)}function hb(){return new Me(Ve.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function db(t){return new Me(Ve.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function fb(){return new Me(Ve.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function pb(){return new Me(Ve.CANCELED,"User canceled the upload/download.")}function mb(t){return new Me(Ve.INVALID_URL,"Invalid URL '"+t+"'.")}function gb(t){return new Me(Ve.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function yb(){return new Me(Ve.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+T0+"' property when initializing the app?")}function _b(){return new Me(Ve.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function vb(){return new Me(Ve.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function wb(t){return new Me(Ve.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function rf(t){return new Me(Ve.INVALID_ARGUMENT,t)}function I0(){return new Me(Ve.APP_DELETED,"The Firebase app was deleted.")}function Eb(t){return new Me(Ve.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function bo(t,e){return new Me(Ve.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ao(t){throw new Me(Ve.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Mt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Mt.makeFromUrl(e,n)}catch{return new Mt(e,"")}if(r.path==="")return r;throw gb(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function c(D){D.path_=decodeURIComponent(D.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",S=new RegExp(`^https?://${p}/${d}/b/${s}/o${m}`,"i"),E={bucket:1,path:3},k=n===E0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",T=new RegExp(`^https?://${k}/${s}/${P}`,"i"),R=[{regex:l,indices:u,postModify:i},{regex:S,indices:E,postModify:c},{regex:T,indices:{bucket:1,path:2},postModify:c}];for(let D=0;D<R.length;D++){const U=R[D],B=U.regex.exec(e);if(B){const v=B[U.indices.bucket];let _=B[U.indices.path];_||(_=""),r=new Mt(v,_),U.postModify(r);break}}if(r==null)throw mb(e);return r}}class Tb{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Ib(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...P){c||(c=!0,e.apply(null,P))}function p(P){s=setTimeout(()=>{s=null,t(S,u())},P)}function m(){i&&clearTimeout(i)}function S(P,...T){if(c){m();return}if(P){m(),d.call(null,P,...T);return}if(u()||o){m(),d.call(null,P,...T);return}r<64&&(r*=2);let R;l===1?(l=2,R=0):R=(r+Math.random())*1e3,p(R)}let E=!1;function k(P){E||(E=!0,m(),!c&&(s!==null?(P||(l=2),clearTimeout(s),p(0)):P||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,k(!0)},n),k}function Sb(t){t(!1)}/**
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
 */function Rb(t){return t!==void 0}function Ab(t){return typeof t=="object"&&!Array.isArray(t)}function rm(t){return typeof t=="string"||t instanceof String}function ov(t){return sm()&&t instanceof Blob}function sm(){return typeof Blob<"u"}function av(t,e,n,r){if(r<e)throw rf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw rf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function im(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function S0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var us;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(us||(us={}));/**
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
 */function Cb(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class kb{constructor(e,n,r,s,i,o,l,u,c,d,p,m=!0,S=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.isUsingEmulator=S,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,k)=>{this.resolve_=E,this.reject_=k,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ml(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===us.NO_ERROR,u=i.getStatus();if(!l||Cb(u,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===us.ABORT;r(!1,new ml(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new ml(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());Rb(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=nm();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?I0():pb();o(u)}else{const u=fb();o(u)}};this.canceled_?n(!1,new ml(!1,null,!0)):this.backoffId_=Ib(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Sb(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ml{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Pb(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Nb(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Ob(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Db(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function xb(t,e,n,r,s,i,o=!0,l=!1){const u=S0(t.urlParams),c=t.url+u,d=Object.assign({},t.headers);return Ob(d,e),Pb(d,n),Nb(d,i),Db(d,r),new kb(c,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
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
 */function bb(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Lb(...t){const e=bb();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(sm())return new Blob(t);throw new Me(Ve.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Vb(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function Mb(t){if(typeof atob>"u")throw wb("base-64");return atob(t)}/**
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
 */const vn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Oh{constructor(e,n){this.data=e,this.contentType=n||null}}function Ub(t,e){switch(t){case vn.RAW:return new Oh(R0(e));case vn.BASE64:case vn.BASE64URL:return new Oh(A0(t,e));case vn.DATA_URL:return new Oh(jb(e),Bb(e))}throw nm()}function R0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Fb(t){let e;try{e=decodeURIComponent(t)}catch{throw bo(vn.DATA_URL,"Malformed data URL.")}return R0(e)}function A0(t,e){switch(t){case vn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw bo(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case vn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw bo(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Mb(e)}catch(s){throw s.message.includes("polyfill")?s:bo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class C0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw bo(vn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=zb(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function jb(t){const e=new C0(t);return e.base64?A0(vn.BASE64,e.rest):Fb(e.rest)}function Bb(t){return new C0(t).contentType}function zb(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class fr{constructor(e,n){let r=0,s="";ov(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(ov(this.data_)){const r=this.data_,s=Vb(r,e,n);return s===null?null:new fr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new fr(r,!0)}}static getBlob(...e){if(sm()){const n=e.map(r=>r instanceof fr?r.data_:r);return new fr(Lb.apply(null,n))}else{const n=e.map(o=>rm(o)?Ub(vn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new fr(s,!0)}}uploadData(){return this.data_}}/**
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
 */function k0(t){let e;try{e=JSON.parse(t)}catch{return null}return Ab(e)?e:null}/**
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
 */function $b(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Hb(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function P0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function Wb(t,e){return e}class wt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||Wb}}let gl=null;function qb(t){return!rm(t)||t.length<2?t:P0(t)}function N0(){if(gl)return gl;const t=[];t.push(new wt("bucket")),t.push(new wt("generation")),t.push(new wt("metageneration")),t.push(new wt("name","fullPath",!0));function e(i,o){return qb(o)}const n=new wt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new wt("size");return s.xform=r,t.push(s),t.push(new wt("timeCreated")),t.push(new wt("updated")),t.push(new wt("md5Hash",null,!0)),t.push(new wt("cacheControl",null,!0)),t.push(new wt("contentDisposition",null,!0)),t.push(new wt("contentEncoding",null,!0)),t.push(new wt("contentLanguage",null,!0)),t.push(new wt("contentType",null,!0)),t.push(new wt("metadata","customMetadata",!0)),gl=t,gl}function Kb(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Mt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Gb(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return Kb(r,t),r}function O0(t,e,n){const r=k0(e);return r===null?null:Gb(t,r,n)}function Qb(t,e,n,r){const s=k0(e);if(s===null||!rm(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const d=t.bucket,p=t.fullPath,m="/b/"+o(d)+"/o/"+o(p),S=im(m,n,r),E=S0({alt:"media",token:c});return S+E})[0]}function Xb(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class D0{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function x0(t){if(!t)throw nm()}function Yb(t,e){function n(r,s){const i=O0(t,s,e);return x0(i!==null),i}return n}function Jb(t,e){function n(r,s){const i=O0(t,s,e);return x0(i!==null),Qb(i,s,t.host,t._protocol)}return n}function b0(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=hb():s=cb():n.getStatus()===402?s=ub(t.bucket):n.getStatus()===403?s=db(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Zb(t){const e=b0(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=lb(t.path)),i.serverResponse=s.serverResponse,i}return n}function eL(t,e,n){const r=e.fullServerUrl(),s=im(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new D0(s,i,Jb(t,n),o);return l.errorHandler=Zb(e),l}function tL(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function nL(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=tL(null,e)),r}function rL(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let R="";for(let D=0;D<2;D++)R=R+Math.random().toString().slice(2);return R}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=nL(e,r,s),d=Xb(c,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",S=fr.getBlob(p,r,m);if(S===null)throw _b();const E={name:c.fullPath},k=im(i,t.host,t._protocol),P="POST",T=t.maxUploadRetryTime,w=new D0(k,P,Yb(t,n),T);return w.urlParams=E,w.headers=o,w.body=S.uploadData(),w.errorHandler=b0(e),w}class sL{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=us.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=us.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=us.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw ao("cannot .send() more than once");if(Br(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ao("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ao("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ao("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ao("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class iL extends sL{initXhr(){this.xhr_.responseType="text"}}function L0(){return new iL}/**
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
 */class Is{constructor(e,n){this._service=e,n instanceof Mt?this._location=n:this._location=Mt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Is(e,n)}get root(){const e=new Mt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return P0(this._location.path)}get storage(){return this._service}get parent(){const e=$b(this._location.path);if(e===null)return null;const n=new Mt(this._location.bucket,e);return new Is(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Eb(e)}}function oL(t,e,n){t._throwIfRoot("uploadBytes");const r=rL(t.storage,t._location,N0(),new fr(e,!0),n);return t.storage.makeRequestWithTokens(r,L0).then(s=>({metadata:s,ref:t}))}function aL(t){t._throwIfRoot("getDownloadURL");const e=eL(t.storage,t._location,N0());return t.storage.makeRequestWithTokens(e,L0).then(n=>{if(n===null)throw vb();return n})}function lL(t,e){const n=Hb(t._location.path,e),r=new Mt(t._location.bucket,n);return new Is(t.storage,r)}/**
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
 */function uL(t){return/^[A-Za-z]+:\/\//.test(t)}function cL(t,e){return new Is(t,e)}function V0(t,e){if(t instanceof om){const n=t;if(n._bucket==null)throw yb();const r=new Is(n,n._bucket);return e!=null?V0(r,e):r}else return e!==void 0?lL(t,e):t}function hL(t,e){if(e&&uL(e)){if(t instanceof om)return cL(t,e);throw rf("To use ref(service, url), the first argument must be a Storage instance.")}else return V0(t,e)}function lv(t,e){const n=e==null?void 0:e[T0];return n==null?null:Mt.makeFromBucketSpec(n,t)}function dL(t,e,n,r={}){t.host=`${e}:${n}`;const s=Br(e);s&&(rp(`https://${t.host}/b`),sp("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:nT(i,t.app.options.projectId))}class om{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=E0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ob,this._maxUploadRetryTime=ab,this._requests=new Set,s!=null?this._bucket=Mt.makeFromBucketSpec(s,this._host):this._bucket=lv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Mt.makeFromBucketSpec(this._url,e):this._bucket=lv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){av("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){av("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Tt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Is(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new Tb(I0());{const o=xb(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const uv="@firebase/storage",cv="0.14.0";/**
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
 */const M0="storage";function fL(t,e,n){return t=Be(t),oL(t,e,n)}function pL(t){return t=Be(t),aL(t)}function mL(t,e){return t=Be(t),hL(t,e)}function U0(t=op(),e){t=Be(t);const r=nc(t,M0).getImmediate({identifier:e}),s=ZE("storage");return s&&gL(r,...s),r}function gL(t,e,n,r={}){dL(t,e,n,r)}function yL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new om(n,r,s,e,As)}function _L(){_s(new ib(M0,yL,"PUBLIC").setMultipleInstances(!0)),Tn(uv,cv,""),Tn(uv,cv,"esm2020")}_L();let Ms,yl,Dh,xh;function xn(){if(sP().length)return{app:Ms,auth:yl,db:Dh,storage:xh};const t={apiKey:"AIzaSyAvVEGtYenoUVawy0HNvSALGIqzc_Rnr6M",authDomain:"web-hack-4db89.firebaseapp.com",projectId:"web-hack-4db89",storageBucket:"web-hack-4db89.appspot.com",messagingSenderId:"906876042941",appId:"1:906876042941:web:5c2ecc42d811be102541d4"};if(!t.apiKey)return null;Ms=iT(t),yl=$r(Ms),Dh=Ri(Ms),xh=U0(Ms);try{IN(yl,pp)}catch{}return{app:Ms,auth:yl,db:Dh,storage:xh}}function am(t){return xn(),AN($r(),e=>t(e))}async function vL(){xn();const t=new _n;return t.setCustomParameters({prompt:"select_account"}),(await KN($r(),t)).user}async function wL(){xn();const t=new _n;t.setCustomParameters({prompt:"select_account"}),await ZN($r(),t)}async function EL(){xn();try{const t=await tO($r());return(t==null?void 0:t.user)||null}catch(t){throw t}}async function TL(t,e){xn();const{user:n}=await wN($r(),t,e);return n}async function IL({email:t,password:e,displayName:n}){xn();const{user:r}=await vN($r(),t,e);return n&&await TN(r,{displayName:n}),r}async function SL(){xn(),await CN($r())}async function bh(t,e){if(!xn())throw new Error("Firebase not configured");const r=`markers/${t}/${Date.now()}_${e.name}`,s=mL(U0(),r);return await fL(s,e),pL(s)}async function F0(t,e){if(!xn())return{liked:!1,count:0};const r=await _0(Qp(Ri(),`markers/${t}/likes/${e}`)),s=await eb(Gp(Ri(),`markers/${t}/likes`));return{liked:r.exists(),count:s.size}}async function RL(t,e){const n=Qp(Ri(),`markers/${t}/likes/${e}`);return(await _0(n)).exists()?await nb(n):await tb(n,{createdAt:w0()}),F0(t,e)}function AL(t,e){const n=Gp(Ri(),`markers/${t}/comments`);return sb(n,r=>{const s=[];r.forEach(i=>s.push({id:i.id,...i.data()})),s.sort((i,o)=>{var l,u,c,d;return(((u=(l=i.createdAt)==null?void 0:l.toMillis)==null?void 0:u.call(l))||0)-(((d=(c=o.createdAt)==null?void 0:c.toMillis)==null?void 0:d.call(c))||0)}),e(s)})}async function CL(t,{uid:e,text:n}){const r=Gp(Ri(),`markers/${t}/comments`);await rb(r,{uid:e,text:n,createdAt:w0()})}function kL(){var I,A,C,N;const[t,e]=te.useState(null),n=te.useRef(null),r=te.useRef(null),s=te.useRef(null),i=te.useRef(null),[o,l]=te.useState(null),[u,c]=te.useState([]),d=te.useRef(new Map),[p,m]=te.useState({open:!1,mode:null,data:null}),[S,E]=te.useState(null),[k,P]=te.useState(!1),T=!1,w=te.useMemo(()=>({lat:16.4739,lng:102.823}),[]),R=te.useRef(!1),D=te.useRef(null),U=te.useMemo(()=>[{lat:16.4907,lng:102.809},{lat:16.49,lng:102.8325},{lat:16.486,lng:102.842},{lat:16.472,lng:102.846},{lat:16.46,lng:102.8425},{lat:16.4585,lng:102.825},{lat:16.461,lng:102.812},{lat:16.473,lng:102.804}],[]);te.useEffect(()=>{try{T||xn()}catch{}e({status:"ok"});const g=am(X=>{E(X),P(!0)});return()=>g&&g()},[]),te.useEffect(()=>{k&&S===null&&(window.location.hash="#/login")},[S,T,k]),te.useEffect(()=>{let g=null;if(!k||!S)return;const X="AIzaSyANdJ849qm_-D3wCLh3t0oe0hiwIhUbVbY";let ne;return PC(X).then(H=>{if(!n.current)return;ne=new H.maps.Map(n.current,{center:w,zoom:12,mapTypeControl:!1,gestureHandling:"greedy",draggableCursor:"grab",draggingCursor:"grabbing"}),r.current=ne,s.current=new H.maps.InfoWindow,s.current.addListener("closeclick",()=>{i.current&&(i.current.unmount(),i.current=null)}),D.current=new H.maps.Polygon({paths:U,strokeColor:"#22c55e",strokeOpacity:.9,strokeWeight:2,fillColor:"#22c55e",fillOpacity:.12,clickable:!1,map:ne});const ge=new H.maps.LatLngBounds;U.forEach($=>ge.extend($)),ne.fitBounds(ge),g=AC($=>{c($);const Y=new Set(Array.from(d.current.keys())),Ce=new Set($.map(re=>re.id));$.forEach(re=>{var Pe;const pe=d.current.get(re.id);if(!pe)B(re);else{const qe=pe.getPosition();(!qe||qe.lat()!==re.lat||qe.lng()!==re.lng)&&pe.setPosition({lat:re.lat,lng:re.lng}),((Pe=pe.getTitle)==null?void 0:Pe.call(pe))!==(re.title||"")&&pe.setTitle(re.title||""),pe.__data={...re}}}),Y.forEach(re=>{var pe,Pe;if(!Ce.has(re)){const qe=d.current.get(re);qe&&(((Pe=(pe=s.current)==null?void 0:pe.getAnchor)==null?void 0:Pe.call(pe))===qe&&(s.current.close(),i.current&&(i.current.unmount(),i.current=null)),qe.setMap(null)),d.current.delete(re)}})}),r.current.__markersUnsub=g,ne.addListener("click",$=>{var Ce,re,pe;if(console.log("[Map Click]",{authUser:S,isDragging:R.current,e:$}),R.current)return;if(!S){console.log("[Map Click] No authUser, not opening modal");return}const Y=$.latLng;if(D.current&&((pe=(re=(Ce=window.google)==null?void 0:Ce.maps)==null?void 0:re.geometry)!=null&&pe.poly)&&!window.google.maps.geometry.poly.containsLocation(Y,D.current)){l("Location is outside Khon Kaen University zone"),console.log("[Map Click] Outside polygon");return}m({open:!0,mode:"create",data:{lat:Y.lat(),lng:Y.lng()}}),console.log("[Map Click] Open modal",{lat:Y.lat(),lng:Y.lng()})});let F=null,W=null,q=!1;try{F=new H.maps.OverlayView,F.onAdd=function(){},F.draw=function(){try{const $=this.getProjection();if(!$||q)return;W=Y=>{var Ce,re,pe;try{if(R.current)return;const Pe=n.current.getBoundingClientRect(),qe=Y.clientX-Pe.left,Os=Y.clientY-Pe.top,Na=new H.maps.Point(qe,Os),Ds=$.fromContainerPixelToLatLng(Na);if(console.log("[DOM Click Fallback]",{x:qe,y:Os,latLng:Ds}),!T&&!S){console.log("[DOM Click] No authUser");return}if(D.current&&((pe=(re=(Ce=window.google)==null?void 0:Ce.maps)==null?void 0:re.geometry)!=null&&pe.poly)&&!window.google.maps.geometry.poly.containsLocation(Ds,D.current)){l("Location is outside Khon Kaen University zone");return}m({open:!0,mode:"create",data:{lat:Ds.lat(),lng:Ds.lng()}})}catch(Pe){console.warn("Fallback click handler failed",Pe)}},n.current&&(n.current.addEventListener("click",W,!0),q=!0)}catch($){console.warn("Overlay draw error",$)}},F.onRemove=function(){try{W&&n.current&&n.current.removeEventListener("click",W,!0)}catch{}},F.setMap(ne)}catch($){console.warn("Could not attach DOM click fallback",$)}}).catch(H=>l(H.message||"Failed to load Google Maps")),()=>{if(d.current){for(const[,H]of d.current)try{H.setMap(null)}catch{}d.current.clear()}if(D.current){try{D.current.setMap(null)}catch{}D.current=null}try{domClickHandler&&n.current&&n.current.removeEventListener("click",domClickHandler,!0)}catch{}try{overlay&&overlay.setMap(null)}catch{}try{mapClickListener&&google.maps.event.removeListener(mapClickListener)}catch{}if(s.current){try{s.current.close()}catch{}s.current=null}if(r.current=null,ne=null,g){try{g()}catch(H){console.warn("Failed to unsubscribe markers stream",H)}g=null}i.current&&(i.current.unmount(),i.current=null)}},[k,S,T]);function B(g,{openInfo:X=!1}={}){const ne=window.google;if(!ne||!r.current)return null;const H=new ne.maps.Marker({position:{lat:g.lat,lng:g.lng},map:r.current,title:g.title||void 0,draggable:!0,crossOnDrag:!1});return H.set("id",g.id),H.__data={...g},H.addListener("dragstart",()=>{R.current=!0}),H.addListener("dragend",async()=>{var ge,F;try{const W=H.getPosition();if(!W)return;const q=W.lat(),$=W.lng();if(await al(g.id,{lat:q,lng:$}),g.lat=q,g.lng=$,H.__data={...H.__data||{},lat:q,lng:$},c(Ce=>Ce.map(re=>re.id===g.id?{...re,lat:q,lng:$}:re)),((F=(ge=s.current)==null?void 0:ge.getAnchor)==null?void 0:F.call(ge))===H){const Ce=H.__data?{...H.__data}:{...g};s.current.setContent(v(Ce))}}catch{l("Failed to update marker position")}R.current=!1}),H.addListener("click",()=>{const ge=H.__data?{...H.__data}:{...g};s.current||(s.current=new ne.maps.InfoWindow),s.current.setContent(v(ge)),s.current.open({anchor:H,map:r.current})}),d.current.set(g.id,H),X&&(s.current||(s.current=new ne.maps.InfoWindow),s.current.setContent(v({...g})),s.current.open({anchor:H,map:r.current})),H}function v(g){if(!g){const H=document.createElement("div");return H.className="marker-info-card",H.textContent="Marker not found",H}i.current&&(i.current.unmount(),i.current=null);const X=document.createElement("div"),ne=Zf(X);return i.current=ne,ne.render(L.jsx(NL,{marker:g,designMode:T,onEdit:()=>{m({open:!0,mode:"edit",data:{id:g.id,title:g.title||"",description:g.description||"",photoURL:g.photoURL||null,lat:g.lat,lng:g.lng,createdAt:g.createdAt}})}})),X}async function _(g){return new Promise((X,ne)=>{const H=new FileReader;H.onload=()=>X(H.result),H.onerror=ne,H.readAsDataURL(g)})}return k?L.jsxs("div",{className:"app",children:[L.jsxs("div",{className:"topbar",children:[L.jsxs("div",{className:"brand",children:["MERN Starter · ",L.jsx("span",{className:"muted",children:"Maps + Markers"})]}),L.jsx("div",{className:"toolbar",children:S?L.jsxs(L.Fragment,{children:[L.jsx("div",{className:"muted",children:S.email||S.displayName||"Signed in"}),L.jsx("button",{className:"btn",onClick:async()=>{await SL(),window.location.hash="#/login"},children:"Sign out"})]}):L.jsx("a",{className:"btn",href:"#/login",children:"Sign in"})}),L.jsxs("div",{className:"muted",children:["API health: ",t?t.status:"..."]})]}),L.jsxs("div",{className:"content",children:[L.jsxs("div",{className:"panel",children:[L.jsxs("div",{className:"panel-header",children:[L.jsx("div",{className:"panel-title",children:"Google Map • Khon Kaen University"}),L.jsxs("div",{className:"toolbar",children:[L.jsx(OC,{onPlaceSelected:({lat:g,lng:X})=>{r.current&&r.current.panTo({lat:g,lng:X})}}),L.jsx("button",{className:"btn btn-ghost",onClick:()=>{var g;return(g=r.current)==null?void 0:g.setCenter(w)},children:"Recenter"})]}),o?L.jsx("div",{style:{color:"salmon"},children:o}):null]}),L.jsx("div",{className:"panel-body",children:L.jsx("div",{ref:n,className:"map"})})]}),L.jsxs("div",{className:"panel",children:[L.jsxs("div",{className:"panel-header",children:[L.jsxs("div",{className:"panel-title",children:["Saved Markers: ",u.length]}),L.jsx("div",{className:"toolbar",children:L.jsx("button",{className:"btn btn-danger",onClick:async()=>{if(confirm("Clear all markers?"))try{await kC(),c([]);for(const[,g]of d.current)g.setMap(null);d.current.clear(),s.current&&(s.current.close(),i.current&&(i.current.unmount(),i.current=null))}catch{l("Failed to clear markers")}},children:"Clear All"})})]}),L.jsx("div",{className:"panel-body",children:L.jsx("div",{className:"list",children:u.length===0?L.jsx("div",{className:"muted",children:"Click anywhere on the map to add a marker."}):u.map(g=>L.jsxs("div",{className:"item",onClick:()=>{const X=d.current.get(g.id);X&&r.current&&s.current&&(r.current.panTo(X.getPosition()),s.current.setContent(v(g)),s.current.open({anchor:X,map:r.current}))},children:[L.jsxs("div",{children:[L.jsxs("div",{className:"coords",children:["(",g.lat.toFixed(5),", ",g.lng.toFixed(5),")"]}),g.title?L.jsx("div",{className:"title",children:g.title}):null,g.photoURL?L.jsx("img",{src:g.photoURL,alt:"photo",style:{marginTop:6,width:220,maxWidth:"100%",height:120,objectFit:"cover",borderRadius:8}}):null]}),L.jsxs("div",{style:{display:"flex",gap:8},children:[L.jsx("button",{className:"btn btn-ghost",onClick:async()=>{try{await Oy(g.id),c(ne=>ne.filter(H=>H.id!==g.id));const X=d.current.get(g.id);X&&(X.setMap(null),d.current.delete(g.id))}catch{l("Failed to delete marker")}},children:"Delete"}),L.jsx("button",{className:"btn btn-primary",onClick:()=>m({open:!0,mode:"edit",data:{id:g.id,title:g.title||"",description:g.description||"",photoURL:g.photoURL||null,lat:g.lat,lng:g.lng,createdAt:g.createdAt}}),children:"Edit"}),L.jsx("button",{className:"btn",onClick:()=>{const X=document.createElement("input");X.type="file",X.accept="image/*",X.onchange=async()=>{var H;const ne=(H=X.files)==null?void 0:H[0];if(ne)try{let ge;T||(ge=await bh(g.id,ne)),await al(g.id,{photoURL:ge}),c(W=>W.map(q=>q.id===g.id?{...q,photoURL:ge}:q));const F=d.current.get(g.id);if(F){const W={...g,photoURL:ge};F.__data={...W},s.current&&(s.current.setContent(v(W)),s.current.open({anchor:F,map:r.current}))}}catch{l("Failed to upload photo")}},X.click()},children:"Add Photo"}),L.jsx(j0,{markerId:g.id})]})]},g.id))})})]})]}),L.jsx(NC,{open:p.open,title:p.mode==="edit"?"Edit Marker":"New Marker",submitText:p.mode==="edit"?"Save":"Add",initial:{id:(I=p.data)==null?void 0:I.id,title:(A=p.data)==null?void 0:A.title,description:(C=p.data)==null?void 0:C.description,photoURL:(N=p.data)==null?void 0:N.photoURL},allowImage:!0,onCancel:()=>m({open:!1,mode:null,data:null}),onSubmit:async({title:g,description:X,file:ne})=>{var H,ge,F;try{if(p.mode==="create"){const W={lat:p.data.lat,lng:p.data.lng,title:g||null,description:X||null},q=await CC(W);let $={...q,lat:Number(q.lat??W.lat),lng:Number(q.lng??W.lng)};if(ne)try{const Y=T?await _(ne):await bh(q.id,ne);await al(q.id,{photoURL:Y}),$={...$,photoURL:Y}}catch(Y){console.warn("upload failed",Y)}c(Y=>[...Y.filter(re=>re.id!==$.id),$]),B($,{openInfo:!0})}else{const W={title:g||null,description:X||null};if(ne)try{const $=T?await _(ne):await bh(p.data.id,ne);W.photoURL=$}catch($){console.warn("upload failed",$)}await al(p.data.id,W),c($=>$.map(Y=>Y.id===p.data.id?{...Y,...W}:Y));const q=d.current.get(p.data.id);if(q&&q.setTitle(g||""),s.current&&q){const $=(H=q.getPosition)==null?void 0:H.call(q),Y={id:p.data.id,title:g,description:X,photoURL:W.photoURL??p.data.photoURL,lat:((ge=$==null?void 0:$.lat)==null?void 0:ge.call($))??p.data.lat,lng:((F=$==null?void 0:$.lng)==null?void 0:F.call($))??p.data.lng,createdAt:p.data.createdAt};s.current.setContent(v(Y)),q.__data={...Y}}}m({open:!1,mode:null,data:null})}catch(W){console.error(W),l(W.message||"Action failed")}},onDelete:p.mode==="edit"?async g=>{var X,ne;try{await Oy(g.id),c(ge=>ge.filter(F=>F.id!==g.id));const H=d.current.get(g.id);H&&(((ne=(X=s.current)==null?void 0:X.getAnchor)==null?void 0:ne.call(X))===H&&(s.current.close(),i.current&&(i.current.unmount(),i.current=null)),H.setMap(null),d.current.delete(g.id)),m({open:!1,mode:null,data:null})}catch(H){l(H.message||"Failed to delete marker")}}:void 0})]}):L.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",fontSize:"1.5rem",color:"#888"},children:"Loading authentication..."})}function j0({markerId:t}){const[e,n]=te.useState(null),[r,s]=te.useState(!1),[i,o]=te.useState(0),[l,u]=te.useState(!1);te.useEffect(()=>{const d=am(p=>n((p==null?void 0:p.uid)||null));return()=>d&&d()},[]),te.useEffect(()=>{e&&F0(t,e).then(d=>{s(d.liked),o(d.count)})},[t,e]);const c=d=>{if(!e){window.location.hash="#/login";return}d()};return L.jsxs(L.Fragment,{children:[L.jsx("button",{className:"btn",onClick:()=>c(async()=>{const d=await RL(t,e);s(d.liked),o(d.count)}),children:r?`♥ ${i}`:`♡ ${i}`}),L.jsx("button",{className:"btn",onClick:()=>c(()=>u(!0)),children:"Comments"}),l&&L.jsx(PL,{markerId:t,onClose:()=>u(!1)})]})}function PL({markerId:t,onClose:e}){const[n,r]=te.useState([]),[s,i]=te.useState(""),[o,l]=te.useState(null);return te.useEffect(()=>{ensureAnon().then(u=>l((u==null?void 0:u.uid)||null))},[]),te.useEffect(()=>{const u=AL(t,r);return()=>u()},[t]),L.jsx("div",{className:"modal",role:"dialog","aria-modal":"true",children:L.jsxs("div",{className:"modal-content",style:{width:"min(680px, 92vw)"},children:[L.jsxs("div",{className:"modal-header",children:[L.jsx("div",{className:"modal-title",children:"Comments"}),L.jsx("button",{className:"btn btn-ghost",onClick:e,children:"✕"})]}),L.jsxs("div",{className:"modal-body",children:[L.jsx("div",{style:{display:"grid",gap:8,maxHeight:"40vh",overflow:"auto"},children:n.length===0?L.jsx("div",{className:"muted",children:"No comments yet."}):n.map(u=>{var c,d,p,m,S,E;return L.jsxs("div",{className:"item",style:{display:"block"},children:[L.jsxs("div",{style:{fontSize:12,color:"#94a3b8"},children:[((d=(c=u.uid)==null?void 0:c.slice)==null?void 0:d.call(c,0,8))||"anon"," · ",((E=(m=(p=u.createdAt)==null?void 0:p.toDate)==null?void 0:(S=m.call(p)).toLocaleString)==null?void 0:E.call(S))||""]}),L.jsx("div",{style:{marginTop:4},children:u.text})]},u.id)})}),L.jsxs("div",{style:{marginTop:12,display:"flex",gap:8},children:[L.jsx("input",{className:"input",placeholder:"Write a comment",value:s,onChange:u=>i(u.target.value)}),L.jsx("button",{className:"btn btn-primary",onClick:async()=>{s.trim()&&(await CL(t,{uid:o,text:s.trim()}),i(""))},children:"Send"})]})]})]})})}function NL({marker:t,designMode:e,onEdit:n}){var i,o;if(!t)return null;const r=t.lat!=null&&t.lng!=null?`${Number(t.lat).toFixed(5)}, ${Number(t.lng).toFixed(5)}`:null;let s="";if(t.createdAt){const l=new Date(t.createdAt);Number.isNaN(l.getTime())||(s=l.toLocaleString())}return L.jsxs("div",{className:"marker-info-card",children:[t.photoURL&&L.jsx("img",{src:t.photoURL,alt:t.title||"Marker photo",className:"marker-info-photo"}),L.jsxs("div",{className:"marker-info-body",children:[L.jsx("div",{className:"marker-info-title",children:((i=t.title)==null?void 0:i.trim())||"Untitled marker"}),(r||s)&&L.jsxs("div",{className:"marker-info-meta",children:[r&&L.jsx("span",{children:r}),r&&s&&L.jsx("span",{className:"marker-info-sep",children:"•"}),s&&L.jsx("span",{children:s})]}),((o=t.description)==null?void 0:o.trim())&&L.jsx("div",{className:"marker-info-description",children:t.description})]}),!e&&L.jsx("div",{className:"marker-info-actions",children:L.jsx(j0,{markerId:t.id})}),n&&L.jsx("div",{className:"marker-info-footer",children:L.jsx("button",{className:"btn btn-ghost btn-xs",onClick:n,children:"Edit marker"})})]})}function OL(){const[t,e]=te.useState("signin"),[n,r]=te.useState(""),[s,i]=te.useState(""),[o,l]=te.useState(""),[u,c]=te.useState("");return te.useEffect(()=>{const d=am(p=>{p&&(window.location.hash="#/app")});return()=>d()},[]),te.useEffect(()=>{EL().then(d=>{d&&(window.location.hash="#/app")}).catch(d=>c(d.message||"Google sign-in failed"))},[]),L.jsx("div",{className:"app hero-bg",style:{minHeight:"100vh",display:"grid",placeItems:"center"},children:L.jsxs("div",{className:"panel",style:{width:"min(560px, 92vw)"},children:[L.jsxs("div",{className:"panel-header",children:[L.jsx("div",{className:"panel-title",children:t==="signin"?"Sign in":"Create account"}),L.jsx("a",{className:"btn btn-ghost",href:"#/app",children:"Back"})]}),L.jsxs("div",{className:"panel-body",style:{display:"grid",gap:10},children:[L.jsxs("div",{className:"toolbar",children:[L.jsx("button",{className:`btn ${t==="signin"?"btn-primary":""}`,onClick:()=>e("signin"),children:"Sign in"}),L.jsx("button",{className:`btn ${t==="signup"?"btn-primary":""}`,onClick:()=>e("signup"),children:"Sign up"})]}),t==="signup"&&L.jsxs(L.Fragment,{children:[L.jsx("label",{className:"label",children:"Name"}),L.jsx("input",{className:"input",placeholder:"Your name",value:o,onChange:d=>l(d.target.value)})]}),L.jsx("label",{className:"label",children:"Email"}),L.jsx("input",{className:"input",type:"email",placeholder:"you@example.com",value:n,onChange:d=>r(d.target.value)}),L.jsx("label",{className:"label",children:"Password"}),L.jsx("input",{className:"input",type:"password",placeholder:"••••••••",value:s,onChange:d=>i(d.target.value)}),u&&L.jsx("div",{style:{color:"salmon"},children:u}),L.jsxs("div",{className:"toolbar",style:{justifyContent:"space-between"},children:[L.jsxs("button",{className:"btn btn-primary",onClick:async()=>{try{t==="signin"?await TL(n,s):await IL({email:n,password:s,displayName:o})}catch(d){c(d.message)}},children:[" ",t==="signin"?"Sign in":"Sign up"," "]}),L.jsx("button",{className:"btn",onClick:async()=>{c("");try{await vL(),window.location.hash="#/app"}catch(d){if(((d==null?void 0:d.code)||"").includes("popup"))try{await wL()}catch(m){c(m.message||"Google sign-in failed")}else c(d.message||"Google sign-in failed")}},children:"Continue with Google"})]})]})]})})}function DL(){const[t,e]=te.useState(hv());return te.useEffect(()=>{const n=()=>e(hv());return window.addEventListener("hashchange",n),()=>window.removeEventListener("hashchange",n)},[]),t==="login"?L.jsx(OL,{}):L.jsx(kL,{})}function hv(){return(window.location.hash||"#/login").startsWith("#/login")?"login":"app"}Zf(document.getElementById("root")).render(L.jsx(NS.StrictMode,{children:L.jsx(DL,{})}));
