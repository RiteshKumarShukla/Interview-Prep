// Store the wallet amount to your local storage with key "amount"
let wallet = JSON.parse(localStorage.getItem("amount")) || [];

function add() {
  event.preventDefault();

  let am = document.getElementById("amount").value;

  wallet.push(am);
  
  localStorage.setItem("amount", JSON.stringify(wallet));

  display(wallet);
  
}



let h = document.getElementById("wallet");

display(wallet);

function display(data) {
  h.innerHTML = null;

  let total = data.map(Number);
  total = total.reduce((ac, el) => {
    return ac + el;
  },0);
  h.innerText = total;
}



function move() {
  window.location.href = "movies.html";
}
