module.exports = function(grunt, config) {
  return {
    all: [
      config.js.src
    ],
    options: grunt.file.readJSON('.jshintrc')
  };
};