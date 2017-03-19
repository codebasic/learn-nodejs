function 곱하기(){
  if(arguments.length == 0){
    console.log('뭘 곱하라구? ㅡㅡ+');
    return;
  }

  if(arguments.length == 1){
    return arguments[0];
  }

  var 결과 = 1;
  for(var i=0; i < arguments.length; i++){
    결과 *= arguments[i];
  }
  return 결과;

}

console.log(곱하기(2,3)); // 6
console.log(곱하기(2,3,4)); // 24
console.log(곱하기(2)); // 2
console.log(곱하기()); // undefined
