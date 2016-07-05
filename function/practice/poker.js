function makeCardDeck(){
  var 문양목록 = ['스페이드', '다이아', '하트', '클로버'];
  var 계급목록 = [];

  for(var i=1; i<14; i++){
    var 계급 = numToRank(i);
    계급목록.push(계급);
  }

  var 카드덱 = [];
  for(var i=0; i < 문양목록.length; i++){
    var 문양 = 문양목록[i];
    for(var j=0; j < 계급목록.length; j++){
      var 계급 = 계급목록[j];
      var 카드 = {'문양': 문양, '계급': 계급}
      카드덱.push(카드);
    }
  }

  return 카드덱;
}

function rankToNum(계급, 매핑){
  if(!매핑){
      매핑 = {'J': 11, 'Q': 12, 'K': 13, 'A':1};
  }
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

module.exports.카드덱생성 = makeCardDeck;
module.exports.rankToNum = rankToNum;
