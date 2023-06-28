const fs= require('fs');

const record = (req,res,next)=>{
    next()
        if(req.method==="PATCH"){
            let data = `The document with id:${req.params.id} has been updated. \n`
            fs.appendFileSync("./record.txt",data,"utf-8");

        }
        else if(req.method==="DELETE"){
            fs.appendFileSync("./record.txt",`The document with id:${req.params.id} has been deleted. \n`,'utf-8');
        } 
}

module.exports = {record}