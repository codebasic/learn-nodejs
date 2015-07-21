function Person(name){
  this.name = name;
}

Person.prototype = {
  constructor: Person,

  sayName: function(){
    console.log(this.name);
  },

  toString: function(){
    return "[Person " + this.name + "]";
  }
}

var person1 = new Person("이성주");

// 객체 생성 이후 prototype에 추가
Person.prototype.showMoney = function(){
  console.log(this.money);
}

person1.money = 100
person1.showMoney();

// 객체에 .freeze() 또는 .seal()을 해도 prototype은 추가됨.

Object.freeze(person1);
person1.weight = 85;
console.log(person1.weight);

Person.prototype.showWeight = function(){
  console.log(this.weight);
}

person1.showWeight();
