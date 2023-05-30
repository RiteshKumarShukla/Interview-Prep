const express= require("express");
const { PostModel } = require("../Models/Posts.model");

const PostRouter = express.Router();

PostRouter.get("/",async(req,res)=>{
    const userID = req.body.userID;
    const {device,device1,device2} = req.query;
    try {
        if(device){
            let posts = await PostModel.find({$and:[{device: { $regex: device, $options: 'i'}},{userID}]});
            res.send(posts)
        }
        else if(device1 && device2){
            let posts = await PostModel.find({$and:[{userID},{$or:[{device: { $regex: device1, $options: 'i'}},{device: { $regex: device2 , $options: 'i'}}]}]});
            res.send(posts)
        }
        else{   
            let posts = await PostModel.find({userID});
            res.send(posts);
        }


    } catch (error) {
        res.send("something went wrong")
    }
});

PostRouter.post("/create",async(req,res)=>{
    try {
        const newPOst = new PostModel(req.body);
        await newPOst.save();
        res.send(`post has been created for ${req.body.title}`);
    } catch (error) {
        console.log(error);
        res.send(error)
    }
});

PostRouter.patch("/update/:id",async(req,res)=>{
    const postID = req.params.id
    const payload = req.body;
    const idSendByUser = await PostModel.findOne({"_id":postID});
    const UsersIdinBody = req.body.userID;
    const UserIdinPost = idSendByUser.userID;
    
    try {
        if(UserIdinPost !== UsersIdinBody){
            res.send("YOu are not authorized")
        }
        else{
            await PostModel.findByIdAndUpdate({"_id":postID},payload);
            res.send("Updated the note")
        }
    } catch (error) {
        console.log(error);
        res.send(error)
    }
})

PostRouter.delete("/delete/:id",async(req,res)=>{
    const postID = req.params.id
    const idSendByUser = await PostModel.findOne({_id:postID});
    const UsersIdinBody = req.body.userID;
    const UserIdinPost = idSendByUser.userID;
    
    try {
        if(UserIdinPost !== UsersIdinBody){
            res.send("YOu are not authorized")
        }
        else{
            await PostModel.findByIdAndDelete({_id:postID});
            res.send("Deleted the note")
        }
    } catch (error) {
        console.log(error);
        res.send(error)
    }
})




module.exports = {PostRouter}