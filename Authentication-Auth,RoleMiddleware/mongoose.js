const UserModel = require("./user.model");


const mongooseCRUD = async ()=>{
    const allUsers = await UserModel.find()
    console.log(allUsers);
}

mongooseCRUD()
