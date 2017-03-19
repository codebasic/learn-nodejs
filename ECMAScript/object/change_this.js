var assert = require('assert');

var person1 = {
  이름: '이성주',
};

var person2 = {
  이름: '김성주',
}

function 소개하기(이메일, 전화번호){
  console.log('안녕하세요, ' + this.이름 + '입니다.');
  console.log('이메일: ' + 이메일);
  console.log('전화번호: ' + 전화번호);
}

소개하기.call(person1, 'seongjoo@', '1234');
소개하기.call(person2, 'kim@', '5678');

소개하기.apply(person1, ['seongjoo@', '1234']);
소개하기.apply(person2, ['kim@', '5678']);

p1소개하기 = 소개하기.bind(person1);
assert.equal(typeof p1소개하기, 'function');
person2.소개하기 = p1소개하기
person2.소개하기('kim@', '5678');
