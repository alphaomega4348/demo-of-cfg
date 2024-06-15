const express = require("express");
const router = express.Router();

const { createClass, getClasses, getClassById, deleteStudentFromClass } = require("../controllers/Class");

router.post("/createClass", createClass);
router.get("/getClasses", getClasses);
router.get("/getClassById/:classId", getClassById);
router.delete("/deleteClass/:classId", deleteStudentFromClass);

module.exports = router;