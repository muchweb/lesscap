/*global module: true */
/*global require: true */

(function () {
	'use strict';

	var stream = require('stream'),
		util = require('util');

	module.exports.LESSCap = function (options) {
		stream.Duplex.call(this, options);

		this.current_data = '';
		this.prefix = 'lh-';
	};

	util.inherits(module.exports.LESSCap, stream.Duplex);

	module.exports.LESSCap.prototype._write = function (chunk) {
		var string = chunk.toString('utf8');

		this.current_data += string;

		var parts = this.current_data.split('\n');

		while (parts.length > 1)
			this.processLine(parts.shift());

		this.current_data = parts[0];
	};

	module.exports.LESSCap.prototype._read = function () {
	};

	module.exports.LESSCap.prototype.processLine = function (line) {
		var line_out = line;

		for (var i = 0; i < module.exports.LESSCap.mixins.length; i++) {
			var start_search = module.exports.LESSCap.mixins[i].code,
				start_position = line.indexOf('\t' + start_search);
				
			if (start_position >= 0) {
				var start_position_mod = start_position + 1,
					center_search = ':',
					center_position = line.indexOf(center_search),
					center_position_end = center_position + center_search.length,
					end_search = ';',
					end_position = line.lastIndexOf(end_search);

				line_out = line.substr(0, start_position_mod);
				line_out += '.';
				line_out += this.prefix;
				line_out += line.substr(start_position_mod, start_search.length).trim();
				line_out += '(';
				if (module.exports.LESSCap.mixins[i].escaped)
					line_out += '~\'';
				line_out += line.substr(center_position_end, end_position - center_position_end).trim();
				if (module.exports.LESSCap.mixins[i].escaped)
					line_out += '\'';
				line_out += ');';
				break;
			}	
		}

		this.push(line_out + '\n');
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

}());