var request = require('request');
var querystring = require('querystring');

var command = process.argv[2];

var url = 'http://localhost:3000';

function handleBadStatus(statusCode){
  if(statusCode != 200){
    throw new Error(statusCode);
  }
}

if(command == 'POST'){
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
}
else if(command == 'GET'){
  request.get(url, function(err, res, body){
    handleBadStatus(res.statusCode);
    console.log(body);
  });
}
