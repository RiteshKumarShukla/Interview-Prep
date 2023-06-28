require("dotenv").config()
const express= require("express");
const cors = require("cors");
const PORT = process.env.PORT;


const app = express();
const connect = require('../src/config/db')
app.use(cors());
app.use(express.json())


app.get("/",(req,res)=>{
    res.send(movies)
})


app.listen(PORT,async()=>{
    await connect()
    console.log(`server started at http://localhost:${PORT}`)
})