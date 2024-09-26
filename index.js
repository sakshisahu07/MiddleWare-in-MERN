

const express=require("express");
const app=express();
const stuRoute=require("./routes/studentRoute")
app.get("/",(req,res)=>{
    res.send("<h1>This is my home page");
})
app.use("/students",stuRoute);

app.listen(8000,()=>{
    console.log("Server Runs on this page");
})
