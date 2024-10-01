const express=require("express");
const app=express();
const stuRoute=require("./routes/studentRoute")
const mongoose=require("mongoose")
var bodyParser = require('body-parser')

mongoose.connect("mongodb://127.0.0.1:27017/Employee").then(()=>{
    console.log("DB Successfully connected")
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json()) 


app.use("/employee",stuRoute);
app.listen(8000,()=>{
    console.log("Server Runs on this port");
})
