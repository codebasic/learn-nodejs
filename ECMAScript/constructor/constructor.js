var assert = require('assert');

function Person(이름, 이메일){
  if(this instanceof Person){
    this.이름 = 이름;
    this.이메일 = 이메일;
    this.소개하기 = function(){
      console.log(this.이름 + '입니다.');
    }
  }
  else{
    // new 키워드를 사용하지 않은 경우
    return new Person(이름, 이메일);
  }
}

var 사람들 = []
사람들.push(new Person('이성주', 'lee@'));
사람들.push(new Person('김성주', 'kim@'));

사람들.forEach(function(사람){
  assert(사람 instanceof Person);
  assert.equal(사람.constructor, Person);
  사람.소개하기();
});

이상한사람 = Person('홍길동', 'hong@');
assert(이상한사람 instanceof Person);
이상한사람.소개하기();
