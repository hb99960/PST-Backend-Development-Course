const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "course",
    required: true,
  },
  enrolledAt: { type: Date, default: Date.now },
  progress: { type: Number, default: 0 },
  status: {
    type: String,
    enum: ["ongoing", "completed"],
    default: "ongoing",
  },
}, { versionKey: false });

const EnrollmentModel = new mongoose.model("Enrollment", enrollmentSchema);
module.exports = EnrollmentModel;