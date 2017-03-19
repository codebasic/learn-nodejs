/*jshint node: true*/
'use strict';
var assert = require('assert');
var MongoClient = require('mongodb').MongoClient;

// insert
var person = {name: '이성주', email: 'seongjoo@codebasic.io'};

MongoClient.connect('mongodb://localhost:27017/test', function(err, db){
  if(err) throw err;

  var collection = db.collection('people');

  collection.insert(person, function(err, result){
    if(err) throw err;

    console.log(result);

    assert.equal(1, result.result.n);
    assert.equal(1, result.ops.length);

    db.close();
  });
});

// insert many
MongoClient.connect('mongodb://localhost:27017/test', function(err, db){
  if(err) throw err;

  var collection = db.collection('demo');

  collection.insertMany([
    {a: 1}, {a: 2}, {a: 3}
  ], function(err, result){
    if(err) throw err;

    console.log(result);

    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);

    db.close();
  });
});
