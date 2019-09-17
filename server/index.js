var express = require("express");
var request = require("request");
var cors = require("cors");
var app = express();

app.use(cors());

var mockResponse = require("../mockdata/search");

app.post("/", function(req, res, next) {
  console.log(
    ">> POST INCOMING! ~~ Beep, boop, pretend to be a handshake (800ms timeout) <<<"
  );

  setTimeout(() => {
    res.send({
      data: {
        search: mockResponse
      }
    });
    console.log(">>> Fake Data sent, wheee <<<");
  }, 800);
});

app.listen(80, function() {
  console.log("CORS-enabled web server listening on port 80");
});
