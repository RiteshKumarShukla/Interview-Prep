let ud=JSON.parse(localStorage.getItem('user'));
let newsContainer=document.getElementById('news_container')


let code=ud.country;

async function getnews(){

    try{
        let res=await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=${code}`)

        let data= await res.json();

        let our=data.articles

        console.log(our);

        display(our)

    }
    
    catch(err){
        console.log(err);
    }

}

getnews()


function display(arr){
    newsContainer.innerHTML="";
    arr.forEach((el)=>{
        let mdiv=document.createElement('div');
        mdiv.setAttribute('id','mdiv')
        ddiv=document.createElement('div')
        ddiv.setAttribute('id','ddiv')
        let img=document.createElement('img');

        img.src=el.urlToImage;

        let head=document.createElement('h3');
        head.innerText=el.title;

        let content=document.createElement('p');
        content.innerText=el.description;
        ddiv.append(head,content)
        mdiv.append(img,ddiv)

        mdiv.addEventListener('click',function (){
            let ob={
                title:el.title,
                image:el.urlToImage,
                content:el.content,
                description:el.description
            }
            localStorage.setItem('gotonews',JSON.stringify(ob));

            window.location.href="news.html"
        })

        newsContainer.append(mdiv)
    })
}



function sidebar(){
    
    let img=document.getElementById('image');
    img.src=ud.image;

    let name=document.getElementById('name');
    name.innerText=ud.name;

    let email=document.getElementById('email');
    email.innerText=ud.email;

}

sidebar()


async function indnews(){
    event.preventDefault()
    newsContainer.innerHTML=null;
    try{
        let res=await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=in`)

        let data= await res.json();

        let our=data.articles

        console.log(our);

        display(our)

    }
    
    catch(err){
        console.log(err);
    }

}

async function chnews(){
    event.preventDefault()
    newsContainer.innerHTML=null;
    try{
        let res=await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=ch`)

        let data= await res.json();

        let our=data.articles

        console.log(our);

        display(our)

    }
    
    catch(err){
        console.log(err);
    }

}



async function nznews(){
    event.preventDefault()
    newsContainer.innerHTML=null;
    try{
        let res=await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=nz`)

        let data= await res.json();

        let our=data.articles

        console.log(our);

        display(our)

    }
    
    catch(err){
        console.log(err);
    }

}

async function usnews(){
    event.preventDefault()
    newsContainer.innerHTML=null;
    try{
        let res=await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=us`)

        let data= await res.json();

        let our=data.articles

        console.log(our);

        display(our)

    }
    
    catch(err){
        console.log(err);
    }

}

async function uknews(){
    event.preventDefault()
    newsContainer.innerHTML=null;
    try{
        let res=await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=uk`)

        let data= await res.json();

        let our=data.articles

        console.log(our);

        display(our)

    }
    
    catch(err){
        console.log(err);
    }

}



    
    async function searchnews(){
        event.preventDefault()
        newsContainer.innerHTML=null;
        try{
            let res=await fetch(`https://masai-mock-api-2.herokuapp.com/news?q=${document.getElementById("search").value}`)
    
            let data= await res.json();
    
            let our = data.articles;
            console.log(data);
    
            display(our)
          
    
        }
        
        catch(err){
            console.log(err);
        }
    
    }
    function searchfun(){

    event.preventDefault()
        searchnews()
        
    }

  