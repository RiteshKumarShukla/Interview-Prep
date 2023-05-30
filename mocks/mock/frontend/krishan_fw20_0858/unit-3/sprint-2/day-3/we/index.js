// fetch('https://fakestoreapi.com/products')
//             .then(function (res){
//                 return res.json();
                
//             })
//             .then(function(res){
//                 console.log(res);
//             })
//             .catch(function(err){
//                 console.log(err);
//             })
            
let data;
async function getdata(){
    try{
        let res=await fetch('https://fakestoreapi.com/products')
         data=await res.json();
        appenddata(data);
    }
    catch(err){
        console.log(err);
    }
}

getdata();



function appenddata(data){
    document.getElementById('container').innerHTML=""
    data.forEach(function (el){
        let div=document.createElement('div');

        let img=document.createElement('img');
        img.src=el.image;

        let title=document.createElement('p');
        title.innerText=el.title;

        let price=document.createElement('p');
        price.innerText=el.price;

        div.append(img,title,price)

        document.getElementById('container').append(div)
    })
}


function low(){
    data.sort(function(a,b){
     return a.price-b.price
    })
    appenddata(data)
}
function high(){
    data.sort(function(a,b){
     return b.price-a.price
    })
    appenddata(data)
}

function filter(){
    
    let query=document.getElementById('query').value;
    
let copy_data=data;
    copy_data=copy_data.filter(function(el){
        return el.title.toLowerCase().includes(query)
    });

    appenddata(copy_data)
}