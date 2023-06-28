const fs = require("fs")
const http = require("http")


http.createServer((req,res)=>{
    fs.readFile('./file.txt',"utf-8",(err,data)=>{
       if(err){
        throw(err)
       }
    return res.end();
    })
}).listen(8080)

