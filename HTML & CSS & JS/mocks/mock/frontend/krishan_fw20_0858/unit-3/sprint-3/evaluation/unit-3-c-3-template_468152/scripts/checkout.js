// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let wallet = JSON.parse(localStorage.getItem("amount")) || [];

let arr = JSON.parse(localStorage.getItem("movie"));



function show() {
  let pimg = document.createElement("img");
  pimg.src = arr[0].Poster;

  let t = document.createElement("p");
  t.innerText = arr[0].Title;



  document.getElementById("movie").append(pimg, t);
}

show(arr[0]);

function sub() {
  let seats = document.getElementById("number_of_seats").value;

  seats = 100 * seats;
f
  let sum = h.innerText;

  if (seats > h.innerText) {
    alert("Insufficient Balance !");
  } else {
    alert("Booking Successful!");
    sum = sum - seats
    document.getElementById("wallet").innerText = sum;

    sum = sum.toString();

    localStorage.removeItem("amount");

    wallet.push(sum);

    localStorage.setItem("amount", JSON.stringify(wallet));
  }
}

let h = document.getElementById("wallet");

function display(data) {
  h.innerHTML = null;

  let total = data.map(Number);
  total = total.reduce((ac, el) => {
    return ac + el;
  }, 0);
  h.innerText = total;
}

display(wallet);
