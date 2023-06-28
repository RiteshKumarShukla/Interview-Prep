// Import the necessary modules
const express = require('express');

// Create an instance of Express
const app = express();

// Add your routes and middleware here

// Error handling middleware
app.use((err, req, res, next) => {
  // Check if the error has a status code, otherwise default to 500 (Internal Server Error)
  const statusCode = err.statusCode || 500;

  // Set the response status code
  res.status(statusCode);

  // Send the error response as JSON
  res.json({
    error: {
      message: err.message,
      statusCode: statusCode
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

