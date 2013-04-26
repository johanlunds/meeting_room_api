var express = require('express');
//var Point = require('./app/helloworld');
var app = express();

app.use(express.logger());

app.get('/hello.txt', function(req, res){
  res.send('Hello World');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});