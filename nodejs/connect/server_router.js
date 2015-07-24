// 예제 6.9
var connect = require('connect');
var router = require('./middleware/router');

var routes = {
  GET : {
    '/users': function(req, res){
      res.end('tobi, loki, ferret');
    },
    '/user/:id': function(req, res, id){
      res.end('user ' + id);
    }
  },
  DELETE : {
    '/user/:id': function(req, res, id){
      res.end('user deleted: ' + id);
    }
  }
}

connect()
  .use(router(routes))
  .listen(3000);
