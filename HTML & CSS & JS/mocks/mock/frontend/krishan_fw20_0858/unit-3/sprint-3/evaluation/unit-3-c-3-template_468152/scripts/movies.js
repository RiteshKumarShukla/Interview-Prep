// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page


let id;

let data;

async function main(){
    try{
        let query =document.getElementById('search').value;

        let res= await fetch(`https://www.omdbapi.com/?apikey=e69f7110&s=${query}`);

        data=await res.json();

        let actual=data.Search;

        if(actual!=undefined){
            ourdata(actual)
        }
        console.log(data)
    }
    catch(err){
        console.log(err);
    }
}

main()
let movies=document.getElementById('movies');

let wallet = JSON.parse(localStorage.getItem("amount")) || [];

let h = document.getElementById("wallet");

function display(data) {
  h.innerHTML = null;

  let total = data.map(Number);
  total = total.reduce((ac, el) => {
    return ac + el;
  },0);
  h.innerText = total;
}


display(wallet)



function ourdata(data){
movies.innerHTML=null;

data.forEach((el)=>{
    let mdiv=document.createElement("div");
     mdiv.setAttribute('class','movie_tab');

     mdiv.addEventListener('click',function(){
        change(el)
     })

     let mimg=document.createElement('img');
     mimg.src=el.Poster;

     let p=document.createElement('p');
     p.innerText=el.Title;

     let but=document.createElement('button');
     but.innerText='Book now'
     but.setAttribute('class','book_now');

     but.addEventListener('click',function(){
        let movarr=[];
        movarr.push(el);
        localStorage.setItem('movie',JSON.stringify(movarr))
        window.location.href="checkout.html"
     })
     mdiv.append(mimg,p,but)
     movies.append(mdiv)
})
}


function debounce(func,delay){
    if(id){
        clearTimeout(id)
    }
    id=setTimeout(function (){
        func();

    },delay)
}
