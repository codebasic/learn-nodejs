var assert = require('assert');

function makeFibo(a,b){
  return function(){
    old_b = b;
    b = a + b;
    a = old_b;
    return b;
  }
}

var fibo = makeFibo(0,1);

var 테스트수열 = [1,2,3,5,8,13,21];
for(var i=0; i<테스트수열.length; i++){
    assert.equal(fibo(), 테스트수열[i]);
}
