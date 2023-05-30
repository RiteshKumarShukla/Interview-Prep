const fs = require('fs');
const express = require('express');
const app = express();

const TeacherRoute = express.Router();

TeacherRoute.post("/addteacher",(req,res)=>{
    let data = JSON.parse(fs.readFileSync("db.json","utf-8"));
    data.teachers.push(req.body);
    fs.writeFileSync("db.json",JSON.stringify(data));
    res.send(data.teachers);

});

TeacherRoute.get("/",(req,res)=>{
    let data = JSON.parse(fs.readFileSync("db.json","utf-8"));
    res.send(data.teachers)
});

TeacherRoute.get("/:empID",(req,res)=>{
    const {empID} = req.params;
    let data = JSON.parse(fs.readFileSync("db.json","utf-8"));
    let d = data.teachers.find(e=>e.emp_id === Number(empID));
    res.send(d)
})


module.exports = {TeacherRoute}