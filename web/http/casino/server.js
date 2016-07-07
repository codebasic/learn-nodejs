var http = require('http');
var fs = require('fs');
var join = require('path').join;
var parse = require('url').parse;

var casino = require('./casino');

function 파일명생성(카드){
  var 파일명 = '';

  파일명 += (function(){
    var 매핑 = {'J': 'jack', 'Q': 'queen', 'K': 'king', 'A':'ace'};
    if(!매핑[카드.계급]) return 카드.계급;
    return 매핑[카드.계급];
  })();

  파일명 += '_of_'
  파일명 += (function(){
    var 매핑 = {'클로버': 'clubs', '다이아': 'diamonds',
      '하트' : 'hearts', '스페이드': 'spades'};
    return 매핑[카드.문양];
  })();
  파일명 += '.png';

  return 파일명;
}

function 카드출력(req, res){
  fs.readFile('./cards.html', function(err, data){
    if(err){return console.log(err);}

    var 카드목록 = casino.카드덱생성();
    var 카드태그목록 = 카드목록.map(function(카드){
      var 파일명 = 파일명생성(카드);
      debugger;
      var img태그 = '<img src="img/cards/' + 파일명 + '" ';
      img태그 += 'width="100"';
      img태그 += '>';
      return img태그;
    });

    // 4줄씩 출력되도록 구성
    var 문단 = '<p>';
    for(var i=0; i < 카드태그목록.length; i++){
      문단 += 카드태그목록[i];
      if((i+1)%4==0) {
        문단 += '</p>';
      }
    }

    var template = data.toString();
    var html = template.replace('%cards%', 문단);

    res.setHeader('Content-Type', 'text/html');
    res.end(html);
  });
}

function 이미지출력(req, res){
  var url = parse(req.url);
  var path = join(__dirname, url.pathname);
  fs.readFile(path, function(err, data){
    if(err){return console.log(err);}
    res.setHeader('Content-Type', 'image/png');
    res.end(data);
  });
}

var server = http.createServer(function(req, res){
  var url = parse(req.url);

  if('/' == req.url){
    카드출력(req, res);
  }
  else if(url.pathname.split('/')[1] == 'img'){
    이미지출력(req, res);
  }

});

server.listen(3000);
console.log('카지노 서버가 요청 대기 중...');
