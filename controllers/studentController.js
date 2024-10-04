
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

const searchPage=async(req,res)=>{
    const {empno}=req.body;
    const data=await empModel.find({"empno":empno})
    console.log(empno);
    res.send(data);

}

const empSearchByQuery=async(req,res)=>{
    const {name,city}=req.query;
    const Data= await empModel.find({$and:[{"name":name},{"city":city}]});
    res.send(Data);
}
const empSaveCreate=async(req,res)=>{
    const {empno,name,city,salary}=req.body;
    const MyData=empModel.create({
        empno:empno,
        name:name,
        city:city,
        salary:salary
    })
    res.send(MyData);
}
module.exports={
    homePage,
    insertPage,
    displayPage,
    searchPage,
    empSearchByQuery,
    empSaveCreate
}
