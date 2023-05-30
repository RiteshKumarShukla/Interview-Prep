let key="28224cd72682df30bdd42d6bc74702db"
let container=document.querySelector("#container");
let data;
async function getWeather(){

    try{
        let city=document.querySelector("#city").value;

        let res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
    
        data=await res.json();
        appenddata(data)
        console.log(data);
    }

    catch(err){
        console.log(err);
    }
    
}

function appenddata(data){
    container.innerHTML=""
    let name=document.createElement('p');
    name.innerText=`Name - ${data.name}`

    let temp=document.createElement('p');
    temp.innerText=`Temperature - ${data.main.temp}`

    let hum=document.createElement('p');
    hum.innerText=`Humidity - ${data.main.humidity}`

    let press=document.createElement('p');

    press.innerText=`Pressure - ${data.main.pressure}`

    document.querySelector("#container").append(name,temp,hum,press);

    //appending a map

    document.querySelector("#gmap_canvas").src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
}
