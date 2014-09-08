# imagemin-jpegoptim [![Build Status](http://img.shields.io/travis/imagemin/imagemin-jpegoptim.svg?style=flat)](https://travis-ci.org/imagemin/imagemin-jpegoptim) [![Build status](https://ci.appveyor.com/api/projects/status/dd2mjdl1lhqjj6u7)](https://ci.appveyor.com/project/ShinnosukeWatanabe/imagemin-jpegoptim)

> jpegoptim [imagemin](https://github.com/imagemin/imagemin) plugin


## Install

```sh
$ npm install --save imagemin-jpegoptim
```


## Usage

```js
var Imagemin = require('imagemin');
var jpegoptim = require('imagemin-jpegoptim');

var imagemin = new Imagemin()
	.src('foo.jpg')
	.dest('foo-optimized.jpg')
	.use(jpegoptim({ progressive: true }));

imagemin.optimize();
```


## Options

### progressive

Type: `Boolean`  
Default: `false`

Lossless conversion to progressive.


## License

MIT © [imagemin](https://github.com/imagemin)
