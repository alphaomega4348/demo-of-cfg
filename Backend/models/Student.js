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
      type: String,
      enum: ["No Record","Fail","Word","Sentence","Paragraph","Story"],
      default: "No Record",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", Student);
