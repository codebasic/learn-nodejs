function Person(){
  // 빈 객체
}

function Alien(){
  // 빈 객체
}

var person1 = new Person();
var person2 = new Person();

console.log(person1 instanceof Person);
console.log(person2 instanceof Person);

console.log(person1.constructor == Person);
console.log(person1.constructor == Person);

// instanceof 사용 권장
// constructor 속성은 임의에 바뀔 수 있음
person1.constructor = Alien;
console.log(person1 instanceof Person);
console.log(person1.constructor == Person);

// this
function Person(name){
  this.name = name;
  this.sayName = function(){
    console.log(this.name);
  }
}

var person1 = new Person('이성주');
var person2 = new Person('김성주');

person1.sayName();
person2.sayName();

// new 키워드의 역할
var wrongPerson = Person('이성주');
console.log(this); // this as Global object
console.log(this.name);
