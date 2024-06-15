const mongoose = require("mongoose");
const { Schema } = mongoose;

const Student = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    standard: {
      type: Number,
      required: true,
    },
    subjectLevel: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", Student);
