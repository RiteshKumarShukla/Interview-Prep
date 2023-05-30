//store the products array in localstorage as "products"

let arr=JSON.parse(localStorage.getItem("products")) || [];

function profun(event){
    event.preventDefault();

    let form= document.getElementById("fproducts");
    let ptype=form.type.value;
    let pdesc=form.desc.value;
    let pprice=form.price.value;
    let pimage=form.image.value;

    let productObject= new procf(ptype,pdesc,pprice,pimage);

    arr.push(productObject);

    localStorage.setItem("products",JSON.stringify(arr))
}

let showbtn=document.getElementById("show_products")

showbtn.addEventListener("click",function (){
    window.location.href="inventory.html"
})


function procf(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i
}