var http = require('http');
// 파일 시스템 (fs) 접근 모듈
var fs = require('fs');

function handleError(err){
  console.log(err);
  res.end('Serve error');
}

function getTitles(json_filename){
  var titles;
  // JSON 파일에서 데이터 읽기
  fs.readFile(json_filename, function(err, data){
    if(err){ // 파일 읽기 오류 발생 시,
      console.log(json_filename, ' 읽기 오류');
      return handleError(err);
    }
    titles = JSON.parse(data.toString());
  });
  return titles;
}

function getTemplate(template_filename){
  var template;
  // HTML 템플릿에 데이터 삽입
  fs.readFile(template_filename, function(err, data){
    if(err){
      console.log(template_filename, '읽기 오류');
      return handleError(err);
    }
    template =  data.toString();
  });

  return template;
}

function formatHtml(data, tmpl, sep){
  var html = tmpl.replace('%',
    titles.join(sep));
  return html;
}

function processRequest(req, res){
  // http://localhost:3000/
  if(req.url == '/'){
    var titles = getTitles('./titles.json');
    console.log(titles);
    var template = getTemplate('./template.html');
    console.log(template);
    var html = formatHtml(titles, template, '</li></li>');

    // HTTP 응답 구성
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
  }
}

var port = 8000;
http.createServer(processRequest).listen(port);
console.log('서버 실행 중');
console.log('http://localhost:'+port);
