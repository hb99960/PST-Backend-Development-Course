import express from "express";
import type { Request, Response } from "express";
import { createUser, allUsers } from "../controllers/user.controller.js";
const userRouter = express.Router();

userRouter.get("/home", (req:Request, res:Response) =>{
    res.json({
        result:"OK"
    })
})

// get all users
userRouter.get("/user", allUsers);

// get user by Id

// create user
userRouter.post("/user", createUser)



export {
    userRouter
}