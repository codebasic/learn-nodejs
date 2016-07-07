var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

emitter.emit('error', new Error('뭔가 잘못되었음 ...'));

console.log('여기는 절대 실행되지 않음.');
