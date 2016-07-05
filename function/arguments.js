var assert = require('assert');

function sum(){
  var total = 0;
  for(var i=0; i<arguments.length; i++){
    total += arguments[i];
  }

  return total;
}

assert(sum(1,2,3)==6);

function 곱하기(){
  if(arguments.length == 0) return;
  if(arguments.length == 1) return arguments[0];

  var 결과 = 1;
  for(var i=0; i < arguments.length ; i++){
    결과 *= arguments[i];
  }

  return 결과;
}

assert(!곱하기(), '인자가 없으면 undefined를 반환해야 합니다.');
assert(곱하기(2)==2);
assert(곱하기(2,3,4)==24);
