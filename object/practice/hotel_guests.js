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
for(var i=0; i < 손님목록.length; i++){
  var 손님 = 손님목록[i];
  for(var 속성 in 손님){
    Object.defineProperty(손님, 속성, {
      enumerable: true,
      configurable: false,
      writable: false
    });
  }

  // 테스트
  for(var 속성 in 손님){
    delete 손님[속성];
    assert(손님[속성]);
  }
}
