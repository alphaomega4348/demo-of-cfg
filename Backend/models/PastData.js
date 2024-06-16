const mongoose = require("mongoose");
const { Schema } = mongoose;

const PastData = new Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    pastLevels: {
      type: [String],
      enum: ["No Record", "Fail", "Word", "Sentence", "Paragraph", "Story"],
      default: "No Record",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PastData", PastData);
