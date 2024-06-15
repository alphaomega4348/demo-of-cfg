const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
const JWT_SECRET = process.env.JWT_SECRET;

const adminAuth = async (req, res, next) => {
  const token = req.header("token");
  if (!token) {
    res.status(401).send({ error: "Invalid Token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    const admin = await Admin.findById(data.admin._id);
    if (!admin) {
      return res.status(401).json({ error: "Invalid Token" });
    }
    req.admin = data.admin;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid Token" });
  }
};

module.exports = adminAuth;
