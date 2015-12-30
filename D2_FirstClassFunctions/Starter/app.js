// function statement
function greet() {
  console.log('hi');
}
greet();

// functions are objects
// functions are first class
// because funtcions are first class they
// Are like all other types (strings, objects, arrays, etc..)
// Can be stored as a value
// Can be passed into another function and invoked
function logGreeting(fn) {
  fn();
}
logGreeting(greet);

// function expression
var greetMe = function() {
  console.log('hi Tony');
}
greetMe();
logGreeting(greetMe);

// use a function expression on the fly
logGreeting(function() {
  console.log('Hello Tony');
})

// Your Javascript Code Goes Here
