const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: String}
});

const studentModel = new mongoose.model('StudentObj', studentSchema, 'Students');
module.exports = studentModel;