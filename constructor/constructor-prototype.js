function Person(name){
  this.name = name;
}

Person.prototype.sayName = function(){
  console.log(this.name);
}

Person.prototype.showProfile = function(){
  console.log('이름:' + this.name);
};


var person1 = new Person('이성주');
var person2 = new Person('김성주');

person1.sayName();
person2.sayName();

person1.showProfile();

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
