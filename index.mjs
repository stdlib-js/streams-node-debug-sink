// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-inspect-sink@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-buffer@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherit@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import{isPrimitive as f}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-number@esm/index.mjs";import{isPrimitive as h}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";function c(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var n=function e(){if(this instanceof e){var n=[null];n.push.apply(n,arguments);var r=Function.bind.apply(t,n);return new r}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),n}var m=c(Object.freeze({__proto__:null,default:()=>()=>{}})),p="debug-stream-sink",u=m(p),g={objectMode:!1,decodeStrings:!0,defaultEncoding:"utf8",name:""};function j(e,t){return d(t)?a(t,"name")&&(e.name=t.name,!h(e.name))?new TypeError(i("0fv2i","name",e.name)):a(t,"objectMode")&&(e.objectMode=t.objectMode,!f(e.objectMode))?new TypeError(i("0fv30","objectMode",e.objectMode)):a(t,"highWaterMark")&&(e.highWaterMark=t.highWaterMark,!l(e.highWaterMark))?new TypeError(i("0fv4x","highWaterMark",e.highWaterMark)):a(t,"decodeStrings")&&(e.decodeStrings=t.decodeStrings,!f(e.decodeStrings))?new TypeError(i("0fv30","decodeStrings",e.decodeStrings)):a(t,"defaultEncoding")&&(e.defaultEncoding=t.defaultEncoding,!h(e.defaultEncoding))?new TypeError(i("0fv2i","defaultEncoding",e.defaultEncoding)):null:new TypeError(i("0fv2h",t))}var v=m;function b(e,o){var d,a,f,l,h;if(!(this instanceof b))return arguments.length>1?new b(e,o):1===arguments.length?new b(e):new b;if(d=s({},g),arguments.length>1){if(!n(o))throw new TypeError(i("0fv2n",o));h=o,l=j(d,e)}else arguments.length&&(n(e)?h=e:l=j(d,e));if(l)throw l;return a=d.name?p+":"+d.name:p,f=v(a),u("Creating a writable stream configured with the following options: %s.",JSON.stringify(d)),t.call(this,d,c),this;function c(e,t){if(h)return u("Received a new chunk. Chunk: %s. Index: %d.",e.toString(),t),h(f,e,t);r(e)&&(e=e.toString()),e=JSON.stringify(e),u("Received a new chunk. Chunk: %s. Index: %d.",e,t),f("Chunk: %s. Index: %d.",e,t)}}function w(e,t){var r,o;if(arguments.length>1){if(!d(e))throw new TypeError(i("0fv2h",e));if(r=s({},e),o=t,!n(t))throw new TypeError(i("0fv2n",t))}else if(arguments.length)if(n(e))r={},o=e;else{if(!d(e))throw new TypeError(i("0fv2h",e));r=s({},e)}else r={};return r.objectMode=!0,void 0===o?new b(r):new b(r,o)}function y(e){var t;if(arguments.length){if(!d(e))throw new TypeError(i("0fv2h",e));t=s({},e)}else t={};return n;function n(e,n){return t.name=e,arguments.length>1?new b(t,n):new b(t)}}o(b,t),e(b,"objectMode",w),e(b,"factory",y);export{b as default,y as factory,w as objectMode};
//# sourceMappingURL=index.mjs.map