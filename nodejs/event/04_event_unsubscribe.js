var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

var fooHandler = function(){
  console.log('이벤트 처리기 호출됨');
  // 이벤트 구독 해제
  emitter.removeListener('foo', fooHandler);
};

// 이벤트 구독 등록
emitter.on('foo', fooHandler);

// 이벤트 발생
emitter.emit('foo');
emitter.emit('foo');
