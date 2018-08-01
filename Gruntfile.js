module.exports = function (grunt) {
  // Build customizations would be left up to developer to implement.
  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-dojo');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.loadNpmTasks('grunt-sass');

  grunt.initConfig({
    eslint: {
      options: {
        config: '.eslintrc.json'
      },
      target: [
        'src/sas/**/*.js',
        "!src/sas/**/package.js"
      ]
    },
    clean: {
      build: {
        src: ['dist/']
      },
      uncompressed: {
        src: [
          'dist/**/*.uncompressed.js'
        ]
      },
      leanDist: {
        src: [
          'dist/build-report.txt' // That misplaced monstrosity (~10 M).
        ]
      }
    },
    copy: {
      main: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['built.html'],
          dest: './dist/',
          rename: function (dest, src) {
            return dest + 'index.html';
          }
        }, {
          expand: true,
          cwd: 'src/',
          src: ['examples.html'],
          dest: './dist/'
        }]
      },
      debug: {
        files: [{
            expand: true,
            cwd: 'src/',
            src: ['ArcGISVisualizationBridgeCDN.html'],
            dest: './dist/'
          },
          {
            expand: true,
            cwd: 'src/',
            src: ['.htaccess'],
            dest: './dist/'
          }
        ]
      }
    },
    dojo: {
      dist: {
        options: {
          releaseDir: '../dist'
        }
      },
      options: {
        profile: 'build.profile.js',
        dojo: 'src/dojo/dojo.js',
        load: 'build',
        cwd: './',
        basePath: './src'
      }
    },

    sass: {
      options: {
        outputStyle: 'compressed'
      },
      dist: {
        files: [{
          expand: true,
          src: ['src/**/*.scss', '!src/esri/themes/base/**'],
          ext: '.css'
        }]
      }
    }
  });

  grunt.registerTask('build', ['clean:build', 'dojo', 'eslint', 'copy:main', 'clean:uncompressed', 'clean:leanDist']);
  grunt.registerTask('buildDebug', ['clean:build', 'dojo', 'eslint', 'copy', 'clean:leanDist']);
  grunt.registerTask('styles', ['sass']);

};
