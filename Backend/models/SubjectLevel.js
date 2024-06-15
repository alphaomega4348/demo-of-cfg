const mongoose = require("mongoose");
const { Schema } = mongoose;

const SubjectLevel = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    level: {
        type: Number,  
        enum: [1, 2, 3, 4, 5],
        required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SubjectLevel", SubjectLevel);
