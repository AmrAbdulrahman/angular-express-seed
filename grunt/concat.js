module.exports = function(grunt, config) {
  return {
    options: {
      separator: '\n'
    },
    dist: {
      src: require('./scripts').src,
      dest: 'build/js/es6-app.js'
    }
  };  
};