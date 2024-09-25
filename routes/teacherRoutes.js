const express=require("express");
const route=express.Router();

route.get("/teacherinfo",(req,res)=>{
    res.send("<h1>Teachers infomation");
})

route.get("/teachersalary",(req,res)=>{
    res.send("<h1>Teacher salary record");
})
route.get("/teacherdept",(req,res)=>{
    res.send("<h1>Teachers department");
})
route.get("/teachersubject",(req,res)=>{
    res.send("<h1>Teachers subject");
})
module.exports=route;