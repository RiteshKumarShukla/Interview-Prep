const express = require("express")
const morgan = require("morgan")

const app = express();

app.use(morgan(':method :date[web] :status :http-version :url :total-time[digits]'))

app.get('/',(req,res)=>{
    res.end('server')
})

app.listen(8080,()=>{
    console.log('server is started')
})