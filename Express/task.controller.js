// business logic

const { getTasks, setTasks } = require("./fs");

const getAllTasks = (req, res) => {
    let data = getTasks()
    const todos = data.todos;
    res.json({
        message:"List of All tasks",
        response: todos
    })
}

const createNewTask = (req, res) =>{
    // 
    const body = req.body;
    console.log(body);

    const data = getTasks();
    console.log(data);
    const todos = data.todos;
    console.log(todos);

    // write
    const newId = Number(todos[todos.length -1].id) + 1;
    const newTask = {id: newId, ...body};
    todos.push(newTask);
    setTasks(data);

    res.json({
        message:"New task Created",
        response: getTasks().todos
    })

}

const updateStatusOfTask = (req, res) =>{

    // req.params

}

const deleteTask = (req, res)=>{

}

module.exports = {getAllTasks, createNewTask, updateStatusOfTask, deleteTask}