function Casino(title, capital){
  this.title = title;
  this.capital = capital;
}

Casino.prototype.showGreeting = function(){
  console.log(this.title + " 카지노에 오신 것을 환영합니다!");
}

Casino.prototype.generateCardDeck =
  require('./poker').generateCardDeck;

Casino.prototype.convertCurrency = function (amount, from, rates){
  /*
  Parameters
    amount : 화폐 액수
    from: 해당 화폐 통화 기호. 예: USD
    rates: 원화 대비 환전율. 기본값이 설정되어 있음.
  */

  if(amount < 0) return;
  if(from == undefined) return; // 현재 화폐
  if(rates == undefined){
    rates = {'KRW': 1, 'USD': 1/1100.0, 'EUR': 1/1300.0};
  }
  if(rates[from] == undefined){
    console.log('죄송합니다. 해당 통화는 환전이 어렵습니다.');
  }
  return amount * rates[from];
}

exports.Casino = Casino;
