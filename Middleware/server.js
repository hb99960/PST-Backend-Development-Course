const express = require("express");
const app = express();
const fs = require("fs");
const { getTasks, setTasks } = require("./model/fs");
const { taskRouter } = require("./router/task.router");
const rateLimit = require("express-rate-limit");

// Task : Create Task Manager using express and FS Module

// Middleware : App level
app.use(express.json()); // this allows json 

const loggerMiddleware = (req, res, next) =>{
    // console.log(`${new Date().toISOString()} : ${req.method} ${req.url}`);
    const log = `[${new Date().toLocaleDateString()} : ${new Date().toLocaleTimeString()}] ${req.method} ${req.url} \n`;
    
    const existingLogs = fs.readFileSync('./logs.txt', "utf-8");

    const finalLogs = log + existingLogs

    // fs.writeFileSync();
    fs.writeFileSync('./logs.txt', finalLogs)
    next();
}

app.use(loggerMiddleware)

const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 15 minutes
	limit: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
	// store: ... , // Redis, Memcached, etc. See below.
})

// Apply the rate limiting middleware to all requests.
app.use(limiter)

// app.use((req, res, next) =>{
//     console.log("Middleware : 1");
//     next();
// })

// app.use((req, res, next) =>{
//     console.log("Middleware : 1.5");
//     next();
// })

app.get("/health", (req, res)=>{
    console.log("Server is up and running")
    res.json({message:"Server is up and running"});
})

// app.use((req, res, next) =>{
//     console.log("Middleware : 2");
//     next();
// })

app.use("/tasks", taskRouter);

// app.use((req, res, next) => {
//     console.log('Middleware 3 : Route not found')
//     res.send({message:"Route not found"})
//     next();
// })


const PORT = 4800;
app.listen(PORT, ()=>{
    console.log(`Server started on ${PORT}`);
})