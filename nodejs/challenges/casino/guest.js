exports.Guest = Guest;

function Guest(name, money){
  this.name = name;
  // TODO: money 설정
  if(money<0){ this.money = 0;}
  else{this.money = money}
}

Guest.prototype.showProfile = function (){
  console.log('나 ' + this.name + '. 돈 ' + this.money + ' 들고 왔다!');
};
