var person1 = {
  name:"이성주",
  sayName: function(){
    console.log(this.name);
  }
}

console.log("name" in person1);
console.log("sayName" in person1);
person1.sayName();

console.log('\n--- hasOwnProperty() Demo ---');
console.log("toString" in person1);
console.log(person1.hasOwnProperty("toString"));

console.log('\n---delete property---');
delete person1.name;
console.log(person1.name);
console.log('name'in person1);

delete person1.toString;
console.log("toString" in person1);

delete person1.no_such_thing;

// 객체 생성 시점 이후, 임의로 메소드 추가
person1.showProfile = function(){
  console.log('이름:', this.name);
}

perons1.showProfile();
