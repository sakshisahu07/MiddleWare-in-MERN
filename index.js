

const express=require("express");
const app=express();
const stuRoute=require("./routes/studentRoutes");
const teacherRoute=require("./routes/teacherRoutes");
app.get("/",(req,res)=>{
    res.send("<h1>welcome to home page");
})
app.use("/student",stuRoute);
app.use("/teacher",teacherRoute);
app.listen(8000,()=>{
    console.log("Server Runs on this port ");
})

