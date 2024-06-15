const express = require("express");
const router = express.Router();

const {createStudent, getStudents, getStudentById, updateStudent, deleteStudent} = require("../controllers/Student");

router.post("/createStudent", createStudent);
router.get("/getStudents", getStudents);
router.get("/getStudentById/:studentId", getStudentById);
router.put("/updateStudent/:studentId", updateStudent);
router.delete("/deleteStudent/:studentId", deleteStudent);

module.exports = router;