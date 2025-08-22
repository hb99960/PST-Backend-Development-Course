const Course = require("../models/courses.model");
const User = require("../models/user.model");


// POST /courses
const createCourse = async (req, res) => {
  try {
    console.log(req.body);
    const { code, title, description, instructorId } = req.body;

    const instructor = await User.findById(instructorId);
    if (!instructor) {
      return res.status(404).json({ message: "Instructor not found" });
    }

    if (instructor.role !== "instructor") {
      return res.status(400).json({ message: "Only instructors can create courses" });
    }

    
    const course = await Course.create({ code, title, description, instructorId });
    
    // await UserModel.findByIdAndUpdate(instructorId, {
    //   $addToSet: { courses: course._id }
    // });

    //  const instructor = await UserModel.findById(instructorId);
    //  instructor.courses.push(course._id);
    //  await instructor.save();

    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /courses
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate("instructorId", "name email");
    // const courses = await CoursesModel.find();
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /courses/:courseId
const getCourseById = async (req, res) => {
  try {
    const { courseId } = req.params;

    const course = await Course.findById(courseId).populate("instructorId", "name email");
    if (!course) return res.status(404).json({ error: "Course not found" });

    res.status(200).json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PATCH /courses/:courseId
const updateCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const updates = req.body;

    const course = await Course.findByIdAndUpdate(courseId, updates, { new: true });
    if (!course) return res.status(404).json({ error: "Course not found" });

    res.status(200).json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE /courses/:courseId
const deleteCourse = async (req, res) => {
  try {
    const { courseId } = req.params;

    const course = await Course.findByIdAndDelete(courseId);
    if (!course) return res.status(404).json({ error: "Course not found" });

    res.status(200).json({ message: "Course deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse
};