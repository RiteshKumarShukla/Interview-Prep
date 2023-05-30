let arr=[1,2,3,4,5,6,7,8,9];
    let ans=arr.filter(function(el){
        return el%2==1;
    })
    let final=ans.reduce(function(acc,el){
        return acc+el;
    })
    console.log(final)