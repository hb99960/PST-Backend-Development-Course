class ApiError extends Error{
    constructor(errMessage, errStatusCode){
        super(errMessage)
        this.statusCode = errStatusCode
        this.message = errMessage
    }
}

class UserNotFoundError extends ApiError{
    constructor(){
        super("User Not Found", 404)
    }
}

module.exports = {
    ApiError,
    UserNotFoundError
};