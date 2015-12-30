var eventEmitter = require('events');
var util = require('util');

function Greetr() {
  this.greeting = 'Hello World!';
}

// Any instances of Greetr will have access to eventEmitter's properties
// Inherit BEFORE setting properties to the recipient's prototype
// because the .inherits method will reset the prototype
util.inherits(Greetr, eventEmitter);
// Now we can add the event emitter
Greetr.prototype.greet = function(data) {
  console.log(this.greeting + ': ' + data);
  // emit the greet event when this method is called
  this.emit('greet', data);
}

// Has access to all of the methods and properties of Greetr and events
var greetr1 = new Greetr();

// Set up a listener for the greet event
greetr1.on('greet', function(data){
  console.log('Someone greeted!: ' + data);
})

greetr1.greet('Tony');
