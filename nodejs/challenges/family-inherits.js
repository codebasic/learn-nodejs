var inherits = require('util').inherits;

function Father(surname, givenName, fortune, happiness){
  this.surname = surname;
  this.givenName = givenName;
  this.fortune = fortune;
  this.happiness = happiness;
}

// 재산을 늘리는 능력
Father.prototype.makeFortune = function(amount) {
  this.fortune += amount;
}

// 가족을 돌보는 능력
Father.prototype.careFamily = function(amount){
    this.happiness += amount;
}

Father.prototype.sayName = function(){
  console.log('우리는 ' + this.surname + ' 씨 집안');
}
// 아버지에게 성을 물려받음
// 아버지보다 재산을 1.5배로 빨리 늘릴 수 있음.
function Son(Surname, givenName, fortune, happiness){
  Father.call(this, Surname, givenName, fortune, happiness);
}

inherits(Son, Father);

Son.prototype.makeFortune = function(amount){
  amount *= 1.5
  Father.prototype.makeFortune.call(this, amount);
}

// 아버지에게 성을 물려받음.
// 아버지보다 가족을 돌보는 능력이 1.5배 뛰어남.
function Daughter(Surname, givenName, fortune, happiness){
  Father.call(this, Surname, givenName, fortune, happiness);
}

inherits(Daughter, Father);

Daughter.prototype.careFamily = function(amount){
  amount *= 1.5;
  Father.prototype.careFamily.call(this, amount);
}

var fatherKim = new Father('김', '주성', 10000, 100);
var fatherLee = new Father('이', '주성', 20000, 110);

var sonKim = new Son(fatherKim.surname,
  '성주', fatherKim.fortune, fatherKim.happiness);
var daughterLee = new Daughter(fatherLee.surname,
  '성주', fatherLee.fortune, fatherLee.happiness);

sonKim.sayName();
daughterLee.sayName();

sonKim.makeFortune(100);
console.log(sonKim.fortune);
daughterLee.careFamily(100);
console.log(daughterLee.happiness);
