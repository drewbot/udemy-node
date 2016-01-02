function greet(callback) {
  console.log('Hello');
  var data = {
    name: 'Big Boi'
  }
  callback(data);
}

greet(function(data) {
  console.log('the callback was invoked');
  console.log(data);
})

greet(function(data) {
  console.log('I\'m different');
  console.log(data.name);
})
