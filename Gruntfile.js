'use strict';

module.exports = function(grunt) {
  // autoload tasks
  require('load-grunt-tasks')(grunt);
  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    clean: {
      files: ['dist/*']
    },
    concat: {
      options: {
        
      },
      js: {
        src: ['vendor/angularjs/angular.min.js', 'vendor/jquery/dist/jquery.js', 'bootstrap-sass/assets/javascripts/bootstrap.js', 'bootstrap-sass/assets/javascripts/bootstrap-sprockets.js', 'vendor/techno_demo/js/main.js'],
        dest: 'dist/js/all-concat.js',
      }
    },
    uglify: {
      my_target: {
        files: {
          'dist/js/all-min.js': ['dist/js/all-concat.js']
        }
      }
    }
  });

  // Default task.
  grunt.registerTask('default', ['clean', 'concat', 'uglify']);

};
