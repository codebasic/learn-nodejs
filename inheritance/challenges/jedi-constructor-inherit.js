function Jedi(familyname, name){
  this.familyname = familyname
  this.name = name;
}

Jedi.prototype.sayName = function(){
  var fullName = this.familyname + ' ' + this.name
  console.log('\n'+fullName);
}

Jedi.prototype.useForce = function(){
  console.log('포스 사용');
}

Jedi.prototype.controlMind = function(){
  console.log('정신력이 약한 사람에게만 적용된다.');
}

function DarkJedi(familyname, name){
  Jedi.call(this, familyname, name);
}

// 프로토타입 상속
var util = require('util');
util.inherits(DarkJedi, Jedi);

// 주의! 새 메소드는 프로토타입을 상속받은 이후 추가해야 함.
DarkJedi.prototype.useDeception = function(){
  console.log('사악한 속임수 쓰기');
}

DarkJedi.prototype.useForce = function(){
  console.log('사악한 포스 사용');
}


var 다스베이더 = new DarkJedi('스카이워커', '아나킨');
var 오비완  = new Jedi('오비완', '카노비');

function doJedi(jedi){
  var 능력 = ['sayName', 'useForce', 'controlMind', 'useDeception'];
  for(var i=0; i<능력.length; i++){
    if(!(능력[i] in jedi)){
      console.log(능력[i] + '를 사용할 수 없습니다.');
      continue;
    }
    jedi[능력[i]]();
  }
}

doJedi(다스베이더);
doJedi(오비완);
