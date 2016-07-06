var assert = require('assert');
var casino = require('./casino');

var 손님1 = {
  이름: '이성주',
  객실번호: 101,
  자본: {통화: 'KRW', 금액: 1000000}
};

var 손님2 = {
  이름: '김성주',
  객실번호: 102,
  자본: {통화: 'USD', 금액: 1000}
};

var 손님3 = {
  이름: '박성주',
  자본: {통화: 'CNY', 금액: 10000}
}

var 손님목록 = [손님1, 손님2, 손님3];
손님목록.forEach(function(손님){
  var 달러 = casino.달러로얼마.call(손님);
  console.log(손님.이름);
  console.log('달러금액: ' + 달러);
});
