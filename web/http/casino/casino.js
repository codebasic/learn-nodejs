var PokerCard = require('./poker').PokerCard;

function 환전(화폐, 대상통화){
  var 환율기준 = {'USD': 1100, 'KRW':1};

  // 환전 가능 화폐
  if(!(화폐.통화 in 환율기준) || !(대상통화 in 환율기준)){
    console.log('죄송합니다. 해당 화폐는 환전이 어렵습니다.');
    return;
  }

  var 환율 = 환율기준[화폐.통화] / 환율기준[대상통화];

  var 환전화폐 = 화폐.금액 * 환율;
  return 환전화폐;
};

function CasinoGuest(이름, 자본){
  if(this instanceof CasinoGuest){
    this.이름 = 이름;

    Object.defineProperty(this, '자본',{
      get: function(){
        var 환전금액 = 0;
        for(var 화폐 in this._자본){
          환전금액 += 환전({금액: 자본[화폐], 통화: 화폐}, 'USD');
        }
        return 환전금액;
      },
      set: function(value){
        if(typeof value == 'number'){
          throw new Error('{USD: 100}과 같은 형식이어야 합니다.');
        }
        this._자본 = value;
      }
    });

    this.자본 = 자본;
  }
  else{
      return new CasinoGuest()
  }
}

CasinoGuest.prototype.카드패합계 = function(){
  var 합계 = 0;
  if(!this.카드패) return;
  this.카드패.forEach(function(카드){
    합계 += 카드.valueOf();
  });
  return 합계;
};
CasinoGuest.prototype.자본변경 = function(변경값){
  var 자본 = {'USD': this.자본['USD'] + 변경값};
  this.자본 = 자본;
};


function 카드덱생성(){
  var 문양목록 = ['스페이드', '다이아', '하트', '클로버'];
  // 카드덱 구성
  var 카드덱 = [];
  for(var i=0; i < 문양목록.length; i++){
    var 문양 = 문양목록[i];
    for(var 숫자값=1; 숫자값 < 14; 숫자값++){
      var 카드 = new PokerCard(문양, 숫자값);
      카드덱.push(카드);
    }
  }

  return 카드덱;
}

module.exports.환전 = 환전;
module.exports.CasinoGuest = CasinoGuest;
module.exports.카드덱생성 = 카드덱생성;
