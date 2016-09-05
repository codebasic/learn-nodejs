var http = require('http');
var parse = require('url').parse;
var join = require('path').join;
var fs = require('fs');

var server = http.createServer(function(req, res){
  var url = parse(req.url);
  var path = join(__dirname, url.pathname);

  fs.stat(path, function(err, stat){
    if(err){
      if('ENOENT' == err.code){
        // 경로 문제
        res.statusCode = 404;
        res.end('Not Found');
      } else{
        res.statusCode = 500;
        res.end('Internal Server Error');
      }
    } else{
      // 파일이 존재하고, 읽기가 가능한 경우
      var stream = fs.createReadStream(path);
      stream.on('data', function(chunk){
        res.write(chunk);
      });
      stream.on('end', function(){
        res.end();
      });
    }
  });
});

server.listen(3000);
console.log('파일 서버가 요청 대기 중 ...');
