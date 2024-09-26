
const stuInfo=(req,res)=>{
    res.send("<h1>Students information's");
}
const stuFees=(req,res)=>{
    res.send("<h1>Students Fees record");
}
const stuResult=(req,res)=>{
    res.send("<h1>Students Results");
}
const stuSubject=(req,res)=>{
    res.send("<h1>Students Subjects");
}

module.exports={
    stuInfo,
    stuFees,
    stuResult,
    stuSubject
}