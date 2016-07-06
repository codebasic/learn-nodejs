var request = require('request');

var url = 'http://localhost:3000';

function handleBadStatus(statusCode){
  if(statusCode != 200){
    throw new Error(statusCode);
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
      handleBadStatus(res.statusCode);
      console.log(body);
    });
  },
  'GET': ()=>{
    request.get(url, function(err, res, body){
      handleBadStatus(res.statusCode);
      console.log(body);
    });
  }
}

var command = process.argv[2];
if(!(command in execute_command)){
  console.error(command + ' is not a valid request');
  process.exit(1);
}
execute_command[command]();
