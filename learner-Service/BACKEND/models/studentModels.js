const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const StudentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = Student = mongoose.model("students", StudentSchema);
