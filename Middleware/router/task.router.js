const express = require("express");
const { getAllTasks, createNewTask, updateStatusOfTask, deleteTask } = require("../controller/task.controller");
const { bodyValidationMiddleware } = require("../middleware/task.middleware");
const taskRouter = express.Router();

// taskRouter.use((req, res, next) => {
//     console.log("Middleware : 4: Inside Task Router")
//     // res.send({message : "Middleware : 4: Inside Task Router"})
//     next();
// })

// const routeLevelMiddleware = (req, res, next)=>{
//     console.log("Route level Middleware");
//     next();
// }



// taskRouter.get("/", routeLevelMiddleware ,getAllTasks)
taskRouter.get("/", getAllTasks);

taskRouter.post("/", bodyValidationMiddleware, createNewTask);

// change the status of task
// dynamic routes
taskRouter.patch("/:id", updateStatusOfTask);

taskRouter.delete("/:id", deleteTask);

module.exports = {taskRouter};