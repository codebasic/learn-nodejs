var inherit = require('./inherit').inherit;

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
  Rectangle.call(this, size, size);
}

inherit(Square, Rectangle);

// Override super
Square.prototype.toString = function(){
  var text = Rectangle.prototype.toString.call(this);
  return text.replace("Rectangle", "Square");
}

var rect = new Rectangle(5,10);
var square = new Square(6);

console.log(rect.getArea());
console.log(square.getArea());

console.log(rect.toString());
console.log(square.toString());
