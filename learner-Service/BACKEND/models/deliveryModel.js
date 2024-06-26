const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const DeliverySchema = new Schema(
  {
    studentId: { type: String, default: "" },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "courses",
      required: false,
    },
    trackingId: {
      type: String,
      default: "",
    },
    enrolled: {
      type: Boolean,
      default: true,
    },
    inprogress: {
      type: Boolean,
      default: false,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    completedDate: {
      type: Date,
    },
    startDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = Delivery = mongoose.model("deliveries", DeliverySchema);
