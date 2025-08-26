const express = require("express")

const http = require("http")

const {Server} = require("socket.io")

const app = express()

const httpServer = http.createServer(app)

const PORT = 3000;

const io = new Server(httpServer, {
    cors : {origin : "*"}
})

io.on('connection', (socket)=>{
    console.log("New Client Connected with id : ", socket.id)

    socket.on("chat:send", (msg)=>{
        console.log("New message is received from ", socket.id, " with msg - ", msg)

        io.emit("chat:new", {text : msg, id : socket.id})
    })

    socket.on('disconnect', ()=>{
        console.log("Client disconnected with id : ", socket.id)
    })
})

app.get("/health", (req, res)=>{
    res.status(200).json({
        message : "Server is healthy"
    })
})

httpServer.listen(PORT, ()=>{
    console.log("HTTP Server is running on PORT : ", PORT)
})



