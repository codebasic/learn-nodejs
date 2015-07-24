function server(f){
  result = f();
  return result;
}

function sync(){
  return 'sync';
}

function asyncTrouble(){
  var msg;
  // wait 시간 후 실행
  var wait = 3000;
  setTimeout(function(){
    msg = '난 게을러서 ...'
  }, wait);

  return msg;
}

function downloadSimulation(){
  var task = function(){
    console.log('다운로드 완료 ... 된 것처럼');
  };

  setTimeout(task, 3000);
}

// var result;
// result = server(sync);
// console.log(result);
// result = server(asyncTrouble);
// 문제! 결과가 나오기 전에 이미 실행됨.
// console.log(result);

console.log('다운로드 시작');
server(downloadSimulation);
console.log('다운로드 중 ...');
