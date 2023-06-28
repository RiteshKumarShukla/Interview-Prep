const express = require("express");
const { PostModel } = require("../models/ProductModel");

const postRouter= express.Router();

postRouter.get("/",async(req,res)=>{
    let page = 1 || req.query.page;
    let limit = 4 || req.query.limit;

    try {
        const data = await PostModel.find().skip(limit*(page-1)).limit(limit);
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send('something went wrong.')
    }
})


postRouter.get("/filter?name",async(req,res)=>{
    const {name} = req.query;
    let page = 1 || req.query.page;
    let limit = 4 || req.query.limit;
    try {
        const data = await PostModel.find({name:{$regex : name,$options : 'i'}}).skip(limit*(page-1)).limit(limit);
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send('something went wrong due to some error.')
    }

})

postRouter.get("/filter?category",async(req,res)=>{
    const {category} = req.query;
    let page = 1 || req.query.page;
    let limit = 4 || req.query.limit;
    try {
        const data = await PostModel.find({category}).skip(limit*(page-1)).limit(limit);
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send('something went wrong due to some error.')
    }
})

postRouter.post("/",async(req,res)=>{
    
})

postRouter.get("/filter?sort",async(req,res)=>{
    const {sort} = req.params;
    let page = 1 || req.query.page;
    let limit = 4 || req.query.limit;
    try {
        if(sort==='asc'){
            const data = await PostModel.find().sort({date:1}).skip(limit*(page-1)).limit(limit);
            res.status(200).send(data)
        }
        else if(sort === 'desc'){
            const data = await PostModel.find().sort({date:-1}).skip(limit*(page-1)).limit(limit);
            res.status(200).send(data)
        }
    } catch (error) {
        res.send(400).send('something went wrong.');
        console.log(error);
    }
})


module.exports = {postRouter}