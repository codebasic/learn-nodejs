var assert = require('assert');

var 숫자목록 = [1,2,3];
var 프로필 = {이름: '이성주', 이메일: 'seongjoo@codebasic.co'};

assert(typeof 숫자목록 == 'object');
assert(typeof 숫자목록 == typeof 프로필);

assert(숫자목록 instanceof Array);
assert(숫자목록 instanceof Object);
