var poker = require('./poker');
var currency = require('./lib/currency');

var deck = poker.deck;
for(var i=0; i<3; i++){
  // 포커 카드 출력
  console.log(deck[i]);
}

console.log('쇼 미 더 머니!');
var moneyKRW = 500000;
var targetCurrency = 'CAD';
var moneyUSD = currency.convert(moneyKRW, targetCurrency);
console.log(targetCurrency, ':', moneyUSD);
