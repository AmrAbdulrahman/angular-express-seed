module.exports = function(grunt, config) {
  return {
    scripts: {
      files: config.js.src,
      tasks: [
        'jshint:all',
        'concat',
        'babel'
      ],
      options: {
        interrupt: true,
      }
    },
    styles: {
      files: config.styles.src,
      tasks: [
        'less'
      ],
      options: {
        interrupt: true,
      }
    },
    html: {
      files: config.html.src,
      tasks: [
        'copy'
      ]
    }
  };
};