var assert = require('assert');

var person = {
  이름: '이성주'
};

person.이메일 = 'seongjoo@codebasic.co';
assert('이메일' in person);
assert(Object.isExtensible(person));

Object.preventExtensions(person);
person.전화번호 = '010-1234-5678';
assert.equal('전화번호' in person, false);

// 추가는 막지만 삭제까지 막지는 않는다.
delete person.이메일;
assert.equal('이메일' in person, false);

var person = {이름: '이성주'};
Object.seal(person);

person.이름 = '김성주';
assert.equal(person.이름, '김성주');
delete person.이름;
assert('이름' in person); // 삭제되지 않음.

person.이메일 = 'kim@';
assert.equal('이메일' in person, false); // 추가되지 않음.

var person = {이름: '이성주'};
Object.freeze(person);

person.이름 = '김성주';
assert.equal(person.이름, '이성주'); // 변경되지 않음.
delete person.이름;
assert('이름' in person); // 삭제되지 않음

person.이메일 = 'seongjoo@';
assert('이메일' in person); // 추가되지 않음
