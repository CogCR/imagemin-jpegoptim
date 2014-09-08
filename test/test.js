'use strict';

var fs = require('fs');
var Imagemin = require('imagemin');
var isJpg = require('is-jpg');
var jpegoptim = require('../');
var path = require('path');
var test = require('ava');

test('should optimize a JPG', function (t) {
	t.plan(4);

	var imagemin = new Imagemin()
		.src(path.join(__dirname, 'fixtures/test.jpg'))
		.use(jpegoptim());

	imagemin.optimize(function (err, file) {
		t.assert(!err);

		fs.stat(imagemin.src(), function (err, stats) {
			t.assert(!err);
			t.assert(file.contents.length < stats.size);
			t.assert(isJpg(file.contents));
		});
	});
});
