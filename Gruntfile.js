'use strict';

module.exports = function(grunt) {
  // autoload tasks
  require('load-grunt-tasks')(grunt);
  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
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
