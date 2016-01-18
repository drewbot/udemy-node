var express = require('express');

var htmlController = require('./controllers/html-controller');
var apiController = require('./controllers/api-controller');
// var mysql = require('mysql');
var mongoose = require('mongoose');

var app = express();

// you can use environment variables
// (variables declared outside of your app, perhaps on the hosting server's environment)
// to declare values within your app
// so here we are saying use the environment variable PORT or if there is none present use port 3000
var port = process.env.PORT || 3000;

mongoose.connect('mongodb://drewbot:test@ds047305.mongolab.com:47305/node-udemy-course');

var Schema = mongoose.Schema;

var personSchema = new Schema({
  firstname: String,
  lastname: String,
  address: String
});

var Person = mongoose.model('Person', personSchema);

var john = Person({
  firstname: 'John',
  lastname: 'Jacobs',
  address: '555 Boomtown Rd.'
});

john.save(function(err) {
  if (err) throw err;
  console.log('person saved!');
});

var jane = Person({
  firstname: 'Jane',
  lastname: 'Morgandorfer',
  address: '123 Bangtree Blvd.'
});

jane.save(function(err) {
  if (err) throw err;
  console.log('person saved!');
});


//
// Instances of middleware
//

// place files in public to /assets folder on the server
app.use('/assets', express.static(__dirname + '/public'));

// any time anything including or after the '/' route is used console log the url being requested
app.use('/', function(req, res, next) {
  console.log('Request URL: ' + req.url);

  // get all the users (return entire object "{}")
  Person.find({}, function(err, users) {
    if (err) throw err;
    // object of all users
    console.log(users);
  });

  // next method says to move on to the next middleware
  next();
});


htmlController(app);
apiController(app);

app.listen(port);
