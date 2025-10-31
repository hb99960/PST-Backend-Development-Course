import express from "express";
import type { Request, Response } from "express";
import { dbConnect } from "./config/db.js";
import { userRouter } from "./routes/user.routes.js";

const app = express();
app.use(express.json());

dbConnect();

app.get("/", (req:Request, res: Response)=>{
    res.send({
        result:"OK"
    })
})

app.use("/api", userRouter);

const PORT = 4083;
app.listen(PORT, ():void=>{
    console.log(`Server started at ${PORT}`)
})
