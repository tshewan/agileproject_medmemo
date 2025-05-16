// importing the module from the express

const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const app = express('');
// const dotenv = require('dotenv');
// dotenv.config({path: './config.env'});
const userRouter = require("./routes/userRoutes");
const medicineRouter = require("./routes/medicineRoutes")
const viewRouter = require("./routes/viewRoutes")
const diseaseRouter = require("./routes/diseaseRoutes")
const cookieParser = require('cookie-parser')
app.use(cookieParser())


//middleware
app.use(express.json()); //allow the express to process json
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "/views")))
// app.use("api/v1/roles", roleRouter);shgtra
app.use("/api/v1/users", userRouter);
app.use("/medicines", medicineRouter);
app.use("/diseases", diseaseRouter)
app.use("/", viewRouter);


module.exports = app