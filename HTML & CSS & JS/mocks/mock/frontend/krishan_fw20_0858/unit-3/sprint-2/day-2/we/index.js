let img=document.getElementById("img");

function getdata(){
    return true;
}

let myPromise= new Promise(function(resolve,reject){
    let data=false;

    setTimeout(function  (){
        data=getdata();

    if(data){
        resolve("sweets")
    }
    else{
        reject("chappal")
    }
    },3000)

    
})
myPromise.then(function(res){
    img.src="https://media0.giphy.com/media/Q81NcsY6YxK7jxnr4v/200w.webp?cid=ecf05e47du9rfrb5n1wqylpwka83yq4zksqob66dao6h9zsx&rid=200w.webp&ct=g"
})

myPromise.catch(function(rej){
    console.log(rej);
})
console.log(myPromise)