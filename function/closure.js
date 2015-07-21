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

