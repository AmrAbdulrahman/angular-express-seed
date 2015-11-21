var fs = require('fs'),
    path = require('path');

module.exports = function(dir) {
  return function(req, res) {
    var currentDir =  dir,
        query = req.params.query || '';

    if (query) {
      currentDir = path.join(dir, query);
    }

    fs.readdir(currentDir, function (err, files) {
      if (err) {
        throw err;
      }

      var data = [];

      files
        .forEach(function (file) {
          try {
            var isDirectory = fs.statSync(path.join(currentDir, file)).isDirectory();

            if (isDirectory) { // dir
              data.push({
                name: file,
                isDir: true,
                path: path.join(query, file)
              });
            } else { // file
              var ext = path.extname(file);

              data.push({
                name: file,
                ext: ext,
                isDir: false,
                path: path.join(query, file)
              });
            }
          } catch(e) {
            console.log(e);
          }

        });

      res.json(data);
    });
  };
};