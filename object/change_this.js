function sayName(label){
  console.log(label + ':' + this.name);
}

var person1 = {
  name : '일번'
};

var person2 = {
  name : '이번'
};

//sayName.call(this, "전역"); // node.js
sayName.call(person1, "person1");
sayName.call(person2, "person2");

// apply
function showProfile(label, sep){
  console.log(label, sep, this.name);
}

showProfile.apply(person1, ["person1", '=']);
showProfile.apply(person2, ["person2", '=']);

// bind: this에 대상 객체 참조를 고정
var sayNameForPerson1 = sayName.bind(person1);
sayNameForPerson1("person1");

/*
sayNameForPerson1 = function(label){
  console.log(label, person1.name);
}
*/

var sayNameForPerson2 = sayName.bind(person2);
sayNameForPerson2("person2");

// 다른 객체의 메소드가 되어도, this값은 bind()에 연결된
// 객체에 고정
person2.sayName = sayNameForPerson1;
person2.sayName("person2");
