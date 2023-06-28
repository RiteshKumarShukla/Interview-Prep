const express= require("express");
const app = express();
require("dotenv").config();
const {TodoRouter} = require("./Routes/Todo");
app.use(express.json())
const {connection} = require("./db");
app.use("/",TodoRouter);
app.listen(process.env.PORT,async()=>{
    try{
        await connection;
        console.log(`server has been started on ${process.env.PORT}`)
    }catch(err){
        console.log(err);
    }
})