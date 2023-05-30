let users=JSON.parse(localStorage.getItem('student_sign'));
let div=document.createElement('div');
div.setAttribute('id','div');


function display(data){
div.innerHTML=null;
    data.forEach((el,ind)=>{

        let mdiv=document.createElement('div');
        mdiv.setAttribute('id','mdiv')
        let na=document.createElement('p');
        na.innerText=el.username;
       

        let but=document.createElement('button');

        but.innerText="Remove";
        but.addEventListener('click',function (){
            func(ind)
        })

        mdiv.append(na,but);
        div.append(mdiv)
        document.querySelector('body').append(div)
    })
}

display(users)

function func(ind){
    users.splice(ind, 1);
  localStorage.setItem("student_sign", JSON.stringify(users));
  display(users);
}