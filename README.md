# grunt-ect

Hi!

This tool generates html files from ect templates.

I spied the idea from [https://bitbucket.org/2no/grunt-ect](https://bitbucket.org/2no/grunt-ect), because I'm not entirely staged implementation. 
I decided to start with the addition of support patterns in the file names. In fact, I rewrote almost all the implementation.


## Getting Started

 install via npm

	npm install --save-dev grunt-ect-templates

and in your Gruntfile.js file:

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
