var src = require('./scripts').src;
var files = {};

for (var i=0; i<src.length; i++) {
  var key = src[i].replace('src', 'build');
  files[key] = src[i];
}

module.exports = function(grunt, config) {
  return {
    options: {
      presets: ['babel-preset-es2015']
    },
    dist: {
      files: {
        'build/js/app.js': 'build/js/es6-app.js'
      }
    },
    all: {
      files: files
    }
  };
};