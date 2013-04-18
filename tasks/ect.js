'use strict';

module.exports = function(grunt) {

	var path = require('path');
	var ECT  = require('ect');


	grunt.registerMultiTask('ect', 'generates an html file from an ect templates', function() {


		var	data      = this.data;
		var dir       = data.dst;
		var done      = this.async;
		var options   = data.options;
		var root      = options.root;
		var src       = data.src;
		var status    = true;
		var variables = data.variables || {};
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
			var str = src+' was compiled to '+dst+' by grunt-ect';
			grunt.log.ok(str);
		};


		var compile = function (files) {
			// returns false if at least one iteration fails
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

		var getFilesList = function (root, src) {
			var pattern;
			var files;

			if (typeof src === 'string') {
				pattern = path.resolve(root || '', src);
				files   = grunt.file.expand(pattern);
			} else if (typeof src === 'object') {
				files = [];
				for (var key in src) {
					if (src.hasOwnProperty(key)) {
						var _files = []; 
						pattern = path.resolve(root || '', src[key]);
						_files = grunt.file.expand(pattern);
						files = (_files) ? files.concat(_files) : files;
					}
				}
			}
			return files;
		};


		var init = function () {
			var files = getFilesList(root, src);
			try {
				status = compile(files);
			} catch (e) {
				grunt.log.error(e);
			}
			done(status);
		}.bind(this)();

		return init;

	});
};
