var express = require('express');
var router = express.Router();
const studentModel = require('../../model/student');
const { connectMongoDB } = require('../../mongoDB_config');

router.get("/home", async (req, res) => {
  try {
    const students = await studentModel.find();
    res.render('studentWeb', {data: students});
  } catch (error) {
    console.log(error);
  }
});

router.post('/addStudent', async (req, res) => {
  try {
    
  } catch (error) {
    
  }
})

module.exports = router;
