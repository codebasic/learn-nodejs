var assert = require('assert');

describe('객체', function(){
  var person;

  beforeEach(function(){
    person = new Object();
    person.이름 = '이성주';
    person.이메일 = 'seongjoo@codebasic.io';
  });

  it('속성 포함 여부', ()=>{
    assert(person.이름);
    assert(person['이메일']);
    assert(!person.트위터); // 예외가 발생하지 않습니다.
    person.트위터 = '@LeeSeongjoo';
    assert(person.트위터);
  });
  it('변수와 객체 속성', ()=>{
    person.x = 'x';
    delete person.x;
    assert(!person.x);

    delete person;
    assert(person);
  });
  it('함수와 메소드', ()=>{
    var 사람 = {
      이름: '이성주',
      소개하기: function(){
        return `제 이름은 ${this.이름}입니다.`;
      }
    };
    assert('제 이름은 이성주입니다.', 사람.소개하기());
  });
  it('속성의 영역', function(){
    assert('이름' in person);
    assert('이메일' in person);

    assert(person.hasOwnProperty('이름'));
    assert(person.hasOwnProperty('이메일'));

    assert(!person.hasOwnProperty('toString'));
    assert(!person.hasOwnProperty('hasOwnProperty'));
  });
  it('속성 나열', function(){
    var 속성목록 = Object.keys(person);
    assert.deepEqual(['이름', '이메일'], 속성목록);

    var 속성들 = [];
    for(var 속성 in person){
      속성들.push(속성)
    }
    assert.deepEqual(속성목록, 속성들);
  });
  it('속성의 유형', function(){
    person = {
      이름: '이성주',

      get 자본(){
        return this._자본;
      },
      set 자본(값){
        if(값 < 0){
          throw new Error('자본값은 음수가 될 수 없습니다.');
        }
        if(isNaN(값)){
          throw new Error('숫자값이 아닙니다.');
        }
        this._자본 = 값;
      }
    };

    person.자본 = 100;
    assert.equal(100, person.자본);
    assert.throws(function(){
      person.자본 = -1000;
    }, Error);
    assert.throws(function(){
      person.자본 = '백만원';
    }, Error);
  })

  describe('속성 설정', function(){
    describe('데이터 속성', function(){
      it('enumerable', function(){
        Object.defineProperty(person, '이메일', {
          enumerable: false
        });
        var 속성목록 = Object.keys(person);
        assert.deepEqual(['이름'], 속성목록);
      });
      it('configurable', function(){
        Object.defineProperty(person, '이름', {
          configurable: false,
          enumerable: true
        });
        delete person.이름;
        assert(person.이름);

        // 설정 방지 해제 시도
        assert.throws(()=>{
          Object.defineProperty(person, '이름', {
            configurable: true,
            enumerable: true
          });
        }, TypeError);
      });
      it('writable', function(){
        Object.defineProperty(person, '이름', {
          enumerable: true,
          writable: false
        });

        person.이름 = '김성주';
        assert.equal('이성주', person.이름);
      });
      it('value', function(){
      Object.defineProperty(person, '트위터', {
        value: '@LeeSeongjoo',
        enumerable: true,
        configurable: true,
        writable: true
      });

      assert.equal('@LeeSeongjoo', person.트위터);
    });
    });
    describe('접근자 속성', function(){
      it('설정', function(){
        Object.defineProperty(person, '자본', {
          set: function(값){
            this._자본 = 값;
          },
          get: function(){
            if(!this._자본) return 0;
            return this._자본;
          }
        });

        assert.equal(0, person.자본);
        person.자본 = 100;
        assert.equal(100, person.자본);
      });
      it('enumerable', function(){
        Object.defineProperty(person, '자본', {
          configurable: true,
          set: function(값){
            this._자본 = 값;
          },
          get: function(){
            if(!this._자본) return 0;
            return this._자본;
          }
        });

        assert.equal(0, person.자본);

        Object.defineProperty(person, '자본', {
          enumerable: false
        });

        assert(!person.자본);
      });

      it('configurable', function(){
        Object.defineProperty(person, '자본', {
          enumerable: true,
          configurable: true,
          set: function(값){
            this._자본 = 값;
          },
          get: function(){
            if(!this._자본) return 0;
            return this._자본;
          }
        });

        Object.defineProperty(person, '자본', {
          enumerable: true,
          configurable: false,
        });

        assert.equal(0, person.자본);
        delete person.자본;
        assert.equal(0, person.자본);
      });
    });
  });

  describe('객체 설정', function(){
    it('속성 추가 설정', function(){
      assert(Object.isExtensible(person));
      Object.preventExtensions(person);
      person.전화 = '010-1234-5678';
      assert(!person.전화);

      // 기존 설정에 대한 작업은 개별 속성 설정을 따릅니다.
      delete person.이메일;
      assert(!person.이메일);

      // "기존" 설정이라고 해도 삭제되면
      // 이제는 "기존" 설정이라 할 수 없습니다.
      person.이메일 = 'seongjoo@';
      assert(!person.이메일);
    });
    it('seal: 추가/삭제 방지', function(){
      Object.seal(person);

      delete person.이름;
      assert(person.이름);

      person.전화 = '1234';
      assert(!person.전화);
    });

    it('freeze: 추가/삭제/쓰기 방지', function(){
      Object.freeze(person);

      person.전화 = '1234';
      assert(!person.전화);

      delete person.이름;
      assert(person.이름);

      person.이름 = '김성주';
      assert.equal('이성주', person.이름);
    });
  });

  describe('함수와 this', function(){
    var 소개;
    function 소개하기(){
      return `안녕하세요, ${this.이름}입니다.`;
    }

    it('call', function(){
      소개 = 소개하기.call(person);
      assert.equal('안녕하세요, 이성주입니다.', 소개);
    });

  });
});
