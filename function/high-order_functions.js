function doSomething(whatToDo){
    whatToDo();
}

var whatToDo = function(){
    console.log('뭘 할까?');
}

doSomething(whatToDo);

whatToDo = function(){
    console.log('뭘 먹을까?');
}

doSomething(whatToDo);

doSomething(function(){console.log(1+2);});