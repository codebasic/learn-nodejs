var assert = require('assert');

var person1 = {
  이름: '이성주',
  소개하기: function(){
    소개문구 = '제 이름은 ' + this.이름 + '입니다.';
    console.log(소개문구);
  }
};

person1.소개하기();

console.log(person1);
assert('이름' in person1);
assert('소개하기' in person1);
assert('toString' in person1);

assert.equal(person1.hasOwnProperty('이름'), true);
assert.equal(person1.hasOwnProperty('소개하기'), true);
assert.equal(person1.hasOwnProperty('toString'), false);

person1.소개하기 = function(){
  소개문구 = '반갑습니다! ' + this.이름 + '입니다.';
  console.log(소개문구);
};

person1.소개하기();

delete person1.이름;
assert.equal('이름' in person1, false);
delete person1.toString;
assert.equal('toString' in person1, true);
