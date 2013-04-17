# grunt-ect

Hi!

This tool generates html files from ect templates.

I spied the idea from [https://bitbucket.org/2no/grunt-ect](), because I'm not entirely staged implementation. 
I decided to start with the addition of support patterns in the file names. In fact, I rewrote almost all the implementation.


## Getting Started

 install via npm

	npm install npm install git+ssh://git@github.com:shuvalov-anton/grunt-ect.git --save-dev

and in your Gruntfile.js file:

	grunt.loadNpmTasks('grunt-ect');

## Usage

	module.exports = function (grunt) {
		grunt.initConfig({
			ect: {
				task: {
					options: {
						root: 'ect-test/ect'
					},
					src:  'page_*.ect',
					dst: 'ect-test/'
				}
			}
		});
		grunt.task.registerTask('default', 'ect');
		grunt.loadNpmTasks('grunt-ect');
	};

run with:

	grunt ect

