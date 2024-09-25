


const express=require("express")
const route=express.Router();

route.get("/stuinfo",(req,res)=>{
    res.send("<h1>Students information's");
})
route.get("/stufees",(req,res)=>{
    res.send("<h1>Students fees");
})
route.get("/sturesult",(req,res)=>{
    res.send("<h1>Students result");
})
route.get("/stusubject",(req,res)=>{
    res.send("<h1>Students subject");
})
module.exports=route;




