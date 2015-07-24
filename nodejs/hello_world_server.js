var http = require('http');

/*
* req : HTTP 요청
* res : HTTP 응답
*/
function whatToDo(req, res){
  console.log('HTTP 요청 수신');
  // HTTP 요청 내용 출력
  console.log(req);

  // 응답 설정
  // HTTP 헤더 설정
  res.writeHead(200, {'Content-Type': 'text/plain'});
  // HTTP 본문 설정
  res.end('안녕, 세계!');
}

server = http.createServer(whatToDo)
server.listen(3000); //3000 포트에서 이벤트 수신 대기

console.log('서버 실행 중: http://localhost:3000');
