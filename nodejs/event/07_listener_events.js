var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

emitter.on('removeListener', function(eventName, listenerFunction){
  console.log(eventName, '리스너 제거', listenerFunction.name);
});

emitter.on('newListener', function(eventName, listenerFunction){
  console.log(eventName, '리스너 등록', listenerFunction.name);
});

function a(){}
function b(){}

emitter.on('foo', a);
emitter.on('foo', b);

emitter.removeListener('foo', a);
emitter.removeListener('foo', b);
