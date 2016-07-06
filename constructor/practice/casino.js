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
        for(var 화폐 in 자본){
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
  }
  else{
      return new CasinoGuest()
  }
}

module.exports.환전 = 환전;
module.exports.CasinoGuest = CasinoGuest;
