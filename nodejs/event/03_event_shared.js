var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

emitter.on('foo', function(ev){
  console.log('foo 수신자 1:', ev);
  ev.handled=true;
});

emitter.on('foo', function(ev){
  if(ev.handled){
    console.log('이벤트가 이미 처리됨');
  }
});

emitter.emit('foo', {handled: false});
