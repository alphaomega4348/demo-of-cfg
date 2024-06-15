const express = require("express");
const router = express.Router();

const {createStudent, getStudents, getStudentById, updateStudentSubjectLevel, removeStudent} = require("../controllers/Student");

router.post("/createStudent", createStudent);
router.get("/getStudents", getStudents);
router.get("/getStudentById/:studentId", getStudentById);
router.put("/updateStudent/:studentId", updateStudentSubjectLevel);
router.delete("/deleteStudent/:studentId", removeStudent);

module.exports = router;