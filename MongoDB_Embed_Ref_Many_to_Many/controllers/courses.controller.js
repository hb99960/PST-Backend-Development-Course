const Course = require("../models/courses.model");
const User = require("../models/user.model");


const getAllCourse = async (req, res)=>{
    try{

        const courses = await Course.find().populate("instructorId", "name email interest")
        res.status(200).send({response:"List of all courses", courses: courses})

    } catch(err){
        console.error("Error fetching courses : ", err);
        res.status(500).send({message:"Error fetching courses : ", error:err});
    }

}

const createNewCourse = async (req, res) =>{

    try{

        const {code, title, description, instructorId} = req.body;

        const user = await User.findById(instructorId);
        if(!user){
            res.status(404).send({message:"Instructor Id is not valid"});
        }

        // if

        const course = await Course.create({code, title, description, instructorId});

        res.status(200).send("Course Created");

    } catch(error){
        console.error("Error creating courses : ", error);
        res.status(500).send({message:"Error creating courses : ", error:error});
    }
    
}

module.exports = {getAllCourse, createNewCourse};