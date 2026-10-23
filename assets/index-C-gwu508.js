(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function G2(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var rp={exports:{}},Nl={};var V_;function V2(){if(V_)return Nl;V_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:u,ref:o!==void 0?o:null,props:c}}return Nl.Fragment=e,Nl.jsx=n,Nl.jsxs=n,Nl}var k_;function k2(){return k_||(k_=1,rp.exports=V2()),rp.exports}var ve=k2(),sp={exports:{}},Gt={};var X_;function X2(){if(X_)return Gt;X_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),_=Symbol.iterator;function E(G){return G===null||typeof G!="object"?null:(G=_&&G[_]||G["@@iterator"],typeof G=="function"?G:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,M={};function U(G,J,Ke){this.props=G,this.context=J,this.refs=M,this.updater=Ke||C}U.prototype.isReactComponent={},U.prototype.setState=function(G,J){if(typeof G!="object"&&typeof G!="function"&&G!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,G,J,"setState")},U.prototype.forceUpdate=function(G){this.updater.enqueueForceUpdate(this,G,"forceUpdate")};function B(){}B.prototype=U.prototype;function R(G,J,Ke){this.props=G,this.context=J,this.refs=M,this.updater=Ke||C}var O=R.prototype=new B;O.constructor=R,y(O,U.prototype),O.isPureReactComponent=!0;var P=Array.isArray;function F(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function H(G,J,Ke){var ie=Ke.ref;return{$$typeof:a,type:G,key:J,ref:ie!==void 0?ie:null,props:Ke}}function V(G,J){return H(G.type,J,G.props)}function ee(G){return typeof G=="object"&&G!==null&&G.$$typeof===a}function I(G){var J={"=":"=0",":":"=2"};return"$"+G.replace(/[=:]/g,function(Ke){return J[Ke]})}var Q=/\/+/g;function ae(G,J){return typeof G=="object"&&G!==null&&G.key!=null?I(""+G.key):J.toString(36)}function W(G){switch(G.status){case"fulfilled":return G.value;case"rejected":throw G.reason;default:switch(typeof G.status=="string"?G.then(F,F):(G.status="pending",G.then(function(J){G.status==="pending"&&(G.status="fulfilled",G.value=J)},function(J){G.status==="pending"&&(G.status="rejected",G.reason=J)})),G.status){case"fulfilled":return G.value;case"rejected":throw G.reason}}throw G}function $(G,J,Ke,ie,ne){var xe=typeof G;(xe==="undefined"||xe==="boolean")&&(G=null);var Ue=!1;if(G===null)Ue=!0;else switch(xe){case"bigint":case"string":case"number":Ue=!0;break;case"object":switch(G.$$typeof){case a:case e:Ue=!0;break;case x:return Ue=G._init,$(Ue(G._payload),J,Ke,ie,ne)}}if(Ue)return ne=ne(G),Ue=ie===""?"."+ae(G,0):ie,P(ne)?(Ke="",Ue!=null&&(Ke=Ue.replace(Q,"$&/")+"/"),$(ne,J,Ke,"",function(_t){return _t})):ne!=null&&(ee(ne)&&(ne=V(ne,Ke+(ne.key==null||G&&G.key===ne.key?"":(""+ne.key).replace(Q,"$&/")+"/")+Ue)),J.push(ne)),1;Ue=0;var ye=ie===""?".":ie+":";if(P(G))for(var we=0;we<G.length;we++)ie=G[we],xe=ye+ae(ie,we),Ue+=$(ie,J,Ke,xe,ne);else if(we=E(G),typeof we=="function")for(G=we.call(G),we=0;!(ie=G.next()).done;)ie=ie.value,xe=ye+ae(ie,we++),Ue+=$(ie,J,Ke,xe,ne);else if(xe==="object"){if(typeof G.then=="function")return $(W(G),J,Ke,ie,ne);throw J=String(G),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(G).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Ue}function D(G,J,Ke){if(G==null)return G;var ie=[],ne=0;return $(G,ie,"","",function(xe){return J.call(Ke,xe,ne++)}),ie}function le(G){if(G._status===-1){var J=G._result,Ke=J();Ke.then(function(ie){(G._status===0||G._status===-1)&&(G._status=1,G._result=ie,Ke.status===void 0&&(Ke.status="fulfilled",Ke.value=ie))},function(ie){(G._status===0||G._status===-1)&&(G._status=2,G._result=ie,Ke.status===void 0&&(Ke.status="rejected",Ke.reason=ie))}),G._status===-1&&(G._status=0,G._result=Ke)}if(G._status===1)return G._result.default;throw G._result}var me=typeof reportError=="function"?reportError:function(G){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof G=="object"&&G!==null&&typeof G.message=="string"?String(G.message):String(G),error:G});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",G);return}console.error(G)};function Te(G){var J=w.T,Ke={};Ke.types=J!==null?J.types:null,w.T=Ke;try{var ie=G(),ne=w.S;ne!==null&&ne(Ke,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(F,me)}catch(xe){me(xe)}finally{J!==null&&Ke.types!==null&&(J.types=Ke.types),w.T=J}}function rt(G){var J=w.T;if(J!==null){var Ke=J.types;Ke===null?J.types=[G]:Ke.indexOf(G)===-1&&Ke.push(G)}else Te(rt.bind(null,G))}var je={map:D,forEach:function(G,J,Ke){D(G,function(){J.apply(this,arguments)},Ke)},count:function(G){var J=0;return D(G,function(){J++}),J},toArray:function(G){return D(G,function(J){return J})||[]},only:function(G){if(!ee(G))throw Error("React.Children.only expected to receive a single React element child.");return G}};return Gt.Activity=g,Gt.Children=je,Gt.Component=U,Gt.Fragment=n,Gt.Profiler=o,Gt.PureComponent=R,Gt.StrictMode=r,Gt.Suspense=p,Gt.ViewTransition=v,Gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,Gt.__COMPILER_RUNTIME={__proto__:null,c:function(G){return w.H.useMemoCache(G)}},Gt.addTransitionType=rt,Gt.cache=function(G){return function(){return G.apply(null,arguments)}},Gt.cacheSignal=function(){return null},Gt.cloneElement=function(G,J,Ke){if(G==null)throw Error("The argument must be a React element, but you passed "+G+".");var ie=y({},G.props),ne=G.key;if(J!=null)for(xe in J.key!==void 0&&(ne=""+J.key),J)!T.call(J,xe)||xe==="key"||xe==="__self"||xe==="__source"||xe==="ref"&&J.ref===void 0||(ie[xe]=J[xe]);var xe=arguments.length-2;if(xe===1)ie.children=Ke;else if(1<xe){for(var Ue=Array(xe),ye=0;ye<xe;ye++)Ue[ye]=arguments[ye+2];ie.children=Ue}return H(G.type,ne,ie)},Gt.createContext=function(G){return G={$$typeof:u,_currentValue:G,_currentValue2:G,_threadCount:0,Provider:null,Consumer:null},G.Provider=G,G.Consumer={$$typeof:c,_context:G},G},Gt.createElement=function(G,J,Ke){var ie,ne={},xe=null;if(J!=null)for(ie in J.key!==void 0&&(xe=""+J.key),J)T.call(J,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(ne[ie]=J[ie]);var Ue=arguments.length-2;if(Ue===1)ne.children=Ke;else if(1<Ue){for(var ye=Array(Ue),we=0;we<Ue;we++)ye[we]=arguments[we+2];ne.children=ye}if(G&&G.defaultProps)for(ie in Ue=G.defaultProps,Ue)ne[ie]===void 0&&(ne[ie]=Ue[ie]);return H(G,xe,ne)},Gt.createRef=function(){return{current:null}},Gt.forwardRef=function(G){return{$$typeof:d,render:G}},Gt.isValidElement=ee,Gt.lazy=function(G){return{$$typeof:x,_payload:{_status:-1,_result:G},_init:le}},Gt.memo=function(G,J){return{$$typeof:m,type:G,compare:J===void 0?null:J}},Gt.startTransition=Te,Gt.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},Gt.use=function(G){return w.H.use(G)},Gt.useActionState=function(G,J,Ke){return w.H.useActionState(G,J,Ke)},Gt.useCallback=function(G,J){return w.H.useCallback(G,J)},Gt.useContext=function(G){return w.H.useContext(G)},Gt.useDebugValue=function(){},Gt.useDeferredValue=function(G,J){return w.H.useDeferredValue(G,J)},Gt.useEffect=function(G,J){return w.H.useEffect(G,J)},Gt.useEffectEvent=function(G){return w.H.useEffectEvent(G)},Gt.useId=function(){return w.H.useId()},Gt.useImperativeHandle=function(G,J,Ke){return w.H.useImperativeHandle(G,J,Ke)},Gt.useInsertionEffect=function(G,J){return w.H.useInsertionEffect(G,J)},Gt.useLayoutEffect=function(G,J){return w.H.useLayoutEffect(G,J)},Gt.useMemo=function(G,J){return w.H.useMemo(G,J)},Gt.useOptimistic=function(G,J){return w.H.useOptimistic(G,J)},Gt.useReducer=function(G,J,Ke){return w.H.useReducer(G,J,Ke)},Gt.useRef=function(G){return w.H.useRef(G)},Gt.useState=function(G){return w.H.useState(G)},Gt.useSyncExternalStore=function(G,J,Ke){return w.H.useSyncExternalStore(G,J,Ke)},Gt.useTransition=function(){return w.H.useTransition()},Gt.version="19.3.0",Gt}var q_;function c0(){return q_||(q_=1,sp.exports=X2()),sp.exports}var zt=c0();const jy=G2(zt);var op={exports:{}},Ll={},lp={exports:{}},cp={};var W_;function q2(){return W_||(W_=1,(function(a){function e(W,$){var D=W.length;W.push($);e:for(;0<D;){var le=D-1>>>1,me=W[le];if(0<o(me,$))W[le]=$,W[D]=me,D=le;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var $=W[0],D=W.pop();if(D!==$){W[0]=D;e:for(var le=0,me=W.length,Te=me>>>1;le<Te;){var rt=2*(le+1)-1,je=W[rt],G=rt+1,J=W[G];if(0>o(je,D))G<me&&0>o(J,je)?(W[le]=J,W[G]=D,le=G):(W[le]=je,W[rt]=D,le=rt);else if(G<me&&0>o(J,D))W[le]=J,W[G]=D,le=G;else break e}}return $}function o(W,$){var D=W.sortIndex-$.sortIndex;return D!==0?D:W.id-$.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();a.unstable_now=function(){return u.now()-d}}var p=[],m=[],x=1,g=null,v=3,_=!1,E=!1,C=!1,y=!1,M=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function R(W){for(var $=n(m);$!==null;){if($.callback===null)r(m);else if($.startTime<=W)r(m),$.sortIndex=$.expirationTime,e(p,$);else break;$=n(m)}}function O(W){if(C=!1,R(W),!E)if(n(p)!==null)E=!0,P||(P=!0,ee());else{var $=n(m);$!==null&&ae(O,$.startTime-W)}}var P=!1,F=-1,w=5,T=-1;function H(){return y?!0:!(a.unstable_now()-T<w)}function V(){if(y=!1,P){var W=a.unstable_now();T=W;var $=!0;try{e:{E=!1,C&&(C=!1,U(F),F=-1),_=!0;var D=v;try{t:{for(R(W),g=n(p);g!==null&&!(g.expirationTime>W&&H());){var le=g.callback;if(typeof le=="function"){g.callback=null,v=g.priorityLevel;var me=le(g.expirationTime<=W);if(W=a.unstable_now(),typeof me=="function"){g.callback=me,R(W),$=!0;break t}g===n(p)&&r(p),R(W)}else r(p);g=n(p)}if(g!==null)$=!0;else{var Te=n(m);Te!==null&&ae(O,Te.startTime-W),$=!1}}break e}finally{g=null,v=D,_=!1}$=void 0}}finally{$?ee():P=!1}}}var ee;if(typeof B=="function")ee=function(){B(V)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,Q=I.port2;I.port1.onmessage=V,ee=function(){Q.postMessage(null)}}else ee=function(){M(V,0)};function ae(W,$){F=M(function(){W(a.unstable_now())},$)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(W){W.callback=null},a.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<W?Math.floor(1e3/W):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_next=function(W){switch(v){case 1:case 2:case 3:var $=3;break;default:$=v}var D=v;v=$;try{return W()}finally{v=D}},a.unstable_requestPaint=function(){y=!0},a.unstable_runWithPriority=function(W,$){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var D=v;v=W;try{return $()}finally{v=D}},a.unstable_scheduleCallback=function(W,$,D){var le=a.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?le+D:le):D=le,W){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=D+me,W={id:x++,callback:$,priorityLevel:W,startTime:D,expirationTime:me,sortIndex:-1},D>le?(W.sortIndex=D,e(m,W),n(p)===null&&W===n(m)&&(C?(U(F),F=-1):C=!0,ae(O,D-le))):(W.sortIndex=me,e(p,W),E||_||(E=!0,P||(P=!0,ee()))),W},a.unstable_shouldYield=H,a.unstable_wrapCallback=function(W){var $=v;return function(){var D=v;v=$;try{return W.apply(this,arguments)}finally{v=D}}}})(cp)),cp}var Y_;function W2(){return Y_||(Y_=1,lp.exports=q2()),lp.exports}var up={exports:{}},ai={};var Z_;function Y2(){if(Z_)return ai;Z_=1;var a=c0();function e(x){var g="https://react.dev/errors/"+x;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+x+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal"),c=Symbol.for("react.recoverable"),u=Symbol.for("react.optimistic_key");function d(x,g,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:_===u?u:""+_,children:x,containerInfo:g,implementation:v}}var p=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(x,g){if(x==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ai.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,ai.browser=function(x){return{$$typeof:c,_reason:x}},ai.createPortal=function(x,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return d(x,g,null,v)},ai.flushSync=function(x){var g=p.T,v=r.p;try{if(p.T=null,r.p=2,x)return x()}finally{p.T=g,r.p=v,r.d.f()}},ai.preconnect=function(x,g){typeof x=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(x,g))},ai.prefetchDNS=function(x){typeof x=="string"&&r.d.D(x)},ai.preinit=function(x,g){if(typeof x=="string"&&g&&typeof g.as=="string"){var v=g.as,_=m(v,g.crossOrigin),E=typeof g.integrity=="string"?g.integrity:void 0,C=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?r.d.S(x,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:_,integrity:E,fetchPriority:C}):v==="script"&&r.d.X(x,{crossOrigin:_,integrity:E,fetchPriority:C,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ai.preinitModule=function(x,g){if(typeof x=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=m(g.as,g.crossOrigin);r.d.M(x,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&r.d.M(x)},ai.preload=function(x,g){if(typeof x=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,_=m(v,g.crossOrigin);r.d.L(x,v,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ai.preloadModule=function(x,g){if(typeof x=="string")if(g){var v=m(g.as,g.crossOrigin);r.d.m(x,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else r.d.m(x)},ai.requestFormReset=function(x){r.d.r(x)},ai.unstable_batchedUpdates=function(x,g){return x(g)},ai.useFormState=function(x,g,v){return p.H.useFormState(x,g,v)},ai.useFormStatus=function(){return p.H.useHostTransitionStatus()},ai.version="19.3.0",ai}var K_;function Z2(){if(K_)return up.exports;K_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),up.exports=Y2(),up.exports}var Q_;function K2(){if(Q_)return Ll;Q_=1;var a=W2(),e=c0(),n=Z2();function r(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){for(var i=t,s=i;s&&!s.alternate;)i=s,(i.flags&4098)!==0&&(t=i.return),s=i.return;for(;i.return;)i=i.return;return i.tag===3?t:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function d(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(r(188))}function m(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(r(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===s)return p(f),t;if(h===l)return p(f),i;h=h.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=h;else{for(var S=!1,N=f.child;N;){if(N===s){S=!0,s=f,l=h;break}if(N===l){S=!0,l=f,s=h;break}N=N.sibling}if(!S){for(N=h.child;N;){if(N===s){S=!0,s=h,l=f;break}if(N===l){S=!0,l=h,s=f;break}N=N.sibling}if(!S)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:i}function x(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=x(t),i!==null)return i;t=t.sibling}return null}function g(t,i,s,l,f,h){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&s(t,l,f,h)||(t.tag!==22||t.memoizedState===null)&&(i||t.tag!==5&&t.tag!==27)&&g(t.child,i,s,l,f,h))return!0;t=t.sibling}return!1}function v(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function _(t){var i=!1;for(t=t.return;t!==null&&(t.tag===4&&(i=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return i}function E(t){var i=[null,null],s=v(t);return s===null||C(i,t,s.child,{foundSelf:!1}),i}function C(t,i,s,l){for(;s!==null;){if(s===i)l.foundSelf=!0;else if(s.tag===5||s.tag===27||s.tag===6){if(l.foundSelf)return t[1]=s,!0;t[0]=s}else if((s.tag!==22||s.memoizedState===null)&&C(t,i,s.child,l))return!0;s=s.sibling}return!1}function y(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var M=null,U=null;function B(t,i,s){return t===s?!0:t===i?(M=t,!0):!1}function R(t,i,s){return t===s?(U=t,!1):t===i?(U!==null&&(M=t),!0):!1}function O(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function P(t,i,s){for(var l=0,f=t;f;f=s(f))l++;f=0;for(var h=i;h;h=s(h))f++;for(;0<l-f;)t=s(t),l--;for(;0<f-l;)i=s(i),f--;for(;l--;){if(t===i||i!==null&&t===i.alternate)return t;t=s(t),i=s(i)}return null}var F=Object.assign,w=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),ee=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),Q=Symbol.for("react.consumer"),ae=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),me=Symbol.for("react.lazy"),Te=Symbol.for("react.activity"),rt=Symbol.for("react.legacy_hidden"),je=Symbol.for("react.memo_cache_sentinel"),G=Symbol.for("react.view_transition"),J=Symbol.for("react.recoverable"),Ke=Symbol.iterator;function ie(t){return t===null||typeof t!="object"?null:(t=Ke&&t[Ke]||t["@@iterator"],typeof t=="function"?t:null)}var ne=Symbol.for("react.client.reference");function xe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ne?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case V:return"Fragment";case I:return"Profiler";case ee:return"StrictMode";case $:return"Suspense";case D:return"SuspenseList";case Te:return"Activity";case G:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case H:return"Portal";case ae:return t.displayName||"Context";case Q:return(t._context.displayName||"Context")+".Consumer";case W:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case le:return i=t.displayName||null,i!==null?i:xe(t.type)||"Memo";case me:i=t._payload,t=t._init;try{return xe(t(i))}catch{}}return null}var Ue=Array.isArray,ye=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,we=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_t={pending:!1,data:null,method:null,action:null},Ae=[],Fe=-1;function ue(t){return{current:t}}function Oe(t){0>Fe||(t.current=Ae[Fe],Ae[Fe]=null,Fe--)}function He(t,i){Fe++,Ae[Fe]=t.current,t.current=i}var vt=ue(null),mt=ue(null),Je=ue(null),Tt=ue(null);function j(t,i){switch(He(Je,i),He(mt,t),He(vt,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?jx(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=jx(i),t=Jx(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Oe(vt),He(vt,t)}function nt(){Oe(vt),Oe(mt),Oe(Je)}function ze(t){var i=t.memoizedState;i!==null&&(co._currentValue=i.memoizedState,He(Tt,t)),i=vt.current;var s=Jx(i,t.type);i!==s&&(He(mt,t),He(vt,s))}function L(t){mt.current===t&&(Oe(vt),Oe(mt)),Tt.current===t&&(Oe(Tt),co._currentValue=_t)}var b,q;function z(t){if(b===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);b=i&&i[1]||"",q=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+b+t+q}var _e=!1;function Ce(t,i){if(!t||_e)return"";_e=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Xe=function(){throw Error()};if(Object.defineProperty(Xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Xe,[])}catch(xt){var de=xt}Reflect.construct(t,[],Xe)}else{try{Xe.call()}catch(xt){de=xt}Xe=!1;try{var be=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Xe=!0,new t}finally{Xe&&(be!==void 0?Object.defineProperty(t.prototype,"props",be):delete t.prototype.props)}}}else{try{throw Error()}catch(xt){de=xt}(Xe=t())&&typeof Xe.catch=="function"&&Xe.catch(function(){})}}catch(xt){if(xt&&de&&typeof xt.stack=="string")return[xt.stack,de.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=l.DetermineComponentFrameRoot(),S=h[0],N=h[1];if(S&&N){var Y=S.split(`
`),ge=N.split(`
`);for(f=l=0;l<Y.length&&!Y[l].includes("DetermineComponentFrameRoot");)l++;for(;f<ge.length&&!ge[f].includes("DetermineComponentFrameRoot");)f++;if(l===Y.length||f===ge.length)for(l=Y.length-1,f=ge.length-1;1<=l&&0<=f&&Y[l]!==ge[f];)f--;for(;1<=l&&0<=f;l--,f--)if(Y[l]!==ge[f]){if(l!==1||f!==1)do if(l--,f--,0>f||Y[l]!==ge[f]){var Re=`
`+Y[l].replace(" at new "," at ");return t.displayName&&Re.includes("<anonymous>")&&(Re=Re.replace("<anonymous>",t.displayName)),Re}while(1<=l&&0<=f);break}}}finally{_e=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?z(s):""}function te(t,i){switch(t.tag){case 26:case 27:case 5:return z(t.type);case 16:return z("Lazy");case 13:return t.child!==i&&i!==null?z("Suspense Fallback"):z("Suspense");case 19:return z("SuspenseList");case 0:case 15:return Ce(t.type,!1);case 11:return Ce(t.type.render,!1);case 1:return Ce(t.type,!0);case 31:return z("Activity");case 30:return z("ViewTransition");default:return""}}function Z(t){try{var i="",s=null;do i+=te(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var K=Object.prototype.hasOwnProperty,ce=a.unstable_scheduleCallback,Be=a.unstable_cancelCallback,Le=a.unstable_shouldYield,Ie=a.unstable_requestPaint,Qe=a.unstable_now,st=a.unstable_getCurrentPriorityLevel,dt=a.unstable_ImmediatePriority,X=a.unstable_UserBlockingPriority,Ge=a.unstable_NormalPriority,Me=a.unstable_LowPriority,qe=a.unstable_IdlePriority,et=a.log,Ye=a.unstable_setDisableYieldValue,St=null,ft=null;function Pt(t){if(typeof et=="function"&&Ye(t),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(St,t)}catch{}}var Ft=Math.clz32?Math.clz32:yi,xn=Math.log,gn=Math.LN2;function yi(t){return t>>>=0,t===0?32:31-(xn(t)/gn|0)|0}var Si=256,Wn=262144,Tn=4194304;function Gn(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Yn(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,h=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var N=l&134217727;return N!==0?(l=N&~h,l!==0?f=Gn(l):(S&=N,S!==0?f=Gn(S):s||(s=N&~t,s!==0&&(f=Gn(s))))):(N=l&~h,N!==0?f=Gn(N):S!==0?f=Gn(S):s||(s=l&~t,s!==0&&(f=Gn(s)))),f===0?0:i!==0&&i!==f&&(i&h)===0&&(h=f&-f,s=i&-i,h>=s||h===32&&(s&4194048)!==0)?i:f}function Ht(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Et(t,i){(i&8)!==0&&(i|=i&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=i;0<s;){var l=31-Ft(s),f=1<<l;i|=t[l],s&=~f}return i}function Ot(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function An(){var t=Tn;return Tn<<=1,(Tn&62914560)===0&&(Tn=4194304),t}function Ne(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Pe(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ve(t,i,s,l,f,h){var S=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var N=t.entanglements,Y=t.expirationTimes,ge=t.hiddenUpdates;for(s=S&~s;0<s;){var Re=31-Ft(s),Xe=1<<Re;N[Re]=0,Y[Re]=-1;var de=ge[Re];if(de!==null)for(ge[Re]=null,Re=0;Re<de.length;Re++){var be=de[Re];be!==null&&(be.lane&=-536870913)}s&=~Xe}l!==0&&tt(t,l,0),h!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=h&~(S&~i))}function tt(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Ft(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function ct(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Ft(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function at(t,i){var s=i&-i;return s=(s&42)!==0?1:Ct(s),(s&(t.suspendedLanes|i))!==0?0:s}function Ct(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function wt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ee(){var t=we.p;return t!==0?t:(t=window.event,t===void 0?32:P_(t.type))}function ht(t,i){var s=we.p;try{return we.p=t,i()}finally{we.p=s}}var lt=Math.random().toString(36).slice(2),A="__reactFiber$"+lt,k="__reactProps$"+lt,re="__reactContainer$"+lt,fe="__reactEvents$"+lt,he="__reactListeners$"+lt,We="__reactHandles$"+lt,ot="__reactResources$"+lt,Ze="__reactMarker$"+lt,De="__reactLoad$"+lt;function it(t){delete t[A],delete t[k],delete t[he],delete t[We]}function pt(t){var i;if(i=t[A])return i;for(var s=t.parentNode;s;){if(i=s[re]||s[A]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=m_(t);t!==null;){if(s=t[A])return s;t=m_(t)}return i}t=s,s=t.parentNode}return null}function yt(t){if(t=t[A]||t[re]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function $e(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(r(33))}function Nt(t){var i=t[ot];return i||(i=t[ot]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function bt(t){t[Ze]=!0}function Dt(t){t[De]=void 0}var Ut=new Set,on={};function ut(t,i){Wt(t,i),Wt(t+"Capture",i)}function Wt(t,i){for(on[t]=i,t=0;t<i.length;t++)Ut.add(i[t])}var kt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vn={},Jn={};function Mi(t){return K.call(Jn,t)?!0:K.call(Vn,t)?!1:kt.test(t)?Jn[t]=!0:(Vn[t]=!0,!1)}var Zt=!1;function ln(){var t=Zt;return Zt=!1,t}function yn(t,i,s){if(Mi(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,s)}}function Ni(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,s)}}function en(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,l)}}function Nn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Va(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function pc(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,h=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){s=""+S,h.call(this,S)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Pf(t){if(!t._valueTracker){var i=Va(t)?"checked":"value";t._valueTracker=pc(t,i,""+t[i])}}function B0(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Va(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}var lM=/[\n"\\]/g;function ki(t){return t.replace(lM,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ff(t,i,s,l,f,h,S,N){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),i!=null?S==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+Nn(i)):t.value!==""+Nn(i)&&(t.value=""+Nn(i)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),i!=null?S==="number"&&t.value==i?If(t,Nn(t.value)):If(t,Nn(i)):s!=null?If(t,Nn(s)):l!=null&&t.removeAttribute("value"),f==null&&h!=null&&(t.defaultChecked=!!h),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"?t.name=""+Nn(N):t.removeAttribute("name")}function H0(t,i,s,l,f,h,S,N){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),i!=null||s!=null){if(!(h!=="submit"&&h!=="reset"||i!=null)){Pf(t);return}s=s!=null?""+Nn(s):"",i=i!=null?""+Nn(i):s,N||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=N?t.checked:!!l,t.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Pf(t)}function If(t,i){t.defaultValue!==""+i&&(t.defaultValue=""+i)}function ws(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Nn(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function G0(t,i,s){if(i!=null&&(i=""+Nn(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+Nn(s):""}function V0(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(r(92));if(Ue(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=Nn(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Pf(t)}function Rs(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var cM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function k0(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||cM.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function X0(t,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="",Zt=!0);for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&(k0(t,f,l),Zt=!0)}else for(var h in i)i.hasOwnProperty(h)&&k0(t,h,i[h])}function zf(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function mc(t){return fM.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function xa(){}var Bf=null;function Hf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cs=null,Ds=null;function q0(t){var i=yt(t);if(i&&(t=i.stateNode)){var s=t[k]||null;e:switch(t=i.stateNode,i.type){case"input":if(Ff(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+ki(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[k]||null;if(!f)throw Error(r(90));Ff(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&B0(l)}break e;case"textarea":G0(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&ws(t,!!s.multiple,i,!1)}}}var Gf=!1;function W0(t,i,s){if(Gf)return t(i,s);Gf=!0;try{var l=t(i);return l}finally{if(Gf=!1,(Cs!==null||Ds!==null)&&(mu(),Cs&&(i=Cs,t=Ds,Ds=Cs=null,q0(i),t)))for(i=0;i<t.length;i++)q0(t[i])}}function ko(t,i){var s=t.stateNode;if(s===null)return null;var l=s[k]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var ka=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vf=!1;if(ka)try{var Xo={};Object.defineProperty(Xo,"passive",{get:function(){Vf=!0}}),window.addEventListener("test",Xo,Xo),window.removeEventListener("test",Xo,Xo)}catch{Vf=!1}var dr=null,kf=null,gc=null;function Y0(){if(gc)return gc;var t,i=kf,s=i.length,l,f="value"in dr?dr.value:dr.textContent,h=f.length;for(t=0;t<s&&i[t]===f[t];t++);var S=s-t;for(l=1;l<=S&&i[s-l]===f[h-l];l++);return gc=f.slice(t,1<l?1-l:void 0)}function vc(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function xc(){return!0}function Z0(){return!1}function pi(t){function i(s,l,f,h,S){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var N in t)t.hasOwnProperty(N)&&(s=t[N],this[N]=s?s(h):h[N]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?xc:Z0,this.isPropagationStopped=Z0,this}return F(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=xc)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=xc)},persist:function(){},isPersistent:xc}),i}var pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_c=pi(pr),qo=F({},pr,{view:0,detail:0}),hM=pi(qo),Xf,qf,Wo,yc=F({},qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Wo&&(Wo&&t.type==="mousemove"?(Xf=t.screenX-Wo.screenX,qf=t.screenY-Wo.screenY):qf=Xf=0,Wo=t),Xf)},movementY:function(t){return"movementY"in t?t.movementY:qf}}),K0=pi(yc),dM=F({},yc,{dataTransfer:0}),pM=pi(dM),mM=F({},qo,{relatedTarget:0}),Wf=pi(mM),gM=F({},pr,{animationName:0,elapsedTime:0,pseudoElement:0}),vM=pi(gM),xM=F({},pr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_M=pi(xM),yM=F({},pr,{data:0}),Q0=pi(yM),SM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},MM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},EM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bM(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=EM[t])?!!i[t]:!1}function Yf(){return bM}var TM=F({},qo,{key:function(t){if(t.key){var i=SM[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=vc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?MM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yf,charCode:function(t){return t.type==="keypress"?vc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),AM=pi(TM),wM=F({},yc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),j0=pi(wM),RM=F({},pr,{submitter:0}),CM=pi(RM),DM=F({},qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yf}),NM=pi(DM),LM=F({},pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),UM=pi(LM),OM=F({},yc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),PM=pi(OM),FM=F({},pr,{newState:0,oldState:0,source:0}),IM=pi(FM),zM=[9,13,27,32],Zf=ka&&"CompositionEvent"in window,Yo=null;ka&&"documentMode"in document&&(Yo=document.documentMode);var BM=ka&&"TextEvent"in window&&!Yo,J0=ka&&(!Zf||Yo&&8<Yo&&11>=Yo),$0=" ",eg=!1;function tg(t,i){switch(t){case"keyup":return zM.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ng(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ns=!1;function HM(t,i){switch(t){case"compositionend":return ng(i);case"keypress":return i.which!==32?null:(eg=!0,$0);case"textInput":return t=i.data,t===$0&&eg?null:t;default:return null}}function GM(t,i){if(Ns)return t==="compositionend"||!Zf&&tg(t,i)?(t=Y0(),gc=kf=dr=null,Ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return J0&&i.locale!=="ko"?null:i.data;default:return null}}var VM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ig(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!VM[t.type]:i==="textarea"}function ag(t,i,s,l){Cs?Ds?Ds.push(l):Ds=[l]:Cs=l,i=Su(i,"onChange"),0<i.length&&(s=new _c("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Zo=null,Ko=null;function kM(t){qx(t,0)}function Sc(t){var i=$e(t);if(B0(i))return t}function rg(t,i){if(t==="change")return i}var sg=!1;if(ka){var Kf;if(ka){var Qf="oninput"in document;if(!Qf){var og=document.createElement("div");og.setAttribute("oninput","return;"),Qf=typeof og.oninput=="function"}Kf=Qf}else Kf=!1;sg=Kf&&(!document.documentMode||9<document.documentMode)}function lg(){Zo&&(Zo.detachEvent("onpropertychange",cg),Ko=Zo=null)}function cg(t){if(t.propertyName==="value"&&Sc(Ko)){var i=[];ag(i,Ko,t,Hf(t)),W0(kM,i)}}function XM(t,i,s){t==="focusin"?(lg(),Zo=i,Ko=s,Zo.attachEvent("onpropertychange",cg)):t==="focusout"&&lg()}function qM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sc(Ko)}function WM(t,i){if(t==="click")return Sc(i)}function YM(t,i){if(t==="input"||t==="change")return Sc(i)}function ZM(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Li=typeof Object.is=="function"?Object.is:ZM;function Qo(t,i){if(Li(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!K.call(i,f)||!Li(t[f],i[f]))return!1}return!0}function jf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ug(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fg(t,i){var s=ug(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=ug(s)}}function hg(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?hg(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function dg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=jf(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=jf(t.document)}return i}function Jf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var KM=ka&&"documentMode"in document&&11>=document.documentMode,Ls=null,$f=null,jo=null,eh=!1;function pg(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;eh||Ls==null||Ls!==jf(l)||(l=Ls,"selectionStart"in l&&Jf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),jo&&Qo(jo,l)||(jo=l,l=Su($f,"onSelect"),0<l.length&&(i=new _c("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=Ls)))}function Qr(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var Us={animationend:Qr("Animation","AnimationEnd"),animationiteration:Qr("Animation","AnimationIteration"),animationstart:Qr("Animation","AnimationStart"),transitionrun:Qr("Transition","TransitionRun"),transitionstart:Qr("Transition","TransitionStart"),transitioncancel:Qr("Transition","TransitionCancel"),transitionend:Qr("Transition","TransitionEnd")},th={},mg={};ka&&(mg=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function jr(t){if(th[t])return th[t];if(!Us[t])return t;var i=Us[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in mg)return th[t]=i[s];return t}var gg=jr("animationend"),vg=jr("animationiteration"),xg=jr("animationstart"),QM=jr("transitionrun"),jM=jr("transitionstart"),JM=jr("transitioncancel"),_g=jr("transitionend"),yg=new Map,nh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");nh.push("scrollEnd");function ia(t,i){yg.set(t,i),ut(i,[t])}var $M=0;function Xa(t,i){if(t.name!=null&&t.name!=="auto")return t.name;if(i.autoName!==null)return i.autoName;t=oa.identifierPrefix;var s=$M++;return t="_"+t+"t_"+s.toString(32)+"_",i.autoName=t}function Sg(t){if(t==null||typeof t=="string")return t;var i=null,s=$s;if(s!==null)for(var l=0;l<s.length;l++){var f=t[s[l]];if(f!=null){if(f==="none")return"none";i=i==null?f:i+(" "+f)}}return i??t.default}function qa(t,i){return t=Sg(t),i=Sg(i),i==null?t==="auto"?null:t:i==="auto"?null:i}var Mc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Xi=[],Os=0,ih=0;function Ec(){for(var t=Os,i=ih=Os=0;i<t;){var s=Xi[i];Xi[i++]=null;var l=Xi[i];Xi[i++]=null;var f=Xi[i];Xi[i++]=null;var h=Xi[i];if(Xi[i++]=null,l!==null&&f!==null){var S=l.pending;S===null?f.next=f:(f.next=S.next,S.next=f),l.pending=f}h!==0&&Mg(s,f,h)}}function bc(t,i,s,l){Xi[Os++]=t,Xi[Os++]=i,Xi[Os++]=s,Xi[Os++]=l,ih|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function ah(t,i,s,l){return bc(t,i,s,l),Tc(t)}function Jr(t,i){return bc(t,null,null,i),Tc(t)}function Mg(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,h=t.return;h!==null;)h.childLanes|=s,l=h.alternate,l!==null&&(l.childLanes|=s),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(f=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,f&&i!==null&&(f=31-Ft(s),t=h.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),h):null}function Tc(t){if(50<_l)throw _l=0,pu=null,Error(r(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Ps={};function eE(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ei(t,i,s,l){return new eE(t,i,s,l)}function rh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Wa(t,i){var s=t.alternate;return s===null?(s=Ei(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&1206910976,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Eg(t,i){t.flags&=1206910978;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Ac(t,i,s,l,f,h){var S=0;if(l=t,typeof l=="function")rh(l)&&(S=1);else if(typeof l=="string")S=R2(t,s,vt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(l){case Te:return t=Ei(31,s,i,f),t.elementType=Te,t.lanes=h,t;case V:return $r(s.children,f,h,i);case ee:S=8,f|=24;break;case I:return t=Ei(12,s,i,f|2),t.elementType=I,t.lanes=h,t;case $:return t=Ei(13,s,i,f),t.elementType=$,t.lanes=h,t;case D:return t=Ei(19,s,i,f),t.elementType=D,t.lanes=h,t;case rt:case G:return t=f|32,t=Ei(30,s,i,t),t.elementType=G,t.lanes=h,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case ae:S=10;break e;case Q:S=9;break e;case W:S=11;break e;case le:S=14;break e;case me:S=16,l=null;break e}S=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return i=Ei(S,s,i,f),i.elementType=t,i.type=l,i.lanes=h,i}function $r(t,i,s,l){return t=Ei(7,t,l,i),t.lanes=s,t}function sh(t,i,s){return t=Ei(6,t,null,i),t.lanes=s,t}function bg(t){var i=Ei(18,null,null,0);return i.stateNode=t,i}function oh(t,i,s){return i=Ei(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Tg=new WeakMap;function qi(t,i){if(typeof t=="object"&&t!==null){var s=Tg.get(t);return s!==void 0?s:(i={value:t,source:i,stack:Z(i)},Tg.set(t,i),i)}return{value:t,source:i,stack:Z(i)}}var Fs=[],Is=0,wc=null,Jo=0,Wi=[],Yi=0,mr=null,_a=1,ya="";function Ya(t,i){Fs[Is++]=Jo,Fs[Is++]=wc,wc=t,Jo=i}function Ag(t,i,s){Wi[Yi++]=_a,Wi[Yi++]=ya,Wi[Yi++]=mr,mr=t;var l=_a;t=ya;var f=32-Ft(l)-1;l&=~(1<<f),s+=1;var h=32-Ft(i)+f;if(30<h){var S=f-f%5;h=(l&(1<<S)-1).toString(32),l>>=S,f-=S,_a=1<<32-Ft(i)+f|s<<f|l,ya=h+t}else _a=1<<h|s<<f|l,ya=t}function Rc(t){t.return!==null&&(Ya(t,1),Ag(t,1,0))}function lh(t){for(;t===wc;)wc=Fs[--Is],Fs[Is]=null,Jo=Fs[--Is],Fs[Is]=null;for(;t===mr;)mr=Wi[--Yi],Wi[Yi]=null,ya=Wi[--Yi],Wi[Yi]=null,_a=Wi[--Yi],Wi[Yi]=null}function wg(t,i){Wi[Yi++]=_a,Wi[Yi++]=ya,Wi[Yi++]=mr,_a=i.id,ya=i.overflow,mr=t}var Zn=null,Sn=null,Kt=!1,gr=null,Zi=!1,ch=Error(r(519));function vr(t){var i=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $o(qi(i,t)),ch}function Rg(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[A]=t,i[k]=l,s){case"dialog":$t("cancel",i),$t("close",i);break;case"iframe":case"object":case"embed":$t("load",i);break;case"video":case"audio":for(s=0;s<Sl.length;s++)$t(Sl[s],i);break;case"source":$t("error",i);break;case"img":case"image":case"link":$t("error",i),$t("load",i);break;case"details":$t("toggle",i);break;case"input":$t("invalid",i),H0(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":$t("invalid",i);break;case"textarea":$t("invalid",i),V0(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||Kx(i.textContent,s)?(l.popover!=null&&($t("beforetoggle",i),$t("toggle",i)),l.onScroll!=null&&$t("scroll",i),l.onScrollEnd!=null&&$t("scrollend",i),l.onClick!=null&&(i.onclick=xa),i=!0):i=!1,i||vr(t,!0)}function Cc(t){for(Zn=t.return;Zn;)switch(Zn.tag){case 5:case 31:case 13:Zi=!1;return;case 27:case 3:Zi=!0;return;default:Zn=Zn.return}}function zs(t){if(t!==Zn)return!1;if(!Kt)return Cc(t),Kt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Bd(t.type,t.memoizedProps)),s=!s),s&&Sn&&vr(t),Cc(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Sn=p_(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Sn=p_(t)}else i===27?(i=Sn,Ur(t.type)?(t=Zd,Zd=null,Sn=t):Sn=i):Sn=Zn?Qi(t.stateNode.nextSibling):null;return!0}function es(){Sn=Zn=null,Kt=!1}function uh(){var t=gr;return t!==null&&(Ai===null?Ai=t:Ai.push.apply(Ai,t),gr=null),t}function $o(t){gr===null?gr=[t]:gr.push(t)}var fh=ue(null),ts=null,Za=null;function xr(t,i,s){He(fh,i._currentValue),i._currentValue=s}function Ka(t){t._currentValue=fh.current,Oe(fh)}function Dc(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function hh(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var h=f.dependencies;if(h!==null){var S=f.child;h=h.firstContext;e:for(;h!==null;){var N=h;h=f;for(var Y=0;Y<i.length;Y++)if(N.context===i[Y]){h.lanes|=s,N=h.alternate,N!==null&&(N.lanes|=s),Dc(h.return,s,t),l||(S=null);break e}h=N.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(r(341));S.lanes|=s,h=S.alternate,h!==null&&(h.lanes|=s),Dc(S,s,t),S=null}else f.tag===13&&f.memoizedState!==null&&f.memoizedState.dehydrated===null?(f.lanes|=s,S=f.alternate,S!==null&&(S.lanes|=s),Dc(f.return,s,t),S=f.child,S=S!==null?S.sibling:null):S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===t){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function ns(t,i,s,l){t=null;for(var f=i,h=!1;f!==null;){if(!h){if((f.flags&524288)!==0)h=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var N=f.type;Li(f.pendingProps.value,S.value)||(t!==null?t.push(N):t=[N])}}else if(f===Tt.current){if(S=f.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(co):t=[co])}f=f.return}return t!==null&&hh(i,t,s,l),i.flags|=262144,t!==null}function Nc(t){for(t=t.firstContext;t!==null;){if(!Li(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function is(t){ts=t,Za=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function $n(t){return Cg(ts,t)}function Lc(t,i){return ts===null&&is(t),Cg(t,i)}function Cg(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Za===null){if(t===null)throw Error(r(308));Za=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Za=Za.next=i;return s}var tE=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},nE=a.unstable_scheduleCallback,iE=a.unstable_NormalPriority,Pn={$$typeof:ae,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function dh(){return{controller:new tE,data:new Map,refCount:0}}function el(t){t.refCount--,t.refCount===0&&nE(iE,function(){t.controller.abort()})}function Dg(t,i){if((t.pendingLanes&4194048)!==0){var s=t.transitionTypes;for(s===null&&(s=t.transitionTypes=[]),t=0;t<i.length;t++){var l=i[t];s.indexOf(l)===-1&&s.push(l)}}}var tl=null;function aE(t){var i=t.transitionTypes;return t.transitionTypes=null,i}var nl=null,ph=0,as=0,Bs=null;function rE(t,i){if(nl===null){var s=nl=[];ph=0,as=Dd(),Bs={status:"pending",value:void 0,then:function(l){s.push(l)}}}return ph++,i.then(Ng,Ng),i}function Ng(){if(--ph===0&&(tl=null,nl!==null)){Bs!==null&&(Bs.status="fulfilled");var t=nl;nl=null,as=0,Bs=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function sE(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Lg=ye.S;ye.S=function(t,i){if(bx=Qe(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&rE(t,i),tl!==null)for(var s=io;s!==null;)Dg(s,tl),s=s.next;if(s=t.types,s!==null){for(var l=io;l!==null;)Dg(l,s),l=l.next;if(as!==0){l=tl,l===null&&(l=tl=[]);for(var f=0;f<s.length;f++){var h=s[f];l.indexOf(h)===-1&&l.push(h)}}}Lg!==null&&Lg(t,i)};var rs=ue(null);function mh(){var t=rs.current;return t!==null?t:_n.pooledCache}function Uc(t,i){i===null?He(rs,rs.current):He(rs,i.pool)}function Ug(){var t=mh();return t===null?null:{parent:Pn._currentValue,pool:t}}var Hs=Error(r(460)),gh=Error(r(474)),Oc=Error(r(542)),Pc={then:function(){}};function Og(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Pg(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(xa,xa),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Ig(t),t===void 0&&!("reason"in i)?Error(r(600)):t;default:if(typeof i.status=="string")i.then(xa,xa);else{if(t=_n,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Ig(t),t}throw os=i,Hs}}function ss(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(os=s,Hs):s}}var os=null;function Fg(){if(os===null)throw Error(r(459));var t=os;return os=null,t}function Ig(t){if(t===Hs||t===Oc)throw Error(r(483))}var Gs=null,il=0;function Fc(t){var i=il;return il+=1,Gs===null&&(Gs=[]),Pg(Gs,t,i)}function _r(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Ic(t,i){throw i.$$typeof===w?Error(r(525)):(t=Object.prototype.toString.call(i),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function zg(t){function i(pe,se){if(t){var Se=pe.deletions;Se===null?(pe.deletions=[se],pe.flags|=16):Se.push(se)}}function s(pe,se){if(!t)return null;for(;se!==null;)i(pe,se),se=se.sibling;return null}function l(pe){for(var se=new Map;pe!==null;)pe.key===null?se.set(pe.index,pe):se.set(pe.key,pe),pe=pe.sibling;return se}function f(pe,se){return pe=Wa(pe,se),pe.index=0,pe.sibling=null,pe}function h(pe,se,Se){return pe.index=Se,t?(Se=pe.alternate,Se!==null?(Se=Se.index,Se<se?(pe.flags|=2,se):Se):(pe.flags|=134217730,se)):(pe.flags|=1048576,se)}function S(pe){return t&&pe.alternate===null&&(pe.flags|=134217730),pe}function N(pe,se,Se,ke){return se===null||se.tag!==6?(se=sh(Se,pe.mode,ke),se.return=pe,se):(se=f(se,Se),se.return=pe,se)}function Y(pe,se,Se,ke){var At=Se.type;return At===V?(pe=Re(pe,se,Se.props.children,ke,Se.key),_r(pe,Se),pe):se!==null&&(se.elementType===At||typeof At=="object"&&At!==null&&At.$$typeof===me&&ss(At)===se.type)?(se=f(se,Se.props),_r(se,Se),se.return=pe,se):(se=Ac(Se.type,Se.key,Se.props,null,pe.mode,ke),_r(se,Se),se.return=pe,se)}function ge(pe,se,Se,ke){return se===null||se.tag!==4||se.stateNode.containerInfo!==Se.containerInfo||se.stateNode.implementation!==Se.implementation?(se=oh(Se,pe.mode,ke),se.return=pe,se):(se=f(se,Se.children||[]),se.return=pe,se)}function Re(pe,se,Se,ke,At){return se===null||se.tag!==7?(se=$r(Se,pe.mode,ke,At),se.return=pe,se):(se=f(se,Se),se.return=pe,se)}function Xe(pe,se,Se){if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return se=sh(""+se,pe.mode,Se),se.return=pe,se;if(typeof se=="object"&&se!==null){switch(se.$$typeof){case T:return Se=Ac(se.type,se.key,se.props,null,pe.mode,Se),_r(Se,se),Se.return=pe,Se;case H:return se=oh(se,pe.mode,Se),se.return=pe,se;case me:return se=ss(se),Xe(pe,se,Se)}if(Ue(se)||ie(se))return se=$r(se,pe.mode,Se,null),se.return=pe,se;if(typeof se.then=="function")return Xe(pe,Fc(se),Se);if(se.$$typeof===ae)return Xe(pe,Lc(pe,se),Se);Ic(pe,se)}return null}function de(pe,se,Se,ke){var At=se!==null?se.key:null;if(typeof Se=="string"&&Se!==""||typeof Se=="number"||typeof Se=="bigint")return At!==null?null:N(pe,se,""+Se,ke);if(typeof Se=="object"&&Se!==null){switch(Se.$$typeof){case T:return Se.key===At?Y(pe,se,Se,ke):null;case H:return Se.key===At?ge(pe,se,Se,ke):null;case me:return Se=ss(Se),de(pe,se,Se,ke)}if(Ue(Se)||ie(Se))return At!==null?null:Re(pe,se,Se,ke,null);if(typeof Se.then=="function")return de(pe,se,Fc(Se),ke);if(Se.$$typeof===ae)return de(pe,se,Lc(pe,Se),ke);Ic(pe,Se)}return null}function be(pe,se,Se,ke,At){if(typeof ke=="string"&&ke!==""||typeof ke=="number"||typeof ke=="bigint")return pe=pe.get(Se)||null,N(se,pe,""+ke,At);if(typeof ke=="object"&&ke!==null){switch(ke.$$typeof){case T:return pe=pe.get(ke.key===null?Se:ke.key)||null,Y(se,pe,ke,At);case H:return pe=pe.get(ke.key===null?Se:ke.key)||null,ge(se,pe,ke,At);case me:return ke=ss(ke),be(pe,se,Se,ke,At)}if(Ue(ke)||ie(ke))return pe=pe.get(Se)||null,Re(se,pe,ke,At,null);if(typeof ke.then=="function")return be(pe,se,Se,Fc(ke),At);if(ke.$$typeof===ae)return be(pe,se,Se,Lc(se,ke),At);Ic(se,ke)}return null}function xt(pe,se,Se,ke){for(var At=null,nn=null,Lt=se,It=se=0,zn=null;Lt!==null&&It<Se.length;It++){Lt.index>It?(zn=Lt,Lt=null):zn=Lt.sibling;var rn=de(pe,Lt,Se[It],ke);if(rn===null){Lt===null&&(Lt=zn);break}t&&Lt&&rn.alternate===null&&i(pe,Lt),se=h(rn,se,It),nn===null?At=rn:nn.sibling=rn,nn=rn,Lt=zn}if(It===Se.length)return s(pe,Lt),Kt&&Ya(pe,It),At;if(Lt===null){for(;It<Se.length;It++)Lt=Xe(pe,Se[It],ke),Lt!==null&&(se=h(Lt,se,It),nn===null?At=Lt:nn.sibling=Lt,nn=Lt);return Kt&&Ya(pe,It),At}for(Lt=l(Lt);It<Se.length;It++)zn=be(Lt,pe,It,Se[It],ke),zn!==null&&(t&&(rn=zn.alternate,rn!==null&&Lt.delete(rn.key===null?It:rn.key)),se=h(zn,se,It),nn===null?At=zn:nn.sibling=zn,nn=zn);return t&&Lt.forEach(function(zr){return i(pe,zr)}),Kt&&Ya(pe,It),At}function Rt(pe,se,Se,ke){if(Se==null)throw Error(r(151));for(var At=null,nn=null,Lt=se,It=se=0,zn=null,rn=Se.next();Lt!==null&&!rn.done;It++,rn=Se.next()){Lt.index>It?(zn=Lt,Lt=null):zn=Lt.sibling;var zr=de(pe,Lt,rn.value,ke);if(zr===null){Lt===null&&(Lt=zn);break}t&&Lt&&zr.alternate===null&&i(pe,Lt),se=h(zr,se,It),nn===null?At=zr:nn.sibling=zr,nn=zr,Lt=zn}if(rn.done)return s(pe,Lt),Kt&&Ya(pe,It),At;if(Lt===null){for(;!rn.done;It++,rn=Se.next())rn=Xe(pe,rn.value,ke),rn!==null&&(se=h(rn,se,It),nn===null?At=rn:nn.sibling=rn,nn=rn);return Kt&&Ya(pe,It),At}for(Lt=l(Lt);!rn.done;It++,rn=Se.next())rn=be(Lt,pe,It,rn.value,ke),rn!==null&&(t&&(zn=rn.alternate,zn!==null&&Lt.delete(zn.key===null?It:zn.key)),se=h(rn,se,It),nn===null?At=rn:nn.sibling=rn,nn=rn);return t&&Lt.forEach(function(H2){return i(pe,H2)}),Kt&&Ya(pe,It),At}function qt(pe,se,Se,ke){if(typeof Se=="object"&&Se!==null&&Se.type===V&&Se.key===null&&Se.props.ref===void 0&&(Se=Se.props.children),typeof Se=="object"&&Se!==null){switch(Se.$$typeof){case T:e:{for(var At=Se.key;se!==null;){if(se.key===At){if(At=Se.type,At===V){if(se.tag===7){s(pe,se.sibling),ke=f(se,Se.props.children),_r(ke,Se),ke.return=pe,pe=ke;break e}}else if(se.elementType===At||typeof At=="object"&&At!==null&&At.$$typeof===me&&ss(At)===se.type){s(pe,se.sibling),ke=f(se,Se.props),_r(ke,Se),ke.return=pe,pe=ke;break e}s(pe,se);break}else i(pe,se);se=se.sibling}Se.type===V?(ke=$r(Se.props.children,pe.mode,ke,Se.key),_r(ke,Se),ke.return=pe,pe=ke):(ke=Ac(Se.type,Se.key,Se.props,null,pe.mode,ke),_r(ke,Se),ke.return=pe,pe=ke)}return S(pe);case H:e:{for(At=Se.key;se!==null;){if(se.key===At)if(se.tag===4&&se.stateNode.containerInfo===Se.containerInfo&&se.stateNode.implementation===Se.implementation){s(pe,se.sibling),ke=f(se,Se.children||[]),ke.return=pe,pe=ke;break e}else{s(pe,se);break}else i(pe,se);se=se.sibling}ke=oh(Se,pe.mode,ke),ke.return=pe,pe=ke}return S(pe);case me:return Se=ss(Se),qt(pe,se,Se,ke)}if(Ue(Se))return xt(pe,se,Se,ke);if(ie(Se)){if(At=ie(Se),typeof At!="function")throw Error(r(150));return Se=At.call(Se),Rt(pe,se,Se,ke)}if(typeof Se.then=="function")return qt(pe,se,Fc(Se),ke);if(Se.$$typeof===ae)return qt(pe,se,Lc(pe,Se),ke);Ic(pe,Se)}return typeof Se=="string"&&Se!==""||typeof Se=="number"||typeof Se=="bigint"?(Se=""+Se,se!==null&&se.tag===6?(s(pe,se.sibling),ke=f(se,Se),ke.return=pe,pe=ke):(s(pe,se),ke=sh(Se,pe.mode,ke),ke.return=pe,pe=ke),S(pe)):s(pe,se)}return function(pe,se,Se,ke){try{il=0;var At=qt(pe,se,Se,ke);return Gs=null,At}catch(Lt){if(Lt===Hs||Lt===Oc)throw Lt;var nn=Ei(29,Lt,null,pe.mode);return nn.lanes=ke,nn.return=pe,nn}}}var ls=zg(!0),Bg=zg(!1),yr=!1;function vh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Sr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Mr(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(cn&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Tc(t),Mg(t,null,s),i}return bc(t,l,i,s),Tc(t)}function al(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,ct(t,s)}}function _h(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};h===null?f=h=S:h=h.next=S,s=s.next}while(s!==null);h===null?f=h=i:h=h.next=i}else f=h=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var yh=!1;function rl(){if(yh){var t=Bs;if(t!==null)throw t}}function sl(t,i,s,l){yh=!1;var f=t.updateQueue;yr=!1;var h=f.firstBaseUpdate,S=f.lastBaseUpdate,N=f.shared.pending;if(N!==null){f.shared.pending=null;var Y=N,ge=Y.next;Y.next=null,S===null?h=ge:S.next=ge,S=Y;var Re=t.alternate;Re!==null&&(Re=Re.updateQueue,N=Re.lastBaseUpdate,N!==S&&(N===null?Re.firstBaseUpdate=ge:N.next=ge,Re.lastBaseUpdate=Y))}if(h!==null){var Xe=f.baseState;S=0,Re=ge=Y=null,N=h;do{var de=N.lane&-536870913,be=de!==N.lane;if(be?(tn&de)===de:(l&de)===de){de!==0&&de===as&&(yh=!0),Re!==null&&(Re=Re.next={lane:0,tag:N.tag,payload:N.payload,callback:null,next:null});e:{var xt=t,Rt=N;de=i;var qt=s;switch(Rt.tag){case 1:if(xt=Rt.payload,typeof xt=="function"){Xe=xt.call(qt,Xe,de);break e}Xe=xt;break e;case 3:xt.flags=xt.flags&-65537|128;case 0:if(xt=Rt.payload,de=typeof xt=="function"?xt.call(qt,Xe,de):xt,de==null)break e;Xe=F({},Xe,de);break e;case 2:yr=!0}}de=N.callback,de!==null&&(t.flags|=64,be&&(t.flags|=8192),be=f.callbacks,be===null?f.callbacks=[de]:be.push(de))}else be={lane:de,tag:N.tag,payload:N.payload,callback:N.callback,next:null},Re===null?(ge=Re=be,Y=Xe):Re=Re.next=be,S|=de;if(N=N.next,N===null){if(N=f.shared.pending,N===null)break;be=N,N=be.next,be.next=null,f.lastBaseUpdate=be,f.shared.pending=null}}while(!0);Re===null&&(Y=Xe),f.baseState=Y,f.firstBaseUpdate=ge,f.lastBaseUpdate=Re,h===null&&(f.shared.lanes=0),Cr|=S,t.lanes=S,t.memoizedState=Xe}}function Hg(t,i){if(typeof t!="function")throw Error(r(191,t));t.call(i)}function Gg(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Hg(s[t],i)}var Er=ue(null),zc=ue(0);function Vg(t,i){t=er,He(zc,t),He(Er,i),er=t|i.baseLanes}function Sh(){He(zc,er),He(Er,Er.current)}function Mh(){er=zc.current,Oe(Er),Oe(zc)}var ei=ue(null),ci=null;function br(t){var i=t.alternate;He(ti,ti.current&1),He(ei,t),ci===null&&(i===null||Er.current!==null||i.memoizedState!==null)&&(ci=t)}function Eh(t){He(ti,ti.current),He(ei,t),ci===null&&(ci=t)}function kg(t){t.tag===22?(He(ti,ti.current),He(ei,t),ci===null&&(ci=t)):Tr()}function Tr(){He(ti,ti.current),He(ei,ei.current)}function Ui(t){Oe(ei),ci===t&&(ci=null),Oe(ti)}var ti=ue(0);function ol(t,i){He(ei,ei.current),He(ti,i)}function bh(t){Oe(ti),Oe(ei),ci===t&&(ci=null)}function Bc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Wd(s)||Yd(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!=="independent"){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Qa=0,Xt=null,vn=null,Fn=null,Hc=!1,Vs=!1,cs=!1,Gc=0,ll=0,ks=null,oE=0;function Ln(){throw Error(r(321))}function Th(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!Li(t[s],i[s]))return!1;return!0}function Ah(t,i,s,l,f,h){return Qa=h,Xt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ye.H=t===null||t.memoizedState===null?Av:wv,cs=!1,h=s(l,f),cs=!1,Vs&&(h=qg(i,s,l,f)),Xg(t),h}function Xg(t){ye.H=Zc;var i=vn!==null&&vn.next!==null;if(Qa=0,Fn=vn=Xt=null,Hc=!1,ll=0,ks=null,i)throw Error(r(300));t===null||In||(t=t.dependencies,t!==null&&Nc(t)&&(In=!0))}function qg(t,i,s,l){Xt=t;var f=0;do{if(Vs&&(ks=null),ll=0,Vs=!1,25<=f)throw Error(r(301));if(f+=1,Fn=vn=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}ye.H=mE,h=i(s,l)}while(Vs);return h}function lE(){var t=ye.H,i=t.useState()[0];return i=typeof i.then=="function"?cl(i):i,t=t.useState()[0],(vn!==null?vn.memoizedState:null)!==t&&(Xt.flags|=1024),i}function wh(){var t=Gc!==0;return Gc=0,t}function Rh(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function Ch(t){if(Hc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Hc=!1}Qa=0,Fn=vn=Xt=null,Vs=!1,ll=Gc=0,ks=null}function mi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fn===null?Xt.memoizedState=Fn=t:Fn=Fn.next=t,Fn}function On(){if(vn===null){var t=Xt.alternate;t=t!==null?t.memoizedState:null}else t=vn.next;var i=Fn===null?Xt.memoizedState:Fn.next;if(i!==null)Fn=i,vn=t;else{if(t===null)throw Xt.alternate===null?Error(r(467)):Error(r(310));vn=t,t={memoizedState:vn.memoizedState,baseState:vn.baseState,baseQueue:vn.baseQueue,queue:vn.queue,next:null},Fn===null?Xt.memoizedState=Fn=t:Fn=Fn.next=t}return Fn}function Vc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function cl(t){var i=ll;return ll+=1,ks===null&&(ks=[]),t=Pg(ks,t,i),i=Xt,(Fn===null?i.memoizedState:Fn.next)===null&&(i=i.alternate,ye.H=i===null||i.memoizedState===null?Av:wv),t}function kc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return cl(t);if(t.$$typeof===J)return;if(t.$$typeof===ae)return $n(t)}throw Error(r(438,String(t)))}function Dh(t){var i=null,s=Xt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=Xt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Vc(),Xt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=je;return i.index++,s}function ja(t,i){return typeof i=="function"?i(t):i}function Xc(t){var i=On();return Nh(i,vn,t)}function Nh(t,i,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,h=l.pending;if(h!==null){if(f!==null){var S=f.next;f.next=h.next,h.next=S}i.baseQueue=f=h,l.pending=null}if(h=t.baseState,f===null)t.memoizedState=h;else{i=f.next;var N=S=null,Y=null,ge=i,Re=!1;do{var Xe=ge.lane&-536870913;if(Xe!==ge.lane?(tn&Xe)===Xe:(Qa&Xe)===Xe){var de=ge.revertLane;if(de===0)Y!==null&&(Y=Y.next={lane:0,revertLane:0,gesture:null,action:ge.action,hasEagerState:ge.hasEagerState,eagerState:ge.eagerState,next:null}),Xe===as&&(Re=!0);else if((Qa&de)===de){ge=ge.next,de===as&&(Re=!0);continue}else Xe={lane:0,revertLane:ge.revertLane,gesture:null,action:ge.action,hasEagerState:ge.hasEagerState,eagerState:ge.eagerState,next:null},Y===null?(N=Y=Xe,S=h):Y=Y.next=Xe,Xt.lanes|=de,Cr|=de;Xe=ge.action,cs&&s(h,Xe),h=ge.hasEagerState?ge.eagerState:s(h,Xe)}else de={lane:Xe,revertLane:ge.revertLane,gesture:ge.gesture,action:ge.action,hasEagerState:ge.hasEagerState,eagerState:ge.eagerState,next:null},Y===null?(N=Y=de,S=h):Y=Y.next=de,Xt.lanes|=Xe,Cr|=Xe;ge=ge.next}while(ge!==null&&ge!==i);if(Y===null?S=h:Y.next=N,!Li(h,t.memoizedState)&&(In=!0,Re&&(s=Bs,s!==null)))throw s;t.memoizedState=h,t.baseState=S,t.baseQueue=Y,l.lastRenderedState=h}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Lh(t){var i=On(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,h=i.memoizedState;if(f!==null){s.pending=null;var S=f=f.next;do h=t(h,S.action),S=S.next;while(S!==f);Li(h,i.memoizedState)||(In=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function Wg(t,i,s){var l=Xt,f=On(),h=Kt;if(h){if(s===void 0)throw Error(r(407));s=s()}else s=i();var S=!Li((vn||f).memoizedState,s);if(S&&(f.memoizedState=s,In=!0),f=f.queue,Ph(Kg.bind(null,l,f,t),[t]),t=f.getSnapshot!==i||S||Fn!==null&&(Fn.memoizedState.tag&1)!==0,Xs(t?9:8,{destroy:void 0},Zg.bind(null,l,f,s,i),null),t){if(l.flags|=2048,_n===null)throw Error(r(349));h||(Qa&127)!==0||Yg(l,i,s)}return s}function Yg(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=Xt.updateQueue,i===null?(i=Vc(),Xt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Zg(t,i,s,l){i.value=s,i.getSnapshot=l,Qg(i)&&jg(t)}function Kg(t,i,s){return s(function(){Qg(i)&&jg(t)})}function Qg(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!Li(t,s)}catch{return!0}}function jg(t){var i=Jr(t,2);i!==null&&wi(i,t,2)}function Uh(t){var i=mi();if(typeof t=="function"){var s=t;if(t=s(),cs){Pt(!0);try{s()}finally{Pt(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:t},i}function Jg(t,i,s,l){return t.baseState=s,Nh(t,vn,typeof l=="function"?l:ja)}function cE(t,i,s,l,f){if(Yc(t))throw Error(r(485));if(t=i.action,t!==null){var h={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};ye.T!==null?s(!0):h.isTransition=!1,l(h),s=i.pending,s===null?(h.next=i.pending=h,$g(i,h)):(h.next=s.next,i.pending=s.next=h)}}function $g(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var h=ye.T,S={};S.types=h!==null?h.types:null,ye.T=S;try{var N=s(f,l),Y=ye.S;Y!==null&&Y(S,N),ev(t,i,N)}catch(ge){Oh(t,i,ge)}finally{h!==null&&S.types!==null&&(h.types=S.types),ye.T=h}}else try{h=s(f,l),ev(t,i,h)}catch(ge){Oh(t,i,ge)}}function ev(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){tv(t,i,l)},function(l){return Oh(t,i,l)}):tv(t,i,s)}function tv(t,i,s){i.status="fulfilled",i.value=s,nv(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,$g(t,s)))}function Oh(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,nv(i),i=i.next;while(i!==l)}t.action=null}function nv(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function iv(t,i){return i}function av(t,i){if(Kt){var s=_n.formState;if(s!==null){e:{var l=Xt;if(Kt){if(Sn){t:{for(var f=Sn,h=Zi;f.nodeType!==8;){if(!h){f=null;break t}if(f=Qi(f.nextSibling),f===null){f=null;break t}}h=f.data,f=h==="F!"||h==="F"?f:null}if(f){Sn=Qi(f.nextSibling),l=f.data==="F!";break e}}vr(l)}l=!1}l&&(i=s[0])}}return s=mi(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:iv,lastRenderedState:i},s.queue=l,s=Ev.bind(null,Xt,l),l.dispatch=s,l=Uh(!1),h=Hh.bind(null,Xt,!1,l.queue),l=mi(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=cE.bind(null,Xt,f,h,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function rv(t){var i=On();return sv(i,vn,t)}function sv(t,i,s){if(i=Nh(t,i,iv)[0],t=Xc(ja)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=cl(i)}catch(S){throw S===Hs?Oc:S}else l=i;i=On();var f=i.queue,h=f.dispatch;return s!==i.memoizedState&&(Xt.flags|=2048,Xs(9,{destroy:void 0},uE.bind(null,f,s),null)),[l,h,t]}function uE(t,i){t.action=i}function ov(t){var i=On(),s=vn;if(s!==null)return sv(i,s,t);On(),i=i.memoizedState,s=On();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function Xs(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=Xt.updateQueue,i===null&&(i=Vc(),Xt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function lv(){return On().memoizedState}function qc(t,i,s,l){var f=mi();Xt.flags|=t,f.memoizedState=Xs(1|i,{destroy:void 0},s,l===void 0?null:l)}function Wc(t,i,s,l){var f=On();l=l===void 0?null:l;var h=f.memoizedState.inst;vn!==null&&l!==null&&Th(l,vn.memoizedState.deps)?f.memoizedState=Xs(i,h,s,l):(Xt.flags|=t,f.memoizedState=Xs(1|i,h,s,l))}function cv(t,i){qc(8390656,8,t,i)}function Ph(t,i){Wc(2048,8,t,i)}function fE(t){Xt.flags|=4;var i=Xt.updateQueue;if(i===null)i=Vc(),Xt.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function uv(t){var i=On().memoizedState;return fE({ref:i,nextImpl:t}),function(){if((cn&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}function fv(t,i){return Wc(4,2,t,i)}function hv(t,i){return Wc(4,4,t,i)}function dv(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function pv(t,i,s){s=s!=null?s.concat([t]):null,Wc(4,4,dv.bind(null,i,t),s)}function Fh(){}function mv(t,i){var s=On();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Th(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function gv(t,i){var s=On();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Th(i,l[1]))return l[0];if(l=t(),cs){Pt(!0);try{t()}finally{Pt(!1)}}return s.memoizedState=[l,i],l}function Ih(t,i,s){return s===void 0||(Qa&1073741824)!==0&&(tn&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=Ax(),Xt.lanes|=t,Cr|=t,s)}function vv(t,i,s,l){return Li(s,i)?s:Er.current!==null?(t=Ih(t,s,l),Li(t,i)||(In=!0),t):(Qa&106)===0||(Qa&1073741824)!==0&&(tn&261930)===0?(In=!0,t.memoizedState=s):(t=Ax(),Xt.lanes|=t,Cr|=t,i)}function xv(t,i,s,l,f){var h=we.p;we.p=h!==0&&8>h?h:8;var S=ye.T,N={};N.types=S!==null?S.types:null,ye.T=N,Hh(t,!1,i,s);try{var Y=f(),ge=ye.S;if(ge!==null&&ge(N,Y),Y!==null&&typeof Y=="object"&&typeof Y.then=="function"){var Re=sE(Y,l);ul(t,i,Re,Ii(t))}else ul(t,i,l,Ii(t))}catch(Xe){ul(t,i,{then:function(){},status:"rejected",reason:Xe},Ii())}finally{we.p=h,S!==null&&N.types!==null&&(S.types=N.types),ye.T=S}}function hE(){}function zh(t,i,s,l){if(t.tag!==5)throw Error(r(476));var f=_v(t).queue;xv(t,f,i,_t,s===null?hE:function(){return yv(t),s(l)})}function _v(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:_t,baseState:_t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:_t},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function yv(t){var i=_v(t);i.next===null&&(i=t.alternate.memoizedState),ul(t,i.next.queue,{},Ii())}function Bh(){return $n(co)}function Sv(){return On().memoizedState}function Mv(){return On().memoizedState}function dE(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=Ii();t=Sr(s);var l=Mr(i,t,s);l!==null&&(wi(l,i,s),al(l,i,s)),i={cache:dh()},t.payload=i;return}i=i.return}}function pE(t,i,s){var l=Ii();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Yc(t)?bv(i,s):(s=ah(t,i,s,l),s!==null&&(wi(s,t,l),Tv(s,i,l)))}function Ev(t,i,s){var l=Ii();ul(t,i,s,l)}function ul(t,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Yc(t))bv(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var S=i.lastRenderedState,N=h(S,s);if(f.hasEagerState=!0,f.eagerState=N,Li(N,S))return bc(t,i,f,0),_n===null&&Ec(),!1}catch{}if(s=ah(t,i,f,l),s!==null)return wi(s,t,l),Tv(s,i,l),!0}return!1}function Hh(t,i,s,l){if(l={lane:2,revertLane:Dd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Yc(t)){if(i)throw Error(r(479))}else i=ah(t,s,l,2),i!==null&&wi(i,t,2)}function Yc(t){var i=t.alternate;return t===Xt||i!==null&&i===Xt}function bv(t,i){Vs=Hc=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Tv(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,ct(t,s)}}var Zc={readContext:$n,use:kc,useCallback:Ln,useContext:Ln,useEffect:Ln,useImperativeHandle:Ln,useLayoutEffect:Ln,useInsertionEffect:Ln,useMemo:Ln,useReducer:Ln,useRef:Ln,useState:Ln,useDebugValue:Ln,useDeferredValue:Ln,useTransition:Ln,useSyncExternalStore:Ln,useId:Ln,useHostTransitionStatus:Ln,useFormState:Ln,useActionState:Ln,useOptimistic:Ln,useMemoCache:Ln,useCacheRefresh:Ln,useEffectEvent:Ln},Av={readContext:$n,use:kc,useCallback:function(t,i){return mi().memoizedState=[t,i===void 0?null:i],t},useContext:$n,useEffect:cv,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,qc(4194308,4,dv.bind(null,i,t),s)},useLayoutEffect:function(t,i){return qc(4194308,4,t,i)},useInsertionEffect:function(t,i){qc(4,2,t,i)},useMemo:function(t,i){var s=mi();i=i===void 0?null:i;var l=t();if(cs){Pt(!0);try{t()}finally{Pt(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=mi();if(s!==void 0){var f=s(i);if(cs){Pt(!0);try{s(i)}finally{Pt(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=pE.bind(null,Xt,t),[l.memoizedState,t]},useRef:function(t){var i=mi();return t={current:t},i.memoizedState=t},useState:function(t){t=Uh(t);var i=t.queue,s=Ev.bind(null,Xt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:Fh,useDeferredValue:function(t,i){var s=mi();return Ih(s,t,i)},useTransition:function(){var t=Uh(!1);return t=xv.bind(null,Xt,t.queue,!0,!1),mi().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=Xt,f=mi();if(Kt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),_n===null)throw Error(r(349));(tn&127)!==0||Yg(l,i,s)}f.memoizedState=s;var h={value:s,getSnapshot:i};return f.queue=h,cv(Kg.bind(null,l,h,t),[t]),l.flags|=2048,Xs(9,{destroy:void 0},Zg.bind(null,l,h,s,i),null),s},useId:function(){var t=mi(),i=_n.identifierPrefix;if(Kt){var s=ya,l=_a;s=(l&~(1<<32-Ft(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Gc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=oE++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Bh,useFormState:av,useActionState:av,useOptimistic:function(t){var i=mi();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Hh.bind(null,Xt,!0,s),s.dispatch=i,[t,i]},useMemoCache:Dh,useCacheRefresh:function(){return mi().memoizedState=dE.bind(null,Xt)},useEffectEvent:function(t){var i=mi(),s={impl:t};return i.memoizedState=s,function(){if((cn&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},wv={readContext:$n,use:kc,useCallback:mv,useContext:$n,useEffect:Ph,useImperativeHandle:pv,useInsertionEffect:fv,useLayoutEffect:hv,useMemo:gv,useReducer:Xc,useRef:lv,useState:function(){return Xc(ja)},useDebugValue:Fh,useDeferredValue:function(t,i){var s=On();return vv(s,vn.memoizedState,t,i)},useTransition:function(){var t=Xc(ja)[0],i=On().memoizedState;return[typeof t=="boolean"?t:cl(t),i]},useSyncExternalStore:Wg,useId:Sv,useHostTransitionStatus:Bh,useFormState:rv,useActionState:rv,useOptimistic:function(t,i){var s=On();return Jg(s,vn,t,i)},useMemoCache:Dh,useCacheRefresh:Mv,useEffectEvent:uv},mE={readContext:$n,use:kc,useCallback:mv,useContext:$n,useEffect:Ph,useImperativeHandle:pv,useInsertionEffect:fv,useLayoutEffect:hv,useMemo:gv,useReducer:Lh,useRef:lv,useState:function(){return Lh(ja)},useDebugValue:Fh,useDeferredValue:function(t,i){var s=On();return vn===null?Ih(s,t,i):vv(s,vn.memoizedState,t,i)},useTransition:function(){var t=Lh(ja)[0],i=On().memoizedState;return[typeof t=="boolean"?t:cl(t),i]},useSyncExternalStore:Wg,useId:Sv,useHostTransitionStatus:Bh,useFormState:ov,useActionState:ov,useOptimistic:function(t,i){var s=On();return vn!==null?Jg(s,vn,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Dh,useCacheRefresh:Mv,useEffectEvent:uv};function Gh(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:F({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Vh={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=Ii(),f=Sr(l);f.payload=i,s!=null&&(f.callback=s),i=Mr(t,f,l),i!==null&&(wi(i,t,l),al(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=Ii(),f=Sr(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=Mr(t,f,l),i!==null&&(wi(i,t,l),al(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=Ii(),l=Sr(s);l.tag=2,i!=null&&(l.callback=i),i=Mr(t,l,s),i!==null&&(wi(i,t,s),al(i,t,s))}};function Rv(t,i,s,l,f,h,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,S):i.prototype&&i.prototype.isPureReactComponent?!Qo(s,l)||!Qo(f,h):!0}function Cv(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Vh.enqueueReplaceState(i,i.state,null)}function us(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=F({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function Dv(t){Mc(t)}function Nv(t){console.error(t)}function Lv(t){Mc(t)}function Kc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Uv(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function kh(t,i,s){return s=Sr(s),s.tag=3,s.payload={element:null},s.callback=function(){Kc(t,i)},s}function Ov(t){return t=Sr(t),t.tag=3,t}function Pv(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var h=l.value;t.payload=function(){return f(h)},t.callback=function(){Uv(i,s,l)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){Uv(i,s,l),typeof f!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var N=l.stack;this.componentDidCatch(l.value,{componentStack:N!==null?N:""})})}function gE(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&ns(i,s,f,!0),s=ei.current,s!==null){switch(s.tag){case 31:case 13:case 19:return ci===null?gu():s.alternate===null&&Un===0&&(Un=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Pc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),wd(t,l,f)),!1;case 22:return s.flags|=65536,l===Pc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),wd(t,l,f)),!1}throw Error(r(435,s.tag))}return wd(t,l,f),gu(),!1}if(Kt)return i=ei.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==ch&&(t=Error(r(422),{cause:l}),$o(qi(t,s)))):(l!==ch&&(i=Error(r(423),{cause:l}),$o(qi(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=qi(l,s),f=kh(t.stateNode,l,f),_h(t,f),Un!==4&&(Un=2)),!1;var h=Error(r(520),{cause:l});if(h=qi(h,s),xl===null?xl=[h]:xl.push(h),Un!==4&&(Un=2),i===null)return!0;l=qi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=kh(s.stateNode,l,t),_h(s,t),!1;case 1:if(i=s.type,h=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Dr===null||!Dr.has(h))))return s.flags|=65536,f&=-f,s.lanes|=f,f=Ov(f),Pv(f,t,s,l),_h(s,f),!1;break;case 22:if(s.memoizedState!==null)return s.flags|=65536,!1}s=s.return}while(s!==null);return!1}var Xh=Error(r(461)),In=!1;function kn(t,i,s,l){i.child=t===null?Bg(i,null,s,l):ls(i,t.child,s,l)}function Fv(t,i,s,l,f){s=s.render;var h=i.ref;if("ref"in l){var S={};for(var N in l)N!=="ref"&&(S[N]=l[N])}else S=l;return is(i),l=Ah(t,i,s,S,h,f),N=wh(),t!==null&&!In?(Rh(t,i,f),Ja(t,i,f)):(Kt&&N&&Rc(i),i.flags|=1,kn(t,i,l,f),i.child)}function Iv(t,i,s,l,f){if(t===null){var h=s.type;return typeof h=="function"&&!rh(h)&&h.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=h,zv(t,i,h,l,f)):(t=Ac(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!Jh(t,f)){var S=h.memoizedProps;if(s=s.compare,s=s!==null?s:Qo,s(S,l)&&t.ref===i.ref)return Ja(t,i,f)}return i.flags|=1,t=Wa(h,l),t.ref=i.ref,t.return=i,i.child=t}function zv(t,i,s,l,f){if(t!==null){var h=t.memoizedProps;if(Qo(h,l)&&t.ref===i.ref)if(In=!1,i.pendingProps=l=h,Jh(t,f))(t.flags&131072)!==0&&(In=!0);else return i.lanes=t.lanes,Ja(t,i,f)}return qh(t,i,s,l,f)}function Bv(t,i,s,l){var f=l.children,h=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(h=h!==null?h.baseLanes|s:s,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~h}else l=0,i.child=null;return Hv(t,i,h,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Uc(i,h!==null?h.cachePool:null),h!==null?Vg(i,h):Sh(),kg(i);else return l=i.lanes=536870912,Hv(t,i,h!==null?h.baseLanes|s:s,s,l)}else h!==null?(Uc(i,h.cachePool),Vg(i,h),Tr(),i.memoizedState=null):(t!==null&&Uc(i,null),Sh(),Tr());return kn(t,i,f,s),i.child}function fl(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Hv(t,i,s,l,f){var h=mh();return h=h===null?null:{parent:Pn._currentValue,pool:h},i.memoizedState={baseLanes:s,cachePool:h},t!==null&&Uc(i,null),Sh(),kg(i),t!==null&&ns(t,i,l,!0),i.childLanes=f,null}function Qc(t,i){return i=jc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function Gv(t,i,s){return ls(i,t.child,null,s),t=Qc(i,i.pendingProps),t.flags|=2,Ui(i),i.memoizedState=null,t}function vE(t,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Kt){if(l.mode==="hidden")return t=Qc(i,l),i.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},fl(null,t);if(Eh(i),(t=Sn)?(t=d_(t,Zi),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:mr!==null?{id:_a,overflow:ya}:null,retryLane:536870912,hydrationErrors:null},s=bg(t),s.return=i,i.child=s,Zn=i,Sn=null)):t=null,t===null)throw vr(i);return i.lanes=536870912,null}return Qc(i,l)}var h=t.memoizedState;if(h!==null){var S=h.dehydrated;if(Eh(i),f)if(i.flags&256)i.flags&=-257,i=Gv(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(r(558));else if(In||ns(t,i,s,!1),f=(s&t.childLanes)!==0,In||f){if(Er.current===null){if(l=_n,l!==null&&(S=at(l,s),S!==0&&S!==h.retryLane))throw h.retryLane=S,Jr(t,S),wi(l,t,S),Xh;gu()}i=Gv(t,i,s)}else t=h.treeContext,Sn=Qi(S.nextSibling),Zn=i,Kt=!0,gr=null,Zi=!1,t!==null&&wg(i,t),i=Qc(i,l),i.flags|=134221824;return i}return t=Wa(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function qs(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function qh(t,i,s,l,f){return is(i),s=Ah(t,i,s,l,void 0,f),l=wh(),t!==null&&!In?(Rh(t,i,f),Ja(t,i,f)):(Kt&&l&&Rc(i),i.flags|=1,kn(t,i,s,f),i.child)}function Vv(t,i,s,l,f,h){return is(i),i.updateQueue=null,s=qg(i,l,s,f),Xg(t),l=wh(),t!==null&&!In?(Rh(t,i,h),Ja(t,i,h)):(Kt&&l&&Rc(i),i.flags|=1,kn(t,i,s,h),i.child)}function kv(t,i,s,l,f){if(is(i),i.stateNode===null){var h=Ps,S=s.contextType;typeof S=="object"&&S!==null&&(h=$n(S)),h=new s(l,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Vh,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=l,h.state=i.memoizedState,h.refs={},vh(i),S=s.contextType,h.context=typeof S=="object"&&S!==null?$n(S):Ps,h.state=i.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(Gh(i,s,S,l),h.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&Vh.enqueueReplaceState(h,h.state,null),sl(i,l,h,f),rl(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){h=i.stateNode;var N=i.memoizedProps,Y=us(s,N);h.props=Y;var ge=h.context,Re=s.contextType;S=Ps,typeof Re=="object"&&Re!==null&&(S=$n(Re));var Xe=s.getDerivedStateFromProps;Re=typeof Xe=="function"||typeof h.getSnapshotBeforeUpdate=="function",N=i.pendingProps!==N,Re||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(N||ge!==S)&&Cv(i,h,l,S),yr=!1;var de=i.memoizedState;h.state=de,sl(i,l,h,f),rl(),ge=i.memoizedState,N||de!==ge||yr?(typeof Xe=="function"&&(Gh(i,s,Xe,l),ge=i.memoizedState),(Y=yr||Rv(i,s,Y,l,de,ge,S))?(Re||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=ge),h.props=l,h.state=ge,h.context=S,l=Y):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{h=i.stateNode,xh(t,i),S=i.memoizedProps,Re=us(s,S),h.props=Re,Xe=i.pendingProps,de=h.context,ge=s.contextType,Y=Ps,typeof ge=="object"&&ge!==null&&(Y=$n(ge)),N=s.getDerivedStateFromProps,(ge=typeof N=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==Xe||de!==Y)&&Cv(i,h,l,Y),yr=!1,de=i.memoizedState,h.state=de,sl(i,l,h,f),rl();var be=i.memoizedState;S!==Xe||de!==be||yr||t!==null&&t.dependencies!==null&&Nc(t.dependencies)?(typeof N=="function"&&(Gh(i,s,N,l),be=i.memoizedState),(Re=yr||Rv(i,s,Re,l,de,be,Y)||t!==null&&t.dependencies!==null&&Nc(t.dependencies))?(ge||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(l,be,Y),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(l,be,Y)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===t.memoizedProps&&de===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&de===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=be),h.props=l,h.state=be,h.context=Y,l=Re):(typeof h.componentDidUpdate!="function"||S===t.memoizedProps&&de===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&de===t.memoizedState||(i.flags|=1024),l=!1)}return h=l,qs(t,i),l=(i.flags&128)!==0,h||l?(h=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,t!==null&&l?(i.child=ls(i,t.child,null,f),i.child=ls(i,null,s,f)):kn(t,i,s,f),i.memoizedState=h.state,t=i.child):t=Ja(t,i,f),t}function Xv(t,i,s,l){return es(),i.flags|=256,kn(t,i,s,l),i.child}var Wh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yh(t){return{baseLanes:t,cachePool:Ug()}}function Zh(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=Fi),t}function qv(t,i,s){var l=i.pendingProps,f=!1,h=(i.flags&128)!==0,S;if((S=h)||(S=t!==null&&t.memoizedState===null?!1:(ti.current&2)!==0),S&&(f=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,t===null){if(Kt){if(f?br(i):Tr(),(t=Sn)?(t=d_(t,Zi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:mr!==null?{id:_a,overflow:ya}:null,retryLane:536870912,hydrationErrors:null},s=bg(t),s.return=i,i.child=s,Zn=i,Sn=null)):t=null,t===null)throw vr(i);return Yd(t)?i.lanes=32:i.lanes=536870912,null}return h=l.children,l=l.fallback,f?(Tr(),f=i.mode,h=jc({mode:"hidden",children:h},f),l=$r(l,f,s,null),h.return=i,l.return=i,h.sibling=l,i.child=h,l=i.child,l.memoizedState=Yh(s),l.childLanes=Zh(t,S,s),i.memoizedState=Wh,fl(null,l)):(br(i),Kh(i,h))}var N=t.memoizedState;if(N!==null){var Y=N.dehydrated;if(Y!==null)return xE(t,i,h,S,l,Y,N,s)}return f?(Tr(),f=l.fallback,h=i.mode,N=t.child,Y=N.sibling,l=Wa(N,{mode:"hidden",children:l.children}),l.subtreeFlags=N.subtreeFlags&1206910976,Y!==null?f=Wa(Y,f):(f=$r(f,h,s,null),f.flags|=2),f.return=i,l.return=i,l.sibling=f,i.child=l,fl(null,l),l=i.child,f=t.child.memoizedState,f===null?f=Yh(s):(h=f.cachePool,h!==null?(N=Pn._currentValue,h=h.parent!==N?{parent:N,pool:N}:h):h=Ug(),f={baseLanes:f.baseLanes|s,cachePool:h}),l.memoizedState=f,l.childLanes=Zh(t,S,s),i.memoizedState=Wh,fl(t.child,l)):(br(i),s=t.child,t=s.sibling,s=Wa(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(S=i.deletions,S===null?(i.deletions=[t],i.flags|=16):S.push(t)),i.child=s,i.memoizedState=null,s)}function Kh(t,i){return i=jc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function jc(t,i){return t=Ei(22,t,null,i),t.lanes=0,t}function Jc(t,i,s){return ls(i,t.child,null,s),t=Kh(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function xE(t,i,s,l,f,h,S,N){if(s)return i.flags&256?(br(i),i.flags&=-257,Jc(t,i,N)):i.memoizedState!==null?(Tr(),i.child=t.child,i.flags|=128,null):(Tr(),h=f.fallback,S=i.mode,f=jc({mode:"visible",children:f.children},S),h=$r(h,S,N,null),h.flags|=2,f.return=i,h.return=i,f.sibling=h,i.child=f,ls(i,t.child,null,N),f=i.child,f.memoizedState=Yh(N),f.childLanes=Zh(t,l,N),i.memoizedState=Wh,fl(null,f));if(br(i),Yd(h)){if(l=h.nextSibling&&h.nextSibling.dataset,l)var Y=l.dgst;return l=Y,l!==""&&(f=Error(r(419)),f.stack="",f.digest=l,$o({value:f,source:null,stack:null})),Jc(t,i,N)}if(In||ns(t,i,N,!1),l=(N&t.childLanes)!==0,In||l){if(Er.current!==null)return Jc(t,i,N);if(l=_n,l!==null&&(f=at(l,N),f!==0&&f!==S.retryLane))throw S.retryLane=f,Jr(t,f),wi(l,t,f),Xh;return Wd(h)||gu(),Jc(t,i,N)}return Wd(h)?(i.flags|=192,i.child=t.child,null):(t=S.treeContext,Sn=Qi(h.nextSibling),Zn=i,Kt=!0,gr=null,Zi=!1,t!==null&&wg(i,t),i=Kh(i,f.children),i.flags|=134221824,i)}function Wv(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Dc(t.return,i,s)}function Yv(t){for(var i=null;t!==null;){var s=t.alternate;s!==null&&Bc(s)===null&&(i=t),t=t.sibling}return i}function $c(t,i,s,l,f,h){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:h}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=s,S.tailMode=f,S.treeForkCount=h)}function Qh(t){var i=t.child;for(t.child=null;i!==null;){var s=i.sibling;i.sibling=t.child,t.child=i,i=s}}function jh(t,i,s){var l=i.pendingProps,f=l.revealOrder,h=l.tail;l=l.children;var S=ti.current;if(i.flags&128)return ol(i,S),null;var N=(S&2)!==0;if(N?(S=S&1|2,i.flags|=128):S&=1,ol(i,S),f==="backwards"&&t!==null?(Qh(t),kn(t,i,l,s),Qh(t)):kn(t,i,l,s),l=Kt?Jo:0,!N&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wv(t,s,i);else if(t.tag===19)Wv(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"backwards":s=Yv(i.child),s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null,Qh(i)),$c(i,!0,f,null,h,l);break;case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Bc(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}$c(i,!0,s,null,h,l);break;case"together":$c(i,!1,null,null,void 0,l);break;case"independent":i.memoizedState=null;break;default:s=Yv(i.child),s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),$c(i,!1,f,s,h,l)}return i.child}function Zv(t,i,s){var l=i.pendingProps;return xr(i,i.type,l.value),kn(t,i,l.children,s),i.child}function Ja(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Cr|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(ns(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(r(153));if(i.child!==null){for(t=i.child,s=Wa(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=Wa(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Jh(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Nc(t)))}function _E(t,i,s){switch(i.tag){case 3:j(i,i.stateNode.containerInfo),xr(i,Pn,t.memoizedState.cache),es();break;case 27:case 5:ze(i);break;case 4:j(i,i.stateNode.containerInfo);break;case 10:xr(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Eh(i),null;break;case 13:var l=i.memoizedState;if(l!==null){if(l.dehydrated!==null)return br(i),i.flags|=128,null;l=ns(t,i,s,!1);var f=i.child.childLanes;return l||(s&f)!==0?qv(t,i,s):(br(i),t=Ja(t,i,s),t!==null?t.sibling:null)}br(i);break;case 19:if(i.flags&128)return jh(t,i,s);if(f=(t.flags&128)!==0,l=(s&i.childLanes)!==0,l||(ns(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return jh(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ol(i,ti.current),l)break;return null;case 22:return i.lanes=0,Bv(t,i,s,i.pendingProps);case 24:xr(i,Pn,t.memoizedState.cache)}return Ja(t,i,s)}function Kv(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)In=!0;else{if(!Jh(t,s)&&(i.flags&128)===0)return In=!1,_E(t,i,s);In=(t.flags&131072)!==0}else In=!1,Kt&&(i.flags&1048576)!==0&&Ag(i,Jo,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=ss(i.elementType),i.type=t,typeof t=="function")rh(t)?(l=us(t,l),i.tag=1,i=kv(null,i,t,l,s)):(i.tag=0,i=qh(null,i,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===W){i.tag=11,i=Fv(null,i,t,l,s);break e}else if(f===le){i.tag=14,i=Iv(null,i,t,l,s);break e}else if(f===ae){i.tag=10,i.type=t,i=Zv(null,i,s);break e}}throw i=xe(t)||t,Error(r(306,i,""))}}return i;case 0:return qh(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=us(l,i.pendingProps),kv(t,i,l,f,s);case 3:e:{if(j(i,i.stateNode.containerInfo),t===null)throw Error(r(387));l=i.pendingProps;var h=i.memoizedState;f=h.element,xh(t,i),sl(i,l,null,s);var S=i.memoizedState;if(l=S.cache,xr(i,Pn,l),l!==h.cache&&hh(i,[Pn],s,!0),rl(),l=S.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=Xv(t,i,l,s);break e}else if(l!==f){f=qi(Error(r(424)),i),$o(f),i=Xv(t,i,l,s);break e}else for(t=i.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Sn=Qi(t.firstChild),Zn=i,Kt=!0,gr=null,Zi=!0,s=Bg(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|134221824,s=s.sibling;else{if(es(),l===f){i=Ja(t,i,s);break e}kn(t,i,l,s)}i=i.child}return i;case 26:return qs(t,i),t===null?(s=y_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Kt||(i.stateNode=$x(i.type,i.pendingProps,Je.current,i)):i.memoizedState=y_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return ze(i),t===null&&Kt&&(l=i.stateNode=g_(i.type,i.pendingProps,Je.current),Zn=i,Zi=!0,f=Sn,Ur(i.type)?(Zd=f,Sn=Qi(l.firstChild)):Sn=f),kn(t,i,i.pendingProps.children,s),qs(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Kt&&((f=l=Sn)&&(l=d2(l,i.type,i.pendingProps,Zi),l!==null?(i.stateNode=l,Zn=i,Sn=Qi(l.firstChild),Zi=!1,f=!0):f=!1),f||vr(i)),ze(i),f=i.type,h=i.pendingProps,S=t!==null?t.memoizedProps:null,l=h.children,Bd(f,h)?l=null:S!==null&&Bd(f,S)&&(i.flags|=32),i.memoizedState!==null&&(f=Ah(t,i,lE,null,null,s),co._currentValue=f),qs(t,i),kn(t,i,l,s),i.child;case 6:return t===null&&Kt&&((t=s=Sn)&&(s=p2(s,i.pendingProps,Zi),s!==null?(i.stateNode=s,Zn=i,Sn=null,t=!0):t=!1),t||vr(i)),null;case 13:return qv(t,i,s);case 4:return j(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ls(i,null,l,s):kn(t,i,l,s),i.child;case 11:return Fv(t,i,i.type,i.pendingProps,s);case 7:return l=i.pendingProps,qs(t,i),kn(t,i,l,s),i.child;case 8:return kn(t,i,i.pendingProps.children,s),i.child;case 12:return kn(t,i,i.pendingProps.children,s),i.child;case 10:return Zv(t,i,s);case 9:return f=i.type._context,l=i.pendingProps.children,is(i),f=$n(f),l=l(f),i.flags|=1,kn(t,i,l,s),i.child;case 14:return Iv(t,i,i.type,i.pendingProps,s);case 15:return zv(t,i,i.type,i.pendingProps,s);case 19:return jh(t,i,s);case 31:return vE(t,i,s);case 22:return Bv(t,i,s,i.pendingProps);case 24:return is(i),l=$n(Pn),t===null?(f=mh(),f===null&&(f=_n,h=dh(),f.pooledCache=h,h.refCount++,h!==null&&(f.pooledCacheLanes|=s),f=h),i.memoizedState={parent:l,cache:f},vh(i),xr(i,Pn,f)):((t.lanes&s)!==0&&(xh(t,i),sl(i,null,null,s),rl()),f=t.memoizedState,h=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),xr(i,Pn,l)):(l=h.cache,xr(i,Pn,l),l!==f.cache&&hh(i,[Pn],s,!0))),kn(t,i,i.pendingProps.children,s),i.child;case 30:return i.stateNode===null&&(i.stateNode={autoName:null,paired:null,clones:null,ref:null}),l=i.pendingProps,l.name!=null&&l.name!=="auto"?i.flags|=t===null?18882560:18874368:Kt&&Rc(i),t!==null&&t.memoizedProps.name!==l.name?i.flags|=4194816:qs(t,i),kn(t,i,l.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function $a(t){t.flags|=4}function $h(t,i,s,l,f){var h;if((h=(t.mode&32)!==0)&&(h=s===null?b_(i,l):b_(i,l)&&(l.src!==s.src||l.srcSet!==s.srcSet)),h){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(Dx())t.flags|=8192;else throw os=Pc,gh}else t.flags&=-16777217}function Qv(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!T_(i))if(Dx())t.flags|=8192;else throw os=Pc,gh}function eu(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?An():536870912,t.lanes|=i,Qs|=i)}function hl(t,i){if(!Kt)switch(t.tailMode){case"visible":break;case"collapsed":for(var s=t.tail,l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null;break;default:for(i=t.tail,s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null}}function Mn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&1206910976,l|=f.flags&1206910976,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function yE(t,i,s){var l=i.pendingProps;switch(lh(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(i),null;case 1:return Mn(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ka(Pn),nt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(zs(i)?$a(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,uh())),Mn(i),null;case 26:var f=i.type,h=i.memoizedState;return t===null?($a(i),h!==null?(Mn(i),Qv(i,h)):(Mn(i),$h(i,f,null,l,s))):h?h!==t.memoizedState?($a(i),Mn(i),Qv(i,h)):(Mn(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&$a(i),Mn(i),$h(i,f,t,l,s)),null;case 27:if(L(i),s=Je.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&$a(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return Mn(i),i.subtreeFlags&=-33554433,null}t=vt.current,zs(i)?Rg(i):(t=g_(f,l,s),i.stateNode=t,$a(i))}return Mn(i),i.subtreeFlags&=-33554433,null;case 5:if(L(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&$a(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return Mn(i),i.subtreeFlags&=-33554433,null}if(h=vt.current,zs(i))Rg(i);else{var S=El(Je.current);switch(h){case 1:h=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:h=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":h=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":h=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":h=S.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?h.multiple=!0:l.size&&(h.size=l.size);break;default:h=typeof l.is=="string"?S.createElement(f,{is:l.is}):S.createElement(f)}}h[A]=i,h[k]=l;e:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)h.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break e;for(;S.sibling===null;){if(S.return===null||S.return===i)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=h;e:switch(ii(h,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&$a(i)}}return Mn(i),i.subtreeFlags&=-33554433,$h(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&$a(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(t=Je.current,zs(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=Zn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[A]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Kx(t.nodeValue,s)),t||vr(i,!0)}else t=El(t).createTextNode(l),t[A]=i,i.stateNode=t}return Mn(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=zs(i),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[A]=i}else es(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Mn(i),t=!1}else s=uh(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(Ui(i),i):(Ui(i),null);if((i.flags&128)!==0)throw Error(r(558))}return Mn(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=zs(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[A]=i}else es(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Mn(i),f=!1}else f=uh(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(Ui(i),i):(Ui(i),null)}return Ui(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),h=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(h=l.memoizedState.cachePool.pool),h!==f&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),eu(i,i.updateQueue),Mn(i),null);case 4:return nt(),t===null&&Od(i.stateNode.containerInfo),i.flags|=67108864,Mn(i),null;case 10:return Ka(i.type),Mn(i),null;case 19:if(bh(i),l=i.memoizedState,l===null)return Mn(i),null;if(f=(i.flags&128)!==0,h=l.rendering,h===null)if(f)hl(l,!1);else{if(Un!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(h=Bc(t),h!==null){for(i.flags|=128,hl(l,!1),t=h.updateQueue,i.updateQueue=t,eu(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)Eg(s,t),s=s.sibling;return ol(i,ti.current&1|2),Kt&&Ya(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&Qe()>hu&&(i.flags|=128,f=!0,hl(l,!1),i.lanes=4194304)}else{if(!f)if(t=Bc(h),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,eu(i,t),hl(l,!0),l.tail===null&&l.tailMode!=="collapsed"&&l.tailMode!=="visible"&&!h.alternate&&!Kt)return Mn(i),null}else 2*Qe()-l.renderingStartTime>hu&&s!==536870912&&(i.flags|=128,f=!0,hl(l,!1),i.lanes=4194304);l.isBackwards?(h.sibling=i.child,i.child=h):(t=l.last,t!==null?t.sibling=h:i.child=h,l.last=h)}if(l.tail!==null){t=l.tail;e:{for(s=t;s!==null;){if(s.alternate!==null){s=!1;break e}s=s.sibling}s=!0}return l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Qe(),t.sibling=null,h=ti.current,h=f?h&1|2:h&1,l.tailMode==="visible"||l.tailMode==="collapsed"||!s||Kt?ol(i,h):(s=h,He(ei,i),He(ti,s),ci===null&&(ci=i)),Kt&&Ya(i,l.treeForkCount),t}return Mn(i),null;case 22:case 23:return Ui(i),Mh(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(Mn(i),i.subtreeFlags&6&&(i.flags|=8192)):Mn(i),s=i.updateQueue,s!==null&&eu(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&Oe(rs),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Ka(Pn),Mn(i),null;case 25:return null;case 30:return i.flags|=33554432,Mn(i),null}throw Error(r(156,i.tag))}function SE(t,i){switch(lh(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ka(Pn),nt(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return L(i),null;case 31:if(i.memoizedState!==null){if(Ui(i),i.alternate===null)throw Error(r(340));es()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(Ui(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(r(340));es()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return bh(i),t=i.flags,t&65536?(i.flags=t&-65537|128,t=i.memoizedState,t!==null&&(t.rendering=null,t.tail=null),i.flags|=4,i):null;case 4:return nt(),null;case 10:return Ka(i.type),null;case 22:case 23:return Ui(i),Mh(),t!==null&&Oe(rs),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Ka(Pn),null;case 25:return null;default:return null}}function jv(t,i){switch(lh(i),i.tag){case 3:Ka(Pn),nt();break;case 26:case 27:case 5:L(i);break;case 4:nt();break;case 31:i.memoizedState!==null&&Ui(i);break;case 13:Ui(i);break;case 19:bh(i);break;case 10:Ka(i.type);break;case 22:case 23:Ui(i),Mh(),t!==null&&Oe(rs);break;case 24:Ka(Pn)}}function dl(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var h=s.create,S=s.inst;l=h(),S.destroy=l}s=s.next}while(s!==f)}}catch(N){hn(i,i.return,N)}}function Ar(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var h=f.next;l=h;do{if((l.tag&t)===t){var S=l.inst,N=S.destroy;if(N!==void 0){S.destroy=void 0,f=i;var Y=s,ge=N;try{ge()}catch(Re){hn(f,Y,Re)}}}l=l.next}while(l!==h)}}catch(Re){hn(i,i.return,Re)}}function Jv(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{Gg(i,s)}catch(l){hn(t,t.return,l)}}}function $v(t,i,s){s.props=us(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){hn(t,i,l)}}function Sa(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:var f=t.stateNode,h=Xa(t.memoizedProps,f);(f.ref===null||f.ref.name!==h)&&(f.ref=s_(h)),l=f.ref;break;case 7:if(t.stateNode===null){var S=new zi(t);g(t.child,!1,f2,S,void 0,void 0),t.stateNode=S}l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(N){hn(t,i,N)}}function ni(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){hn(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){hn(t,i,f)}else s.current=null}function tu(t,i){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&i!==null)for(var s=0;s<i.length;s++)h_(t.stateNode,i[s])}function ex(t){for(var i=t.return;i!==null&&(td(i)&&h_(t.stateNode,i.stateNode),!ed(i));)i=i.return}function pl(t){for(var i=t.return;i!==null&&(td(i)&&h2(t.stateNode,i.stateNode),!ed(i));)i=i.return}function ed(t){return t.tag===5||t.tag===3||t.tag===27}function td(t){return t&&t.tag===7&&t.stateNode!==null}function nd(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){hn(t,t.return,f)}}function id(t,i,s){try{var l=t.stateNode;YE(l,t.type,s,i),l[k]=i}catch(f){hn(t,t.return,f)}}function tx(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ur(t.type)||t.tag===4}function ad(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||tx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ur(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rd(t,i,s,l){var f=t.tag;if(f===5||f===6)f=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(f,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(f),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=xa)),tu(t,l),Zt=!0;else if(f!==4&&(f===27&&(tu(t,l),l=null,Ur(t.type)&&(s=t.stateNode,i=null)),t=t.child,t!==null))for(rd(t,i,s,l),t=t.sibling;t!==null;)rd(t,i,s,l),t=t.sibling}function nu(t,i,s,l){var f=t.tag;if(f===5||f===6)f=t.stateNode,i?s.insertBefore(f,i):s.appendChild(f),tu(t,l),Zt=!0;else if(f!==4&&(f===27&&(tu(t,l),l=null,Ur(t.type)&&(s=t.stateNode)),t=t.child,t!==null))for(nu(t,i,s,l),t=t.sibling;t!==null;)nu(t,i,s,l),t=t.sibling}function nx(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);ii(i,l,s),i[A]=t,i[k]=s}catch(h){hn(t,t.return,h)}}var iu=!1,Oi=null;function ix(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(iu=!0)}var Ma=null;function ax(){var t=Ma;return Ma=null,t}var bi=0;function Ws(t,i,s,l,f){return bi=0,rx(t.child,i,s,l,f)}function rx(t,i,s,l,f){for(var h=!1;t!==null;){if(t.tag===5){var S=t.stateNode;if(l!==null){var N=Vd(S);l.push(N),N.view&&(h=!0)}else h||Vd(S).view&&(h=!0);iu=!0,a_(S,bi===0?i:i+"_"+bi,s),bi++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&f||rx(t.child,i,s,l,f)&&(h=!0));t=t.sibling}return h}function Ea(t,i){for(;t!==null;)t.tag===5?r_(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&i||Ea(t.child,i)),t=t.sibling}function au(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(au(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var i=t.memoizedProps;if(i.name==null||i.name==="auto")throw Error(r(544));var s=i.name;i=qa(i.default,i.share),i!=="none"&&(Ws(t,s,i,null,!1)||Ea(t.child,!1))}t=t.sibling}}function sd(t,i){if(t.tag===30){var s=t.stateNode,l=t.memoizedProps,f=Xa(l,s),h=qa(l.default,s.paired?l.share:l.enter);h!=="none"?Ws(t,f,h,null,!1)?(au(t),s.paired||i||eo(t,l.onEnter)):Ea(t.child,!1):au(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)sd(t,i),t=t.sibling;else au(t)}function od(t){if(Oi!==null&&Oi.size!==0){var i=Oi;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var s=t.memoizedProps,l=s.name;if(l!=null&&l!=="auto"){var f=i.get(l);if(f!==void 0){var h=qa(s.default,s.share);if(h!=="none"&&(Ws(t,l,h,null,!1)?(h=t.stateNode,f.paired=h,h.paired=f,eo(t,s.onShare)):Ea(t.child,!1)),i.delete(l),i.size===0)break}}}od(t)}t=t.sibling}}}function ld(t){if(t.tag===30){var i=t.memoizedProps,s=Xa(i,t.stateNode),l=Oi!==null?Oi.get(s):void 0,f=qa(i.default,l!==void 0?i.share:i.exit);f!=="none"&&(Ws(t,s,f,null,!1)?l!==void 0?(f=t.stateNode,l.paired=f,f.paired=l,Oi.delete(s),eo(t,i.onShare)):eo(t,i.onExit):Ea(t.child,!1)),Oi!==null&&od(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)ld(t),t=t.sibling;else Oi!==null&&od(t)}function sx(t){for(t=t.child;t!==null;){if(t.tag===30){var i=t.memoizedProps,s=Xa(i,t.stateNode);i=qa(i.default,i.update),t.flags&=-5,i!=="none"&&Ws(t,s,i,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&sx(t);t=t.sibling}}function cd(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var i=t.stateNode;i.paired!==null&&(i.paired=null,Ea(t.child,!1))}cd(t)}t=t.sibling}}function ru(t){if(t.tag===30)t.stateNode.paired=null,Ea(t.child,!1),cd(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)ru(t),t=t.sibling;else cd(t)}function ox(t){for(t=t.child;t!==null;)t.tag===30?Ea(t.child,!1):(t.subtreeFlags&33554432)!==0&&ox(t),t=t.sibling}function ud(t,i,s,l,f,h,S){for(var N=!1;i!==null;){if(i.tag===5){var Y=i.stateNode;if(h!==null&&bi<h.length){var ge=h[bi],Re=Vd(Y);(ge.view||Re.view)&&(N=!0);var Xe;if(Xe=(t.flags&4)===0)if(Re.clip)Xe=!0;else{Xe=ge.rect;var de=Re.rect;Xe=Xe.y!==de.y||Xe.x!==de.x||Xe.height!==de.height||Xe.width!==de.width}Xe&&(t.flags|=4),Re.abs?Re=!ge.abs:(ge=ge.rect,Re=Re.rect,Re=ge.height!==Re.height||ge.width!==Re.width),Re&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&a_(Y,bi===0?s:s+"_"+bi,f),N&&(t.flags&4)!==0||(Ma===null&&(Ma=[]),Ma.push(Y,bi===0?l:l+"_"+bi,i.memoizedProps)),bi++}else(i.tag!==22||i.memoizedState===null)&&(i.tag===30&&S?t.flags|=i.flags&32:ud(t,i.child,s,l,f,h,S)&&(N=!0));i=i.sibling}return N}function lx(t,i){for(t=t.child;t!==null;){if(t.tag===30){var s=t.memoizedProps,l=t.stateNode,f=Xa(s,l),h=qa(s.default,s.update),S;S=t.memoizedState,t.memoizedState=null,l=t;var N=t.child;bi=0,f=ud(l,N,f,f,h,S,!1),(t.flags&4)!==0&&f&&eo(t,s.onUpdate)}else(t.subtreeFlags&33554432)!==0&&lx(t);t=t.sibling}}var Kn=!1,un=!1,ba=!1,fd=!1,cx=typeof WeakSet=="function"?WeakSet:Set,Qn=null,Ta=!1,ml=!1,su=!1,hd=!1;function ME(t,i,s){if(t=t.containerInfo,Id=uo,t=dg(t),Jf(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else e:{l=(l=t.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var h=f.anchorOffset,S=f.focusNode;f=f.focusOffset;try{l.nodeType,S.nodeType}catch{l=null;break e}var N=0,Y=-1,ge=-1,Re=0,Xe=0,de=t,be=null;t:for(;;){for(var xt;de!==l||h!==0&&de.nodeType!==3||(Y=N+h),de!==S||f!==0&&de.nodeType!==3||(ge=N+f),de.nodeType===3&&(N+=de.nodeValue.length),(xt=de.firstChild)!==null;)be=de,de=xt;for(;;){if(de===t)break t;if(be===l&&++Re===h&&(Y=N),be===S&&++Xe===f&&(ge=N),(xt=de.nextSibling)!==null)break;de=be,be=de.parentNode}de=xt}l=Y===-1||ge===-1?null:{start:Y,end:ge}}else l=null}l=l||{start:0,end:0}}else l=null;for(zd={focusedElem:t,selectionRange:l},uo=!1,s=(s&335544064)===s,Qn=i,i=s?9270:1024;Qn!==null;){if(t=Qn,s&&(l=t.deletions,l!==null))for(h=0;h<l.length;h++)s&&ld(l[h]);if(t.alternate===null&&(t.flags&2)!==0)s&&ix(t),ou(s);else{if(t.tag===22){if(l=t.alternate,t.memoizedState!==null){l!==null&&l.memoizedState===null&&s&&ld(l),ou(s);continue}else if(l!==null&&l.memoizedState!==null){s&&ix(t),ou(s);continue}}l=t.child,(t.subtreeFlags&i)!==0&&l!==null?(l.return=t,Qn=l):(s&&sx(t),ou(s))}}Oi=null}function ou(t){for(;Qn!==null;){var i=Qn,s=t,l=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 15:break;case 1:if((f&1024)!==0&&l!==null){s=void 0,f=l.memoizedProps,l=l.memoizedState;var h=i.stateNode;try{var S=us(i.type,f);s=h.getSnapshotBeforeUpdate(S,l),h.__reactInternalSnapshotBeforeUpdate=s}catch(N){hn(i,i.return,N)}}break;case 3:if((f&1024)!==0){if(l=i.stateNode.containerInfo,s=l.nodeType,s===9)qd(l);else if(s===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":qd(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:s&&l!==null&&(s=Xa(l.memoizedProps,l.stateNode),f=i.memoizedProps,f=qa(f.default,f.update),f!=="none"&&Ws(l,s,f,l.memoizedState=[],!0));break;default:if((f&1024)!==0)throw Error(r(163))}if(l=i.sibling,l!==null){l.return=i.return,Qn=l;break}Qn=i.return}}function ux(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Aa(t,s),l&4&&dl(5,s);break;case 1:if(Aa(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(S){hn(s,s.return,S)}else{var f=us(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(S){hn(s,s.return,S)}}l&64&&Jv(s),l&512&&Sa(s,s.return);break;case 3:if(Aa(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Gg(t,i)}catch(S){hn(s,s.return,S)}}break;case 27:i===null&&l&4&&nx(s);case 26:case 5:Aa(t,s),i===null&&l&4&&nd(s),l&512&&Sa(s,s.return);break;case 12:Aa(t,s);break;case 31:Aa(t,s),l&4&&px(t,s);break;case 13:Aa(t,s),l&4&&mx(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=OE.bind(null,s),m2(t,s))));break;case 22:if(l=s.memoizedState!==null||Kn,!l){var h=i!==null&&i.memoizedState!==null||un;i=Kn,f=un,Kn=l,(un=h)&&!f?(l=2,(s.subtreeFlags&8772)!==0&&(l|=1),sa(t,s,l)):Aa(t,s),Kn=i,un=f}break;case 30:Aa(t,s),l&512&&Sa(s,s.return);break;case 7:l&512&&Sa(s,s.return);default:Aa(t,s)}}function dd(t,i){for(t=t.child;t!==null;)fx(t,i),t=t.sibling}function fx(t,i){switch(t.tag){case 5:case 26:try{var s=t.stateNode;if(i){var l=s.style;typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"}else{var f=t.stateNode,h=t.memoizedProps.style,S=h!=null&&h.hasOwnProperty("display")?h.display:null;f.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(Y){hn(t,t.return,Y)}pd(t,i);break;case 6:try{t.stateNode.nodeValue=i?"":t.memoizedProps,Zt=!0}catch(Y){hn(t,t.return,Y)}break;case 18:try{var N=t.stateNode;i?i_(N,!0):i_(t.stateNode,!1)}catch(Y){hn(t,t.return,Y)}break;case 22:case 23:t.memoizedState===null&&dd(t,i);break;default:dd(t,i)}}function pd(t,i){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){e:{var s=t,l=i;switch(s.tag){case 4:fx(s,l);break e;case 22:s.memoizedState===null&&pd(s,l);break e;default:pd(s,l)}}t=t.sibling}}function hx(t){var i=t.alternate;i!==null&&(t.alternate=null,hx(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&it(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var bn=null,Ti=!1;function aa(t,i,s){for(s=s.child;s!==null;)dx(t,i,s),s=s.sibling}function dx(t,i,s){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(St,s)}catch{}switch(s.tag){case 26:un||ni(s,i),aa(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&!un&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:un||ni(s,i),pl(s);var l=bn,f=Ti;Ur(s.type)&&(bn=s.stateNode,Ti=!1),aa(t,i,s),v_(s.stateNode,s.type,s.memoizedProps),bn=l,Ti=f;break;case 5:un||ni(s,i),pl(s);case 6:if(s.tag===6&&pl(s),l=bn,f=Ti,bn=null,aa(t,i,s),bn=l,Ti=f,bn!==null)if(Ti)try{(bn.nodeType===9?bn.body:bn.nodeName==="HTML"?bn.ownerDocument.body:bn).removeChild(s.stateNode),Zt=!0}catch(h){hn(s,i,h)}else try{bn.removeChild(s.stateNode),Zt=!0}catch(h){hn(s,i,h)}break;case 18:bn!==null&&(Ti?(t=bn,n_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),fo(t)):n_(bn,s.stateNode));break;case 4:l=bn,f=Ti,bn=s.stateNode.containerInfo,Ti=!0,aa(t,i,s),bn=l,Ti=f;break;case 0:case 11:case 14:case 15:Ar(2,s,i),un||Ar(4,s,i),aa(t,i,s);break;case 1:un||(ni(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&$v(s,i,l)),aa(t,i,s);break;case 21:aa(t,i,s);break;case 22:un=(l=un)||s.memoizedState!==null,aa(t,i,s),un=l;break;case 30:ni(s,i),aa(t,i,s);break;case 7:un||ni(s,i),aa(t,i,s);break;default:aa(t,i,s)}}function px(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{fo(t)}catch(s){hn(i,i.return,s)}}}function mx(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{fo(t)}catch(s){hn(i,i.return,s)}}function EE(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new cx),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new cx),i;default:throw Error(r(435,t.tag))}}function lu(t,i){var s=EE(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=PE.bind(null,t,l);l.then(f,f)}})}function gi(t,i,s){var l=i.deletions;if(l!==null)for(var f=0;f<l.length;f++){var h=l[f],S=t,N=i,Y=N;e:for(;Y!==null;){switch(Y.tag){case 27:if(Ur(Y.type)){bn=Y.stateNode,Ti=!1;break e}break;case 5:bn=Y.stateNode,Ti=!1;break e;case 3:case 4:bn=Y.stateNode.containerInfo,Ti=!0;break e}Y=Y.return}if(bn===null)throw Error(r(160));dx(S,N,h),bn=null,Ti=!1,S=h.alternate,S!==null&&(S.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)gx(i,t,s),i=i.sibling}var ra=null;function gx(t,i,s){var l=t.alternate,f=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(f&4&&(l=t.updateQueue,l=l!==null?l.events:null,l!==null))for(var h=0;h<l.length;h++){var S=l[h];S.ref.impl=S.nextImpl}gi(i,t,s),vi(t),f&4&&(Ar(3,t,t.return),dl(3,t),Ar(5,t,t.return));break;case 1:gi(i,t,s),vi(t),f&512&&(un||l===null||ni(l,l.return)),f&64&&Kn&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?i:s.concat(i))));break;case 26:if(h=ra,gi(i,t,s),vi(t),f&512&&(un||l===null||ni(l,l.return)),f&4)if(f=l!==null?l.memoizedState:null,s=t.memoizedState,l===null)if(s===null)if(t.stateNode===null)if(Kn)t.stateNode=$x(t.type,t.memoizedProps,i.containerInfo,t);else{e:{i=t.type,s=t.memoizedProps,f=h.ownerDocument||h;t:switch(i){case"title":l=f.getElementsByTagName("title")[0],(!l||l[Ze]||l[A]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=f.createElement(i),f.head.insertBefore(l,f.querySelector("head > title"))),ii(l,i,s),l[A]=t,bt(l),i=l;break e;case"link":if(h=E_("link","href",f).get(i+(s.href||""))){for(S=0;S<h.length;S++)if(l=h[S],l.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&l.getAttribute("rel")===(s.rel==null?null:s.rel)&&l.getAttribute("title")===(s.title==null?null:s.title)&&l.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){h.splice(S,1);break t}}l=f.createElement(i),ii(l,i,s),f.head.appendChild(l);break;case"meta":if(h=E_("meta","content",f).get(i+(s.content||""))){for(S=0;S<h.length;S++)if(l=h[S],l.getAttribute("content")===(s.content==null?null:""+s.content)&&l.getAttribute("name")===(s.name==null?null:s.name)&&l.getAttribute("property")===(s.property==null?null:s.property)&&l.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&l.getAttribute("charset")===(s.charSet==null?null:s.charSet)){h.splice(S,1);break t}}l=f.createElement(i),ii(l,i,s),f.head.appendChild(l);break;default:throw Error(r(468,i))}l[A]=t,bt(l),i=l}t.stateNode=i}else Kn||Jd(h,t.type,t.stateNode);else t.stateNode=M_(h,s,t.memoizedProps);else f!==s?(f===null?(i=l.stateNode,i===null||un||i.parentNode.removeChild(i)):f.count--,s===null?Kn||Jd(h,t.type,t.stateNode):M_(h,s,t.memoizedProps)):s===null&&t.stateNode!==null&&id(t,t.memoizedProps,l.memoizedProps);break;case 27:gi(i,t,s),vi(t),f&512&&(un||l===null||ni(l,l.return)),l!==null&&f&4&&id(t,t.memoizedProps,l.memoizedProps);break;case 5:if(h=ba,ba=!1,gi(i,t,s),ba=h,vi(t),f&512&&(un||l===null||ni(l,l.return)),t.flags&32){i=t.stateNode;try{Rs(i,""),Zt=!0}catch(Re){hn(t,t.return,Re)}}f&4&&t.stateNode!=null&&(i=t.memoizedProps,id(t,i,l!==null?l.memoizedProps:i)),f&1024&&(fd=!0);break;case 6:if(gi(i,t,s),vi(t),f&4){if(t.stateNode===null)throw Error(r(162));i=t.memoizedProps,s=t.stateNode;try{s.nodeValue=i,Zt=!0}catch(Re){hn(t,t.return,Re)}}break;case 3:if(Zt=!1,Eu=null,h=ra,ra=bl(i.containerInfo),gi(i,t,s),ra=h,vi(t),f&4&&l!==null&&l.memoizedState.isDehydrated)try{fo(i.containerInfo)}catch(Re){hn(t,t.return,Re)}fd&&(fd=!1,vx(t)),Zt=!1;break;case 4:f=ba,ba=Kn,l=ln(),h=ra,ra=bl(t.stateNode.containerInfo),gi(i,t,s),vi(t),ra=h,Zt&&ml&&(su=!0),Zt=l,ba=f;break;case 12:gi(i,t,s),vi(t);break;case 31:gi(i,t,s),vi(t),f&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,lu(t,i)));break;case 13:gi(i,t,s),vi(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(fu=Qe()),f&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,lu(t,i)));break;case 22:h=t.memoizedState!==null,S=l!==null&&l.memoizedState!==null;var N=Kn,Y=un,ge=ba;Kn=N||h,ba=ge||h,un=Y||S,gi(i,t,s),un=Y,ba=ge,Kn=N,vi(t),f&8192&&(i=t.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,!h||l===null||S||Kn||un||(i=S||un,s=Kn,l=un,Kn=h||Kn,un=i,wr(t,2),Kn=s,un=l),!h&&ba||dd(t,h)),f&4&&(i=t.updateQueue,i!==null&&(s=i.retryQueue,s!==null&&(i.retryQueue=null,lu(t,s))));break;case 19:gi(i,t,s),vi(t),f&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,lu(t,i)));break;case 30:f&512&&(un||l===null||ni(l,l.return)),f=ln(),h=ml,S=(s&335544064)===s,N=t.memoizedProps,ml=S&&qa(N.default,N.update)!=="none",gi(i,t,s),vi(t),S&&l!==null&&Zt&&(t.flags|=4),ml=h,Zt=f;break;case 21:break;case 7:f&512&&(un||l===null||ni(l,l.return)),l&&l.stateNode!==null&&(l.stateNode._fragmentFiber=t);default:gi(i,t,s),vi(t)}}function vi(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(tx(l)){s=l;break}l=l.return}l=null;for(var f=t.return;f!==null;){if(td(f)){var h=f.stateNode;l===null?l=[h]:l.push(h)}if(ed(f))break;f=f.return}var S=l;if(s==null)throw Error(r(160));switch(s.tag){case 27:var N=s.stateNode,Y=ad(t);nu(t,Y,N,S);break;case 5:var ge=s.stateNode;s.flags&32&&(Rs(ge,""),s.flags&=-33);var Re=ad(t);nu(t,Re,ge,S);break;case 3:case 4:var Xe=s.stateNode.containerInfo,de=ad(t);rd(t,de,Xe,S);break;default:throw Error(r(161))}}catch(be){hn(t,t.return,be)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function vx(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;vx(i),i.tag===5&&i.flags&1024&&(i=i.stateNode,uo=!0,i.reset(),uo=!1),t=t.sibling}}function Ys(t,i){if(i.subtreeFlags&9270)for(i=i.child;i!==null;)xx(i,t),i=i.sibling;else lx(i)}function xx(t,i){var s=t.alternate;if(s===null)sd(t,!1);else switch(t.tag){case 3:if(hd=Ta=!1,ax(),Ys(i,t),!Ta&&!su){if(t=Ma,t!==null)for(var l=0;l<t.length;l+=3){s=t[l];var f=t[l+1];r_(s,t[l+2]),s=s.ownerDocument.documentElement,s!==null&&s.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+f+")"})}t=i.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),hd=!0}Ma=null;break;case 5:Ys(i,t);break;case 4:l=Ta,Ta=!1,Ys(i,t),Ta&&(su=!0),Ta=l;break;case 22:t.memoizedState===null&&(s.memoizedState!==null?sd(t,!1):Ys(i,t));break;case 30:l=Ta,f=ax(),Ta=!1,Ys(i,t),Ta&&(t.flags|=4);var h=t.memoizedProps,S=t.stateNode;i=Xa(h,S),S=Xa(s.memoizedProps,S);var N=qa(h.default,h.update);N==="none"?i=!1:(h=s.memoizedState,s.memoizedState=null,s=t.child,bi=0,i=ud(t,s,i,S,N,h,!0),bi!==(h===null?0:h.length)&&(t.flags|=32)),(t.flags&4)!==0&&i?(eo(t,t.memoizedProps.onUpdate),Ma=f):f!==null&&(f.push.apply(f,Ma),Ma=f),Ta=(t.flags&32)!==0?!0:l;break;default:Ys(i,t)}}function Aa(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)ux(t,i.alternate,i),i=i.sibling}function wr(t,i){for(t=t.child;t!==null;){var s=t,l=i;switch(s.tag){case 0:case 11:case 14:case 15:Ar(4,s,s.return),wr(s,l);break;case 1:ni(s,s.return);var f=s.stateNode;typeof f.componentWillUnmount=="function"&&$v(s,s.return,f),wr(s,l);break;case 27:(l&2)!==0&&v_(s.stateNode,s.type,s.memoizedProps);case 5:ni(s,s.return),s.tag!==5&&s.tag!==27||pl(s),wr(s,l);break;case 6:pl(s);break;case 26:ni(s,s.return),f=s.stateNode,s.memoizedState!==null||f===null||un||f.parentNode.removeChild(f),wr(s,l);break;case 22:s.memoizedState===null&&wr(s,l);break;case 30:ni(s,s.return),wr(s,l);break;case 7:ni(s,s.return);default:wr(s,l)}t=t.sibling}}function sa(t,i,s){for(s=(i.subtreeFlags&8772)!==0?s:s&-2,i=i.child;i!==null;){var l=i.alternate,f=t,h=i,S=h.flags,N=(s&1)!==0;switch(h.tag){case 0:case 11:case 15:sa(f,h,s),dl(4,h);break;case 1:if(sa(f,h,s),l=h,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(Re){hn(l,l.return,Re)}if(l=h,f=l.updateQueue,f!==null){var Y=l.stateNode;try{var ge=f.shared.hiddenCallbacks;if(ge!==null)for(f.shared.hiddenCallbacks=null,f=0;f<ge.length;f++)Hg(ge[f],Y)}catch(Re){hn(l,l.return,Re)}}N&&S&64&&Jv(h),Sa(h,h.return);break;case 27:(s&2)!==0&&nx(h);case 5:h.tag!==5&&h.tag!==27||ex(h),sa(f,h,s),N&&l===null&&S&4&&nd(h),Sa(h,h.return);break;case 6:ex(h);break;case 26:Y=h.stateNode,h.memoizedState!==null||Y===null||Kn||Jd(bl(Y.ownerDocument),h.type,Y),sa(f,h,s),N&&l===null&&S&4&&nd(h),Sa(h,h.return);break;case 12:sa(f,h,s);break;case 31:sa(f,h,s),N&&S&4&&px(f,h);break;case 13:sa(f,h,s),N&&S&4&&mx(f,h);break;case 22:h.memoizedState===null&&sa(f,h,s),Sa(h,h.return);break;case 30:sa(f,h,s),Sa(h,h.return);break;case 7:Sa(h,h.return);default:sa(f,h,s)}i=i.sibling}}function md(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&el(s))}function gd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&el(t))}function Ki(t,i,s,l){var f=(s&335544064)===s;if(i.subtreeFlags&(f?10262:10256))for(i=i.child;i!==null;)_x(t,i,s,l),i=i.sibling;else f&&ox(i)}function _x(t,i,s,l){var f=(s&335544064)===s;f&&i.alternate===null&&i.return!==null&&i.return.alternate!==null&&ru(i);var h=i.flags;switch(i.tag){case 0:case 11:case 15:Ki(t,i,s,l),h&2048&&dl(9,i);break;case 1:Ki(t,i,s,l);break;case 3:Ki(t,i,s,l),f&&hd&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),h&2048&&(h=null,i.alternate!==null&&(h=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==h&&(i.refCount++,h!=null&&el(h)));break;case 12:if(h&2048){Ki(t,i,s,l),h=i.stateNode;try{var S=i.memoizedProps,N=S.id,Y=S.onPostCommit;typeof Y=="function"&&Y(N,i.alternate===null?"mount":"update",h.passiveEffectDuration,-0)}catch(ge){hn(i,i.return,ge)}}else Ki(t,i,s,l);break;case 31:Ki(t,i,s,l);break;case 13:Ki(t,i,s,l);break;case 23:break;case 22:S=i.stateNode,N=i.alternate,i.memoizedState!==null?(f&&N!==null&&N.memoizedState===null&&ru(N),S._visibility&2?Ki(t,i,s,l):gl(t,i)):(f&&N!==null&&N.memoizedState!==null&&ru(i),S._visibility&2?Ki(t,i,s,l):(S._visibility|=2,Zs(t,i,s,l,(i.subtreeFlags&10256)!==0||!1))),h&2048&&md(N,i);break;case 24:Ki(t,i,s,l),h&2048&&gd(i.alternate,i);break;case 30:f&&(h=i.alternate,h!==null&&(Ea(h.child,!0),Ea(i.child,!0))),Ki(t,i,s,l);break;default:Ki(t,i,s,l)}}function Zs(t,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var h=t,S=i,N=s,Y=l,ge=S.flags;switch(S.tag){case 0:case 11:case 15:Zs(h,S,N,Y,f),dl(8,S);break;case 23:break;case 22:var Re=S.stateNode;S.memoizedState!==null?Re._visibility&2?Zs(h,S,N,Y,f):gl(h,S):(Re._visibility|=2,Zs(h,S,N,Y,f)),f&&ge&2048&&md(S.alternate,S);break;case 24:Zs(h,S,N,Y,f),f&&ge&2048&&gd(S.alternate,S);break;default:Zs(h,S,N,Y,f)}i=i.sibling}}function gl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:gl(s,l),f&2048&&md(l.alternate,l);break;case 24:gl(s,l),f&2048&&gd(l.alternate,l);break;default:gl(s,l)}i=i.sibling}}var fs=8192;function hs(t,i,s){if(t.subtreeFlags&fs)for(t=t.child;t!==null;)yx(t,i,s),t=t.sibling}function yx(t,i,s){switch(t.tag){case 26:hs(t,i,s),t.flags&fs&&(t.memoizedState!==null?C2(s,ra,t.memoizedState,t.memoizedProps):(t=t.stateNode,(i&335544128)===i&&w_(s,t)));break;case 5:hs(t,i,s),t.flags&fs&&(t=t.stateNode,(i&335544128)===i&&w_(s,t));break;case 3:case 4:var l=ra;ra=bl(t.stateNode.containerInfo),hs(t,i,s),ra=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=fs,fs=16777216,hs(t,i,s),fs=l):hs(t,i,s));break;case 30:if((t.flags&fs)!==0&&(l=t.memoizedProps.name,l!=null&&l!=="auto")){var f=t.stateNode;f.paired=null,Oi===null&&(Oi=new Map),Oi.set(l,f)}hs(t,i,s);break;default:hs(t,i,s)}}function Sx(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function vl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Qn=l,Ex(l,t)}Sx(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Mx(t),t=t.sibling}function Mx(t){switch(t.tag){case 0:case 11:case 15:vl(t),t.flags&2048&&Ar(9,t,t.return);break;case 3:vl(t);break;case 12:vl(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,cu(t)):vl(t);break;default:vl(t)}}function cu(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Qn=l,Ex(l,t)}Sx(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Ar(8,i,i.return),cu(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,cu(i));break;default:cu(i)}t=t.sibling}}function Ex(t,i){for(;Qn!==null;){var s=Qn;switch(s.tag){case 0:case 11:case 15:Ar(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:el(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Qn=l;else e:for(s=t;Qn!==null;){l=Qn;var f=l.sibling,h=l.return;if(hx(l),l===s){Qn=null;break e}if(f!==null){f.return=h,Qn=f;break e}Qn=h}}}var bE={getCacheForType:function(t){var i=$n(Pn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return $n(Pn).controller.signal}},TE=typeof WeakMap=="function"?WeakMap:Map,cn=0,_n=null,Jt=null,tn=0,fn=0,Pi=null,Rr=!1,Ks=!1,vd=!1,er=0,Un=0,Cr=0,ds=0,uu=0,Fi=0,Qs=0,xl=null,Ai=null,xd=!1,fu=0,bx=0,hu=1/0,du=null,Dr=null,wn=0,oa=null,ps=null,wa=0,_d=0,yd=null,Tx=null,js=null,Js=null,$s=null,_l=0,pu=null;function Ii(){return(cn&2)!==0&&tn!==0?tn&-tn:ye.T!==null?Dd():Ee()}function Ax(){if(Fi===0)if((tn&536870912)===0||Kt){var t=Wn;Wn<<=1,(Wn&3932160)===0&&(Wn=262144),Fi=t}else Fi=536870912;return t=ei.current,t!==null&&(t.flags|=32),Fi}function eo(t,i){if(i!=null){var s=t.stateNode,l=s.ref;l===null&&(l=s.ref=s_(Xa(t.memoizedProps,s))),Js===null&&(Js=[]),Js.push(i.bind(null,l))}}function wi(t,i,s){(t===_n&&(fn===2||fn===9)||t.cancelPendingCommit!==null)&&(to(t,0),Nr(t,tn,Fi,!1)),Pe(t,s),((cn&2)===0||t!==_n)&&(t===_n&&((cn&2)===0&&(ds|=s),Un===4&&Nr(t,tn,Fi,!1)),Ra(t))}function wx(t,i,s){if((cn&6)!==0)throw Error(r(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Ht(t,i),f=l?RE(t,i):Md(t,i,!0),h=l;do{if(f===0){Ks&&!l&&Nr(t,i,0,!1);break}else{if(s=t.current.alternate,h&&!AE(s)){f=Md(t,i,!1),h=!1;continue}if(f===2){if(h=i,t.errorRecoveryDisabledLanes&h)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;e:{var N=t;f=xl;var Y=N.current.memoizedState.isDehydrated;if(Y&&(to(N,S).flags|=256),S=Md(N,S,!1),S!==2&&S!==6){if(vd&&!Y){N.errorRecoveryDisabledLanes|=h,ds|=h,f=4;break e}h=Ai,Ai=f,h!==null&&(Ai===null?Ai=h:Ai.push.apply(Ai,h))}f=S}if(h=!1,f!==2)continue}}if(f===1){to(t,0),Nr(t,i,0,!0);break}e:{switch(l=t,h=f,h){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i&&(i&62914560)!==i)break;case 6:Nr(l,i,Fi,!Rr);break e;case 2:Ai=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(f=fu+300-Qe(),10<f)){if(Nr(l,i,Fi,!Rr),Yn(l,0,!0)!==0)break e;wa=i,l.timeoutHandle=Gd(Rx.bind(null,l,s,Ai,du,xd,i,Fi,ds,Qs,Rr,h,"Throttled",-0,0),f);break e}Rx(l,s,Ai,du,xd,i,Fi,ds,Qs,Rr,h,null,-0,0)}}break}while(!0);Ra(t)}function Rx(t,i,s,l,f,h,S,N,Y,ge,Re,Xe,de,be){t.timeoutHandle=-1;var xt=i.subtreeFlags,Rt=(h&335544064)===h;if(Xe=null,(Rt||xt&8192||(xt&16785408)===16785408)&&(Xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:xa},Oi=null,yx(i,h,Xe),Rt&&(xt=Xe,Rt=t.containerInfo,Rt=(Rt.nodeType===9?Rt:Rt.ownerDocument).__reactViewTransition,Rt!=null&&(xt.count++,xt.waitingForViewTransition=!0,xt=wl.bind(xt),Rt.finished.then(xt,xt))),xt=(h&62914560)===h?fu-Qe():(h&4194048)===h?bx-Qe():0,xt=D2(Xe,xt),xt!==null)){wa=h,t.cancelPendingCommit=xt(Fx.bind(null,t,i,h,s,l,f,S,N,Y,ge,Re,Xe,null,de,be)),Nr(t,h,S,!ge);return}Fx(t,i,h,s,l,f,S,N,Y,ge,Re,Xe)}function AE(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],h=f.getSnapshot;f=f.value;try{if(!Li(h(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Nr(t,i,s,l){i=Et(t,i),i&=~uu,i&=~ds,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var h=31-Ft(f),S=1<<h;l[h]=-1,f&=~S}s!==0&&tt(t,s,i)}function mu(){return(cn&6)===0?(yl(0),!1):!0}function Sd(){if(Jt!==null){if(fn===0)var t=Jt.return;else t=Jt,Za=ts=null,Ch(t),Gs=null,il=0,t=Jt;for(;t!==null;)jv(t.alternate,t),t=t.return;Jt=null}}function to(t,i){var s=t.timeoutHandle;return s!==-1&&(t.timeoutHandle=-1,QE(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),wa=0,Sd(),_n=t,Jt=s=Wa(t.current,null),tn=i,fn=0,Pi=null,Rr=!1,Ks=Ht(t,i),vd=!1,Qs=Fi=uu=ds=Cr=Un=0,Ai=xl=null,xd=!1,er=Et(t,i),Ec(),s}function Cx(t,i){Xt=null,ye.H=Zc,i===Hs||i===Oc?(i=Fg(),fn=3):i===gh?(i=Fg(),fn=4):fn=i===Xh?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Pi=i,Jt===null&&(Un=1,Kc(t,qi(i,t.current)))}function Dx(){var t=ei.current;return t===null?!0:(tn&4194048)===tn?ci===null:(tn&62914560)===tn||(tn&536870912)!==0?t===ci:!1}function Nx(){var t=ye.H;return ye.H=Zc,t===null?Zc:t}function Lx(){var t=ye.A;return ye.A=bE,t}function gu(){Un=4,Rr||(tn&4194048)!==tn&&ei.current!==null||(Ks=!0),(Cr&134217727)===0&&(ds&134217727)===0||_n===null||Nr(_n,tn,Fi,!1)}function Md(t,i,s){var l=cn;cn|=2;var f=Nx(),h=Lx();(_n!==t||tn!==i)&&(du=null,to(t,i)),i=!1;var S=Un;e:do try{if(fn!==0&&Jt!==null){var N=Jt,Y=Pi;switch(fn){case 8:Sd(),S=6;break e;case 3:case 2:case 9:case 6:ei.current===null&&(i=!0);var ge=fn;if(fn=0,Pi=null,no(t,N,Y,ge),s&&Ks){S=0;break e}break;default:ge=fn,fn=0,Pi=null,no(t,N,Y,ge)}}wE(),S=Un;break}catch(Re){Cx(t,Re)}while(!0);return i&&t.shellSuspendCounter++,Za=ts=null,cn=l,ye.H=f,ye.A=h,Jt===null&&(_n=null,tn=0,Ec()),S}function wE(){for(;Jt!==null;)Ux(Jt)}function RE(t,i){var s=cn;cn|=2;var l=Nx(),f=Lx();_n!==t||tn!==i?(du=null,hu=Qe()+500,to(t,i)):Ks=Ht(t,i);e:do try{if(fn!==0&&Jt!==null){i=Jt;var h=Pi;t:switch(fn){case 1:fn=0,Pi=null,no(t,i,h,1);break;case 2:case 9:if(Og(h)){fn=0,Pi=null,Ox(i);break}i=function(){fn!==2&&fn!==9||_n!==t||(fn=7),Ra(t)},h.then(i,i);break e;case 3:fn=7;break e;case 4:fn=5;break e;case 7:Og(h)?(fn=0,Pi=null,Ox(i)):(fn=0,Pi=null,no(t,i,h,7));break;case 5:var S=null;switch(Jt.tag){case 26:S=Jt.memoizedState;case 5:case 27:var N=Jt;if(S?T_(S):N.stateNode.complete){fn=0,Pi=null;var Y=N.sibling;if(Y!==null)Jt=Y;else{var ge=N.return;ge!==null?(Jt=ge,vu(ge)):Jt=null}break t}}fn=0,Pi=null,no(t,i,h,5);break;case 6:fn=0,Pi=null,no(t,i,h,6);break;case 8:Sd(),Un=6;break e;default:throw Error(r(462))}}CE();break}catch(Re){Cx(t,Re)}while(!0);return Za=ts=null,ye.H=l,ye.A=f,cn=s,Jt!==null?0:(_n=null,tn=0,Ec(),Un)}function CE(){for(;Jt!==null&&!Le();)Ux(Jt)}function Ux(t){var i=Kv(t.alternate,t,er);t.memoizedProps=t.pendingProps,i===null?vu(t):Jt=i}function Ox(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=Vv(s,i,i.pendingProps,i.type,void 0,tn);break;case 11:i=Vv(s,i,i.pendingProps,i.type.render,i.ref,tn);break;case 5:Ch(i);var l=i;l===Zn&&(Kt?(Cc(l),l.tag===5&&l.stateNode!=null&&(Sn=l.stateNode)):(Cc(l),Kt=!0));default:jv(s,i),i=Jt=Eg(i,er),i=Kv(s,i,er)}t.memoizedProps=t.pendingProps,i===null?vu(t):Jt=i}function no(t,i,s,l){Za=ts=null,Ch(i),Gs=null,il=0;var f=i.return;try{if(gE(t,f,i,s,tn)){Un=1,Kc(t,qi(s,t.current)),Jt=null;return}}catch(h){if(f!==null)throw Jt=f,h;Un=1,Kc(t,qi(s,t.current)),Jt=null;return}i.flags&32768?(Kt||l===1?t=!0:Ks||(tn&536870912)!==0?t=!1:(Rr=t=!0,(l===2||l===9||l===3||l===6)&&(l=ei.current,l!==null&&l.tag===13&&(l.flags|=16384))),Px(i,t)):vu(i)}function vu(t){var i=t;do{if((i.flags&32768)!==0){Px(i,Rr);return}t=i.return;var s=yE(i.alternate,i,er);if(s!==null){Jt=s;return}if(i=i.sibling,i!==null){Jt=i;return}Jt=i=t}while(i!==null);Un===0&&(Un=5)}function Px(t,i){do{var s=SE(t.alternate,t);if(s!==null){s.flags&=32767,Jt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){Jt=t;return}Jt=t=s}while(t!==null);Un=6,Jt=null}function Fx(t,i,s,l,f,h,S,N,Y,ge,Re,Xe){t.cancelPendingCommit=null;do xu();while(wn!==0);if((cn&6)!==0)throw Error(r(327));if(i!==null){if(i===t.current)throw Error(r(177));t===_n&&(Jt=_n=null,tn=0),ps=i,oa=t,wa=s,yd=f,Tx=l,DE(t,i,s,S,N,Y,Xe)}}function DE(t,i,s,l,f,h,S){var N=i.lanes|i.childLanes;if(_d=N,N|=ih,Ve(t,s,N,l,f,h),Js=null,(s&335544064)===s?($s=aE(t),l=10262):($s=null,l=10256),(i.subtreeFlags&l)!==0||(i.flags&l)!==0?(t.callbackNode=null,t.callbackPriority=0,FE(Ge,function(){return Ad(),null})):(t.callbackNode=null,t.callbackPriority=0),iu=!1,l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=ye.T,ye.T=null,f=we.p,we.p=2,h=cn,cn|=4;try{ME(t,i,s)}finally{cn=h,we.p=f,ye.T=l}}wn=1,iu?js=n2(S,t.containerInfo,$s,Ed,bd,LE,Td,Ad,NE):(Ed(),bd(),Td())}function NE(t){if(wn!==0){var i=oa.onRecoverableError;i(t,{componentStack:null})}}function LE(){wn===3&&(wn=0,xx(ps,oa),wn=4)}function Ed(){if(wn===1){wn=0;var t=oa,i=ps,s=wa,l=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||l){l=ye.T,ye.T=null;var f=we.p;we.p=2;var h=cn;cn|=4;try{ml=su=!1,gx(i,t,s),s=zd;var S=dg(t.containerInfo),N=s.focusedElem,Y=s.selectionRange;if(S!==N&&N&&N.ownerDocument&&hg(N.ownerDocument.documentElement,N)){if(Y!==null&&Jf(N)){var ge=Y.start,Re=Y.end;if(Re===void 0&&(Re=ge),"selectionStart"in N)N.selectionStart=ge,N.selectionEnd=Math.min(Re,N.value.length);else{var Xe=N.ownerDocument||document,de=Xe&&Xe.defaultView||window;if(de.getSelection){var be=de.getSelection(),xt=N.textContent.length,Rt=Math.min(Y.start,xt),qt=Y.end===void 0?Rt:Math.min(Y.end,xt);!be.extend&&Rt>qt&&(S=qt,qt=Rt,Rt=S);var pe=fg(N,Rt),se=fg(N,qt);if(pe&&se&&(be.rangeCount!==1||be.anchorNode!==pe.node||be.anchorOffset!==pe.offset||be.focusNode!==se.node||be.focusOffset!==se.offset)){var Se=Xe.createRange();Se.setStart(pe.node,pe.offset),be.removeAllRanges(),Rt>qt?(be.addRange(Se),be.extend(se.node,se.offset)):(Se.setEnd(se.node,se.offset),be.addRange(Se))}}}}for(Xe=[],be=N;be=be.parentNode;)be.nodeType===1&&Xe.push({element:be,left:be.scrollLeft,top:be.scrollTop});for(typeof N.focus=="function"&&N.focus(),N=0;N<Xe.length;N++){var ke=Xe[N];ke.element.scrollLeft=ke.left,ke.element.scrollTop=ke.top}}uo=!!Id,zd=Id=null}finally{cn=h,we.p=f,ye.T=l}}t.current=i,wn=2}}function bd(){if(wn===2){wn=0;var t=oa,i=ps,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=ye.T,ye.T=null;var l=we.p;we.p=2;var f=cn;cn|=4;try{ux(t,i.alternate,i)}finally{cn=f,we.p=l,ye.T=s}}wn=3}}function Td(){if(wn===4||wn===3){wn=0;var t=js;js=null,Ie();var i=oa,s=ps,l=wa,f=Tx,h=(l&335544064)===l?10262:10256;if((s.subtreeFlags&h)!==0||(s.flags&h)!==0?wn=5:(wn=0,ps=oa=null,Ix(i,i.pendingLanes)),h=i.pendingLanes,h===0&&(Dr=null),wt(l),s=s.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(St,s,void 0,(s.current.flags&128)===128)}catch{}if(f!==null){s=ye.T,h=we.p,we.p=2,ye.T=null;try{for(var S=i.onRecoverableError,N=0;N<f.length;N++){var Y=f[N];S(Y.value,{componentStack:Y.stack})}}finally{ye.T=s,we.p=h}}if(f=Js,S=$s,$s=null,f!==null&&(Js=null,S===null&&(S=[]),t!==null))for(Y=0;Y<f.length;Y++)s=(0,f[Y])(S),s!==void 0&&t.finished.finally(s);(wa&3)!==0&&xu(),Ra(i),h=i.pendingLanes,(l&261930)!==0&&(h&42)!==0?i===pu?_l++:(_l=0,pu=i):(_l=0,pu=null),yl(0)}}function Ix(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,el(i)))}function xu(){return js!==null&&(js.skipTransition(),js=null),Ed(),bd(),Td(),Ad()}function Ad(){if(wn!==5)return!1;var t=oa,i=_d;_d=0;var s=wt(wa),l=ye.T,f=we.p;try{we.p=32>s?32:s,ye.T=null,s=yd,yd=null;var h=oa,S=wa;if(wn=0,ps=oa=null,wa=0,(cn&6)!==0)throw Error(r(331));var N=cn;if(cn|=4,Mx(h.current),_x(h,h.current,S,s),cn=N,yl(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(St,h)}catch{}return!0}finally{we.p=f,ye.T=l,Ix(t,i)}}function zx(t,i,s){i=qi(s,i),i=kh(t.stateNode,i,2),t=Mr(t,i,2),t!==null&&(Pe(t,2),Ra(t))}function hn(t,i,s){if(t.tag===3)zx(t,t,s);else for(;i!==null;){if(i.tag===3){zx(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Dr===null||!Dr.has(l))){t=qi(s,t),s=Ov(2),l=Mr(i,s,2),l!==null&&(Pv(s,l,i,t),Pe(l,2),Ra(l));break}}i=i.return}}function wd(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new TE;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(vd=!0,f.add(s),t=UE.bind(null,t,i,s),i.then(t,t))}function UE(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,_n===t&&(tn&s)===s&&((Un===4||Un===3&&(tn&62914560)===tn&&300>Qe()-fu)&&(cn&2)===0?to(t,0):uu|=s,Qs===tn&&(Qs=0)),Ra(t)}function Bx(t,i){i===0&&(i=An()),t=Jr(t,i),t!==null&&(Pe(t,i),Ra(t))}function OE(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),Bx(t,s)}function PE(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),Bx(t,s)}function FE(t,i){return ce(t,i)}var io=null,ao=null,Rd=!1,_u=!1,Cd=!1,Lr=0;function Ra(t){t!==ao&&t.next===null&&(ao===null?io=ao=t:ao=ao.next=t),_u=!0,Rd||(Rd=!0,zE())}function yl(t,i){if(!Cd&&_u){Cd=!0;do for(var s=!1,l=io;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var h=0;else{var S=l.suspendedLanes,N=l.pingedLanes;h=(1<<31-Ft(42|t)+1)-1,h&=f&~(S&~N),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(s=!0,kx(l,h))}else h=tn,h=Yn(l,l===_n?h:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(h&3)===0||Ht(l,h)||(s=!0,kx(l,h));l=l.next}while(s);Cd=!1}}function IE(){Hx()}function Hx(){_u=Rd=!1;var t=0;Lr!==0&&KE()&&(t=Lr);for(var i=Qe(),s=null,l=io;l!==null;){var f=l.next,h=Gx(l,i);h===0?(l.next=null,s===null?io=f:s.next=f,f===null&&(ao=s)):(s=l,(t!==0||(h&3)!==0)&&(_u=!0)),l=f}wn!==0&&wn!==5||yl(t),Lr!==0&&(Lr=0)}function Gx(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var S=31-Ft(h),N=1<<S,Y=f[S];Y===-1?((N&s)===0||(N&l)!==0)&&(f[S]=Ot(N,i)):Y<=i&&(t.expiredLanes|=N),h&=~N}if(i=_n,s=tn,s=Yn(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(fn===2||fn===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Be(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ht(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&Be(l),wt(s)){case 2:case 8:s=X;break;case 32:s=Ge;break;case 268435456:s=qe;break;default:s=Ge}return l=Vx.bind(null,t),s=ce(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&Be(l),t.callbackPriority=2,t.callbackNode=null,2}function Vx(t,i){if(wn!==0&&wn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(xu()&&t.callbackNode!==s)return null;var l=tn;return l=Yn(t,t===_n?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(wx(t,l,i),Gx(t,Qe()),t.callbackNode!=null&&t.callbackNode===s?Vx.bind(null,t):null)}function kx(t,i){if(xu())return null;wx(t,i,!0)}function zE(){jE(function(){(cn&6)!==0?ce(dt,IE):Hx()})}function Dd(){if(Lr===0){var t=as;t===0&&(t=Si,Si<<=1,(Si&261888)===0&&(Si=256)),Lr=t}return Lr}function Xx(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:mc(t)}function BE(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var h=Xx((f[k]||null).action),S=l.submitter;S&&(i=(i=S[k]||null)?Xx(i.formAction):S.getAttribute("formAction"),i!==null&&(h=i,S=null));var N=new _c("action","action",null,l,f);t.push({event:N,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Lr!==0){var Y=new FormData(f,S);zh(s,{pending:!0,data:Y,method:f.method,action:h},null,Y)}}else typeof h=="function"&&(N.preventDefault(),Y=new FormData(f,S),zh(s,{pending:!0,data:Y,method:f.method,action:h},h,Y))},currentTarget:f}]})}}for(var Nd=0;Nd<nh.length;Nd++){var Ld=nh[Nd],HE=Ld.toLowerCase(),GE=Ld[0].toUpperCase()+Ld.slice(1);ia(HE,"on"+GE)}ia(gg,"onAnimationEnd"),ia(vg,"onAnimationIteration"),ia(xg,"onAnimationStart"),ia("dblclick","onDoubleClick"),ia("focusin","onFocus"),ia("focusout","onBlur"),ia(QM,"onTransitionRun"),ia(jM,"onTransitionStart"),ia(JM,"onTransitionCancel"),ia(_g,"onTransitionEnd"),Wt("onMouseEnter",["mouseout","mouseover"]),Wt("onMouseLeave",["mouseout","mouseover"]),Wt("onPointerEnter",["pointerout","pointerover"]),Wt("onPointerLeave",["pointerout","pointerover"]),ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ut("onBeforeInput",["compositionend","keypress","textInput","paste"]),ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Sl));function qx(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var S=l.length-1;0<=S;S--){var N=l[S],Y=N.instance,ge=N.currentTarget;if(N=N.listener,Y!==h&&f.isPropagationStopped())break e;h=N,f.currentTarget=ge;try{h(f)}catch(Re){Mc(Re)}f.currentTarget=null,h=Y}else for(S=0;S<l.length;S++){if(N=l[S],Y=N.instance,ge=N.currentTarget,N=N.listener,Y!==h&&f.isPropagationStopped())break e;h=N,f.currentTarget=ge;try{h(f)}catch(Re){Mc(Re)}f.currentTarget=null,h=Y}}}}function $t(t,i){var s=i[fe];s===void 0&&(s=i[fe]=new Set);var l=t+"__bubble";s.has(l)||(Wx(i,t,2,!1),s.add(l))}function Ud(t,i,s){var l=0;i&&(l|=4),Wx(s,t,l,i)}var yu="_reactListening"+Math.random().toString(36).slice(2);function Od(t){if(!t[yu]){t[yu]=!0,Ut.forEach(function(s){s!=="selectionchange"&&(VE.has(s)||Ud(s,!1,t),Ud(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[yu]||(i[yu]=!0,Ud("selectionchange",!1,i))}}function Wx(t,i,s,l){switch(P_(i)){case 2:var f=O2;break;case 8:f=P2;break;default:f=ep}s=f.bind(null,i,s,t),f=void 0,!Vf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function Pd(t,i,s,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var N=l.stateNode.containerInfo;if(N===f)break;if(S===4)for(S=l.return;S!==null;){var Y=S.tag;if((Y===3||Y===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;N!==null;){if(S=pt(N),S===null)return;if(Y=S.tag,Y===5||Y===6||Y===26||Y===27){l=h=S;continue e}N=N.parentNode}}l=l.return}W0(function(){var ge=h,Re=Hf(s),Xe=[];e:{var de=yg.get(t);if(de!==void 0){var be=_c,xt=t;switch(t){case"keypress":if(vc(s)===0)break e;case"keydown":case"keyup":be=AM;break;case"focusin":xt="focus",be=Wf;break;case"focusout":xt="blur",be=Wf;break;case"beforeblur":case"afterblur":be=Wf;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":be=K0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":be=pM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":be=NM;break;case gg:case vg:case xg:be=vM;break;case _g:be=UM;break;case"scroll":case"scrollend":be=hM;break;case"wheel":be=PM;break;case"copy":case"cut":case"paste":be=_M;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":be=j0;break;case"submit":be=CM;break;case"toggle":case"beforetoggle":be=IM}var Rt=(i&4)!==0,qt=!Rt&&(t==="scroll"||t==="scrollend"),pe=Rt?de!==null?de+"Capture":null:de;Rt=[];for(var se=ge,Se;se!==null;){var ke=se;if(Se=ke.stateNode,ke=ke.tag,ke!==5&&ke!==26&&ke!==27||Se===null||pe===null||(ke=ko(se,pe),ke!=null&&Rt.push(Ml(se,ke,Se))),qt)break;se=se.return}0<Rt.length&&(de=new be(de,xt,null,s,Re),Xe.push({event:de,listeners:Rt}))}}if((i&7)===0){e:{if(be=t==="mouseover"||t==="pointerover",de=t==="mouseout"||t==="pointerout",be&&s!==Bf&&(xt=s.relatedTarget||s.fromElement)&&(pt(xt)||xt[re]))break e;(de||be)&&(xt=Re.window===Re?Re:(be=Re.ownerDocument)?be.defaultView||be.parentWindow:window,de?(be=s.relatedTarget||s.toElement,de=ge,be=be?pt(be):null,be!==null&&(qt=c(be),Rt=be.tag,be!==qt||Rt!==5&&Rt!==27&&Rt!==6)&&(be=null)):(de=null,be=ge),de!==be&&(Rt=K0,ke="onMouseLeave",pe="onMouseEnter",se="mouse",(t==="pointerout"||t==="pointerover")&&(Rt=j0,ke="onPointerLeave",pe="onPointerEnter",se="pointer"),qt=de==null?xt:$e(de),Se=be==null?xt:$e(be),xt=new Rt(ke,se+"leave",de,s,Re),xt.target=qt,xt.relatedTarget=Se,ke=null,pt(Re)===ge&&(Rt=new Rt(pe,se+"enter",be,s,Re),Rt.target=Se,Rt.relatedTarget=qt,ke=Rt),qt=ke,Rt=de&&be?P(de,be,kE):null,de!==null&&Yx(Xe,xt,de,Rt,!1),be!==null&&qt!==null&&Yx(Xe,qt,be,Rt,!0)))}e:{if(de=ge?$e(ge):window,be=de.nodeName&&de.nodeName.toLowerCase(),be==="select"||be==="input"&&de.type==="file")var At=rg;else if(ig(de))if(sg)At=YM;else{At=qM;var nn=XM}else be=de.nodeName,!be||be.toLowerCase()!=="input"||de.type!=="checkbox"&&de.type!=="radio"?ge&&zf(ge.elementType)&&(At=rg):At=WM;if(At&&(At=At(t,ge))){ag(Xe,At,s,Re);break e}nn&&nn(t,de,ge)}switch(nn=ge?$e(ge):window,t){case"focusin":(ig(nn)||nn.contentEditable==="true")&&(Ls=nn,$f=ge,jo=null);break;case"focusout":jo=$f=Ls=null;break;case"mousedown":eh=!0;break;case"contextmenu":case"mouseup":case"dragend":eh=!1,pg(Xe,s,Re);break;case"selectionchange":if(KM)break;case"keydown":case"keyup":pg(Xe,s,Re)}var Lt;if(Zf)e:{switch(t){case"compositionstart":var It="onCompositionStart";break e;case"compositionend":It="onCompositionEnd";break e;case"compositionupdate":It="onCompositionUpdate";break e}It=void 0}else Ns?tg(t,s)&&(It="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(It="onCompositionStart");It&&(J0&&s.locale!=="ko"&&(Ns||It!=="onCompositionStart"?It==="onCompositionEnd"&&Ns&&(Lt=Y0()):(dr=Re,kf="value"in dr?dr.value:dr.textContent,Ns=!0)),nn=Su(ge,It),0<nn.length&&(It=new Q0(It,t,null,s,Re),Xe.push({event:It,listeners:nn}),Lt?It.data=Lt:(Lt=ng(s),Lt!==null&&(It.data=Lt)))),(Lt=BM?HM(t,s):GM(t,s))&&(It=Su(ge,"onBeforeInput"),0<It.length&&(nn=new Q0("onBeforeInput","beforeinput",null,s,Re),Xe.push({event:nn,listeners:It}),nn.data=Lt)),BE(Xe,t,ge,s,Re)}qx(Xe,i)})}function Ml(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Su(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||h===null||(f=ko(t,s),f!=null&&l.unshift(Ml(t,f,h)),f=ko(t,i),f!=null&&l.push(Ml(t,f,h))),t.tag===3)return l;t=t.return}return[]}function kE(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Yx(t,i,s,l,f){for(var h=i._reactName,S=[];s!==null&&s!==l;){var N=s,Y=N.alternate,ge=N.stateNode;if(N=N.tag,Y!==null&&Y===l)break;N!==5&&N!==26&&N!==27||ge===null||(Y=ge,f?(ge=ko(s,h),ge!=null&&S.unshift(Ml(s,ge,Y))):f||(ge=ko(s,h),ge!=null&&S.push(Ml(s,ge,Y)))),s=s.return}S.length!==0&&t.push({event:i,listeners:S})}var XE=/\r\n?/g,qE=/\u0000|\uFFFD/g;function Zx(t){return(typeof t=="string"?t:""+t).replace(XE,`
`).replace(qE,"")}function Kx(t,i){return i=Zx(i),Zx(t)===i}function dn(t,i,s,l,f,h){switch(s){case"children":if(typeof l=="string")i==="body"||i==="textarea"&&l===""||Rs(t,l);else if(typeof l=="number"||typeof l=="bigint")i!=="body"&&Rs(t,""+l);else return;break;case"className":Ni(t,"class",l);break;case"tabIndex":Ni(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ni(t,s,l);break;case"style":X0(t,l,h);return;case"data":if(i!=="object"){Ni(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=mc(l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(s==="formAction"?(i!=="input"&&dn(t,i,"name",f.name,f,null),dn(t,i,"formEncType",f.formEncType,f,null),dn(t,i,"formMethod",f.formMethod,f,null),dn(t,i,"formTarget",f.formTarget,f,null)):(dn(t,i,"encType",f.encType,f,null),dn(t,i,"method",f.method,f,null),dn(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=mc(l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=xa);return;case"onScroll":l!=null&&$t("scroll",t);return;case"onScrollEnd":l!=null&&$t("scrollend",t);return;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));h?.__html!==s&&(t.innerHTML=s)}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=mc(l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":$t("beforetoggle",t),$t("toggle",t),yn(t,"popover",l);break;case"xlinkActuate":en(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":en(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":en(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":en(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":en(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":en(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":en(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":en(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":en(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":yn(t,"is",l);break;case"innerText":case"textContent":return;default:if(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")s=uM.get(s)||s,yn(t,s,l);else return}Zt=!0}function Fd(t,i,s,l,f,h){switch(s){case"style":X0(t,l,h);return;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));h?.__html!==s&&(t.innerHTML=s)}}break;case"children":if(typeof l=="string")Rs(t,l);else if(typeof l=="number"||typeof l=="bigint")Rs(t,""+l);else return;break;case"onScroll":l!=null&&$t("scroll",t);return;case"onScrollEnd":l!=null&&$t("scrollend",t);return;case"onClick":l!=null&&(t.onclick=xa);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!on.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),h=s.slice(2,f?s.length-7:void 0),i=t[k]||null,i=i!=null?i[s]:null,typeof i=="function"&&t.removeEventListener(h,i,f),typeof l=="function")){typeof i!="function"&&i!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(h,l,f);break e}Zt=!0,s in t?t[s]=l:l===!0?t.setAttribute(s,""):yn(t,s,l)}return}Zt=!0}function ii(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":$t("error",t),$t("load",t);var l=!1,f=!1,h;for(h in s)if(s.hasOwnProperty(h)){var S=s[h];if(S!=null)switch(h){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:dn(t,i,h,S,s,null)}}f&&dn(t,i,"srcSet",s.srcSet,s,null),l&&dn(t,i,"src",s.src,s,null);return;case"input":$t("invalid",t);var N=h=S=f=null,Y=null,ge=null;for(l in s)if(s.hasOwnProperty(l)){var Re=s[l];if(Re!=null)switch(l){case"name":f=Re;break;case"type":S=Re;break;case"checked":Y=Re;break;case"defaultChecked":ge=Re;break;case"value":h=Re;break;case"defaultValue":N=Re;break;case"children":case"dangerouslySetInnerHTML":if(Re!=null)throw Error(r(137,i));break;default:dn(t,i,l,Re,s,null)}}H0(t,h,N,Y,ge,S,f,!1);return;case"select":$t("invalid",t),l=S=h=null;for(f in s)if(s.hasOwnProperty(f)&&(N=s[f],N!=null))switch(f){case"value":h=N;break;case"defaultValue":S=N;break;case"multiple":l=N;default:dn(t,i,f,N,s,null)}i=h,s=S,t.multiple=!!l,i!=null?ws(t,!!l,i,!1):s!=null&&ws(t,!!l,s,!0);return;case"textarea":$t("invalid",t),h=f=l=null;for(S in s)if(s.hasOwnProperty(S)&&(N=s[S],N!=null))switch(S){case"value":l=N;break;case"defaultValue":f=N;break;case"children":h=N;break;case"dangerouslySetInnerHTML":if(N!=null)throw Error(r(91));break;default:dn(t,i,S,N,s,null)}V0(t,l,f,h);return;case"option":for(Y in s)s.hasOwnProperty(Y)&&(l=s[Y],l!=null)&&(Y==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":dn(t,i,Y,l,s,null));return;case"dialog":$t("beforetoggle",t),$t("toggle",t),$t("cancel",t),$t("close",t);break;case"iframe":case"object":$t("load",t);break;case"video":case"audio":for(l=0;l<Sl.length;l++)$t(Sl[l],t);break;case"image":$t("error",t),$t("load",t);break;case"details":$t("toggle",t);break;case"embed":case"source":case"link":$t("error",t),$t("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ge in s)if(s.hasOwnProperty(ge)&&(l=s[ge],l!=null))switch(ge){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:dn(t,i,ge,l,s,null)}return;default:if(zf(i)){for(Re in s)s.hasOwnProperty(Re)&&(l=s[Re],l!==void 0&&Fd(t,i,Re,l,s,void 0));return}}for(N in s)s.hasOwnProperty(N)&&(l=s[N],l!=null&&dn(t,i,N,l,s,null))}var WE={};function YE(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,h=null,S=null,N=null,Y=null,ge=null,Re=null;for(be in s){var Xe=s[be];if(s.hasOwnProperty(be)&&Xe!=null)switch(be){case"checked":break;case"value":break;case"defaultValue":Y=Xe;default:l.hasOwnProperty(be)||dn(t,i,be,null,l,Xe)}}for(var de in l){var be=l[de];if(Xe=s[de],l.hasOwnProperty(de)&&(be!=null||Xe!=null))switch(de){case"type":be!==Xe&&(Zt=!0),h=be;break;case"name":be!==Xe&&(Zt=!0),f=be;break;case"checked":be!==Xe&&(Zt=!0),ge=be;break;case"defaultChecked":be!==Xe&&(Zt=!0),Re=be;break;case"value":be!==Xe&&(Zt=!0),S=be;break;case"defaultValue":be!==Xe&&(Zt=!0),N=be;break;case"children":case"dangerouslySetInnerHTML":if(be!=null)throw Error(r(137,i));break;default:be!==Xe&&dn(t,i,de,be,l,Xe)}}Ff(t,S,N,Y,ge,Re,h,f);return;case"select":be=S=N=de=null;for(h in s)if(Y=s[h],s.hasOwnProperty(h)&&Y!=null)switch(h){case"value":break;case"multiple":be=Y;default:l.hasOwnProperty(h)||dn(t,i,h,null,l,Y)}for(f in l)if(h=l[f],Y=s[f],l.hasOwnProperty(f)&&(h!=null||Y!=null))switch(f){case"value":h!==Y&&(Zt=!0),de=h;break;case"defaultValue":h!==Y&&(Zt=!0),N=h;break;case"multiple":h!==Y&&(Zt=!0),S=h;default:h!==Y&&dn(t,i,f,h,l,Y)}i=N,s=S,l=be,de!=null?ws(t,!!s,de,!1):!!l!=!!s&&(i!=null?ws(t,!!s,i,!0):ws(t,!!s,s?[]:"",!1));return;case"textarea":be=de=null;for(N in s)if(f=s[N],s.hasOwnProperty(N)&&f!=null&&!l.hasOwnProperty(N))switch(N){case"value":break;case"children":break;default:dn(t,i,N,null,l,f)}for(S in l)if(f=l[S],h=s[S],l.hasOwnProperty(S)&&(f!=null||h!=null))switch(S){case"value":f!==h&&(Zt=!0),de=f;break;case"defaultValue":f!==h&&(Zt=!0),be=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==h&&dn(t,i,S,f,l,h)}G0(t,de,be);return;case"option":for(var xt in s)de=s[xt],s.hasOwnProperty(xt)&&de!=null&&!l.hasOwnProperty(xt)&&(xt==="selected"?t.selected=!1:dn(t,i,xt,null,l,de));for(Y in l)de=l[Y],be=s[Y],l.hasOwnProperty(Y)&&de!==be&&(de!=null||be!=null)&&(Y==="selected"?(de!==be&&(Zt=!0),t.selected=de&&typeof de!="function"&&typeof de!="symbol"):dn(t,i,Y,de,l,be));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Rt in s)de=s[Rt],s.hasOwnProperty(Rt)&&de!=null&&!l.hasOwnProperty(Rt)&&dn(t,i,Rt,null,l,de);for(ge in l)if(de=l[ge],be=s[ge],l.hasOwnProperty(ge)&&de!==be&&(de!=null||be!=null))switch(ge){case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,i));break;default:dn(t,i,ge,de,l,be)}return;default:if(zf(i)){for(var qt in s)de=s[qt],s.hasOwnProperty(qt)&&de!==void 0&&!l.hasOwnProperty(qt)&&Fd(t,i,qt,void 0,l,de);for(Re in l)de=l[Re],be=s[Re],!l.hasOwnProperty(Re)||de===be||de===void 0&&be===void 0||Fd(t,i,Re,de,l,be);return}}for(var pe in s)de=s[pe],s.hasOwnProperty(pe)&&de!=null&&!l.hasOwnProperty(pe)&&dn(t,i,pe,null,l,de);for(Xe in l)de=l[Xe],be=s[Xe],!l.hasOwnProperty(Xe)||de===be||de==null&&be==null||dn(t,i,Xe,de,l,be)}function Qx(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ZE(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],h=f.transferSize,S=f.initiatorType,N=f.duration;if(h&&N&&Qx(S)){for(S=0,N=f.responseEnd,l+=1;l<s.length;l++){var Y=s[l],ge=Y.startTime;if(ge>N)break;var Re=Y.transferSize,Xe=Y.initiatorType;Re&&Qx(Xe)&&(Y=Y.responseEnd,S+=Re*(Y<N?1:(N-ge)/(Y-ge)))}if(--l,i+=8*(h+S)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Id=null,zd=null;function El(t){return t.nodeType===9?t:t.ownerDocument}function jx(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Jx(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function $x(t,i,s,l){return s=El(s).createElement(t),s[A]=l,s[k]=i,ii(s,t,i),bt(s),s}function Bd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Hd=null;function KE(){var t=window.event;return t&&t.type==="popstate"?t===Hd?!1:(Hd=t,!0):(Hd=null,!1)}var Gd=typeof setTimeout=="function"?setTimeout:void 0,QE=typeof clearTimeout=="function"?clearTimeout:void 0,e_=typeof Promise=="function"?Promise:void 0,t_=typeof requestAnimationFrame=="function"?requestAnimationFrame:Gd,jE=typeof queueMicrotask=="function"?queueMicrotask:typeof e_<"u"?function(t){return e_.resolve(null).then(t).catch(JE)}:Gd;function JE(t){setTimeout(function(){throw t})}function Ur(t){return t==="head"}function n_(t,i){var s=i,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),fo(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")Kd(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,Kd(s);for(var h=s.firstChild;h;){var S=h.nextSibling,N=h.nodeName;h[Ze]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&h.rel.toLowerCase()==="stylesheet"||s.removeChild(h),h=S}}else s==="body"&&Kd(t.ownerDocument.body);s=f}while(s);fo(i)}function i_(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function a_(t,i,s){if(i=CSS.escape(i)!==i?"r-"+btoa(i).replace(/=/g,""):i,t.style.viewTransitionName=i,s!=null&&(t.style.viewTransitionClass=s),s=getComputedStyle(t),s.display==="inline"){if(i=t.getClientRects(),i.length===1)var l=1;else for(var f=l=0;f<i.length;f++){var h=i[f];0<h.width&&0<h.height&&l++}l===1&&(t=t.style,t.display=i.length===1?"inline-block":"block",t.marginTop="-"+s.paddingTop,t.marginBottom="-"+s.paddingBottom)}}function r_(t,i){t=t.style,i=i.style;var s=i!=null?i.hasOwnProperty("viewTransitionName")?i.viewTransitionName:i.hasOwnProperty("view-transition-name")?i["view-transition-name"]:null:null;t.viewTransitionName=s==null||typeof s=="boolean"?"":(""+s).trim(),s=i!=null?i.hasOwnProperty("viewTransitionClass")?i.viewTransitionClass:i.hasOwnProperty("view-transition-class")?i["view-transition-class"]:null:null,t.viewTransitionClass=s==null||typeof s=="boolean"?"":(""+s).trim(),t.display==="inline-block"&&(i==null?t.display=t.margin="":(s=i.display,t.display=s==null||typeof s=="boolean"?"":s,s=i.margin,s!=null?t.margin=s:(s=i.hasOwnProperty("marginTop")?i.marginTop:i["margin-top"],t.marginTop=s==null||typeof s=="boolean"?"":s,i=i.hasOwnProperty("marginBottom")?i.marginBottom:i["margin-bottom"],t.marginBottom=i==null||typeof i=="boolean"?"":i)))}function $E(t,i,s){return s=s.ownerDocument.defaultView,{rect:t,abs:i.position==="absolute"||i.position==="fixed",clip:i.clipPath!=="none"||i.overflow!=="visible"||i.filter!=="none"||i.mask!=="none"||i.mask!=="none"||i.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=s.innerHeight&&t.left<=s.innerWidth}}function Vd(t){var i=t.getBoundingClientRect(),s=getComputedStyle(t);return $E(i,s,t)}function e2(t){return t.documentElement.clientHeight}function t2(t){this.addEventListener("load",t),this.addEventListener("error",t)}function n2(t,i,s,l,f,h,S,N,Y){var ge=i.nodeType===9?i:i.ownerDocument;try{var Re=ge.startViewTransition({update:function(){var de=ge.defaultView,be=de.navigation&&de.navigation.transition,xt=ge.fonts.status;l();var Rt=[];if(xt==="loaded"&&(e2(ge),ge.fonts.status==="loading"&&Rt.push(ge.fonts.ready)),xt=Rt.length,t!==null)for(var qt=t.suspenseyImages,pe=0,se=0;se<qt.length;se++){var Se=qt[se];if(!Se.complete){var ke=Se.getBoundingClientRect();if(0<ke.bottom&&0<ke.right&&ke.top<de.innerHeight&&ke.left<de.innerWidth){if(pe+=A_(Se),pe>bu){Rt.length=xt;break}Se=new Promise(t2.bind(Se)),Rt.push(Se)}}}if(0<Rt.length)return de=Promise.race([Promise.all(Rt),new Promise(function(At){return setTimeout(At,500)})]).then(f,f),(be?Promise.allSettled([be.finished,de]):de).then(h,h);if(f(),be)return be.finished.then(h,h);h()},types:s});ge.__reactViewTransition=Re;var Xe=[];return Re.ready.then(function(){for(var de=ge.documentElement.getAnimations({subtree:!0}),be=0;be<de.length;be++){var xt=de[be],Rt=xt.effect,qt=Rt.pseudoElement;if(qt!=null&&qt.startsWith("::view-transition")){Xe.push(xt),xt=Rt.getKeyframes();for(var pe=qt=void 0,se=!0,Se=0;Se<xt.length;Se++){var ke=xt[Se],At=ke.width;if(qt===void 0)qt=At;else if(qt!==At){se=!1;break}if(At=ke.height,pe===void 0)pe=At;else if(pe!==At){se=!1;break}delete ke.width,delete ke.height,ke.transform==="none"&&delete ke.transform}se&&qt!==void 0&&pe!==void 0&&(Rt.setKeyframes(xt),se=getComputedStyle(Rt.target,Rt.pseudoElement),se.width!==qt||se.height!==pe)&&(se=xt[0],se.width=qt,se.height=pe,se=xt[xt.length-1],se.width=qt,se.height=pe,Rt.setKeyframes(xt))}}S()},function(de){ge.__reactViewTransition===Re&&(ge.__reactViewTransition=null);try{typeof de=="object"&&de!==null&&de.name==="InvalidStateError"&&(de.message==="View transition was skipped because document visibility state is hidden."||de.message==="Skipping view transition because document visibility state has become hidden."||de.message==="Skipping view transition because viewport size changed."||de.message==="Transition was aborted because of invalid state")&&(de=null),de!==null&&Y(de)}finally{l(),f(),S()}}),Re.finished.finally(function(){for(var de=0;de<Xe.length;de++)Xe[de].cancel();ge.__reactViewTransition===Re&&(ge.__reactViewTransition=null),N()}),Re}catch{return l(),f(),S(),null}}function ms(t,i){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+i+")"}ms.prototype.animate=function(t,i){return i=typeof i=="number"?{duration:i}:F({},i),i.pseudoElement=this._selector,this._scope.animate(t,i)},ms.prototype.getAnimations=function(){for(var t=this._scope,i=this._selector,s=t.getAnimations({subtree:!0}),l=[],f=0;f<s.length;f++){var h=s[f].effect;h!==null&&h.target===t&&h.pseudoElement===i&&l.push(s[f])}return l},ms.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function s_(t){return{name:t,group:new ms("group",t),imagePair:new ms("image-pair",t),old:new ms("old",t),new:new ms("new",t)}}function zi(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}zi.prototype.addEventListener=function(t,i,s){var l=null,f=null;if(!(s!=null&&typeof s!="boolean"&&(l=s.signal||null,l!==null&&l.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var h=this._eventListeners;if(l_(h,t,i,s)===-1){var S=this,N=i;s!=null&&typeof s!="boolean"&&s.once===!0&&(N=function(Y){S.removeEventListener(t,i,s),typeof i=="function"?i.call(this,Y):i.handleEvent(Y)}),l!==null&&(f=S.removeEventListener.bind(S,t,i,s),l.addEventListener("abort",f,{once:!0}),f=l.removeEventListener.bind(l,"abort",f)),l=ro(s),h.push({type:t,listener:i,optionsOrUseCapture:s,attachedListener:N,cleanup:f}),g(this._fragmentFiber.child,!1,i2,t,N,l)}this._eventListeners=h}};function i2(t,i,s,l){return y(t).addEventListener(i,s,l),!1}zi.prototype.removeEventListener=function(t,i,s){var l=this._eventListeners;if(l!==null&&(i=l_(l,t,i,s),i!==-1)){var f=l[i];s=f.attachedListener;var h=f.cleanup;f=ro(f.optionsOrUseCapture),g(this._fragmentFiber.child,!1,a2,t,s,f),l.splice(i,1),h!==null&&h()}};function a2(t,i,s,l){return y(t).removeEventListener(i,s,l),!1}function ro(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function o_(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function l_(t,i,s,l){if(t.length===0)return-1;l=o_(l);for(var f=0;f<t.length;f++){var h=t[f];if(h.type===i&&h.listener===s&&o_(h.optionsOrUseCapture)===l)return f}return-1}zi.prototype.dispatchEvent=function(t){var i=v(this._fragmentFiber);if(i===null)return!0;i=y(i);var s=this._eventListeners;if(s!==null&&0<s.length||!t.bubbles){var l=i.nodeType===9?i.createComment(""):document.createTextNode("");if(s)for(var f=0;f<s.length;f++){var h=s[f];l.addEventListener(h.type,h.attachedListener,ro(h.optionsOrUseCapture))}if(i.appendChild(l),t=l.dispatchEvent(t),s)for(f=0;f<s.length;f++)h=s[f],l.removeEventListener(h.type,h.attachedListener,ro(h.optionsOrUseCapture));return i.removeChild(l),t}return i.dispatchEvent(t)},zi.prototype.focus=function(t){g(this._fragmentFiber.child,!0,c_,t,void 0,void 0)};function c_(t,i){return t.tag===6?!1:(t=y(t),g2(t,i))}zi.prototype.focusLast=function(t){var i=[];g(this._fragmentFiber.child,!0,kd,i,void 0,void 0);for(var s=i.length-1;0<=s&&!c_(i[s],t);s--);};function kd(t,i){return i.push(t),!1}zi.prototype.blur=function(){var t=v(this._fragmentFiber);t!==null&&(t=y(t),t=El(t).activeElement,t!==null&&g(this._fragmentFiber.child,!1,r2,t,void 0,void 0))};function r2(t,i){return t.tag===6?!1:(t=y(t),t===i||t.contains(i)?(i.blur(),!0):!1)}zi.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),g(this._fragmentFiber.child,!1,s2,t,void 0,void 0)};function s2(t,i){return t.tag===6||(t=y(t),i.observe(t)),!1}zi.prototype.unobserveUsing=function(t){var i=this._observers;if(i!==null&&i.has(t)){i.delete(t),g(this._fragmentFiber.child,!1,o2,t,void 0,void 0);for(var s=i=0;s<la.length;s++){var l=la[s];l.fragmentInstance===this&&l.observer===t?t.unobserve(l.instance):la[i++]=l}la.length=i}};function o2(t,i){return t.tag===6||(t=y(t),i.unobserve(t)),!1}var la=[],Xd=!1;function l2(t,i,s){la.push({fragmentInstance:t,observer:i,instance:s}),Xd||(Xd=!0,v2(function(){Xd=!1;var l=la;la=[];for(var f=0;f<l.length;f++){var h=l[f];h.observer.unobserve(h.instance)}}))}zi.prototype.getClientRects=function(){var t=[];return g(this._fragmentFiber.child,!1,c2,t,void 0,void 0),t};function c2(t,i){if(t.tag===6){t=t.stateNode;var s=t.ownerDocument.createRange();s.selectNodeContents(t),i.push.apply(i,s.getClientRects())}else t=y(t),i.push.apply(i,t.getClientRects());return!1}zi.prototype.getRootNode=function(t){var i=v(this._fragmentFiber);return i===null?this:y(i).getRootNode(t)},zi.prototype.compareDocumentPosition=function(t){var i=v(this._fragmentFiber);if(i===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var s=[];g(this._fragmentFiber.child,!1,kd,s,void 0,void 0);var l=y(i);if(s.length===0){if(s=l,_(this._fragmentFiber)){e:{for(i=this._fragmentFiber.return;i!==null;){if(i.tag===4){i=i.stateNode.containerInfo;break e}if(i.tag===3||i.tag===5||i.tag===27)break;i=i.return}i=null}i!=null&&(s=i)}i=this._fragmentFiber;var f=l=s.compareDocumentPosition(t);return s===t?f=Node.DOCUMENT_POSITION_CONTAINS:l&Node.DOCUMENT_POSITION_CONTAINED_BY&&(s=E(i)[1],s===null?f=Node.DOCUMENT_POSITION_PRECEDING:(t=y(s).compareDocumentPosition(t),f=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),f|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}i=y(s[0]),f=y(s[s.length-1]);var h=_(this._fragmentFiber)?i.parentElement:l;if(h==null)return Node.DOCUMENT_POSITION_DISCONNECTED;l=h.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY,h=h.compareDocumentPosition(f)&Node.DOCUMENT_POSITION_CONTAINED_BY;var S=i.compareDocumentPosition(t),N=f.compareDocumentPosition(t),Y=S&Node.DOCUMENT_POSITION_CONTAINED_BY||N&Node.DOCUMENT_POSITION_CONTAINED_BY;return N=l&&h&&S&Node.DOCUMENT_POSITION_FOLLOWING&&N&Node.DOCUMENT_POSITION_PRECEDING,i=l&&i===t||h&&f===t||Y||N?Node.DOCUMENT_POSITION_CONTAINED_BY:!l&&i===t||!h&&f===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:S,i&Node.DOCUMENT_POSITION_DISCONNECTED||i&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||u2(i,this._fragmentFiber,s[0],s[s.length-1],t)?i:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function u2(t,i,s,l,f){var h=pt(f);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(s=!!h)e:{for(;h!==null;){if(h.tag===7&&(h===i||h.alternate===i)){s=!0;break e}h=h.return}s=!1}return s}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(h===null)return h=f.ownerDocument,f===h||f===h.documentElement||f===h.body;e:{for(h=i,i=v(i);h!==null;){if(!(h.tag!==5&&h.tag!==3&&h.tag!==27||h!==i&&h.alternate!==i)){h=!0;break e}h=h.return}h=!1}return h}return t&Node.DOCUMENT_POSITION_PRECEDING?((i=!!h)&&!(i=h===s)&&(i=P(s,h,O),i===null?i=!1:(g(i,!0,B,h,s),h=M,M=null,i=h!==null)),i):t&Node.DOCUMENT_POSITION_FOLLOWING?((i=!!h)&&!(i=h===l)&&(i=P(l,h,O),i===null?i=!1:(g(i,!0,R,h,l),h=M,U=M=null,i=h!==null)),i):!1}function u_(t,i){var s=t.ownerDocument.createRange();s.selectNodeContents(t),t=s.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,i?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}zi.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var i=[];g(this._fragmentFiber.child,!1,kd,i,void 0,void 0);var s=t!==!1;if(i.length===0){var l=E(this._fragmentFiber);if(l=s?l[1]||l[0]||v(this._fragmentFiber):l[0]||l[1],l===null)return;if(l.tag===6){t=y(l),u_(t,s);return}if(l=y(l),l.nodeType!==9){if(l.nodeType===11){s="host"in l?l.host:null,s!==null&&s.scrollIntoView(t);return}l.scrollIntoView(t)}}for(l=s?i.length-1:0;l!==(s?-1:i.length);){var f=i[l];f.tag===6?(f=y(f),u_(f,s)):y(f).scrollIntoView(t),l+=s?-1:1}};function f2(t,i){return t=y(t),f_(t,i),!1}function f_(t,i){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(i)}function h_(t,i){var s=i._eventListeners;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l];t.addEventListener(f.type,f.attachedListener,ro(f.optionsOrUseCapture))}t.nodeType!==3&&(s=i._observers,s!==null&&s.forEach(function(h){for(var S=0,N=0;N<la.length;N++){var Y=la[N];(Y.fragmentInstance!==i||Y.observer!==h||Y.instance!==t)&&(la[S++]=Y)}la.length=S,h.observe(t)}),f_(t,i))}function h2(t,i){var s=i._eventListeners;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l];t.removeEventListener(f.type,f.attachedListener,ro(f.optionsOrUseCapture))}t.nodeType!==3&&(s=i._observers,s!==null&&s.forEach(function(h){typeof h.rootMargin=="string"?l2(i,h,t):h.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(i))}function qd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":qd(s),it(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function d2(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Ze])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var h=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=Qi(t.nextSibling),t===null)break}return null}function p2(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Qi(t.nextSibling),t===null))return null;return t}function d_(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Qi(t.nextSibling),t===null))return null;return t}function Wd(t){return t.data==="$?"||t.data==="$~"}function Yd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function m2(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Qi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Zd=null;function p_(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return Qi(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function m_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function g2(t,i){function s(){l=!0}if(t.ownerDocument.activeElement===t)return!0;var l=!1;try{t.ownerDocument.addEventListener("focus",s,!0),(t.focus||HTMLElement.prototype.focus).call(t,i)}finally{t.ownerDocument.removeEventListener("focus",s,!0)}return l}function v2(t){t_(function(){t_(function(i){return t(i)})})}function g_(t,i,s){switch(i=El(s),t){case"html":if(t=i.documentElement,!t)throw Error(r(452));return t;case"head":if(t=i.head,!t)throw Error(r(453));return t;case"body":if(t=i.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function v_(t,i,s){for(var l in s){var f=s[l];s.hasOwnProperty(l)&&f!=null&&dn(t,i,l,null,WE,f)}s.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===xa&&(t.onclick=null),it(t)}function Kd(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);it(t)}var ji=new Map,x_=new Set;function bl(t){if(typeof t.getRootNode=="function"){var i=t.getRootNode();if(i.nodeType===9||i.nodeType===11)return i}return t.nodeType===9?t:t.ownerDocument}var tr=we.d;we.d={f:x2,r:_2,D:y2,C:S2,L:M2,m:E2,X:T2,S:b2,M:A2};function x2(){var t=tr.f(),i=mu();return t||i}function _2(t){var i=yt(t);i!==null&&i.tag===5&&i.type==="form"?yv(i):tr.r(t)}var so=typeof document>"u"?null:document;function __(t,i,s){var l=so;if(l&&typeof i=="string"&&i){var f=ki(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),x_.has(f)||(x_.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),ii(i,"link",t),bt(i),l.head.appendChild(i)))}}function y2(t){tr.D(t),__("dns-prefetch",t,null)}function S2(t,i){tr.C(t,i),__("preconnect",t,i)}function M2(t,i,s){tr.L(t,i,s);var l=so;if(l&&t&&i){var f='link[rel="preload"][as="'+ki(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+ki(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+ki(s.imageSizes)+'"]')):f+='[href="'+ki(t)+'"]';var h=f;switch(i){case"style":h=oo(t);break;case"script":h=lo(t)}if(!(ji.has(h)||(t=F({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),ji.set(h,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(Tl(h))||i==="script"&&l.querySelector(Al(h))))){var S=l.createElement("link");ii(S,"link",t),i==="style"&&(S[De]=!0,S.onload=S.onerror=function(){Dt(S)}),bt(S),l.head.appendChild(S)}}}function E2(t,i){tr.m(t,i);var s=so;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+ki(l)+'"][href="'+ki(t)+'"]',h=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=lo(t)}if(!ji.has(h)&&(t=F({rel:"modulepreload",href:t},i),ji.set(h,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Al(h)))return}l=s.createElement("link"),ii(l,"link",t),bt(l),s.head.appendChild(l)}}}function b2(t,i,s){tr.S(t,i,s);var l=so;if(l&&t){var f=Nt(l).hoistableStyles,h=oo(t);i=i||"default";var S=f.get(h);if(!S){var N={loading:0,preload:null};if(S=l.querySelector(Tl(h)))N.loading=5;else{t=F({rel:"stylesheet",href:t,"data-precedence":i},s),(s=ji.get(h))&&Qd(t,s);var Y=S=l.createElement("link");bt(Y),ii(Y,"link",t),Y._p=new Promise(function(ge,Re){Y.onload=ge,Y.onerror=Re}),Y.addEventListener("load",function(){N.loading|=1}),Y.addEventListener("error",function(){N.loading|=2}),N.loading|=4,Mu(S,i,l)}S={type:"stylesheet",instance:S,count:1,state:N},f.set(h,S)}}}function T2(t,i){tr.X(t,i);var s=so;if(s&&t){var l=Nt(s).hoistableScripts,f=lo(t),h=l.get(f);h||(h=s.querySelector(Al(f)),h||(t=F({src:t,async:!0},i),(i=ji.get(f))&&jd(t,i),h=s.createElement("script"),bt(h),ii(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function A2(t,i){tr.M(t,i);var s=so;if(s&&t){var l=Nt(s).hoistableScripts,f=lo(t),h=l.get(f);h||(h=s.querySelector(Al(f)),h||(t=F({src:t,async:!0,type:"module"},i),(i=ji.get(f))&&jd(t,i),h=s.createElement("script"),bt(h),ii(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function y_(t,i,s,l){var f=(f=Je.current)?bl(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(s=oo(s.href),i=Nt(f).hoistableStyles,l=i.get(s),l||(l={type:"style",instance:null,count:0,state:null},i.set(s,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=oo(s.href);var h=Nt(f).hoistableStyles,S=h.get(t);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,S),(h=f.querySelector(Tl(t)))?h._p||(S.instance=h,S.state.loading=5):(h=ji.get(t),h||(h={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},ji.set(t,h)),w2(f,t,h,S.state))),i&&l===null)throw Error(r(528,""));return S}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(s=lo(s),i=Nt(f).hoistableScripts,l=i.get(s),l||(l={type:"script",instance:null,count:0,state:null},i.set(s,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function oo(t){return'href="'+ki(t)+'"'}function Tl(t){return'link[rel="stylesheet"]['+t+"]"}function S_(t){return F({},t,{"data-precedence":t.precedence,precedence:null})}function w2(t,i,s,l){if(i=t.querySelector('link[rel="preload"][as="style"]['+i+"]")){if(i[De]!==!0){l.loading=1;return}}else i=t.createElement("link"),i[De]=!0,i.onload=i.onerror=Dt.bind(null,i),ii(i,"link",s),bt(i),t.head.appendChild(i);l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2})}function lo(t){return'[src="'+ki(t)+'"]'}function Al(t){return"script[async]"+t}function M_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+ki(s.href)+'"]');if(l)return i.instance=l,bt(l),l;var f=F({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),bt(l),ii(l,"style",f),Mu(l,s.precedence,t),i.instance=l;case"stylesheet":f=oo(s.href);var h=t.querySelector(Tl(f));if(h)return i.state.loading|=4,i.instance=h,bt(h),h;l=S_(s),(f=ji.get(f))&&Qd(l,f),h=(t.ownerDocument||t).createElement("link"),bt(h);var S=h;return S._p=new Promise(function(N,Y){S.onload=N,S.onerror=Y}),ii(h,"link",l),i.state.loading|=4,Mu(h,s.precedence,t),i.instance=h;case"script":return h=lo(s.src),(f=t.querySelector(Al(h)))?(i.instance=f,bt(f),f):(l=s,(f=ji.get(h))&&(l=F({},s),jd(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),bt(f),ii(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Mu(l,s.precedence,t));return i.instance}function Mu(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,h=f,S=0;S<l.length;S++){var N=l[S];if(N.dataset.precedence===i)h=N;else if(h!==f)break}h?h.parentNode.insertBefore(t,h.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function Qd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function jd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Eu=null;function E_(t,i,s){if(Eu===null){var l=new Map,f=Eu=new Map;f.set(s,l)}else f=Eu,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var h=s[f];if(!(h[Ze]||h[A]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(i)||"";S=t+S;var N=l.get(S);N?N.push(h):l.set(S,[h])}}return l}function Jd(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function R2(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(t=i.disabled,typeof i.precedence=="string"&&t==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function b_(t,i){return t==="img"&&i.src!=null&&i.src!==""&&i.onLoad==null&&i.loading!=="lazy"}function T_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function A_(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function w_(t,i){typeof i.decode=="function"&&(t.imgCount++,i.complete||(t.imgBytes+=A_(i),t.suspenseyImages.push(i)),t=N2.bind(t),i.decode().then(t,t))}function C2(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=oo(l.href),h=i.querySelector(Tl(f));if(h){i=h._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=wl.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=h,bt(h);return}h=i.ownerDocument||i,l=S_(l),(f=ji.get(f))&&Qd(l,f),h=h.createElement("link"),bt(h);var S=h;S._p=new Promise(function(N,Y){S.onload=N,S.onerror=Y}),ii(h,"link",l),s.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=wl.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var bu=0;function D2(t,i){return t.stylesheets&&t.count===0&&Au(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Au(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+i);0<t.imgBytes&&bu===0&&(bu=62500*ZE());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Au(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>bu?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function R_(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Au(t,t.stylesheets);else if(t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}}}function wl(){this.count--,R_(this)}function N2(){this.imgCount--,R_(this)}var Tu=null;function Au(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Tu=new Map,i.forEach(L2,t),Tu=null,wl.call(t))}function L2(t,i){if(!(i.state.loading&4)){var s=Tu.get(t);if(s)var l=s.get(null);else{s=new Map,Tu.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<f.length;h++){var S=f[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),l=S)}l&&s.set(null,l)}f=i.instance,S=f.getAttribute("data-precedence"),h=s.get(S)||l,h===l&&s.set(null,f),s.set(S,f),this.count++,l=wl.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),h?h.parentNode.insertBefore(f,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var co={$$typeof:ae,Provider:null,Consumer:null,_currentValue:_t,_currentValue2:_t,_threadCount:0};function U2(t,i,s,l,f,h,S,N,Y){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ne(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ne(0),this.hiddenUpdates=Ne(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=Y,this.transitionTypes=null,this.incompleteTransitions=new Map}function C_(t,i,s,l,f,h,S,N,Y,ge,Re,Xe){return t=new U2(t,i,s,S,Y,ge,Re,Xe,N),i=1,h===!0&&(i|=24),h=Ei(3,null,null,i),t.current=h,h.stateNode=t,i=dh(),i.refCount++,t.pooledCache=i,i.refCount++,h.memoizedState={element:l,isDehydrated:s,cache:i},vh(h),t}function D_(t){return t?(t=Ps,t):Ps}function N_(t,i,s,l,f,h){f=D_(f),l.context===null?l.context=f:l.pendingContext=f,l=Sr(i),l.payload={element:s},h=h===void 0?null:h,h!==null&&(l.callback=h),s=Mr(t,l,i),s!==null&&(wi(s,t,i),al(s,t,i))}function L_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function $d(t,i){L_(t,i),(t=t.alternate)&&L_(t,i)}function U_(t){if(t.tag===13||t.tag===31){var i=Jr(t,67108864);i!==null&&wi(i,t,67108864),$d(t,67108864)}}function O_(t){if(t.tag===13||t.tag===31){var i=Ii();i=Ct(i);var s=Jr(t,i);s!==null&&wi(s,t,i),$d(t,i)}}var uo=!0;function O2(t,i,s,l){var f=ye.T;ye.T=null;var h=we.p;try{we.p=2,ep(t,i,s,l)}finally{we.p=h,ye.T=f}}function P2(t,i,s,l){var f=ye.T;ye.T=null;var h=we.p;try{we.p=8,ep(t,i,s,l)}finally{we.p=h,ye.T=f}}function ep(t,i,s,l){if(uo){var f=tp(l);if(f===null)Pd(t,i,l,wu,s),F_(t,l);else if(I2(f,t,i,s,l))l.stopPropagation();else if(F_(t,l),i&4&&-1<F2.indexOf(t)){for(;f!==null;){var h=yt(f);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=Gn(h.pendingLanes);if(S!==0){var N=h;for(N.pendingLanes|=2,N.entangledLanes|=2;S;){var Y=1<<31-Ft(S);N.entanglements[1]|=Y,S&=~Y}Ra(h),(cn&6)===0&&(hu=Qe()+500,yl(0))}}break;case 31:case 13:N=Jr(h,2),N!==null&&wi(N,h,2),mu(),$d(h,2)}if(h=tp(l),h===null&&Pd(t,i,l,wu,s),h===f)break;f=h}f!==null&&l.stopPropagation()}else Pd(t,i,l,null,s)}}function tp(t){return t=Hf(t),np(t)}var wu=null;function np(t){if(wu=null,t=pt(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===31){if(t=d(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return wu=t,null}function P_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(st()){case dt:return 2;case X:return 8;case Ge:case Me:return 32;case qe:return 268435456;default:return 32}default:return 32}}var ip=!1,Or=null,Pr=null,Fr=null,Rl=new Map,Cl=new Map,Ir=[],F2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function F_(t,i){switch(t){case"focusin":case"focusout":Or=null;break;case"dragenter":case"dragleave":Pr=null;break;case"mouseover":case"mouseout":Fr=null;break;case"pointerover":case"pointerout":Rl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cl.delete(i.pointerId)}}function Dl(t,i,s,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=yt(i),i!==null&&U_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function I2(t,i,s,l,f){switch(i){case"focusin":return Or=Dl(Or,t,i,s,l,f),!0;case"dragenter":return Pr=Dl(Pr,t,i,s,l,f),!0;case"mouseover":return Fr=Dl(Fr,t,i,s,l,f),!0;case"pointerover":var h=f.pointerId;return Rl.set(h,Dl(Rl.get(h)||null,t,i,s,l,f)),!0;case"gotpointercapture":return h=f.pointerId,Cl.set(h,Dl(Cl.get(h)||null,t,i,s,l,f)),!0}return!1}function I_(t){var i=pt(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,ht(t.priority,function(){O_(s)});return}}else if(i===31){if(i=d(s),i!==null){t.blockedOn=i,ht(t.priority,function(){O_(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ru(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=tp(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Bf=l,s.target.dispatchEvent(l),Bf=null}else return i=yt(s),i!==null&&U_(i),t.blockedOn=s,!1;i.shift()}return!0}function z_(t,i,s){Ru(t)&&s.delete(i)}function z2(){ip=!1,Or!==null&&Ru(Or)&&(Or=null),Pr!==null&&Ru(Pr)&&(Pr=null),Fr!==null&&Ru(Fr)&&(Fr=null),Rl.forEach(z_),Cl.forEach(z_)}function Cu(t,i){t.blockedOn===i&&(t.blockedOn=null,ip||(ip=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,z2)))}var Du=null;function B_(t){Du!==t&&(Du=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Du===t&&(Du=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(np(l||s)===null)continue;break}var h=yt(s);h!==null&&(t.splice(i,3),i-=3,zh(h,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function fo(t){function i(Y){return Cu(Y,t)}Or!==null&&Cu(Or,t),Pr!==null&&Cu(Pr,t),Fr!==null&&Cu(Fr,t),Rl.forEach(i),Cl.forEach(i);for(var s=0;s<Ir.length;s++){var l=Ir[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Ir.length&&(s=Ir[0],s.blockedOn===null);)I_(s),s.blockedOn===null&&Ir.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],h=s[l+1],S=f[k]||null;if(typeof h=="function")S||B_(s);else if(S){var N=null;if(h&&h.hasAttribute("formAction")){if(f=h,S=h[k]||null)N=S.formAction;else if(np(f)!==null)continue}else N=S.action;typeof N=="function"?s[l+1]=N:(s.splice(l,3),l-=3),B_(s)}}}function H_(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function ap(t){this._internalRoot=t}Nu.prototype.render=ap.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,l=Ii();N_(s,l,t,i,null,null)},Nu.prototype.unmount=ap.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;N_(t.current,2,null,t,null,null),mu(),i[re]=null}};function Nu(t){this._internalRoot=t}Nu.prototype.unstable_scheduleHydration=function(t){if(t){var i=Ee();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Ir.length&&i!==0&&i<Ir[s].priority;s++);Ir.splice(s,0,t),s===0&&I_(t)}};var G_=e.version;if(G_!=="19.3.0")throw Error(r(527,G_,"19.3.0"));we.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(i),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var B2={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:ye,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lu.isDisabled&&Lu.supportsFiber)try{St=Lu.inject(B2),ft=Lu}catch{}}return Ll.createRoot=function(t,i){if(!o(t))throw Error(r(299));var s=!1,l="",f=Dv,h=Nv,S=Lv;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=C_(t,1,!1,null,null,s,l,null,f,h,S,H_),t[re]=i.current,Od(t),new ap(i)},Ll.hydrateRoot=function(t,i,s){if(!o(t))throw Error(r(299));var l=!1,f="",h=Dv,S=Nv,N=Lv,Y=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(h=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(N=s.onRecoverableError),s.formState!==void 0&&(Y=s.formState)),i=C_(t,1,!0,i,s??null,l,f,Y,h,S,N,H_),i.context=D_(null),s=i.current,l=Ii(),l=Ct(l),f=Sr(l),f.callback=null,Mr(s,f,l),s=l,i.current.lanes=s,Pe(i,s),Ra(i),t[re]=i.current,Od(t),new Nu(i)},Ll.version="19.3.0",Ll}var j_;function Q2(){if(j_)return op.exports;j_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),op.exports=K2(),op.exports}var j2=Q2();function cf({children:a,className:e="",...n}){const r=zt.useRef(null);function o(u){const d=r.current;if(!d||u.pointerType!=="mouse"||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const p=d.getBoundingClientRect(),m=u.clientX-p.left-p.width/2,x=u.clientY-p.top-p.height/2;d.style.setProperty("--magnetic-x",`${m*.08}px`),d.style.setProperty("--magnetic-y",`${x*.12}px`)}function c(){r.current?.style.setProperty("--magnetic-x","0px"),r.current?.style.setProperty("--magnetic-y","0px")}return ve.jsx("a",{ref:r,className:`magnetic-link ${e}`,onPointerMove:o,onPointerLeave:c,...n,children:a})}const J2=[["À propos","#about"],["Cours","#courses"],["Applications","#projects"],["Explorations","#lab"]];function $2({theme:a,onThemeToggle:e}){const[n,r]=zt.useState(!1),[o,c]=zt.useState(!1);return zt.useEffect(()=>{const u=p=>{p.key==="Escape"&&r(!1)},d=()=>c(window.scrollY>20);return window.addEventListener("keydown",u),window.addEventListener("scroll",d,{passive:!0}),d(),()=>{window.removeEventListener("keydown",u),window.removeEventListener("scroll",d)}},[]),ve.jsx("header",{className:`site-header${o?" is-compact":""}`,children:ve.jsxs("nav",{className:"nav shell","aria-label":"Navigation principale",children:[ve.jsxs("a",{href:"#top",className:"brand",onClick:()=>r(!1),"aria-label":"Chokri Bettaibi, accueil",children:[ve.jsx("span",{className:"brand-mark",children:"CB"}),ve.jsx("span",{children:"Chokri Bettaibi"})]}),ve.jsxs("button",{className:"menu-toggle",type:"button","aria-label":n?"Fermer le menu":"Ouvrir le menu","aria-expanded":n,"aria-controls":"main-menu",onClick:()=>r(!n),children:[ve.jsx("span",{}),ve.jsx("span",{})]}),ve.jsxs("div",{id:"main-menu",className:`nav-links ${n?"is-open":""}`,children:[J2.map(([u,d])=>ve.jsx("a",{href:d,onClick:()=>r(!1),children:u},d)),ve.jsxs("button",{className:"theme-toggle",onClick:e,"aria-label":`Activer le thème ${a==="dark"?"clair":"sombre"}`,title:"Changer de thème",children:[a==="dark"?"☼":"◐"," ",ve.jsx("span",{children:a==="dark"?"Clair":"Sombre"})]}),ve.jsxs(cf,{className:"nav-contact",href:"#contact",onClick:()=>r(!1),children:["Contact ",ve.jsx("span",{"aria-hidden":"true",children:"↗"})]})]})]})})}const hi={name:"Chokri Bettaibi",role:"Enseignant · Mentor · Développeur",intro:"J’accompagne les étudiants et les autodidactes dans l’algèbre, l’algorithmique et la construction d’applications fiables avec une approche pédagogique, structurée et orientée résultats.",statement:"Mathématiques claires, code moderne, progression concrète.",email:"Bettaibichokrino001@gmail.com",phone:"+216 98 104 699",phoneLink:"+21698104699",cv:"https://chokribettaibi.github.io/CV-Chokri-bettaibi-12.03.2023/",facebook:"https://www.facebook.com/cbettaibi",whatsapp:"https://wa.me/21622949285",domain:"https://www.bettaibichokri.com"},eb=[{title:"Mathématiques & logique",items:["Mathématiques appliquées et théoriques","Algèbre linéaire","Algorithmique","Structures de données"]},{title:"Développement web",items:["HTML","CSS","JavaScript","TypeScript","React"]},{title:"Outils & systèmes",items:["MySQL","Linux","Git & GitHub","Docker"]},{title:"Transmission",items:["Mentorat","Révision","Accompagnement de projets","Supports pédagogiques"]}],J_="10px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",$_=8,fp=320,tb=/^(currentcolor|inherit)$/i,nb=.15,ib=.62,Ji=(a,e,n,r)=>a+(e-a)*(1-Math.exp(-n/r)),Vl=a=>Math.min(1,Math.max(0,Number(a)||0)),ho=(a,e,n)=>{const r=Vl((n-a)/(e-a));return r*r*(3-2*r)},Ca=(...a)=>{let e=2166136261;for(const n of a)e=Math.imul(e^(n|0),16777619),e^=e>>>13,e=Math.imul(e,1540483477),e^=e>>>15;return(e>>>0)/4294967296},e1=a=>a>0?`+${a}`:a<0?`−${-a}`:"0",hp=({text:a="React Bits",fontFamily:e="",fontWeight:n=600,fontSize:r=150,letterSpacing:o=-.05,color:c="currentColor",accentColor:u="currentColor",align:d="center",reach:p=200,softness:m=.7,dashLength:x=4,dashGap:g=2,strokeWidth:v=1.5,lineStyle:_="dashed",reveal:E="letter",specks:C=15,selection:y=!0,labels:M=!0,draggable:U=!0,bounce:B=.4,sweep:R=!0,speed:O=1,clickKick:P=!0,intro:F="none",introDuration:w=2,guides:T=!1,className:H="",style:V})=>{const ee=zt.useRef(null),I=zt.useRef(null),Q=zt.useRef(null),ae=zt.useRef(()=>{});return zt.useEffect(()=>{Q.current={text:a,fontFamily:e,fontWeight:n,fontSize:r,letterSpacing:o,color:c,accentColor:u,align:d,reach:p,softness:m,dashLength:x,dashGap:g,strokeWidth:v,lineStyle:_,reveal:E,specks:C,selection:y,labels:M,draggable:U,bounce:B,sweep:R,speed:O,clickKick:P,intro:F,introDuration:w,guides:T},ae.current()}),zt.useEffect(()=>{const W=ee.current,$=I.current,D=$?.getContext("2d"),le=document.createElement("canvas"),me=le.getContext("2d");if(!W||!$||!D||!me)return;const Te=window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;let rt=1,je=1,G=1,J=0,Ke=performance.now(),ie=!1,ne=!0,xe="",Ue="",ye=null,we=[],_t=0,Ae=0,Fe=0,ue=!1,Oe=-1,He="",vt=0,mt="",Je=!1,Tt=!document.fonts,j=0;const nt=[],ze={x:0,y:0,time:0,index:-1},L={x:0,y:0,inside:!1},b={x:0,y:0},q={x:0,y:0},z={x1:0,y1:0,x2:0,y2:0,alpha:0,index:-1},_e=()=>{xe="",ae.current()},Ce=()=>{Tt=!0,_e()},te=Ne=>Ne.fontFamily||getComputedStyle(W).fontFamily||"sans-serif",Z=(Ne,Pe)=>`${Ne.fontWeight} ${Pe}px ${te(Ne)}`,K=Ne=>{const Pe=getComputedStyle(W).color||"#000000",Ve=tt=>{const ct=String(tt||"").trim();if(!ct||tb.test(ct))return Pe;const at=ct.match(/^var\((--[\w-]+)\)$/);return at?getComputedStyle(W).getPropertyValue(at[1]).trim()||Pe:ct};return{ink:Ve(Ne.color),accent:Ve(Ne.accentColor)}},ce=(Ne,Pe,Ve)=>{Ne.font=Z(Pe,Ve),"letterSpacing"in Ne&&(Ne.letterSpacing=`${Pe.letterSpacing*Ve}px`),Ne.textAlign="left",Ne.textBaseline="alphabetic"},Be=(Ne,Pe,Ve,tt,ct)=>{const at=Math.ceil(Ne.strokeWidth*2+4),Ct=Ve.box.x1-at,wt=Ve.box.y1-at,Ee=Ve.box.x2-Ve.box.x1+at*2,ht=Ve.box.y2-Ve.box.y1+at*2,lt=document.createElement("canvas");lt.width=Math.max(1,Math.ceil(Ee*G)),lt.height=Math.max(1,Math.ceil(ht*G));const A=lt.getContext("2d");return A?(A.setTransform(G,0,0,G,-Ct*G,-wt*G),ce(A,Ne,Pe.size),tt?(A.lineJoin="round",A.lineWidth=Ne.strokeWidth*2,A.lineCap="butt",A.strokeStyle=ct,Ne.lineStyle!=="solid"&&A.setLineDash([Math.max(1,Ne.dashLength),Math.max(1,Ne.dashGap)]),A.strokeText(Ve.char,Ve.x,Pe.baseline),A.setLineDash([]),A.globalCompositeOperation="destination-out",A.fillStyle="#000000",A.fillText(Ve.char,Ve.x,Pe.baseline),A.globalCompositeOperation="source-over"):(A.fillStyle=ct,A.fillText(Ve.char,Ve.x,Pe.baseline)),{image:lt,left:Ct,top:wt}):{image:lt,left:Ct,top:wt}},Le=(Ne,Pe)=>{const Ve=[Ne.text,te(Ne),Ne.fontWeight,Ne.fontSize,Ne.letterSpacing,Ne.align,Pe,Ne.dashLength,Ne.dashGap,Ne.strokeWidth,Ne.lineStyle,rt,je,G].join("|");if(Ve===xe&&ye)return ye;xe=Ve;const tt=Z(Ne,64);document.fonts&&tt!==Ue&&(Ue=tt,document.fonts.load(tt,Ne.text).then(_e,_e));const ct=me;ce(ct,Ne,Ne.fontSize);let at=ct.measureText(Ne.text);const Ct=Math.min(1,rt*.9/Math.max(at.actualBoundingBoxLeft+at.actualBoundingBoxRight,1),je*.66/Math.max(at.actualBoundingBoxAscent+at.actualBoundingBoxDescent,1)),wt=Ne.fontSize*Ct;ce(ct,Ne,wt),at=ct.measureText(Ne.text);const Ee=at.actualBoundingBoxLeft+at.actualBoundingBoxRight,ht=at.actualBoundingBoxAscent+at.actualBoundingBoxDescent,lt=rt*.05,k=(Ne.align==="left"?lt:Ne.align==="right"?rt-lt-Ee:(rt-Ee)/2)+at.actualBoundingBoxLeft,re=(je-ht)/2+at.actualBoundingBoxAscent,fe=re-ct.measureText("x").actualBoundingBoxAscent,he=re-ct.measureText("H").actualBoundingBoxAscent,We=re-ct.measureText("d").actualBoundingBoxAscent,ot=re+ct.measureText("p").actualBoundingBoxDescent,Ze=re-at.actualBoundingBoxAscent,De=re+at.actualBoundingBoxDescent,it=Math.min(Ze,he)-2,pt=Math.max(De,re)+2,yt={size:wt,baseline:re,left:k-at.actualBoundingBoxLeft,right:k+at.actualBoundingBoxRight,top:Ze,bottom:De,lines:[{y:re,label:"baseline"},{y:fe,label:"x-height"},{y:he,label:"cap height"},...he-We>Math.max(11,wt*.06)?[{y:We,label:"ascender"}]:[],{y:ot,label:"descender"}],bands:[{y0:fe,y1:re,up:!0,order:0},{y0:he,y1:fe,up:!0,order:1},{y0:it,y1:he,up:!0,order:2},{y0:re,y1:pt,up:!1,order:1}].filter(Dt=>Dt.y1-Dt.y0>.5)};ye=yt;const $e=Array.from(Ne.text),Nt=we;we=[];let bt="";return $e.forEach((Dt,Ut)=>{bt+=Dt;const on=ct.measureText(Dt),ut=k+ct.measureText(bt).width-on.width;if(!Dt.trim())return;const Wt={char:Dt,x:ut,box:{x1:ut-on.actualBoundingBoxLeft,y1:re-on.actualBoundingBoxAscent,x2:ut+on.actualBoundingBoxRight,y2:re+on.actualBoundingBoxDescent}},kt=Nt[we.length];we.push({...Wt,offset:kt?.char===Dt?kt.offset:{x:0,y:0},velocity:{x:0,y:0},outline:0,shown:1,cells:null,assembled:0,index:Ut,fill:Be(Ne,yt,Wt,!1,Pe),dashes:Be(Ne,yt,Wt,!0,Pe)})}),Oe=-1,z.index=-1,yt},Ie=(Ne,Pe)=>{if(!ye||Pe<ye.top-24||Pe>ye.bottom+24)return-1;let Ve=-1,tt=1/0;return we.forEach((ct,at)=>{const Ct=ct.box.x1+ct.offset.x,wt=ct.box.x2+ct.offset.x,Ee=Ne<Ct?Ct-Ne:Ne>wt?Ne-wt:0;Ee<tt&&(tt=Ee,Ve=at)}),tt<28?Ve:-1},Qe=(Ne,Pe,Ve,tt,ct,at)=>{const Ct=Math.min(1,Math.max(0,1-at)),wt=Ne.createRadialGradient(Pe,Ve,0,Pe,Ve,tt);if(wt.addColorStop(0,`rgba(0, 0, 0, ${ct})`),Ct>.995)return wt.addColorStop(.995,`rgba(0, 0, 0, ${ct})`),wt.addColorStop(1,"rgba(0, 0, 0, 0)"),wt;for(let Ee=0;Ee<=$_;Ee++){const ht=Ee/$_,lt=ht*ht*(3-2*ht);wt.addColorStop(Ct+(1-Ct)*ht,`rgba(0, 0, 0, ${ct*(1-lt)})`)}return wt},st=(Ne,Pe,Ve,tt,ct,at)=>{Ne.drawImage(Pe.image,Math.round((Pe.left+Ve)*G-ct),Math.round((Pe.top+tt)*G-at))},dt=Ne=>{const Pe=Ne.reach*G,Ve=q.x*G,tt=q.y*G;D.globalCompositeOperation="destination-out",D.fillStyle=Qe(D,Ve,tt,Pe,_t,Ne.softness),D.fillRect(Ve-Pe,tt-Pe,Pe*2,Pe*2),D.globalCompositeOperation="source-over";const ct=Math.max(0,Math.floor(Ve-Pe)),at=Math.max(0,Math.floor(tt-Pe)),Ct=Math.min($.width,Math.ceil(Ve+Pe)),wt=Math.min($.height,Math.ceil(tt+Pe));if(Ct<=ct||wt<=at)return;const Ee=Ct-ct,ht=wt-at;(le.width<Ee||le.height<ht)&&(le.width=Math.max(le.width,Ee),le.height=Math.max(le.height,ht)),me.setTransform(1,0,0,1,0,0),me.globalCompositeOperation="source-over",me.clearRect(0,0,Ee,ht);for(const lt of we)st(me,lt.dashes,lt.offset.x,lt.offset.y,ct,at);me.globalCompositeOperation="destination-in",me.fillStyle=Qe(me,Ve-ct,tt-at,Pe,1,Ne.softness),me.fillRect(0,0,Ee,ht),me.globalCompositeOperation="source-over",D.globalAlpha=_t,D.drawImage(le,0,0,Ee,ht,ct,at,Ee,ht),D.globalAlpha=1},X=Ne=>(Math.round(Ne*G)+.5)/G,Ge=(Ne,Pe,Ve)=>{let tt=(Ne%(2*(Pe+Ve))+2*(Pe+Ve))%(2*(Pe+Ve));return tt<Pe?[z.x1+tt,z.y1,0,-1]:(tt-=Pe,tt<Ve?[z.x2,z.y1+tt,1,0]:(tt-=Ve,tt<Pe?[z.x2-tt,z.y2,0,1]:(tt-=Pe,[z.x1,z.y2-tt,-1,0])))},Me=(Ne,Pe,Ve)=>{const tt=z.x2-z.x1,ct=z.y2-z.y1;if(tt<2||ct<2)return;const at=2*(tt+ct),Ct=z.index+1,wt=3;D.fillStyle=Ve,D.strokeStyle=Ve;for(let Ee=0;Ee<Ne.specks;Ee++){const ht=.5+Ca(Ct,Ee,11)*1.2,lt=Fe/ht+Ca(Ct,Ee,17),A=Math.floor(lt),k=lt-A;if(k>.7)continue;const[re,fe,he,We]=Ge(Ca(Ct,Ee,A)*at,tt,ct),ot=Ca(Ct,Ee,A,2),Ze=ot<.46?2:ot<.7?3:ot<.84?5:ot<.94?8:11,De=Ze>=8,it=(De?9:4)+Math.floor(Ca(Ct,Ee,A,1)*5)*wt,pt=z.x1+Math.round((re+he*it-z.x1)/wt)*wt,yt=z.y1+Math.round((fe+We*it-z.y1)/wt)*wt,$e=Ca(Ct,Ee,A,3),Nt=k<.06||k>.32&&k<.36?.35:1,bt=Pe*(De?.3+.4*$e:.3+.6*$e)*Nt,Dt=Math.round(pt-Ze/2),Ut=Math.round(yt-Ze/2);D.globalAlpha=bt,$e<.26||De&&$e<.78?(D.strokeRect(Dt+.5,Ut+.5,Ze,Ze),De&&$e>.5&&D.fillRect(Math.round(pt)-1,Math.round(yt)-1,2,2)):D.fillRect(Dt,Ut,Ze,Ze)}for(let Ee=0;Ee<2;Ee++){const ht=(Fe*.42*Ne.speed+Ee*.5)*at;for(let lt=0;lt<4;lt++){const[A,k]=Ge(ht-lt*6,tt,ct),re=lt===0?3:2;D.globalAlpha=Pe*[.95,.55,.32,.16][lt],D.fillRect(Math.round(A-re/2),Math.round(k-re/2),re,re)}}D.globalAlpha=1},qe=(Ne,Pe)=>{const Ve=we[z.index];if(!Ve||z.alpha<.01)return;const tt=z.alpha,ct=X(z.x1),at=X(z.y1),Ct=X(z.x2),wt=X(z.y2);D.setTransform(G,0,0,G,0,0),D.fillStyle=Pe,D.strokeStyle=Pe,D.lineWidth=1;const Ee=Math.hypot(Ve.offset.x,Ve.offset.y);if(Ee>1){const lt=(Ve.box.x1+Ve.box.x2)/2,A=(Ve.box.y1+Ve.box.y2)/2;D.beginPath(),D.moveTo(lt,A),D.lineTo(lt+Ve.offset.x,A+Ve.offset.y),D.setLineDash([3,4]),D.globalAlpha=.45*tt,D.stroke(),D.setLineDash([]),D.beginPath(),D.rect(Math.round(lt)-2,Math.round(A)-2,4,4),D.globalAlpha=.7*tt,D.fill()}D.beginPath(),D.rect(ct,at,Ct-ct,wt-at),D.globalAlpha=.5*tt,D.stroke(),D.beginPath();for(const[lt,A]of[[ct,at],[Ct,at],[Ct,wt],[ct,wt]])D.rect(Math.round(lt)-2,Math.round(A)-2,5,5);if(D.globalAlpha=.95*tt,D.fill(),D.globalAlpha=1,Ne.specks>0&&Me(Ne,tt,Pe),!Ne.labels)return;D.font=J_,D.textAlign="left",D.textBaseline="bottom",D.fillStyle=Pe,D.globalAlpha=.62*tt;const ht=Ee>1?`${e1(Math.round(Ve.offset.x))}, ${e1(Math.round(-Ve.offset.y))}`:`${Ve.char}  ${Math.round(Ve.box.x2-Ve.box.x1)} × ${Math.round(Ve.box.y2-Ve.box.y1)}`;D.fillText(ht,Math.round(z.x1),Math.round(z.y1)-7),D.globalAlpha=1},et=(Ne,Pe,Ve,tt,ct)=>{const at=Math.max(12,Pe.size*.12),Ct=Math.round(Pe.left-at),wt=Math.round(Pe.right+at),Ee=rt-wt>Ct;D.setTransform(G,0,0,G,0,0),D.strokeStyle=Ve,D.fillStyle=Ve,D.lineWidth=1,D.font=J_,D.textBaseline="middle",D.textAlign=Ee?"left":"right",Pe.lines.forEach((ht,lt)=>{const A=ct(lt);if(A<=.001)return;const k=X(ht.y),re=Ct+(wt-Ct)*A;D.globalAlpha=tt*.4,D.beginPath(),D.moveTo(Ct,k),D.lineTo(re,k),D.stroke(),D.globalAlpha=tt*.9,D.fillRect(Ct-1,Math.round(ht.y)-1,3,3),D.fillRect(Math.round(re)-1,Math.round(ht.y)-1,3,3),Ne.labels&&(D.globalAlpha=tt*.62*ho(.7,1,A),D.fillText(ht.label,Ee?wt+8:Ct-8,Math.round(ht.y)))}),D.textAlign="left",D.setTransform(1,0,0,1,0,0),D.globalAlpha=1},Ye=(Ne,Pe)=>{if(Ne.cells)return Ne.cells;const Ve=Ne.fill,tt=Math.max(3,Math.round(Pe.size/26)),ct=Ve.image.width,at=Ve.image.height,Ct=Ve.image.getContext("2d"),wt=[];if(Ne.cells=wt,Ne.assembled=0,!Ct||ct<2||at<2)return wt;const Ee=Ct.getImageData(0,0,ct,at).data,ht=Math.floor(Ve.left/tt)*tt,lt=Math.floor(Ve.top/tt)*tt,A=Math.ceil((Ve.left+ct/G-ht)/tt)+1,k=Math.ceil((Ve.top+at/G-lt)/tt)+1,re=new Uint8Array(A*k);for(let We=0;We<at;We++)for(let ot=0;ot<ct;ot++){if(Ee[(We*ct+ot)*4+3]<24)continue;const Ze=Math.floor((Ve.left+ot/G-ht)/tt),De=Math.floor((Ve.top+We/G-lt)/tt);re[De*A+Ze]=1}const fe=(Ne.box.x1+Ne.box.x2)/2,he=Vl((fe-Pe.left)/Math.max(1,Pe.right-Pe.left));for(let We=0;We<re.length;We++){if(!re[We])continue;const ot=Ca(Ne.index,We,1)*Math.PI*2,Ze=Pe.size*(.25+.6*Ca(Ne.index,We,2)),De=.03+.36*he+.12*Ca(Ne.index,We,3),it=De+.3+.14*Ca(Ne.index,We,4);wt.push({x:ht+We%A*tt,y:lt+Math.floor(We/A)*tt,size:tt,dx:Math.cos(ot)*Ze,dy:Math.sin(ot)*Ze*.7,start:De,land:it}),Ne.assembled=Math.max(Ne.assembled,it)}return wt},St=(Ne,Pe,Ve)=>{const tt=Math.round(Ne*G),ct=Math.round(Pe*G);return[tt,ct,Math.round((Ne+Ve)*G)-tt,Math.round((Pe+Ve)*G)-ct]},ft=(Ne,Pe,Ve)=>{const tt=Ne.cells||[];D.save(),D.beginPath();let ct=0;for(const at of tt){if(Pe<at.land)continue;const[Ct,wt,Ee,ht]=St(at.x,at.y,at.size);D.rect(Ct,wt,Ee,ht),ct++}ct&&(D.clip(),st(D,Ne.fill,0,0,0,0)),D.restore(),D.fillStyle=Ve;for(const at of tt){if(Pe<at.start||Pe>=at.land)continue;const Ct=(Pe-at.start)/(at.land-at.start),wt=1-Math.pow(1-Ct,4),Ee=at.size*(.4+.6*wt),ht=at.x+(at.size-Ee)/2+at.dx*(1-wt),lt=at.y+(at.size-Ee)/2+at.dy*(1-wt),[A,k,re,fe]=St(ht,lt,Ee);D.globalAlpha=Math.min(1,Ct*4)*(.55+.45*wt),D.fillRect(A,k,Math.max(1,re),Math.max(1,fe))}D.globalAlpha=1},Pt=(Ne,Pe,Ve,tt)=>{const ct=Ne.fill,at=Math.floor(ct.left*G),Ct=Math.floor(ct.top*G),wt=ct.image.width+2,Ee=ct.image.height+2,ht=Vl((Ve-.24-.28*Pe)/.48),lt=[];for(const k of tt.bands){const re=ho(.3*k.order,.3*k.order+.4,ht);if(re<=0)continue;const fe=(k.y1-k.y0)*re,he=Math.round((k.up?k.y1-fe:k.y0)*G),We=Math.round((k.up?k.y1:k.y0+fe)*G);We>he&&lt.push([he,We-he])}const A=ho(.08+.2*Pe,.22+.2*Pe,Ve);if(A>.001){D.save(),D.beginPath(),D.rect(at-2,Ct-2,wt+2,Ee+2);for(const[k,re]of lt)D.rect(at-2,k,wt+2,re);D.clip("evenodd"),D.globalAlpha=A,st(D,Ne.dashes,0,0,0,0),D.restore()}if(lt.length){D.save(),D.beginPath();for(const[k,re]of lt)D.rect(at-2,k,wt+2,re);D.clip(),st(D,Ne.fill,0,0,0,0),D.restore()}D.globalAlpha=1},Ft=Ne=>{const Pe=(ye?ye.size:120)*11;nt.push({index:Ne,at:Fe,velocity:Pe});for(let Ve=1;Ve<we.length;Ve++){const tt=Pe*Math.pow(ib,Ve);if(tt<30)break;for(const ct of[Ne-Ve,Ne+Ve])ct>=0&&ct<we.length&&nt.push({index:ct,at:Fe+Ve*.055,velocity:tt})}ae.current()},xn=Ne=>{J=0;const Pe=Q.current;if(!Pe)return;const Ve=Math.min(.05,Math.max(.001,(Ne-Ke)/1e3));Ke=Ne;const{ink:tt,accent:ct}=K(Pe),at=Le(Pe,tt),Ct=2*Math.sqrt(fp)*(1-Vl(Pe.bounce)*.96);Pe.intro!==mt&&(mt=Pe.intro,vt=0);const wt=mt!=="none"&&!Te&&we.length>0;wt&&Tt&&(vt+=Ve);const Ee=wt?Vl((vt-nb)/Math.max(.3,Pe.introDuration)):1;Je=wt&&Ee<1;const ht=!Je&&Pe.sweep&&!Te&&!L.inside&&Oe<0;ht&&(Ae+=Ve*Pe.speed),Fe+=Ve;let lt=L.x,A=L.y;ht&&(lt=at.left+(at.right-at.left)*(.5-.5*Math.cos(Ae*.45)),A=at.top+(at.bottom-at.top)*(.45+.1*Math.sin(Ae*.8)));const k=!Je&&(L.inside||ht||Oe>=0);if(k&&!ue&&(q.x=lt,q.y=A),k){const De=L.inside?.05:.22;q.x=Ji(q.x,lt,Ve,De),q.y=Ji(q.y,A,Ve,De)}ue=k,_t=Ji(_t,Pe.reveal==="area"&&k&&Oe<0?1:0,Ve,.16);for(let De=nt.length-1;De>=0;De--){if(nt[De].at>Fe)continue;const it=we[nt[De].index];it&&(it.velocity.y-=nt[De].velocity),nt.splice(De,1)}let re=!1;we.forEach((De,it)=>{if(it===Oe){De.offset.x=Ji(De.offset.x,L.x-b.x,Ve,.03),De.offset.y=Ji(De.offset.y,L.y-b.y,Ve,.03),De.velocity.x=0,De.velocity.y=0,re=!0;return}const{offset:pt,velocity:yt}=De;if(Math.abs(pt.x)<.05&&Math.abs(pt.y)<.05&&Math.hypot(yt.x,yt.y)<.5){pt.x=0,pt.y=0,yt.x=0,yt.y=0;return}yt.x+=(-fp*pt.x-Ct*yt.x)*Ve,yt.y+=(-fp*pt.y-Ct*yt.y)*Ve,pt.x+=yt.x*Ve,pt.y+=yt.y*Ve,re=!0});let fe=-1;if(Je&&mt==="type"){const De=.86/we.length,it=Math.min(we.length-1,Math.floor(Ee/De));fe=Ee<.93?it:-1,we.forEach((pt,yt)=>{pt.shown=yt<it?1:yt===it?ho(0,De*.3,Ee-yt*De):0})}else we.forEach(De=>{De.shown=1});const he=Je?fe:Oe>=0?Oe:k?Ie(q.x,q.y):-1;if(he>=0&&Pe.selection){const De=we[he],it=De.box.x1+De.offset.x-6,pt=De.box.y1+De.offset.y-6,yt=De.box.x2+De.offset.x+6,$e=De.box.y2+De.offset.y+6;(z.index<0||z.alpha<.02)&&(z.x1=it,z.y1=pt,z.x2=yt,z.y2=$e);const Nt=he===Oe?.02:.08;z.x1=Ji(z.x1,it,Ve,Nt),z.y1=Ji(z.y1,pt,Ve,Nt),z.x2=Ji(z.x2,yt,Ve,Nt),z.y2=Ji(z.y2,$e,Ve,Nt),z.index=he}z.alpha=Ji(z.alpha,he>=0&&Pe.selection?1:0,Ve,.1),we.forEach((De,it)=>{const pt=Je?mt==="type"&&(it===fe||fe>=0&&it>fe)?1:0:Pe.reveal==="letter"&&it===he&&it!==Oe?1:0;Je&&De.shown===0&&(De.outline=pt),De.outline=Ji(De.outline,pt,Ve,.09),Math.abs(De.outline-pt)>.002?re=!0:De.outline=pt}),j=Ji(j,Pe.guides&&!Je&&(he>=0||_t>.4)?1:0,Ve,.14);const We=!Je&&he>=0&&L.inside,ot=Oe>=0?"grabbing":We&&Pe.draggable?"grab":We&&Pe.clickKick?"pointer":"";ot!==He&&(He=ot,W.style.cursor=ot),D.setTransform(1,0,0,1,0,0),D.globalCompositeOperation="source-over",D.globalAlpha=1,D.clearRect(0,0,$.width,$.height);for(const De of we){const it=Math.hypot(De.offset.x,De.offset.y);it>1&&(D.globalAlpha=Math.min(1,it/24)*.55,st(D,De.dashes,0,0,0,0),D.globalAlpha=1)}Je&&mt==="metrics"?et(Pe,at,ct,1-ho(.84,1,Ee),De=>ho(.02+.04*De,.2+.04*De,Ee)):j>.005&&et(Pe,at,ct,j*.6,()=>1),we.forEach((De,it)=>{if(Je&&mt==="assemble"&&(Ye(De,at),Ee<De.assembled)){ft(De,Ee,ct);return}if(Je&&mt==="metrics"){const pt=we.length>1?it/(we.length-1):0;if(Ee<.72+.28*pt){Pt(De,pt,Ee,at);return}}De.shown<.001||(De.outline<.999&&(D.globalAlpha=(1-De.outline)*De.shown,st(D,De.fill,De.offset.x,De.offset.y,0,0)),De.outline>.001&&(D.globalAlpha=De.outline*De.shown,st(D,De.dashes,De.offset.x,De.offset.y,0,0)),D.globalAlpha=1)}),_t>.001&&dt(Pe),qe(Pe,ct);const Ze=re||Je||nt.length>0||j>.005&&j<.995||Math.abs(_t-(Pe.reveal==="area"&&k&&Oe<0?1:0))>.002||z.alpha>.01&&z.alpha<.99;(k||Ze)&&ie&&ne&&(J=requestAnimationFrame(xn))},gn=()=>{J||!ie||!ne||(Ke=performance.now(),J=requestAnimationFrame(xn))};ae.current=gn;const yi=()=>{rt=Math.max(1,W.clientWidth),je=Math.max(1,W.clientHeight),G=Math.min(window.devicePixelRatio||1,2),$.width=Math.round(rt*G),$.height=Math.round(je*G),xe="",gn()},Si=Ne=>{const Pe=W.getBoundingClientRect();L.x=Ne.clientX-Pe.left,L.y=Ne.clientY-Pe.top},Wn=Ne=>{Si(Ne),L.inside=!0,gn()},Tn=()=>{Oe>=0||(L.inside=!1,gn())},Gn=Ne=>{Si(Ne),L.inside=!0;const Pe=Q.current,Ve=Ne.pointerType!=="mouse"||Ne.button===0,tt=Je||!Ve?-1:Ie(L.x,L.y);ze.x=L.x,ze.y=L.y,ze.time=performance.now(),ze.index=tt,Pe?.draggable&&tt>=0&&(Oe=tt,b.x=L.x-we[tt].offset.x,b.y=L.y-we[tt].offset.y,W.setPointerCapture?.(Ne.pointerId)),gn()},Yn=Ne=>{if(Oe>=0){Oe=-1,W.releasePointerCapture?.(Ne.pointerId);const Pe=W.getBoundingClientRect();L.inside=Ne.clientX>=Pe.left&&Ne.clientX<=Pe.right&&Ne.clientY>=Pe.top&&Ne.clientY<=Pe.bottom}if(Ne.type==="pointerup"&&ze.index>=0&&Q.current?.clickKick&&!Te&&performance.now()-ze.time<450){const Pe=W.getBoundingClientRect();Math.hypot(Ne.clientX-Pe.left-ze.x,Ne.clientY-Pe.top-ze.y)<6&&Ft(ze.index)}ze.index=-1,gn()};W.addEventListener("pointermove",Wn,{passive:!0}),W.addEventListener("pointerenter",Wn,{passive:!0}),W.addEventListener("pointerdown",Gn,{passive:!0}),W.addEventListener("pointerup",Yn,{passive:!0}),W.addEventListener("pointercancel",Yn,{passive:!0}),W.addEventListener("pointerleave",Tn,{passive:!0});const Ht=new ResizeObserver(yi);Ht.observe(W);const Et=new IntersectionObserver(([Ne])=>{ie=Ne.isIntersecting,gn()});Et.observe(W);const Ot=new MutationObserver(gn);for(const Ne of[document.documentElement,document.body])Ne&&Ot.observe(Ne,{attributes:!0,attributeFilter:["class","style","data-theme"]});const An=window.matchMedia?.("(prefers-color-scheme: dark)");return An?.addEventListener?.("change",gn),document.fonts&&document.fonts.ready.then(Ce,Ce),yi(),()=>{ne=!1,cancelAnimationFrame(J),ae.current=()=>{},Ht.disconnect(),Et.disconnect(),Ot.disconnect(),An?.removeEventListener?.("change",gn),W.style.cursor="",W.removeEventListener("pointermove",Wn),W.removeEventListener("pointerenter",Wn),W.removeEventListener("pointerdown",Gn),W.removeEventListener("pointerup",Yn),W.removeEventListener("pointercancel",Yn),W.removeEventListener("pointerleave",Tn)}},[]),ve.jsx("div",{ref:ee,className:`tech-text ${H}`.trim(),style:V,role:"img","aria-label":a,children:ve.jsx("canvas",{ref:I,className:"tech-text-canvas"})})};function u0(a=2.2){const e=zt.useRef(null);function n(o){const c=e.current;if(!c||o.pointerType!=="mouse"||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const u=c.getBoundingClientRect(),d=o.clientX-u.left,p=o.clientY-u.top,m=(d/u.width-.5)*a*2,x=(.5-p/u.height)*a*2;c.style.setProperty("--spot-x",`${d}px`),c.style.setProperty("--spot-y",`${p}px`),c.style.setProperty("--tilt-x",`${m}deg`),c.style.setProperty("--tilt-y",`${x}deg`),c.classList.add("is-pointed")}function r(){const o=e.current;o&&(o.style.setProperty("--tilt-x","0deg"),o.style.setProperty("--tilt-y","0deg"),o.classList.remove("is-pointed"))}return{ref:e,onPointerMove:n,onPointerLeave:r}}const f0="186",ab=0,t1=1,rb=2,uf=1,sb=2,kl=3,Ms=0,Di=1,da=2,ur=0,Zl=1,n1=2,i1=3,a1=4,ob=5,Do=100,lb=101,cb=102,ub=103,fb=104,hb=200,db=201,pb=202,mb=203,Jy=204,$y=205,gb=206,vb=207,xb=208,_b=209,yb=210,Sb=211,Mb=212,Eb=213,bb=214,fm=0,hm=1,dm=2,tc=3,pm=4,mm=5,gm=6,vm=7,eS=0,Tb=1,Ab=2,Fa=0,tS=1,nS=2,iS=3,aS=4,rS=5,sS=6,h0=7,oS=300,Es=301,Io=302,dp=303,pp=304,Cf=306,Kr=1e3,Ua=1001,xm=1002,si=1003,wb=1004,Uu=1005,oi=1006,mp=1007,Yr=1008,Gi=1009,lS=1010,cS=1011,nc=1012,d0=1013,Ia=1014,Oa=1015,za=1016,p0=1017,m0=1018,ic=1020,uS=35902,fS=35899,hS=1021,dS=1022,pa=1023,hr=1026,Ss=1027,pS=1028,g0=1029,bs=1030,v0=1031,x0=1033,ff=33776,hf=33777,df=33778,pf=33779,_m=35840,ym=35841,Sm=35842,Mm=35843,Em=36196,bm=37492,Tm=37496,Am=37488,wm=37489,_f=37490,Rm=37491,Cm=37808,Dm=37809,Nm=37810,Lm=37811,Um=37812,Om=37813,Pm=37814,Fm=37815,Im=37816,zm=37817,Bm=37818,Hm=37819,Gm=37820,Vm=37821,km=36492,Xm=36494,qm=36495,Wm=36283,Ym=36284,yf=36285,Zm=36286,Rb=3200,Km=0,Cb=1,Wr="",_i="srgb",Sf="srgb-linear",Mf="linear",pn="srgb",gp=7680,Db=519,Nb=512,Lb=513,Ub=514,_0=515,Ob=516,Pb=517,y0=518,Fb=519,Ib=35044,r1="300 es",Pa=2e3,ac=2001;function zb(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Ef(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Bb(){const a=Ef("canvas");return a.style.display="block",a}const s1={};function o1(...a){const e="THREE."+a.shift();console.log(e,...a)}function mS(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=a[1];n&&n.isStackTrace?a[0]+=" "+n.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function Bt(...a){a=mS(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...a)}}function sn(...a){a=mS(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...a)}}function Po(...a){const e=a.join(" ");e in s1||(s1[e]=!0,Bt(...a))}function Hb(a,e,n){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}const Gb={[fm]:hm,[dm]:gm,[pm]:vm,[tc]:mm,[hm]:fm,[gm]:dm,[vm]:pm,[mm]:tc};class As{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const ui=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vp=Math.PI/180,Qm=180/Math.PI;function Go(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ui[a&255]+ui[a>>8&255]+ui[a>>16&255]+ui[a>>24&255]+"-"+ui[e&255]+ui[e>>8&255]+"-"+ui[e>>16&15|64]+ui[e>>24&255]+"-"+ui[n&63|128]+ui[n>>8&255]+"-"+ui[n>>16&255]+ui[n>>24&255]+ui[r&255]+ui[r>>8&255]+ui[r>>16&255]+ui[r>>24&255]).toLowerCase()}function jt(a,e,n){return Math.max(e,Math.min(n,a))}function Vb(a,e){return(a%e+e)%e}function xp(a,e,n){return(1-n)*a+n*e}function Ul(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:case Uint8ClampedArray:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ri(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const O0=class O0{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=jt(this.x,e.x,n.x),this.y=jt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=jt(this.x,e,n),this.y=jt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(jt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(jt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};O0.prototype.isVector2=!0;let gt=O0;class Ba{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,u,d){let p=r[o+0],m=r[o+1],x=r[o+2],g=r[o+3],v=c[u+0],_=c[u+1],E=c[u+2],C=c[u+3];if(g!==C||p!==v||m!==_||x!==E){let y=p*v+m*_+x*E+g*C;y<0&&(v=-v,_=-_,E=-E,C=-C,y=-y);let M=1-d;if(y<.9995){const U=Math.acos(y),B=Math.sin(U);M=Math.sin(M*U)/B,d=Math.sin(d*U)/B,p=p*M+v*d,m=m*M+_*d,x=x*M+E*d,g=g*M+C*d}else{p=p*M+v*d,m=m*M+_*d,x=x*M+E*d,g=g*M+C*d;const U=1/Math.sqrt(p*p+m*m+x*x+g*g);p*=U,m*=U,x*=U,g*=U}}e[n]=p,e[n+1]=m,e[n+2]=x,e[n+3]=g}static multiplyQuaternionsFlat(e,n,r,o,c,u){const d=r[o],p=r[o+1],m=r[o+2],x=r[o+3],g=c[u],v=c[u+1],_=c[u+2],E=c[u+3];return e[n]=d*E+x*g+p*_-m*v,e[n+1]=p*E+x*v+m*g-d*_,e[n+2]=m*E+x*_+d*v-p*g,e[n+3]=x*E-d*g-p*v-m*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,p=Math.sin,m=d(r/2),x=d(o/2),g=d(c/2),v=p(r/2),_=p(o/2),E=p(c/2);switch(u){case"XYZ":this._x=v*x*g+m*_*E,this._y=m*_*g-v*x*E,this._z=m*x*E+v*_*g,this._w=m*x*g-v*_*E;break;case"YXZ":this._x=v*x*g+m*_*E,this._y=m*_*g-v*x*E,this._z=m*x*E-v*_*g,this._w=m*x*g+v*_*E;break;case"ZXY":this._x=v*x*g-m*_*E,this._y=m*_*g+v*x*E,this._z=m*x*E+v*_*g,this._w=m*x*g-v*_*E;break;case"ZYX":this._x=v*x*g-m*_*E,this._y=m*_*g+v*x*E,this._z=m*x*E-v*_*g,this._w=m*x*g+v*_*E;break;case"YZX":this._x=v*x*g+m*_*E,this._y=m*_*g+v*x*E,this._z=m*x*E-v*_*g,this._w=m*x*g-v*_*E;break;case"XZY":this._x=v*x*g-m*_*E,this._y=m*_*g-v*x*E,this._z=m*x*E+v*_*g,this._w=m*x*g+v*_*E;break;default:Bt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],u=n[1],d=n[5],p=n[9],m=n[2],x=n[6],g=n[10],v=r+d+g;if(v>0){const _=.5/Math.sqrt(v+1);this._w=.25/_,this._x=(x-p)*_,this._y=(c-m)*_,this._z=(u-o)*_}else if(r>d&&r>g){const _=2*Math.sqrt(1+r-d-g);this._w=(x-p)/_,this._x=.25*_,this._y=(o+u)/_,this._z=(c+m)/_}else if(d>g){const _=2*Math.sqrt(1+d-r-g);this._w=(c-m)/_,this._x=(o+u)/_,this._y=.25*_,this._z=(p+x)/_}else{const _=2*Math.sqrt(1+g-r-d);this._w=(u-o)/_,this._x=(c+m)/_,this._y=(p+x)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,u=e._w,d=n._x,p=n._y,m=n._z,x=n._w;return this._x=r*x+u*d+o*m-c*p,this._y=o*x+u*p+c*d-r*m,this._z=c*x+u*m+r*p-o*d,this._w=u*x-r*d-o*p-c*m,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,c=-c,u=-u,d=-d);let p=1-n;if(d<.9995){const m=Math.acos(d),x=Math.sin(m);p=Math.sin(p*m)/x,n=Math.sin(n*m)/x,this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const P0=class P0{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(l1.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(l1.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,u=e.y,d=e.z,p=e.w,m=2*(u*o-d*r),x=2*(d*n-c*o),g=2*(c*r-u*n);return this.x=n+p*m+u*g-d*x,this.y=r+p*x+d*m-c*g,this.z=o+p*g+c*x-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=jt(this.x,e.x,n.x),this.y=jt(this.y,e.y,n.y),this.z=jt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=jt(this.x,e,n),this.y=jt(this.y,e,n),this.z=jt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(jt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,u=n.x,d=n.y,p=n.z;return this.x=o*p-c*d,this.y=c*u-r*p,this.z=r*d-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return _p.copy(this).projectOnVector(e),this.sub(_p)}reflect(e){return this.sub(_p.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(jt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};P0.prototype.isVector3=!0;let oe=P0;const _p=new oe,l1=new Ba,F0=class F0{constructor(e,n,r,o,c,u,d,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,d,p,m)}set(e,n,r,o,c,u,d,p,m){const x=this.elements;return x[0]=e,x[1]=o,x[2]=d,x[3]=n,x[4]=c,x[5]=p,x[6]=r,x[7]=u,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],d=r[3],p=r[6],m=r[1],x=r[4],g=r[7],v=r[2],_=r[5],E=r[8],C=o[0],y=o[3],M=o[6],U=o[1],B=o[4],R=o[7],O=o[2],P=o[5],F=o[8];return c[0]=u*C+d*U+p*O,c[3]=u*y+d*B+p*P,c[6]=u*M+d*R+p*F,c[1]=m*C+x*U+g*O,c[4]=m*y+x*B+g*P,c[7]=m*M+x*R+g*F,c[2]=v*C+_*U+E*O,c[5]=v*y+_*B+E*P,c[8]=v*M+_*R+E*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8];return n*u*x-n*d*m-r*c*x+r*d*p+o*c*m-o*u*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8],g=x*u-d*m,v=d*p-x*c,_=m*c-u*p,E=n*g+r*v+o*_;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=g*C,e[1]=(o*m-x*r)*C,e[2]=(d*r-o*u)*C,e[3]=v*C,e[4]=(x*n-o*p)*C,e[5]=(o*c-d*n)*C,e[6]=_*C,e[7]=(r*p-m*n)*C,e[8]=(u*n-r*c)*C,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,u,d){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*u+m*d)+u+e,-o*m,o*p,-o*(-m*u+p*d)+d+n,0,0,1),this}scale(e,n){return Po("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yp.makeScale(e,n)),this}rotate(e){return Po("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yp.makeRotation(-e)),this}translate(e,n){return Po("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yp.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};F0.prototype.isMatrix3=!0;let Vt=F0;const yp=new Vt,c1=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),u1=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kb(){const a={enabled:!0,workingColorSpace:Sf,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===pn&&(o.r=fr(o.r),o.g=fr(o.g),o.b=fr(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===pn&&(o.r=Fo(o.r),o.g=Fo(o.g),o.b=Fo(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Wr?Mf:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Po("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Po("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Sf]:{primaries:e,whitePoint:r,transfer:Mf,toXYZ:c1,fromXYZ:u1,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:e,whitePoint:r,transfer:pn,toXYZ:c1,fromXYZ:u1,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),a}const an=kb();function fr(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Fo(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let po;class Xb{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{po===void 0&&(po=Ef("canvas")),po.width=e.width,po.height=e.height;const o=po.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=po}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ef("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=fr(c[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(fr(n[r]/255)*255):n[r]=fr(n[r]);return{data:n,width:e.width,height:e.height}}else return Bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qb=0;class S0{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:qb++}),this.uuid=Go(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(Sp(o[u].image)):c.push(Sp(o[u]))}else c=Sp(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function Sp(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Xb.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(Bt("Texture: Unable to serialize Texture."),{})}let Wb=0;const Mp=new oe;let na=class mf extends As{constructor(e=mf.DEFAULT_IMAGE,n=mf.DEFAULT_MAPPING,r=Ua,o=Ua,c=oi,u=Yr,d=pa,p=Gi,m=mf.DEFAULT_ANISOTROPY,x=Wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wb++}),this.uuid=Go(),this.name="",this.source=new S0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Mp).x}get height(){return this.source.getSize(Mp).y}get depth(){return this.source.getSize(Mp).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){Bt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){Bt(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kr:e.x=e.x-Math.floor(e.x);break;case Ua:e.x=e.x<0?0:1;break;case xm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kr:e.y=e.y-Math.floor(e.y);break;case Ua:e.y=e.y<0?0:1;break;case xm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};na.DEFAULT_IMAGE=null;na.DEFAULT_MAPPING=oS;na.DEFAULT_ANISOTROPY=1;const I0=class I0{constructor(e=0,n=0,r=0,o=1){this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const p=e.elements,m=p[0],x=p[4],g=p[8],v=p[1],_=p[5],E=p[9],C=p[2],y=p[6],M=p[10];if(Math.abs(x-v)<.01&&Math.abs(g-C)<.01&&Math.abs(E-y)<.01){if(Math.abs(x+v)<.1&&Math.abs(g+C)<.1&&Math.abs(E+y)<.1&&Math.abs(m+_+M-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const B=(m+1)/2,R=(_+1)/2,O=(M+1)/2,P=(x+v)/4,F=(g+C)/4,w=(E+y)/4;return B>R&&B>O?B<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(B),o=P/r,c=F/r):R>O?R<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(R),r=P/o,c=w/o):O<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(O),r=F/c,o=w/c),this.set(r,o,c,n),this}let U=Math.sqrt((y-E)*(y-E)+(g-C)*(g-C)+(v-x)*(v-x));return Math.abs(U)<.001&&(U=1),this.x=(y-E)/U,this.y=(g-C)/U,this.z=(v-x)/U,this.w=Math.acos((m+_+M-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=jt(this.x,e.x,n.x),this.y=jt(this.y,e.y,n.y),this.z=jt(this.z,e.z,n.z),this.w=jt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=jt(this.x,e,n),this.y=jt(this.y,e,n),this.z=jt(this.z,e,n),this.w=jt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(jt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};I0.prototype.isVector4=!0;let Cn=I0,Yb=class extends As{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new Cn(0,0,e,n),this.scissorTest=!1,this.viewport=new Cn(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},c=new na(o),u=r.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:oi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new S0(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};class ga extends Yb{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class gS extends na{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=si,this.minFilter=si,this.wrapR=Ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zb extends na{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=si,this.minFilter=si,this.wrapR=Ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Rf=class Rf{constructor(e,n,r,o,c,u,d,p,m,x,g,v,_,E,C,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,d,p,m,x,g,v,_,E,C,y)}set(e,n,r,o,c,u,d,p,m,x,g,v,_,E,C,y){const M=this.elements;return M[0]=e,M[4]=n,M[8]=r,M[12]=o,M[1]=c,M[5]=u,M[9]=d,M[13]=p,M[2]=m,M[6]=x,M[10]=g,M[14]=v,M[3]=_,M[7]=E,M[11]=C,M[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rf().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,r=e.elements,o=1/mo.setFromMatrixColumn(e,0).length(),c=1/mo.setFromMatrixColumn(e,1).length(),u=1/mo.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),d=Math.sin(r),p=Math.cos(o),m=Math.sin(o),x=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const v=u*x,_=u*g,E=d*x,C=d*g;n[0]=p*x,n[4]=-p*g,n[8]=m,n[1]=_+E*m,n[5]=v-C*m,n[9]=-d*p,n[2]=C-v*m,n[6]=E+_*m,n[10]=u*p}else if(e.order==="YXZ"){const v=p*x,_=p*g,E=m*x,C=m*g;n[0]=v+C*d,n[4]=E*d-_,n[8]=u*m,n[1]=u*g,n[5]=u*x,n[9]=-d,n[2]=_*d-E,n[6]=C+v*d,n[10]=u*p}else if(e.order==="ZXY"){const v=p*x,_=p*g,E=m*x,C=m*g;n[0]=v-C*d,n[4]=-u*g,n[8]=E+_*d,n[1]=_+E*d,n[5]=u*x,n[9]=C-v*d,n[2]=-u*m,n[6]=d,n[10]=u*p}else if(e.order==="ZYX"){const v=u*x,_=u*g,E=d*x,C=d*g;n[0]=p*x,n[4]=E*m-_,n[8]=v*m+C,n[1]=p*g,n[5]=C*m+v,n[9]=_*m-E,n[2]=-m,n[6]=d*p,n[10]=u*p}else if(e.order==="YZX"){const v=u*p,_=u*m,E=d*p,C=d*m;n[0]=p*x,n[4]=C-v*g,n[8]=E*g+_,n[1]=g,n[5]=u*x,n[9]=-d*x,n[2]=-m*x,n[6]=_*g+E,n[10]=v-C*g}else if(e.order==="XZY"){const v=u*p,_=u*m,E=d*p,C=d*m;n[0]=p*x,n[4]=-g,n[8]=m*x,n[1]=v*g+C,n[5]=u*x,n[9]=_*g-E,n[2]=E*g-_,n[6]=d*x,n[10]=C*g+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kb,e,Qb)}lookAt(e,n,r){const o=this.elements;return Bi.subVectors(e,n),Bi.lengthSq()===0&&(Bi.z=1),Bi.normalize(),Br.crossVectors(r,Bi),Br.lengthSq()===0&&(Math.abs(r.z)===1?Bi.x+=1e-4:Bi.z+=1e-4,Bi.normalize(),Br.crossVectors(r,Bi)),Br.normalize(),Ou.crossVectors(Bi,Br),o[0]=Br.x,o[4]=Ou.x,o[8]=Bi.x,o[1]=Br.y,o[5]=Ou.y,o[9]=Bi.y,o[2]=Br.z,o[6]=Ou.z,o[10]=Bi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],d=r[4],p=r[8],m=r[12],x=r[1],g=r[5],v=r[9],_=r[13],E=r[2],C=r[6],y=r[10],M=r[14],U=r[3],B=r[7],R=r[11],O=r[15],P=o[0],F=o[4],w=o[8],T=o[12],H=o[1],V=o[5],ee=o[9],I=o[13],Q=o[2],ae=o[6],W=o[10],$=o[14],D=o[3],le=o[7],me=o[11],Te=o[15];return c[0]=u*P+d*H+p*Q+m*D,c[4]=u*F+d*V+p*ae+m*le,c[8]=u*w+d*ee+p*W+m*me,c[12]=u*T+d*I+p*$+m*Te,c[1]=x*P+g*H+v*Q+_*D,c[5]=x*F+g*V+v*ae+_*le,c[9]=x*w+g*ee+v*W+_*me,c[13]=x*T+g*I+v*$+_*Te,c[2]=E*P+C*H+y*Q+M*D,c[6]=E*F+C*V+y*ae+M*le,c[10]=E*w+C*ee+y*W+M*me,c[14]=E*T+C*I+y*$+M*Te,c[3]=U*P+B*H+R*Q+O*D,c[7]=U*F+B*V+R*ae+O*le,c[11]=U*w+B*ee+R*W+O*me,c[15]=U*T+B*I+R*$+O*Te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],u=e[1],d=e[5],p=e[9],m=e[13],x=e[2],g=e[6],v=e[10],_=e[14],E=e[3],C=e[7],y=e[11],M=e[15],U=p*_-m*v,B=d*_-m*g,R=d*v-p*g,O=u*_-m*x,P=u*v-p*x,F=u*g-d*x;return n*(C*U-y*B+M*R)-r*(E*U-y*O+M*P)+o*(E*B-C*O+M*F)-c*(E*R-C*P+y*F)}determinantAffine(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[1],u=e[5],d=e[9],p=e[2],m=e[6],x=e[10];return n*(u*x-d*m)-r*(c*x-d*p)+o*(c*m-u*p)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8],g=e[9],v=e[10],_=e[11],E=e[12],C=e[13],y=e[14],M=e[15],U=n*d-r*u,B=n*p-o*u,R=n*m-c*u,O=r*p-o*d,P=r*m-c*d,F=o*m-c*p,w=x*C-g*E,T=x*y-v*E,H=x*M-_*E,V=g*y-v*C,ee=g*M-_*C,I=v*M-_*y,Q=U*I-B*ee+R*V+O*H-P*T+F*w;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ae=1/Q;return e[0]=(d*I-p*ee+m*V)*ae,e[1]=(o*ee-r*I-c*V)*ae,e[2]=(C*F-y*P+M*O)*ae,e[3]=(v*P-g*F-_*O)*ae,e[4]=(p*H-u*I-m*T)*ae,e[5]=(n*I-o*H+c*T)*ae,e[6]=(y*R-E*F-M*B)*ae,e[7]=(x*F-v*R+_*B)*ae,e[8]=(u*ee-d*H+m*w)*ae,e[9]=(r*H-n*ee-c*w)*ae,e[10]=(E*P-C*R+M*U)*ae,e[11]=(g*R-x*P-_*U)*ae,e[12]=(d*T-u*V-p*w)*ae,e[13]=(n*V-r*T+o*w)*ae,e[14]=(C*B-E*O-y*U)*ae,e[15]=(x*O-g*B+v*U)*ae,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,u=e.x,d=e.y,p=e.z,m=c*u,x=c*d;return this.set(m*u+r,m*d-o*p,m*p+o*d,0,m*d+o*p,x*d+r,x*p-o*u,0,m*p-o*d,x*p+o*u,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,u=n._y,d=n._z,p=n._w,m=c+c,x=u+u,g=d+d,v=c*m,_=c*x,E=c*g,C=u*x,y=u*g,M=d*g,U=p*m,B=p*x,R=p*g,O=r.x,P=r.y,F=r.z;return o[0]=(1-(C+M))*O,o[1]=(_+R)*O,o[2]=(E-B)*O,o[3]=0,o[4]=(_-R)*P,o[5]=(1-(v+M))*P,o[6]=(y+U)*P,o[7]=0,o[8]=(E+B)*F,o[9]=(y-U)*F,o[10]=(1-(v+C))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),n.identity(),this;let u=mo.set(o[0],o[1],o[2]).length();const d=mo.set(o[4],o[5],o[6]).length(),p=mo.set(o[8],o[9],o[10]).length();c<0&&(u=-u),ca.copy(this);const m=1/u,x=1/d,g=1/p;return ca.elements[0]*=m,ca.elements[1]*=m,ca.elements[2]*=m,ca.elements[4]*=x,ca.elements[5]*=x,ca.elements[6]*=x,ca.elements[8]*=g,ca.elements[9]*=g,ca.elements[10]*=g,n.setFromRotationMatrix(ca),r.x=u,r.y=d,r.z=p,this}makePerspective(e,n,r,o,c,u,d=Pa,p=!1){const m=this.elements,x=2*c/(n-e),g=2*c/(r-o),v=(n+e)/(n-e),_=(r+o)/(r-o);let E,C;if(p)E=c/(u-c),C=u*c/(u-c);else if(d===Pa)E=-(u+c)/(u-c),C=-2*u*c/(u-c);else if(d===ac)E=-u/(u-c),C=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=_,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,r,o,c,u,d=Pa,p=!1){const m=this.elements,x=2/(n-e),g=2/(r-o),v=-(n+e)/(n-e),_=-(r+o)/(r-o);let E,C;if(p)E=1/(u-c),C=u/(u-c);else if(d===Pa)E=-2/(u-c),C=-(u+c)/(u-c);else if(d===ac)E=-1/(u-c),C=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=0,m[12]=v,m[1]=0,m[5]=g,m[9]=0,m[13]=_,m[2]=0,m[6]=0,m[10]=E,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};Rf.prototype.isMatrix4=!0;let En=Rf;const mo=new oe,ca=new En,Kb=new oe(0,0,0),Qb=new oe(1,1,1),Br=new oe,Ou=new oe,Bi=new oe,f1=new En,h1=new Ba;let zo=class vS{constructor(e=0,n=0,r=0,o=vS.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],p=o[1],m=o[5],x=o[9],g=o[2],v=o[6],_=o[10];switch(n){case"XYZ":this._y=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,_),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,_),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(jt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,_),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-jt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,_),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(jt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,_));break;case"XZY":this._z=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-x,_),this._y=0);break;default:Bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return f1.makeRotationFromQuaternion(e),this.setFromRotationMatrix(f1,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return h1.setFromEuler(this),this.setFromQuaternion(h1,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zo.DEFAULT_ORDER="XYZ";class M0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jb=0;const d1=new oe,go=new Ba,nr=new En,Pu=new oe,Ol=new oe,Jb=new oe,$b=new Ba,p1=new oe(1,0,0),m1=new oe(0,1,0),g1=new oe(0,0,1),v1={type:"added"},eT={type:"removed"},vo={type:"childadded",child:null},Ep={type:"childremoved",child:null};class di extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jb++}),this.uuid=Go(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=di.DEFAULT_UP.clone();const e=new oe,n=new zo,r=new Ba,o=new oe(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new En},normalMatrix:{value:new Vt}}),this.matrix=new En,this.matrixWorld=new En,this.matrixAutoUpdate=di.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=di.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new M0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return go.setFromAxisAngle(e,n),this.quaternion.multiply(go),this}rotateOnWorldAxis(e,n){return go.setFromAxisAngle(e,n),this.quaternion.premultiply(go),this}rotateX(e){return this.rotateOnAxis(p1,e)}rotateY(e){return this.rotateOnAxis(m1,e)}rotateZ(e){return this.rotateOnAxis(g1,e)}translateOnAxis(e,n){return d1.copy(e).applyQuaternion(this.quaternion),this.position.add(d1.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(p1,e)}translateY(e){return this.translateOnAxis(m1,e)}translateZ(e){return this.translateOnAxis(g1,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nr.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Pu.copy(e):Pu.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ol.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nr.lookAt(Ol,Pu,this.up):nr.lookAt(Pu,Ol,this.up),this.quaternion.setFromRotationMatrix(nr),o&&(nr.extractRotation(o.matrixWorld),go.setFromRotationMatrix(nr),this.quaternion.premultiply(go.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(sn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(v1),vo.child=e,this.dispatchEvent(vo),vo.child=null):sn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(eT),Ep.child=e,this.dispatchEvent(Ep),Ep.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),nr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nr.multiply(e.parent.matrixWorld)),e.applyMatrix4(nr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(v1),vo.child=e,this.dispatchEvent(vo),vo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ol,e,Jb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ol,$b,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*r-c[8]*o,c[13]+=r-c[1]*n-c[5]*r-c[9]*o,c[14]+=o-c[2]*n-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),n===!0){const c=this.children;for(let u=0,d=c.length;u<d;u++)c[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,x=p.length;m<x;m++){const g=p[m];c(e.shapes,g)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(c(e.animations,p))}}if(n){const d=u(e.geometries),p=u(e.materials),m=u(e.textures),x=u(e.images),g=u(e.shapes),v=u(e.skeletons),_=u(e.animations),E=u(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),x.length>0&&(r.images=x),g.length>0&&(r.shapes=g),v.length>0&&(r.skeletons=v),_.length>0&&(r.animations=_),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(d){const p=[];for(const m in d){const x=d[m];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}di.DEFAULT_UP=new oe(0,1,0);di.DEFAULT_MATRIX_AUTO_UPDATE=!0;di.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Uo extends di{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tT={type:"move"};class bp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,u=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const C of e.hand.values()){const y=n.getJointPose(C,r),M=this._getHandJoint(m,C);y!==null&&(M.matrix.fromArray(y.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=y.radius),M.visible=y!==null}const x=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],v=x.position.distanceTo(g.position),_=.02,E=.005;m.inputState.pinching&&v>_+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=_-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(tT)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Uo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const xS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},Fu={h:0,s:0,l:0};function Tp(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class Qt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=_i){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,an.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=an.workingColorSpace){return this.r=e,this.g=n,this.b=r,an.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=an.workingColorSpace){if(e=Vb(e,1),n=jt(n,0,1),r=jt(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=Tp(u,c,e+1/3),this.g=Tp(u,c,e),this.b=Tp(u,c,e-1/3)}return an.colorSpaceToWorking(this,o),this}setStyle(e,n=_i){function r(c){c!==void 0&&parseFloat(c)<1&&Bt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:Bt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);Bt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=_i){const r=xS[e.toLowerCase()];return r!==void 0?this.setHex(r,n):Bt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}copyLinearToSRGB(e){return this.r=Fo(e.r),this.g=Fo(e.g),this.b=Fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_i){return an.workingToColorSpace(fi.copy(this),e),Math.round(jt(fi.r*255,0,255))*65536+Math.round(jt(fi.g*255,0,255))*256+Math.round(jt(fi.b*255,0,255))}getHexString(e=_i){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=an.workingColorSpace){an.workingToColorSpace(fi.copy(this),n);const r=fi.r,o=fi.g,c=fi.b,u=Math.max(r,o,c),d=Math.min(r,o,c);let p,m;const x=(d+u)/2;if(d===u)p=0,m=0;else{const g=u-d;switch(m=x<=.5?g/(u+d):g/(2-u-d),u){case r:p=(o-c)/g+(o<c?6:0);break;case o:p=(c-r)/g+2;break;case c:p=(r-o)/g+4;break}p/=6}return e.h=p,e.s=m,e.l=x,e}getRGB(e,n=an.workingColorSpace){return an.workingToColorSpace(fi.copy(this),n),e.r=fi.r,e.g=fi.g,e.b=fi.b,e}getStyle(e=_i){an.workingToColorSpace(fi.copy(this),e);const n=fi.r,r=fi.g,o=fi.b;return e!==_i?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(Hr),this.setHSL(Hr.h+e,Hr.s+n,Hr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Hr),e.getHSL(Fu);const r=xp(Hr.h,Fu.h,n),o=xp(Hr.s,Fu.s,n),c=xp(Hr.l,Fu.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fi=new Qt;Qt.NAMES=xS;class _S extends di{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zo,this.environmentIntensity=1,this.environmentRotation=new zo,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ua=new oe,ir=new oe,Ap=new oe,ar=new oe,xo=new oe,_o=new oe,x1=new oe,wp=new oe,Rp=new oe,Cp=new oe,Dp=new Cn,Np=new Cn,Lp=new Cn;let Pl=class No{constructor(e=new oe,n=new oe,r=new oe){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),ua.subVectors(e,n),o.cross(ua);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){ua.subVectors(o,n),ir.subVectors(r,n),Ap.subVectors(e,n);const u=ua.dot(ua),d=ua.dot(ir),p=ua.dot(Ap),m=ir.dot(ir),x=ir.dot(Ap),g=u*m-d*d;if(g===0)return c.set(0,0,0),null;const v=1/g,_=(m*p-d*x)*v,E=(u*x-d*p)*v;return c.set(1-_-E,E,_)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,ar)===null?!1:ar.x>=0&&ar.y>=0&&ar.x+ar.y<=1}static getInterpolation(e,n,r,o,c,u,d,p){return this.getBarycoord(e,n,r,o,ar)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,ar.x),p.addScaledVector(u,ar.y),p.addScaledVector(d,ar.z),p)}static getInterpolatedAttribute(e,n,r,o,c,u){return Dp.setScalar(0),Np.setScalar(0),Lp.setScalar(0),Dp.fromBufferAttribute(e,n),Np.fromBufferAttribute(e,r),Lp.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Dp,c.x),u.addScaledVector(Np,c.y),u.addScaledVector(Lp,c.z),u}static isFrontFacing(e,n,r,o){return ua.subVectors(r,n),ir.subVectors(e,n),ua.cross(ir).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ua.subVectors(this.c,this.b),ir.subVectors(this.a,this.b),ua.cross(ir).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return No.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return No.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return No.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return No.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return No.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let u,d;xo.subVectors(o,r),_o.subVectors(c,r),wp.subVectors(e,r);const p=xo.dot(wp),m=_o.dot(wp);if(p<=0&&m<=0)return n.copy(r);Rp.subVectors(e,o);const x=xo.dot(Rp),g=_o.dot(Rp);if(x>=0&&g<=x)return n.copy(o);const v=p*g-x*m;if(v<=0&&p>=0&&x<=0)return u=p/(p-x),n.copy(r).addScaledVector(xo,u);Cp.subVectors(e,c);const _=xo.dot(Cp),E=_o.dot(Cp);if(E>=0&&_<=E)return n.copy(c);const C=_*m-p*E;if(C<=0&&m>=0&&E<=0)return d=m/(m-E),n.copy(r).addScaledVector(_o,d);const y=x*E-_*g;if(y<=0&&g-x>=0&&_-E>=0)return x1.subVectors(c,o),d=(g-x)/(g-x+(_-E)),n.copy(o).addScaledVector(x1,d);const M=1/(y+C+v);return u=C*M,d=v*M,n.copy(r).addScaledVector(xo,u).addScaledVector(_o,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};class uc{constructor(e=new oe(1/0,1/0,1/0),n=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(fa.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(fa.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=fa.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,fa):fa.fromBufferAttribute(c,u),fa.applyMatrix4(e.matrixWorld),this.expandByPoint(fa);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Iu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Iu.copy(r.boundingBox)),Iu.applyMatrix4(e.matrixWorld),this.union(Iu)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fa),fa.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fl),zu.subVectors(this.max,Fl),yo.subVectors(e.a,Fl),So.subVectors(e.b,Fl),Mo.subVectors(e.c,Fl),Gr.subVectors(So,yo),Vr.subVectors(Mo,So),gs.subVectors(yo,Mo);let n=[0,-Gr.z,Gr.y,0,-Vr.z,Vr.y,0,-gs.z,gs.y,Gr.z,0,-Gr.x,Vr.z,0,-Vr.x,gs.z,0,-gs.x,-Gr.y,Gr.x,0,-Vr.y,Vr.x,0,-gs.y,gs.x,0];return!Up(n,yo,So,Mo,zu)||(n=[1,0,0,0,1,0,0,0,1],!Up(n,yo,So,Mo,zu))?!1:(Bu.crossVectors(Gr,Vr),n=[Bu.x,Bu.y,Bu.z],Up(n,yo,So,Mo,zu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fa).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fa).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const rr=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],fa=new oe,Iu=new uc,yo=new oe,So=new oe,Mo=new oe,Gr=new oe,Vr=new oe,gs=new oe,Fl=new oe,zu=new oe,Bu=new oe,vs=new oe;function Up(a,e,n,r,o){for(let c=0,u=a.length-3;c<=u;c+=3){vs.fromArray(a,c);const d=o.x*Math.abs(vs.x)+o.y*Math.abs(vs.y)+o.z*Math.abs(vs.z),p=e.dot(vs),m=n.dot(vs),x=r.dot(vs);if(Math.max(-Math.max(p,m,x),Math.min(p,m,x))>d)return!1}return!0}const Bn=new oe,Hu=new gt;let nT=0;class ta extends As{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nT++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Ib,this.updateRanges=[],this.gpuType=Oa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Hu.fromBufferAttribute(this,n),Hu.applyMatrix3(e),this.setXY(n,Hu.x,Hu.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Bn.fromBufferAttribute(this,n),Bn.applyMatrix3(e),this.setXYZ(n,Bn.x,Bn.y,Bn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Bn.fromBufferAttribute(this,n),Bn.applyMatrix4(e),this.setXYZ(n,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Bn.fromBufferAttribute(this,n),Bn.applyNormalMatrix(e),this.setXYZ(n,Bn.x,Bn.y,Bn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Bn.fromBufferAttribute(this,n),Bn.transformDirection(e),this.setXYZ(n,Bn.x,Bn.y,Bn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ul(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Ri(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ul(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ri(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ul(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ri(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ul(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ri(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ul(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ri(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Ri(n,this.array),r=Ri(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Ri(n,this.array),r=Ri(r,this.array),o=Ri(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=Ri(n,this.array),r=Ri(r,this.array),o=Ri(o,this.array),c=Ri(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class yS extends ta{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class SS extends ta{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class li extends ta{constructor(e,n,r){super(new Float32Array(e),n,r)}}const iT=new uc,Il=new oe,Op=new oe;class E0{constructor(e=new oe,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):iT.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Il.subVectors(e,this.center);const n=Il.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Il,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Op.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Il.copy(e.center).add(Op)),this.expandByPoint(Il.copy(e.center).sub(Op))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let aT=0;const $i=new En,Pp=new di,Eo=new oe,Hi=new uc,zl=new uc,jn=new oe;class Vi extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aT++}),this.uuid=Go(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zb(e)?SS:yS)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new Vt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return $i.makeRotationFromQuaternion(e),this.applyMatrix4($i),this}rotateX(e){return $i.makeRotationX(e),this.applyMatrix4($i),this}rotateY(e){return $i.makeRotationY(e),this.applyMatrix4($i),this}rotateZ(e){return $i.makeRotationZ(e),this.applyMatrix4($i),this}translate(e,n,r){return $i.makeTranslation(e,n,r),this.applyMatrix4($i),this}scale(e,n,r){return $i.makeScale(e,n,r),this.applyMatrix4($i),this}lookAt(e){return Pp.lookAt(e),Pp.updateMatrix(),this.applyMatrix4(Pp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Eo).negate(),this.translate(Eo.x,Eo.y,Eo.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new li(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&Bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new uc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){sn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];Hi.setFromBufferAttribute(c),this.morphTargetsRelative?(jn.addVectors(this.boundingBox.min,Hi.min),this.boundingBox.expandByPoint(jn),jn.addVectors(this.boundingBox.max,Hi.max),this.boundingBox.expandByPoint(jn)):(this.boundingBox.expandByPoint(Hi.min),this.boundingBox.expandByPoint(Hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&sn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new E0);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){sn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const r=this.boundingSphere.center;if(Hi.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];zl.setFromBufferAttribute(d),this.morphTargetsRelative?(jn.addVectors(Hi.min,zl.min),Hi.expandByPoint(jn),jn.addVectors(Hi.max,zl.max),Hi.expandByPoint(jn)):(Hi.expandByPoint(zl.min),Hi.expandByPoint(zl.max))}Hi.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)jn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(jn));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],p=this.morphTargetsRelative;for(let m=0,x=d.count;m<x;m++)jn.fromBufferAttribute(d,m),p&&(Eo.fromBufferAttribute(e,m),jn.add(Eo)),o=Math.max(o,r.distanceToSquared(jn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&sn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){sn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new ta(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const d=[],p=[];for(let w=0;w<r.count;w++)d[w]=new oe,p[w]=new oe;const m=new oe,x=new oe,g=new oe,v=new gt,_=new gt,E=new gt,C=new oe,y=new oe;function M(w,T,H){m.fromBufferAttribute(r,w),x.fromBufferAttribute(r,T),g.fromBufferAttribute(r,H),v.fromBufferAttribute(c,w),_.fromBufferAttribute(c,T),E.fromBufferAttribute(c,H),x.sub(m),g.sub(m),_.sub(v),E.sub(v);const V=1/(_.x*E.y-E.x*_.y);isFinite(V)&&(C.copy(x).multiplyScalar(E.y).addScaledVector(g,-_.y).multiplyScalar(V),y.copy(g).multiplyScalar(_.x).addScaledVector(x,-E.x).multiplyScalar(V),d[w].add(C),d[T].add(C),d[H].add(C),p[w].add(y),p[T].add(y),p[H].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let w=0,T=U.length;w<T;++w){const H=U[w],V=H.start,ee=H.count;for(let I=V,Q=V+ee;I<Q;I+=3)M(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const B=new oe,R=new oe,O=new oe,P=new oe;function F(w){O.fromBufferAttribute(o,w),P.copy(O);const T=d[w];B.copy(T),B.sub(O.multiplyScalar(O.dot(T))).normalize(),R.crossVectors(P,T);const V=R.dot(p[w])<0?-1:1;u.setXYZW(w,B.x,B.y,B.z,V)}for(let w=0,T=U.length;w<T;++w){const H=U[w],V=H.start,ee=H.count;for(let I=V,Q=V+ee;I<Q;I+=3)F(e.getX(I+0)),F(e.getX(I+1)),F(e.getX(I+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==n.count)r=new ta(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let v=0,_=r.count;v<_;v++)r.setXYZ(v,0,0,0);const o=new oe,c=new oe,u=new oe,d=new oe,p=new oe,m=new oe,x=new oe,g=new oe;if(e)for(let v=0,_=e.count;v<_;v+=3){const E=e.getX(v+0),C=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(n,E),c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,y),x.subVectors(u,c),g.subVectors(o,c),x.cross(g),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,y),d.add(x),p.add(x),m.add(x),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let v=0,_=n.count;v<_;v+=3)o.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),x.subVectors(u,c),g.subVectors(o,c),x.cross(g),r.setXYZ(v+0,x.x,x.y,x.z),r.setXYZ(v+1,x.x,x.y,x.z),r.setXYZ(v+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)jn.fromBufferAttribute(e,n),jn.normalize(),e.setXYZ(n,jn.x,jn.y,jn.z)}toNonIndexed(){function e(d,p){const m=d.array,x=d.itemSize,g=d.normalized,v=new m.constructor(p.length*x);let _=0,E=0;for(let C=0,y=p.length;C<y;C++){d.isInterleavedBufferAttribute?_=p[C]*d.data.stride+d.offset:_=p[C]*x;for(let M=0;M<x;M++)v[E++]=m[_++]}return new ta(v,x,g)}if(this.index===null)return Bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Vi,r=this.index.array,o=this.attributes;for(const d in o){const p=o[d],m=e(p,r);n.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let x=0,g=m.length;x<g;x++){const v=m[x],_=e(v,r);p.push(_)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const m=u[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],x=[];for(let g=0,v=m.length;g<v;g++){const _=m[g];x.push(_.toJSON(e.data))}x.length>0&&(o[p]=x,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const x=o[m];this.setAttribute(m,x.clone(n))}const c=e.morphAttributes;for(const m in c){const x=[],g=c[m];for(let v=0,_=g.length;v<_;v++)x.push(g[v].clone(n));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,x=u.length;m<x;m++){const g=u[m];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fp=new oe,rT=new oe,sT=new Vt;class qr{constructor(e=new oe(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Fp.subVectors(r,n).cross(rT.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const o=e.delta(Fp),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||sT.getNormalMatrix(e),o=this.coplanarPoint(Fp).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let oT=0;class fc extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oT++}),this.uuid=Go(),this.name="",this.type="Material",this.blending=Zl,this.side=Ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jy,this.blendDst=$y,this.blendEquation=Do,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=tc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Db,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gp,this.stencilZFail=gp,this.stencilZPass=gp,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){Bt(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){Bt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(c=>c.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const d in c){const p=c[d];delete p.metadata,u.push(p)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Qt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new qr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new gt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new gt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const sr=new oe,Ip=new oe,Gu=new oe,Vu=new oe;class MS{constructor(e=new oe,n=new oe(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=sr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(sr.copy(this.origin).addScaledVector(this.direction,n),sr.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Ip.copy(e).add(n).multiplyScalar(.5),Gu.copy(n).sub(e).normalize(),Vu.copy(this.origin).sub(Ip);const c=e.distanceTo(n)*.5,u=-this.direction.dot(Gu),d=Vu.dot(this.direction),p=-Vu.dot(Gu),m=Vu.lengthSq(),x=Math.abs(1-u*u);let g,v,_,E;if(x>0)if(g=u*p-d,v=u*d-p,E=c*x,g>=0)if(v>=-E)if(v<=E){const C=1/x;g*=C,v*=C,_=g*(g+u*v+2*d)+v*(u*g+v+2*p)+m}else v=c,g=Math.max(0,-(u*v+d)),_=-g*g+v*(v+2*p)+m;else v=-c,g=Math.max(0,-(u*v+d)),_=-g*g+v*(v+2*p)+m;else v<=-E?(g=Math.max(0,-(-u*c+d)),v=g>0?-c:Math.min(Math.max(-c,-p),c),_=-g*g+v*(v+2*p)+m):v<=E?(g=0,v=Math.min(Math.max(-c,-p),c),_=v*(v+2*p)+m):(g=Math.max(0,-(u*c+d)),v=g>0?c:Math.min(Math.max(-c,-p),c),_=-g*g+v*(v+2*p)+m);else v=u>0?-c:c,g=Math.max(0,-(u*v+d)),_=-g*g+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Ip).addScaledVector(Gu,v),_}intersectSphere(e,n){if(e.radius<0)return null;sr.subVectors(e.center,this.origin);const r=sr.dot(this.direction),o=sr.dot(sr)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=r-u,p=r+u;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,u,d,p;const m=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,v=this.origin;return m>=0?(r=(e.min.x-v.x)*m,o=(e.max.x-v.x)*m):(r=(e.max.x-v.x)*m,o=(e.min.x-v.x)*m),x>=0?(c=(e.min.y-v.y)*x,u=(e.max.y-v.y)*x):(c=(e.max.y-v.y)*x,u=(e.min.y-v.y)*x),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),g>=0?(d=(e.min.z-v.z)*g,p=(e.max.z-v.z)*g):(d=(e.max.z-v.z)*g,p=(e.min.z-v.z)*g),r>p||d>o)||((d>r||r!==r)&&(r=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,sr)!==null}intersectTriangle(e,n,r,o,c){const u=this.origin,d=this.direction,p=d.x,m=d.y,x=d.z,g=e.x-u.x,v=e.y-u.y,_=e.z-u.z,E=n.x-u.x,C=n.y-u.y,y=n.z-u.z,M=r.x-u.x,U=r.y-u.y,B=r.z-u.z,R=Math.abs(p),O=Math.abs(m),P=Math.abs(x);let F,w,T,H,V,ee,I,Q,ae,W,$,D;if(R>=O&&R>=P?(T=p,ee=g,ae=E,D=M,p>=0?(F=m,w=x,H=v,V=_,I=C,Q=y,W=U,$=B):(F=x,w=m,H=_,V=v,I=y,Q=C,W=B,$=U)):O>=P?(T=m,ee=v,ae=C,D=U,m>=0?(F=x,w=p,H=_,V=g,I=y,Q=E,W=B,$=M):(F=p,w=x,H=g,V=_,I=E,Q=y,W=M,$=B)):(T=x,ee=_,ae=y,D=B,x>=0?(F=p,w=m,H=g,V=v,I=E,Q=C,W=M,$=U):(F=m,w=p,H=v,V=g,I=C,Q=E,W=U,$=M)),T===0)return null;const le=F/T,me=w/T,Te=1/T,rt=H-le*ee,je=V-me*ee,G=I-le*ae,J=Q-me*ae,Ke=W-le*D,ie=$-me*D,ne=Ke*J-ie*G,xe=rt*ie-je*Ke,Ue=G*je-J*rt;if(o){if(ne<0||xe<0||Ue<0)return null}else if((ne<0||xe<0||Ue<0)&&(ne>0||xe>0||Ue>0))return null;const ye=ne+xe+Ue;if(ye===0)return null;const we=Te*(ne*ee+xe*ae+Ue*D);return(ye>0?we<0:we>0)?null:this.at(we/ye,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class b0 extends fc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zo,this.combine=eS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _1=new En,xs=new MS,ku=new E0,y1=new oe,Xu=new oe,qu=new oe,Wu=new oe,zp=new oe,Yu=new oe,S1=new oe,Zu=new oe;let ri=class extends di{constructor(e=new Vi,n=new b0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){Yu.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const x=d[p],g=c[p];x!==0&&(zp.fromBufferAttribute(g,e),u?Yu.addScaledVector(zp,x):Yu.addScaledVector(zp.sub(n),x))}n.add(Yu)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ku.copy(r.boundingSphere),ku.applyMatrix4(c),xs.copy(e.ray).recast(e.near),!(ku.containsPoint(xs.origin)===!1&&(xs.intersectSphere(ku,y1)===null||xs.origin.distanceToSquared(y1)>(e.far-e.near)**2))&&(_1.copy(c).invert(),xs.copy(e.ray).applyMatrix4(_1),!(r.boundingBox!==null&&xs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,xs)))}_computeIntersections(e,n,r){let o;const c=this.geometry,u=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,x=c.attributes.uv1,g=c.attributes.normal,v=c.groups,_=c.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,C=v.length;E<C;E++){const y=v[E],M=u[y.materialIndex],U=Math.max(y.start,_.start),B=Math.min(d.count,Math.min(y.start+y.count,_.start+_.count));for(let R=U,O=B;R<O;R+=3){const P=d.getX(R),F=d.getX(R+1),w=d.getX(R+2);o=Ku(this,M,e,r,m,x,g,P,F,w),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const E=Math.max(0,_.start),C=Math.min(d.count,_.start+_.count);for(let y=E,M=C;y<M;y+=3){const U=d.getX(y),B=d.getX(y+1),R=d.getX(y+2);o=Ku(this,u,e,r,m,x,g,U,B,R),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let E=0,C=v.length;E<C;E++){const y=v[E],M=u[y.materialIndex],U=Math.max(y.start,_.start),B=Math.min(p.count,Math.min(y.start+y.count,_.start+_.count));for(let R=U,O=B;R<O;R+=3){const P=R,F=R+1,w=R+2;o=Ku(this,M,e,r,m,x,g,P,F,w),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const E=Math.max(0,_.start),C=Math.min(p.count,_.start+_.count);for(let y=E,M=C;y<M;y+=3){const U=y,B=y+1,R=y+2;o=Ku(this,u,e,r,m,x,g,U,B,R),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}};function lT(a,e,n,r,o,c,u,d){let p;if(e.side===Di?p=r.intersectTriangle(u,c,o,!0,d):p=r.intersectTriangle(o,c,u,e.side===Ms,d),p===null)return null;Zu.copy(d),Zu.applyMatrix4(a.matrixWorld);const m=n.ray.origin.distanceTo(Zu);return m<n.near||m>n.far?null:{distance:m,point:Zu.clone(),object:a}}function Ku(a,e,n,r,o,c,u,d,p,m){a.getVertexPosition(d,Xu),a.getVertexPosition(p,qu),a.getVertexPosition(m,Wu);const x=lT(a,e,n,r,Xu,qu,Wu,S1);if(x){const g=new oe;Pl.getBarycoord(S1,Xu,qu,Wu,g),o&&(x.uv=Pl.getInterpolatedAttribute(o,d,p,m,g,new gt)),c&&(x.uv1=Pl.getInterpolatedAttribute(c,d,p,m,g,new gt)),u&&(x.normal=Pl.getInterpolatedAttribute(u,d,p,m,g,new oe),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const v={a:d,b:p,c:m,normal:new oe,materialIndex:0};Pl.getNormal(Xu,qu,Wu,v.normal),x.face=v,x.barycoord=g}return x}class ES extends na{constructor(e=null,n=1,r=1,o,c,u,d,p,m=si,x=si,g,v){super(null,u,d,p,m,x,o,c,g,v),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _s=new E0,cT=new gt(.5,.5),Qu=new oe;class T0{constructor(e=new qr,n=new qr,r=new qr,o=new qr,c=new qr,u=new qr){this.planes=[e,n,r,o,c,u]}set(e,n,r,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Pa,r=!1){const o=this.planes,c=e.elements,u=c[0],d=c[1],p=c[2],m=c[3],x=c[4],g=c[5],v=c[6],_=c[7],E=c[8],C=c[9],y=c[10],M=c[11],U=c[12],B=c[13],R=c[14],O=c[15];if(o[0].setComponents(m-u,_-x,M-E,O-U).normalize(),o[1].setComponents(m+u,_+x,M+E,O+U).normalize(),o[2].setComponents(m+d,_+g,M+C,O+B).normalize(),o[3].setComponents(m-d,_-g,M-C,O-B).normalize(),r)o[4].setComponents(p,v,y,R).normalize(),o[5].setComponents(m-p,_-v,M-y,O-R).normalize();else if(o[4].setComponents(m-p,_-v,M-y,O-R).normalize(),n===Pa)o[5].setComponents(m+p,_+v,M+y,O+R).normalize();else if(n===ac)o[5].setComponents(p,v,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){_s.center.set(0,0,0);const n=cT.distanceTo(e.center);return _s.radius=.7071067811865476+n,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Qu.x=o.normal.x>0?e.max.x:e.min.x,Qu.y=o.normal.y>0?e.max.y:e.min.y,Qu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Qu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bS extends na{constructor(e=[],n=Es,r,o,c,u,d,p,m,x){super(e,n,r,o,c,u,d,p,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jm extends na{constructor(e,n,r,o,c,u,d,p,m){super(e,n,r,o,c,u,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class rc extends na{constructor(e,n,r=Ia,o,c,u,d=si,p=si,m,x=hr,g=1){if(x!==hr&&x!==Ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:n,depth:g};super(v,o,c,u,d,p,x,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new S0(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class uT extends rc{constructor(e,n=Ia,r=Es,o,c,u=si,d=si,p,m=hr){const x={width:e,height:e,depth:1},g=[x,x,x,x,x,x];super(e,e,n,r,o,c,u,d,p,m),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class TS extends na{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class hc extends Vi{constructor(e=1,n=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],m=[],x=[],g=[];let v=0,_=0;E("z","y","x",-1,-1,r,n,e,u,c,0),E("z","y","x",1,-1,r,n,-e,u,c,1),E("x","z","y",1,1,e,r,n,o,u,2),E("x","z","y",1,-1,e,r,-n,o,u,3),E("x","y","z",1,-1,e,n,r,o,c,4),E("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(p),this.setAttribute("position",new li(m,3)),this.setAttribute("normal",new li(x,3)),this.setAttribute("uv",new li(g,2));function E(C,y,M,U,B,R,O,P,F,w,T){const H=R/F,V=O/w,ee=R/2,I=O/2,Q=P/2,ae=F+1,W=w+1;let $=0,D=0;const le=new oe;for(let me=0;me<W;me++){const Te=me*V-I;for(let rt=0;rt<ae;rt++){const je=rt*H-ee;le[C]=je*U,le[y]=Te*B,le[M]=Q,m.push(le.x,le.y,le.z),le[C]=0,le[y]=0,le[M]=P>0?1:-1,x.push(le.x,le.y,le.z),g.push(rt/F),g.push(1-me/w),$+=1}}for(let me=0;me<w;me++)for(let Te=0;Te<F;Te++){const rt=v+Te+ae*me,je=v+Te+ae*(me+1),G=v+(Te+1)+ae*(me+1),J=v+(Te+1)+ae*me;p.push(rt,je,J),p.push(je,G,J),D+=6}d.addGroup(_,D,T),_+=D,v+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ga{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Bt("Curve: .getPoint() not implemented.")}getPointAt(e,n){const r=this.getUtoTmapping(e);return this.getPoint(r,n)}getPoints(e=5){const n=[];for(let r=0;r<=e;r++)n.push(this.getPoint(r/e));return n}getSpacedPoints(e=5){const n=[];for(let r=0;r<=e;r++)n.push(this.getPointAt(r/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let r,o=this.getPoint(0),c=0;n.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),c+=r.distanceTo(o),n.push(c),o=r;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const r=this.getLengths();let o=0;const c=r.length;let u;n?u=n:u=e*r[c-1];let d=0,p=c-1,m;for(;d<=p;)if(o=Math.floor(d+(p-d)/2),m=r[o]-u,m<0)d=o+1;else if(m>0)p=o-1;else{p=o;break}if(o=p,r[o]===u)return o/(c-1);const x=r[o],v=r[o+1]-x,_=(u-x)/v;return(o+_)/(c-1)}getTangent(e,n){let o=e-1e-4,c=e+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),d=this.getPoint(c),p=n||(u.isVector2?new gt:new oe);return p.copy(d).sub(u).normalize(),p}getTangentAt(e,n){const r=this.getUtoTmapping(e);return this.getTangent(r,n)}computeFrenetFrames(e,n=!1){const r=new oe,o=[],c=[],u=[],d=new oe,p=new En;for(let _=0;_<=e;_++){const E=_/e;o[_]=this.getTangentAt(E,new oe)}c[0]=new oe,u[0]=new oe;let m=Number.MAX_VALUE;const x=Math.abs(o[0].x),g=Math.abs(o[0].y),v=Math.abs(o[0].z);x<=m&&(m=x,r.set(1,0,0)),g<=m&&(m=g,r.set(0,1,0)),v<=m&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),c[0].crossVectors(o[0],d),u[0].crossVectors(o[0],c[0]);for(let _=1;_<=e;_++){if(c[_]=c[_-1].clone(),u[_]=u[_-1].clone(),d.crossVectors(o[_-1],o[_]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(jt(o[_-1].dot(o[_]),-1,1));c[_].applyMatrix4(p.makeRotationAxis(d,E))}u[_].crossVectors(o[_],c[_])}if(n===!0){let _=Math.acos(jt(c[0].dot(c[e]),-1,1));_/=e,o[0].dot(d.crossVectors(c[0],c[e]))>0&&(_=-_);for(let E=1;E<=e;E++)c[E].applyMatrix4(p.makeRotationAxis(o[E],_*E)),u[E].crossVectors(o[E],c[E])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class A0 extends Ga{constructor(e=0,n=0,r=1,o=1,c=0,u=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=r,this.yRadius=o,this.aStartAngle=c,this.aEndAngle=u,this.aClockwise=d,this.aRotation=p}getPoint(e,n=new gt){const r=n,o=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const u=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=o;for(;c>o;)c-=o;c<Number.EPSILON&&(u?c=0:c=o),this.aClockwise===!0&&!u&&(c===o?c=-o:c=c-o);const d=this.aStartAngle+e*c;let p=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const x=Math.cos(this.aRotation),g=Math.sin(this.aRotation),v=p-this.aX,_=m-this.aY;p=v*x-_*g+this.aX,m=v*g+_*x+this.aY}return r.set(p,m)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class fT extends A0{constructor(e,n,r,o,c,u){super(e,n,r,r,o,c,u),this.isArcCurve=!0,this.type="ArcCurve"}}function w0(){let a=0,e=0,n=0,r=0;function o(c,u,d,p){a=c,e=d,n=-3*c+3*u-2*d-p,r=2*c-2*u+d+p}return{initCatmullRom:function(c,u,d,p,m){o(u,d,m*(d-c),m*(p-u))},initNonuniformCatmullRom:function(c,u,d,p,m,x,g){let v=(u-c)/m-(d-c)/(m+x)+(d-u)/x,_=(d-u)/x-(p-u)/(x+g)+(p-d)/g;v*=x,_*=x,o(u,d,v,_)},calc:function(c){const u=c*c,d=u*c;return a+e*c+n*u+r*d}}}const M1=new oe,E1=new oe,Bp=new w0,Hp=new w0,Gp=new w0;class AS extends Ga{constructor(e=[],n=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=r,this.tension=o}getPoint(e,n=new oe){const r=n,o=this.points,c=o.length,u=(c-(this.closed?0:1))*e;let d=Math.floor(u),p=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:p===0&&d===c-1&&(d=c-2,p=1);let m,x;this.closed||d>0?m=o[(d-1)%c]:(E1.subVectors(o[0],o[1]).add(o[0]),m=E1);const g=o[d%c],v=o[(d+1)%c];if(this.closed||d+2<c?x=o[(d+2)%c]:(M1.subVectors(o[c-1],o[c-2]).add(o[c-1]),x=M1),this.curveType==="centripetal"||this.curveType==="chordal"){const _=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(g),_),C=Math.pow(g.distanceToSquared(v),_),y=Math.pow(v.distanceToSquared(x),_);C<1e-4&&(C=1),E<1e-4&&(E=C),y<1e-4&&(y=C),Bp.initNonuniformCatmullRom(m.x,g.x,v.x,x.x,E,C,y),Hp.initNonuniformCatmullRom(m.y,g.y,v.y,x.y,E,C,y),Gp.initNonuniformCatmullRom(m.z,g.z,v.z,x.z,E,C,y)}else this.curveType==="catmullrom"&&(Bp.initCatmullRom(m.x,g.x,v.x,x.x,this.tension),Hp.initCatmullRom(m.y,g.y,v.y,x.y,this.tension),Gp.initCatmullRom(m.z,g.z,v.z,x.z,this.tension));return r.set(Bp.calc(p),Hp.calc(p),Gp.calc(p)),r}copy(e){super.copy(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const o=e.points[n];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,r=this.points.length;n<r;n++){const o=this.points[n];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const o=e.points[n];this.points.push(new oe().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function b1(a,e,n,r,o){const c=(r-e)*.5,u=(o-n)*.5,d=a*a,p=a*d;return(2*n-2*r+c+u)*p+(-3*n+3*r-2*c-u)*d+c*a+n}function hT(a,e){const n=1-a;return n*n*e}function dT(a,e){return 2*(1-a)*a*e}function pT(a,e){return a*a*e}function Kl(a,e,n,r){return hT(a,e)+dT(a,n)+pT(a,r)}function mT(a,e){const n=1-a;return n*n*n*e}function gT(a,e){const n=1-a;return 3*n*n*a*e}function vT(a,e){return 3*(1-a)*a*a*e}function xT(a,e){return a*a*a*e}function Ql(a,e,n,r,o){return mT(a,e)+gT(a,n)+vT(a,r)+xT(a,o)}class wS extends Ga{constructor(e=new gt,n=new gt,r=new gt,o=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=r,this.v3=o}getPoint(e,n=new gt){const r=n,o=this.v0,c=this.v1,u=this.v2,d=this.v3;return r.set(Ql(e,o.x,c.x,u.x,d.x),Ql(e,o.y,c.y,u.y,d.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class _T extends Ga{constructor(e=new oe,n=new oe,r=new oe,o=new oe){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=r,this.v3=o}getPoint(e,n=new oe){const r=n,o=this.v0,c=this.v1,u=this.v2,d=this.v3;return r.set(Ql(e,o.x,c.x,u.x,d.x),Ql(e,o.y,c.y,u.y,d.y),Ql(e,o.z,c.z,u.z,d.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class RS extends Ga{constructor(e=new gt,n=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new gt){const r=n;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new gt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yT extends Ga{constructor(e=new oe,n=new oe){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new oe){const r=n;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new oe){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class CS extends Ga{constructor(e=new gt,n=new gt,r=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=r}getPoint(e,n=new gt){const r=n,o=this.v0,c=this.v1,u=this.v2;return r.set(Kl(e,o.x,c.x,u.x),Kl(e,o.y,c.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ST extends Ga{constructor(e=new oe,n=new oe,r=new oe){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=r}getPoint(e,n=new oe){const r=n,o=this.v0,c=this.v1,u=this.v2;return r.set(Kl(e,o.x,c.x,u.x),Kl(e,o.y,c.y,u.y),Kl(e,o.z,c.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class DS extends Ga{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new gt){const r=n,o=this.points,c=(o.length-1)*e,u=Math.floor(c),d=c-u,p=o[u===0?u:u-1],m=o[u],x=o[u>o.length-2?o.length-1:u+1],g=o[u>o.length-3?o.length-1:u+2];return r.set(b1(d,p.x,m.x,x.x,g.x),b1(d,p.y,m.y,x.y,g.y)),r}copy(e){super.copy(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const o=e.points[n];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,r=this.points.length;n<r;n++){const o=this.points[n];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const o=e.points[n];this.points.push(new gt().fromArray(o))}return this}}var Jm=Object.freeze({__proto__:null,ArcCurve:fT,CatmullRomCurve3:AS,CubicBezierCurve:wS,CubicBezierCurve3:_T,EllipseCurve:A0,LineCurve:RS,LineCurve3:yT,QuadraticBezierCurve:CS,QuadraticBezierCurve3:ST,SplineCurve:DS});class MT extends Ga{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jm[r](n,e))}return this}getPoint(e,n){const r=e*this.getLength(),o=this.getCurveLengths();let c=0;for(;c<o.length;){if(o[c]>=r){const u=o[c]-r,d=this.curves[c],p=d.getLength(),m=p===0?0:1-u/p;return d.getPointAt(m,n)}c++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let r=0,o=this.curves.length;r<o;r++)n+=this.curves[r].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let r=0;r<=e;r++)n.push(this.getPoint(r/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let r;for(let o=0,c=this.curves;o<c.length;o++){const u=c[o],d=u.isEllipseCurve?e*2:u.isLineCurve||u.isLineCurve3?1:u.isSplineCurve?e*u.points.length:e,p=u.getPoints(d);for(let m=0;m<p.length;m++){const x=p[m];r&&r.equals(x)||(n.push(x),r=x)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,r=e.curves.length;n<r;n++){const o=e.curves[n];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,r=this.curves.length;n<r;n++){const o=this.curves[n];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,r=e.curves.length;n<r;n++){const o=e.curves[n];this.curves.push(new Jm[o.type]().fromJSON(o))}return this}}class $m extends MT{constructor(e){super(),this.type="Path",this.currentPoint=new gt,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,r=e.length;n<r;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const r=new RS(this.currentPoint.clone(),new gt(e,n));return this.curves.push(r),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,r,o){const c=new CS(this.currentPoint.clone(),new gt(e,n),new gt(r,o));return this.curves.push(c),this.currentPoint.set(r,o),this}bezierCurveTo(e,n,r,o,c,u){const d=new wS(this.currentPoint.clone(),new gt(e,n),new gt(r,o),new gt(c,u));return this.curves.push(d),this.currentPoint.set(c,u),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),r=new DS(n);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,r,o,c,u){const d=this.currentPoint.x,p=this.currentPoint.y;return this.absarc(e+d,n+p,r,o,c,u),this}absarc(e,n,r,o,c,u){return this.absellipse(e,n,r,r,o,c,u),this}ellipse(e,n,r,o,c,u,d,p){const m=this.currentPoint.x,x=this.currentPoint.y;return this.absellipse(e+m,n+x,r,o,c,u,d,p),this}absellipse(e,n,r,o,c,u,d,p){const m=new A0(e,n,r,o,c,u,d,p);if(this.curves.length>0){const g=m.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(m);const x=m.getPoint(1);return this.currentPoint.copy(x),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Df extends $m{constructor(e){super(e),this.uuid=Go(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let r=0,o=this.holes.length;r<o;r++)n[r]=this.holes[r].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,r=e.holes.length;n<r;n++){const o=e.holes[n];this.holes.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,r=this.holes.length;n<r;n++){const o=this.holes[n];e.holes.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,r=e.holes.length;n<r;n++){const o=e.holes[n];this.holes.push(new $m().fromJSON(o))}return this}}function ET(a,e,n=2){const r=e&&e.length,o=r?e[0]*n:a.length;let c=NS(a,0,o,n,!0);const u=[];if(!c||c.next===c.prev)return u;let d,p,m;if(r&&(c=RT(a,e,c,n)),a.length>80*n){d=a[0],p=a[1];let x=d,g=p;for(let v=n;v<o;v+=n){const _=a[v],E=a[v+1];_<d&&(d=_),E<p&&(p=E),_>x&&(x=_),E>g&&(g=E)}m=Math.max(x-d,g-p),m=m!==0?32767/m:0}return sc(c,u,n,d,p,m,0),u}function NS(a,e,n,r,o){let c;if(o===BT(a,e,n,r)>0)for(let u=e;u<n;u+=r)c=T1(u/r|0,a[u],a[u+1],c);else for(let u=n-r;u>=e;u-=r)c=T1(u/r|0,a[u],a[u+1],c);return c&&Bo(c,c.next)&&(lc(c),c=c.next),c}function Ts(a,e){if(!a)return a;e||(e=a);let n=a,r;do if(r=!1,!n.steiner&&(Bo(n,n.next)||Dn(n.prev,n,n.next)===0)){if(lc(n),n=e=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==e);return e}function sc(a,e,n,r,o,c,u){if(!a)return;!u&&c&&UT(a,r,o,c);let d=a;for(;a.prev!==a.next;){const p=a.prev,m=a.next;if(c?TT(a,r,o,c):bT(a)){e.push(p.i,a.i,m.i),lc(a),a=m.next,d=m.next;continue}if(a=m,a===d){u?u===1?(a=AT(Ts(a),e),sc(a,e,n,r,o,c,2)):u===2&&wT(a,e,n,r,o,c):sc(Ts(a),e,n,r,o,c,1);break}}}function bT(a){const e=a.prev,n=a,r=a.next;if(Dn(e,n,r)>=0)return!1;const o=e.x,c=n.x,u=r.x,d=e.y,p=n.y,m=r.y,x=Math.min(o,c,u),g=Math.min(d,p,m),v=Math.max(o,c,u),_=Math.max(d,p,m);let E=r.next;for(;E!==e;){if(E.x>=x&&E.x<=v&&E.y>=g&&E.y<=_&&Xl(o,d,c,p,u,m,E.x,E.y)&&Dn(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function TT(a,e,n,r){const o=a.prev,c=a,u=a.next;if(Dn(o,c,u)>=0)return!1;const d=o.x,p=c.x,m=u.x,x=o.y,g=c.y,v=u.y,_=Math.min(d,p,m),E=Math.min(x,g,v),C=Math.max(d,p,m),y=Math.max(x,g,v),M=e0(_,E,e,n,r),U=e0(C,y,e,n,r);let B=a.prevZ,R=a.nextZ;for(;B&&B.z>=M&&R&&R.z<=U;){if(B.x>=_&&B.x<=C&&B.y>=E&&B.y<=y&&B!==o&&B!==u&&Xl(d,x,p,g,m,v,B.x,B.y)&&Dn(B.prev,B,B.next)>=0||(B=B.prevZ,R.x>=_&&R.x<=C&&R.y>=E&&R.y<=y&&R!==o&&R!==u&&Xl(d,x,p,g,m,v,R.x,R.y)&&Dn(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;B&&B.z>=M;){if(B.x>=_&&B.x<=C&&B.y>=E&&B.y<=y&&B!==o&&B!==u&&Xl(d,x,p,g,m,v,B.x,B.y)&&Dn(B.prev,B,B.next)>=0)return!1;B=B.prevZ}for(;R&&R.z<=U;){if(R.x>=_&&R.x<=C&&R.y>=E&&R.y<=y&&R!==o&&R!==u&&Xl(d,x,p,g,m,v,R.x,R.y)&&Dn(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function AT(a,e){let n=a;do{const r=n.prev,o=n.next.next;!Bo(r,o)&&US(r,n,n.next,o)&&oc(r,o)&&oc(o,r)&&(e.push(r.i,n.i,o.i),lc(n),lc(n.next),n=a=o),n=n.next}while(n!==a);return Ts(n)}function wT(a,e,n,r,o,c){let u=a;do{let d=u.next.next;for(;d!==u.prev;){if(u.i!==d.i&&FT(u,d)){let p=OS(u,d);u=Ts(u,u.next),p=Ts(p,p.next),sc(u,e,n,r,o,c,0),sc(p,e,n,r,o,c,0);return}d=d.next}u=u.next}while(u!==a)}function RT(a,e,n,r){const o=[];for(let c=0,u=e.length;c<u;c++){const d=e[c]*r,p=c<u-1?e[c+1]*r:a.length,m=NS(a,d,p,r,!1);m===m.next&&(m.steiner=!0),o.push(PT(m))}o.sort(CT);for(let c=0;c<o.length;c++)n=DT(o[c],n);return n}function CT(a,e){let n=a.x-e.x;if(n===0&&(n=a.y-e.y,n===0)){const r=(a.next.y-a.y)/(a.next.x-a.x),o=(e.next.y-e.y)/(e.next.x-e.x);n=r-o}return n}function DT(a,e){const n=NT(a,e);if(!n)return e;const r=OS(n,a);return Ts(r,r.next),Ts(n,n.next)}function NT(a,e){let n=e;const r=a.x,o=a.y;let c=-1/0,u;if(Bo(a,n))return n;do{if(Bo(a,n.next))return n.next;if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const g=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(g<=r&&g>c&&(c=g,u=n.x<n.next.x?n:n.next,g===r))return u}n=n.next}while(n!==e);if(!u)return null;const d=u,p=u.x,m=u.y;let x=1/0;n=u;do{if(r>=n.x&&n.x>=p&&r!==n.x&&LS(o<m?r:c,o,p,m,o<m?c:r,o,n.x,n.y)){const g=Math.abs(o-n.y)/(r-n.x);oc(n,a)&&(g<x||g===x&&(n.x>u.x||n.x===u.x&&LT(u,n)))&&(u=n,x=g)}n=n.next}while(n!==d);return u}function LT(a,e){return Dn(a.prev,a,e.prev)<0&&Dn(e.next,a,a.next)<0}function UT(a,e,n,r){let o=a;do o.z===0&&(o.z=e0(o.x,o.y,e,n,r)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==a);o.prevZ.nextZ=null,o.prevZ=null,OT(o)}function OT(a){let e,n=1;do{let r=a,o;a=null;let c=null;for(e=0;r;){e++;let u=r,d=0;for(let m=0;m<n&&(d++,u=u.nextZ,!!u);m++);let p=n;for(;d>0||p>0&&u;)d!==0&&(p===0||!u||r.z<=u.z)?(o=r,r=r.nextZ,d--):(o=u,u=u.nextZ,p--),c?c.nextZ=o:a=o,o.prevZ=c,c=o;r=u}c.nextZ=null,n*=2}while(e>1);return a}function e0(a,e,n,r,o){return a=(a-n)*o|0,e=(e-r)*o|0,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,a|e<<1}function PT(a){let e=a,n=a;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==a);return n}function LS(a,e,n,r,o,c,u,d){return(o-u)*(e-d)>=(a-u)*(c-d)&&(a-u)*(r-d)>=(n-u)*(e-d)&&(n-u)*(c-d)>=(o-u)*(r-d)}function Xl(a,e,n,r,o,c,u,d){return!(a===u&&e===d)&&LS(a,e,n,r,o,c,u,d)}function FT(a,e){return a.next.i!==e.i&&a.prev.i!==e.i&&!IT(a,e)&&(oc(a,e)&&oc(e,a)&&zT(a,e)&&(Dn(a.prev,a,e.prev)||Dn(a,e.prev,e))||Bo(a,e)&&Dn(a.prev,a,a.next)>0&&Dn(e.prev,e,e.next)>0)}function Dn(a,e,n){return(e.y-a.y)*(n.x-e.x)-(e.x-a.x)*(n.y-e.y)}function Bo(a,e){return a.x===e.x&&a.y===e.y}function US(a,e,n,r){const o=Ju(Dn(a,e,n)),c=Ju(Dn(a,e,r)),u=Ju(Dn(n,r,a)),d=Ju(Dn(n,r,e));return!!(o!==c&&u!==d||o===0&&ju(a,n,e)||c===0&&ju(a,r,e)||u===0&&ju(n,a,r)||d===0&&ju(n,e,r))}function ju(a,e,n){return e.x<=Math.max(a.x,n.x)&&e.x>=Math.min(a.x,n.x)&&e.y<=Math.max(a.y,n.y)&&e.y>=Math.min(a.y,n.y)}function Ju(a){return a>0?1:a<0?-1:0}function IT(a,e){let n=a;do{if(n.i!==a.i&&n.next.i!==a.i&&n.i!==e.i&&n.next.i!==e.i&&US(n,n.next,a,e))return!0;n=n.next}while(n!==a);return!1}function oc(a,e){return Dn(a.prev,a,a.next)<0?Dn(a,e,a.next)>=0&&Dn(a,a.prev,e)>=0:Dn(a,e,a.prev)<0||Dn(a,a.next,e)<0}function zT(a,e){let n=a,r=!1;const o=(a.x+e.x)/2,c=(a.y+e.y)/2;do n.y>c!=n.next.y>c&&n.next.y!==n.y&&o<(n.next.x-n.x)*(c-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==a);return r}function OS(a,e){const n=t0(a.i,a.x,a.y),r=t0(e.i,e.x,e.y),o=a.next,c=e.prev;return a.next=e,e.prev=a,n.next=o,o.prev=n,r.next=n,n.prev=r,c.next=r,r.prev=c,r}function T1(a,e,n,r){const o=t0(a,e,n);return r?(o.next=r.next,o.prev=r,r.next.prev=o,r.next=o):(o.prev=o,o.next=o),o}function lc(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function t0(a,e,n){return{i:a,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function BT(a,e,n,r){let o=0;for(let c=e,u=n-r;c<n;c+=r)o+=(a[u]-a[c])*(a[c+1]+a[u+1]),u=c;return o}class HT{static triangulate(e,n,r=2){return ET(e,n,r)}}class cr{static area(e){const n=e.length;let r=0;for(let o=n-1,c=0;c<n;o=c++)r+=e[o].x*e[c].y-e[c].x*e[o].y;return r*.5}static isClockWise(e){return cr.area(e)<0}static triangulateShape(e,n){const r=[],o=[],c=[];A1(e),w1(r,e);let u=e.length;n.forEach(A1);for(let p=0;p<n.length;p++)o.push(u),u+=n[p].length,w1(r,n[p]);const d=HT.triangulate(r,o);for(let p=0;p<d.length;p+=3)c.push(d.slice(p,p+3));return c}}function A1(a){const e=a.length;e>2&&a[e-1].equals(a[0])&&a.pop()}function w1(a,e){for(let n=0;n<e.length;n++)a.push(e[n].x),a.push(e[n].y)}class Nf extends Vi{constructor(e=new Df([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const r=this,o=[],c=[];for(let d=0,p=e.length;d<p;d++){const m=e[d];u(m)}this.setAttribute("position",new li(o,3)),this.setAttribute("uv",new li(c,2)),this.computeVertexNormals();function u(d){const p=[],m=n.curveSegments!==void 0?n.curveSegments:12,x=n.steps!==void 0?n.steps:1,g=n.depth!==void 0?n.depth:1;let v=n.bevelEnabled!==void 0?n.bevelEnabled:!0,_=n.bevelThickness!==void 0?n.bevelThickness:.2,E=n.bevelSize!==void 0?n.bevelSize:_-.1,C=n.bevelOffset!==void 0?n.bevelOffset:0,y=n.bevelSegments!==void 0?n.bevelSegments:3;const M=n.extrudePath,U=n.UVGenerator!==void 0?n.UVGenerator:GT;let B,R=!1,O,P,F,w;if(M){B=M.getSpacedPoints(x),R=!0,v=!1;const Ae=M.isCatmullRomCurve3?M.closed:!1;O=M.computeFrenetFrames(x,Ae),P=new oe,F=new oe,w=new oe}v||(y=0,_=0,E=0,C=0);const T=d.extractPoints(m);let H=T.shape;const V=T.holes;if(!cr.isClockWise(H)){H=H.reverse();for(let Ae=0,Fe=V.length;Ae<Fe;Ae++){const ue=V[Ae];cr.isClockWise(ue)&&(V[Ae]=ue.reverse())}}function I(Ae){const ue=10000000000000001e-36;let Oe=Ae[0];for(let He=1;He<=Ae.length;He++){const vt=He%Ae.length,mt=Ae[vt],Je=mt.x-Oe.x,Tt=mt.y-Oe.y,j=Je*Je+Tt*Tt,nt=Math.max(Math.abs(mt.x),Math.abs(mt.y),Math.abs(Oe.x),Math.abs(Oe.y)),ze=ue*nt*nt;if(j<=ze){Ae.splice(vt,1),He--;continue}Oe=mt}}I(H),V.forEach(I);const Q=V.length,ae=H;for(let Ae=0;Ae<Q;Ae++){const Fe=V[Ae];H=H.concat(Fe)}function W(Ae,Fe,ue){return Fe||sn("ExtrudeGeometry: vec does not exist"),Ae.clone().addScaledVector(Fe,ue)}const $=H.length;function D(Ae,Fe,ue){let Oe,He,vt;const mt=Ae.x-Fe.x,Je=Ae.y-Fe.y,Tt=ue.x-Ae.x,j=ue.y-Ae.y,nt=mt*mt+Je*Je,ze=mt*j-Je*Tt;if(Math.abs(ze)>Number.EPSILON){const L=Math.sqrt(nt),b=Math.sqrt(Tt*Tt+j*j),q=Fe.x-Je/L,z=Fe.y+mt/L,_e=ue.x-j/b,Ce=ue.y+Tt/b,te=((_e-q)*j-(Ce-z)*Tt)/(mt*j-Je*Tt);Oe=q+mt*te-Ae.x,He=z+Je*te-Ae.y;const Z=Oe*Oe+He*He;if(Z<=2)return new gt(Oe,He);vt=Math.sqrt(Z/2)}else{let L=!1;mt>Number.EPSILON?Tt>Number.EPSILON&&(L=!0):mt<-Number.EPSILON?Tt<-Number.EPSILON&&(L=!0):Math.sign(Je)===Math.sign(j)&&(L=!0),L?(Oe=-Je,He=mt,vt=Math.sqrt(nt)):(Oe=mt,He=Je,vt=Math.sqrt(nt/2))}return new gt(Oe/vt,He/vt)}const le=[];for(let Ae=0,Fe=ae.length,ue=Fe-1,Oe=Ae+1;Ae<Fe;Ae++,ue++,Oe++)ue===Fe&&(ue=0),Oe===Fe&&(Oe=0),le[Ae]=D(ae[Ae],ae[ue],ae[Oe]);const me=[];let Te,rt=le.concat();for(let Ae=0,Fe=Q;Ae<Fe;Ae++){const ue=V[Ae];Te=[];for(let Oe=0,He=ue.length,vt=He-1,mt=Oe+1;Oe<He;Oe++,vt++,mt++)vt===He&&(vt=0),mt===He&&(mt=0),Te[Oe]=D(ue[Oe],ue[vt],ue[mt]);me.push(Te),rt=rt.concat(Te)}let je;if(y===0)je=cr.triangulateShape(ae,V);else{const Ae=[],Fe=[];for(let ue=0;ue<y;ue++){const Oe=ue/y,He=_*Math.cos(Oe*Math.PI/2),vt=E*Math.sin(Oe*Math.PI/2)+C;for(let mt=0,Je=ae.length;mt<Je;mt++){const Tt=W(ae[mt],le[mt],vt);xe(Tt.x,Tt.y,-He),Oe===0&&Ae.push(Tt)}for(let mt=0,Je=Q;mt<Je;mt++){const Tt=V[mt];Te=me[mt];const j=[];for(let nt=0,ze=Tt.length;nt<ze;nt++){const L=W(Tt[nt],Te[nt],vt);xe(L.x,L.y,-He),Oe===0&&j.push(L)}Oe===0&&Fe.push(j)}}je=cr.triangulateShape(Ae,Fe)}const G=je.length,J=E+C;for(let Ae=0;Ae<$;Ae++){const Fe=v?W(H[Ae],rt[Ae],J):H[Ae];R?(F.copy(O.normals[0]).multiplyScalar(Fe.x),P.copy(O.binormals[0]).multiplyScalar(Fe.y),w.copy(B[0]).add(F).add(P),xe(w.x,w.y,w.z)):xe(Fe.x,Fe.y,0)}for(let Ae=1;Ae<=x;Ae++)for(let Fe=0;Fe<$;Fe++){const ue=v?W(H[Fe],rt[Fe],J):H[Fe];R?(F.copy(O.normals[Ae]).multiplyScalar(ue.x),P.copy(O.binormals[Ae]).multiplyScalar(ue.y),w.copy(B[Ae]).add(F).add(P),xe(w.x,w.y,w.z)):xe(ue.x,ue.y,g/x*Ae)}for(let Ae=y-1;Ae>=0;Ae--){const Fe=Ae/y,ue=_*Math.cos(Fe*Math.PI/2),Oe=E*Math.sin(Fe*Math.PI/2)+C;for(let He=0,vt=ae.length;He<vt;He++){const mt=W(ae[He],le[He],Oe);xe(mt.x,mt.y,g+ue)}for(let He=0,vt=V.length;He<vt;He++){const mt=V[He];Te=me[He];for(let Je=0,Tt=mt.length;Je<Tt;Je++){const j=W(mt[Je],Te[Je],Oe);R?xe(j.x,j.y+B[x-1].y,B[x-1].x+ue):xe(j.x,j.y,g+ue)}}}Ke(),ie();function Ke(){const Ae=o.length/3;if(v){let Fe=0,ue=$*Fe;for(let Oe=0;Oe<G;Oe++){const He=je[Oe];Ue(He[2]+ue,He[1]+ue,He[0]+ue)}Fe=x+y*2,ue=$*Fe;for(let Oe=0;Oe<G;Oe++){const He=je[Oe];Ue(He[0]+ue,He[1]+ue,He[2]+ue)}}else{for(let Fe=0;Fe<G;Fe++){const ue=je[Fe];Ue(ue[2],ue[1],ue[0])}for(let Fe=0;Fe<G;Fe++){const ue=je[Fe];Ue(ue[0]+$*x,ue[1]+$*x,ue[2]+$*x)}}r.addGroup(Ae,o.length/3-Ae,0)}function ie(){const Ae=o.length/3;let Fe=0;ne(ae,Fe),Fe+=ae.length;for(let ue=0,Oe=V.length;ue<Oe;ue++){const He=V[ue];ne(He,Fe),Fe+=He.length}r.addGroup(Ae,o.length/3-Ae,1)}function ne(Ae,Fe){let ue=Ae.length;for(;--ue>=0;){const Oe=ue;let He=ue-1;He<0&&(He=Ae.length-1);for(let vt=0,mt=x+y*2;vt<mt;vt++){const Je=$*vt,Tt=$*(vt+1),j=Fe+Oe+Je,nt=Fe+He+Je,ze=Fe+He+Tt,L=Fe+Oe+Tt;ye(j,nt,ze,L)}}}function xe(Ae,Fe,ue){p.push(Ae),p.push(Fe),p.push(ue)}function Ue(Ae,Fe,ue){we(Ae),we(Fe),we(ue);const Oe=o.length/3,He=U.generateTopUV(r,o,Oe-3,Oe-2,Oe-1);_t(He[0]),_t(He[1]),_t(He[2])}function ye(Ae,Fe,ue,Oe){we(Ae),we(Fe),we(Oe),we(Fe),we(ue),we(Oe);const He=o.length/3,vt=U.generateSideWallUV(r,o,He-6,He-3,He-2,He-1);_t(vt[0]),_t(vt[1]),_t(vt[3]),_t(vt[1]),_t(vt[2]),_t(vt[3])}function we(Ae){o.push(p[Ae*3+0]),o.push(p[Ae*3+1]),o.push(p[Ae*3+2])}function _t(Ae){c.push(Ae.x),c.push(Ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,r=this.parameters.options;return VT(n,r,e)}static fromJSON(e,n){const r=[];for(let c=0,u=e.shapes.length;c<u;c++){const d=n[e.shapes[c]];r.push(d)}const o=e.options.extrudePath;return o!==void 0&&(e.options.extrudePath=new Jm[o.type]().fromJSON(o)),new Nf(r,e.options)}}const GT={generateTopUV:function(a,e,n,r,o){const c=e[n*3],u=e[n*3+1],d=e[r*3],p=e[r*3+1],m=e[o*3],x=e[o*3+1];return[new gt(c,u),new gt(d,p),new gt(m,x)]},generateSideWallUV:function(a,e,n,r,o,c){const u=e[n*3],d=e[n*3+1],p=e[n*3+2],m=e[r*3],x=e[r*3+1],g=e[r*3+2],v=e[o*3],_=e[o*3+1],E=e[o*3+2],C=e[c*3],y=e[c*3+1],M=e[c*3+2];return Math.abs(d-x)<Math.abs(u-m)?[new gt(u,1-p),new gt(m,1-g),new gt(v,1-E),new gt(C,1-M)]:[new gt(d,1-p),new gt(x,1-g),new gt(_,1-E),new gt(y,1-M)]}};function VT(a,e,n){if(n.shapes=[],Array.isArray(a))for(let r=0,o=a.length;r<o;r++){const c=a[r];n.shapes.push(c.uuid)}else n.shapes.push(a.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class dc extends Vi{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,u=n/2,d=Math.floor(r),p=Math.floor(o),m=d+1,x=p+1,g=e/d,v=n/p,_=[],E=[],C=[],y=[];for(let M=0;M<x;M++){const U=M*v-u;for(let B=0;B<m;B++){const R=B*g-c;E.push(R,-U,0),C.push(0,0,1),y.push(B/d),y.push(1-M/p)}}for(let M=0;M<p;M++)for(let U=0;U<d;U++){const B=U+m*M,R=U+m*(M+1),O=U+1+m*(M+1),P=U+1+m*M;_.push(B,R,P),_.push(R,O,P)}this.setIndex(_),this.setAttribute("position",new li(E,3)),this.setAttribute("normal",new li(C,3)),this.setAttribute("uv",new li(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dc(e.width,e.height,e.widthSegments,e.heightSegments)}}class R0 extends Vi{constructor(e=new Df([new gt(0,.5),new gt(-.5,-.5),new gt(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:n};const r=[],o=[],c=[],u=[];let d=0,p=0;if(Array.isArray(e)===!1)m(e);else for(let x=0;x<e.length;x++)m(e[x]),this.addGroup(d,p,x),d+=p,p=0;this.setIndex(r),this.setAttribute("position",new li(o,3)),this.setAttribute("normal",new li(c,3)),this.setAttribute("uv",new li(u,2));function m(x){const g=o.length/3,v=x.extractPoints(n);let _=v.shape;const E=v.holes;cr.isClockWise(_)===!1&&(_=_.reverse());for(let y=0,M=E.length;y<M;y++){const U=E[y];cr.isClockWise(U)===!0&&(E[y]=U.reverse())}const C=cr.triangulateShape(_,E);for(let y=0,M=E.length;y<M;y++){const U=E[y];_=_.concat(U)}for(let y=0,M=_.length;y<M;y++){const U=_[y];o.push(U.x,U.y,0),c.push(0,0,1),u.push(U.x,U.y)}for(let y=0,M=C.length;y<M;y++){const U=C[y],B=U[0]+g,R=U[1]+g,O=U[2]+g;r.push(B,R,O),p+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes;return kT(n,e)}static fromJSON(e,n){const r=[];for(let o=0,c=e.shapes.length;o<c;o++){const u=n[e.shapes[o]];r.push(u)}return new R0(r,e.curveSegments)}}function kT(a,e){if(e.shapes=[],Array.isArray(a))for(let n=0,r=a.length;n<r;n++){const o=a[n];e.shapes.push(o.uuid)}else e.shapes.push(a.uuid);return e}class bf extends Vi{constructor(e=1,n=.4,r=12,o=48,c=Math.PI*2,u=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:o,arc:c,thetaStart:u,thetaLength:d},r=Math.floor(r),o=Math.floor(o);const p=[],m=[],x=[],g=[],v=new oe,_=new oe,E=new oe;for(let C=0;C<=r;C++){const y=u+C/r*d;for(let M=0;M<=o;M++){const U=M/o*c;_.x=(e+n*Math.cos(y))*Math.cos(U),_.y=(e+n*Math.cos(y))*Math.sin(U),_.z=n*Math.sin(y),m.push(_.x,_.y,_.z),v.x=e*Math.cos(U),v.y=e*Math.sin(U),E.subVectors(_,v).normalize(),x.push(E.x,E.y,E.z),g.push(M/o),g.push(C/r)}}for(let C=1;C<=r;C++)for(let y=1;y<=o;y++){const M=(o+1)*C+y-1,U=(o+1)*(C-1)+y-1,B=(o+1)*(C-1)+y,R=(o+1)*C+y;p.push(M,U,R),p.push(U,B,R)}this.setIndex(p),this.setAttribute("position",new li(m,3)),this.setAttribute("normal",new li(x,3)),this.setAttribute("uv",new li(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Ho(a){const e={};for(const n in a){e[n]={};for(const r in a[n]){const o=a[n][r];if(R1(o))o.isRenderTargetTexture?(Bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone();else if(Array.isArray(o))if(R1(o[0])){const c=[];for(let u=0,d=o.length;u<d;u++)c[u]=o[u].clone();e[n][r]=c}else e[n][r]=o.slice();else e[n][r]=o}}return e}function xi(a){const e={};for(let n=0;n<a.length;n++){const r=Ho(a[n]);for(const o in r)e[o]=r[o]}return e}function R1(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function XT(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function PS(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:an.workingColorSpace}const qT={clone:Ho,merge:xi};var WT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ha extends fc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WT,this.fragmentShader=YT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ho(e.uniforms),this.uniformsGroups=XT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=n[o.value]||null;break;case"c":this.uniforms[r].value=new Qt().setHex(o.value);break;case"v2":this.uniforms[r].value=new gt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new oe().fromArray(o.value);break;case"v4":this.uniforms[r].value=new Cn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new Vt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new En().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class ZT extends Ha{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class FS extends fc{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Km,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zo,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $u extends FS{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class KT extends fc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class QT extends fc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class jT extends di{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Vp=new En,C1=new oe,D1=new oe;class JT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=Gi,this.map=null,this.mapPass=null,this.matrix=new En,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new T0,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new Cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;C1.setFromMatrixPosition(e.matrixWorld),n.position.copy(C1),D1.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(D1),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,r,o){Vp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(Vp,e.coordinateSystem,e.reversedDepth);const c=this._frameExtents,u=o?o.z/c.x:1,d=o?o.w/c.y:1,p=o?o.x/c.x:0,m=o?o.y/c.y:0;e.coordinateSystem===ac||e.reversedDepth?n.set(.5*u,0,0,.5*u+p,0,.5*d,0,.5*d+m,0,0,1,0,0,0,0,1):n.set(.5*u,0,0,.5*u+p,0,.5*d,0,.5*d+m,0,0,.5,.5,0,0,0,1),n.multiply(Vp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ef=new oe,tf=new Ba,Da=new oe;class IS extends di{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new En,this.projectionMatrix=new En,this.projectionMatrixInverse=new En,this.coordinateSystem=Pa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ef,tf,Da),Da.x===1&&Da.y===1&&Da.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ef,tf,Da.set(1,1,1)).invert()}updateWorldMatrix(e,n,r=!1){super.updateWorldMatrix(e,n,r),this.matrixWorld.decompose(ef,tf,Da),Da.x===1&&Da.y===1&&Da.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ef,tf,Da.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const kr=new oe,N1=new gt,L1=new gt;class ea extends IS{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Qm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vp*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qm*2*Math.atan(Math.tan(vp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kr.x,kr.y).multiplyScalar(-e/kr.z),kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(kr.x,kr.y).multiplyScalar(-e/kr.z)}getViewSize(e,n){return this.getViewBounds(e,N1,L1),n.subVectors(L1,N1)}setViewOffset(e,n,r,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(vp*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*r/m,o*=u.width/p,r*=u.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class C0 extends IS{constructor(e=-1,n=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,d=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,u=c+m*this.view.width,d-=x*this.view.offsetY,p=d-x*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class $T extends JT{constructor(){super(new C0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class U1 extends jT{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(di.DEFAULT_UP),this.updateMatrix(),this.target=new di,this.shadow=new $T}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const bo=-90,To=1;class e3 extends di{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ea(bo,To,e,n);o.layers=this.layers,this.add(o);const c=new ea(bo,To,e,n);c.layers=this.layers,this.add(c);const u=new ea(bo,To,e,n);u.layers=this.layers,this.add(u);const d=new ea(bo,To,e,n);d.layers=this.layers,this.add(d);const p=new ea(bo,To,e,n);p.layers=this.layers,this.add(p);const m=new ea(bo,To,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,u,d,p]=n;for(const m of n)this.remove(m);if(e===Pa)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===ac)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,p,m,x]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,x),e.setRenderTarget(g,v,_),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class t3 extends ea{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const O1=new En;class n3{constructor(e,n,r=0,o=1/0){this.ray=new MS(e,n),this.near=r,this.far=o,this.camera=null,this.layers=new M0,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):sn("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return O1.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(O1),this}intersectObject(e,n=!0,r=[]){return n0(e,this,r,n),r.sort(P1),r}intersectObjects(e,n=!0,r=[]){for(let o=0,c=e.length;o<c;o++)n0(e[o],this,r,n);return r.sort(P1),r}}function P1(a,e){return a.distance-e.distance}function n0(a,e,n,r){let o=!0;if(a.layers.test(e.layers)&&a.raycast(e,n)===!1&&(o=!1),o===!0&&r===!0){const c=a.children;for(let u=0,d=c.length;u<d;u++)n0(c[u],e,n,!0)}}const z0=class z0{constructor(e,n,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,o){const c=this.elements;return c[0]=e,c[2]=n,c[1]=r,c[3]=o,this}};z0.prototype.isMatrix2=!0;let F1=z0;function I1(a,e,n,r){const o=i3(r);switch(n){case hS:return a*e;case pS:return a*e/o.components*o.byteLength;case g0:return a*e/o.components*o.byteLength;case bs:return a*e*2/o.components*o.byteLength;case v0:return a*e*2/o.components*o.byteLength;case dS:return a*e*3/o.components*o.byteLength;case pa:return a*e*4/o.components*o.byteLength;case x0:return a*e*4/o.components*o.byteLength;case ff:case hf:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case df:case pf:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case ym:case Mm:return Math.max(a,16)*Math.max(e,8)/4;case _m:case Sm:return Math.max(a,8)*Math.max(e,8)/2;case Em:case bm:case Am:case wm:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Tm:case _f:case Rm:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Cm:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Dm:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Nm:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Lm:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Um:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Om:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Pm:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Fm:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Im:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case zm:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Bm:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Hm:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Gm:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Vm:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case km:case Xm:case qm:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Wm:case Ym:return Math.ceil(a/4)*Math.ceil(e/4)*8;case yf:case Zm:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function i3(a){switch(a){case Gi:case lS:return{byteLength:1,components:1};case nc:case cS:case za:return{byteLength:2,components:1};case p0:case m0:return{byteLength:2,components:4};case Ia:case d0:case Oa:return{byteLength:4,components:1};case uS:case fS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:f0}}));typeof window<"u"&&(window.__THREE__?Bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=f0);function zS(){let a=null,e=!1,n=null,r=null;function o(c,u){r=a.requestAnimationFrame(o),n(c,u)}return{start:function(){e!==!0&&n!==null&&a!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function a3(a){const e=new WeakMap;function n(d,p){const m=d.array,x=d.usage,g=m.byteLength,v=a.createBuffer();a.bindBuffer(p,v),a.bufferData(p,m,x),d.onUploadCallback();let _;if(m instanceof Float32Array)_=a.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)_=a.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?_=a.HALF_FLOAT:_=a.UNSIGNED_SHORT;else if(m instanceof Int16Array)_=a.SHORT;else if(m instanceof Uint32Array)_=a.UNSIGNED_INT;else if(m instanceof Int32Array)_=a.INT;else if(m instanceof Int8Array)_=a.BYTE;else if(m instanceof Uint8Array)_=a.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)_=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:_,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,p,m){const x=p.array,g=p.updateRanges;if(a.bindBuffer(m,d),g.length===0)a.bufferSubData(m,0,x);else{g.sort((_,E)=>_.start-E.start);let v=0;for(let _=1;_<g.length;_++){const E=g[v],C=g[_];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++v,g[v]=C)}g.length=v+1;for(let _=0,E=g.length;_<E;_++){const C=g[_];a.bufferSubData(m,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(a.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:o,remove:c,update:u}}var r3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,s3=`#ifdef USE_ALPHAHASH
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
#endif`,o3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,l3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,u3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,f3=`#ifdef USE_AOMAP
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
#endif`,h3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d3=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,p3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,m3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,g3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v3=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,x3=`#ifdef USE_IRIDESCENCE
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
#endif`,_3=`#ifdef USE_BUMPMAP
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
#endif`,y3=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,S3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,M3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,E3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,b3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,T3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,A3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,w3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,R3=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,C3=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,D3=`vec3 transformedNormal = objectNormal;
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
#endif`,N3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,L3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,U3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,P3="gl_FragColor = linearToOutputTexel( gl_FragColor );",F3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,I3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,z3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,B3=`#ifdef USE_ENVMAP
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
#endif`,H3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,V3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,k3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,X3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,W3=`#ifdef USE_GRADIENTMAP
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
}`,Y3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Z3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,K3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Q3=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,j3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,J3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,iA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,aA=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oA=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,lA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mA=`#if defined( USE_POINTS_UV )
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
#endif`,gA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_A=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SA=`#ifdef USE_MORPHTARGETS
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
#endif`,MA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,TA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,RA=`#ifdef USE_NORMALMAP
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
#endif`,CA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,UA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,PA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,VA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,kA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,XA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,qA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,WA=`#ifdef USE_SKINNING
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
#endif`,YA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZA=`#ifdef USE_SKINNING
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
#endif`,KA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$A=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ew=`#ifdef USE_TRANSMISSION
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
#endif`,tw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sw=`uniform sampler2D t2D;
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
}`,ow=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fw=`#include <common>
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
}`,hw=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
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
}`,dw=`#define DISTANCE
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
}`,pw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,mw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vw=`uniform float scale;
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
}`,xw=`uniform vec3 diffuse;
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
}`,_w=`#include <common>
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
}`,yw=`uniform vec3 diffuse;
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
}`,Sw=`#define LAMBERT
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
}`,Mw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Ew=`#define MATCAP
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
}`,bw=`#define MATCAP
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
}`,Tw=`#define NORMAL
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
}`,Aw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ww=`#define PHONG
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
}`,Rw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Cw=`#define STANDARD
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
}`,Dw=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Nw=`#define TOON
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
}`,Lw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Uw=`uniform float size;
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
}`,Ow=`uniform vec3 diffuse;
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
}`,Pw=`#include <common>
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
}`,Fw=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Iw=`uniform float rotation;
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
}`,zw=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:r3,alphahash_pars_fragment:s3,alphamap_fragment:o3,alphamap_pars_fragment:l3,alphatest_fragment:c3,alphatest_pars_fragment:u3,aomap_fragment:f3,aomap_pars_fragment:h3,batching_pars_vertex:d3,batching_vertex:p3,begin_vertex:m3,beginnormal_vertex:g3,bsdfs:v3,iridescence_fragment:x3,bumpmap_pars_fragment:_3,clipping_planes_fragment:y3,clipping_planes_pars_fragment:S3,clipping_planes_pars_vertex:M3,clipping_planes_vertex:E3,color_fragment:b3,color_pars_fragment:T3,color_pars_vertex:A3,color_vertex:w3,common:R3,cube_uv_reflection_fragment:C3,defaultnormal_vertex:D3,displacementmap_pars_vertex:N3,displacementmap_vertex:L3,emissivemap_fragment:U3,emissivemap_pars_fragment:O3,colorspace_fragment:P3,colorspace_pars_fragment:F3,envmap_fragment:I3,envmap_common_pars_fragment:z3,envmap_pars_fragment:B3,envmap_pars_vertex:H3,envmap_physical_pars_fragment:j3,envmap_vertex:G3,fog_vertex:V3,fog_pars_vertex:k3,fog_fragment:X3,fog_pars_fragment:q3,gradientmap_pars_fragment:W3,lightmap_pars_fragment:Y3,lights_lambert_fragment:Z3,lights_lambert_pars_fragment:K3,lights_pars_begin:Q3,lights_toon_fragment:J3,lights_toon_pars_fragment:$3,lights_phong_fragment:eA,lights_phong_pars_fragment:tA,lights_physical_fragment:nA,lights_physical_pars_fragment:iA,lights_fragment_begin:aA,lights_fragment_maps:rA,lights_fragment_end:sA,lightprobes_pars_fragment:oA,logdepthbuf_fragment:lA,logdepthbuf_pars_fragment:cA,logdepthbuf_pars_vertex:uA,logdepthbuf_vertex:fA,map_fragment:hA,map_pars_fragment:dA,map_particle_fragment:pA,map_particle_pars_fragment:mA,metalnessmap_fragment:gA,metalnessmap_pars_fragment:vA,morphinstance_vertex:xA,morphcolor_vertex:_A,morphnormal_vertex:yA,morphtarget_pars_vertex:SA,morphtarget_vertex:MA,normal_fragment_begin:EA,normal_fragment_maps:bA,normal_pars_fragment:TA,normal_pars_vertex:AA,normal_vertex:wA,normalmap_pars_fragment:RA,clearcoat_normal_fragment_begin:CA,clearcoat_normal_fragment_maps:DA,clearcoat_pars_fragment:NA,iridescence_pars_fragment:LA,opaque_fragment:UA,packing:OA,premultiplied_alpha_fragment:PA,project_vertex:FA,dithering_fragment:IA,dithering_pars_fragment:zA,roughnessmap_fragment:BA,roughnessmap_pars_fragment:HA,shadowmap_pars_fragment:GA,shadowmap_pars_vertex:VA,shadowmap_vertex:kA,shadowmask_pars_fragment:XA,skinbase_vertex:qA,skinning_pars_vertex:WA,skinning_vertex:YA,skinnormal_vertex:ZA,specularmap_fragment:KA,specularmap_pars_fragment:QA,tonemapping_fragment:jA,tonemapping_pars_fragment:JA,transmission_fragment:$A,transmission_pars_fragment:ew,uv_pars_fragment:tw,uv_pars_vertex:nw,uv_vertex:iw,worldpos_vertex:aw,background_vert:rw,background_frag:sw,backgroundCube_vert:ow,backgroundCube_frag:lw,cube_vert:cw,cube_frag:uw,depth_vert:fw,depth_frag:hw,distance_vert:dw,distance_frag:pw,equirect_vert:mw,equirect_frag:gw,linedashed_vert:vw,linedashed_frag:xw,meshbasic_vert:_w,meshbasic_frag:yw,meshlambert_vert:Sw,meshlambert_frag:Mw,meshmatcap_vert:Ew,meshmatcap_frag:bw,meshnormal_vert:Tw,meshnormal_frag:Aw,meshphong_vert:ww,meshphong_frag:Rw,meshphysical_vert:Cw,meshphysical_frag:Dw,meshtoon_vert:Nw,meshtoon_frag:Lw,points_vert:Uw,points_frag:Ow,shadow_vert:Pw,shadow_frag:Fw,sprite_vert:Iw,sprite_frag:zw},Mt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new oe},probesMax:{value:new oe},probesResolution:{value:new oe}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},La={basic:{uniforms:xi([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:xi([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Qt(0)},envMapIntensity:{value:1}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:xi([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:xi([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:xi([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:xi([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:xi([Mt.points,Mt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:xi([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:xi([Mt.common,Mt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:xi([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:xi([Mt.sprite,Mt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distance:{uniforms:xi([Mt.common,Mt.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distance_vert,fragmentShader:Yt.distance_frag},shadow:{uniforms:xi([Mt.lights,Mt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};La.physical={uniforms:xi([La.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const nf={r:0,b:0,g:0},Bw=new En,BS=new Vt;BS.set(-1,0,0,0,1,0,0,0,1);function Hw(a,e,n,r,o,c){const u=new Qt(0);let d=o===!0?0:1,p,m,x=null,g=0,v=null;function _(U){let B=U.isScene===!0?U.background:null;if(B&&B.isTexture){const R=U.backgroundBlurriness>0;B=e.get(B,R)}return B}function E(U){let B=!1;const R=_(U);R===null?y(u,d):R&&R.isColor&&(y(R,1),B=!0);const O=a.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(a.autoClear||B)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function C(U,B){const R=_(B);R&&(R.isCubeTexture||R.mapping===Cf)?(m===void 0&&(m=new ri(new hc(1,1,1),new Ha({name:"BackgroundCubeMaterial",uniforms:Ho(La.backgroundCube.uniforms),vertexShader:La.backgroundCube.vertexShader,fragmentShader:La.backgroundCube.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(O,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=R,m.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(Bw.makeRotationFromEuler(B.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(BS),m.material.toneMapped=an.getTransfer(R.colorSpace)!==pn,(x!==R||g!==R.version||v!==a.toneMapping)&&(m.material.needsUpdate=!0,x=R,g=R.version,v=a.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new ri(new dc(2,2),new Ha({name:"BackgroundMaterial",uniforms:Ho(La.background.uniforms),vertexShader:La.background.vertexShader,fragmentShader:La.background.fragmentShader,side:Ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=R,p.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,p.material.toneMapped=an.getTransfer(R.colorSpace)!==pn,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(x!==R||g!==R.version||v!==a.toneMapping)&&(p.material.needsUpdate=!0,x=R,g=R.version,v=a.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function y(U,B){U.getRGB(nf,PS(a)),n.buffers.color.setClear(nf.r,nf.g,nf.b,B,c)}function M(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(U,B=1){u.set(U),d=B,y(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(U){d=U,y(u,d)},render:E,addToRenderList:C,dispose:M}}function Gw(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=v(null);let c=o,u=!1;function d(V,ee,I,Q,ae){let W=!1;const $=g(V,Q,I,ee);c!==$&&(c=$,m(c.object)),W=_(V,Q,I,ae),W&&E(V,Q,I,ae),ae!==null&&e.update(ae,a.ELEMENT_ARRAY_BUFFER),(W||u)&&(u=!1,R(V,ee,I,Q),ae!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function p(){return a.createVertexArray()}function m(V){return a.bindVertexArray(V)}function x(V){return a.deleteVertexArray(V)}function g(V,ee,I,Q){const ae=Q.wireframe===!0;let W=r[ee.id];W===void 0&&(W={},r[ee.id]=W);const $=V.isInstancedMesh===!0?V.id:0;let D=W[$];D===void 0&&(D={},W[$]=D);let le=D[I.id];le===void 0&&(le={},D[I.id]=le);let me=le[ae];return me===void 0&&(me=v(p()),le[ae]=me),me}function v(V){const ee=[],I=[],Q=[];for(let ae=0;ae<n;ae++)ee[ae]=0,I[ae]=0,Q[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:I,attributeDivisors:Q,object:V,attributes:{},index:null}}function _(V,ee,I,Q){const ae=c.attributes,W=ee.attributes;let $=0;const D=I.getAttributes();for(const le in D)if(D[le].location>=0){const Te=ae[le];let rt=W[le];if(rt===void 0&&(le==="instanceMatrix"&&V.instanceMatrix&&(rt=V.instanceMatrix),le==="instanceColor"&&V.instanceColor&&(rt=V.instanceColor)),Te===void 0||Te.attribute!==rt||rt&&Te.data!==rt.data)return!0;$++}return c.attributesNum!==$||c.index!==Q}function E(V,ee,I,Q){const ae={},W=ee.attributes;let $=0;const D=I.getAttributes();for(const le in D)if(D[le].location>=0){let Te=W[le];Te===void 0&&(le==="instanceMatrix"&&V.instanceMatrix&&(Te=V.instanceMatrix),le==="instanceColor"&&V.instanceColor&&(Te=V.instanceColor));const rt={};rt.attribute=Te,Te&&Te.data&&(rt.data=Te.data),ae[le]=rt,$++}c.attributes=ae,c.attributesNum=$,c.index=Q}function C(){const V=c.newAttributes;for(let ee=0,I=V.length;ee<I;ee++)V[ee]=0}function y(V){M(V,0)}function M(V,ee){const I=c.newAttributes,Q=c.enabledAttributes,ae=c.attributeDivisors;I[V]=1,Q[V]===0&&(a.enableVertexAttribArray(V),Q[V]=1),ae[V]!==ee&&(a.vertexAttribDivisor(V,ee),ae[V]=ee)}function U(){const V=c.newAttributes,ee=c.enabledAttributes;for(let I=0,Q=ee.length;I<Q;I++)ee[I]!==V[I]&&(a.disableVertexAttribArray(I),ee[I]=0)}function B(V,ee,I,Q,ae,W,$){$===!0?a.vertexAttribIPointer(V,ee,I,ae,W):a.vertexAttribPointer(V,ee,I,Q,ae,W)}function R(V,ee,I,Q){C();const ae=Q.attributes,W=I.getAttributes(),$=ee.defaultAttributeValues;for(const D in W){const le=W[D];if(le.location>=0){let me=ae[D];if(me===void 0&&(D==="instanceMatrix"&&V.instanceMatrix&&(me=V.instanceMatrix),D==="instanceColor"&&V.instanceColor&&(me=V.instanceColor)),me!==void 0){const Te=me.normalized,rt=me.itemSize,je=e.get(me);if(je===void 0)continue;const G=je.buffer,J=je.type,Ke=je.bytesPerElement,ie=J===a.INT||J===a.UNSIGNED_INT||me.gpuType===d0;if(me.isInterleavedBufferAttribute){const ne=me.data,xe=ne.stride,Ue=me.offset;if(ne.isInstancedInterleavedBuffer){for(let ye=0;ye<le.locationSize;ye++)M(le.location+ye,ne.meshPerAttribute);V.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ye=0;ye<le.locationSize;ye++)y(le.location+ye);a.bindBuffer(a.ARRAY_BUFFER,G);for(let ye=0;ye<le.locationSize;ye++)B(le.location+ye,rt/le.locationSize,J,Te,xe*Ke,(Ue+rt/le.locationSize*ye)*Ke,ie)}else{if(me.isInstancedBufferAttribute){for(let ne=0;ne<le.locationSize;ne++)M(le.location+ne,me.meshPerAttribute);V.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ne=0;ne<le.locationSize;ne++)y(le.location+ne);a.bindBuffer(a.ARRAY_BUFFER,G);for(let ne=0;ne<le.locationSize;ne++)B(le.location+ne,rt/le.locationSize,J,Te,rt*Ke,rt/le.locationSize*ne*Ke,ie)}}else if($!==void 0){const Te=$[D];if(Te!==void 0)switch(Te.length){case 2:a.vertexAttrib2fv(le.location,Te);break;case 3:a.vertexAttrib3fv(le.location,Te);break;case 4:a.vertexAttrib4fv(le.location,Te);break;default:a.vertexAttrib1fv(le.location,Te)}}}}U()}function O(){T();for(const V in r){const ee=r[V];for(const I in ee){const Q=ee[I];for(const ae in Q){const W=Q[ae];for(const $ in W)x(W[$].object),delete W[$];delete Q[ae]}}delete r[V]}}function P(V){if(r[V.id]===void 0)return;const ee=r[V.id];for(const I in ee){const Q=ee[I];for(const ae in Q){const W=Q[ae];for(const $ in W)x(W[$].object),delete W[$];delete Q[ae]}}delete r[V.id]}function F(V){for(const ee in r){const I=r[ee];for(const Q in I){const ae=I[Q];if(ae[V.id]===void 0)continue;const W=ae[V.id];for(const $ in W)x(W[$].object),delete W[$];delete ae[V.id]}}}function w(V){for(const ee in r){const I=r[ee],Q=V.isInstancedMesh===!0?V.id:0,ae=I[Q];if(ae!==void 0){for(const W in ae){const $=ae[W];for(const D in $)x($[D].object),delete $[D];delete ae[W]}delete I[Q],Object.keys(I).length===0&&delete r[ee]}}}function T(){H(),u=!0,c!==o&&(c=o,m(c.object))}function H(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:T,resetDefaultState:H,dispose:O,releaseStatesOfGeometry:P,releaseStatesOfObject:w,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:y,disableUnusedAttributes:U}}function Vw(a,e,n){let r;function o(p){r=p}function c(p,m){a.drawArrays(r,p,m),n.update(m,r,1)}function u(p,m,x){x!==0&&(a.drawArraysInstanced(r,p,m,x),n.update(m,r,x))}function d(p,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,x);let v=0;for(let _=0;_<x;_++)v+=m[_];n.update(v,r,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d}function kw(a,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==pa&&r.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const w=F===za&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Gi&&F!==Oa&&!w&&r.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE))}function p(F){if(F==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const x=p(m);x!==m&&(Bt("WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const g=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&v===!1&&Bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const _=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),M=a.getParameter(a.MAX_VERTEX_ATTRIBS),U=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),B=a.getParameter(a.MAX_VARYING_VECTORS),R=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),O=a.getParameter(a.MAX_SAMPLES),P=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:_,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:y,maxAttributes:M,maxVertexUniforms:U,maxVaryings:B,maxFragmentUniforms:R,maxSamples:O,samples:P}}function Xw(a){const e=this;let n=null,r=0,o=!1,c=!1;const u=new qr,d=new Vt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const _=g.length!==0||v||r!==0||o;return o=v,r=g.length,_},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,v){n=x(g,v,0)},this.setState=function(g,v,_){const E=g.clippingPlanes,C=g.clipIntersection,y=g.clipShadows,M=a.get(g);if(!o||E===null||E.length===0||c&&!y)c?x(null):m();else{const U=c?0:r,B=U*4;let R=M.clippingState||null;p.value=R,R=x(E,v,B,_);for(let O=0;O!==B;++O)R[O]=n[O];M.clippingState=R,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=U}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(g,v,_,E){const C=g!==null?g.length:0;let y=null;if(C!==0){if(y=p.value,E!==!0||y===null){const M=_+C*4,U=v.matrixWorldInverse;d.getNormalMatrix(U),(y===null||y.length<M)&&(y=new Float32Array(M));for(let B=0,R=_;B!==C;++B,R+=4)u.copy(g[B]).applyMatrix4(U,d),u.normal.toArray(y,R),y[R+3]=u.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}const Oo=4,qw=6,Ww=20,Yw=256,Bl=new C0,z1=new Qt;let kp=null,Xp=0,qp=0,Wp=!1;const Zw=new oe,ys=new oe;class i0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,c={}){const{size:u=256,position:d=Zw}=c;kp=this._renderer.getRenderTarget(),Xp=this._renderer.getActiveCubeFace(),qp=this._renderer.getActiveMipmapLevel(),Wp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,d),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=G1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=H1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(kp,Xp,qp),this._renderer.xr.enabled=Wp,e.scissorTest=!1,Ao(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Es||e.mapping===Io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kp=this._renderer.getRenderTarget(),Xp=this._renderer.getActiveCubeFace(),qp=this._renderer.getActiveMipmapLevel(),Wp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:za,format:pa,colorSpace:Sf,depthBuffer:!1},o=B1(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=B1(e,n,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Kw(c)),this._blurMaterial=jw(c,e,n),this._ggxMaterial=Qw(c,e,n)}return o}_compileMaterial(e){const n=new ri(new Vi,e);this._renderer.compile(n,Bl)}_sceneToCubeUV(e,n,r,o,c){const p=new ea(90,1,n,r),m=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,_=g.toneMapping;g.getClearColor(z1),g.toneMapping=Fa,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ri(new hc,new b0({name:"PMREM.Background",side:Di,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let M=!1;const U=e.background;U?U.isColor&&(y.color.copy(U),e.background=null,M=!0):(y.color.copy(z1),M=!0);for(let B=0;B<6;B++){const R=B%3;R===0?(p.up.set(0,m[B],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+x[B],c.y,c.z)):R===1?(p.up.set(0,0,m[B]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+x[B],c.z)):(p.up.set(0,m[B],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+x[B]));const O=this._cubeSize;Ao(o,R*O,B>2?O:0,O,O),g.setRenderTarget(o),M&&g.render(C,p),g.render(e,p)}g.toneMapping=_,g.autoClear=v,e.background=U}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===Es||e.mapping===Io;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=G1()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=H1());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;Ao(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(u,Bl)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const p=u.uniforms,m=r/(this._lodMeshes.length-1),x=n/(this._lodMeshes.length-1),g=Math.sqrt(m*m-x*x),v=m*1.25,_=g*v,{_lodMax:E}=this,C=this._sizeLods[r],y=3*C*(r>E-Oo?r-E+Oo:0),M=4*(this._cubeSize-C);p.envMap.value=e.texture,p.roughness.value=_,p.mipInt.value=E-n,Ao(c,y,M,3*C,2*C),o.setRenderTarget(c),o.render(d,Bl),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=E-r,Ao(e,y,M,3*C,2*C),o.setRenderTarget(e),o.render(d,Bl)}_blur(e,n,r,o){const c=this._pingPongRenderTarget,u=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,c,n,r,u),this._blurPass(c,e,r,r,u)}_blurPass(e,n,r,o,c){const u=this._renderer,d=this._blurMaterial,p=this._lodMeshes[o];p.material=d;const m=d.uniforms;m.envMap.value=e.texture,m.sigma.value=c,m.mipInt.value=this._lodMax-r;const x=this._sizeLods[o],g=3*x*(o>this._lodMax-Oo?o-this._lodMax+Oo:0),v=4*(this._cubeSize-x);Ao(n,g,v,3*x,2*x),u.setRenderTarget(n),u.render(p,Bl)}}function Kw(a){const e=[],n=[];let r=a;const o=a-Oo+1+qw;for(let c=0;c<o;c++){const u=Math.pow(2,r);e.push(u);const d=1/(u-2),p=-d,m=1+d,x=[p,p,m,p,m,m,p,p,m,m,p,m],g=6,v=6,_=3,E=new Float32Array(_*v*g),C=new Float32Array(_*v*g);for(let M=0;M<g;M++){const U=M%3*2/3-1,B=M>2?0:-1,R=[U,B,0,U+2/3,B,0,U+2/3,B+1,0,U,B,0,U+2/3,B+1,0,U,B+1,0];E.set(R,_*v*M);for(let O=0;O<v;O++){const P=x[O*2]*2-1,F=x[O*2+1]*2-1;M===0?ys.set(1,F,P):M===1?ys.set(-P,1,-F):M===2?ys.set(-P,F,1):M===3?ys.set(-1,F,-P):M===4?ys.set(-P,-1,F):ys.set(P,F,-1),ys.toArray(C,(M*v+O)*_)}}const y=new Vi;y.setAttribute("position",new ta(E,_)),y.setAttribute("outputDirection",new ta(C,_)),n.push(new ri(y,null)),r>Oo&&r--}return{lodMeshes:n,sizeLods:e}}function B1(a,e,n){const r=new ga(a,e,n);return r.texture.mapping=Cf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ao(a,e,n,r,o){a.viewport.set(e,n,r,o),a.scissor.set(e,n,r,o)}function Qw(a,e,n){return new Ha({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Yw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function jw(a,e,n){return new Ha({name:"SphericalGaussianBlur",defines:{SAMPLES:Ww,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Lf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function H1(){return new Ha({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lf(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function G1(){return new Ha({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Lf(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class HS extends ga{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new bS(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new hc(5,5,5),c=new Ha({name:"CubemapFromEquirect",uniforms:Ho(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Di,blending:ur});c.uniforms.tEquirect.value=n;const u=new ri(o,c),d=n.minFilter;return n.minFilter===Yr&&(n.minFilter=oi),new e3(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(c)}}function Jw(a){let e=new WeakMap,n=new WeakMap,r=null;function o(v,_=!1){return v==null?null:_?u(v):c(v)}function c(v){if(v&&v.isTexture){const _=v.mapping;if(_===dp||_===pp)if(e.has(v)){const E=e.get(v).texture;return d(E,v.mapping)}else{const E=v.image;if(E&&E.height>0){const C=new HS(E.height);return C.fromEquirectangularTexture(a,v),e.set(v,C),v.addEventListener("dispose",m),d(C.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const _=v.mapping,E=_===dp||_===pp,C=_===Es||_===Io;if(E||C){let y=n.get(v);const M=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==M)return r===null&&(r=new i0(a)),y=E?r.fromEquirectangular(v,y):r.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,n.set(v,y),y.texture;if(y!==void 0)return y.texture;{const U=v.image;return E&&U&&U.height>0||C&&U&&p(U)?(r===null&&(r=new i0(a)),y=E?r.fromEquirectangular(v):r.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,n.set(v,y),v.addEventListener("dispose",x),y.texture):null}}}return v}function d(v,_){return _===dp?v.mapping=Es:_===pp&&(v.mapping=Io),v}function p(v){let _=0;const E=6;for(let C=0;C<E;C++)v[C]!==void 0&&_++;return _===E}function m(v){const _=v.target;_.removeEventListener("dispose",m);const E=e.get(_);E!==void 0&&(e.delete(_),E.dispose())}function x(v){const _=v.target;_.removeEventListener("dispose",x);const E=n.get(_);E!==void 0&&(n.delete(_),E.dispose())}function g(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:g}}function $w(a){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Po("WebGLRenderer: "+r+" extension not supported."),o}}}function eR(a,e,n,r){const o={},c=new WeakMap;function u(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete o[v.id];const _=c.get(v);_&&(e.remove(_),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function d(g,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,n.memory.geometries++),v}function p(g){const v=g.attributes;for(const _ in v)e.update(v[_],a.ARRAY_BUFFER)}function m(g){const v=[],_=g.index,E=g.attributes.position;let C=0;if(E===void 0)return;if(_!==null){const U=_.array;C=_.version;for(let B=0,R=U.length;B<R;B+=3){const O=U[B+0],P=U[B+1],F=U[B+2];v.push(O,P,P,F,F,O)}}else{const U=E.array;C=E.version;for(let B=0,R=U.length/3-1;B<R;B+=3){const O=B+0,P=B+1,F=B+2;v.push(O,P,P,F,F,O)}}const y=new(E.count>=65535?SS:yS)(v,1);y.version=C;const M=c.get(g);M&&e.remove(M),c.set(g,y)}function x(g){const v=c.get(g);if(v){const _=g.index;_!==null&&v.version<_.version&&m(g)}else m(g);return c.get(g)}return{get:d,update:p,getWireframeAttribute:x}}function tR(a,e,n){let r;function o(g){r=g}let c,u;function d(g){c=g.type,u=g.bytesPerElement}function p(g,v){a.drawElements(r,v,c,g*u),n.update(v,r,1)}function m(g,v,_){_!==0&&(a.drawElementsInstanced(r,v,c,g*u,_),n.update(v,r,_))}function x(g,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,c,g,0,_);let C=0;for(let y=0;y<_;y++)C+=v[y];n.update(C,r,1)}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=x}function nR(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,d){switch(n.calls++,u){case a.TRIANGLES:n.triangles+=d*(c/3);break;case a.LINES:n.lines+=d*(c/2);break;case a.LINE_STRIP:n.lines+=d*(c-1);break;case a.LINE_LOOP:n.lines+=d*c;break;case a.POINTS:n.points+=d*c;break;default:sn("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function iR(a,e,n){const r=new WeakMap,o=new Cn;function c(u,d,p){const m=u.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=x!==void 0?x.length:0;let v=r.get(d);if(v===void 0||v.count!==g){let H=function(){w.dispose(),r.delete(d),d.removeEventListener("dispose",H)};var _=H;v!==void 0&&v.texture.dispose();const E=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],B=d.morphAttributes.color||[];let R=0;E===!0&&(R=1),C===!0&&(R=2),y===!0&&(R=3);let O=d.attributes.position.count*R,P=1;O>e.maxTextureSize&&(P=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const F=new Float32Array(O*P*4*g),w=new gS(F,O,P,g);w.type=Oa,w.needsUpdate=!0;const T=R*4;for(let V=0;V<g;V++){const ee=M[V],I=U[V],Q=B[V],ae=O*P*4*V;for(let W=0;W<ee.count;W++){const $=W*T;E===!0&&(o.fromBufferAttribute(ee,W),F[ae+$+0]=o.x,F[ae+$+1]=o.y,F[ae+$+2]=o.z,F[ae+$+3]=0),C===!0&&(o.fromBufferAttribute(I,W),F[ae+$+4]=o.x,F[ae+$+5]=o.y,F[ae+$+6]=o.z,F[ae+$+7]=0),y===!0&&(o.fromBufferAttribute(Q,W),F[ae+$+8]=o.x,F[ae+$+9]=o.y,F[ae+$+10]=o.z,F[ae+$+11]=Q.itemSize===4?o.w:1)}}v={count:g,texture:w,size:new gt(O,P)},r.set(d,v),d.addEventListener("dispose",H)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(a,"morphTexture",u.morphTexture,n);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const C=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(a,"morphTargetBaseInfluence",C),p.getUniforms().setValue(a,"morphTargetInfluences",m)}p.getUniforms().setValue(a,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(a,"morphTargetsTextureSize",v.size)}return{update:c}}function aR(a,e,n,r,o){let c=new WeakMap;function u(m){const x=o.render.frame,g=m.geometry,v=e.get(m,g);if(c.get(v)!==x&&(e.update(v),c.set(v,x)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),c.get(m)!==x&&(n.update(m.instanceMatrix,a.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,a.ARRAY_BUFFER),c.set(m,x))),m.isSkinnedMesh){const _=m.skeleton;c.get(_)!==x&&(_.update(),c.set(_,x))}return v}function d(){c=new WeakMap}function p(m){const x=m.target;x.removeEventListener("dispose",p),r.releaseStatesOfObject(x),n.remove(x.instanceMatrix),x.instanceColor!==null&&n.remove(x.instanceColor)}return{update:u,dispose:d}}const rR={[tS]:"LINEAR_TONE_MAPPING",[nS]:"REINHARD_TONE_MAPPING",[iS]:"CINEON_TONE_MAPPING",[aS]:"ACES_FILMIC_TONE_MAPPING",[sS]:"AGX_TONE_MAPPING",[h0]:"NEUTRAL_TONE_MAPPING",[rS]:"CUSTOM_TONE_MAPPING"};function sR(a,e,n,r,o,c){const u=new ga(e,n,{type:a,depthBuffer:o,stencilBuffer:c,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,p=null;const m=new Vi;m.setAttribute("position",new li([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new li([0,2,0,0,2,0],2));const x=new ZT({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),g=new ri(m,x),v=new C0(-1,1,1,-1,0,1);let _=null,E=null,C=!1,y,M=null,U=[],B=!1;this.setSize=function(R,O){u.setSize(R,O),d!==null&&d.setSize(R,O),p!==null&&p.setSize(R,O);for(let P=0;P<U.length;P++){const F=U[P];F.setSize&&F.setSize(R,O)}},this.setEffects=function(R){U=R,B=U.length>0&&U[0].isRenderPass===!0;const O=u.width,P=u.height;U.length>0&&d===null&&(d=new ga(O,P,{type:za,depthBuffer:!1,stencilBuffer:!1}),p=new ga(O,P,{type:za,depthBuffer:!1,stencilBuffer:!1}));for(let F=0;F<U.length;F++){const w=U[F];w.setSize&&w.setSize(O,P)}},this.begin=function(R,O){if(C||R.toneMapping===Fa&&U.length===0)return!1;if(M=O,O!==null){const P=O.width,F=O.height;(u.width!==P||u.height!==F)&&this.setSize(P,F)}return B===!1&&R.setRenderTarget(u),y=R.toneMapping,R.toneMapping=Fa,!0},this.hasRenderPass=function(){return B},this.end=function(R,O){R.toneMapping=y,C=!0;let P=u,F=d;for(let w=0;w<U.length;w++){const T=U[w];T.enabled!==!1&&(T.render(R,F,P,O),T.needsSwap!==!1&&(P=F,F=F===d?p:d))}if(_!==R.outputColorSpace||E!==R.toneMapping){_=R.outputColorSpace,E=R.toneMapping,x.defines={},an.getTransfer(_)===pn&&(x.defines.SRGB_TRANSFER="");const w=rR[E];w&&(x.defines[w]=""),x.needsUpdate=!0}x.uniforms.tDiffuse.value=P.texture,R.setRenderTarget(M),R.render(g,v),M=null,C=!1},this.isCompositing=function(){return C},this.dispose=function(){u.dispose(),d!==null&&d.dispose(),p!==null&&p.dispose(),m.dispose(),x.dispose()}}const GS=new na,a0=new rc(1,1),VS=new gS,kS=new Zb,XS=new bS,V1=[],k1=[],X1=new Float32Array(16),q1=new Float32Array(9),W1=new Float32Array(4);function Vo(a,e,n){const r=a[0];if(r<=0||r>0)return a;const o=e*n;let c=V1[o];if(c===void 0&&(c=new Float32Array(o),V1[o]=c),e!==0){r.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=n,a[u].toArray(c,d)}return c}function Xn(a,e){if(a.length!==e.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==e[n])return!1;return!0}function qn(a,e){for(let n=0,r=e.length;n<r;n++)a[n]=e[n]}function Uf(a,e){let n=k1[e];n===void 0&&(n=new Int32Array(e),k1[e]=n);for(let r=0;r!==e;++r)n[r]=a.allocateTextureUnit();return n}function oR(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function lR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xn(n,e))return;a.uniform2fv(this.addr,e),qn(n,e)}}function cR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Xn(n,e))return;a.uniform3fv(this.addr,e),qn(n,e)}}function uR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xn(n,e))return;a.uniform4fv(this.addr,e),qn(n,e)}}function fR(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(Xn(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),qn(n,e)}else{if(Xn(n,r))return;W1.set(r),a.uniformMatrix2fv(this.addr,!1,W1),qn(n,r)}}function hR(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(Xn(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),qn(n,e)}else{if(Xn(n,r))return;q1.set(r),a.uniformMatrix3fv(this.addr,!1,q1),qn(n,r)}}function dR(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(Xn(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),qn(n,e)}else{if(Xn(n,r))return;X1.set(r),a.uniformMatrix4fv(this.addr,!1,X1),qn(n,r)}}function pR(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function mR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xn(n,e))return;a.uniform2iv(this.addr,e),qn(n,e)}}function gR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xn(n,e))return;a.uniform3iv(this.addr,e),qn(n,e)}}function vR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xn(n,e))return;a.uniform4iv(this.addr,e),qn(n,e)}}function xR(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function _R(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xn(n,e))return;a.uniform2uiv(this.addr,e),qn(n,e)}}function yR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xn(n,e))return;a.uniform3uiv(this.addr,e),qn(n,e)}}function SR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xn(n,e))return;a.uniform4uiv(this.addr,e),qn(n,e)}}function MR(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(a0.compareFunction=n.isReversedDepthBuffer()?y0:_0,c=a0):c=GS,n.setTexture2D(e||c,o)}function ER(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||kS,o)}function bR(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||XS,o)}function TR(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||VS,o)}function AR(a){switch(a){case 5126:return oR;case 35664:return lR;case 35665:return cR;case 35666:return uR;case 35674:return fR;case 35675:return hR;case 35676:return dR;case 5124:case 35670:return pR;case 35667:case 35671:return mR;case 35668:case 35672:return gR;case 35669:case 35673:return vR;case 5125:return xR;case 36294:return _R;case 36295:return yR;case 36296:return SR;case 35678:case 36198:case 36298:case 36306:case 35682:return MR;case 35679:case 36299:case 36307:return ER;case 35680:case 36300:case 36308:case 36293:return bR;case 36289:case 36303:case 36311:case 36292:return TR}}function wR(a,e){a.uniform1fv(this.addr,e)}function RR(a,e){const n=Vo(e,this.size,2);a.uniform2fv(this.addr,n)}function CR(a,e){const n=Vo(e,this.size,3);a.uniform3fv(this.addr,n)}function DR(a,e){const n=Vo(e,this.size,4);a.uniform4fv(this.addr,n)}function NR(a,e){const n=Vo(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function LR(a,e){const n=Vo(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function UR(a,e){const n=Vo(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function OR(a,e){a.uniform1iv(this.addr,e)}function PR(a,e){a.uniform2iv(this.addr,e)}function FR(a,e){a.uniform3iv(this.addr,e)}function IR(a,e){a.uniform4iv(this.addr,e)}function zR(a,e){a.uniform1uiv(this.addr,e)}function BR(a,e){a.uniform2uiv(this.addr,e)}function HR(a,e){a.uniform3uiv(this.addr,e)}function GR(a,e){a.uniform4uiv(this.addr,e)}function VR(a,e,n){const r=this.cache,o=e.length,c=Uf(n,o);Xn(r,c)||(a.uniform1iv(this.addr,c),qn(r,c));let u;this.type===a.SAMPLER_2D_SHADOW?u=a0:u=GS;for(let d=0;d!==o;++d)n.setTexture2D(e[d]||u,c[d])}function kR(a,e,n){const r=this.cache,o=e.length,c=Uf(n,o);Xn(r,c)||(a.uniform1iv(this.addr,c),qn(r,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||kS,c[u])}function XR(a,e,n){const r=this.cache,o=e.length,c=Uf(n,o);Xn(r,c)||(a.uniform1iv(this.addr,c),qn(r,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||XS,c[u])}function qR(a,e,n){const r=this.cache,o=e.length,c=Uf(n,o);Xn(r,c)||(a.uniform1iv(this.addr,c),qn(r,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||VS,c[u])}function WR(a){switch(a){case 5126:return wR;case 35664:return RR;case 35665:return CR;case 35666:return DR;case 35674:return NR;case 35675:return LR;case 35676:return UR;case 5124:case 35670:return OR;case 35667:case 35671:return PR;case 35668:case 35672:return FR;case 35669:case 35673:return IR;case 5125:return zR;case 36294:return BR;case 36295:return HR;case 36296:return GR;case 35678:case 36198:case 36298:case 36306:case 35682:return VR;case 35679:case 36299:case 36307:return kR;case 35680:case 36300:case 36308:case 36293:return XR;case 36289:case 36303:case 36311:case 36292:return qR}}class YR{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=AR(n.type)}}class ZR{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=WR(n.type)}}class KR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,n[d.id],r)}}}const Yp=/(\w+)(\])?(\[|\.)?/g;function Y1(a,e){a.seq.push(e),a.map[e.id]=e}function QR(a,e,n){const r=a.name,o=r.length;for(Yp.lastIndex=0;;){const c=Yp.exec(r),u=Yp.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&u+2===o){Y1(n,m===void 0?new YR(d,a,e):new ZR(d,a,e));break}else{let g=n.map[d];g===void 0&&(g=new KR(d),Y1(n,g)),n=g}}}class gf{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(n,u),p=e.getUniformLocation(n,d.name);QR(d,p,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,u=n.length;c!==u;++c){const d=n[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function Z1(a,e,n){const r=a.createShader(e);return a.shaderSource(r,n),a.compileShader(r),r}const jR=37297;let JR=0;function $R(a,e){const n=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return r.join(`
`)}const K1=new Vt;function eC(a){an._getMatrix(K1,an.workingColorSpace,a);const e=`mat3( ${K1.elements.map(n=>n.toFixed(4))} )`;switch(an.getTransfer(a)){case Mf:return[e,"LinearTransferOETF"];case pn:return[e,"sRGBTransferOETF"];default:return Bt("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Q1(a,e,n){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+$R(a.getShaderSource(e),d)}else return c}function tC(a,e){const n=eC(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const nC={[tS]:"Linear",[nS]:"Reinhard",[iS]:"Cineon",[aS]:"ACESFilmic",[sS]:"AgX",[h0]:"Neutral",[rS]:"Custom"};function iC(a,e){const n=nC[e];return n===void 0?(Bt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const af=new oe;function aC(){an.getLuminanceCoefficients(af);const a=af.x.toFixed(4),e=af.y.toFixed(4),n=af.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rC(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ql).join(`
`)}function sC(a){const e=[];for(const n in a){const r=a[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function oC(a,e){const n={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),u=c.name;let d=1;c.type===a.FLOAT_MAT2&&(d=2),c.type===a.FLOAT_MAT3&&(d=3),c.type===a.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:a.getAttribLocation(e,u),locationSize:d}}return n}function ql(a){return a!==""}function j1(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function J1(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lC=/^[ \t]*#include +<([\w\d./]+)>/gm;function r0(a){return a.replace(lC,uC)}const cC=new Map;function uC(a,e){let n=Yt[e];if(n===void 0){const r=cC.get(e);if(r!==void 0)n=Yt[r],Bt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return r0(n)}const fC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $1(a){return a.replace(fC,hC)}function hC(a,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function ey(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const dC={[uf]:"SHADOWMAP_TYPE_PCF",[kl]:"SHADOWMAP_TYPE_VSM"};function pC(a){return dC[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const mC={[Es]:"ENVMAP_TYPE_CUBE",[Io]:"ENVMAP_TYPE_CUBE",[Cf]:"ENVMAP_TYPE_CUBE_UV"};function gC(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":mC[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const vC={[Io]:"ENVMAP_MODE_REFRACTION"};function xC(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":vC[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _C={[eS]:"ENVMAP_BLENDING_MULTIPLY",[Tb]:"ENVMAP_BLENDING_MIX",[Ab]:"ENVMAP_BLENDING_ADD"};function yC(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":_C[a.combine]||"ENVMAP_BLENDING_NONE"}function SC(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function MC(a,e,n,r){const o=a.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const p=pC(n),m=gC(n),x=xC(n),g=yC(n),v=SC(n),_=rC(n),E=sC(c),C=o.createProgram();let y,M,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(ql).join(`
`),y.length>0&&(y+=`
`),M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(ql).join(`
`),M.length>0&&(M+=`
`)):(y=[ey(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ql).join(`
`),M=[ey(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+x:"",n.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Fa?"#define TONE_MAPPING":"",n.toneMapping!==Fa?Yt.tonemapping_pars_fragment:"",n.toneMapping!==Fa?iC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,tC("linearToOutputTexel",n.outputColorSpace),aC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ql).join(`
`)),u=r0(u),u=j1(u,n),u=J1(u,n),d=r0(d),d=j1(d,n),d=J1(d,n),u=$1(u),d=$1(d),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,M=["#define varying in",n.glslVersion===r1?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===r1?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const B=U+y+u,R=U+M+d,O=Z1(o,o.VERTEX_SHADER,B),P=Z1(o,o.FRAGMENT_SHADER,R);o.attachShader(C,O),o.attachShader(C,P),n.index0AttributeName!==void 0?o.bindAttribLocation(C,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function F(V){if(a.debug.checkShaderErrors){const ee=o.getProgramInfoLog(C)||"",I=o.getShaderInfoLog(O)||"",Q=o.getShaderInfoLog(P)||"",ae=ee.trim(),W=I.trim(),$=Q.trim();let D=!0,le=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(D=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,C,O,P);else{const me=Q1(o,O,"vertex"),Te=Q1(o,P,"fragment");sn("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ae+`
`+me+`
`+Te)}else ae!==""?Bt("WebGLProgram: Program Info Log:",ae):(W===""||$==="")&&(le=!1);le&&(V.diagnostics={runnable:D,programLog:ae,vertexShader:{log:W,prefix:y},fragmentShader:{log:$,prefix:M}})}o.deleteShader(O),o.deleteShader(P),w=new gf(o,C),T=oC(o,C)}let w;this.getUniforms=function(){return w===void 0&&F(this),w};let T;this.getAttributes=function(){return T===void 0&&F(this),T};let H=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=o.getProgramParameter(C,jR)),H},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=JR++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=O,this.fragmentShader=P,this}let EC=0;class bC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,r){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new TC(e),n.set(e,r)),r}}class TC{constructor(e){this.id=EC++,this.code=e,this.usedTimes=0}}function AC(a){return a===bs||a===_f||a===yf}function wC(a,e,n,r,o,c){const u=new M0,d=new bC,p=new Set,m=[],x=new Map,g=r.logarithmicDepthBuffer;let v=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(w){return p.add(w),w===0?"uv":`uv${w}`}function C(w,T,H,V,ee,I){const Q=V.fog,ae=ee.geometry,W=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?V.environment:null,$=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,D=e.get(w.envMap||W,$),le=D&&D.mapping===Cf?D.image.height:null,me=_[w.type];w.precision!==null&&(v=r.getMaxPrecision(w.precision),v!==w.precision&&Bt("WebGLProgram.getParameters:",w.precision,"not supported, using",v,"instead."));const Te=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,rt=Te!==void 0?Te.length:0;let je=0;ae.morphAttributes.position!==void 0&&(je=1),ae.morphAttributes.normal!==void 0&&(je=2),ae.morphAttributes.color!==void 0&&(je=3);let G,J,Ke,ie;if(me){const Pt=La[me];G=Pt.vertexShader,J=Pt.fragmentShader}else{G=w.vertexShader,J=w.fragmentShader;const Pt=d.getVertexShaderStage(w),Ft=d.getFragmentShaderStage(w);d.update(w,Pt,Ft),Ke=Pt.id,ie=Ft.id}const ne=a.getRenderTarget(),xe=a.state.buffers.depth.getReversed(),Ue=ee.isInstancedMesh===!0,ye=ee.isBatchedMesh===!0,we=!!w.map,_t=!!w.matcap,Ae=!!D,Fe=!!w.aoMap,ue=!!w.lightMap,Oe=!!w.bumpMap&&w.wireframe===!1,He=!!w.normalMap,vt=!!w.displacementMap,mt=!!w.emissiveMap,Je=!!w.metalnessMap,Tt=!!w.roughnessMap,j=w.anisotropy>0,nt=w.clearcoat>0,ze=w.dispersion>0,L=w.retroreflectivity>0,b=w.iridescence>0,q=w.sheen>0,z=w.transmission>0,_e=j&&!!w.anisotropyMap,Ce=nt&&!!w.clearcoatMap,te=nt&&!!w.clearcoatNormalMap,Z=nt&&!!w.clearcoatRoughnessMap,K=b&&!!w.iridescenceMap,ce=b&&!!w.iridescenceThicknessMap,Be=q&&!!w.sheenColorMap,Le=q&&!!w.sheenRoughnessMap,Ie=!!w.specularMap,Qe=!!w.specularColorMap,st=!!w.specularIntensityMap,dt=z&&!!w.transmissionMap,X=z&&!!w.thicknessMap,Ge=!!w.gradientMap,Me=!!w.alphaMap,qe=w.alphaTest>0,et=!!w.alphaHash,Ye=!!w.extensions;let St=Fa;w.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(St=a.toneMapping);const ft={shaderID:me,shaderType:w.type,shaderName:w.name,vertexShader:G,fragmentShader:J,defines:w.defines,customVertexShaderID:Ke,customFragmentShaderID:ie,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:v,batching:ye,batchingColor:ye&&ee._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&ee.instanceColor!==null,instancingMorph:Ue&&ee.morphTexture!==null,outputColorSpace:ne===null?a.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:an.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:we,matcap:_t,envMap:Ae,envMapMode:Ae&&D.mapping,envMapCubeUVHeight:le,aoMap:Fe,lightMap:ue,bumpMap:Oe,normalMap:He,displacementMap:vt,emissiveMap:mt,normalMapObjectSpace:He&&w.normalMapType===Cb,normalMapTangentSpace:He&&w.normalMapType===Km,packedNormalMap:He&&w.normalMapType===Km&&AC(w.normalMap.format),metalnessMap:Je,roughnessMap:Tt,anisotropy:j,anisotropyMap:_e,clearcoat:nt,clearcoatMap:Ce,clearcoatNormalMap:te,clearcoatRoughnessMap:Z,dispersion:ze,retroreflection:L,iridescence:b,iridescenceMap:K,iridescenceThicknessMap:ce,sheen:q,sheenColorMap:Be,sheenRoughnessMap:Le,specularMap:Ie,specularColorMap:Qe,specularIntensityMap:st,transmission:z,transmissionMap:dt,thicknessMap:X,gradientMap:Ge,opaque:w.transparent===!1&&w.blending===Zl&&w.alphaToCoverage===!1,alphaMap:Me,alphaTest:qe,alphaHash:et,combine:w.combine,mapUv:we&&E(w.map.channel),aoMapUv:Fe&&E(w.aoMap.channel),lightMapUv:ue&&E(w.lightMap.channel),bumpMapUv:Oe&&E(w.bumpMap.channel),normalMapUv:He&&E(w.normalMap.channel),displacementMapUv:vt&&E(w.displacementMap.channel),emissiveMapUv:mt&&E(w.emissiveMap.channel),metalnessMapUv:Je&&E(w.metalnessMap.channel),roughnessMapUv:Tt&&E(w.roughnessMap.channel),anisotropyMapUv:_e&&E(w.anisotropyMap.channel),clearcoatMapUv:Ce&&E(w.clearcoatMap.channel),clearcoatNormalMapUv:te&&E(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&E(w.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&E(w.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&E(w.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&E(w.sheenColorMap.channel),sheenRoughnessMapUv:Le&&E(w.sheenRoughnessMap.channel),specularMapUv:Ie&&E(w.specularMap.channel),specularColorMapUv:Qe&&E(w.specularColorMap.channel),specularIntensityMapUv:st&&E(w.specularIntensityMap.channel),transmissionMapUv:dt&&E(w.transmissionMap.channel),thicknessMapUv:X&&E(w.thicknessMap.channel),alphaMapUv:Me&&E(w.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(He||j),vertexNormals:!!ae.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!ae.attributes.uv&&(we||Me),fog:!!Q,useFog:w.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||ae.attributes.normal===void 0&&He===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:xe,skinning:ee.isSkinnedMesh===!0,hasPositionAttribute:ae.attributes.position!==void 0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:je,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:w.dithering,shadowMapEnabled:a.shadowMap.enabled&&H.length>0,shadowMapType:a.shadowMap.type,toneMapping:St,decodeVideoTexture:we&&w.map.isVideoTexture===!0&&an.getTransfer(w.map.colorSpace)===pn,decodeVideoTextureEmissive:mt&&w.emissiveMap.isVideoTexture===!0&&an.getTransfer(w.emissiveMap.colorSpace)===pn,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===da,flipSided:w.side===Di,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ye&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&w.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ft.vertexUv1s=p.has(1),ft.vertexUv2s=p.has(2),ft.vertexUv3s=p.has(3),p.clear(),ft}function y(w){const T=[];if(w.shaderID?T.push(w.shaderID):(T.push(w.customVertexShaderID),T.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)T.push(H),T.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(M(T,w),U(T,w),T.push(a.outputColorSpace)),T.push(w.customProgramCacheKey),T.join()}function M(w,T){w.push(T.precision),w.push(T.outputColorSpace),w.push(T.envMapMode),w.push(T.envMapCubeUVHeight),w.push(T.mapUv),w.push(T.alphaMapUv),w.push(T.lightMapUv),w.push(T.aoMapUv),w.push(T.bumpMapUv),w.push(T.normalMapUv),w.push(T.displacementMapUv),w.push(T.emissiveMapUv),w.push(T.metalnessMapUv),w.push(T.roughnessMapUv),w.push(T.anisotropyMapUv),w.push(T.clearcoatMapUv),w.push(T.clearcoatNormalMapUv),w.push(T.clearcoatRoughnessMapUv),w.push(T.iridescenceMapUv),w.push(T.iridescenceThicknessMapUv),w.push(T.sheenColorMapUv),w.push(T.sheenRoughnessMapUv),w.push(T.specularMapUv),w.push(T.specularColorMapUv),w.push(T.specularIntensityMapUv),w.push(T.transmissionMapUv),w.push(T.thicknessMapUv),w.push(T.combine),w.push(T.fogExp2),w.push(T.sizeAttenuation),w.push(T.morphTargetsCount),w.push(T.morphAttributeCount),w.push(T.numSunLights),w.push(T.numDirLights),w.push(T.numPointLights),w.push(T.numSpotLights),w.push(T.numSpotLightMaps),w.push(T.numHemiLights),w.push(T.numRectAreaLights),w.push(T.numSunLightShadows),w.push(T.numDirLightShadows),w.push(T.numPointLightShadows),w.push(T.numSpotLightShadows),w.push(T.numSpotLightShadowsWithMaps),w.push(T.numLightProbes),w.push(T.shadowMapType),w.push(T.toneMapping),w.push(T.numClippingPlanes),w.push(T.numClipIntersection),w.push(T.depthPacking)}function U(w,T){u.disableAll(),T.instancing&&u.enable(0),T.instancingColor&&u.enable(1),T.instancingMorph&&u.enable(2),T.matcap&&u.enable(3),T.envMap&&u.enable(4),T.normalMapObjectSpace&&u.enable(5),T.normalMapTangentSpace&&u.enable(6),T.clearcoat&&u.enable(7),T.iridescence&&u.enable(8),T.alphaTest&&u.enable(9),T.vertexColors&&u.enable(10),T.vertexAlphas&&u.enable(11),T.vertexUv1s&&u.enable(12),T.vertexUv2s&&u.enable(13),T.vertexUv3s&&u.enable(14),T.vertexTangents&&u.enable(15),T.anisotropy&&u.enable(16),T.alphaHash&&u.enable(17),T.batching&&u.enable(18),T.dispersion&&u.enable(19),T.retroreflection&&u.enable(24),T.batchingColor&&u.enable(20),T.gradientMap&&u.enable(21),T.packedNormalMap&&u.enable(22),T.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),T.fog&&u.enable(0),T.useFog&&u.enable(1),T.flatShading&&u.enable(2),T.logarithmicDepthBuffer&&u.enable(3),T.reversedDepthBuffer&&u.enable(4),T.skinning&&u.enable(5),T.morphTargets&&u.enable(6),T.morphNormals&&u.enable(7),T.morphColors&&u.enable(8),T.premultipliedAlpha&&u.enable(9),T.shadowMapEnabled&&u.enable(10),T.doubleSided&&u.enable(11),T.flipSided&&u.enable(12),T.useDepthPacking&&u.enable(13),T.dithering&&u.enable(14),T.transmission&&u.enable(15),T.sheen&&u.enable(16),T.opaque&&u.enable(17),T.pointsUvs&&u.enable(18),T.decodeVideoTexture&&u.enable(19),T.decodeVideoTextureEmissive&&u.enable(20),T.alphaToCoverage&&u.enable(21),T.numLightProbeGrids>0&&u.enable(22),T.hasPositionAttribute&&u.enable(23),w.push(u.mask)}function B(w){const T=_[w.type];let H;if(T){const V=La[T];H=qT.clone(V.uniforms)}else H=w.uniforms;return H}function R(w,T){let H=x.get(T);return H!==void 0?++H.usedTimes:(H=new MC(a,T,w,o),m.push(H),x.set(T,H)),H}function O(w){if(--w.usedTimes===0){const T=m.indexOf(w);m[T]=m[m.length-1],m.pop(),x.delete(w.cacheKey),w.destroy()}}function P(w){d.remove(w)}function F(){d.dispose()}return{getParameters:C,getProgramCacheKey:y,getUniforms:B,acquireProgram:R,releaseProgram:O,releaseShaderCache:P,programs:m,dispose:F}}function RC(){let a=new WeakMap;function e(u){return a.has(u)}function n(u){let d=a.get(u);return d===void 0&&(d={},a.set(u,d)),d}function r(u){a.delete(u)}function o(u,d,p){a.get(u)[d]=p}function c(){a=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function CC(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function ty(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function ny(){const a=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function u(v){let _=0;return v.isInstancedMesh&&(_+=2),v.isSkinnedMesh&&(_+=1),_}function d(v,_,E,C,y,M){let U=a[e];return U===void 0?(U={id:v.id,object:v,geometry:_,material:E,materialVariant:u(v),groupOrder:C,renderOrder:v.renderOrder,z:y,group:M},a[e]=U):(U.id=v.id,U.object=v,U.geometry=_,U.material=E,U.materialVariant=u(v),U.groupOrder=C,U.renderOrder=v.renderOrder,U.z=y,U.group=M),e++,U}function p(v,_,E,C,y,M,U){U.reversedDepth===!0&&(y=-y);const B=d(v,_,E,C,y,M);E.transmission>0?r.push(B):E.transparent===!0?o.push(B):n.push(B)}function m(v,_,E,C,y,M){const U=d(v,_,E,C,y,M);E.transmission>0?r.unshift(U):E.transparent===!0?o.unshift(U):n.unshift(U)}function x(v,_){n.length>1&&n.sort(v||CC),r.length>1&&r.sort(_||ty),o.length>1&&o.sort(_||ty)}function g(){for(let v=e,_=a.length;v<_;v++){const E=a[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:p,unshift:m,finish:g,sort:x}}function DC(){let a=new WeakMap;function e(r,o){const c=a.get(r);let u;return c===void 0?(u=new ny,a.set(r,[u])):o>=c.length?(u=new ny,c.push(u)):u=c[o],u}function n(){a=new WeakMap}return{get:e,dispose:n}}function NC(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new oe,color:new Qt};break;case"SpotLight":n={position:new oe,direction:new oe,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new oe,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new oe,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":n={color:new Qt,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return a[e.id]=n,n}}}function LC(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let UC=0;function OC(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function PC(a){const e=new NC,n=LC(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new oe);const o=new oe,c=new En,u=new En;function d(m){let x=0,g=0,v=0;for(let ee=0;ee<9;ee++)r.probe[ee].set(0,0,0);let _=0,E=0,C=0,y=0,M=0,U=0,B=0,R=0,O=0,P=0,F=0,w=0,T=0,H=0;m.sort(OC);for(let ee=0,I=m.length;ee<I;ee++){const Q=m[ee],ae=Q.color,W=Q.intensity,$=Q.distance;let D=null;if(Q.shadow&&Q.shadow.map&&(Q.shadow.map.texture.format===bs?D=Q.shadow.map.texture:D=Q.shadow.map.depthTexture||Q.shadow.map.texture),Q.isAmbientLight)x+=ae.r*W,g+=ae.g*W,v+=ae.b*W;else if(Q.isLightProbe){for(let le=0;le<9;le++)r.probe[le].addScaledVector(Q.sh.coefficients[le],W);H++}else if(Q.isSunLight){const le=e.get(Q);if(le.color.copy(Q.color).multiplyScalar(Q.intensity),Q.castShadow){const me=Q.shadow,Te=n.get(Q);Te.shadowIntensity=me.intensity,Te.shadowBias=me.bias,Te.shadowNormalBias=me.normalBias,Te.shadowRadius=me.radius,Te.shadowMapSize.copy(me.mapSize).multiply(me.getFrameExtents()),r.sunShadow[E]=Te,r.sunShadowMap[E]=D;const rt=me.getViewportCount();for(let je=0;je<rt;je++)r.sunShadowMatrix[C+je]=me.getMatrix(je),r.sunShadowCascade[C+je]=me._cascadeData[je];C+=rt,E++}r.sun[_]=le,_++}else if(Q.isDirectionalLight){const le=e.get(Q);if(le.color.copy(Q.color).multiplyScalar(Q.intensity),Q.castShadow){const me=Q.shadow,Te=n.get(Q);Te.shadowIntensity=me.intensity,Te.shadowBias=me.bias,Te.shadowNormalBias=me.normalBias,Te.shadowRadius=me.radius,Te.shadowMapSize=me.mapSize,r.directionalShadow[y]=Te,r.directionalShadowMap[y]=D,r.directionalShadowMatrix[y]=Q.shadow.matrix,O++}r.directional[y]=le,y++}else if(Q.isSpotLight){const le=e.get(Q);le.position.setFromMatrixPosition(Q.matrixWorld),le.color.copy(ae).multiplyScalar(W),le.distance=$,le.coneCos=Math.cos(Q.angle),le.penumbraCos=Math.cos(Q.angle*(1-Q.penumbra)),le.decay=Q.decay,r.spot[U]=le;const me=Q.shadow;if(Q.map&&(r.spotLightMap[w]=Q.map,w++,me.updateMatrices(Q),Q.castShadow&&T++),r.spotLightMatrix[U]=me.matrix,Q.castShadow){const Te=n.get(Q);Te.shadowIntensity=me.intensity,Te.shadowBias=me.bias,Te.shadowNormalBias=me.normalBias,Te.shadowRadius=me.radius,Te.shadowMapSize=me.mapSize,r.spotShadow[U]=Te,r.spotShadowMap[U]=D,F++}U++}else if(Q.isRectAreaLight){const le=e.get(Q);le.color.copy(ae).multiplyScalar(W),le.halfWidth.set(Q.width*.5,0,0),le.halfHeight.set(0,Q.height*.5,0),r.rectArea[B]=le,B++}else if(Q.isPointLight){const le=e.get(Q);if(le.color.copy(Q.color).multiplyScalar(Q.intensity),le.distance=Q.distance,le.decay=Q.decay,Q.castShadow){const me=Q.shadow,Te=n.get(Q);Te.shadowIntensity=me.intensity,Te.shadowBias=me.bias,Te.shadowNormalBias=me.normalBias,Te.shadowRadius=me.radius,Te.shadowMapSize=me.mapSize,Te.shadowCameraNear=me.camera.near,Te.shadowCameraFar=me.camera.far,r.pointShadow[M]=Te,r.pointShadowMap[M]=D,r.pointShadowMatrix[M]=Q.shadow.matrix,P++}r.point[M]=le,M++}else if(Q.isHemisphereLight){const le=e.get(Q);le.skyColor.copy(Q.color).multiplyScalar(W),le.groundColor.copy(Q.groundColor).multiplyScalar(W),r.hemi[R]=le,R++}}B>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Mt.LTC_FLOAT_1,r.rectAreaLTC2=Mt.LTC_FLOAT_2):(r.rectAreaLTC1=Mt.LTC_HALF_1,r.rectAreaLTC2=Mt.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=g,r.ambient[2]=v;const V=r.hash;(V.sunLength!==_||V.directionalLength!==y||V.pointLength!==M||V.spotLength!==U||V.rectAreaLength!==B||V.hemiLength!==R||V.numSunShadows!==E||V.numDirectionalShadows!==O||V.numPointShadows!==P||V.numSpotShadows!==F||V.numSpotMaps!==w||V.numLightProbes!==H)&&(r.sun.length=_,r.directional.length=y,r.spot.length=U,r.rectArea.length=B,r.point.length=M,r.hemi.length=R,r.sunShadow.length=E,r.sunShadowMap.length=E,r.sunShadowMatrix.length=C,r.sunShadowCascade.length=C,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.directionalShadowMatrix.length=O,r.pointShadow.length=P,r.pointShadowMap.length=P,r.pointShadowMatrix.length=P,r.spotShadow.length=F,r.spotShadowMap.length=F,r.spotLightMatrix.length=F+w-T,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=T,r.numLightProbes=H,V.sunLength=_,V.directionalLength=y,V.pointLength=M,V.spotLength=U,V.rectAreaLength=B,V.hemiLength=R,V.numSunShadows=E,V.numDirectionalShadows=O,V.numPointShadows=P,V.numSpotShadows=F,V.numSpotMaps=w,V.numLightProbes=H,r.version=UC++)}function p(m,x){let g=0,v=0,_=0,E=0,C=0,y=0;const M=x.matrixWorldInverse;for(let U=0,B=m.length;U<B;U++){const R=m[U];if(R.isSunLight){const O=r.sun[g];O.direction.setFromMatrixPosition(R.matrixWorld),O.direction.transformDirection(M),g++}else if(R.isDirectionalLight){const O=r.directional[v];O.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),O.direction.sub(o),O.direction.transformDirection(M),v++}else if(R.isSpotLight){const O=r.spot[E];O.position.setFromMatrixPosition(R.matrixWorld),O.position.applyMatrix4(M),O.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),O.direction.sub(o),O.direction.transformDirection(M),E++}else if(R.isRectAreaLight){const O=r.rectArea[C];O.position.setFromMatrixPosition(R.matrixWorld),O.position.applyMatrix4(M),u.identity(),c.copy(R.matrixWorld),c.premultiply(M),u.extractRotation(c),O.halfWidth.set(R.width*.5,0,0),O.halfHeight.set(0,R.height*.5,0),O.halfWidth.applyMatrix4(u),O.halfHeight.applyMatrix4(u),C++}else if(R.isPointLight){const O=r.point[_];O.position.setFromMatrixPosition(R.matrixWorld),O.position.applyMatrix4(M),_++}else if(R.isHemisphereLight){const O=r.hemi[y];O.direction.setFromMatrixPosition(R.matrixWorld),O.direction.transformDirection(M),y++}}}return{setup:d,setupView:p,state:r}}function iy(a){const e=new PC(a),n=[],r=[],o=[];function c(v){g.camera=v,n.length=0,r.length=0,o.length=0}function u(v){n.push(v)}function d(v){r.push(v)}function p(v){o.push(v)}function m(){e.setup(n)}function x(v){e.setupView(n,v)}const g={lightsArray:n,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:g,setupLights:m,setupLightsView:x,pushLight:u,pushShadow:d,pushLightProbeGrid:p}}function FC(a){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new iy(a),e.set(o,[d])):c>=u.length?(d=new iy(a),u.push(d)):d=u[c],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const IC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,BC=[new oe(1,0,0),new oe(-1,0,0),new oe(0,1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1)],HC=[new oe(0,-1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1),new oe(0,-1,0),new oe(0,-1,0)],ay=new En,Hl=new oe,Zp=new oe;function GC(a,e,n){let r=new T0;const o=new gt,c=new gt,u=new Cn,d=new KT,p=new QT,m={},x=n.maxTextureSize,g={[Ms]:Di,[Di]:Ms,[da]:da},v=new Ha({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:IC,fragmentShader:zC}),_=v.clone();_.defines.HORIZONTAL_PASS=1;const E=new Vi;E.setAttribute("position",new ta(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new ri(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uf;let M=this.type;this.render=function(P,F,w){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;this.type===sb&&(Bt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=uf);const T=a.getRenderTarget(),H=a.getActiveCubeFace(),V=a.getActiveMipmapLevel(),ee=a.state;ee.setBlending(ur),ee.buffers.depth.getReversed()===!0?ee.buffers.color.setClear(0,0,0,0):ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const I=M!==this.type;I&&F.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(ae=>ae.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,ae=P.length;Q<ae;Q++){const W=P[Q],$=W.shadow;if($===void 0){Bt("WebGLShadowMap:",W,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;o.copy($.mapSize);const D=$.getFrameExtents();o.multiply(D),c.copy($.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(c.x=Math.floor(x/D.x),o.x=c.x*D.x,$.mapSize.x=c.x),o.y>x&&(c.y=Math.floor(x/D.y),o.y=c.y*D.y,$.mapSize.y=c.y));const le=a.state.buffers.depth.getReversed();if($.camera._reversedDepth=le,$.map===null||I===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===kl){if(W.isPointLight){Bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new ga(o.x,o.y,{format:bs,type:za,minFilter:oi,magFilter:oi,generateMipmaps:!1}),$.map.texture.name=W.name+".shadowMap",$.map.depthTexture=new rc(o.x,o.y,Oa),$.map.depthTexture.name=W.name+".shadowMapDepth",$.map.depthTexture.format=hr,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=si,$.map.depthTexture.magFilter=si}else W.isPointLight?($.map=new HS(o.x),$.map.depthTexture=new uT(o.x,Ia)):($.map=new ga(o.x,o.y),$.map.depthTexture=new rc(o.x,o.y,Ia)),$.map.depthTexture.name=W.name+".shadowMap",$.map.depthTexture.format=hr,this.type===uf?($.map.depthTexture.compareFunction=le?y0:_0,$.map.depthTexture.minFilter=oi,$.map.depthTexture.magFilter=oi):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=si,$.map.depthTexture.magFilter=si);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==o.x||$.map.height!==o.y)&&$.map.setSize(o.x,o.y);const me=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();W.isPointLight!==!0&&$.updateMatrices(W,w);for(let Te=0;Te<me;Te++){const rt=$.getCamera(Te);if(W.isPointLight){const je=$.camera,G=$.matrix,J=W.distance||je.far;J!==je.far&&(je.far=J,je.updateProjectionMatrix()),Hl.setFromMatrixPosition(W.matrixWorld),je.position.copy(Hl),Zp.copy(je.position),Zp.add(BC[Te]),je.up.copy(HC[Te]),je.lookAt(Zp),je.updateMatrixWorld(),G.makeTranslation(-Hl.x,-Hl.y,-Hl.z),ay.multiplyMatrices(je.projectionMatrix,je.matrixWorldInverse),$._frustum.setFromProjectionMatrix(ay,je.coordinateSystem,je.reversedDepth)}if($.map.isWebGLCubeRenderTarget)a.setRenderTarget($.map,Te),a.clear();else{Te===0&&(a.setRenderTarget($.map),a.clear());const je=$.getViewport(Te);u.set(c.x*je.x,c.y*je.y,c.x*je.z,c.y*je.w),ee.viewport(u)}r=$.getFrustum(Te),R(F,w,rt,W,this.type)}$.isPointLightShadow!==!0&&this.type===kl&&U($,w),$.needsUpdate=!1}M=this.type,y.needsUpdate=!1,a.setRenderTarget(T,H,V)};function U(P,F){const w=e.update(C);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,_.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,_.needsUpdate=!0),P.mapPass===null?P.mapPass=new ga(o.x,o.y,{format:bs,type:za}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),v.uniforms.shadow_pass.value=P.map.depthTexture,v.uniforms.resolution.value.set(P.map.width,P.map.height),v.uniforms.radius.value=P.radius,a.setRenderTarget(P.mapPass),a.clear(),a.renderBufferDirect(F,null,w,v,C,null),_.uniforms.shadow_pass.value=P.mapPass.texture,_.uniforms.resolution.value.set(P.map.width,P.map.height),_.uniforms.radius.value=P.radius,a.setRenderTarget(P.map),a.clear(),a.renderBufferDirect(F,null,w,_,C,null)}function B(P,F,w,T){let H=null;const V=w.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(V!==void 0)H=V;else if(H=w.isPointLight===!0?p:d,a.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const ee=H.uuid,I=F.uuid;let Q=m[ee];Q===void 0&&(Q={},m[ee]=Q);let ae=Q[I];ae===void 0&&(ae=H.clone(),Q[I]=ae,F.addEventListener("dispose",O)),H=ae}if(H.visible=F.visible,H.wireframe=F.wireframe,T===kl?H.side=F.shadowSide!==null?F.shadowSide:F.side:H.side=F.shadowSide!==null?F.shadowSide:g[F.side],H.alphaMap=F.alphaMap,H.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,H.map=F.map,H.clipShadows=F.clipShadows,H.clippingPlanes=F.clippingPlanes,H.clipIntersection=F.clipIntersection,H.displacementMap=F.displacementMap,H.displacementScale=F.displacementScale,H.displacementBias=F.displacementBias,H.wireframeLinewidth=F.wireframeLinewidth,H.linewidth=F.linewidth,w.isPointLight===!0&&H.isMeshDistanceMaterial===!0){const ee=a.properties.get(H);ee.light=w}return H}function R(P,F,w,T,H){if(P.visible===!1)return;if(P.layers.test(F.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&H===kl)&&(!P.frustumCulled||P.intersectsFrustum(r))){P.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,P.matrixWorld);const I=e.update(P),Q=P.material;if(Array.isArray(Q)){const ae=I.groups;for(let W=0,$=ae.length;W<$;W++){const D=ae[W],le=Q[D.materialIndex];if(le&&le.visible){const me=B(P,le,T,H);P.onBeforeShadow(a,P,F,w,I,me,D),a.renderBufferDirect(w,null,I,me,P,D),P.onAfterShadow(a,P,F,w,I,me,D)}}}else if(Q.visible){const ae=B(P,Q,T,H);P.onBeforeShadow(a,P,F,w,I,ae,null),a.renderBufferDirect(w,null,I,ae,P,null),P.onAfterShadow(a,P,F,w,I,ae,null)}}const ee=P.children;for(let I=0,Q=ee.length;I<Q;I++)R(ee[I],F,w,T,H)}function O(P){P.target.removeEventListener("dispose",O);for(const w in m){const T=m[w],H=P.target.uuid;H in T&&(T[H].dispose(),delete T[H])}}}function VC(a,e){function n(){let X=!1;const Ge=new Cn;let Me=null;const qe=new Cn(0,0,0,0);return{setMask:function(et){Me!==et&&!X&&(a.colorMask(et,et,et,et),Me=et)},setLocked:function(et){X=et},setClear:function(et,Ye,St,ft,Pt){Pt===!0&&(et*=ft,Ye*=ft,St*=ft),Ge.set(et,Ye,St,ft),qe.equals(Ge)===!1&&(a.clearColor(et,Ye,St,ft),qe.copy(Ge))},reset:function(){X=!1,Me=null,qe.set(-1,0,0,0)}}}function r(){let X=!1,Ge=!1,Me=null,qe=null,et=null;return{setReversed:function(Ye){if(Ge!==Ye){const St=e.get("EXT_clip_control");Ye?St.clipControlEXT(St.LOWER_LEFT_EXT,St.ZERO_TO_ONE_EXT):St.clipControlEXT(St.LOWER_LEFT_EXT,St.NEGATIVE_ONE_TO_ONE_EXT),Ge=Ye;const ft=et;et=null,this.setClear(ft)}},getReversed:function(){return Ge},setTest:function(Ye){Ye?ne(a.DEPTH_TEST):xe(a.DEPTH_TEST)},setMask:function(Ye){Me!==Ye&&!X&&(a.depthMask(Ye),Me=Ye)},setFunc:function(Ye){if(Ge&&(Ye=Gb[Ye]),qe!==Ye){switch(Ye){case fm:a.depthFunc(a.NEVER);break;case hm:a.depthFunc(a.ALWAYS);break;case dm:a.depthFunc(a.LESS);break;case tc:a.depthFunc(a.LEQUAL);break;case pm:a.depthFunc(a.EQUAL);break;case mm:a.depthFunc(a.GEQUAL);break;case gm:a.depthFunc(a.GREATER);break;case vm:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}qe=Ye}},setLocked:function(Ye){X=Ye},setClear:function(Ye){et!==Ye&&(et=Ye,Ge&&(Ye=1-Ye),a.clearDepth(Ye))},reset:function(){X=!1,Me=null,qe=null,et=null,Ge=!1}}}function o(){let X=!1,Ge=null,Me=null,qe=null,et=null,Ye=null,St=null,ft=null,Pt=null;return{setTest:function(Ft){X||(Ft?ne(a.STENCIL_TEST):xe(a.STENCIL_TEST))},setMask:function(Ft){Ge!==Ft&&!X&&(a.stencilMask(Ft),Ge=Ft)},setFunc:function(Ft,xn,gn){(Me!==Ft||qe!==xn||et!==gn)&&(a.stencilFunc(Ft,xn,gn),Me=Ft,qe=xn,et=gn)},setOp:function(Ft,xn,gn){(Ye!==Ft||St!==xn||ft!==gn)&&(a.stencilOp(Ft,xn,gn),Ye=Ft,St=xn,ft=gn)},setLocked:function(Ft){X=Ft},setClear:function(Ft){Pt!==Ft&&(a.clearStencil(Ft),Pt=Ft)},reset:function(){X=!1,Ge=null,Me=null,qe=null,et=null,Ye=null,St=null,ft=null,Pt=null}}}const c=new n,u=new r,d=new o,p=new WeakMap,m=new WeakMap;let x={},g={},v={},_=new WeakMap,E=[],C=null,y=!1,M=null,U=null,B=null,R=null,O=null,P=null,F=null,w=new Qt(0,0,0),T=0,H=!1,V=null,ee=null,I=null,Q=null,ae=null;const W=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,D=0;const le=a.getParameter(a.VERSION);le.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(le)[1]),$=D>=1):le.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),$=D>=2);let me=null,Te={};const rt=a.getParameter(a.SCISSOR_BOX),je=a.getParameter(a.VIEWPORT),G=new Cn().fromArray(rt),J=new Cn().fromArray(je);function Ke(X,Ge,Me,qe){const et=new Uint8Array(4),Ye=a.createTexture();a.bindTexture(X,Ye),a.texParameteri(X,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(X,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let St=0;St<Me;St++)X===a.TEXTURE_3D||X===a.TEXTURE_2D_ARRAY?a.texImage3D(Ge,0,a.RGBA,1,1,qe,0,a.RGBA,a.UNSIGNED_BYTE,et):a.texImage2D(Ge+St,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,et);return Ye}const ie={};ie[a.TEXTURE_2D]=Ke(a.TEXTURE_2D,a.TEXTURE_2D,1),ie[a.TEXTURE_CUBE_MAP]=Ke(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[a.TEXTURE_2D_ARRAY]=Ke(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ie[a.TEXTURE_3D]=Ke(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ne(a.DEPTH_TEST),u.setFunc(tc),Oe(!1),He(t1),ne(a.CULL_FACE),Fe(ur);function ne(X){x[X]!==!0&&(a.enable(X),x[X]=!0)}function xe(X){x[X]!==!1&&(a.disable(X),x[X]=!1)}function Ue(X,Ge){return v[X]!==Ge?(a.bindFramebuffer(X,Ge),v[X]=Ge,X===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=Ge),X===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=Ge),!0):!1}function ye(X,Ge){let Me=E,qe=!1;if(X){Me=_.get(Ge),Me===void 0&&(Me=[],_.set(Ge,Me));const et=X.textures;if(Me.length!==et.length||Me[0]!==a.COLOR_ATTACHMENT0){for(let Ye=0,St=et.length;Ye<St;Ye++)Me[Ye]=a.COLOR_ATTACHMENT0+Ye;Me.length=et.length,qe=!0}}else Me[0]!==a.BACK&&(Me[0]=a.BACK,qe=!0);qe&&a.drawBuffers(Me)}function we(X){return C!==X?(a.useProgram(X),C=X,!0):!1}const _t={[Do]:a.FUNC_ADD,[lb]:a.FUNC_SUBTRACT,[cb]:a.FUNC_REVERSE_SUBTRACT};_t[ub]=a.MIN,_t[fb]=a.MAX;const Ae={[hb]:a.ZERO,[db]:a.ONE,[pb]:a.SRC_COLOR,[Jy]:a.SRC_ALPHA,[yb]:a.SRC_ALPHA_SATURATE,[xb]:a.DST_COLOR,[gb]:a.DST_ALPHA,[mb]:a.ONE_MINUS_SRC_COLOR,[$y]:a.ONE_MINUS_SRC_ALPHA,[_b]:a.ONE_MINUS_DST_COLOR,[vb]:a.ONE_MINUS_DST_ALPHA,[Sb]:a.CONSTANT_COLOR,[Mb]:a.ONE_MINUS_CONSTANT_COLOR,[Eb]:a.CONSTANT_ALPHA,[bb]:a.ONE_MINUS_CONSTANT_ALPHA};function Fe(X,Ge,Me,qe,et,Ye,St,ft,Pt,Ft){if(X===ur){y===!0&&(xe(a.BLEND),y=!1);return}if(y===!1&&(ne(a.BLEND),y=!0),X!==ob){if(X!==M||Ft!==H){if((U!==Do||O!==Do)&&(a.blendEquation(a.FUNC_ADD),U=Do,O=Do),Ft)switch(X){case Zl:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case n1:a.blendFunc(a.ONE,a.ONE);break;case i1:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case a1:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:sn("WebGLState: Invalid blending: ",X);break}else switch(X){case Zl:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case n1:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case i1:sn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case a1:sn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:sn("WebGLState: Invalid blending: ",X);break}B=null,R=null,P=null,F=null,w.set(0,0,0),T=0,M=X,H=Ft}return}et=et||Ge,Ye=Ye||Me,St=St||qe,(Ge!==U||et!==O)&&(a.blendEquationSeparate(_t[Ge],_t[et]),U=Ge,O=et),(Me!==B||qe!==R||Ye!==P||St!==F)&&(a.blendFuncSeparate(Ae[Me],Ae[qe],Ae[Ye],Ae[St]),B=Me,R=qe,P=Ye,F=St),(ft.equals(w)===!1||Pt!==T)&&(a.blendColor(ft.r,ft.g,ft.b,Pt),w.copy(ft),T=Pt),M=X,H=!1}function ue(X,Ge){X.side===da?xe(a.CULL_FACE):ne(a.CULL_FACE);let Me=X.side===Di;Ge&&(Me=!Me),Oe(Me),X.blending===Zl&&X.transparent===!1?Fe(ur):Fe(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),c.setMask(X.colorWrite);const qe=X.stencilWrite;d.setTest(qe),qe&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),mt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ne(a.SAMPLE_ALPHA_TO_COVERAGE):xe(a.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(X){V!==X&&(X?a.frontFace(a.CW):a.frontFace(a.CCW),V=X)}function He(X){X!==ab?(ne(a.CULL_FACE),X!==ee&&(X===t1?a.cullFace(a.BACK):X===rb?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):xe(a.CULL_FACE),ee=X}function vt(X){X!==I&&($&&a.lineWidth(X),I=X)}function mt(X,Ge,Me){X?(ne(a.POLYGON_OFFSET_FILL),(Q!==Ge||ae!==Me)&&(Q=Ge,ae=Me,u.getReversed()&&(Ge=-Ge),a.polygonOffset(Ge,Me))):xe(a.POLYGON_OFFSET_FILL)}function Je(X){X?ne(a.SCISSOR_TEST):xe(a.SCISSOR_TEST)}function Tt(X){X===void 0&&(X=a.TEXTURE0+W-1),me!==X&&(a.activeTexture(X),me=X)}function j(X,Ge,Me){Me===void 0&&(me===null?Me=a.TEXTURE0+W-1:Me=me);let qe=Te[Me];qe===void 0&&(qe={type:void 0,texture:void 0},Te[Me]=qe),(qe.type!==X||qe.texture!==Ge)&&(me!==Me&&(a.activeTexture(Me),me=Me),a.bindTexture(X,Ge||ie[X]),qe.type=X,qe.texture=Ge)}function nt(){const X=Te[me];X!==void 0&&X.type!==void 0&&(a.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function ze(){try{a.compressedTexImage2D(...arguments)}catch(X){sn("WebGLState:",X)}}function L(){try{a.compressedTexImage3D(...arguments)}catch(X){sn("WebGLState:",X)}}function b(){try{a.texSubImage2D(...arguments)}catch(X){sn("WebGLState:",X)}}function q(){try{a.texSubImage3D(...arguments)}catch(X){sn("WebGLState:",X)}}function z(){try{a.compressedTexSubImage2D(...arguments)}catch(X){sn("WebGLState:",X)}}function _e(){try{a.compressedTexSubImage3D(...arguments)}catch(X){sn("WebGLState:",X)}}function Ce(){try{a.texStorage2D(...arguments)}catch(X){sn("WebGLState:",X)}}function te(){try{a.texStorage3D(...arguments)}catch(X){sn("WebGLState:",X)}}function Z(){try{a.texImage2D(...arguments)}catch(X){sn("WebGLState:",X)}}function K(){try{a.texImage3D(...arguments)}catch(X){sn("WebGLState:",X)}}function ce(X){return g[X]!==void 0?g[X]:a.getParameter(X)}function Be(X,Ge){g[X]!==Ge&&(a.pixelStorei(X,Ge),g[X]=Ge)}function Le(X){G.equals(X)===!1&&(a.scissor(X.x,X.y,X.z,X.w),G.copy(X))}function Ie(X){J.equals(X)===!1&&(a.viewport(X.x,X.y,X.z,X.w),J.copy(X))}function Qe(X,Ge){let Me=m.get(Ge);Me===void 0&&(Me=new WeakMap,m.set(Ge,Me));let qe=Me.get(X);qe===void 0&&(qe=a.getUniformBlockIndex(Ge,X.name),Me.set(X,qe))}function st(X,Ge){const qe=m.get(Ge).get(X);p.get(Ge)!==qe&&(a.uniformBlockBinding(Ge,qe,X.__bindingPointIndex),p.set(Ge,qe))}function dt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),x={},g={},me=null,Te={},v={},_=new WeakMap,E=[],C=null,y=!1,M=null,U=null,B=null,R=null,O=null,P=null,F=null,w=new Qt(0,0,0),T=0,H=!1,V=null,ee=null,I=null,Q=null,ae=null,G.set(0,0,a.canvas.width,a.canvas.height),J.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:ne,disable:xe,bindFramebuffer:Ue,drawBuffers:ye,useProgram:we,setBlending:Fe,setMaterial:ue,setFlipSided:Oe,setCullFace:He,setLineWidth:vt,setPolygonOffset:mt,setScissorTest:Je,activeTexture:Tt,bindTexture:j,unbindTexture:nt,compressedTexImage2D:ze,compressedTexImage3D:L,texImage2D:Z,texImage3D:K,pixelStorei:Be,getParameter:ce,updateUBOMapping:Qe,uniformBlockBinding:st,texStorage2D:Ce,texStorage3D:te,texSubImage2D:b,texSubImage3D:q,compressedTexSubImage2D:z,compressedTexSubImage3D:_e,scissor:Le,viewport:Ie,reset:dt}}function kC(a,e,n,r,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new gt,x=new WeakMap,g=new Set;let v;const _=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(L,b){return E?new OffscreenCanvas(L,b):Ef("canvas")}function y(L,b,q){let z=1;const _e=ze(L);if((_e.width>q||_e.height>q)&&(z=q/Math.max(_e.width,_e.height)),z<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Ce=Math.floor(z*_e.width),te=Math.floor(z*_e.height);v===void 0&&(v=C(Ce,te));const Z=b?C(Ce,te):v;return Z.width=Ce,Z.height=te,Z.getContext("2d").drawImage(L,0,0,Ce,te),Bt("WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+Ce+"x"+te+")."),Z}else return"data"in L&&Bt("WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),L;return L}function M(L){return L.generateMipmaps}function U(L){a.generateMipmap(L)}function B(L){return L.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?a.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function R(L,b,q,z,_e,Ce=!1){if(L!==null){if(a[L]!==void 0)return a[L];Bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let te;z&&(te=e.get("EXT_texture_norm16"),te||Bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=b;if(b===a.RED&&(q===a.FLOAT&&(Z=a.R32F),q===a.HALF_FLOAT&&(Z=a.R16F),q===a.UNSIGNED_BYTE&&(Z=a.R8),q===a.UNSIGNED_SHORT&&te&&(Z=te.R16_EXT),q===a.SHORT&&te&&(Z=te.R16_SNORM_EXT)),b===a.RED_INTEGER&&(q===a.UNSIGNED_BYTE&&(Z=a.R8UI),q===a.UNSIGNED_SHORT&&(Z=a.R16UI),q===a.UNSIGNED_INT&&(Z=a.R32UI),q===a.BYTE&&(Z=a.R8I),q===a.SHORT&&(Z=a.R16I),q===a.INT&&(Z=a.R32I)),b===a.RG&&(q===a.FLOAT&&(Z=a.RG32F),q===a.HALF_FLOAT&&(Z=a.RG16F),q===a.UNSIGNED_BYTE&&(Z=a.RG8),q===a.UNSIGNED_SHORT&&te&&(Z=te.RG16_EXT),q===a.SHORT&&te&&(Z=te.RG16_SNORM_EXT)),b===a.RG_INTEGER&&(q===a.UNSIGNED_BYTE&&(Z=a.RG8UI),q===a.UNSIGNED_SHORT&&(Z=a.RG16UI),q===a.UNSIGNED_INT&&(Z=a.RG32UI),q===a.BYTE&&(Z=a.RG8I),q===a.SHORT&&(Z=a.RG16I),q===a.INT&&(Z=a.RG32I)),b===a.RGB_INTEGER&&(q===a.UNSIGNED_BYTE&&(Z=a.RGB8UI),q===a.UNSIGNED_SHORT&&(Z=a.RGB16UI),q===a.UNSIGNED_INT&&(Z=a.RGB32UI),q===a.BYTE&&(Z=a.RGB8I),q===a.SHORT&&(Z=a.RGB16I),q===a.INT&&(Z=a.RGB32I)),b===a.RGBA_INTEGER&&(q===a.UNSIGNED_BYTE&&(Z=a.RGBA8UI),q===a.UNSIGNED_SHORT&&(Z=a.RGBA16UI),q===a.UNSIGNED_INT&&(Z=a.RGBA32UI),q===a.BYTE&&(Z=a.RGBA8I),q===a.SHORT&&(Z=a.RGBA16I),q===a.INT&&(Z=a.RGBA32I)),b===a.RGB&&(q===a.UNSIGNED_SHORT&&te&&(Z=te.RGB16_EXT),q===a.SHORT&&te&&(Z=te.RGB16_SNORM_EXT),q===a.UNSIGNED_INT_5_9_9_9_REV&&(Z=a.RGB9_E5),q===a.UNSIGNED_INT_10F_11F_11F_REV&&(Z=a.R11F_G11F_B10F)),b===a.RGBA){const K=Ce?Mf:an.getTransfer(_e);q===a.FLOAT&&(Z=a.RGBA32F),q===a.HALF_FLOAT&&(Z=a.RGBA16F),q===a.UNSIGNED_BYTE&&(Z=K===pn?a.SRGB8_ALPHA8:a.RGBA8),q===a.UNSIGNED_SHORT&&te&&(Z=te.RGBA16_EXT),q===a.SHORT&&te&&(Z=te.RGBA16_SNORM_EXT),q===a.UNSIGNED_SHORT_4_4_4_4&&(Z=a.RGBA4),q===a.UNSIGNED_SHORT_5_5_5_1&&(Z=a.RGB5_A1)}return(Z===a.R16F||Z===a.R32F||Z===a.RG16F||Z===a.RG32F||Z===a.RGBA16F||Z===a.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function O(L,b){let q;return L?b===null||b===Ia||b===ic?q=a.DEPTH24_STENCIL8:b===Oa?q=a.DEPTH32F_STENCIL8:b===nc&&(q=a.DEPTH24_STENCIL8,Bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ia||b===ic?q=a.DEPTH_COMPONENT24:b===Oa?q=a.DEPTH_COMPONENT32F:b===nc&&(q=a.DEPTH_COMPONENT16),q}function P(L,b){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==si&&L.minFilter!==oi?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function F(L){const b=L.target;b.removeEventListener("dispose",F),T(b),b.isVideoTexture&&x.delete(b),b.isHTMLTexture&&g.delete(b)}function w(L){const b=L.target;b.removeEventListener("dispose",w),V(b)}function T(L){const b=r.get(L);if(b.__webglInit===void 0)return;const q=L.source,z=_.get(q);if(z){const _e=z[b.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&H(L),Object.keys(z).length===0&&_.delete(q)}r.remove(L)}function H(L){const b=r.get(L);a.deleteTexture(b.__webglTexture);const q=L.source,z=_.get(q);delete z[b.__cacheKey],u.memory.textures--}function V(L){const b=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(b.__webglFramebuffer[z]))for(let _e=0;_e<b.__webglFramebuffer[z].length;_e++)a.deleteFramebuffer(b.__webglFramebuffer[z][_e]);else a.deleteFramebuffer(b.__webglFramebuffer[z]);b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer[z])}else{if(Array.isArray(b.__webglFramebuffer))for(let z=0;z<b.__webglFramebuffer.length;z++)a.deleteFramebuffer(b.__webglFramebuffer[z]);else a.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&a.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let z=0;z<b.__webglColorRenderbuffer.length;z++)b.__webglColorRenderbuffer[z]&&a.deleteRenderbuffer(b.__webglColorRenderbuffer[z]);b.__webglDepthRenderbuffer&&a.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const q=L.textures;for(let z=0,_e=q.length;z<_e;z++){const Ce=r.get(q[z]);Ce.__webglTexture&&(a.deleteTexture(Ce.__webglTexture),u.memory.textures--),r.remove(q[z])}r.remove(L)}let ee=0;function I(){ee=0}function Q(){return ee}function ae(L){ee=L}function W(){const L=ee;return L>=o.maxTextures&&Bt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+o.maxTextures),ee+=1,L}function $(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function D(L,b){const q=r.get(L);if(L.isVideoTexture&&j(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){const z=L.image;if(z===null)Bt("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Bt("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(q,L,b);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,q.__webglTexture,a.TEXTURE0+b)}function le(L,b){const q=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){xe(q,L,b);return}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(a.TEXTURE_2D_ARRAY,q.__webglTexture,a.TEXTURE0+b)}function me(L,b){const q=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){xe(q,L,b);return}n.bindTexture(a.TEXTURE_3D,q.__webglTexture,a.TEXTURE0+b)}function Te(L,b){const q=r.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&q.__version!==L.version){Ue(q,L,b);return}n.bindTexture(a.TEXTURE_CUBE_MAP,q.__webglTexture,a.TEXTURE0+b)}const rt={[Kr]:a.REPEAT,[Ua]:a.CLAMP_TO_EDGE,[xm]:a.MIRRORED_REPEAT},je={[si]:a.NEAREST,[wb]:a.NEAREST_MIPMAP_NEAREST,[Uu]:a.NEAREST_MIPMAP_LINEAR,[oi]:a.LINEAR,[mp]:a.LINEAR_MIPMAP_NEAREST,[Yr]:a.LINEAR_MIPMAP_LINEAR},G={[Nb]:a.NEVER,[Fb]:a.ALWAYS,[Lb]:a.LESS,[_0]:a.LEQUAL,[Ub]:a.EQUAL,[y0]:a.GEQUAL,[Ob]:a.GREATER,[Pb]:a.NOTEQUAL};function J(L,b){if(b.type===Oa&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===oi||b.magFilter===mp||b.magFilter===Uu||b.magFilter===Yr||b.minFilter===oi||b.minFilter===mp||b.minFilter===Uu||b.minFilter===Yr)&&Bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(L,a.TEXTURE_WRAP_S,rt[b.wrapS]),a.texParameteri(L,a.TEXTURE_WRAP_T,rt[b.wrapT]),(L===a.TEXTURE_3D||L===a.TEXTURE_2D_ARRAY)&&a.texParameteri(L,a.TEXTURE_WRAP_R,rt[b.wrapR]),a.texParameteri(L,a.TEXTURE_MAG_FILTER,je[b.magFilter]),a.texParameteri(L,a.TEXTURE_MIN_FILTER,je[b.minFilter]),b.compareFunction&&(a.texParameteri(L,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(L,a.TEXTURE_COMPARE_FUNC,G[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===si||b.minFilter!==Uu&&b.minFilter!==Yr||b.type===Oa&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");a.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function Ke(L,b){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",F));const z=b.source;let _e=_.get(z);_e===void 0&&(_e={},_.set(z,_e));const Ce=$(b);if(Ce!==L.__cacheKey){_e[Ce]===void 0&&(_e[Ce]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,q=!0),_e[Ce].usedTimes++;const te=_e[L.__cacheKey];te!==void 0&&(_e[L.__cacheKey].usedTimes--,te.usedTimes===0&&H(b)),L.__cacheKey=Ce,L.__webglTexture=_e[Ce].texture}return q}function ie(L,b,q){return Math.floor(Math.floor(L/q)/b)}function ne(L,b,q,z){const Ce=L.updateRanges;if(Ce.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,b.width,b.height,q,z,b.data);else{Ce.sort((Be,Le)=>Be.start-Le.start);let te=0;for(let Be=1;Be<Ce.length;Be++){const Le=Ce[te],Ie=Ce[Be],Qe=Le.start+Le.count,st=ie(Ie.start,b.width,4),dt=ie(Le.start,b.width,4);Ie.start<=Qe+1&&st===dt&&ie(Ie.start+Ie.count-1,b.width,4)===st?Le.count=Math.max(Le.count,Ie.start+Ie.count-Le.start):(++te,Ce[te]=Ie)}Ce.length=te+1;const Z=n.getParameter(a.UNPACK_ROW_LENGTH),K=n.getParameter(a.UNPACK_SKIP_PIXELS),ce=n.getParameter(a.UNPACK_SKIP_ROWS);n.pixelStorei(a.UNPACK_ROW_LENGTH,b.width);for(let Be=0,Le=Ce.length;Be<Le;Be++){const Ie=Ce[Be],Qe=Math.floor(Ie.start/4),st=Math.ceil(Ie.count/4),dt=Qe%b.width,X=Math.floor(Qe/b.width),Ge=st,Me=1;n.pixelStorei(a.UNPACK_SKIP_PIXELS,dt),n.pixelStorei(a.UNPACK_SKIP_ROWS,X),n.texSubImage2D(a.TEXTURE_2D,0,dt,X,Ge,Me,q,z,b.data)}L.clearUpdateRanges(),n.pixelStorei(a.UNPACK_ROW_LENGTH,Z),n.pixelStorei(a.UNPACK_SKIP_PIXELS,K),n.pixelStorei(a.UNPACK_SKIP_ROWS,ce)}}function xe(L,b,q){let z=a.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(z=a.TEXTURE_2D_ARRAY),b.isData3DTexture&&(z=a.TEXTURE_3D);const _e=Ke(L,b),Ce=b.source;n.bindTexture(z,L.__webglTexture,a.TEXTURE0+q);const te=r.get(Ce);if(Ce.version!==te.__version||_e===!0){if(n.activeTexture(a.TEXTURE0+q),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const Me=an.getPrimaries(an.workingColorSpace),qe=b.colorSpace===Wr?null:an.getPrimaries(b.colorSpace),et=b.colorSpace===Wr||Me===qe?a.NONE:a.BROWSER_DEFAULT_WEBGL;n.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,et)}n.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment);let K=y(b.image,!1,o.maxTextureSize);K=nt(b,K);const ce=c.convert(b.format,b.colorSpace),Be=c.convert(b.type);let Le=R(b.internalFormat,ce,Be,b.normalized,b.colorSpace,b.isVideoTexture);J(z,b);let Ie;const Qe=b.mipmaps,st=b.isVideoTexture!==!0,dt=te.__version===void 0||_e===!0,X=Ce.dataReady,Ge=P(b,K);if(b.isDepthTexture)Le=O(b.format===Ss,b.type),dt&&(st?n.texStorage2D(a.TEXTURE_2D,1,Le,K.width,K.height):n.texImage2D(a.TEXTURE_2D,0,Le,K.width,K.height,0,ce,Be,null));else if(b.isDataTexture)if(Qe.length>0){st&&dt&&n.texStorage2D(a.TEXTURE_2D,Ge,Le,Qe[0].width,Qe[0].height);for(let Me=0,qe=Qe.length;Me<qe;Me++)Ie=Qe[Me],st?X&&n.texSubImage2D(a.TEXTURE_2D,Me,0,0,Ie.width,Ie.height,ce,Be,Ie.data):n.texImage2D(a.TEXTURE_2D,Me,Le,Ie.width,Ie.height,0,ce,Be,Ie.data);b.generateMipmaps=!1}else st?(dt&&n.texStorage2D(a.TEXTURE_2D,Ge,Le,K.width,K.height),X&&ne(b,K,ce,Be)):n.texImage2D(a.TEXTURE_2D,0,Le,K.width,K.height,0,ce,Be,K.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){st&&dt&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ge,Le,Qe[0].width,Qe[0].height,K.depth);for(let Me=0,qe=Qe.length;Me<qe;Me++)if(Ie=Qe[Me],b.format!==pa)if(ce!==null)if(st){if(X)if(b.layerUpdates.size>0){const et=I1(Ie.width,Ie.height,b.format,b.type);for(const Ye of b.layerUpdates){const St=Ie.data.subarray(Ye*et/Ie.data.BYTES_PER_ELEMENT,(Ye+1)*et/Ie.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Me,0,0,Ye,Ie.width,Ie.height,1,ce,St)}}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Me,0,0,0,Ie.width,Ie.height,K.depth,ce,Ie.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Me,Le,Ie.width,Ie.height,K.depth,0,Ie.data,0,0);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?X&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,Me,0,0,0,Ie.width,Ie.height,K.depth,ce,Be,Ie.data):n.texImage3D(a.TEXTURE_2D_ARRAY,Me,Le,Ie.width,Ie.height,K.depth,0,ce,Be,Ie.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{st&&dt&&n.texStorage2D(a.TEXTURE_2D,Ge,Le,Qe[0].width,Qe[0].height);for(let Me=0,qe=Qe.length;Me<qe;Me++)Ie=Qe[Me],b.format!==pa?ce!==null?st?X&&n.compressedTexSubImage2D(a.TEXTURE_2D,Me,0,0,Ie.width,Ie.height,ce,Ie.data):n.compressedTexImage2D(a.TEXTURE_2D,Me,Le,Ie.width,Ie.height,0,Ie.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?X&&n.texSubImage2D(a.TEXTURE_2D,Me,0,0,Ie.width,Ie.height,ce,Be,Ie.data):n.texImage2D(a.TEXTURE_2D,Me,Le,Ie.width,Ie.height,0,ce,Be,Ie.data)}else if(b.isDataArrayTexture)if(st){if(dt&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ge,Le,K.width,K.height,K.depth),X)if(b.layerUpdates.size>0){const Me=I1(K.width,K.height,b.format,b.type);for(const qe of b.layerUpdates){const et=K.data.subarray(qe*Me/K.data.BYTES_PER_ELEMENT,(qe+1)*Me/K.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,qe,K.width,K.height,1,ce,Be,et)}b.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ce,Be,K.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,Le,K.width,K.height,K.depth,0,ce,Be,K.data);else if(b.isData3DTexture)st?(dt&&n.texStorage3D(a.TEXTURE_3D,Ge,Le,K.width,K.height,K.depth),X&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ce,Be,K.data)):n.texImage3D(a.TEXTURE_3D,0,Le,K.width,K.height,K.depth,0,ce,Be,K.data);else if(b.isFramebufferTexture){if(dt)if(st)n.texStorage2D(a.TEXTURE_2D,Ge,Le,K.width,K.height);else{let Me=K.width,qe=K.height;for(let et=0;et<Ge;et++)n.texImage2D(a.TEXTURE_2D,et,Le,Me,qe,0,ce,Be,null),Me>>=1,qe>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in a){const Me=a.canvas;if(Me.hasAttribute("layoutsubtree")||Me.setAttribute("layoutsubtree","true"),K.parentNode!==Me){Me.appendChild(K),g.add(b),Me.onpaint=qe=>{const et=qe.changedElements;for(const Ye of g)et.includes(Ye.image)&&(Ye.needsUpdate=!0)},Me.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,K);else{const et=a.RGBA,Ye=a.RGBA,St=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,et,Ye,St,K)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(Qe.length>0){if(st&&dt){const Me=ze(Qe[0]);n.texStorage2D(a.TEXTURE_2D,Ge,Le,Me.width,Me.height)}for(let Me=0,qe=Qe.length;Me<qe;Me++)Ie=Qe[Me],st?X&&n.texSubImage2D(a.TEXTURE_2D,Me,0,0,ce,Be,Ie):n.texImage2D(a.TEXTURE_2D,Me,Le,ce,Be,Ie);b.generateMipmaps=!1}else if(st){if(dt){const Me=ze(K);n.texStorage2D(a.TEXTURE_2D,Ge,Le,Me.width,Me.height)}X&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,ce,Be,K)}else n.texImage2D(a.TEXTURE_2D,0,Le,ce,Be,K);M(b)&&U(z),te.__version=Ce.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Ue(L,b,q){if(b.image.length!==6)return;const z=Ke(L,b),_e=b.source;n.bindTexture(a.TEXTURE_CUBE_MAP,L.__webglTexture,a.TEXTURE0+q);const Ce=r.get(_e);if(_e.version!==Ce.__version||z===!0){n.activeTexture(a.TEXTURE0+q);const te=an.getPrimaries(an.workingColorSpace),Z=b.colorSpace===Wr?null:an.getPrimaries(b.colorSpace),K=b.colorSpace===Wr||te===Z?a.NONE:a.BROWSER_DEFAULT_WEBGL;n.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const ce=b.isCompressedTexture||b.image[0].isCompressedTexture,Be=b.image[0]&&b.image[0].isDataTexture,Le=[];for(let Ye=0;Ye<6;Ye++)!ce&&!Be?Le[Ye]=y(b.image[Ye],!0,o.maxCubemapSize):Le[Ye]=Be?b.image[Ye].image:b.image[Ye],Le[Ye]=nt(b,Le[Ye]);const Ie=Le[0],Qe=c.convert(b.format,b.colorSpace),st=c.convert(b.type),dt=R(b.internalFormat,Qe,st,b.normalized,b.colorSpace),X=b.isVideoTexture!==!0,Ge=Ce.__version===void 0||z===!0,Me=_e.dataReady;let qe=P(b,Ie);J(a.TEXTURE_CUBE_MAP,b);let et;if(ce){X&&Ge&&n.texStorage2D(a.TEXTURE_CUBE_MAP,qe,dt,Ie.width,Ie.height);for(let Ye=0;Ye<6;Ye++){et=Le[Ye].mipmaps;for(let St=0;St<et.length;St++){const ft=et[St];b.format!==pa?Qe!==null?X?Me&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,St,0,0,ft.width,ft.height,Qe,ft.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,St,dt,ft.width,ft.height,0,ft.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Me&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,St,0,0,ft.width,ft.height,Qe,st,ft.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,St,dt,ft.width,ft.height,0,Qe,st,ft.data)}}}else{if(et=b.mipmaps,X&&Ge){et.length>0&&qe++;const Ye=ze(Le[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,qe,dt,Ye.width,Ye.height)}for(let Ye=0;Ye<6;Ye++)if(Be){X?Me&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,0,0,0,Le[Ye].width,Le[Ye].height,Qe,st,Le[Ye].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,0,dt,Le[Ye].width,Le[Ye].height,0,Qe,st,Le[Ye].data);for(let St=0;St<et.length;St++){const Pt=et[St].image[Ye].image;X?Me&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,St+1,0,0,Pt.width,Pt.height,Qe,st,Pt.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,St+1,dt,Pt.width,Pt.height,0,Qe,st,Pt.data)}}else{X?Me&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,0,0,0,Qe,st,Le[Ye]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,0,dt,Qe,st,Le[Ye]);for(let St=0;St<et.length;St++){const ft=et[St];X?Me&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,St+1,0,0,Qe,st,ft.image[Ye]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,St+1,dt,Qe,st,ft.image[Ye])}}}M(b)&&U(a.TEXTURE_CUBE_MAP),Ce.__version=_e.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function ye(L,b,q,z,_e,Ce){const te=c.convert(q.format,q.colorSpace),Z=c.convert(q.type),K=R(q.internalFormat,te,Z,q.normalized,q.colorSpace),ce=r.get(b),Be=r.get(q);if(Be.__renderTarget=b,!ce.__hasExternalTextures){const Le=Math.max(1,b.width>>Ce),Ie=Math.max(1,b.height>>Ce);_e===a.TEXTURE_3D||_e===a.TEXTURE_2D_ARRAY?n.texImage3D(_e,Ce,K,Le,Ie,b.depth,0,te,Z,null):n.texImage2D(_e,Ce,K,Le,Ie,0,te,Z,null)}n.bindFramebuffer(a.FRAMEBUFFER,L),Tt(b)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,z,_e,Be.__webglTexture,0,Je(b)):(_e===a.TEXTURE_2D||_e>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,z,_e,Be.__webglTexture,Ce),n.bindFramebuffer(a.FRAMEBUFFER,null)}function we(L,b,q){if(a.bindRenderbuffer(a.RENDERBUFFER,L),b.depthBuffer){const z=b.depthTexture,_e=z&&z.isDepthTexture?z.type:null,Ce=O(b.stencilBuffer,_e),te=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;Tt(b)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Je(b),Ce,b.width,b.height):q?a.renderbufferStorageMultisample(a.RENDERBUFFER,Je(b),Ce,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,Ce,b.width,b.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,te,a.RENDERBUFFER,L)}else{const z=b.textures;for(let _e=0;_e<z.length;_e++){const Ce=z[_e],te=c.convert(Ce.format,Ce.colorSpace),Z=c.convert(Ce.type),K=R(Ce.internalFormat,te,Z,Ce.normalized,Ce.colorSpace);Tt(b)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Je(b),K,b.width,b.height):q?a.renderbufferStorageMultisample(a.RENDERBUFFER,Je(b),K,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,K,b.width,b.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function _t(L,b,q){const z=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(a.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const _e=r.get(b.depthTexture);if(_e.__renderTarget=b,(!_e.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),z){if(_e.__webglInit===void 0&&(_e.__webglInit=!0,b.depthTexture.addEventListener("dispose",F)),_e.__webglTexture===void 0){_e.__webglTexture=a.createTexture(),n.bindTexture(a.TEXTURE_CUBE_MAP,_e.__webglTexture),J(a.TEXTURE_CUBE_MAP,b.depthTexture);const ce=c.convert(b.depthTexture.format),Be=c.convert(b.depthTexture.type);let Le;b.depthTexture.format===hr?Le=a.DEPTH_COMPONENT24:b.depthTexture.format===Ss&&(Le=a.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Le,b.width,b.height,0,ce,Be,null)}}else D(b.depthTexture,0);const Ce=_e.__webglTexture,te=Je(b),Z=z?a.TEXTURE_CUBE_MAP_POSITIVE_X+q:a.TEXTURE_2D,K=b.depthTexture.format===Ss?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(b.depthTexture.format===hr)Tt(b)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,K,Z,Ce,0,te):a.framebufferTexture2D(a.FRAMEBUFFER,K,Z,Ce,0);else if(b.depthTexture.format===Ss)Tt(b)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,K,Z,Ce,0,te):a.framebufferTexture2D(a.FRAMEBUFFER,K,Z,Ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ae(L){const b=r.get(L),q=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const z=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),z){const _e=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,z.removeEventListener("dispose",_e)};z.addEventListener("dispose",_e),b.__depthDisposeCallback=_e}b.__boundDepthTexture=z}if(L.depthTexture&&!b.__autoAllocateDepthBuffer)if(q)for(let z=0;z<6;z++)_t(b.__webglFramebuffer[z],L,z);else{const z=L.texture.mipmaps;z&&z.length>0?_t(b.__webglFramebuffer[0],L,0):_t(b.__webglFramebuffer,L,0)}else if(q){b.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(n.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[z]),b.__webglDepthbuffer[z]===void 0)b.__webglDepthbuffer[z]=a.createRenderbuffer(),we(b.__webglDepthbuffer[z],L,!1);else{const _e=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ce=b.__webglDepthbuffer[z];a.bindRenderbuffer(a.RENDERBUFFER,Ce),a.framebufferRenderbuffer(a.FRAMEBUFFER,_e,a.RENDERBUFFER,Ce)}}else{const z=L.texture.mipmaps;if(z&&z.length>0?n.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=a.createRenderbuffer(),we(b.__webglDepthbuffer,L,!1);else{const _e=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ce=b.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Ce),a.framebufferRenderbuffer(a.FRAMEBUFFER,_e,a.RENDERBUFFER,Ce)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function Fe(L,b,q){const z=r.get(L);b!==void 0&&ye(z.__webglFramebuffer,L,L.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),q!==void 0&&Ae(L)}function ue(L){const b=L.texture,q=r.get(L),z=r.get(b);L.addEventListener("dispose",w);const _e=L.textures,Ce=L.isWebGLCubeRenderTarget===!0,te=_e.length>1;if(te||(z.__webglTexture===void 0&&(z.__webglTexture=a.createTexture()),z.__version=b.version,u.memory.textures++),Ce){q.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[Z]=[];for(let K=0;K<b.mipmaps.length;K++)q.__webglFramebuffer[Z][K]=a.createFramebuffer()}else q.__webglFramebuffer[Z]=a.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let Z=0;Z<b.mipmaps.length;Z++)q.__webglFramebuffer[Z]=a.createFramebuffer()}else q.__webglFramebuffer=a.createFramebuffer();if(te)for(let Z=0,K=_e.length;Z<K;Z++){const ce=r.get(_e[Z]);ce.__webglTexture===void 0&&(ce.__webglTexture=a.createTexture(),u.memory.textures++)}if(L.samples>0&&Tt(L)===!1){q.__webglMultisampledFramebuffer=a.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Z=0;Z<_e.length;Z++){const K=_e[Z];q.__webglColorRenderbuffer[Z]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,q.__webglColorRenderbuffer[Z]);const ce=c.convert(K.format,K.colorSpace),Be=c.convert(K.type),Le=R(K.internalFormat,ce,Be,K.normalized,K.colorSpace,L.isXRRenderTarget===!0),Ie=Je(L);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ie,Le,L.width,L.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Z,a.RENDERBUFFER,q.__webglColorRenderbuffer[Z])}a.bindRenderbuffer(a.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=a.createRenderbuffer(),we(q.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Ce){n.bindTexture(a.TEXTURE_CUBE_MAP,z.__webglTexture),J(a.TEXTURE_CUBE_MAP,b);for(let Z=0;Z<6;Z++)if(b.mipmaps&&b.mipmaps.length>0)for(let K=0;K<b.mipmaps.length;K++)ye(q.__webglFramebuffer[Z][K],L,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Z,K);else ye(q.__webglFramebuffer[Z],L,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);M(b)&&U(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(te){for(let Z=0,K=_e.length;Z<K;Z++){const ce=_e[Z],Be=r.get(ce);let Le=a.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Le=L.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Le,Be.__webglTexture),J(Le,ce),ye(q.__webglFramebuffer,L,ce,a.COLOR_ATTACHMENT0+Z,Le,0),M(ce)&&U(Le)}n.unbindTexture()}else{let Z=a.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Z=L.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Z,z.__webglTexture),J(Z,b),b.mipmaps&&b.mipmaps.length>0)for(let K=0;K<b.mipmaps.length;K++)ye(q.__webglFramebuffer[K],L,b,a.COLOR_ATTACHMENT0,Z,K);else ye(q.__webglFramebuffer,L,b,a.COLOR_ATTACHMENT0,Z,0);M(b)&&U(Z),n.unbindTexture()}L.depthBuffer&&Ae(L)}function Oe(L){const b=L.textures;for(let q=0,z=b.length;q<z;q++){const _e=b[q];if(M(_e)){const Ce=B(L),te=r.get(_e).__webglTexture;n.bindTexture(Ce,te),U(Ce),n.unbindTexture()}}}const He=[],vt=[];function mt(L){if(L.samples>0){if(Tt(L)===!1){const b=L.textures,q=L.width,z=L.height;let _e=a.COLOR_BUFFER_BIT;const Ce=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,te=r.get(L),Z=b.length>1;if(Z)for(let ce=0;ce<b.length;ce++)n.bindFramebuffer(a.FRAMEBUFFER,te.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ce,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,te.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ce,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer);const K=L.texture.mipmaps;K&&K.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,te.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let ce=0;ce<b.length;ce++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(_e|=a.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(_e|=a.STENCIL_BUFFER_BIT)),Z){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,te.__webglColorRenderbuffer[ce]);const Be=r.get(b[ce]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Be,0)}a.blitFramebuffer(0,0,q,z,0,0,q,z,_e,a.NEAREST),p===!0&&(He.length=0,vt.length=0,He.push(a.COLOR_ATTACHMENT0+ce),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(He.push(Ce),vt.push(Ce),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,vt)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,He))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Z)for(let ce=0;ce<b.length;ce++){n.bindFramebuffer(a.FRAMEBUFFER,te.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ce,a.RENDERBUFFER,te.__webglColorRenderbuffer[ce]);const Be=r.get(b[ce]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,te.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ce,a.TEXTURE_2D,Be,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&p){const b=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[b])}}}function Je(L){return Math.min(o.maxSamples,L.samples)}function Tt(L){const b=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function j(L){const b=u.render.frame;x.get(L)!==b&&(x.set(L,b),L.update())}function nt(L,b){const q=L.colorSpace,z=L.format,_e=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==Sf&&q!==Wr&&(an.getTransfer(q)===pn?(z!==pa||_e!==Gi)&&Bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):sn("WebGLTextures: Unsupported texture color space:",q)),b}function ze(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=W,this.resetTextureUnits=I,this.getTextureUnits=Q,this.setTextureUnits=ae,this.setTexture2D=D,this.setTexture2DArray=le,this.setTexture3D=me,this.setTextureCube=Te,this.rebindTextures=Fe,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Tt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function XC(a,e){function n(r,o=Wr){let c;const u=an.getTransfer(o);if(r===Gi)return a.UNSIGNED_BYTE;if(r===p0)return a.UNSIGNED_SHORT_4_4_4_4;if(r===m0)return a.UNSIGNED_SHORT_5_5_5_1;if(r===uS)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===fS)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===lS)return a.BYTE;if(r===cS)return a.SHORT;if(r===nc)return a.UNSIGNED_SHORT;if(r===d0)return a.INT;if(r===Ia)return a.UNSIGNED_INT;if(r===Oa)return a.FLOAT;if(r===za)return a.HALF_FLOAT;if(r===hS)return a.ALPHA;if(r===dS)return a.RGB;if(r===pa)return a.RGBA;if(r===hr)return a.DEPTH_COMPONENT;if(r===Ss)return a.DEPTH_STENCIL;if(r===pS)return a.RED;if(r===g0)return a.RED_INTEGER;if(r===bs)return a.RG;if(r===v0)return a.RG_INTEGER;if(r===x0)return a.RGBA_INTEGER;if(r===ff||r===hf||r===df||r===pf)if(u===pn)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===ff)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===hf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===df)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===pf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===ff)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===hf)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===df)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===pf)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===_m||r===ym||r===Sm||r===Mm)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===_m)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ym)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Sm)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Mm)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Em||r===bm||r===Tm||r===Am||r===wm||r===_f||r===Rm)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Em||r===bm)return u===pn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Tm)return u===pn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Am)return c.COMPRESSED_R11_EAC;if(r===wm)return c.COMPRESSED_SIGNED_R11_EAC;if(r===_f)return c.COMPRESSED_RG11_EAC;if(r===Rm)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Cm||r===Dm||r===Nm||r===Lm||r===Um||r===Om||r===Pm||r===Fm||r===Im||r===zm||r===Bm||r===Hm||r===Gm||r===Vm)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Cm)return u===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Dm)return u===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Nm)return u===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Lm)return u===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Um)return u===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Om)return u===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Pm)return u===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Fm)return u===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Im)return u===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===zm)return u===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Bm)return u===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Hm)return u===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Gm)return u===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Vm)return u===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===km||r===Xm||r===qm)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===km)return u===pn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Xm)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===qm)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Wm||r===Ym||r===yf||r===Zm)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Wm)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Ym)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===yf)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Zm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ic?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const qC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WC=`
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

}`;class YC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new TS(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Ha({vertexShader:qC,fragmentShader:WC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ri(new dc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZC extends As{constructor(e,n){super();const r=this;let o=null,c=1,u=null,d="local-floor",p=1,m=null,x=null,g=null,v=null,_=null,E=null;const C=typeof XRWebGLBinding<"u",y=new YC,M={},U=n.getContextAttributes();let B=null,R=null;const O=[],P=[],F=new gt;let w=null,T=null;const H=new ea;H.viewport=new Cn;const V=new ea;V.viewport=new Cn;const ee=[H,V],I=new t3;let Q=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ne=O[ie];return ne===void 0&&(ne=new bp,O[ie]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(ie){let ne=O[ie];return ne===void 0&&(ne=new bp,O[ie]=ne),ne.getGripSpace()},this.getHand=function(ie){let ne=O[ie];return ne===void 0&&(ne=new bp,O[ie]=ne),ne.getHandSpace()};function W(ie){const ne=P.indexOf(ie.inputSource);if(ne===-1)return;const xe=O[ne];xe!==void 0&&(xe.update(ie.inputSource,ie.frame,m||u),xe.dispatchEvent({type:ie.type,data:ie.inputSource}))}function $(){o.removeEventListener("select",W),o.removeEventListener("selectstart",W),o.removeEventListener("selectend",W),o.removeEventListener("squeeze",W),o.removeEventListener("squeezestart",W),o.removeEventListener("squeezeend",W),o.removeEventListener("end",$),o.removeEventListener("inputsourceschange",D);for(let ie=0;ie<O.length;ie++){const ne=P[ie];ne!==null&&(P[ie]=null,O[ie].disconnect(ne))}Q=null,ae=null,y.reset();for(const ie in M)delete M[ie];if(e.setRenderTarget(B),_=null,v=null,g=null,o=null,R=null,Ke.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(F.width,F.height,!1),T!==null){const ie=T.camera;ie.fov=T.fov,ie.zoom=T.zoom,ie.updateProjectionMatrix(),T=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){c=ie,r.isPresenting===!0&&Bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){d=ie,r.isPresenting===!0&&Bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(ie){m=ie},this.getBaseLayer=function(){return v!==null?v:_},this.getBinding=function(){return g===null&&C&&(g=new XRWebGLBinding(o,n)),g},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(ie){if(o=ie,o!==null){if(B=e.getRenderTarget(),o.addEventListener("select",W),o.addEventListener("selectstart",W),o.addEventListener("selectend",W),o.addEventListener("squeeze",W),o.addEventListener("squeezestart",W),o.addEventListener("squeezeend",W),o.addEventListener("end",$),o.addEventListener("inputsourceschange",D),U.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(F),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Ue=null,ye=null;U.depth&&(ye=U.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,xe=U.stencil?Ss:hr,Ue=U.stencil?ic:Ia);const we={colorFormat:n.RGBA8,depthFormat:ye,scaleFactor:c};g=this.getBinding(),v=g.createProjectionLayer(we),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),R=new ga(v.textureWidth,v.textureHeight,{format:pa,type:Gi,depthTexture:new rc(v.textureWidth,v.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const xe={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};_=new XRWebGLLayer(o,n,xe),o.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),R=new ga(_.framebufferWidth,_.framebufferHeight,{format:pa,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await o.requestReferenceSpace(d),Ke.setContext(o),Ke.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function D(ie){for(let ne=0;ne<ie.removed.length;ne++){const xe=ie.removed[ne],Ue=P.indexOf(xe);Ue>=0&&(P[Ue]=null,O[Ue].disconnect(xe))}for(let ne=0;ne<ie.added.length;ne++){const xe=ie.added[ne];let Ue=P.indexOf(xe);if(Ue===-1){for(let we=0;we<O.length;we++)if(we>=P.length){P.push(xe),Ue=we;break}else if(P[we]===null){P[we]=xe,Ue=we;break}if(Ue===-1)break}const ye=O[Ue];ye&&ye.connect(xe)}}const le=new oe,me=new oe;function Te(ie,ne,xe){le.setFromMatrixPosition(ne.matrixWorld),me.setFromMatrixPosition(xe.matrixWorld);const Ue=le.distanceTo(me),ye=ne.projectionMatrix.elements,we=xe.projectionMatrix.elements,_t=ye[14]/(ye[10]-1),Ae=ye[14]/(ye[10]+1),Fe=(ye[9]+1)/ye[5],ue=(ye[9]-1)/ye[5],Oe=(ye[8]-1)/ye[0],He=(we[8]+1)/we[0],vt=_t*Oe,mt=_t*He,Je=Ue/(-Oe+He),Tt=Je*-Oe;if(ne.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Tt),ie.translateZ(Je),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),ye[10]===-1)ie.projectionMatrix.copy(ne.projectionMatrix),ie.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const j=_t+Je,nt=Ae+Je,ze=vt-Tt,L=mt+(Ue-Tt),b=Fe*Ae/nt*j,q=ue*Ae/nt*j;ie.projectionMatrix.makePerspective(ze,L,b,q,j,nt),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function rt(ie,ne){ne===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ne.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(o===null)return;let ne=ie.near,xe=ie.far;y.texture!==null&&(y.depthNear>0&&(ne=y.depthNear),y.depthFar>0&&(xe=y.depthFar)),I.near=V.near=H.near=ne,I.far=V.far=H.far=xe,(Q!==I.near||ae!==I.far)&&(o.updateRenderState({depthNear:I.near,depthFar:I.far}),Q=I.near,ae=I.far),I.layers.mask=ie.layers.mask|6,H.layers.mask=I.layers.mask&-5,V.layers.mask=I.layers.mask&-3;const Ue=ie.parent,ye=I.cameras;rt(I,Ue);for(let we=0;we<ye.length;we++)rt(ye[we],Ue);ye.length===2?Te(I,H,V):I.projectionMatrix.copy(H.projectionMatrix),T===null&&ie.isPerspectiveCamera&&(T={camera:ie,fov:ie.fov,zoom:ie.zoom}),je(ie,I,Ue)};function je(ie,ne,xe){xe===null?ie.matrix.copy(ne.matrixWorld):(ie.matrix.copy(xe.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ne.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ne.projectionMatrix),ie.projectionMatrixInverse.copy(ne.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Qm*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(v===null&&_===null))return p},this.setFoveation=function(ie){p=ie,v!==null&&(v.fixedFoveation=ie),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=ie)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(I)},this.getCameraTexture=function(ie){return M[ie]};let G=null;function J(ie,ne){if(x=ne.getViewerPose(m||u),E=ne,x!==null){const xe=x.views;_!==null&&(e.setRenderTargetFramebuffer(R,_.framebuffer),e.setRenderTarget(R));let Ue=!1;xe.length!==I.cameras.length&&(I.cameras.length=0,Ue=!0);for(let Ae=0;Ae<xe.length;Ae++){const Fe=xe[Ae];let ue=null;if(_!==null)ue=_.getViewport(Fe);else{const He=g.getViewSubImage(v,Fe);ue=He.viewport,Ae===0&&(e.setRenderTargetTextures(R,He.colorTexture,He.depthStencilTexture),e.setRenderTarget(R))}let Oe=ee[Ae];Oe===void 0&&(Oe=new ea,Oe.layers.enable(Ae),Oe.viewport=new Cn,ee[Ae]=Oe),Oe.matrix.fromArray(Fe.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Fe.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(ue.x,ue.y,ue.width,ue.height),Ae===0&&(I.matrix.copy(Oe.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ue===!0&&I.cameras.push(Oe)}const ye=o.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){g=r.getBinding();const Ae=g.getDepthInformation(xe[0]);Ae&&Ae.isValid&&Ae.texture&&y.init(Ae,o.renderState)}if(ye&&ye.includes("camera-access")&&C){e.state.unbindTexture(),g=r.getBinding();for(let Ae=0;Ae<xe.length;Ae++){const Fe=xe[Ae].camera;if(Fe){let ue=M[Fe];ue||(ue=new TS,M[Fe]=ue);const Oe=g.getCameraImage(Fe);ue.sourceTexture=Oe}}}}for(let xe=0;xe<O.length;xe++){const Ue=P[xe],ye=O[xe];Ue!==null&&ye!==void 0&&ye.update(Ue,ne,m||u)}G&&G(ie,ne),ne.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ne}),E=null}const Ke=new zS;Ke.setAnimationLoop(J),this.setAnimationLoop=function(ie){G=ie},this.dispose=function(){}}}const KC=new En,qS=new Vt;qS.set(-1,0,0,0,1,0,0,0,1);function QC(a,e){function n(y,M){y.matrixAutoUpdate===!0&&y.updateMatrix(),M.value.copy(y.matrix)}function r(y,M){M.color.getRGB(y.fogColor.value,PS(a)),M.isFog?(y.fogNear.value=M.near,y.fogFar.value=M.far):M.isFogExp2&&(y.fogDensity.value=M.density)}function o(y,M,U,B,R){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?c(y,M):M.isMeshLambertMaterial?(c(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(c(y,M),g(y,M)):M.isMeshPhongMaterial?(c(y,M),x(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(c(y,M),v(y,M),M.isMeshPhysicalMaterial&&_(y,M,R)):M.isMeshMatcapMaterial?(c(y,M),E(y,M)):M.isMeshDepthMaterial?c(y,M):M.isMeshDistanceMaterial?(c(y,M),C(y,M)):M.isMeshNormalMaterial?c(y,M):M.isLineBasicMaterial?(u(y,M),M.isLineDashedMaterial&&d(y,M)):M.isPointsMaterial?p(y,M,U,B):M.isSpriteMaterial?m(y,M):M.isShadowMaterial?(y.color.value.copy(M.color),y.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function c(y,M){y.opacity.value=M.opacity,M.color&&y.diffuse.value.copy(M.color),M.emissive&&y.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(y.map.value=M.map,n(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,n(M.alphaMap,y.alphaMapTransform)),M.bumpMap&&(y.bumpMap.value=M.bumpMap,n(M.bumpMap,y.bumpMapTransform),y.bumpScale.value=M.bumpScale,M.side===Di&&(y.bumpScale.value*=-1)),M.normalMap&&(y.normalMap.value=M.normalMap,n(M.normalMap,y.normalMapTransform),y.normalScale.value.copy(M.normalScale),M.side===Di&&y.normalScale.value.negate()),M.displacementMap&&(y.displacementMap.value=M.displacementMap,n(M.displacementMap,y.displacementMapTransform),y.displacementScale.value=M.displacementScale,y.displacementBias.value=M.displacementBias),M.emissiveMap&&(y.emissiveMap.value=M.emissiveMap,n(M.emissiveMap,y.emissiveMapTransform)),M.specularMap&&(y.specularMap.value=M.specularMap,n(M.specularMap,y.specularMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest);const U=e.get(M),B=U.envMap,R=U.envMapRotation;B&&(y.envMap.value=B,y.envMapRotation.value.setFromMatrix4(KC.makeRotationFromEuler(R)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(qS),y.reflectivity.value=M.reflectivity,y.ior.value=M.ior,y.refractionRatio.value=M.refractionRatio),M.lightMap&&(y.lightMap.value=M.lightMap,y.lightMapIntensity.value=M.lightMapIntensity,n(M.lightMap,y.lightMapTransform)),M.aoMap&&(y.aoMap.value=M.aoMap,y.aoMapIntensity.value=M.aoMapIntensity,n(M.aoMap,y.aoMapTransform))}function u(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,M.map&&(y.map.value=M.map,n(M.map,y.mapTransform))}function d(y,M){y.dashSize.value=M.dashSize,y.totalSize.value=M.dashSize+M.gapSize,y.scale.value=M.scale}function p(y,M,U,B){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.size.value=M.size*U,y.scale.value=B*.5,M.map&&(y.map.value=M.map,n(M.map,y.uvTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,n(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function m(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.rotation.value=M.rotation,M.map&&(y.map.value=M.map,n(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,n(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function x(y,M){y.specular.value.copy(M.specular),y.shininess.value=Math.max(M.shininess,1e-4)}function g(y,M){M.gradientMap&&(y.gradientMap.value=M.gradientMap)}function v(y,M){y.metalness.value=M.metalness,M.metalnessMap&&(y.metalnessMap.value=M.metalnessMap,n(M.metalnessMap,y.metalnessMapTransform)),y.roughness.value=M.roughness,M.roughnessMap&&(y.roughnessMap.value=M.roughnessMap,n(M.roughnessMap,y.roughnessMapTransform)),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)}function _(y,M,U){y.ior.value=M.ior,M.sheen>0&&(y.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),y.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(y.sheenColorMap.value=M.sheenColorMap,n(M.sheenColorMap,y.sheenColorMapTransform)),M.sheenRoughnessMap&&(y.sheenRoughnessMap.value=M.sheenRoughnessMap,n(M.sheenRoughnessMap,y.sheenRoughnessMapTransform))),M.clearcoat>0&&(y.clearcoat.value=M.clearcoat,y.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(y.clearcoatMap.value=M.clearcoatMap,n(M.clearcoatMap,y.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,n(M.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(y.clearcoatNormalMap.value=M.clearcoatNormalMap,n(M.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===Di&&y.clearcoatNormalScale.value.negate())),M.dispersion>0&&(y.dispersion.value=M.dispersion),M.retroreflectivity>0&&(y.retroreflectivity.value=M.retroreflectivity),M.iridescence>0&&(y.iridescence.value=M.iridescence,y.iridescenceIOR.value=M.iridescenceIOR,y.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(y.iridescenceMap.value=M.iridescenceMap,n(M.iridescenceMap,y.iridescenceMapTransform)),M.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=M.iridescenceThicknessMap,n(M.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),M.transmission>0&&(y.transmission.value=M.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),M.transmissionMap&&(y.transmissionMap.value=M.transmissionMap,n(M.transmissionMap,y.transmissionMapTransform)),y.thickness.value=M.thickness,M.thicknessMap&&(y.thicknessMap.value=M.thicknessMap,n(M.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=M.attenuationDistance,y.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(y.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(y.anisotropyMap.value=M.anisotropyMap,n(M.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=M.specularIntensity,y.specularColor.value.copy(M.specularColor),M.specularColorMap&&(y.specularColorMap.value=M.specularColorMap,n(M.specularColorMap,y.specularColorMapTransform)),M.specularIntensityMap&&(y.specularIntensityMap.value=M.specularIntensityMap,n(M.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,M){M.matcap&&(y.matcap.value=M.matcap)}function C(y,M){const U=e.get(M).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function jC(a,e,n,r){let o={},c={},u=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function p(R,O){const P=O.program;r.uniformBlockBinding(R,P)}function m(R,O){let P=o[R.id];P===void 0&&(y(R),P=x(R),o[R.id]=P,R.addEventListener("dispose",U));const F=O.program;r.updateUBOMapping(R,F);const w=e.render.frame;c[R.id]!==w&&(v(R),c[R.id]=w)}function x(R){const O=g();R.__bindingPointIndex=O;const P=a.createBuffer(),F=R.__size,w=R.usage;return a.bindBuffer(a.UNIFORM_BUFFER,P),a.bufferData(a.UNIFORM_BUFFER,F,w),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,O,P),P}function g(){for(let R=0;R<d;R++)if(u.indexOf(R)===-1)return u.push(R),R;return sn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(R){const O=o[R.id],P=R.uniforms,F=R.__cache;a.bindBuffer(a.UNIFORM_BUFFER,O);for(let w=0,T=P.length;w<T;w++){const H=P[w];if(Array.isArray(H))for(let V=0,ee=H.length;V<ee;V++)_(H[V],w,V,F);else _(H,w,0,F)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function _(R,O,P,F){if(C(R,O,P,F)===!0){const w=R.__offset,T=R.value;if(Array.isArray(T)){let H=0;for(let V=0;V<T.length;V++){const ee=T[V],I=M(ee);E(ee,R.__data,H),typeof ee!="number"&&typeof ee!="boolean"&&!ee.isMatrix3&&!ArrayBuffer.isView(ee)&&(H+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(T,R.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,w,R.__data)}}function E(R,O,P){typeof R=="number"||typeof R=="boolean"?O[0]=R:R.isMatrix3?(O[0]=R.elements[0],O[1]=R.elements[1],O[2]=R.elements[2],O[3]=0,O[4]=R.elements[3],O[5]=R.elements[4],O[6]=R.elements[5],O[7]=0,O[8]=R.elements[6],O[9]=R.elements[7],O[10]=R.elements[8],O[11]=0):ArrayBuffer.isView(R)?O.set(new R.constructor(R.buffer,R.byteOffset,O.length)):R.toArray(O,P)}function C(R,O,P,F){const w=R.value,T=O+"_"+P;if(F[T]===void 0)return typeof w=="number"||typeof w=="boolean"?F[T]=w:ArrayBuffer.isView(w)?F[T]=w.slice():F[T]=w.clone(),!0;{const H=F[T];if(typeof w=="number"||typeof w=="boolean"){if(H!==w)return F[T]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(H.equals(w)===!1)return H.copy(w),!0}}return!1}function y(R){const O=R.uniforms;let P=0;const F=16;for(let T=0,H=O.length;T<H;T++){const V=Array.isArray(O[T])?O[T]:[O[T]];for(let ee=0,I=V.length;ee<I;ee++){const Q=V[ee],ae=Array.isArray(Q.value)?Q.value:[Q.value];for(let W=0,$=ae.length;W<$;W++){const D=ae[W],le=M(D),me=P%F,Te=me%le.boundary,rt=me+Te;P+=Te,rt!==0&&F-rt<le.storage&&(P+=F-rt),Q.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=P,P+=le.storage}}}const w=P%F;return w>0&&(P+=F-w),R.__size=P,R.__cache={},this}function M(R){const O={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(O.boundary=4,O.storage=4):R.isVector2?(O.boundary=8,O.storage=8):R.isVector3||R.isColor?(O.boundary=16,O.storage=12):R.isVector4?(O.boundary=16,O.storage=16):R.isMatrix3?(O.boundary=48,O.storage=48):R.isMatrix4?(O.boundary=64,O.storage=64):R.isTexture?Bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(O.boundary=16,O.storage=R.byteLength):Bt("WebGLRenderer: Unsupported uniform value type.",R),O}function U(R){const O=R.target;O.removeEventListener("dispose",U);const P=u.indexOf(O.__bindingPointIndex);u.splice(P,1),a.deleteBuffer(o[O.id]),delete o[O.id],delete c[O.id]}function B(){for(const R in o)a.deleteBuffer(o[R]);u=[],o={},c={}}return{bind:p,update:m,dispose:B}}const JC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Na=null;function $C(){return Na===null&&(Na=new ES(JC,16,16,bs,za),Na.name="DFG_LUT",Na.minFilter=oi,Na.magFilter=oi,Na.wrapS=Ua,Na.wrapT=Ua,Na.generateMipmaps=!1,Na.needsUpdate=!0),Na}class eD{constructor(e={}){const{canvas:n=Bb(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:_=Gi}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const C=_,y=new Set([x0,v0,g0]),M=new Set([Gi,Ia,nc,ic,p0,m0]),U=new Uint32Array(4),B=new Int32Array(4),R=new oe;let O=null,P=null;const F=[],w=[];let T=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const H=this;let V=!1,ee=null,I=null,Q=null,ae=null;this._outputColorSpace=_i;let W=0,$=0,D=null,le=-1,me=null;const Te=new Cn,rt=new Cn;let je=null;const G=new Qt(0);let J=0,Ke=n.width,ie=n.height,ne=1,xe=null,Ue=null;const ye=new Cn(0,0,Ke,ie),we=new Cn(0,0,Ke,ie);let _t=!1;const Ae=new T0;let Fe=!1,ue=!1;const Oe=new En,He=new oe,vt=new Cn,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function Tt(){return D===null?ne:1}let j=r;function nt(A,k){return n.getContext(A,k)}let ze,L,b,q,z,_e,Ce,te,Z,K,ce,Be,Le,Ie,Qe,st,dt,X,Ge,Me,qe,et,Ye;try{const A={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${f0}`),n.addEventListener("webglcontextlost",Pt,!1),n.addEventListener("webglcontextrestored",Ft,!1),n.addEventListener("webglcontextcreationerror",xn,!1),j===null){const k="webgl2";if(j=nt(k,A),j===null)throw nt(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}St()}catch(A){throw n.removeEventListener("webglcontextlost",Pt,!1),n.removeEventListener("webglcontextrestored",Ft,!1),n.removeEventListener("webglcontextcreationerror",xn,!1),sn("WebGLRenderer: "+A.message),A}function St(){ze=new $w(j),ze.init(),qe=new XC(j,ze),L=new kw(j,ze,e,qe),b=new VC(j,ze),L.reversedDepthBuffer&&v&&b.buffers.depth.setReversed(!0),I=j.createFramebuffer(),Q=j.createFramebuffer(),ae=j.createFramebuffer(),q=new nR(j),z=new RC,_e=new kC(j,ze,b,z,L,qe,q),Ce=new Jw(H),te=new a3(j),et=new Gw(j,te),Z=new eR(j,te,q,et),K=new aR(j,Z,te,et,q),X=new iR(j,L,_e),Qe=new Xw(z),ce=new wC(H,Ce,ze,L,et,Qe),Be=new QC(H,z),Le=new DC,Ie=new FC(ze),dt=new Hw(H,Ce,b,K,E,p),st=new GC(H,K,L),Ye=new jC(j,q,L,b),Ge=new Vw(j,ze,q),Me=new tR(j,ze,q),q.programs=ce.programs,H.capabilities=L,H.extensions=ze,H.properties=z,H.renderLists=Le,H.shadowMap=st,H.state=b,H.info=q}C!==Gi&&(T=new sR(C,n.width,n.height,d,o,c));const ft=new ZC(H,j);this.xr=ft,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const A=ze.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ze.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(A){A!==void 0&&(ne=A,this.setSize(Ke,ie,!1))},this.getSize=function(A){return A.set(Ke,ie)},this.setSize=function(A,k,re=!0){if(ft.isPresenting){Bt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ke=A,ie=k,n.width=Math.floor(A*ne),n.height=Math.floor(k*ne),re===!0&&(n.style.width=A+"px",n.style.height=k+"px"),T!==null&&T.setSize(n.width,n.height),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(Ke*ne,ie*ne).floor()},this.setDrawingBufferSize=function(A,k,re){Ke=A,ie=k,ne=re,n.width=Math.floor(A*re),n.height=Math.floor(k*re),this.setViewport(0,0,A,k)},this.setEffects=function(A){if(C===Gi){sn("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let k=0;k<A.length;k++)if(A[k].isOutputPass===!0){Bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Te)},this.getViewport=function(A){return A.copy(ye)},this.setViewport=function(A,k,re,fe){A.isVector4?ye.set(A.x,A.y,A.z,A.w):ye.set(A,k,re,fe),b.viewport(Te.copy(ye).multiplyScalar(ne).round())},this.getScissor=function(A){return A.copy(we)},this.setScissor=function(A,k,re,fe){A.isVector4?we.set(A.x,A.y,A.z,A.w):we.set(A,k,re,fe),b.scissor(rt.copy(we).multiplyScalar(ne).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(A){b.setScissorTest(_t=A)},this.setOpaqueSort=function(A){xe=A},this.setTransparentSort=function(A){Ue=A},this.getClearColor=function(A){return A.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor(...arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,re=!0){let fe=0;if(A){let he=!1;if(D!==null){const We=D.texture.format;he=y.has(We)}if(he){const We=D.texture.type,ot=M.has(We),Ze=dt.getClearColor(),De=dt.getClearAlpha(),it=Ze.r,pt=Ze.g,yt=Ze.b;ot?(U[0]=it,U[1]=pt,U[2]=yt,U[3]=De,j.clearBufferuiv(j.COLOR,0,U)):(B[0]=it,B[1]=pt,B[2]=yt,B[3]=De,j.clearBufferiv(j.COLOR,0,B))}else fe|=j.COLOR_BUFFER_BIT}k&&(fe|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(fe|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),fe!==0&&j.clear(fe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),ee=A},this.dispose=function(){n.removeEventListener("webglcontextlost",Pt,!1),n.removeEventListener("webglcontextrestored",Ft,!1),n.removeEventListener("webglcontextcreationerror",xn,!1),dt.dispose(),Le.dispose(),Ie.dispose(),z.dispose(),Ce.dispose(),K.dispose(),et.dispose(),Ye.dispose(),ce.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",Yn),ft.removeEventListener("sessionend",Ht),Et.stop()};function Pt(A){A.preventDefault(),o1("WebGLRenderer: Context Lost."),V=!0}function Ft(){o1("WebGLRenderer: Context Restored."),V=!1;const A=q.autoReset,k=st.enabled,re=st.autoUpdate,fe=st.needsUpdate,he=st.type;St(),q.autoReset=A,st.enabled=k,st.autoUpdate=re,st.needsUpdate=fe,st.type=he}function xn(A){sn("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function gn(A){const k=A.target;k.removeEventListener("dispose",gn),yi(k)}function yi(A){Si(A),z.remove(A)}function Si(A){const k=z.get(A).programs;k!==void 0&&(k.forEach(function(re){ce.releaseProgram(re)}),A.isShaderMaterial&&ce.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,re,fe,he,We){k===null&&(k=mt);const ot=he.isMesh&&he.matrixWorld.determinantAffine()<0,Ze=wt(A,k,re,fe,he);b.setMaterial(fe,ot);let De=re.index,it=1;if(fe.wireframe===!0){if(De=Z.getWireframeAttribute(re),De===void 0)return;it=2}const pt=re.drawRange,yt=re.attributes.position;let $e=pt.start*it,Nt=(pt.start+pt.count)*it;We!==null&&($e=Math.max($e,We.start*it),Nt=Math.min(Nt,(We.start+We.count)*it)),De!==null?($e=Math.max($e,0),Nt=Math.min(Nt,De.count)):yt!=null&&($e=Math.max($e,0),Nt=Math.min(Nt,yt.count));const bt=Nt-$e;if(bt<0||bt===1/0)return;et.setup(he,fe,Ze,re,De);let Dt,Ut=Ge;if(De!==null&&(Dt=te.get(De),Ut=Me,Ut.setIndex(Dt)),he.isMesh)fe.wireframe===!0?(b.setLineWidth(fe.wireframeLinewidth*Tt()),Ut.setMode(j.LINES)):Ut.setMode(j.TRIANGLES);else if(he.isLine){let on=fe.linewidth;on===void 0&&(on=1),b.setLineWidth(on*Tt()),he.isLineSegments?Ut.setMode(j.LINES):he.isLineLoop?Ut.setMode(j.LINE_LOOP):Ut.setMode(j.LINE_STRIP)}else he.isPoints?Ut.setMode(j.POINTS):he.isSprite&&Ut.setMode(j.TRIANGLES);if(he.isBatchedMesh)if(ze.get("WEBGL_multi_draw"))Ut.renderMultiDraw(he._multiDrawStarts,he._multiDrawCounts,he._multiDrawCount);else{const on=he._multiDrawStarts,ut=he._multiDrawCounts,Wt=he._multiDrawCount,kt=De?te.get(De).bytesPerElement:1,Vn=z.get(fe).currentProgram.getUniforms();for(let Jn=0;Jn<Wt;Jn++)Vn.setValue(j,"_gl_DrawID",Jn),Ut.render(on[Jn]/kt,ut[Jn])}else if(he.isInstancedMesh)Ut.renderInstances($e,bt,he.count);else if(re.isInstancedBufferGeometry){const on=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,ut=Math.min(re.instanceCount,on);Ut.renderInstances($e,bt,ut)}else Ut.render($e,bt)};function Wn(A,k,re,fe){ee!==null&&A.isNodeMaterial&&ee.setObject(fe,A),Fe===!0&&Qe.setState(A,re,!1),A.transparent===!0&&A.side===da&&A.forceSinglePass===!1?(A.side=Di,A.needsUpdate=!0,tt(A,k,fe),A.side=Ms,A.needsUpdate=!0,tt(A,k,fe),A.side=da):tt(A,k,fe)}this.compile=function(A,k,re=null){re===null&&(re=A),ee!==null&&ee.renderStart(A,k,re),P=Ie.get(re),P.init(k),w.push(P),re.traverseVisible(function(he){he.isLight&&he.layers.test(k.layers)&&(P.pushLight(he),he.castShadow&&P.pushShadow(he))}),A!==re&&A.traverseVisible(function(he){he.isLight&&he.layers.test(k.layers)&&(P.pushLight(he),he.castShadow&&P.pushShadow(he))}),P.setupLights(),ee!==null&&ee.updateLights(P.state.lightsArray),ue=this.localClippingEnabled,Fe=Qe.init(this.clippingPlanes,ue),Fe===!0&&Qe.setGlobalState(this.clippingPlanes,k),ee!==null&&st.render(P.state.shadowsArray,re,k);const fe=new Set;return A.traverse(function(he){if(!(he.isMesh||he.isPoints||he.isLine||he.isSprite))return;const We=he.material;if(We)if(Array.isArray(We))for(let ot=0;ot<We.length;ot++){const Ze=We[ot];Wn(Ze,re,k,he),fe.add(Ze)}else Wn(We,re,k,he),fe.add(We)}),P=w.pop(),ee!==null&&ee.renderEnd(),fe},this.compileAsync=function(A,k,re=null){const fe=this.compile(A,k,re);return new Promise(he=>{function We(){if(fe.forEach(function(ot){const De=z.get(ot).currentProgram;(De===void 0||De.isReady())&&fe.delete(ot)}),fe.size===0){he(A);return}setTimeout(We,10)}ze.get("KHR_parallel_shader_compile")!==null?We():setTimeout(We,10)})};let Tn=null;function Gn(A){Tn&&Tn(A)}function Yn(){Et.stop()}function Ht(){Et.start()}const Et=new zS;Et.setAnimationLoop(Gn),typeof self<"u"&&Et.setContext(self),this.setAnimationLoop=function(A){Tn=A,ft.setAnimationLoop(A),A===null?Et.stop():Et.start()},ft.addEventListener("sessionstart",Yn),ft.addEventListener("sessionend",Ht),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){sn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;ee!==null&&ee.renderStart(A,k);const re=ft.enabled===!0&&ft.isPresenting===!0,fe=T!==null&&(D===null||re)&&T.begin(H,D);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(k),k=ft.getCamera()),A.isScene===!0&&A.onBeforeRender(H,A,k,D),P=Ie.get(A,w.length),P.init(k),P.state.textureUnits=_e.getTextureUnits(),w.push(P),Oe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ae.setFromProjectionMatrix(Oe,Pa,k.reversedDepth),ue=this.localClippingEnabled,Fe=Qe.init(this.clippingPlanes,ue),O=Le.get(A,F.length),O.init(),F.push(O),ft.enabled===!0&&ft.isPresenting===!0){const ot=H.xr.getDepthSensingMesh();ot!==null&&Ot(ot,k,-1/0,H.sortObjects)}Ot(A,k,0,H.sortObjects),O.finish(),ee!==null&&ee.updateLights(P.state.lightsArray),H.sortObjects===!0&&O.sort(xe,Ue),Je=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,Je&&dt.addToRenderList(O,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Fe===!0&&Qe.beginShadows();const he=P.state.shadowsArray;if(st.render(he,A,k),Fe===!0&&Qe.endShadows(),(fe&&T.hasRenderPass())===!1){const ot=O.opaque,Ze=O.transmissive;if(P.setupLights(),k.isArrayCamera){const De=k.cameras;if(Ze.length>0)for(let it=0,pt=De.length;it<pt;it++){const yt=De[it];Ne(ot,Ze,A,yt)}Je&&dt.render(A);for(let it=0,pt=De.length;it<pt;it++){const yt=De[it];An(O,A,yt,yt.viewport)}}else Ze.length>0&&Ne(ot,Ze,A,k),Je&&dt.render(A),An(O,A,k)}D!==null&&$===0&&(_e.updateMultisampleRenderTarget(D),_e.updateRenderTargetMipmap(D)),fe&&T.end(H),A.isScene===!0&&A.onAfterRender(H,A,k),et.resetDefaultState(),le=-1,me=null,w.pop(),w.length>0?(P=w[w.length-1],_e.setTextureUnits(P.state.textureUnits),Fe===!0&&Qe.setGlobalState(H.clippingPlanes,P.state.camera)):P=null,F.pop(),F.length>0?O=F[F.length-1]:O=null,ee!==null&&ee.renderEnd()};function Ot(A,k,re,fe){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLightProbeGrid)P.pushLightProbeGrid(A);else if(A.isLight)P.pushLight(A),A.castShadow&&P.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(Ae)){fe&&vt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Oe);const ot=K.update(A),Ze=A.material;Ze.visible&&O.push(A,ot,Ze,re,vt.z,null,k)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(Ae))){const ot=K.update(A),Ze=A.material;if(fe&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),vt.copy(A.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),vt.copy(ot.boundingSphere.center)),vt.applyMatrix4(A.matrixWorld).applyMatrix4(Oe)),Array.isArray(Ze)){const De=ot.groups;for(let it=0,pt=De.length;it<pt;it++){const yt=De[it],$e=Ze[yt.materialIndex];$e&&$e.visible&&O.push(A,ot,$e,re,vt.z,yt,k)}}else Ze.visible&&O.push(A,ot,Ze,re,vt.z,null,k)}}const We=A.children;for(let ot=0,Ze=We.length;ot<Ze;ot++)Ot(We[ot],k,re,fe)}function An(A,k,re,fe){const{opaque:he,transmissive:We,transparent:ot}=A;P.setupLightsView(re),Fe===!0&&Qe.setGlobalState(H.clippingPlanes,re),fe&&b.viewport(Te.copy(fe)),he.length>0&&Pe(he,k,re),We.length>0&&Pe(We,k,re),ot.length>0&&Pe(ot,k,re),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Ne(A,k,re,fe){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[fe.id]===void 0){const $e=ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[fe.id]=new ga(1,1,{generateMipmaps:!0,type:$e?za:Gi,minFilter:Yr,samples:Math.max(4,L.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:an.workingColorSpace})}const We=P.state.transmissionRenderTarget[fe.id],ot=fe.viewport||Te;We.setSize(ot.z*H.transmissionResolutionScale,ot.w*H.transmissionResolutionScale);const Ze=H.getRenderTarget(),De=H.getActiveCubeFace(),it=H.getActiveMipmapLevel();H.setRenderTarget(We),H.getClearColor(G),J=H.getClearAlpha(),J<1&&H.setClearColor(16777215,.5),H.clear(),Je&&dt.render(re);const pt=H.toneMapping;H.toneMapping=Fa;const yt=fe.viewport;if(fe.viewport!==void 0&&(fe.viewport=void 0),P.setupLightsView(fe),Fe===!0&&Qe.setGlobalState(H.clippingPlanes,fe),Pe(A,re,fe),_e.updateMultisampleRenderTarget(We),_e.updateRenderTargetMipmap(We),ze.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Nt=0,bt=k.length;Nt<bt;Nt++){const Dt=k[Nt],{object:Ut,geometry:on,material:ut,group:Wt}=Dt;if(ut.side===da&&Ut.layers.test(fe.layers)){const kt=ut.side;ut.side=Di,ut.needsUpdate=!0,Ve(Ut,re,fe,on,ut,Wt),ut.side=kt,ut.needsUpdate=!0,$e=!0}}$e===!0&&(_e.updateMultisampleRenderTarget(We),_e.updateRenderTargetMipmap(We))}H.setRenderTarget(Ze,De,it),H.setClearColor(G,J),yt!==void 0&&(fe.viewport=yt),H.toneMapping=pt}function Pe(A,k,re){const fe=k.isScene===!0?k.overrideMaterial:null;for(let he=0,We=A.length;he<We;he++){const ot=A[he],{object:Ze,geometry:De,group:it}=ot;let pt=ot.material;pt.allowOverride===!0&&fe!==null&&(pt=fe),Ze.layers.test(re.layers)&&Ve(Ze,k,re,De,pt,it)}}function Ve(A,k,re,fe,he,We){ee!==null&&he.isNodeMaterial&&ee.setObject(A,he),A.onBeforeRender(H,k,re,fe,he,We),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),he.onBeforeRender(H,k,re,fe,A,We),he.transparent===!0&&he.side===da&&he.forceSinglePass===!1?(he.side=Di,he.needsUpdate=!0,H.renderBufferDirect(re,k,fe,he,A,We),he.side=Ms,he.needsUpdate=!0,H.renderBufferDirect(re,k,fe,he,A,We),he.side=da):H.renderBufferDirect(re,k,fe,he,A,We),A.onAfterRender(H,k,re,fe,he,We)}function tt(A,k,re){k.isScene!==!0&&(k=mt);const fe=z.get(A),he=P.state.lights,We=P.state.shadowsArray,ot=he.state.version,Ze=ce.getParameters(A,he.state,We,k,re,P.state.lightProbeGridArray),De=ce.getProgramCacheKey(Ze);let it=fe.programs;fe.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,fe.fog=k.fog;const pt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;fe.envMap=Ce.get(A.envMap||fe.environment,pt),fe.envMapRotation=fe.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,it===void 0&&(A.addEventListener("dispose",gn),it=new Map,fe.programs=it);let yt=it.get(De);if(yt!==void 0){if(fe.currentProgram===yt&&fe.lightsStateVersion===ot)return at(A,Ze),yt}else Ze.uniforms=ce.getUniforms(A),ee!==null&&A.isNodeMaterial&&ee.build(A,re,Ze),A.onBeforeCompile(Ze,H),yt=ce.acquireProgram(Ze,De),it.set(De,yt),fe.uniforms=Ze.uniforms;const $e=fe.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&($e.clippingPlanes=Qe.uniform),at(A,Ze),fe.needsLights=ht(A),fe.lightsStateVersion=ot,fe.needsLights&&($e.ambientLightColor.value=he.state.ambient,$e.lightProbe.value=he.state.probe,$e.sunLights.value=he.state.sun,$e.sunLightShadows.value=he.state.sunShadow,$e.directionalLights.value=he.state.directional,$e.directionalLightShadows.value=he.state.directionalShadow,$e.spotLights.value=he.state.spot,$e.spotLightShadows.value=he.state.spotShadow,$e.rectAreaLights.value=he.state.rectArea,$e.ltc_1.value=he.state.rectAreaLTC1,$e.ltc_2.value=he.state.rectAreaLTC2,$e.pointLights.value=he.state.point,$e.pointLightShadows.value=he.state.pointShadow,$e.hemisphereLights.value=he.state.hemi,$e.sunShadowMatrix.value=he.state.sunShadowMatrix,$e.sunShadowCascade.value=he.state.sunShadowCascade,$e.directionalShadowMatrix.value=he.state.directionalShadowMatrix,$e.spotLightMatrix.value=he.state.spotLightMatrix,$e.spotLightMap.value=he.state.spotLightMap,$e.pointShadowMatrix.value=he.state.pointShadowMatrix),fe.lightProbeGrid=P.state.lightProbeGridArray.length>0,fe.currentProgram=yt,fe.uniformsList=null,yt}function ct(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=gf.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function at(A,k){const re=z.get(A);re.outputColorSpace=k.outputColorSpace,re.batching=k.batching,re.batchingColor=k.batchingColor,re.instancing=k.instancing,re.instancingColor=k.instancingColor,re.instancingMorph=k.instancingMorph,re.skinning=k.skinning,re.morphTargets=k.morphTargets,re.morphNormals=k.morphNormals,re.morphColors=k.morphColors,re.morphTargetsCount=k.morphTargetsCount,re.numClippingPlanes=k.numClippingPlanes,re.numIntersection=k.numClipIntersection,re.vertexAlphas=k.vertexAlphas,re.vertexTangents=k.vertexTangents,re.toneMapping=k.toneMapping}function Ct(A,k){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;R.setFromMatrixPosition(k.matrixWorld);for(let re=0,fe=A.length;re<fe;re++){const he=A[re];if(he.texture!==null&&he.boundingBox.containsPoint(R))return he}return null}function wt(A,k,re,fe,he){k.isScene!==!0&&(k=mt),_e.resetTextureUnits();const We=k.fog,ot=fe.isMeshStandardMaterial||fe.isMeshLambertMaterial||fe.isMeshPhongMaterial?k.environment:null,Ze=D===null?H.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:an.workingColorSpace,De=fe.isMeshStandardMaterial||fe.isMeshLambertMaterial&&!fe.envMap||fe.isMeshPhongMaterial&&!fe.envMap,it=Ce.get(fe.envMap||ot,De),pt=fe.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,yt=!!re.attributes.tangent&&(!!fe.normalMap||fe.anisotropy>0),$e=!!re.morphAttributes.position,Nt=!!re.morphAttributes.normal,bt=!!re.morphAttributes.color;let Dt=Fa;fe.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Dt=H.toneMapping);const Ut=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,on=Ut!==void 0?Ut.length:0,ut=z.get(fe),Wt=P.state.lights;if(Fe===!0&&(ue===!0||A!==me)){const en=A===me&&fe.id===le;Qe.setState(fe,A,en)}let kt=!1;fe.version===ut.__version?(ut.needsLights&&ut.lightsStateVersion!==Wt.state.version||ut.outputColorSpace!==Ze||he.isBatchedMesh&&ut.batching===!1||!he.isBatchedMesh&&ut.batching===!0||he.isBatchedMesh&&ut.batchingColor===!0&&he._colorsTexture===null||he.isBatchedMesh&&ut.batchingColor===!1&&he._colorsTexture!==null||he.isInstancedMesh&&ut.instancing===!1||!he.isInstancedMesh&&ut.instancing===!0||he.isSkinnedMesh&&ut.skinning===!1||!he.isSkinnedMesh&&ut.skinning===!0||he.isInstancedMesh&&ut.instancingColor===!0&&he.instanceColor===null||he.isInstancedMesh&&ut.instancingColor===!1&&he.instanceColor!==null||he.isInstancedMesh&&ut.instancingMorph===!0&&he.morphTexture===null||he.isInstancedMesh&&ut.instancingMorph===!1&&he.morphTexture!==null||ut.envMap!==it||fe.fog===!0&&ut.fog!==We||ut.numClippingPlanes!==void 0&&(ut.numClippingPlanes!==Qe.numPlanes||ut.numIntersection!==Qe.numIntersection)||ut.vertexAlphas!==pt||ut.vertexTangents!==yt||ut.morphTargets!==$e||ut.morphNormals!==Nt||ut.morphColors!==bt||ut.toneMapping!==Dt||ut.morphTargetsCount!==on||!!ut.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(kt=!0):(kt=!0,ut.__version=fe.version);let Vn=ut.currentProgram;kt===!0&&(Vn=tt(fe,k,he),ee&&fe.isNodeMaterial&&ee.onUpdateProgram(fe,Vn,ut));let Jn=!1,Mi=!1,Zt=!1;const ln=Vn.getUniforms(),yn=ut.uniforms;if(b.useProgram(Vn.program)&&(Jn=!0,Mi=!0,Zt=!0),fe.id!==le&&(le=fe.id,Mi=!0),ut.needsLights){const en=Ct(P.state.lightProbeGridArray,he);ut.lightProbeGrid!==en&&(ut.lightProbeGrid=en,Mi=!0)}if(Jn||me!==A){b.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ln.setValue(j,"projectionMatrix",A.projectionMatrix),ln.setValue(j,"viewMatrix",A.matrixWorldInverse);const Nn=ln.map.cameraPosition;Nn!==void 0&&Nn.setValue(j,He.setFromMatrixPosition(A.matrixWorld)),L.logarithmicDepthBuffer&&ln.setValue(j,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(fe.isMeshPhongMaterial||fe.isMeshToonMaterial||fe.isMeshLambertMaterial||fe.isMeshBasicMaterial||fe.isMeshStandardMaterial||fe.isShaderMaterial)&&ln.setValue(j,"isOrthographic",A.isOrthographicCamera===!0),me!==A&&(me=A,Mi=!0,Zt=!0)}if(ut.needsLights&&(Wt.state.sunShadowMap.length>0&&ln.setValue(j,"sunShadowMap",Wt.state.sunShadowMap,_e),Wt.state.directionalShadowMap.length>0&&ln.setValue(j,"directionalShadowMap",Wt.state.directionalShadowMap,_e),Wt.state.spotShadowMap.length>0&&ln.setValue(j,"spotShadowMap",Wt.state.spotShadowMap,_e),Wt.state.pointShadowMap.length>0&&ln.setValue(j,"pointShadowMap",Wt.state.pointShadowMap,_e)),he.isSkinnedMesh){ln.setOptional(j,he,"bindMatrix"),ln.setOptional(j,he,"bindMatrixInverse");const en=he.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),ln.setValue(j,"boneTexture",en.boneTexture,_e))}he.isBatchedMesh&&(ln.setOptional(j,he,"batchingTexture"),ln.setValue(j,"batchingTexture",he._matricesTexture,_e),ln.setOptional(j,he,"batchingIdTexture"),ln.setValue(j,"batchingIdTexture",he._indirectTexture,_e),ln.setOptional(j,he,"batchingColorTexture"),he._colorsTexture!==null&&ln.setValue(j,"batchingColorTexture",he._colorsTexture,_e));const Ni=re.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&X.update(he,re,Vn),(Mi||ut.receiveShadow!==he.receiveShadow)&&(ut.receiveShadow=he.receiveShadow,ln.setValue(j,"receiveShadow",he.receiveShadow)),(fe.isMeshStandardMaterial||fe.isMeshLambertMaterial||fe.isMeshPhongMaterial)&&fe.envMap===null&&k.environment!==null&&(yn.envMapIntensity.value=k.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=$C()),Mi){if(ln.setValue(j,"toneMappingExposure",H.toneMappingExposure),ut.needsLights&&Ee(yn,Zt),We&&fe.fog===!0&&Be.refreshFogUniforms(yn,We),Be.refreshMaterialUniforms(yn,fe,ne,ie,P.state.transmissionRenderTarget[A.id]),ut.needsLights&&ut.lightProbeGrid){const en=ut.lightProbeGrid;yn.probesSH.value=en.texture,yn.probesMin.value.copy(en.boundingBox.min),yn.probesMax.value.copy(en.boundingBox.max),yn.probesResolution.value.copy(en.resolution)}gf.upload(j,ct(ut),yn,_e)}if(fe.isShaderMaterial&&fe.uniformsNeedUpdate===!0&&(gf.upload(j,ct(ut),yn,_e),fe.uniformsNeedUpdate=!1),fe.isSpriteMaterial&&ln.setValue(j,"center",he.center),ln.setValue(j,"modelViewMatrix",he.modelViewMatrix),ln.setValue(j,"normalMatrix",he.normalMatrix),ln.setValue(j,"modelMatrix",he.matrixWorld),fe.uniformsGroups!==void 0){const en=fe.uniformsGroups;for(let Nn=0,Va=en.length;Nn<Va;Nn++){const pc=en[Nn];Ye.update(pc,Vn),Ye.bind(pc,Vn)}}return Vn}function Ee(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.sunLights.needsUpdate=k,A.sunLightShadows.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function ht(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(A,k,re){const fe=z.get(A);fe.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,fe.__autoAllocateDepthBuffer===!1&&(fe.__useRenderToTexture=!1),z.get(A.texture).__webglTexture=k,z.get(A.depthTexture).__webglTexture=fe.__autoAllocateDepthBuffer?void 0:re,fe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){const re=z.get(A);re.__webglFramebuffer=k,re.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,re=0){D=A,W=k,$=re;let fe=null,he=!1,We=!1;if(A){const Ze=z.get(A);if(Ze.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(j.FRAMEBUFFER,Ze.__webglFramebuffer),Te.copy(A.viewport),rt.copy(A.scissor),je=A.scissorTest,b.viewport(Te),b.scissor(rt),b.setScissorTest(je),le=-1;return}else if(Ze.__webglFramebuffer===void 0)_e.setupRenderTarget(A);else if(Ze.__hasExternalTextures)_e.rebindTextures(A,z.get(A.texture).__webglTexture,z.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const pt=A.depthTexture;if(Ze.__boundDepthTexture!==pt){if(pt!==null&&z.has(pt)&&(A.width!==pt.image.width||A.height!==pt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");_e.setupDepthRenderbuffer(A)}}const De=A.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(We=!0);const it=z.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(it[k])?fe=it[k][re]:fe=it[k],he=!0):A.samples>0&&_e.useMultisampledRTT(A)===!1?fe=z.get(A).__webglMultisampledFramebuffer:Array.isArray(it)?fe=it[re]:fe=it,Te.copy(A.viewport),rt.copy(A.scissor),je=A.scissorTest}else Te.copy(ye).multiplyScalar(ne).floor(),rt.copy(we).multiplyScalar(ne).floor(),je=_t;if(re!==0&&(fe=I),b.bindFramebuffer(j.FRAMEBUFFER,fe)&&b.drawBuffers(A,fe),b.viewport(Te),b.scissor(rt),b.setScissorTest(je),he){const Ze=z.get(A.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ze.__webglTexture,re)}else if(We){const Ze=k;for(let De=0;De<A.textures.length;De++){const it=z.get(A.textures[De]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+De,it.__webglTexture,re,Ze)}}else if(A!==null&&re!==0){const Ze=z.get(A.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ze.__webglTexture,re)}le=-1};function lt(A){const k=z.get(A);return(k.__readFormat!==A.format||k.__readType!==A.type)&&(k.__readFormat=A.format,k.__readType=A.type,k.__formatReadable=L.textureFormatReadable(A.format),k.__typeReadable=L.textureTypeReadable(A.type)),k}this.readRenderTargetPixels=function(A,k,re,fe,he,We,ot,Ze=0){if(!(A&&A.isWebGLRenderTarget)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=z.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ot!==void 0&&(De=De[ot]),De){b.bindFramebuffer(j.FRAMEBUFFER,De);try{const it=A.textures[Ze],pt=it.format,yt=it.type;A.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ze);const $e=lt(it);if($e.__formatReadable===!1){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if($e.__typeReadable===!1){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-fe&&re>=0&&re<=A.height-he&&j.readPixels(k,re,fe,he,qe.convert(pt),qe.convert(yt),We)}finally{const it=D!==null?z.get(D).__webglFramebuffer:null;b.bindFramebuffer(j.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(A,k,re,fe,he,We,ot,Ze=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=z.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ot!==void 0&&(De=De[ot]),De)if(k>=0&&k<=A.width-fe&&re>=0&&re<=A.height-he){b.bindFramebuffer(j.FRAMEBUFFER,De);const it=A.textures[Ze],pt=it.format,yt=it.type;A.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ze);const $e=lt(it);if($e.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if($e.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Nt=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Nt),j.bufferData(j.PIXEL_PACK_BUFFER,We.byteLength,j.STREAM_READ),j.readPixels(k,re,fe,he,qe.convert(pt),qe.convert(yt),0),j.bindBuffer(j.PIXEL_PACK_BUFFER,null);const bt=D!==null?z.get(D).__webglFramebuffer:null;b.bindFramebuffer(j.FRAMEBUFFER,bt);const Dt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await Hb(j,Dt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Nt),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,We),j.bindBuffer(j.PIXEL_PACK_BUFFER,null),j.deleteBuffer(Nt),j.deleteSync(Dt),We}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,re=0){const fe=Math.pow(2,-re),he=Math.floor(A.image.width*fe),We=Math.floor(A.image.height*fe),ot=k!==null?k.x:0,Ze=k!==null?k.y:0;_e.setTexture2D(A,0),j.copyTexSubImage2D(j.TEXTURE_2D,re,0,0,ot,Ze,he,We),b.unbindTexture()},this.copyTextureToTexture=function(A,k,re=null,fe=null,he=0,We=0){let ot,Ze,De,it,pt,yt,$e,Nt,bt;const Dt=A.isCompressedTexture?A.mipmaps[We]:A.image;if(re!==null)ot=re.max.x-re.min.x,Ze=re.max.y-re.min.y,De=re.isBox3?re.max.z-re.min.z:1,it=re.min.x,pt=re.min.y,yt=re.isBox3?re.min.z:0;else{const yn=Math.pow(2,-he);ot=Math.floor(Dt.width*yn),Ze=Math.floor(Dt.height*yn),A.isDataArrayTexture?De=Dt.depth:A.isData3DTexture?De=Math.floor(Dt.depth*yn):De=1,it=0,pt=0,yt=0}fe!==null?($e=fe.x,Nt=fe.y,bt=fe.z):($e=0,Nt=0,bt=0);const Ut=qe.convert(k.format),on=qe.convert(k.type);let ut;k.isData3DTexture?(_e.setTexture3D(k,0),ut=j.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(_e.setTexture2DArray(k,0),ut=j.TEXTURE_2D_ARRAY):(_e.setTexture2D(k,0),ut=j.TEXTURE_2D),b.activeTexture(j.TEXTURE0),b.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,k.flipY),b.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),b.pixelStorei(j.UNPACK_ALIGNMENT,k.unpackAlignment);const Wt=b.getParameter(j.UNPACK_ROW_LENGTH),kt=b.getParameter(j.UNPACK_IMAGE_HEIGHT),Vn=b.getParameter(j.UNPACK_SKIP_PIXELS),Jn=b.getParameter(j.UNPACK_SKIP_ROWS),Mi=b.getParameter(j.UNPACK_SKIP_IMAGES);b.pixelStorei(j.UNPACK_ROW_LENGTH,Dt.width),b.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Dt.height),b.pixelStorei(j.UNPACK_SKIP_PIXELS,it),b.pixelStorei(j.UNPACK_SKIP_ROWS,pt),b.pixelStorei(j.UNPACK_SKIP_IMAGES,yt);const Zt=A.isDataArrayTexture||A.isData3DTexture,ln=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){const yn=z.get(A),Ni=z.get(k),en=z.get(yn.__renderTarget),Nn=z.get(Ni.__renderTarget);b.bindFramebuffer(j.READ_FRAMEBUFFER,en.__webglFramebuffer),b.bindFramebuffer(j.DRAW_FRAMEBUFFER,Nn.__webglFramebuffer);for(let Va=0;Va<De;Va++)Zt&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,z.get(A).__webglTexture,he,yt+Va),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,z.get(k).__webglTexture,We,bt+Va)),j.blitFramebuffer(it,pt,ot,Ze,$e,Nt,ot,Ze,j.DEPTH_BUFFER_BIT,j.NEAREST);b.bindFramebuffer(j.READ_FRAMEBUFFER,null),b.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(he!==0||A.isRenderTargetTexture||z.has(A)){const yn=z.get(A),Ni=z.get(k);b.bindFramebuffer(j.READ_FRAMEBUFFER,Q),b.bindFramebuffer(j.DRAW_FRAMEBUFFER,ae);for(let en=0;en<De;en++)Zt?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,yn.__webglTexture,he,yt+en):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,yn.__webglTexture,he),ln?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ni.__webglTexture,We,bt+en):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ni.__webglTexture,We),he!==0?j.blitFramebuffer(it,pt,ot,Ze,$e,Nt,ot,Ze,j.COLOR_BUFFER_BIT,j.NEAREST):ln?j.copyTexSubImage3D(ut,We,$e,Nt,bt+en,it,pt,ot,Ze):j.copyTexSubImage2D(ut,We,$e,Nt,it,pt,ot,Ze);b.bindFramebuffer(j.READ_FRAMEBUFFER,null),b.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else ln?A.isDataTexture||A.isData3DTexture?j.texSubImage3D(ut,We,$e,Nt,bt,ot,Ze,De,Ut,on,Dt.data):k.isCompressedArrayTexture?j.compressedTexSubImage3D(ut,We,$e,Nt,bt,ot,Ze,De,Ut,Dt.data):j.texSubImage3D(ut,We,$e,Nt,bt,ot,Ze,De,Ut,on,Dt):A.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,We,$e,Nt,ot,Ze,Ut,on,Dt.data):A.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,We,$e,Nt,Dt.width,Dt.height,Ut,Dt.data):j.texSubImage2D(j.TEXTURE_2D,We,$e,Nt,ot,Ze,Ut,on,Dt);b.pixelStorei(j.UNPACK_ROW_LENGTH,Wt),b.pixelStorei(j.UNPACK_IMAGE_HEIGHT,kt),b.pixelStorei(j.UNPACK_SKIP_PIXELS,Vn),b.pixelStorei(j.UNPACK_SKIP_ROWS,Jn),b.pixelStorei(j.UNPACK_SKIP_IMAGES,Mi),We===0&&k.generateMipmaps&&j.generateMipmap(ut),b.unbindTexture()},this.initRenderTarget=function(A){z.get(A).__webglFramebuffer===void 0&&_e.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?_e.setTextureCube(A,0):A.isData3DTexture?_e.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?_e.setTexture2DArray(A,0):_e.setTexture2D(A,0),b.unbindTexture()},this.resetState=function(){W=0,$=0,D=null,b.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=an._getDrawingBufferColorSpace(e),n.unpackColorSpace=an._getUnpackColorSpace()}}const ry={portrait:[1.6,2.25],landscape:[2.25,1.6]},tD={left:.27,center:.5,right:.73},Tf=.018,Ci=.007,Hn=4,sy=1/.05,nD=1/960,iD=2,or=72,oy=24,Kp=.36,WS=.095,aD=.0135,rf=.036,jl=.15,ly=1024,cy={glossy:{roughness:.42,metalness:0,clearcoat:1,clearcoatRoughness:.06,foil:0,anisotropy:0},matte:{roughness:.85,metalness:0,clearcoat:0,clearcoatRoughness:.6,foil:0,anisotropy:0},holographic:{roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.04,foil:1,anisotropy:0},metallic:{roughness:.36,metalness:.75,clearcoat:.5,clearcoatRoughness:.18,foil:0,anisotropy:.7}},vf=[0,.07,.93,1],rD=[-.95,-.28,.28,.95],sD=9,oD=`
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;
`,lD=`
vFoilUv = uv;
vFoilX = normalize((modelViewMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xyz);
vFoilY = normalize((modelViewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
`,cD=`
uniform float foilStrength;
uniform float foilAspect;
uniform vec3 foilKey;
uniform vec3 foilFill;
uniform vec3 foilTop;
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;

float foilHash(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

float foilBump(float t, float center, float width) {
  float x = (t - center) / width;
  return max(0.0, 1.0 - x * x);
}

vec3 foilSpectrum(float t) {
  return vec3(
    foilBump(t, 0.82, 0.32) + 0.4 * foilBump(t, 0.02, 0.12),
    foilBump(t, 0.5, 0.26),
    foilBump(t, 0.18, 0.24)
  );
}

vec3 foilGrating(float u, float spacing) {
  vec3 color = vec3(0.0);
  for (int m = 1; m <= 2; m++) {
    float order = float(m);
    float t = (spacing * abs(u) / order - 0.38) / 0.32;
    color += foilSpectrum(t) / order;
  }
  return color;
}

vec3 foilShard(vec2 p) {
  vec2 base = floor(p);
  float best = 9.0;
  float edge = 9.0;
  vec2 id = base;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 cell = base + vec2(float(i), float(j));
      vec2 site = cell + vec2(foilHash(cell), foilHash(cell + 7.31)) * 0.9 + 0.05;
      float d = length(site - p);
      if (d < best) {
        edge = best;
        best = d;
        id = cell;
      } else if (d < edge) {
        edge = d;
      }
    }
  }
  return vec3(foilHash(id + 3.17), foilHash(id + 11.73), edge - best);
}
`,uD=`
if (foilStrength > 0.0) {
  vec3 foilView = normalize(vViewPosition);
  vec3 foilNormal = normalize(normal);
  vec2 foilP = vec2(vFoilUv.x, vFoilUv.y * foilAspect);
  vec3 shard = foilShard(foilP * 26.0);
  vec2 ray = foilP - vec2(-1.6, 2.6 * foilAspect);
  float angle = atan(ray.y, ray.x) + (shard.x - 0.5) * 0.16;
  vec3 grating = normalize(vFoilX * cos(angle) + vFoilY * sin(angle));
  float spacing = 1.7 * (0.95 + shard.y * 0.1);
  vec3 rainbow = foilGrating(dot(foilKey + foilView, grating), spacing);
  rainbow += 0.6 * foilGrating(dot(foilTop + foilView, grating), spacing);
  rainbow *= 0.8 + 0.2 * smoothstep(0.0, 0.04, shard.z);
  rainbow = max(rainbow - 0.35 * min(rainbow.r, min(rainbow.g, rainbow.b)), 0.0);
  vec2 grid = foilP * 64.0;
  vec2 cell = floor(grid);
  vec2 jitter = vec2(foilHash(cell + 1.7), foilHash(cell + 9.2));
  float flake = smoothstep(0.32, 0.06, length(fract(grid) - jitter * 0.6 - 0.2)) * step(0.45, foilHash(cell + 4.4));
  vec3 facet = normalize(foilNormal + (vFoilX * (jitter.x - 0.5) + vFoilY * (jitter.y - 0.5)) * 0.8);
  float glint = pow(max(dot(reflect(-foilKey, facet), foilView), 0.0), 28.0);
  glint += 0.7 * pow(max(dot(reflect(-foilTop, facet), foilView), 0.0), 28.0);
  float fine = 1.0 - smoothstep(0.35, 0.9, max(fwidth(grid.x), fwidth(grid.y)));
  vec3 sparkle = flake * glint * fine * (vec3(0.7) + foilGrating(dot(foilKey + foilView, grating) + jitter.x * 0.4, spacing));
  float ink = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
  float foil = foilStrength * (0.08 + 0.92 * smoothstep(0.04, 0.7, ink));
  float facing = clamp(dot(foilNormal, foilView), 0.0, 1.0);
  float tint = clamp(dot(rainbow, vec3(0.4)), 0.0, 1.0);
  outgoingLight = outgoingLight * (1.0 - foil * (0.3 + 0.32 * tint)) + (rainbow * 0.62 * (0.4 + 0.6 * facing) + sparkle * 1.6) * foil;
}
`,uy={silver:{color:"#d9dce2",roughness:.16},gold:{color:"#e4b965",roughness:.2},graphite:{color:"#4d4f55",roughness:.28}},Xr=(a,e,n)=>Math.min(n,Math.max(e,a)),Wl=(a,e,n)=>a+(e-a)*n,Qp=(a,e)=>{try{const n=document.createElement("canvas").getContext("2d");if(!n)return e;n.fillStyle="#000000",n.fillStyle=a;const r=n.fillStyle;if(r.startsWith("#")){const c=parseInt(r.slice(1),16);return[(c>>16&255)/255,(c>>8&255)/255,(c&255)/255]}const o=r.match(/[\d.]+/g);return!o||o.length<3?e:[Number(o[0])/255,Number(o[1])/255,Number(o[2])/255]}catch{return e}},fD=a=>.2126*a[0]+.7152*a[1]+.0722*a[2],xf=(a,e=1)=>`rgba(${Math.round(a[0]*255)}, ${Math.round(a[1]*255)}, ${Math.round(a[2]*255)}, ${e})`,YS=a=>{let e=a>>>0;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}},s0=(a,e,n,r,o,c)=>{const u=Math.max(0,Math.min(c,r/2,o/2)),d=u*.4477;a.moveTo(e+u,n),a.lineTo(e+r-u,n),a.bezierCurveTo(e+r-d,n,e+r,n+d,e+r,n+u),a.lineTo(e+r,n+o-u),a.bezierCurveTo(e+r,n+o-d,e+r-d,n+o,e+r-u,n+o),a.lineTo(e+u,n+o),a.bezierCurveTo(e+d,n+o,e,n+o-d,e,n+o-u),a.lineTo(e,n+u),a.bezierCurveTo(e,n+d,e+d,n,e+u,n)},jp=(a,e)=>{if(!e)return Promise.resolve(null);const n=a.get(e);if(n)return n;const r=new Promise(o=>{const c=new Image;c.crossOrigin="anonymous",c.decoding="async",c.onload=()=>o(c),c.onerror=()=>o(null),c.src=e});return a.set(e,r),r},fy=(a,e)=>{const[n,r]=ry[a]||ry.portrait,o=Wl(.03,Math.min(n,r)*.2,Xr(e,0,1)),c={width:.34,height:.07,y:r/2-.13},u=r/2-.055;return{width:n,height:r,radius:o,slot:c,ringY:u,hangY:u+WS}},hD=a=>{const{width:e,height:n,radius:r,slot:o}=a,c=new Df;s0(c,-e/2+Ci,-n/2+Ci,e-Ci*2,n-Ci*2,Math.max(r-Ci,.005));const u=new $m;s0(u,-o.width/2-Ci,o.y-o.height/2-Ci,o.width+Ci*2,o.height+Ci*2,o.height/2+Ci),c.holes.push(u);const d=new Nf(c,{depth:Tf,bevelEnabled:!0,bevelThickness:Ci,bevelSize:Ci,bevelSegments:5,curveSegments:24});d.translate(0,0,-Tf/2);const p=new R0(c,24),m=p.getAttribute("position"),x=p.getAttribute("uv");for(let g=0;g<m.count;g++)x.setXY(g,(m.getX(g)+e/2)/e,(m.getY(g)+n/2)/n);return x.needsUpdate=!0,{body:d,face:p}},hy=a=>{const e=new Df,n=a*1.16;s0(e,-n/2+.014,-jl/2+.014,n-.028,jl-.028,.024);const r=new Nf(e,{depth:.02,bevelEnabled:!0,bevelThickness:.014,bevelSize:.014,bevelSegments:6,curveSegments:10});return r.translate(0,0,-.01),r},dD=a=>{const e=vf.length,n=new Vi;n.setAttribute("position",new ta(new Float32Array(a*e*3),3)),n.setAttribute("normal",new ta(new Float32Array(a*e*3),3)),n.setAttribute("uv",new ta(new Float32Array(a*e*2),2));const r=[];for(let o=0;o<a-1;o++)for(let c=0;c<e-1;c++){const u=o*e+c;r.push(u,u+e,u+1,u+1,u+e,u+e+1)}return n.setIndex(r),n},pD=a=>{const e=new _S;e.background=new Qt(.035,.035,.04);const n=new dc(1,1),r=[],o=(d,p,m,x=0)=>{const g=new b0({color:new Qt(d,d,d),side:da});r.push(g);const v=new ri(n,g);v.position.set(...p),v.scale.set(m[0],m[1],1),v.lookAt(0,0,0),v.rotateZ(x),e.add(v)};o(2.6,[0,4.5,8],[9,4]),o(6,[-5.5,.5,7],[.9,14]),o(4,[5,-.5,8],[.6,14]),o(3.5,[0,-1,9],[24,.35],Math.PI/3),o(2.5,[1,2.5,9],[24,.2],Math.PI/3),o(1.4,[0,6,-6],[12,4]),o(.5,[0,-7,1],[16,6]),o(.9,[8,0,-2],[4,10]);const c=new i0(a),u=c.fromScene(e,.035);return c.dispose(),n.dispose(),r.forEach(d=>d.dispose()),u},Jp=(a,e)=>{const n=new jm(a);return n.colorSpace=_i,n.anisotropy=e,n},mD=()=>{const e=document.createElement("canvas");e.width=128,e.height=128;const n=e.getContext("2d");if(!n)return new jm(e);const r=YS(7),o=Float32Array.from({length:16384},()=>r()),c=(p,m)=>{let x=0;for(let g=-1;g<=1;g++)for(let v=-1;v<=1;v++)x+=o[(m+g+128)%128*128+(p+v+128)%128];return x/9*1.6},u=n.createImageData(128,128);for(let p=0;p<128;p++)for(let m=0;m<128;m++){const x=c((m-1+128)%128,p)-c((m+1)%128,p),g=c(m,(p-1+128)%128)-c(m,(p+1)%128),v=Math.hypot(x,g,1),_=(p*128+m)*4;u.data[_]=(x/v*.5+.5)*255,u.data[_+1]=(g/v*.5+.5)*255,u.data[_+2]=(1/v*.5+.5)*255,u.data[_+3]=255}n.putImageData(u,0,0);const d=new jm(e);return d.wrapS=Kr,d.wrapT=Kr,d.repeat.set(5,7),d},gD=()=>{const n=YS(19),r=Float32Array.from({length:16384},()=>n()),o=p=>Math.sqrt(Math.max(0,1-4*p*p)),c=(p,m)=>{const x=(p%128+128)%128,g=(m%128+128)%128,v=x/128*8,_=g/128*8,E=Math.floor(v),C=Math.floor(_),y=v-E-.5,M=_-C-.5,U=(E+C)%2===0,B=o(y)*(.55+.45*Math.cos(M*Math.PI*(U?1:.6))),R=o(M)*(.55+.45*Math.cos(y*Math.PI*(U?.6:1)));return(U?Math.max(B,R*.7):Math.max(R,B*.7))+r[g*128+x]*.08},u=new Uint8Array(16384*4);for(let p=0;p<128;p++)for(let m=0;m<128;m++){const x=(c(m-1,p)-c(m+1,p))*1.6,g=(c(m,p-1)-c(m,p+1))*1.6,v=Math.hypot(x,g,1),_=(p*128+m)*4;u[_]=(x/v*.5+.5)*255,u[_+1]=(g/v*.5+.5)*255,u[_+2]=(1/v*.5+.5)*255,u[_+3]=255}const d=new ES(u,128,128);return d.wrapS=Kr,d.wrapT=Kr,d.magFilter=oi,d.minFilter=Yr,d.generateMipmaps=!0,d.needsUpdate=!0,d},vD=(a,e,n,r,o)=>{const c=(o==="contain"?Math.min:Math.max)(n/e.width,r/e.height),u=e.width*c,d=e.height*c;a.drawImage(e,(n-u)/2,(r-d)/2,u,d)},dy=(a,e,n,r)=>{const o=a.getContext("2d");o&&(o.fillStyle=xf(n),o.fillRect(0,0,a.width,a.height),e&&vD(o,e,a.width,a.height,r))},xD=(a,e,n)=>{const o=e?Math.max(64,Math.round(e.width/e.height*192)):384;a.width=192,a.height=o;const c=a.getContext("2d");if(!c)return o/192;if(c.fillStyle=xf(n),c.fillRect(0,0,192,o),e)return c.save(),c.translate(192,0),c.rotate(Math.PI/2),c.drawImage(e,0,0,o,192),c.restore(),o/192;const u=fD(n)>.5?[0,0,0]:[1,1,1];c.fillStyle=xf(u,.05);for(let d=0;d<o;d+=4)c.fillRect(0,d,192,1);c.fillStyle=xf(u,.2);for(let d=0;d<o;d+=14)c.fillRect(192*.075,d,2,8),c.fillRect(192*.925-2,d,2,8);return o/192},_D=()=>{const a=()=>Array.from({length:Hn+1},()=>new oe);return{nodes:a(),previous:a(),velocities:a(),lengths:new Float64Array(Hn),impulses:new Float64Array(Hn),rest:1,anchor:new oe,body:{position:new oe,previous:new oe,velocity:new oe,quaternion:new Ba,previousQuaternion:new Ba,angular:new oe,mass:1,inverseInertia:new oe(1,1,1),hang:new oe},grab:null,turn:0,twist:0,twistRaw:0,calm:0}},mn={a:new oe,b:new oe,c:new oe,d:new oe,e:new oe,f:new oe,g:new oe,pin:new oe,q:new Ba,r:new Ba},D0=(a,e,n)=>(mn.r.copy(a.quaternion).invert(),n.copy(e).applyQuaternion(mn.r),n.set(n.x*a.inverseInertia.x,n.y*a.inverseInertia.y,n.z*a.inverseInertia.z),n.applyQuaternion(a.quaternion)),ZS=(a,e)=>{const{x:n,y:r,z:o,w:c}=a;a.x+=.5*(e.x*c+e.y*o-e.z*r),a.y+=.5*(e.y*c+e.z*n-e.x*o),a.z+=.5*(e.z*c+e.x*r-e.y*n),a.w+=.5*(-e.x*n-e.y*r-e.z*o),a.normalize()},KS=(a,e,n)=>{const r=mn.c.crossVectors(e,n);return 1/a.mass+r.dot(D0(a,r,mn.d))},QS=(a,e,n)=>{a.position.addScaledVector(n,1/a.mass),ZS(a.quaternion,D0(a,mn.e.crossVectors(e,n),mn.f))},yD=(a,e,n,r)=>{const{nodes:o,body:c}=a,u=o[e],d=e===0?0:sy,p=e===Hn-1,m=mn.g;let x=o[e+1];p&&(m.copy(c.hang).applyQuaternion(c.quaternion),x=mn.b.copy(c.position).add(m));const g=mn.a.subVectors(x,u),v=g.length(),_=v-a.rest;if(_<=0||v<1e-9)return;const E=g.divideScalar(v),C=p?KS(c,m,E):sy,y=(v-a.lengths[e])/n,U=(r.hold*Math.tanh(r.stiffness*_/r.hold)+r.spring*_+r.bandDamping*Math.max(0,y))*n*n-a.impulses[e];if(U<=0)return;const B=Math.min(_/(d+C),U);a.impulses[e]+=B,d&&u.addScaledVector(E,B*d),p?QS(c,m,E.multiplyScalar(-B)):x.addScaledVector(E,-B*C)},SD=(a,e,n)=>{const r=mn.g.copy(e.local).applyQuaternion(a.quaternion),o=mn.a.copy(n).sub(a.position).sub(r),c=o.length();if(c<1e-9)return;const u=o.divideScalar(c),d=c/KS(a,r,u);QS(a,r,u.multiplyScalar(d))},$p=(a,e,n)=>{const{nodes:r,previous:o,velocities:c,body:u,anchor:d}=a;r[0].copy(d);for(let m=1;m<=Hn;m++)r[m].copy(r[m-1]),n?r[m].x+=a.rest:r[m].y-=a.rest;u.quaternion.identity(),n&&u.quaternion.setFromAxisAngle(new oe(0,0,1),Math.PI/2),u.hang.set(0,e.hangY,0);const p=mn.a.copy(u.hang).applyQuaternion(u.quaternion);u.position.copy(r[Hn]).sub(p),u.previous.copy(u.position),u.previousQuaternion.copy(u.quaternion),u.velocity.set(0,0,0),u.angular.set(0,0,0);for(let m=0;m<=Hn;m++)o[m].copy(r[m]),c[m].set(0,0,0);a.lengths.fill(a.rest),a.turn=0,a.twist=0,a.twistRaw=0,a.calm=0},MD=(a,e,n)=>{a.rest=n/Hn;const{width:r,height:o}=e,c=a.body,u=Tf+Ci*2;c.mass=1,c.inverseInertia.set(12/(o*o+u*u),12/(r*r+u*u),12/(r*r+o*o)),c.hang.set(0,e.hangY,0)},ED=(a,e,n,r)=>{const o=Math.max(1,Math.ceil(e/nD-1e-6)),c=e/o,{nodes:u,previous:d,velocities:p,body:m}=a,x=n.breeze*(Math.sin(r*.53)*.7+Math.sin(r*1.31+1.7)*.3)*3,g=n.breeze*Math.sin(r*.37+.6)*2,v=a.grab,_=mn.pin,E=Math.exp(-2*c),C=Math.exp(-n.linearDrag*c),y=Math.exp(-n.angularDrag*c);for(let U=0;U<o;U++){for(let H=1;H<Hn;H++){const V=p[H];V.y-=n.gravity*c,V.x+=x*c,V.z+=g*c,d[H].copy(u[H]),u[H].addScaledVector(V,c)}m.previous.copy(m.position),m.previousQuaternion.copy(m.quaternion);const B=m.quaternion;if(v){const H=mn.q.copy(v.rotation).multiply(mn.r.copy(B).invert());H.w<0&&H.set(-H.x,-H.y,-H.z,-H.w);const V=mn.a.set(H.x,H.y,H.z).multiplyScalar(2*n.grip);V.addScaledVector(m.angular,-6),m.angular.addScaledVector(D0(m,V,mn.b),c)}const R=mn.a.set(0,1,0).applyQuaternion(B),O=mn.b.set(-R.x*R.z,-R.y*R.z,1-R.z*R.z);if(O.lengthSq()>.001){const H=mn.d.set(0,0,1).applyQuaternion(B),V=Math.atan2(mn.e.crossVectors(O,H).dot(R),O.dot(H));let ee=V-a.twistRaw;ee>Math.PI?ee-=Math.PI*2:ee<-Math.PI&&(ee+=Math.PI*2),a.twist+=ee,a.twistRaw=V}if(!v){const H=m.angular.dot(R);m.angular.addScaledVector(R,(n.twist*(a.turn-a.twist)-n.twistDamping*H)*c)}m.velocity.y-=n.gravity*c,m.velocity.x+=x*.35*c,m.velocity.z+=g*.35*c,m.position.addScaledVector(m.velocity,c),ZS(m.quaternion,mn.f.copy(m.angular).multiplyScalar(c)),a.impulses.fill(0),v&&_.lerpVectors(v.from,v.target,(U+1)/o);for(let H=0;H<iD;H++){for(let V=0;V<Hn;V++)yD(a,V,c,n);v&&SD(m,v,_)}for(let H=1;H<Hn;H++){const V=p[H].subVectors(u[H],d[H]).divideScalar(c).multiplyScalar(E);V.multiplyScalar(1/(1+n.nodeAir*V.length()*c))}m.velocity.subVectors(m.position,m.previous).divideScalar(c);const P=mn.q.copy(m.previousQuaternion).invert().premultiply(m.quaternion);m.angular.set(P.x,P.y,P.z).multiplyScalar(2/c*(P.w<0?-1:1));const F=mn.a.set(0,0,1).applyQuaternion(m.quaternion),w=m.velocity.dot(F),T=mn.b.copy(m.velocity).addScaledVector(F,-w);T.multiplyScalar(1/(1+n.air*T.length()*c)),m.velocity.copy(T).addScaledVector(F,w/(1+n.broadside*Math.abs(w)*c)).multiplyScalar(C),m.angular.multiplyScalar(y/(1+n.spinAir*m.angular.length()*c)),m.velocity.lengthSq()>3600&&m.velocity.setLength(60),m.angular.lengthSq()>1600&&m.angular.setLength(40),u[Hn].copy(m.hang).applyQuaternion(m.quaternion).add(m.position);for(let H=0;H<Hn;H++)a.lengths[H]=u[H].distanceTo(u[H+1])}v&&v.from.copy(v.target);let M=m.velocity.lengthSq()+m.angular.lengthSq()*.3;for(let U=1;U<Hn;U++)M+=p[U].lengthSq()*.05;a.calm=M<2e-4?a.calm+e:0},bD=({frontImage:a,backImage:e,imageFit:n="cover",cardColor:r="#ffffff",orientation:o="portrait",finish:c="glossy",cornerRadius:u=.3,size:d=.6,anchor:p="center",strapLength:m=.5,strapImage:x,strapColor:g="#111111",strapWidth:v=.65,metal:_="silver",gravity:E=1,damping:C=.5,elasticity:y=.5,breeze:M=.5,interactive:U=!0,intro:B=!0,className:R="",style:O})=>{const P=zt.useRef(null),F=zt.useRef(null),w=zt.useRef(null);return F.current={frontImage:a,backImage:e,imageFit:n==="contain"?"contain":"cover",cardColor:r,orientation:o==="landscape"?"landscape":"portrait",finish:c,cornerRadius:u,size:d,anchor:p,strapLength:m,strapImage:x,strapColor:g,strapWidth:v,metal:_,gravity:E,damping:C,elasticity:y,breeze:M,interactive:U,intro:B},zt.useEffect(()=>{w.current?.()}),zt.useEffect(()=>{const T=P.current;if(!T)return;let H;try{H=new eD({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return}H.setClearColor(0,0),H.outputColorSpace=_i,H.toneMapping=h0,H.toneMappingExposure=1;const V=H.domElement;V.className="lanyard-canvas",V.setAttribute("aria-hidden","true"),T.appendChild(V);const ee=Math.min(8,H.capabilities.getMaxAnisotropy()),I=new _S,Q=pD(H);I.environment=Q.texture;const ae=new ea(oy,1,.1,200),W=new U1(16777215,1.6);W.position.set(-2.5,4,6);const $=new U1(16777215,.35);$.position.set(3,-1,4),I.add(W,$);const D=new Map,le={front:null,back:null,strap:null},me=document.createElement("canvas"),Te=document.createElement("canvas"),rt=document.createElement("canvas"),je=Jp(me,ee),G=Jp(Te,ee),J=Jp(rt,ee);J.wrapS=Ua,J.wrapT=Kr;const Ke=mD(),ie=gD(),ne={foilStrength:{value:0},foilAspect:{value:1.4},foilKey:{value:new oe},foilFill:{value:new oe},foilTop:{value:new oe}},xe=Ee=>{Object.assign(Ee.uniforms,ne),Ee.vertexShader=Ee.vertexShader.replace("#include <common>",`#include <common>
${oD}`).replace("#include <project_vertex>",`#include <project_vertex>
${lD}`),Ee.fragmentShader=Ee.fragmentShader.replace("#include <common>",`#include <common>
${cD}`).replace("#include <opaque_fragment>",`${uD}
#include <opaque_fragment>`)},Ue=new $u({map:je,normalMap:Ke,normalScale:new gt(.06,.06)}),ye=new $u({map:G,normalMap:Ke,normalScale:new gt(.06,.06)});Ue.onBeforeCompile=xe,ye.onBeforeCompile=xe;const we=new $u,_t=new FS({metalness:1}),Ae=new $u({map:J,normalMap:ie,normalScale:new gt(.7,.7),roughness:.68,sheen:1,sheenRoughness:.42,sheenColor:new Qt(.32,.32,.34),side:da}),Fe=new Uo,ue=new ri(void 0,we),Oe=new ri(void 0,Ue),He=new ri(void 0,ye),vt=new ri(new bf(WS,aD,18,72),_t);vt.rotation.y=Math.PI/2-.7,Fe.add(ue,Oe,He,vt),I.add(Fe);const mt=dD(or),Je=new ri(mt,Ae);Je.frustumCulled=!1,I.add(Je);const Tt=new Uo,j=new ri(hy(Kp),_t);j.position.y=rf+jl/2-.004;const nt=new ri(new bf(rf,.0105,14,40),_t);Tt.add(j,nt),I.add(Tt);const ze=_D(),L=[],b=new oe,q=new oe,z=new AS(L,!1,"centripetal"),_e={width:1,height:1};let Ce=fy("portrait",.3),te={},Z=Kp,K=2,ce=0,Be=performance.now(),Le=0,Ie=!0,Qe=!0,st=!1,dt=!1,X=null,Ge=0;const Me=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,qe=()=>{const Ee=F.current,ht=Qp(Ee.cardColor,[1,1,1]),lt=ly,A=Math.round(ly*Ce.height/Ce.width);(me.width!==lt||me.height!==A)&&(me.width=lt,me.height=A,Te.width=lt,Te.height=A,je.dispose(),G.dispose()),dy(me,le.front,ht,Ee.imageFit),dy(Te,le.back||le.front,ht,Ee.imageFit),je.needsUpdate=!0,G.needsUpdate=!0,Tn()},et=()=>{const Ee=F.current;K=xD(rt,le.strap,Qp(Ee.strapColor,[.07,.07,.07])),ie.repeat.set(2,2*K),J.dispose(),J.needsUpdate=!0,Tn()},Ye=()=>{const Ee=F.current,ht=_e.width/_e.height;let lt=Ce.height/Xr(Ee.size,.15,.9);const A=Ce.width/.72;lt*ht<A&&(lt=A/ht);const k=lt*ht;ae.aspect=ht,ae.position.set(0,0,lt/2/Math.tan(oy*Math.PI/360)),ae.lookAt(0,0,0),ae.updateProjectionMatrix(),ae.updateMatrixWorld(),ne.foilKey.value.set(-2.5,4,6).normalize().transformDirection(ae.matrixWorldInverse),ne.foilFill.value.set(3,-1,4).normalize().transformDirection(ae.matrixWorldInverse),ne.foilTop.value.set(.5,4.5,8).normalize().transformDirection(ae.matrixWorldInverse);const re=((tD[Ee.anchor]??.5)-.5)*k,fe=lt/2+.2,We=lt/2-lt*Wl(.12,.42,Xr(Ee.strapLength,0,1))+(Ce.hangY-Ce.height/2);ze.anchor.set(re,fe,0),MD(ze,Ce,fe-We),ze.nodes[0].copy(ze.anchor),ze.previous[0].copy(ze.anchor)},St=()=>{const Ee=F.current,ht=`${Ee.orientation}|${Ee.cornerRadius}`;if(ht!==te.layoutKey){Ce=fy(Ee.orientation,Ee.cornerRadius);const We=hD(Ce);ue.geometry.dispose(),Oe.geometry.dispose(),He.geometry.dispose(),ue.geometry=We.body,Oe.geometry=We.face,He.geometry=We.face.clone(),Oe.position.z=Tf/2+Ci+6e-4,He.rotation.y=Math.PI,He.position.z=-.0166,vt.position.set(0,Ce.ringY,0),te.framingKey=""}const lt=`${ht}|${Ee.size}|${Ee.anchor}|${Ee.strapLength}|${_e.width}|${_e.height}`;lt!==te.framingKey&&(Ye(),st?ht!==te.layoutKey&&$p(ze,Ce,!1):($p(ze,Ce,Ee.intro&&!Me),st=!0));const A=`${Ee.frontImage}|${Ee.backImage}|${Ee.strapImage}`;if(A!==te.imageKey){const We=++Ge;Promise.all([jp(D,Ee.frontImage),jp(D,Ee.backImage),jp(D,Ee.strapImage)]).then(([ot,Ze,De])=>{!Qe||We!==Ge||(le.front=ot,le.back=Ze,le.strap=De,qe(),et())})}const k=`${ht}|${Ee.cardColor}|${Ee.imageFit}`;k!==te.faceKey&&qe(),Ee.strapColor!==te.strapColor&&et();const re=cy[Ee.finish]||cy.glossy,fe=Qp(Ee.cardColor,[1,1,1]);[Ue,ye].forEach(We=>{We.roughness=re.roughness,We.metalness=re.metalness,We.clearcoat=re.clearcoat,We.clearcoatRoughness=re.clearcoatRoughness,We.anisotropy=re.anisotropy}),ne.foilStrength.value=re.foil,ne.foilAspect.value=Ce.height/Ce.width,we.color.setRGB(fe[0]*.92,fe[1]*.92,fe[2]*.92,_i),we.roughness=Math.min(re.roughness,.35),we.metalness=re.metalness,we.clearcoat=1,we.clearcoatRoughness=.08;const he=uy[Ee.metal]||uy.silver;_t.color.set(he.color),_t.roughness=he.roughness,Z=Kp*Xr(Ee.strapWidth,.4,2),Z!==te.strapScale&&(j.geometry.dispose(),j.geometry=hy(Z)),V.style.touchAction=Ee.interactive?"pan-y":"auto",te={layoutKey:ht,framingKey:lt,imageKey:A,faceKey:k,strapColor:Ee.strapColor,strapScale:Z},Tn()},ft=Array.from({length:or},()=>new oe),Pt=Array.from({length:or},()=>new oe),Ft=rD.map(Ee=>[Math.cos(Ee),Math.sin(Ee)]),xn={tangent:new oe,toCamera:new oe,basis:new En,up:new oe,across:new oe,facing:new oe,end:new oe},gn=()=>{const Ee=ze.nodes[Hn],ht=rf+jl+.05;let lt=Hn-1;for(;lt>0&&ze.nodes[lt].distanceTo(Ee)<ht*1.1;)lt--;const A=xn.up.subVectors(ze.nodes[lt],Ee);A.lengthSq()<1e-8&&A.set(0,1,0).applyQuaternion(ze.body.quaternion),A.normalize(),b.copy(Ee).addScaledVector(A,ht),q.copy(Ee).addScaledVector(A,rf+jl*.35),L.length=0;for(let bt=0;bt<=lt;bt++)L.push(ze.nodes[bt]);L.push(b,q),z.updateArcLengths();for(let bt=0;bt<or;bt++)z.getPointAt(bt/(or-1),ft[bt]);const k=z.getLength(),re=1-b.distanceTo(q)/Math.max(k,.001),fe=mt.getAttribute("position"),he=mt.getAttribute("normal"),We=mt.getAttribute("uv"),ot=vf.length,Ze=ze.rest*Hn,De=Ze/(Z*K),it=Z/Math.pow(Math.max(1,k/Math.max(Ze,.001)),.35),{tangent:pt,toCamera:yt,across:$e,facing:Nt}=xn;for(let bt=0;bt<or;bt++){pt.subVectors(ft[Math.min(or-1,bt+1)],ft[Math.max(0,bt-1)]),pt.lengthSq()<1e-12&&pt.set(0,-1,0),pt.normalize(),yt.subVectors(ae.position,ft[bt]).normalize();const Dt=Pt[bt].crossVectors(yt,pt);Dt.lengthSq()<1e-10&&Dt.copy(bt>0?Pt[bt-1]:mn.a.set(1,0,0)),Dt.normalize(),bt>0&&Dt.dot(Pt[bt-1])<0&&Dt.negate();const Ut=-ze.twist*Math.pow(Math.min(1,bt/(or-1)/re),1.3);Nt.crossVectors(pt,Dt),$e.copy(Dt).multiplyScalar(Math.cos(Ut)).addScaledVector(Nt,Math.sin(Ut)),Nt.crossVectors(pt,$e);const on=ft[bt],ut=(1-bt/(or-1))*De;for(let Wt=0;Wt<ot;Wt++){const kt=bt*ot+Wt,Vn=(vf[Wt]-.5)*it,[Jn,Mi]=Ft[Wt];fe.setXYZ(kt,on.x+$e.x*Vn,on.y+$e.y*Vn,on.z+$e.z*Vn),he.setXYZ(kt,Nt.x*Jn+$e.x*Mi,Nt.y*Jn+$e.y*Mi,Nt.z*Jn+$e.z*Mi),We.setXY(kt,vf[Wt],ut)}}xn.end.copy($e),fe.needsUpdate=!0,he.needsUpdate=!0,We.needsUpdate=!0,$e.copy(xn.end).addScaledVector(A,-xn.end.dot(A)).normalize(),Nt.crossVectors($e,A).normalize(),xn.basis.makeBasis($e,A,Nt),Tt.quaternion.setFromRotationMatrix(xn.basis),Tt.position.copy(Ee)},yi=()=>{Fe.position.copy(ze.body.position),Fe.quaternion.copy(ze.body.quaternion),gn(),H.render(I,ae)},Si=()=>{const Ee=F.current,ht=40*Xr(Ee.gravity,0,3),lt=Math.max(ht,20),A=Xr(Ee.elasticity,0,1),k=Xr(Ee.damping,0,1);return{gravity:ht,hold:lt*Wl(2.2,5.5,A),stiffness:lt*10*Hn,spring:lt*Wl(.1,.4,A)*Hn,bandDamping:lt*Wl(.3,.08,A)*Hn,linearDrag:.25*Math.pow(16,k),angularDrag:.5*Math.pow(12,k),air:.15,broadside:.5,spinAir:.03,nodeDrag:2,nodeAir:.2,twist:30,twistDamping:3,grip:40,gripDamping:6,breeze:Me?0:Xr(Ee.breeze,0,1)}},Wn=Ee=>{if(ce=0,!Qe)return;const ht=Math.min(1/30,Math.max(1/240,(Ee-Be)/1e3));Be=Ee,Le+=ht;const lt=Si();ED(ze,ht,lt,Le);const A=ze.body;Number.isFinite(A.position.x+A.position.y+A.position.z+A.quaternion.w)||(ze.grab=null,$p(ze,Ce,!1)),yi();const k=ze.calm>1.2&&!ze.grab&&lt.breeze===0;Ie&&!k&&(ce=requestAnimationFrame(Wn))},Tn=()=>{ce||!Ie||!Qe||(ze.calm=0,Be=performance.now(),ce=requestAnimationFrame(Wn))},Gn=new n3,Yn=new gt,Ht=Ee=>{const ht=V.getBoundingClientRect();Yn.set((Ee.clientX-ht.left)/ht.width*2-1,-((Ee.clientY-ht.top)/ht.height)*2+1),Gn.setFromCamera(Yn,ae)},Et=()=>(Fe.updateMatrixWorld(),Gn.intersectObjects([ue,Oe,He],!1)[0]||null),Ot=Ee=>{V.style.cursor!==Ee&&(V.style.cursor=Ee)},An=Ee=>{const ht=ze.body,lt=mn.a.set(0,1,0).applyQuaternion(ht.quaternion);let A=ze.turn>0?-1:1;if(ze.turn===0){const k=mn.c.subVectors(Ee,ae.position).normalize();A=mn.b.subVectors(Ee,ht.position).cross(k).dot(lt)<0?-1:1}ze.turn=ze.turn===0?Math.PI*A:0,ht.angular.addScaledVector(lt,sD*A)},Ne=Ee=>{if(!F.current.interactive||Ee.button>0)return;Ht(Ee);const ht=Et();ht&&(ze.grab={local:ht.point.clone().sub(ze.body.position).applyQuaternion(ze.body.quaternion.clone().invert()),rotation:ze.body.quaternion.clone(),reach:ht.distance,from:ht.point.clone(),target:ht.point.clone()},X={x:Ee.clientX,y:Ee.clientY,time:performance.now(),point:ht.point.clone()},V.setPointerCapture?.(Ee.pointerId),Ot("grabbing"),Ee.preventDefault(),Tn())},Pe=Ee=>{if(F.current.interactive){if(Ht(Ee),ze.grab){X&&Math.hypot(Ee.clientX-X.x,Ee.clientY-X.y)>6&&(X=null),Gn.ray.at(ze.grab.reach,ze.grab.target),Tn();return}Ee.pointerType!=="touch"&&(dt=!!Et(),Ot(dt?"grab":""))}},Ve=Ee=>{ze.grab&&(ze.grab=null,X&&Ee.type==="pointerup"&&performance.now()-X.time<450&&An(X.point),X=null,V.releasePointerCapture?.(Ee.pointerId),Ot(dt&&Ee.pointerType!=="touch"?"grab":""),Tn())},tt=Ee=>{!F.current.interactive||Ee.touches.length!==1||(Ht(Ee.touches[0]),Et()&&Ee.preventDefault())};V.addEventListener("pointerdown",Ne),V.addEventListener("pointermove",Pe),V.addEventListener("pointerup",Ve),V.addEventListener("pointercancel",Ve),V.addEventListener("lostpointercapture",Ve),V.addEventListener("touchstart",tt,{passive:!1});const ct=()=>{_e.width=Math.max(1,T.clientWidth),_e.height=Math.max(1,T.clientHeight),H.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),H.setSize(_e.width,_e.height,!1),St(),yi()},at=new ResizeObserver(ct);at.observe(T);const Ct=new IntersectionObserver(([Ee])=>{Ie=Ee.isIntersecting,Ie&&Tn()});Ct.observe(T);const wt=()=>{document.hidden||Tn()};return document.addEventListener("visibilitychange",wt),w.current=St,ct(),()=>{Qe=!1,cancelAnimationFrame(ce),w.current=null,at.disconnect(),Ct.disconnect(),document.removeEventListener("visibilitychange",wt),V.removeEventListener("pointerdown",Ne),V.removeEventListener("pointermove",Pe),V.removeEventListener("pointerup",Ve),V.removeEventListener("pointercancel",Ve),V.removeEventListener("lostpointercapture",Ve),V.removeEventListener("touchstart",tt),[ue,Oe,He,vt,j,nt,Je].forEach(Ee=>Ee.geometry?.dispose()),[Ue,ye,we,_t,Ae].forEach(Ee=>Ee.dispose()),[je,G,J,Ke,ie].forEach(Ee=>Ee.dispose()),Q.dispose(),H.dispose(),V.parentNode&&V.parentNode.removeChild(V)}},[]),ve.jsx("div",{ref:P,className:`lanyard ${R}`.trim(),style:O})},em={fontSize:150,fontWeight:400,letterSpacing:-.045,color:"currentColor",accentColor:"var(--accent-strong)",align:"left",reach:86,softness:.72,dashLength:4,dashGap:3,strokeWidth:1.25,reveal:"letter",specks:0,selection:!1,labels:!1,draggable:!1,bounce:.16,sweep:!0,speed:.32,clickKick:!1,intro:"none"};function TD(){return u0(4),ve.jsxs("section",{className:"hero shell","aria-labelledby":"hero-title",children:[ve.jsxs("div",{className:"hero-copy",children:[ve.jsxs("p",{className:"eyebrow hero-eyebrow",children:[ve.jsx("span",{className:"status-dot"}),hi.role]}),ve.jsxs("h1",{id:"hero-title",className:"hero-title",children:[ve.jsx("span",{className:"visually-hidden",children:"Mathématiques claires, code moderne, progression concrète."}),ve.jsxs("span",{className:"hero-title-art","aria-hidden":"true",children:[ve.jsx("span",{className:"hero-title-line",children:ve.jsx(hp,{text:"Mathématiques claires,",...em})}),ve.jsx("span",{className:"hero-title-line hero-title-line-em",children:ve.jsx(hp,{text:"code moderne,",...em,letterSpacing:-.025})}),ve.jsx("span",{className:"hero-title-line",children:ve.jsx(hp,{text:"progression concrète.",...em})})]})]}),ve.jsx("p",{className:"hero-intro",children:hi.intro}),ve.jsxs("div",{className:"hero-actions",children:[ve.jsxs(cf,{className:"button button-primary",href:"#projects",children:[ve.jsx("span",{children:"Voir les applications"}),ve.jsx("span",{"aria-hidden":"true",children:"↗"})]}),ve.jsxs(cf,{className:"button button-quiet",href:"#contact",children:[ve.jsx("span",{children:"Me contacter"}),ve.jsx("span",{"aria-hidden":"true",children:"→"})]}),ve.jsxs(cf,{className:"button button-quiet hero-cv",href:hi.cv,target:"_blank",rel:"noreferrer",children:[ve.jsx("span",{children:"Consulter le CV"}),ve.jsx("span",{"aria-hidden":"true",children:"↗"})]})]}),ve.jsxs("div",{className:"hero-meta",children:[ve.jsx("span",{children:"Mathématiques appliquées & web"}),ve.jsx("span",{className:"meta-divider","aria-hidden":"true"}),ve.jsx("span",{children:"Approche pratique et progressive"})]})]}),ve.jsx("div",{style:{width:"100%",height:"600px"},children:ve.jsx(bD,{frontImage:"/portrait-1.webp",backImage:"/1760789324338.jpg",strapImage:"/band.png",imageFit:"cover",cardColor:"#ffffff",orientation:"portrait",finish:"glossy",cornerRadius:.3,size:.6,anchor:"center",strapLength:.5,strapColor:"#111111",strapWidth:.65,metal:"silver",gravity:1,damping:.5,elasticity:.5,breeze:.5,interactive:!0,intro:!0})}),ve.jsxs("a",{className:"scroll-cue",href:"#about",children:[ve.jsx("span",{className:"scroll-line"}),"Défiler"]})]})}function Of({eyebrow:a,title:e,description:n}){return ve.jsxs("div",{className:"section-heading",children:[ve.jsx("p",{className:"eyebrow reveal",children:a}),ve.jsx("h2",{className:"reveal",style:{"--reveal-delay":"70ms"},children:e}),n&&ve.jsx("p",{className:"section-description reveal",style:{"--reveal-delay":"140ms"},children:n})]})}function AD({group:a,index:e}){const n=u0(1.1);return ve.jsxs("article",{ref:n.ref,onPointerMove:n.onPointerMove,onPointerLeave:n.onPointerLeave,style:{"--reveal-delay":`${e%6*90}ms`},className:`skill-group glass-card reveal skill-group-${e+1}`,children:[ve.jsxs("span",{className:"skill-number",children:["0",e+1]}),ve.jsx("h3",{children:a.title}),ve.jsx("ul",{children:a.items.map(r=>ve.jsx("li",{children:r},r))})]})}function wD(){return ve.jsxs("section",{id:"about",className:"section shell",children:[ve.jsxs("div",{className:"about-grid",children:[ve.jsx(Of,{eyebrow:"À propos",title:"Comprendre les idées. Construire avec méthode."}),ve.jsxs("div",{className:"about-copy",children:[ve.jsx("p",{className:"reveal",children:"Enseignant en mathématiques, mentor et développeur, je relie la rigueur du raisonnement à la création d’outils utiles. Mon travail s’adresse aux étudiants et aux autodidactes qui veulent progresser avec des bases solides."}),ve.jsx("p",{className:"reveal",style:{"--reveal-delay":"90ms"},children:"Des notions d’algèbre à la réalisation d’applications web, je privilégie une démarche claire, progressive et ancrée dans la pratique."}),ve.jsxs("a",{className:"text-link reveal",style:{"--reveal-delay":"180ms"},href:"#courses",children:["Découvrir les cours ",ve.jsx("span",{"aria-hidden":"true",children:"→"})]})]})]}),ve.jsxs("div",{className:"skills-area",children:[ve.jsxs("div",{className:"skills-heading reveal",children:[ve.jsx("p",{className:"eyebrow",children:"Domaines & outils"}),ve.jsx("p",{children:"Les sujets et technologies présentés sur le site."})]}),ve.jsx("div",{className:"skill-grid",children:eb.map((a,e)=>ve.jsx(AD,{group:a,index:e},a.title))})]})]})}const py=[{name:"Search Spot 3 « AZiZA »",url:"https://chokribettaibi.github.io/Search_Spot3/",kind:"Application"},{name:"Contrôle Caisse Aziza",url:"https://chokribettaibi.github.io/ControleCaissiereAzizaa/",kind:"Application"},{name:"Exhaustif Aziza",url:"https://chokribettaibi.github.io/exxhaustif-a-t-22.08.24/",kind:"Application"},{name:"Détails Réparation",url:"https://chokribettaibi.github.io/D-tails_R-paration/",kind:"Application"},{name:"Small Application Stock",url:"https://chokribettaibi.github.io/Small_Application_Stock/",kind:"Application"},{name:"AppPotentatPro",url:"https://chokribettaibi.github.io/AppPotentatPro/",kind:"Application"},{name:"Model Phone",url:"https://chokribettaibi.github.io/Small_Application_Stock01/",kind:"Application"},{name:"DLC Application",url:"https://chokribettaibi.github.io/AppQRCodeBarreScanner/",kind:"Application"},{name:"Application linéaire",url:"https://chokribettaibi.github.io/AlgebreLinaier/",kind:"Mathématiques"}],RD=[{title:"Algèbre linéaire pour l’IA",description:"Fondamentaux, matrices, applications linéaires, espaces vectoriels, arithmétique et géométrie analytique.",links:[["Voir le cours","/page/algebre.html"],["Application linéaire","https://chokribettaibi.github.io/AlgebreLinaier/"],["Arithmétique","/src/mathSecondaire/arethmetique/index.html"],["Géométrie analytique","/src/mathSecondaire/index.html"]]},{title:"Algorithmique & structures de données",description:"Complexité, tri, raisonnement, visualisation géométrique et exercices de résolution de problèmes.",links:[["Géométrie analytique","/src/mathSecondaire/index.html"],["Exercices","/src/mathSecondaire/ecercice/index.html"]]},{title:"Frontend & outils web",description:"HTML, CSS, JavaScript, React, TypeScript, MySQL et Linux dans une logique de projet propre et maintenable.",links:[["HTML","/src/cours/htmlCour/html.html"],["CSS","/src/cours/css.html"],["JavaScript","/src/cours/javascriptCour/index.html"],["React","/src/cours/react/html.html"],["TypeScript","/src/cours/typeScript.html"],["Linux","/src/cours/linux/index.html"],["Docker","/src/cours/coursDocker/index.html"]]}],CD=[{title:"Animations Canvas",links:[["Animation 1","/src/canvas/canvasOne.html"],["Animation 2","/src/canvas/canvasTwo.html"],["Animation 3","/src/canvas/canvasThree.html"],["Animation 5","/src/canvas/canvasFive/index.html"],["Animation 6","/src/canvas/canvasSix.html"],["Cours Canvas","/src/canvas/indexcann.html"]]},{title:"Creative coding",links:[["Flow fields","/src/crativeCodingDeepDiveFlowFields/index.html"],["Liquid interaction","/src/liquidDropLogin/idex.html"],["Text animation","/src/textAimationJs/index.html"]]},{title:"Galeries",links:[["Gallery One","/src/gallery/gallOne.html"],["Gallery Two","/src/gallery/gallTow.html"],["Gallery Three","/src/gallery/gallThree.html"]]}],DD=a=>a.startsWith("http")?a:`${hi.domain}${a}`;function ND(){return ve.jsx("section",{id:"courses",className:"section section-tinted",children:ve.jsxs("div",{className:"shell",children:[ve.jsx(Of,{eyebrow:"Cours & ateliers",title:"Des ressources pour progresser, étape par étape.",description:"Cours et supports regroupés autour des mathématiques, de la logique et du développement web."}),ve.jsx("div",{className:"course-grid",children:RD.map((a,e)=>ve.jsxs("article",{className:"course-card reveal",style:{"--reveal-delay":`${e*100}ms`},children:[ve.jsxs("div",{className:"course-card-top",children:[ve.jsxs("span",{children:["0",e+1]}),ve.jsx("span",{className:"course-arrow","aria-hidden":"true",children:"↗"})]}),ve.jsx("h3",{children:a.title}),ve.jsx("p",{children:a.description}),ve.jsx("div",{className:"resource-links",children:a.links.map(([n,r])=>ve.jsxs("a",{href:DD(r),target:"_blank",rel:"noreferrer",children:[n,ve.jsx("span",{"aria-hidden":"true",children:"↗"})]},n))})]},a.title))})]})})}function LD({project:a,index:e}){const n=u0(1.6);return ve.jsxs("article",{ref:n.ref,onPointerMove:n.onPointerMove,onPointerLeave:n.onPointerLeave,style:{"--reveal-delay":`${e%3*100}ms`},className:"project-card reveal",children:[ve.jsxs("div",{className:"project-card__top",children:[ve.jsx("span",{className:"project-index",children:String(e+1).padStart(2,"0")}),ve.jsx("span",{className:"project-kind",children:a.kind})]}),ve.jsx("h3",{children:a.name}),ve.jsxs("a",{className:"text-link",href:a.url,target:"_blank",rel:"noreferrer",children:["Voir la démonstration ",ve.jsx("span",{"aria-hidden":"true",children:"↗"})]})]})}function UD(){return ve.jsxs("section",{id:"projects",className:"section shell projects-section",children:[ve.jsxs("div",{className:"projects-heading",children:[ve.jsx(Of,{eyebrow:"Applications",title:"Des projets concrets, orientés usage.",description:"Applications et outils publiés, issus des projets présentés sur le site."}),ve.jsxs("span",{className:"project-count reveal",style:{"--reveal-delay":"180ms"},children:[String(py.length).padStart(2,"0")," ",ve.jsx("small",{children:"projets"})]})]}),ve.jsx("div",{className:"project-grid",children:py.map((a,e)=>ve.jsx(LD,{project:a,index:e},a.name))})]})}const OD="web-threads-container",PD="web-threads-canvas",Jl=24,Yl=6,$l=3,jS=1.6,JS=.05,my=1.25,FD=Math.PI*2,ID=`#version 300 es
in vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`,zD=`#version 300 es
precision highp float;
uniform vec2 uResolution;
uniform float uPhase;
uniform float uClock;
uniform int uCount;
uniform float uFrequency;
uniform float uSpread;
uniform float uTaper;
uniform float uPosition;
uniform float uPinch;
uniform float uNodes;
uniform vec2 uAngle;
uniform float uGlow;
uniform float uFalloff;
uniform float uThickness;
uniform float uBrightness;
uniform float uOpacity;
uniform float uMirror;
uniform float uShimmer;
uniform float uDepth;
uniform float uPulses;
uniform float uFade;
uniform float uGrain;
uniform vec3 uColors[${Yl}];
uniform int uColorCount;
uniform vec3 uCore;
uniform vec3 uBackground;
uniform float uOpaque;
uniform float uLight;
uniform vec4 uIntro;
uniform float uFocus[${Jl}];
uniform vec2 uFocusState;
uniform vec4 uSurges[${$l}];
out vec4 outColor;

const float PI = 3.14159265;
const float TAU = 6.28318530;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float easeInOut(float t) {
  return t < 0.5 ? 4.0 * t * t * t : 1.0 - pow(-2.0 * t + 2.0, 3.0) * 0.5;
}

vec3 palette(float t) {
  if (uColorCount <= 1) return uColors[0];
  float scaled = clamp(t, 0.0, 1.0) * float(uColorCount - 1);
  int index = int(min(floor(scaled), float(uColorCount - 2)));
  return mix(uColors[index], uColors[index + 1], scaled - float(index));
}

vec2 envelope(float x) {
  float dx = x - uPinch;
  if (uNodes <= 1.0) return vec2(uSpread * abs(dx), uSpread * sign(dx));
  float k = PI * uNodes;
  float c = cos(k * (dx + 0.5));
  return vec2(uSpread * 0.5 * abs(c), -uSpread * 0.5 * k * sin(k * (dx + 0.5)) * sign(c));
}

vec2 space(vec2 p, float aspect) {
  vec2 q = (p - 0.5) * vec2(aspect, 1.0);
  q = vec2(q.x * uAngle.x + q.y * uAngle.y, -q.x * uAngle.y + q.y * uAngle.x);
  return vec2(q.x / aspect + 0.5, q.y + 0.5);
}

float hubAt(float x) {
  if (uNodes <= 1.0) return uPinch;
  float spacing = 1.0 / uNodes;
  return uPinch - 0.5 + (floor((x - uPinch + 0.5) / spacing) + 0.5) * spacing;
}

vec3 thread(float x, float i, float n) {
  float lane = uNodes <= 1.0 ? x - uPinch : (x - uPinch + 0.5) * uNodes - 0.5;
  float side = uMirror > 0.5 ? (mod(floor(lane), 2.0) < 0.5 ? -1.0 : 1.0) : 1.0;
  vec2 env = envelope(x);
  float amp = 1.0 + i * uTaper;
  float shimmer = uShimmer > 0.5 ? sin(uClock * 1.7 + i * 1.3) * 0.35 : 0.0;
  float angle = x * uFrequency + (uPhase + i * TAU / max(n, 1.0)) * side + shimmer;
  float wave = sin(angle);
  float y = uPosition - env.x * amp * wave;
  float slope = -(env.y * amp * wave + env.x * amp * cos(angle) * uFrequency);
  return vec3(y, slope, angle);
}

void main() {
  vec2 p = gl_FragCoord.xy / uResolution;
  float aspect = uResolution.x / uResolution.y;
  vec2 s = space(p, aspect);
  float x = s.x;
  float y = s.y;
  float n = float(uCount);
  float pixel = 1.0 / uResolution.y;
  float hub = hubAt(x);
  float presence = uFocusState.x;
  float settle = uFocusState.y;

  vec3 color = vec3(0.0);
  float energy = 0.0;
  float ink = 0.0;
  vec3 inkColor = vec3(0.0);

  for (int idx = 0; idx < ${Jl}; idx++) {
    if (idx >= uCount) break;
    float i = float(idx);
    float ci = n > 1.0 ? i / (n - 1.0) : 0.0;

    float head = 2.0;
    float bead = 0.0;
    float born = 1.0;
    if (uIntro.w > 0.5) {
      float progress = clamp((uIntro.x - i * uIntro.y) / uIntro.z, 0.0, 1.0);
      head = mix(-0.06, 1.06, easeInOut(progress));
      bead = sin(PI * progress);
      born = progress > 0.0 ? smoothstep(-0.05, 0.03, head) : 0.0;
    }
    if (born <= 0.0) continue;

    bool tip = x > head;
    vec3 lead = bead > 0.0 || tip ? thread(head, i, n) : vec3(0.0);
    vec3 t = tip ? lead : thread(x, i, n);

    float focus = uFocus[idx];
    float spot = tip ? head : x;
    float twist = uDepth * smoothstep(0.0, 0.07, abs(spot - hubAt(spot)));
    float depth = 0.5 + 0.5 * cos(t.z);
    float front = mix(1.0, 0.3 + 0.7 * depth, twist);
    float width = uThickness * mix(1.0, 0.55 + 0.7 * depth, twist) * (1.0 + 0.3 * focus * presence);

    float d;
    if (tip) {
      float back = head - 0.02;
      vec2 a = vec2(back * aspect, thread(back, i, n).x);
      vec2 b = vec2(head * aspect, lead.x);
      vec2 pa = vec2(x * aspect, y) - a;
      vec2 ba = b - a;
      d = length(pa - ba * clamp(dot(pa, ba) / max(dot(ba, ba), 1e-6), 0.0, 1.0));
    } else {
      float bend = t.y * smoothstep(0.0, 0.04, abs(x - hub));
      d = abs(y - t.x) / sqrt(1.0 + bend * bend / (aspect * aspect));
    }
    float g = uGlow / pow(max(d / width, pixel * 0.35), uFalloff) * front * born;
    float onLine = exp(-d / (width * 0.012));

    if (bead > 0.0) {
      vec2 near = vec2((x - head) * aspect, y - lead.x);
      g *= 1.0 + bead * 1.6 * exp(-dot(near, near) / 0.0025);
    }

    float light = 0.0;
    for (int k = 0; k < ${$l}; k++) {
      vec4 surge = uSurges[k];
      if (surge.w <= 0.0) continue;
      float progress = clamp((surge.y - i * ${JS.toFixed(3)}) / ${jS.toFixed(2)}, 0.0, 1.0);
      if (progress <= 0.0 || progress >= 1.0) continue;
      float lead = mix(surge.x, surge.z > 0.0 ? 1.12 : -0.12, easeInOut(progress));
      float along = (x - lead) * surge.z * aspect;
      float trail = along < 0.0 ? exp(along / 0.24) : exp(-along * along / 0.0009);
      light += trail * sin(PI * progress);
    }
    g *= 1.0 + light * (0.12 + 2.8 * onLine);

    if (uPulses > 0.0) {
      float travel = abs(x - hub);
      float pulse = pow(0.5 + 0.5 * sin(travel * 16.0 + uClock * 2.2 + i * 1.9), 24.0);
      g *= 1.0 + uPulses * 5.0 * pulse * onLine;
    }

    float sheen = pow(0.5 + 0.5 * sin(abs(x - hub) * 11.0 + uClock * 1.4), 10.0);
    float lift = focus * presence;
    g *= (1.0 - settle * (1.0 - focus)) * (1.0 + lift * (0.9 + 1.4 * sheen * onLine));

    vec3 tint = mix(palette(ci), uCore, 0.3 * lift);
    color += g * tint;
    energy += g;
    float stroke = smoothstep(0.45, 1.3, g);
    inkColor += tint * stroke;
    ink += stroke;
  }

  float fade = 1.0;
  if (uFade > 0.0) {
    float edge = min(x, 1.0 - x);
    float f = clamp(edge / max(uFade * 0.5, 0.001), 0.0, 1.0);
    fade = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  }
  float core = smoothstep(0.5, 2.2, energy);
  color = mix(color, uCore * energy, core * 0.5);
  color *= uBrightness * fade;
  float alpha = clamp(energy * fade, 0.0, 1.0) * uOpacity;
  float grain = (hash(gl_FragCoord.xy + fract(uClock) * 97.0) - 0.5) * uGrain;

  if (uLight < 0.5) {
    vec3 rgb = max(color * alpha * (1.0 + grain * 2.0), 0.0);
    if (uOpaque > 0.5) {
      outColor = vec4(min(uBackground * (1.0 - alpha) + rgb, 1.0), 1.0);
    } else {
      outColor = vec4(rgb, alpha);
    }
  } else {
    ink *= fade;
    vec3 hue = ink > 0.0001 ? inkColor / ink : palette(0.5);
    float body = clamp(ink, 0.0, 1.0);
    float haze = clamp(1.0 - exp(-energy * fade * 0.3), 0.0, 1.0) * 0.12;
    float focal = smoothstep(2.0, 9.0, energy * fade) * 0.25;
    float cover = clamp((body * 0.9 + (haze + focal) * (1.0 - body)) * (1.0 + grain * 2.0), 0.0, 0.95) * uOpacity;
    vec3 stroke = hue;
    if (uOpaque > 0.5) {
      outColor = vec4(mix(uBackground, stroke, cover), 1.0);
    } else {
      outColor = vec4(stroke * cover, cover);
    }
  }
}`,wo=(a,e,n)=>Math.min(n,Math.max(e,a)),BD=(a,e)=>(a%e+e)%e;let Ro=null;const tm=(a,e)=>{if(a==="transparent")return null;if(typeof document>"u"||(Ro||(Ro=document.createElement("canvas").getContext("2d")),!Ro))return e;Ro.fillStyle="#000000",Ro.fillStyle=a;const n=Ro.fillStyle;if(n.startsWith("#")){const o=parseInt(n.slice(1),16);return[(o>>16&255)/255,(o>>8&255)/255,(o&255)/255]}const r=/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?/.exec(n);return r?r[4]!==void 0&&Number(r[4])===0?null:[Number(r[1])/255,Number(r[2])/255,Number(r[3])/255]:e},gy=a=>Math.min(.12,.9/Math.max(a-1,1)),vy=(a,e,n)=>{const r=(a[0]-.5)*e,o=.5-a[1],c=Math.cos(n),u=Math.sin(n);return[(r*c+o*u)/e+.5,-r*u+o*c+.5]},HD=(a,e,n,r,o)=>{const c=a.nodes<=1?e-a.pinch:(e-a.pinch+.5)*a.nodes-.5,u=a.mirror&&BD(Math.floor(c),2)<.5?-1:1,d=e-a.pinch,p=a.nodes<=1?a.spread*Math.abs(d):a.spread*.5*Math.abs(Math.cos(Math.PI*a.nodes*(d+.5))),m=a.shimmer?Math.sin(o*1.7+n*1.3)*.35:0,x=e*a.frequency+(r+n*FD/Math.max(a.count,1))*u+m;return a.position-p*(1+n*a.taper)*Math.sin(x)},xy=(a,e,n)=>{const r=a.createShader(e);return r?(a.shaderSource(r,n),a.compileShader(r),a.getShaderParameter(r,a.COMPILE_STATUS)?r:(a.deleteShader(r),null)):null},_y=()=>typeof window<"u"&&(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1);function GD({colors:a=["#5227FF","#FF9FFC"],coreColor:e="#FFFFFF",backgroundColor:n="transparent",lightMode:r=!1,threadCount:o=6,speed:c=.2,frequency:u=5,spread:d=.18,taper:p=1,position:m=.5,pinch:x=.5,nodes:g=1,angle:v=0,glow:_=.02,falloff:E=.6,thickness:C=1.1,brightness:y=.6,opacity:M=1,depth:U=0,pulses:B=0,mirror:R=!0,shimmer:O=!1,fade:P=0,grain:F=.05,intro:w=!0,mouseInteraction:T=!0,mouseStrength:H=.5,pulseOnClick:V=!0,paused:ee=!1,dpr:I=2,className:Q="",style:ae}){const W=zt.useRef(null),$=a.join("|"),D=zt.useMemo(()=>$.split("|").slice(0,Yl).map(je=>tm(je,[1,1,1])??[1,1,1]),[$]),le=zt.useMemo(()=>tm(e,[1,1,1])??[1,1,1],[e]),me=zt.useMemo(()=>tm(n,null),[n]),Te={palette:D.length?D:[[1,1,1]],core:le,paper:me,lightMode:r,count:wo(Math.round(o),1,Jl),speed:c,frequency:u,spread:d,taper:p,position:m,pinch:x,nodes:wo(Math.round(g),1,6),angle:v*Math.PI/180,glow:Math.max(0,_),falloff:Math.max(.05,E),thickness:Math.max(.05,C),brightness:Math.max(0,y),opacity:wo(M,0,1),depth:wo(U,0,1),pulses:Math.max(0,B),mirror:R,shimmer:O,fade:wo(P,0,1),grain:typeof F=="number"?Math.max(0,F):F?.05:0,intro:w,mouseInteraction:T,mouseStrength:wo(H,0,1),pulseOnClick:V,paused:ee,dpr:Math.max(.5,I)},rt=zt.useRef(Te);return rt.current=Te,zt.useEffect(()=>{const je=W.current;if(!je)return;const G=document.createElement("canvas");G.className=PD,je.appendChild(G);const J=G.getContext("webgl2",{alpha:!0,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!0,powerPreference:"high-performance"});if(!J){G.remove();return}const Ke=xy(J,J.VERTEX_SHADER,ID),ie=xy(J,J.FRAGMENT_SHADER,zD),ne=J.createProgram();if(!Ke||!ie||!ne){G.remove();return}if(J.attachShader(ne,Ke),J.attachShader(ne,ie),J.bindAttribLocation(ne,0,"aPosition"),J.linkProgram(ne),J.deleteShader(Ke),J.deleteShader(ie),!J.getProgramParameter(ne,J.LINK_STATUS)){J.deleteProgram(ne),G.remove();return}const xe=["uResolution","uPhase","uClock","uCount","uFrequency","uSpread","uTaper","uPosition","uPinch","uNodes","uAngle","uGlow","uFalloff","uThickness","uBrightness","uOpacity","uMirror","uShimmer","uDepth","uPulses","uFade","uGrain","uColors","uColorCount","uCore","uBackground","uOpaque","uLight","uIntro","uFocus","uFocusState","uSurges"],Ue={};xe.forEach(q=>{Ue[q]=J.getUniformLocation(ne,q)});const ye=J.createVertexArray();J.bindVertexArray(ye);const we=J.createBuffer();J.bindBuffer(J.ARRAY_BUFFER,we),J.bufferData(J.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),J.STATIC_DRAW),J.enableVertexAttribArray(0),J.vertexAttribPointer(0,2,J.FLOAT,!1,0,0),J.useProgram(ne);const _t=new Float32Array(Yl*3),Ae=new Float32Array($l*4),Fe=new Float32Array(Jl),ue={width:1,height:1,phase:0,clock:0,last:0,raf:0,visible:!1,introAt:-1,pointer:[.5,.5],inside:!1,presence:0,settle:0,target:-1,surges:[],quiet:0,seen:null},Oe=()=>{const q=rt.current,z=Math.min(window.devicePixelRatio||1,q.dpr),_e=Math.max(1,Math.round(je.clientWidth*z)),Ce=Math.max(1,Math.round(je.clientHeight*z));_e===ue.width&&Ce===ue.height||(ue.quiet=0,ue.width=_e,ue.height=Ce,G.width=_e,G.height=Ce)},He=q=>(q.count-1)*gy(q.count)+my,vt=(q,z,_e)=>{const Ce=q.mouseInteraction&&ue.inside;if(Ce){const ce=ue.width/Math.max(ue.height,1),[Be,Le]=vy(ue.pointer,ce,q.angle);let Ie=-1,Qe=1/0;for(let st=0;st<q.count;st++){const dt=Math.abs(HD(q,Be,st,ue.phase,_e?0:ue.clock)-Le),X=st===ue.target?.11:.085;dt<X&&dt<Qe&&(Ie=st,Qe=dt)}ue.target=Ie}else ue.target=-1;const te=1-Math.exp(-z/.22);let Z=0;for(let ce=0;ce<Jl;ce++){const Be=ce===ue.target?1:0;Fe[ce]+=(Be-Fe[ce])*te,Z=Math.max(Z,Fe[ce])}ue.presence+=((Ce?1:0)-ue.presence)*(1-Math.exp(-z/.3));const K=q.mouseStrength*.65*Z*ue.presence;return ue.settle+=(K-ue.settle)*(1-Math.exp(-z/.3)),Z>.002||ue.presence>.002||ue.settle>.002},mt=q=>{const z=rt.current,_e=ue.introAt<0?0:ue.clock-ue.introAt,Ce=z.intro&&!q&&_e<He(z);J.viewport(0,0,ue.width,ue.height),J.uniform2f(Ue.uResolution,ue.width,ue.height),J.uniform1f(Ue.uPhase,ue.phase),J.uniform1f(Ue.uClock,q?0:ue.clock),J.uniform1i(Ue.uCount,z.count),J.uniform1f(Ue.uFrequency,z.frequency),J.uniform1f(Ue.uSpread,z.spread),J.uniform1f(Ue.uTaper,z.taper),J.uniform1f(Ue.uPosition,z.position),J.uniform1f(Ue.uPinch,z.pinch),J.uniform1f(Ue.uNodes,z.nodes),J.uniform2f(Ue.uAngle,Math.cos(z.angle),Math.sin(z.angle)),J.uniform1f(Ue.uGlow,z.glow*Math.sqrt(6/Math.max(z.count,6))),J.uniform1f(Ue.uFalloff,z.falloff),J.uniform1f(Ue.uThickness,z.thickness),J.uniform1f(Ue.uBrightness,z.brightness),J.uniform1f(Ue.uOpacity,z.opacity),J.uniform1f(Ue.uMirror,z.mirror?1:0),J.uniform1f(Ue.uShimmer,z.shimmer&&!q?1:0),J.uniform1f(Ue.uDepth,z.depth),J.uniform1f(Ue.uPulses,z.pulses),J.uniform1f(Ue.uFade,z.fade),J.uniform1f(Ue.uGrain,z.grain),_t.fill(0),z.palette.slice(0,Yl).forEach((Z,K)=>_t.set(Z,K*3)),J.uniform3fv(Ue.uColors,_t),J.uniform1i(Ue.uColorCount,Math.min(z.palette.length,Yl)),J.uniform3f(Ue.uCore,z.core[0],z.core[1],z.core[2]);const te=z.paper??[0,0,0];J.uniform3f(Ue.uBackground,te[0],te[1],te[2]),J.uniform1f(Ue.uOpaque,z.paper?1:0),J.uniform1f(Ue.uLight,z.lightMode?1:0),J.uniform4f(Ue.uIntro,_e,gy(z.count),my,Ce?1:0),J.uniform1fv(Ue.uFocus,Fe),J.uniform2f(Ue.uFocusState,ue.presence*(.4+.6*z.mouseStrength),ue.settle),Ae.fill(0),ue.surges.slice(-$l).forEach((Z,K)=>{Ae.set([Z.x,ue.clock-Z.at,Z.direction,1],K*4)}),J.uniform4fv(Ue.uSurges,Ae),J.bindFramebuffer(J.FRAMEBUFFER,null),J.clearColor(0,0,0,0),J.clear(J.COLOR_BUFFER_BIT),J.drawArrays(J.TRIANGLES,0,3)},Je=q=>{if(ue.raf=requestAnimationFrame(Je),!ue.visible||document.hidden){ue.last=q;return}const z=rt.current,_e=ue.last?Math.min((q-ue.last)/1e3,.1):1/60;ue.last=q;const Ce=_y();ue.clock+=_e,ue.introAt<0&&(ue.introAt=ue.clock),!z.paused&&!Ce&&(ue.phase+=_e*z.speed);const te=vt(z,_e,Ce);ue.surges=ue.surges.filter(ce=>ue.clock-ce.at<jS+(z.count-1)*JS);const Z=z.paused||Ce,K=ue.surges.length>0||z.intro&&!Ce&&ue.clock-ue.introAt<He(z)||te;ue.seen!==z||K||!Z?ue.quiet=0:ue.quiet+=1,ue.seen=z,!(ue.quiet>3)&&(Oe(),mt(Ce))},Tt=q=>{const z=je.getBoundingClientRect();return{x:(q.clientX-z.left)/Math.max(z.width,1),y:(q.clientY-z.top)/Math.max(z.height,1),inside:q.clientX>=z.left&&q.clientX<=z.right&&q.clientY>=z.top&&q.clientY<=z.bottom}},j=q=>{const z=Tt(q);ue.inside=z.inside,z.inside&&(ue.pointer=[z.x,z.y])},nt=()=>{ue.inside=!1},ze=q=>{const z=rt.current;if(!z.pulseOnClick||q.button!==0||_y()||q.target instanceof Element&&q.target.closest('a, button, input, textarea, select, label, [role="button"]'))return;const _e=Tt(q);if(!_e.inside)return;const Ce=ue.width/Math.max(ue.height,1),[te]=vy([_e.x,_e.y],Ce,z.angle),Z=te<=z.pinch?1:-1;ue.surges.push({x:te,direction:Z,at:ue.clock}),ue.surges.length>$l&&ue.surges.shift()},L=new IntersectionObserver(q=>{ue.visible=q.some(z=>z.isIntersecting)});L.observe(je);const b=new ResizeObserver(Oe);return b.observe(je),Oe(),window.addEventListener("pointermove",j,{passive:!0}),window.addEventListener("pointerdown",ze),document.documentElement.addEventListener("pointerleave",nt),ue.raf=requestAnimationFrame(Je),()=>{cancelAnimationFrame(ue.raf),L.disconnect(),b.disconnect(),window.removeEventListener("pointermove",j),window.removeEventListener("pointerdown",ze),document.documentElement.removeEventListener("pointerleave",nt),J.deleteProgram(ne),J.deleteBuffer(we),J.deleteVertexArray(ye),J.getExtension("WEBGL_lose_context")?.loseContext(),G.remove()}},[]),ve.jsx("div",{ref:W,className:[OD,Q].filter(Boolean).join(" "),style:ae})}function VD(){return ve.jsxs("section",{id:"lab",className:"section section-tinted lab-section",children:[ve.jsx("div",{style:{width:"100%",height:"600px",position:"absolute"},children:ve.jsx(GD,{colors:["#5227FF","#FF9FFC"],coreColor:"#FFFFFF",threadCount:6,spread:.18})}),ve.jsxs("div",{className:"shell",children:[ve.jsx(Of,{eyebrow:"Explorations",title:"Animations, interfaces & expérimentations.",description:"Une sélection de ressources visuelles et de démonstrations créatives du site."}),ve.jsx("div",{className:"lab-grid",children:CD.map((a,e)=>ve.jsxs("article",{className:"lab-card reveal",style:{"--reveal-delay":`${e*100}ms`},children:[ve.jsxs("div",{className:"lab-card-title",children:[ve.jsxs("spa",{children:["0",e+1]}),ve.jsx("h3",{children:a.title})]}),ve.jsx("div",{className:"resource-links",children:a.links.map(([n,r])=>ve.jsxs("a",{href:`${hi.domain}${r}`,target:"_blank",rel:"noreferrer",children:[n,ve.jsx("span",{"aria-hidden":"true",children:"↗"})]},n))})]},a.title))})]})]})}function kD(){const[a,e]=zt.useState(!1);async function n(){try{await navigator.clipboard.writeText(hi.email),e(!0),window.setTimeout(()=>e(!1),1800)}catch{window.location.href=`mailto:${hi.email}`}}return ve.jsx("section",{id:"contact",className:"contact-section",children:ve.jsxs("div",{className:"shell contact-layout",children:[ve.jsxs("div",{className:"contact-intro",children:[ve.jsx("p",{className:"eyebrow reveal",children:"Contact"}),ve.jsxs("h2",{className:"reveal",style:{"--reveal-delay":"70ms"},children:["Parlons d’un cours,",ve.jsx("br",{}),"d’un accompagnement",ve.jsx("br",{}),"ou d’un projet."]}),ve.jsx("p",{className:"reveal",style:{"--reveal-delay":"140ms"},children:"Disponible pour l’enseignement, le mentorat et la création de supports pédagogiques ou d’applications web."})]}),ve.jsxs("div",{className:"contact-details reveal",style:{"--reveal-delay":"120ms"},children:[ve.jsx("p",{className:"eyebrow",children:"Entrer en contact"}),ve.jsxs("div",{className:"contact-row",children:[ve.jsx("span",{children:"Email"}),ve.jsxs("div",{children:[ve.jsx("a",{href:`mailto:${hi.email}`,children:hi.email}),ve.jsx("button",{className:"copy-button",type:"button",onClick:n,children:a?"Copié":"Copier"})]})]}),ve.jsxs("div",{className:"contact-row",children:[ve.jsx("span",{children:"Téléphone"}),ve.jsx("a",{href:`tel:${hi.phoneLink}`,children:hi.phone})]}),ve.jsxs("div",{className:"contact-row",children:[ve.jsx("span",{children:"CV"}),ve.jsxs("a",{href:hi.cv,target:"_blank",rel:"noreferrer",children:["CV personnel ",ve.jsx("span",{"aria-hidden":"true",children:"↗"})]})]}),ve.jsxs("div",{className:"social-links",children:[ve.jsx("a",{href:hi.facebook,target:"_blank",rel:"noreferrer",children:"Facebook ↗"}),ve.jsx("a",{href:hi.whatsapp,target:"_blank",rel:"noreferrer",children:"WhatsApp ↗"})]})]})]})})}function ec(a){let e=a[0],n=a[1],r=a[2];return Math.sqrt(e*e+n*n+r*r)}function o0(a,e){return a[0]=e[0],a[1]=e[1],a[2]=e[2],a}function XD(a,e,n,r){return a[0]=e,a[1]=n,a[2]=r,a}function yy(a,e,n){return a[0]=e[0]+n[0],a[1]=e[1]+n[1],a[2]=e[2]+n[2],a}function Sy(a,e,n){return a[0]=e[0]-n[0],a[1]=e[1]-n[1],a[2]=e[2]-n[2],a}function qD(a,e,n){return a[0]=e[0]*n[0],a[1]=e[1]*n[1],a[2]=e[2]*n[2],a}function WD(a,e,n){return a[0]=e[0]/n[0],a[1]=e[1]/n[1],a[2]=e[2]/n[2],a}function nm(a,e,n){return a[0]=e[0]*n,a[1]=e[1]*n,a[2]=e[2]*n,a}function YD(a,e){let n=e[0]-a[0],r=e[1]-a[1],o=e[2]-a[2];return Math.sqrt(n*n+r*r+o*o)}function ZD(a,e){let n=e[0]-a[0],r=e[1]-a[1],o=e[2]-a[2];return n*n+r*r+o*o}function My(a){let e=a[0],n=a[1],r=a[2];return e*e+n*n+r*r}function KD(a,e){return a[0]=-e[0],a[1]=-e[1],a[2]=-e[2],a}function QD(a,e){return a[0]=1/e[0],a[1]=1/e[1],a[2]=1/e[2],a}function l0(a,e){let n=e[0],r=e[1],o=e[2],c=n*n+r*r+o*o;return c>0&&(c=1/Math.sqrt(c)),a[0]=e[0]*c,a[1]=e[1]*c,a[2]=e[2]*c,a}function $S(a,e){return a[0]*e[0]+a[1]*e[1]+a[2]*e[2]}function Ey(a,e,n){let r=e[0],o=e[1],c=e[2],u=n[0],d=n[1],p=n[2];return a[0]=o*p-c*d,a[1]=c*u-r*p,a[2]=r*d-o*u,a}function jD(a,e,n,r){let o=e[0],c=e[1],u=e[2];return a[0]=o+r*(n[0]-o),a[1]=c+r*(n[1]-c),a[2]=u+r*(n[2]-u),a}function JD(a,e,n,r,o){const c=Math.exp(-r*o);let u=e[0],d=e[1],p=e[2];return a[0]=n[0]+(u-n[0])*c,a[1]=n[1]+(d-n[1])*c,a[2]=n[2]+(p-n[2])*c,a}function $D(a,e,n){let r=e[0],o=e[1],c=e[2],u=n[3]*r+n[7]*o+n[11]*c+n[15];return u=u||1,a[0]=(n[0]*r+n[4]*o+n[8]*c+n[12])/u,a[1]=(n[1]*r+n[5]*o+n[9]*c+n[13])/u,a[2]=(n[2]*r+n[6]*o+n[10]*c+n[14])/u,a}function eN(a,e,n){let r=e[0],o=e[1],c=e[2],u=n[3]*r+n[7]*o+n[11]*c+n[15];return u=u||1,a[0]=(n[0]*r+n[4]*o+n[8]*c)/u,a[1]=(n[1]*r+n[5]*o+n[9]*c)/u,a[2]=(n[2]*r+n[6]*o+n[10]*c)/u,a}function tN(a,e,n){let r=e[0],o=e[1],c=e[2];return a[0]=r*n[0]+o*n[3]+c*n[6],a[1]=r*n[1]+o*n[4]+c*n[7],a[2]=r*n[2]+o*n[5]+c*n[8],a}function nN(a,e,n){let r=e[0],o=e[1],c=e[2],u=n[0],d=n[1],p=n[2],m=n[3],x=d*c-p*o,g=p*r-u*c,v=u*o-d*r,_=d*v-p*g,E=p*x-u*v,C=u*g-d*x,y=m*2;return x*=y,g*=y,v*=y,_*=2,E*=2,C*=2,a[0]=r+x+_,a[1]=o+g+E,a[2]=c+v+C,a}const iN=(function(){const a=[0,0,0],e=[0,0,0];return function(n,r){o0(a,n),o0(e,r),l0(a,a),l0(e,e);let o=$S(a,e);return o>1?0:o<-1?Math.PI:Math.acos(o)}})();function aN(a,e){return a[0]===e[0]&&a[1]===e[1]&&a[2]===e[2]}class ma extends Array{constructor(e=0,n=e,r=e){return super(e,n,r),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set(e,n=e,r=e){return e.length?this.copy(e):(XD(this,e,n,r),this)}copy(e){return o0(this,e),this}add(e,n){return n?yy(this,e,n):yy(this,this,e),this}sub(e,n){return n?Sy(this,e,n):Sy(this,this,e),this}multiply(e){return e.length?qD(this,this,e):nm(this,this,e),this}divide(e){return e.length?WD(this,this,e):nm(this,this,1/e),this}inverse(e=this){return QD(this,e),this}len(){return ec(this)}distance(e){return e?YD(this,e):ec(this)}squaredLen(){return My(this)}squaredDistance(e){return e?ZD(this,e):My(this)}negate(e=this){return KD(this,e),this}cross(e,n){return n?Ey(this,e,n):Ey(this,this,e),this}scale(e){return nm(this,this,e),this}normalize(){return l0(this,this),this}dot(e){return $S(this,e)}equals(e){return aN(this,e)}applyMatrix3(e){return tN(this,this,e),this}applyMatrix4(e){return $D(this,this,e),this}scaleRotateMatrix4(e){return eN(this,this,e),this}applyQuaternion(e){return nN(this,this,e),this}angle(e){return iN(this,e)}lerp(e,n){return jD(this,this,e,n),this}smoothLerp(e,n,r){return JD(this,this,e,n,r),this}clone(){return new ma(this[0],this[1],this[2])}fromArray(e,n=0){return this[0]=e[n],this[1]=e[n+1],this[2]=e[n+2],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e}transformDirection(e){const n=this[0],r=this[1],o=this[2];return this[0]=e[0]*n+e[4]*r+e[8]*o,this[1]=e[1]*n+e[5]*r+e[9]*o,this[2]=e[2]*n+e[6]*r+e[10]*o,this.normalize()}}const by=new ma;let rN=1,sN=1,Ty=!1;class eM{constructor(e,n={}){e.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=e,this.attributes=n,this.id=rN++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let r in n)this.addAttribute(r,n[r])}addAttribute(e,n){if(this.attributes[e]=n,n.id=sN++,n.size=n.size||1,n.type=n.type||(n.data.constructor===Float32Array?this.gl.FLOAT:n.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),n.target=e==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,n.normalized=n.normalized||!1,n.stride=n.stride||0,n.offset=n.offset||0,n.count=n.count||(n.stride?n.data.byteLength/n.stride:n.data.length/n.size),n.divisor=n.instanced||0,n.needsUpdate=!1,n.usage=n.usage||this.gl.STATIC_DRAW,n.buffer||this.updateAttribute(n),n.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==n.count*n.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,n.count*n.divisor);this.instancedCount=n.count*n.divisor}else e==="index"?this.drawRange.count=n.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,n.count))}updateAttribute(e){const n=!e.buffer;n&&(e.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==e.buffer&&(this.gl.bindBuffer(e.target,e.buffer),this.glState.boundBuffer=e.buffer),n?this.gl.bufferData(e.target,e.data,e.usage):this.gl.bufferSubData(e.target,0,e.data),e.needsUpdate=!1}setIndex(e){this.addAttribute("index",e)}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}setInstancedCount(e){this.instancedCount=e}createVAO(e){this.VAOs[e.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.bindAttributes(e)}bindAttributes(e){e.attributeLocations.forEach((n,{name:r,type:o})=>{if(!this.attributes[r]){console.warn(`active attribute ${r} not being supplied`);return}const c=this.attributes[r];this.gl.bindBuffer(c.target,c.buffer),this.glState.boundBuffer=c.buffer;let u=1;o===35674&&(u=2),o===35675&&(u=3),o===35676&&(u=4);const d=c.size/u,p=u===1?0:u*u*4,m=u===1?0:u*4;for(let x=0;x<u;x++)this.gl.vertexAttribPointer(n+x,d,c.type,c.normalized,c.stride+p,c.offset+x*m),this.gl.enableVertexAttribArray(n+x),this.gl.renderer.vertexAttribDivisor(n+x,c.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:e,mode:n=this.gl.TRIANGLES}){this.gl.renderer.currentGeometry!==`${this.id}_${e.attributeOrder}`&&(this.VAOs[e.attributeOrder]||this.createVAO(e),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${e.attributeOrder}`),e.attributeLocations.forEach((o,{name:c})=>{const u=this.attributes[c];u.needsUpdate&&this.updateAttribute(u)});let r=2;this.attributes.index?.type===this.gl.UNSIGNED_INT&&(r=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(n,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*r,this.instancedCount):this.gl.renderer.drawArraysInstanced(n,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(n,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*r):this.gl.drawArrays(n,this.drawRange.start,this.drawRange.count)}getPosition(){const e=this.attributes.position;if(e.data)return e;if(!Ty)return console.warn("No position buffer data found to compute bounds"),Ty=!0}computeBoundingBox(e){e||(e=this.getPosition());const n=e.data,r=e.size;this.bounds||(this.bounds={min:new ma,max:new ma,center:new ma,scale:new ma,radius:1/0});const o=this.bounds.min,c=this.bounds.max,u=this.bounds.center,d=this.bounds.scale;o.set(1/0),c.set(-1/0);for(let p=0,m=n.length;p<m;p+=r){const x=n[p],g=n[p+1],v=n[p+2];o.x=Math.min(x,o.x),o.y=Math.min(g,o.y),o.z=Math.min(v,o.z),c.x=Math.max(x,c.x),c.y=Math.max(g,c.y),c.z=Math.max(v,c.z)}d.sub(c,o),u.add(o,c).divide(2)}computeBoundingSphere(e){e||(e=this.getPosition());const n=e.data,r=e.size;this.bounds||this.computeBoundingBox(e);let o=0;for(let c=0,u=n.length;c<u;c+=r)by.fromArray(n,c),o=Math.max(o,this.bounds.center.squaredDistance(by));this.bounds.radius=Math.sqrt(o)}remove(){for(let e in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[e]),delete this.VAOs[e];for(let e in this.attributes)this.gl.deleteBuffer(this.attributes[e].buffer),delete this.attributes[e]}}let oN=1;const Ay={};class sf{constructor(e,{vertex:n,fragment:r,uniforms:o={},transparent:c=!1,cullFace:u=e.BACK,frontFace:d=e.CCW,depthTest:p=!0,depthWrite:m=!0,depthFunc:x=e.LEQUAL}={}){e.canvas||console.error("gl not passed as first argument to Program"),this.gl=e,this.uniforms=o,this.id=oN++,n||console.warn("vertex shader not supplied"),r||console.warn("fragment shader not supplied"),this.transparent=c,this.cullFace=u,this.frontFace=d,this.depthTest=p,this.depthWrite=m,this.depthFunc=x,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:n,fragment:r})}setShaders({vertex:e,fragment:n}){if(e&&(this.gl.shaderSource(this.vertexShader,e),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${wy(e)}`)),n&&(this.gl.shaderSource(this.fragmentShader,n),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${wy(n)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let r=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let u=0;u<r;u++){let d=this.gl.getActiveUniform(this.program,u);this.uniformLocations.set(d,this.gl.getUniformLocation(this.program,d.name));const p=d.name.match(/(\w+)/g);d.uniformName=p[0],d.nameComponents=p.slice(1)}this.attributeLocations=new Map;const o=[],c=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let u=0;u<c;u++){const d=this.gl.getActiveAttrib(this.program,u),p=this.gl.getAttribLocation(this.program,d.name);p!==-1&&(o[p]=d.name,this.attributeLocations.set(d,p))}this.attributeOrder=o.join("")}setBlendFunc(e,n,r,o){this.blendFunc.src=e,this.blendFunc.dst=n,this.blendFunc.srcAlpha=r,this.blendFunc.dstAlpha=o,e&&(this.transparent=!0)}setBlendEquation(e,n){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=n}setStencilFunc(e,n,r){this.stencilRef=n,this.stencilFunc.func=e,this.stencilFunc.ref=n,this.stencilFunc.mask=r}setStencilOp(e,n,r){this.stencilOp.stencilFail=e,this.stencilOp.depthFail=n,this.stencilOp.depthPass=r}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:e=!1}={}){let n=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((o,c)=>{let u=this.uniforms[c.uniformName];for(const d of c.nameComponents){if(!u)break;if(d in u)u=u[d];else{if(Array.isArray(u.value))break;u=void 0;break}}if(!u)return Ry(`Active uniform ${c.name} has not been supplied`);if(u&&u.value===void 0)return Ry(`${c.name} uniform is missing a value parameter`);if(u.value.texture)return n=n+1,u.value.update(n),im(this.gl,c.type,o,n);if(u.value.length&&u.value[0].texture){const d=[];return u.value.forEach(p=>{n=n+1,p.update(n),d.push(n)}),im(this.gl,c.type,o,d)}im(this.gl,c.type,o,u.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function im(a,e,n,r){r=r.length?lN(r):r;const o=a.renderer.state.uniformLocations.get(n);if(r.length)if(o===void 0||o.length!==r.length)a.renderer.state.uniformLocations.set(n,r.slice(0));else{if(cN(o,r))return;o.set?o.set(r):uN(o,r),a.renderer.state.uniformLocations.set(n,o)}else{if(o===r)return;a.renderer.state.uniformLocations.set(n,r)}switch(e){case 5126:return r.length?a.uniform1fv(n,r):a.uniform1f(n,r);case 35664:return a.uniform2fv(n,r);case 35665:return a.uniform3fv(n,r);case 35666:return a.uniform4fv(n,r);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return r.length?a.uniform1iv(n,r):a.uniform1i(n,r);case 35671:case 35667:return a.uniform2iv(n,r);case 35672:case 35668:return a.uniform3iv(n,r);case 35673:case 35669:return a.uniform4iv(n,r);case 35674:return a.uniformMatrix2fv(n,!1,r);case 35675:return a.uniformMatrix3fv(n,!1,r);case 35676:return a.uniformMatrix4fv(n,!1,r)}}function wy(a){let e=a.split(`
`);for(let n=0;n<e.length;n++)e[n]=n+1+": "+e[n];return e.join(`
`)}function lN(a){const e=a.length,n=a[0].length;if(n===void 0)return a;const r=e*n;let o=Ay[r];o||(Ay[r]=o=new Float32Array(r));for(let c=0;c<e;c++)o.set(a[c],c*n);return o}function cN(a,e){if(a.length!==e.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==e[n])return!1;return!0}function uN(a,e){for(let n=0,r=a.length;n<r;n++)a[n]=e[n]}let am=0;function Ry(a){am>100||(console.warn(a),am++,am>100&&console.warn("More than 100 program warnings - stopping logs."))}const rm=new ma;let fN=1;class hN{constructor({canvas:e=document.createElement("canvas"),width:n=300,height:r=150,dpr:o=1,alpha:c=!1,depth:u=!0,stencil:d=!1,antialias:p=!1,premultipliedAlpha:m=!1,preserveDrawingBuffer:x=!1,powerPreference:g="default",autoClear:v=!0,webgl:_=2}={}){const E={alpha:c,depth:u,stencil:d,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:x,powerPreference:g};this.dpr=o,this.alpha=c,this.color=!0,this.depth=u,this.stencil=d,this.premultipliedAlpha=m,this.autoClear=v,this.id=fN++,_===2&&(this.gl=e.getContext("webgl2",E)),this.isWebgl2=!!this.gl,this.gl||(this.gl=e.getContext("webgl",E)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(n,r),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(e,n){this.width=e,this.height=n,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=n*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:e+"px",height:n+"px"})}setViewport(e,n,r=0,o=0){this.state.viewport.width===e&&this.state.viewport.height===n||(this.state.viewport.width=e,this.state.viewport.height=n,this.state.viewport.x=r,this.state.viewport.y=o,this.gl.viewport(r,o,e,n))}setScissor(e,n,r=0,o=0){this.gl.scissor(r,o,e,n)}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,n,r,o){this.state.blendFunc.src===e&&this.state.blendFunc.dst===n&&this.state.blendFunc.srcAlpha===r&&this.state.blendFunc.dstAlpha===o||(this.state.blendFunc.src=e,this.state.blendFunc.dst=n,this.state.blendFunc.srcAlpha=r,this.state.blendFunc.dstAlpha=o,r!==void 0?this.gl.blendFuncSeparate(e,n,r,o):this.gl.blendFunc(e,n))}setBlendEquation(e,n){e=e||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===e&&this.state.blendEquation.modeAlpha===n)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=n,n!==void 0?this.gl.blendEquationSeparate(e,n):this.gl.blendEquation(e))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}setStencilMask(e){this.state.stencilMask!==e&&(this.state.stencilMask=e,this.gl.stencilMask(e))}setStencilFunc(e,n,r){this.state.stencilFunc===e&&this.state.stencilRef===n&&this.state.stencilFuncMask===r||(this.state.stencilFunc=e||this.gl.ALWAYS,this.state.stencilRef=n||0,this.state.stencilFuncMask=r||0,this.gl.stencilFunc(e||this.gl.ALWAYS,n||0,r||0))}setStencilOp(e,n,r){this.state.stencilFail===e&&this.state.stencilDepthFail===n&&this.state.stencilDepthPass===r||(this.state.stencilFail=e,this.state.stencilDepthFail=n,this.state.stencilDepthPass=r,this.gl.stencilOp(e,n,r))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:n=null}={}){this.state.framebuffer!==n&&(this.state.framebuffer=n,this.gl.bindFramebuffer(e,n))}getExtension(e,n,r){return n&&this.gl[n]?this.gl[n].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),n?this.extensions[e]?this.extensions[e][r].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.program.id!==n.program.id?e.program.id-n.program.id:e.zDepth!==n.zDepth?e.zDepth-n.zDepth:n.id-e.id}sortTransparent(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.zDepth!==n.zDepth?n.zDepth-e.zDepth:n.id-e.id}sortUI(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.program.id!==n.program.id?e.program.id-n.program.id:n.id-e.id}getRenderList({scene:e,camera:n,frustumCull:r,sort:o}){let c=[];if(n&&r&&n.updateFrustum(),e.traverse(u=>{if(!u.visible)return!0;u.draw&&(r&&u.frustumCulled&&n&&!n.frustumIntersectsMesh(u)||c.push(u))}),o){const u=[],d=[],p=[];c.forEach(m=>{m.program.transparent?m.program.depthTest?d.push(m):p.push(m):u.push(m),m.zDepth=0,!(m.renderOrder!==0||!m.program.depthTest||!n)&&(m.worldMatrix.getTranslation(rm),rm.applyMatrix4(n.projectionViewMatrix),m.zDepth=rm.z)}),u.sort(this.sortOpaque),d.sort(this.sortTransparent),p.sort(this.sortUI),c=u.concat(d,p)}return c}render({scene:e,camera:n,target:r=null,update:o=!0,sort:c=!0,frustumCull:u=!0,clear:d}){r===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(r),this.setViewport(r.width,r.height)),(d||this.autoClear&&d!==!1)&&(this.depth&&(!r||r.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!r||r.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),o&&e.updateMatrixWorld(),n&&n.updateMatrixWorld(),this.getRenderList({scene:e,camera:n,frustumCull:u,sort:c}).forEach(m=>{m.draw({camera:n})})}}function dN(a,e){return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=e[3],a}function pN(a,e,n,r,o){return a[0]=e,a[1]=n,a[2]=r,a[3]=o,a}function mN(a,e){let n=e[0],r=e[1],o=e[2],c=e[3],u=n*n+r*r+o*o+c*c;return u>0&&(u=1/Math.sqrt(u)),a[0]=n*u,a[1]=r*u,a[2]=o*u,a[3]=c*u,a}function gN(a,e){return a[0]*e[0]+a[1]*e[1]+a[2]*e[2]+a[3]*e[3]}function vN(a){return a[0]=0,a[1]=0,a[2]=0,a[3]=1,a}function xN(a,e,n){n=n*.5;let r=Math.sin(n);return a[0]=r*e[0],a[1]=r*e[1],a[2]=r*e[2],a[3]=Math.cos(n),a}function Cy(a,e,n){let r=e[0],o=e[1],c=e[2],u=e[3],d=n[0],p=n[1],m=n[2],x=n[3];return a[0]=r*x+u*d+o*m-c*p,a[1]=o*x+u*p+c*d-r*m,a[2]=c*x+u*m+r*p-o*d,a[3]=u*x-r*d-o*p-c*m,a}function _N(a,e,n){n*=.5;let r=e[0],o=e[1],c=e[2],u=e[3],d=Math.sin(n),p=Math.cos(n);return a[0]=r*p+u*d,a[1]=o*p+c*d,a[2]=c*p-o*d,a[3]=u*p-r*d,a}function yN(a,e,n){n*=.5;let r=e[0],o=e[1],c=e[2],u=e[3],d=Math.sin(n),p=Math.cos(n);return a[0]=r*p-c*d,a[1]=o*p+u*d,a[2]=c*p+r*d,a[3]=u*p-o*d,a}function SN(a,e,n){n*=.5;let r=e[0],o=e[1],c=e[2],u=e[3],d=Math.sin(n),p=Math.cos(n);return a[0]=r*p+o*d,a[1]=o*p-r*d,a[2]=c*p+u*d,a[3]=u*p-c*d,a}function MN(a,e,n,r){let o=e[0],c=e[1],u=e[2],d=e[3],p=n[0],m=n[1],x=n[2],g=n[3],v,_,E,C,y;return _=o*p+c*m+u*x+d*g,_<0&&(_=-_,p=-p,m=-m,x=-x,g=-g),1-_>1e-6?(v=Math.acos(_),E=Math.sin(v),C=Math.sin((1-r)*v)/E,y=Math.sin(r*v)/E):(C=1-r,y=r),a[0]=C*o+y*p,a[1]=C*c+y*m,a[2]=C*u+y*x,a[3]=C*d+y*g,a}function EN(a,e){let n=e[0],r=e[1],o=e[2],c=e[3],u=n*n+r*r+o*o+c*c,d=u?1/u:0;return a[0]=-n*d,a[1]=-r*d,a[2]=-o*d,a[3]=c*d,a}function bN(a,e){return a[0]=-e[0],a[1]=-e[1],a[2]=-e[2],a[3]=e[3],a}function TN(a,e){let n=e[0]+e[4]+e[8],r;if(n>0)r=Math.sqrt(n+1),a[3]=.5*r,r=.5/r,a[0]=(e[5]-e[7])*r,a[1]=(e[6]-e[2])*r,a[2]=(e[1]-e[3])*r;else{let o=0;e[4]>e[0]&&(o=1),e[8]>e[o*3+o]&&(o=2);let c=(o+1)%3,u=(o+2)%3;r=Math.sqrt(e[o*3+o]-e[c*3+c]-e[u*3+u]+1),a[o]=.5*r,r=.5/r,a[3]=(e[c*3+u]-e[u*3+c])*r,a[c]=(e[c*3+o]+e[o*3+c])*r,a[u]=(e[u*3+o]+e[o*3+u])*r}return a}function AN(a,e,n="YXZ"){let r=Math.sin(e[0]*.5),o=Math.cos(e[0]*.5),c=Math.sin(e[1]*.5),u=Math.cos(e[1]*.5),d=Math.sin(e[2]*.5),p=Math.cos(e[2]*.5);return n==="XYZ"?(a[0]=r*u*p+o*c*d,a[1]=o*c*p-r*u*d,a[2]=o*u*d+r*c*p,a[3]=o*u*p-r*c*d):n==="YXZ"?(a[0]=r*u*p+o*c*d,a[1]=o*c*p-r*u*d,a[2]=o*u*d-r*c*p,a[3]=o*u*p+r*c*d):n==="ZXY"?(a[0]=r*u*p-o*c*d,a[1]=o*c*p+r*u*d,a[2]=o*u*d+r*c*p,a[3]=o*u*p-r*c*d):n==="ZYX"?(a[0]=r*u*p-o*c*d,a[1]=o*c*p+r*u*d,a[2]=o*u*d-r*c*p,a[3]=o*u*p+r*c*d):n==="YZX"?(a[0]=r*u*p+o*c*d,a[1]=o*c*p+r*u*d,a[2]=o*u*d-r*c*p,a[3]=o*u*p-r*c*d):n==="XZY"&&(a[0]=r*u*p-o*c*d,a[1]=o*c*p-r*u*d,a[2]=o*u*d+r*c*p,a[3]=o*u*p+r*c*d),a}const wN=dN,RN=pN,CN=gN,DN=mN;class NN extends Array{constructor(e=0,n=0,r=0,o=1){super(e,n,r,o),this.onChange=()=>{},this._target=this;const c=["0","1","2","3"];return new Proxy(this,{set(u,d){const p=Reflect.set(...arguments);return p&&c.includes(d)&&u.onChange(),p}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set w(e){this._target[3]=e,this.onChange()}identity(){return vN(this._target),this.onChange(),this}set(e,n,r,o){return e.length?this.copy(e):(RN(this._target,e,n,r,o),this.onChange(),this)}rotateX(e){return _N(this._target,this._target,e),this.onChange(),this}rotateY(e){return yN(this._target,this._target,e),this.onChange(),this}rotateZ(e){return SN(this._target,this._target,e),this.onChange(),this}inverse(e=this._target){return EN(this._target,e),this.onChange(),this}conjugate(e=this._target){return bN(this._target,e),this.onChange(),this}copy(e){return wN(this._target,e),this.onChange(),this}normalize(e=this._target){return DN(this._target,e),this.onChange(),this}multiply(e,n){return n?Cy(this._target,e,n):Cy(this._target,this._target,e),this.onChange(),this}dot(e){return CN(this._target,e)}fromMatrix3(e){return TN(this._target,e),this.onChange(),this}fromEuler(e,n){return AN(this._target,e,e.order),n||this.onChange(),this}fromAxisAngle(e,n){return xN(this._target,e,n),this.onChange(),this}slerp(e,n){return MN(this._target,this._target,e,n),this.onChange(),this}fromArray(e,n=0){return this._target[0]=e[n],this._target[1]=e[n+1],this._target[2]=e[n+2],this._target[3]=e[n+3],this.onChange(),this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e[n+3]=this[3],e}}const LN=1e-6;function UN(a,e){return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=e[3],a[4]=e[4],a[5]=e[5],a[6]=e[6],a[7]=e[7],a[8]=e[8],a[9]=e[9],a[10]=e[10],a[11]=e[11],a[12]=e[12],a[13]=e[13],a[14]=e[14],a[15]=e[15],a}function ON(a,e,n,r,o,c,u,d,p,m,x,g,v,_,E,C,y){return a[0]=e,a[1]=n,a[2]=r,a[3]=o,a[4]=c,a[5]=u,a[6]=d,a[7]=p,a[8]=m,a[9]=x,a[10]=g,a[11]=v,a[12]=_,a[13]=E,a[14]=C,a[15]=y,a}function PN(a){return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function FN(a,e){let n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8],g=e[9],v=e[10],_=e[11],E=e[12],C=e[13],y=e[14],M=e[15],U=n*d-r*u,B=n*p-o*u,R=n*m-c*u,O=r*p-o*d,P=r*m-c*d,F=o*m-c*p,w=x*C-g*E,T=x*y-v*E,H=x*M-_*E,V=g*y-v*C,ee=g*M-_*C,I=v*M-_*y,Q=U*I-B*ee+R*V+O*H-P*T+F*w;return Q?(Q=1/Q,a[0]=(d*I-p*ee+m*V)*Q,a[1]=(o*ee-r*I-c*V)*Q,a[2]=(C*F-y*P+M*O)*Q,a[3]=(v*P-g*F-_*O)*Q,a[4]=(p*H-u*I-m*T)*Q,a[5]=(n*I-o*H+c*T)*Q,a[6]=(y*R-E*F-M*B)*Q,a[7]=(x*F-v*R+_*B)*Q,a[8]=(u*ee-d*H+m*w)*Q,a[9]=(r*H-n*ee-c*w)*Q,a[10]=(E*P-C*R+M*U)*Q,a[11]=(g*R-x*P-_*U)*Q,a[12]=(d*T-u*V-p*w)*Q,a[13]=(n*V-r*T+o*w)*Q,a[14]=(C*B-E*O-y*U)*Q,a[15]=(x*O-g*B+v*U)*Q,a):null}function tM(a){let e=a[0],n=a[1],r=a[2],o=a[3],c=a[4],u=a[5],d=a[6],p=a[7],m=a[8],x=a[9],g=a[10],v=a[11],_=a[12],E=a[13],C=a[14],y=a[15],M=e*u-n*c,U=e*d-r*c,B=e*p-o*c,R=n*d-r*u,O=n*p-o*u,P=r*p-o*d,F=m*E-x*_,w=m*C-g*_,T=m*y-v*_,H=x*C-g*E,V=x*y-v*E,ee=g*y-v*C;return M*ee-U*V+B*H+R*T-O*w+P*F}function Dy(a,e,n){let r=e[0],o=e[1],c=e[2],u=e[3],d=e[4],p=e[5],m=e[6],x=e[7],g=e[8],v=e[9],_=e[10],E=e[11],C=e[12],y=e[13],M=e[14],U=e[15],B=n[0],R=n[1],O=n[2],P=n[3];return a[0]=B*r+R*d+O*g+P*C,a[1]=B*o+R*p+O*v+P*y,a[2]=B*c+R*m+O*_+P*M,a[3]=B*u+R*x+O*E+P*U,B=n[4],R=n[5],O=n[6],P=n[7],a[4]=B*r+R*d+O*g+P*C,a[5]=B*o+R*p+O*v+P*y,a[6]=B*c+R*m+O*_+P*M,a[7]=B*u+R*x+O*E+P*U,B=n[8],R=n[9],O=n[10],P=n[11],a[8]=B*r+R*d+O*g+P*C,a[9]=B*o+R*p+O*v+P*y,a[10]=B*c+R*m+O*_+P*M,a[11]=B*u+R*x+O*E+P*U,B=n[12],R=n[13],O=n[14],P=n[15],a[12]=B*r+R*d+O*g+P*C,a[13]=B*o+R*p+O*v+P*y,a[14]=B*c+R*m+O*_+P*M,a[15]=B*u+R*x+O*E+P*U,a}function IN(a,e,n){let r=n[0],o=n[1],c=n[2],u,d,p,m,x,g,v,_,E,C,y,M;return e===a?(a[12]=e[0]*r+e[4]*o+e[8]*c+e[12],a[13]=e[1]*r+e[5]*o+e[9]*c+e[13],a[14]=e[2]*r+e[6]*o+e[10]*c+e[14],a[15]=e[3]*r+e[7]*o+e[11]*c+e[15]):(u=e[0],d=e[1],p=e[2],m=e[3],x=e[4],g=e[5],v=e[6],_=e[7],E=e[8],C=e[9],y=e[10],M=e[11],a[0]=u,a[1]=d,a[2]=p,a[3]=m,a[4]=x,a[5]=g,a[6]=v,a[7]=_,a[8]=E,a[9]=C,a[10]=y,a[11]=M,a[12]=u*r+x*o+E*c+e[12],a[13]=d*r+g*o+C*c+e[13],a[14]=p*r+v*o+y*c+e[14],a[15]=m*r+_*o+M*c+e[15]),a}function zN(a,e,n){let r=n[0],o=n[1],c=n[2];return a[0]=e[0]*r,a[1]=e[1]*r,a[2]=e[2]*r,a[3]=e[3]*r,a[4]=e[4]*o,a[5]=e[5]*o,a[6]=e[6]*o,a[7]=e[7]*o,a[8]=e[8]*c,a[9]=e[9]*c,a[10]=e[10]*c,a[11]=e[11]*c,a[12]=e[12],a[13]=e[13],a[14]=e[14],a[15]=e[15],a}function BN(a,e,n,r){let o=r[0],c=r[1],u=r[2],d=Math.hypot(o,c,u),p,m,x,g,v,_,E,C,y,M,U,B,R,O,P,F,w,T,H,V,ee,I,Q,ae;return Math.abs(d)<LN?null:(d=1/d,o*=d,c*=d,u*=d,p=Math.sin(n),m=Math.cos(n),x=1-m,g=e[0],v=e[1],_=e[2],E=e[3],C=e[4],y=e[5],M=e[6],U=e[7],B=e[8],R=e[9],O=e[10],P=e[11],F=o*o*x+m,w=c*o*x+u*p,T=u*o*x-c*p,H=o*c*x-u*p,V=c*c*x+m,ee=u*c*x+o*p,I=o*u*x+c*p,Q=c*u*x-o*p,ae=u*u*x+m,a[0]=g*F+C*w+B*T,a[1]=v*F+y*w+R*T,a[2]=_*F+M*w+O*T,a[3]=E*F+U*w+P*T,a[4]=g*H+C*V+B*ee,a[5]=v*H+y*V+R*ee,a[6]=_*H+M*V+O*ee,a[7]=E*H+U*V+P*ee,a[8]=g*I+C*Q+B*ae,a[9]=v*I+y*Q+R*ae,a[10]=_*I+M*Q+O*ae,a[11]=E*I+U*Q+P*ae,e!==a&&(a[12]=e[12],a[13]=e[13],a[14]=e[14],a[15]=e[15]),a)}function HN(a,e){return a[0]=e[12],a[1]=e[13],a[2]=e[14],a}function nM(a,e){let n=e[0],r=e[1],o=e[2],c=e[4],u=e[5],d=e[6],p=e[8],m=e[9],x=e[10];return a[0]=Math.hypot(n,r,o),a[1]=Math.hypot(c,u,d),a[2]=Math.hypot(p,m,x),a}function GN(a){let e=a[0],n=a[1],r=a[2],o=a[4],c=a[5],u=a[6],d=a[8],p=a[9],m=a[10];const x=e*e+n*n+r*r,g=o*o+c*c+u*u,v=d*d+p*p+m*m;return Math.sqrt(Math.max(x,g,v))}const iM=(function(){const a=[1,1,1];return function(e,n){let r=a;nM(r,n);let o=1/r[0],c=1/r[1],u=1/r[2],d=n[0]*o,p=n[1]*c,m=n[2]*u,x=n[4]*o,g=n[5]*c,v=n[6]*u,_=n[8]*o,E=n[9]*c,C=n[10]*u,y=d+g+C,M=0;return y>0?(M=Math.sqrt(y+1)*2,e[3]=.25*M,e[0]=(v-E)/M,e[1]=(_-m)/M,e[2]=(p-x)/M):d>g&&d>C?(M=Math.sqrt(1+d-g-C)*2,e[3]=(v-E)/M,e[0]=.25*M,e[1]=(p+x)/M,e[2]=(_+m)/M):g>C?(M=Math.sqrt(1+g-d-C)*2,e[3]=(_-m)/M,e[0]=(p+x)/M,e[1]=.25*M,e[2]=(v+E)/M):(M=Math.sqrt(1+C-d-g)*2,e[3]=(p-x)/M,e[0]=(_+m)/M,e[1]=(v+E)/M,e[2]=.25*M),e}})();function VN(a,e,n,r){let o=ec([a[0],a[1],a[2]]);const c=ec([a[4],a[5],a[6]]),u=ec([a[8],a[9],a[10]]);tM(a)<0&&(o=-o),n[0]=a[12],n[1]=a[13],n[2]=a[14];const p=a.slice(),m=1/o,x=1/c,g=1/u;p[0]*=m,p[1]*=m,p[2]*=m,p[4]*=x,p[5]*=x,p[6]*=x,p[8]*=g,p[9]*=g,p[10]*=g,iM(e,p),r[0]=o,r[1]=c,r[2]=u}function kN(a,e,n,r){const o=a,c=e[0],u=e[1],d=e[2],p=e[3],m=c+c,x=u+u,g=d+d,v=c*m,_=c*x,E=c*g,C=u*x,y=u*g,M=d*g,U=p*m,B=p*x,R=p*g,O=r[0],P=r[1],F=r[2];return o[0]=(1-(C+M))*O,o[1]=(_+R)*O,o[2]=(E-B)*O,o[3]=0,o[4]=(_-R)*P,o[5]=(1-(v+M))*P,o[6]=(y+U)*P,o[7]=0,o[8]=(E+B)*F,o[9]=(y-U)*F,o[10]=(1-(v+C))*F,o[11]=0,o[12]=n[0],o[13]=n[1],o[14]=n[2],o[15]=1,o}function XN(a,e){let n=e[0],r=e[1],o=e[2],c=e[3],u=n+n,d=r+r,p=o+o,m=n*u,x=r*u,g=r*d,v=o*u,_=o*d,E=o*p,C=c*u,y=c*d,M=c*p;return a[0]=1-g-E,a[1]=x+M,a[2]=v-y,a[3]=0,a[4]=x-M,a[5]=1-m-E,a[6]=_+C,a[7]=0,a[8]=v+y,a[9]=_-C,a[10]=1-m-g,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function qN(a,e,n,r,o){let c=1/Math.tan(e/2),u=1/(r-o);return a[0]=c/n,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=c,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=(o+r)*u,a[11]=-1,a[12]=0,a[13]=0,a[14]=2*o*r*u,a[15]=0,a}function WN(a,e,n,r,o,c,u){let d=1/(e-n),p=1/(r-o),m=1/(c-u);return a[0]=-2*d,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=-2*p,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=2*m,a[11]=0,a[12]=(e+n)*d,a[13]=(o+r)*p,a[14]=(u+c)*m,a[15]=1,a}function YN(a,e,n,r){let o=e[0],c=e[1],u=e[2],d=r[0],p=r[1],m=r[2],x=o-n[0],g=c-n[1],v=u-n[2],_=x*x+g*g+v*v;_===0?v=1:(_=1/Math.sqrt(_),x*=_,g*=_,v*=_);let E=p*v-m*g,C=m*x-d*v,y=d*g-p*x;return _=E*E+C*C+y*y,_===0&&(m?d+=1e-6:p?m+=1e-6:p+=1e-6,E=p*v-m*g,C=m*x-d*v,y=d*g-p*x,_=E*E+C*C+y*y),_=1/Math.sqrt(_),E*=_,C*=_,y*=_,a[0]=E,a[1]=C,a[2]=y,a[3]=0,a[4]=g*y-v*C,a[5]=v*E-x*y,a[6]=x*C-g*E,a[7]=0,a[8]=x,a[9]=g,a[10]=v,a[11]=0,a[12]=o,a[13]=c,a[14]=u,a[15]=1,a}function Ny(a,e,n){return a[0]=e[0]+n[0],a[1]=e[1]+n[1],a[2]=e[2]+n[2],a[3]=e[3]+n[3],a[4]=e[4]+n[4],a[5]=e[5]+n[5],a[6]=e[6]+n[6],a[7]=e[7]+n[7],a[8]=e[8]+n[8],a[9]=e[9]+n[9],a[10]=e[10]+n[10],a[11]=e[11]+n[11],a[12]=e[12]+n[12],a[13]=e[13]+n[13],a[14]=e[14]+n[14],a[15]=e[15]+n[15],a}function Ly(a,e,n){return a[0]=e[0]-n[0],a[1]=e[1]-n[1],a[2]=e[2]-n[2],a[3]=e[3]-n[3],a[4]=e[4]-n[4],a[5]=e[5]-n[5],a[6]=e[6]-n[6],a[7]=e[7]-n[7],a[8]=e[8]-n[8],a[9]=e[9]-n[9],a[10]=e[10]-n[10],a[11]=e[11]-n[11],a[12]=e[12]-n[12],a[13]=e[13]-n[13],a[14]=e[14]-n[14],a[15]=e[15]-n[15],a}function ZN(a,e,n){return a[0]=e[0]*n,a[1]=e[1]*n,a[2]=e[2]*n,a[3]=e[3]*n,a[4]=e[4]*n,a[5]=e[5]*n,a[6]=e[6]*n,a[7]=e[7]*n,a[8]=e[8]*n,a[9]=e[9]*n,a[10]=e[10]*n,a[11]=e[11]*n,a[12]=e[12]*n,a[13]=e[13]*n,a[14]=e[14]*n,a[15]=e[15]*n,a}class Af extends Array{constructor(e=1,n=0,r=0,o=0,c=0,u=1,d=0,p=0,m=0,x=0,g=1,v=0,_=0,E=0,C=0,y=1){return super(e,n,r,o,c,u,d,p,m,x,g,v,_,E,C,y),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,n,r,o,c,u,d,p,m,x,g,v,_,E,C,y){return e.length?this.copy(e):(ON(this,e,n,r,o,c,u,d,p,m,x,g,v,_,E,C,y),this)}translate(e,n=this){return IN(this,n,e),this}rotate(e,n,r=this){return BN(this,r,e,n),this}scale(e,n=this){return zN(this,n,typeof e=="number"?[e,e,e]:e),this}add(e,n){return n?Ny(this,e,n):Ny(this,this,e),this}sub(e,n){return n?Ly(this,e,n):Ly(this,this,e),this}multiply(e,n){return e.length?n?Dy(this,e,n):Dy(this,this,e):ZN(this,this,e),this}identity(){return PN(this),this}copy(e){return UN(this,e),this}fromPerspective({fov:e,aspect:n,near:r,far:o}={}){return qN(this,e,n,r,o),this}fromOrthogonal({left:e,right:n,bottom:r,top:o,near:c,far:u}){return WN(this,e,n,r,o,c,u),this}fromQuaternion(e){return XN(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return FN(this,e),this}compose(e,n,r){return kN(this,e,n,r),this}decompose(e,n,r){return VN(this,e,n,r),this}getRotation(e){return iM(e,this),this}getTranslation(e){return HN(e,this),this}getScaling(e){return nM(e,this),this}getMaxScaleOnAxis(){return GN(this)}lookAt(e,n,r){return YN(this,e,n,r),this}determinant(){return tM(this)}fromArray(e,n=0){return this[0]=e[n],this[1]=e[n+1],this[2]=e[n+2],this[3]=e[n+3],this[4]=e[n+4],this[5]=e[n+5],this[6]=e[n+6],this[7]=e[n+7],this[8]=e[n+8],this[9]=e[n+9],this[10]=e[n+10],this[11]=e[n+11],this[12]=e[n+12],this[13]=e[n+13],this[14]=e[n+14],this[15]=e[n+15],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e[n+3]=this[3],e[n+4]=this[4],e[n+5]=this[5],e[n+6]=this[6],e[n+7]=this[7],e[n+8]=this[8],e[n+9]=this[9],e[n+10]=this[10],e[n+11]=this[11],e[n+12]=this[12],e[n+13]=this[13],e[n+14]=this[14],e[n+15]=this[15],e}}function KN(a,e,n="YXZ"){return n==="XYZ"?(a[1]=Math.asin(Math.min(Math.max(e[8],-1),1)),Math.abs(e[8])<.99999?(a[0]=Math.atan2(-e[9],e[10]),a[2]=Math.atan2(-e[4],e[0])):(a[0]=Math.atan2(e[6],e[5]),a[2]=0)):n==="YXZ"?(a[0]=Math.asin(-Math.min(Math.max(e[9],-1),1)),Math.abs(e[9])<.99999?(a[1]=Math.atan2(e[8],e[10]),a[2]=Math.atan2(e[1],e[5])):(a[1]=Math.atan2(-e[2],e[0]),a[2]=0)):n==="ZXY"?(a[0]=Math.asin(Math.min(Math.max(e[6],-1),1)),Math.abs(e[6])<.99999?(a[1]=Math.atan2(-e[2],e[10]),a[2]=Math.atan2(-e[4],e[5])):(a[1]=0,a[2]=Math.atan2(e[1],e[0]))):n==="ZYX"?(a[1]=Math.asin(-Math.min(Math.max(e[2],-1),1)),Math.abs(e[2])<.99999?(a[0]=Math.atan2(e[6],e[10]),a[2]=Math.atan2(e[1],e[0])):(a[0]=0,a[2]=Math.atan2(-e[4],e[5]))):n==="YZX"?(a[2]=Math.asin(Math.min(Math.max(e[1],-1),1)),Math.abs(e[1])<.99999?(a[0]=Math.atan2(-e[9],e[5]),a[1]=Math.atan2(-e[2],e[0])):(a[0]=0,a[1]=Math.atan2(e[8],e[10]))):n==="XZY"&&(a[2]=Math.asin(-Math.min(Math.max(e[4],-1),1)),Math.abs(e[4])<.99999?(a[0]=Math.atan2(e[6],e[5]),a[1]=Math.atan2(e[8],e[0])):(a[0]=Math.atan2(-e[9],e[10]),a[1]=0)),a}const Uy=new Af;class QN extends Array{constructor(e=0,n=e,r=e,o="YXZ"){super(e,n,r),this.order=o,this.onChange=()=>{},this._target=this;const c=["0","1","2"];return new Proxy(this,{set(u,d){const p=Reflect.set(...arguments);return p&&c.includes(d)&&u.onChange(),p}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set(e,n=e,r=e){return e.length?this.copy(e):(this._target[0]=e,this._target[1]=n,this._target[2]=r,this.onChange(),this)}copy(e){return this._target[0]=e[0],this._target[1]=e[1],this._target[2]=e[2],this.onChange(),this}reorder(e){return this._target.order=e,this.onChange(),this}fromRotationMatrix(e,n=this.order){return KN(this._target,e,n),this.onChange(),this}fromQuaternion(e,n=this.order,r){return Uy.fromQuaternion(e),this._target.fromRotationMatrix(Uy,n),r||this.onChange(),this}fromArray(e,n=0){return this._target[0]=e[n],this._target[1]=e[n+1],this._target[2]=e[n+2],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e}}class jN{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new Af,this.worldMatrix=new Af,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new ma,this.quaternion=new NN,this.scale=new ma(1),this.rotation=new QN,this.up=new ma(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(e,n=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,n&&e&&e.addChild(this,!1)}addChild(e,n=!0){~this.children.indexOf(e)||this.children.push(e),n&&e.setParent(this,!1)}removeChild(e,n=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),n&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0);for(let n=0,r=this.children.length;n<r;n++)this.children[n].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let n=0,r=this.children.length;n<r;n++)this.children[n].traverse(e)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,n=!1){n?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}function JN(a,e){return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=e[4],a[4]=e[5],a[5]=e[6],a[6]=e[8],a[7]=e[9],a[8]=e[10],a}function $N(a,e){let n=e[0],r=e[1],o=e[2],c=e[3],u=n+n,d=r+r,p=o+o,m=n*u,x=r*u,g=r*d,v=o*u,_=o*d,E=o*p,C=c*u,y=c*d,M=c*p;return a[0]=1-g-E,a[3]=x-M,a[6]=v+y,a[1]=x+M,a[4]=1-m-E,a[7]=_-C,a[2]=v-y,a[5]=_+C,a[8]=1-m-g,a}function e4(a,e){return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=e[3],a[4]=e[4],a[5]=e[5],a[6]=e[6],a[7]=e[7],a[8]=e[8],a}function t4(a,e,n,r,o,c,u,d,p,m){return a[0]=e,a[1]=n,a[2]=r,a[3]=o,a[4]=c,a[5]=u,a[6]=d,a[7]=p,a[8]=m,a}function n4(a){return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=1,a[5]=0,a[6]=0,a[7]=0,a[8]=1,a}function i4(a,e){let n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8],g=x*u-d*m,v=-x*c+d*p,_=m*c-u*p,E=n*g+r*v+o*_;return E?(E=1/E,a[0]=g*E,a[1]=(-x*r+o*m)*E,a[2]=(d*r-o*u)*E,a[3]=v*E,a[4]=(x*n-o*p)*E,a[5]=(-d*n+o*c)*E,a[6]=_*E,a[7]=(-m*n+r*p)*E,a[8]=(u*n-r*c)*E,a):null}function Oy(a,e,n){let r=e[0],o=e[1],c=e[2],u=e[3],d=e[4],p=e[5],m=e[6],x=e[7],g=e[8],v=n[0],_=n[1],E=n[2],C=n[3],y=n[4],M=n[5],U=n[6],B=n[7],R=n[8];return a[0]=v*r+_*u+E*m,a[1]=v*o+_*d+E*x,a[2]=v*c+_*p+E*g,a[3]=C*r+y*u+M*m,a[4]=C*o+y*d+M*x,a[5]=C*c+y*p+M*g,a[6]=U*r+B*u+R*m,a[7]=U*o+B*d+R*x,a[8]=U*c+B*p+R*g,a}function a4(a,e,n){let r=e[0],o=e[1],c=e[2],u=e[3],d=e[4],p=e[5],m=e[6],x=e[7],g=e[8],v=n[0],_=n[1];return a[0]=r,a[1]=o,a[2]=c,a[3]=u,a[4]=d,a[5]=p,a[6]=v*r+_*u+m,a[7]=v*o+_*d+x,a[8]=v*c+_*p+g,a}function r4(a,e,n){let r=e[0],o=e[1],c=e[2],u=e[3],d=e[4],p=e[5],m=e[6],x=e[7],g=e[8],v=Math.sin(n),_=Math.cos(n);return a[0]=_*r+v*u,a[1]=_*o+v*d,a[2]=_*c+v*p,a[3]=_*u-v*r,a[4]=_*d-v*o,a[5]=_*p-v*c,a[6]=m,a[7]=x,a[8]=g,a}function s4(a,e,n){let r=n[0],o=n[1];return a[0]=r*e[0],a[1]=r*e[1],a[2]=r*e[2],a[3]=o*e[3],a[4]=o*e[4],a[5]=o*e[5],a[6]=e[6],a[7]=e[7],a[8]=e[8],a}function o4(a,e){let n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8],g=e[9],v=e[10],_=e[11],E=e[12],C=e[13],y=e[14],M=e[15],U=n*d-r*u,B=n*p-o*u,R=n*m-c*u,O=r*p-o*d,P=r*m-c*d,F=o*m-c*p,w=x*C-g*E,T=x*y-v*E,H=x*M-_*E,V=g*y-v*C,ee=g*M-_*C,I=v*M-_*y,Q=U*I-B*ee+R*V+O*H-P*T+F*w;return Q?(Q=1/Q,a[0]=(d*I-p*ee+m*V)*Q,a[1]=(p*H-u*I-m*T)*Q,a[2]=(u*ee-d*H+m*w)*Q,a[3]=(o*ee-r*I-c*V)*Q,a[4]=(n*I-o*H+c*T)*Q,a[5]=(r*H-n*ee-c*w)*Q,a[6]=(C*F-y*P+M*O)*Q,a[7]=(y*R-E*F-M*B)*Q,a[8]=(E*P-C*R+M*U)*Q,a):null}class l4 extends Array{constructor(e=1,n=0,r=0,o=0,c=1,u=0,d=0,p=0,m=1){return super(e,n,r,o,c,u,d,p,m),this}set(e,n,r,o,c,u,d,p,m){return e.length?this.copy(e):(t4(this,e,n,r,o,c,u,d,p,m),this)}translate(e,n=this){return a4(this,n,e),this}rotate(e,n=this){return r4(this,n,e),this}scale(e,n=this){return s4(this,n,e),this}multiply(e,n){return n?Oy(this,e,n):Oy(this,this,e),this}identity(){return n4(this),this}copy(e){return e4(this,e),this}fromMatrix4(e){return JN(this,e),this}fromQuaternion(e){return $N(this,e),this}fromBasis(e,n,r){return this.set(e[0],e[1],e[2],n[0],n[1],n[2],r[0],r[1],r[2]),this}inverse(e=this){return i4(this,e),this}getNormalMatrix(e){return o4(this,e),this}}let c4=0;class of extends jN{constructor(e,{geometry:n,program:r,mode:o=e.TRIANGLES,frustumCulled:c=!0,renderOrder:u=0}={}){super(),e.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=e,this.id=c4++,this.geometry=n,this.program=r,this.mode=o,this.frustumCulled=c,this.renderOrder=u,this.modelViewMatrix=new Af,this.normalMatrix=new l4,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(r=>r&&r({mesh:this,camera:e}));let n=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:n}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(r=>r&&r({mesh:this,camera:e}))}}const Py=new Uint8Array(4);function Fy(a){return(a&a-1)===0}let u4=1;class wf{constructor(e,{image:n,target:r=e.TEXTURE_2D,type:o=e.UNSIGNED_BYTE,format:c=e.RGBA,internalFormat:u=c,wrapS:d=e.CLAMP_TO_EDGE,wrapT:p=e.CLAMP_TO_EDGE,wrapR:m=e.CLAMP_TO_EDGE,generateMipmaps:x=r===(e.TEXTURE_2D||e.TEXTURE_CUBE_MAP),minFilter:g=x?e.NEAREST_MIPMAP_LINEAR:e.LINEAR,magFilter:v=e.LINEAR,premultiplyAlpha:_=!1,unpackAlignment:E=4,flipY:C=r==(e.TEXTURE_2D||e.TEXTURE_3D),anisotropy:y=0,level:M=0,width:U,height:B=U,length:R=1}={}){this.gl=e,this.id=u4++,this.image=n,this.target=r,this.type=o,this.format=c,this.internalFormat=u,this.minFilter=g,this.magFilter=v,this.wrapS=d,this.wrapT=p,this.wrapR=m,this.generateMipmaps=x,this.premultiplyAlpha=_,this.unpackAlignment=E,this.flipY=C,this.anisotropy=Math.min(y,this.gl.renderer.parameters.maxAnisotropy),this.level=M,this.width=U,this.height=B,this.length=R,this.texture=this.gl.createTexture(),this.store={image:null},this.glState=this.gl.renderer.state,this.state={},this.state.minFilter=this.gl.NEAREST_MIPMAP_LINEAR,this.state.magFilter=this.gl.LINEAR,this.state.wrapS=this.gl.REPEAT,this.state.wrapT=this.gl.REPEAT,this.state.anisotropy=0}bind(){this.glState.textureUnits[this.glState.activeTextureUnit]!==this.id&&(this.gl.bindTexture(this.target,this.texture),this.glState.textureUnits[this.glState.activeTextureUnit]=this.id)}update(e=0){const n=!(this.image===this.store.image&&!this.needsUpdate);if((n||this.glState.textureUnits[e]!==this.id)&&(this.gl.renderer.activeTexture(e),this.bind()),!!n){if(this.needsUpdate=!1,this.flipY!==this.glState.flipY&&(this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,this.flipY),this.glState.flipY=this.flipY),this.premultiplyAlpha!==this.glState.premultiplyAlpha&&(this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),this.glState.premultiplyAlpha=this.premultiplyAlpha),this.unpackAlignment!==this.glState.unpackAlignment&&(this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,this.unpackAlignment),this.glState.unpackAlignment=this.unpackAlignment),this.minFilter!==this.state.minFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MIN_FILTER,this.minFilter),this.state.minFilter=this.minFilter),this.magFilter!==this.state.magFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MAG_FILTER,this.magFilter),this.state.magFilter=this.magFilter),this.wrapS!==this.state.wrapS&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_S,this.wrapS),this.state.wrapS=this.wrapS),this.wrapT!==this.state.wrapT&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_T,this.wrapT),this.state.wrapT=this.wrapT),this.wrapR!==this.state.wrapR&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_R,this.wrapR),this.state.wrapR=this.wrapR),this.anisotropy&&this.anisotropy!==this.state.anisotropy&&(this.gl.texParameterf(this.target,this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropy),this.state.anisotropy=this.anisotropy),this.image){if(this.image.width&&(this.width=this.image.width,this.height=this.image.height),this.target===this.gl.TEXTURE_CUBE_MAP)for(let r=0;r<6;r++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+r,this.level,this.internalFormat,this.format,this.type,this.image[r]);else if(ArrayBuffer.isView(this.image))this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,this.image):(this.target===this.gl.TEXTURE_2D_ARRAY||this.target===this.gl.TEXTURE_3D)&&this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);else if(this.image.isCompressedTexture)for(let r=0;r<this.image.length;r++)this.gl.compressedTexImage2D(this.target,r,this.internalFormat,this.image[r].width,this.image[r].height,0,this.image[r].data);else this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.format,this.type,this.image):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);this.generateMipmaps&&(!this.gl.renderer.isWebgl2&&(!Fy(this.image.width)||!Fy(this.image.height))?(this.generateMipmaps=!1,this.wrapS=this.wrapT=this.gl.CLAMP_TO_EDGE,this.minFilter=this.gl.LINEAR):this.gl.generateMipmap(this.target)),this.onUpdate&&this.onUpdate()}else if(this.target===this.gl.TEXTURE_CUBE_MAP)for(let r=0;r<6;r++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,Py);else this.width?this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,null):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,null):this.gl.texImage2D(this.target,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,Py);this.store.image=this.image}}}class Iy{constructor(e,{width:n=e.canvas.width,height:r=e.canvas.height,target:o=e.FRAMEBUFFER,color:c=1,depth:u=!0,stencil:d=!1,depthTexture:p=!1,wrapS:m=e.CLAMP_TO_EDGE,wrapT:x=e.CLAMP_TO_EDGE,wrapR:g=e.CLAMP_TO_EDGE,minFilter:v=e.LINEAR,magFilter:_=v,type:E=e.UNSIGNED_BYTE,format:C=e.RGBA,internalFormat:y=C,unpackAlignment:M,premultiplyAlpha:U}={}){this.gl=e,this.width=n,this.height=r,this.depth=u,this.stencil=d,this.buffer=this.gl.createFramebuffer(),this.target=o,this.gl.renderer.bindFramebuffer(this),this.textures=[];const B=[];for(let R=0;R<c;R++)this.textures.push(new wf(e,{width:n,height:r,wrapS:m,wrapT:x,wrapR:g,minFilter:v,magFilter:_,type:E,format:C,internalFormat:y,unpackAlignment:M,premultiplyAlpha:U,flipY:!1,generateMipmaps:!1})),this.textures[R].update(),this.gl.framebufferTexture2D(this.target,this.gl.COLOR_ATTACHMENT0+R,this.gl.TEXTURE_2D,this.textures[R].texture,0),B.push(this.gl.COLOR_ATTACHMENT0+R);B.length>1&&this.gl.renderer.drawBuffers(B),this.texture=this.textures[0],p&&(this.gl.renderer.isWebgl2||this.gl.renderer.getExtension("WEBGL_depth_texture"))?(this.depthTexture=new wf(e,{width:n,height:r,minFilter:this.gl.NEAREST,magFilter:this.gl.NEAREST,format:this.stencil?this.gl.DEPTH_STENCIL:this.gl.DEPTH_COMPONENT,internalFormat:e.renderer.isWebgl2?this.stencil?this.gl.DEPTH24_STENCIL8:this.gl.DEPTH_COMPONENT16:this.gl.DEPTH_COMPONENT,type:this.stencil?this.gl.UNSIGNED_INT_24_8:this.gl.UNSIGNED_INT}),this.depthTexture.update(),this.gl.framebufferTexture2D(this.target,this.stencil?this.gl.DEPTH_STENCIL_ATTACHMENT:this.gl.DEPTH_ATTACHMENT,this.gl.TEXTURE_2D,this.depthTexture.texture,0)):(u&&!d&&(this.depthBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,n,r),this.gl.framebufferRenderbuffer(this.target,this.gl.DEPTH_ATTACHMENT,this.gl.RENDERBUFFER,this.depthBuffer)),d&&!u&&(this.stencilBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.stencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.STENCIL_INDEX8,n,r),this.gl.framebufferRenderbuffer(this.target,this.gl.STENCIL_ATTACHMENT,this.gl.RENDERBUFFER,this.stencilBuffer)),u&&d&&(this.depthStencilBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthStencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_STENCIL,n,r),this.gl.framebufferRenderbuffer(this.target,this.gl.DEPTH_STENCIL_ATTACHMENT,this.gl.RENDERBUFFER,this.depthStencilBuffer))),this.gl.renderer.bindFramebuffer({target:this.target})}setSize(e,n){if(!(this.width===e&&this.height===n)){this.width=e,this.height=n,this.gl.renderer.bindFramebuffer(this);for(let r=0;r<this.textures.length;r++)this.textures[r].width=e,this.textures[r].height=n,this.textures[r].needsUpdate=!0,this.textures[r].update(),this.gl.framebufferTexture2D(this.target,this.gl.COLOR_ATTACHMENT0+r,this.gl.TEXTURE_2D,this.textures[r].texture,0);this.depthTexture?(this.depthTexture.width=e,this.depthTexture.height=n,this.depthTexture.needsUpdate=!0,this.depthTexture.update(),this.gl.framebufferTexture2D(this.target,this.gl.DEPTH_ATTACHMENT,this.gl.TEXTURE_2D,this.depthTexture.texture,0)):(this.depthBuffer&&(this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,e,n)),this.stencilBuffer&&(this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.stencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.STENCIL_INDEX8,e,n)),this.depthStencilBuffer&&(this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthStencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_STENCIL,e,n))),this.gl.renderer.bindFramebuffer({target:this.target})}}}class f4 extends eM{constructor(e,{attributes:n={}}={}){Object.assign(n,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,n)}}const zy={plasma:{color:"#F25BD0",strands:6,crackle:.85,flares:.65,glow:.9,sparks:.6,particleCount:15e3,fill:.5,motion:"rise",particleShape:"square",depth:.6,sway:.5,twinkle:.5,haze:.7,dustSpeed:1},aurora:{color:"#5CFFC8",strands:5,crackle:.6,flares:.5,glow:.8,sparks:.45,particleCount:15e3,fill:.5,motion:"rise",particleShape:"square",depth:.6,sway:.5,twinkle:.5,haze:.7,dustSpeed:1},nebula:{color:"#9478FF",strands:6,crackle:1,flares:.5,glow:.9,sparks:.6,particleCount:18e3,fill:.45,motion:"rise",particleShape:"square",depth:.5,sway:.4,twinkle:.6,haze:.8,dustSpeed:1.2},ember:{color:"#FF8A2A",strands:5,crackle:.9,flares:.8,glow:1,sparks:.8,particleCount:12e3,fill:.35,motion:"rise",particleShape:"round",depth:.7,sway:.3,twinkle:.7,haze:.9,dustSpeed:1.6},frost:{color:"#BFE6FF",strands:3,crackle:.3,flares:.3,glow:.6,sparks:.2,particleCount:16e3,fill:.6,motion:"fall",particleShape:"round",depth:.8,sway:.4,twinkle:.4,haze:.5,dustSpeed:.7},solar:{color:"#FFD36E",strands:6,crackle:.7,flares:1,glow:1.1,sparks:.5,particleCount:15e3,fill:.55,motion:"orbit",particleShape:"square",depth:.6,sway:.7,twinkle:.5,haze:.8,dustSpeed:1},eclipse:{color:"#FFFFFF",strands:4,crackle:.5,flares:.4,glow:.7,sparks:.35,particleCount:14e3,fill:.5,motion:"drift",particleShape:"square",depth:.7,sway:.5,twinkle:.5,haze:.5,dustSpeed:.8},abyss:{color:"#3F7BFF",strands:5,crackle:.55,flares:.6,glow:.9,sparks:.4,particleCount:2e4,fill:.8,motion:"orbit",particleShape:"round",depth:.8,sway:.8,twinkle:.5,haze:.6,dustSpeed:.9}},h4={rise:0,fall:1,drift:2,orbit:3},d4={square:0,round:1},aM=8,sm=4,p4=4e4,Zr=256,m4=45e5,g4=2.2,v4=7,lf=[1,1,1],om=[0,0,0],Rn=(a,e,n)=>Math.min(Math.max(a,e),n),lr=(a,e,n)=>{const r=Rn((n-a)/(e-a),0,1);return r*r*(3-2*r)},By=a=>1-Math.pow(1-a,3),Lo=(a,e,n)=>a.map((r,o)=>r+(e[o]-r)*n),Hy=a=>a-Math.PI*2*Math.floor((a+Math.PI)/(Math.PI*2)),x4=(a,e)=>{try{const n=document.createElement("canvas").getContext("2d");if(!n)return e;n.fillStyle="#000000",n.fillStyle=a;const r=n.fillStyle;if(r.startsWith("#")){const c=parseInt(r.slice(1),16);return[(c>>16&255)/255,(c>>8&255)/255,(c&255)/255]}const o=r.match(/[\d.]+/g);return!o||o.length<3?e:[Number(o[0])/255,Number(o[1])/255,Number(o[2])/255]}catch{return e}},_4=a=>a<=.04045?a/12.92:Math.pow((a+.055)/1.055,2.4),y4=a=>a<=.0031308?a*12.92:1.055*Math.pow(a,1/2.4)-.055,cc=a=>{const[e,n,r]=a.map(_4),o=Math.cbrt(.4122214708*e+.5363325363*n+.0514459929*r),c=Math.cbrt(.2119034982*e+.6806995451*n+.1073969566*r),u=Math.cbrt(.0883024619*e+.2817188376*n+.6299787005*r);return[.2104542553*o+.793617785*c-.0040720468*u,1.9779984951*o-2.428592205*c+.4505937099*u,.0259040371*o+.7827717662*c-.808675766*u]},N0=([a,e,n])=>{const r=Math.pow(a+.3963377774*e+.2158037573*n,3),o=Math.pow(a-.1055613458*e-.0638541728*n,3),c=Math.pow(a-.0894841775*e-1.291485548*n,3);return[4.0767416621*r-3.3077115913*o+.2309699292*c,-1.2684380046*r+2.6097574011*o-.3413193965*c,-.0041960863*r-.7034186147*o+1.707614701*c].map(u=>Rn(y4(Rn(u,0,1)),0,1))},Gy=(a,e,n)=>N0(Lo(cc(a),cc(e),n)),Co=(a,e,n,r)=>{const[o,c,u]=cc(a),d=Math.hypot(c,u)*r,p=Math.atan2(u,c)+e*Math.PI/180;return N0([Rn(o+n,0,1),d*Math.cos(p),d*Math.sin(p)])},ha=(a,e,n,r)=>{const[,o,c]=cc(a),u=Math.max(Math.hypot(o,c)*r,.02),d=Math.atan2(c,o)+e*Math.PI/180;return N0([Rn(n,0,1),u*Math.cos(d),u*Math.sin(d)])},S4=(a,e)=>{if(e){const n=ha(a,0,Math.min(cc(a)[0],.62),1.15);return{rim:n,rimHot:n,rimMid:n,rimDeep:ha(a,0,.72,.8),spark:ha(a,0,.6,1.2),sparkGlow:ha(a,0,.78,.8),haze:ha(a,0,.8,.6),edge:ha(a,0,.72,.8),tones:[ha(a,0,.56,1.1),ha(a,16,.6,1.05),ha(a,-16,.5,1.1),ha(a,0,.66,.9),ha(a,0,.74,.7)]}}return{rim:a,rimHot:Lo(a,lf,.72),rimMid:Lo(a,om,.15),rimDeep:Lo(a,om,.45),spark:Lo(a,lf,.45),sparkGlow:Co(a,0,-.15,1),haze:Lo(a,om,.6),edge:Co(a,0,-.3,.9),tones:[Co(a,0,-.06,1),Co(a,16,-.02,1),Co(a,-16,-.12,1.05),Co(Gy(a,lf,.25),0,.04,1),Gy(a,lf,.7)]}},L0=a=>{let e=a>>>0;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}},M4=()=>{const a=L0(99),e=[[6,12,.6,1.6],[18,34,1.5,3.5],[40,70,3,7],[80,130,6,12]],n={harmonics:[],rates:[],phases:[],flareHarmonics:[],flareRates:[],flarePhases:[]};for(let r=0;r<aM;r++){e.forEach(([c,u,d,p])=>{n.harmonics.push(Math.round(c+a()*(u-c))),n.rates.push((d+a()*(p-d))*(a()<.5?-1:1)),n.phases.push(a()*Math.PI*2)});for(let c=0;c<3;c++)n.flareHarmonics.push(4+Math.floor(a()*6)),n.flareRates.push((.4+a()*.8)*(a()<.5?-1:1)),n.flarePhases.push(a()*Math.PI*2);const o=r===0;n.flareHarmonics.push(o?.75:.95+a()*.3),n.flareRates.push(o?1.15:.8+a()*.2),n.flarePhases.push(o?1:.7+a()*.25)}return n},E4=a=>{const e=L0(1337),n=Math.max(1,Math.ceil(a/Zr)),r=new Float32Array(Zr*n*4),o=new Float32Array(Zr*n*4);let c=0,u=0;for(;c<a&&u<a*80;){u++;let d,p,m;if(e()<.28){const g=e()*Math.PI*2,v=.87+Math.sqrt(e())*.105;if(d=Math.cos(g)*v,p=Math.sin(g)*v,e()>lr(-.6,.3,-p))continue;const _=e();m=_<.5?3:_<.8?2:1}else{d=e()*2-1,p=e()*2-1;const g=Math.hypot(d,p);if(g>.975)continue;const v=Math.pow(lr(-.25,.85,-p),1.3),_=lr(.66,.96,g)*lr(-.7,.3,-p),E=Math.max(v,_*.9);if(e()>.012+.988*E)continue;if(E<.12)m=4;else{const C=e();m=C<.32?0:C<.52?1:C<.8?2:3}}const x=Math.sqrt(Math.max(0,.95-d*d-p*p));r[c*4]=d,r[c*4+1]=p,r[c*4+2]=(e()*2-1)*x,r[c*4+3]=m,o[c*4]=m===4?1.8:e()<.22?2.1:1.3,o[c*4+1]=e(),o[c*4+2]=2.5+e()*3.5,o[c*4+3]=.16+e()*.26,c++}return{home:r,seed:o,count:c,rows:n}},lm=`#version 300 es
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`,U0=`
uint scramble(uint v) {
  v = v * 747796405u + 2891336453u;
  uint w = ((v >> ((v >> 28u) + 4u)) ^ v) * 277803737u;
  return (w >> 22u) ^ w;
}

float random(uint v) {
  return float(scramble(v)) * (1.0 / 4294967295.0);
}
`,rM=`
uniform float uDustTime;
uniform vec2 uTurn;
uniform float uMotion;
uniform float uFill;

vec3 settle(vec3 p, out float spread) {
  float bend = exp2((0.5 - uFill) * 1.8);
  float h = clamp((p.y + 1.0) * 0.5, 0.0, 1.0);
  float y = 2.0 * pow(h, bend) - 1.0;
  float from = sqrt(max(1.0 - p.y * p.y, 1e-4));
  float to = sqrt(max(1.0 - y * y, 0.0));
  spread = clamp(bend * pow(max(h, 1e-3), bend - 1.0) * to / from, 0.25, 1.0);
  return vec3(p.xz * (to / from), y).xzy;
}

vec3 drift(vec4 home, vec4 seed, uint id, out float life, out float spread) {
  vec3 p = settle(home.xyz, spread);
  float t = uDustTime;
  float u = fract(t / seed.z + seed.y);
  life = sin(3.14159265 * u);
  float travel = seed.w;
  if (uMotion < 0.5) {
    p.y += travel * (u - 0.5);
  } else if (uMotion < 1.5) {
    p.y -= travel * (u - 0.5);
  } else if (uMotion < 2.5) {
    p += 0.045 * vec3(
      sin(t * 0.37 + seed.y * 17.0) + 0.5 * sin(t * 0.83 + seed.z * 5.0),
      sin(t * 0.29 + seed.z * 11.0) + 0.5 * sin(t * 0.61 + seed.w * 7.0),
      sin(t * 0.33 + seed.w * 23.0)
    );
  } else {
    float loop = t * (0.6 + 0.9 * random(id * 7u + 3u)) * (random(id * 7u + 10u) < 0.5 ? -1.0 : 1.0) + seed.y * 6.2831853;
    p.xy += (0.025 + 0.05 * random(id * 7u + 16u)) * vec2(cos(loop), sin(loop));
  }
  float wobble = 0.002 + 0.006 * random(id * 7u + 1u);
  float w1 = 0.8 + 2.4 * random(id * 7u + 2u);
  float w2 = 0.8 + 2.4 * random(id * 7u + 4u);
  p += wobble * vec3(sin(t * w1 + seed.y * 40.0), cos(t * w2 + seed.z * 30.0), sin(t * (w1 + w2) * 0.5 + seed.w * 20.0));
  float cy = cos(uTurn.x);
  float sy = sin(uTurn.x);
  p.xz = mat2(cy, -sy, sy, cy) * p.xz;
  float cx = cos(uTurn.y);
  float sx = sin(uTurn.y);
  p.yz = mat2(cx, -sx, sx, cx) * p.yz;
  return p;
}
`,b4=`#version 300 es
precision highp float;

uniform vec2 uCenter;
uniform float uRadius;
uniform float uDpr;
uniform float uLine;
uniform float uTime;
uniform float uFrame;
uniform float uBins;
uniform float uStrands;
uniform float uCrackle;
uniform float uFlares;
uniform float uGlow;
uniform float uHaze;
uniform float uFill;
uniform float uPresence;
uniform float uUnfold;
uniform float uBloom;
uniform float uInside;
uniform float uEncode;
uniform vec3 uRim;
uniform vec3 uRimHot;
uniform vec3 uRimMid;
uniform vec3 uRimDeep;
uniform vec3 uSpark;
uniform vec3 uSparkGlow;
uniform vec3 uHazeColor;
uniform vec3 uEdgeColor;
uniform vec4 uHeat;
uniform vec4 uHarmonics[8];
uniform vec4 uRates[8];
uniform vec4 uPhases[8];
uniform vec4 uFlareHarmonics[8];
uniform vec4 uFlareRates[8];
uniform vec4 uFlarePhases[8];
uniform vec4 uArcs[4];

out vec4 fragColor;
${U0}
const float PI = 3.14159265;
const float TAU = 6.28318531;
const vec4 AMPS = vec4(0.35, 0.3, 0.22, 0.13);

float bell(float d, float w) {
  float x = d / w;
  return exp(-x * x);
}

float segment(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-5), 0.0, 1.0);
  return length(pa - ba * h);
}

float pool(vec2 q) {
  float t = length(q - vec2(0.0, mix(-1.0, -0.66, uFill))) / mix(0.8, 1.35, uFill);
  return t < 0.6 ? mix(0.5, 0.22, t / 0.6) : mix(0.22, 0.0, clamp((t - 0.6) / 0.4, 0.0, 1.0));
}

void main() {
  vec2 p = gl_FragCoord.xy / uDpr - uCenter;
  float r = length(p);
  float R = uRadius;
  float theta = atan(p.y, p.x);
  float lift = p.y / max(r, 1e-3);
  float topDim = 1.0 - 0.35 * pow(max(lift, 0.0), 1.5);
  vec3 col = vec3(0.0);
  float hot = 0.0;
  uint frame = uint(uFrame);

  if (r < R) {
    vec2 q = p / R;
    float chord = sqrt(max(1.0 - dot(q, q), 0.0));
    float haze = pool(q) * (0.55 + 0.45 * chord);
    col += uHazeColor * haze * uHaze * uInside;
    float e = length(q - vec2(0.0, 0.2)) / 1.2;
    float edge = 0.5 * pow(smoothstep(0.62, 1.0, e), 1.4);
    col += uEdgeColor * edge * uInside * (0.5 + 0.5 * uHaze);
  }

  float dr = r - R;
  float halo = 1.0 - smoothstep(R * 0.05, R * 0.105, abs(dr - R * 0.0213));
  col += uRimDeep * 0.18 * halo * topDim * uGlow * uBloom;
  col += uRim * 0.12 * bell(dr + R * 0.0383, R * 0.032) * uGlow * uBloom;
  col += uRim * 0.32 * bell(dr, max(R * 0.0117, uLine)) * uPresence * uUnfold;

  float delta = mod(theta - uHeat.x + PI, TAU) - PI;
  float heat = uHeat.z * uHeat.y * exp(-delta * delta / 0.3);
  float crackle = uCrackle + heat * 0.9;
  float amp = R * 0.016 * (0.3 + 1.4 * crackle) * uUnfold;
  float jitterAmp = R * 0.0048 * (0.3 + 1.4 * uCrackle) * uUnfold * (1.0 + heat * 0.3);
  float flareAmp = R * 0.064 * (0.4 + 1.2 * crackle) * uFlares * 1.6 * uUnfold;

  if (abs(dr) < amp * 2.0 + flareAmp + R * 0.3) {
    float step = TAU / uBins;
    float binPos = (theta + PI) / step;
    float bin0 = floor(binPos);
    float binF = binPos - bin0;
    float th0 = bin0 * step - PI;
    float th1 = th0 + step;
    uint b0 = uint(mod(bin0, uBins));
    uint b1 = uint(mod(bin0 + 1.0, uBins));
    float gain = min(1.0, 2.4 / max(uStrands, 1.0));
    for (int k = 0; k < 8; k++) {
      if (float(k) >= uStrands) break;
      vec4 m = uHarmonics[k];
      vec4 lead = uRates[k] * uTime + uPhases[k];
      float wave0 = dot(AMPS, sin(m * th0 + lead));
      float wave1 = dot(AMPS, sin(m * th1 + lead));
      uint salt = uint(k) * 1013u + frame * 7919u;
      vec4 shape = uFlareHarmonics[k];
      vec4 look = uFlareRates[k];
      vec4 tone = uFlarePhases[k];
      float a = amp * shape.w;
      float off0 = a * wave0 + jitterAmp * (random(b0 + salt) - 0.5);
      float off1 = a * wave1 + jitterAmp * (random(b1 + salt) - 0.5);
      float rc = R + mix(off0, off1, binF);
      float grade = (off1 - off0) / (step * max(r, 1.0));
      float d = abs(r - rc) * inversesqrt(1.0 + grade * grade);
      float swell = 0.8 + 0.4 * (0.5 + 0.5 * sin(3.0 * theta + uTime * 0.7 + tone.x * 1.7));
      float width = uLine * look.w * swell * (1.0 + heat * 0.25);
      float core = exp(-d * d / (width * width));
      float sheath = exp(-d * d / (width * width * 3.0));
      float bright = tone.w * (1.0 + heat * 0.45) * uPresence;
      col += (uRimHot * core * 0.8 + uRim * sheath * 0.32) * bright;
      hot += core * bright;
      vec3 fargs = shape.xyz * theta + look.xyz * uTime + tone.xyz;
      float flare = max(0.0, (sin(fargs.x) + sin(fargs.y) + sin(fargs.z)) / 3.0);
      flare = (flare * flare + heat * 0.35) * flareAmp;
      float dw = abs(r - rc - flare);
      float dm = abs(r - rc - flare * 0.6);
      float dn = abs(r - rc - flare * 0.25);
      vec3 glow = uRimDeep * (0.07 * bell(dw, R * 0.09) + 0.16 * bell(dw, R * 0.05));
      glow += uRimMid * 0.28 * bell(dm, R * 0.027) + uRim * 0.38 * bell(dn, R * 0.013);
      col += glow * gain * topDim * uGlow * uBloom * (1.0 + heat * 1.4);
    }
  }

  for (int i = 0; i < 4; i++) {
    vec4 arc = uArcs[i];
    if (arc.w <= 0.002) continue;
    float mid = arc.x + arc.y * 0.5;
    vec2 center = R * 0.93 * vec2(cos(mid), sin(mid));
    if (distance(p, center) > R * (abs(arc.y) * 0.6 + 0.1) + 12.0) continue;
    float ar = R * 0.955;
    vec2 a0 = ar * vec2(cos(arc.x), sin(arc.x));
    vec2 a2 = ar * vec2(cos(arc.x + arc.y), sin(arc.x + arc.y));
    vec2 a1 = R * (0.955 - arc.z) * vec2(cos(mid), sin(mid));
    float dmin = 1e5;
    float along = 0.0;
    vec2 prev = a0;
    for (int s = 1; s <= 10; s++) {
      float u = float(s) / 10.0;
      vec2 b = mix(mix(a0, a1, u), mix(a1, a2, u), u);
      vec2 pa = p - prev;
      vec2 ba = b - prev;
      float h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-5), 0.0, 1.0);
      float dist = length(pa - ba * h);
      if (dist < dmin) {
        dmin = dist;
        along = (float(s) - 1.0 + h) / 10.0;
      }
      prev = b;
    }
    float taper = sqrt(max(sin(PI * along), 0.0));
    float arcWidth = uLine * (0.55 + 0.6 * taper);
    float arcCore = exp(-dmin * dmin / (arcWidth * arcWidth));
    float arcGlow = exp(-dmin * dmin / (arcWidth * arcWidth * 12.0));
    col += (uSpark * 0.95 * arcCore + uSparkGlow * 0.4 * arcGlow) * arc.w * taper;
    hot += arcCore * arc.w * taper * 0.6;
  }

  fragColor = vec4(col, hot) * uEncode;
}
`,T4=`#version 300 es
precision highp float;

in float aIndex;

uniform sampler2D tHome;
uniform sampler2D tSeed;
uniform sampler2D tOffset;
uniform float uStirred;
uniform vec2 uCenter;
uniform vec2 uViewport;
uniform float uRadius;
uniform float uDpr;
uniform float uDepth;
uniform float uTwinkle;
uniform float uPointScale;
uniform float uReveal;
uniform float uEncode;
uniform vec3 uTones[5];
uniform vec3 uRimTone;

out vec3 vColor;
out float vSize;
${U0}
${rM}
void main() {
  ivec2 cell = ivec2(int(mod(aIndex, ${Zr}.0)), int(floor(aIndex / ${Zr}.0)));
  uint id = uint(aIndex);
  vec4 home = texelFetch(tHome, cell, 0);
  vec4 seed = texelFetch(tSeed, cell, 0);
  float life;
  float spread;
  vec3 p = drift(home, seed, id, life, spread);
  if (uStirred > 0.5) p += texelFetch(tOffset, cell, 0).xyz;
  float len = length(p);
  float inside = 1.0 - smoothstep(0.955, 0.985, length(p.xy));
  if (len > 0.975) p *= 0.975 / len;

  float front = p.z * 0.5 + 0.5;
  float depthSize = mix(1.0, 0.7 + 0.6 * front, uDepth);
  float depthLight = mix(1.0, 0.35 + 0.8 * front, uDepth);
  float blink = sin(uDustTime * (2.0 + 6.0 * random(id * 7u + 5u)) + random(id * 7u + 6u) * 6.2831853);
  float twinkle = mix(1.0, smoothstep(-0.9, -0.6, blink), uTwinkle);
  float fade = smoothstep(0.04, 0.12, life);
  float order = (home.y + 1.0) * 0.5 * 0.55 + random(id * 7u + 8u) * 0.25;
  float reveal = smoothstep(order, order + 0.2, uReveal * 1.0);
  float alpha = random(id * 7u + 9u) < 0.5 || home.w > 3.5 ? 1.0 : 0.6;

  float size = seed.x * uPointScale * (0.35 + 0.95 * life) * depthSize * mix(0.5, 1.0, reveal);
  vec2 screen = uCenter + p.xy * uRadius;
  gl_Position = vec4(screen / uViewport * 2.0 - 1.0, 0.0, 1.0);
  float px = size * uDpr;
  gl_PointSize = px + 2.0;
  vSize = px;

  int tone = int(home.w + 0.5);
  float rimLit = smoothstep(0.8, 0.97, length(p.xy));
  vec3 color = uTones[tone] + uRimTone * rimLit * rimLit * 0.12;
  vColor = color * alpha * fade * twinkle * depthLight * reveal * inside * sqrt(spread) * uEncode;
}
`,A4=`#version 300 es
precision highp float;

uniform float uShape;

in vec3 vColor;
in float vSize;

out vec4 fragColor;

void main() {
  vec2 q = (gl_PointCoord - 0.5) * (vSize + 2.0);
  float half_ = max(vSize * 0.5, 0.5);
  float cover;
  if (uShape < 0.5) {
    vec2 c = clamp(half_ - abs(q) + 0.5, 0.0, 1.0);
    cover = c.x * c.y;
  } else {
    cover = clamp(half_ - length(q) + 0.5, 0.0, 1.0);
  }
  if (cover <= 0.0) discard;
  fragColor = vec4(vColor * cover, 0.0);
}
`,w4=`#version 300 es
precision highp float;

uniform sampler2D tHome;
uniform sampler2D tSeed;
uniform sampler2D tOffset;
uniform sampler2D tVelocity;
uniform float uDt;
uniform float uReset;
uniform vec4 uBrush;
uniform float uBrushPower;
uniform vec4 uKick;

layout(location = 0) out vec4 outOffset;
layout(location = 1) out vec4 outVelocity;
${U0}
${rM}
vec3 swirl(vec3 p) {
  float t = uDustTime * 0.15;
  vec3 a = vec3(1.7, 1.9, 1.5) * p.yzx + vec3(t, 1.2, 2.1);
  vec3 b = vec3(2.3, 2.1, 2.7) * p.zxy + vec3(0.4, t * 1.3, 0.9);
  vec3 ca = cos(a) * vec3(1.7, 1.9, 1.5);
  vec3 cb = cos(b) * vec3(2.3, 2.1, 2.7);
  return vec3(ca.z - cb.x, cb.y - ca.x, ca.y - cb.z);
}

void main() {
  ivec2 cell = ivec2(gl_FragCoord.xy);
  if (uReset > 0.5) {
    outOffset = vec4(0.0);
    outVelocity = vec4(0.0);
    return;
  }
  uint id = uint(cell.y * ${Zr} + cell.x);
  vec4 home = texelFetch(tHome, cell, 0);
  vec4 seed = texelFetch(tSeed, cell, 0);
  vec3 o = texelFetch(tOffset, cell, 0).xyz;
  vec3 v = texelFetch(tVelocity, cell, 0).xyz;
  float life;
  float spread;
  vec3 base = drift(home, seed, id, life, spread);
  vec3 p = base + o;

  float k = mix(0.8, 2.2, random(id * 7u + 11u));
  vec3 acc = -k * o - 1.5 * sqrt(k) * v;

  vec2 gap = p.xy - uBrush.xy;
  float touch = exp(-dot(gap, gap) / 0.07) * uBrushPower;
  acc += (vec3(uBrush.zw, 0.0) - v) * touch * 14.0;
  float pace = length(v);
  if (pace > 1e-4) {
    vec3 heading = v / pace;
    vec3 curl = swirl(p * 1.6);
    acc += (curl - heading * dot(curl, heading)) * min(pace, 2.0) * 1.8;
  }

  if (uKick.z > 0.0) {
    vec3 jolt = vec3(random(id * 7u + 12u), random(id * 7u + 13u), random(id * 7u + 14u)) - 0.5;
    float near = exp(-dot(p.xy - uKick.xy, p.xy - uKick.xy) / 0.4);
    vec3 spinKick = vec3(-p.z, 0.0, p.x) * 0.9;
    vec3 lift = vec3(0.0, 0.5 + 0.8 * random(id * 7u + 15u), 0.0) * (0.3 + 0.7 * smoothstep(0.2, -0.8, p.y));
    v += (jolt * 0.8 + spinKick + lift) * uKick.z * (0.4 + 0.45 * near);
  }

  v += acc * uDt;
  o += v * uDt;
  vec3 q = base + o;
  float len = length(q);
  if (len > 0.97) {
    vec3 n = q / len;
    o -= n * (len - 0.97);
    v -= n * max(dot(v, n), 0.0) * 1.5;
  }
  outOffset = vec4(o, 1.0);
  outVelocity = vec4(v, 1.0);
}
`,R4=`#version 300 es
precision highp float;

uniform sampler2D tScene;
uniform float uLight;
uniform float uDecode;

in vec2 vUv;
out vec4 fragColor;

vec3 soften(vec3 x) {
  vec3 over = max(x - 0.6, 0.0);
  return min(x, 0.6) + 0.4 * (1.0 - exp(-over / 0.4));
}

void main() {
  vec4 scene = texture(tScene, vUv) * uDecode;
  vec3 light = max(scene.rgb, 0.0);
  float peak = max(light.r, max(light.g, light.b));
  if (uLight > 0.5) {
    vec3 hue = light / max(peak, 1e-4);
    float cover = 1.0 - exp(-peak * 2.4);
    vec3 ink = hue * mix(0.92, 0.72, cover);
    float core = clamp(scene.a * 0.7, 0.0, 1.0) * cover;
    vec3 tint = mix(vec3(1.0), hue, 0.22);
    fragColor = vec4(tint * core + ink * cover * (1.0 - core), core + cover * (1.0 - core));
    return;
  }
  light += vec3(max(peak - 1.8, 0.0) * 0.25);
  vec3 shown = soften(light);
  fragColor = vec4(shown, max(shown.r, max(shown.g, shown.b)));
}
`,C4=({preset:a="plasma",color:e,theme:n="dark",size:r=.7,strands:o,crackle:c,flares:u,glow:d,sparks:p,particleCount:m,fill:x,motion:g,particleShape:v,depth:_,sway:E,twinkle:C,haze:y,speed:M=1,dustSpeed:U,interactive:B=!0,hoverStrength:R=.7,intro:O=!0,paused:P=!1,className:F="",style:w})=>{const T=zt.useRef(null),H=zt.useRef(null),V=zt.useRef(null),ee=zy[a]||zy.plasma,I=(W,$)=>W??ee[$],Q=I(e,"color"),ae=zt.useMemo(()=>{const W=n==="light";return{light:W,palette:S4(x4(Q,[.95,.36,.82]),W)}},[Q,n]);return zt.useEffect(()=>{H.current={...ae,size:r,strands:I(o,"strands"),crackle:I(c,"crackle"),flares:I(u,"flares"),glow:I(d,"glow"),sparks:I(p,"sparks"),particleCount:I(m,"particleCount"),fill:I(x,"fill"),motion:I(g,"motion"),particleShape:I(v,"particleShape"),depth:I(_,"depth"),sway:I(E,"sway"),twinkle:I(C,"twinkle"),haze:I(y,"haze"),dustSpeed:I(U,"dustSpeed"),speed:M,interactive:B,hoverStrength:R,intro:O,paused:P},V.current?.()}),zt.useEffect(()=>{const W=T.current;if(!W)return;const $=new hN({alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1}),D=$.gl;if(!$.isWebgl2){D.getExtension("WEBGL_lose_context")?.loseContext();return}const le=D.canvas;le.style.display="block",le.style.width="100%",le.style.height="100%",le.setAttribute("aria-hidden","true"),W.appendChild(le);const me=!!D.getExtension("EXT_color_buffer_float"),Te=me||!!D.getExtension("EXT_color_buffer_half_float"),rt=Te?1:.25,je=new f4(D),G=new wf(D),J=M4(),Ke=new Iy(D,{width:1,height:1,depth:!1,type:Te?D.HALF_FLOAT:D.UNSIGNED_BYTE,format:D.RGBA,internalFormat:Te?D.RGBA16F:D.RGBA,minFilter:D.NEAREST,magFilter:D.NEAREST}),ie=new Array(sm*4).fill(0),ne={uCenter:{value:[0,0]},uRadius:{value:1},uDpr:{value:1},uLine:{value:.6},uTime:{value:0},uFrame:{value:0},uBins:{value:420},uStrands:{value:5},uCrackle:{value:.6},uFlares:{value:.5},uGlow:{value:.8},uHaze:{value:.7},uFill:{value:.5},uPresence:{value:0},uUnfold:{value:0},uBloom:{value:0},uInside:{value:0},uEncode:{value:rt},uRim:{value:[1,1,1]},uRimHot:{value:[1,1,1]},uRimMid:{value:[1,1,1]},uRimDeep:{value:[1,1,1]},uSpark:{value:[1,1,1]},uSparkGlow:{value:[1,1,1]},uHazeColor:{value:[0,0,0]},uEdgeColor:{value:[0,0,0]},uHeat:{value:[0,0,0,0]},uHarmonics:{value:J.harmonics},uRates:{value:J.rates},uPhases:{value:J.phases},uFlareHarmonics:{value:J.flareHarmonics},uFlareRates:{value:J.flareRates},uFlarePhases:{value:J.flarePhases},uArcs:{value:ie}},xe={uDustTime:{value:0},uTurn:{value:[0,0]},uMotion:{value:0},uFill:ne.uFill,tHome:{value:G},tSeed:{value:G}},Ue={...xe,tOffset:{value:G},uStirred:{value:0},uCenter:ne.uCenter,uViewport:{value:[1,1]},uRadius:ne.uRadius,uDpr:ne.uDpr,uDepth:{value:.6},uTwinkle:{value:.5},uPointScale:{value:1},uReveal:{value:0},uEncode:{value:rt},uTones:{value:new Array(15).fill(1)},uRimTone:{value:[1,1,1]},uShape:{value:0}},ye={...xe,tOffset:{value:G},tVelocity:{value:G},uDt:{value:.016},uReset:{value:1},uBrush:{value:[0,0,0,0]},uBrushPower:{value:0},uKick:{value:[0,0,0,0]}},we={tScene:{value:Ke.texture},uLight:{value:0},uDecode:{value:1/rt}},_t=Ht=>(Ht.setBlendFunc(D.ONE,D.ONE),Ht),Ae=new of(D,{geometry:je,program:_t(new sf(D,{vertex:lm,fragment:b4,uniforms:ne,transparent:!0,depthTest:!1,depthWrite:!1}))}),Fe=_t(new sf(D,{vertex:T4,fragment:A4,uniforms:Ue,transparent:!0,depthTest:!1,depthWrite:!1})),ue=Te?new of(D,{geometry:je,program:new sf(D,{vertex:lm,fragment:w4,uniforms:ye,depthTest:!1,depthWrite:!1})}):null,Oe=new of(D,{geometry:je,program:new sf(D,{vertex:lm,fragment:R4,uniforms:we,depthTest:!1,depthWrite:!1})}),He=Ht=>{Ht&&(D.deleteFramebuffer(Ht.buffer),Ht.textures.forEach(Et=>D.deleteTexture(Et.texture)))},vt=Ht=>new Iy(D,{width:Zr,height:Ht,color:2,depth:!1,type:me?D.FLOAT:D.HALF_FLOAT,format:D.RGBA,internalFormat:me?D.RGBA32F:D.RGBA16F,minFilter:D.NEAREST,magFilter:D.NEAREST}),mt=(Ht,Et)=>new wf(D,{image:Ht,width:Zr,height:Et,type:D.FLOAT,format:D.RGBA,internalFormat:D.RGBA32F,minFilter:D.NEAREST,magFilter:D.NEAREST,generateMipmaps:!1,flipY:!1});let Je=null;const Tt=()=>{Je&&(Je.mesh.geometry.remove(),D.deleteTexture(Je.home.texture),D.deleteTexture(Je.seed.texture),He(Je.read),He(Je.write),Je=null)},j=()=>{!ue||!Je||!Je.read||!Je.write||(ye.tOffset.value=G,ye.tVelocity.value=G,ye.uReset.value=1,$.render({scene:ue,target:Je.read,clear:!1}),$.render({scene:ue,target:Je.write,clear:!1}),ye.uReset.value=0)},nt=Ht=>{const Et=Rn(Math.round(Ht/100)*100,0,p4);if(Je&&Je.requested===Et)return;if(Tt(),!Et){Je=null;return}const Ot=E4(Et),An=new Float32Array(Ot.count);for(let Pe=0;Pe<Ot.count;Pe++)An[Pe]=Pe;const Ne=new eM(D,{aIndex:{size:1,data:An}});Je={requested:Et,rows:Ot.rows,home:mt(Ot.home,Ot.rows),seed:mt(Ot.seed,Ot.rows),mesh:new of(D,{mode:D.POINTS,geometry:Ne,program:Fe}),read:ue?vt(Ot.rows):null,write:ue?vt(Ot.rows):null},xe.tHome.value=Je.home,xe.tSeed.value=Je.seed,j(),Ie=0},ze=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,L=L0(913);let b=1,q=1,z=0,_e=performance.now(),Ce=0,te=0,Z=0,K=0,ce=!0,Be=!0,Le=0,Ie=0,Qe=0,st=null,dt=.3;const X=[],Ge={x:0,y:0,inside:!1,fresh:!0},Me={angle:0,velocity:0,power:0,near:0},qe={x:0,y:0,vx:0,vy:0},et={x:0,y:0,vx:0,vy:0},Ye=()=>{b=Math.max(1,W.clientWidth),q=Math.max(1,W.clientHeight),$.dpr=Math.min(window.devicePixelRatio||1,2,Math.sqrt(m4/(b*q))),$.setSize(b,q),Ke.setSize(D.canvas.width,D.canvas.height),Pt()},St=(Ht,Et)=>{X.length>=sm||X.push({start:Ht,span:(.05+L()*.07)*(L()<.5?-1:1),curl:.02+L()*.04,life:0,duration:.2+L()*.2,drift:(L()-.5)*.3,strength:Et})},ft=Ht=>{if(z=0,!Be)return;const Et=H.current,Ot=Math.min(.05,Math.max(1/240,(Ht-_e)/1e3));if(_e=Ht,!Et)return;const An=!Et.paused&&!ze;K=Et.intro&&!ze?Math.min(1,K+Ot/g4):1;const Ne=By(lr(0,.42,K)),Pe=By(lr(0,.32,K)),Ve=Math.sin(Math.PI*lr(.22,.78,K))*.35,tt=Math.max(8,Rn(Et.size,.1,1.5)*Math.min(b,q)/2),ct=Et.interactive&&!ze?Rn(Et.hoverStrength,0,1):0,at=Ge.x-b/2,Ct=q/2-Ge.y,wt=Math.hypot(at,Ct),Ee=Ge.inside?ct:0;Me.power<.02&&(Me.angle=Math.atan2(Ct,at),Me.velocity=0);const ht=Hy(Math.atan2(Ct,at)-Me.angle);Me.velocity+=(120*ht-19*Me.velocity)*Ot,Me.angle=Hy(Me.angle+Me.velocity*Ot),Me.power+=(Ee-Me.power)*(1-Math.exp(-Ot/(Ee>Me.power?.3:.55)));const lt=Math.exp(-Math.pow((wt-tt)/(tt*.45),2));Me.near+=(lt-Me.near)*(1-Math.exp(-Ot/.15)),Le*=Math.exp(-Ot/.7);const A=at/tt,k=Ct/tt;Math.hypot(A-qe.x,k-qe.y)>.6&&(Ge.fresh=!0),Ge.fresh&&(qe.x=A,qe.y=k,qe.vx=0,qe.vy=0,Ge.fresh=!1);const re=1-Math.exp(-Ot/.05);qe.vx+=((A-qe.x)/Ot-qe.vx)*re,qe.vy+=((k-qe.y)/Ot-qe.vy)*re,qe.x=A,qe.y=k;const fe=Math.hypot(qe.vx,qe.vy),he=fe>4?4/fe:1,We=Math.exp(-Math.max(0,Math.hypot(A,k)-1)*6),ot=Ge.inside?ct*We*Ne:0;if(Qe=Qe*Math.exp(-Ot/1.2)+ot*Math.min(fe,4)*Ot,An){const Dt=1+Le*.6+Me.power*Me.near*.3,Ut=Ot*Math.max(0,Et.speed)*2*Dt;Ce+=Ut,te+=Ot*Math.max(0,Et.dustSpeed)*(1+Le*.4),Z+=Ot*Math.max(0,Et.dustSpeed);const on=Rn(Et.crackle+Le*.5,0,1.5);if(Et.sparks>.01&&K>.55&&(dt-=Ut*Et.sparks*2*(.6+on*.6),dt<=0)){const ut=Me.power*Me.near,Wt=L()<ut*.7?Me.angle+(L()-.5)*.8:L()<.7?Math.PI/2+(L()-.5)*1.5:L()*Math.PI*2;St(Wt,.8+ut*.6+Le*.4),dt=.15+L()*.6}for(let ut=X.length-1;ut>=0;ut--){const Wt=X[ut];Wt.life+=Ut,Wt.start+=Wt.drift*Ut,Wt.life>=Wt.duration&&X.splice(ut,1)}}else X.length=0;for(let Dt=0;Dt<sm;Dt++){const Ut=X[Dt];ie[Dt*4]=Ut?Ut.start:0,ie[Dt*4+1]=Ut?Ut.span:0,ie[Dt*4+2]=Ut?Ut.curl:0,ie[Dt*4+3]=Ut?Math.sin(Math.PI*Ut.life/Ut.duration)*Ut.strength:0}nt(Et.particleCount);const Ze=Et.palette;ne.uCenter.value=[b/2,q/2],ne.uRadius.value=tt,ne.uDpr.value=$.dpr,ne.uLine.value=Math.max(.6,tt*.0035),ne.uTime.value=Ce,ne.uFrame.value=Math.floor(Ce*24)%1e5,ne.uBins.value=Rn(Math.round(Math.PI*2*tt/2.6),240,900),ne.uStrands.value=Math.round(Rn(Et.strands,1,aM)),ne.uCrackle.value=Rn(Et.crackle,0,1)+Le*.5+Ve,ne.uFlares.value=Rn(Et.flares,0,1),ne.uGlow.value=Rn(Et.glow,0,2)*(1+Le*.5+Ve)*(Et.light?.35:1),ne.uHaze.value=Rn(Et.haze,0,2)*(Et.light?.6:1),ne.uFill.value=Rn(Et.fill,0,1),ne.uPresence.value=Ne,ne.uUnfold.value=Pe,ne.uBloom.value=Ne*Ne,ne.uInside.value=lr(.2,.95,K),ne.uRim.value=Ze.rim,ne.uRimHot.value=Ze.rimHot,ne.uRimMid.value=Ze.rimMid,ne.uRimDeep.value=Ze.rimDeep,ne.uSpark.value=Ze.spark,ne.uSparkGlow.value=Ze.sparkGlow,ne.uHazeColor.value=Ze.haze,ne.uEdgeColor.value=Ze.edge,ne.uHeat.value=[Me.angle,Me.near,Me.power*Ne,0],xe.uDustTime.value=te;const De=Ge.inside?ct*Ne:0,it=Rn(A,-1.6,1.6)*De,pt=Rn(k,-1.6,1.6)*De;et.vx+=(40*(it-et.x)-11*et.vx)*Ot,et.vy+=(40*(pt-et.y)-11*et.vy)*Ot,et.x+=et.vx*Ot,et.y+=et.vy*Ot;const yt=Rn(Et.sway,0,1);xe.uTurn.value=[yt*.42*Math.sin(Z*.23)+et.x*.3,yt*.12*Math.sin(Z*.17+1.3)-et.y*.16],xe.uMotion.value=h4[Et.motion]??0,Ue.uViewport.value=[b,q],Ue.uDepth.value=Rn(Et.depth,0,1),Ue.uTwinkle.value=Rn(Et.twinkle,0,1),Ue.uPointScale.value=Math.max(1,tt/491),Ue.uReveal.value=lr(.18,1,K),Ue.uTones.value=Ze.tones.flat(),Ue.uRimTone.value=Ze.rim,Ue.uShape.value=d4[Et.particleShape]??0;const $e=Je;$e&&ue&&(Qe>.002||st)&&(Ie=v4);let Nt=!1;if($e&&$e.read&&$e.write&&ue&&Ie>0){ye.uDt.value=Math.min(Ot,1/30),ye.uBrush.value=[qe.x,qe.y,qe.vx*he,qe.vy*he],ye.uBrushPower.value=ot,ye.uKick.value=st?[st.x,st.y,st.strength,0]:[0,0,0,0],ye.tOffset.value=$e.read.textures[0],ye.tVelocity.value=$e.read.textures[1],$.render({scene:ue,target:$e.write,clear:!1});const Dt=$e.read;$e.read=$e.write,$e.write=Dt,Ie-=Ot,Nt=Ie>0,Nt||(Ie=0,j())}st=null,Ue.uStirred.value=Nt?1:0,Ue.tOffset.value=$e&&$e.read?$e.read.textures[0]:G,D.clearColor(0,0,0,0),$.render({scene:Ae,target:Ke,clear:!0}),Je&&$.render({scene:Je.mesh,target:Ke,clear:!1}),we.uLight.value=Et.light?1:0,$.render({scene:Oe,clear:!1});const bt=Math.abs(Ee-Me.power)>.002||Le>.002||Ie>0||Math.abs(Me.velocity)>.01||Math.hypot(et.vx,et.vy,et.x-it,et.y-pt)>.001;ce&&(An||K<1||bt)&&(z=requestAnimationFrame(ft))},Pt=()=>{z||!ce||!Be||(_e=performance.now(),z=requestAnimationFrame(ft))},Ft=Ht=>{const Et=W.getBoundingClientRect(),Ot=Ht.clientX-Et.left,An=Ht.clientY-Et.top;return{x:Ot,y:An,inside:Ot>=0&&An>=0&&Ot<=Et.width&&An<=Et.height}},xn=Ht=>{const Et=Ft(Ht);Et.inside&&!Ge.inside&&(Ge.fresh=!0),Ge.x=Et.x,Ge.y=Et.y,Ge.inside=Et.inside,Et.inside&&Pt()},gn=Ht=>{const Et=H.current,Ot=Ft(Ht);if(!Et||!Et.interactive||ze||!Ot.inside)return;Ge.inside||(Ge.fresh=!0),Ge.x=Ot.x,Ge.y=Ot.y,Ge.inside=!0;const An=Math.max(8,Rn(Et.size,.1,1.5)*Math.min(b,q)/2),Ne=(Ot.x-b/2)/An,Pe=(q/2-Ot.y)/An;if(Math.hypot(Ne,Pe)>1.3)return;const tt=Rn(Et.hoverStrength,0,1);st={x:Ne,y:Pe,strength:tt*1.2},Le=Math.max(Le,tt);const ct=Math.atan2(Pe,Ne);St(ct+(L()-.5)*.5,1.3),St(ct+Math.PI+(L()-.5)*1.2,1.1),Pt()},yi=()=>{Ge.inside=!1,Pt()},Si=Ht=>{Ht.relatedTarget||yi()},Wn=Ht=>{Ht.pointerType==="touch"&&yi()},Tn=()=>{document.hidden||Pt()};window.addEventListener("pointermove",xn,{passive:!0}),window.addEventListener("pointerdown",gn,{passive:!0}),window.addEventListener("pointerout",Si,{passive:!0}),window.addEventListener("pointerup",Wn,{passive:!0}),window.addEventListener("blur",yi),document.addEventListener("visibilitychange",Tn);const Gn=new ResizeObserver(Ye);Gn.observe(W);const Yn=new IntersectionObserver(([Ht])=>{ce=Ht.isIntersecting,Pt()});return Yn.observe(W),V.current=Pt,Ye(),()=>{Be=!1,ce=!1,cancelAnimationFrame(z),Gn.disconnect(),Yn.disconnect(),window.removeEventListener("pointermove",xn),window.removeEventListener("pointerdown",gn),window.removeEventListener("pointerout",Si),window.removeEventListener("pointerup",Wn),window.removeEventListener("blur",yi),document.removeEventListener("visibilitychange",Tn),V.current=null,Tt(),He(Ke),D.getExtension("WEBGL_lose_context")?.loseContext(),le.parentNode&&le.parentNode.removeChild(le)}},[]),ve.jsx("div",{ref:T,className:`crystalized-ball ${F}`.trim(),style:w})};function D4(){return ve.jsxs("footer",{className:"footer",children:[ve.jsx("div",{style:{width:"100%",height:"600px",position:"relative"},children:ve.jsx(C4,{preset:"plasma",color:"#F25BD0",size:.7,crackle:.85,fill:.5,interactive:!0,hoverStrength:.7,strands:6,flares:.65,glow:.9,sparks:.6,particleCount:15e3,motion:"rise",particleShape:"square",depth:.6,sway:.5,twinkle:.5,haze:.7,dustSpeed:1,speed:1,intro:!0,paused:!1})}),ve.jsxs("div",{className:"shell footer-inner",children:[ve.jsxs("a",{href:"#top",className:"brand footer-brand",children:[ve.jsx("span",{className:"brand-mark",children:"CB"}),ve.jsx("span",{children:"Chokri Bettaibi"})]}),ve.jsx("p",{children:"Mathématiques · Pédagogie · Développement web"}),ve.jsx("a",{className:"back-top",href:"#top",children:"Retour en haut ↑"}),ve.jsxs("span",{className:"copyright",children:["© ",new Date().getFullYear()," ",hi.name]})]})]})}const N4=`#version 300 es
in vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`,L4=`#version 300 es
precision highp float;
uniform vec2 uView;
uniform vec2 uScale;
uniform float uZoom;
uniform vec2 uTurn;
uniform float uTime;
uniform float uFlow;
uniform float uWarp;
uniform vec3 uSeed;
uniform vec4 uPointer;
uniform vec2 uDrag;
uniform float uUnfold;
uniform float uDither;
out vec4 outColor;

vec4 sigmoid(vec4 x) {
  return 1.0 / (1.0 + exp(-x));
}

vec4 cppn(vec2 coordinate, vec3 latent) {
  vec4 buf[8];
  buf[6]=vec4(coordinate.x,coordinate.y,latent.x,latent.y);
  buf[7]=vec4(latent.z,sqrt(coordinate.x*coordinate.x+coordinate.y*coordinate.y),0.,0.);
  buf[0]=mat4(vec4(6.5404263,-3.6126034,0.7590882,-1.13613),vec4(2.4582713,3.1660357,1.2219609,0.06276096),vec4(-5.478085,-6.159632,1.8701609,-4.7742867),vec4(6.039214,-5.542865,-0.90925294,3.251348))*buf[6]+mat4(vec4(0.8473259,-5.722911,3.975766,1.6522468),vec4(-0.24321538,0.5839259,-1.7661959,-5.350116),vec4(0.,0.,0.,0.),vec4(0.,0.,0.,0.))*buf[7]+vec4(0.21808943,1.1243913,-1.7969975,5.0294676);
  buf[1]=mat4(vec4(-3.3522482,-6.0612736,0.55641043,-4.4719114),vec4(0.8631464,1.7432913,5.643898,1.6106541),vec4(2.4941394,-3.5012043,1.7184316,6.357333),vec4(3.310376,8.209261,1.1355612,-1.165539))*buf[6]+mat4(vec4(5.24046,-13.034365,0.009859298,15.870829),vec4(2.987511,3.129433,-0.89023495,-1.6822904),vec4(0.,0.,0.,0.),vec4(0.,0.,0.,0.))*buf[7]+vec4(-5.9457836,-6.573602,-0.8812491,1.5436668);
  buf[0]=sigmoid(buf[0]);buf[1]=sigmoid(buf[1]);
  buf[2]=mat4(vec4(-15.219568,8.095543,-2.429353,-1.9381982),vec4(-5.951362,4.3115187,2.6393783,1.274315),vec4(-7.3145227,6.7297835,5.2473326,5.9411426),vec4(5.0796127,8.979051,-1.7278991,-1.158976))*buf[6]+mat4(vec4(-11.967154,-11.608155,6.1486754,11.237008),vec4(2.124141,-6.263192,-1.7050359,-0.7021966),vec4(0.,0.,0.,0.),vec4(0.,0.,0.,0.))*buf[7]+vec4(-4.17164,-3.2281182,-4.576417,-3.6401186);
  buf[3]=mat4(vec4(3.1832156,-13.738922,1.879223,3.233465),vec4(0.64300746,12.768129,1.9141049,0.50990224),vec4(-0.049295485,4.4807224,1.4733979,1.801449),vec4(5.0039253,13.000481,3.3991797,-4.5561905))*buf[6]+mat4(vec4(-0.1285731,7.720628,-3.1425676,4.742367),vec4(0.6393625,3.714393,-0.8108378,-0.39174938),vec4(0.,0.,0.,0.),vec4(0.,0.,0.,0.))*buf[7]+vec4(-1.1811101,-21.621881,0.7851888,1.2329718);
  buf[2]=sigmoid(buf[2]);buf[3]=sigmoid(buf[3]);
  buf[4]=mat4(vec4(5.214916,-7.183024,2.7228765,2.6592617),vec4(-5.601878,-25.3591,4.067988,0.4602802),vec4(-10.57759,24.286327,21.102104,37.546658),vec4(4.3024497,-1.9625226,2.3458803,-1.372816))*buf[0]+mat4(vec4(-17.6526,-10.507558,2.2587414,12.462782),vec4(6.265566,-502.75443,-12.642513,0.9112289),vec4(-10.983244,20.741234,-9.701768,-0.7635988),vec4(5.383626,1.4819539,-4.1911616,-4.8444734))*buf[1]+mat4(vec4(12.785233,-16.345072,-0.39901125,1.7955981),vec4(-30.48365,-1.8345358,1.4542528,-1.1118771),vec4(19.872723,-7.337935,-42.941723,-98.52709),vec4(8.337645,-2.7312303,-2.2927687,-36.142323))*buf[2]+mat4(vec4(-16.298317,3.5471997,-0.44300047,-9.444417),vec4(57.5077,-35.609753,16.163465,-4.1534753),vec4(-0.07470326,-3.8656476,-7.0901804,3.1523974),vec4(-12.559385,-7.077619,1.490437,-0.8211543))*buf[3]+vec4(-7.67914,15.927437,1.3207729,-1.6686112);
  buf[5]=mat4(vec4(-1.4109162,-0.372762,-3.770383,-21.367174),vec4(-6.2103205,-9.35908,0.92529047,8.82561),vec4(11.460242,-22.348068,13.625772,-18.693201),vec4(-0.3429052,-3.9905605,-2.4626114,-0.45033523))*buf[0]+mat4(vec4(7.3481627,-4.3661838,-6.3037653,-3.868115),vec4(1.5462853,6.5488915,1.9701879,-0.58291394),vec4(6.5858274,-2.2180402,3.7127688,-1.3730392),vec4(-5.7973905,10.134961,-2.3395722,-5.965605))*buf[1]+mat4(vec4(-2.5132585,-6.6685553,-1.4029363,-0.16285264),vec4(-0.37908727,0.53738135,4.389061,-1.3024765),vec4(-0.70647055,2.0111287,-5.1659346,-3.728635),vec4(-13.562562,10.487719,-0.9173751,-2.6487076))*buf[2]+mat4(vec4(-8.645013,6.5546675,-6.3944063,-5.5933375),vec4(-0.57783127,-1.077275,36.91025,5.736769),vec4(14.283112,3.7146652,7.1452246,-4.5958776),vec4(2.7192075,3.6021907,-4.366337,-2.3653464))*buf[3]+vec4(-5.9000807,-4.329569,1.2427121,8.59503);
  buf[4]=sigmoid(buf[4]);buf[5]=sigmoid(buf[5]);
  buf[6]=mat4(vec4(-1.61102,0.7970257,1.4675229,0.20917463),vec4(-28.793737,-7.1390953,1.5025433,4.656581),vec4(-10.94861,39.66238,0.74318546,-10.095605),vec4(-0.7229728,-1.5483948,0.7301322,2.1687684))*buf[0]+mat4(vec4(3.2547753,21.489103,-1.0194173,-3.3100595),vec4(-3.7316632,-3.3792162,-7.223193,-0.23685838),vec4(13.1804495,0.7916005,5.338587,5.687114),vec4(-4.167605,-17.798311,-6.815736,-1.6451967))*buf[1]+mat4(vec4(0.604885,-7.800309,-7.213122,-2.741014),vec4(-3.522382,-0.12359311,-0.5258442,0.43852118),vec4(9.6752825,-22.853785,2.062431,0.099892326),vec4(-4.3196306,-17.730087,2.5184598,5.30267))*buf[2]+mat4(vec4(-6.545563,-15.790176,-6.0438633,-5.415399),vec4(-43.591583,28.551912,-16.00161,18.84728),vec4(4.212382,8.394307,3.0958717,8.657522),vec4(-5.0237565,-4.450633,-4.4768,-5.5010443))*buf[3]+mat4(vec4(1.6985557,-67.05806,6.897715,1.9004834),vec4(1.8680354,2.3915145,2.5231109,4.081538),vec4(11.158006,1.7294737,2.0738268,7.386411),vec4(-4.256034,-306.24686,8.258898,-17.132736))*buf[4]+mat4(vec4(1.6889864,-4.5852966,3.8534803,-6.3482175),vec4(1.3543309,-1.2640043,9.932754,2.9079645),vec4(-5.2770967,0.07150358,-0.13962056,3.3269649),vec4(28.34703,-4.918278,6.1044083,4.085355))*buf[5]+vec4(6.6818056,12.522166,-3.7075126,-4.104386);
  buf[7]=mat4(vec4(-8.265602,-4.7027016,5.098234,0.7509808),vec4(8.6507845,-17.15949,16.51939,-8.884479),vec4(-4.036479,-2.3946867,-2.6055532,-1.9866527),vec4(-2.2167742,-1.8135649,-5.9759874,4.8846445))*buf[0]+mat4(vec4(6.7790847,3.5076547,-2.8191125,-2.7028968),vec4(-5.743024,-0.27844876,1.4958696,-5.0517144),vec4(13.122226,15.735168,-2.9397483,-4.101023),vec4(-14.375265,-5.030483,-6.2599335,2.9848232))*buf[1]+mat4(vec4(4.0950394,-0.94011575,-5.674733,4.755022),vec4(4.3809423,4.8310084,1.7425908,-3.437416),vec4(2.117492,0.16342592,-104.56341,16.949184),vec4(-5.22543,-2.994248,3.8350096,-1.9364246))*buf[2]+mat4(vec4(-5.900337,1.7946124,-13.604192,-3.8060522),vec4(6.6583457,31.911177,25.164474,91.81147),vec4(11.840538,4.1503043,-0.7314397,6.768467),vec4(-6.3967767,4.034772,6.1714606,-0.32874924))*buf[3]+mat4(vec4(3.4992442,-196.91893,-8.923708,2.8142626),vec4(3.4806502,-3.1846354,5.1725626,5.1804223),vec4(-2.4009497,15.585794,1.2863957,2.0252278),vec4(-71.25271,-62.441242,-8.138444,0.50670296))*buf[4]+mat4(vec4(-12.291733,-11.176166,-7.3474145,4.390294),vec4(10.805477,5.6337385,-0.9385842,-4.7348723),vec4(-12.869276,-7.039391,5.3029537,7.5436664),vec4(1.4593618,8.91898,3.5101583,5.840625))*buf[5]+vec4(2.2415268,-6.705987,-0.98861027,-2.117676);
  buf[6]=sigmoid(buf[6]);buf[7]=sigmoid(buf[7]);
  buf[0]=mat4(vec4(1.6794263,1.3817469,2.9625452,0.),vec4(-1.8834411,-1.4806935,-3.5924516,0.),vec4(-1.3279216,-1.0918057,-2.3124623,0.),vec4(0.2662234,0.23235129,0.44178495,0.))*buf[0]+mat4(vec4(-0.6299101,-0.5945583,-0.9125601,0.),vec4(0.17828953,0.18300213,0.18182953,0.),vec4(-2.96544,-2.5819945,-4.9001055,0.),vec4(1.4195864,1.1868085,2.5176322,0.))*buf[1]+mat4(vec4(-1.2584374,-1.0552157,-2.1688404,0.),vec4(-0.7200217,-0.52666044,-1.438251,0.),vec4(0.15345335,0.15196142,0.272854,0.),vec4(0.945728,0.8861938,1.2766753,0.))*buf[2]+mat4(vec4(-2.4218085,-1.968602,-4.35166,0.),vec4(-22.683098,-18.0544,-41.954372,0.),vec4(0.63792,0.5470648,1.1078634,0.),vec4(-1.5489894,-1.3075932,-2.6444845,0.))*buf[3]+mat4(vec4(-0.49252132,-0.39877754,-0.91366625,0.),vec4(0.95609266,0.7923952,1.640221,0.),vec4(0.30616966,0.15693925,0.8639857,0.),vec4(1.1825981,0.94504964,2.176963,0.))*buf[4]+mat4(vec4(0.35446745,0.3293795,0.59547555,0.),vec4(-0.58784515,-0.48177817,-1.0614829,0.),vec4(2.5271258,1.9991658,4.6846647,0.),vec4(0.13042648,0.08864098,0.30187556,0.))*buf[5]+mat4(vec4(-1.7718065,-1.4033192,-3.3355875,0.),vec4(3.1664357,2.638297,5.378702,0.),vec4(-3.1724713,-2.6107926,-5.549295,0.),vec4(-2.851368,-2.249092,-5.3013067,0.))*buf[6]+mat4(vec4(1.5203838,1.2212278,2.8404984,0.),vec4(1.5210563,1.2651345,2.683903,0.),vec4(2.9789467,2.4364579,5.2347264,0.),vec4(2.2270417,1.8825914,3.8028636,0.))*buf[7]+vec4(-1.5468478,-3.6171484,0.24762098,0.);
  buf[0]=sigmoid(buf[0]);
  return vec4(buf[0].x,buf[0].y,buf[0].z,1.);
}

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

mat2 rotate(float a) {
  float c = cos(a);
  float s = sin(a);
  return mat2(c, s, -s, c);
}

void main() {
  vec2 css = gl_FragCoord.xy * uScale;
  vec2 uv = (css * 2.0 - uView) / uView.y;
  uv.y = -uv.y;
  vec2 anchor = vec2(uView.x / uView.y, -1.0);

  vec2 pointer = vec2(uPointer.x * 2.0 - uView.x, uPointer.y * 2.0 - uView.y) / uView.y;
  vec2 offset = uv - pointer;
  float touch = uPointer.z * exp(-dot(offset, offset) / (uPointer.w * uPointer.w));
  uv = pointer + rotate(touch * 0.6) * offset;
  uv -= uDrag * touch;

  float t = uTime;
  uv = rotate(0.06 * uFlow * sin(t * 0.17)) * uv;
  uv += 0.05 * uFlow * vec2(sin(t * 0.21), cos(t * 0.13));
  uv = anchor + mat2(uTurn.x, uTurn.y, -uTurn.y, uTurn.x) * uv * 2.0 / uZoom;
  uv += uWarp * vec2(sin(uv.y * 6.283 + t * 0.5), cos(uv.x * 6.283 + t * 0.5)) * 0.05;

  vec3 latent = uSeed + 0.1 * uFlow * vec3(sin(0.3 * t), sin(0.69 * t), sin(0.44 * t));
  latent += touch * vec3(0.12, -0.1, 0.16);
  latent.z += uUnfold;

  vec3 veil = cppn(uv, latent).rgb;
  veil += (hash(gl_FragCoord.xy) - 0.5) * uDither;
  outColor = vec4(veil, 1.0);
}`,U4=`#version 300 es
precision highp float;
uniform sampler2D uField;
uniform vec2 uResolution;
uniform vec2 uTexel;
uniform vec3 uColor;
uniform vec3 uInk;
uniform float uGain;
uniform float uSheen;
uniform float uGlow;
uniform float uPresence;
uniform float uGrain;
uniform float uFade;
uniform float uOpacity;
uniform float uTime;
uniform float uLightMode;
uniform vec4 uLight;
out vec4 outColor;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float smootherstep(float edge, float x) {
  float t = clamp(x / max(edge, 0.0001), 0.0, 1.0);
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

float level(vec2 uv, float lod) {
  return textureLod(uField, uv, lod).b;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  float base = clamp(level(uv, 0.0), 0.0, 1.0);
  float glow = 0.0;
  glow += level(uv, 2.0) * 0.4;
  glow += level(uv, 3.0) * 0.3;
  glow += level(uv, 4.0) * 0.2;
  glow += level(uv, 5.0) * 0.1;

  float dx = level(uv + vec2(uTexel.x, 0.0), 0.0) - level(uv - vec2(uTexel.x, 0.0), 0.0);
  float dy = level(uv + vec2(0.0, uTexel.y), 0.0) - level(uv - vec2(0.0, uTexel.y), 0.0);
  vec2 slope = vec2(dx / (2.0 * uTexel.x) * (uResolution.y / uResolution.x), dy / (2.0 * uTexel.y));
  vec3 normal = normalize(vec3(-slope * 0.12, 1.0));
  vec2 pixel = gl_FragCoord.xy / uResolution.y;
  vec3 toLight = normalize(vec3(uLight.xy - pixel, 0.7));
  vec3 halfway = normalize(toLight + vec3(0.0, 0.0, 1.0));
  float facing = max(dot(normal, halfway), 0.0);
  float sheen = pow(facing, 40.0) * smoothstep(0.08, 0.7, base);
  float near = uLight.z * exp(-dot(uLight.xy - pixel, uLight.xy - pixel) / 0.2);

  float energy = pow(base, 2.2) * uGain * (1.0 + near * 0.4);
  energy += pow(glow, 2.2) * uGlow * uGain;
  energy *= uPresence;
  vec3 light = uColor * energy;
  light += uColor * energy * energy * 0.35;
  vec3 gleam = mix(uColor * 2.0, vec3(1.0), 0.55);
  light += gleam * sheen * uSheen * (0.8 + near * 0.4) * uPresence;

  float edge = uFade * 0.5;
  float mask = smootherstep(edge, uv.x) * smootherstep(edge, 1.0 - uv.x) * smootherstep(edge, uv.y) * smootherstep(edge, 1.0 - uv.y);
  mask *= uOpacity;
  float grain = (hash(gl_FragCoord.xy + fract(uTime * 7.31) * 113.0) - 0.5) * uGrain;
  float dither = (hash(gl_FragCoord.yx + 31.7) - 0.5) / 255.0;

  float peak = max(light.r, max(light.g, light.b));
  if (uLightMode > 0.5) {
    float cover = 1.0 - exp(-peak * 1.6);
    vec3 ink = mix(uInk, uInk * 0.82, smoothstep(0.5, 1.0, cover));
    ink = mix(ink, vec3(1.0), clamp(sheen * uSheen * 1.5, 0.0, 1.0) * 0.8);
    float alpha = clamp(cover * 0.85 * (1.0 + grain) + dither, 0.0, 1.0) * mask;
    outColor = vec4(ink * alpha, alpha);
  } else {
    vec3 color = 1.0 - exp(-light);
    color = pow(color, vec3(1.0 / 2.2));
    color = clamp(color + grain * peak + dither, 0.0, 1.0) * mask;
    outColor = vec4(color, max(color.r, max(color.g, color.b)));
  }
}`,O4=1.8,Vy=9e5,Gl=(a,e,n)=>Math.min(n,Math.max(e,a)),P4=a=>{const e=Number(a)||0;if(!e)return[0,0,0];const n=r=>{const o=Math.sin(e*12.9898+r*78.233)*43758.5453;return o-Math.floor(o)-.5};return[n(1),n(2),n(3)]},ky=(a,e,n)=>{const r=a.createShader(e);return r?(a.shaderSource(r,n),a.compileShader(r),a.getShaderParameter(r,a.COMPILE_STATUS)?r:(a.deleteShader(r),null)):null},Xy=(a,e)=>{const n=ky(a,a.VERTEX_SHADER,N4),r=ky(a,a.FRAGMENT_SHADER,e),o=a.createProgram();if(!n||!r||!o)return null;if(a.attachShader(o,n),a.attachShader(o,r),a.bindAttribLocation(o,0,"aPosition"),a.linkProgram(o),a.deleteShader(n),a.deleteShader(r),!a.getProgramParameter(o,a.LINK_STATUS))return a.deleteProgram(o),null;const c={},u=a.getProgramParameter(o,a.ACTIVE_UNIFORMS);for(let d=0;d<u;d++){const p=a.getActiveUniform(o,d);p&&(c[p.name]=a.getUniformLocation(o,p.name))}return{program:o,uniforms:c}},F4=({color:a="#6b12ff",speed:e=.5,scale:n=1,rotation:r=0,flow:o=1,warp:c=0,variation:u=0,brightness:d=1,sheen:p=0,glow:m=.4,grain:x=.03,quality:g=.5,mouseInteraction:v=!0,mouseStrength:_=1,intro:E=!0,fade:C=0,opacity:y=1,lightMode:M=!1,paused:U=!1,dpr:B,className:R="",...O})=>{const P=zt.useRef(null),F=zt.useRef(null),w=zt.useRef(null),T={color:String(a),speed:e,scale:Math.max(.1,n),rotation:r,flow:Math.max(0,o),warp:Math.max(0,c),variation:u,brightness:Math.max(0,d),sheen:Math.max(0,p),glow:Math.max(0,m),grain:Math.max(0,x),quality:Gl(g,.25,1),mouseInteraction:v,mouseStrength:Math.max(0,_),intro:E,fade:Gl(C,0,1),opacity:Gl(y,0,1),lightMode:M,paused:U,dpr:B},H=zt.useRef(T);return H.current=T,zt.useEffect(()=>{const V=P.current,ee=F.current,I=ee?.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1,powerPreference:"high-performance"});if(!V||!ee||!I)return;const Q=!!I.getExtension("EXT_color_buffer_float"),ae=Xy(I,L4),W=Xy(I,U4);if(!ae||!W)return;const $=I.createBuffer(),D=I.createVertexArray();I.bindVertexArray(D),I.bindBuffer(I.ARRAY_BUFFER,$),I.bufferData(I.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),I.STATIC_DRAW),I.enableVertexAttribArray(0),I.vertexAttribPointer(0,2,I.FLOAT,!1,0,0);let le=I.createTexture();const me=I.createFramebuffer(),Te={width:0,height:0},rt=(nt,ze)=>{if(Te.width===nt&&Te.height===ze)return;const L=Te.width&&Te.height?le:null,b=L?I.createTexture():le;if(!b)return;le=b,Te.width=nt,Te.height=ze,I.bindTexture(I.TEXTURE_2D,le);const q=Math.floor(Math.log2(Math.max(nt,ze)))+1;I.texStorage2D(I.TEXTURE_2D,q,Q?I.RGBA16F:I.RGBA8,nt,ze),I.texParameteri(I.TEXTURE_2D,I.TEXTURE_MIN_FILTER,I.LINEAR_MIPMAP_LINEAR),I.texParameteri(I.TEXTURE_2D,I.TEXTURE_MAG_FILTER,I.LINEAR),I.texParameteri(I.TEXTURE_2D,I.TEXTURE_WRAP_S,I.CLAMP_TO_EDGE),I.texParameteri(I.TEXTURE_2D,I.TEXTURE_WRAP_T,I.CLAMP_TO_EDGE),I.bindFramebuffer(I.FRAMEBUFFER,me),I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,le,0),L&&I.deleteTexture(L)},je=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),G=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,J=new Map,Ke=nt=>{if(J.has(nt))return J.get(nt);let ze=[1,1,1];if(je){je.clearRect(0,0,1,1),je.fillStyle="#ffffff",je.fillStyle=nt,je.fillRect(0,0,1,1);const[L,b,q]=je.getImageData(0,0,1,1).data;ze=[L,b,q].map(z=>Math.pow(z/255,2.2))}return J.set(nt,ze),ze},ie={width:1,height:1,fieldWidth:1,fieldHeight:1},ne={x:0,y:0,inside:!1},xe={clock:0,intro:H.current.intro&&!G?0:1,touch:0,x:0,y:0,dragX:0,dragY:0,lightX:.5,lightY:.15};let Ue=0,ye=0,we=!0;const _t=()=>{const nt=H.current,ze=xe.intro*xe.intro*xe.intro*(xe.intro*(xe.intro*6-15)+10);I.bindVertexArray(D),rt(ie.fieldWidth,ie.fieldHeight);const L=ae.uniforms;I.bindFramebuffer(I.FRAMEBUFFER,me),I.viewport(0,0,Te.width,Te.height),I.useProgram(ae.program);const b=nt.rotation*Math.PI/180,[q,z,_e]=P4(nt.variation);I.uniform2f(L.uView,ie.width,ie.height),I.uniform2f(L.uScale,ie.width/Te.width,ie.height/Te.height),I.uniform1f(L.uZoom,nt.scale),I.uniform2f(L.uTurn,Math.cos(b),Math.sin(b)),I.uniform1f(L.uTime,xe.clock),I.uniform1f(L.uFlow,nt.flow),I.uniform1f(L.uWarp,nt.warp),I.uniform3f(L.uSeed,.3948333106474662+q,.36+z,.14+_e),I.uniform4f(L.uPointer,xe.x,xe.y,xe.touch*nt.mouseStrength*.9,.42),I.uniform2f(L.uDrag,xe.dragX*2/ie.height,xe.dragY*2/ie.height),I.uniform1f(L.uUnfold,(1-ze)*.45),I.uniform1f(L.uDither,Q?0:1/255),I.drawArrays(I.TRIANGLES,0,3),I.bindTexture(I.TEXTURE_2D,le),I.generateMipmap(I.TEXTURE_2D);const Ce=W.uniforms,te=Ke(nt.color),Z=.2126*te[0]+.7152*te[1]+.0722*te[2],K=Math.min(1,.2/Math.max(Z,.001)),ce=te.map(Be=>Math.pow(Math.min(1,Be*K),1/2.2));I.bindFramebuffer(I.FRAMEBUFFER,null),I.viewport(0,0,ee.width,ee.height),I.useProgram(W.program),I.uniform2f(Ce.uResolution,ee.width,ee.height),I.uniform2f(Ce.uTexel,1/Te.width,1/Te.height),I.uniform3fv(Ce.uColor,te),I.uniform3fv(Ce.uInk,ce),I.uniform1f(Ce.uGain,1.15*nt.brightness),I.uniform1f(Ce.uSheen,.5*nt.sheen),I.uniform1f(Ce.uGlow,nt.glow),I.uniform1f(Ce.uPresence,ze),I.uniform1f(Ce.uGrain,nt.grain),I.uniform1f(Ce.uFade,nt.fade),I.uniform1f(Ce.uOpacity,nt.opacity),I.uniform1f(Ce.uTime,xe.clock%1e3),I.uniform1f(Ce.uLightMode,nt.lightMode?1:0),I.uniform4f(Ce.uLight,xe.lightX*ie.width/ie.height,1-xe.lightY,xe.touch*nt.mouseStrength,0),I.activeTexture(I.TEXTURE0),I.bindTexture(I.TEXTURE_2D,le),I.uniform1i(Ce.uField,0),I.drawArrays(I.TRIANGLES,0,3)},Ae=nt=>{if(Ue=0,!we||document.hidden)return;const ze=H.current,L=ye?Math.min(.05,(nt-ye)/1e3):1/60;ye=nt;const b=!ze.paused&&!G;b&&(xe.clock+=L*ze.speed),!ze.intro||G?xe.intro=1:xe.intro<1&&(xe.intro=Math.min(1,xe.intro+L/O4));const q=ze.mouseInteraction&&ne.inside&&!G;q&&xe.touch<.01&&(xe.x=ne.x,xe.y=ne.y);const z=1-Math.exp(-L*9),_e=xe.x,Ce=xe.y;xe.x+=(ne.x-xe.x)*z,xe.y+=(ne.y-xe.y)*z;const te=(xe.x-_e)/Math.max(L,.001),Z=(xe.y-Ce)/Math.max(L,.001),K=1-Math.exp(-L*5);xe.dragX+=(Gl(te*.12,-120,120)-xe.dragX)*K,xe.dragY+=(Gl(-Z*.12,-120,120)-xe.dragY)*K,xe.touch+=((q?1:0)-xe.touch)*(1-Math.exp(-L*(q?3:1.6)));const ce=q?ne.x/ie.width:.5,Be=q?ne.y/ie.height:.15,Le=1-Math.exp(-L*4);xe.lightX+=(ce-xe.lightX)*Le,xe.lightY+=(Be-xe.lightY)*Le,_t();const Ie=xe.intro<1||Math.abs((q?1:0)-xe.touch)>.002||Math.abs(xe.dragX)+Math.abs(xe.dragY)>.05||Math.abs(ne.x-xe.x)+Math.abs(ne.y-xe.y)>.3||Math.abs(ce-xe.lightX)+Math.abs(Be-xe.lightY)>5e-4;b||Ie?Ue=requestAnimationFrame(Ae):ye=0},Fe=()=>{!Ue&&we&&!document.hidden&&(Ue=requestAnimationFrame(Ae))},ue=()=>{const nt=H.current,ze=Math.max(1,V.clientWidth),L=Math.max(1,V.clientHeight),b=Math.min(nt.dpr||window.devicePixelRatio||1,2);ie.width=ze,ie.height=L,ee.width=Math.max(1,Math.round(ze*b)),ee.height=Math.max(1,Math.round(L*b));let q=nt.quality;ze*L*q*q>Vy&&(q=Math.sqrt(Vy/(ze*L))),ie.fieldWidth=Math.max(1,Math.round(ze*q)),ie.fieldHeight=Math.max(1,Math.round(L*q)),Ue||_t(),Fe()},Oe=nt=>{const ze=V.getBoundingClientRect();ne.x=nt.clientX-ze.left,ne.y=nt.clientY-ze.top,ne.inside=ne.x>=0&&ne.y>=0&&ne.x<=ze.width&&ne.y<=ze.height,Fe()},He=()=>{ne.inside=!1,Fe()},vt=()=>{ye=0,Fe()},mt=new ResizeObserver(ue);mt.observe(V);const Je=new IntersectionObserver(nt=>{we=nt.some(ze=>ze.isIntersecting),we&&(ye=0,Fe())});Je.observe(V),window.addEventListener("pointermove",Oe,{passive:!0}),document.documentElement.addEventListener("pointerleave",He),document.addEventListener("visibilitychange",vt),ue();let Tt=H.current.quality,j=H.current.dpr;return w.current=()=>{const nt=H.current;if(nt.quality!==Tt||nt.dpr!==j){Tt=nt.quality,j=nt.dpr,ue();return}Ue||_t(),Fe()},()=>{cancelAnimationFrame(Ue),w.current=null,mt.disconnect(),Je.disconnect(),window.removeEventListener("pointermove",Oe),document.documentElement.removeEventListener("pointerleave",He),document.removeEventListener("visibilitychange",vt),I.deleteTexture(le),I.deleteFramebuffer(me),I.deleteProgram(ae.program),I.deleteProgram(W.program),I.deleteBuffer($),I.deleteVertexArray(D)}},[]),zt.useEffect(()=>{w.current?.()}),ve.jsx("div",{ref:P,className:`dark-veil-container${R?` ${R}`:""}`,...O,children:ve.jsx("canvas",{ref:F,className:"dark-veil-canvas","aria-hidden":"true"})})},sM={color:"#7565ff",speed:.32,flow:.7,warp:.12,variation:.08,brightness:.48,glow:.28,sheen:.18,grain:.012,opacity:.34,quality:.42,dpr:1.25},I4={...sM,speed:.2,quality:.28,dpr:1,mouseInteraction:!1},qy="(pointer: coarse), (max-width: 680px)";function z4(){const[a,e]=zt.useState(()=>typeof window<"u"&&window.matchMedia(qy).matches);return zt.useEffect(()=>{const n=window.matchMedia(qy),r=o=>e(o.matches);return e(n.matches),n.addEventListener("change",r),()=>n.removeEventListener("change",r)},[]),ve.jsx("div",{className:"ambient-background","aria-hidden":"true",children:ve.jsx(F4,{...a?I4:sM})})}const B4=`#version 300 es
in vec2 aPosition;
uniform vec2 uTexel;
out vec2 vUv;
out vec2 vL;
out vec2 vR;
out vec2 vT;
out vec2 vB;
void main() {
  vUv = aPosition * 0.5 + 0.5;
  vL = vUv - vec2(uTexel.x, 0.0);
  vR = vUv + vec2(uTexel.x, 0.0);
  vT = vUv + vec2(0.0, uTexel.y);
  vB = vUv - vec2(0.0, uTexel.y);
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`,va=`#version 300 es
precision highp float;
precision highp sampler2D;
in vec2 vUv;
in vec2 vL;
in vec2 vR;
in vec2 vT;
in vec2 vB;
out vec4 outColor;
`,H4=`${va}
uniform sampler2D uTarget;
uniform float uAspect;
uniform vec2 uA;
uniform vec2 uB;
uniform float uRadius;
uniform float uWide;
uniform vec3 uValue;
uniform float uMode;
uniform float uStrength;
float erf(float x) {
  float x2 = x * x;
  float a = 0.147;
  return sign(x) * sqrt(1.0 - exp(-x2 * (1.2732395 + a * x2) / (1.0 + a * x2)));
}
float sweep(float along, float length, float across, float radius) {
  return exp(-across * across / (radius * radius)) * 0.5 * (erf(along / radius) - erf((along - length) / radius));
}
void main() {
  vec2 p = vec2(vUv.x * uAspect, vUv.y);
  vec2 a = vec2(uA.x * uAspect, uA.y);
  vec2 ab = vec2(uB.x * uAspect, uB.y) - a;
  float len = length(ab);
  vec2 dir = len > 1e-6 ? ab / len : vec2(1.0, 0.0);
  vec2 ap = p - a;
  vec3 base = texture(uTarget, vUv).xyz;
  if (uMode > 1.5) {
    float along = dot(ap, dir);
    float across = dot(ap, vec2(-dir.y, dir.x));
    if (uMode > 2.5) {
      outColor = vec4(mix(base, uValue, sweep(along, len, across, uRadius) * uStrength), 1.0);
      return;
    }
    vec3 add = vec3(uValue.xy * sweep(along, len, across, uRadius), uValue.z * sweep(along, len, across, uWide));
    outColor = vec4(base + add, 1.0);
    return;
  }
  float h = clamp(dot(ap, ab) / max(dot(ab, ab), 1e-9), 0.0, 1.0);
  vec2 d = ap - ab * h;
  float r2 = dot(d, d);
  float falloff = exp(-r2 / (uRadius * uRadius));
  float wide = exp(-r2 / (uWide * uWide));
  vec3 result = uMode > 0.5 ? mix(base, uValue, falloff * uStrength) : base + vec3(uValue.xy * falloff, uValue.z * wide);
  outColor = vec4(result, 1.0);
}`,G4=`${va}
uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform vec2 uVelocityTexel;
uniform float uDt;
uniform vec4 uDecay;
void main() {
  vec2 coord = vUv - uDt * texture(uVelocity, vUv).xy * uVelocityTexel;
  outColor = texture(uSource, coord) * uDecay;
}`,V4=`${va}
uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform sampler2D uForward;
uniform sampler2D uBack;
uniform vec2 uVelocityTexel;
uniform vec2 uSourceTexel;
uniform float uDt;
uniform vec4 uDecay;
void main() {
  vec2 coord = vUv - uDt * texture(uVelocity, vUv).xy * uVelocityTexel;
  vec4 forward = texture(uForward, vUv);
  vec4 corrected = forward + 0.5 * (texture(uSource, vUv) - texture(uBack, vUv));
  vec2 base = (floor(coord / uSourceTexel - 0.5) + 0.5) * uSourceTexel;
  vec4 a = texture(uSource, base);
  vec4 b = texture(uSource, base + vec2(uSourceTexel.x, 0.0));
  vec4 c = texture(uSource, base + vec2(0.0, uSourceTexel.y));
  vec4 d = texture(uSource, base + uSourceTexel);
  vec4 low = min(min(a, b), min(c, d));
  vec4 high = max(max(a, b), max(c, d));
  outColor = clamp(corrected, low, high) * uDecay;
}`,k4=`${va}
uniform sampler2D uVelocity;
void main() {
  float left = texture(uVelocity, vL).x;
  float right = texture(uVelocity, vR).x;
  float top = texture(uVelocity, vT).y;
  float bottom = texture(uVelocity, vB).y;
  vec2 center = texture(uVelocity, vUv).xy;
  if (vL.x < 0.0) left = -center.x;
  if (vR.x > 1.0) right = -center.x;
  if (vT.y > 1.0) top = -center.y;
  if (vB.y < 0.0) bottom = -center.y;
  outColor = vec4(0.5 * (right - left + top - bottom), 0.0, 0.0, 1.0);
}`,X4=`${va}
uniform sampler2D uSource;
uniform float uValue;
void main() {
  outColor = texture(uSource, vUv) * uValue;
}`,q4=`${va}
uniform sampler2D uPressure;
uniform sampler2D uDivergence;
void main() {
  float left = texture(uPressure, vL).x;
  float right = texture(uPressure, vR).x;
  float top = texture(uPressure, vT).x;
  float bottom = texture(uPressure, vB).x;
  float divergence = texture(uDivergence, vUv).x;
  outColor = vec4((left + right + bottom + top - divergence) * 0.25, 0.0, 0.0, 1.0);
}`,W4=`${va}
uniform sampler2D uPressure;
uniform sampler2D uVelocity;
void main() {
  float left = texture(uPressure, vL).x;
  float right = texture(uPressure, vR).x;
  float top = texture(uPressure, vT).x;
  float bottom = texture(uPressure, vB).x;
  vec2 velocity = texture(uVelocity, vUv).xy - vec2(right - left, top - bottom);
  outColor = vec4(velocity, 0.0, 1.0);
}`,oM=`
uniform vec3 uColor;
uniform vec3 uSecondary;
uniform float uIntensity;
uniform float uHotspot;
vec3 shade(vec3 dye) {
  float energy = max(dye.x, 0.0);
  float heat = clamp(dye.y, 0.0, energy);
  float gas = max(dye.z, 0.0);
  float fresh = heat / max(energy, 0.0001);
  vec3 tint = mix(uSecondary, uColor, fresh);
  return (tint * energy + uSecondary * gas + vec3(heat * heat * 0.3 * uHotspot)) * uIntensity;
}
`,Y4=`${va}${oM}
uniform sampler2D uDye;
uniform vec2 uDyeTexel;
void main() {
  vec2 o = uDyeTexel * 0.5;
  vec3 light = shade(texture(uDye, vUv + vec2(-o.x, -o.y)).xyz);
  light += shade(texture(uDye, vUv + vec2(o.x, -o.y)).xyz);
  light += shade(texture(uDye, vUv + vec2(-o.x, o.y)).xyz);
  light += shade(texture(uDye, vUv + vec2(o.x, o.y)).xyz);
  outColor = vec4(light * 0.25, 1.0);
}`,Z4=`${va}
uniform sampler2D uSource;
uniform vec2 uSourceTexel;
void main() {
  vec2 o = uSourceTexel;
  vec3 color = texture(uSource, vUv).rgb * 4.0;
  color += texture(uSource, vUv + vec2(-o.x, -o.y)).rgb;
  color += texture(uSource, vUv + vec2(o.x, -o.y)).rgb;
  color += texture(uSource, vUv + vec2(-o.x, o.y)).rgb;
  color += texture(uSource, vUv + vec2(o.x, o.y)).rgb;
  outColor = vec4(color / 8.0, 1.0);
}`,K4=`${va}
uniform sampler2D uSource;
uniform vec2 uSourceTexel;
void main() {
  vec2 o = uSourceTexel;
  vec3 color = texture(uSource, vUv + vec2(-o.x * 2.0, 0.0)).rgb;
  color += texture(uSource, vUv + vec2(o.x * 2.0, 0.0)).rgb;
  color += texture(uSource, vUv + vec2(0.0, -o.y * 2.0)).rgb;
  color += texture(uSource, vUv + vec2(0.0, o.y * 2.0)).rgb;
  color += texture(uSource, vUv + vec2(-o.x, -o.y)).rgb * 2.0;
  color += texture(uSource, vUv + vec2(o.x, -o.y)).rgb * 2.0;
  color += texture(uSource, vUv + vec2(-o.x, o.y)).rgb * 2.0;
  color += texture(uSource, vUv + vec2(o.x, o.y)).rgb * 2.0;
  outColor = vec4(color / 12.0, 1.0);
}`,Q4=`${va}${oM}
uniform sampler2D uDye;
uniform sampler2D uBloom;
uniform float uGlow;
uniform float uGrain;
uniform float uTime;
uniform float uLight;
float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
void main() {
  vec3 dye = texture(uDye, vUv).xyz;
  vec3 light = shade(dye);
  vec3 bloom = texture(uBloom, vUv).rgb * uGlow;
  float edge = smoothstep(0.0, 0.02, min(min(vUv.x, 1.0 - vUv.x), min(vUv.y, 1.0 - vUv.y)));
  float grain = 1.0 + (hash(gl_FragCoord.xy + fract(uTime * 13.7) * 97.0) - 0.5) * uGrain * 2.0;
  if (uLight > 0.5) {
    float energy = max(dye.x, 0.0);
    float heat = clamp(dye.y, 0.0, energy);
    float gas = max(dye.z, 0.0);
    float fresh = heat / max(energy, 0.0001);
    vec3 tint = mix(uSecondary, uColor, fresh);
    float halo = dot(bloom, vec3(0.2126, 0.7152, 0.0722));
    float density = 1.0 - exp(-((energy * 1.1 + gas * 0.8) * uIntensity + halo * 0.25));
    float tone = dot(tint, vec3(0.2126, 0.7152, 0.0722));
    vec3 ink = tint * min(1.0, 0.5 / max(tone, 0.001)) * mix(0.95, 0.72, smoothstep(0.5, 3.0, energy));
    ink = mix(ink, vec3(1.0), clamp(heat * heat * 0.05 * uHotspot, 0.0, 0.45));
    density = clamp(density * grain, 0.0, 1.0) * edge;
    outColor = vec4(ink * density, density);
  } else {
    vec3 color = 1.0 - exp(-(light + bloom) * grain);
    color *= edge;
    outColor = vec4(color, max(color.r, max(color.g, color.b)));
  }
}`,Wy={low:{sim:96,dye:384},medium:{sim:128,dye:576},high:{sim:160,dye:768}},j4=20,J4=.75,Yy=5,cm=(a,e,n)=>Math.min(n,Math.max(e,a)),Zy=(a,e,n)=>{const r=a.createShader(e);return r?(a.shaderSource(r,n),a.compileShader(r),a.getShaderParameter(r,a.COMPILE_STATUS)?r:(a.deleteShader(r),null)):null},$4=([a,e,n])=>{const r=Math.max(a,e,n),o=Math.min(a,e,n),c=r-o;let u=0;return c>0&&(r===a?u=(e-n)/c%6:r===e?u=(n-a)/c+2:u=(a-e)/c+4),[(u*60+360)%360,r>0?c/r:0,r]},eL=(a,e,n)=>{const r=(a%360+360)%360/60,o=n*e,c=o*(1-Math.abs(r%2-1)),u=n-o,[d,p,m]=r<1?[o,c,0]:r<2?[c,o,0]:r<3?[0,o,c]:r<4?[0,c,o]:r<5?[c,0,o]:[o,0,c];return[d+u,p+u,m+u]},tL=({color:a="#5e7aff",secondaryColor:e,intensity:n=1.3,trailWidth:r=3,linger:o=1.4,glow:c=1.2,hotspot:u=.8,followSpeed:d=.6,grain:p=0,clickBurst:m=!0,quality:x="high",theme:g="dark",blendMode:v,maxDevicePixelRatio:_=2,enabled:E=!0,children:C,className:y="",style:M,...U})=>{const B=zt.useRef(null),R=zt.useRef(null),O=zt.useRef(null);O.current={color:String(a),secondaryColor:e?String(e):"",intensity:Math.max(0,n),trailWidth:cm(r,.5,40),linger:cm(o,.1,10),glow:Math.max(0,c),hotspot:Math.max(0,u),followSpeed:cm(d,0,1),grain:Math.max(0,p),clickBurst:m,quality:Wy[x]?x:"high",theme:g,maxDevicePixelRatio:_,enabled:E},zt.useEffect(()=>{const F=B.current,w=R.current,T=w?.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1});if(!F||!w||!T||!T.getExtension("EXT_color_buffer_float"))return;const H=Zy(T,T.VERTEX_SHADER,B4);if(!H)return;const V=te=>{const Z=Zy(T,T.FRAGMENT_SHADER,te),K=T.createProgram();if(!Z||!K)return null;if(T.attachShader(K,H),T.attachShader(K,Z),T.bindAttribLocation(K,0,"aPosition"),T.linkProgram(K),T.deleteShader(Z),!T.getProgramParameter(K,T.LINK_STATUS))return T.deleteProgram(K),null;const ce={},Be=T.getProgramParameter(K,T.ACTIVE_UNIFORMS);for(let Le=0;Le<Be;Le++){const Ie=T.getActiveUniform(K,Le);Ie&&(ce[Ie.name]=T.getUniformLocation(K,Ie.name))}return{program:K,uniforms:ce}},ee={splat:V(H4),advect:V(G4),maccormack:V(V4),divergence:V(k4),scale:V(X4),pressure:V(q4),gradient:V(W4),prefilter:V(Y4),down:V(Z4),up:V(K4),display:V(Q4)};if(Object.values(ee).some(te=>!te))return;const I=T.createVertexArray(),Q=T.createBuffer();T.bindVertexArray(I),T.bindBuffer(T.ARRAY_BUFFER,Q),T.bufferData(T.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),T.STATIC_DRAW),T.enableVertexAttribArray(0),T.vertexAttribPointer(0,2,T.FLOAT,!1,0,0);const ae=document.createElement("canvas");ae.width=1,ae.height=1;const W=ae.getContext("2d",{willReadFrequently:!0}),$=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,D={width:1,height:1,ratio:1,colorKey:"",color:[.37,.55,1],secondary:[.25,.3,1],pointer:{x:0,y:0,inside:!1},emitter:{x:0,y:0,vx:0,vy:0,px:0,py:0},ready:!1,bursts:[],active:-1/0,time:0,allocated:"",targets:null};let le=0,me=0,Te=!0,rt=!0;const je=(te,Z)=>{if(!W||!te)return Z;const K=/^[0-9a-f]{3,8}$/i.test(te)?`#${te}`:te;W.clearRect(0,0,1,1),W.fillStyle="#000000",W.fillStyle=K,W.fillRect(0,0,1,1);const[ce,Be,Le]=W.getImageData(0,0,1,1).data;return[ce/255,Be/255,Le/255]},G=te=>{const Z=`${te.color}|${te.secondaryColor}`;if(Z!==D.colorKey)if(D.colorKey=Z,D.color=je(te.color,[.37,.55,1]),te.secondaryColor)D.secondary=je(te.secondaryColor,D.color);else{const[K,ce,Be]=$4(D.color);D.secondary=eL(K+8,Math.min(1,ce*1.1+.05),Be)}},J=(te,Z,K,ce,Be)=>{const Le=T.createTexture();T.bindTexture(T.TEXTURE_2D,Le),T.texParameteri(T.TEXTURE_2D,T.TEXTURE_MIN_FILTER,Be),T.texParameteri(T.TEXTURE_2D,T.TEXTURE_MAG_FILTER,Be),T.texParameteri(T.TEXTURE_2D,T.TEXTURE_WRAP_S,T.CLAMP_TO_EDGE),T.texParameteri(T.TEXTURE_2D,T.TEXTURE_WRAP_T,T.CLAMP_TO_EDGE),T.texImage2D(T.TEXTURE_2D,0,K,te,Z,0,ce,T.HALF_FLOAT,null);const Ie=T.createFramebuffer();return T.bindFramebuffer(T.FRAMEBUFFER,Ie),T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Le,0),T.viewport(0,0,te,Z),T.clearColor(0,0,0,0),T.clear(T.COLOR_BUFFER_BIT),{texture:Le,fbo:Ie,width:te,height:Z,texel:[1/te,1/Z]}},Ke=(te,Z,K,ce,Be)=>{let Le=J(te,Z,K,ce,Be),Ie=J(te,Z,K,ce,Be);return{get read(){return Le},get write(){return Ie},swap(){const Qe=Le;Le=Ie,Ie=Qe},targets(){return[Le,Ie]}}},ie=te=>{T.deleteTexture(te.texture),T.deleteFramebuffer(te.fbo)},ne=()=>{const te=D.targets;te&&([...te.velocity.targets(),...te.dye.targets(),...te.pressure.targets(),te.divergence,te.forward,te.back,...te.bloom].forEach(ie),D.targets=null)},xe=()=>{const te=D.targets;te&&(T.clearColor(0,0,0,0),[...te.velocity.targets(),...te.dye.targets(),...te.pressure.targets()].forEach(Z=>{T.bindFramebuffer(T.FRAMEBUFFER,Z.fbo),T.clear(T.COLOR_BUFFER_BIT)}))},Ue=()=>{const te=O.current,Z=`${te.quality}|${D.width}|${D.height}|${w.width}|${w.height}`;if(Z===D.allocated&&D.targets)return;ne(),D.allocated=Z;const K=Wy[te.quality],ce=D.width/D.height,Be=qe=>ce>=1?[Math.round(qe*ce),qe]:[qe,Math.round(qe/ce)],[Le,Ie]=Be(K.sim);let[Qe,st]=Be(K.dye);const dt=Math.min(1,w.width/Qe,w.height/st);Qe=Math.max(2,Math.round(Qe*dt)),st=Math.max(2,Math.round(st*dt));const X=[];let Ge=Qe>>1,Me=st>>1;for(let qe=0;qe<Yy;qe++)X.push(J(Math.max(1,Ge),Math.max(1,Me),T.RGBA16F,T.RGBA,T.LINEAR)),Ge>>=1,Me>>=1;D.targets={velocity:Ke(Le,Ie,T.RG16F,T.RG,T.LINEAR),dye:Ke(Qe,st,T.RGBA16F,T.RGBA,T.LINEAR),forward:J(Qe,st,T.RGBA16F,T.RGBA,T.LINEAR),back:J(Qe,st,T.RGBA16F,T.RGBA,T.LINEAR),pressure:Ke(Le,Ie,T.R16F,T.RED,T.NEAREST),divergence:J(Le,Ie,T.R16F,T.RED,T.NEAREST),bloom:X}},ye=()=>{const te=O.current,Z=Math.max(1,F.clientWidth),K=Math.max(1,F.clientHeight),ce=Math.min(window.devicePixelRatio||1,Math.max(.5,te.maxDevicePixelRatio||2)),Be=Math.max(1,Math.round(Z*ce)),Le=Math.max(1,Math.round(K*ce));(w.width!==Be||w.height!==Le)&&(w.width=Be,w.height=Le),D.width=Z,D.height=K,D.ratio=ce,Ue()},we=te=>{te?(T.bindFramebuffer(T.FRAMEBUFFER,te.fbo),T.viewport(0,0,te.width,te.height)):(T.bindFramebuffer(T.FRAMEBUFFER,null),T.viewport(0,0,w.width,w.height)),T.drawArrays(T.TRIANGLES,0,3)},_t=(te,Z)=>(T.useProgram(te.program),te.uniforms.uTexel&&T.uniform2f(te.uniforms.uTexel,Z[0],Z[1]),te.uniforms),Ae=(te,Z)=>(T.activeTexture(T.TEXTURE0+te),T.bindTexture(T.TEXTURE_2D,Z.texture),te),Fe=(te,Z,K,ce,Be,Le,Ie,Qe,st,dt=Le)=>{const X=_t(ee.splat,te.read.texel);T.uniform1i(X.uTarget,Ae(0,te.read)),T.uniform1f(X.uAspect,D.width/D.height),T.uniform2f(X.uA,Z/D.width,1-K/D.height),T.uniform2f(X.uB,ce/D.width,1-Be/D.height),T.uniform1f(X.uRadius,Le/D.height),T.uniform1f(X.uWide,dt/D.height),T.uniform3f(X.uValue,Ie[0],Ie[1],Ie[2]),T.uniform1f(X.uMode,Qe),T.uniform1f(X.uStrength,st),we(te.write),te.swap()},ue=(te,Z)=>{const{velocity:K}=D.targets;return[te*K.read.width/D.width,-Z*K.read.height/D.height]},Oe=te=>Math.max(te.trailWidth*.5,D.height/D.targets.dye.read.height*.9),He=(te,Z,K)=>{const{emitter:ce,pointer:Be}=D,{velocity:Le,dye:Ie}=D.targets;if(ce.px=ce.x,ce.py=ce.y,$||te.followSpeed>=1)ce.x=Be.x,ce.y=Be.y;else{const Ge=10+te.followSpeed*50,Me=Math.max(1,Math.ceil(Z/.004)),qe=Z/Me;for(let et=0;et<Me;et++)ce.vx+=(Ge*Ge*(Be.x-ce.x)-2*Ge*ce.vx)*qe,ce.vy+=(Ge*Ge*(Be.y-ce.y)-2*Ge*ce.vy)*qe,ce.x+=ce.vx*qe,ce.y+=ce.vy*qe}const Qe=ce.x-ce.px,st=ce.y-ce.py;if(Math.hypot(Qe,st)<.05||!te.enabled)return;const X=Oe(te);if(!$){const Ge=ue(Qe/Math.max(Z,.001),st/Math.max(Z,.001));Fe(Le,ce.px,ce.py,ce.x,ce.y,X*4+18,[Ge[0],Ge[1],0],3,J4*.6)}Fe(Ie,ce.px,ce.py,ce.x,ce.y,X,[5.6,5.6,.7],2,1,X*5+6),D.active=K},vt=(te,Z,K,ce)=>{const{velocity:Be,dye:Le}=D.targets,Ie=Oe(te),Qe=6,st=Math.random()*Math.PI*2;for(let dt=0;dt<Qe;dt++){const X=st+dt/Qe*Math.PI*2+(Math.random()-.5)*.5,Ge=Math.cos(X),Me=Math.sin(X),qe=20+Math.random()*14,et=Z+Ge*3,Ye=K+Me*3,St=Z+Ge*qe,ft=K+Me*qe;if(!$){const Pt=ue(Math.cos(X+.6)*760,Math.sin(X+.6)*760);Fe(Be,et,Ye,St,ft,18,[Pt[0],Pt[1],0],1,.9)}Fe(Le,et,Ye,St,ft,Ie*1.1,[2.4,2.4,.3],0,1,Ie*5+6)}Fe(Le,Z,K,Z+.01,K,Ie*2.2,[1.8,1.8,.4],0,1,Ie*7+10),D.active=ce},mt=(te,Z)=>{const{velocity:K,dye:ce,pressure:Be,divergence:Le}=D.targets;if(!$){let X=_t(ee.divergence,K.read.texel);T.uniform1i(X.uVelocity,Ae(0,K.read)),we(Le),X=_t(ee.scale,Be.read.texel),T.uniform1i(X.uSource,Ae(0,Be.read)),T.uniform1f(X.uValue,.8),we(Be.write),Be.swap(),X=_t(ee.pressure,Be.read.texel),T.uniform1i(X.uDivergence,Ae(1,Le));for(let Me=0;Me<j4;Me++)T.uniform1i(X.uPressure,Ae(0,Be.read)),we(Be.write),Be.swap();X=_t(ee.gradient,K.read.texel),T.uniform1i(X.uPressure,Ae(0,Be.read)),T.uniform1i(X.uVelocity,Ae(1,K.read)),we(K.write),K.swap(),X=_t(ee.advect,K.read.texel),T.uniform2f(X.uVelocityTexel,K.read.texel[0],K.read.texel[1]),T.uniform1i(X.uVelocity,Ae(0,K.read)),T.uniform1i(X.uSource,Ae(0,K.read)),T.uniform1f(X.uDt,Z);const Ge=Math.exp(-Z*1.2);T.uniform4f(X.uDecay,Ge,Ge,1,1),we(K.write),K.swap()}const Ie=[Math.exp(-Z*4.6/(te.linger*.8)),Math.exp(-Z*4.6/(te.linger*.2)),Math.exp(-Z*4.6/(te.linger*1.2)),1],{forward:Qe,back:st}=D.targets;if($){const X=_t(ee.advect,ce.read.texel);T.uniform2f(X.uVelocityTexel,K.read.texel[0],K.read.texel[1]),T.uniform1i(X.uVelocity,Ae(0,K.read)),T.uniform1i(X.uSource,Ae(1,ce.read)),T.uniform1f(X.uDt,0),T.uniform4f(X.uDecay,Ie[0],Ie[1],Ie[2],Ie[3]),we(ce.write),ce.swap();return}let dt=_t(ee.advect,ce.read.texel);T.uniform2f(dt.uVelocityTexel,K.read.texel[0],K.read.texel[1]),T.uniform1i(dt.uVelocity,Ae(0,K.read)),T.uniform1i(dt.uSource,Ae(1,ce.read)),T.uniform1f(dt.uDt,Z),T.uniform4f(dt.uDecay,1,1,1,1),we(Qe),T.uniform1i(dt.uSource,Ae(1,Qe)),T.uniform1f(dt.uDt,-Z),we(st),dt=_t(ee.maccormack,ce.read.texel),T.uniform2f(dt.uVelocityTexel,K.read.texel[0],K.read.texel[1]),T.uniform2f(dt.uSourceTexel,ce.read.texel[0],ce.read.texel[1]),T.uniform1i(dt.uVelocity,Ae(0,K.read)),T.uniform1i(dt.uSource,Ae(1,ce.read)),T.uniform1i(dt.uForward,Ae(2,Qe)),T.uniform1i(dt.uBack,Ae(3,st)),T.uniform1f(dt.uDt,Z),T.uniform4f(dt.uDecay,Ie[0],Ie[1],Ie[2],Ie[3]),we(ce.write),ce.swap()},Je=(te,Z)=>{T.uniform3f(te.uColor,D.color[0],D.color[1],D.color[2]),T.uniform3f(te.uSecondary,D.secondary[0],D.secondary[1],D.secondary[2]),T.uniform1f(te.uIntensity,Z.intensity),T.uniform1f(te.uHotspot,Z.hotspot)},Tt=te=>{const{dye:Z,bloom:K}=D.targets;if(te.glow>0){let Be=_t(ee.prefilter,K[0].texel);T.uniform1i(Be.uDye,Ae(0,Z.read)),T.uniform2f(Be.uDyeTexel,Z.read.texel[0],Z.read.texel[1]),Je(Be,te),we(K[0]),Be=_t(ee.down,K[0].texel);for(let Le=1;Le<K.length;Le++)T.uniform1i(Be.uSource,Ae(0,K[Le-1])),T.uniform2f(Be.uSourceTexel,K[Le-1].texel[0],K[Le-1].texel[1]),we(K[Le]);T.enable(T.BLEND),T.blendFunc(T.ONE,T.ONE),Be=_t(ee.up,K[0].texel);for(let Le=K.length-1;Le>0;Le--)T.uniform1i(Be.uSource,Ae(0,K[Le])),T.uniform2f(Be.uSourceTexel,K[Le].texel[0],K[Le].texel[1]),we(K[Le-1]);T.disable(T.BLEND)}const ce=_t(ee.display,[1/w.width,1/w.height]);T.uniform1i(ce.uDye,Ae(0,Z.read)),T.uniform1i(ce.uBloom,Ae(1,K[0])),Je(ce,te),T.uniform1f(ce.uGlow,te.glow>0?te.glow*1.4/Yy:0),T.uniform1f(ce.uGrain,te.grain),T.uniform1f(ce.uTime,D.time),T.uniform1f(ce.uLight,te.theme==="light"?1:0),we(null)},j=()=>{T.bindFramebuffer(T.FRAMEBUFFER,null),T.viewport(0,0,w.width,w.height),T.clearColor(0,0,0,0),T.clear(T.COLOR_BUFFER_BIT)},nt=te=>{if(le=0,!Te||!rt||document.hidden)return;const Z=O.current,K=me?Math.min(1/30,(te-me)/1e3):1/60;me=te,D.time+=K;const ce=Math.min(window.devicePixelRatio||1,Math.max(.5,Z.maxDevicePixelRatio||2));for(Math.abs(ce-D.ratio)>.01&&ye(),Ue(),G(Z),T.bindVertexArray(I),T.disable(T.BLEND),D.ready&&He(Z,K,te);D.bursts.length;){const[Ie,Qe]=D.bursts.shift();vt(Z,Ie,Qe,te)}mt(Z,K),Tt(Z);const Be=te-D.active>Z.linger*1200+900,Le=Math.hypot(D.emitter.vx,D.emitter.vy)<1;if(Be&&Le){xe(),j(),me=0;return}le=requestAnimationFrame(nt)},ze=()=>{!le&&Te&&rt&&!document.hidden&&(le=requestAnimationFrame(nt))},L=te=>{const Z=F.getBoundingClientRect(),K=te.clientX-Z.left,ce=te.clientY-Z.top;if(!(K>=0&&ce>=0&&K<=Z.width&&ce<=Z.height)){D.pointer.inside&&(D.pointer.inside=!1,D.ready=!1,ze());return}D.ready||(D.emitter.x=K,D.emitter.y=ce,D.emitter.px=K,D.emitter.py=ce,D.emitter.vx=0,D.emitter.vy=0,D.ready=!0),D.pointer.x=K,D.pointer.y=ce,D.pointer.inside=!0,ze()},b=te=>{const Z=O.current;if(!Z.clickBurst||!Z.enabled)return;const K=F.getBoundingClientRect(),ce=te.clientX-K.left,Be=te.clientY-K.top;ce<0||Be<0||ce>K.width||Be>K.height||(D.bursts.push([ce,Be]),ze())},q=()=>{D.pointer.inside=!1,D.ready=!1,ze()},z=()=>{me=0,ze()},_e=new ResizeObserver(()=>{ye(),ze()});_e.observe(F);const Ce=new IntersectionObserver(te=>{rt=te.some(Z=>Z.isIntersecting),rt&&(me=0,ze())});return Ce.observe(F),window.addEventListener("pointermove",L,{passive:!0}),window.addEventListener("pointerdown",b,{passive:!0}),document.documentElement.addEventListener("pointerleave",q),document.addEventListener("visibilitychange",z),ye(),j(),()=>{Te=!1,cancelAnimationFrame(le),_e.disconnect(),Ce.disconnect(),window.removeEventListener("pointermove",L),window.removeEventListener("pointerdown",b),document.documentElement.removeEventListener("pointerleave",q),document.removeEventListener("visibilitychange",z),ne(),Object.values(ee).forEach(te=>T.deleteProgram(te.program)),T.deleteShader(H),T.deleteBuffer(Q),T.deleteVertexArray(I)}},[]);const P=v??(g==="light"?"normal":"screen");return ve.jsxs("div",{ref:B,className:`glow-cursor${y?` ${y}`:""}`,style:M,...U,children:[ve.jsx("canvas",{ref:R,className:"glow-cursor__canvas",style:{mixBlendMode:P},"aria-hidden":"true"}),C&&ve.jsx("div",{className:"glow-cursor__content",children:C})]})},Ky="(pointer: fine)",um="(pointer: coarse)",Qy="(prefers-reduced-motion: reduce)";function nL({theme:a="dark"}){const[e,n]=zt.useState(()=>typeof window<"u"&&window.matchMedia(um).matches),[r,o]=zt.useState(()=>typeof window<"u"&&(window.matchMedia(Ky).matches||window.matchMedia(um).matches)&&!window.matchMedia(Qy).matches);return zt.useEffect(()=>{const c=window.matchMedia(Ky),u=window.matchMedia(um),d=window.matchMedia(Qy),p=()=>o(!d.matches&&(c.matches||u.matches||m));let m=!1;n(u.matches);const x=g=>{g.pointerType!=="mouse"||d.matches||m||(m=!0,p())};return p(),c.addEventListener("change",p),u.addEventListener("change",p),d.addEventListener("change",p),window.addEventListener("pointermove",x,{passive:!0}),()=>{c.removeEventListener("change",p),u.removeEventListener("change",p),d.removeEventListener("change",p),window.removeEventListener("pointermove",x)}},[]),r?ve.jsx(tL,{className:"site-glow-cursor",color:a==="light"?"#6552ce":"#baa7ff",secondaryColor:a==="light"?"#9281f7":"#7565ff",intensity:1.15,trailWidth:3.4,linger:1.35,glow:1.1,hotspot:.7,followSpeed:.55,clickBurst:!0,quality:e?"low":"medium",theme:a,maxDevicePixelRatio:e?1:1.5,...e?{intensity:.95,trailWidth:3,linger:1.2,glow:1,hotspot:.62,followSpeed:.82}:{}}):null}function iL(){return localStorage.getItem("portfolio-theme")||"dark"}function aL(){const[a,e]=zt.useState(iL);return zt.useEffect(()=>{document.documentElement.dataset.theme=a,localStorage.setItem("portfolio-theme",a),window.__portfolioReady=!0,window.clearTimeout(window.__portfolioStartupTimer)},[a]),zt.useEffect(()=>{if(!("IntersectionObserver"in window)||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const n=new IntersectionObserver(r=>r.forEach(o=>{o.isIntersecting&&(o.target.classList.add("is-visible"),n.unobserve(o.target))}),{threshold:.16,rootMargin:"0px 0px -4% 0px"});return document.querySelectorAll(".reveal").forEach(r=>n.observe(r)),()=>n.disconnect()},[]),zt.useEffect(()=>{if(!window.matchMedia("(pointer: fine)").matches||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let n=0;const r=o=>{cancelAnimationFrame(n),n=requestAnimationFrame(()=>{document.documentElement.style.setProperty("--pointer-x",`${o.clientX}px`),document.documentElement.style.setProperty("--pointer-y",`${o.clientY}px`)})};return window.addEventListener("pointermove",r,{passive:!0}),()=>{cancelAnimationFrame(n),window.removeEventListener("pointermove",r)}},[]),ve.jsxs(ve.Fragment,{children:[ve.jsx(z4,{}),ve.jsx(nL,{theme:a}),ve.jsxs("div",{className:"site-content",children:[ve.jsx("a",{className:"skip-link",href:"#main",children:"Aller au contenu"}),ve.jsx($2,{theme:a,onThemeToggle:()=>e(a==="dark"?"light":"dark")}),ve.jsxs("main",{id:"main",children:[ve.jsx("div",{id:"top",children:ve.jsx(TD,{})}),ve.jsx(wD,{}),ve.jsx(ND,{}),ve.jsx(UD,{}),ve.jsx(VD,{}),ve.jsx(kD,{})]}),ve.jsx(D4,{}),ve.jsx("a",{className:"floating-mail",href:`mailto:${hi.email}`,"aria-label":"Envoyer un e-mail",children:"✉"})]})]})}class rL extends jy.Component{state={error:null};static getDerivedStateFromError(e){return{error:e}}render(){return this.state.error?ve.jsxs("main",{style:{minHeight:"100vh",display:"grid",alignContent:"center",gap:12,maxWidth:680,margin:"auto",padding:32,font:"16px/1.6 system-ui, sans-serif"},children:[ve.jsx("h1",{style:{margin:0},children:"Le portfolio a rencontré une erreur"}),ve.jsx("p",{children:this.state.error.message}),ve.jsx("p",{children:"Rechargez la page. Si le problème persiste, envoyez ce message d’erreur."})]}):this.props.children}}j2.createRoot(document.getElementById("root")).render(ve.jsx(jy.StrictMode,{children:ve.jsx(rL,{children:ve.jsx(aL,{})})}));
