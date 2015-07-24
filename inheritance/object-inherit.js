var book1 = {
  title: '객체지향 JS와 node.js',
  author: '이성주'
}

// 동일한 표현을 다른 방식으로
var book2 = Object.create(Object.prototype, {
  title: {
    value: '빅파이, 빅데이터를 위한 파이썬',
    enumerable: true, configurable: true, writable: true
  },
  author: {
    value: '이성주'
    enumerable: true, configurable: true, writable: true
  }
});

console.log(book1.title);
console.log(book2.title);

book1.showInfo = function(){
  console.log(this.author+', '+this.title);
}

//  book1 객체 상속
// 함수가 아닌 일반 객체의 prototype은 접근 불가.
// Object.create가 해당 부분을 대신 진행
var book3 = Object.create(book1, {
  title: {value:'파이썬과 JS를 활용한 데이터 분석과 표현'},
  author: {value: '이성주'}
});

book3.showInfo();
