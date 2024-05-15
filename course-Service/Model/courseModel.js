import mongoose from "mongoose";
const quizSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  option1: {
    type: String,
    required: true,
  },
  option2: {
    type: String,
    required: true,
  },
  option3: {
    type: String,
    required: true,
  },
  option4: {
    type: String,
    required: true,
  },
  Answer: {
    type: String,
    required: true,
  },
});

// Schema for lessons
const lessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  videourl: {
    type: String,
  },
  quiz: [quizSchema],
});

// Schema for courses
const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    instructor: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    Image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    createdBy: {
      type: String,
      required: true,
    },
    created_at: { type: Date, default: Date.now },

    lessons: [lessonSchema],
  },
  { collection: "courses" }
);

// Creating mongoose model using Schema
const CourseModel = mongoose.model("Course", courseSchema);

module.exports = CourseModel;
