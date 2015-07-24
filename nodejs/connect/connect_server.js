var connect = require('connect');
var logger = require('./setup');

var app = connect()
  .use(logger(':method :url'))
  .use('/admin', restrict)
  .use('/admin', admin)
  .use(hello)
  .listen(3000);
console.log('서버 실행 중');

// 예제 6.6
function restrict(req, res, next){
  var authorization = req.headers.authorization;
  if(!authorization) {
    return next(new Error('Unauthorized'));
  }

  parts = authorization.split(' ');
  var scheme = parts[0];
  var auth = new Buffer(parts[1], 'base64')
      .toString().split(':');
  var user = auth[0];
  var pass = auth[1];

  // 데이터베이스에서 사용자명과 비밀번호 확인
  authenticateWithDatabase(user, pass, function(err){
    if(err) return next(err);
    next();
  });

}

// 예제 6.7
function admin(req,res, next){
  switch(req.url){
    case '/':
      res.end('try /users');
      break;
    case '/users':
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(['tobi', 'loki', 'jane']));
      break;
  }
}

function restrictFileAccess(req, res, next){
  // 모의 인증
  var isAccessGranted = false;
  if(isAccessGranted){
    next();
  }
  else{
    res.setHeader('Content-Type', 'text/plain');
    res.end('Access denied');
  }
}

function logger(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
}

function hello(req, res, next){
  res.setHeader('Content-Type', 'text/plain');
  res.end('hello world');
  next();
}
