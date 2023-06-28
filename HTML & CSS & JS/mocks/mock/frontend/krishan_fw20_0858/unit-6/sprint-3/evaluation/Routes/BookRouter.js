const express= require("express");
const BookRouter = express.Router();
const fs= require('fs');
const {BookModel} = require("../Models/Books.Model");
const {validator} = require("../middlewears/validator");
const {record} = require("../middlewears/record");
BookRouter.post("/addbook",validator,async(req,res)=>{
    let data = req.body;
    try {
        let newBook = new BookModel(data);
        await newBook.save();
        res.send("data has been added to database");
    } catch (error) {
        res.send("something went wrong");
        console.log(error);
    }
});

BookRouter.get("/searchrange",async(req,res)=>{
    let price_low = req.query.pl;
    let price_high = req.query.ph;

    try {
        if(price_high && price_low){
            let data = await BookModel.find({$and:[{price:{$gte:price_low}},{price:{$lte:price_high}}]});
            res.send(data);
        }
        else if(price_high){
            let data = await BookModel.find({price:{$lte:price_high}});
            res.send(data);
        }
        else if(price_low){
            let data = await BookModel.find({price:{$gte:price_low}});
            res.send(data);
        }
        else{
            let data = await BookModel.find();
            res.send(data)
        }
    } catch (error) {
        res.send('something went wrong');
        console.log(error);
    }
});

BookRouter.get("/allbooks",async(req,res)=>{
    try {
        let data= await BookModel.find();
        res.send(data)
    } catch (error) {
        res.send('something went wrong');
        console.log(error.message);
    }
})

BookRouter.get("/filtergenre",async(req,res)=>{
    let genre = req.query;
    try {
        let data = await BookModel.find(genre);
        res.send(data);
    } catch (error) {
        res.send('something went wrong');
        console.log(error.message);
    }
});

BookRouter.use(record)

BookRouter.patch("/editbook/:id",async(req,res)=>{
    let id = req.params.id;
    let data = req.body
    try{
        if(id && data){
        await BookModel.findByIdAndUpdate({_id:id},data);
        res.send(`book id ${id} updated successfully`)
    }
    else{
        res.send("please give id")
    }}
    catch(error){
        res.send("something went wrong");
        console.log(error.message);
    }
})

BookRouter.delete("/deletebook/:id",async(req,res)=>{
    let id = req.params.id;
    try{
        if(id ){
        await BookModel.findByIdAndDelete({_id:id});
        res.send(`book id ${id} deleted successfully`)
    }
    else{
        res.send("please give id")
    }}
    catch(error){
        res.send("something went wrong");
        console.log(error.message);
    }
})



module.exports ={BookRouter}