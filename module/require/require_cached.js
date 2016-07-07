function loadModule(msg){
    var t1 = new Date().getTime();
    require('../foo');
    var t2 = new Date().getTime();

    console.log(msg);
    console.log(t2 - t1);
}

loadModule('첫 번째 로딩');
loadModule('두 번째 로딩');
