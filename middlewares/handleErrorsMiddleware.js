function handleError(err,req,res,next){
    res.status(500);
    res.json({
        error : 'error 500',
        message: err.message,
    })
}

module.exports = handleError