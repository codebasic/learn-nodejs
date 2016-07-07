var http = require('http');
var url = require('url');

var items = []; // 인메모리 "DB"

function 색인확인(요청, 응답){

}

function 항목등록(요청, 응답){
  var 항목 = '';
  요청.setEncoding('utf8');
  요청.on('data', function(조각){
    항목 += 조각;
  });
  요청.on('end', function(){
    items.push(항목);
    console.log(items);
    응답.end('OK\n');
  });
}

function 항목내역출력(요청, 응답){
  응답.setHeader('Content-Type', 'text/plain;charset=utf8');

  items.forEach(function(항목, 색인){
    var 항목형식 = 색인 +') ' + 항목 + '\n';
    응답.write(항목형식);
  });

  응답.end();
}

function 항목삭제(요청, 응답){
  var path = url.parse(요청.url).pathname;
  var 색인 = parseInt(path.slice(1), 10);

  if(isNaN(색인)){
    응답.statusCode = 400;
    응답.end('Invalid index: ' + 색인);
  } else if(!items[색인]){
    // 색인이 번호이긴 하지만, 해당되는 항목이 없는 경우
    응답.statusCode = 404;
    응답.end('Item not found at ' + 색인);
  } else{
    items.splice(색인, 1); // 색인 위치 항목 삭제
    응답.end('OK\n');
  }
}

function 항목갱신(요청, 응답){
  var path = url.parse(요청.url).pathname;
  var 색인 = parseInt(path.slice(1), 10);

  if(isNaN(색인)){
    응답.statusCode = 400;
    응답.end('Invalid index: ' + 색인);
  } else if(!items[색인]){
    // 색인이 번호이긴 하지만, 해당되는 항목이 없는 경우
    응답.statusCode = 404;
    응답.end('Item not found at ' + 색인);
  } else{
    var 항목 = '';
    요청.on('data', function(조각){
      항목 += 조각;
    });
    요청.on('end', function(){
      items[색인] = 항목;
      응답.end('OK\n');
    });
  }
}

var server = http.createServer(function(요청, 응답){
  var 요청처리 = {
    POST: function(){
      console.log('POST 요청 수신');
      항목등록(요청, 응답);
    },
    GET: function(){
      console.log('GET 요청 수신');
      항목내역출력(요청, 응답);
    },
    DELETE: function(){
      console.log('DELETE 요청 수신');
      항목삭제(요청, 응답);
    },
    PUT: function(){
      console.log('PUT 요청 수신');
      항목갱신(요청, 응답);
    }
  };

  요청처리[요청.method]();
});

server.listen(3000);
console.log('RESTful 서버 실행 중');
