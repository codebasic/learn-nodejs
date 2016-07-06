var 색상 = ['빨강', '파랑', '초록'];

for(var i=0; i<색상.length; i++){
  console.log(색상[i]);
}

// 유의
for(var i in 색상){
  console.log(색상[i]);
}

var book = {
  제목: 'oop js',
  연도: 2016
}

for(var 속성 in book){
  console.log(속성);
}
