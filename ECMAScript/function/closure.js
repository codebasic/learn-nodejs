var assert = require('assert');

// 일반 함수
function counter(){
  return ++count;
}

var count = 0;
for(var i=0; i<10; i++){
  assert(counter() == i+1);
}

// closure
function 카운터생성기(초기값){
    var 횟수 = 초기값; // 초기값 설정
    return function(){
      횟수 += 1;
      return 횟수;
    };
}

var 카운터1 = 카운터생성기(0);
assert(typeof 카운터1 == 'function');

for(var i=0; i<10; i++){
  assert(카운터1()==i+1);
}

var 카운터2 = 카운터생성기(100);
for(var i=100; i<111; i++){
  assert(카운터2() == i+1);
}
