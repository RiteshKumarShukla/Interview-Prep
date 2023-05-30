let arr=[2,3,4,5,6,7,8,7,9];

let ans=arr.filter(function(el,ind){
    if(ind%2==0 && el%2==0){
        return el;
    }
})
console.log(ans);

