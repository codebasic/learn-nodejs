var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

// 구독
emitter.on('foo', function(arg1, arg2){
  console.log('이벤트 foo 발생. 인자:', arg1, arg2);
});

emitter.emit('foo', {a: 123}, {b:456});
