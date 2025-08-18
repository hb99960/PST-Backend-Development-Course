// business logic

const { getUsers, setUsers } = require("./fs");


// Get all users
const getAllUsers = (req, res) => {
    const search = req.query.search;

    let data = getUsers();
    const users = data.users;
    let filteredUsers = users;

    if (search) {
        console.log(search);
        filteredUsers = users.filter(user =>
            user.name.toLowerCase().includes(search.toLowerCase())
        );
        console.log(filteredUsers);
    }

    res.json({
        message: "List of all users",
        response: filteredUsers
    });
};

// Create a new user
const createNewUser = (req, res) => {
    const body = req.body;
    console.log(body);

    const data = getUsers();
    const users = data.users;

    const newId = Number(users[users.length - 1]?.id || 0) + 1;
    const newUser = { id: newId, ...body };
    users.push(newUser);
    setUsers(data);

    res.json({
        message: "New user created",
        response: getUsers().users
    });
};

// Update user by ID
const updateUser = (req, res) => {
    const id = Number(req.params.id);
    console.log(id);

    const updatedUser = req.body;

    const data = getUsers();
    const users = data.users;

    const index = users.findIndex(user => user.id === id);

    if (index === -1) {
        return res.status(404).send({ message: "User not found" });
    }

    users[index] = { ...users[index], ...updatedUser };
    setUsers(data);

    res.send({
        message: "User updated",
        response: data.users
    });
};

// Delete user by ID
const deleteUser = (req, res) => {
    const id = Number(req.params.id);
    console.log(id);

    let data = getUsers();
    let users = data.users;

    const index = users.findIndex(user => user.id === id);

    if (index === -1) {
        return res.status(404).send({ message: "User not found" });
    }

    const filteredUsers = users.filter(user => user.id !== id);
    data.users = filteredUsers;
    setUsers(data);

    res.status(200).send({
        message: "User deleted",
        response: data.users
    });
};

module.exports = { getAllUsers, createNewUser, updateUser, deleteUser };

