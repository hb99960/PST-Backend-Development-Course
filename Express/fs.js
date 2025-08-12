const fs = require("fs");

// read the file : db.json
// let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
// console.log(data);
// console.log('Todos are ', data.todos);


// const newTask = {id: 4, task:"Learn Express", status:"ongoing"};
// // write the file: db.json
// data.todos.push(newTask)
// fs.writeFileSync("./db.json", JSON.stringify(data));

// // read the file : db.json
// data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
// console.log(data);
// console.log('Todos are ', data.todos);

function getTasks(){
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    // console.log(data);
    // console.log('Todos are ', data.todos);
    return data;
}

function setTasks(data){
    fs.writeFileSync("./db.json", JSON.stringify(data));
}

module.exports = {getTasks, setTasks};




