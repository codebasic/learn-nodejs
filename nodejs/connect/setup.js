// 예제 6.8
function setup(format){
  var regexp = '/:(\w+)/g';
  return function logger(req, res, next){
    // 정규표현식에 설정된 패턴에 따라
    // 문자열 형식을 구성.
    var str = format.replace(regexp,
      function(match, property){
        return req[property];
      });
    console.log(str);
    next();
  }
}

module.exports = setup;
