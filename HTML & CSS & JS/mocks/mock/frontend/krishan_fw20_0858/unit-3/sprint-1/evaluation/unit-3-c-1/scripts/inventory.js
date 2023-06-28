
document.getElementById("add_more_product").addEventListener("click",function (){
    window.location.href="index.html";

})


let getdata=JSON.parse(localStorage.getItem("products"))|| [];

display(getdata)

function display(arr){
   
    let container=document.getElementById("all_products")
    container.innerHTML="";

    arr.forEach(function(el,ind){
        let cdiv=document.createElement("div");
        let pimage=document.createElement("img");
        pimage.src=el.image;

        let ptype=document.createElement("h2")
        ptype.innerText=el.type;

        let pdesc=document.createElement("h3");
        pdesc.innerText=el.desc;

        let pprice=document.createElement("p");
        pprice.innerText=el.price;

        let rembtn=document.createElement("button");
        rembtn.innerText="Remove";
        rembtn.setAttribute("id","remove_button");

        rembtn.addEventListener("click",function (){
            deleteitem(ind)
        })
        cdiv.append(pimage,ptype,pdesc,pprice,rembtn);

        container.append(cdiv)


    })
}

function deleteitem(ind){
    getdata.splice(ind,1);
    display(getdata);
    localStorage.setItem("products",JSON.stringify(getdata))
}
