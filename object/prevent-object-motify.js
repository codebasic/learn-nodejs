// preventExtensions
console.log('\n--- Object.preventExtensions ---')
var person = {
  name : '이성주'
}

console.log(Object.isExtensible(person));
Object.preventExtensions(person);

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

// freeze - 읽기 전용
console.log('\n--- Object.freeze ---')
var person = {
  name: '이성주'
}
