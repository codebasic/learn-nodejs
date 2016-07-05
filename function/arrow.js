var assert = require('assert');

var 도서 = ['객체지향 자바스크립트', 'Node.js 입문', '자바스크립트 클로져'];

제목길이1 = 도서.map(function(제목){return 제목.length;});
제목길이2 = 도서.map(제목 => 제목.length);

assert.deepEqual(제목길이1, 제목길이2);
