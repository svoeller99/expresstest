var express = require('express');
var logrequest = require('./util/logrequest');
var app = express();

app.get('/hello', function(req, res){
  logrequest(req);

  var body = 'Hello World';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', Buffer.byteLength(body));
  res.end(body);
});

app.listen(9000);
console.log('Listening on port 9000');