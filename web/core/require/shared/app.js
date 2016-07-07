var foo = require('./foo');
console.log('foo.msg:', foo.msg);

foo.msg = '안녕, 세계!';

console.log('bar 모듈');
var bar = require('./bar');

// factory
var obj = require('./factory')();
console.log(obj.msg);
obj.msg='안녕, 세계!';

var obj2 = require('./factory')();
console.log(obj2.msg);
