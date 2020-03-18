var path = require('path');
var express = require('express');
var app = express();
var http = require('http').Server(app);
const JIFFServer = require('../lib/jiff-server');
new JIFFServer(http, { logs:true });

// Serve static files.
app.use('/', express.static(path.join(__dirname, '..', 'app')));
app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));
app.use('/lib/ext', express.static(path.join(__dirname, '..', 'lib', 'ext')));
http.listen(8080, function () {
  console.log('listening on *:8080');
});

console.log('Direct your browser to http://localhost:8080/client.html.');
console.log('To run a server-based party: node demos/vote/party <input');
console.log();
