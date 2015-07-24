/* 도전과제
카지노에 온 손님들은 여러 나라에서 왔다. 각 손님은 카지노에서 사용할 돈을 환전해야 한다.

a. 각 손님은 1) 객실번호, 2)현재 보유한 화폐 액수, 3)화폐의 종류 (예: USD)
정보를 갖는다. 달러화 (USD),  위안화 (CNY), 엔화 (JPY)를 보유한
손님 세 명의 정보를 객체로 표현하시오.

b. 각 손님이 보유한 화폐를 원화로 환전하고, 보유한 화폐 종류와 금액을 갱신하시오.

c. 모든 손님의 정보를 출력하시오.

d. 어떤 손님들은 카지노에만 방문하고, 숙박은 하지 않아서 객실번호 정보가 없다.
이런 손님 두 명 정보를 객체로 표현하고, 손님 객체를 모두 포함하는 배열에 추가한다.
이 배열에 담긴 모든 객체의 객실번호를 출력하시오. 없는 경우는, 생략하고 출력.

e. 카지노의 환전소가 다양한 화폐를 구비하기 어려워서 달러화와 유로화만
환전해 주기로 했다. 달러화와 유로화가 아닌 통화를 환전할 때는,
환전 불가 안내를 출력하시오.

f. (node.js)카지노 손님 정보가 customers.json 파일에 저장되어 있다.
이 파일을 읽어들여 손님 정보를 가진 객체를 생성하시오. (교재 p.84 참조)

g. (node.js) 카지노 손님 정보를 HTML 문자열로 구성하고, 웹페이지에서
출력하시오.

h. 손님 정보 객체에 자신의 정보를 출력하는 showProfile 메소드를 추가하시오.
사용 예시. guest1.showProfile --> 나 이성주. 돈 100원 들고 왔다

i. 손님 정보 객체에서, name 속성이 삭제되지 않도록 설정하시오.

j. 손님 정보 객체에서, money가 0 미만의 값이 설정되지 않도록 하시오.
또한, money 정보를 읽어올 때, 기본 통화는 원화(KRW)로 하되,
설정하는 경우 다른 통화값으로 표시되로록 하시오.

k. 손님 정보 객체에 성별 속성을 추가하고, 이 속성이 읽기 전용이 되도록 설정하시오.

g. 환전 등은 카지노에서 제공하는 기능이다. 카지노 객체를 정의하고, convertCurrency와 같은
환전 기능을 카지노 객체의 메소드로 설정하시오.
*/

function convertCurrency(amount, from, rates){
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

function showProfile(guests){
  for(var i=0; i<guests.length; i++){
    console.log() // 한 줄 공백 추가
    // 현재 객체의 속성(key)을 각각 꺼내온다.
    for(var key in guests[i]){
      console.log(key + ":" + guests[i][key]);
    }
  }
}

// 각 손님의 정보 출력
//showProfile(guests);
/*
// customers.json 파일에서 읽어들여 생성
var fs = require('fs'); // node.js Filesystem 모듈
function createGuests(filename){
  fs.readFile(filename, function(err, data){
    if(err){
      console.error(err);
      return;
    }
    // JSON 문자열을 객체로 변환
    var guests = JSON.parse(data.toString());
    // 출력
    console.log('--- JSON 파일에서 생성된 객체 출력 ---');
    showProfile(guests);
  });
}

console.log('JSON 파일 읽기');
createGuests('./customers.json');
*/

// Guest 생성자 함수를 정의하고, 생성자 함수로 각 손님 정보 생성
function Guest(name, money){
  this.name = name;
  this.showProfile = function (){
    console.log('나 ' + this.name + '. 돈 ' + this.money + ' 들고 왔다!');
  };
  // TODO: money 설정
  if(money<0){ this.money = 0;}
  else{this.money = money}
}

var guests = [
  new Guest('이성주' , 100),
  new Guest('김진수', 200),
  new Guest('한석원', 300),
  new Guest('신희진', 400),
  new Guest('정초은', 500),
  new Guest('최기준', 600)];

for(var i=0; i<guests.length; i++){
  guests[i].showProfile();
}

// money 속성을 accessor로 설정
/*
for(var i=0; i<guests.length; i++){
  Object.defineProperty(guests[i], "money", {
    get: function(){
      // 값이 없으면 기본값을 0으로 설정.
      if(!this._money) {this._money = 0;}
      return this._money;
    },

    set: function(value){
      if(value<0){
        console.log('값은 0 이상이어야 합니다.');
        return;
      }

      // if(!currency) currency = 'KRW';
      // 원화로 변경해서 저장.
      this._money = value;
    }
  });
}

guests[0].money = -1000;
console.log(guests[0].money);
*/
