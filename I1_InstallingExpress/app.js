var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

var hbs = exphbs.create({
    // Specify helpers which are only registered on this instance.
    helpers: {
        foo: function () { return 'FOO!'; },
        bar: function () { return 'BAR!'; }
    }
})

// you can use environment variables
// (variables declared outside of your app, perhaps on the hosting server's environment)
// to declare values within your app
// so here we are saying use the environment variable PORT or if there is none present port 3000
var port = process.env.PORT || 3000;

//
// Instances of middleware
//

app.use('/assets', express.static(__dirname + '/public'));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use('/', function(req, res, next) {
  console.log('Request URL: ' + req.url);
  // next method says to move on to the next middleware
  next();
});

// express method for recieving get methods to the '/' route and providing a response
// express knows to format accordingly
app.get('/', function(req, res) {
  // render the handlebars template at index.handlebars
  // when the request for this page is made the markup below will be read and another request wil be made for the stylesheet at /assets/styles.css
  res.render('home', {
    showTitle: true,
    // Override `foo` helper only for this rendering.
    helpers: {
        foo: function () { return 'foo.'; }
    }
  });
})

// setup generic person route
app.get('/person', function(req, res) {
  res.render('person', {id: 'No ID'});
})

// person/id route will use matching to take any given sub-route (id passed) and apply to the id variable on req.params
app.get('/person/:id', function(req, res) {
  res.render('person', {id: req.params.id});
})

app.get('/api', function(req, res) {
  res.json({firstname: 'John', lastname: 'Jacobs'});
})

app.listen(port);
