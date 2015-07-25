/*
도전과제

출력예시:

스카이워커 아나킨
사악한 포스 사용
정신력이 약한 사람에게만 적용된다.
사악한 속임수 쓰기

오비완 카노비
포스 사용
정신력이 약한 사람에게만 적용된다.
useDeception를 사용할 수 없습니다.

*/

function Jedi(familyname, name, force){
  this.familyname = familyname
  this.name = name;

  Object.defineProperty(this, "force", {
    get: function(){
      console.log(this._force + ' 포스가 느껴진다.');
      return this._force;
    },
    set: function(value){
      value = parseFloat(value);
      if(value < 0){
        throw new Error('포스는 0보다 커야 합니다.');
      }
      console.log('포스가 함께하길');

      this._force = value;
    },
    enumerable: true
  });

  this.force = force;
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

function DarkJedi(familyname, name, force){
  Jedi.call(this, familyname, name, force);
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


function doJedi(jedi){
  jedi.force;
  var 능력 = ['sayName', 'useForce', 'controlMind', 'useDeception'];
  for(var i=0; i<능력.length; i++){
    if(!(능력[i] in jedi)){
      console.log(능력[i] + '를 사용할 수 없습니다.');
      continue;
    }
    jedi[능력[i]]();
  }
  console.log();
}

var 다스베이더 = new DarkJedi('스카이워커', '아나킨', 10000);
doJedi(다스베이더);

var 오비완  = new Jedi('오비완', '카노비', 2000);
doJedi(오비완);

var 이성주 = new Jedi('이', '성주', -1);
