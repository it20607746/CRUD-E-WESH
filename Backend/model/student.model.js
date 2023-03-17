const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  dateOfBirth: {
    type: String,
    trim: true
  },
  subject: {
    type: String,
    trim: true
  },
  nationalID: {
    type: String,
    trim: true
  },
  mobileNumber: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    trim: true
  },
});

module.exports = mongoose.model("Student", productSchema);
