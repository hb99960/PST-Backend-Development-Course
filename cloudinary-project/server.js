const express = require("express")
const multer = require("multer")

const app = express()

const PORT = 3000

const storage = multer.diskStorage({
    destination : (req, file, cb)=>{
        cb(null, "uploads/")
    },
    filename : (req, file, cb)=>{
        cb(null,`${Date.now()}_${file.originalname}`)
    }
})

const MulterUploadMiddleware = multer({storage}) 

app.post("/user/upload-profile", MulterUploadMiddleware.single("profile-pic"), (req, res)=>{
    console.log(req.file)
    res.send("Ok")
})

app.listen(PORT, ()=>{
    console.log("Server is running on PORT - ", PORT)
})