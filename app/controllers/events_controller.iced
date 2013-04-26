googleapis = require('googleapis')
OAuth2Client = googleapis.OAuth2Client

class EventsController

  CLIENT_ID:     process.env.GOOGLE_OAUTH_CLIENT_ID
  CLIENT_SECRET: process.env.GOOGLE_OAUTH_CLIENT_SECRET
  REDIRECT_URL:  process.env.GOOGLE_OAUTH_REDIRECT_URL
  ACCESS_TOKEN:  process.env.GOOGLE_OAUTH_ACCESS_TOKEN

  @googleClient: undefined

  googleClient: ->
    @constructor.googleClient

  oauth2Client: ->
    unless @_oauth2Client
      @_oauth2Client = new OAuth2Client(@CLIENT_ID, @CLIENT_SECRET, @REDIRECT_URL)
      @_oauth2Client.credentials = 
        access_token: @ACCESS_TOKEN
        token_type: 'Bearer'
    @_oauth2Client

  get: (req, res) ->

    await @_getEventsFromGoogleApi(@googleClient(), @oauth2Client(), defer err, events)
    res.send(err or events)

  # Private
  _getEventsFromGoogleApi: (client, authClient, callback) ->
    client
      .calendar.events.list(calendarId: process.env.GOOGLE_CALENDAR_ID)
      .withAuthClient(authClient)
      .execute(callback)



module.exports = EventsController