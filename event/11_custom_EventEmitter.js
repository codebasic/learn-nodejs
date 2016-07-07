var EventEmitter = require('events').EventEmitter;
var inherits = require('util').inherits;

function Foo(){
  EventEmitter.call(this);
}
inherits(Foo, EventEmitter);

Foo.prototype.connect = function(){
  this.emit('connected');
}

// 활용
var foo = new Foo();
foo.on('connected', function(){
  console.log('connected 이벤트 발생');
});

foo.connect();
