// controller : business logic
import type { Request, Response } from "express"
import { createUserBody, ApiResponse, UserResponse, UserParams } from "../types/user.types.js"
import { User } from "../models/user.model.js"
import * as userService from "../services/user.service.js";


const allUsers = async (req:Request, res:Response<ApiResponse<UserResponse[]>> ) => {

    try{

        // const users = await User.find();

        const users = await userService.getAllUsers();
        // return users;

        res.json({
            result: "OK",
            data: users
        })

    } catch (error){

        res.status(500).json({
            result: "Error",
            message: "Users not found",
            error: error instanceof Error ? error.message : "Internal Server error"
        })
    }
}

const getUserById = async (req:Request<UserParams>, res:Response<ApiResponse<UserResponse>>) => {
    try{
        const id = req.params.userId;
        const user = await User.findById(id);

        if(!user){
            return res.status(404).json({
                result: "Not Found",
                message : "User does not exist",
                error: null
            })
        }

        return res.status(200).json({
            result:"User found",
            data: user
        })

    } catch (error){

    }
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
    createUser,
    getUserById
}