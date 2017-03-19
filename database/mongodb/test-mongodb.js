const assert = require('assert');

describe('MongoDB', function(){
  const MongoClient = require('mongodb').MongoClient;
  const url = 'mongodb://localhost:27017';
  var db;

  after(function(){
    db.close();
    db = null;
  });

  it('connect', function(done){
    MongoClient.connect(url, function(err, mongodb){
      assert.ifError(err);
      db = mongodb;
      done();
    });
  });

  describe('CRUD', function(){
    var collection;
    before(function(done){
        MongoClient.connect(url, function(err, mongodb){
          db = mongodb;
          collection = db.collection('documents');
          done();
        });
    });

    describe('INSERT', function(){
      it('Single Document', function(done){
        var doc = {이름:'이성주', 이메일: 'seongjoo@codebasic.io'};
        collection.insert(doc, function(err, result){
          assert.ifError(err);
          assert.equal(1, result.result.n);
          done();
        });
      });
      it('Bulk', function(done){
        var docs = [{n: 1}, {n:2}, {n:3}];
        collection.insertMany(docs, function(err, result){
          assert.ifError(err);
          assert.equal(3, result.result.n);
          assert.equal(3, result.ops.length);
          done();
        });
      });
    });

    describe('FIND', function(){
      it('Query Filter', function(done){
        collection.find({이름: '이성주'}, function(err, docs){
          assert.ifError(err);
          docs.forEach(function(d){
            assert.equal('이성주', d.이름);
          });
          done();
        });
      });
    });

    describe('UPDATE', function(){
      it('One', function(done){
        collection.updateOne(
          {이름: '이성주'},
          {$set: {이메일: 'seongjoo@codebasic.co'}},
          function(err, result){
            assert.ifError(err);
            assert.equal(1, result.result.n);
            done();
        });
      });
    });

    describe('REMOVE', function(){
      it('ONE', function(done){
        collection.deleteOne({이름: '이성주'}, function(err, result){
          assert.ifError(err);
          assert.equal(1, result.result.n);
          done();
        });
      });
    });
  });
});
