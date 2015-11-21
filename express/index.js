var express = require('express'),
  app = express(),
  conf = require('./express-config');

// index
app.use(express.static(conf.root + '/' + conf.serveFolder));
app.get('/', function(req, res) {
  res.sendFile(conf.index, {
    root: conf.root
  });
});

var server = app.listen(conf.port, function () {
  var host = server.address().address,
      port = server.address().port;

  console.log('App is up and running on http://%s:%s', host, port);
});
