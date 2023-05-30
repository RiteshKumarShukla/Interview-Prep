const express = require("express");
const mongoose = require("mongoose");
const { connection,HeroModel } = require("./db");
const app = express();
app.use(express.json());



app.get("/title",async(req,res)=>{
  let {title} = req.query;
  let uc = title.charAt(0).toUpperCase()+title.slice(1);
    let data = await HeroModel.find({title:uc});
    res.send(data)
  
})

app.get("/rating",async(req,res)=>{
  let rating = req.query;
  let data = await HeroModel.find(rating);
  res.send(data)
});

app.get("/movie",async(req,res)=>{
  let {query} = req.query;
  let page = req.query.page || 1;
  let limit = req.query.limit || 10;
  let data =  await HeroModel.find({title:{$regex:query,$options:"i"}}).skip(limit*(page-1)).limit(limit);;
  res.send(data);
});

app.get("/sort",async(req,res)=>{
  let search = req.query.search;
  let page = req.query.page || 1;
  let limit = req.query.limit || 10;
  let data = await HeroModel.find().sort({[search]:1}).skip(limit*(page-1)).limit(limit);
  res.send(data)
})

app.get("/data",async(req,res)=>{
  let page = req.query.page || 1;
  let limit = req.query.limit || 10;
  let data = await HeroModel.find().skip(limit*(page-1)).limit(limit);
  res.send(data)
})

app.listen(8000, async () => {
  try {
    await connection;
    console.log("server started");
  } catch (error) {
    console.log(error);
  }
});
