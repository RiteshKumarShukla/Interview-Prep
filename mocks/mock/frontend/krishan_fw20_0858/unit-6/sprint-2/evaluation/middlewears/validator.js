const validator =(req,res,next)=>{
    if(req.query.role==='teacher' || req.query.role==='admin' && req.params.password==7877){
        next()
    }
    else{
        res.send('You are not authorised to do this operation')
    }
}

module.exports = {validator}