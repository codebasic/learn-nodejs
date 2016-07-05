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
for(var i=0; i < 손님목록.length; i++){
  손님목록[i].showProfile = function(){
    if(!this.객실번호) {
      console.log('워크인');
    }else{
      console.log(this.객실번호 + '호');
    }

    소개 = this.이름 + '가 '
    소개 += this.자본.금액
    소개 += ' ' + this.자본.통화
    소개 += ' 들고 왔다!';
    console.log(소개);
  }
}

for(var i=0; i < 손님목록.length; i++){
  손님목록[i].showProfile();
}
