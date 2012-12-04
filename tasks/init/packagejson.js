exports.description = 'A bare bones package.json file.';

exports.warnOn = '*';

exports.template = function(grunt, init, done) {
  grunt.helper('prompt', {}, [
    grunt.helper('prompt_for', 'name')
  ], function(err, props) {
    var files = init.filesToCopy(props);
    init.copyAndProcess(files, props);
    done();
  });
};