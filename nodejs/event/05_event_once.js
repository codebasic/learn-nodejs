var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

emitter.once('foo', function(){
  console.log('foo 이벤트 수신');
});

emitter.emit('foo');
emitter.emit('foo');
