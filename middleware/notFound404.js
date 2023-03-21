const notFound404=(req,res)=>{
    res.status(404)
    if(req.accepts('json')){
        res.json({message: '404 Not Found'})
    } 
    else{
        res.type('txt').send('404 Not Found')
    }
}

module.exports=notFound404;

