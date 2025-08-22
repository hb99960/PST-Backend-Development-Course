const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {

    try{
        // const authHeader = req.headers.authorization;
        // if (!authHeader || !authHeader.startsWith("Bearer ")) {
        //     return res.status(401).json({ message: "Unauthorized: Token missing" });
        // }
        // const token = authHeader.split(" ")[1];
        // if (token !== "Royal_pass") {
        //     return res.status(401).json({ message: "Unauthorized: Invalid token" });
        // }

        // const token = req.cookies.token;
        // if (!token) return res.status(401).json({ message: "Token missing" });
        // console.log("token is ", token);

        // const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        // req.user = decoded;
        // console.log(req.user);

        const token = req.cookies.token;
        if(!token) res.status(401).send({message:"Token is missing"});
        console.log("token is missing");

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        console.log(req.user);

        // Simulate authenticated user
        //   req.user = { id: "dummy", name: "Demo User" }; // or fetch from DB if needed
        next();
    } catch(error){
        console.error({error:error.message});
        res.status(500).send({error:error.message});
    }
};

module.exports = {authMiddleware};