


const express=require("express");
const route=express.Router();
const stuController=require("../controllers/studentController");

route.get("/home",stuController.homePage);
route.post("/insert",stuController.insertPage);
route.get("/display",stuController.displayPage);

module.exports=route;