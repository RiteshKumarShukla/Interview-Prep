// Write code related to Home page here

document.querySelector("form").addEventListener("submit",addinfo)

let arr=JSON.parse(localStorage.getItem("task-list")) || [];


// function display(arr){
//   arr.forEach(function (el){
    
    
//   });
// }

// display(arr);

function addinfo(){
    event.preventDefault();
    let obj={
        taskname:document.querySelector("#name").value,
        desc:document.querySelector("#desc").value,
        start:document.querySelector("#start").value,
        end:document.querySelector("#end").value,
        priority:document.querySelector("#priority").value,

    }
    arr.push(obj);
    localStorage.setItem("task-list",JSON.stringify(arr))
    console.log(arr)
}
