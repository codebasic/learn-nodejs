function Person(name){
  this.name = name;
}

// 프로토타입에 함수 추가
Person.prototype.sayName = function(){
  console.log(this.name);
}

var person1 = new Person('이성주');
var person2 = new Person('김성주');

person1.sayName();
person2.sayName();

// 임의의 시점에서, 변경이 모든 객체에 즉시 반영된다.
Person.prototype.sayName = function(){
  console.log('이름:' + this.name);
}

person1.sayName();
person2.sayName();

// prototype에 데이터를 설정하는 것은 유의
Person.prototype.langs = [];

person1.langs.push("자바스크립트");
person2.langs.push("파이썬");

console.log(person1.langs);
console.log(person2.langs);

delete Person.prototype.langs;
console.log(person1.langs);

// 스타일 2
function Person(name){
  this.name = name;
}

Person.prototype = {
  showProfile: function(){
    console.log(this.name);
  },

  toString: function(){
    return "[Person " + this.name + "]";
  }
};

var person1 = new Person('이성주');
person1.showProfile();
