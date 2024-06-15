const jwt = require("jsonwebtoken");
const Teacher = require("../models/Teacher");
const JWT_SECRET = process.env.JWT_SECRET;

const teacherAuth = async (req, res, next) => {
  const token = req.header("token");
  if (!token) {
    res.status(401).send({ error: "Invalid Token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    const teacher = await Teacher.findById(data.teacher._id);
    if (!teacher) {
      return res.status(401).json({ error: "Invalid Token" });
    }
    req.teacher = data.teacher;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid Token" });
  }
};

module.exports = teacherAuth;
