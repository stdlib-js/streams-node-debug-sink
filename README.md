<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Debug Stream

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Writable stream][writable-stream] for [debugging][node-debug] stream pipelines.



<section class="usage">

## Usage

```javascript
import debugSinkStream from 'https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-debug-sink@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { factory, objectMode } from 'https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-debug-sink@esm/index.mjs';
```

<a name="debug-sink-stream"></a>

#### debugSinkStream( \[options,] \[clbk] )

Creates a [writable stream][writable-stream] for [debugging][node-debug] stream pipelines.

```javascript
import ENV from 'https://cdn.jsdelivr.net/gh/stdlib-js/process-env@esm/index.mjs';

// Set the `DEBUG` environment variable...
ENV.DEBUG = '*';

var stream = debugSinkStream({
    'name': 'my-stream'
});

stream.write( 'a' );
stream.write( 'b' );
stream.write( 'c' );
stream.end();
```

The function accepts the following `options`:

-   **name**: [debug][node-debug] namespace.
-   **objectMode**: specifies whether a [stream][stream] should operate in [objectMode][object-mode]. Default: `false`.
-   **highWaterMark**: specifies the `Buffer` level at which `write()` calls start returning `false`.
-   **decodeStrings**: specifies whether to encode strings as `Buffer` objects before writing data to a returned [stream][stream]. Default: `true`.
-   **defaultEncoding**: default encoding when not explicitly specified when writing data. Default: `'utf8'`.

To set [stream][stream] `options`,

```javascript
var opts = {
    'name': 'my-app',
    'objectMode': true,
    'highWaterMark': 64,
    'decodeStrings': false,
    'defaultEncoding': 'utf8'
};

var stream = debugSinkStream( opts );
```

By default, each `chunk` is logged as a JSON stringified `string`, along with the `chunk` index. For more control over logging behavior, provide a `callback`.

```javascript
function logger( debug, chunk, idx ) {
    debug( 'Received a new chunk...' );
    debug( 'Beep: %s', chunk.beep );
    debug( 'Boop: %s', chunk.boop );
}

var opts = {
    'name': 'my-pipeline'
};

var stream = debugSinkStream( opts, logger );
```

#### debugSinkStream.factory( \[options] )

Returns a `function` for creating [streams][writable-stream] which are identically configured according to provided `options`.

```javascript
var opts = {
    'objectMode': true,
    'highWaterMark': 64
};

var factory = debugSinkStream.factory( opts );
```

This method accepts the same `options` as [`debugSinkStream()`](#debug-sink-stream), **except** for `name`, which must be provided **explicitly**.

##### factory( name\[, clbk] )

Creates a [debug][node-debug] stream.

```javascript
var factory = debugSinkStream.factory();

var streams = [];
var i;

// Assign each stream to a separate debug namespace...
for ( i = 0; i < 10; i++ ) {
    streams.push( factory( 'stream '+i ) );
}
```

#### debugSinkStream.objectMode( \[options,] \[clbk] )

This method is a convenience function to create [streams][stream] which **always** operate in [objectMode][object-mode].

```javascript
var stream = debugSinkStream.objectMode({
    'name': 'beep-boop'
});

stream.write({
    'value': 'a'
});
stream.write({
    'value': 'b'
});
stream.write({
    'value': 'c'
});
stream.end();
```

This method accepts the same `options` as [`debugSinkStream()`](#debug-sink-stream); however, the method will **always** override the [objectMode][object-mode] option in `options`.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If the [`DEBUG`][node-debug] environment variable is **not** set, no data is logged.
-   Providing a `name` option is **strongly** encouraged, as the [`DEBUG`][node-debug] environment variable can be used to filter debuggers.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import parseJSON from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-parse-json@esm/index.mjs';
var transformFactory = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-transform' ).factory;
var debug = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-debug-sink' ).objectMode;

function parse( chunk, enc, clbk ) {
    clbk( null, parseJSON( chunk ) );
}

function pluck( chunk, enc, clbk ) {
    clbk( null, chunk.value );
}

function square( chunk, enc, clbk ) {
    var v = +chunk;
    clbk( null, v*v );
}

function toStr( chunk, enc, clbk ) {
    clbk( null, chunk.toString() );
}

function join( chunk, enc, clbk ) {
    clbk( null, chunk+'\n' );
}

// Create a factory for generating streams running in `objectMode`:
var tStream = transformFactory({
    'objectMode': true
});

// Create streams for each transform:
var s1 = tStream( parse );
var s2 = tStream( pluck );
var s3 = tStream( square );
var s4 = tStream( toStr );
var s5 = tStream( join );

// Create a writable stream for debugging the result of the transformations:
var ds = debug({
    'name': 'debugger'
});

// Create the pipeline:
s1.pipe( s2 )
    .pipe( s3 )
    .pipe( s4 )
    .pipe( s5 )
    .pipe( ds );

// Write data to the pipeline...
var v;
var i;
for ( i = 0; i < 100; i++ ) {
    v = '{"value":'+i+'}';
    s1.write( v, 'utf8' );
}
s1.end();

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/streams-node/debug`][@stdlib/streams/node/debug]</span><span class="delimiter">: </span><span class="description">transform stream for debugging stream pipelines.</span>
-   <span class="package-name">[`@stdlib/streams-node/inspect-sink`][@stdlib/streams/node/inspect-sink]</span><span class="delimiter">: </span><span class="description">writable stream for inspecting streamed data.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/streams-node-debug-sink.svg
[npm-url]: https://npmjs.org/package/@stdlib/streams-node-debug-sink

[test-image]: https://github.com/stdlib-js/streams-node-debug-sink/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/streams-node-debug-sink/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/streams-node-debug-sink/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/streams-node-debug-sink?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/streams-node-debug-sink.svg
[dependencies-url]: https://david-dm.org/stdlib-js/streams-node-debug-sink/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/streams-node-debug-sink/tree/deno
[umd-url]: https://github.com/stdlib-js/streams-node-debug-sink/tree/umd
[esm-url]: https://github.com/stdlib-js/streams-node-debug-sink/tree/esm
[branches-url]: https://github.com/stdlib-js/streams-node-debug-sink/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/streams-node-debug-sink/main/LICENSE

[stream]: https://nodejs.org/api/stream.html

[object-mode]: https://nodejs.org/api/stream.html#stream_object_mode

[writable-stream]: https://nodejs.org/api/stream.html

[node-debug]: https://www.npmjs.com/package/debug

<!-- <related-links> -->

[@stdlib/streams/node/debug]: https://github.com/stdlib-js/streams-node-debug/tree/esm

[@stdlib/streams/node/inspect-sink]: https://github.com/stdlib-js/streams-node-inspect-sink/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
