var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Web 
var indexRouter = require('./routes/index');
var studentRouter = require('./routes/web/student_router');

// API
var studentApiRouter = require('./routes/api/student_api');
var userApiRouter = require('./routes/api/user_api');
const { connectMongoDB } = require('./config/mongoDB_config');

var app = express();

// Connect mongoDB
connectMongoDB();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json);

// API route
app.use('/', indexRouter);
app.use('/studentsApi', studentApiRouter);
app.use('/userApi', userApiRouter);

// Web route
app.use('/studentRoute', studentRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
