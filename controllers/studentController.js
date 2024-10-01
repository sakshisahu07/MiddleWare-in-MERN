
const empModel=require("../models/studentModel");

const homePage=(req,res)=>{

    res.send("This is home page");
}
const insertPage=(req,res)=>{
    const {empno,name,city,salary}=req.body;
    const employee=new empModel({
        empno:empno,
        name:name,
        city:city,
        salary:salary
    })
    employee.save();
    res.send("Employee Data Inserted");
}
const displayPage=async(req,res)=>{
    const empdata=await empModel.find();
    res.send(empdata);
}
module.exports={
    homePage,
    insertPage,
    displayPage
}