var Guest = require('./guest').Guest;
var inherits = require('util').inherits;

// 포커 게임 참가자
function PokerPlayer(name, money){
  // 상위 생성자 "super" 호출
  Guest.call(this, name, money);
}

// Guest 상속
inherits(PokerPlayer, Guest);

// TODO: showProfile에서 포커 플레이어임을 표시
PokerPlayer.prototype.showProfile(){

}

exports.PokerPlayer = PokerPlayer;
