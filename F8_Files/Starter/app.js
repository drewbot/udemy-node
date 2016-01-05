var fs = require('fs');

// since the greet file is in the same directory as the app
// use __dirname + relative path to access the file
// It will concatenate to the full path
// because I'm accessing a file on my local system it comes in binary
// I specify encoding method (utf8) to get the string back
// This method doesn't allow the app to move forward until it's loaded
// synchronous
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

// this method allows the event loop to run simultaneously and other operations to be performed
// (asynchronous)
// can be run without 'utf8', which will return a buffer with hexidecimal output of file
// <Buffer 48 65 6c 6c 6f 20 77 6f 72 6c 64 21>
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
  console.log(data);
});

console.log('Done!');

// Hello World!   (synchronous)
// Done!
// Hello World!   (asynchronous)
