

// const express=require("express");
// const app=express();
// const stuRoute=require("./routes/studentRoute")
// app.get("/",(req,res)=>{
//     res.send("<h1>This is my home page");
// })
// app.use("/students",stuRoute);

// app.listen(8000,()=>{
//     console.log("Server Runs on this page");
// })


const express=require("express");
const app=express();
const mongoose=require("mongoose");
const StuRoute=require("./routes/studentRoute");
mongoose.connect("mongodb://127.0.0.1:27017/sakshi").then()

app.use("/students",StuRoute);

app.listen(8000,()=>{
    console.log("server Runs on this port");
})