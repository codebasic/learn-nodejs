var http = require('http');
var parse = require('url').parse;
var path = require('path');
var fs = require('fs');

var root = __dirname; // 마법(!) 변수

// HTTP 서버 설정
var server = http.createServer(parseHttpRequest);
var port = 4000, hostname = 'localhost';
server.listen(port); // 서버 개시
console.log('http://' + hostname + ':'+port);
// HTTP 서버 설정 끝

function parseHttpRequest(req, res){
  var url = parse(req.url);
  // 현재 디렉토리의 파일시스템 내 경로 설정
  // 예: http://hostname/nodejs.html --> /var/www/node.js.html
  var filepath = path.join(root, url.pathname);

  fs.stat(filepath, function(err, stat){
    if(err){
      // 파일이 존재하지 않는 경우, 오류 코드값
      if('ENOENT' == err.code){
        res.statusCode = 404;
        res.end('Resource Not Found');
        return;
      }
      // 그 밖의 경우
      res.statusCode = 500;
      res.end('Internal Server Error');
      return;
    }

    // 파일 읽어들여 스트림으로 생성
    var stream = fs.createReadStream(filepath);
    stream.pipe(res); // 읽어들여서 응답 설정
    // error 이벤트 발생
    stream.on('error', function(err){
      res.statusCode = 500;
      res.end('Internal Server Error');
    });
  });
}
