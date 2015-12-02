var express = require('express');
var app = express();

var path = require('path');
app.use(express.static(__dirname + '/'));
app.set('views', __dirname + '/');

app.get('/', function (req, res) {
  res.render('./index');
});

// var server = app.listen(3000, function () {
//   var host = server.address().address;
//   var port = server.address().port;
// });