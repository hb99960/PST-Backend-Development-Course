const express = require("express");
const { enrollStudent, getStudentCourses, getCourseStudents } = require("../controllers/enrollment.controller");
const enrollmentRouter = express.Router();

// 1. Enroll student in a course
enrollmentRouter.post("/enroll", enrollStudent);

// 2. Student Courses
// eg: Raj -> Course1, Course2, Course3
enrollmentRouter.get("/student/:studentId/courses", getStudentCourses);

// 3. Course Students
// FSD -> 100 students
enrollmentRouter.get("/course/:courseId/students", getCourseStudents);

module.exports = enrollmentRouter;