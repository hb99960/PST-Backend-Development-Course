const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        require:true
    },
    courseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"course",
        require:true
    },
    enrolledAt:{
        type:Date,
        default:Date.now
    },
    progress:{
        type:Number,
        default:0
    }
})

const Enrollment = mongoose.model("enrollment", enrollmentSchema);
module.exports = Enrollment;