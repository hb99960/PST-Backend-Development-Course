const Course = require("../models/courses.model");
const Enrollment = require("../models/enrollment.model");
const enrollment = require("../models/enrollment.model");
const User = require("../models/user.model");

const enrollStudent = async (req, res)=>{

    // courseId? body
    // userId? body

    const {courseId, studentId} = req.body;
    
    const course = await Course.findById(courseId);
    if(!course){
        res.status(404).send({message:"Course Id is not valid"});
    }
    // check if courseId is valid

    // check if userId is valid
    const user = await User.findById(studentId);
    if(!user){
        res.status(404).send({message:"User Id is not valid"});
    }
    console.log(user)
    console.log(user.role)

    if(user.role != "student"){
        res.status(400).send({message:"User is not a student"});
    }

    // check if already enrolled
    const enrolled = await Enrollment.findOne({userId:studentId, courseId:courseId});
    if(enrolled){
        res.status(400).send({message:"Student already enrolled"});
    }

     // create
     const enrollment = await Enrollment.create({courseId: courseId, userId:studentId});  
     res.status(200).send({message:"Student enrollment Successful"})  

}

const getStudentCourses = async (req, res) =>{
    // studentId? params
    const studentId = req.params.studentId;

    // check if valid
    const user = await User.findById(studentId);

    if(!user){
        res.status(404).send({message:"User not found"});
    }

    // find
    const studentCourses = await Enrollment.find({userId:studentId})
    .populate({path:"courseId", select:"title instructorId -_id", populate:{path:"instructorId", select:"name email -_id"}})
    .populate({path:"userId", select:"name -_id"})

    const result = studentCourses.map( r => ({student: r.userId.name, course: r.courseId.title}));
    console.log(result);
    
    res.status(200).send({message:"List of Courses", response:studentCourses});
}

const getCourseStudents = async (req, res) =>{

    // // studentId? params
    const courseId = req.params.courseId;

    // check if valid
    const course = await Course.findById(courseId);

    if(!course){
        res.status(404).send({message:"User not found"});
    }

    // find
    const studentCourses = await Enrollment.find({courseId:courseId}).populate("userId", "name")
    res.status(200).send({message:"List of Courses", response:studentCourses});

}

module.exports = {enrollStudent, getStudentCourses, getCourseStudents};