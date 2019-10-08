"use strict";

var path = require('path');

var express = require('express');

var app = express();
var port = process.env.PORT || 5000;
app.use(express["static"]('public')).use('/dist/client', express["static"]('dist/client'));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});
app.listen(port, function () {
  return console.log("server.js: http://localhost:".concat(port));
}); // eslint-disable-line no-console