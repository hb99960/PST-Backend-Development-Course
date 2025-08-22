const roleMiddleware = (allowedRoles) =>{

    return (req, res, next) => {
        console.log(allowedRoles);

        if(!req.user || !req.user.roles){
            res.send({message:"Unauthorized or Role is missing"});
        }

        if(!allowedRoles.includes(req.user.roles)){
            res.status({message:"Access Denied: Role is not permitted"});
        }

        next();
    }
}

module.exports = roleMiddleware;