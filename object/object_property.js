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
