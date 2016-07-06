console.log('--- 원시변수형 ---')
console.log(typeof 3);
console.log(typeof 3.14);
console.log(typeof '성주');
console.log(typeof true);

var items = [1,2,3];
var object = {};

console.log(typeof items); // object
console.log(typeof object); // object

console.log(items instanceof Array);
console.log(object instanceof Object);
console.log(Array.isArray(items)); // true
console.log(Array.isArray(object)); // false

console.log(items instanceof Object);
console.log(object instanceof Array);

var foo = function(){};
console.log(typeof foo); // function
console.log(foo instanceof Function); // true
console.log(foo instanceof Object); // true

var goo = new Function();
console.log(typeof goo);
console.log(goo instanceof Function);

console.log(typeof foo == 'function');
