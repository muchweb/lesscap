#!/usr/bin/env node

/*global require: true */
/*global process: true */

(function () {
	'use strict';

	var program = require('commander'),
		LESSCap = require('./index.js'),
		path = process.cwd(),
		package_json = require('./package.json');

	program
		.usage('[options] <working directory>')
		.version(package_json.version)
		.option('-f, --file [filename]', 'specify file name')
		.parse(process.argv);

	new LESSCap(program.file);

}());