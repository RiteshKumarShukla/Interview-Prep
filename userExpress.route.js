// Define three routes using App.get() method : one for the root path , one for the /users path ,and one for the /users/:id path (which accepts a URL parameter for the userID). Define a 404 error handling using App.use() method, which will be invoked when no other routes match the incoming request in express.js

const express = require('express');
const app = express();

// Root path route
app.get('/', (req, res) => {
  res.send('Welcome to the root path!');
});

// /users path route
app.get('/users', (req, res) => {
  res.send('Users page');
});

// /users/:id path route
app.get('/users/:id', (req, res) => {
  const userID = req.params.id;
  res.send(`User ID: ${userID}`);
});

// 404 error handling
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
