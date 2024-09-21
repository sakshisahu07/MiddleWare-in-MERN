
// const express=require("express");
// const route=express.Router();

// route.get("/stuinfo",(req,res)=>{
//     res.send("<h1>Students information");
// })
// route.get("/stufees",(req,res)=>{
//     res.send("<h1>Students fees");
// })
// route.get("/result",(req,res)=>{
//     res.send("<h1>Student Result");
// })
// module.exports=route;

const express=require("express");
const route=express.Router();

route.get("/stuinfo",(req,res)=>{
    res.send("<h1>students information");
})
route.get("/stufees",(req,res)=>{
    res.send("<h1>students Fees");
})
module.exports=route;