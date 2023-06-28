const express = require('express');
const app = express.Router();
//const user = require('./user.model');
const User = require('./user.model');

//  const authMiddleware = async(req,res,next)=>{
//     let token = req.headers.token;
//     console.log(token)
//     let [id,name, password] = token.split(":");
//     console.log(id,name,password)
//     try{
//         let user= await User.findOne({id});
//         console.log(user)
//         console.log(password === user.password)
//         if(user){

//             if(name == user.name && password == user.password){
//                 next()   
//             }
//             else{
//                 res.status(404).send("Authentication failed")
//             }
//         }
//         else{
//             res.status(404).send('user with email not found')
//         }
//     }
//     catch(e){
//         res.status(404).send(e.message)
//     }
    
//  }

app.get('/users',async (req,res)=>{
    let users = await User.find({},{"name":1,"gender":1,"age":1,"email":1});
    res.send(users)
})



app.get('/users/:id',async(req,res)=>{
    let myid = req.params.id;
    console.log(myid)
    let user =await User.findById(myid)
    res.send(user)
    res.send(myid)
})

app.post('/users',async (req,res)=>{
    const {email, password ,name ,age ,gender} = req.body;
    try{
        let existingUser = await User.findOne({email});
        if(existingUser){
            res.status(404).send('cannot create user because it is already existing')
        }
        let user = await User.create({
            email,name,password,age, gender
        })
        res.send({token:`${name}:${password}`})
    }
    catch(e){
        res.status(404).send(e.message)
    }
})

app.delete('/users/:id',async(req,res)=>{
    let id = req.params.id;
    console.log(id)

    let user = await User.findOneAndDelete(id)

    res.send(user)
})
module.exports = app;