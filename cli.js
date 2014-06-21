#!/usr/bin/env node

/*global require: true */
/*global process: true */

(function () {
	'use strict';

	var program = require('commander'),
		LESSCap = require('./LESSCap.js').LESSCap,
		path = process.cwd(),
		package_json = require('./package.json');

	program
		.usage('[options] <file ...>')
		.version(package_json.version)
		.parse(process.argv);

	for (var i = 0; i < program.args.length; i++)
		LESSCap.process(program.args[i], function (error, result) {
			if (error) {
				console.log(error);
				return;
			}
			console.log(result);
		});

}());