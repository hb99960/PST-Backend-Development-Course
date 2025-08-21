const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const signup = async (req, res) =>{
    // bcrypt.hash(pass, 12);
    try{
        const {name, email, password, ...rest} = req.body;
        const existingUser = await User.findOne({email});
        console.log(existingUser);
        if(existingUser){
            res.status(400).send({message:"User already registered"});
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        console.log(hashedPassword);

        // const newUser = 
        // console.log(newUser);
        let newUser = new User({
            name,
            email,
            password:hashedPassword,
            ...rest
        });
        await newUser.save();
        // const createdUser = await User.create(newUser);

        res.status(200).send({message:"User created successfully", response: newUser});
    }catch(error){
        res.status(500).send({message:"User Signup failed", error:error.message});
    }
}

const login = async(req, res) => {
    try{

        const {email, password} = req.body;

        const user = await User.findOne({email});

        if(!user){
            res.status(400).send({message:"User not found in system"});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            res.status(400).send({message:"Wrong Password"});
        }

        const payload = {
            email: user.email
        }

        const secretKey = process.env.JSON_SECRET_KEY;
        // token creation
        const token = jwt.sign(payload, secretKey);
        console.log(token);
        // res.cookies({token:token});
        res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'strict' });

        res.status(200).send({message:"User Login Success", response:token});

        // bcrypt.compare(passs, userPassword);

    }catch(err){
        res.status(500).send({message:"Internal server error", error:err.message});
    }
}

module.exports = {signup, login};