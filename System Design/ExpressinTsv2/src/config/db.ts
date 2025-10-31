import mongoose from "mongoose";

const dbConnect =() => {

    mongoose.connect("mongodb://localhost:27017/express")
    .then(()=>{
        console.log("DB connection successfull");
    })
    .catch((error) => {
        console.error("DB Connection failed", error)
    })
}

export {
    dbConnect
}