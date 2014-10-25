# grunt-ect

[![NPM](https://nodei.co/npm/grunt-ect-templates.png?downloads=true)](https://nodei.co/npm/grunt-ect-templates/)

Hi!

This tool generates html files from ect templates.

I spied the idea from [https://bitbucket.org/2no/grunt-ect](https://bitbucket.org/2no/grunt-ect), because I'm not entirely staged implementation. 
I decided to start with the addition of support patterns in the file names. In fact, I rewrote almost all the implementation.


## Getting Started

If you haven't used Grunt before, be sure to check out the Getting Started guide, as it explains how to create a Gruntfile as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

	npm install --save-dev grunt-ect-templates

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

	grunt.loadNpmTasks('grunt-ect-templates');

## Usage
```javascript
module.exports = function(grunt) {
  grunt.initConfig({
    ect: {
      test: {
        options: {
          ext: '.ect',
          root: 'tests/ect'
        },
        cwd: 'tests/ect',
        patterns:  ['**/page_*.ect'],
        dest: 'tests/compiled/'
      }
    }
  });
  
  grunt.task.registerTask('default', 'ect');
  grunt.loadNpmTasks('grunt-ect-templates');
};
```
run with:

	grunt ect

## Special object '__'

I need it that I can generate CSS classes by file basename.

*	`<%= @__.basename %>` — contains file basename. 
*	`<%= @__.filename %>` — contains file name.
