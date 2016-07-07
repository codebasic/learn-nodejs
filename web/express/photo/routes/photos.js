// 데이터베이스에서 사진 관련 접근
// var Photo = require('../models/Photo');
var path = require('path');
var fs  = require('fs');
var join = path.join;

// 기본적으로 표시할 사진 URL
var photos = [];
photos.push({
  name: 'Node.js Logo',
  path: 'http://nodejs.org/images/logos/nodejs-green.png'
});
photos.push({
  name: 'Ryan Speaking',
  path: 'http://nodejs.org/images/ryan-speaker.jpg'
});

exports.list = function(req, res){
  res.render('photos', {
    title: 'Photos',
    photos: photos
  });
}

// 예제 8.15
exports.form = function(req,res){
  res.render('photos/upload', {
    title: '사진 업로드'
  })
}

// 예제 8.16
exports.submit = function(dir){
  // TODO: 사진 폼에서 데이터가 온 경우 처리
  return function(req, res, next){
    // HTTP 요청에서 이미지 데이터 객체
    var img = req.files.photo.image;
    var name = req.body.photo.name || img.name;
    var path = join(dir, img.name);
  }
}
