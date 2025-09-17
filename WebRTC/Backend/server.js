const express = require("express");
const http = require("http");
const {Server} = require("socket.io");
const cors = require("cors");
const app = express();

const server = http.createServer(app);

const io = new Server(server, {
    cors:{
        origin:"*",
        methods: "*"
    }
})
let allUsers = {};
app.use(cors());
app.get("/", (req, res)=>{
    res.status(200).send("Http Server is up and running");
})

io.on("connection", (socket) =>{
    console.log(`Socket server is up and running, New User Connected: ${socket.id}`);
    socket.on("join-user", username =>{
        console.log(`${username} joined socket connection`);
        allUsers[username] = {username, id:socket.id};
        io.emit("joined", allUsers);
    })
    socket.on("offer", ({from, to, offer})=>{
        console.log({from, to, offer});
        io.to(allUsers[to].id).emit("offer", {from, to, offer});
    })

    socket.on("answer", ({from, to, answer})=>{
        console.log({from, to, answer});
        io.to(allUsers[from].id).emit("answer", {from, to, answer});
    })

    socket.on("call-ended", callers =>{
        const [from, to] = callers;
        console.log(from);
        console.log(to);
        io.to(allUsers[from].id).emit("call-ended", callers);
        io.to(allUsers[to].id).emit("call-ended", callers);
    })
    socket.on("icecandidate", candidate => {
        console.log({ candidate });
        //broadcast to other peers
        socket.broadcast.emit("icecandidate", candidate);
    }); 
})

const PORT = 9002;
server.listen(PORT, ()=>{
    console.log(`Server listening on localhost:${PORT}`)
})