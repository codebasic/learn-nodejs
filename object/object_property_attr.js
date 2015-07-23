var person1 = {
  name : '이성주',
  twitter: '@LeeSeongjoo'
};

person1.sayName = function(){
  console.log(this.name);
}

console.log(Object.keys(person1));

Object.defineProperty(person1, "name", {
  enumerable: false
});

console.log(Object.keys(person1));
console.log(person1.propertyIsEnumerable("name"));

Object.defineProperty(person1, "name", {
  configurable: false
});

delete person1.name; // 삭제되지 않음.
console.log(person1.name);

// 오류! 다시 재설정할 수 없음.
//configurable이 false인 것을 재설정하는 것은 논리적인 오류
Object.defineProperty(person1, "name", {
  configurable: true
});
