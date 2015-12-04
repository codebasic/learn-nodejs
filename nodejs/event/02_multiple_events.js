var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

emitter.on('foo', function(){
  console.log('foo 수신자 1');
});

emitter.on('foo', function(){
  console.log('foo 수신자 2');
});

// 이벤트 발생
emitter.emit('foo');
