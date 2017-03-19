var assert = require('assert');

var x= 5;

assert(typeof x == 'number');

x = '이성주';
assert(typeof x == 'string');

function 아주유용한함수(){}
assert(typeof 아주유용한함수 == 'function');
