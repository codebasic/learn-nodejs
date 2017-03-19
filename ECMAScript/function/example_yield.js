function* getNumbers(){
  yield 1;
  yield 2;
  return 3;
}

function* getFibonacciSequence(){
  var a=0;
  var b=1;

  yield a;
  yield b;

  var next_value;
  while(true){
    next_value = a+b;
    a = b;
    b = next_value;
    yield next_value;
  }
}
