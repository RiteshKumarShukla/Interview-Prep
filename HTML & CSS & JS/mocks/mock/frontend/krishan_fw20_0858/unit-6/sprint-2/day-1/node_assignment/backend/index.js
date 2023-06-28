const fs = require("fs");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    const data =JSON.parse( fs.readFileSync("./db.json","utf-8"))
   console.log(data);
   res.send(data.posts);

});
app.post("/",(req,res)=>{
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    data.posts.push(req.body);
    fs.writeFileSync("./db.json",JSON.stringify(data));
    res.send(data)
    // res.send(data.posts)
    //res.send(JSON.stringify(newfile))
})

app.delete("/:id",(req,res)=>{
    const {id} = req.params
    let data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    let nd= data.posts.filter((e,i)=>{
       return e.id!= Number(id);
    });
    data.posts =nd;
    console.log(data)
    fs.writeFileSync("./db.json",JSON.stringify(data));
    res.send(data)
})

app.put("/:id",(req,res)=>{
    const {id} = req.params;
    let data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    let nd = data.posts.find((e)=>{
      return e.id === Number(id);    
    });
    nd = {id:Number(id),title:req.body.title,author:req.body.author};
    let nnd = data.posts.filter(e=>e.id!==Number(id));
    nnd.push(nd);
    data.posts = nnd;
    fs.writeFileSync("./db.json",JSON.stringify(data));
    res.send(data)
})

app.listen(4500,()=>{
    console.log('server started on port 4500')
})