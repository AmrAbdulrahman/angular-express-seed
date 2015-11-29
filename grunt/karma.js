module.exports = function(grunt, config) {
  return {
    unit: {
      options: {
        frameworks: ['jasmine'],
        singleRun: true,
        browsers: ['PhantomJS'],
        files: require('./scripts').karma
      }
    }
  };
};