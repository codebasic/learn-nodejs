var canadianDollar = 0.91;

function roundTwoDecimal(amount){
  return Math.round(amount*100) / 100;
}

function convert(money, to){
  // 원화 기준 환율 정보 설정
  rates = {'USD':1.0/1100};
  // 캐나다 환율 정보 추가
  rates['CAD'] = rates['USD']*canadianDollar;
  return roundTwoDecimal(money * rates[to]);
}

// 다른 모듈에서 사용할 수 있는 함수 추가
exports.canadianToUS = function(canadian){
  return roundTwoDecimal(canadian*canadianDollar);
};

exports.convert = convert;
