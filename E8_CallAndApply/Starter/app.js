var obj = {
  name: 'Jimmy Crack',
  greet(param, param2) {
    console.log(`Hello ${ this.name }`);
  }
}

obj.greet();
// basically borrowing the greet method from obj
// and running it on the unnamed object passed into the call method
obj.greet.call({name: 'Jane Chronic'}, param, param2);
// basically doing the same thing
obj.greet.apply({name: 'Jane Chronic'}, [param, param2]);
