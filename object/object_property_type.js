var assert = require('assert');

var person = {
  _이름: '이성주',

  get 이름(){
    return this._이름;
  },

  _자본: 1000,

  get 자본(){
    return this._자본;
  },

  set 자본(value){
    if(!(typeof value == 'number')){
      throw new Error('자본의 값은 숫자만 가능합니다.');
    }
    this._자본 = value;
  }

}

assert.throws(()=>person.자본 = '돈 없다;;', 'Error');
person.자본 += 100;
assert.equal(person.자본, 1100);

person.이름 = '김성주'
assert.equal(person.이름, '이성주');

Object.defineProperty(person, '이메일', {
  get: function(){
    console.log(this.이름 + '<' + this._이메일 + '>');
    return this._이메일;
  },
  set: function(value){this._이메일 = value}
});
person.이메일 = 'seongjoo@';
person.이메일
