require("dotenv").config();
const express= require("express");
const cors = require("cors");
const {connection } = require("../config/db");
const app = express();
const {UserRouter} = require("../Routes/User.Route");
const { PostModel } = require("../Models/Posts.model");
const { authenticate } = require("../middlewears/Authenticate");
const { PostRouter } = require("../Routes/Post.Route");
app.use(express.json());
app.use(cors({
    origin:"*"
}));

app.use("/users",UserRouter)

app.use(authenticate);
app.use("/posts",PostRouter);
app.listen(process.env.PORT,async()=>{
    try {
        await connection;
        console.log(`server has been started on ${process.env.PORT}`)
    } catch (error) {
        console.log(error)
    }
})