#!/usr/bin/env node

/*global require: true */
/*global process: true */

(function () {
	'use strict';

	var program = require('commander'),
		LESSCap = require('./LESSCap.js').LESSCap,
		package_json = require('./package.json'),
		fs = require('fs');

	program
		.usage('[file ...]')
		.version(package_json.version)
		.parse(process.argv);

	if (program.args.length > 0)
		for (var i = 0; i < program.args.length; i++)
			fs.createReadStream(program.args[i])
				.pipe(new LESSCap())
				.pipe(process.stdout);
	else
		process.stdin
			.pipe(new LESSCap())
			.pipe(process.stdout);

}());