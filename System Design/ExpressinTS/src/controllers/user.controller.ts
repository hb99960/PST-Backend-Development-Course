// controller : business logic
import type { Request, Response } from "express"
import { createUserBody } from "../types/user.types.js"
import { User } from "../models/user.model.js"

const allUsers = async (req:Request, res:Response ) => {

     res.json({
        result: "OK",
        data: "List of all users"
    })
}

const createUser = async (req:Request<{},{},createUserBody>, res:Response ) => {

    try{

        const name = req.body.name;
        const dept = req.body.dept;

        const user = new User({
            name: name,
            dept: dept
        })

        await user.save();

        res.status(200).json({
            result:"OK",
            message:"User Created",
            data: user
        });

    } catch (error){
        res.status(500).json({
            result:"error",
            message: error instanceof Error ? error.message : "Error"
        })
    }

    
}

export{
    allUsers,
    createUser
}