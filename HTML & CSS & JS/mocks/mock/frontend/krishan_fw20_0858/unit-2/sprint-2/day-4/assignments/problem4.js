let arr=["A", "Good", "Problem"];
let ans=arr.filter(function (el){
    return el.length%2==1;
}).map(function (el){
    return el.length;
}).reduce(function (acc,el){
    return acc+el;
})
console.log(ans)