const express = require("express")

const http = require("http")

const {Server} = require("socket.io")

const app = express()

const PORT = 3000

const httpServer = http.createServer(app)

const io = new Server(httpServer, {
    cors : {
        origin : "*"
    }
})

io.on("connection", (socket)=>{
    console.log("New client is connected with id : ", socket.id)

    socket.on("room:join", (room)=>{
        socket.join(room)
        console.log(`client with id : ${socket.id} have joined Room : ${room}`)
    })

    socket.on('disconnect', ()=>{
        console.log("Client is disconnected with id : ", socket.id)
    })
})

app.get("/health", (req, res)=>{
    res.status(200).json({
        message : "Server is running"
    })
})

httpServer.listen(PORT, ()=>{
    console.log("HTTP Server is running on PORT : ", PORT)
})

