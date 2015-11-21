module.exports = function(grunt) {
  var config = grunt.file.readJSON('grunt-config.json');

  function loadGruntTask(name) {
    return require(config.tasksPath + name)(grunt, config);
  }

  // Project configuration.
  grunt.initConfig({
    clean: loadGruntTask('clean'),
    jshint: loadGruntTask('jshint'),
    copy: loadGruntTask('copy'),
    less: loadGruntTask('less'),
    watch: loadGruntTask('watch'),
    concat: loadGruntTask('concat'),
    babel: loadGruntTask('babel')
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-babel');

  grunt.registerTask('default', [
    'clean',
    'jshint:all',
    'copy',
    'less',
    'concat',
    'babel',
    'watch'
  ]);
};
