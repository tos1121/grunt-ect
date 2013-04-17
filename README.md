# grunt-ect

## Getting Started

install via npm

    npm install git+ssh://git@bitbucket.org:2no/grunt-ect.git

and in your Gruntfile.js file:

    grunt.loadNpmTasks('grunt-ect');

## Usage

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
        ...
      },
      ...
    });

run with:

    grunt ect

