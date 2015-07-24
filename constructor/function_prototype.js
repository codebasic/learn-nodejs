var book = {
  title: '객체지향 자바스크립트',
  author: '이성주'
}

console.log("title" in book); // true
console.log(book.hasOwnProperty("title")); // true

console.log(book.hasOwnProperty("hasOwnProperty")); // false
console.log(Object.prototype.hasOwnProperty("hasOwnProperty")); // true

// isPrototypeOf()
var obj = new Object();
console.log(Object.prototype.isPrototypeOf(obj)); // true

console.log(obj.toString()); // [object Object]

obj.toString = function(){
  return "[객체]";
}

console.log(obj.toString());

// 그렇지만 Object.prototype.toString을 재정의한 것은 아님.
var obj2 = {};
console.log(obj2.toString());

delete obj.toString;
console.log(obj.toString());

// prototype은 인스턴스 객체에서 접근 불가.
delete obj.toString;
console.log(obj.toString());
