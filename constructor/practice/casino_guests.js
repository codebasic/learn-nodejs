var assert = require('assert');
var casino = require('./casino');
var CasinoGuest = require('./casino').CasinoGuest;

var 손님목록 = [
  new CasinoGuest('이성주', {KRW: 100000, USD: 100}),
  new CasinoGuest('초대박', {USD: 10000, KRW: 1000000})
];

손님목록.forEach(function(손님){
  console.log(손님.이름);
  얼마 = 손님.자본
  console.log(얼마);

  assert.throws(()=>{손님.자본 = 1000}, 'Error');
});
