var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();
emitter.setMaxListeners(30); // 0 으로 설정하면 무제한

var listenersCalled = 0;
function addCallback(){
  emitter.on('foo', function(){listenersCalled++});
}

for(var i=0; i<20; i++){
  addCallback();
}

emitter.emit('foo');

console.log('호출된 foo 리스너:' + listenersCalled); // 20
