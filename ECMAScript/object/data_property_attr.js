var person = {};

//person.name = '이성주';
Object.defineProperty(person, "name", {
  value: '이성주',
  enumerable: true,
  configurable:true,
  writable:true
});

console.log(person.name);
person.name = 'SJ';
console.log(person.name);

// 속성의 상태 변경
console.log('--- writable false ---');
Object.defineProperty(person, "name", {
  writable: false
});
console.log(person.name);
person.name = '이성주';
console.log(person.name);

// 속성 기본값은 false
Object.defineProperty(person, "twitter", {
  value: '@Seongjoo'
});

person.twitter = '@LeeSeongjoo';
console.log(person.twitter);
