require("dotenv").config();

// imports
const express = require("express");
const mongoose = require("mongoose");
const courseRoutes = require("./routes/course");
const instituteRoutes = require("./routes/institute");
const studentRoutes = require("./routes/student");
const teacherRoutes = require("./routes/teacher");
const usersRoutes = require("./routes/user");
const uploadImgRoutes = require("./routes/uploadImg");

//express app
const app = express();

//cors for production
var cors = require('cors')
app.use(cors()) 

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});




// routes
app.use("/course" , courseRoutes);
app.use("/institute" , instituteRoutes);
app.use("/student" , studentRoutes);
app.use("/teacher" , teacherRoutes);
app.use("/user" , usersRoutes);
app.use("/upload" , uploadImgRoutes);






// connect database
mongoose.set('strictQuery' , false);
const connectDB = async ()=>{
  try{
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('database connected');
  }catch(error){
    console.log(error);
  }
}

connectDB().then(()=>{
  app.listen(process.env.PORT)
})