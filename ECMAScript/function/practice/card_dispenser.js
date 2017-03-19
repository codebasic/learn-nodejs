var assert = require('assert');
var shuffle = require('shuffle-array');
var poker = require('./poker');

function 카드분배기공장(){
  var 카드덱 = poker.카드덱생성()
  shuffle(카드덱);
  return function(){
    return 카드덱.pop();
  }
}

var 카드분배기 = 카드분배기공장();

// 테스트
for(var i=0; i<52; i++){
    var 카드 = 카드분배기();
    assert(카드.문양);
    assert(카드.계급);
    // console.log(카드);
}

// 52장을 뽑은 이후에는 undefined
assert.equal(카드분배기(), undefined);
