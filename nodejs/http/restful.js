var http = require('http');
var url = require('url');
var items = [];

var server = http.createServer(function(req, res){
  switch(req.method){
    case 'POST':
      var item = '';
      req.setEncoding('utf-8');
      // 데이터 스트림 수신 이벤트 발생 시
      req.on('data', function(chunk){
        item += chunk;
      });
      // 전체 데이터 수신 완료 시
      req.on('end', function(){
        items.push(item);
        res.end('OK\n');
      });
      break;
    case 'GET':
      var body = items.map(function(item, i){
        return i+ ') ' + item;
      }).join('\n');
      body += '\n';

      // 문자열의 길이가 아닌 바이트 크기를 설정
      // 한글은 한 글자가 3바이트
      var bytes = Buffer.byteLength(body);
      res.setHeader('Content-Length', bytes);
      res.setHeader('Content-Type',
        'text/plain;charset="utf-8"');

      res.end(body);
      break;
    case 'DELETE':
      deleteItem(req, res);
      break;
  }
});

function deleteItem(req, res){
  var path = url.parse(req.url).pathname;
  var i = parseInt(path.slice(1)); // 문자열을 정수 값으로 변환

  if(isNaN(i)){
    // i가 숫자가 아닌 경우는 오류
    res.statusCode = 400;
    res.end('유효하지 않은 아이템 식별자');
  } else if(!items[i]){
    // i 번에 해당하는 아이템이 없는 경우
    res.statusCode = 404; // 리소스를 못 찾는 경우
    res.end('해당 아이템 없음.');
  } else{
    // 해당 식별자에 항목이 존재하는 경우
    items.splice(i, 1); // i 번째 인덱스부터 1개 값 삭제
    res.end('OK\n');
  }
}

server.listen(3000);
console.log('서버 실행 중');
