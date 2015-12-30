var greeting = 'Oye como va';

function greet() {
  console.log(greeting);
}

// By replacing the exports object with my own new object and only passing in the greet function as a new method
// I am showing an example of only sharing one function from this file
// So if I had more functions and values in this file they would not be exposed upon require
// (Revealing Module Pattern)
module.exports = {
  greet: greet
}
