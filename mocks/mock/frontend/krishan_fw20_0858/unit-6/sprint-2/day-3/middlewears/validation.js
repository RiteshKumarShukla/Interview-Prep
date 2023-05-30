const express = require('express');
const app = express();
app.use(express.json())

const validation = ((req,res,next)=>{
    const {id,name,rating,description,genre,cast} = req.body;
    if(id && typeof id === 'number' &&
       name && typeof name === 'string' &&
       rating && typeof rating === 'number' &&
        description && typeof description === 'string' &&
         genre && typeof genre === 'string' &&
          cast &&  req.method === 'POST'){
            
            next()
    }
    else {
     res.sendStatus(404)
    }

});

module.exports = {validation}