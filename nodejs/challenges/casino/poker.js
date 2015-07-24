// 외부 모듈에서 사용 가능하도록 설정
exports.generateCardDeck = generateCardDeck;
exports.PokerCard = PokerCard;
exports.test_suits = [testInstantiate, testGetRankValue];

function PokerCard(suit, rank){
  var valid_suits = ['C', 'D', 'H', 'S'];

  if(valid_suits.indexOf(suit) == -1){
    console.log('올바른 문양이 아닙니다.');
    // TODO: 예외 발생
    return;
  }

  var valid_ranks = generateRanks();
  if(valid_ranks.indexOf(rank) == -1){
    console.log('올바른 숫자가 아닙니다.');
  }

  Object.defineProperty(this, "suit", {
    value: suit,
    enumerable: true,
    configurable: false,
    writable: false
  });

  Object.defineProperty(this, "rank", {
    value: rank,
    enumerable: true,
    configurable: false,
    writable: false
  });
}

PokerCard.prototype.getRankValue = function(){
  var character_ranks = {'J': 10, 'Q': 11, 'K': 12, 'A':13};
  if(this.rank in character_ranks){
    return character_ranks[this.rank];
  }
  return this.rank;
}

function generateRanks(){
  var ranks = ['J', 'Q', 'K', 'A'];
  for(var i=2;i<10;i++){
    ranks.push(i);
  }
  return ranks;
}


function generateCardDeck(suits){
  var ranks = generateRanks();
  // 지정이 안 된 경우, 기본값 지정
  if(suits == undefined){
    suits = ['C', 'D', 'H', 'S'];;
  }
  var deck = [];
  // 각 문양에 대해
  for(var i=0; i<suits.length;i++){
    // 각 숫자에 대해
    for(var j=0; j<ranks.length; j++){
      var card = new PokerCard(suits[i], ranks[j]);
      deck.push(card);
    }
  }

  return deck;
}

// 카드덱 생성
// var deck = generateCardDeck();
function testInstantiate(){
  var card = new PokerCard('H',2);
  console.log(card);

  console.log('\n--- 읽기 전용 여부 확인 ---');
  card.suit = 'Gold'
  console.log('suit',card.suit != 'Gold');
  card.rank = 'J';
  console.log('rank', card.rank != 'J');
}

function testGetRankValue(){
  var cards = [new PokerCard('H',2),
    new PokerCard('S', 'J'),
    new PokerCard('H', 'Q'),
    new PokerCard('C', 'K'),
    new PokerCard('D', 'A')];

  for(var i=0; i<cards.length; i++){
    console.log(cards[i]);
    console.log(cards[i].getRankValue());
  }

  // 모든 테스트가 참인지 확인
  var testResult = cards[0].getRankValue() == 2;
  testResult = testResult && (cards[1].getRankValue() == 10);
  testResult = testResult && (cards[2].getRankValue() == 11);
  testResult = testResult && (cards[3].getRankValue() == 12);
  testResult = testResult && (cards[4].getRankValue() == 13);

  console.log('테스트 결과', testResult);
}
