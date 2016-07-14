var express = require('express');
var router = express.Router();

router.post("/writeArticle", function(req, res) {
    console.log("title:" + req.body.title);
    console.log("tag:" + req.body.tags);
    console.log("content:" + req.body.content);
    res.send("");
});

module.exports = router;