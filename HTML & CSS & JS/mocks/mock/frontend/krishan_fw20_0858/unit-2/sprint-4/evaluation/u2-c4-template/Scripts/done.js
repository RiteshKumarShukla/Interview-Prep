// Write code related to Done page here


// Write code for the Progress page here 

// Write code related to dashboard page here

let donedata=JSON.parse(localStorage.getItem("done-list")) || [];






function display(donedata){
    document.querySelector("tbody").innerHTML="";
    
    donedata.forEach(function (el,ind) {
        
        
        let row=document.createElement("tr");
        let col1=document.createElement("td");
        let col2=document.createElement("td");
        let col3=document.createElement("td");
        let col4=document.createElement("td");
        let col5=document.createElement("td");
     

        col1.innerText=el.taskname;
        col2.innerText=el.desc;
        col3.innerText=el.start;
        col4.innerText=el.end;
        col5.innerText=el.priority;
        
        document.querySelector("tbody").append(row);
        row.append(col1,col2,col3,col4,col5)

        localStorage.setItem("done-list",JSON.stringify(donedata))
    });
}

display(donedata)

