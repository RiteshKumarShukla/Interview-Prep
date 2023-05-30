let arr=[1,2,3,4,5,6,7,8,9];
let first=arr.filter(function (el){
    return el%3==0;
})
let sec=first.map(function (el){
    return el**3;
})
let final=sec.reduce(function (acc,el){
    return acc+el;
})
console.log(final)