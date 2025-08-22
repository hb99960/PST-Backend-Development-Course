const mongoose = require("mongoose");


const connectToDB = async ()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/test")
        console.log("DB Connection Successful");

        // const allUsers = await User.find()
        // // console.log(allUsers);

        // // Write
        // const user = {
        //     name:"Hello Singh",
        //     email:"hello.singh@gmail.com",
        //     interest:"frontend",
        //     marks:45
        // }
        // const newUser = await User.create(user);
        // console.log("Single User created", newUser);

        // const users = await User.insertMany([
        //     { name: "Vivek Singh", marks: 20, interest: "Frontend" },
        //     { name: "Ananya", marks: 25, interest: "AI" }
        // ]);
        // console.log("Multiple users inserted")

        // // Reada

        // // Find all users
        // const allUsers2 = await User.find();
        // console.log("All users: ", allUsers2);

        // // Find one user
        // const studentDetails = await User.findOne({ name: "Vivek Singh" });
        // console.log("Student Details : ", studentDetails);

        // // Find by ID
        // const userById = await User.findById("68a3df19b1796385eccbfb09");
        // console.log(userById);

        // // Update one document
        // await User.updateOne({ name: "Harshit" }, { $set: { marks: 80 } });

        // // Find by ID and update
        // await User.findByIdAndUpdate("68a3df19b1796385eccbfb09", { interest: "backend" }, { new: true });

        // const userById2 = await User.findById("68a3df19b1796385eccbfb09");
        // console.log(userById2);

        // // Delete one
        // await User.deleteOne({ name: "Vivek Singh" });

        // // Find by ID and delete
        // await User.findByIdAndDelete("68a3df19b1796385eccbfb09");

    } catch(error){
        console.error("Connection error : ", error);
    }
}

module.exports = connectToDB;
