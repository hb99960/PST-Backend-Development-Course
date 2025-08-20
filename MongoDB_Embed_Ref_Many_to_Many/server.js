const express = require("express");
const fs = require("fs");

const app = express();
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const userRouter = require("./routes/user.routes");
const connectToDB = require("./configs/mongodb.configs");
const courseRouter = require("./routes/course.routes");
const enrollmentRouter = require("./routes/enrollment.routes");

connectToDB();

// Middleware
// App-level -> Authentication, Logging requests, Parsing json, frequency count, Response time of API, Rate-limiter
// Router-level -> Authorization
// Route-level -> Input Validations

// Important Pointers on Middleware (pre-processing)
// 1. app.use() is not a middleware,
// 2. Execution order matters
// 3. next() is not optional
// 4. error handling middleware : (err, req, res, next) => { ... }
// 5. can mutate request : add req.user in Auth

// (req, res, next) => {} → regular middlware -> middleware in the middle of the chain
// (req, res) => {} → final middleware -> middleware at the end of the chain (request handler)

// your task is to create simple Todo app using express using fs module


// middleware : what is express.json()
// parse json. 
// Internal working
// check if JSON payload -> stream -> string -> parse JSON -> req.body gets the value -> calls next()
// instead express.json() does this for all routes
// express.json is built-in middleware, internally using body-parser
app.use(express.json());


// app.use() is a method to register a middleware
const loggerMiddleware = (req, res, next) => {
    console.log('Logger Middleware');
    const log = `${req.ip} -- [${new Date().toLocaleTimeString()}] ${req.method} ${req.originalUrl} ${res.statusCode}\n`
    fs.appendFileSync('./logs.txt', log);
    console.log(`${req.ip} -- [${new Date().toLocaleTimeString()}] ${req.method} ${req.originalUrl} ${res.statusCode}`);
    next();
}

const loggerMiddleware2 = (req, res, next) => {
    console.log('Logger Middleware 2');
    const log = `${req.ip} -- [${new Date().toLocaleTimeString()}] ${req.method} ${req.originalUrl} ${res.statusCode}\n`;
    let existingLogs = '';
    if(fs.existsSync('./logs2.txt')){
        existingLogs = fs.readFileSync('./logs2.txt', "utf-8");
    }
    
    const newLogs = log + existingLogs;
    fs.writeFileSync("./logs2.txt",newLogs);
    next();
}
app.use(loggerMiddleware2);
app.use(loggerMiddleware);

const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 15 minutes
	limit: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
	// store: ... , // Redis, Memcached, etc. See below.
})

app.use(limiter);

// app.use(morgan('tiny'));
// app.use(morgan('combined'))
// morgan.token("id", (req) => req.id || "guest");
// app.use(morgan(':id Method=:method URL=:url ResponseTime=:response-time ms'))
// app.use(morgan(function (tokens, req, res) {
//     return [
//       `[${new Date().toISOString()}]`,
//       `[${new Date().toLocaleDateString()} : ${new Date().toLocaleTimeString()}]`,
//       tokens.method(req, res),
//       tokens.url(req, res),
//       tokens.status(req, res),
//       tokens.res(req, res, 'content-length'), '-',
//       tokens['response-time'](req, res), 'ms hello'
//     ].join(' ')
//   }))

// function errorHandler(err, req, res, next) {
// console.error(err.stack); // log error for debugging

// res.status(err.status || 500).json({
//     error: err.message || 'Internal Server Error'
// });
// }
  
// app.use(errorHandler);

app.use((req, res, next) => {
    // console.log(`${req.method} ${req.url} : ${new Date().toLocaleTimeString()}`);

    // url vs originalUrl
    // url : relative path
    // originalUrl : full path
    console.log(`${req.ip} -- [${new Date().toLocaleTimeString()}] ${req.method} ${req.originalUrl} ${res.statusCode}`);
    next();
})

app.use((req, res, next) => {
    console.log("Middleware 1")
    next();
})

app.use("/users", userRouter);
app.use("/courses", courseRouter);
app.use("/enrollments", enrollmentRouter);

app.use((req, res, next) => {
    console.log("Middleware 2")
    next();
})

app.get("/health", (req, res)=>{
    console.log("Server is up and running");
    res.json({
        message:"Server is up and running"
    })
})

app.use((req, res, next) => {
    console.log("Middleware 3 : No Route Found")
    next();
})

const PORT = 6800;
app.listen(PORT, ()=>{
    console.log(`Server started on ${PORT}`);
})

// Project Refactoring : 
// Dynamic routing : CRUD variations
// Query params
// Path params
// put -> get -> delete
// Middleware 