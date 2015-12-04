var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

var listenersCalled = 0;
var s_listenerCalled = 0;

function addCallback(){
  emitter.on('foo', function(){listenersCalled++});
}

function addSafeCallback(){
  var emitter = new EventEmitter();
  emitter.on('goo', function(){s_listenerCalled++})
}

for(var i=0; i<20; i++){
  addCallback();
  addSafeCallback();
}

emitter.emit('foo');
emitter.emit('goo');

console.log('호출된 foo 리스너:' + listenersCalled); // 20
console.log('호출된 goo 리스너:' + s_listenerCalled); // 0
