'use strict';

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
  grunt.loadTasks('tasks');
};
