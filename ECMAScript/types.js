const assert = require('assert');

describe('자료형', function(){
  describe("원시형", function(){
    var x;

    it('숫자', function(){
      x = 5;
      assert.equal('number', typeof x);
    });

    it('문자열', function(){
      x = '이성주';
      assert.equal('string', typeof x);
    });

    it('함수', function(){
      function 아주유용한함수(){}
      assert.equal('function', typeof 아주유용한함수);
    });
  });

  describe('참조형', function(){
    it('배열', function(){
      var nums = [1,2,3];
      assert.equal('object', typeof nums);
      assert(nums instanceof Array);
      // 배열인지 여부 확인
      assert(Array.isArray(nums));
      assert(!Array.isArray(1));
    });

    it('객체', function(){
      var 연락처 = {이름:'이성주', 이메일:'seongjoo@codebasic.io'};
      assert.equal('object', typeof 연락처);
      assert(연락처 instanceof Object);
    });

    it('생성자', function(){
      assert.equal('function', typeof Array);
      assert.equal('function', typeof Object);
    });
  });
});
