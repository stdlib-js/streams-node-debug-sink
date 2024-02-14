// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-inspect-sink@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-buffer@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherit@v0.2.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.0-esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.0-esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-number@v0.2.0-esm/index.mjs";import{isPrimitive as u}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.0-esm/index.mjs";function p(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var n=function e(){if(this instanceof e){var n=[null];n.push.apply(n,arguments);var i=Function.bind.apply(t,n);return new i}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var i=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,i.get?i:{enumerable:!0,get:function(){return e[t]}})})),n}var c=p(Object.freeze({__proto__:null,default:()=>()=>{}})),f="debug-stream-sink",g=c(f),h={objectMode:!1,decodeStrings:!0,defaultEncoding:"utf8",name:""};function b(e,t){return a(t)?d(t,"name")&&(e.name=t.name,!u(e.name))?new TypeError(r("invalid option. `%s` option must be a string. Option: `%s`.","name",e.name)):d(t,"objectMode")&&(e.objectMode=t.objectMode,!l(e.objectMode))?new TypeError(r("invalid option. `%s` option must be a boolean. Option: `%s`.","objectMode",e.objectMode)):d(t,"highWaterMark")&&(e.highWaterMark=t.highWaterMark,!m(e.highWaterMark))?new TypeError(r("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","highWaterMark",e.highWaterMark)):d(t,"decodeStrings")&&(e.decodeStrings=t.decodeStrings,!l(e.decodeStrings))?new TypeError(r("invalid option. `%s` option must be a boolean. Option: `%s`.","decodeStrings",e.decodeStrings)):d(t,"defaultEncoding")&&(e.defaultEncoding=t.defaultEncoding,!u(e.defaultEncoding))?new TypeError(r("invalid option. `%s` option must be a string. Option: `%s`.","defaultEncoding",e.defaultEncoding)):null:new TypeError(r("invalid argument. Options argument must be an object. Value: `%s`.",t))}var j=c;function v(e,o){var a,d,l,m,u;if(!(this instanceof v))return arguments.length>1?new v(e,o):1===arguments.length?new v(e):new v;if(a=s({},h),arguments.length>1){if(!n(o))throw new TypeError(r("invalid argument. Callback argument must be a function. Value: `%s`.",o));u=o,m=b(a,e)}else arguments.length&&(n(e)?u=e:m=b(a,e));if(m)throw m;return d=a.name?f+":"+a.name:f,l=j(d),g("Creating a writable stream configured with the following options: %s.",JSON.stringify(a)),t.call(this,a,p),this;function p(e,t){if(u)return g("Received a new chunk. Chunk: %s. Index: %d.",e.toString(),t),u(l,e,t);i(e)&&(e=e.toString()),e=JSON.stringify(e),g("Received a new chunk. Chunk: %s. Index: %d.",e,t),l("Chunk: %s. Index: %d.",e,t)}}function w(e,t){var i,o;if(arguments.length>1){if(!a(e))throw new TypeError(r("invalid argument. Options argument must be an object. Value: `%s`.",e));if(i=s({},e),o=t,!n(t))throw new TypeError(r("invalid argument. Callback argument must be a function. Value: `%s`.",t))}else if(arguments.length)if(n(e))i={},o=e;else{if(!a(e))throw new TypeError(r("invalid argument. Options argument must be an object. Value: `%s`.",e));i=s({},e)}else i={};return i.objectMode=!0,void 0===o?new v(i):new v(i,o)}function y(e){var t;if(arguments.length){if(!a(e))throw new TypeError(r("invalid argument. Options argument must be an object. Value: `%s`.",e));t=s({},e)}else t={};return n;function n(e,n){return t.name=e,arguments.length>1?new v(t,n):new v(t)}}o(v,t),e(v,"objectMode",w),e(v,"factory",y);export{v as default,y as factory,w as objectMode};
//# sourceMappingURL=index.mjs.map