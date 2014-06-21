/*global exports: true */
/*global require: true */

(function () {
	'use strict';

	var fs = require('fs');

	module.exports.LESSCap = function (path, callback) {
		this.in_stream = this.initializeStream(path);
		this.done = callback;
		this.current_data = '';

		// Should be replaced with writable stream
		this.result = '';
	};

	module.exports.LESSCap.process = function (path, callback) {
		return new module.exports.LESSCap(path, callback);
	};

	module.exports.LESSCap.prototype.initializeStream = function (path) {
		var readStream = fs.createReadStream(path),
			data = '';

		readStream.on('open', function () {
			console.log('Starting');
		});

		readStream.on('error', function(err) {
			this.sourceError(err);
		}.bind(this));

		readStream.on('data', function (chunk) {
			this.sourceData(chunk);
		}.bind(this));

		readStream.on('end', function () {
			this.sourceEnd();
		}.bind(this));

		return readStream;
	};

	module.exports.LESSCap.prototype.sourceData = function (chunk) {
		this.current_data += chunk;
	};

	module.exports.LESSCap.prototype.sourceEnd = function () {
		this.result = this.current_data;
		this.done(null, this.result);
	};

	module.exports.LESSCap.prototype.sourceError = function (error) {
		this.done(error);
	};

	module.exports.LESSCap.mixins = [
	{
		code: 'align-content',
		escaped: false,
	},
	{
		code: 'align-items',
		escaped: false,
	},
	{
		code: 'align-self',
		escaped: false,
	},
	{
		code: 'animation',
		escaped: false,
	},
	{
		code: 'animation-delay',
		escaped: false,
	},
	{
		code: 'animation-direction',
		escaped: false,
	},
	{
		code: 'animation-duration',
		escaped: false,
	},
	{
		code: 'animation-fill-mode',
		escaped: false,
	},
	{
		code: 'animation-iteration-count',
		escaped: false,
	},
	{
		code: 'animation-name',
		escaped: false,
	},
	{
		code: 'animation-play-state',
		escaped: false,
	},
	{
		code: 'animation-timing-function',
		escaped: false,
	},
	{
		code: 'appearance',
		escaped: false,
	},
	{
		code: 'backface-visibility',
		escaped: false,
	},
	{
		code: 'background-clip',
		escaped: false,
	},
	{
		code: 'background-image',
		escaped: false,
	},
	{
		code: 'background-origin',
		escaped: false,
	},
	{
		code: 'background-size',
		escaped: false,
	},
	{
		code: 'blur',
		escaped: false,
	},
	{
		code: 'border-bottom-left-radius',
		escaped: false,
	},
	{
		code: 'border-bottom-right-radius',
		escaped: false,
	},
	{
		code: 'border-image',
		escaped: false,
	},
	{
		code: 'border-radius',
		escaped: false,
	},
	{
		code: 'border-top-left-radius',
		escaped: false,
	},
	{
		code: 'border-top-right-radius',
		escaped: false,
	},
	{
		code: 'box-shadow',
		escaped: false,
	},
	{
		code: 'box-sizing',
		escaped: false,
	},
	{
		code: 'brightness',
		escaped: false,
	},
	{
		code: 'calc',
		escaped: true,
	},
	{
		code: 'column-count',
		escaped: false,
	},
	{
		code: 'column-gap',
		escaped: false,
	},
	{
		code: 'column-rule',
		escaped: false,
	},
	{
		code: 'column-width',
		escaped: false,
	},
	{
		code: 'columns',
		escaped: false,
	},
	{
		code: 'contrast',
		escaped: false,
	},
	{
		code: 'display',
		escaped: false,
	},
	{
		code: 'drop-shadow',
		escaped: false,
	},
	{
		code: 'filter',
		escaped: false,
	},
	{
		code: 'flex',
		escaped: false,
	},
	{
		code: 'flex-basis',
		escaped: false,
	},
	{
		code: 'flex-direction',
		escaped: false,
	},
	{
		code: 'flex-grow',
		escaped: false,
	},
	{
		code: 'flex-shrink',
		escaped: false,
	},
	{
		code: 'flex-wrap',
		escaped: false,
	},
	{
		code: 'font-face',
		escaped: false,
	},
	{
		code: 'grayscale',
		escaped: false,
	},
	{
		code: 'hue-rotate',
		escaped: false,
	},
	{
		code: 'hyphens',
		escaped: false,
	},
	{
		code: 'invert',
		escaped: false,
	},
	{
		code: 'justify-content',
		escaped: false,
	},
	{
		code: 'keyframes',
		escaped: true,
	},
	{
		code: 'opacity',
		escaped: false,
	},
	{
		code: 'order',
		escaped: false,
	},
	{
		code: 'perspective',
		escaped: false,
	},
	{
		code: 'perspective-origin',
		escaped: false,
	},
	{
		code: 'placeholder',
		escaped: false,
	},
	{
		code: 'rotate',
		escaped: false,
	},
	{
		code: 'rotate3d',
		escaped: false,
	},
	{
		code: 'rotateX',
		escaped: false,
	},
	{
		code: 'rotateY',
		escaped: false,
	},
	{
		code: 'rotateZ',
		escaped: false,
	},
	{
		code: 'saturate',
		escaped: false,
	},
	{
		code: 'scale',
		escaped: false,
	},
	{
		code: 'scale3d',
		escaped: false,
	},
	{
		code: 'scaleX',
		escaped: false,
	},
	{
		code: 'scaleY',
		escaped: false,
	},
	{
		code: 'scaleZ',
		escaped: false,
	},
	{
		code: 'selection',
		escaped: true,
	},
	{
		code: 'sepia',
		escaped: false,
	},
	{
		code: 'size',
		escaped: false,
	},
	{
		code: 'skew',
		escaped: false,
	},
	{
		code: 'skewX',
		escaped: false,
	},
	{
		code: 'skewY',
		escaped: false,
	},
	{
		code: 'transform',
		escaped: false,
	},
	{
		code: 'transform-origin',
		escaped: false,
	},
	{
		code: 'transform-style',
		escaped: false,
	},
	{
		code: 'transition',
		escaped: false,
	},
	{
		code: 'transition-delay',
		escaped: false,
	},
	{
		code: 'transition-duration',
		escaped: false,
	},
	{
		code: 'transition-property',
		escaped: false,
	},
	{
		code: 'transition-timing-function',
		escaped: false,
	},
	{
		code: 'translate',
		escaped: false,
	},
	{
		code: 'translate3d',
		escaped: false,
	},
	{
		code: 'translateX',
		escaped: false,
	},
	{
		code: 'translateY',
		escaped: false,
	},
	{
		code: 'translateZ',
		escaped: false,
	},
	{
		code: 'user-select',
		escaped: false,
	},
	];

	module.exports.LESSCap.process('test.lesscap', function (error, result) {
		if (error) {
			console.log(error);
			return;
		}

		console.log(result);
	});

}());