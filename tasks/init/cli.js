var fs = require('fs');
var exec = require('child_process').exec;

exports.description = 'A quick cli boilerplat.';

exports.warnOn = '*';

exports.template = function(grunt, init, done) {
  
  grunt.helper('prompt', {}, [
    grunt.helper('prompt_for', 'name')
  ], function(err, props) {
      var files = init.filesToCopy(props);
      init.copyAndProcess(files, props);
      
      grunt.log.ok('Setting the proper permissions for your binary.');
      fs.chmodSync('bin/'+props.name, '755');
      
      grunt.log.ok('Installing dependencies and linking your binary.');
      exec('npm install && npm link', function(err, stdout, stderr) {
        grunt.log.write(stdout);
        
        if(err || stderr) {
          grunt.log.error(err || stderr);
        }
      });
  });
};