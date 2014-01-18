#! /usr/bin/nodejs
var express = require('express');
var app = express();

app.get('/hello.txt', function(req, res){
  console.log("yooyoyoyoyoyoyoy");
  res.send('Hello World');
});

app.listen(8080);
console.log('Listening on port 8080');
