'use strict';

module.exports = function(grunt)
{
  grunt.initConfig({
    ect: {
      top: {
        options: {
          root: 'test/ect',
        },
        src:  'page',
        dest: 'test/page.html',
        variables: {
          title : 'Hello, world!',
          id : 'main',
          links: [
            { name : 'Google', url : 'http://google.com/' },
            { name : 'Facebook', url : 'http://facebook.com/' },
            { name : 'Twitter', url : 'http://twitter.com/' }
          ],
          upperHelper : function (string) {
            return string.toUpperCase();
          }
        }
      },
    },
  });

  grunt.loadTasks('tasks');
};
