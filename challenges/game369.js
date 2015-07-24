// 3-6-9 게임
function game369(){
  var numbers = [];
  for(var i=1; i<10; i++){
    msg = i;
    if(i==3 || i==6 || i == 9){
      msg = '짝!';
    }
    // 배열에 원소 추가
    numbers.push(msg);
  }
  return numbers;
}

function multiple(x, y){
  return x*y;
}

// numbers = game369(); //함수 호출
// console.log(numbers);
console.log(multiple());
