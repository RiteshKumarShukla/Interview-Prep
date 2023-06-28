const express = require("express");
const app = express();
require("dotenv").config();
const {connection} = require('./Config/db');
app.use(express.json());

const {BookRouter} = require("./Routes/BookRouter");

app.use("/",BookRouter);



app.listen(process.env.PORT,async()=>{
    try {
        await connection;
        console.log(`server connected to port ${process.env.PORT}`)
    } catch (error) {
        console.log(error);
        console.log('something went wrong');
    }
})
