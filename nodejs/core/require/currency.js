var canadianDollar = 0.91;

function roundTwoDecimal(amount){
  return Math.round(amount*100) / 100;
}

console.log(exports);

// 다른 모듈에서 사용할 수 있는 함수 추가
exports.canadianToUS = function(canadian){
  return roundTwoDecimal(canadian*canadianDollar);
}
