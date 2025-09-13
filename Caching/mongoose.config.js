const mongoose = require("mongoose");

const connectToDB = () =>{
    mongoose.connect("mongodb://localhost:27017/students")
    .then(()=>{console.log("MongoDB connected")})
    .catch((error)=>{console.log("MongoDB connection failed!!!")})
}

module.exports = connectToDB;