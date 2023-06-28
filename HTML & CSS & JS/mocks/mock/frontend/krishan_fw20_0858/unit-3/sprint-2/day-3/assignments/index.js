
let data;let our=[];



     function input(){
        let query=document.querySelector("#query").value;
    async function getdata(){
        try{
    
    let res=await fetch("https://www.omdbapi.com/?apikey=e69f7110"+"&t="+query)
            data=await res.json();
            
            console.log(data);
             
        }
        catch(err){
            console.log(err);
        }
    }
   getdata()
     }

     
function filter(){
    document.querySelector("#container").innerHTML='';
    let query=document.querySelector("#query").value;
    
    if(data.Response=="False"){

      let notfound=document.createElement('img');
      notfound.src="https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400006/100130939-error-404-page-not-found-error-with-glitch-effect-on-screen-vector-illustration-for-your-design-.jpg"
      document.querySelector('#container').append(notfound)
    }

    else{
        if(data.Title.toLowerCase().includes(query)){
            let div=document.createElement('div');
            div.setAttribute('id','div')
            let imgdiv=document.createElement('div');

            imgdiv.setAttribute('id','imgdiv')
       let img=document.createElement('img');
       img.src=data.Poster;

       let title=document.createElement('p');
       title.style.fontSize="35px"
       title.style.fontWeight="700"
       title.innerText=data.Title;

       let rel=document.createElement('p');
       rel.innerText=data.Released;

       let act=document.createElement("h3");
       act.innerText=data.Actors;

       let ratings=document.createElement('p');
       ratings.innerText=data.Ratings[0].Value;

            if(data.Ratings[0].Value>="8.5"){
                let rec=document.createElement('p');
                rec.innerText="Recommended";
                div.append(rec)
            }

       let Direct=document.createElement('h3');
       Direct.innerText=data.Director
       let genre=document.createElement('p');
       genre.innerText=data.Genre;

       imgdiv.append(img)
       div.append(title,rel,act,ratings,Direct,genre)
       document.getElementById('container').append(imgdiv)
       document.getElementById('container').append(div)
       }
 

    }

        

}
    
