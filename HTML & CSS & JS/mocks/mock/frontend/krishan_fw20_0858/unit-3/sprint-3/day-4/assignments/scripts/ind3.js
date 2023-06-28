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
        let p=document.createElement('h3');
        p.innerText=el.strMeal;

        let p1=document.createElement('p');
        p1.innerText=el.strInstructions;

        div.append(img,p,p1)
        location.append(div)
    })
}

export {getdata,appenddata}
