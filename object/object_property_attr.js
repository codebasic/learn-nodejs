var assert = require('assert');

var person = {
  이름: '이성주',
  이메일: 'seongjoo@',
  소개하기: function(){
    소개문구 = this.이름 + ' <' + this.이메일 + '>';
    console.log(소개문구);
  }
}

속성목록 = Object.keys(person);
assert.deepEqual(속성목록, ['이름', '이메일', '소개하기']);

Object.defineProperty(person, '이름', {enumerable: false});
속성목록 = Object.keys(person);
assert.deepEqual(속성목록, ['이메일', '소개하기']);

Object.defineProperty(person, '이름', {
  configurable: false
});

delete person.이름;
assert('이름' in person);
person.소개하기();

// configurable이 false인 것을 재설정하면 TypeError 발생
assert.throws(()=>Object.defineProperty(person, '이름', {
   configurable: true
}), 'TypeError');
