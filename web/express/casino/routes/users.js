var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function(req, res){
  console.log('register request received');

  console.log(req.body.name);
  //res.cookie('name', req.body.name);
  var userAccount = req.session.userAccount;
  if(!userAccount){
    userAccount = req.session.userAccount = {};
  }

  userAccount.name = req.body.name;
  userAccount.email = req.body.email;
  userAccount.password = req.body.password;

  res.redirect('/');
});

router.post('/logout', function(req, res){
  req.session.destroy(function(err){
    if(err){console.error(err);}
    res.redirect('/');
  });
});

module.exports = router;
