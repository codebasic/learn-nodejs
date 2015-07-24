// 예제 10.2
var assert = require('assert');
var Todo = require('./todo');
var todo = new Todo;

var testsComplete = 0;

// 예제 10.3
function deleteTest(){
  console.log('deleteTest 시작');
  
  todo.add('나 삭제해줘');
  assert.equal(todo.getCount(), 1,
    '값이 1개 있었어야 합니다.');
  todo.deleteAll();
  assert.equal(todo.getCount(), 0,
    '값이 없어야 함.');

  // 테스트 종료 시, 테스트 수행 횟수 추가
  testsComplete++;
}

// 예제 10.5
function doAsyncTest(testCallback){
  todo.doAsync(function(value){
    assert.ok(value,
      '콜백 실행 결과 true 반환이 되었어야 함.');

    testsComplete++;
    testCallback();
  });
}

// 예제 10.7 테스트 실행
deleteTest();
doAsyncTest(function(){
  console.log('doAsyncTest 완료');
});
console.log("수행된 테스트:", testsComplete);
