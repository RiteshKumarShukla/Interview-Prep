let container = document.getElementById("container");



const getdata=async(page)=>{

    try{
        let res = await fetch(`http://localhost:3000/posts?_page=${page}&_limit=3`)

       let data = await res.json();
    
        display(data)
        
        console.log(data);
    }

    catch(err){
        console.log(err);
    }
    
}



function display(data){
container.innerHTML=null;

    data.forEach(({title})=>{
        let p=document.createElement("p");

        p.innerText= title;

        container.append(p)
    })


}

const showbuttons=(results,perpage)=>{
        let but=document.getElementById('buttons');

    

        let buttons=Math.ceil(results/perpage);

        for(let x=1;x<=buttons;x++){
            let button=document.createElement('button');

            button.innerText=x;

            button.onclick = function (){

                getdata(x)

            }

            but.append(button)

        }
}
showbuttons(13,3)

// const pagination = (pagenumber) =>{
//     //show result based on click
//     //we need to know page number

//     console.log(pagenumber);

// }

function myfunction(){
    getdata(1)
}



