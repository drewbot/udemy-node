// V1
var greet = require('./greet1'); // returns the module.export object
greet();

// V2
// var greet2 = require('./greet2');
// greet2.greet();
//     OR
var greet2 = require('./greet2').greet; // returns the greet method from module.export object
greet2();

// V3
var greet3 = require('./greet3'); // returns the module.export object wrapped around an instance of the Greetr constructor
greet3.greet();                   // which has the greet method

// V4
greet3.greeting = 'Ay Bo';
// this actually returns the cached object that was required above because they are both coming from the same file
var greet3b = require('./greet3');  // (even if we requre the same file from different files)
// This means that when we call the greet method again it then prints the changed greeting above
greet3b.greet();
// greet3b is now a reference to greet3

// V5
var Greet4 = require('./greet4'); // returns the Greetr constructor
var grtr = new Greet4; // Now when I create a new instance here it will not be the same as other imports of the same file
grtr.greet();

// V6
// var greet5 = require('./greet5'); // returns the object with provided properties only
// greet5.greet();
//    OR
var greet5 = require('./greet5').greet;
greet5();
