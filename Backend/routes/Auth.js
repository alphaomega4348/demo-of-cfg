const express = require("express");
const router = express.Router();
const userAuth = require("../middlewares/userAuth");
const { register, login, changePass } = require("../controllers/Auth");

router.post("/register", register);
router.post("/login", login);
router.put("/changePass", userAuth, changePass);

module.exports = router;
