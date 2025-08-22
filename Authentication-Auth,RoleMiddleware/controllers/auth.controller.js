const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const signup = async (req, res)=>{
    try{
        const {name, email, password, ...rest} = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "Email already registered" });
    
        // const hashedPassword = await bcrypt.hash(password, 18);
    
        // const newUser = new User({
        //   name,
        //   email,
        //   password: hashedPassword,
        //   ...rest, 
        // });
    
        // await newUser.save();
        const userCreated = await User.create(req.body);
    
        res.status(201).json({
          message: "Signup Successful",
          user: userCreated});
    } catch(error){
        res.status(500).json({ error: error.message });
    }
}

const login = async (req, res) =>{
    try {
        const { email, password } = req.body;
    
        // Find user
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });
    
        // Compare password
        const isMatch = await user.comparePassword(password);
        // const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });
    
        // return success + user info (DO NOT return password)
    
        // const payload = {
        //     id: user._id,
        //     name: user.name,
        //     role: user.role
        // }
        const accessSecretKey = process.env.JWT_ACCESS_SECRET_KEY || "Invalid Key";
        console.log(payload);
        console.log(secretKey);
        const accessToken = jwt.sign(payload, accessSecretKey, {expiresIn:"30s"});
        console.log(token);
        const refreshSecretKey = process.env.JWT_REFRESH_SECRET_KEY || "Invalid Key";
        const refreshToken = jwt.sign(payload, refreshSecretKey, {expiresIn: "7d"});


    
    
        // res.json({
        //   message: "Login successful",
        //   user: {
        //     id: user._id,
        //     name: user.name,
        //     email: user.email,
        //     role: user.role,
        //     token: `${process.env.BEARER_TOKEN}`
        //   }
        // });
    
        // res.json({
        //     message:"Login successful",
        //     token: token
        // })
    
        res.cookie("accessToken", accessToken, {
            httpOnly: true,      // document.cookie; // ❌ Cannot access cookies with httpOnly: true, Prevents JavaScript from accessing the cookie
            secure: false,       // Set to true in production (with HTTPS)
            sameSite: "Lax",     // Or 'Strict' or 'None'
            maxAge: 3600000      // 1 hour in ms Browser stops sending it, cookies are auto sending
        })

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,      // document.cookie; // ❌ Cannot access cookies with httpOnly: true, Prevents JavaScript from accessing the cookie
            secure: false,       // Set to true in production (with HTTPS)
            sameSite: "Lax",     // Or 'Strict' or 'None'
            maxAge: 3600000 
        })
    
        res.send({message:"Login successful"});
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
}

const refreshToken = async (req, res) => {
    try{
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken){
            res.status(400).send({message:"Invalid token"});
        }

        const user = await User.findOne({refreshToken});
        if(!user){
            res.status(403).send({ message: "Invalid refresh token" });
        }

        const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET_KEY, {expiresIn:"15m"});
        const payload = {
            id: user._id, email: user.email, role: user.role
        }
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET_KEY, {expiresIn:"7d"});

        res.cookie("accessToken", accessToken, {
            httpOnly: true,      // document.cookie; // ❌ Cannot access cookies with httpOnly: true, Prevents JavaScript from accessing the cookie
            secure: false,       // Set to true in production (with HTTPS)
            sameSite: "Lax",     // Or 'Strict' or 'None'
            maxAge: 3600000      // 1 hour in ms Browser stops sending it, cookies are auto sending
        })

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,      // document.cookie; // ❌ Cannot access cookies with httpOnly: true, Prevents JavaScript from accessing the cookie
            secure: false,       // Set to true in production (with HTTPS)
            sameSite: "Lax",     // Or 'Strict' or 'None'
            maxAge: 3600000 
        })
    
        res.send({message:"Login successful"});


    } catch(error){

    }
}

module.exports = {signup, login, refreshToken}