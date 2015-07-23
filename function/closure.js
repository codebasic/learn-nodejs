// 일반 함수
console.log('--- 일반 함수 ---');
function counter(){
  // var count = 0;
  return ++count;
}

var count = 0; // 전역 변수
console.log(counter());
count += 100; // 중간에 임의 조작 위험
console.log(counter())


// closure
function makeCounter(init){
    var count = init; // 초기값 설정
    return function(){
        count += 1;
        return count;
    }
}

var counter1 = makeCounter(0);
var counter2 = makeCounter(100);

console.log('counter1');
for(var i=0; i<3; i++){
  console.log(counter1());
}

console.log('counter2');
console.log(counter2());
console.log(counter2());

var counter3 = makeCounter(10);
console.log('counter3');
console.log(counter3());


// 도전과제
// 실행할 때마다, 한 개의 원소가 추가되는 클로져 함수
console.log('-- makeNumList -- ');
function makeNumList(initList){
  var numList = initList;
  return function(){
    var lastIdx = numList.length - 1;
    // 마지막 값에 1을 더해 새로운 원소로 추가
    numList.push(numList[lastIdx] + 1);

    return numList;
  }
}

numList1 = makeNumList([0]);
numList2 = makeNumList([100]);

console.log(numList1());
console.log(numList1());
console.log(numList2());
console.log(numList2());

// var numList = [0];
// console.log(makeNumList());
// console.log(makeNumList());

// 도전과제
// 피보나치 수열의 다음 숫자 생성
// 0 1 1 2 3 5 8 13 ...
console.log('\n---generateFibo---');
function generatorFibo(a,b){
  return function(){
    var old_b = b;
    b = a+b;
    a = old_b;

    return b;
  }
}

// 피보나치 수열 10개 생성
nextFibo = generatorFibo(0,1);
for(var i=0; i<10; i++){
  console.log(nextFibo());
}

console.log();
nextFibo55_89 = generatorFibo(55, 89);
for(var i=0; i<10; i++){
  console.log(nextFibo55_89());
}
