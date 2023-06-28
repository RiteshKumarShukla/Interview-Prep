let movie = document.getElementById("movies");
let data;
let id;
async function main() {
  try {
    let query = document.querySelector("#query").value;
    console.log(query);

    let res = await fetch(`https://swapi.dev/api/people/?search=${query}`);
    data = await res.json();
    let actual = data.results;


      appenddata(actual);
    

    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

function appenddata(data) {
  movie.innerHTML = "";
  data.forEach(function (el) {
    let pdata=document.createElement('div');
    pdata.setAttribute('id','pdata')
    let p = document.createElement("p");
    p.innerText = el.name;
    pdata.append(p);
    movie.append(pdata);
  });
}

function debounce(func, delay) {
  if (id) {
    clearTimeout(id);
  }

  id = setTimeout(function () {
    func();
  }, delay);
}



  