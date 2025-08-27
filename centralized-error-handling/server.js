const express = require("express")

const ErrorHandlerMiddleware = require("./middlewares/ErrorHandler.middleware")

const PORT = 3000

const app = express()

app.get("/profile", (req, res)=>{
    try{
        const user = null
        res.send(user.profilePic)
    }catch(err){
        throw new Error(err)
        // res.status(500).json({
        //     success : false,
        //     error : err.message
        // })
    }
})

app.get("/user", (req, res)=>{
    try{
        res.send(req.body.name)
    }catch(err){
        throw new Error(err)
        // res.status(500).json({
        //     success : false,
        //     error : err.message
        // })
    }
})

app.use(ErrorHandlerMiddleware)

app.listen(PORT, ()=>{
    console.log("Server is running on PORT : ", PORT)
})