const args = process.argv
const crypto = require("crypto")
let arr = [];
const ourCase = args[2];

arr = args.filter((el,ind)=>{
    return ind>2
}).map(Number)

const add = ()=>{
    return arr[0]+arr[1]
}

const sub = () =>{
    return arr[0]-arr[1]
}

const mul = () => {
    return arr[0]*arr[1]
}

const div = () => {
    return arr[0]/arr[1]
}

const sin = (arr) => {
    return Math.sin(arr[0])
}

const cos = (arr) =>{
    return Math.cos(arr[0])
}

const tan =(arr) =>{
    return Math.tan(arr[0])
}

switch(ourCase){
    case 'add':
        return console.log(add());
    case 'mul':
        return console.log(mul());
    case 'div':
        return console.log(div());
     case 'sub':
        return console.log(sub());
    case 'sin':
        return console.log(sin());
    case 'cos':
        return console.log(cos());
    case 'tan':
        return console.log(tan());
    case 'random':
        return console.log(crypto.randomInt(0,arr[0]))
}

