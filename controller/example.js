var express = require("express");
var router = express.Router();

router.use(function(req, res, next) {
	console.log("before access");
	next();
	console.log("after access");
}, function (req, res, next) {
	console.log("this is second middleware");
	next();
});

router.get('/a', function(req, res) {
	res.send('Hello from A!');
});

router.get('/b', function(req, res, next) {
	console.log('the response will be sent by the next function...');
	next();
}, function(req, res) {
	res.send("Hello from B!");
});

var cb0 = function(req, res, next) {
	console.log('CB0');
	next();
};

var cb1 = function(req, res, next) {
	console.log('CB1');
	next();
};
var cb2 = function(req, res, next) {
	console.log('CB2');
	next();
};
var cb3 = function(req, res) {
	res.send("Hello from C!");
};

router.get('/c', [cb0, cb1, cb2, cb3]);

router.get('/d', function(req, res) {

});


router.get('/download', function(req, res) {
	res.download("demo.txt");
});

router.get('/end', function(req, res) {
	res.end();
});

router.get('/json', function(req, res) {
	var result = {"name": "jiangjian", "age": 25};
	res.json(result);
});

router.get('/redirect', function(req, res) {
	res.redirect("http://baidu.com");
});

router.get('/sendFile', function(req, res) {
	res.sendFile("/home/jiangjian/test/js/node/blog/demo.txt");
});
module.exports = router;
