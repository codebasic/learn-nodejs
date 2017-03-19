/*jshint node: true*/
'use strict';

var assert = require('assert');
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/test', function(err, db){
  if(err) throw err;

  var collection = db.collection('demo');

  collection.updateOne({a: 2}, {$set: {b: 1}}, function(err, result){
    if(err) throw err;

    assert.equal(1, result.result.n);
    console.log(result);

    db.close();
  });
});
