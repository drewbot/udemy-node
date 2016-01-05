var express = require('express');
var app = express();

// you can use environment variables
// (variables declared outside of your app, perhaps on the hosting server's environment)
// to declare values within your app
// so here we are saying use the environment variable PORT or if there is none present port 3000
var port = process.env.PORT || 3000;

//
// Instances of middleware
//

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function(req, res, next) {
  console.log('Request URL: ' + req.url);
  // next method says to move on to the next middleware
  next();
});

// express method for recieving get methods to the '/' route and providing a response
// express knows to format accordingly
app.get('/', function(req, res) {
  // when the request for this page is made the markup below will be read and another request wil be made for the stylesheet at /assets/styles.css
  res.send('<html><head><link href=assets/styles.css type=text/css rel=stylesheet /></head><body><h1>Hello Lovey</h1></body></html>');
})

// setup generic person route
app.get('/person', function(req, res) {
  res.send('<html><head></head><body><h1>Hello IDless Person</h1></body></html>');
})

// person/id route will use matching to take any given sub-route (id passed) and apply to the id variable on req.params
app.get('/person/:id', function(req, res) {
  res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
})

app.get('/api', function(req, res) {
  res.json({firstname: 'John', lastname: 'Jacobs'});
})

app.listen(port);
