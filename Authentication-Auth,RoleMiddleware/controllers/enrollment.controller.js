const Course = require("../models/courses.model");
const EnrollmentModel = require("../models/enrollment.model");
const User = require("../models/user.model");

const enrollStudent = async (req, res) => {
    const { studentId, courseId } = req.body;
    try {
      const student = await User.findById(studentId);
      const course = await Course.findById(courseId);
  
      if (!student || !course)
        return res.status(404).json({ message: "Student or Course not found" });
  
      if (student.role !== "student")
        return res.status(400).json({ message: "User is not a student" });
  
      const existing = await EnrollmentModel.findOne({ student: studentId, course: courseId });
      if (existing)
        return res.status(409).json({ message: "Already enrolled" });
  
      const enrollment = new EnrollmentModel({ student: studentId, course: courseId });
      await enrollment.save();
      res.status(201).json({ message: "Enrolled successfully", enrollment });
    } catch (err) {
      res.status(500).json({ message: "Internal server error", error: err.message });
    }
  };
  
  const getStudentCourses = async (req, res) => {
    try {
      console.log(req.body);
      console.log(req.params.id)
      const enrollments = await EnrollmentModel.find({ student: req.params.id }).sort({code:-1}).populate("course").populate("student");
      const e = await EnrollmentModel.find()
                    .populate({ path: "student", select: "name marks -_id" })
                    .populate({ 
                        path: "course", 
                        select: "-_id",
                        populate: { path: "instructorId", select: "name -_id" } 
                    });
    //   res.json(enrollments.map(e => e.course));
    res.json({e})
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch", error: err.message });
    }
  };
  
  const getCourseStudents = async (req, res) => {
    try {
      const enrollments = await EnrollmentModel.find({ course: req.params.id }).populate("student", "name");
      res.json(enrollments.map(e => e.student));
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch", error: err.message });
    }
  };
  
  const unenrollStudent = async (req, res) => {
    const { studentId, courseId } = req.body;
    try {
      const result = await EnrollmentModel.findOneAndDelete({ student: studentId, course: courseId });
      if (!result) return res.status(404).json({ message: "Enrollment not found" });
      res.json({ message: "Unenrolled successfully" });
    } catch (err) {
      res.status(500).json({ message: "Failed to unenroll", error: err.message });
    }
  };

  module.exports = {enrollStudent, unenrollStudent, getStudentCourses, getCourseStudents}