const express = require("express");
const { getAllCourse, createNewCourse } = require("../controllers/courses.controller");
const authMiddleware = require("../middleware/auth.middleware");
const courseRouter = express.Router();

courseRouter.get("/", authMiddleware, getAllCourse);
courseRouter.post("/", createNewCourse);

module.exports = courseRouter;