var assert = require('assert');

var 손님1 = {
  이름: '이성주',
  성별: '남',
  국적: '대한민국'
};

var 손님2 = {
  이름: 'Kim',
  성별: '여',
  국적: 'USA'
};

var 손님3 = {
  이름: '왕서방',
  성별: '남',
  국적: '중국'
};

// 필수 항목 보호 설정
var 손님목록 = [손님1, 손님2, 손님3];

// 보증금 속성 설정
손님목록.forEach(function(손님){
  Object.defineProperty(손님, '보증금', {
    get: function(){
      return this._보증금;
    },
    set: function(value){
      if(this._보증금){
        console.log('보증금이 이미 설정되었습니다.');
        return;
      }
      this._보증금 = value;
    }
  });

  Object.seal(손님);

  Object.defineProperties(손님,
    {
      이름: {
        enumerable: true,
        writable:false,
      },
      성별: {
        enumerable: true,
        writable: false
      }
    }
  );
});

// 테스트
손님목록.forEach(function(손님){
  delete 손님.이름;
  assert(손님.이름);

  손님.보증금 = 1000;
  assert.equal(손님.보증금, 1000);
  손님.보증금 = 2000;
  assert.equal(손님.보증금, 1000);
});
