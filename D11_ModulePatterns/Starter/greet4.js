function Greetr() {
  this.greeting = 'Hey pretty boy';
  this.greet = function(){
    console.log(this.greeting);
  }
}

module.exports = Greetr;
