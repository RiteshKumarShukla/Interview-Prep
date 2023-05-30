const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    name:{type:String,required:true},
    title:{type:String,required:true},
    rating:{type:Number,required:true}
})

const Movie = mongoose.model("movie",movieSchema)

module.exports=Movie;