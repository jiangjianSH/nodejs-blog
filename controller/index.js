var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/*', function(req, res, next) {
  console.log("You can add security check here");
  next();
});

router.get('/hello', function(req, res, next) {
  res.render('hello', { title: 'Express', time: req.requestTime});
});

router.get('/helloworld', function(req, res, next) {
	res.render('helloworld', {title: "Hello, World"});
});

router.get('/introduction', function(req, res, next) {
    res.render('introduction');
});

router.get('/hanging', function(req, res){
  //this url request will be hanging.
});

module.exports = router;
