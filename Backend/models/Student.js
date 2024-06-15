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
    level: {
      type: Number,
      enum: [1, 2, 3],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", Student);
