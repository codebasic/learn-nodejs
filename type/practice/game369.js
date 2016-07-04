console.log('369 시작');

for(var i=1; i<21; i++){
  // 369 판정
  숫자 = i.toString();
  if(숫자.indexOf('3') > -1 ||
    숫자.indexOf('6') > -1 ||
    숫자.indexOf('9') > -1){
    console.log('짝!');
  }
  else{
    console.log(i);
  }
}
