var parse = require('url').parse;
module.exports = function route(obj){
  return function(req, res, next){
    // req.method 확인
    if(!obj[req.method]){
      // 지정된 method가 아닌 경운
    }

    var routes = obj[req.method];
    var url = parse(req.url);
    var paths = Object.keys(routes);

    // 각 경로에 따른 작업 수행
    for(var i=0; i<paths.length; i++){
      var path = paths[i];
      var fn = routes[path];

      // TODO: path에서 세부 설정 추출
      // 예: /users/10 --> 10
      path = path
        .replace(/\//g, '\\/')
        .replace();

      // 설정된 정규식 패턴에 부합하는 문자열 반환
      var re = new RegExp('^' + path + '$');
      var captures = url.pathname.match(re);

      // 패턴에 부합하는 문자열이 있는 경우
      if(captures){
        // 경로에 지정된 함수 인자 추출
        var args = [req, res].concat(caputres,slice(1));
        // 경로에 지정된 함수 실행
        fn.apply(null, args);
        return;
      }
    }
    next();
  }
}
