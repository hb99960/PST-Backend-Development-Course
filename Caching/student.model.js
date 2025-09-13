const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    studentId: Number,
    marks: Number
})

const StudentModel = mongoose.model("students", studentSchema);

module.exports = StudentModel;