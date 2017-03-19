var assert = require('assert');

function 무언가를해(어떻게){
  if(typeof 어떻게 != 'function') return;
  return 어떻게();
}

var 이렇게 = function(){
    return '잘';
}

assert(무언가를해(이렇게) == '잘');

결과 = 무언가를해(function(){return '열심히';});
assert(결과 == '열심히');

assert(!무언가를해('잘'),
  '함수가 아닌 인자가 전달되었을 때는 undefined 반환');
