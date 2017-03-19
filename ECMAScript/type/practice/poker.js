var 문양목록 = ['스페이드', '다이아', '하트', '클로버'];
var 계급목록 = [];

// TODO: 계급값 생성: 2 , ... 10, J, Q, K, A
// 계급문자매핑 = {11: 'J',12:'K',13:'Q', 14:'A'};
for(var i=1; i<14; i++){
  var 계급 = numToRank(i);
  계급목록.push(계급);
}

console.log(계급목록);

// 카드덱 구성
var 카드덱 = [];
for(var i=0; i < 문양목록.length; i++){
  var 문양 = 문양목록[i];
  for(var j=0; j < 계급목록.length; j++){
    var 계급 = 계급목록[j];
    var 카드 = {'문양': 문양, '계급': 계급}
    카드덱.push(카드);
  }
}
console.log(카드덱);
console.log(카드덱.length);

console.log('J, Q, K, A 카드들만 출력')
for(var i=0; i < 카드덱.length; i++){
    var 카드 = 카드덱[i];
    var 문양 = 카드.계급;
    if(문양 == 'J' ||
      문양 == 'Q' ||
      문양 == 'K' ||
      문양 == 'A'){
        console.log(카드);
      }
}

var 카드1 = 카드덱[9];
var 카드2 = 카드덱[15];

console.log(rankToNum(카드1.계급) +
  rankToNum(카드2.계급));

console.log('무작위 카드 두 장 숫자값 합계');
var shuffle = require('shuffle-array');
숫자합계 = 0;
for(var i=0; i < 2; i++){
  var 카드 = shuffle.pick(카드덱);
  console.log(카드);
  숫자합계 += rankToNum(카드.계급);
}
console.log(숫자합계);

function rankToNum(계급){
  var 매핑 = {'J': 11, 'Q': 12, 'K': 13, 'A':1};
  var 숫자값 = 매핑[계급];
  // if(숫자값 == undefined){
  if(!숫자값){
    return 계급;
  }
  return 숫자값
}

function numToRank(숫자값){
  var 매핑 = {11:'J', 12:'Q', 13:'K', 1:'A'};
  var 계급 = 매핑[숫자값];
  if(!계급){
    return 숫자값;
  }
  return 계급;
}
