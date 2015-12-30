var person = {
  firstname: '',
  lastname: '',
  greet: function(){
    return this.firstname + ' ' + this.lastname;
  }
}

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Jacobs';
console.log(john.greet());

var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Mary';
console.log(jane.greet());
