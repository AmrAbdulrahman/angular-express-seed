module.exports = function(grunt, config) {
  return {
    components: {
      src: config.bower.src,
      dest: config.build,
      expand: true
    },
    ngApp: {
      cwd: config.src,
      src: config.ngApp.src,
      dest: config.build,
      expand: true
    },
    index: {
      cwd: config.src,
      src: 'index.html',
      dest: config.build,
      expand: true
    }
  };
};