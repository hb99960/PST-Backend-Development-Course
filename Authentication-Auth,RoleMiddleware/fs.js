// Helper functions for reading and writing to db.json
const fs = require("fs");

function getUsers() {
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    return data;
}

function setUsers(data) {
    fs.writeFileSync("./db.json", JSON.stringify(data, null, 2));
}

module.exports = { getUsers, setUsers };