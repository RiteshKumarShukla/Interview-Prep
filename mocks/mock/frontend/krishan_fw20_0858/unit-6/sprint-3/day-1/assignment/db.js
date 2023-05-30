const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const connection = mongoose.connect("mongodb://127.0.0.1:27017/super");
const heroSchema = mongoose.Schema({
  title: String,
  id: Number,
  genre: String,
  year: Number,
  rating: Number,
});

const HeroModel = mongoose.model("hero", heroSchema);

module.exports = { connection, HeroModel };
