var fs = require('fs');
var assert = require('assert');

describe('Compare Sync and Async', function(){
  var timestamp;
  var contents;
  var filename = 'date.txt'

  beforeEach('초기화', function(){
    timestamp = new Date().toString();
    contents = undefined;
    fs.stat(filename, (err, stats)=> {if(!err) fs.unlinkSync(filename)});
    ;
  });

  it('동기 방식으로 파일 입출력을 수행해야 한다.', function(){
    fs.writeFileSync(filename, timestamp);
    contents = fs.readFileSync(filename);

    console.log('내용 확인');
    assert(contents == timestamp);

    console.log('마지막 출력');
  });

  it('비동기 방식으로 파일 입출력을 수행해야 한다.', function(done){
    fs.writeFile(filename, timestamp, function(err){
      if(err) done(err);
      fs.readFile(filename, function(err, contents){
        if(err) done(err);
        console.log('내용 확인');
        assert(contents == timestamp);
        done();
      });
    });

    console.log('마지막 출력');
  });

  it('비동기 방식을 잘못 사용하기 때문에 실패해야 한다', function(done){
    fs.writeFile(filename, timestamp);
    fs.readFile(filename, function(err, data){
      if(err) done(err);
      contents = data;
    });

    assert.notEqual(contents, timestamp);
    done();
  });
});
