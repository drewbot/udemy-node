// my emitter (in the same directory)
var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function() {
  console.log('someone somewhere said hello');
})

emtr.on('greet', function() {
  console.log('a greet occurred');
})

emtr.on('greet2', function() {
  console.log('you know it\'s hot out too');
})

console.log('hello');
emtr.emit('greet');

console.log('It\'s hot out');
emtr.emit('greet2');
