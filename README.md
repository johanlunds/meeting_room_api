meeting_room_api
================

Web REST API built with Node.js and Google Calendar API to get meeting room calendar events and change them.


Deployed at: https://apoex-meeting-room-api.herokuapp.com/

App expects these ENV-variables:

* GOOGLE_OAUTH_CLIENT_ID
* GOOGLE_OAUTH_CLIENT_SECRET
* GOOGLE_OAUTH_REDIRECT_URL
* GOOGLE_OAUTH_ACCESS_TOKEN
* GOOGLE_CALENDAR_ID

Resources:

* Google Calendar API doc: https://developers.google.com/google-apps/calendar/
* Google API Console
* https://github.com/visionmedia/express/blob/master/examples/web-service/index.js
* https://github.com/visionmedia/express/tree/master/examples/mvc
* https://github.com/visionmedia/express/tree/master/examples/params
* https://github.com/visionmedia/express/tree/master/examples/resource
* https://github.com/visionmedia/express/tree/master/examples/route-map
* https://github.com/visionmedia/express/tree/master/examples/route-middleware
* https://github.com/visionmedia/express/tree/master/examples/route-separation
* Heroku Mongoose: https://devcenter.heroku.com/articles/nodejs-mongoose

Stuff to look into:

* Grunt or Cake
* Yeoman
* Mocha (compare to Jasmine?). Martin: Karma for Angular.js
* Martin: Bower or Component?
