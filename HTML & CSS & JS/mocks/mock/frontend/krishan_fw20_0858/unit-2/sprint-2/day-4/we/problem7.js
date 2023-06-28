let users=[{firstname:"Nrupul",lastname:"dev",place:"banglore"},
{firstname:"Yogesh",lastname:"Bhat",place:"Pune"},
{firstname:"Prateek",lastname:"Shukla",place:"banglore"}]

let ans=users.map(function (el){
    return el["firstname"]+" "+el["lastname"]
})
console.log(ans)