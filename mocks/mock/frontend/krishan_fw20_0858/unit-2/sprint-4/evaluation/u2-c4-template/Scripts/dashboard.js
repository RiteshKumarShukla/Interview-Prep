// Write code related to dashboard page here

let priordata=JSON.parse(localStorage.getItem("task-list")) || [];


let priorlist=JSON.parse(localStorage.getItem("priority-list")) || [];

let taskcount=document.querySelector("#task-count")

document.querySelector("#filter").addEventListener("change",function(){
    let filval=document.querySelector("#filter").value;
    if(filval==""){
        display(priordata)
    }
    else{
        let filtered=priordata.filter(function(el){
             return el.priority==filval
        })
        display(filtered)
    }
    
})

function display(priordata){
    document.querySelector("tbody").innerHTML="";
    let task=0;
    priordata.forEach(function (el,ind) {
        
        task=priordata.length;
        taskcount.innerText=task;
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
            priorlist.push(el);
            localStorage.setItem("priority-list",JSON.stringify(priorlist))
            deleted(ind)
        })
        document.querySelector("tbody").append(row);
        row.append(col1,col2,col3,col4,col5,col6)

        localStorage.setItem("task-list",JSON.stringify(priordata))
    });
}

display(priordata)

function deleted(ind){
    priordata.splice(ind,1);
    localStorage.setItem("task-list",JSON.stringify(priordata));
    display(priordata)
}