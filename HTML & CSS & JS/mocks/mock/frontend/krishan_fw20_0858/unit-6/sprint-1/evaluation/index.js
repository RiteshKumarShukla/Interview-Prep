const args = process.argv;
const http = require("http");
const fs = require("fs");
const dns = require('node:dns');


const server = http.createServer((req, res) => {
    const cowsay = require('cowsay')
  if (req.url === "/") {
    res.write("<h1>WELCOME TO EMPLOYEE MANAGEMENT SYSTEM</h1>");
    res.end();
  } else if (req.url === "/writeinfile") {
    fs.writeFile("./employee.txt", "Employee names are as follows:", (err) => {
      if (err) {
        console.log(err);
      } else {
        res.write("<h1>Data has been written in the file</h1>");
        res.end();
      }
    });
  }
  else if(req.url==='/enternames'){
    const arr = ["Aman", "Albert", "Varun", "Rajat", "Nrupul"];
    arr.forEach((e,i)=>{
        // arr.forEach((e,i)=>{
        //     fs.writeFile()
        // })
        fs.appendFile("./employee.txt","\n"+e,(err)=>{
            if(err){
                console.log(err)
            }
            else{
                res.write("<h1>All the names added in the file</h1>");
                res.end()
            }
        })
        
    });
    res.write("<h1>All the names added in the file</h1>")
    res.end()
    
  }
  else if(req.url ==='/alldetails'){
    fs.readFile("employee.txt","utf-8",(err,data)=>{
        if(err){
            throw err
        }
        else{
            res.end(cowsay.say({
                text:data,
                e:"oO",
                T:"U "
            }))
        }
    })
  }
else if(req.url ==='/delete'){
    fs.rm('./employee.txt',(err)=>{
        if(err){
            throw err
        }
        else{
            res.write("<h1>File has been deleted</h1>");
            res.end()
        }
    })
}
else if(req.url ==="/address"){
    const options = {
        family: 6,
        hints: dns.ADDRCONFIG | dns.V4MAPPED,
      };
    dns.lookup(args[2],options,(err,address,family)=>{
        console.log(address)
        res.end(`<h1>The IP Address is${address} </h1>`)
    })
}
else {
    res.end("<h1>invalid endpoint</h1>")
}
});

server.listen(8080, () => {
  console.log("server has been started");
});
