function ErrorHandlerMiddleware(err, req, res, next){
    // Add log in logs/error.log file
    console.error(err.stack)

    res.status(500).json({
        success : false,
        message : `Something went wrong : ${err.message}`
    })
}

module.exports = ErrorHandlerMiddleware;