function Greetr() {
  this.greeting = 'Hey Woild!';
  this.greet = function(){
    console.log(this.greeting);
  }
}

module.exports = new Greetr(); // instantiating the constructor creates a new object with the properties decribed above
