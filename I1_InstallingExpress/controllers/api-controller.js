var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

module.exports = function(app) {
  app.get('api/person/:id', function(req, res) {
    // get data from database
  })

  app.post('api/person', jsonParser, function(req, res) {
    // save to database
  })

  app.delete('api/person/:id', function(req, res) {
    // delete from the database
  })

  /////////////////////////////////////////////////////////////////////////////
  // uncomment the ajax post on home to get the following response
  app.post('/personjson', jsonParser, function(req, res) {
    res.send('Thanks for the json data');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
  })

  app.get('/api', function(req, res) {
    // express has this built in method for converting a js object to json format
    res.json({firstname: 'John', lastname: 'Jacobs'});  // api of this json object
  })
}
