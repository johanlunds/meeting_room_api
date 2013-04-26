
class CalendarController
  get: (req, res) ->
    res.send JSON.stringify({helloWorld: 'hopp'})


module.exports = CalendarController