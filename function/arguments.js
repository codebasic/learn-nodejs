function sum(){
  var total = 0;
  for(var i=0; i<arguments.length; i++){
    total += arguments[i];
  }

  return total;
}

console.log(sum(1,2,3));

function foo(a,b){
  var total = a+b;
  for(var i=2; i<arguments.length; i++){
    total += arguments[i];
  }
  return total;
}

console.log('-- foo --');
console.log(foo(1,2,3));

// 도전과제
// 숫자의 곱하기를 수행하는 함수를 작성하라.
// 숫자는 2개 이상의 임의의 개수일 수 있다.
// 숫자가 1개인 경우, 숫자를 반환
// 숫자가 0개인 경우, 오류 메시지 출력 후 undefined 반환
function product(){
  // 인자가 0개인 경우
  if(arguments.length == 0){
    console.log('1개 이상의 숫자 필요');
    return;
  }
  // 인자가 1개인 경우
  else if(arguments.length==1){
    return arguments[0];
  }

  // 여기에 도달하면, 무조건 두 개 이상.
  var result = 1;
  for(var i=0; i<arguments.length; i++){
    result *= arguments[i];
  }

  return result;
}

product();
console.log(product(2));
console.log(product(2,3,4));
