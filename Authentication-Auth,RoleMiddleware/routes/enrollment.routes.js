const express = require("express");
const enrollementRouter = express.Router();

const { getStudentCourses, enrollStudent, getCourseStudents, unenrollStudent } = require("../controllers/enrollment.controller");

enrollementRouter.post("/enroll", enrollStudent);
enrollementRouter.get("/student/:id/courses", getStudentCourses);
enrollementRouter.get("/course/:id/students", getCourseStudents);
enrollementRouter.delete("/unenroll", unenrollStudent);

module.exports = enrollementRouter;