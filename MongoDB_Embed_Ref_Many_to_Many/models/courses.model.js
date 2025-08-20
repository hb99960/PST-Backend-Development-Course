// courses
// courseId
// name:
// Instructor : Object.Id ref: users

const {mongoose} = require("mongoose");

// referencing ref should be same as in User.model()
const courseSchema = new mongoose.Schema({
    code:String,
    title:String,
    description:String,
    instructorId:{type: mongoose.Schema.Types.ObjectId, ref:"user"}
})


const Course = mongoose.model("course", courseSchema);

module.exports = Course;