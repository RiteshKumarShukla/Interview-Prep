const fs = require('fs');
const express = require('express');
const {validator} = require("../middlewears/validator");
const StudentRoute = express.Router();

StudentRoute.post("/addstudent",(req,res)=>{
    let data = JSON.parse(fs.readFileSync("db.json","utf-8"));
    data.students.push(req.body);
    fs.writeFileSync("db.json",JSON.stringify(data));
    res.send(data.students);
})

StudentRoute.get("/",(req,res)=>{
    let data = JSON.parse(fs.readFileSync("db.json","utf-8"));
    res.send(data.students)
});

StudentRoute.get("/:rollNo",(req,res)=>{
    const {rollNo} = req.params;
    let data = JSON.parse(fs.readFileSync("db.json","utf-8"));
    let d = data.students.find(e=>e.roll_no === Number(rollNo));
    res.send(d)
})

StudentRoute.use(validator)

StudentRoute.patch("/:rollNo",(req,res)=>{
    const {rollNo} = req.params;
    let data = JSON.parse(fs.readFileSync("db.json","utf-8"));
    let alldata = data.students.filter(e=>e.roll_no !== Number(rollNo));
    let updatedSingle = {...req.body};
    alldata.push(updatedSingle);
    data.students = alldata;
    fs.writeFileSync("./db.json",JSON.stringify(data))
    res.send(data.students)

})

StudentRoute.delete("/:rollNo",(req,res)=>{
    const {rollNo} =req.params;
    let data = JSON.parse(fs.readFileSync("db.json","utf-8"));
    let d = data.students.filter(e=>e.roll_no !==Number(rollNo));
    data.students = d;
    fs.writeFileSync("db.json",JSON.stringify(data));
    res.send(data.students)
})

module.exports = {StudentRoute}