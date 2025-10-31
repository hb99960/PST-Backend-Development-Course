import mongoose, { Schema } from "mongoose";

// user : name, dept
interface IUser{
    name:string,
    dept:string
}

const userschema = new Schema<IUser>({
    name:{
        type:String,
        required:true
    },
    dept:{
        type:String,
        required:true
    }
})

const User = mongoose.model("users", userschema);

export {
    User
}