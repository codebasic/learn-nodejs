var person1 = {
  name: '이성주',
  email: 'seongjoo@codebasic.co'
};

var person2 = new Object();
person2.name = '김성주';

var person3 = {};
person3.name = '신희진';

person1.lang = '자바스크립트';
person2.lang = '파이썬';
person3.lang = '자바';

// 속성 삭제
delete person1.email;
console.log(person1.email);

// 그러나 delete로 객체 참조를 삭제할 수 없음.
delete person1
console.log(person1);

// var를 사용하지 않는 경우
x=1
console.log(x);

delete x;
console.log(x);
