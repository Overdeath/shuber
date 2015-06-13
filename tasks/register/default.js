/*
module.exports = function (grunt) {
	grunt.registerTask('default', ['compileAssets', 'linkAssets',  'watch']);
};
*/

module.exports = function (grunt) {
  grunt.registerTask('default', [
    'compileAssets',
    'concat',
    'uglify',
    'cssmin',
    'linkAssetsBuildProd',
    'clean:build',
    'copy:build'
  ]);
};
