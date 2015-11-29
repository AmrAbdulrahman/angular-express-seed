module.exports = function(grunt, config) {
  return {
    unit: {
      options: {
        frameworks: ['jasmine'],
        singleRun: true,
        browsers: [
          'PhantomJS',
          'Chrome', 'ChromeNoSecurity',
          'Firefox', 'FirefoxDeveloper', 'FirefoxAurora', 'FirefoxNightly',
          'OperaClassic'
        ],
        files: require('./scripts').karma,
        customLaunchers: {
          ChromeNoSecurity: {
            base: 'Chrome',
            flags: ['--disable-web-security']
          }
        }
      }
    }
  };
};