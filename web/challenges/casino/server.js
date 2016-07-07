var http = require('http');
var poker = require('./poker');

// 웹페이지에 카드덱 출력하기
// 교재 p.39 참조

function callback(req, res){
  // 카지노 카드 가져오기
  var deck = poker.deck;
  // 출력을 위해 문자열로 변환
  // var deck_str = String(deck);

  // HTML 헤더 설정
  var html_head = '';
  html_head += '<head>';
  html_head += '<meta charset="utf-8">';
  html_head += '</head>';

  // HTML body
  var html_body = '';
  // 카드덱의 카드를 표로 만들기
  var html_table = '<table>';
  for(var i=0; i<deck.length; i++){
    // <td>Heart 2</td>
    var entry = '<td>' + deck[i] + '</td>';
    var row = '<tr>' + entry + '</td>';

    html_table += row;
  }
  html_table += '</table>';
  html_title = '<h1>SJ 카지노!</h1>';
  html_body = "<body>"+ html_title + html_table + "</body>";

  var html = html_head + html_body;
  html = '<html>' + html + '</html>';

  // 응답 설정
  var statusCode = 200; // O.K.
  res.writeHead(statusCode,
    {'Content-Type': 'text/html'});
  // res.end(deck_str);
  res.end(html);
}

var port = 5000;
http.createServer(callback).listen(port);

console.log('카지노가 ' + port + '에서 운영 중입니다.');
