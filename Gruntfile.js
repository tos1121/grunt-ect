'use strict';

module.exports = function(grunt)
{
  grunt.initConfig({
    ect: {
      test: {
        options: {
          root: 'tests/ect'
        },
        src:  ['pages-ect/page_*.ect','other-pages-ect/page_*.ect'],
        // src:  'other-pages-ect/page_*.ect',
        dst: 'tests/'
      }
    }
  });

  grunt.task.registerTask('default', 'ect');
  grunt.loadTasks('tasks');
};
