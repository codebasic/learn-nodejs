var request = require('request');

var url = 'http://localhost:3000';

function checkResponse(res){
  if(res.statusCode != 200){
    console.error(res.statusCode);
    process.exit(1);
  }
}

function checkItemIndex(item_index){
  if(isNaN(parseInt(item_index))){
    console.error(item_index + '는 유효한 색인 번호가 아닙니다.');
    process.exit(1);
  }
  return item_index;
}

function formatPostRequest(url, content){
  return ;
}

var execute_command = {
  'POST': ()=>{
    var content = process.argv[3];
    request({
      url: url,
      method: 'POST',
      headers:{
        'Content-Type': 'text/plain;charset=utf-8',
        'Content-Length': Buffer.byteLength(content)
      },
      body: content
    }, function(err, res, body){
      checkResponse(res);
      console.log(body);
    });
  },
  'GET': ()=>{
    request.get(url, function(err, res, body){
      checkResponse(res);
      console.log(body);
    });
  },
  'DELETE':()=>{
    var item_index = checkItemIndex(process.argv[3]);

    request.delete(url + '/' + item_index, function(err, res, body){
      checkResponse(res);
      console.log(body);
    });
  },
  'PUT':()=>{
    var item_index = checkItemIndex(process.argv[3]);
    var content = process.argv[4];
    request({
      url: url + '/' + item_index, 
      method: 'PUT',
      headers:{
        'Content-Type': 'text/plain;charset=utf-8',
        'Content-Length': Buffer.byteLength(content)
      },
      body: content
    },function(err, res, body){
      checkResponse(res);
      console.log(body);
    });
  }
}

var command = process.argv[2].toUpperCase();
if(!(command in execute_command)){
  console.error(command + '은(는) 유효한 요청이 아닙니다.');
  process.exit(1);
}
execute_command[command]();
