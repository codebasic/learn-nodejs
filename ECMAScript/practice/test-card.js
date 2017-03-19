const assert = require('assert');

describe('포커카드', function(){
  var card;

  // 매 테스트마다 객체 초기화
  beforeEach(function(){
    card = {};
  });

  it('문양 설정', function(){
    card.문양 = '하트';
    assert.equal('하트', card.문양);
  });
  it('계급 설정', function(){
    card.계급 = 7;
    assert.equal(7, card.계급);
  });
  it('문자열 표현', function(){
    card.문양 = '하트';
    card.계급 = 7;
    card.toString = function(){
      return `${card.문양} ${card.계급}`;
    }
    assert.equal('하트 7',card.toString());
  });
  it('문양 유형 확인', function(){
    card = {
      set 문양(값){
        const 유효문양 = ['하트', '다이아', '클럽', '스페이드'];
        if(유효문양.indexOf(값)==-1) return;
        this._문양 = 값;
      },
      get 문양(){
        return this._문양;
      }
    }

    card.문양 = '하트';
    assert.equal('하트', card.문양);
    card.문양 = '심장';
    assert.equal('하트', card.문양);
  });
  it('계급 유형 확인', function(){
    card = {
      set 계급(값){
        const 유효값 = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
        if(유효값.indexOf(값) == -1) return;
        this._rank = 값;
      },
      get 계급(){
        return this._rank;
      }
    };

    card.계급 = 7;
    card.계급 = 'B';
    assert.equal(7, card.계급);
  });
  it('계급 숫자값 자동변환', function(){
    card = {
      set 계급(값){
        this._계급 = numToRank(값);
      },
      get 계급(){
        return this._계급;
      }
    }
    card.계급 = 14;
    assert.equal('A', card.계급);
  });
  it('설정 이후 수정 방지', function(){
    card = {
      set 문양(값) {
        if(this._문양) return;
        this._문양 = 값;
      },
      get 문양(){
        return this._문양;
      },
      set 계급(값) {
        if(this._계급) return;
        this._계급 = 값;
      },
      get 계급(){
        return this._계급;
      }
    };
    card.문양 = '하트';
    card.계급 = 7;

    // 수정 시도
    card.문양 = '다이아';
    card.계급 = 'Q';

    assert.equal('하트', card.문양);
    assert.equal(7, card.계급);
  });
  it('속성 삭제 방지', function(){
    delete card.문양;
    assert(card.문양);
    delete card.계급;
    assert(card.계급);
  });
});

function numToRank(계급){
  매핑 = {11:'J', 12:'Q', 13:'K', 14:'A'};
  변환값 = 매핑[계급];
  if(!변환값) return 계급;
  return 변환값;
}
