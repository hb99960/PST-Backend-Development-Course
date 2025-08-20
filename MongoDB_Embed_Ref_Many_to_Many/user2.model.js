// user schema

const mongoose = require("mongoose");

const userSchema2 = new mongoose.Schema({
    name:String,
    email:String,
})

const addressSchema = new mongoose.Schema({
    houseNumber:String,
    city:String,
    zipCode:String,
    userId: 
    {type:mongoose.Schema.Types.ObjectId, ref:"users"}
})

// address schema