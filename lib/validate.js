/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isObject = require( '@stdlib/assert-is-plain-object' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var isBoolean = require( '@stdlib/assert-is-boolean' ).isPrimitive;
var isNonNegative = require( '@stdlib/assert-is-nonnegative-number' ).isPrimitive;
var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var format = require( '@stdlib/error-tools-fmtprodmsg' );


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {string} [options.name] - debug namespace
* @param {boolean} [options.objectMode] - specifies whether a stream should operate in object mode
* @param {NonNegativeNumber} [options.highWaterMark] - specifies the `Buffer` level for when `write()` starts returning `false`
* @param {boolean} [options.decodeStrings] - specifies whether to encode strings as `Buffer` objects before writing data to a returned stream
* @param {string} [options.defaultEncoding] - default encoding when not explicitly specified when writing data
* @returns {(Error|null)} null or an error object
*
* @example
* var opts = {};
* var options = {
*     'objectMode': true
* };
*
* var err = validate( opts, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( format( '0fv2h', options ) );
	}
	if ( hasOwnProp( options, 'name' ) ) {
		opts.name = options.name;
		if ( !isString( opts.name ) ) {
			return new TypeError( format( '0fv2i', 'name', opts.name ) );
		}
	}
	if ( hasOwnProp( options, 'objectMode' ) ) {
		opts.objectMode = options.objectMode;
		if ( !isBoolean( opts.objectMode ) ) {
			return new TypeError( format( '0fv30', 'objectMode', opts.objectMode ) );
		}
	}
	if ( hasOwnProp( options, 'highWaterMark' ) ) {
		opts.highWaterMark = options.highWaterMark;
		if ( !isNonNegative( opts.highWaterMark ) ) {
			return new TypeError( format( '0fv4x', 'highWaterMark', opts.highWaterMark ) );
		}
	}
	if ( hasOwnProp( options, 'decodeStrings' ) ) {
		opts.decodeStrings = options.decodeStrings;
		if ( !isBoolean( opts.decodeStrings ) ) {
			return new TypeError( format( '0fv30', 'decodeStrings', opts.decodeStrings ) );
		}
	}
	if ( hasOwnProp( options, 'defaultEncoding' ) ) {
		opts.defaultEncoding = options.defaultEncoding;
		if ( !isString( opts.defaultEncoding ) ) {
			return new TypeError( format( '0fv2i', 'defaultEncoding', opts.defaultEncoding ) );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;