let od=JSON.parse(localStorage.getItem('gotonews'));
let ud=JSON.parse(localStorage.getItem('user'));

let newsContainer=document.getElementById('show_news');


function display(arr){

    newsContainer.innerHTML="";
    
        let mdiv=document.createElement('div');
        mdiv.setAttribute('id','mdiv')
        ddiv=document.createElement('div')
        ddiv.setAttribute('id','ddiv')
        let img=document.createElement('img');

        img.src=arr.image;

        let head=document.createElement('h3');
        head.innerText=arr.title;

        let content=document.createElement('p');
        content.innerText=arr.description;

        let des=document.createElement("p");
        des.innerText=arr.content;

        ddiv.append(head,content, des)
        mdiv.append(img,ddiv)



        newsContainer.append(mdiv)
    
}

display(od)


function sidebar(){
    
    let img=document.getElementById('image');
    img.src=ud.image;

    let name=document.getElementById('name');
    name.innerText=ud.name;

    let email=document.getElementById('email');
    email.innerText=ud.email;

}

sidebar()
