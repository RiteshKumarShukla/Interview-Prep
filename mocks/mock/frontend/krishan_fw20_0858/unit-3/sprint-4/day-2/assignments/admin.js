// post method

async function addproduct() {
  let id = document.getElementById("name").value;

  let title = document.getElementById("image").value;

  let author = document.getElementById("price").value;

  let send_data = {
    name: id,
    image: title,
    price: author,
  };

  // or we can write this is this way(when key and value are same)
  // let send_data={
  //   id,
  //   title,
  //   author
  // }

  let res = await fetch(`http://localhost:3000/products`, {
    method: "POST",

    body: JSON.stringify(send_data),

    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await res.json();

  console.log(data);
}

//delete method

async function deletepost() {
    event.preventDefault()
  let name = document.getElementById("delid").value;

  let res = await fetch(`http://localhost:3000/products/${name}`, {
    method: "DELETE",

    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await res.json();
  console.log(data);
}

//patch request

const updatepost = async () => {
    event.preventDefault()
  let id = document.getElementById("update").value;

  let name = document.getElementById("update_title").value;

  let send_data = {
    name
  };

  let res = await fetch(`http://localhost:3000/products/${id}`, {
    method: "PATCH",

    body: JSON.stringify(send_data),

    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await res.json();
  console.log(data);
};

//put request

let replacepost = async () => {
  let id = document.getElementById("replace_id").value;

  let name = document.getElementById("replace_title").value;

  let send_data = {
    name,
  };

  let res = await fetch(`http://localhost:3000/products/${id}`, {
    method: "PUT",

    body: JSON.stringify(send_data),

    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await res.json();
  console.log(data);
};

function products() {
  window.location.href = "product.html";
}
