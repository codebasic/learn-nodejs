var book = {
  title: '객체지향 자바스크립트',
  author: '이성주'
}

console.log("title" in book); // true
console.log(book.hasOwnProperty("title")); // true

console.log(book.hasOwnProperty("hasOwnProperty")); // false
console.log(Object.prototype.hasOwnProperty("hasOwnProperty")); // true

// isPrototypeOf()
var object = {};
console.log(Object.prototype.isPrototypeOf(object)); // true

var obj = {};
console.log(obj.toString()); // [object Object]

obj.toString = function(){
  return "[객체]";
}

console.log(obj.toString());

delete obj.toString;
console.log(obj.toString());

// prototype은 인스턴스 객체에서 접근 불가.
delete obj.toString;
console.log(obj.toString());
