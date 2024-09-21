
const express=require("express");
const route=express.Router();

route.get("/stuinfo",(req,res)=>{
    res.send("<h1>Students information");
})
route.get("/stufees",(req,res)=>{
    res.send("<h1>student fees records");
})
module.exports=route;