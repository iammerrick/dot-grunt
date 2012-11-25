/*global module:false*/
module.exports = function(grunt) {

  grunt.initConfig({
    lint: {
      files: ['grunt.js', 'src/app/**/*.js', 'src/config.js', 'tests/app/**/*.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint test'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        require: true,
        define: true,
        requirejs: true,
        describe: true,
        expect: true,
        it: true
      }
    },
    requirejs: {
      compile: {
        options: {
          appDir: 'src',
          baseUrl: 'app',
          mainConfigFile: 'src/config.js',
          modules: [
            { name: 'main' }
          ],
          dir: 'build'
        }
      }
    },
    
    mocha: {
      all: ['tests/index.html']
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-mocha');
  
  
  grunt.registerTask('test', 'mocha');
  grunt.registerTask('build', 'lint test requirejs');
  // Default task.
  grunt.registerTask('default', 'build');

};
