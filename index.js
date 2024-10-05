const express=require("express");
const app=express();

app.use("/",(req,res,next)=>{
    console.log("this is a middle ware which is alwysss runsss")
    next();
})

app.get("/",(req,res,next)=>{
    console.log("home console");
    res.send("Home page");
    next();
})

app.get("/about",(req,res,next)=>{
    console.log("about Page");
    res.send("About uss!!1")
})

app.use("/",(req,res,next)=>{
    console.log("Millde Ware 1");
    next();
})

app.listen(8000,()=>{
    console.log("Server Runs on this port");

})