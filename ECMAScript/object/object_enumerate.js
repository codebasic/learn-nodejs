var person1 = {
  name:"이성주",
  sayName: function(){
    console.log(this.name);
  }
}

for(var key in person1){
  console.log(key + ": " + person1[key]);
}

// ECMAScript 5
var keys = Object.keys(person1);
console.log(keys);
// 네이티브 메소드는 반환되지 않음
console.log("toString" in keys);
