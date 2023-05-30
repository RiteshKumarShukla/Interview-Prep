require('dotenv').config();
const express = require('express');
const { connection } = require('./config/db');
const app = express();
app.use(express.json());

app.listen(process.env.PORT,async()=>{
    try{
        await connection;
        console.log(`server has been started on ${PORT}`);
    }
    catch(err){
        console.log(err);
    }
})