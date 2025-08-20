// Schema, Model, Types of Schema
// Who interact with DB : Schema or Model  ? Model
// 

const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema()

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
    address:[{
        houseNumber:String,
        landmark:String,
        pinCode:String
    }],
    isActive:Boolean,
    role:{
        type:String,
        require:true,
        enum:["student", "mentor", "instructor"],
        default:"student"
    }
    // clubs: [mongoose.Schema.Types.ObjectId]
}, {timestamps:true})

userSchema.virtuals("isPass").get(function(){
    return this.marks >=40
})

user


const User = mongoose.model("user", userSchema);

module.exports = User;