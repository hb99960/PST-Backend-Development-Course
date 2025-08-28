function ErrorHandlerMiddleware(err, req, res, next){
    // Add log in logs/error.log file
    console.error(err.stack)

    res.status(err.statusCode || 500).json({
        success : false,
        statusCode : err.statusCode || 500,
        message : `${err.message}`
    })
}

module.exports = ErrorHandlerMiddleware;