// business logic

const { response } = require("express");
const { getTasks, setTasks } = require("../model/fs");

const getAllTasks = (req, res) => {
    const search = req.query.search;
   

    let data = getTasks()
    const todos = data.todos;
    let filteredTasks = todos;
    if(search){
        console.log(search);
        filteredTasks = todos.filter
                                (todo => todo.task.toLowerCase().
                                                    includes(search.toLowerCase()))
        console.log(filteredTasks);
    }

    res.json({
        message:"List of All tasks",
        response: filteredTasks
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

// patch
const updateStatusOfTask = (req, res) =>{

    // without destruturing
    const id  = Number(req.params.id);

    // with destructuring
    // const {id} = req.params;
    console.log(id);

    const updatedTask = req.body;

    // db read
    const data = getTasks();
    const todos = data.todos;

    // = vs == vs ===


    // check if resource exists
    const index = todos.findIndex( todo => todo.id === id);

    if(index === -1){
        // return tj
        res.status(404).send({message:"Task not found"});
    }

    todos[index] = {...todos[index], ...updatedTask};
    // 
    setTasks(data);

    res.send({
        message:"Task Updated",
        response: data.todos
    })

}

const deleteTask = (req, res)=>{

    const id = Number(req.params.id);
    console.log(id);

    // db read
    let data = getTasks();
    let todos = data.todos;

    // check if resource exists
    const index = todos.findIndex( todo => todo.id === id);

    if(index === -1){
        // return tj
        res.status(404).send({message:"Task not found"});
    }

    const fileteredTasks = todos.filter( todo => todo.id !== id)
    data.todos = fileteredTasks
    setTasks(data);

    res.status(200).send({message:"Task Deleted", response: data.todos})

}

module.exports = {getAllTasks, createNewTask, updateStatusOfTask, deleteTask}