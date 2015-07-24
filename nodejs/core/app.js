var foo = require('./foo');
foo();

var isGooNeeded=true;
if(isGooNeeded){
    var bar = require('./bar');
}
bar();

// blocking
require('./lazy_goo');
console.log('오래 기다리셨습니다.');