function notFound(req,res,next){
    res.status(404);
    res.json({
        error : 'not found',
        message:'Pagina non torvata :('
    })
}

module.exports = notFound