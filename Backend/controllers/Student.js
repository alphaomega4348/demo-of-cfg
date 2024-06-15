const Student = require("../models/Student");

const createStudent = async (req, res) => {
  try {
    const { name, standard, subjects } = req.body;
    if(!name || !standard || !subjects){
      return res.status(400).json({ success: false, error: "Please provide all details" });
    }
    await Student.create({ name, standard, subjects });
    res
      .status(200)
      .json({ success: true, message: "Student created successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal Server Error!" });
  }
};

const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json({ success: true, students });
    } catch (error) {
        res.status(500).json({ success: false, error: "Internal Server Error!" });
    }
}

const getStudentById = async (req, res) => {
    try {
        const { studentId } = req.params;
        if(!studentId){
            return res.status(400).json({ success: false, error: "Please provide studentId" });
        }
        const studentDetails = await Student.findById(studentId);
        res.status(200).json({ success: true, studentDetails });
    }
    catch (error) {
        res.status(500).json({ success: false, error: "Internal Server Error!" });
    }
}

const removeStudent = async (req, res) => {
    try {
        const { studentId } = req.params;
        if(!studentId){
            return res.status(400).json({ success: false, error: "Please provide studentId" });
        }
        await Student.findByIdAndDelete(studentId);
        res.status(200).json({ success: true, message: "Student removed successfully" });
    }
    catch (error) {
        res.status(500).json({ success: false, error: "Internal Server Error!" });
    }
}



const updateStudentSubjectLevel = async (req, res) => {
    try {
        const { studentId,subject,level } = req.body;
        if(!studentId || !level){
            return res.status(400).json({ success: false, error: "Please provide studentId and level" });
        }
        const student = await Student.findById(studentId); 
        const idx = student.subjectLevel.findIndex((sub) => sub.name === subject);
        if(idx !== -1){
            student.subjectLevel[idx] = {name:subject,level}; 
            student.save();
        }
        else{
            student.subjectLevel.push({name:subject,level});
            student.save();
        }
        res.status(200).json({ success: true, message: "Student level updated successfully" });
    }
    catch (error) {
        res.status(500).json({ success: false, error: "Internal Server Error!" });
    }
}

moduke.exports = { createStudent ,getStudentById, getStudents, removeStudent, updateStudentSubjectLevel};