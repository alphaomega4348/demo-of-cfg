const express = require("express");
const router = express.Router();

const { createClass, getClasses, getClassById, updateClass, deleteClass } = require("../controllers/Class");

router.post("/createClass", createClass);
router.get("/getClasses", getClasses);
router.get("/getClassById/:classId", getClassById);
router.put("/updateClass/:classId", updateClass);
router.delete("/deleteClass/:classId", deleteClass);

module.exports = router;