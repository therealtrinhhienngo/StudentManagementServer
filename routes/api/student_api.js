var express = require('express');
var router = express.Router();
const studentModel = require('../../model/student');
const { sendEmailFunction } = require('../../config/mail_config');

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
    const student = req.body;

    console.log(student);

    await studentModel.create({
      name: student.name,
      age: student.age
    });

    return res.status(200).send("Add Complete");
  } catch (error) {
    console.log(error);
  }
})

router.put('/updateStudent/:_id', async (req, res) => {
  try {
    const id = req.params;
    const student = req.body;

    if(id != ''){
      await studentModel.findByIdAndUpdate(id,{
        name: student.name,
        age: student.age
      });

      return res.status(200).send("Update Complete");
    }
  } catch (error) {
    console.log(error);
  }
})

router.delete('/deleteStudent/:_id', async (req, res) => {
  try {
    const id = req.params;
    
    if (id != ''){
      await studentModel.findByIdAndDelete(id);

      return res.status(200).send("Delete Complete");
    }
  } catch (error) {
    
  }
})

router.get('/sendEmail', async (req, res) => {
  try {
    sendEmailFunction();
    res.end();
  } catch (error) {
    console.log('Error: ' + error);
  }
});

module.exports = router;
