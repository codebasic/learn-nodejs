// preventExtensions
console.log('\n--- Object.preventExtensions ---')
var person = {
  name : '이성주'
}

// 기본적으로는 새로운 속성을 추가 (extend)할 수 있다.
console.log(Object.isExtensible(person));
// 속성 추가 방지
Object.preventExtensions(person);

// 속성 추가 시도. 오류는 나지 않지만, 추가되지는 않음.
person.twitter = '@LeeSeongjoo';
console.log(Object.isExtensible(person));
console.log(person.twitter);

// seal - 기존의 값만 읽기 쓰기 가능
console.log('\n--- Object.seal ---')
var person1 = {
  name: '이성주'
};

console.log(Object.isExtensible(person1));
console.log(Object.isSealed(person1));

Object.seal(person1);

console.log(Object.isExtensible(person1));
console.log(Object.isSealed(person1));

person1.name = 'SJ';
person1.twitter = '@LeeSeongjoo';

console.log(person1.name, person1.twitter);

// freeze - 읽기 전용
console.log('\n--- Object.freeze ---')
var person = {
  name: '이성주'
}

Object.freeze(person);
person.name = 'SJ';
console.log(person.name);
