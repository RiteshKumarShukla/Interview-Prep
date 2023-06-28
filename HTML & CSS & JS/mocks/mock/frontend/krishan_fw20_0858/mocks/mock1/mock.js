//for getting the first result
let page = 1;
let post = 1;
window.addEventListener("load",get_comments(page))

window.addEventListener("scroll",()=>{
    const {scrollHeight, scrollTop, clientHeight} = document.documentElement;
    if(Math.floor(scrollHeight - Math.round(scrollTop) )=== clientHeight){
        page++;
        console.log(page);
        get_comments(page)
    }
});

 async function get_comments (page){
    let response = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`)
    response = await response.json();
let mainDiv = document.querySelector("#main");

    response.map((e,i)=>{
        let div = document.createElement("div");
        div.setAttribute("class","box");
        let sNo = document.createElement("h3");
        sNo.innerText =post++
        let pName = document.createElement("p");
        pName.innerText = `name : ${e.name}`
        let pEmail = document.createElement("p");
        pEmail.innerText = `email : ${e.email}`;
        let pBody = document.createElement("p");
        pBody.innerText = `body : ${e.body}`;
        
        div.append(sNo,pName,pEmail,pBody);
        div.addEventListener("click",()=>{
            onOpenModal(e)
            // console.log('working');
        })
        mainDiv.append(div)
    })
}

get_comments();



let modal = document.querySelector(".modal")
function onOpenModal (e){
    modal.innerHTML = "";
    modal.style.display='block'
    let pEmail= document.createElement("p");
    pEmail.innerText=e.email
    let pName= document.createElement("p");
    pName.innerText = e.name
    let pBody= document.createElement("p");
     pBody.innerText = e.body;
    let close =document.createElement("p");
    close.setAttribute("id","close")
    close.innerText= "X";
    close.addEventListener("click",onCloseModal())
    modal.append(close,pEmail,pName,pBody,)
}

function onCloseModal(e){
    modal.style.display='none'

}
