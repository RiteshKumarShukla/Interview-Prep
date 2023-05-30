let assignment = JSON.parse(localStorage.getItem("assign")) || [];

display(assignment);    


function assign() {
    event.preventDefault()

  let obj = {
    name: document.getElementById("name").value,
  };

  assignment.push(obj);
  display(assignment)
  localStorage.setItem("assign", JSON.stringify(assignment));
}

function display(data) {
document.getElementById('div').innerHTML = null;
  data.forEach((el, ind) => {
    let mdiv=document.createElement('div');
    mdiv.setAttribute('id','mdiv')

    let an = document.createElement("p");
    an.innerText = el.name;

    let but = document.createElement("button");
    but.innerText = "Remove";

    but.addEventListener("click", function () {
      func(ind);
    });
    mdiv.append(an, but);
    document.getElementById('div').append(mdiv)
    document.querySelector("body").append(div);
  });
}



function func(ind) {
  assignment.splice(ind, 1);
  localStorage.setItem("assign", JSON.stringify(assignment));
  display(assignment);
}
