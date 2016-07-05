var assert = require('assert');

assert(foo);
assert(!goo); // 익명함수는 변수 선언 전에 사용할 수 없다.

// 이름이 있는 기명 함수
function foo(value){
  return value * 3;
}

// 이름이 없는 익명함수 ...
// 반드시 변수에 할당해야 합니다.
var goo = function(value){
  return value * 2;
};

assert(goo);
