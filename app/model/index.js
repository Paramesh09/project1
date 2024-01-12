const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number
})
const Student = mongoose.model('studentsList', studentSchema)

module.exports = Student;