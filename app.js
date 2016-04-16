var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//加载各个功能模块
var index = require('./controller/index');
var users = require('./controller/users');
var patterns = require('./controller/patterns');

//获取Express实例对象
var app = express();

//设置服务器全局信息
app.locals.title = "blog based on expressjs"
app.locals.name = "Jiang Jian"
app.locals.email = "1264545970@qq.com"

// view engine setup
app.set('views', path.join(__dirname, 'views'));
/*After the view engine is set, you don’t have to specify the engine
 or load the template engine module in your app; Express loads the
  module internally, as shown below (for the above example).
*/
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//tracker every request
var tracker = function (req, res, next) {
	req.requestTime = Date.now(); //记录request接受到的时间
	console.log("收到" + req.ip + "的请求");
  next();
};
app.use(tracker);

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));

//加载与monodb相关的配置
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/nodetest1');
app.use(function(req, res, next) {
	req.db = db;
	next();
});

app.use("/", index);
app.use("/patterns", patterns);
app.use("/users", users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
