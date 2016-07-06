function Book(제목, 저자){
  this.제목 = 제목;
  this.저자 = 저자;
}

Book.prototype.toString = function(){
  return this.제목 + ', ' + this.저자;
}

var books = [];
books.push(new Book('객체지향 자바스크립트', '이성주'));
books.push(new Book('Node.js', '이성주'));

// 테스트
books.forEach(function(책){
  console.log(책.toString());
});
