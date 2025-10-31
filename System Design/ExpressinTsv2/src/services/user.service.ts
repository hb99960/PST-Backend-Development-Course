
import { User } from "../models/user.model.js";

const getAllUsers = async () => {
    // Method-1
    return await User.find();

    // Method-2
    // return await User.aggregate([{
    //     $match : {}
    // }])
}

export { 
    getAllUsers
}