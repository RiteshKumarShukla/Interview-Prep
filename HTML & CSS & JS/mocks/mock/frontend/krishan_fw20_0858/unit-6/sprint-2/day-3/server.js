const fs = require('fs');
const express = require('express');
const app = express();
const morgan = require('morgan');
const multer = require('multer');


// app.use(morgan(`:method :status :res[content-length] :response-time ms [:date[web]]  HTTP/:http-version :url \n` ));
const {validation} = require("./middlewears/validation");
app.use(express.json())
// app.use(validation);

const upload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"uploads")
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+".jpg")
        }
    })
}).single("user_file");

app.post("/upload",upload,(req,res)=>{
res.send("file uploaded");
})



app.post("/movies",validation,(req,res)=>{
    console.log('chl gya');

    res.send('ok')
})

app.listen(4500,()=>{
    console.log('server has been started')
})
