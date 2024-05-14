const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const MembershipsSchema = new Schema({

  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  contact: {
    type: Number,
    required: true
  },
  membershipType: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Membership = mongoose.model("memberships", MembershipsSchema);