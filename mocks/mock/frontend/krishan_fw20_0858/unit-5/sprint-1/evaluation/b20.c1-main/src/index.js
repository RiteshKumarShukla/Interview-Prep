// Start here
const express = require("express")
const person = require("../person.json")
const fs = require("fs")


const app = express();

app.get('/person',(req,res)=>{
    res.send(person)
})

app.get('/person/:id',(req,res)=>{
    let id = req.params.id;
    let realId = Number(id)

    let post = person.find((e)=>{
        return e.id ===realId
    })

    res.send(post)
})

app.delete('/person/:id',(req,res)=>{
    let id = req.params.id;
    let p = Number(id)
    let post = person.filter((e)=>{
        return e.id !== p
    })
    res.send(post)
})

    app.post('/person',(req,res)=>{
        person.push({id:0,name:'krishan',gender:'male'})
        fs.writeFile('../person.json',JSON.stringify(person),'utf-8',()=>{
    
                res.send(person)
            
        })
    })

    app.get('/person?birth',(req,res)=>{
        let birth = req.query.birth;
        console.log(data)
        let post = person.filter((e)=>{
            return e.birth==birth
        })
        res.send(post)
    })

    app.get('/person',(req,res)=>{
        let current = req.query.current;
        let post = person.filter((e)=>e.current === current)
        res.send(post)
    })
   
app.listen(8000,()=>{
    console.log('server started')
})