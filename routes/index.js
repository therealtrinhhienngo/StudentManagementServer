var express = require('express');
var router = express.Router();
const studentModel = require('../model/student');
const { connectMongoDB } = require('../mongoDB_config');

connectMongoDB();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
