require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT;
const connect = require("./config/db")
const app = express();
app.use(express.json())
app.use(cors())
const userRoute = require('./user/user.route');
const blogRoute = require("./blogs/blogs.route")



app.use('/',userRoute)
app.use("/",blogRoute)
app.listen(PORT,async()=>{
    await connect();
    console.log(`server started at http://localhost:${PORT}`)
})