const express = require("express");
const { getAllTasks, createNewTask, updateStatusOfTask, deleteTask } = require("./task.controller");
const taskRouter = express.Router();

taskRouter.get("/", getAllTasks)

taskRouter.post("/", createNewTask);

// change the status of task
taskRouter.patch("/:id", updateStatusOfTask);

taskRouter.delete("/:id", deleteTask);



module.exports = {taskRouter};