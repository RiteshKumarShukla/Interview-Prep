const express = require("express")
const app = express.Router();
const Blog = require("./blogs.model");

// const authMiddleware = async (req,res,next)=>{
//     let token = req.headers.token;
//     let 
// }

app.get('blogs',async(req,res)=>{
    let blog = await Blog.find();
    res.send(blog)
})


module.exports = app