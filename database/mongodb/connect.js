/*jshint node: true*/
'use strict';

var assert = require('assert');
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/test', function(err, db){
  if(err) throw err;
  console.log('MongoDB에 연결됨');

  db.close();
});
