let mdiv = document.createElement("div");
mdiv.setAttribute('id','mdiv')

let usname = document.createElement("a");
usname.innerText = "user";
usname.href="user.html"

let assgin = document.createElement("a");
assgin.innerText = "assignments";
assgin.href="assignments.html"

let lecture = document.createElement("a");
lecture.innerText = "lectures";
lecture.href="lectures.html"

mdiv.append(usname, assgin, lecture);

document.querySelector("body").append(mdiv);