


function style(){

    return `
    let ud=JSON.parse(localStorage.getItem("user"));
    let img=document.getElementById('image');
    img.src=ud.image;

    let name=document.getElementById('name');
    name.innerText=ud.name;

    let email=document.getElementById('email');
    email.innerText=ud.email;
`
    
}

export default style;
