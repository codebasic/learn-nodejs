var inherits = require('util').inherits;

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
  // Rectangle의 생성자 함수를 호출
  Rectangle.call(this, size, size);
}

// Rectangle 프로토타입 상속
inherits(Square, Rectangle);

// Override super
Square.prototype.toString = function(){
  // 원래 함수의 메소드 호출해 결과 얻어오기
  var text = Rectangle.prototype.toString.call(this);
  // 결과를 현재 함수에 맞게 조절하기
  return text.replace("Rectangle", "Square");
}

var rect = new Rectangle(5,10);
var square = new Square(6);

console.log(rect.getArea());
console.log(square.getArea());

console.log(rect.toString());
console.log(square.toString());
