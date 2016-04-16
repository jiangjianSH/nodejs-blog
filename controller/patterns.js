/*
当前router文件主要目的是用来学习Express中的router path规则，
Express router path是使用path-to-regexp来进行path匹配的
path-to-regexp:https://www.npmjs.com/package/path-to-regexp
*/

var express = require('express');
var router = express.Router();

router.get("/abc", function(req, res) {
  res.send("match url: /abc");
});

router.get("/ab?c", function(req, res){
  res.send("match url: /ab?c");
});

router.get("/ab+c", function(req, res) {
  res.send("match url: /ab+c");
});

router.get("/ab(cd)c", function(req, res){
  res.send("match url: /ab(cd)?c");
});

router.get("/ab*c", function(req, res) {
  res.send("match url: /ab*c");
})

module.exports = router;
