const validator = (req,res,next)=>{
    let data = req.body;
    let {title,genre,price,author} = data;
    if(title && genre && price && author){
        next()
    }
    else{
        res.send("{err: all the data fields are not there}")
    }
}

module.exports = {validator}