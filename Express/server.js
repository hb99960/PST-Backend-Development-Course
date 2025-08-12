const express = require("express");
const app = express();
const fs = require("fs");
const { getTasks, setTasks } = require("./fs");
const { taskRouter } = require("./task.router");

// Task : Create Task Manager using express and FS Module


app.use(express.json()); // this allows json 

app.get("/health", (req, res)=>{
    console.log("Server is up and running")
    res.json({message:"Server is up and running"});
})

app.use("/tasks", taskRouter);


const PORT = 4800;
app.listen(PORT, ()=>{
    console.log(`Server started on ${PORT}`);
})