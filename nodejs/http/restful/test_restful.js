var request = require('request');

var url = 'http://localhost:3000';

function checkResponse(res){
  if(res.statusCode != 200){
    console.error(res.statusCode);
    process.exit(1);
  }
}

var execute_command = {
  'POST': ()=>{
    var body = process.argv[3];
    request.post({
      url: url,
      method: 'POST',
      headers:{
        'Content-Type': 'text/plain;charset=utf-8',
        'Content-Length': Buffer.byteLength(body)
      },
      body: body
    },
      function(err, res, body){
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
    var item_index = process.argv[3];
    if(isNaN(parseInt(item_index))){
      console.error(item_index + '는 유효한 색인 번호가 아닙니다.');
      process.exit(1);
    }
    request.delete(url + '/' + item_index, function(err, res, body){
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
