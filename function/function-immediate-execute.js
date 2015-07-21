function myfunc(){
    var x=1;
    return x;
}

result = myfunc();
result *= 100;
//console.log(result);

(function myfunc2(){
    console.log('실행됐습니다!');
})();

var x=123;
if(true){
    (function(){
        var x=456; // 새로운 스코프
        console.log('함수 내 x값:' + x);
    })();
}

console.log(x);

