function idToInt(req,res,next){
    req.params.id = parseInt(req.params.id)
    
    if(isNaN(req.params.id)) {
        return next(new Error('id is not a number'))
    }

    next()
}

module.exports = idToInt

//fununzone per convertire id in numero intero 