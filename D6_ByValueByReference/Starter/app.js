// pass by value
function change(b) {
  b = 2;
}

var a = 1;
change(a);
console.log(a); // 1

// pass by reference
function changeObj(d) {
  d.prop1 = function() {};
  d.prop2 = {};
}

var c = {};
c.prop1 = {};
changeObj(c);
console.log(c); // { prop1: [Function], prop2: {} }

// d points to the same place in memory as c because c is an object passed by reference
