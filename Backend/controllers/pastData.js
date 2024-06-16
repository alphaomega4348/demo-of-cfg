const PastData = require("../models/PastData");
const logger = require('../logger/Logger')

const getStudentData = async (req,res) => {
    try {
        const {studentId} = req.params;
        const studentData = await PastData.findOne({studentId}).select('pastLevel');
        if(!studentData){return res.json({data:[]})}
        const data = studentData.pastLevel;
        res.status(200).json({success: true, data});
    } catch (error) {
        res.status(500).json({success: false, error: "Internal Server Error!"});
    }
}

module.exports = {getStudentData}