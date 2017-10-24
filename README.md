# js-svg-piano

Very small module for drawing a piano using js and svg

The point in using svg is that it is easy to scale multiple octaves
to fit exact in a single div container

## Install 

    npm install --save js-svg-piano

## Usage

~~~js
var p = require('js-svg-piano');
var elemID = 'piano-container';

var p = new piano(elemID, {
        octaves: 2,
        octaveBegin: 3
});

p.createPiano();
~~~

You can see [index.html](index.html) which includes the bundle built from [test.js](test.js)

You can see the example here: 

[https://diversen.github.io/js-svg-piano/](https://diversen.github.io/js-svg-piano/)

## Related

* js-css-piano [https://diversen.github.io/js-css-piano/](https://diversen.github.io/js-css-piano/)

## Build and watch example

    ./watch

## License

MIT © [Dennis Iversen](https://github.com/diversen)