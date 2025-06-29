const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Task", taskSchema);

