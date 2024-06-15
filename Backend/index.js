const express = require("express");
const cors = require("cors");
const connectToDB = require("./db");
require("dotenv").config();

const app = express();
connectToDB();

app.use(express.json());
app.use(cors());
app.use("/auth", require("./routes/Auth"));
app.get("/", (req, res) => {
  res.status(200).json("Server Healthy !");
});

app.listen(process.env.PORT, () => {
  console.log(`Connected to server on port ${process.env.PORT}`);
});
