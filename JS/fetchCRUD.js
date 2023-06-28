// GET
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));


//POST
const postData = { name: 'John', age: 30 };

fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(postData)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));


//PUT
const putData = { name: 'John Doe', age: 35 };

fetch('https://api.example.com/users/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(putData)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));



//DELETE
fetch('https://api.example.com/users/1', {
  method: 'DELETE'
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
