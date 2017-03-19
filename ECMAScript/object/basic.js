var assert =require('assert');

var person1 = new Object();
person1.이름 = '이성주';
person1.이메일 = 'lee';

var person2 = {
  이름: '김성주',
  이메일: 'kim'
};

assert(!person1.트위터);
person1.트위터 = '@Lee';
assert(person1.트위터);

delete person1.트위터;
assert(!person1.트위터);

delete person1;
assert(person1);

// var 키워드를 사용하지 않은 경우
person3 = {이름: '박성주'};
delete person3;
assert.throws(()=> person3, 'ReferenceError');
