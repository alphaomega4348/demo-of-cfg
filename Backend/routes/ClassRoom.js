const express = require("express");
const router = express.Router();

const {
  createClassRoom,
  getClassRooms,
  getClassRoomById,
  deleteStudentFromClassRoom,
  getStudentsInClassRoom
} = require("../controllers/ClassRoom");

router.post("/createClassRoom", createClassRoom);
router.get("/getClassRooms", getClassRooms);
router.get("/getClassRoomById/:classId", getClassRoomById);
router.delete("/deleteStudentFromClassRoom", deleteStudentFromClassRoom);
router.get("/getStudentsFromClassRoom/:classId", getStudentsInClassRoom);

module.exports = router;