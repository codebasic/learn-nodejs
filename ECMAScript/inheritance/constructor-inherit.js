function MyConstructor(){

}

// JS Engine이 실제로 수행하는 일
MyConstructor.prototype = Object.create(Object.prototype, {
  constructor: {
    configurable: true,
    enumerable: true,
    value: MyConstructor,
    writable: true
  }
});

function Rectangle(length, width){
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function(){
    return this.length * this.width;
}

Rectangle.prototype.toString = function(){
  return "[Rectangle " + this.length + "x" + this.width + "]";
}

function Square(size){
  this.length = size;
  this.width = size;
}

// 생성자 상속
// Square.prototype = new Rectangle();
// Square.prototype.constructor = Square;

var util = require('util');
util.inherits(Square, Rectangle);

Square.prototype.toString = function(){
  return "[Square " + this.length + "x" + this.width + "]";
};

var rect = new Rectangle(5,10);
var square = new Square(6);

console.log(rect.getArea());
console.log(square.getArea());

console.log(rect.toString());
console.log(square.toString());

console.log(square instanceof Square);
console.log(square instanceof Rectangle);
console.log(square instanceof Object);

// 생성자 상속
function inherits(child, parent){
  child.prototype = Object.create(parent.prototype, {
    constructor: {
      configurable: true,
      enumerable: true,
      value: constructor,
      writable: true
    }
  });
}
