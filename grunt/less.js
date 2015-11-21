module.exports = function() {
  return {
    options: {
      outputSourceFiles: true
    },
    app: {
      files: {
        'build/styles/css/app.css': 'src/styles/less/app.less'
      }
    }
  };
};