let menu=document.querySelector("#menu")

// 
// link for bucket.html

function bucket(){
    window.location.href="bucket.html"
}   

let data;
async function getdata(){
    try{
        let res=await fetch("https://masai-api.herokuapp.com/coffee/menu");

        data=await res.json();

        let act=data.menu.data;
         
        ourmenu(act)
        console.log(act)
    }
    catch(err){
        console.log(err);
    }
}

getdata()



// Add the coffee to local storage with key "coffee"

let storedata=JSON.parse(localStorage.getItem('coffee'))|| [];
function ourmenu(data){
    menu.innerHTML="";
    let count=1;
    data.forEach(function (el,ind) {
        let mdiv=document.createElement('div');

        let image=document.createElement('img');
        image.src=el.image;

        let name=document.createElement('h2');
        name.innerText=el.title;

        let price=document.createElement('h3');
        price.innerText=el.price;

        let button=document.createElement('button');
        button.innerText="Add to Bucket";
        button.setAttribute('id','add_to_bucket');
        button.addEventListener('click',function(){
            document.getElementById('coffee_count').innerText=count++;
            let obj={}
            obj.image=el.image
            obj.name=el.title;
            obj.price=el.price;
            storedata.push(obj);
            localStorage.setItem('coffee',JSON.stringify(storedata))
        })

        mdiv.append(image,name,price,button)
        menu.append(mdiv);
        
    });
}



function addcoffee(el){
    storedata.push(el);
    
}