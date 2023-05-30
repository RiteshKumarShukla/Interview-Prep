const mongoose = require("mongoose");
const todoSchema = mongoose.Schema({
    title:String,
    status:String,
});

const TodoModel = mongoose.model('todo',todoSchema);

module.exports ={ TodoModel}
