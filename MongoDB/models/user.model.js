// Schema, Model, Types of Schema
// Who interact with DB : Schema or Model  ? Model
// 

const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    houseNumber:Number,
    landmark:String,
    pinCode:String
})

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    interest:{
        type:String,
        enum:["frontend", "backend", "fullstack"]
    },
    marks:{
        type:Number,
        min:0,
        max:100
    },
    address:[addressSchema],
    isActive:Boolean,
    role:{
        type:String,
        require:true,
        enum:["student", "mentor", "admin"],
        default:"student"
    },
    clubs: [mongoose.Schema.Types.ObjectId]
}, {timestamps:true})

const User = mongoose.model("User", userSchema);

module.exports = User;