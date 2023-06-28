
let counter=0;

let id;

function start(){
    let images=JSON.parse(localStorage.getItem("imagesdata"));

    let cont=document.getElementById("container");

    cont.innerHTML=""

    let img=document.createElement("img");

        img.src=images[counter];

        cont.append(img);

        counter++

     id= setInterval(function(){

        if(counter==images.length){
             counter=0;
        }
        img.src=images[counter];
        counter++;
        cont.append(img)
    }, 1000*(document.getElementById("time").value))
}


function pause(){
    clearInterval(id)
}