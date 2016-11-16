const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var context = {
    title: 'Express',
    user: req.session.userAccount
  };

  res.render('index', context);
});

module.exports = router;
