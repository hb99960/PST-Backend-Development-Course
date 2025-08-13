const bodyValidationMiddleware = (req, res, next) =>{
    if(!req.body.task || !req.body.status){
        res.send({message: "Invalid Body"});
    }
    next();
}

module.exports = {bodyValidationMiddleware};