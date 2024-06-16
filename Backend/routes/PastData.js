const express = require('express');
const router = express.Router();

const { getStudentData } = require("../controllers/pastData");


router.get("/getPastData", getStudentData);


module.exports = router;