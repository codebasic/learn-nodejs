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
