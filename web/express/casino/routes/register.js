const express = require('express');
const formidable = require('formidable');
const router = express.Router();

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

module.exports = router;
