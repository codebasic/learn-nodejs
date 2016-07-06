function foo(value){
  return value;
}

console.log(typeof foo);
console.log(foo);
console.log(foo(5));

var goo = foo;
console.log(goo(5));
