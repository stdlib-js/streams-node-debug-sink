// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("stream"),require("process")):"function"==typeof define&&define.amd?define(["stream","process"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).debugSinkStream=t(e.require$$0$2,e.require$$0$1)}(this,(function(e,t){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function o(e){return"number"==typeof e}function i(e){var t,r="";for(t=0;t<e;t++)r+="0";return r}function a(e,t,r){var n=!1,o=t-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=r?e+i(o):i(o)+e,n&&(e="-"+e)),e}var u=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function l(e){var t,r,n;switch(e.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(r=e.arg,n=parseInt(r,10),!isFinite(n)){if(!o(r))throw new Error("invalid integer. Value: "+r);n=0}return n<0&&("u"===e.specifier||10!==t)&&(n=4294967295+n+1),n<0?(r=(-n).toString(t),e.precision&&(r=a(r,e.precision,e.padRight)),r="-"+r):(r=n.toString(t),n||e.precision?e.precision&&(r=a(r,e.precision,e.padRight)):r="",e.sign&&(r=e.sign+r)),16===t&&(e.alternate&&(r="0x"+r),r=e.specifier===c.call(e.specifier)?c.call(r):u.call(r)),8===t&&e.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r}function s(e){return"string"==typeof e}var f=Math.abs,p=String.prototype.toLowerCase,d=String.prototype.toUpperCase,g=String.prototype.replace,b=/e\+(\d)$/,h=/e-(\d)$/,y=/^(\d+)$/,v=/^(\d+)e/,m=/\.0$/,w=/\.0*e/,j=/(\..*[^0])0*e/;function _(e){var t,r,n=parseFloat(e.arg);if(!isFinite(n)){if(!o(e.arg))throw new Error("invalid floating-point number. Value: "+r);n=e.arg}switch(e.specifier){case"e":case"E":r=n.toExponential(e.precision);break;case"f":case"F":r=n.toFixed(e.precision);break;case"g":case"G":f(n)<1e-4?((t=e.precision)>0&&(t-=1),r=n.toExponential(t)):r=n.toPrecision(e.precision),e.alternate||(r=g.call(r,j,"$1e"),r=g.call(r,w,"e"),r=g.call(r,m,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return r=g.call(r,b,"e+0$1"),r=g.call(r,h,"e-0$1"),e.alternate&&(r=g.call(r,y,"$1."),r=g.call(r,v,"$1.e")),n>=0&&e.sign&&(r=e.sign+r),r=e.specifier===d.call(e.specifier)?d.call(r):p.call(r)}function O(e){var t,r="";for(t=0;t<e;t++)r+=" ";return r}function E(e,t,r){var n=t-e.length;return n<0?e:e=r?e+O(n):O(n)+e}var S=String.fromCharCode,k=isNaN,T=Array.isArray;function M(e){var t={};return t.specifier=e.specifier,t.precision=void 0===e.precision?1:e.precision,t.width=e.width,t.flags=e.flags||"",t.mapping=e.mapping,t}function V(e){var t,r,n,o,i,u,c,f,p;if(!T(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",c=1,f=0;f<e.length;f++)if(s(n=e[f]))u+=n;else{if(t=void 0!==n.precision,!(n=M(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),r=n.flags,p=0;p<r.length;p++)switch(o=r.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,k(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,k(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=l(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!k(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=k(i)?String(n.arg):S(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=_(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=a(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),u+=n.arg||"",c+=1}return u}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(e){var t={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(t.precision="1"),t}function P(e){var t,r,n,o;for(r=[],o=0,n=x.exec(e);n;)(t=e.slice(o,x.lastIndex-n[0].length)).length&&r.push(t),r.push(I(n)),o=x.lastIndex,n=x.exec(e);return(t=e.slice(o)).length&&r.push(t),r}function A(e){return"string"==typeof e}function C(e){var t,r;if(!A(e))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(t=[P(e)],r=1;r<arguments.length;r++)t.push(arguments[r]);return V.apply(null,t)}var F,N=Object.prototype,W=N.toString,$=N.__defineGetter__,G=N.__defineSetter__,R=N.__lookupGetter__,B=N.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?n:function(e,t,r){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===W.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof r||null===r||"[object Array]"===W.call(r))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((o="value"in r)&&(R.call(e,t)||B.call(e,t)?(n=e.__proto__,e.__proto__=N,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),i="get"in r,a="set"in r,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&$&&$.call(e,t,r.get),a&&G&&G.call(e,t,r.set),e};var L=F;function Y(e,t,r){L(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function X(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){if(this instanceof e){var r=[null];r.push.apply(r,arguments);var n=Function.bind.apply(t,r);return new n}return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var Z=/./;function q(e){return"boolean"==typeof e}var J="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return J&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;function H(e,t){return null!=e&&D.call(e,t)}var K="function"==typeof Symbol?Symbol:void 0,Q="function"==typeof K?K.toStringTag:"";var ee=U()?function(e){var t,r,n;if(null==e)return z.call(e);r=e[Q],t=H(e,Q);try{e[Q]=void 0}catch(t){return z.call(e)}return n=z.call(e),t?e[Q]=r:delete e[Q],n}:function(e){return z.call(e)},te=Boolean,re=Boolean.prototype.toString;var ne=U();function oe(e){return"object"==typeof e&&(e instanceof te||(ne?function(e){try{return re.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===ee(e)))}function ie(e){return q(e)||oe(e)}function ae(){return new Function("return this;")()}Y(ie,"isPrimitive",q),Y(ie,"isObject",oe);var ue="object"==typeof self?self:null,ce="object"==typeof window?window:null,le="object"==typeof global?global:null,se="object"==typeof globalThis?globalThis:null;var fe=function(e){if(arguments.length){if(!q(e))throw new TypeError(C("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ae()}if(se)return se;if(ue)return ue;if(ce)return ce;if(le)return le;throw new Error("unexpected error. Unable to resolve global object.")}(),pe=fe.document&&fe.document.childNodes,de=Int8Array;function ge(){return/^\s*function\s*([^(]*)/i}var be=/^\s*function\s*([^(]*)/i;Y(ge,"REGEXP",be);var he=Array.isArray?Array.isArray:function(e){return"[object Array]"===ee(e)};function ye(e){return null!==e&&"object"==typeof e}function ve(e){return ye(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}function me(e){var t,r,n;if(("Object"===(r=ee(e).slice(8,-1))||"Error"===r)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(t=be.exec(n.toString()))return t[1]}return ve(e)?"Buffer":r}Y(ye,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(C("invalid argument. Must provide a function. Value: `%s`.",e));return function(t){var r,n;if(!he(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}(ye));var we="function"==typeof Z||"object"==typeof de||"function"==typeof pe?function(e){return me(e).toLowerCase()}:function(e){var t;return null===e?"null":"object"===(t=typeof e)?me(e).toLowerCase():t};function je(e){return"function"===we(e)}var _e=je(Object.assign),Oe=Object.assign;function Ee(e){return Object.keys(Object(e))}var Se,ke=void 0!==Object.keys;function Te(e){return"[object Arguments]"===ee(e)}Se=function(){return Te(arguments)}();var Me=Se;function Ve(e){return"string"==typeof e}var xe=String.prototype.valueOf;var Ie=U();function Pe(e){return"object"==typeof e&&(e instanceof String||(Ie?function(e){try{return xe.call(e),!0}catch(e){return!1}}(e):"[object String]"===ee(e)))}function Ae(e){return Ve(e)||Pe(e)}function Ce(e){return"number"==typeof e}Y(Ae,"isPrimitive",Ve),Y(Ae,"isObject",Pe);var Fe=Number,Ne=Fe.prototype.toString;var We=U();function $e(e){return"object"==typeof e&&(e instanceof Fe||(We?function(e){try{return Ne.call(e),!0}catch(e){return!1}}(e):"[object Number]"===ee(e)))}function Ge(e){return Ce(e)||$e(e)}function Re(e){return e!=e}function Be(e){return Ce(e)&&Re(e)}function Le(e){return $e(e)&&Re(e.valueOf())}function Ye(e){return Be(e)||Le(e)}Y(Ge,"isPrimitive",Ce),Y(Ge,"isObject",$e),Y(Ye,"isPrimitive",Be),Y(Ye,"isObject",Le);var Xe=Number.POSITIVE_INFINITY,Ze=Fe.NEGATIVE_INFINITY,qe=Math.floor;function Je(e){return e<Xe&&e>Ze&&qe(t=e)===t;var t}function Ue(e){return Ce(e)&&Je(e)}function ze(e){return $e(e)&&Je(e.valueOf())}function De(e){return Ue(e)||ze(e)}Y(De,"isPrimitive",Ue),Y(De,"isObject",ze);var He=Object.prototype.propertyIsEnumerable;var Ke=!He.call("beep","0");function Qe(e,t){var r;return null!=e&&(!(r=He.call(e,t))&&Ke&&Ae(e)?!Be(t=+t)&&Ue(t)&&t>=0&&t<e.length:r)}var et=Math.floor;function tt(e){return et(e)===e}var rt=Me?Te:function(e){return null!==e&&"object"==typeof e&&!he(e)&&"number"==typeof e.length&&tt(e.length)&&e.length>=0&&e.length<=4294967295&&H(e,"callee")&&!Qe(e,"callee")},nt=Array.prototype.slice;var ot=Qe((function(){}),"prototype"),it=!Qe({toString:null},"toString");function at(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&tt(e.length)&&e.length>=0&&e.length<=9007199254740991}var ut=Number.POSITIVE_INFINITY,ct=Fe.NEGATIVE_INFINITY;function lt(e){return e<ut&&e>ct&&tt(e)}function st(e){return Ce(e)&&lt(e)}function ft(e){return $e(e)&&lt(e.valueOf())}function pt(e){return st(e)||ft(e)}function dt(e,t,r){var n,o;if(!at(e)&&!Ve(e))throw new TypeError(C("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!st(r))throw new TypeError(C("invalid argument. Third argument must be an integer. Value: `%s`.",r));if(r>=0){if(r>=n)return-1;o=r}else(o=n+r)<0&&(o=0)}else o=0;if(Ye(t)){for(;o<n;o++)if(Ye(e[o]))return o}else for(;o<n;o++)if(e[o]===t)return o;return-1}function gt(e){return e.constructor&&e.constructor.prototype===e}Y(pt,"isPrimitive",st),Y(pt,"isObject",ft);var bt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ht="undefined"==typeof window?void 0:window;var yt=function(){var e;if("undefined"===we(ht))return!1;for(e in ht)try{-1===dt(bt,e)&&H(ht,e)&&null!==ht[e]&&"object"===we(ht[e])&&gt(ht[e])}catch(e){return!0}return!1}(),vt="undefined"!=typeof window;var mt,wt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];mt=ke?function(){return 2!==(Ee(arguments)||"").length}(1,2)?function(e){return rt(e)?Ee(nt.call(e)):Ee(e)}:Ee:function(e){var t,r,n,o,i,a,u;if(o=[],rt(e)){for(u=0;u<e.length;u++)o.push(u.toString());return o}if("string"==typeof e){if(e.length>0&&!H(e,"0"))for(u=0;u<e.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof e)&&!ye(e))return o;r=ot&&n}for(i in e)r&&"prototype"===i||!H(e,i)||o.push(String(i));if(it)for(t=function(e){if(!1===vt&&!yt)return gt(e);try{return gt(e)}catch(e){return!1}}(e),u=0;u<wt.length;u++)a=wt[u],t&&"constructor"===a||!H(e,a)||o.push(String(a));return o};var jt=mt,_t=void 0!==Object.getOwnPropertySymbols,Ot=Object,Et=Ot.getOwnPropertySymbols;var St,kt=_t?function(e){return Et(Ot(e))}:function(){return[]};function Tt(e){var t,r,n;for(t=jt(e),r=kt(e),n=0;n<r.length;n++)Qe(e,r[n])&&t.push(r[n]);return t}St=_e?Oe:function(e){var t,r,n,o,i,a,u;if(null==e)throw new TypeError(C("invalid argument. First argument must be a non-null object. Value: `%s`.",e));for(i=Ot(e),a=1;a<arguments.length;a++)if(null!=(t=arguments[a]))for(o=(r=Tt(Ot(t))).length,u=0;u<o;u++)i[n=r[u]]=t[n];return i};var Mt=St,Vt="function"==typeof Object.defineProperty?Object.defineProperty:null;var xt,It=Object.defineProperty,Pt=Object.prototype,At=Pt.toString,Ct=Pt.__defineGetter__,Ft=Pt.__defineSetter__,Nt=Pt.__lookupGetter__,Wt=Pt.__lookupSetter__;xt=function(){try{return Vt({},"x",{}),!0}catch(e){return!1}}()?It:function(e,t,r){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===At.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof r||null===r||"[object Array]"===At.call(r))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((o="value"in r)&&(Nt.call(e,t)||Wt.call(e,t)?(n=e.__proto__,e.__proto__=Pt,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),i="get"in r,a="set"in r,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Ct&&Ct.call(e,t,r.get),a&&Ft&&Ft.call(e,t,r.set),e};var $t=xt;function Gt(e){var t=typeof e;return null===e||"object"!==t&&"function"!==t?new TypeError(C("invalid argument. A provided constructor must be either an object (except null) or a function. Value: `%s`.",e)):null}var Rt=Object.create;function Bt(){}var Lt="function"==typeof Rt?Rt:function(e){return Bt.prototype=e,new Bt};function Yt(e,t){var r=Gt(e);if(r)throw r;if(r=Gt(t))throw r;if(void 0===t.prototype)throw new TypeError(C("invalid argument. Second argument must have a prototype from which another object can inherit. Value: `%s`.",t.prototype));return e.prototype=Lt(t.prototype),$t(e.prototype,"constructor",{configurable:!0,enumerable:!1,writable:!0,value:e}),e}var Xt="function"==typeof Object.defineProperty?Object.defineProperty:null;var Zt,qt=Object.defineProperty,Jt=Object.prototype,Ut=Jt.toString,zt=Jt.__defineGetter__,Dt=Jt.__defineSetter__,Ht=Jt.__lookupGetter__,Kt=Jt.__lookupSetter__;Zt=function(){try{return Xt({},"x",{}),!0}catch(e){return!1}}()?qt:function(e,t,r){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===Ut.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof r||null===r||"[object Array]"===Ut.call(r))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((o="value"in r)&&(Ht.call(e,t)||Kt.call(e,t)?(n=e.__proto__,e.__proto__=Jt,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),i="get"in r,a="set"in r,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&zt&&zt.call(e,t,r.get),a&&Dt&&Dt.call(e,t,r.set),e};var Qt=Zt;function er(e,t,r){Qt(e,t,{configurable:!0,enumerable:!1,writable:!0,value:r})}var tr=t;function rr(e){var t,r;for(t=[],r=1;r<arguments.length;r++)t.push(arguments[r]);function n(){e.apply(null,t)}tr.nextTick(n)}var nr={objectMode:!1,decodeStrings:!0,defaultEncoding:"utf8"};var or,ir=Object.getPrototypeOf;or=je(Object.getPrototypeOf)?ir:function(e){var t=function(e){return e.__proto__}(e);return t||null===t?t:"[object Function]"===ee(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var ar=or;var ur=Object.prototype;function cr(e){var t;return!!function(e){return"object"==typeof e&&null!==e&&!he(e)}(e)&&(t=function(e){return null==e?null:(e=Ot(e),ar(e))}(e),!t||!H(e,"constructor")&&H(t,"constructor")&&je(t.constructor)&&"[object Function]"===ee(t.constructor)&&H(t,"isPrototypeOf")&&je(t.isPrototypeOf)&&(t===ur||function(e){var t;for(t in e)if(!H(e,t))return!1;return!0}(e)))}function lr(e){return Ce(e)&&e>=0}function sr(e){return $e(e)&&e.valueOf()>=0}function fr(e){return lr(e)||sr(e)}function pr(e,t){return cr(t)?H(t,"objectMode")&&(e.objectMode=t.objectMode,!q(e.objectMode))?new TypeError(C("invalid option. `%s` option must be a boolean. Option: `%s`.","objectMode",e.objectMode)):H(t,"highWaterMark")&&(e.highWaterMark=t.highWaterMark,!lr(e.highWaterMark))?new TypeError(C("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","highWaterMark",e.highWaterMark)):H(t,"decodeStrings")&&(e.decodeStrings=t.decodeStrings,!q(e.decodeStrings))?new TypeError(C("invalid option. `%s` option must be a boolean. Option: `%s`.","decodeStrings",e.decodeStrings)):H(t,"defaultEncoding")&&(e.defaultEncoding=t.defaultEncoding,!Ve(e.defaultEncoding))?new TypeError(C("invalid option. `%s` option must be a string. Option: `%s`.","defaultEncoding",e.defaultEncoding)):null:new TypeError(C("invalid argument. Options argument must be an object. Value: `%s`.",t))}Y(fr,"isPrimitive",lr),Y(fr,"isObject",sr);var dr=X(Object.freeze({__proto__:null,default:()=>()=>{}})),gr=dr("inspect-stream-sink"),br=e.Writable;function hr(e,t){var r,n,o;if(!(this instanceof hr))return arguments.length>1?new hr(e,t):new hr(e);if(n=Mt({},nr),arguments.length>1){if(r=t,o=pr(n,e))throw o}else r=e;if(!je(r))throw new TypeError(C("invalid argument. Callback argument must be a function. Value: `%s`.",r));return gr("Creating a writable stream configured with the following options: %s.",JSON.stringify(n)),br.call(this,n),er(this,"_destroyed",!1),er(this,"_idx",-1),Y(this,"_inspect",r),this}Yt(hr,br),Y(hr.prototype,"_write",(function(e,t,r){if(this._idx+=1,gr("Received a new chunk. Chunk: %s. Encoding: %s. Index: %d.",e.toString(),t,this._idx),this._inspect.call(null,e,this._idx),this._destroyed)return rr(r);r()})),Y(hr.prototype,"destroy",(function(e){var t;return this._destroyed?(gr("Attempted to destroy an already destroyed stream."),this):(t=this,this._destroyed=!0,rr((function(){e&&(gr("Stream was destroyed due to an error. Error: %s.",JSON.stringify(e)),t.emit("error",e));gr("Closing the stream..."),t.emit("close")})),this)})),Y(hr,"objectMode",(function(e,t){var r,n;if(arguments.length>1){if(!cr(e))throw new TypeError(C("invalid argument. Options argument must be an object. Value: `%s`.",e));r=Mt({},e),n=t}else r={},n=e;return r.objectMode=!0,new hr(r,n)})),Y(hr,"factory",(function(e){var t;if(arguments.length){if(!cr(e))throw new TypeError(C("invalid argument. Options argument must be an object. Value: `%s`.",e));t=Mt({},e)}else t={};return r;function r(e){return new hr(t,e)}}));var yr="debug-stream-sink",vr=dr(yr),mr={objectMode:!1,decodeStrings:!0,defaultEncoding:"utf8",name:""};function wr(e,t){return cr(t)?H(t,"name")&&(e.name=t.name,!Ve(e.name))?new TypeError(C("invalid option. `%s` option must be a string. Option: `%s`.","name",e.name)):H(t,"objectMode")&&(e.objectMode=t.objectMode,!q(e.objectMode))?new TypeError(C("invalid option. `%s` option must be a boolean. Option: `%s`.","objectMode",e.objectMode)):H(t,"highWaterMark")&&(e.highWaterMark=t.highWaterMark,!lr(e.highWaterMark))?new TypeError(C("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","highWaterMark",e.highWaterMark)):H(t,"decodeStrings")&&(e.decodeStrings=t.decodeStrings,!q(e.decodeStrings))?new TypeError(C("invalid option. `%s` option must be a boolean. Option: `%s`.","decodeStrings",e.decodeStrings)):H(t,"defaultEncoding")&&(e.defaultEncoding=t.defaultEncoding,!Ve(e.defaultEncoding))?new TypeError(C("invalid option. `%s` option must be a string. Option: `%s`.","defaultEncoding",e.defaultEncoding)):null:new TypeError(C("invalid argument. Options argument must be an object. Value: `%s`.",t))}var jr=dr;function _r(e,t){var r,n,o,i,a;if(!(this instanceof _r))return arguments.length>1?new _r(e,t):1===arguments.length?new _r(e):new _r;if(r=Mt({},mr),arguments.length>1){if(!je(t))throw new TypeError(C("invalid argument. Callback argument must be a function. Value: `%s`.",t));a=t,i=wr(r,e)}else arguments.length&&(je(e)?a=e:i=wr(r,e));if(i)throw i;return n=r.name?yr+":"+r.name:yr,o=jr(n),vr("Creating a writable stream configured with the following options: %s.",JSON.stringify(r)),hr.call(this,r,u),this;function u(e,t){if(a)return vr("Received a new chunk. Chunk: %s. Index: %d.",e.toString(),t),a(o,e,t);ve(e)&&(e=e.toString()),e=JSON.stringify(e),vr("Received a new chunk. Chunk: %s. Index: %d.",e,t),o("Chunk: %s. Index: %d.",e,t)}}return Yt(_r,hr),Y(_r,"objectMode",(function(e,t){var r,n;if(arguments.length>1){if(!cr(e))throw new TypeError(C("invalid argument. Options argument must be an object. Value: `%s`.",e));if(r=Mt({},e),n=t,!je(t))throw new TypeError(C("invalid argument. Callback argument must be a function. Value: `%s`.",t))}else if(arguments.length)if(je(e))r={},n=e;else{if(!cr(e))throw new TypeError(C("invalid argument. Options argument must be an object. Value: `%s`.",e));r=Mt({},e)}else r={};return r.objectMode=!0,void 0===n?new _r(r):new _r(r,n)})),Y(_r,"factory",(function(e){var t;if(arguments.length){if(!cr(e))throw new TypeError(C("invalid argument. Options argument must be an object. Value: `%s`.",e));t=Mt({},e)}else t={};return r;function r(e,r){return t.name=e,arguments.length>1?new _r(t,r):new _r(t)}})),_r}));
//# sourceMappingURL=index.js.map
