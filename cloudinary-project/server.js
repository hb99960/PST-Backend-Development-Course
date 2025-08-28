const express = require("express")
const multer = require("multer")
require('dotenv').config()
const cloudinary = require("cloudinary").v2
const fs = require('fs')

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

cloudinary.config({
    cloud_name : process.env.CLOUDINARY_SERVER_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET
})

const MulterUploadMiddleware = multer({storage}) 

app.post("/user/upload-profile", MulterUploadMiddleware.single("profile-pic"), async (req, res)=>{
    try{
        const {mimetype : fileType, path : filePath, size : fileSize} = req.file
        // Check for only jpeg or png
        if(!(fileType==="image/jpeg" || fileType==="image/png")){
            const err = new Error("File type is not supported, only png/jpeg is allowed")
            err.statusCode = 400
            throw err
        }
        // Check for file size
        if(fileSize>=256000){
            const err = new Error("File size should be less than 256KB")
            err.statusCode = 400
            throw err
        }
        // Upload image to cloudinary
        const FileUploadData = await cloudinary.uploader.upload(filePath, {
            folder : "profile_picture"
        })

        console.log(FileUploadData)

        console.log(filePath)

        fs.unlinkSync(filePath)

        res.status(201).json({
            success : true,
            message : "Profile picture uploaded",
            profileURL : FileUploadData.url
        })
    }catch(err){
        console.log(err)
        fs.unlinkSync(filePath)
        res.status(err.statusCode || 500).json({
            success : false,
            message : err.message || "Internal Server Error"
        })
    }
})

app.listen(PORT, ()=>{
    console.log("Server is running on PORT - ", PORT)
})