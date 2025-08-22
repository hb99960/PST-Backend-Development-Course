// business logic

const { getUsers, setUsers } = require("../fs");
const User = require("../models/user.model");


// Get all users
const getAllUsers = async (req, res) => {
    const search = req.query.search;

    // let data = getUsers();
    // const users = data.users;
    // let filteredUsers = users;

    // if (search) {
    //     console.log(search);
    //     filteredUsers = users.filter(user =>
    //         user.name.toLowerCase().includes(search.toLowerCase())
    //     );
    //     console.log(filteredUsers);
    // }
    let users = [];
    if(search){
        users = await User.find({name: {$regex: search, $options:'i'}});
    } else {
        users = await User.find({});
    }
    // console.log(users)
    res.json({
        message: "List of all users",
        response: users
    });
};

// const getAllUsers = async (req, res) => {
//   // const search = req.query.search;

//   const {search, page=1, limit=10, sortBy="marks", order="desc"} = req.query;

//   // let data = getUsers();
//   // const users = data.users;
//   // let filteredUsers = users;

//   // if (search) {
//   //     console.log(search);
//   //     filteredUsers = users.filter(user =>
//   //         user.name.toLowerCase().includes(search.toLowerCase())
//   //     );
//   //     console.log(filteredUsers);
//   // }
//   let users = [];
//   const sortOrder = order === "desc" ? -1 : 1
//   const sortCondition = {[sortBy]: sortOrder}
//   const skip = (Number(page)-1) * Number(limit);
//   let filterCondition = {};
//   if(search){
//       filter = {name: {$regex: search, $options:'i'}}
      
//   } 
//   // console.log(users)
//   users = await User.find({name: {$regex: search, $options:'i'}})
//                       .sort(sortCondition)
//                       .limit(Number(limit))
//                       .skip(skip);
  
//   res.json({
//       message: "List of all users",
//       response: users
//   });
// };

// Create a new user
const createNewUser = async (req, res) => {
    const body = req.body;
    console.log(body);

    // // const data = getUsers();
    // // const users = data.users;

    // // const newId = Number(users[users.length - 1]?.id || 0) + 1;
    // const newUser = { id: newId, ...body };
    // users.push(newUser);
    // setUsers(data);

    const newUser = new User(body);
    await newUser.save();

    res.json({
        message: "New user created",
        response: newUser
    });
};

// Update user by ID
const updateUser = async(req, res) => {
    const id = req.params.id;
    console.log(id);

    const updatedUser = req.body;

    // const data = getUsers();
    // const users = data.users;

    // const index = users.findIndex(user => user.id === id);

    // if (index === -1) {
    //     return res.status(404).send({ message: "User not found" });
    // }

    // new:true gives document with changes
    const user = await User.findByIdAndUpdate(id, updatedUser, {new:true});
    if (!user) {
        return res.status(404).send({ message: "User not found" });
    }

    // users[index] = { ...users[index], ...updatedUser };
    // setUsers(data);

    res.send({
        message: "User updated",
        response: user
    });
};

// Delete user by ID
const deleteUser = async(req, res) => {
    try{
        const id = req.params.id;
        console.log(id);
    
        // let data = getUsers();
        // let users = data.users;
    
        // const index = users.findIndex(user => user.id === id);
    
        // if (index === -1) {
        //     return res.status(404).send({ message: "User not found" });
        // }
        const user = await User.findByIdAndDelete(id);
    
        // const filteredUsers = users.filter(user => user.id !== id);
        // data.users = filteredUsers;
        // setUsers(data);

        if (!user) {
            return res.status(404).send({ message: "User not found" });
          }
    
        res.status(200).send({
            message: "User deleted",
            response: user
        });
    } catch(error){
        res.status(500).send({message:"Error Deleting User", error});
    }
   
};

async function addUserAddress(req, res){
    try {
      const { userId } = req.params;
      const newAddress = req.body;
  
      const user = await UserModel.findById(userId);
      if (!user) return res.status(404).json({ message: "User not found" });
  
      user.address.push(newAddress);
      await user.save();
  
      res.status(201).json({ message: "Address added", address: newAddress });
    } catch (err) {
      res.status(500).json({ message: "Error adding address", error: err.message });
    }
  };
  
  async function updateUserAddress(req, res){
    try {
      const { userId, addressId } = req.params;
      const updatedData = req.body;
  
      const user = await UserModel.findById(userId);
      if (!user) return res.status(404).json({ message: "User not found" });
  
      const addressToUpdate = user.address.id(addressId);
      if (!addressToUpdate) return res.status(404).json({ message: "Address not found" });
  
      Object.assign(addressToUpdate, updatedData); // Merge new data into existing address
      await user.save();
  
      res.status(200).json({ message: "Address updated", address: addressToUpdate });
    } catch (err) {
      res.status(500).json({ message: "Error updating address", error: err.message });
    }
  };

module.exports = { getAllUsers, createNewUser, updateUser, deleteUser };

