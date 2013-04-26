var readline = require('readline');

var googleapis = require('googleapis');
var OAuth2Client = googleapis.OAuth2Client;

// Client ID and client secret are available at
// https://code.google.com/apis/console
var CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID;
var CLIENT_SECRET = process.env.GOOGLE_OAUTH_CLIENT_SECRET;
var REDIRECT_URL = process.env.GOOGLE_OAUTH_REDIRECT_URL;

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getAccessToken(oauth2Client, callback) {
  // generate consent page url
  var url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: 'https://www.googleapis.com/auth/calendar'
  });

  console.log('Visit the url: ', url);
  rl.question('Enter the code here:', function(code) {

    // request access token
    oauth2Client.getToken(code, function(err, tokens) {
      // set tokens to the client
      // TODO: tokens should be set by OAuth2 client.
      oauth2Client.credentials = tokens;
      console.log(tokens);
      callback && callback();
    });
  });
}

function getUserProfile(client, authClient, userId, callback) {
  client
    .calendar.events.list({ calendarId: process.env.GOOGLE_CALENDAR_ID })
    .withAuthClient(authClient)
    .execute(callback);
}

function printUserProfile(err, events) {
  if (err) {
    console.log('An error occurred');
  } else {
    console.log(events);
  }
}

if (!module.parent) {
  // load google plus v1 API resources and methods
  googleapis
    .discover('calendar', 'v3')
    .execute(function(err, client) {

      var oauth2Client =
        new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

      // retrieve an access token
      getAccessToken(oauth2Client, function() {
        // retrieve user profile
        getUserProfile(
          client, oauth2Client, 'me', printUserProfile);
      });
  });
}