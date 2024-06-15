const Class = require("../models/Class");

const createClass = async (req, res) => {
  try {
    const { name } = req.body;
    await Class.create({ name });
    res
      .status(201)
      .json({ success: true, message: "Class created successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal Server Error!" });
  }
};
const getClasses = async (req, res) => {
  try {
    const classes = await Class.find();
    res.status(200).json({ success: true, classes });
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal Server Error!" });
  }
};

const getClassById = async (req, res) => {
    try {
        const { classId } = req.params;
        const classDetails = await Class.findById(classId);
        res.status(200).json({ success: true, classDetails });
    } catch (error) {
        res.status(500).json({ success: false, error: "Internal Server Error!" });
    }
    
}

const addStudentToClass = async (req, res) => {
  try {
    const { classId, studentId } = req.body;
    await Class.findByIdAndUpdate(classId, { $push: { StudentId: studentId } });
    res
      .status(200)
      .json({ success: true, message: "Student added to class successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal Server Error!" });
  }
};

const deleteStudentFromClass = async (req, res) => {
  try {
    const { classId, studentId } = req.body;
    await Class.findByIdAndUpdate(classId, { $pull: { StudentId: studentId } });
    res
      .status(200)
      .json({
        success: true,
        message: "Student removed from class successfully",
      });
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal Server Error!" });
  }
};

module.exports = {
  addStudentToClass,
  createClass,
  getClasses,
  deleteStudentFromClass,
  getClassById,
};
