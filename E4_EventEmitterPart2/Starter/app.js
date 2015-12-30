// Node's emitter
var Emitter = require('events');
var eventConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function() {
  console.log('Someone somewhere said hello');
})

emtr.on(eventConfig.FILESAVED, function() {
  console.log('A file was saved');
})

emtr.on(eventConfig.FILEOPENED, function() {
  console.log('A file was opened');
})

console.log('Hello');
emtr.emit(eventConfig.GREET);

console.log('I saved a file');
emtr.emit(eventConfig.FILESAVED);

console.log('I opened a file');
emtr.emit(eventConfig.FILEOPENED);
