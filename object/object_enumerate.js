var person1 = {
  name:"이성주",
  sayName: function(){
    console.log(this.name);
  }
}

for(var property in person1){
  console.log(property + ": " + person1[property]);
}

// ECMAScript 5
var properties = Object.keys(person1);
console.log(properties);

// 네이티브 메소드는 for-in 에 나타나지 않음.
var nums = [1,2,3]
console.log("push" in nums);
for(var property in nums){
  console.log(property);
}
