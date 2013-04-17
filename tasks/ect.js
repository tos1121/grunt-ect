'use strict';

module.exports = function(grunt) {

	var path = require('path');
	var ECT  = require('ect');


	grunt.registerMultiTask('ect', 'generates an html file from an ect templates', function() {


		var	data      = this.data;
		var	pattern   = data.src;
		var dir       = data.dst;
		var done      = this.async;
		var options   = data.options;
		var status    = true;
		var variables = data.variables || {};
		var files     = grunt.file.expand(path.resolve(options.root || '', pattern));
		var ect       = new ECT(options || {});


		var render = function (src, dst) {

			if (!src || !dst) return false;
			if (!grunt.file.exists(src)) return false;

			var html = ect.render(src, variables);
			if (!html) return false;

			grunt.file.write(dst, html);
			if (grunt.file.exists(dst)) {
				log(src, dst);
				return true;
			}
			return false;
		};


		var log = function (src, dst) {
			if (!src && !dst) return false;
			grunt.log.ok(src+' was compiled to '+dst+' by grunt-ect');
		};


		var run = function () {
			var outcome;
			for (var key in files) {
				if (files.hasOwnProperty(key)) {
					
					var src = files[key];
					var dstFilename = path.basename(src, path.extname(src))+'.html';
					var dst = path.resolve(dir, dstFilename);
					
					var currentStatus = render(src, dst);
					outcome = (outcome) ? currentStatus : false;  
				}
			}
			return outcome;
		};


		var init = function () {
			try {
				status = run();
			} catch (e) {
				grunt.log.error(e);
			}
			done(status);
		}.bind(this)();


		return init;

	});
};
