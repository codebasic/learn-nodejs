const assert = require('assert');

describe('함수', function(){
  it('선언 시점', function(){
    assert(foo);
    assert(!goo);
    function foo(){}
    var goo = foo;
  });
  it('익명함수', function(){
    assert(!goo);
    var goo = function(){};
    assert(goo);
    // 익명함수 정의는 반드시 변수에 담아줘야 합니다.
    //function(){}
  });
  describe('인자', function(){
    it('합계 산출', function(){
      assert(!sum()); // undefined
      assert.equal(1, sum(1));
      assert.equal(3, sum(1,2));
      assert.equal(6, sum(1,2,3));
    });
    it('기명 인자', function(){
      assert(!mul());
      assert.equal(2, mul(2));
      assert.equal(6, mul(2,3));
      assert.equal(24, mul(2,3,4));
    });
    it('Arguments 자료형', function(){
      assert(!(arguments instanceof Array));
    });
  });
  describe('고계함수', function(){
    function 집계(방법){
      var data = [];
      for(var i=1; i < arguments.length; i++){
        data.push(arguments[i]);
      }
      var 결과 = 방법(data);
      return 결과;
    }

    it('합계 산출', function(){
      assert.equal(9, 집계(sum, 2,3,4));
    });
    it('곱 산출', function(){
      assert.equal(24, 집계(mul, 2,3,4));
    });
  });
  describe('클로져', function(){
    it('카운트', function(){
      var i;
      var countUp = makeCounter(0);
      for(i=0; i<9; i++){
        countUp();
      }
      assert.equal(10, countUp());

      function makeCounter(초기값){
        var count = 초기값;
        return function(){
          count += 1;
          return count;
        }
      }
    });
    it('피보나치 수열', function(){
      const fibo = 피보나치수열생성기(0,1);

      const 기대값 = [1,2,3,5,8,13,21];
      for(var i=0; i < 기대값.length; i++){
        assert.equal(기대값[i], fibo());
      }
      // console.log('생각해 볼 점');
      // console.log('백만 번째 피보나치 수열은?');
      // console.log('이것을 알기 위해 필요한 메모리는?');

      function 피보나치수열생성기(a,b){
        return function(){
          var old_b = b;
          b = a+b;
          a = old_b;
          return b;
        }
      }
    });
  });
  describe('ES6:화살표 함수', function(){
    var 도서 = [
      '객체지향 자바스크립트',
      'Node.js 기본',
      'Express'
    ];

    const 기대값 = [11, 10, 7];
    it('일반 함수', function(){
      var 제목길이 = 도서.map(function(제목){
        return 제목.length;
      });
      assert.deepEqual(기대값, 제목길이);
    });

    it('화살표 함수', function(){
      var 제목길이 = 도서.map(제목 => 제목.length);
      assert.deepEqual(기대값, 제목길이);
    });
  });
  function sum(){
    var data;
    var i;

    if(!arguments.length) return;
    if(Array.isArray(arguments[0])){
      data = arguments[0];
    } else {
      data = [];
      for(i=0; i < arguments.length; i++){
        data.push(arguments[i]);
      }
    }

    var total = 0;
    for(var i=0; i < data.length; i++){
      total += data[i];
    }
    return total;
  }
  function mul(x,y){
    var data;
    var i;

    if(!arguments.length) return;
    if(Array.isArray(arguments[0])){
      data = arguments[0];
    } else{
      data = [];
      for(i=0; i < arguments.length; i++){
        data.push(arguments[i]);
      }
    }

    var result = 1;
    for(var i=0; i < data.length; i++){
      result *= data[i];
    }
    return result;
  }
});
