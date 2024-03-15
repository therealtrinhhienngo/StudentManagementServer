const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {type: String, required: true, default: ''},
    age: {type: String, required: true, default: '0'}
});

const studentModel = new mongoose.model('StudentObj', studentSchema, 'Students');
module.exports = studentModel;