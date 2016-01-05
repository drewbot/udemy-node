
// write plain text to client sending readable request
// var http = require('http');
//
// // create a new server instance
// // server object is an event emitter
// // callback is an event listener
// // to be invoked when a request occurs
// // passed two objects: request and a stream (req, res)
// http.createServer(function(req, res) {
//   // response starts with head
//   // start with status code and header object
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   // send body (could use a send method but we're just saying "the last thing you send is:")
//   res.end('Helo World!\n');  // new line is a good nd proper way to end your data
// // give a port and address to send to  ('127.0.0.1' is a standard localhost)
// // so browser makes request to localhost:1337 and response is sent there
// }).listen(1337, '127.0.0.1');


// // render html template
// var http = require('http');
// var fs = require('fs');
//
// http.createServer(function(req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   // get the index.html synchronously
//   var html = fs.readFileSync(__dirname + '/index.html')
//   // when done set var html as the response body
//   res.end(html);
// }).listen(1337, '127.0.0.1');


// // render html template with dynamic content
// var http = require('http');
// var fs = require('fs');
//
// http.createServer(function(req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   // get the index.html synchronously
//   // in order to use the dynamic content in the template we need to make html a string by adding encoding type ('utf8')
//   var html = fs.readFileSync(__dirname + '/index.html', 'utf8')
//
//   var message = 'Hello World!';
//   html = html.replace('{Message}', message);
//
//   res.end(html);
// }).listen(1337, '127.0.0.1');


// // render html template
// var http = require('http');
// var fs = require('fs');
//
// http.createServer(function(req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   fs.createReadStream(__dirname + '/index.html').pipe(res);
// }).listen(1337, '127.0.0.1');


// outputting json
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  // setting up routes with if statement
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if (req.url === '/api') {
    // 'application/json' is the json mime type
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var obj = {
      firstname: 'Jimmy',
      lastname: 'Corn'
    }
    // serialize the object data to json format to be retrieved by a client which will deserialize back to object format
    res.end(JSON.stringify(obj));
  } else {
    res.writeHead(404);
    res.end();
  }
}).listen(1337, '127.0.0.1');
