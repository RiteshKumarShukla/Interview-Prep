let arr=["assignment", "problem", "media", "upload"];

let ans=arr.filter(function (el){
    if(el[0]=="a" || el[el.length-1]=="a"){
        return el;
    }
})
console.log(ans);