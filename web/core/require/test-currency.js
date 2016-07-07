var currency = require('./currency');

console.log('캐나다 50달러 --> 미화:');
console.log(currency.canadianToUS(50));
// 오류! exports 객체에 추가되지 않은 것은 접근 불가.
console.log(currency.roundTwoDecimal(50));
