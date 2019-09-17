var express = require("express");
var request = require("request");
var cors = require("cors");
var app = express();

app.use(cors());

var mockResponse = require("../mockdata/search");

app.post("/", function(req, res, next) {
  console.log(req);
  res.send({
    data: {
      search: mockResponse
    }
  });
});

app.listen(80, function() {
  console.log("CORS-enabled web server listening on port 80");
});
