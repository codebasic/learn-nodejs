/* 도전과제: 포커 게임
세 명이 같은 포커 테이블에 앉아서 포커 게임을 하려고 한다.

a. 게임에서 사용되는 카드는 악의적인 이유로 중간에 순서가 바뀌거나 하면
안 된다. 생성된 포커 카드 정보가 외부에서 접근이 불가능하도록 호출할 때마다
카드덱에서 다음번 카드 1장을 반환하는 함수 makeCardDispender를
클로저 패턴을 활용해 작성하시오.

b. 각 참가자에게 두 개의 카드를 나눠주고, 각 참가자 객체의 hand 속성에
추가한다.

c. 각 참가자별로 받은 카드를 웹페이지에서 출력한다. ( ... 이미지로?)
*/

var poker = require('./poker');
// console.log(poker);
poker.deck.pop();
console.log(poker.deck.length);

function makeCardDispender(){
  var deck = poker.generateCardDeck(); //포커 카드
  return function(){
    return deck.pop(); // 마지막 원소를 추출하고, 배열에서 제거
  }
}

function showPlayers(req, res){
  var cardDispender = makeCardDispender();

  // 각 참가자한테 두 장씩 나눠주기
  var players = [{},{},{}];
  for(var i=0; i<players.length; i++){
    players[i].hand = [cardDispender(), cardDispender()];
  }
  // console.log(players);
  formatHtml(req, res, players);
}

function formatHtml(req, res, players){
  // 템플릿 파일 읽어오기
  fs.readFile('./template.html', function(err, data){
    if(err){
      console.error(err);
      return;
    }

    // 파일을 읽어들여 문자열로 가져온다.
    var template = data.toString();
    // 파일 내, % 기호를 데이터로 변경한다.
    var html = template.replace('%',
      players.join('</li><li>'));

    // 응답 설정
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(html);
  });
}


// 웹서버로 HTTP 클라이언트에 출력 제공하기
var http = require('http');

http.createServer(processHttpRequest).listen(3000);

function processHttpRequest(req, res){
  // HTTP 요청을 처리하고, 응답을 설정
  showPlayers(req, res);
}
