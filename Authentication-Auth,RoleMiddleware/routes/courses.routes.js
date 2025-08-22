const express = require("express");
const { getAllCourses, createCourse, updateCourse, deleteCourse } = require("../controllers/courses.controller");
const { authMiddleware } = require("../middlewares/auth.middleware");

const coursesRouter = express().router;


coursesRouter.get("/", authMiddleware, getAllCourses);
coursesRouter.post("/", createCourse);
coursesRouter.patch("/", updateCourse);
coursesRouter.delete("/", deleteCourse);

module.exports = coursesRouter;