var http = require('http');

var server = http.createServer(function(req, res){

  // 헤더 설정
  res.setHeader('Content-Type', 'text/html');

  // 본문 설정
  var body = "<h1>Hello, world!</h1>";
  res.write(body);
  res.end();
});

var hostname = 'localhost';
var port = 3000;
console.log('http://'+hostname +":"+port);
server.listen(3000);
