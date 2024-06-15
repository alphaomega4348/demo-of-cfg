const Users = require("../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ success: false, error: "Invalid Request" });
    }
    let user = await Users.findOne({
      $or: [{ username: username }, { email: email }],
    });
    if (user) {
      return res
        .status(409)
        .json({ success: false, error: "User Already Exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const secpass = await bcrypt.hash(password, salt);
    user = await Users.create({
      username: username,
      email: email,
      password: secpass,
    });
    res.status(201).json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error: "Error occured" });
  }
};

const login = async (req, res) => {
  try {
    const { userId, password } = req.body;
    if (!userId || !password) {
      return res.status(400).json({ success: false, error: "Invalid Request" });
    }
    let user = await Users.findOne({
      $or: [{ email: userId }, { username: userId }],
    });
    if (!user) {
      return res
        .json(401)
        .json({ success: false, error: "Invalid Credentials" });
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res
        .status(401)
        .json({ success: false, error: "Invalid Credentials" });
    }
    const data = {
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      },
    };
    const token = jwt.sign(data, JWT_SECRET);
    res.status(200).json({ success: true, token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error: "Error occured" });
  }
};

const changePass = async (req, res) => {
  try {
    const { oldPass, newPass } = req.body;
    if (!oldPass || !newPass) {
      return res.status(400).json({ success: false, error: "Invalid Request" });
    }
    const _id = req.user._id;
    const user = await Users.findById(_id);
    const flag = await bcrypt.compare(oldPass, user.password);
    if (!flag) {
      return res
        .status(401)
        .json({ success: false, error: "Old Password Doesn't Match" });
    } else {
      const salt = await bcrypt.genSalt(10);
      const secure = await bcrypt.hash(newPass, salt);
      await Users.findByIdAndUpdate(_id, {
        password: secure,
      });
      return res.status(200).json({ success: true });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: "Internal server Error" });
  }
};

module.exports = { register, login, changePass };
