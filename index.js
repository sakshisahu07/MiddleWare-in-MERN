
const express=require("express");
const app=express();
const stuRoute=require("./routes/studentRoutes")
app.get("/",(req,res)=>{
    res.send("<h1>Welcome to home page");
})
app.use("/student",stuRoute);

app.listen(8000,()=>{
    console.log("server runs on this port");
})
