module.exports = function(grunt, config) {
  return {
    options: {
      presets: ['babel-preset-es2015']
    },
    dist: {
      files: {
        'build/js/app.js': 'build/js/es6-app.js'
      }
    }
  };
};