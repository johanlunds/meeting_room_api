var coffee = require('iced-coffee-script');
var express = require('express');
var CalendarController = require('./app/controllers/calendar_controller');
var app = express();

app.use(express.logger());

app.get('/hello.txt', function(req, res){
  new CalendarController().helloWorld(req, res);
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});