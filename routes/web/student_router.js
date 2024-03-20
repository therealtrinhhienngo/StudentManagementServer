var express = require('express');
var router = express.Router();
const studentModel = require('../../model/student');
const {upload} = require('../../config/upload_file_config');

router.get("/home", async (req, res) => {
  try {
    const students = await studentModel.find();
    res.render('studentWeb', {data: students});
  } catch (error) {
    console.log(error);
  }
});

router.get('/uploadFile', async (req, res) => {
  try {
    res.render('upload_file_web');
  } catch (error) {
    
  }
})

// Upload Function
router.post('/sendFile', upload.single('image'), async (req, res) => {
  try {
    res.send('Upload File Complete!!!')
  } catch (error) {
    console.log('Error: ' + error);
  }
});

module.exports = router;
