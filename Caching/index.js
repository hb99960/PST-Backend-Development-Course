const express = require("express");
const StudentModel = require("./student.model");
const connectToDB = require("./mongoose.config");
const app = express();
app.use(express.json());

// Redis connection
// Import redis
const Redis = require("ioredis");
// object of redis
const redis = new Redis();

// event - connect
redis.on("connect",()=>{
    console.log("Redis connected");
});

//event- error
redis.on("error", (error)=>{
    console.log("Redis connection failed");
})

connectToDB();

app.get("/",(req, res)=>{
    return res.status(200).send({result:"success", message:"Server is up and running"});
})

app.post("/students/:studentId", async (req, res)=>{
    const studentId = req.params.studentId;
    const {marks} = req.body;

    console.log(`${studentId} ${marks}`);

    try{
        const student = await StudentModel.insertOne({studentId, marks});
        return res.status(200).send({result:"Student marked", message:`${student.studentId} with ${student.marks} marks`});

    } catch(error){
        return res.status(500).send(error.message);
    }

})

app.get("/students/:studentId", async (req, res)=>{
    const studentId = req.params.studentId;
    console.log(studentId);

    try{

        await redis.get(studentId, (error, cachedValue)=>{
            if(error){
                console.log("Redis connected failed");
            }

            if(cachedValue){
                console.log("Cache hit");
                return res.status(200).send({result:"success- Cache hit", message:`${studentId} with ${cachedValue}`});
            }
        });

        console.log("Cache miss")
        const student = await StudentModel.findOne({studentId});
        redis.set(studentId, student.marks);
        return res.status(200).send({result:"success- Cache miss", message:`${studentId} with ${student.marks}`});

    } catch(error){
        return res.status(500).send(error.message);
    }

})


const PORT = 8000;
app.listen(PORT, ()=>{
    console.log(`Server started on localhost:${PORT}`);
})

