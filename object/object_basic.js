var person1 = {
  name: '이성주'
};

var person2 = new Object();
person2.name = '김성주';

person1.lang = '자바스크립트';
person2.lang = '파이썬';

// property check
console.log("name" in person1);
console.log('lang' in person1);
console.log('title' in person1);

var person1 = {
  name:"이성주",
  sayName: function(){
    console.log(this.name);
  }
}

console.log("sayName" in person1);
person1.sayName();
