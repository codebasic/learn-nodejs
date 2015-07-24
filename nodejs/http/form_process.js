var http = require('http');
var qs = require('querystring');

var items = [];

var server = http.createServer(processHttpRequest);
var port = 3000, hostname = 'localhost';
server.listen(port);
console.log('http://'+hostname+":"+port);

function processHttpRequest(req, res){
  if('/'==req.url){
    // HTTP 요청 유형
    // GET, POST, PUT, DELETE
    switch(req.method){
      case 'GET':
        show(res);
        break;
      case 'POST':
        add(req, res);
        break;
      default:
        badRequest(res);
    }
  }
}

function show(res){
  var html = '<html><head><title>ToDo List</title></head><body>';
  html += '<h1>ToDo List</h1>';
  // 배열에 담긴 값을 HTML 리스트 형식으로 정리
  html += '<ul>' + items.map(function(item){
    return '<li>' + item + '</li>';
  }) + '</ul>';
  // <form>
  html += '<form method="post" action="/">'
    + '<p><input type="text" name="item"></p>'
    + '<p><input type="submit" value="항목 추가"></p>'
    + '</form>';
  html += '</body></html>';

  // 헤더 설정
  res.setHeader('Content-Type', 'text/html; charset="utf-8"');
  res.setHeader('Content-Length', Buffer.byteLength(html));
  // 응답 보내기
  res.end(html);
}

function badRequest(res){
  res.statusCode = 400;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Bad Request');
}

function add(req, res){
  var body = "";
  req.setEncoding('utf-8');
  req.on('data', function(chunk){
    body += chunk;
  });
  req.on('end', function(){
    var obj = qs.parse(body);
    items.push(obj.item);
    show(res);
  });
}
