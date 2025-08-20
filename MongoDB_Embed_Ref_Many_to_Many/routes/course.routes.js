const express = require("express");
const { getAllCourse, createNewCourse } = require("../controllers/courses.controller");
const courseRouter = express.Router();

courseRouter.get("/", getAllCourse);
courseRouter.post("/", createNewCourse);

module.exports = courseRouter;