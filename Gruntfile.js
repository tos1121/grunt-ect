'use strict';

module.exports = function(grunt)
{
  grunt.initConfig({
    ect: {
      test: {
        options: {
          ext: '.ect',
          root: 'tests/ect',
          open: '{{',
          close: '}}'
        },
        src:  ['pages-ect/page_*.ect','other-pages-ect/page_*.ect'],
        dst: 'tests/'
      }
    }
  });

  grunt.task.registerTask('default', 'ect');
  grunt.loadTasks('tasks');
};
