var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var hbs = exphbs.create({
    // Specify helpers which are only registered on this instance.
    helpers: {
        foo: function () { return 'FOO!'; },
        bar: function () { return 'BAR!'; }
    }
});

module.exports = function(app) {

  app.engine('handlebars', hbs.engine);
  app.set('view engine', 'handlebars');

  // express method for receiving get methods to the '/' route and providing a response
  // express knows to format accordingly
  app.get('/', function(req, res) {
    // render the handlebars template at home.handlebars
    // when the response with this page is made the template below will be read by the browser and another request will be made for the stylesheet at /assets/styles.css
    res.render('home', {  // home.handlebars
      showTitle: true,
      // Override `foo` helper only for this rendering.
      helpers: {
          foo: function () { return 'foo.'; }
      }
    });
  })

  // setup generic person route
  app.get('/person', function(req, res) {
    // obect being passed as the second argument applies to the template
    res.render('person', {id: 'No ID'});  // person.handlebars
  })

  // person/id route will use matching to take any given sub-route (id passed) and apply to the id variable on req.params
  app.get('/person/:id', function(req, res) {
    // added query string property.  now when a query string is passed it is saved to req.query
    // and accessible in the template with the qstr property
    // EX: http://localhost:3000/person/Tara?qstr=1234
    res.render('person', { id: req.params.id, qstr: req.query.qstr });  // person.handlebars
  })

  // submit to the form on home and get the following response / console.log (terminal)
  app.post('/person', urlencodedParser, function(req, res) {
    res.send(`Thank You ${req.body.firstname} ${req.body.lastname}`);
    console.log(req.body.firstname);
    console.log(req.body.lastname);
  })
}
