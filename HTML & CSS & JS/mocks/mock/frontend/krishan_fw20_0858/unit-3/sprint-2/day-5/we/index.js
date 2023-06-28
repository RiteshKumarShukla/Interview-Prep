let movie = document.getElementById("movies");
let data;
let id;
async function main() {
  try {
    let query = document.querySelector("#query").value;
    console.log(query);

    let res = await fetch(`http://www.omdbapi.com/?apikey=e69f7110&s=${query}`);
    data = await res.json();
    let actual = data.Search;

    if (actual != undefined) {
      appenddata(actual);
    }

    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

function appenddata(data) {
  movie.innerHTML = "";
  data.forEach(function (el) {
    let p = document.createElement("p");
    p.innerText = el.Title;

    movie.append(p);
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
