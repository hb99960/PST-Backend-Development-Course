const {mongoose} = require("mongoose");

const courseSchema = new mongoose.Schema({
    code:String,
    title:String,
    description:String,
    instructorId:{type: mongoose.Schema.Types.ObjectId, ref:"users"}
})

const Course = mongoose.model("course", courseSchema);
module.exports = Course;