var assert = require('assert');
var shuffle = require('shuffle-array');
var poker = require('./poker');

function A먼저(first, second){
  // A를 1로 취급
  var first_value = poker.rankToNum(first.계급);
  var second_value = poker.rankToNum(second.계급);

  return first_value - second_value;
}
function A나중(first, second){
  var 매핑 = {'J': 11, 'Q': 12, 'K': 13, 'A':14};
  var first_value = poker.rankToNum(first.계급, 매핑);
  var second_value = poker.rankToNum(second.계급, 매핑);

  return first_value - second_value;
}

var 카드덱 = poker.카드덱생성();
assert(카드덱.length == 52);

// 같은 문양의 카드덱만 선택
카드덱 = 카드덱.slice(0,13);

shuffle(카드덱);

카드덱.sort(A먼저);
console.log(카드덱);
assert(카드덱[0].계급 == 'A');
assert(카드덱[12].계급 == 'K');

카드덱.sort(A나중);
console.log(카드덱);
assert(카드덱[0].계급 == 2);
assert(카드덱[12].계급 == 'A');
