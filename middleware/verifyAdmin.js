const veriryAdmin = (req,res,next)=>{
    if(req.user.role ==="initiator"){
        next()
       
    }else{
        res.status(401).send("not  admin")
    }
   
}

module.exports = veriryAdmin