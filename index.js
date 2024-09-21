// const express=require("express");
// const app=express();

// app.get("/home",(req,res)=>{
//     res.send("<h1>WE are MERN Developer</h1>");
// })

// app.get("/about",(req,res)=>{
//     res.send("<h1>All About us!!</h1>");
// })
// app.get("/contact",(req,res)=>{
//     res.send("<h1>Contact us</h1>");
// })
// app.get("/service",(req,res)=>{
//     res.send("<h1>Contact us</h1>");
// })

// app.listen(8000);


// const express=require("express");
// const app=express();
// const PORT=8000;

// app.get("/",(req,res)=>{
//     res.send("Welcome to my program!!!");
// })

// app.listen(PORT,()=>{
//     console.log(`server Run on port:${PORT}`);
// })


// const express=require("express");
// const app=express();
// const stuRoute=require("./routes/studentRoutes");
// const teacherRoute=require("./routes/teacherRoutes");
// app.get("/",(req,res)=>{
//     res.send("Welcome to Home page");
// })
// app.use("/students",stuRoute);
// app.use("/teacher",teacherRoute);

// app.listen (8000,()=>{
//     console.log("Server runs on this port");
// });

const express=require("express");
const app=express();
const stuRoute=require("./routes/studentRoutes")
app.get("/",(req,res)=>{
    res.send("<h1>This is my home page");
})
app.use("/student",stuRoute);

app.listen(8000,()=>{
    console.log("server run on this port");
})