

const stuModel=require("../models/studentModel");
const homePage=(req,res)=>{
    res.send("<h1>This is our home page!!");
}
const insertPage=(req,res)=>{
    const {rollno,name,city,fees}=req.body;
    const student=new stuModel({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    })
    student.save();
    res.send("Data Succcessfully save!!!")
}
const displayPage=async(req,res)=>{
    const studata=await stuModel.find();
    res.send(studata);
}
module.exports={

    homePage,
    insertPage,
    displayPage
    

}