var assert = require('assert');

module.exports.PokerCard = PokerCard;

function PokerCard(문양, 계급){
  this.문양 = 문양;

  Object.defineProperty(this, '계급', {
    set: function(value){
      this._계급 = numToRank(value);
    },
    get: function(){
      return this._계급;
    }
  });
  this.계급 = 계급;
}

PokerCard.prototype.toString = function(){
  return this.문양 + ' ' + this.계급;
};

PokerCard.prototype.valueOf = function(){
  return rankToNum(this.계급);
}

function rankToNum(계급, 매핑){
  if(!매핑){
      매핑 = {'J': 11, 'Q': 12, 'K': 13, 'A':1};
  }
  var 숫자값 = 매핑[계급];  
  if(!숫자값){
    return 계급;
  }
  return 숫자값
}

function numToRank(값){
  var 매핑 = {11:'J', 12:'Q', 13:'K', 1:'A'};
  var 계급 = 매핑[값];
  if(!계급){
    return 값;
  }
  return 계급;
}
//
// var cards = [];
// cards.push(new PokerCard('하트', 2));
// cards.push(new PokerCard('다이아', 'Q'));
//
// // 생성 시점에서 올바르지 않은 경우, 예외 발생 확인
// assert.throws(()=>new PokerCard('네잎클로버', 3), 'Error');
// assert.throws(()=>new PokerCard('하트', 100), 'Error');
// assert.throws(()=>new PokerCard('하트', 'B'), 'Error');
//
// assert.equal(cards[0].toString(), '하트 2');
// assert.equal(cards[0].valueOf(), 2);
//
// assert.equal(cards[1].toString(), '다이아 Q');
// assert.equal(cards[1].valueOf(), 12);
