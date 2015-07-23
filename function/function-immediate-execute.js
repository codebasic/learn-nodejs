// 함수 정의 즉시 실행
// 함수를 실행하고 나면, 변수에 할당되지 않아 다시 실행할 수 없음.
(function foo(){
    console.log('실행됐습니다!');
})();

foo(); // ReferenceError! 함수 정의가 더이상 유효하지 않음.

// {}는 새로운 스코프를 생성하지 않는다.
var x=123;
if(true){
    (function(){
        var x=456; // 새로운 스코프
        console.log('함수 내 x값:' + x);
    })();
}
console.log(x);
