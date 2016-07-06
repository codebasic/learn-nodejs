var shuffle = require('shuffle-array');

var casino = require('./casino');
var CasinoGuest = casino.CasinoGuest;

var 선수목록 = [];
선수목록.push(new CasinoGuest('이성주', {'USD': 1000}));
선수목록.push(new CasinoGuest('김성주', {'USD': 2000}));

var 카드덱 = casino.카드덱생성();
shuffle(카드덱);

// 블랙잭 시작!
var 참가자목록 = 선수목록.slice(); // 배열 복사
참가자목록.forEach(function(선수){
  // 처음에는 두 장을 나눠준다.
  선수.카드패 = [카드덱.pop(), 카드덱.pop()];
});

// 참가자목록에 참가자가 없어질 때까지 게임을 수행
while(참가자목록){
  참가자목록.forEach(function(선수, 선수색인){
    var 카드패합계 = 선수.카드패합계();
    if(카드패합계 == 21){
      console.log('블랙잭!');
      선수.자본변경(100);
      console.log(선수.이름);
      console.log(선수.자본);
      // 선수를 참가자목록에서 제외
      참가자목록.splice(선수색인, 1);
      debugger;
    }
    else if(카드패합계 > 21){
      console.log('... 아쉽네요');
      선수.자본변경(-10);
      console.log(선수.이름);
      console.log(선수.자본);
      // 선수를 참가자목록에서 제외
      참가자목록.splice(선수색인, 1);
      debugger;
    }
    else{
      선수.카드패.push(카드덱.pop());
    }
  });
}

console.log('게임 종료');
