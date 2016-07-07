var http = require('http');

var server = http.createServer(function(req, res){
  var url = 'http://google.com';
  // 헤더 설정
  res.setHeader('Location', url);
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 302;

  // 본문설정
  var body = '<p>리디렉션: <a href="' + url + '"> 구글' +
    '</a></p>';

  res.end(body);
});

var hostname = 'localhost';
var port = 3000;
console.log('http://'+hostname +":"+port);
server.listen(3000);
