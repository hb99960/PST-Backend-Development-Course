const authMiddleware = async (req, res, next)=>{

    const header = req.headers.authorization;
    console.log(header);
    const token = header.split(" ")[1];
    console.log(token);
    console.log("JWT Token: ", process.env.JSON_SECRET_KEY);
    const jwtToken = process.env.JSON_SECRET_KEY
    if(token != process.env.BEARER_TOKEN){
        res.status(400).send({message:"Token expired or invalid"});
    }
    next();
}

module.exports = authMiddleware;