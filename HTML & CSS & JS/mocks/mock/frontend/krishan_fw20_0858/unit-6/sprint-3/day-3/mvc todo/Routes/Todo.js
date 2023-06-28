const express = require("express");
 const TodoRouter = express.Router();
const {TodoModel} = require('../Models/Todo.model');

 TodoModel.post("/",async(req,res)=>{
    try {
    let data = new TodoModel(req.body);
    await data.save();
    res.send('post added')
    } catch (error) {
        res.send(error)
    }
});

TodoModel.get("/",async(req,res)=>{
 try{
    let data = await TodoModel.find();
    res.send(data)
 }
 catch(err){
    res.send(err)
 }
});

TodoModel.patch("/:id",async(req,res)=>{
    let id = req.params.id;
    try {
        await TodoModel.findByIdAndUpdate({_id:id},req.body);
        res.send('data updated');
    } catch (error) {
    res.send('something went wrong');
    console.log(error);
    }
});

TodoModel.put("/:id",async(req,res)=>{
    let id = req.params.id;
    try{
        await TodoModel.findByIdAndUpdate({_id:id},req.body);
        res.send('data replaced')
    }
    catch(err){
        console.log(err);
        res.send('something went wrong')
    }
})

TodoModel.delete("/:id",async(req,res)=>{
    let id = req.params.id;
    try {
        await TodoModel.findByIdAndDelete({_id:id});
        res.send('task deleted')
    } catch (error) {
        console.log(error);
        res.send('something went wrong')
    }
})

module.exports={TodoRouter}