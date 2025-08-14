const fs = require("fs")

console.log("Request received")

setTimeout(() => {
    console.log("Data received from DB")
}, 0);

process.nextTick(()=>{
    console.log("Server is UP")
})

console.log("App is working")

fs.readFile("./contacts.txt", 'utf-8', (err, data)=>{
    console.log(data)
})

setImmediate(()=>{
    console.log("I am in setImmediate")
})

console.log("End")