var express = require('express');
var router = express.Router();
const studentModel = require('../../model/student');



router.get("/getStudent", async (req, res) => {
  try {
    const students = await studentModel.find({});
    res.send(students);
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
