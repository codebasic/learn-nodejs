var assert = require('assert');

var book = {
  title: '객체지향 자바스크립트',
  author: '이성주'
}

assert('title' in book);
assert(book.hasOwnProperty('title'));
assert.deepEqual(Object.keys(book), ['title', 'author']);

assert('hasOwnProperty' in book);
assert.equal(book.hasOwnProperty('hasOwnProperty'), false);

assert(book instanceof Object);
assert.equal(typeof book, 'object');
assert.equal(typeof Object, 'function');
assert.equal(book.constructor, Object);

assert('toString' in book);
assert.equal(book.hasOwnProperty('toString'), false);
assert.equal(Object.prototype.hasOwnProperty('toString'), true);

book.toString = function(){
  return this.title + ', ' + this.author;
}

console.log(book.toString());

var book2 = {
  title: 'Node.js',
  author: '이성주'
};

console.log(book2.toString());
