var person1 = {
  // data 속성
  _name : '이성주',
  _birthday : '01-01',

  // accessor 속성
  get name(){
    console.log("이름 읽기");
    return this._name;
  },

  set name(value){
    console.log("이름 설정");
    this._name = value;
  },

  get birthday(){
    return this._birthday;
  }
}

console.log(person1.name);
person1.name = '김성주';

// get만 지정되면 읽기 전용값이 됨.
console.log(person1.birthday);
person1.birthday = '12-27';
console.log(person1.birthday);

// 하지만 완전히 숨기는 것은 아님
person1._name = '이성주';
console.log(person1.name);

// 이미 생성된 객체에 Accessor 정의하기
Object.defineProperty(person1, "twitter", {
  get: function() {
    var url = "http://www.twitter.com/"
    return url+this._twitter;
  },
  set: function(value){
    console.log('트위터는 인생에 그다지 도움이 ...');
    this._twitter = value;
  }
});

person1.twitter = '@LeeSeongjoo';
console.log(person1.twitter);
