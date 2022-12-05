const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./userRouter");
const morgan = require("morgan");
const cors = require("cors");

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//Router
// const Personrouter = require('./PersonsRoute');
app.use("/api", userRouter);

// LocalHost
app.listen(2000, () => {
  console.log("Server Started on 2000");
});

// DB server creation
mongoose.connect("mongodb://localhost:27017/userAuth", (err) => {
  if (err) {
    console.log("DB is not connected");
  }
  console.log("DB connected successfully");
});

// Body-parser
// app.use(express.json());

// Middleware Morgan
// app.use(morgan('dev')); // GET /about 200 7.482 ms - 18

// About
// app.get('/about', (req, res) => {
//     res.send("Hi I am about Page")
// });
