const jwt = require("jsonwebtoken");
const Users = require("../models/Users");
const JWT_SECRET = process.env.JWT_SECRET;

const userAuth = async (req, res, next) => {
  const token = req.header("token");
  if (!token) {
    res.status(401).send({ error: "Invalid Token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    const user = await Users.findById(data.user._id);
    if (!user) {
      return res.status(401).json({ error: "Invalid Token" });
    }
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid Token" });
  }
};

module.exports = userAuth;
