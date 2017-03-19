/* 도전과제: 포커 게임
세 명이 같은 포커 테이블에 앉아서 포커 게임을 하려고 한다.

a. 게임에서 사용되는 카드는 악의적인 이유로 중간에 순서가 바뀌거나 하면
안 된다. 생성된 포커 카드 정보가 외부에서 접근이 불가능하도록 호출할 때마다
카드덱에서 다음번 카드 1장을 반환하는 함수 makeCardDispender를
클로저 패턴을 활용해 작성하시오.

b. 각 참가자에게 두 개의 카드를 나눠주고, 각 참가자 객체의 hand 속성에
추가한다.
*/

var poker = require('./poker');

function makeCardDispender(){
  var deck = poker.generateCardDeck(); //포커 카드
  deck.pop(); // 마지막 원소를 추출하고, 배열에서 제거
}

var cardDispender1 = makeCardDispender();
var cardDispender2 = makeCardDispender();

var pokerCard = cardDispenser(); // 다음 카드 1장.
