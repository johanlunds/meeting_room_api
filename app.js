var coffee = require('iced-coffee-script');
var express = require('express');
var googleapis = require('googleapis');
var EventsController = require('./app/controllers/events_controller');

var app = express();

app.use(express.logger());

// TODO: restrict access to OUR API with api keys. see Express examples.

app.get('/events', function(req, res){
  res.setHeader('Access-Control-Allow-Origin', '*');
  new EventsController().get(req, res);
});


function startApp() {
  var port = process.env.PORT || 3000;
  app.listen(port, function() {
    console.log("Listening on " + port);
  });
}

// PRepare some things before app can start
googleapis
  .discover('calendar', 'v3')
  .execute(function(err, client) {

    EventsController.googleClient = client;

    startApp();
});