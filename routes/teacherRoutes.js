

const express=require("express");
const route=express.Router();

route.get("/subject",(req,res)=>{
    res.send("<h1>Teacher subject");
})
route.get("/salary",(req,res)=>{
    res.send("<h1>Teacher salary");
})
route.get("/department",(req,res)=>{
    res.send("<h1>Teachers department");
})

module.exports=route;