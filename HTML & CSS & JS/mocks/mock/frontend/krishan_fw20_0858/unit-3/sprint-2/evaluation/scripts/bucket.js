// On clicking remove button the item should be removed from DOM as well as localstorage.

let bucketitem=JSON.parse(localStorage.getItem("coffee"))||[];
function BI(data){
  let total=0;
 document.getElementById('bucket').innerHTML=""
    data.forEach(function (el,ind){
        

        let mdiv=document.createElement('div');

        let image=document.createElement('img');
        image.src=el.image;

        let name=document.createElement('h2');
        name.innerText=el.name;

        let price=document.createElement('h3');
        price.innerText=el.price;

        let button=document.createElement('button');
        button.innerText="Remove from Bucket";
        button.setAttribute('id','remove_coffee')
        button.addEventListener('click',function(){
            dltcoffee(ind)
        })
        mdiv.append(image,name,price,button)
        document.getElementById('bucket').append(mdiv);

        if(bucketitem.length==0){
            document.getElementById('total_amount').innerText=0;
        }else{
            let arr= bucketitem.reduce(function(ac,el){
                return ac+el.price
            },0)
        
        console.log(arr)
        document.getElementById('total_amount').innerText=arr
        }
        
    })
}

BI(bucketitem)


  

function dltcoffee(ind){
    bucketitem.splice(ind,1)
    localStorage.setItem("coffee",JSON.stringify(bucketitem));
    BI(bucketitem)
}

document.getElementById('confirm_checkout').addEventListener('click',function(){
    window.location.href="checkout.html"
})