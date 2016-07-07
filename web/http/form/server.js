var http = require('http');
var fs = require('fs');
var qs = require('querystring');

var items = []; // 인메모리 "DB"

function 항목추가(req, res){
  var body = '';
  req.setEncoding('utf8');
  req.on('data', (chunk)=> body+=chunk);
  req.on('end', function(){
    var data = qs.parse(body);
    items.push(data.item);
    항목출력(req, res);
  });
}

function 항목출력(req, res){
  // HTML 파일을 읽어들이기
  fs.readFile('./todo.html', function(err, data){
    if(err){return console.log(err);}
    // 현재 items 항목을 HTML 문자열로 바꾸기
    var 할일들 = items.map((item)=>'<li>' + item + '</li>').join('');
    // HTML에 삽입
    var template = data.toString();
    var html = template.replace('%', 할일들);

    res.setHeader('Content-Type', 'text/html;charset=utf8');
    res.setHeader('Content-Length', Buffer.byteLength(html));
    res.end(html);
  });
}

function notFound(res){
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain;charset=utf8');
  res.end('잘못된 경로입니다.');
}

function badRequest(req, res){
  res.statusCode = 400;
  res.setHeader('Content-Type', 'text/plain;charset=utf8');
  res.end('잘못된 요청: ' + req.method);
}

var server = http.createServer(function(req, res){
  if('/' == req.url){
    var 요청처리 = {
      POST:function(){
        console.log('POST 요청 수신');
        항목추가(req, res);
      },
      GET: function(){
        항목출력(req, res);
      }
    };

    if(!요청처리[req.method]){
      badRequest(req, res);
    }
    요청처리[req.method]();
  } else{
    // 기타 경로로 요청이 들어온 경우
    notFound(res);
  }

});

server.listen(3000);
console.log('양식 처리 서버가 요청 대기 중...');
