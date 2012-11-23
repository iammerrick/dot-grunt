var exec = require('child_process').exec;

exports.description = 'A Backbone.js project driven by Require.js';

exports.warnOn = '*';

exports.template = function(grunt, init, done) {
  grunt.helper('prompt', {}, [
    grunt.helper('prompt_for', 'name')
  ], function(err, props) {
    var files = init.filesToCopy(props);
    init.copyAndProcess(files, props);
    
    exec('npm install', function(err, stdout, stderr) {
      grunt.log.write(stdout);
      
      if(err || stderr) {
        grunt.log.error(err || stderr);
      }
    });
  });
};