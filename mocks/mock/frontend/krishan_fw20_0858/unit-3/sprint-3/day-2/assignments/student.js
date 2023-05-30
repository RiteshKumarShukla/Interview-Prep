let lec=JSON.parse(localStorage.getItem('lecture'));
let assi=JSON.parse(localStorage.getItem('assign'));


// display function 


function display(da,ad){
    da.forEach((el)=>{
        let ln=document.createElement("p");
        ln.innerText=el.name;
        document.getElementById('lec').append(ln)
    })
    ad.forEach((el)=>{
        let ln=document.createElement("p");
        ln.innerText=el.name;
        document.getElementById('assi').append(ln)
    })
}
display(lec,assi)