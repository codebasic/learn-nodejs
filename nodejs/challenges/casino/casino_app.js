var Casino = require('./casino').Casino;
var Guest = require('./guest').Guest;

// 카지노 개장!
var casino = new Casino('SJ 카지노', 1000000000);

// 손님들 입장
var guests = [
  new Guest('이성주' , 100),
  new Guest('김진수', 200),
  new Guest('한석원', 300),
  new Guest('신희진', 400),
  new Guest('정초은', 500),
  new Guest('최기준', 600)];

casino.showGreeting();

for(var i=0; i<guests.length; i++){
  guests[i].showProfile();
}

// 블랙잭 게임 수행하기
console.log('\n--- 블랙잭 한 판! ---');
var random = require('random-js')();
var BlackJackGame = require('./blackjack').BlackJackGame;

var deck = casino.generateCardDeck();
// 카드 섞기
deck = random.shuffle(deck);

var blackJackGame = new BlackJackGame();
// 모든 손님들에게 두 장씩 카드 나눠주기
for(var i=0; i<guests.length; i++){
  guests[i].hand = [deck.pop(), deck.pop()];
  // 블랙잭 판별
  var isBlackJack = blackJackGame.isBlackJack(guests[i].hand);
  if(isBlackJack == -1){console.log('21 미만');}
  else if(isBlackJack == 1) {console.log('21 이상');}
  else if(isBlackJack == 0) {console.log('블랙잭!');}
}
