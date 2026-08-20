(function(){const x=document.createElement("link").relList;if(x&&x.supports&&x.supports("modulepreload"))return;for(const z of document.querySelectorAll('link[rel="modulepreload"]'))s(z);new MutationObserver(z=>{for(const w of z)if(w.type==="childList")for(const m of w.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function C(z){const w={};return z.integrity&&(w.integrity=z.integrity),z.referrerPolicy&&(w.referrerPolicy=z.referrerPolicy),z.crossOrigin==="use-credentials"?w.credentials="include":z.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function s(z){if(z.ep)return;z.ep=!0;const w=C(z);fetch(z.href,w)}})();var Es={exports:{}},Ga={};var w0;function Sm(){if(w0)return Ga;w0=1;var h=Symbol.for("react.transitional.element"),x=Symbol.for("react.fragment");function C(s,z,w){var m=null;if(w!==void 0&&(m=""+w),z.key!==void 0&&(m=""+z.key),"key"in z){w={};for(var O in z)O!=="key"&&(w[O]=z[O])}else w=z;return z=w.ref,{$$typeof:h,type:s,key:m,ref:z!==void 0?z:null,props:w}}return Ga.Fragment=x,Ga.jsx=C,Ga.jsxs=C,Ga}var N0;function bm(){return N0||(N0=1,Es.exports=Sm()),Es.exports}var T=bm(),zs={exports:{}},Ya={},As={exports:{}},Rs={};var U0;function Mm(){return U0||(U0=1,(function(h){function x(S,_){var X=S.length;S.push(_);t:for(;0<X;){var ot=X-1>>>1,ct=S[ot];if(0<z(ct,_))S[ot]=_,S[X]=ct,X=ot;else break t}}function C(S){return S.length===0?null:S[0]}function s(S){if(S.length===0)return null;var _=S[0],X=S.pop();if(X!==_){S[0]=X;t:for(var ot=0,ct=S.length,o=ct>>>1;ot<o;){var R=2*(ot+1)-1,j=S[R],Y=R+1,K=S[Y];if(0>z(j,X))Y<ct&&0>z(K,j)?(S[ot]=K,S[Y]=X,ot=Y):(S[ot]=j,S[R]=X,ot=R);else if(Y<ct&&0>z(K,X))S[ot]=K,S[Y]=X,ot=Y;else break t}}return _}function z(S,_){var X=S.sortIndex-_.sortIndex;return X!==0?X:S.id-_.id}if(h.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var w=performance;h.unstable_now=function(){return w.now()}}else{var m=Date,O=m.now();h.unstable_now=function(){return m.now()-O}}var p=[],b=[],U=1,N=null,L=3,P=!1,st=!1,gt=!1,ft=!1,jt=typeof setTimeout=="function"?setTimeout:null,oe=typeof clearTimeout=="function"?clearTimeout:null,tt=typeof setImmediate<"u"?setImmediate:null;function ue(S){for(var _=C(b);_!==null;){if(_.callback===null)s(b);else if(_.startTime<=S)s(b),_.sortIndex=_.expirationTime,x(p,_);else break;_=C(b)}}function zt(S){if(gt=!1,ue(S),!st)if(C(p)!==null)st=!0,yt||(yt=!0,mt());else{var _=C(b);_!==null&&Nt(zt,_.startTime-S)}}var yt=!1,J=-1,H=5,At=-1;function kt(){return ft?!0:!(h.unstable_now()-At<H)}function Gt(){if(ft=!1,yt){var S=h.unstable_now();At=S;var _=!0;try{t:{st=!1,gt&&(gt=!1,oe(J),J=-1),P=!0;var X=L;try{e:{for(ue(S),N=C(p);N!==null&&!(N.expirationTime>S&&kt());){var ot=N.callback;if(typeof ot=="function"){N.callback=null,L=N.priorityLevel;var ct=ot(N.expirationTime<=S);if(S=h.unstable_now(),typeof ct=="function"){N.callback=ct,ue(S),_=!0;break e}N===C(p)&&s(p),ue(S)}else s(p);N=C(p)}if(N!==null)_=!0;else{var o=C(b);o!==null&&Nt(zt,o.startTime-S),_=!1}}break t}finally{N=null,L=X,P=!1}_=void 0}}finally{_?mt():yt=!1}}}var mt;if(typeof tt=="function")mt=function(){tt(Gt)};else if(typeof MessageChannel<"u"){var Ct=new MessageChannel,wt=Ct.port2;Ct.port1.onmessage=Gt,mt=function(){wt.postMessage(null)}}else mt=function(){jt(Gt,0)};function Nt(S,_){J=jt(function(){S(h.unstable_now())},_)}h.unstable_IdlePriority=5,h.unstable_ImmediatePriority=1,h.unstable_LowPriority=4,h.unstable_NormalPriority=3,h.unstable_Profiling=null,h.unstable_UserBlockingPriority=2,h.unstable_cancelCallback=function(S){S.callback=null},h.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<S?Math.floor(1e3/S):5},h.unstable_getCurrentPriorityLevel=function(){return L},h.unstable_next=function(S){switch(L){case 1:case 2:case 3:var _=3;break;default:_=L}var X=L;L=_;try{return S()}finally{L=X}},h.unstable_requestPaint=function(){ft=!0},h.unstable_runWithPriority=function(S,_){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var X=L;L=S;try{return _()}finally{L=X}},h.unstable_scheduleCallback=function(S,_,X){var ot=h.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ot+X:ot):X=ot,S){case 1:var ct=-1;break;case 2:ct=250;break;case 5:ct=1073741823;break;case 4:ct=1e4;break;default:ct=5e3}return ct=X+ct,S={id:U++,callback:_,priorityLevel:S,startTime:X,expirationTime:ct,sortIndex:-1},X>ot?(S.sortIndex=X,x(b,S),C(p)===null&&S===C(b)&&(gt?(oe(J),J=-1):gt=!0,Nt(zt,X-ot))):(S.sortIndex=ct,x(p,S),st||P||(st=!0,yt||(yt=!0,mt()))),S},h.unstable_shouldYield=kt,h.unstable_wrapCallback=function(S){var _=L;return function(){var X=L;L=_;try{return S.apply(this,arguments)}finally{L=X}}}})(Rs)),Rs}var H0;function Tm(){return H0||(H0=1,As.exports=Mm()),As.exports}var Ds={exports:{}},$={};var j0;function xm(){if(j0)return $;j0=1;var h=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),m=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),L=Symbol.iterator;function P(o){return o===null||typeof o!="object"?null:(o=L&&o[L]||o["@@iterator"],typeof o=="function"?o:null)}var st={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gt=Object.assign,ft={};function jt(o,R,j){this.props=o,this.context=R,this.refs=ft,this.updater=j||st}jt.prototype.isReactComponent={},jt.prototype.setState=function(o,R){if(typeof o!="object"&&typeof o!="function"&&o!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,o,R,"setState")},jt.prototype.forceUpdate=function(o){this.updater.enqueueForceUpdate(this,o,"forceUpdate")};function oe(){}oe.prototype=jt.prototype;function tt(o,R,j){this.props=o,this.context=R,this.refs=ft,this.updater=j||st}var ue=tt.prototype=new oe;ue.constructor=tt,gt(ue,jt.prototype),ue.isPureReactComponent=!0;var zt=Array.isArray;function yt(){}var J={H:null,A:null,T:null,S:null},H=Object.prototype.hasOwnProperty;function At(o,R,j){var Y=j.ref;return{$$typeof:h,type:o,key:R,ref:Y!==void 0?Y:null,props:j}}function kt(o,R){return At(o.type,R,o.props)}function Gt(o){return typeof o=="object"&&o!==null&&o.$$typeof===h}function mt(o){var R={"=":"=0",":":"=2"};return"$"+o.replace(/[=:]/g,function(j){return R[j]})}var Ct=/\/+/g;function wt(o,R){return typeof o=="object"&&o!==null&&o.key!=null?mt(""+o.key):R.toString(36)}function Nt(o){switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:switch(typeof o.status=="string"?o.then(yt,yt):(o.status="pending",o.then(function(R){o.status==="pending"&&(o.status="fulfilled",o.value=R)},function(R){o.status==="pending"&&(o.status="rejected",o.reason=R)})),o.status){case"fulfilled":return o.value;case"rejected":throw o.reason}}throw o}function S(o,R,j,Y,K){var k=typeof o;(k==="undefined"||k==="boolean")&&(o=null);var lt=!1;if(o===null)lt=!0;else switch(k){case"bigint":case"string":case"number":lt=!0;break;case"object":switch(o.$$typeof){case h:case x:lt=!0;break;case U:return lt=o._init,S(lt(o._payload),R,j,Y,K)}}if(lt)return K=K(o),lt=Y===""?"."+wt(o,0):Y,zt(K)?(j="",lt!=null&&(j=lt.replace(Ct,"$&/")+"/"),S(K,R,j,"",function(Ge){return Ge})):K!=null&&(Gt(K)&&(K=kt(K,j+(K.key==null||o&&o.key===K.key?"":(""+K.key).replace(Ct,"$&/")+"/")+lt)),R.push(K)),1;lt=0;var Vt=Y===""?".":Y+":";if(zt(o))for(var Rt=0;Rt<o.length;Rt++)Y=o[Rt],k=Vt+wt(Y,Rt),lt+=S(Y,R,j,k,K);else if(Rt=P(o),typeof Rt=="function")for(o=Rt.call(o),Rt=0;!(Y=o.next()).done;)Y=Y.value,k=Vt+wt(Y,Rt++),lt+=S(Y,R,j,k,K);else if(k==="object"){if(typeof o.then=="function")return S(Nt(o),R,j,Y,K);throw R=String(o),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.")}return lt}function _(o,R,j){if(o==null)return o;var Y=[],K=0;return S(o,Y,"","",function(k){return R.call(j,k,K++)}),Y}function X(o){if(o._status===-1){var R=o._result;R=R(),R.then(function(j){(o._status===0||o._status===-1)&&(o._status=1,o._result=j)},function(j){(o._status===0||o._status===-1)&&(o._status=2,o._result=j)}),o._status===-1&&(o._status=0,o._result=R)}if(o._status===1)return o._result.default;throw o._result}var ot=typeof reportError=="function"?reportError:function(o){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var R=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof o=="object"&&o!==null&&typeof o.message=="string"?String(o.message):String(o),error:o});if(!window.dispatchEvent(R))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",o);return}console.error(o)},ct={map:_,forEach:function(o,R,j){_(o,function(){R.apply(this,arguments)},j)},count:function(o){var R=0;return _(o,function(){R++}),R},toArray:function(o){return _(o,function(R){return R})||[]},only:function(o){if(!Gt(o))throw Error("React.Children.only expected to receive a single React element child.");return o}};return $.Activity=N,$.Children=ct,$.Component=jt,$.Fragment=C,$.Profiler=z,$.PureComponent=tt,$.StrictMode=s,$.Suspense=p,$.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,$.__COMPILER_RUNTIME={__proto__:null,c:function(o){return J.H.useMemoCache(o)}},$.cache=function(o){return function(){return o.apply(null,arguments)}},$.cacheSignal=function(){return null},$.cloneElement=function(o,R,j){if(o==null)throw Error("The argument must be a React element, but you passed "+o+".");var Y=gt({},o.props),K=o.key;if(R!=null)for(k in R.key!==void 0&&(K=""+R.key),R)!H.call(R,k)||k==="key"||k==="__self"||k==="__source"||k==="ref"&&R.ref===void 0||(Y[k]=R[k]);var k=arguments.length-2;if(k===1)Y.children=j;else if(1<k){for(var lt=Array(k),Vt=0;Vt<k;Vt++)lt[Vt]=arguments[Vt+2];Y.children=lt}return At(o.type,K,Y)},$.createContext=function(o){return o={$$typeof:m,_currentValue:o,_currentValue2:o,_threadCount:0,Provider:null,Consumer:null},o.Provider=o,o.Consumer={$$typeof:w,_context:o},o},$.createElement=function(o,R,j){var Y,K={},k=null;if(R!=null)for(Y in R.key!==void 0&&(k=""+R.key),R)H.call(R,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(K[Y]=R[Y]);var lt=arguments.length-2;if(lt===1)K.children=j;else if(1<lt){for(var Vt=Array(lt),Rt=0;Rt<lt;Rt++)Vt[Rt]=arguments[Rt+2];K.children=Vt}if(o&&o.defaultProps)for(Y in lt=o.defaultProps,lt)K[Y]===void 0&&(K[Y]=lt[Y]);return At(o,k,K)},$.createRef=function(){return{current:null}},$.forwardRef=function(o){return{$$typeof:O,render:o}},$.isValidElement=Gt,$.lazy=function(o){return{$$typeof:U,_payload:{_status:-1,_result:o},_init:X}},$.memo=function(o,R){return{$$typeof:b,type:o,compare:R===void 0?null:R}},$.startTransition=function(o){var R=J.T,j={};J.T=j;try{var Y=o(),K=J.S;K!==null&&K(j,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(yt,ot)}catch(k){ot(k)}finally{R!==null&&j.types!==null&&(R.types=j.types),J.T=R}},$.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},$.use=function(o){return J.H.use(o)},$.useActionState=function(o,R,j){return J.H.useActionState(o,R,j)},$.useCallback=function(o,R){return J.H.useCallback(o,R)},$.useContext=function(o){return J.H.useContext(o)},$.useDebugValue=function(){},$.useDeferredValue=function(o,R){return J.H.useDeferredValue(o,R)},$.useEffect=function(o,R){return J.H.useEffect(o,R)},$.useEffectEvent=function(o){return J.H.useEffectEvent(o)},$.useId=function(){return J.H.useId()},$.useImperativeHandle=function(o,R,j){return J.H.useImperativeHandle(o,R,j)},$.useInsertionEffect=function(o,R){return J.H.useInsertionEffect(o,R)},$.useLayoutEffect=function(o,R){return J.H.useLayoutEffect(o,R)},$.useMemo=function(o,R){return J.H.useMemo(o,R)},$.useOptimistic=function(o,R){return J.H.useOptimistic(o,R)},$.useReducer=function(o,R,j){return J.H.useReducer(o,R,j)},$.useRef=function(o){return J.H.useRef(o)},$.useState=function(o){return J.H.useState(o)},$.useSyncExternalStore=function(o,R,j){return J.H.useSyncExternalStore(o,R,j)},$.useTransition=function(){return J.H.useTransition()},$.version="19.2.8",$}var G0;function Ns(){return G0||(G0=1,Ds.exports=xm()),Ds.exports}var Cs={exports:{}},ae={};var Y0;function Em(){if(Y0)return ae;Y0=1;var h=Ns();function x(p){var b="https://react.dev/errors/"+p;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var U=2;U<arguments.length;U++)b+="&args[]="+encodeURIComponent(arguments[U])}return"Minified React error #"+p+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function C(){}var s={d:{f:C,r:function(){throw Error(x(522))},D:C,C,L:C,m:C,X:C,S:C,M:C},p:0,findDOMNode:null},z=Symbol.for("react.portal");function w(p,b,U){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:N==null?null:""+N,children:p,containerInfo:b,implementation:U}}var m=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function O(p,b){if(p==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return ae.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,ae.createPortal=function(p,b){var U=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(x(299));return w(p,b,null,U)},ae.flushSync=function(p){var b=m.T,U=s.p;try{if(m.T=null,s.p=2,p)return p()}finally{m.T=b,s.p=U,s.d.f()}},ae.preconnect=function(p,b){typeof p=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,s.d.C(p,b))},ae.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},ae.preinit=function(p,b){if(typeof p=="string"&&b&&typeof b.as=="string"){var U=b.as,N=O(U,b.crossOrigin),L=typeof b.integrity=="string"?b.integrity:void 0,P=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;U==="style"?s.d.S(p,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:N,integrity:L,fetchPriority:P}):U==="script"&&s.d.X(p,{crossOrigin:N,integrity:L,fetchPriority:P,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},ae.preinitModule=function(p,b){if(typeof p=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var U=O(b.as,b.crossOrigin);s.d.M(p,{crossOrigin:U,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&s.d.M(p)},ae.preload=function(p,b){if(typeof p=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var U=b.as,N=O(U,b.crossOrigin);s.d.L(p,U,{crossOrigin:N,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},ae.preloadModule=function(p,b){if(typeof p=="string")if(b){var U=O(b.as,b.crossOrigin);s.d.m(p,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:U,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else s.d.m(p)},ae.requestFormReset=function(p){s.d.r(p)},ae.unstable_batchedUpdates=function(p,b){return p(b)},ae.useFormState=function(p,b,U){return m.H.useFormState(p,b,U)},ae.useFormStatus=function(){return m.H.useHostTransitionStatus()},ae.version="19.2.8",ae}var B0;function zm(){if(B0)return Cs.exports;B0=1;function h(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h)}catch(x){console.error(x)}}return h(),Cs.exports=Em(),Cs.exports}var L0;function Am(){if(L0)return Ya;L0=1;var h=Tm(),x=Ns(),C=zm();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function z(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function w(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function m(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function O(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function p(t){if(w(t)!==t)throw Error(s(188))}function b(t){var e=t.alternate;if(!e){if(e=w(t),e===null)throw Error(s(188));return e!==t?null:t}for(var n=t,l=e;;){var a=n.return;if(a===null)break;var u=a.alternate;if(u===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===u.child){for(u=a.child;u;){if(u===n)return p(a),t;if(u===l)return p(a),e;u=u.sibling}throw Error(s(188))}if(n.return!==l.return)n=a,l=u;else{for(var i=!1,c=a.child;c;){if(c===n){i=!0,n=a,l=u;break}if(c===l){i=!0,l=a,n=u;break}c=c.sibling}if(!i){for(c=u.child;c;){if(c===n){i=!0,n=u,l=a;break}if(c===l){i=!0,l=u,n=a;break}c=c.sibling}if(!i)throw Error(s(189))}}if(n.alternate!==l)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?t:e}function U(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=U(t),e!==null)return e;t=t.sibling}return null}var N=Object.assign,L=Symbol.for("react.element"),P=Symbol.for("react.transitional.element"),st=Symbol.for("react.portal"),gt=Symbol.for("react.fragment"),ft=Symbol.for("react.strict_mode"),jt=Symbol.for("react.profiler"),oe=Symbol.for("react.consumer"),tt=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),zt=Symbol.for("react.suspense"),yt=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),At=Symbol.for("react.activity"),kt=Symbol.for("react.memo_cache_sentinel"),Gt=Symbol.iterator;function mt(t){return t===null||typeof t!="object"?null:(t=Gt&&t[Gt]||t["@@iterator"],typeof t=="function"?t:null)}var Ct=Symbol.for("react.client.reference");function wt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Ct?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gt:return"Fragment";case jt:return"Profiler";case ft:return"StrictMode";case zt:return"Suspense";case yt:return"SuspenseList";case At:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case st:return"Portal";case tt:return t.displayName||"Context";case oe:return(t._context.displayName||"Context")+".Consumer";case ue:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case J:return e=t.displayName||null,e!==null?e:wt(t.type)||"Memo";case H:e=t._payload,t=t._init;try{return wt(t(e))}catch{}}return null}var Nt=Array.isArray,S=x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_=C.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},ot=[],ct=-1;function o(t){return{current:t}}function R(t){0>ct||(t.current=ot[ct],ot[ct]=null,ct--)}function j(t,e){ct++,ot[ct]=t.current,t.current=e}var Y=o(null),K=o(null),k=o(null),lt=o(null);function Vt(t,e){switch(j(k,e),j(K,t),j(Y,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?e0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=e0(e),t=n0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}R(Y),j(Y,t)}function Rt(){R(Y),R(K),R(k)}function Ge(t){t.memoizedState!==null&&j(lt,t);var e=Y.current,n=n0(e,t.type);e!==n&&(j(K,t),j(Y,n))}function Wt(t){K.current===t&&(R(Y),R(K)),lt.current===t&&(R(lt),Na._currentValue=X)}var dn,al;function G(t){if(dn===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);dn=e&&e[1]||"",al=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+dn+t+al}var W=!1;function Yt(t,e){if(!t||W)return"";W=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(M){var g=M}Reflect.construct(t,[],D)}else{try{D.call()}catch(M){g=M}t.call(D.prototype)}}else{try{throw Error()}catch(M){g=M}(D=t())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(M){if(M&&g&&typeof M.stack=="string")return[M.stack,g.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=l.DetermineComponentFrameRoot(),i=u[0],c=u[1];if(i&&c){var f=i.split(`
`),v=c.split(`
`);for(a=l=0;l<f.length&&!f[l].includes("DetermineComponentFrameRoot");)l++;for(;a<v.length&&!v[a].includes("DetermineComponentFrameRoot");)a++;if(l===f.length||a===v.length)for(l=f.length-1,a=v.length-1;1<=l&&0<=a&&f[l]!==v[a];)a--;for(;1<=l&&0<=a;l--,a--)if(f[l]!==v[a]){if(l!==1||a!==1)do if(l--,a--,0>a||f[l]!==v[a]){var E=`
`+f[l].replace(" at new "," at ");return t.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",t.displayName)),E}while(1<=l&&0<=a);break}}}finally{W=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?G(n):""}function Qt(t,e){switch(t.tag){case 26:case 27:case 5:return G(t.type);case 16:return G("Lazy");case 13:return t.child!==e&&e!==null?G("Suspense Fallback"):G("Suspense");case 19:return G("SuspenseList");case 0:case 15:return Yt(t.type,!1);case 11:return Yt(t.type.render,!1);case 1:return Yt(t.type,!0);case 31:return G("Activity");default:return""}}function le(t){try{var e="",n=null;do e+=Qt(t,n),n=t,t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var mn=Object.prototype.hasOwnProperty,re=h.unstable_scheduleCallback,Se=h.unstable_cancelCallback,Ye=h.unstable_shouldYield,fi=h.unstable_requestPaint,ie=h.unstable_now,oi=h.unstable_getCurrentPriorityLevel,La=h.unstable_ImmediatePriority,qa=h.unstable_UserBlockingPriority,ul=h.unstable_NormalPriority,Xa=h.unstable_LowPriority,Qa=h.unstable_IdlePriority,ri=h.log,Bn=h.unstable_setDisableYieldValue,Be=null,ce=null;function se(t){if(typeof ri=="function"&&Bn(t),ce&&typeof ce.setStrictMode=="function")try{ce.setStrictMode(Be,t)}catch{}}var Kt=Math.clz32?Math.clz32:uh,lh=Math.log,ah=Math.LN2;function uh(t){return t>>>=0,t===0?32:31-(lh(t)/ah|0)|0}var Za=256,Va=262144,Ka=4194304;function Ln(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ja(t,e,n){var l=t.pendingLanes;if(l===0)return 0;var a=0,u=t.suspendedLanes,i=t.pingedLanes;t=t.warmLanes;var c=l&134217727;return c!==0?(l=c&~u,l!==0?a=Ln(l):(i&=c,i!==0?a=Ln(i):n||(n=c&~t,n!==0&&(a=Ln(n))))):(c=l&~u,c!==0?a=Ln(c):i!==0?a=Ln(i):n||(n=l&~t,n!==0&&(a=Ln(n)))),a===0?0:e!==0&&e!==a&&(e&u)===0&&(u=a&-a,n=e&-e,u>=n||u===32&&(n&4194048)!==0)?e:a}function Kl(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function ih(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Us(){var t=Ka;return Ka<<=1,(Ka&62914560)===0&&(Ka=4194304),t}function hi(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Jl(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ch(t,e,n,l,a,u){var i=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var c=t.entanglements,f=t.expirationTimes,v=t.hiddenUpdates;for(n=i&~n;0<n;){var E=31-Kt(n),D=1<<E;c[E]=0,f[E]=-1;var g=v[E];if(g!==null)for(v[E]=null,E=0;E<g.length;E++){var M=g[E];M!==null&&(M.lane&=-536870913)}n&=~D}l!==0&&Hs(t,l,0),u!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=u&~(i&~e))}function Hs(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-Kt(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|n&261930}function js(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var l=31-Kt(n),a=1<<l;a&e|t[l]&e&&(t[l]|=e),n&=~a}}function Gs(t,e){var n=e&-e;return n=(n&42)!==0?1:di(n),(n&(t.suspendedLanes|e))!==0?0:n}function di(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function mi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ys(){var t=_.p;return t!==0?t:(t=window.event,t===void 0?32:z0(t.type))}function Bs(t,e){var n=_.p;try{return _.p=t,e()}finally{_.p=n}}var yn=Math.random().toString(36).slice(2),Ft="__reactFiber$"+yn,he="__reactProps$"+yn,il="__reactContainer$"+yn,yi="__reactEvents$"+yn,sh="__reactListeners$"+yn,fh="__reactHandles$"+yn,Ls="__reactResources$"+yn,$l="__reactMarker$"+yn;function vi(t){delete t[Ft],delete t[he],delete t[yi],delete t[sh],delete t[fh]}function cl(t){var e=t[Ft];if(e)return e;for(var n=t.parentNode;n;){if(e=n[il]||n[Ft]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=f0(t);t!==null;){if(n=t[Ft])return n;t=f0(t)}return e}t=n,n=t.parentNode}return null}function sl(t){if(t=t[Ft]||t[il]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function kl(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function fl(t){var e=t[Ls];return e||(e=t[Ls]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Jt(t){t[$l]=!0}var qs=new Set,Xs={};function qn(t,e){ol(t,e),ol(t+"Capture",e)}function ol(t,e){for(Xs[t]=e,t=0;t<e.length;t++)qs.add(e[t])}var oh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qs={},Zs={};function rh(t){return mn.call(Zs,t)?!0:mn.call(Qs,t)?!1:oh.test(t)?Zs[t]=!0:(Qs[t]=!0,!1)}function $a(t,e,n){if(rh(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function ka(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function $e(t,e,n,l){if(l===null)t.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+l)}}function Re(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Vs(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function hh(t,e,n){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var a=l.get,u=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(i){n=""+i,u.call(this,i)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(i){n=""+i},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function pi(t){if(!t._valueTracker){var e=Vs(t)?"checked":"value";t._valueTracker=hh(t,e,""+t[e])}}function Ks(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),l="";return t&&(l=Vs(t)?t.checked?"true":"false":t.value),t=l,t!==n?(e.setValue(t),!0):!1}function Wa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var dh=/[\n"\\]/g;function De(t){return t.replace(dh,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function gi(t,e,n,l,a,u,i,c){t.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.type=i:t.removeAttribute("type"),e!=null?i==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Re(e)):t.value!==""+Re(e)&&(t.value=""+Re(e)):i!=="submit"&&i!=="reset"||t.removeAttribute("value"),e!=null?Si(t,i,Re(e)):n!=null?Si(t,i,Re(n)):l!=null&&t.removeAttribute("value"),a==null&&u!=null&&(t.defaultChecked=!!u),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+Re(c):t.removeAttribute("name")}function Js(t,e,n,l,a,u,i,c){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||e!=null)){pi(t);return}n=n!=null?""+Re(n):"",e=e!=null?""+Re(e):n,c||e===t.value||(t.value=e),t.defaultValue=e}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=c?t.checked:!!l,t.defaultChecked=!!l,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.name=i),pi(t)}function Si(t,e,n){e==="number"&&Wa(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function rl(t,e,n,l){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&l&&(t[n].defaultSelected=!0)}else{for(n=""+Re(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,l&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function $s(t,e,n){if(e!=null&&(e=""+Re(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Re(n):""}function ks(t,e,n,l){if(e==null){if(l!=null){if(n!=null)throw Error(s(92));if(Nt(l)){if(1<l.length)throw Error(s(93));l=l[0]}n=l}n==null&&(n=""),e=n}n=Re(e),t.defaultValue=n,l=t.textContent,l===n&&l!==""&&l!==null&&(t.value=l),pi(t)}function hl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var mh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ws(t,e,n){var l=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,n):typeof n!="number"||n===0||mh.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function Fs(t,e,n){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var a in e)l=e[a],e.hasOwnProperty(a)&&n[a]!==l&&Ws(t,a,l)}else for(var u in e)e.hasOwnProperty(u)&&Ws(t,u,e[u])}function bi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),vh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fa(t){return vh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ke(){}var Mi=null;function Ti(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var dl=null,ml=null;function Is(t){var e=sl(t);if(e&&(t=e.stateNode)){var n=t[he]||null;t:switch(t=e.stateNode,e.type){case"input":if(gi(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+De(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var l=n[e];if(l!==t&&l.form===t.form){var a=l[he]||null;if(!a)throw Error(s(90));gi(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<n.length;e++)l=n[e],l.form===t.form&&Ks(l)}break t;case"textarea":$s(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&rl(t,!!n.multiple,e,!1)}}}var xi=!1;function Ps(t,e,n){if(xi)return t(e,n);xi=!0;try{var l=t(e);return l}finally{if(xi=!1,(dl!==null||ml!==null)&&(Yu(),dl&&(e=dl,t=ml,ml=dl=null,Is(e),t)))for(e=0;e<t.length;e++)Is(t[e])}}function Wl(t,e){var n=t.stateNode;if(n===null)return null;var l=n[he]||null;if(l===null)return null;n=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(s(231,e,typeof n));return n}var We=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ei=!1;if(We)try{var Fl={};Object.defineProperty(Fl,"passive",{get:function(){Ei=!0}}),window.addEventListener("test",Fl,Fl),window.removeEventListener("test",Fl,Fl)}catch{Ei=!1}var vn=null,zi=null,Ia=null;function tf(){if(Ia)return Ia;var t,e=zi,n=e.length,l,a="value"in vn?vn.value:vn.textContent,u=a.length;for(t=0;t<n&&e[t]===a[t];t++);var i=n-t;for(l=1;l<=i&&e[n-l]===a[u-l];l++);return Ia=a.slice(t,1<l?1-l:void 0)}function Pa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function tu(){return!0}function ef(){return!1}function de(t){function e(n,l,a,u,i){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(n=t[c],this[c]=n?n(u):u[c]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?tu:ef,this.isPropagationStopped=ef,this}return N(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=tu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=tu)},persist:function(){},isPersistent:tu}),e}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eu=de(Xn),Il=N({},Xn,{view:0,detail:0}),ph=de(Il),Ai,Ri,Pl,nu=N({},Il,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ci,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Pl&&(Pl&&t.type==="mousemove"?(Ai=t.screenX-Pl.screenX,Ri=t.screenY-Pl.screenY):Ri=Ai=0,Pl=t),Ai)},movementY:function(t){return"movementY"in t?t.movementY:Ri}}),nf=de(nu),gh=N({},nu,{dataTransfer:0}),Sh=de(gh),bh=N({},Il,{relatedTarget:0}),Di=de(bh),Mh=N({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),Th=de(Mh),xh=N({},Xn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Eh=de(xh),zh=N({},Xn,{data:0}),lf=de(zh),Ah={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ch(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Dh[t])?!!e[t]:!1}function Ci(){return Ch}var _h=N({},Il,{key:function(t){if(t.key){var e=Ah[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Rh[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ci,charCode:function(t){return t.type==="keypress"?Pa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Oh=de(_h),wh=N({},nu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),af=de(wh),Nh=N({},Il,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ci}),Uh=de(Nh),Hh=N({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),jh=de(Hh),Gh=N({},nu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Yh=de(Gh),Bh=N({},Xn,{newState:0,oldState:0}),Lh=de(Bh),qh=[9,13,27,32],_i=We&&"CompositionEvent"in window,ta=null;We&&"documentMode"in document&&(ta=document.documentMode);var Xh=We&&"TextEvent"in window&&!ta,uf=We&&(!_i||ta&&8<ta&&11>=ta),cf=" ",sf=!1;function ff(t,e){switch(t){case"keyup":return qh.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function of(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yl=!1;function Qh(t,e){switch(t){case"compositionend":return of(e);case"keypress":return e.which!==32?null:(sf=!0,cf);case"textInput":return t=e.data,t===cf&&sf?null:t;default:return null}}function Zh(t,e){if(yl)return t==="compositionend"||!_i&&ff(t,e)?(t=tf(),Ia=zi=vn=null,yl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return uf&&e.locale!=="ko"?null:e.data;default:return null}}var Vh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Vh[t.type]:e==="textarea"}function hf(t,e,n,l){dl?ml?ml.push(l):ml=[l]:dl=l,e=Vu(e,"onChange"),0<e.length&&(n=new eu("onChange","change",null,n,l),t.push({event:n,listeners:e}))}var ea=null,na=null;function Kh(t){kr(t,0)}function lu(t){var e=kl(t);if(Ks(e))return t}function df(t,e){if(t==="change")return e}var mf=!1;if(We){var Oi;if(We){var wi="oninput"in document;if(!wi){var yf=document.createElement("div");yf.setAttribute("oninput","return;"),wi=typeof yf.oninput=="function"}Oi=wi}else Oi=!1;mf=Oi&&(!document.documentMode||9<document.documentMode)}function vf(){ea&&(ea.detachEvent("onpropertychange",pf),na=ea=null)}function pf(t){if(t.propertyName==="value"&&lu(na)){var e=[];hf(e,na,t,Ti(t)),Ps(Kh,e)}}function Jh(t,e,n){t==="focusin"?(vf(),ea=e,na=n,ea.attachEvent("onpropertychange",pf)):t==="focusout"&&vf()}function $h(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return lu(na)}function kh(t,e){if(t==="click")return lu(e)}function Wh(t,e){if(t==="input"||t==="change")return lu(e)}function Fh(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var be=typeof Object.is=="function"?Object.is:Fh;function la(t,e){if(be(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),l=Object.keys(e);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!mn.call(e,a)||!be(t[a],e[a]))return!1}return!0}function gf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sf(t,e){var n=gf(t);t=0;for(var l;n;){if(n.nodeType===3){if(l=t+n.textContent.length,t<=e&&l>=e)return{node:n,offset:e-t};t=l}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=gf(n)}}function bf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?bf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Mf(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Wa(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wa(t.document)}return e}function Ni(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Ih=We&&"documentMode"in document&&11>=document.documentMode,vl=null,Ui=null,aa=null,Hi=!1;function Tf(t,e,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hi||vl==null||vl!==Wa(l)||(l=vl,"selectionStart"in l&&Ni(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),aa&&la(aa,l)||(aa=l,l=Vu(Ui,"onSelect"),0<l.length&&(e=new eu("onSelect","select",null,e,n),t.push({event:e,listeners:l}),e.target=vl)))}function Qn(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var pl={animationend:Qn("Animation","AnimationEnd"),animationiteration:Qn("Animation","AnimationIteration"),animationstart:Qn("Animation","AnimationStart"),transitionrun:Qn("Transition","TransitionRun"),transitionstart:Qn("Transition","TransitionStart"),transitioncancel:Qn("Transition","TransitionCancel"),transitionend:Qn("Transition","TransitionEnd")},ji={},xf={};We&&(xf=document.createElement("div").style,"AnimationEvent"in window||(delete pl.animationend.animation,delete pl.animationiteration.animation,delete pl.animationstart.animation),"TransitionEvent"in window||delete pl.transitionend.transition);function Zn(t){if(ji[t])return ji[t];if(!pl[t])return t;var e=pl[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in xf)return ji[t]=e[n];return t}var Ef=Zn("animationend"),zf=Zn("animationiteration"),Af=Zn("animationstart"),Ph=Zn("transitionrun"),td=Zn("transitionstart"),ed=Zn("transitioncancel"),Rf=Zn("transitionend"),Df=new Map,Gi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gi.push("scrollEnd");function Le(t,e){Df.set(t,e),qn(e,[t])}var au=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ce=[],gl=0,Yi=0;function uu(){for(var t=gl,e=Yi=gl=0;e<t;){var n=Ce[e];Ce[e++]=null;var l=Ce[e];Ce[e++]=null;var a=Ce[e];Ce[e++]=null;var u=Ce[e];if(Ce[e++]=null,l!==null&&a!==null){var i=l.pending;i===null?a.next=a:(a.next=i.next,i.next=a),l.pending=a}u!==0&&Cf(n,a,u)}}function iu(t,e,n,l){Ce[gl++]=t,Ce[gl++]=e,Ce[gl++]=n,Ce[gl++]=l,Yi|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Bi(t,e,n,l){return iu(t,e,n,l),cu(t)}function Vn(t,e){return iu(t,null,null,e),cu(t)}function Cf(t,e,n){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n);for(var a=!1,u=t.return;u!==null;)u.childLanes|=n,l=u.alternate,l!==null&&(l.childLanes|=n),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(a=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,a&&e!==null&&(a=31-Kt(n),t=u.hiddenUpdates,l=t[a],l===null?t[a]=[e]:l.push(e),e.lane=n|536870912),u):null}function cu(t){if(50<Aa)throw Aa=0,$c=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Sl={};function nd(t,e,n,l){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(t,e,n,l){return new nd(t,e,n,l)}function Li(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Fe(t,e){var n=t.alternate;return n===null?(n=Me(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function _f(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function su(t,e,n,l,a,u){var i=0;if(l=t,typeof t=="function")Li(t)&&(i=1);else if(typeof t=="string")i=cm(t,n,Y.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case At:return t=Me(31,n,e,a),t.elementType=At,t.lanes=u,t;case gt:return Kn(n.children,a,u,e);case ft:i=8,a|=24;break;case jt:return t=Me(12,n,e,a|2),t.elementType=jt,t.lanes=u,t;case zt:return t=Me(13,n,e,a),t.elementType=zt,t.lanes=u,t;case yt:return t=Me(19,n,e,a),t.elementType=yt,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case tt:i=10;break t;case oe:i=9;break t;case ue:i=11;break t;case J:i=14;break t;case H:i=16,l=null;break t}i=29,n=Error(s(130,t===null?"null":typeof t,"")),l=null}return e=Me(i,n,e,a),e.elementType=t,e.type=l,e.lanes=u,e}function Kn(t,e,n,l){return t=Me(7,t,l,e),t.lanes=n,t}function qi(t,e,n){return t=Me(6,t,null,e),t.lanes=n,t}function Of(t){var e=Me(18,null,null,0);return e.stateNode=t,e}function Xi(t,e,n){return e=Me(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var wf=new WeakMap;function _e(t,e){if(typeof t=="object"&&t!==null){var n=wf.get(t);return n!==void 0?n:(e={value:t,source:e,stack:le(e)},wf.set(t,e),e)}return{value:t,source:e,stack:le(e)}}var bl=[],Ml=0,fu=null,ua=0,Oe=[],we=0,pn=null,Ze=1,Ve="";function Ie(t,e){bl[Ml++]=ua,bl[Ml++]=fu,fu=t,ua=e}function Nf(t,e,n){Oe[we++]=Ze,Oe[we++]=Ve,Oe[we++]=pn,pn=t;var l=Ze;t=Ve;var a=32-Kt(l)-1;l&=~(1<<a),n+=1;var u=32-Kt(e)+a;if(30<u){var i=a-a%5;u=(l&(1<<i)-1).toString(32),l>>=i,a-=i,Ze=1<<32-Kt(e)+a|n<<a|l,Ve=u+t}else Ze=1<<u|n<<a|l,Ve=t}function Qi(t){t.return!==null&&(Ie(t,1),Nf(t,1,0))}function Zi(t){for(;t===fu;)fu=bl[--Ml],bl[Ml]=null,ua=bl[--Ml],bl[Ml]=null;for(;t===pn;)pn=Oe[--we],Oe[we]=null,Ve=Oe[--we],Oe[we]=null,Ze=Oe[--we],Oe[we]=null}function Uf(t,e){Oe[we++]=Ze,Oe[we++]=Ve,Oe[we++]=pn,Ze=e.id,Ve=e.overflow,pn=t}var It=null,xt=null,it=!1,gn=null,Ne=!1,Vi=Error(s(519));function Sn(t){var e=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ia(_e(e,t)),Vi}function Hf(t){var e=t.stateNode,n=t.type,l=t.memoizedProps;switch(e[Ft]=t,e[he]=l,n){case"dialog":nt("cancel",e),nt("close",e);break;case"iframe":case"object":case"embed":nt("load",e);break;case"video":case"audio":for(n=0;n<Da.length;n++)nt(Da[n],e);break;case"source":nt("error",e);break;case"img":case"image":case"link":nt("error",e),nt("load",e);break;case"details":nt("toggle",e);break;case"input":nt("invalid",e),Js(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":nt("invalid",e);break;case"textarea":nt("invalid",e),ks(e,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||l.suppressHydrationWarning===!0||Pr(e.textContent,n)?(l.popover!=null&&(nt("beforetoggle",e),nt("toggle",e)),l.onScroll!=null&&nt("scroll",e),l.onScrollEnd!=null&&nt("scrollend",e),l.onClick!=null&&(e.onclick=ke),e=!0):e=!1,e||Sn(t,!0)}function jf(t){for(It=t.return;It;)switch(It.tag){case 5:case 31:case 13:Ne=!1;return;case 27:case 3:Ne=!0;return;default:It=It.return}}function Tl(t){if(t!==It)return!1;if(!it)return jf(t),it=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||fs(t.type,t.memoizedProps)),n=!n),n&&xt&&Sn(t),jf(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));xt=s0(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));xt=s0(t)}else e===27?(e=xt,Nn(t.type)?(t=ms,ms=null,xt=t):xt=e):xt=It?He(t.stateNode.nextSibling):null;return!0}function Jn(){xt=It=null,it=!1}function Ki(){var t=gn;return t!==null&&(pe===null?pe=t:pe.push.apply(pe,t),gn=null),t}function ia(t){gn===null?gn=[t]:gn.push(t)}var Ji=o(null),$n=null,Pe=null;function bn(t,e,n){j(Ji,e._currentValue),e._currentValue=n}function tn(t){t._currentValue=Ji.current,R(Ji)}function $i(t,e,n){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===n)break;t=t.return}}function ki(t,e,n,l){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var u=a.dependencies;if(u!==null){var i=a.child;u=u.firstContext;t:for(;u!==null;){var c=u;u=a;for(var f=0;f<e.length;f++)if(c.context===e[f]){u.lanes|=n,c=u.alternate,c!==null&&(c.lanes|=n),$i(u.return,n,t),l||(i=null);break t}u=c.next}}else if(a.tag===18){if(i=a.return,i===null)throw Error(s(341));i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),$i(i,n,t),i=null}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}}function xl(t,e,n,l){t=null;for(var a=e,u=!1;a!==null;){if(!u){if((a.flags&524288)!==0)u=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var i=a.alternate;if(i===null)throw Error(s(387));if(i=i.memoizedProps,i!==null){var c=a.type;be(a.pendingProps.value,i.value)||(t!==null?t.push(c):t=[c])}}else if(a===lt.current){if(i=a.alternate,i===null)throw Error(s(387));i.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(Na):t=[Na])}a=a.return}t!==null&&ki(e,t,n,l),e.flags|=262144}function ou(t){for(t=t.firstContext;t!==null;){if(!be(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function kn(t){$n=t,Pe=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Pt(t){return Gf($n,t)}function ru(t,e){return $n===null&&kn(t),Gf(t,e)}function Gf(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Pe===null){if(t===null)throw Error(s(308));Pe=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Pe=Pe.next=e;return n}var ld=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},ad=h.unstable_scheduleCallback,ud=h.unstable_NormalPriority,Bt={$$typeof:tt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wi(){return{controller:new ld,data:new Map,refCount:0}}function ca(t){t.refCount--,t.refCount===0&&ad(ud,function(){t.controller.abort()})}var sa=null,Fi=0,El=0,zl=null;function id(t,e){if(sa===null){var n=sa=[];Fi=0,El=ts(),zl={status:"pending",value:void 0,then:function(l){n.push(l)}}}return Fi++,e.then(Yf,Yf),e}function Yf(){if(--Fi===0&&sa!==null){zl!==null&&(zl.status="fulfilled");var t=sa;sa=null,El=0,zl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function cd(t,e){var n=[],l={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var a=0;a<n.length;a++)(0,n[a])(e)},function(a){for(l.status="rejected",l.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),l}var Bf=S.S;S.S=function(t,e){xr=ie(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&id(t,e),Bf!==null&&Bf(t,e)};var Wn=o(null);function Ii(){var t=Wn.current;return t!==null?t:Tt.pooledCache}function hu(t,e){e===null?j(Wn,Wn.current):j(Wn,e.pool)}function Lf(){var t=Ii();return t===null?null:{parent:Bt._currentValue,pool:t}}var Al=Error(s(460)),Pi=Error(s(474)),du=Error(s(542)),mu={then:function(){}};function qf(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Xf(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(ke,ke),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Zf(t),t;default:if(typeof e.status=="string")e.then(ke,ke);else{if(t=Tt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=l}},function(l){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Zf(t),t}throw In=e,Al}}function Fn(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(In=n,Al):n}}var In=null;function Qf(){if(In===null)throw Error(s(459));var t=In;return In=null,t}function Zf(t){if(t===Al||t===du)throw Error(s(483))}var Rl=null,fa=0;function yu(t){var e=fa;return fa+=1,Rl===null&&(Rl=[]),Xf(Rl,t,e)}function oa(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function vu(t,e){throw e.$$typeof===L?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Vf(t){function e(d,r){if(t){var y=d.deletions;y===null?(d.deletions=[r],d.flags|=16):y.push(r)}}function n(d,r){if(!t)return null;for(;r!==null;)e(d,r),r=r.sibling;return null}function l(d){for(var r=new Map;d!==null;)d.key!==null?r.set(d.key,d):r.set(d.index,d),d=d.sibling;return r}function a(d,r){return d=Fe(d,r),d.index=0,d.sibling=null,d}function u(d,r,y){return d.index=y,t?(y=d.alternate,y!==null?(y=y.index,y<r?(d.flags|=67108866,r):y):(d.flags|=67108866,r)):(d.flags|=1048576,r)}function i(d){return t&&d.alternate===null&&(d.flags|=67108866),d}function c(d,r,y,A){return r===null||r.tag!==6?(r=qi(y,d.mode,A),r.return=d,r):(r=a(r,y),r.return=d,r)}function f(d,r,y,A){var Q=y.type;return Q===gt?E(d,r,y.props.children,A,y.key):r!==null&&(r.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===H&&Fn(Q)===r.type)?(r=a(r,y.props),oa(r,y),r.return=d,r):(r=su(y.type,y.key,y.props,null,d.mode,A),oa(r,y),r.return=d,r)}function v(d,r,y,A){return r===null||r.tag!==4||r.stateNode.containerInfo!==y.containerInfo||r.stateNode.implementation!==y.implementation?(r=Xi(y,d.mode,A),r.return=d,r):(r=a(r,y.children||[]),r.return=d,r)}function E(d,r,y,A,Q){return r===null||r.tag!==7?(r=Kn(y,d.mode,A,Q),r.return=d,r):(r=a(r,y),r.return=d,r)}function D(d,r,y){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=qi(""+r,d.mode,y),r.return=d,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case P:return y=su(r.type,r.key,r.props,null,d.mode,y),oa(y,r),y.return=d,y;case st:return r=Xi(r,d.mode,y),r.return=d,r;case H:return r=Fn(r),D(d,r,y)}if(Nt(r)||mt(r))return r=Kn(r,d.mode,y,null),r.return=d,r;if(typeof r.then=="function")return D(d,yu(r),y);if(r.$$typeof===tt)return D(d,ru(d,r),y);vu(d,r)}return null}function g(d,r,y,A){var Q=r!==null?r.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return Q!==null?null:c(d,r,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case P:return y.key===Q?f(d,r,y,A):null;case st:return y.key===Q?v(d,r,y,A):null;case H:return y=Fn(y),g(d,r,y,A)}if(Nt(y)||mt(y))return Q!==null?null:E(d,r,y,A,null);if(typeof y.then=="function")return g(d,r,yu(y),A);if(y.$$typeof===tt)return g(d,r,ru(d,y),A);vu(d,y)}return null}function M(d,r,y,A,Q){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return d=d.get(y)||null,c(r,d,""+A,Q);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case P:return d=d.get(A.key===null?y:A.key)||null,f(r,d,A,Q);case st:return d=d.get(A.key===null?y:A.key)||null,v(r,d,A,Q);case H:return A=Fn(A),M(d,r,y,A,Q)}if(Nt(A)||mt(A))return d=d.get(y)||null,E(r,d,A,Q,null);if(typeof A.then=="function")return M(d,r,y,yu(A),Q);if(A.$$typeof===tt)return M(d,r,y,ru(r,A),Q);vu(r,A)}return null}function B(d,r,y,A){for(var Q=null,rt=null,q=r,I=r=0,ut=null;q!==null&&I<y.length;I++){q.index>I?(ut=q,q=null):ut=q.sibling;var ht=g(d,q,y[I],A);if(ht===null){q===null&&(q=ut);break}t&&q&&ht.alternate===null&&e(d,q),r=u(ht,r,I),rt===null?Q=ht:rt.sibling=ht,rt=ht,q=ut}if(I===y.length)return n(d,q),it&&Ie(d,I),Q;if(q===null){for(;I<y.length;I++)q=D(d,y[I],A),q!==null&&(r=u(q,r,I),rt===null?Q=q:rt.sibling=q,rt=q);return it&&Ie(d,I),Q}for(q=l(q);I<y.length;I++)ut=M(q,d,I,y[I],A),ut!==null&&(t&&ut.alternate!==null&&q.delete(ut.key===null?I:ut.key),r=u(ut,r,I),rt===null?Q=ut:rt.sibling=ut,rt=ut);return t&&q.forEach(function(Yn){return e(d,Yn)}),it&&Ie(d,I),Q}function Z(d,r,y,A){if(y==null)throw Error(s(151));for(var Q=null,rt=null,q=r,I=r=0,ut=null,ht=y.next();q!==null&&!ht.done;I++,ht=y.next()){q.index>I?(ut=q,q=null):ut=q.sibling;var Yn=g(d,q,ht.value,A);if(Yn===null){q===null&&(q=ut);break}t&&q&&Yn.alternate===null&&e(d,q),r=u(Yn,r,I),rt===null?Q=Yn:rt.sibling=Yn,rt=Yn,q=ut}if(ht.done)return n(d,q),it&&Ie(d,I),Q;if(q===null){for(;!ht.done;I++,ht=y.next())ht=D(d,ht.value,A),ht!==null&&(r=u(ht,r,I),rt===null?Q=ht:rt.sibling=ht,rt=ht);return it&&Ie(d,I),Q}for(q=l(q);!ht.done;I++,ht=y.next())ht=M(q,d,I,ht.value,A),ht!==null&&(t&&ht.alternate!==null&&q.delete(ht.key===null?I:ht.key),r=u(ht,r,I),rt===null?Q=ht:rt.sibling=ht,rt=ht);return t&&q.forEach(function(gm){return e(d,gm)}),it&&Ie(d,I),Q}function Mt(d,r,y,A){if(typeof y=="object"&&y!==null&&y.type===gt&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case P:t:{for(var Q=y.key;r!==null;){if(r.key===Q){if(Q=y.type,Q===gt){if(r.tag===7){n(d,r.sibling),A=a(r,y.props.children),A.return=d,d=A;break t}}else if(r.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===H&&Fn(Q)===r.type){n(d,r.sibling),A=a(r,y.props),oa(A,y),A.return=d,d=A;break t}n(d,r);break}else e(d,r);r=r.sibling}y.type===gt?(A=Kn(y.props.children,d.mode,A,y.key),A.return=d,d=A):(A=su(y.type,y.key,y.props,null,d.mode,A),oa(A,y),A.return=d,d=A)}return i(d);case st:t:{for(Q=y.key;r!==null;){if(r.key===Q)if(r.tag===4&&r.stateNode.containerInfo===y.containerInfo&&r.stateNode.implementation===y.implementation){n(d,r.sibling),A=a(r,y.children||[]),A.return=d,d=A;break t}else{n(d,r);break}else e(d,r);r=r.sibling}A=Xi(y,d.mode,A),A.return=d,d=A}return i(d);case H:return y=Fn(y),Mt(d,r,y,A)}if(Nt(y))return B(d,r,y,A);if(mt(y)){if(Q=mt(y),typeof Q!="function")throw Error(s(150));return y=Q.call(y),Z(d,r,y,A)}if(typeof y.then=="function")return Mt(d,r,yu(y),A);if(y.$$typeof===tt)return Mt(d,r,ru(d,y),A);vu(d,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,r!==null&&r.tag===6?(n(d,r.sibling),A=a(r,y),A.return=d,d=A):(n(d,r),A=qi(y,d.mode,A),A.return=d,d=A),i(d)):n(d,r)}return function(d,r,y,A){try{fa=0;var Q=Mt(d,r,y,A);return Rl=null,Q}catch(q){if(q===Al||q===du)throw q;var rt=Me(29,q,null,d.mode);return rt.lanes=A,rt.return=d,rt}}}var Pn=Vf(!0),Kf=Vf(!1),Mn=!1;function tc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ec(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Tn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function xn(t,e,n){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(dt&2)!==0){var a=l.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),l.pending=e,e=cu(t),Cf(t,null,n),e}return iu(t,l,e,n),cu(t)}function ra(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,n|=l,e.lanes=n,js(t,n)}}function nc(t,e){var n=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var i={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?a=u=i:u=u.next=i,n=n.next}while(n!==null);u===null?a=u=e:u=u.next=e}else a=u=e;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:u,shared:l.shared,callbacks:l.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var lc=!1;function ha(){if(lc){var t=zl;if(t!==null)throw t}}function da(t,e,n,l){lc=!1;var a=t.updateQueue;Mn=!1;var u=a.firstBaseUpdate,i=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var f=c,v=f.next;f.next=null,i===null?u=v:i.next=v,i=f;var E=t.alternate;E!==null&&(E=E.updateQueue,c=E.lastBaseUpdate,c!==i&&(c===null?E.firstBaseUpdate=v:c.next=v,E.lastBaseUpdate=f))}if(u!==null){var D=a.baseState;i=0,E=v=f=null,c=u;do{var g=c.lane&-536870913,M=g!==c.lane;if(M?(at&g)===g:(l&g)===g){g!==0&&g===El&&(lc=!0),E!==null&&(E=E.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var B=t,Z=c;g=e;var Mt=n;switch(Z.tag){case 1:if(B=Z.payload,typeof B=="function"){D=B.call(Mt,D,g);break t}D=B;break t;case 3:B.flags=B.flags&-65537|128;case 0:if(B=Z.payload,g=typeof B=="function"?B.call(Mt,D,g):B,g==null)break t;D=N({},D,g);break t;case 2:Mn=!0}}g=c.callback,g!==null&&(t.flags|=64,M&&(t.flags|=8192),M=a.callbacks,M===null?a.callbacks=[g]:M.push(g))}else M={lane:g,tag:c.tag,payload:c.payload,callback:c.callback,next:null},E===null?(v=E=M,f=D):E=E.next=M,i|=g;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;M=c,c=M.next,M.next=null,a.lastBaseUpdate=M,a.shared.pending=null}}while(!0);E===null&&(f=D),a.baseState=f,a.firstBaseUpdate=v,a.lastBaseUpdate=E,u===null&&(a.shared.lanes=0),Dn|=i,t.lanes=i,t.memoizedState=D}}function Jf(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function $f(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)Jf(n[t],e)}var Dl=o(null),pu=o(0);function kf(t,e){t=on,j(pu,t),j(Dl,e),on=t|e.baseLanes}function ac(){j(pu,on),j(Dl,Dl.current)}function uc(){on=pu.current,R(Dl),R(pu)}var Te=o(null),Ue=null;function En(t){var e=t.alternate;j(Ut,Ut.current&1),j(Te,t),Ue===null&&(e===null||Dl.current!==null||e.memoizedState!==null)&&(Ue=t)}function ic(t){j(Ut,Ut.current),j(Te,t),Ue===null&&(Ue=t)}function Wf(t){t.tag===22?(j(Ut,Ut.current),j(Te,t),Ue===null&&(Ue=t)):zn()}function zn(){j(Ut,Ut.current),j(Te,Te.current)}function xe(t){R(Te),Ue===t&&(Ue=null),R(Ut)}var Ut=o(0);function gu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||hs(n)||ds(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var en=0,F=null,St=null,Lt=null,Su=!1,Cl=!1,tl=!1,bu=0,ma=0,_l=null,sd=0;function _t(){throw Error(s(321))}function cc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!be(t[n],e[n]))return!1;return!0}function sc(t,e,n,l,a,u){return en=u,F=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,S.H=t===null||t.memoizedState===null?Uo:xc,tl=!1,u=n(l,a),tl=!1,Cl&&(u=If(e,n,l,a)),Ff(t),u}function Ff(t){S.H=pa;var e=St!==null&&St.next!==null;if(en=0,Lt=St=F=null,Su=!1,ma=0,_l=null,e)throw Error(s(300));t===null||qt||(t=t.dependencies,t!==null&&ou(t)&&(qt=!0))}function If(t,e,n,l){F=t;var a=0;do{if(Cl&&(_l=null),ma=0,Cl=!1,25<=a)throw Error(s(301));if(a+=1,Lt=St=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}S.H=Ho,u=e(n,l)}while(Cl);return u}function fd(){var t=S.H,e=t.useState()[0];return e=typeof e.then=="function"?ya(e):e,t=t.useState()[0],(St!==null?St.memoizedState:null)!==t&&(F.flags|=1024),e}function fc(){var t=bu!==0;return bu=0,t}function oc(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function rc(t){if(Su){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Su=!1}en=0,Lt=St=F=null,Cl=!1,ma=bu=0,_l=null}function fe(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?F.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function Ht(){if(St===null){var t=F.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=Lt===null?F.memoizedState:Lt.next;if(e!==null)Lt=e,St=t;else{if(t===null)throw F.alternate===null?Error(s(467)):Error(s(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Lt===null?F.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function Mu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ya(t){var e=ma;return ma+=1,_l===null&&(_l=[]),t=Xf(_l,t,e),e=F,(Lt===null?e.memoizedState:Lt.next)===null&&(e=e.alternate,S.H=e===null||e.memoizedState===null?Uo:xc),t}function Tu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ya(t);if(t.$$typeof===tt)return Pt(t)}throw Error(s(438,String(t)))}function hc(t){var e=null,n=F.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var l=F.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Mu(),F.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),l=0;l<t;l++)n[l]=kt;return e.index++,n}function nn(t,e){return typeof e=="function"?e(t):e}function xu(t){var e=Ht();return dc(e,St,t)}function dc(t,e,n){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=n;var a=t.baseQueue,u=l.pending;if(u!==null){if(a!==null){var i=a.next;a.next=u.next,u.next=i}e.baseQueue=a=u,l.pending=null}if(u=t.baseState,a===null)t.memoizedState=u;else{e=a.next;var c=i=null,f=null,v=e,E=!1;do{var D=v.lane&-536870913;if(D!==v.lane?(at&D)===D:(en&D)===D){var g=v.revertLane;if(g===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),D===El&&(E=!0);else if((en&g)===g){v=v.next,g===El&&(E=!0);continue}else D={lane:0,revertLane:v.revertLane,gesture:null,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null},f===null?(c=f=D,i=u):f=f.next=D,F.lanes|=g,Dn|=g;D=v.action,tl&&n(u,D),u=v.hasEagerState?v.eagerState:n(u,D)}else g={lane:D,revertLane:v.revertLane,gesture:v.gesture,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null},f===null?(c=f=g,i=u):f=f.next=g,F.lanes|=D,Dn|=D;v=v.next}while(v!==null&&v!==e);if(f===null?i=u:f.next=c,!be(u,t.memoizedState)&&(qt=!0,E&&(n=zl,n!==null)))throw n;t.memoizedState=u,t.baseState=i,t.baseQueue=f,l.lastRenderedState=u}return a===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function mc(t){var e=Ht(),n=e.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=t;var l=n.dispatch,a=n.pending,u=e.memoizedState;if(a!==null){n.pending=null;var i=a=a.next;do u=t(u,i.action),i=i.next;while(i!==a);be(u,e.memoizedState)||(qt=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),n.lastRenderedState=u}return[u,l]}function Pf(t,e,n){var l=F,a=Ht(),u=it;if(u){if(n===void 0)throw Error(s(407));n=n()}else n=e();var i=!be((St||a).memoizedState,n);if(i&&(a.memoizedState=n,qt=!0),a=a.queue,pc(no.bind(null,l,a,t),[t]),a.getSnapshot!==e||i||Lt!==null&&Lt.memoizedState.tag&1){if(l.flags|=2048,Ol(9,{destroy:void 0},eo.bind(null,l,a,n,e),null),Tt===null)throw Error(s(349));u||(en&127)!==0||to(l,e,n)}return n}function to(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=F.updateQueue,e===null?(e=Mu(),F.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function eo(t,e,n,l){e.value=n,e.getSnapshot=l,lo(e)&&ao(t)}function no(t,e,n){return n(function(){lo(e)&&ao(t)})}function lo(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!be(t,n)}catch{return!0}}function ao(t){var e=Vn(t,2);e!==null&&ge(e,t,2)}function yc(t){var e=fe();if(typeof t=="function"){var n=t;if(t=n(),tl){se(!0);try{n()}finally{se(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nn,lastRenderedState:t},e}function uo(t,e,n,l){return t.baseState=n,dc(t,St,typeof l=="function"?l:nn)}function od(t,e,n,l,a){if(Au(t))throw Error(s(485));if(t=e.action,t!==null){var u={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};S.T!==null?n(!0):u.isTransition=!1,l(u),n=e.pending,n===null?(u.next=e.pending=u,io(e,u)):(u.next=n.next,e.pending=n.next=u)}}function io(t,e){var n=e.action,l=e.payload,a=t.state;if(e.isTransition){var u=S.T,i={};S.T=i;try{var c=n(a,l),f=S.S;f!==null&&f(i,c),co(t,e,c)}catch(v){vc(t,e,v)}finally{u!==null&&i.types!==null&&(u.types=i.types),S.T=u}}else try{u=n(a,l),co(t,e,u)}catch(v){vc(t,e,v)}}function co(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){so(t,e,l)},function(l){return vc(t,e,l)}):so(t,e,n)}function so(t,e,n){e.status="fulfilled",e.value=n,fo(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,io(t,n)))}function vc(t,e,n){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=n,fo(e),e=e.next;while(e!==l)}t.action=null}function fo(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function oo(t,e){return e}function ro(t,e){if(it){var n=Tt.formState;if(n!==null){t:{var l=F;if(it){if(xt){e:{for(var a=xt,u=Ne;a.nodeType!==8;){if(!u){a=null;break e}if(a=He(a.nextSibling),a===null){a=null;break e}}u=a.data,a=u==="F!"||u==="F"?a:null}if(a){xt=He(a.nextSibling),l=a.data==="F!";break t}}Sn(l)}l=!1}l&&(e=n[0])}}return n=fe(),n.memoizedState=n.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oo,lastRenderedState:e},n.queue=l,n=Oo.bind(null,F,l),l.dispatch=n,l=yc(!1),u=Tc.bind(null,F,!1,l.queue),l=fe(),a={state:e,dispatch:null,action:t,pending:null},l.queue=a,n=od.bind(null,F,a,u,n),a.dispatch=n,l.memoizedState=t,[e,n,!1]}function ho(t){var e=Ht();return mo(e,St,t)}function mo(t,e,n){if(e=dc(t,e,oo)[0],t=xu(nn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=ya(e)}catch(i){throw i===Al?du:i}else l=e;e=Ht();var a=e.queue,u=a.dispatch;return n!==e.memoizedState&&(F.flags|=2048,Ol(9,{destroy:void 0},rd.bind(null,a,n),null)),[l,u,t]}function rd(t,e){t.action=e}function yo(t){var e=Ht(),n=St;if(n!==null)return mo(e,n,t);Ht(),e=e.memoizedState,n=Ht();var l=n.queue.dispatch;return n.memoizedState=t,[e,l,!1]}function Ol(t,e,n,l){return t={tag:t,create:n,deps:l,inst:e,next:null},e=F.updateQueue,e===null&&(e=Mu(),F.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(l=n.next,n.next=t,t.next=l,e.lastEffect=t),t}function vo(){return Ht().memoizedState}function Eu(t,e,n,l){var a=fe();F.flags|=t,a.memoizedState=Ol(1|e,{destroy:void 0},n,l===void 0?null:l)}function zu(t,e,n,l){var a=Ht();l=l===void 0?null:l;var u=a.memoizedState.inst;St!==null&&l!==null&&cc(l,St.memoizedState.deps)?a.memoizedState=Ol(e,u,n,l):(F.flags|=t,a.memoizedState=Ol(1|e,u,n,l))}function po(t,e){Eu(8390656,8,t,e)}function pc(t,e){zu(2048,8,t,e)}function hd(t){F.flags|=4;var e=F.updateQueue;if(e===null)e=Mu(),F.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function go(t){var e=Ht().memoizedState;return hd({ref:e,nextImpl:t}),function(){if((dt&2)!==0)throw Error(s(440));return e.impl.apply(void 0,arguments)}}function So(t,e){return zu(4,2,t,e)}function bo(t,e){return zu(4,4,t,e)}function Mo(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function To(t,e,n){n=n!=null?n.concat([t]):null,zu(4,4,Mo.bind(null,e,t),n)}function gc(){}function xo(t,e){var n=Ht();e=e===void 0?null:e;var l=n.memoizedState;return e!==null&&cc(e,l[1])?l[0]:(n.memoizedState=[t,e],t)}function Eo(t,e){var n=Ht();e=e===void 0?null:e;var l=n.memoizedState;if(e!==null&&cc(e,l[1]))return l[0];if(l=t(),tl){se(!0);try{t()}finally{se(!1)}}return n.memoizedState=[l,e],l}function Sc(t,e,n){return n===void 0||(en&1073741824)!==0&&(at&261930)===0?t.memoizedState=e:(t.memoizedState=n,t=zr(),F.lanes|=t,Dn|=t,n)}function zo(t,e,n,l){return be(n,e)?n:Dl.current!==null?(t=Sc(t,n,l),be(t,e)||(qt=!0),t):(en&42)===0||(en&1073741824)!==0&&(at&261930)===0?(qt=!0,t.memoizedState=n):(t=zr(),F.lanes|=t,Dn|=t,e)}function Ao(t,e,n,l,a){var u=_.p;_.p=u!==0&&8>u?u:8;var i=S.T,c={};S.T=c,Tc(t,!1,e,n);try{var f=a(),v=S.S;if(v!==null&&v(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var E=cd(f,l);va(t,e,E,Ae(t))}else va(t,e,l,Ae(t))}catch(D){va(t,e,{then:function(){},status:"rejected",reason:D},Ae())}finally{_.p=u,i!==null&&c.types!==null&&(i.types=c.types),S.T=i}}function dd(){}function bc(t,e,n,l){if(t.tag!==5)throw Error(s(476));var a=Ro(t).queue;Ao(t,a,e,X,n===null?dd:function(){return Do(t),n(l)})}function Ro(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nn,lastRenderedState:X},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nn,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Do(t){var e=Ro(t);e.next===null&&(e=t.alternate.memoizedState),va(t,e.next.queue,{},Ae())}function Mc(){return Pt(Na)}function Co(){return Ht().memoizedState}function _o(){return Ht().memoizedState}function md(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=Ae();t=Tn(n);var l=xn(e,t,n);l!==null&&(ge(l,e,n),ra(l,e,n)),e={cache:Wi()},t.payload=e;return}e=e.return}}function yd(t,e,n){var l=Ae();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Au(t)?wo(e,n):(n=Bi(t,e,n,l),n!==null&&(ge(n,t,l),No(n,e,l)))}function Oo(t,e,n){var l=Ae();va(t,e,n,l)}function va(t,e,n,l){var a={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Au(t))wo(e,a);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var i=e.lastRenderedState,c=u(i,n);if(a.hasEagerState=!0,a.eagerState=c,be(c,i))return iu(t,e,a,0),Tt===null&&uu(),!1}catch{}if(n=Bi(t,e,a,l),n!==null)return ge(n,t,l),No(n,e,l),!0}return!1}function Tc(t,e,n,l){if(l={lane:2,revertLane:ts(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Au(t)){if(e)throw Error(s(479))}else e=Bi(t,n,l,2),e!==null&&ge(e,t,2)}function Au(t){var e=t.alternate;return t===F||e!==null&&e===F}function wo(t,e){Cl=Su=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function No(t,e,n){if((n&4194048)!==0){var l=e.lanes;l&=t.pendingLanes,n|=l,e.lanes=n,js(t,n)}}var pa={readContext:Pt,use:Tu,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useLayoutEffect:_t,useInsertionEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useSyncExternalStore:_t,useId:_t,useHostTransitionStatus:_t,useFormState:_t,useActionState:_t,useOptimistic:_t,useMemoCache:_t,useCacheRefresh:_t};pa.useEffectEvent=_t;var Uo={readContext:Pt,use:Tu,useCallback:function(t,e){return fe().memoizedState=[t,e===void 0?null:e],t},useContext:Pt,useEffect:po,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Eu(4194308,4,Mo.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Eu(4194308,4,t,e)},useInsertionEffect:function(t,e){Eu(4,2,t,e)},useMemo:function(t,e){var n=fe();e=e===void 0?null:e;var l=t();if(tl){se(!0);try{t()}finally{se(!1)}}return n.memoizedState=[l,e],l},useReducer:function(t,e,n){var l=fe();if(n!==void 0){var a=n(e);if(tl){se(!0);try{n(e)}finally{se(!1)}}}else a=e;return l.memoizedState=l.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},l.queue=t,t=t.dispatch=yd.bind(null,F,t),[l.memoizedState,t]},useRef:function(t){var e=fe();return t={current:t},e.memoizedState=t},useState:function(t){t=yc(t);var e=t.queue,n=Oo.bind(null,F,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:gc,useDeferredValue:function(t,e){var n=fe();return Sc(n,t,e)},useTransition:function(){var t=yc(!1);return t=Ao.bind(null,F,t.queue,!0,!1),fe().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var l=F,a=fe();if(it){if(n===void 0)throw Error(s(407));n=n()}else{if(n=e(),Tt===null)throw Error(s(349));(at&127)!==0||to(l,e,n)}a.memoizedState=n;var u={value:n,getSnapshot:e};return a.queue=u,po(no.bind(null,l,u,t),[t]),l.flags|=2048,Ol(9,{destroy:void 0},eo.bind(null,l,u,n,e),null),n},useId:function(){var t=fe(),e=Tt.identifierPrefix;if(it){var n=Ve,l=Ze;n=(l&~(1<<32-Kt(l)-1)).toString(32)+n,e="_"+e+"R_"+n,n=bu++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=sd++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Mc,useFormState:ro,useActionState:ro,useOptimistic:function(t){var e=fe();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Tc.bind(null,F,!0,n),n.dispatch=e,[t,e]},useMemoCache:hc,useCacheRefresh:function(){return fe().memoizedState=md.bind(null,F)},useEffectEvent:function(t){var e=fe(),n={impl:t};return e.memoizedState=n,function(){if((dt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},xc={readContext:Pt,use:Tu,useCallback:xo,useContext:Pt,useEffect:pc,useImperativeHandle:To,useInsertionEffect:So,useLayoutEffect:bo,useMemo:Eo,useReducer:xu,useRef:vo,useState:function(){return xu(nn)},useDebugValue:gc,useDeferredValue:function(t,e){var n=Ht();return zo(n,St.memoizedState,t,e)},useTransition:function(){var t=xu(nn)[0],e=Ht().memoizedState;return[typeof t=="boolean"?t:ya(t),e]},useSyncExternalStore:Pf,useId:Co,useHostTransitionStatus:Mc,useFormState:ho,useActionState:ho,useOptimistic:function(t,e){var n=Ht();return uo(n,St,t,e)},useMemoCache:hc,useCacheRefresh:_o};xc.useEffectEvent=go;var Ho={readContext:Pt,use:Tu,useCallback:xo,useContext:Pt,useEffect:pc,useImperativeHandle:To,useInsertionEffect:So,useLayoutEffect:bo,useMemo:Eo,useReducer:mc,useRef:vo,useState:function(){return mc(nn)},useDebugValue:gc,useDeferredValue:function(t,e){var n=Ht();return St===null?Sc(n,t,e):zo(n,St.memoizedState,t,e)},useTransition:function(){var t=mc(nn)[0],e=Ht().memoizedState;return[typeof t=="boolean"?t:ya(t),e]},useSyncExternalStore:Pf,useId:Co,useHostTransitionStatus:Mc,useFormState:yo,useActionState:yo,useOptimistic:function(t,e){var n=Ht();return St!==null?uo(n,St,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:hc,useCacheRefresh:_o};Ho.useEffectEvent=go;function Ec(t,e,n,l){e=t.memoizedState,n=n(l,e),n=n==null?e:N({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var zc={enqueueSetState:function(t,e,n){t=t._reactInternals;var l=Ae(),a=Tn(l);a.payload=e,n!=null&&(a.callback=n),e=xn(t,a,l),e!==null&&(ge(e,t,l),ra(e,t,l))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var l=Ae(),a=Tn(l);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=xn(t,a,l),e!==null&&(ge(e,t,l),ra(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ae(),l=Tn(n);l.tag=2,e!=null&&(l.callback=e),e=xn(t,l,n),e!==null&&(ge(e,t,n),ra(e,t,n))}};function jo(t,e,n,l,a,u,i){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,u,i):e.prototype&&e.prototype.isPureReactComponent?!la(n,l)||!la(a,u):!0}function Go(t,e,n,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,l),e.state!==t&&zc.enqueueReplaceState(e,e.state,null)}function el(t,e){var n=e;if("ref"in e){n={};for(var l in e)l!=="ref"&&(n[l]=e[l])}if(t=t.defaultProps){n===e&&(n=N({},n));for(var a in t)n[a]===void 0&&(n[a]=t[a])}return n}function Yo(t){au(t)}function Bo(t){console.error(t)}function Lo(t){au(t)}function Ru(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function qo(t,e,n){try{var l=t.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Ac(t,e,n){return n=Tn(n),n.tag=3,n.payload={element:null},n.callback=function(){Ru(t,e)},n}function Xo(t){return t=Tn(t),t.tag=3,t}function Qo(t,e,n,l){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var u=l.value;t.payload=function(){return a(u)},t.callback=function(){qo(e,n,l)}}var i=n.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){qo(e,n,l),typeof a!="function"&&(Cn===null?Cn=new Set([this]):Cn.add(this));var c=l.stack;this.componentDidCatch(l.value,{componentStack:c!==null?c:""})})}function vd(t,e,n,l,a){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=n.alternate,e!==null&&xl(e,n,a,!0),n=Te.current,n!==null){switch(n.tag){case 31:case 13:return Ue===null?Bu():n.alternate===null&&Ot===0&&(Ot=3),n.flags&=-257,n.flags|=65536,n.lanes=a,l===mu?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([l]):e.add(l),Fc(t,l,a)),!1;case 22:return n.flags|=65536,l===mu?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([l]):n.add(l)),Fc(t,l,a)),!1}throw Error(s(435,n.tag))}return Fc(t,l,a),Bu(),!1}if(it)return e=Te.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=a,l!==Vi&&(t=Error(s(422),{cause:l}),ia(_e(t,n)))):(l!==Vi&&(e=Error(s(423),{cause:l}),ia(_e(e,n))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,l=_e(l,n),a=Ac(t.stateNode,l,a),nc(t,a),Ot!==4&&(Ot=2)),!1;var u=Error(s(520),{cause:l});if(u=_e(u,n),za===null?za=[u]:za.push(u),Ot!==4&&(Ot=2),e===null)return!0;l=_e(l,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,t=Ac(n.stateNode,l,t),nc(n,t),!1;case 1:if(e=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Cn===null||!Cn.has(u))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Xo(a),Qo(a,t,n,l),nc(n,a),!1}n=n.return}while(n!==null);return!1}var Rc=Error(s(461)),qt=!1;function te(t,e,n,l){e.child=t===null?Kf(e,null,n,l):Pn(e,t.child,n,l)}function Zo(t,e,n,l,a){n=n.render;var u=e.ref;if("ref"in l){var i={};for(var c in l)c!=="ref"&&(i[c]=l[c])}else i=l;return kn(e),l=sc(t,e,n,i,u,a),c=fc(),t!==null&&!qt?(oc(t,e,a),ln(t,e,a)):(it&&c&&Qi(e),e.flags|=1,te(t,e,l,a),e.child)}function Vo(t,e,n,l,a){if(t===null){var u=n.type;return typeof u=="function"&&!Li(u)&&u.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=u,Ko(t,e,u,l,a)):(t=su(n.type,null,l,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!Hc(t,a)){var i=u.memoizedProps;if(n=n.compare,n=n!==null?n:la,n(i,l)&&t.ref===e.ref)return ln(t,e,a)}return e.flags|=1,t=Fe(u,l),t.ref=e.ref,t.return=e,e.child=t}function Ko(t,e,n,l,a){if(t!==null){var u=t.memoizedProps;if(la(u,l)&&t.ref===e.ref)if(qt=!1,e.pendingProps=l=u,Hc(t,a))(t.flags&131072)!==0&&(qt=!0);else return e.lanes=t.lanes,ln(t,e,a)}return Dc(t,e,n,l,a)}function Jo(t,e,n,l){var a=l.children,u=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(u=u!==null?u.baseLanes|n:n,t!==null){for(l=e.child=t.child,a=0;l!==null;)a=a|l.lanes|l.childLanes,l=l.sibling;l=a&~u}else l=0,e.child=null;return $o(t,e,u,n,l)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&hu(e,u!==null?u.cachePool:null),u!==null?kf(e,u):ac(),Wf(e);else return l=e.lanes=536870912,$o(t,e,u!==null?u.baseLanes|n:n,n,l)}else u!==null?(hu(e,u.cachePool),kf(e,u),zn(),e.memoizedState=null):(t!==null&&hu(e,null),ac(),zn());return te(t,e,a,n),e.child}function ga(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function $o(t,e,n,l,a){var u=Ii();return u=u===null?null:{parent:Bt._currentValue,pool:u},e.memoizedState={baseLanes:n,cachePool:u},t!==null&&hu(e,null),ac(),Wf(e),t!==null&&xl(t,e,l,!0),e.childLanes=a,null}function Du(t,e){return e=_u({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function ko(t,e,n){return Pn(e,t.child,null,n),t=Du(e,e.pendingProps),t.flags|=2,xe(e),e.memoizedState=null,t}function pd(t,e,n){var l=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(it){if(l.mode==="hidden")return t=Du(e,l),e.lanes=536870912,ga(null,t);if(ic(e),(t=xt)?(t=c0(t,Ne),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:pn!==null?{id:Ze,overflow:Ve}:null,retryLane:536870912,hydrationErrors:null},n=Of(t),n.return=e,e.child=n,It=e,xt=null)):t=null,t===null)throw Sn(e);return e.lanes=536870912,null}return Du(e,l)}var u=t.memoizedState;if(u!==null){var i=u.dehydrated;if(ic(e),a)if(e.flags&256)e.flags&=-257,e=ko(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(s(558));else if(qt||xl(t,e,n,!1),a=(n&t.childLanes)!==0,qt||a){if(l=Tt,l!==null&&(i=Gs(l,n),i!==0&&i!==u.retryLane))throw u.retryLane=i,Vn(t,i),ge(l,t,i),Rc;Bu(),e=ko(t,e,n)}else t=u.treeContext,xt=He(i.nextSibling),It=e,it=!0,gn=null,Ne=!1,t!==null&&Uf(e,t),e=Du(e,l),e.flags|=4096;return e}return t=Fe(t.child,{mode:l.mode,children:l.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Cu(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function Dc(t,e,n,l,a){return kn(e),n=sc(t,e,n,l,void 0,a),l=fc(),t!==null&&!qt?(oc(t,e,a),ln(t,e,a)):(it&&l&&Qi(e),e.flags|=1,te(t,e,n,a),e.child)}function Wo(t,e,n,l,a,u){return kn(e),e.updateQueue=null,n=If(e,l,n,a),Ff(t),l=fc(),t!==null&&!qt?(oc(t,e,u),ln(t,e,u)):(it&&l&&Qi(e),e.flags|=1,te(t,e,n,u),e.child)}function Fo(t,e,n,l,a){if(kn(e),e.stateNode===null){var u=Sl,i=n.contextType;typeof i=="object"&&i!==null&&(u=Pt(i)),u=new n(l,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=zc,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=l,u.state=e.memoizedState,u.refs={},tc(e),i=n.contextType,u.context=typeof i=="object"&&i!==null?Pt(i):Sl,u.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Ec(e,n,i,l),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&zc.enqueueReplaceState(u,u.state,null),da(e,l,u,a),ha(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){u=e.stateNode;var c=e.memoizedProps,f=el(n,c);u.props=f;var v=u.context,E=n.contextType;i=Sl,typeof E=="object"&&E!==null&&(i=Pt(E));var D=n.getDerivedStateFromProps;E=typeof D=="function"||typeof u.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,E||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c||v!==i)&&Go(e,u,l,i),Mn=!1;var g=e.memoizedState;u.state=g,da(e,l,u,a),ha(),v=e.memoizedState,c||g!==v||Mn?(typeof D=="function"&&(Ec(e,n,D,l),v=e.memoizedState),(f=Mn||jo(e,n,f,l,g,v,i))?(E||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=v),u.props=l,u.state=v,u.context=i,l=f):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{u=e.stateNode,ec(t,e),i=e.memoizedProps,E=el(n,i),u.props=E,D=e.pendingProps,g=u.context,v=n.contextType,f=Sl,typeof v=="object"&&v!==null&&(f=Pt(v)),c=n.getDerivedStateFromProps,(v=typeof c=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==D||g!==f)&&Go(e,u,l,f),Mn=!1,g=e.memoizedState,u.state=g,da(e,l,u,a),ha();var M=e.memoizedState;i!==D||g!==M||Mn||t!==null&&t.dependencies!==null&&ou(t.dependencies)?(typeof c=="function"&&(Ec(e,n,c,l),M=e.memoizedState),(E=Mn||jo(e,n,E,l,g,M,f)||t!==null&&t.dependencies!==null&&ou(t.dependencies))?(v||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(l,M,f),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(l,M,f)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=M),u.props=l,u.state=M,u.context=f,l=E):(typeof u.componentDidUpdate!="function"||i===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),l=!1)}return u=l,Cu(t,e),l=(e.flags&128)!==0,u||l?(u=e.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&l?(e.child=Pn(e,t.child,null,a),e.child=Pn(e,null,n,a)):te(t,e,n,a),e.memoizedState=u.state,t=e.child):t=ln(t,e,a),t}function Io(t,e,n,l){return Jn(),e.flags|=256,te(t,e,n,l),e.child}var Cc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _c(t){return{baseLanes:t,cachePool:Lf()}}function Oc(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=ze),t}function Po(t,e,n){var l=e.pendingProps,a=!1,u=(e.flags&128)!==0,i;if((i=u)||(i=t!==null&&t.memoizedState===null?!1:(Ut.current&2)!==0),i&&(a=!0,e.flags&=-129),i=(e.flags&32)!==0,e.flags&=-33,t===null){if(it){if(a?En(e):zn(),(t=xt)?(t=c0(t,Ne),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:pn!==null?{id:Ze,overflow:Ve}:null,retryLane:536870912,hydrationErrors:null},n=Of(t),n.return=e,e.child=n,It=e,xt=null)):t=null,t===null)throw Sn(e);return ds(t)?e.lanes=32:e.lanes=536870912,null}var c=l.children;return l=l.fallback,a?(zn(),a=e.mode,c=_u({mode:"hidden",children:c},a),l=Kn(l,a,n,null),c.return=e,l.return=e,c.sibling=l,e.child=c,l=e.child,l.memoizedState=_c(n),l.childLanes=Oc(t,i,n),e.memoizedState=Cc,ga(null,l)):(En(e),wc(e,c))}var f=t.memoizedState;if(f!==null&&(c=f.dehydrated,c!==null)){if(u)e.flags&256?(En(e),e.flags&=-257,e=Nc(t,e,n)):e.memoizedState!==null?(zn(),e.child=t.child,e.flags|=128,e=null):(zn(),c=l.fallback,a=e.mode,l=_u({mode:"visible",children:l.children},a),c=Kn(c,a,n,null),c.flags|=2,l.return=e,c.return=e,l.sibling=c,e.child=l,Pn(e,t.child,null,n),l=e.child,l.memoizedState=_c(n),l.childLanes=Oc(t,i,n),e.memoizedState=Cc,e=ga(null,l));else if(En(e),ds(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var v=i.dgst;i=v,l=Error(s(419)),l.stack="",l.digest=i,ia({value:l,source:null,stack:null}),e=Nc(t,e,n)}else if(qt||xl(t,e,n,!1),i=(n&t.childLanes)!==0,qt||i){if(i=Tt,i!==null&&(l=Gs(i,n),l!==0&&l!==f.retryLane))throw f.retryLane=l,Vn(t,l),ge(i,t,l),Rc;hs(c)||Bu(),e=Nc(t,e,n)}else hs(c)?(e.flags|=192,e.child=t.child,e=null):(t=f.treeContext,xt=He(c.nextSibling),It=e,it=!0,gn=null,Ne=!1,t!==null&&Uf(e,t),e=wc(e,l.children),e.flags|=4096);return e}return a?(zn(),c=l.fallback,a=e.mode,f=t.child,v=f.sibling,l=Fe(f,{mode:"hidden",children:l.children}),l.subtreeFlags=f.subtreeFlags&65011712,v!==null?c=Fe(v,c):(c=Kn(c,a,n,null),c.flags|=2),c.return=e,l.return=e,l.sibling=c,e.child=l,ga(null,l),l=e.child,c=t.child.memoizedState,c===null?c=_c(n):(a=c.cachePool,a!==null?(f=Bt._currentValue,a=a.parent!==f?{parent:f,pool:f}:a):a=Lf(),c={baseLanes:c.baseLanes|n,cachePool:a}),l.memoizedState=c,l.childLanes=Oc(t,i,n),e.memoizedState=Cc,ga(t.child,l)):(En(e),n=t.child,t=n.sibling,n=Fe(n,{mode:"visible",children:l.children}),n.return=e,n.sibling=null,t!==null&&(i=e.deletions,i===null?(e.deletions=[t],e.flags|=16):i.push(t)),e.child=n,e.memoizedState=null,n)}function wc(t,e){return e=_u({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function _u(t,e){return t=Me(22,t,null,e),t.lanes=0,t}function Nc(t,e,n){return Pn(e,t.child,null,n),t=wc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function tr(t,e,n){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),$i(t.return,e,n)}function Uc(t,e,n,l,a,u){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a,treeForkCount:u}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=n,i.tailMode=a,i.treeForkCount=u)}function er(t,e,n){var l=e.pendingProps,a=l.revealOrder,u=l.tail;l=l.children;var i=Ut.current,c=(i&2)!==0;if(c?(i=i&1|2,e.flags|=128):i&=1,j(Ut,i),te(t,e,l,n),l=it?ua:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&tr(t,n,e);else if(t.tag===19)tr(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"forwards":for(n=e.child,a=null;n!==null;)t=n.alternate,t!==null&&gu(t)===null&&(a=n),n=n.sibling;n=a,n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),Uc(e,!1,a,n,u,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&gu(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}Uc(e,!0,n,null,u,l);break;case"together":Uc(e,!1,null,null,void 0,l);break;default:e.memoizedState=null}return e.child}function ln(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Dn|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(xl(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,n=Fe(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Fe(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Hc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&ou(t)))}function gd(t,e,n){switch(e.tag){case 3:Vt(e,e.stateNode.containerInfo),bn(e,Bt,t.memoizedState.cache),Jn();break;case 27:case 5:Ge(e);break;case 4:Vt(e,e.stateNode.containerInfo);break;case 10:bn(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,ic(e),null;break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(En(e),e.flags|=128,null):(n&e.child.childLanes)!==0?Po(t,e,n):(En(e),t=ln(t,e,n),t!==null?t.sibling:null);En(e);break;case 19:var a=(t.flags&128)!==0;if(l=(n&e.childLanes)!==0,l||(xl(t,e,n,!1),l=(n&e.childLanes)!==0),a){if(l)return er(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),j(Ut,Ut.current),l)break;return null;case 22:return e.lanes=0,Jo(t,e,n,e.pendingProps);case 24:bn(e,Bt,t.memoizedState.cache)}return ln(t,e,n)}function nr(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)qt=!0;else{if(!Hc(t,n)&&(e.flags&128)===0)return qt=!1,gd(t,e,n);qt=(t.flags&131072)!==0}else qt=!1,it&&(e.flags&1048576)!==0&&Nf(e,ua,e.index);switch(e.lanes=0,e.tag){case 16:t:{var l=e.pendingProps;if(t=Fn(e.elementType),e.type=t,typeof t=="function")Li(t)?(l=el(t,l),e.tag=1,e=Fo(null,e,t,l,n)):(e.tag=0,e=Dc(null,e,t,l,n));else{if(t!=null){var a=t.$$typeof;if(a===ue){e.tag=11,e=Zo(null,e,t,l,n);break t}else if(a===J){e.tag=14,e=Vo(null,e,t,l,n);break t}}throw e=wt(t)||t,Error(s(306,e,""))}}return e;case 0:return Dc(t,e,e.type,e.pendingProps,n);case 1:return l=e.type,a=el(l,e.pendingProps),Fo(t,e,l,a,n);case 3:t:{if(Vt(e,e.stateNode.containerInfo),t===null)throw Error(s(387));l=e.pendingProps;var u=e.memoizedState;a=u.element,ec(t,e),da(e,l,null,n);var i=e.memoizedState;if(l=i.cache,bn(e,Bt,l),l!==u.cache&&ki(e,[Bt],n,!0),ha(),l=i.element,u.isDehydrated)if(u={element:l,isDehydrated:!1,cache:i.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=Io(t,e,l,n);break t}else if(l!==a){a=_e(Error(s(424)),e),ia(a),e=Io(t,e,l,n);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,xt=He(t.firstChild),It=e,it=!0,gn=null,Ne=!0,n=Kf(e,null,l,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jn(),l===a){e=ln(t,e,n);break t}te(t,e,l,n)}e=e.child}return e;case 26:return Cu(t,e),t===null?(n=d0(e.type,null,e.pendingProps,null))?e.memoizedState=n:it||(n=e.type,t=e.pendingProps,l=Ku(k.current).createElement(n),l[Ft]=e,l[he]=t,ee(l,n,t),Jt(l),e.stateNode=l):e.memoizedState=d0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Ge(e),t===null&&it&&(l=e.stateNode=o0(e.type,e.pendingProps,k.current),It=e,Ne=!0,a=xt,Nn(e.type)?(ms=a,xt=He(l.firstChild)):xt=a),te(t,e,e.pendingProps.children,n),Cu(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&it&&((a=l=xt)&&(l=$d(l,e.type,e.pendingProps,Ne),l!==null?(e.stateNode=l,It=e,xt=He(l.firstChild),Ne=!1,a=!0):a=!1),a||Sn(e)),Ge(e),a=e.type,u=e.pendingProps,i=t!==null?t.memoizedProps:null,l=u.children,fs(a,u)?l=null:i!==null&&fs(a,i)&&(e.flags|=32),e.memoizedState!==null&&(a=sc(t,e,fd,null,null,n),Na._currentValue=a),Cu(t,e),te(t,e,l,n),e.child;case 6:return t===null&&it&&((t=n=xt)&&(n=kd(n,e.pendingProps,Ne),n!==null?(e.stateNode=n,It=e,xt=null,t=!0):t=!1),t||Sn(e)),null;case 13:return Po(t,e,n);case 4:return Vt(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=Pn(e,null,l,n):te(t,e,l,n),e.child;case 11:return Zo(t,e,e.type,e.pendingProps,n);case 7:return te(t,e,e.pendingProps,n),e.child;case 8:return te(t,e,e.pendingProps.children,n),e.child;case 12:return te(t,e,e.pendingProps.children,n),e.child;case 10:return l=e.pendingProps,bn(e,e.type,l.value),te(t,e,l.children,n),e.child;case 9:return a=e.type._context,l=e.pendingProps.children,kn(e),a=Pt(a),l=l(a),e.flags|=1,te(t,e,l,n),e.child;case 14:return Vo(t,e,e.type,e.pendingProps,n);case 15:return Ko(t,e,e.type,e.pendingProps,n);case 19:return er(t,e,n);case 31:return pd(t,e,n);case 22:return Jo(t,e,n,e.pendingProps);case 24:return kn(e),l=Pt(Bt),t===null?(a=Ii(),a===null&&(a=Tt,u=Wi(),a.pooledCache=u,u.refCount++,u!==null&&(a.pooledCacheLanes|=n),a=u),e.memoizedState={parent:l,cache:a},tc(e),bn(e,Bt,a)):((t.lanes&n)!==0&&(ec(t,e),da(e,null,null,n),ha()),a=t.memoizedState,u=e.memoizedState,a.parent!==l?(a={parent:l,cache:l},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),bn(e,Bt,l)):(l=u.cache,bn(e,Bt,l),l!==a.cache&&ki(e,[Bt],n,!0))),te(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function an(t){t.flags|=4}function jc(t,e,n,l,a){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(Cr())t.flags|=8192;else throw In=mu,Pi}else t.flags&=-16777217}function lr(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!g0(e))if(Cr())t.flags|=8192;else throw In=mu,Pi}function Ou(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Us():536870912,t.lanes|=e,Hl|=e)}function Sa(t,e){if(!it)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,l=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=l,t.childLanes=n,e}function Sd(t,e,n){var l=e.pendingProps;switch(Zi(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Et(e),null;case 1:return Et(e),null;case 3:return n=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),tn(Bt),Rt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Tl(e)?an(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ki())),Et(e),null;case 26:var a=e.type,u=e.memoizedState;return t===null?(an(e),u!==null?(Et(e),lr(e,u)):(Et(e),jc(e,a,null,l,n))):u?u!==t.memoizedState?(an(e),Et(e),lr(e,u)):(Et(e),e.flags&=-16777217):(t=t.memoizedProps,t!==l&&an(e),Et(e),jc(e,a,t,l,n)),null;case 27:if(Wt(e),n=k.current,a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&an(e);else{if(!l){if(e.stateNode===null)throw Error(s(166));return Et(e),null}t=Y.current,Tl(e)?Hf(e):(t=o0(a,l,n),e.stateNode=t,an(e))}return Et(e),null;case 5:if(Wt(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&an(e);else{if(!l){if(e.stateNode===null)throw Error(s(166));return Et(e),null}if(u=Y.current,Tl(e))Hf(e);else{var i=Ku(k.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof l.is=="string"?i.createElement("select",{is:l.is}):i.createElement("select"),l.multiple?u.multiple=!0:l.size&&(u.size=l.size);break;default:u=typeof l.is=="string"?i.createElement(a,{is:l.is}):i.createElement(a)}}u[Ft]=e,u[he]=l;t:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=u;t:switch(ee(u,a,l),a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&an(e)}}return Et(e),jc(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&an(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(s(166));if(t=k.current,Tl(e)){if(t=e.stateNode,n=e.memoizedProps,l=null,a=It,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}t[Ft]=e,t=!!(t.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||Pr(t.nodeValue,n)),t||Sn(e,!0)}else t=Ku(t).createTextNode(l),t[Ft]=e,e.stateNode=t}return Et(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(l=Tl(e),n!==null){if(t===null){if(!l)throw Error(s(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Ft]=e}else Jn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Et(e),t=!1}else n=Ki(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(xe(e),e):(xe(e),null);if((e.flags&128)!==0)throw Error(s(558))}return Et(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=Tl(e),l!==null&&l.dehydrated!==null){if(t===null){if(!a)throw Error(s(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(s(317));a[Ft]=e}else Jn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Et(e),a=!1}else a=Ki(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(xe(e),e):(xe(e),null)}return xe(e),(e.flags&128)!==0?(e.lanes=n,e):(n=l!==null,t=t!==null&&t.memoizedState!==null,n&&(l=e.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool),u=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(u=l.memoizedState.cachePool.pool),u!==a&&(l.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),Ou(e,e.updateQueue),Et(e),null);case 4:return Rt(),t===null&&as(e.stateNode.containerInfo),Et(e),null;case 10:return tn(e.type),Et(e),null;case 19:if(R(Ut),l=e.memoizedState,l===null)return Et(e),null;if(a=(e.flags&128)!==0,u=l.rendering,u===null)if(a)Sa(l,!1);else{if(Ot!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=gu(t),u!==null){for(e.flags|=128,Sa(l,!1),t=u.updateQueue,e.updateQueue=t,Ou(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)_f(n,t),n=n.sibling;return j(Ut,Ut.current&1|2),it&&Ie(e,l.treeForkCount),e.child}t=t.sibling}l.tail!==null&&ie()>ju&&(e.flags|=128,a=!0,Sa(l,!1),e.lanes=4194304)}else{if(!a)if(t=gu(u),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,Ou(e,t),Sa(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!it)return Et(e),null}else 2*ie()-l.renderingStartTime>ju&&n!==536870912&&(e.flags|=128,a=!0,Sa(l,!1),e.lanes=4194304);l.isBackwards?(u.sibling=e.child,e.child=u):(t=l.last,t!==null?t.sibling=u:e.child=u,l.last=u)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ie(),t.sibling=null,n=Ut.current,j(Ut,a?n&1|2:n&1),it&&Ie(e,l.treeForkCount),t):(Et(e),null);case 22:case 23:return xe(e),uc(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(n&536870912)!==0&&(e.flags&128)===0&&(Et(e),e.subtreeFlags&6&&(e.flags|=8192)):Et(e),n=e.updateQueue,n!==null&&Ou(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==n&&(e.flags|=2048),t!==null&&R(Wn),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),tn(Bt),Et(e),null;case 25:return null;case 30:return null}throw Error(s(156,e.tag))}function bd(t,e){switch(Zi(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return tn(Bt),Rt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Wt(e),null;case 31:if(e.memoizedState!==null){if(xe(e),e.alternate===null)throw Error(s(340));Jn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(xe(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));Jn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return R(Ut),null;case 4:return Rt(),null;case 10:return tn(e.type),null;case 22:case 23:return xe(e),uc(),t!==null&&R(Wn),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return tn(Bt),null;case 25:return null;default:return null}}function ar(t,e){switch(Zi(e),e.tag){case 3:tn(Bt),Rt();break;case 26:case 27:case 5:Wt(e);break;case 4:Rt();break;case 31:e.memoizedState!==null&&xe(e);break;case 13:xe(e);break;case 19:R(Ut);break;case 10:tn(e.type);break;case 22:case 23:xe(e),uc(),t!==null&&R(Wn);break;case 24:tn(Bt)}}function ba(t,e){try{var n=e.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var a=l.next;n=a;do{if((n.tag&t)===t){l=void 0;var u=n.create,i=n.inst;l=u(),i.destroy=l}n=n.next}while(n!==a)}}catch(c){pt(e,e.return,c)}}function An(t,e,n){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var u=a.next;l=u;do{if((l.tag&t)===t){var i=l.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,a=e;var f=n,v=c;try{v()}catch(E){pt(a,f,E)}}}l=l.next}while(l!==u)}}catch(E){pt(e,e.return,E)}}function ur(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{$f(e,n)}catch(l){pt(t,t.return,l)}}}function ir(t,e,n){n.props=el(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(l){pt(t,e,l)}}function Ma(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof n=="function"?t.refCleanup=n(l):n.current=l}}catch(a){pt(t,e,a)}}function Ke(t,e){var n=t.ref,l=t.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(a){pt(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){pt(t,e,a)}else n.current=null}function cr(t){var e=t.type,n=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break t;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(a){pt(t,t.return,a)}}function Gc(t,e,n){try{var l=t.stateNode;Xd(l,t.type,n,e),l[he]=e}catch(a){pt(t,t.return,a)}}function sr(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Nn(t.type)||t.tag===4}function Yc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||sr(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Nn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bc(t,e,n){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ke));else if(l!==4&&(l===27&&Nn(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Bc(t,e,n),t=t.sibling;t!==null;)Bc(t,e,n),t=t.sibling}function wu(t,e,n){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(l!==4&&(l===27&&Nn(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(wu(t,e,n),t=t.sibling;t!==null;)wu(t,e,n),t=t.sibling}function fr(t){var e=t.stateNode,n=t.memoizedProps;try{for(var l=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);ee(e,l,n),e[Ft]=t,e[he]=n}catch(u){pt(t,t.return,u)}}var un=!1,Xt=!1,Lc=!1,or=typeof WeakSet=="function"?WeakSet:Set,$t=null;function Md(t,e){if(t=t.containerInfo,cs=Pu,t=Mf(t),Ni(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var a=l.anchorOffset,u=l.focusNode;l=l.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break t}var i=0,c=-1,f=-1,v=0,E=0,D=t,g=null;e:for(;;){for(var M;D!==n||a!==0&&D.nodeType!==3||(c=i+a),D!==u||l!==0&&D.nodeType!==3||(f=i+l),D.nodeType===3&&(i+=D.nodeValue.length),(M=D.firstChild)!==null;)g=D,D=M;for(;;){if(D===t)break e;if(g===n&&++v===a&&(c=i),g===u&&++E===l&&(f=i),(M=D.nextSibling)!==null)break;D=g,g=D.parentNode}D=M}n=c===-1||f===-1?null:{start:c,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for(ss={focusedElem:t,selectionRange:n},Pu=!1,$t=e;$t!==null;)if(e=$t,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$t=t;else for(;$t!==null;){switch(e=$t,u=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)a=t[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,n=e,a=u.memoizedProps,u=u.memoizedState,l=n.stateNode;try{var B=el(n.type,a);t=l.getSnapshotBeforeUpdate(B,u),l.__reactInternalSnapshotBeforeUpdate=t}catch(Z){pt(n,n.return,Z)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)rs(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":rs(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=e.sibling,t!==null){t.return=e.return,$t=t;break}$t=e.return}}function rr(t,e,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:sn(t,n),l&4&&ba(5,n);break;case 1:if(sn(t,n),l&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(i){pt(n,n.return,i)}else{var a=el(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(i){pt(n,n.return,i)}}l&64&&ur(n),l&512&&Ma(n,n.return);break;case 3:if(sn(t,n),l&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{$f(t,e)}catch(i){pt(n,n.return,i)}}break;case 27:e===null&&l&4&&fr(n);case 26:case 5:sn(t,n),e===null&&l&4&&cr(n),l&512&&Ma(n,n.return);break;case 12:sn(t,n);break;case 31:sn(t,n),l&4&&mr(t,n);break;case 13:sn(t,n),l&4&&yr(t,n),l&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=_d.bind(null,n),Wd(t,n))));break;case 22:if(l=n.memoizedState!==null||un,!l){e=e!==null&&e.memoizedState!==null||Xt,a=un;var u=Xt;un=l,(Xt=e)&&!u?fn(t,n,(n.subtreeFlags&8772)!==0):sn(t,n),un=a,Xt=u}break;case 30:break;default:sn(t,n)}}function hr(t){var e=t.alternate;e!==null&&(t.alternate=null,hr(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&vi(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Dt=null,me=!1;function cn(t,e,n){for(n=n.child;n!==null;)dr(t,e,n),n=n.sibling}function dr(t,e,n){if(ce&&typeof ce.onCommitFiberUnmount=="function")try{ce.onCommitFiberUnmount(Be,n)}catch{}switch(n.tag){case 26:Xt||Ke(n,e),cn(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Xt||Ke(n,e);var l=Dt,a=me;Nn(n.type)&&(Dt=n.stateNode,me=!1),cn(t,e,n),_a(n.stateNode),Dt=l,me=a;break;case 5:Xt||Ke(n,e);case 6:if(l=Dt,a=me,Dt=null,cn(t,e,n),Dt=l,me=a,Dt!==null)if(me)try{(Dt.nodeType===9?Dt.body:Dt.nodeName==="HTML"?Dt.ownerDocument.body:Dt).removeChild(n.stateNode)}catch(u){pt(n,e,u)}else try{Dt.removeChild(n.stateNode)}catch(u){pt(n,e,u)}break;case 18:Dt!==null&&(me?(t=Dt,u0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Ql(t)):u0(Dt,n.stateNode));break;case 4:l=Dt,a=me,Dt=n.stateNode.containerInfo,me=!0,cn(t,e,n),Dt=l,me=a;break;case 0:case 11:case 14:case 15:An(2,n,e),Xt||An(4,n,e),cn(t,e,n);break;case 1:Xt||(Ke(n,e),l=n.stateNode,typeof l.componentWillUnmount=="function"&&ir(n,e,l)),cn(t,e,n);break;case 21:cn(t,e,n);break;case 22:Xt=(l=Xt)||n.memoizedState!==null,cn(t,e,n),Xt=l;break;default:cn(t,e,n)}}function mr(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ql(t)}catch(n){pt(e,e.return,n)}}}function yr(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ql(t)}catch(n){pt(e,e.return,n)}}function Td(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new or),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new or),e;default:throw Error(s(435,t.tag))}}function Nu(t,e){var n=Td(t);e.forEach(function(l){if(!n.has(l)){n.add(l);var a=Od.bind(null,t,l);l.then(a,a)}})}function ye(t,e){var n=e.deletions;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l],u=t,i=e,c=i;t:for(;c!==null;){switch(c.tag){case 27:if(Nn(c.type)){Dt=c.stateNode,me=!1;break t}break;case 5:Dt=c.stateNode,me=!1;break t;case 3:case 4:Dt=c.stateNode.containerInfo,me=!0;break t}c=c.return}if(Dt===null)throw Error(s(160));dr(u,i,a),Dt=null,me=!1,u=a.alternate,u!==null&&(u.return=null),a.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)vr(e,t),e=e.sibling}var qe=null;function vr(t,e){var n=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ye(e,t),ve(t),l&4&&(An(3,t,t.return),ba(3,t),An(5,t,t.return));break;case 1:ye(e,t),ve(t),l&512&&(Xt||n===null||Ke(n,n.return)),l&64&&un&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var a=qe;if(ye(e,t),ve(t),l&512&&(Xt||n===null||Ke(n,n.return)),l&4){var u=n!==null?n.memoizedState:null;if(l=t.memoizedState,n===null)if(l===null)if(t.stateNode===null){t:{l=t.type,n=t.memoizedProps,a=a.ownerDocument||a;e:switch(l){case"title":u=a.getElementsByTagName("title")[0],(!u||u[$l]||u[Ft]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=a.createElement(l),a.head.insertBefore(u,a.querySelector("head > title"))),ee(u,l,n),u[Ft]=t,Jt(u),l=u;break t;case"link":var i=v0("link","href",a).get(l+(n.href||""));if(i){for(var c=0;c<i.length;c++)if(u=i[c],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){i.splice(c,1);break e}}u=a.createElement(l),ee(u,l,n),a.head.appendChild(u);break;case"meta":if(i=v0("meta","content",a).get(l+(n.content||""))){for(c=0;c<i.length;c++)if(u=i[c],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){i.splice(c,1);break e}}u=a.createElement(l),ee(u,l,n),a.head.appendChild(u);break;default:throw Error(s(468,l))}u[Ft]=t,Jt(u),l=u}t.stateNode=l}else p0(a,t.type,t.stateNode);else t.stateNode=y0(a,l,t.memoizedProps);else u!==l?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,l===null?p0(a,t.type,t.stateNode):y0(a,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Gc(t,t.memoizedProps,n.memoizedProps)}break;case 27:ye(e,t),ve(t),l&512&&(Xt||n===null||Ke(n,n.return)),n!==null&&l&4&&Gc(t,t.memoizedProps,n.memoizedProps);break;case 5:if(ye(e,t),ve(t),l&512&&(Xt||n===null||Ke(n,n.return)),t.flags&32){a=t.stateNode;try{hl(a,"")}catch(B){pt(t,t.return,B)}}l&4&&t.stateNode!=null&&(a=t.memoizedProps,Gc(t,a,n!==null?n.memoizedProps:a)),l&1024&&(Lc=!0);break;case 6:if(ye(e,t),ve(t),l&4){if(t.stateNode===null)throw Error(s(162));l=t.memoizedProps,n=t.stateNode;try{n.nodeValue=l}catch(B){pt(t,t.return,B)}}break;case 3:if(ku=null,a=qe,qe=Ju(e.containerInfo),ye(e,t),qe=a,ve(t),l&4&&n!==null&&n.memoizedState.isDehydrated)try{Ql(e.containerInfo)}catch(B){pt(t,t.return,B)}Lc&&(Lc=!1,pr(t));break;case 4:l=qe,qe=Ju(t.stateNode.containerInfo),ye(e,t),ve(t),qe=l;break;case 12:ye(e,t),ve(t);break;case 31:ye(e,t),ve(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Nu(t,l)));break;case 13:ye(e,t),ve(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Hu=ie()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Nu(t,l)));break;case 22:a=t.memoizedState!==null;var f=n!==null&&n.memoizedState!==null,v=un,E=Xt;if(un=v||a,Xt=E||f,ye(e,t),Xt=E,un=v,ve(t),l&8192)t:for(e=t.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(n===null||f||un||Xt||nl(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){f=n=e;try{if(u=f.stateNode,a)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{c=f.stateNode;var D=f.memoizedProps.style,g=D!=null&&D.hasOwnProperty("display")?D.display:null;c.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(B){pt(f,f.return,B)}}}else if(e.tag===6){if(n===null){f=e;try{f.stateNode.nodeValue=a?"":f.memoizedProps}catch(B){pt(f,f.return,B)}}}else if(e.tag===18){if(n===null){f=e;try{var M=f.stateNode;a?i0(M,!0):i0(f.stateNode,!1)}catch(B){pt(f,f.return,B)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=t.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,Nu(t,n))));break;case 19:ye(e,t),ve(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Nu(t,l)));break;case 30:break;case 21:break;default:ye(e,t),ve(t)}}function ve(t){var e=t.flags;if(e&2){try{for(var n,l=t.return;l!==null;){if(sr(l)){n=l;break}l=l.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var a=n.stateNode,u=Yc(t);wu(t,u,a);break;case 5:var i=n.stateNode;n.flags&32&&(hl(i,""),n.flags&=-33);var c=Yc(t);wu(t,c,i);break;case 3:case 4:var f=n.stateNode.containerInfo,v=Yc(t);Bc(t,v,f);break;default:throw Error(s(161))}}catch(E){pt(t,t.return,E)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function pr(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;pr(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function sn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)rr(t,e.alternate,e),e=e.sibling}function nl(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:An(4,e,e.return),nl(e);break;case 1:Ke(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&ir(e,e.return,n),nl(e);break;case 27:_a(e.stateNode);case 26:case 5:Ke(e,e.return),nl(e);break;case 22:e.memoizedState===null&&nl(e);break;case 30:nl(e);break;default:nl(e)}t=t.sibling}}function fn(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,a=t,u=e,i=u.flags;switch(u.tag){case 0:case 11:case 15:fn(a,u,n),ba(4,u);break;case 1:if(fn(a,u,n),l=u,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(v){pt(l,l.return,v)}if(l=u,a=l.updateQueue,a!==null){var c=l.stateNode;try{var f=a.shared.hiddenCallbacks;if(f!==null)for(a.shared.hiddenCallbacks=null,a=0;a<f.length;a++)Jf(f[a],c)}catch(v){pt(l,l.return,v)}}n&&i&64&&ur(u),Ma(u,u.return);break;case 27:fr(u);case 26:case 5:fn(a,u,n),n&&l===null&&i&4&&cr(u),Ma(u,u.return);break;case 12:fn(a,u,n);break;case 31:fn(a,u,n),n&&i&4&&mr(a,u);break;case 13:fn(a,u,n),n&&i&4&&yr(a,u);break;case 22:u.memoizedState===null&&fn(a,u,n),Ma(u,u.return);break;case 30:break;default:fn(a,u,n)}e=e.sibling}}function qc(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&ca(n))}function Xc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ca(t))}function Xe(t,e,n,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)gr(t,e,n,l),e=e.sibling}function gr(t,e,n,l){var a=e.flags;switch(e.tag){case 0:case 11:case 15:Xe(t,e,n,l),a&2048&&ba(9,e);break;case 1:Xe(t,e,n,l);break;case 3:Xe(t,e,n,l),a&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ca(t)));break;case 12:if(a&2048){Xe(t,e,n,l),t=e.stateNode;try{var u=e.memoizedProps,i=u.id,c=u.onPostCommit;typeof c=="function"&&c(i,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(f){pt(e,e.return,f)}}else Xe(t,e,n,l);break;case 31:Xe(t,e,n,l);break;case 13:Xe(t,e,n,l);break;case 23:break;case 22:u=e.stateNode,i=e.alternate,e.memoizedState!==null?u._visibility&2?Xe(t,e,n,l):Ta(t,e):u._visibility&2?Xe(t,e,n,l):(u._visibility|=2,wl(t,e,n,l,(e.subtreeFlags&10256)!==0||!1)),a&2048&&qc(i,e);break;case 24:Xe(t,e,n,l),a&2048&&Xc(e.alternate,e);break;default:Xe(t,e,n,l)}}function wl(t,e,n,l,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var u=t,i=e,c=n,f=l,v=i.flags;switch(i.tag){case 0:case 11:case 15:wl(u,i,c,f,a),ba(8,i);break;case 23:break;case 22:var E=i.stateNode;i.memoizedState!==null?E._visibility&2?wl(u,i,c,f,a):Ta(u,i):(E._visibility|=2,wl(u,i,c,f,a)),a&&v&2048&&qc(i.alternate,i);break;case 24:wl(u,i,c,f,a),a&&v&2048&&Xc(i.alternate,i);break;default:wl(u,i,c,f,a)}e=e.sibling}}function Ta(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,l=e,a=l.flags;switch(l.tag){case 22:Ta(n,l),a&2048&&qc(l.alternate,l);break;case 24:Ta(n,l),a&2048&&Xc(l.alternate,l);break;default:Ta(n,l)}e=e.sibling}}var xa=8192;function Nl(t,e,n){if(t.subtreeFlags&xa)for(t=t.child;t!==null;)Sr(t,e,n),t=t.sibling}function Sr(t,e,n){switch(t.tag){case 26:Nl(t,e,n),t.flags&xa&&t.memoizedState!==null&&sm(n,qe,t.memoizedState,t.memoizedProps);break;case 5:Nl(t,e,n);break;case 3:case 4:var l=qe;qe=Ju(t.stateNode.containerInfo),Nl(t,e,n),qe=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=xa,xa=16777216,Nl(t,e,n),xa=l):Nl(t,e,n));break;default:Nl(t,e,n)}}function br(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Ea(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var l=e[n];$t=l,Tr(l,t)}br(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Mr(t),t=t.sibling}function Mr(t){switch(t.tag){case 0:case 11:case 15:Ea(t),t.flags&2048&&An(9,t,t.return);break;case 3:Ea(t);break;case 12:Ea(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Uu(t)):Ea(t);break;default:Ea(t)}}function Uu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var l=e[n];$t=l,Tr(l,t)}br(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:An(8,e,e.return),Uu(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,Uu(e));break;default:Uu(e)}t=t.sibling}}function Tr(t,e){for(;$t!==null;){var n=$t;switch(n.tag){case 0:case 11:case 15:An(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ca(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,$t=l;else t:for(n=t;$t!==null;){l=$t;var a=l.sibling,u=l.return;if(hr(l),l===n){$t=null;break t}if(a!==null){a.return=u,$t=a;break t}$t=u}}}var xd={getCacheForType:function(t){var e=Pt(Bt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return Pt(Bt).controller.signal}},Ed=typeof WeakMap=="function"?WeakMap:Map,dt=0,Tt=null,et=null,at=0,vt=0,Ee=null,Rn=!1,Ul=!1,Qc=!1,on=0,Ot=0,Dn=0,ll=0,Zc=0,ze=0,Hl=0,za=null,pe=null,Vc=!1,Hu=0,xr=0,ju=1/0,Gu=null,Cn=null,Zt=0,_n=null,jl=null,rn=0,Kc=0,Jc=null,Er=null,Aa=0,$c=null;function Ae(){return(dt&2)!==0&&at!==0?at&-at:S.T!==null?ts():Ys()}function zr(){if(ze===0)if((at&536870912)===0||it){var t=Va;Va<<=1,(Va&3932160)===0&&(Va=262144),ze=t}else ze=536870912;return t=Te.current,t!==null&&(t.flags|=32),ze}function ge(t,e,n){(t===Tt&&(vt===2||vt===9)||t.cancelPendingCommit!==null)&&(Gl(t,0),On(t,at,ze,!1)),Jl(t,n),((dt&2)===0||t!==Tt)&&(t===Tt&&((dt&2)===0&&(ll|=n),Ot===4&&On(t,at,ze,!1)),Je(t))}function Ar(t,e,n){if((dt&6)!==0)throw Error(s(327));var l=!n&&(e&127)===0&&(e&t.expiredLanes)===0||Kl(t,e),a=l?Rd(t,e):Wc(t,e,!0),u=l;do{if(a===0){Ul&&!l&&On(t,e,0,!1);break}else{if(n=t.current.alternate,u&&!zd(n)){a=Wc(t,e,!1),u=!1;continue}if(a===2){if(u=e,t.errorRecoveryDisabledLanes&u)var i=0;else i=t.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){e=i;t:{var c=t;a=za;var f=c.current.memoizedState.isDehydrated;if(f&&(Gl(c,i).flags|=256),i=Wc(c,i,!1),i!==2){if(Qc&&!f){c.errorRecoveryDisabledLanes|=u,ll|=u,a=4;break t}u=pe,pe=a,u!==null&&(pe===null?pe=u:pe.push.apply(pe,u))}a=i}if(u=!1,a!==2)continue}}if(a===1){Gl(t,0),On(t,e,0,!0);break}t:{switch(l=t,u=a,u){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e)break;case 6:On(l,e,ze,!Rn);break t;case 2:pe=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(a=Hu+300-ie(),10<a)){if(On(l,e,ze,!Rn),Ja(l,0,!0)!==0)break t;rn=e,l.timeoutHandle=l0(Rr.bind(null,l,n,pe,Gu,Vc,e,ze,ll,Hl,Rn,u,"Throttled",-0,0),a);break t}Rr(l,n,pe,Gu,Vc,e,ze,ll,Hl,Rn,u,null,-0,0)}}break}while(!0);Je(t)}function Rr(t,e,n,l,a,u,i,c,f,v,E,D,g,M){if(t.timeoutHandle=-1,D=e.subtreeFlags,D&8192||(D&16785408)===16785408){D={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ke},Sr(e,u,D);var B=(u&62914560)===u?Hu-ie():(u&4194048)===u?xr-ie():0;if(B=fm(D,B),B!==null){rn=u,t.cancelPendingCommit=B(Hr.bind(null,t,e,u,n,l,a,i,c,f,E,D,null,g,M)),On(t,u,i,!v);return}}Hr(t,e,u,n,l,a,i,c,f)}function zd(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var a=n[l],u=a.getSnapshot;a=a.value;try{if(!be(u(),a))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function On(t,e,n,l){e&=~Zc,e&=~ll,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var a=e;0<a;){var u=31-Kt(a),i=1<<u;l[u]=-1,a&=~i}n!==0&&Hs(t,n,e)}function Yu(){return(dt&6)===0?(Ra(0),!1):!0}function kc(){if(et!==null){if(vt===0)var t=et.return;else t=et,Pe=$n=null,rc(t),Rl=null,fa=0,t=et;for(;t!==null;)ar(t.alternate,t),t=t.return;et=null}}function Gl(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,Vd(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),rn=0,kc(),Tt=t,et=n=Fe(t.current,null),at=e,vt=0,Ee=null,Rn=!1,Ul=Kl(t,e),Qc=!1,Hl=ze=Zc=ll=Dn=Ot=0,pe=za=null,Vc=!1,(e&8)!==0&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var a=31-Kt(l),u=1<<a;e|=t[a],l&=~u}return on=e,uu(),n}function Dr(t,e){F=null,S.H=pa,e===Al||e===du?(e=Qf(),vt=3):e===Pi?(e=Qf(),vt=4):vt=e===Rc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ee=e,et===null&&(Ot=1,Ru(t,_e(e,t.current)))}function Cr(){var t=Te.current;return t===null?!0:(at&4194048)===at?Ue===null:(at&62914560)===at||(at&536870912)!==0?t===Ue:!1}function _r(){var t=S.H;return S.H=pa,t===null?pa:t}function Or(){var t=S.A;return S.A=xd,t}function Bu(){Ot=4,Rn||(at&4194048)!==at&&Te.current!==null||(Ul=!0),(Dn&134217727)===0&&(ll&134217727)===0||Tt===null||On(Tt,at,ze,!1)}function Wc(t,e,n){var l=dt;dt|=2;var a=_r(),u=Or();(Tt!==t||at!==e)&&(Gu=null,Gl(t,e)),e=!1;var i=Ot;t:do try{if(vt!==0&&et!==null){var c=et,f=Ee;switch(vt){case 8:kc(),i=6;break t;case 3:case 2:case 9:case 6:Te.current===null&&(e=!0);var v=vt;if(vt=0,Ee=null,Yl(t,c,f,v),n&&Ul){i=0;break t}break;default:v=vt,vt=0,Ee=null,Yl(t,c,f,v)}}Ad(),i=Ot;break}catch(E){Dr(t,E)}while(!0);return e&&t.shellSuspendCounter++,Pe=$n=null,dt=l,S.H=a,S.A=u,et===null&&(Tt=null,at=0,uu()),i}function Ad(){for(;et!==null;)wr(et)}function Rd(t,e){var n=dt;dt|=2;var l=_r(),a=Or();Tt!==t||at!==e?(Gu=null,ju=ie()+500,Gl(t,e)):Ul=Kl(t,e);t:do try{if(vt!==0&&et!==null){e=et;var u=Ee;e:switch(vt){case 1:vt=0,Ee=null,Yl(t,e,u,1);break;case 2:case 9:if(qf(u)){vt=0,Ee=null,Nr(e);break}e=function(){vt!==2&&vt!==9||Tt!==t||(vt=7),Je(t)},u.then(e,e);break t;case 3:vt=7;break t;case 4:vt=5;break t;case 7:qf(u)?(vt=0,Ee=null,Nr(e)):(vt=0,Ee=null,Yl(t,e,u,7));break;case 5:var i=null;switch(et.tag){case 26:i=et.memoizedState;case 5:case 27:var c=et;if(i?g0(i):c.stateNode.complete){vt=0,Ee=null;var f=c.sibling;if(f!==null)et=f;else{var v=c.return;v!==null?(et=v,Lu(v)):et=null}break e}}vt=0,Ee=null,Yl(t,e,u,5);break;case 6:vt=0,Ee=null,Yl(t,e,u,6);break;case 8:kc(),Ot=6;break t;default:throw Error(s(462))}}Dd();break}catch(E){Dr(t,E)}while(!0);return Pe=$n=null,S.H=l,S.A=a,dt=n,et!==null?0:(Tt=null,at=0,uu(),Ot)}function Dd(){for(;et!==null&&!Ye();)wr(et)}function wr(t){var e=nr(t.alternate,t,on);t.memoizedProps=t.pendingProps,e===null?Lu(t):et=e}function Nr(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Wo(n,e,e.pendingProps,e.type,void 0,at);break;case 11:e=Wo(n,e,e.pendingProps,e.type.render,e.ref,at);break;case 5:rc(e);default:ar(n,e),e=et=_f(e,on),e=nr(n,e,on)}t.memoizedProps=t.pendingProps,e===null?Lu(t):et=e}function Yl(t,e,n,l){Pe=$n=null,rc(e),Rl=null,fa=0;var a=e.return;try{if(vd(t,a,e,n,at)){Ot=1,Ru(t,_e(n,t.current)),et=null;return}}catch(u){if(a!==null)throw et=a,u;Ot=1,Ru(t,_e(n,t.current)),et=null;return}e.flags&32768?(it||l===1?t=!0:Ul||(at&536870912)!==0?t=!1:(Rn=t=!0,(l===2||l===9||l===3||l===6)&&(l=Te.current,l!==null&&l.tag===13&&(l.flags|=16384))),Ur(e,t)):Lu(e)}function Lu(t){var e=t;do{if((e.flags&32768)!==0){Ur(e,Rn);return}t=e.return;var n=Sd(e.alternate,e,on);if(n!==null){et=n;return}if(e=e.sibling,e!==null){et=e;return}et=e=t}while(e!==null);Ot===0&&(Ot=5)}function Ur(t,e){do{var n=bd(t.alternate,t);if(n!==null){n.flags&=32767,et=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){et=t;return}et=t=n}while(t!==null);Ot=6,et=null}function Hr(t,e,n,l,a,u,i,c,f){t.cancelPendingCommit=null;do qu();while(Zt!==0);if((dt&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));if(u=e.lanes|e.childLanes,u|=Yi,ch(t,n,u,i,c,f),t===Tt&&(et=Tt=null,at=0),jl=e,_n=t,rn=n,Kc=u,Jc=a,Er=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,wd(ul,function(){return Lr(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=S.T,S.T=null,a=_.p,_.p=2,i=dt,dt|=4;try{Md(t,e,n)}finally{dt=i,_.p=a,S.T=l}}Zt=1,jr(),Gr(),Yr()}}function jr(){if(Zt===1){Zt=0;var t=_n,e=jl,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=S.T,S.T=null;var l=_.p;_.p=2;var a=dt;dt|=4;try{vr(e,t);var u=ss,i=Mf(t.containerInfo),c=u.focusedElem,f=u.selectionRange;if(i!==c&&c&&c.ownerDocument&&bf(c.ownerDocument.documentElement,c)){if(f!==null&&Ni(c)){var v=f.start,E=f.end;if(E===void 0&&(E=v),"selectionStart"in c)c.selectionStart=v,c.selectionEnd=Math.min(E,c.value.length);else{var D=c.ownerDocument||document,g=D&&D.defaultView||window;if(g.getSelection){var M=g.getSelection(),B=c.textContent.length,Z=Math.min(f.start,B),Mt=f.end===void 0?Z:Math.min(f.end,B);!M.extend&&Z>Mt&&(i=Mt,Mt=Z,Z=i);var d=Sf(c,Z),r=Sf(c,Mt);if(d&&r&&(M.rangeCount!==1||M.anchorNode!==d.node||M.anchorOffset!==d.offset||M.focusNode!==r.node||M.focusOffset!==r.offset)){var y=D.createRange();y.setStart(d.node,d.offset),M.removeAllRanges(),Z>Mt?(M.addRange(y),M.extend(r.node,r.offset)):(y.setEnd(r.node,r.offset),M.addRange(y))}}}}for(D=[],M=c;M=M.parentNode;)M.nodeType===1&&D.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<D.length;c++){var A=D[c];A.element.scrollLeft=A.left,A.element.scrollTop=A.top}}Pu=!!cs,ss=cs=null}finally{dt=a,_.p=l,S.T=n}}t.current=e,Zt=2}}function Gr(){if(Zt===2){Zt=0;var t=_n,e=jl,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=S.T,S.T=null;var l=_.p;_.p=2;var a=dt;dt|=4;try{rr(t,e.alternate,e)}finally{dt=a,_.p=l,S.T=n}}Zt=3}}function Yr(){if(Zt===4||Zt===3){Zt=0,fi();var t=_n,e=jl,n=rn,l=Er;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Zt=5:(Zt=0,jl=_n=null,Br(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(Cn=null),mi(n),e=e.stateNode,ce&&typeof ce.onCommitFiberRoot=="function")try{ce.onCommitFiberRoot(Be,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=S.T,a=_.p,_.p=2,S.T=null;try{for(var u=t.onRecoverableError,i=0;i<l.length;i++){var c=l[i];u(c.value,{componentStack:c.stack})}}finally{S.T=e,_.p=a}}(rn&3)!==0&&qu(),Je(t),a=t.pendingLanes,(n&261930)!==0&&(a&42)!==0?t===$c?Aa++:(Aa=0,$c=t):Aa=0,Ra(0)}}function Br(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,ca(e)))}function qu(){return jr(),Gr(),Yr(),Lr()}function Lr(){if(Zt!==5)return!1;var t=_n,e=Kc;Kc=0;var n=mi(rn),l=S.T,a=_.p;try{_.p=32>n?32:n,S.T=null,n=Jc,Jc=null;var u=_n,i=rn;if(Zt=0,jl=_n=null,rn=0,(dt&6)!==0)throw Error(s(331));var c=dt;if(dt|=4,Mr(u.current),gr(u,u.current,i,n),dt=c,Ra(0,!1),ce&&typeof ce.onPostCommitFiberRoot=="function")try{ce.onPostCommitFiberRoot(Be,u)}catch{}return!0}finally{_.p=a,S.T=l,Br(t,e)}}function qr(t,e,n){e=_e(n,e),e=Ac(t.stateNode,e,2),t=xn(t,e,2),t!==null&&(Jl(t,2),Je(t))}function pt(t,e,n){if(t.tag===3)qr(t,t,n);else for(;e!==null;){if(e.tag===3){qr(e,t,n);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Cn===null||!Cn.has(l))){t=_e(n,t),n=Xo(2),l=xn(e,n,2),l!==null&&(Qo(n,l,e,t),Jl(l,2),Je(l));break}}e=e.return}}function Fc(t,e,n){var l=t.pingCache;if(l===null){l=t.pingCache=new Ed;var a=new Set;l.set(e,a)}else a=l.get(e),a===void 0&&(a=new Set,l.set(e,a));a.has(n)||(Qc=!0,a.add(n),t=Cd.bind(null,t,e,n),e.then(t,t))}function Cd(t,e,n){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Tt===t&&(at&n)===n&&(Ot===4||Ot===3&&(at&62914560)===at&&300>ie()-Hu?(dt&2)===0&&Gl(t,0):Zc|=n,Hl===at&&(Hl=0)),Je(t)}function Xr(t,e){e===0&&(e=Us()),t=Vn(t,e),t!==null&&(Jl(t,e),Je(t))}function _d(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Xr(t,n)}function Od(t,e){var n=0;switch(t.tag){case 31:case 13:var l=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(e),Xr(t,n)}function wd(t,e){return re(t,e)}var Xu=null,Bl=null,Ic=!1,Qu=!1,Pc=!1,wn=0;function Je(t){t!==Bl&&t.next===null&&(Bl===null?Xu=Bl=t:Bl=Bl.next=t),Qu=!0,Ic||(Ic=!0,Ud())}function Ra(t,e){if(!Pc&&Qu){Pc=!0;do for(var n=!1,l=Xu;l!==null;){if(t!==0){var a=l.pendingLanes;if(a===0)var u=0;else{var i=l.suspendedLanes,c=l.pingedLanes;u=(1<<31-Kt(42|t)+1)-1,u&=a&~(i&~c),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,Kr(l,u))}else u=at,u=Ja(l,l===Tt?u:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(u&3)===0||Kl(l,u)||(n=!0,Kr(l,u));l=l.next}while(n);Pc=!1}}function Nd(){Qr()}function Qr(){Qu=Ic=!1;var t=0;wn!==0&&Zd()&&(t=wn);for(var e=ie(),n=null,l=Xu;l!==null;){var a=l.next,u=Zr(l,e);u===0?(l.next=null,n===null?Xu=a:n.next=a,a===null&&(Bl=n)):(n=l,(t!==0||(u&3)!==0)&&(Qu=!0)),l=a}Zt!==0&&Zt!==5||Ra(t),wn!==0&&(wn=0)}function Zr(t,e){for(var n=t.suspendedLanes,l=t.pingedLanes,a=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var i=31-Kt(u),c=1<<i,f=a[i];f===-1?((c&n)===0||(c&l)!==0)&&(a[i]=ih(c,e)):f<=e&&(t.expiredLanes|=c),u&=~c}if(e=Tt,n=at,n=Ja(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,n===0||t===e&&(vt===2||vt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Se(l),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||Kl(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(l!==null&&Se(l),mi(n)){case 2:case 8:n=qa;break;case 32:n=ul;break;case 268435456:n=Qa;break;default:n=ul}return l=Vr.bind(null,t),n=re(n,l),t.callbackPriority=e,t.callbackNode=n,e}return l!==null&&l!==null&&Se(l),t.callbackPriority=2,t.callbackNode=null,2}function Vr(t,e){if(Zt!==0&&Zt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(qu()&&t.callbackNode!==n)return null;var l=at;return l=Ja(t,t===Tt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Ar(t,l,e),Zr(t,ie()),t.callbackNode!=null&&t.callbackNode===n?Vr.bind(null,t):null)}function Kr(t,e){if(qu())return null;Ar(t,e,!0)}function Ud(){Kd(function(){(dt&6)!==0?re(La,Nd):Qr()})}function ts(){if(wn===0){var t=El;t===0&&(t=Za,Za<<=1,(Za&261888)===0&&(Za=256)),wn=t}return wn}function Jr(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Fa(""+t)}function $r(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function Hd(t,e,n,l,a){if(e==="submit"&&n&&n.stateNode===a){var u=Jr((a[he]||null).action),i=l.submitter;i&&(e=(e=i[he]||null)?Jr(e.formAction):i.getAttribute("formAction"),e!==null&&(u=e,i=null));var c=new eu("action","action",null,l,a);t.push({event:c,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(wn!==0){var f=i?$r(a,i):new FormData(a);bc(n,{pending:!0,data:f,method:a.method,action:u},null,f)}}else typeof u=="function"&&(c.preventDefault(),f=i?$r(a,i):new FormData(a),bc(n,{pending:!0,data:f,method:a.method,action:u},u,f))},currentTarget:a}]})}}for(var es=0;es<Gi.length;es++){var ns=Gi[es],jd=ns.toLowerCase(),Gd=ns[0].toUpperCase()+ns.slice(1);Le(jd,"on"+Gd)}Le(Ef,"onAnimationEnd"),Le(zf,"onAnimationIteration"),Le(Af,"onAnimationStart"),Le("dblclick","onDoubleClick"),Le("focusin","onFocus"),Le("focusout","onBlur"),Le(Ph,"onTransitionRun"),Le(td,"onTransitionStart"),Le(ed,"onTransitionCancel"),Le(Rf,"onTransitionEnd"),ol("onMouseEnter",["mouseout","mouseover"]),ol("onMouseLeave",["mouseout","mouseover"]),ol("onPointerEnter",["pointerout","pointerover"]),ol("onPointerLeave",["pointerout","pointerover"]),qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qn("onBeforeInput",["compositionend","keypress","textInput","paste"]),qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yd=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Da));function kr(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var l=t[n],a=l.event;l=l.listeners;t:{var u=void 0;if(e)for(var i=l.length-1;0<=i;i--){var c=l[i],f=c.instance,v=c.currentTarget;if(c=c.listener,f!==u&&a.isPropagationStopped())break t;u=c,a.currentTarget=v;try{u(a)}catch(E){au(E)}a.currentTarget=null,u=f}else for(i=0;i<l.length;i++){if(c=l[i],f=c.instance,v=c.currentTarget,c=c.listener,f!==u&&a.isPropagationStopped())break t;u=c,a.currentTarget=v;try{u(a)}catch(E){au(E)}a.currentTarget=null,u=f}}}}function nt(t,e){var n=e[yi];n===void 0&&(n=e[yi]=new Set);var l=t+"__bubble";n.has(l)||(Wr(e,t,2,!1),n.add(l))}function ls(t,e,n){var l=0;e&&(l|=4),Wr(n,t,l,e)}var Zu="_reactListening"+Math.random().toString(36).slice(2);function as(t){if(!t[Zu]){t[Zu]=!0,qs.forEach(function(n){n!=="selectionchange"&&(Yd.has(n)||ls(n,!1,t),ls(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Zu]||(e[Zu]=!0,ls("selectionchange",!1,e))}}function Wr(t,e,n,l){switch(z0(e)){case 2:var a=hm;break;case 8:a=dm;break;default:a=Ss}n=a.bind(null,e,n,t),a=void 0,!Ei||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),l?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function us(t,e,n,l,a){var u=l;if((e&1)===0&&(e&2)===0&&l!==null)t:for(;;){if(l===null)return;var i=l.tag;if(i===3||i===4){var c=l.stateNode.containerInfo;if(c===a)break;if(i===4)for(i=l.return;i!==null;){var f=i.tag;if((f===3||f===4)&&i.stateNode.containerInfo===a)return;i=i.return}for(;c!==null;){if(i=cl(c),i===null)return;if(f=i.tag,f===5||f===6||f===26||f===27){l=u=i;continue t}c=c.parentNode}}l=l.return}Ps(function(){var v=u,E=Ti(n),D=[];t:{var g=Df.get(t);if(g!==void 0){var M=eu,B=t;switch(t){case"keypress":if(Pa(n)===0)break t;case"keydown":case"keyup":M=Oh;break;case"focusin":B="focus",M=Di;break;case"focusout":B="blur",M=Di;break;case"beforeblur":case"afterblur":M=Di;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=nf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=Sh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=Uh;break;case Ef:case zf:case Af:M=Th;break;case Rf:M=jh;break;case"scroll":case"scrollend":M=ph;break;case"wheel":M=Yh;break;case"copy":case"cut":case"paste":M=Eh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=af;break;case"toggle":case"beforetoggle":M=Lh}var Z=(e&4)!==0,Mt=!Z&&(t==="scroll"||t==="scrollend"),d=Z?g!==null?g+"Capture":null:g;Z=[];for(var r=v,y;r!==null;){var A=r;if(y=A.stateNode,A=A.tag,A!==5&&A!==26&&A!==27||y===null||d===null||(A=Wl(r,d),A!=null&&Z.push(Ca(r,A,y))),Mt)break;r=r.return}0<Z.length&&(g=new M(g,B,null,n,E),D.push({event:g,listeners:Z}))}}if((e&7)===0){t:{if(g=t==="mouseover"||t==="pointerover",M=t==="mouseout"||t==="pointerout",g&&n!==Mi&&(B=n.relatedTarget||n.fromElement)&&(cl(B)||B[il]))break t;if((M||g)&&(g=E.window===E?E:(g=E.ownerDocument)?g.defaultView||g.parentWindow:window,M?(B=n.relatedTarget||n.toElement,M=v,B=B?cl(B):null,B!==null&&(Mt=w(B),Z=B.tag,B!==Mt||Z!==5&&Z!==27&&Z!==6)&&(B=null)):(M=null,B=v),M!==B)){if(Z=nf,A="onMouseLeave",d="onMouseEnter",r="mouse",(t==="pointerout"||t==="pointerover")&&(Z=af,A="onPointerLeave",d="onPointerEnter",r="pointer"),Mt=M==null?g:kl(M),y=B==null?g:kl(B),g=new Z(A,r+"leave",M,n,E),g.target=Mt,g.relatedTarget=y,A=null,cl(E)===v&&(Z=new Z(d,r+"enter",B,n,E),Z.target=y,Z.relatedTarget=Mt,A=Z),Mt=A,M&&B)e:{for(Z=Bd,d=M,r=B,y=0,A=d;A;A=Z(A))y++;A=0;for(var Q=r;Q;Q=Z(Q))A++;for(;0<y-A;)d=Z(d),y--;for(;0<A-y;)r=Z(r),A--;for(;y--;){if(d===r||r!==null&&d===r.alternate){Z=d;break e}d=Z(d),r=Z(r)}Z=null}else Z=null;M!==null&&Fr(D,g,M,Z,!1),B!==null&&Mt!==null&&Fr(D,Mt,B,Z,!0)}}t:{if(g=v?kl(v):window,M=g.nodeName&&g.nodeName.toLowerCase(),M==="select"||M==="input"&&g.type==="file")var rt=df;else if(rf(g))if(mf)rt=Wh;else{rt=$h;var q=Jh}else M=g.nodeName,!M||M.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?v&&bi(v.elementType)&&(rt=df):rt=kh;if(rt&&(rt=rt(t,v))){hf(D,rt,n,E);break t}q&&q(t,g,v),t==="focusout"&&v&&g.type==="number"&&v.memoizedProps.value!=null&&Si(g,"number",g.value)}switch(q=v?kl(v):window,t){case"focusin":(rf(q)||q.contentEditable==="true")&&(vl=q,Ui=v,aa=null);break;case"focusout":aa=Ui=vl=null;break;case"mousedown":Hi=!0;break;case"contextmenu":case"mouseup":case"dragend":Hi=!1,Tf(D,n,E);break;case"selectionchange":if(Ih)break;case"keydown":case"keyup":Tf(D,n,E)}var I;if(_i)t:{switch(t){case"compositionstart":var ut="onCompositionStart";break t;case"compositionend":ut="onCompositionEnd";break t;case"compositionupdate":ut="onCompositionUpdate";break t}ut=void 0}else yl?ff(t,n)&&(ut="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(ut="onCompositionStart");ut&&(uf&&n.locale!=="ko"&&(yl||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&yl&&(I=tf()):(vn=E,zi="value"in vn?vn.value:vn.textContent,yl=!0)),q=Vu(v,ut),0<q.length&&(ut=new lf(ut,t,null,n,E),D.push({event:ut,listeners:q}),I?ut.data=I:(I=of(n),I!==null&&(ut.data=I)))),(I=Xh?Qh(t,n):Zh(t,n))&&(ut=Vu(v,"onBeforeInput"),0<ut.length&&(q=new lf("onBeforeInput","beforeinput",null,n,E),D.push({event:q,listeners:ut}),q.data=I)),Hd(D,t,v,n,E)}kr(D,e)})}function Ca(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Vu(t,e){for(var n=e+"Capture",l=[];t!==null;){var a=t,u=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||u===null||(a=Wl(t,n),a!=null&&l.unshift(Ca(t,a,u)),a=Wl(t,e),a!=null&&l.push(Ca(t,a,u))),t.tag===3)return l;t=t.return}return[]}function Bd(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Fr(t,e,n,l,a){for(var u=e._reactName,i=[];n!==null&&n!==l;){var c=n,f=c.alternate,v=c.stateNode;if(c=c.tag,f!==null&&f===l)break;c!==5&&c!==26&&c!==27||v===null||(f=v,a?(v=Wl(n,u),v!=null&&i.unshift(Ca(n,v,f))):a||(v=Wl(n,u),v!=null&&i.push(Ca(n,v,f)))),n=n.return}i.length!==0&&t.push({event:e,listeners:i})}var Ld=/\r\n?/g,qd=/\u0000|\uFFFD/g;function Ir(t){return(typeof t=="string"?t:""+t).replace(Ld,`
`).replace(qd,"")}function Pr(t,e){return e=Ir(e),Ir(t)===e}function bt(t,e,n,l,a,u){switch(n){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||hl(t,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&hl(t,""+l);break;case"className":ka(t,"class",l);break;case"tabIndex":ka(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ka(t,n,l);break;case"style":Fs(t,l,u);break;case"data":if(e!=="object"){ka(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(n);break}l=Fa(""+l),t.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(e!=="input"&&bt(t,e,"name",a.name,a,null),bt(t,e,"formEncType",a.formEncType,a,null),bt(t,e,"formMethod",a.formMethod,a,null),bt(t,e,"formTarget",a.formTarget,a,null)):(bt(t,e,"encType",a.encType,a,null),bt(t,e,"method",a.method,a,null),bt(t,e,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(n);break}l=Fa(""+l),t.setAttribute(n,l);break;case"onClick":l!=null&&(t.onclick=ke);break;case"onScroll":l!=null&&nt("scroll",t);break;case"onScrollEnd":l!=null&&nt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(s(60));t.innerHTML=n}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}n=Fa(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(n,""+l):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":l===!0?t.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(n,l):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(n,l):t.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(n):t.setAttribute(n,l);break;case"popover":nt("beforetoggle",t),nt("toggle",t),$a(t,"popover",l);break;case"xlinkActuate":$e(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":$e(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":$e(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":$e(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":$e(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":$e(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":$e(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":$e(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":$e(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":$a(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=yh.get(n)||n,$a(t,n,l))}}function is(t,e,n,l,a,u){switch(n){case"style":Fs(t,l,u);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(s(60));t.innerHTML=n}}break;case"children":typeof l=="string"?hl(t,l):(typeof l=="number"||typeof l=="bigint")&&hl(t,""+l);break;case"onScroll":l!=null&&nt("scroll",t);break;case"onScrollEnd":l!=null&&nt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=ke);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xs.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),e=n.slice(2,a?n.length-7:void 0),u=t[he]||null,u=u!=null?u[n]:null,typeof u=="function"&&t.removeEventListener(e,u,a),typeof l=="function")){typeof u!="function"&&u!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,l,a);break t}n in t?t[n]=l:l===!0?t.setAttribute(n,""):$a(t,n,l)}}}function ee(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":nt("error",t),nt("load",t);var l=!1,a=!1,u;for(u in n)if(n.hasOwnProperty(u)){var i=n[u];if(i!=null)switch(u){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:bt(t,e,u,i,n,null)}}a&&bt(t,e,"srcSet",n.srcSet,n,null),l&&bt(t,e,"src",n.src,n,null);return;case"input":nt("invalid",t);var c=u=i=a=null,f=null,v=null;for(l in n)if(n.hasOwnProperty(l)){var E=n[l];if(E!=null)switch(l){case"name":a=E;break;case"type":i=E;break;case"checked":f=E;break;case"defaultChecked":v=E;break;case"value":u=E;break;case"defaultValue":c=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(137,e));break;default:bt(t,e,l,E,n,null)}}Js(t,u,c,f,v,i,a,!1);return;case"select":nt("invalid",t),l=i=u=null;for(a in n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case"value":u=c;break;case"defaultValue":i=c;break;case"multiple":l=c;default:bt(t,e,a,c,n,null)}e=u,n=i,t.multiple=!!l,e!=null?rl(t,!!l,e,!1):n!=null&&rl(t,!!l,n,!0);return;case"textarea":nt("invalid",t),u=a=l=null;for(i in n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case"value":l=c;break;case"defaultValue":a=c;break;case"children":u=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:bt(t,e,i,c,n,null)}ks(t,l,a,u);return;case"option":for(f in n)n.hasOwnProperty(f)&&(l=n[f],l!=null)&&(f==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":bt(t,e,f,l,n,null));return;case"dialog":nt("beforetoggle",t),nt("toggle",t),nt("cancel",t),nt("close",t);break;case"iframe":case"object":nt("load",t);break;case"video":case"audio":for(l=0;l<Da.length;l++)nt(Da[l],t);break;case"image":nt("error",t),nt("load",t);break;case"details":nt("toggle",t);break;case"embed":case"source":case"link":nt("error",t),nt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(v in n)if(n.hasOwnProperty(v)&&(l=n[v],l!=null))switch(v){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:bt(t,e,v,l,n,null)}return;default:if(bi(e)){for(E in n)n.hasOwnProperty(E)&&(l=n[E],l!==void 0&&is(t,e,E,l,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(l=n[c],l!=null&&bt(t,e,c,l,n,null))}function Xd(t,e,n,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,u=null,i=null,c=null,f=null,v=null,E=null;for(M in n){var D=n[M];if(n.hasOwnProperty(M)&&D!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":f=D;default:l.hasOwnProperty(M)||bt(t,e,M,null,l,D)}}for(var g in l){var M=l[g];if(D=n[g],l.hasOwnProperty(g)&&(M!=null||D!=null))switch(g){case"type":u=M;break;case"name":a=M;break;case"checked":v=M;break;case"defaultChecked":E=M;break;case"value":i=M;break;case"defaultValue":c=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(s(137,e));break;default:M!==D&&bt(t,e,g,M,l,D)}}gi(t,i,c,f,v,E,u,a);return;case"select":M=i=c=g=null;for(u in n)if(f=n[u],n.hasOwnProperty(u)&&f!=null)switch(u){case"value":break;case"multiple":M=f;default:l.hasOwnProperty(u)||bt(t,e,u,null,l,f)}for(a in l)if(u=l[a],f=n[a],l.hasOwnProperty(a)&&(u!=null||f!=null))switch(a){case"value":g=u;break;case"defaultValue":c=u;break;case"multiple":i=u;default:u!==f&&bt(t,e,a,u,l,f)}e=c,n=i,l=M,g!=null?rl(t,!!n,g,!1):!!l!=!!n&&(e!=null?rl(t,!!n,e,!0):rl(t,!!n,n?[]:"",!1));return;case"textarea":M=g=null;for(c in n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!l.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:bt(t,e,c,null,l,a)}for(i in l)if(a=l[i],u=n[i],l.hasOwnProperty(i)&&(a!=null||u!=null))switch(i){case"value":g=a;break;case"defaultValue":M=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(s(91));break;default:a!==u&&bt(t,e,i,a,l,u)}$s(t,g,M);return;case"option":for(var B in n)g=n[B],n.hasOwnProperty(B)&&g!=null&&!l.hasOwnProperty(B)&&(B==="selected"?t.selected=!1:bt(t,e,B,null,l,g));for(f in l)g=l[f],M=n[f],l.hasOwnProperty(f)&&g!==M&&(g!=null||M!=null)&&(f==="selected"?t.selected=g&&typeof g!="function"&&typeof g!="symbol":bt(t,e,f,g,l,M));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Z in n)g=n[Z],n.hasOwnProperty(Z)&&g!=null&&!l.hasOwnProperty(Z)&&bt(t,e,Z,null,l,g);for(v in l)if(g=l[v],M=n[v],l.hasOwnProperty(v)&&g!==M&&(g!=null||M!=null))switch(v){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(s(137,e));break;default:bt(t,e,v,g,l,M)}return;default:if(bi(e)){for(var Mt in n)g=n[Mt],n.hasOwnProperty(Mt)&&g!==void 0&&!l.hasOwnProperty(Mt)&&is(t,e,Mt,void 0,l,g);for(E in l)g=l[E],M=n[E],!l.hasOwnProperty(E)||g===M||g===void 0&&M===void 0||is(t,e,E,g,l,M);return}}for(var d in n)g=n[d],n.hasOwnProperty(d)&&g!=null&&!l.hasOwnProperty(d)&&bt(t,e,d,null,l,g);for(D in l)g=l[D],M=n[D],!l.hasOwnProperty(D)||g===M||g==null&&M==null||bt(t,e,D,g,l,M)}function t0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Qd(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var a=n[l],u=a.transferSize,i=a.initiatorType,c=a.duration;if(u&&c&&t0(i)){for(i=0,c=a.responseEnd,l+=1;l<n.length;l++){var f=n[l],v=f.startTime;if(v>c)break;var E=f.transferSize,D=f.initiatorType;E&&t0(D)&&(f=f.responseEnd,i+=E*(f<c?1:(c-v)/(f-v)))}if(--l,e+=8*(u+i)/(a.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var cs=null,ss=null;function Ku(t){return t.nodeType===9?t:t.ownerDocument}function e0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function n0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function fs(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var os=null;function Zd(){var t=window.event;return t&&t.type==="popstate"?t===os?!1:(os=t,!0):(os=null,!1)}var l0=typeof setTimeout=="function"?setTimeout:void 0,Vd=typeof clearTimeout=="function"?clearTimeout:void 0,a0=typeof Promise=="function"?Promise:void 0,Kd=typeof queueMicrotask=="function"?queueMicrotask:typeof a0<"u"?function(t){return a0.resolve(null).then(t).catch(Jd)}:l0;function Jd(t){setTimeout(function(){throw t})}function Nn(t){return t==="head"}function u0(t,e){var n=e,l=0;do{var a=n.nextSibling;if(t.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(l===0){t.removeChild(a),Ql(e);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")_a(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,_a(n);for(var u=n.firstChild;u;){var i=u.nextSibling,c=u.nodeName;u[$l]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=i}}else n==="body"&&_a(t.ownerDocument.body);n=a}while(n);Ql(e)}function i0(t,e){var n=t;t=0;do{var l=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=l}while(n)}function rs(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":rs(n),vi(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function $d(t,e,n,l){for(;t.nodeType===1;){var a=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[$l])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=He(t.nextSibling),t===null)break}return null}function kd(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=He(t.nextSibling),t===null))return null;return t}function c0(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=He(t.nextSibling),t===null))return null;return t}function hs(t){return t.data==="$?"||t.data==="$~"}function ds(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Wd(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var l=function(){e(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function He(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var ms=null;function s0(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return He(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function f0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function o0(t,e,n){switch(e=Ku(n),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function _a(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);vi(t)}var je=new Map,r0=new Set;function Ju(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var hn=_.d;_.d={f:Fd,r:Id,D:Pd,C:tm,L:em,m:nm,X:am,S:lm,M:um};function Fd(){var t=hn.f(),e=Yu();return t||e}function Id(t){var e=sl(t);e!==null&&e.tag===5&&e.type==="form"?Do(e):hn.r(t)}var Ll=typeof document>"u"?null:document;function h0(t,e,n){var l=Ll;if(l&&typeof e=="string"&&e){var a=De(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),r0.has(a)||(r0.add(a),t={rel:t,crossOrigin:n,href:e},l.querySelector(a)===null&&(e=l.createElement("link"),ee(e,"link",t),Jt(e),l.head.appendChild(e)))}}function Pd(t){hn.D(t),h0("dns-prefetch",t,null)}function tm(t,e){hn.C(t,e),h0("preconnect",t,e)}function em(t,e,n){hn.L(t,e,n);var l=Ll;if(l&&t&&e){var a='link[rel="preload"][as="'+De(e)+'"]';e==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+De(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+De(n.imageSizes)+'"]')):a+='[href="'+De(t)+'"]';var u=a;switch(e){case"style":u=ql(t);break;case"script":u=Xl(t)}je.has(u)||(t=N({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),je.set(u,t),l.querySelector(a)!==null||e==="style"&&l.querySelector(Oa(u))||e==="script"&&l.querySelector(wa(u))||(e=l.createElement("link"),ee(e,"link",t),Jt(e),l.head.appendChild(e)))}}function nm(t,e){hn.m(t,e);var n=Ll;if(n&&t){var l=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+De(l)+'"][href="'+De(t)+'"]',u=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Xl(t)}if(!je.has(u)&&(t=N({rel:"modulepreload",href:t},e),je.set(u,t),n.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(wa(u)))return}l=n.createElement("link"),ee(l,"link",t),Jt(l),n.head.appendChild(l)}}}function lm(t,e,n){hn.S(t,e,n);var l=Ll;if(l&&t){var a=fl(l).hoistableStyles,u=ql(t);e=e||"default";var i=a.get(u);if(!i){var c={loading:0,preload:null};if(i=l.querySelector(Oa(u)))c.loading=5;else{t=N({rel:"stylesheet",href:t,"data-precedence":e},n),(n=je.get(u))&&ys(t,n);var f=i=l.createElement("link");Jt(f),ee(f,"link",t),f._p=new Promise(function(v,E){f.onload=v,f.onerror=E}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,$u(i,e,l)}i={type:"stylesheet",instance:i,count:1,state:c},a.set(u,i)}}}function am(t,e){hn.X(t,e);var n=Ll;if(n&&t){var l=fl(n).hoistableScripts,a=Xl(t),u=l.get(a);u||(u=n.querySelector(wa(a)),u||(t=N({src:t,async:!0},e),(e=je.get(a))&&vs(t,e),u=n.createElement("script"),Jt(u),ee(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(a,u))}}function um(t,e){hn.M(t,e);var n=Ll;if(n&&t){var l=fl(n).hoistableScripts,a=Xl(t),u=l.get(a);u||(u=n.querySelector(wa(a)),u||(t=N({src:t,async:!0,type:"module"},e),(e=je.get(a))&&vs(t,e),u=n.createElement("script"),Jt(u),ee(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(a,u))}}function d0(t,e,n,l){var a=(a=k.current)?Ju(a):null;if(!a)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=ql(n.href),n=fl(a).hoistableStyles,l=n.get(e),l||(l={type:"style",instance:null,count:0,state:null},n.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=ql(n.href);var u=fl(a).hoistableStyles,i=u.get(t);if(i||(a=a.ownerDocument||a,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,i),(u=a.querySelector(Oa(t)))&&!u._p&&(i.instance=u,i.state.loading=5),je.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},je.set(t,n),u||im(a,t,n,i.state))),e&&l===null)throw Error(s(528,""));return i}if(e&&l!==null)throw Error(s(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Xl(n),n=fl(a).hoistableScripts,l=n.get(e),l||(l={type:"script",instance:null,count:0,state:null},n.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function ql(t){return'href="'+De(t)+'"'}function Oa(t){return'link[rel="stylesheet"]['+t+"]"}function m0(t){return N({},t,{"data-precedence":t.precedence,precedence:null})}function im(t,e,n,l){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=t.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),ee(e,"link",n),Jt(e),t.head.appendChild(e))}function Xl(t){return'[src="'+De(t)+'"]'}function wa(t){return"script[async]"+t}function y0(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+De(n.href)+'"]');if(l)return e.instance=l,Jt(l),l;var a=N({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Jt(l),ee(l,"style",a),$u(l,n.precedence,t),e.instance=l;case"stylesheet":a=ql(n.href);var u=t.querySelector(Oa(a));if(u)return e.state.loading|=4,e.instance=u,Jt(u),u;l=m0(n),(a=je.get(a))&&ys(l,a),u=(t.ownerDocument||t).createElement("link"),Jt(u);var i=u;return i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),ee(u,"link",l),e.state.loading|=4,$u(u,n.precedence,t),e.instance=u;case"script":return u=Xl(n.src),(a=t.querySelector(wa(u)))?(e.instance=a,Jt(a),a):(l=n,(a=je.get(u))&&(l=N({},n),vs(l,a)),t=t.ownerDocument||t,a=t.createElement("script"),Jt(a),ee(a,"link",l),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,$u(l,n.precedence,t));return e.instance}function $u(t,e,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,u=a,i=0;i<l.length;i++){var c=l[i];if(c.dataset.precedence===e)u=c;else if(u!==a)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function ys(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function vs(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var ku=null;function v0(t,e,n){if(ku===null){var l=new Map,a=ku=new Map;a.set(n,l)}else a=ku,l=a.get(n),l||(l=new Map,a.set(n,l));if(l.has(t))return l;for(l.set(t,null),n=n.getElementsByTagName(t),a=0;a<n.length;a++){var u=n[a];if(!(u[$l]||u[Ft]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(e)||"";i=t+i;var c=l.get(i);c?c.push(u):l.set(i,[u])}}return l}function p0(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function cm(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function g0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function sm(t,e,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=ql(l.href),u=e.querySelector(Oa(a));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Wu.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=u,Jt(u);return}u=e.ownerDocument||e,l=m0(l),(a=je.get(a))&&ys(l,a),u=u.createElement("link"),Jt(u);var i=u;i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),ee(u,"link",l),n.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,n=Wu.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var ps=0;function fm(t,e){return t.stylesheets&&t.count===0&&Iu(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var l=setTimeout(function(){if(t.stylesheets&&Iu(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+e);0<t.imgBytes&&ps===0&&(ps=62500*Qd());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Iu(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>ps?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(a)}}:null}function Wu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Iu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Fu=null;function Iu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Fu=new Map,e.forEach(om,t),Fu=null,Wu.call(t))}function om(t,e){if(!(e.state.loading&4)){var n=Fu.get(t);if(n)var l=n.get(null);else{n=new Map,Fu.set(t,n);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<a.length;u++){var i=a[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(n.set(i.dataset.precedence,i),l=i)}l&&n.set(null,l)}a=e.instance,i=a.getAttribute("data-precedence"),u=n.get(i)||l,u===l&&n.set(null,a),n.set(i,a),this.count++,l=Wu.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),u?u.parentNode.insertBefore(a,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var Na={$$typeof:tt,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function rm(t,e,n,l,a,u,i,c,f){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=hi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hi(0),this.hiddenUpdates=hi(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function S0(t,e,n,l,a,u,i,c,f,v,E,D){return t=new rm(t,e,n,i,f,v,E,D,c),e=1,u===!0&&(e|=24),u=Me(3,null,null,e),t.current=u,u.stateNode=t,e=Wi(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:l,isDehydrated:n,cache:e},tc(u),t}function b0(t){return t?(t=Sl,t):Sl}function M0(t,e,n,l,a,u){a=b0(a),l.context===null?l.context=a:l.pendingContext=a,l=Tn(e),l.payload={element:n},u=u===void 0?null:u,u!==null&&(l.callback=u),n=xn(t,l,e),n!==null&&(ge(n,t,e),ra(n,t,e))}function T0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function gs(t,e){T0(t,e),(t=t.alternate)&&T0(t,e)}function x0(t){if(t.tag===13||t.tag===31){var e=Vn(t,67108864);e!==null&&ge(e,t,67108864),gs(t,67108864)}}function E0(t){if(t.tag===13||t.tag===31){var e=Ae();e=di(e);var n=Vn(t,e);n!==null&&ge(n,t,e),gs(t,e)}}var Pu=!0;function hm(t,e,n,l){var a=S.T;S.T=null;var u=_.p;try{_.p=2,Ss(t,e,n,l)}finally{_.p=u,S.T=a}}function dm(t,e,n,l){var a=S.T;S.T=null;var u=_.p;try{_.p=8,Ss(t,e,n,l)}finally{_.p=u,S.T=a}}function Ss(t,e,n,l){if(Pu){var a=bs(l);if(a===null)us(t,e,l,ti,n),A0(t,l);else if(ym(a,t,e,n,l))l.stopPropagation();else if(A0(t,l),e&4&&-1<mm.indexOf(t)){for(;a!==null;){var u=sl(a);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=Ln(u.pendingLanes);if(i!==0){var c=u;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var f=1<<31-Kt(i);c.entanglements[1]|=f,i&=~f}Je(u),(dt&6)===0&&(ju=ie()+500,Ra(0))}}break;case 31:case 13:c=Vn(u,2),c!==null&&ge(c,u,2),Yu(),gs(u,2)}if(u=bs(l),u===null&&us(t,e,l,ti,n),u===a)break;a=u}a!==null&&l.stopPropagation()}else us(t,e,l,null,n)}}function bs(t){return t=Ti(t),Ms(t)}var ti=null;function Ms(t){if(ti=null,t=cl(t),t!==null){var e=w(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=m(e),t!==null)return t;t=null}else if(n===31){if(t=O(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return ti=t,null}function z0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(oi()){case La:return 2;case qa:return 8;case ul:case Xa:return 32;case Qa:return 268435456;default:return 32}default:return 32}}var Ts=!1,Un=null,Hn=null,jn=null,Ua=new Map,Ha=new Map,Gn=[],mm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function A0(t,e){switch(t){case"focusin":case"focusout":Un=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":jn=null;break;case"pointerover":case"pointerout":Ua.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ha.delete(e.pointerId)}}function ja(t,e,n,l,a,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:n,eventSystemFlags:l,nativeEvent:u,targetContainers:[a]},e!==null&&(e=sl(e),e!==null&&x0(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function ym(t,e,n,l,a){switch(e){case"focusin":return Un=ja(Un,t,e,n,l,a),!0;case"dragenter":return Hn=ja(Hn,t,e,n,l,a),!0;case"mouseover":return jn=ja(jn,t,e,n,l,a),!0;case"pointerover":var u=a.pointerId;return Ua.set(u,ja(Ua.get(u)||null,t,e,n,l,a)),!0;case"gotpointercapture":return u=a.pointerId,Ha.set(u,ja(Ha.get(u)||null,t,e,n,l,a)),!0}return!1}function R0(t){var e=cl(t.target);if(e!==null){var n=w(e);if(n!==null){if(e=n.tag,e===13){if(e=m(n),e!==null){t.blockedOn=e,Bs(t.priority,function(){E0(n)});return}}else if(e===31){if(e=O(n),e!==null){t.blockedOn=e,Bs(t.priority,function(){E0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ei(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bs(t.nativeEvent);if(n===null){n=t.nativeEvent;var l=new n.constructor(n.type,n);Mi=l,n.target.dispatchEvent(l),Mi=null}else return e=sl(n),e!==null&&x0(e),t.blockedOn=n,!1;e.shift()}return!0}function D0(t,e,n){ei(t)&&n.delete(e)}function vm(){Ts=!1,Un!==null&&ei(Un)&&(Un=null),Hn!==null&&ei(Hn)&&(Hn=null),jn!==null&&ei(jn)&&(jn=null),Ua.forEach(D0),Ha.forEach(D0)}function ni(t,e){t.blockedOn===e&&(t.blockedOn=null,Ts||(Ts=!0,h.unstable_scheduleCallback(h.unstable_NormalPriority,vm)))}var li=null;function C0(t){li!==t&&(li=t,h.unstable_scheduleCallback(h.unstable_NormalPriority,function(){li===t&&(li=null);for(var e=0;e<t.length;e+=3){var n=t[e],l=t[e+1],a=t[e+2];if(typeof l!="function"){if(Ms(l||n)===null)continue;break}var u=sl(n);u!==null&&(t.splice(e,3),e-=3,bc(u,{pending:!0,data:a,method:n.method,action:l},l,a))}}))}function Ql(t){function e(f){return ni(f,t)}Un!==null&&ni(Un,t),Hn!==null&&ni(Hn,t),jn!==null&&ni(jn,t),Ua.forEach(e),Ha.forEach(e);for(var n=0;n<Gn.length;n++){var l=Gn[n];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Gn.length&&(n=Gn[0],n.blockedOn===null);)R0(n),n.blockedOn===null&&Gn.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var a=n[l],u=n[l+1],i=a[he]||null;if(typeof u=="function")i||C0(n);else if(i){var c=null;if(u&&u.hasAttribute("formAction")){if(a=u,i=u[he]||null)c=i.formAction;else if(Ms(a)!==null)continue}else c=i.action;typeof c=="function"?n[l+1]=c:(n.splice(l,3),l-=3),C0(n)}}}function _0(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return a=i})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function xs(t){this._internalRoot=t}ai.prototype.render=xs.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var n=e.current,l=Ae();M0(n,l,t,e,null,null)},ai.prototype.unmount=xs.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;M0(t.current,2,null,t,null,null),Yu(),e[il]=null}};function ai(t){this._internalRoot=t}ai.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ys();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gn.length&&e!==0&&e<Gn[n].priority;n++);Gn.splice(n,0,t),n===0&&R0(t)}};var O0=x.version;if(O0!=="19.2.8")throw Error(s(527,O0,"19.2.8"));_.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=b(e),t=t!==null?U(t):null,t=t===null?null:t.stateNode,t};var pm={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ui=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ui.isDisabled&&ui.supportsFiber)try{Be=ui.inject(pm),ce=ui}catch{}}return Ya.createRoot=function(t,e){if(!z(t))throw Error(s(299));var n=!1,l="",a=Yo,u=Bo,i=Lo;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=S0(t,1,!1,null,null,n,l,null,a,u,i,_0),t[il]=e.current,as(t),new xs(e)},Ya.hydrateRoot=function(t,e,n){if(!z(t))throw Error(s(299));var l=!1,a="",u=Yo,i=Bo,c=Lo,f=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(i=n.onCaughtError),n.onRecoverableError!==void 0&&(c=n.onRecoverableError),n.formState!==void 0&&(f=n.formState)),e=S0(t,1,!0,e,n??null,l,a,f,u,i,c,_0),e.context=b0(null),n=e.current,l=Ae(),l=di(l),a=Tn(l),a.callback=null,xn(n,a,l),n=l,e.current.lanes=n,Jl(e,n),Je(e),t[il]=e.current,as(t),new ai(e)},Ya.version="19.2.8",Ya}var q0;function Rm(){if(q0)return zs.exports;q0=1;function h(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h)}catch(x){console.error(x)}}return h(),zs.exports=Am(),zs.exports}var Dm=Rm(),V=Ns();const X0=["curly","angle","hash","lambda","node","slash","semicolon"],Q0=["·","×","+","░","▪","◦","»"],Z0=["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚲ","ᚷ","ᚹ","ᛃ","ᛈ","ᛊ","ᛏ","ᛒ","ᛗ","ᛚ","ᛟ","☥","◬","⊕","⊗","⍟"],ii=["!","<",">","-","_","\\","/","[","]","{","}","=","+","*","^","?","#","▓","░","▒","█","▄","▀","■","□","0","1","α","β","γ","δ","λ","π","θ","⟨","⟩","¬","≈","≠","±","∞","カ","タ","ナ","サ"],si=["!<>-_\\/[]{}—=+*^?#","▓░▒█▄▀■□▪▫","01100110101001","αβγδεζηθλμξπ","⟨⟩⌐¬∴∵≈≠±∞","カタナサキミ"],ws=80,Qe=10,V0=Math.ceil(ws/Qe);function Cm(h,x,C,s,z=1){const w=h/x;if(w<.5){const O=w*2,p=-Math.PI/2+(O-.5)*1.2;return{x:C+Math.sin(p*3)*O*28*.6*z,y:s-10*z-O*45*z}}if(w<.75){const O=(w-.5)*4;return{x:C-30*z+O*60*z,y:s+18*z+O*6*z}}const m=(w-.75)*4;return{x:C+30*z-m*60*z,y:s+22*z+m*4*z}}class _m{constructor(x,C,s,z){this.formationScale=1,this.homeX=x,this.homeY=C,this.x=x,this.y=C,this.id=s,this.total=z,this.phase=Math.random()*Math.PI*2,this.speed=.3+Math.random()*.4,this.radius=1.5+Math.random()*1.5,this.size=5+Math.random()*3,this.rotation=Math.random()*Math.PI*2,this.rotSpeed=(Math.random()-.5)*.001,this.type=X0[s%X0.length],this.heat=0,this.rippleVx=0,this.rippleVy=0,this.spinBoost=0,this.glyph=null,this.homeGlyph=Math.random()<.4?Z0[Math.floor(Math.random()*Z0.length)]:null,this.glyphNextAt=Date.now()+2e3+Math.random()*6e3,this.glyphEndAt=0,this.glyphLastSwap=0,this.glyphSwapInterval=40,this.glyphCooldownUntil=0}update(x,C,s,z,w,m,O=C/2,p=s/2,b=1){this.formationScale=b;const U=Date.now()*.001;this.rotation+=this.rotSpeed+Math.sin(U*this.speed+this.phase)*.003,x<.25?this.updateScatteredPhase(U,x):x<.5?this.updateClusterPhase(U,x,O,p,C,s):x<.75?this.updateRingPhase(U,x,O,p,C,s):this.updateCampfirePhase(U,x,O,p,C,s),this.heat*=.93,this.spinBoost*=.95,this.rippleVx*=.92,this.rippleVy*=.92,m&&this.applyMouseForce(z,w,x,C),this.x+=Math.sin(U*.01+this.phase)*this.rippleVx,this.y+=Math.cos(U*.01+this.phase)*this.rippleVy,this.rotation+=this.spinBoost*(this.id%2===0?1:-1),this.applyPhantomForce(U,C,s);const N=Date.now();if(this.glyph){if(N-this.glyphLastSwap>this.glyphSwapInterval){this.glyph=ii[Math.floor(Math.random()*ii.length)],this.glyphLastSwap=N;const L=this.glyphEndAt-N;L<150?this.glyphSwapInterval=80:L<300&&(this.glyphSwapInterval=55)}N>this.glyphEndAt&&(this.glyph=null,this.glyphSwapInterval=40,this.glyphCooldownUntil=N+800)}x>=.9&&this.glyph&&(this.glyph=null)}triggerScramble(x){if(this.glyph||Date.now()<this.glyphCooldownUntil)return;const C=Date.now();this.glyph=ii[Math.floor(Math.random()*ii.length)],this.glyphLastSwap=C,this.glyphSwapInterval=40,this.glyphEndAt=C+x}updateScatteredPhase(x,C){const s=Math.max(.2,C*3),z=Math.sin(x*this.speed+this.phase)*4*s+Math.sin(x*.4+this.id*.7)*2+Math.cos(x*.15+this.phase*2)*2.5,w=Math.cos(x*this.speed*.7+this.phase)*3.5*s+Math.cos(x*.35+this.id*.5)*2+Math.sin(x*.12+this.phase*1.5)*2.5;this.x+=(this.homeX+z-this.x)*.08,this.y+=(this.homeY+w-this.y)*.08}updateClusterPhase(x,C,s,z,w,m){const O=(C-.25)*4,p=this.id/this.total*Math.PI*2+x*.15,b=Math.min(w,m),U=w<640,N=b<500?b*1.6:b,L=(U?N*.16-O*N*.02:N*.11-O*N*.02)*this.formationScale,P=U?m*.06:0,st=s+Math.cos(p)*L+Math.sin(x*this.speed+this.phase)*8*(1-O),gt=z+P+Math.sin(p)*L+Math.cos(x*this.speed+this.phase)*8*(1-O);this.x+=(st-this.x)*.06,this.y+=(gt-this.y)*.06}updateRingPhase(x,C,s,z,w,m){const O=(C-.5)*4,p=this.id/this.total*Math.PI*2+x*.2,b=Math.min(w,m),U=w<640,N=b<500?b*1.6:b,L=(U?N*.11-O*N*.025:N*.07-O*N*.025)*this.formationScale,P=U?m*.06:0,st=s+Math.cos(p+O*.5)*L,gt=z+P+Math.sin(p+O*.5)*L;this.x+=(st-this.x)*.08,this.y+=(gt-this.y)*.08}updateCampfirePhase(x,C,s,z,w,m){const O=Math.min(1,(C-.75)*4),p=Math.min(w,m),b=w<640,U=(p<500?p*(b?2.2:1.6):p)/600*this.formationScale,N=Cm(this.id,this.total,s,z+m*.12,U),L=Math.sin(x*2+this.phase)*(1.5-O*1.2)*U;this.x+=(N.x+L-this.x)*(.04+O*.06),this.y+=(N.y+L*.5-this.y)*(.04+O*.06)}applyMouseForce(x,C,s,z){const w=this.x-x,m=this.y-C,O=Math.sqrt(w*w+m*m),p=1+(1-Math.min(1,s*2))*2,b=z<640?Math.max(.7,z/1024):Math.min(1,z/1024),U=(35+(1-Math.min(1,s*2))*20)*b,N=Math.max(30,U);if(O<N&&O>0){const L=(N-O)/N,P=w/O*L*3*p,st=m/O*L*3*p;this.x+=P,this.y+=st,this.rippleVx+=P*.4,this.rippleVy+=st*.4,this.heat=Math.min(1,this.heat+L*.3),this.spinBoost=Math.min(.025,this.spinBoost+L*.006),L>.15&&!this.glyph&&s<.9&&this.triggerScramble(600+L*400)}}applyPhantomForce(x,C,s){const z=C*.5+Math.sin(x*.3)*C*.3+Math.cos(x*.17)*C*.15,w=s*.5+Math.cos(x*.25)*s*.25+Math.sin(x*.13)*s*.1,m=this.x-z,O=this.y-w,p=Math.sqrt(m*m+O*O),b=Math.min(1,C/1024),U=Math.max(25,60*b);if(p<U&&p>0){const N=(U-p)/U;this.x+=m/p*N*1.2,this.y+=O/p*N*1.2}}}function Om(h,x,C,s,z,w){h.save(),h.translate(C,s),h.rotate(w),h.beginPath();const m=z;switch(x){case"curly":h.moveTo(-m*.3,-m),h.quadraticCurveTo(-m*.7,-m*.5,-m*.3,0),h.quadraticCurveTo(-m*.7,m*.5,-m*.3,m),h.moveTo(m*.3,-m),h.quadraticCurveTo(m*.7,-m*.5,m*.3,0),h.quadraticCurveTo(m*.7,m*.5,m*.3,m);break;case"angle":h.moveTo(-m*.1,-m),h.lineTo(-m*.7,0),h.lineTo(-m*.1,m),h.moveTo(m*.1,-m),h.lineTo(m*.7,0),h.lineTo(m*.1,m);break;case"hash":h.moveTo(-m*.5,-m*.35),h.lineTo(m*.5,-m*.35),h.moveTo(-m*.5,m*.35),h.lineTo(m*.5,m*.35),h.moveTo(-m*.2,-m*.7),h.lineTo(-m*.2,m*.7),h.moveTo(m*.2,-m*.7),h.lineTo(m*.2,m*.7);break;case"lambda":h.moveTo(-m*.4,-m),h.lineTo(0,0),h.lineTo(m*.4,m),h.moveTo(0,0),h.lineTo(-m*.4,m);break;case"node":h.arc(0,0,m*.35,0,Math.PI*2),h.moveTo(0,-m*.35),h.lineTo(0,-m),h.moveTo(m*.3,m*.18),h.lineTo(m*.8,m*.5),h.moveTo(-m*.3,m*.18),h.lineTo(-m*.8,m*.5);break;case"slash":h.moveTo(m*.35,-m),h.lineTo(-m*.35,m);break;case"semicolon":h.arc(0,-m*.3,m*.15,0,Math.PI*2),h.moveTo(m*.1,m*.1),h.quadraticCurveTo(0,m*.5,-m*.15,m*.8);break}h.stroke(),h.restore()}function wm(h,x,C){if(x<h.minCol||x>h.maxCol||C<h.minRow||C>h.maxRow)return-1;const s=h.maxCol-h.minCol,z=h.maxRow-h.minRow,w=x-h.minCol,m=C-h.minRow;let O;switch(h.type){case"horizontal":O=s>0?w/s:0,h.direction<0&&(O=1-O);break;case"vertical":O=z>0?m/z:0,h.direction<0&&(O=1-O);break;case"diagonal":O=s+z>0?(m+w)/(z+s):0,h.direction<0&&(O=1-O);break;case"radial":{const p=C-h.originRow,b=x-h.originCol,U=Math.sqrt(p*p+b*b),N=Math.sqrt(z*z+s*s)||1;O=Math.min(1,U/N);break}case"snake":{const p=s+1,b=m%2===0?m*p+w:m*p+(s-w),U=(z+1)*p-1;O=U>0?b/U:0,h.direction<0&&(O=1-O);break}}return O*h.duration}function K0(){const h=["horizontal","vertical","diagonal","radial","snake"],x=h[Math.floor(Math.random()*h.length)],C=3+Math.floor(Math.random()*4),s=2+Math.floor(Math.random()*4),z=Math.floor(Math.random()*Math.max(1,Qe-C)),w=Math.floor(Math.random()*Math.max(1,V0-s)),m=Math.min(Qe-1,z+C),O=Math.min(V0-1,w+s);return{type:x,startTime:Date.now(),duration:350+Math.random()*400,direction:Math.random()>.5?1:-1,originCol:z+Math.floor((m-z)/2),originRow:w+Math.floor((O-w)/2),minCol:z,maxCol:m,minRow:w,maxRow:O}}const Vl="#C8A84E",Nm="rgba(200,168,78,0.3)",Um="#555",Hm="#000000",_s={scatter:0,cluster:.3,ring:.6,campfire:.85};function jm({formation:h="scatter",interactive:x=!0,ambientWaves:C=!0,waveSignal:s=0,center:z,size:w,formationScale:m=1,style:O}){const p=z?.x??.5,b=z?.y??.5,U=V.useRef(null),N=V.useRef([]),L=V.useRef([]),P=V.useRef({x:0,y:0,active:!1}),st=V.useRef(_s[h]),gt=V.useRef(_s[h]),ft=V.useRef(0),jt=V.useRef({wave:null,triggered:new Set}),oe=V.useRef({x:p,y:b,size:w,formationScale:m}),tt=V.useRef(null);V.useEffect(()=>{oe.current={x:p,y:b,size:w,formationScale:m},tt.current?.()},[p,b,w,m]),V.useEffect(()=>{gt.current=_s[h]},[h]);const ue=V.useRef(s);return V.useEffect(()=>{s!==ue.current&&(ue.current=s,jt.current={wave:K0(),triggered:new Set})},[s]),V.useEffect(()=>{if(!C)return;let zt;const yt=()=>{jt.current.wave||(jt.current={wave:K0(),triggered:new Set}),zt=window.setTimeout(yt,5e3+Math.random()*5e3)};return zt=window.setTimeout(yt,3e3+Math.random()*4e3),()=>clearTimeout(zt)},[C]),V.useEffect(()=>{const zt=[];for(let yt=0;yt<ws;yt++){const J=200+yt%Qe*50+(Math.random()-.5)*10,H=150+Math.floor(yt/Qe)*50+(Math.random()-.5)*10;zt.push(new _m(J,H,yt,ws))}N.current=zt},[]),V.useEffect(()=>{if(!x)return;const zt=(At,kt,Gt)=>{const mt=P.current;P.current={x:At,y:kt,active:!0};const Ct=At-mt.x,wt=kt-mt.y,Nt=Math.sqrt(Ct*Ct+wt*wt);if(!(Gt&&Nt>2&&Math.abs(wt)/(Math.abs(Ct)+Math.abs(wt))>.7)&&Nt>3){const S=Math.min(3,Math.floor(Nt/8));for(let X=0;X<S;X++)L.current.push({x:At+(Math.random()-.5)*6,y:kt+(Math.random()-.5)*6,vx:(Math.random()-.5)*3-Ct*.08,vy:(Math.random()-.5)*3-wt*.08-Math.random()*1.5,life:1,size:1.5+Math.random()*2,char:Q0[Math.floor(Math.random()*Q0.length)]});const _=80;L.current.length>_&&L.current.splice(0,L.current.length-_)}},yt=At=>zt(At.clientX,At.clientY,!1),J=At=>{const kt=At.touches[0];kt&&zt(kt.clientX,kt.clientY,!0)},H=()=>{P.current={...P.current,active:!1}};return window.addEventListener("mousemove",yt),window.addEventListener("touchmove",J,{passive:!0}),window.addEventListener("mouseout",H),window.addEventListener("touchend",H),()=>{window.removeEventListener("mousemove",yt),window.removeEventListener("touchmove",J),window.removeEventListener("mouseout",H),window.removeEventListener("touchend",H)}},[x]),V.useEffect(()=>{const zt=U.current;if(!zt)return;const yt=zt.getContext("2d");if(!yt)return;const J=zt,H=yt,At=()=>{const Gt=window.devicePixelRatio||1,mt=window.innerWidth,Ct=window.innerHeight;J.width=mt*Gt,J.height=Ct*Gt,H.setTransform(Gt,0,0,Gt,0,0);const wt=N.current,Nt=mt<640,S=mt<480,{x:_,y:X,size:ot}=oe.current,ct=(ot??(S?.45:Nt?.48:.33))*Math.min(mt,Ct),o=Ct*X-ct/2+(Nt?Ct*.06:0),R=mt*_-ct/2,j=Math.ceil(wt.length/Qe),Y=ct/(Qe-1),K=ct/(j-1);wt.forEach((k,lt)=>{k.homeX=R+lt%Qe*Y,k.homeY=o+Math.floor(lt/Qe)*K})};At(),tt.current=At,window.addEventListener("resize",At);function kt(){const Gt=window.devicePixelRatio||1,mt=J.width/Gt,Ct=J.height/Gt,wt=gt.current,Nt=wt-st.current;Math.abs(Nt)<.001?st.current=wt:st.current+=Nt*.1;const S=st.current,_=N.current,X=P.current.x,ot=P.current.y,ct=P.current.active;H.fillStyle=Hm,H.fillRect(0,0,mt,Ct);const o=jt.current;if(o.wave){const W=Date.now()-o.wave.startTime;_.forEach((Yt,Qt)=>{if(o.triggered.has(Qt))return;const le=Qt%Qe,mn=Math.floor(Qt/Qe),re=wm(o.wave,le,mn);re>=0&&W>=re&&(Yt.triggerScramble(400+Math.random()*300),o.triggered.add(Qt))}),W>o.wave.duration+1200&&(o.wave=null,o.triggered.clear())}const R=L.current,j=mt<640?11:8;H.font=`${j}px 'JetBrains Mono', monospace`,H.textAlign="center",H.textBaseline="middle";for(let G=R.length-1;G>=0;G--){const W=R[G];if(W.x+=W.vx,W.y+=W.vy,W.vy+=.04,W.life-=.018,W.life<=0){R.splice(G,1);continue}const Yt=W.life*.7;H.fillStyle=W.life>.5?`rgba(200,168,78,${Yt})`:`rgba(255,255,255,${Yt*.6})`,H.fillText(W.char,W.x,W.y)}const{x:Y,y:K,formationScale:k}=oe.current,lt=mt*Y,Vt=Ct*K;_.forEach(G=>G.update(S,mt,Ct,X,ot,ct,lt,Vt,k));const Rt=S<.5?80:80-S*25,Ge=Date.now()*.001;for(let G=0;G<_.length;G++)for(let W=G+1;W<_.length;W++){const Yt=_[G].x-_[W].x,Qt=_[G].y-_[W].y,le=Math.sqrt(Yt*Yt+Qt*Qt);if(le<Rt){if(!(_[G].heat>.05&&_[W].heat>.05))continue;const re=(1-le/Rt)*.45,Se=Math.min(_[G].heat,_[W].heat),Ye=(G*7+W*13)*.1,fi=Math.sin(Ge*.8+Ye)*.3+.7,ie=Math.max(0,Math.sin(Ge*1.5+Ye*.7)-.85)*6.67;H.lineWidth=.6+Se*.8+ie*.4;const oi=(_[G].x+_[W].x)*.5,La=(_[G].y+_[W].y)*.5,qa=-(_[W].y-_[G].y)/le,ul=(_[W].x-_[G].x)/le,Xa=Math.sin(Ge*.6+Ye*1.3)*6+Math.sin(Ge*1.1+Ye*.5)*3,Qa=oi+qa*Xa,ri=La+ul*Xa,Bn=(Ge*.5+Ye*.3)%1,Be=re*fi+Se*.3,ce=Math.min(1,Be*2.5+Se*.5),se=H.createLinearGradient(_[G].x,_[G].y,_[W].x,_[W].y),Kt=.12;se.addColorStop(0,`rgba(200,168,78,${Be})`),Bn-Kt>0&&se.addColorStop(Bn-Kt,`rgba(200,168,78,${Be})`),se.addColorStop(Math.min(1,Math.max(0,Bn)),`rgba(200,168,78,${ce})`),Bn+Kt<1&&se.addColorStop(Bn+Kt,`rgba(200,168,78,${Be})`),se.addColorStop(1,`rgba(200,168,78,${Be})`),H.strokeStyle=se,H.beginPath(),H.moveTo(_[G].x,_[G].y),H.quadraticCurveTo(Qa,ri,_[W].x,_[W].y),H.stroke()}}const Wt=Math.min(1,S*3),dn=Math.min(mt,Ct)/800,al=dn<.7?dn+(.7-dn)*.6:Math.min(1,dn);if(_.forEach((G,W)=>{const Yt=S>.5&&(W%4===0||S>.75),Qt=G.heat>.05,le=G.size*al,mn=G.radius*al;if(Wt<1){H.lineWidth=(2.4+G.heat*.8)*al;const Se=1+G.heat*.4;if(Qt?(H.strokeStyle=`rgba(200,168,78,${(.7+G.heat*.3)*(1-Wt)})`,H.fillStyle=`rgba(200,168,78,${(.7+G.heat*.3)*(1-Wt)})`):Yt?(H.strokeStyle=`rgba(200,168,78,${.9*(1-Wt)})`,H.fillStyle=`rgba(200,168,78,${.9*(1-Wt)})`):(H.strokeStyle=`rgba(255,255,255,${(.7+S*.3)*(1-Wt)})`,H.fillStyle=`rgba(255,255,255,${(.7+S*.3)*(1-Wt)})`),G.glyph){const Ye=le*1.8*Se;H.save(),H.translate(G.x,G.y),H.font=`${Ye}px "JetBrains Mono", monospace`,H.textAlign="center",H.textBaseline="middle",H.fillText(G.glyph,0,0),H.restore()}else if(G.homeGlyph){const Ye=le*2.4*Se;H.save(),H.translate(G.x,G.y),H.fillStyle=Qt?`rgba(200,168,78,${(.7+G.heat*.3)*(1-Wt)})`:`rgba(255,255,255,${(.7+S*.3)*(1-Wt)})`,H.font=`${Ye}px "JetBrains Mono", monospace`,H.textAlign="center",H.textBaseline="middle",H.fillText(G.homeGlyph,0,0),H.restore()}else Om(H,G.type,G.x,G.y,le*(1-Wt*.5)*Se,G.rotation)}const re=Math.min(1,Wt*(.5+S*.5));if(re>.01)if(G.glyph&&Wt>=1){const Se=S<.5?le*1.4*(1+G.heat*.4):S<.75?le*1*(1+G.heat*.4):le*.7*(1+G.heat*.4);H.fillStyle=Yt||Qt?`rgba(200,168,78,${Math.min(1,re*1.3+G.heat*.3)})`:`rgba(255,255,255,${Math.min(1,re*1.2)})`,H.save(),H.font=`${Se}px "JetBrains Mono", monospace`,H.textAlign="center",H.textBaseline="middle",H.fillText(G.glyph,G.x,G.y),H.restore()}else H.beginPath(),H.arc(G.x,G.y,mn*(S>.7?1.3:1)*(1+G.heat*.5),0,Math.PI*2),H.fillStyle=Yt||Qt?`rgba(200,168,78,${re+G.heat*.3})`:`rgba(255,255,255,${re*.8})`,H.fill()}),S>.3&&S<.85){const G=S<.5?(S-.3)*5:S>.75?(.85-S)*10:1,W=lt,Yt=Vt,Qt=20-S*10;H.strokeStyle=`rgba(200,168,78,${G*.15})`,H.lineWidth=.5,H.beginPath(),H.moveTo(W-Qt,Yt),H.lineTo(W+Qt,Yt),H.moveTo(W,Yt-Qt),H.lineTo(W,Yt+Qt),H.stroke()}if(S<.6){const G=Date.now()*.1%Ct;H.fillStyle=`rgba(200,168,78,${.02*(1-S)})`,H.fillRect(0,G,mt,1)}ft.current=requestAnimationFrame(kt)}return kt(),()=>{window.removeEventListener("resize",At),ft.current&&cancelAnimationFrame(ft.current)}},[]),T.jsx("canvas",{ref:U,style:{position:"fixed",inset:0,width:"100%",height:"100%",zIndex:0,pointerEvents:"none",...O}})}function W0(h,x={}){const{delay:C=0,framesPerChar:s=2,tickMs:z=20}=x,[w,m]=V.useState("");return V.useEffect(()=>{let O,p;const b=()=>{let U=0;const N=si[Math.floor(Math.random()*si.length)],L=h.length*s;p=window.setInterval(()=>{U++;const P=Math.floor(U/s);m(h.split("").map((st,gt)=>st===" "?" ":gt<P?h[gt]:N[Math.floor(Math.random()*N.length)]).join("")),U>=L&&(clearInterval(p),m(h))},z)};return C>0?O=window.setTimeout(b,C):b(),()=>{clearTimeout(O),clearInterval(p)}},[h,C,s,z]),w}function F0(h,x,C){let s=0;const z=si[Math.floor(Math.random()*si.length)],w=2+Math.floor(Math.random()*2),m=h.length*w,O=20+Math.floor(Math.random()*10),p=window.setInterval(()=>{s++;const b=Math.floor(s/w);x(h.split("").map((U,N)=>U==="_"||U===" "?U:N<b?h[N]:Math.random()<.5?z[Math.floor(Math.random()*z.length)]:h[N]).join("")),s>=m&&(clearInterval(p),x(h),C())},O);return p}function Gm({text:h,delay:x=0,tickMs:C,framesPerChar:s}){const z=W0(h,{delay:x,tickMs:C,framesPerChar:s});return T.jsx(T.Fragment,{children:z})}function J0({text:h,delay:x=0,tickMs:C,framesPerChar:s,scrambleIntervalMin:z=3e3,scrambleIntervalMax:w=7e3}){const m=W0(h,{delay:x,tickMs:C,framesPerChar:s}),O=m===h,[p,b]=V.useState("");return V.useEffect(()=>{if(!O)return;let U,N;const L=()=>{N=F0(h,b,()=>{const st=w-z;U=window.setTimeout(L,z+Math.random()*st)})},P=w-z;return U=window.setTimeout(L,2e3+Math.random()*P),()=>{clearTimeout(U),clearInterval(N)}},[O,h,z,w]),O?T.jsx(T.Fragment,{children:p||h}):T.jsx(T.Fragment,{children:m})}const ci="▓░▒█!<>{}[]01#$@&*";function Ym({text:h,delay:x=0}){const[C,s]=V.useState(""),[z,w]=V.useState(!1);return V.useEffect(()=>{let m,O;const p=()=>{let b=0;O=window.setInterval(()=>{if(b++,b<6)s(h.split("").map(U=>U===" "?" ":ci[Math.floor(Math.random()*ci.length)]).join(""));else if(b<12){const U=(b-6)/6;s(h.split("").map((N,L)=>N===" "?" ":Math.random()<U?h[L]:ci[Math.floor(Math.random()*ci.length)]).join(""))}else clearInterval(O),s(h),w(!0)},30)};return x>0?m=window.setTimeout(p,x):p(),()=>{clearTimeout(m),clearInterval(O)}},[h,x]),z?T.jsx(T.Fragment,{children:h}):T.jsx(T.Fragment,{children:C})}function Bm({text:h,delay:x=0}){const[C,s]=V.useState(-1),[z,w]=V.useState(x===0);return V.useEffect(()=>{if(x<=0)return;const m=window.setTimeout(()=>w(!0),x);return()=>clearTimeout(m)},[x]),V.useEffect(()=>{if(!z)return;let m=-1;const O=window.setInterval(()=>{m++,s(m),m>=h.length&&clearInterval(O)},35);return()=>clearInterval(O)},[z,h]),z?C>=h.length?T.jsx(T.Fragment,{children:h}):T.jsxs(T.Fragment,{children:[T.jsx("span",{children:h.slice(0,Math.max(0,C))}),T.jsx("span",{style:{color:Vl},children:"►"}),T.jsx("span",{style:{color:"#222"},children:"·".repeat(Math.max(0,h.length-C-1))})]}):null}function Lm({text:h,delay:x=0}){const[C,s]=V.useState(0),[z,w]=V.useState(!1),m=12;return V.useEffect(()=>{let O,p;const b=()=>{let U=0;p=window.setInterval(()=>{U++,s(U),U>=m&&(clearInterval(p),window.setTimeout(()=>w(!0),250))},65)};return x>0?O=window.setTimeout(b,x):b(),()=>{clearTimeout(O),clearInterval(p)}},[x,m]),z?T.jsx(T.Fragment,{children:h}):T.jsxs(T.Fragment,{children:[T.jsx("span",{style:{color:Vl},children:"▓".repeat(C)}),T.jsx("span",{style:{color:"#222"},children:"░".repeat(Math.max(0,m-C))})]})}function I0({text:h,intervalMin:x=3e3,intervalMax:C=7e3,initialDelay:s=3e3}){const[z,w]=V.useState(h);return V.useEffect(()=>{let m,O;const p=()=>{O=F0(h,w,()=>{const b=C-x;m=window.setTimeout(p,x+Math.random()*b)})};return m=window.setTimeout(p,s),()=>{clearTimeout(m),clearInterval(O)}},[h,x,C,s]),T.jsx(T.Fragment,{children:z})}function qm({text:h,delay:x=0}){const[C,s]=V.useState(x===0);return V.useEffect(()=>{if(x<=0)return;const z=window.setTimeout(()=>s(!0),x);return()=>clearTimeout(z)},[x]),C?T.jsx("span",{style:{display:"inline-block",animation:"slideInLeft 0.4s ease both"},children:h}):null}function P0({color:h="#fff"}){return T.jsx("span",{style:{display:"inline-block",width:7,height:"1.1em",background:h,marginLeft:1,verticalAlign:"text-bottom",animation:"blink 0.8s step-end infinite"}})}function Xm({text:h,delay:x=0}){const[C,s]=V.useState(0),[z,w]=V.useState(x===0);return V.useEffect(()=>{if(x<=0)return;const m=window.setTimeout(()=>w(!0),x);return()=>clearTimeout(m)},[x]),V.useEffect(()=>{if(!z)return;let m=0;const O=window.setInterval(()=>{m++,s(m),m>=h.length&&clearInterval(O)},55);return()=>clearInterval(O)},[z,h]),z?T.jsxs(T.Fragment,{children:[h.slice(0,C),C<h.length&&T.jsx(P0,{color:Vl})]}):null}function Zl({position:h,color:x=Vl}){const C={position:"absolute",width:10,height:10},s={"top-left":{top:-1,left:-1,borderTop:`2px solid ${x}`,borderLeft:`2px solid ${x}`},"top-right":{top:-1,right:-1,borderTop:`2px solid ${x}`,borderRight:`2px solid ${x}`},"bottom-left":{bottom:-1,left:-1,borderBottom:`2px solid ${x}`,borderLeft:`2px solid ${x}`},"bottom-right":{bottom:-1,right:-1,borderBottom:`2px solid ${x}`,borderRight:`2px solid ${x}`}};return T.jsx("div",{style:{...C,...s[h]}})}function Qm({lineNum:h,children:x,marginTop:C}){return T.jsxs("div",{className:"tl-row",style:{display:"flex",gap:12,marginTop:C??0},children:[T.jsx("span",{style:{color:"#333",minWidth:18,textAlign:"right",userSelect:"none"},children:h}),x]})}function Zm(h){return window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)}function Vm(){return window.innerWidth}function Km(){return 1024}function th(){return V.useSyncExternalStore(Zm,Vm,Km)}function $0({children:h,onReplay:x,showReplay:C,goldBorder:s,headerLabel:z,shellLabel:w="~ zsh",style:m}){const O=th()<520,p=s?Nm:"#333",b=s?"rgba(200,168,78,0.15)":"#2a2a2a";return T.jsxs("div",{style:{width:"min(540px, 100%)",margin:"0 auto",...m},children:[T.jsxs("div",{style:{background:"#161616",borderRadius:"8px 8px 0 0",padding:"10px 14px",height:34,overflow:"hidden",display:"flex",alignItems:"center",gap:7,borderTop:`1px solid ${p}`,borderLeft:`1px solid ${p}`,borderRight:`1px solid ${p}`,borderBottom:`1px solid ${b}`,pointerEvents:"auto",position:"relative",zIndex:10,transition:"border-color 0.4s ease"},children:[T.jsx("div",{style:{width:10,height:10,borderRadius:"50%",background:"#ff5f57"}}),T.jsx("div",{style:{width:10,height:10,borderRadius:"50%",background:"#febc2e"}}),T.jsx("div",{style:{width:10,height:10,borderRadius:"50%",background:"#28c840"}}),C&&T.jsx("span",{onClick:U=>{U.stopPropagation(),x?.()},style:{fontFamily:"var(--font-mono), 'JetBrains Mono', monospace",fontSize:10,color:"rgba(255,255,255,0.7)",marginLeft:8,letterSpacing:1,cursor:"pointer",transition:"color 0.2s"},onMouseEnter:U=>{U.target.style.color="#fff"},onMouseLeave:U=>{U.target.style.color="rgba(255,255,255,0.7)"},onTouchStart:U=>{U.target.style.color="#fff"},onTouchEnd:U=>{U.target.style.color="rgba(255,255,255,0.7)"},children:z??(O?"tap to replay":"click to replay")}),T.jsx("span",{style:{fontFamily:"var(--font-mono), 'JetBrains Mono', monospace",fontSize:10,color:"#555",marginLeft:"auto",letterSpacing:1},children:T.jsx(I0,{text:w,intervalMin:8e3,intervalMax:15e3,initialDelay:6e3},w)})]}),T.jsx("div",{style:{background:`rgba(10,10,10,0.92) url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,borderRadius:"0 0 8px 8px",padding:"clamp(10px, 2vw, 14px) clamp(10px, 2vw, 16px)",fontFamily:"var(--font-mono), 'JetBrains Mono', monospace",fontSize:"clamp(12.5px, 1.5vw, 15px)",lineHeight:1.9,borderLeft:`1px solid ${p}`,borderRight:`1px solid ${p}`,borderBottom:`1px solid ${p}`,minHeight:80,transition:"border-color 0.4s ease",overflowWrap:"break-word"},children:h})]})}function Jm(){const[h,x]=V.useState(1);return V.useEffect(()=>{const C=setInterval(()=>x(s=>s%3+1),500);return()=>clearInterval(C)},[]),T.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[T.jsx("span",{style:{color:Vl},children:">"}),T.jsx("span",{style:{color:Um,fontFamily:"inherit",letterSpacing:2},children:".".repeat(h)})]})}const $m=`"use client";

import { useState, useEffect } from "react";

const GLITCH_CHARS = "▓░▒█!<>{}[]01#$@&*";

export function GlitchReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let timeout: number;
    let interval: number;

    const run = () => {
      let frame = 0;
      interval = window.setInterval(() => {
        frame++;
        if (frame < 6) {
          setDisplay(
            text
              .split("")
              .map((c) =>
                c === " "
                  ? " "
                  : GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
              )
              .join("")
          );
        } else if (frame < 12) {
          const resolveChance = (frame - 6) / 6;
          setDisplay(
            text
              .split("")
              .map((c, i) =>
                c === " "
                  ? " "
                  : Math.random() < resolveChance
                    ? text[i]
                    : GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
              )
              .join("")
          );
        } else {
          clearInterval(interval);
          setDisplay(text);
          setDone(true);
        }
      }, 30);
    };

    if (delay > 0) {
      timeout = window.setTimeout(run, delay);
    } else {
      run();
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay]);

  if (done) return <>{text}</>;
  return <>{display}</>;
}
`,km=`"use client";

import { useScrambleOnce } from "../useScramble";

export function DecodeText({ text, delay = 0, tickMs, framesPerChar }: {
  text: string;
  delay?: number;
  tickMs?: number;
  framesPerChar?: number;
}) {
  const display = useScrambleOnce(text, { delay, tickMs, framesPerChar });
  return <>{display}</>;
}
`,Wm=`"use client";

import { useState, useEffect } from "react";
import { useScrambleOnce, runScrambleCycle } from "../useScramble";

export function DecodeToScramble({
  text,
  delay = 0,
  tickMs,
  framesPerChar,
  scrambleIntervalMin = 3000,
  scrambleIntervalMax = 7000,
}: {
  text: string;
  delay?: number;
  tickMs?: number;
  framesPerChar?: number;
  scrambleIntervalMin?: number;
  scrambleIntervalMax?: number;
}) {
  const decoded = useScrambleOnce(text, { delay, tickMs, framesPerChar });
  const isDecoded = decoded === text;

  const [display, setDisplay] = useState("");

  /* Phase 2: intermittent scramble flicker after decode completes */
  useEffect(() => {
    if (!isDecoded) return;
    let timeout: number;
    let interval: number;

    const runScramble = () => {
      interval = runScrambleCycle(text, setDisplay, () => {
        const range = scrambleIntervalMax - scrambleIntervalMin;
        timeout = window.setTimeout(
          runScramble,
          scrambleIntervalMin + Math.random() * range
        );
      });
    };

    const range = scrambleIntervalMax - scrambleIntervalMin;
    timeout = window.setTimeout(
      runScramble,
      2000 + Math.random() * range
    );

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [isDecoded, text, scrambleIntervalMin, scrambleIntervalMax]);

  if (!isDecoded) return <>{decoded}</>;
  return <>{display || text}</>;
}
`,Fm=`"use client";

import { useState, useEffect } from "react";
import { runScrambleCycle } from "../useScramble";

export function ScrambleText({
  text,
  intervalMin = 3000,
  intervalMax = 7000,
  initialDelay = 3000,
}: {
  text: string;
  intervalMin?: number;
  intervalMax?: number;
  initialDelay?: number;
}) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    let timeout: number;
    let interval: number;

    const runScramble = () => {
      interval = runScrambleCycle(text, setDisplay, () => {
        const range = intervalMax - intervalMin;
        timeout = window.setTimeout(
          runScramble,
          intervalMin + Math.random() * range
        );
      });
    };

    timeout = window.setTimeout(runScramble, initialDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, intervalMin, intervalMax, initialDelay]);

  return <>{display}</>;
}
`,Im=`"use client";

import { useState, useEffect } from "react";
import { GOLD } from "../tokens";
import { Cursor } from "../chrome/Cursor";

export function TypewriterReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(delay === 0);

  useEffect(() => {
    if (delay <= 0) return;
    const t = window.setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let c = 0;
    const interval = window.setInterval(() => {
      c++;
      setCount(c);
      if (c >= text.length) clearInterval(interval);
    }, 55);
    return () => clearInterval(interval);
  }, [started, text]);

  if (!started) return null;
  return (
    <>
      {text.slice(0, count)}
      {count < text.length && <Cursor color={GOLD} />}
    </>
  );
}
`,Pm=`"use client";

import { useState, useEffect } from "react";
import { GOLD } from "../tokens";

export function PacManReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const [pos, setPos] = useState(-1);
  const [started, setStarted] = useState(delay === 0);

  useEffect(() => {
    if (delay <= 0) return;
    const t = window.setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let p = -1;
    const interval = window.setInterval(() => {
      p++;
      setPos(p);
      if (p >= text.length) clearInterval(interval);
    }, 35);
    return () => clearInterval(interval);
  }, [started, text]);

  if (!started) return null;
  if (pos >= text.length) return <>{text}</>;
  return (
    <>
      <span>{text.slice(0, Math.max(0, pos))}</span>
      <span style={{ color: GOLD }}>&#9658;</span>
      <span style={{ color: "#222" }}>
        {"·".repeat(Math.max(0, text.length - pos - 1))}
      </span>
    </>
  );
}
`,ty=`"use client";

import { useState, useEffect } from "react";
import { GOLD } from "../tokens";

export function ProgressReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const [progress, setProgress] = useState(0);
  const [showText, setShowText] = useState(false);
  const barLen = 12;

  useEffect(() => {
    let timeout: number;
    let interval: number;

    const run = () => {
      let p = 0;
      interval = window.setInterval(() => {
        p++;
        setProgress(p);
        if (p >= barLen) {
          clearInterval(interval);
          window.setTimeout(() => setShowText(true), 250);
        }
      }, 65);
    };

    if (delay > 0) {
      timeout = window.setTimeout(run, delay);
    } else {
      run();
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [delay, barLen]);

  if (showText) return <>{text}</>;
  return (
    <>
      <span style={{ color: GOLD }}>
        {"▓".repeat(progress)}
      </span>
      <span style={{ color: "#222" }}>
        {"░".repeat(Math.max(0, barLen - progress))}
      </span>
    </>
  );
}
`,ey=`"use client";

import { useState, useEffect } from "react";

export function SlideReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const [visible, setVisible] = useState(delay === 0);

  useEffect(() => {
    if (delay <= 0) return;
    const t = window.setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  if (!visible) return null;
  return (
    <span
      style={{
        display: "inline-block",
        animation: "slideInLeft 0.4s ease both",
      }}
    >
      {text}
    </span>
  );
}
`,ny=`"use client";

import { useState, useEffect } from "react";
import { SCRAMBLE_SETS } from "./glyphs";

/**
 * Shared scramble animation logic.
 * Progressively resolves characters from random glyphs to final text.
 *
 * @param text - Target text to resolve to
 * @param options.delay - Ms before animation starts
 * @param options.framesPerChar - How many frames per character to resolve (default: 2)
 * @param options.tickMs - Ms per animation frame (default: 20)
 */
export function useScrambleOnce(
  text: string,
  options: {
    delay?: number;
    framesPerChar?: number;
    tickMs?: number;
  } = {}
): string {
  const { delay = 0, framesPerChar = 2, tickMs = 20 } = options;
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let timeout: number;
    let interval: number;

    const run = () => {
      let frame = 0;
      const chars =
        SCRAMBLE_SETS[Math.floor(Math.random() * SCRAMBLE_SETS.length)];
      const totalFrames = text.length * framesPerChar;

      interval = window.setInterval(() => {
        frame++;
        const resolved = Math.floor(frame / framesPerChar);

        setDisplay(
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (i < resolved) return text[i];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (frame >= totalFrames) {
          clearInterval(interval);
          setDisplay(text);
        }
      }, tickMs);
    };

    if (delay > 0) {
      timeout = window.setTimeout(run, delay);
    } else {
      run();
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay, framesPerChar, tickMs]);

  return display;
}

/**
 * Runs a scramble animation cycle once, then calls onComplete.
 * Used internally by periodic scramble effects.
 */
export function runScrambleCycle(
  text: string,
  setDisplay: (val: string) => void,
  onComplete: () => void
): number {
  let frame = 0;
  const chars =
    SCRAMBLE_SETS[Math.floor(Math.random() * SCRAMBLE_SETS.length)];
  const framesPerChar = 2 + Math.floor(Math.random() * 2);
  const totalFrames = text.length * framesPerChar;
  const tickMs = 20 + Math.floor(Math.random() * 10);

  const interval = window.setInterval(() => {
    frame++;
    const resolved = Math.floor(frame / framesPerChar);

    setDisplay(
      text
        .split("")
        .map((char, i) => {
          if (char === "_" || char === " ") return char;
          if (i < resolved) return text[i];
          if (Math.random() < 0.5)
            return chars[Math.floor(Math.random() * chars.length)];
          return text[i];
        })
        .join("")
    );

    if (frame >= totalFrames) {
      clearInterval(interval);
      setDisplay(text);
      onComplete();
    }
  }, tickMs);

  return interval;
}
`,ly=`"use client";

import { useEffect, useRef } from "react";
import { AnimNode } from "./AnimNode";
import { drawShape } from "./drawing";
import { getWaveDelay, spawnWave } from "./waves";
import { NODE_COUNT, GRID_COLS, PARTICLE_CHARS } from "../glyphs";
import { BG } from "../tokens";
import type { Particle, GlyphWave } from "../types";

export type Formation = "scatter" | "cluster" | "ring" | "campfire";

/* Scroll values each formation eases toward — same phase windows AnimNode uses */
const FORMATION_SCROLL: Record<Formation, number> = {
  scatter: 0,
  cluster: 0.3,
  ring: 0.6,
  campfire: 0.85,
};

/**
 * The living glyph grid — 80 code-glyph nodes that drift, cluster, ring up,
 * or form a campfire, with mouse repulsion, heat, cursor-trail particles and
 * glyph-scramble waves. Renders as a full-viewport fixed backdrop.
 *
 * @param formation - Which shape the grid eases toward
 * @param interactive - Mouse/touch repulsion + particles (default true)
 * @param ambientWaves - Periodic scramble waves across the grid (default true)
 * @param waveSignal - Increment this number to fire a wave on demand
 * @param center - Where the grid lives, as viewport fractions (default centre)
 * @param size - Home-grid size as a fraction of the short viewport edge
 * @param formationScale - Multiplies the gather formations (cluster/ring/campfire)
 */
export function GlyphCanvas({
  formation = "scatter",
  interactive = true,
  ambientWaves = true,
  waveSignal = 0,
  center,
  size,
  formationScale = 1,
  style,
}: {
  formation?: Formation;
  interactive?: boolean;
  ambientWaves?: boolean;
  waveSignal?: number;
  center?: { x?: number; y?: number };
  size?: number;
  formationScale?: number;
  style?: React.CSSProperties;
}) {
  const centerX = center?.x ?? 0.5;
  const centerY = center?.y ?? 0.5;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<AnimNode[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const scrollRef = useRef(FORMATION_SCROLL[formation]);
  const targetScrollRef = useRef(FORMATION_SCROLL[formation]);
  const rafRef = useRef(0);
  const waveRef = useRef<{ wave: GlyphWave | null; triggered: Set<number> }>({
    wave: null,
    triggered: new Set(),
  });
  const layoutRef = useRef({ x: centerX, y: centerY, size, formationScale });
  const resizeFnRef = useRef<(() => void) | null>(null);

  /* ─── Re-home the grid when its centre or size moves ─── */
  useEffect(() => {
    layoutRef.current = { x: centerX, y: centerY, size, formationScale };
    resizeFnRef.current?.();
  }, [centerX, centerY, size, formationScale]);

  /* ─── Formation → scroll target ─── */
  useEffect(() => {
    targetScrollRef.current = FORMATION_SCROLL[formation];
  }, [formation]);

  /* ─── On-demand waves ─── */
  const lastSignal = useRef(waveSignal);
  useEffect(() => {
    if (waveSignal === lastSignal.current) return;
    lastSignal.current = waveSignal;
    waveRef.current = { wave: spawnWave(), triggered: new Set() };
  }, [waveSignal]);

  /* ─── Ambient waves ─── */
  useEffect(() => {
    if (!ambientWaves) return;
    let t: number;
    const loop = () => {
      if (!waveRef.current.wave) {
        waveRef.current = { wave: spawnWave(), triggered: new Set() };
      }
      t = window.setTimeout(loop, 5000 + Math.random() * 5000);
    };
    t = window.setTimeout(loop, 3000 + Math.random() * 4000);
    return () => clearTimeout(t);
  }, [ambientWaves]);

  /* ─── Initialise node grid ─── */
  useEffect(() => {
    const nodes: AnimNode[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      const x = 200 + (i % GRID_COLS) * 50 + (Math.random() - 0.5) * 10;
      const y =
        150 + Math.floor(i / GRID_COLS) * 50 + (Math.random() - 0.5) * 10;
      nodes.push(new AnimNode(x, y, i, NODE_COUNT));
    }
    nodesRef.current = nodes;
  }, []);

  /* ─── Mouse / touch → repulsion + particles ─── */
  useEffect(() => {
    if (!interactive) return;

    const spawnParticles = (x: number, y: number, isTouch: boolean) => {
      const prev = mouseRef.current;
      mouseRef.current = { x, y, active: true };

      const dx = x - prev.x;
      const dy = y - prev.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      if (isTouch && speed > 2) {
        const verticalRatio = Math.abs(dy) / (Math.abs(dx) + Math.abs(dy));
        if (verticalRatio > 0.7) return;
      }

      if (speed > 3) {
        const count = Math.min(3, Math.floor(speed / 8));
        for (let i = 0; i < count; i++) {
          particlesRef.current.push({
            x: x + (Math.random() - 0.5) * 6,
            y: y + (Math.random() - 0.5) * 6,
            vx: (Math.random() - 0.5) * 3 - dx * 0.08,
            vy: (Math.random() - 0.5) * 3 - dy * 0.08 - Math.random() * 1.5,
            life: 1,
            size: 1.5 + Math.random() * 2,
            char: PARTICLE_CHARS[Math.floor(Math.random() * PARTICLE_CHARS.length)],
          });
        }

        const maxParticles = 80;
        if (particlesRef.current.length > maxParticles) {
          particlesRef.current.splice(0, particlesRef.current.length - maxParticles);
        }
      }
    };

    const onMouseMove = (e: MouseEvent) => spawnParticles(e.clientX, e.clientY, false);
    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) spawnParticles(touch.clientX, touch.clientY, true);
    };
    const onEnd = () => {
      mouseRef.current = { ...mouseRef.current, active: false };
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("mouseout", onEnd);
    window.addEventListener("touchend", onEnd);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("mouseout", onEnd);
      window.removeEventListener("touchend", onEnd);
    };
  }, [interactive]);

  /* ─── Canvas render loop ─── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const cvs = canvas as HTMLCanvasElement;
    const c = ctx as CanvasRenderingContext2D;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const logicalW = window.innerWidth;
      const logicalH = window.innerHeight;
      cvs.width = logicalW * dpr;
      cvs.height = logicalH * dpr;
      c.setTransform(dpr, 0, 0, dpr, 0, 0);

      const nodes = nodesRef.current;
      const isMobile = logicalW < 640;
      const isNarrow = logicalW < 480;
      const { x: cxf, y: cyf, size: sizeF } = layoutRef.current;
      const gridSize =
        (sizeF ?? (isNarrow ? 0.45 : isMobile ? 0.48 : 0.33)) *
        Math.min(logicalW, logicalH);
      const gridTop =
        logicalH * cyf - gridSize / 2 + (isMobile ? logicalH * 0.06 : 0);
      const gridLeft = logicalW * cxf - gridSize / 2;
      const rows = Math.ceil(nodes.length / GRID_COLS);
      const spacingX = gridSize / (GRID_COLS - 1);
      const spacingY = gridSize / (rows - 1);

      nodes.forEach((n, i) => {
        n.homeX = gridLeft + (i % GRID_COLS) * spacingX;
        n.homeY = gridTop + Math.floor(i / GRID_COLS) * spacingY;
      });
    };

    resize();
    resizeFnRef.current = resize;
    window.addEventListener("resize", resize);

    function draw() {
      const dpr = window.devicePixelRatio || 1;
      const w = cvs.width / dpr;
      const h = cvs.height / dpr;

      /* Ease scroll toward the formation target */
      const target = targetScrollRef.current;
      const diff = target - scrollRef.current;
      if (Math.abs(diff) < 0.001) {
        scrollRef.current = target;
      } else {
        scrollRef.current += diff * 0.1;
      }
      const scroll = scrollRef.current;
      const nodes = nodesRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const ma = mouseRef.current.active;

      c.fillStyle = BG;
      c.fillRect(0, 0, w, h);

      /* Wave → per-node scramble triggers */
      const wv = waveRef.current;
      if (wv.wave) {
        const now = Date.now();
        const elapsed = now - wv.wave.startTime;
        nodes.forEach((n, i) => {
          if (wv.triggered.has(i)) return;
          const col = i % GRID_COLS;
          const row = Math.floor(i / GRID_COLS);
          const delay = getWaveDelay(wv.wave!, col, row);
          if (delay >= 0 && elapsed >= delay) {
            n.triggerScramble(400 + Math.random() * 300);
            wv.triggered.add(i);
          }
        });
        if (elapsed > wv.wave.duration + 1200) {
          wv.wave = null;
          wv.triggered.clear();
        }
      }

      /* Particles */
      const particles = particlesRef.current;
      const particleFontSize = w < 640 ? 11 : 8;
      c.font = \`\${particleFontSize}px 'JetBrains Mono', monospace\`;
      c.textAlign = "center";
      c.textBaseline = "middle";

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.04;
        p.life -= 0.018;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const alpha = p.life * 0.7;
        c.fillStyle =
          p.life > 0.5
            ? \`rgba(200,168,78,\${alpha})\`
            : \`rgba(255,255,255,\${alpha * 0.6})\`;
        c.fillText(p.char, p.x, p.y);
      }

      const { x: fcx, y: fcy, formationScale: fs } = layoutRef.current;
      const gridCx = w * fcx;
      const gridCy = h * fcy;

      nodes.forEach((n) =>
        n.update(scroll, w, h, mx, my, ma, gridCx, gridCy, fs)
      );

      /* Connection lines — light up between mouse-heated nodes */
      const maxDist = scroll < 0.5 ? 80 : 80 - scroll * 25;
      const lineT = Date.now() * 0.001;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const bothHot = nodes[i].heat > 0.05 && nodes[j].heat > 0.05;
            if (!bothHot) continue;

            const baseAlpha = (1 - dist / maxDist) * 0.45;
            const hotAlpha = Math.min(nodes[i].heat, nodes[j].heat);

            const phase = (i * 7 + j * 13) * 0.1;
            const breathe = Math.sin(lineT * 0.8 + phase) * 0.3 + 0.7;
            const pulse =
              Math.max(0, Math.sin(lineT * 1.5 + phase * 0.7) - 0.85) * 6.67;

            c.lineWidth = 0.6 + hotAlpha * 0.8 + pulse * 0.4;

            const midX = (nodes[i].x + nodes[j].x) * 0.5;
            const midY = (nodes[i].y + nodes[j].y) * 0.5;
            const perpX = -(nodes[j].y - nodes[i].y) / dist;
            const perpY = (nodes[j].x - nodes[i].x) / dist;
            const bend =
              Math.sin(lineT * 0.6 + phase * 1.3) * 6 +
              Math.sin(lineT * 1.1 + phase * 0.5) * 3;

            const cpx = midX + perpX * bend;
            const cpy = midY + perpY * bend;

            /* Animated gradient — traveling brightness */
            const travelT = ((lineT * 0.5 + phase * 0.3) % 1);
            const dimA = baseAlpha * breathe + hotAlpha * 0.3;
            const brightA = Math.min(1, dimA * 2.5 + hotAlpha * 0.5);
            const grad = c.createLinearGradient(
              nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y
            );
            const spread = 0.12;
            grad.addColorStop(0, \`rgba(200,168,78,\${dimA})\`);
            if (travelT - spread > 0)
              grad.addColorStop(travelT - spread, \`rgba(200,168,78,\${dimA})\`);
            grad.addColorStop(Math.min(1, Math.max(0, travelT)), \`rgba(200,168,78,\${brightA})\`);
            if (travelT + spread < 1)
              grad.addColorStop(travelT + spread, \`rgba(200,168,78,\${dimA})\`);
            grad.addColorStop(1, \`rgba(200,168,78,\${dimA})\`);
            c.strokeStyle = grad;

            c.beginPath();
            c.moveTo(nodes[i].x, nodes[i].y);
            c.quadraticCurveTo(cpx, cpy, nodes[j].x, nodes[j].y);
            c.stroke();
          }
        }
      }

      /* Shape-to-dot transition */
      const shapeFade = Math.min(1, scroll * 3);
      const rawScale = Math.min(w, h) / 800;
      const nodeScale = rawScale < 0.7 ? rawScale + (0.7 - rawScale) * 0.6 : Math.min(1, rawScale);

      nodes.forEach((n, i) => {
        const isGold = scroll > 0.5 && (i % 4 === 0 || scroll > 0.75);
        const heatGold = n.heat > 0.05;
        const ns = n.size * nodeScale;
        const nr = n.radius * nodeScale;

        if (shapeFade < 1) {
          c.lineWidth = (2.4 + n.heat * 0.8) * nodeScale;
          const sizeBoost = 1 + n.heat * 0.4;

          if (heatGold) {
            c.strokeStyle = \`rgba(200,168,78,\${(0.7 + n.heat * 0.3) * (1 - shapeFade)})\`;
            c.fillStyle = \`rgba(200,168,78,\${(0.7 + n.heat * 0.3) * (1 - shapeFade)})\`;
          } else if (isGold) {
            c.strokeStyle = \`rgba(200,168,78,\${0.9 * (1 - shapeFade)})\`;
            c.fillStyle = \`rgba(200,168,78,\${0.9 * (1 - shapeFade)})\`;
          } else {
            c.strokeStyle = \`rgba(255,255,255,\${(0.7 + scroll * 0.3) * (1 - shapeFade)})\`;
            c.fillStyle = \`rgba(255,255,255,\${(0.7 + scroll * 0.3) * (1 - shapeFade)})\`;
          }

          if (n.glyph) {
            const glyphSize = ns * 1.8 * sizeBoost;
            c.save();
            c.translate(n.x, n.y);
            c.font = \`\${glyphSize}px "JetBrains Mono", monospace\`;
            c.textAlign = "center";
            c.textBaseline = "middle";
            c.fillText(n.glyph, 0, 0);
            c.restore();
          } else if (n.homeGlyph) {
            const glyphSize = ns * 2.4 * sizeBoost;
            c.save();
            c.translate(n.x, n.y);
            c.fillStyle = heatGold
              ? \`rgba(200,168,78,\${(0.7 + n.heat * 0.3) * (1 - shapeFade)})\`
              : \`rgba(255,255,255,\${(0.7 + scroll * 0.3) * (1 - shapeFade)})\`;
            c.font = \`\${glyphSize}px "JetBrains Mono", monospace\`;
            c.textAlign = "center";
            c.textBaseline = "middle";
            c.fillText(n.homeGlyph, 0, 0);
            c.restore();
          } else {
            drawShape(
              c,
              n.type,
              n.x,
              n.y,
              ns * (1 - shapeFade * 0.5) * sizeBoost,
              n.rotation
            );
          }
        }

        const dotAlpha = Math.min(1, shapeFade * (0.5 + scroll * 0.5));
        if (dotAlpha > 0.01) {
          if (n.glyph && shapeFade >= 1) {
            const miniSize = scroll < 0.5
              ? ns * 1.4 * (1 + n.heat * 0.4)
              : scroll < 0.75
                ? ns * 1.0 * (1 + n.heat * 0.4)
                : ns * 0.7 * (1 + n.heat * 0.4);
            c.fillStyle =
              isGold || heatGold
                ? \`rgba(200,168,78,\${Math.min(1, dotAlpha * 1.3 + n.heat * 0.3)})\`
                : \`rgba(255,255,255,\${Math.min(1, dotAlpha * 1.2)})\`;
            c.save();
            c.font = \`\${miniSize}px "JetBrains Mono", monospace\`;
            c.textAlign = "center";
            c.textBaseline = "middle";
            c.fillText(n.glyph, n.x, n.y);
            c.restore();
          } else {
            c.beginPath();
            c.arc(
              n.x,
              n.y,
              nr * (scroll > 0.7 ? 1.3 : 1) * (1 + n.heat * 0.5),
              0,
              Math.PI * 2
            );
            c.fillStyle =
              isGold || heatGold
                ? \`rgba(200,168,78,\${dotAlpha + n.heat * 0.3})\`
                : \`rgba(255,255,255,\${dotAlpha * 0.8})\`;
            c.fill();
          }
        }
      });

      /* Crosshair */
      if (scroll > 0.3 && scroll < 0.85) {
        const crossAlpha =
          scroll < 0.5
            ? (scroll - 0.3) * 5
            : scroll > 0.75
              ? (0.85 - scroll) * 10
              : 1;
        const cx = gridCx;
        const cy = gridCy;
        const crossSize = 20 - scroll * 10;

        c.strokeStyle = \`rgba(200,168,78,\${crossAlpha * 0.15})\`;
        c.lineWidth = 0.5;
        c.beginPath();
        c.moveTo(cx - crossSize, cy);
        c.lineTo(cx + crossSize, cy);
        c.moveTo(cx, cy - crossSize);
        c.lineTo(cx, cy + crossSize);
        c.stroke();
      }

      /* Scan line */
      if (scroll < 0.6) {
        const scanY = (Date.now() * 0.1) % h;
        c.fillStyle = \`rgba(200,168,78,\${0.02 * (1 - scroll)})\`;
        c.fillRect(0, scanY, w, 1);
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}
`,ay=`import { SHAPE_TYPES, HOME_GLYPHS, GRAFFITI_GLYPHS } from "../glyphs";
import type { ShapeType } from "../types";
import { getCampfirePoint } from "./formations";

export class AnimNode {
  homeX: number;
  homeY: number;
  x: number;
  y: number;
  id: number;
  total: number;
  phase: number;
  speed: number;
  radius: number;
  size: number;
  rotation: number;
  rotSpeed: number;
  type: ShapeType;
  heat: number;
  rippleVx: number;
  rippleVy: number;
  spinBoost: number;
  /* Glyph scramble state */
  glyph: string | null;
  homeGlyph: string | null;
  glyphNextAt: number;
  glyphEndAt: number;
  glyphLastSwap: number;
  glyphSwapInterval: number;
  glyphCooldownUntil: number;
  /* Multiplies the gather formations (cluster/ring/campfire) — set per-frame by update() */
  formationScale: number = 1;

  constructor(x: number, y: number, id: number, total: number) {
    this.homeX = x;
    this.homeY = y;
    this.x = x;
    this.y = y;
    this.id = id;
    this.total = total;
    this.phase = Math.random() * Math.PI * 2;
    this.speed = 0.3 + Math.random() * 0.4;
    this.radius = 1.5 + Math.random() * 1.5;
    this.size = 5 + Math.random() * 3;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotSpeed = (Math.random() - 0.5) * 0.001;
    this.type = SHAPE_TYPES[id % SHAPE_TYPES.length];
    this.heat = 0;
    this.rippleVx = 0;
    this.rippleVy = 0;
    this.spinBoost = 0;
    this.glyph = null;
    this.homeGlyph = Math.random() < 0.4
      ? HOME_GLYPHS[Math.floor(Math.random() * HOME_GLYPHS.length)]
      : null;
    this.glyphNextAt = Date.now() + 2000 + Math.random() * 6000;
    this.glyphEndAt = 0;
    this.glyphLastSwap = 0;
    this.glyphSwapInterval = 40;
    this.glyphCooldownUntil = 0;
  }

  update(
    scroll: number,
    w: number,
    h: number,
    mouseX: number,
    mouseY: number,
    mouseActive: boolean,
    cx: number = w / 2,
    cy: number = h / 2,
    formationScale: number = 1
  ) {
    this.formationScale = formationScale;
    const t = Date.now() * 0.001;

    this.rotation +=
      this.rotSpeed + Math.sin(t * this.speed + this.phase) * 0.003;

    if (scroll < 0.25) {
      this.updateScatteredPhase(t, scroll);
    } else if (scroll < 0.5) {
      this.updateClusterPhase(t, scroll, cx, cy, w, h);
    } else if (scroll < 0.75) {
      this.updateRingPhase(t, scroll, cx, cy, w, h);
    } else {
      this.updateCampfirePhase(t, scroll, cx, cy, w, h);
    }

    this.heat *= 0.93;
    this.spinBoost *= 0.95;
    this.rippleVx *= 0.92;
    this.rippleVy *= 0.92;

    if (mouseActive) {
      this.applyMouseForce(mouseX, mouseY, scroll, w);
    }

    this.x += Math.sin(t * 0.01 + this.phase) * this.rippleVx;
    this.y += Math.cos(t * 0.01 + this.phase) * this.rippleVy;
    this.rotation += this.spinBoost * (this.id % 2 === 0 ? 1 : -1);

    this.applyPhantomForce(t, w, h);

    /* Glyph scramble — rapid cycling when triggered by wave */
    const now = Date.now();
    if (this.glyph) {
      if (now - this.glyphLastSwap > this.glyphSwapInterval) {
        this.glyph =
          GRAFFITI_GLYPHS[Math.floor(Math.random() * GRAFFITI_GLYPHS.length)];
        this.glyphLastSwap = now;
        const remaining = this.glyphEndAt - now;
        if (remaining < 150) this.glyphSwapInterval = 80;
        else if (remaining < 300) this.glyphSwapInterval = 55;
      }
      if (now > this.glyphEndAt) {
        this.glyph = null;
        this.glyphSwapInterval = 40;
        this.glyphCooldownUntil = now + 800;
      }
    }
    /* Clear glyphs when fully settled */
    if (scroll >= 0.9 && this.glyph) {
      this.glyph = null;
    }
  }

  triggerScramble(duration: number) {
    if (this.glyph) return;
    if (Date.now() < this.glyphCooldownUntil) return;
    const now = Date.now();
    this.glyph =
      GRAFFITI_GLYPHS[Math.floor(Math.random() * GRAFFITI_GLYPHS.length)];
    this.glyphLastSwap = now;
    this.glyphSwapInterval = 40;
    this.glyphEndAt = now + duration;
  }

  private updateScatteredPhase(t: number, scroll: number) {
    const drift = Math.max(0.2, scroll * 3);
    const wanderX =
      Math.sin(t * this.speed + this.phase) * 4 * drift +
      Math.sin(t * 0.4 + this.id * 0.7) * 2 +
      Math.cos(t * 0.15 + this.phase * 2) * 2.5;
    const wanderY =
      Math.cos(t * this.speed * 0.7 + this.phase) * 3.5 * drift +
      Math.cos(t * 0.35 + this.id * 0.5) * 2 +
      Math.sin(t * 0.12 + this.phase * 1.5) * 2.5;
    /* Ease toward home so a re-homed grid glides instead of snapping */
    this.x += (this.homeX + wanderX - this.x) * 0.08;
    this.y += (this.homeY + wanderY - this.y) * 0.08;
  }

  private updateClusterPhase(
    t: number, scroll: number, cx: number, cy: number, w: number, h: number
  ) {
    const progress = (scroll - 0.25) * 4;
    const angle = (this.id / this.total) * Math.PI * 2 + t * 0.15;
    const rawDim = Math.min(w, h);
    const isMobile = w < 640;
    const dim = rawDim < 500 ? rawDim * 1.6 : rawDim;
    const clusterRadius =
      (isMobile
        ? dim * 0.16 - progress * dim * 0.02
        : dim * 0.11 - progress * dim * 0.02) * this.formationScale;
    const mobileYOffset = isMobile ? h * 0.06 : 0;
    const targetX =
      cx +
      Math.cos(angle) * clusterRadius +
      Math.sin(t * this.speed + this.phase) * 8 * (1 - progress);
    const targetY =
      cy + mobileYOffset +
      Math.sin(angle) * clusterRadius +
      Math.cos(t * this.speed + this.phase) * 8 * (1 - progress);
    this.x += (targetX - this.x) * 0.06;
    this.y += (targetY - this.y) * 0.06;
  }

  private updateRingPhase(
    t: number, scroll: number, cx: number, cy: number, w: number, h: number
  ) {
    const progress = (scroll - 0.5) * 4;
    const angle = (this.id / this.total) * Math.PI * 2 + t * 0.2;
    const rawDim = Math.min(w, h);
    const isMobile = w < 640;
    const dim = rawDim < 500 ? rawDim * 1.6 : rawDim;
    const ringRadius =
      (isMobile
        ? dim * 0.11 - progress * dim * 0.025
        : dim * 0.07 - progress * dim * 0.025) * this.formationScale;
    const mobileYOffset = isMobile ? h * 0.06 : 0;
    const targetX = cx + Math.cos(angle + progress * 0.5) * ringRadius;
    const targetY = cy + mobileYOffset + Math.sin(angle + progress * 0.5) * ringRadius;
    this.x += (targetX - this.x) * 0.08;
    this.y += (targetY - this.y) * 0.08;
  }

  private updateCampfirePhase(
    t: number, scroll: number, cx: number, cy: number, w: number, h: number
  ) {
    const progress = Math.min(1, (scroll - 0.75) * 4);
    const rawDim = Math.min(w, h);
    const isMobile = w < 640;
    const s =
      ((rawDim < 500 ? rawDim * (isMobile ? 2.2 : 1.6) : rawDim) / 600) *
      this.formationScale;
    const campfire = getCampfirePoint(this.id, this.total, cx, cy + h * 0.12, s);
    const breathe =
      Math.sin(t * 2 + this.phase) * (1.5 - progress * 1.2) * s;
    this.x += (campfire.x + breathe - this.x) * (0.04 + progress * 0.06);
    this.y +=
      (campfire.y + breathe * 0.5 - this.y) * (0.04 + progress * 0.06);
  }

  private applyMouseForce(mouseX: number, mouseY: number, scroll: number, viewportWidth: number) {
    const dx = this.x - mouseX;
    const dy = this.y - mouseY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const earlyBoost = 1 + (1 - Math.min(1, scroll * 2)) * 2;

    const radiusScale = viewportWidth < 640 ? Math.max(0.7, viewportWidth / 1024) : Math.min(1, viewportWidth / 1024);
    const baseRadius = (35 + (1 - Math.min(1, scroll * 2)) * 20) * radiusScale;
    const interactionRadius = Math.max(30, baseRadius);

    if (dist < interactionRadius && dist > 0) {
      const force = (interactionRadius - dist) / interactionRadius;
      const pushX = (dx / dist) * force * 3 * earlyBoost;
      const pushY = (dy / dist) * force * 3 * earlyBoost;
      this.x += pushX;
      this.y += pushY;
      this.rippleVx += pushX * 0.4;
      this.rippleVy += pushY * 0.4;
      this.heat = Math.min(1, this.heat + force * 0.3);
      this.spinBoost = Math.min(0.025, this.spinBoost + force * 0.006);
      if (force > 0.15 && !this.glyph && scroll < 0.9) {
        this.triggerScramble(600 + force * 400);
      }
    }
  }

  private applyPhantomForce(t: number, w: number, h: number) {
    const phantomX =
      w * 0.5 + Math.sin(t * 0.3) * w * 0.3 + Math.cos(t * 0.17) * w * 0.15;
    const phantomY =
      h * 0.5 + Math.cos(t * 0.25) * h * 0.25 + Math.sin(t * 0.13) * h * 0.1;
    const dx = this.x - phantomX;
    const dy = this.y - phantomY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const phantomScale = Math.min(1, w / 1024);
    const phantomRadius = Math.max(25, 60 * phantomScale);

    if (dist < phantomRadius && dist > 0) {
      const force = (phantomRadius - dist) / phantomRadius;
      this.x += (dx / dist) * force * 1.2;
      this.y += (dy / dist) * force * 1.2;
    }
  }
}
`,uy=`import type { ShapeType } from "../types";

export function drawShape(
  ctx: CanvasRenderingContext2D,
  type: ShapeType,
  x: number,
  y: number,
  size: number,
  rotation: number
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.beginPath();

  const s = size;
  switch (type) {
    case "curly":
      ctx.moveTo(-s * 0.3, -s);
      ctx.quadraticCurveTo(-s * 0.7, -s * 0.5, -s * 0.3, 0);
      ctx.quadraticCurveTo(-s * 0.7, s * 0.5, -s * 0.3, s);
      ctx.moveTo(s * 0.3, -s);
      ctx.quadraticCurveTo(s * 0.7, -s * 0.5, s * 0.3, 0);
      ctx.quadraticCurveTo(s * 0.7, s * 0.5, s * 0.3, s);
      break;
    case "angle":
      ctx.moveTo(-s * 0.1, -s);
      ctx.lineTo(-s * 0.7, 0);
      ctx.lineTo(-s * 0.1, s);
      ctx.moveTo(s * 0.1, -s);
      ctx.lineTo(s * 0.7, 0);
      ctx.lineTo(s * 0.1, s);
      break;
    case "hash":
      ctx.moveTo(-s * 0.5, -s * 0.35);
      ctx.lineTo(s * 0.5, -s * 0.35);
      ctx.moveTo(-s * 0.5, s * 0.35);
      ctx.lineTo(s * 0.5, s * 0.35);
      ctx.moveTo(-s * 0.2, -s * 0.7);
      ctx.lineTo(-s * 0.2, s * 0.7);
      ctx.moveTo(s * 0.2, -s * 0.7);
      ctx.lineTo(s * 0.2, s * 0.7);
      break;
    case "lambda":
      ctx.moveTo(-s * 0.4, -s);
      ctx.lineTo(0, 0);
      ctx.lineTo(s * 0.4, s);
      ctx.moveTo(0, 0);
      ctx.lineTo(-s * 0.4, s);
      break;
    case "node":
      ctx.arc(0, 0, s * 0.35, 0, Math.PI * 2);
      ctx.moveTo(0, -s * 0.35);
      ctx.lineTo(0, -s);
      ctx.moveTo(s * 0.3, s * 0.18);
      ctx.lineTo(s * 0.8, s * 0.5);
      ctx.moveTo(-s * 0.3, s * 0.18);
      ctx.lineTo(-s * 0.8, s * 0.5);
      break;
    case "slash":
      ctx.moveTo(s * 0.35, -s);
      ctx.lineTo(-s * 0.35, s);
      break;
    case "semicolon":
      ctx.arc(0, -s * 0.3, s * 0.15, 0, Math.PI * 2);
      ctx.moveTo(s * 0.1, s * 0.1);
      ctx.quadraticCurveTo(0, s * 0.5, -s * 0.15, s * 0.8);
      break;
  }

  ctx.stroke();
  ctx.restore();
}
`,iy=`/* ─── Campfire Shape Geometry ─── */
export function getCampfirePoint(
  id: number,
  total: number,
  cx: number,
  cy: number,
  s: number = 1
): { x: number; y: number } {
  const norm = id / total;

  /* Flame body — top half of nodes */
  if (norm < 0.5) {
    const fn = norm * 2;
    const angle = -Math.PI / 2 + (fn - 0.5) * 1.2;
    return {
      x: cx + Math.sin(angle * 3) * fn * 28 * 0.6 * s,
      y: cy - 10 * s - fn * 45 * s,
    };
  }

  /* Left log */
  if (norm < 0.75) {
    const ln = (norm - 0.5) * 4;
    return { x: cx - 30 * s + ln * 60 * s, y: cy + 18 * s + ln * 6 * s };
  }

  /* Right log */
  const ln = (norm - 0.75) * 4;
  return { x: cx + 30 * s - ln * 60 * s, y: cy + 22 * s + ln * 4 * s };
}
`,cy=`import { GRID_COLS, GRID_ROWS } from "../glyphs";
import type { GlyphWave, WaveType } from "../types";

export function getWaveDelay(wave: GlyphWave, col: number, row: number): number {
  /* Node outside wave region */
  if (col < wave.minCol || col > wave.maxCol || row < wave.minRow || row > wave.maxRow)
    return -1;
  const cols = wave.maxCol - wave.minCol;
  const rows = wave.maxRow - wave.minRow;
  const lc = col - wave.minCol;
  const lr = row - wave.minRow;
  let progress: number;
  switch (wave.type) {
    case "horizontal":
      progress = cols > 0 ? lc / cols : 0;
      if (wave.direction < 0) progress = 1 - progress;
      break;
    case "vertical":
      progress = rows > 0 ? lr / rows : 0;
      if (wave.direction < 0) progress = 1 - progress;
      break;
    case "diagonal":
      progress = cols + rows > 0 ? (lr + lc) / (rows + cols) : 0;
      if (wave.direction < 0) progress = 1 - progress;
      break;
    case "radial": {
      const dr = row - wave.originRow;
      const dc = col - wave.originCol;
      const dist = Math.sqrt(dr * dr + dc * dc);
      const maxDist = Math.sqrt(rows * rows + cols * cols) || 1;
      progress = Math.min(1, dist / maxDist);
      break;
    }
    case "snake": {
      const localCols = cols + 1;
      const snakeIdx = lr % 2 === 0 ? lr * localCols + lc : lr * localCols + (cols - lc);
      const total = (rows + 1) * localCols - 1;
      progress = total > 0 ? snakeIdx / total : 0;
      if (wave.direction < 0) progress = 1 - progress;
      break;
    }
  }
  return progress * wave.duration;
}

export function spawnWave(): GlyphWave {
  const types: WaveType[] = ["horizontal", "vertical", "diagonal", "radial", "snake"];
  const type = types[Math.floor(Math.random() * types.length)];
  /* Random section of the grid — 3-6 cols, 2-5 rows */
  const spanC = 3 + Math.floor(Math.random() * 4);
  const spanR = 2 + Math.floor(Math.random() * 4);
  const minCol = Math.floor(Math.random() * Math.max(1, GRID_COLS - spanC));
  const minRow = Math.floor(Math.random() * Math.max(1, GRID_ROWS - spanR));
  const maxCol = Math.min(GRID_COLS - 1, minCol + spanC);
  const maxRow = Math.min(GRID_ROWS - 1, minRow + spanR);
  return {
    type,
    startTime: Date.now(),
    duration: 350 + Math.random() * 400,
    direction: Math.random() > 0.5 ? 1 : -1,
    originCol: minCol + Math.floor((maxCol - minCol) / 2),
    originRow: minRow + Math.floor((maxRow - minRow) / 2),
    minCol,
    maxCol,
    minRow,
    maxRow,
  };
}
`,sy=`"use client";

import { GOLD_DIM } from "../tokens";
import { ScrambleText } from "../effects/ScrambleText";
import { useWindowWidth } from "../useWindowWidth";

/**
 * The mac-style terminal frame: traffic lights, scrambling shell label,
 * noise-textured body. Sits in normal page flow by default; pass \`style\`
 * to position it however your layout needs.
 */
export function TerminalWindow({
  children,
  onReplay,
  showReplay,
  goldBorder,
  headerLabel,
  shellLabel = "~ zsh",
  style,
}: {
  children: React.ReactNode;
  onReplay?: () => void;
  showReplay?: boolean;
  goldBorder?: boolean;
  headerLabel?: string;
  shellLabel?: string;
  style?: React.CSSProperties;
}) {
  const isMobile = useWindowWidth() < 520;
  const borderColor = goldBorder ? GOLD_DIM : "#333";
  const borderBottomColor = goldBorder ? "rgba(200,168,78,0.15)" : "#2a2a2a";
  return (
    <div
      style={{
        width: "min(540px, 100%)",
        margin: "0 auto",
        ...style,
      }}
    >
      <div
        style={{
          background: "#161616",
          borderRadius: "8px 8px 0 0",
          padding: "10px 14px",
          height: 34,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          gap: 7,
          borderTop: \`1px solid \${borderColor}\`,
          borderLeft: \`1px solid \${borderColor}\`,
          borderRight: \`1px solid \${borderColor}\`,
          borderBottom: \`1px solid \${borderBottomColor}\`,
          pointerEvents: "auto",
          position: "relative",
          zIndex: 10,
          transition: "border-color 0.4s ease",
        }}
      >
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
        {showReplay && (
          <span
            onClick={(e) => { e.stopPropagation(); onReplay?.(); }}
            style={{
              fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
              fontSize: 10,
              color: "rgba(255,255,255,0.7)",
              marginLeft: 8,
              letterSpacing: 1,
              cursor: "pointer",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => { (e.target as HTMLSpanElement).style.color = "#fff"; }}
            onMouseLeave={(e) => { (e.target as HTMLSpanElement).style.color = "rgba(255,255,255,0.7)"; }}
            onTouchStart={(e) => { (e.target as HTMLSpanElement).style.color = "#fff"; }}
            onTouchEnd={(e) => { (e.target as HTMLSpanElement).style.color = "rgba(255,255,255,0.7)"; }}
          >
            {headerLabel ?? (isMobile ? "tap to replay" : "click to replay")}
          </span>
        )}
        <span
          style={{
            fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
            fontSize: 10,
            color: "#555",
            marginLeft: "auto",
            letterSpacing: 1,
          }}
        >
          <ScrambleText
            key={shellLabel}
            text={shellLabel}
            intervalMin={8000}
            intervalMax={15000}
            initialDelay={6000}
          />
        </span>
      </div>
      <div
        style={{
          background: \`rgba(10,10,10,0.92) url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")\`,
          borderRadius: "0 0 8px 8px",
          padding: "clamp(10px, 2vw, 14px) clamp(10px, 2vw, 16px)",
          fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
          fontSize: "clamp(12.5px, 1.5vw, 15px)",
          lineHeight: 1.9,
          borderLeft: \`1px solid \${borderColor}\`,
          borderRight: \`1px solid \${borderColor}\`,
          borderBottom: \`1px solid \${borderColor}\`,
          minHeight: 80,
          transition: "border-color 0.4s ease",
          overflowWrap: "break-word",
        }}
      >
        {children}
      </div>
    </div>
  );
}
`,fy=`"use client";

export function TerminalLine({
  lineNum,
  children,
  marginTop,
}: {
  lineNum: number;
  children: React.ReactNode;
  marginTop?: number;
}) {
  return (
    <div
      className="tl-row"
      style={{ display: "flex", gap: 12, marginTop: marginTop ?? 0 }}
    >
      <span
        style={{
          color: "#333",
          minWidth: 18,
          textAlign: "right",
          userSelect: "none",
        }}
      >
        {lineNum}
      </span>
      {children}
    </div>
  );
}
`,oy=`"use client";

export function Cursor({ color = "#fff" }: { color?: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: 7,
        height: "1.1em",
        background: color,
        marginLeft: 1,
        verticalAlign: "text-bottom",
        animation: "blink 0.8s step-end infinite",
      }}
    />
  );
}
`,ry=`"use client";

import { GOLD } from "../tokens";

export function CornerAccent({
  position,
  color = GOLD,
}: {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  color?: string;
}) {
  const base: React.CSSProperties = {
    position: "absolute",
    width: 10,
    height: 10,
  };

  const positionStyles: Record<string, React.CSSProperties> = {
    "top-left": {
      top: -1,
      left: -1,
      borderTop: \`2px solid \${color}\`,
      borderLeft: \`2px solid \${color}\`,
    },
    "top-right": {
      top: -1,
      right: -1,
      borderTop: \`2px solid \${color}\`,
      borderRight: \`2px solid \${color}\`,
    },
    "bottom-left": {
      bottom: -1,
      left: -1,
      borderBottom: \`2px solid \${color}\`,
      borderLeft: \`2px solid \${color}\`,
    },
    "bottom-right": {
      bottom: -1,
      right: -1,
      borderBottom: \`2px solid \${color}\`,
      borderRight: \`2px solid \${color}\`,
    },
  };

  return <div style={{ ...base, ...positionStyles[position] }} />;
}
`,hy=`"use client";

import { useState, useEffect } from "react";
import { GOLD, GREY } from "../tokens";

export function ThinkingDots() {
  const [dots, setDots] = useState(1);
  useEffect(() => {
    const t = setInterval(() => setDots((d) => (d % 3) + 1), 500);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
      <span style={{ color: GOLD }}>{">"}</span>
      <span style={{ color: GREY, fontFamily: "inherit", letterSpacing: 2 }}>
        {".".repeat(dots)}
      </span>
    </div>
  );
}
`,dy=`/* ─── Design Tokens ─── */
export const GOLD = "#C8A84E";
export const GOLD_DIM = "rgba(200,168,78,0.3)";
export const EMBER = "#D4784A";
export const GREY = "#555";
export const DARK_GREY = "#1a1a1a";
export const BG = "#000000";

export const FONT_MONO = "var(--font-mono), 'JetBrains Mono', monospace";
export const FONT_SANS = "var(--font-sans), system-ui, sans-serif";
`,my=`/* ─── Canvas Shape Types ─── */
export const SHAPE_TYPES = [
  "curly",
  "angle",
  "hash",
  "lambda",
  "node",
  "slash",
  "semicolon",
] as const;

/* ─── Particle Characters ─── */
export const PARTICLE_CHARS = ["·", "×", "+", "░", "▪", "◦", "»"];

/* ─── Home Glyphs — resting-state icons for a subset of nodes ─── */
export const HOME_GLYPHS = [
  "ᚠ", "ᚢ", "ᚦ", "ᚨ", "ᚱ", "ᚲ", "ᚷ", "ᚹ",
  "ᛃ", "ᛈ", "ᛊ", "ᛏ", "ᛒ", "ᛗ", "ᛚ", "ᛟ",
  "☥", "◬", "⊕", "⊗", "⍟",
];

/* ─── Scramble Glyphs — digital noise characters matching text scramble ─── */
export const GRAFFITI_GLYPHS = [
  "!", "<", ">", "-", "_", "\\\\", "/", "[", "]", "{", "}", "=", "+", "*", "^", "?", "#",
  "▓", "░", "▒", "█", "▄", "▀", "■", "□",
  "0", "1",
  "α", "β", "γ", "δ", "λ", "π", "θ",
  "⟨", "⟩", "¬", "≈", "≠", "±", "∞",
  "カ", "タ", "ナ", "サ",
];

/* ─── Text Scramble Sets — one is picked at random per scramble cycle ─── */
export const SCRAMBLE_SETS = [
  "!<>-_\\\\/[]{}—=+*^?#",
  "▓░▒█▄▀■□▪▫",
  "01100110101001",
  "αβγδεζηθλμξπ",
  "⟨⟩⌐¬∴∵≈≠±∞",
  "カタナサキミ",
];

/* ─── Node Grid Configuration ─── */
export const NODE_COUNT = 80;
export const GRID_COLS = 10;
export const GRID_ROWS = Math.ceil(NODE_COUNT / GRID_COLS);
`,yy=`/* ─── campfire_effects — import this once, anywhere ───
   Font variables + the keyframes the components animate with.
   Load JetBrains Mono + Inter yourself (Google Fonts link, next/font, or your own)
   and these variables pick them up. */

:root {
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --font-sans: "Inter", system-ui, sans-serif;
}

::selection {
  background: #c8a84e;
  color: #000000;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.4;
  }
  50% {
    opacity: 1;
  }
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

@keyframes scrollDot {
  0%,
  100% {
    transform: translateY(0);
    opacity: 0.4;
  }
  50% {
    transform: translateY(8px);
    opacity: 1;
  }
}

@keyframes slideInLeft {
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
`,Ba={GlitchReveal:{file:"effects/GlitchReveal.tsx",code:$m},DecodeText:{file:"effects/DecodeText.tsx",code:km},DecodeToScramble:{file:"effects/DecodeToScramble.tsx",code:Wm},ScrambleText:{file:"effects/ScrambleText.tsx",code:Fm},TypewriterReveal:{file:"effects/TypewriterReveal.tsx",code:Im},PacManReveal:{file:"effects/PacManReveal.tsx",code:Pm},ProgressReveal:{file:"effects/ProgressReveal.tsx",code:ty},SlideReveal:{file:"effects/SlideReveal.tsx",code:ey},useScramble:{file:"useScramble.ts",code:ny},GlyphCanvas:{file:"canvas/GlyphCanvas.tsx",code:ly},AnimNode:{file:"canvas/AnimNode.ts",code:ay},drawing:{file:"canvas/drawing.ts",code:uy},formations:{file:"canvas/formations.ts",code:iy},waves:{file:"canvas/waves.ts",code:cy},TerminalWindow:{file:"chrome/TerminalWindow.tsx",code:sy},TerminalLine:{file:"chrome/TerminalLine.tsx",code:fy},Cursor:{file:"chrome/Cursor.tsx",code:oy},CornerAccent:{file:"chrome/CornerAccent.tsx",code:ry},ThinkingDots:{file:"chrome/ThinkingDots.tsx",code:hy},tokens:{file:"tokens.ts",code:dy},glyphs:{file:"glyphs.ts",code:my},styles:{file:"styles.css",code:yy}},eh=["scatter","cluster","ring","campfire"],nh=new URLSearchParams(window.location.search),k0=nh.get("formation"),vy=eh.includes(k0??"")?k0:"scatter",Os=nh.get("code"),py=Os&&Ba[Os]?{key:Os}:null,gy=["effects","chrome","tokens"];function ne({n:h,name:x,srcKey:C,usage:s,needs:z,sel:w,onSelect:m,children:O}){const p=w?.key===C;return T.jsxs(Qm,{lineNum:h,marginTop:h===1?0:4,children:[T.jsx("span",{className:`fx-name${p?" lit":""}`,children:x}),T.jsx("span",{className:"fx-live",children:O}),T.jsx("button",{type:"button",className:`arrow-btn${p?" active":""}`,title:`show the code for ${x}`,onClick:()=>m(p?null:{key:C,usage:s,needs:z}),children:"▸"})]})}function Sy(){const[h,x]=V.useState(vy),[C,s]=V.useState(0),[z,w]=V.useState("effects"),[m,O]=V.useState(0),[p,b]=V.useState(py),[U,N]=V.useState(!1),L=th()>=980,P={x:.79,y:.42,size:.33},st={key:"GlyphCanvas",needs:"the canvas/ folder + glyphs.ts + tokens.ts"},gt=()=>ft(p?.key==="GlyphCanvas"?null:st),ft=tt=>{b(tt),N(!1)},jt=tt=>w(tt),oe=()=>{p&&navigator.clipboard.writeText(Ba[p.key].code).then(()=>{N(!0),window.setTimeout(()=>N(!1),1600)})};return T.jsxs(T.Fragment,{children:[T.jsx(jm,{formation:h,waveSignal:C,center:L?{x:P.x,y:P.y}:void 0,size:L?P.size:void 0}),T.jsx("div",{className:"frame",children:T.jsxs("div",{className:"layout",children:[L&&T.jsx("div",{className:"grid-hotzone",title:"view the grid's code",onClick:gt}),T.jsxs("div",{className:"pagehead",children:[T.jsx("h1",{children:T.jsx(J0,{text:"campfire_effects",tickMs:30})}),T.jsxs("div",{className:"ph-meta",children:["react + typescript · zero dependencies · JetBrains Mono ·"," ",T.jsx("span",{className:"gold",children:"MIT"})]}),T.jsxs("div",{className:"ph-line",children:["the design system from"," ",T.jsx("span",{className:"gold",children:"the_campfire"}),", given away whole. click ",T.jsx("span",{className:"gold",children:"▸"})," beside any piece → its source opens → copy it straight into your project."]})]}),T.jsxs("div",{className:"flow",children:[T.jsxs($0,{goldBorder:!0,showReplay:z==="effects",onReplay:()=>O(tt=>tt+1),shellLabel:"~ campfire",style:{margin:0,width:"min(500px, 100%)",flexShrink:0},children:[T.jsx("div",{className:"tabs",children:gy.map(tt=>T.jsx("span",{className:`tab${z===tt?" active":""}`,onClick:()=>jt(tt),children:tt},tt))}),z==="effects"&&T.jsxs("div",{children:[T.jsx(ne,{n:1,name:"GlitchReveal",srcKey:"GlitchReveal",sel:p,onSelect:ft,usage:'<GlitchReveal text="signal acquired" />',children:T.jsx(Ym,{text:"signal acquired"})}),T.jsx(ne,{n:2,name:"DecodeText",srcKey:"DecodeText",sel:p,onSelect:ft,usage:'<DecodeText text="order out of noise" delay={400} />',needs:"useScramble.ts + glyphs.ts",children:T.jsx(Gm,{text:"order out of noise",delay:400})}),T.jsx(ne,{n:3,name:"DecodeToScramble",srcKey:"DecodeToScramble",sel:p,onSelect:ft,usage:'<DecodeToScramble text="never quite settles" />',needs:"useScramble.ts + glyphs.ts",children:T.jsx(J0,{text:"never quite settles",delay:800})}),T.jsx(ne,{n:4,name:"ScrambleText",srcKey:"ScrambleText",sel:p,onSelect:ft,usage:'<ScrambleText text="stable, mostly" />',needs:"useScramble.ts + glyphs.ts",children:T.jsx(I0,{text:"stable, mostly",initialDelay:2600})}),T.jsx(ne,{n:5,name:"TypewriterReveal",srcKey:"TypewriterReveal",sel:p,onSelect:ft,usage:'<TypewriterReveal text="typed with intent" />',needs:"Cursor.tsx + tokens.ts",children:T.jsx(Xm,{text:"typed with intent",delay:1200})}),T.jsx(ne,{n:6,name:"PacManReveal",srcKey:"PacManReveal",sel:p,onSelect:ft,usage:'<PacManReveal text="eats its way across" />',needs:"tokens.ts",children:T.jsx(Bm,{text:"eats its way across",delay:1700})}),T.jsx(ne,{n:7,name:"ProgressReveal",srcKey:"ProgressReveal",sel:p,onSelect:ft,usage:'<ProgressReveal text="loading, honestly" />',needs:"tokens.ts",children:T.jsx(Lm,{text:"loading, honestly",delay:2100})}),T.jsx(ne,{n:8,name:"SlideReveal",srcKey:"SlideReveal",sel:p,onSelect:ft,usage:'<SlideReveal text="arrives from the left" />',children:T.jsx(qm,{text:"arrives from the left",delay:2500})}),T.jsx(ne,{n:9,name:"useScramble",srcKey:"useScramble",sel:p,onSelect:ft,children:T.jsx("span",{className:"fx-dim",children:"the scramble engine"})})]},m),z==="chrome"&&T.jsxs("div",{children:[T.jsx(ne,{n:1,name:"TerminalWindow",srcKey:"TerminalWindow",sel:p,onSelect:ft,usage:"<TerminalWindow goldBorder>…</TerminalWindow>",needs:"ScrambleText + useWindowWidth + tokens.ts",children:T.jsx("span",{className:"fx-dim",children:"the frame you're looking at"})}),T.jsx(ne,{n:2,name:"TerminalLine",srcKey:"TerminalLine",sel:p,onSelect:ft,usage:"<TerminalLine lineNum={1}>…</TerminalLine>",children:T.jsx("span",{className:"fx-dim",children:"these numbered lines"})}),T.jsx(ne,{n:3,name:"Cursor",srcKey:"Cursor",sel:p,onSelect:ft,usage:'<Cursor color="#C8A84E" />',children:T.jsxs("span",{className:"fx-dim",children:["a blinking block ",T.jsx(P0,{color:Vl})]})}),T.jsx(ne,{n:4,name:"ThinkingDots",srcKey:"ThinkingDots",sel:p,onSelect:ft,usage:"<ThinkingDots />",children:T.jsx(Jm,{})}),T.jsx(ne,{n:5,name:"CornerAccent",srcKey:"CornerAccent",sel:p,onSelect:ft,usage:'<CornerAccent position="top-left" />',children:T.jsxs("span",{className:"corner-demo",children:[T.jsx(Zl,{position:"top-left"}),T.jsx(Zl,{position:"top-right"}),T.jsx(Zl,{position:"bottom-left"}),T.jsx(Zl,{position:"bottom-right"}),T.jsx("span",{className:"fx-dim",children:"gold corners"})]})})]}),z==="tokens"&&T.jsxs("div",{children:[T.jsx(ne,{n:1,name:"tokens",srcKey:"tokens",sel:p,onSelect:ft,usage:'import { GOLD, EMBER, BG } from "./kit/tokens"',children:T.jsxs("span",{className:"tok-chips",children:[T.jsx("span",{className:"tok-chip",style:{background:"#C8A84E"}}),T.jsx("span",{className:"tok-chip",style:{background:"#D4784A"}}),T.jsx("span",{className:"tok-chip",style:{background:"#555"}}),T.jsx("span",{className:"tok-chip",style:{background:"#1a1a1a"}}),T.jsx("span",{className:"fx-dim",children:"gold · ember · greys · black"})]})}),T.jsx(ne,{n:2,name:"glyphs",srcKey:"glyphs",sel:p,onSelect:ft,usage:'import { SCRAMBLE_SETS } from "./kit/glyphs"',children:T.jsx("span",{className:"fx-dim",children:"▓░▒ αβγ カタナ ᚠᚢᚦ — every alphabet"})}),T.jsx(ne,{n:3,name:"styles",srcKey:"styles",sel:p,onSelect:ft,usage:'import "./kit/styles.css"',children:T.jsx("span",{className:"fx-dim",children:"the keyframes — import once"})})]})]}),T.jsx("div",{className:`flow-arrow${p?" on":""}`,children:"→"}),T.jsx($0,{shellLabel:p?`src/kit/${Ba[p.key].file}`:"~ source",showReplay:!!p,headerLabel:"× close",onReplay:()=>b(null),style:{margin:0,width:"min(560px, 100%)",flexShrink:1},children:p?T.jsxs(T.Fragment,{children:[(p.key==="GlyphCanvas"||p.usage)&&T.jsx("div",{className:"usage",children:p.key==="GlyphCanvas"?`<GlyphCanvas formation="${h}" />`:p.usage}),T.jsxs("div",{className:"code-head",children:[T.jsxs("span",{children:[Ba[p.key].file,p.needs?T.jsxs("span",{className:"needs",children:[" · needs ",p.needs]}):null]}),T.jsx("button",{type:"button",className:"copy-btn",onClick:oe,children:U?"copied ✓":"copy"})]}),T.jsx("pre",{className:"code",children:Ba[p.key].code})]}):T.jsxs("div",{className:"slot-empty",children:[T.jsx("span",{className:"gold",children:"▸"})," beside any piece opens its code here — copy it straight out."]})})]}),T.jsxs("div",{className:`glyphs-module${L?" docked":""}`,style:L?{left:`${P.x*100}%`,top:`calc(${P.y*100}vh + ${P.size*50}vmin + 24px)`}:void 0,children:[T.jsx(Zl,{position:"top-left"}),T.jsx(Zl,{position:"bottom-right"}),T.jsxs("div",{className:"gm-row",children:[T.jsxs("span",{className:"gm-name",children:[T.jsx("span",{className:"gold",children:">"})," have_fun_with_glyphs"]}),eh.map(tt=>T.jsx("button",{type:"button",className:`btn${h===tt?" active":""}`,onClick:()=>x(tt),children:tt},tt)),T.jsx("button",{type:"button",className:"btn",onClick:()=>s(tt=>tt+1),children:"▚ wave"}),T.jsx("button",{type:"button",className:`arrow-btn${p?.key==="GlyphCanvas"?" active":""}`,title:"show the code for GlyphCanvas",onClick:gt,children:"▸"})]}),T.jsx("div",{className:"gm-hint",children:"move your mouse through the grid — it notices"})]})]})})]})}Dm.createRoot(document.getElementById("root")).render(T.jsx(Sy,{}));
