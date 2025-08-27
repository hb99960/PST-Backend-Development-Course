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

        socket.emit("room:joined", room)

        socket.to(room).emit('chat:new',{
            id : "SERVER",
            text : `New client with ID : ${socket.id} have joined the Room : ${room}`
        })
    })

    socket.on("chat:send", ({room, msg})=>{
        if(!room || !msg){
            return
        }

        if(room.trim()==="" || msg.trim()===""){
            return
        }

        console.log(`${room} - ${socket.id} - ${msg}`)

        io.to(room).emit('chat:new', {
            id : socket.id,
            text : msg
        })
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

