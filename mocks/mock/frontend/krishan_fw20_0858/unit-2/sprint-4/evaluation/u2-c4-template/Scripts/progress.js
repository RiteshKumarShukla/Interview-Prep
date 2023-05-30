// Write code for the Progress page here 

// Write code related to dashboard page here

let donedata=JSON.parse(localStorage.getItem("priority-list")) || [];


let donelist=JSON.parse(localStorage.getItem("done-list")) || [];



function display(donedata){
    document.querySelector("tbody").innerHTML="";
    
    donedata.forEach(function (el,ind) {
        
        
        let row=document.createElement("tr");
        let col1=document.createElement("td");
        let col2=document.createElement("td");
        let col3=document.createElement("td");
        let col4=document.createElement("td");
        let col5=document.createElement("td");
        let col6=document.createElement("td");

        col1.innerText=el.taskname;
        col2.innerText=el.desc;
        col3.innerText=el.start;
        col4.innerText=el.end;
        col5.innerText=el.priority;
        col6.innerText="Add";
        col6.addEventListener("click",function (){
            donelist.push(el);
            localStorage.setItem("done-list",JSON.stringify(donelist))
            deleted(ind)
        })
        document.querySelector("tbody").append(row);
        row.append(col1,col2,col3,col4,col5,col6)

        localStorage.setItem("priority-list",JSON.stringify(donedata))
    });
}

display(donedata)

function deleted(ind){
    donedata.splice(ind,1);
    localStorage.setItem("priority-list",JSON.stringify(donedata));
    display(donedata)
}