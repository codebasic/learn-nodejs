exports.BlackJackGame = BlackJackGame;

// 카드 숫자의 합계가 21이면, 블랙잭!
function BlackJackGame(){}

BlackJackGame.prototype.isBlackJack = function(hand){
  // 모든 카드의 숫자 값을 추출
  var rankTotal = 0;
  for(var i=0; i<hand.length; i++){
    var card = hand[i];
    // 카드의 숫자값을 정수로 가져오기
    var rankValue = parseInt(card.getRankValue());
    if(isNaN(rankValue)){
      // 숫자가 아님! 무슨 이유인지는 모르겠지만
      console.log('카드 값이 이상합니다.', card);
    }
    rankTotal += rankValue;
  }

  if(rankTotal < 21) { return -1;}
  else if(rankTotal > 21) { return 1;}
  else {return 0}; // 블랙잭!

}
