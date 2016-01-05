var fs = require('fs');
var zlib = require('zlib');

// // Events.EventEmitter.Stream.ReadStream has EventEmitter's properties and Stream's
// // readable is a read only stream which takes the contents of greet.txt
// // and encodes to utf8
// // highWaterMark indicates how big you want your buffer to be (16 * 1024 designamtes 16 kilobytes)
// var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });
//
// // writable is a writable stream
// var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');
//
// // readable is also an event emitter
// // listening to the data event starts every stream listening
// // at every data chunk the chunk's length will be printed and the chunk itself is written to copy
// readable.on('data', function(chunk) {
// 	console.log(chunk.length);
// 	writable.write(chunk);
// });



// // using pipe instead of on listener
// var readable = fs.createReadStream(__dirname + '/greet.txt');
//
// var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');
//
// readable.pipe(writable);



//
var readable = fs.createReadStream(__dirname + '/greet.txt');

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

var compressed = fs.createWriteStream(__dirname + '/greetcopy.txt.gz');

// every time gzip receives a chunk it compresses it
// (compressing stream)
var gzip = zlib.createGzip();

readable.pipe(writable);

// pipe to gzip fpr compression, then pipe to compressed
// (method chaining) pipe returns the object passed to it so it can then be passed again
readable.pipe(gzip).pipe(compressed);
