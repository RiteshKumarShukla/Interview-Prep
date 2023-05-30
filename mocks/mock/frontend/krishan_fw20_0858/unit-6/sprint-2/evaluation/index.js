const express = require('express');
const app = express();
const {StudentRoute} = require("./routes/StudentRoute");
const {TeacherRoute} = require("./routes/TeacherRoute");
const {logger} = require('./middlewears/logger');

app.use(logger);
app.use(express.json())
app.use("/students",StudentRoute);
app.use("/teachers",TeacherRoute);


app.listen(4500,()=>{
    console.log('Server has been started');
})
