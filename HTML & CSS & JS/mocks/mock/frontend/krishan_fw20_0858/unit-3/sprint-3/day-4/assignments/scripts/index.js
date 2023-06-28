async function getdata(url){
    try{
        let res=await fetch (url);

        let data= await res.json();
         
        return data;
    }
    catch(err){

        console.log(err);
        
    }
}

function appenddata(data,location){


    
    data.forEach((el)=>{
        let div=document.createElement('div');
        let img=document.createElement('img');
        img.src=el.strMealThumb;
        let p=document.createElement('p');
        p.innerText=el.strCategory;

        div.append(img,p)
        location.append(div)
    })
}

export {getdata,appenddata}
